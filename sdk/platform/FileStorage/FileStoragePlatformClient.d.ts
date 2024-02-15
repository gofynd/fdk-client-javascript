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
     * @summary: Browse files.
     * @description: View and navigate through available files. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/browse/).
     */
    browse({ namespace, page, limit, requestHeaders }?: FileStoragePlatformValidator.BrowseParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePlatformValidator.CompleteUploadParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.CompleteResponse>} - Success response
     * @name completeUpload
     * @summary: Complete file upload.
     * @description: Starts the process of uploading a file to storage location, and returns a storage link in response. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/completeUpload/).
     */
    completeUpload({ namespace, body, requestHeaders }?: FileStoragePlatformValidator.CompleteUploadParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.CompleteResponse>;
    /**
     * @param {FileStoragePlatformValidator.CopyFilesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name copyFiles
     * @summary: Copy files.
     * @description: Duplicate files to another location. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/copyFiles/).
     */
    copyFiles({ body, sync, requestHeaders }?: FileStoragePlatformValidator.CopyFilesParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePlatformValidator.GetSignUrlsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.SignUrlResponse>} - Success response
     * @name getSignUrls
     * @summary: Get signed URLs.
     * @description: Retrieve signed URLs for file access. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getSignUrls/).
     */
    getSignUrls({ body, requestHeaders }?: FileStoragePlatformValidator.GetSignUrlsParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.SignUrlResponse>;
    /**
     * @param {FileStoragePlatformValidator.ProxyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name proxy
     * @summary: Proxy file access.
     * @description: Access files through a proxy. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/proxy/).
     */
    proxy({ url, requestHeaders }?: FileStoragePlatformValidator.ProxyParam, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {FileStoragePlatformValidator.StartUploadParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.StartResponse>} - Success response
     * @name startUpload
     * @summary: Start file upload.
     * @description: Inititates the process of uploading a file to storage location, and returns a storage link in response. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/startUpload/).
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
import FileStoragePlatformValidator = require("./FileStoragePlatformValidator");
import FileStoragePlatformModel = require("./FileStoragePlatformModel");
