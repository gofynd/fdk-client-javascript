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
 * @property {string} [error]
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
 */

/**
 * @typedef PostRefundStateConfigurationResponse
 * @property {string} [message]
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
 */

/**
 * @typedef RefundStateConfigurationManualSchema
 * @property {RefundStateManualWithoutMessage} [prepaid]
 * @property {RefundStateManualWithoutMessage} [non_prepaid]
 */

/**
 * @typedef RefundStateConfigurationManualSchemaResponse
 * @property {boolean} [success]
 * @property {RefundStateManualWithMessageData} [data]
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
 * @property {boolean} [resume_tasks_after_unlock]
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
 * @property {number} [tcs_charge]
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
 * @property {number} [tcs_charge]
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
 * @property {string} affiliate_id
 * @property {OrderInfo} order_info
 * @property {OrderConfig} order_config
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
 * @property {string} [user_id]
 * @property {TaxDetails} [tax_details]
 * @property {number} [mongo_cart_id]
 * @property {number} [delivery_charges]
 * @property {number} [tcs_charge]
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
 * @property {Amount} amount
 */

/**
 * @typedef Amount
 * @property {number} [value]
 * @property {string} [currency]
 */

/**
 * @typedef Charge
 * @property {string} name
 * @property {Amount} amount
 * @property {Tax} [tax]
 * @property {string} [code]
 * @property {string} type
 */

/**
 * @typedef LineItem
 * @property {Charge[]} charges
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
 * @property {string} [external_location_id]
 * @property {ProcessingDates} [processing_dates]
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {number} location_id
 * @property {string} [order_type]
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
 * @typedef Config
 * @property {string[]} [lock_states]
 * @property {ConfigPayment} payment
 * @property {ConfigDpConfiguration} [dp_configuration]
 * @property {boolean} [location_reassignment]
 * @property {ConfigApplication} [application]
 * @property {string} [ordering_channel_logo]
 * @property {Object} [integration_type]
 */

/**
 * @typedef CreateOrderAPI
 * @property {Shipment[]} shipments
 * @property {ShippingInfo} shipping_info
 * @property {BillingInfo} billing_info
 * @property {CurrencyInfo} [currency_info]
 * @property {string} [external_order_id]
 * @property {Charge[]} [charges]
 * @property {string} [external_creation_date]
 * @property {Object} [meta]
 * @property {TaxInfo} [tax_info]
 * @property {Config} [config]
 * @property {PaymentInfo} payment_info
 * @property {UserInfo} [user_info]
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [lock_after_transition]
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
 */

/**
 * @typedef Filters
 * @property {DateRange} [date_range]
 * @property {string} [logo]
 * @property {string} [from_date]
 * @property {number} [stores]
 * @property {string} [to_date]
 * @property {string} [dp_name]
 * @property {number} [dp_ids]
 * @property {string} [lane]
 * @property {string} [selected_shipments]
 * @property {string} [store_name]
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
 * @property {FailedOrdersItem} items
 * @property {PageDetails} page
 */

/**
 * @typedef FailedOrderLogDetails
 * @property {string} error_trace
 * @property {string} exception
 */

/**
 * @typedef StateTransitionFlag
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [type]
 * @property {Object} [options]
 * @property {string} [default_value]
 */

/**
 * @typedef StateManagerFilter
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [type]
 * @property {Object} [options]
 * @property {string} [default_value]
 */

/**
 * @typedef StateManagerTask
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [doc_string]
 * @property {Object} [kwargs]
 */

/**
 * @typedef PaginationInfo
 * @property {number} [current]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [total]
 * @property {number} [item_total]
 * @property {string} [type]
 * @property {number} [size]
 */

/**
 * @typedef StateManagerState
 * @property {number} [id] - Unique identifier for the state
 * @property {string} [state] - The name of the state
 * @property {string} [platform_display_name] - The platform display name
 * @property {boolean} [app_facing] - Whether state is for app facing or not
 * @property {string} [app_display_name] - The application display name
 * @property {boolean} [is_active] - Whether state is active or not
 * @property {string} [state_type] - Type of the state
 * @property {string} [journey_type] - Type of the journey
 */

/**
 * @typedef PaginatedStates
 * @property {StateManagerState[]} [items]
 * @property {PaginationInfo} [page]
 */

/**
 * @typedef RuleLaneConfigErrorResponse
 * @property {string} [type]
 * @property {string} [value]
 * @property {Object} [message]
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
 * @property {string[]} qc_type
 * @property {QuestionSet[]} question_set
 * @property {Object} meta
 * @property {boolean} is_active
 * @property {boolean} is_deleted
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
 * @typedef CreateRuleResponse
 * @property {number} [id]
 * @property {boolean} [success]
 * @property {RuleError} [error]
 */

/**
 * @typedef RuleResponse
 * @property {string} [id]
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
 * @property {Object} value
 * @property {string} variable
 * @property {string} operation
 */

/**
 * @typedef RuleMeta
 * @property {Department} [department]
 * @property {L3} [l3]
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
 * @typedef RuleUpdateResponse
 * @property {string} [id]
 * @property {boolean} [success]
 * @property {RuleError} [error]
 */

/**
 * @typedef DeleteRuleResponse
 * @property {string} [id]
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
 * @typedef UpdateRulePositionResponse
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
 * @property {Condition} conditions
 * @property {Meta} meta
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
 * @typedef RuleListResponse
 * @property {PageInfo} [page]
 * @property {RuleListItem[]} [items]
 * @property {boolean} [success]
 * @property {RuleErrorResponse} [error]
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
 * @property {RuleError} [error]
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
 * @property {number} [tcs_charge]
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
 * @property {number} [tcs_charge]
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
 * @property {Object} [transaction_data]
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
 * @typedef FilterOptions
 * @property {string} label
 * @property {string} value
 * @property {string} [name]
 */

/**
 * @typedef FiltersList
 * @property {string} label
 * @property {string} value
 * @property {string} filter_type
 * @property {string} type
 * @property {string} [placeholder_text]
 * @property {boolean} [required]
 * @property {FilterOptions[]} options
 */

/**
 * @typedef GlobalFiltersResponse
 * @property {FiltersList[]} filters
 * @property {number} company_id
 * @property {string} [request_source]
 * @property {string} show_in
 */

/**
 * @typedef ViewDetails
 * @property {string} [id]
 * @property {string} [slug]
 * @property {string} [text]
 * @property {FiltersList[]} [filters]
 */

/**
 * @typedef ParentViews
 * @property {ViewDetails[]} [views]
 * @property {string} [parent_slug]
 * @property {string} [parent_text]
 */

/**
 * @typedef UserViewsResponse
 * @property {ParentViews[]} [parent_views]
 */

/**
 * @typedef CreateUpdateDeleteResponse
 * @property {string} [message]
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
      error: Joi.string().allow(""),
    });
  }

  /** @returns {QuestionErrorResponse} */
  static QuestionErrorResponse() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      message: Joi.any(),
    });
  }

  /** @returns {RefundStateConfigurationByPaymentType} */
  static RefundStateConfigurationByPaymentType() {
    return Joi.object({
      states: Joi.array().items(Joi.string().allow("")),
      allow_refund_initiate: Joi.boolean(),
    });
  }

  /** @returns {PostRefundStateConfiguration} */
  static PostRefundStateConfiguration() {
    return Joi.object({
      prepaid: OrderPlatformModel.RefundStateConfigurationByPaymentType(),
      non_prepaid: OrderPlatformModel.RefundStateConfigurationByPaymentType(),
    });
  }

  /** @returns {PostRefundStateConfigurationResponse} */
  static PostRefundStateConfigurationResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {GetRefundStateConfigurationResponse} */
  static GetRefundStateConfigurationResponse() {
    return Joi.object({
      success: Joi.boolean(),
      config: OrderPlatformModel.PostRefundStateConfiguration(),
    });
  }

  /** @returns {RefundStates} */
  static RefundStates() {
    return Joi.object({
      state: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {GetRefundStates} */
  static GetRefundStates() {
    return Joi.object({
      success: Joi.boolean(),
      items: Joi.array().items(OrderPlatformModel.RefundStates()),
      status: Joi.number(),
    });
  }

  /** @returns {RefundStateManualWithoutMessage} */
  static RefundStateManualWithoutMessage() {
    return Joi.object({
      is_manual: Joi.boolean(),
    });
  }

  /** @returns {RefundStateManualWithMessage} */
  static RefundStateManualWithMessage() {
    return Joi.object({
      is_manual: Joi.boolean(),
      message: Joi.string().allow(""),
    });
  }

  /** @returns {RefundStateManualWithMessageData} */
  static RefundStateManualWithMessageData() {
    return Joi.object({
      prepaid: OrderPlatformModel.RefundStateManualWithMessage(),
      non_prepaid: OrderPlatformModel.RefundStateManualWithMessage(),
    });
  }

  /** @returns {RefundStateConfigurationManualSchema} */
  static RefundStateConfigurationManualSchema() {
    return Joi.object({
      prepaid: OrderPlatformModel.RefundStateManualWithoutMessage(),
      non_prepaid: OrderPlatformModel.RefundStateManualWithoutMessage(),
    });
  }

  /** @returns {RefundStateConfigurationManualSchemaResponse} */
  static RefundStateConfigurationManualSchemaResponse() {
    return Joi.object({
      success: Joi.boolean(),
      data: OrderPlatformModel.RefundStateManualWithMessageData(),
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
      resume_tasks_after_unlock: Joi.boolean().allow(null),
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
      meta: Joi.any(),
      affiliate_shipment_id: Joi.string().allow("").required(),
      dp_options: Joi.any().allow(null),
      lock_status: Joi.boolean().allow(null),
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
      tcs_charge: Joi.number(),
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
      tcs_charge: Joi.number(),
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
      affiliate_id: Joi.string().allow("").required(),
      order_info: OrderPlatformModel.OrderInfo().required(),
      order_config: OrderPlatformModel.OrderConfig().required(),
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
      tcs_charge: Joi.number().allow(null),
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
      amount: OrderPlatformModel.Amount().required(),
    });
  }

  /** @returns {Amount} */
  static Amount() {
    return Joi.object({
      value: Joi.number(),
      currency: Joi.string().allow(""),
    });
  }

  /** @returns {Charge} */
  static Charge() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      amount: OrderPlatformModel.Amount().required(),
      tax: OrderPlatformModel.Tax(),
      code: Joi.string().allow(""),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {LineItem} */
  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderPlatformModel.Charge()).required(),
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
      external_location_id: Joi.string().allow(""),
      processing_dates: OrderPlatformModel.ProcessingDates(),
      meta: Joi.any().allow(null),
      priority: Joi.number(),
      location_id: Joi.number().required(),
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
      tags: Joi.array().items(Joi.string().allow("")),
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
      geo_location: Joi.any(),
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
      landmark: Joi.string().allow(""),
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
      is_authenticated: Joi.boolean(),
      meta: Joi.any(),
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
      collected: Joi.boolean().required(),
      display_name: Joi.string().allow("").required(),
      merchant_transaction_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentInfo} */
  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),
      payment_methods: Joi.array().items(OrderPlatformModel.PaymentMethod()),
    });
  }

  /** @returns {CurrencyInfoCurrency} */
  static CurrencyInfoCurrency() {
    return Joi.object({
      currency_code: Joi.string().allow(""),
      currency_name: Joi.string().allow(""),
      currency_sub_unit: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
    });
  }

  /** @returns {CurrencyInfoConversionRate} */
  static CurrencyInfoConversionRate() {
    return Joi.object({
      rates: Joi.object().pattern(/\S/, Joi.any()),
      base: Joi.string().allow(""),
    });
  }

  /** @returns {CurrencyInfo} */
  static CurrencyInfo() {
    return Joi.object({
      currency: OrderPlatformModel.CurrencyInfoCurrency(),
      order_currency: Joi.string().allow(""),
      conversion_rate: OrderPlatformModel.ConversionRate(),
      ordering_currency: OrderPlatformModel.OrderingCurrency(),
    });
  }

  /** @returns {ConfigPayment} */
  static ConfigPayment() {
    return Joi.object({
      source: Joi.string().allow(""),
      mode_of_payment: Joi.string().allow(""),
    });
  }

  /** @returns {ConfigDpConfiguration} */
  static ConfigDpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
      refund_by: Joi.string().allow(""),
      mode: Joi.string().allow(""),
    });
  }

  /** @returns {ConfigApplication} */
  static ConfigApplication() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
    });
  }

  /** @returns {Config} */
  static Config() {
    return Joi.object({
      lock_states: Joi.array().items(Joi.string().allow("")),
      payment: OrderPlatformModel.ConfigPayment().required(),
      dp_configuration: OrderPlatformModel.ConfigDpConfiguration(),
      location_reassignment: Joi.boolean(),
      application: OrderPlatformModel.ConfigApplication(),
      ordering_channel_logo: Joi.string().allow(""),
      integration_type: Joi.any(),
    });
  }

  /** @returns {CreateOrderAPI} */
  static CreateOrderAPI() {
    return Joi.object({
      shipments: Joi.array().items(OrderPlatformModel.Shipment()).required(),
      shipping_info: OrderPlatformModel.ShippingInfo().required(),
      billing_info: OrderPlatformModel.BillingInfo().required(),
      currency_info: OrderPlatformModel.CurrencyInfo(),
      external_order_id: Joi.string().allow(""),
      charges: Joi.array().items(OrderPlatformModel.Charge()),
      external_creation_date: Joi.string().allow(""),
      meta: Joi.any(),
      tax_info: OrderPlatformModel.TaxInfo(),
      config: OrderPlatformModel.Config(),
      payment_info: OrderPlatformModel.PaymentInfo().required(),
      user_info: OrderPlatformModel.UserInfo(),
      unlock_before_transition: Joi.boolean(),
      lock_after_transition: Joi.boolean(),
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

  /** @returns {BulkReportsDownloadRequest} */
  static BulkReportsDownloadRequest() {
    return Joi.object({
      store_ids: Joi.array().items(Joi.string().allow("")),
      lane_type: Joi.string().allow(""),
      custom_headers: Joi.string().allow(""),
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

  /** @returns {BulkFailedResponse} */
  static BulkFailedResponse() {
    return Joi.object({
      status: Joi.boolean(),
      error: Joi.string().allow(""),
    });
  }

  /** @returns {BulkStateTransistionRequest} */
  static BulkStateTransistionRequest() {
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
      lane: Joi.string().allow(""),
      page: OrderPlatformModel.ManifestPageInfo().required(),
      success: Joi.boolean().required(),
      status: Joi.number().required(),
      items: Joi.array().items(OrderPlatformModel.ManifestItemDetails()),
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
      dp_ids: Joi.number(),
      lane: Joi.string().allow(""),
      selected_shipments: Joi.string().allow(""),
      store_name: Joi.string().allow(""),
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

  /** @returns {FiltersRequest} */
  static FiltersRequest() {
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
      filters: OrderPlatformModel.FiltersRequest().required(),
      action: Joi.string().allow("").required(),
      unique_id: Joi.string().allow("").required(),
      manifest_id: Joi.string().allow(""),
    });
  }

  /** @returns {ProcessManifestResponse} */
  static ProcessManifestResponse() {
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

  /** @returns {ProcessManifestItemResponse} */
  static ProcessManifestItemResponse() {
    return Joi.object({
      items: OrderPlatformModel.ProcessManifestResponse(),
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
      options: Joi.array().items(OrderPlatformModel.FilterInfoOption()),
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

  /** @returns {StateTransitionFlag} */
  static StateTransitionFlag() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      options: Joi.object().pattern(/\S/, Joi.any()),
      default_value: Joi.string().allow(""),
    });
  }

  /** @returns {StateManagerFilter} */
  static StateManagerFilter() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      type: Joi.string().allow(""),
      options: Joi.object().pattern(/\S/, Joi.any()),
      default_value: Joi.string().allow(""),
    });
  }

  /** @returns {StateManagerTask} */
  static StateManagerTask() {
    return Joi.object({
      id: Joi.number(),
      name: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
      description: Joi.string().allow(""),
      doc_string: Joi.string().allow(""),
      kwargs: Joi.any(),
    });
  }

  /** @returns {PaginationInfo} */
  static PaginationInfo() {
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

  /** @returns {StateManagerState} */
  static StateManagerState() {
    return Joi.object({
      id: Joi.number(),
      state: Joi.string().allow(""),
      platform_display_name: Joi.string().allow(""),
      app_facing: Joi.boolean(),
      app_display_name: Joi.string().allow(""),
      is_active: Joi.boolean(),
      state_type: Joi.string().allow(""),
      journey_type: Joi.string().allow(""),
    });
  }

  /** @returns {PaginatedStates} */
  static PaginatedStates() {
    return Joi.object({
      items: Joi.array().items(OrderPlatformModel.StateManagerState()),
      page: OrderPlatformModel.PaginationInfo(),
    });
  }

  /** @returns {RuleLaneConfigErrorResponse} */
  static RuleLaneConfigErrorResponse() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
      message: Joi.any(),
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
      remark_required: Joi.boolean(),
      qc_type: Joi.array().items(Joi.string().allow("")).required(),
      question_set: Joi.array()
        .items(OrderPlatformModel.QuestionSet())
        .required(),
      meta: Joi.any().required(),
      is_active: Joi.boolean().required(),
      is_deleted: Joi.boolean().required(),
    });
  }

  /** @returns {RuleRequest} */
  static RuleRequest() {
    return Joi.object({
      flow_type: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      description: Joi.string().allow(""),
      entity_type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
      channel: Joi.string().allow("").required(),
      rule_type: Joi.string().allow("").required(),
      is_deleted: Joi.boolean().required(),
      restrict_forward_serviceability: Joi.boolean(),
      conditions: Joi.array().items(OrderPlatformModel.Condition()).required(),
      meta: OrderPlatformModel.RuleMeta().required(),
      qc_enabled: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      actions: OrderPlatformModel.RuleAction().required(),
    });
  }

  /** @returns {CreateRuleResponse} */
  static CreateRuleResponse() {
    return Joi.object({
      id: Joi.number(),
      success: Joi.boolean(),
      error: OrderPlatformModel.RuleError(),
    });
  }

  /** @returns {RuleResponse} */
  static RuleResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      items: OrderPlatformModel.RuleItem(),
      success: Joi.boolean(),
      error: OrderPlatformModel.RuleError(),
    });
  }

  /** @returns {RuleUpdateRequest} */
  static RuleUpdateRequest() {
    return Joi.object({
      flow_type: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      description: Joi.string().allow(""),
      entity_type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
      channel: Joi.string().allow("").required(),
      rule_type: Joi.string().allow("").required(),
      is_deleted: Joi.boolean().required(),
      position: Joi.number().required(),
      restrict_forward_serviceability: Joi.boolean().required(),
      conditions: Joi.array().items(OrderPlatformModel.Condition()).required(),
      meta: OrderPlatformModel.RuleMeta().required(),
      qc_enabled: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      actions: OrderPlatformModel.RuleAction().required(),
    });
  }

  /** @returns {Condition} */
  static Condition() {
    return Joi.object({
      value: Joi.any().required(),
      variable: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
    });
  }

  /** @returns {RuleMeta} */
  static RuleMeta() {
    return Joi.object({
      department: OrderPlatformModel.Department(),
      l3: OrderPlatformModel.L3(),
    });
  }

  /** @returns {RuleAction} */
  static RuleAction() {
    return Joi.object({
      reasons: Joi.array().items(OrderPlatformModel.Reason()),
    });
  }

  /** @returns {Department} */
  static Department() {
    return Joi.object({
      id: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {L3} */
  static L3() {
    return Joi.object({
      id: Joi.string().allow(""),
      display_name: Joi.string().allow(""),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {RuleUpdateResponse} */
  static RuleUpdateResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      success: Joi.boolean(),
      error: OrderPlatformModel.RuleError(),
    });
  }

  /** @returns {DeleteRuleResponse} */
  static DeleteRuleResponse() {
    return Joi.object({
      id: Joi.string().allow(""),
      success: Joi.boolean(),
      error: OrderPlatformModel.RuleError(),
    });
  }

  /** @returns {UpdateRulePositionRequest} */
  static UpdateRulePositionRequest() {
    return Joi.object({
      rule_id: Joi.number().required(),
      page_no: Joi.number().required(),
      page_size: Joi.number().required(),
      position: Joi.number().required(),
      flow_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdateRulePositionResponse} */
  static UpdateRulePositionResponse() {
    return Joi.object({
      page: OrderPlatformModel.PageInfo(),
      items: Joi.array().items(OrderPlatformModel.RuleItem()),
      success: Joi.boolean(),
      error: OrderPlatformModel.RuleError(),
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
      conditions: OrderPlatformModel.Condition().required(),
      meta: OrderPlatformModel.Meta().required(),
      rule_type: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      flow_type: Joi.string().allow("").required(),
      position: Joi.number().required(),
    });
  }

  /** @returns {RuleParametersResponse} */
  static RuleParametersResponse() {
    return Joi.object({
      response: Joi.array().items(OrderPlatformModel.ParameterResponse()),
    });
  }

  /** @returns {ParameterResponse} */
  static ParameterResponse() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {RuleListRequest} */
  static RuleListRequest() {
    return Joi.object({
      page_size: Joi.number(),
      page_no: Joi.number(),
      flow_type: Joi.string().allow(""),
      lane_type: Joi.string().allow(""),
    });
  }

  /** @returns {RuleListResponse} */
  static RuleListResponse() {
    return Joi.object({
      page: OrderPlatformModel.PageInfo(),
      items: Joi.array().items(OrderPlatformModel.RuleListItem()),
      success: Joi.boolean().allow(null),
      error: OrderPlatformModel.RuleErrorResponse(),
    });
  }

  /** @returns {RuleListItem} */
  static RuleListItem() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      entity_type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
      channel: Joi.string().allow("").required(),
      actions: OrderPlatformModel.RuleAction().required(),
      qc_enabled: Joi.boolean().required(),
      is_deleted: Joi.boolean().required(),
      conditions: OrderPlatformModel.Condition().required(),
      meta: OrderPlatformModel.Meta().required(),
      rule_type: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      name: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      flow_type: Joi.string().allow("").required(),
      position: Joi.number().required(),
      success: Joi.boolean().required(),
      error: OrderPlatformModel.RuleError().required(),
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

  /** @returns {RuleErrorResponse} */
  static RuleErrorResponse() {
    return Joi.object({
      success: Joi.boolean().allow(null),
      error: OrderPlatformModel.RuleError(),
    });
  }

  /** @returns {PageInfo} */
  static PageInfo() {
    return Joi.object({
      type: Joi.string().allow(""),
      current: Joi.number(),
      size: Joi.number(),
      item_total: Joi.number(),
      has_previous: Joi.boolean(),
      has_next: Joi.boolean(),
      page_size: Joi.number(),
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
      bag_list: Joi.array().items(Joi.string().allow("")),
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
      tcs_charge: Joi.number().allow(null),
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
      tcs_charge: Joi.number().allow(null),
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
      tags: Joi.array().items(Joi.string().allow("")),
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
      brand_store_tags: Joi.array().items(Joi.string().allow("")),
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
      tags: Joi.array().items(Joi.string().allow("")),
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
      payment_info: Joi.array().items(Joi.any()),
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
      tags: Joi.array().items(Joi.string().allow("")),
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
      bag_list: Joi.array().items(Joi.string().allow("")),
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
      delivery_slot: Joi.any().allow(null),
      order: OrderPlatformModel.OrderDetailsData(),
      user: OrderPlatformModel.UserDataInfo(),
      enable_dp_tracking: Joi.boolean().allow(null),
      custom_message: Joi.string().allow("").allow(null),
      estimated_sla_time: Joi.string().allow("").allow(null),
      estimated_sla_ts: Joi.string().allow("").allow(null),
      can_update_dimension: Joi.boolean().allow(null),
      shipment_images: Joi.array().items(Joi.string().allow("")),
      delivery_details: OrderPlatformModel.UserDetailsData(),
      billing_details: OrderPlatformModel.UserDetailsData(),
      forward_shipment_id: Joi.string().allow("").allow(null),
      fulfilment_priority: Joi.number().allow(null),
      shipment_details: OrderPlatformModel.ShipmentLockDetails(),
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
      payment_info: Joi.array().items(Joi.any()),
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
      transaction_data: Joi.any(),
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
      payment_info: Joi.array().items(OrderPlatformModel.PaymentInfoData()),
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
      returned: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      action_centre: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      unfulfilled: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      filters: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      processed: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      applied_filters: Joi.any().allow(null),
      page: Joi.any().allow(null),
    });
  }

  /** @returns {FilterOptions} */
  static FilterOptions() {
    return Joi.object({
      label: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {FiltersList} */
  static FiltersList() {
    return Joi.object({
      label: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
      filter_type: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      placeholder_text: Joi.string().allow(""),
      required: Joi.boolean(),
      options: Joi.array().items(OrderPlatformModel.FilterOptions()).required(),
    });
  }

  /** @returns {GlobalFiltersResponse} */
  static GlobalFiltersResponse() {
    return Joi.object({
      filters: Joi.array().items(OrderPlatformModel.FiltersList()).required(),
      company_id: Joi.number().allow(null).required(),
      request_source: Joi.string().allow(""),
      show_in: Joi.string().allow("").required(),
    });
  }

  /** @returns {ViewDetails} */
  static ViewDetails() {
    return Joi.object({
      id: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      text: Joi.string().allow(""),
      filters: Joi.array().items(OrderPlatformModel.FiltersList()),
    });
  }

  /** @returns {ParentViews} */
  static ParentViews() {
    return Joi.object({
      views: Joi.array().items(OrderPlatformModel.ViewDetails()),
      parent_slug: Joi.string().allow(""),
      parent_text: Joi.string().allow(""),
    });
  }

  /** @returns {UserViewsResponse} */
  static UserViewsResponse() {
    return Joi.object({
      parent_views: Joi.array().items(OrderPlatformModel.ParentViews()),
    });
  }

  /** @returns {CreateUpdateDeleteResponse} */
  static CreateUpdateDeleteResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
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
      brand_store_tags: Joi.array().items(Joi.string().allow("")),
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
    });
  }

  /** @returns {DeliverySlotDetails} */
  static DeliverySlotDetails() {
    return Joi.object({
      slot: Joi.string().allow("").allow(null),
      upper_bound: Joi.string().allow("").allow(null),
      lower_bound: Joi.string().allow("").allow(null),
      date: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {InvoiceDetails} */
  static InvoiceDetails() {
    return Joi.object({
      updated_date: Joi.string().allow("").allow(null),
      store_invoice_id: Joi.string().allow("").allow(null),
      invoice_url: Joi.string().allow("").allow(null),
      label_url: Joi.string().allow("").allow(null),
    });
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
    });
  }

  /** @returns {WeightData} */
  static WeightData() {
    return Joi.object({
      value: Joi.number().allow(null),
      unit: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BagDetails} */
  static BagDetails() {
    return Joi.object({
      bag_update_time: Joi.number().allow(null),
      id: Joi.string().allow("").allow(null),
      bag_id: Joi.number().allow(null),
      affiliate_bag_details: OrderPlatformModel.AffiliateBagDetails(),
      affiliate_details: OrderPlatformModel.AffiliateDetails(),
      applied_promos: Joi.array().items(Joi.any()),
      article: OrderPlatformModel.Article(),
      article_details: OrderPlatformModel.ArticleStatusDetails(),
      bag_status: Joi.array().items(OrderPlatformModel.BagStatusHistory()),
      bag_status_history: OrderPlatformModel.BagStatusHistory(),
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
      reasons: Joi.array().items(Joi.any()),
      restore_coupon: Joi.boolean().allow(null),
      restore_promos: Joi.any().allow(null),
      rto_address: OrderPlatformModel.PlatformDeliveryAddress(),
      seller_identifier: Joi.string().allow("").allow(null),
      shipment: OrderPlatformModel.Shipment(),
      shipment_details: OrderPlatformModel.ShipmentDetails(),
      shipment_id: Joi.string().allow("").allow(null),
      shipment_gst: OrderPlatformModel.ShipmentGstDetails(),
      shipment_status: OrderPlatformModel.ShipmentStatusData(),
      shipment_status_history: Joi.array().items(
        OrderPlatformModel.ShipmentStatusData()
      ),
      status: OrderPlatformModel.BagReturnableCancelableStatus(),
      tags: Joi.array().items(Joi.string().allow("")),
      total_shipment_bags: Joi.number().allow(null),
      total_shipments_in_order: Joi.number().allow(null),
      transaction_type: Joi.string().allow("").allow(null),
      type: Joi.string().allow("").allow(null),
      updated_at: Joi.string().allow("").allow(null),
      user: OrderPlatformModel.UserDetails(),
      weight: OrderPlatformModel.WeightData(),
      original_bag_list: Joi.array().items(Joi.number()),
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
    });
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
}
module.exports = OrderPlatformModel;
