export = PartnerPlatformModel;
/**
 * @typedef AddProxyReq
 * @property {string} [attached_path] - Proxy path slug
 * @property {string} [proxy_url] - The external URL for which the proxy URL
 *   will be generated
 */
/**
 * @typedef AddProxyResponse
 * @property {string} [_id]
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [extension_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */
/**
 * @typedef RemoveProxyResponse
 * @property {string} [message]
 * @property {Object} [data]
 */
/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [info] - Error code description link
 * @property {string} [request_id]
 * @property {Object} [meta]
 */
declare class PartnerPlatformModel {
}
declare namespace PartnerPlatformModel {
    export { AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError };
}
/** @returns {AddProxyReq} */
declare function AddProxyReq(): AddProxyReq;
type AddProxyReq = {
    /**
     * - Proxy path slug
     */
    attached_path?: string;
    /**
     * - The external URL for which the proxy URL
     * will be generated
     */
    proxy_url?: string;
};
/** @returns {AddProxyResponse} */
declare function AddProxyResponse(): AddProxyResponse;
type AddProxyResponse = {
    _id?: string;
    attached_path?: string;
    proxy_url?: string;
    company_id?: string;
    application_id?: string;
    extension_id?: string;
    created_at?: string;
    modified_at?: string;
};
/** @returns {RemoveProxyResponse} */
declare function RemoveProxyResponse(): RemoveProxyResponse;
type RemoveProxyResponse = {
    message?: string;
    data?: any;
};
/** @returns {APIError} */
declare function APIError(): APIError;
type APIError = {
    code?: string;
    message?: string;
    /**
     * - Error code description link
     */
    info?: string;
    request_id?: string;
    meta?: any;
};
