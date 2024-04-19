export = FileStorage;
declare class FileStorage {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        completeUpload: string;
        signUrls: string;
        startUpload: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {FileStorageApplicationValidator.CompleteUploadParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FileStorageApplicationModel.CompleteResponse>} - Success response
     * @name completeUpload
     * @summary: Completes the upload process. After successfully uploading a file, call this API to finish the upload process.
     * @description: Use this API to perform the third step of uploading (i.e. **Complete**) an arbitrarily sized buffer or blob.
     *
     * The three major steps are:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `startUpload`.
     * It returns a storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.
     *
     * ### Complete
     * After successfully upload, call the `completeUpload` API to finish the upload process.
     * This operation will return the URL of the uploaded file.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/filestorage/completeUpload/).
     */
    completeUpload({ namespace, body, requestHeaders }?: FileStorageApplicationValidator.CompleteUploadParam, { responseHeaders }?: object): Promise<FileStorageApplicationModel.CompleteResponse>;
    /**
     * @param {FileStorageApplicationValidator.SignUrlsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FileStorageApplicationModel.SignUrlResponse>} - Success response
     * @name signUrls
     * @summary: Explain here
     * @description: Describe here - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/filestorage/signUrls/).
     */
    signUrls({ body, requestHeaders }?: FileStorageApplicationValidator.SignUrlsParam, { responseHeaders }?: object): Promise<FileStorageApplicationModel.SignUrlResponse>;
    /**
     * @param {FileStorageApplicationValidator.StartUploadParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FileStorageApplicationModel.StartResponse>} - Success response
     * @name startUpload
     * @summary: Initiates an upload and returns a storage link that is valid for 30 minutes. You can use the storage link to make subsequent upload request with file buffer or blob.
     * @description: Use this API to perform the first step of uploading (i.e. **Start**) an arbitrarily sized buffer or blob.
     *
     * The three major steps are:
     * Start
     * Upload
     * Complete
     *
     * ### Start
     * Initiates the assets upload using `startUpload`.
     * It returns a storage link in response.
     *
     * ### Upload
     * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
     * Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.
     *
     * ### Complete
     * After successfully upload, call the `completeUpload` API to finish the upload process.
     * This operation will return the URL of the uploaded file.
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/filestorage/startUpload/).
     */
    startUpload({ namespace, body, requestHeaders }?: FileStorageApplicationValidator.StartUploadParam, { responseHeaders }?: object): Promise<FileStorageApplicationModel.StartResponse>;
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
import FileStorageApplicationValidator = require("./FileStorageApplicationValidator");
import FileStorageApplicationModel = require("./FileStorageApplicationModel");
