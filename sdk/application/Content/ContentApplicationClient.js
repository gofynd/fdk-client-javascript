const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const ApplicationAPIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");

class Content {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAnnouncements: "/service/application/content/v1.0/announcements",
      getBlog: "/service/application/content/v1.0/blogs/{slug}",
      getBlogs: "/service/application/content/v1.0/blogs",
      getCustomFieldDefinition:
        "/service/application/content/v1.0/metafields/definitions/{id}",
      getCustomFieldDefinitions:
        "/service/application/content/v1.0/metafields/definitions",
      getCustomFields:
        "/service/application/content/v1.0/metafields/{resource}",
      getCustomObject: "/service/application/content/v1.0/metaobjects/{id}",
      getCustomObjects: "/service/application/content/v1.0/metaobjects",
      getDataLoaders: "/service/application/content/v1.0/data-loader",
      getFaqBySlug: "/service/application/content/v1.0/faq/{slug}",
      getFaqCategories: "/service/application/content/v1.0/faq/categories",
      getFaqCategoryBySlug:
        "/service/application/content/v1.0/faq/category/{slug}",
      getFaqs: "/service/application/content/v1.0/faq",
      getFaqsByCategorySlug:
        "/service/application/content/v1.0/faq/category/{slug}/faqs",
      getLandingPage: "/service/application/content/v1.0/landing-page",
      getLegalInformation: "/service/application/content/v1.0/legal",
      getNavigations: "/service/application/content/v1.0/navigations",
      getPage: "/service/application/content/v2.0/pages/{slug}",
      getPages: "/service/application/content/v2.0/pages",
      getSEOConfiguration: "/service/application/content/v1.0/seo",
      getSEOMarkupSchemas: "/service/application/content/v1.0/seo/schema",
      getSupportInformation: "/service/application/content/v1.0/support",
      getTags: "/service/application/content/v1.0/tags",
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
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

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
   * @returns {Promise<BlogGetResponse>} - Success response
   * @name getBlogs
   * @summary: List blogs
   * @description: List all the blogs against an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getBlogs/).
   */
  async getBlogs(
    { pageNo, pageSize, tags, search, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

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
   * @returns {Promise<CustomFieldDefinitionDetailResSchema>} - Success response
   * @name getCustomFieldDefinition
   * @summary: Get custom fields definition by id
   * @description: Use this API to retrieve the definitions of custom fields using definition_id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomFieldDefinition/).
   */
  async getCustomFieldDefinition(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!id) {
      invalidInput.push({
        message: `The 'id' field is required.`,
        path: ["id"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCustomFieldDefinition"],
        params: { id },
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
   * @returns {Promise<CustomFieldDefinitionsSchema>} - Success response
   * @name getCustomFieldDefinitions
   * @summary: Get custom fields definitions
   * @description: Use this API to retrieve the definitions of custom fields. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomFieldDefinitions/).
   */
  async getCustomFieldDefinitions(
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

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCustomFieldDefinitions"],
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
   * @name getCustomFields
   * @summary: Get list of custom fields of given resource
   * @description: Use this API to retrieve the custom fields for given resource and resource_ids in param - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomFields/).
   */
  async getCustomFields(
    { resource, resourceIds, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!resource) {
      invalidInput.push({
        message: `The 'resource' field is required.`,
        path: ["resource"],
      });
    }
    if (!resourceIds) {
      invalidInput.push({
        message: `The 'resourceIds' field is required.`,
        path: ["resourceIds"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["resource_ids"] = resourceIds;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCustomFields"],
        params: { resource },
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
   * @name getCustomObject
   * @summary: Get custom object
   * @description: Details of custom objects, their field details, definitions, and references can be obtained using this endpoint. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomObject/).
   */
  async getCustomObject(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!id) {
      invalidInput.push({
        message: `The 'id' field is required.`,
        path: ["id"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCustomObject"],
        params: { id },
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
   * @returns {Promise<CustomObjectsSchema>} - Success response
   * @name getCustomObjects
   * @summary: Get list of custom objects
   * @description: Use this API to retrieve the custom objects. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getCustomObjects/).
   */
  async getCustomObjects(
    { pageNo, pageSize, definitionId, type, ids, search, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!pageNo) {
      invalidInput.push({
        message: `The 'pageNo' field is required.`,
        path: ["pageNo"],
      });
    }
    if (!pageSize) {
      invalidInput.push({
        message: `The 'pageSize' field is required.`,
        path: ["pageSize"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["definition_id"] = definitionId;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["type"] = type;
    query_params["ids"] = ids;
    query_params["search"] = search;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCustomObjects"],
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
   * @returns {Promise<DataLoadersSchema>} - Success response
   * @name getDataLoaders
   * @summary: List Dataloaders
   * @description: List all the data loaders that are enabled for an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getDataLoaders/).
   */
  async getDataLoaders(
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
   * @returns {Promise<FaqSchema>} - Success response
   * @name getFaqBySlug
   * @summary: Get FAQ
   * @description: Get a specific FAQ using its slug identifier. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getFaqBySlug/).
   */
  async getFaqBySlug(
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
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

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
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

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
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

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
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

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
   * @returns {Promise<NavigationGetResponse>} - Success response
   * @name getNavigations
   * @summary: List navigation items
   * @description: Get the navigation link items which can be powered to generate menus on application's website or equivalent mobile apps. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getNavigations/).
   */
  async getNavigations(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

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
   * @returns {Promise<PageGetResponse>} - Success response
   * @name getPages
   * @summary: Lists pages
   * @description: Lists all Custom Pages - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getPages/).
   */
  async getPages(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

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
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

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
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

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
   * @returns {Promise<Support>} - Success response
   * @name getSupportInformation
   * @summary: Get customer support information
   * @description: Get customer support contact details. Contact Details can be either a phone number or an email-id or both. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/content/getSupportInformation/).
   */
  async getSupportInformation(
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
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

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
}

module.exports = Content;
