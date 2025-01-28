export = ContentPublicValidator;
/** @typedef GetAllTagsParam */
/** @typedef GetAnalyticsTagsParam */
/** @typedef GetBasicDetailsParam */
/**
 * @typedef GetCredentialsByEntityParam
 * @property {string} entityType - Server Type
 */
/**
 * @typedef GetCustomPageParam
 * @property {string} slug - Unique identifier created for each feature object
 *   in the schema.
 */
/** @typedef GetFooterContentParam */
/**
 * @typedef GetHomePageContentParam
 * @property {string} pageType - The type of the page (e.g., pricing).
 */
/** @typedef GetMenuContentParam */
/**
 * @typedef GetMenuContentByTypeParam
 * @property {string} type - Type param is type of device
 */
/** @typedef GetNavbarParam */
/** @typedef GetPricingBannerParam */
/** @typedef GetSDKDocumentationParam */
/**
 * @typedef GetSDKDocumentationByTypeParam
 * @property {string} type - Type of SDK
 */
declare class ContentPublicValidator {
    /** @returns {GetAllTagsParam} */
    static getAllTags(): any;
    /** @returns {GetAnalyticsTagsParam} */
    static getAnalyticsTags(): any;
    /** @returns {GetBasicDetailsParam} */
    static getBasicDetails(): any;
    /** @returns {GetCredentialsByEntityParam} */
    static getCredentialsByEntity(): GetCredentialsByEntityParam;
    /** @returns {GetCustomPageParam} */
    static getCustomPage(): GetCustomPageParam;
    /** @returns {GetFooterContentParam} */
    static getFooterContent(): any;
    /** @returns {GetHomePageContentParam} */
    static getHomePageContent(): GetHomePageContentParam;
    /** @returns {GetMenuContentParam} */
    static getMenuContent(): any;
    /** @returns {GetMenuContentByTypeParam} */
    static getMenuContentByType(): GetMenuContentByTypeParam;
    /** @returns {GetNavbarParam} */
    static getNavbar(): any;
    /** @returns {GetPricingBannerParam} */
    static getPricingBanner(): any;
    /** @returns {GetSDKDocumentationParam} */
    static getSDKDocumentation(): any;
    /** @returns {GetSDKDocumentationByTypeParam} */
    static getSDKDocumentationByType(): GetSDKDocumentationByTypeParam;
}
declare namespace ContentPublicValidator {
    export { GetAllTagsParam, GetAnalyticsTagsParam, GetBasicDetailsParam, GetCredentialsByEntityParam, GetCustomPageParam, GetFooterContentParam, GetHomePageContentParam, GetMenuContentParam, GetMenuContentByTypeParam, GetNavbarParam, GetPricingBannerParam, GetSDKDocumentationParam, GetSDKDocumentationByTypeParam };
}
type GetCredentialsByEntityParam = {
    /**
     * - Server Type
     */
    entityType: string;
};
type GetCustomPageParam = {
    /**
     * - Unique identifier created for each feature object
     * in the schema.
     */
    slug: string;
};
type GetHomePageContentParam = {
    /**
     * - The type of the page (e.g., pricing).
     */
    pageType: string;
};
type GetMenuContentByTypeParam = {
    /**
     * - Type param is type of device
     */
    type: string;
};
type GetSDKDocumentationByTypeParam = {
    /**
     * - Type of SDK
     */
    type: string;
};
type GetAllTagsParam = any;
type GetAnalyticsTagsParam = any;
type GetBasicDetailsParam = any;
type GetFooterContentParam = any;
type GetMenuContentParam = any;
type GetNavbarParam = any;
type GetPricingBannerParam = any;
type GetSDKDocumentationParam = any;
