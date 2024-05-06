export = FileStorage;
declare class FileStorage {
    constructor(config: any);
    config: any;
    /**
     * @param {FileStoragePlatformValidator.BrowseParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name browse
     * @summary: Browse files
     * @description: View and navigate through available files. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/browse/).
     */
    browse({ namespace, page, limit, requestHeaders }?: FileStoragePlatformValidator.BrowseParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePlatformValidator.CompleteUploadParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.CompleteResponse>} - Success response
     * @name completeUpload
     * @summary: Complete file upload
     * @description: Complete the file upload and store the file details such as name, size, content type, and namespace to maintain integrity within the system's database at platform level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/completeUpload/).
     */
    completeUpload({ namespace, body, requestHeaders }?: FileStoragePlatformValidator.CompleteUploadParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.CompleteResponse>;
    /**
     * @param {FileStoragePlatformValidator.CopyFilesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name copyFiles
     * @summary: Copy files
     * @description: Handle multiple file uploads, updating progress and providing detailed status reports. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/copyFiles/).
     */
    copyFiles({ body, sync, requestHeaders }?: FileStoragePlatformValidator.CopyFilesParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePlatformValidator.GetSignUrlsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.SignUrlResponse>} - Success response
     * @name getSignUrls
     * @summary: Get signed URLs
     * @description: Generates secure, signed URLs that is valid for certain expiry time for accessing stored resources inside private bucket. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getSignUrls/).
     */
    getSignUrls({ body, requestHeaders }?: FileStoragePlatformValidator.GetSignUrlsParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.SignUrlResponse>;
    /**
     * @param {FileStoragePlatformValidator.ProxyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.ProxyResponse>} - Success response
     * @name proxy
     * @summary: Access files through a proxy
     * @description: It enables the communication between two entities by directing client requests to the correct server and sending responses back to the client. Please refer group description for more details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/proxy/).
     */
    proxy({ url, requestHeaders }?: FileStoragePlatformValidator.ProxyParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.ProxyResponse>;
    /**
     * @param {FileStoragePlatformValidator.StartUploadParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.StartResponse>} - Success response
     * @name startUpload
     * @summary: Start file upload
     * @description: Inititates the process of uploading a file to storage location, and returns a storage link in response at platform level. Please refer group description for more details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/startUpload/).
     */
    startUpload({ namespace, body, requestHeaders }?: FileStoragePlatformValidator.StartUploadParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.StartResponse>;
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
import FileStoragePlatformValidator = require("sdk/output/javascript/code/sdk/platform/FileStorage/FileStoragePlatformValidator");
import FileStoragePlatformModel = require("sdk/output/javascript/code/sdk/platform/FileStorage/FileStoragePlatformModel");
