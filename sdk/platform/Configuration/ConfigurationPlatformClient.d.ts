export = Configuration;
declare class Configuration {
    constructor(config: any);
    config: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateApplicationRequest} arg.body
     * @returns {Promise<CreateAppResponse>} - Success response
     * @summary: Create a new sales channel
     * @description: Applications are sales channel websites which can be configured, personalized and customized. Use this API to create a new application in the current company.
     */
    createApplication({ body }?: {
        body: CreateApplicationRequest;
    }): Promise<CreateAppResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] -
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] - Url encoded object used as mongodb query
     * @returns {Promise<ApplicationsResponse>} - Success response
     * @summary: Get list of registered sales channels under company
     * @description: Applications are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of applications created within a company.
     */
    getApplications({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }): Promise<ApplicationsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] -
     * @param {string} [arg.q] - Url encoded object used as mongodb query
     * @summary: Get list of registered sales channels under company
     * @description: Applications are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of applications created within a company.
     */
    getApplicationsPaginator({ pageSize, q }?: {
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Promise<GetIntegrationsOptInsResponse>} - Success response
     * @summary: Get all available integration opt-ins
     * @description: Use this API to get a list of all available integrations in a company
     */
    getAvailableOptIns({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<GetIntegrationsOptInsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.q] - Search text for brand name
     * @returns {Promise<BrandsByCompanyResponse>} - Success response
     * @summary: Get brands by company.
     * @description: Use this API to get all the brands added in a company. Get all the brand names, along with URLs of their logo, banner, and portrait image.
     */
    getBrandsByCompany({ q }?: {
        q?: string;
    }): Promise<BrandsByCompanyResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {CompanyByBrandsRequest} arg.body
     * @returns {Promise<CompanyByBrandsResponse>} - Success response
     * @summary: Get company by brand uids
     * @description: Use this API to get a list of companies by the brands they deal
     */
    getCompanyByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: CompanyByBrandsRequest;
    }): Promise<CompanyByBrandsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {CompanyByBrandsRequest} arg.body
     * @summary: Get company by brand uids
     * @description: Use this API to get a list of companies by the brands they deal
     */
    getCompanyByBrandsPaginator({ pageSize, body }?: {
        pageSize?: number;
        body: CompanyByBrandsRequest;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @returns {Promise<CurrenciesResponse>} - Success response
     * @summary: Get all currencies
     * @description: Use this API to get a list of currencies allowed in the company. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
     */
    getCurrencies({}?: any): Promise<CurrenciesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DomainSuggestionsRequest} arg.body
     * @returns {Promise<DomainSuggestionsResponse>} - Success response
     * @summary: Check domain availability before linking to application
     * @description: Use this API to check the domain availability before linking it to application. Also sends domain suggestions that are similar to the queried domain. Note - Custom domain search is currently powered by GoDaddy provider.
     */
    getDomainAvailibility({ body }?: {
        body: DomainSuggestionsRequest;
    }): Promise<DomainSuggestionsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} arg.id - Integration id
     * @returns {Promise<Integration>} - Success response
     * @summary: Get integration data by its ID
     * @description: Use this API to fetch the details of an integration (such as Ginesys, SAP, etc.) using its ID
     */
    getIntegrationById({ id }?: {
        id: number;
    }): Promise<Integration>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Integration ID (24-digit Mongo Object ID)
     * @param {string} arg.level - Integration level, `store` or `company`
     * @param {number} arg.uid - Unique identifier of integration level (store/company)
     * @returns {Promise<IntegrationLevel>} - Success response
     * @summary: Get integration config at a particular level (store/company)
     * @description: Use this API to get the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc. at a particular level (store/company).
     */
    getIntegrationByLevelId({ id, level, uid }?: {
        id: string;
        level: string;
        uid: number;
    }): Promise<IntegrationLevel>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Integration ID (24-digit Mongo Object ID)
     * @param {string} arg.level - Store or company
     * @param {boolean} [arg.opted] - True means get the opted stores. False
     *   means get the stores that aren't opted.
     * @param {boolean} [arg.checkPermission] - Filter on if permissions (for
     *   inventory/order) are present
     * @returns {Promise<IntegrationConfigResponse>} - Success response
     * @summary: Get integration level config
     * @description: Use this API to get the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc.
     */
    getIntegrationLevelConfig({ id, level, opted, checkPermission }?: {
        id: string;
        level: string;
        opted?: boolean;
        checkPermission?: boolean;
    }): Promise<IntegrationConfigResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Integration ID (24-digit Mongo Object ID)
     * @param {string} arg.level - Integration level, `store` or `company`
     * @param {number} arg.uid - Unique identifier of integration level (store/company)
     * @returns {Promise<OptedStoreIntegration>} - Success response
     * @summary: Check active integration at store
     * @description: Use this API to check if a store is already opted-in for any integration
     */
    getLevelActiveIntegrations({ id, level, uid }?: {
        id: string;
        level: string;
        uid: number;
    }): Promise<OptedStoreIntegration>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Application Id
     * @returns {Promise<OptedApplicationResponse>} - Success response
     * @summary: Get other seller's sales channel by ID
     * @description: Use application ID to fetch details of a seller application that was not created within the current company. but has opted for the current company's inventory
     */
    getOtherSellerApplicationById({ id }?: {
        id: string;
    }): Promise<OptedApplicationResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Promise<OtherSellerApplications>} - Success response
     * @summary: Get other seller sales channels
     * @description: Use this API to fetch all other seller applications that were not created within the current company. but have opted for the current company's inventory
     */
    getOtherSellerApplications({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<OtherSellerApplications>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get other seller sales channels
     * @description: Use this API to fetch all other seller applications that were not created within the current company. but have opted for the current company's inventory
     */
    getOtherSellerApplicationsPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.level - Store or company
     * @param {number} arg.uid - Unique identifier of the selected integration level.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @returns {Promise<GetIntegrationsOptInsResponse>} - Success response
     * @summary: Get company/store level integration opt-ins
     * @description: Use this API to get the store-level/company-level integrations configured in a company
     */
    getSelectedOptIns({ level, uid, pageNo, pageSize }?: {
        level: string;
        uid: number;
        pageNo?: number;
        pageSize?: number;
    }): Promise<GetIntegrationsOptInsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {StoreByBrandsRequest} arg.body
     * @returns {Promise<StoreByBrandsResponse>} - Success response
     * @summary: Get stores by brand uids for the current company
     * @description: Use this API to get a list of selling locations (stores) by the brands they deal. Store has information about store name, store type, store code, store address, and company detail.
     */
    getStoreByBrands({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: StoreByBrandsRequest;
    }): Promise<StoreByBrandsResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {StoreByBrandsRequest} arg.body
     * @summary: Get stores by brand uids for the current company
     * @description: Use this API to get a list of selling locations (stores) by the brands they deal. Store has information about store name, store type, store code, store address, and company detail.
     */
    getStoreByBrandsPaginator({ pageSize, body }?: {
        pageSize?: number;
        body: StoreByBrandsRequest;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Alphanumeric ID allotted to an application
     *   (sales channel website) created within a business account.
     * @param {OptOutInventory} arg.body
     * @returns {Promise<SuccessMessageResponse>} - Success response
     * @summary: Opt-out company or store from other seller application
     * @description: Use this API to opt-out your company or store from other seller application. The specific seller application will no longer fetch inventory from your company or store.
     */
    optOutFromApplication({ id, body }?: {
        id: string;
        body: OptOutInventory;
    }): Promise<SuccessMessageResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Integration ID (24-digit Mongo Object ID)
     * @param {string} arg.level - Integration level, `store` or `company`
     * @param {UpdateIntegrationLevelRequest} arg.body
     * @returns {Promise<IntegrationLevel>} - Success response
     * @summary: Update a store level integration you opted
     * @description: Use this API to update the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc. at a particular level (store/company).
     */
    updateLevelIntegration({ id, level, body }?: {
        id: string;
        level: string;
        body: UpdateIntegrationLevelRequest;
    }): Promise<IntegrationLevel>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - Integration ID (24-digit Mongo Object ID)
     * @param {string} arg.level - Integration level, `store` or `company`
     * @param {number} arg.uid - Unique identifier of integration level (store/company)
     * @param {IntegrationLevel} arg.body
     * @returns {Promise<IntegrationLevel>} - Success response
     * @summary: Update integration level by store UID
     * @description: Update the level of integration by store UID
     */
    updateLevelUidIntegration({ id, level, uid, body }?: {
        id: string;
        level: string;
        uid: number;
        body: IntegrationLevel;
    }): Promise<IntegrationLevel>;
}
import Paginator = require("../../common/Paginator");
