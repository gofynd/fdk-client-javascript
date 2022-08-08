export = Feedback;
declare class Feedback {
    constructor(_conf: any);
    _conf: any;
    _relativeUrls: {
        createAbuseReport: string;
        updateAbuseReport: string;
        getAbuseReports: string;
        getAttributes: string;
        createAttribute: string;
        getAttribute: string;
        updateAttribute: string;
        createComment: string;
        updateComment: string;
        getComments: string;
        checkEligibility: string;
        deleteMedia: string;
        createMedia: string;
        updateMedia: string;
        getMedias: string;
        getReviewSummaries: string;
        createReview: string;
        updateReview: string;
        getReviews: string;
        getTemplates: string;
        createQuestion: string;
        updateQuestion: string;
        getQuestionAndAnswers: string;
        getVotes: string;
        createVote: string;
        updateVote: string;
    };
    _urls: {};
    updateUrls(urls: any): void;
    /**
     * @param {Object} arg - Arg object.
     * @param {ReportAbuseRequest} arg.body
     * @returns {Promise<InsertResponse>} - Success response
     * @summary: Post a new abuse request
     * @description: Use this API to report a specific entity (question/review/comment) for abuse.
     */
    createAbuseReport({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateAbuseStatusRequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Update abuse details
     * @description: Use this API to update the abuse details, i.e. status and description.
     */
    updateAbuseReport({ body }?: {
        body: any;
    }): Promise<any>;
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
    getAbuseReports({ entityId, entityType, id, pageId, pageSize }?: {
        entityId: string;
        entityType: string;
        id?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
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
    getAbuseReportsPaginator({ entityId, entityType, id, pageSize }?: {
        entityId: string;
        entityType: string;
        id?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageNo] - The page number to navigate through the
     *   given set of results. Default value is 1.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @returns {Promise<AttributeResponse>} - Success response
     * @summary: Get a list of attribute data
     * @description: Use this API to retrieve a list of all attribute data, e.g. quality, material, product fitting, packaging, etc.
     */
    getAttributes({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get a list of attribute data
     * @description: Use this API to retrieve a list of all attribute data, e.g. quality, material, product fitting, packaging, etc.
     */
    getAttributesPaginator({ pageSize }?: {
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {SaveAttributeRequest} arg.body
     * @returns {Promise<InsertResponse>} - Success response
     * @summary: Add a new attribute request
     * @description: Use this API to add a new attribute (e.g. product quality/material/value for money) with its name, slug and description.
     */
    createAttribute({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} arg.slug - A short, human-readable, URL-friendly
     *   identifier of an attribute. You can get slug value from the endpoint
     *   'service/application/feedback/v1.0/attributes'.
     * @returns {Promise<Attribute>} - Success response
     * @summary: Get data of a single attribute
     * @description: Use this API to retrieve a single attribute data from a given slug.
     */
    getAttribute({ slug }?: {
        slug: string;
    }): Promise<any>;
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
    updateAttribute({ slug, body }?: {
        slug: string;
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CommentRequest} arg.body
     * @returns {Promise<InsertResponse>} - Success response
     * @summary: Post a new comment
     * @description: Use this API to add a new comment for a specific entity.
     */
    createComment({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateCommentRequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Update the status of a comment
     * @description: Use this API to update the comment status (active or approve) along with new comment if any.
     */
    updateComment({ body }?: {
        body: any;
    }): Promise<any>;
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
    getComments({ entityType, id, entityId, userId, pageId, pageSize }?: {
        entityType: string;
        id?: string;
        entityId?: string;
        userId?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
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
    getCommentsPaginator({ entityType, id, entityId, userId, pageSize }?: {
        entityType: string;
        id?: string;
        entityId?: string;
        userId?: string;
        pageSize?: number;
    }): Paginator;
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
    checkEligibility({ entityType, entityId }?: {
        entityType: string;
        entityId: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string[]} arg.ids - List of media ID
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Delete Media
     * @description: Use this API to delete media for an entity ID.
     */
    deleteMedia({ ids }?: {
        ids: string[];
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {AddMediaListRequest} arg.body
     * @returns {Promise<InsertResponse>} - Success response
     * @summary: Add Media
     * @description: Use this API to add media to an entity, e.g. review.
     */
    createMedia({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateMediaListRequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Update Media
     * @description: Use this API to update media (archive/approve) for an entity.
     */
    updateMedia({ body }?: {
        body: any;
    }): Promise<any>;
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
    getMedias({ entityType, entityId, id, type, pageId, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        type?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
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
    getMediasPaginator({ entityType, entityId, id, type, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        type?: string;
        pageSize?: number;
    }): Paginator;
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
    getReviewSummaries({ entityType, entityId, id, pageId, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
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
    getReviewSummariesPaginator({ entityType, entityId, id, pageSize }?: {
        entityType: string;
        entityId: string;
        id?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateReviewRequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Add customer reviews
     * @description: Use this API to add customer reviews for a specific entity along with the following data: attributes rating, entity rating, title, description, media resources and template ID.
     */
    createReview({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateReviewRequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Update customer reviews
     * @description: Use this API to update customer reviews for a specific entity along with following data: attributes rating, entity rating, title, description, media resources and template ID.
     */
    updateReview({ body }?: {
        body: any;
    }): Promise<any>;
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
    getReviews({ entityType, entityId, id, userId, media, rating, attributeRating, facets, sort, active, approve, pageId, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        media?: string;
        rating?: number[];
        attributeRating?: string[];
        facets?: boolean;
        sort?: string;
        active?: boolean;
        approve?: boolean;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
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
    getReviewsPaginator({ entityType, entityId, id, userId, media, rating, attributeRating, facets, sort, active, approve, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        media?: string;
        rating?: number[];
        attributeRating?: string[];
        facets?: boolean;
        sort?: string;
        active?: boolean;
        approve?: boolean;
        pageSize?: number;
    }): Paginator;
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
    getTemplates({ templateId, entityId, entityType }?: {
        templateId?: string;
        entityId?: string;
        entityType?: string;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {CreateQNARequest} arg.body
     * @returns {Promise<InsertResponse>} - Success response
     * @summary: Create a new question
     * @description: Use this API to create a new question with following data- tags, text, type, choices for MCQ type questions, maximum length of answer.
     */
    createQuestion({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateQNARequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Update a question
     * @description: Use this API to update the status of a question, its tags and its choices.
     */
    updateQuestion({ body }?: {
        body: any;
    }): Promise<any>;
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
    getQuestionAndAnswers({ entityType, entityId, id, userId, showAnswer, pageId, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        showAnswer?: boolean;
        pageId?: string;
        pageSize?: number;
    }): Promise<any>;
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
    getQuestionAndAnswersPaginator({ entityType, entityId, id, userId, showAnswer, pageSize, }?: {
        entityType: string;
        entityId: string;
        id?: string;
        userId?: string;
        showAnswer?: boolean;
        pageSize?: number;
    }): Paginator;
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
    getVotes({ id, refType, pageNo, pageSize }?: {
        id?: string;
        refType?: string;
        pageNo?: number;
        pageSize?: number;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {string} [arg.id] - Vote ID
     * @param {string} [arg.refType] - Entity type, e.g. review | comment.
     * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
     * @summary: Get a list of votes
     * @description: Use this API to retrieve a list of votes of a current logged in user. Votes can be filtered using `ref_type`, i.e. review | comment.
     */
    getVotesPaginator({ id, refType, pageSize }?: {
        id?: string;
        refType?: string;
        pageSize?: number;
    }): Paginator;
    /**
     * @param {Object} arg - Arg object.
     * @param {VoteRequest} arg.body
     * @returns {Promise<InsertResponse>} - Success response
     * @summary: Create a new vote
     * @description: Use this API to create a new vote, where the action could be an upvote or a downvote. This is useful when you want to give a vote (say upvote) to a review (ref_type) of a product (entity_type).
     */
    createVote({ body }?: {
        body: any;
    }): Promise<any>;
    /**
     * @param {Object} arg - Arg object.
     * @param {UpdateVoteRequest} arg.body
     * @returns {Promise<UpdateResponse>} - Success response
     * @summary: Update a vote
     * @description: Use this API to update a vote with a new action, i.e. either an upvote or a downvote.
     */
    updateVote({ body }?: {
        body: any;
    }): Promise<any>;
}
import Paginator = require("../../common/Paginator");
