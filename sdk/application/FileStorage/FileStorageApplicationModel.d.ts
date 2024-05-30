export = FileStorageApplicationModel;
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
 * @property {CDN} cdn
 * @property {string[]} [tags]
 */
/**
 * @typedef Params
 * @property {string} [subpath] - The subpath for the file.
 */
/**
 * @typedef StartRequest
 * @property {string} file_name
 * @property {string} content_type
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Params} [params]
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
 * @typedef Urls
 * @property {string} url
 * @property {string} signed_url
 * @property {number} expiry
 */
/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */
/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */
declare class FileStorageApplicationModel {
}
declare namespace FileStorageApplicationModel {
    export { CDN, Upload, StartResponse, Params, StartRequest, CreatedBy, CompleteResponse, Urls, SignUrlResponse, SignUrlRequest };
}
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
    cdn: CDN;
    tags?: string[];
};
/** @returns {Params} */
declare function Params(): Params;
type Params = {
    /**
     * - The subpath for the file.
     */
    subpath?: string;
};
/** @returns {StartRequest} */
declare function StartRequest(): StartRequest;
type StartRequest = {
    file_name: string;
    content_type: string;
    size: number;
    tags?: string[];
    params?: Params;
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
/** @returns {Urls} */
declare function Urls(): Urls;
type Urls = {
    url: string;
    signed_url: string;
    expiry: number;
};
/** @returns {SignUrlResponse} */
declare function SignUrlResponse(): SignUrlResponse;
type SignUrlResponse = {
    urls: Urls[];
};
/** @returns {SignUrlRequest} */
declare function SignUrlRequest(): SignUrlRequest;
type SignUrlRequest = {
    expiry: number;
    urls: string[];
};
