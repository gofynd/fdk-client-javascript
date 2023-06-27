export = FileStorageApplicationValidator;
/**
 * @typedef completeUpload
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStorageApplicationModel.StartResponse} body
 */
/**
 * @typedef signUrls
 * @property {FileStorageApplicationModel.SignUrlRequest} body
 */
/**
 * @typedef startUpload
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStorageApplicationModel.StartRequest} body
 */
declare class FileStorageApplicationValidator {
}
declare namespace FileStorageApplicationValidator {
    export { completeUpload, signUrls, startUpload };
}
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
    body: FileStorageApplicationModel.StartResponse;
};
/** @returns {signUrls} */
declare function signUrls(): signUrls;
type signUrls = {
    body: FileStorageApplicationModel.SignUrlRequest;
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
    body: FileStorageApplicationModel.StartRequest;
};
import FileStorageApplicationModel = require("./FileStorageApplicationModel");
