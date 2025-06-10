export = FileStoragePlatformModel;
/**
 * @typedef FailedBrowseFilesResult
 * @property {string} message
 */
/**
 * @typedef CDN
 * @property {string} url
 * @property {string} absolute_url
 * @property {string} relative_url
 */
/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */
/**
 * @typedef FileUpload
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {string[]} [tags]
 */
/**
 * @typedef FileUploadStart
 * @property {string} file_name
 * @property {string} content_type
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Object} [params]
 */
/**
 * @typedef CreatedBy
 * @property {string} [username]
 */
/**
 * @typedef FileUploadComplete
 * @property {string} _id
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} namespace
 * @property {string} operation
 * @property {number} company_id
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {string} created_on
 * @property {string} modified_on
 * @property {CreatedBy} [created_by]
 */
/**
 * @typedef ProxyFileAccess
 * @property {Object} [data]
 * @property {Object} [support]
 */
/**
 * @typedef DestinationNamespace
 * @property {string} [namespace]
 */
/**
 * @typedef CopyFiles
 * @property {string[]} [urls]
 * @property {DestinationNamespace} destination
 */
/**
 * @typedef Urls
 * @property {string} url
 * @property {string} signed_url
 * @property {number} expiry
 */
/**
 * @typedef SignUrlResult
 * @property {Urls[]} urls
 */
/**
 * @typedef SignUrl
 * @property {number} expiry
 * @property {string[]} urls
 */
/**
 * @typedef PdfConfig
 * @property {string} [format] - This is invoice document format such as A4, A6, POS
 * @property {string} [template] - This is html template string.
 * @property {number} [pdf_type_id] - This field holds an identifier for the type of PDF.
 * @property {string} [country_code] - This field contains the country code.
 * @property {boolean} [default_template] - This field indicates whether the
 *   fetched HTML template is the default template.
 */
/**
 * @typedef PdfConfigSuccessData
 * @property {string} [_id] - This field contains the unique identifier for the
 *   PDF configuration.
 * @property {number} [company_id] - This field holds the identifier for the
 *   company associated with the PDF configuration.
 * @property {string} [application_id] - This field contains the identifier for
 *   the application that uses this PDF configuration.
 * @property {number} [pdf_type_id] - This field holds an identifier for the type of PDF.
 * @property {string} [format] - This field specifies the format of the invoice document.
 * @property {string} [template] - This field contains the HTML template string
 *   for the PDF document.
 * @property {number} [__v] - This field holds the version number of the PDF
 *   configuration document.
 * @property {string} [country_code]
 */
/**
 * @typedef PdfConfigSuccess
 * @property {PdfConfigSuccessData[]} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef PdfConfigSaveSuccessData
 * @property {string} [_id]
 * @property {number} [company_id]
 * @property {string} [application_id]
 * @property {number} [pdf_type_id]
 * @property {string} [format]
 * @property {string} [template]
 * @property {number} [__v]
 */
/**
 * @typedef PdfConfigSaveSuccess
 * @property {PdfConfigSaveSuccessData} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef PaymentReceiptRequestBody
 * @property {PaymentReceiptPayload} [payload]
 * @property {PaymentReceiptMeta} [meta]
 */
/**
 * @typedef PaymentReceiptOrderDetails
 * @property {string} [jiomart_order_id]
 * @property {number} [total_items]
 * @property {number} [final_amount]
 * @property {string} [final_amount_in_words]
 * @property {string} [order_created_date]
 * @property {string} [order_created_time]
 * @property {string} [prm_id]
 * @property {string} [receipt_no]
 * @property {PaymentReceiptTaxes} [taxes]
 */
/**
 * @typedef PaymentReceiptCustomerDetails
 * @property {string} [id]
 * @property {string} [email_id]
 * @property {string} [last_name]
 * @property {string} [first_name]
 * @property {string} [mobile_number]
 */
/**
 * @typedef PaymentReceiptPayments
 * @property {string} [payment_desc]
 * @property {string} [txn_date]
 */
/**
 * @typedef PaymentReceiptFormat
 * @property {string[]} [payment_receipt]
 */
/**
 * @typedef PaymentReceiptService
 * @property {string} [name]
 */
/**
 * @typedef PaymentReceiptTaxes
 * @property {string} [gstin]
 * @property {string} [pancard]
 */
/**
 * @typedef PaymentReceiptPayload
 * @property {string} [uid]
 * @property {PaymentReceiptOrderDetails} [order_detail]
 * @property {PaymentReceiptCustomerDetails} [customer_detail]
 * @property {PaymentReceiptPayments[]} [payments]
 */
/**
 * @typedef PaymentReceiptMeta
 * @property {string} [job_type]
 * @property {string} [action]
 * @property {Object} [event]
 * @property {string} [organizaton_id]
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {PaymentReceiptFormat} [format]
 * @property {string[]} [trace_id]
 * @property {number} [created_timestamp]
 * @property {PaymentReceiptService} [service]
 * @property {Object} [event_trace_info]
 * @property {string} [trace]
 */
/**
 * @typedef ExtensionSlug
 * @property {string} [extension_slug]
 */
declare class FileStoragePlatformModel {
}
declare namespace FileStoragePlatformModel {
    export { FailedBrowseFilesResult, CDN, Upload, FileUpload, FileUploadStart, CreatedBy, FileUploadComplete, ProxyFileAccess, DestinationNamespace, CopyFiles, Urls, SignUrlResult, SignUrl, PdfConfig, PdfConfigSuccessData, PdfConfigSuccess, PdfConfigSaveSuccessData, PdfConfigSaveSuccess, PaymentReceiptRequestBody, PaymentReceiptOrderDetails, PaymentReceiptCustomerDetails, PaymentReceiptPayments, PaymentReceiptFormat, PaymentReceiptService, PaymentReceiptTaxes, PaymentReceiptPayload, PaymentReceiptMeta, ExtensionSlug };
}
/** @returns {FailedBrowseFilesResult} */
declare function FailedBrowseFilesResult(): FailedBrowseFilesResult;
type FailedBrowseFilesResult = {
    message: string;
};
/** @returns {CDN} */
declare function CDN(): CDN;
type CDN = {
    url: string;
    absolute_url: string;
    relative_url: string;
};
/** @returns {Upload} */
declare function Upload(): Upload;
type Upload = {
    expiry: number;
    url: string;
};
/** @returns {FileUpload} */
declare function FileUpload(): FileUpload;
type FileUpload = {
    file_name: string;
    file_path: string;
    content_type: string;
    method?: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    tags?: string[];
};
/** @returns {FileUploadStart} */
declare function FileUploadStart(): FileUploadStart;
type FileUploadStart = {
    file_name: string;
    content_type: string;
    size: number;
    tags?: string[];
    params?: any;
};
/** @returns {CreatedBy} */
declare function CreatedBy(): CreatedBy;
type CreatedBy = {
    username?: string;
};
/** @returns {FileUploadComplete} */
declare function FileUploadComplete(): FileUploadComplete;
type FileUploadComplete = {
    _id: string;
    file_name: string;
    file_path: string;
    content_type: string;
    namespace: string;
    operation: string;
    company_id: number;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: boolean;
    tags?: string[];
    created_on: string;
    modified_on: string;
    created_by?: CreatedBy;
};
/** @returns {ProxyFileAccess} */
declare function ProxyFileAccess(): ProxyFileAccess;
type ProxyFileAccess = {
    data?: any;
    support?: any;
};
/** @returns {DestinationNamespace} */
declare function DestinationNamespace(): DestinationNamespace;
type DestinationNamespace = {
    namespace?: string;
};
/** @returns {CopyFiles} */
declare function CopyFiles(): CopyFiles;
type CopyFiles = {
    urls?: string[];
    destination: DestinationNamespace;
};
/** @returns {Urls} */
declare function Urls(): Urls;
type Urls = {
    url: string;
    signed_url: string;
    expiry: number;
};
/** @returns {SignUrlResult} */
declare function SignUrlResult(): SignUrlResult;
type SignUrlResult = {
    urls: Urls[];
};
/** @returns {SignUrl} */
declare function SignUrl(): SignUrl;
type SignUrl = {
    expiry: number;
    urls: string[];
};
/** @returns {PdfConfig} */
declare function PdfConfig(): PdfConfig;
type PdfConfig = {
    /**
     * - This is invoice document format such as A4, A6, POS
     */
    format?: string;
    /**
     * - This is html template string.
     */
    template?: string;
    /**
     * - This field holds an identifier for the type of PDF.
     */
    pdf_type_id?: number;
    /**
     * - This field contains the country code.
     */
    country_code?: string;
    /**
     * - This field indicates whether the
     * fetched HTML template is the default template.
     */
    default_template?: boolean;
};
/** @returns {PdfConfigSuccessData} */
declare function PdfConfigSuccessData(): PdfConfigSuccessData;
type PdfConfigSuccessData = {
    /**
     * - This field contains the unique identifier for the
     * PDF configuration.
     */
    _id?: string;
    /**
     * - This field holds the identifier for the
     * company associated with the PDF configuration.
     */
    company_id?: number;
    /**
     * - This field contains the identifier for
     * the application that uses this PDF configuration.
     */
    application_id?: string;
    /**
     * - This field holds an identifier for the type of PDF.
     */
    pdf_type_id?: number;
    /**
     * - This field specifies the format of the invoice document.
     */
    format?: string;
    /**
     * - This field contains the HTML template string
     * for the PDF document.
     */
    template?: string;
    /**
     * - This field holds the version number of the PDF
     * configuration document.
     */
    __v?: number;
    country_code?: string;
};
/** @returns {PdfConfigSuccess} */
declare function PdfConfigSuccess(): PdfConfigSuccess;
type PdfConfigSuccess = {
    data?: PdfConfigSuccessData[];
    success?: boolean;
};
/** @returns {PdfConfigSaveSuccessData} */
declare function PdfConfigSaveSuccessData(): PdfConfigSaveSuccessData;
type PdfConfigSaveSuccessData = {
    _id?: string;
    company_id?: number;
    application_id?: string;
    pdf_type_id?: number;
    format?: string;
    template?: string;
    __v?: number;
};
/** @returns {PdfConfigSaveSuccess} */
declare function PdfConfigSaveSuccess(): PdfConfigSaveSuccess;
type PdfConfigSaveSuccess = {
    data?: PdfConfigSaveSuccessData;
    success?: boolean;
};
/** @returns {PaymentReceiptRequestBody} */
declare function PaymentReceiptRequestBody(): PaymentReceiptRequestBody;
type PaymentReceiptRequestBody = {
    payload?: PaymentReceiptPayload;
    meta?: PaymentReceiptMeta;
};
/** @returns {PaymentReceiptOrderDetails} */
declare function PaymentReceiptOrderDetails(): PaymentReceiptOrderDetails;
type PaymentReceiptOrderDetails = {
    jiomart_order_id?: string;
    total_items?: number;
    final_amount?: number;
    final_amount_in_words?: string;
    order_created_date?: string;
    order_created_time?: string;
    prm_id?: string;
    receipt_no?: string;
    taxes?: PaymentReceiptTaxes;
};
/** @returns {PaymentReceiptCustomerDetails} */
declare function PaymentReceiptCustomerDetails(): PaymentReceiptCustomerDetails;
type PaymentReceiptCustomerDetails = {
    id?: string;
    email_id?: string;
    last_name?: string;
    first_name?: string;
    mobile_number?: string;
};
/** @returns {PaymentReceiptPayments} */
declare function PaymentReceiptPayments(): PaymentReceiptPayments;
type PaymentReceiptPayments = {
    payment_desc?: string;
    txn_date?: string;
};
/** @returns {PaymentReceiptFormat} */
declare function PaymentReceiptFormat(): PaymentReceiptFormat;
type PaymentReceiptFormat = {
    payment_receipt?: string[];
};
/** @returns {PaymentReceiptService} */
declare function PaymentReceiptService(): PaymentReceiptService;
type PaymentReceiptService = {
    name?: string;
};
/** @returns {PaymentReceiptTaxes} */
declare function PaymentReceiptTaxes(): PaymentReceiptTaxes;
type PaymentReceiptTaxes = {
    gstin?: string;
    pancard?: string;
};
/** @returns {PaymentReceiptPayload} */
declare function PaymentReceiptPayload(): PaymentReceiptPayload;
type PaymentReceiptPayload = {
    uid?: string;
    order_detail?: PaymentReceiptOrderDetails;
    customer_detail?: PaymentReceiptCustomerDetails;
    payments?: PaymentReceiptPayments[];
};
/** @returns {PaymentReceiptMeta} */
declare function PaymentReceiptMeta(): PaymentReceiptMeta;
type PaymentReceiptMeta = {
    job_type?: string;
    action?: string;
    event?: any;
    organizaton_id?: string;
    company_id?: number;
    application_id?: string[];
    format?: PaymentReceiptFormat;
    trace_id?: string[];
    created_timestamp?: number;
    service?: PaymentReceiptService;
    event_trace_info?: any;
    trace?: string;
};
/** @returns {ExtensionSlug} */
declare function ExtensionSlug(): ExtensionSlug;
type ExtensionSlug = {
    extension_slug?: string;
};
