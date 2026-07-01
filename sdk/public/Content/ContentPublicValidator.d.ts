export = ContentPublicValidator;
/**
 * @typedef GetAllLanguagesParam
 * @property {boolean} [isEnabled] - Filter languages by enabled status.
 */
/** @typedef GetAllTagsParam */
/** @typedef GetAllTranslatableResourcesParam */
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
/**
 * @typedef GetLanguageByLocaleParam
 * @property {string} locale
 */
/** @typedef GetMenuContentParam */
/**
 * @typedef GetMenuContentByTypeParam
 * @property {string} type - Type param is type of device
 */
/** @typedef GetNavbarParam */
/** @typedef GetPricingBannerParam */
declare class ContentPublicValidator {
    /** @returns {GetAllLanguagesParam} */
    static getAllLanguages(): GetAllLanguagesParam;
    /** @returns {GetAllTagsParam} */
    static getAllTags(): any;
    /** @returns {GetAllTranslatableResourcesParam} */
    static getAllTranslatableResources(): any;
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
    /** @returns {GetLanguageByLocaleParam} */
    static getLanguageByLocale(): GetLanguageByLocaleParam;
    /** @returns {GetMenuContentParam} */
    static getMenuContent(): any;
    /** @returns {GetMenuContentByTypeParam} */
    static getMenuContentByType(): GetMenuContentByTypeParam;
    /** @returns {GetNavbarParam} */
    static getNavbar(): any;
    /** @returns {GetPricingBannerParam} */
    static getPricingBanner(): any;
}
declare namespace ContentPublicValidator {
    export { GetAllLanguagesParam, GetAllTagsParam, GetAllTranslatableResourcesParam, GetAnalyticsTagsParam, GetBasicDetailsParam, GetCredentialsByEntityParam, GetCustomPageParam, GetFooterContentParam, GetHomePageContentParam, GetLanguageByLocaleParam, GetMenuContentParam, GetMenuContentByTypeParam, GetNavbarParam, GetPricingBannerParam };
}
type GetAllLanguagesParam = {
    /**
     * - Filter languages by enabled status.
     */
    isEnabled?: boolean;
};
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
type GetLanguageByLocaleParam = {
    locale: string;
};
type GetMenuContentByTypeParam = {
    /**
     * - Type param is type of device
     */
    type: string;
};
type GetAllTagsParam = any;
type GetAllTranslatableResourcesParam = any;
type GetAnalyticsTagsParam = any;
type GetBasicDetailsParam = any;
type GetFooterContentParam = any;
type GetMenuContentParam = any;
type GetNavbarParam = any;
type GetPricingBannerParam = any;
