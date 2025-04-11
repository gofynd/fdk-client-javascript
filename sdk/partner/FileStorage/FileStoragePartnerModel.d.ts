export = FileStoragePartnerModel;
/**
 * @typedef SizeConstraints
 * @property {number} [max] - Maximum allowed size (in bytes) for files in the namespace
 */
/**
 * @typedef SaveProxy
 * @property {number} [id] - Unique identifier assigned to the saved proxy session.
 * @property {string} [token] - Authentication token generated for the created
 *   proxy session.
 */
/**
 * @typedef ProxyFileData
 * @property {string} [email] - User email address required for proxy authentication.
 * @property {string} [password] - Password associated with the email for proxy
 *   authentication.
 */
/**
 * @typedef ProxyFile
 * @property {number} [id] - Unique identifier for the proxy request, used in
 *   failure scenarios.
 * @property {string} [customer] - Name or identifier of the customer associated
 *   with the proxy file.
 * @property {number} [quantity] - Number of proxy instances or sessions requested.
 * @property {number} [price] - Cost of the proxy service, provided in
 *   applicable currency units.
 * @property {ProxyFileData} [data]
 * @property {string} [url] - Endpoint URL for proxy-related API requests, such
 *   as user registration or fetching data.
 */
/**
 * @typedef FetchProxyDetails
 * @property {Object} [data] - The actual response data
 * @property {Object} [support] - Support-related information
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
 * @property {NamespaceDetails[]} [items] - An Array of all the existing Namespace
 */
/**
 * @typedef CDN
 * @property {string} url - The CDN URL of the file.
 * @property {string} absolute_url - The absolute URL of the file.
 * @property {string} relative_url - The relative path of the file within the CDN.
 */
/**
 * @typedef Upload
 * @property {number} expiry - The expiration time of the uploaded file.
 * @property {string} url - The URL of the uploaded file.
 */
/**
 * @typedef FileUpload
 * @property {string} file_name - The name of the uploaded file.
 * @property {string} file_path - The storage path of the uploaded file.
 * @property {string} content_type - The MIME type of the uploaded file.
 * @property {string} [method] - The method used for the upload.
 * @property {string} namespace - The namespace where the file is stored.
 * @property {string} operation - The operation type performed on the file.
 * @property {number} size - The size of the uploaded file in bytes.
 * @property {Upload} upload
 * @property {string[]} [tags] - Tags associated with the uploaded file.
 */
/**
 * @typedef FileUploadStart
 * @property {string} file_name - The name of the file to be uploaded.
 * @property {string} content_type - The MIME type of the file.
 * @property {number} size - The file size in bytes.
 * @property {string[]} [tags] - Tags associated with the file.
 * @property {Object} [params] - Additional parameters for file upload.
 */
/**
 * @typedef CreatedBy
 * @property {string} [user_id] - The unique identifier of the user.
 * @property {string} [username] - The username of the creator.
 */
/**
 * @typedef FileUploadComplete
 * @property {string} _id - The unique identifier of the uploaded file.
 * @property {string} file_name - The name of the file.
 * @property {string} file_path - The storage path of the file.
 * @property {string} content_type - The MIME type of the file.
 * @property {string} namespace - The namespace where the file is stored.
 * @property {string} operation - The type of operation performed on the file.
 * @property {number} size - The size of the file in bytes.
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success - Indicates if the upload was successful.
 * @property {string[]} [tags] - Tags associated with the file.
 * @property {string} created_on - The timestamp when the file was created.
 * @property {string} modified_on - The timestamp when the file was last modified.
 * @property {CreatedBy} [created_by]
 */
/**
 * @typedef FailedBrowseFilesResult
 * @property {string} message - Message representing the description due to
 *   which Browse File egte failed
 */
declare class FileStoragePartnerModel {
}
declare namespace FileStoragePartnerModel {
    export { SizeConstraints, SaveProxy, ProxyFileData, ProxyFile, FetchProxyDetails, NamespaceDetails, AllNamespaceDetails, CDN, Upload, FileUpload, FileUploadStart, CreatedBy, FileUploadComplete, FailedBrowseFilesResult };
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
    /**
     * - Unique identifier assigned to the saved proxy session.
     */
    id?: number;
    /**
     * - Authentication token generated for the created
     * proxy session.
     */
    token?: string;
};
/** @returns {ProxyFileData} */
declare function ProxyFileData(): ProxyFileData;
type ProxyFileData = {
    /**
     * - User email address required for proxy authentication.
     */
    email?: string;
    /**
     * - Password associated with the email for proxy
     * authentication.
     */
    password?: string;
};
/** @returns {ProxyFile} */
declare function ProxyFile(): ProxyFile;
type ProxyFile = {
    /**
     * - Unique identifier for the proxy request, used in
     * failure scenarios.
     */
    id?: number;
    /**
     * - Name or identifier of the customer associated
     * with the proxy file.
     */
    customer?: string;
    /**
     * - Number of proxy instances or sessions requested.
     */
    quantity?: number;
    /**
     * - Cost of the proxy service, provided in
     * applicable currency units.
     */
    price?: number;
    data?: ProxyFileData;
    /**
     * - Endpoint URL for proxy-related API requests, such
     * as user registration or fetching data.
     */
    url?: string;
};
/** @returns {FetchProxyDetails} */
declare function FetchProxyDetails(): FetchProxyDetails;
type FetchProxyDetails = {
    /**
     * - The actual response data
     */
    data?: any;
    /**
     * - Support-related information
     */
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
    /**
     * - An Array of all the existing Namespace
     */
    items?: NamespaceDetails[];
};
/** @returns {CDN} */
declare function CDN(): CDN;
type CDN = {
    /**
     * - The CDN URL of the file.
     */
    url: string;
    /**
     * - The absolute URL of the file.
     */
    absolute_url: string;
    /**
     * - The relative path of the file within the CDN.
     */
    relative_url: string;
};
/** @returns {Upload} */
declare function Upload(): Upload;
type Upload = {
    /**
     * - The expiration time of the uploaded file.
     */
    expiry: number;
    /**
     * - The URL of the uploaded file.
     */
    url: string;
};
/** @returns {FileUpload} */
declare function FileUpload(): FileUpload;
type FileUpload = {
    /**
     * - The name of the uploaded file.
     */
    file_name: string;
    /**
     * - The storage path of the uploaded file.
     */
    file_path: string;
    /**
     * - The MIME type of the uploaded file.
     */
    content_type: string;
    /**
     * - The method used for the upload.
     */
    method?: string;
    /**
     * - The namespace where the file is stored.
     */
    namespace: string;
    /**
     * - The operation type performed on the file.
     */
    operation: string;
    /**
     * - The size of the uploaded file in bytes.
     */
    size: number;
    upload: Upload;
    /**
     * - Tags associated with the uploaded file.
     */
    tags?: string[];
};
/** @returns {FileUploadStart} */
declare function FileUploadStart(): FileUploadStart;
type FileUploadStart = {
    /**
     * - The name of the file to be uploaded.
     */
    file_name: string;
    /**
     * - The MIME type of the file.
     */
    content_type: string;
    /**
     * - The file size in bytes.
     */
    size: number;
    /**
     * - Tags associated with the file.
     */
    tags?: string[];
    /**
     * - Additional parameters for file upload.
     */
    params?: any;
};
/** @returns {CreatedBy} */
declare function CreatedBy(): CreatedBy;
type CreatedBy = {
    /**
     * - The unique identifier of the user.
     */
    user_id?: string;
    /**
     * - The username of the creator.
     */
    username?: string;
};
/** @returns {FileUploadComplete} */
declare function FileUploadComplete(): FileUploadComplete;
type FileUploadComplete = {
    /**
     * - The unique identifier of the uploaded file.
     */
    _id: string;
    /**
     * - The name of the file.
     */
    file_name: string;
    /**
     * - The storage path of the file.
     */
    file_path: string;
    /**
     * - The MIME type of the file.
     */
    content_type: string;
    /**
     * - The namespace where the file is stored.
     */
    namespace: string;
    /**
     * - The type of operation performed on the file.
     */
    operation: string;
    /**
     * - The size of the file in bytes.
     */
    size: number;
    upload: Upload;
    cdn: CDN;
    /**
     * - Indicates if the upload was successful.
     */
    success: boolean;
    /**
     * - Tags associated with the file.
     */
    tags?: string[];
    /**
     * - The timestamp when the file was created.
     */
    created_on: string;
    /**
     * - The timestamp when the file was last modified.
     */
    modified_on: string;
    created_by?: CreatedBy;
};
/** @returns {FailedBrowseFilesResult} */
declare function FailedBrowseFilesResult(): FailedBrowseFilesResult;
type FailedBrowseFilesResult = {
    /**
     * - Message representing the description due to
     * which Browse File egte failed
     */
    message: string;
};
