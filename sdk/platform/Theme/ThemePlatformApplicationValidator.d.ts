export = ThemePlatformApplicationValidator;
/**
 * @typedef AddToThemeLibraryParam
 * @property {ThemePlatformModel.AddThemeRequestSchema} body
 */
/**
 * @typedef ApplyThemeParam
 * @property {ThemePlatformModel.AddThemeRequestSchema} body
 */
/**
 * @typedef ArchiveThemeParam
 * @property {string} themeId - ID allotted to the theme.
 */
/**
 * @typedef CreatePageParam
 * @property {string} themeId - ID of the theme
 * @property {ThemePlatformModel.AvailablePageSchema} body
 */
/**
 * @typedef CreateThemeParam
 * @property {ThemePlatformModel.ThemesSchema} body
 */
/**
 * @typedef DeletePageParam
 * @property {string} themeId - ID of the theme
 * @property {string} pageValue - Value of the page to be updated
 */
/**
 * @typedef DeleteThemeParam
 * @property {string} themeId - ID allotted to the theme.
 */
/**
 * @typedef GetAllPagesParam
 * @property {string} themeId - ID of the theme to be retrieved
 */
/** @typedef GetAppliedThemeParam */
/** @typedef GetFontsParam */
/**
 * @typedef GetPageParam
 * @property {string} themeId - ID of the theme to be retrieved
 * @property {string} pageValue - Value of the page to be retrieved
 */
/**
 * @typedef GetPublicThemesParam
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */
/**
 * @typedef GetThemeByIdParam
 * @property {string} themeId - ID allotted to the theme.
 */
/**
 * @typedef GetThemeForPreviewParam
 * @property {string} themeId - ID allotted to the theme.
 */
/**
 * @typedef GetThemeLastModifiedParam
 * @property {string} themeId - ID allotted to the theme.
 */
/**
 * @typedef GetThemeLibraryParam
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */
/**
 * @typedef IsUpgradableParam
 * @property {string} themeId - Theme ID
 */
/**
 * @typedef PublishThemeParam
 * @property {string} themeId - ID allotted to the theme.
 */
/**
 * @typedef UnarchiveThemeParam
 * @property {string} themeId - ID allotted to the theme.
 */
/**
 * @typedef UnpublishThemeParam
 * @property {string} themeId - ID allotted to the theme.
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
 * @property {ThemePlatformModel.AvailablePageSchema} body
 */
/**
 * @typedef UpdateThemeParam
 * @property {string} themeId - ID allotted to the theme.
 * @property {ThemePlatformModel.ThemesSchema} body
 */
/**
 * @typedef UpgradeThemeParam
 * @property {string} themeId - ID allotted to the theme.
 */
declare class ThemePlatformApplicationValidator {
    /** @returns {AddToThemeLibraryParam} */
    static addToThemeLibrary(): AddToThemeLibraryParam;
    /** @returns {ApplyThemeParam} */
    static applyTheme(): ApplyThemeParam;
    /** @returns {ArchiveThemeParam} */
    static archiveTheme(): ArchiveThemeParam;
    /** @returns {CreatePageParam} */
    static createPage(): CreatePageParam;
    /** @returns {CreateThemeParam} */
    static createTheme(): CreateThemeParam;
    /** @returns {DeletePageParam} */
    static deletePage(): DeletePageParam;
    /** @returns {DeleteThemeParam} */
    static deleteTheme(): DeleteThemeParam;
    /** @returns {GetAllPagesParam} */
    static getAllPages(): GetAllPagesParam;
    /** @returns {GetAppliedThemeParam} */
    static getAppliedTheme(): any;
    /** @returns {GetFontsParam} */
    static getFonts(): any;
    /** @returns {GetPageParam} */
    static getPage(): GetPageParam;
    /** @returns {GetPublicThemesParam} */
    static getPublicThemes(): GetPublicThemesParam;
    /** @returns {GetThemeByIdParam} */
    static getThemeById(): GetThemeByIdParam;
    /** @returns {GetThemeForPreviewParam} */
    static getThemeForPreview(): GetThemeForPreviewParam;
    /** @returns {GetThemeLastModifiedParam} */
    static getThemeLastModified(): GetThemeLastModifiedParam;
    /** @returns {GetThemeLibraryParam} */
    static getThemeLibrary(): GetThemeLibraryParam;
    /** @returns {IsUpgradableParam} */
    static isUpgradable(): IsUpgradableParam;
    /** @returns {PublishThemeParam} */
    static publishTheme(): PublishThemeParam;
    /** @returns {UnarchiveThemeParam} */
    static unarchiveTheme(): UnarchiveThemeParam;
    /** @returns {UnpublishThemeParam} */
    static unpublishTheme(): UnpublishThemeParam;
    /** @returns {UpdateMultiplePagesParam} */
    static updateMultiplePages(): UpdateMultiplePagesParam;
    /** @returns {UpdatePageParam} */
    static updatePage(): UpdatePageParam;
    /** @returns {UpdateThemeParam} */
    static updateTheme(): UpdateThemeParam;
    /** @returns {UpgradeThemeParam} */
    static upgradeTheme(): UpgradeThemeParam;
}
declare namespace ThemePlatformApplicationValidator {
    export { AddToThemeLibraryParam, ApplyThemeParam, ArchiveThemeParam, CreatePageParam, CreateThemeParam, DeletePageParam, DeleteThemeParam, GetAllPagesParam, GetAppliedThemeParam, GetFontsParam, GetPageParam, GetPublicThemesParam, GetThemeByIdParam, GetThemeForPreviewParam, GetThemeLastModifiedParam, GetThemeLibraryParam, IsUpgradableParam, PublishThemeParam, UnarchiveThemeParam, UnpublishThemeParam, UpdateMultiplePagesParam, UpdatePageParam, UpdateThemeParam, UpgradeThemeParam };
}
type AddToThemeLibraryParam = {
    body: ThemePlatformModel.AddThemeRequestSchema;
};
type ApplyThemeParam = {
    body: ThemePlatformModel.AddThemeRequestSchema;
};
type ArchiveThemeParam = {
    /**
     * - ID allotted to the theme.
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
    body: ThemePlatformModel.ThemesSchema;
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
     * - ID allotted to the theme.
     */
    themeId: string;
};
type GetAllPagesParam = {
    /**
     * - ID of the theme to be retrieved
     */
    themeId: string;
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
type GetPublicThemesParam = {
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
};
type GetThemeByIdParam = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
type GetThemeForPreviewParam = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
type GetThemeLastModifiedParam = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
type GetThemeLibraryParam = {
    /**
     * - The number of items to retrieve in each page.
     * Default value is 10.
     */
    pageSize?: number;
    /**
     * - The page number to navigate through the given
     * set of results. Default value is 1.
     */
    pageNo?: number;
};
type IsUpgradableParam = {
    /**
     * - Theme ID
     */
    themeId: string;
};
type PublishThemeParam = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
type UnarchiveThemeParam = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
type UnpublishThemeParam = {
    /**
     * - ID allotted to the theme.
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
    body: ThemePlatformModel.AvailablePageSchema;
};
type UpdateThemeParam = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
    body: ThemePlatformModel.ThemesSchema;
};
type UpgradeThemeParam = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
type GetAppliedThemeParam = any;
type GetFontsParam = any;
import ThemePlatformModel = require("./ThemePlatformModel");
