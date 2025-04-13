export = AuthorizationPartnerModel;
/**
 * @typedef ClientData
 * @property {ClientScopes} [scopes]
 * @property {string[]} [grants] - List of grants for the client.
 * @property {ClientMeta} [meta]
 */
/**
 * @typedef ClientScopes
 * @property {string} [type] - The type of the scope.
 * @property {string[]} [permissions] - List of permissions for the scope.
 */
/**
 * @typedef UpdateClient
 * @property {ClientMeta} [meta]
 */
/**
 * @typedef ClientMeta
 * @property {string[]} [tags] - Tags associated with the client.
 * @property {string} [name] - Name of the client.
 * @property {string} [description] - Description of the client.
 * @property {string} [user_id] - ID of the user associated with the client.
 */
/**
 * @typedef ClientResponse
 * @property {number} [company_id] - The ID of the company associated with the client.
 * @property {string} [client_id] - The unique identifier for the client.
 * @property {string[]} [secret] - List of secrets associated with the client.
 * @property {string} [slug] - Slug for the client.
 * @property {ClientScopes} [scopes]
 * @property {string[]} [grants] - List of grants for the client.
 * @property {string[]} [redirect_urls] - List of redirect URLs for the client.
 * @property {number} [access_token_lifetime] - Lifetime of the access token in seconds.
 * @property {number} [refresh_token_lifetime] - Lifetime of the refresh token in seconds.
 * @property {ClientMeta} [meta]
 * @property {Object} [author] - Author information related to the client.
 * @property {boolean} [is_active] - Wheather the client is active or not
 * @property {string} [client_type] - Type of the client.
 * @property {string} [organization_id] - ID of the organization associated with
 *   the client.
 * @property {string} [_id] - Unique identifier for the client.
 * @property {string} [created_at] - Timestamp when the client was created.
 * @property {string} [modified_at] - Timestamp when the client was last modified.
 * @property {string[]} [raw_permissions] - List of raw permissions associated
 *   with the client.
 */
/**
 * @typedef ClientListSchema
 * @property {ClientResponse[]} [items] - List of client responses.
 * @property {Page} [page]
 */
/**
 * @typedef Page
 * @property {number} [item_total] - The total number of items on the page.
 * @property {string} [next_id] - The identifier for the next page.
 * @property {boolean} [has_previous] - Indicates whether there is a previous page.
 * @property {boolean} [has_next] - Indicates whether there is a next page.
 * @property {number} [current] - The current page number.
 * @property {string} type - The type of the page, such as 'PageType'.
 * @property {number} [size] - The number of items per page.
 * @property {number} [total] - Total number of items.
 */
declare class AuthorizationPartnerModel {
}
declare namespace AuthorizationPartnerModel {
    export { ClientData, ClientScopes, UpdateClient, ClientMeta, ClientResponse, ClientListSchema, Page };
}
/** @returns {ClientData} */
declare function ClientData(): ClientData;
type ClientData = {
    scopes?: ClientScopes;
    /**
     * - List of grants for the client.
     */
    grants?: string[];
    meta?: ClientMeta;
};
/** @returns {ClientScopes} */
declare function ClientScopes(): ClientScopes;
type ClientScopes = {
    /**
     * - The type of the scope.
     */
    type?: string;
    /**
     * - List of permissions for the scope.
     */
    permissions?: string[];
};
/** @returns {UpdateClient} */
declare function UpdateClient(): UpdateClient;
type UpdateClient = {
    meta?: ClientMeta;
};
/** @returns {ClientMeta} */
declare function ClientMeta(): ClientMeta;
type ClientMeta = {
    /**
     * - Tags associated with the client.
     */
    tags?: string[];
    /**
     * - Name of the client.
     */
    name?: string;
    /**
     * - Description of the client.
     */
    description?: string;
    /**
     * - ID of the user associated with the client.
     */
    user_id?: string;
};
/** @returns {ClientResponse} */
declare function ClientResponse(): ClientResponse;
type ClientResponse = {
    /**
     * - The ID of the company associated with the client.
     */
    company_id?: number;
    /**
     * - The unique identifier for the client.
     */
    client_id?: string;
    /**
     * - List of secrets associated with the client.
     */
    secret?: string[];
    /**
     * - Slug for the client.
     */
    slug?: string;
    scopes?: ClientScopes;
    /**
     * - List of grants for the client.
     */
    grants?: string[];
    /**
     * - List of redirect URLs for the client.
     */
    redirect_urls?: string[];
    /**
     * - Lifetime of the access token in seconds.
     */
    access_token_lifetime?: number;
    /**
     * - Lifetime of the refresh token in seconds.
     */
    refresh_token_lifetime?: number;
    meta?: ClientMeta;
    /**
     * - Author information related to the client.
     */
    author?: any;
    /**
     * - Wheather the client is active or not
     */
    is_active?: boolean;
    /**
     * - Type of the client.
     */
    client_type?: string;
    /**
     * - ID of the organization associated with
     * the client.
     */
    organization_id?: string;
    /**
     * - Unique identifier for the client.
     */
    _id?: string;
    /**
     * - Timestamp when the client was created.
     */
    created_at?: string;
    /**
     * - Timestamp when the client was last modified.
     */
    modified_at?: string;
    /**
     * - List of raw permissions associated
     * with the client.
     */
    raw_permissions?: string[];
};
/** @returns {ClientListSchema} */
declare function ClientListSchema(): ClientListSchema;
type ClientListSchema = {
    /**
     * - List of client responses.
     */
    items?: ClientResponse[];
    page?: Page;
};
/** @returns {Page} */
declare function Page(): Page;
type Page = {
    /**
     * - The total number of items on the page.
     */
    item_total?: number;
    /**
     * - The identifier for the next page.
     */
    next_id?: string;
    /**
     * - Indicates whether there is a previous page.
     */
    has_previous?: boolean;
    /**
     * - Indicates whether there is a next page.
     */
    has_next?: boolean;
    /**
     * - The current page number.
     */
    current?: number;
    /**
     * - The type of the page, such as 'PageType'.
     */
    type: string;
    /**
     * - The number of items per page.
     */
    size?: number;
    /**
     * - Total number of items.
     */
    total?: number;
};
