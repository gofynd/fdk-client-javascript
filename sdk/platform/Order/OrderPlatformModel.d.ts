export = OrderPlatformModel;
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
 * @typedef ErrorResponse
 * @property {number} [status] - The HTTP status code corresponding to the error.
 * @property {boolean} [success] - Indicates whether the operation was
 *   successful. Always false in the case of an error.
 * @property {string} message - A message describing the error that occurred.
 * @property {string} [error_trace] - Error trace of the error that occurred.
 * @property {string} [error]
 */
/**
 * @typedef LogErrorResponse
 * @property {number} [status]
 * @property {string} [message]
 */
/**
 * @typedef QuestionErrorResponse
 * @property {string} [type]
 * @property {string} [value]
 * @property {Object} [message]
 */
/**
 * @typedef RefundStateConfigurationByPaymentType
 * @property {string[]} [states]
 * @property {boolean} [allow_refund_initiate]
 */
/**
 * @typedef PostRefundStateConfiguration
 * @property {RefundStateConfigurationByPaymentType} [prepaid]
 * @property {RefundStateConfigurationByPaymentType} [non_prepaid]
 * @property {RefundStateConfigurationByPaymentType} [mix_mop]
 */
/**
 * @typedef PostRefundStateConfigurationResponse
 * @property {string} [refund_config]
 * @property {boolean} [success]
 */
/**
 * @typedef GetRefundStateConfigurationResponse
 * @property {boolean} [success]
 * @property {PostRefundStateConfiguration} [config]
 */
/**
 * @typedef RefundStates
 * @property {string} [state]
 * @property {string} [display_name]
 */
/**
 * @typedef GetRefundStates
 * @property {boolean} [success]
 * @property {RefundStates[]} [items]
 * @property {number} [status]
 */
/**
 * @typedef RefundStateManualWithoutMessage
 * @property {boolean} [is_manual]
 */
/**
 * @typedef RefundStateManualWithMessage
 * @property {boolean} [is_manual]
 * @property {string} [message]
 */
/**
 * @typedef RefundStateManualWithMessageData
 * @property {RefundStateManualWithMessage} [prepaid]
 * @property {RefundStateManualWithMessage} [non_prepaid]
 * @property {RefundStateManualWithMessage} [mix_mop]
 */
/**
 * @typedef RefundStateConfigurationManualSchema
 * @property {RefundStateManualWithoutMessage} [prepaid]
 * @property {RefundStateManualWithoutMessage} [non_prepaid]
 * @property {RefundStateManualWithoutMessage} [mix_mop]
 */
/**
 * @typedef RefundStateConfigurationManualSchemaResponse
 * @property {boolean} [success]
 * @property {RefundStateManualWithMessageData} [data]
 */
/**
 * @typedef RefundSubOption
 * @property {number} [id] - ID of the refund sub-option
 * @property {string} [name] - Name of the refund sub-option
 * @property {string} [display_name] - Display name of the refund sub-option
 * @property {boolean} [is_active] - Whether the refund sub-option is active
 */
/**
 * @typedef RefundBreakup
 * @property {string} [mode] - Specifies the method or channel through which the
 *   refund is divided or processed, such as Online or Offline. This indicates
 *   how the refund amount is split across different refund methods.
 * @property {number} [amount] - Amount for the refund breakup
 * @property {string} [display_name] - Display name for the refund breakup mode
 * @property {boolean} [offline] - Whether the breakup is offline
 */
/**
 * @typedef RefundOptionShipmentResponse
 * @property {number} [id] - ID of the refund option
 * @property {string} [name] - Name of the refund option
 * @property {string} [display_name] - Display name of the refund option
 * @property {boolean} [is_active] - Whether the refund option is active
 * @property {RefundBreakup[]} [breakups] - List of refund breakups (optional)
 * @property {RefundSubOption[]} [option] - List of sub-options for the refund option
 * @property {boolean} [offline] - Whether the refund option is offline
 * @property {number} [amount] - Amount for the refund option (optional)
 * @property {string} [slug] - Slug of refund option
 * @property {string} [value] - Value of refund for this refund option
 * @property {string} [type] - Type of refund option
 */
/**
 * @typedef CurrencySchema
 * @property {string} [currency_code] - The currency code (e.g., INR)
 * @property {string} [currency_symbol] - The symbol of the currency (e.g., ?)
 */
/**
 * @typedef RefundOptionsSchemaResponse
 * @property {boolean} [success]
 * @property {CurrencySchema} [currency]
 * @property {RefundOptionShipmentResponse[]} [refund_options]
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
 * @typedef StoreReassignResponse
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
 * @property {string} entity_type - Expected entity_type: [bags, shipments]
 * @property {string} action - Expected Actions: [lock, unlock, check]
 * @property {string} action_type - Expected action_type: [complete,
 *   operational, financial]
 * @property {string} [user_id] - The ID of the user.
 * @property {Entities[]} entities - Shipment/Entity
 * @property {boolean} [resume_tasks_after_unlock]
 */
/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_shipment_id] - Affiliate Shipment ID
 * @property {string} [affiliate_id] - Affiliate ID
 * @property {string} [shipment_id] - Shipment ID
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
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CheckResponse[]} [check_response] - Entity Lock Status, If the
 *   action input as 'check'
 * @property {number} [status] - Status
 */
/**
 * @typedef AnnouncementResponse
 * @property {string} [to_datetime]
 * @property {number} id
 * @property {string} [description]
 * @property {string} [platform_name]
 * @property {string} [from_datetime]
 * @property {string} [platform_id]
 * @property {string} [title]
 * @property {number} [company_id]
 * @property {string} [logo_url]
 * @property {string} [created_at]
 */
/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [status]
 */
/**
 * @typedef Click2CallResponse
 * @property {string} call_id - Call ID from the provider
 * @property {boolean} success - Success
 */
/**
 * @typedef ErrorDetail
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [status]
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
 * @property {Object} [data]
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
 * @property {number} [quantity] - The quantity of the product or item. This
 *   indicates how many units of the product are being referenced or processed,
 *   such as the number of items in a bag or shipment.
 */
/**
 * @typedef ProductsDataUpdates
 * @property {ProductsDataUpdatesFilters[]} [filters] - Filter for the Product/Bag
 * @property {Object} [data]
 */
/**
 * @typedef EntitiesDataUpdates
 * @property {Object[]} [filters]
 * @property {Object} [data]
 */
/**
 * @typedef RepricedProductsDataUpdates
 * @property {number} [line_number] - A unique identifier to filter the product
 *   or bag within the shipment.
 * @property {string} [identifier] - A seller's product identifier used to
 *   filter the bag within the shipment.
 * @property {number} [price] - Adjusted price of the bag.
 */
/**
 * @typedef DataUpdates
 * @property {OrderItemDataUpdates[]} [order_item_status]
 * @property {ProductsDataUpdates[]} [products]
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {RepricedProductsDataUpdates[]} [repriced_products] - To update the
 *   prices of the line items and trigger the repricing event process.
 */
/**
 * @typedef TransitionComments
 * @property {string} [title] - Title of the comment
 * @property {string} [message] - Comment to be added
 */
/**
 * @typedef ShipmentsRequest
 * @property {string} identifier - Shipment ID
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products] - Product/Bag to be updated
 * @property {DataUpdates} [data_updates]
 * @property {TransitionComments[]} [transition_comments]
 */
/**
 * @typedef StatuesRequest
 * @property {string} [status]
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [exclude_bags_next_state] - State to be change for
 *   Remaining Bag/Products
 * @property {boolean} [split_shipment] - Flag to split shipment
 */
/**
 * @typedef ActionRequest
 * @property {string} [action] - Action Enum for Corresponding state name
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [exclude_bags_next_state] - State to be change for
 *   Remaining Bag/Products
 * @property {boolean} [split_shipment] - Flag to split shipment
 */
/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [force_transition] - Force Transition
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [lock_after_transition] - Lock Shipment After Transition
 * @property {boolean} [unlock_before_transition] - Unlock Shipment After Transition
 * @property {boolean} [task] - To Run Status Update as a background Task
 * @property {boolean} [resume_tasks_after_unlock] - Resume Tasks After Unlock
 */
/**
 * @typedef UpdateShipmentActionRequest
 * @property {boolean} [force_transition] - Force Transition
 * @property {ActionRequest[]} [statuses]
 * @property {boolean} [lock_after_transition] - Lock Shipment After Transition
 * @property {boolean} [unlock_before_transition] - Unlock Shipment After Transition
 * @property {boolean} [task] - To Run Status Update as a background Task
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
 * @property {string} _id
 * @property {number} brand_id
 * @property {Object} dimension
 * @property {Object} category
 * @property {Object} weight
 * @property {Object} attributes
 * @property {number} quantity
 */
/**
 * @typedef LocationDetails
 * @property {string} fulfillment_type
 * @property {ArticleDetails[]} articles
 * @property {number} fulfillment_id
 */
/**
 * @typedef ShipmentDetails
 * @property {string} [box_type]
 * @property {number} shipments
 * @property {number} fulfillment_id
 * @property {ArticleDetails[]} articles
 * @property {string} [dp_id]
 * @property {Object} [meta]
 * @property {string} affiliate_shipment_id
 * @property {Object} [dp_options]
 * @property {boolean} [lock_status]
 * @property {Object} [action_to_status]
 */
/**
 * @typedef ShipmentConfig
 * @property {LocationDetails} [location_details]
 * @property {string} source
 * @property {string} to_pincode
 * @property {ShipmentDetails[]} shipment
 * @property {string} identifier
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
 * @property {Object} identifier
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
 * @property {Object} affiliate_meta
 * @property {string} modified_on
 * @property {number} transfer_price
 */
/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
 */
/**
 * @typedef OrderInfo
 * @property {string} [affiliate_order_id]
 * @property {number} cod_charges
 * @property {Object} items
 * @property {number} discount
 * @property {OrderUser} billing_address
 * @property {Object} [payment]
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
 * @property {string} updated_at
 * @property {string} name
 * @property {string} token
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} owner
 * @property {string} secret
 * @property {string} created_at
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
 * @property {Object} [store]
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
 * @property {number} [app_company_id] - Identifier of the application company
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
 * @property {DPConfiguration} [dp_configuration]
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
 * @typedef CreateOrderPayload
 * @property {string} affiliate_id
 * @property {OrderInfo} order_info
 * @property {OrderConfig} order_config
 */
/**
 * @typedef CreateOrderResponse
 * @property {string} [fynd_order_id]
 */
/**
 * @typedef DispatchManifest
 * @property {string} manifest_id
 */
/**
 * @typedef SuccessResponse
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
 * @typedef GetActionsResponse
 * @property {ActionInfo[]} [permissions]
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
 * @typedef HistoryReason
 * @property {string} [text]
 * @property {string} [category]
 * @property {string} [state]
 * @property {string} [dislay_name]
 * @property {number} [code]
 * @property {number} [quantity]
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
 * @property {string} [store_code]
 * @property {string} [billsec]
 * @property {string} [recordpath]
 * @property {string} [status2]
 * @property {string} [callerid]
 * @property {string} [duration]
 * @property {string} [channel_type]
 * @property {string} [activity_comment]
 * @property {string} [activity_type]
 * @property {string} [receiver]
 * @property {string} [recipient]
 * @property {string} [slug]
 * @property {string} [message]
 * @property {string} [type]
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
 * @property {Object} [user_details] - User Details
 * @property {string} [display_message] - Display Message
 * @property {number} [bag_id] - Bag ID
 * @property {string} [ticket_url] - Ticket URL
 * @property {string} [l3_detail] - L3 details of bag
 * @property {string} createdat - Create date
 * @property {string} [ticket_id] - Ticket ID
 * @property {string} type - Type of history, Expected Values: [
 *   activity_status, activity_escalation, activity_comment,
 *   outbound_notification, outbound_voice ]
 * @property {string} [l2_detail] - L2 details of bag
 * @property {string} [assigned_agent] - Assigned Agent
 * @property {HistoryMeta} [meta] - Meta
 * @property {string} [l1_detail] - L1 details of bag
 * @property {string} message - History Message or comment
 * @property {string} user - User who created the history
 * @property {string} [created_ts]
 */
/**
 * @typedef ShipmentHistoryResponse
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
 * @property {number} days - Days
 * @property {string} reason - Reason
 * @property {string} [shipment_id] - ShipmentId
 * @property {string} phone_number - Phone number for communication
 * @property {number} [amount_paid] - Data mapped in Communication template: amount_paid
 * @property {string} [order_id] - OrderId
 * @property {string} [payment_mode] - Data mapped in Communication template: payment_mode
 * @property {string} [customer_name] - Data mapped in Communication template:
 *   customer_name
 * @property {string} [brand_name] - Data mapped in Communication template: brand_name
 * @property {string} message - Message to be send in SMS
 * @property {string} country_code - Country code for SMS
 */
/**
 * @typedef SendSmsPayload
 * @property {string} bag_id - Bag_id for the activity history track
 * @property {SmsDataPayload} [data]
 * @property {string} slug - Slug name for the template mapped in pointblank
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
 * @property {number} [status_code]
 * @property {boolean} success
 * @property {OrderStatusData[]} [result]
 */
/**
 * @typedef SendSmsResponse
 * @property {boolean} success
 * @property {string} message
 */
/**
 * @typedef Dimension
 * @property {string} [packaging_type]
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
 * @typedef UpdatePackagingDimensionsResponse
 * @property {string} [message]
 */
/**
 * @typedef Tax
 * @property {string} name
 * @property {number} rate
 * @property {Object[]} [breakup]
 * @property {Amount} amount
 */
/**
 * @typedef Amount
 * @property {number} [value]
 * @property {string} [currency]
 */
/**
 * @typedef Charge
 * @property {string} name - The name of the charge.
 * @property {Amount} amount - The monetary value of the charge, including value
 *   and currency details.
 * @property {Tax} [tax]
 * @property {string} [code] - An optional code associated with the charge for
 *   internal tracking.
 * @property {string} type - The category or type of the charge.
 */
/**
 * @typedef CurrencyValueSchema
 * @property {number} value - The numerical value of the charge.
 * @property {string} currency - The currency code (e.g., USD, INR).
 */
/**
 * @typedef AmountSchema
 * @property {CurrencyValueSchema} ordering_currency
 * @property {CurrencyValueSchema} base_currency
 */
/**
 * @typedef DynamicChargeTaxSchema
 * @property {string} reporting_hsn_code - HSN (Harmonized System of
 *   Nomenclature) code for reporting purposes.
 */
/**
 * @typedef RuleConditionsSchema
 * @property {string} article_tag - The tag for the article.
 * @property {string[]} department - List of applicable departments.
 */
/**
 * @typedef RuleSchema
 * @property {RuleConditionsSchema} conditions
 */
/**
 * @typedef DistributionSchema
 * @property {string} type - Type of distribution (single or multi).
 * @property {string} logic - Logic for distribution (apportion, equally).
 * @property {RuleSchema} [rule]
 */
/**
 * @typedef DistributionLogicSchema
 * @property {string} distribution_level - The level at which the charge is
 *   distributed (order, article, shipment).
 * @property {DistributionSchema} distribution
 */
/**
 * @typedef DynamicChargeSchema
 * @property {string} name - The name of the charge.
 * @property {string} type - The category or type of the charge.
 * @property {string} [code] - An optional code associated with the charge for
 *   internal tracking.
 * @property {AmountSchema} amount
 * @property {DynamicChargeTaxSchema} [taxes]
 * @property {Object} [meta] - Meta data of the custom charge.
 * @property {DistributionLogicSchema} [distribution_logic]
 */
/**
 * @typedef LineItem
 * @property {Charge[]} charges - These are the mandatory charges required
 *   during order creation and are integral to the order processing flow. They
 *   include fields like amount_paid, discount, and price_marked. The schema for
 *   these charges is predefined and remains consistent, ensuring seamless
 *   forward mapping in the code.
 * @property {Object} [meta] - Meta data of the articles or line items.
 * @property {string} [custom_message] - Meta data of the articles or line items.
 * @property {number} [quantity] - Quantity of the articles or line items.
 * @property {string} seller_identifier - Seller identifier of the articles or line items.
 * @property {string} [external_line_id] - External unique identifier of the
 *   articles or line items.
 * @property {DynamicChargeSchema[]} [dynamic_charges] - (Optional) These are
 *   additional charges specified by the client based on specific use cases.
 *   They allow for flexibility in adding new fields such as installation_fee,
 *   service_charge, or other dynamic costs.
 */
/**
 * @typedef ProcessingDates
 * @property {Object} [dp_pickup_slot]
 * @property {string} [dispatch_after_date]
 * @property {string} [dispatch_by_date]
 * @property {string} [confirm_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [pack_by_date]
 */
/**
 * @typedef Shipment
 * @property {LineItem[]} line_items
 * @property {string} [external_shipment_id] - External shipment identifier or
 *   marketplace's unique shipment identifier.
 * @property {string} [external_location_id]
 * @property {ProcessingDates} [processing_dates]
 * @property {Object} [meta] - Meta data of the shipment.
 * @property {number} [priority] - Integer value indicating high and low priority.
 * @property {number} [location_id] - Location Identifier or Store/Fulfillment
 *   Identifier of the shipment- This field is mandatory when
 *   optimal_shipment_creation flag is set to false, indicating that shipments
 *   must be associated with a specific location. When
 *   `optimal_shipment_creation` is true, the optimal location for order
 *   creation would be assigned, location_id becomes optional.
 * @property {string} [order_type] - The order type of shipment HomeDelivery -
 *   If the customer wants the order home-delivered PickAtStore - If the
 *   customer wants the handover of an order at the store itself.
 * @property {string} [parent_type]
 * @property {string} [store_invoice_id]
 * @property {string} [lock_status]
 * @property {string} [type]
 * @property {Address} [billing_address_json]
 * @property {string} [id]
 * @property {number} [fulfilment_priority]
 * @property {boolean} [is_active]
 * @property {string} [previous_shipment_id]
 * @property {Object} [pdf_links]
 * @property {Address} [delivery_address_json]
 * @property {string} [eway_bill_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [fynd_order_id]
 * @property {string[]} [tags]
 * @property {string} [created_at]
 * @property {string} [delivery_awb_number]
 * @property {Address} [hand_over_contact_json]
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
 * @typedef ShippingInfo
 * @property {string} [alternate_mobile_number]
 * @property {string} [state]
 * @property {string} [customer_code]
 * @property {string} [shipping_type]
 * @property {string} [middle_name]
 * @property {string} [primary_mobile_number]
 * @property {string} [last_name]
 * @property {Object} [geo_location]
 * @property {string} [gender]
 * @property {string} [house_no]
 * @property {string} [first_name]
 * @property {string} [title]
 * @property {string} [landmark]
 * @property {string} [country]
 * @property {string} [address_type]
 * @property {string} [state_code]
 * @property {string} [city]
 * @property {string} [external_customer_code]
 * @property {string} [floor_no]
 * @property {string} [alternate_email]
 * @property {Object[]} [slot]
 * @property {string} [address]
 * @property {string} [area]
 * @property {string} [address1]
 * @property {string} [pincode]
 * @property {string} [primary_email]
 * @property {string} [address2]
 * @property {string} [country_code]
 */
/**
 * @typedef BillingInfo
 * @property {string} [alternate_mobile_number]
 * @property {string} [state]
 * @property {string} [customer_code]
 * @property {string} [middle_name]
 * @property {string} [primary_mobile_number]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [house_no]
 * @property {string} [first_name]
 * @property {string} [title]
 * @property {string} [country]
 * @property {string} [state_code]
 * @property {string} [city]
 * @property {string} [external_customer_code]
 * @property {string} [floor_no]
 * @property {string} [alternate_email]
 * @property {string} [address]
 * @property {string} [area]
 * @property {string} [address1]
 * @property {string} [pincode]
 * @property {string} [primary_email]
 * @property {string} [address2]
 * @property {string} [landmark]
 * @property {string} [country_code]
 */
/**
 * @typedef UserInfo
 * @property {string} [user_id]
 * @property {string} [user_type]
 * @property {string} primary_email
 * @property {string} [gender]
 * @property {string} first_name
 * @property {string} [last_name]
 * @property {string} primary_mobile_number
 * @property {boolean} [is_authenticated]
 * @property {Object} [meta]
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
 * @property {Object} [meta]
 * @property {Object} [transaction_data]
 * @property {boolean} collected
 * @property {string} display_name
 * @property {string} merchant_transaction_id
 */
/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */
/**
 * @typedef CurrencyInfoCurrency
 * @property {string} [currency_code]
 * @property {string} [currency_name]
 * @property {string} [currency_sub_unit]
 * @property {string} [currency_symbol]
 */
/**
 * @typedef CurrencyInfoConversionRate
 * @property {Object} [rates]
 * @property {string} [base]
 * @property {number} [timestamp]
 */
/**
 * @typedef CurrencyInfo
 * @property {CurrencyInfoCurrency} [currency]
 * @property {string} [order_currency]
 * @property {ConversionRate} [conversion_rate]
 * @property {OrderingCurrency} [ordering_currency]
 */
/**
 * @typedef ConfigPayment
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */
/**
 * @typedef ConfigDpConfiguration
 * @property {string} [shipping_by]
 * @property {string} [refund_by]
 * @property {string} [mode]
 */
/**
 * @typedef ConfigApplication
 * @property {string} id
 * @property {string} [logo]
 */
/**
 * @typedef CreateOrderAPI
 * @property {Shipment[]} shipments
 * @property {Object} shipping_info
 * @property {Object} billing_info
 * @property {CurrencyInfo} [currency_info]
 * @property {string} [external_order_id]
 * @property {string} [external_shipment_id]
 * @property {string} [order_type]
 * @property {Charge[]} [charges] - These are the mandatory charges required
 *   during order creation and are integral to the order processing flow. They
 *   include fields like amount_paid, discount, and price_marked, etc.. The
 *   schema for these charges is predefined and remains consistent, ensuring
 *   seamless forward mapping in the code.
 * @property {string} [external_creation_date]
 * @property {Object} [meta]
 * @property {TaxInfo} [tax_info]
 * @property {CreateOrderConfig} [config]
 * @property {PaymentInfo} payment_info
 * @property {UserInfo} [user_info]
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [lock_after_transition]
 * @property {DynamicChargeSchema[]} [dynamic_charges] - (Optional) These are
 *   additional charges specified by the client based on specific use cases.
 *   They allow for flexibility in adding new fields such as installation_fee,
 *   service_charge, or other dynamic costs.
 */
/**
 * @typedef CreateOrderErrorReponse
 * @property {boolean} [success]
 * @property {string} [errors]
 * @property {string} [fynd_order_id]
 */
/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
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
 * @property {DpConfiguration} [dp_configuration]
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
 * @typedef CreateChannelConifgErrorResponse
 * @property {string} [error]
 */
/**
 * @typedef CreateChannelConfigResponse
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
 * @property {string} [message]
 * @property {number} [status]
 */
/**
 * @typedef OrderData
 * @property {string} [key] - The unique identifier for the data item within an order.
 * @property {Object} [value] - Defines new value for the order property. Direct
 *   assignment occurs for basic types (string, number, etc.). For objects, it
 *   updates or adds specific fields without replacing the entire property.
 * @property {string} [order_date] - Order created timestamp
 * @property {string} [created_ts] - Order created timestamp
 * @property {TaxDetails} [tax_details]
 * @property {Object} [meta] - Meta object for extra data
 * @property {string} [fynd_order_id] - System generated unique identifier of the order
 * @property {Prices} [prices]
 * @property {PriceAdjustmentCharge[]} [charges] - Order level charges
 * @property {Object} [payment_methods] - Object containing payment methods used
 *   for placing an order. The key will be COD if Cash on Delivery (COD) payment
 *   mode is used, and the corresponding value will provide information about
 *   that payment method. If Partner Pay is used, the key will be PP with
 *   relevant payment details.
 * @property {PaymentInfoData[]} [payment_info] - Array of object containing
 *   payment methods used for placing an order.
 * @property {string} [affiliate_order_id] - Identifier of the order assigned by
 *   the application
 */
/**
 * @typedef OrderUpdatePayload
 * @property {OrderData[]} [data]
 */
/**
 * @typedef OrderUpdateResponseDetail
 * @property {boolean} [success] - Indicates whether the order update was successful.
 * @property {string} [message] - Provides a message related to the order update
 *   operation, which could be an error message or a success confirmation.
 * @property {Object} [validation_errors] - An object containing any validation
 *   errors that occurred during the order update process.
 */
/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */
/**
 * @typedef OrderStatus
 * @property {FyndOrderIdList[]} [order_details]
 * @property {string} start_date
 * @property {string} end_date
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
 * @property {number} seller_id
 * @property {string} customer_mobile_number
 */
/**
 * @typedef CreditBalanceInfo
 * @property {number} [total_credited_balance]
 * @property {string} [reason]
 * @property {string} [customer_mobile_number]
 * @property {boolean} [is_cn_locked]
 * @property {number} [total_locked_amount]
 * @property {number} [allowed_redemption_amount]
 */
/**
 * @typedef FetchCreditBalanceResponsePayload
 * @property {string} [message]
 * @property {number} [status]
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
 * @typedef RefundModeInfoFormat
 * @property {string} [refund_to]
 * @property {Object} [manual_refund_data]
 */
/**
 * @typedef RefundModeInfo
 * @property {RefundModeInfoFormat} [format]
 * @property {boolean} [is_active]
 * @property {string} [slug]
 * @property {RefundOption[]} [options]
 * @property {string} [display_name]
 */
/**
 * @typedef RefundModeConfigResponsePayload
 * @property {boolean} success
 * @property {number} [status]
 * @property {string} [message]
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
 * @property {string} [country_code]
 */
/**
 * @typedef AttachOrderUser
 * @property {AttachUserOtpData} otp_data
 * @property {string} fynd_order_id
 * @property {AttachUserInfo} user_info
 */
/**
 * @typedef AttachOrderUserResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [status]
 */
/**
 * @typedef AttachOrderUserErrorResponse
 * @property {boolean} [success]
 * @property {number} [status]
 * @property {string} [message]
 */
/**
 * @typedef SendUserMobileOTP
 * @property {string} mobile
 * @property {string} [country_code]
 */
/**
 * @typedef PointBlankOtpData
 * @property {string} [request_id]
 * @property {number} [resend_timer]
 * @property {string} [message]
 * @property {number} [mobile]
 */
/**
 * @typedef SendUserMobileOtpResponse
 * @property {number} [status]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {PointBlankOtpData} [data]
 */
/**
 * @typedef VerifyOtpData
 * @property {string} request_id
 * @property {string} mobile
 * @property {string} otp_code
 */
/**
 * @typedef VerifyMobileOTP
 * @property {VerifyOtpData} otp_data
 * @property {string} fynd_order_id
 */
/**
 * @typedef VerifyOtpResponseData
 * @property {string} [mobile]
 * @property {string} [email]
 * @property {string} [message]
 * @property {string} [fynd_order_id]
 * @property {string} [country_code]
 */
/**
 * @typedef VerifyOtpResponse
 * @property {number} [status]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {VerifyOtpResponseData} [data]
 */
/**
 * @typedef VerifyOtpErrorResponseData
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef VerifyOtpErrorResponse
 * @property {number} [status]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {VerifyOtpErrorResponseData} [data]
 */
/**
 * @typedef BulkReportsDownloadRequest
 * @property {string[]} [store_ids] - Download for specific store ids.
 * @property {string} [lane_type]
 * @property {string} [custom_headers] - Download report with specific headers
 * @property {string} [report_type] - Type of report
 * @property {string} [start_date] - UTC start date in ISO format
 * @property {string} [end_date] - UTC end date in ISO format
 * @property {string[]} [entities] - Download for specific enitites, entities
 *   can be bag, shipment or order_id, etc.
 * @property {string} [filter_type]
 * @property {boolean} [is_cross_company_enabled] - Download lanes for cross company.
 * @property {Object} [custom_filters_for_lane]
 * @property {Object} [filters] - Download report with given filters -
 *   shipment_status, dates, payment_mode, sales_channels etc.
 */
/**
 * @typedef BulkReportsDownloadResponse
 * @property {boolean} [success]
 * @property {string} [batch_id]
 */
/**
 * @typedef BulkFailedResponse
 * @property {boolean} [status]
 * @property {string} [error]
 */
/**
 * @typedef BulkStateTransistionRequest
 * @property {string} [url]
 * @property {string} [file_name]
 */
/**
 * @typedef BulkStateTransistionResponse
 * @property {boolean} [status]
 * @property {string} [message]
 * @property {string} [batch_id]
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
 * @property {number} [store_id]
 * @property {string} [uploaded_on]
 * @property {number} [company_id]
 * @property {ShipmentActionInfo} [shipments_action_info]
 * @property {boolean} [is_invoiceable]
 * @property {string} [user_name]
 * @property {string} [file_url]
 * @property {Object} [meta]
 * @property {string} [invoice_document_type]
 * @property {string} [label_document_type]
 * @property {string} [file_name]
 * @property {string} [store_name]
 * @property {number} [updated_ts]
 * @property {boolean} [status]
 * @property {string} [store_code]
 * @property {string} [bulk_action_type]
 * @property {string} [created_ts]
 * @property {string} [invoice_status]
 * @property {boolean} [do_invoice_label_generated]
 * @property {number} [id]
 * @property {string} [user_id]
 * @property {string} [last_selected_invoice_label_type]
 * @property {string} [batch_id]
 * @property {string} [uploaded_by]
 * @property {number} [failed_sh_count]
 * @property {number} [successful_sh_count]
 * @property {number} [successful_invoiced_count]
 * @property {number} [failed_invoiced_count]
 * @property {number} [total_shipments_count]
 * @property {number} [total_count]
 * @property {string[]} [failed_shipments]
 * @property {number} [total_invoiced_count]
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
 * @typedef BulkListingResponse
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
 * @typedef JobDetailsResponse
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
 * @typedef JobFailedResponse
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
 * @property {string} [from_date]
 * @property {string} [to_date]
 * @property {string} [end_date]
 * @property {string} [start_date]
 */
/**
 * @typedef Filters
 * @property {DateRange} [date_range]
 * @property {number} [stores]
 * @property {string} [dp_name]
 * @property {string} [dp_ids]
 * @property {string} [lane]
 * @property {string} [selected_shipments]
 * @property {string} [deselected_shipments]
 * @property {string} [store_name]
 * @property {string} [type]
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
 * @property {string} [media_type]
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
 * @property {string} created_at
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
 * @typedef FiltersRequest
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
 * @property {FiltersRequest} filters
 * @property {string} action
 * @property {string} unique_id
 * @property {string} [manifest_id]
 */
/**
 * @typedef ProcessManifestResponse
 * @property {number} [company_id]
 * @property {Filters} [filters]
 * @property {string} [user_id]
 * @property {string} [manifest_id]
 * @property {string} [action]
 * @property {string} [uid]
 * @property {string} [created_by]
 */
/**
 * @typedef ProcessManifestItemResponse
 * @property {ProcessManifestResponse} [items]
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
 * @typedef ManifestFiltersResponse
 * @property {FiltersInfo[]} [advance]
 */
/**
 * @typedef PageDetails
 * @property {number} [current] - Current page number
 * @property {boolean} [has_next] - If next page contains any result
 * @property {boolean} [has_previous] - If previous page contains any result
 * @property {number} item_total - Total count of the results present in the
 *   requested filter
 * @property {number} [size] - Page size
 * @property {number} [total] - Total
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
 * @property {FailedOrdersItem[]} items
 * @property {PageDetails} page
 */
/**
 * @typedef FailedOrderLogDetails
 * @property {string} error_trace
 * @property {string} exception
 */
/**
 * @typedef OptionItem
 * @property {string} [text]
 * @property {string} [value]
 * @property {number} [total_items]
 */
/**
 * @typedef SuperLaneItem
 * @property {string} [text]
 * @property {string} [value]
 * @property {OptionItem[]} [options]
 * @property {number} [total_items]
 */
/**
 * @typedef RuleLaneConfigResponse
 * @property {SuperLaneItem[]} [super_lanes]
 */
/**
 * @typedef RuleLaneConfigResponseSchema
 * @property {boolean} [success]
 * @property {string} [error]
 */
/**
 * @typedef RuleLaneConfigErrorResponse
 * @property {RuleLaneConfigResponseSchema} [response]
 */
/**
 * @typedef QuestionSetItem
 * @property {number} id
 * @property {string} display_name
 */
/**
 * @typedef Reason
 * @property {number} [id]
 * @property {string} display_name
 * @property {boolean} [remark_required]
 * @property {boolean} [show_text_area]
 * @property {Reason[]} [reasons]
 * @property {string[]} qc_type
 * @property {QuestionSet[]} question_set
 * @property {Object} meta
 * @property {boolean} is_active
 * @property {boolean} [is_deleted] - Indicates whether reason is deleted
 */
/**
 * @typedef RuleRequest
 * @property {string} flow_type
 * @property {string} name
 * @property {string} [description]
 * @property {string} entity_type
 * @property {string} value
 * @property {string} channel
 * @property {string} rule_type
 * @property {boolean} is_deleted
 * @property {boolean} [restrict_forward_serviceability]
 * @property {Condition[]} conditions
 * @property {RuleMeta} meta
 * @property {boolean} qc_enabled
 * @property {boolean} is_active
 * @property {RuleAction} actions
 */
/**
 * @typedef RuleResponse
 * @property {number} [id]
 * @property {RuleItem} [items]
 * @property {boolean} [success]
 * @property {RuleError} [error]
 */
/**
 * @typedef RuleUpdateRequest
 * @property {string} flow_type
 * @property {string} name
 * @property {string} [description]
 * @property {string} entity_type
 * @property {string} value
 * @property {string} channel
 * @property {string} rule_type
 * @property {boolean} is_deleted
 * @property {number} position
 * @property {boolean} restrict_forward_serviceability
 * @property {Condition[]} conditions
 * @property {RuleMeta} meta
 * @property {boolean} qc_enabled
 * @property {boolean} is_active
 * @property {RuleAction} actions
 */
/**
 * @typedef Condition
 * @property {string} variable
 * @property {string} operation
 */
/**
 * @typedef RuleMeta
 * @property {Department} [department]
 * @property {L3} [l3]
 * @property {boolean} [restrict_forward_serviceability]
 */
/**
 * @typedef RuleAction
 * @property {Reason[]} [reasons]
 */
/**
 * @typedef Department
 * @property {string} [id]
 * @property {string} [display_name]
 */
/**
 * @typedef L3
 * @property {string} [id]
 * @property {string} [display_name]
 */
/**
 * @typedef Error
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef RuleSuccessResponse
 * @property {number} [id]
 * @property {boolean} [success]
 * @property {RuleError} [error]
 */
/**
 * @typedef UpdateRulePositionRequest
 * @property {number} rule_id
 * @property {number} page_no
 * @property {number} page_size
 * @property {number} position
 * @property {string} flow_type
 */
/**
 * @typedef RuleListResponse
 * @property {PageInfo} [page]
 * @property {RuleItem[]} [items]
 * @property {boolean} [success]
 * @property {RuleError} [error]
 */
/**
 * @typedef RuleItem
 * @property {string} id
 * @property {string} entity_type
 * @property {string} value
 * @property {string} channel
 * @property {RuleAction} actions
 * @property {boolean} qc_enabled
 * @property {boolean} is_deleted
 * @property {boolean} restrict_forward_serviceability
 * @property {Condition[]} conditions
 * @property {RuleMeta} meta
 * @property {string} rule_type
 * @property {boolean} is_active
 * @property {string} name
 * @property {string} description
 * @property {string} flow_type
 * @property {number} position
 */
/**
 * @typedef RuleParametersResponse
 * @property {ParameterResponse[]} [response]
 */
/**
 * @typedef ParameterResponse
 * @property {string} [text]
 * @property {string} [value]
 */
/**
 * @typedef RuleListRequest
 * @property {number} [page_size]
 * @property {number} [page_no]
 * @property {string} [flow_type]
 * @property {string} [lane_type]
 */
/**
 * @typedef ErrorGenericWithStatus
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [status]
 */
/**
 * @typedef RuleListItem
 * @property {string} id
 * @property {string} entity_type
 * @property {string} value
 * @property {string} channel
 * @property {RuleAction} actions
 * @property {boolean} qc_enabled
 * @property {boolean} is_deleted
 * @property {Condition} conditions
 * @property {Meta} meta
 * @property {string} rule_type
 * @property {boolean} is_active
 * @property {string} name
 * @property {string} description
 * @property {string} flow_type
 * @property {number} position
 * @property {boolean} success
 * @property {RuleError} error
 */
/**
 * @typedef RuleError
 * @property {string} type
 * @property {string} value
 * @property {string} message
 */
/**
 * @typedef RuleErrorResponse
 * @property {boolean} [success]
 * @property {string} [error]
 */
/**
 * @typedef PageInfo
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [page_size]
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
 * @property {Object} [value]
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
 * @typedef ProcessManifestRequest
 * @property {string} [action] - Expected Actions: [save, process,
 *   pdf_generated,invalidate,pdf_failed,complete]
 * @property {Filters} [filters]
 * @property {string} [unique_id] - Unique Id.
 */
/**
 * @typedef ManifestResponse
 * @property {ManifestItems} [items]
 */
/**
 * @typedef ManifestItems
 * @property {Filters} [filters]
 * @property {string} [manifest_id] - Id of the manifest.
 * @property {string} [unique_id] - Unique Id.
 * @property {number} [company_id] - Id of the company.
 * @property {string} [dp_id] - Shipment with the specific courier partner Id.
 * @property {string} [courier_partner_slug] - Courier partner slug
 * @property {string} [action] - Expected Actions: [Save, Process, Pdf
 *   Generated, Invalidate, Pdf Failed, Complete]
 * @property {string} [created_by] - Created date of the manifest.
 * @property {string} [user_id] - Id of user.
 */
/**
 * @typedef ManifestErrorResponse
 * @property {boolean} [success] - Success State.
 * @property {string} [error] - Error String.
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
 * @property {number} [total] - Total number of items.
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
 * @property {string} [current_shipment_status] - Current shipment status; it
 *   can be financial, logistics or operational
 * @property {Object} [meta] - Meta object for extra data
 * @property {number} [shipment_status_id]
 * @property {string[]} [bag_list] - List of Bag ids transitioned in this shipments status
 * @property {string} title - Title
 * @property {string} [created_at] - Shipment status created date
 * @property {string} [created_ts] - Shipment status created date timestamp
 * @property {string} [shipment_id] - Unique shipment no. that is auto-generated
 * @property {string} [status_created_at] - Shipment status created date
 * @property {string} [status_created_ts] - Shipment status created date timestamp
 * @property {string} status - Status of shipment
 */
/**
 * @typedef UserDataInfo
 * @property {number} [uid] - UID of the user
 * @property {string} [user_oid] - User Object ID assigned within the system
 * @property {string} [external_customer_id] - External identifier associated
 *   with the purchaser user in another system
 * @property {string} [first_name] - First name of the purchaser user
 * @property {string} [last_name] - Last name of the purchaser user
 * @property {string} [mobile] - Mobile phone number of the purchaser user
 * @property {string} [email] - Email address of the purchaser user
 * @property {boolean} [is_anonymous_user] - Flag indicating whether the user is anonymous
 * @property {string} [avis_user_id] - Avis user id
 * @property {string} [name] - Name
 * @property {string} [gender] - Gender of the purchaser user (e.g., male, female, other)
 */
/**
 * @typedef Address
 * @property {string} [phone] - Mobile phone number of recipient associated with
 *   the address
 * @property {string} [address2] - A string representing the second line of the
 *   address, which can be used for additional address details if needed
 * @property {number} [longitude] - The longitude of the address
 * @property {string} [pincode] - A string indicating the postal code or PIN
 *   code of the address area
 * @property {string} [area] - A string specifying the locality or area
 *   associated with the address
 * @property {string} [address_type] - Type of address (e.g., home, office, registered)
 * @property {string} [country] - A string indicating the country of the address
 * @property {string} [address_category] - Category or classification of the address
 * @property {string} [email] - Email of the recipient associated with the address
 * @property {string} [created_at] - Date and time when the address was created
 * @property {string} [address1] - A string representing the first line of the
 *   address, typically containing street or building information
 * @property {string} [display_address] - Formatted display version of the address
 * @property {string} [landmark] - A string representing a prominent nearby
 *   landmark that aids in locating the address
 * @property {string} [updated_at] - Date and time when the address was last updated
 * @property {string} [version] - Address version, to be deprecated
 * @property {number} [latitude] - The latitude of the address
 * @property {string} [contact_person] - Name of the contact person associated
 *   with the address
 * @property {string} [state] - A string indicating the state or province of the address
 * @property {string} [city] - A string denoting the city or municipality of the address
 */
/**
 * @typedef ShipmentListingChannel
 * @property {string} [channel_shipment_id] - Channel shipment id
 * @property {boolean} [is_affiliate] - Flag to check Is affiliate
 * @property {string} [logo] - Visual representation or emblem associated
 * @property {string} [name] - Name
 */
/**
 * @typedef Prices
 * @property {number} [refund_credit] - Refund credits provided to the customer
 * @property {number} [amount_paid_roundoff] - Amount paid rounded off
 * @property {number} [price_effective] - MRP - Initial Seller provided discount
 * @property {number} [promotion_effective_discount] - Effective promotion
 *   discount including promotions given by seller and Platform
 * @property {number} [pm_price_split] - PM price split
 * @property {number} [refund_amount] - Amount to be refunded on cancellation and return
 * @property {number} [transfer_price] - Article
 * @property {number} [coupon_effective_discount] - Coupon provided by brand or seller
 * @property {number} [tax_collected_at_source] - The tax amount collected at
 *   the source of income or transaction
 * @property {number} [brand_calculated_amount] - Price Effective - Coupon
 *   Discount (Seller) - Promotion (Seller)
 * @property {number} [delivery_charge] - The fee associated with the delivery
 *   service for transporting the item to its destination
 * @property {number} [cashback] - Cashback points
 * @property {number} [value_of_good] - Effective selling price - Product GST Amount
 * @property {number} [cashback_applied] - Cashback applied on the order
 * @property {number} [cod_charges] - The fee associated with the COD order
 * @property {number} [price_marked] - The indicated price or value assigned to
 *   an item before any discounts or adjustments
 * @property {number} [amount_paid] - Amount paid by the customer
 * @property {number} [coupon_value] - Stores the coupon value as shown in the cart
 * @property {number} [discount] - The total amount discounted from the original
 *   MRP/actual price
 * @property {number} [fynd_credits] - Credits provided by Fynd
 * @property {number} [gift_price] - Gift card amount used
 * @property {number} [amount_to_be_collected] - Amount to be collected
 */
/**
 * @typedef ChargeDistributionSchema
 * @property {string} type - This field defines the distribution type, e.g
 *   values('multi', 'single') multi: distribute the charges across all entity
 *   single: distribute the charges across to any one single entity
 * @property {string} logic - This field defines the distribution logic e.g
 *   values('apportion', 'equally') apportion: distribute charge amount based on
 *   weighted average amount of all the entity (like article with [10, 20] will
 *   get charge of 9 as [3, 6]) equally: distribute charge amount 'equally' to
 *   all the entity
 */
/**
 * @typedef ChargeDistributionLogic
 * @property {ChargeDistributionSchema} distribution
 * @property {string} distribution_level - This field specifies the level of
 *   distribution, such as order, shipment, or article
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
 * @typedef Identifier
 * @property {string} [alu] - ALU code of the product
 * @property {string} [ean] - EAN code of the product
 * @property {string} [sku_code] - SKU code of the product
 * @property {string} [upc] - UPC code of the product
 * @property {string} [isbn] - ISBN code of the product
 */
/**
 * @typedef FinancialBreakup
 * @property {number} refund_credit - Refund credits provided to the customer
 * @property {number} [amount_paid_roundoff] - Amount paid rounded off
 * @property {number} price_effective - MRP - Initial Seller provided discount
 * @property {number} promotion_effective_discount - Effective promotion
 *   discount including promotions given by seller and Platform
 * @property {number} transfer_price - Article
 * @property {number} coupon_effective_discount - Coupon provided by brand or seller
 * @property {number} gst_fee - The fee associated with Goods and Services Tax
 *   (GST) for a product or service
 * @property {number} [tax_collected_at_source] - The tax amount collected at
 *   the source of income or transaction
 * @property {number} brand_calculated_amount - Price Effective - Coupon
 *   Discount (Seller) - Promotion (Seller)
 * @property {number} delivery_charge - The fee associated with the delivery
 *   service for transporting the item to its destination
 * @property {string} gst_tag - Type of GST applied - IGST, CGST, SGST
 * @property {string} hsn_code - The Harmonized System of Nomenclature (HSN)
 *   code, used for classifying goods traded internationally
 * @property {number} cashback - Cashback points
 * @property {string} item_name - The name of the item being referenced
 * @property {number} value_of_good - Effective selling price - Product GST Amount
 * @property {number} cashback_applied - Cashback applied on the order
 * @property {number} cod_charges - The fee associated with the COD order
 * @property {number} price_marked - The indicated price or value assigned to an
 *   item before any discounts or adjustments
 * @property {string} size - The physical dimensions or specifications of the
 *   item, indicating its size or measurements
 * @property {number} amount_paid - Amount paid by the customer
 * @property {number} coupon_value - Stores the coupon value as shown in the cart
 * @property {number} discount - The total amount discounted from the original
 *   MRP/actual price
 * @property {number} fynd_credits - Credits provided by Fynd
 * @property {number} gst_tax_percentage - The percentage rate of GST applied to
 *   a product or service
 * @property {number} [amount_to_be_collected] - Amount to be collected
 * @property {Identifier} identifiers
 * @property {number} total_units - Total number of units of the item
 * @property {boolean} added_to_fynd_cash - Flag indicating whether fynd cash
 *   has been used
 */
/**
 * @typedef GSTDetailsData
 * @property {number} [cgst_tax_percentage] - Percentage of Central Goods and
 *   Services Tax (CGST) applied to the transaction, applicable for intra-state
 *   transactions within the same state
 * @property {string} [gstin_code] - The Goods and Services Tax Identification
 *   Number (GSTIN) associated with a business entity
 * @property {number} value_of_good - Effective selling price - Product GST Amount
 * @property {number} gst_fee - The fee associated with Goods and Services Tax
 *   (GST) for a product or service
 * @property {number} [igst_tax_percentage] - Percentage of Integrated Goods and
 *   Services Tax (IGST) applied to the transaction, applicable for inter-state
 *   transactions
 * @property {number} [gst_tax_percentage] - The percentage rate of GST applied
 *   to a product or service
 * @property {string} [hsn_code_id] - The unique identifier associated with HSN code
 * @property {number} [igst_gst_fee] - Amount of Integrated Goods and Services
 *   Tax (IGST) fee applied to the transaction, relevant for inter-state transactions
 * @property {boolean} [is_default_hsn_code] - Indicates if the HSN code is default
 * @property {number} [sgst_gst_fee] - Amount of State Goods and Services Tax
 *   (SGST) fee applied to the transaction, relevant for intra-state
 *   transactions within the same state
 * @property {number} tax_collected_at_source - The tax amount collected at the
 *   source of income or transaction
 * @property {number} brand_calculated_amount - Effective selling price - Brands
 *   additional discounts
 * @property {number} [cgst_gst_fee] - Amount of Central Goods and Services Tax
 *   (CGST) fee applied to the transaction, applicable for intra-state
 *   transactions within the same state
 * @property {string} [gst_tag] - Type of GST applied - IGST, CGST, SGST
 * @property {number} [sgst_tax_percentage] - Percentage of State Goods and
 *   Services Tax (SGST) applied to the transaction, applicable for intra-state
 *   transactions within the same state
 * @property {string} [hsn_code] - The Harmonized System of Nomenclature (HSN)
 *   code, used for classifying goods traded internationally
 */
/**
 * @typedef BagStateMapper
 * @property {boolean} [is_active] - A boolean flag indicating whether a state
 *   is active or not
 * @property {string} [app_display_name] - The display name of a shipment status
 *   as it appears on the sale channels website
 * @property {string} state_type - Type of the state - operational, logistics, financial
 * @property {number} id - The unique identifier associated with the state
 * @property {string} journey_type - Journey type can be forward or return
 * @property {string} [app_state_name] - The slug of a shipment status from the
 *   sale channels front
 * @property {string} name - The slug of a shipment status from the platforms front
 * @property {boolean} [app_facing] - A boolean flag indicating whether a
 *   particular shipment status should be visible on the sale channels website
 * @property {boolean} [notify_customer] - A boolean flag indicating whether a
 *   particular shipment status should be notified to the customer
 * @property {string} display_name - The display name of a shipment status as it
 *   appears on the platform
 */
/**
 * @typedef BagStatusHistory
 * @property {boolean} [forward] - Flag to check forward
 * @property {number} [store_id] - Store id associated with the bag
 * @property {string} [delivery_awb_number] - Airway Bill (AWB) number
 *   associated with the delivery
 * @property {boolean} [kafka_sync] - Flag indicating whether the bag status
 *   history update has been sync with Kafka
 * @property {number} [delivery_partner_id] - Unique identifier of delivery partner
 * @property {string} [app_display_name] - The display name of a shipment status
 *   as it appears on the sale channels website
 * @property {number} [state_id] - The unique identifier associated with the state
 * @property {string} [state_type] - Type of the state - operational, logistics, financial
 * @property {number} [bsh_id] - The unique identifier associated with the state
 * @property {string} [created_at] - Date and time when the bag status history
 *   record was created
 * @property {string} [created_ts] - Timestamp indicating the exact time when
 *   the bag status history record was created
 * @property {string} [shipment_id] - Unique shipment no. that is auto-generated
 * @property {string} [updated_at] - Date and time of the most recent update to
 *   the bag status history record
 * @property {string} [updated_ts] - Timestamp indicating the last time the bag
 *   status history record was updated
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [bag_id] - The unique identifier associated with the bag
 * @property {Object[]} [reasons] - List of reasons for the state change
 * @property {string} status - Webhook shipment status, i.e., either create or update
 * @property {string} [display_name] - The display name of a shipment status as
 *   it appears on the platform
 */
/**
 * @typedef Dimensions
 * @property {number} [height] - The height of the product
 * @property {number} [width] - The width of the product
 * @property {boolean} [is_default] - Whether the dimension is the default one or not
 * @property {string} [unit] - The unit of dimension
 * @property {number} [length] - The length of the product
 */
/**
 * @typedef ReturnConfig
 * @property {boolean} [returnable] - Flag indicating whether product is returnable or not
 * @property {number} [time] - Number indicating number of hours or days
 * @property {string} [unit] - String indicating the unit of the time, eg. days, hours
 */
/**
 * @typedef Weight
 * @property {boolean} [is_default] - Whether the weight is the default one or not
 * @property {number} [shipping] - The shipping weight of the product
 * @property {string} [unit] - The unit of weight
 */
/**
 * @typedef Article
 * @property {Object} [child_details] - Child article details if any
 * @property {string} seller_identifier - Sellers identifier of the article
 * @property {string} uid - UID of the article
 * @property {Object} [a_set] - Details of the set if any
 * @property {Dimensions} [dimensions]
 * @property {Object} [currency] - Order currency details
 * @property {boolean} [esp_modified] - Flag representing if effective selling
 *   price has been modified
 * @property {ReturnConfig} [return_config] - Return configuration details of the article
 * @property {string} [code] - A unique alphanumeric identifier assigned to a
 *   specific article for inventory and tracking purposes
 * @property {Weight} [weight]
 * @property {string} _id - DB generated ID of the article
 * @property {Object} identifiers - Product identifiers
 * @property {string} [raw_meta] - Raw meta data of the article
 * @property {string} size - The physical dimensions or specifications of the
 *   article, indicating its size or measurements
 * @property {boolean} [is_set] - A boolean indicating whether the article is a set
 * @property {string[]} [tags] - Tags associated with the article
 * @property {Object} [variants] - This represents different variants of items
 *   such as color, shade, material, storage variants, size and more.
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
 * @property {Object} [variants] - This represents different variants of items
 *   such as color, shade, material, storage variants, size and more.
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
 * @property {string} [phone] - Contact phone number for the store.
 * @property {string[]} [brand_store_tags] - Brand store tags
 * @property {string} [pincode] - Postal code (pincode) of the stores location.
 * @property {Object} [meta] - Meta object for extra data
 * @property {string} [address] - Physical address of the store
 * @property {string} [address1] - Physical address of the store
 * @property {string} [display_address] - Formatted display version of the address
 * @property {string} [location_type] - Type of location e.g., warehouse, high_street
 * @property {number} id - Unique identifier for the store.
 * @property {string} code - Alphanumeric code representing the store.
 * @property {string} [store_email] - Store email
 * @property {string} [name] - Name of the store
 * @property {string} [state] - State where the store is located.
 * @property {string} [city] - City where the store is located.
 * @property {string[]} [tags] - Array of tags associated with the store
 * @property {number} [company_id] - Identifier of the company responsible for
 *   fulfilling shipments from this store
 */
/**
 * @typedef Currency
 * @property {string} [currency_code] - Currency code like INR, UAE
 * @property {string} [currency_symbol] - For particular code will show currency symbol
 */
/**
 * @typedef OrderingCurrency
 * @property {string} [currency_code] - Currency code like INR, UAE
 * @property {string} [currency_name] - Currency name
 * @property {string} [currency_symbol] - For particular code will show currency symbol
 * @property {string} [currency_sub_unit] - Currency sub unit
 */
/**
 * @typedef ConversionRate
 * @property {string} [base]
 * @property {Object} [rates]
 */
/**
 * @typedef ShipmentItem
 * @property {string} [order_date] - Order created date
 * @property {string} [order_created_ts] - Order created date
 * @property {ShipmentStatus} [shipment_status]
 * @property {UserDataInfo} [user]
 * @property {string} [estimated_sla_time] - Estimated sla time
 * @property {string} [estimated_sla_ts] - Estimated sla ts
 * @property {Address} [delivery_address]
 * @property {Address} [billing_address]
 * @property {boolean} [is_active] - A boolean flag indicating whether a state
 *   is active or not
 * @property {ShipmentListingChannel} [channel]
 * @property {string} [previous_shipment_id] - ID of the shipment from which
 *   current shipment was created, this is populated whenever the shipment goes
 *   into negative state transition
 * @property {boolean} [lock_status] - Lock status of the shipment
 * @property {string} [invoice_id] - Invoice ID attached to the shipment
 * @property {Object} [payment_methods] - Object containing payment methods used
 *   for placing an order. The key will be COD if Cash on Delivery (COD) payment
 *   mode is used, and the corresponding value will provide information about
 *   that payment method. If Partner Pay is used, the key will be PP with
 *   relevant payment details.
 * @property {Object[]} [payment_info] - Array of object containing payment
 *   methods used for placing an order.
 * @property {string} [status_created_at] - Status created timestamp
 * @property {string} [status_created_ts] - Status created timestamp
 * @property {string} [display_name] - Display name
 * @property {BagUnit[]} [bags] - Details of all the products/articles in a shipment
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {Object} [meta] - Meta object for extra data
 * @property {string} [payment_mode] - Payment mode like COD etc
 * @property {boolean} [can_process] - Can process
 * @property {Prices} [prices]
 * @property {string} order_id - Unique ID of order in which the shipment is present
 * @property {string} [ordering_channnel] - Ordering channel like fynd, ecomm,
 *   marketplace etc
 * @property {string} [shipment_id] - Unique shipment no. that is auto-generated
 * @property {string} [customer_note] - Customer note
 * @property {number} total_bags - Total bags count
 * @property {string} shipment_created_at - Shipment created time
 * @property {string} [mode_of_payment] - Mode of payment like prepaid, COD etc
 * @property {string} [shipment_created_ts] - Shipment created time
 * @property {Currency} [currency]
 * @property {CurrencyInfo} [currency_info]
 * @property {boolean} [is_lapa_enabled] - Flag to show NDR actions based on
 *   LAPA (Logistic As Per Actual) plan subscription. If LAPA plan taken, true,
 *   else false.
 * @property {Object} [logistics_meta] - This will hold the meta data updates
 *   that are provided by the logistics provider.
 * @property {string} [affiliate_shipment_id] - Identifier of the shipment
 *   assigned by the application
 * @property {string} [affiliate_order_id] - Identifier of the order assigned by
 *   the application
 */
/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {number} [total_count] - Total count of records
 * @property {string} [message] - Message
 * @property {boolean} [success] - Key for success or failure
 * @property {ShipmentItem[]} [items] - All shipments
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
 * @property {string} [store_invoice_id] - Invoice ID attached to the shipment
 * @property {string} [invoice_url] - Invoice URL attached to the shipment
 * @property {string} [updated_date] - Updated date of the invoice
 * @property {string} [external_invoice_id] - External Invoice ID attached to the shipment
 * @property {string} [label_url] - Label URL attached to the shipment
 * @property {string} [credit_note_id] - Credit Note ID attached to the shipment
 * @property {Object} [links] - Links object for extra data
 */
/**
 * @typedef OrderDetailsData
 * @property {string} [order_date] - Order created date
 * @property {string} [created_ts] - Order created date
 * @property {Object} [tax_details]
 * @property {string} [cod_charges] - The fee associated with the COD order
 * @property {string} [source]
 * @property {string} fynd_order_id - System generated unique identifier of the order
 * @property {string} [affiliate_id] - Identifier for the application, can be
 *   application_id or extension_id
 * @property {string} [affiliate_order_id] - Identifier of the order assigned by
 *   the application
 * @property {Object} [ordering_channel_logo] - Logo URL of the ordering channel
 * @property {string} [order_value] - Order value
 * @property {string} [ordering_channel] - Business Ordering channel. eg. are
 *   fynd, fynd_store, uniket, affiliate, ecomm, marketplace, jiomart
 * @property {Object} [meta] - Meta object for extra data
 */
/**
 * @typedef UserDetailsData
 * @property {string} phone - Contact phone number for the store.
 * @property {string} pincode - A string indicating the postal code or PIN code
 *   of the address area
 * @property {string} address - A string representing the complete address,
 *   combining address line 1, address line 2, area, landmark, sector, city,
 *   state, and pincode. This provides a comprehensive view of the address details
 * @property {string} [area] - A string specifying the locality or area
 *   associated with the address
 * @property {string} [address_type] - Type of address (e.g., home, office, registered)
 * @property {string} country - A string indicating the country of the address
 * @property {string} [email] - Email of the recipient associated with the address
 * @property {string} [address1] - A string representing the first line of the
 *   address, typically containing street or building information
 * @property {string} [landmark] - A string representing a prominent nearby
 *   landmark that aids in locating the address
 * @property {string} state - A string indicating the state or province of the address
 * @property {string} name - A string representing the stores name
 * @property {string} city - A string denoting the city or municipality of the address
 * @property {string} [state_code] - State code
 * @property {string} [country_iso_code] - ISO code representing the country of
 *   the address
 * @property {string} [country_phone_code] - Country phone code associated with
 *   the purchaser users mobile number
 * @property {string} [display_address] - Formatted display version of the
 *   delivery address
 */
/**
 * @typedef PhoneDetails
 * @property {number} [country_code] - ISO code representing the country of the address
 * @property {string} [number] - Mobile phone number
 */
/**
 * @typedef ContactDetails
 * @property {PhoneDetails[]} [phone] - Contact phone number
 * @property {string[]} [emails] - Contact emails
 */
/**
 * @typedef CompanyDetails
 * @property {string} [company_name] - Company name
 * @property {Object} [address] - Company address
 * @property {string} [company_cin] - Company CIN
 * @property {number} [company_id] - Company ID
 * @property {string} [company_gst] - Company GST
 * @property {ContactDetails} [company_contact]
 */
/**
 * @typedef OrderingStoreDetails
 * @property {string} [phone] - Contact phone number for the store.
 * @property {string} [pincode] - Postal code (pincode) of the stores location.
 * @property {Object} [meta] - Meta object for extra data
 * @property {string} [address] - Physical address of the store.
 * @property {string} [address1] - A string representing the first line of the
 *   address, typically containing street or building information
 * @property {string} [display_address] - Formatted display version of the
 *   delivery address
 * @property {number} [id] - Unique identifier for the store.
 * @property {string} [code] - Alphanumeric code representing the store.
 * @property {string} [store_name] - Name of the store.
 * @property {string} [country] - Country where the store is situated.
 * @property {string} [contact_person] - Name of the contact person
 * @property {string} [state] - State where the store is located.
 * @property {string} [city] - City where the store is located.
 * @property {string} [store_email] - Email address of store
 */
/**
 * @typedef DPDetailsData
 * @property {string} [pincode] - A string indicating the postal code or PIN
 *   code of the address area
 * @property {string} [track_url] - URL to track the delivery status or shipment details
 * @property {string} [eway_bill_id] - Electronic Way Bill (E-way Bill) ID for
 *   the delivery
 * @property {number} [id] - Unique identifier for the delivery partner
 * @property {string} [country] - A string indicating the country of the dp
 * @property {string} [awb_no] - Airway Bill (AWB) number associated with the delivery
 * @property {string} [gst_tag] - GST tag of the shipment
 * @property {string} [name] - Name of the delivery partner
 */
/**
 * @typedef BuyerDetails
 * @property {string} [ajio_site_id] - AJIO site ID
 * @property {number} pincode - Indicating the postal code or PIN code of the address area
 * @property {string} address - A string representing the complete address
 * @property {string} gstin - The Goods and Services Tax Identification Number
 *   (GSTIN) associated with a business entity
 * @property {string} name - The name of the buyer
 * @property {string} state - A string indicating the state or province of the buyer
 * @property {string} city - A string indicating the city of the buyer
 */
/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid] - Stormbreaker UUID
 */
/**
 * @typedef EinvoiceInfo
 * @property {Object} [credit_note] - Credit note information
 * @property {Object} [invoice] - Invoice information
 */
/**
 * @typedef Formatted
 * @property {string} [max] - Max formatted version of the shipment
 * @property {string} [min] - Min formatted version of the shipment
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
 * @property {string} [tracking_url] - URL for monitoring the status and
 *   location of the shipment
 * @property {string} [estimated_delivery_date] - Estimated delivery date for the shipment
 * @property {boolean} same_store_available - Flag indicating whether the same
 *   store is available for the shipment
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {Formatted} [formatted]
 * @property {DebugInfo} [debug_info]
 * @property {string} [return_awb_number] - Airway Bill (AWB) number associated
 *   with the return shipment
 * @property {boolean} [is_self_ship] - Flag indicating whether the shipment is
 *   self shipped
 * @property {string} [box_type] - Box type for the shipment
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [return_affiliate_shipment_id] - Affiliate shipment id
 *   associated with the return shipment
 * @property {string} [parent_dp_id] - Parent DP id associated with the shipment
 * @property {number} [shipment_weight] - Shipment weight
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
 * @property {string} invoice_type - Invoice type - external
 * @property {string} [label_a6] - Label URL a6 provided by the application or extension
 * @property {string} [invoice] - Invoice URL provided by the application or extension
 * @property {string} [label_pos] - Label URL for pos provided by the
 *   application or extension
 * @property {string} [invoice_a6] - Invoice URL a6 provided by the application
 *   or extension
 * @property {string} [b2b] - B2B URL provided by the application or extension
 * @property {string} [label] - Label URL provided by the application or extension
 * @property {string} [label_a4] - Label URL a4 provided by the application or extension
 * @property {string} label_type - Label type - external
 * @property {string} [invoice_export] - Invoice URL export provided by the
 *   application or extension
 * @property {string} [credit_note_url] - Credit note URL provided by the
 *   application or extension
 * @property {string} [delivery_challan_a4] - Delivery challan URL a4 provided
 *   by the application or extension
 * @property {string} [label_export] - Label URL export provided by the
 *   application or extension
 * @property {string} [invoice_a4] - Invoice URL a4 provided by the application
 *   or extension
 * @property {string} [invoice_pos] - Invoice URL pos provided by the
 *   application or extension
 * @property {string} [po_invoice] - PO invoice URL provided by the application
 *   or extension
 */
/**
 * @typedef AffiliateDetails
 * @property {ShipmentMeta} shipment_meta
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_shipment_id - Identifier of the shipment
 *   assigned by the application
 * @property {string} [company_affiliate_tag] - Tag associated with the bag from
 *   the applications company
 * @property {string} affiliate_order_id - Identifier of the order assigned by
 *   the application
 * @property {PDFLinks} [pdf_links]
 * @property {AffiliateConfig} [config]
 * @property {string} [affiliate_id] - Identifier for the application, can be
 *   application_id or extension_id
 * @property {string} affiliate_store_id - Identifier of the store assigned by
 *   the application
 * @property {string} affiliate_bag_id - External bag id
 * @property {string} [ad_id] - Identifier for the application, can be
 *   application_id or extension_id
 */
/**
 * @typedef BagConfigs
 * @property {boolean} is_returnable - Flag indicating whether the bag is returnable
 * @property {boolean} allow_force_return - Allow force return
 * @property {boolean} is_active - Flag indicating whether the bag is active
 * @property {boolean} can_be_cancelled - Flag indicating whether the bag can be cancelled
 * @property {boolean} enable_tracking - Enable tracking
 * @property {boolean} is_customer_return_allowed - Flag indicating whether the
 *   customer return allowed
 */
/**
 * @typedef OrderBagArticle
 * @property {Object} [identifiers] - Product identifiers
 * @property {ReturnConfig} [return_config]
 * @property {string} [uid] - UID of the article
 * @property {string} [size] - The physical dimensions or specifications of the
 *   article, indicating its size or measurements
 * @property {string[]} [tags] - Array of tags
 * @property {Object} [variants] - This represents different variants of items
 *   such as color, shade, material, storage variants, size and more.
 */
/**
 * @typedef OrderBrandName
 * @property {string} [logo] - Visual representation or emblem associated
 * @property {number} [company] - Identifier of the company
 * @property {number} id - The unique identifier associated with the brand of the item
 * @property {string} [created_on] - The date and time when the brand was created
 * @property {string} [brand_name] - The brand name of the item
 * @property {string} [modified_on] - The date and time when the brand was updated
 */
/**
 * @typedef AffiliateBagsDetails
 * @property {string} [affiliate_bag_id] - Identifier assigned by the
 *   application for the bag
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
 * @property {string} [currency] - The currency in which the prices are denominated
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
 * @property {string} [promotion_type]
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
 * @property {Object} [parent_promo_bags] - Parent promo bags
 * @property {FinancialBreakup} [financial_breakup]
 * @property {BagConfigs} [bag_configs]
 * @property {string} [seller_identifier] - Sellers identifier of the article
 * @property {Address} [delivery_address]
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
 * @property {PriceAdjustmentCharge[]} [charges]
 * @property {CurrentStatus} [current_status]
 * @property {number} bag_id
 * @property {string} [entity_type]
 * @property {boolean} [is_parent]
 * @property {Object} [variants] - This represents different variants of items
 *   such as color, shade, material, storage variants, size and more.
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
 * @property {string} [store_email] - Email of the recipient associated with the store
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
 * @property {string} [current_shipment_status] - Current shipments status; it
 *   can be financial, logistics or operational
 * @property {string} [status_created_at]
 */
/**
 * @typedef ShipmentLockDetails
 * @property {boolean} [lock_status] - Lock status of the shipment
 * @property {string} [lock_message] - Lock message of the shipment
 * @property {Object} [action_to_status] - Action to status
 */
/**
 * @typedef ShipmentPaymentInfoData
 * @property {string} [mode] - Stands for 'Mode of Payment'. This is a short
 *   code (like 'COD' for Cash On Delivery) that represents the payment method used.
 * @property {string} [name] - Specifies name of the payment method.
 * @property {string} [collect_by] - Whomsoever collected the money
 * @property {string} [refund_by] - Whomsoever will refund the money
 * @property {Object} [meta] - Object that stores additional meta data related
 *   to the payment.
 * @property {number} [amount] - Amount paid using this payment method.
 * @property {string} [unique_identifier] - A unique string identifier for the
 *   transaction, this is essential for referencing individual payments.
 * @property {string} [display_name] - The name of the payment method as it
 *   should be displayed to the user.
 * @property {Object} [transaction_data] - All necessary data for transaction received
 */
/**
 * @typedef PlatformShipment
 * @property {Object} [logistics_meta] - This will hold the meta data updates
 *   that are provided by the logistics provider.
 * @property {string} [picked_date] - Date of shipment picking
 * @property {TrackingList[]} [tracking_list] - List of tracking details
 * @property {InvoiceInfo} [invoice]
 * @property {string} [shipment_status] - Status of the shipment indicating its
 *   current stage
 * @property {GSTDetailsData} [gst_details]
 * @property {OrderStatusData} [order_status]
 * @property {Object} [delivery_slot] - Delivery slot details
 * @property {OrderDetailsData} [order]
 * @property {UserDataInfo} [user]
 * @property {boolean} [enable_dp_tracking] - Falg to check delivery partner
 *   tracking is enable
 * @property {string} [custom_message] - Custom message
 * @property {string} [estimated_sla_time] - Estimated time of delivery
 * @property {string} [estimated_sla_ts] - Estimated time of delivery
 * @property {boolean} [can_update_dimension] - Flag to check whether shipment
 *   dimension can be updated
 * @property {string[]} [shipment_images] - Shipment Images List
 * @property {Object} [delivery_details] - Delivery Details of user
 * @property {Object} [billing_details] - Billing Details of user
 * @property {string} [forward_shipment_id] - Forward shipment id
 * @property {number} [fulfilment_priority] - Fulfilment priority
 * @property {ShipmentLockDetails} [shipment_details]
 * @property {Object[]} [custom_meta] - Custom meta data
 * @property {number} [shipment_quantity] - Shipment quantity
 * @property {CompanyDetails} [company_details]
 * @property {OrderingStoreDetails} [ordering_store]
 * @property {boolean} [lock_status] - Lock status of the shipment
 * @property {string} [platform_logo] - Visual representation or emblem associated
 * @property {string} [user_agent] - User agent
 * @property {DPDetailsData} [dp_details]
 * @property {string} [invoice_id] - Invoice ID attached to the shipment
 * @property {Object} [payment_methods] - Object containing payment methods used
 *   for placing an order. The key will be COD if Cash on Delivery (COD) payment
 *   mode is used, and the corresponding value will provide information about
 *   that payment method. If Partner Pay is used, the key will be PP with
 *   relevant payment details.
 * @property {ShipmentPaymentInfoData[]} [payment_info] - Array of object
 *   containing payment methods used for placing an order.
 * @property {Object} [coupon] - Coupon related details
 * @property {AffiliateDetails} [affiliate_details]
 * @property {string} [priority_text]
 * @property {BagStatusHistory[]} [bag_status_history] - Records the changes in
 *   status for a bag, providing a timeline of events and transitions
 * @property {boolean} [is_dp_assign_enabled]
 * @property {OrderBags[]} [bags] - Details of all the products/articles in a shipment
 * @property {boolean} [dp_assignment] - Flag indicating whether auto DP
 *   assignment should happen from system
 * @property {number} [total_items] - Total items
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object} [meta] - Meta object for extra data
 * @property {Object} [pdf_links] - PDF Links pushed by the application or extension
 * @property {string} [payment_mode] - Payment mode like COD, Prepaid, etc
 * @property {string} [packaging_type]
 * @property {string} [journey_type] - Journey type can be forward or return
 * @property {Prices} [prices]
 * @property {PriceAdjustmentCharge[]} [charges]
 * @property {string} [vertical]
 * @property {string} shipment_id - Unique shipment no. that is auto-generated
 * @property {ShipmentPayments} [payments]
 * @property {string} [operational_status]
 * @property {ShipmentStatusData} [status]
 * @property {number} [total_bags] - Total bags Count
 * @property {string} [shipment_created_at] - Shipment created time
 * @property {string} [shipment_created_ts] - Shipment created timestamp
 * @property {Currency} [currency]
 * @property {CurrencyInfo} [currency_info]
 * @property {boolean} [is_lapa_enabled] - Flag to show NDR actions based on
 *   LAPA (Logistic As Per Actual) plan subscription. If LAPA plan taken, true,
 *   else false.
 * @property {string} [previous_shipment_id] - ID of the shipment from which
 *   current shipment was created, this is populated whenever the shipment goes
 *   into negative state transition
 * @property {number} [shipment_update_time] - Last shipment update time
 * @property {Address} [rto_address]
 * @property {string} [credit_note_id] - Credit Note ID attached to the shipment
 * @property {boolean} [is_self_ship] - Flag to check is self ship enabled or not
 * @property {string} [mode_of_payment] - Unique identifier associated with the
 *   payment mode
 * @property {string} [affiliate_shipment_id] - Identifier of the shipment
 *   assigned by the application
 * @property {string} [tracking_url] - URL for monitoring the status and
 *   location of the shipment.
 */
/**
 * @typedef ShipmentInfoResponse
 * @property {string} [message] - Message for success or failure
 * @property {boolean} success - Key for success or failure
 * @property {PlatformShipment[]} [shipments]
 */
/**
 * @typedef TaxDetails
 * @property {string} [pan_no] - The pan number associated with a business entity
 * @property {string} [gstin] - The Goods and Services Tax Identification Number
 *   (GSTIN) associated with a business entity
 */
/**
 * @typedef PaymentInfoData
 * @property {Object} [meta] - Meta object for extra data
 * @property {string} [mode] - Mode of particular payment
 * @property {string} [name] - Name of particular payment
 * @property {number} [amount] - Amount
 * @property {boolean} [collected] - Collected
 * @property {string} [refund_by] - Whomsoever will refund the money
 * @property {string} [collect_by] - Whomsoever collected the money
 * @property {string} [display_name] - Display name for payment received
 * @property {string} [merchant_transaction_id] - Merchant transaction id
 * @property {Object} [transaction_data] - All necessary data for transaction received
 */
/**
 * @typedef OrderDetailsResponse
 * @property {OrderData} [order]
 * @property {boolean} success - Key for success or failure
 * @property {PlatformShipment[]} [shipments] - List of shipments
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
 * @property {string} [logo] - Visual representation or emblem associated
 * @property {string} [name] - Platform channel name
 */
/**
 * @typedef PlatformOrderItems
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {number} [total_order_value] - Total order value
 * @property {Object} [meta] - Meta object for extra data
 * @property {string} [order_created_time] - Order created timestamp
 * @property {string} [order_created_ts] - Order created timestamp
 * @property {string} [payment_mode] - Payment mode like COD etc
 * @property {PlatformShipment[]} [shipments] - List of shipments
 * @property {string} [order_id] - Unique ID of order in which the shipment is present
 * @property {PlatformChannel} [channel]
 * @property {UserDataInfo} [user_info]
 * @property {number} [order_value] - Value of the order
 * @property {Currency} [currency]
 * @property {CurrencyInfo} [currency_info]
 * @property {string} [affiliate_order_id] - Identifier of the order assigned by
 *   the application
 */
/**
 * @typedef OrderListingResponse
 * @property {Filters} [filters]
 * @property {number} [total_count] - Total count of order
 * @property {string} [message] - Message
 * @property {boolean} [success] - Key for success or failure
 * @property {PlatformOrderItems[]} [items] - List of Orders
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
 * @typedef FilterOptions
 * @property {string} label - Name of the FilterOption.
 * @property {string} value - Key of the filterOption to query the input data on.
 * @property {string} [state_type] - To identify type of status (financial,
 *   operational, logistics)
 * @property {string} [name] - Name of the FilterOption.
 * @property {string} [text] - Text of the FilterOption.
 * @property {number} [min_search_size] - Minimum search size.
 * @property {string} [placeholder_text] - Placeholder showing hint what text
 *   can be passed into filter.
 * @property {boolean} [show_ui] - Whether to show on UI or not.
 */
/**
 * @typedef FiltersList
 * @property {string} label - Name of the filter.
 * @property {string} value - Key of the filter to query the input data on.
 * @property {string} [filter_type] - To identify if its a global filter or
 *   advanced filters. global filters => Shown on UI alongside listing. advanced
 *   filters => Shown on panel on right side opened by clicking on filter icon.
 * @property {string} [type] - Type of the filter.
 * @property {string} [placeholder_text] - Sample input text.
 * @property {boolean} [required] - If field value is required or not.
 * @property {boolean} [is_active] - Whether the filter should be shown on ui or not.
 * @property {FilterOptions[]} [options] - Different options of a single filter.
 */
/**
 * @typedef GlobalFiltersResponse
 * @property {string} [config] - Indicates the unique property to identify a
 *   filter config.
 * @property {FiltersList[]} filters
 * @property {number} company_id
 * @property {string} show_in
 * @property {string} [request_source] - Source of the request (platform/administrator)
 */
/**
 * @typedef ViewDetails
 * @property {string} [id] - Unique identifier of a view. Used to
 *   update/delete/edit a view.
 * @property {string} slug - Used to identify a View.
 * @property {string} label - Name of the view.
 * @property {FiltersList[]} [filters] - Criterion on which shipments/orders
 *   must be fetched.
 * @property {boolean} is_editable - Flag to identify if view is
 *   editable(whether filters can be updated) or not.
 * @property {number} [position] - Position of the view on UI.
 * @property {string} show_in - Name of view on platform (shipment_view, order_view)
 */
/**
 * @typedef ParentViews
 * @property {ViewDetails[]} views - Used to fetch shipments/orders based on
 *   filters added by user.
 * @property {string} slug - Used to identify a parent view.
 * @property {string} label - Name of the view.
 * @property {boolean} is_editable - Flag to identify if view is
 *   editable(whether filters can be updated) or not.
 * @property {number} [position] - Position of the parent view on UI.
 * @property {string} show_in - Name of view on platform (shipment_view, order_view)
 */
/**
 * @typedef UserViewsResponse
 * @property {ParentViews[]} [parent_views]
 */
/**
 * @typedef UserViewPosition
 * @property {string} view_type - Type of user created view that is used on
 *   platform to fetch shipments/orders based on filters added. child_view =>
 *   View with filters to fetch shipments/orders. parent_view => Used to group
 *   child views.
 * @property {string} [view_id] - Id(view id) used for updating position of child view.
 * @property {string} [slug] - Slug(parent view slug) used for updating position
 *   of parent view.
 * @property {string} [label] - Label(parent view text) used for updating
 *   position of parent view.
 * @property {number} new_position - New position of the view.
 * @property {string} show_in - Name of view on platform (shipment_view, order_view)
 */
/**
 * @typedef CreateUpdateDeleteResponse
 * @property {string} [message]
 * @property {string[]} [errors] - Indicates events of errors at the time of
 *   processing views.
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
 * @typedef Attributes
 * @property {string} [primary_material]
 * @property {string} [essential]
 * @property {string} [marketer_name]
 * @property {string} [primary_color]
 * @property {string} [marketer_address]
 * @property {string} [primary_color_hex]
 * @property {string} [brand_name]
 * @property {string} [name]
 * @property {string[]} [gender]
 */
/**
 * @typedef Item
 * @property {Attributes} attributes - A dictionary of product attributes
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
 * @property {BagStatusHistory} [bag_status_history]
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
 * @property {PriceAdjustmentCharge[]} [charges]
 * @property {boolean} [qc_required]
 * @property {number} [quantity]
 * @property {Object[]} [reasons]
 * @property {boolean} [restore_coupon]
 * @property {Object} [restore_promos]
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
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [page_type]
 * @property {number} [current]
 * @property {number} [size]
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
 * @typedef CDN
 * @property {string} url
 * @property {string} absolute_url
 * @property {string} relative_url
 */
/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */
/**
 * @typedef TemplateDownloadResponse
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string[]} [tags]
 */
declare class OrderPlatformModel {
}
declare namespace OrderPlatformModel {
    export { InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse, LogErrorResponse, QuestionErrorResponse, RefundStateConfigurationByPaymentType, PostRefundStateConfiguration, PostRefundStateConfigurationResponse, GetRefundStateConfigurationResponse, RefundStates, GetRefundStates, RefundStateManualWithoutMessage, RefundStateManualWithMessage, RefundStateManualWithMessageData, RefundStateConfigurationManualSchema, RefundStateConfigurationManualSchemaResponse, RefundSubOption, RefundBreakup, RefundOptionShipmentResponse, CurrencySchema, RefundOptionsSchemaResponse, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, Click2CallResponse, ErrorDetail, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, OrderItemDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, RepricedProductsDataUpdates, DataUpdates, TransitionComments, ShipmentsRequest, StatuesRequest, ActionRequest, UpdateShipmentStatusRequest, UpdateShipmentActionRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, OrderPriority, ArticleDetails, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, UserData, OrderInfo, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, DPConfiguration, PaymentConfig, CreateOrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, RefundInformation, HistoryReason, HistoryMeta, HistoryDict, ShipmentHistoryResponse, PostHistoryFilters, PostHistoryData, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, SendSmsResponse, Dimension, UpdatePackagingDimensionsPayload, UpdatePackagingDimensionsResponse, Tax, Amount, Charge, CurrencyValueSchema, AmountSchema, DynamicChargeTaxSchema, RuleConditionsSchema, RuleSchema, DistributionSchema, DistributionLogicSchema, DynamicChargeSchema, LineItem, ProcessingDates, Shipment, ShippingInfo, BillingInfo, UserInfo, TaxInfo, PaymentMethod, PaymentInfo, CurrencyInfoCurrency, CurrencyInfoConversionRate, CurrencyInfo, ConfigPayment, ConfigDpConfiguration, ConfigApplication, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, OrderData, OrderUpdatePayload, OrderUpdateResponseDetail, FyndOrderIdList, OrderStatus, BagStateTransitionMap, RoleBaseStateTransitionMapping, FetchCreditBalanceRequestPayload, CreditBalanceInfo, FetchCreditBalanceResponsePayload, RefundModeConfigRequestPayload, RefundOption, RefundModeInfoFormat, RefundModeInfo, RefundModeConfigResponsePayload, AttachUserOtpData, AttachUserInfo, AttachOrderUser, AttachOrderUserResponse, AttachOrderUserErrorResponse, SendUserMobileOTP, PointBlankOtpData, SendUserMobileOtpResponse, VerifyOtpData, VerifyMobileOTP, VerifyOtpResponseData, VerifyOtpResponse, VerifyOtpErrorResponseData, VerifyOtpErrorResponse, BulkReportsDownloadRequest, BulkReportsDownloadResponse, BulkFailedResponse, BulkStateTransistionRequest, BulkStateTransistionResponse, ShipmentActionInfo, BulkActionListingData, BulkListinPage, BulkListingResponse, JobDetailsData, JobDetailsResponse, JobFailedResponse, ManifestPageInfo, ManifestItemDetails, ManifestShipmentListing, DateRange, Filters, ManifestFile, ManifestMediaUpdate, PDFMeta, TotalShipmentPricesCount, ManifestMeta, Manifest, ManifestList, ManifestDetails, FiltersRequest, ProcessManifest, ProcessManifestResponse, ProcessManifestItemResponse, FilterInfoOption, FiltersInfo, ManifestFiltersResponse, PageDetails, EInvoiceIrnDetails, EInvoiceErrorDetails, EInvoiceDetails, EInvoiceResponseData, EInvoiceRetry, EInvoiceRetryResponse, EInvoiceErrorInfo, EInvoiceErrorResponseData, EInvoiceErrorResponse, EInvoiceErrorResponseDetails, EInvoiceRetryShipmentData, CourierPartnerTrackingDetails, CourierPartnerTrackingResponse, LogsChannelDetails, LogPaymentDetails, FailedOrdersItem, FailedOrderLogs, FailedOrderLogDetails, OptionItem, SuperLaneItem, RuleLaneConfigResponse, RuleLaneConfigResponseSchema, RuleLaneConfigErrorResponse, QuestionSetItem, Reason, RuleRequest, RuleResponse, RuleUpdateRequest, Condition, RuleMeta, RuleAction, Department, L3, Error, RuleSuccessResponse, UpdateRulePositionRequest, RuleListResponse, RuleItem, RuleParametersResponse, ParameterResponse, RuleListRequest, ErrorGenericWithStatus, RuleListItem, RuleError, RuleErrorResponse, PageInfo, ConfigData, ConfigUpdatedResponse, FlagData, Flags, Filter, PostHook, PreHook, Config, TransitionConfigCondition, TransitionConfigData, TransitionConfigPayload, ProcessManifestRequest, ManifestResponse, ManifestItems, ManifestErrorResponse, Page, BagReasonMeta, QuestionSet, BagReasons, ShipmentBagReasons, ShipmentStatus, UserDataInfo, Address, ShipmentListingChannel, Prices, ChargeDistributionSchema, ChargeDistributionLogic, ChargeAmountCurrency, ChargeAmount, PriceAdjustmentCharge, Identifier, FinancialBreakup, GSTDetailsData, BagStateMapper, BagStatusHistory, Dimensions, ReturnConfig, Weight, Article, ShipmentListingBrand, ReplacementDetails, AffiliateMeta, AffiliateBagDetails, PlatformArticleAttributes, PlatformItem, Dates, BagReturnableCancelableStatus, BagUnit, ShipmentItemFulFillingStore, Currency, OrderingCurrency, ConversionRate, ShipmentItem, ShipmentInternalPlatformViewResponse, TrackingList, InvoiceInfo, OrderDetailsData, UserDetailsData, PhoneDetails, ContactDetails, CompanyDetails, OrderingStoreDetails, DPDetailsData, BuyerDetails, DebugInfo, EinvoiceInfo, Formatted, ShipmentTags, LockData, ShipmentTimeStamp, ShipmentMeta, PDFLinks, AffiliateDetails, BagConfigs, OrderBagArticle, OrderBrandName, AffiliateBagsDetails, BagPaymentMethods, DiscountRules, ItemCriterias, BuyRules, PriceMinMax, ItemPriceDetails, FreeGiftItems, AppliedFreeArticles, AppliedPromos, CurrentStatus, OrderBags, FulfillingStore, ShipmentPayments, ShipmentStatusData, ShipmentLockDetails, ShipmentPaymentInfoData, PlatformShipment, ShipmentInfoResponse, TaxDetails, PaymentInfoData, OrderDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FilterOptions, FiltersList, GlobalFiltersResponse, ViewDetails, ParentViews, UserViewsResponse, UserViewPosition, CreateUpdateDeleteResponse, FiltersResponse, URL, FileResponse, BulkActionTemplate, BulkActionTemplateResponse, PlatformShipmentReasonsResponse, ShipmentResponseReasons, ShipmentReasonsResponse, StoreAddress, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, StoreMeta, Store, Brand, Attributes, Item, ArticleStatusDetails, Company, ShipmentGstDetails, DeliverySlotDetails, InvoiceDetails, UserDetails, WeightData, BagDetails, BagDetailsPlatformResponse, BagsPage, BagData, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, Templates, AllowedTemplatesResponse, CDN, Upload, TemplateDownloadResponse };
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
/** @returns {InvalidateShipmentCacheNestedResponse} */
declare function InvalidateShipmentCacheNestedResponse(): InvalidateShipmentCacheNestedResponse;
type InvalidateShipmentCacheNestedResponse = {
    shipment_id?: string;
    status?: number;
    message?: string;
    error?: string;
};
/** @returns {InvalidateShipmentCacheResponse} */
declare function InvalidateShipmentCacheResponse(): InvalidateShipmentCacheResponse;
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
/** @returns {ErrorResponse} */
declare function ErrorResponse(): ErrorResponse;
type ErrorResponse = {
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
     * - Error trace of the error that occurred.
     */
    error_trace?: string;
    error?: string;
};
/** @returns {LogErrorResponse} */
declare function LogErrorResponse(): LogErrorResponse;
type LogErrorResponse = {
    status?: number;
    message?: string;
};
/** @returns {QuestionErrorResponse} */
declare function QuestionErrorResponse(): QuestionErrorResponse;
type QuestionErrorResponse = {
    type?: string;
    value?: string;
    message?: any;
};
/** @returns {RefundStateConfigurationByPaymentType} */
declare function RefundStateConfigurationByPaymentType(): RefundStateConfigurationByPaymentType;
type RefundStateConfigurationByPaymentType = {
    states?: string[];
    allow_refund_initiate?: boolean;
};
/** @returns {PostRefundStateConfiguration} */
declare function PostRefundStateConfiguration(): PostRefundStateConfiguration;
type PostRefundStateConfiguration = {
    prepaid?: RefundStateConfigurationByPaymentType;
    non_prepaid?: RefundStateConfigurationByPaymentType;
    mix_mop?: RefundStateConfigurationByPaymentType;
};
/** @returns {PostRefundStateConfigurationResponse} */
declare function PostRefundStateConfigurationResponse(): PostRefundStateConfigurationResponse;
type PostRefundStateConfigurationResponse = {
    refund_config?: string;
    success?: boolean;
};
/** @returns {GetRefundStateConfigurationResponse} */
declare function GetRefundStateConfigurationResponse(): GetRefundStateConfigurationResponse;
type GetRefundStateConfigurationResponse = {
    success?: boolean;
    config?: PostRefundStateConfiguration;
};
/** @returns {RefundStates} */
declare function RefundStates(): RefundStates;
type RefundStates = {
    state?: string;
    display_name?: string;
};
/** @returns {GetRefundStates} */
declare function GetRefundStates(): GetRefundStates;
type GetRefundStates = {
    success?: boolean;
    items?: RefundStates[];
    status?: number;
};
/** @returns {RefundStateManualWithoutMessage} */
declare function RefundStateManualWithoutMessage(): RefundStateManualWithoutMessage;
type RefundStateManualWithoutMessage = {
    is_manual?: boolean;
};
/** @returns {RefundStateManualWithMessage} */
declare function RefundStateManualWithMessage(): RefundStateManualWithMessage;
type RefundStateManualWithMessage = {
    is_manual?: boolean;
    message?: string;
};
/** @returns {RefundStateManualWithMessageData} */
declare function RefundStateManualWithMessageData(): RefundStateManualWithMessageData;
type RefundStateManualWithMessageData = {
    prepaid?: RefundStateManualWithMessage;
    non_prepaid?: RefundStateManualWithMessage;
    mix_mop?: RefundStateManualWithMessage;
};
/** @returns {RefundStateConfigurationManualSchema} */
declare function RefundStateConfigurationManualSchema(): RefundStateConfigurationManualSchema;
type RefundStateConfigurationManualSchema = {
    prepaid?: RefundStateManualWithoutMessage;
    non_prepaid?: RefundStateManualWithoutMessage;
    mix_mop?: RefundStateManualWithoutMessage;
};
/** @returns {RefundStateConfigurationManualSchemaResponse} */
declare function RefundStateConfigurationManualSchemaResponse(): RefundStateConfigurationManualSchemaResponse;
type RefundStateConfigurationManualSchemaResponse = {
    success?: boolean;
    data?: RefundStateManualWithMessageData;
};
/** @returns {RefundSubOption} */
declare function RefundSubOption(): RefundSubOption;
type RefundSubOption = {
    /**
     * - ID of the refund sub-option
     */
    id?: number;
    /**
     * - Name of the refund sub-option
     */
    name?: string;
    /**
     * - Display name of the refund sub-option
     */
    display_name?: string;
    /**
     * - Whether the refund sub-option is active
     */
    is_active?: boolean;
};
/** @returns {RefundBreakup} */
declare function RefundBreakup(): RefundBreakup;
type RefundBreakup = {
    /**
     * - Specifies the method or channel through which the
     * refund is divided or processed, such as Online or Offline. This indicates
     * how the refund amount is split across different refund methods.
     */
    mode?: string;
    /**
     * - Amount for the refund breakup
     */
    amount?: number;
    /**
     * - Display name for the refund breakup mode
     */
    display_name?: string;
    /**
     * - Whether the breakup is offline
     */
    offline?: boolean;
};
/** @returns {RefundOptionShipmentResponse} */
declare function RefundOptionShipmentResponse(): RefundOptionShipmentResponse;
type RefundOptionShipmentResponse = {
    /**
     * - ID of the refund option
     */
    id?: number;
    /**
     * - Name of the refund option
     */
    name?: string;
    /**
     * - Display name of the refund option
     */
    display_name?: string;
    /**
     * - Whether the refund option is active
     */
    is_active?: boolean;
    /**
     * - List of refund breakups (optional)
     */
    breakups?: RefundBreakup[];
    /**
     * - List of sub-options for the refund option
     */
    option?: RefundSubOption[];
    /**
     * - Whether the refund option is offline
     */
    offline?: boolean;
    /**
     * - Amount for the refund option (optional)
     */
    amount?: number;
    /**
     * - Slug of refund option
     */
    slug?: string;
    /**
     * - Value of refund for this refund option
     */
    value?: string;
    /**
     * - Type of refund option
     */
    type?: string;
};
/** @returns {CurrencySchema} */
declare function CurrencySchema(): CurrencySchema;
type CurrencySchema = {
    /**
     * - The currency code (e.g., INR)
     */
    currency_code?: string;
    /**
     * - The symbol of the currency (e.g., ?)
     */
    currency_symbol?: string;
};
/** @returns {RefundOptionsSchemaResponse} */
declare function RefundOptionsSchemaResponse(): RefundOptionsSchemaResponse;
type RefundOptionsSchemaResponse = {
    success?: boolean;
    currency?: CurrencySchema;
    refund_options?: RefundOptionShipmentResponse[];
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
/** @returns {StoreReassignResponse} */
declare function StoreReassignResponse(): StoreReassignResponse;
type StoreReassignResponse = {
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
     * - Expected entity_type: [bags, shipments]
     */
    entity_type: string;
    /**
     * - Expected Actions: [lock, unlock, check]
     */
    action: string;
    /**
     * - Expected action_type: [complete,
     * operational, financial]
     */
    action_type: string;
    /**
     * - The ID of the user.
     */
    user_id?: string;
    /**
     * - Shipment/Entity
     */
    entities: Entities[];
    resume_tasks_after_unlock?: boolean;
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
    /**
     * - Shipment ID
     */
    shipment_id?: string;
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
/** @returns {CheckResponse} */
declare function CheckResponse(): CheckResponse;
type CheckResponse = {
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
/** @returns {UpdateShipmentLockResponse} */
declare function UpdateShipmentLockResponse(): UpdateShipmentLockResponse;
type UpdateShipmentLockResponse = {
    success?: boolean;
    message?: string;
    /**
     * - Entity Lock Status, If the
     * action input as 'check'
     */
    check_response?: CheckResponse[];
    /**
     * - Status
     */
    status?: number;
};
/** @returns {AnnouncementResponse} */
declare function AnnouncementResponse(): AnnouncementResponse;
type AnnouncementResponse = {
    to_datetime?: string;
    id: number;
    description?: string;
    platform_name?: string;
    from_datetime?: string;
    platform_id?: string;
    title?: string;
    company_id?: number;
    logo_url?: string;
    created_at?: string;
};
/** @returns {AnnouncementsResponse} */
declare function AnnouncementsResponse(): AnnouncementsResponse;
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
    success?: boolean;
    message?: string;
    status?: number;
};
/** @returns {Click2CallResponse} */
declare function Click2CallResponse(): Click2CallResponse;
type Click2CallResponse = {
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
    status?: number;
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
     * - The quantity of the product or item. This
     * indicates how many units of the product are being referenced or processed,
     * such as the number of items in a bag or shipment.
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
    data?: any;
};
/** @returns {EntitiesDataUpdates} */
declare function EntitiesDataUpdates(): EntitiesDataUpdates;
type EntitiesDataUpdates = {
    filters?: any[];
    data?: any;
};
/** @returns {RepricedProductsDataUpdates} */
declare function RepricedProductsDataUpdates(): RepricedProductsDataUpdates;
type RepricedProductsDataUpdates = {
    /**
     * - A unique identifier to filter the product
     * or bag within the shipment.
     */
    line_number?: number;
    /**
     * - A seller's product identifier used to
     * filter the bag within the shipment.
     */
    identifier?: string;
    /**
     * - Adjusted price of the bag.
     */
    price?: number;
};
/** @returns {DataUpdates} */
declare function DataUpdates(): DataUpdates;
type DataUpdates = {
    order_item_status?: OrderItemDataUpdates[];
    products?: ProductsDataUpdates[];
    entities?: EntitiesDataUpdates[];
    /**
     * - To update the
     * prices of the line items and trigger the repricing event process.
     */
    repriced_products?: RepricedProductsDataUpdates[];
};
/** @returns {TransitionComments} */
declare function TransitionComments(): TransitionComments;
type TransitionComments = {
    /**
     * - Title of the comment
     */
    title?: string;
    /**
     * - Comment to be added
     */
    message?: string;
};
/** @returns {ShipmentsRequest} */
declare function ShipmentsRequest(): ShipmentsRequest;
type ShipmentsRequest = {
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
    transition_comments?: TransitionComments[];
};
/** @returns {StatuesRequest} */
declare function StatuesRequest(): StatuesRequest;
type StatuesRequest = {
    status?: string;
    shipments?: ShipmentsRequest[];
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
/** @returns {ActionRequest} */
declare function ActionRequest(): ActionRequest;
type ActionRequest = {
    /**
     * - Action Enum for Corresponding state name
     */
    action?: string;
    shipments?: ShipmentsRequest[];
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
/** @returns {UpdateShipmentStatusRequest} */
declare function UpdateShipmentStatusRequest(): UpdateShipmentStatusRequest;
type UpdateShipmentStatusRequest = {
    /**
     * - Force Transition
     */
    force_transition?: boolean;
    statuses?: StatuesRequest[];
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
/** @returns {UpdateShipmentActionRequest} */
declare function UpdateShipmentActionRequest(): UpdateShipmentActionRequest;
type UpdateShipmentActionRequest = {
    /**
     * - Force Transition
     */
    force_transition?: boolean;
    statuses?: ActionRequest[];
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
};
/** @returns {ShipmentsResponse} */
declare function ShipmentsResponse(): ShipmentsResponse;
type ShipmentsResponse = {
    status?: number;
    final_state?: any;
    identifier?: string;
    stack_trace?: string;
    code?: string;
    meta?: any;
    message?: string;
    exception?: string;
};
/** @returns {StatuesResponse} */
declare function StatuesResponse(): StatuesResponse;
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
/** @returns {UpdateShipmentStatusResponseBody} */
declare function UpdateShipmentStatusResponseBody(): UpdateShipmentStatusResponseBody;
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
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
    _id: string;
    brand_id: number;
    dimension: any;
    category: any;
    weight: any;
    attributes: any;
    quantity: number;
};
/** @returns {LocationDetails} */
declare function LocationDetails(): LocationDetails;
type LocationDetails = {
    fulfillment_type: string;
    articles: ArticleDetails[];
    fulfillment_id: number;
};
/** @returns {ShipmentDetails} */
declare function ShipmentDetails(): ShipmentDetails;
type ShipmentDetails = {
    box_type?: string;
    shipments: number;
    fulfillment_id: number;
    articles: ArticleDetails[];
    dp_id?: string;
    meta?: any;
    affiliate_shipment_id: string;
    dp_options?: any;
    lock_status?: boolean;
    action_to_status?: any;
};
/** @returns {ShipmentConfig} */
declare function ShipmentConfig(): ShipmentConfig;
type ShipmentConfig = {
    location_details?: LocationDetails;
    source: string;
    to_pincode: string;
    shipment: ShipmentDetails[];
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
    affiliate_meta: any;
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
    affiliate_order_id?: string;
    cod_charges: number;
    items: any;
    discount: number;
    billing_address: OrderUser;
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
    updated_at: string;
    name: string;
    token: string;
    meta?: AffiliateAppConfigMeta[];
    owner: string;
    secret: string;
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
     * - Identifier of the application company
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
/** @returns {CreateOrderConfig} */
declare function CreateOrderConfig(): CreateOrderConfig;
type CreateOrderConfig = {
    dp_configuration?: DPConfiguration;
    /**
     * - Flag denotes integration type which
     * is used to retrieve specific configurations and application details
     * relevant to channel fulfillment.
     */
    integration_type?: string;
    /**
     * - Flag denotes if the location
     * for the store needs to be reassigned post cancellation.
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
};
/** @returns {CreateOrderPayload} */
declare function CreateOrderPayload(): CreateOrderPayload;
type CreateOrderPayload = {
    affiliate_id: string;
    order_info: OrderInfo;
    order_config: OrderConfig;
};
/** @returns {CreateOrderResponse} */
declare function CreateOrderResponse(): CreateOrderResponse;
type CreateOrderResponse = {
    fynd_order_id?: string;
};
/** @returns {DispatchManifest} */
declare function DispatchManifest(): DispatchManifest;
type DispatchManifest = {
    manifest_id: string;
};
/** @returns {SuccessResponse} */
declare function SuccessResponse(): SuccessResponse;
type SuccessResponse = {
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
/** @returns {GetActionsResponse} */
declare function GetActionsResponse(): GetActionsResponse;
type GetActionsResponse = {
    permissions?: ActionInfo[];
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
    store_code?: string;
    billsec?: string;
    recordpath?: string;
    status2?: string;
    callerid?: string;
    duration?: string;
    channel_type?: string;
    activity_comment?: string;
    activity_type?: string;
    receiver?: string;
    recipient?: string;
    slug?: string;
    message?: string;
    type?: string;
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
     * - User Details
     */
    user_details?: any;
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
     * - Type of history, Expected Values: [
     * activity_status, activity_escalation, activity_comment,
     * outbound_notification, outbound_voice ]
     */
    type: string;
    /**
     * - L2 details of bag
     */
    l2_detail?: string;
    /**
     * - Assigned Agent
     */
    assigned_agent?: string;
    /**
     * - Meta
     */
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
    created_ts?: string;
};
/** @returns {ShipmentHistoryResponse} */
declare function ShipmentHistoryResponse(): ShipmentHistoryResponse;
type ShipmentHistoryResponse = {
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
     * - Days
     */
    days: number;
    /**
     * - Reason
     */
    reason: string;
    /**
     * - ShipmentId
     */
    shipment_id?: string;
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
    order_id?: string;
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
     * - Country code for SMS
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
    created_at?: string;
    user_id?: string;
    tax_details?: TaxDetails;
    mongo_cart_id?: number;
    delivery_charges?: number;
    transaction_id?: string;
    collect_by?: string;
    headers?: any;
    coupon_value?: number;
    order_value?: number;
    created_time?: string;
    currency?: string;
    total_order_value?: number;
    ordering_channel?: string;
    meta?: any;
    cod_charges?: number;
    cashback_value?: number;
    refund_by?: string;
    affiliate_order_date?: string;
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
    status_code?: number;
    success: boolean;
    result?: OrderStatusData[];
};
/** @returns {SendSmsResponse} */
declare function SendSmsResponse(): SendSmsResponse;
type SendSmsResponse = {
    success: boolean;
    message: string;
};
/** @returns {Dimension} */
declare function Dimension(): Dimension;
type Dimension = {
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
/** @returns {UpdatePackagingDimensionsResponse} */
declare function UpdatePackagingDimensionsResponse(): UpdatePackagingDimensionsResponse;
type UpdatePackagingDimensionsResponse = {
    message?: string;
};
/** @returns {Tax} */
declare function Tax(): Tax;
type Tax = {
    name: string;
    rate: number;
    breakup?: any[];
    amount: Amount;
};
/** @returns {Amount} */
declare function Amount(): Amount;
type Amount = {
    value?: number;
    currency?: string;
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
    amount: Amount;
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
/** @returns {CurrencyValueSchema} */
declare function CurrencyValueSchema(): CurrencyValueSchema;
type CurrencyValueSchema = {
    /**
     * - The numerical value of the charge.
     */
    value: number;
    /**
     * - The currency code (e.g., USD, INR).
     */
    currency: string;
};
/** @returns {AmountSchema} */
declare function AmountSchema(): AmountSchema;
type AmountSchema = {
    ordering_currency: CurrencyValueSchema;
    base_currency: CurrencyValueSchema;
};
/** @returns {DynamicChargeTaxSchema} */
declare function DynamicChargeTaxSchema(): DynamicChargeTaxSchema;
type DynamicChargeTaxSchema = {
    /**
     * - HSN (Harmonized System of
     * Nomenclature) code for reporting purposes.
     */
    reporting_hsn_code: string;
};
/** @returns {RuleConditionsSchema} */
declare function RuleConditionsSchema(): RuleConditionsSchema;
type RuleConditionsSchema = {
    /**
     * - The tag for the article.
     */
    article_tag: string;
    /**
     * - List of applicable departments.
     */
    department: string[];
};
/** @returns {RuleSchema} */
declare function RuleSchema(): RuleSchema;
type RuleSchema = {
    conditions: RuleConditionsSchema;
};
/** @returns {DistributionSchema} */
declare function DistributionSchema(): DistributionSchema;
type DistributionSchema = {
    /**
     * - Type of distribution (single or multi).
     */
    type: string;
    /**
     * - Logic for distribution (apportion, equally).
     */
    logic: string;
    rule?: RuleSchema;
};
/** @returns {DistributionLogicSchema} */
declare function DistributionLogicSchema(): DistributionLogicSchema;
type DistributionLogicSchema = {
    /**
     * - The level at which the charge is
     * distributed (order, article, shipment).
     */
    distribution_level: string;
    distribution: DistributionSchema;
};
/** @returns {DynamicChargeSchema} */
declare function DynamicChargeSchema(): DynamicChargeSchema;
type DynamicChargeSchema = {
    /**
     * - The name of the charge.
     */
    name: string;
    /**
     * - The category or type of the charge.
     */
    type: string;
    /**
     * - An optional code associated with the charge for
     * internal tracking.
     */
    code?: string;
    amount: AmountSchema;
    taxes?: DynamicChargeTaxSchema;
    /**
     * - Meta data of the custom charge.
     */
    meta?: any;
    distribution_logic?: DistributionLogicSchema;
};
/** @returns {LineItem} */
declare function LineItem(): LineItem;
type LineItem = {
    /**
     * - These are the mandatory charges required
     * during order creation and are integral to the order processing flow. They
     * include fields like amount_paid, discount, and price_marked. The schema for
     * these charges is predefined and remains consistent, ensuring seamless
     * forward mapping in the code.
     */
    charges: Charge[];
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
    /**
     * - (Optional) These are
     * additional charges specified by the client based on specific use cases.
     * They allow for flexibility in adding new fields such as installation_fee,
     * service_charge, or other dynamic costs.
     */
    dynamic_charges?: DynamicChargeSchema[];
};
/** @returns {ProcessingDates} */
declare function ProcessingDates(): ProcessingDates;
type ProcessingDates = {
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
    dispatch_by_date?: string;
    confirm_by_date?: string;
    customer_pickup_slot?: any;
    pack_by_date?: string;
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
    external_location_id?: string;
    processing_dates?: ProcessingDates;
    /**
     * - Meta data of the shipment.
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
     * - The order type of shipment HomeDelivery -
     * If the customer wants the order home-delivered PickAtStore - If the
     * customer wants the handover of an order at the store itself.
     */
    order_type?: string;
    parent_type?: string;
    store_invoice_id?: string;
    lock_status?: string;
    type?: string;
    billing_address_json?: Address;
    id?: string;
    fulfilment_priority?: number;
    is_active?: boolean;
    previous_shipment_id?: string;
    pdf_links?: any;
    delivery_address_json?: Address;
    eway_bill_id?: string;
    affiliate_shipment_id?: string;
    fynd_order_id?: string;
    tags?: string[];
    created_at?: string;
    delivery_awb_number?: string;
    hand_over_contact_json?: Address;
    credit_note_id?: string;
    parent_id?: string;
    affiliate_id?: string;
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
    customer_code?: string;
    shipping_type?: string;
    middle_name?: string;
    primary_mobile_number?: string;
    last_name?: string;
    geo_location?: any;
    gender?: string;
    house_no?: string;
    first_name?: string;
    title?: string;
    landmark?: string;
    country?: string;
    address_type?: string;
    state_code?: string;
    city?: string;
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
    country_code?: string;
};
/** @returns {BillingInfo} */
declare function BillingInfo(): BillingInfo;
type BillingInfo = {
    alternate_mobile_number?: string;
    state?: string;
    customer_code?: string;
    middle_name?: string;
    primary_mobile_number?: string;
    last_name?: string;
    gender?: string;
    house_no?: string;
    first_name?: string;
    title?: string;
    country?: string;
    state_code?: string;
    city?: string;
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
    country_code?: string;
};
/** @returns {UserInfo} */
declare function UserInfo(): UserInfo;
type UserInfo = {
    user_id?: string;
    user_type?: string;
    primary_email: string;
    gender?: string;
    first_name: string;
    last_name?: string;
    primary_mobile_number: string;
    is_authenticated?: boolean;
    meta?: any;
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
    meta?: any;
    transaction_data?: any;
    collected: boolean;
    display_name: string;
    merchant_transaction_id: string;
};
/** @returns {PaymentInfo} */
declare function PaymentInfo(): PaymentInfo;
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
/** @returns {CurrencyInfoCurrency} */
declare function CurrencyInfoCurrency(): CurrencyInfoCurrency;
type CurrencyInfoCurrency = {
    currency_code?: string;
    currency_name?: string;
    currency_sub_unit?: string;
    currency_symbol?: string;
};
/** @returns {CurrencyInfoConversionRate} */
declare function CurrencyInfoConversionRate(): CurrencyInfoConversionRate;
type CurrencyInfoConversionRate = {
    rates?: any;
    base?: string;
    timestamp?: number;
};
/** @returns {CurrencyInfo} */
declare function CurrencyInfo(): CurrencyInfo;
type CurrencyInfo = {
    currency?: CurrencyInfoCurrency;
    order_currency?: string;
    conversion_rate?: ConversionRate;
    ordering_currency?: OrderingCurrency;
};
/** @returns {ConfigPayment} */
declare function ConfigPayment(): ConfigPayment;
type ConfigPayment = {
    source?: string;
    mode_of_payment?: string;
};
/** @returns {ConfigDpConfiguration} */
declare function ConfigDpConfiguration(): ConfigDpConfiguration;
type ConfigDpConfiguration = {
    shipping_by?: string;
    refund_by?: string;
    mode?: string;
};
/** @returns {ConfigApplication} */
declare function ConfigApplication(): ConfigApplication;
type ConfigApplication = {
    id: string;
    logo?: string;
};
/** @returns {CreateOrderAPI} */
declare function CreateOrderAPI(): CreateOrderAPI;
type CreateOrderAPI = {
    shipments: Shipment[];
    shipping_info: any;
    billing_info: any;
    currency_info?: CurrencyInfo;
    external_order_id?: string;
    external_shipment_id?: string;
    order_type?: string;
    /**
     * - These are the mandatory charges required
     * during order creation and are integral to the order processing flow. They
     * include fields like amount_paid, discount, and price_marked, etc.. The
     * schema for these charges is predefined and remains consistent, ensuring
     * seamless forward mapping in the code.
     */
    charges?: Charge[];
    external_creation_date?: string;
    meta?: any;
    tax_info?: TaxInfo;
    config?: CreateOrderConfig;
    payment_info: PaymentInfo;
    user_info?: UserInfo;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    /**
     * - (Optional) These are
     * additional charges specified by the client based on specific use cases.
     * They allow for flexibility in adding new fields such as installation_fee,
     * service_charge, or other dynamic costs.
     */
    dynamic_charges?: DynamicChargeSchema[];
};
/** @returns {CreateOrderErrorReponse} */
declare function CreateOrderErrorReponse(): CreateOrderErrorReponse;
type CreateOrderErrorReponse = {
    success?: boolean;
    errors?: string;
    fynd_order_id?: string;
};
/** @returns {DpConfiguration} */
declare function DpConfiguration(): DpConfiguration;
type DpConfiguration = {
    shipping_by?: string;
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
    dp_configuration?: DpConfiguration;
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
/** @returns {CreateChannelConifgErrorResponse} */
declare function CreateChannelConifgErrorResponse(): CreateChannelConifgErrorResponse;
type CreateChannelConifgErrorResponse = {
    error?: string;
};
/** @returns {CreateChannelConfigResponse} */
declare function CreateChannelConfigResponse(): CreateChannelConfigResponse;
type CreateChannelConfigResponse = {
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
    message?: string;
    status?: number;
};
/** @returns {OrderData} */
declare function OrderData(): OrderData;
type OrderData = {
    /**
     * - The unique identifier for the data item within an order.
     */
    key?: string;
    /**
     * - Defines new value for the order property. Direct
     * assignment occurs for basic types (string, number, etc.). For objects, it
     * updates or adds specific fields without replacing the entire property.
     */
    value?: any;
    /**
     * - Order created timestamp
     */
    order_date?: string;
    /**
     * - Order created timestamp
     */
    created_ts?: string;
    tax_details?: TaxDetails;
    /**
     * - Meta object for extra data
     */
    meta?: any;
    /**
     * - System generated unique identifier of the order
     */
    fynd_order_id?: string;
    prices?: Prices;
    /**
     * - Order level charges
     */
    charges?: PriceAdjustmentCharge[];
    /**
     * - Object containing payment methods used
     * for placing an order. The key will be COD if Cash on Delivery (COD) payment
     * mode is used, and the corresponding value will provide information about
     * that payment method. If Partner Pay is used, the key will be PP with
     * relevant payment details.
     */
    payment_methods?: any;
    /**
     * - Array of object containing
     * payment methods used for placing an order.
     */
    payment_info?: PaymentInfoData[];
    /**
     * - Identifier of the order assigned by
     * the application
     */
    affiliate_order_id?: string;
};
/** @returns {OrderUpdatePayload} */
declare function OrderUpdatePayload(): OrderUpdatePayload;
type OrderUpdatePayload = {
    data?: OrderData[];
};
/** @returns {OrderUpdateResponseDetail} */
declare function OrderUpdateResponseDetail(): OrderUpdateResponseDetail;
type OrderUpdateResponseDetail = {
    /**
     * - Indicates whether the order update was successful.
     */
    success?: boolean;
    /**
     * - Provides a message related to the order update
     * operation, which could be an error message or a success confirmation.
     */
    message?: string;
    /**
     * - An object containing any validation
     * errors that occurred during the order update process.
     */
    validation_errors?: any;
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
    start_date: string;
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
    seller_id: number;
    customer_mobile_number: string;
};
/** @returns {CreditBalanceInfo} */
declare function CreditBalanceInfo(): CreditBalanceInfo;
type CreditBalanceInfo = {
    total_credited_balance?: number;
    reason?: string;
    customer_mobile_number?: string;
    is_cn_locked?: boolean;
    total_locked_amount?: number;
    allowed_redemption_amount?: number;
};
/** @returns {FetchCreditBalanceResponsePayload} */
declare function FetchCreditBalanceResponsePayload(): FetchCreditBalanceResponsePayload;
type FetchCreditBalanceResponsePayload = {
    message?: string;
    status?: number;
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
/** @returns {RefundModeInfoFormat} */
declare function RefundModeInfoFormat(): RefundModeInfoFormat;
type RefundModeInfoFormat = {
    refund_to?: string;
    manual_refund_data?: any;
};
/** @returns {RefundModeInfo} */
declare function RefundModeInfo(): RefundModeInfo;
type RefundModeInfo = {
    format?: RefundModeInfoFormat;
    is_active?: boolean;
    slug?: string;
    options?: RefundOption[];
    display_name?: string;
};
/** @returns {RefundModeConfigResponsePayload} */
declare function RefundModeConfigResponsePayload(): RefundModeConfigResponsePayload;
type RefundModeConfigResponsePayload = {
    success: boolean;
    status?: number;
    message?: string;
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
    country_code?: string;
};
/** @returns {AttachOrderUser} */
declare function AttachOrderUser(): AttachOrderUser;
type AttachOrderUser = {
    otp_data: AttachUserOtpData;
    fynd_order_id: string;
    user_info: AttachUserInfo;
};
/** @returns {AttachOrderUserResponse} */
declare function AttachOrderUserResponse(): AttachOrderUserResponse;
type AttachOrderUserResponse = {
    success?: boolean;
    message?: string;
    status?: number;
};
/** @returns {AttachOrderUserErrorResponse} */
declare function AttachOrderUserErrorResponse(): AttachOrderUserErrorResponse;
type AttachOrderUserErrorResponse = {
    success?: boolean;
    status?: number;
    message?: string;
};
/** @returns {SendUserMobileOTP} */
declare function SendUserMobileOTP(): SendUserMobileOTP;
type SendUserMobileOTP = {
    mobile: string;
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
/** @returns {SendUserMobileOtpResponse} */
declare function SendUserMobileOtpResponse(): SendUserMobileOtpResponse;
type SendUserMobileOtpResponse = {
    status?: number;
    success?: boolean;
    message?: string;
    data?: PointBlankOtpData;
};
/** @returns {VerifyOtpData} */
declare function VerifyOtpData(): VerifyOtpData;
type VerifyOtpData = {
    request_id: string;
    mobile: string;
    otp_code: string;
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
    email?: string;
    message?: string;
    fynd_order_id?: string;
    country_code?: string;
};
/** @returns {VerifyOtpResponse} */
declare function VerifyOtpResponse(): VerifyOtpResponse;
type VerifyOtpResponse = {
    status?: number;
    success?: boolean;
    message?: string;
    data?: VerifyOtpResponseData;
};
/** @returns {VerifyOtpErrorResponseData} */
declare function VerifyOtpErrorResponseData(): VerifyOtpErrorResponseData;
type VerifyOtpErrorResponseData = {
    success?: boolean;
    message?: string;
};
/** @returns {VerifyOtpErrorResponse} */
declare function VerifyOtpErrorResponse(): VerifyOtpErrorResponse;
type VerifyOtpErrorResponse = {
    status?: number;
    success?: boolean;
    message?: string;
    data?: VerifyOtpErrorResponseData;
};
/** @returns {BulkReportsDownloadRequest} */
declare function BulkReportsDownloadRequest(): BulkReportsDownloadRequest;
type BulkReportsDownloadRequest = {
    /**
     * - Download for specific store ids.
     */
    store_ids?: string[];
    lane_type?: string;
    /**
     * - Download report with specific headers
     */
    custom_headers?: string;
    /**
     * - Type of report
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
    custom_filters_for_lane?: any;
    /**
     * - Download report with given filters -
     * shipment_status, dates, payment_mode, sales_channels etc.
     */
    filters?: any;
};
/** @returns {BulkReportsDownloadResponse} */
declare function BulkReportsDownloadResponse(): BulkReportsDownloadResponse;
type BulkReportsDownloadResponse = {
    success?: boolean;
    batch_id?: string;
};
/** @returns {BulkFailedResponse} */
declare function BulkFailedResponse(): BulkFailedResponse;
type BulkFailedResponse = {
    status?: boolean;
    error?: string;
};
/** @returns {BulkStateTransistionRequest} */
declare function BulkStateTransistionRequest(): BulkStateTransistionRequest;
type BulkStateTransistionRequest = {
    url?: string;
    file_name?: string;
};
/** @returns {BulkStateTransistionResponse} */
declare function BulkStateTransistionResponse(): BulkStateTransistionResponse;
type BulkStateTransistionResponse = {
    status?: boolean;
    message?: string;
    batch_id?: string;
};
/** @returns {ShipmentActionInfo} */
declare function ShipmentActionInfo(): ShipmentActionInfo;
type ShipmentActionInfo = {
    label?: string[];
    invoice?: string[];
    failed_shipments?: any[];
    processing_shipments?: string[];
    successful_shipments?: string[];
    invoiceable_shipments?: string[];
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
    meta?: any;
    invoice_document_type?: string;
    label_document_type?: string;
    file_name?: string;
    store_name?: string;
    updated_ts?: number;
    status?: boolean;
    store_code?: string;
    bulk_action_type?: string;
    created_ts?: string;
    invoice_status?: string;
    do_invoice_label_generated?: boolean;
    id?: number;
    user_id?: string;
    last_selected_invoice_label_type?: string;
    batch_id?: string;
    uploaded_by?: string;
    failed_sh_count?: number;
    successful_sh_count?: number;
    successful_invoiced_count?: number;
    failed_invoiced_count?: number;
    total_shipments_count?: number;
    total_count?: number;
    failed_shipments?: string[];
    total_invoiced_count?: number;
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
/** @returns {BulkListingResponse} */
declare function BulkListingResponse(): BulkListingResponse;
type BulkListingResponse = {
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
/** @returns {JobDetailsResponse} */
declare function JobDetailsResponse(): JobDetailsResponse;
type JobDetailsResponse = {
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
/** @returns {JobFailedResponse} */
declare function JobFailedResponse(): JobFailedResponse;
type JobFailedResponse = {
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
    from_date?: string;
    to_date?: string;
    end_date?: string;
    start_date?: string;
};
/** @returns {Filters} */
declare function Filters(): Filters;
type Filters = {
    date_range?: DateRange;
    stores?: number;
    dp_name?: string;
    dp_ids?: string;
    lane?: string;
    selected_shipments?: string;
    deselected_shipments?: string;
    store_name?: string;
    type?: string;
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
/** @returns {FiltersRequest} */
declare function FiltersRequest(): FiltersRequest;
type FiltersRequest = {
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
    filters: FiltersRequest;
    action: string;
    unique_id: string;
    manifest_id?: string;
};
/** @returns {ProcessManifestResponse} */
declare function ProcessManifestResponse(): ProcessManifestResponse;
type ProcessManifestResponse = {
    company_id?: number;
    filters?: Filters;
    user_id?: string;
    manifest_id?: string;
    action?: string;
    uid?: string;
    created_by?: string;
};
/** @returns {ProcessManifestItemResponse} */
declare function ProcessManifestItemResponse(): ProcessManifestItemResponse;
type ProcessManifestItemResponse = {
    items?: ProcessManifestResponse;
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
/** @returns {ManifestFiltersResponse} */
declare function ManifestFiltersResponse(): ManifestFiltersResponse;
type ManifestFiltersResponse = {
    advance?: FiltersInfo[];
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
     * - Total
     */
    total?: number;
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
    signed_qr_code: string;
};
/** @returns {EInvoiceErrorDetails} */
declare function EInvoiceErrorDetails(): EInvoiceErrorDetails;
type EInvoiceErrorDetails = {
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
/** @returns {EInvoiceRetryResponse} */
declare function EInvoiceRetryResponse(): EInvoiceRetryResponse;
type EInvoiceRetryResponse = {
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
    einvoice_type: string;
    status: number;
    message: string;
    einvoice_info?: EInvoiceErrorInfo;
};
/** @returns {EInvoiceErrorResponse} */
declare function EInvoiceErrorResponse(): EInvoiceErrorResponse;
type EInvoiceErrorResponse = {
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
/** @returns {CourierPartnerTrackingResponse} */
declare function CourierPartnerTrackingResponse(): CourierPartnerTrackingResponse;
type CourierPartnerTrackingResponse = {
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
    created_at: string;
    error_message: string;
    display_message: string;
    method_name: string;
    meta: any;
};
/** @returns {FailedOrderLogs} */
declare function FailedOrderLogs(): FailedOrderLogs;
type FailedOrderLogs = {
    items: FailedOrdersItem[];
    page: PageDetails;
};
/** @returns {FailedOrderLogDetails} */
declare function FailedOrderLogDetails(): FailedOrderLogDetails;
type FailedOrderLogDetails = {
    error_trace: string;
    exception: string;
};
/** @returns {OptionItem} */
declare function OptionItem(): OptionItem;
type OptionItem = {
    text?: string;
    value?: string;
    total_items?: number;
};
/** @returns {SuperLaneItem} */
declare function SuperLaneItem(): SuperLaneItem;
type SuperLaneItem = {
    text?: string;
    value?: string;
    options?: OptionItem[];
    total_items?: number;
};
/** @returns {RuleLaneConfigResponse} */
declare function RuleLaneConfigResponse(): RuleLaneConfigResponse;
type RuleLaneConfigResponse = {
    super_lanes?: SuperLaneItem[];
};
/** @returns {RuleLaneConfigResponseSchema} */
declare function RuleLaneConfigResponseSchema(): RuleLaneConfigResponseSchema;
type RuleLaneConfigResponseSchema = {
    success?: boolean;
    error?: string;
};
/** @returns {RuleLaneConfigErrorResponse} */
declare function RuleLaneConfigErrorResponse(): RuleLaneConfigErrorResponse;
type RuleLaneConfigErrorResponse = {
    response?: RuleLaneConfigResponseSchema;
};
/** @returns {QuestionSetItem} */
declare function QuestionSetItem(): QuestionSetItem;
type QuestionSetItem = {
    id: number;
    display_name: string;
};
/** @returns {Reason} */
declare function Reason(): Reason;
type Reason = {
    id?: number;
    display_name: string;
    remark_required?: boolean;
    show_text_area?: boolean;
    reasons?: Reason[];
    qc_type: string[];
    question_set: QuestionSet[];
    meta: any;
    is_active: boolean;
    /**
     * - Indicates whether reason is deleted
     */
    is_deleted?: boolean;
};
/** @returns {RuleRequest} */
declare function RuleRequest(): RuleRequest;
type RuleRequest = {
    flow_type: string;
    name: string;
    description?: string;
    entity_type: string;
    value: string;
    channel: string;
    rule_type: string;
    is_deleted: boolean;
    restrict_forward_serviceability?: boolean;
    conditions: Condition[];
    meta: RuleMeta;
    qc_enabled: boolean;
    is_active: boolean;
    actions: RuleAction;
};
/** @returns {RuleResponse} */
declare function RuleResponse(): RuleResponse;
type RuleResponse = {
    id?: number;
    items?: RuleItem;
    success?: boolean;
    error?: RuleError;
};
/** @returns {RuleUpdateRequest} */
declare function RuleUpdateRequest(): RuleUpdateRequest;
type RuleUpdateRequest = {
    flow_type: string;
    name: string;
    description?: string;
    entity_type: string;
    value: string;
    channel: string;
    rule_type: string;
    is_deleted: boolean;
    position: number;
    restrict_forward_serviceability: boolean;
    conditions: Condition[];
    meta: RuleMeta;
    qc_enabled: boolean;
    is_active: boolean;
    actions: RuleAction;
};
/** @returns {Condition} */
declare function Condition(): Condition;
type Condition = {
    variable: string;
    operation: string;
};
/** @returns {RuleMeta} */
declare function RuleMeta(): RuleMeta;
type RuleMeta = {
    department?: Department;
    l3?: L3;
    restrict_forward_serviceability?: boolean;
};
/** @returns {RuleAction} */
declare function RuleAction(): RuleAction;
type RuleAction = {
    reasons?: Reason[];
};
/** @returns {Department} */
declare function Department(): Department;
type Department = {
    id?: string;
    display_name?: string;
};
/** @returns {L3} */
declare function L3(): L3;
type L3 = {
    id?: string;
    display_name?: string;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    type?: string;
    value?: string;
    message?: string;
    success?: boolean;
};
/** @returns {RuleSuccessResponse} */
declare function RuleSuccessResponse(): RuleSuccessResponse;
type RuleSuccessResponse = {
    id?: number;
    success?: boolean;
    error?: RuleError;
};
/** @returns {UpdateRulePositionRequest} */
declare function UpdateRulePositionRequest(): UpdateRulePositionRequest;
type UpdateRulePositionRequest = {
    rule_id: number;
    page_no: number;
    page_size: number;
    position: number;
    flow_type: string;
};
/** @returns {RuleListResponse} */
declare function RuleListResponse(): RuleListResponse;
type RuleListResponse = {
    page?: PageInfo;
    items?: RuleItem[];
    success?: boolean;
    error?: RuleError;
};
/** @returns {RuleItem} */
declare function RuleItem(): RuleItem;
type RuleItem = {
    id: string;
    entity_type: string;
    value: string;
    channel: string;
    actions: RuleAction;
    qc_enabled: boolean;
    is_deleted: boolean;
    restrict_forward_serviceability: boolean;
    conditions: Condition[];
    meta: RuleMeta;
    rule_type: string;
    is_active: boolean;
    name: string;
    description: string;
    flow_type: string;
    position: number;
};
/** @returns {RuleParametersResponse} */
declare function RuleParametersResponse(): RuleParametersResponse;
type RuleParametersResponse = {
    response?: ParameterResponse[];
};
/** @returns {ParameterResponse} */
declare function ParameterResponse(): ParameterResponse;
type ParameterResponse = {
    text?: string;
    value?: string;
};
/** @returns {RuleListRequest} */
declare function RuleListRequest(): RuleListRequest;
type RuleListRequest = {
    page_size?: number;
    page_no?: number;
    flow_type?: string;
    lane_type?: string;
};
/** @returns {ErrorGenericWithStatus} */
declare function ErrorGenericWithStatus(): ErrorGenericWithStatus;
type ErrorGenericWithStatus = {
    success?: boolean;
    message?: string;
    status?: number;
};
/** @returns {RuleListItem} */
declare function RuleListItem(): RuleListItem;
type RuleListItem = {
    id: string;
    entity_type: string;
    value: string;
    channel: string;
    actions: RuleAction;
    qc_enabled: boolean;
    is_deleted: boolean;
    conditions: Condition;
    meta: Meta;
    rule_type: string;
    is_active: boolean;
    name: string;
    description: string;
    flow_type: string;
    position: number;
    success: boolean;
    error: RuleError;
};
/** @returns {RuleError} */
declare function RuleError(): RuleError;
type RuleError = {
    type: string;
    value: string;
    message: string;
};
/** @returns {RuleErrorResponse} */
declare function RuleErrorResponse(): RuleErrorResponse;
type RuleErrorResponse = {
    success?: boolean;
    error?: string;
};
/** @returns {PageInfo} */
declare function PageInfo(): PageInfo;
type PageInfo = {
    type?: string;
    current?: number;
    size?: number;
    item_total?: number;
    has_previous?: boolean;
    has_next?: boolean;
    page_size?: number;
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
/** @returns {ConfigUpdatedResponse} */
declare function ConfigUpdatedResponse(): ConfigUpdatedResponse;
type ConfigUpdatedResponse = {
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
    value?: any;
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
     * - Indicates the type or category of the order.
     *
     * - PickAtStore: Pick from store
     * - HomeDelivery: Home delivery
     * - Digital: Digital
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
     * - Specifies the country code of the seller.
     *
     * - `seller_country_code`: US
     * - `seller_country_code`: UK
     * - `seller_country_code`: IN
     */
    seller_country_code?: string;
    /**
     * - Specifies the country code of the seller.
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
/** @returns {ProcessManifestRequest} */
declare function ProcessManifestRequest(): ProcessManifestRequest;
type ProcessManifestRequest = {
    /**
     * - Expected Actions: [save, process,
     * pdf_generated,invalidate,pdf_failed,complete]
     */
    action?: string;
    filters?: Filters;
    /**
     * - Unique Id.
     */
    unique_id?: string;
};
/** @returns {ManifestResponse} */
declare function ManifestResponse(): ManifestResponse;
type ManifestResponse = {
    items?: ManifestItems;
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
    /**
     * - Courier partner slug
     */
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
/** @returns {ManifestErrorResponse} */
declare function ManifestErrorResponse(): ManifestErrorResponse;
type ManifestErrorResponse = {
    /**
     * - Success State.
     */
    success?: boolean;
    /**
     * - Error String.
     */
    error?: string;
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
    /**
     * - Total number of items.
     */
    total?: number;
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
};
/** @returns {ShipmentStatus} */
declare function ShipmentStatus(): ShipmentStatus;
type ShipmentStatus = {
    /**
     * - Current shipment status; it
     * can be financial, logistics or operational
     */
    current_shipment_status?: string;
    /**
     * - Meta object for extra data
     */
    meta?: any;
    shipment_status_id?: number;
    /**
     * - List of Bag ids transitioned in this shipments status
     */
    bag_list?: string[];
    /**
     * - Title
     */
    title: string;
    /**
     * - Shipment status created date
     */
    created_at?: string;
    /**
     * - Shipment status created date timestamp
     */
    created_ts?: string;
    /**
     * - Unique shipment no. that is auto-generated
     */
    shipment_id?: string;
    /**
     * - Shipment status created date
     */
    status_created_at?: string;
    /**
     * - Shipment status created date timestamp
     */
    status_created_ts?: string;
    /**
     * - Status of shipment
     */
    status: string;
};
/** @returns {UserDataInfo} */
declare function UserDataInfo(): UserDataInfo;
type UserDataInfo = {
    /**
     * - UID of the user
     */
    uid?: number;
    /**
     * - User Object ID assigned within the system
     */
    user_oid?: string;
    /**
     * - External identifier associated
     * with the purchaser user in another system
     */
    external_customer_id?: string;
    /**
     * - First name of the purchaser user
     */
    first_name?: string;
    /**
     * - Last name of the purchaser user
     */
    last_name?: string;
    /**
     * - Mobile phone number of the purchaser user
     */
    mobile?: string;
    /**
     * - Email address of the purchaser user
     */
    email?: string;
    /**
     * - Flag indicating whether the user is anonymous
     */
    is_anonymous_user?: boolean;
    /**
     * - Avis user id
     */
    avis_user_id?: string;
    /**
     * - Name
     */
    name?: string;
    /**
     * - Gender of the purchaser user (e.g., male, female, other)
     */
    gender?: string;
};
/** @returns {Address} */
declare function Address(): Address;
type Address = {
    /**
     * - Mobile phone number of recipient associated with
     * the address
     */
    phone?: string;
    /**
     * - A string representing the second line of the
     * address, which can be used for additional address details if needed
     */
    address2?: string;
    /**
     * - The longitude of the address
     */
    longitude?: number;
    /**
     * - A string indicating the postal code or PIN
     * code of the address area
     */
    pincode?: string;
    /**
     * - A string specifying the locality or area
     * associated with the address
     */
    area?: string;
    /**
     * - Type of address (e.g., home, office, registered)
     */
    address_type?: string;
    /**
     * - A string indicating the country of the address
     */
    country?: string;
    /**
     * - Category or classification of the address
     */
    address_category?: string;
    /**
     * - Email of the recipient associated with the address
     */
    email?: string;
    /**
     * - Date and time when the address was created
     */
    created_at?: string;
    /**
     * - A string representing the first line of the
     * address, typically containing street or building information
     */
    address1?: string;
    /**
     * - Formatted display version of the address
     */
    display_address?: string;
    /**
     * - A string representing a prominent nearby
     * landmark that aids in locating the address
     */
    landmark?: string;
    /**
     * - Date and time when the address was last updated
     */
    updated_at?: string;
    /**
     * - Address version, to be deprecated
     */
    version?: string;
    /**
     * - The latitude of the address
     */
    latitude?: number;
    /**
     * - Name of the contact person associated
     * with the address
     */
    contact_person?: string;
    /**
     * - A string indicating the state or province of the address
     */
    state?: string;
    /**
     * - A string denoting the city or municipality of the address
     */
    city?: string;
};
/** @returns {ShipmentListingChannel} */
declare function ShipmentListingChannel(): ShipmentListingChannel;
type ShipmentListingChannel = {
    /**
     * - Channel shipment id
     */
    channel_shipment_id?: string;
    /**
     * - Flag to check Is affiliate
     */
    is_affiliate?: boolean;
    /**
     * - Visual representation or emblem associated
     */
    logo?: string;
    /**
     * - Name
     */
    name?: string;
};
/** @returns {Prices} */
declare function Prices(): Prices;
type Prices = {
    /**
     * - Refund credits provided to the customer
     */
    refund_credit?: number;
    /**
     * - Amount paid rounded off
     */
    amount_paid_roundoff?: number;
    /**
     * - MRP - Initial Seller provided discount
     */
    price_effective?: number;
    /**
     * - Effective promotion
     * discount including promotions given by seller and Platform
     */
    promotion_effective_discount?: number;
    /**
     * - PM price split
     */
    pm_price_split?: number;
    /**
     * - Amount to be refunded on cancellation and return
     */
    refund_amount?: number;
    /**
     * - Article
     */
    transfer_price?: number;
    /**
     * - Coupon provided by brand or seller
     */
    coupon_effective_discount?: number;
    /**
     * - The tax amount collected at
     * the source of income or transaction
     */
    tax_collected_at_source?: number;
    /**
     * - Price Effective - Coupon
     * Discount (Seller) - Promotion (Seller)
     */
    brand_calculated_amount?: number;
    /**
     * - The fee associated with the delivery
     * service for transporting the item to its destination
     */
    delivery_charge?: number;
    /**
     * - Cashback points
     */
    cashback?: number;
    /**
     * - Effective selling price - Product GST Amount
     */
    value_of_good?: number;
    /**
     * - Cashback applied on the order
     */
    cashback_applied?: number;
    /**
     * - The fee associated with the COD order
     */
    cod_charges?: number;
    /**
     * - The indicated price or value assigned to
     * an item before any discounts or adjustments
     */
    price_marked?: number;
    /**
     * - Amount paid by the customer
     */
    amount_paid?: number;
    /**
     * - Stores the coupon value as shown in the cart
     */
    coupon_value?: number;
    /**
     * - The total amount discounted from the original
     * MRP/actual price
     */
    discount?: number;
    /**
     * - Credits provided by Fynd
     */
    fynd_credits?: number;
    /**
     * - Gift card amount used
     */
    gift_price?: number;
    /**
     * - Amount to be collected
     */
    amount_to_be_collected?: number;
};
/** @returns {ChargeDistributionSchema} */
declare function ChargeDistributionSchema(): ChargeDistributionSchema;
type ChargeDistributionSchema = {
    /**
     * - This field defines the distribution type, e.g
     * values('multi', 'single') multi: distribute the charges across all entity
     * single: distribute the charges across to any one single entity
     */
    type: string;
    /**
     * - This field defines the distribution logic e.g
     * values('apportion', 'equally') apportion: distribute charge amount based on
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
     * - This field specifies the level of
     * distribution, such as order, shipment, or article
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
/** @returns {Identifier} */
declare function Identifier(): Identifier;
type Identifier = {
    /**
     * - ALU code of the product
     */
    alu?: string;
    /**
     * - EAN code of the product
     */
    ean?: string;
    /**
     * - SKU code of the product
     */
    sku_code?: string;
    /**
     * - UPC code of the product
     */
    upc?: string;
    /**
     * - ISBN code of the product
     */
    isbn?: string;
};
/** @returns {FinancialBreakup} */
declare function FinancialBreakup(): FinancialBreakup;
type FinancialBreakup = {
    /**
     * - Refund credits provided to the customer
     */
    refund_credit: number;
    /**
     * - Amount paid rounded off
     */
    amount_paid_roundoff?: number;
    /**
     * - MRP - Initial Seller provided discount
     */
    price_effective: number;
    /**
     * - Effective promotion
     * discount including promotions given by seller and Platform
     */
    promotion_effective_discount: number;
    /**
     * - Article
     */
    transfer_price: number;
    /**
     * - Coupon provided by brand or seller
     */
    coupon_effective_discount: number;
    /**
     * - The fee associated with Goods and Services Tax
     * (GST) for a product or service
     */
    gst_fee: number;
    /**
     * - The tax amount collected at
     * the source of income or transaction
     */
    tax_collected_at_source?: number;
    /**
     * - Price Effective - Coupon
     * Discount (Seller) - Promotion (Seller)
     */
    brand_calculated_amount: number;
    /**
     * - The fee associated with the delivery
     * service for transporting the item to its destination
     */
    delivery_charge: number;
    /**
     * - Type of GST applied - IGST, CGST, SGST
     */
    gst_tag: string;
    /**
     * - The Harmonized System of Nomenclature (HSN)
     * code, used for classifying goods traded internationally
     */
    hsn_code: string;
    /**
     * - Cashback points
     */
    cashback: number;
    /**
     * - The name of the item being referenced
     */
    item_name: string;
    /**
     * - Effective selling price - Product GST Amount
     */
    value_of_good: number;
    /**
     * - Cashback applied on the order
     */
    cashback_applied: number;
    /**
     * - The fee associated with the COD order
     */
    cod_charges: number;
    /**
     * - The indicated price or value assigned to an
     * item before any discounts or adjustments
     */
    price_marked: number;
    /**
     * - The physical dimensions or specifications of the
     * item, indicating its size or measurements
     */
    size: string;
    /**
     * - Amount paid by the customer
     */
    amount_paid: number;
    /**
     * - Stores the coupon value as shown in the cart
     */
    coupon_value: number;
    /**
     * - The total amount discounted from the original
     * MRP/actual price
     */
    discount: number;
    /**
     * - Credits provided by Fynd
     */
    fynd_credits: number;
    /**
     * - The percentage rate of GST applied to
     * a product or service
     */
    gst_tax_percentage: number;
    /**
     * - Amount to be collected
     */
    amount_to_be_collected?: number;
    identifiers: Identifier;
    /**
     * - Total number of units of the item
     */
    total_units: number;
    /**
     * - Flag indicating whether fynd cash
     * has been used
     */
    added_to_fynd_cash: boolean;
};
/** @returns {GSTDetailsData} */
declare function GSTDetailsData(): GSTDetailsData;
type GSTDetailsData = {
    /**
     * - Percentage of Central Goods and
     * Services Tax (CGST) applied to the transaction, applicable for intra-state
     * transactions within the same state
     */
    cgst_tax_percentage?: number;
    /**
     * - The Goods and Services Tax Identification
     * Number (GSTIN) associated with a business entity
     */
    gstin_code?: string;
    /**
     * - Effective selling price - Product GST Amount
     */
    value_of_good: number;
    /**
     * - The fee associated with Goods and Services Tax
     * (GST) for a product or service
     */
    gst_fee: number;
    /**
     * - Percentage of Integrated Goods and
     * Services Tax (IGST) applied to the transaction, applicable for inter-state
     * transactions
     */
    igst_tax_percentage?: number;
    /**
     * - The percentage rate of GST applied
     * to a product or service
     */
    gst_tax_percentage?: number;
    /**
     * - The unique identifier associated with HSN code
     */
    hsn_code_id?: string;
    /**
     * - Amount of Integrated Goods and Services
     * Tax (IGST) fee applied to the transaction, relevant for inter-state transactions
     */
    igst_gst_fee?: number;
    /**
     * - Indicates if the HSN code is default
     */
    is_default_hsn_code?: boolean;
    /**
     * - Amount of State Goods and Services Tax
     * (SGST) fee applied to the transaction, relevant for intra-state
     * transactions within the same state
     */
    sgst_gst_fee?: number;
    /**
     * - The tax amount collected at the
     * source of income or transaction
     */
    tax_collected_at_source: number;
    /**
     * - Effective selling price - Brands
     * additional discounts
     */
    brand_calculated_amount: number;
    /**
     * - Amount of Central Goods and Services Tax
     * (CGST) fee applied to the transaction, applicable for intra-state
     * transactions within the same state
     */
    cgst_gst_fee?: number;
    /**
     * - Type of GST applied - IGST, CGST, SGST
     */
    gst_tag?: string;
    /**
     * - Percentage of State Goods and
     * Services Tax (SGST) applied to the transaction, applicable for intra-state
     * transactions within the same state
     */
    sgst_tax_percentage?: number;
    /**
     * - The Harmonized System of Nomenclature (HSN)
     * code, used for classifying goods traded internationally
     */
    hsn_code?: string;
};
/** @returns {BagStateMapper} */
declare function BagStateMapper(): BagStateMapper;
type BagStateMapper = {
    /**
     * - A boolean flag indicating whether a state
     * is active or not
     */
    is_active?: boolean;
    /**
     * - The display name of a shipment status
     * as it appears on the sale channels website
     */
    app_display_name?: string;
    /**
     * - Type of the state - operational, logistics, financial
     */
    state_type: string;
    /**
     * - The unique identifier associated with the state
     */
    id: number;
    /**
     * - Journey type can be forward or return
     */
    journey_type: string;
    /**
     * - The slug of a shipment status from the
     * sale channels front
     */
    app_state_name?: string;
    /**
     * - The slug of a shipment status from the platforms front
     */
    name: string;
    /**
     * - A boolean flag indicating whether a
     * particular shipment status should be visible on the sale channels website
     */
    app_facing?: boolean;
    /**
     * - A boolean flag indicating whether a
     * particular shipment status should be notified to the customer
     */
    notify_customer?: boolean;
    /**
     * - The display name of a shipment status as it
     * appears on the platform
     */
    display_name: string;
};
/** @returns {BagStatusHistory} */
declare function BagStatusHistory(): BagStatusHistory;
type BagStatusHistory = {
    /**
     * - Flag to check forward
     */
    forward?: boolean;
    /**
     * - Store id associated with the bag
     */
    store_id?: number;
    /**
     * - Airway Bill (AWB) number
     * associated with the delivery
     */
    delivery_awb_number?: string;
    /**
     * - Flag indicating whether the bag status
     * history update has been sync with Kafka
     */
    kafka_sync?: boolean;
    /**
     * - Unique identifier of delivery partner
     */
    delivery_partner_id?: number;
    /**
     * - The display name of a shipment status
     * as it appears on the sale channels website
     */
    app_display_name?: string;
    /**
     * - The unique identifier associated with the state
     */
    state_id?: number;
    /**
     * - Type of the state - operational, logistics, financial
     */
    state_type?: string;
    /**
     * - The unique identifier associated with the state
     */
    bsh_id?: number;
    /**
     * - Date and time when the bag status history
     * record was created
     */
    created_at?: string;
    /**
     * - Timestamp indicating the exact time when
     * the bag status history record was created
     */
    created_ts?: string;
    /**
     * - Unique shipment no. that is auto-generated
     */
    shipment_id?: string;
    /**
     * - Date and time of the most recent update to
     * the bag status history record
     */
    updated_at?: string;
    /**
     * - Timestamp indicating the last time the bag
     * status history record was updated
     */
    updated_ts?: string;
    bag_state_mapper?: BagStateMapper;
    /**
     * - The unique identifier associated with the bag
     */
    bag_id?: number;
    /**
     * - List of reasons for the state change
     */
    reasons?: any[];
    /**
     * - Webhook shipment status, i.e., either create or update
     */
    status: string;
    /**
     * - The display name of a shipment status as
     * it appears on the platform
     */
    display_name?: string;
};
/** @returns {Dimensions} */
declare function Dimensions(): Dimensions;
type Dimensions = {
    /**
     * - The height of the product
     */
    height?: number;
    /**
     * - The width of the product
     */
    width?: number;
    /**
     * - Whether the dimension is the default one or not
     */
    is_default?: boolean;
    /**
     * - The unit of dimension
     */
    unit?: string;
    /**
     * - The length of the product
     */
    length?: number;
};
/** @returns {ReturnConfig} */
declare function ReturnConfig(): ReturnConfig;
type ReturnConfig = {
    /**
     * - Flag indicating whether product is returnable or not
     */
    returnable?: boolean;
    /**
     * - Number indicating number of hours or days
     */
    time?: number;
    /**
     * - String indicating the unit of the time, eg. days, hours
     */
    unit?: string;
};
/** @returns {Weight} */
declare function Weight(): Weight;
type Weight = {
    /**
     * - Whether the weight is the default one or not
     */
    is_default?: boolean;
    /**
     * - The shipping weight of the product
     */
    shipping?: number;
    /**
     * - The unit of weight
     */
    unit?: string;
};
/** @returns {Article} */
declare function Article(): Article;
type Article = {
    /**
     * - Child article details if any
     */
    child_details?: any;
    /**
     * - Sellers identifier of the article
     */
    seller_identifier: string;
    /**
     * - UID of the article
     */
    uid: string;
    /**
     * - Details of the set if any
     */
    a_set?: any;
    dimensions?: Dimensions;
    /**
     * - Order currency details
     */
    currency?: any;
    /**
     * - Flag representing if effective selling
     * price has been modified
     */
    esp_modified?: boolean;
    /**
     * - Return configuration details of the article
     */
    return_config?: ReturnConfig;
    /**
     * - A unique alphanumeric identifier assigned to a
     * specific article for inventory and tracking purposes
     */
    code?: string;
    weight?: Weight;
    /**
     * - DB generated ID of the article
     */
    _id: string;
    /**
     * - Product identifiers
     */
    identifiers: any;
    /**
     * - Raw meta data of the article
     */
    raw_meta?: string;
    /**
     * - The physical dimensions or specifications of the
     * article, indicating its size or measurements
     */
    size: string;
    /**
     * - A boolean indicating whether the article is a set
     */
    is_set?: boolean;
    /**
     * - Tags associated with the article
     */
    tags?: string[];
    /**
     * - This represents different variants of items
     * such as color, shade, material, storage variants, size and more.
     */
    variants?: any;
};
/** @returns {ShipmentListingBrand} */
declare function ShipmentListingBrand(): ShipmentListingBrand;
type ShipmentListingBrand = {
    logo?: string;
    created_on?: string;
    name?: string;
    logo_base64?: string;
};
/** @returns {ReplacementDetails} */
declare function ReplacementDetails(): ReplacementDetails;
type ReplacementDetails = {
    replacement_type?: string;
    original_affiliate_order_id?: string;
};
/** @returns {AffiliateMeta} */
declare function AffiliateMeta(): AffiliateMeta;
type AffiliateMeta = {
    order_item_id?: string;
    channel_order_id?: string;
    employee_discount?: number;
    box_type?: string;
    quantity?: number;
    size_level_total_qty?: number;
    loyalty_discount?: number;
    replacement_details?: ReplacementDetails;
    channel_shipment_id?: string;
    marketplace_invoice_id?: string;
    due_date?: string;
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
    l3_category?: number;
    l3_category_name?: string;
    last_updated_at?: string;
    name?: string;
    l2_category?: string[];
    brand?: string;
    image?: string[];
    code?: string;
    l1_category?: string[];
    size?: string;
    can_cancel?: boolean;
    can_return?: boolean;
    branch_url?: string;
    meta?: any;
    color?: string;
    department_id?: number;
    images?: string[];
    /**
     * - This represents different variants of items
     * such as color, shade, material, storage variants, size and more.
     */
    variants?: any;
};
/** @returns {Dates} */
declare function Dates(): Dates;
type Dates = {
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
    bag_type?: string;
    gst?: GSTDetailsData;
    financial_breakup: FinancialBreakup[];
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
    meta?: any;
    prices?: Prices;
    dates?: Dates;
    current_status: BagStatusHistory;
    bag_id: number;
    entity_type?: string;
    status: BagReturnableCancelableStatus;
};
/** @returns {ShipmentItemFulFillingStore} */
declare function ShipmentItemFulFillingStore(): ShipmentItemFulFillingStore;
type ShipmentItemFulFillingStore = {
    /**
     * - Contact phone number for the store.
     */
    phone?: string;
    /**
     * - Brand store tags
     */
    brand_store_tags?: string[];
    /**
     * - Postal code (pincode) of the stores location.
     */
    pincode?: string;
    /**
     * - Meta object for extra data
     */
    meta?: any;
    /**
     * - Physical address of the store
     */
    address?: string;
    /**
     * - Physical address of the store
     */
    address1?: string;
    /**
     * - Formatted display version of the address
     */
    display_address?: string;
    /**
     * - Type of location e.g., warehouse, high_street
     */
    location_type?: string;
    /**
     * - Unique identifier for the store.
     */
    id: number;
    /**
     * - Alphanumeric code representing the store.
     */
    code: string;
    /**
     * - Store email
     */
    store_email?: string;
    /**
     * - Name of the store
     */
    name?: string;
    /**
     * - State where the store is located.
     */
    state?: string;
    /**
     * - City where the store is located.
     */
    city?: string;
    /**
     * - Array of tags associated with the store
     */
    tags?: string[];
    /**
     * - Identifier of the company responsible for
     * fulfilling shipments from this store
     */
    company_id?: number;
};
/** @returns {Currency} */
declare function Currency(): Currency;
type Currency = {
    /**
     * - Currency code like INR, UAE
     */
    currency_code?: string;
    /**
     * - For particular code will show currency symbol
     */
    currency_symbol?: string;
};
/** @returns {OrderingCurrency} */
declare function OrderingCurrency(): OrderingCurrency;
type OrderingCurrency = {
    /**
     * - Currency code like INR, UAE
     */
    currency_code?: string;
    /**
     * - Currency name
     */
    currency_name?: string;
    /**
     * - For particular code will show currency symbol
     */
    currency_symbol?: string;
    /**
     * - Currency sub unit
     */
    currency_sub_unit?: string;
};
/** @returns {ConversionRate} */
declare function ConversionRate(): ConversionRate;
type ConversionRate = {
    base?: string;
    rates?: any;
};
/** @returns {ShipmentItem} */
declare function ShipmentItem(): ShipmentItem;
type ShipmentItem = {
    /**
     * - Order created date
     */
    order_date?: string;
    /**
     * - Order created date
     */
    order_created_ts?: string;
    shipment_status?: ShipmentStatus;
    user?: UserDataInfo;
    /**
     * - Estimated sla time
     */
    estimated_sla_time?: string;
    /**
     * - Estimated sla ts
     */
    estimated_sla_ts?: string;
    delivery_address?: Address;
    billing_address?: Address;
    /**
     * - A boolean flag indicating whether a state
     * is active or not
     */
    is_active?: boolean;
    channel?: ShipmentListingChannel;
    /**
     * - ID of the shipment from which
     * current shipment was created, this is populated whenever the shipment goes
     * into negative state transition
     */
    previous_shipment_id?: string;
    /**
     * - Lock status of the shipment
     */
    lock_status?: boolean;
    /**
     * - Invoice ID attached to the shipment
     */
    invoice_id?: string;
    /**
     * - Object containing payment methods used
     * for placing an order. The key will be COD if Cash on Delivery (COD) payment
     * mode is used, and the corresponding value will provide information about
     * that payment method. If Partner Pay is used, the key will be PP with
     * relevant payment details.
     */
    payment_methods?: any;
    /**
     * - Array of object containing payment
     * methods used for placing an order.
     */
    payment_info?: any[];
    /**
     * - Status created timestamp
     */
    status_created_at?: string;
    /**
     * - Status created timestamp
     */
    status_created_ts?: string;
    /**
     * - Display name
     */
    display_name?: string;
    /**
     * - Details of all the products/articles in a shipment
     */
    bags?: BagUnit[];
    fulfilling_store?: ShipmentItemFulFillingStore;
    /**
     * - Meta object for extra data
     */
    meta?: any;
    /**
     * - Payment mode like COD etc
     */
    payment_mode?: string;
    /**
     * - Can process
     */
    can_process?: boolean;
    prices?: Prices;
    /**
     * - Unique ID of order in which the shipment is present
     */
    order_id: string;
    /**
     * - Ordering channel like fynd, ecomm,
     * marketplace etc
     */
    ordering_channnel?: string;
    /**
     * - Unique shipment no. that is auto-generated
     */
    shipment_id?: string;
    /**
     * - Customer note
     */
    customer_note?: string;
    /**
     * - Total bags count
     */
    total_bags: number;
    /**
     * - Shipment created time
     */
    shipment_created_at: string;
    /**
     * - Mode of payment like prepaid, COD etc
     */
    mode_of_payment?: string;
    /**
     * - Shipment created time
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
     * - This will hold the meta data updates
     * that are provided by the logistics provider.
     */
    logistics_meta?: any;
    /**
     * - Identifier of the shipment
     * assigned by the application
     */
    affiliate_shipment_id?: string;
    /**
     * - Identifier of the order assigned by
     * the application
     */
    affiliate_order_id?: string;
};
/** @returns {ShipmentInternalPlatformViewResponse} */
declare function ShipmentInternalPlatformViewResponse(): ShipmentInternalPlatformViewResponse;
type ShipmentInternalPlatformViewResponse = {
    /**
     * - Total count of records
     */
    total_count?: number;
    /**
     * - Message
     */
    message?: string;
    /**
     * - Key for success or failure
     */
    success?: boolean;
    /**
     * - All shipments
     */
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
    /**
     * - Invoice ID attached to the shipment
     */
    store_invoice_id?: string;
    /**
     * - Invoice URL attached to the shipment
     */
    invoice_url?: string;
    /**
     * - Updated date of the invoice
     */
    updated_date?: string;
    /**
     * - External Invoice ID attached to the shipment
     */
    external_invoice_id?: string;
    /**
     * - Label URL attached to the shipment
     */
    label_url?: string;
    /**
     * - Credit Note ID attached to the shipment
     */
    credit_note_id?: string;
    /**
     * - Links object for extra data
     */
    links?: any;
};
/** @returns {OrderDetailsData} */
declare function OrderDetailsData(): OrderDetailsData;
type OrderDetailsData = {
    /**
     * - Order created date
     */
    order_date?: string;
    /**
     * - Order created date
     */
    created_ts?: string;
    tax_details?: any;
    /**
     * - The fee associated with the COD order
     */
    cod_charges?: string;
    source?: string;
    /**
     * - System generated unique identifier of the order
     */
    fynd_order_id: string;
    /**
     * - Identifier for the application, can be
     * application_id or extension_id
     */
    affiliate_id?: string;
    /**
     * - Identifier of the order assigned by
     * the application
     */
    affiliate_order_id?: string;
    /**
     * - Logo URL of the ordering channel
     */
    ordering_channel_logo?: any;
    /**
     * - Order value
     */
    order_value?: string;
    /**
     * - Business Ordering channel. eg. are
     * fynd, fynd_store, uniket, affiliate, ecomm, marketplace, jiomart
     */
    ordering_channel?: string;
    /**
     * - Meta object for extra data
     */
    meta?: any;
};
/** @returns {UserDetailsData} */
declare function UserDetailsData(): UserDetailsData;
type UserDetailsData = {
    /**
     * - Contact phone number for the store.
     */
    phone: string;
    /**
     * - A string indicating the postal code or PIN code
     * of the address area
     */
    pincode: string;
    /**
     * - A string representing the complete address,
     * combining address line 1, address line 2, area, landmark, sector, city,
     * state, and pincode. This provides a comprehensive view of the address details
     */
    address: string;
    /**
     * - A string specifying the locality or area
     * associated with the address
     */
    area?: string;
    /**
     * - Type of address (e.g., home, office, registered)
     */
    address_type?: string;
    /**
     * - A string indicating the country of the address
     */
    country: string;
    /**
     * - Email of the recipient associated with the address
     */
    email?: string;
    /**
     * - A string representing the first line of the
     * address, typically containing street or building information
     */
    address1?: string;
    /**
     * - A string representing a prominent nearby
     * landmark that aids in locating the address
     */
    landmark?: string;
    /**
     * - A string indicating the state or province of the address
     */
    state: string;
    /**
     * - A string representing the stores name
     */
    name: string;
    /**
     * - A string denoting the city or municipality of the address
     */
    city: string;
    /**
     * - State code
     */
    state_code?: string;
    /**
     * - ISO code representing the country of
     * the address
     */
    country_iso_code?: string;
    /**
     * - Country phone code associated with
     * the purchaser users mobile number
     */
    country_phone_code?: string;
    /**
     * - Formatted display version of the
     * delivery address
     */
    display_address?: string;
};
/** @returns {PhoneDetails} */
declare function PhoneDetails(): PhoneDetails;
type PhoneDetails = {
    /**
     * - ISO code representing the country of the address
     */
    country_code?: number;
    /**
     * - Mobile phone number
     */
    number?: string;
};
/** @returns {ContactDetails} */
declare function ContactDetails(): ContactDetails;
type ContactDetails = {
    /**
     * - Contact phone number
     */
    phone?: PhoneDetails[];
    /**
     * - Contact emails
     */
    emails?: string[];
};
/** @returns {CompanyDetails} */
declare function CompanyDetails(): CompanyDetails;
type CompanyDetails = {
    /**
     * - Company name
     */
    company_name?: string;
    /**
     * - Company address
     */
    address?: any;
    /**
     * - Company CIN
     */
    company_cin?: string;
    /**
     * - Company ID
     */
    company_id?: number;
    /**
     * - Company GST
     */
    company_gst?: string;
    company_contact?: ContactDetails;
};
/** @returns {OrderingStoreDetails} */
declare function OrderingStoreDetails(): OrderingStoreDetails;
type OrderingStoreDetails = {
    /**
     * - Contact phone number for the store.
     */
    phone?: string;
    /**
     * - Postal code (pincode) of the stores location.
     */
    pincode?: string;
    /**
     * - Meta object for extra data
     */
    meta?: any;
    /**
     * - Physical address of the store.
     */
    address?: string;
    /**
     * - A string representing the first line of the
     * address, typically containing street or building information
     */
    address1?: string;
    /**
     * - Formatted display version of the
     * delivery address
     */
    display_address?: string;
    /**
     * - Unique identifier for the store.
     */
    id?: number;
    /**
     * - Alphanumeric code representing the store.
     */
    code?: string;
    /**
     * - Name of the store.
     */
    store_name?: string;
    /**
     * - Country where the store is situated.
     */
    country?: string;
    /**
     * - Name of the contact person
     */
    contact_person?: string;
    /**
     * - State where the store is located.
     */
    state?: string;
    /**
     * - City where the store is located.
     */
    city?: string;
    /**
     * - Email address of store
     */
    store_email?: string;
};
/** @returns {DPDetailsData} */
declare function DPDetailsData(): DPDetailsData;
type DPDetailsData = {
    /**
     * - A string indicating the postal code or PIN
     * code of the address area
     */
    pincode?: string;
    /**
     * - URL to track the delivery status or shipment details
     */
    track_url?: string;
    /**
     * - Electronic Way Bill (E-way Bill) ID for
     * the delivery
     */
    eway_bill_id?: string;
    /**
     * - Unique identifier for the delivery partner
     */
    id?: number;
    /**
     * - A string indicating the country of the dp
     */
    country?: string;
    /**
     * - Airway Bill (AWB) number associated with the delivery
     */
    awb_no?: string;
    /**
     * - GST tag of the shipment
     */
    gst_tag?: string;
    /**
     * - Name of the delivery partner
     */
    name?: string;
};
/** @returns {BuyerDetails} */
declare function BuyerDetails(): BuyerDetails;
type BuyerDetails = {
    /**
     * - AJIO site ID
     */
    ajio_site_id?: string;
    /**
     * - Indicating the postal code or PIN code of the address area
     */
    pincode: number;
    /**
     * - A string representing the complete address
     */
    address: string;
    /**
     * - The Goods and Services Tax Identification Number
     * (GSTIN) associated with a business entity
     */
    gstin: string;
    /**
     * - The name of the buyer
     */
    name: string;
    /**
     * - A string indicating the state or province of the buyer
     */
    state: string;
    /**
     * - A string indicating the city of the buyer
     */
    city: string;
};
/** @returns {DebugInfo} */
declare function DebugInfo(): DebugInfo;
type DebugInfo = {
    /**
     * - Stormbreaker UUID
     */
    stormbreaker_uuid?: string;
};
/** @returns {EinvoiceInfo} */
declare function EinvoiceInfo(): EinvoiceInfo;
type EinvoiceInfo = {
    /**
     * - Credit note information
     */
    credit_note?: any;
    /**
     * - Invoice information
     */
    invoice?: any;
};
/** @returns {Formatted} */
declare function Formatted(): Formatted;
type Formatted = {
    /**
     * - Max formatted version of the shipment
     */
    max?: string;
    /**
     * - Min formatted version of the shipment
     */
    min?: string;
};
/** @returns {ShipmentTags} */
declare function ShipmentTags(): ShipmentTags;
type ShipmentTags = {
    slug?: string;
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
    /**
     * - URL for monitoring the status and
     * location of the shipment
     */
    tracking_url?: string;
    /**
     * - Estimated delivery date for the shipment
     */
    estimated_delivery_date?: string;
    /**
     * - Flag indicating whether the same
     * store is available for the shipment
     */
    same_store_available: boolean;
    b2b_buyer_details?: BuyerDetails;
    formatted?: Formatted;
    debug_info?: DebugInfo;
    /**
     * - Airway Bill (AWB) number associated
     * with the return shipment
     */
    return_awb_number?: string;
    /**
     * - Flag indicating whether the shipment is
     * self shipped
     */
    is_self_ship?: boolean;
    /**
     * - Box type for the shipment
     */
    box_type?: string;
    einvoice_info?: EinvoiceInfo;
    /**
     * - Affiliate shipment id
     * associated with the return shipment
     */
    return_affiliate_shipment_id?: string;
    /**
     * - Parent DP id associated with the shipment
     */
    parent_dp_id?: string;
    /**
     * - Shipment weight
     */
    shipment_weight?: number;
    dimension?: Dimensions;
    dp_options?: any;
    assign_dp_from_sb?: boolean;
    due_date?: string;
    store_invoice_updated_date?: string;
    forward_affiliate_shipment_id?: string;
    return_store_node?: number;
    fulfilment_priority_text?: string;
    shipment_tags?: ShipmentTags[];
    external?: any;
    awb_number?: string;
    lock_data?: LockData;
    order_type?: string;
    ewaybill_info?: any;
    dp_id?: string;
    shipment_volumetric_weight?: number;
    marketplace_store_id?: string;
    return_details?: any;
    dp_sort_key?: string;
    packaging_name?: string;
    timestamp?: ShipmentTimeStamp;
    auto_trigger_dp_assignment_acf?: boolean;
    dp_name?: string;
    po_number?: string;
    weight: number;
    b2c_buyer_details?: any;
    forward_affiliate_order_id?: string;
    return_affiliate_order_id?: string;
    bag_weight?: any;
    refund_to?: string;
};
/** @returns {PDFLinks} */
declare function PDFLinks(): PDFLinks;
type PDFLinks = {
    /**
     * - Invoice type - external
     */
    invoice_type: string;
    /**
     * - Label URL a6 provided by the application or extension
     */
    label_a6?: string;
    /**
     * - Invoice URL provided by the application or extension
     */
    invoice?: string;
    /**
     * - Label URL for pos provided by the
     * application or extension
     */
    label_pos?: string;
    /**
     * - Invoice URL a6 provided by the application
     * or extension
     */
    invoice_a6?: string;
    /**
     * - B2B URL provided by the application or extension
     */
    b2b?: string;
    /**
     * - Label URL provided by the application or extension
     */
    label?: string;
    /**
     * - Label URL a4 provided by the application or extension
     */
    label_a4?: string;
    /**
     * - Label type - external
     */
    label_type: string;
    /**
     * - Invoice URL export provided by the
     * application or extension
     */
    invoice_export?: string;
    /**
     * - Credit note URL provided by the
     * application or extension
     */
    credit_note_url?: string;
    /**
     * - Delivery challan URL a4 provided
     * by the application or extension
     */
    delivery_challan_a4?: string;
    /**
     * - Label URL export provided by the
     * application or extension
     */
    label_export?: string;
    /**
     * - Invoice URL a4 provided by the application
     * or extension
     */
    invoice_a4?: string;
    /**
     * - Invoice URL pos provided by the
     * application or extension
     */
    invoice_pos?: string;
    /**
     * - PO invoice URL provided by the application
     * or extension
     */
    po_invoice?: string;
};
/** @returns {AffiliateDetails} */
declare function AffiliateDetails(): AffiliateDetails;
type AffiliateDetails = {
    shipment_meta: ShipmentMeta;
    affiliate_meta: AffiliateMeta;
    /**
     * - Identifier of the shipment
     * assigned by the application
     */
    affiliate_shipment_id: string;
    /**
     * - Tag associated with the bag from
     * the applications company
     */
    company_affiliate_tag?: string;
    /**
     * - Identifier of the order assigned by
     * the application
     */
    affiliate_order_id: string;
    pdf_links?: PDFLinks;
    config?: AffiliateConfig;
    /**
     * - Identifier for the application, can be
     * application_id or extension_id
     */
    affiliate_id?: string;
    /**
     * - Identifier of the store assigned by
     * the application
     */
    affiliate_store_id: string;
    /**
     * - External bag id
     */
    affiliate_bag_id: string;
    /**
     * - Identifier for the application, can be
     * application_id or extension_id
     */
    ad_id?: string;
};
/** @returns {BagConfigs} */
declare function BagConfigs(): BagConfigs;
type BagConfigs = {
    /**
     * - Flag indicating whether the bag is returnable
     */
    is_returnable: boolean;
    /**
     * - Allow force return
     */
    allow_force_return: boolean;
    /**
     * - Flag indicating whether the bag is active
     */
    is_active: boolean;
    /**
     * - Flag indicating whether the bag can be cancelled
     */
    can_be_cancelled: boolean;
    /**
     * - Enable tracking
     */
    enable_tracking: boolean;
    /**
     * - Flag indicating whether the
     * customer return allowed
     */
    is_customer_return_allowed: boolean;
};
/** @returns {OrderBagArticle} */
declare function OrderBagArticle(): OrderBagArticle;
type OrderBagArticle = {
    /**
     * - Product identifiers
     */
    identifiers?: any;
    return_config?: ReturnConfig;
    /**
     * - UID of the article
     */
    uid?: string;
    /**
     * - The physical dimensions or specifications of the
     * article, indicating its size or measurements
     */
    size?: string;
    /**
     * - Array of tags
     */
    tags?: string[];
    /**
     * - This represents different variants of items
     * such as color, shade, material, storage variants, size and more.
     */
    variants?: any;
};
/** @returns {OrderBrandName} */
declare function OrderBrandName(): OrderBrandName;
type OrderBrandName = {
    /**
     * - Visual representation or emblem associated
     */
    logo?: string;
    /**
     * - Identifier of the company
     */
    company?: number;
    /**
     * - The unique identifier associated with the brand of the item
     */
    id: number;
    /**
     * - The date and time when the brand was created
     */
    created_on?: string;
    /**
     * - The brand name of the item
     */
    brand_name?: string;
    /**
     * - The date and time when the brand was updated
     */
    modified_on?: string;
};
/** @returns {AffiliateBagsDetails} */
declare function AffiliateBagsDetails(): AffiliateBagsDetails;
type AffiliateBagsDetails = {
    /**
     * - Identifier assigned by the
     * application for the bag
     */
    affiliate_bag_id?: string;
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
     * - The currency in which the prices are denominated
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
    state_type?: string;
    state_id?: number;
    id: number;
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
     * - Parent promo bags
     */
    parent_promo_bags?: any;
    financial_breakup?: FinancialBreakup;
    bag_configs?: BagConfigs;
    /**
     * - Sellers identifier of the article
     */
    seller_identifier?: string;
    delivery_address?: Address;
    article?: OrderBagArticle;
    brand?: OrderBrandName;
    group_id?: string;
    affiliate_bag_details?: AffiliateBagsDetails;
    item?: PlatformItem;
    payment_methods?: BagPaymentMethods[];
    payment_info?: BagPaymentMethods[];
    quantity?: number;
    identifier?: string;
    can_return?: boolean;
    can_cancel?: boolean;
    display_name?: string;
    line_number?: number;
    meta?: any;
    applied_promos?: AppliedPromos[];
    prices?: Prices;
    charges?: PriceAdjustmentCharge[];
    current_status?: CurrentStatus;
    bag_id: number;
    entity_type?: string;
    is_parent?: boolean;
    /**
     * - This represents different variants of items
     * such as color, shade, material, storage variants, size and more.
     */
    variants?: any;
};
/** @returns {FulfillingStore} */
declare function FulfillingStore(): FulfillingStore;
type FulfillingStore = {
    phone: string;
    pincode: string;
    meta: any;
    address: string;
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
    /**
     * - Email of the recipient associated with the store
     */
    store_email?: string;
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
    meta?: any;
    bag_list?: string[];
    id?: number;
    created_at?: string;
    created_ts?: string;
    shipment_id?: string;
    status?: string;
    display_name?: string;
    /**
     * - Current shipments status; it
     * can be financial, logistics or operational
     */
    current_shipment_status?: string;
    status_created_at?: string;
};
/** @returns {ShipmentLockDetails} */
declare function ShipmentLockDetails(): ShipmentLockDetails;
type ShipmentLockDetails = {
    /**
     * - Lock status of the shipment
     */
    lock_status?: boolean;
    /**
     * - Lock message of the shipment
     */
    lock_message?: string;
    /**
     * - Action to status
     */
    action_to_status?: any;
};
/** @returns {ShipmentPaymentInfoData} */
declare function ShipmentPaymentInfoData(): ShipmentPaymentInfoData;
type ShipmentPaymentInfoData = {
    /**
     * - Stands for 'Mode of Payment'. This is a short
     * code (like 'COD' for Cash On Delivery) that represents the payment method used.
     */
    mode?: string;
    /**
     * - Specifies name of the payment method.
     */
    name?: string;
    /**
     * - Whomsoever collected the money
     */
    collect_by?: string;
    /**
     * - Whomsoever will refund the money
     */
    refund_by?: string;
    /**
     * - Object that stores additional meta data related
     * to the payment.
     */
    meta?: any;
    /**
     * - Amount paid using this payment method.
     */
    amount?: number;
    /**
     * - A unique string identifier for the
     * transaction, this is essential for referencing individual payments.
     */
    unique_identifier?: string;
    /**
     * - The name of the payment method as it
     * should be displayed to the user.
     */
    display_name?: string;
    /**
     * - All necessary data for transaction received
     */
    transaction_data?: any;
};
/** @returns {PlatformShipment} */
declare function PlatformShipment(): PlatformShipment;
type PlatformShipment = {
    /**
     * - This will hold the meta data updates
     * that are provided by the logistics provider.
     */
    logistics_meta?: any;
    /**
     * - Date of shipment picking
     */
    picked_date?: string;
    /**
     * - List of tracking details
     */
    tracking_list?: TrackingList[];
    invoice?: InvoiceInfo;
    /**
     * - Status of the shipment indicating its
     * current stage
     */
    shipment_status?: string;
    gst_details?: GSTDetailsData;
    order_status?: OrderStatusData;
    /**
     * - Delivery slot details
     */
    delivery_slot?: any;
    order?: OrderDetailsData;
    user?: UserDataInfo;
    /**
     * - Falg to check delivery partner
     * tracking is enable
     */
    enable_dp_tracking?: boolean;
    /**
     * - Custom message
     */
    custom_message?: string;
    /**
     * - Estimated time of delivery
     */
    estimated_sla_time?: string;
    /**
     * - Estimated time of delivery
     */
    estimated_sla_ts?: string;
    /**
     * - Flag to check whether shipment
     * dimension can be updated
     */
    can_update_dimension?: boolean;
    /**
     * - Shipment Images List
     */
    shipment_images?: string[];
    /**
     * - Delivery Details of user
     */
    delivery_details?: any;
    /**
     * - Billing Details of user
     */
    billing_details?: any;
    /**
     * - Forward shipment id
     */
    forward_shipment_id?: string;
    /**
     * - Fulfilment priority
     */
    fulfilment_priority?: number;
    shipment_details?: ShipmentLockDetails;
    /**
     * - Custom meta data
     */
    custom_meta?: any[];
    /**
     * - Shipment quantity
     */
    shipment_quantity?: number;
    company_details?: CompanyDetails;
    ordering_store?: OrderingStoreDetails;
    /**
     * - Lock status of the shipment
     */
    lock_status?: boolean;
    /**
     * - Visual representation or emblem associated
     */
    platform_logo?: string;
    /**
     * - User agent
     */
    user_agent?: string;
    dp_details?: DPDetailsData;
    /**
     * - Invoice ID attached to the shipment
     */
    invoice_id?: string;
    /**
     * - Object containing payment methods used
     * for placing an order. The key will be COD if Cash on Delivery (COD) payment
     * mode is used, and the corresponding value will provide information about
     * that payment method. If Partner Pay is used, the key will be PP with
     * relevant payment details.
     */
    payment_methods?: any;
    /**
     * - Array of object
     * containing payment methods used for placing an order.
     */
    payment_info?: ShipmentPaymentInfoData[];
    /**
     * - Coupon related details
     */
    coupon?: any;
    affiliate_details?: AffiliateDetails;
    priority_text?: string;
    /**
     * - Records the changes in
     * status for a bag, providing a timeline of events and transitions
     */
    bag_status_history?: BagStatusHistory[];
    is_dp_assign_enabled?: boolean;
    /**
     * - Details of all the products/articles in a shipment
     */
    bags?: OrderBags[];
    /**
     * - Flag indicating whether auto DP
     * assignment should happen from system
     */
    dp_assignment?: boolean;
    /**
     * - Total items
     */
    total_items?: number;
    fulfilling_store?: FulfillingStore;
    /**
     * - Meta object for extra data
     */
    meta?: any;
    /**
     * - PDF Links pushed by the application or extension
     */
    pdf_links?: any;
    /**
     * - Payment mode like COD, Prepaid, etc
     */
    payment_mode?: string;
    packaging_type?: string;
    /**
     * - Journey type can be forward or return
     */
    journey_type?: string;
    prices?: Prices;
    charges?: PriceAdjustmentCharge[];
    vertical?: string;
    /**
     * - Unique shipment no. that is auto-generated
     */
    shipment_id: string;
    payments?: ShipmentPayments;
    operational_status?: string;
    status?: ShipmentStatusData;
    /**
     * - Total bags Count
     */
    total_bags?: number;
    /**
     * - Shipment created time
     */
    shipment_created_at?: string;
    /**
     * - Shipment created timestamp
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
     * - ID of the shipment from which
     * current shipment was created, this is populated whenever the shipment goes
     * into negative state transition
     */
    previous_shipment_id?: string;
    /**
     * - Last shipment update time
     */
    shipment_update_time?: number;
    rto_address?: Address;
    /**
     * - Credit Note ID attached to the shipment
     */
    credit_note_id?: string;
    /**
     * - Flag to check is self ship enabled or not
     */
    is_self_ship?: boolean;
    /**
     * - Unique identifier associated with the
     * payment mode
     */
    mode_of_payment?: string;
    /**
     * - Identifier of the shipment
     * assigned by the application
     */
    affiliate_shipment_id?: string;
    /**
     * - URL for monitoring the status and
     * location of the shipment.
     */
    tracking_url?: string;
};
/** @returns {ShipmentInfoResponse} */
declare function ShipmentInfoResponse(): ShipmentInfoResponse;
type ShipmentInfoResponse = {
    /**
     * - Message for success or failure
     */
    message?: string;
    /**
     * - Key for success or failure
     */
    success: boolean;
    shipments?: PlatformShipment[];
};
/** @returns {TaxDetails} */
declare function TaxDetails(): TaxDetails;
type TaxDetails = {
    /**
     * - The pan number associated with a business entity
     */
    pan_no?: string;
    /**
     * - The Goods and Services Tax Identification Number
     * (GSTIN) associated with a business entity
     */
    gstin?: string;
};
/** @returns {PaymentInfoData} */
declare function PaymentInfoData(): PaymentInfoData;
type PaymentInfoData = {
    /**
     * - Meta object for extra data
     */
    meta?: any;
    /**
     * - Mode of particular payment
     */
    mode?: string;
    /**
     * - Name of particular payment
     */
    name?: string;
    /**
     * - Amount
     */
    amount?: number;
    /**
     * - Collected
     */
    collected?: boolean;
    /**
     * - Whomsoever will refund the money
     */
    refund_by?: string;
    /**
     * - Whomsoever collected the money
     */
    collect_by?: string;
    /**
     * - Display name for payment received
     */
    display_name?: string;
    /**
     * - Merchant transaction id
     */
    merchant_transaction_id?: string;
    /**
     * - All necessary data for transaction received
     */
    transaction_data?: any;
};
/** @returns {OrderDetailsResponse} */
declare function OrderDetailsResponse(): OrderDetailsResponse;
type OrderDetailsResponse = {
    order?: OrderData;
    /**
     * - Key for success or failure
     */
    success: boolean;
    /**
     * - List of shipments
     */
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
/** @returns {LaneConfigResponse} */
declare function LaneConfigResponse(): LaneConfigResponse;
type LaneConfigResponse = {
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
    /**
     * - Visual representation or emblem associated
     */
    logo?: string;
    /**
     * - Platform channel name
     */
    name?: string;
};
/** @returns {PlatformOrderItems} */
declare function PlatformOrderItems(): PlatformOrderItems;
type PlatformOrderItems = {
    breakup_values?: PlatformBreakupValues[];
    /**
     * - Total order value
     */
    total_order_value?: number;
    /**
     * - Meta object for extra data
     */
    meta?: any;
    /**
     * - Order created timestamp
     */
    order_created_time?: string;
    /**
     * - Order created timestamp
     */
    order_created_ts?: string;
    /**
     * - Payment mode like COD etc
     */
    payment_mode?: string;
    /**
     * - List of shipments
     */
    shipments?: PlatformShipment[];
    /**
     * - Unique ID of order in which the shipment is present
     */
    order_id?: string;
    channel?: PlatformChannel;
    user_info?: UserDataInfo;
    /**
     * - Value of the order
     */
    order_value?: number;
    currency?: Currency;
    currency_info?: CurrencyInfo;
    /**
     * - Identifier of the order assigned by
     * the application
     */
    affiliate_order_id?: string;
};
/** @returns {OrderListingResponse} */
declare function OrderListingResponse(): OrderListingResponse;
type OrderListingResponse = {
    filters?: Filters;
    /**
     * - Total count of order
     */
    total_count?: number;
    /**
     * - Message
     */
    message?: string;
    /**
     * - Key for success or failure
     */
    success?: boolean;
    /**
     * - List of Orders
     */
    items?: PlatformOrderItems[];
    lane?: string;
    page?: Page;
};
/** @returns {PlatformTrack} */
declare function PlatformTrack(): PlatformTrack;
type PlatformTrack = {
    last_location_recieved_at?: string;
    meta?: any;
    raw_status?: string;
    updated_at?: string;
    updated_time?: string;
    awb?: string;
    shipment_type?: string;
    status?: string;
    reason?: string;
    account_name?: string;
};
/** @returns {PlatformShipmentTrack} */
declare function PlatformShipmentTrack(): PlatformShipmentTrack;
type PlatformShipmentTrack = {
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
    applied_filters?: any;
    page?: any;
};
/** @returns {FilterOptions} */
declare function FilterOptions(): FilterOptions;
type FilterOptions = {
    /**
     * - Name of the FilterOption.
     */
    label: string;
    /**
     * - Key of the filterOption to query the input data on.
     */
    value: string;
    /**
     * - To identify type of status (financial,
     * operational, logistics)
     */
    state_type?: string;
    /**
     * - Name of the FilterOption.
     */
    name?: string;
    /**
     * - Text of the FilterOption.
     */
    text?: string;
    /**
     * - Minimum search size.
     */
    min_search_size?: number;
    /**
     * - Placeholder showing hint what text
     * can be passed into filter.
     */
    placeholder_text?: string;
    /**
     * - Whether to show on UI or not.
     */
    show_ui?: boolean;
};
/** @returns {FiltersList} */
declare function FiltersList(): FiltersList;
type FiltersList = {
    /**
     * - Name of the filter.
     */
    label: string;
    /**
     * - Key of the filter to query the input data on.
     */
    value: string;
    /**
     * - To identify if its a global filter or
     * advanced filters. global filters => Shown on UI alongside listing. advanced
     * filters => Shown on panel on right side opened by clicking on filter icon.
     */
    filter_type?: string;
    /**
     * - Type of the filter.
     */
    type?: string;
    /**
     * - Sample input text.
     */
    placeholder_text?: string;
    /**
     * - If field value is required or not.
     */
    required?: boolean;
    /**
     * - Whether the filter should be shown on ui or not.
     */
    is_active?: boolean;
    /**
     * - Different options of a single filter.
     */
    options?: FilterOptions[];
};
/** @returns {GlobalFiltersResponse} */
declare function GlobalFiltersResponse(): GlobalFiltersResponse;
type GlobalFiltersResponse = {
    /**
     * - Indicates the unique property to identify a
     * filter config.
     */
    config?: string;
    filters: FiltersList[];
    company_id: number;
    show_in: string;
    /**
     * - Source of the request (platform/administrator)
     */
    request_source?: string;
};
/** @returns {ViewDetails} */
declare function ViewDetails(): ViewDetails;
type ViewDetails = {
    /**
     * - Unique identifier of a view. Used to
     * update/delete/edit a view.
     */
    id?: string;
    /**
     * - Used to identify a View.
     */
    slug: string;
    /**
     * - Name of the view.
     */
    label: string;
    /**
     * - Criterion on which shipments/orders
     * must be fetched.
     */
    filters?: FiltersList[];
    /**
     * - Flag to identify if view is
     * editable(whether filters can be updated) or not.
     */
    is_editable: boolean;
    /**
     * - Position of the view on UI.
     */
    position?: number;
    /**
     * - Name of view on platform (shipment_view, order_view)
     */
    show_in: string;
};
/** @returns {ParentViews} */
declare function ParentViews(): ParentViews;
type ParentViews = {
    /**
     * - Used to fetch shipments/orders based on
     * filters added by user.
     */
    views: ViewDetails[];
    /**
     * - Used to identify a parent view.
     */
    slug: string;
    /**
     * - Name of the view.
     */
    label: string;
    /**
     * - Flag to identify if view is
     * editable(whether filters can be updated) or not.
     */
    is_editable: boolean;
    /**
     * - Position of the parent view on UI.
     */
    position?: number;
    /**
     * - Name of view on platform (shipment_view, order_view)
     */
    show_in: string;
};
/** @returns {UserViewsResponse} */
declare function UserViewsResponse(): UserViewsResponse;
type UserViewsResponse = {
    parent_views?: ParentViews[];
};
/** @returns {UserViewPosition} */
declare function UserViewPosition(): UserViewPosition;
type UserViewPosition = {
    /**
     * - Type of user created view that is used on
     * platform to fetch shipments/orders based on filters added. child_view =>
     * View with filters to fetch shipments/orders. parent_view => Used to group
     * child views.
     */
    view_type: string;
    /**
     * - Id(view id) used for updating position of child view.
     */
    view_id?: string;
    /**
     * - Slug(parent view slug) used for updating position
     * of parent view.
     */
    slug?: string;
    /**
     * - Label(parent view text) used for updating
     * position of parent view.
     */
    label?: string;
    /**
     * - New position of the view.
     */
    new_position: number;
    /**
     * - Name of view on platform (shipment_view, order_view)
     */
    show_in: string;
};
/** @returns {CreateUpdateDeleteResponse} */
declare function CreateUpdateDeleteResponse(): CreateUpdateDeleteResponse;
type CreateUpdateDeleteResponse = {
    message?: string;
    /**
     * - Indicates events of errors at the time of
     * processing views.
     */
    errors?: string[];
};
/** @returns {FiltersResponse} */
declare function FiltersResponse(): FiltersResponse;
type FiltersResponse = {
    advance_filter?: AdvanceFilterInfo;
    global_filter?: FiltersInfo[];
};
/** @returns {URL} */
declare function URL(): URL;
type URL = {
    url?: string;
};
/** @returns {FileResponse} */
declare function FileResponse(): FileResponse;
type FileResponse = {
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
/** @returns {BulkActionTemplateResponse} */
declare function BulkActionTemplateResponse(): BulkActionTemplateResponse;
type BulkActionTemplateResponse = {
    /**
     * - Allowed bulk action template slugs
     */
    template_x_slug?: BulkActionTemplate[];
};
/** @returns {PlatformShipmentReasonsResponse} */
declare function PlatformShipmentReasonsResponse(): PlatformShipmentReasonsResponse;
type PlatformShipmentReasonsResponse = {
    reasons?: Reason[];
    success?: boolean;
};
/** @returns {ShipmentResponseReasons} */
declare function ShipmentResponseReasons(): ShipmentResponseReasons;
type ShipmentResponseReasons = {
    reason_id?: number;
    reason?: string;
};
/** @returns {ShipmentReasonsResponse} */
declare function ShipmentReasonsResponse(): ShipmentReasonsResponse;
type ShipmentReasonsResponse = {
    reasons: ShipmentResponseReasons[];
    message: string;
    success: boolean;
};
/** @returns {StoreAddress} */
declare function StoreAddress(): StoreAddress;
type StoreAddress = {
    phone: string;
    created_at: string;
    contact_person: string;
    pincode: number;
    address_type: string;
    address1: string;
    display_address?: string;
    version?: string;
    address_category: string;
    city: string;
    longitude: number;
    address2?: string;
    area?: string;
    email?: string;
    updated_at: string;
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
    ds_type: string;
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
    additional_contact_details?: any;
    timing?: any[];
    notification_emails?: string[];
    gst_number?: string;
    ewaybill_portal_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    gst_credentials: StoreGstCredentials;
    stage: string;
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
    created_at: string;
    contact_person: string;
    store_email: string;
    is_enabled_for_recon?: boolean;
    pincode: string;
    mall_area?: string;
    vat_no?: string;
    address1: string;
    display_address?: string;
    store_active_from?: string;
    city: string;
    name: string;
    longitude?: number;
    brand_store_tags?: string[];
    order_integration_id?: string;
    parent_store_id?: number;
    location_type: string;
    code?: string;
    fulfillment_channel: string;
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
    start_date?: string;
    company?: string;
    is_virtual_invoice?: boolean;
    script_last_ran?: string;
    pickup_location?: string;
    created_on?: string;
    brand_name: string;
    brand_id?: number;
    modified_on?: string;
    id?: number;
};
/** @returns {Attributes} */
declare function Attributes(): Attributes;
type Attributes = {
    primary_material?: string;
    essential?: string;
    marketer_name?: string;
    primary_color?: string;
    marketer_address?: string;
    primary_color_hex?: string;
    brand_name?: string;
    name?: string;
    gender?: string[];
};
/** @returns {Item} */
declare function Item(): Item;
type Item = {
    /**
     * - A dictionary of product attributes
     */
    attributes: Attributes;
    brand_id: number;
    slug_key: string;
    webstore_product_url?: string;
    l3_category?: number;
    l3_category_name?: string;
    last_updated_at?: string;
    name: string;
    l2_category?: string[];
    brand: string;
    image: string[];
    code?: string;
    l1_category_id?: number;
    item_id: number;
    l1_category?: string[];
    gender?: string;
    can_cancel?: boolean;
    can_return?: boolean;
    size: string;
    branch_url?: string;
    meta?: any;
    color?: string;
    department_id?: number;
    l2_category_id?: number;
};
/** @returns {ArticleStatusDetails} */
declare function ArticleStatusDetails(): ArticleStatusDetails;
type ArticleStatusDetails = {
    status?: any;
};
/** @returns {Company} */
declare function Company(): Company;
type Company = {
    pan_no?: string;
    created_on?: string;
    id?: number;
    company_name?: string;
    gst_number?: string;
    company_type?: string;
    modified_on?: string;
    meta?: any;
    business_type?: string;
    agreement_start_date?: string;
};
/** @returns {ShipmentGstDetails} */
declare function ShipmentGstDetails(): ShipmentGstDetails;
type ShipmentGstDetails = {
    value_of_good?: number;
    gst_fee?: number;
    brand_calculated_amount?: number;
    tax_collected_at_source?: number;
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
    bag_status_history?: BagStatusHistory;
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
    entity_type?: string;
    fallback_user?: any;
    financial_breakup?: FinancialBreakup[];
    fulfilling_store?: Store;
    fyndstore_emp?: any;
    gst_details?: GSTDetailsData;
    invoice?: InvoiceDetails;
    item?: Item;
    journey_type?: string;
    line_number?: number;
    lock_status?: boolean;
    manifest_id?: string;
    meta?: any;
    mode_of_payment?: string;
    no_of_bags_order?: number;
    operational_status?: string;
    order?: OrderDetails;
    order_integration_id?: string;
    order_type?: string;
    order_value?: number;
    ordering_store?: Store;
    parent_promo_bags?: any;
    payment_methods?: any;
    payment_type?: string;
    payments?: any;
    prices?: Prices;
    charges?: PriceAdjustmentCharge[];
    qc_required?: boolean;
    quantity?: number;
    reasons?: any[];
    restore_coupon?: boolean;
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
    transaction_type?: string;
    type?: string;
    updated_at?: string;
    user?: UserDetails;
    weight?: WeightData;
    original_bag_list?: number[];
    identifier?: string;
};
/** @returns {BagDetailsPlatformResponse} */
declare function BagDetailsPlatformResponse(): BagDetailsPlatformResponse;
type BagDetailsPlatformResponse = {
    status_code?: number;
    data?: BagDetails;
};
/** @returns {BagsPage} */
declare function BagsPage(): BagsPage;
type BagsPage = {
    item_total?: number;
    has_next?: boolean;
    page_type?: string;
    current?: number;
    size?: number;
};
/** @returns {BagData} */
declare function BagData(): BagData;
type BagData = {
    items?: BagDetails[];
    page?: BagsPage;
};
/** @returns {GetBagsPlatformResponse} */
declare function GetBagsPlatformResponse(): GetBagsPlatformResponse;
type GetBagsPlatformResponse = {
    status_code?: number;
    data?: BagData;
};
/** @returns {GeneratePosOrderReceiptResponse} */
declare function GeneratePosOrderReceiptResponse(): GeneratePosOrderReceiptResponse;
type GeneratePosOrderReceiptResponse = {
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
/** @returns {AllowedTemplatesResponse} */
declare function AllowedTemplatesResponse(): AllowedTemplatesResponse;
type AllowedTemplatesResponse = {
    template_x_slug?: Templates[];
};
/** @returns {CDN} */
declare function CDN(): CDN;
type CDN = {
    url: string;
    absolute_url: string;
    relative_url: string;
};
/** @returns {Upload} */
declare function Upload(): Upload;
type Upload = {
    expiry: number;
    url: string;
};
/** @returns {TemplateDownloadResponse} */
declare function TemplateDownloadResponse(): TemplateDownloadResponse;
type TemplateDownloadResponse = {
    file_name: string;
    file_path: string;
    content_type: string;
    method?: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    tags?: string[];
};
