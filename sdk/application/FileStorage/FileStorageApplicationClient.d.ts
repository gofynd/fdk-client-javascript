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
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FileUploadComplete>} - Success response
     * @name completeUpload
     * @summary: Finalizes upload process.
     * @description: Complete the file upload and store the file details such as name, size, content type, and namespace to maintain integrity within the system's database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/filestorage/completeUpload/).
     */
    completeUpload({ namespace, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<FileUploadComplete>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<SignUrlResult>} - Success response
     * @name signUrls
     * @summary: Signs file URLs.
     * @description: Generates secure, signed URLs that is valid for certain expiry time for accessing stored files. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/filestorage/signUrls/).
     */
    signUrls({ body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<SignUrlResult>;
    /**
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../ApplicationAPIClient").Options} - Options
     * @returns {Promise<FileUpload>} - Success response
     * @name startUpload
     * @summary: Initiates file upload
     * @description: Starts the process of uploading a file to storage location, and returns a signed url in response. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/filestorage/startUpload/).
     */
    startUpload({ namespace, body, requestHeaders }?: object, { responseHeaders }?: import("../ApplicationAPIClient").Options): Promise<FileUpload>;
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
