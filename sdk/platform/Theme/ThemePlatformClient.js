const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ThemeValidator = require("./ThemePlatformValidator");
const ThemeModel = require("./ThemePlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Theme {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ThemeReq} arg.body
   * @returns {Promise<ThemeSchema>} - Success response
   * @summary: Apply a theme to a company
   * @description: Add a marketplace theme to a company by providing the theme ID and company ID.
   */
  async addMarketplaceThemeToCompany({ body } = {}) {
    const { error } = ThemeValidator.addMarketplaceThemeToCompany().validate(
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
    } = ThemeValidator.addMarketplaceThemeToCompany().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for addMarketplaceThemeToCompany",
      });
      Logger({ level: "WARN", message: warrning });
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

    const { error: res_error } = ThemeModel.ThemeSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for addMarketplaceThemeToCompany",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - The ID of the theme.
   * @returns {Promise<ThemeSchema>} - Success response
   * @summary: Delete a theme
   * @description: Delete a specific theme for a company by providing the company ID and theme ID.
   */
  async deleteCompanyTheme({ themeId } = {}) {
    const { error } = ThemeValidator.deleteCompanyTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemeValidator.deleteCompanyTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for deleteCompanyTheme",
      });
      Logger({ level: "WARN", message: warrning });
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

    const { error: res_error } = ThemeModel.ThemeSchema().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteCompanyTheme",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ThemeSchema[]>} - Success response
   * @summary: Get themes for a company
   * @description: Retrieve a list of themes available for a specific company.
   */
  async getCompanyLevelThemes({} = {}) {
    const { error } = ThemeValidator.getCompanyLevelThemes().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemeValidator.getCompanyLevelThemes().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCompanyLevelThemes",
      });
      Logger({ level: "WARN", message: warrning });
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
      .items(ThemeModel.ThemeSchema())
      .validate(response, { abortEarly: false, allowUnknown: false });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCompanyLevelThemes",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Theme;