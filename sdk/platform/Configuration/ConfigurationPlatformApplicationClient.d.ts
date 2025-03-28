export = Configuration;
declare class Configuration {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {ConfigurationPlatformApplicationValidator.AddDomainParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.Domain>} - Success response
     * @name addDomain
     * @summary: Add domain.
     * @description: Add a new domain. Add a new domain to current sales channel, including pre-defined domain (free domain) or custom domain (owned by the brand) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/addDomain/).
     */
    addDomain({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.AddDomainParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.Domain>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.ChangeDomainTypeParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DomainsResponseSchema>} -
     *   Success response
     * @name changeDomainType
     * @summary: Change domain type.
     * @description: Modify the type of a specific domain. Primary domain is used as the URL of your website. Short link domain is comparatively smaller and used while generating short links. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/changeDomainType/).
     */
    changeDomainType({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.ChangeDomainTypeParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DomainsResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.CreateAppCurrencyConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.AppSupportedCurrency>} -
     *   Success response
     * @name createAppCurrencyConfig
     * @summary: Update application currency configuration.
     * @description: Modify currency configuration settings for the application. Add and edit the currencies supported in the application. Initially, INR will be enabled by default. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/createAppCurrencyConfig/).
     */
    createAppCurrencyConfig({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.CreateAppCurrencyConfigParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.AppSupportedCurrency>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.CreateTokensParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.Application>} - Success response
     * @name createTokens
     * @summary: Create tokens for application
     * @description: Create new tokens for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/createTokens/).
     */
    createTokens({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.Application>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.CreateUrlRedirectionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.UrlRedirection>} - Success response
     * @name createUrlRedirection
     * @summary: Create a URL redirection
     * @description: Creates a new URL redirection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/createUrlRedirection/).
     */
    createUrlRedirection({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.CreateUrlRedirectionParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.UrlRedirection>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.DeleteTokenParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.Application>} - Success response
     * @name deleteToken
     * @summary: Delete tokens for application
     * @description: Delete new tokens for an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/deleteToken/).
     */
    deleteToken({ token, requestHeaders }?: ConfigurationPlatformApplicationValidator.DeleteTokenParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.Application>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.DeleteUrlRedirectionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponseSchema>}
     *   - Success response
     *
     * @name deleteUrlRedirection
     * @summary: Delete a URL redirection
     * @description: Delete a URL redirection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/deleteUrlRedirection/).
     */
    deleteUrlRedirection({ redirectionDomainId, requestHeaders }?: ConfigurationPlatformApplicationValidator.DeleteUrlRedirectionParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.SuccessMessageResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppApiTokensParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.TokenResponseSchema>} -
     *   Success response
     * @name getAppApiTokens
     * @summary: Get application API tokens.
     * @description: Retrieve the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google, and Facebook auth. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppApiTokens/).
     */
    getAppApiTokens({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.TokenResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppBasicDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationDetail>} - Success response
     * @name getAppBasicDetails
     * @summary: Get application basic details.
     * @description: Shows basic sales channel details like name, description, logo, domain, company ID, and other related information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppBasicDetails/).
     */
    getAppBasicDetails({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ApplicationDetail>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppCompaniesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CompaniesResponseSchema>} -
     *   Success response
     * @name getAppCompanies
     * @summary: Get application companies.
     * @description: Retrieve info of all the companies (e.g. name, uid, and company type) whose inventory is fetched into the current sales channel application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppCompanies/).
     */
    getAppCompanies({ uid, pageNo, pageSize, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetAppCompaniesParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.CompaniesResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Alphanumeric ID allotted to an
     *   application (sales channel website) created within a business account
     * @param {number} [arg.uid] - UID of companies to be fetched
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ConfigurationPlatformModel.CompaniesResponseSchema>}
     * @summary: Get application companies.
     * @description: Retrieve info of all the companies (e.g. name, uid, and company type) whose inventory is fetched into the current sales channel application
     */
    getAppCompaniesPaginator({ companyId, applicationId, uid, pageSize }?: {
        companyId: number;
        applicationId: string;
        uid?: number;
        pageSize?: number;
    }): Paginator<ConfigurationPlatformModel.CompaniesResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppContactInfoParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationInformation>} -
     *   Success response
     * @name getAppContactInfo
     * @summary: Get application contact information.
     * @description: Fetch data such as social links, copyright text, business highlights, address and contact information of the company/seller/brand operating the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppContactInfo/).
     */
    getAppContactInfo({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ApplicationInformation>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppCurrencyConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.AppSupportedCurrency>} -
     *   Success response
     * @name getAppCurrencyConfig
     * @summary: Get application currency configuration.
     * @description: Retrieve a list of currencies supported in the current sales channel. Moreover, get the cuurency that is set as the default one in the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppCurrencyConfig/).
     */
    getAppCurrencyConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.AppSupportedCurrency>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppFeaturesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.AppFeatureResponseSchema>}
     *   - Success response
     *
     * @name getAppFeatures
     * @summary: Get application features.
     * @description: Shows feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppFeatures/).
     */
    getAppFeatures({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.AppFeatureResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppStoresParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.StoresResponseSchema>} -
     *   Success response
     * @name getAppStores
     * @summary: Get application stores.
     * @description: Retrieve information of all the companies (e.g. uid, name, display name, store type, store code and company id) whose inventory is fetched into the current sales channel application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppStores/).
     */
    getAppStores({ pageNo, pageSize, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetAppStoresParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.StoresResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Alphanumeric ID allotted to an
     *   application (sales channel website) created within a business account
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ConfigurationPlatformModel.StoresResponseSchema>}
     * @summary: Get application stores.
     * @description: Retrieve information of all the companies (e.g. uid, name, display name, store type, store code and company id) whose inventory is fetched into the current sales channel application
     */
    getAppStoresPaginator({ companyId, applicationId, pageSize }?: {
        companyId: number;
        applicationId: string;
        pageSize?: number;
    }): Paginator<ConfigurationPlatformModel.StoresResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppSupportedCurrencyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.AppCurrencyResponseSchema>}
     *   - Success response
     *
     * @name getAppSupportedCurrency
     * @summary: Get supported currencies.
     * @description: Retrieve a list of supported currencies for the application. A list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppSupportedCurrency/).
     */
    getAppSupportedCurrency({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.AppCurrencyResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetApplicationByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.Application>} - Success response
     * @name getApplicationById
     * @summary: Get application by ID.
     * @description: Retrieve detailed information about a specific application. Use application ID to get the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, token, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getApplicationById/).
     */
    getApplicationById({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.Application>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetApplicationConfigurationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OwnerAppConfig>} - Success response
     * @name getApplicationConfiguration
     * @summary: Get Application configuration.
     * @description: Retrieve configuration details of inventory pricing_strategy. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getApplicationConfiguration/).
     */
    getApplicationConfiguration({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OwnerAppConfig>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetApplicationDomainAvailibilityParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DomainSuggestionsResponseSchema>}
     *   - Success response
     *
     * @name getApplicationDomainAvailibility
     * @summary: Get domain availability.
     * @description: Check the availability of a specific domain. Use this API to check the domain availability before linking it to application. Also sends domain suggestions that are similar to the queried domain. Note - Custom domain search is currently powered by GoDaddy provider. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getApplicationDomainAvailibility/).
     */
    getApplicationDomainAvailibility({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetApplicationDomainAvailibilityParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DomainSuggestionsResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetDomainStatusParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DomainStatusResponseSchema>}
     *   - Success response
     *
     * @name getDomainStatus
     * @summary: Get domain status.
     * @description: Retrieve the status of a specific domain. Shows if the A records and TXT records of the domain correctly points to appropriate IP on Fynd Servers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomainStatus/).
     */
    getDomainStatus({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetDomainStatusParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DomainStatusResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetDomainsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DomainsResponseSchema>} -
     *   Success response
     * @name getDomains
     * @summary: Get domains.
     * @description: Get list of domains.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomains/).
     */
    getDomains({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DomainsResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetInventoryConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationInventory>} -
     *   Success response
     * @name getInventoryConfig
     * @summary: Get inventory configuration.
     * @description: Retrieve configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getInventoryConfig/).
     */
    getInventoryConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ApplicationInventory>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetOrderingStoreConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OrderingStoreConfig>} -
     *   Success response
     * @name getOrderingStoreConfig
     * @summary: Get ordering store configuration.
     * @description: Retrieve configuration settings for ordering stores. Retrieve the details of the deployment stores (the selling locations where the application will be utilised for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOrderingStoreConfig/).
     */
    getOrderingStoreConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OrderingStoreConfig>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetOrderingStoreCookieParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponseSchema>}
     *   - Success response
     *
     * @name getOrderingStoreCookie
     * @summary: Get an Ordering Store signed cookie on selection of ordering store.
     * @description: Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOrderingStoreCookie/).
     */
    getOrderingStoreCookie({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetOrderingStoreCookieParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.SuccessMessageResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetOrderingStoresParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OrderingStores>} - Success response
     * @name getOrderingStores
     * @summary: Get all deployment stores
     * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOrderingStores/).
     */
    getOrderingStores({ pageNo, pageSize, q, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetOrderingStoresParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OrderingStores>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Alphanumeric ID allotted to an
     *   application (sales channel website) created within a business account
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @returns {Paginator<ConfigurationPlatformModel.OrderingStores>}
     * @summary: Get all deployment stores
     * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
     */
    getOrderingStoresPaginator({ companyId, applicationId, pageSize, q }?: {
        companyId: number;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator<ConfigurationPlatformModel.OrderingStores>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetOrderingStoresByFilterParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OrderingStores>} - Success response
     * @name getOrderingStoresByFilter
     * @summary: Get ordering store by filter
     * @description: Use this API to use filters and retrieve the details of the deployment stores (the selling locations where the application will be utilised for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOrderingStoresByFilter/).
     */
    getOrderingStoresByFilter({ body, pageNo, pageSize, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetOrderingStoresByFilterParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OrderingStores>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Alphanumeric ID allotted to an
     *   application (sales channel website) created within a business account
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {ConfigurationPlatformModel.FilterOrderingStoreRequestSchemaSchema} arg.body
     * @returns {Paginator<ConfigurationPlatformModel.OrderingStores>}
     * @summary: Get ordering store by filter
     * @description: Use this API to use filters and retrieve the details of the deployment stores (the selling locations where the application will be utilised for placing orders).
     */
    getOrderingStoresByFilterPaginator({ companyId, applicationId, pageSize, body, }?: {
        companyId: number;
        applicationId: string;
        pageSize?: number;
        body: ConfigurationPlatformModel.FilterOrderingStoreRequestSchemaSchema;
    }): Paginator<ConfigurationPlatformModel.OrderingStores>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetStaffOrderingStoresParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OrderingStoresResponseSchema>}
     *   - Success response
     *
     * @name getStaffOrderingStores
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getStaffOrderingStores/).
     */
    getStaffOrderingStores({ pageNo, pageSize, q, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetStaffOrderingStoresParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OrderingStoresResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Alphanumeric ID allotted to an
     *   application (sales channel website) created within a business account
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @returns {Paginator<ConfigurationPlatformModel.OrderingStoresResponseSchema>}
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
     */
    getStaffOrderingStoresPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: number;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator<ConfigurationPlatformModel.OrderingStoresResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetStoreDetailByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OrderingStore>} - Success response
     * @name getStoreDetailById
     * @summary: Get ordering store details
     * @description: Use this API to retrieve the details of given stores uid (the selling locations where the application will be utilized for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getStoreDetailById/).
     */
    getStoreDetailById({ storeId, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetStoreDetailByIdParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OrderingStore>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetUrlRedirectionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.UrlRedirection>} - Success response
     * @name getUrlRedirection
     * @summary: Get URL redirections
     * @description: Retrieves the URL redirections for a specific application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getUrlRedirection/).
     */
    getUrlRedirection({ redirectionDomainId, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetUrlRedirectionParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.UrlRedirection>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetUrlRedirectionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.UrlRedirectionResponseSchema>}
     *   - Success response
     *
     * @name getUrlRedirections
     * @summary: Get URL redirections
     * @description: Retrieves the URL redirections for a specific application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getUrlRedirections/).
     */
    getUrlRedirections({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.UrlRedirectionResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.ModifyAppFeaturesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.AppFeature>} - Success response
     * @name modifyAppFeatures
     * @summary: Modify application features.
     * @description: Update features of application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/modifyAppFeatures/).
     */
    modifyAppFeatures({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.ModifyAppFeaturesParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.AppFeature>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.PartiallyUpdateInventoryConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationInventory>} -
     *   Success response
     * @name partiallyUpdateInventoryConfig
     * @summary: Partially update inventory configuration.
     * @description: Partially update the configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/partiallyUpdateInventoryConfig/).
     */
    partiallyUpdateInventoryConfig({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.PartiallyUpdateInventoryConfigParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ApplicationInventory>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.RemoveDomainByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponseSchema>}
     *   - Success response
     *
     * @name removeDomainById
     * @summary: Remove domain by ID.
     * @description: Delete a specific domain from the application. Delete a domain (secondary or shortlink domain) added to a sales channel. It will disable user's access to website, shared links, and other features associated with this domain. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/removeDomainById/).
     */
    removeDomainById({ domainId, requestHeaders }?: ConfigurationPlatformApplicationValidator.RemoveDomainByIdParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.SuccessMessageResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.RemoveOrderingStoreCookieParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponseSchema>}
     *   - Success response
     *
     * @name removeOrderingStoreCookie
     * @summary: Unset the Ordering Store signed cookie.
     * @description: Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/removeOrderingStoreCookie/).
     */
    removeOrderingStoreCookie({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.SuccessMessageResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateAppApiTokensParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.TokenResponseSchema>} -
     *   Success response
     * @name updateAppApiTokens
     * @summary: Update application API tokens.
     * @description: Add or edit the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google and Facebook auth. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppApiTokens/).
     */
    updateAppApiTokens({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateAppApiTokensParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.TokenResponseSchema>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateAppBasicDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationDetail>} - Success response
     * @name updateAppBasicDetails
     * @summary: Update application basic details.
     * @description: Modify sales channel details like name, description, logo, domain, company ID, and other related information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppBasicDetails/).
     */
    updateAppBasicDetails({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateAppBasicDetailsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ApplicationDetail>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateAppContactInfoParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationInformation>} -
     *   Success response
     * @name updateAppContactInfo
     * @summary: Update application contact information.
     * @description: Modify the social links, copyright text, business highlights, address and contact information of the company/seller/brand operating the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppContactInfo/).
     */
    updateAppContactInfo({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateAppContactInfoParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ApplicationInformation>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateAppCurrencyConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.AppSupportedCurrency>} -
     *   Success response
     * @name updateAppCurrencyConfig
     * @summary: Update application currency configuration.
     * @description: Modify currency configuration settings for the application. Add and edit the currencies supported in the application. Initially, INR will be enabled by default. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppCurrencyConfig/).
     */
    updateAppCurrencyConfig({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateAppCurrencyConfigParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.AppSupportedCurrency>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateAppFeaturesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.AppFeature>} - Success response
     * @name updateAppFeatures
     * @summary: Update application features.
     * @description: Modify the feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppFeatures/).
     */
    updateAppFeatures({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateAppFeaturesParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.AppFeature>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateApplicationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.Application>} - Success response
     * @name updateApplication
     * @summary: Get application by ID.
     * @description: Update detailed information about a specific application. Use application ID to update the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, token, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateApplication/).
     */
    updateApplication({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateApplicationParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.Application>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateApplicationVersionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.PlatformVersion>} - Success response
     * @name updateApplicationVersion
     * @summary: Update Application Version
     * @description: Updates the version details of an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateApplicationVersion/).
     */
    updateApplicationVersion({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateApplicationVersionParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.PlatformVersion>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateInventoryConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationInventory>} -
     *   Success response
     * @name updateInventoryConfig
     * @summary: Update inventory configuration.
     * @description: Modify the configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateInventoryConfig/).
     */
    updateInventoryConfig({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateInventoryConfigParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ApplicationInventory>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateOrderingStoreConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DeploymentMeta>} - Success response
     * @name updateOrderingStoreConfig
     * @summary: Update ordering store configuration.
     * @description: Modify configuration settings for ordering stores. Edit the details of the deployment stores (the selling locations where the application will be utilised for placing orders) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateOrderingStoreConfig/).
     */
    updateOrderingStoreConfig({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateOrderingStoreConfigParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DeploymentMeta>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateUrlRedirectionParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.UrlRedirection>} - Success response
     * @name updateUrlRedirection
     * @summary: Update a URL redirection
     * @description: Update a new URL redirection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateUrlRedirection/).
     */
    updateUrlRedirection({ redirectionDomainId, body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateUrlRedirectionParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.UrlRedirection>;
}
import ConfigurationPlatformApplicationValidator = require("./ConfigurationPlatformApplicationValidator");
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
import Paginator = require("../../common/Paginator");
