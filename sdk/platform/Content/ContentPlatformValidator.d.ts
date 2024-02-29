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
 * @property {string} definitionId
 */
/**
 * @typedef DeleteCustomObjectParam
 * @property {string} metaobjectId
 */
/**
 * @typedef DeleteCustomObjectDefinitionParam
 * @property {string} definitionId
 */
/**
 * @typedef ExportCustomObjectEntriesParam
 * @property {string} definitionId
 */
/**
 * @typedef GetCustomFieldDefinitionParam
 * @property {string} definitionId
 */
/**
 * @typedef GetCustomFieldDefinitionsParam
 * @property {string} pageNo
 * @property {string} pageSize
 * @property {string} [resources]
 * @property {string} [types]
 * @property {string} [search]
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
 * @property {string} metaobjectId
 */
/**
 * @typedef GetCustomObjectDefinitionParam
 * @property {string} definitionId
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
 * @typedef UpdateCustomFieldDefinitionParam
 * @property {string} definitionId
 * @property {ContentPlatformModel.CustomFieldDefinitionRequestSchema} body
 */
/**
 * @typedef UpdateCustomObjectParam
 * @property {string} metaobjectId
 * @property {ContentPlatformModel.CustomObjectRequestSchema} body
 */
/**
 * @typedef UpdateCustomObjectDefinitionParam
 * @property {string} definitionId
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
    /** @returns {UpdateCustomFieldDefinitionParam} */
    static updateCustomFieldDefinition(): UpdateCustomFieldDefinitionParam;
    /** @returns {UpdateCustomObjectParam} */
    static updateCustomObject(): UpdateCustomObjectParam;
    /** @returns {UpdateCustomObjectDefinitionParam} */
    static updateCustomObjectDefinition(): UpdateCustomObjectDefinitionParam;
}
declare namespace ContentPlatformValidator {
    export { CreateCustomFieldByResourceIdParam, CreateCustomFieldDefinitionParam, CreateCustomObjectParam, CreateCustomObjectDefinitionParam, DeleteCustomFieldDefinitionParam, DeleteCustomObjectParam, DeleteCustomObjectDefinitionParam, ExportCustomObjectEntriesParam, GetCustomFieldDefinitionParam, GetCustomFieldDefinitionsParam, GetCustomFieldTypesParam, GetCustomFieldsParam, GetCustomFieldsByResourceIdParam, GetCustomObjectParam, GetCustomObjectDefinitionParam, GetCustomObjectDefinitionsParam, GetCustomObjectsParam, GetJobsParam, GetResourcesParam, ImportCustomObjectEntriesParam, SampleCustomObjectBulkEntryParam, UpdateCustomFieldDefinitionParam, UpdateCustomObjectParam, UpdateCustomObjectDefinitionParam };
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
    definitionId: string;
};
type DeleteCustomObjectParam = {
    metaobjectId: string;
};
type DeleteCustomObjectDefinitionParam = {
    definitionId: string;
};
type ExportCustomObjectEntriesParam = {
    definitionId: string;
};
type GetCustomFieldDefinitionParam = {
    definitionId: string;
};
type GetCustomFieldDefinitionsParam = {
    pageNo: string;
    pageSize: string;
    resources?: string;
    types?: string;
    search?: string;
};
type GetCustomFieldsParam = {
    resource: string;
};
type GetCustomFieldsByResourceIdParam = {
    resource: string;
    resourceId: string;
};
type GetCustomObjectParam = {
    metaobjectId: string;
};
type GetCustomObjectDefinitionParam = {
    definitionId: string;
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
type UpdateCustomFieldDefinitionParam = {
    definitionId: string;
    body: ContentPlatformModel.CustomFieldDefinitionRequestSchema;
};
type UpdateCustomObjectParam = {
    metaobjectId: string;
    body: ContentPlatformModel.CustomObjectRequestSchema;
};
type UpdateCustomObjectDefinitionParam = {
    definitionId: string;
    body: ContentPlatformModel.CustomObjectDefinitionUpdateRequestSchema;
};
type GetCustomFieldTypesParam = any;
type GetResourcesParam = any;
import ContentPlatformModel = require("./ContentPlatformModel");
