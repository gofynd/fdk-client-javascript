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
 * @property {number} [status]
 * @property {boolean} [success]
 * @property {string} message
 * @property {string} [error_trace]
 * @property {string} error
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
 * @property {Entities[]} entities - Shipment/Entity
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
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CheckResponse[]} [check_response] - Entity Lock Status, If the
 *   action input as 'check'
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
 */
/**
 * @typedef BaseResponse
 * @property {boolean} [success]
 * @property {string} [message]
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
 * @property {number} [line_number] - Product/Bag Line number for the
 *   Product/Bag Identifier
 * @property {string} [identifier] - Product/Bag Article/Item Identifier
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
 * @typedef DataUpdates
 * @property {OrderItemDataUpdates[]} [order_item_status]
 * @property {ProductsDataUpdates[]} [products]
 * @property {EntitiesDataUpdates[]} [entities]
 */
/**
 * @typedef ShipmentsRequest
 * @property {string} identifier - Shipment ID
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products] - Product/Bag to be updated
 * @property {DataUpdates} [data_updates]
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
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [force_transition] - Force Transition
 * @property {StatuesRequest[]} [statuses]
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
 * @property {Object} [status]
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
 * @property {number} [dp_id]
 * @property {Object} [meta]
 * @property {string} affiliate_shipment_id
 * @property {boolean} [lock_status]
 * @property {string} [lock_message]
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
 * @typedef CreateOrderPayload
 * @property {OrderInfo} order_info
 * @property {OrderConfig} order_config
 * @property {string} affiliate_id
 */
/**
 * @typedef CreateOrderResponse
 * @property {string} fynd_order_id
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
 */
/**
 * @typedef HistoryDict
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
 * @typedef PostActivityHistory
 * @property {PostHistoryFilters[]} filters
 * @property {PostHistoryData} data
 */
/**
 * @typedef PostHistoryDict
 * @property {PostActivityHistory} activity_history
 */
/**
 * @typedef PostShipmentHistory
 * @property {PostHistoryDict[]} [activity_history]
 */
/**
 * @typedef SmsDataPayload
 * @property {number} shipment_id - ShipmentId
 * @property {number} phone_number - Phone number for communication
 * @property {number} [amount_paid] - Data mapped in Communication template: amount_paid
 * @property {string} order_id - OrderId
 * @property {string} [payment_mode] - Data mapped in Communication template: payment_mode
 * @property {string} [customer_name] - Data mapped in Communication template:
 *   customer_name
 * @property {string} [brand_name] - Data mapped in Communication template: brand_name
 * @property {string} message - Message to be send in SMS
 * @property {string} country_code - Country code for SMS
 */
/**
 * @typedef SendSmsPayload
 * @property {number} bag_id - Bag_id for the activity history track
 * @property {SmsDataPayload} [data] - SMS Data
 * @property {string} slug - Slug name for the template mapped in pointblank
 */
/**
 * @typedef OrderDetails
 * @property {string} [fynd_order_id]
 * @property {string} [created_at]
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
 */
/**
 * @typedef OrderStatusResult
 * @property {string} success
 * @property {OrderStatusData[]} [result]
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
 * @property {Object} amount
 */
/**
 * @typedef Charge
 * @property {string} name
 * @property {Object} amount
 * @property {Tax} [tax]
 * @property {string} [code]
 * @property {string} type
 */
/**
 * @typedef LineItem
 * @property {Charge[]} [charges]
 * @property {Object} [meta]
 * @property {string} [custom_message]
 * @property {number} [quantity]
 * @property {string} seller_identifier
 * @property {string} [external_line_id]
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
 * @property {string} [external_shipment_id]
 * @property {ProcessingDates} [processing_dates]
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {number} location_id
 * @property {string} [order_type]
 */
/**
 * @typedef ShippingInfo
 * @property {string} [alternate_mobile_number]
 * @property {string} state
 * @property {string} [customer_code]
 * @property {string} [shipping_type]
 * @property {string} [middle_name]
 * @property {string} primary_mobile_number
 * @property {string} [last_name]
 * @property {Object} [geo_location]
 * @property {string} [gender]
 * @property {string} [house_no]
 * @property {string} first_name
 * @property {string} [title]
 * @property {string} [landmark]
 * @property {string} country
 * @property {string} [address_type]
 * @property {string} [state_code]
 * @property {string} city
 * @property {string} [external_customer_code]
 * @property {string} [floor_no]
 * @property {string} [alternate_email]
 * @property {Object[]} [slot]
 * @property {string} address1
 * @property {string} pincode
 * @property {string} primary_email
 * @property {string} [address2]
 * @property {string} [country_code]
 */
/**
 * @typedef BillingInfo
 * @property {string} [alternate_mobile_number]
 * @property {string} state
 * @property {string} [customer_code]
 * @property {string} [middle_name]
 * @property {string} primary_mobile_number
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [house_no]
 * @property {string} first_name
 * @property {string} [title]
 * @property {string} country
 * @property {string} [state_code]
 * @property {string} city
 * @property {string} [external_customer_code]
 * @property {string} [floor_no]
 * @property {string} [alternate_email]
 * @property {string} address1
 * @property {string} pincode
 * @property {string} primary_email
 * @property {string} [address2]
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
 */
/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */
/**
 * @typedef CreateOrderAPI
 * @property {Shipment[]} shipments
 * @property {ShippingInfo} shipping_info
 * @property {BillingInfo} billing_info
 * @property {Object} [currency_info]
 * @property {string} [external_order_id]
 * @property {Charge[]} [charges]
 * @property {string} [external_creation_date]
 * @property {Object} [meta]
 * @property {TaxInfo} [tax_info]
 * @property {Object} [config]
 * @property {PaymentInfo} payment_info
 * @property {UserInfo} [user_info]
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
 * @property {string[]} [message]
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
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {PointBlankOtpData} [data]
 */
/**
 * @typedef VerifyOtpData
 * @property {string} request_id
 * @property {string} mobile
 * @property {number} otp_code
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
 * @typedef CourierPartnerTrackingDetails
 * @property {string} operational_status - Operational status of OMS
 * @property {string} dp_status - Status at Courier partner end
 * @property {string} shipment_id - Shipment ID
 * @property {string} awb - AWB Number
 * @property {string} dp_status_updated_at - Date Time at which status was
 *   updated at Courier partner
 * @property {string} [remark] - Remark from courier partner
 * @property {number} [id] - Id of Tracking history
 * @property {string} [dp_location] - Current location of Courier partner
 * @property {string} [estimated_delivery_date] - Estimated delivery date
 *   received from Courier partner
 * @property {string} journey - Journey type of the shipment
 * @property {Object} [meta] - Meta field to store Courier partner's meta data
 * @property {string} dp_name - Courier Partner name
 * @property {string} [promised_delivery_date] - Promised delivery date received
 *   from Courier partner
 */
/**
 * @typedef PageDetails
 * @property {number} item_total - Total count of the results present in the
 *   requested filter
 * @property {number} [current] - Current page number
 * @property {number} [size] - Page size
 * @property {string} [type] - Type of the page
 * @property {boolean} [has_next] - If next page contains any result
 */
/**
 * @typedef CourierPartnerTrackingResponse
 * @property {CourierPartnerTrackingDetails[]} [items]
 * @property {PageDetails} [page]
 */
/**
 * @typedef BulkReportsDownloadRequest
 * @property {string[]} [store_ids] - Download for specific store ids.
 * @property {string} [lane_type]
 * @property {string} [custom_headers] - Download report with specific headers
 * @property {string} [report_type] - Type of report
 * @property {string} [from_date]
 * @property {string} [to_date]
 * @property {string[]} [entities] - Download for specific enitites, entities
 *   can be bag, shipment or order_id, etc.
 * @property {string} [filter_type]
 * @property {boolean} [is_cross_company_enabled] - Download lanes for cross company.
 * @property {Object} [custom_filters_for_lane]
 */
/**
 * @typedef BulkReportsDownloadResponse
 * @property {boolean} [success]
 * @property {string} [batch_id]
 */
/**
 * @typedef BulkReportsDownloadFailedResponse
 * @property {boolean} [status]
 * @property {string} [error]
 */
/**
 * @typedef EInvoiceRetryShipmentData
 * @property {string} shipment_id
 */
/**
 * @typedef EInvoiceRetry
 * @property {EInvoiceRetryShipmentData[]} [shipments_data]
 */
/**
 * @typedef EInvoiceResponseData
 * @property {string} shipment_id
 * @property {string} message
 * @property {boolean} success
 * @property {string} [ack_no]
 * @property {string} [irn]
 * @property {string} [ack_dt]
 * @property {number} [timeout]
 * @property {string} [timeout_unit]
 */
/**
 * @typedef EInvoiceRetryResponse
 * @property {boolean} [success]
 * @property {number} success_count
 * @property {string} [message]
 * @property {EInvoiceResponseData[]} response_data
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
 * @typedef GenerateInvoiceIDRequest
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
 * @property {string} [shipment_id]
 * @property {string} [status_created_at]
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
 * @property {Identifier} identifiers
 * @property {number} total_units
 * @property {boolean} added_to_fynd_cash
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
 * @property {string} [shipment_id]
 * @property {string} [updated_at]
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
 * @property {string} [brand_store_tags]
 * @property {string} [pincode]
 * @property {Object} [meta]
 * @property {string} [address]
 * @property {string} [location_type]
 * @property {number} id
 * @property {string} code
 * @property {string} [store_email]
 * @property {string} [name]
 * @property {string} [state]
 * @property {string} [city]
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
 * @typedef ShipmentItemMeta
 * @property {boolean} [same_store_available]
 * @property {boolean} [is_self_ship]
 * @property {boolean} [is_international]
 * @property {Formatted} [formatted]
 * @property {Object} [debug_info]
 * @property {number} [sla]
 * @property {number} [shipment_chargeable_weight]
 * @property {Object[]} [pdf_media]
 * @property {Object[]} [tags]
 * @property {string[]} [existing_dp_list]
 * @property {string} [parent_dp_id]
 * @property {number} [shipment_weight]
 * @property {Object} [dp_options]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [shipping_zone]
 * @property {string} [store_invoice_updated_date]
 * @property {string} [activity_comment]
 * @property {string} [fulfilment_priority_text]
 * @property {ShipmentTags[]} [shipment_tags]
 * @property {Object} [external]
 * @property {Object} [ewaybill_info]
 * @property {LockData} [lock_data]
 * @property {string} [order_type]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [dp_sort_key]
 * @property {string} [packaging_name]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {number} [weight]
 * @property {Object} [bag_weight]
 */
/**
 * @typedef ShipmentItem
 * @property {string} [order_date]
 * @property {ShipmentStatus} [shipment_status]
 * @property {UserDataInfo} [user]
 * @property {string} [estimated_sla_time]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {ShipmentListingChannel} [channel]
 * @property {string} [previous_shipment_id]
 * @property {boolean} [lock_status]
 * @property {string} [invoice_id]
 * @property {Object} [payment_methods]
 * @property {string} [status_created_at]
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
 */
/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
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
 * @typedef Error
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef TrackingList
 * @property {boolean} [is_passed]
 * @property {string} text
 * @property {boolean} [is_current]
 * @property {string} [time]
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
 * @property {Object} [tax_details]
 * @property {string} [cod_charges]
 * @property {string} [source]
 * @property {string} fynd_order_id
 * @property {string} [affiliate_id]
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
 * @typedef BagGST
 * @property {number} [cgst_tax_percentage]
 * @property {string} [cgst_gst_fee]
 * @property {string} [gstin_code]
 * @property {number} [value_of_good]
 * @property {number} [gst_fee]
 * @property {number} [igst_tax_percentage]
 * @property {number} [gst_tax_percentage]
 * @property {string} [hsn_code_id]
 * @property {string} [igst_gst_fee]
 * @property {string} [sgst_gst_fee]
 * @property {number} [tax_collected_at_source]
 * @property {number} [brand_calculated_amount]
 * @property {boolean} [is_default_hsn_code]
 * @property {string} [gst_tag]
 * @property {number} [sgst_tax_percentage]
 * @property {string} [hsn_code]
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
 * @typedef ReturnConfig1
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */
/**
 * @typedef OrderBagArticle
 * @property {Object} [identifiers]
 * @property {ReturnConfig1} [return_config]
 * @property {string} [uid]
 * @property {string} [size]
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
 * @typedef GiftCard
 * @property {string} [gift_message]
 * @property {number} [gift_price]
 * @property {string} [display_text]
 * @property {boolean} [is_gift_applied]
 */
/**
 * @typedef B2BPODetails
 * @property {string} [docker_number]
 * @property {number} [po_line_amount]
 * @property {number} [total_gst_percentage]
 * @property {boolean} [partial_can_ret]
 * @property {number} [po_tax_amount]
 * @property {number} [item_base_price]
 */
/**
 * @typedef BagMeta
 * @property {GiftCard} [gift_card]
 * @property {string} [custom_message]
 * @property {string} [docket_number]
 * @property {string} [group_id]
 * @property {boolean} [partial_can_ret]
 * @property {Object} [extra_meta]
 * @property {B2BPODetails} [b2b_po_details]
 * @property {Object} [custom_json]
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
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {string} [display_name]
 * @property {string} [current_shipment_status]
 */
/**
 * @typedef PlatformShipment
 * @property {string} [picked_date]
 * @property {TrackingList[]} [tracking_list]
 * @property {InvoiceInfo} [invoice]
 * @property {string} [shipment_status]
 * @property {GSTDetailsData} [gst_details]
 * @property {Object} [delivery_slot]
 * @property {OrderDetailsData} [order]
 * @property {UserDataInfo} [user]
 * @property {boolean} [enable_dp_tracking]
 * @property {string} [custom_message]
 * @property {string} [estimated_sla_time]
 * @property {boolean} [can_update_dimension]
 * @property {string[]} [shipment_images]
 * @property {UserDetailsData} [delivery_details]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [forward_shipment_id]
 * @property {number} [fulfilment_priority]
 * @property {ShipmentDetails} [shipment_details]
 * @property {Object[]} [custom_meta]
 * @property {number} [shipment_quantity]
 * @property {CompanyDetails} [company_details]
 * @property {OrderingStoreDetails} [ordering_store]
 * @property {boolean} [lock_status]
 * @property {string} [platform_logo]
 * @property {string} [user_agent]
 * @property {DPDetailsData} [dp_details]
 * @property {string} [invoice_id]
 * @property {Object} [payment_methods]
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
 * @property {string} [previous_shipment_id]
 * @property {number} [shipment_update_time]
 * @property {PlatformDeliveryAddress} [rto_address]
 * @property {string} [credit_note_id]
 * @property {boolean} [is_self_ship]
 * @property {string} [mode_of_payment]
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
 * @typedef PlatformUserDetails
 * @property {string} [platform_user_employee_code]
 * @property {string} [platform_user_first_name]
 * @property {string} [platform_user_id]
 * @property {string} [platform_user_last_name]
 */
/**
 * @typedef TransactionData
 * @property {string} [currency]
 * @property {number} [amount_paid]
 * @property {string} [payment_id]
 * @property {string} [unique_reference_number]
 * @property {string} [terminal_id]
 * @property {string} [entity]
 * @property {string} [transaction_id]
 * @property {string} [status]
 */
/**
 * @typedef BillingStaffDetails
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {number} [staff_id]
 * @property {string} [employee_code]
 * @property {string} [user]
 */
/**
 * @typedef OrderMeta
 * @property {PlatformUserDetails} [platform_user_details]
 * @property {string} [company_logo]
 * @property {string} [currency_symbol]
 * @property {string} [comment]
 * @property {Object} [extra_meta]
 * @property {Object[]} [files]
 * @property {TransactionData} [transaction_data]
 * @property {BillingStaffDetails} [billing_staff_details]
 * @property {number} [ordering_store]
 * @property {string} [payment_type]
 * @property {number} [mongo_cart_id]
 * @property {string[]} [order_child_entities]
 * @property {string} [order_type]
 * @property {string} [order_platform]
 * @property {string} [employee_id]
 * @property {Object[]} [order_tags]
 * @property {string} [customer_note]
 * @property {Object} [staff]
 * @property {number} [cart_id]
 * @property {string} [cart_object_id]
 */
/**
 * @typedef OrderData
 * @property {string} order_date
 * @property {TaxDetails} [tax_details]
 * @property {Object} [meta]
 * @property {string} fynd_order_id
 * @property {Prices} [prices]
 * @property {Object} [payment_methods]
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
 * @property {string} [payment_mode]
 * @property {PlatformShipment[]} [shipments]
 * @property {string} [order_id]
 * @property {PlatformChannel} [channel]
 * @property {UserDataInfo} [user_info]
 * @property {number} [order_value]
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
 * @typedef FilterInfoOption
 * @property {string} [value]
 * @property {string} [text]
 * @property {boolean} [show_ui]
 * @property {string} [placeholder_text]
 * @property {number} [min_search_size]
 * @property {string} [name]
 */
/**
 * @typedef FiltersInfo
 * @property {string} value
 * @property {string} type
 * @property {string} text
 * @property {FilterInfoOption[]} [options]
 * @property {string} [placeholder_text]
 * @property {boolean} [required]
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
 * @typedef BagGSTDetails
 * @property {number} cgst_tax_percentage
 * @property {string} cgst_gst_fee
 * @property {string} [gstin_code]
 * @property {number} value_of_good
 * @property {number} gst_fee
 * @property {number} igst_tax_percentage
 * @property {number} gst_tax_percentage
 * @property {string} hsn_code_id
 * @property {string} igst_gst_fee
 * @property {string} sgst_gst_fee
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 * @property {boolean} [is_default_hsn_code]
 * @property {string} gst_tag
 * @property {number} sgst_tax_percentage
 * @property {string} hsn_code
 */
/**
 * @typedef StoreAddress
 * @property {string} phone
 * @property {string} created_at
 * @property {string} contact_person
 * @property {number} pincode
 * @property {string} address_type
 * @property {string} address1
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
 * @property {number} phone
 * @property {boolean} [is_active]
 * @property {number} company_id
 * @property {number} [alohomora_user_id]
 * @property {string} created_at
 * @property {string} contact_person
 * @property {Object} [brand_id]
 * @property {string} store_email
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} pincode
 * @property {string} [mall_area]
 * @property {string} [vat_no]
 * @property {string} address1
 * @property {string} [store_active_from]
 * @property {string} city
 * @property {string} name
 * @property {number} longitude
 * @property {string[]} [brand_store_tags]
 * @property {string} [order_integration_id]
 * @property {number} [parent_store_id]
 * @property {string} location_type
 * @property {string} [code]
 * @property {string} fulfillment_channel
 * @property {string} [updated_at]
 * @property {StoreAddress} [store_address_json]
 * @property {StoreMeta} meta
 * @property {string} s_id
 * @property {string} state
 * @property {string} country
 * @property {number} [packaging_material_count]
 * @property {boolean} [is_archived]
 * @property {string} login_username
 * @property {string} [mall_name]
 * @property {number} latitude
 * @property {string} [address2]
 */
/**
 * @typedef Brand
 * @property {number} [credit_note_expiry_days]
 * @property {string} [logo]
 * @property {string} [invoice_prefix]
 * @property {boolean} [credit_note_allowed]
 * @property {string} [start_date]
 * @property {string} company
 * @property {boolean} [is_virtual_invoice]
 * @property {string} [script_last_ran]
 * @property {string} [pickup_location]
 * @property {number} [created_on]
 * @property {string} brand_name
 * @property {number} brand_id
 * @property {number} [modified_on]
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
 * @property {Attributes} attributes
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
 * @typedef BagReturnableCancelableStatus1
 * @property {boolean} is_returnable
 * @property {boolean} is_active
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_customer_return_allowed
 */
/**
 * @typedef BagDetailsPlatformResponse
 * @property {number} [bag_update_time]
 * @property {number} [id]
 * @property {GSTDetailsData} [gst_details]
 * @property {Object} [parent_promo_bags]
 * @property {string[]} [tags]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {BagStatusHistory[]} [bag_status]
 * @property {string} [seller_identifier]
 * @property {number[]} [original_bag_list]
 * @property {ArticleDetails} [article_details]
 * @property {BagStatusHistory} [current_operational_status]
 * @property {Store} [ordering_store]
 * @property {Article} [article]
 * @property {Brand} [brand]
 * @property {AffiliateBagDetails} [affiliate_bag_details]
 * @property {Item} [item]
 * @property {Object} [qc_required]
 * @property {string} [identifier]
 * @property {number} [quantity]
 * @property {Object} [restore_promos]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {Object[]} [reasons]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {string} [display_name]
 * @property {string} [type]
 * @property {number} [line_number]
 * @property {boolean} [restore_coupon]
 * @property {Object} [meta]
 * @property {number} [no_of_bags_order]
 * @property {Object[]} [applied_promos]
 * @property {string} [journey_type]
 * @property {Prices} [prices]
 * @property {Dates} [dates]
 * @property {string} [shipment_id]
 * @property {BagStatusHistory} [current_status]
 * @property {string} [order_integration_id]
 * @property {string} [operational_status]
 * @property {string} [entity_type]
 * @property {BagReturnableCancelableStatus1} [status]
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
 * @typedef GetBagsPlatformResponse
 * @property {BagDetailsPlatformResponse[]} items
 * @property {BagsPage} page
 */
/**
 * @typedef GeneratePosOrderReceiptResponse
 * @property {string} [customer_cn_receipt]
 * @property {boolean} [success]
 * @property {string} [order_id]
 * @property {string} [invoice_receipt]
 * @property {string} [payment_receipt]
 * @property {string} [merchant_cn_receipt]
 */
declare class OrderPlatformModel {
}
declare namespace OrderPlatformModel {
    export { InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ErrorDetail, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, OrderItemDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, OrderPriority, ArticleDetails, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, UserData, OrderInfo, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryReason, HistoryMeta, HistoryDict, ShipmentHistoryResponse, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, Dimension, UpdatePackagingDimensionsPayload, UpdatePackagingDimensionsResponse, Tax, Charge, LineItem, ProcessingDates, Shipment, ShippingInfo, BillingInfo, UserInfo, TaxInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, BagStateTransitionMap, RoleBaseStateTransitionMapping, FetchCreditBalanceRequestPayload, CreditBalanceInfo, FetchCreditBalanceResponsePayload, RefundModeConfigRequestPayload, RefundOption, RefundModeInfo, RefundModeConfigResponsePayload, AttachUserOtpData, AttachUserInfo, AttachOrderUser, AttachOrderUserResponse, SendUserMobileOTP, PointBlankOtpData, SendUserMobileOtpResponse, VerifyOtpData, VerifyMobileOTP, VerifyOtpResponseData, VerifyOtpResponse, CourierPartnerTrackingDetails, PageDetails, CourierPartnerTrackingResponse, BulkReportsDownloadRequest, BulkReportsDownloadResponse, BulkReportsDownloadFailedResponse, EInvoiceRetryShipmentData, EInvoiceRetry, EInvoiceResponseData, EInvoiceRetryResponse, GenerateInvoiceIDResponseData, GenerateInvoiceIDErrorResponseData, GenerateInvoiceIDRequest, GenerateInvoiceIDResponse, GenerateInvoiceIDErrorResponse, BagReasonMeta, QuestionSet, BagReasons, ShipmentBagReasons, ShipmentStatus, UserDataInfo, PlatformDeliveryAddress, ShipmentListingChannel, GSTDetailsData, Identifier, FinancialBreakup, BagStateMapper, BagStatusHistory, Dimensions, ReturnConfig, Weight, Article, ShipmentListingBrand, ReplacementDetails, AffiliateMeta, AffiliateBagDetails, PlatformArticleAttributes, PlatformItem, Prices, Dates, BagReturnableCancelableStatus, BagUnit, ShipmentItemFulFillingStore, Formatted, ShipmentTags, LockData, ShipmentTimeStamp, ShipmentItemMeta, ShipmentItem, Page, ShipmentInternalPlatformViewResponse, Error, TrackingList, InvoiceInfo, OrderDetailsData, UserDetailsData, PhoneDetails, ContactDetails, CompanyDetails, OrderingStoreDetails, DPDetailsData, BuyerDetails, DebugInfo, EinvoiceInfo, ShipmentMeta, PDFLinks, AffiliateDetails, BagGST, BagConfigs, ReturnConfig1, OrderBagArticle, OrderBrandName, AffiliateBagsDetails, BagPaymentMethods, GiftCard, B2BPODetails, BagMeta, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, CurrentStatus, OrderBags, FulfillingStore, ShipmentPayments, ShipmentStatusData, PlatformShipment, ShipmentInfoResponse, TaxDetails, PlatformUserDetails, TransactionData, BillingStaffDetails, OrderMeta, OrderData, OrderDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, PlatformTrack, PlatformShipmentTrack, FilterInfoOption, FiltersInfo, AdvanceFilterInfo, FiltersResponse, URL, FileResponse, BulkActionTemplate, BulkActionTemplateResponse, Reason, PlatformShipmentReasonsResponse, ShipmentResponseReasons, ShipmentReasonsResponse, BagGSTDetails, StoreAddress, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, StoreMeta, Store, Brand, Attributes, Item, BagReturnableCancelableStatus1, BagDetailsPlatformResponse, BagsPage, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse };
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
    status?: number;
    success?: boolean;
    message: string;
    error_trace?: string;
    error: string;
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
     * - Shipment/Entity
     */
    entities: Entities[];
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
};
/** @returns {BaseResponse} */
declare function BaseResponse(): BaseResponse;
type BaseResponse = {
    success?: boolean;
    message?: string;
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
     * - Product/Bag Line number for the
     * Product/Bag Identifier
     */
    line_number?: number;
    /**
     * - Product/Bag Article/Item Identifier
     */
    identifier?: string;
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
/** @returns {DataUpdates} */
declare function DataUpdates(): DataUpdates;
type DataUpdates = {
    order_item_status?: OrderItemDataUpdates[];
    products?: ProductsDataUpdates[];
    entities?: EntitiesDataUpdates[];
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
    status?: any;
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
    dp_id?: number;
    meta?: any;
    affiliate_shipment_id: string;
    lock_status?: boolean;
    lock_message?: string;
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
/** @returns {CreateOrderPayload} */
declare function CreateOrderPayload(): CreateOrderPayload;
type CreateOrderPayload = {
    order_info: OrderInfo;
    order_config: OrderConfig;
    affiliate_id: string;
};
/** @returns {CreateOrderResponse} */
declare function CreateOrderResponse(): CreateOrderResponse;
type CreateOrderResponse = {
    fynd_order_id: string;
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
/** @returns {PostActivityHistory} */
declare function PostActivityHistory(): PostActivityHistory;
type PostActivityHistory = {
    filters: PostHistoryFilters[];
    data: PostHistoryData;
};
/** @returns {PostHistoryDict} */
declare function PostHistoryDict(): PostHistoryDict;
type PostHistoryDict = {
    activity_history: PostActivityHistory;
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
     * - ShipmentId
     */
    shipment_id: number;
    /**
     * - Phone number for communication
     */
    phone_number: number;
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
    bag_id: number;
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
    created_at?: string;
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
};
/** @returns {OrderStatusResult} */
declare function OrderStatusResult(): OrderStatusResult;
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
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
    amount: any;
};
/** @returns {Charge} */
declare function Charge(): Charge;
type Charge = {
    name: string;
    amount: any;
    tax?: Tax;
    code?: string;
    type: string;
};
/** @returns {LineItem} */
declare function LineItem(): LineItem;
type LineItem = {
    charges?: Charge[];
    meta?: any;
    custom_message?: string;
    quantity?: number;
    seller_identifier: string;
    external_line_id?: string;
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
    external_shipment_id?: string;
    processing_dates?: ProcessingDates;
    meta?: any;
    priority?: number;
    location_id: number;
    order_type?: string;
};
/** @returns {ShippingInfo} */
declare function ShippingInfo(): ShippingInfo;
type ShippingInfo = {
    alternate_mobile_number?: string;
    state: string;
    customer_code?: string;
    shipping_type?: string;
    middle_name?: string;
    primary_mobile_number: string;
    last_name?: string;
    geo_location?: any;
    gender?: string;
    house_no?: string;
    first_name: string;
    title?: string;
    landmark?: string;
    country: string;
    address_type?: string;
    state_code?: string;
    city: string;
    external_customer_code?: string;
    floor_no?: string;
    alternate_email?: string;
    slot?: any[];
    address1: string;
    pincode: string;
    primary_email: string;
    address2?: string;
    country_code?: string;
};
/** @returns {BillingInfo} */
declare function BillingInfo(): BillingInfo;
type BillingInfo = {
    alternate_mobile_number?: string;
    state: string;
    customer_code?: string;
    middle_name?: string;
    primary_mobile_number: string;
    last_name?: string;
    gender?: string;
    house_no?: string;
    first_name: string;
    title?: string;
    country: string;
    state_code?: string;
    city: string;
    external_customer_code?: string;
    floor_no?: string;
    alternate_email?: string;
    address1: string;
    pincode: string;
    primary_email: string;
    address2?: string;
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
    shipments: Shipment[];
    shipping_info: ShippingInfo;
    billing_info: BillingInfo;
    currency_info?: any;
    external_order_id?: string;
    charges?: Charge[];
    external_creation_date?: string;
    meta?: any;
    tax_info?: TaxInfo;
    config?: any;
    payment_info: PaymentInfo;
    user_info?: UserInfo;
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
    success?: boolean;
    message?: string;
    data?: PointBlankOtpData;
};
/** @returns {VerifyOtpData} */
declare function VerifyOtpData(): VerifyOtpData;
type VerifyOtpData = {
    request_id: string;
    mobile: string;
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
/** @returns {CourierPartnerTrackingDetails} */
declare function CourierPartnerTrackingDetails(): CourierPartnerTrackingDetails;
type CourierPartnerTrackingDetails = {
    /**
     * - Operational status of OMS
     */
    operational_status: string;
    /**
     * - Status at Courier partner end
     */
    dp_status: string;
    /**
     * - Shipment ID
     */
    shipment_id: string;
    /**
     * - AWB Number
     */
    awb: string;
    /**
     * - Date Time at which status was
     * updated at Courier partner
     */
    dp_status_updated_at: string;
    /**
     * - Remark from courier partner
     */
    remark?: string;
    /**
     * - Id of Tracking history
     */
    id?: number;
    /**
     * - Current location of Courier partner
     */
    dp_location?: string;
    /**
     * - Estimated delivery date
     * received from Courier partner
     */
    estimated_delivery_date?: string;
    /**
     * - Journey type of the shipment
     */
    journey: string;
    /**
     * - Meta field to store Courier partner's meta data
     */
    meta?: any;
    /**
     * - Courier Partner name
     */
    dp_name: string;
    /**
     * - Promised delivery date received
     * from Courier partner
     */
    promised_delivery_date?: string;
};
/** @returns {PageDetails} */
declare function PageDetails(): PageDetails;
type PageDetails = {
    /**
     * - Total count of the results present in the
     * requested filter
     */
    item_total: number;
    /**
     * - Current page number
     */
    current?: number;
    /**
     * - Page size
     */
    size?: number;
    /**
     * - Type of the page
     */
    type?: string;
    /**
     * - If next page contains any result
     */
    has_next?: boolean;
};
/** @returns {CourierPartnerTrackingResponse} */
declare function CourierPartnerTrackingResponse(): CourierPartnerTrackingResponse;
type CourierPartnerTrackingResponse = {
    items?: CourierPartnerTrackingDetails[];
    page?: PageDetails;
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
    from_date?: string;
    to_date?: string;
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
};
/** @returns {BulkReportsDownloadResponse} */
declare function BulkReportsDownloadResponse(): BulkReportsDownloadResponse;
type BulkReportsDownloadResponse = {
    success?: boolean;
    batch_id?: string;
};
/** @returns {BulkReportsDownloadFailedResponse} */
declare function BulkReportsDownloadFailedResponse(): BulkReportsDownloadFailedResponse;
type BulkReportsDownloadFailedResponse = {
    status?: boolean;
    error?: string;
};
/** @returns {EInvoiceRetryShipmentData} */
declare function EInvoiceRetryShipmentData(): EInvoiceRetryShipmentData;
type EInvoiceRetryShipmentData = {
    shipment_id: string;
};
/** @returns {EInvoiceRetry} */
declare function EInvoiceRetry(): EInvoiceRetry;
type EInvoiceRetry = {
    shipments_data?: EInvoiceRetryShipmentData[];
};
/** @returns {EInvoiceResponseData} */
declare function EInvoiceResponseData(): EInvoiceResponseData;
type EInvoiceResponseData = {
    shipment_id: string;
    message: string;
    success: boolean;
    ack_no?: string;
    irn?: string;
    ack_dt?: string;
    timeout?: number;
    timeout_unit?: string;
};
/** @returns {EInvoiceRetryResponse} */
declare function EInvoiceRetryResponse(): EInvoiceRetryResponse;
type EInvoiceRetryResponse = {
    success?: boolean;
    success_count: number;
    message?: string;
    response_data: EInvoiceResponseData[];
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
/** @returns {GenerateInvoiceIDRequest} */
declare function GenerateInvoiceIDRequest(): GenerateInvoiceIDRequest;
type GenerateInvoiceIDRequest = {
    shipment_ids: string[];
};
/** @returns {GenerateInvoiceIDResponse} */
declare function GenerateInvoiceIDResponse(): GenerateInvoiceIDResponse;
type GenerateInvoiceIDResponse = {
    items?: GenerateInvoiceIDResponseData[];
};
/** @returns {GenerateInvoiceIDErrorResponse} */
declare function GenerateInvoiceIDErrorResponse(): GenerateInvoiceIDErrorResponse;
type GenerateInvoiceIDErrorResponse = {
    items?: GenerateInvoiceIDErrorResponseData[];
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
    current_shipment_status?: string;
    meta?: any;
    shipment_status_id?: number;
    bag_list?: string[];
    title: string;
    created_at?: string;
    shipment_id?: string;
    status_created_at?: string;
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
/** @returns {PlatformDeliveryAddress} */
declare function PlatformDeliveryAddress(): PlatformDeliveryAddress;
type PlatformDeliveryAddress = {
    phone?: string;
    address2?: string;
    longitude?: number;
    pincode?: string;
    area?: string;
    address_type?: string;
    country?: string;
    address_category?: string;
    email?: string;
    created_at?: string;
    address1?: string;
    landmark?: string;
    updated_at?: string;
    version?: string;
    latitude?: number;
    contact_person?: string;
    state?: string;
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
/** @returns {GSTDetailsData} */
declare function GSTDetailsData(): GSTDetailsData;
type GSTDetailsData = {
    cgst_tax_percentage?: number;
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
    hsn_code?: string;
};
/** @returns {Identifier} */
declare function Identifier(): Identifier;
type Identifier = {
    alu?: string;
    ean?: string;
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
    identifiers: Identifier;
    total_units: number;
    added_to_fynd_cash: boolean;
};
/** @returns {BagStateMapper} */
declare function BagStateMapper(): BagStateMapper;
type BagStateMapper = {
    is_active?: boolean;
    app_display_name?: string;
    state_type: string;
    id: number;
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
    state_type?: string;
    bsh_id?: number;
    created_at?: string;
    shipment_id?: string;
    updated_at?: string;
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
    child_details?: any;
    seller_identifier: string;
    uid: string;
    a_set?: any;
    dimensions?: Dimensions;
    currency?: any;
    esp_modified?: boolean;
    return_config?: ReturnConfig;
    code?: string;
    weight?: Weight;
    _id: string;
    identifiers: any;
    raw_meta?: string;
    size: string;
    is_set?: boolean;
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
};
/** @returns {Prices} */
declare function Prices(): Prices;
type Prices = {
    refund_credit?: number;
    amount_paid_roundoff?: number;
    price_effective?: number;
    promotion_effective_discount?: number;
    pm_price_split?: number;
    refund_amount?: number;
    transfer_price?: number;
    coupon_effective_discount?: number;
    tax_collected_at_source?: number;
    brand_calculated_amount?: number;
    delivery_charge?: number;
    cashback?: number;
    value_of_good?: number;
    cashback_applied?: number;
    cod_charges?: number;
    price_marked?: number;
    amount_paid?: number;
    coupon_value?: number;
    discount?: number;
    fynd_credits?: number;
    gift_price?: number;
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
    phone?: string;
    brand_store_tags?: string;
    pincode?: string;
    meta?: any;
    address?: string;
    location_type?: string;
    id: number;
    code: string;
    store_email?: string;
    name?: string;
    state?: string;
    city?: string;
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
/** @returns {ShipmentItemMeta} */
declare function ShipmentItemMeta(): ShipmentItemMeta;
type ShipmentItemMeta = {
    same_store_available?: boolean;
    is_self_ship?: boolean;
    is_international?: boolean;
    formatted?: Formatted;
    debug_info?: any;
    sla?: number;
    shipment_chargeable_weight?: number;
    pdf_media?: any[];
    tags?: any[];
    existing_dp_list?: string[];
    parent_dp_id?: string;
    shipment_weight?: number;
    dp_options?: any;
    assign_dp_from_sb?: boolean;
    shipping_zone?: string;
    store_invoice_updated_date?: string;
    activity_comment?: string;
    fulfilment_priority_text?: string;
    shipment_tags?: ShipmentTags[];
    external?: any;
    ewaybill_info?: any;
    lock_data?: LockData;
    order_type?: string;
    shipment_volumetric_weight?: number;
    dp_sort_key?: string;
    packaging_name?: string;
    timestamp?: ShipmentTimeStamp;
    auto_trigger_dp_assignment_acf: boolean;
    weight?: number;
    bag_weight?: any;
};
/** @returns {ShipmentItem} */
declare function ShipmentItem(): ShipmentItem;
type ShipmentItem = {
    order_date?: string;
    shipment_status?: ShipmentStatus;
    user?: UserDataInfo;
    estimated_sla_time?: string;
    delivery_address?: PlatformDeliveryAddress;
    channel?: ShipmentListingChannel;
    previous_shipment_id?: string;
    lock_status?: boolean;
    invoice_id?: string;
    payment_methods?: any;
    status_created_at?: string;
    display_name?: string;
    bags?: BagUnit[];
    fulfilling_store?: ShipmentItemFulFillingStore;
    meta?: any;
    payment_mode?: string;
    can_process?: boolean;
    prices?: Prices;
    order_id: string;
    ordering_channnel?: string;
    shipment_id?: string;
    customer_note?: string;
    total_bags: number;
    shipment_created_at: string;
    mode_of_payment?: string;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
};
/** @returns {ShipmentInternalPlatformViewResponse} */
declare function ShipmentInternalPlatformViewResponse(): ShipmentInternalPlatformViewResponse;
type ShipmentInternalPlatformViewResponse = {
    total_count?: number;
    message?: string;
    success?: boolean;
    items?: ShipmentItem[];
    lane?: string;
    page?: Page;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    message?: string;
    success?: boolean;
};
/** @returns {TrackingList} */
declare function TrackingList(): TrackingList;
type TrackingList = {
    is_passed?: boolean;
    text: string;
    is_current?: boolean;
    time?: string;
    status: string;
};
/** @returns {InvoiceInfo} */
declare function InvoiceInfo(): InvoiceInfo;
type InvoiceInfo = {
    store_invoice_id?: string;
    invoice_url?: string;
    updated_date?: string;
    external_invoice_id?: string;
    label_url?: string;
    credit_note_id?: string;
    links?: any;
};
/** @returns {OrderDetailsData} */
declare function OrderDetailsData(): OrderDetailsData;
type OrderDetailsData = {
    order_date?: string;
    tax_details?: any;
    cod_charges?: string;
    source?: string;
    fynd_order_id: string;
    affiliate_id?: string;
    ordering_channel_logo?: any;
    order_value?: string;
    ordering_channel?: string;
    meta?: any;
};
/** @returns {UserDetailsData} */
declare function UserDetailsData(): UserDetailsData;
type UserDetailsData = {
    phone: string;
    pincode: string;
    address: string;
    area?: string;
    address_type?: string;
    country: string;
    email?: string;
    address1?: string;
    landmark?: string;
    state: string;
    name: string;
    city: string;
};
/** @returns {PhoneDetails} */
declare function PhoneDetails(): PhoneDetails;
type PhoneDetails = {
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
    meta?: any;
    address?: string;
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
    credit_note?: any;
    invoice?: any;
};
/** @returns {ShipmentMeta} */
declare function ShipmentMeta(): ShipmentMeta;
type ShipmentMeta = {
    tracking_url?: string;
    estimated_delivery_date?: string;
    same_store_available: boolean;
    b2b_buyer_details?: BuyerDetails;
    formatted?: Formatted;
    debug_info?: DebugInfo;
    return_awb_number?: string;
    is_self_ship?: boolean;
    box_type?: string;
    einvoice_info?: EinvoiceInfo;
    return_affiliate_shipment_id?: string;
    parent_dp_id?: string;
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
    invoice_type: string;
    label_a6?: string;
    invoice?: string;
    label_pos?: string;
    invoice_a6?: string;
    b2b?: string;
    label?: string;
    label_a4?: string;
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
    affiliate_shipment_id: string;
    company_affiliate_tag?: string;
    affiliate_order_id: string;
    pdf_links?: PDFLinks;
    config?: AffiliateConfig;
    affiliate_id?: string;
    affiliate_store_id: string;
    affiliate_bag_id: string;
    ad_id?: string;
};
/** @returns {BagGST} */
declare function BagGST(): BagGST;
type BagGST = {
    cgst_tax_percentage?: number;
    cgst_gst_fee?: string;
    gstin_code?: string;
    value_of_good?: number;
    gst_fee?: number;
    igst_tax_percentage?: number;
    gst_tax_percentage?: number;
    hsn_code_id?: string;
    igst_gst_fee?: string;
    sgst_gst_fee?: string;
    tax_collected_at_source?: number;
    brand_calculated_amount?: number;
    is_default_hsn_code?: boolean;
    gst_tag?: string;
    sgst_tax_percentage?: number;
    hsn_code?: string;
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
/** @returns {ReturnConfig1} */
declare function ReturnConfig1(): ReturnConfig1;
type ReturnConfig1 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
/** @returns {OrderBagArticle} */
declare function OrderBagArticle(): OrderBagArticle;
type OrderBagArticle = {
    identifiers?: any;
    return_config?: ReturnConfig1;
    uid?: string;
    size?: string;
};
/** @returns {OrderBrandName} */
declare function OrderBrandName(): OrderBrandName;
type OrderBrandName = {
    logo?: string;
    company?: number;
    id: number;
    created_on?: string;
    brand_name?: string;
    modified_on?: string;
};
/** @returns {AffiliateBagsDetails} */
declare function AffiliateBagsDetails(): AffiliateBagsDetails;
type AffiliateBagsDetails = {
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
/** @returns {GiftCard} */
declare function GiftCard(): GiftCard;
type GiftCard = {
    gift_message?: string;
    gift_price?: number;
    display_text?: string;
    is_gift_applied?: boolean;
};
/** @returns {B2BPODetails} */
declare function B2BPODetails(): B2BPODetails;
type B2BPODetails = {
    docker_number?: string;
    po_line_amount?: number;
    total_gst_percentage?: number;
    partial_can_ret?: boolean;
    po_tax_amount?: number;
    item_base_price?: number;
};
/** @returns {BagMeta} */
declare function BagMeta(): BagMeta;
type BagMeta = {
    gift_card?: GiftCard;
    custom_message?: string;
    docket_number?: string;
    group_id?: string;
    partial_can_ret?: boolean;
    extra_meta?: any;
    b2b_po_details?: B2BPODetails;
    custom_json?: any;
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
    parent_promo_bags?: any;
    financial_breakup?: FinancialBreakup;
    bag_configs?: BagConfigs;
    seller_identifier?: string;
    delivery_address?: PlatformDeliveryAddress;
    article?: OrderBagArticle;
    brand?: OrderBrandName;
    group_id?: string;
    affiliate_bag_details?: AffiliateBagsDetails;
    item?: PlatformItem;
    payment_methods?: BagPaymentMethods[];
    quantity?: number;
    identifier?: string;
    can_return?: boolean;
    can_cancel?: boolean;
    display_name?: string;
    line_number?: number;
    meta?: any;
    applied_promos?: AppliedPromos[];
    prices?: Prices;
    current_status?: CurrentStatus;
    bag_id: number;
    entity_type?: string;
    is_parent?: boolean;
};
/** @returns {FulfillingStore} */
declare function FulfillingStore(): FulfillingStore;
type FulfillingStore = {
    phone: string;
    pincode: string;
    meta: any;
    address: string;
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
    meta?: any;
    bag_list?: string[];
    id?: number;
    created_at?: string;
    shipment_id?: string;
    status?: string;
    display_name?: string;
    current_shipment_status?: string;
};
/** @returns {PlatformShipment} */
declare function PlatformShipment(): PlatformShipment;
type PlatformShipment = {
    picked_date?: string;
    tracking_list?: TrackingList[];
    invoice?: InvoiceInfo;
    shipment_status?: string;
    gst_details?: GSTDetailsData;
    delivery_slot?: any;
    order?: OrderDetailsData;
    user?: UserDataInfo;
    enable_dp_tracking?: boolean;
    custom_message?: string;
    estimated_sla_time?: string;
    can_update_dimension?: boolean;
    shipment_images?: string[];
    delivery_details?: UserDetailsData;
    billing_details?: UserDetailsData;
    forward_shipment_id?: string;
    fulfilment_priority?: number;
    shipment_details?: ShipmentDetails;
    custom_meta?: any[];
    shipment_quantity?: number;
    company_details?: CompanyDetails;
    ordering_store?: OrderingStoreDetails;
    lock_status?: boolean;
    platform_logo?: string;
    user_agent?: string;
    dp_details?: DPDetailsData;
    invoice_id?: string;
    payment_methods?: any;
    coupon?: any;
    affiliate_details?: AffiliateDetails;
    priority_text?: string;
    bag_status_history?: BagStatusHistory[];
    is_dp_assign_enabled?: boolean;
    bags?: OrderBags[];
    dp_assignment?: boolean;
    total_items?: number;
    fulfilling_store?: FulfillingStore;
    meta?: any;
    pdf_links?: any;
    payment_mode?: string;
    packaging_type?: string;
    journey_type?: string;
    prices?: Prices;
    vertical?: string;
    shipment_id: string;
    payments?: ShipmentPayments;
    operational_status?: string;
    status?: ShipmentStatusData;
    total_bags?: number;
    shipment_created_at?: string;
    previous_shipment_id?: string;
    shipment_update_time?: number;
    rto_address?: PlatformDeliveryAddress;
    credit_note_id?: string;
    is_self_ship?: boolean;
    mode_of_payment?: string;
};
/** @returns {ShipmentInfoResponse} */
declare function ShipmentInfoResponse(): ShipmentInfoResponse;
type ShipmentInfoResponse = {
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
/** @returns {PlatformUserDetails} */
declare function PlatformUserDetails(): PlatformUserDetails;
type PlatformUserDetails = {
    platform_user_employee_code?: string;
    platform_user_first_name?: string;
    platform_user_id?: string;
    platform_user_last_name?: string;
};
/** @returns {TransactionData} */
declare function TransactionData(): TransactionData;
type TransactionData = {
    currency?: string;
    amount_paid?: number;
    payment_id?: string;
    unique_reference_number?: string;
    terminal_id?: string;
    entity?: string;
    transaction_id?: string;
    status?: string;
};
/** @returns {BillingStaffDetails} */
declare function BillingStaffDetails(): BillingStaffDetails;
type BillingStaffDetails = {
    first_name?: string;
    last_name?: string;
    staff_id?: number;
    employee_code?: string;
    user?: string;
};
/** @returns {OrderMeta} */
declare function OrderMeta(): OrderMeta;
type OrderMeta = {
    platform_user_details?: PlatformUserDetails;
    company_logo?: string;
    currency_symbol?: string;
    comment?: string;
    extra_meta?: any;
    files?: any[];
    transaction_data?: TransactionData;
    billing_staff_details?: BillingStaffDetails;
    ordering_store?: number;
    payment_type?: string;
    mongo_cart_id?: number;
    order_child_entities?: string[];
    order_type?: string;
    order_platform?: string;
    employee_id?: string;
    order_tags?: any[];
    customer_note?: string;
    staff?: any;
    cart_id?: number;
    cart_object_id?: string;
};
/** @returns {OrderData} */
declare function OrderData(): OrderData;
type OrderData = {
    order_date: string;
    tax_details?: TaxDetails;
    meta?: any;
    fynd_order_id: string;
    prices?: Prices;
    payment_methods?: any;
};
/** @returns {OrderDetailsResponse} */
declare function OrderDetailsResponse(): OrderDetailsResponse;
type OrderDetailsResponse = {
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
    logo?: string;
    name?: string;
};
/** @returns {PlatformOrderItems} */
declare function PlatformOrderItems(): PlatformOrderItems;
type PlatformOrderItems = {
    breakup_values?: PlatformBreakupValues[];
    total_order_value?: number;
    meta?: any;
    order_created_time?: string;
    payment_mode?: string;
    shipments?: PlatformShipment[];
    order_id?: string;
    channel?: PlatformChannel;
    user_info?: UserDataInfo;
    order_value?: number;
};
/** @returns {OrderListingResponse} */
declare function OrderListingResponse(): OrderListingResponse;
type OrderListingResponse = {
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
/** @returns {FilterInfoOption} */
declare function FilterInfoOption(): FilterInfoOption;
type FilterInfoOption = {
    value?: string;
    text?: string;
    show_ui?: boolean;
    placeholder_text?: string;
    min_search_size?: number;
    name?: string;
};
/** @returns {FiltersInfo} */
declare function FiltersInfo(): FiltersInfo;
type FiltersInfo = {
    value: string;
    type: string;
    text: string;
    options?: FilterInfoOption[];
    placeholder_text?: string;
    required?: boolean;
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
/** @returns {Reason} */
declare function Reason(): Reason;
type Reason = {
    qc_type?: string[];
    id?: number;
    question_set?: QuestionSet[];
    display_name?: string;
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
/** @returns {BagGSTDetails} */
declare function BagGSTDetails(): BagGSTDetails;
type BagGSTDetails = {
    cgst_tax_percentage: number;
    cgst_gst_fee: string;
    gstin_code?: string;
    value_of_good: number;
    gst_fee: number;
    igst_tax_percentage: number;
    gst_tax_percentage: number;
    hsn_code_id: string;
    igst_gst_fee: string;
    sgst_gst_fee: string;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    is_default_hsn_code?: boolean;
    gst_tag: string;
    sgst_tax_percentage: number;
    hsn_code: string;
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
    phone: number;
    is_active?: boolean;
    company_id: number;
    alohomora_user_id?: number;
    created_at: string;
    contact_person: string;
    brand_id?: any;
    store_email: string;
    is_enabled_for_recon?: boolean;
    pincode: string;
    mall_area?: string;
    vat_no?: string;
    address1: string;
    store_active_from?: string;
    city: string;
    name: string;
    longitude: number;
    brand_store_tags?: string[];
    order_integration_id?: string;
    parent_store_id?: number;
    location_type: string;
    code?: string;
    fulfillment_channel: string;
    updated_at?: string;
    store_address_json?: StoreAddress;
    meta: StoreMeta;
    s_id: string;
    state: string;
    country: string;
    packaging_material_count?: number;
    is_archived?: boolean;
    login_username: string;
    mall_name?: string;
    latitude: number;
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
    company: string;
    is_virtual_invoice?: boolean;
    script_last_ran?: string;
    pickup_location?: string;
    created_on?: number;
    brand_name: string;
    brand_id: number;
    modified_on?: number;
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
/** @returns {BagReturnableCancelableStatus1} */
declare function BagReturnableCancelableStatus1(): BagReturnableCancelableStatus1;
type BagReturnableCancelableStatus1 = {
    is_returnable: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
};
/** @returns {BagDetailsPlatformResponse} */
declare function BagDetailsPlatformResponse(): BagDetailsPlatformResponse;
type BagDetailsPlatformResponse = {
    bag_update_time?: number;
    id?: number;
    gst_details?: GSTDetailsData;
    parent_promo_bags?: any;
    tags?: string[];
    financial_breakup?: FinancialBreakup[];
    bag_status?: BagStatusHistory[];
    seller_identifier?: string;
    original_bag_list?: number[];
    article_details?: ArticleDetails;
    current_operational_status?: BagStatusHistory;
    ordering_store?: Store;
    article?: Article;
    brand?: Brand;
    affiliate_bag_details?: AffiliateBagDetails;
    item?: Item;
    qc_required?: any;
    identifier?: string;
    quantity?: number;
    restore_promos?: any;
    affiliate_details?: AffiliateDetails;
    reasons?: any[];
    bag_status_history?: BagStatusHistory;
    display_name?: string;
    type?: string;
    line_number?: number;
    restore_coupon?: boolean;
    meta?: any;
    no_of_bags_order?: number;
    applied_promos?: any[];
    journey_type?: string;
    prices?: Prices;
    dates?: Dates;
    shipment_id?: string;
    current_status?: BagStatusHistory;
    order_integration_id?: string;
    operational_status?: string;
    entity_type?: string;
    status?: BagReturnableCancelableStatus1;
};
/** @returns {BagsPage} */
declare function BagsPage(): BagsPage;
type BagsPage = {
    item_total: number;
    has_next: boolean;
    page_type: string;
    current: number;
    size: number;
};
/** @returns {GetBagsPlatformResponse} */
declare function GetBagsPlatformResponse(): GetBagsPlatformResponse;
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: BagsPage;
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
};
