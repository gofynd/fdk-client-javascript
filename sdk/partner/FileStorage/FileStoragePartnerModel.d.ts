export = FileStoragePartnerModel;
/**
 * @typedef SizeConstraints
 * @property {number} [max] - Maximum allowed size (in bytes) for files in the namespace
 */
/**
 * @typedef SaveProxy
 * @property {boolean} [success]
 */
/**
 * @typedef ProxyFileData
 * @property {string} [name]
 */
/**
 * @typedef ProxyFile
 * @property {number} [id]
 * @property {string} [customer]
 * @property {number} [quantity]
 * @property {number} [price]
 * @property {ProxyFileData} [data]
 * @property {string} [url]
 */
/**
 * @typedef FetchProxyDetails
 * @property {boolean} [success]
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
 * @typedef FailedBrowseFilesResult
 * @property {string} message
 */
/**
 * @typedef SignedUrl
 * @property {string} url - This is the original asset URL provided in the
 *   request. This is the URL for which a signed URL has been generated.
 * @property {string} signed_url - Generated signed URL.
 * @property {number} expiry - The expiration time for the signed URL in seconds.
 */
/**
 * @typedef SignUrlResult
 * @property {SignedUrl[]} urls - Signed URL object.
 */
/**
 * @typedef SignUrl
 * @property {number} expiry - The expiration time for the signed URL.
 * @property {string[]} urls - List of asset URLs to be signed.
 */
declare class FileStoragePartnerModel {
}
declare namespace FileStoragePartnerModel {
    export { SizeConstraints, SaveProxy, ProxyFileData, ProxyFile, FetchProxyDetails, NamespaceDetails, AllNamespaceDetails, CDN, Upload, FileUpload, FileUploadStart, CreatedBy, FileUploadComplete, FailedBrowseFilesResult, SignedUrl, SignUrlResult, SignUrl };
}
/** @returns {SizeConstraints} */
declare function SizeConstraints(): SizeConstraints;
type SizeConstraints = {
    /**
     * - Maximum allowed size (in bytes) for files in the namespace
     */
    max?: number;
};
/** @returns {SaveProxy} */
declare function SaveProxy(): SaveProxy;
type SaveProxy = {
    success?: boolean;
};
/** @returns {ProxyFileData} */
declare function ProxyFileData(): ProxyFileData;
type ProxyFileData = {
    name?: string;
};
/** @returns {ProxyFile} */
declare function ProxyFile(): ProxyFile;
type ProxyFile = {
    id?: number;
    customer?: string;
    quantity?: number;
    price?: number;
    data?: ProxyFileData;
    url?: string;
};
/** @returns {FetchProxyDetails} */
declare function FetchProxyDetails(): FetchProxyDetails;
type FetchProxyDetails = {
    success?: boolean;
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
    size: number;
    upload: Upload;
    cdn: CDN;
    success: boolean;
    tags?: string[];
    created_on: string;
    modified_on: string;
    created_by?: CreatedBy;
};
/** @returns {FailedBrowseFilesResult} */
declare function FailedBrowseFilesResult(): FailedBrowseFilesResult;
type FailedBrowseFilesResult = {
    message: string;
};
/** @returns {SignedUrl} */
declare function SignedUrl(): SignedUrl;
type SignedUrl = {
    /**
     * - This is the original asset URL provided in the
     * request. This is the URL for which a signed URL has been generated.
     */
    url: string;
    /**
     * - Generated signed URL.
     */
    signed_url: string;
    /**
     * - The expiration time for the signed URL in seconds.
     */
    expiry: number;
};
/** @returns {SignUrlResult} */
declare function SignUrlResult(): SignUrlResult;
type SignUrlResult = {
    /**
     * - Signed URL object.
     */
    urls: SignedUrl[];
};
/** @returns {SignUrl} */
declare function SignUrl(): SignUrl;
type SignUrl = {
    /**
     * - The expiration time for the signed URL.
     */
    expiry: number;
    /**
     * - List of asset URLs to be signed.
     */
    urls: string[];
};
