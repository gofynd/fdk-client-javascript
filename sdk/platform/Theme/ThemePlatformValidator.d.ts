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
    /** @returns {AddMarketplaceThemeToCompanyParam} */
    static addMarketplaceThemeToCompany(): AddMarketplaceThemeToCompanyParam;
    /** @returns {DeleteCompanyThemeParam} */
    static deleteCompanyTheme(): DeleteCompanyThemeParam;
    /** @returns {GetCompanyLevelThemesParam} */
    static getCompanyLevelThemes(): any;
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
