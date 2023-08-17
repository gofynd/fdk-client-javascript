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
 * @property {FileStoragePlatformModel.BulkRequest} body
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
 * @property {string} namespace - Bucket name
 * @property {number} [pageNo] - Page no
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
}
declare namespace FileStoragePlatformApplicationValidator {
    export { AppCompleteUploadParam, AppCopyFilesParam, AppStartUploadParam, AppbrowseParam };
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
    body: FileStoragePlatformModel.BulkRequest;
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
     * - Bucket name
     */
    namespace: string;
    /**
     * - Page no
     */
    pageNo?: number;
};
import FileStoragePlatformModel = require("./FileStoragePlatformModel");
