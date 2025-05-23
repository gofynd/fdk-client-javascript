export = FileStorage;
declare class FileStorage {
    constructor(config: any);
    config: any;
    /**
     * @param {FileStoragePartnerValidator.CompleteUploadParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.FileUploadComplete>} - Success response
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
     *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/filestorage/completeUpload/).
     */
    completeUpload({ namespace, body, requestHeaders }?: FileStoragePartnerValidator.CompleteUploadParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.FileUploadComplete>;
    /**
     * @param {FileStoragePartnerValidator.StartUploadParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.FileUpload>} - Success response
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
     *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/filestorage/startUpload/).
     */
    startUpload({ namespace, body, requestHeaders }?: FileStoragePartnerValidator.StartUploadParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.FileUpload>;
    /**
     * @param {FileStoragePartnerValidator.BrowseFilesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name browseFiles
     * @summary: Browse Files
     * @description: Browse Files - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/filestorage/browseFiles/).
     */
    browseFiles({ namespace, page, limit, requestHeaders }?: FileStoragePartnerValidator.BrowseFilesParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePartnerValidator.FetchProxyParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.FetchProxyDetails>} - Success response
     * @name fetchProxy
     * @summary: Proxy
     * @description: Proxy - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/filestorage/fetchProxy/).
     */
    fetchProxy({ url, requestHeaders }?: FileStoragePartnerValidator.FetchProxyParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.FetchProxyDetails>;
    /**
     * @param {FileStoragePartnerValidator.SaveProxyDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.SaveProxy>} - Success response
     * @name saveProxyDetails
     * @summary: Proxy
     * @description: Proxy - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/filestorage/saveProxyDetails/).
     */
    saveProxyDetails({ body, requestHeaders }?: FileStoragePartnerValidator.SaveProxyDetailsParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.SaveProxy>;
    /**
     * @param {FileStoragePartnerValidator.SignUrlsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.SignUrlResult>} - Success response
     * @name signUrls
     * @summary: Get signed URLs.
     * @description: Generates secure, signed URLs that is valid for certain expiry time for accessing stored files. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/filestorage/signUrls/).
     */
    signUrls({ body, requestHeaders }?: FileStoragePartnerValidator.SignUrlsParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.SignUrlResult>;
}
import FileStoragePartnerModel = require("./FileStoragePartnerModel");
