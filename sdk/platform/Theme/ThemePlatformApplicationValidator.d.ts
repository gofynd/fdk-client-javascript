export = ThemePlatformApplicationValidator;
/**
 * @typedef ApplyThemeParam
 * @property {string} themeId - The ID of the apply
 */
/**
 * @typedef CreatePageParam
 * @property {string} themeId - ID of the theme
 * @property {ThemePlatformModel.AvailablePageSchema} body
 */
/**
 * @typedef CreateThemeParam
 * @property {ThemePlatformModel.CompanyThemeReqSchema} body
 */
/**
 * @typedef DeletePageParam
 * @property {string} themeId - ID of the theme
 * @property {string} pageValue - Value of the page to be updated
 */
/**
 * @typedef DeleteThemeParam
 * @property {string} themeId - The ID of the theme to be deleted.
 */
/**
 * @typedef DuplicateThemeParam
 * @property {string} themeId - The ID of the theme to be duplicated
 */
/**
 * @typedef GetAllPagesParam
 * @property {string} themeId - ID of the theme to be retrieved
 */
/** @typedef GetApplicationThemesParam */
/** @typedef GetApplicationThemesCountParam */
/** @typedef GetAppliedThemeParam */
/**
 * @typedef GetExtensionSectionsParam
 * @property {string} [type] - The type of the theme
 * @property {string} [companyMode] - The mode of the company
 */
/** @typedef GetFontsParam */
/** @typedef GetFontsV2Param */
/**
 * @typedef GetLatestVersionOfThemeBySlugParam
 * @property {string} slugName - Slug of theme
 */
/**
 * @typedef GetPageParam
 * @property {string} themeId - ID of the theme to be retrieved
 * @property {string} pageValue - Value of the page to be retrieved
 */
/**
 * @typedef GetThemeByIdParam
 * @property {string} themeId - The ID of the theme
 */
/**
 * @typedef GetThemeForPreviewParam
 * @property {string} themeId - The ID of the theme
 */
/**
 * @typedef GetThemeLastModifiedParam
 * @property {string} themeId - ID allotted to the theme.
 */
/**
 * @typedef IsUpgradableParam
 * @property {string} themeId - The ID of the theme
 */
/**
 * @typedef UpdateMultiplePagesParam
 * @property {string} themeId - ID of the theme to be retrieved
 * @property {ThemePlatformModel.AllAvailablePageSchema} body
 */
/**
 * @typedef UpdatePageParam
 * @property {string} themeId - ID of the theme
 * @property {string} pageValue - Value of the page to be updated
 * @property {string} socketId - Unique socket id for websocket
 * @property {ThemePlatformModel.AvailablePageSchema} body
 */
/**
 * @typedef UpdateThemeParam
 * @property {string} themeId - The ID of the theme.
 * @property {ThemePlatformModel.ThemesSchema} body
 */
/**
 * @typedef UpdateThemeNameParam
 * @property {string} themeId - The ID of the theme to be updated.
 * @property {ThemePlatformModel.UpdateThemeNameRequestBody} body
 */
/**
 * @typedef UpgradeThemeParam
 * @property {string} themeId - The ID of the upgrade
 */
declare class ThemePlatformApplicationValidator {
    /** @returns {ApplyThemeParam} */
    static applyTheme(): ApplyThemeParam;
    /** @returns {CreatePageParam} */
    static createPage(): CreatePageParam;
    /** @returns {CreateThemeParam} */
    static createTheme(): CreateThemeParam;
    /** @returns {DeletePageParam} */
    static deletePage(): DeletePageParam;
    /** @returns {DeleteThemeParam} */
    static deleteTheme(): DeleteThemeParam;
    /** @returns {DuplicateThemeParam} */
    static duplicateTheme(): DuplicateThemeParam;
    /** @returns {GetAllPagesParam} */
    static getAllPages(): GetAllPagesParam;
    /** @returns {GetApplicationThemesParam} */
    static getApplicationThemes(): any;
    /** @returns {GetApplicationThemesCountParam} */
    static getApplicationThemesCount(): any;
    /** @returns {GetAppliedThemeParam} */
    static getAppliedTheme(): any;
    /** @returns {GetExtensionSectionsParam} */
    static getExtensionSections(): GetExtensionSectionsParam;
    /** @returns {GetFontsParam} */
    static getFonts(): any;
    /** @returns {GetFontsV2Param} */
    static getFontsV2(): any;
    /** @returns {GetLatestVersionOfThemeBySlugParam} */
    static getLatestVersionOfThemeBySlug(): GetLatestVersionOfThemeBySlugParam;
    /** @returns {GetPageParam} */
    static getPage(): GetPageParam;
    /** @returns {GetThemeByIdParam} */
    static getThemeById(): GetThemeByIdParam;
    /** @returns {GetThemeForPreviewParam} */
    static getThemeForPreview(): GetThemeForPreviewParam;
    /** @returns {GetThemeLastModifiedParam} */
    static getThemeLastModified(): GetThemeLastModifiedParam;
    /** @returns {IsUpgradableParam} */
    static isUpgradable(): IsUpgradableParam;
    /** @returns {UpdateMultiplePagesParam} */
    static updateMultiplePages(): UpdateMultiplePagesParam;
    /** @returns {UpdatePageParam} */
    static updatePage(): UpdatePageParam;
    /** @returns {UpdateThemeParam} */
    static updateTheme(): UpdateThemeParam;
    /** @returns {UpdateThemeNameParam} */
    static updateThemeName(): UpdateThemeNameParam;
    /** @returns {UpgradeThemeParam} */
    static upgradeTheme(): UpgradeThemeParam;
}
declare namespace ThemePlatformApplicationValidator {
    export { ApplyThemeParam, CreatePageParam, CreateThemeParam, DeletePageParam, DeleteThemeParam, DuplicateThemeParam, GetAllPagesParam, GetApplicationThemesParam, GetApplicationThemesCountParam, GetAppliedThemeParam, GetExtensionSectionsParam, GetFontsParam, GetFontsV2Param, GetLatestVersionOfThemeBySlugParam, GetPageParam, GetThemeByIdParam, GetThemeForPreviewParam, GetThemeLastModifiedParam, IsUpgradableParam, UpdateMultiplePagesParam, UpdatePageParam, UpdateThemeParam, UpdateThemeNameParam, UpgradeThemeParam };
}
type ApplyThemeParam = {
    /**
     * - The ID of the apply
     */
    themeId: string;
};
type CreatePageParam = {
    /**
     * - ID of the theme
     */
    themeId: string;
    body: ThemePlatformModel.AvailablePageSchema;
};
type CreateThemeParam = {
    body: ThemePlatformModel.CompanyThemeReqSchema;
};
type DeletePageParam = {
    /**
     * - ID of the theme
     */
    themeId: string;
    /**
     * - Value of the page to be updated
     */
    pageValue: string;
};
type DeleteThemeParam = {
    /**
     * - The ID of the theme to be deleted.
     */
    themeId: string;
};
type DuplicateThemeParam = {
    /**
     * - The ID of the theme to be duplicated
     */
    themeId: string;
};
type GetAllPagesParam = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
};
type GetExtensionSectionsParam = {
    /**
     * - The type of the theme
     */
    type?: string;
    /**
     * - The mode of the company
     */
    companyMode?: string;
};
type GetLatestVersionOfThemeBySlugParam = {
    /**
     * - Slug of theme
     */
    slugName: string;
};
type GetPageParam = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
    /**
     * - Value of the page to be retrieved
     */
    pageValue: string;
};
type GetThemeByIdParam = {
    /**
     * - The ID of the theme
     */
    themeId: string;
};
type GetThemeForPreviewParam = {
    /**
     * - The ID of the theme
     */
    themeId: string;
};
type GetThemeLastModifiedParam = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
type IsUpgradableParam = {
    /**
     * - The ID of the theme
     */
    themeId: string;
};
type UpdateMultiplePagesParam = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
    body: ThemePlatformModel.AllAvailablePageSchema;
};
type UpdatePageParam = {
    /**
     * - ID of the theme
     */
    themeId: string;
    /**
     * - Value of the page to be updated
     */
    pageValue: string;
    /**
     * - Unique socket id for websocket
     */
    socketId: string;
    body: ThemePlatformModel.AvailablePageSchema;
};
type UpdateThemeParam = {
    /**
     * - The ID of the theme.
     */
    themeId: string;
    body: ThemePlatformModel.ThemesSchema;
};
type UpdateThemeNameParam = {
    /**
     * - The ID of the theme to be updated.
     */
    themeId: string;
    body: ThemePlatformModel.UpdateThemeNameRequestBody;
};
type UpgradeThemeParam = {
    /**
     * - The ID of the upgrade
     */
    themeId: string;
};
type GetApplicationThemesParam = any;
type GetApplicationThemesCountParam = any;
type GetAppliedThemeParam = any;
type GetFontsParam = any;
type GetFontsV2Param = any;
import ThemePlatformModel = require("./ThemePlatformModel");
