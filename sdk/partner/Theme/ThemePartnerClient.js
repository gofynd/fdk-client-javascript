const PartnerAPIClient = require("../PartnerAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ThemePartnerValidator = require("./ThemePartnerValidator");
const ThemePartnerModel = require("./ThemePartnerModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Theme {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {ThemePartnerValidator.GetAllPagesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.AllAvailablePageSchema>} - Success response
   * @name getAllPages
   * @summary: Get all pages.
   * @description: Retrieve a list of all pages available in the partner server setup. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getAllPages/).
   */
  async getAllPages(
    { companyId, applicationId, themeId, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.getAllPages().validate(
      {
        companyId,
        applicationId,
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemePartnerValidator.getAllPages().validate(
      { companyId, applicationId, themeId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > getAllPages \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/${themeId}/page`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.AllAvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > getAllPages \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.CreatePageParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.AvailablePageSchema>} - Success response
   * @name createPage
   * @summary: Create page
   * @description: Add a new page to the partner server configurations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/createPage/).
   */
  async createPage(
    { companyId, applicationId, themeId, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.createPage().validate(
      {
        companyId,
        applicationId,
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemePartnerValidator.createPage().validate(
      {
        companyId,
        applicationId,
        themeId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > createPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/${themeId}/page`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.AvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > createPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.UpdateMultiplePagesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.AllAvailablePageSchema>} - Success response
   * @name updateMultiplePages
   * @summary: Update multiple pages
   * @description: Modify and update multiple pages in the partner server setup. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updateMultiplePages/).
   */
  async updateMultiplePages(
    { companyId, applicationId, themeId, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.updateMultiplePages().validate(
      {
        companyId,
        applicationId,
        themeId,
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
    } = ThemePartnerValidator.updateMultiplePages().validate(
      {
        companyId,
        applicationId,
        themeId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > updateMultiplePages \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/${themeId}/page`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.AllAvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > updateMultiplePages \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.GetPageParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.AvailablePageSchema>} - Success response
   * @name getPage
   * @summary: Get page
   * @description: Obtain detailed information about a specific page in the partner server. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getPage/).
   */
  async getPage(
    { companyId, applicationId, themeId, pageValue, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.getPage().validate(
      {
        companyId,
        applicationId,
        themeId,
        pageValue,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemePartnerValidator.getPage().validate(
      { companyId, applicationId, themeId, pageValue },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > getPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/${themeId}/${pageValue}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.AvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > getPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.UpdatePageParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.AvailablePageSchema>} - Success response
   * @name updatePage
   * @summary: Update page
   * @description: Modify and update information related to a specific page in the partner server. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updatePage/).
   */
  async updatePage(
    { companyId, applicationId, themeId, pageValue, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.updatePage().validate(
      {
        companyId,
        applicationId,
        themeId,
        pageValue,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemePartnerValidator.updatePage().validate(
      {
        companyId,
        applicationId,
        themeId,
        pageValue,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > updatePage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/${themeId}/${pageValue}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.AvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > updatePage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.DeletePageParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.AvailablePageSchema>} - Success response
   * @name deletePage
   * @summary: Delete page
   * @description: Remove a page from the partner server configurations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/deletePage/).
   */
  async deletePage(
    { companyId, applicationId, themeId, pageValue, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.deletePage().validate(
      {
        companyId,
        applicationId,
        themeId,
        pageValue,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemePartnerValidator.deletePage().validate(
      { companyId, applicationId, themeId, pageValue },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > deletePage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "delete",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/${themeId}/${pageValue}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.AvailablePageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > deletePage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.GetApplicationThemesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.ThemesSchema[]>} - Success response
   * @name getApplicationThemes
   * @summary: Get application themes.
   * @description: Retrieve a list of themes available for the partner server application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getApplicationThemes/).
   */
  async getApplicationThemes(
    { companyId, applicationId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.getApplicationThemes().validate(
      {
        companyId,
        applicationId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePartnerValidator.getApplicationThemes().validate(
      { companyId, applicationId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > getApplicationThemes \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/themes`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.array()
      .items(ThemePartnerModel.ThemesSchema())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > getApplicationThemes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.GetThemeByIdParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.ThemesSchema>} - Success response
   * @name getThemeById
   * @summary: Get theme by ID
   * @description: Obtain detailed information about a theme using its unique ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getThemeById/).
   */
  async getThemeById(
    { companyId, applicationId, themeId, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.getThemeById().validate(
      {
        companyId,
        applicationId,
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemePartnerValidator.getThemeById().validate(
      { companyId, applicationId, themeId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > getThemeById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/${themeId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > getThemeById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.UpdateThemeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.ThemesSchema>} - Success response
   * @name updateTheme
   * @summary: Update theme
   * @description: Modify and update information related to a theme in the partner server. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updateTheme/).
   */
  async updateTheme(
    { companyId, applicationId, themeId, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.updateTheme().validate(
      {
        companyId,
        applicationId,
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemePartnerValidator.updateTheme().validate(
      {
        companyId,
        applicationId,
        themeId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > updateTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/${themeId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > updateTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.DeleteThemeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.ThemesSchema>} - Success response
   * @name deleteTheme
   * @summary: Delete theme.
   * @description: Remove a theme from the partner server configurations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/deleteTheme/).
   */
  async deleteTheme(
    { companyId, applicationId, themeId, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.deleteTheme().validate(
      {
        companyId,
        applicationId,
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemePartnerValidator.deleteTheme().validate(
      { companyId, applicationId, themeId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > deleteTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "delete",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/${themeId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > deleteTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.GetOrganizationThemesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.MarketplaceThemeSchema>} - Success response
   * @name getOrganizationThemes
   * @summary: Get organization themes
   * @description: Retrieve a list of themes associated with partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getOrganizationThemes/).
   */
  async getOrganizationThemes(
    { status, pageSize, pageNo, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.getOrganizationThemes().validate(
      {
        status,
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePartnerValidator.getOrganizationThemes().validate(
      {
        status,
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > getOrganizationThemes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["status"] = status;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/themes`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.MarketplaceThemeSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > getOrganizationThemes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.GetOrganizationThemeDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
   * @name getOrganizationThemeDetails
   * @summary: Get organization theme details
   * @description: Obtain detailed information about a theme within partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getOrganizationThemeDetails/).
   */
  async getOrganizationThemeDetails(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ThemePartnerValidator.getOrganizationThemeDetails().validate(
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
    } = ThemePartnerValidator.getOrganizationThemeDetails().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > getOrganizationThemeDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme/${themeId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.MarketplaceTheme().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > getOrganizationThemeDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.UpdateDraftThemeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
   * @name updateDraftTheme
   * @summary: Update draft theme
   * @description: Modify and update a draft theme in partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updateDraftTheme/).
   */
  async updateDraftTheme(
    { themeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.updateDraftTheme().validate(
      {
        themeId,
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
    } = ThemePartnerValidator.updateDraftTheme().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > updateDraftTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "patch",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme/${themeId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.MarketplaceTheme().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > updateDraftTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.SubmitOrganizationThemeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
   * @name submitOrganizationTheme
   * @summary: Submit organization theme
   * @description: Initiate the process of submitting a theme within partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/submitOrganizationTheme/).
   */
  async submitOrganizationTheme(
    { themeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.submitOrganizationTheme().validate(
      {
        themeId,
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
    } = ThemePartnerValidator.submitOrganizationTheme().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > submitOrganizationTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme/${themeId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.MarketplaceTheme().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > submitOrganizationTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.DeleteOrganizationThemeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
   * @name deleteOrganizationTheme
   * @summary: Delete organization theme
   * @description: Remove a theme from partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/deleteOrganizationTheme/).
   */
  async deleteOrganizationTheme(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.deleteOrganizationTheme().validate(
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
    } = ThemePartnerValidator.deleteOrganizationTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > deleteOrganizationTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "delete",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme/${themeId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.MarketplaceTheme().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > deleteOrganizationTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.GetLatestVersionOfThemeBySlugParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.MarketplaceTheme[]>} - Success response
   * @name getLatestVersionOfThemeBySlug
   * @summary: Get latest version of theme by slug
   * @description: Retrieve the most recent version of a theme using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getLatestVersionOfThemeBySlug/).
   */
  async getLatestVersionOfThemeBySlug(
    { slugName, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ThemePartnerValidator.getLatestVersionOfThemeBySlug().validate(
      {
        slugName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePartnerValidator.getLatestVersionOfThemeBySlug().validate(
      {
        slugName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > getLatestVersionOfThemeBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/${slugName}/latest`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.array()
      .items(ThemePartnerModel.MarketplaceTheme())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > getLatestVersionOfThemeBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.CreateNewThemeInOrganizationParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
   * @name createNewThemeInOrganization
   * @summary: Create new theme in organization
   * @description: Add a new theme to partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/createNewThemeInOrganization/).
   */
  async createNewThemeInOrganization(
    { body, slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ThemePartnerValidator.createNewThemeInOrganization().validate(
      {
        body,
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePartnerValidator.createNewThemeInOrganization().validate(
      {
        body,
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > createNewThemeInOrganization \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["slug"] = slug;

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.MarketplaceTheme().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > createNewThemeInOrganization \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.GetThemeRejectionReasonsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.ThemeRejectionReasons>} - Success response
   * @name getThemeRejectionReasons
   * @summary: Get theme rejection reasons.
   * @description: Retrieve reasons for the rejection of themes within partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getThemeRejectionReasons/).
   */
  async getThemeRejectionReasons(
    { themeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.getThemeRejectionReasons().validate(
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
    } = ThemePartnerValidator.getThemeRejectionReasons().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > getThemeRejectionReasons \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme/${themeId}/reasons`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.ThemeRejectionReasons().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > getThemeRejectionReasons \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.CreateExtensionSectionDraftParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.DraftExtensionSectionResponse>} -
   *   Success response
   * @name createExtensionSectionDraft
   * @summary: Draft extension section
   * @description: Create a new draft for an extension section within the specified organization. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/createExtensionSectionDraft/).
   */
  async createExtensionSectionDraft(
    { extensionId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ThemePartnerValidator.createExtensionSectionDraft().validate(
      {
        extensionId,
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
    } = ThemePartnerValidator.createExtensionSectionDraft().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > createExtensionSectionDraft \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/extension-section/${extensionId}/draft`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.DraftExtensionSectionResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > createExtensionSectionDraft \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.GetExtensionbindingParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.ExtensionBinding>} - Success response
   * @name getExtensionbinding
   * @summary: Get extension binding
   * @description: Get the details for extension binding. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getExtensionbinding/).
   */
  async getExtensionbinding(
    { extensionId, bundleName, type, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.getExtensionbinding().validate(
      {
        extensionId,
        bundleName,
        type,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePartnerValidator.getExtensionbinding().validate(
      {
        extensionId,
        bundleName,
        type,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > getExtensionbinding \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["type"] = type;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/extension-section/${extensionId}/${bundleName}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.ExtensionBinding().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > getExtensionbinding \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.PublishExtensionSectionsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.PublishExtensionSectionResponse>} -
   *   Success response
   * @name publishExtensionSections
   * @summary: Publish an extension section
   * @description: Publish a draft extension section within the specified organization. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/publishExtensionSections/).
   */
  async publishExtensionSections(
    { extensionId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.publishExtensionSections().validate(
      {
        extensionId,
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
    } = ThemePartnerValidator.publishExtensionSections().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > publishExtensionSections \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/extension-section/${extensionId}/publish`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.PublishExtensionSectionResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > publishExtensionSections \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.ApplyExtensionPreviewParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.ExtensionPreviewResponse>} - Success response
   * @name applyExtensionPreview
   * @summary: Start a Preview of Extension Section
   * @description: Use this API to start a local session for previewing the extension section binding. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/applyExtensionPreview/).
   */
  async applyExtensionPreview(
    { extensionSectionId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.applyExtensionPreview().validate(
      {
        extensionSectionId,
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
    } = ThemePartnerValidator.applyExtensionPreview().validate(
      {
        extensionSectionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > applyExtensionPreview \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/extension-section/${extensionSectionId}/preview`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.ExtensionPreviewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > applyExtensionPreview \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.RemoveExtensionPreviewParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.ExtensionPreviewResponse>} - Success response
   * @name removeExtensionPreview
   * @summary: Close a Preview of Extension Section
   * @description: Use this API to close a local session for previewing the extension section binding - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/removeExtensionPreview/).
   */
  async removeExtensionPreview(
    { extensionSectionId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.removeExtensionPreview().validate(
      {
        extensionSectionId,
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
    } = ThemePartnerValidator.removeExtensionPreview().validate(
      {
        extensionSectionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > removeExtensionPreview \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "delete",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/extension-section/${extensionSectionId}/preview`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.ExtensionPreviewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > removeExtensionPreview \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.GetThemeVersionsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.MarketplaceThemeSchema>} - Success response
   * @name getThemeVersions
   * @summary: Get theme versions
   * @description: Retrieve a list of versions available for a theme within partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getThemeVersions/).
   */
  async getThemeVersions(
    { themeSlug, pageSize, pageNo, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.getThemeVersions().validate(
      {
        themeSlug,
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePartnerValidator.getThemeVersions().validate(
      {
        themeSlug,
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > getThemeVersions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/theme/${themeSlug}/versions`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.MarketplaceThemeSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > getThemeVersions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.CreateThemeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.ThemesSchema>} - Success response
   * @name createTheme
   * @summary: Create a new theme
   * @description: Themes improve the look and appearance of a website. Use this API to create a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/createTheme/).
   */
  async createTheme(
    { companyId, applicationId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.createTheme().validate(
      {
        companyId,
        applicationId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemePartnerValidator.createTheme().validate(
      {
        companyId,
        applicationId,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > createTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > createTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.GetOrgnaizationDefaultThemeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.MarketplaceTheme>} - Success response
   * @name getOrgnaizationDefaultTheme
   * @summary: Get organization default theme details.
   * @description: Obtain detailed information about a theme within partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getOrgnaizationDefaultTheme/).
   */
  async getOrgnaizationDefaultTheme(
    { companyId, applicationId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ThemePartnerValidator.getOrgnaizationDefaultTheme().validate(
      {
        companyId,
        applicationId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePartnerValidator.getOrgnaizationDefaultTheme().validate(
      {
        companyId,
        applicationId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > getOrgnaizationDefaultTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/default_theme`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.MarketplaceTheme().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > getOrgnaizationDefaultTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.GetSystemPageParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.DefaultPageSchema>} - Success response
   * @name getSystemPage
   * @summary: Get system page.
   * @description: Obtain detailed information about a system page within partner server organizations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getSystemPage/).
   */
  async getSystemPage(
    { companyId, applicationId, pageValue, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.getSystemPage().validate(
      {
        companyId,
        applicationId,
        pageValue,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ThemePartnerValidator.getSystemPage().validate(
      {
        companyId,
        applicationId,
        pageValue,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > getSystemPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/page/${pageValue}/system`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.DefaultPageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > getSystemPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ThemePartnerValidator.GetAppliedThemeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.ThemesSchema>} - Success response
   * @name getAppliedTheme
   * @summary: Current theme.
   * @description: Gets the theme currently applied to the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getAppliedTheme/).
   */
  async getAppliedTheme(
    { companyId, applicationId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ThemePartnerValidator.getAppliedTheme().validate(
      {
        companyId,
        applicationId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ThemePartnerValidator.getAppliedTheme().validate(
      {
        companyId,
        applicationId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Theme > getAppliedTheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/theme/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/applied-theme`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ThemePartnerModel.ThemesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Theme > getAppliedTheme \n ${res_error}`,
        });
      }
    }

    return response;
  }
}
module.exports = Theme;
