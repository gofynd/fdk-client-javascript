const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ContentPlatformApplicationValidator = require("./ContentPlatformApplicationValidator");
const ContentPlatformModel = require("./ContentPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Content {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {ContentPlatformApplicationValidator.AddDataLoaderParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
   *   Success response
   * @name addDataLoader
   * @summary: Adds a data loader
   * @description: Use this API to add data loader. This includes the data loader name, operationId, service name and its type (url/function) with corresponding value. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addDataLoader/).
   */
  async addDataLoader(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.addDataLoader().validate(
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
    } = ContentPlatformApplicationValidator.addDataLoader().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > addDataLoader \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader`,
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
    } = ContentPlatformModel.DataLoaderResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > addDataLoader \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.AddFaqParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
   * @name addFaq
   * @summary: Create an FAQ
   * @description: FAQs help users to solve an issue or know more about a process. Use this API to create an FAQ for a given FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addFaq/).
   */
  async addFaq(
    { categoryId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.addFaq().validate(
      {
        categoryId,
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
    } = ContentPlatformApplicationValidator.addFaq().validate(
      {
        categoryId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > addFaq \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq`,
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
    } = ContentPlatformModel.CreateFaqResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > addFaq \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.AddInjectableTagParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
   * @name addInjectableTag
   * @summary: Add a tag
   * @description: CSS and JS can be injected in the application (website) with the help of tags. Use this API to create such tags by entering the tag name, tag type (css/js), url and position of the tag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addInjectableTag/).
   */
  async addInjectableTag(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.addInjectableTag().validate(
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
    } = ContentPlatformApplicationValidator.addInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > addInjectableTag \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/add`,
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
    } = ContentPlatformModel.TagsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > addInjectableTag \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.AddPathRedirectionRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
   * @name addPathRedirectionRules
   * @summary: Save path based redirection rules
   * @description: Use this API to add redirection rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/addPathRedirectionRules/).
   */
  async addPathRedirectionRules(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.addPathRedirectionRules().validate(
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
    } = ContentPlatformApplicationValidator.addPathRedirectionRules().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > addPathRedirectionRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings`,
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
    } = ContentPlatformModel.PathMappingSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > addPathRedirectionRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateAnnouncementParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
   *   Success response
   * @name createAnnouncement
   * @summary: Create an announcement
   * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to create an announcement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createAnnouncement/).
   */
  async createAnnouncement(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createAnnouncement().validate(
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
    } = ContentPlatformApplicationValidator.createAnnouncement().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createAnnouncement \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements`,
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
    } = ContentPlatformModel.CreateAnnouncementSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createAnnouncement \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateBlogParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
   * @name createBlog
   * @summary: Create a blog
   * @description: Use this API to create a blog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createBlog/).
   */
  async createBlog(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.createBlog().validate(
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
    } = ContentPlatformApplicationValidator.createBlog().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createBlog \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/`,
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
    } = ContentPlatformModel.BlogSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createBlog \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateFaqCategoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateFaqCategorySchema>} - Success response
   * @name createFaqCategory
   * @summary: Create an FAQ category
   * @description: FAQs help users to solve an issue or know more about a process. FAQs can be categorized separately, for e.g. some questions can be related to payment, some could be related to purchase, shipping, navigating, etc. Use this API to create an FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createFaqCategory/).
   */
  async createFaqCategory(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createFaqCategory().validate(
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
    } = ContentPlatformApplicationValidator.createFaqCategory().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createFaqCategory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category`,
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
    } = ContentPlatformModel.CreateFaqCategorySchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createFaqCategory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateLandingPageParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
   * @name createLandingPage
   * @summary: Create a landing page
   * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to create a landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createLandingPage/).
   */
  async createLandingPage(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createLandingPage().validate(
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
    } = ContentPlatformApplicationValidator.createLandingPage().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createLandingPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/`,
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
    } = ContentPlatformModel.LandingPageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createLandingPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateNavigationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
   * @name createNavigation
   * @summary: Create a navigation
   * @description: Navigation is the arrangement of navigational items to ease the accessibility of resources for users on a website. Use this API to create a navigation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createNavigation/).
   */
  async createNavigation(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createNavigation().validate(
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
    } = ContentPlatformApplicationValidator.createNavigation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createNavigation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/`,
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
    } = ContentPlatformModel.NavigationSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createNavigation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreatePageParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name createPage
   * @summary: Create a page
   * @description: Use this API to create a custom page using a title, seo, publish status, feature image, tags, meta, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createPage/).
   */
  async createPage(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.createPage().validate(
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
    } = ContentPlatformApplicationValidator.createPage().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages/`,
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
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreatePagePreviewParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name createPagePreview
   * @summary: Create a page preview
   * @description: Use this API to create a page preview to check the appearance of a custom page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createPagePreview/).
   */
  async createPagePreview(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createPagePreview().validate(
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
    } = ContentPlatformApplicationValidator.createPagePreview().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createPagePreview \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/preview/`,
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
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createPagePreview \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.CreateSlideshowParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SlideshowSchema>} - Success response
   * @name createSlideshow
   * @summary: Create a slideshow
   * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to create a slideshow. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/createSlideshow/).
   */
  async createSlideshow(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.createSlideshow().validate(
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
    } = ContentPlatformApplicationValidator.createSlideshow().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > createSlideshow \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/`,
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
    } = ContentPlatformModel.SlideshowSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > createSlideshow \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteAnnouncementParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
   *   Success response
   * @name deleteAnnouncement
   * @summary: Delete announcement by id
   * @description: Use this API to delete an existing announcement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteAnnouncement/).
   */
  async deleteAnnouncement(
    { announcementId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteAnnouncement().validate(
      {
        announcementId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deleteAnnouncement().validate(
      {
        announcementId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteAnnouncement \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
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
    } = ContentPlatformModel.CreateAnnouncementSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteAnnouncement \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteBlogParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
   * @name deleteBlog
   * @summary: Delete blogs
   * @description: Use this API to delete a blog. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteBlog/).
   */
  async deleteBlog(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.deleteBlog().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deleteBlog().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteBlog \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${id}`,
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
    } = ContentPlatformModel.BlogSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteBlog \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteDataLoaderParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
   *   Success response
   * @name deleteDataLoader
   * @summary: Delete data loader in application
   * @description: Use this API to delete data loader. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteDataLoader/).
   */
  async deleteDataLoader(
    { dataLoaderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteDataLoader().validate(
      {
        dataLoaderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deleteDataLoader().validate(
      {
        dataLoaderId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteDataLoader \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/${dataLoaderId}`,
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
    } = ContentPlatformModel.DataLoaderResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteDataLoader \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteFaqParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
   * @name deleteFaq
   * @summary: Delete an FAQ
   * @description: Use this API to delete an existing FAQ. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteFaq/).
   */
  async deleteFaq(
    { categoryId, faqId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.deleteFaq().validate(
      {
        categoryId,
        faqId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deleteFaq().validate(
      {
        categoryId,
        faqId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteFaq \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
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
    } = ContentPlatformModel.CreateFaqResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteFaq \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteFaqCategoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.FaqSchema>} - Success response
   * @name deleteFaqCategory
   * @summary: Delete an FAQ category
   * @description: Use this API to delete an FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteFaqCategory/).
   */
  async deleteFaqCategory(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteFaqCategory().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deleteFaqCategory().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteFaqCategory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${id}`,
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
    } = ContentPlatformModel.FaqSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteFaqCategory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteLandingPageParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
   * @name deleteLandingPage
   * @summary: Delete a landing page
   * @description: Use this API to delete an existing landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteLandingPage/).
   */
  async deleteLandingPage(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteLandingPage().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deleteLandingPage().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteLandingPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/${id}`,
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
    } = ContentPlatformModel.LandingPageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteLandingPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteNavigationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
   * @name deleteNavigation
   * @summary: Delete a navigation
   * @description: Use this API to delete an existing navigation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteNavigation/).
   */
  async deleteNavigation(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteNavigation().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deleteNavigation().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteNavigation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${id}`,
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
    } = ContentPlatformModel.NavigationSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteNavigation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeletePageParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name deletePage
   * @summary: Delete a page
   * @description: Use this API to delete an existing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deletePage/).
   */
  async deletePage(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.deletePage().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deletePage().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deletePage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${id}`,
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
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deletePage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeletePathRedirectionRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name deletePathRedirectionRules
   * @summary: Delete path based redirection rules
   * @description: Use this API to delete redirection rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deletePathRedirectionRules/).
   */
  async deletePathRedirectionRules(
    { pathId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deletePathRedirectionRules().validate(
      {
        pathId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deletePathRedirectionRules().validate(
      {
        pathId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deletePathRedirectionRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings/${pathId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deletePathRedirectionRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.DeleteSlideshowParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SlideshowSchema>} - Success response
   * @name deleteSlideshow
   * @summary: Delete a slideshow
   * @description: Use this API to delete an existing slideshow. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/deleteSlideshow/).
   */
  async deleteSlideshow(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.deleteSlideshow().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.deleteSlideshow().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > deleteSlideshow \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${id}`,
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
    } = ContentPlatformModel.SlideshowSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > deleteSlideshow \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.EditDataLoaderParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
   *   Success response
   * @name editDataLoader
   * @summary: Edit a data loader by id
   * @description: Use this API to edit the details of an existing data loader by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/editDataLoader/).
   */
  async editDataLoader(
    { dataLoaderId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.editDataLoader().validate(
      {
        dataLoaderId,
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
    } = ContentPlatformApplicationValidator.editDataLoader().validate(
      {
        dataLoaderId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > editDataLoader \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/${dataLoaderId}`,
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
    } = ContentPlatformModel.DataLoaderResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > editDataLoader \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.EditInjectableTagParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
   * @name editInjectableTag
   * @summary: Edit a tag by id
   * @description: Use this API to edit the details of an existing tag by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/editInjectableTag/).
   */
  async editInjectableTag(
    { tagId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.editInjectableTag().validate(
      {
        tagId,
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
    } = ContentPlatformApplicationValidator.editInjectableTag().validate(
      {
        tagId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > editInjectableTag \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/edit/handpicked/${tagId}`,
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
    } = ContentPlatformModel.TagsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > editInjectableTag \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GenerateSEOTitleParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.GeneratedSEOContent>} - Success response
   * @name generateSEOTitle
   * @summary: Get SEO meta tag title for content
   * @description: Use this API to get GPT3 generated SEO meta tag title for content - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/generateSEOTitle/).
   */
  async generateSEOTitle(
    { type, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.generateSEOTitle().validate(
      {
        type,
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
    } = ContentPlatformApplicationValidator.generateSEOTitle().validate(
      {
        type,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > generateSEOTitle \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/generate-seo/${type}`,
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
    } = ContentPlatformModel.GeneratedSEOContent().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > generateSEOTitle \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAnnouncementByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.AdminAnnouncementSchema>} - Success response
   * @name getAnnouncementById
   * @summary: Get announcement by ID
   * @description: Use this API to retrieve an announcement and its details such as the target platform and pages on which it's applicable - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAnnouncementById/).
   */
  async getAnnouncementById(
    { announcementId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAnnouncementById().validate(
      {
        announcementId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getAnnouncementById().validate(
      {
        announcementId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAnnouncementById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
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
    } = ContentPlatformModel.AdminAnnouncementSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getAnnouncementById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetAnnouncementsListParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.GetAnnouncementListSchema>} -
   *   Success response
   * @name getAnnouncementsList
   * @summary: Get a list of announcements
   * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.	 - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getAnnouncementsList/).
   */
  async getAnnouncementsList(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getAnnouncementsList().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getAnnouncementsList().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getAnnouncementsList \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements`,
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
    } = ContentPlatformModel.GetAnnouncementListSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getAnnouncementsList \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ContentPlatformModel.GetAnnouncementListSchema>}
   * @summary: Get a list of announcements
   * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
   */
  getAnnouncementsListPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAnnouncementsList({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetBlogBySlugParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
   * @name getBlogBySlug
   * @summary: Get blog by slug
   * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getBlogBySlug/).
   */
  async getBlogBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getBlogBySlug().validate(
      {
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
    } = ContentPlatformApplicationValidator.getBlogBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getBlogBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${slug}`,
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
    } = ContentPlatformModel.BlogSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getBlogBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetBlogsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.BlogGetResponse>} - Success response
   * @name getBlogs
   * @summary: Get blogs
   * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getBlogs/).
   */
  async getBlogs(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.getBlogs().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getBlogs().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getBlogs \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/`,
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
    } = ContentPlatformModel.BlogGetResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getBlogs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ContentPlatformModel.BlogGetResponse>}
   * @summary: Get blogs
   * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
   */
  getBlogsPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getBlogs({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetComponentByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
   * @name getComponentById
   * @summary: Get components of a blog
   * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getComponentById/).
   */
  async getComponentById(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getComponentById().validate(
      {
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
    } = ContentPlatformApplicationValidator.getComponentById().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getComponentById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${slug}`,
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
    } = ContentPlatformModel.BlogSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getComponentById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetDataLoadersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoadersSchema>} - Success response
   * @name getDataLoaders
   * @summary: Get all the data loaders in an application
   * @description: Use this to get all data loaders of an application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDataLoaders/).
   */
  async getDataLoaders(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getDataLoaders().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getDataLoaders().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getDataLoaders \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader`,
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
    } = ContentPlatformModel.DataLoadersSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getDataLoaders \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetDefaultNavigationsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DefaultNavigationResponse>} -
   *   Success response
   * @name getDefaultNavigations
   * @summary: Get default navigations
   * @description: On any website (application), there are navigations that are present by default. Use this API to retrieve those default navigations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getDefaultNavigations/).
   */
  async getDefaultNavigations(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getDefaultNavigations().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getDefaultNavigations().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getDefaultNavigations \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/default`,
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
    } = ContentPlatformModel.DefaultNavigationResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getDefaultNavigations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetFaqByIdOrSlugParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
   * @name getFaqByIdOrSlug
   * @summary: Get an FAQ
   * @description: Use this API to retrieve a specific FAQ. You will get the question and answer of that FAQ. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqByIdOrSlug/).
   */
  async getFaqByIdOrSlug(
    { idOrSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getFaqByIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getFaqByIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getFaqByIdOrSlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/${idOrSlug}`,
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
    } = ContentPlatformModel.CreateFaqResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getFaqByIdOrSlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetFaqCategoriesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.GetFaqCategoriesSchema>} - Success response
   * @name getFaqCategories
   * @summary: Get a list of FAQ categories
   * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqCategories/).
   */
  async getFaqCategories(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getFaqCategories().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getFaqCategories().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getFaqCategories \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/categories`,
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
    } = ContentPlatformModel.GetFaqCategoriesSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getFaqCategories \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetFaqCategoryBySlugOrIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.GetFaqCategoryBySlugSchema>} -
   *   Success response
   * @name getFaqCategoryBySlugOrId
   * @summary: Get an FAQ category by slug or id
   * @description: FAQs can be divided into categories. Use this API to get an FAQ categories using its slug or ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqCategoryBySlugOrId/).
   */
  async getFaqCategoryBySlugOrId(
    { idOrSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getFaqCategoryBySlugOrId().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getFaqCategoryBySlugOrId().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getFaqCategoryBySlugOrId \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${idOrSlug}`,
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
    } = ContentPlatformModel.GetFaqCategoryBySlugSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getFaqCategoryBySlugOrId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetFaqsByCategoryIdOrSlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.GetFaqSchema>} - Success response
   * @name getFaqsByCategoryIdOrSlug
   * @summary: Get question and answers within an FAQ category
   * @description: Use this API to retrieve all the commonly asked question and answers belonging to an FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getFaqsByCategoryIdOrSlug/).
   */
  async getFaqsByCategoryIdOrSlug(
    { idOrSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getFaqsByCategoryIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getFaqsByCategoryIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getFaqsByCategoryIdOrSlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${idOrSlug}/faqs`,
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
    } = ContentPlatformModel.GetFaqSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getFaqsByCategoryIdOrSlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetInjectableTagsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
   * @name getInjectableTags
   * @summary: Get all the tags in an application
   * @description: Use this API to get the CSS and JS injected in the application in the form of tags. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getInjectableTags/).
   */
  async getInjectableTags(
    { all, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getInjectableTags().validate(
      {
        all,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getInjectableTags().validate(
      {
        all,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getInjectableTags \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["all"] = all;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
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
    } = ContentPlatformModel.TagsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getInjectableTags \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetLandingPagesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.LandingPageGetResponse>} - Success response
   * @name getLandingPages
   * @summary: Get landing pages
   * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getLandingPages/).
   */
  async getLandingPages(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getLandingPages().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getLandingPages().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getLandingPages \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/`,
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
    } = ContentPlatformModel.LandingPageGetResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getLandingPages \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ContentPlatformModel.LandingPageGetResponse>}
   * @summary: Get landing pages
   * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
   */
  getLandingPagesPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getLandingPages({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetLegalInformationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ApplicationLegal>} - Success response
   * @name getLegalInformation
   * @summary: Get legal information
   * @description: Use this API to get the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getLegalInformation/).
   */
  async getLegalInformation(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getLegalInformation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getLegalInformation().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getLegalInformation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/legal`,
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
    } = ContentPlatformModel.ApplicationLegal().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getLegalInformation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetNavigationBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
   * @name getNavigationBySlug
   * @summary: Get a navigation by slug
   * @description: Use this API to retrieve a navigation by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getNavigationBySlug/).
   */
  async getNavigationBySlug(
    { slug, devicePlatform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getNavigationBySlug().validate(
      {
        slug,
        devicePlatform,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getNavigationBySlug().validate(
      {
        slug,
        devicePlatform,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getNavigationBySlug \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["device_platform"] = devicePlatform;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${slug}`,
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
    } = ContentPlatformModel.NavigationSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getNavigationBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetNavigationsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.NavigationGetResponse>} - Success response
   * @name getNavigations
   * @summary: Get navigations
   * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getNavigations/).
   */
  async getNavigations(
    { devicePlatform, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getNavigations().validate(
      {
        devicePlatform,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getNavigations().validate(
      {
        devicePlatform,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getNavigations \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["device_platform"] = devicePlatform;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/`,
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
    } = ContentPlatformModel.NavigationGetResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getNavigations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {string} arg.devicePlatform - Filter navigations by platform.
   *   Acceptable values are: web, android, ios, all
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ContentPlatformModel.NavigationGetResponse>}
   * @summary: Get navigations
   * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
   */
  getNavigationsPaginator({
    companyId,
    applicationId,
    devicePlatform,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getNavigations({
        companyId: companyId,
        applicationId: applicationId,
        devicePlatform: devicePlatform,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPageBySlugParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name getPageBySlug
   * @summary: Get page by slug
   * @description: Use this API to retrieve the components of a page, such as its title, seo, publish status, feature image, tags, schedule, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPageBySlug/).
   */
  async getPageBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getPageBySlug().validate(
      {
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
    } = ContentPlatformApplicationValidator.getPageBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPageBySlug \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${slug}`,
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
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPageBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPageMetaParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageMetaSchema>} - Success response
   * @name getPageMeta
   * @summary: Get page meta
   * @description: Use this API to get the meta of custom pages (blog, page) and default system pages (e.g. home/brand/category/collection). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPageMeta/).
   */
  async getPageMeta(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getPageMeta().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getPageMeta().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPageMeta \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/meta`,
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
    } = ContentPlatformModel.PageMetaSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPageMeta \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPageSpecParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSpec>} - Success response
   * @name getPageSpec
   * @summary: Get page spec
   * @description: Use this API to get the specifications of a page, such as page type, display name, params and query. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPageSpec/).
   */
  async getPageSpec(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getPageSpec().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getPageSpec().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPageSpec \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/spec`,
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
    } = ContentPlatformModel.PageSpec().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPageSpec \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPagesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageGetResponse>} - Success response
   * @name getPages
   * @summary: Get a list of pages
   * @description: Use this API to retrieve a list of pages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPages/).
   */
  async getPages(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.getPages().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getPages().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPages \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages/`,
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
    } = ContentPlatformModel.PageGetResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPages \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ContentPlatformModel.PageGetResponse>}
   * @summary: Get a list of pages
   * @description: Use this API to retrieve a list of pages.
   */
  getPagesPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getPages({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPathRedirectionRuleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
   * @name getPathRedirectionRule
   * @summary: Get path based redirection rule
   * @description: Use this API to get path based redirection rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPathRedirectionRule/).
   */
  async getPathRedirectionRule(
    { pathId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getPathRedirectionRule().validate(
      {
        pathId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getPathRedirectionRule().validate(
      {
        pathId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPathRedirectionRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings/${pathId}`,
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
    } = ContentPlatformModel.PathMappingSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPathRedirectionRule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetPathRedirectionRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
   * @name getPathRedirectionRules
   * @summary: Get path based redirection rules
   * @description: Use this API to get path based redirection rules. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getPathRedirectionRules/).
   */
  async getPathRedirectionRules(
    { pageSize, pageNo, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getPathRedirectionRules().validate(
      {
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
    } = ContentPlatformApplicationValidator.getPathRedirectionRules().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getPathRedirectionRules \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings`,
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
    } = ContentPlatformModel.PathMappingSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getPathRedirectionRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetSEOConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SeoComponent>} - Success response
   * @name getSEOConfiguration
   * @summary: Get SEO configuration of an application
   * @description: Use this API to know how the SEO is configured in the application. This includes the sitemap, robot.txt, custom meta tags, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSEOConfiguration/).
   */
  async getSEOConfiguration(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getSEOConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getSEOConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getSEOConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo`,
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
    } = ContentPlatformModel.SeoComponent().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getSEOConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetSlideshowBySlugParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SlideshowSchema>} - Success response
   * @name getSlideshowBySlug
   * @summary: Get slideshow by slug
   * @description: Use this API to retrieve the details of a slideshow by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSlideshowBySlug/).
   */
  async getSlideshowBySlug(
    { slug, devicePlatform, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getSlideshowBySlug().validate(
      {
        slug,
        devicePlatform,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getSlideshowBySlug().validate(
      {
        slug,
        devicePlatform,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getSlideshowBySlug \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["device_platform"] = devicePlatform;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${slug}`,
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
    } = ContentPlatformModel.SlideshowSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getSlideshowBySlug \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetSlideshowsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SlideshowGetResponse>} - Success response
   * @name getSlideshows
   * @summary: Get slideshows
   * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSlideshows/).
   */
  async getSlideshows(
    { devicePlatform, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getSlideshows().validate(
      {
        devicePlatform,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getSlideshows().validate(
      {
        devicePlatform,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getSlideshows \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["device_platform"] = devicePlatform;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/`,
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
    } = ContentPlatformModel.SlideshowGetResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getSlideshows \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {string} arg.devicePlatform - Filter slideshows by platform.
   *   Acceptable values are: web, android, ios and all
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ContentPlatformModel.SlideshowGetResponse>}
   * @summary: Get slideshows
   * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
   */
  getSlideshowsPaginator({
    companyId,
    applicationId,
    devicePlatform,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSlideshows({
        companyId: companyId,
        applicationId: applicationId,
        devicePlatform: devicePlatform,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {ContentPlatformApplicationValidator.GetSupportInformationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.Support>} - Success response
   * @name getSupportInformation
   * @summary: Get support information
   * @description: Use this API to get the contact details for customer support, including emails and phone numbers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/getSupportInformation/).
   */
  async getSupportInformation(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.getSupportInformation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.getSupportInformation().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > getSupportInformation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/support`,
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
    } = ContentPlatformModel.Support().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > getSupportInformation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.RemoveInjectableTagParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TagDeleteSuccessResponse>} -
   *   Success response
   * @name removeInjectableTag
   * @summary: Remove a tag
   * @description: Use this API to delete an existing tag. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/removeInjectableTag/).
   */
  async removeInjectableTag(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.removeInjectableTag().validate(
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
    } = ContentPlatformApplicationValidator.removeInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > removeInjectableTag \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/remove/handpicked`,
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
    } = ContentPlatformModel.TagDeleteSuccessResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > removeInjectableTag \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.ResetDataLoaderParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoaderResetResponseSchema>} -
   *   Success response
   * @name resetDataLoader
   * @summary: Reset a data loader by serive name and operation Id
   * @description: Use this API to reselect a data loader. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/resetDataLoader/).
   */
  async resetDataLoader(
    { service, operationId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.resetDataLoader().validate(
      {
        service,
        operationId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.resetDataLoader().validate(
      {
        service,
        operationId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > resetDataLoader \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/${service}/${operationId}/reset`,
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
    } = ContentPlatformModel.DataLoaderResetResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > resetDataLoader \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.SelectDataLoaderParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.DataLoaderResponseSchema>} -
   *   Success response
   * @name selectDataLoader
   * @summary: Select a data loader by id
   * @description: Use this API to select a data loader to be used in applications. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/selectDataLoader/).
   */
  async selectDataLoader(
    { dataLoaderId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.selectDataLoader().validate(
      {
        dataLoaderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ContentPlatformApplicationValidator.selectDataLoader().validate(
      {
        dataLoaderId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > selectDataLoader \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/${dataLoaderId}/select`,
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
    } = ContentPlatformModel.DataLoaderResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > selectDataLoader \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateAnnouncementParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
   *   Success response
   * @name updateAnnouncement
   * @summary: Update an announcement
   * @description: Use this API to edit an existing announcement and its details such as the target platform and pages on which it's applicable - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAnnouncement/).
   */
  async updateAnnouncement(
    { announcementId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateAnnouncement().validate(
      {
        announcementId,
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
    } = ContentPlatformApplicationValidator.updateAnnouncement().validate(
      {
        announcementId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateAnnouncement \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
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
    } = ContentPlatformModel.CreateAnnouncementSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateAnnouncement \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateAnnouncementScheduleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateAnnouncementSchema>} -
   *   Success response
   * @name updateAnnouncementSchedule
   * @summary: Update the schedule and the publish status of an announcement
   * @description: Use this API to edit the duration, i.e. start date-time and end date-time of an announcement. Moreover, you can enable/disable an announcement using this API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateAnnouncementSchedule/).
   */
  async updateAnnouncementSchedule(
    { announcementId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateAnnouncementSchedule().validate(
      {
        announcementId,
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
    } = ContentPlatformApplicationValidator.updateAnnouncementSchedule().validate(
      {
        announcementId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateAnnouncementSchedule \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
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
    } = ContentPlatformModel.CreateAnnouncementSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateAnnouncementSchedule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateBlogParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.BlogSchema>} - Success response
   * @name updateBlog
   * @summary: Update a blog
   * @description: Use this API to update the details of an existing blog which includes title, feature image, content, SEO details, expiry, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateBlog/).
   */
  async updateBlog(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.updateBlog().validate(
      {
        id,
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
    } = ContentPlatformApplicationValidator.updateBlog().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateBlog \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${id}`,
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
    } = ContentPlatformModel.BlogSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateBlog \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateFaqParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateFaqResponseSchema>} - Success response
   * @name updateFaq
   * @summary: Update an FAQ
   * @description: Use this API to edit an existing FAQ. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateFaq/).
   */
  async updateFaq(
    { categoryId, faqId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.updateFaq().validate(
      {
        categoryId,
        faqId,
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
    } = ContentPlatformApplicationValidator.updateFaq().validate(
      {
        categoryId,
        faqId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateFaq \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
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
    } = ContentPlatformModel.CreateFaqResponseSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateFaq \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateFaqCategoryParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.CreateFaqCategorySchema>} - Success response
   * @name updateFaqCategory
   * @summary: Update an FAQ category
   * @description: Use this API to edit an existing FAQ category. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateFaqCategory/).
   */
  async updateFaqCategory(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateFaqCategory().validate(
      {
        id,
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
    } = ContentPlatformApplicationValidator.updateFaqCategory().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateFaqCategory \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${id}`,
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
    } = ContentPlatformModel.CreateFaqCategorySchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateFaqCategory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateInjectableTagParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.TagsSchema>} - Success response
   * @name updateInjectableTag
   * @summary: Update the exisitng tags for an application by replacing with provided tags
   * @description: Use this API to edit and override all existing tags. All existing tags will be replaced by the new tags provided in body.  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateInjectableTag/).
   */
  async updateInjectableTag(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateInjectableTag().validate(
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
    } = ContentPlatformApplicationValidator.updateInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateInjectableTag \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
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
    } = ContentPlatformModel.TagsSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateInjectableTag \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateLandingPageParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.LandingPageSchema>} - Success response
   * @name updateLandingPage
   * @summary: Update a landing page
   * @description: Use this API to edit the details of an existing landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateLandingPage/).
   */
  async updateLandingPage(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateLandingPage().validate(
      {
        id,
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
    } = ContentPlatformApplicationValidator.updateLandingPage().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateLandingPage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/${id}`,
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
    } = ContentPlatformModel.LandingPageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateLandingPage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateLegalInformationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.ApplicationLegal>} - Success response
   * @name updateLegalInformation
   * @summary: Save legal information
   * @description: Use this API to edit, update and save the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateLegalInformation/).
   */
  async updateLegalInformation(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateLegalInformation().validate(
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
    } = ContentPlatformApplicationValidator.updateLegalInformation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateLegalInformation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/legal`,
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
    } = ContentPlatformModel.ApplicationLegal().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateLegalInformation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateNavigationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.NavigationSchema>} - Success response
   * @name updateNavigation
   * @summary: Update a navigation
   * @description: Use this API to edit the details of an existing navigation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateNavigation/).
   */
  async updateNavigation(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateNavigation().validate(
      {
        id,
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
    } = ContentPlatformApplicationValidator.updateNavigation().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateNavigation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${id}`,
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
    } = ContentPlatformModel.NavigationSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateNavigation \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdatePageParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name updatePage
   * @summary: Update a page
   * @description: Use this API to edit the details of an existing page, such as its title, seo, publish status, feature image, tags, schedule, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updatePage/).
   */
  async updatePage(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ContentPlatformApplicationValidator.updatePage().validate(
      {
        id,
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
    } = ContentPlatformApplicationValidator.updatePage().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updatePage \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${id}`,
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
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updatePage \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdatePagePreviewParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PageSchema>} - Success response
   * @name updatePagePreview
   * @summary: Change the publish status of a page
   * @description: Use this API to change the publish status of an existing page. Allows you to publish and unpublish the page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updatePagePreview/).
   */
  async updatePagePreview(
    { slug, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updatePagePreview().validate(
      {
        slug,
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
    } = ContentPlatformApplicationValidator.updatePagePreview().validate(
      {
        slug,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updatePagePreview \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/publish/${slug}`,
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
    } = ContentPlatformModel.PageSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updatePagePreview \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdatePathRedirectionRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.PathMappingSchema>} - Success response
   * @name updatePathRedirectionRules
   * @summary: Update path based redirection rules
   * @description: Use this API to update redirection rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updatePathRedirectionRules/).
   */
  async updatePathRedirectionRules(
    { pathId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updatePathRedirectionRules().validate(
      {
        pathId,
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
    } = ContentPlatformApplicationValidator.updatePathRedirectionRules().validate(
      {
        pathId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updatePathRedirectionRules \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings/${pathId}`,
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
    } = ContentPlatformModel.PathMappingSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updatePathRedirectionRules \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateSEOConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SeoSchema>} - Success response
   * @name updateSEOConfiguration
   * @summary: Update SEO of application
   * @description: Use this API to edit the SEO details of an application. This includes the sitemap, robot.txt, custom meta tags, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateSEOConfiguration/).
   */
  async updateSEOConfiguration(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateSEOConfiguration().validate(
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
    } = ContentPlatformApplicationValidator.updateSEOConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateSEOConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo`,
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
    } = ContentPlatformModel.SeoSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateSEOConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateSlideshowParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.SlideshowSchema>} - Success response
   * @name updateSlideshow
   * @summary: Update a slideshow
   * @description: Use this API to edit the details of an existing slideshow. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateSlideshow/).
   */
  async updateSlideshow(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateSlideshow().validate(
      {
        id,
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
    } = ContentPlatformApplicationValidator.updateSlideshow().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateSlideshow \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${id}`,
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
    } = ContentPlatformModel.SlideshowSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateSlideshow \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ContentPlatformApplicationValidator.UpdateSupportInformationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ContentPlatformModel.Support>} - Success response
   * @name updateSupportInformation
   * @summary: Update the support data of an application
   * @description: Use this API to edit the existing contact details for customer support, including emails and phone numbers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/content/updateSupportInformation/).
   */
  async updateSupportInformation(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ContentPlatformApplicationValidator.updateSupportInformation().validate(
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
    } = ContentPlatformApplicationValidator.updateSupportInformation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Content > updateSupportInformation \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/support`,
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
    } = ContentPlatformModel.Support().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Content > updateSupportInformation \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Content;
