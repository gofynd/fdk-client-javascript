export = ContentPublicModel;
/**
 * @typedef CredentialSchema
 * @property {Object} [configuration]
 * @property {string} [entity_type]
 * @property {string} [type]
 * @property {boolean} [is_enable]
 */
/**
 * @typedef CredentialsSchema
 * @property {CredentialSchema[]} [items]
 */
/**
 * @typedef ContentAPIError
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */
declare class ContentPublicModel {
}
declare namespace ContentPublicModel {
    export { CredentialSchema, CredentialsSchema, ContentAPIError };
}
/** @returns {CredentialSchema} */
declare function CredentialSchema(): CredentialSchema;
type CredentialSchema = {
    configuration?: any;
    entity_type?: string;
    type?: string;
    is_enable?: boolean;
};
/** @returns {CredentialsSchema} */
declare function CredentialsSchema(): CredentialsSchema;
type CredentialsSchema = {
    items?: CredentialSchema[];
};
/** @returns {ContentAPIError} */
declare function ContentAPIError(): ContentAPIError;
type ContentAPIError = {
    message?: string;
    status?: number;
    code?: string;
    exception?: string;
    info?: string;
    request_id?: string;
    stack_trace?: string;
    meta?: any;
};
