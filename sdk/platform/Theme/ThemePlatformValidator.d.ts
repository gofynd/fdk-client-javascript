export = ThemePlatformValidator;
/**
 * @typedef AddMarketplaceThemeToCompanyParam
 * @property {ThemePlatformModel.ThemeReq} body
 */
/**
 * @typedef DeleteCompanyThemeParam
 * @property {string} themeId - The ID of the theme.
 */
/** @typedef GetCompanyLevelThemesParam */
declare class ThemePlatformValidator {
    /** @returns {addMarketplaceThemeToCompany} */
    static addMarketplaceThemeToCompany(): addMarketplaceThemeToCompany;
    /** @returns {deleteCompanyTheme} */
    static deleteCompanyTheme(): deleteCompanyTheme;
    /** @returns {getCompanyLevelThemes} */
    static getCompanyLevelThemes(): getCompanyLevelThemes;
}
declare namespace ThemePlatformValidator {
    export { AddMarketplaceThemeToCompanyParam, DeleteCompanyThemeParam, GetCompanyLevelThemesParam };
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
type GetCompanyLevelThemesParam = any;
import ThemePlatformModel = require("./ThemePlatformModel");
