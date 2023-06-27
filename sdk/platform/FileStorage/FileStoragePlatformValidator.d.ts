export = FileStoragePlatformValidator;
/**
 * @typedef browse
 * @property {string} namespace - Bucket name
 * @property {number} [pageNo] - Page no
 */
/**
 * @typedef completeUpload
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.StartResponse} body
 */
/**
 * @typedef copyFiles
 * @property {boolean} [sync] - Sync
 * @property {FileStoragePlatformModel.BulkRequest} body
 */
/**
 * @typedef getSignUrls
 * @property {FileStoragePlatformModel.SignUrlRequest} body
 */
/**
 * @typedef proxy
 * @property {string} url - Url
 */
/**
 * @typedef startUpload
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.StartRequest} body
 */
declare class FileStoragePlatformValidator {
}
declare namespace FileStoragePlatformValidator {
    export { browse, completeUpload, copyFiles, getSignUrls, proxy, startUpload };
}
/** @returns {browse} */
declare function browse(): browse;
type browse = {
    /**
     * - Bucket name
     */
    namespace: string;
    /**
     * - Page no
     */
    pageNo?: number;
};
/** @returns {completeUpload} */
declare function completeUpload(): completeUpload;
type completeUpload = {
    /**
     * - Segregation of different types of
     * files(products, orders, logistics etc), Required for validating the data of
     * the file being uploaded, decides where exactly the file will be stored
     * inside the storage bucket.
     */
    namespace: string;
    body: FileStoragePlatformModel.StartResponse;
};
/** @returns {copyFiles} */
declare function copyFiles(): copyFiles;
type copyFiles = {
    /**
     * - Sync
     */
    sync?: boolean;
    body: FileStoragePlatformModel.BulkRequest;
};
/** @returns {getSignUrls} */
declare function getSignUrls(): getSignUrls;
type getSignUrls = {
    body: FileStoragePlatformModel.SignUrlRequest;
};
/** @returns {proxy} */
declare function proxy(): proxy;
type proxy = {
    /**
     * - Url
     */
    url: string;
};
/** @returns {startUpload} */
declare function startUpload(): startUpload;
type startUpload = {
    /**
     * - Segregation of different types of
     * files(products, orders, logistics etc), Required for validating the data of
     * the file being uploaded, decides where exactly the file will be stored
     * inside the storage bucket.
     */
    namespace: string;
    body: FileStoragePlatformModel.StartRequest;
};
import FileStoragePlatformModel = require("./FileStoragePlatformModel");
