export = FinancePlatformModel;
/**
 * @typedef OrederFreezeResponse
 * @property {boolean} [success]
 * @property {boolean} [oms_freeze]
 * @property {string} [source]
 */
/**
 * @typedef GenerateReportMeta
 * @property {string} [brand]
 * @property {string} [company]
 * @property {string} [channel]
 */
/**
 * @typedef GenerateReportFilters
 * @property {string[]} [brand]
 * @property {string[]} [company]
 * @property {string[]} [channel]
 */
/**
 * @typedef GenerateReportPlatform
 * @property {string} [start_date]
 * @property {string} [end_date]
 * @property {GenerateReportMeta} [meta]
 * @property {string} [report_id]
 * @property {GenerateReportFilters} [filters]
 */
/**
 * @typedef GenerateReportReq
 * @property {GenerateReportPlatform} [data]
 */
/**
 * @typedef Page
 * @property {number} [item_count]
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef Currency
 * @property {string} [code]
 * @property {string} [symbol]
 * @property {string} [name]
 */
/**
 * @typedef GenerateReportJson
 * @property {Object} [data]
 * @property {number} [item_count]
 * @property {Page} [page]
 * @property {string} [end_date]
 * @property {string} [start_date]
 * @property {string[][]} [items]
 * @property {string[]} [headers]
 */
/**
 * @typedef Error
 * @property {number} [status]
 * @property {string} [reason]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {ErrorMeta} [meta]
 */
/**
 * @typedef ErrorMeta
 * @property {ErrorMetaItems[]} [columns_errors]
 */
/**
 * @typedef ErrorMetaItems
 * @property {number} [code]
 * @property {string} [message]
 */
/**
 * @typedef DownloadReport
 * @property {DownloadReportData} [data]
 */
/**
 * @typedef DownloadReportData
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {string} [start_date]
 * @property {string} [end_date]
 */
/**
 * @typedef DownloadReportItems
 * @property {string} [start_date]
 * @property {string} [end_date]
 * @property {GenerateReportMeta} [meta]
 * @property {string} [report_id]
 * @property {GenerateReportFilters} [filters]
 * @property {string} [type_of_request]
 */
/**
 * @typedef DownloadReportList
 * @property {DownloadReportItems[]} [items]
 * @property {Page} [page]
 * @property {number} [item_count]
 */
/**
 * @typedef GetEngineFilters
 * @property {string} [config_field]
 * @property {string} [status]
 * @property {boolean} [is_active]
 * @property {string} [seller_id]
 */
/**
 * @typedef GetEngineData
 * @property {string} [status]
 * @property {GetEngineFilters} [filters]
 * @property {string[]} [project]
 * @property {string} [table_name]
 * @property {Object} [search]
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {string} [order_by]
 */
/**
 * @typedef GetEngineReq
 * @property {GetEngineData} [data]
 */
/**
 * @typedef GetEngineResponse
 * @property {boolean} [success]
 * @property {Object[]} [items]
 * @property {Page} [page]
 * @property {number} [item_count]
 */
/**
 * @typedef GetReason
 * @property {string} [reason_type]
 */
/**
 * @typedef GetReasonReq
 * @property {GetReason} [data]
 */
/**
 * @typedef ReasonItem
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [display_name]
 */
/**
 * @typedef GetReasonResponse
 * @property {boolean} [success]
 * @property {ReasonItem[]} [item_list]
 * @property {number} [item_count]
 * @property {Page} [page]
 */
/**
 * @typedef GetReportListData
 * @property {string} [role_name]
 * @property {boolean} [listing_enabled]
 */
/**
 * @typedef GetReportListReq
 * @property {GetReportListData} [data]
 */
/**
 * @typedef GetAffiliate
 * @property {number} [company_id]
 */
/**
 * @typedef GetReportListResponse
 * @property {boolean} [success]
 * @property {ReportItem[]} [items]
 * @property {Page} [page]
 * @property {number} [total_count]
 */
/**
 * @typedef ReportItem
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string[]} [allowed_filters]
 * @property {Object} [config_meta]
 * @property {string} [report_type]
 * @property {string} [display_date]
 */
/**
 * @typedef GetAffiliateResponse
 * @property {string} [reason]
 * @property {boolean} [success]
 * @property {Object[]} [docs]
 */
/**
 * @typedef DownloadCreditDebitNote
 * @property {string[]} [note_id]
 */
/**
 * @typedef DownloadCreditDebitNoteReq
 * @property {DownloadCreditDebitNote} [data]
 */
/**
 * @typedef DownloadCreditDebitNoteResponseData
 * @property {string} [id]
 * @property {string} [pdf_s3_url]
 */
/**
 * @typedef DownloadCreditDebitNoteResponse
 * @property {boolean} [success]
 * @property {DownloadCreditDebitNoteResponseData[]} [data]
 */
/**
 * @typedef PaymentProcessPayload
 * @property {string} [platform]
 * @property {number} [amount]
 * @property {string} [transaction_type]
 * @property {string} [source_reference]
 * @property {number} [total_amount]
 * @property {Object} [meta]
 * @property {string} [currency]
 * @property {string} [seller_id]
 * @property {string} [mode_of_payment]
 * @property {string} [invoice_number]
 */
/**
 * @typedef PaymentProcessReq
 * @property {PaymentProcessPayload} [data]
 */
/**
 * @typedef PaymentProcessResponse
 * @property {number} [code]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [transaction_id]
 * @property {string} [redirect_url]
 */
/**
 * @typedef CreditlineDataPlatformPayload
 * @property {number} [page]
 * @property {string} [seller_id]
 * @property {string} [end_date]
 * @property {string} [start_date]
 * @property {number} [page_size]
 */
/**
 * @typedef CreditlineDataPlatformReq
 * @property {CreditlineDataPlatformPayload} [data]
 */
/**
 * @typedef CreditlineDataPlatformResponse
 * @property {Object[]} [items]
 * @property {number} [code]
 * @property {boolean} [show_mr]
 * @property {Page} [page]
 * @property {string} [message]
 * @property {string[]} [headers]
 * @property {number} [item_count]
 */
/**
 * @typedef IsCreditlinePayload
 * @property {string} [seller_id]
 */
/**
 * @typedef IsCreditlinePlatformReq
 * @property {IsCreditlinePayload} [data]
 */
/**
 * @typedef IsCreditlinePlatformResponse
 * @property {boolean} [is_creditline_opted]
 * @property {number} [code]
 */
/**
 * @typedef InvoiceTypePayloadData
 * @property {boolean} [is_active]
 */
/**
 * @typedef InvoiceTypeReq
 * @property {InvoiceTypePayloadData} [data]
 */
/**
 * @typedef InvoiceTypeResponseItems
 * @property {string} [text]
 * @property {string} [value]
 */
/**
 * @typedef InvoiceTypeResponse
 * @property {boolean} [success]
 * @property {InvoiceTypeResponseItems[]} [invoice_type_list]
 * @property {InvoiceTypeResponseItems[]} [payment_status_list]
 */
/**
 * @typedef InoviceListingPayloadDataFilters
 * @property {string[]} [payment_status]
 * @property {string[]} [invoice_type]
 * @property {string[]} [company_id]
 */
/**
 * @typedef InvoiceListingPayloadData
 * @property {number} [page_size]
 * @property {number} [page]
 * @property {string} [start_date]
 * @property {string} [end_date]
 * @property {string} [search]
 * @property {InoviceListingPayloadDataFilters} [filters]
 */
/**
 * @typedef InvoiceListingReq
 * @property {InvoiceListingPayloadData} [data]
 */
/**
 * @typedef UnpaidInvoiceDataItems
 * @property {number} [total_unpaid_invoice_count]
 * @property {string} [currency]
 * @property {number} [total_unpaid_amount]
 */
/**
 * @typedef InvoiceListingResponseItems
 * @property {number} [amount]
 * @property {string} [company]
 * @property {string} [status]
 * @property {string} [due_date]
 * @property {string} [invoice_date]
 * @property {string} [invoice_type]
 * @property {string} [period]
 * @property {string} [invoice_number]
 * @property {boolean} [is_downloadable]
 * @property {string} [invoice_id]
 * @property {Currency} [currency]
 */
/**
 * @typedef InvoiceListingResponse
 * @property {boolean} [success]
 * @property {string[]} [headers]
 * @property {UnpaidInvoiceDataItems} [unpaid_invoice_data]
 * @property {InvoiceListingResponseItems[]} [items]
 * @property {Page} [page]
 * @property {number} [item_count]
 */
/**
 * @typedef InvoicePdfPayloadData
 * @property {string[]} [invoice_number]
 */
/**
 * @typedef InvoicePdfReq
 * @property {InvoicePdfPayloadData} [data]
 */
/**
 * @typedef InvoicePdfResponse
 * @property {boolean} [success]
 * @property {string[]} [data]
 * @property {string[]} [error]
 */
/**
 * @typedef IsCnRefundMethodData
 * @property {string} [affiliate_id]
 * @property {boolean} [toggle_edit_required]
 * @property {number} [seller_id]
 */
/**
 * @typedef IsCnRefundMethodReq
 * @property {IsCnRefundMethodData} [data]
 */
/**
 * @typedef IsCnRefundMethodResponseData
 * @property {boolean} [is_first_time_user]
 */
/**
 * @typedef IsCnRefundMethodResponse
 * @property {boolean} [success]
 * @property {IsCnRefundMethodResponseData} [data]
 */
/**
 * @typedef CreditNoteConfigNotificationEvents
 * @property {number} [expiration_reminder_to_customer]
 */
/**
 * @typedef CreateSellerCreditNoteConfig
 * @property {boolean} [is_cn_as_refund_method]
 * @property {string} [affiliate_id]
 * @property {string[]} [source_channel]
 * @property {number} [seller_id]
 * @property {CreditNoteConfigNotificationEvents} [notification_events]
 * @property {string} [sales_channel_name]
 * @property {string[]} [ordering_channel]
 * @property {number} [validity]
 * @property {string} [currency_type]
 * @property {string[]} [slug_values]
 */
/**
 * @typedef CreateSellerCreditNoteConfigReq
 * @property {CreateSellerCreditNoteConfig} [data]
 */
/**
 * @typedef CreateSellerCreditNoteConfigResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef DeleteConfig
 * @property {string} [affiliate_id]
 * @property {string[]} [slug_values]
 * @property {number} [seller_id]
 */
/**
 * @typedef DeleteConfigReq
 * @property {DeleteConfig} [data]
 */
/**
 * @typedef DeleteConfigResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef ChannelDisplayNameItems
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef ChannelDisplayNameResponse
 * @property {boolean} [success]
 * @property {ChannelDisplayNameItems[]} [items]
 */
/**
 * @typedef CnReferenceNumber
 * @property {string} [cn_reference_number]
 */
/**
 * @typedef GetPdfUrlViewReq
 * @property {CnReferenceNumber} [data]
 */
/**
 * @typedef GetPdfUrlViewResponseData
 * @property {string} [s3_pdf_link]
 * @property {string} [cn_reference_number]
 */
/**
 * @typedef GetPdfUrlViewResponse
 * @property {boolean} [success]
 * @property {GetPdfUrlViewResponseData} [data]
 */
/**
 * @typedef CreditNoteDetailsReq
 * @property {CnReferenceNumber} [data]
 */
/**
 * @typedef CnDetails
 * @property {string} [staff_id]
 * @property {string} [expiry_date]
 * @property {string} [channel_of_issuance]
 * @property {string} [order_id]
 * @property {string} [date_issued]
 * @property {string} [ordering_channel]
 * @property {string} [shipment_id]
 * @property {string} [store_id]
 * @property {string} [invoice_number]
 */
/**
 * @typedef RedemptionDetails
 * @property {Object} [meta]
 * @property {string} [staff_id]
 * @property {string} [created_at]
 * @property {string} [order_id]
 * @property {string} [store_id]
 * @property {string} [shipment_id]
 * @property {string} [ordering_channel]
 * @property {number} [amount_debited]
 * @property {string} [invoice_number]
 */
/**
 * @typedef CreditNoteDetails
 * @property {string} [currency]
 * @property {number} [current_amount_used]
 * @property {string} [cn_status]
 * @property {string} [customer_mobile_number]
 * @property {string} [cn_reference_number]
 * @property {CnDetails} [cn_details]
 * @property {RedemptionDetails[]} [redemption_details]
 * @property {number} [remaining_cn_amount]
 * @property {number} [available_cn_balance]
 * @property {number} [cn_amount]
 */
/**
 * @typedef CreditNoteDetailsResponse
 * @property {boolean} [success]
 * @property {CreditNoteDetails} [data]
 */
/**
 * @typedef GetCustomerCreditBalance
 * @property {string} [affiliate_id]
 * @property {number} [seller_id]
 * @property {string} [customer_mobile_number]
 */
/**
 * @typedef GetCustomerCreditBalanceReq
 * @property {GetCustomerCreditBalance} [data]
 */
/**
 * @typedef GetCustomerCreditBalanceResponseData
 * @property {string} [customer_mobile_number]
 * @property {number} [total_credited_balance]
 */
/**
 * @typedef GetCustomerCreditBalanceResponse
 * @property {boolean} [success]
 * @property {GetCustomerCreditBalanceResponseData} [data]
 */
/**
 * @typedef GetCnConfigReq
 * @property {DeleteConfig} [data]
 */
/**
 * @typedef GetCnConfigResponseMeta
 * @property {string} [reason]
 * @property {string[]} [source_channel]
 */
/**
 * @typedef GetCnConfigResponseData
 * @property {boolean} [is_cn_as_refund_method]
 * @property {string} [affiliate_id]
 * @property {Object} [meta]
 * @property {number} [seller_id]
 * @property {CreditNoteConfigNotificationEvents} [notification_events]
 * @property {number} [validity]
 * @property {string[]} [redemption_ordering_channel]
 * @property {string} [currency_type]
 */
/**
 * @typedef GetCnConfigResponse
 * @property {boolean} [success]
 * @property {GetCnConfigResponseData} [data]
 */
/**
 * @typedef CnGenerateReportFilters
 * @property {string[]} [staff_id]
 * @property {string[]} [channel_of_issuance]
 * @property {string[]} [utilisation]
 * @property {string[]} [ordering_channel]
 * @property {number[]} [store_id]
 * @property {string[]} [type_of_transaction]
 * @property {string[]} [issuance_channel]
 */
/**
 * @typedef CnGenerateReport
 * @property {number} [page]
 * @property {string} [end_date]
 * @property {number} [page_size]
 * @property {CnGenerateReportFilters} [filters]
 * @property {string} [affiliate_id]
 * @property {GenerateReportFilters} [meta]
 * @property {string} [search]
 * @property {string} [report_id]
 * @property {string} [search_type]
 * @property {string} [start_date]
 */
/**
 * @typedef GenerateReportCustomerCnReq
 * @property {CnGenerateReport} [data]
 */
/**
 * @typedef CnGenerateReportItems
 * @property {string} [expiry_date]
 * @property {string} [status]
 * @property {number} [total_amount]
 * @property {string} [order_id]
 * @property {string} [date_issued]
 * @property {string} [shipment_id]
 * @property {string} [invoice_number]
 * @property {string} [credit_note_number]
 */
/**
 * @typedef GenerateReportCustomerCnResponseData
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CnGenerateReportItems[]} [items]
 * @property {Object} [row_header_display_order]
 * @property {string} [end_date]
 * @property {Page} [page]
 * @property {string[]} [headers]
 * @property {string[]} [primary_headers]
 * @property {string[]} [allowed_filters]
 * @property {string} [start_date]
 * @property {number} [item_count]
 */
/**
 * @typedef GenerateReportCustomerCnResponse
 * @property {GenerateReportCustomerCnResponseData} [data]
 */
/**
 * @typedef CnDownloadReport
 * @property {number} [page]
 * @property {string} [start_date]
 * @property {string} [end_date]
 * @property {string} [affiliate_id]
 * @property {string} [search]
 * @property {string} [status]
 * @property {string} [search_type]
 * @property {number} [page_size]
 */
/**
 * @typedef DownloadReportCustomerCnReq
 * @property {CnDownloadReport} [data]
 */
/**
 * @typedef DownloadReportResponseData
 * @property {string} [report_config_id]
 * @property {string} [full_name]
 * @property {string} [requested_by]
 * @property {string} [start_date]
 * @property {string} [end_date]
 * @property {Object} [request_dict]
 * @property {string} [download_link]
 * @property {string} [created_at]
 * @property {Object} [meta]
 * @property {string} [msg]
 * @property {string} [report_name]
 * @property {string} [status]
 * @property {string} [display_name]
 * @property {Object} [filters]
 */
/**
 * @typedef DownloadReportCustomerCnResponse
 * @property {DownloadReportResponseData[]} [items]
 * @property {DownloadReportResponseData[]} [data]
 * @property {number} [item_count]
 * @property {Page} [page]
 */
/**
 * @typedef GetReportingFilters
 * @property {string} [text]
 * @property {string} [type]
 * @property {Object[]} [options]
 * @property {string} [value]
 */
/**
 * @typedef GetReportingNestedFilters
 * @property {string} [text]
 * @property {Object[]} [options]
 * @property {boolean} [required]
 * @property {string} [placeholder_text]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef GetReportingFiltersReasonOptions
 * @property {string} [text]
 * @property {string} [value]
 * @property {string} [placeholder_text]
 */
/**
 * @typedef GetReportingFiltersReason
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [value]
 * @property {GetReportingFiltersReasonOptions[]} [options]
 */
/**
 * @typedef GetReportingFiltersResponse
 * @property {GetReportingFiltersReason} [reason]
 * @property {GetReportingFilters} [search]
 * @property {GetReportingNestedFilters[]} [filters]
 * @property {GetReportingFilters} [status]
 */
/**
 * @typedef InvoicePaymentOptionsPayloadData
 * @property {string} [invoice_number]
 */
/**
 * @typedef InvoicePaymentOptionsReq
 * @property {InvoicePaymentOptionsPayloadData} [data]
 */
/**
 * @typedef InvoicePaymentOptionsResponsePayableAmounts
 * @property {number} [amount]
 * @property {string} [amount_key]
 * @property {string} [header]
 */
/**
 * @typedef InvoicePaymentOptionsResponseDeductedAmounts
 * @property {number} [amount]
 * @property {string} [header]
 * @property {string} [amount_key]
 * @property {boolean} [is_payable]
 * @property {string} [symbol]
 */
/**
 * @typedef InvoicePaymentOptionsResponseData
 * @property {Currency} [currency]
 * @property {string} [invoice_type]
 * @property {InvoicePaymentOptionsResponsePayableAmounts[]} [display_amounts]
 * @property {Object} [total_amount]
 * @property {Object} [deducted_amounts]
 * @property {InvoicePaymentOptionsResponsePayableAmounts[]} [payable_amounts]
 */
/**
 * @typedef InvoicePaymentOptionsResponse
 * @property {string} [reason]
 * @property {InvoicePaymentOptionsResponseData} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef PaymentDetail
 * @property {string} [display_name]
 * @property {string} [value]
 */
/**
 * @typedef PaidInvoicePaymentDetail
 * @property {PaymentDetail[]} [payment_details]
 * @property {string} [date_of_payment]
 * @property {number} [amount]
 */
/**
 * @typedef InvoicePaymentDetailsResponseData
 * @property {PaidInvoicePaymentDetail[]} [paid_invoice_payment_details]
 * @property {Object[]} [failed_attempts_details]
 */
/**
 * @typedef InvoicePaymentDetailsResponse
 * @property {string} [reason]
 * @property {InvoicePaymentDetailsResponseData} [data]
 * @property {boolean} [success]
 * @property {boolean} [payment_details_visible]
 */
/**
 * @typedef InvoiceActivityLogsResponseData
 * @property {string} [performed_by]
 * @property {string} [status]
 * @property {string} [reason]
 * @property {boolean} [is_resolved]
 * @property {number} [retry_attempts]
 * @property {number} [max_retry_attempts]
 */
/**
 * @typedef InvoiceActivityLogsResponse
 * @property {InvoiceActivityLogsResponseData[]} [data]
 */
/**
 * @typedef InvoiceActivityLogError
 * @property {string} [reason]
 */
/**
 * @typedef UnlockCreditNoteRequestData
 * @property {string} [seller_id]
 * @property {string[]} [locked_credit_notes]
 * @property {string} [unlock_reason]
 * @property {string} [description]
 */
/**
 * @typedef UnlockCreditNoteReq
 * @property {UnlockCreditNoteRequestData} [data]
 */
/**
 * @typedef UnlockCreditNoteResponseData
 * @property {boolean} [is_cn_unlocked]
 * @property {string} [status]
 */
/**
 * @typedef UnlockCreditNoteResponse
 * @property {boolean} [success]
 * @property {UnlockCreditNoteResponseData} [data]
 */
declare class FinancePlatformModel {
}
declare namespace FinancePlatformModel {
    export { OrederFreezeResponse, GenerateReportMeta, GenerateReportFilters, GenerateReportPlatform, GenerateReportReq, Page, Currency, GenerateReportJson, Error, ErrorMeta, ErrorMetaItems, DownloadReport, DownloadReportData, DownloadReportItems, DownloadReportList, GetEngineFilters, GetEngineData, GetEngineReq, GetEngineResponse, GetReason, GetReasonReq, ReasonItem, GetReasonResponse, GetReportListData, GetReportListReq, GetAffiliate, GetReportListResponse, ReportItem, GetAffiliateResponse, DownloadCreditDebitNote, DownloadCreditDebitNoteReq, DownloadCreditDebitNoteResponseData, DownloadCreditDebitNoteResponse, PaymentProcessPayload, PaymentProcessReq, PaymentProcessResponse, CreditlineDataPlatformPayload, CreditlineDataPlatformReq, CreditlineDataPlatformResponse, IsCreditlinePayload, IsCreditlinePlatformReq, IsCreditlinePlatformResponse, InvoiceTypePayloadData, InvoiceTypeReq, InvoiceTypeResponseItems, InvoiceTypeResponse, InoviceListingPayloadDataFilters, InvoiceListingPayloadData, InvoiceListingReq, UnpaidInvoiceDataItems, InvoiceListingResponseItems, InvoiceListingResponse, InvoicePdfPayloadData, InvoicePdfReq, InvoicePdfResponse, IsCnRefundMethodData, IsCnRefundMethodReq, IsCnRefundMethodResponseData, IsCnRefundMethodResponse, CreditNoteConfigNotificationEvents, CreateSellerCreditNoteConfig, CreateSellerCreditNoteConfigReq, CreateSellerCreditNoteConfigResponse, DeleteConfig, DeleteConfigReq, DeleteConfigResponse, ChannelDisplayNameItems, ChannelDisplayNameResponse, CnReferenceNumber, GetPdfUrlViewReq, GetPdfUrlViewResponseData, GetPdfUrlViewResponse, CreditNoteDetailsReq, CnDetails, RedemptionDetails, CreditNoteDetails, CreditNoteDetailsResponse, GetCustomerCreditBalance, GetCustomerCreditBalanceReq, GetCustomerCreditBalanceResponseData, GetCustomerCreditBalanceResponse, GetCnConfigReq, GetCnConfigResponseMeta, GetCnConfigResponseData, GetCnConfigResponse, CnGenerateReportFilters, CnGenerateReport, GenerateReportCustomerCnReq, CnGenerateReportItems, GenerateReportCustomerCnResponseData, GenerateReportCustomerCnResponse, CnDownloadReport, DownloadReportCustomerCnReq, DownloadReportResponseData, DownloadReportCustomerCnResponse, GetReportingFilters, GetReportingNestedFilters, GetReportingFiltersReasonOptions, GetReportingFiltersReason, GetReportingFiltersResponse, InvoicePaymentOptionsPayloadData, InvoicePaymentOptionsReq, InvoicePaymentOptionsResponsePayableAmounts, InvoicePaymentOptionsResponseDeductedAmounts, InvoicePaymentOptionsResponseData, InvoicePaymentOptionsResponse, PaymentDetail, PaidInvoicePaymentDetail, InvoicePaymentDetailsResponseData, InvoicePaymentDetailsResponse, InvoiceActivityLogsResponseData, InvoiceActivityLogsResponse, InvoiceActivityLogError, UnlockCreditNoteRequestData, UnlockCreditNoteReq, UnlockCreditNoteResponseData, UnlockCreditNoteResponse };
}
/** @returns {OrederFreezeResponse} */
declare function OrederFreezeResponse(): OrederFreezeResponse;
type OrederFreezeResponse = {
    success?: boolean;
    oms_freeze?: boolean;
    source?: string;
};
/** @returns {GenerateReportMeta} */
declare function GenerateReportMeta(): GenerateReportMeta;
type GenerateReportMeta = {
    brand?: string;
    company?: string;
    channel?: string;
};
/** @returns {GenerateReportFilters} */
declare function GenerateReportFilters(): GenerateReportFilters;
type GenerateReportFilters = {
    brand?: string[];
    company?: string[];
    channel?: string[];
};
/** @returns {GenerateReportPlatform} */
declare function GenerateReportPlatform(): GenerateReportPlatform;
type GenerateReportPlatform = {
    start_date?: string;
    end_date?: string;
    meta?: GenerateReportMeta;
    report_id?: string;
    filters?: GenerateReportFilters;
};
/** @returns {GenerateReportReq} */
declare function GenerateReportReq(): GenerateReportReq;
type GenerateReportReq = {
    data?: GenerateReportPlatform;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    item_count?: number;
    current?: number;
    has_next?: boolean;
    size?: number;
    type?: string;
};
/** @returns {Currency} */
declare function Currency(): Currency;
type Currency = {
    code?: string;
    symbol?: string;
    name?: string;
};
/** @returns {GenerateReportJson} */
declare function GenerateReportJson(): GenerateReportJson;
type GenerateReportJson = {
    data?: any;
    item_count?: number;
    page?: Page;
    end_date?: string;
    start_date?: string;
    items?: string[][];
    headers?: string[];
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    status?: number;
    reason?: string;
    success?: boolean;
    message?: string;
    code?: string;
    exception?: string;
    info?: string;
    request_id?: string;
    stack_trace?: string;
    meta?: ErrorMeta;
};
/** @returns {ErrorMeta} */
declare function ErrorMeta(): ErrorMeta;
type ErrorMeta = {
    columns_errors?: ErrorMetaItems[];
};
/** @returns {ErrorMetaItems} */
declare function ErrorMetaItems(): ErrorMetaItems;
type ErrorMetaItems = {
    code?: number;
    message?: string;
};
/** @returns {DownloadReport} */
declare function DownloadReport(): DownloadReport;
type DownloadReport = {
    data?: DownloadReportData;
};
/** @returns {DownloadReportData} */
declare function DownloadReportData(): DownloadReportData;
type DownloadReportData = {
    page?: number;
    page_size?: number;
    start_date?: string;
    end_date?: string;
};
/** @returns {DownloadReportItems} */
declare function DownloadReportItems(): DownloadReportItems;
type DownloadReportItems = {
    start_date?: string;
    end_date?: string;
    meta?: GenerateReportMeta;
    report_id?: string;
    filters?: GenerateReportFilters;
    type_of_request?: string;
};
/** @returns {DownloadReportList} */
declare function DownloadReportList(): DownloadReportList;
type DownloadReportList = {
    items?: DownloadReportItems[];
    page?: Page;
    item_count?: number;
};
/** @returns {GetEngineFilters} */
declare function GetEngineFilters(): GetEngineFilters;
type GetEngineFilters = {
    config_field?: string;
    status?: string;
    is_active?: boolean;
    seller_id?: string;
};
/** @returns {GetEngineData} */
declare function GetEngineData(): GetEngineData;
type GetEngineData = {
    status?: string;
    filters?: GetEngineFilters;
    project?: string[];
    table_name?: string;
    search?: any;
    page?: number;
    page_size?: number;
    order_by?: string;
};
/** @returns {GetEngineReq} */
declare function GetEngineReq(): GetEngineReq;
type GetEngineReq = {
    data?: GetEngineData;
};
/** @returns {GetEngineResponse} */
declare function GetEngineResponse(): GetEngineResponse;
type GetEngineResponse = {
    success?: boolean;
    items?: any[];
    page?: Page;
    item_count?: number;
};
/** @returns {GetReason} */
declare function GetReason(): GetReason;
type GetReason = {
    reason_type?: string;
};
/** @returns {GetReasonReq} */
declare function GetReasonReq(): GetReasonReq;
type GetReasonReq = {
    data?: GetReason;
};
/** @returns {ReasonItem} */
declare function ReasonItem(): ReasonItem;
type ReasonItem = {
    id?: string;
    name?: string;
    display_name?: string;
};
/** @returns {GetReasonResponse} */
declare function GetReasonResponse(): GetReasonResponse;
type GetReasonResponse = {
    success?: boolean;
    item_list?: ReasonItem[];
    item_count?: number;
    page?: Page;
};
/** @returns {GetReportListData} */
declare function GetReportListData(): GetReportListData;
type GetReportListData = {
    role_name?: string;
    listing_enabled?: boolean;
};
/** @returns {GetReportListReq} */
declare function GetReportListReq(): GetReportListReq;
type GetReportListReq = {
    data?: GetReportListData;
};
/** @returns {GetAffiliate} */
declare function GetAffiliate(): GetAffiliate;
type GetAffiliate = {
    company_id?: number;
};
/** @returns {GetReportListResponse} */
declare function GetReportListResponse(): GetReportListResponse;
type GetReportListResponse = {
    success?: boolean;
    items?: ReportItem[];
    page?: Page;
    total_count?: number;
};
/** @returns {ReportItem} */
declare function ReportItem(): ReportItem;
type ReportItem = {
    id?: string;
    name?: string;
    description?: string;
    allowed_filters?: string[];
    config_meta?: any;
    report_type?: string;
    display_date?: string;
};
/** @returns {GetAffiliateResponse} */
declare function GetAffiliateResponse(): GetAffiliateResponse;
type GetAffiliateResponse = {
    reason?: string;
    success?: boolean;
    docs?: any[];
};
/** @returns {DownloadCreditDebitNote} */
declare function DownloadCreditDebitNote(): DownloadCreditDebitNote;
type DownloadCreditDebitNote = {
    note_id?: string[];
};
/** @returns {DownloadCreditDebitNoteReq} */
declare function DownloadCreditDebitNoteReq(): DownloadCreditDebitNoteReq;
type DownloadCreditDebitNoteReq = {
    data?: DownloadCreditDebitNote;
};
/** @returns {DownloadCreditDebitNoteResponseData} */
declare function DownloadCreditDebitNoteResponseData(): DownloadCreditDebitNoteResponseData;
type DownloadCreditDebitNoteResponseData = {
    id?: string;
    pdf_s3_url?: string;
};
/** @returns {DownloadCreditDebitNoteResponse} */
declare function DownloadCreditDebitNoteResponse(): DownloadCreditDebitNoteResponse;
type DownloadCreditDebitNoteResponse = {
    success?: boolean;
    data?: DownloadCreditDebitNoteResponseData[];
};
/** @returns {PaymentProcessPayload} */
declare function PaymentProcessPayload(): PaymentProcessPayload;
type PaymentProcessPayload = {
    platform?: string;
    amount?: number;
    transaction_type?: string;
    source_reference?: string;
    total_amount?: number;
    meta?: any;
    currency?: string;
    seller_id?: string;
    mode_of_payment?: string;
    invoice_number?: string;
};
/** @returns {PaymentProcessReq} */
declare function PaymentProcessReq(): PaymentProcessReq;
type PaymentProcessReq = {
    data?: PaymentProcessPayload;
};
/** @returns {PaymentProcessResponse} */
declare function PaymentProcessResponse(): PaymentProcessResponse;
type PaymentProcessResponse = {
    code?: number;
    message?: string;
    meta?: any;
    transaction_id?: string;
    redirect_url?: string;
};
/** @returns {CreditlineDataPlatformPayload} */
declare function CreditlineDataPlatformPayload(): CreditlineDataPlatformPayload;
type CreditlineDataPlatformPayload = {
    page?: number;
    seller_id?: string;
    end_date?: string;
    start_date?: string;
    page_size?: number;
};
/** @returns {CreditlineDataPlatformReq} */
declare function CreditlineDataPlatformReq(): CreditlineDataPlatformReq;
type CreditlineDataPlatformReq = {
    data?: CreditlineDataPlatformPayload;
};
/** @returns {CreditlineDataPlatformResponse} */
declare function CreditlineDataPlatformResponse(): CreditlineDataPlatformResponse;
type CreditlineDataPlatformResponse = {
    items?: any[];
    code?: number;
    show_mr?: boolean;
    page?: Page;
    message?: string;
    headers?: string[];
    item_count?: number;
};
/** @returns {IsCreditlinePayload} */
declare function IsCreditlinePayload(): IsCreditlinePayload;
type IsCreditlinePayload = {
    seller_id?: string;
};
/** @returns {IsCreditlinePlatformReq} */
declare function IsCreditlinePlatformReq(): IsCreditlinePlatformReq;
type IsCreditlinePlatformReq = {
    data?: IsCreditlinePayload;
};
/** @returns {IsCreditlinePlatformResponse} */
declare function IsCreditlinePlatformResponse(): IsCreditlinePlatformResponse;
type IsCreditlinePlatformResponse = {
    is_creditline_opted?: boolean;
    code?: number;
};
/** @returns {InvoiceTypePayloadData} */
declare function InvoiceTypePayloadData(): InvoiceTypePayloadData;
type InvoiceTypePayloadData = {
    is_active?: boolean;
};
/** @returns {InvoiceTypeReq} */
declare function InvoiceTypeReq(): InvoiceTypeReq;
type InvoiceTypeReq = {
    data?: InvoiceTypePayloadData;
};
/** @returns {InvoiceTypeResponseItems} */
declare function InvoiceTypeResponseItems(): InvoiceTypeResponseItems;
type InvoiceTypeResponseItems = {
    text?: string;
    value?: string;
};
/** @returns {InvoiceTypeResponse} */
declare function InvoiceTypeResponse(): InvoiceTypeResponse;
type InvoiceTypeResponse = {
    success?: boolean;
    invoice_type_list?: InvoiceTypeResponseItems[];
    payment_status_list?: InvoiceTypeResponseItems[];
};
/** @returns {InoviceListingPayloadDataFilters} */
declare function InoviceListingPayloadDataFilters(): InoviceListingPayloadDataFilters;
type InoviceListingPayloadDataFilters = {
    payment_status?: string[];
    invoice_type?: string[];
    company_id?: string[];
};
/** @returns {InvoiceListingPayloadData} */
declare function InvoiceListingPayloadData(): InvoiceListingPayloadData;
type InvoiceListingPayloadData = {
    page_size?: number;
    page?: number;
    start_date?: string;
    end_date?: string;
    search?: string;
    filters?: InoviceListingPayloadDataFilters;
};
/** @returns {InvoiceListingReq} */
declare function InvoiceListingReq(): InvoiceListingReq;
type InvoiceListingReq = {
    data?: InvoiceListingPayloadData;
};
/** @returns {UnpaidInvoiceDataItems} */
declare function UnpaidInvoiceDataItems(): UnpaidInvoiceDataItems;
type UnpaidInvoiceDataItems = {
    total_unpaid_invoice_count?: number;
    currency?: string;
    total_unpaid_amount?: number;
};
/** @returns {InvoiceListingResponseItems} */
declare function InvoiceListingResponseItems(): InvoiceListingResponseItems;
type InvoiceListingResponseItems = {
    amount?: number;
    company?: string;
    status?: string;
    due_date?: string;
    invoice_date?: string;
    invoice_type?: string;
    period?: string;
    invoice_number?: string;
    is_downloadable?: boolean;
    invoice_id?: string;
    currency?: Currency;
};
/** @returns {InvoiceListingResponse} */
declare function InvoiceListingResponse(): InvoiceListingResponse;
type InvoiceListingResponse = {
    success?: boolean;
    headers?: string[];
    unpaid_invoice_data?: UnpaidInvoiceDataItems;
    items?: InvoiceListingResponseItems[];
    page?: Page;
    item_count?: number;
};
/** @returns {InvoicePdfPayloadData} */
declare function InvoicePdfPayloadData(): InvoicePdfPayloadData;
type InvoicePdfPayloadData = {
    invoice_number?: string[];
};
/** @returns {InvoicePdfReq} */
declare function InvoicePdfReq(): InvoicePdfReq;
type InvoicePdfReq = {
    data?: InvoicePdfPayloadData;
};
/** @returns {InvoicePdfResponse} */
declare function InvoicePdfResponse(): InvoicePdfResponse;
type InvoicePdfResponse = {
    success?: boolean;
    data?: string[];
    error?: string[];
};
/** @returns {IsCnRefundMethodData} */
declare function IsCnRefundMethodData(): IsCnRefundMethodData;
type IsCnRefundMethodData = {
    affiliate_id?: string;
    toggle_edit_required?: boolean;
    seller_id?: number;
};
/** @returns {IsCnRefundMethodReq} */
declare function IsCnRefundMethodReq(): IsCnRefundMethodReq;
type IsCnRefundMethodReq = {
    data?: IsCnRefundMethodData;
};
/** @returns {IsCnRefundMethodResponseData} */
declare function IsCnRefundMethodResponseData(): IsCnRefundMethodResponseData;
type IsCnRefundMethodResponseData = {
    is_first_time_user?: boolean;
};
/** @returns {IsCnRefundMethodResponse} */
declare function IsCnRefundMethodResponse(): IsCnRefundMethodResponse;
type IsCnRefundMethodResponse = {
    success?: boolean;
    data?: IsCnRefundMethodResponseData;
};
/** @returns {CreditNoteConfigNotificationEvents} */
declare function CreditNoteConfigNotificationEvents(): CreditNoteConfigNotificationEvents;
type CreditNoteConfigNotificationEvents = {
    expiration_reminder_to_customer?: number;
};
/** @returns {CreateSellerCreditNoteConfig} */
declare function CreateSellerCreditNoteConfig(): CreateSellerCreditNoteConfig;
type CreateSellerCreditNoteConfig = {
    is_cn_as_refund_method?: boolean;
    affiliate_id?: string;
    source_channel?: string[];
    seller_id?: number;
    notification_events?: CreditNoteConfigNotificationEvents;
    sales_channel_name?: string;
    ordering_channel?: string[];
    validity?: number;
    currency_type?: string;
    slug_values?: string[];
};
/** @returns {CreateSellerCreditNoteConfigReq} */
declare function CreateSellerCreditNoteConfigReq(): CreateSellerCreditNoteConfigReq;
type CreateSellerCreditNoteConfigReq = {
    data?: CreateSellerCreditNoteConfig;
};
/** @returns {CreateSellerCreditNoteConfigResponse} */
declare function CreateSellerCreditNoteConfigResponse(): CreateSellerCreditNoteConfigResponse;
type CreateSellerCreditNoteConfigResponse = {
    success?: boolean;
    message?: string;
};
/** @returns {DeleteConfig} */
declare function DeleteConfig(): DeleteConfig;
type DeleteConfig = {
    affiliate_id?: string;
    slug_values?: string[];
    seller_id?: number;
};
/** @returns {DeleteConfigReq} */
declare function DeleteConfigReq(): DeleteConfigReq;
type DeleteConfigReq = {
    data?: DeleteConfig;
};
/** @returns {DeleteConfigResponse} */
declare function DeleteConfigResponse(): DeleteConfigResponse;
type DeleteConfigResponse = {
    success?: boolean;
    message?: string;
};
/** @returns {ChannelDisplayNameItems} */
declare function ChannelDisplayNameItems(): ChannelDisplayNameItems;
type ChannelDisplayNameItems = {
    key?: string;
    value?: string;
};
/** @returns {ChannelDisplayNameResponse} */
declare function ChannelDisplayNameResponse(): ChannelDisplayNameResponse;
type ChannelDisplayNameResponse = {
    success?: boolean;
    items?: ChannelDisplayNameItems[];
};
/** @returns {CnReferenceNumber} */
declare function CnReferenceNumber(): CnReferenceNumber;
type CnReferenceNumber = {
    cn_reference_number?: string;
};
/** @returns {GetPdfUrlViewReq} */
declare function GetPdfUrlViewReq(): GetPdfUrlViewReq;
type GetPdfUrlViewReq = {
    data?: CnReferenceNumber;
};
/** @returns {GetPdfUrlViewResponseData} */
declare function GetPdfUrlViewResponseData(): GetPdfUrlViewResponseData;
type GetPdfUrlViewResponseData = {
    s3_pdf_link?: string;
    cn_reference_number?: string;
};
/** @returns {GetPdfUrlViewResponse} */
declare function GetPdfUrlViewResponse(): GetPdfUrlViewResponse;
type GetPdfUrlViewResponse = {
    success?: boolean;
    data?: GetPdfUrlViewResponseData;
};
/** @returns {CreditNoteDetailsReq} */
declare function CreditNoteDetailsReq(): CreditNoteDetailsReq;
type CreditNoteDetailsReq = {
    data?: CnReferenceNumber;
};
/** @returns {CnDetails} */
declare function CnDetails(): CnDetails;
type CnDetails = {
    staff_id?: string;
    expiry_date?: string;
    channel_of_issuance?: string;
    order_id?: string;
    date_issued?: string;
    ordering_channel?: string;
    shipment_id?: string;
    store_id?: string;
    invoice_number?: string;
};
/** @returns {RedemptionDetails} */
declare function RedemptionDetails(): RedemptionDetails;
type RedemptionDetails = {
    meta?: any;
    staff_id?: string;
    created_at?: string;
    order_id?: string;
    store_id?: string;
    shipment_id?: string;
    ordering_channel?: string;
    amount_debited?: number;
    invoice_number?: string;
};
/** @returns {CreditNoteDetails} */
declare function CreditNoteDetails(): CreditNoteDetails;
type CreditNoteDetails = {
    currency?: string;
    current_amount_used?: number;
    cn_status?: string;
    customer_mobile_number?: string;
    cn_reference_number?: string;
    cn_details?: CnDetails;
    redemption_details?: RedemptionDetails[];
    remaining_cn_amount?: number;
    available_cn_balance?: number;
    cn_amount?: number;
};
/** @returns {CreditNoteDetailsResponse} */
declare function CreditNoteDetailsResponse(): CreditNoteDetailsResponse;
type CreditNoteDetailsResponse = {
    success?: boolean;
    data?: CreditNoteDetails;
};
/** @returns {GetCustomerCreditBalance} */
declare function GetCustomerCreditBalance(): GetCustomerCreditBalance;
type GetCustomerCreditBalance = {
    affiliate_id?: string;
    seller_id?: number;
    customer_mobile_number?: string;
};
/** @returns {GetCustomerCreditBalanceReq} */
declare function GetCustomerCreditBalanceReq(): GetCustomerCreditBalanceReq;
type GetCustomerCreditBalanceReq = {
    data?: GetCustomerCreditBalance;
};
/** @returns {GetCustomerCreditBalanceResponseData} */
declare function GetCustomerCreditBalanceResponseData(): GetCustomerCreditBalanceResponseData;
type GetCustomerCreditBalanceResponseData = {
    customer_mobile_number?: string;
    total_credited_balance?: number;
};
/** @returns {GetCustomerCreditBalanceResponse} */
declare function GetCustomerCreditBalanceResponse(): GetCustomerCreditBalanceResponse;
type GetCustomerCreditBalanceResponse = {
    success?: boolean;
    data?: GetCustomerCreditBalanceResponseData;
};
/** @returns {GetCnConfigReq} */
declare function GetCnConfigReq(): GetCnConfigReq;
type GetCnConfigReq = {
    data?: DeleteConfig;
};
/** @returns {GetCnConfigResponseMeta} */
declare function GetCnConfigResponseMeta(): GetCnConfigResponseMeta;
type GetCnConfigResponseMeta = {
    reason?: string;
    source_channel?: string[];
};
/** @returns {GetCnConfigResponseData} */
declare function GetCnConfigResponseData(): GetCnConfigResponseData;
type GetCnConfigResponseData = {
    is_cn_as_refund_method?: boolean;
    affiliate_id?: string;
    meta?: any;
    seller_id?: number;
    notification_events?: CreditNoteConfigNotificationEvents;
    validity?: number;
    redemption_ordering_channel?: string[];
    currency_type?: string;
};
/** @returns {GetCnConfigResponse} */
declare function GetCnConfigResponse(): GetCnConfigResponse;
type GetCnConfigResponse = {
    success?: boolean;
    data?: GetCnConfigResponseData;
};
/** @returns {CnGenerateReportFilters} */
declare function CnGenerateReportFilters(): CnGenerateReportFilters;
type CnGenerateReportFilters = {
    staff_id?: string[];
    channel_of_issuance?: string[];
    utilisation?: string[];
    ordering_channel?: string[];
    store_id?: number[];
    type_of_transaction?: string[];
    issuance_channel?: string[];
};
/** @returns {CnGenerateReport} */
declare function CnGenerateReport(): CnGenerateReport;
type CnGenerateReport = {
    page?: number;
    end_date?: string;
    page_size?: number;
    filters?: CnGenerateReportFilters;
    affiliate_id?: string;
    meta?: GenerateReportFilters;
    search?: string;
    report_id?: string;
    search_type?: string;
    start_date?: string;
};
/** @returns {GenerateReportCustomerCnReq} */
declare function GenerateReportCustomerCnReq(): GenerateReportCustomerCnReq;
type GenerateReportCustomerCnReq = {
    data?: CnGenerateReport;
};
/** @returns {CnGenerateReportItems} */
declare function CnGenerateReportItems(): CnGenerateReportItems;
type CnGenerateReportItems = {
    expiry_date?: string;
    status?: string;
    total_amount?: number;
    order_id?: string;
    date_issued?: string;
    shipment_id?: string;
    invoice_number?: string;
    credit_note_number?: string;
};
/** @returns {GenerateReportCustomerCnResponseData} */
declare function GenerateReportCustomerCnResponseData(): GenerateReportCustomerCnResponseData;
type GenerateReportCustomerCnResponseData = {
    success?: boolean;
    message?: string;
    items?: CnGenerateReportItems[];
    row_header_display_order?: any;
    end_date?: string;
    page?: Page;
    headers?: string[];
    primary_headers?: string[];
    allowed_filters?: string[];
    start_date?: string;
    item_count?: number;
};
/** @returns {GenerateReportCustomerCnResponse} */
declare function GenerateReportCustomerCnResponse(): GenerateReportCustomerCnResponse;
type GenerateReportCustomerCnResponse = {
    data?: GenerateReportCustomerCnResponseData;
};
/** @returns {CnDownloadReport} */
declare function CnDownloadReport(): CnDownloadReport;
type CnDownloadReport = {
    page?: number;
    start_date?: string;
    end_date?: string;
    affiliate_id?: string;
    search?: string;
    status?: string;
    search_type?: string;
    page_size?: number;
};
/** @returns {DownloadReportCustomerCnReq} */
declare function DownloadReportCustomerCnReq(): DownloadReportCustomerCnReq;
type DownloadReportCustomerCnReq = {
    data?: CnDownloadReport;
};
/** @returns {DownloadReportResponseData} */
declare function DownloadReportResponseData(): DownloadReportResponseData;
type DownloadReportResponseData = {
    report_config_id?: string;
    full_name?: string;
    requested_by?: string;
    start_date?: string;
    end_date?: string;
    request_dict?: any;
    download_link?: string;
    created_at?: string;
    meta?: any;
    msg?: string;
    report_name?: string;
    status?: string;
    display_name?: string;
    filters?: any;
};
/** @returns {DownloadReportCustomerCnResponse} */
declare function DownloadReportCustomerCnResponse(): DownloadReportCustomerCnResponse;
type DownloadReportCustomerCnResponse = {
    items?: DownloadReportResponseData[];
    data?: DownloadReportResponseData[];
    item_count?: number;
    page?: Page;
};
/** @returns {GetReportingFilters} */
declare function GetReportingFilters(): GetReportingFilters;
type GetReportingFilters = {
    text?: string;
    type?: string;
    options?: any[];
    value?: string;
};
/** @returns {GetReportingNestedFilters} */
declare function GetReportingNestedFilters(): GetReportingNestedFilters;
type GetReportingNestedFilters = {
    text?: string;
    options?: any[];
    required?: boolean;
    placeholder_text?: string;
    type?: string;
    value?: string;
};
/** @returns {GetReportingFiltersReasonOptions} */
declare function GetReportingFiltersReasonOptions(): GetReportingFiltersReasonOptions;
type GetReportingFiltersReasonOptions = {
    text?: string;
    value?: string;
    placeholder_text?: string;
};
/** @returns {GetReportingFiltersReason} */
declare function GetReportingFiltersReason(): GetReportingFiltersReason;
type GetReportingFiltersReason = {
    text?: string;
    type?: string;
    value?: string;
    options?: GetReportingFiltersReasonOptions[];
};
/** @returns {GetReportingFiltersResponse} */
declare function GetReportingFiltersResponse(): GetReportingFiltersResponse;
type GetReportingFiltersResponse = {
    reason?: GetReportingFiltersReason;
    search?: GetReportingFilters;
    filters?: GetReportingNestedFilters[];
    status?: GetReportingFilters;
};
/** @returns {InvoicePaymentOptionsPayloadData} */
declare function InvoicePaymentOptionsPayloadData(): InvoicePaymentOptionsPayloadData;
type InvoicePaymentOptionsPayloadData = {
    invoice_number?: string;
};
/** @returns {InvoicePaymentOptionsReq} */
declare function InvoicePaymentOptionsReq(): InvoicePaymentOptionsReq;
type InvoicePaymentOptionsReq = {
    data?: InvoicePaymentOptionsPayloadData;
};
/** @returns {InvoicePaymentOptionsResponsePayableAmounts} */
declare function InvoicePaymentOptionsResponsePayableAmounts(): InvoicePaymentOptionsResponsePayableAmounts;
type InvoicePaymentOptionsResponsePayableAmounts = {
    amount?: number;
    amount_key?: string;
    header?: string;
};
/** @returns {InvoicePaymentOptionsResponseDeductedAmounts} */
declare function InvoicePaymentOptionsResponseDeductedAmounts(): InvoicePaymentOptionsResponseDeductedAmounts;
type InvoicePaymentOptionsResponseDeductedAmounts = {
    amount?: number;
    header?: string;
    amount_key?: string;
    is_payable?: boolean;
    symbol?: string;
};
/** @returns {InvoicePaymentOptionsResponseData} */
declare function InvoicePaymentOptionsResponseData(): InvoicePaymentOptionsResponseData;
type InvoicePaymentOptionsResponseData = {
    currency?: Currency;
    invoice_type?: string;
    display_amounts?: InvoicePaymentOptionsResponsePayableAmounts[];
    total_amount?: any;
    deducted_amounts?: any;
    payable_amounts?: InvoicePaymentOptionsResponsePayableAmounts[];
};
/** @returns {InvoicePaymentOptionsResponse} */
declare function InvoicePaymentOptionsResponse(): InvoicePaymentOptionsResponse;
type InvoicePaymentOptionsResponse = {
    reason?: string;
    data?: InvoicePaymentOptionsResponseData;
    success?: boolean;
};
/** @returns {PaymentDetail} */
declare function PaymentDetail(): PaymentDetail;
type PaymentDetail = {
    display_name?: string;
    value?: string;
};
/** @returns {PaidInvoicePaymentDetail} */
declare function PaidInvoicePaymentDetail(): PaidInvoicePaymentDetail;
type PaidInvoicePaymentDetail = {
    payment_details?: PaymentDetail[];
    date_of_payment?: string;
    amount?: number;
};
/** @returns {InvoicePaymentDetailsResponseData} */
declare function InvoicePaymentDetailsResponseData(): InvoicePaymentDetailsResponseData;
type InvoicePaymentDetailsResponseData = {
    paid_invoice_payment_details?: PaidInvoicePaymentDetail[];
    failed_attempts_details?: any[];
};
/** @returns {InvoicePaymentDetailsResponse} */
declare function InvoicePaymentDetailsResponse(): InvoicePaymentDetailsResponse;
type InvoicePaymentDetailsResponse = {
    reason?: string;
    data?: InvoicePaymentDetailsResponseData;
    success?: boolean;
    payment_details_visible?: boolean;
};
/** @returns {InvoiceActivityLogsResponseData} */
declare function InvoiceActivityLogsResponseData(): InvoiceActivityLogsResponseData;
type InvoiceActivityLogsResponseData = {
    performed_by?: string;
    status?: string;
    reason?: string;
    is_resolved?: boolean;
    retry_attempts?: number;
    max_retry_attempts?: number;
};
/** @returns {InvoiceActivityLogsResponse} */
declare function InvoiceActivityLogsResponse(): InvoiceActivityLogsResponse;
type InvoiceActivityLogsResponse = {
    data?: InvoiceActivityLogsResponseData[];
};
/** @returns {InvoiceActivityLogError} */
declare function InvoiceActivityLogError(): InvoiceActivityLogError;
type InvoiceActivityLogError = {
    reason?: string;
};
/** @returns {UnlockCreditNoteRequestData} */
declare function UnlockCreditNoteRequestData(): UnlockCreditNoteRequestData;
type UnlockCreditNoteRequestData = {
    seller_id?: string;
    locked_credit_notes?: string[];
    unlock_reason?: string;
    description?: string;
};
/** @returns {UnlockCreditNoteReq} */
declare function UnlockCreditNoteReq(): UnlockCreditNoteReq;
type UnlockCreditNoteReq = {
    data?: UnlockCreditNoteRequestData;
};
/** @returns {UnlockCreditNoteResponseData} */
declare function UnlockCreditNoteResponseData(): UnlockCreditNoteResponseData;
type UnlockCreditNoteResponseData = {
    is_cn_unlocked?: boolean;
    status?: string;
};
/** @returns {UnlockCreditNoteResponse} */
declare function UnlockCreditNoteResponse(): UnlockCreditNoteResponse;
type UnlockCreditNoteResponse = {
    success?: boolean;
    data?: UnlockCreditNoteResponseData;
};
