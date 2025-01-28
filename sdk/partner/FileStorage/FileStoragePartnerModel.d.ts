export = FileStoragePartnerModel;
/**
 * @typedef SizeConstraints
 * @property {number} [max] - Maximum allowed size (in bytes) for files in the namespace
 */
/**
 * @typedef FetchProxyResponse
 * @property {string} [id]
 * @property {string} [created_at]
 */
/**
 * @typedef FetchProxyRequest
 * @property {number} [id]
 * @property {string} [customer]
 * @property {number} [quantity]
 * @property {number} [price]
 * @property {string} [url]
 */
/**
 * @typedef ProxyResponse
 * @property {Object} [data]
 * @property {Object} [support]
 */
/**
 * @typedef NamespaceDetails
 * @property {string} [namespace] - The namespace identifier
 * @property {string[]} [valid_content_types] - List of valid content types for
 *   the namespace
 * @property {SizeConstraints} [size]
 * @property {string} [file_acl] - Access control level for files in the namespace
 */
/**
 * @typedef AllNamespaceDetails
 * @property {NamespaceDetails[]} [items]
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
 * @typedef StartResponse
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
 * @typedef StartRequest
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
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} namespace
 * @property {string} operation
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
 * @typedef FailedResponse
 * @property {string} message
 */
declare class FileStoragePartnerModel {
}
declare namespace FileStoragePartnerModel {
    export { SizeConstraints, FetchProxyResponse, FetchProxyRequest, ProxyResponse, NamespaceDetails, AllNamespaceDetails, CDN, Upload, StartResponse, StartRequest, CreatedBy, CompleteResponse, FailedResponse };
}
/** @returns {SizeConstraints} */
declare function SizeConstraints(): SizeConstraints;
type SizeConstraints = {
    /**
     * - Maximum allowed size (in bytes) for files in the namespace
     */
    max?: number;
};
/** @returns {FetchProxyResponse} */
declare function FetchProxyResponse(): FetchProxyResponse;
type FetchProxyResponse = {
    id?: string;
    created_at?: string;
};
/** @returns {FetchProxyRequest} */
declare function FetchProxyRequest(): FetchProxyRequest;
type FetchProxyRequest = {
    id?: number;
    customer?: string;
    quantity?: number;
    price?: number;
    url?: string;
};
/** @returns {ProxyResponse} */
declare function ProxyResponse(): ProxyResponse;
type ProxyResponse = {
    data?: any;
    support?: any;
};
/** @returns {NamespaceDetails} */
declare function NamespaceDetails(): NamespaceDetails;
type NamespaceDetails = {
    /**
     * - The namespace identifier
     */
    namespace?: string;
    /**
     * - List of valid content types for
     * the namespace
     */
    valid_content_types?: string[];
    size?: SizeConstraints;
    /**
     * - Access control level for files in the namespace
     */
    file_acl?: string;
};
/** @returns {AllNamespaceDetails} */
declare function AllNamespaceDetails(): AllNamespaceDetails;
type AllNamespaceDetails = {
    items?: NamespaceDetails[];
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
/** @returns {StartResponse} */
declare function StartResponse(): StartResponse;
type StartResponse = {
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
/** @returns {StartRequest} */
declare function StartRequest(): StartRequest;
type StartRequest = {
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
/** @returns {CompleteResponse} */
declare function CompleteResponse(): CompleteResponse;
type CompleteResponse = {
    _id: string;
    file_name: string;
    file_path: string;
    content_type: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: boolean;
    tags?: string[];
    created_on: string;
    modified_on: string;
    created_by?: CreatedBy;
};
/** @returns {FailedResponse} */
declare function FailedResponse(): FailedResponse;
type FailedResponse = {
    message: string;
};
