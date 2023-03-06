const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const FeedbackValidator = require("./FeedbackPlatformApplicationValidator");

class Feedback {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Pagination page no
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get list of attribute data
   * @description: Provides a list of all attribute data.
   */
  getAttributes({ pageNo, pageSize } = {}) {
    const { error } = FeedbackValidator.getAttributes().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/attributes/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get list of attribute data
   * @description: Provides a list of all attribute data.
   */
  getAttributesPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAttributes({
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
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - Review id
   * @param {string} [arg.entityId] - Entity id
   * @param {string} [arg.entityType] - Entity type
   * @param {string} [arg.userId] - User id
   * @param {string} [arg.media] - Media type e.g. image | video | video_file
   *   | video_link
   * @param {number[]} [arg.rating] - Rating filter, 1-5
   * @param {string[]} [arg.attributeRating] - Attribute rating filter with
   *   ma,e of attribute
   * @param {boolean} [arg.facets] - Facets (true|false)
   * @param {string} [arg.sort] - Sort by : default | top | recent
   * @param {string} [arg.next] - Pagination next
   * @param {string} [arg.start] - Pagination start
   * @param {string} [arg.limit] - Pagination limit
   * @param {string} [arg.count] - Pagination count
   * @param {string} [arg.pageId] - Pagination page id
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get list of customer reviews [admin]
   * @description: The endpoint provides a list of customer reviews based on entity and provided filters
   */
  getCustomerReviews({
    id,
    entityId,
    entityType,
    userId,
    media,
    rating,
    attributeRating,
    facets,
    sort,
    next,
    start,
    limit,
    count,
    pageId,
    pageSize,
  } = {}) {
    const { error } = FeedbackValidator.getCustomerReviews().validate(
      {
        id,
        entityId,
        entityType,
        userId,
        media,
        rating,
        attributeRating,
        facets,
        sort,
        next,
        start,
        limit,
        count,
        pageId,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["id"] = id;
    query_params["entity_id"] = entityId;
    query_params["entity_type"] = entityType;
    query_params["user_id"] = userId;
    query_params["media"] = media;
    query_params["rating"] = rating;
    query_params["attribute_rating"] = attributeRating;
    query_params["facets"] = facets;
    query_params["sort"] = sort;
    query_params["next"] = next;
    query_params["start"] = start;
    query_params["limit"] = limit;
    query_params["count"] = count;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/reviews/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {string} [arg.id] - Review id
   * @param {string} [arg.entityId] - Entity id
   * @param {string} [arg.entityType] - Entity type
   * @param {string} [arg.userId] - User id
   * @param {string} [arg.media] - Media type e.g. image | video | video_file
   *   | video_link
   * @param {number[]} [arg.rating] - Rating filter, 1-5
   * @param {string[]} [arg.attributeRating] - Attribute rating filter with
   *   ma,e of attribute
   * @param {boolean} [arg.facets] - Facets (true|false)
   * @param {string} [arg.sort] - Sort by : default | top | recent
   * @param {string} [arg.next] - Pagination next
   * @param {string} [arg.start] - Pagination start
   * @param {string} [arg.limit] - Pagination limit
   * @param {string} [arg.count] - Pagination count
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get list of customer reviews [admin]
   * @description: The endpoint provides a list of customer reviews based on entity and provided filters
   */
  getCustomerReviewsPaginator({
    companyId,
    applicationId,
    id,
    entityId,
    entityType,
    userId,
    media,
    rating,
    attributeRating,
    facets,
    sort,
    next,
    start,
    limit,
    count,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getCustomerReviews({
        companyId: companyId,
        applicationId: applicationId,
        id: id,
        entityId: entityId,
        entityType: entityType,
        userId: userId,
        media: media,
        rating: rating,
        attributeRating: attributeRating,
        facets: facets,
        sort: sort,
        next: next,
        start: start,
        limit: limit,
        count: count,
        pageId: pageId,
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.reviewId - Review id
   * @param {ApproveRequest} arg.body
   * @summary: update approve details
   * @description: The is used to update approve details like status and description text
   */
  updateApprove({ reviewId, body } = {}) {
    const { error } = FeedbackValidator.updateApprove().validate(
      {
        reviewId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/reviews/${reviewId}/approve/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.reviewId - Review id
   * @summary: get history details
   * @description: The is used to get the history details like status and description text
   */
  getHistory({ reviewId } = {}) {
    const { error } = FeedbackValidator.getHistory().validate(
      {
        reviewId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/reviews/${reviewId}/history/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.pageId] - Pagination page id
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get list of templates
   * @description: Get all templates of application
   */
  getApplicationTemplates({ pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getApplicationTemplates().validate(
      {
        pageId,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/templates/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: Get list of templates
   * @description: Get all templates of application
   */
  getApplicationTemplatesPaginator({
    companyId,
    applicationId,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getApplicationTemplates({
        companyId: companyId,
        applicationId: applicationId,
        pageId: pageId,
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
   * @param {Object} arg - Arg object.
   * @param {TemplateRequestList} arg.body
   * @summary: Create a new template
   * @description: Create a new template for review with following data:
   * - Enable media, rating and review
   * - Rating - active/inactive/selected rate choices, attributes, text on rate, comment for each rate, type
   * - Review - header, title, description, image and video meta, enable votes
   */
  createTemplate({ body } = {}) {
    const { error } = FeedbackValidator.createTemplate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/templates/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Template id
   * @summary: Get a template by ID
   * @description: Get the template for product or l3 type by ID
   */
  getTemplateById({ id } = {}) {
    const { error } = FeedbackValidator.getTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/templates/${id}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Template id
   * @param {UpdateTemplateRequest} arg.body
   * @summary: Update a template's status
   * @description: Update existing template status, active/archive
   */
  updateTemplate({ id, body } = {}) {
    const { error } = FeedbackValidator.updateTemplate().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/templates/${id}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Template id
   * @param {UpdateTemplateStatusRequest} arg.body
   * @summary: Update a template's status
   * @description: Update existing template status, active/archive
   */
  updateTemplateStatus({ id, body } = {}) {
    const { error } = FeedbackValidator.updateTemplateStatus().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/templates/${id}/status/`,
      query_params,
      body
    );
  }
}
module.exports = Feedback;
