export = FileStoragePlatformApplicationValidator;
/**
 * @typedef AppCompleteUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.FileUpload} body
 */
/**
 * @typedef AppCopyFilesParam
 * @property {boolean} [sync] - Sync
 * @property {FileStoragePlatformModel.CopyFiles} body
 */
/**
 * @typedef AppStartUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.FileUploadStart} body
 */
/**
 * @typedef AppbrowseParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {number} [page] - Page no
 * @property {number} [limit] - Limit
 * @property {string} [search] - Search
 */
/**
 * @typedef BrowsefilesParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {number} [page] - Page no
 * @property {number} [limit] - Limit
 * @property {string} [search] - Search
 * @property {FileStoragePlatformModel.ExtensionSlug} body
 */
/**
 * @typedef DeletePdfGeneratorConfigParam
 * @property {string} id
 */
/**
 * @typedef FetchPdfDefaultTemplateByIdParam
 * @property {string} id
 */
/**
 * @typedef FetchPdfTypeByIdParam
 * @property {string} id
 */
/**
 * @typedef GeneratePaymentReceiptParam
 * @property {FileStoragePlatformModel.PaymentReceiptRequestBody} body
 */
/**
 * @typedef GetConfigHtmlTemplateByIdParam
 * @property {string} id
 */
/**
 * @typedef GetDefaultPdfDataParam
 * @property {number} pdfTypeId
 * @property {string} [countryCode]
 */
/**
 * @typedef GetDefaultPdfTemplateParam
 * @property {number} pdfTypeId
 * @property {string} format
 * @property {string} [countryCode]
 */
/**
 * @typedef GetHtmlTemplateConfigParam
 * @property {number} pdfTypeId
 * @property {string} format
 * @property {string} [countryCode]
 */
/**
 * @typedef GetPdfPayloadByIdParam
 * @property {string} id
 */
/**
 * @typedef GetPdfTypesParam
 * @property {string} [countryCode]
 * @property {boolean} storeOs
 */
/**
 * @typedef SaveHtmlTemplateParam
 * @property {FileStoragePlatformModel.PdfConfig} body
 */
/**
 * @typedef UpdateHtmlTemplateParam
 * @property {string} id
 * @property {FileStoragePlatformModel.PdfConfig} body
 */
declare class FileStoragePlatformApplicationValidator {
    /** @returns {AppCompleteUploadParam} */
    static appCompleteUpload(): AppCompleteUploadParam;
    /** @returns {AppCopyFilesParam} */
    static appCopyFiles(): AppCopyFilesParam;
    /** @returns {AppStartUploadParam} */
    static appStartUpload(): AppStartUploadParam;
    /** @returns {AppbrowseParam} */
    static appbrowse(): AppbrowseParam;
    /** @returns {BrowsefilesParam} */
    static browsefiles(): BrowsefilesParam;
    /** @returns {DeletePdfGeneratorConfigParam} */
    static deletePdfGeneratorConfig(): DeletePdfGeneratorConfigParam;
    /** @returns {FetchPdfDefaultTemplateByIdParam} */
    static fetchPdfDefaultTemplateById(): FetchPdfDefaultTemplateByIdParam;
    /** @returns {FetchPdfTypeByIdParam} */
    static fetchPdfTypeById(): FetchPdfTypeByIdParam;
    /** @returns {GeneratePaymentReceiptParam} */
    static generatePaymentReceipt(): GeneratePaymentReceiptParam;
    /** @returns {GetConfigHtmlTemplateByIdParam} */
    static getConfigHtmlTemplateById(): GetConfigHtmlTemplateByIdParam;
    /** @returns {GetDefaultPdfDataParam} */
    static getDefaultPdfData(): GetDefaultPdfDataParam;
    /** @returns {GetDefaultPdfTemplateParam} */
    static getDefaultPdfTemplate(): GetDefaultPdfTemplateParam;
    /** @returns {GetHtmlTemplateConfigParam} */
    static getHtmlTemplateConfig(): GetHtmlTemplateConfigParam;
    /** @returns {GetPdfPayloadByIdParam} */
    static getPdfPayloadById(): GetPdfPayloadByIdParam;
    /** @returns {GetPdfTypesParam} */
    static getPdfTypes(): GetPdfTypesParam;
    /** @returns {SaveHtmlTemplateParam} */
    static saveHtmlTemplate(): SaveHtmlTemplateParam;
    /** @returns {UpdateHtmlTemplateParam} */
    static updateHtmlTemplate(): UpdateHtmlTemplateParam;
}
declare namespace FileStoragePlatformApplicationValidator {
    export { AppCompleteUploadParam, AppCopyFilesParam, AppStartUploadParam, AppbrowseParam, BrowsefilesParam, DeletePdfGeneratorConfigParam, FetchPdfDefaultTemplateByIdParam, FetchPdfTypeByIdParam, GeneratePaymentReceiptParam, GetConfigHtmlTemplateByIdParam, GetDefaultPdfDataParam, GetDefaultPdfTemplateParam, GetHtmlTemplateConfigParam, GetPdfPayloadByIdParam, GetPdfTypesParam, SaveHtmlTemplateParam, UpdateHtmlTemplateParam };
}
type AppCompleteUploadParam = {
    /**
     * - Segregation of different types of
     * files(products, orders, logistics etc), Required for validating the data of
     * the file being uploaded, decides where exactly the file will be stored
     * inside the storage bucket.
     */
    namespace: string;
    body: FileStoragePlatformModel.FileUpload;
};
type AppCopyFilesParam = {
    /**
     * - Sync
     */
    sync?: boolean;
    body: FileStoragePlatformModel.CopyFiles;
};
type AppStartUploadParam = {
    /**
     * - Segregation of different types of
     * files(products, orders, logistics etc), Required for validating the data of
     * the file being uploaded, decides where exactly the file will be stored
     * inside the storage bucket.
     */
    namespace: string;
    body: FileStoragePlatformModel.FileUploadStart;
};
type AppbrowseParam = {
    /**
     * - Segregation of different types of
     * files(products, orders, logistics etc), Required for validating the data of
     * the file being uploaded, decides where exactly the file will be stored
     * inside the storage bucket.
     */
    namespace: string;
    /**
     * - Page no
     */
    page?: number;
    /**
     * - Limit
     */
    limit?: number;
    /**
     * - Search
     */
    search?: string;
};
type BrowsefilesParam = {
    /**
     * - Segregation of different types of
     * files(products, orders, logistics etc), Required for validating the data of
     * the file being uploaded, decides where exactly the file will be stored
     * inside the storage bucket.
     */
    namespace: string;
    /**
     * - Page no
     */
    page?: number;
    /**
     * - Limit
     */
    limit?: number;
    /**
     * - Search
     */
    search?: string;
    body: FileStoragePlatformModel.ExtensionSlug;
};
type DeletePdfGeneratorConfigParam = {
    id: string;
};
type FetchPdfDefaultTemplateByIdParam = {
    id: string;
};
type FetchPdfTypeByIdParam = {
    id: string;
};
type GeneratePaymentReceiptParam = {
    body: FileStoragePlatformModel.PaymentReceiptRequestBody;
};
type GetConfigHtmlTemplateByIdParam = {
    id: string;
};
type GetDefaultPdfDataParam = {
    pdfTypeId: number;
    countryCode?: string;
};
type GetDefaultPdfTemplateParam = {
    pdfTypeId: number;
    format: string;
    countryCode?: string;
};
type GetHtmlTemplateConfigParam = {
    pdfTypeId: number;
    format: string;
    countryCode?: string;
};
type GetPdfPayloadByIdParam = {
    id: string;
};
type GetPdfTypesParam = {
    countryCode?: string;
    storeOs: boolean;
};
type SaveHtmlTemplateParam = {
    body: FileStoragePlatformModel.PdfConfig;
};
type UpdateHtmlTemplateParam = {
    id: string;
    body: FileStoragePlatformModel.PdfConfig;
};
import FileStoragePlatformModel = require("./FileStoragePlatformModel");
