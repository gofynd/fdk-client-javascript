export = ThemePlatformApplicationValidator;
/**
 * @typedef AddThemeToApplicationParam
 * @property {ThemePlatformModel.ThemeReq} body
 */
/**
 * @typedef AddToThemeLibraryParam
 * @property {ThemePlatformModel.AddThemeRequestSchema} body
 */
/**
 * @typedef ApplyThemeParam
 * @property {string} themeId - The ID of the apply
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
 * @typedef GetThemeLibraryParam
 * @property {number} [pageSize] - The number of items to retrieve in each page.
 *   Default value is 10.
 * @property {number} [pageNo] - The page number to navigate through the given
 *   set of results. Default value is 1.
 */
/**
 * @typedef IsUpgradableParam
 * @property {string} themeId - The ID of the theme
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
 * @property {string} themeId - The ID of the theme.
 * @property {ThemePlatformModel.UpdateThemeRequestBody} body
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
    /** @returns {AddThemeToApplicationParam} */
    static addThemeToApplication(): AddThemeToApplicationParam;
    /** @returns {AddToThemeLibraryParam} */
    static addToThemeLibrary(): AddToThemeLibraryParam;
    /** @returns {ApplyThemeParam} */
    static applyTheme(): ApplyThemeParam;
    /** @returns {ArchiveThemeParam} */
    static archiveTheme(): ArchiveThemeParam;
    /** @returns {CreatePageParam} */
    static createPage(): CreatePageParam;
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
    /** @returns {UpdateThemeNameParam} */
    static updateThemeName(): UpdateThemeNameParam;
    /** @returns {UpgradeThemeParam} */
    static upgradeTheme(): UpgradeThemeParam;
}
declare namespace ThemePlatformApplicationValidator {
    export { AddThemeToApplicationParam, AddToThemeLibraryParam, ApplyThemeParam, ArchiveThemeParam, CreatePageParam, DeletePageParam, DeleteThemeParam, DuplicateThemeParam, GetAllPagesParam, GetApplicationThemesParam, GetApplicationThemesCountParam, GetAppliedThemeParam, GetFontsParam, GetPageParam, GetPublicThemesParam, GetThemeByIdParam, GetThemeForPreviewParam, GetThemeLastModifiedParam, GetThemeLibraryParam, IsUpgradableParam, PublishThemeParam, UnarchiveThemeParam, UnpublishThemeParam, UpdateMultiplePagesParam, UpdatePageParam, UpdateThemeParam, UpdateThemeNameParam, UpgradeThemeParam };
}
type AddThemeToApplicationParam = {
    body: ThemePlatformModel.ThemeReq;
};
type AddToThemeLibraryParam = {
    body: ThemePlatformModel.AddThemeRequestSchema;
};
type ApplyThemeParam = {
    /**
     * - The ID of the apply
     */
    themeId: string;
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
     * - The ID of the theme
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
     * - The ID of the theme.
     */
    themeId: string;
    body: ThemePlatformModel.UpdateThemeRequestBody;
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
import ThemePlatformModel = require("./ThemePlatformModel");
