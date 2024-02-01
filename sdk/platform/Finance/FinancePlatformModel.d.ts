export = FinancePlatformModel;
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
 * @typedef GenerateReportRequest
 * @property {GenerateReportPlatform} [data]
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
 * @typedef Currency
 * @property {string} [code]
 * @property {string} [symbol]
 * @property {string} [name]
 */
/**
 * @typedef GenerateReportJson
 * @property {string[][]} [items]
 * @property {Page} [page]
 * @property {string} [end_date]
 * @property {string[]} [headers]
 * @property {string} [start_date]
 * @property {number} [item_count]
 */
/**
 * @typedef Error
 * @property {string} [reason]
 * @property {boolean} [success]
 */
/**
 * @typedef DownloadReport
 * @property {number} [page]
 * @property {number} [pagesize]
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
 * @typedef GetEngineData
 * @property {string} [table_name]
 * @property {string[]} [project]
 * @property {Object} [filters]
 */
/**
 * @typedef GetEngineRequest
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
 * @typedef GetReasonRequest
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
 * @typedef GetReportListRequest
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
 * @property {boolean} [success]
 * @property {Object[]} [docs]
 */
/**
 * @typedef DownloadCreditDebitNote
 * @property {string[]} [note_id]
 */
/**
 * @typedef DownloadCreditDebitNoteRequest
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
 * @property {string} [amount]
 * @property {string} [transaction_type]
 * @property {string} [source_reference]
 * @property {string} [total_amount]
 * @property {Object} [meta]
 * @property {string} [currency]
 * @property {string} [seller_id]
 * @property {string} [mode_of_payment]
 * @property {string} [invoice_number]
 */
/**
 * @typedef PaymentProcessRequest
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
 * @property {string} [end_end]
 * @property {string} [start_end]
 * @property {number} [pagesize]
 */
/**
 * @typedef CreditlineDataPlatformRequest
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
 * @typedef IsCreditlinePlatformRequest
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
 * @typedef InvoiceTypeRequest
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
 * @typedef InvoiceListingRequest
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
 * @property {string} [amount]
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
 * @typedef InvoicePdfRequest
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
 * @typedef IsCnRefundMethodRequest
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
 * @typedef CreateSellerCreditNoteConfigRequest
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
 * @typedef DeleteConfigRequest
 * @property {DeleteConfig} [data]
 */
/**
 * @typedef DeleteConfigResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */
/**
 * @typedef ChannelDisplayName
 * @property {string} [platform_pos]
 */
/**
 * @typedef ChannelDisplayNameResponse
 * @property {boolean} [success]
 * @property {ChannelDisplayName} [data]
 */
/**
 * @typedef CnReferenceNumber
 * @property {string} [cn_reference_number]
 */
/**
 * @typedef GetPdfUrlViewRequest
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
 * @typedef CreditNoteDetailsRequest
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
 * @typedef GetCustomerCreditBalanceRequest
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
 * @typedef GetCnConfigRequest
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
 * @property {GetCnConfigResponseMeta} [meta]
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
 * @property {string[]} [types_of_transaction]
 */
/**
 * @typedef CnGenerateReport
 * @property {number} [page]
 * @property {string} [end_date]
 * @property {number} [pagesize]
 * @property {CnGenerateReportFilters} [filters]
 * @property {string} [affiliate_id]
 * @property {GenerateReportFilters} [meta]
 * @property {string} [search]
 * @property {string} [report_id]
 * @property {string} [search_type]
 * @property {string} [start_date]
 */
/**
 * @typedef GenerateReportCustomerCnRequest
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
 * @property {string[]} [status]
 * @property {string} [search_type]
 * @property {number} [pagesize]
 */
/**
 * @typedef DownloadReportCustomerCnRequest
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
 * @property {DownloadReportResponseData[]} [data]
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
 * @typedef GetReportingFiltersResponse
 * @property {GetReportingFilters} [search]
 * @property {GetReportingNestedFilters[]} [filters]
 * @property {GetReportingFilters} [status]
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
 * @typedef UnlockCreditNoteRequest
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
    export { GenerateReportMeta, GenerateReportFilters, GenerateReportPlatform, GenerateReportRequest, Page, Currency, GenerateReportJson, Error, DownloadReport, DownloadReportItems, DownloadReportList, GetEngineData, GetEngineRequest, GetEngineResponse, GetReason, GetReasonRequest, ReasonItem, GetReasonResponse, GetReportListData, GetReportListRequest, GetAffiliate, GetReportListResponse, ReportItem, GetAffiliateResponse, DownloadCreditDebitNote, DownloadCreditDebitNoteRequest, DownloadCreditDebitNoteResponseData, DownloadCreditDebitNoteResponse, PaymentProcessPayload, PaymentProcessRequest, PaymentProcessResponse, CreditlineDataPlatformPayload, CreditlineDataPlatformRequest, CreditlineDataPlatformResponse, IsCreditlinePayload, IsCreditlinePlatformRequest, IsCreditlinePlatformResponse, InvoiceTypePayloadData, InvoiceTypeRequest, InvoiceTypeResponseItems, InvoiceTypeResponse, InoviceListingPayloadDataFilters, InvoiceListingPayloadData, InvoiceListingRequest, UnpaidInvoiceDataItems, InvoiceListingResponseItems, InvoiceListingResponse, InvoicePdfPayloadData, InvoicePdfRequest, InvoicePdfResponse, IsCnRefundMethodData, IsCnRefundMethodRequest, IsCnRefundMethodResponseData, IsCnRefundMethodResponse, CreditNoteConfigNotificationEvents, CreateSellerCreditNoteConfig, CreateSellerCreditNoteConfigRequest, CreateSellerCreditNoteConfigResponse, DeleteConfig, DeleteConfigRequest, DeleteConfigResponse, ChannelDisplayName, ChannelDisplayNameResponse, CnReferenceNumber, GetPdfUrlViewRequest, GetPdfUrlViewResponseData, GetPdfUrlViewResponse, CreditNoteDetailsRequest, CnDetails, RedemptionDetails, CreditNoteDetails, CreditNoteDetailsResponse, GetCustomerCreditBalance, GetCustomerCreditBalanceRequest, GetCustomerCreditBalanceResponseData, GetCustomerCreditBalanceResponse, GetCnConfigRequest, GetCnConfigResponseMeta, GetCnConfigResponseData, GetCnConfigResponse, CnGenerateReportFilters, CnGenerateReport, GenerateReportCustomerCnRequest, CnGenerateReportItems, GenerateReportCustomerCnResponseData, GenerateReportCustomerCnResponse, CnDownloadReport, DownloadReportCustomerCnRequest, DownloadReportResponseData, DownloadReportCustomerCnResponse, GetReportingFilters, GetReportingNestedFilters, GetReportingFiltersResponse, PaymentDetail, PaidInvoicePaymentDetail, InvoicePaymentDetailsResponseData, InvoicePaymentDetailsResponse, InvoiceActivityLogsResponseData, InvoiceActivityLogsResponse, InvoiceActivityLogError, UnlockCreditNoteRequestData, UnlockCreditNoteRequest, UnlockCreditNoteResponseData, UnlockCreditNoteResponse };
}
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
/** @returns {GenerateReportRequest} */
declare function GenerateReportRequest(): GenerateReportRequest;
type GenerateReportRequest = {
    data?: GenerateReportPlatform;
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
    items?: string[][];
    page?: Page;
    end_date?: string;
    headers?: string[];
    start_date?: string;
    item_count?: number;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    reason?: string;
    success?: boolean;
};
/** @returns {DownloadReport} */
declare function DownloadReport(): DownloadReport;
type DownloadReport = {
    page?: number;
    pagesize?: number;
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
/** @returns {GetEngineData} */
declare function GetEngineData(): GetEngineData;
type GetEngineData = {
    table_name?: string;
    project?: string[];
    filters?: any;
};
/** @returns {GetEngineRequest} */
declare function GetEngineRequest(): GetEngineRequest;
type GetEngineRequest = {
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
/** @returns {GetReasonRequest} */
declare function GetReasonRequest(): GetReasonRequest;
type GetReasonRequest = {
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
/** @returns {GetReportListRequest} */
declare function GetReportListRequest(): GetReportListRequest;
type GetReportListRequest = {
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
    success?: boolean;
    docs?: any[];
};
/** @returns {DownloadCreditDebitNote} */
declare function DownloadCreditDebitNote(): DownloadCreditDebitNote;
type DownloadCreditDebitNote = {
    note_id?: string[];
};
/** @returns {DownloadCreditDebitNoteRequest} */
declare function DownloadCreditDebitNoteRequest(): DownloadCreditDebitNoteRequest;
type DownloadCreditDebitNoteRequest = {
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
    amount?: string;
    transaction_type?: string;
    source_reference?: string;
    total_amount?: string;
    meta?: any;
    currency?: string;
    seller_id?: string;
    mode_of_payment?: string;
    invoice_number?: string;
};
/** @returns {PaymentProcessRequest} */
declare function PaymentProcessRequest(): PaymentProcessRequest;
type PaymentProcessRequest = {
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
    end_end?: string;
    start_end?: string;
    pagesize?: number;
};
/** @returns {CreditlineDataPlatformRequest} */
declare function CreditlineDataPlatformRequest(): CreditlineDataPlatformRequest;
type CreditlineDataPlatformRequest = {
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
/** @returns {IsCreditlinePlatformRequest} */
declare function IsCreditlinePlatformRequest(): IsCreditlinePlatformRequest;
type IsCreditlinePlatformRequest = {
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
/** @returns {InvoiceTypeRequest} */
declare function InvoiceTypeRequest(): InvoiceTypeRequest;
type InvoiceTypeRequest = {
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
/** @returns {InvoiceListingRequest} */
declare function InvoiceListingRequest(): InvoiceListingRequest;
type InvoiceListingRequest = {
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
    amount?: string;
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
/** @returns {InvoicePdfRequest} */
declare function InvoicePdfRequest(): InvoicePdfRequest;
type InvoicePdfRequest = {
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
/** @returns {IsCnRefundMethodRequest} */
declare function IsCnRefundMethodRequest(): IsCnRefundMethodRequest;
type IsCnRefundMethodRequest = {
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
/** @returns {CreateSellerCreditNoteConfigRequest} */
declare function CreateSellerCreditNoteConfigRequest(): CreateSellerCreditNoteConfigRequest;
type CreateSellerCreditNoteConfigRequest = {
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
/** @returns {DeleteConfigRequest} */
declare function DeleteConfigRequest(): DeleteConfigRequest;
type DeleteConfigRequest = {
    data?: DeleteConfig;
};
/** @returns {DeleteConfigResponse} */
declare function DeleteConfigResponse(): DeleteConfigResponse;
type DeleteConfigResponse = {
    success?: boolean;
    message?: string;
};
/** @returns {ChannelDisplayName} */
declare function ChannelDisplayName(): ChannelDisplayName;
type ChannelDisplayName = {
    platform_pos?: string;
};
/** @returns {ChannelDisplayNameResponse} */
declare function ChannelDisplayNameResponse(): ChannelDisplayNameResponse;
type ChannelDisplayNameResponse = {
    success?: boolean;
    data?: ChannelDisplayName;
};
/** @returns {CnReferenceNumber} */
declare function CnReferenceNumber(): CnReferenceNumber;
type CnReferenceNumber = {
    cn_reference_number?: string;
};
/** @returns {GetPdfUrlViewRequest} */
declare function GetPdfUrlViewRequest(): GetPdfUrlViewRequest;
type GetPdfUrlViewRequest = {
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
/** @returns {CreditNoteDetailsRequest} */
declare function CreditNoteDetailsRequest(): CreditNoteDetailsRequest;
type CreditNoteDetailsRequest = {
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
/** @returns {GetCustomerCreditBalanceRequest} */
declare function GetCustomerCreditBalanceRequest(): GetCustomerCreditBalanceRequest;
type GetCustomerCreditBalanceRequest = {
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
/** @returns {GetCnConfigRequest} */
declare function GetCnConfigRequest(): GetCnConfigRequest;
type GetCnConfigRequest = {
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
    meta?: GetCnConfigResponseMeta;
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
    types_of_transaction?: string[];
};
/** @returns {CnGenerateReport} */
declare function CnGenerateReport(): CnGenerateReport;
type CnGenerateReport = {
    page?: number;
    end_date?: string;
    pagesize?: number;
    filters?: CnGenerateReportFilters;
    affiliate_id?: string;
    meta?: GenerateReportFilters;
    search?: string;
    report_id?: string;
    search_type?: string;
    start_date?: string;
};
/** @returns {GenerateReportCustomerCnRequest} */
declare function GenerateReportCustomerCnRequest(): GenerateReportCustomerCnRequest;
type GenerateReportCustomerCnRequest = {
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
    status?: string[];
    search_type?: string;
    pagesize?: number;
};
/** @returns {DownloadReportCustomerCnRequest} */
declare function DownloadReportCustomerCnRequest(): DownloadReportCustomerCnRequest;
type DownloadReportCustomerCnRequest = {
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
    data?: DownloadReportResponseData[];
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
/** @returns {GetReportingFiltersResponse} */
declare function GetReportingFiltersResponse(): GetReportingFiltersResponse;
type GetReportingFiltersResponse = {
    search?: GetReportingFilters;
    filters?: GetReportingNestedFilters[];
    status?: GetReportingFilters;
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
/** @returns {UnlockCreditNoteRequest} */
declare function UnlockCreditNoteRequest(): UnlockCreditNoteRequest;
type UnlockCreditNoteRequest = {
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
