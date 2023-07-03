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
 * @typedef AffiliateDetails
 * @property {string} [ad_id]
 * @property {string} affiliate_bag_id
 * @property {string} [affiliate_id]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {string} affiliate_shipment_id
 * @property {string} affiliate_store_id
 * @property {string} [company_affiliate_tag]
 * @property {PDFLinks} [pdf_links]
 * @property {ShipmentMeta} shipment_meta
 */

/**
 * @typedef AffiliateMeta
 * @property {string} [box_type]
 * @property {string} [channel_order_id]
 * @property {string} [channel_shipment_id]
 * @property {string} [coupon_code]
 * @property {string} [due_date]
 * @property {number} [employee_discount]
 * @property {boolean} [is_priority]
 * @property {number} [loyalty_discount]
 * @property {string} [marketplace_invoice_id]
 * @property {string} [order_item_id]
 * @property {number} [quantity]
 * @property {ReplacementDetails} [replacement_details]
 * @property {number} [size_level_total_qty]
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
 * @property {Object} [status]
 */

/**
 * @typedef AssetByShipment
 * @property {string} expires_in
 * @property {string} presigned_type
 * @property {Object} [presigned_urls]
 * @property {string} shipment_id
 * @property {boolean} success
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
 * @property {string} [docket_number]
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
 * @property {BagGSTDetails} [gst_details]
 * @property {number} [id]
 * @property {string} [identifier]
 * @property {Item} [item]
 * @property {string} [journey_type]
 * @property {number} [line_number]
 * @property {BagMeta} [meta]
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
 * @property {number} [updated_at]
 */

/**
 * @typedef DataUpdates
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {OrderItemDataUpdates[]} [order_item_status]
 * @property {ProductsDataUpdates[]} [products]
 */

/**
 * @typedef DateRange
 * @property {string} [from_date]
 * @property {string} [to_date]
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
 * @property {string} message
 */

/**
 * @typedef ErrorResponse1
 * @property {string} [error_trace]
 * @property {string} [message]
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
 * @typedef FilterInfoOption1
 * @property {number} [min_search_size]
 * @property {string} [name]
 * @property {string} [placeholder_text]
 * @property {boolean} [show_ui]
 * @property {string} [text]
 * @property {string} [value]
 */

/**
 * @typedef Filters
 * @property {DateRange} [date_range]
 * @property {number} [dp_ids]
 * @property {string} [dp_name]
 * @property {string} [from_date]
 * @property {string} [lane]
 * @property {string} [logo]
 * @property {string} [selected_shipments]
 * @property {string} [store_name]
 * @property {number} [stores]
 * @property {string} [to_date]
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
 * @typedef FiltersInfo1
 * @property {FilterInfoOption1[]} [options]
 * @property {string} [placeholder_text]
 * @property {boolean} [required]
 * @property {string} text
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef FiltersRequest
 * @property {DateRange} [date_range]
 * @property {number} dp_ids
 * @property {string} dp_name
 * @property {string} lane
 * @property {string} [logo]
 * @property {string} store_name
 * @property {number} stores
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
 * @property {string} [cgst_gst_fee]
 * @property {number} [cgst_tax_percentage]
 * @property {number} gst_fee
 * @property {string} [gst_tag]
 * @property {number} [gst_tax_percentage]
 * @property {string} gstin_code
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 * @property {string} [igst_gst_fee]
 * @property {number} [igst_tax_percentage]
 * @property {boolean} [is_default_hsn_code]
 * @property {string} [sgst_gst_fee]
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
 * @typedef JioCodeUpsertDataSet
 * @property {string} [article_id]
 * @property {string} [company_id]
 * @property {string} [item_id]
 * @property {string} [jio_code]
 */

/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {Object[]} [data]
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {string} [identifier]
 * @property {boolean} [success]
 * @property {string} [trace_id]
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef LineItem
 * @property {Charge[]} [charges]
 * @property {string} [custom_messasge]
 * @property {string} [external_line_id]
 * @property {Object} [meta]
 * @property {number} [quantity]
 * @property {string} seller_identifier
 */

/**
 * @typedef LockData
 * @property {string} [lock_message]
 * @property {boolean} [locked]
 * @property {boolean} [mto]
 */

/**
 * @typedef Manifest
 * @property {number} company_id
 * @property {string} created_at
 * @property {string} created_by
 * @property {Filters} [filters]
 * @property {number} id
 * @property {boolean} is_active
 * @property {string} manifest_id
 * @property {ManifestMeta} [meta]
 * @property {PDFMeta} [pdf_meta]
 * @property {string} status
 * @property {string} uid
 * @property {string} user_id
 */

/**
 * @typedef ManifestDetails
 * @property {number} [additional_shipment_count]
 * @property {ManifestItemDetails[]} [items]
 * @property {Manifest[]} [manifest_details]
 * @property {ManifestPageInfo} [page]
 */

/**
 * @typedef ManifestFile
 * @property {string} [bucket]
 * @property {string} [key]
 * @property {string} [region]
 */

/**
 * @typedef ManifestFiltersResponse
 * @property {FiltersInfo1[]} [advance_filter]
 * @property {FiltersInfo1[]} [global_filter]
 */

/**
 * @typedef ManifestItemDetails
 * @property {string} [awb]
 * @property {string} [invoice_id]
 * @property {number} [item_qty]
 * @property {string} order_id
 * @property {string} [shipment_created_at]
 * @property {string} shipment_id
 */

/**
 * @typedef ManifestList
 * @property {Manifest[]} [items]
 * @property {ManifestPageInfo} [page]
 */

/**
 * @typedef ManifestMediaUpdate
 * @property {number} [code]
 * @property {string} [entity]
 * @property {ManifestFile} [file]
 * @property {string} [link]
 * @property {string} [media_type]
 * @property {boolean} [status]
 */

/**
 * @typedef ManifestMeta
 * @property {Filters} [filters]
 * @property {TotalShipmentPricesCount} [total_shipment_prices_count]
 */

/**
 * @typedef ManifestPageInfo
 * @property {number} current
 * @property {boolean} has_next
 * @property {boolean} has_previous
 * @property {number} size
 * @property {number} total
 * @property {string} type
 */

/**
 * @typedef ManifestShipmentListing
 * @property {ManifestItemDetails[]} [items]
 * @property {string} [lane]
 * @property {string} [message]
 * @property {ManifestPageInfo} page
 * @property {number} status
 * @property {boolean} success
 * @property {number} total_count
 */

/**
 * @typedef Meta
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef MetricsCount
 * @property {string} key
 * @property {Options[]} [options]
 * @property {string} text
 * @property {number} value
 */

/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef OmsReports
 * @property {string} [display_name]
 * @property {string} [report_created_at]
 * @property {string} [report_id]
 * @property {string} [report_name]
 * @property {string} [report_requested_at]
 * @property {string} [report_type]
 * @property {Object} [request_details]
 * @property {string} [s3_key]
 * @property {string} [status]
 */

/**
 * @typedef Options
 * @property {string} [text]
 * @property {number} [value]
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
 * @property {BagGST} [gst_details]
 * @property {string} [identifier]
 * @property {PlatformItem} [item]
 * @property {number} [line_number]
 * @property {BagMeta} [meta]
 * @property {Object} [parent_promo_bags]
 * @property {BagPaymentMethods[]} [payment_methods]
 * @property {Prices} [prices]
 * @property {number} [quantity]
 * @property {string} [seller_identifier]
 */

/**
 * @typedef OrderBrandName
 * @property {string} [brand_name]
 * @property {number} company
 * @property {string} [created_on]
 * @property {number} id
 * @property {string} [logo]
 * @property {string} [modified_on]
 */

/**
 * @typedef OrderData
 * @property {string} fynd_order_id
 * @property {OrderMeta} [meta]
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
 * @property {string} [comment]
 * @property {string} [company_logo]
 * @property {string} [currency_symbol]
 * @property {string} [customer_note]
 * @property {number} [employee_id]
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
 * @typedef PDFMeta
 * @property {string} [consent]
 * @property {ManifestMediaUpdate[]} [media_updates]
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
 * @property {ShipmentMeta} [meta]
 * @property {string} [operational_status]
 * @property {OrderDetailsData} [order]
 * @property {OrderingStoreDetails} [ordering_store]
 * @property {string} [packaging_type]
 * @property {Object} [payment_methods]
 * @property {string} [payment_mode]
 * @property {ShipmentPayments} [payments]
 * @property {string} [picked_date]
 * @property {string} [platform_logo]
 * @property {Prices} [prices]
 * @property {string} [priority_text]
 * @property {string} [shipment_created_at]
 * @property {ShipmentDetails} [shipment_details]
 * @property {string} shipment_id
 * @property {string[]} [shipment_images]
 * @property {number} [shipment_quantity]
 * @property {string} [shipment_status]
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
 * @typedef ProcessManifest
 * @property {string} action
 * @property {FiltersRequest} filters
 * @property {string} [manifest_id]
 * @property {string} unique_id
 */

/**
 * @typedef ProcessManifestItemResponse
 * @property {ProcessManifestResponse} [items]
 */

/**
 * @typedef ProcessManifestResponse
 * @property {string} [action]
 * @property {number} [company_id]
 * @property {string} [created_by]
 * @property {Filters} [filters]
 * @property {string} [manifest_id]
 * @property {string} [uid]
 * @property {string} [user_id]
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
 * @typedef ResponseGetAssetShipment
 * @property {AssetByShipment[]} data
 * @property {string} message
 * @property {boolean} success
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
 * @property {number} [priority]
 * @property {ProcessingDates} [processing_dates]
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
 * @property {string} [lock_message]
 * @property {boolean} [lock_status]
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
 * @property {ShipmentItemMeta} [meta]
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
 * @property {Object} [ewaybill_info]
 * @property {Object} [external]
 * @property {Formatted} [formatted]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {string} [fulfilment_priority_text]
 * @property {LockData} [lock_data]
 * @property {string} [marketplace_store_id]
 * @property {string} [order_type]
 * @property {string} [packaging_name]
 * @property {string} [parent_dp_id]
 * @property {string} [po_number]
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
 * @typedef Success
 * @property {string} [message]
 * @property {boolean} [success]
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
 */

/**
 * @typedef TotalShipmentPricesCount
 * @property {number} [shipment_count]
 * @property {number} [total_price]
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
 * @typedef UserDataInfo
 * @property {string} [avis_user_id]
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [name]
 * @property {number} [uid]
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
      applied_filters: Joi.any(),
      filters: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      page: Joi.any(),
      processed: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      returned: Joi.array().items(OrderPlatformModel.FiltersInfo()),
      unfulfilled: Joi.array().items(OrderPlatformModel.FiltersInfo()),
    });
  }

  /** @returns {AffiliateBagDetails} */
  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),
      affiliate_meta: OrderPlatformModel.AffiliateMeta().required(),
      affiliate_order_id: Joi.string().allow("").required(),
      employee_discount: Joi.number(),
      loyalty_discount: Joi.number(),
    });
  }

  /** @returns {AffiliateBagsDetails} */
  static AffiliateBagsDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),
      coupon_code: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {AffiliateDetails} */
  static AffiliateDetails() {
    return Joi.object({
      ad_id: Joi.string().allow(""),
      affiliate_bag_id: Joi.string().allow("").required(),
      affiliate_id: Joi.string().allow(""),
      affiliate_meta: OrderPlatformModel.AffiliateMeta().required(),
      affiliate_order_id: Joi.string().allow("").required(),
      affiliate_shipment_id: Joi.string().allow("").required(),
      affiliate_store_id: Joi.string().allow("").required(),
      company_affiliate_tag: Joi.string().allow(""),
      pdf_links: OrderPlatformModel.PDFLinks(),
      shipment_meta: OrderPlatformModel.ShipmentMeta().required(),
    });
  }

  /** @returns {AffiliateMeta} */
  static AffiliateMeta() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),
      channel_order_id: Joi.string().allow("").allow(null),
      channel_shipment_id: Joi.string().allow("").allow(null),
      coupon_code: Joi.string().allow("").allow(null),
      due_date: Joi.string().allow("").allow(null),
      employee_discount: Joi.number(),
      is_priority: Joi.boolean(),
      loyalty_discount: Joi.number(),
      marketplace_invoice_id: Joi.string().allow("").allow(null),
      order_item_id: Joi.string().allow(""),
      quantity: Joi.number(),
      replacement_details: OrderPlatformModel.ReplacementDetails(),
      size_level_total_qty: Joi.number().allow(null),
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
      amount: Joi.number(),
      article_quantity: Joi.number(),
      buy_rules: Joi.array().items(OrderPlatformModel.BuyRules()),
      discount_rules: Joi.array().items(OrderPlatformModel.DiscountRules()),
      mrp_promotion: Joi.boolean(),
      promo_id: Joi.string().allow(""),
      promotion_name: Joi.string().allow(""),
      promotion_type: Joi.string().allow(""),
    });
  }

  /** @returns {Article} */
  static Article() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      a_set: Joi.any().allow(null),
      child_details: Joi.any().allow(null),
      code: Joi.string().allow(""),
      currency: Joi.any().allow(null),
      dimensions: OrderPlatformModel.Dimensions(),
      esp_modified: Joi.boolean().allow(null),
      identifiers: Joi.any().required(),
      is_set: Joi.boolean(),
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
      status: Joi.any(),
    });
  }

  /** @returns {AssetByShipment} */
  static AssetByShipment() {
    return Joi.object({
      expires_in: Joi.string().allow("").required(),
      presigned_type: Joi.string().allow("").required(),
      presigned_urls: Joi.object().pattern(/\S/, Joi.string().allow("")),
      shipment_id: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
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
      brand_name: Joi.string().allow(""),
      essential: Joi.string().allow(""),
      gender: Joi.array().items(Joi.string().allow("")),
      marketer_address: Joi.string().allow(""),
      marketer_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      primary_color_hex: Joi.string().allow(""),
      primary_material: Joi.string().allow(""),
    });
  }

  /** @returns {B2BPODetails} */
  static B2BPODetails() {
    return Joi.object({
      docket_number: Joi.string().allow(""),
      item_base_price: Joi.number(),
      partial_can_ret: Joi.boolean(),
      po_line_amount: Joi.number(),
      po_tax_amount: Joi.number(),
      total_gst_percentage: Joi.number(),
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
      bag_update_time: Joi.number(),
      brand: OrderPlatformModel.Brand(),
      current_operational_status: OrderPlatformModel.BagStatusHistory(),
      current_status: OrderPlatformModel.BagStatusHistory(),
      dates: OrderPlatformModel.Dates(),
      display_name: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      financial_breakup: Joi.array().items(
        OrderPlatformModel.FinancialBreakup()
      ),
      gst_details: OrderPlatformModel.BagGSTDetails(),
      id: Joi.number(),
      identifier: Joi.string().allow(""),
      item: OrderPlatformModel.Item(),
      journey_type: Joi.string().allow(""),
      line_number: Joi.number(),
      meta: OrderPlatformModel.BagMeta(),
      no_of_bags_order: Joi.number(),
      operational_status: Joi.string().allow(""),
      order_integration_id: Joi.string().allow("").allow(null),
      ordering_store: OrderPlatformModel.Store(),
      original_bag_list: Joi.array().items(Joi.number()),
      parent_promo_bags: Joi.any(),
      prices: OrderPlatformModel.Prices(),
      qc_required: Joi.any(),
      quantity: Joi.number(),
      reasons: Joi.array().items(Joi.any()),
      restore_coupon: Joi.boolean(),
      restore_promos: Joi.any(),
      seller_identifier: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      status: OrderPlatformModel.BagReturnableCancelableStatus1(),
      tags: Joi.array().items(Joi.string().allow("")),
      type: Joi.string().allow(""),
    });
  }

  /** @returns {BagGST} */
  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),
      cgst_gst_fee: Joi.string().allow(""),
      cgst_tax_percentage: Joi.number(),
      gst_fee: Joi.number(),
      gst_tag: Joi.string().allow(""),
      gst_tax_percentage: Joi.number(),
      gstin_code: Joi.string().allow(""),
      hsn_code: Joi.string().allow(""),
      hsn_code_id: Joi.string().allow(""),
      igst_gst_fee: Joi.string().allow(""),
      igst_tax_percentage: Joi.number(),
      is_default_hsn_code: Joi.boolean(),
      sgst_gst_fee: Joi.string().allow(""),
      sgst_tax_percentage: Joi.number(),
      tax_collected_at_source: Joi.number(),
      value_of_good: Joi.number(),
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
      is_default_hsn_code: Joi.boolean(),
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
      custom_json: Joi.any(),
      custom_message: Joi.string().allow(""),
      docket_number: Joi.string().allow(""),
      extra_meta: Joi.any(),
      gift_card: OrderPlatformModel.GiftCard(),
      group_id: Joi.string().allow(""),
      partial_can_ret: Joi.boolean(),
    });
  }

  /** @returns {BagPaymentMethods} */
  static BagPaymentMethods() {
    return Joi.object({
      amount: Joi.number(),
      mode: Joi.string().allow(""),
    });
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
      app_display_name: Joi.string().allow(""),
      app_facing: Joi.boolean(),
      app_state_name: Joi.string().allow(""),
      display_name: Joi.string().allow("").required(),
      id: Joi.number().required(),
      is_active: Joi.boolean(),
      journey_type: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      notify_customer: Joi.boolean(),
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
      app_display_name: Joi.string().allow(""),
      bag_id: Joi.number(),
      bag_state_mapper: OrderPlatformModel.BagStateMapper(),
      bsh_id: Joi.number(),
      created_at: Joi.string().allow(""),
      delivery_awb_number: Joi.string().allow("").allow(null),
      delivery_partner_id: Joi.number().allow(null),
      display_name: Joi.string().allow(""),
      forward: Joi.boolean().allow(null),
      kafka_sync: Joi.boolean(),
      reasons: Joi.array().items(Joi.any()),
      shipment_id: Joi.string().allow(""),
      state_id: Joi.number(),
      state_type: Joi.string().allow(""),
      status: Joi.string().allow("").required(),
      store_id: Joi.number(),
      updated_at: Joi.string().allow(""),
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
      bag_type: Joi.string().allow(""),
      brand: OrderPlatformModel.ShipmentListingBrand(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      current_operational_status: OrderPlatformModel.BagStatusHistory().required(),
      current_status: OrderPlatformModel.BagStatusHistory().required(),
      dates: OrderPlatformModel.Dates(),
      display_name: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      financial_breakup: Joi.array()
        .items(OrderPlatformModel.FinancialBreakup())
        .required(),
      gst: OrderPlatformModel.GSTDetailsData(),
      item: OrderPlatformModel.PlatformItem(),
      line_number: Joi.number(),
      meta: Joi.any(),
      prices: OrderPlatformModel.Prices(),
      product_quantity: Joi.number().required(),
      reasons: Joi.array().items(Joi.any()),
      size: Joi.string().allow(""),
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
      created_on: Joi.number(),
      credit_note_allowed: Joi.boolean(),
      credit_note_expiry_days: Joi.number().allow(null),
      invoice_prefix: Joi.string().allow("").allow(null),
      is_virtual_invoice: Joi.boolean().allow(null),
      logo: Joi.string().allow(""),
      modified_on: Joi.number(),
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

  /** @returns {BuyerDetails} */
  static BuyerDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null).required(),
      ajio_site_id: Joi.string().allow(""),
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
      cart_conditions: Joi.any(),
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
      address: Joi.any(),
      company_cin: Joi.string().allow("").allow(null),
      company_contact: OrderPlatformModel.ContactDetails(),
      company_gst: Joi.string().allow(""),
      company_id: Joi.number(),
      company_name: Joi.string().allow(""),
    });
  }

  /** @returns {ContactDetails} */
  static ContactDetails() {
    return Joi.object({
      emails: Joi.array().items(Joi.string().allow("")),
      phone: Joi.array().items(OrderPlatformModel.PhoneDetails()),
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
      bag_id: Joi.number(),
      bag_state_mapper: OrderPlatformModel.BagStateMapper(),
      created_at: Joi.string().allow("").allow(null),
      delivery_awb_number: Joi.string().allow("").allow(null),
      delivery_partner_id: Joi.number().allow(null),
      id: Joi.number().required(),
      kafka_sync: Joi.boolean(),
      shipment_id: Joi.string().allow(""),
      state_id: Joi.number(),
      state_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      store_id: Joi.number(),
      updated_at: Joi.number(),
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

  /** @returns {DateRange} */
  static DateRange() {
    return Joi.object({
      from_date: Joi.string().allow(""),
      to_date: Joi.string().allow(""),
    });
  }

  /** @returns {Dates} */
  static Dates() {
    return Joi.object({
      delivery_date: Joi.string().allow("").allow(null),
      order_created: Joi.string().allow(""),
    });
  }

  /** @returns {DebugInfo} */
  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
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
      height: Joi.number(),
      is_default: Joi.boolean(),
      length: Joi.number(),
      unit: Joi.string().allow(""),
      width: Joi.number(),
    });
  }

  /** @returns {DiscountRules} */
  static DiscountRules() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.number(),
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
      url: Joi.string().allow(""),
      value: Joi.string().allow("").required(),
      verified: Joi.boolean().required(),
    });
  }

  /** @returns {DPDetailsData} */
  static DPDetailsData() {
    return Joi.object({
      awb_no: Joi.string().allow("").allow(null),
      country: Joi.string().allow(""),
      eway_bill_id: Joi.string().allow("").allow(null),
      gst_tag: Joi.string().allow(""),
      id: Joi.number().allow(null),
      name: Joi.string().allow("").allow(null),
      pincode: Joi.string().allow(""),
      track_url: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {EinvoiceInfo} */
  static EinvoiceInfo() {
    return Joi.object({
      credit_note: Joi.any(),
      invoice: Joi.any(),
    });
  }

  /** @returns {EInvoicePortalDetails} */
  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),
      user: Joi.string().allow(""),
      username: Joi.string().allow(""),
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
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {ErrorResponse1} */
  static ErrorResponse1() {
    return Joi.object({
      error_trace: Joi.string().allow(""),
      message: Joi.string().allow(""),
      status: Joi.number(),
      success: Joi.boolean(),
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
      min_search_size: Joi.number(),
      name: Joi.string().allow("").allow(null),
      placeholder_text: Joi.string().allow(""),
      show_ui: Joi.boolean(),
      text: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {FilterInfoOption1} */
  static FilterInfoOption1() {
    return Joi.object({
      min_search_size: Joi.number(),
      name: Joi.string().allow("").allow(null),
      placeholder_text: Joi.string().allow(""),
      show_ui: Joi.boolean(),
      text: Joi.string().allow("").allow(null),
      value: Joi.string().allow("").allow(null),
    });
  }

  /** @returns {Filters} */
  static Filters() {
    return Joi.object({
      date_range: OrderPlatformModel.DateRange(),
      dp_ids: Joi.number(),
      dp_name: Joi.string().allow(""),
      from_date: Joi.string().allow(""),
      lane: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      selected_shipments: Joi.string().allow(""),
      store_name: Joi.string().allow(""),
      stores: Joi.number(),
      to_date: Joi.string().allow(""),
    });
  }

  /** @returns {FiltersInfo} */
  static FiltersInfo() {
    return Joi.object({
      options: Joi.array().items(OrderPlatformModel.FilterInfoOption()),
      placeholder_text: Joi.string().allow(""),
      required: Joi.boolean(),
      text: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {FiltersInfo1} */
  static FiltersInfo1() {
    return Joi.object({
      options: Joi.array().items(OrderPlatformModel.FilterInfoOption1()),
      placeholder_text: Joi.string().allow(""),
      required: Joi.boolean(),
      text: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }

  /** @returns {FiltersRequest} */
  static FiltersRequest() {
    return Joi.object({
      date_range: OrderPlatformModel.DateRange(),
      dp_ids: Joi.number().required(),
      dp_name: Joi.string().allow("").required(),
      lane: Joi.string().allow("").required(),
      logo: Joi.string().allow(""),
      store_name: Joi.string().allow("").required(),
      stores: Joi.number().required(),
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
      amount_paid_roundoff: Joi.number(),
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
      tax_collected_at_source: Joi.number(),
      total_units: Joi.number().required(),
      transfer_price: Joi.number().required(),
      value_of_good: Joi.number().required(),
    });
  }

  /** @returns {Formatted} */
  static Formatted() {
    return Joi.object({
      max: Joi.string().allow(""),
      min: Joi.string().allow(""),
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
      display_text: Joi.string().allow(""),
      gift_message: Joi.string().allow(""),
      gift_price: Joi.number(),
      is_gift_applied: Joi.boolean(),
    });
  }

  /** @returns {GSTDetailsData} */
  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),
      cgst_gst_fee: Joi.string().allow(""),
      cgst_tax_percentage: Joi.number(),
      gst_fee: Joi.number().required(),
      gst_tag: Joi.string().allow(""),
      gst_tax_percentage: Joi.number(),
      gstin_code: Joi.string().allow("").allow(null).required(),
      hsn_code: Joi.string().allow(""),
      hsn_code_id: Joi.string().allow(""),
      igst_gst_fee: Joi.string().allow(""),
      igst_tax_percentage: Joi.number(),
      is_default_hsn_code: Joi.boolean(),
      sgst_gst_fee: Joi.string().allow(""),
      sgst_tax_percentage: Joi.number(),
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
      alu: Joi.string().allow(""),
      ean: Joi.string().allow(""),
      isbn: Joi.string().allow(""),
      sku_code: Joi.string().allow(""),
      upc: Joi.string().allow(""),
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
      external_invoice_id: Joi.string().allow(""),
      invoice_url: Joi.string().allow(""),
      label_url: Joi.string().allow(""),
      store_invoice_id: Joi.string().allow("").allow(null),
      updated_date: Joi.string().allow(""),
    });
  }

  /** @returns {Item} */
  static Item() {
    return Joi.object({
      attributes: OrderPlatformModel.Attributes().required(),
      branch_url: Joi.string().allow("").allow(null),
      brand: Joi.string().allow("").required(),
      brand_id: Joi.number().required(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      code: Joi.string().allow(""),
      color: Joi.string().allow("").allow(null),
      department_id: Joi.number(),
      gender: Joi.string().allow("").allow(null),
      image: Joi.array().items(Joi.string().allow("")).required(),
      item_id: Joi.number().required(),
      l1_category: Joi.array().items(Joi.string().allow("")),
      l1_category_id: Joi.number(),
      l2_category: Joi.array().items(Joi.string().allow("")),
      l2_category_id: Joi.number(),
      l3_category: Joi.number(),
      l3_category_name: Joi.string().allow(""),
      last_updated_at: Joi.string().allow(""),
      meta: Joi.any(),
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

  /** @returns {JioCodeUpsertDataSet} */
  static JioCodeUpsertDataSet() {
    return Joi.object({
      article_id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      item_id: Joi.string().allow(""),
      jio_code: Joi.string().allow(""),
    });
  }

  /** @returns {JioCodeUpsertPayload} */
  static JioCodeUpsertPayload() {
    return Joi.object({
      data: Joi.array().items(OrderPlatformModel.JioCodeUpsertDataSet()),
    });
  }

  /** @returns {JioCodeUpsertResponse} */
  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),
      error: Joi.array().items(OrderPlatformModel.NestedErrorSchemaDataSet()),
      identifier: Joi.string().allow(""),
      success: Joi.boolean(),
      trace_id: Joi.string().allow(""),
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
      custom_messasge: Joi.string().allow(""),
      external_line_id: Joi.string().allow(""),
      meta: Joi.any(),
      quantity: Joi.number(),
      seller_identifier: Joi.string().allow("").required(),
    });
  }

  /** @returns {LockData} */
  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),
      locked: Joi.boolean(),
      mto: Joi.boolean(),
    });
  }

  /** @returns {Manifest} */
  static Manifest() {
    return Joi.object({
      company_id: Joi.number().required(),
      created_at: Joi.string().allow("").required(),
      created_by: Joi.string().allow("").required(),
      filters: OrderPlatformModel.Filters(),
      id: Joi.number().required(),
      is_active: Joi.boolean().required(),
      manifest_id: Joi.string().allow("").required(),
      meta: OrderPlatformModel.ManifestMeta(),
      pdf_meta: OrderPlatformModel.PDFMeta(),
      status: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
      user_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ManifestDetails} */
  static ManifestDetails() {
    return Joi.object({
      additional_shipment_count: Joi.number(),
      items: Joi.array().items(OrderPlatformModel.ManifestItemDetails()),
      manifest_details: Joi.array().items(OrderPlatformModel.Manifest()),
      page: OrderPlatformModel.ManifestPageInfo(),
    });
  }

  /** @returns {ManifestFile} */
  static ManifestFile() {
    return Joi.object({
      bucket: Joi.string().allow(""),
      key: Joi.string().allow(""),
      region: Joi.string().allow(""),
    });
  }

  /** @returns {ManifestFiltersResponse} */
  static ManifestFiltersResponse() {
    return Joi.object({
      advance_filter: Joi.array().items(OrderPlatformModel.FiltersInfo1()),
      global_filter: Joi.array().items(OrderPlatformModel.FiltersInfo1()),
    });
  }

  /** @returns {ManifestItemDetails} */
  static ManifestItemDetails() {
    return Joi.object({
      awb: Joi.string().allow(""),
      invoice_id: Joi.string().allow(""),
      item_qty: Joi.number(),
      order_id: Joi.string().allow("").required(),
      shipment_created_at: Joi.string().allow(""),
      shipment_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ManifestList} */
  static ManifestList() {
    return Joi.object({
      items: Joi.array().items(OrderPlatformModel.Manifest()),
      page: OrderPlatformModel.ManifestPageInfo(),
    });
  }

  /** @returns {ManifestMediaUpdate} */
  static ManifestMediaUpdate() {
    return Joi.object({
      code: Joi.number(),
      entity: Joi.string().allow(""),
      file: OrderPlatformModel.ManifestFile(),
      link: Joi.string().allow(""),
      media_type: Joi.string().allow(""),
      status: Joi.boolean(),
    });
  }

  /** @returns {ManifestMeta} */
  static ManifestMeta() {
    return Joi.object({
      filters: OrderPlatformModel.Filters(),
      total_shipment_prices_count: OrderPlatformModel.TotalShipmentPricesCount(),
    });
  }

  /** @returns {ManifestPageInfo} */
  static ManifestPageInfo() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      has_previous: Joi.boolean().required(),
      size: Joi.number().required(),
      total: Joi.number().required(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ManifestShipmentListing} */
  static ManifestShipmentListing() {
    return Joi.object({
      items: Joi.array().items(OrderPlatformModel.ManifestItemDetails()),
      lane: Joi.string().allow(""),
      message: Joi.string().allow(""),
      page: OrderPlatformModel.ManifestPageInfo().required(),
      status: Joi.number().required(),
      success: Joi.boolean().required(),
      total_count: Joi.number().required(),
    });
  }

  /** @returns {Meta} */
  static Meta() {
    return Joi.object({
      kafka_emission_status: Joi.number(),
      state_manager_used: Joi.string().allow(""),
    });
  }

  /** @returns {MetricCountResponse} */
  static MetricCountResponse() {
    return Joi.object({
      items: Joi.array().items(OrderPlatformModel.MetricsCount()),
    });
  }

  /** @returns {MetricsCount} */
  static MetricsCount() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      options: Joi.array().items(OrderPlatformModel.Options()),
      text: Joi.string().allow("").required(),
      value: Joi.number().required(),
    });
  }

  /** @returns {NestedErrorSchemaDataSet} */
  static NestedErrorSchemaDataSet() {
    return Joi.object({
      message: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {OmsReports} */
  static OmsReports() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      report_created_at: Joi.string().allow("").allow(null),
      report_id: Joi.string().allow(""),
      report_name: Joi.string().allow(""),
      report_requested_at: Joi.string().allow("").allow(null),
      report_type: Joi.string().allow(""),
      request_details: Joi.any(),
      s3_key: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {Options} */
  static Options() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.number(),
    });
  }

  /** @returns {OrderBagArticle} */
  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),
      return_config: OrderPlatformModel.ReturnConfig1(),
      size: Joi.string().allow(""),
      uid: Joi.string().allow(""),
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
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      current_status: OrderPlatformModel.CurrentStatus(),
      delivery_address: OrderPlatformModel.PlatformDeliveryAddress(),
      display_name: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      financial_breakup: OrderPlatformModel.FinancialBreakup(),
      group_id: Joi.string().allow(""),
      gst_details: OrderPlatformModel.BagGST(),
      identifier: Joi.string().allow(""),
      item: OrderPlatformModel.PlatformItem(),
      line_number: Joi.number(),
      meta: OrderPlatformModel.BagMeta(),
      parent_promo_bags: Joi.any(),
      payment_methods: Joi.array().items(
        OrderPlatformModel.BagPaymentMethods()
      ),
      prices: OrderPlatformModel.Prices(),
      quantity: Joi.number(),
      seller_identifier: Joi.string().allow(""),
    });
  }

  /** @returns {OrderBrandName} */
  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow(""),
      company: Joi.number().allow(null).required(),
      created_on: Joi.string().allow(""),
      id: Joi.number().required(),
      logo: Joi.string().allow(""),
      modified_on: Joi.string().allow(""),
    });
  }

  /** @returns {OrderData} */
  static OrderData() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),
      meta: OrderPlatformModel.OrderMeta(),
      order_date: Joi.string().allow("").required(),
      payment_methods: Joi.any(),
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
      affiliate_id: Joi.string().allow(""),
      cod_charges: Joi.string().allow(""),
      fynd_order_id: Joi.string().allow("").required(),
      order_date: Joi.string().allow(""),
      order_value: Joi.string().allow(""),
      ordering_channel: Joi.string().allow(""),
      ordering_channel_logo: Joi.any(),
      source: Joi.string().allow(""),
      tax_details: Joi.any(),
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

  /** @returns {OrderingStoreDetails} */
  static OrderingStoreDetails() {
    return Joi.object({
      address: Joi.string().allow(""),
      city: Joi.string().allow(""),
      code: Joi.string().allow(""),
      contact_person: Joi.string().allow(""),
      country: Joi.string().allow(""),
      id: Joi.number(),
      meta: Joi.any(),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      store_name: Joi.string().allow(""),
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
      lane: Joi.string().allow(""),
      message: Joi.string().allow(""),
      page: OrderPlatformModel.Page(),
      success: Joi.boolean(),
      total_count: Joi.number(),
    });
  }

  /** @returns {OrderMeta} */
  static OrderMeta() {
    return Joi.object({
      billing_staff_details: OrderPlatformModel.BillingStaffDetails(),
      cart_id: Joi.number(),
      comment: Joi.string().allow(""),
      company_logo: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      customer_note: Joi.string().allow(""),
      employee_id: Joi.number().allow(null),
      extra_meta: Joi.any(),
      files: Joi.array().items(Joi.any()),
      mongo_cart_id: Joi.number(),
      order_child_entities: Joi.array().items(Joi.string().allow("")),
      order_platform: Joi.string().allow(""),
      order_tags: Joi.array().items(Joi.any().allow(null)),
      order_type: Joi.string().allow(""),
      ordering_store: Joi.number(),
      payment_type: Joi.string().allow(""),
      platform_user_details: OrderPlatformModel.PlatformUserDetails(),
      staff: Joi.any(),
      transaction_data: OrderPlatformModel.TransactionData(),
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

  /** @returns {PDFLinks} */
  static PDFLinks() {
    return Joi.object({
      b2b: Joi.string().allow(""),
      credit_note_url: Joi.string().allow(""),
      delivery_challan_a4: Joi.string().allow(""),
      invoice: Joi.string().allow(""),
      invoice_a4: Joi.string().allow(""),
      invoice_a6: Joi.string().allow(""),
      invoice_export: Joi.string().allow(""),
      invoice_pos: Joi.string().allow(""),
      invoice_type: Joi.string().allow("").required(),
      label: Joi.string().allow(""),
      label_a4: Joi.string().allow(""),
      label_a6: Joi.string().allow(""),
      label_export: Joi.string().allow(""),
      label_pos: Joi.string().allow(""),
      label_type: Joi.string().allow("").required(),
      po_invoice: Joi.string().allow(""),
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

  /** @returns {PhoneDetails} */
  static PhoneDetails() {
    return Joi.object({
      country_code: Joi.number(),
      number: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformArticleAttributes} */
  static PlatformArticleAttributes() {
    return Joi.object({
      currency: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformBreakupValues} */
  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),
      name: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformChannel} */
  static PlatformChannel() {
    return Joi.object({
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformDeliveryAddress} */
  static PlatformDeliveryAddress() {
    return Joi.object({
      address_category: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow(""),
      contact_person: Joi.string().allow(""),
      country: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformItem} */
  static PlatformItem() {
    return Joi.object({
      attributes: OrderPlatformModel.PlatformArticleAttributes(),
      branch_url: Joi.string().allow("").allow(null),
      brand: Joi.string().allow(""),
      brand_id: Joi.number(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      code: Joi.string().allow(""),
      color: Joi.string().allow("").allow(null),
      department_id: Joi.number(),
      id: Joi.number(),
      image: Joi.array().items(Joi.string().allow("")),
      images: Joi.array().items(Joi.string().allow("")),
      l1_category: Joi.array().items(Joi.string().allow("")),
      l2_category: Joi.array().items(Joi.string().allow("")),
      l3_category: Joi.number(),
      l3_category_name: Joi.string().allow(""),
      last_updated_at: Joi.string().allow(""),
      meta: Joi.any(),
      name: Joi.string().allow(""),
      size: Joi.string().allow(""),
      slug_key: Joi.string().allow(""),
    });
  }

  /** @returns {PlatformOrderItems} */
  static PlatformOrderItems() {
    return Joi.object({
      breakup_values: Joi.array().items(
        OrderPlatformModel.PlatformBreakupValues()
      ),
      channel: OrderPlatformModel.PlatformChannel(),
      meta: Joi.any(),
      order_created_time: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      order_value: Joi.number(),
      payment_mode: Joi.string().allow(""),
      shipments: Joi.array().items(OrderPlatformModel.PlatformShipment()),
      total_order_value: Joi.number(),
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
      can_update_dimension: Joi.boolean(),
      company_details: OrderPlatformModel.CompanyDetails(),
      coupon: Joi.any(),
      custom_message: Joi.string().allow(""),
      custom_meta: Joi.array().items(Joi.any()),
      delivery_details: OrderPlatformModel.UserDetailsData(),
      delivery_slot: Joi.any(),
      dp_assignment: Joi.boolean(),
      dp_details: OrderPlatformModel.DPDetailsData(),
      enable_dp_tracking: Joi.boolean(),
      estimated_sla_time: Joi.string().allow(""),
      forward_shipment_id: Joi.string().allow("").allow(null),
      fulfilling_store: OrderPlatformModel.FulfillingStore(),
      fulfilment_priority: Joi.number(),
      gst_details: OrderPlatformModel.GSTDetailsData(),
      invoice: OrderPlatformModel.InvoiceInfo(),
      invoice_id: Joi.string().allow(""),
      is_dp_assign_enabled: Joi.boolean(),
      is_self_ship: Joi.boolean(),
      journey_type: Joi.string().allow(""),
      lock_status: Joi.boolean(),
      meta: OrderPlatformModel.ShipmentMeta(),
      operational_status: Joi.string().allow(""),
      order: OrderPlatformModel.OrderDetailsData(),
      ordering_store: OrderPlatformModel.OrderingStoreDetails(),
      packaging_type: Joi.string().allow(""),
      payment_methods: Joi.any(),
      payment_mode: Joi.string().allow(""),
      payments: OrderPlatformModel.ShipmentPayments(),
      picked_date: Joi.string().allow(""),
      platform_logo: Joi.string().allow(""),
      prices: OrderPlatformModel.Prices(),
      priority_text: Joi.string().allow("").allow(null),
      shipment_created_at: Joi.string().allow(""),
      shipment_details: OrderPlatformModel.ShipmentDetails(),
      shipment_id: Joi.string().allow("").required(),
      shipment_images: Joi.array().items(Joi.string().allow("")),
      shipment_quantity: Joi.number(),
      shipment_status: Joi.string().allow(""),
      status: OrderPlatformModel.ShipmentStatusData(),
      total_bags: Joi.number(),
      total_items: Joi.number(),
      tracking_list: Joi.array().items(OrderPlatformModel.TrackingList()),
      user: OrderPlatformModel.UserDataInfo(),
      user_agent: Joi.string().allow(""),
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
      platform_user_first_name: Joi.string().allow(""),
      platform_user_id: Joi.string().allow("").allow(null),
      platform_user_last_name: Joi.string().allow(""),
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
      amount_paid: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      brand_calculated_amount: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      cod_charges: Joi.number(),
      coupon_effective_discount: Joi.number(),
      coupon_value: Joi.number(),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_credits: Joi.number(),
      gift_price: Joi.number(),
      pm_price_split: Joi.number(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      promotion_effective_discount: Joi.number(),
      refund_amount: Joi.number(),
      refund_credit: Joi.number(),
      tax_collected_at_source: Joi.number(),
      transfer_price: Joi.number(),
      value_of_good: Joi.number(),
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

  /** @returns {ProcessManifest} */
  static ProcessManifest() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      filters: OrderPlatformModel.FiltersRequest().required(),
      manifest_id: Joi.string().allow(""),
      unique_id: Joi.string().allow("").required(),
    });
  }

  /** @returns {ProcessManifestItemResponse} */
  static ProcessManifestItemResponse() {
    return Joi.object({
      items: OrderPlatformModel.ProcessManifestResponse(),
    });
  }

  /** @returns {ProcessManifestResponse} */
  static ProcessManifestResponse() {
    return Joi.object({
      action: Joi.string().allow(""),
      company_id: Joi.number(),
      created_by: Joi.string().allow(""),
      filters: OrderPlatformModel.Filters(),
      manifest_id: Joi.string().allow(""),
      uid: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
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

  /** @returns {ResponseGetAssetShipment} */
  static ResponseGetAssetShipment() {
    return Joi.object({
      data: Joi.array().items(OrderPlatformModel.AssetByShipment()).required(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ReturnConfig} */
  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean(),
      time: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }

  /** @returns {ReturnConfig1} */
  static ReturnConfig1() {
    return Joi.object({
      returnable: Joi.boolean(),
      time: Joi.number(),
      unit: Joi.string().allow(""),
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
      priority: Joi.number(),
      processing_dates: OrderPlatformModel.ProcessingDates(),
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
      action_to_status: Joi.any(),
      lock_message: Joi.string().allow(""),
      lock_status: Joi.boolean(),
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
      message: Joi.string().allow(""),
      shipments: Joi.array().items(OrderPlatformModel.PlatformShipment()),
      success: Joi.boolean().required(),
    });
  }

  /** @returns {ShipmentInternalPlatformViewResponse} */
  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      items: Joi.array().items(OrderPlatformModel.ShipmentItem()),
      lane: Joi.string().allow(""),
      message: Joi.string().allow(""),
      page: OrderPlatformModel.Page(),
      success: Joi.boolean(),
      total_count: Joi.number(),
    });
  }

  /** @returns {ShipmentItem} */
  static ShipmentItem() {
    return Joi.object({
      bags: Joi.array().items(OrderPlatformModel.BagUnit()),
      can_process: Joi.boolean(),
      channel: OrderPlatformModel.ShipmentListingChannel(),
      customer_note: Joi.string().allow(""),
      delivery_address: OrderPlatformModel.PlatformDeliveryAddress(),
      display_name: Joi.string().allow(""),
      estimated_sla_time: Joi.string().allow("").allow(null),
      fulfilling_store: OrderPlatformModel.ShipmentItemFulFillingStore(),
      invoice_id: Joi.string().allow("").allow(null),
      lock_status: Joi.boolean(),
      meta: OrderPlatformModel.ShipmentItemMeta(),
      order_date: Joi.string().allow(""),
      order_id: Joi.string().allow("").required(),
      ordering_channnel: Joi.string().allow(""),
      payment_methods: Joi.any(),
      payment_mode: Joi.string().allow(""),
      previous_shipment_id: Joi.string().allow("").allow(null),
      prices: OrderPlatformModel.Prices(),
      shipment_created_at: Joi.string().allow("").required(),
      shipment_id: Joi.string().allow(""),
      shipment_status: OrderPlatformModel.ShipmentStatus(),
      status_created_at: Joi.string().allow(""),
      total_bags: Joi.number().required(),
      user: OrderPlatformModel.UserDataInfo(),
    });
  }

  /** @returns {ShipmentItemFulFillingStore} */
  static ShipmentItemFulFillingStore() {
    return Joi.object({
      address: Joi.string().allow("").allow(null),
      brand_store_tags: Joi.string().allow("").allow(null),
      city: Joi.string().allow(""),
      code: Joi.string().allow("").required(),
      id: Joi.number().required(),
      location_type: Joi.string().allow(""),
      meta: Joi.any().allow(null),
      name: Joi.string().allow(""),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      store_email: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentItemMeta} */
  static ShipmentItemMeta() {
    return Joi.object({
      activity_comment: Joi.string().allow(""),
      assign_dp_from_sb: Joi.boolean(),
      auto_trigger_dp_assignment_acf: Joi.boolean().required(),
      bag_weight: Joi.any(),
      debug_info: Joi.any(),
      dp_options: Joi.any(),
      dp_sort_key: Joi.string().allow("").allow(null),
      ewaybill_info: Joi.any(),
      existing_dp_list: Joi.array().items(Joi.string().allow("")),
      external: Joi.any(),
      formatted: OrderPlatformModel.Formatted(),
      fulfilment_priority_text: Joi.string().allow("").allow(null),
      is_international: Joi.boolean(),
      lock_data: OrderPlatformModel.LockData(),
      order_type: Joi.string().allow("").allow(null),
      packaging_name: Joi.string().allow(""),
      parent_dp_id: Joi.string().allow(""),
      pdf_media: Joi.array().items(Joi.any()),
      same_store_available: Joi.boolean(),
      shipment_chargeable_weight: Joi.number(),
      shipment_tags: Joi.array().items(OrderPlatformModel.ShipmentTags()),
      shipment_volumetric_weight: Joi.number(),
      shipment_weight: Joi.number(),
      shipping_zone: Joi.string().allow(""),
      sla: Joi.number(),
      store_invoice_updated_date: Joi.string().allow(""),
      tags: Joi.array().items(Joi.any()),
      timestamp: OrderPlatformModel.ShipmentTimeStamp(),
      weight: Joi.number(),
    });
  }

  /** @returns {ShipmentListingBrand} */
  static ShipmentListingBrand() {
    return Joi.object({
      created_on: Joi.string().allow(""),
      logo: Joi.string().allow(""),
      logo_base64: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentListingChannel} */
  static ShipmentListingChannel() {
    return Joi.object({
      channel_shipment_id: Joi.string().allow(""),
      is_affiliate: Joi.boolean(),
      logo: Joi.string().allow(""),
      name: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentMeta} */
  static ShipmentMeta() {
    return Joi.object({
      assign_dp_from_sb: Joi.boolean(),
      auto_trigger_dp_assignment_acf: Joi.boolean(),
      awb_number: Joi.string().allow(""),
      b2b_buyer_details: OrderPlatformModel.BuyerDetails(),
      b2c_buyer_details: Joi.any().allow(null),
      bag_weight: Joi.any(),
      box_type: Joi.string().allow("").allow(null),
      debug_info: OrderPlatformModel.DebugInfo(),
      dimension: OrderPlatformModel.Dimensions(),
      dp_id: Joi.string().allow("").allow(null),
      dp_name: Joi.string().allow(""),
      dp_options: Joi.any(),
      dp_sort_key: Joi.string().allow(""),
      due_date: Joi.string().allow(""),
      einvoice_info: OrderPlatformModel.EinvoiceInfo(),
      ewaybill_info: Joi.any().allow(null),
      external: Joi.any(),
      formatted: OrderPlatformModel.Formatted(),
      forward_affiliate_order_id: Joi.string().allow(""),
      forward_affiliate_shipment_id: Joi.string().allow(""),
      fulfilment_priority_text: Joi.string().allow("").allow(null),
      lock_data: OrderPlatformModel.LockData(),
      marketplace_store_id: Joi.string().allow(""),
      order_type: Joi.string().allow("").allow(null),
      packaging_name: Joi.string().allow(""),
      parent_dp_id: Joi.string().allow("").allow(null),
      po_number: Joi.string().allow(""),
      return_affiliate_order_id: Joi.string().allow(""),
      return_affiliate_shipment_id: Joi.string().allow(""),
      return_awb_number: Joi.string().allow(""),
      return_details: Joi.any(),
      return_store_node: Joi.number(),
      same_store_available: Joi.boolean().required(),
      shipment_tags: Joi.array().items(OrderPlatformModel.ShipmentTags()),
      shipment_volumetric_weight: Joi.number(),
      shipment_weight: Joi.number(),
      store_invoice_updated_date: Joi.string().allow(""),
      timestamp: OrderPlatformModel.ShipmentTimeStamp(),
      weight: Joi.number().required(),
    });
  }

  /** @returns {ShipmentPayments} */
  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      source: Joi.string().allow(""),
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
      code: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      final_state: Joi.any(),
      identifier: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      stack_trace: Joi.string().allow(""),
      status: Joi.number(),
    });
  }

  /** @returns {ShipmentStatus} */
  static ShipmentStatus() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.string().allow("")),
      created_at: Joi.string().allow(""),
      current_shipment_status: Joi.string().allow(""),
      meta: Joi.any().allow(null),
      shipment_id: Joi.string().allow(""),
      shipment_status_id: Joi.number(),
      status: Joi.string().allow("").required(),
      status_created_at: Joi.string().allow(""),
      title: Joi.string().allow("").required(),
    });
  }

  /** @returns {ShipmentStatusData} */
  static ShipmentStatusData() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.string().allow("")),
      created_at: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow(""),
      id: Joi.number(),
      meta: Joi.any(),
      shipment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentTags} */
  static ShipmentTags() {
    return Joi.object({
      display_text: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      slug: Joi.string().allow(""),
    });
  }

  /** @returns {ShipmentTimeStamp} */
  static ShipmentTimeStamp() {
    return Joi.object({
      max: Joi.number(),
      min: Joi.number(),
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
      address2: Joi.string().allow(""),
      alohomora_user_id: Joi.number(),
      brand_id: Joi.any(),
      brand_store_tags: Joi.array().items(Joi.string().allow("")),
      city: Joi.string().allow("").required(),
      code: Joi.string().allow(""),
      company_id: Joi.number().required(),
      contact_person: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      created_at: Joi.string().allow("").required(),
      fulfillment_channel: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      is_archived: Joi.boolean(),
      is_enabled_for_recon: Joi.boolean(),
      latitude: Joi.number().required(),
      location_type: Joi.string().allow("").required(),
      login_username: Joi.string().allow("").required(),
      longitude: Joi.number().required(),
      mall_area: Joi.string().allow("").allow(null),
      mall_name: Joi.string().allow("").allow(null),
      meta: OrderPlatformModel.StoreMeta().required(),
      name: Joi.string().allow("").required(),
      order_integration_id: Joi.string().allow(""),
      packaging_material_count: Joi.number(),
      parent_store_id: Joi.number(),
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
      area: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      contact_person: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      country_code: Joi.string().allow("").required(),
      created_at: Joi.string().allow("").required(),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      phone: Joi.string().allow("").allow(null).required(),
      pincode: Joi.number().required(),
      state: Joi.string().allow("").required(),
      updated_at: Joi.string().allow("").required(),
      version: Joi.string().allow(""),
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
      password: Joi.string().allow(""),
      user: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {StoreEwaybill} */
  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
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
      additional_contact_details: Joi.any(),
      display_name: Joi.string().allow("").required(),
      documents: OrderPlatformModel.StoreDocuments(),
      einvoice_portal_details: OrderPlatformModel.EInvoicePortalDetails(),
      ewaybill_portal_details: Joi.any(),
      gst_credentials: OrderPlatformModel.StoreGstCredentials().required(),
      gst_number: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      product_return_config: Joi.any(),
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

  /** @returns {Success} */
  static Success() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
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
    });
  }

  /** @returns {TotalShipmentPricesCount} */
  static TotalShipmentPricesCount() {
    return Joi.object({
      shipment_count: Joi.number(),
      total_price: Joi.number(),
    });
  }

  /** @returns {TrackingList} */
  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean(),
      is_passed: Joi.boolean(),
      status: Joi.string().allow("").required(),
      text: Joi.string().allow("").required(),
      time: Joi.string().allow(""),
    });
  }

  /** @returns {TransactionData} */
  static TransactionData() {
    return Joi.object({
      amount_paid: Joi.number(),
      currency: Joi.string().allow(""),
      entity: Joi.string().allow(""),
      payment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      terminal_id: Joi.string().allow(""),
      transaction_id: Joi.string().allow(""),
      unique_reference_number: Joi.string().allow(""),
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

  /** @returns {UserDataInfo} */
  static UserDataInfo() {
    return Joi.object({
      avis_user_id: Joi.string().allow(""),
      email: Joi.string().allow("").allow(null),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow("").allow(null),
      is_anonymous_user: Joi.boolean(),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow("").allow(null),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }

  /** @returns {UserDetailsData} */
  static UserDetailsData() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      address_type: Joi.string().allow(""),
      address1: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      phone: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
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
      is_default: Joi.boolean(),
      shipping: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }
}
module.exports = OrderPlatformModel;
