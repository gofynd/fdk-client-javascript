const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ThemePlatformValidator = require("./ThemePlatformValidator");
const ThemePlatformModel = require("./ThemePlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Theme {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {ThemePlatformValidator.AddMarketplaceThemeToCompanyParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemeSchema>} - Success response
   * @name addMarketplaceThemeToCompany
   * @summary: Apply a theme to a company
   * @description: Add a marketplace theme to a company by providing the theme ID and company ID.
   */
  async addMarketplaceThemeToCompany({ body } = {}) {
    const {
      error,
    } = ThemePlatformValidator.addMarketplaceThemeToCompany().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformValidator.addMarketplaceThemeToCompany().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > addMarketplaceThemeToCompany \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v2.0/company/${this.config.companyId}`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemeSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > addMarketplaceThemeToCompany \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformValidator.DeleteCompanyThemeParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemeSchema>} - Success response
   * @name deleteCompanyTheme
   * @summary: Delete a theme
   * @description: Delete a specific theme for a company by providing the company ID and theme ID.
   */
  async deleteCompanyTheme({ themeId } = {}) {
    const { error } = ThemePlatformValidator.deleteCompanyTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformValidator.deleteCompanyTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > deleteCompanyTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/${themeId}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = ThemePlatformModel.ThemeSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > deleteCompanyTheme \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {ThemePlatformValidator.GetCompanyLevelThemesParam} arg - Arg object
   * @returns {Promise<ThemePlatformModel.ThemeSchema[]>} - Success response
   * @name getCompanyLevelThemes
   * @summary: Get themes for a company
   * @description: Retrieve a list of themes available for a specific company.
   */
  async getCompanyLevelThemes({} = {}) {
    const { error } = ThemePlatformValidator.getCompanyLevelThemes().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformValidator.getCompanyLevelThemes().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getCompanyLevelThemes \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/themes`,
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = Joi.array()
      .items(ThemePlatformModel.ThemeSchema())
      .validate(response, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Theme > getCompanyLevelThemes \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Theme;
