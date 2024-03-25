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
     * @summary: Finalizes upload process.
     * @description: Complete the process of uploading the file, and will return the URL of the uploaded file - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/filestorage/completeUpload/).
     */
    completeUpload({ namespace, body, requestHeaders }?: FileStorageApplicationValidator.CompleteUploadParam, { responseHeaders }?: object): Promise<FileStorageApplicationModel.CompleteResponse>;
    /**
     * @param {FileStorageApplicationValidator.SignUrlsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FileStorageApplicationModel.SignUrlResponse>} - Success response
     * @name signUrls
     * @summary: Signs file URLs.
     * @description: Generates secure, signed URLs that is valid for certain expiry time for accessing stored files. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/filestorage/signUrls/).
     */
    signUrls({ body, requestHeaders }?: FileStorageApplicationValidator.SignUrlsParam, { responseHeaders }?: object): Promise<FileStorageApplicationModel.SignUrlResponse>;
    /**
     * @param {FileStorageApplicationValidator.StartUploadParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FileStorageApplicationModel.StartResponse>} - Success response
     * @name startUpload
     * @summary: Initiates file upload
     * @description: Starts the process of uploading a file to storage location, and returns a storage link in response. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/filestorage/startUpload/).
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
import FileStorageApplicationValidator = require("sdk/output/javascript/code/sdk/application/FileStorage/FileStorageApplicationValidator");
import FileStorageApplicationModel = require("sdk/output/javascript/code/sdk/application/FileStorage/FileStorageApplicationModel");
