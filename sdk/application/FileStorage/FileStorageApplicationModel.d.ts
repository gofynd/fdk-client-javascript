export = FileStorageApplicationModel;
/**
 * @typedef CDN
 * @property {string} url - The CDN URL for accessing the file.
 * @property {string} absolute_url - The absolute URL of the file.
 * @property {string} relative_url - The relative URL of the file.
 */
/**
 * @typedef Upload
 * @property {number} expiry - The expiration time for the signed URL.
 * @property {string} url - The signed URL for uploading the file.
 */
/**
 * @typedef StartResponse
 * @property {string} file_name - The name of the file that was uploaded.
 * @property {string} file_path - The path to the file in the storage location.
 * @property {string} content_type - The content type of the file.
 * @property {string} [method] - The HTTP method to be used for uploading the file.
 * @property {string} namespace - The namespace associated with the file.
 * @property {string} operation - The operation to be performed on the storage service.
 * @property {number} size - The size of the file in bytes.
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string[]} [tags] - Tags associated with the file.
 */
/**
 * @typedef Params
 * @property {string} [subpath] - Specifies a particular directory or location
 *   within the storage structure where the file should be placed or is located.
 */
/**
 * @typedef StartRequest
 * @property {string} file_name - The name of the file to be uploaded.
 * @property {string} content_type - The name of the file to be uploaded.
 * @property {number} size - The size of the file in bytes.
 * @property {string[]} [tags] - Tags associated with the file.
 * @property {Params} [params]
 */
/**
 * @typedef CreatedBy
 * @property {string} [username] - The username of the user who created the file.
 */
/**
 * @typedef CompleteResponse
 * @property {string} _id - The unique identifier of the uploaded file.
 * @property {string} file_name - The name of the file that was uploaded.
 * @property {string} file_path - The path to the file in the storage location.
 * @property {string} content_type - The content type of the file.
 * @property {string} namespace - The namespace associated with the file.
 * @property {string} operation - The operation performed on the storage service.
 * @property {number} size - The size of the file in bytes.
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success - The success status of the upload operation.
 * @property {string[]} [tags] - Tags associated with the file.
 * @property {string} created_on - The timestamp when the file was created.
 * @property {string} modified_on - The timestamp when the file was last modified.
 * @property {CreatedBy} [created_by]
 */
/**
 * @typedef Urls
 * @property {string} url - This is the original asset URL provided in the
 *   request. This is the URL for which a signed URL has been generated.
 * @property {string} signed_url - Generated signed URL.
 * @property {number} expiry - The expiration time for the signed URL.
 */
/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls - Signed URL object.
 */
/**
 * @typedef SignUrlRequest
 * @property {number} expiry - The expiration time for the signed URL.
 * @property {string[]} urls - List of asset URLs to be signed. .
 */
declare class FileStorageApplicationModel {
}
declare namespace FileStorageApplicationModel {
    export { CDN, Upload, StartResponse, Params, StartRequest, CreatedBy, CompleteResponse, Urls, SignUrlResponse, SignUrlRequest };
}
/** @returns {CDN} */
declare function CDN(): CDN;
type CDN = {
    /**
     * - The CDN URL for accessing the file.
     */
    url: string;
    /**
     * - The absolute URL of the file.
     */
    absolute_url: string;
    /**
     * - The relative URL of the file.
     */
    relative_url: string;
};
/** @returns {Upload} */
declare function Upload(): Upload;
type Upload = {
    /**
     * - The expiration time for the signed URL.
     */
    expiry: number;
    /**
     * - The signed URL for uploading the file.
     */
    url: string;
};
/** @returns {StartResponse} */
declare function StartResponse(): StartResponse;
type StartResponse = {
    /**
     * - The name of the file that was uploaded.
     */
    file_name: string;
    /**
     * - The path to the file in the storage location.
     */
    file_path: string;
    /**
     * - The content type of the file.
     */
    content_type: string;
    /**
     * - The HTTP method to be used for uploading the file.
     */
    method?: string;
    /**
     * - The namespace associated with the file.
     */
    namespace: string;
    /**
     * - The operation to be performed on the storage service.
     */
    operation: string;
    /**
     * - The size of the file in bytes.
     */
    size: number;
    upload: Upload;
    cdn: CDN;
    /**
     * - Tags associated with the file.
     */
    tags?: string[];
};
/** @returns {Params} */
declare function Params(): Params;
type Params = {
    /**
     * - Specifies a particular directory or location
     * within the storage structure where the file should be placed or is located.
     */
    subpath?: string;
};
/** @returns {StartRequest} */
declare function StartRequest(): StartRequest;
type StartRequest = {
    /**
     * - The name of the file to be uploaded.
     */
    file_name: string;
    /**
     * - The name of the file to be uploaded.
     */
    content_type: string;
    /**
     * - The size of the file in bytes.
     */
    size: number;
    /**
     * - Tags associated with the file.
     */
    tags?: string[];
    params?: Params;
};
/** @returns {CreatedBy} */
declare function CreatedBy(): CreatedBy;
type CreatedBy = {
    /**
     * - The username of the user who created the file.
     */
    username?: string;
};
/** @returns {CompleteResponse} */
declare function CompleteResponse(): CompleteResponse;
type CompleteResponse = {
    /**
     * - The unique identifier of the uploaded file.
     */
    _id: string;
    /**
     * - The name of the file that was uploaded.
     */
    file_name: string;
    /**
     * - The path to the file in the storage location.
     */
    file_path: string;
    /**
     * - The content type of the file.
     */
    content_type: string;
    /**
     * - The namespace associated with the file.
     */
    namespace: string;
    /**
     * - The operation performed on the storage service.
     */
    operation: string;
    /**
     * - The size of the file in bytes.
     */
    size: number;
    upload: Upload;
    cdn: CDN;
    /**
     * - The success status of the upload operation.
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
/** @returns {Urls} */
declare function Urls(): Urls;
type Urls = {
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
     * - The expiration time for the signed URL.
     */
    expiry: number;
};
/** @returns {SignUrlResponse} */
declare function SignUrlResponse(): SignUrlResponse;
type SignUrlResponse = {
    /**
     * - Signed URL object.
     */
    urls: Urls[];
};
/** @returns {SignUrlRequest} */
declare function SignUrlRequest(): SignUrlRequest;
type SignUrlRequest = {
    /**
     * - The expiration time for the signed URL.
     */
    expiry: number;
    /**
     * - List of asset URLs to be signed. .
     */
    urls: string[];
};
