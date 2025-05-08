export = FileStoragePlatformValidator;
/**
 * @typedef BrowseParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {number} [page] - Page no
 * @property {number} [limit] - Limit
 */
/**
 * @typedef CompleteUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.FileUpload} body
 */
/**
 * @typedef CopyFilesParam
 * @property {boolean} [sync]
 * @property {FileStoragePlatformModel.CopyFiles} body
 */
/**
 * @typedef GetSignUrlsParam
 * @property {FileStoragePlatformModel.SignUrl} body
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
 * @property {FileStoragePlatformModel.FileUploadStart} body
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
type CompleteUploadParam = {
    /**
     * - Segregation of different types of
     * files(products, orders, logistics etc), Required for validating the data of
     * the file being uploaded, decides where exactly the file will be stored
     * inside the storage bucket.
     */
    namespace: string;
    body: FileStoragePlatformModel.FileUpload;
};
type CopyFilesParam = {
    sync?: boolean;
    body: FileStoragePlatformModel.CopyFiles;
};
type GetSignUrlsParam = {
    body: FileStoragePlatformModel.SignUrl;
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
    body: FileStoragePlatformModel.FileUploadStart;
};
import FileStoragePlatformModel = require("./FileStoragePlatformModel");
