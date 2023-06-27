export = FileStoragePlatformApplicationValidator;
/**
 * @typedef appCompleteUpload
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.StartResponse} body
 */
/**
 * @typedef appCopyFiles
 * @property {boolean} [sync] - Sync
 * @property {FileStoragePlatformModel.BulkRequest} body
 */
/**
 * @typedef appStartUpload
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.StartRequest} body
 */
/**
 * @typedef appbrowse
 * @property {string} namespace - Bucket name
 * @property {number} [pageNo] - Page no
 */
declare class FileStoragePlatformApplicationValidator {
}
declare namespace FileStoragePlatformApplicationValidator {
    export { appCompleteUpload, appCopyFiles, appStartUpload, appbrowse };
}
/** @returns {appCompleteUpload} */
declare function appCompleteUpload(): appCompleteUpload;
type appCompleteUpload = {
    /**
     * - Segregation of different types of
     * files(products, orders, logistics etc), Required for validating the data of
     * the file being uploaded, decides where exactly the file will be stored
     * inside the storage bucket.
     */
    namespace: string;
    body: FileStoragePlatformModel.StartResponse;
};
/** @returns {appCopyFiles} */
declare function appCopyFiles(): appCopyFiles;
type appCopyFiles = {
    /**
     * - Sync
     */
    sync?: boolean;
    body: FileStoragePlatformModel.BulkRequest;
};
/** @returns {appStartUpload} */
declare function appStartUpload(): appStartUpload;
type appStartUpload = {
    /**
     * - Segregation of different types of
     * files(products, orders, logistics etc), Required for validating the data of
     * the file being uploaded, decides where exactly the file will be stored
     * inside the storage bucket.
     */
    namespace: string;
    body: FileStoragePlatformModel.StartRequest;
};
/** @returns {appbrowse} */
declare function appbrowse(): appbrowse;
type appbrowse = {
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
