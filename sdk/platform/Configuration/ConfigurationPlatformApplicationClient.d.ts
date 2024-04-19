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
     * @summary: Add new domain to current sales channel
     * @description: Add a new domain to current sales channel, including pre-defined domain (free domain) or custom domain (owned by the brand) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/addDomain/).
     */
    addDomain({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.AddDomainParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.Domain>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.ChangeDomainTypeParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DomainsResponse>} - Success response
     * @name changeDomainType
     * @summary: Change the type of domain in the current sales channel
     * @description: Primary domain is used as the URL of your website. Short link domain is comparatively smaller and used while generating short links. Use this API to change a domain to either Primary or a Shortlink domain. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/changeDomainType/).
     */
    changeDomainType({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.ChangeDomainTypeParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DomainsResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppApiTokensParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.TokenResponse>} - Success response
     * @name getAppApiTokens
     * @summary: Get social tokens for the sales channel
     * @description: Use this API to retrieve the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google, and Facebook auth. **Note** - Token values are encrypted with AES encryption using a secret key. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppApiTokens/).
     */
    getAppApiTokens({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.TokenResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppBasicDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationDetail>} - Success response
     * @name getAppBasicDetails
     * @summary: Get sales channel details
     * @description: Shows basic sales channel details like name, description, logo, domain, company ID, and other related information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppBasicDetails/).
     */
    getAppBasicDetails({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ApplicationDetail>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppCompaniesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CompaniesResponse>} - Success response
     * @name getAppCompanies
     * @summary: Get companies enabled in the sales channel inventory
     * @description: Fetch info of all the companies (e.g. name, uid, and company type) whose inventory is fetched into the current sales channel application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppCompanies/).
     */
    getAppCompanies({ uid, pageNo, pageSize, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetAppCompaniesParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.CompaniesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Alphanumeric ID allotted to an
     *   application (sales channel website) created within a business account
     * @param {number} [arg.uid] - UID of companies to be fetched
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ConfigurationPlatformModel.CompaniesResponse>}
     * @summary: Get companies enabled in the sales channel inventory
     * @description: Fetch info of all the companies (e.g. name, uid, and company type) whose inventory is fetched into the current sales channel application
     */
    getAppCompaniesPaginator({ companyId, applicationId, uid, pageSize }?: {
        companyId: string;
        applicationId: string;
        uid?: number;
        pageSize?: number;
    }): Paginator<ConfigurationPlatformModel.CompaniesResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppContactInfoParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationInformation>} -
     *   Success response
     * @name getAppContactInfo
     * @summary: Get current information of the sales channel
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
     * @summary: Get currencies supported in the application
     * @description: Get a list of currencies supported in the current sales channel. Moreover, get the cuurency that is set as the default one in the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppCurrencyConfig/).
     */
    getAppCurrencyConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.AppSupportedCurrency>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppFeaturesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.AppFeatureResponse>} -
     *   Success response
     * @name getAppFeatures
     * @summary: Get the sales channel configuration and features
     * @description: Shows feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppFeatures/).
     */
    getAppFeatures({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.AppFeatureResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppStoresParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.StoresResponse>} - Success response
     * @name getAppStores
     * @summary: Get stores enabled in the sales channel inventory
     * @description: Fetch info of all the companies (e.g. uid, name, display name, store type, store code and company id) whose inventory is fetched into the current sales channel application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppStores/).
     */
    getAppStores({ pageNo, pageSize, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetAppStoresParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.StoresResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Alphanumeric ID allotted to an
     *   application (sales channel website) created within a business account
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ConfigurationPlatformModel.StoresResponse>}
     * @summary: Get stores enabled in the sales channel inventory
     * @description: Fetch info of all the companies (e.g. uid, name, display name, store type, store code and company id) whose inventory is fetched into the current sales channel application
     */
    getAppStoresPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator<ConfigurationPlatformModel.StoresResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppSupportedCurrencyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.AppCurrencyResponse>} -
     *   Success response
     * @name getAppSupportedCurrency
     * @summary: Get currencies enabled in the application
     * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppSupportedCurrency/).
     */
    getAppSupportedCurrency({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.AppCurrencyResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetApplicationByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.Application>} - Success response
     * @name getApplicationById
     * @summary: Get sales channel data by ID
     * @description: Use application ID to get the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, token, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getApplicationById/).
     */
    getApplicationById({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.Application>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetBuildConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.MobileAppConfiguration>} -
     *   Success response
     * @name getBuildConfig
     * @summary: Get configuration of latest mobile build
     * @description: Fetch latest build configuration, such as app name, landing page image, splash image used in a mobile build. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getBuildConfig/).
     */
    getBuildConfig({ platformType, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetBuildConfigParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.MobileAppConfiguration>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetDomainStatusParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DomainStatusResponse>} -
     *   Success response
     * @name getDomainStatus
     * @summary: Get the status of connected domain
     * @description: Shows if the A records and TXT records of the domain correctly points to appropriate IP on Fynd Servers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomainStatus/).
     */
    getDomainStatus({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetDomainStatusParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DomainStatusResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetDomainsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DomainsResponse>} - Success response
     * @name getDomains
     * @summary: Fetch all the domains added to an  application (sales channel website), including pre-defined domain (free domain) or custom domain (owned by the brand). Know the verification status of each domain name, and find out which one is the primary domain, short link domain, or both.
     * @description: Get list of domains - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomains/).
     */
    getDomains({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DomainsResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetInventoryConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationInventory>} -
     *   Success response
     * @name getInventoryConfig
     * @summary: Get sales channel configuration
     * @description: Use this API to fetch configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getInventoryConfig/).
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
     * @summary: Get ordering store config
     * @description: Fetch the details of the deployment stores (the selling locations where the application will be utilised for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOrderingStoreConfig/).
     */
    getOrderingStoreConfig({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OrderingStoreConfig>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetOrderingStoreCookieParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponse>} -
     *   Success response
     * @name getOrderingStoreCookie
     * @summary: Get an Ordering Store signed cookie on selection of ordering store.
     * @description: Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOrderingStoreCookie/).
     */
    getOrderingStoreCookie({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetOrderingStoreCookieParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.SuccessMessageResponse>;
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
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Alphanumeric ID allotted to an
     *   application (sales channel website) created within a business account
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {ConfigurationPlatformModel.FilterOrderingStoreRequest} arg.body
     * @returns {Paginator<ConfigurationPlatformModel.OrderingStores>}
     * @summary: Get ordering store by filter
     * @description: Use this API to use filters and retrieve the details of the deployment stores (the selling locations where the application will be utilised for placing orders).
     */
    getOrderingStoresByFilterPaginator({ companyId, applicationId, pageSize, body, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        body: ConfigurationPlatformModel.FilterOrderingStoreRequest;
    }): Paginator<ConfigurationPlatformModel.OrderingStores>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetPreviousVersionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.BuildVersionHistory>} -
     *   Success response
     * @name getPreviousVersions
     * @summary: Get details of previous mobile builds
     * @description: Fetch version details of the app, this includes the build status, build date, version name, latest version, and a lot more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getPreviousVersions/).
     */
    getPreviousVersions({ platformType, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetPreviousVersionsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.BuildVersionHistory>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetStaffOrderingStoresParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OrderingStoresResponse>} -
     *   Success response
     * @name getStaffOrderingStores
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getStaffOrderingStores/).
     */
    getStaffOrderingStores({ pageNo, pageSize, q, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetStaffOrderingStoresParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OrderingStoresResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Alphanumeric ID allotted to an
     *   application (sales channel website) created within a business account
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @returns {Paginator<ConfigurationPlatformModel.OrderingStoresResponse>}
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
     */
    getStaffOrderingStoresPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator<ConfigurationPlatformModel.OrderingStoresResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.ModifyAppFeaturesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.AppFeature>} - Success response
     * @name modifyAppFeatures
     * @summary: Update features of application
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
     * @summary: Partially update sales channel configuration
     * @description: Partially update the configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/partiallyUpdateInventoryConfig/).
     */
    partiallyUpdateInventoryConfig({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.PartiallyUpdateInventoryConfigParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ApplicationInventory>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.RemoveDomainByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponse>} -
     *   Success response
     * @name removeDomainById
     * @summary: Remove attached domain from current sales channel
     * @description: Delete a domain (secondary or shortlink domain) added to a sales channel. It will disable user's access to website, shared links, and other features associated with this domain. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/removeDomainById/).
     */
    removeDomainById({ id, requestHeaders }?: ConfigurationPlatformApplicationValidator.RemoveDomainByIdParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.SuccessMessageResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.RemoveOrderingStoreCookieParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponse>} -
     *   Success response
     * @name removeOrderingStoreCookie
     * @summary: Unset the Ordering Store signed cookie.
     * @description: Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/removeOrderingStoreCookie/).
     */
    removeOrderingStoreCookie({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.SuccessMessageResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateAppApiTokensParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.TokenResponse>} - Success response
     * @name updateAppApiTokens
     * @summary: Add or update social tokens for the sales channel
     * @description: Use this API to add or edit the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google and Facebook auth. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppApiTokens/).
     */
    updateAppApiTokens({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateAppApiTokensParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.TokenResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateAppBasicDetailsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationDetail>} - Success response
     * @name updateAppBasicDetails
     * @summary: Update sales channel details
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
     * @summary: Save or update current information of the sales channel
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
     * @summary: Update initial sales channel supported currency
     * @description: Use this API to add and edit the currencies supported in the application. Initially, INR will be enabled by default. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppCurrencyConfig/).
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
     * @summary: Update the sales channel configuration and features
     * @description: Modify the feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppFeatures/).
     */
    updateAppFeatures({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateAppFeaturesParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.AppFeature>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateBuildConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.MobileAppConfiguration>} -
     *   Success response
     * @name updateBuildConfig
     * @summary: Update the configuration for next mobile build
     * @description: Modify the existing build configuration, such as app name, landing page image, splash image used in a mobile build. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateBuildConfig/).
     */
    updateBuildConfig({ platformType, body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateBuildConfigParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.MobileAppConfiguration>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.UpdateInventoryConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationInventory>} -
     *   Success response
     * @name updateInventoryConfig
     * @summary: Update sales channel configuration
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
     * @summary: Add/Update ordering store config
     * @description: Use this API to edit the details of the deployment stores (the selling locations where the application will be utilised for placing orders) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateOrderingStoreConfig/).
     */
    updateOrderingStoreConfig({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateOrderingStoreConfigParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DeploymentMeta>;
}
import ConfigurationPlatformApplicationValidator = require("./ConfigurationPlatformApplicationValidator");
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
import Paginator = require("../../common/Paginator");
