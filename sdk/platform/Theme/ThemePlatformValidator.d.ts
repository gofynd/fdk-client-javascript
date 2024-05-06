export = ThemePlatformValidator;
/**
 * @typedef AddMarketplaceThemeToCompanyParam
 * @property {ThemePlatformModel.ThemeReq} body
 */
/**
 * @typedef DeleteCompanyThemeParam
 * @property {string} themeId - The ID of the theme.
 */
/**
 * @typedef GetCompanyLevelPrivateThemesParam
 * @property {string} [searchText] - Search Text to match the Theme Names and
 *   return the response.
 */
/**
 * @typedef GetCompanyLevelThemesParam
 * @property {string} [searchText] - Search Text to match the Theme Names and
 *   return the response.
 */
declare class ThemePlatformValidator {
    /** @returns {AddMarketplaceThemeToCompanyParam} */
    static addMarketplaceThemeToCompany(): AddMarketplaceThemeToCompanyParam;
    /** @returns {DeleteCompanyThemeParam} */
    static deleteCompanyTheme(): DeleteCompanyThemeParam;
    /** @returns {GetCompanyLevelPrivateThemesParam} */
    static getCompanyLevelPrivateThemes(): GetCompanyLevelPrivateThemesParam;
    /** @returns {GetCompanyLevelThemesParam} */
    static getCompanyLevelThemes(): GetCompanyLevelThemesParam;
}
declare namespace ThemePlatformValidator {
    export { AddMarketplaceThemeToCompanyParam, DeleteCompanyThemeParam, GetCompanyLevelPrivateThemesParam, GetCompanyLevelThemesParam };
}
type AddMarketplaceThemeToCompanyParam = {
    body: ThemePlatformModel.ThemeReq;
};
type DeleteCompanyThemeParam = {
    /**
     * - The ID of the theme.
     */
    themeId: string;
};
type GetCompanyLevelPrivateThemesParam = {
    /**
     * - Search Text to match the Theme Names and
     * return the response.
     */
    searchText?: string;
};
type GetCompanyLevelThemesParam = {
    /**
     * - Search Text to match the Theme Names and
     * return the response.
     */
    searchText?: string;
};
import ThemePlatformModel = require("sdk/output/javascript/code/sdk/platform/Theme/ThemePlatformModel");
