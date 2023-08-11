export = FileStorageApplicationValidator;
/**
 * @typedef CompleteUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStorageApplicationModel.StartResponse} body
 */
/**
 * @typedef SignUrlsParam
 * @property {FileStorageApplicationModel.SignUrlRequest} body
 */
/**
 * @typedef StartUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStorageApplicationModel.StartRequest} body
 */
declare class FileStorageApplicationValidator {
    /** @returns {CompleteUploadParam} */
    static completeUpload(): CompleteUploadParam;
    /** @returns {SignUrlsParam} */
    static signUrls(): SignUrlsParam;
    /** @returns {StartUploadParam} */
    static startUpload(): StartUploadParam;
}
declare namespace FileStorageApplicationValidator {
    export { CompleteUploadParam, SignUrlsParam, StartUploadParam };
}
type CompleteUploadParam = {
    /**
     * - Segregation of different types of
     * files(products, orders, logistics etc), Required for validating the data of
     * the file being uploaded, decides where exactly the file will be stored
     * inside the storage bucket.
     */
    namespace: string;
    body: FileStorageApplicationModel.StartResponse;
};
type SignUrlsParam = {
    body: FileStorageApplicationModel.SignUrlRequest;
};
type StartUploadParam = {
    /**
     * - Segregation of different types of
     * files(products, orders, logistics etc), Required for validating the data of
     * the file being uploaded, decides where exactly the file will be stored
     * inside the storage bucket.
     */
    namespace: string;
    body: FileStorageApplicationModel.StartRequest;
};
import FileStorageApplicationModel = require("./FileStorageApplicationModel");
