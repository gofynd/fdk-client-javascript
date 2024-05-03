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
     * @summary: Create domain
     * @description: Creates a domain for an sales channel. Note - Only 15 domains can be added to the sales channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/addDomain/).
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
     * @summary: Update domain
     * @description: Modify the type of a specific domain. Primary domain is used as the URL of your website. Short link domain is comparatively smaller and used while generating short links. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/changeDomainType/).
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
     * @summary: Get sales channel API tokens
     * @description: Retrieve the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google, and Facebook auth.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppApiTokens/).
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
     * @summary: Get sales channel
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
     * @summary: List sales channel companies
     * @description: Retrieve info of all the companies (e.g. name, uid, and company type) whose inventory is fetched into the current sales channel sales channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppCompanies/).
     */
    getAppCompanies({ uid, pageNo, pageSize, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetAppCompaniesParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.CompaniesResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppContactInfoParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationInformation>} -
     *   Success response
     * @name getAppContactInfo
     * @summary: Get sales channel contact
     * @description: Fetch data such as social links, copyright text, business highlights, address and contact information of the company/seller/brand operating the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppContactInfo/).
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
     * @summary: Get sales channel currency configuration
     * @description: Retrieve a list of currencies supported in the current sales channel. Moreover, get the cuurency that is set as the default one in the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppCurrencyConfig/).
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
     * @summary: Get sales channel
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
     * @summary: list sales channel stores
     * @description: Retrieve information of all the companies (e.g. uid, name, display name, store type, store code and company id) whose inventory is fetched into the current sales channel sales channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppStores/).
     */
    getAppStores({ pageNo, pageSize, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetAppStoresParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.StoresResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetAppSupportedCurrencyParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.AppCurrencyResponse>} -
     *   Success response
     * @name getAppSupportedCurrency
     * @summary: List supported currencies
     * @description: Retrieve a list of supported currencies for the sales channel. A list of currencies allowed in the current sales channel. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppSupportedCurrency/).
     */
    getAppSupportedCurrency({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.AppCurrencyResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetApplicationByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationById>} - Success response
     * @name getApplicationById
     * @summary: Get sales channel by id
     * @description: Retrieve detailed information about a specific sales channel. Use sales channel ID to get the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, token, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getApplicationById/).
     */
    getApplicationById({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ApplicationById>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetBuildConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.MobileAppConfiguration>} -
     *   Success response
     * @name getBuildConfig
     * @summary: Get Build Configuration
     * @description: Retrieve latest build configuration, such as app name, landing page image, splash image used in a mobile build. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getBuildConfig/).
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
     * @summary: Get domain status
     * @description: Retrieve the status of a specific domain. Shows if the A records and TXT records of the domain correctly points to appropriate IP on Fynd Servers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomainStatus/).
     */
    getDomainStatus({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetDomainStatusParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DomainStatusResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetDomainsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DomainsResponse>} - Success response
     * @name getDomains
     * @summary: List domains
     * @description: Retrieve a list of existing domains by its sales channel id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomains/).
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
     * @summary: Get inventory configuration
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
     * @summary: Get ordering store configuration
     * @description: Retrieve configuration settings for ordering stores. Retrieve the details of the deployment stores (the selling locations where the sales channel will be utilised for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOrderingStoreConfig/).
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
     * @summary: Get Ordering Store signed cookie.
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
     * @summary: List ordering stores
     * @description: Retrieve ordering stores based on specified filters. Use filters and retrieve the details of the deployment stores (the selling locations where the sales channel will be utilised for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOrderingStoresByFilter/).
     */
    getOrderingStoresByFilter({ body, pageNo, pageSize, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetOrderingStoresByFilterParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OrderingStores>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.GetPreviousVersionsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.BuildVersionHistory>} -
     *   Success response
     * @name getPreviousVersions
     * @summary: Get previous versions
     * @description: Retrieve version details of the app, this includes the build status, build date, version name, latest version, and a lot more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getPreviousVersions/).
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
     * @summary: Get staff ordering stores
     * @description: Retrieve ordering stores accessible to staff members. Retrieve the details of all stores access given to the staff member (the selling locations where the sales channel will be utilized for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getStaffOrderingStores/).
     */
    getStaffOrderingStores({ pageNo, pageSize, q, requestHeaders }?: ConfigurationPlatformApplicationValidator.GetStaffOrderingStoresParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OrderingStoresResponse>;
    /**
     * @param {ConfigurationPlatformApplicationValidator.ModifyAppFeaturesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.AppFeature>} - Success response
     * @name modifyAppFeatures
     * @summary: update sales channel features
     * @description: Modify the feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/modifyAppFeatures/).
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
     * @summary: Partially update inventory configuration
     * @description: Modify the configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/partiallyUpdateInventoryConfig/).
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
     * @summary: Remove domain
     * @description: Delete a specific domain from the sales channel. Delete a domain (secondary or shortlink domain) added to a sales channel. It will disable user's access to website, shared links, and other features associated with this domain. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/removeDomainById/).
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
     * @summary: Delete Ordering Store signed cookie
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
     * @summary: Update sales channel API tokens
     * @description: Add and edit the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google and Facebook auth. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppApiTokens/).
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
     * @summary: Update sales channel basic details
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
     * @summary: Update sales channel contact
     * @description: Modify the social links, copyright text, business highlights, address and contact information of the company/seller/brand operating the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppContactInfo/).
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
     * @summary: Update sales channel currency configuration
     * @description: Modify currency configuration settings for the sales channel. Add and edit the currencies supported in the sales channel. Initially, INR will be enabled by default. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppCurrencyConfig/).
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
     * @summary: Update sales channel
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
     * @summary: Update build configuration
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
     * @summary: Update inventory configuration
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
     * @summary: Update ordering store configuration
     * @description: Modify configuration settings for ordering stores. Edit the details of the deployment stores (the selling locations where the sales channel will be utilised for placing orders) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateOrderingStoreConfig/).
     */
    updateOrderingStoreConfig({ body, requestHeaders }?: ConfigurationPlatformApplicationValidator.UpdateOrderingStoreConfigParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DeploymentMeta>;
}
import ConfigurationPlatformApplicationValidator = require("./ConfigurationPlatformApplicationValidator");
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
