const Joi = require("joi");

const ThemeModel = require("./ThemePartnerModel");
class ThemeValidator {
  static getAllPages() {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().allow("").required(),
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static createPage() {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().allow("").required(),
      themeId: Joi.string().allow("").required(),

      body: ThemeModel.AvailablePageSchema().required(),
    }).required();
  }

  static updateMultiplePages() {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().allow("").required(),
      themeId: Joi.string().allow("").required(),

      body: ThemeModel.AllAvailablePageSchema().required(),
    }).required();
  }

  static getPage() {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().allow("").required(),
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  static updatePage() {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().allow("").required(),
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),

      body: ThemeModel.AvailablePageSchema().required(),
    }).required();
  }

  static deletePage() {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().allow("").required(),
      themeId: Joi.string().allow("").required(),
      pageValue: Joi.string().allow("").required(),
    }).required();
  }

  static getApplicationThemes() {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().allow("").required(),
    }).required();
  }

  static getThemeById() {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().allow("").required(),
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static updateTheme() {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().allow("").required(),
      themeId: Joi.string().allow("").required(),

      body: ThemeModel.UpdateThemeRequestBody().required(),
    }).required();
  }

  static deleteTheme() {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().allow("").required(),
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getOrganizationThemes() {
    return Joi.object({
      status: Joi.string().allow(""),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  static getOrganizationThemeDetails() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static updateDraftTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemeModel.MarketplaceTheme().required(),
    }).required();
  }

  static submitOrganizationTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
      body: ThemeModel.MarketplaceTheme().required(),
    }).required();
  }

  static deleteOrganizationTheme() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getLatestVersionOfThemeBySlug() {
    return Joi.object({
      slugName: Joi.string().allow("").required(),
    }).required();
  }

  static createNewThemeInOrganization() {
    return Joi.object({
      slug: Joi.string().allow(""),
      body: ThemeModel.MarketplaceTheme().required(),
    }).required();
  }

  static createExtensionSectionDraft() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: ThemeModel.DraftExtensionSectionRequest().required(),
    }).required();
  }

  static publishExtensionSections() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: ThemeModel.PublishExtensionSectionRequest().required(),
    }).required();
  }

  static applyExtensionPreview() {
    return Joi.object({
      extensionSectionId: Joi.string().allow("").required(),
      body: ThemeModel.ExtensionPreviewRequest().required(),
    }).required();
  }

  static removeExtensionPreview() {
    return Joi.object({
      extensionSectionId: Joi.string().allow("").required(),
      body: ThemeModel.ExtensionPreviewRequest().required(),
    }).required();
  }

  static getThemeRejectionReasons() {
    return Joi.object({
      themeId: Joi.string().allow("").required(),
    }).required();
  }

  static getThemeVersions() {
    return Joi.object({
      themeSlug: Joi.string().allow("").required(),
      pageSize: Joi.number(),
      pageNo: Joi.number(),
    }).required();
  }

  static createTheme() {
    return Joi.object({
      companyId: Joi.number().required(),
      applicationId: Joi.string().allow("").required(),

      body: ThemeModel.CreateNewTheme().required(),
    }).required();
  }
}

module.exports = ThemeValidator;
