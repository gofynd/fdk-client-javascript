export = FileStorage;
declare class FileStorage {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {FileStoragePlatformApplicationValidator.AppCompleteUploadParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.FileUploadComplete>} - Success response
     * @name appCompleteUpload
     * @summary: Application complete upload.
     * @description: Finish uploading a file from an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appCompleteUpload/).
     */
    appCompleteUpload({ namespace, body, requestHeaders }?: FileStoragePlatformApplicationValidator.AppCompleteUploadParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.FileUploadComplete>;
    /**
     * @param {FileStoragePlatformApplicationValidator.AppStartUploadParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.FileUpload>} - Success response
     * @name appStartUpload
     * @summary: Application start upload.
     * @description: Start uploading a file from an application and returns a storage link in response. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appStartUpload/).
     */
    appStartUpload({ namespace, body, requestHeaders }?: FileStoragePlatformApplicationValidator.AppStartUploadParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.FileUpload>;
    /**
     * @param {FileStoragePlatformApplicationValidator.AppbrowseParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name appbrowse
     * @summary: Application browse files.
     * @description: Browse files within an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appbrowse/).
     */
    appbrowse({ namespace, page, limit, search, requestHeaders }?: FileStoragePlatformApplicationValidator.AppbrowseParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePlatformApplicationValidator.BrowsefilesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name browsefiles
     * @summary: Browse Files
     * @description: Browse Files - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/browsefiles/).
     */
    browsefiles({ namespace, body, page, limit, search, requestHeaders }?: FileStoragePlatformApplicationValidator.BrowsefilesParam, { responseHeaders }?: object): Promise<any>;
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
