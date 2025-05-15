export = ContentPlatformValidator;
/**
 * @typedef CreateCustomFieldDefinitionParam
 * @property {string} resource
 * @property {ContentPlatformModel.CustomFieldDefinitionRequestSchema} body
 */
/**
 * @typedef CreateCustomObjectBySlugParam
 * @property {string} definitionSlug
 * @property {ContentPlatformModel.CustomObjectRequestSchemaWithoutId} body
 */
/**
 * @typedef CreateCustomObjectDefinitionParam
 * @property {ContentPlatformModel.CustomObjectDefinitionRequestSchema} body
 */
/**
 * @typedef DeleteCustomFieldDefinitionBySlugParam
 * @property {string} slug
 * @property {string} resource
 * @property {string} namespace
 */
/**
 * @typedef DeleteCustomFieldsByResourceSlugParam
 * @property {string} resource
 * @property {string} resourceSlug
 * @property {string} ids
 */
/**
 * @typedef DeleteCustomObjectBySlugParam
 * @property {string} definitionSlug
 * @property {string} slug
 */
/**
 * @typedef DeleteCustomObjectDefinitionBySlugParam
 * @property {string} slug
 */
/**
 * @typedef ExportCustomObjectEntriesBySlugParam
 * @property {string} slug
 */
/**
 * @typedef GetCustomFieldDefinitionByResourceParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} resource
 * @property {string} [types]
 * @property {string} [search]
 * @property {string} [slugs]
 * @property {string} [namespaces]
 */
/**
 * @typedef GetCustomFieldDefinitionBySlugParam
 * @property {string} slug
 * @property {string} resource
 * @property {string} namespace
 */
/**
 * @typedef GetCustomFieldDefinitionsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} [resources]
 * @property {string} [types]
 * @property {string} [search]
 * @property {string} [slugs]
 * @property {string} [namespaces]
 */
/** @typedef GetCustomFieldTypesParam */
/**
 * @typedef GetCustomFieldsByResourceSlugParam
 * @property {string} resource
 * @property {string} resourceSlug
 */
/**
 * @typedef GetCustomObjectBySlugParam
 * @property {string} definitionSlug
 * @property {string} slug
 */
/**
 * @typedef GetCustomObjectDefinitionBySlugParam
 * @property {string} slug
 */
/**
 * @typedef GetCustomObjectDefinitionsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} [search]
 */
/**
 * @typedef GetCustomObjectsBySlugParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} definitionSlug
 */
/**
 * @typedef GetJobsParam
 * @property {string} page
 * @property {string} pageSize
 * @property {string} actionType
 */
/** @typedef GetResourcesParam */
/**
 * @typedef ImportCustomObjectEntriesBySlugParam
 * @property {string} slug
 * @property {ContentPlatformModel.CustomObjectBulkSchema} body
 */
/**
 * @typedef SampleCustomObjectBulkEntryBySlugParam
 * @property {string} slug
 */
/**
 * @typedef UpdateCustomFieldByResourceSlugParam
 * @property {string} resource
 * @property {string} resourceSlug
 * @property {ContentPlatformModel.CustomFieldRequestSchema} body
 */
/**
 * @typedef UpdateCustomFieldDefinitionBySlugParam
 * @property {string} slug
 * @property {string} resource
 * @property {string} namespace
 * @property {ContentPlatformModel.CustomFieldDefinitionRequestSchema} body
 */
/**
 * @typedef UpdateCustomObjectBySlugParam
 * @property {string} definitionSlug
 * @property {string} slug
 * @property {ContentPlatformModel.CustomObjectRequestSchemaWithoutId} body
 */
/**
 * @typedef UpdateCustomObjectDefinitionBySlugParam
 * @property {string} slug
 * @property {ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema} body
 */
declare class ContentPlatformValidator {
    /** @returns {CreateCustomFieldDefinitionParam} */
    static createCustomFieldDefinition(): CreateCustomFieldDefinitionParam;
    /** @returns {CreateCustomObjectBySlugParam} */
    static createCustomObjectBySlug(): CreateCustomObjectBySlugParam;
    /** @returns {CreateCustomObjectDefinitionParam} */
    static createCustomObjectDefinition(): CreateCustomObjectDefinitionParam;
    /** @returns {DeleteCustomFieldDefinitionBySlugParam} */
    static deleteCustomFieldDefinitionBySlug(): DeleteCustomFieldDefinitionBySlugParam;
    /** @returns {DeleteCustomFieldsByResourceSlugParam} */
    static deleteCustomFieldsByResourceSlug(): DeleteCustomFieldsByResourceSlugParam;
    /** @returns {DeleteCustomObjectBySlugParam} */
    static deleteCustomObjectBySlug(): DeleteCustomObjectBySlugParam;
    /** @returns {DeleteCustomObjectDefinitionBySlugParam} */
    static deleteCustomObjectDefinitionBySlug(): DeleteCustomObjectDefinitionBySlugParam;
    /** @returns {ExportCustomObjectEntriesBySlugParam} */
    static exportCustomObjectEntriesBySlug(): ExportCustomObjectEntriesBySlugParam;
    /** @returns {GetCustomFieldDefinitionByResourceParam} */
    static getCustomFieldDefinitionByResource(): GetCustomFieldDefinitionByResourceParam;
    /** @returns {GetCustomFieldDefinitionBySlugParam} */
    static getCustomFieldDefinitionBySlug(): GetCustomFieldDefinitionBySlugParam;
    /** @returns {GetCustomFieldDefinitionsParam} */
    static getCustomFieldDefinitions(): GetCustomFieldDefinitionsParam;
    /** @returns {GetCustomFieldTypesParam} */
    static getCustomFieldTypes(): any;
    /** @returns {GetCustomFieldsByResourceSlugParam} */
    static getCustomFieldsByResourceSlug(): GetCustomFieldsByResourceSlugParam;
    /** @returns {GetCustomObjectBySlugParam} */
    static getCustomObjectBySlug(): GetCustomObjectBySlugParam;
    /** @returns {GetCustomObjectDefinitionBySlugParam} */
    static getCustomObjectDefinitionBySlug(): GetCustomObjectDefinitionBySlugParam;
    /** @returns {GetCustomObjectDefinitionsParam} */
    static getCustomObjectDefinitions(): GetCustomObjectDefinitionsParam;
    /** @returns {GetCustomObjectsBySlugParam} */
    static getCustomObjectsBySlug(): GetCustomObjectsBySlugParam;
    /** @returns {GetJobsParam} */
    static getJobs(): GetJobsParam;
    /** @returns {GetResourcesParam} */
    static getResources(): any;
    /** @returns {ImportCustomObjectEntriesBySlugParam} */
    static importCustomObjectEntriesBySlug(): ImportCustomObjectEntriesBySlugParam;
    /** @returns {SampleCustomObjectBulkEntryBySlugParam} */
    static sampleCustomObjectBulkEntryBySlug(): SampleCustomObjectBulkEntryBySlugParam;
    /** @returns {UpdateCustomFieldByResourceSlugParam} */
    static updateCustomFieldByResourceSlug(): UpdateCustomFieldByResourceSlugParam;
    /** @returns {UpdateCustomFieldDefinitionBySlugParam} */
    static updateCustomFieldDefinitionBySlug(): UpdateCustomFieldDefinitionBySlugParam;
    /** @returns {UpdateCustomObjectBySlugParam} */
    static updateCustomObjectBySlug(): UpdateCustomObjectBySlugParam;
    /** @returns {UpdateCustomObjectDefinitionBySlugParam} */
    static updateCustomObjectDefinitionBySlug(): UpdateCustomObjectDefinitionBySlugParam;
}
declare namespace ContentPlatformValidator {
    export { CreateCustomFieldDefinitionParam, CreateCustomObjectBySlugParam, CreateCustomObjectDefinitionParam, DeleteCustomFieldDefinitionBySlugParam, DeleteCustomFieldsByResourceSlugParam, DeleteCustomObjectBySlugParam, DeleteCustomObjectDefinitionBySlugParam, ExportCustomObjectEntriesBySlugParam, GetCustomFieldDefinitionByResourceParam, GetCustomFieldDefinitionBySlugParam, GetCustomFieldDefinitionsParam, GetCustomFieldTypesParam, GetCustomFieldsByResourceSlugParam, GetCustomObjectBySlugParam, GetCustomObjectDefinitionBySlugParam, GetCustomObjectDefinitionsParam, GetCustomObjectsBySlugParam, GetJobsParam, GetResourcesParam, ImportCustomObjectEntriesBySlugParam, SampleCustomObjectBulkEntryBySlugParam, UpdateCustomFieldByResourceSlugParam, UpdateCustomFieldDefinitionBySlugParam, UpdateCustomObjectBySlugParam, UpdateCustomObjectDefinitionBySlugParam };
}
type CreateCustomFieldDefinitionParam = {
    resource: string;
    body: ContentPlatformModel.CustomFieldDefinitionRequestSchema;
};
type CreateCustomObjectBySlugParam = {
    definitionSlug: string;
    body: ContentPlatformModel.CustomObjectRequestSchemaWithoutId;
};
type CreateCustomObjectDefinitionParam = {
    body: ContentPlatformModel.CustomObjectDefinitionRequestSchema;
};
type DeleteCustomFieldDefinitionBySlugParam = {
    slug: string;
    resource: string;
    namespace: string;
};
type DeleteCustomFieldsByResourceSlugParam = {
    resource: string;
    resourceSlug: string;
    ids: string;
};
type DeleteCustomObjectBySlugParam = {
    definitionSlug: string;
    slug: string;
};
type DeleteCustomObjectDefinitionBySlugParam = {
    slug: string;
};
type ExportCustomObjectEntriesBySlugParam = {
    slug: string;
};
type GetCustomFieldDefinitionByResourceParam = {
    pageNo: string;
    pageSize: string;
    resource: string;
    types?: string;
    search?: string;
    slugs?: string;
    namespaces?: string;
};
type GetCustomFieldDefinitionBySlugParam = {
    slug: string;
    resource: string;
    namespace: string;
};
type GetCustomFieldDefinitionsParam = {
    pageNo: string;
    pageSize: string;
    resources?: string;
    types?: string;
    search?: string;
    slugs?: string;
    namespaces?: string;
};
type GetCustomFieldsByResourceSlugParam = {
    resource: string;
    resourceSlug: string;
};
type GetCustomObjectBySlugParam = {
    definitionSlug: string;
    slug: string;
};
type GetCustomObjectDefinitionBySlugParam = {
    slug: string;
};
type GetCustomObjectDefinitionsParam = {
    pageNo: string;
    pageSize: string;
    search?: string;
};
type GetCustomObjectsBySlugParam = {
    pageNo: string;
    pageSize: string;
    definitionSlug: string;
};
type GetJobsParam = {
    page: string;
    pageSize: string;
    actionType: string;
};
type ImportCustomObjectEntriesBySlugParam = {
    slug: string;
    body: ContentPlatformModel.CustomObjectBulkSchema;
};
type SampleCustomObjectBulkEntryBySlugParam = {
    slug: string;
};
type UpdateCustomFieldByResourceSlugParam = {
    resource: string;
    resourceSlug: string;
    body: ContentPlatformModel.CustomFieldRequestSchema;
};
type UpdateCustomFieldDefinitionBySlugParam = {
    slug: string;
    resource: string;
    namespace: string;
    body: ContentPlatformModel.CustomFieldDefinitionRequestSchema;
};
type UpdateCustomObjectBySlugParam = {
    definitionSlug: string;
    slug: string;
    body: ContentPlatformModel.CustomObjectRequestSchemaWithoutId;
};
type UpdateCustomObjectDefinitionBySlugParam = {
    slug: string;
    body: ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema;
};
type GetCustomFieldTypesParam = any;
type GetResourcesParam = any;
import ContentPlatformModel = require("./ContentPlatformModel");
