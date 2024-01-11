export = ContentPublicModel;
/**
 * @typedef ContentAPIError
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */
/**
 * @typedef CredentialSchema
 * @property {Object} [configuration]
 * @property {string} [entity_type]
 * @property {boolean} [is_enable]
 * @property {string} [type]
 */
/**
 * @typedef CredentialsSchema
 * @property {CredentialSchema[]} [items]
 */
declare class ContentPublicModel {
}
declare namespace ContentPublicModel {
    export { ContentAPIError, CredentialSchema, CredentialsSchema };
}
/** @returns {ContentAPIError} */
declare function ContentAPIError(): ContentAPIError;
type ContentAPIError = {
    code?: string;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
/** @returns {CredentialSchema} */
declare function CredentialSchema(): CredentialSchema;
type CredentialSchema = {
    configuration?: any;
    entity_type?: string;
    is_enable?: boolean;
    type?: string;
};
/** @returns {CredentialsSchema} */
declare function CredentialsSchema(): CredentialsSchema;
type CredentialsSchema = {
    items?: CredentialSchema[];
};
