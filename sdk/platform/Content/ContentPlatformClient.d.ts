export = Content;
declare class Content {
    constructor(config: any);
    config: any;
    /**
     * @param {ContentPlatformValidator.AddCompanyLanguageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name addCompanyLanguage
     * @summary: Add company language
     * @description: Add new languages to company's supported language list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/addCompanyLanguage/).
     */
    addCompanyLanguage({ body, requestHeaders }?: ContentPlatformValidator.AddCompanyLanguageParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ContentPlatformValidator.CreateCompanyResourceTranslationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ResourceTranslation>} - Success response
     * @name createCompanyResourceTranslation
     * @summary: Add company translation
     * @description: Create new translations for company resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createCompanyResourceTranslation/).
     */
    createCompanyResourceTranslation({ body, requestHeaders }?: ContentPlatformValidator.CreateCompanyResourceTranslationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.ResourceTranslation>;
    /**
     * @param {ContentPlatformValidator.CreateCustomFieldDefinitionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
     *   - Success response
     *
     * @name createCustomFieldDefinition
     * @summary: Create custom field definition for a given resource type
     * @description: You can create custom fields definition to any resource so you can extend property of resource. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createCustomFieldDefinition/).
     */
    createCustomFieldDefinition({ resource, body, requestHeaders }?: ContentPlatformValidator.CreateCustomFieldDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformValidator.CreateCustomObjectBySlugParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectSchema>} - Success response
     * @name createCustomObjectBySlug
     * @summary: Create custom object entries
     * @description: Custom object entries against the custom object definition can be added using this API. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createCustomObjectBySlug/).
     */
    createCustomObjectBySlug({ definitionSlug, body, requestHeaders }?: ContentPlatformValidator.CreateCustomObjectBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectSchema>;
    /**
     * @param {ContentPlatformValidator.CreateCustomObjectDefinitionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>}
     *   - Success response
     *
     * @name createCustomObjectDefinition
     * @summary: Create custom object definition
     * @description: Create a custom object that will have a collection of custom fields and can be used anywhere in the custom field for any resource. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/createCustomObjectDefinition/).
     */
    createCustomObjectDefinition({ body, requestHeaders }?: ContentPlatformValidator.CreateCustomObjectDefinitionParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>;
    /**
     * @param {ContentPlatformValidator.DeleteCompanyLanguageParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.OperationResponseSchema>} - Success response
     * @name deleteCompanyLanguage
     * @summary: Remove company language
     * @description: Remove a language from company's supported languages list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteCompanyLanguage/).
     */
    deleteCompanyLanguage({ locale, requestHeaders }?: ContentPlatformValidator.DeleteCompanyLanguageParam, { responseHeaders }?: object): Promise<ContentPlatformModel.OperationResponseSchema>;
    /**
     * @param {ContentPlatformValidator.DeleteCompanyResourceTranslationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.OperationResponseSchema>} - Success response
     * @name deleteCompanyResourceTranslation
     * @summary: Remove company translation
     * @description: Remove translations for company resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteCompanyResourceTranslation/).
     */
    deleteCompanyResourceTranslation({ id, requestHeaders }?: ContentPlatformValidator.DeleteCompanyResourceTranslationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.OperationResponseSchema>;
    /**
     * @param {ContentPlatformValidator.DeleteCustomFieldDefinitionBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
     * @name deleteCustomFieldDefinitionBySlug
     * @summary: Delete custom fields definition
     * @description: Custom field definition and its assosiated custom fields value can be deleted using this api on the basis of definition id. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteCustomFieldDefinitionBySlug/).
     */
    deleteCustomFieldDefinitionBySlug({ slug, resource, namespace, requestHeaders }?: ContentPlatformValidator.DeleteCustomFieldDefinitionBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomDataDeleteSchema>;
    /**
     * @param {ContentPlatformValidator.DeleteCustomFieldsByResourceSlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsDeleteSchema>} -
     *   Success response
     * @name deleteCustomFieldsByResourceSlug
     * @summary: delete custom fields of given resource and resource slug
     * @description: Use this API to delete the custom fields for given resource in param. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteCustomFieldsByResourceSlug/).
     */
    deleteCustomFieldsByResourceSlug({ resource, resourceSlug, ids, requestHeaders }?: ContentPlatformValidator.DeleteCustomFieldsByResourceSlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsDeleteSchema>;
    /**
     * @param {ContentPlatformValidator.DeleteCustomObjectBySlugParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomDataDeleteSchema>} - Success response
     * @name deleteCustomObjectBySlug
     * @summary: Delete custom object
     * @description: Custom object entries can be deleted by providing the delete ID using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteCustomObjectBySlug/).
     */
    deleteCustomObjectBySlug({ definitionSlug, slug, requestHeaders }?: ContentPlatformValidator.DeleteCustomObjectBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomDataDeleteSchema>;
    /**
     * @param {ContentPlatformValidator.DeleteCustomObjectDefinitionBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema>}
     *   - Success response
     *
     * @name deleteCustomObjectDefinitionBySlug
     * @summary: Delete custom object definition
     * @description: Custom object definitions can be deleted using this endpoint by providing the definition ID. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/deleteCustomObjectDefinitionBySlug/).
     */
    deleteCustomObjectDefinitionBySlug({ slug, requestHeaders }?: ContentPlatformValidator.DeleteCustomObjectDefinitionBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionDeleteResponseSchema>;
    /**
     * @param {ContentPlatformValidator.ExportCustomObjectEntriesBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntryInitiateDownload>}
     *   - Success response
     *
     * @name exportCustomObjectEntriesBySlug
     * @summary: Initiate download for bulk custom object entries
     * @description: Custom object bulk export of bulk entries can be perform using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/exportCustomObjectEntriesBySlug/).
     */
    exportCustomObjectEntriesBySlug({ slug, requestHeaders }?: ContentPlatformValidator.ExportCustomObjectEntriesBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectBulkEntryInitiateDownload>;
    /**
     * @param {ContentPlatformValidator.GetAllResourceDefinitionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getAllResourceDefinitions
     * @summary: Get all resource defination
     * @description: Retrieve translation schemas and configurations for resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAllResourceDefinitions/).
     */
    getAllResourceDefinitions({ translatableResourceId, requestHeaders }?: ContentPlatformValidator.GetAllResourceDefinitionsParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ContentPlatformValidator.GetAllSectionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getAllSections
     * @summary: List all translatable content sections
     * @description: Retrieve all translatable content sections for organization. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAllSections/).
     */
    getAllSections({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ContentPlatformValidator.GetAllTranslatableResourcesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getAllTranslatableResources
     * @summary: List all translatable resources
     * @description: Retrieve all translatable content resources for the company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getAllTranslatableResources/).
     */
    getAllTranslatableResources({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ContentPlatformValidator.GetCompanyLanguagesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getCompanyLanguages
     * @summary: Get company languages
     * @description: Retrieve language configurations and settings for the specified company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCompanyLanguages/).
     */
    getCompanyLanguages({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ContentPlatformValidator.GetCompanyResourceTranslationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ResourceTranslation>} - Success response
     * @name getCompanyResourceTranslation
     * @summary: Get company translations
     * @description: Fetch translations for company-level resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCompanyResourceTranslation/).
     */
    getCompanyResourceTranslation({ locale, type, resourceId, requestHeaders }?: ContentPlatformValidator.GetCompanyResourceTranslationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.ResourceTranslation>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldDefinitionByResourceParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>} -
     *   Success response
     * @name getCustomFieldDefinitionByResource
     * @summary: Get custom fields definitions for a given resource type
     * @description: Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomFieldDefinitionByResource/).
     */
    getCustomFieldDefinitionByResource({ pageNo, pageSize, resource, types, search, slugs, namespaces, requestHeaders, }?: ContentPlatformValidator.GetCustomFieldDefinitionByResourceParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldDefinitionBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.MetaFieldDefinitionDetailResSchema>}
     *   - Success response
     *
     * @name getCustomFieldDefinitionBySlug
     * @summary: Get custom fields definition by resource, slug and namespace
     * @description: Custom field definitions can be retrived from this using its slug, namespace and resource - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomFieldDefinitionBySlug/).
     */
    getCustomFieldDefinitionBySlug({ slug, resource, namespace, requestHeaders }?: ContentPlatformValidator.GetCustomFieldDefinitionBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.MetaFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldDefinitionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>} -
     *   Success response
     * @name getCustomFieldDefinitions
     * @summary: Get custom fields definitions
     * @description: Custom field definitions enable you to include data validation for custom fields, and enable sellers to add custom fields values for resources. With the help of this seller can retrive list of custom field definitions list. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomFieldDefinitions/).
     */
    getCustomFieldDefinitions({ pageNo, pageSize, resources, types, search, slugs, namespaces, requestHeaders, }?: ContentPlatformValidator.GetCustomFieldDefinitionsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionsSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldTypesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.MetafieldTypesSchema>} - Success response
     * @name getCustomFieldTypes
     * @summary: Get custom field types
     * @description: Each custom field and custom field definition has a type, which defines the type of information that it can store. The custom field types have built-in validation. This api will give list of supported custom fields types - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomFieldTypes/).
     */
    getCustomFieldTypes({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.MetafieldTypesSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomFieldsByResourceSlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
     *   - Success response
     *
     * @name getCustomFieldsByResourceSlug
     * @summary: Get list of custom fields of given resource and resource slug
     * @description: Retrieves a list of custom fields attached to a particular resource by using the resource and resource slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomFieldsByResourceSlug/).
     */
    getCustomFieldsByResourceSlug({ resource, resourceSlug, requestHeaders }?: ContentPlatformValidator.GetCustomFieldsByResourceSlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomObjectBySlugParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBySlugSchema>} -
     *   Success response
     * @name getCustomObjectBySlug
     * @summary: Get custom object details
     * @description: Details of a custom object entry can be obtained using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomObjectBySlug/).
     */
    getCustomObjectBySlug({ definitionSlug, slug, requestHeaders }?: ContentPlatformValidator.GetCustomObjectBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectBySlugSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomObjectDefinitionBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>}
     *   - Success response
     *
     * @name getCustomObjectDefinitionBySlug
     * @summary: Get custom object definition
     * @description: Custom object definitions can be fetched using their custom object definition slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomObjectDefinitionBySlug/).
     */
    getCustomObjectDefinitionBySlug({ slug, requestHeaders }?: ContentPlatformValidator.GetCustomObjectDefinitionBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomObjectDefinitionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionsSchema>} -
     *   Success response
     * @name getCustomObjectDefinitions
     * @summary: Get custom object definitions
     * @description: Custom object definition lists can be obtained using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomObjectDefinitions/).
     */
    getCustomObjectDefinitions({ pageNo, pageSize, search, requestHeaders }?: ContentPlatformValidator.GetCustomObjectDefinitionsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionsSchema>;
    /**
     * @param {ContentPlatformValidator.GetCustomObjectsBySlugParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectsSchema>} - Success response
     * @name getCustomObjectsBySlug
     * @summary: Get list of custom objects under a certain custom object definition
     * @description: Custom object entries can fetch using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getCustomObjectsBySlug/).
     */
    getCustomObjectsBySlug({ pageNo, pageSize, definitionSlug, requestHeaders }?: ContentPlatformValidator.GetCustomObjectsBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectsSchema>;
    /**
     * @param {ContentPlatformValidator.GetJobsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBulkEntry>} - Success response
     * @name getJobs
     * @summary: Get bulk import and export job list
     * @description: Custom object bulk import and export jobs status and details can be obtained using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getJobs/).
     */
    getJobs({ page, pageSize, actionType, requestHeaders }?: ContentPlatformValidator.GetJobsParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectBulkEntry>;
    /**
     * @param {ContentPlatformValidator.GetResourceDefinitionByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ResourceDefinition>} - Success response
     * @name getResourceDefinitionById
     * @summary: Get resource definitions details
     * @description: Fetch specific resource definition and its translation schema. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getResourceDefinitionById/).
     */
    getResourceDefinitionById({ id, requestHeaders }?: ContentPlatformValidator.GetResourceDefinitionByIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.ResourceDefinition>;
    /**
     * @param {ContentPlatformValidator.GetResourcesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ResourcesSchema>} - Success response
     * @name getResources
     * @summary: Get resources
     * @description: Use this API to retrieve the resources, such as products, collections, customers, selling locations, etc. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getResources/).
     */
    getResources({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPlatformModel.ResourcesSchema>;
    /**
     * @param {ContentPlatformValidator.GetSectionByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TranslatableSection>} - Success response
     * @name getSectionById
     * @summary: Retrieve details of a specific translatable section by its ID.
     * @description: Fetch details of a specific translatable section. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getSectionById/).
     */
    getSectionById({ id, requestHeaders }?: ContentPlatformValidator.GetSectionByIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TranslatableSection>;
    /**
     * @param {ContentPlatformValidator.GetTranslatableResourceByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.TranslatableResource>} - Success response
     * @name getTranslatableResourceById
     * @summary: Get translatable resource details
     * @description: Fetch details of a specific translatable resource. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getTranslatableResourceById/).
     */
    getTranslatableResourceById({ id, requestHeaders }?: ContentPlatformValidator.GetTranslatableResourceByIdParam, { responseHeaders }?: object): Promise<ContentPlatformModel.TranslatableResource>;
    /**
     * @param {ContentPlatformValidator.GetTranslatableResourcesBySectionIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getTranslatableResourcesBySectionId
     * @summary: Get section resources
     * @description: Retrieve all resources within a specific section. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/getTranslatableResourcesBySectionId/).
     */
    getTranslatableResourcesBySectionId({ id, requestHeaders }?: ContentPlatformValidator.GetTranslatableResourcesBySectionIdParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ContentPlatformValidator.ImportCustomObjectEntriesBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectEntryBulkUploadDetails>}
     *   - Success response
     *
     * @name importCustomObjectEntriesBySlug
     * @summary: Bulk custom object entries upload
     * @description: Custom object bulk import of bulk entries can be performed using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/importCustomObjectEntriesBySlug/).
     */
    importCustomObjectEntriesBySlug({ slug, body, requestHeaders }?: ContentPlatformValidator.ImportCustomObjectEntriesBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectEntryBulkUploadDetails>;
    /**
     * @param {ContentPlatformValidator.SampleCustomObjectBulkEntryBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name sampleCustomObjectBulkEntryBySlug
     * @summary: Download sample for custom object bulk entry
     * @description: Sample files for custom object bulk import can be obtained from this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/sampleCustomObjectBulkEntryBySlug/).
     */
    sampleCustomObjectBulkEntryBySlug({ slug, requestHeaders }?: ContentPlatformValidator.SampleCustomObjectBulkEntryBySlugParam, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {ContentPlatformValidator.UpdateCompanyLanguageDefaultParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CompanyLanguage>} - Success response
     * @name updateCompanyLanguageDefault
     * @summary: Set default language
     * @description: Update default language settings for the company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateCompanyLanguageDefault/).
     */
    updateCompanyLanguageDefault({ locale, body, requestHeaders }?: ContentPlatformValidator.UpdateCompanyLanguageDefaultParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CompanyLanguage>;
    /**
     * @param {ContentPlatformValidator.UpdateCompanyResourceTranslationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.ResourceTranslation>} - Success response
     * @name updateCompanyResourceTranslation
     * @summary: Update company translation
     * @description: Update existing translations for company resources. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateCompanyResourceTranslation/).
     */
    updateCompanyResourceTranslation({ id, body, requestHeaders }?: ContentPlatformValidator.UpdateCompanyResourceTranslationParam, { responseHeaders }?: object): Promise<ContentPlatformModel.ResourceTranslation>;
    /**
     * @param {ContentPlatformValidator.UpdateCustomFieldByResourceSlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>}
     *   - Success response
     *
     * @name updateCustomFieldByResourceSlug
     * @summary: Update custom field entries for gives resource and resource slug
     * @description: You can add a custom field using this endpoint to any resource by providing the resource slug. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateCustomFieldByResourceSlug/).
     */
    updateCustomFieldByResourceSlug({ resource, resourceSlug, body, requestHeaders }?: ContentPlatformValidator.UpdateCustomFieldByResourceSlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldsResponseByResourceIdSchema>;
    /**
     * @param {ContentPlatformValidator.UpdateCustomFieldDefinitionBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>}
     *   - Success response
     *
     * @name updateCustomFieldDefinitionBySlug
     * @summary: Update custom field definition
     * @description: Custom fields definition can be update using this api, You can update custom field definition name and description. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateCustomFieldDefinitionBySlug/).
     */
    updateCustomFieldDefinitionBySlug({ slug, resource, namespace, body, requestHeaders }?: ContentPlatformValidator.UpdateCustomFieldDefinitionBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomFieldDefinitionDetailResSchema>;
    /**
     * @param {ContentPlatformValidator.UpdateCustomObjectBySlugParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectBySlugSchema>} -
     *   Success response
     * @name updateCustomObjectBySlug
     * @summary: Update custom object details
     * @description: Custom object entries can be updated using this endpoint. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateCustomObjectBySlug/).
     */
    updateCustomObjectBySlug({ definitionSlug, slug, body, requestHeaders }?: ContentPlatformValidator.UpdateCustomObjectBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectBySlugSchema>;
    /**
     * @param {ContentPlatformValidator.UpdateCustomObjectDefinitionBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>}
     *   - Success response
     *
     * @name updateCustomObjectDefinitionBySlug
     * @summary: Update custom object definition
     * @description: Custom object definitions can be updated using this endpoint. You can update the name and description of the custom object and add more custom field definitions to the existing custom object. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/content/updateCustomObjectDefinitionBySlug/).
     */
    updateCustomObjectDefinitionBySlug({ slug, body, requestHeaders }?: ContentPlatformValidator.UpdateCustomObjectDefinitionBySlugParam, { responseHeaders }?: object): Promise<ContentPlatformModel.CustomObjectDefinitionSlugSchema>;
}
import ContentPlatformValidator = require("./ContentPlatformValidator");
import ContentPlatformModel = require("./ContentPlatformModel");
