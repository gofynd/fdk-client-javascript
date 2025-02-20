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
     * @param {FileStoragePlatformApplicationValidator.AppCopyFilesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name appCopyFiles
     * @summary: Application copy files.
     * @description: Copy files from an application to another location. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appCopyFiles/).
     */
    appCopyFiles({ body, sync, requestHeaders }?: FileStoragePlatformApplicationValidator.AppCopyFilesParam, { responseHeaders }?: object): Promise<any>;
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
     * @param {FileStoragePlatformApplicationValidator.DeletePdfGeneratorConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name deletePdfGeneratorConfig
     * @summary: Delete a PDF generator configuration
     * @description: Deletes a specific PDF generator configuration based on the provided id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/deletePdfGeneratorConfig/).
     */
    deletePdfGeneratorConfig({ id, requestHeaders }?: FileStoragePlatformApplicationValidator.DeletePdfGeneratorConfigParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePlatformApplicationValidator.FetchPdfDefaultTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfDefaultTemplateById>} -
     *   Success response
     * @name fetchPdfDefaultTemplateById
     * @summary: get default html template for invoice or label
     * @description: get default html template for invoice such as Invoice, Label, Deliver challan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/fetchPdfDefaultTemplateById/).
     */
    fetchPdfDefaultTemplateById({ id, requestHeaders }?: FileStoragePlatformApplicationValidator.FetchPdfDefaultTemplateByIdParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfDefaultTemplateById>;
    /**
     * @param {FileStoragePlatformApplicationValidator.FetchPdfTypeByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfTypeByIdDetails>} - Success response
     * @name fetchPdfTypeById
     * @summary: Get the pdf types of by id
     * @description: Get the pdf types of PDF formats for filter - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/fetchPdfTypeById/).
     */
    fetchPdfTypeById({ id, requestHeaders }?: FileStoragePlatformApplicationValidator.FetchPdfTypeByIdParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfTypeByIdDetails>;
    /**
     * @param {FileStoragePlatformApplicationValidator.GeneratePaymentReceiptParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name generatePaymentReceipt
     * @summary: Generate payment receipt.
     * @description: Generate Payment Receipt for Jiomart Digital - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/generatePaymentReceipt/).
     */
    generatePaymentReceipt({ body, requestHeaders }?: FileStoragePlatformApplicationValidator.GeneratePaymentReceiptParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePlatformApplicationValidator.GetConfigHtmlTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getConfigHtmlTemplateById
     * @summary: Update html template for invoice or label
     * @description: Update html template for invoice such as Invoice, Label, Deliver challan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getConfigHtmlTemplateById/).
     */
    getConfigHtmlTemplateById({ id, requestHeaders }?: FileStoragePlatformApplicationValidator.GetConfigHtmlTemplateByIdParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePlatformApplicationValidator.GetDefaultPdfDataParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfDataItemsDetails>} - Success response
     * @name getDefaultPdfData
     * @summary: Get default PDF data.
     * @description: Retrieve default data for PDF generation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getDefaultPdfData/).
     */
    getDefaultPdfData({ pdfTypeId, countryCode, requestHeaders }?: FileStoragePlatformApplicationValidator.GetDefaultPdfDataParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfDataItemsDetails>;
    /**
     * @param {FileStoragePlatformApplicationValidator.GetDefaultPdfTemplateParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfDefaultTemplateSuccess>} -
     *   Success response
     * @name getDefaultPdfTemplate
     * @summary: Get default PDF template.
     * @description: Retrieve the default PDF template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getDefaultPdfTemplate/).
     */
    getDefaultPdfTemplate({ pdfTypeId, format, countryCode, requestHeaders }?: FileStoragePlatformApplicationValidator.GetDefaultPdfTemplateParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfDefaultTemplateSuccess>;
    /**
     * @param {FileStoragePlatformApplicationValidator.GetHtmlTemplateConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfConfigSuccess>} - Success response
     * @name getHtmlTemplateConfig
     * @summary: Get html template for sales channel
     * @description: Get default html template for invoice or label - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getHtmlTemplateConfig/).
     */
    getHtmlTemplateConfig({ pdfTypeId, format, countryCode, requestHeaders }?: FileStoragePlatformApplicationValidator.GetHtmlTemplateConfigParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfConfigSuccess>;
    /**
     * @param {FileStoragePlatformApplicationValidator.GetPdfPayloadByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.MapperDetails>} - Success response
     * @name getPdfPayloadById
     * @summary: Get default PDF data.
     * @description: Retrieve default data for PDF generation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getPdfPayloadById/).
     */
    getPdfPayloadById({ id, requestHeaders }?: FileStoragePlatformApplicationValidator.GetPdfPayloadByIdParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.MapperDetails>;
    /**
     * @param {FileStoragePlatformApplicationValidator.GetPdfTypesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.InvoiceTypes>} - Success response
     * @name getPdfTypes
     * @summary: Get all the supported invoice pdf types
     * @description: Get all the supported invoice pdf types such as Invoice, Label, Delivery challan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getPdfTypes/).
     */
    getPdfTypes({ storeOs, countryCode, requestHeaders }?: FileStoragePlatformApplicationValidator.GetPdfTypesParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.InvoiceTypes>;
    /**
     * @param {FileStoragePlatformApplicationValidator.SaveHtmlTemplateParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfConfigSaveSuccess>} -
     *   Success response
     * @name saveHtmlTemplate
     * @summary: Save HTML template.
     * @description: Store an HTML template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/saveHtmlTemplate/).
     */
    saveHtmlTemplate({ body, requestHeaders }?: FileStoragePlatformApplicationValidator.SaveHtmlTemplateParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfConfigSaveSuccess>;
    /**
     * @param {FileStoragePlatformApplicationValidator.UpdateHtmlTemplateParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfConfigSaveSuccess>} -
     *   Success response
     * @name updateHtmlTemplate
     * @summary: Update HTML Template
     * @description: Update the HTML Template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/updateHtmlTemplate/).
     */
    updateHtmlTemplate({ id, body, requestHeaders }?: FileStoragePlatformApplicationValidator.UpdateHtmlTemplateParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfConfigSaveSuccess>;
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
