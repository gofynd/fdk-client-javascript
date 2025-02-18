export = Content;
declare class Content {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        getAllLanguages: string;
        getAllTags: string;
        getAllTranslatableResources: string;
        getAnalyticsTags: string;
        getBasicDetails: string;
        getCredentialsByEntity: string;
        getCustomPage: string;
        getFooterContent: string;
        getHomePageContent: string;
        getLanguageByLocale: string;
        getMenuContent: string;
        getMenuContentByType: string;
        getNavbar: string;
        getPricingBanner: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {ContentPublicValidator.GetAllLanguagesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getAllLanguages
     * @summary: Get All Languages
     * @description: Fetches complete list of languages supported by the platform with their locale codes and text directions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getAllLanguages/).
     */
    getAllLanguages({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ContentPublicValidator.GetAllTagsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ContentPublicModel.TagsSchema>} - Success response
     * @name getAllTags
     * @summary: Retrieve tags with injected css/javascript info.
     * @description: Retrieve custom tag with injected css/javascript info. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getAllTags/).
     */
    getAllTags({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPublicModel.TagsSchema>;
    /**
     * @param {ContentPublicValidator.GetAllTranslatableResourcesParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<Object>} - Success response
     * @name getAllTranslatableResources
     * @summary: Get Translatable Items
     * @description: Retrieves all resources that can be translated across different languages in the system. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getAllTranslatableResources/).
     */
    getAllTranslatableResources({ requestHeaders }?: any, { responseHeaders }?: object): Promise<any>;
    /**
     * @param {ContentPublicValidator.GetAnalyticsTagsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ContentPublicModel.AnalyticsTagsSchema>} - Success response
     * @name getAnalyticsTags
     * @summary: Get Analytics Tags
     * @description: Retrieve analytics tags. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getAnalyticsTags/).
     */
    getAnalyticsTags({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPublicModel.AnalyticsTagsSchema>;
    /**
     * @param {ContentPublicValidator.GetBasicDetailsParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ContentPublicModel.BasicDetailsPayloadSchema>} - Success response
     * @name getBasicDetails
     * @summary: get basic platform information
     * @description: get basic platform information on Admin panel like Common Settings, Appereance of  Authentication Page, Text on Seller Login or Register Page, Business Account Restrictions, Seller Support Details and Footer Details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getBasicDetails/).
     */
    getBasicDetails({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPublicModel.BasicDetailsPayloadSchema>;
    /**
     * @param {ContentPublicValidator.GetCredentialsByEntityParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ContentPublicModel.CredentialsSchema>} - Success response
     * @name getCredentialsByEntity
     * @summary: Get credentials to power chat support systems
     * @description: Get credentials for support system - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getCredentialsByEntity/).
     */
    getCredentialsByEntity({ entityType, requestHeaders }?: ContentPublicValidator.GetCredentialsByEntityParam, { responseHeaders }?: object, ...args: any[]): Promise<ContentPublicModel.CredentialsSchema>;
    /**
     * @param {ContentPublicValidator.GetCustomPageParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ContentPublicModel.CustomPageBySlugSchema>} - Success response
     * @name getCustomPage
     * @summary: Retrieve info for custom page.
     * @description: Retrieve info of custom pagee to develop and manage custom webpages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getCustomPage/).
     */
    getCustomPage({ slug, requestHeaders }?: ContentPublicValidator.GetCustomPageParam, { responseHeaders }?: object, ...args: any[]): Promise<ContentPublicModel.CustomPageBySlugSchema>;
    /**
     * @param {ContentPublicValidator.GetFooterContentParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ContentPublicModel.FooterSchema>} - Success response
     * @name getFooterContent
     * @summary: Get Footer Content
     * @description: Retrieve footer content. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getFooterContent/).
     */
    getFooterContent({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPublicModel.FooterSchema>;
    /**
     * @param {ContentPublicValidator.GetHomePageContentParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ContentPublicModel.HomePageContentSchema>} - Success response
     * @name getHomePageContent
     * @summary: Get Home Page Content
     * @description: Retrieve home page content for a specific page type. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getHomePageContent/).
     */
    getHomePageContent({ pageType, requestHeaders }?: ContentPublicValidator.GetHomePageContentParam, { responseHeaders }?: object): Promise<ContentPublicModel.HomePageContentSchema>;
    /**
     * @param {ContentPublicValidator.GetLanguageByLocaleParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ContentPublicModel.Language>} - Success response
     * @name getLanguageByLocale
     * @summary: Get Single Language
     * @description: Retrieves detailed information about a specific language using its locale identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getLanguageByLocale/).
     */
    getLanguageByLocale({ locale, requestHeaders }?: ContentPublicValidator.GetLanguageByLocaleParam, { responseHeaders }?: object, ...args: any[]): Promise<ContentPublicModel.Language>;
    /**
     * @param {ContentPublicValidator.GetMenuContentParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ContentPublicModel.MenusSchema>} - Success response
     * @name getMenuContent
     * @summary: Get desktop menu content
     * @description: Retrieves the desktop menu content. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getMenuContent/).
     */
    getMenuContent({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPublicModel.MenusSchema>;
    /**
     * @param {ContentPublicValidator.GetMenuContentByTypeParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ContentPublicModel.MenuTypeSchema>} - Success response
     * @name getMenuContentByType
     * @summary: Get desktop menu content
     * @description: Retrieves the desktop menu content. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getMenuContentByType/).
     */
    getMenuContentByType({ type, requestHeaders }?: ContentPublicValidator.GetMenuContentByTypeParam, { responseHeaders }?: object, ...args: any[]): Promise<ContentPublicModel.MenuTypeSchema>;
    /**
     * @param {ContentPublicValidator.GetNavbarParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ContentPublicModel.NavbarSchema>} - Success response
     * @name getNavbar
     * @summary: Get Navbar
     * @description: Retrieve navbar information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getNavbar/).
     */
    getNavbar({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPublicModel.NavbarSchema>;
    /**
     * @param {ContentPublicValidator.GetPricingBannerParam} arg - Arg object.
     * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
     * @param {import("../PublicAPIClient").Options} - Options
     * @returns {Promise<ContentPublicModel.PricingBannerSchema>} - Success response
     * @name getPricingBanner
     * @summary: Get Pricing Banner
     * @description: Retrieve pricing banner information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getPricingBanner/).
     */
    getPricingBanner({ requestHeaders }?: any, { responseHeaders }?: object): Promise<ContentPublicModel.PricingBannerSchema>;
}
import ContentPublicModel = require("./ContentPublicModel");
import ContentPublicValidator = require("./ContentPublicValidator");
