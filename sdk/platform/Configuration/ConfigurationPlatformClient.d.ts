export = Configuration;
declare class Configuration {
    constructor(config: any);
    config: any;
    /**
     * @param {ConfigurationPlatformValidator.CreateApplicationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CreateAppResponseSchema>} -
     *   Success response
     * @name createApplication
     * @summary: Create sales channel
     * @description: Generate and add a new sales channel. sales channels are sales channel websites which can be configured, personalized and customized. Use this API to create a new sales channel in the current company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/configuration/createApplication/).
     */
    createApplication({ body, requestHeaders }?: ConfigurationPlatformValidator.CreateApplicationParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.CreateAppResponseSchema>;
    /**
     * @param {ConfigurationPlatformValidator.GetApplicationsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.ApplicationsResponseSchema>}
     *   - Success response
     *
     * @name getApplications
     * @summary: List sales channel stores
     * @description: Retrieve a list of available sales channels. sales channels are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of sales channels created within a company. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/configuration/getApplications/).
     */
    getApplications({ pageNo, pageSize, q, requestHeaders }?: ConfigurationPlatformValidator.GetApplicationsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.ApplicationsResponseSchema>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] - Search param by name or domain
     * @returns {Paginator<ConfigurationPlatformModel.ApplicationsResponseSchema>}
     * @summary: List sales channel stores
     * @description: Retrieve a list of available sales channels. sales channels are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of sales channels created within a company.
     */
    getApplicationsPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator<ConfigurationPlatformModel.ApplicationsResponseSchema>;
    /**
     * @param {ConfigurationPlatformValidator.GetBrandsByCompanyParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.BrandsByCompanyResponseSchema>}
     *   - Success response
     *
     * @name getBrandsByCompany
     * @summary: List brands by company
     * @description: Retrieve all the brands added in a company. Get all the brand names, along with URLs of their logo, banner, and portrait image. can be searched on brand_name. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/configuration/getBrandsByCompany/).
     */
    getBrandsByCompany({ q, requestHeaders }?: ConfigurationPlatformValidator.GetBrandsByCompanyParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.BrandsByCompanyResponseSchema>;
    /**
     * @param {ConfigurationPlatformValidator.GetCompanyByBrandsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CompanyByBrandsResponseSchema>}
     *   - Success response
     *
     * @name getCompanyByBrands
     * @summary: List companies by brand
     * @description: Retrieve a paginated list of companies associated with specific brands. Can be searched using the brand ID and company name - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/configuration/getCompanyByBrands/).
     */
    getCompanyByBrands({ body, pageNo, pageSize, requestHeaders }?: ConfigurationPlatformValidator.GetCompanyByBrandsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.CompanyByBrandsResponseSchema>;
    /**
     * @param {ConfigurationPlatformValidator.GetCurrenciesParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CurrenciesResponseSchema>}
     *   - Success response
     *
     * @name getCurrencies
     * @summary: List currencies
     * @description: Retrieve a list of available currencies. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/configuration/getCurrencies/).
     */
    getCurrencies({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.CurrenciesResponseSchema>;
    /**
     * @param {ConfigurationPlatformValidator.GetCurrencyExchangeRatesParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.CurrencyExchangeResponseV2>}
     *   - Success response
     *
     * @name getCurrencyExchangeRates
     * @summary: Get currency exchange rates
     * @description: Retrieve a list of currency exchange rates, relative to a provided currency. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/configuration/getCurrencyExchangeRates/).
     */
    getCurrencyExchangeRates({ currencyCode, exchangeCurrencyCode, exchangeCountryCode, requestHeaders, }?: ConfigurationPlatformValidator.GetCurrencyExchangeRatesParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.CurrencyExchangeResponseV2>;
    /**
     * @param {ConfigurationPlatformValidator.GetDomainAvailibilityParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.DomainSuggestionsResponseSchema>}
     *   - Success response
     *
     * @name getDomainAvailibility
     * @summary: List suggestion domain
     * @description: Check the availability of a specific domain. Use this API to check the domain availability before linking it to sales channel. Also sends domain suggestions that are similar to the queried domain. Note - Custom domain search is currently powered by GoDaddy provider. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/configuration/getDomainAvailibility/).
     */
    getDomainAvailibility({ body, requestHeaders }?: ConfigurationPlatformValidator.GetDomainAvailibilityParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.DomainSuggestionsResponseSchema>;
    /**
     * @param {ConfigurationPlatformValidator.GetOtherSellerApplicationByIdParam} arg
     *   - Arg object
     *
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.OptedApplicationResponseSchema>}
     *   - Success response
     *
     * @name getOtherSellerApplicationById
     * @summary: Get others sales. channel
     * @description: Retrieve details of a seller sales channel that was not created within the current company but has opted for the current company's inventory and searched via the sales channel ID of another sales channel - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/configuration/getOtherSellerApplicationById/).
     */
    getOtherSellerApplicationById({ id, requestHeaders }?: ConfigurationPlatformValidator.GetOtherSellerApplicationByIdParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OptedApplicationResponseSchema>;
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
     * @description: Retrieve sales channels of  other sellers. Retrieve all other seller sales channels that were not created within the current company. but have opted for the current company's inventory. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/configuration/getOtherSellerApplications/).
     */
    getOtherSellerApplications({ pageNo, pageSize, requestHeaders }?: ConfigurationPlatformValidator.GetOtherSellerApplicationsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.OtherSellerApplications>;
    /**
     * @param {ConfigurationPlatformValidator.GetStoreByBrandsParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.StoreByBrandsResponseSchema>}
     *   - Success response
     *
     * @name getStoreByBrands
     * @summary: Get store by brands
     * @description: Retrieve stores associated with specific brands. Retrieve a list of selling locations (stores) by the brands they deal. Store has information about store name, store type, store code, store address, and company detail. filtering can be done on brand id and brand names - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/configuration/getStoreByBrands/).
     */
    getStoreByBrands({ body, pageNo, pageSize, requestHeaders }?: ConfigurationPlatformValidator.GetStoreByBrandsParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.StoreByBrandsResponseSchema>;
    /**
     * @param {ConfigurationPlatformValidator.OptOutFromApplicationParam} arg - Arg object
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponseSchema>}
     *   - Success response
     *
     * @name optOutFromApplication
     * @summary: opt out of marketplaces
     * @description: This API allows businesses to opt out of sharing their inventory with external seller sales channels. By using this API, companies or stores can prevent specific seller sales channels from fetching their inventory data. This feature is useful for businesses that want to control who  can access their product listings and other inventory information. It helps maintain privacy and control over data distribution, ensuring that sensitive information is only shared with authorized partners. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/configuration/optOutFromApplication/).
     */
    optOutFromApplication({ id, body, requestHeaders }?: ConfigurationPlatformValidator.OptOutFromApplicationParam, { responseHeaders }?: object): Promise<ConfigurationPlatformModel.SuccessMessageResponseSchema>;
}
import ConfigurationPlatformValidator = require("./ConfigurationPlatformValidator");
import ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
import Paginator = require("../../common/Paginator");
