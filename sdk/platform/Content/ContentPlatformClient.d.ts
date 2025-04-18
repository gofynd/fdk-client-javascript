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
     * @description: You can create custom fields definition to any resource so you can extend property of resource. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createCustomFieldDefinition/).
     */
    createCustomFieldDefinition({ body, requestHeaders }?: ContentPlatformValidator.CreateCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformValidator.CreateCustomObjectParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectSchema>} - Success response
     * @name createCustomObject
     * @summary: Create custom object entries
     * @description: Custom object entries against the custom object definition can be added using this API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createCustomObject/).
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
     * @description: Create a custom object that will have a collection of custom fields and can be used anywhere in the custom field for any resource. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createCustomObjectDefinition/).
     */
    createCustomObjectDefinition({ body, requestHeaders }?: ContentPlatformValidator.CreateCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSchema>;
    /**
     * @param {ContentPlatformValidator.DeleteCustomFieldDefinitionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
     * @name deleteCustomFieldDefinition
     * @summary: Delete custom fields definition
     * @description: Custom field definition and its assosiated custom fields value can be deleted using this api on the basis of definition id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomFieldDefinition/).
     */
    deleteCustomFieldDefinition({ id, requestHeaders }?: ContentPlatformValidator.DeleteCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomDataDeleteSchema>;
    /**
     * @param {ContentPlatformValidator.DeleteCustomFieldsByResourceIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsDeleteSchema>} -
     *   Success response
     * @name deleteCustomFieldsByResourceId
     * @summary: Delete custom fields of given resource and resource id
     * @description: Use this API to delete the custom fields for given resource in param. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomFieldsByResourceId/).
     */
    deleteCustomFieldsByResourceId({ resource, resourceId, ids, requestHeaders }?: ContentPlatformValidator.DeleteCustomFieldsByResourceIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsDeleteSchema>;
    /**
     * @param {ContentPlatformValidator.DeleteCustomObjectParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
     * @name deleteCustomObject
     * @summary: Delete custom object
     * @description: Custom object entries can be deleted by providing the delete ID using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomObject/).
     */
    deleteCustomObject({ id, requestHeaders }?: ContentPlatformValidator.DeleteCustomObjectParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomDataDeleteSchema>;
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
     * @summary: delete custom object definition
     * @description: Custom object definitions can be deleted using this endpoint by providing the definition ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteCustomObjectDefinition/).
     */
    deleteCustomObjectDefinition({ id, requestHeaders }?: ContentPlatformValidator.DeleteCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema>;
    /**
     * @param {ContentPlatformValidator.ExportCustomObjectEntriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntryInitiateDownload>}
     *   - Success response
     *
     * @name exportCustomObjectEntries
     * @summary: Initiate download for bulk custom object entries
     * @description: Custom object bulk export of bulk entries can be perform using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/exportCustomObjectEntries/).
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
     * @summary: Get custom fields definition
     * @description: Custom field definitions can be fetch using definition id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldDefinition/).
     */
    getCustomFieldDefinition({ id, requestHeaders }?: ContentPlatformValidator.GetCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldDefinitionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>} -
     *   Success response
     * @name getCustomFieldDefinitions
     * @summary: Get custom fields definitions
     * @description: Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldDefinitions/).
     */
    getCustomFieldDefinitions({ pageNo, pageSize, resources, types, search, slugs, requestHeaders }?: ContentPlatformValidator.GetCustomFieldDefinitionsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldJobsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldBulkEntry>} - Success response
     * @name getCustomFieldJobs
     * @summary: Fetch bulk import and export job list.
     * @description: Use this api to get list of jobs of bulk import and exports - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldJobs/).
     */
    getCustomFieldJobs({ page, pageSize, actionType, requestHeaders }?: ContentPlatformValidator.GetCustomFieldJobsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldBulkEntry>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldTypesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.MetafieldTypesSchema>} - Success response
     * @name getCustomFieldTypes
     * @summary: Get custom field types
     * @description: Each custom field and custom field definition has a type, which defines the type of information that it can store. The custom field types have built-in validation. This api will give list of supported custom fields types - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldTypes/).
     */
    getCustomFieldTypes({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.MetafieldTypesSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsResponseSchema>} -
     *   Success response
     * @name getCustomFields
     * @summary: Get list of custom fields of given resource
     * @description: Retrieves a list of custom fields attached to a particular resource by using the resource. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFields/).
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
     * @description: Retrieves a list of custom fields attached to a particular resource by using the resource and resource id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomFieldsByResourceId/).
     */
    getCustomFieldsByResourceId({ resource, resourceId, requestHeaders }?: ContentPlatformValidator.GetCustomFieldsByResourceIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomObjectParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectByIdSchema>} - Success response
     * @name getCustomObject
     * @summary: Get custom object details
     * @description: Details of custom objects, their field details, definitions, and references can be obtained using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObject/).
     */
    getCustomObject({ id, requestHeaders }?: ContentPlatformValidator.GetCustomObjectParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectByIdSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomObjectDefinitionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSchema>} -
     *   Success response
     * @name getCustomObjectDefinition
     * @summary: Get custom object definition
     * @description: Custom object definitions can be fetched using their definition ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObjectDefinition/).
     */
    getCustomObjectDefinition({ id, requestHeaders }?: ContentPlatformValidator.GetCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomObjectDefinitionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionsSchema>} -
     *   Success response
     * @name getCustomObjectDefinitions
     * @summary: Get custom object definitions
     * @description: Custom object definition lists can be obtained using this endpoint - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObjectDefinitions/).
     */
    getCustomObjectDefinitions({ pageNo, pageSize, search, requestHeaders }?: ContentPlatformValidator.GetCustomObjectDefinitionsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionsSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomObjectsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectsSchema>} - Success response
     * @name getCustomObjects
     * @summary: Get list of custom objects
     * @description: Custom object entries can fetch using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getCustomObjects/).
     */
    getCustomObjects({ pageNo, pageSize, definitionId, requestHeaders }?: ContentPlatformValidator.GetCustomObjectsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectsSchema>;
    /**
     * @param {ContentPlatformValidator.GetJobsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntry>} - Success response
     * @name getJobs
     * @summary: Get bulk import and export job list
     * @description: Custom object bulk import and export jobs status and details can be obtained using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getJobs/).
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
     * @description: Custom object bulk import of bulk entries can be performed using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/importCustomObjectEntries/).
     */
    importCustomObjectEntries({ definitionId, body, requestHeaders }?: ContentPlatformValidator.ImportCustomObjectEntriesParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectEntryBulkUploadResponse>;
    /**
     * @param {ContentPlatformValidator.SampleCustomObjectBulkEntryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name sampleCustomObjectBulkEntry
     * @summary: Download sample for custom object bulk entry
     * @description: Sample files for custom object bulk import can be obtained from this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/sampleCustomObjectBulkEntry/).
     */
    sampleCustomObjectBulkEntry({ definitionId, requestHeaders }?: ContentPlatformValidator.SampleCustomObjectBulkEntryParam, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {ContentPlatformValidator.UpdateCustomFieldByResourceIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
     *   - Success response
     *
     * @name updateCustomFieldByResourceId
     * @summary: Update custom field entries for gives resource and resource_id
     * @description: You can edit a custom field using this endpoint to any resource by providing the resource ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomFieldByResourceId/).
     */
    updateCustomFieldByResourceId({ resource, resourceId, body, requestHeaders }?: ContentPlatformValidator.UpdateCustomFieldByResourceIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {ContentPlatformValidator.UpdateCustomFieldDefinitionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
     *   - Success response
     *
     * @name updateCustomFieldDefinition
     * @summary: Update custom field definition
     * @description: Custom fields definition can be update using this api, You can update custom field definition name and description. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomFieldDefinition/).
     */
    updateCustomFieldDefinition({ id, body, requestHeaders }?: ContentPlatformValidator.UpdateCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformValidator.UpdateCustomObjectParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectSchema>} - Success response
     * @name updateCustomObject
     * @summary: Update custom object details
     * @description: Custom object entries can be updated using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomObject/).
     */
    updateCustomObject({ id, body, requestHeaders }?: ContentPlatformValidator.UpdateCustomObjectParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectSchema>;
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
     * @description: Custom object definitions can be updated using this endpoint. You can update the name and description of the custom object and add more custom field definitions to the existing custom object. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateCustomObjectDefinition/).
     */
    updateCustomObjectDefinition({ id, body, requestHeaders }?: ContentPlatformValidator.UpdateCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSchema>;
}
import ContentPlatformValidator = require("./ContentPlatformValidator");
import ContentPlatformModel = require("./ContentPlatformModel");
