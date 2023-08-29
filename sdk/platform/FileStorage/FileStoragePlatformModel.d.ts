export = FileStoragePlatformModel;
/**
 * @typedef BrowseResponse
 * @property {DbRecord[]} items
 * @property {Page} page
 */
/**
 * @typedef BulkUploadFailResponse
 * @property {Status} status
 */
/**
 * @typedef BulkUploadSyncMode
 * @property {FilesSuccess[]} [files]
 * @property {Status} status
 */
/**
 * @typedef CDN
 * @property {string} absolute_url
 * @property {string} relative_url
 * @property {string} url
 */
/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {CDN} cdn
 * @property {string} content_type
 * @property {string} created_on
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} modified_on
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {Upload} upload
 */
/**
 * @typedef CopyFiles
 * @property {DestinationNamespace} destination
 * @property {string[]} urls
 */
/**
 * @typedef DbRecord
 * @property {string} _id
 * @property {CDN} cdn
 * @property {string} content_type
 * @property {string} created_on
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} modified_on
 * @property {string} namespace
 * @property {string} [operation]
 * @property {boolean} success
 * @property {string[]} tags
 * @property {Upload} upload
 */
/**
 * @typedef DestinationNamespace
 * @property {string} [namespace]
 */
/**
 * @typedef DummyTemplateDataItems
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {Object} payload
 * @property {number} [pdf_type_id]
 */
/**
 * @typedef FailedResponse
 * @property {string} message
 */
/**
 * @typedef File
 * @property {FileSrc} src
 */
/**
 * @typedef FileSrc
 * @property {string} [method]
 * @property {string} [namespace]
 * @property {string} url
 */
/**
 * @typedef FilesSuccess
 * @property {File} [file]
 * @property {boolean} success
 */
/**
 * @typedef InvoiceTypesResponse
 * @property {number} __v
 * @property {string} _id
 * @property {string[]} format
 * @property {string} name
 * @property {number} pdf_type_id
 * @property {Object} schema
 * @property {boolean} visibility
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
 * @typedef pdfConfig
 * @property {string} [format] - This is invoice document format such as A4, A6, POS
 * @property {number} [pdf_type_id]
 * @property {string} [template] - This is html template string
 */
/**
 * @typedef PdfConfigSaveSuccess
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {string} [format]
 * @property {number} [pdf_type_id]
 * @property {string} [template]
 */
/**
 * @typedef PdfConfigSuccess
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {number} [company_id]
 * @property {string} [format]
 * @property {number} [pdf_type_id]
 * @property {string} [template]
 */
/**
 * @typedef PdfDefaultTemplateSuccess
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [format]
 * @property {number} [pdf_type_id]
 * @property {string} [template]
 */
/**
 * @typedef pdfRender
 * @property {string} [format]
 * @property {Object} [payload]
 * @property {string} [template]
 */
/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */
/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */
/**
 * @typedef StartRequest
 * @property {string} content_type
 * @property {string} file_name
 * @property {Object} [params]
 * @property {number} size
 * @property {string[]} [tags]
 */
/**
 * @typedef StartResponse
 * @property {CDN} cdn
 * @property {string} content_type
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Upload} upload
 */
/**
 * @typedef Status
 * @property {number} failed
 * @property {string} [result]
 * @property {number} succeeded
 * @property {number} total
 */
/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */
/**
 * @typedef Urls
 * @property {number} expiry
 * @property {string} signed_url
 * @property {string} url
 */
declare class FileStoragePlatformModel {
}
declare namespace FileStoragePlatformModel {
    export { BrowseResponse, BulkUploadFailResponse, BulkUploadSyncMode, CDN, CompleteResponse, CopyFiles, DbRecord, DestinationNamespace, DummyTemplateDataItems, FailedResponse, File, FileSrc, FilesSuccess, InvoiceTypesResponse, Page, pdfConfig, PdfConfigSaveSuccess, PdfConfigSuccess, PdfDefaultTemplateSuccess, pdfRender, SignUrlRequest, SignUrlResponse, StartRequest, StartResponse, Status, Upload, Urls };
}
/** @returns {BrowseResponse} */
declare function BrowseResponse(): BrowseResponse;
type BrowseResponse = {
    items: DbRecord[];
    page: Page;
};
/** @returns {BulkUploadFailResponse} */
declare function BulkUploadFailResponse(): BulkUploadFailResponse;
type BulkUploadFailResponse = {
    status: Status;
};
/** @returns {BulkUploadSyncMode} */
declare function BulkUploadSyncMode(): BulkUploadSyncMode;
type BulkUploadSyncMode = {
    files?: FilesSuccess[];
    status: Status;
};
/** @returns {CDN} */
declare function CDN(): CDN;
type CDN = {
    absolute_url: string;
    relative_url: string;
    url: string;
};
/** @returns {CompleteResponse} */
declare function CompleteResponse(): CompleteResponse;
type CompleteResponse = {
    _id: string;
    cdn: CDN;
    content_type: string;
    created_on: string;
    file_name: string;
    file_path: string;
    modified_on: string;
    namespace: string;
    operation: string;
    size: number;
    success: boolean;
    tags?: string[];
    upload: Upload;
};
/** @returns {CopyFiles} */
declare function CopyFiles(): CopyFiles;
type CopyFiles = {
    destination: DestinationNamespace;
    urls: string[];
};
/** @returns {DbRecord} */
declare function DbRecord(): DbRecord;
type DbRecord = {
    _id: string;
    cdn: CDN;
    content_type: string;
    created_on: string;
    file_name: string;
    file_path: string;
    modified_on: string;
    namespace: string;
    operation?: string;
    success: boolean;
    tags: string[];
    upload: Upload;
};
/** @returns {DestinationNamespace} */
declare function DestinationNamespace(): DestinationNamespace;
type DestinationNamespace = {
    namespace?: string;
};
/** @returns {DummyTemplateDataItems} */
declare function DummyTemplateDataItems(): DummyTemplateDataItems;
type DummyTemplateDataItems = {
    __v?: number;
    _id?: string;
    payload: any;
    pdf_type_id?: number;
};
/** @returns {FailedResponse} */
declare function FailedResponse(): FailedResponse;
type FailedResponse = {
    message: string;
};
/** @returns {File} */
declare function File(): File;
type File = {
    src: FileSrc;
};
/** @returns {FileSrc} */
declare function FileSrc(): FileSrc;
type FileSrc = {
    method?: string;
    namespace?: string;
    url: string;
};
/** @returns {FilesSuccess} */
declare function FilesSuccess(): FilesSuccess;
type FilesSuccess = {
    file?: File;
    success: boolean;
};
/** @returns {InvoiceTypesResponse} */
declare function InvoiceTypesResponse(): InvoiceTypesResponse;
type InvoiceTypesResponse = {
    __v: number;
    _id: string;
    format: string[];
    name: string;
    pdf_type_id: number;
    schema: any;
    visibility: boolean;
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
/** @returns {pdfConfig} */
declare function pdfConfig(): pdfConfig;
type pdfConfig = {
    /**
     * - This is invoice document format such as A4, A6, POS
     */
    format?: string;
    pdf_type_id?: number;
    /**
     * - This is html template string
     */
    template?: string;
};
/** @returns {PdfConfigSaveSuccess} */
declare function PdfConfigSaveSuccess(): PdfConfigSaveSuccess;
type PdfConfigSaveSuccess = {
    __v?: number;
    _id?: string;
    application_id?: string;
    company_id?: number;
    format?: string;
    pdf_type_id?: number;
    template?: string;
};
/** @returns {PdfConfigSuccess} */
declare function PdfConfigSuccess(): PdfConfigSuccess;
type PdfConfigSuccess = {
    __v?: number;
    _id?: string;
    application_id?: string;
    company_id?: number;
    format?: string;
    pdf_type_id?: number;
    template?: string;
};
/** @returns {PdfDefaultTemplateSuccess} */
declare function PdfDefaultTemplateSuccess(): PdfDefaultTemplateSuccess;
type PdfDefaultTemplateSuccess = {
    __v?: number;
    _id?: string;
    format?: string;
    pdf_type_id?: number;
    template?: string;
};
/** @returns {pdfRender} */
declare function pdfRender(): pdfRender;
type pdfRender = {
    format?: string;
    payload?: any;
    template?: string;
};
/** @returns {SignUrlRequest} */
declare function SignUrlRequest(): SignUrlRequest;
type SignUrlRequest = {
    expiry: number;
    urls: string[];
};
/** @returns {SignUrlResponse} */
declare function SignUrlResponse(): SignUrlResponse;
type SignUrlResponse = {
    urls: Urls[];
};
/** @returns {StartRequest} */
declare function StartRequest(): StartRequest;
type StartRequest = {
    content_type: string;
    file_name: string;
    params?: any;
    size: number;
    tags?: string[];
};
/** @returns {StartResponse} */
declare function StartResponse(): StartResponse;
type StartResponse = {
    cdn: CDN;
    content_type: string;
    file_name: string;
    file_path: string;
    method?: string;
    namespace: string;
    operation: string;
    size: number;
    tags?: string[];
    upload: Upload;
};
/** @returns {Status} */
declare function Status(): Status;
type Status = {
    failed: number;
    result?: string;
    succeeded: number;
    total: number;
};
/** @returns {Upload} */
declare function Upload(): Upload;
type Upload = {
    expiry: number;
    url: string;
};
/** @returns {Urls} */
declare function Urls(): Urls;
type Urls = {
    expiry: number;
    signed_url: string;
    url: string;
};
