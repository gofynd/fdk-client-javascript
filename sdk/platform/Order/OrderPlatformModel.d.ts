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
declare class OrderPlatformModel {
}
declare namespace OrderPlatformModel {
    export { InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse, QuestionErrorResponse, RefundStateConfigurationByPaymentType, PostRefundStateConfiguration, PostRefundStateConfigurationResponse, GetRefundStateConfigurationResponse, RefundStates, GetRefundStates, RefundStateManualWithoutMessage, RefundStateManualWithMessage, RefundStateManualWithMessageData, RefundStateConfigurationManualSchema, RefundStateConfigurationManualSchemaResponse, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ErrorDetail, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, OrderItemDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, OrderPriority, ArticleDetails, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, UserData, OrderInfo, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryReason, HistoryMeta, HistoryDict, ShipmentHistoryResponse, PostHistoryFilters, PostHistoryData, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, Dimension, UpdatePackagingDimensionsPayload, UpdatePackagingDimensionsResponse, Tax, Amount, Charge, LineItem, ProcessingDates, Shipment, ShippingInfo, BillingInfo, UserInfo, TaxInfo, PaymentMethod, PaymentInfo, CurrencyInfoCurrency, CurrencyInfoConversionRate, CurrencyInfo, ConfigPayment, ConfigDpConfiguration, ConfigApplication, Config, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, BagStateTransitionMap, RoleBaseStateTransitionMapping, FetchCreditBalanceRequestPayload, CreditBalanceInfo, FetchCreditBalanceResponsePayload, RefundModeConfigRequestPayload, RefundOption, RefundModeInfo, RefundModeConfigResponsePayload, AttachUserOtpData, AttachUserInfo, AttachOrderUser, AttachOrderUserResponse, SendUserMobileOTP, PointBlankOtpData, SendUserMobileOtpResponse, VerifyOtpData, VerifyMobileOTP, VerifyOtpResponseData, VerifyOtpResponse, BulkReportsDownloadRequest, BulkReportsDownloadResponse, BulkFailedResponse, BulkStateTransistionRequest, BulkStateTransistionResponse, ShipmentActionInfo, BulkActionListingData, BulkListinPage, BulkListingResponse, JobDetailsData, JobDetailsResponse, JobFailedResponse, ManifestPageInfo, ManifestItemDetails, ManifestShipmentListing, DateRange, Filters, ManifestFile, ManifestMediaUpdate, PDFMeta, TotalShipmentPricesCount, ManifestMeta, Manifest, ManifestList, ManifestDetails, FiltersRequest, ProcessManifest, ProcessManifestResponse, ProcessManifestItemResponse, FilterInfoOption, FiltersInfo, ManifestFiltersResponse, PageDetails, EInvoiceIrnDetails, EInvoiceErrorDetails, EInvoiceDetails, EInvoiceResponseData, EInvoiceRetry, EInvoiceRetryResponse, EInvoiceErrorInfo, EInvoiceErrorResponseData, EInvoiceErrorResponse, EInvoiceErrorResponseDetails, EInvoiceRetryShipmentData, CourierPartnerTrackingDetails, CourierPartnerTrackingResponse, LogsChannelDetails, LogPaymentDetails, FailedOrdersItem, FailedOrderLogs, FailedOrderLogDetails, StateTransitionFlag, StateManagerFilter, StateManagerTask, PaginationInfo, StateManagerState, PaginatedStates, RuleLaneConfigErrorResponse, QuestionSetItem, Reason, RuleRequest, CreateRuleResponse, RuleResponse, RuleUpdateRequest, Condition, RuleMeta, RuleAction, Department, L3, Error, RuleUpdateResponse, DeleteRuleResponse, UpdateRulePositionRequest, UpdateRulePositionResponse, RuleItem, RuleParametersResponse, ParameterResponse, RuleListRequest, RuleListResponse, RuleListItem, RuleError, RuleErrorResponse, PageInfo, Page, BagReasonMeta, QuestionSet, BagReasons, ShipmentBagReasons, ShipmentStatus, UserDataInfo, PlatformDeliveryAddress, ShipmentListingChannel, Prices, Identifier, FinancialBreakup, GSTDetailsData, BagStateMapper, BagStatusHistory, Dimensions, ReturnConfig, Weight, Article, ShipmentListingBrand, ReplacementDetails, AffiliateMeta, AffiliateBagDetails, PlatformArticleAttributes, PlatformItem, Dates, BagReturnableCancelableStatus, BagUnit, ShipmentItemFulFillingStore, Currency, OrderingCurrency, ConversionRate, ShipmentItem, ShipmentInternalPlatformViewResponse, TrackingList, InvoiceInfo, OrderDetailsData, UserDetailsData, PhoneDetails, ContactDetails, CompanyDetails, OrderingStoreDetails, DPDetailsData, BuyerDetails, DebugInfo, EinvoiceInfo, Formatted, ShipmentTags, LockData, ShipmentTimeStamp, ShipmentMeta, PDFLinks, AffiliateDetails, BagConfigs, OrderBagArticle, OrderBrandName, AffiliateBagsDetails, BagPaymentMethods, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, CurrentStatus, OrderBags, FulfillingStore, ShipmentPayments, ShipmentStatusData, ShipmentLockDetails, PlatformShipment, ShipmentInfoResponse, TaxDetails, PaymentInfoData, OrderData, OrderDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FilterOptions, FiltersList, GlobalFiltersResponse, ViewDetails, ParentViews, UserViewsResponse, CreateUpdateDeleteResponse, FiltersResponse, URL, FileResponse, BulkActionTemplate, BulkActionTemplateResponse, PlatformShipmentReasonsResponse, ShipmentResponseReasons, ShipmentReasonsResponse, StoreAddress, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, StoreMeta, Store, Brand, Attributes, Item, ArticleStatusDetails, Company, ShipmentGstDetails, DeliverySlotDetails, InvoiceDetails, UserDetails, WeightData, BagDetails, BagDetailsPlatformResponse, BagsPage, BagData, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, Templates, AllowedTemplatesResponse, TemplateDownloadResponse };
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
    error?: string;
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
};
/** @returns {PostRefundStateConfigurationResponse} */
declare function PostRefundStateConfigurationResponse(): PostRefundStateConfigurationResponse;
type PostRefundStateConfigurationResponse = {
    message?: string;
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
};
/** @returns {RefundStateConfigurationManualSchema} */
declare function RefundStateConfigurationManualSchema(): RefundStateConfigurationManualSchema;
type RefundStateConfigurationManualSchema = {
    prepaid?: RefundStateManualWithoutMessage;
    non_prepaid?: RefundStateManualWithoutMessage;
};
/** @returns {RefundStateConfigurationManualSchemaResponse} */
declare function RefundStateConfigurationManualSchemaResponse(): RefundStateConfigurationManualSchemaResponse;
type RefundStateConfigurationManualSchemaResponse = {
    success?: boolean;
    data?: RefundStateManualWithMessageData;
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
    tcs_charge?: number;
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
    tcs_charge?: number;
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
    affiliate_id: string;
    order_info: OrderInfo;
    order_config: OrderConfig;
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
    user_id?: string;
    tax_details?: TaxDetails;
    mongo_cart_id?: number;
    delivery_charges?: number;
    tcs_charge?: number;
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
    name: string;
    amount: Amount;
    tax?: Tax;
    code?: string;
    type: string;
};
/** @returns {LineItem} */
declare function LineItem(): LineItem;
type LineItem = {
    charges: Charge[];
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
    external_location_id?: string;
    processing_dates?: ProcessingDates;
    meta?: any;
    priority?: number;
    location_id: number;
    order_type?: string;
    parent_type?: string;
    store_invoice_id?: string;
    lock_status?: string;
    type?: string;
    billing_address_json?: PlatformDeliveryAddress;
    id?: string;
    fulfilment_priority?: number;
    is_active?: boolean;
    previous_shipment_id?: string;
    pdf_links?: any;
    delivery_address_json?: PlatformDeliveryAddress;
    eway_bill_id?: string;
    affiliate_shipment_id?: string;
    fynd_order_id?: string;
    tags?: string[];
    created_at?: string;
    delivery_awb_number?: string;
    hand_over_contact_json?: PlatformDeliveryAddress;
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
/** @returns {Config} */
declare function Config(): Config;
type Config = {
    lock_states?: string[];
    payment: ConfigPayment;
    dp_configuration?: ConfigDpConfiguration;
    location_reassignment?: boolean;
    application?: ConfigApplication;
    ordering_channel_logo?: string;
    integration_type?: any;
};
/** @returns {CreateOrderAPI} */
declare function CreateOrderAPI(): CreateOrderAPI;
type CreateOrderAPI = {
    shipments: Shipment[];
    shipping_info: ShippingInfo;
    billing_info: BillingInfo;
    currency_info?: CurrencyInfo;
    external_order_id?: string;
    charges?: Charge[];
    external_creation_date?: string;
    meta?: any;
    tax_info?: TaxInfo;
    config?: Config;
    payment_info: PaymentInfo;
    user_info?: UserInfo;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
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
};
/** @returns {Filters} */
declare function Filters(): Filters;
type Filters = {
    date_range?: DateRange;
    logo?: string;
    from_date?: string;
    stores?: number;
    to_date?: string;
    dp_name?: string;
    dp_ids?: number;
    lane?: string;
    selected_shipments?: string;
    store_name?: string;
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
    items: FailedOrdersItem;
    page: PageDetails;
};
/** @returns {FailedOrderLogDetails} */
declare function FailedOrderLogDetails(): FailedOrderLogDetails;
type FailedOrderLogDetails = {
    error_trace: string;
    exception: string;
};
/** @returns {StateTransitionFlag} */
declare function StateTransitionFlag(): StateTransitionFlag;
type StateTransitionFlag = {
    id?: number;
    name?: string;
    display_name?: string;
    description?: string;
    type?: string;
    options?: any;
    default_value?: string;
};
/** @returns {StateManagerFilter} */
declare function StateManagerFilter(): StateManagerFilter;
type StateManagerFilter = {
    id?: number;
    name?: string;
    display_name?: string;
    description?: string;
    type?: string;
    options?: any;
    default_value?: string;
};
/** @returns {StateManagerTask} */
declare function StateManagerTask(): StateManagerTask;
type StateManagerTask = {
    id?: number;
    name?: string;
    display_name?: string;
    description?: string;
    doc_string?: string;
    kwargs?: any;
};
/** @returns {PaginationInfo} */
declare function PaginationInfo(): PaginationInfo;
type PaginationInfo = {
    current?: number;
    has_previous?: boolean;
    has_next?: boolean;
    total?: number;
    item_total?: number;
    type?: string;
    size?: number;
};
/** @returns {StateManagerState} */
declare function StateManagerState(): StateManagerState;
type StateManagerState = {
    /**
     * - Unique identifier for the state
     */
    id?: number;
    /**
     * - The name of the state
     */
    state?: string;
    /**
     * - The platform display name
     */
    platform_display_name?: string;
    /**
     * - Whether state is for app facing or not
     */
    app_facing?: boolean;
    /**
     * - The application display name
     */
    app_display_name?: string;
    /**
     * - Whether state is active or not
     */
    is_active?: boolean;
    /**
     * - Type of the state
     */
    state_type?: string;
    /**
     * - Type of the journey
     */
    journey_type?: string;
};
/** @returns {PaginatedStates} */
declare function PaginatedStates(): PaginatedStates;
type PaginatedStates = {
    items?: StateManagerState[];
    page?: PaginationInfo;
};
/** @returns {RuleLaneConfigErrorResponse} */
declare function RuleLaneConfigErrorResponse(): RuleLaneConfigErrorResponse;
type RuleLaneConfigErrorResponse = {
    type?: string;
    value?: string;
    message?: any;
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
    qc_type: string[];
    question_set: QuestionSet[];
    meta: any;
    is_active: boolean;
    is_deleted: boolean;
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
/** @returns {CreateRuleResponse} */
declare function CreateRuleResponse(): CreateRuleResponse;
type CreateRuleResponse = {
    id?: number;
    success?: boolean;
    error?: RuleError;
};
/** @returns {RuleResponse} */
declare function RuleResponse(): RuleResponse;
type RuleResponse = {
    id?: string;
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
    value: any;
    variable: string;
    operation: string;
};
/** @returns {RuleMeta} */
declare function RuleMeta(): RuleMeta;
type RuleMeta = {
    department?: Department;
    l3?: L3;
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
/** @returns {RuleUpdateResponse} */
declare function RuleUpdateResponse(): RuleUpdateResponse;
type RuleUpdateResponse = {
    id?: string;
    success?: boolean;
    error?: RuleError;
};
/** @returns {DeleteRuleResponse} */
declare function DeleteRuleResponse(): DeleteRuleResponse;
type DeleteRuleResponse = {
    id?: string;
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
/** @returns {UpdateRulePositionResponse} */
declare function UpdateRulePositionResponse(): UpdateRulePositionResponse;
type UpdateRulePositionResponse = {
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
    conditions: Condition;
    meta: Meta;
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
/** @returns {RuleListResponse} */
declare function RuleListResponse(): RuleListResponse;
type RuleListResponse = {
    page?: PageInfo;
    items?: RuleListItem[];
    success?: boolean;
    error?: RuleErrorResponse;
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
    error?: RuleError;
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
    created_ts?: string;
    shipment_id?: string;
    status_created_at?: string;
    status_created_ts?: string;
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
    display_address?: string;
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
    tcs_charge?: number;
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
    amount_to_be_collected?: number;
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
    tcs_charge?: number;
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
    amount_to_be_collected?: number;
    identifiers: Identifier;
    total_units: number;
    added_to_fynd_cash: boolean;
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
    created_ts?: string;
    shipment_id?: string;
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
    tags?: string[];
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
    brand_store_tags?: string[];
    pincode?: string;
    meta?: any;
    address?: string;
    address1?: string;
    display_address?: string;
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
    currency_code?: string;
    currency_symbol?: string;
};
/** @returns {OrderingCurrency} */
declare function OrderingCurrency(): OrderingCurrency;
type OrderingCurrency = {
    currency_code?: string;
    currency_name?: string;
    currency_symbol?: string;
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
    order_date?: string;
    order_created_ts?: string;
    shipment_status?: ShipmentStatus;
    user?: UserDataInfo;
    estimated_sla_time?: string;
    estimated_sla_ts?: string;
    delivery_address?: PlatformDeliveryAddress;
    channel?: ShipmentListingChannel;
    previous_shipment_id?: string;
    lock_status?: boolean;
    invoice_id?: string;
    payment_methods?: any;
    payment_info?: any[];
    status_created_at?: string;
    status_created_ts?: string;
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
    shipment_created_ts?: string;
    currency?: Currency;
    currency_info?: CurrencyInfo;
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
    created_ts?: string;
    tax_details?: any;
    cod_charges?: string;
    source?: string;
    fynd_order_id: string;
    affiliate_id?: string;
    affiliate_order_id?: string;
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
    state_code?: string;
    country_iso_code?: string;
    country_phone_code?: string;
    display_address?: string;
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
    meta?: any;
    bag_list?: string[];
    id?: number;
    created_at?: string;
    created_ts?: string;
    shipment_id?: string;
    status?: string;
    display_name?: string;
    current_shipment_status?: string;
    status_created_at?: string;
};
/** @returns {ShipmentLockDetails} */
declare function ShipmentLockDetails(): ShipmentLockDetails;
type ShipmentLockDetails = {
    lock_status?: boolean;
    lock_message?: string;
    action_to_status?: any;
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
    estimated_sla_ts?: string;
    can_update_dimension?: boolean;
    shipment_images?: string[];
    delivery_details?: UserDetailsData;
    billing_details?: UserDetailsData;
    forward_shipment_id?: string;
    fulfilment_priority?: number;
    shipment_details?: ShipmentLockDetails;
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
    payment_info?: any[];
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
    shipment_created_ts?: string;
    currency?: Currency;
    currency_info?: CurrencyInfo;
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
/** @returns {PaymentInfoData} */
declare function PaymentInfoData(): PaymentInfoData;
type PaymentInfoData = {
    meta?: any;
    mode?: string;
    name?: string;
    amount?: number;
    collected?: boolean;
    refund_by?: string;
    collect_by?: string;
    display_name?: string;
    merchant_transaction_id?: string;
    transaction_data?: any;
};
/** @returns {OrderData} */
declare function OrderData(): OrderData;
type OrderData = {
    order_date: string;
    created_ts?: string;
    tax_details?: TaxDetails;
    meta?: any;
    fynd_order_id: string;
    prices?: Prices;
    payment_methods?: any;
    payment_info?: PaymentInfoData[];
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
    order_created_ts?: string;
    payment_mode?: string;
    shipments?: PlatformShipment[];
    order_id?: string;
    channel?: PlatformChannel;
    user_info?: UserDataInfo;
    order_value?: number;
    currency?: Currency;
    currency_info?: CurrencyInfo;
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
    label: string;
    value: string;
    name?: string;
};
/** @returns {FiltersList} */
declare function FiltersList(): FiltersList;
type FiltersList = {
    label: string;
    value: string;
    filter_type: string;
    type: string;
    placeholder_text?: string;
    required?: boolean;
    options: FilterOptions[];
};
/** @returns {GlobalFiltersResponse} */
declare function GlobalFiltersResponse(): GlobalFiltersResponse;
type GlobalFiltersResponse = {
    filters: FiltersList[];
    company_id: number;
    request_source?: string;
    show_in: string;
};
/** @returns {ViewDetails} */
declare function ViewDetails(): ViewDetails;
type ViewDetails = {
    id?: string;
    slug?: string;
    text?: string;
    filters?: FiltersList[];
};
/** @returns {ParentViews} */
declare function ParentViews(): ParentViews;
type ParentViews = {
    views?: ViewDetails[];
    parent_slug?: string;
    parent_text?: string;
};
/** @returns {UserViewsResponse} */
declare function UserViewsResponse(): UserViewsResponse;
type UserViewsResponse = {
    parent_views?: ParentViews[];
};
/** @returns {CreateUpdateDeleteResponse} */
declare function CreateUpdateDeleteResponse(): CreateUpdateDeleteResponse;
type CreateUpdateDeleteResponse = {
    message?: string;
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
    delivery_address?: PlatformDeliveryAddress;
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
    qc_required?: boolean;
    quantity?: number;
    reasons?: any[];
    restore_coupon?: boolean;
    restore_promos?: any;
    rto_address?: PlatformDeliveryAddress;
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
    item_total: number;
    has_next: boolean;
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
/** @returns {TemplateDownloadResponse} */
declare function TemplateDownloadResponse(): TemplateDownloadResponse;
type TemplateDownloadResponse = {
    file_name?: string;
    url?: string;
};
