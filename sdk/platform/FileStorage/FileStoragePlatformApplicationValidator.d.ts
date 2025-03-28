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
 * @property {string} id - Unique identifier used for operations.
 */
/**
 * @typedef FetchPdfDefaultTemplateByIdParam
 * @property {string} id - Unique identifier for the default PDF template.
 */
/**
 * @typedef FetchPdfTypeByIdParam
 * @property {string} id - Unique identifier for the PDF type.
 */
/**
 * @typedef GeneratePaymentReceiptParam
 * @property {FileStoragePlatformModel.PaymentReceiptRequestBody} body
 */
/**
 * @typedef GetConfigHtmlTemplateByIdParam
 * @property {string} id - Unique identifier for fetching PDF configuration details.
 */
/**
 * @typedef GetDefaultPdfDataParam
 * @property {number} pdfTypeId - Unique identifier for the invoice type.
 * @property {string} [countryCode] - Country code used to filter data displayed
 *   on the UI.
 */
/**
 * @typedef GetDefaultPdfTemplateParam
 * @property {number} pdfTypeId - Unique identifier for the invoice type.
 * @property {string} format - Specifies the invoice document format (e.g., A4,
 *   A6, POS, A3).
 * @property {string} [countryCode] - Country code used to filter data displayed
 *   on the UI.
 */
/**
 * @typedef GetHtmlTemplateConfigParam
 * @property {number} pdfTypeId - Unique identifier for the invoice type.
 * @property {string} format - Specifies the invoice document format (e.g., A4,
 *   A6, POS, A3).
 * @property {string} [countryCode] - Country code used to filter data displayed
 *   on the UI.
 */
/**
 * @typedef GetPdfPayloadByIdParam
 * @property {string} id - Unique identifier associated with the PDF payload,
 *   used for retrieving or processing PDF-related data.
 */
/**
 * @typedef GetPdfTypesParam
 * @property {string} [countryCode] - Country code used to filter data displayed
 *   on the UI.
 * @property {boolean} storeOs - Identifies whether the store OS determines the
 *   PDF generator flow displayed on the UI.
 */
/**
 * @typedef SaveHtmlTemplateParam
 * @property {FileStoragePlatformModel.PdfConfig} body
 */
/**
 * @typedef UpdateHtmlTemplateParam
 * @property {string} id - Unique identifier used for operations.
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
    /**
     * - Unique identifier used for operations.
     */
    id: string;
};
type FetchPdfDefaultTemplateByIdParam = {
    /**
     * - Unique identifier for the default PDF template.
     */
    id: string;
};
type FetchPdfTypeByIdParam = {
    /**
     * - Unique identifier for the PDF type.
     */
    id: string;
};
type GeneratePaymentReceiptParam = {
    body: FileStoragePlatformModel.PaymentReceiptRequestBody;
};
type GetConfigHtmlTemplateByIdParam = {
    /**
     * - Unique identifier for fetching PDF configuration details.
     */
    id: string;
};
type GetDefaultPdfDataParam = {
    /**
     * - Unique identifier for the invoice type.
     */
    pdfTypeId: number;
    /**
     * - Country code used to filter data displayed
     * on the UI.
     */
    countryCode?: string;
};
type GetDefaultPdfTemplateParam = {
    /**
     * - Unique identifier for the invoice type.
     */
    pdfTypeId: number;
    /**
     * - Specifies the invoice document format (e.g., A4,
     * A6, POS, A3).
     */
    format: string;
    /**
     * - Country code used to filter data displayed
     * on the UI.
     */
    countryCode?: string;
};
type GetHtmlTemplateConfigParam = {
    /**
     * - Unique identifier for the invoice type.
     */
    pdfTypeId: number;
    /**
     * - Specifies the invoice document format (e.g., A4,
     * A6, POS, A3).
     */
    format: string;
    /**
     * - Country code used to filter data displayed
     * on the UI.
     */
    countryCode?: string;
};
type GetPdfPayloadByIdParam = {
    /**
     * - Unique identifier associated with the PDF payload,
     * used for retrieving or processing PDF-related data.
     */
    id: string;
};
type GetPdfTypesParam = {
    /**
     * - Country code used to filter data displayed
     * on the UI.
     */
    countryCode?: string;
    /**
     * - Identifies whether the store OS determines the
     * PDF generator flow displayed on the UI.
     */
    storeOs: boolean;
};
type SaveHtmlTemplateParam = {
    body: FileStoragePlatformModel.PdfConfig;
};
type UpdateHtmlTemplateParam = {
    /**
     * - Unique identifier used for operations.
     */
    id: string;
    body: FileStoragePlatformModel.PdfConfig;
};
import FileStoragePlatformModel = require("./FileStoragePlatformModel");
