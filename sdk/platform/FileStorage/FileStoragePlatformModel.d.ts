export = FileStoragePlatformModel;
/**
 * @typedef BrowseResponse
 * @property {DbRecord[]} items
 * @property {Page} page
 */
/**
 * @typedef BulkRequest
 * @property {ReqConfiguration} [configuration]
 * @property {Destination} destination
 * @property {string[]} urls
 */
/**
 * @typedef BulkUploadResponse
 * @property {CopyFileTask} task
 * @property {string} tracking_url
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
 * @typedef CopyFileTask
 * @property {number} attempts_made
 * @property {BulkRequest} data
 * @property {number} delay
 * @property {number} finished_on
 * @property {string} id
 * @property {string} name
 * @property {Opts} opts
 * @property {number} processed_on
 * @property {number} progress
 * @property {string[]} [stacktrace]
 * @property {number} timestamp
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
 * @typedef Destination
 * @property {string} [basepath]
 * @property {string} namespace
 * @property {string} rewrite
 */
/**
 * @typedef FailedResponse
 * @property {string} message
 */
/**
 * @typedef Opts
 * @property {number} [attempts]
 * @property {number} [delay]
 * @property {number} [timestamp]
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
 * @typedef ReqConfiguration
 * @property {number} [concurrency]
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
    export { BrowseResponse, BulkRequest, BulkUploadResponse, CDN, CompleteResponse, CopyFileTask, DbRecord, Destination, FailedResponse, Opts, Page, ReqConfiguration, SignUrlRequest, SignUrlResponse, StartRequest, StartResponse, Upload, Urls };
}
/** @returns {BrowseResponse} */
declare function BrowseResponse(): BrowseResponse;
type BrowseResponse = {
    items: DbRecord[];
    page: Page;
};
/** @returns {BulkRequest} */
declare function BulkRequest(): BulkRequest;
type BulkRequest = {
    configuration?: ReqConfiguration;
    destination: Destination;
    urls: string[];
};
/** @returns {BulkUploadResponse} */
declare function BulkUploadResponse(): BulkUploadResponse;
type BulkUploadResponse = {
    task: CopyFileTask;
    tracking_url: string;
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
/** @returns {CopyFileTask} */
declare function CopyFileTask(): CopyFileTask;
type CopyFileTask = {
    attempts_made: number;
    data: BulkRequest;
    delay: number;
    finished_on: number;
    id: string;
    name: string;
    opts: Opts;
    processed_on: number;
    progress: number;
    stacktrace?: string[];
    timestamp: number;
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
/** @returns {Destination} */
declare function Destination(): Destination;
type Destination = {
    basepath?: string;
    namespace: string;
    rewrite: string;
};
/** @returns {FailedResponse} */
declare function FailedResponse(): FailedResponse;
type FailedResponse = {
    message: string;
};
/** @returns {Opts} */
declare function Opts(): Opts;
type Opts = {
    attempts?: number;
    delay?: number;
    timestamp?: number;
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
/** @returns {ReqConfiguration} */
declare function ReqConfiguration(): ReqConfiguration;
type ReqConfiguration = {
    concurrency?: number;
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
