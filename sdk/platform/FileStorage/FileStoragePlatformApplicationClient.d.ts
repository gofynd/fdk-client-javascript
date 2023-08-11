export = FileStorage;
declare class FileStorage {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {FileStoragePlatformApplicationValidator.AppCompleteUploadParam} arg
     *   - Arg object
     *
     * @returns {Promise<FileStoragePlatformModel.CompleteResponse>} - Success response
     * @name appCompleteUpload
     * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `appStartUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `appCompleteUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appCompleteUpload/).
     */
    appCompleteUpload({ namespace, body, }?: FileStoragePlatformApplicationValidator.AppCompleteUploadParam): Promise<FileStoragePlatformModel.CompleteResponse>;
    /**
     * @param {FileStoragePlatformApplicationValidator.AppCopyFilesParam} arg - Arg object
     * @returns {Promise<FileStoragePlatformModel.BulkUploadResponse>} - Success response
     * @name appCopyFiles
     * @summary: Copy Files
     * @description: Copy Files - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appCopyFiles/).
     */
    appCopyFiles({ body, sync }?: FileStoragePlatformApplicationValidator.AppCopyFilesParam): Promise<FileStoragePlatformModel.BulkUploadResponse>;
    /**
     * @param {FileStoragePlatformApplicationValidator.AppStartUploadParam} arg
     *   - Arg object
     *
     * @returns {Promise<FileStoragePlatformModel.StartResponse>} - Success response
     * @name appStartUpload
     * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
     * @description: Uploads an arbitrarily sized buffer or blob.
     *
     * It has three Major Steps:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `appStartUpload`.
     * It returns the storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
     *
     * ### Complete
     * After successfully upload, call `appCompleteUpload` api to complete the upload process.
     * This operation will return the url for the uploaded file.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appStartUpload/).
     */
    appStartUpload({ namespace, body, }?: FileStoragePlatformApplicationValidator.AppStartUploadParam): Promise<FileStoragePlatformModel.StartResponse>;
    /**
     * @param {FileStoragePlatformApplicationValidator.AppbrowseParam} arg - Arg object
     * @returns {Promise<FileStoragePlatformModel.BrowseResponse>} - Success response
     * @name appbrowse
     * @summary: Browse Files
     * @description: Browse Files - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appbrowse/).
     */
    appbrowse({ namespace, page, limit, }?: FileStoragePlatformApplicationValidator.AppbrowseParam): Promise<FileStoragePlatformModel.BrowseResponse>;
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
import FileStoragePlatformApplicationValidator = require("./FileStoragePlatformApplicationValidator");
import FileStoragePlatformModel = require("./FileStoragePlatformModel");
