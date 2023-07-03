export = FinancePlatformModel;
/**
 * @typedef AsCnRefundData
 * @property {string} [affiliate_id]
 * @property {number} [seller_id]
 * @property {boolean} [toggle_edit_required]
 */
/**
 * @typedef AsCnRefundRequest
 * @property {AsCnRefundData} [data]
 */
/**
 * @typedef AsCnRefundResponse
 * @property {AsCnRefundResponseData} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef AsCnRefundResponseData
 * @property {boolean} [is_first_time_user]
 */
/**
 * @typedef ChannelDisplayName
 * @property {string} [platform_pos]
 */
/**
 * @typedef ChannelDisplayNameResponse
 * @property {ChannelDisplayName} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef CnDetails
 * @property {string} [channel_of_issuance]
 * @property {string} [date_issued]
 * @property {string} [expiry_date]
 * @property {string} [invoice_number]
 * @property {string} [order_id]
 * @property {string} [ordering_channel]
 * @property {string} [shipment_id]
 * @property {string} [staff_id]
 * @property {string} [store_id]
 */
/**
 * @typedef CnDownloadReport
 * @property {string} [affiliate_id]
 * @property {string} [end_date]
 * @property {number} [page]
 * @property {number} [pagesize]
 * @property {string} [search]
 * @property {string} [search_type]
 * @property {string} [start_date]
 * @property {string[]} [status]
 */
/**
 * @typedef CnGenerateReport
 * @property {string} [affiliate_id]
 * @property {string} [end_date]
 * @property {CnGenerateReportFilters} [filters]
 * @property {GenerateReportFilters} [meta]
 * @property {number} [page]
 * @property {number} [pagesize]
 * @property {string} [report_id]
 * @property {string} [search]
 * @property {string} [search_type]
 * @property {string} [start_date]
 */
/**
 * @typedef CnGenerateReportFilters
 * @property {string[]} [channel_of_issuance]
 * @property {string[]} [ordering_channel]
 * @property {string[]} [staff_id]
 * @property {number[]} [store_id]
 * @property {string[]} [types_of_transaction]
 * @property {string[]} [utilisation]
 */
/**
 * @typedef CnGenerateReportItems
 * @property {string} [credit_note_number]
 * @property {string} [date_issued]
 * @property {string} [expiry_date]
 * @property {string} [invoice_number]
 * @property {string} [order_id]
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {number} [total_amount]
 */
/**
 * @typedef CnReferenceNumber
 * @property {string} [cn_reference_number]
 */
/**
 * @typedef CreateSellerCreditNoteConfig
 * @property {string} [affiliate_id]
 * @property {string} [currency_type]
 * @property {boolean} [is_cn_as_refund_method]
 * @property {CreditNoteConfigNotificationEvents} [notification_events]
 * @property {string[]} [ordering_channel]
 * @property {string} [sales_channel_name]
 * @property {number} [seller_id]
 * @property {string[]} [slug_values]
 * @property {string[]} [source_channel]
 * @property {number} [validity]
 */
/**
 * @typedef CreateSellerCreditNoteConfigRequest
 * @property {CreateSellerCreditNoteConfig} [data]
 */
/**
 * @typedef CreateSellerCreditNoteConfigResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef CreditlineDataPlatformPayload
 * @property {string} [end_end]
 * @property {number} [page]
 * @property {number} [pagesize]
 * @property {string} [seller_id]
 * @property {string} [start_end]
 */
/**
 * @typedef CreditlineDataPlatformRequest
 * @property {CreditlineDataPlatformPayload} [data]
 */
/**
 * @typedef CreditlineDataPlatformResponse
 * @property {number} [code]
 * @property {string[]} [headers]
 * @property {number} [item_count]
 * @property {Object[]} [items]
 * @property {string} [message]
 * @property {Object} [page]
 * @property {boolean} [show_mr]
 */
/**
 * @typedef CreditNoteConfigNotificationEvents
 * @property {number} [expiration_reminder_to_customer]
 */
/**
 * @typedef CreditNoteDetails
 * @property {number} [available_cn_balance]
 * @property {number} [cn_amount]
 * @property {CnDetails[]} [cn_details]
 * @property {string} [cn_reference_number]
 * @property {string} [cn_status]
 * @property {string} [customer_mobile_number]
 * @property {RedemptionDetails[]} [redemption_details]
 * @property {number} [remaining_cn_amount]
 */
/**
 * @typedef CreditNoteDetailsRequest
 * @property {CnReferenceNumber} [data]
 */
/**
 * @typedef CreditNoteDetailsResponse
 * @property {CreditNoteDetails} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef DeleteConfig
 * @property {string} [affiliate_id]
 * @property {number} [seller_id]
 * @property {string[]} [slug_values]
 */
/**
 * @typedef DeleteConfigRequest
 * @property {DeleteConfig} [data]
 */
/**
 * @typedef DeleteConfigResponse
 * @property {string} [message]
 * @property {boolean} [success]
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
 * @typedef DownloadCreditDebitNoteResponse
 * @property {DownloadCreditDebitNoteResponseData[]} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef DownloadCreditDebitNoteResponseData
 * @property {string} [id]
 * @property {string} [pdf_s3_url]
 */
/**
 * @typedef DownloadReport
 * @property {string} [end_date]
 * @property {number} [page]
 * @property {number} [pagesize]
 * @property {string} [start_date]
 */
/**
 * @typedef DownloadReportCustomerCnRequest
 * @property {CnDownloadReport} [data]
 */
/**
 * @typedef DownloadReportCustomerCnResponse
 * @property {DownloadReportResponseData[]} [data]
 */
/**
 * @typedef DownloadReportItems
 * @property {string} [end_date]
 * @property {GenerateReportFilters} [filters]
 * @property {GenerateReportMeta} [meta]
 * @property {string} [report_id]
 * @property {string} [start_date]
 * @property {string} [type_of_request]
 */
/**
 * @typedef DownloadReportList
 * @property {number} [item_count]
 * @property {DownloadReportItems[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef DownloadReportResponseData
 * @property {string} [created_at]
 * @property {string} [display_name]
 * @property {string} [download_link]
 * @property {string} [end_date]
 * @property {Object} [filters]
 * @property {string} [full_name]
 * @property {Object} [meta]
 * @property {string} [msg]
 * @property {string} [report_config_id]
 * @property {string} [report_name]
 * @property {Object} [request_dict]
 * @property {string} [requested_by]
 * @property {string} [start_date]
 * @property {string} [status]
 */
/**
 * @typedef Error
 * @property {string} [reason]
 * @property {boolean} [success]
 */
/**
 * @typedef GenerateReportCustomerCnRequest
 * @property {CnGenerateReport} [data]
 */
/**
 * @typedef GenerateReportCustomerCnResponse
 * @property {string[]} [allowed_filters]
 * @property {string} [end_date]
 * @property {string[]} [headers]
 * @property {number} [item_count]
 * @property {CnGenerateReportItems[]} [items]
 * @property {Page} [page]
 * @property {string[]} [primary_headers]
 * @property {Object} [row_header_display_order]
 * @property {string} [start_date]
 */
/**
 * @typedef GenerateReportFilters
 * @property {string[]} [brand]
 * @property {string[]} [channel]
 * @property {string[]} [company]
 */
/**
 * @typedef GenerateReportJson
 * @property {string} [end_date]
 * @property {string[]} [headers]
 * @property {number} [item_count]
 * @property {string[][]} [items]
 * @property {Page} [page]
 * @property {string} [start_date]
 */
/**
 * @typedef GenerateReportMeta
 * @property {string} [brand]
 * @property {string} [channel]
 * @property {string} [company]
 */
/**
 * @typedef GenerateReportPlatform
 * @property {string} [end_date]
 * @property {GenerateReportFilters} [filters]
 * @property {GenerateReportMeta} [meta]
 * @property {string} [report_id]
 * @property {string} [start_date]
 */
/**
 * @typedef GenerateReportRequest
 * @property {GenerateReportPlatform} [data]
 */
/**
 * @typedef GetAffiliate
 * @property {number} [company_id]
 */
/**
 * @typedef GetAffiliateResponse
 * @property {Object[]} [docs]
 * @property {boolean} [success]
 */
/**
 * @typedef GetCnConfigRequest
 * @property {DeleteConfig} [data]
 */
/**
 * @typedef GetCnConfigResponse
 * @property {GetCnConfigResponseData} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef GetCnConfigResponseData
 * @property {string} [affiliate_id]
 * @property {string} [currency_type]
 * @property {boolean} [is_cn_as_refund_method]
 * @property {GetCnConfigResponseMeta} [meta]
 * @property {CreditNoteConfigNotificationEvents} [notification_events]
 * @property {string[]} [redemption_ordering_channel]
 * @property {number} [seller_id]
 * @property {number} [validity]
 */
/**
 * @typedef GetCnConfigResponseMeta
 * @property {string} [reason]
 * @property {string[]} [source_channel]
 */
/**
 * @typedef GetCustomerCreditBalance
 * @property {string} [affiliate_id]
 * @property {string} [customer_mobile_number]
 * @property {number} [seller_id]
 */
/**
 * @typedef GetCustomerCreditBalanceRequest
 * @property {GetCustomerCreditBalance} [data]
 */
/**
 * @typedef GetCustomerCreditBalanceResponse
 * @property {GetCustomerCreditBalanceResponseData} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef GetCustomerCreditBalanceResponseData
 * @property {string} [customer_mobile_number]
 * @property {number} [total_credited_balance]
 */
/**
 * @typedef GetDocs
 * @property {Object[]} [docs]
 * @property {Object[]} [items]
 */
/**
 * @typedef GetEngineData
 * @property {GetEngineFilters} [filters]
 * @property {string[]} [project]
 * @property {string} [table_name]
 */
/**
 * @typedef GetEngineFilters
 * @property {string} [config_field]
 */
/**
 * @typedef GetEngineRequest
 * @property {GetEngineData} [data]
 */
/**
 * @typedef GetEngineResponse
 * @property {number} [item_count]
 * @property {Object[]} [items]
 * @property {Page} [page]
 * @property {boolean} [success]
 */
/**
 * @typedef GetPdfUrlViewRequest
 * @property {CnReferenceNumber} [data]
 */
/**
 * @typedef GetPdfUrlViewResponse
 * @property {GetPdfUrlViewResponseData} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef GetPdfUrlViewResponseData
 * @property {string} [cn_reference_number]
 * @property {string} [s3_pdf_link]
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
 * @typedef GetReasonResponse
 * @property {GetDocs} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef GetReportingFilters
 * @property {Object[]} [options]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef GetReportingFiltersResponse
 * @property {GetReportingNestedFilters[]} [filters]
 * @property {GetReportingFilters} [search]
 * @property {GetReportingFilters} [status]
 */
/**
 * @typedef GetReportingNestedFilters
 * @property {Object[]} [options]
 * @property {string} [placeholder_text]
 * @property {boolean} [required]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef GetReportListData
 * @property {boolean} [listing_enabled]
 * @property {string} [role_name]
 */
/**
 * @typedef GetReportListRequest
 * @property {GetReportListData} [data]
 */
/**
 * @typedef InoviceListingPayloadDataFilters
 * @property {string[]} [company_id]
 * @property {string[]} [invoice_type]
 * @property {string[]} [payment_status]
 */
/**
 * @typedef InvoiceListingPayloadData
 * @property {string} [end_date]
 * @property {InoviceListingPayloadDataFilters} [filters]
 * @property {number} [page]
 * @property {number} [page_size]
 * @property {string} [search]
 * @property {string} [start_date]
 */
/**
 * @typedef InvoiceListingRequest
 * @property {InvoiceListingPayloadData} [data]
 */
/**
 * @typedef InvoiceListingResponse
 * @property {number} [item_count]
 * @property {InvoiceListingResponseItems[]} [items]
 * @property {Page} [page]
 * @property {UnpaidInvoiceDataItems} [unpaid_invoice_data]
 */
/**
 * @typedef InvoiceListingResponseItems
 * @property {string} [amount]
 * @property {string} [company]
 * @property {string} [due_date]
 * @property {string} [invoice_date]
 * @property {string} [invoice_id]
 * @property {string} [invoice_number]
 * @property {string} [invoice_type]
 * @property {boolean} [is_downloadable]
 * @property {string} [period]
 * @property {string} [status]
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
 * @property {string[]} [data]
 * @property {string[]} [error]
 * @property {boolean} [success]
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
 * @typedef InvoiceTypeResponse
 * @property {InvoiceTypeResponseItems[]} [invoice_type_list]
 * @property {InvoiceTypeResponseItems[]} [payment_status_list]
 * @property {boolean} [success]
 */
/**
 * @typedef InvoiceTypeResponseItems
 * @property {string} [text]
 * @property {string} [value]
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
 * @property {number} [code]
 * @property {boolean} [is_creditline_opted]
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
 * @typedef PaymentProcessPayload
 * @property {string} [amount]
 * @property {string} [currency]
 * @property {string} [invoice_number]
 * @property {Object} [meta]
 * @property {string} [mode_of_payment]
 * @property {string} [platform]
 * @property {string} [seller_id]
 * @property {string} [source_reference]
 * @property {string} [total_amount]
 * @property {string} [transaction_type]
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
 * @property {string} [redirect_url]
 * @property {string} [transaction_id]
 */
/**
 * @typedef RedemptionDetails
 * @property {number} [amount_debited]
 * @property {string} [created_at]
 * @property {string} [invoice_number]
 * @property {string} [order_id]
 * @property {string} [ordering_channel]
 * @property {string} [shipment_id]
 * @property {string} [staff_id]
 * @property {string} [store_id]
 */
/**
 * @typedef UnpaidInvoiceDataItems
 * @property {string} [currency]
 * @property {number} [total_unpaid_amount]
 * @property {number} [total_unpaid_invoice_count]
 */
declare class FinancePlatformModel {
}
declare namespace FinancePlatformModel {
    export { AsCnRefundData, AsCnRefundRequest, AsCnRefundResponse, AsCnRefundResponseData, ChannelDisplayName, ChannelDisplayNameResponse, CnDetails, CnDownloadReport, CnGenerateReport, CnGenerateReportFilters, CnGenerateReportItems, CnReferenceNumber, CreateSellerCreditNoteConfig, CreateSellerCreditNoteConfigRequest, CreateSellerCreditNoteConfigResponse, CreditlineDataPlatformPayload, CreditlineDataPlatformRequest, CreditlineDataPlatformResponse, CreditNoteConfigNotificationEvents, CreditNoteDetails, CreditNoteDetailsRequest, CreditNoteDetailsResponse, DeleteConfig, DeleteConfigRequest, DeleteConfigResponse, DownloadCreditDebitNote, DownloadCreditDebitNoteRequest, DownloadCreditDebitNoteResponse, DownloadCreditDebitNoteResponseData, DownloadReport, DownloadReportCustomerCnRequest, DownloadReportCustomerCnResponse, DownloadReportItems, DownloadReportList, DownloadReportResponseData, Error, GenerateReportCustomerCnRequest, GenerateReportCustomerCnResponse, GenerateReportFilters, GenerateReportJson, GenerateReportMeta, GenerateReportPlatform, GenerateReportRequest, GetAffiliate, GetAffiliateResponse, GetCnConfigRequest, GetCnConfigResponse, GetCnConfigResponseData, GetCnConfigResponseMeta, GetCustomerCreditBalance, GetCustomerCreditBalanceRequest, GetCustomerCreditBalanceResponse, GetCustomerCreditBalanceResponseData, GetDocs, GetEngineData, GetEngineFilters, GetEngineRequest, GetEngineResponse, GetPdfUrlViewRequest, GetPdfUrlViewResponse, GetPdfUrlViewResponseData, GetReason, GetReasonRequest, GetReasonResponse, GetReportingFilters, GetReportingFiltersResponse, GetReportingNestedFilters, GetReportListData, GetReportListRequest, InoviceListingPayloadDataFilters, InvoiceListingPayloadData, InvoiceListingRequest, InvoiceListingResponse, InvoiceListingResponseItems, InvoicePdfPayloadData, InvoicePdfRequest, InvoicePdfResponse, InvoiceTypePayloadData, InvoiceTypeRequest, InvoiceTypeResponse, InvoiceTypeResponseItems, IsCreditlinePayload, IsCreditlinePlatformRequest, IsCreditlinePlatformResponse, Page, PaymentProcessPayload, PaymentProcessRequest, PaymentProcessResponse, RedemptionDetails, UnpaidInvoiceDataItems };
}
/** @returns {AsCnRefundData} */
declare function AsCnRefundData(): AsCnRefundData;
type AsCnRefundData = {
    affiliate_id?: string;
    seller_id?: number;
    toggle_edit_required?: boolean;
};
/** @returns {AsCnRefundRequest} */
declare function AsCnRefundRequest(): AsCnRefundRequest;
type AsCnRefundRequest = {
    data?: AsCnRefundData;
};
/** @returns {AsCnRefundResponse} */
declare function AsCnRefundResponse(): AsCnRefundResponse;
type AsCnRefundResponse = {
    data?: AsCnRefundResponseData;
    success?: boolean;
};
/** @returns {AsCnRefundResponseData} */
declare function AsCnRefundResponseData(): AsCnRefundResponseData;
type AsCnRefundResponseData = {
    is_first_time_user?: boolean;
};
/** @returns {ChannelDisplayName} */
declare function ChannelDisplayName(): ChannelDisplayName;
type ChannelDisplayName = {
    platform_pos?: string;
};
/** @returns {ChannelDisplayNameResponse} */
declare function ChannelDisplayNameResponse(): ChannelDisplayNameResponse;
type ChannelDisplayNameResponse = {
    data?: ChannelDisplayName;
    success?: boolean;
};
/** @returns {CnDetails} */
declare function CnDetails(): CnDetails;
type CnDetails = {
    channel_of_issuance?: string;
    date_issued?: string;
    expiry_date?: string;
    invoice_number?: string;
    order_id?: string;
    ordering_channel?: string;
    shipment_id?: string;
    staff_id?: string;
    store_id?: string;
};
/** @returns {CnDownloadReport} */
declare function CnDownloadReport(): CnDownloadReport;
type CnDownloadReport = {
    affiliate_id?: string;
    end_date?: string;
    page?: number;
    pagesize?: number;
    search?: string;
    search_type?: string;
    start_date?: string;
    status?: string[];
};
/** @returns {CnGenerateReport} */
declare function CnGenerateReport(): CnGenerateReport;
type CnGenerateReport = {
    affiliate_id?: string;
    end_date?: string;
    filters?: CnGenerateReportFilters;
    meta?: GenerateReportFilters;
    page?: number;
    pagesize?: number;
    report_id?: string;
    search?: string;
    search_type?: string;
    start_date?: string;
};
/** @returns {CnGenerateReportFilters} */
declare function CnGenerateReportFilters(): CnGenerateReportFilters;
type CnGenerateReportFilters = {
    channel_of_issuance?: string[];
    ordering_channel?: string[];
    staff_id?: string[];
    store_id?: number[];
    types_of_transaction?: string[];
    utilisation?: string[];
};
/** @returns {CnGenerateReportItems} */
declare function CnGenerateReportItems(): CnGenerateReportItems;
type CnGenerateReportItems = {
    credit_note_number?: string;
    date_issued?: string;
    expiry_date?: string;
    invoice_number?: string;
    order_id?: string;
    shipment_id?: string;
    status?: string;
    total_amount?: number;
};
/** @returns {CnReferenceNumber} */
declare function CnReferenceNumber(): CnReferenceNumber;
type CnReferenceNumber = {
    cn_reference_number?: string;
};
/** @returns {CreateSellerCreditNoteConfig} */
declare function CreateSellerCreditNoteConfig(): CreateSellerCreditNoteConfig;
type CreateSellerCreditNoteConfig = {
    affiliate_id?: string;
    currency_type?: string;
    is_cn_as_refund_method?: boolean;
    notification_events?: CreditNoteConfigNotificationEvents;
    ordering_channel?: string[];
    sales_channel_name?: string;
    seller_id?: number;
    slug_values?: string[];
    source_channel?: string[];
    validity?: number;
};
/** @returns {CreateSellerCreditNoteConfigRequest} */
declare function CreateSellerCreditNoteConfigRequest(): CreateSellerCreditNoteConfigRequest;
type CreateSellerCreditNoteConfigRequest = {
    data?: CreateSellerCreditNoteConfig;
};
/** @returns {CreateSellerCreditNoteConfigResponse} */
declare function CreateSellerCreditNoteConfigResponse(): CreateSellerCreditNoteConfigResponse;
type CreateSellerCreditNoteConfigResponse = {
    message?: string;
    success?: boolean;
};
/** @returns {CreditlineDataPlatformPayload} */
declare function CreditlineDataPlatformPayload(): CreditlineDataPlatformPayload;
type CreditlineDataPlatformPayload = {
    end_end?: string;
    page?: number;
    pagesize?: number;
    seller_id?: string;
    start_end?: string;
};
/** @returns {CreditlineDataPlatformRequest} */
declare function CreditlineDataPlatformRequest(): CreditlineDataPlatformRequest;
type CreditlineDataPlatformRequest = {
    data?: CreditlineDataPlatformPayload;
};
/** @returns {CreditlineDataPlatformResponse} */
declare function CreditlineDataPlatformResponse(): CreditlineDataPlatformResponse;
type CreditlineDataPlatformResponse = {
    code?: number;
    headers?: string[];
    item_count?: number;
    items?: any[];
    message?: string;
    page?: any;
    show_mr?: boolean;
};
/** @returns {CreditNoteConfigNotificationEvents} */
declare function CreditNoteConfigNotificationEvents(): CreditNoteConfigNotificationEvents;
type CreditNoteConfigNotificationEvents = {
    expiration_reminder_to_customer?: number;
};
/** @returns {CreditNoteDetails} */
declare function CreditNoteDetails(): CreditNoteDetails;
type CreditNoteDetails = {
    available_cn_balance?: number;
    cn_amount?: number;
    cn_details?: CnDetails[];
    cn_reference_number?: string;
    cn_status?: string;
    customer_mobile_number?: string;
    redemption_details?: RedemptionDetails[];
    remaining_cn_amount?: number;
};
/** @returns {CreditNoteDetailsRequest} */
declare function CreditNoteDetailsRequest(): CreditNoteDetailsRequest;
type CreditNoteDetailsRequest = {
    data?: CnReferenceNumber;
};
/** @returns {CreditNoteDetailsResponse} */
declare function CreditNoteDetailsResponse(): CreditNoteDetailsResponse;
type CreditNoteDetailsResponse = {
    data?: CreditNoteDetails;
    success?: boolean;
};
/** @returns {DeleteConfig} */
declare function DeleteConfig(): DeleteConfig;
type DeleteConfig = {
    affiliate_id?: string;
    seller_id?: number;
    slug_values?: string[];
};
/** @returns {DeleteConfigRequest} */
declare function DeleteConfigRequest(): DeleteConfigRequest;
type DeleteConfigRequest = {
    data?: DeleteConfig;
};
/** @returns {DeleteConfigResponse} */
declare function DeleteConfigResponse(): DeleteConfigResponse;
type DeleteConfigResponse = {
    message?: string;
    success?: boolean;
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
/** @returns {DownloadCreditDebitNoteResponse} */
declare function DownloadCreditDebitNoteResponse(): DownloadCreditDebitNoteResponse;
type DownloadCreditDebitNoteResponse = {
    data?: DownloadCreditDebitNoteResponseData[];
    success?: boolean;
};
/** @returns {DownloadCreditDebitNoteResponseData} */
declare function DownloadCreditDebitNoteResponseData(): DownloadCreditDebitNoteResponseData;
type DownloadCreditDebitNoteResponseData = {
    id?: string;
    pdf_s3_url?: string;
};
/** @returns {DownloadReport} */
declare function DownloadReport(): DownloadReport;
type DownloadReport = {
    end_date?: string;
    page?: number;
    pagesize?: number;
    start_date?: string;
};
/** @returns {DownloadReportCustomerCnRequest} */
declare function DownloadReportCustomerCnRequest(): DownloadReportCustomerCnRequest;
type DownloadReportCustomerCnRequest = {
    data?: CnDownloadReport;
};
/** @returns {DownloadReportCustomerCnResponse} */
declare function DownloadReportCustomerCnResponse(): DownloadReportCustomerCnResponse;
type DownloadReportCustomerCnResponse = {
    data?: DownloadReportResponseData[];
};
/** @returns {DownloadReportItems} */
declare function DownloadReportItems(): DownloadReportItems;
type DownloadReportItems = {
    end_date?: string;
    filters?: GenerateReportFilters;
    meta?: GenerateReportMeta;
    report_id?: string;
    start_date?: string;
    type_of_request?: string;
};
/** @returns {DownloadReportList} */
declare function DownloadReportList(): DownloadReportList;
type DownloadReportList = {
    item_count?: number;
    items?: DownloadReportItems[];
    page?: Page;
};
/** @returns {DownloadReportResponseData} */
declare function DownloadReportResponseData(): DownloadReportResponseData;
type DownloadReportResponseData = {
    created_at?: string;
    display_name?: string;
    download_link?: string;
    end_date?: string;
    filters?: any;
    full_name?: string;
    meta?: any;
    msg?: string;
    report_config_id?: string;
    report_name?: string;
    request_dict?: any;
    requested_by?: string;
    start_date?: string;
    status?: string;
};
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    reason?: string;
    success?: boolean;
};
/** @returns {GenerateReportCustomerCnRequest} */
declare function GenerateReportCustomerCnRequest(): GenerateReportCustomerCnRequest;
type GenerateReportCustomerCnRequest = {
    data?: CnGenerateReport;
};
/** @returns {GenerateReportCustomerCnResponse} */
declare function GenerateReportCustomerCnResponse(): GenerateReportCustomerCnResponse;
type GenerateReportCustomerCnResponse = {
    allowed_filters?: string[];
    end_date?: string;
    headers?: string[];
    item_count?: number;
    items?: CnGenerateReportItems[];
    page?: Page;
    primary_headers?: string[];
    row_header_display_order?: any;
    start_date?: string;
};
/** @returns {GenerateReportFilters} */
declare function GenerateReportFilters(): GenerateReportFilters;
type GenerateReportFilters = {
    brand?: string[];
    channel?: string[];
    company?: string[];
};
/** @returns {GenerateReportJson} */
declare function GenerateReportJson(): GenerateReportJson;
type GenerateReportJson = {
    end_date?: string;
    headers?: string[];
    item_count?: number;
    items?: string[][];
    page?: Page;
    start_date?: string;
};
/** @returns {GenerateReportMeta} */
declare function GenerateReportMeta(): GenerateReportMeta;
type GenerateReportMeta = {
    brand?: string;
    channel?: string;
    company?: string;
};
/** @returns {GenerateReportPlatform} */
declare function GenerateReportPlatform(): GenerateReportPlatform;
type GenerateReportPlatform = {
    end_date?: string;
    filters?: GenerateReportFilters;
    meta?: GenerateReportMeta;
    report_id?: string;
    start_date?: string;
};
/** @returns {GenerateReportRequest} */
declare function GenerateReportRequest(): GenerateReportRequest;
type GenerateReportRequest = {
    data?: GenerateReportPlatform;
};
/** @returns {GetAffiliate} */
declare function GetAffiliate(): GetAffiliate;
type GetAffiliate = {
    company_id?: number;
};
/** @returns {GetAffiliateResponse} */
declare function GetAffiliateResponse(): GetAffiliateResponse;
type GetAffiliateResponse = {
    docs?: any[];
    success?: boolean;
};
/** @returns {GetCnConfigRequest} */
declare function GetCnConfigRequest(): GetCnConfigRequest;
type GetCnConfigRequest = {
    data?: DeleteConfig;
};
/** @returns {GetCnConfigResponse} */
declare function GetCnConfigResponse(): GetCnConfigResponse;
type GetCnConfigResponse = {
    data?: GetCnConfigResponseData;
    success?: boolean;
};
/** @returns {GetCnConfigResponseData} */
declare function GetCnConfigResponseData(): GetCnConfigResponseData;
type GetCnConfigResponseData = {
    affiliate_id?: string;
    currency_type?: string;
    is_cn_as_refund_method?: boolean;
    meta?: GetCnConfigResponseMeta;
    notification_events?: CreditNoteConfigNotificationEvents;
    redemption_ordering_channel?: string[];
    seller_id?: number;
    validity?: number;
};
/** @returns {GetCnConfigResponseMeta} */
declare function GetCnConfigResponseMeta(): GetCnConfigResponseMeta;
type GetCnConfigResponseMeta = {
    reason?: string;
    source_channel?: string[];
};
/** @returns {GetCustomerCreditBalance} */
declare function GetCustomerCreditBalance(): GetCustomerCreditBalance;
type GetCustomerCreditBalance = {
    affiliate_id?: string;
    customer_mobile_number?: string;
    seller_id?: number;
};
/** @returns {GetCustomerCreditBalanceRequest} */
declare function GetCustomerCreditBalanceRequest(): GetCustomerCreditBalanceRequest;
type GetCustomerCreditBalanceRequest = {
    data?: GetCustomerCreditBalance;
};
/** @returns {GetCustomerCreditBalanceResponse} */
declare function GetCustomerCreditBalanceResponse(): GetCustomerCreditBalanceResponse;
type GetCustomerCreditBalanceResponse = {
    data?: GetCustomerCreditBalanceResponseData;
    success?: boolean;
};
/** @returns {GetCustomerCreditBalanceResponseData} */
declare function GetCustomerCreditBalanceResponseData(): GetCustomerCreditBalanceResponseData;
type GetCustomerCreditBalanceResponseData = {
    customer_mobile_number?: string;
    total_credited_balance?: number;
};
/** @returns {GetDocs} */
declare function GetDocs(): GetDocs;
type GetDocs = {
    docs?: any[];
    items?: any[];
};
/** @returns {GetEngineData} */
declare function GetEngineData(): GetEngineData;
type GetEngineData = {
    filters?: GetEngineFilters;
    project?: string[];
    table_name?: string;
};
/** @returns {GetEngineFilters} */
declare function GetEngineFilters(): GetEngineFilters;
type GetEngineFilters = {
    config_field?: string;
};
/** @returns {GetEngineRequest} */
declare function GetEngineRequest(): GetEngineRequest;
type GetEngineRequest = {
    data?: GetEngineData;
};
/** @returns {GetEngineResponse} */
declare function GetEngineResponse(): GetEngineResponse;
type GetEngineResponse = {
    item_count?: number;
    items?: any[];
    page?: Page;
    success?: boolean;
};
/** @returns {GetPdfUrlViewRequest} */
declare function GetPdfUrlViewRequest(): GetPdfUrlViewRequest;
type GetPdfUrlViewRequest = {
    data?: CnReferenceNumber;
};
/** @returns {GetPdfUrlViewResponse} */
declare function GetPdfUrlViewResponse(): GetPdfUrlViewResponse;
type GetPdfUrlViewResponse = {
    data?: GetPdfUrlViewResponseData;
    success?: boolean;
};
/** @returns {GetPdfUrlViewResponseData} */
declare function GetPdfUrlViewResponseData(): GetPdfUrlViewResponseData;
type GetPdfUrlViewResponseData = {
    cn_reference_number?: string;
    s3_pdf_link?: string;
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
/** @returns {GetReasonResponse} */
declare function GetReasonResponse(): GetReasonResponse;
type GetReasonResponse = {
    data?: GetDocs;
    success?: boolean;
};
/** @returns {GetReportingFilters} */
declare function GetReportingFilters(): GetReportingFilters;
type GetReportingFilters = {
    options?: any[];
    text?: string;
    type?: string;
    value?: string;
};
/** @returns {GetReportingFiltersResponse} */
declare function GetReportingFiltersResponse(): GetReportingFiltersResponse;
type GetReportingFiltersResponse = {
    filters?: GetReportingNestedFilters[];
    search?: GetReportingFilters;
    status?: GetReportingFilters;
};
/** @returns {GetReportingNestedFilters} */
declare function GetReportingNestedFilters(): GetReportingNestedFilters;
type GetReportingNestedFilters = {
    options?: any[];
    placeholder_text?: string;
    required?: boolean;
    text?: string;
    type?: string;
    value?: string;
};
/** @returns {GetReportListData} */
declare function GetReportListData(): GetReportListData;
type GetReportListData = {
    listing_enabled?: boolean;
    role_name?: string;
};
/** @returns {GetReportListRequest} */
declare function GetReportListRequest(): GetReportListRequest;
type GetReportListRequest = {
    data?: GetReportListData;
};
/** @returns {InoviceListingPayloadDataFilters} */
declare function InoviceListingPayloadDataFilters(): InoviceListingPayloadDataFilters;
type InoviceListingPayloadDataFilters = {
    company_id?: string[];
    invoice_type?: string[];
    payment_status?: string[];
};
/** @returns {InvoiceListingPayloadData} */
declare function InvoiceListingPayloadData(): InvoiceListingPayloadData;
type InvoiceListingPayloadData = {
    end_date?: string;
    filters?: InoviceListingPayloadDataFilters;
    page?: number;
    page_size?: number;
    search?: string;
    start_date?: string;
};
/** @returns {InvoiceListingRequest} */
declare function InvoiceListingRequest(): InvoiceListingRequest;
type InvoiceListingRequest = {
    data?: InvoiceListingPayloadData;
};
/** @returns {InvoiceListingResponse} */
declare function InvoiceListingResponse(): InvoiceListingResponse;
type InvoiceListingResponse = {
    item_count?: number;
    items?: InvoiceListingResponseItems[];
    page?: Page;
    unpaid_invoice_data?: UnpaidInvoiceDataItems;
};
/** @returns {InvoiceListingResponseItems} */
declare function InvoiceListingResponseItems(): InvoiceListingResponseItems;
type InvoiceListingResponseItems = {
    amount?: string;
    company?: string;
    due_date?: string;
    invoice_date?: string;
    invoice_id?: string;
    invoice_number?: string;
    invoice_type?: string;
    is_downloadable?: boolean;
    period?: string;
    status?: string;
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
    data?: string[];
    error?: string[];
    success?: boolean;
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
/** @returns {InvoiceTypeResponse} */
declare function InvoiceTypeResponse(): InvoiceTypeResponse;
type InvoiceTypeResponse = {
    invoice_type_list?: InvoiceTypeResponseItems[];
    payment_status_list?: InvoiceTypeResponseItems[];
    success?: boolean;
};
/** @returns {InvoiceTypeResponseItems} */
declare function InvoiceTypeResponseItems(): InvoiceTypeResponseItems;
type InvoiceTypeResponseItems = {
    text?: string;
    value?: string;
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
    code?: number;
    is_creditline_opted?: boolean;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size?: number;
    type: string;
};
/** @returns {PaymentProcessPayload} */
declare function PaymentProcessPayload(): PaymentProcessPayload;
type PaymentProcessPayload = {
    amount?: string;
    currency?: string;
    invoice_number?: string;
    meta?: any;
    mode_of_payment?: string;
    platform?: string;
    seller_id?: string;
    source_reference?: string;
    total_amount?: string;
    transaction_type?: string;
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
    redirect_url?: string;
    transaction_id?: string;
};
/** @returns {RedemptionDetails} */
declare function RedemptionDetails(): RedemptionDetails;
type RedemptionDetails = {
    amount_debited?: number;
    created_at?: string;
    invoice_number?: string;
    order_id?: string;
    ordering_channel?: string;
    shipment_id?: string;
    staff_id?: string;
    store_id?: string;
};
/** @returns {UnpaidInvoiceDataItems} */
declare function UnpaidInvoiceDataItems(): UnpaidInvoiceDataItems;
type UnpaidInvoiceDataItems = {
    currency?: string;
    total_unpaid_amount?: number;
    total_unpaid_invoice_count?: number;
};
