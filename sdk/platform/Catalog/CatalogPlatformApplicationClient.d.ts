export = Catalog;
declare class Catalog {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {CatalogPlatformApplicationValidator.AddCollectionItemsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CommonResponseSchemaCollection>}
     *   - Success response
     *
     * @name addCollectionItems
     * @summary: Add items to a collection
     * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/addCollectionItems/).
     */
    addCollectionItems({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.AddCollectionItemsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CommonResponseSchemaCollection>;
    /**
     * @param {CatalogPlatformApplicationValidator.AddProductsInPriceFactoryByZoneIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreatePriceFactoryProductResponseSchema>}
     *   - Success response
     *
     * @name addProductsInPriceFactoryByZoneId
     * @summary: Add products to price factory
     * @description: This API allows to add products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/addProductsInPriceFactoryByZoneId/).
     */
    addProductsInPriceFactoryByZoneId({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.AddProductsInPriceFactoryByZoneIdParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreatePriceFactoryProductResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.ClearCollectionItemsPriorityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CommonResponseSchemaCollection>}
     *   - Success response
     *
     * @name clearCollectionItemsPriority
     * @summary: Clear priorities set for collection items.
     * @description: Clear priorities set for collection items. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/clearCollectionItemsPriority/).
     */
    clearCollectionItemsPriority({ id, requestHeaders }?: CatalogPlatformApplicationValidator.ClearCollectionItemsPriorityParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CommonResponseSchemaCollection>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateAppCategoryReturnConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1Schema>} - Success response
     * @name createAppCategoryReturnConfiguration
     * @summary: Create Category level Application Return Configuration setttings
     * @description: Create Category level Application Return Configuration setttings - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createAppCategoryReturnConfiguration/).
     */
    createAppCategoryReturnConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateAppCategoryReturnConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1Schema>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateAppPriceFactoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryResponseSchema>}
     *   - Success response
     *
     * @name createAppPriceFactory
     * @summary: Create price factory
     * @description: This API allows to create price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createAppPriceFactory/).
     */
    createAppPriceFactory({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateAppPriceFactoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateAppPriceFactoryResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateAppReturnConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1Schema>} - Success response
     * @name createAppReturnConfiguration
     * @summary: Create Return configuration level set for an application
     * @description: Create Return configuration level set for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createAppReturnConfiguration/).
     */
    createAppReturnConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateAppReturnConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1Schema>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateAutocompleteSettingsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AutocompleteUpsertResponseSchema>}
     *   - Success response
     *
     * @name createAutocompleteSettings
     * @summary: Create autocomplete settings config for an application
     * @description: This API allows to create autocomplete settings for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createAutocompleteSettings/).
     */
    createAutocompleteSettings({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateAutocompleteSettingsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AutocompleteUpsertResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateCollectionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CollectionCreateResponseSchema>}
     *   - Success response
     *
     * @name createCollection
     * @summary: Add a Collection
     * @description: Create a collection to the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCollection/).
     */
    createCollection({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateCollectionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CollectionCreateResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateConfigurationByTypeParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
     *   Success response
     * @name createConfigurationByType
     * @summary: Create configuration by type.
     * @description: Add configuration for categories & brands. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createConfigurationByType/).
     */
    createConfigurationByType({ type, body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateConfigurationByTypeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAppCatalogConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateConfigurationProductListingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
     *   Success response
     * @name createConfigurationProductListing
     * @summary: Create configuration for product listing.
     * @description: Add configuration for products & listing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createConfigurationProductListing/).
     */
    createConfigurationProductListing({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateConfigurationProductListingParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAppCatalogConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateCustomAutocompleteRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateAutocompleteWordsResponseSchema>}
     *   - Success response
     *
     * @name createCustomAutocompleteRule
     * @summary: Create custom autocomplete rules.
     * @description: Generate and add custom autocomplete rules to the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCustomAutocompleteRule/).
     */
    createCustomAutocompleteRule({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateCustomAutocompleteRuleParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateAutocompleteWordsResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateCustomKeywordParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
     * @name createCustomKeyword
     * @summary: Create custom search keywords.
     * @description: Create a Custom Search Keywords.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createCustomKeyword/).
     */
    createCustomKeyword({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateCustomKeywordParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetSearchWordsData>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateGroupConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppConfigurationDetail>} - Success response
     * @name createGroupConfiguration
     * @summary: Create group configuration.
     * @description: Create configuration for group configuration types. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createGroupConfiguration/).
     */
    createGroupConfiguration({ configType, body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateGroupConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AppConfigurationDetail>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateListingConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppConfigurationsFilterResponseSchema>}
     *   - Success response
     *
     * @name createListingConfiguration
     * @summary: Create listing configuration.
     * @description: Add configuration for catalog listing. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createListingConfiguration/).
     */
    createListingConfiguration({ configType, body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateListingConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AppConfigurationsFilterResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateMerchandisingRuleBoostActionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
     *   Success response
     * @name createMerchandisingRuleBoostAction
     * @summary: Create Merchandising Rule's Boost action details
     * @description: This allows you to create Boost action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMerchandisingRuleBoostAction/).
     */
    createMerchandisingRuleBoostAction({ merchandisingRuleId, body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateMerchandisingRuleBoostActionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseMerchandising>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateMerchandisingRuleBuryActionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
     *   Success response
     * @name createMerchandisingRuleBuryAction
     * @summary: Get Merchandising Rule's Bury action details
     * @description: This allows you to create Bury action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMerchandisingRuleBuryAction/).
     */
    createMerchandisingRuleBuryAction({ merchandisingRuleId, body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateMerchandisingRuleBuryActionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseMerchandising>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateMerchandisingRuleHideActionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
     *   Success response
     * @name createMerchandisingRuleHideAction
     * @summary: Create Merchandising Rule's Hide action details
     * @description: This allows you to create hide action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMerchandisingRuleHideAction/).
     */
    createMerchandisingRuleHideAction({ merchandisingRuleId, body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateMerchandisingRuleHideActionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseMerchandising>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateMerchandisingRulePinActionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
     *   Success response
     * @name createMerchandisingRulePinAction
     * @summary: Create Merchandising Rule's action details
     * @description: This allows you to create pin action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMerchandisingRulePinAction/).
     */
    createMerchandisingRulePinAction({ merchandisingRuleId, body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateMerchandisingRulePinActionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseMerchandising>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateMerchandisingRuleQueryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.MerchandiseQueryResponseSchema>}
     *   - Success response
     *
     * @name createMerchandisingRuleQuery
     * @summary: Create a Merchandising Rule's query
     * @description: This allows you to Create a merchandising rule's query. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createMerchandisingRuleQuery/).
     */
    createMerchandisingRuleQuery({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateMerchandisingRuleQueryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.MerchandiseQueryResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateProductPriceFactoryBulkJobParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobResponseSchema>}
     *   - Success response
     *
     * @name createProductPriceFactoryBulkJob
     * @summary: Add products in price factory in bulk
     * @description: This API allows to create bulk job for adding products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createProductPriceFactoryBulkJob/).
     */
    createProductPriceFactoryBulkJob({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateProductPriceFactoryBulkJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateSearchConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateSearchConfigurationResponseSchema>}
     *   - Success response
     *
     * @name createSearchConfiguration
     * @summary: Create search configuration
     * @description: Create search configuration for the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createSearchConfiguration/).
     */
    createSearchConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateSearchConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateSearchConfigurationResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateSearchRerankParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateSearchRerankResponseSchema>}
     *   - Success response
     *
     * @name createSearchRerank
     * @summary: Create search rerank for an application
     * @description: This view allows you to create search rerank attributes for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createSearchRerank/).
     */
    createSearchRerank({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateSearchRerankParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateSearchRerankResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.CreateSynonymsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SynonymCreateResponseSchema>} -
     *   Success response
     * @name createSynonyms
     * @summary: create oneway/ twoway search synonyms for an application
     * @description: This view allows you to create search synonyms for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/createSynonyms/).
     */
    createSynonyms({ body, requestHeaders }?: CatalogPlatformApplicationValidator.CreateSynonymsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SynonymCreateResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteAppCategoryReturnConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
     * @name deleteAppCategoryReturnConfiguration
     * @summary: Delete Category level Application Return Configuration setttings
     * @description: Delete Category level Application Return Configuration setttings - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteAppCategoryReturnConfiguration/).
     */
    deleteAppCategoryReturnConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteAppCategoryReturnConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteAutocompleteKeywordParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DeleteResponseSchema>} - Success response
     * @name deleteAutocompleteKeyword
     * @summary: Delete autocomplete keywords.
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteAutocompleteKeyword/).
     */
    deleteAutocompleteKeyword({ id, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteAutocompleteKeywordParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.DeleteResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteCollectionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CommonResponseSchemaCollection>}
     *   - Success response
     *
     * @name deleteCollection
     * @summary: Delete a collection.
     * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteCollection/).
     */
    deleteCollection({ id, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteCollectionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CommonResponseSchemaCollection>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteGroupConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<any>} - Success response
     * @name deleteGroupConfiguration
     * @summary: Delete group configuration.
     * @description: Delete configuration of the product config type of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteGroupConfiguration/).
     */
    deleteGroupConfiguration({ configType, groupSlug, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteGroupConfigurationParam, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteListingConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponseSchema>} -
     *   Success response
     * @name deleteListingConfiguration
     * @summary: Delete listing configuration.
     * @description: Remove a specific listing configuration from the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteListingConfiguration/).
     */
    deleteListingConfiguration({ configType, configId, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteListingConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ConfigSuccessResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteMerchandisingRuleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
     *   Success response
     * @name deleteMerchandisingRule
     * @summary: Delete a Merchandising Rule
     * @description: This allows you to Update a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteMerchandisingRule/).
     */
    deleteMerchandisingRule({ merchandisingRuleId, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteMerchandisingRuleParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseMerchandising>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteMerchandisingRulesPreviewParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
     *   Success response
     * @name deleteMerchandisingRulesPreview
     * @summary: Delete a Merchandising Rule's preview
     * @description: This allows you to Update a merchandising rule's preview. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteMerchandisingRulesPreview/).
     */
    deleteMerchandisingRulesPreview({ merchandisingRuleId, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteMerchandisingRulesPreviewParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseMerchandising>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteSearchConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DeleteSearchConfigurationResponseSchema>}
     *   - Success response
     *
     * @name deleteSearchConfiguration
     * @summary: Delete Search Configuration
     * @description: Delete search configuration in the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSearchConfiguration/).
     */
    deleteSearchConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.DeleteSearchConfigurationResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteSearchKeywordsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DeleteResponseSchema>} - Success response
     * @name deleteSearchKeywords
     * @summary: Delete search keywords.
     * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSearchKeywords/).
     */
    deleteSearchKeywords({ id, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteSearchKeywordsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.DeleteResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteSearchRerankConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DeleteSearchRerankConfigurationResponseSchema>}
     *   - Success response
     *
     * @name deleteSearchRerankConfiguration
     * @summary: Delete search rerank configuration for an application
     * @description: This view allows you to delete search rerank configuration for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSearchRerankConfiguration/).
     */
    deleteSearchRerankConfiguration({ id, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteSearchRerankConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.DeleteSearchRerankConfigurationResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.DeleteSynonymParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SynonymDeleteResponseSchemaSchema>}
     *   - Success response
     *
     * @name deleteSynonym
     * @summary: Delete synonym for an application.
     * @description: This view allows you to delete synonym for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/deleteSynonym/).
     */
    deleteSynonym({ id, requestHeaders }?: CatalogPlatformApplicationValidator.DeleteSynonymParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SynonymDeleteResponseSchemaSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.EditAppPriceFactoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppPriceFactory>} - Success response
     * @name editAppPriceFactory
     * @summary: Edit a price factory
     * @description: This API allows to update price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/editAppPriceFactory/).
     */
    editAppPriceFactory({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.EditAppPriceFactoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AppPriceFactory>;
    /**
     * @param {CatalogPlatformApplicationValidator.ExportProductsInPriceFactoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductExportJobResponseSchema>}
     *   - Success response
     *
     * @name exportProductsInPriceFactory
     * @summary: Export products of price factory.
     * @description: This API allows to export products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/exportProductsInPriceFactory/).
     */
    exportProductsInPriceFactory({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.ExportProductsInPriceFactoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateAppPriceFactoryProductExportJobResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.ExportSynonymsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SynonymExportResponseSchema>} -
     *   Success response
     * @name exportSynonyms
     * @summary: Export synonym for an application.
     * @description: This API allows you to start a job creates a csv file containing all the synonyms for that application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/exportSynonyms/).
     */
    exportSynonyms({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.SynonymExportResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAllCollectionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetCollectionListingResponseSchema>}
     *   - Success response
     *
     * @name getAllCollections
     * @summary: Retrieve all collections.
     * @description: A Collection allows you to organize your products into hierarchical groups. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAllCollections/).
     */
    getAllCollections({ q, scheduleStatus, type, tag, isActive, pageNo, pageSize, requestHeaders, }?: CatalogPlatformApplicationValidator.GetAllCollectionsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetCollectionListingResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAllSearchKeywordParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsResponseSchema>} -
     *   Success response
     * @name getAllSearchKeyword
     * @summary: Get all search keywords.
     * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAllSearchKeyword/).
     */
    getAllSearchKeyword({ pageNo, pageSize, q, isActive, requestHeaders }?: CatalogPlatformApplicationValidator.GetAllSearchKeywordParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetSearchWordsResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppCategoryReturnConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BaseAppCategoryReturnConfigResponseSchema>}
     *   - Success response
     *
     * @name getAppCategoryReturnConfig
     * @summary: Get all category level configuration level set for an application
     * @description: Get all category level configuration level set for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppCategoryReturnConfig/).
     */
    getAppCategoryReturnConfig({ q, pageNo, pageSize, requestHeaders }?: CatalogPlatformApplicationValidator.GetAppCategoryReturnConfigParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BaseAppCategoryReturnConfigResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppInventoryParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.InventoryStockResponseSchema>} -
     *   Success response
     * @name getAppInventory
     * @summary: Get application inventory.
     * @description: Retrieve inventory data related to the sales channel. this can be used  to get the Inventory status of products. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppInventory/).
     */
    getAppInventory({ itemIds, storeIds, brandIds, sellerIdentifiers, timestamp, pageSize, pageId, qtyGt, qtyLt, qtyType, fromDate, toDate, requestHeaders, }?: CatalogPlatformApplicationValidator.GetAppInventoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.InventoryStockResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppLocationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.LocationListSchema>} - Success response
     * @name getAppLocations
     * @summary: Get application locations.
     * @description: Retrieve all stores associated with a sales channel, with support for searching by store name and filtering by store type and status. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppLocations/).
     */
    getAppLocations({ storeType, uid, q, stage, pageNo, pageSize, tags, storeTypes, companyUids, requestHeaders, }?: CatalogPlatformApplicationValidator.GetAppLocationsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.LocationListSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.storeType] - Helps to sort the location list on the
     *   basis of location type.
     * @param {number[]} [arg.uid] - Helps to sort the location list on the
     *   basis of uid list.
     * @param {string} [arg.q] - Query that is to be searched.
     * @param {string} [arg.stage] - To filter companies on basis of verified or
     *   unverified companies.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 20.
     * @param {string[]} [arg.tags] - Get locations filtered by tags.
     * @param {string[]} [arg.storeTypes] - Get locations filtered by store types.
     * @param {number[]} [arg.companyUids] - Filter stores by company IDs
     *   available in the application.
     * @returns {Paginator<CatalogPlatformModel.LocationListSchema>}
     * @summary: Get application locations.
     * @description: Retrieve all stores associated with a sales channel, with support for searching by store name and filtering by store type and status.
     */
    getAppLocationsPaginator({ companyId, applicationId, storeType, uid, q, stage, pageSize, tags, storeTypes, companyUids, }?: {
        companyId: number;
        applicationId: string;
        storeType?: string;
        uid?: number[];
        q?: string;
        stage?: string;
        pageSize?: number;
        tags?: string[];
        storeTypes?: string[];
        companyUids?: number[];
    }): Paginator<CatalogPlatformModel.LocationListSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppPriceByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppPriceByIdResponseSchema>} -
     *   Success response
     * @name getAppPriceById
     * @summary: Get pricing of a product
     * @description: Retrieve the discounted price of a specific product for a given application. This endpoint allows filtering by stores, factory types, and sellers - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppPriceById/).
     */
    getAppPriceById({ itemId, storeIds, factoryTypeIds, sellerId, requestHeaders }?: CatalogPlatformApplicationValidator.GetAppPriceByIdParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AppPriceByIdResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppPriceFactoriesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAppPriceFactoryResponseSchema>}
     *   - Success response
     *
     * @name getAppPriceFactories
     * @summary: Get price factory
     * @description: This API allows to get price factories. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppPriceFactories/).
     */
    getAppPriceFactories({ isActive, factoryTypeId, code, pageNo, pageSize, requestHeaders }?: CatalogPlatformApplicationValidator.GetAppPriceFactoriesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAppPriceFactoryResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppPriceFactoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppPriceFactory>} - Success response
     * @name getAppPriceFactory
     * @summary: Get price factory
     * @description: This API allows to get price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppPriceFactory/).
     */
    getAppPriceFactory({ id, requestHeaders }?: CatalogPlatformApplicationValidator.GetAppPriceFactoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AppPriceFactory>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppProductParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.OwnerAppItemResponseSchema>} -
     *   Success response
     * @name getAppProduct
     * @summary: Retrieve application product data.
     * @description: Products are the core resource of an application. If successful, returns a Company Application Product resource in the response body depending upon filter sent. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppProduct/).
     */
    getAppProduct({ itemId, requestHeaders }?: CatalogPlatformApplicationValidator.GetAppProductParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.OwnerAppItemResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppProductPricesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductPrices>} - Success response
     * @name getAppProductPrices
     * @summary: Get product prices
     * @description: This API allows to get product prices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppProductPrices/).
     */
    getAppProductPrices({ itemIds, factoryTypeIds, pageNo, pageSize, requestHeaders }?: CatalogPlatformApplicationValidator.GetAppProductPricesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductPrices>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppProductsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.RawProductListingResponseSchema>}
     *   - Success response
     *
     * @name getAppProducts
     * @summary: Get application products.
     * @description: Retrieve products specific to the application. Products are the core resource of an application. Products can be associated by categories, collections, brands and more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppProducts/).
     */
    getAppProducts({ brandIds, categoryIds, departmentIds, tags, itemIds, pageNo, pageSize, q, requestHeaders, }?: CatalogPlatformApplicationValidator.GetAppProductsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.RawProductListingResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAppReturnConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppReturnConfigResponseSchema>} -
     *   Success response
     * @name getAppReturnConfiguration
     * @summary: Get Return configuration level set for an application
     * @description: Get Product Return configuration set at an application level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAppReturnConfiguration/).
     */
    getAppReturnConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.AppReturnConfigResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetApplicationBrandListingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ApplicationBrandListingSchema>} -
     *   Success response
     * @name getApplicationBrandListing
     * @summary: Get application brand listing.
     * @description: Retrieve brand listings related to the application. A brand is the name under which a product is being sold - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationBrandListing/).
     */
    getApplicationBrandListing({ pageNo, pageSize, q, requestHeaders }?: CatalogPlatformApplicationValidator.GetApplicationBrandListingParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ApplicationBrandListingSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @returns {Paginator<CatalogPlatformModel.ApplicationBrandListingSchema>}
     * @summary: Get application brand listing.
     * @description: Retrieve brand listings related to the application. A brand is the name under which a product is being sold
     */
    getApplicationBrandListingPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator<CatalogPlatformModel.ApplicationBrandListingSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetApplicationBrandsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.BrandListingResponseSchema>} -
     *   Success response
     * @name getApplicationBrands
     * @summary: Get application brands.
     * @description: List all the brands. A brand is the name under which a product is being sold. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationBrands/).
     */
    getApplicationBrands({ department, pageNo, pageSize, q, brandId, requestHeaders }?: CatalogPlatformApplicationValidator.GetApplicationBrandsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.BrandListingResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.department] - The name of the department. Use this
     *   parameter to filter products by a particular department. See below the
     *   list of available departments. You can retrieve available departments
     *   from the **v1.0/departments/** API
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @param {number[]} [arg.brandId] - Helps to sort the brands list on the
     *   basis of uid list.
     * @returns {Paginator<CatalogPlatformModel.BrandListingResponseSchema>}
     * @summary: Get application brands.
     * @description: List all the brands. A brand is the name under which a product is being sold.
     */
    getApplicationBrandsPaginator({ companyId, applicationId, department, pageSize, q, brandId, }?: {
        companyId: number;
        applicationId: string;
        department?: string;
        pageSize?: number;
        q?: string;
        brandId?: number[];
    }): Paginator<CatalogPlatformModel.BrandListingResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetApplicationCategoryListingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ApplicationCategoryListingSchema>}
     *   - Success response
     *
     * @name getApplicationCategoryListing
     * @summary: Get application category listing.
     * @description: Retrieve category listings related to the application. A brand is the name under which a product is being sold. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationCategoryListing/).
     */
    getApplicationCategoryListing({ departmentId, pageNo, pageSize, q, requestHeaders }?: CatalogPlatformApplicationValidator.GetApplicationCategoryListingParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ApplicationCategoryListingSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.departmentId] - A `department_id` is a unique
     *   identifier for a particular department.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search brands by brand name.
     * @returns {Paginator<CatalogPlatformModel.ApplicationCategoryListingSchema>}
     * @summary: Get application category listing.
     * @description: Retrieve category listings related to the application. A brand is the name under which a product is being sold.
     */
    getApplicationCategoryListingPaginator({ companyId, applicationId, departmentId, pageSize, q, }?: {
        companyId: number;
        applicationId: string;
        departmentId?: number;
        pageSize?: number;
        q?: string;
    }): Paginator<CatalogPlatformModel.ApplicationCategoryListingSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetApplicationDepartmentListingParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ApplicationDepartmentListingResponseSchema>}
     *   - Success response
     *
     * @name getApplicationDepartmentListing
     * @summary: Get application department listing.
     * @description: Retrieve department listings related to the application. Departments are a way to categorise similar products. A product can lie in multiple departments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationDepartmentListing/).
     */
    getApplicationDepartmentListing({ pageNo, pageSize, q, requestHeaders }?: CatalogPlatformApplicationValidator.GetApplicationDepartmentListingParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ApplicationDepartmentListingResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string} [arg.q] - Search query with brand name.Use this parameter
     *   to search department by name.
     * @returns {Paginator<CatalogPlatformModel.ApplicationDepartmentListingResponseSchema>}
     * @summary: Get application department listing.
     * @description: Retrieve department listings related to the application. Departments are a way to categorise similar products. A product can lie in multiple departments.
     */
    getApplicationDepartmentListingPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: number;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator<CatalogPlatformModel.ApplicationDepartmentListingResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetApplicationFilterKeysParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetQueryFiltersKeysResponseSchema>}
     *   - Success response
     *
     * @name getApplicationFilterKeys
     * @summary: Get filters keys of the filter options.
     * @description: Get query filters keys to configure a collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationFilterKeys/).
     */
    getApplicationFilterKeys({ c, requestHeaders }?: CatalogPlatformApplicationValidator.GetApplicationFilterKeysParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetQueryFiltersKeysResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetApplicationFilterValuesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetQueryFiltersValuesResponseSchema>}
     *   - Success response
     *
     * @name getApplicationFilterValues
     * @summary: Get values of the selected value for the filter options.
     * @description: Get query filters keys to configure a collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationFilterValues/).
     */
    getApplicationFilterValues({ filterKey, c, collectionId, pageNo, pageSize, q, requestHeaders }?: CatalogPlatformApplicationValidator.GetApplicationFilterValuesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetQueryFiltersValuesResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetApplicationProductsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ApplicationProductListingResponseSchema>}
     *   - Success response
     *
     * @name getApplicationProducts
     * @summary: Get application products.
     * @description: Retrieve products associated with the application. List all the products associated with a brand, collection or category in a requested sort order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getApplicationProducts/).
     */
    getApplicationProducts({ q, f, c, filters, isDependent, sortOn, pageId, pageSize, pageNo, pageType, itemIds, requestHeaders, }?: CatalogPlatformApplicationValidator.GetApplicationProductsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ApplicationProductListingResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - A `company_id` is a unique identifier for
     *   a particular seller account.
     * @param {string} arg.applicationId - A `application_id` is a unique
     *   identifier for a particular sale channel.
     * @param {string} [arg.q] - The search query. This can be a partial or
     *   complete name of a either a product, brand or category
     * @param {string} [arg.f] - The search filter parameters. All the parameter
     *   filtered from filter parameters will be passed in **f** parameter in
     *   this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
     * @param {string} [arg.c] - The search filter parameters for collection
     *   items. All the parameter filtered from filter parameters will be passed
     *   in "c" parameter in this format.
     *   "?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts"
     * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
     *   filter details. This flag is used to fetch all filters
     * @param {boolean} [arg.isDependent] - This query parameter is used to get
     *   the dependent products in the listing.
     * @param {string} [arg.sortOn] - The order to sort the list of products on.
     *   The supported sort parameters are popularity, price, redemption and
     *   discount in either ascending or descending order. See the supported
     *   values below.
     * @param {number} [arg.pageSize] - Number of items to retrieve in each
     *   page. Default is 12.
     * @param {string[]} [arg.itemIds] - Item Ids of product
     * @returns {Paginator<CatalogPlatformModel.ApplicationProductListingResponseSchema>}
     * @summary: Get application products.
     * @description: Retrieve products associated with the application. List all the products associated with a brand, collection or category in a requested sort order.
     */
    getApplicationProductsPaginator({ companyId, applicationId, q, f, c, filters, isDependent, sortOn, pageSize, itemIds, }?: {
        companyId: number;
        applicationId: string;
        q?: string;
        f?: string;
        c?: string;
        filters?: boolean;
        isDependent?: boolean;
        sortOn?: string;
        pageSize?: number;
        itemIds?: string[];
    }): Paginator<CatalogPlatformModel.ApplicationProductListingResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAutocompleteConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsResponseSchema>}
     *   - Success response
     *
     * @name getAutocompleteConfig
     * @summary: Get autocomplete configuration.
     * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAutocompleteConfig/).
     */
    getAutocompleteConfig({ pageNo, pageSize, q, isActive, requestHeaders }?: CatalogPlatformApplicationValidator.GetAutocompleteConfigParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAutocompleteWordsResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAutocompleteKeywordDetailParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsData>} -
     *   Success response
     * @name getAutocompleteKeywordDetail
     * @summary: Get autocomplete keyword details.
     * @description: Retrieve detailed information about a specific autocomplete keyword. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAutocompleteKeywordDetail/).
     */
    getAutocompleteKeywordDetail({ id, requestHeaders }?: CatalogPlatformApplicationValidator.GetAutocompleteKeywordDetailParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAutocompleteWordsData>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAutocompletePreviewParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AutocompletePreviewResponseSchema>}
     *   - Success response
     *
     * @name getAutocompletePreview
     * @summary: Get autocomplete suggestions as per config for an application
     * @description: This API allows to get autocomplete suggestions as per config. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAutocompletePreview/).
     */
    getAutocompletePreview({ q, categorySuggestion, brandSuggestion, collectionSuggestion, productSuggestion, querySuggestion, requestHeaders, }?: CatalogPlatformApplicationValidator.GetAutocompletePreviewParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AutocompletePreviewResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetAutocompleteSettingsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AutocompleteResponseSchema>} -
     *   Success response
     * @name getAutocompleteSettings
     * @summary: Get autocomplete settings config for an application
     * @description: This API allows to get autocomplete settings config for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getAutocompleteSettings/).
     */
    getAutocompleteSettings({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.AutocompleteResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCatalogConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetCatalogConfigurationMetaData>}
     *   - Success response
     *
     * @name getCatalogConfiguration
     * @summary: Retrieve catalog configuration.
     * @description: Retrieve configuration meta details for the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCatalogConfiguration/).
     */
    getCatalogConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetCatalogConfigurationMetaData>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCatalogInsightsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CatalogInsightResponseSchema>} -
     *   Success response
     * @name getCatalogInsights
     * @summary: Get catalog insights.
     * @description: Retrieve the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCatalogInsights/).
     */
    getCatalogInsights({ brand, requestHeaders }?: CatalogPlatformApplicationValidator.GetCatalogInsightsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CatalogInsightResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCategoriesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CategoryListingResponseSchema>} -
     *   Success response
     * @name getCategories
     * @summary: Get categories.
     * @description: Retrieve a list of categories. Optionally pass filter the brands by the department. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCategories/).
     */
    getCategories({ department, requestHeaders }?: CatalogPlatformApplicationValidator.GetCategoriesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CategoryListingResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCollectionDetailParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetCollectionDetailResponseSchema>}
     *   - Success response
     *
     * @name getCollectionDetail
     * @summary: Get collection details.
     * @description: Get the details of a collection by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCollectionDetail/).
     */
    getCollectionDetail({ slug, requestHeaders }?: CatalogPlatformApplicationValidator.GetCollectionDetailParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetCollectionDetailResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetCollectionItemsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetCollectionItemsResponseSchema>}
     *   - Success response
     *
     * @name getCollectionItems
     * @summary: Get the items for a collection
     * @description: Get items from a collection specified by its `id`. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getCollectionItems/).
     */
    getCollectionItems({ id, sortOn, pageSize, pageNo, isPinned, q, isExcluded, requestHeaders, }?: CatalogPlatformApplicationValidator.GetCollectionItemsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetCollectionItemsResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetConfigurationByTypeParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogEntityConfiguration>}
     *   - Success response
     *
     * @name getConfigurationByType
     * @summary: Retrieve configuration by type.
     * @description: Retrieve configuration details based on a specific type in the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurationByType/).
     */
    getConfigurationByType({ type, requestHeaders }?: CatalogPlatformApplicationValidator.GetConfigurationByTypeParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAppCatalogEntityConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetConfigurationMetadataParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetConfigMetadataResponseSchema>}
     *   - Success response
     *
     * @name getConfigurationMetadata
     * @summary: Retrieve configuration metadata.
     * @description: Retrieve the configuraion metadata details for catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurationMetadata/).
     */
    getConfigurationMetadata({ configType, templateSlug, requestHeaders }?: CatalogPlatformApplicationValidator.GetConfigurationMetadataParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetConfigMetadataResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetConfigurationsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAppCatalogConfiguration>} -
     *   Success response
     * @name getConfigurations
     * @summary: Retrieve configurations.
     * @description: Retrieve a configured details for catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurations/).
     */
    getConfigurations({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAppCatalogConfiguration>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetConfigurationsFilterMetadataParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.FilterResponseSchema>} - Success response
     * @name getConfigurationsFilterMetadata
     * @summary: Get filter details for application
     * @description: configured details for catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getConfigurationsFilterMetadata/).
     */
    getConfigurationsFilterMetadata({ filter, requestHeaders }?: CatalogPlatformApplicationValidator.GetConfigurationsFilterMetadataParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.FilterResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetDepartmentsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.DepartmentResponseSchema>} -
     *   Success response
     * @name getDepartments
     * @summary: Get departments.
     * @description: Retrieve a list of departments. Departments are a way to categorise similar products. A product can lie in multiple departments. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getDepartments/).
     */
    getDepartments({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.DepartmentResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetDiscountedInventoryBySizeIdentifierParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ApplicationInventorySellerIdentifierResponsePaginated>}
     *   - Success response
     *
     * @name getDiscountedInventoryBySizeIdentifier
     * @summary: Get discounted inventory by size identifier.
     * @description: Allows to retrieve Inventory data for particular company grouped by size and store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getDiscountedInventoryBySizeIdentifier/).
     */
    getDiscountedInventoryBySizeIdentifier({ itemId, sizeIdentifier, pageNo, pageSize, locationIds, requestHeaders, }?: CatalogPlatformApplicationValidator.GetDiscountedInventoryBySizeIdentifierParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ApplicationInventorySellerIdentifierResponsePaginated>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetGroupConfigurationsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetConfigResponseSchema>} - Success response
     * @name getGroupConfigurations
     * @summary: Retrieve group configurations.
     * @description: Retrieve the details of the application configured configurations of group config types. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getGroupConfigurations/).
     */
    getGroupConfigurations({ configType, pageNo, pageSize, search, templateSlug, requestHeaders }?: CatalogPlatformApplicationValidator.GetGroupConfigurationsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetConfigResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetListingConfigurationsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetListingConfigResponseSchema>}
     *   - Success response
     *
     * @name getListingConfigurations
     * @summary: Retrieve listing configurations.
     * @description: Retrieve the details of the application configured configurations of listing config types. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getListingConfigurations/).
     */
    getListingConfigurations({ configType, pageNo, pageSize, search, uids, requestHeaders }?: CatalogPlatformApplicationValidator.GetListingConfigurationsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetListingConfigResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetLivePreviewParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductListingResponseSchema>} -
     *   Success response
     * @name getLivePreview
     * @summary: Get live preview of a Merchandising Rule
     * @description: This allows you to get live preview of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getLivePreview/).
     */
    getLivePreview({ merchandisingRuleId, searchKeyword, requestHeaders }?: CatalogPlatformApplicationValidator.GetLivePreviewParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductListingResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetMerchandisingQueryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SearchResponseSchema>} - Success response
     * @name getMerchandisingQuery
     * @summary: Get Merchandising Rule's query details
     * @description: This allows you to get details of a merchandising rule's query. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMerchandisingQuery/).
     */
    getMerchandisingQuery({ merchandisingRuleId, requestHeaders }?: CatalogPlatformApplicationValidator.GetMerchandisingQueryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SearchResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetMerchandisingRuleBoostActionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetMerchandisingRuleBoostAction>}
     *   - Success response
     *
     * @name getMerchandisingRuleBoostAction
     * @summary: Get Merchandising Rule's Boost action details
     * @description: This allows you to get details of Boost action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMerchandisingRuleBoostAction/).
     */
    getMerchandisingRuleBoostAction({ merchandisingRuleId, requestHeaders }?: CatalogPlatformApplicationValidator.GetMerchandisingRuleBoostActionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetMerchandisingRuleBoostAction>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetMerchandisingRuleBuryActionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetMerchandisingRuleBuryAction>}
     *   - Success response
     *
     * @name getMerchandisingRuleBuryAction
     * @summary: Get Merchandising Rule's Bury action details
     * @description: This allows you to get details of Bury action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMerchandisingRuleBuryAction/).
     */
    getMerchandisingRuleBuryAction({ merchandisingRuleId, requestHeaders }?: CatalogPlatformApplicationValidator.GetMerchandisingRuleBuryActionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetMerchandisingRuleBuryAction>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetMerchandisingRuleHideActionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.HideResponseSchema>} - Success response
     * @name getMerchandisingRuleHideAction
     * @summary: Get Merchandising Rule's Hide action details
     * @description: This allows you to get details of hide action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMerchandisingRuleHideAction/).
     */
    getMerchandisingRuleHideAction({ merchandisingRuleId, requestHeaders }?: CatalogPlatformApplicationValidator.GetMerchandisingRuleHideActionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.HideResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetMerchandisingRulePinActionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.PinResponseSchema>} - Success response
     * @name getMerchandisingRulePinAction
     * @summary: Get Merchandising Rule's action details
     * @description: This allows you to get details of pin action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMerchandisingRulePinAction/).
     */
    getMerchandisingRulePinAction({ merchandisingRuleId, requestHeaders }?: CatalogPlatformApplicationValidator.GetMerchandisingRulePinActionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.PinResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetMerchandisingRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.MerchandisingRulesList>} - Success response
     * @name getMerchandisingRules
     * @summary: Get list of all Merchandising Rule's details
     * @description: This allows you to get details of all merchandising rule's details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getMerchandisingRules/).
     */
    getMerchandisingRules({ pageId, pageSize, requestHeaders }?: CatalogPlatformApplicationValidator.GetMerchandisingRulesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.MerchandisingRulesList>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetProductDetailBySlugParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ProductDetail>} - Success response
     * @name getProductDetailBySlug
     * @summary: Get product details by slug.
     * @description: Retrieve detailed product information using a product slug. Products are the core resource of an application. Products can be associated by categories, collections, brands and more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductDetailBySlug/).
     */
    getProductDetailBySlug({ slug, requestHeaders }?: CatalogPlatformApplicationValidator.GetProductDetailBySlugParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ProductDetail>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetProductsInPriceFactoryByZoneIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductsResponseSchema>}
     *   - Success response
     *
     * @name getProductsInPriceFactoryByZoneId
     * @summary: Get products listed in price factory
     * @description: This API allows to get products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getProductsInPriceFactoryByZoneId/).
     */
    getProductsInPriceFactoryByZoneId({ id, zoneId, itemId, q, pageNo, pageSize, requestHeaders }?: CatalogPlatformApplicationValidator.GetProductsInPriceFactoryByZoneIdParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateAppPriceFactoryProductsResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetQueryFiltersParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetQueryFiltersResponseSchema>} -
     *   Success response
     * @name getQueryFilters
     * @summary: Retrieve query filters.
     * @description: Retrieve query filters to configure a collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getQueryFilters/).
     */
    getQueryFilters({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetQueryFiltersResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetSearchConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchConfigurationResponseSchema>}
     *   - Success response
     *
     * @name getSearchConfiguration
     * @summary: Get Search Configuration
     * @description: Get search configuration in the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSearchConfiguration/).
     */
    getSearchConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetSearchConfigurationResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetSearchKeywordsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
     * @name getSearchKeywords
     * @summary: Retrieve search keywords.
     * @description: Retrieve a list of search keywords from the catalog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSearchKeywords/).
     */
    getSearchKeywords({ id, requestHeaders }?: CatalogPlatformApplicationValidator.GetSearchKeywordsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetSearchWordsData>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetSearchRerankParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchRerankResponseSchema>} -
     *   Success response
     * @name getSearchRerank
     * @summary: Get search rerank for an application
     * @description: This view allows you to create search rerank attributes for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSearchRerank/).
     */
    getSearchRerank({ requestHeaders }?: any, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetSearchRerankResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetSearchRerankDetailParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchRerankDetailResponseSchema>}
     *   - Success response
     *
     * @name getSearchRerankDetail
     * @summary: Get search rerank for an application
     * @description: This view allows you to retrieve search rerank attribute detail for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSearchRerankDetail/).
     */
    getSearchRerankDetail({ id, requestHeaders }?: CatalogPlatformApplicationValidator.GetSearchRerankDetailParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetSearchRerankDetailResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.GetSynonymsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SynonymListResponseSchema>} -
     *   Success response
     * @name getSynonyms
     * @summary: List search synonyms for an application
     * @description: This view allows you to list down the available synonyms for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/getSynonyms/).
     */
    getSynonyms({ id, name, type, requestHeaders }?: CatalogPlatformApplicationValidator.GetSynonymsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SynonymListResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.PollBulkSynonymsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SynonymBulkPollResponseSchema>} -
     *   Success response
     * @name pollBulkSynonyms
     * @summary: poll a particular synonym bulk job for status
     * @description: This view allows you to poll for the status of the respective bulk upload job - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/pollBulkSynonyms/).
     */
    pollBulkSynonyms({ id, requestHeaders }?: CatalogPlatformApplicationValidator.PollBulkSynonymsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SynonymBulkPollResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.PollPriceFactoryJobsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductExportJobPollResponseSchema>}
     *   - Success response
     *
     * @name pollPriceFactoryJobs
     * @summary: poll job for adding products in price factory
     * @description: This API allows to poll job for adding products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/pollPriceFactoryJobs/).
     */
    pollPriceFactoryJobs({ id, startDate, endDate, stage, isActive, q, type, requestHeaders }?: CatalogPlatformApplicationValidator.PollPriceFactoryJobsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateAppPriceFactoryProductExportJobPollResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.PollProductPriceFactoryBulkJobParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobPollResponseSchema>}
     *   - Success response
     *
     * @name pollProductPriceFactoryBulkJob
     * @summary: Poll bulk job for adding products in price factory.
     * @description: This API allows to poll bulk job for adding products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/pollProductPriceFactoryBulkJob/).
     */
    pollProductPriceFactoryBulkJob({ id, jobId, requestHeaders }?: CatalogPlatformApplicationValidator.PollProductPriceFactoryBulkJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobPollResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.ProcessBulkSynonymsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SynonymBulkProcessResponseSchema>}
     *   - Success response
     *
     * @name processBulkSynonyms
     * @summary: process csv/xls/xlsx file with synonyms and insert onto db
     * @description: This view allows you to process a list of one-way/two-way synonyms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/processBulkSynonyms/).
     */
    processBulkSynonyms({ body, requestHeaders }?: CatalogPlatformApplicationValidator.ProcessBulkSynonymsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SynonymBulkProcessResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.ProcessProductPriceFactoryBulkJobParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobResponseSchema>}
     *   - Success response
     *
     * @name processProductPriceFactoryBulkJob
     * @summary: Process bulk job for adding products in price factory.
     * @description: This API allows to process bulk job for adding products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/processProductPriceFactoryBulkJob/).
     */
    processProductPriceFactoryBulkJob({ id, jobId, body, requestHeaders }?: CatalogPlatformApplicationValidator.ProcessProductPriceFactoryBulkJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.SampleBulkSynonymsFileParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<string>} - Success response
     * @name sampleBulkSynonymsFile
     * @summary: Get sample file for bulk synonyms upload
     * @description: This api return you the sample file for bulk synonyms upload - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/sampleBulkSynonymsFile/).
     */
    sampleBulkSynonymsFile({ type, requestHeaders }?: CatalogPlatformApplicationValidator.SampleBulkSynonymsFileParam, { responseHeaders }?: object): Promise<string>;
    /**
     * @param {CatalogPlatformApplicationValidator.SaveMerchandisingRulesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
     *   Success response
     * @name saveMerchandisingRules
     * @summary: Save a Merchandising Rule
     * @description: This allows you to Save a merchandising rule's preview state. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/saveMerchandisingRules/).
     */
    saveMerchandisingRules({ merchandisingRuleId, body, requestHeaders }?: CatalogPlatformApplicationValidator.SaveMerchandisingRulesParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseMerchandising>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAllowSingleParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponseSchema>} -
     *   Success response
     * @name updateAllowSingle
     * @summary: Update 'Allow Single' setting.
     * @description: Modify allow single flag for filters of the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAllowSingle/).
     */
    updateAllowSingle({ body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAllowSingleParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ConfigSuccessResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppBrandParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1Schema>} - Success response
     * @name updateAppBrand
     * @summary: Update application brand.
     * @description: Modify data associated to a item custom meta. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppBrand/).
     */
    updateAppBrand({ brandUid, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppBrandParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1Schema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppCategoryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1Schema>} - Success response
     * @name updateAppCategory
     * @summary: Update application category.
     * @description: Modify category data related to the application. Helps to update data associated to a item custom meta. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppCategory/).
     */
    updateAppCategory({ categoryUid, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppCategoryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1Schema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppCategoryReturnConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseSchema>} - Success response
     * @name updateAppCategoryReturnConfiguration
     * @summary: Update Category level Application Return Configuration setttings
     * @description: Update Category level Application Return Configuration setttings - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppCategoryReturnConfiguration/).
     */
    updateAppCategoryReturnConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppCategoryReturnConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppDepartmentParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1Schema>} - Success response
     * @name updateAppDepartment
     * @summary: Update application department.
     * @description: Modify department data related to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppDepartment/).
     */
    updateAppDepartment({ departmentUid, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppDepartmentParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1Schema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppLocationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1Schema>} - Success response
     * @name updateAppLocation
     * @summary: Update application location.
     * @description: Modify location data related to the application. Helps to update data associated to a item custom meta - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppLocation/).
     */
    updateAppLocation({ storeUid, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppLocationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1Schema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppProductParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1Schema>} - Success response
     * @name updateAppProduct
     * @summary: Update application product data.
     * @description: Allows to update data associated to a item by its item_id for a sales - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppProduct/).
     */
    updateAppProduct({ itemId, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppProductParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1Schema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAppReturnConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponse1Schema>} - Success response
     * @name updateAppReturnConfiguration
     * @summary: Update Return configuration level set for an application
     * @description: Update Return configuration level set for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAppReturnConfiguration/).
     */
    updateAppReturnConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAppReturnConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponse1Schema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAutocompleteKeywordParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetAutocompleteWordsData>} -
     *   Success response
     * @name updateAutocompleteKeyword
     * @summary: Update autocomplete keywords.
     * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAutocompleteKeyword/).
     */
    updateAutocompleteKeyword({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAutocompleteKeywordParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetAutocompleteWordsData>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateAutocompleteSettingsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AutocompleteUpsertResponseSchema>}
     *   - Success response
     *
     * @name updateAutocompleteSettings
     * @summary: Update autocomplete settings config for an application
     * @description: This API allows to update autocomplete settings for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateAutocompleteSettings/).
     */
    updateAutocompleteSettings({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateAutocompleteSettingsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AutocompleteUpsertResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateCollectionParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.UpdateCollection>} - Success response
     * @name updateCollection
     * @summary: Update a collection
     * @description: Update a collection by it's id. On successful request, returns the updated collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateCollection/).
     */
    updateCollection({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateCollectionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.UpdateCollection>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateDefaultSortParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.ConfigSuccessResponseSchema>} -
     *   Success response
     * @name updateDefaultSort
     * @summary: Update default sorting.
     * @description: Modify the default sort key configuration for the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateDefaultSort/).
     */
    updateDefaultSort({ body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateDefaultSortParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.ConfigSuccessResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateGroupConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppConfigurationDetail>} - Success response
     * @name updateGroupConfiguration
     * @summary: Update group configuration.
     * @description: Modify the group configurations for the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateGroupConfiguration/).
     */
    updateGroupConfiguration({ configType, groupSlug, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateGroupConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AppConfigurationDetail>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateListingConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.AppConfigurationsFilterResponseSchema>}
     *   - Success response
     *
     * @name updateListingConfiguration
     * @summary: Update listing configuration.
     * @description: Modify the details and settings of an existing listing configuration. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateListingConfiguration/).
     */
    updateListingConfiguration({ configType, configId, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateListingConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.AppConfigurationsFilterResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateMerchandisingRuleBoostActionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
     *   Success response
     * @name updateMerchandisingRuleBoostAction
     * @summary: Update Merchandising Rule's Boost action details
     * @description: This allows you to update Boost action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateMerchandisingRuleBoostAction/).
     */
    updateMerchandisingRuleBoostAction({ merchandisingRuleId, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateMerchandisingRuleBoostActionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseMerchandising>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateMerchandisingRuleBuryActionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
     *   Success response
     * @name updateMerchandisingRuleBuryAction
     * @summary: Update Merchandising Rule's Bury action details
     * @description: This allows you to update Bury action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateMerchandisingRuleBuryAction/).
     */
    updateMerchandisingRuleBuryAction({ merchandisingRuleId, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateMerchandisingRuleBuryActionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseMerchandising>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateMerchandisingRuleHideActionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
     *   Success response
     * @name updateMerchandisingRuleHideAction
     * @summary: Update Merchandising Rule's Hide action details
     * @description: This allows you to update hide action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateMerchandisingRuleHideAction/).
     */
    updateMerchandisingRuleHideAction({ merchandisingRuleId, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateMerchandisingRuleHideActionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseMerchandising>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateMerchandisingRulePinActionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
     *   Success response
     * @name updateMerchandisingRulePinAction
     * @summary: Update Merchandising Rule's action details
     * @description: This allows you to update pin action of a merchandising rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateMerchandisingRulePinAction/).
     */
    updateMerchandisingRulePinAction({ merchandisingRuleId, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateMerchandisingRulePinActionParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseMerchandising>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateMerchandisingRuleQueryParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SuccessResponseMerchandising>} -
     *   Success response
     * @name updateMerchandisingRuleQuery
     * @summary: Update a Merchandising Rule's query
     * @description: This allows you to Update a merchandising rule's query. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateMerchandisingRuleQuery/).
     */
    updateMerchandisingRuleQuery({ merchandisingRuleId, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateMerchandisingRuleQueryParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SuccessResponseMerchandising>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateSearchConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.UpdateSearchConfigurationResponseSchema>}
     *   - Success response
     *
     * @name updateSearchConfiguration
     * @summary: Update search configuration for an application
     * @description: This view allows you to modify searchable attributes for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSearchConfiguration/).
     */
    updateSearchConfiguration({ body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateSearchConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.UpdateSearchConfigurationResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateSearchKeywordsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.GetSearchWordsData>} - Success response
     * @name updateSearchKeywords
     * @summary: Update search keywords.
     * @description: Update Search Keyword by its id. On successful request, returns the updated collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSearchKeywords/).
     */
    updateSearchKeywords({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateSearchKeywordsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.GetSearchWordsData>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateSearchRerankConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.UpdateSearchRerankResponseSchema>}
     *   - Success response
     *
     * @name updateSearchRerankConfiguration
     * @summary: Update search rerank for an application
     * @description: This view allows you to update search rerank attribute for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSearchRerankConfiguration/).
     */
    updateSearchRerankConfiguration({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateSearchRerankConfigurationParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.UpdateSearchRerankResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UpdateSynonymsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SynonymUpdateResponseSchema>} -
     *   Success response
     * @name updateSynonyms
     * @summary: Update synonym attributes for an application
     * @description: This view allows you to modify synonym attributes for a particular application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/updateSynonyms/).
     */
    updateSynonyms({ id, body, requestHeaders }?: CatalogPlatformApplicationValidator.UpdateSynonymsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SynonymUpdateResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.UploadSynonymsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SynonymUploadResponseSchema>} -
     *   Success response
     * @name uploadSynonyms
     * @summary: Upload csv/xls/xlsx file with synonyms
     * @description: This API allows you to upload a list of one-way/two-way synonyms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/uploadSynonyms/).
     */
    uploadSynonyms({ body, requestHeaders }?: CatalogPlatformApplicationValidator.UploadSynonymsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SynonymUploadResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.ValidateBulkSynonymsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.SynonymBulkValidateResponseSchema>}
     *   - Success response
     *
     * @name validateBulkSynonyms
     * @summary: Validate csv/xls/xlsx file with synonyms
     * @description: This view allows you to validate the file uploaded for synonyms - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/validateBulkSynonyms/).
     */
    validateBulkSynonyms({ body, requestHeaders }?: CatalogPlatformApplicationValidator.ValidateBulkSynonymsParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.SynonymBulkValidateResponseSchema>;
    /**
     * @param {CatalogPlatformApplicationValidator.ValidateProductPriceFactoryBulkJobParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobValidateResponseSchema>}
     *   - Success response
     *
     * @name validateProductPriceFactoryBulkJob
     * @summary: Validate bulk job for adding products in price factory.
     * @description: This API allows to validate bulk job for adding products in price factory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/catalog/validateProductPriceFactoryBulkJob/).
     */
    validateProductPriceFactoryBulkJob({ id, jobId, body, requestHeaders }?: CatalogPlatformApplicationValidator.ValidateProductPriceFactoryBulkJobParam, { responseHeaders }?: object): Promise<CatalogPlatformModel.CreateAppPriceFactoryProductBulkJobValidateResponseSchema>;
}
import CatalogPlatformApplicationValidator = require("./CatalogPlatformApplicationValidator");
import CatalogPlatformModel = require("./CatalogPlatformModel");
import Paginator = require("../../common/Paginator");
