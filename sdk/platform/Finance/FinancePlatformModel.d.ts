export = FinancePlatformModel;
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
 * @typedef Error
 * @property {string} [reason]
 * @property {boolean} [success]
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
 * @typedef UnpaidInvoiceDataItems
 * @property {string} [currency]
 * @property {number} [total_unpaid_amount]
 * @property {number} [total_unpaid_invoice_count]
 */
declare class FinancePlatformModel {
}
declare namespace FinancePlatformModel {
    export { CreditlineDataPlatformPayload, CreditlineDataPlatformRequest, CreditlineDataPlatformResponse, DownloadCreditDebitNote, DownloadCreditDebitNoteRequest, DownloadCreditDebitNoteResponse, DownloadCreditDebitNoteResponseData, DownloadReport, DownloadReportItems, DownloadReportList, Error, GenerateReportFilters, GenerateReportJson, GenerateReportMeta, GenerateReportPlatform, GenerateReportRequest, GetAffiliate, GetAffiliateResponse, GetDocs, GetEngineData, GetEngineFilters, GetEngineRequest, GetEngineResponse, GetReason, GetReasonRequest, GetReasonResponse, GetReportListData, GetReportListRequest, InoviceListingPayloadDataFilters, InvoiceListingPayloadData, InvoiceListingRequest, InvoiceListingResponse, InvoiceListingResponseItems, InvoicePdfPayloadData, InvoicePdfRequest, InvoicePdfResponse, InvoiceTypePayloadData, InvoiceTypeRequest, InvoiceTypeResponse, InvoiceTypeResponseItems, IsCreditlinePayload, IsCreditlinePlatformRequest, IsCreditlinePlatformResponse, Page, PaymentProcessPayload, PaymentProcessRequest, PaymentProcessResponse, UnpaidInvoiceDataItems };
}
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
/** @returns {Error} */
declare function Error(): Error;
type Error = {
    reason?: string;
    success?: boolean;
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
/** @returns {UnpaidInvoiceDataItems} */
declare function UnpaidInvoiceDataItems(): UnpaidInvoiceDataItems;
type UnpaidInvoiceDataItems = {
    currency?: string;
    total_unpaid_amount?: number;
    total_unpaid_invoice_count?: number;
};
