const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.CompanyThemeSchema>} - Success response
   * @name addMarketplaceThemeToCompany
   * @summary: Add marketplace theme to company.
   * @description: Incorporate a marketplace theme into a company's profile. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/addMarketplaceThemeToCompany/).
   */
  async addMarketplaceThemeToCompany(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.CompanyThemeSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > addMarketplaceThemeToCompany \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformValidator.DeleteCompanyThemeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.CompanyThemeSchema>} - Success response
   * @name deleteCompanyTheme
   * @summary: Delete company theme.
   * @description: Remove a theme associated with a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/deleteCompanyTheme/).
   */
  async deleteCompanyTheme(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePlatformModel.CompanyThemeSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > deleteCompanyTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformValidator.GetCompanyLevelPrivateThemesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.CompanyPrivateTheme[]>} - Success response
   * @name getCompanyLevelPrivateThemes
   * @summary: Get private themes for a company
   * @description: Retrieve a list of private themes available for a specific company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getCompanyLevelPrivateThemes/).
   */
  async getCompanyLevelPrivateThemes(
    { searchText, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ThemePlatformValidator.getCompanyLevelPrivateThemes().validate(
      {
        searchText,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformValidator.getCompanyLevelPrivateThemes().validate(
      {
        searchText,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getCompanyLevelPrivateThemes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["search_text"] = searchText;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/private_themes`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.array()
      .items(ThemePlatformModel.CompanyPrivateTheme())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getCompanyLevelPrivateThemes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePlatformValidator.GetCompanyLevelThemesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ThemePlatformModel.CompanyThemeSchema[]>} - Success response
   * @name getCompanyLevelThemes
   * @summary: Get company-level themes.
   * @description: Retrieve themes specific to a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/theme/getCompanyLevelThemes/).
   */
  async getCompanyLevelThemes(
    { searchText, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePlatformValidator.getCompanyLevelThemes().validate(
      {
        searchText,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePlatformValidator.getCompanyLevelThemes().validate(
      {
        searchText,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Theme > getCompanyLevelThemes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["search_text"] = searchText;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v2.0/company/${this.config.companyId}/themes`,
      query_params,
      undefined,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.array()
      .items(ThemePlatformModel.CompanyThemeSchema())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Theme > getCompanyLevelThemes \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Theme;
