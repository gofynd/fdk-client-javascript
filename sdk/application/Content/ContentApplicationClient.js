const APIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const ContentValidator = require("./ContentApplicationValidator");

class Content {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAnnouncements: "/service/application/content/v1.0/announcements",
      getBlog: "/service/application/content/v1.0/blogs/{slug}",
      getBlogs: "/service/application/content/v1.0/blogs/",
      getDataLoaders: "/service/application/content/v1.0/data-loader",
      getFaqs: "/service/application/content/v1.0/faq",
      getFaqCategories: "/service/application/content/v1.0/faq/categories",
      getFaqBySlug: "/service/application/content/v1.0/faq/{slug}",
      getFaqCategoryBySlug:
        "/service/application/content/v1.0/faq/category/{slug}",
      getFaqsByCategorySlug:
        "/service/application/content/v1.0/faq/category/{slug}/faqs",
      getLandingPage: "/service/application/content/v1.0/landing-page",
      getLegalInformation: "/service/application/content/v1.0/legal",
      getNavigations: "/service/application/content/v1.0/navigations/",
      getSEOConfiguration: "/service/application/content/v1.0/seo",
      getSlideshows: "/service/application/content/v1.0/slideshow/",
      getSlideshow: "/service/application/content/v1.0/slideshow/{slug}",
      getSupportInformation: "/service/application/content/v1.0/support",
      getTags: "/service/application/content/v1.0/tags",
      getPage: "/service/application/content/v2.0/pages/{slug}",
      getPages: "/service/application/content/v2.0/pages/",
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
   * @param {Object} arg - Arg object.
   * @returns {Promise<AnnouncementsResponseSchema>} - Success response
   * @summary: Get live announcements
   * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve live announcements. Get announcements on individual pages or for all pages.
   */
  getAnnouncements({} = {}) {
    const { error } = ContentValidator.getAnnouncements().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAnnouncements"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a blog. You can get slug value from the endpoint
   *   /service/application/content/v1.0/blogs/.
   * @param {string} [arg.rootId] - ID given to the HTML element
   * @returns {Promise<BlogSchema>} - Success response
   * @summary: Get a blog
   * @description: Use this API to get the details of a blog using its slug. Details include the title, reading time, publish status, feature image, tags, author, etc.
   */
  getBlog({ slug, rootId } = {}) {
    const { error } = ContentValidator.getBlog().validate(
      { slug, rootId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["root_id"] = rootId;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBlog"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<BlogGetResponse>} - Success response
   * @summary: Get a list of blogs
   * @description: Use this API to get all the blogs.
   */
  getBlogs({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getBlogs().validate(
      { pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBlogs"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get a list of blogs
   * @description: Use this API to get all the blogs.
   */
  getBlogsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getBlogs({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<DataLoadersSchema>} - Success response
   * @summary: Get the data loaders associated with an application
   * @description: Use this API to get all selected data loaders of the application in the form of tags.
   */
  getDataLoaders({} = {}) {
    const { error } = ContentValidator.getDataLoaders().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getDataLoaders"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<FaqResponseSchema>} - Success response
   * @summary: Get a list of FAQs
   * @description: Use this API to get a list of frequently asked questions. Users will benefit from it when facing any issue with the website.
   */
  getFaqs({} = {}) {
    const { error } = ContentValidator.getFaqs().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqs"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<GetFaqCategoriesSchema>} - Success response
   * @summary: Get a list of FAQ categories
   * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
   */
  getFaqCategories({} = {}) {
    const { error } = ContentValidator.getFaqCategories().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqCategories"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of an FAQ. You can get slug value from the endpoint
   *   /service/application/content/v1.0/faq.
   * @returns {Promise<FaqSchema>} - Success response
   * @summary: Get an FAQ
   * @description: Use this API to get a particular FAQ by its slug.
   */
  getFaqBySlug({ slug } = {}) {
    const { error } = ContentValidator.getFaqBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of an FAQ category. You can get slug value from the endpoint
   *   /service/application/content/v1.0/faq/categories.
   * @returns {Promise<GetFaqCategoryBySlugSchema>} - Success response
   * @summary: Get the FAQ category
   * @description: FAQs can be divided into categories. Use this API to get the category to which an FAQ belongs.
   */
  getFaqCategoryBySlug({ slug } = {}) {
    const { error } = ContentValidator.getFaqCategoryBySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqCategoryBySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of an FAQ category. You can get slug value from the endpoint
   *   /service/application/content/v1.0/faq/categories.
   * @returns {Promise<GetFaqSchema>} - Success response
   * @summary: Get FAQs using the slug of FAQ category
   * @description: FAQs can be divided into categories. Use this API to get all the FAQs belonging to a category by using the category slug.
   */
  getFaqsByCategorySlug({ slug } = {}) {
    const { error } = ContentValidator.getFaqsByCategorySlug().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFaqsByCategorySlug"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<LandingPageSchema>} - Success response
   * @summary: Get the landing page
   * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch the details of a landing page.
   */
  getLandingPage({} = {}) {
    const { error } = ContentValidator.getLandingPage().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLandingPage"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ApplicationLegal>} - Success response
   * @summary: Get legal information
   * @description: Use this API to get the legal information of an application, which includes Privacy Policy, Terms and Conditions, Shipping Policy and FAQs regarding the usage of the application.
   */
  getLegalInformation({} = {}) {
    const { error } = ContentValidator.getLegalInformation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLegalInformation"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<NavigationGetResponse>} - Success response
   * @summary: Get the navigation
   * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
   */
  getNavigations({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getNavigations().validate(
      { pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getNavigations"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get the navigation
   * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the links and sub-navigations.
   */
  getNavigationsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getNavigations({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<SeoComponent>} - Success response
   * @summary: Get the SEO of an application
   * @description: Use this API to get the SEO details of an application, which includes a robot.txt, meta-tags and sitemap.
   */
  getSEOConfiguration({} = {}) {
    const { error } = ContentValidator.getSEOConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSEOConfiguration"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<SlideshowGetResponse>} - Success response
   * @summary: Get the slideshows
   * @description: Use this API to get a list of slideshows along with their details.
   */
  getSlideshows({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getSlideshows().validate(
      { pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSlideshows"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get the slideshows
   * @description: Use this API to get a list of slideshows along with their details.
   */
  getSlideshowsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSlideshows({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a slideshow. You can get slug value from the endpoint
   *   /service/application/content/v1.0/slideshow/.
   * @returns {Promise<SlideshowSchema>} - Success response
   * @summary: Get a slideshow
   * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a slideshow using its `slug`.
   */
  getSlideshow({ slug } = {}) {
    const { error } = ContentValidator.getSlideshow().validate(
      { slug },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSlideshow"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<Support>} - Success response
   * @summary: Get the support information
   * @description: Use this API to get contact details for customer support including emails and phone numbers.
   */
  getSupportInformation({} = {}) {
    const { error } = ContentValidator.getSupportInformation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getSupportInformation"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<TagsSchema>} - Success response
   * @summary: Get the tags associated with an application
   * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
   */
  getTags({} = {}) {
    const { error } = ContentValidator.getTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getTags"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a page. You can get slug value from the endpoint
   *   /service/application/content/v2.0/pages/.
   * @param {string} [arg.rootId] - ID given to the HTML element
   * @returns {Promise<PageSchema>} - Success response
   * @summary: Get a page
   * @description: Use this API to get the details of a page using its slug. Details include the title, seo, publish status, feature image, tags, meta, etc.
   */
  getPage({ slug, rootId } = {}) {
    const { error } = ContentValidator.getPage().validate(
      { slug, rootId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["root_id"] = rootId;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPage"],
        params: { slug },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<PageGetResponse>} - Success response
   * @summary: Get all pages
   * @description: Use this API to get a list of pages.
   */
  getPages({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getPages().validate(
      { pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPages"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get all pages
   * @description: Use this API to get a list of pages.
   */
  getPagesPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getPages({
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback);
    return paginator;
  }
}

module.exports = Content;
