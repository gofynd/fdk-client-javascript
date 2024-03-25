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
     * @returns {Promise<FileStoragePlatformModel.CompleteResponse>} - Success response
     * @name appCompleteUpload
     * @summary: Application complete upload.
     * @description: Finish uploading a file from an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appCompleteUpload/).
     */
    appCompleteUpload({ namespace, body, requestHeaders }?: FileStoragePlatformApplicationValidator.AppCompleteUploadParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.CompleteResponse>;
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
     * @returns {Promise<FileStoragePlatformModel.StartResponse>} - Success response
     * @name appStartUpload
     * @summary: Application start upload.
     * @description: Start uploading a file from an application and returns a storage link in response. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appStartUpload/).
     */
    appStartUpload({ namespace, body, requestHeaders }?: FileStoragePlatformApplicationValidator.AppStartUploadParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.StartResponse>;
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
     * @param {FileStoragePlatformApplicationValidator.CreateTemplateParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfTemplateCreateSuccess>} -
     *   Success response
     * @name createTemplate
     * @summary: Create HTML default template
     * @description: Create and save a new default HTML template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/createTemplate/).
     */
    createTemplate({ body, requestHeaders }?: FileStoragePlatformApplicationValidator.CreateTemplateParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfTemplateCreateSuccess>;
    /**
     * @param {FileStoragePlatformApplicationValidator.DeletePdfConfigTemplateParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name deletePdfConfigTemplate
     * @summary: delete html template for invoice or label
     * @description: delete html template for invoice such as Invoice, Label, Deliver challan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/deletePdfConfigTemplate/).
     */
    deletePdfConfigTemplate({ id, requestHeaders }?: FileStoragePlatformApplicationValidator.DeletePdfConfigTemplateParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePlatformApplicationValidator.DeletePdfPayloadByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.DummyPayloadById>} - Success response
     * @name deletePdfPayloadById
     * @summary: Get default PDF data.
     * @description: Retrieve default data for PDF generation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/deletePdfPayloadById/).
     */
    deletePdfPayloadById({ id, requestHeaders }?: FileStoragePlatformApplicationValidator.DeletePdfPayloadByIdParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.DummyPayloadById>;
    /**
     * @param {FileStoragePlatformApplicationValidator.DeletePdfTemplateParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name deletePdfTemplate
     * @summary: delete html template for invoice or label
     * @description: delete html template for invoice such as Invoice, Label, Deliver challan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/deletePdfTemplate/).
     */
    deletePdfTemplate({ id, requestHeaders }?: FileStoragePlatformApplicationValidator.DeletePdfTemplateParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePlatformApplicationValidator.DeletePdfTypeParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name deletePdfType
     * @summary: Delete Pdf Type
     * @description: Delete Pdf Type for invoice such as Invoice, Label, Deliver challan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/deletePdfType/).
     */
    deletePdfType({ id, requestHeaders }?: FileStoragePlatformApplicationValidator.DeletePdfTypeParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {FileStoragePlatformApplicationValidator.FetchPdfDefaultTemplateByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfDefaultTemplateResponse>}
     *   - Success response
     *
     * @name fetchPdfDefaultTemplateById
     * @summary: get default html template for invoice or label
     * @description: get default html template for invoice such as Invoice, Label, Deliver challan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/fetchPdfDefaultTemplateById/).
     */
    fetchPdfDefaultTemplateById({ id, requestHeaders }?: FileStoragePlatformApplicationValidator.FetchPdfDefaultTemplateByIdParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfDefaultTemplateResponse>;
    /**
     * @param {FileStoragePlatformApplicationValidator.FetchPdfTypeByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfTypeIdResponse>} - Success response
     * @name fetchPdfTypeById
     * @summary: Get the pdf types of by id
     * @description: Get the pdf types of PDF formats for filter - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/fetchPdfTypeById/).
     */
    fetchPdfTypeById({ id, requestHeaders }?: FileStoragePlatformApplicationValidator.FetchPdfTypeByIdParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfTypeIdResponse>;
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
     * @param {FileStoragePlatformApplicationValidator.GetDefaultHtmlTemplateParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfConfigSuccess>} - Success response
     * @name getDefaultHtmlTemplate
     * @summary: Get html template for sales channel
     * @description: Get default html template for invoice or label - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getDefaultHtmlTemplate/).
     */
    getDefaultHtmlTemplate({ pdfTypeId, format, countryCode, requestHeaders }?: FileStoragePlatformApplicationValidator.GetDefaultHtmlTemplateParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfConfigSuccess>;
    /**
     * @param {FileStoragePlatformApplicationValidator.GetDefaultPdfDataParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.DummyTemplateDataItems>} -
     *   Success response
     * @name getDefaultPdfData
     * @summary: Get default PDF data.
     * @description: Retrieve default data for PDF generation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getDefaultPdfData/).
     */
    getDefaultPdfData({ pdfTypeId, countryCode, requestHeaders }?: FileStoragePlatformApplicationValidator.GetDefaultPdfDataParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.DummyTemplateDataItems>;
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
     * @param {FileStoragePlatformApplicationValidator.GetPdfPayloadByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.DummyPayloadById>} - Success response
     * @name getPdfPayloadById
     * @summary: Get default PDF data.
     * @description: Retrieve default data for PDF generation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getPdfPayloadById/).
     */
    getPdfPayloadById({ id, requestHeaders }?: FileStoragePlatformApplicationValidator.GetPdfPayloadByIdParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.DummyPayloadById>;
    /**
     * @param {FileStoragePlatformApplicationValidator.GetPdfTypesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.InvoiceTypesResponse>} -
     *   Success response
     * @name getPdfTypes
     * @summary: Get all the supported invoice pdf types
     * @description: Get all the supported invoice pdf types such as Invoice, Label, Delivery challan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getPdfTypes/).
     */
    getPdfTypes({ storeOs, countryCode, requestHeaders }?: FileStoragePlatformApplicationValidator.GetPdfTypesParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.InvoiceTypesResponse>;
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
     * @param {FileStoragePlatformApplicationValidator.SavePdfPayloadDataParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.DummyPayloadById>} - Success response
     * @name savePdfPayloadData
     * @summary: save Dummy pdf data for invoice or label
     * @description: Update Dummy pdf data for invoice or label - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/savePdfPayloadData/).
     */
    savePdfPayloadData({ body, requestHeaders }?: FileStoragePlatformApplicationValidator.SavePdfPayloadDataParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.DummyPayloadById>;
    /**
     * @param {FileStoragePlatformApplicationValidator.SavePdfTypesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfTypeIdResponse>} - Success response
     * @name savePdfTypes
     * @summary: Get all the supported invoice pdf types
     * @description: Get all the supported invoice pdf types such as Invoice, Label, Delivery challan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/savePdfTypes/).
     */
    savePdfTypes({ body, requestHeaders }?: FileStoragePlatformApplicationValidator.SavePdfTypesParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfTypeIdResponse>;
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
     * @param {FileStoragePlatformApplicationValidator.UpdatePdfPayloadDataByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.DummyPayloadById>} - Success response
     * @name updatePdfPayloadDataById
     * @summary: Update Dummy pdf data for invoice or label
     * @description: Update Dummy pdf data for invoice or label - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/updatePdfPayloadDataById/).
     */
    updatePdfPayloadDataById({ id, body, requestHeaders }?: FileStoragePlatformApplicationValidator.UpdatePdfPayloadDataByIdParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.DummyPayloadById>;
    /**
     * @param {FileStoragePlatformApplicationValidator.UpdatePdfTypeByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfTypeIdResponse>} - Success response
     * @name updatePdfTypeById
     * @summary: update the PDF type
     * @description: update the PDF type - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/updatePdfTypeById/).
     */
    updatePdfTypeById({ id, body, requestHeaders }?: FileStoragePlatformApplicationValidator.UpdatePdfTypeByIdParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfTypeIdResponse>;
    /**
     * @param {FileStoragePlatformApplicationValidator.UpdateTemplateParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<FileStoragePlatformModel.PdfConfigurationResponse>} -
     *   Success response
     * @name updateTemplate
     * @summary: Update HTML default template
     * @description: Update and save default HTML template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/updateTemplate/).
     */
    updateTemplate({ id, body, requestHeaders }?: FileStoragePlatformApplicationValidator.UpdateTemplateParam, { responseHeaders }?: object): Promise<FileStoragePlatformModel.PdfConfigurationResponse>;
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
import FileStoragePlatformApplicationValidator = require("sdk/output/javascript/code/sdk/platform/FileStorage/FileStoragePlatformApplicationValidator");
import FileStoragePlatformModel = require("sdk/output/javascript/code/sdk/platform/FileStorage/FileStoragePlatformModel");
