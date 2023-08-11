export = FileStorage;
declare class FileStorage {
    constructor(config: any);
    config: any;
    /**
     * @param {FileStoragePlatformValidator.BrowseParam} arg - Arg object
     * @returns {Promise<FileStoragePlatformModel.BrowseResponse>} - Success response
     * @name browse
     * @summary: Browse Files
     * @description: Browse Files - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/browse/).
     */
    browse({ namespace, page, limit, }?: FileStoragePlatformValidator.BrowseParam): Promise<FileStoragePlatformModel.BrowseResponse>;
    /**
     * @param {FileStoragePlatformValidator.CompleteUploadParam} arg - Arg object
     * @returns {Promise<FileStoragePlatformModel.CompleteResponse>} - Success response
     * @name completeUpload
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
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/completeUpload/).
     */
    completeUpload({ namespace, body, }?: FileStoragePlatformValidator.CompleteUploadParam): Promise<FileStoragePlatformModel.CompleteResponse>;
    /**
     * @param {FileStoragePlatformValidator.CopyFilesParam} arg - Arg object
     * @returns {Promise<FileStoragePlatformModel.BulkUploadResponse>} - Success response
     * @name copyFiles
     * @summary: Copy Files
     * @description: Copy Files - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/copyFiles/).
     */
    copyFiles({ body, sync }?: FileStoragePlatformValidator.CopyFilesParam): Promise<FileStoragePlatformModel.BulkUploadResponse>;
    /**
     * @param {FileStoragePlatformValidator.GetSignUrlsParam} arg - Arg object
     * @returns {Promise<FileStoragePlatformModel.SignUrlResponse>} - Success response
     * @name getSignUrls
     * @summary: Gives signed urls to access private files
     * @description: Describe here - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getSignUrls/).
     */
    getSignUrls({ body }?: FileStoragePlatformValidator.GetSignUrlsParam): Promise<FileStoragePlatformModel.SignUrlResponse>;
    /**
     * @param {FileStoragePlatformValidator.ProxyParam} arg - Arg object
     * @returns {Promise<string>} - Success response
     * @name proxy
     * @summary: Proxy
     * @description: Proxy - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/proxy/).
     */
    proxy({ url }?: FileStoragePlatformValidator.ProxyParam): Promise<string>;
    /**
     * @param {FileStoragePlatformValidator.StartUploadParam} arg - Arg object
     * @returns {Promise<FileStoragePlatformModel.StartResponse>} - Success response
     * @name startUpload
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
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/startUpload/).
     */
    startUpload({ namespace, body, }?: FileStoragePlatformValidator.StartUploadParam): Promise<FileStoragePlatformModel.StartResponse>;
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
import FileStoragePlatformValidator = require("./FileStoragePlatformValidator");
import FileStoragePlatformModel = require("./FileStoragePlatformModel");
