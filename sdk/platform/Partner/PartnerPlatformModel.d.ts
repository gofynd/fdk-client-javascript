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
 * @property {string} [application_id]
 * @property {string} [attached_path]
 * @property {string} [company_id]
 * @property {string} [created_at]
 * @property {string} [extension_id]
 * @property {string} [modified_at]
 * @property {string} [proxy_url]
 */
/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [info] - Error code description link
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 */
/**
 * @typedef RemoveProxyResponse
 * @property {Object} [data]
 * @property {string} [message]
 */
declare class PartnerPlatformModel {
}
declare namespace PartnerPlatformModel {
    export { AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse };
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
    application_id?: string;
    attached_path?: string;
    company_id?: string;
    created_at?: string;
    extension_id?: string;
    modified_at?: string;
    proxy_url?: string;
};
/** @returns {APIError} */
declare function APIError(): APIError;
type APIError = {
    code?: string;
    /**
     * - Error code description link
     */
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
};
/** @returns {RemoveProxyResponse} */
declare function RemoveProxyResponse(): RemoveProxyResponse;
type RemoveProxyResponse = {
    data?: any;
    message?: string;
};
