const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const ApplicationAPIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { validateRequiredParams } = require("../../common/Validator");

class Content {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAnnouncements: "/service/application/content/v1.0/announcements",
      getBlog: "/service/application/content/v1.0/blogs/{slug}",
      getBlogs: "/service/application/content/v1.0/blogs",
      getCustomFieldsByResourceId:
        "/service/application/content/v2.0/customfields/resource/{resource}/{resource_slug}",
      getCustomObjectBySlug:
        "/service/application/content/v2.0/customobjects/definition/{definition_slug}/entries/{slug}",
      getDataLoaders: "/service/application/content/v1.0/data-loader",
      getDefaultSitemapConfig:
        "/service/application/content/v1.0/seo/sitemap/default",
      getFaqBySlug: "/service/application/content/v1.0/faq/{slug}",
      getFaqCategories: "/service/application/content/v1.0/faq/categories",
      getFaqCategoryBySlug:
        "/service/application/content/v1.0/faq/category/{slug}",
      getFaqs: "/service/application/content/v1.0/faq",
      getFaqsByCategorySlug:
        "/service/application/content/v1.0/faq/category/{slug}/faqs",
      getLandingPage: "/service/application/content/v1.0/landing-page",
      getLegalInformation: "/service/application/content/v1.0/legal",
      getNavigations: "/service/application/content/v2.0/navigations",
      getPage: "/service/application/content/v2.0/pages/{slug}",
      getPages: "/service/application/content/v2.0/pages",
      getSEOConfiguration: "/service/application/content/v1.0/seo",
      getSEOMarkupSchemas: "/service/application/content/v1.0/seo/schema",
      getSitemap: "/service/application/content/v1.0/seo/sitemaps/{name}",
      getSitemaps: "/service/application/content/v1.0/seo/sitemaps",
      getSupportInformation: "/service/application/content/v1.0/support",
      getTags: "/service/application/content/v1.0/tags",
      getWellKnownUrl: "/service/application/content/v1.0/well-known/{slug}",
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<AnnouncementsResponseSchema>} - Success response
   * @name getAnnouncements
   * @summary: List announcements
   * @description: List all current announcements in the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getAnnouncements/).
   */
  async getAnnouncements(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAnnouncements"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<BlogSchema>} - Success response
   * @name getBlog
   * @summary: Get a blog
   * @description: Get information related to a specific blog such as it's contents, author, publish date, SEO related information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getBlog/).
   */
  async getBlog(
    { slug, rootId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["slug"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["root_id"] = rootId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBlog"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<BlogGetResponseSchema>} - Success response
   * @name getBlogs
   * @summary: List blogs
   * @description: List all the blogs against an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getBlogs/).
   */
  async getBlogs(
    { pageNo, pageSize, tags, search, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["tags"] = tags;
    query_params["search"] = search;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBlogs"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CustomFieldsResponseByResourceIdSchema>} - Success response
   * @name getCustomFieldsByResourceId
   * @summary: Get list of custom fields of given resource and resource slug
   * @description: Retrieves a list of custom fields attached to a particular resource by using the resource and resource slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomFieldsByResourceId/).
   */
  async getCustomFieldsByResourceId(
    { resource, resourceSlug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], [
      "resource",
      "resourceSlug",
    ]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCustomFieldsByResourceId"],
        params: { resource, resourceSlug },
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CustomObjectByIdSchema>} - Success response
   * @name getCustomObjectBySlug
   * @summary: Get custom object details
   * @description: Details of a custom object entry can be obtained using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomObjectBySlug/).
   */
  async getCustomObjectBySlug(
    { definitionSlug, slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], [
      "definitionSlug",
      "slug",
    ]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCustomObjectBySlug"],
        params: { definitionSlug, slug },
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<DataLoadersSchema>} - Success response
   * @name getDataLoaders
   * @summary: List Dataloaders
   * @description: List all the data loaders that are enabled for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getDataLoaders/).
   */
  async getDataLoaders(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getDataLoaders"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<DefaultSitemapConfig>} - Success response
   * @name getDefaultSitemapConfig
   * @summary: Get default sitemap configuration
   * @description: Retrieves the current default sitemap configuration settings - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getDefaultSitemapConfig/).
   */
  async getDefaultSitemapConfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getDefaultSitemapConfig"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<FaqSchema>} - Success response
   * @name getFaqBySlug
   * @summary: Get FAQ
   * @description: Get a specific FAQ using its slug identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqBySlug/).
   */
  async getFaqBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["slug"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqBySlug"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetFaqCategoriesSchema>} - Success response
   * @name getFaqCategories
   * @summary: List FAQ Categories
   * @description: List categories for organizing FAQs. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqCategories/).
   */
  async getFaqCategories(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqCategories"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetFaqCategoryBySlugSchema>} - Success response
   * @name getFaqCategoryBySlug
   * @summary: Get a FAQ category
   * @description: Get a specific FAQ category using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqCategoryBySlug/).
   */
  async getFaqCategoryBySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["slug"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqCategoryBySlug"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<FaqResponseSchema>} - Success response
   * @name getFaqs
   * @summary: List FAQs
   * @description: List frequently asked questions and answers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqs/).
   */
  async getFaqs(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqs"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetFaqSchema>} - Success response
   * @name getFaqsByCategorySlug
   * @summary: List FAQs by category
   * @description: Get FAQs belonging to a specific category slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqsByCategorySlug/).
   */
  async getFaqsByCategorySlug(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["slug"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqsByCategorySlug"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LandingPageSchema>} - Success response
   * @name getLandingPage
   * @summary: Get a landing page
   * @description: Gets the content of the application's landing page. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getLandingPage/).
   */
  async getLandingPage(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLandingPage"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ApplicationLegal>} - Success response
   * @name getLegalInformation
   * @summary: Get legal information
   * @description: Get legal policies for an application which includes Terms and conditions, return policy, shipping policy and privacy policy. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getLegalInformation/).
   */
  async getLegalInformation(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLegalInformation"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<NavigationGetResponseSchema>} - Success response
   * @name getNavigations
   * @summary: List navigation items
   * @description: Get the navigation link items which can be powered to generate menus on application's website or equivalent mobile apps. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getNavigations/).
   */
  async getNavigations(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getNavigations"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PageSchema>} - Success response
   * @name getPage
   * @summary: Get page by slug
   * @description: Get detailed information about a specific page using its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getPage/).
   */
  async getPage(
    { slug, rootId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["slug"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["root_id"] = rootId;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPage"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PageGetResponseSchema>} - Success response
   * @name getPages
   * @summary: Lists pages
   * @description: Lists all Custom Pages - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getPages/).
   */
  async getPages(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPages"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<SeoComponent>} - Success response
   * @name getSEOConfiguration
   * @summary: Get SEO settings
   * @description: Get search engine optimization configurations of an application. Details include the title, description and an image. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSEOConfiguration/).
   */
  async getSEOConfiguration(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSEOConfiguration"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<SeoSchemaComponent>} - Success response
   * @name getSEOMarkupSchemas
   * @summary: List SEO Markup schemas
   * @description: Get all SEO Markup schema Templates setup for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSEOMarkupSchemas/).
   */
  async getSEOMarkupSchemas(
    { pageType, active, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["page_type"] = pageType;
    query_params["active"] = active;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSEOMarkupSchemas"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<SitemapConfig>} - Success response
   * @name getSitemap
   * @summary: Get a specific sitemap configuration
   * @description: Retrieve a specific sitemap configuration by its name. Returns the complete configuration including the sitemap XML data, activation status, and timestamps.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSitemap/).
   */
  async getSitemap(
    { name, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["name"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSitemap"],
        params: { name },
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<SitemapConfigurationList>} - Success response
   * @name getSitemaps
   * @summary: List sitemap configurations
   * @description: Retrieve a list of sitemap configurations for a specific company and application. Each configuration contains the sitemap XML data and its activation status.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSitemaps/).
   */
  async getSitemaps(
    { pageNo, pageSize, isActive, name, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_active"] = isActive;
    query_params["name"] = name;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSitemaps"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<Support>} - Success response
   * @name getSupportInformation
   * @summary: Get customer support information
   * @description: Get customer support contact details. Contact Details can be either a phone number or an email-id or both. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSupportInformation/).
   */
  async getSupportInformation(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSupportInformation"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<TagsSchema>} - Success response
   * @name getTags
   * @summary: Get HTML tags
   * @description: Lists HTML tags to power additional functionalities within an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getTags/).
   */
  async getTags(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getTags"],
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<WellKnownResponseSchema>} - Success response
   * @name getWellKnownUrl
   * @summary: Get a specific well-known URL
   * @description: Retrieves the details of a specific well-known URL by its slug. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getWellKnownUrl/).
   */
  async getWellKnownUrl(
    { slug, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const errors = validateRequiredParams(arguments[0], ["slug"]);
    if (errors.length > 0) {
      const error = new FDKClientValidationError({
        message: "Missing required field",
        details: errors,
      });
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getWellKnownUrl"],
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

    return response;
  }
}

module.exports = Content;
