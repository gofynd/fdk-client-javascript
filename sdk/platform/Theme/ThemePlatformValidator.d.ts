export = ThemePlatformValidator;
/**
 * @typedef addMarketplaceThemeToCompany
 * @property {ThemePlatformModel.ThemeReq} body
 */
/**
 * @typedef deleteCompanyTheme
 * @property {string} themeId - The ID of the theme.
 */
/** @typedef getCompanyLevelThemes */
declare class ThemePlatformValidator {
}
declare namespace ThemePlatformValidator {
    export { addMarketplaceThemeToCompany, deleteCompanyTheme, getCompanyLevelThemes };
}
/** @returns {addMarketplaceThemeToCompany} */
declare function addMarketplaceThemeToCompany(): addMarketplaceThemeToCompany;
type addMarketplaceThemeToCompany = {
    body: ThemePlatformModel.ThemeReq;
};
/** @returns {deleteCompanyTheme} */
declare function deleteCompanyTheme(): deleteCompanyTheme;
type deleteCompanyTheme = {
    /**
     * - The ID of the theme.
     */
    themeId: string;
};
/** @returns {getCompanyLevelThemes} */
declare function getCompanyLevelThemes(): any;
type getCompanyLevelThemes = any;
import ThemePlatformModel = require("./ThemePlatformModel");
