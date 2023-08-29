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
 */
/**
 * @typedef GetDefaultHtmlTemplateParam
 * @property {number} pdfTypeId
 * @property {string} format
 */
/**
 * @typedef GetDefaultPdfDataParam
 * @property {number} pdfTypeId
 */
/**
 * @typedef GetDefaultPdfTemplateParam
 * @property {number} pdfTypeId
 * @property {string} format
 */
/** @typedef GetPdfTypesParam */
/**
 * @typedef PreviewTemplateParam
 * @property {FileStoragePlatformModel.pdfRender} body
 */
/**
 * @typedef SaveHtmlTemplateParam
 * @property {FileStoragePlatformModel.pdfConfig} body
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
    /** @returns {GetDefaultHtmlTemplateParam} */
    static getDefaultHtmlTemplate(): GetDefaultHtmlTemplateParam;
    /** @returns {GetDefaultPdfDataParam} */
    static getDefaultPdfData(): GetDefaultPdfDataParam;
    /** @returns {GetDefaultPdfTemplateParam} */
    static getDefaultPdfTemplate(): GetDefaultPdfTemplateParam;
    /** @returns {GetPdfTypesParam} */
    static getPdfTypes(): any;
    /** @returns {PreviewTemplateParam} */
    static previewTemplate(): PreviewTemplateParam;
    /** @returns {SaveHtmlTemplateParam} */
    static saveHtmlTemplate(): SaveHtmlTemplateParam;
}
declare namespace FileStoragePlatformApplicationValidator {
    export { AppCompleteUploadParam, AppCopyFilesParam, AppStartUploadParam, AppbrowseParam, GetDefaultHtmlTemplateParam, GetDefaultPdfDataParam, GetDefaultPdfTemplateParam, GetPdfTypesParam, PreviewTemplateParam, SaveHtmlTemplateParam };
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
};
type GetDefaultHtmlTemplateParam = {
    pdfTypeId: number;
    format: string;
};
type GetDefaultPdfDataParam = {
    pdfTypeId: number;
};
type GetDefaultPdfTemplateParam = {
    pdfTypeId: number;
    format: string;
};
type PreviewTemplateParam = {
    body: FileStoragePlatformModel.pdfRender;
};
type SaveHtmlTemplateParam = {
    body: FileStoragePlatformModel.pdfConfig;
};
type GetPdfTypesParam = any;
import FileStoragePlatformModel = require("./FileStoragePlatformModel");
