const APIClient = require("../ApplicationAPIClient");
const Paginator = require("../../common/Paginator");
const constructUrl = require("../constructUrl");
const { FDKClientValidationError } = require("../../common/FDKError");
const FeedbackValidator = require("../models/FeedbackValidator");

class Feedback {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      createAbuseReport: "/service/application/feedback/v1.0/abuse/",
      updateAbuseReport: "/service/application/feedback/v1.0/abuse/",
      getAbuseReports:
        "/service/application/feedback/v1.0/abuse/entity/{entity_type}/entity-id/{entity_id}",
      getAttributes: "/service/application/feedback/v1.0/attributes/",
      createAttribute: "/service/application/feedback/v1.0/attributes/",
      getAttribute: "/service/application/feedback/v1.0/attributes/{slug}",
      updateAttribute: "/service/application/feedback/v1.0/attributes/{slug}",
      createComment: "/service/application/feedback/v1.0/comment/",
      updateComment: "/service/application/feedback/v1.0/comment/",
      getComments:
        "/service/application/feedback/v1.0/comment/entity/{entity_type}",
      checkEligibility:
        "/service/application/feedback/v1.0/config/entity/{entity_type}/entity-id/{entity_id}",
      deleteMedia: "/service/application/feedback/v1.0/media/",
      createMedia: "/service/application/feedback/v1.0/media/",
      updateMedia: "/service/application/feedback/v1.0/media/",
      getMedias:
        "/service/application/feedback/v1.0/media/entity/{entity_type}/entity-id/{entity_id}",
      getReviewSummaries:
        "/service/application/feedback/v1.0/rating/summary/entity/{entity_type}/entity-id/{entity_id}",
      createReview: "/service/application/feedback/v1.0/review/",
      updateReview: "/service/application/feedback/v1.0/review/",
      getReviews:
        "/service/application/feedback/v1.0/review/entity/{entity_type}/entity-id/{entity_id}",
      getTemplates: "/service/application/feedback/v1.0/template/",
      createQuestion: "/service/application/feedback/v1.0/template/qna/",
      updateQuestion: "/service/application/feedback/v1.0/template/qna/",
      getQuestionAndAnswers:
        "/service/application/feedback/v1.0/template/qna/entity/{entity_type}/entity-id/{entity_id}",
      getVotes: "/service/application/feedback/v1.0/vote/",
      createVote: "/service/application/feedback/v1.0/vote/",
      updateVote: "/service/application/feedback/v1.0/vote/",
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
   * @param {ReportAbuseRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Post a new abuse request
   * @description: Use this API to report a specific entity (question/review/comment) for abuse.
   */
  createAbuseReport({ body } = {}) {
    const { error } = FeedbackValidator.createAbuseReport().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createAbuseReport"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateAbuseStatusRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update abuse details
   * @description: Use this API to update the abuse details, i.e. status and description.
   */
  updateAbuseReport({ body } = {}) {
    const { error } = FeedbackValidator.updateAbuseReport().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateAbuseReport"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type (question ID/review ID/comment ID).
   * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
   * @param {string} [arg.id] - Abuse id
   * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<ReportAbuseGetResponse>} - Success response
   * @summary: Get a list of abuse data
   * @description: Use this API to retrieve a list of abuse data from entity type and entity ID.
   */
  getAbuseReports({ entityId, entityType, id, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getAbuseReports().validate(
      { entityId, entityType, id, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAbuseReports"],
        params: { entityId, entityType },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type (question ID/review ID/comment ID).
   * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
   * @param {string} [arg.id] - Abuse id
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get a list of abuse data
   * @description: Use this API to retrieve a list of abuse data from entity type and entity ID.
   */
  getAbuseReportsPaginator({ entityId, entityType, id, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getAbuseReports({
        entityId: entityId,
        entityType: entityType,
        id: id,
        pageId: pageId,
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
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<AttributeResponse>} - Success response
   * @summary: Get a list of attribute data
   * @description: Use this API to retrieve a list of all attribute data, e.g. quality, material, product fitting, packaging, etc.
   */
  getAttributes({ pageNo, pageSize } = {}) {
    const { error } = FeedbackValidator.getAttributes().validate(
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
        url: this._urls["getAttributes"],
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
   * @summary: Get a list of attribute data
   * @description: Use this API to retrieve a list of all attribute data, e.g. quality, material, product fitting, packaging, etc.
   */
  getAttributesPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAttributes({
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
   * @param {SaveAttributeRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Add a new attribute request
   * @description: Use this API to add a new attribute (e.g. product quality/material/value for money) with its name, slug and description.
   */
  createAttribute({ body } = {}) {
    const { error } = FeedbackValidator.createAttribute().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createAttribute"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of an attribute. You can get slug value from the endpoint
   *   'service/application/feedback/v1.0/attributes'.
   * @returns {Promise<Attribute>} - Success response
   * @summary: Get data of a single attribute
   * @description: Use this API to retrieve a single attribute data from a given slug.
   */
  getAttribute({ slug } = {}) {
    const { error } = FeedbackValidator.getAttribute().validate(
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
        url: this._urls["getAttribute"],
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
   *   identifier of an attribute. You can get slug value from the endpoint
   *   'service/application/feedback/v1.0/attributes'.
   * @param {UpdateAttributeRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update details of an attribute
   * @description: Use this API update the attribute's name and description.
   */
  updateAttribute({ slug, body } = {}) {
    const { error } = FeedbackValidator.updateAttribute().validate(
      { slug, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateAttribute"],
        params: { slug },
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CommentRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Post a new comment
   * @description: Use this API to add a new comment for a specific entity.
   */
  createComment({ body } = {}) {
    const { error } = FeedbackValidator.createComment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createComment"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateCommentRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update the status of a comment
   * @description: Use this API to update the comment status (active or approve) along with new comment if any.
   */
  updateComment({ body } = {}) {
    const { error } = FeedbackValidator.updateComment().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateComment"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
   * @param {string} [arg.id] - Comment ID
   * @param {string} [arg.entityId] - ID of the eligible entity as specified
   *   in the entity type (question ID/review ID/comment ID).
   * @param {string} [arg.userId] - User ID - a flag/filter to get comments for a user.
   * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<CommentGetResponse>} - Success response
   * @summary: Get a list of comments
   * @description: Use this API to retrieve a list of comments for a specific entity type, e.g. products.
   */
  getComments({ entityType, id, entityId, userId, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getComments().validate(
      { entityType, id, entityId, userId, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["entity_id"] = entityId;
    query_params["user_id"] = userId;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getComments"],
        params: { entityType },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. question, review or comment.
   * @param {string} [arg.id] - Comment ID
   * @param {string} [arg.entityId] - ID of the eligible entity as specified
   *   in the entity type (question ID/review ID/comment ID).
   * @param {string} [arg.userId] - User ID - a flag/filter to get comments for a user.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get a list of comments
   * @description: Use this API to retrieve a list of comments for a specific entity type, e.g. products.
   */
  getCommentsPaginator({ entityType, id, entityId, userId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getComments({
        entityType: entityType,
        id: id,
        entityId: entityId,
        userId: userId,
        pageId: pageId,
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
   * @param {string} arg.entityType - Type of entity, e.g. question, rate,
   *   review, answer, or comment.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @returns {Promise<CheckEligibilityResponse>} - Success response
   * @summary: Checks eligibility to rate and review, and shows the cloud media configuration
   * @description: Use this API to check whether an entity is eligible to be rated and reviewed. Moreover, it shows the cloud media configuration too.
   */
  checkEligibility({ entityType, entityId } = {}) {
    const { error } = FeedbackValidator.checkEligibility().validate(
      { entityType, entityId },
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
        url: this._urls["checkEligibility"],
        params: { entityType, entityId },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string[]} arg.ids - List of media ID
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Delete Media
   * @description: Use this API to delete media for an entity ID.
   */
  deleteMedia({ ids } = {}) {
    const { error } = FeedbackValidator.deleteMedia().validate(
      { ids },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["ids"] = ids;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["deleteMedia"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddMediaListRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Add Media
   * @description: Use this API to add media to an entity, e.g. review.
   */
  createMedia({ body } = {}) {
    const { error } = FeedbackValidator.createMedia().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createMedia"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateMediaListRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update Media
   * @description: Use this API to update media (archive/approve) for an entity.
   */
  updateMedia({ body } = {}) {
    const { error } = FeedbackValidator.updateMedia().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateMedia"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. question or product.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type(question ID/product ID).
   * @param {string} [arg.id] - ID of the media.
   * @param {string} [arg.type] - Media type.
   * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<MediaGetResponse>} - Success response
   * @summary: Get Media
   * @description: Use this API to retrieve all media from an entity.
   */
  getMedias({ entityType, entityId, id, type, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getMedias().validate(
      { entityType, entityId, id, type, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["type"] = type;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getMedias"],
        params: { entityType, entityId },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. question or product.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type(question ID/product ID).
   * @param {string} [arg.id] - ID of the media.
   * @param {string} [arg.type] - Media type.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get Media
   * @description: Use this API to retrieve all media from an entity.
   */
  getMediasPaginator({ entityType, entityId, id, type, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getMedias({
        entityType: entityType,
        entityId: entityId,
        id: id,
        type: type,
        pageId: pageId,
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
   * @param {string} arg.entityType - Type of entity, e.g. product, delivery,
   *   seller, order placed, order delivered, application, or template.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @param {string} [arg.id] - Review summary identifier.
   * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<ReviewMetricGetResponse>} - Success response
   * @summary: Get a review summary
   * @description: Review summary gives ratings and attribute metrics of a review per entity. Use this API to retrieve the following response data: review count, rating average. 'review metrics'/'attribute rating metrics' which contains name, type, average and count.
   */
  getReviewSummaries({ entityType, entityId, id, pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getReviewSummaries().validate(
      { entityType, entityId, id, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getReviewSummaries"],
        params: { entityType, entityId },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. product, delivery,
   *   seller, order placed, order delivered, application, or template.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @param {string} [arg.id] - Review summary identifier.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get a review summary
   * @description: Review summary gives ratings and attribute metrics of a review per entity. Use this API to retrieve the following response data: review count, rating average. 'review metrics'/'attribute rating metrics' which contains name, type, average and count.
   */
  getReviewSummariesPaginator({ entityType, entityId, id, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getReviewSummaries({
        entityType: entityType,
        entityId: entityId,
        id: id,
        pageId: pageId,
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
   * @param {UpdateReviewRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Add customer reviews
   * @description: Use this API to add customer reviews for a specific entity along with the following data: attributes rating, entity rating, title, description, media resources and template ID.
   */
  createReview({ body } = {}) {
    const { error } = FeedbackValidator.createReview().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createReview"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateReviewRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update customer reviews
   * @description: Use this API to update customer reviews for a specific entity along with following data: attributes rating, entity rating, title, description, media resources and template ID.
   */
  updateReview({ body } = {}) {
    const { error } = FeedbackValidator.updateReview().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateReview"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. product, delivery,
   *   seller, l3, order placed, order delivered, application, or template.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @param {string} [arg.id] - ID of the review.
   * @param {string} [arg.userId] - ID of the user.
   * @param {string} [arg.media] - Media type, e.g. image | video | video_file
   *   | video_link
   * @param {number[]} [arg.rating] - Rating filter, e.g. 1-5
   * @param {string[]} [arg.attributeRating] - Filter for attribute rating.
   * @param {boolean} [arg.facets] - This is a boolean value for enabling
   *   metadata (facets). Selecting *true* will enable facets.
   * @param {string} [arg.sort] - Sort by: default | top | recent
   * @param {boolean} [arg.active] - Get the active reviews.
   * @param {boolean} [arg.approve] - Get the approved reviews.
   * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<ReviewGetResponse>} - Success response
   * @summary: Get list of customer reviews
   * @description: Use this API to retrieve a list of customer reviews based on entity and filters provided.
   */
  getReviews({
    entityType,
    entityId,
    id,
    userId,
    media,
    rating,
    attributeRating,
    facets,
    sort,
    active,
    approve,
    pageId,
    pageSize,
  } = {}) {
    const { error } = FeedbackValidator.getReviews().validate(
      {
        entityType,
        entityId,
        id,
        userId,
        media,
        rating,
        attributeRating,
        facets,
        sort,
        active,
        approve,
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
    query_params["user_id"] = userId;
    query_params["media"] = media;
    query_params["rating"] = rating;
    query_params["attribute_rating"] = attributeRating;
    query_params["facets"] = facets;
    query_params["sort"] = sort;
    query_params["active"] = active;
    query_params["approve"] = approve;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getReviews"],
        params: { entityType, entityId },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. product, delivery,
   *   seller, l3, order placed, order delivered, application, or template.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @param {string} [arg.id] - ID of the review.
   * @param {string} [arg.userId] - ID of the user.
   * @param {string} [arg.media] - Media type, e.g. image | video | video_file
   *   | video_link
   * @param {number[]} [arg.rating] - Rating filter, e.g. 1-5
   * @param {string[]} [arg.attributeRating] - Filter for attribute rating.
   * @param {boolean} [arg.facets] - This is a boolean value for enabling
   *   metadata (facets). Selecting *true* will enable facets.
   * @param {string} [arg.sort] - Sort by: default | top | recent
   * @param {boolean} [arg.active] - Get the active reviews.
   * @param {boolean} [arg.approve] - Get the approved reviews.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get list of customer reviews
   * @description: Use this API to retrieve a list of customer reviews based on entity and filters provided.
   */
  getReviewsPaginator({
    entityType,
    entityId,
    id,
    userId,
    media,
    rating,
    attributeRating,
    facets,
    sort,
    active,
    approve,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getReviews({
        entityType: entityType,
        entityId: entityId,
        id: id,
        userId: userId,
        media: media,
        rating: rating,
        attributeRating: attributeRating,
        facets: facets,
        sort: sort,
        active: active,
        approve: approve,
        pageId: pageId,
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
   * @param {string} [arg.templateId] - ID of the feedback template.
   * @param {string} [arg.entityId] - ID of the eligible entity as specified
   *   in the entity type.
   * @param {string} [arg.entityType] - Type of entity, e.g. product,
   *   delivery, seller, l3, order placed, order delivered, or application.
   * @returns {Promise<TemplateGetResponse>} - Success response
   * @summary: Get the feedback templates for a product or l3
   * @description: Use this API to retrieve the details of the following feedback template. order, delivered, application, seller, order, placed, product
   */
  getTemplates({ templateId, entityId, entityType } = {}) {
    const { error } = FeedbackValidator.getTemplates().validate(
      { templateId, entityId, entityType },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["template_id"] = templateId;
    query_params["entity_id"] = entityId;
    query_params["entity_type"] = entityType;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getTemplates"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateQNARequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Create a new question
   * @description: Use this API to create a new question with following data- tags, text, type, choices for MCQ type questions, maximum length of answer.
   */
  createQuestion({ body } = {}) {
    const { error } = FeedbackValidator.createQuestion().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createQuestion"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateQNARequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update a question
   * @description: Use this API to update the status of a question, its tags and its choices.
   */
  updateQuestion({ body } = {}) {
    const { error } = FeedbackValidator.updateQuestion().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateQuestion"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. product, l3, etc.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @param {string} [arg.id] - QNA ID
   * @param {string} [arg.userId] - User ID
   * @param {boolean} [arg.showAnswer] - This is a boolean value. Select
   *   *true* to display answers given.
   * @param {string} [arg.pageId] - Pagination page ID to retrieve next set of results.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<QNAGetResponse>} - Success response
   * @summary: Get a list of QnA
   * @description: Use this API to retrieve a list of questions and answers for a given entity.
   */
  getQuestionAndAnswers({
    entityType,
    entityId,
    id,
    userId,
    showAnswer,
    pageId,
    pageSize,
  } = {}) {
    const { error } = FeedbackValidator.getQuestionAndAnswers().validate(
      { entityType, entityId, id, userId, showAnswer, pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["user_id"] = userId;
    query_params["show_answer"] = showAnswer;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getQuestionAndAnswers"],
        params: { entityType, entityId },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.entityType - Type of entity, e.g. product, l3, etc.
   * @param {string} arg.entityId - ID of the eligible entity as specified in
   *   the entity type.
   * @param {string} [arg.id] - QNA ID
   * @param {string} [arg.userId] - User ID
   * @param {boolean} [arg.showAnswer] - This is a boolean value. Select
   *   *true* to display answers given.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get a list of QnA
   * @description: Use this API to retrieve a list of questions and answers for a given entity.
   */
  getQuestionAndAnswersPaginator({
    entityType,
    entityId,
    id,
    userId,
    showAnswer,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getQuestionAndAnswers({
        entityType: entityType,
        entityId: entityId,
        id: id,
        userId: userId,
        showAnswer: showAnswer,
        pageId: pageId,
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
   * @param {string} [arg.id] - Vote ID
   * @param {string} [arg.refType] - Entity type, e.g. review | comment.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<VoteResponse>} - Success response
   * @summary: Get a list of votes
   * @description: Use this API to retrieve a list of votes of a current logged in user. Votes can be filtered using `ref_type`, i.e. review | comment.
   */
  getVotes({ id, refType, pageNo, pageSize } = {}) {
    const { error } = FeedbackValidator.getVotes().validate(
      { id, refType, pageNo, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["id"] = id;
    query_params["ref_type"] = refType;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getVotes"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.id] - Vote ID
   * @param {string} [arg.refType] - Entity type, e.g. review | comment.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get a list of votes
   * @description: Use this API to retrieve a list of votes of a current logged in user. Votes can be filtered using `ref_type`, i.e. review | comment.
   */
  getVotesPaginator({ id, refType, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getVotes({
        id: id,
        refType: refType,
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
   * @param {VoteRequest} arg.body
   * @returns {Promise<InsertResponse>} - Success response
   * @summary: Create a new vote
   * @description: Use this API to create a new vote, where the action could be an upvote or a downvote. This is useful when you want to give a vote (say upvote) to a review (ref_type) of a product (entity_type).
   */
  createVote({ body } = {}) {
    const { error } = FeedbackValidator.createVote().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["createVote"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateVoteRequest} arg.body
   * @returns {Promise<UpdateResponse>} - Success response
   * @summary: Update a vote
   * @description: Use this API to update a vote with a new action, i.e. either an upvote or a downvote.
   */
  updateVote({ body } = {}) {
    const { error } = FeedbackValidator.updateVote().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "put",
      constructUrl({
        url: this._urls["updateVote"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }
}

module.exports = Feedback;
