export = FileStoragePlatformApplicationValidator;
/**
 * @typedef AppCompleteUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.StartResponse} body
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
 * @property {FileStoragePlatformModel.StartRequest} body
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
 * @typedef GeneratePaymentReceiptParam
 * @property {FileStoragePlatformModel.PaymentReceiptRequestBody} body
 */
/**
 * @typedef GetDefaultHtmlTemplateParam
 * @property {number} pdfTypeId
 * @property {string} format
 * @property {string} [countryCode]
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
 * @typedef GetPdfTypesParam
 * @property {string} [countryCode]
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
    /** @returns {GeneratePaymentReceiptParam} */
    static generatePaymentReceipt(): GeneratePaymentReceiptParam;
    /** @returns {GetDefaultHtmlTemplateParam} */
    static getDefaultHtmlTemplate(): GetDefaultHtmlTemplateParam;
    /** @returns {GetDefaultPdfDataParam} */
    static getDefaultPdfData(): GetDefaultPdfDataParam;
    /** @returns {GetDefaultPdfTemplateParam} */
    static getDefaultPdfTemplate(): GetDefaultPdfTemplateParam;
    /** @returns {GetPdfTypesParam} */
    static getPdfTypes(): GetPdfTypesParam;
    /** @returns {SaveHtmlTemplateParam} */
    static saveHtmlTemplate(): SaveHtmlTemplateParam;
    /** @returns {UpdateHtmlTemplateParam} */
    static updateHtmlTemplate(): UpdateHtmlTemplateParam;
}
declare namespace FileStoragePlatformApplicationValidator {
    export { AppCompleteUploadParam, AppCopyFilesParam, AppStartUploadParam, AppbrowseParam, BrowsefilesParam, GeneratePaymentReceiptParam, GetDefaultHtmlTemplateParam, GetDefaultPdfDataParam, GetDefaultPdfTemplateParam, GetPdfTypesParam, SaveHtmlTemplateParam, UpdateHtmlTemplateParam };
}
type AppCompleteUploadParam = {
    /**
     * - Segregation of different types of
     * files(products, orders, logistics etc), Required for validating the data of
     * the file being uploaded, decides where exactly the file will be stored
     * inside the storage bucket.
     */
    namespace: string;
    body: FileStoragePlatformModel.StartResponse;
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
    body: FileStoragePlatformModel.StartRequest;
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
type GeneratePaymentReceiptParam = {
    body: FileStoragePlatformModel.PaymentReceiptRequestBody;
};
type GetDefaultHtmlTemplateParam = {
    pdfTypeId: number;
    format: string;
    countryCode?: string;
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
type GetPdfTypesParam = {
    countryCode?: string;
};
type SaveHtmlTemplateParam = {
    body: FileStoragePlatformModel.PdfConfig;
};
type UpdateHtmlTemplateParam = {
    id: string;
    body: FileStoragePlatformModel.PdfConfig;
};
import FileStoragePlatformModel = require("sdk/output/javascript/code/sdk/platform/FileStorage/FileStoragePlatformModel");
