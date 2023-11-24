const Joi = require("joi");

/**
 * @typedef ActionInfo
 * @property {string} description
 * @property {string} display_text
 * @property {number} id
 * @property {string} slug
 */

/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [action_centre]
 * @property {Object} [applied_filters]
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [page]
 * @property {FiltersInfo[]} [processed]
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [unfulfilled]
 */

/**
 * @typedef Affiliate
 * @property {AffiliateConfig} [config]
 * @property {string} id
 * @property {string} token
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} created_at
 * @property {string} [description]
 * @property {string} id
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} name
 * @property {string} owner
 * @property {string} secret
 * @property {string} token
 * @property {string} updated_at
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef AffiliateBag
 * @property {string} _id
 * @property {Object} affiliate_meta
 * @property {string} affiliate_store_id
 * @property {number} amount_paid
 * @property {number} avl_qty
 * @property {number} company_id
 * @property {number} delivery_charge
 * @property {number} discount
 * @property {string} fynd_store_id
 * @property {string} hsn_code_id
 * @property {Object} identifier
 * @property {number} item_id
 * @property {string} item_size
 * @property {string} modified_on
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} price_effective
 * @property {number} price_marked
 * @property {number} quantity
 * @property {string} seller_identifier
 * @property {string} sku
 * @property {number} store_id
 * @property {number} transfer_price
 * @property {number} unit_price
 */

/**
 * @typedef AffiliateBagDetails
 * @property {string} affiliate_bag_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {number} [employee_discount]
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef AffiliateBagsDetails
 * @property {string} [affiliate_bag_id]
 * @property {string} [coupon_code]
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateAppConfig} [app]
 * @property {number} [app_company_id]
 * @property {AffiliateInventoryConfig} [inventory]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} [ad_id]
 * @property {string} affiliate_bag_id
 * @property {string} [affiliate_id]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {string} affiliate_shipment_id
 * @property {string} affiliate_store_id
 * @property {string} [company_affiliate_tag]
 * @property {AffiliateConfig} [config]
 * @property {PDFLinks} [pdf_links]
 * @property {ShipmentMeta} shipment_meta
 */

/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 */

/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */

/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */

/**
 * @typedef AffiliateMeta
 * @property {string} [box_type]
 * @property {string} [channel_order_id]
 * @property {string} [channel_shipment_id]
 * @property {string} [coupon_code]
 * @property {number} [customer_selling_price]
 * @property {string} [due_date]
 * @property {number} [employee_discount]
 * @property {number} [fulfilment_priority]
 * @property {boolean} [is_priority]
 * @property {boolean} [is_serial_number_required]
 * @property {number} [loyalty_discount]
 * @property {string} [marketplace_invoice_id]
 * @property {string} [order_item_id]
 * @property {number} [quantity]
 * @property {ReplacementDetails} [replacement_details]
 * @property {number} [size_level_total_qty]
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {string} marketplace_store_id
 * @property {number} store_id
 */

/**
 * @typedef AnnouncementResponse
 * @property {number} [company_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [from_datetime]
 * @property {number} id
 * @property {string} [logo_url]
 * @property {string} [platform_id]
 * @property {string} [platform_name]
 * @property {string} [title]
 * @property {string} [to_datetime]
 */

/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef AppliedPromos
 * @property {number} [amount]
 * @property {number} [article_quantity]
 * @property {BuyRules[]} [buy_rules]
 * @property {DiscountRules[]} [discount_rules]
 * @property {boolean} [mrp_promotion]
 * @property {string} [promo_id]
 * @property {string} [promotion_name]
 * @property {string} [promotion_type]
 */

/**
 * @typedef Article
 * @property {string} _id
 * @property {Object} [a_set]
 * @property {Object} [child_details]
 * @property {string} [code]
 * @property {Object} [currency]
 * @property {Dimensions} [dimensions]
 * @property {boolean} [esp_modified]
 * @property {Object} identifiers
 * @property {boolean} [is_set]
 * @property {string} [raw_meta]
 * @property {ReturnConfig} [return_config]
 * @property {string} seller_identifier
 * @property {string} size
 * @property {string} uid
 * @property {Weight} [weight]
 */

/**
 * @typedef ArticleDetails
 * @property {string} _id
 * @property {Object} attributes
 * @property {number} brand_id
 * @property {Object} category
 * @property {Object} dimension
 * @property {number} quantity
 * @property {Object} [status]
 * @property {Object} weight
 */

/**
 * @typedef AttachOrderUser
 * @property {string} fynd_order_id
 * @property {AttachUserOtpData} otp_data
 * @property {AttachUserInfo} user_info
 */

/**
 * @typedef AttachOrderUserResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef AttachUserInfo
 * @property {string} [country_code]
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} mobile
 */

/**
 * @typedef AttachUserOtpData
 * @property {string} request_id
 */

/**
 * @typedef Attributes
 * @property {string} [brand_name]
 * @property {string} [essential]
 * @property {string[]} [gender]
 * @property {string} [marketer_address]
 * @property {string} [marketer_name]
 * @property {string} [name]
 * @property {string} [primary_color]
 * @property {string} [primary_color_hex]
 * @property {string} [primary_material]
 */

/**
 * @typedef B2BPODetails
 * @property {string} [docker_number]
 * @property {number} [item_base_price]
 * @property {boolean} [partial_can_ret]
 * @property {number} [po_line_amount]
 * @property {number} [po_tax_amount]
 * @property {number} [total_gst_percentage]
 */

/**
 * @typedef BagConfigs
 * @property {boolean} allow_force_return
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_returnable
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {AffiliateBagDetails} [affiliate_bag_details]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {Object[]} [applied_promos]
 * @property {Article} [article]
 * @property {ArticleDetails} [article_details]
 * @property {BagStatusHistory[]} [bag_status]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {number} [bag_update_time]
 * @property {Brand} [brand]
 * @property {BagStatusHistory} [current_operational_status]
 * @property {BagStatusHistory} [current_status]
 * @property {Dates} [dates]
 * @property {string} [display_name]
 * @property {string} [entity_type]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {GSTDetailsData} [gst_details]
 * @property {number} [id]
 * @property {string} [identifier]
 * @property {Item} [item]
 * @property {string} [journey_type]
 * @property {number} [line_number]
 * @property {Object} [meta]
 * @property {number} [no_of_bags_order]
 * @property {string} [operational_status]
 * @property {string} [order_integration_id]
 * @property {Store} [ordering_store]
 * @property {number[]} [original_bag_list]
 * @property {Object} [parent_promo_bags]
 * @property {Prices} [prices]
 * @property {Object} [qc_required]
 * @property {number} [quantity]
 * @property {Object[]} [reasons]
 * @property {boolean} [restore_coupon]
 * @property {Object} [restore_promos]
 * @property {string} [seller_identifier]
 * @property {string} [shipment_id]
 * @property {BagReturnableCancelableStatus1} [status]
 * @property {string[]} [tags]
 * @property {string} [type]
 */

/**
 * @typedef BagGST
 * @property {number} [brand_calculated_amount]
 * @property {string} [cgst_gst_fee]
 * @property {number} [cgst_tax_percentage]
 * @property {number} [gst_fee]
 * @property {string} [gst_tag]
 * @property {number} [gst_tax_percentage]
 * @property {string} [gstin_code]
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 * @property {string} [igst_gst_fee]
 * @property {number} [igst_tax_percentage]
 * @property {boolean} [is_default_hsn_code]
 * @property {string} [sgst_gst_fee]
 * @property {number} [sgst_tax_percentage]
 * @property {number} [tax_collected_at_source]
 * @property {number} [value_of_good]
 */

/**
 * @typedef BagGSTDetails
 * @property {number} brand_calculated_amount
 * @property {string} cgst_gst_fee
 * @property {number} cgst_tax_percentage
 * @property {number} gst_fee
 * @property {string} gst_tag
 * @property {number} gst_tax_percentage
 * @property {string} [gstin_code]
 * @property {string} hsn_code
 * @property {string} hsn_code_id
 * @property {string} igst_gst_fee
 * @property {number} igst_tax_percentage
 * @property {boolean} [is_default_hsn_code]
 * @property {string} sgst_gst_fee
 * @property {number} sgst_tax_percentage
 * @property {number} tax_collected_at_source
 * @property {number} value_of_good
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 * @property {Object} [custom_json]
 * @property {string} [custom_message]
 * @property {string} [docket_number]
 * @property {Object} [extra_meta]
 * @property {GiftCard} [gift_card]
 * @property {string} [group_id]
 * @property {boolean} [partial_can_ret]
 */

/**
 * @typedef BagPaymentMethods
 * @property {number} [amount]
 * @property {string} [mode]
 */

/**
 * @typedef BagReasonMeta
 * @property {boolean} [show_text_area]
 */

/**
 * @typedef BagReasons
 * @property {string} [display_name]
 * @property {number} [id]
 * @property {BagReasonMeta} [meta]
 * @property {string[]} [qc_type]
 * @property {QuestionSet[]} [question_set]
 * @property {BagReasons[]} [reasons]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_returnable
 */

/**
 * @typedef BagReturnableCancelableStatus1
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_returnable
 */

/**
 * @typedef Bags
 * @property {string} [affiliate_bag_id] - Application/Affiliate Bag ID,
 *   Required if the ID is missing
 * @property {string} [affiliate_order_id] - Application/Affiliate Order ID,
 *   Required if the ID is missing
 * @property {number} [bag_id] - Bag Id
 * @property {boolean} [is_locked] - Is Bag Locked
 */

/**
 * @typedef BagsPage
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {string} page_type
 * @property {number} size
 */

/**
 * @typedef BagStateMapper
 * @property {string} [app_display_name]
 * @property {boolean} [app_facing]
 * @property {string} [app_state_name]
 * @property {string} display_name
 * @property {number} id
 * @property {boolean} [is_active]
 * @property {string} journey_type
 * @property {string} name
 * @property {boolean} [notify_customer]
 * @property {string} state_type
 */

/**
 * @typedef BagStateTransitionMap
 * @property {Object} [affiliate]
 * @property {Object} [fynd]
 */

/**
 * @typedef BagStatusHistory
 * @property {string} [app_display_name]
 * @property {number} [bag_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [bsh_id]
 * @property {string} [created_at]
 * @property {string} [delivery_awb_number]
 * @property {number} [delivery_partner_id]
 * @property {string} [display_name]
 * @property {boolean} [forward]
 * @property {boolean} [kafka_sync]
 * @property {Object[]} [reasons]
 * @property {string} [shipment_id]
 * @property {number} [state_id]
 * @property {string} [state_type]
 * @property {string} status
 * @property {number} [store_id]
 * @property {string} [updated_at]
 */

/**
 * @typedef BagUnit
 * @property {AffiliateBagDetails} [affiliate_bag_details]
 * @property {Article} [article]
 * @property {string} [bag_expiry_date]
 * @property {number} bag_id
 * @property {BagStatusHistory[]} [bag_status]
 * @property {string} [bag_type]
 * @property {ShipmentListingBrand} [brand]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {BagStatusHistory} current_operational_status
 * @property {BagStatusHistory} current_status
 * @property {Dates} [dates]
 * @property {string} [display_name]
 * @property {string} [entity_type]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {GSTDetailsData} [gst]
 * @property {PlatformItem} [item]
 * @property {number} [line_number]
 * @property {Object} [meta]
 * @property {Prices} [prices]
 * @property {number} product_quantity
 * @property {Object[]} [reasons]
 * @property {string} [size]
 * @property {BagReturnableCancelableStatus} status
 */

/**
 * @typedef BaseResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef BillingInfo
 * @property {string} address1
 * @property {string} [address2]
 * @property {string} [alternate_email]
 * @property {string} [alternate_mobile_number]
 * @property {string} city
 * @property {string} country
 * @property {string} [country_code]
 * @property {string} [customer_code]
 * @property {string} [external_customer_code]
 * @property {string} first_name
 * @property {string} [floor_no]
 * @property {string} [gender]
 * @property {string} [house_no]
 * @property {string} [last_name]
 * @property {string} [middle_name]
 * @property {string} pincode
 * @property {string} primary_email
 * @property {string} primary_mobile_number
 * @property {string} state
 * @property {string} [state_code]
 * @property {string} [title]
 */

/**
 * @typedef BillingStaffDetails
 * @property {string} [employee_code]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {number} [staff_id]
 * @property {string} [user]
 */

/**
 * @typedef Brand
 * @property {number} brand_id
 * @property {string} brand_name
 * @property {string} company
 * @property {number} [created_on]
 * @property {boolean} [credit_note_allowed]
 * @property {number} [credit_note_expiry_days]
 * @property {string} [invoice_prefix]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} [logo]
 * @property {number} [modified_on]
 * @property {string} [pickup_location]
 * @property {string} [script_last_ran]
 * @property {string} [start_date]
 */

/**
 * @typedef BulkActionTemplate
 * @property {string} [text]
 * @property {string} [value]
 */

/**
 * @typedef BulkActionTemplateResponse
 * @property {BulkActionTemplate[]} [template_x_slug] - Allowed bulk action template slugs
 */

/**
 * @typedef BulkReportsDownloadFailedResponse
 * @property {string} [error]
 * @property {boolean} [status]
 */

/**
 * @typedef BulkReportsDownloadRequest
 * @property {Object} [custom_filters_for_lane]
 * @property {string} [custom_headers] - Download report with specific headers
 * @property {string[]} [entities] - Download for specific enitites, entities
 *   can be bag, shipment or order_id, etc.
 * @property {string} [filter_type]
 * @property {string} [from_date]
 * @property {boolean} [is_cross_company_enabled] - Download lanes for cross company.
 * @property {string} [lane_type]
 * @property {string} [report_type] - Type of report
 * @property {string[]} [store_ids] - Download for specific store ids.
 * @property {string} [to_date]
 */

/**
 * @typedef BulkReportsDownloadResponse
 * @property {string} [batch_id]
 * @property {boolean} [success]
 */

/**
 * @typedef BuyerDetails
 * @property {string} address
 * @property {string} [ajio_site_id]
 * @property {string} city
 * @property {string} gstin
 * @property {string} name
 * @property {number} pincode
 * @property {string} state
 */

/**
 * @typedef BuyRules
 * @property {Object} [cart_conditions]
 * @property {ItemCriterias} [item_criteria]
 */

/**
 * @typedef Charge
 * @property {Object} amount
 * @property {string} [code]
 * @property {string} name
 * @property {Tax} [tax]
 * @property {string} type
 */

/**
 * @typedef CheckResponse
 * @property {string} [affiliate_id] - Affiliate ID
 * @property {string} [affiliate_shipment_id] - Affiliate Shipment ID
 * @property {Bags[]} [bags]
 * @property {boolean} [is_bag_locked] - Is Bag Locked
 * @property {boolean} [is_shipment_locked] - Is Shipment Locked
 * @property {string} [lock_status] - Lock Status: Expected lock_status:
 *   [complete, operational, financial]
 * @property {OriginalFilter} [original_filter] - Filter
 * @property {string} [shipment_id] - Shipment ID
 * @property {string} [status] - Status
 */

/**
 * @typedef Click2CallResponse
 * @property {string} call_id - Call ID from the provider
 * @property {boolean} success - Success
 */

/**
 * @typedef CompanyDetails
 * @property {Object} [address]
 * @property {string} [company_cin]
 * @property {ContactDetails} [company_contact]
 * @property {string} [company_gst]
 * @property {number} [company_id]
 * @property {string} [company_name]
 */

/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {PhoneDetails[]} [phone]
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
 * @typedef CreateChannelConfig
 * @property {DpConfiguration} [dp_configuration]
 * @property {boolean} [location_reassignment]
 * @property {string[]} [lock_states]
 * @property {Object} [logo_url]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {string} [shipment_assignment]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_inserted]
 * @property {boolean} [is_upserted]
 */

/**
 * @typedef CreateChannelConifgErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [mode_of_payment]
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [source]
 */

/**
 * @typedef CreateOrderAPI
 * @property {BillingInfo} billing_info
 * @property {Charge[]} [charges]
 * @property {Object} [config]
 * @property {Object} [currency_info]
 * @property {string} [external_creation_date]
 * @property {string} [external_order_id]
 * @property {Object} [meta]
 * @property {PaymentInfo} payment_info
 * @property {Shipment[]} shipments
 * @property {ShippingInfo} shipping_info
 * @property {TaxInfo} [tax_info]
 * @property {UserInfo} [user_info]
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [code]
 * @property {string} [exception]
 * @property {Object} [info]
 * @property {string} message
 * @property {string} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} status
 */

/**
 * @typedef CreateOrderPayload
 * @property {string} affiliate_id
 * @property {OrderConfig} order_config
 * @property {OrderInfo} order_info
 */

/**
 * @typedef CreateOrderResponse
 * @property {string} fynd_order_id
 */

/**
 * @typedef CreditBalanceInfo
 * @property {string} [customer_mobile_number]
 * @property {string} [reason]
 * @property {string} [total_credited_balance]
 */

/**
 * @typedef CurrentStatus
 * @property {number} [bag_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [created_at]
 * @property {string} [delivery_awb_number]
 * @property {number} [delivery_partner_id]
 * @property {number} id
 * @property {boolean} [kafka_sync]
 * @property {string} [shipment_id]
 * @property {number} [state_id]
 * @property {string} [state_type]
 * @property {string} [status]
 * @property {number} [store_id]
 * @property {string} [updated_at]
 */

/**
 * @typedef DataUpdates
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {OrderItemDataUpdates[]} [order_item_status]
 * @property {ProductsDataUpdates[]} [products]
 */

/**
 * @typedef Dates
 * @property {string} [delivery_date]
 * @property {string} [order_created]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef Dimension
 * @property {string} [height]
 * @property {number} [length]
 * @property {string} [packaging_type]
 * @property {string} [weight]
 * @property {number} [width]
 */

/**
 * @typedef Dimensions
 * @property {number} [height]
 * @property {boolean} [is_default]
 * @property {number} [length]
 * @property {string} [unit]
 * @property {number} [width]
 */

/**
 * @typedef DiscountRules
 * @property {string} [type]
 * @property {number} [value]
 */

/**
 * @typedef DispatchManifest
 * @property {string} manifest_id
 */

/**
 * @typedef Document
 * @property {string} ds_type
 * @property {string} legal_name
 * @property {string} [url]
 * @property {string} value
 * @property {boolean} verified
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [awb_no]
 * @property {string} [country]
 * @property {string} [eway_bill_id]
 * @property {string} [gst_tag]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [pincode]
 * @property {string} [track_url]
 */

/**
 * @typedef EinvoiceInfo
 * @property {Object} [credit_note]
 * @property {Object} [invoice]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [password]
 * @property {string} [user]
 * @property {string} [username]
 */

/**
 * @typedef EInvoiceResponseData
 * @property {string} [ack_dt]
 * @property {string} [ack_no]
 * @property {string} [irn]
 * @property {string} message
 * @property {string} shipment_id
 * @property {boolean} success
 * @property {number} [timeout]
 * @property {string} [timeout_unit]
 */

/**
 * @typedef EInvoiceRetry
 * @property {EInvoiceRetryShipmentData[]} [shipments_data]
 */

/**
 * @typedef EInvoiceRetryResponse
 * @property {string} [message]
 * @property {EInvoiceResponseData[]} response_data
 * @property {boolean} [success]
 * @property {number} success_count
 */

/**
 * @typedef EInvoiceRetryShipmentData
 * @property {string} shipment_id
 */

/**
 * @typedef Entities
 * @property {string} [affiliate_bag_id] - Application/Affiliate Bag ID,
 *   Required if the ID is missing
 * @property {string} [affiliate_id] - Application/Affiliate ID, Required if the
 *   ID is missing
 * @property {string} [affiliate_order_id] - Application/Affiliate Order ID,
 *   Required if the ID is missing
 * @property {string} [affiliate_shipment_id] - Application/Affiliate Shipment
 *   ID, Required if the ID is missing
 * @property {string} [id] - Shipment ID if 'entity_type': shipments | Bag Id if
 *   'entity_type': bags
 * @property {string} reason_text - Reason For Shipment/Bag Action
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef EntitiesReasons
 * @property {EntityReasonData} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef EntityReasonData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef Error
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef ErrorDetail
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef ErrorResponse
 * @property {string} error
 * @property {string} [error_trace]
 * @property {string} message
 * @property {number} [status]
 * @property {boolean} [success]
 */

/**
 * @typedef FetchCreditBalanceRequestPayload
 * @property {string} affiliate_id
 * @property {string} customer_mobile_number
 * @property {string} seller_id
 */

/**
 * @typedef FetchCreditBalanceResponsePayload
 * @property {CreditBalanceInfo} data
 * @property {boolean} success
 */

/**
 * @typedef FileResponse
 * @property {URL} [cdn]
 * @property {string} [file_name] - Name of the file
 */

/**
 * @typedef FilterInfoOption
 * @property {number} [min_search_size]
 * @property {string} [name]
 * @property {string} [placeholder_text]
 * @property {boolean} [show_ui]
 * @property {string} [text]
 * @property {string} [value]
 */

/**
 * @typedef FiltersInfo
 * @property {FilterInfoOption[]} [options]
 * @property {string} [placeholder_text]
 * @property {boolean} [required]
 * @property {string} text
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef FiltersResponse
 * @property {AdvanceFilterInfo} [advance_filter]
 * @property {FiltersInfo[]} [global_filter]
 */

/**
 * @typedef FinancialBreakup
 * @property {boolean} added_to_fynd_cash
 * @property {number} amount_paid
 * @property {number} [amount_paid_roundoff]
 * @property {number} brand_calculated_amount
 * @property {number} cashback
 * @property {number} cashback_applied
 * @property {number} cod_charges
 * @property {number} coupon_effective_discount
 * @property {number} coupon_value
 * @property {number} delivery_charge
 * @property {number} discount
 * @property {number} fynd_credits
 * @property {number} gst_fee
 * @property {string} gst_tag
 * @property {number} gst_tax_percentage
 * @property {string} hsn_code
 * @property {Identifier} identifiers
 * @property {string} item_name
 * @property {number} price_effective
 * @property {number} price_marked
 * @property {number} promotion_effective_discount
 * @property {number} refund_credit
 * @property {string} size
 * @property {number} [tax_collected_at_source]
 * @property {number} total_units
 * @property {number} transfer_price
 * @property {number} value_of_good
 */

/**
 * @typedef Formatted
 * @property {string} [max]
 * @property {string} [min]
 */

/**
 * @typedef FulfillingStore
 * @property {string} address
 * @property {string} city
 * @property {string} code
 * @property {string} contact_person
 * @property {string} country
 * @property {string} fulfillment_channel
 * @property {number} id
 * @property {Object} meta
 * @property {string} phone
 * @property {string} pincode
 * @property {string} state
 * @property {string} store_name
 */

/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */

/**
 * @typedef GeneratePosOrderReceiptResponse
 * @property {string} [customer_cn_receipt]
 * @property {string} [invoice_receipt]
 * @property {string} [merchant_cn_receipt]
 * @property {string} [order_id]
 * @property {string} [payment_receipt]
 * @property {boolean} [success]
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo[]} [permissions]
 */

/**
 * @typedef GetBagsPlatformResponse
 * @property {BagDetailsPlatformResponse[]} items
 * @property {BagsPage} page
 */

/**
 * @typedef GiftCard
 * @property {string} [display_text]
 * @property {string} [gift_message]
 * @property {number} [gift_price]
 * @property {boolean} [is_gift_applied]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} brand_calculated_amount
 * @property {number} [cgst_gst_fee]
 * @property {number} [cgst_tax_percentage]
 * @property {number} gst_fee
 * @property {string} [gst_tag]
 * @property {number} [gst_tax_percentage]
 * @property {string} [gstin_code]
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 * @property {number} [igst_gst_fee]
 * @property {number} [igst_tax_percentage]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [sgst_gst_fee]
 * @property {number} [sgst_tax_percentage]
 * @property {number} tax_collected_at_source
 * @property {number} value_of_good
 */

/**
 * @typedef HistoryDict
 * @property {string} [assigned_agent] - Assigned Agent
 * @property {number} [bag_id] - Bag ID
 * @property {string} createdat - Create date
 * @property {string} [display_message] - Display Message
 * @property {string} [l1_detail] - L1 details of bag
 * @property {string} [l2_detail] - L2 details of bag
 * @property {string} [l3_detail] - L3 details of bag
 * @property {string} message - History Message or comment
 * @property {HistoryMeta} [meta] - Meta
 * @property {string} [ticket_id] - Ticket ID
 * @property {string} [ticket_url] - Ticket URL
 * @property {string} type - Type of history, Expected Values: [
 *   activity_status, activity_escalation, activity_comment,
 *   outbound_notification, outbound_voice ]
 * @property {string} user - User who created the history
 */

/**
 * @typedef HistoryMeta
 * @property {string} [activity_comment]
 * @property {string} [activity_type]
 * @property {string} [billsec]
 * @property {string} [call_id]
 * @property {string} [caller]
 * @property {string} [callerid]
 * @property {string} [channel_type]
 * @property {string} [duration]
 * @property {string} [endtime]
 * @property {string} [message]
 * @property {HistoryReason} [reason]
 * @property {string} [receiver]
 * @property {string} [recipient]
 * @property {string} [recordpath]
 * @property {string} [short_link]
 * @property {string} [slug]
 * @property {string} [starttime]
 * @property {string} [status]
 * @property {string} [status1]
 * @property {string} [status2]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {string} [store_name]
 */

/**
 * @typedef HistoryReason
 * @property {string} [category]
 * @property {number} [code]
 * @property {string} [dislay_name]
 * @property {number} [quantity]
 * @property {string} [state]
 * @property {string} [text]
 */

/**
 * @typedef Identifier
 * @property {string} [alu]
 * @property {string} [ean]
 * @property {string} [isbn]
 * @property {string} [sku_code]
 * @property {string} [upc]
 */

/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [error]
 * @property {string} [message]
 * @property {string} [shipment_id]
 * @property {number} [status]
 */

/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} [affiliate_bag_ids] - Affiliate Bag Ids to clear cache
 *   of shipment Ids mapped to it
 * @property {string[]} [bag_ids] - Bag Ids to clear cache of shipment Ids mapped to it
 * @property {string[]} [shipment_ids] - Shipment Ids to clear cache
 */

/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */

/**
 * @typedef InvoiceInfo
 * @property {string} [credit_note_id]
 * @property {string} [external_invoice_id]
 * @property {string} [invoice_url]
 * @property {string} [label_url]
 * @property {Object} [links]
 * @property {string} [store_invoice_id]
 * @property {string} [updated_date]
 */

/**
 * @typedef Item
 * @property {Attributes} attributes
 * @property {string} [branch_url]
 * @property {string} brand
 * @property {number} brand_id
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} [code]
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {string} [gender]
 * @property {string[]} image
 * @property {number} item_id
 * @property {string[]} [l1_category]
 * @property {number} [l1_category_id]
 * @property {string[]} [l2_category]
 * @property {number} [l2_category_id]
 * @property {number} [l3_category]
 * @property {string} [l3_category_name]
 * @property {string} [last_updated_at]
 * @property {Object} [meta]
 * @property {string} name
 * @property {string} size
 * @property {string} slug_key
 * @property {string} [webstore_product_url]
 */

/**
 * @typedef ItemCriterias
 * @property {number[]} [item_brand]
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef LineItem
 * @property {Charge[]} [charges]
 * @property {string} [custom_message]
 * @property {string} [external_line_id]
 * @property {Object} [meta]
 * @property {number} [quantity]
 * @property {string} seller_identifier
 */

/**
 * @typedef LocationDetails
 * @property {ArticleDetails[]} articles
 * @property {number} fulfillment_id
 * @property {string} fulfillment_type
 */

/**
 * @typedef LockData
 * @property {string} [lock_message]
 * @property {boolean} [locked]
 * @property {boolean} [mto]
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */

/**
 * @typedef Meta
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [identifiers]
 * @property {ReturnConfig1} [return_config]
 * @property {string} [size]
 * @property {string} [uid]
 */

/**
 * @typedef OrderBags
 * @property {AffiliateBagsDetails} [affiliate_bag_details]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {OrderBagArticle} [article]
 * @property {BagConfigs} [bag_configs]
 * @property {number} bag_id
 * @property {OrderBrandName} [brand]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {CurrentStatus} [current_status]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {string} [display_name]
 * @property {string} [entity_type]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {string} [group_id]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [identifier]
 * @property {boolean} [is_parent]
 * @property {PlatformItem} [item]
 * @property {number} [line_number]
 * @property {Object} [meta]
 * @property {Object} [parent_promo_bags]
 * @property {BagPaymentMethods[]} [payment_methods]
 * @property {Prices} [prices]
 * @property {number} [quantity]
 * @property {string} [seller_identifier]
 */

/**
 * @typedef OrderBrandName
 * @property {string} [brand_name]
 * @property {number} [company]
 * @property {string} [created_on]
 * @property {number} id
 * @property {string} [logo]
 * @property {string} [modified_on]
 */

/**
 * @typedef OrderConfig
 * @property {Affiliate} affiliate
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [article_lookup]
 * @property {string} [bag_end_state]
 * @property {boolean} [create_user]
 * @property {string} [store_lookup]
 */

/**
 * @typedef OrderData
 * @property {string} fynd_order_id
 * @property {Object} [meta]
 * @property {string} order_date
 * @property {Object} [payment_methods]
 * @property {Prices} [prices]
 * @property {TaxDetails} [tax_details]
 */

/**
 * @typedef OrderDetails
 * @property {string} [created_at]
 * @property {string} [fynd_order_id]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [affiliate_id]
 * @property {string} [cod_charges]
 * @property {string} fynd_order_id
 * @property {Object} [meta]
 * @property {string} [order_date]
 * @property {string} [order_value]
 * @property {string} [ordering_channel]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [source]
 * @property {Object} [tax_details]
 */

/**
 * @typedef OrderDetailsResponse
 * @property {OrderData} [order]
 * @property {PlatformShipment[]} [shipments]
 * @property {boolean} success
 */

/**
 * @typedef OrderInfo
 * @property {string} [affiliate_order_id]
 * @property {AffiliateBag[]} bags
 * @property {OrderUser} billing_address
 * @property {number} cod_charges
 * @property {string} [coupon]
 * @property {number} delivery_charges
 * @property {number} discount
 * @property {Object} items
 * @property {OrderPriority} [order_priority]
 * @property {number} order_value
 * @property {Object} [payment]
 * @property {string} payment_mode
 * @property {ShipmentData} [shipment]
 * @property {OrderUser} shipping_address
 * @property {UserData} user
 */

/**
 * @typedef OrderingStoreDetails
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [code]
 * @property {string} [contact_person]
 * @property {string} [country]
 * @property {number} [id]
 * @property {Object} [meta]
 * @property {string} [phone]
 * @property {string} [pincode]
 * @property {string} [state]
 * @property {string} [store_name]
 */

/**
 * @typedef OrderItemDataUpdates
 * @property {Object} [data]
 */

/**
 * @typedef OrderListingResponse
 * @property {PlatformOrderItems[]} [items]
 * @property {string} [lane]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {boolean} [success]
 * @property {number} [total_count]
 */

/**
 * @typedef OrderMeta
 * @property {BillingStaffDetails} [billing_staff_details]
 * @property {number} [cart_id]
 * @property {string} [cart_object_id]
 * @property {string} [comment]
 * @property {string} [company_logo]
 * @property {string} [currency_symbol]
 * @property {string} [customer_note]
 * @property {string} [employee_id]
 * @property {Object} [extra_meta]
 * @property {Object[]} [files]
 * @property {number} [mongo_cart_id]
 * @property {string[]} [order_child_entities]
 * @property {string} [order_platform]
 * @property {Object[]} [order_tags]
 * @property {string} [order_type]
 * @property {number} [ordering_store]
 * @property {string} [payment_type]
 * @property {PlatformUserDetails} [platform_user_details]
 * @property {Object} [staff]
 * @property {TransactionData} [transaction_data]
 */

/**
 * @typedef OrderPriority
 * @property {string} [affiliate_priority_code]
 * @property {number} [fulfilment_priority]
 * @property {string} [fulfilment_priority_text]
 */

/**
 * @typedef OrderStatus
 * @property {string} end_date
 * @property {number} mobile
 * @property {FyndOrderIdList[]} [order_details]
 * @property {string} start_date
 */

/**
 * @typedef OrderStatusData
 * @property {string[]} [errors]
 * @property {OrderDetails} order_details
 * @property {ShipmentDetail[]} [shipment_details]
 */

/**
 * @typedef OrderStatusResult
 * @property {OrderStatusData[]} [result]
 * @property {string} success
 */

/**
 * @typedef OrderUser
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} city
 * @property {string} country
 * @property {string} email
 * @property {string} first_name
 * @property {string} last_name
 * @property {number} mobile
 * @property {number} phone
 * @property {string} pincode
 * @property {string} state
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_id] - Affiliate ID
 * @property {string} [affiliate_shipment_id] - Affiliate Shipment ID
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef PageDetails
 * @property {number} [current] - Current page number
 * @property {boolean} [has_next] - If next page contains any result
 * @property {number} item_total - Total count of the results present in the
 *   requested filter
 * @property {number} [size] - Page size
 * @property {string} [type] - Type of the page
 */

/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */

/**
 * @typedef PaymentMethod
 * @property {number} amount
 * @property {string} collect_by
 * @property {Object} [meta]
 * @property {string} mode
 * @property {string} name
 * @property {string} refund_by
 * @property {Object} [transaction_data]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [collect_by]
 * @property {string} [mode]
 * @property {string} [refund_by]
 */

/**
 * @typedef PDFLinks
 * @property {string} [b2b]
 * @property {string} [credit_note_url]
 * @property {string} [delivery_challan_a4]
 * @property {string} [invoice]
 * @property {string} [invoice_a4]
 * @property {string} [invoice_a6]
 * @property {string} [invoice_export]
 * @property {string} [invoice_pos]
 * @property {string} invoice_type
 * @property {string} [label]
 * @property {string} [label_a4]
 * @property {string} [label_a6]
 * @property {string} [label_export]
 * @property {string} [label_pos]
 * @property {string} label_type
 * @property {string} [po_invoice]
 */

/**
 * @typedef PhoneDetails
 * @property {number} [country_code]
 * @property {string} [number]
 */

/**
 * @typedef PlatformArticleAttributes
 * @property {string} [currency]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [display]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [address_category]
 * @property {string} [address_type]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [area]
 * @property {string} [city]
 * @property {string} [contact_person]
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [phone]
 * @property {string} [pincode]
 * @property {string} [state]
 * @property {string} [updated_at]
 * @property {string} [version]
 */

/**
 * @typedef PlatformItem
 * @property {PlatformArticleAttributes} [attributes]
 * @property {string} [branch_url]
 * @property {string} [brand]
 * @property {number} [brand_id]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} [code]
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {number} [id]
 * @property {string[]} [image]
 * @property {string[]} [images]
 * @property {string[]} [l1_category]
 * @property {string[]} [l2_category]
 * @property {number} [l3_category]
 * @property {string} [l3_category_name]
 * @property {string} [last_updated_at]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string} [size]
 * @property {string} [slug_key]
 */

/**
 * @typedef PlatformOrderItems
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {PlatformChannel} [channel]
 * @property {Object} [meta]
 * @property {string} [order_created_time]
 * @property {string} [order_id]
 * @property {number} [order_value]
 * @property {string} [payment_mode]
 * @property {PlatformShipment[]} [shipments]
 * @property {number} [total_order_value]
 * @property {UserDataInfo} [user_info]
 */

/**
 * @typedef PlatformOrderUpdate
 * @property {string} order_id
 */

/**
 * @typedef PlatformShipment
 * @property {AffiliateDetails} [affiliate_details]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {OrderBags[]} [bags]
 * @property {UserDetailsData} [billing_details]
 * @property {boolean} [can_update_dimension]
 * @property {CompanyDetails} [company_details]
 * @property {Object} [coupon]
 * @property {string} [credit_note_id]
 * @property {string} [custom_message]
 * @property {Object[]} [custom_meta]
 * @property {UserDetailsData} [delivery_details]
 * @property {Object} [delivery_slot]
 * @property {boolean} [dp_assignment]
 * @property {DPDetailsData} [dp_details]
 * @property {boolean} [enable_dp_tracking]
 * @property {string} [estimated_sla_time]
 * @property {string} [forward_shipment_id]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {number} [fulfilment_priority]
 * @property {GSTDetailsData} [gst_details]
 * @property {InvoiceInfo} [invoice]
 * @property {string} [invoice_id]
 * @property {boolean} [is_dp_assign_enabled]
 * @property {boolean} [is_self_ship]
 * @property {string} [journey_type]
 * @property {boolean} [lock_status]
 * @property {Object} [meta]
 * @property {string} [mode_of_payment]
 * @property {string} [operational_status]
 * @property {OrderDetailsData} [order]
 * @property {OrderingStoreDetails} [ordering_store]
 * @property {string} [packaging_type]
 * @property {Object} [payment_methods]
 * @property {string} [payment_mode]
 * @property {ShipmentPayments} [payments]
 * @property {Object} [pdf_links]
 * @property {string} [picked_date]
 * @property {string} [platform_logo]
 * @property {string} [previous_shipment_id]
 * @property {Prices} [prices]
 * @property {string} [priority_text]
 * @property {PlatformDeliveryAddress} [rto_address]
 * @property {string} [shipment_created_at]
 * @property {ShipmentDetails} [shipment_details]
 * @property {string} shipment_id
 * @property {string[]} [shipment_images]
 * @property {number} [shipment_quantity]
 * @property {string} [shipment_status]
 * @property {number} [shipment_update_time]
 * @property {ShipmentStatusData} [status]
 * @property {number} [total_bags]
 * @property {number} [total_items]
 * @property {TrackingList[]} [tracking_list]
 * @property {UserDataInfo} [user]
 * @property {string} [user_agent]
 * @property {string} [vertical]
 */

/**
 * @typedef PlatformShipmentReasonsResponse
 * @property {Reason[]} [reasons]
 * @property {boolean} [success]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {Object} [meta]
 * @property {PlatformTrack[]} [results]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [account_name]
 * @property {string} [awb]
 * @property {string} [last_location_recieved_at]
 * @property {Object} [meta]
 * @property {string} [raw_status]
 * @property {string} [reason]
 * @property {string} [shipment_type]
 * @property {string} [status]
 * @property {string} [updated_at]
 * @property {string} [updated_time]
 */

/**
 * @typedef PlatformUserDetails
 * @property {string} [platform_user_employee_code]
 * @property {string} [platform_user_first_name]
 * @property {string} [platform_user_id]
 * @property {string} [platform_user_last_name]
 */

/**
 * @typedef PointBlankOtpData
 * @property {string} [message]
 * @property {number} [mobile]
 * @property {string} [request_id]
 * @property {number} [resend_timer]
 */

/**
 * @typedef PostActivityHistory
 * @property {PostHistoryData} data
 * @property {PostHistoryFilters[]} filters
 */

/**
 * @typedef PostHistoryData
 * @property {string} message
 * @property {string} user_name
 */

/**
 * @typedef PostHistoryDict
 * @property {PostActivityHistory} activity_history
 */

/**
 * @typedef PostHistoryFilters
 * @property {string} [identifier]
 * @property {string} [line_number]
 * @property {string} shipment_id
 */

/**
 * @typedef PostShipmentHistory
 * @property {PostHistoryDict[]} [activity_history]
 */

/**
 * @typedef Prices
 * @property {number} [amount_paid]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [brand_calculated_amount]
 * @property {number} [cashback]
 * @property {number} [cashback_applied]
 * @property {number} [cod_charges]
 * @property {number} [coupon_effective_discount]
 * @property {number} [coupon_value]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [fynd_credits]
 * @property {number} [gift_price]
 * @property {number} [pm_price_split]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {number} [promotion_effective_discount]
 * @property {number} [refund_amount]
 * @property {number} [refund_credit]
 * @property {number} [tax_collected_at_source]
 * @property {number} [transfer_price]
 * @property {number} [value_of_good]
 */

/**
 * @typedef ProcessingDates
 * @property {string} [confirm_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [dispatch_after_date]
 * @property {string} [dispatch_by_date]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [pack_by_date]
 */

/**
 * @typedef Products
 * @property {string} [identifier] - Product/Bag Article/Item Identifier
 * @property {number} [line_number] - Product/Bag Line number for the
 *   Product/Bag Identifier
 * @property {number} [quantity]
 */

/**
 * @typedef ProductsDataUpdates
 * @property {Object} [data]
 * @property {ProductsDataUpdatesFilters[]} [filters] - Filter for the Product/Bag
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {string} [identifier] - Product/Bag Article/Item Identifier
 * @property {number} [line_number] - Product/Bag Line number for the
 *   Product/Bag Identifier
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters]
 */

/**
 * @typedef ProductsReasonsData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {string} [identifier] - Product/Bag Article/Item Identifier
 * @property {number} [line_number] - Product/Bag Line number for the
 *   Product/Bag Identifier
 * @property {number} [quantity]
 */

/**
 * @typedef QuestionSet
 * @property {string} [display_name]
 * @property {number} [id]
 */

/**
 * @typedef Reason
 * @property {string} [display_name]
 * @property {number} [id]
 * @property {string[]} [qc_type]
 * @property {QuestionSet[]} [question_set]
 */

/**
 * @typedef ReasonsData
 * @property {EntitiesReasons[]} [entities]
 * @property {ProductsReasons[]} [products]
 */

/**
 * @typedef RefundModeConfigRequestPayload
 * @property {string} affiliate_id
 * @property {string} [customer_mobile_number]
 * @property {string} fynd_order_id
 * @property {number} seller_id
 */

/**
 * @typedef RefundModeConfigResponsePayload
 * @property {RefundModeInfo[]} data
 * @property {boolean} success
 */

/**
 * @typedef RefundModeInfo
 * @property {string} [display_name]
 * @property {boolean} [is_active]
 * @property {RefundOption[]} [options]
 * @property {string} [slug]
 */

/**
 * @typedef RefundOption
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef ReplacementDetails
 * @property {string} [original_affiliate_order_id]
 * @property {string} [replacement_type]
 */

/**
 * @typedef ResponseDetail
 * @property {string[]} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef ReturnConfig
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */

/**
 * @typedef ReturnConfig1
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */

/**
 * @typedef RoleBaseStateTransitionMapping
 * @property {string[]} [next_statuses]
 * @property {boolean} [success]
 */

/**
 * @typedef SendSmsPayload
 * @property {number} bag_id - Bag_id for the activity history track
 * @property {SmsDataPayload} [data] - SMS Data
 * @property {string} slug - Slug name for the template mapped in pointblank
 */

/**
 * @typedef SendUserMobileOTP
 * @property {string} [country_code]
 * @property {string} mobile
 */

/**
 * @typedef SendUserMobileOtpResponse
 * @property {PointBlankOtpData} [data]
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef Shipment
 * @property {string} [external_shipment_id]
 * @property {LineItem[]} line_items
 * @property {number} location_id
 * @property {Object} [meta]
 * @property {string} [order_type]
 * @property {number} [priority]
 * @property {ProcessingDates} [processing_dates]
 */

/**
 * @typedef ShipmentBagReasons
 * @property {BagReasons[]} [reasons]
 * @property {boolean} [success]
 */

/**
 * @typedef ShipmentConfig
 * @property {string} action
 * @property {string} identifier
 * @property {string} journey
 * @property {LocationDetails} [location_details]
 * @property {string} payment_mode
 * @property {ShipmentDetails[]} shipment
 * @property {string} source
 * @property {string} to_pincode
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef ShipmentDetail
 * @property {number[]} [bag_list]
 * @property {number} id
 * @property {Meta} meta
 * @property {string} [remarks]
 * @property {string} [shipment_id]
 * @property {string} [status]
 */

/**
 * @typedef ShipmentDetails
 * @property {Object} [action_to_status]
 * @property {string} affiliate_shipment_id
 * @property {ArticleDetails[]} articles
 * @property {string} [box_type]
 * @property {number} [dp_id]
 * @property {number} fulfillment_id
 * @property {string} [lock_message]
 * @property {boolean} [lock_status]
 * @property {Object} [meta]
 * @property {number} shipments
 */

/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} activity_history
 * @property {boolean} [success]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {string} [message]
 * @property {PlatformShipment[]} [shipments]
 * @property {boolean} success
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {ShipmentItem[]} [items]
 * @property {string} [lane]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {boolean} [success]
 * @property {number} [total_count]
 */

/**
 * @typedef ShipmentItem
 * @property {BagUnit[]} [bags]
 * @property {boolean} [can_process]
 * @property {ShipmentListingChannel} [channel]
 * @property {string} [customer_note]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {string} [display_name]
 * @property {string} [estimated_sla_time]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {string} [invoice_id]
 * @property {boolean} [lock_status]
 * @property {Object} [meta]
 * @property {string} [mode_of_payment]
 * @property {string} [order_date]
 * @property {string} order_id
 * @property {string} [ordering_channnel]
 * @property {Object} [payment_methods]
 * @property {string} [payment_mode]
 * @property {string} [previous_shipment_id]
 * @property {Prices} [prices]
 * @property {string} shipment_created_at
 * @property {string} [shipment_id]
 * @property {ShipmentStatus} [shipment_status]
 * @property {string} [status_created_at]
 * @property {number} total_bags
 * @property {UserDataInfo} [user]
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} [address]
 * @property {string} [brand_store_tags]
 * @property {string} [city]
 * @property {string} code
 * @property {number} id
 * @property {string} [location_type]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string} [phone]
 * @property {string} [pincode]
 * @property {string} [state]
 * @property {string} [store_email]
 */

/**
 * @typedef ShipmentItemMeta
 * @property {string} [activity_comment]
 * @property {boolean} [assign_dp_from_sb]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {Object} [bag_weight]
 * @property {Object} [debug_info]
 * @property {Object} [dp_options]
 * @property {string} [dp_sort_key]
 * @property {Object} [ewaybill_info]
 * @property {string[]} [existing_dp_list]
 * @property {Object} [external]
 * @property {Formatted} [formatted]
 * @property {string} [fulfilment_priority_text]
 * @property {boolean} [is_international]
 * @property {boolean} [is_self_ship]
 * @property {LockData} [lock_data]
 * @property {string} [order_type]
 * @property {string} [packaging_name]
 * @property {string} [parent_dp_id]
 * @property {Object[]} [pdf_media]
 * @property {boolean} [same_store_available]
 * @property {number} [shipment_chargeable_weight]
 * @property {ShipmentTags[]} [shipment_tags]
 * @property {number} [shipment_volumetric_weight]
 * @property {number} [shipment_weight]
 * @property {string} [shipping_zone]
 * @property {number} [sla]
 * @property {string} [store_invoice_updated_date]
 * @property {Object[]} [tags]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {number} [weight]
 */

/**
 * @typedef ShipmentListingBrand
 * @property {string} [created_on]
 * @property {string} [logo]
 * @property {string} [logo_base64]
 * @property {string} [name]
 */

/**
 * @typedef ShipmentListingChannel
 * @property {string} [channel_shipment_id]
 * @property {boolean} [is_affiliate]
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef ShipmentMeta
 * @property {boolean} [assign_dp_from_sb]
 * @property {boolean} [auto_trigger_dp_assignment_acf]
 * @property {string} [awb_number]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {Object} [b2c_buyer_details]
 * @property {Object} [bag_weight]
 * @property {string} [box_type]
 * @property {DebugInfo} [debug_info]
 * @property {Dimensions} [dimension]
 * @property {string} [dp_id]
 * @property {string} [dp_name]
 * @property {Object} [dp_options]
 * @property {string} [dp_sort_key]
 * @property {string} [due_date]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [estimated_delivery_date]
 * @property {Object} [ewaybill_info]
 * @property {Object} [external]
 * @property {Formatted} [formatted]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {string} [fulfilment_priority_text]
 * @property {boolean} [is_self_ship]
 * @property {LockData} [lock_data]
 * @property {string} [marketplace_store_id]
 * @property {string} [order_type]
 * @property {string} [packaging_name]
 * @property {string} [parent_dp_id]
 * @property {string} [po_number]
 * @property {string} [refund_to]
 * @property {string} [return_affiliate_order_id]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [return_awb_number]
 * @property {Object} [return_details]
 * @property {number} [return_store_node]
 * @property {boolean} same_store_available
 * @property {ShipmentTags[]} [shipment_tags]
 * @property {number} [shipment_volumetric_weight]
 * @property {number} [shipment_weight]
 * @property {string} [store_invoice_updated_date]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [tracking_url]
 * @property {number} weight
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [logo]
 * @property {string} [mode]
 * @property {string} [source]
 */

/**
 * @typedef ShipmentReasonsResponse
 * @property {string} message
 * @property {ShipmentResponseReasons[]} reasons
 * @property {boolean} success
 */

/**
 * @typedef ShipmentResponseReasons
 * @property {string} [reason]
 * @property {number} [reason_id]
 */

/**
 * @typedef ShipmentsRequest
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier - Shipment ID
 * @property {Products[]} [products] - Product/Bag to be updated
 * @property {ReasonsData} [reasons]
 */

/**
 * @typedef ShipmentsResponse
 * @property {string} [code]
 * @property {string} [exception]
 * @property {Object} [final_state]
 * @property {string} [identifier]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */

/**
 * @typedef ShipmentStatus
 * @property {string[]} [bag_list]
 * @property {string} [created_at]
 * @property {string} [current_shipment_status]
 * @property {Object} [meta]
 * @property {string} [shipment_id]
 * @property {number} [shipment_status_id]
 * @property {string} status
 * @property {string} [status_created_at]
 * @property {string} title
 */

/**
 * @typedef ShipmentStatusData
 * @property {string[]} [bag_list]
 * @property {string} [created_at]
 * @property {string} [current_shipment_status]
 * @property {string} [display_name]
 * @property {number} [id]
 * @property {Object} [meta]
 * @property {string} [shipment_id]
 * @property {string} [status]
 */

/**
 * @typedef ShipmentTags
 * @property {string} [display_text]
 * @property {string} [entity_type]
 * @property {string} [slug]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef ShippingInfo
 * @property {string} [address_type]
 * @property {string} address1
 * @property {string} [address2]
 * @property {string} [alternate_email]
 * @property {string} [alternate_mobile_number]
 * @property {string} city
 * @property {string} country
 * @property {string} [country_code]
 * @property {string} [customer_code]
 * @property {string} [external_customer_code]
 * @property {string} first_name
 * @property {string} [floor_no]
 * @property {string} [gender]
 * @property {Object} [geo_location]
 * @property {string} [house_no]
 * @property {string} [landmark]
 * @property {string} [last_name]
 * @property {string} [middle_name]
 * @property {string} pincode
 * @property {string} primary_email
 * @property {string} primary_mobile_number
 * @property {string} [shipping_type]
 * @property {Object[]} [slot]
 * @property {string} state
 * @property {string} [state_code]
 * @property {string} [title]
 */

/**
 * @typedef SmsDataPayload
 * @property {number} [amount_paid] - Data mapped in Communication template: amount_paid
 * @property {string} [brand_name] - Data mapped in Communication template: brand_name
 * @property {string} country_code - Country code for SMS
 * @property {string} [customer_name] - Data mapped in Communication template:
 *   customer_name
 * @property {string} message - Message to be send in SMS
 * @property {string} order_id - OrderId
 * @property {string} [payment_mode] - Data mapped in Communication template: payment_mode
 * @property {number} phone_number - Phone number for communication
 * @property {number} shipment_id - ShipmentId
 */

/**
 * @typedef StatuesRequest
 * @property {string} [exclude_bags_next_state] - State to be change for
 *   Remaining Bag/Products
 * @property {ShipmentsRequest[]} [shipments]
 * @property {boolean} [split_shipment] - Flag to split shipment
 * @property {string} [status]
 */

/**
 * @typedef StatuesResponse
 * @property {ShipmentsResponse[]} [shipments]
 */

/**
 * @typedef Store
 * @property {string} address1
 * @property {string} [address2]
 * @property {number} [alohomora_user_id]
 * @property {Object} [brand_id]
 * @property {string[]} [brand_store_tags]
 * @property {string} city
 * @property {string} [code]
 * @property {number} company_id
 * @property {string} contact_person
 * @property {string} country
 * @property {string} created_at
 * @property {string} fulfillment_channel
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_enabled_for_recon]
 * @property {number} latitude
 * @property {string} location_type
 * @property {string} login_username
 * @property {number} longitude
 * @property {string} [mall_area]
 * @property {string} [mall_name]
 * @property {StoreMeta} meta
 * @property {string} name
 * @property {string} [order_integration_id]
 * @property {number} [packaging_material_count]
 * @property {number} [parent_store_id]
 * @property {number} phone
 * @property {string} pincode
 * @property {string} s_id
 * @property {string} state
 * @property {string} [store_active_from]
 * @property {StoreAddress} [store_address_json]
 * @property {string} store_email
 * @property {string} [updated_at]
 * @property {string} [vat_no]
 */

/**
 * @typedef StoreAddress
 * @property {string} address_category
 * @property {string} address_type
 * @property {string} address1
 * @property {string} [address2]
 * @property {string} [area]
 * @property {string} city
 * @property {string} contact_person
 * @property {string} country
 * @property {string} country_code
 * @property {string} created_at
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} phone
 * @property {number} pincode
 * @property {string} state
 * @property {string} updated_at
 * @property {string} [version]
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef StoreEinvoice
 * @property {boolean} enabled
 * @property {string} [password]
 * @property {string} [user]
 * @property {string} [username]
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
 * @typedef StoreMeta
 * @property {Object} [additional_contact_details]
 * @property {string} display_name
 * @property {StoreDocuments} [documents]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {Object} [ewaybill_portal_details]
 * @property {StoreGstCredentials} gst_credentials
 * @property {string} [gst_number]
 * @property {string[]} [notification_emails]
 * @property {Object} [product_return_config]
 * @property {string} stage
 * @property {Object[]} [timing]
 */

/**
 * @typedef StoreReassign
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_order_id]
 * @property {number} [bag_id]
 * @property {string} [fynd_order_id]
 * @property {string} [item_id]
 * @property {string} [mongo_article_id]
 * @property {number[]} [reason_ids]
 * @property {string} [set_id]
 * @property {number} store_id
 */

/**
 * @typedef StoreReassignResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef SubLane
 * @property {Object[]} [actions]
 * @property {number} [index]
 * @property {string} [text]
 * @property {number} [total_items]
 * @property {string} [value]
 */

/**
 * @typedef SuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef SuperLane
 * @property {SubLane[]} [options]
 * @property {string} text
 * @property {number} [total_items]
 * @property {string} value
 */

/**
 * @typedef Tax
 * @property {Object} amount
 * @property {Object[]} [breakup]
 * @property {string} name
 * @property {number} rate
 */

/**
 * @typedef TaxDetails
 * @property {string} [gstin]
 * @property {string} [pan_no]
 */

/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 * @property {string} [pan_no]
 */

/**
 * @typedef TrackingList
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 * @property {string} status
 * @property {string} text
 * @property {string} [time]
 */

/**
 * @typedef TransactionData
 * @property {number} [amount_paid]
 * @property {string} [currency]
 * @property {string} [entity]
 * @property {string} [payment_id]
 * @property {string} [status]
 * @property {string} [terminal_id]
 * @property {string} [transaction_id]
 * @property {string} [unique_reference_number]
 */

/**
 * @typedef UpdatePackagingDimensionsPayload
 * @property {string} current_status
 * @property {Dimension[]} dimension
 * @property {string} shipment_id
 */

/**
 * @typedef UpdatePackagingDimensionsResponse
 * @property {string} [message]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} action - Expected Actions: [lock, unlock, check]
 * @property {string} action_type - Expected action_type: [complete,
 *   operational, financial]
 * @property {Entities[]} entities - Shipment/Entity
 * @property {string} entity_type - Expected entity_type: [bags, shipments]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {CheckResponse[]} [check_response] - Entity Lock Status, If the
 *   action input as 'check'
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [force_transition] - Force Transition
 * @property {boolean} [lock_after_transition] - Lock Shipment After Transition
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task] - To Run Status Update as a background Task
 * @property {boolean} [unlock_before_transition] - Unlock Shipment After Transition
 */

/**
 * @typedef UpdateShipmentStatusResponseBody
 * @property {StatuesResponse[]} [statuses]
 */

/**
 * @typedef UploadConsent
 * @property {string} consent_url
 * @property {string} manifest_id
 */

/**
 * @typedef URL
 * @property {string} [url]
 */

/**
 * @typedef UserData
 * @property {OrderUser} [billing_user]
 * @property {OrderUser} [shipping_user]
 */

/**
 * @typedef UserDataInfo
 * @property {string} [avis_user_id]
 * @property {string} [email]
 * @property {string} [external_customer_id]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [user_oid]
 */

/**
 * @typedef UserDetailsData
 * @property {string} address
 * @property {string} [address_type]
 * @property {string} [address1]
 * @property {string} [area]
 * @property {string} city
 * @property {string} country
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {string} name
 * @property {string} phone
 * @property {string} pincode
 * @property {string} state
 */

/**
 * @typedef UserInfo
 * @property {string} first_name
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {string} primary_email
 * @property {string} primary_mobile_number
 * @property {string} [user_id]
 * @property {string} [user_type]
 */

/**
 * @typedef VerifyMobileOTP
 * @property {string} fynd_order_id
 * @property {VerifyOtpData} otp_data
 */

/**
 * @typedef VerifyOtpData
 * @property {string} mobile
 * @property {number} otp_code
 * @property {string} request_id
 */

/**
 * @typedef VerifyOtpResponse
 * @property {VerifyOtpResponseData} [data]
 * @property {string} [message]
 * @property {number} [status]
 * @property {boolean} [success]
 */

/**
 * @typedef VerifyOtpResponseData
 * @property {string} [country_code]
 * @property {string} [fynd_order_id]
 * @property {string} [message]
 * @property {string} [mobile]
 */

/**
 * @typedef Weight
 * @property {boolean} [is_default]
 * @property {number} [shipping]
 * @property {string} [unit]
 */

class OrderPlatformModel {
  /** @returns {ActionInfo} */
  static ActionInfo() {
    return Joi.object({
      description: Joi.string().allow("").required(),
      display_text: Joi.string().allow("").required(),
      id: Joi.number().required(),
      slug: Joi.string().allow("").required(),
    });
  }

  /** @returns {AdvanceFilterInfo} */
  static AdvanceFilterInfo() {
    return Joi.object({
      action_centre: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      applied_filters: Joi.any().allow(null),
      filters: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      page: Joi.any().allow(null),
      processed: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      returned: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      unfulfilled: Joi.array().items(OrderPlatformModel.FiltersInfo()),
    });
  }

  /** @returns {Affiliate} */
  static Affiliate() {
    return Joi.object({
      config: OrderPlatformModel.AffiliateConfig(),
      id: Joi.string().allow("").required(),
      token: Joi.string().allow("").required(),
    });
  }

  /** @returns {AffiliateAppConfig} */
  static AffiliateAppConfig() {
    return Joi.object({
      created_at: Joi.string().allow("").required(),
      description: Joi.string().allow(""),
      id: Joi.string().allow("").required(),
      meta: Joi.array().items(OrderPlatformModel.AffiliateAppConfigMeta()),
      name: Joi.string().allow("").required(),
      owner: Joi.string().allow("").required(),
      secret: Joi.string().allow("").required(),
      token: Joi.string().allow("").required(),
      updated_at: Joi.string().allow("").required(),
    });
  }

  /** @returns {AffiliateAppConfigMeta} */
  static AffiliateAppConfigMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {AffiliateBag} */
  static AffiliateBag() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      affiliate_meta: Joi.any().required(),
      affiliate_store_id: Joi.string().allow("").required(),
      amount_paid: Joi.number().required(),
      avl_qty: Joi.number().required(),
      company_id: Joi.number().required(),
      delivery_charge: Joi.number().required(),
      discount: Joi.number().required(),
      fynd_store_id: Joi.string().allow("").required(),
      hsn_code_id: Joi.string().allow("").required(),
      identifier: Joi.any().required(),
      item_id: Joi.number().required(),
      item_size: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      pdf_links: OrderPlatformModel.MarketPlacePdf(),
      price_effective: Joi.number().required(),
      price_marked: Joi.number().required(),
      quantity: Joi.number().required(),
      seller_identifier: Joi.string().allow("").required(),
      sku: Joi.string().allow("").required(),
      store_id: Joi.number().required(),
      transfer_price: Joi.number().required(),
      unit_price: Joi.number().required(),
    });
  }

  /** @returns {AffiliateBagDetails} */
  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),
      affiliate_meta: OrderPlatformModel.AffiliateMeta().required(),
      affiliate_order_id: Joi.string().allow("").required(),
      employee_discount: Joi.number().allow(null),
      loyalty_discount: Joi.number().allow(null),
    });
  }

  /** @returns {AffiliateBagsDetails} */
  static AffiliateBagsDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").allow(null),
      coupon_code: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {AffiliateConfig} */
  static AffiliateConfig() {
    return Joi.object({
      app: OrderPlatformModel.AffiliateAppConfig(),
      app_company_id: Joi.number().allow(null),
      inventory: OrderPlatformModel.AffiliateInventoryConfig(),
    });
  }

  /** @returns {AffiliateDetails} */
  static AffiliateDetails() {
    return Joi.object({
      ad_id: Joi.string().allow("").allow(null),
      affiliate_bag_id: Joi.string().allow("").required(),
      affiliate_id: Joi.string().allow("").allow(null),
      affiliate_meta: OrderPlatformModel.AffiliateMeta().required(),
      affiliate_order_id: Joi.string().allow("").required(),
      affiliate_shipment_id: Joi.string().allow("").required(),
      affiliate_store_id: Joi.string().allow("").required(),
      company_affiliate_tag: Joi.string().allow("").allow(null),
      config: OrderPlatformModel.AffiliateConfig(),
      pdf_links: OrderPlatformModel.PDFLinks(),
      shipment_meta: OrderPlatformModel.ShipmentMeta().required(),
    });
  }

  /** @returns {AffiliateInventoryArticleAssignmentConfig} */
  static AffiliateInventoryArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
    });
  }

  /** @returns {AffiliateInventoryConfig} */
  static AffiliateInventoryConfig() {
    return Joi.object({
      article_assignment: OrderPlatformModel.AffiliateInventoryArticleAssignmentConfig(),
      inventory: OrderPlatformModel.AffiliateInventoryStoreConfig(),
      logistics: OrderPlatformModel.AffiliateInventoryLogisticsConfig(),
      order: OrderPlatformModel.AffiliateInventoryOrderConfig(),
      payment: OrderPlatformModel.AffiliateInventoryPaymentConfig(),
    });
  }

  /** @returns {AffiliateInventoryLogisticsConfig} */
  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
    });
  }

  /** @returns {AffiliateInventoryOrderConfig} */
  static AffiliateInventoryOrderConfig() {
    return Joi.object({
      force_reassignment: Joi.boolean(),
    });
  }

  /** @returns {AffiliateInventoryPaymentConfig} */
  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),
      source: Joi.string().allow(""),
    });
  }

  /** @returns {AffiliateInventoryStoreConfig} */
  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
    });
  }

  /** @returns {AffiliateMeta} */
  static AffiliateMeta() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),
      channel_order_id: Joi.string().allow("").allow(null),
      channel_shipment_id: Joi.string().allow("").allow(null),
      coupon_code: Joi.string().allow("").allow(null),
      customer_selling_price: Joi.number().allow(null),
      due_date: Joi.string().allow("").allow(null),
      employee_discount: Joi.number().allow(null),
      fulfilment_priority: Joi.number().allow(null),
      is_priority: Joi.boolean().allow(null),
      is_serial_number_required: Joi.boolean().allow(null),
      loyalty_discount: Joi.number().allow(null),
      marketplace_invoice_id: Joi.string().allow("").allow(null),
      order_item_id: Joi.string().allow("").allow(null),
      quantity: Joi.number().allow(null),
      replacement_details: OrderPlatformModel.ReplacementDetails(),
      size_level_total_qty: Joi.number().allow(null),
    });
  }

  /** @returns {AffiliateStoreIdMapping} */
  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),
      store_id: Joi.number().required(),
    });
  }

  /** @returns {AnnouncementResponse} */
  static AnnouncementResponse() {
    return Joi.object({
      company_id: Joi.number(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      from_datetime: Joi.string().allow(""),
      id: Joi.number().required(),
      logo_url: Joi.string().allow(""),
      platform_id: Joi.string().allow(""),
      platform_name: Joi.string().allow(""),
      title: Joi.string().allow(""),
      to_datetime: Joi.string().allow(""),
    });
  }

  /** @returns {AnnouncementsResponse} */
  static AnnouncementsResponse() {
    return Joi.object({
      announcements: Joi.array().items(
        OrderPlatformModel.AnnouncementResponse()
      ),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {AppliedPromos} */
  static AppliedPromos() {
    return Joi.object({
      amount: Joi.number().allow(null),
      article_quantity: Joi.number().allow(null),
      buy_rules: Joi.array().items(OrderPlatformModel.BuyRules()),
      discount_rules: Joi.array().items(OrderPlatformModel.DiscountRules()),
      mrp_promotion: Joi.boolean().allow(null),
      promo_id: Joi.string().allow("").allow(null),
      promotion_name: Joi.string().allow("").allow(null),
      promotion_type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Article} */
  static Article() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      a_set: Joi.any().allow(null),
      child_details: Joi.any().allow(null),
      code: Joi.string().allow("").allow(null),
      currency: Joi.any().allow(null),
      dimensions: OrderPlatformModel.Dimensions(),
      esp_modified: Joi.boolean().allow(null),
      identifiers: Joi.any().required(),
      is_set: Joi.boolean().allow(null),
      raw_meta: Joi.string().allow("").allow(null),
      return_config: OrderPlatformModel.ReturnConfig(),
      seller_identifier: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
      weight: OrderPlatformModel.Weight(),
    });
  }

  /** @returns {ArticleDetails} */
  static ArticleDetails() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      attributes: Joi.any().required(),
      brand_id: Joi.number().required(),
      category: Joi.any().required(),
      dimension: Joi.any().required(),
      quantity: Joi.number().required(),
      status: Joi.any().allow(null),
      weight: Joi.any().required(),
    });
  }

  /** @returns {AttachOrderUser} */
  static AttachOrderUser() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),
      otp_data: OrderPlatformModel.AttachUserOtpData().required(),
      user_info: OrderPlatformModel.AttachUserInfo().required(),
    });
  }

  /** @returns {AttachOrderUserResponse} */
  static AttachOrderUserResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {AttachUserInfo} */
  static AttachUserInfo() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      first_name: Joi.string().allow("").required(),
      last_name: Joi.string().allow("").required(),
      mobile: Joi.string().allow("").required(),
    });
  }

  /** @returns {AttachUserOtpData} */
  static AttachUserOtpData() {
    return Joi.object({
      request_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {Attributes} */
  static Attributes() {
    return Joi.object({
      brand_name: Joi.string().allow("").allow(null),
      essential: Joi.string().allow("").allow(null),
      gender: Joi.array().items(Joi.string().allow("")),
      marketer_address: Joi.string().allow("").allow(null),
      marketer_name: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      primary_color: Joi.string().allow("").allow(null),
      primary_color_hex: Joi.string().allow("").allow(null),
      primary_material: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {B2BPODetails} */
  static B2BPODetails() {
    return Joi.object({
      docker_number: Joi.string().allow("").allow(null),
      item_base_price: Joi.number().allow(null),
      partial_can_ret: Joi.boolean().allow(null),
      po_line_amount: Joi.number().allow(null),
      po_tax_amount: Joi.number().allow(null),
      total_gst_percentage: Joi.number().allow(null),
    });
  }

  /** @returns {BagConfigs} */
  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),
      can_be_cancelled: Joi.boolean().required(),
      enable_tracking: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      is_customer_return_allowed: Joi.boolean().required(),
      is_returnable: Joi.boolean().required(),
    });
  }

  /** @returns {BagDetailsPlatformResponse} */
  static BagDetailsPlatformResponse() {
    return Joi.object({
      affiliate_bag_details: OrderPlatformModel.AffiliateBagDetails(),
      affiliate_details: OrderPlatformModel.AffiliateDetails(),
      applied_promos: Joi.array().items(Joi.any()),
      article: OrderPlatformModel.Article(),
      article_details: OrderPlatformModel.ArticleDetails(),
      bag_status: Joi.array().items(OrderPlatformModel.BagStatusHistory()),
      bag_status_history: OrderPlatformModel.BagStatusHistory(),
      bag_update_time: Joi.number().allow(null),
      brand: OrderPlatformModel.Brand(),
      current_operational_status: OrderPlatformModel.BagStatusHistory(),
      current_status: OrderPlatformModel.BagStatusHistory(),
      dates: OrderPlatformModel.Dates(),
      display_name: Joi.string().allow("").allow(null),
      entity_type: Joi.string().allow("").allow(null),
      financial_breakup: Joi.array().items(
        OrderPlatformModel.FinancialBreakup()
      ),
      gst_details: OrderPlatformModel.GSTDetailsData(),
      id: Joi.number().allow(null),
      identifier: Joi.string().allow("").allow(null),
      item: OrderPlatformModel.Item(),
      journey_type: Joi.string().allow("").allow(null),
      line_number: Joi.number().allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      no_of_bags_order: Joi.number().allow(null),
      operational_status: Joi.string().allow("").allow(null),
      order_integration_id: Joi.string().allow("").allow(null),
      ordering_store: OrderPlatformModel.Store(),
      original_bag_list: Joi.array().items(Joi.number()),
      parent_promo_bags: Joi.any().allow(null),
      prices: OrderPlatformModel.Prices(),
      qc_required: Joi.any(),
      quantity: Joi.number().allow(null),
      reasons: Joi.array().items(Joi.any()),
      restore_coupon: Joi.boolean().allow(null),
      restore_promos: Joi.any().allow(null),
      seller_identifier: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").allow(null),
      status: OrderPlatformModel.BagReturnableCancelableStatus1(),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BagGST} */
  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number().allow(null),
      cgst_gst_fee: Joi.string().allow("").allow(null),
      cgst_tax_percentage: Joi.number().allow(null),
      gst_fee: Joi.number().allow(null),
      gst_tag: Joi.string().allow("").allow(null),
      gst_tax_percentage: Joi.number().allow(null),
      gstin_code: Joi.string().allow("").allow(null),
      hsn_code: Joi.string().allow("").allow(null),
      hsn_code_id: Joi.string().allow("").allow(null),
      igst_gst_fee: Joi.string().allow("").allow(null),
      igst_tax_percentage: Joi.number().allow(null),
      is_default_hsn_code: Joi.boolean().allow(null),
      sgst_gst_fee: Joi.string().allow("").allow(null),
      sgst_tax_percentage: Joi.number().allow(null),
      tax_collected_at_source: Joi.number().allow(null),
      value_of_good: Joi.number().allow(null),
    });
  }

  /** @returns {BagGSTDetails} */
  static BagGSTDetails() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),
      cgst_gst_fee: Joi.string().allow("").required(),
      cgst_tax_percentage: Joi.number().required(),
      gst_fee: Joi.number().required(),
      gst_tag: Joi.string().allow("").required(),
      gst_tax_percentage: Joi.number().required(),
      gstin_code: Joi.string().allow("").allow(null),
      hsn_code: Joi.string().allow("").required(),
      hsn_code_id: Joi.string().allow("").required(),
      igst_gst_fee: Joi.string().allow("").required(),
      igst_tax_percentage: Joi.number().required(),
      is_default_hsn_code: Joi.boolean().allow(null),
      sgst_gst_fee: Joi.string().allow("").required(),
      sgst_tax_percentage: Joi.number().required(),
      tax_collected_at_source: Joi.number().required(),
      value_of_good: Joi.number().required(),
    });
  }

  /** @returns {BagMeta} */
  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderPlatformModel.B2BPODetails(),
      custom_json: Joi.any().allow(null),
      custom_message: Joi.string().allow("").allow(null),
      docket_number: Joi.string().allow("").allow(null),
      extra_meta: Joi.any().allow(null),
      gift_card: OrderPlatformModel.GiftCard(),
      group_id: Joi.string().allow("").allow(null),
      partial_can_ret: Joi.boolean().allow(null),
    });
  }

  /** @returns {BagPaymentMethods} */
  static BagPaymentMethods() {
    return Joi.object({
      amount: Joi.number().allow(null),
      mode: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BagReasonMeta} */
  static BagReasonMeta() {
    return Joi.object({
      show_text_area: Joi.boolean(),
    });
  }

  /** @returns {BagReasons} */
  static BagReasons() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.number(),
      meta: OrderPlatformModel.BagReasonMeta(),
      qc_type: Joi.array().items(Joi.string().allow("")),
      question_set: Joi.array().items(OrderPlatformModel.QuestionSet()),
      reasons: Joi.array().items(Joi.link("#BagReasons")),
    }).id("BagReasons");
  }

  /** @returns {BagReturnableCancelableStatus} */
  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),
      enable_tracking: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      is_customer_return_allowed: Joi.boolean().required(),
      is_returnable: Joi.boolean().required(),
    });
  }

  /** @returns {BagReturnableCancelableStatus1} */
  static BagReturnableCancelableStatus1() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),
      enable_tracking: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      is_customer_return_allowed: Joi.boolean().required(),
      is_returnable: Joi.boolean().required(),
    });
  }

  /** @returns {Bags} */
  static Bags() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),
      affiliate_order_id: Joi.string().allow(""),
      bag_id: Joi.number(),
      is_locked: Joi.boolean(),
    });
  }

  /** @returns {BagsPage} */
  static BagsPage() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      page_type: Joi.string().allow("").required(),
      size: Joi.number().required(),
    });
  }

  /** @returns {BagStateMapper} */
  static BagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow("").allow(null),
      app_facing: Joi.boolean().allow(null),
      app_state_name: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").required(),
      id: Joi.number().required(),
      is_active: Joi.boolean().allow(null),
      journey_type: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      notify_customer: Joi.boolean().allow(null),
      state_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {BagStateTransitionMap} */
  static BagStateTransitionMap() {
    return Joi.object({
      affiliate: Joi.any(),
      fynd: Joi.any(),
    });
  }

  /** @returns {BagStatusHistory} */
  static BagStatusHistory() {
    return Joi.object({
      app_display_name: Joi.string().allow("").allow(null),
      bag_id: Joi.number().allow(null),
      bag_state_mapper: OrderPlatformModel.BagStateMapper(),
      bsh_id: Joi.number().allow(null),
      created_at: Joi.string().allow("").allow(null),
      delivery_awb_number: Joi.string().allow("").allow(null),
      delivery_partner_id: Joi.number().allow(null),
      display_name: Joi.string().allow("").allow(null),
      forward: Joi.boolean().allow(null),
      kafka_sync: Joi.boolean().allow(null),
      reasons: Joi.array().items(Joi.any()),
      shipment_id: Joi.string().allow("").allow(null),
      state_id: Joi.number().allow(null),
      state_type: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").required(),
      store_id: Joi.number().allow(null),
      updated_at: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BagUnit} */
  static BagUnit() {
    return Joi.object({
      affiliate_bag_details: OrderPlatformModel.AffiliateBagDetails(),
      article: OrderPlatformModel.Article(),
      bag_expiry_date: Joi.string().allow("").allow(null),
      bag_id: Joi.number().required(),
      bag_status: Joi.array().items(OrderPlatformModel.BagStatusHistory()),
      bag_type: Joi.string().allow("").allow(null),
      brand: OrderPlatformModel.ShipmentListingBrand(),
      can_cancel: Joi.boolean().allow(null),
      can_return: Joi.boolean().allow(null),
      current_operational_status: OrderPlatformModel.BagStatusHistory().required(),
      current_status: OrderPlatformModel.BagStatusHistory().required(),
      dates: OrderPlatformModel.Dates(),
      display_name: Joi.string().allow("").allow(null),
      entity_type: Joi.string().allow("").allow(null),
      financial_breakup: Joi.array()
        .items(OrderPlatformModel.FinancialBreakup())
        .required(),
      gst: OrderPlatformModel.GSTDetailsData(),
      item: OrderPlatformModel.PlatformItem(),
      line_number: Joi.number().allow(null),
      meta: Joi.any().allow(null),
      prices: OrderPlatformModel.Prices(),
      product_quantity: Joi.number().required(),
      reasons: Joi.array().items(Joi.any()),
      size: Joi.string().allow("").allow(null),
      status: OrderPlatformModel.BagReturnableCancelableStatus().required(),
    });
  }

  /** @returns {BaseResponse} */
  static BaseResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {BillingInfo} */
  static BillingInfo() {
    return Joi.object({
      address1: Joi.string().allow("").required(),
      address2: Joi.string().allow(""),
      alternate_email: Joi.string().allow(""),
      alternate_mobile_number: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      country_code: Joi.string().allow(""),
      customer_code: Joi.string().allow(""),
      external_customer_code: Joi.string().allow(""),
      first_name: Joi.string().allow("").required(),
      floor_no: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      house_no: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      middle_name: Joi.string().allow(""),
      pincode: Joi.string().allow("").required(),
      primary_email: Joi.string().allow("").required(),
      primary_mobile_number: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
      state_code: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {BillingStaffDetails} */
  static BillingStaffDetails() {
    return Joi.object({
      employee_code: Joi.string().allow("").allow(null),
      first_name: Joi.string().allow("").allow(null),
      last_name: Joi.string().allow("").allow(null),
      staff_id: Joi.number().allow(null),
      user: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Brand} */
  static Brand() {
    return Joi.object({
      brand_id: Joi.number().required(),
      brand_name: Joi.string().allow("").required(),
      company: Joi.string().allow("").required(),
      created_on: Joi.number().allow(null),
      credit_note_allowed: Joi.boolean().allow(null),
      credit_note_expiry_days: Joi.number().allow(null),
      invoice_prefix: Joi.string().allow("").allow(null),
      is_virtual_invoice: Joi.boolean().allow(null),
      logo: Joi.string().allow("").allow(null),
      modified_on: Joi.number().allow(null),
      pickup_location: Joi.string().allow("").allow(null),
      script_last_ran: Joi.string().allow("").allow(null),
      start_date: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {BulkActionTemplate} */
  static BulkActionTemplate() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.string().allow(""),
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

  /** @returns {BulkReportsDownloadFailedResponse} */
  static BulkReportsDownloadFailedResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
      status: Joi.boolean(),
    });
  }

  /** @returns {BulkReportsDownloadRequest} */
  static BulkReportsDownloadRequest() {
    return Joi.object({
      custom_filters_for_lane: Joi.any(),
      custom_headers: Joi.string().allow(""),
      entities: Joi.array().items(Joi.string().allow("")),
      filter_type: Joi.string().allow(""),
      from_date: Joi.string().allow(""),
      is_cross_company_enabled: Joi.boolean(),
      lane_type: Joi.string().allow(""),
      report_type: Joi.string().allow(""),
      store_ids: Joi.array().items(Joi.string().allow("")),
      to_date: Joi.string().allow(""),
    });
  }

  /** @returns {BulkReportsDownloadResponse} */
  static BulkReportsDownloadResponse() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {BuyerDetails} */
  static BuyerDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null).required(),
      ajio_site_id: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").required(),
      gstin: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      pincode: Joi.number().required(),
      state: Joi.string().allow("").required(),
    });
  }

  /** @returns {BuyRules} */
  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any().allow(null),
      item_criteria: OrderPlatformModel.ItemCriterias(),
    });
  }

  /** @returns {Charge} */
  static Charge() {
    return Joi.object({
      amount: Joi.any().required(),
      code: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      tax: OrderPlatformModel.Tax(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {CheckResponse} */
  static CheckResponse() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      affiliate_shipment_id: Joi.string().allow(""),
      bags: Joi.array().items(OrderPlatformModel.Bags()),
      is_bag_locked: Joi.boolean(),
      is_shipment_locked: Joi.boolean(),
      lock_status: Joi.string().allow("").allow(null),
      original_filter: OrderPlatformModel.OriginalFilter(),
      shipment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {Click2CallResponse} */
  static Click2CallResponse() {
    return Joi.object({
      call_id: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {CompanyDetails} */
  static CompanyDetails() {
    return Joi.object({
      address: Joi.any().allow(null),
      company_cin: Joi.string().allow("").allow(null),
      company_contact: OrderPlatformModel.ContactDetails(),
      company_gst: Joi.string().allow("").allow(null),
      company_id: Joi.number().allow(null),
      company_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ContactDetails} */
  static ContactDetails() {
    return Joi.object({
      emails: Joi.array().items(Joi.string().allow("")),
      phone: Joi.array().items(OrderPlatformModel.PhoneDetails()),
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

  /** @returns {CreateChannelConfig} */
  static CreateChannelConfig() {
    return Joi.object({
      dp_configuration: OrderPlatformModel.DpConfiguration(),
      location_reassignment: Joi.boolean(),
      lock_states: Joi.array().items(Joi.string().allow("")),
      logo_url: Joi.any(),
      payment_info: OrderPlatformModel.CreateChannelPaymentInfo(),
      shipment_assignment: Joi.string().allow(""),
    });
  }

  /** @returns {CreateChannelConfigData} */
  static CreateChannelConfigData() {
    return Joi.object({
      config_data: OrderPlatformModel.CreateChannelConfig(),
    });
  }

  /** @returns {CreateChannelConfigResponse} */
  static CreateChannelConfigResponse() {
    return Joi.object({
      acknowledged: Joi.boolean(),
      is_inserted: Joi.boolean(),
      is_upserted: Joi.boolean(),
    });
  }

  /** @returns {CreateChannelConifgErrorResponse} */
  static CreateChannelConifgErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
    });
  }

  /** @returns {CreateChannelPaymentInfo} */
  static CreateChannelPaymentInfo() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),
      payment_methods: Joi.array().items(OrderPlatformModel.PaymentMethods()),
      source: Joi.string().allow(""),
    });
  }

  /** @returns {CreateOrderAPI} */
  static CreateOrderAPI() {
    return Joi.object({
      billing_info: OrderPlatformModel.BillingInfo().required(),
      charges: Joi.array().items(OrderPlatformModel.Charge()),
      config: Joi.any(),
      currency_info: Joi.any(),
      external_creation_date: Joi.string().allow(""),
      external_order_id: Joi.string().allow(""),
      meta: Joi.any(),
      payment_info: OrderPlatformModel.PaymentInfo().required(),
      shipments: Joi.array().items(OrderPlatformModel.Shipment()).required(),
      shipping_info: OrderPlatformModel.ShippingInfo().required(),
      tax_info: OrderPlatformModel.TaxInfo(),
      user_info: OrderPlatformModel.UserInfo(),
    });
  }

  /** @returns {CreateOrderErrorReponse} */
  static CreateOrderErrorReponse() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      exception: Joi.string().allow("").allow(null),
      info: Joi.any(),
      message: Joi.string().allow("").required(),
      meta: Joi.string().allow("").allow(null),
      request_id: Joi.string().allow("").allow(null),
      stack_trace: Joi.string().allow("").allow(null),
      status: Joi.number().required(),
    });
  }

  /** @returns {CreateOrderPayload} */
  static CreateOrderPayload() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").required(),
      order_config: OrderPlatformModel.OrderConfig().required(),
      order_info: OrderPlatformModel.OrderInfo().required(),
    });
  }

  /** @returns {CreateOrderResponse} */
  static CreateOrderResponse() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {CreditBalanceInfo} */
  static CreditBalanceInfo() {
    return Joi.object({
      customer_mobile_number: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      total_credited_balance: Joi.string().allow(""),
    });
  }

  /** @returns {CurrentStatus} */
  static CurrentStatus() {
    return Joi.object({
      bag_id: Joi.number().allow(null),
      bag_state_mapper: OrderPlatformModel.BagStateMapper(),
      created_at: Joi.string().allow("").allow(null),
      delivery_awb_number: Joi.string().allow("").allow(null),
      delivery_partner_id: Joi.number().allow(null),
      id: Joi.number().required(),
      kafka_sync: Joi.boolean().allow(null),
      shipment_id: Joi.string().allow("").allow(null),
      state_id: Joi.number().allow(null),
      state_type: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").allow(null),
      store_id: Joi.number().allow(null),
      updated_at: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {DataUpdates} */
  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderPlatformModel.EntitiesDataUpdates()),
      order_item_status: Joi.array().items(
        OrderPlatformModel.OrderItemDataUpdates()
      ),
      products: Joi.array().items(OrderPlatformModel.ProductsDataUpdates()),
    });
  }

  /** @returns {Dates} */
  static Dates() {
    return Joi.object({
      delivery_date: Joi.string().allow("").allow(null),
      order_created: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {DebugInfo} */
  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Dimension} */
  static Dimension() {
    return Joi.object({
      height: Joi.string().allow(""),
      length: Joi.number(),
      packaging_type: Joi.string().allow(""),
      weight: Joi.string().allow(""),
      width: Joi.number(),
    });
  }

  /** @returns {Dimensions} */
  static Dimensions() {
    return Joi.object({
      height: Joi.number().allow(null),
      is_default: Joi.boolean().allow(null),
      length: Joi.number().allow(null),
      unit: Joi.string().allow("").allow(null),
      width: Joi.number().allow(null),
    });
  }

  /** @returns {DiscountRules} */
  static DiscountRules() {
    return Joi.object({
      type: Joi.string().allow("").allow(null),
      value: Joi.number().allow(null),
    });
  }

  /** @returns {DispatchManifest} */
  static DispatchManifest() {
    return Joi.object({
      manifest_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {Document} */
  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),
      legal_name: Joi.string().allow("").required(),
      url: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").required(),
      verified: Joi.boolean().required(),
    });
  }

  /** @returns {DpConfiguration} */
  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  /** @returns {DPDetailsData} */
  static DPDetailsData() {
    return Joi.object({
      awb_no: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").allow(null),
      eway_bill_id: Joi.string().allow("").allow(null),
      gst_tag: Joi.string().allow("").allow(null),
      id: Joi.number().allow(null),
      name: Joi.string().allow("").allow(null),
      pincode: Joi.string().allow("").allow(null),
      track_url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {EinvoiceInfo} */
  static EinvoiceInfo() {
    return Joi.object({
      credit_note: Joi.any().allow(null),
      invoice: Joi.any().allow(null),
    });
  }

  /** @returns {EInvoicePortalDetails} */
  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow("").allow(null),
      user: Joi.string().allow("").allow(null),
      username: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {EInvoiceResponseData} */
  static EInvoiceResponseData() {
    return Joi.object({
      ack_dt: Joi.string().allow(""),
      ack_no: Joi.string().allow(""),
      irn: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      shipment_id: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
      timeout: Joi.number(),
      timeout_unit: Joi.string().allow(""),
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
      message: Joi.string().allow(""),
      response_data: Joi.array()
        .items(OrderPlatformModel.EInvoiceResponseData())
        .required(),
      success: Joi.boolean(),
      success_count: Joi.number().required(),
    });
  }

  /** @returns {EInvoiceRetryShipmentData} */
  static EInvoiceRetryShipmentData() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {Entities} */
  static Entities() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),
      affiliate_id: Joi.string().allow(""),
      affiliate_order_id: Joi.string().allow(""),
      affiliate_shipment_id: Joi.string().allow(""),
      id: Joi.string().allow(""),
      reason_text: Joi.string().allow("").required(),
    });
  }

  /** @returns {EntitiesDataUpdates} */
  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),
      filters: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {EntitiesReasons} */
  static EntitiesReasons() {
    return Joi.object({
      data: OrderPlatformModel.EntityReasonData(),
      filters: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {EntityReasonData} */
  static EntityReasonData() {
    return Joi.object({
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
    });
  }

  /** @returns {Error} */
  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {ErrorDetail} */
  static ErrorDetail() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {ErrorResponse} */
  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow("").required(),
      error_trace: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null).required(),
      status: Joi.number().allow(null),
      success: Joi.boolean().allow(null),
    });
  }

  /** @returns {FetchCreditBalanceRequestPayload} */
  static FetchCreditBalanceRequestPayload() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").required(),
      customer_mobile_number: Joi.string().allow("").required(),
      seller_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {FetchCreditBalanceResponsePayload} */
  static FetchCreditBalanceResponsePayload() {
    return Joi.object({
      data: OrderPlatformModel.CreditBalanceInfo().required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {FileResponse} */
  static FileResponse() {
    return Joi.object({
      cdn: OrderPlatformModel.URL(),
      file_name: Joi.string().allow(""),
    });
  }

  /** @returns {FilterInfoOption} */
  static FilterInfoOption() {
    return Joi.object({
      min_search_size: Joi.number().allow(null),
      name: Joi.string().allow("").allow(null),
      placeholder_text: Joi.string().allow("").allow(null),
      show_ui: Joi.boolean().allow(null),
      text: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {FiltersInfo} */
  static FiltersInfo() {
    return Joi.object({
      options: Joi.array().items(OrderPlatformModel.FilterInfoOption()),
      placeholder_text: Joi.string().allow("").allow(null),
      required: Joi.boolean().allow(null),
      text: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {FiltersResponse} */
  static FiltersResponse() {
    return Joi.object({
      advance_filter: OrderPlatformModel.AdvanceFilterInfo(),
      global_filter: Joi.array().items(OrderPlatformModel.FiltersInfo()),
    });
  }

  /** @returns {FinancialBreakup} */
  static FinancialBreakup() {
    return Joi.object({
      added_to_fynd_cash: Joi.boolean().required(),
      amount_paid: Joi.number().required(),
      amount_paid_roundoff: Joi.number().allow(null),
      brand_calculated_amount: Joi.number().required(),
      cashback: Joi.number().required(),
      cashback_applied: Joi.number().required(),
      cod_charges: Joi.number().required(),
      coupon_effective_discount: Joi.number().required(),
      coupon_value: Joi.number().required(),
      delivery_charge: Joi.number().required(),
      discount: Joi.number().required(),
      fynd_credits: Joi.number().required(),
      gst_fee: Joi.number().required(),
      gst_tag: Joi.string().allow("").required(),
      gst_tax_percentage: Joi.number().required(),
      hsn_code: Joi.string().allow("").required(),
      identifiers: OrderPlatformModel.Identifier().required(),
      item_name: Joi.string().allow("").required(),
      price_effective: Joi.number().required(),
      price_marked: Joi.number().required(),
      promotion_effective_discount: Joi.number().required(),
      refund_credit: Joi.number().required(),
      size: Joi.string().allow("").required(),
      tax_collected_at_source: Joi.number().allow(null),
      total_units: Joi.number().required(),
      transfer_price: Joi.number().required(),
      value_of_good: Joi.number().required(),
    });
  }

  /** @returns {Formatted} */
  static Formatted() {
    return Joi.object({
      max: Joi.string().allow("").allow(null),
      min: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {FulfillingStore} */
  static FulfillingStore() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
      code: Joi.string().allow("").required(),
      contact_person: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      fulfillment_channel: Joi.string().allow("").required(),
      id: Joi.number().required(),
      meta: Joi.any().required(),
      phone: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
      store_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {FyndOrderIdList} */
  static FyndOrderIdList() {
    return Joi.object({
      fynd_order_id: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {GeneratePosOrderReceiptResponse} */
  static GeneratePosOrderReceiptResponse() {
    return Joi.object({
      customer_cn_receipt: Joi.string().allow(""),
      invoice_receipt: Joi.string().allow(""),
      merchant_cn_receipt: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      payment_receipt: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {GetActionsResponse} */
  static GetActionsResponse() {
    return Joi.object({
      permissions: Joi.array().items(OrderPlatformModel.ActionInfo()),
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

  /** @returns {GiftCard} */
  static GiftCard() {
    return Joi.object({
      display_text: Joi.string().allow("").allow(null),
      gift_message: Joi.string().allow("").allow(null),
      gift_price: Joi.number().allow(null),
      is_gift_applied: Joi.boolean().allow(null),
    });
  }

  /** @returns {GSTDetailsData} */
  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),
      cgst_gst_fee: Joi.number().allow(null),
      cgst_tax_percentage: Joi.number().allow(null),
      gst_fee: Joi.number().required(),
      gst_tag: Joi.string().allow("").allow(null),
      gst_tax_percentage: Joi.number().allow(null),
      gstin_code: Joi.string().allow("").allow(null),
      hsn_code: Joi.string().allow("").allow(null),
      hsn_code_id: Joi.string().allow("").allow(null),
      igst_gst_fee: Joi.number().allow(null),
      igst_tax_percentage: Joi.number().allow(null),
      is_default_hsn_code: Joi.boolean().allow(null),
      sgst_gst_fee: Joi.number().allow(null),
      sgst_tax_percentage: Joi.number().allow(null),
      tax_collected_at_source: Joi.number().required(),
      value_of_good: Joi.number().required(),
    });
  }

  /** @returns {HistoryDict} */
  static HistoryDict() {
    return Joi.object({
      assigned_agent: Joi.string().allow(""),
      bag_id: Joi.number(),
      createdat: Joi.string().allow("").required(),
      display_message: Joi.string().allow(""),
      l1_detail: Joi.string().allow(""),
      l2_detail: Joi.string().allow(""),
      l3_detail: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      meta: OrderPlatformModel.HistoryMeta(),
      ticket_id: Joi.string().allow(""),
      ticket_url: Joi.string().allow(""),
      type: Joi.string().allow("").required(),
      user: Joi.string().allow("").required(),
    });
  }

  /** @returns {HistoryMeta} */
  static HistoryMeta() {
    return Joi.object({
      activity_comment: Joi.string().allow("").allow(null),
      activity_type: Joi.string().allow("").allow(null),
      billsec: Joi.string().allow("").allow(null),
      call_id: Joi.string().allow("").allow(null),
      caller: Joi.string().allow("").allow(null),
      callerid: Joi.string().allow("").allow(null),
      channel_type: Joi.string().allow("").allow(null),
      duration: Joi.string().allow("").allow(null),
      endtime: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
      reason: OrderPlatformModel.HistoryReason(),
      receiver: Joi.string().allow("").allow(null),
      recipient: Joi.string().allow("").allow(null),
      recordpath: Joi.string().allow("").allow(null),
      short_link: Joi.string().allow("").allow(null),
      slug: Joi.string().allow("").allow(null),
      starttime: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").allow(null),
      status1: Joi.string().allow("").allow(null),
      status2: Joi.string().allow("").allow(null),
      store_code: Joi.string().allow("").allow(null),
      store_id: Joi.number().allow(null),
      store_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {HistoryReason} */
  static HistoryReason() {
    return Joi.object({
      category: Joi.string().allow("").allow(null),
      code: Joi.number().allow(null),
      dislay_name: Joi.string().allow("").allow(null),
      quantity: Joi.number().allow(null),
      state: Joi.string().allow("").allow(null),
      text: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Identifier} */
  static Identifier() {
    return Joi.object({
      alu: Joi.string().allow("").allow(null),
      ean: Joi.string().allow("").allow(null),
      isbn: Joi.string().allow("").allow(null),
      sku_code: Joi.string().allow("").allow(null),
      upc: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {InvalidateShipmentCacheNestedResponse} */
  static InvalidateShipmentCacheNestedResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
      message: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      status: Joi.number(),
    });
  }

  /** @returns {InvalidateShipmentCachePayload} */
  static InvalidateShipmentCachePayload() {
    return Joi.object({
      affiliate_bag_ids: Joi.array().items(Joi.string().allow("")),
      bag_ids: Joi.array().items(Joi.string().allow("")),
      shipment_ids: Joi.array().items(Joi.string().allow("")),
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

  /** @returns {InvoiceInfo} */
  static InvoiceInfo() {
    return Joi.object({
      credit_note_id: Joi.string().allow("").allow(null),
      external_invoice_id: Joi.string().allow("").allow(null),
      invoice_url: Joi.string().allow("").allow(null),
      label_url: Joi.string().allow("").allow(null),
      links: Joi.object().pattern(/\S/, Joi.any()),
      store_invoice_id: Joi.string().allow("").allow(null),
      updated_date: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Item} */
  static Item() {
    return Joi.object({
      attributes: OrderPlatformModel.Attributes().required(),
      branch_url: Joi.string().allow("").allow(null),
      brand: Joi.string().allow("").required(),
      brand_id: Joi.number().required(),
      can_cancel: Joi.boolean().allow(null),
      can_return: Joi.boolean().allow(null),
      code: Joi.string().allow("").allow(null),
      color: Joi.string().allow("").allow(null),
      department_id: Joi.number().allow(null),
      gender: Joi.string().allow("").allow(null),
      image: Joi.array().items(Joi.string().allow("")).required(),
      item_id: Joi.number().required(),
      l1_category: Joi.array().items(Joi.string().allow("")),
      l1_category_id: Joi.number().allow(null),
      l2_category: Joi.array().items(Joi.string().allow("")),
      l2_category_id: Joi.number().allow(null),
      l3_category: Joi.number().allow(null),
      l3_category_name: Joi.string().allow("").allow(null),
      last_updated_at: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      name: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      slug_key: Joi.string().allow("").required(),
      webstore_product_url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ItemCriterias} */
  static ItemCriterias() {
    return Joi.object({
      item_brand: Joi.array().items(Joi.number()),
    });
  }

  /** @returns {LaneConfigResponse} */
  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderPlatformModel.SuperLane()),
    });
  }

  /** @returns {LineItem} */
  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderPlatformModel.Charge()),
      custom_message: Joi.string().allow(""),
      external_line_id: Joi.string().allow(""),
      meta: Joi.any(),
      quantity: Joi.number(),
      seller_identifier: Joi.string().allow("").required(),
    });
  }

  /** @returns {LocationDetails} */
  static LocationDetails() {
    return Joi.object({
      articles: Joi.array()
        .items(OrderPlatformModel.ArticleDetails())
        .required(),
      fulfillment_id: Joi.number().required(),
      fulfillment_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {LockData} */
  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow("").allow(null),
      locked: Joi.boolean().allow(null),
      mto: Joi.boolean().allow(null),
    });
  }

  /** @returns {MarketPlacePdf} */
  static MarketPlacePdf() {
    return Joi.object({
      invoice: Joi.string().allow("").allow(null),
      label: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      kafka_emission_status: Joi.number(),
      state_manager_used: Joi.string().allow(""),
    });
  }

  /** @returns {OrderBagArticle} */
  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any().allow(null),
      return_config: OrderPlatformModel.ReturnConfig1(),
      size: Joi.string().allow("").allow(null),
      uid: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {OrderBags} */
  static OrderBags() {
    return Joi.object({
      affiliate_bag_details: OrderPlatformModel.AffiliateBagsDetails(),
      applied_promos: Joi.array().items(OrderPlatformModel.AppliedPromos()),
      article: OrderPlatformModel.OrderBagArticle(),
      bag_configs: OrderPlatformModel.BagConfigs(),
      bag_id: Joi.number().required(),
      brand: OrderPlatformModel.OrderBrandName(),
      can_cancel: Joi.boolean().allow(null),
      can_return: Joi.boolean().allow(null),
      current_status: OrderPlatformModel.CurrentStatus(),
      delivery_address: OrderPlatformModel.PlatformDeliveryAddress(),
      display_name: Joi.string().allow("").allow(null),
      entity_type: Joi.string().allow("").allow(null),
      financial_breakup: OrderPlatformModel.FinancialBreakup(),
      group_id: Joi.string().allow("").allow(null),
      gst_details: OrderPlatformModel.GSTDetailsData(),
      identifier: Joi.string().allow("").allow(null),
      is_parent: Joi.boolean().allow(null),
      item: OrderPlatformModel.PlatformItem(),
      line_number: Joi.number().allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      parent_promo_bags: Joi.any().allow(null),
      payment_methods: Joi.array().items(
        OrderPlatformModel.BagPaymentMethods()
      ),
      prices: OrderPlatformModel.Prices(),
      quantity: Joi.number().allow(null),
      seller_identifier: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {OrderBrandName} */
  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow("").allow(null),
      company: Joi.number().allow(null),
      created_on: Joi.string().allow("").allow(null),
      id: Joi.number().required(),
      logo: Joi.string().allow("").allow(null),
      modified_on: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {OrderConfig} */
  static OrderConfig() {
    return Joi.object({
      affiliate: OrderPlatformModel.Affiliate().required(),
      affiliate_store_id_mapping: Joi.array()
        .items(OrderPlatformModel.AffiliateStoreIdMapping())
        .required(),
      article_lookup: Joi.string().allow(""),
      bag_end_state: Joi.string().allow(""),
      create_user: Joi.boolean(),
      store_lookup: Joi.string().allow(""),
    });
  }

  /** @returns {OrderData} */
  static OrderData() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      order_date: Joi.string().allow("").required(),
      payment_methods: Joi.any().allow(null),
      prices: OrderPlatformModel.Prices(),
      tax_details: OrderPlatformModel.TaxDetails(),
    });
  }

  /** @returns {OrderDetails} */
  static OrderDetails() {
    return Joi.object({
      created_at: Joi.string().allow(""),
      fynd_order_id: Joi.string().allow(""),
    });
  }

  /** @returns {OrderDetailsData} */
  static OrderDetailsData() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").allow(null),
      cod_charges: Joi.string().allow("").allow(null),
      fynd_order_id: Joi.string().allow("").required(),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      order_date: Joi.string().allow("").allow(null),
      order_value: Joi.string().allow("").allow(null),
      ordering_channel: Joi.string().allow("").allow(null),
      ordering_channel_logo: Joi.any().allow(null),
      source: Joi.string().allow("").allow(null),
      tax_details: Joi.any().allow(null),
    });
  }

  /** @returns {OrderDetailsResponse} */
  static OrderDetailsResponse() {
    return Joi.object({
      order: OrderPlatformModel.OrderData(),
      shipments: Joi.array().items(OrderPlatformModel.PlatformShipment()),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {OrderInfo} */
  static OrderInfo() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),
      bags: Joi.array().items(OrderPlatformModel.AffiliateBag()).required(),
      billing_address: OrderPlatformModel.OrderUser().required(),
      cod_charges: Joi.number().required(),
      coupon: Joi.string().allow("").allow(null),
      delivery_charges: Joi.number().required(),
      discount: Joi.number().required(),
      items: Joi.any().required(),
      order_priority: OrderPlatformModel.OrderPriority(),
      order_value: Joi.number().required(),
      payment: Joi.any(),
      payment_mode: Joi.string().allow("").required(),
      shipment: OrderPlatformModel.ShipmentData(),
      shipping_address: OrderPlatformModel.OrderUser().required(),
      user: OrderPlatformModel.UserData().required(),
    });
  }

  /** @returns {OrderingStoreDetails} */
  static OrderingStoreDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
      code: Joi.string().allow("").allow(null),
      contact_person: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").allow(null),
      id: Joi.number().allow(null),
      meta: Joi.any().allow(null),
      phone: Joi.string().allow("").allow(null),
      pincode: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      store_name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {OrderItemDataUpdates} */
  static OrderItemDataUpdates() {
    return Joi.object({
      data: Joi.any(),
    });
  }

  /** @returns {OrderListingResponse} */
  static OrderListingResponse() {
    return Joi.object({
      items: Joi.array().items(OrderPlatformModel.PlatformOrderItems()),
      lane: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
      page: OrderPlatformModel.Page(),
      success: Joi.boolean().allow(null),
      total_count: Joi.number().allow(null),
    });
  }

  /** @returns {OrderMeta} */
  static OrderMeta() {
    return Joi.object({
      billing_staff_details: OrderPlatformModel.BillingStaffDetails(),
      cart_id: Joi.number().allow(null),
      cart_object_id: Joi.string().allow("").allow(null),
      comment: Joi.string().allow("").allow(null),
      company_logo: Joi.string().allow("").allow(null),
      currency_symbol: Joi.string().allow("").allow(null),
      customer_note: Joi.string().allow("").allow(null),
      employee_id: Joi.string().allow("").allow(null),
      extra_meta: Joi.any().allow(null),
      files: Joi.array().items(Joi.any()),
      mongo_cart_id: Joi.number().allow(null),
      order_child_entities: Joi.array().items(Joi.string().allow("")),
      order_platform: Joi.string().allow("").allow(null),
      order_tags: Joi.array().items(Joi.any().allow(null)),
      order_type: Joi.string().allow("").allow(null),
      ordering_store: Joi.number().allow(null),
      payment_type: Joi.string().allow("").allow(null),
      platform_user_details: OrderPlatformModel.PlatformUserDetails(),
      staff: Joi.any().allow(null),
      transaction_data: OrderPlatformModel.TransactionData(),
    });
  }

  /** @returns {OrderPriority} */
  static OrderPriority() {
    return Joi.object({
      affiliate_priority_code: Joi.string().allow("").allow(null),
      fulfilment_priority: Joi.number().allow(null),
      fulfilment_priority_text: Joi.string().allow(""),
    });
  }

  /** @returns {OrderStatus} */
  static OrderStatus() {
    return Joi.object({
      end_date: Joi.string().allow("").required(),
      mobile: Joi.number().required(),
      order_details: Joi.array().items(OrderPlatformModel.FyndOrderIdList()),
      start_date: Joi.string().allow("").required(),
    });
  }

  /** @returns {OrderStatusData} */
  static OrderStatusData() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),
      order_details: OrderPlatformModel.OrderDetails().required(),
      shipment_details: Joi.array().items(OrderPlatformModel.ShipmentDetail()),
    });
  }

  /** @returns {OrderStatusResult} */
  static OrderStatusResult() {
    return Joi.object({
      result: Joi.array().items(OrderPlatformModel.OrderStatusData()),
      success: Joi.string().allow("").required(),
    });
  }

  /** @returns {OrderUser} */
  static OrderUser() {
    return Joi.object({
      address1: Joi.string().allow("").allow(null),
      address2: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      first_name: Joi.string().allow("").required(),
      last_name: Joi.string().allow("").required(),
      mobile: Joi.number().required(),
      phone: Joi.number().required(),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    });
  }

  /** @returns {OriginalFilter} */
  static OriginalFilter() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {PageDetails} */
  static PageDetails() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      item_total: Joi.number().required(),
      size: Joi.number(),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {PaymentInfo} */
  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderPlatformModel.PaymentMethod()),
      primary_mode: Joi.string().allow("").required(),
    });
  }

  /** @returns {PaymentMethod} */
  static PaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),
      collect_by: Joi.string().allow("").required(),
      meta: Joi.any(),
      mode: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      refund_by: Joi.string().allow("").required(),
      transaction_data: Joi.any(),
    });
  }

  /** @returns {PaymentMethods} */
  static PaymentMethods() {
    return Joi.object({
      collect_by: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      refund_by: Joi.string().allow(""),
    });
  }

  /** @returns {PDFLinks} */
  static PDFLinks() {
    return Joi.object({
      b2b: Joi.string().allow("").allow(null),
      credit_note_url: Joi.string().allow("").allow(null),
      delivery_challan_a4: Joi.string().allow("").allow(null),
      invoice: Joi.string().allow("").allow(null),
      invoice_a4: Joi.string().allow("").allow(null),
      invoice_a6: Joi.string().allow("").allow(null),
      invoice_export: Joi.string().allow("").allow(null),
      invoice_pos: Joi.string().allow("").allow(null),
      invoice_type: Joi.string().allow("").required(),
      label: Joi.string().allow("").allow(null),
      label_a4: Joi.string().allow("").allow(null),
      label_a6: Joi.string().allow("").allow(null),
      label_export: Joi.string().allow("").allow(null),
      label_pos: Joi.string().allow("").allow(null),
      label_type: Joi.string().allow("").required(),
      po_invoice: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PhoneDetails} */
  static PhoneDetails() {
    return Joi.object({
      country_code: Joi.number().allow(null),
      number: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformArticleAttributes} */
  static PlatformArticleAttributes() {
    return Joi.object({
      currency: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformBreakupValues} */
  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformChannel} */
  static PlatformChannel() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformDeliveryAddress} */
  static PlatformDeliveryAddress() {
    return Joi.object({
      address_category: Joi.string().allow("").allow(null),
      address_type: Joi.string().allow("").allow(null),
      address1: Joi.string().allow("").allow(null),
      address2: Joi.string().allow("").allow(null),
      area: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
      contact_person: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").allow(null),
      created_at: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      landmark: Joi.string().allow("").allow(null),
      latitude: Joi.number().allow(null),
      longitude: Joi.number().allow(null),
      phone: Joi.string().allow("").allow(null),
      pincode: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      updated_at: Joi.string().allow("").allow(null),
      version: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformItem} */
  static PlatformItem() {
    return Joi.object({
      attributes: OrderPlatformModel.PlatformArticleAttributes(),
      branch_url: Joi.string().allow("").allow(null),
      brand: Joi.string().allow("").allow(null),
      brand_id: Joi.number().allow(null),
      can_cancel: Joi.boolean().allow(null),
      can_return: Joi.boolean().allow(null),
      code: Joi.string().allow("").allow(null),
      color: Joi.string().allow("").allow(null),
      department_id: Joi.number().allow(null),
      id: Joi.number().allow(null),
      image: Joi.array().items(Joi.string().allow("")),
      images: Joi.array().items(Joi.string().allow("")),
      l1_category: Joi.array().items(Joi.string().allow("")),
      l2_category: Joi.array().items(Joi.string().allow("")),
      l3_category: Joi.number().allow(null),
      l3_category_name: Joi.string().allow("").allow(null),
      last_updated_at: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      name: Joi.string().allow("").allow(null),
      size: Joi.string().allow("").allow(null),
      slug_key: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformOrderItems} */
  static PlatformOrderItems() {
    return Joi.object({
      breakup_values: Joi.array().items(
        OrderPlatformModel.PlatformBreakupValues()
      ),
      channel: OrderPlatformModel.PlatformChannel(),
      meta: Joi.any().allow(null),
      order_created_time: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").allow(null),
      order_value: Joi.number().allow(null),
      payment_mode: Joi.string().allow("").allow(null),
      shipments: Joi.array().items(OrderPlatformModel.PlatformShipment()),
      total_order_value: Joi.number().allow(null),
      user_info: OrderPlatformModel.UserDataInfo(),
    });
  }

  /** @returns {PlatformOrderUpdate} */
  static PlatformOrderUpdate() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {PlatformShipment} */
  static PlatformShipment() {
    return Joi.object({
      affiliate_details: OrderPlatformModel.AffiliateDetails(),
      bag_status_history: Joi.array().items(
        OrderPlatformModel.BagStatusHistory()
      ),
      bags: Joi.array().items(OrderPlatformModel.OrderBags()),
      billing_details: OrderPlatformModel.UserDetailsData(),
      can_update_dimension: Joi.boolean().allow(null),
      company_details: OrderPlatformModel.CompanyDetails(),
      coupon: Joi.any().allow(null),
      credit_note_id: Joi.string().allow("").allow(null),
      custom_message: Joi.string().allow("").allow(null),
      custom_meta: Joi.array().items(Joi.any()),
      delivery_details: OrderPlatformModel.UserDetailsData(),
      delivery_slot: Joi.any().allow(null),
      dp_assignment: Joi.boolean().allow(null),
      dp_details: OrderPlatformModel.DPDetailsData(),
      enable_dp_tracking: Joi.boolean().allow(null),
      estimated_sla_time: Joi.string().allow("").allow(null),
      forward_shipment_id: Joi.string().allow("").allow(null),
      fulfilling_store: OrderPlatformModel.FulfillingStore(),
      fulfilment_priority: Joi.number().allow(null),
      gst_details: OrderPlatformModel.GSTDetailsData(),
      invoice: OrderPlatformModel.InvoiceInfo(),
      invoice_id: Joi.string().allow("").allow(null),
      is_dp_assign_enabled: Joi.boolean().allow(null),
      is_self_ship: Joi.boolean().allow(null),
      journey_type: Joi.string().allow("").allow(null),
      lock_status: Joi.boolean().allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      mode_of_payment: Joi.string().allow("").allow(null),
      operational_status: Joi.string().allow("").allow(null),
      order: OrderPlatformModel.OrderDetailsData(),
      ordering_store: OrderPlatformModel.OrderingStoreDetails(),
      packaging_type: Joi.string().allow("").allow(null),
      payment_methods: Joi.any().allow(null),
      payment_mode: Joi.string().allow("").allow(null),
      payments: OrderPlatformModel.ShipmentPayments(),
      pdf_links: Joi.any(),
      picked_date: Joi.string().allow("").allow(null),
      platform_logo: Joi.string().allow("").allow(null),
      previous_shipment_id: Joi.string().allow("").allow(null),
      prices: OrderPlatformModel.Prices(),
      priority_text: Joi.string().allow("").allow(null),
      rto_address: OrderPlatformModel.PlatformDeliveryAddress(),
      shipment_created_at: Joi.string().allow("").allow(null),
      shipment_details: OrderPlatformModel.ShipmentDetails(),
      shipment_id: Joi.string().allow("").required(),
      shipment_images: Joi.array().items(Joi.string().allow("")),
      shipment_quantity: Joi.number().allow(null),
      shipment_status: Joi.string().allow("").allow(null),
      shipment_update_time: Joi.number().allow(null),
      status: OrderPlatformModel.ShipmentStatusData(),
      total_bags: Joi.number().allow(null),
      total_items: Joi.number().allow(null),
      tracking_list: Joi.array().items(OrderPlatformModel.TrackingList()),
      user: OrderPlatformModel.UserDataInfo(),
      user_agent: Joi.string().allow("").allow(null),
      vertical: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {PlatformShipmentReasonsResponse} */
  static PlatformShipmentReasonsResponse() {
    return Joi.object({
      reasons: Joi.array().items(OrderPlatformModel.Reason()),
      success: Joi.boolean(),
    });
  }

  /** @returns {PlatformShipmentTrack} */
  static PlatformShipmentTrack() {
    return Joi.object({
      meta: Joi.any(),
      results: Joi.array().items(OrderPlatformModel.PlatformTrack()),
    });
  }

  /** @returns {PlatformTrack} */
  static PlatformTrack() {
    return Joi.object({
      account_name: Joi.string().allow(""),
      awb: Joi.string().allow(""),
      last_location_recieved_at: Joi.string().allow(""),
      meta: Joi.any(),
      raw_status: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      shipment_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_time: Joi.string().allow(""),
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

  /** @returns {PointBlankOtpData} */
  static PointBlankOtpData() {
    return Joi.object({
      message: Joi.string().allow(""),
      mobile: Joi.number(),
      request_id: Joi.string().allow(""),
      resend_timer: Joi.number(),
    });
  }

  /** @returns {PostActivityHistory} */
  static PostActivityHistory() {
    return Joi.object({
      data: OrderPlatformModel.PostHistoryData().required(),
      filters: Joi.array()
        .items(OrderPlatformModel.PostHistoryFilters())
        .required(),
    });
  }

  /** @returns {PostHistoryData} */
  static PostHistoryData() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      user_name: Joi.string().allow("").required(),
    });
  }

  /** @returns {PostHistoryDict} */
  static PostHistoryDict() {
    return Joi.object({
      activity_history: OrderPlatformModel.PostActivityHistory().required(),
    });
  }

  /** @returns {PostHistoryFilters} */
  static PostHistoryFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      line_number: Joi.string().allow(""),
      shipment_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {PostShipmentHistory} */
  static PostShipmentHistory() {
    return Joi.object({
      activity_history: Joi.array().items(OrderPlatformModel.PostHistoryDict()),
    });
  }

  /** @returns {Prices} */
  static Prices() {
    return Joi.object({
      amount_paid: Joi.number().allow(null),
      amount_paid_roundoff: Joi.number().allow(null),
      brand_calculated_amount: Joi.number().allow(null),
      cashback: Joi.number().allow(null),
      cashback_applied: Joi.number().allow(null),
      cod_charges: Joi.number().allow(null),
      coupon_effective_discount: Joi.number().allow(null),
      coupon_value: Joi.number().allow(null),
      delivery_charge: Joi.number().allow(null),
      discount: Joi.number().allow(null),
      fynd_credits: Joi.number().allow(null),
      gift_price: Joi.number().allow(null),
      pm_price_split: Joi.number().allow(null),
      price_effective: Joi.number().allow(null),
      price_marked: Joi.number().allow(null),
      promotion_effective_discount: Joi.number().allow(null),
      refund_amount: Joi.number().allow(null),
      refund_credit: Joi.number().allow(null),
      tax_collected_at_source: Joi.number().allow(null),
      transfer_price: Joi.number().allow(null),
      value_of_good: Joi.number().allow(null),
    });
  }

  /** @returns {ProcessingDates} */
  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),
      customer_pickup_slot: Joi.any(),
      dispatch_after_date: Joi.string().allow(""),
      dispatch_by_date: Joi.string().allow(""),
      dp_pickup_slot: Joi.any(),
      pack_by_date: Joi.string().allow(""),
    });
  }

  /** @returns {Products} */
  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      line_number: Joi.number(),
      quantity: Joi.number(),
    });
  }

  /** @returns {ProductsDataUpdates} */
  static ProductsDataUpdates() {
    return Joi.object({
      data: Joi.any(),
      filters: Joi.array().items(
        OrderPlatformModel.ProductsDataUpdatesFilters()
      ),
    });
  }

  /** @returns {ProductsDataUpdatesFilters} */
  static ProductsDataUpdatesFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      line_number: Joi.number(),
    });
  }

  /** @returns {ProductsReasons} */
  static ProductsReasons() {
    return Joi.object({
      data: OrderPlatformModel.ProductsReasonsData(),
      filters: Joi.array().items(OrderPlatformModel.ProductsReasonsFilters()),
    });
  }

  /** @returns {ProductsReasonsData} */
  static ProductsReasonsData() {
    return Joi.object({
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
    });
  }

  /** @returns {ProductsReasonsFilters} */
  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      line_number: Joi.number(),
      quantity: Joi.number(),
    });
  }

  /** @returns {QuestionSet} */
  static QuestionSet() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.number(),
    });
  }

  /** @returns {Reason} */
  static Reason() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      id: Joi.number(),
      qc_type: Joi.array().items(Joi.string().allow("")),
      question_set: Joi.array().items(OrderPlatformModel.QuestionSet()),
    });
  }

  /** @returns {ReasonsData} */
  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderPlatformModel.EntitiesReasons()),
      products: Joi.array().items(OrderPlatformModel.ProductsReasons()),
    });
  }

  /** @returns {RefundModeConfigRequestPayload} */
  static RefundModeConfigRequestPayload() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").required(),
      customer_mobile_number: Joi.string().allow(""),
      fynd_order_id: Joi.string().allow("").required(),
      seller_id: Joi.number().required(),
    });
  }

  /** @returns {RefundModeConfigResponsePayload} */
  static RefundModeConfigResponsePayload() {
    return Joi.object({
      data: Joi.array().items(OrderPlatformModel.RefundModeInfo()).required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {RefundModeInfo} */
  static RefundModeInfo() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      is_active: Joi.boolean(),
      options: Joi.array().items(OrderPlatformModel.RefundOption()),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {RefundOption} */
  static RefundOption() {
    return Joi.object({
      name: Joi.string().allow(""),
      slug: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {ReplacementDetails} */
  static ReplacementDetails() {
    return Joi.object({
      original_affiliate_order_id: Joi.string().allow("").allow(null),
      replacement_type: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ResponseDetail} */
  static ResponseDetail() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),
      success: Joi.boolean(),
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

  /** @returns {ReturnConfig1} */
  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean().allow(null),
      time: Joi.number().allow(null),
      unit: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {RoleBaseStateTransitionMapping} */
  static RoleBaseStateTransitionMapping() {
    return Joi.object({
      next_statuses: Joi.array().items(Joi.string().allow("")),
      success: Joi.boolean(),
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

  /** @returns {SendUserMobileOTP} */
  static SendUserMobileOTP() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      mobile: Joi.string().allow("").required(),
    });
  }

  /** @returns {SendUserMobileOtpResponse} */
  static SendUserMobileOtpResponse() {
    return Joi.object({
      data: OrderPlatformModel.PointBlankOtpData(),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {Shipment} */
  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),
      line_items: Joi.array().items(OrderPlatformModel.LineItem()).required(),
      location_id: Joi.number().required(),
      meta: Joi.any(),
      order_type: Joi.string().allow(""),
      priority: Joi.number(),
      processing_dates: OrderPlatformModel.ProcessingDates(),
    });
  }

  /** @returns {ShipmentBagReasons} */
  static ShipmentBagReasons() {
    return Joi.object({
      reasons: Joi.array().items(OrderPlatformModel.BagReasons()),
      success: Joi.boolean(),
    });
  }

  /** @returns {ShipmentConfig} */
  static ShipmentConfig() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      identifier: Joi.string().allow("").required(),
      journey: Joi.string().allow("").required(),
      location_details: OrderPlatformModel.LocationDetails(),
      payment_mode: Joi.string().allow("").required(),
      shipment: Joi.array()
        .items(OrderPlatformModel.ShipmentDetails())
        .required(),
      source: Joi.string().allow("").required(),
      to_pincode: Joi.string().allow("").required(),
    });
  }

  /** @returns {ShipmentData} */
  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderPlatformModel.ShipmentConfig().required(),
    });
  }

  /** @returns {ShipmentDetail} */
  static ShipmentDetail() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.number()),
      id: Joi.number().required(),
      meta: OrderPlatformModel.Meta().required(),
      remarks: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentDetails} */
  static ShipmentDetails() {
    return Joi.object({
      action_to_status: Joi.any().allow(null),
      affiliate_shipment_id: Joi.string().allow("").required(),
      articles: Joi.array()
        .items(OrderPlatformModel.ArticleDetails())
        .required(),
      box_type: Joi.string().allow("").allow(null),
      dp_id: Joi.number().allow(null),
      fulfillment_id: Joi.number().required(),
      lock_message: Joi.string().allow("").allow(null),
      lock_status: Joi.boolean().allow(null),
      meta: Joi.any(),
      shipments: Joi.number().required(),
    });
  }

  /** @returns {ShipmentHistoryResponse} */
  static ShipmentHistoryResponse() {
    return Joi.object({
      activity_history: Joi.array()
        .items(OrderPlatformModel.HistoryDict())
        .required(),
      success: Joi.boolean(),
    });
  }

  /** @returns {ShipmentInfoResponse} */
  static ShipmentInfoResponse() {
    return Joi.object({
      message: Joi.string().allow("").allow(null),
      shipments: Joi.array().items(OrderPlatformModel.PlatformShipment()),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ShipmentInternalPlatformViewResponse} */
  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      items: Joi.array().items(OrderPlatformModel.ShipmentItem()),
      lane: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
      page: OrderPlatformModel.Page(),
      success: Joi.boolean().allow(null),
      total_count: Joi.number().allow(null),
    });
  }

  /** @returns {ShipmentItem} */
  static ShipmentItem() {
    return Joi.object({
      bags: Joi.array().items(OrderPlatformModel.BagUnit()),
      can_process: Joi.boolean().allow(null),
      channel: OrderPlatformModel.ShipmentListingChannel(),
      customer_note: Joi.string().allow("").allow(null),
      delivery_address: OrderPlatformModel.PlatformDeliveryAddress(),
      display_name: Joi.string().allow("").allow(null),
      estimated_sla_time: Joi.string().allow("").allow(null),
      fulfilling_store: OrderPlatformModel.ShipmentItemFulFillingStore(),
      invoice_id: Joi.string().allow("").allow(null),
      lock_status: Joi.boolean().allow(null),
      meta: Joi.object().pattern(/\S/, Joi.any()),
      mode_of_payment: Joi.string().allow(""),
      order_date: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").required(),
      ordering_channnel: Joi.string().allow("").allow(null),
      payment_methods: Joi.any().allow(null),
      payment_mode: Joi.string().allow("").allow(null),
      previous_shipment_id: Joi.string().allow("").allow(null),
      prices: OrderPlatformModel.Prices(),
      shipment_created_at: Joi.string().allow("").required(),
      shipment_id: Joi.string().allow("").allow(null),
      shipment_status: OrderPlatformModel.ShipmentStatus(),
      status_created_at: Joi.string().allow(""),
      total_bags: Joi.number().allow(null).required(),
      user: OrderPlatformModel.UserDataInfo(),
    });
  }

  /** @returns {ShipmentItemFulFillingStore} */
  static ShipmentItemFulFillingStore() {
    return Joi.object({
      address: Joi.string().allow("").allow(null),
      brand_store_tags: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
      code: Joi.string().allow("").required(),
      id: Joi.number().required(),
      location_type: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      name: Joi.string().allow("").allow(null),
      phone: Joi.string().allow("").allow(null),
      pincode: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
      store_email: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentItemMeta} */
  static ShipmentItemMeta() {
    return Joi.object({
      activity_comment: Joi.string().allow("").allow(null),
      assign_dp_from_sb: Joi.boolean().allow(null),
      auto_trigger_dp_assignment_acf: Joi.boolean().required(),
      bag_weight: Joi.any().allow(null),
      debug_info: Joi.any().allow(null),
      dp_options: Joi.any().allow(null),
      dp_sort_key: Joi.string().allow("").allow(null),
      ewaybill_info: Joi.any().allow(null),
      existing_dp_list: Joi.array().items(Joi.string().allow("")),
      external: Joi.any().allow(null),
      formatted: OrderPlatformModel.Formatted(),
      fulfilment_priority_text: Joi.string().allow("").allow(null),
      is_international: Joi.boolean().allow(null),
      is_self_ship: Joi.boolean().allow(null),
      lock_data: OrderPlatformModel.LockData(),
      order_type: Joi.string().allow("").allow(null),
      packaging_name: Joi.string().allow("").allow(null),
      parent_dp_id: Joi.string().allow("").allow(null),
      pdf_media: Joi.array().items(Joi.any()),
      same_store_available: Joi.boolean().allow(null),
      shipment_chargeable_weight: Joi.number().allow(null),
      shipment_tags: Joi.array().items(OrderPlatformModel.ShipmentTags()),
      shipment_volumetric_weight: Joi.number().allow(null),
      shipment_weight: Joi.number().allow(null),
      shipping_zone: Joi.string().allow("").allow(null),
      sla: Joi.number().allow(null),
      store_invoice_updated_date: Joi.string().allow("").allow(null),
      tags: Joi.array().items(Joi.any()),
      timestamp: OrderPlatformModel.ShipmentTimeStamp(),
      weight: Joi.number().allow(null),
    });
  }

  /** @returns {ShipmentListingBrand} */
  static ShipmentListingBrand() {
    return Joi.object({
      created_on: Joi.string().allow("").allow(null),
      logo: Joi.string().allow("").allow(null),
      logo_base64: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
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

  /** @returns {ShipmentMeta} */
  static ShipmentMeta() {
    return Joi.object({
      assign_dp_from_sb: Joi.boolean().allow(null),
      auto_trigger_dp_assignment_acf: Joi.boolean().allow(null),
      awb_number: Joi.string().allow("").allow(null),
      b2b_buyer_details: OrderPlatformModel.BuyerDetails(),
      b2c_buyer_details: Joi.any().allow(null),
      bag_weight: Joi.any().allow(null),
      box_type: Joi.string().allow("").allow(null),
      debug_info: OrderPlatformModel.DebugInfo(),
      dimension: OrderPlatformModel.Dimensions(),
      dp_id: Joi.string().allow("").allow(null),
      dp_name: Joi.string().allow("").allow(null),
      dp_options: Joi.any().allow(null),
      dp_sort_key: Joi.string().allow("").allow(null),
      due_date: Joi.string().allow("").allow(null),
      einvoice_info: OrderPlatformModel.EinvoiceInfo(),
      estimated_delivery_date: Joi.string().allow("").allow(null),
      ewaybill_info: Joi.any().allow(null),
      external: Joi.any().allow(null),
      formatted: OrderPlatformModel.Formatted(),
      forward_affiliate_order_id: Joi.string().allow("").allow(null),
      forward_affiliate_shipment_id: Joi.string().allow("").allow(null),
      fulfilment_priority_text: Joi.string().allow("").allow(null),
      is_self_ship: Joi.boolean().allow(null),
      lock_data: OrderPlatformModel.LockData(),
      marketplace_store_id: Joi.string().allow("").allow(null),
      order_type: Joi.string().allow("").allow(null),
      packaging_name: Joi.string().allow("").allow(null),
      parent_dp_id: Joi.string().allow("").allow(null),
      po_number: Joi.string().allow("").allow(null),
      refund_to: Joi.string().allow("").allow(null),
      return_affiliate_order_id: Joi.string().allow("").allow(null),
      return_affiliate_shipment_id: Joi.string().allow("").allow(null),
      return_awb_number: Joi.string().allow("").allow(null),
      return_details: Joi.any().allow(null),
      return_store_node: Joi.number().allow(null),
      same_store_available: Joi.boolean().required(),
      shipment_tags: Joi.array().items(OrderPlatformModel.ShipmentTags()),
      shipment_volumetric_weight: Joi.number().allow(null),
      shipment_weight: Joi.number().allow(null),
      store_invoice_updated_date: Joi.string().allow("").allow(null),
      timestamp: OrderPlatformModel.ShipmentTimeStamp(),
      tracking_url: Joi.string().allow("").allow(null),
      weight: Joi.number().required(),
    });
  }

  /** @returns {ShipmentPayments} */
  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow("").allow(null),
      mode: Joi.string().allow("").allow(null),
      source: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentReasonsResponse} */
  static ShipmentReasonsResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      reasons: Joi.array()
        .items(OrderPlatformModel.ShipmentResponseReasons())
        .required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ShipmentResponseReasons} */
  static ShipmentResponseReasons() {
    return Joi.object({
      reason: Joi.string().allow(""),
      reason_id: Joi.number(),
    });
  }

  /** @returns {ShipmentsRequest} */
  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderPlatformModel.DataUpdates(),
      identifier: Joi.string().allow("").required(),
      products: Joi.array().items(OrderPlatformModel.Products()),
      reasons: OrderPlatformModel.ReasonsData(),
    });
  }

  /** @returns {ShipmentsResponse} */
  static ShipmentsResponse() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      exception: Joi.string().allow("").allow(null),
      final_state: Joi.any().allow(null),
      identifier: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      stack_trace: Joi.string().allow("").allow(null),
      status: Joi.number().allow(null),
    });
  }

  /** @returns {ShipmentStatus} */
  static ShipmentStatus() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.string().allow("")),
      created_at: Joi.string().allow("").allow(null),
      current_shipment_status: Joi.string().allow("").allow(null),
      meta: Joi.any().allow(null),
      shipment_id: Joi.string().allow("").allow(null),
      shipment_status_id: Joi.number().allow(null),
      status: Joi.string().allow("").required(),
      status_created_at: Joi.string().allow("").allow(null),
      title: Joi.string().allow("").required(),
    });
  }

  /** @returns {ShipmentStatusData} */
  static ShipmentStatusData() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.string().allow("")),
      created_at: Joi.string().allow("").allow(null),
      current_shipment_status: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").allow(null),
      id: Joi.number().allow(null),
      meta: Joi.any().allow(null),
      shipment_id: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentTags} */
  static ShipmentTags() {
    return Joi.object({
      display_text: Joi.string().allow("").allow(null),
      entity_type: Joi.string().allow("").allow(null),
      slug: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {ShipmentTimeStamp} */
  static ShipmentTimeStamp() {
    return Joi.object({
      max: Joi.number().allow(null),
      min: Joi.number().allow(null),
    });
  }

  /** @returns {ShippingInfo} */
  static ShippingInfo() {
    return Joi.object({
      address_type: Joi.string().allow(""),
      address1: Joi.string().allow("").required(),
      address2: Joi.string().allow(""),
      alternate_email: Joi.string().allow(""),
      alternate_mobile_number: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      country_code: Joi.string().allow(""),
      customer_code: Joi.string().allow(""),
      external_customer_code: Joi.string().allow(""),
      first_name: Joi.string().allow("").required(),
      floor_no: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      geo_location: Joi.any(),
      house_no: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      middle_name: Joi.string().allow(""),
      pincode: Joi.string().allow("").required(),
      primary_email: Joi.string().allow("").required(),
      primary_mobile_number: Joi.string().allow("").required(),
      shipping_type: Joi.string().allow(""),
      slot: Joi.array().items(Joi.any()),
      state: Joi.string().allow("").required(),
      state_code: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }

  /** @returns {SmsDataPayload} */
  static SmsDataPayload() {
    return Joi.object({
      amount_paid: Joi.number(),
      brand_name: Joi.string().allow(""),
      country_code: Joi.string().allow("").required(),
      customer_name: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      payment_mode: Joi.string().allow(""),
      phone_number: Joi.number().required(),
      shipment_id: Joi.number().required(),
    });
  }

  /** @returns {StatuesRequest} */
  static StatuesRequest() {
    return Joi.object({
      exclude_bags_next_state: Joi.string().allow(""),
      shipments: Joi.array().items(OrderPlatformModel.ShipmentsRequest()),
      split_shipment: Joi.boolean(),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {StatuesResponse} */
  static StatuesResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderPlatformModel.ShipmentsResponse()),
    });
  }

  /** @returns {Store} */
  static Store() {
    return Joi.object({
      address1: Joi.string().allow("").required(),
      address2: Joi.string().allow("").allow(null),
      alohomora_user_id: Joi.number().allow(null),
      brand_id: Joi.any(),
      brand_store_tags: Joi.array().items(Joi.string().allow("")),
      city: Joi.string().allow("").required(),
      code: Joi.string().allow("").allow(null),
      company_id: Joi.number().required(),
      contact_person: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      created_at: Joi.string().allow("").required(),
      fulfillment_channel: Joi.string().allow("").required(),
      is_active: Joi.boolean().allow(null),
      is_archived: Joi.boolean().allow(null),
      is_enabled_for_recon: Joi.boolean().allow(null),
      latitude: Joi.number().required(),
      location_type: Joi.string().allow("").required(),
      login_username: Joi.string().allow("").required(),
      longitude: Joi.number().required(),
      mall_area: Joi.string().allow("").allow(null),
      mall_name: Joi.string().allow("").allow(null),
      meta: OrderPlatformModel.StoreMeta().required(),
      name: Joi.string().allow("").required(),
      order_integration_id: Joi.string().allow("").allow(null),
      packaging_material_count: Joi.number().allow(null),
      parent_store_id: Joi.number().allow(null),
      phone: Joi.number().required(),
      pincode: Joi.string().allow("").required(),
      s_id: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
      store_active_from: Joi.string().allow("").allow(null),
      store_address_json: OrderPlatformModel.StoreAddress(),
      store_email: Joi.string().allow("").required(),
      updated_at: Joi.string().allow("").allow(null),
      vat_no: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {StoreAddress} */
  static StoreAddress() {
    return Joi.object({
      address_category: Joi.string().allow("").required(),
      address_type: Joi.string().allow("").required(),
      address1: Joi.string().allow("").required(),
      address2: Joi.string().allow(""),
      area: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").required(),
      contact_person: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      country_code: Joi.string().allow("").required(),
      created_at: Joi.string().allow("").required(),
      email: Joi.string().allow("").allow(null),
      landmark: Joi.string().allow(""),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      phone: Joi.string().allow("").allow(null).required(),
      pincode: Joi.number().required(),
      state: Joi.string().allow("").required(),
      updated_at: Joi.string().allow("").required(),
      version: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {StoreDocuments} */
  static StoreDocuments() {
    return Joi.object({
      gst: OrderPlatformModel.Document(),
    });
  }

  /** @returns {StoreEinvoice} */
  static StoreEinvoice() {
    return Joi.object({
      enabled: Joi.boolean().required(),
      password: Joi.string().allow("").allow(null),
      user: Joi.string().allow("").allow(null),
      username: Joi.string().allow("").allow(null),
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

  /** @returns {StoreMeta} */
  static StoreMeta() {
    return Joi.object({
      additional_contact_details: Joi.any().allow(null),
      display_name: Joi.string().allow("").required(),
      documents: OrderPlatformModel.StoreDocuments(),
      einvoice_portal_details: OrderPlatformModel.EInvoicePortalDetails(),
      ewaybill_portal_details: Joi.any().allow(null),
      gst_credentials: OrderPlatformModel.StoreGstCredentials().required(),
      gst_number: Joi.string().allow("").allow(null),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      product_return_config: Joi.any().allow(null),
      stage: Joi.string().allow("").required(),
      timing: Joi.array().items(Joi.any()),
    });
  }

  /** @returns {StoreReassign} */
  static StoreReassign() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").allow(null),
      affiliate_id: Joi.string().allow("").allow(null),
      affiliate_order_id: Joi.string().allow("").allow(null),
      bag_id: Joi.number().allow(null),
      fynd_order_id: Joi.string().allow("").allow(null),
      item_id: Joi.string().allow("").allow(null),
      mongo_article_id: Joi.string().allow("").allow(null),
      reason_ids: Joi.array().items(Joi.number()),
      set_id: Joi.string().allow("").allow(null),
      store_id: Joi.number().required(),
    });
  }

  /** @returns {StoreReassignResponse} */
  static StoreReassignResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {SubLane} */
  static SubLane() {
    return Joi.object({
      actions: Joi.array().items(Joi.any()),
      index: Joi.number(),
      text: Joi.string().allow(""),
      total_items: Joi.number(),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {SuccessResponse} */
  static SuccessResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {SuperLane} */
  static SuperLane() {
    return Joi.object({
      options: Joi.array().items(OrderPlatformModel.SubLane()),
      text: Joi.string().allow("").required(),
      total_items: Joi.number(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {Tax} */
  static Tax() {
    return Joi.object({
      amount: Joi.any().required(),
      breakup: Joi.array().items(Joi.any()),
      name: Joi.string().allow("").required(),
      rate: Joi.number().required(),
    });
  }

  /** @returns {TaxDetails} */
  static TaxDetails() {
    return Joi.object({
      gstin: Joi.string().allow("").allow(null),
      pan_no: Joi.string().allow("").allow(null),
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

  /** @returns {TrackingList} */
  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean().allow(null),
      is_passed: Joi.boolean().allow(null),
      status: Joi.string().allow("").required(),
      text: Joi.string().allow("").required(),
      time: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {TransactionData} */
  static TransactionData() {
    return Joi.object({
      amount_paid: Joi.number().allow(null),
      currency: Joi.string().allow("").allow(null),
      entity: Joi.string().allow("").allow(null),
      payment_id: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").allow(null),
      terminal_id: Joi.string().allow("").allow(null),
      transaction_id: Joi.string().allow("").allow(null),
      unique_reference_number: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {UpdatePackagingDimensionsPayload} */
  static UpdatePackagingDimensionsPayload() {
    return Joi.object({
      current_status: Joi.string().allow("").required(),
      dimension: Joi.array().items(OrderPlatformModel.Dimension()).required(),
      shipment_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdatePackagingDimensionsResponse} */
  static UpdatePackagingDimensionsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
    });
  }

  /** @returns {UpdateShipmentLockPayload} */
  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      action_type: Joi.string().allow("").required(),
      entities: Joi.array().items(OrderPlatformModel.Entities()).required(),
      entity_type: Joi.string().allow("").required(),
    });
  }

  /** @returns {UpdateShipmentLockResponse} */
  static UpdateShipmentLockResponse() {
    return Joi.object({
      check_response: Joi.array().items(OrderPlatformModel.CheckResponse()),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }

  /** @returns {UpdateShipmentStatusRequest} */
  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),
      lock_after_transition: Joi.boolean(),
      statuses: Joi.array().items(OrderPlatformModel.StatuesRequest()),
      task: Joi.boolean(),
      unlock_before_transition: Joi.boolean(),
    });
  }

  /** @returns {UpdateShipmentStatusResponseBody} */
  static UpdateShipmentStatusResponseBody() {
    return Joi.object({
      statuses: Joi.array().items(OrderPlatformModel.StatuesResponse()),
    });
  }

  /** @returns {UploadConsent} */
  static UploadConsent() {
    return Joi.object({
      consent_url: Joi.string().allow("").required(),
      manifest_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {URL} */
  static URL() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }

  /** @returns {UserData} */
  static UserData() {
    return Joi.object({
      billing_user: OrderPlatformModel.OrderUser(),
      shipping_user: OrderPlatformModel.OrderUser(),
    });
  }

  /** @returns {UserDataInfo} */
  static UserDataInfo() {
    return Joi.object({
      avis_user_id: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").allow(null),
      external_customer_id: Joi.string().allow("").allow(null),
      first_name: Joi.string().allow("").allow(null),
      gender: Joi.string().allow("").allow(null),
      is_anonymous_user: Joi.boolean().allow(null),
      last_name: Joi.string().allow("").allow(null),
      mobile: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      uid: Joi.number().allow(null),
      user_oid: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {UserDetailsData} */
  static UserDetailsData() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      address_type: Joi.string().allow("").allow(null),
      address1: Joi.string().allow("").allow(null),
      area: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      email: Joi.string().allow("").allow(null),
      landmark: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").required(),
      phone: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    });
  }

  /** @returns {UserInfo} */
  static UserInfo() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),
      gender: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      primary_email: Joi.string().allow("").required(),
      primary_mobile_number: Joi.string().allow("").required(),
      user_id: Joi.string().allow(""),
      user_type: Joi.string().allow(""),
    });
  }

  /** @returns {VerifyMobileOTP} */
  static VerifyMobileOTP() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),
      otp_data: OrderPlatformModel.VerifyOtpData().required(),
    });
  }

  /** @returns {VerifyOtpData} */
  static VerifyOtpData() {
    return Joi.object({
      mobile: Joi.string().allow("").required(),
      otp_code: Joi.number().required(),
      request_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {VerifyOtpResponse} */
  static VerifyOtpResponse() {
    return Joi.object({
      data: OrderPlatformModel.VerifyOtpResponseData(),
      message: Joi.string().allow(""),
      status: Joi.number(),
      success: Joi.boolean(),
    });
  }

  /** @returns {VerifyOtpResponseData} */
  static VerifyOtpResponseData() {
    return Joi.object({
      country_code: Joi.string().allow(""),
      fynd_order_id: Joi.string().allow(""),
      message: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
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
}
module.exports = OrderPlatformModel;
