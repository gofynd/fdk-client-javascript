const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const PublicAPIClient = require("../PublicAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");

const ContentPublicValidator = require("./ContentPublicValidator");
const ContentPublicModel = require("./ContentPublicModel");
const Joi = require("joi");
const { Logger } = require("./../../common/Logger");

class Content {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAllTags: "/service/public/content/tags",
      getAnalyticsTags: "/service/public/content/analytics-tags",
      getBasicDetails: "/service/public/content/basic-details",
      getCredentialsByEntity:
        "/service/public/content/credentials/{entity_type}",
      getCustomPage: "/service/public/content/custom-pages/{slug}",
      getFooterContent: "/service/public/content/footer",
      getHomePageContent: "/service/public/content/home-page",
      getMenuContent: "/service/public/content/menu",
      getMenuContentByType: "/service/public/content/menu/{type}",
      getNavbar: "/service/public/content/navbar",
      getPricingBanner: "/service/public/content/pricing-banner",
      getSDKDocumentation: "/service/public/content/sdk-readme",
      getSDKDocumentationByType: "/service/public/content/sdk-readme/{type}",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {ContentPublicValidator.GetAllTagsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.TagsSchema>} - Success response
   * @name getAllTags
   * @summary: Retrieve tags with injected css/javascript info.
   * @description: Retrieve custom tag with injected css/javascript info. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getAllTags/).
   */
  async getAllTags(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = ContentPublicValidator.getAllTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ContentPublicValidator.getAllTags().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getAllTags \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAllTags"],
        params: {},
      }),
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
    } = ContentPublicModel.TagsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getAllTags \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPublicValidator.GetAnalyticsTagsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.AnalyticsTagsSchema>} - Success response
   * @name getAnalyticsTags
   * @summary: Get Analytics Tags
   * @description: Retrieve analytics tags. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getAnalyticsTags/).
   */
  async getAnalyticsTags(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = ContentPublicValidator.getAnalyticsTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPublicValidator.getAnalyticsTags().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getAnalyticsTags \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAnalyticsTags"],
        params: {},
      }),
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
    } = ContentPublicModel.AnalyticsTagsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getAnalyticsTags \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPublicValidator.GetBasicDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.BasicDetailsPayloadSchema>} - Success response
   * @name getBasicDetails
   * @summary: get basic platform information
   * @description: get basic platform information on Admin panel like Common Settings, Appereance of  Authentication Page, Text on Seller Login or Register Page, Business Account Restrictions, Seller Support Details and Footer Details - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getBasicDetails/).
   */
  async getBasicDetails(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = ContentPublicValidator.getBasicDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPublicValidator.getBasicDetails().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getBasicDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBasicDetails"],
        params: {},
      }),
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
    } = ContentPublicModel.BasicDetailsPayloadSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getBasicDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPublicValidator.GetCredentialsByEntityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.CredentialsSchema>} - Success response
   * @name getCredentialsByEntity
   * @summary: Get credentials to power chat support systems
   * @description: Get credentials for support system - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getCredentialsByEntity/).
   */
  async getCredentialsByEntity(
    { entityType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!entityType) {
      invalidInput.push({
        message: `The 'entityType' field is required.`,
        path: ["entityType"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = ContentPublicValidator.getCredentialsByEntity().validate(
      { entityType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPublicValidator.getCredentialsByEntity().validate(
      { entityType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getCredentialsByEntity \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCredentialsByEntity"],
        params: { entityType },
      }),
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
    } = ContentPublicModel.CredentialsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getCredentialsByEntity \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPublicValidator.GetCustomPageParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.CustomPageBySlugSchema>} - Success response
   * @name getCustomPage
   * @summary: Retrieve info for custom page.
   * @description: Retrieve info of custom pagee to develop and manage custom webpages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getCustomPage/).
   */
  async getCustomPage(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!slug) {
      invalidInput.push({
        message: `The 'slug' field is required.`,
        path: ["slug"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = ContentPublicValidator.getCustomPage().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ContentPublicValidator.getCustomPage().validate(
      { slug },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getCustomPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCustomPage"],
        params: { slug },
      }),
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
    } = ContentPublicModel.CustomPageBySlugSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getCustomPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPublicValidator.GetFooterContentParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.FooterSchema>} - Success response
   * @name getFooterContent
   * @summary: Get Footer Content
   * @description: Retrieve footer content. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getFooterContent/).
   */
  async getFooterContent(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = ContentPublicValidator.getFooterContent().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPublicValidator.getFooterContent().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getFooterContent \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFooterContent"],
        params: {},
      }),
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
    } = ContentPublicModel.FooterSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getFooterContent \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPublicValidator.GetHomePageContentParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.HomePageContentSchema>} - Success response
   * @name getHomePageContent
   * @summary: Get Home Page Content
   * @description: Retrieve home page content for a specific page type. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getHomePageContent/).
   */
  async getHomePageContent(
    { pageType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!pageType) {
      invalidInput.push({
        message: `The 'pageType' field is required.`,
        path: ["pageType"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = ContentPublicValidator.getHomePageContent().validate(
      { pageType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPublicValidator.getHomePageContent().validate(
      { pageType },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getHomePageContent \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_type"] = pageType;

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getHomePageContent"],
        params: {},
      }),
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
    } = ContentPublicModel.HomePageContentSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getHomePageContent \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPublicValidator.GetMenuContentParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.MenusSchema>} - Success response
   * @name getMenuContent
   * @summary: Get desktop menu content
   * @description: Retrieves the desktop menu content. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getMenuContent/).
   */
  async getMenuContent(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = ContentPublicValidator.getMenuContent().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPublicValidator.getMenuContent().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getMenuContent \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getMenuContent"],
        params: {},
      }),
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
    } = ContentPublicModel.MenusSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getMenuContent \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPublicValidator.GetMenuContentByTypeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.MenuTypeSchema>} - Success response
   * @name getMenuContentByType
   * @summary: Get desktop menu content
   * @description: Retrieves the desktop menu content. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getMenuContentByType/).
   */
  async getMenuContentByType(
    { type, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!type) {
      invalidInput.push({
        message: `The 'type' field is required.`,
        path: ["type"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = ContentPublicValidator.getMenuContentByType().validate(
      { type },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPublicValidator.getMenuContentByType().validate(
      { type },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getMenuContentByType \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getMenuContentByType"],
        params: { type },
      }),
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
    } = ContentPublicModel.MenuTypeSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getMenuContentByType \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPublicValidator.GetNavbarParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.NavbarSchema>} - Success response
   * @name getNavbar
   * @summary: Get Navbar
   * @description: Retrieve navbar information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getNavbar/).
   */
  async getNavbar(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = ContentPublicValidator.getNavbar().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ContentPublicValidator.getNavbar().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getNavbar \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getNavbar"],
        params: {},
      }),
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
    } = ContentPublicModel.NavbarSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getNavbar \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPublicValidator.GetPricingBannerParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.PricingBannerSchema>} - Success response
   * @name getPricingBanner
   * @summary: Get Pricing Banner
   * @description: Retrieve pricing banner information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getPricingBanner/).
   */
  async getPricingBanner(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = ContentPublicValidator.getPricingBanner().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPublicValidator.getPricingBanner().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getPricingBanner \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPricingBanner"],
        params: {},
      }),
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
    } = ContentPublicModel.PricingBannerSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getPricingBanner \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPublicValidator.GetSDKDocumentationParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.SDKLinksResponseSchema>} - Success response
   * @name getSDKDocumentation
   * @summary: Get documentation link of Software Development Kit
   * @description: Get documentation of SDK - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getSDKDocumentation/).
   */
  async getSDKDocumentation(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const { error } = ContentPublicValidator.getSDKDocumentation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPublicValidator.getSDKDocumentation().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getSDKDocumentation \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSDKDocumentation"],
        params: {},
      }),
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
    } = ContentPublicModel.SDKLinksResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getSDKDocumentation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPublicValidator.GetSDKDocumentationByTypeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ContentPublicModel.SDKbyTypeResponseSchema>} - Success response
   * @name getSDKDocumentationByType
   * @summary: Get documentation of Software Development Kit by its type
   * @description: Get documentation of SDK by its type - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/content/getSDKDocumentationByType/).
   */
  async getSDKDocumentationByType(
    { type, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!type) {
      invalidInput.push({
        message: `The 'type' field is required.`,
        path: ["type"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const {
      error,
    } = ContentPublicValidator.getSDKDocumentationByType().validate(
      { type },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPublicValidator.getSDKDocumentationByType().validate(
      { type },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Content > getSDKDocumentationByType \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSDKDocumentationByType"],
        params: { type },
      }),
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
    } = ContentPublicModel.SDKbyTypeResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Content > getSDKDocumentationByType \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Content;
