export = ThemePlatformApplicationValidator;
/**
 * @typedef AddThemeToApplicationV2Param
 * @property {ThemePlatformModel.ApplyThemeRequestV2} body
 */
/**
 * @typedef AddToThemeLibraryParam
 * @property {ThemePlatformModel.AddThemeRequestSchema} body
 */
/**
 * @typedef ApplyThemeParam
 * @property {ThemePlatformModel.AddThemeRequestSchema} body
 */
/**
 * @typedef ApplyThemeV2Param
 * @property {string} themeId - The ID of the apply
 */
/**
 * @typedef ArchiveThemeParam
 * @property {string} themeId - ID allotted to the theme.
 */
/**
 * @typedef CheckThemeUpgradableV2Param
 * @property {string} themeId - The ID of the theme
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
 * @typedef DeleteThemeV2Param
 * @property {string} themeId - The ID of the theme to be deleted.
 */
/**
 * @typedef DuplicateThemeV2Param
 * @property {string} themeId - The ID of the theme to be duplicated
 */
/**
 * @typedef GetAllPagesParam
 * @property {string} themeId - ID of the theme to be retrieved
 */
/**
 * @typedef GetApplicationThemeByIdV2Param
 * @property {string} themeId - The ID of the theme
 */
/** @typedef GetApplicationThemesCountV2Param */
/** @typedef GetApplicationThemesV2Param */
/** @typedef GetAppliedThemeParam */
/** @typedef GetAppliedThemeV2Param */
/**
 * @typedef GetDefaultPageDetailsParam
 * @property {string} pageValue - Value of the page to be retrieved
 */
/** @typedef GetFontsParam */
/** @typedef GetFontsV2Param */
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
 * @typedef GetThemeLastModifiedV2Param
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
 * @typedef GetThemePreviewByIdV2Param
 * @property {string} themeId - The ID of the theme
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
 * @typedef UpdateThemeNameV2Param
 * @property {string} themeId - The ID of the theme to be updated.
 * @property {ThemePlatformModel.UpdateThemeNameRequestBodyV2} body
 */
/**
 * @typedef UpdateThemeV2Param
 * @property {string} themeId - The ID of the theme.
 * @property {ThemePlatformModel.UpdateThemeRequestBodyV2} body
 */
/**
 * @typedef UpgradeApplicationV2Param
 * @property {string} themeId - The ID of the upgrade
 */
/**
 * @typedef UpgradeThemeParam
 * @property {string} themeId - ID allotted to the theme.
 */
declare class ThemePlatformApplicationValidator {
    /** @returns {AddThemeToApplicationV2Param} */
    static addThemeToApplicationV2(): AddThemeToApplicationV2Param;
    /** @returns {AddToThemeLibraryParam} */
    static addToThemeLibrary(): AddToThemeLibraryParam;
    /** @returns {ApplyThemeParam} */
    static applyTheme(): ApplyThemeParam;
    /** @returns {ApplyThemeV2Param} */
    static applyThemeV2(): ApplyThemeV2Param;
    /** @returns {ArchiveThemeParam} */
    static archiveTheme(): ArchiveThemeParam;
    /** @returns {CheckThemeUpgradableV2Param} */
    static checkThemeUpgradableV2(): CheckThemeUpgradableV2Param;
    /** @returns {CreatePageParam} */
    static createPage(): CreatePageParam;
    /** @returns {CreateThemeParam} */
    static createTheme(): CreateThemeParam;
    /** @returns {DeletePageParam} */
    static deletePage(): DeletePageParam;
    /** @returns {DeleteThemeParam} */
    static deleteTheme(): DeleteThemeParam;
    /** @returns {DeleteThemeV2Param} */
    static deleteThemeV2(): DeleteThemeV2Param;
    /** @returns {DuplicateThemeV2Param} */
    static duplicateThemeV2(): DuplicateThemeV2Param;
    /** @returns {GetAllPagesParam} */
    static getAllPages(): GetAllPagesParam;
    /** @returns {GetApplicationThemeByIdV2Param} */
    static getApplicationThemeByIdV2(): GetApplicationThemeByIdV2Param;
    /** @returns {GetApplicationThemesCountV2Param} */
    static getApplicationThemesCountV2(): any;
    /** @returns {GetApplicationThemesV2Param} */
    static getApplicationThemesV2(): any;
    /** @returns {GetAppliedThemeParam} */
    static getAppliedTheme(): any;
    /** @returns {GetAppliedThemeV2Param} */
    static getAppliedThemeV2(): any;
    /** @returns {GetDefaultPageDetailsParam} */
    static getDefaultPageDetails(): GetDefaultPageDetailsParam;
    /** @returns {GetFontsParam} */
    static getFonts(): any;
    /** @returns {GetFontsV2Param} */
    static getFontsV2(): any;
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
    /** @returns {GetThemeLastModifiedV2Param} */
    static getThemeLastModifiedV2(): GetThemeLastModifiedV2Param;
    /** @returns {GetThemeLibraryParam} */
    static getThemeLibrary(): GetThemeLibraryParam;
    /** @returns {GetThemePreviewByIdV2Param} */
    static getThemePreviewByIdV2(): GetThemePreviewByIdV2Param;
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
    /** @returns {UpdateThemeNameV2Param} */
    static updateThemeNameV2(): UpdateThemeNameV2Param;
    /** @returns {UpdateThemeV2Param} */
    static updateThemeV2(): UpdateThemeV2Param;
    /** @returns {UpgradeApplicationV2Param} */
    static upgradeApplicationV2(): UpgradeApplicationV2Param;
    /** @returns {UpgradeThemeParam} */
    static upgradeTheme(): UpgradeThemeParam;
}
declare namespace ThemePlatformApplicationValidator {
    export { AddThemeToApplicationV2Param, AddToThemeLibraryParam, ApplyThemeParam, ApplyThemeV2Param, ArchiveThemeParam, CheckThemeUpgradableV2Param, CreatePageParam, CreateThemeParam, DeletePageParam, DeleteThemeParam, DeleteThemeV2Param, DuplicateThemeV2Param, GetAllPagesParam, GetApplicationThemeByIdV2Param, GetApplicationThemesCountV2Param, GetApplicationThemesV2Param, GetAppliedThemeParam, GetAppliedThemeV2Param, GetDefaultPageDetailsParam, GetFontsParam, GetFontsV2Param, GetPageParam, GetPublicThemesParam, GetThemeByIdParam, GetThemeForPreviewParam, GetThemeLastModifiedParam, GetThemeLastModifiedV2Param, GetThemeLibraryParam, GetThemePreviewByIdV2Param, IsUpgradableParam, PublishThemeParam, UnarchiveThemeParam, UnpublishThemeParam, UpdateMultiplePagesParam, UpdatePageParam, UpdateThemeParam, UpdateThemeNameV2Param, UpdateThemeV2Param, UpgradeApplicationV2Param, UpgradeThemeParam };
}
type AddThemeToApplicationV2Param = {
    body: ThemePlatformModel.ApplyThemeRequestV2;
};
type AddToThemeLibraryParam = {
    body: ThemePlatformModel.AddThemeRequestSchema;
};
type ApplyThemeParam = {
    body: ThemePlatformModel.AddThemeRequestSchema;
};
type ApplyThemeV2Param = {
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
type CheckThemeUpgradableV2Param = {
    /**
     * - The ID of the theme
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
type DeleteThemeV2Param = {
    /**
     * - The ID of the theme to be deleted.
     */
    themeId: string;
};
type DuplicateThemeV2Param = {
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
type GetApplicationThemeByIdV2Param = {
    /**
     * - The ID of the theme
     */
    themeId: string;
};
type GetDefaultPageDetailsParam = {
    /**
     * - Value of the page to be retrieved
     */
    pageValue: string;
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
type GetThemeLastModifiedV2Param = {
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
type GetThemePreviewByIdV2Param = {
    /**
     * - The ID of the theme
     */
    themeId: string;
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
type UpdateThemeNameV2Param = {
    /**
     * - The ID of the theme to be updated.
     */
    themeId: string;
    body: ThemePlatformModel.UpdateThemeNameRequestBodyV2;
};
type UpdateThemeV2Param = {
    /**
     * - The ID of the theme.
     */
    themeId: string;
    body: ThemePlatformModel.UpdateThemeRequestBodyV2;
};
type UpgradeApplicationV2Param = {
    /**
     * - The ID of the upgrade
     */
    themeId: string;
};
type UpgradeThemeParam = {
    /**
     * - ID allotted to the theme.
     */
    themeId: string;
};
type GetApplicationThemesCountV2Param = any;
type GetApplicationThemesV2Param = any;
type GetAppliedThemeParam = any;
type GetAppliedThemeV2Param = any;
type GetFontsParam = any;
type GetFontsV2Param = any;
import ThemePlatformModel = require("./ThemePlatformModel");
