export = FileStorage;
declare class FileStorage {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Segregation of different types of
     *   files(products, orders, logistics etc), Required for validating the
     *   data of the file being uploaded, decides where exactly the file will be
     *   stored inside the storage bucket.
     * @param {number} [arg.page] - Page no
     * @param {number} [arg.limit] - Limit
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BrowseResponse>} - Success response
     * @summary: Browse Files
     * @description: Browse Files
     */
    browse({ namespace, page, limit }?: {
        namespace: string;
        page?: number;
        limit?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<BrowseResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Segregation of different types of
     *   files(products, orders, logistics etc), Required for validating the
     *   data of the file being uploaded, decides where exactly the file will be
     *   stored inside the storage bucket.
     * @param {StartResponse} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompleteResponse>} - Success response
     * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `startUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `completeUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    completeUpload({ namespace, body }?: {
        namespace: string;
        body: StartResponse;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CompleteResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {boolean} [arg.sync] -
     * @param {BulkRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BulkUploadResponse>} - Success response
     * @summary: Copy Files
     * @description: Copy Files
     */
    copyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<BulkUploadResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {SignUrlRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SignUrlResponse>} - Success response
     * @summary: Gives signed urls to access private files
     * @description: Describe here
     */
    getSignUrls({ body }?: {
        body: SignUrlRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SignUrlResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.url - Url
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @summary: Proxy
     * @description: Proxy
     */
    proxy({ url }?: {
        url: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<string>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.namespace - Segregation of different types of
     *   files(products, orders, logistics etc), Required for validating the
     *   data of the file being uploaded, decides where exactly the file will be
     *   stored inside the storage bucket.
     * @param {StartRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<StartResponse>} - Success response
     * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `startUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `completeUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     */
    startUpload({ namespace, body }?: {
        namespace: string;
        body: StartRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<StartResponse>;
    /**
     * @param data
     * @param {string} file_name
     * @param {string} content_type
     * @param {string} namespace
     * @param {number} size
     * @param {number} tags
     */
    upload({ data, file_name, content_type, namespace, size, tags, }?: {
        data: any;
        file_name: any;
        content_type: any;
        namespace: any;
        size: any;
        tags: any;
    }): Promise<any>;
}
