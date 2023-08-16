export = Configuration;
declare class Configuration {
    constructor(config: any);
    config: any;
    /**
     * @param {ConfigurationPlatformValidator.CreateApplicationParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CreateAppResponse>} - Success response
     * @name createApplication
     * @summary: Create a new sales channel
     * @description: Applications are sales channel websites which can be configured, personalized and customized. Use this API to create a new application in the current company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/createApplication/).
     */
    createApplication({ body }?: ConfigurationPlatformValidator.CreateApplicationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.CreateAppResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetApplicationsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationsResponse>} -
     *   Success response
     * @name getApplications
     * @summary: Get list of registered sales channels under company
     * @description: Applications are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of applications created within a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getApplications/).
     */
    getApplications({ pageNo, pageSize, q }?: ConfigurationPlatformValidator.GetApplicationsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.ApplicationsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] - Search param by name or domain
     * @returns {Paginator<ConfigurationPlatformModel.ApplicationsResponse>}
     * @summary: Get list of registered sales channels under company
     * @description: Applications are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of applications created within a company.
     */
    getApplicationsPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator<ConfigurationPlatformModel.ApplicationsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetAvailableOptInsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>}
     *   - Success response
     *
     * @name getAvailableOptIns
     * @summary: Get all available integration opt-ins
     * @description: Use this API to get a list of all available integrations in a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAvailableOptIns/).
     */
    getAvailableOptIns({ pageNo, pageSize }?: ConfigurationPlatformValidator.GetAvailableOptInsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>}
     * @summary: Get all available integration opt-ins
     * @description: Use this API to get a list of all available integrations in a company
     */
    getAvailableOptInsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetBrandsByCompanyParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.BrandsByCompanyResponse>} -
     *   Success response
     * @name getBrandsByCompany
     * @summary: Get brands by company.
     * @description: Use this API to get all the brands added in a company. Get all the brand names, along with URLs of their logo, banner, and portrait image. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getBrandsByCompany/).
     */
    getBrandsByCompany({ q }?: ConfigurationPlatformValidator.GetBrandsByCompanyParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.BrandsByCompanyResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetCompanyByBrandsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CompanyByBrandsResponse>} -
     *   Success response
     * @name getCompanyByBrands
     * @summary: Get company by brand uids
     * @description: Use this API to get a list of companies by the brands they deal - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getCompanyByBrands/).
     */
    getCompanyByBrands({ body, pageNo, pageSize }?: ConfigurationPlatformValidator.GetCompanyByBrandsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.CompanyByBrandsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {ConfigurationPlatformModel.CompanyByBrandsRequest} arg.body
     * @returns {Paginator<ConfigurationPlatformModel.CompanyByBrandsResponse>}
     * @summary: Get company by brand uids
     * @description: Use this API to get a list of companies by the brands they deal
     */
    getCompanyByBrandsPaginator({ pageSize, body }?: {
        pageSize?: number;
        body: ConfigurationPlatformModel.CompanyByBrandsRequest;
    }): Paginator<ConfigurationPlatformModel.CompanyByBrandsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetCurrenciesParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CurrenciesResponse>} -
     *   Success response
     * @name getCurrencies
     * @summary: Get all currencies
     * @description: Use this API to get a list of currencies allowed in the company. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getCurrencies/).
     */
    getCurrencies({ headers }?: any): Promise<ConfigurationPlatformModel.CurrenciesResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetDomainAvailibilityParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DomainSuggestionsResponse>}
     *   - Success response
     *
     * @name getDomainAvailibility
     * @summary: Check domain availability before linking to application
     * @description: Use this API to check the domain availability before linking it to application. Also sends domain suggestions that are similar to the queried domain. Note - Custom domain search is currently powered by GoDaddy provider. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomainAvailibility/).
     */
    getDomainAvailibility({ body }?: ConfigurationPlatformValidator.GetDomainAvailibilityParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.DomainSuggestionsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetIntegrationByIdParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.Integration>} - Success response
     * @name getIntegrationById
     * @summary: Get integration data by its ID
     * @description: Use this API to fetch the details of an integration (such as Ginesys, SAP, etc.) using its ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getIntegrationById/).
     */
    getIntegrationById({ id }?: ConfigurationPlatformValidator.GetIntegrationByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.Integration>;
    /**
     * @param {ConfigurationPlatformValidator.GetIntegrationByLevelIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.IntegrationLevel>} - Success response
     * @name getIntegrationByLevelId
     * @summary: Get integration config at a particular level (store/company)
     * @description: Use this API to get the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc. at a particular level (store/company). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getIntegrationByLevelId/).
     */
    getIntegrationByLevelId({ id, level, uid }?: ConfigurationPlatformValidator.GetIntegrationByLevelIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.IntegrationLevel>;
    /**
     * @param {ConfigurationPlatformValidator.GetIntegrationLevelConfigParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.IntegrationConfigResponse>}
     *   - Success response
     *
     * @name getIntegrationLevelConfig
     * @summary: Get integration level config
     * @description: Use this API to get the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getIntegrationLevelConfig/).
     */
    getIntegrationLevelConfig({ id, level, opted, checkPermission }?: ConfigurationPlatformValidator.GetIntegrationLevelConfigParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.IntegrationConfigResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetLevelActiveIntegrationsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OptedStoreIntegration>} -
     *   Success response
     * @name getLevelActiveIntegrations
     * @summary: Check active integration at store
     * @description: Use this API to check if a store is already opted-in for any integration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getLevelActiveIntegrations/).
     */
    getLevelActiveIntegrations({ id, level, uid }?: ConfigurationPlatformValidator.GetLevelActiveIntegrationsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.OptedStoreIntegration>;
    /**
     * @param {ConfigurationPlatformValidator.GetOtherSellerApplicationByIdParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OptedApplicationResponse>}
     *   - Success response
     *
     * @name getOtherSellerApplicationById
     * @summary: Get other seller's sales channel by ID
     * @description: Use application ID to fetch details of a seller application that was not created within the current company. but has opted for the current company's inventory - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOtherSellerApplicationById/).
     */
    getOtherSellerApplicationById({ id }?: ConfigurationPlatformValidator.GetOtherSellerApplicationByIdParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.OptedApplicationResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetOtherSellerApplicationsParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OtherSellerApplications>} -
     *   Success response
     * @name getOtherSellerApplications
     * @summary: Get other seller sales channels
     * @description: Use this API to fetch all other seller applications that were not created within the current company. but have opted for the current company's inventory - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOtherSellerApplications/).
     */
    getOtherSellerApplications({ pageNo, pageSize }?: ConfigurationPlatformValidator.GetOtherSellerApplicationsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.OtherSellerApplications>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ConfigurationPlatformModel.OtherSellerApplications>}
     * @summary: Get other seller sales channels
     * @description: Use this API to fetch all other seller applications that were not created within the current company. but have opted for the current company's inventory
     */
    getOtherSellerApplicationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<ConfigurationPlatformModel.OtherSellerApplications>;
    /**
     * @param {ConfigurationPlatformValidator.GetSelectedOptInsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>}
     *   - Success response
     *
     * @name getSelectedOptIns
     * @summary: Get company/store level integration opt-ins
     * @description: Use this API to get the store-level/company-level integrations configured in a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getSelectedOptIns/).
     */
    getSelectedOptIns({ level, uid, pageNo, pageSize }?: ConfigurationPlatformValidator.GetSelectedOptInsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.level - Store or company
     * @param {number} arg.uid - Unique identifier of the selected integration level.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>}
     * @summary: Get company/store level integration opt-ins
     * @description: Use this API to get the store-level/company-level integrations configured in a company
     */
    getSelectedOptInsPaginator({ level, uid, pageSize }?: {
        level: string;
        uid: number;
        pageSize?: number;
    }): Paginator<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetStoreByBrandsParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.StoreByBrandsResponse>} -
     *   Success response
     * @name getStoreByBrands
     * @summary: Get stores by brand uids for the current company
     * @description: Use this API to get a list of selling locations (stores) by the brands they deal. Store has information about store name, store type, store code, store address, and company detail. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getStoreByBrands/).
     */
    getStoreByBrands({ body, pageNo, pageSize }?: ConfigurationPlatformValidator.GetStoreByBrandsParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.StoreByBrandsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {ConfigurationPlatformModel.StoreByBrandsRequest} arg.body
     * @returns {Paginator<ConfigurationPlatformModel.StoreByBrandsResponse>}
     * @summary: Get stores by brand uids for the current company
     * @description: Use this API to get a list of selling locations (stores) by the brands they deal. Store has information about store name, store type, store code, store address, and company detail.
     */
    getStoreByBrandsPaginator({ pageSize, body }?: {
        pageSize?: number;
        body: ConfigurationPlatformModel.StoreByBrandsRequest;
    }): Paginator<ConfigurationPlatformModel.StoreByBrandsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.OptOutFromApplicationParam} arg - Arg object
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponse>} -
     *   Success response
     * @name optOutFromApplication
     * @summary: Opt-out company or store from other seller application
     * @description: Use this API to opt-out your company or store from other seller application. The specific seller application will no longer fetch inventory from your company or store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/optOutFromApplication/).
     */
    optOutFromApplication({ id, body }?: ConfigurationPlatformValidator.OptOutFromApplicationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.SuccessMessageResponse>;
    /**
     * @param {ConfigurationPlatformValidator.UpdateLevelIntegrationParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.IntegrationLevel>} - Success response
     * @name updateLevelIntegration
     * @summary: Update a store level integration you opted
     * @description: Use this API to update the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc. at a particular level (store/company). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateLevelIntegration/).
     */
    updateLevelIntegration({ id, level, body }?: ConfigurationPlatformValidator.UpdateLevelIntegrationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.IntegrationLevel>;
    /**
     * @param {ConfigurationPlatformValidator.UpdateLevelUidIntegrationParam} arg
     *   - Arg object
     *
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.IntegrationLevel>} - Success response
     * @name updateLevelUidIntegration
     * @summary: Update integration level by store UID
     * @description: Update the level of integration by store UID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateLevelUidIntegration/).
     */
    updateLevelUidIntegration({ id, level, uid, body }?: ConfigurationPlatformValidator.UpdateLevelUidIntegrationParam, { headers }?: import("../PlatformAPIClient").Options): Promise<ConfigurationPlatformModel.IntegrationLevel>;
}
import ConfigurationPlatformValidator = require("./ConfigurationPlatformValidator");
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
import Paginator = require("../../common/Paginator");
