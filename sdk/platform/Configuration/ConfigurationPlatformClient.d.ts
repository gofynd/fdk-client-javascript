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
     * @summary: Create application.
     * @description: Generate and add a new application. Applications are sales channel websites which can be configured, personalized and customized. Use this API to create a new application in the current company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/createApplication/).
     */
    createApplication({ body, requestHeaders }?: ConfigurationPlatformValidator.CreateApplicationParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.CreateAppResponse>;
    /**
     * @param {ConfigurationPlatformValidator.CreateCurrencyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.Currency>} - Success response
     * @name createCurrency
     * @summary: Get currencies.
     * @description: Retrieve a list of available currencies. Use this API to get a list of currencies allowed in the company. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/createCurrency/).
     */
    createCurrency({ body, requestHeaders }?: ConfigurationPlatformValidator.CreateCurrencyParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.Currency>;
    /**
     * @param {ConfigurationPlatformValidator.GetApplicationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationsResponse>} -
     *   Success response
     * @name getApplications
     * @summary: Get applications.
     * @description: Retrieve a list of available applications. Applications are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of applications created within a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getApplications/).
     */
    getApplications({ pageNo, pageSize, q, requestHeaders }?: ConfigurationPlatformValidator.GetApplicationsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ApplicationsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] - Search param by name or domain
     * @returns {Paginator<ConfigurationPlatformModel.ApplicationsResponse>}
     * @summary: Get applications.
     * @description: Retrieve a list of available applications. Applications are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of applications created within a company.
     */
    getApplicationsPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator<ConfigurationPlatformModel.ApplicationsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetBrandsByCompanyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.BrandsByCompanyResponse>} -
     *   Success response
     * @name getBrandsByCompany
     * @summary: Get brands by company.
     * @description: Retrieve all the brands added in a company. Get all the brand names, along with URLs of their logo, banner, and portrait image. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getBrandsByCompany/).
     */
    getBrandsByCompany({ q, requestHeaders }?: ConfigurationPlatformValidator.GetBrandsByCompanyParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.BrandsByCompanyResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetCompanyByBrandsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CompanyByBrandsResponse>} -
     *   Success response
     * @name getCompanyByBrands
     * @summary: Get company by brands.
     * @description: Retrieve companies associated with specific brands. Retrieve a list of companies by the brands they deal. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getCompanyByBrands/).
     */
    getCompanyByBrands({ body, pageNo, pageSize, requestHeaders }?: ConfigurationPlatformValidator.GetCompanyByBrandsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.CompanyByBrandsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {ConfigurationPlatformModel.CompanyByBrandsRequest} arg.body
     * @returns {Paginator<ConfigurationPlatformModel.CompanyByBrandsResponse>}
     * @summary: Get company by brands.
     * @description: Retrieve companies associated with specific brands. Retrieve a list of companies by the brands they deal.
     */
    getCompanyByBrandsPaginator({ pageSize, body }?: {
        pageSize?: number;
        body: ConfigurationPlatformModel.CompanyByBrandsRequest;
    }): Paginator<ConfigurationPlatformModel.CompanyByBrandsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetCurrenciesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CurrenciesResponse>} -
     *   Success response
     * @name getCurrencies
     * @summary: Get currencies.
     * @description: Retrieve a list of available currencies. Use this API to get a list of currencies allowed in the company. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getCurrencies/).
     */
    getCurrencies({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.CurrenciesResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetCurrencyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.Currency>} - Success response
     * @name getCurrency
     * @summary: Get currencies.
     * @description: Retrieve a list of available currencies. Use this API to get a list of currencies allowed in the company. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getCurrency/).
     */
    getCurrency({ id, requestHeaders }?: ConfigurationPlatformValidator.GetCurrencyParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.Currency>;
    /**
     * @param {ConfigurationPlatformValidator.GetDomainAvailibilityParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DomainSuggestionsResponse>}
     *   - Success response
     *
     * @name getDomainAvailibility
     * @summary: Get domain availability.
     * @description: Check the availability of a specific domain. Use this API to check the domain availability before linking it to application. Also sends domain suggestions that are similar to the queried domain. Note - Custom domain search is currently powered by GoDaddy provider. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomainAvailibility/).
     */
    getDomainAvailibility({ body, requestHeaders }?: ConfigurationPlatformValidator.GetDomainAvailibilityParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DomainSuggestionsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetDomainOptionsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DomainOptionsResponse>} -
     *   Success response
     * @name getDomainOptions
     * @summary: Get domain options
     * @description: Fetches the list of available domain types and network information - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomainOptions/).
     */
    getDomainOptions({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DomainOptionsResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetLocationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.Locations>} - Success response
     * @name getLocations
     * @summary: Get countries, states, cities
     * @description: Get Location configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getLocations/).
     */
    getLocations({ locationType, id, requestHeaders }?: ConfigurationPlatformValidator.GetLocationsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.Locations>;
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
     * @summary: Get other seller application by ID.
     * @description: Retrieve details of a seller application that was not created within the current company. but has opted for the current company's inventory - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOtherSellerApplicationById/).
     */
    getOtherSellerApplicationById({ appId, requestHeaders }?: ConfigurationPlatformValidator.GetOtherSellerApplicationByIdParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OptedApplicationResponse>;
    /**
     * @param {ConfigurationPlatformValidator.GetOtherSellerApplicationsParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OtherSellerApplications>} -
     *   Success response
     * @name getOtherSellerApplications
     * @summary: Get other seller applications.
     * @description: Retrieve applications from other sellers. Retrieve all other seller applications that were not created within the current company. but have opted for the current company's inventory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOtherSellerApplications/).
     */
    getOtherSellerApplications({ pageNo, pageSize, requestHeaders }?: ConfigurationPlatformValidator.GetOtherSellerApplicationsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OtherSellerApplications>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Paginator<ConfigurationPlatformModel.OtherSellerApplications>}
     * @summary: Get other seller applications.
     * @description: Retrieve applications from other sellers. Retrieve all other seller applications that were not created within the current company. but have opted for the current company's inventory.
     */
    getOtherSellerApplicationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator<ConfigurationPlatformModel.OtherSellerApplications>;
    /**
     * @param {ConfigurationPlatformValidator.GetStoreByBrandsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.StoreByBrandsResponse>} -
     *   Success response
     * @name getStoreByBrands
     * @summary: Get stores by brand uids for the current company
     * @description: Use this API to get a list of selling locations (stores) by the brands they deal. Store has information about store name, store type, store code, store address, and company detail. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getStoreByBrands/).
     */
    getStoreByBrands({ body, pageNo, pageSize, requestHeaders }?: ConfigurationPlatformValidator.GetStoreByBrandsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.StoreByBrandsResponse>;
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
     * @param {ConfigurationPlatformValidator.GetStoresForACompanyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ListStoreResponse>} - Success response
     * @name getStoresForACompany
     * @summary: Get stores by company
     * @description: Retrieves All the stores that belong to a particular company with desired pagination - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getStoresForACompany/).
     */
    getStoresForACompany({ company, requestHeaders }?: ConfigurationPlatformValidator.GetStoresForACompanyParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ListStoreResponse>;
    /**
     * @param {ConfigurationPlatformValidator.OptOutFromApplicationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponse>} -
     *   Success response
     * @name optOutFromApplication
     * @summary: Opt out from an application.
     * @description: Choose to opt-out your company or store from other seller application. The specific seller application will no longer fetch inventory from your company or store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/optOutFromApplication/).
     */
    optOutFromApplication({ appId, body, requestHeaders }?: ConfigurationPlatformValidator.OptOutFromApplicationParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.SuccessMessageResponse>;
    /**
     * @param {ConfigurationPlatformValidator.UpdateCurrencyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.Currency>} - Success response
     * @name updateCurrency
     * @summary: Get currencies.
     * @description: Retrieve a list of available currencies. Use this API to get a list of currencies allowed in the company. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateCurrency/).
     */
    updateCurrency({ id, body, requestHeaders }?: ConfigurationPlatformValidator.UpdateCurrencyParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.Currency>;
}
import ConfigurationPlatformValidator = require("./ConfigurationPlatformValidator");
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
import Paginator = require("../../common/Paginator");
