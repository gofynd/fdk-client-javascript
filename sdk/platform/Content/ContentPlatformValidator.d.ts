export = ContentPlatformValidator;
/**
 * @typedef AddCompanyLanguageParam
 * @property {ContentPlatformModel.CompanyLanguageCreate} body
 */
/**
 * @typedef CreateCompanyResourceTranslationParam
 * @property {ContentPlatformModel.ResourceTranslationCreate} body
 */
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
 * @typedef DeleteCompanyLanguageParam
 * @property {string} locale
 */
/**
 * @typedef DeleteCompanyResourceTranslationParam
 * @property {string} id
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
 * @typedef GetAllResourceDefinitionsParam
 * @property {string} [translatableResourceId]
 */
/** @typedef GetAllSectionsParam */
/** @typedef GetAllTranslatableResourcesParam */
/** @typedef GetCompanyLanguagesParam */
/**
 * @typedef GetCompanyResourceTranslationParam
 * @property {string} locale
 * @property {string} type
 * @property {string} resourceId
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
/**
 * @typedef GetResourceDefinitionByIdParam
 * @property {string} id
 */
/** @typedef GetResourcesParam */
/**
 * @typedef GetSectionByIdParam
 * @property {string} id
 */
/**
 * @typedef GetTranslatableResourceByIdParam
 * @property {string} id
 */
/**
 * @typedef GetTranslatableResourcesBySectionIdParam
 * @property {string} id
 */
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
 * @typedef UpdateCompanyLanguageDefaultParam
 * @property {ContentPlatformModel.CompanyLanguageUpdate} body
 */
/**
 * @typedef UpdateCompanyResourceTranslationParam
 * @property {string} id
 * @property {ContentPlatformModel.ResourceTranslationUpdate} body
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
    /** @returns {AddCompanyLanguageParam} */
    static addCompanyLanguage(): AddCompanyLanguageParam;
    /** @returns {CreateCompanyResourceTranslationParam} */
    static createCompanyResourceTranslation(): CreateCompanyResourceTranslationParam;
    /** @returns {CreateCustomFieldDefinitionParam} */
    static createCustomFieldDefinition(): CreateCustomFieldDefinitionParam;
    /** @returns {CreateCustomObjectBySlugParam} */
    static createCustomObjectBySlug(): CreateCustomObjectBySlugParam;
    /** @returns {CreateCustomObjectDefinitionParam} */
    static createCustomObjectDefinition(): CreateCustomObjectDefinitionParam;
    /** @returns {DeleteCompanyLanguageParam} */
    static deleteCompanyLanguage(): DeleteCompanyLanguageParam;
    /** @returns {DeleteCompanyResourceTranslationParam} */
    static deleteCompanyResourceTranslation(): DeleteCompanyResourceTranslationParam;
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
    /** @returns {GetAllResourceDefinitionsParam} */
    static getAllResourceDefinitions(): GetAllResourceDefinitionsParam;
    /** @returns {GetAllSectionsParam} */
    static getAllSections(): any;
    /** @returns {GetAllTranslatableResourcesParam} */
    static getAllTranslatableResources(): any;
    /** @returns {GetCompanyLanguagesParam} */
    static getCompanyLanguages(): any;
    /** @returns {GetCompanyResourceTranslationParam} */
    static getCompanyResourceTranslation(): GetCompanyResourceTranslationParam;
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
    /** @returns {GetResourceDefinitionByIdParam} */
    static getResourceDefinitionById(): GetResourceDefinitionByIdParam;
    /** @returns {GetResourcesParam} */
    static getResources(): any;
    /** @returns {GetSectionByIdParam} */
    static getSectionById(): GetSectionByIdParam;
    /** @returns {GetTranslatableResourceByIdParam} */
    static getTranslatableResourceById(): GetTranslatableResourceByIdParam;
    /** @returns {GetTranslatableResourcesBySectionIdParam} */
    static getTranslatableResourcesBySectionId(): GetTranslatableResourcesBySectionIdParam;
    /** @returns {ImportCustomObjectEntriesBySlugParam} */
    static importCustomObjectEntriesBySlug(): ImportCustomObjectEntriesBySlugParam;
    /** @returns {SampleCustomObjectBulkEntryBySlugParam} */
    static sampleCustomObjectBulkEntryBySlug(): SampleCustomObjectBulkEntryBySlugParam;
    /** @returns {UpdateCompanyLanguageDefaultParam} */
    static updateCompanyLanguageDefault(): UpdateCompanyLanguageDefaultParam;
    /** @returns {UpdateCompanyResourceTranslationParam} */
    static updateCompanyResourceTranslation(): UpdateCompanyResourceTranslationParam;
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
    export { AddCompanyLanguageParam, CreateCompanyResourceTranslationParam, CreateCustomFieldDefinitionParam, CreateCustomObjectBySlugParam, CreateCustomObjectDefinitionParam, DeleteCompanyLanguageParam, DeleteCompanyResourceTranslationParam, DeleteCustomFieldDefinitionBySlugParam, DeleteCustomFieldsByResourceSlugParam, DeleteCustomObjectBySlugParam, DeleteCustomObjectDefinitionBySlugParam, ExportCustomObjectEntriesBySlugParam, GetAllResourceDefinitionsParam, GetAllSectionsParam, GetAllTranslatableResourcesParam, GetCompanyLanguagesParam, GetCompanyResourceTranslationParam, GetCustomFieldDefinitionByResourceParam, GetCustomFieldDefinitionBySlugParam, GetCustomFieldDefinitionsParam, GetCustomFieldTypesParam, GetCustomFieldsByResourceSlugParam, GetCustomObjectBySlugParam, GetCustomObjectDefinitionBySlugParam, GetCustomObjectDefinitionsParam, GetCustomObjectsBySlugParam, GetJobsParam, GetResourceDefinitionByIdParam, GetResourcesParam, GetSectionByIdParam, GetTranslatableResourceByIdParam, GetTranslatableResourcesBySectionIdParam, ImportCustomObjectEntriesBySlugParam, SampleCustomObjectBulkEntryBySlugParam, UpdateCompanyLanguageDefaultParam, UpdateCompanyResourceTranslationParam, UpdateCustomFieldByResourceSlugParam, UpdateCustomFieldDefinitionBySlugParam, UpdateCustomObjectBySlugParam, UpdateCustomObjectDefinitionBySlugParam };
}
type AddCompanyLanguageParam = {
    body: ContentPlatformModel.CompanyLanguageCreate;
};
type CreateCompanyResourceTranslationParam = {
    body: ContentPlatformModel.ResourceTranslationCreate;
};
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
type DeleteCompanyLanguageParam = {
    locale: string;
};
type DeleteCompanyResourceTranslationParam = {
    id: string;
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
type GetAllResourceDefinitionsParam = {
    translatableResourceId?: string;
};
type GetCompanyResourceTranslationParam = {
    locale: string;
    type: string;
    resourceId: string;
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
type GetResourceDefinitionByIdParam = {
    id: string;
};
type GetSectionByIdParam = {
    id: string;
};
type GetTranslatableResourceByIdParam = {
    id: string;
};
type GetTranslatableResourcesBySectionIdParam = {
    id: string;
};
type ImportCustomObjectEntriesBySlugParam = {
    slug: string;
    body: ContentPlatformModel.CustomObjectBulkSchema;
};
type SampleCustomObjectBulkEntryBySlugParam = {
    slug: string;
};
type UpdateCompanyLanguageDefaultParam = {
    body: ContentPlatformModel.CompanyLanguageUpdate;
};
type UpdateCompanyResourceTranslationParam = {
    id: string;
    body: ContentPlatformModel.ResourceTranslationUpdate;
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
type GetAllSectionsParam = any;
type GetAllTranslatableResourcesParam = any;
type GetCompanyLanguagesParam = any;
type GetCustomFieldTypesParam = any;
type GetResourcesParam = any;
import ContentPlatformModel = require("./ContentPlatformModel");
