export = Configuration;
declare class Configuration {
    constructor(config: any);
    config: any;
    /**
     * @param {ConfigurationPlatformValidator.CreateApplicationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CreateAppResponse>} - Success response
     * @name createApplication
     * @summary: Create sales channel
     * @description: Generate and add a new sales channel. sales channels are sales channel websites which can be configured, personalized and customized. Use this API to create a new sales channel in the current company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/createApplication/).
     */
    createApplication({ body, requestHeaders }?: ConfigurationPlatformValidator.CreateApplicationParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.CreateAppResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetApplicationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationsResponse>} -
     *   Success response
     * @name getApplications
     * @summary: List sales channel stores
     * @description: Retrieve a list of available sales channels. sales channels are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of sales channels created within a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getApplications/).
     */
    getApplications({ pageNo, pageSize, q, requestHeaders }?: ConfigurationPlatformValidator.GetApplicationsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ApplicationsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetAvailableOptInsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>}
     *   - Success response
     *
     * @name getAvailableOptIns
     * @summary: List available opt-ins
     * @description: Retrieve a list of available opt-ins.  Retrieve a list of all available integrations in a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAvailableOptIns/).
     */
    getAvailableOptIns({ pageNo, pageSize, requestHeaders }?: ConfigurationPlatformValidator.GetAvailableOptInsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetBrandsByCompanyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.BrandsByCompanyResponse>} -
     *   Success response
     * @name getBrandsByCompany
     * @summary: List brands by company
     * @description: Retrieve all the brands added in a company. Get all the brand names, along with URLs of their logo, banner, and portrait image. can be searched on brand_name. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getBrandsByCompany/).
     */
    getBrandsByCompany({ q, requestHeaders }?: ConfigurationPlatformValidator.GetBrandsByCompanyParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.BrandsByCompanyResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetCompanyByBrandsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CompanyByBrandsResponse>} -
     *   Success response
     * @name getCompanyByBrands
     * @summary: List companies by brand
     * @description: Retrieve a paginated list of companies associated with specific brands. Can be searched using the brand ID and company name - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getCompanyByBrands/).
     */
    getCompanyByBrands({ body, pageNo, pageSize, requestHeaders }?: ConfigurationPlatformValidator.GetCompanyByBrandsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.CompanyByBrandsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetCurrenciesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CurrenciesResponse>} -
     *   Success response
     * @name getCurrencies
     * @summary: List currencies
     * @description: Retrieve a list of available currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getCurrencies/).
     */
    getCurrencies({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.CurrenciesResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetDomainAvailibilityParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DomainSuggestionsResponse>}
     *   - Success response
     *
     * @name getDomainAvailibility
     * @summary: List suggestion domain
     * @description: Check the availability of a specific domain. Use this API to check the domain availability before linking it to sales channel. Also sends domain suggestions that are similar to the queried domain. Note - Custom domain search is currently powered by GoDaddy provider. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomainAvailibility/).
     */
    getDomainAvailibility({ body, requestHeaders }?: ConfigurationPlatformValidator.GetDomainAvailibilityParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DomainSuggestionsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetIntegrationByIdParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.Integration>} - Success response
     * @name getIntegrationById
     * @summary: Get integration by Id
     * @description: Retrieve detailed information about a specific integration. Retrieve the details of an integration (such as Ginesys, SAP, etc.) using its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getIntegrationById/).
     */
    getIntegrationById({ id, requestHeaders }?: ConfigurationPlatformValidator.GetIntegrationByIdParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.Integration>;
    /**
     * @param {ConfigurationPlatformValidator.GetIntegrationByLevelIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.IntegrationLevel>} - Success response
     * @name getIntegrationByLevelId
     * @summary: Get integration Id
     * @description: Retrieve integration details for a specific level. Retrieve the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc. at a particular level (store/company). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getIntegrationByLevelId/).
     */
    getIntegrationByLevelId({ id, level, uid, requestHeaders }?: ConfigurationPlatformValidator.GetIntegrationByLevelIdParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.IntegrationLevel>;
    /**
     * @param {ConfigurationPlatformValidator.GetIntegrationLevelConfigParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.IntegrationConfigResponse>}
     *   - Success response
     *
     * @name getIntegrationLevelConfig
     * @summary: Get level configuration
     * @description: Retrieve configuration settings for integration levels. Retrieve the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getIntegrationLevelConfig/).
     */
    getIntegrationLevelConfig({ id, level, opted, checkPermission, requestHeaders }?: ConfigurationPlatformValidator.GetIntegrationLevelConfigParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.IntegrationConfigResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetLevelActiveIntegrationsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OptedStoreIntegration>} -
     *   Success response
     * @name getLevelActiveIntegrations
     * @summary: Get active integrations
     * @description: Check if a store is already opted-in for any integration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getLevelActiveIntegrations/).
     */
    getLevelActiveIntegrations({ id, level, uid, requestHeaders }?: ConfigurationPlatformValidator.GetLevelActiveIntegrationsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OptedStoreIntegration>;
    /**
     * @param {ConfigurationPlatformValidator.GetOtherSellerApplicationByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OptedApplicationResponse>}
     *   - Success response
     *
     * @name getOtherSellerApplicationById
     * @summary: Get others sales. channel
     * @description: Retrieve details of a seller sales channel that was not created within the current company but has opted for the current company's inventory and searched via the sales channel ID of another sales channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOtherSellerApplicationById/).
     */
    getOtherSellerApplicationById({ id, requestHeaders }?: ConfigurationPlatformValidator.GetOtherSellerApplicationByIdParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OptedApplicationResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetOtherSellerApplicationsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OtherSellerApplications>} -
     *   Success response
     * @name getOtherSellerApplications
     * @summary: Get other sales channel
     * @description: Retrieve sales channels of  other sellers. Retrieve all other seller sales channels that were not created within the current company. but have opted for the current company's inventory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOtherSellerApplications/).
     */
    getOtherSellerApplications({ pageNo, pageSize, requestHeaders }?: ConfigurationPlatformValidator.GetOtherSellerApplicationsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OtherSellerApplications>;
    /**
     * @param {ConfigurationPlatformValidator.GetSelectedOptInsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>}
     *   - Success response
     *
     * @name getSelectedOptIns
     * @summary: List selected opt-in
     * @description: Retrieve a list of selected opt-ins. Retrieve the store-level/company-level integrations configured in a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getSelectedOptIns/).
     */
    getSelectedOptIns({ level, uid, pageNo, pageSize, requestHeaders }?: ConfigurationPlatformValidator.GetSelectedOptInsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetStoreByBrandsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.StoreByBrandsResponse>} -
     *   Success response
     * @name getStoreByBrands
     * @summary: Get store by brands
     * @description: Retrieve stores associated with specific brands. Retrieve a list of selling locations (stores) by the brands they deal. Store has information about store name, store type, store code, store address, and company detail. filtering can be done on brand id and brand names - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getStoreByBrands/).
     */
    getStoreByBrands({ body, pageNo, pageSize, requestHeaders }?: ConfigurationPlatformValidator.GetStoreByBrandsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.StoreByBrandsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.OptOutFromApplicationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponse>} -
     *   Success response
     * @name optOutFromApplication
     * @summary: opt out of marketplaces
     * @description: This API allows businesses to opt out of sharing their inventory with external seller sales channels. By using this API, companies or stores can prevent specific seller sales channels from fetching their inventory data. This feature is useful for businesses that want to control who  can access their product listings and other inventory information. It helps maintain privacy and control over data distribution, ensuring that sensitive information is only shared with authorized partners. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/optOutFromApplication/).
     */
    optOutFromApplication({ id, body, requestHeaders }?: ConfigurationPlatformValidator.OptOutFromApplicationParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.SuccessMessageResponse>;
    /**
     * @param {ConfigurationPlatformValidator.UpdateLevelIntegrationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.IntegrationLevel>} - Success response
     * @name updateLevelIntegration
     * @summary: Update level integration
     * @description: Modify level integration. Update the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc. at a particular level (store/company). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateLevelIntegration/).
     */
    updateLevelIntegration({ id, level, body, requestHeaders }?: ConfigurationPlatformValidator.UpdateLevelIntegrationParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.IntegrationLevel>;
    /**
     * @param {ConfigurationPlatformValidator.UpdateLevelUidIntegrationParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.IntegrationLevel>} - Success response
     * @name updateLevelUidIntegration
     * @summary: Update level UID integration
     * @description: Modify UID-based integration. Update the level of integration by store UID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateLevelUidIntegration/).
     */
    updateLevelUidIntegration({ id, level, uid, body, requestHeaders }?: ConfigurationPlatformValidator.UpdateLevelUidIntegrationParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.IntegrationLevel>;
}
import ConfigurationPlatformValidator = require("./ConfigurationPlatformValidator");
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
