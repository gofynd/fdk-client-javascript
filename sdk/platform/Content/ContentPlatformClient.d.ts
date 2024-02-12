export = Content;
declare class Content {
    constructor(config: any);
    config: any;
    /**
     * @param {ContentPlatformValidator.CreateCustomFieldByResourceIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
     *   - Success response
     *
     * @name createCustomFieldByResourceId
     * @summary: Create custom field entries for gives resource and resource_id
     * @description: Use this API to create the custom field entry for given resource and resource_id in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createCustomFieldByResourceId/).
     */
    createCustomFieldByResourceId({ resource, resourceId, body, requestHeaders }?: ContentPlatformValidator.CreateCustomFieldByResourceIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {ContentPlatformValidator.CreateCustomFieldDefinitionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
     *   - Success response
     *
     * @name createCustomFieldDefinition
     * @summary: Create custom field definition
     * @description: Use this API to create a custom field definition for your application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createCustomFieldDefinition/).
     */
    createCustomFieldDefinition({ body, requestHeaders }?: ContentPlatformValidator.CreateCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformValidator.CreateCustomObjectParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectSchema>} - Success response
     * @name createCustomObject
     * @summary: Create custom object entries
     * @description: Use this API to create the custom object entry. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createCustomObject/).
     */
    createCustomObject({ body, requestHeaders }?: ContentPlatformValidator.CreateCustomObjectParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectSchema>;
    /**
     * @param {ContentPlatformValidator.CreateCustomObjectDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSchema>} -
     *   Success response
     * @name createCustomObjectDefinition
     * @summary: Create custom object definition
     * @description: Use this API to create custom object defintion - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createCustomObjectDefinition/).
     */
    createCustomObjectDefinition({ body, requestHeaders }?: ContentPlatformValidator.CreateCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSchema>;
    /**
     * @param {ContentPlatformValidator.DeleteCustomFieldDefinitionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
     * @name deleteCustomFieldDefinition
     * @summary: Delete custom fields definition.
     * @description: Use this API to delete the definitions of custom fields using definition_id. This will also delete related custom fields entries related to this definition. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomFieldDefinition/).
     */
    deleteCustomFieldDefinition({ definitionId, requestHeaders }?: ContentPlatformValidator.DeleteCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomDataDeleteSchema>;
    /**
     * @param {ContentPlatformValidator.DeleteCustomObjectParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
     * @name deleteCustomObject
     * @summary: Delete custom object
     * @description: Use this API to delete the custom object entry by id. This will also delete related custom fields entries related to this custom object. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomObject/).
     */
    deleteCustomObject({ metaobjectId, requestHeaders }?: ContentPlatformValidator.DeleteCustomObjectParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomDataDeleteSchema>;
    /**
     * @param {ContentPlatformValidator.DeleteCustomObjectDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema>}
     *   - Success response
     *
     * @name deleteCustomObjectDefinition
     * @summary: delete custom object definition by id
     * @description: Use this API to delete a custom object definition and related data for your application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomObjectDefinition/).
     */
    deleteCustomObjectDefinition({ definitionId, requestHeaders }?: ContentPlatformValidator.DeleteCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema>;
    /**
     * @param {ContentPlatformValidator.ExportCustomObjectEntriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntryInitiateDownload>}
     *   - Success response
     *
     * @name exportCustomObjectEntries
     * @summary: Initiate download for bulk custom object entries
     * @description: Use this api to initiate download of bulk entries - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/exportCustomObjectEntries/).
     */
    exportCustomObjectEntries({ definitionId, requestHeaders }?: ContentPlatformValidator.ExportCustomObjectEntriesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectBulkEntryInitiateDownload>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldDefinitionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
     *   - Success response
     *
     * @name getCustomFieldDefinition
     * @summary: Get custom fields definition by id
     * @description: Use this API to retrieve the definitions of custom fields using definition_id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldDefinition/).
     */
    getCustomFieldDefinition({ definitionId, requestHeaders }?: ContentPlatformValidator.GetCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldDefinitionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>} -
     *   Success response
     * @name getCustomFieldDefinitions
     * @summary: Get custom fields definitions
     * @description: Use this API to retrieve the definitions of custom fields. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldDefinitions/).
     */
    getCustomFieldDefinitions({ pageNo, pageSize, resource, type, search, requestHeaders }?: ContentPlatformValidator.GetCustomFieldDefinitionsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldTypesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectByIdSchema>} - Success response
     * @name getCustomFieldTypes
     * @summary: Get custom field types
     * @description: Use this API to retrieve the custom field types  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldTypes/).
     */
    getCustomFieldTypes({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectByIdSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsResponseSchema>} -
     *   Success response
     * @name getCustomFields
     * @summary: Get list of custom fields of given resource
     * @description: Use this API to retrieve the custom fields for given resource in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFields/).
     */
    getCustomFields({ resource, requestHeaders }?: ContentPlatformValidator.GetCustomFieldsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsResponseSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldsByResourceIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
     *   - Success response
     *
     * @name getCustomFieldsByResourceId
     * @summary: Get list of custom fields of given resource and resource id
     * @description: Use this API to retrieve the custom fields for given resource in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldsByResourceId/).
     */
    getCustomFieldsByResourceId({ resource, resourceId, requestHeaders }?: ContentPlatformValidator.GetCustomFieldsByResourceIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomObjectParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectByIdSchema>} - Success response
     * @name getCustomObject
     * @summary: Get custom object details
     * @description: Use this API to retrieve the custom object details and their fields details and definitions and references. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObject/).
     */
    getCustomObject({ metaobjectId, requestHeaders }?: ContentPlatformValidator.GetCustomObjectParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectByIdSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomObjectDefinitionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSchema>} -
     *   Success response
     * @name getCustomObjectDefinition
     * @summary: get custom object definition by id
     * @description: Use this API to update a custom object definition for your application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObjectDefinition/).
     */
    getCustomObjectDefinition({ definitionId, requestHeaders }?: ContentPlatformValidator.GetCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomObjectDefinitionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionsSchema>} -
     *   Success response
     * @name getCustomObjectDefinitions
     * @summary: Get custom object definitions
     * @description: Use this API to retrieve the custom object definitions - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObjectDefinitions/).
     */
    getCustomObjectDefinitions({ pageNo, pageSize, search, requestHeaders }?: ContentPlatformValidator.GetCustomObjectDefinitionsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionsSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomObjectsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectsSchema>} - Success response
     * @name getCustomObjects
     * @summary: Get list of custom objects
     * @description: Use this API to retrieve the custom objects. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObjects/).
     */
    getCustomObjects({ pageNo, pageSize, definitionId, requestHeaders }?: ContentPlatformValidator.GetCustomObjectsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectsSchema>;
    /**
     * @param {ContentPlatformValidator.GetJobsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntry>} - Success response
     * @name getJobs
     * @summary: Fetch bulk import and export job list.
     * @description: Use this api to get list of jobs of bulk import and exports - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getJobs/).
     */
    getJobs({ page, pageSize, actionType, requestHeaders }?: ContentPlatformValidator.GetJobsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectBulkEntry>;
    /**
     * @param {ContentPlatformValidator.GetResourcesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ResourcesSchema>} - Success response
     * @name getResources
     * @summary: Get resources
     * @description: Use this API to retrieve the resources, such as products, collections, customers, selling locations, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getResources/).
     */
    getResources({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.ResourcesSchema>;
    /**
     * @param {ContentPlatformValidator.ImportCustomObjectEntriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectEntryBulkUploadResponse>}
     *   - Success response
     *
     * @name importCustomObjectEntries
     * @summary: Bulk custom object entries upload
     * @description: Use this API to upload custom object entries - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/importCustomObjectEntries/).
     */
    importCustomObjectEntries({ definitionId, body, requestHeaders }?: ContentPlatformValidator.ImportCustomObjectEntriesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectEntryBulkUploadResponse>;
    /**
     * @param {ContentPlatformValidator.SampleCustomObjectBulkEntryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name sampleCustomObjectBulkEntry
     * @summary: download sample for custom object bulk entry
     * @description: Use this api to get sample csv file  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/sampleCustomObjectBulkEntry/).
     */
    sampleCustomObjectBulkEntry({ definitionId, requestHeaders }?: ContentPlatformValidator.SampleCustomObjectBulkEntryParam, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {ContentPlatformValidator.UpdateCustomFieldDefinitionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
     *   - Success response
     *
     * @name updateCustomFieldDefinition
     * @summary: Update custom field definition
     * @description: Use this API to update a custom field definition for your application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomFieldDefinition/).
     */
    updateCustomFieldDefinition({ definitionId, body, requestHeaders }?: ContentPlatformValidator.UpdateCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformValidator.UpdateCustomObjectParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectByIdSchema>} - Success response
     * @name updateCustomObject
     * @summary: Update custom object details
     * @description: Use this API to update a custom object detail for your application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomObject/).
     */
    updateCustomObject({ metaobjectId, body, requestHeaders }?: ContentPlatformValidator.UpdateCustomObjectParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectByIdSchema>;
    /**
     * @param {ContentPlatformValidator.UpdateCustomObjectDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSchema>} -
     *   Success response
     * @name updateCustomObjectDefinition
     * @summary: Update custom object definition
     * @description: Use this API to update a custom object definition for your application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomObjectDefinition/).
     */
    updateCustomObjectDefinition({ definitionId, body, requestHeaders }?: ContentPlatformValidator.UpdateCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSchema>;
}
import ContentPlatformValidator = require("./ContentPlatformValidator");
import ContentPlatformModel = require("./ContentPlatformModel");
