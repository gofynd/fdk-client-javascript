export = FileStoragePlatformValidator;
/**
 * @typedef BrowseParam
 * @property {string} namespace - Bucket name
 * @property {number} [pageNo] - Page no
 */
/**
 * @typedef CompleteUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.StartResponse} body
 */
/**
 * @typedef CopyFilesParam
 * @property {boolean} [sync] - Sync
 * @property {FileStoragePlatformModel.BulkRequest} body
 */
/**
 * @typedef GetSignUrlsParam
 * @property {FileStoragePlatformModel.SignUrlRequest} body
 */
/**
 * @typedef ProxyParam
 * @property {string} url - Url
 */
/**
 * @typedef StartUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.StartRequest} body
 */
declare class FileStoragePlatformValidator {
    /** @returns {BrowseParam} */
    static browse(): BrowseParam;
    /** @returns {CompleteUploadParam} */
    static completeUpload(): CompleteUploadParam;
    /** @returns {CopyFilesParam} */
    static copyFiles(): CopyFilesParam;
    /** @returns {GetSignUrlsParam} */
    static getSignUrls(): GetSignUrlsParam;
    /** @returns {ProxyParam} */
    static proxy(): ProxyParam;
    /** @returns {StartUploadParam} */
    static startUpload(): StartUploadParam;
}
declare namespace FileStoragePlatformValidator {
    export { BrowseParam, CompleteUploadParam, CopyFilesParam, GetSignUrlsParam, ProxyParam, StartUploadParam };
}
type BrowseParam = {
    /**
     * - Bucket name
     */
    namespace: string;
    /**
     * - Page no
     */
    pageNo?: number;
};
type CompleteUploadParam = {
    /**
     * - Segregation of different types of
     * files(products, orders, logistics etc), Required for validating the data of
     * the file being uploaded, decides where exactly the file will be stored
     * inside the storage bucket.
     */
    namespace: string;
    body: FileStoragePlatformModel.StartResponse;
};
type CopyFilesParam = {
    /**
     * - Sync
     */
    sync?: boolean;
    body: FileStoragePlatformModel.BulkRequest;
};
type GetSignUrlsParam = {
    body: FileStoragePlatformModel.SignUrlRequest;
};
type ProxyParam = {
    /**
     * - Url
     */
    url: string;
};
type StartUploadParam = {
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
