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

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      status: Joi.number().allow(null),
      success: Joi.boolean().allow(null),
      message: Joi.string().allow("").allow(null).required(),
      error_trace: Joi.string().allow("").allow(null),
      error: Joi.string().allow("").required(),
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
      reason_ids: Joi.array().items(Joi.number()),
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

  /** @returns {Entities} */
  static Entities() {
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
      entities: Joi.array().items(OrderPlatformModel.Entities()).required(),
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
      message: Joi.string().allow(""),
    });
  }

  /** @returns {BaseResponse} */
  static BaseResponse() {
    return Joi.object({
      success: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {Click2CallResponse} */
  static Click2CallResponse() {
    return Joi.object({
      call_id: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
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

  /** @returns {UpdateShipmentStatusRequest} */
  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),
      statuses: Joi.array().items(OrderPlatformModel.StatuesRequest()),
      lock_after_transition: Joi.boolean(),
      unlock_before_transition: Joi.boolean(),
      task: Joi.boolean(),
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
      dimension: Joi.any().required(),
      category: Joi.any().required(),
      weight: Joi.any().required(),
      attributes: Joi.any().required(),
      quantity: Joi.number().required(),
      status: Joi.any().allow(null),
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
      dp_id: Joi.number().allow(null),
      meta: Joi.any(),
      affiliate_shipment_id: Joi.string().allow("").required(),
      lock_status: Joi.boolean().allow(null),
      lock_message: Joi.string().allow("").allow(null),
      action_to_status: Joi.any().allow(null),
    });
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
      identifier: Joi.any().required(),
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
      affiliate_meta: Joi.any().required(),
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
      items: Joi.any().required(),
      discount: Joi.number().required(),
      billing_address: OrderPlatformModel.OrderUser().required(),
      payment: Joi.any(),
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
      store: Joi.any(),
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

  /** @returns {CreateOrderPayload} */
  static CreateOrderPayload() {
    return Joi.object({
      order_info: OrderPlatformModel.OrderInfo().required(),
      order_config: OrderPlatformModel.OrderConfig().required(),
      affiliate_id: Joi.string().allow("").required(),
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

  /** @returns {PostActivityHistory} */
  static PostActivityHistory() {
    return Joi.object({
      filters: Joi.array()
        .items(OrderPlatformModel.PostHistoryFilters())
        .required(),
      data: OrderPlatformModel.PostHistoryData().required(),
    });
  }

  /** @returns {PostHistoryDict} */
  static PostHistoryDict() {
    return Joi.object({
      activity_history: OrderPlatformModel.PostActivityHistory().required(),
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
      weight: Joi.string().allow(""),
      height: Joi.string().allow(""),
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

  /** @returns {Charge} */
  static Charge() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      amount: Joi.any().required(),
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
      meta: Joi.any(),
      priority: Joi.number(),
      location_id: Joi.number().required(),
      order_type: Joi.string().allow(""),
    });
  }

  /** @returns {ShippingInfo} */
  static ShippingInfo() {
    return Joi.object({
      alternate_mobile_number: Joi.string().allow(""),
      state: Joi.string().allow("").required(),
      customer_code: Joi.string().allow(""),
      shipping_type: Joi.string().allow(""),
      middle_name: Joi.string().allow(""),
      primary_mobile_number: Joi.string().allow("").required(),
      last_name: Joi.string().allow(""),
      geo_location: Joi.any(),
      gender: Joi.string().allow(""),
      house_no: Joi.string().allow(""),
      first_name: Joi.string().allow("").required(),
      title: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      country: Joi.string().allow("").required(),
      address_type: Joi.string().allow(""),
      state_code: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      external_customer_code: Joi.string().allow(""),
      floor_no: Joi.string().allow(""),
      alternate_email: Joi.string().allow(""),
      slot: Joi.array().items(Joi.any()),
      address1: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      primary_email: Joi.string().allow("").required(),
      address2: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {BillingInfo} */
  static BillingInfo() {
    return Joi.object({
      alternate_mobile_number: Joi.string().allow(""),
      state: Joi.string().allow("").required(),
      customer_code: Joi.string().allow(""),
      middle_name: Joi.string().allow(""),
      primary_mobile_number: Joi.string().allow("").required(),
      last_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      house_no: Joi.string().allow(""),
      first_name: Joi.string().allow("").required(),
      title: Joi.string().allow(""),
      country: Joi.string().allow("").required(),
      state_code: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      external_customer_code: Joi.string().allow(""),
      floor_no: Joi.string().allow(""),
      alternate_email: Joi.string().allow(""),
      address1: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      primary_email: Joi.string().allow("").required(),
      address2: Joi.string().allow(""),
      country_code: Joi.string().allow(""),
    });
  }

  /** @returns {UserInfo} */
  static UserInfo() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      user_type: Joi.string().allow(""),
      primary_email: Joi.string().allow("").required(),
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
      payment_methods: Joi.array().items(OrderPlatformModel.PaymentMethod()),
    });
  }

  /** @returns {CreateOrderAPI} */
  static CreateOrderAPI() {
    return Joi.object({
      shipments: Joi.array().items(OrderPlatformModel.Shipment()).required(),
      shipping_info: OrderPlatformModel.ShippingInfo().required(),
      billing_info: OrderPlatformModel.BillingInfo().required(),
      currency_info: Joi.any(),
      external_order_id: Joi.string().allow(""),
      charges: Joi.array().items(OrderPlatformModel.Charge()),
      external_creation_date: Joi.string().allow(""),
      meta: Joi.any(),
      tax_info: OrderPlatformModel.TaxInfo(),
      config: Joi.any(),
      payment_info: OrderPlatformModel.PaymentInfo().required(),
      user_info: OrderPlatformModel.UserInfo(),
    });
  }

  /** @returns {CreateOrderErrorReponse} */
  static CreateOrderErrorReponse() {
    return Joi.object({
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

  /** @returns {DpConfiguration} */
  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
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
      dp_configuration: OrderPlatformModel.DpConfiguration(),
      shipment_assignment: Joi.string().allow(""),
      location_reassignment: Joi.boolean(),
      logo_url: Joi.any(),
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

  /** @returns {CreateChannelConifgErrorResponse} */
  static CreateChannelConifgErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  /** @returns {CreateChannelConfigResponse} */
  static CreateChannelConfigResponse() {
    return Joi.object({
      is_inserted: Joi.boolean(),
      is_upserted: Joi.boolean(),
      acknowledged: Joi.boolean(),
    });
  }

  /** @returns {UploadConsent} */
  static UploadConsent() {
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
      message: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {FyndOrderIdList} */
  static FyndOrderIdList() {
    return Joi.object({
      fynd_order_id: Joi.array().items(Joi.string().allow("")),
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
      customer_mobile_number: Joi.string().allow(""),
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

  /** @returns {RefundModeInfo} */
  static RefundModeInfo() {
    return Joi.object({
      is_active: Joi.boolean(),
      slug: Joi.string().allow(""),
      options: Joi.array().items(OrderPlatformModel.RefundOption()),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {RefundModeConfigResponsePayload} */
  static RefundModeConfigResponsePayload() {
    return Joi.object({
      success: Joi.boolean().required(),
      data: Joi.array().items(OrderPlatformModel.RefundModeInfo()).required(),
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
      mobile: Joi.string().allow("").required(),
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

  /** @returns {CourierPartnerTrackingDetails} */
  static CourierPartnerTrackingDetails() {
    return Joi.object({
      operational_status: Joi.string().allow("").required(),
      dp_status: Joi.string().allow("").required(),
      shipment_id: Joi.string().allow("").required(),
      awb: Joi.string().allow("").required(),
      dp_status_updated_at: Joi.string().allow("").required(),
      remark: Joi.string().allow("").allow(null),
      id: Joi.number(),
      dp_location: Joi.string().allow("").allow(null),
      estimated_delivery_date: Joi.string().allow("").allow(null),
      journey: Joi.string().allow("").required(),
      meta: Joi.any(),
      dp_name: Joi.string().allow("").required(),
      promised_delivery_date: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PageDetails} */
  static PageDetails() {
    return Joi.object({
      item_total: Joi.number().required(),
      current: Joi.number(),
      size: Joi.number(),
      type: Joi.string().allow(""),
      has_next: Joi.boolean(),
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

  /** @returns {BulkReportsDownloadRequest} */
  static BulkReportsDownloadRequest() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.string().allow("")),
      lane_type: Joi.string().allow(""),
      custom_headers: Joi.string().allow(""),
      report_type: Joi.string().allow(""),
      from_date: Joi.string().allow(""),
      to_date: Joi.string().allow(""),
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

  /** @returns {BulkReportsDownloadFailedResponse} */
  static BulkReportsDownloadFailedResponse() {
    return Joi.object({
      status: Joi.boolean(),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {EInvoiceRetryShipmentData} */
  static EInvoiceRetryShipmentData() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),
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

  /** @returns {EInvoiceResponseData} */
  static EInvoiceResponseData() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      ack_no: Joi.string().allow(""),
      irn: Joi.string().allow(""),
      ack_dt: Joi.string().allow(""),
      timeout: Joi.number(),
      timeout_unit: Joi.string().allow(""),
    });
  }

  /** @returns {EInvoiceRetryResponse} */
  static EInvoiceRetryResponse() {
    return Joi.object({
      success: Joi.boolean(),
      success_count: Joi.number().required(),
      message: Joi.string().allow(""),
      response_data: Joi.array()
        .items(OrderPlatformModel.EInvoiceResponseData())
        .required(),
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

  /** @returns {GenerateInvoiceIDRequest} */
  static GenerateInvoiceIDRequest() {
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
      bag_list: Joi.array().items(Joi.string().allow("")),
      title: Joi.string().allow("").required(),
      created_at: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").allow(null),
      status_created_at: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").required(),
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
      landmark: Joi.string().allow("").allow(null),
      updated_at: Joi.string().allow("").allow(null),
      version: Joi.string().allow("").allow(null),
      latitude: Joi.number().allow(null),
      contact_person: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
    });
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
      identifiers: OrderPlatformModel.Identifier().required(),
      total_units: Joi.number().required(),
      added_to_fynd_cash: Joi.boolean().required(),
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
      shipment_id: Joi.string().allow("").allow(null),
      updated_at: Joi.string().allow("").allow(null),
      bag_state_mapper: OrderPlatformModel.BagStateMapper(),
      bag_id: Joi.number().allow(null),
      reasons: Joi.array().items(Joi.any()),
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
      l2_category: Joi.array().items(Joi.string().allow("")),
      brand: Joi.string().allow("").allow(null),
      image: Joi.array().items(Joi.string().allow("")),
      code: Joi.string().allow("").allow(null),
      l1_category: Joi.array().items(Joi.string().allow("")),
      size: Joi.string().allow("").allow(null),
      can_cancel: Joi.boolean().allow(null),
      can_return: Joi.boolean().allow(null),
      branch_url: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      color: Joi.string().allow("").allow(null),
      department_id: Joi.number().allow(null),
      images: Joi.array().items(Joi.string().allow("")),
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
      reasons: Joi.array().items(Joi.any()),
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
      brand_store_tags: Joi.string().allow("").allow(null),
      pincode: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      address: Joi.string().allow("").allow(null),
      location_type: Joi.string().allow("").allow(null),
      id: Joi.number().required(),
      code: Joi.string().allow("").required(),
      store_email: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
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

  /** @returns {ShipmentItemMeta} */
  static ShipmentItemMeta() {
    return Joi.object({
      same_store_available: Joi.boolean().allow(null),
      is_self_ship: Joi.boolean().allow(null),
      is_international: Joi.boolean().allow(null),
      formatted: OrderPlatformModel.Formatted(),
      debug_info: Joi.any().allow(null),
      sla: Joi.number().allow(null),
      shipment_chargeable_weight: Joi.number().allow(null),
      pdf_media: Joi.array().items(Joi.any()),
      tags: Joi.array().items(Joi.any()),
      existing_dp_list: Joi.array().items(Joi.string().allow("")),
      parent_dp_id: Joi.string().allow("").allow(null),
      shipment_weight: Joi.number().allow(null),
      dp_options: Joi.any().allow(null),
      assign_dp_from_sb: Joi.boolean().allow(null),
      shipping_zone: Joi.string().allow("").allow(null),
      store_invoice_updated_date: Joi.string().allow("").allow(null),
      activity_comment: Joi.string().allow("").allow(null),
      fulfilment_priority_text: Joi.string().allow("").allow(null),
      shipment_tags: Joi.array().items(OrderPlatformModel.ShipmentTags()),
      external: Joi.any().allow(null),
      ewaybill_info: Joi.any().allow(null),
      lock_data: OrderPlatformModel.LockData(),
      order_type: Joi.string().allow("").allow(null),
      shipment_volumetric_weight: Joi.number().allow(null),
      dp_sort_key: Joi.string().allow("").allow(null),
      packaging_name: Joi.string().allow("").allow(null),
      timestamp: OrderPlatformModel.ShipmentTimeStamp(),
      auto_trigger_dp_assignment_acf: Joi.boolean().required(),
      weight: Joi.number().allow(null),
      bag_weight: Joi.any().allow(null),
    });
  }

  /** @returns {ShipmentItem} */
  static ShipmentItem() {
    return Joi.object({
      order_date: Joi.string().allow("").allow(null),
      shipment_status: OrderPlatformModel.ShipmentStatus(),
      user: OrderPlatformModel.UserDataInfo(),
      estimated_sla_time: Joi.string().allow("").allow(null),
      delivery_address: OrderPlatformModel.PlatformDeliveryAddress(),
      channel: OrderPlatformModel.ShipmentListingChannel(),
      previous_shipment_id: Joi.string().allow("").allow(null),
      lock_status: Joi.boolean().allow(null),
      invoice_id: Joi.string().allow("").allow(null),
      payment_methods: Joi.any().allow(null),
      status_created_at: Joi.string().allow(""),
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

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {TrackingList} */
  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean().allow(null),
      text: Joi.string().allow("").required(),
      is_current: Joi.boolean().allow(null),
      time: Joi.string().allow("").allow(null),
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
      tax_details: Joi.any().allow(null),
      cod_charges: Joi.string().allow("").allow(null),
      source: Joi.string().allow("").allow(null),
      fynd_order_id: Joi.string().allow("").required(),
      affiliate_id: Joi.string().allow("").allow(null),
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
      phone: Joi.array().items(OrderPlatformModel.PhoneDetails()),
      emails: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {BagGST} */
  static BagGST() {
    return Joi.object({
      cgst_tax_percentage: Joi.number().allow(null),
      cgst_gst_fee: Joi.string().allow("").allow(null),
      gstin_code: Joi.string().allow("").allow(null),
      value_of_good: Joi.number().allow(null),
      gst_fee: Joi.number().allow(null),
      igst_tax_percentage: Joi.number().allow(null),
      gst_tax_percentage: Joi.number().allow(null),
      hsn_code_id: Joi.string().allow("").allow(null),
      igst_gst_fee: Joi.string().allow("").allow(null),
      sgst_gst_fee: Joi.string().allow("").allow(null),
      tax_collected_at_source: Joi.number().allow(null),
      brand_calculated_amount: Joi.number().allow(null),
      is_default_hsn_code: Joi.boolean().allow(null),
      gst_tag: Joi.string().allow("").allow(null),
      sgst_tax_percentage: Joi.number().allow(null),
      hsn_code: Joi.string().allow("").allow(null),
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

  /** @returns {ReturnConfig1} */
  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean().allow(null),
      time: Joi.number().allow(null),
      unit: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {OrderBagArticle} */
  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any().allow(null),
      return_config: OrderPlatformModel.ReturnConfig1(),
      uid: Joi.string().allow("").allow(null),
      size: Joi.string().allow("").allow(null),
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

  /** @returns {GiftCard} */
  static GiftCard() {
    return Joi.object({
      gift_message: Joi.string().allow("").allow(null),
      gift_price: Joi.number().allow(null),
      display_text: Joi.string().allow("").allow(null),
      is_gift_applied: Joi.boolean().allow(null),
    });
  }

  /** @returns {B2BPODetails} */
  static B2BPODetails() {
    return Joi.object({
      docker_number: Joi.string().allow("").allow(null),
      po_line_amount: Joi.number().allow(null),
      total_gst_percentage: Joi.number().allow(null),
      partial_can_ret: Joi.boolean().allow(null),
      po_tax_amount: Joi.number().allow(null),
      item_base_price: Joi.number().allow(null),
    });
  }

  /** @returns {BagMeta} */
  static BagMeta() {
    return Joi.object({
      gift_card: OrderPlatformModel.GiftCard(),
      custom_message: Joi.string().allow("").allow(null),
      docket_number: Joi.string().allow("").allow(null),
      group_id: Joi.string().allow("").allow(null),
      partial_can_ret: Joi.boolean().allow(null),
      extra_meta: Joi.any().allow(null),
      b2b_po_details: OrderPlatformModel.B2BPODetails(),
      custom_json: Joi.any().allow(null),
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
      item_brand: Joi.array().items(Joi.number()),
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
      bag_list: Joi.array().items(Joi.string().allow("")),
      id: Joi.number().allow(null),
      created_at: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").allow(null),
      current_shipment_status: Joi.string().allow("").allow(null),
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
      delivery_slot: Joi.any().allow(null),
      order: OrderPlatformModel.OrderDetailsData(),
      user: OrderPlatformModel.UserDataInfo(),
      enable_dp_tracking: Joi.boolean().allow(null),
      custom_message: Joi.string().allow("").allow(null),
      estimated_sla_time: Joi.string().allow("").allow(null),
      can_update_dimension: Joi.boolean().allow(null),
      shipment_images: Joi.array().items(Joi.string().allow("")),
      delivery_details: OrderPlatformModel.UserDetailsData(),
      billing_details: OrderPlatformModel.UserDetailsData(),
      forward_shipment_id: Joi.string().allow("").allow(null),
      fulfilment_priority: Joi.number().allow(null),
      shipment_details: OrderPlatformModel.ShipmentDetails(),
      custom_meta: Joi.array().items(Joi.any()),
      shipment_quantity: Joi.number().allow(null),
      company_details: OrderPlatformModel.CompanyDetails(),
      ordering_store: OrderPlatformModel.OrderingStoreDetails(),
      lock_status: Joi.boolean().allow(null),
      platform_logo: Joi.string().allow("").allow(null),
      user_agent: Joi.string().allow("").allow(null),
      dp_details: OrderPlatformModel.DPDetailsData(),
      invoice_id: Joi.string().allow("").allow(null),
      payment_methods: Joi.any().allow(null),
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
      previous_shipment_id: Joi.string().allow("").allow(null),
      shipment_update_time: Joi.number().allow(null),
      rto_address: OrderPlatformModel.PlatformDeliveryAddress(),
      credit_note_id: Joi.string().allow("").allow(null),
      is_self_ship: Joi.boolean().allow(null),
      mode_of_payment: Joi.string().allow("").allow(null),
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

  /** @returns {PlatformUserDetails} */
  static PlatformUserDetails() {
    return Joi.object({
      platform_user_employee_code: Joi.string().allow("").allow(null),
      platform_user_first_name: Joi.string().allow("").allow(null),
      platform_user_id: Joi.string().allow("").allow(null),
      platform_user_last_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {TransactionData} */
  static TransactionData() {
    return Joi.object({
      currency: Joi.string().allow("").allow(null),
      amount_paid: Joi.number().allow(null),
      payment_id: Joi.string().allow("").allow(null),
      unique_reference_number: Joi.string().allow("").allow(null),
      terminal_id: Joi.string().allow("").allow(null),
      entity: Joi.string().allow("").allow(null),
      transaction_id: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BillingStaffDetails} */
  static BillingStaffDetails() {
    return Joi.object({
      first_name: Joi.string().allow("").allow(null),
      last_name: Joi.string().allow("").allow(null),
      staff_id: Joi.number().allow(null),
      employee_code: Joi.string().allow("").allow(null),
      user: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {OrderMeta} */
  static OrderMeta() {
    return Joi.object({
      platform_user_details: OrderPlatformModel.PlatformUserDetails(),
      company_logo: Joi.string().allow("").allow(null),
      currency_symbol: Joi.string().allow("").allow(null),
      comment: Joi.string().allow("").allow(null),
      extra_meta: Joi.any().allow(null),
      files: Joi.array().items(Joi.any()),
      transaction_data: OrderPlatformModel.TransactionData(),
      billing_staff_details: OrderPlatformModel.BillingStaffDetails(),
      ordering_store: Joi.number().allow(null),
      payment_type: Joi.string().allow("").allow(null),
      mongo_cart_id: Joi.number().allow(null),
      order_child_entities: Joi.array().items(Joi.string().allow("")),
      order_type: Joi.string().allow("").allow(null),
      order_platform: Joi.string().allow("").allow(null),
      employee_id: Joi.string().allow("").allow(null),
      order_tags: Joi.array().items(Joi.any().allow(null)),
      customer_note: Joi.string().allow("").allow(null),
      staff: Joi.any().allow(null),
      cart_id: Joi.number().allow(null),
      cart_object_id: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {OrderData} */
  static OrderData() {
    return Joi.object({
      order_date: Joi.string().allow("").required(),
      tax_details: OrderPlatformModel.TaxDetails(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      fynd_order_id: Joi.string().allow("").required(),
      prices: OrderPlatformModel.Prices(),
      payment_methods: Joi.any().allow(null),
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
      payment_mode: Joi.string().allow("").allow(null),
      shipments: Joi.array().items(OrderPlatformModel.PlatformShipment()),
      order_id: Joi.string().allow("").allow(null),
      channel: OrderPlatformModel.PlatformChannel(),
      user_info: OrderPlatformModel.UserDataInfo(),
      order_value: Joi.number().allow(null),
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

  /** @returns {FilterInfoOption} */
  static FilterInfoOption() {
    return Joi.object({
      value: Joi.string().allow("").allow(null),
      text: Joi.string().allow("").allow(null),
      show_ui: Joi.boolean().allow(null),
      placeholder_text: Joi.string().allow("").allow(null),
      min_search_size: Joi.number().allow(null),
      name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {FiltersInfo} */
  static FiltersInfo() {
    return Joi.object({
      value: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      text: Joi.string().allow("").required(),
      options: Joi.array().items(OrderPlatformModel.FilterInfoOption()),
      placeholder_text: Joi.string().allow("").allow(null),
      required: Joi.boolean().allow(null),
    });
  }

  /** @returns {AdvanceFilterInfo} */
  static AdvanceFilterInfo() {
    return Joi.object({
      returned: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      action_centre: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      unfulfilled: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      filters: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      processed: Joi.array().items(OrderPlatformModel.FiltersInfo()),
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

  /** @returns {BagGSTDetails} */
  static BagGSTDetails() {
    return Joi.object({
      cgst_tax_percentage: Joi.number().required(),
      cgst_gst_fee: Joi.string().allow("").required(),
      gstin_code: Joi.string().allow("").allow(null),
      value_of_good: Joi.number().required(),
      gst_fee: Joi.number().required(),
      igst_tax_percentage: Joi.number().required(),
      gst_tax_percentage: Joi.number().required(),
      hsn_code_id: Joi.string().allow("").required(),
      igst_gst_fee: Joi.string().allow("").required(),
      sgst_gst_fee: Joi.string().allow("").required(),
      tax_collected_at_source: Joi.number().required(),
      brand_calculated_amount: Joi.number().required(),
      is_default_hsn_code: Joi.boolean().allow(null),
      gst_tag: Joi.string().allow("").required(),
      sgst_tax_percentage: Joi.number().required(),
      hsn_code: Joi.string().allow("").required(),
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
      timing: Joi.array().items(Joi.any()),
      notification_emails: Joi.array().items(Joi.string().allow("")),
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
      phone: Joi.number().required(),
      is_active: Joi.boolean().allow(null),
      company_id: Joi.number().required(),
      alohomora_user_id: Joi.number().allow(null),
      created_at: Joi.string().allow("").required(),
      contact_person: Joi.string().allow("").required(),
      brand_id: Joi.any(),
      store_email: Joi.string().allow("").required(),
      is_enabled_for_recon: Joi.boolean().allow(null),
      pincode: Joi.string().allow("").required(),
      mall_area: Joi.string().allow("").allow(null),
      vat_no: Joi.string().allow("").allow(null),
      address1: Joi.string().allow("").required(),
      store_active_from: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      longitude: Joi.number().required(),
      brand_store_tags: Joi.array().items(Joi.string().allow("")),
      order_integration_id: Joi.string().allow("").allow(null),
      parent_store_id: Joi.number().allow(null),
      location_type: Joi.string().allow("").required(),
      code: Joi.string().allow("").allow(null),
      fulfillment_channel: Joi.string().allow("").required(),
      updated_at: Joi.string().allow("").allow(null),
      store_address_json: OrderPlatformModel.StoreAddress(),
      meta: OrderPlatformModel.StoreMeta().required(),
      s_id: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      packaging_material_count: Joi.number().allow(null),
      is_archived: Joi.boolean().allow(null),
      login_username: Joi.string().allow("").required(),
      mall_name: Joi.string().allow("").allow(null),
      latitude: Joi.number().required(),
      address2: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Brand} */
  static Brand() {
    return Joi.object({
      credit_note_expiry_days: Joi.number().allow(null),
      logo: Joi.string().allow("").allow(null),
      invoice_prefix: Joi.string().allow("").allow(null),
      credit_note_allowed: Joi.boolean().allow(null),
      start_date: Joi.string().allow("").allow(null),
      company: Joi.string().allow("").required(),
      is_virtual_invoice: Joi.boolean().allow(null),
      script_last_ran: Joi.string().allow("").allow(null),
      pickup_location: Joi.string().allow("").allow(null),
      created_on: Joi.number().allow(null),
      brand_name: Joi.string().allow("").required(),
      brand_id: Joi.number().required(),
      modified_on: Joi.number().allow(null),
    });
  }

  /** @returns {Attributes} */
  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow("").allow(null),
      essential: Joi.string().allow("").allow(null),
      marketer_name: Joi.string().allow("").allow(null),
      primary_color: Joi.string().allow("").allow(null),
      marketer_address: Joi.string().allow("").allow(null),
      primary_color_hex: Joi.string().allow("").allow(null),
      brand_name: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      gender: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Item} */
  static Item() {
    return Joi.object({
      attributes: OrderPlatformModel.Attributes().required(),
      brand_id: Joi.number().required(),
      slug_key: Joi.string().allow("").required(),
      webstore_product_url: Joi.string().allow("").allow(null),
      l3_category: Joi.number().allow(null),
      l3_category_name: Joi.string().allow("").allow(null),
      last_updated_at: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").required(),
      l2_category: Joi.array().items(Joi.string().allow("")),
      brand: Joi.string().allow("").required(),
      image: Joi.array().items(Joi.string().allow("")).required(),
      code: Joi.string().allow("").allow(null),
      l1_category_id: Joi.number().allow(null),
      item_id: Joi.number().required(),
      l1_category: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {BagReturnableCancelableStatus1} */
  static BagReturnableCancelableStatus1() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      can_be_cancelled: Joi.boolean().required(),
      enable_tracking: Joi.boolean().required(),
      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  /** @returns {BagDetailsPlatformResponse} */
  static BagDetailsPlatformResponse() {
    return Joi.object({
      bag_update_time: Joi.number().allow(null),
      id: Joi.number().allow(null),
      gst_details: OrderPlatformModel.GSTDetailsData(),
      parent_promo_bags: Joi.any().allow(null),
      tags: Joi.array().items(Joi.string().allow("")),
      financial_breakup: Joi.array().items(
        OrderPlatformModel.FinancialBreakup()
      ),
      bag_status: Joi.array().items(OrderPlatformModel.BagStatusHistory()),
      seller_identifier: Joi.string().allow("").allow(null),
      original_bag_list: Joi.array().items(Joi.number()),
      article_details: OrderPlatformModel.ArticleDetails(),
      current_operational_status: OrderPlatformModel.BagStatusHistory(),
      ordering_store: OrderPlatformModel.Store(),
      article: OrderPlatformModel.Article(),
      brand: OrderPlatformModel.Brand(),
      affiliate_bag_details: OrderPlatformModel.AffiliateBagDetails(),
      item: OrderPlatformModel.Item(),
      qc_required: Joi.any(),
      identifier: Joi.string().allow("").allow(null),
      quantity: Joi.number().allow(null),
      restore_promos: Joi.any().allow(null),
      affiliate_details: OrderPlatformModel.AffiliateDetails(),
      reasons: Joi.array().items(Joi.any()),
      bag_status_history: OrderPlatformModel.BagStatusHistory(),
      display_name: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
      line_number: Joi.number().allow(null),
      restore_coupon: Joi.boolean().allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      no_of_bags_order: Joi.number().allow(null),
      applied_promos: Joi.array().items(Joi.any()),
      journey_type: Joi.string().allow("").allow(null),
      prices: OrderPlatformModel.Prices(),
      dates: OrderPlatformModel.Dates(),
      shipment_id: Joi.string().allow("").allow(null),
      current_status: OrderPlatformModel.BagStatusHistory(),
      order_integration_id: Joi.string().allow("").allow(null),
      operational_status: Joi.string().allow("").allow(null),
      entity_type: Joi.string().allow("").allow(null),
      status: OrderPlatformModel.BagReturnableCancelableStatus1(),
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

  /** @returns {GetBagsPlatformResponse} */
  static GetBagsPlatformResponse() {
    return Joi.object({
      items: Joi.array()
        .items(OrderPlatformModel.BagDetailsPlatformResponse())
        .required(),
      page: OrderPlatformModel.BagsPage().required(),
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
    });
  }
}
module.exports = OrderPlatformModel;
