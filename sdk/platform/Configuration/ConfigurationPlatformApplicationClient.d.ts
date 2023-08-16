export = Configuration;
declare class Configuration {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     * @param {Object} arg - Arg object.
     * @param {DomainAddRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Domain>} - Success response
     * @summary: Add new domain to current sales channel
     * @description: Add a new domain to current sales channel, including pre-defined domain (free domain) or custom domain (owned by the brand)
     */
    addDomain({ body }?: {
        body: DomainAddRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<Domain>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateDomainTypeRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DomainsResponse>} - Success response
     * @summary: Change the type of domain in the current sales channel
     * @description: Primary domain is used as the URL of your website. Short link domain is comparatively smaller and used while generating short links. Use this API to change a domain to either Primary or a Shortlink domain.
     */
    changeDomainType({ body }?: {
        body: UpdateDomainTypeRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DomainsResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<TokenResponse>} - Success response
     * @summary: Get social tokens for the sales channel
     * @description: Use this API to retrieve the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google, and Facebook auth. **Note** - Token values are encrypted with AES encryption using a secret key.
     */
    getAppApiTokens({ headers }?: import("../PlatformAPIClient").Options): Promise<TokenResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationDetail>} - Success response
     * @summary: Get sales channel details
     * @description: Shows basic sales channel details like name, description, logo, domain, company ID, and other related information.
     */
    getAppBasicDetails({ headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationDetail>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.uid] - UID of companies to be fetched
     * @param {number} [arg.pageNo] - The current page number to navigate
     *   through the given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<CompaniesResponse>} - Success response
     * @summary: Get companies enabled in the sales channel inventory
     * @description: Fetch info of all the companies (e.g. name, uid, and company type) whose inventory is fetched into the current sales channel application
     */
    getAppCompanies({ uid, pageNo, pageSize }?: {
        uid?: number;
        pageNo?: number;
        pageSize?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<CompaniesResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Alphanumeric ID allotted to an
     *   application (sales channel website) created within a business account
     * @param {number} [arg.uid] - UID of companies to be fetched
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get companies enabled in the sales channel inventory
     * @description: Fetch info of all the companies (e.g. name, uid, and company type) whose inventory is fetched into the current sales channel application
     */
    getAppCompaniesPaginator({ companyId, applicationId, uid, pageSize }?: {
        companyId: string;
        applicationId: string;
        uid?: number;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationInformation>} - Success response
     * @summary: Get current information of the sales channel
     * @description: Fetch data such as social links, copyright text, business highlights, address and contact information of the company/seller/brand operating the application.
     */
    getAppContactInfo({ headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationInformation>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AppSupportedCurrency>} - Success response
     * @summary: Get currencies supported in the application
     * @description: Get a list of currencies supported in the current sales channel. Moreover, get the cuurency that is set as the default one in the application.
     */
    getAppCurrencyConfig({ headers }?: import("../PlatformAPIClient").Options): Promise<AppSupportedCurrency>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AppFeatureResponse>} - Success response
     * @summary: Get the sales channel configuration and features
     * @description: Shows feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more.
     */
    getAppFeatures({ headers }?: import("../PlatformAPIClient").Options): Promise<AppFeatureResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The current page number to navigate
     *   through the given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<StoresResponse>} - Success response
     * @summary: Get stores enabled in the sales channel inventory
     * @description: Fetch info of all the companies (e.g. uid, name, display name, store type, store code and company id) whose inventory is fetched into the current sales channel application
     */
    getAppStores({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<StoresResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Alphanumeric ID allotted to an
     *   application (sales channel website) created within a business account
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @summary: Get stores enabled in the sales channel inventory
     * @description: Fetch info of all the companies (e.g. uid, name, display name, store type, store code and company id) whose inventory is fetched into the current sales channel application
     */
    getAppStoresPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AppCurrencyResponse>} - Success response
     * @summary: Get currencies enabled in the application
     * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
     */
    getAppSupportedCurrency({ headers }?: import("../PlatformAPIClient").Options): Promise<AppCurrencyResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<Application>} - Success response
     * @summary: Get sales channel data by ID
     * @description: Use application ID to get the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, token, etc.
     */
    getApplicationById({ headers }?: import("../PlatformAPIClient").Options): Promise<Application>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - The device platform for which the
     *   mobile app is built, e.g. android, ios.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<MobileAppConfiguration>} - Success response
     * @summary: Get configuration of latest mobile build
     * @description: Fetch latest build configuration, such as app name, landing page image, splash image used in a mobile build.
     */
    getBuildConfig({ platformType }?: {
        platformType: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<MobileAppConfiguration>;
    /**
     * @param {Object} arg - Arg object.
     * @param {DomainStatusRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DomainStatusResponse>} - Success response
     * @summary: Get the status of connected domain
     * @description: Shows if the A records and TXT records of the domain correctly points to appropriate IP on Fynd Servers.
     */
    getDomainStatus({ body }?: {
        body: DomainStatusRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DomainStatusResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DomainsResponse>} - Success response
     * @summary: Fetch all the domains added to an  application (sales channel website), including pre-defined domain (free domain) or custom domain (owned by the brand). Know the verification status of each domain name, and find out which one is the primary domain, short link domain, or both.
     * @description: Get list of domains
     */
    getDomains({ headers }?: import("../PlatformAPIClient").Options): Promise<DomainsResponse>;
    /**
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationInventory>} - Success response
     * @summary: Get sales channel configuration
     * @description: Use this API to fetch configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc.
     */
    getInventoryConfig({ headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationInventory>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {FilterOrderingStoreRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderingStores>} - Success response
     * @summary: Get ordering store by filter
     * @description: Use this API to use filters and retrieve the details of the deployment stores (the selling locations where the application will be utilised for placing orders).
     */
    getOrderingStoresByFilter({ body, pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
        body: FilterOrderingStoreRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderingStores>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Alphanumeric ID allotted to an
     *   application (sales channel website) created within a business account
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {FilterOrderingStoreRequest} arg.body
     * @summary: Get ordering store by filter
     * @description: Use this API to use filters and retrieve the details of the deployment stores (the selling locations where the application will be utilised for placing orders).
     */
    getOrderingStoresByFilterPaginator({ companyId, applicationId, pageSize, body, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        body: FilterOrderingStoreRequest;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - The device platform for which the
     *   mobile app is built, e.g. android, ios.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<BuildVersionHistory>} - Success response
     * @summary: Get details of previous mobile builds
     * @description: Fetch version details of the app, this includes the build status, build date, version name, latest version, and a lot more.
     */
    getPreviousVersions({ platformType }?: {
        platformType: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<BuildVersionHistory>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<OrderingStoresResponse>} - Success response
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
     */
    getStaffOrderingStores({ pageNo, pageSize, q }?: {
        pageNo?: number;
        pageSize?: number;
        q?: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<OrderingStoresResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.companyId - Numeric ID allotted to a business account
     *   on Fynd Platform
     * @param {string} arg.applicationId - Alphanumeric ID allotted to an
     *   application (sales channel website) created within a business account
     * @param {number} [arg.pageSize] - The number of items to retrieve in each
     *   page. Default value is 10.
     * @param {string} [arg.q] - Store code or name of the ordering store.
     * @summary: Get deployment stores
     * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
     */
    getStaffOrderingStoresPaginator({ companyId, applicationId, pageSize, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        q?: string;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppFeatureRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AppFeature>} - Success response
     * @summary: Update features of application
     * @description: Update features of application
     */
    modifyAppFeatures({ body }?: {
        body: AppFeatureRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<AppFeature>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppInventoryPartialUpdate} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationInventory>} - Success response
     * @summary: Partially update sales channel configuration
     * @description: Partially update the configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc.
     */
    partiallyUpdateInventoryConfig({ body }?: {
        body: AppInventoryPartialUpdate;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationInventory>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.id - The unique identifier (24-digit Mongo Object ID)
     *   of the domain
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<SuccessMessageResponse>} - Success response
     * @summary: Remove attached domain from current sales channel
     * @description: Delete a domain (secondary or shortlink domain) added to a sales channel. It will disable user's access to website, shared links, and other features associated with this domain.
     */
    removeDomainById({ id }?: {
        id: string;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<SuccessMessageResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {TokenResponse} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<TokenResponse>} - Success response
     * @summary: Add or update social tokens for the sales channel
     * @description: Use this API to add or edit the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google and Facebook auth.
     */
    updateAppApiTokens({ body }?: {
        body: TokenResponse;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<TokenResponse>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationDetail} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationDetail>} - Success response
     * @summary: Update sales channel details
     * @description: Modify sales channel details like name, description, logo, domain, company ID, and other related information.
     */
    updateAppBasicDetails({ body }?: {
        body: ApplicationDetail;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationDetail>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationInformation} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationInformation>} - Success response
     * @summary: Save or update current information of the sales channel
     * @description: Modify the social links, copyright text, business highlights, address and contact information of the company/seller/brand operating the application.
     */
    updateAppContactInfo({ body }?: {
        body: ApplicationInformation;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationInformation>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppSupportedCurrency} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AppSupportedCurrency>} - Success response
     * @summary: Update initial sales channel supported currency
     * @description: Use this API to add and edit the currencies supported in the application. Initially, INR will be enabled by default.
     */
    updateAppCurrencyConfig({ body }?: {
        body: AppSupportedCurrency;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<AppSupportedCurrency>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AppFeatureRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<AppFeature>} - Success response
     * @summary: Update the sales channel configuration and features
     * @description: Modify the feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more.
     */
    updateAppFeatures({ body }?: {
        body: AppFeatureRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<AppFeature>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.platformType - The device platform for which the
     *   mobile app is built, e.g. android, ios.
     * @param {MobileAppConfigRequest} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<MobileAppConfiguration>} - Success response
     * @summary: Update the configuration for next mobile build
     * @description: Modify the existing build configuration, such as app name, landing page image, splash image used in a mobile build.
     */
    updateBuildConfig({ platformType, body }?: {
        platformType: string;
        body: MobileAppConfigRequest;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<MobileAppConfiguration>;
    /**
     * @param {Object} arg - Arg object.
     * @param {ApplicationInventory} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<ApplicationInventory>} - Success response
     * @summary: Update sales channel configuration
     * @description: Modify the configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc.
     */
    updateInventoryConfig({ body }?: {
        body: ApplicationInventory;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<ApplicationInventory>;
    /**
     * @param {Object} arg - Arg object.
     * @param {OrderingStoreConfig} arg.body
     * @param {import("../PlatformAPIClient").Options} - Options
     * @returns {Promise<DeploymentMeta>} - Success response
     * @summary: Add/Update ordering store config
     * @description: Use this API to edit the details of the deployment stores (the selling locations where the application will be utilised for placing orders)
     */
    updateOrderingStoreConfig({ body }?: {
        body: OrderingStoreConfig;
    }, { headers }?: import("../PlatformAPIClient").Options): Promise<DeploymentMeta>;
}
import Paginator = require("../../common/Paginator");
