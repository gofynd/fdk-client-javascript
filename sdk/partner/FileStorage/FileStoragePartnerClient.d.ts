export = FileStorage;
declare class FileStorage {
    constructor(config: any);
    config: any;
    /**
     * @param {FileStoragePartnerValidator.GetAllNamespaceDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.AllNamespaceDetails>} - Success response
     * @name getAllNamespaceDetails
     * @summary: Get details of all namespaces
     * @description: Retrieve information about all available namespaces - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/getAllNamespaceDetails/).
     */
    getAllNamespaceDetails({ requestHeaders }?: FileStoragePartnerValidator.GetAllNamespaceDetailsParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.AllNamespaceDetails>;
    /**
     * @param {FileStoragePartnerValidator.GetAllOrganizationNamespaceDetailsParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.AllNamespaceDetails>} - Success response
     * @name getAllOrganizationNamespaceDetails
     * @summary: Get details of all namespaces
     * @description: Retrieve information about all available namespaces - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/getAllOrganizationNamespaceDetails/).
     */
    getAllOrganizationNamespaceDetails({ requestHeaders }?: FileStoragePartnerValidator.GetAllOrganizationNamespaceDetailsParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.AllNamespaceDetails>;
    /**
     * @param {FileStoragePartnerValidator.GetNamespaceDetailParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.NamespaceDetails>} - Success response
     * @name getNamespaceDetail
     * @summary: Get details of a namespace
     * @description: Retrieve information about a specific namespace - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/getNamespaceDetail/).
     */
    getNamespaceDetail({ namespace, requestHeaders }?: FileStoragePartnerValidator.GetNamespaceDetailParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.NamespaceDetails>;
    /**
     * @param {FileStoragePartnerValidator.GetOrganizationNamespaceDetailParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.NamespaceDetails>} - Success response
     * @name getOrganizationNamespaceDetail
     * @summary: Get details of a namespace
     * @description: Retrieve information about a specific namespace - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/getOrganizationNamespaceDetail/).
     */
    getOrganizationNamespaceDetail({ namespace, requestHeaders }?: FileStoragePartnerValidator.GetOrganizationNamespaceDetailParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.NamespaceDetails>;
    /**
     * @param {FileStoragePartnerValidator.CompleteUploadFileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.CompleteResponse>} - Success response
     * @name completeUploadFile
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
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/completeUploadFile/).
     */
    completeUploadFile({ namespace, body, requestHeaders }?: FileStoragePartnerValidator.CompleteUploadFileParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.CompleteResponse>;
    /**
     * @param {FileStoragePartnerValidator.CompleteUploadParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.CompleteResponse>} - Success response
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
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/completeUpload/).
     */
    completeUpload({ namespace, body, requestHeaders }?: FileStoragePartnerValidator.CompleteUploadParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.CompleteResponse>;
    /**
     * @param {FileStoragePartnerValidator.StartUploadFileParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.StartResponse>} - Success response
     * @name startUploadFile
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
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/startUploadFile/).
     */
    startUploadFile({ namespace, body, requestHeaders }?: FileStoragePartnerValidator.StartUploadFileParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.StartResponse>;
    /**
     * @param {FileStoragePartnerValidator.StartUploadParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.StartResponse>} - Success response
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
     *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/startUpload/).
     */
    startUpload({ namespace, body, requestHeaders }?: FileStoragePartnerValidator.StartUploadParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.StartResponse>;
    /**
     * @param {FileStoragePartnerValidator.BrowseParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name browse
     * @summary: Browse Files
     * @description: Browse Files - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/browse/).
     */
    browse({ namespace, applicationId, companyId, page, limit, requestHeaders }?: FileStoragePartnerValidator.BrowseParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePartnerValidator.BrowseFilesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name browseFiles
     * @summary: Browse Files
     * @description: Browse Files - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/browseFiles/).
     */
    browseFiles({ namespace, page, limit, requestHeaders }?: FileStoragePartnerValidator.BrowseFilesParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePartnerValidator.FetchProxyParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.ProxyResponse>} - Success response
     * @name fetchProxy
     * @summary: Proxy
     * @description: Proxy - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/fetchProxy/).
     */
    fetchProxy({ url, requestHeaders }?: FileStoragePartnerValidator.FetchProxyParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.ProxyResponse>;
    /**
     * @param {FileStoragePartnerValidator.SaveProxyDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.FetchProxyResponse>} - Success response
     * @name saveProxyDetails
     * @summary: Proxy
     * @description: Proxy - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/saveProxyDetails/).
     */
    saveProxyDetails({ body, requestHeaders }?: FileStoragePartnerValidator.SaveProxyDetailsParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.FetchProxyResponse>;
    /**
     * @param {FileStoragePartnerValidator.OrganizationLevelFetchProxyParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.ProxyResponse>} - Success response
     * @name organizationLevelFetchProxy
     * @summary: Proxy
     * @description: Proxy - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/organizationLevelFetchProxy/).
     */
    organizationLevelFetchProxy({ applicationId, companyId, url, requestHeaders }?: FileStoragePartnerValidator.OrganizationLevelFetchProxyParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.ProxyResponse>;
    /**
     * @param {FileStoragePartnerValidator.SaveOrganizationLevelProxyParam} arg
     *   - Arg object.
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.FetchProxyResponse>} - Success response
     * @name saveOrganizationLevelProxy
     * @summary: Proxy
     * @description: Proxy - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/saveOrganizationLevelProxy/).
     */
    saveOrganizationLevelProxy({ applicationId, companyId, body, requestHeaders }?: FileStoragePartnerValidator.SaveOrganizationLevelProxyParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.FetchProxyResponse>;
    /**
     * @param {FileStoragePartnerValidator.FetchProxyByOrganizationParam} arg -
     *   Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.ProxyResponse>} - Success response
     * @name fetchProxyByOrganization
     * @summary: Proxy
     * @description: Proxy - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/fetchProxyByOrganization/).
     */
    fetchProxyByOrganization({ url, requestHeaders }?: FileStoragePartnerValidator.FetchProxyByOrganizationParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.ProxyResponse>;
    /**
     * @param {FileStoragePartnerValidator.SaveProxyByOrganisationParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PartnerAPIClient").Options} - Options
     * @returns {Promise<FileStoragePartnerModel.FetchProxyResponse>} - Success response
     * @name saveProxyByOrganisation
     * @summary: Proxy
     * @description: Proxy - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/saveProxyByOrganisation/).
     */
    saveProxyByOrganisation({ body, requestHeaders }?: FileStoragePartnerValidator.SaveProxyByOrganisationParam, { responseHeaders }?: object): Promise<FileStoragePartnerModel.FetchProxyResponse>;
}
import FileStoragePartnerModel = require("sdk/output/javascript/code/sdk/partner/FileStorage/FileStoragePartnerModel");
