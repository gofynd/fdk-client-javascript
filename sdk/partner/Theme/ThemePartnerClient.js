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
   * @summary: Get all pages of a theme
   * @description: Use this API to retrieve all the available pages of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getAllPages/).
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
      allowUnknown: false,
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
   * @summary: Create a page
   * @description: Use this API to create a page for a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/createPage/).
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
      allowUnknown: false,
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
   * @summary: Update multiple pages of a theme
   * @description: Use this API to update multiple pages of a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updateMultiplePages/).
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
      allowUnknown: false,
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
   * @summary: Get page of a theme
   * @description: Use this API to retrieve a page of a theme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getPage/).
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
      allowUnknown: false,
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
   * @summary: Updates a page
   * @description: Use this API to update a page for a theme by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updatePage/).
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
      allowUnknown: false,
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
   * @summary: Deletes a page
   * @description: Use this API to delete a page for a theme by its ID and page_value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/deletePage/).
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
      allowUnknown: false,
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
   * @summary: Get all the themes for a specific application
   * @description: Use this API to get list of theme - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getApplicationThemes/).
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
      `/service/partner/theme/v2.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/themes`,
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
      .validate(responseData, { abortEarly: false, allowUnknown: false });

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
   * @summary: Get Theme By Theme Id
   * @description: Use this API to get theme details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getThemeById/).
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
      `/service/partner/theme/v2.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/${themeId}`,
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
      allowUnknown: false,
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
   * @summary: Update theme for a specific company and application
   * @description: Update theme for a specific company and application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updateTheme/).
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
      `/service/partner/theme/v2.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/${themeId}`,
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
      allowUnknown: false,
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
   * @summary: Delete a theme
   * @description: This endpoint is used to delete a theme from the specified company and application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/deleteTheme/).
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
      `/service/partner/theme/v2.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/${themeId}`,
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
      allowUnknown: false,
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
   * @summary: Get organization's themes
   * @description: Get organization's themes - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getOrganizationThemes/).
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
      allowUnknown: false,
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
   * @summary: Get theme details for an organization
   * @description: Fetches the theme details for a specific organization and theme ID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getOrganizationThemeDetails/).
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
      allowUnknown: false,
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
   * @summary: Update theme draft/submitted
   * @description: Update theme draft/submitted - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/updateDraftTheme/).
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
      allowUnknown: false,
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
   * @summary: Submit a theme
   * @description: Use this api to Submit a theme - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/submitOrganizationTheme/).
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
      allowUnknown: false,
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
   * @summary: Delete a theme
   * @description: This endpoint allows you to delete a theme by providing the organization and theme IDs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/deleteOrganizationTheme/).
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
      allowUnknown: false,
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
   * @summary: Get latest version of specified theme
   * @description: Use this api to get latest version of specified theme - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getLatestVersionOfThemeBySlug/).
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
      .validate(responseData, { abortEarly: false, allowUnknown: false });

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
   * @summary: Create a new theme for the organization
   * @description: Use this api to create a new theme for the organization - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/createNewThemeInOrganization/).
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
      allowUnknown: false,
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
   * @summary: Get theme rejection reasons
   * @description: Use this api to get theme rejection reasons - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getThemeRejectionReasons/).
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
      allowUnknown: false,
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
   * @param {ThemePartnerValidator.GetThemeVersionsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<ThemePartnerModel.MarketplaceThemeSchema>} - Success response
   * @name getThemeVersions
   * @summary: Get theme versions
   * @description: Retrieve a list of theme versions for a specific theme in an organization. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/theme/getThemeVersions/).
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
      allowUnknown: false,
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
}
module.exports = Theme;
