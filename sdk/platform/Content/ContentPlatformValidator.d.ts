export = ContentPlatformValidator;
/**
 * @typedef CreateCustomFieldByResourceIdParam
 * @property {string} resource
 * @property {string} resourceId
 * @property {ContentPlatformModel.CustomFieldRequestSchema} body
 */
/**
 * @typedef CreateCustomFieldDefinitionParam
 * @property {ContentPlatformModel.CustomFieldDefinitionRequestSchema} body
 */
/**
 * @typedef CreateCustomObjectParam
 * @property {ContentPlatformModel.CustomObjectRequestSchema} body
 */
/**
 * @typedef CreateCustomObjectDefinitionParam
 * @property {ContentPlatformModel.CustomObjectDefinitionRequestSchema} body
 */
/**
 * @typedef DeleteCustomFieldDefinitionParam
 * @property {string} id
 */
/**
 * @typedef DeleteCustomFieldsByResourceIdParam
 * @property {string} resource
 * @property {string} resourceId
 * @property {string} ids
 */
/**
 * @typedef DeleteCustomObjectParam
 * @property {string} id
 */
/**
 * @typedef DeleteCustomObjectDefinitionParam
 * @property {string} id
 */
/**
 * @typedef ExportCustomObjectEntriesParam
 * @property {string} definitionId
 */
/**
 * @typedef GetCustomFieldDefinitionParam
 * @property {string} id
 */
/**
 * @typedef GetCustomFieldDefinitionsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} [resources]
 * @property {string} [types]
 * @property {string} [search]
 * @property {string} [slugs]
 */
/**
 * @typedef GetCustomFieldJobsParam
 * @property {string} page
 * @property {string} pageSize
 * @property {string} actionType
 */
/** @typedef GetCustomFieldTypesParam */
/**
 * @typedef GetCustomFieldsParam
 * @property {string} resource
 */
/**
 * @typedef GetCustomFieldsByResourceIdParam
 * @property {string} resource
 * @property {string} resourceId
 */
/**
 * @typedef GetCustomObjectParam
 * @property {string} id
 */
/**
 * @typedef GetCustomObjectDefinitionParam
 * @property {string} id
 */
/**
 * @typedef GetCustomObjectDefinitionsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} [search]
 */
/**
 * @typedef GetCustomObjectsParam
 * @property {string} [definitionId]
 * @property {string} pageNo
 * @property {string} pageSize
 */
/**
 * @typedef GetJobsParam
 * @property {string} page
 * @property {string} pageSize
 * @property {string} actionType
 */
/** @typedef GetResourcesParam */
/**
 * @typedef ImportCustomObjectEntriesParam
 * @property {string} definitionId
 * @property {ContentPlatformModel.CustomObjectBulkSchema} body
 */
/**
 * @typedef SampleCustomObjectBulkEntryParam
 * @property {string} definitionId
 */
/**
 * @typedef UpdateCustomFieldByResourceIdParam
 * @property {string} resource
 * @property {string} resourceId
 * @property {ContentPlatformModel.CustomFieldRequestSchema} body
 */
/**
 * @typedef UpdateCustomFieldDefinitionParam
 * @property {string} id
 * @property {ContentPlatformModel.CustomFieldDefinitionRequestSchema} body
 */
/**
 * @typedef UpdateCustomObjectParam
 * @property {string} id
 * @property {ContentPlatformModel.CustomObjectRequestSchema} body
 */
/**
 * @typedef UpdateCustomObjectDefinitionParam
 * @property {string} id
 * @property {ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema} body
 */
declare class ContentPlatformValidator {
    /** @returns {CreateCustomFieldByResourceIdParam} */
    static createCustomFieldByResourceId(): CreateCustomFieldByResourceIdParam;
    /** @returns {CreateCustomFieldDefinitionParam} */
    static createCustomFieldDefinition(): CreateCustomFieldDefinitionParam;
    /** @returns {CreateCustomObjectParam} */
    static createCustomObject(): CreateCustomObjectParam;
    /** @returns {CreateCustomObjectDefinitionParam} */
    static createCustomObjectDefinition(): CreateCustomObjectDefinitionParam;
    /** @returns {DeleteCustomFieldDefinitionParam} */
    static deleteCustomFieldDefinition(): DeleteCustomFieldDefinitionParam;
    /** @returns {DeleteCustomFieldsByResourceIdParam} */
    static deleteCustomFieldsByResourceId(): DeleteCustomFieldsByResourceIdParam;
    /** @returns {DeleteCustomObjectParam} */
    static deleteCustomObject(): DeleteCustomObjectParam;
    /** @returns {DeleteCustomObjectDefinitionParam} */
    static deleteCustomObjectDefinition(): DeleteCustomObjectDefinitionParam;
    /** @returns {ExportCustomObjectEntriesParam} */
    static exportCustomObjectEntries(): ExportCustomObjectEntriesParam;
    /** @returns {GetCustomFieldDefinitionParam} */
    static getCustomFieldDefinition(): GetCustomFieldDefinitionParam;
    /** @returns {GetCustomFieldDefinitionsParam} */
    static getCustomFieldDefinitions(): GetCustomFieldDefinitionsParam;
    /** @returns {GetCustomFieldJobsParam} */
    static getCustomFieldJobs(): GetCustomFieldJobsParam;
    /** @returns {GetCustomFieldTypesParam} */
    static getCustomFieldTypes(): any;
    /** @returns {GetCustomFieldsParam} */
    static getCustomFields(): GetCustomFieldsParam;
    /** @returns {GetCustomFieldsByResourceIdParam} */
    static getCustomFieldsByResourceId(): GetCustomFieldsByResourceIdParam;
    /** @returns {GetCustomObjectParam} */
    static getCustomObject(): GetCustomObjectParam;
    /** @returns {GetCustomObjectDefinitionParam} */
    static getCustomObjectDefinition(): GetCustomObjectDefinitionParam;
    /** @returns {GetCustomObjectDefinitionsParam} */
    static getCustomObjectDefinitions(): GetCustomObjectDefinitionsParam;
    /** @returns {GetCustomObjectsParam} */
    static getCustomObjects(): GetCustomObjectsParam;
    /** @returns {GetJobsParam} */
    static getJobs(): GetJobsParam;
    /** @returns {GetResourcesParam} */
    static getResources(): any;
    /** @returns {ImportCustomObjectEntriesParam} */
    static importCustomObjectEntries(): ImportCustomObjectEntriesParam;
    /** @returns {SampleCustomObjectBulkEntryParam} */
    static sampleCustomObjectBulkEntry(): SampleCustomObjectBulkEntryParam;
    /** @returns {UpdateCustomFieldByResourceIdParam} */
    static updateCustomFieldByResourceId(): UpdateCustomFieldByResourceIdParam;
    /** @returns {UpdateCustomFieldDefinitionParam} */
    static updateCustomFieldDefinition(): UpdateCustomFieldDefinitionParam;
    /** @returns {UpdateCustomObjectParam} */
    static updateCustomObject(): UpdateCustomObjectParam;
    /** @returns {UpdateCustomObjectDefinitionParam} */
    static updateCustomObjectDefinition(): UpdateCustomObjectDefinitionParam;
}
declare namespace ContentPlatformValidator {
    export { CreateCustomFieldByResourceIdParam, CreateCustomFieldDefinitionParam, CreateCustomObjectParam, CreateCustomObjectDefinitionParam, DeleteCustomFieldDefinitionParam, DeleteCustomFieldsByResourceIdParam, DeleteCustomObjectParam, DeleteCustomObjectDefinitionParam, ExportCustomObjectEntriesParam, GetCustomFieldDefinitionParam, GetCustomFieldDefinitionsParam, GetCustomFieldJobsParam, GetCustomFieldTypesParam, GetCustomFieldsParam, GetCustomFieldsByResourceIdParam, GetCustomObjectParam, GetCustomObjectDefinitionParam, GetCustomObjectDefinitionsParam, GetCustomObjectsParam, GetJobsParam, GetResourcesParam, ImportCustomObjectEntriesParam, SampleCustomObjectBulkEntryParam, UpdateCustomFieldByResourceIdParam, UpdateCustomFieldDefinitionParam, UpdateCustomObjectParam, UpdateCustomObjectDefinitionParam };
}
type CreateCustomFieldByResourceIdParam = {
    resource: string;
    resourceId: string;
    body: ContentPlatformModel.CustomFieldRequestSchema;
};
type CreateCustomFieldDefinitionParam = {
    body: ContentPlatformModel.CustomFieldDefinitionRequestSchema;
};
type CreateCustomObjectParam = {
    body: ContentPlatformModel.CustomObjectRequestSchema;
};
type CreateCustomObjectDefinitionParam = {
    body: ContentPlatformModel.CustomObjectDefinitionRequestSchema;
};
type DeleteCustomFieldDefinitionParam = {
    id: string;
};
type DeleteCustomFieldsByResourceIdParam = {
    resource: string;
    resourceId: string;
    ids: string;
};
type DeleteCustomObjectParam = {
    id: string;
};
type DeleteCustomObjectDefinitionParam = {
    id: string;
};
type ExportCustomObjectEntriesParam = {
    definitionId: string;
};
type GetCustomFieldDefinitionParam = {
    id: string;
};
type GetCustomFieldDefinitionsParam = {
    pageNo: string;
    pageSize: string;
    resources?: string;
    types?: string;
    search?: string;
    slugs?: string;
};
type GetCustomFieldJobsParam = {
    page: string;
    pageSize: string;
    actionType: string;
};
type GetCustomFieldsParam = {
    resource: string;
};
type GetCustomFieldsByResourceIdParam = {
    resource: string;
    resourceId: string;
};
type GetCustomObjectParam = {
    id: string;
};
type GetCustomObjectDefinitionParam = {
    id: string;
};
type GetCustomObjectDefinitionsParam = {
    pageNo: string;
    pageSize: string;
    search?: string;
};
type GetCustomObjectsParam = {
    definitionId?: string;
    pageNo: string;
    pageSize: string;
};
type GetJobsParam = {
    page: string;
    pageSize: string;
    actionType: string;
};
type ImportCustomObjectEntriesParam = {
    definitionId: string;
    body: ContentPlatformModel.CustomObjectBulkSchema;
};
type SampleCustomObjectBulkEntryParam = {
    definitionId: string;
};
type UpdateCustomFieldByResourceIdParam = {
    resource: string;
    resourceId: string;
    body: ContentPlatformModel.CustomFieldRequestSchema;
};
type UpdateCustomFieldDefinitionParam = {
    id: string;
    body: ContentPlatformModel.CustomFieldDefinitionRequestSchema;
};
type UpdateCustomObjectParam = {
    id: string;
    body: ContentPlatformModel.CustomObjectRequestSchema;
};
type UpdateCustomObjectDefinitionParam = {
    id: string;
    body: ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema;
};
type GetCustomFieldTypesParam = any;
type GetResourcesParam = any;
import ContentPlatformModel = require("./ContentPlatformModel");
