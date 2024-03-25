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
 * @typedef CreateTemplateParam
 * @property {FileStoragePlatformModel.CreateTemplate} body
 */
/**
 * @typedef DeletePdfConfigTemplateParam
 * @property {string} id
 */
/**
 * @typedef DeletePdfPayloadByIdParam
 * @property {string} id
 */
/**
 * @typedef DeletePdfTemplateParam
 * @property {string} id
 */
/**
 * @typedef DeletePdfTypeParam
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
 * @typedef SavePdfPayloadDataParam
 * @property {FileStoragePlatformModel.savePdfPayload} body
 */
/**
 * @typedef SavePdfTypesParam
 * @property {FileStoragePlatformModel.UpdatePdfTypeRequest} body
 */
/**
 * @typedef UpdateHtmlTemplateParam
 * @property {string} id
 * @property {FileStoragePlatformModel.PdfConfig} body
 */
/**
 * @typedef UpdatePdfPayloadDataByIdParam
 * @property {string} id
 * @property {FileStoragePlatformModel.DummyPayloadById} body
 */
/**
 * @typedef UpdatePdfTypeByIdParam
 * @property {string} id
 * @property {FileStoragePlatformModel.UpdatePdfTypeRequest} body
 */
/**
 * @typedef UpdateTemplateParam
 * @property {string} id
 * @property {FileStoragePlatformModel.UpdateTemplate} body
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
    /** @returns {CreateTemplateParam} */
    static createTemplate(): CreateTemplateParam;
    /** @returns {DeletePdfConfigTemplateParam} */
    static deletePdfConfigTemplate(): DeletePdfConfigTemplateParam;
    /** @returns {DeletePdfPayloadByIdParam} */
    static deletePdfPayloadById(): DeletePdfPayloadByIdParam;
    /** @returns {DeletePdfTemplateParam} */
    static deletePdfTemplate(): DeletePdfTemplateParam;
    /** @returns {DeletePdfTypeParam} */
    static deletePdfType(): DeletePdfTypeParam;
    /** @returns {FetchPdfDefaultTemplateByIdParam} */
    static fetchPdfDefaultTemplateById(): FetchPdfDefaultTemplateByIdParam;
    /** @returns {FetchPdfTypeByIdParam} */
    static fetchPdfTypeById(): FetchPdfTypeByIdParam;
    /** @returns {GeneratePaymentReceiptParam} */
    static generatePaymentReceipt(): GeneratePaymentReceiptParam;
    /** @returns {GetConfigHtmlTemplateByIdParam} */
    static getConfigHtmlTemplateById(): GetConfigHtmlTemplateByIdParam;
    /** @returns {GetDefaultHtmlTemplateParam} */
    static getDefaultHtmlTemplate(): GetDefaultHtmlTemplateParam;
    /** @returns {GetDefaultPdfDataParam} */
    static getDefaultPdfData(): GetDefaultPdfDataParam;
    /** @returns {GetDefaultPdfTemplateParam} */
    static getDefaultPdfTemplate(): GetDefaultPdfTemplateParam;
    /** @returns {GetPdfPayloadByIdParam} */
    static getPdfPayloadById(): GetPdfPayloadByIdParam;
    /** @returns {GetPdfTypesParam} */
    static getPdfTypes(): GetPdfTypesParam;
    /** @returns {SaveHtmlTemplateParam} */
    static saveHtmlTemplate(): SaveHtmlTemplateParam;
    /** @returns {SavePdfPayloadDataParam} */
    static savePdfPayloadData(): SavePdfPayloadDataParam;
    /** @returns {SavePdfTypesParam} */
    static savePdfTypes(): SavePdfTypesParam;
    /** @returns {UpdateHtmlTemplateParam} */
    static updateHtmlTemplate(): UpdateHtmlTemplateParam;
    /** @returns {UpdatePdfPayloadDataByIdParam} */
    static updatePdfPayloadDataById(): UpdatePdfPayloadDataByIdParam;
    /** @returns {UpdatePdfTypeByIdParam} */
    static updatePdfTypeById(): UpdatePdfTypeByIdParam;
    /** @returns {UpdateTemplateParam} */
    static updateTemplate(): UpdateTemplateParam;
}
declare namespace FileStoragePlatformApplicationValidator {
    export { AppCompleteUploadParam, AppCopyFilesParam, AppStartUploadParam, AppbrowseParam, BrowsefilesParam, CreateTemplateParam, DeletePdfConfigTemplateParam, DeletePdfPayloadByIdParam, DeletePdfTemplateParam, DeletePdfTypeParam, FetchPdfDefaultTemplateByIdParam, FetchPdfTypeByIdParam, GeneratePaymentReceiptParam, GetConfigHtmlTemplateByIdParam, GetDefaultHtmlTemplateParam, GetDefaultPdfDataParam, GetDefaultPdfTemplateParam, GetPdfPayloadByIdParam, GetPdfTypesParam, SaveHtmlTemplateParam, SavePdfPayloadDataParam, SavePdfTypesParam, UpdateHtmlTemplateParam, UpdatePdfPayloadDataByIdParam, UpdatePdfTypeByIdParam, UpdateTemplateParam };
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
type CreateTemplateParam = {
    body: FileStoragePlatformModel.CreateTemplate;
};
type DeletePdfConfigTemplateParam = {
    id: string;
};
type DeletePdfPayloadByIdParam = {
    id: string;
};
type DeletePdfTemplateParam = {
    id: string;
};
type DeletePdfTypeParam = {
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
type SavePdfPayloadDataParam = {
    body: FileStoragePlatformModel.savePdfPayload;
};
type SavePdfTypesParam = {
    body: FileStoragePlatformModel.UpdatePdfTypeRequest;
};
type UpdateHtmlTemplateParam = {
    id: string;
    body: FileStoragePlatformModel.PdfConfig;
};
type UpdatePdfPayloadDataByIdParam = {
    id: string;
    body: FileStoragePlatformModel.DummyPayloadById;
};
type UpdatePdfTypeByIdParam = {
    id: string;
    body: FileStoragePlatformModel.UpdatePdfTypeRequest;
};
type UpdateTemplateParam = {
    id: string;
    body: FileStoragePlatformModel.UpdateTemplate;
};
import FileStoragePlatformModel = require("sdk/output/javascript/code/sdk/platform/FileStorage/FileStoragePlatformModel");
