export = PartnerPlatformModel;
/**
 * @typedef AddProxyReq
 * @property {string} [attached_path] - Proxy path slug
 * @property {string} [proxy_url] - The external URL for which the proxy URL
 *   will be generated
 */
/**
 * @typedef ExtensionProxyPathCreation
 * @property {string} [_id] - Unique identifier for the proxy URL entry in the database.
 * @property {string} [attached_path] - The slug path appended to the base URL
 *   for creating the proxy endpoint.
 * @property {string} [proxy_url] - The external URL that the proxy endpoint
 *   will forward requests to.
 * @property {string} [company_id] - Unique identifier of the company that owns
 *   the proxy URL.
 * @property {string} [application_id] - Unique identifier of the application
 *   associated with the proxy URL.
 * @property {string} [extension_id] - Unique identifier of the extension where
 *   the proxy URL is configured.
 * @property {string} [created_at] - The timestamp indicating when the proxy URL
 *   configuration was created.
 * @property {string} [modified_at] - The timestamp indicating the last update
 *   made to the proxy URL configuration.
 */
/**
 * @typedef ExtensionProxyPathDelete
 * @property {string} [message] - Descriptive message indicating the status or
 *   result of the deletion operation.
 * @property {Object} [data] - Additional information or metadata about the
 *   deleted proxy configuration.
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
    export { AddProxyReq, ExtensionProxyPathCreation, ExtensionProxyPathDelete, APIError };
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
/** @returns {ExtensionProxyPathCreation} */
declare function ExtensionProxyPathCreation(): ExtensionProxyPathCreation;
type ExtensionProxyPathCreation = {
    /**
     * - Unique identifier for the proxy URL entry in the database.
     */
    _id?: string;
    /**
     * - The slug path appended to the base URL
     * for creating the proxy endpoint.
     */
    attached_path?: string;
    /**
     * - The external URL that the proxy endpoint
     * will forward requests to.
     */
    proxy_url?: string;
    /**
     * - Unique identifier of the company that owns
     * the proxy URL.
     */
    company_id?: string;
    /**
     * - Unique identifier of the application
     * associated with the proxy URL.
     */
    application_id?: string;
    /**
     * - Unique identifier of the extension where
     * the proxy URL is configured.
     */
    extension_id?: string;
    /**
     * - The timestamp indicating when the proxy URL
     * configuration was created.
     */
    created_at?: string;
    /**
     * - The timestamp indicating the last update
     * made to the proxy URL configuration.
     */
    modified_at?: string;
};
/** @returns {ExtensionProxyPathDelete} */
declare function ExtensionProxyPathDelete(): ExtensionProxyPathDelete;
type ExtensionProxyPathDelete = {
    /**
     * - Descriptive message indicating the status or
     * result of the deletion operation.
     */
    message?: string;
    /**
     * - Additional information or metadata about the
     * deleted proxy configuration.
     */
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
