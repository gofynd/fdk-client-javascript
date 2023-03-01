const Common = require("./client/CommonPlatformClient");

const Lead = require("./client/LeadPlatformClient");

const Billing = require("./client/BillingPlatformClient");

const Communication = require("./client/CommunicationPlatformClient");

const Payment = require("./client/PaymentPlatformClient");

const Order = require("./client/OrderPlatformClient");

const Catalog = require("./client/CatalogPlatformClient");

const CompanyProfile = require("./client/CompanyProfilePlatformClient");

const FileStorage = require("./client/FileStoragePlatformClient");

const Inventory = require("./client/InventoryPlatformClient");

const Configuration = require("./client/ConfigurationPlatformClient");

const Analytics = require("./client/AnalyticsPlatformClient");

const Discount = require("./client/DiscountPlatformClient");

const Webhook = require("./client/WebhookPlatformClient");

const AuditTrail = require("./client/AuditTrailPlatformClient");
const PlatformApplicationClient = require("./PlatformApplicationClient");
const { FDKClientValidationError } = require("../common/FDKError");

class PlatformClient {
  constructor(config) {
    this.config = config;
    this.common = new Common(config);
    this.lead = new Lead(config);
    this.billing = new Billing(config);
    this.communication = new Communication(config);
    this.payment = new Payment(config);
    this.order = new Order(config);
    this.catalog = new Catalog(config);
    this.companyProfile = new CompanyProfile(config);
    this.fileStorage = new FileStorage(config);
    this.inventory = new Inventory(config);
    this.configuration = new Configuration(config);
    this.analytics = new Analytics(config);
    this.discount = new Discount(config);
    this.webhook = new Webhook(config);
    this.auditTrail = new AuditTrail(config);
  }
  application(applicationId) {
    if (typeof applicationId == "string") {
      return new PlatformApplicationClient(applicationId, this.config);
    }
    throw new Error(
      `Application Id should be of type string, ${typeof applicationId} provided`
    );
  }

  setExtraHeaders(header) {
    if (typeof header === "object") {
      this.config.extraHeaders.push(header);
    } else {
      throw new FDKClientValidationError("Context value should be an object");
    }
  }
}

/**
 * @typedef ApplicationResponse
 * @property {ApplicationData} [application]
 */

/**
 * @typedef Currency
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */

/**
 * @typedef Domain
 * @property {boolean} [verified]
 * @property {boolean} [is_primary]
 * @property {boolean} [is_shortlink]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {boolean} [is_predefined]
 */

/**
 * @typedef ApplicationWebsite
 * @property {boolean} [enabled]
 * @property {string} [basepath]
 */

/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */

/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled]
 */

/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [type]
 */

/**
 * @typedef ApplicationMeta
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef SecureUrl
 * @property {string} [secure_url]
 */

/**
 * @typedef ApplicationData
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description]
 * @property {string} [channel_type]
 * @property {number} [cache_ttl]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {number} [company_id]
 * @property {string} [token]
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type]
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 * @property {string} [slug]
 */

/**
 * @typedef NotFound
 * @property {string} [message]
 */

/**
 * @typedef BadRequest
 * @property {string} [message]
 */

/**
 * @typedef LocationDefaultLanguage
 * @property {string} [name]
 * @property {string} [code]
 */

/**
 * @typedef LocationDefaultCurrency
 * @property {string} [name]
 * @property {string} [symbol]
 * @property {string} [code]
 */

/**
 * @typedef LocationDetails
 * @property {string} [capital]
 * @property {string} [currency]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [name]
 * @property {string} [parent]
 * @property {string} [phone_code]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 * @property {string} [state_code]
 * @property {string} [country_code]
 * @property {string} [latitude]
 * @property {string} [longitude]
 */

/**
 * @typedef Locations
 * @property {LocationDetails[]} [items]
 */

/**
 * @typedef TicketList
 * @property {Ticket[]} [items]
 * @property {Filter} [filters]
 * @property {Page} [page]
 */

/**
 * @typedef Page
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {string} type
 * @property {number} [size]
 */

/**
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateCustomFormPayload
 * @property {string} slug
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {string} [header_image]
 * @property {PriorityEnum} priority
 * @property {boolean} [should_notify]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */

/**
 * @typedef EditCustomFormPayload
 * @property {string} title
 * @property {Object[]} inputs
 * @property {string} [description]
 * @property {PriorityEnum} priority
 * @property {string} [header_image]
 * @property {boolean} [should_notify]
 * @property {boolean} [login_required]
 * @property {string} [success_message]
 * @property {PollForAssignment} [poll_for_assignment]
 */

/**
 * @typedef EditTicketPayload
 * @property {TicketContent} [content]
 * @property {string} [category]
 * @property {string} [sub_category]
 * @property {string} [source]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {AgentChangePayload} [assigned_to]
 * @property {string[]} [tags]
 */

/**
 * @typedef AgentChangePayload
 * @property {string} agent_id
 */

/**
 * @typedef CreateVideoRoomResponse
 * @property {string} unique_name
 */

/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success
 */

/**
 * @typedef CreateVideoRoomPayload
 * @property {string} unique_name
 * @property {NotifyUser[]} [notify]
 */

/**
 * @typedef NotifyUser
 * @property {string} country_code
 * @property {string} phone_number
 */

/**
 * @typedef Filter
 * @property {Priority[]} priorities
 * @property {TicketCategory[]} [categories]
 * @property {Status[]} statuses
 * @property {Object[]} assignees
 */

/**
 * @typedef TicketHistoryPayload
 * @property {Object} value
 * @property {HistoryTypeEnum} type
 */

/**
 * @typedef CustomFormSubmissionPayload
 * @property {Object[]} response
 * @property {TicketAsset[]} [attachments]
 */

/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token
 */

/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants
 */

/**
 * @typedef Participant
 * @property {UserSchema} [user]
 * @property {string} [identity]
 * @property {string} [status]
 */

/**
 * @typedef Email
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 * @property {boolean} [active]
 */

/**
 * @typedef Debug
 * @property {string} [source]
 * @property {string} [platform]
 */

/**
 * @typedef SubmitCustomFormResponse
 * @property {string} message
 * @property {Ticket} [ticket]
 */

/**
 * @typedef TicketContext
 * @property {string} [application_id]
 * @property {string} company_id
 */

/**
 * @typedef CreatedOn
 * @property {string} user_agent
 */

/**
 * @typedef TicketAsset
 * @property {string} [display]
 * @property {string} value
 * @property {TicketAssetTypeEnum} type
 */

/**
 * @typedef TicketContent
 * @property {string} title
 * @property {string} [description]
 * @property {TicketAsset[]} [attachments]
 */

/**
 * @typedef AddTicketPayload
 * @property {Object} [created_by]
 * @property {string} [status]
 * @property {PriorityEnum} [priority]
 * @property {string} category
 * @property {TicketContent} content
 * @property {Object} [_custom_json]
 */

/**
 * @typedef Priority
 * @property {PriorityEnum} key
 * @property {string} display
 * @property {string} color
 */

/**
 * @typedef Status
 * @property {string} key
 * @property {string} display
 * @property {string} color
 */

/**
 * @typedef TicketFeedbackForm
 * @property {string} title
 * @property {Object[]} [display]
 */

/**
 * @typedef TicketFeedbackList
 * @property {TicketFeedback[]} [items]
 */

/**
 * @typedef TicketFeedbackPayload
 * @property {Object} [form_response]
 */

/**
 * @typedef SubmitButton
 * @property {string} title
 * @property {string} title_color
 * @property {string} background_color
 */

/**
 * @typedef PollForAssignment
 * @property {number} duration
 * @property {string} message
 * @property {string} success_message
 * @property {string} failure_message
 */

/**
 * @typedef CustomForm
 * @property {string} application_id
 * @property {string} slug
 * @property {string} [header_image]
 * @property {string} title
 * @property {string} [description]
 * @property {Priority} priority
 * @property {boolean} login_required
 * @property {boolean} should_notify
 * @property {string} [success_message]
 * @property {SubmitButton} [submit_button]
 * @property {Object[]} inputs
 * @property {CreatedOn} [created_on]
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {string} _id
 */

/**
 * @typedef CommunicationDetails
 * @property {string} [type]
 * @property {string} [title]
 * @property {string} [value]
 * @property {string} [description]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SupportGeneralConfig
 * @property {string} [_id]
 * @property {CommunicationDetails} [support_email]
 * @property {CommunicationDetails} [support_phone]
 * @property {CommunicationDetails} [support_faq]
 * @property {boolean} [show_communication_info]
 * @property {CommunicationDetails} [support_communication]
 * @property {boolean} [show_support_dris]
 * @property {Object} [integration]
 */

/**
 * @typedef FeedbackForm
 * @property {Object} [inputs]
 * @property {string} [title]
 * @property {Object} [timestamps]
 */

/**
 * @typedef TicketSubCategory
 * @property {string} key
 * @property {string} display
 * @property {TicketSubCategory} [sub_categories]
 */

/**
 * @typedef TicketCategory
 * @property {string} display
 * @property {string} key
 * @property {TicketCategory} [sub_categories]
 * @property {number} [group_id]
 * @property {FeedbackForm} [feedback_form]
 */

/**
 * @typedef CategoryData
 * @property {TicketCategory} [list]
 */

/**
 * @typedef IntegrationConfig
 * @property {string} [_id]
 * @property {string} integration_type
 * @property {string} [base_url]
 * @property {string} [create_ticket_apikey]
 * @property {string} [update_ticket_apikey]
 * @property {string} [category_sync_apikey]
 * @property {CategoryData} [category_data]
 * @property {string} [webhook_apikey]
 * @property {boolean} [config_completed]
 * @property {boolean} allow_ticket_creation
 * @property {boolean} show_listing
 */

/**
 * @typedef FeedbackResponseItem
 * @property {string} display
 * @property {string} key
 * @property {string} value
 */

/**
 * @typedef TicketFeedback
 * @property {string} _id
 * @property {string} ticket_id
 * @property {string} company_id
 * @property {FeedbackResponseItem[]} response
 * @property {string} [category]
 * @property {Object} [user]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef TicketHistory
 * @property {string} type
 * @property {Object} value
 * @property {string} ticket_id
 * @property {CreatedOn} [created_on]
 * @property {Object} [created_by]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef Ticket
 * @property {TicketContext} [context]
 * @property {CreatedOn} [created_on]
 * @property {string} [response_id]
 * @property {TicketContent} [content]
 * @property {TicketCategory} category
 * @property {string} [sub_category]
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {Priority} priority
 * @property {Object} [created_by]
 * @property {Object} [assigned_to]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_feedback_pending]
 * @property {Object} [integration]
 * @property {string} _id
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef Activity
 * @property {Object} [current_state]
 * @property {string} [document_id]
 * @property {Object} [previous_state]
 */

/**
 * @typedef ActivityDump
 * @property {Activity} [activity]
 * @property {CreatedBy} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [id]
 * @property {string} [type]
 */

/**
 * @typedef AddMediaListRequest
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {AddMediaRequest[]} [media_list]
 * @property {string} [ref_id]
 * @property {string} [ref_type]
 */

/**
 * @typedef AddMediaRequest
 * @property {string} [cloud_id]
 * @property {string} [cloud_name]
 * @property {string} [cloud_provider]
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {string} [media_url]
 * @property {string} [ref_id]
 * @property {string} [ref_type]
 * @property {string[]} [tags]
 * @property {string} [thumbnail_url]
 * @property {string} [type]
 */

/**
 * @typedef ApproveRequest
 * @property {boolean} [approve]
 * @property {string} [entity_type]
 * @property {string} id
 * @property {string} [reason]
 */

/**
 * @typedef Attribute
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {TagMeta[]} [tags]
 */

/**
 * @typedef AttributeObject
 * @property {string} [description]
 * @property {string} name
 * @property {string} [slug]
 * @property {string} [title]
 * @property {string} type
 * @property {number} value
 */

/**
 * @typedef CreatedBy
 * @property {string} [id]
 * @property {string} [name]
 * @property {TagMeta[]} [tags]
 */

/**
 * @typedef CursorGetResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef DeviceMeta
 * @property {string} [app_version]
 * @property {string} [platform]
 */

/**
 * @typedef Entity
 * @property {string} [id]
 * @property {string} [type]
 */

/**
 * @typedef EntityRequest
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 */

/**
 * @typedef FeedbackAttributes
 * @property {Attribute[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef FeedbackError
 * @property {Object} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */

/**
 * @typedef FeedbackState
 * @property {boolean} [active]
 * @property {boolean} [archive]
 * @property {string} [media]
 * @property {boolean} [qna]
 * @property {boolean} [rating]
 * @property {boolean} [review]
 */

/**
 * @typedef GetResponse
 * @property {Object} [data]
 * @property {Page} [page]
 */

/**
 * @typedef GetReviewResponse
 * @property {ReviewFacet[]} [facets]
 * @property {Object[]} [items]
 * @property {Page} [page]
 * @property {SortMethod[]} [sort]
 */

/**
 * @typedef InsertResponse
 * @property {number} [count]
 */

/**
 * @typedef MediaMeta
 * @property {number} [max_count]
 * @property {number} [size]
 * @property {string} [type]
 */

/**
 * @typedef MediaMetaRequest
 * @property {number} max_count
 * @property {number} size
 */

/**
 * @typedef NumberGetResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PageCursor
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} size
 * @property {string} type
 */

/**
 * @typedef PageNumber
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */

/**
 * @typedef Rating
 * @property {Attribute[]} [attributes]
 * @property {string[]} [attributes_slugs]
 * @property {UI} [ui]
 */

/**
 * @typedef RatingRequest
 * @property {string[]} attributes
 * @property {UI} [ui]
 */

/**
 * @typedef ReportAbuseRequest
 * @property {string} [description]
 * @property {string} entity_id
 * @property {string} entity_type
 */

/**
 * @typedef Review
 * @property {string} [description]
 * @property {string} [header]
 * @property {MediaMeta} [image_meta]
 * @property {string} [title]
 * @property {MediaMeta} [video_meta]
 * @property {boolean} [vote_allowed]
 */

/**
 * @typedef ReviewFacet
 * @property {string} [display]
 * @property {string} [name]
 * @property {boolean} [selected]
 * @property {string} [slug]
 * @property {string} [type]
 */

/**
 * @typedef ReviewRequest
 * @property {string} description
 * @property {string} header
 * @property {MediaMetaRequest} image_meta
 * @property {boolean} is_vote_allowed
 * @property {string} title
 * @property {MediaMetaRequest} video_meta
 */

/**
 * @typedef SaveAttributeRequest
 * @property {string} [description]
 * @property {string} name
 * @property {string} slug
 */

/**
 * @typedef SortMethod
 * @property {string} [name]
 * @property {boolean} [selected]
 * @property {string} [type]
 */

/**
 * @typedef TagMeta
 * @property {MediaMeta[]} [media]
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef Template
 * @property {DateMeta} [date_meta]
 * @property {Entity} [entity]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Rating} [rating]
 * @property {Review} [review]
 * @property {FeedbackState} [state]
 * @property {TagMeta[]} [tags]
 */

/**
 * @typedef TemplateGetResponse
 * @property {Template[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TemplateRequest
 * @property {boolean} active
 * @property {string} [enable_media_type]
 * @property {boolean} [enable_qna]
 * @property {boolean} enable_rating
 * @property {boolean} enable_review
 * @property {EntityRequest} entity
 * @property {RatingRequest} rating
 * @property {ReviewRequest} review
 */

/**
 * @typedef TemplateRequestList
 * @property {TemplateRequest[]} template_list
 */

/**
 * @typedef UI
 * @property {string[]} [feedback_question]
 * @property {UIIcon} [icon]
 * @property {string[]} [text]
 * @property {string} [type]
 */

/**
 * @typedef UIIcon
 * @property {string} [active]
 * @property {string} [inactive]
 * @property {string[]} [selected]
 */

/**
 * @typedef UpdateAttributeRequest
 * @property {string} [description]
 * @property {string} name
 * @property {string} [slug]
 */

/**
 * @typedef UpdateResponse
 * @property {number} [count]
 */

/**
 * @typedef UpdateReviewRequest
 * @property {boolean} [active]
 * @property {string} [application]
 * @property {boolean} [approve]
 * @property {boolean} [archive]
 * @property {AttributeObject[]} [attributes_rating]
 * @property {string} [description]
 * @property {DeviceMeta} [device_meta]
 * @property {string} [entity_id]
 * @property {string} [entity_type]
 * @property {MediaMeta[]} [media_resource]
 * @property {number} [rating]
 * @property {string} [review_id]
 * @property {string} [template_id]
 * @property {string} [title]
 */

/**
 * @typedef UpdateTemplateRequest
 * @property {boolean} active
 * @property {string} [enable_media_type]
 * @property {boolean} [enable_qna]
 * @property {boolean} enable_rating
 * @property {boolean} enable_review
 * @property {EntityRequest} entity
 * @property {RatingRequest} rating
 * @property {ReviewRequest} review
 */

/**
 * @typedef UpdateTemplateStatusRequest
 * @property {boolean} [active]
 * @property {boolean} [archive]
 */

/**
 * @typedef AvailablePageSchema
 * @property {string} [value]
 * @property {string} [text]
 * @property {string} [path]
 * @property {string} [type]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {string} [theme]
 * @property {AvailablePageSeo} [seo]
 * @property {Object[]} [props]
 * @property {string} [_id]
 */

/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */

/**
 * @typedef AvailablePageSeo
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [_id]
 */

/**
 * @typedef AvailablePageSchemaSections
 * @property {string} [name]
 * @property {string} [label]
 * @property {Object} [props]
 * @property {Object[]} [blocks]
 * @property {Object} [preset]
 * @property {AvailablePagePredicate} [predicate]
 */

/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [mobile]
 * @property {boolean} [desktop]
 * @property {boolean} [tablet]
 */

/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [authenticated]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [selected]
 * @property {string} [exact_url]
 * @property {Object} [query]
 */

/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 * @property {AvailablePageRoutePredicate} [route]
 */

/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {number} [current]
 */

/**
 * @typedef ThemesListingResponseSchema
 * @property {ThemesSchema[]} [items]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */

/**
 * @typedef UpgradableThemeSchema
 * @property {string} [parent_theme]
 * @property {string} [applied_theme]
 * @property {boolean} [upgrade]
 */

/**
 * @typedef FontsSchema
 * @property {FontsSchemaItems} [items]
 * @property {string} [kind]
 */

/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef BlitzkriegNotFoundSchema
 * @property {string} [message]
 */

/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef FontsSchemaItems
 * @property {string} [family]
 * @property {string[]} [variants]
 * @property {string[]} [subsets]
 * @property {string} [version]
 * @property {string} [last_modified]
 * @property {FontsSchemaItemsFiles} [files]
 * @property {string} [category]
 * @property {string} [kind]
 */

/**
 * @typedef FontsSchemaItemsFiles
 * @property {string} [regular]
 * @property {string} [italic]
 * @property {string} [bold]
 */

/**
 * @typedef ThemesSchema
 * @property {string} [application]
 * @property {boolean} [applied]
 * @property {boolean} [customized]
 * @property {boolean} [published]
 * @property {boolean} [archived]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [version]
 * @property {string} [parent_theme_version]
 * @property {string} [parent_theme]
 * @property {Information} [information]
 * @property {string[]} [tags]
 * @property {Src} [src]
 * @property {AssetsSchema} [assets]
 * @property {availableSectionSchema[]} [available_sections]
 * @property {Object} [styles]
 * @property {Config} [config]
 * @property {Font} [font]
 * @property {string} [_id]
 * @property {number} [__v]
 * @property {Colors} [colors]
 */

/**
 * @typedef availableSectionSchema
 * @property {Blocks[]} [blocks]
 * @property {string} [name]
 * @property {string} [label]
 * @property {BlocksProps[]} [props]
 */

/**
 * @typedef Information
 * @property {Images} [images]
 * @property {string[]} [features]
 * @property {string} [name]
 * @property {string} [description]
 */

/**
 * @typedef Images
 * @property {string[]} [desktop]
 * @property {string[]} [android]
 * @property {string[]} [ios]
 * @property {string[]} [thumbnail]
 */

/**
 * @typedef Src
 * @property {string} [link]
 */

/**
 * @typedef AssetsSchema
 * @property {UmdJs} [umd_js]
 * @property {CommonJs} [common_js]
 * @property {Css} [css]
 */

/**
 * @typedef UmdJs
 * @property {string} [link]
 * @property {string[]} [links]
 */

/**
 * @typedef CommonJs
 * @property {string} [link]
 */

/**
 * @typedef Css
 * @property {string} [link]
 * @property {string[]} [links]
 */

/**
 * @typedef Sections
 * @property {string} [attributes]
 */

/**
 * @typedef Config
 * @property {Preset} [preset]
 * @property {GlobalSchema} [global_schema]
 * @property {string} [current]
 * @property {ListSchemaItem[]} [list]
 */

/**
 * @typedef Preset
 * @property {AvailablePageSchema[]} [pages]
 */

/**
 * @typedef GlobalSchema
 * @property {GlobalSchemaProps[]} [props]
 */

/**
 * @typedef ListSchemaItem
 * @property {Object} [global_config]
 * @property {ConfigPage[]} [page]
 * @property {string} [name]
 */

/**
 * @typedef Colors
 * @property {string} [bg_color]
 * @property {string} [primary_color]
 * @property {string} [secondary_color]
 * @property {string} [accent_color]
 * @property {string} [link_color]
 * @property {string} [button_secondary_color]
 */

/**
 * @typedef Custom
 * @property {Object} [props]
 */

/**
 * @typedef ConfigPage
 * @property {Object} [settings]
 * @property {string} [page]
 */

/**
 * @typedef Font
 * @property {string} [family]
 * @property {Variants} [variants]
 */

/**
 * @typedef Variants
 * @property {Medium} [medium]
 * @property {SemiBold} [semi_bold]
 * @property {Bold} [bold]
 * @property {Light} [light]
 * @property {Regular} [regular]
 */

/**
 * @typedef Medium
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef SemiBold
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Bold
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Light
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Regular
 * @property {string} [name]
 * @property {string} [file]
 */

/**
 * @typedef Blocks
 * @property {string} [type]
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 */

/**
 * @typedef GlobalSchemaProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 * @property {string} [category]
 */

/**
 * @typedef BlocksProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */

/**
 * @typedef BlockUserRequestSchema
 * @property {boolean} [status]
 * @property {string[]} [user_id]
 * @property {string} [reason]
 */

/**
 * @typedef ArchiveUserRequestSchema
 * @property {string} [user_id]
 */

/**
 * @typedef DeleteApplicationUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 * @property {string} [request_id]
 * @property {string} [otp]
 */

/**
 * @typedef UnDeleteUserRequestSchema
 * @property {string} [user_id]
 * @property {string} [reason]
 * @property {string} [reason_id]
 */

/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email]
 */

/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [verified]
 * @property {boolean} [active]
 * @property {string} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 */

/**
 * @typedef EditMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [phone]
 */

/**
 * @typedef EditProfileRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {EditProfileMobileSchema} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {string} [profile_pic_url]
 * @property {string} [android_hash]
 * @property {string} [sender]
 * @property {string} [register_token]
 */

/**
 * @typedef EditProfileMobileSchema
 * @property {string} [phone]
 * @property {string} [country_code]
 */

/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [register_token]
 */

/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [email]
 * @property {string} [action]
 * @property {string} [register_token]
 * @property {string} [otp]
 */

/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} [request_id]
 * @property {string} [register_token]
 * @property {string} [otp]
 */

/**
 * @typedef SendMobileOtpRequestSchema
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [action]
 * @property {string} [token]
 * @property {string} [android_hash]
 * @property {string} [force]
 * @property {string} [captcha_code]
 */

/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} [old_password]
 * @property {string} [new_password]
 */

/**
 * @typedef FormRegisterRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {string} [password]
 * @property {FormRegisterRequestSchemaPhone} [phone]
 * @property {string} [register_token]
 */

/**
 * @typedef TokenRequestBodySchema
 * @property {string} [token]
 */

/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} [code]
 * @property {string} [password]
 */

/**
 * @typedef CodeRequestBodySchema
 * @property {string} [code]
 */

/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} [email]
 * @property {string} [captcha_code]
 */

/**
 * @typedef SendResetPasswordMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {string} [captcha_code]
 */

/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [password]
 * @property {string} [username]
 */

/**
 * @typedef SendOtpRequestSchema
 * @property {string} [country_code]
 * @property {string} [captcha_code]
 * @property {string} [mobile]
 * @property {string} [android_hash]
 */

/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in]
 * @property {OAuthRequestSchemaOauth2} [oauth2]
 * @property {OAuthRequestSchemaProfile} [profile]
 */

/**
 * @typedef OAuthRequestAppleSchema
 * @property {string} [user_identifier]
 * @property {OAuthRequestAppleSchemaOauth} [oauth]
 * @property {OAuthRequestAppleSchemaProfile} [profile]
 */

/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */

/**
 * @typedef AuthSuccess
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 * @property {UserSchema} [user]
 */

/**
 * @typedef SendOtpResponse
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef ProfileEditSuccess
 * @property {UserSchema} [user]
 * @property {string} [register_token]
 * @property {string} [resend_email_token]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [email]
 * @property {string} [request_id]
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 */

/**
 * @typedef LoginSuccess
 * @property {UserSchema} [user]
 * @property {string} [request_id]
 * @property {string} [register_token]
 */

/**
 * @typedef VerifyOtpSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 * @property {string} [register_token]
 */

/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status]
 */

/**
 * @typedef RegisterFormSuccess
 * @property {string} [email]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [resend_email_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message]
 */

/**
 * @typedef HasPasswordSuccess
 * @property {boolean} [result]
 */

/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout]
 */

/**
 * @typedef BlockUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef ArchiveUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef DeleteUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef UnDeleteUserSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef OtpSuccess
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {string} [register_token]
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 */

/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success]
 */

/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions]
 */

/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_mobile_link]
 */

/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_email_link]
 */

/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verify_mobile_link]
 */

/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verify_email_link]
 */

/**
 * @typedef UserSearchResponseSchema
 * @property {UserSchema[]} [users]
 */

/**
 * @typedef CustomerListResponseSchema
 * @property {UserSchema[]} [items]
 * @property {PaginationSchema} [page]
 */

/**
 * @typedef SessionListResponseSchema
 * @property {string[]} [items]
 */

/**
 * @typedef SessionDeleteResponseSchema
 * @property {string[]} [items]
 */

/**
 * @typedef UnauthorizedSchema
 * @property {string} [message]
 */

/**
 * @typedef UnauthenticatedSchema
 * @property {boolean} [authenticated]
 */

/**
 * @typedef NotFoundSchema
 * @property {string} [message]
 */

/**
 * @typedef AuthenticationInternalServerErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef AuthenticationApiErrorSchema
 * @property {string} [message]
 */

/**
 * @typedef ProfileEditSuccessSchema
 * @property {string} [email]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_mobile_otp]
 * @property {string} [user]
 * @property {string} [register_token]
 * @property {boolean} [user_exists]
 */

/**
 * @typedef FormRegisterRequestSchemaPhone
 * @property {string} [country_code]
 * @property {string} [mobile]
 */

/**
 * @typedef OAuthRequestSchemaOauth2
 * @property {string} [access_token]
 * @property {number} [expiry]
 * @property {string} [refresh_token]
 */

/**
 * @typedef OAuthRequestSchemaProfile
 * @property {string} [last_name]
 * @property {string} [image]
 * @property {string} [id]
 * @property {string} [email]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */

/**
 * @typedef OAuthRequestAppleSchemaOauth
 * @property {string} [identity_token]
 */

/**
 * @typedef OAuthRequestAppleSchemaProfile
 * @property {string} [last_name]
 * @property {string} [full_name]
 * @property {string} [first_name]
 */

/**
 * @typedef AuthSuccessUser
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {AuthSuccessUserDebug} [debug]
 * @property {boolean} [active]
 * @property {AuthSuccessUserEmails} [emails]
 */

/**
 * @typedef AuthSuccessUserDebug
 * @property {string} [platform]
 */

/**
 * @typedef AuthSuccessUserEmails
 * @property {string} [email]
 * @property {boolean} [verified]
 * @property {boolean} [primary]
 * @property {boolean} [active]
 */

/**
 * @typedef CreateUserRequestSchema
 * @property {string} phone_number
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} username
 * @property {Object} [meta]
 */

/**
 * @typedef CreateUserResponseSchema
 * @property {UserSchema} [user]
 */

/**
 * @typedef CreateUserSessionRequestSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {string} [user_id]
 */

/**
 * @typedef CreateUserSessionResponseSchema
 * @property {string} [domain]
 * @property {number} [max_age]
 * @property {boolean} [secure]
 * @property {boolean} [http_only]
 * @property {Object} [cookie]
 */

/**
 * @typedef PlatformSchema
 * @property {string} [display]
 * @property {LookAndFeel} [look_and_feel]
 * @property {string} [updated_at]
 * @property {boolean} [active]
 * @property {boolean} [forgot_password]
 * @property {Login} [login]
 * @property {boolean} [skip_captcha]
 * @property {string} [name]
 * @property {MetaSchema} [meta]
 * @property {string} [_id]
 * @property {Social} [social]
 * @property {RequiredFields} [required_fields]
 * @property {RegisterRequiredFields} [register_required_fields]
 * @property {boolean} [skip_login]
 * @property {FlashCard} [flash_card]
 * @property {string} [subtext]
 * @property {SocialTokens} [social_tokens]
 * @property {string} [created_at]
 * @property {boolean} [register]
 * @property {string} [mobile_image]
 * @property {string} [desktop_image]
 * @property {number} [delete_account_day]
 * @property {DeleteAccountReasons[]} [delete_account_reasons]
 * @property {Object} [delete_account_consent]
 * @property {Object} [session_config]
 */

/**
 * @typedef LookAndFeel
 * @property {string} [card_position]
 * @property {string} [background_color]
 */

/**
 * @typedef Login
 * @property {boolean} [password]
 * @property {boolean} [otp]
 */

/**
 * @typedef MetaSchema
 * @property {boolean} [fynd_default]
 */

/**
 * @typedef Social
 * @property {boolean} [account_kit]
 * @property {boolean} [facebook]
 * @property {boolean} [google]
 * @property {boolean} [apple]
 */

/**
 * @typedef RequiredFields
 * @property {PlatformEmail} [email]
 * @property {PlatformMobile} [mobile]
 */

/**
 * @typedef PlatformEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef PlatformMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef RegisterRequiredFields
 * @property {RegisterRequiredFieldsEmail} [email]
 * @property {RegisterRequiredFieldsMobile} [mobile]
 */

/**
 * @typedef RegisterRequiredFieldsEmail
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef RegisterRequiredFieldsMobile
 * @property {boolean} [is_required]
 * @property {string} [level]
 */

/**
 * @typedef FlashCard
 * @property {string} [text]
 * @property {string} [text_color]
 * @property {string} [background_color]
 */

/**
 * @typedef SocialTokens
 * @property {Facebook} [facebook]
 * @property {Accountkit} [account_kit]
 * @property {Google} [google]
 */

/**
 * @typedef DeleteAccountReasons
 * @property {string} [reason_text]
 * @property {string} [reason_id]
 * @property {boolean} [show_text_area]
 */

/**
 * @typedef DeleteAccountConsent
 * @property {string} [consent_text]
 */

/**
 * @typedef Facebook
 * @property {string} [app_id]
 */

/**
 * @typedef Accountkit
 * @property {string} [app_id]
 */

/**
 * @typedef Google
 * @property {string} [app_id]
 */

/**
 * @typedef SessionExpiry
 * @property {number} [duration]
 * @property {string} [type]
 * @property {boolean} [is_rolling]
 */

/**
 * @typedef UpdateUserRequestSchema
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [external_id]
 * @property {Object} [meta]
 */

/**
 * @typedef UserSchema
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [first_name]
 * @property {Object} [meta]
 * @property {string} [last_name]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {Email[]} [emails]
 * @property {string} [gender]
 * @property {string} [dob]
 * @property {boolean} [active]
 * @property {string} [profile_pic_url]
 * @property {string} [username]
 * @property {string} [account_type]
 * @property {Debug} [debug]
 * @property {boolean} [has_old_password_hash]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef PhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [phone]
 * @property {number} [country_code]
 */

/**
 * @typedef ApplicationLegal
 * @property {string} [application]
 * @property {string} [tnc]
 * @property {string} [policy]
 * @property {string} [shipping]
 * @property {string} [returns]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [_id]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 */

/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [question]
 * @property {string} [answer]
 */

/**
 * @typedef PathMappingSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [updated_at]
 * @property {string} [created_at]
 * @property {TagSourceSchema} [__source]
 */

/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */

/**
 * @typedef SeoSchema
 * @property {string} [app]
 * @property {string} [_id]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {Object[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef CustomMetaTag
 * @property {string} [name]
 * @property {string} [content]
 * @property {string} [_id]
 */

/**
 * @typedef Detail
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef AnnouncementPageSchema
 * @property {string} [page_slug]
 * @property {string} [type]
 */

/**
 * @typedef EditorMeta
 * @property {string} [foreground_color]
 * @property {string} [background_color]
 * @property {string} [content_type]
 * @property {string} [content]
 */

/**
 * @typedef AnnouncementAuthorSchema
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef AdminAnnouncementSchema
 * @property {string} [_id]
 * @property {string[]} [platforms]
 * @property {string} [title]
 * @property {string} [announcement]
 * @property {AnnouncementPageSchema[]} [pages]
 * @property {EditorMeta} [editor_meta]
 * @property {AnnouncementAuthorSchema} [author]
 * @property {string} [created_at]
 * @property {string} [app]
 * @property {string} [modified_at]
 * @property {ScheduleSchema} [_schedule]
 */

/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 */

/**
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement]
 * @property {ScheduleStartSchema} [schedule]
 */

/**
 * @typedef ScheduleStartSchema
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */

/**
 * @typedef Author
 * @property {string} [designation]
 * @property {string} [id]
 * @property {string} [name]
 */

/**
 * @typedef BlogSchema
 * @property {string} [_id]
 * @property {Object} [_custom_json]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 * @property {string} [title]
 * @property {DateMeta} [date_meta]
 */

/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 */

/**
 * @typedef SEOImage
 * @property {string} [url]
 */

/**
 * @typedef BlogRequest
 * @property {string} [application]
 * @property {Object} [_custom_json]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {SEO} [seo]
 * @property {CronSchedule} [_schedule]
 */

/**
 * @typedef GetAnnouncementListSchema
 * @property {AdminAnnouncementSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateAnnouncementSchema
 * @property {string} [message]
 * @property {AdminAnnouncementSchema} [data]
 */

/**
 * @typedef DataLoaderResponseSchema
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 */

/**
 * @typedef DataLoaderResetResponseSchema
 * @property {string} [reset]
 */

/**
 * @typedef Navigation
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [orientation]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {NavigationReference} [navigation]
 */

/**
 * @typedef LocaleLanguage
 * @property {Language} [hi]
 * @property {Language} [ar]
 * @property {Language} [en_us]
 */

/**
 * @typedef Language
 * @property {string} [display]
 */

/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {PageType} type
 */

/**
 * @typedef NavigationReference
 * @property {string[]} [acl]
 * @property {string[]} [tags]
 * @property {LocaleLanguage} [_locale_language]
 * @property {string} [image]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 */

/**
 * @typedef LandingPage
 * @property {LandingPageSchema} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef ConfigurationSchema
 * @property {number} [sleep_time]
 * @property {boolean} [start_on_launch]
 * @property {number} [duration]
 * @property {string} [slide_direction]
 */

/**
 * @typedef SlideshowMedia
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {boolean} [auto_decide_duration]
 * @property {Action} [action]
 */

/**
 * @typedef Slideshow
 * @property {SlideshowSchema} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements]
 * @property {number} [refresh_rate]
 * @property {string[]} [refresh_pages]
 */

/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs]
 */

/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */

/**
 * @typedef HandpickedTagSchema
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [content]
 */

/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags]
 */

/**
 * @typedef CreateTagSchema
 * @property {string} [name]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {Object[]} [pages]
 * @property {string} [content]
 */

/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags]
 */

/**
 * @typedef DataLoaderSchema
 * @property {string} [name]
 * @property {string} [service]
 * @property {string} [operation_id]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [content]
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 */

/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */

/**
 * @typedef TagDeleteSuccessResponse
 * @property {boolean} [success]
 */

/**
 * @typedef ContentAPIError
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */

/**
 * @typedef CommonError
 * @property {string} [message]
 */

/**
 * @typedef CategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ChildrenSchema
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 */

/**
 * @typedef CategoryRequestSchema
 * @property {string} [slug]
 * @property {string} [title]
 */

/**
 * @typedef FAQCategorySchema
 * @property {number} [index]
 * @property {string} [title]
 * @property {string} [description]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [icon_url]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef FaqSchema
 * @property {string} [slug]
 * @property {string} [application]
 * @property {string} [_id]
 * @property {string} [question]
 * @property {string} [answer]
 * @property {string[]} [tags]
 */

/**
 * @typedef FAQ
 * @property {string} [slug]
 * @property {string} [question]
 * @property {string} [answer]
 */

/**
 * @typedef CreateFaqResponseSchema
 * @property {FaqSchema} [faq]
 */

/**
 * @typedef CreateFaqSchema
 * @property {FAQ} [faq]
 */

/**
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs]
 */

/**
 * @typedef UpdateFaqCategoryRequestSchema
 * @property {CategorySchema} [category]
 */

/**
 * @typedef CreateFaqCategoryRequestSchema
 * @property {CategoryRequestSchema} [category]
 */

/**
 * @typedef CreateFaqCategorySchema
 * @property {CategorySchema} [category]
 */

/**
 * @typedef GetFaqCategoriesSchema
 * @property {CategorySchema[]} [categories]
 */

/**
 * @typedef GetFaqCategoryBySlugSchema
 * @property {FAQCategorySchema} [category]
 */

/**
 * @typedef LandingPageGetResponse
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LandingPageSchema
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef DefaultNavigationResponse
 * @property {NavigationSchema[]} [items]
 */

/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Orientation
 * @property {string[]} [portrait]
 * @property {string[]} [landscape]
 */

/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {Orientation} [orientation]
 * @property {number} [version]
 * @property {NavigationReference[]} [navigation]
 */

/**
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string[]} [platform]
 * @property {Orientation} [orientation]
 * @property {NavigationReference[]} [navigation]
 */

/**
 * @typedef CustomPageSchema
 * @property {string} [_id]
 * @property {string} [platform]
 * @property {string} [title]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [orientation]
 * @property {string} [application]
 * @property {string} [description]
 * @property {boolean} [published]
 * @property {string[]} [tags]
 * @property {Object[]} [content]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {ScheduleSchema} [_schedule]
 */

/**
 * @typedef ContentSchema
 * @property {string} [type]
 * @property {Object} [value]
 */

/**
 * @typedef CustomPage
 * @property {CustomPageSchema} [data]
 */

/**
 * @typedef FeatureImage
 * @property {string} [secure_url]
 */

/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PageSpec
 * @property {Object[]} [specifications]
 */

/**
 * @typedef PageSpecParam
 * @property {string} [key]
 * @property {boolean} [required]
 */

/**
 * @typedef PageSpecItem
 * @property {string} [page_type]
 * @property {string} [display_name]
 * @property {PageSpecParam[]} [params]
 * @property {PageSpecParam[]} [query]
 */

/**
 * @typedef PageSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [component_ids]
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {Object[]} [page_meta]
 * @property {ScheduleSchema} [_schedule]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {SEO} [seo]
 * @property {Object} [visibility]
 * @property {boolean} [archived]
 */

/**
 * @typedef CreatedBySchema
 * @property {string} [id]
 */

/**
 * @typedef PageContent
 * @property {string} [type]
 * @property {Object} [value]
 */

/**
 * @typedef PageMeta
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PageRequest
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object} [_custom_json]
 * @property {string} [orientation]
 * @property {Object[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {SEO} [seo]
 * @property {string} [title]
 */

/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 */

/**
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */

/**
 * @typedef PageMetaSchema
 * @property {NavigationSchema[]} [system_pages]
 * @property {PageSchema[]} [custom_pages]
 * @property {string} [application_id]
 */

/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SlideshowSchema
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {DateMeta} [date_meta]
 * @property {string} [application]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia[]} [media]
 * @property {boolean} [active]
 * @property {boolean} [archived]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef SlideshowRequest
 * @property {string} [slug]
 * @property {string} [platform]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia} [media]
 * @property {boolean} [active]
 */

/**
 * @typedef Support
 * @property {boolean} [created]
 * @property {string} [_id]
 * @property {string} [config_type]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {ContactSchema} [contact]
 */

/**
 * @typedef PhoneProperties
 * @property {string} [key]
 * @property {string} [code]
 * @property {string} [number]
 */

/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */

/**
 * @typedef EmailProperties
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef EmailSchema
 * @property {boolean} [active]
 * @property {EmailProperties[]} [email]
 */

/**
 * @typedef ContactSchema
 * @property {PhoneSchema} [phone]
 * @property {EmailSchema} [email]
 */

/**
 * @typedef TagsSchema
 * @property {string} [application]
 * @property {string} [_id]
 * @property {TagSchema[]} [tags]
 */

/**
 * @typedef TagSchema
 * @property {string} [name]
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [sub_type]
 * @property {string} [_id]
 * @property {string} [position]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {Object[]} [pages]
 * @property {TagSourceSchema} [__source]
 */

/**
 * @typedef TagSourceSchema
 * @property {string} [type]
 * @property {string} [id]
 */

/**
 * @typedef UnauthenticatedUser
 * @property {string} [message]
 */

/**
 * @typedef UnauthenticatedApplication
 * @property {string} [message]
 */

/**
 * @typedef ResourceNotFound
 * @property {string} [message]
 */

/**
 * @typedef InternalServerError
 * @property {string} [message]
 * @property {string} [code]
 */

/**
 * @typedef CheckValidityResponse
 * @property {boolean} [is_valid]
 * @property {number} [discount_amount]
 */

/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */

/**
 * @typedef Plan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef DetailedPlanComponents
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string} [group]
 * @property {string} [icon]
 * @property {Object} [links]
 * @property {boolean} [enabled]
 * @property {string} [display_text]
 */

/**
 * @typedef DetailedPlan
 * @property {PlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {DetailedPlanComponents[]} [components]
 */

/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */

/**
 * @typedef EntityChargePrice
 * @property {number} amount
 * @property {string} currency_code
 */

/**
 * @typedef EntityChargeRecurring
 * @property {string} interval
 */

/**
 * @typedef ChargeLineItem
 * @property {string} name
 * @property {string} term
 * @property {string} pricing_type
 * @property {EntityChargePrice} price
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {number} [trial_days]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */

/**
 * @typedef CreateSubscriptionCharge
 * @property {string} name
 * @property {number} [trial_days]
 * @property {ChargeLineItem[]} line_items
 * @property {boolean} [is_test]
 * @property {string} return_url
 */

/**
 * @typedef OneTimeChargeItem
 * @property {string} name
 * @property {string} [term]
 * @property {string} pricing_type
 * @property {EntityChargePrice} price
 * @property {number} [capped_amount]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */

/**
 * @typedef CreateOneTimeCharge
 * @property {string} name
 * @property {OneTimeChargeItem} charge
 * @property {boolean} [is_test]
 * @property {string} return_url
 */

/**
 * @typedef CurrentPeriod
 * @property {string} [start_date]
 * @property {string} [end_date]
 */

/**
 * @typedef SubscriptionCharge
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [term]
 * @property {string} [pricing_type]
 * @property {EntityChargePrice} [price]
 * @property {EntityChargeRecurring} [recurring]
 * @property {number} [capped_amount]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {string} [billing_date]
 * @property {CurrentPeriod} [current_period]
 * @property {string} [status]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 */

/**
 * @typedef EntitySubscription
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {number} [company_id]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {number} [trial_days]
 * @property {SubscriptionTrialPeriod} [trial_period]
 * @property {Object} [metadata]
 * @property {SubscriptionCharge[]} [line_items]
 */

/**
 * @typedef OneTimeChargeEntity
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [status]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {Object} [metadata]
 * @property {string} [return_url]
 * @property {boolean} [is_test]
 * @property {string} [pricing_type]
 * @property {string} [subscriber_id]
 * @property {string} [entity_type]
 * @property {string} [entity_id]
 * @property {Object} [meta]
 * @property {EntityChargePrice} [price]
 */

/**
 * @typedef CreateOneTimeChargeResponse
 * @property {OneTimeChargeEntity} [charge]
 * @property {string} [confirm_url]
 */

/**
 * @typedef CreateSubscriptionResponse
 * @property {EntitySubscription} [subscription]
 * @property {string} [confirm_url]
 */

/**
 * @typedef InvoiceDetailsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef InvoiceDetailsClient
 * @property {string[]} [address_lines]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 */

/**
 * @typedef InvoiceDetailsStatusTrail
 * @property {string} [_id]
 * @property {string} [value]
 * @property {string} [timestamp]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsDataChecks
 * @property {string} [cvc_check]
 * @property {string} [address_line1_check]
 * @property {string} [address_postal_code_check]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsDataNetworks
 * @property {string[]} [available]
 * @property {string} [preferred]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
 * @property {boolean} [supported]
 */

/**
 * @typedef InvoiceDetailsPaymentMethodsData
 * @property {string} [brand]
 * @property {string} [last4]
 * @property {InvoiceDetailsPaymentMethodsDataChecks} [checks]
 * @property {string} [wallet]
 * @property {string} [country]
 * @property {string} [funding]
 * @property {number} [exp_year]
 * @property {InvoiceDetailsPaymentMethodsDataNetworks} [networks]
 * @property {number} [exp_month]
 * @property {string} [fingerprint]
 * @property {string} [generated_from]
 * @property {InvoiceDetailsPaymentMethodsDataThreeDSecureUsage} [three_d_secure_usage]
 */

/**
 * @typedef InvoiceDetailsPaymentMethods
 * @property {number} [id]
 * @property {string} [type]
 * @property {string} [pg_payment_method_id]
 * @property {InvoiceDetailsPaymentMethodsData} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef InvoicePaymentMethod
 * @property {string} [pg_payment_method_id]
 */

/**
 * @typedef InvoiceDetails
 * @property {InvoiceDetailsPeriod} [period]
 * @property {InvoiceDetailsClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [_id]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicePaymentMethod} [payment_method]
 */

/**
 * @typedef InvoiceItemsPlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */

/**
 * @typedef InvoiceItemsPlan
 * @property {InvoiceItemsPlanRecurring} [recurring]
 * @property {boolean} [is_trial_plan]
 * @property {string} [plan_group]
 * @property {string[]} [tag_lines]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {number} [trial_period]
 * @property {string[]} [addons]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [country]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {number} [amount]
 * @property {string} [product_suite_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef InvoiceItemsPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef InvoiceItems
 * @property {string} [_id]
 * @property {string} [currency]
 * @property {InvoiceItemsPlan} [plan]
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {string} [description]
 * @property {InvoiceItemsPeriod} [period]
 * @property {number} [unit_amount]
 * @property {number} [amount]
 * @property {string} [type]
 * @property {string} [invoice_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef Invoice
 * @property {InvoiceDetails} [invoice]
 * @property {InvoiceItems[]} [invoice_items]
 */

/**
 * @typedef InvoicesDataClient
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string[]} [address_lines]
 */

/**
 * @typedef InvoicesDataPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef InvoicesDataPaymentMethod
 * @property {string} [pg_payment_method_id]
 */

/**
 * @typedef InvoicesData
 * @property {string} [_id]
 * @property {InvoicesDataClient} [client]
 * @property {boolean} [auto_advance]
 * @property {string} [currency]
 * @property {boolean} [paid]
 * @property {number} [attemp]
 * @property {string} [collection_method]
 * @property {string} [subscriber_id]
 * @property {string} [invoice_url]
 * @property {string} [number]
 * @property {Object} [pg_data]
 * @property {InvoicesDataPeriod} [period]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {string} [current_status]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {string} [subscription]
 * @property {string} [next_action_time]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [hash_identifier]
 * @property {InvoicesDataPaymentMethod} [payment_method]
 * @property {InvoiceItems[]} [invoice_items]
 */

/**
 * @typedef Invoices
 * @property {InvoicesData[]} [data]
 * @property {number} [start]
 * @property {number} [end]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {number} [total]
 */

/**
 * @typedef Phone
 * @property {string} [phone_number]
 * @property {string} [phone_country_code]
 */

/**
 * @typedef SubscriptionBillingAddress
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [postal_code]
 */

/**
 * @typedef SubscriptionCustomer
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [_id]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {number} [credit_balance]
 * @property {Object} [data]
 */

/**
 * @typedef SubscriptionCustomerCreate
 * @property {Phone} [phone]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [email]
 */

/**
 * @typedef SubscriptionCurrentPeriod
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef SubscriptionPauseCollection
 * @property {string} [behavior]
 * @property {string} [resume_at]
 */

/**
 * @typedef SubscriptionTrial
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef SubscriptionInvoiceSettings
 * @property {boolean} [generation]
 * @property {boolean} [charging]
 */

/**
 * @typedef Subscription
 * @property {SubscriptionCurrentPeriod} [current_period]
 * @property {SubscriptionPauseCollection} [pause_collection]
 * @property {SubscriptionTrial} [trial]
 * @property {SubscriptionInvoiceSettings} [invoice_settings]
 * @property {boolean} [is_active]
 * @property {boolean} [cancel_at_period_end]
 * @property {string} [_id]
 * @property {string} [subscriber_id]
 * @property {string} [plan_id]
 * @property {string} [product_suite_id]
 * @property {Plan} [plan_data]
 * @property {string} [current_status]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 * @property {string} [latest_invoice]
 */

/**
 * @typedef SubscriptionStatus
 * @property {boolean} [is_enabled]
 * @property {Subscription} [subscription]
 */

/**
 * @typedef SubscriptionLimitApplication
 * @property {boolean} [enabled]
 * @property {number} [hard_limit]
 * @property {number} [soft_limit]
 */

/**
 * @typedef SubscriptionLimitMarketplace
 * @property {boolean} [enabled]
 */

/**
 * @typedef SubscriptionLimitOtherPlatform
 * @property {boolean} [enabled]
 */

/**
 * @typedef SubscriptionLimitTeam
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimitProducts
 * @property {boolean} [bulk]
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimitExtensions
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimitIntegrations
 * @property {boolean} [enabled]
 * @property {number} [limit]
 */

/**
 * @typedef SubscriptionLimit
 * @property {SubscriptionLimitApplication} [application]
 * @property {SubscriptionLimitMarketplace} [marketplace]
 * @property {SubscriptionLimitOtherPlatform} [other_platform]
 * @property {SubscriptionLimitTeam} [team]
 * @property {SubscriptionLimitProducts} [products]
 * @property {SubscriptionLimitExtensions} [extensions]
 * @property {SubscriptionLimitIntegrations} [integrations]
 * @property {boolean} [is_trial_plan]
 */

/**
 * @typedef SubscriptionActivateReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [plan_id]
 * @property {string} [payment_method]
 */

/**
 * @typedef SubscriptionActivateRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */

/**
 * @typedef CancelSubscriptionReq
 * @property {string} [unique_id]
 * @property {string} [type]
 * @property {string} [product_suite]
 * @property {string} [subscription_id]
 */

/**
 * @typedef CancelSubscriptionRes
 * @property {boolean} [success]
 * @property {Subscription} [data]
 */

/**
 * @typedef StatsImported
 * @property {number} [count]
 */

/**
 * @typedef StatsProcessedEmail
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */

/**
 * @typedef StatsProcessedSms
 * @property {number} [success]
 * @property {number} [failed]
 * @property {number} [suppressed]
 */

/**
 * @typedef StatsProcessed
 * @property {StatsProcessedEmail} [email]
 * @property {StatsProcessedSms} [sms]
 */

/**
 * @typedef Stats
 * @property {string} [_id]
 * @property {Object} [imported]
 * @property {Object} [processed]
 */

/**
 * @typedef GetStats
 * @property {Stats[]} [items]
 */

/**
 * @typedef CampaignReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */

/**
 * @typedef RecipientHeaders
 * @property {string} [email]
 */

/**
 * @typedef CampaignEmailTemplate
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef CampignEmailProvider
 * @property {string} [_id]
 * @property {string} [from_name]
 * @property {string} [from_email]
 */

/**
 * @typedef CampaignEmail
 * @property {CampaignEmailTemplate} [template]
 * @property {CampignEmailProvider} [provider]
 */

/**
 * @typedef Campaign
 * @property {RecipientHeaders} [recipient_headers]
 * @property {CampaignEmail} [email]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [datasource]
 * @property {string} [type]
 * @property {string} [name]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef Campaigns
 * @property {Campaign[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BadRequestSchema
 * @property {string} [status]
 * @property {string} [message]
 */

/**
 * @typedef BigqueryHeadersReq
 * @property {string} [query]
 * @property {string} [type]
 */

/**
 * @typedef BigqueryHeadersResHeaders
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef BigqueryHeadersRes
 * @property {BigqueryHeadersResHeaders[]} [headers]
 */

/**
 * @typedef GetNRecordsCsvReq
 * @property {string} [url]
 * @property {boolean} [header]
 * @property {number} [count]
 */

/**
 * @typedef GetNRecordsCsvResItems
 * @property {string} [phone_number]
 * @property {string} [email]
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [orderid]
 */

/**
 * @typedef GetNRecordsCsvRes
 * @property {GetNRecordsCsvResItems[]} [items]
 */

/**
 * @typedef AudienceReq
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 */

/**
 * @typedef Audience
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [file_url]
 * @property {string} [type]
 * @property {number} [records_count]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef Audiences
 * @property {Audience[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EmailProviderReqFrom
 * @property {string} [name]
 * @property {string} [email]
 * @property {boolean} [is_default]
 */

/**
 * @typedef EmailProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 */

/**
 * @typedef EmailProvider
 * @property {string} [type]
 * @property {string} [provider]
 * @property {EmailProviderReqFrom[]} [from_address]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [api_key]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef EmailProviders
 * @property {EmailProvider[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EmailTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef EmailTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef EmailTemplateKeys
 * @property {string} [to]
 * @property {string} [cc]
 * @property {string} [bcc]
 */

/**
 * @typedef EmailTemplateHeaders
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef EmailTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {EmailTemplateKeys} [keys]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */

/**
 * @typedef TemplateAndType
 * @property {string} [template_type]
 * @property {string} [template]
 */

/**
 * @typedef EmailTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string[]} [static_to]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {EmailTemplateKeys} [keys]
 * @property {string} [reply_to]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef EmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef SystemEmailTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [static_to]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {string} [from_name]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [html]
 * @property {TemplateAndType} [text]
 * @property {Object[]} [headers]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef EmailTemplates
 * @property {EmailTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SystemEmailTemplates
 * @property {SystemEmailTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PayloadEmailTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PayloadEmailProviderStructure
 * @property {string} [_id]
 */

/**
 * @typedef PayloadEmailStructure
 * @property {PayloadEmailTemplateStructure} [template]
 * @property {PayloadEmailProviderStructure} [provider]
 */

/**
 * @typedef PayloadSmsTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef PayloadSmsProviderStructure
 * @property {string} [_id]
 */

/**
 * @typedef PayloadSmsStructure
 * @property {PayloadSmsTemplateStructure} [template]
 * @property {PayloadSmsProviderStructure} [provider]
 */

/**
 * @typedef PayloadStructure
 * @property {Object[]} [data]
 * @property {PayloadEmailStructure} [email]
 * @property {PayloadSmsStructure} [sms]
 * @property {string} [application]
 */

/**
 * @typedef MetaStructure
 * @property {string} [job_type]
 * @property {string} [action]
 * @property {string} [trace]
 * @property {string} [timestamp]
 */

/**
 * @typedef EngineRequest
 * @property {PayloadStructure} [payload]
 * @property {MetaStructure} [meta]
 */

/**
 * @typedef EngineResponse
 * @property {boolean} [success]
 */

/**
 * @typedef EventSubscriptionTemplateSms
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */

/**
 * @typedef EventSubscriptionTemplateEmail
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */

/**
 * @typedef EventSubscriptionTemplate
 * @property {EventSubscriptionTemplateSms} [sms]
 * @property {EventSubscriptionTemplateEmail} [email]
 */

/**
 * @typedef EventSubscription
 * @property {EventSubscriptionTemplate} [template]
 * @property {boolean} [is_default]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [event]
 * @property {string} [slug]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef EventSubscriptions
 * @property {EventSubscription[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TriggerJobResponse
 * @property {number} [status]
 */

/**
 * @typedef TriggerJobRequest
 * @property {string} [job_id]
 */

/**
 * @typedef Job
 * @property {boolean} [completed]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [campaign]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef Jobs
 * @property {Job[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef JobLog
 * @property {Object} [imported]
 * @property {Object} [processed]
 * @property {string} [_id]
 * @property {string} [job]
 * @property {string} [campaign]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef JobLogs
 * @property {JobLog[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LogEmail
 * @property {string} [template]
 */

/**
 * @typedef LogPushnotification
 * @property {string[]} [pushtokens]
 */

/**
 * @typedef LogMeta
 * @property {string} [type]
 * @property {string} [identifier]
 * @property {string} [key]
 * @property {string} [offset]
 * @property {string} [partition]
 * @property {string} [topic]
 */

/**
 * @typedef Log
 * @property {LogEmail} [email]
 * @property {LogPushnotification} [pushnotification]
 * @property {LogMeta} [meta]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [service]
 * @property {string} [step]
 * @property {string} [status]
 * @property {Object} [data]
 * @property {string} [expire_at]
 * @property {string} [created_at]
 */

/**
 * @typedef Logs
 * @property {Log[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SendOtpSmsCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef SendOtpSmsCommsProvider
 * @property {string} [slug]
 * @property {string} [_id]
 */

/**
 * @typedef SendOtpEmailCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */

/**
 * @typedef SendOtpCommsReqData
 * @property {boolean} [send_same_otp_to_channel]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [to]
 */

/**
 * @typedef SendOtpCommsReqSms
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpSmsCommsTemplate} [template]
 * @property {SendOtpSmsCommsProvider} [provider]
 */

/**
 * @typedef SendOtpCommsReqEmail
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpEmailCommsTemplate} [template]
 */

/**
 * @typedef SendOtpCommsResSms
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {number} [resend_timer]
 */

/**
 * @typedef SendOtpCommsResEmail
 * @property {boolean} [success]
 * @property {string} [request_id]
 * @property {string} [message]
 * @property {string} [to]
 * @property {number} [resend_timer]
 */

/**
 * @typedef SendOtpCommsReq
 * @property {SendOtpCommsReqData} [data]
 * @property {SendOtpCommsReqSms} [sms]
 * @property {SendOtpCommsReqEmail} [email]
 */

/**
 * @typedef SendOtpCommsRes
 * @property {SendOtpCommsResSms} [sms]
 * @property {SendOtpCommsResEmail} [email]
 */

/**
 * @typedef VerifyOtpCommsReq
 * @property {string} [request_id]
 * @property {string} [otp]
 */

/**
 * @typedef VerifyOtpCommsSuccessRes
 * @property {boolean} [success]
 * @property {string} [mobile]
 * @property {string} [country_code]
 * @property {string} [message]
 */

/**
 * @typedef VerifyOtpCommsErrorRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef PushtokenReq
 * @property {string} [action]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 */

/**
 * @typedef PushtokenRes
 * @property {string} [_id]
 * @property {string} [bundle_identifier]
 * @property {string} [push_token]
 * @property {string} [unique_device_id]
 * @property {string} [type]
 * @property {string} [platform]
 * @property {string} [application_id]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [expired_at]
 */

/**
 * @typedef SmsProviderReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [type]
 * @property {string} [provider]
 */

/**
 * @typedef SmsProvider
 * @property {number} [rpt]
 * @property {string} [type]
 * @property {string} [provider]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [sender]
 * @property {string} [username]
 * @property {string} [authkey]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef SmsProviders
 * @property {SmsProvider[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SmsTemplateDeleteSuccessRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SmsTemplateDeleteFailureRes
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SmsTemplateMessage
 * @property {string} [template_type]
 * @property {string} [template]
 */

/**
 * @typedef SmsTemplateReq
 * @property {string} [name]
 * @property {string} [description]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {Object[]} [attachments]
 * @property {string} [priority]
 */

/**
 * @typedef SmsTemplateRes
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [slug]
 * @property {number} [__v]
 */

/**
 * @typedef SmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {string} [priority]
 * @property {Object[]} [tags]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef SystemSmsTemplate
 * @property {boolean} [is_system]
 * @property {boolean} [is_internal]
 * @property {string} [description]
 * @property {Object[]} [tags]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [_id]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SmsTemplateMessage} [message]
 * @property {Object} [template_variables]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef SmsTemplates
 * @property {SmsTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SystemSmsTemplates
 * @property {SystemSmsTemplate[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Notification
 * @property {string} [title]
 * @property {string} [body]
 * @property {string} [subtitle]
 * @property {string} [icon]
 * @property {string} [deeplink]
 * @property {string} [click_action]
 */

/**
 * @typedef SystemNotificationUser
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef SystemNotificationSettings
 * @property {boolean} [sound]
 * @property {string} [priority]
 * @property {string} [time_to_live]
 */

/**
 * @typedef SystemNotification
 * @property {Notification} [notification]
 * @property {SystemNotificationUser} [user]
 * @property {SystemNotificationUser} [settings]
 * @property {string} [_id]
 * @property {string} [group]
 * @property {string} [created_at]
 */

/**
 * @typedef SystemNotificationsPage
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 */

/**
 * @typedef SystemNotifications
 * @property {SystemNotification[]} [items]
 * @property {number} [last_read_anchor]
 * @property {Page} [page]
 */

/**
 * @typedef PaymentGatewayConfigResponse
 * @property {string[]} display_fields
 * @property {boolean} created
 * @property {string[]} excluded_fields
 * @property {Object[]} [aggregators]
 * @property {string} app_id
 * @property {boolean} success
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} code
 * @property {string} description
 * @property {boolean} success
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} merchant_salt
 * @property {string} key
 * @property {boolean} [is_active]
 * @property {string} secret
 * @property {string} config_type
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {boolean} [is_active]
 * @property {string} app_id
 * @property {PaymentGatewayConfig} [aggregator_name]
 */

/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {string[]} aggregator
 * @property {boolean} success
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} code
 * @property {string} description
 */

/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} error
 * @property {boolean} success
 */

/**
 * @typedef PaymentModeLogo
 * @property {string} large
 * @property {string} small
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
 */

/**
 * @typedef IntentApp
 * @property {PaymentModeLogo} [logos]
 * @property {string} [code]
 * @property {string} [package_name]
 * @property {string} [display_name]
 */

/**
 * @typedef PaymentModeList
 * @property {string} [merchant_code]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_isin]
 * @property {number} [exp_year]
 * @property {string} [card_type]
 * @property {string} [card_issuer]
 * @property {string} [card_fingerprint]
 * @property {number} [retry_count]
 * @property {string} aggregator_name
 * @property {string} [nickname]
 * @property {string} [fynd_vpa]
 * @property {string} [card_name]
 * @property {string} [card_id]
 * @property {string[]} [intent_app_error_list]
 * @property {boolean} [intent_flow]
 * @property {string} [name]
 * @property {number} [timeout]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {number} [cod_limit_per_order]
 * @property {number} [exp_month]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {number} [cod_limit]
 * @property {string} [card_number]
 * @property {string} [card_brand]
 * @property {string} [display_name]
 * @property {boolean} [expired]
 * @property {string} [card_reference]
 * @property {string} [code]
 * @property {number} [remaining_limit]
 * @property {string} [card_token]
 * @property {string} [card_brand_image]
 * @property {number} [display_priority]
 * @property {IntentApp[]} [intent_app]
 */

/**
 * @typedef RootPaymentMode
 * @property {boolean} [anonymous_enable]
 * @property {string} name
 * @property {string} display_name
 * @property {boolean} [save_card]
 * @property {number} display_priority
 * @property {PaymentModeList[]} [list]
 * @property {boolean} [is_pay_by_card_pl]
 * @property {string} [aggregator_name]
 * @property {boolean} [add_card_enabled]
 */

/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option
 */

/**
 * @typedef PaymentOptionsResponse
 * @property {PaymentOptions} payment_options
 * @property {boolean} success
 */

/**
 * @typedef Payout
 * @property {Object[]} payouts_aggregators
 * @property {boolean} is_active
 * @property {string} transfer_type
 * @property {Object} unique_transfer_no
 * @property {Object} customers
 * @property {boolean} is_default
 * @property {Object} more_attributes
 */

/**
 * @typedef PayoutsResponse
 * @property {boolean} success
 * @property {Payout[]} items
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} ifsc_code
 * @property {string} [country]
 * @property {string} [city]
 * @property {string} [bank_name]
 * @property {string} account_type
 * @property {string} [state]
 * @property {string} [account_holder]
 * @property {string} [account_no]
 * @property {number} [pincode]
 * @property {string} [branch_name]
 */

/**
 * @typedef PayoutRequest
 * @property {string} aggregator
 * @property {string} unique_external_id
 * @property {boolean} is_active
 * @property {Object} users
 * @property {string} transfer_type
 * @property {PayoutBankDetails} bank_details
 */

/**
 * @typedef PayoutResponse
 * @property {string} aggregator
 * @property {string} payment_status
 * @property {boolean} created
 * @property {Object} payouts
 * @property {boolean} is_active
 * @property {Object} users
 * @property {string} transfer_type
 * @property {string} unique_transfer_no
 * @property {Object} bank_details
 * @property {boolean} success
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {boolean} success
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_active
 * @property {string} unique_external_id
 * @property {boolean} is_default
 */

/**
 * @typedef DeletePayoutResponse
 * @property {boolean} success
 */

/**
 * @typedef SubscriptionPaymentMethodResponse
 * @property {Object[]} data
 * @property {boolean} success
 */

/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success
 */

/**
 * @typedef SubscriptionConfigResponse
 * @property {string} aggregator
 * @property {Object} config
 * @property {boolean} success
 */

/**
 * @typedef SaveSubscriptionSetupIntentRequest
 * @property {string} unique_external_id
 */

/**
 * @typedef SaveSubscriptionSetupIntentResponse
 * @property {Object} data
 * @property {boolean} success
 */

/**
 * @typedef RefundAccountResponse
 * @property {boolean} [is_verified_flag]
 * @property {string} message
 * @property {Object} [data]
 * @property {boolean} success
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} code
 * @property {string} description
 * @property {boolean} success
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} ifsc_code
 * @property {string} bank_name
 * @property {string} account_holder
 * @property {string} account_no
 * @property {string} branch_name
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {BankDetailsForOTP} details
 * @property {string} order_id
 */

/**
 * @typedef IfscCodeResponse
 * @property {string} bank_name
 * @property {string} branch_name
 * @property {boolean} [success]
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} address
 * @property {string} [mobile]
 * @property {string} subtitle
 * @property {string} beneficiary_id
 * @property {string} [branch_name]
 * @property {string} [comment]
 * @property {string} modified_on
 * @property {string} title
 * @property {string} ifsc_code
 * @property {string} bank_name
 * @property {string} display_name
 * @property {number} id
 * @property {string} created_on
 * @property {string} [delights_user_name]
 * @property {string} transfer_mode
 * @property {string} account_holder
 * @property {string} account_no
 * @property {boolean} is_active
 * @property {string} email
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 * @property {boolean} [show_beneficiary_details]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [current_status]
 * @property {string} [order_id]
 * @property {string} [payment_gateway]
 * @property {Object} [extra_meta]
 * @property {string} [payment_id]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {number} amount
 * @property {string} mode
 * @property {string} [name]
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {string} order_id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {string} order_id
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef PlatformPaymentOptions
 * @property {boolean} enabled
 * @property {Object} [payment_selection_lock]
 * @property {string} mode_of_payment
 * @property {number} [cod_charges]
 * @property {boolean} [anonymous_cod]
 * @property {Object} [callback_url]
 * @property {string} source
 * @property {number} [cod_amount_limit]
 * @property {Object} methods
 */

/**
 * @typedef PlatfromPaymentConfig
 * @property {string} message
 * @property {PlatformPaymentOptions} data
 * @property {boolean} success
 */

/**
 * @typedef UpdatePlatformPaymentConfig
 * @property {Object} [payment_selection_lock]
 * @property {number} [cod_charges]
 * @property {boolean} [anonymous_cod]
 * @property {number} [cod_amount_limit]
 * @property {Object} methods
 */

/**
 * @typedef CODdata
 * @property {number} remaining_limit
 * @property {number} limit
 * @property {string} user_id
 * @property {number} usages
 * @property {boolean} is_active
 */

/**
 * @typedef GetUserCODLimitResponse
 * @property {CODdata} user_cod_data
 * @property {boolean} success
 */

/**
 * @typedef SetCODForUserRequest
 * @property {boolean} is_active
 * @property {string} mobileno
 * @property {string} merchant_user_id
 */

/**
 * @typedef SetCODOptionResponse
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef EdcModelData
 * @property {string} aggregator
 * @property {number} aggregator_id
 * @property {string[]} models
 */

/**
 * @typedef EdcAggregatorAndModelListResponse
 * @property {EdcModelData[]} data
 * @property {boolean} success
 */

/**
 * @typedef StatisticsData
 * @property {number} inactive_device_count
 * @property {number} active_device_count
 */

/**
 * @typedef EdcDeviceStatsResponse
 * @property {StatisticsData} statistics
 * @property {boolean} success
 */

/**
 * @typedef EdcAddRequest
 * @property {string} terminal_serial_no
 * @property {string} edc_model
 * @property {string} edc_device_serial_no
 * @property {number} aggregator_id
 * @property {string} [device_tag]
 * @property {number} store_id
 */

/**
 * @typedef EdcDevice
 * @property {string} terminal_serial_no
 * @property {string} application_id
 * @property {string} [edc_model]
 * @property {string} edc_device_serial_no
 * @property {string} [merchant_store_pos_code]
 * @property {boolean} is_active
 * @property {string} terminal_unique_identifier
 * @property {number} aggregator_id
 * @property {string} device_tag
 * @property {number} store_id
 * @property {string} [aggregator_name]
 */

/**
 * @typedef EdcDeviceAddResponse
 * @property {EdcDevice} data
 * @property {boolean} success
 */

/**
 * @typedef EdcDeviceDetailsResponse
 * @property {EdcDevice} data
 * @property {boolean} success
 */

/**
 * @typedef EdcUpdateRequest
 * @property {string} [edc_model]
 * @property {string} [edc_device_serial_no]
 * @property {string} [merchant_store_pos_code]
 * @property {string} [is_active]
 * @property {number} [aggregator_id]
 * @property {string} [device_tag]
 * @property {number} [store_id]
 */

/**
 * @typedef EdcDeviceUpdateResponse
 * @property {boolean} success
 */

/**
 * @typedef EdcDeviceListResponse
 * @property {EdcDevice[]} items
 * @property {Page} page
 * @property {boolean} success
 */

/**
 * @typedef PaymentInitializationRequest
 * @property {string} aggregator
 * @property {string} merchant_order_id
 * @property {string} [razorpay_payment_id]
 * @property {number} amount
 * @property {string} method
 * @property {string} order_id
 * @property {number} [timeout]
 * @property {string} customer_id
 * @property {string} contact
 * @property {string} [vpa]
 * @property {string} email
 * @property {string} currency
 * @property {string} [device_id]
 */

/**
 * @typedef PaymentInitializationResponse
 * @property {string} aggregator
 * @property {string} merchant_order_id
 * @property {number} [amount]
 * @property {string} method
 * @property {string} [razorpay_payment_id]
 * @property {string} [status]
 * @property {string} polling_url
 * @property {string} [customer_id]
 * @property {number} [timeout]
 * @property {string} [aggregator_order_id]
 * @property {string} [vpa]
 * @property {string} [virtual_id]
 * @property {string} [upi_poll_url]
 * @property {string} [bqr_image]
 * @property {string} [currency]
 * @property {string} [device_id]
 * @property {boolean} success
 */

/**
 * @typedef PaymentStatusUpdateRequest
 * @property {string} aggregator
 * @property {string} merchant_order_id
 * @property {number} amount
 * @property {string} method
 * @property {string} status
 * @property {string} order_id
 * @property {string} customer_id
 * @property {string} contact
 * @property {string} [vpa]
 * @property {string} email
 * @property {string} currency
 * @property {string} [device_id]
 */

/**
 * @typedef PaymentStatusUpdateResponse
 * @property {string} status
 * @property {string} [redirect_url]
 * @property {string} aggregator_name
 * @property {boolean} retry
 * @property {boolean} [success]
 */

/**
 * @typedef ResendOrCancelPaymentRequest
 * @property {string} [device_id]
 * @property {string} order_id
 * @property {string} request_type
 */

/**
 * @typedef LinkStatus
 * @property {string} message
 * @property {boolean} status
 */

/**
 * @typedef ResendOrCancelPaymentResponse
 * @property {LinkStatus} data
 * @property {boolean} success
 */

/**
 * @typedef FilterInfoOption
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} text
 */

/**
 * @typedef FiltersInfo
 * @property {FilterInfoOption[]} [options]
 * @property {string} value
 * @property {string} type
 * @property {string} text
 */

/**
 * @typedef Prices
 * @property {number} [refund_credit]
 * @property {number} [cashback_applied]
 * @property {number} [fynd_credits]
 * @property {number} [value_of_good]
 * @property {number} [refund_amount]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [discount]
 * @property {number} [delivery_charge]
 * @property {number} [tax_collected_at_source]
 * @property {number} [cod_charges]
 * @property {number} [price_effective]
 * @property {number} [amount_paid]
 * @property {number} [price_marked]
 * @property {number} [promotion_effective_discount]
 * @property {number} [cashback]
 * @property {number} [coupon_value]
 */

/**
 * @typedef PlatformItem
 * @property {string} [code]
 * @property {string} [size]
 * @property {string[]} [image]
 * @property {string[]} [images]
 * @property {boolean} [can_cancel]
 * @property {number} [l3_category]
 * @property {number} [department_id]
 * @property {boolean} [can_return]
 * @property {string} [color]
 * @property {string} [name]
 * @property {string} [l3_category_name]
 * @property {string[]} [l1_category]
 * @property {number} [id]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} gst_fee
 * @property {number} value_of_good
 * @property {string} gstin_code
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 */

/**
 * @typedef BagUnit
 * @property {number} total_shipment_bags
 * @property {string} shipment_id
 * @property {Object} status
 * @property {number} bag_id
 * @property {string} ordering_channel
 * @property {Prices} [prices]
 * @property {PlatformItem} [item]
 * @property {boolean} [can_cancel]
 * @property {GSTDetailsData} [gst]
 * @property {boolean} [can_return]
 * @property {number} item_quantity
 */

/**
 * @typedef ShipmentStatus
 * @property {string} status
 * @property {string} ops_status
 * @property {string} hex_code
 * @property {string} title
 * @property {string} actual_status
 */

/**
 * @typedef UserDataInfo
 * @property {string} [email]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [avis_user_id]
 * @property {string} [gender]
 * @property {string} [first_name]
 * @property {string} [mobile]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [last_name]
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} type
 * @property {string} logo
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} code
 * @property {string} id
 */

/**
 * @typedef ShipmentItem
 * @property {Object} [company]
 * @property {number} total_bags_count
 * @property {string} created_at
 * @property {Prices} [prices]
 * @property {BagUnit[]} [bags]
 * @property {number} total_shipments_in_order
 * @property {ShipmentStatus} [shipment_status]
 * @property {Object} [sla]
 * @property {UserDataInfo} [user]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {string} fulfilling_centre
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {number} shipment_created_at
 * @property {Object} [payment_methods]
 * @property {string} id
 * @property {Object} [channel]
 * @property {Object} [application]
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [page]
 * @property {Object} [applied_filters]
 * @property {ShipmentItem[]} [items]
 */

/**
 * @typedef Error
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef BagStateMapper
 * @property {boolean} [app_facing]
 * @property {string} display_name
 * @property {string} state_type
 * @property {boolean} [is_active]
 * @property {string} [app_state_name]
 * @property {string} [app_display_name]
 * @property {string} journey_type
 * @property {number} bs_id
 * @property {string} name
 * @property {boolean} [notify_customer]
 */

/**
 * @typedef BagStatusHistory
 * @property {number} [bsh_id]
 * @property {number} [state_id]
 * @property {string} [state_type]
 * @property {string} [shipment_id]
 * @property {string} status
 * @property {number} [bag_id]
 * @property {Object[]} [reasons]
 * @property {string} [display_name]
 * @property {number} [store_id]
 * @property {boolean} [forward]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [delivery_awb_number]
 * @property {string} [updated_at]
 * @property {string} [app_display_name]
 * @property {string} [created_at]
 * @property {number} [delivery_partner_id]
 * @property {boolean} [kafka_sync]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [ordering_channel]
 * @property {string} fynd_order_id
 * @property {Object} [ordering_channel_logo]
 * @property {Object} [tax_details]
 * @property {string} [cod_charges]
 * @property {string} [order_date]
 * @property {string} [source]
 * @property {string} [order_value]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef UserDetailsData
 * @property {string} [email]
 * @property {string} phone
 * @property {string} state
 * @property {string} country
 * @property {string} pincode
 * @property {string} city
 * @property {string} name
 * @property {string} address
 */

/**
 * @typedef DPDetailsData
 * @property {string} [gst_tag]
 * @property {string} [country]
 * @property {string} [eway_bill_id]
 * @property {string} [track_url]
 * @property {string} [name]
 * @property {string} [pincode]
 * @property {number} [id]
 * @property {string} [awb_no]
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {string[]} [bag_list]
 * @property {string} [created_at]
 * @property {number} [id]
 */

/**
 * @typedef BagGST
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [gst_fee]
 * @property {number} [value_of_good]
 * @property {string} [gst_tag]
 * @property {string} [gstin_code]
 * @property {string} [hsn_code]
 * @property {number} [gst_tax_percentage]
 * @property {number} [brand_calculated_amount]
 */

/**
 * @typedef OrderBrandName
 * @property {string} [company]
 * @property {string} brand_name
 * @property {string} created_on
 * @property {string} logo
 * @property {string} [modified_on]
 * @property {number} id
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [address2]
 * @property {string} [email]
 * @property {string} [address_category]
 * @property {string} [phone]
 * @property {string} [contact_person]
 * @property {string} [version]
 * @property {string} [state]
 * @property {string} [landmark]
 * @property {string} [country]
 * @property {number} [latitude]
 * @property {string} [area]
 * @property {string} [pincode]
 * @property {string} [updated_at]
 * @property {string} [address1]
 * @property {string} [address_type]
 * @property {string} [created_at]
 * @property {string} [city]
 * @property {number} [longitude]
 */

/**
 * @typedef BagConfigs
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} allow_force_return
 * @property {boolean} is_returnable
 * @property {boolean} enable_tracking
 */

/**
 * @typedef ItemCriterias
 * @property {number[]} [item_brand]
 */

/**
 * @typedef BuyRules
 * @property {ItemCriterias} [item_criteria]
 * @property {Object} [cart_conditions]
 */

/**
 * @typedef DiscountRules
 * @property {number} [value]
 * @property {string} [type]
 */

/**
 * @typedef AppliedPromos
 * @property {BuyRules[]} [buy_rules]
 * @property {boolean} [mrp_promotion]
 * @property {number} [article_quantity]
 * @property {string} [promo_id]
 * @property {string} [promotion_type]
 * @property {string} [promotion_name]
 * @property {number} [amount]
 * @property {DiscountRules[]} [discount_rules]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {string} gst_tag
 * @property {number} total_units
 * @property {number} price_effective
 * @property {number} price_marked
 * @property {number} fynd_credits
 * @property {number} [amount_paid_roundoff]
 * @property {number} [tax_collected_at_source]
 * @property {boolean} added_to_fynd_cash
 * @property {number} coupon_effective_discount
 * @property {number} gst_tax_percentage
 * @property {number} amount_paid
 * @property {number} promotion_effective_discount
 * @property {Identifier} identifiers
 * @property {number} coupon_value
 * @property {number} gst_fee
 * @property {string} size
 * @property {number} cashback_applied
 * @property {number} delivery_charge
 * @property {string} hsn_code
 * @property {number} brand_calculated_amount
 * @property {number} refund_credit
 * @property {number} value_of_good
 * @property {number} discount
 * @property {string} item_name
 * @property {number} cod_charges
 * @property {number} transfer_price
 * @property {number} cashback
 */

/**
 * @typedef OrderBagArticle
 * @property {string} [uid]
 * @property {Object} [identifiers]
 * @property {Object} [return_config]
 */

/**
 * @typedef CurrentStatus
 * @property {number} [state_id]
 * @property {string} [state_type]
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {number} [bag_id]
 * @property {number} [store_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [delivery_awb_number]
 * @property {number} [updated_at]
 * @property {number} current_status_id
 * @property {string} [created_at]
 * @property {number} [delivery_partner_id]
 * @property {boolean} [kafka_sync]
 */

/**
 * @typedef OrderBags
 * @property {string} [identifier]
 * @property {string} [display_name]
 * @property {boolean} [can_return]
 * @property {BagGST} [gst_details]
 * @property {number} bag_id
 * @property {string} [seller_identifier]
 * @property {PlatformItem} [item]
 * @property {OrderBrandName} [brand]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {BagConfigs} [bag_configs]
 * @property {number} [line_number]
 * @property {Prices} [prices]
 * @property {Object} [parent_promo_bags]
 * @property {boolean} [can_cancel]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {OrderBagArticle} [article]
 * @property {number} [quantity]
 * @property {string} [entity_type]
 * @property {CurrentStatus} [current_status]
 */

/**
 * @typedef FulfillingStore
 * @property {string} code
 * @property {string} phone
 * @property {string} fulfillment_channel
 * @property {string} contact_person
 * @property {string} state
 * @property {string} country
 * @property {string} store_name
 * @property {string} pincode
 * @property {string} city
 * @property {string} address
 * @property {Object} meta
 * @property {number} id
 */

/**
 * @typedef TrackingList
 * @property {string} status
 * @property {string} text
 * @property {boolean} [is_current]
 * @property {string} [time]
 * @property {boolean} [is_passed]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [source]
 * @property {string} [mode]
 * @property {string} [logo]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {string} [priority_text]
 * @property {Object} company
 * @property {boolean} is_not_fynd_source
 * @property {string} [is_pdsr]
 * @property {string} can_break
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {OrderDetailsData} [order]
 * @property {Object} [escalation]
 * @property {boolean} [enable_dp_tracking]
 * @property {boolean} [can_return]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [user_agent]
 * @property {string} [mid]
 * @property {Object} invoice
 * @property {string} [vertical]
 * @property {Object} order_status
 * @property {UserDetailsData} [billing_details]
 * @property {Object} [coupon]
 * @property {string} order_type
 * @property {DPDetailsData} [dp_details]
 * @property {boolean} [enable_tracking]
 * @property {ShipmentStatusData} [status]
 * @property {string} affiliate_shipment_id
 * @property {Object} [refund_details]
 * @property {string} tracking_url
 * @property {OrderBags[]} [bags]
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [is_fynd_store]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {number} [total_bags]
 * @property {number} [shipment_quantity]
 * @property {boolean} is_packaging_order
 * @property {Object[]} items
 * @property {string} [secured_delivery_flag]
 * @property {string} [refund_text]
 * @property {string} shipment_id
 * @property {Object} fyndstore_emp
 * @property {Prices} [prices]
 * @property {boolean} [go_green]
 * @property {Object} ordering_store
 * @property {string} user_id
 * @property {string} credit_note_id
 * @property {Object[]} delivery_status
 * @property {string} lock_status
 * @property {boolean} [can_cancel]
 * @property {string} [pay_button]
 * @property {Object} [bank_data]
 * @property {string} [operational_status]
 * @property {TrackingList[]} [tracking_list]
 * @property {boolean} is_fynd_coupon
 * @property {Object} [user_info]
 * @property {string[]} [shipment_images]
 * @property {Object[]} [custom_meta]
 * @property {number} [total_items]
 * @property {number} status_progress
 * @property {string} [picked_date]
 * @property {string} [replacement_details]
 * @property {boolean} platform_logo
 * @property {Object[]} [forward_shipment_status]
 * @property {Object[]} [forward_tracking_list]
 * @property {boolean} [beneficiary_details]
 * @property {string} [packaging_type]
 * @property {string} [payment_mode]
 * @property {string} [order_created_time]
 * @property {string[]} [child_nodes]
 * @property {string} [due_date]
 * @property {string} [shipment_status]
 * @property {ShipmentPayments} [payments]
 * @property {Object} current_shipment_status
 * @property {boolean} is_invoiced
 * @property {string} [kirana_store_id]
 * @property {Object[]} [forward_order_status]
 * @property {string} [journey_type]
 * @property {string} email_id
 * @property {Object} [delivery_slot]
 */

/**
 * @typedef OrderingStore
 * @property {string} code
 * @property {string} phone
 * @property {string} contact_person
 * @property {string} state
 * @property {string} country
 * @property {string} store_name
 * @property {string} pincode
 * @property {string} city
 * @property {string} address
 * @property {Object} meta
 * @property {string} id
 */

/**
 * @typedef PlatformShipment
 * @property {string} [priority_text]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {OrderDetailsData} [order]
 * @property {boolean} [enable_dp_tracking]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [user_agent]
 * @property {string} [vertical]
 * @property {UserDetailsData} [billing_details]
 * @property {Object} [coupon]
 * @property {DPDetailsData} [dp_details]
 * @property {ShipmentStatusData} [status]
 * @property {OrderBags[]} [bags]
 * @property {UserDetailsData} [delivery_details]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {number} [total_bags]
 * @property {number} [shipment_quantity]
 * @property {string} shipment_id
 * @property {Prices} [prices]
 * @property {OrderingStore} [ordering_store]
 * @property {string} [operational_status]
 * @property {TrackingList[]} [tracking_list]
 * @property {string[]} [shipment_images]
 * @property {Object[]} [custom_meta]
 * @property {number} [total_items]
 * @property {string} [picked_date]
 * @property {string} [platform_logo]
 * @property {string} [packaging_type]
 * @property {string} [payment_mode]
 * @property {string} [shipment_status]
 * @property {ShipmentPayments} [payments]
 * @property {string} [journey_type]
 * @property {Object} [delivery_slot]
 */

/**
 * @typedef OrderMeta
 * @property {number} [mongo_cart_id]
 * @property {string} [order_platform]
 * @property {string} [currency_symbol]
 * @property {string} [payment_type]
 * @property {string} [customer_note]
 * @property {number} [ordering_store]
 * @property {Object} [extra_meta]
 * @property {Object} [staff]
 * @property {number} [employee_id]
 * @property {Object[]} [order_tags]
 * @property {number} [cart_id]
 * @property {string[]} [order_child_entities]
 * @property {Object[]} [files]
 * @property {string} [comment]
 * @property {string} [order_type]
 */

/**
 * @typedef OrderDict
 * @property {string} fynd_order_id
 * @property {Prices} [prices]
 * @property {Object} [tax_details]
 * @property {string} order_date
 * @property {Object} [payment_methods]
 * @property {OrderMeta} [meta]
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {boolean} success
 * @property {PlatformShipment[]} [shipments]
 * @property {OrderDict} [order]
 */

/**
 * @typedef SubLane
 * @property {string} [text]
 * @property {number} [index]
 * @property {string} [value]
 * @property {Object[]} [actions]
 * @property {number} [total_items]
 */

/**
 * @typedef SuperLane
 * @property {SubLane[]} [options]
 * @property {string} value
 * @property {number} [total_items]
 * @property {string} text
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef PlatformOrderItems
 * @property {string} [order_created_time]
 * @property {string} [payment_mode]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {number} [order_value]
 * @property {UserDataInfo} [user_info]
 * @property {string} [order_id]
 * @property {PlatformShipment[]} [shipments]
 * @property {Object} [meta]
 * @property {number} [total_order_value]
 * @property {PlatformChannel} [channel]
 */

/**
 * @typedef OrderListingResponse
 * @property {Page} [page]
 * @property {string} [message]
 * @property {number} [total_count]
 * @property {boolean} [success]
 * @property {PlatformOrderItems[]} [items]
 * @property {string} [lane]
 */

/**
 * @typedef Options
 * @property {number} [value]
 * @property {string} [text]
 */

/**
 * @typedef MetricsCount
 * @property {Options[]} [options]
 * @property {string} key
 * @property {number} value
 * @property {string} text
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [updated_time]
 * @property {string} [reason]
 * @property {string} [raw_status]
 * @property {string} [status]
 * @property {string} [account_name]
 * @property {string} [last_location_recieved_at]
 * @property {string} [shipment_type]
 * @property {string} [updated_at]
 * @property {string} [awb]
 * @property {Object} [meta]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {PlatformTrack[]} [results]
 * @property {Object} [meta]
 */

/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [processed]
 * @property {FiltersInfo[]} [action_centre]
 * @property {FiltersInfo[]} [filters]
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [unfulfilled]
 */

/**
 * @typedef FiltersResponse
 * @property {AdvanceFilterInfo} [advance_filter]
 * @property {FiltersInfo[]} [global_filter]
 */

/**
 * @typedef Success
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef OmsReports
 * @property {string} [display_name]
 * @property {string} [report_requested_at]
 * @property {string} [status]
 * @property {string} [s3_key]
 * @property {string} [report_created_at]
 * @property {Object} [request_details]
 * @property {string} [report_id]
 * @property {string} [report_name]
 * @property {string} [report_type]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [item_id]
 * @property {string} [company_id]
 * @property {string} [article_id]
 * @property {string} [jio_code]
 */

/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */

/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {string} [identifier]
 * @property {string} [trace_id]
 * @property {Object[]} [data]
 * @property {boolean} [success]
 * @property {NestedErrorSchemaDataSet[]} [error]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {boolean} success
 * @property {string} [message]
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} [store_code]
 * @property {string} [store_id]
 * @property {Object} [data]
 * @property {string} [company_id]
 * @property {string} [store_name]
 * @property {Object} [label]
 * @property {string} batch_id
 * @property {boolean} do_invoice_label_generated
 * @property {Object} [invoice]
 * @property {string} [invoice_status]
 */

/**
 * @typedef FileUploadResponse
 * @property {number} [expiry]
 * @property {string} [url]
 */

/**
 * @typedef URL
 * @property {string} [url]
 */

/**
 * @typedef FileResponse
 * @property {number} [size]
 * @property {string} [namespace]
 * @property {string} [file_name]
 * @property {string} [file_path]
 * @property {string} [operation]
 * @property {FileUploadResponse} [upload]
 * @property {URL} [cdn]
 * @property {string} [method]
 * @property {string} [content_type]
 * @property {string[]} [tags]
 */

/**
 * @typedef bulkListingData
 * @property {number} [successful]
 * @property {Object[]} [failed_shipments]
 * @property {string} [file_name]
 * @property {string} [uploaded_on]
 * @property {string} [store_name]
 * @property {string} [excel_url]
 * @property {Object[]} [successful_shipments]
 * @property {string} [user_name]
 * @property {string} [id]
 * @property {string} [store_code]
 * @property {string} [status]
 * @property {number} [company_id]
 * @property {number} [processing]
 * @property {number} [total]
 * @property {number} [store_id]
 * @property {string} [user_id]
 * @property {number} [failed]
 * @property {string} [batch_id]
 * @property {string[]} [processing_shipments]
 */

/**
 * @typedef BulkListingPage
 * @property {number} [size]
 * @property {number} [total]
 * @property {string} [type]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [current]
 */

/**
 * @typedef BulkListingResponse
 * @property {boolean} [success]
 * @property {bulkListingData[]} [data]
 * @property {BulkListingPage} [page]
 * @property {string} [error]
 */

/**
 * @typedef QuestionSet
 * @property {string} [display_name]
 * @property {number} [id]
 */

/**
 * @typedef Reason
 * @property {QuestionSet[]} [question_set]
 * @property {string[]} [qc_type]
 * @property {string} [display_name]
 * @property {number} [id]
 */

/**
 * @typedef PlatformShipmentReasonsResponse
 * @property {boolean} [success]
 * @property {Reason[]} [reasons]
 */

/**
 * @typedef BulkActionPayload
 * @property {string} url
 */

/**
 * @typedef BulkActionResponse
 * @property {string} [message]
 * @property {boolean} [status]
 */

/**
 * @typedef BulkActionDetailsDataField
 * @property {number} [successful_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {string} [company_id]
 * @property {string} [batch_id]
 * @property {number} [processing_shipments_count]
 * @property {number} [failed_shipments_count]
 * @property {number} [total_shipments_count]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {boolean} [status]
 * @property {string} [uploaded_on]
 * @property {string} [user_id]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string[]} [failed_records]
 * @property {string} [message]
 * @property {string} [success]
 * @property {string} [uploaded_by]
 * @property {string[]} [error]
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef PDFLinks
 * @property {string} label_type
 * @property {string} [label_a6]
 * @property {string} [b2b]
 * @property {string} [invoice_a4]
 * @property {string} [label]
 * @property {string} [po_invoice]
 * @property {string} invoice_type
 * @property {string} [credit_note_url]
 * @property {string} [label_pos]
 * @property {string} [invoice_pos]
 * @property {string} [label_a4]
 * @property {string} [invoice]
 * @property {string} [invoice_a6]
 */

/**
 * @typedef AffiliateMeta
 * @property {string} [coupon_code]
 * @property {number} [loyalty_discount]
 * @property {number} [employee_discount]
 * @property {string} [due_date]
 * @property {string} [channel_order_id]
 * @property {string} [box_type]
 * @property {string} [order_item_id]
 * @property {boolean} [is_priority]
 * @property {number} [quantity]
 * @property {number} [size_level_total_qty]
 * @property {string} [channel_shipment_id]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_max]
 * @property {string} [t_min]
 */

/**
 * @typedef Formatted
 * @property {string} [f_min]
 * @property {string} [f_max]
 */

/**
 * @typedef EInvoice
 * @property {string} [acknowledge_date]
 * @property {string} [signed_invoice]
 * @property {string} [error_code]
 * @property {string} [error_message]
 * @property {string} [signed_qr_code]
 * @property {string} [irn]
 * @property {number} [acknowledge_no]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [credit_note]
 * @property {EInvoice} [invoice]
 */

/**
 * @typedef LockData
 * @property {string} [lock_message]
 * @property {boolean} [mto]
 * @property {boolean} [locked]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef BuyerDetails
 * @property {string} gstin
 * @property {string} state
 * @property {number} pincode
 * @property {string} address
 * @property {string} [ajio_site_id]
 * @property {string} name
 * @property {string} city
 */

/**
 * @typedef ShipmentMeta
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [packaging_name]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [box_type]
 * @property {Object} [ewaybill_info]
 * @property {string} [store_invoice_updated_date]
 * @property {Formatted} [formatted]
 * @property {string} [awb_number]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [order_type]
 * @property {Object} [bag_weight]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [po_number]
 * @property {boolean} same_store_available
 * @property {string} [marketplace_store_id]
 * @property {LockData} [lock_data]
 * @property {string} [return_awb_number]
 * @property {Object} [return_details]
 * @property {number} [return_store_node]
 * @property {Object} [external]
 * @property {DebugInfo} [debug_info]
 * @property {string} [dp_id]
 * @property {number} weight
 * @property {string} [dp_name]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [dp_sort_key]
 * @property {Object} [b2c_buyer_details]
 * @property {string} [due_date]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {Object} [dp_options]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {number} [shipment_weight]
 * @property {string} [return_affiliate_order_id]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} affiliate_shipment_id
 * @property {string} [company_affiliate_tag]
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_store_id
 * @property {PDFLinks} [pdf_links]
 * @property {string} affiliate_order_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} [ad_id]
 * @property {ShipmentMeta} shipment_meta
 * @property {string} [affiliate_id]
 */

/**
 * @typedef BagGSTDetails
 * @property {boolean} [is_default_hsn_code]
 * @property {string} hsn_code_id
 * @property {number} gst_fee
 * @property {number} igst_tax_percentage
 * @property {number} value_of_good
 * @property {string} gst_tag
 * @property {string} [gstin_code]
 * @property {number} tax_collected_at_source
 * @property {number} sgst_tax_percentage
 * @property {string} cgst_gst_fee
 * @property {string} sgst_gst_fee
 * @property {string} igst_gst_fee
 * @property {string} hsn_code
 * @property {number} gst_tax_percentage
 * @property {number} cgst_tax_percentage
 * @property {number} brand_calculated_amount
 */

/**
 * @typedef Dates
 * @property {Object} [delivery_date]
 * @property {string} [order_created]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_returnable
 * @property {boolean} enable_tracking
 */

/**
 * @typedef Attributes
 * @property {string} [brand_name]
 * @property {string} [primary_color]
 * @property {string} [marketer_name]
 * @property {string[]} [gender]
 * @property {string} [primary_color_hex]
 * @property {string} [marketer_address]
 * @property {string} [name]
 * @property {string} [essential]
 * @property {string} [primary_material]
 */

/**
 * @typedef Item
 * @property {number} [l2_category_id]
 * @property {string[]} [l2_category]
 * @property {string} [branch_url]
 * @property {boolean} [can_return]
 * @property {string} [code]
 * @property {string} brand
 * @property {string} [last_updated_at]
 * @property {number} [department_id]
 * @property {Object} [meta]
 * @property {string[]} [l1_category]
 * @property {string} size
 * @property {string[]} image
 * @property {Attributes} attributes
 * @property {string} slug_key
 * @property {boolean} [can_cancel]
 * @property {string} [color]
 * @property {string} [gender]
 * @property {string} name
 * @property {number} [l3_category]
 * @property {string} [l3_category_name]
 * @property {number} item_id
 * @property {number} brand_id
 * @property {number} [l1_category_id]
 * @property {string} [webstore_product_url]
 */

/**
 * @typedef Brand
 * @property {string} company
 * @property {string} brand_name
 * @property {string} [pickup_location]
 * @property {number} [created_on]
 * @property {boolean} [credit_note_allowed]
 * @property {number} [credit_note_expiry_days]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} [start_date]
 * @property {string} [script_last_ran]
 * @property {string} [logo]
 * @property {number} brand_id
 * @property {number} [modified_on]
 * @property {string} [invoice_prefix]
 */

/**
 * @typedef B2BPODetails
 * @property {string} [docker_number]
 * @property {boolean} [partial_can_ret]
 * @property {number} [po_line_amount]
 * @property {number} [item_base_price]
 * @property {number} [po_tax_amount]
 * @property {number} [total_gst_percentage]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [user]
 * @property {string} [username]
 * @property {string} [password]
 */

/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [user]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} enabled
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEwaybill} [e_waybill]
 * @property {StoreEinvoice} [e_invoice]
 */

/**
 * @typedef Document
 * @property {string} legal_name
 * @property {string} ds_type
 * @property {string} value
 * @property {string} [url]
 * @property {boolean} verified
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef StoreMeta
 * @property {string} display_name
 * @property {Object} [product_return_config]
 * @property {Object[]} [timing]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {StoreGstCredentials} gst_credentials
 * @property {string} [gst_number]
 * @property {string[]} [notification_emails]
 * @property {StoreDocuments} [documents]
 * @property {Object} [ewaybill_portal_details]
 * @property {Object} [additional_contact_details]
 * @property {string} stage
 */

/**
 * @typedef StoreAddress
 * @property {string} [email]
 * @property {string} phone
 * @property {string} [version]
 * @property {string} state
 * @property {string} [address2]
 * @property {string} address_category
 * @property {string} [area]
 * @property {string} address_type
 * @property {number} pincode
 * @property {string} city
 * @property {string} [landmark]
 * @property {string} address1
 * @property {string} created_at
 * @property {string} country_code
 * @property {number} longitude
 * @property {string} contact_person
 * @property {string} country
 * @property {string} updated_at
 * @property {number} latitude
 */

/**
 * @typedef Store
 * @property {number} phone
 * @property {string} [store_active_from]
 * @property {string} state
 * @property {string} login_username
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} [mall_name]
 * @property {string} [address2]
 * @property {string} [code]
 * @property {boolean} [is_active]
 * @property {string[]} [brand_store_tags]
 * @property {number} [parent_store_id]
 * @property {number} company_id
 * @property {string} [mall_area]
 * @property {string} city
 * @property {string} pincode
 * @property {StoreMeta} meta
 * @property {string} store_email
 * @property {boolean} [is_archived]
 * @property {string} s_id
 * @property {string} [order_integration_id]
 * @property {string} location_type
 * @property {string} address1
 * @property {string} created_at
 * @property {string} name
 * @property {number} longitude
 * @property {number} [packaging_material_count]
 * @property {string} fulfillment_channel
 * @property {string} contact_person
 * @property {string} country
 * @property {string} [updated_at]
 * @property {string} [vat_no]
 * @property {Object} [brand_id]
 * @property {StoreAddress} [store_address_json]
 * @property {number} [alohomora_user_id]
 * @property {number} latitude
 */

/**
 * @typedef ReturnConfig
 * @property {number} [time]
 * @property {string} [unit]
 * @property {boolean} [returnable]
 */

/**
 * @typedef Dimensions
 * @property {number} [length]
 * @property {number} [height]
 * @property {number} [width]
 * @property {string} [unit]
 * @property {boolean} [is_default]
 */

/**
 * @typedef Weight
 * @property {number} [shipping]
 * @property {string} [unit]
 * @property {boolean} [is_default]
 */

/**
 * @typedef Article
 * @property {string} [code]
 * @property {string} size
 * @property {ReturnConfig} [return_config]
 * @property {string} _id
 * @property {Dimensions} [dimensions]
 * @property {string} seller_identifier
 * @property {Object} [esp_modified]
 * @property {Object} [a_set]
 * @property {boolean} [is_set]
 * @property {Object} [child_details]
 * @property {Weight} [weight]
 * @property {string} uid
 * @property {Identifier} identifiers
 * @property {Object} [raw_meta]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {number} [loyalty_discount]
 * @property {number} [employee_discount]
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_order_id
 * @property {AffiliateMeta} affiliate_meta
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {string} [identifier]
 * @property {string} [display_name]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {ArticleDetails} [article_details]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {BagGSTDetails} gst_details
 * @property {number} b_id
 * @property {Dates} [dates]
 * @property {string[]} [tags]
 * @property {BagReturnableCancelableStatus} status
 * @property {string} [seller_identifier]
 * @property {Item} item
 * @property {string} [b_type]
 * @property {Brand} brand
 * @property {BagStatusHistory[]} bag_status
 * @property {boolean} [restore_coupon]
 * @property {BagMeta} [meta]
 * @property {number} [line_number]
 * @property {Object[]} [reasons]
 * @property {string} [shipment_id]
 * @property {number} [bag_update_time]
 * @property {Prices} prices
 * @property {Object} [parent_promo_bags]
 * @property {string} [order_integration_id]
 * @property {Store} [ordering_store]
 * @property {Object[]} [applied_promos]
 * @property {string} [operational_status]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {Article} article
 * @property {number} [quantity]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {number} [no_of_bags_order]
 * @property {number[]} [original_bag_list]
 * @property {BagStatusHistory} current_operational_status
 * @property {Object} [restore_promos]
 * @property {string} journey_type
 * @property {Object} [qc_required]
 * @property {string} [entity_type]
 * @property {BagStatusHistory} current_status
 */

/**
 * @typedef ErrorResponse
 * @property {string} error
 * @property {string} message
 */

/**
 * @typedef Page1
 * @property {number} size
 * @property {number} item_total
 * @property {boolean} has_next
 * @property {string} page_type
 * @property {number} current
 */

/**
 * @typedef GetBagsPlatformResponse
 * @property {Page1} page
 * @property {BagDetailsPlatformResponse[]} items
 */

/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} shipment_ids
 */

/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [shipment_id]
 * @property {string} [error]
 * @property {string} [message]
 * @property {number} [status]
 */

/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */

/**
 * @typedef ErrorResponse1
 * @property {string} [error_trace]
 * @property {string} message
 * @property {number} status
 */

/**
 * @typedef StoreReassign
 * @property {string} [fynd_order_id]
 * @property {string} [mongo_article_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_id]
 * @property {string} [set_id]
 * @property {number[]} [reason_ids]
 * @property {string} [item_id]
 * @property {number} store_id
 * @property {number} [bag_id]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef Entities
 * @property {string} reason_text
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_id]
 * @property {string} [id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {Entities[]} entities
 * @property {string} entity_type
 * @property {string} action
 * @property {string} action_type
 */

/**
 * @typedef Bags
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_bag_id]
 * @property {number} [bag_id]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef CheckResponse
 * @property {string} [shipment_id]
 * @property {boolean} [is_shipment_locked]
 * @property {string} [status]
 * @property {boolean} [lock_status]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 * @property {boolean} [is_bag_locked]
 * @property {Bags[]} [bags]
 * @property {OriginalFilter} [original_filter]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {CheckResponse[]} [check_response]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [created_at]
 * @property {string} [from_datetime]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [logo_url]
 * @property {number} id
 * @property {number} [company_id]
 * @property {string} [platform_name]
 * @property {string} [to_datetime]
 * @property {string} [platform_id]
 */

/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 */

/**
 * @typedef BaseResponse
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef Click2CallResponse
 * @property {string} call_id
 * @property {boolean} status
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsDataUpdates
 * @property {ProductsDataUpdatesFilters[]} [filters]
 * @property {Object} [data]
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object[]} [filters]
 * @property {Object} [data]
 */

/**
 * @typedef DataUpdates
 * @property {ProductsDataUpdates[]} [products]
 * @property {EntitiesDataUpdates[]} [entities]
 */

/**
 * @typedef Products
 * @property {string} [identifier]
 * @property {number} [quantity]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {string} [identifier]
 * @property {number} [quantity]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsReasonsData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsFilters[]} [filters]
 * @property {ProductsReasonsData} [data]
 */

/**
 * @typedef EntityReasonData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef EntitiesReasons
 * @property {Object[]} [filters]
 * @property {EntityReasonData} [data]
 */

/**
 * @typedef ReasonsData
 * @property {ProductsReasons[]} [products]
 * @property {EntitiesReasons[]} [entities]
 */

/**
 * @typedef ShipmentsRequest
 * @property {DataUpdates} [data_updates]
 * @property {Products[]} [products]
 * @property {string} identifier
 * @property {ReasonsData} [reasons]
 */

/**
 * @typedef StatuesRequest
 * @property {string} [exclude_bags_next_state]
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [status]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [task]
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [force_transition]
 * @property {boolean} [unlock_before_transition]
 * @property {StatuesRequest[]} [statuses]
 */

/**
 * @typedef ShipmentsResponse
 * @property {number} [status]
 * @property {Object} [meta]
 * @property {string} [code]
 * @property {string} [stack_trace]
 * @property {string} [exception]
 * @property {Object} [final_state]
 * @property {string} [identifier]
 * @property {string} [message]
 */

/**
 * @typedef StatuesResponse
 * @property {ShipmentsResponse[]} [shipments]
 */

/**
 * @typedef UpdateShipmentStatusResponseBody
 * @property {StatuesResponse[]} [statuses]
 */

/**
 * @typedef OrderUser
 * @property {string} [address1]
 * @property {string} city
 * @property {string} country
 * @property {string} pincode
 * @property {string} first_name
 * @property {number} phone
 * @property {number} mobile
 * @property {string} state
 * @property {string} [address2]
 * @property {string} last_name
 * @property {string} email
 */

/**
 * @typedef UserData
 * @property {OrderUser} [billing_user]
 * @property {OrderUser} [shipping_user]
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */

/**
 * @typedef AffiliateBag
 * @property {Object} affiliate_meta
 * @property {number} transfer_price
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} item_id
 * @property {number} delivery_charge
 * @property {string} modified_on
 * @property {number} unit_price
 * @property {number} quantity
 * @property {string} fynd_store_id
 * @property {string} seller_identifier
 * @property {number} price_marked
 * @property {number} price_effective
 * @property {number} avl_qty
 * @property {number} company_id
 * @property {string} affiliate_store_id
 * @property {string} _id
 * @property {Object} identifier
 * @property {string} sku
 * @property {string} hsn_code_id
 * @property {number} discount
 * @property {number} amount_paid
 * @property {string} item_size
 * @property {number} store_id
 */

/**
 * @typedef OrderPriority
 * @property {number} [fulfilment_priority]
 * @property {string} [affiliate_priority_code]
 * @property {string} [fulfilment_priority_text]
 */

/**
 * @typedef ArticleDetails1
 * @property {number} quantity
 * @property {Object} weight
 * @property {Object} attributes
 * @property {number} brand_id
 * @property {Object} dimension
 * @property {Object} category
 * @property {string} _id
 */

/**
 * @typedef ShipmentDetails
 * @property {number} [dp_id]
 * @property {number} shipments
 * @property {string} [box_type]
 * @property {Object} [meta]
 * @property {string} affiliate_shipment_id
 * @property {number} fulfillment_id
 * @property {ArticleDetails1[]} articles
 */

/**
 * @typedef ShipmentConfig
 * @property {LocationDetails} [location_details]
 * @property {string} to_pincode
 * @property {string} payment_mode
 * @property {string} action
 * @property {string} journey
 * @property {string} identifier
 * @property {string} source
 * @property {ShipmentDetails[]} shipment
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderInfo
 * @property {Object} items
 * @property {UserData} user
 * @property {Object} [payment]
 * @property {OrderUser} billing_address
 * @property {number} order_value
 * @property {number} delivery_charges
 * @property {number} discount
 * @property {number} cod_charges
 * @property {AffiliateBag[]} bags
 * @property {string} [coupon]
 * @property {string} payment_mode
 * @property {OrderPriority} [order_priority]
 * @property {OrderUser} shipping_address
 * @property {string} [affiliate_order_id]
 * @property {ShipmentData} [shipment]
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {number} store_id
 * @property {string} marketplace_store_id
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} value
 * @property {string} name
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} created_at
 * @property {string} [description]
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} id
 * @property {string} secret
 * @property {string} updated_at
 * @property {string} name
 * @property {string} owner
 * @property {string} token
 */

/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */

/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateAppConfig} [app]
 * @property {AffiliateInventoryConfig} [inventory]
 */

/**
 * @typedef Affiliate
 * @property {AffiliateConfig} [config]
 * @property {string} token
 * @property {string} id
 */

/**
 * @typedef OrderConfig
 * @property {string} [article_lookup]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [store_lookup]
 * @property {string} [bag_end_state]
 * @property {boolean} [create_user]
 * @property {Affiliate} affiliate
 */

/**
 * @typedef CreateOrderPayload
 * @property {OrderInfo} order_info
 * @property {OrderConfig} order_config
 * @property {string} affiliate_id
 */

/**
 * @typedef CreateOrderResponse
 * @property {string} fynd_order_id
 */

/**
 * @typedef DispatchManifest
 * @property {string} manifest_id
 */

/**
 * @typedef SuccessResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef ActionInfo
 * @property {string} description
 * @property {string} slug
 * @property {string} display_text
 * @property {number} id
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef PostHistoryFilters
 * @property {string} shipment_id
 * @property {string} [identifier]
 * @property {string} [line_number]
 */

/**
 * @typedef PostHistoryData
 * @property {string} user_name
 * @property {string} message
 */

/**
 * @typedef PostActivityHistory
 * @property {PostHistoryFilters[]} filters
 * @property {PostHistoryData} data
 */

/**
 * @typedef PostHistoryDict
 * @property {PostActivityHistory} activity_history
 */

/**
 * @typedef PostShipmentHistory
 * @property {PostHistoryDict[]} [activity_history]
 */

/**
 * @typedef HistoryDict
 * @property {string} user
 * @property {number} [bag_id]
 * @property {string} type
 * @property {string} [l1_detail]
 * @property {string} [ticket_id]
 * @property {string} [l3_detail]
 * @property {string} [ticket_url]
 * @property {string} createdat
 * @property {string} [l2_detail]
 * @property {string} message
 */

/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} activity_history
 */

/**
 * @typedef ErrorDetail
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef SmsDataPayload
 * @property {number} shipment_id
 * @property {number} phone_number
 * @property {string} country_code
 * @property {number} amount_paid
 * @property {string} payment_mode
 * @property {string} brand_name
 * @property {string} customer_name
 * @property {string} message
 * @property {string} order_id
 */

/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {number} bag_id
 * @property {SmsDataPayload} [data]
 */

/**
 * @typedef Meta
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */

/**
 * @typedef ShipmentDetail
 * @property {string} [shipment_id]
 * @property {string} [remarks]
 * @property {string} [status]
 * @property {Meta} meta
 * @property {number} id
 * @property {number[]} [bag_list]
 */

/**
 * @typedef OrderDetails
 * @property {string} [created_at]
 * @property {string} [fynd_order_id]
 */

/**
 * @typedef OrderStatusData
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {string[]} [errors]
 * @property {OrderDetails} order_details
 */

/**
 * @typedef OrderStatusResult
 * @property {OrderStatusData[]} [result]
 * @property {string} success
 */

/**
 * @typedef ManualAssignDPToShipment
 * @property {number} dp_id
 * @property {string} qc_required
 * @property {string} order_type
 * @property {string[]} [shipment_ids]
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string[]} [errors]
 * @property {string} success
 */

/**
 * @typedef ProcessingDates
 * @property {string} [confirm_by_date]
 * @property {string} [dispatch_after_date]
 * @property {Object} [customer_pickup_slot]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [dispatch_by_date]
 * @property {string} [pack_by_date]
 */

/**
 * @typedef Tax
 * @property {number} rate
 * @property {Object} amount
 * @property {string} name
 * @property {Object[]} [breakup]
 */

/**
 * @typedef Charge
 * @property {string} type
 * @property {Tax} [tax]
 * @property {string} [code]
 * @property {Object} amount
 * @property {string} name
 */

/**
 * @typedef LineItem
 * @property {string} [external_line_id]
 * @property {number} [quantity]
 * @property {Object} [meta]
 * @property {Charge[]} [charges]
 * @property {string} [custom_messasge]
 * @property {string} seller_identifier
 */

/**
 * @typedef Shipment
 * @property {number} [priority]
 * @property {ProcessingDates} [processing_dates]
 * @property {number} location_id
 * @property {LineItem[]} line_items
 * @property {Object} [meta]
 * @property {string} [external_shipment_id]
 */

/**
 * @typedef ShippingInfo
 * @property {string} address1
 * @property {string} [title]
 * @property {string} [external_customer_code]
 * @property {string} city
 * @property {string} [shipping_type]
 * @property {string} first_name
 * @property {string} state
 * @property {Object} [geo_location]
 * @property {string} [state_code]
 * @property {string} primary_email
 * @property {string} [middle_name]
 * @property {string} [address_type]
 * @property {string} [house_no]
 * @property {string} [floor_no]
 * @property {string} [alternate_mobile_number]
 * @property {string} [address2]
 * @property {string} primary_mobile_number
 * @property {string} [landmark]
 * @property {string} [customer_code]
 * @property {string} country
 * @property {string} pincode
 * @property {string} [country_code]
 * @property {string} [gender]
 * @property {string} [alternate_email]
 * @property {string} [last_name]
 * @property {Object[]} [slot]
 */

/**
 * @typedef PaymentMethod
 * @property {string} collect_by
 * @property {Object} [meta]
 * @property {Object} [transaction_data]
 * @property {string} refund_by
 * @property {number} amount
 * @property {string} name
 * @property {string} mode
 */

/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */

/**
 * @typedef TaxInfo
 * @property {string} [gstin]
 * @property {string} [b2b_gstin_number]
 */

/**
 * @typedef BillingInfo
 * @property {string} address1
 * @property {string} [title]
 * @property {string} [external_customer_code]
 * @property {string} city
 * @property {string} first_name
 * @property {string} state
 * @property {string} [state_code]
 * @property {string} primary_email
 * @property {string} [middle_name]
 * @property {string} [house_no]
 * @property {string} [floor_no]
 * @property {string} [alternate_mobile_number]
 * @property {string} [address2]
 * @property {string} primary_mobile_number
 * @property {string} [customer_code]
 * @property {string} country
 * @property {string} pincode
 * @property {string} [country_code]
 * @property {string} [gender]
 * @property {string} [alternate_email]
 * @property {string} [last_name]
 */

/**
 * @typedef CreateOrderAPI
 * @property {Shipment[]} shipments
 * @property {string} [external_creation_date]
 * @property {ShippingInfo} shipping_info
 * @property {string} [external_order_id]
 * @property {PaymentInfo} payment_info
 * @property {TaxInfo} [tax_info]
 * @property {Object} [meta]
 * @property {Charge[]} [charges]
 * @property {Object} [currency_info]
 * @property {BillingInfo} billing_info
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {Object} [info]
 * @property {number} status
 * @property {string} [request_id]
 * @property {string} [meta]
 * @property {string} [code]
 * @property {string} [stack_trace]
 * @property {string} [exception]
 * @property {string} message
 */

/**
 * @typedef PaymentMethods
 * @property {string} [mode]
 * @property {string} [refund_by]
 * @property {string} [collect_by]
 */

/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [source]
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef CreateChannelConfig
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {string} [shipment_assignment]
 * @property {Object} [logo_url]
 * @property {DpConfiguration} [dp_configuration]
 * @property {string[]} [lock_states]
 * @property {boolean} [location_reassignment]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [is_upserted]
 * @property {boolean} [is_inserted]
 * @property {boolean} [acknowledged]
 */

/**
 * @typedef CreateChannelConifgErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef UploadConsent
 * @property {string} manifest_id
 * @property {string} consent_url
 */

/**
 * @typedef PlatformOrderUpdate
 * @property {string} order_id
 */

/**
 * @typedef ResponseDetail
 * @property {string[]} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */

/**
 * @typedef OrderStatus
 * @property {string} end_date
 * @property {string} start_date
 * @property {number} mobile
 * @property {FyndOrderIdList[]} [order_details]
 */

/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */

/**
 * @typedef GetSearchWordsData
 * @property {Object} [result]
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string} [uid]
 */

/**
 * @typedef GetSearchWordsDetailResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData} [items]
 */

/**
 * @typedef SearchKeywordResult
 * @property {string} sort_on
 * @property {Object} query
 */

/**
 * @typedef CreateSearchKeyword
 * @property {SearchKeywordResult} result
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetSearchWordsResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData[]} [items]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object[]} [results]
 * @property {Object} [_custom_json]
 * @property {string} [uid]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {Page} [page]
 * @property {GetAutocompleteWordsData[]} [items]
 */

/**
 * @typedef Media
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef AutocompletePageAction
 * @property {string} [url]
 * @property {string} [type]
 * @property {Object} [query]
 * @property {Object} [params]
 */

/**
 * @typedef AutocompleteAction
 * @property {string} [type]
 * @property {AutocompletePageAction} [page]
 */

/**
 * @typedef AutocompleteResult
 * @property {string} [display]
 * @property {Media} [logo]
 * @property {AutocompleteAction} [action]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {AutocompleteResult[]} [results]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {string} [app_id]
 * @property {Object[]} [results]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 */

/**
 * @typedef ProductBundleItem
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {boolean} [allow_remove]
 * @property {number} product_uid
 * @property {number} min_quantity
 * @property {number} max_quantity
 */

/**
 * @typedef ProductBundleRequest
 * @property {Object} [meta]
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {string} [modified_on]
 * @property {string} slug
 * @property {Object} [modified_by]
 * @property {string} choice
 * @property {boolean} is_active
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} name
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {string} [created_on]
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {Object} [meta]
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {string} [modified_on]
 * @property {string} slug
 * @property {Object} [modified_by]
 * @property {string} choice
 * @property {boolean} is_active
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} name
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 * @property {string} [created_on]
 * @property {string} [id]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {Page} [page]
 * @property {GetProductBundleCreateResponse[]} [items]
 */

/**
 * @typedef Price
 * @property {number} [max_effective]
 * @property {string} [currency]
 * @property {number} [min_effective]
 * @property {number} [max_marked]
 * @property {number} [min_marked]
 */

/**
 * @typedef LimitedProductData
 * @property {string} [short_description]
 * @property {number} [quantity]
 * @property {string} [slug]
 * @property {string} [item_code]
 * @property {Object} [price]
 * @property {string} [country_of_origin]
 * @property {Object} [identifier]
 * @property {string[]} [images]
 * @property {string} [name]
 * @property {Object} [attributes]
 * @property {number} [uid]
 * @property {string[]} [sizes]
 */

/**
 * @typedef Size
 * @property {string} [display]
 * @property {boolean} [is_available]
 * @property {string} [value]
 * @property {number} [quantity]
 */

/**
 * @typedef GetProducts
 * @property {Price} [price]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {boolean} [allow_remove]
 * @property {LimitedProductData} [product_details]
 * @property {number} [product_uid]
 * @property {number} [min_quantity]
 * @property {number} [max_quantity]
 * @property {Size[]} [sizes]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {Object} [meta]
 * @property {boolean} [same_store_assignment]
 * @property {GetProducts[]} [products]
 * @property {string} [slug]
 * @property {string} [choice]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {string} [name]
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {Object} [meta]
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {string} [modified_on]
 * @property {string} slug
 * @property {Object} [modified_by]
 * @property {string} choice
 * @property {boolean} is_active
 * @property {number} [company_id]
 * @property {string} name
 * @property {string[]} [page_visibility]
 * @property {string} [logo]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {number} [brand_id]
 * @property {string} title
 * @property {string} [description]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [image]
 * @property {boolean} [active]
 * @property {number} [company_id]
 * @property {string} [tag]
 * @property {Object} [created_by]
 * @property {string} name
 * @property {string} [created_on]
 * @property {string} [subtitle]
 * @property {Guide} [guide]
 * @property {string} [id]
 */

/**
 * @typedef GetMultiSizeGuide
 * @property {number} [brand_id]
 * @property {string} [title]
 * @property {string} [description]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [image]
 * @property {boolean} [active]
 * @property {number} [company_id]
 * @property {string} [tag]
 * @property {Object} [created_by]
 * @property {string} [name]
 * @property {string} [created_on]
 * @property {string} [subtitle]
 * @property {Object} [guide]
 * @property {string} [_id]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object} [page]
 * @property {GetMultiSizeGuide[]} [items]
 */

/**
 * @typedef SizeGuideResponse
 * @property {string} [modified_on]
 * @property {number} [brand_id]
 * @property {string} [title]
 * @property {Object} [modified_by]
 * @property {boolean} [active]
 * @property {Object} [created_by]
 * @property {number} [company_id]
 * @property {Object} [guide]
 * @property {string} [name]
 * @property {string} [tag]
 * @property {string} [subtitle]
 * @property {string} [created_on]
 * @property {string} [id]
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef MetaFields
 * @property {Object} key
 * @property {Object} value
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [minimum]
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {ApplicationItemSEO} [seo]
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 * @property {MetaFields[]} [_custom_meta]
 * @property {Object} [_custom_json]
 * @property {ApplicationItemMOQ} [moq]
 */

/**
 * @typedef SuccessResponse1
 * @property {boolean} [success]
 * @property {number} [uid]
 */

/**
 * @typedef SEOData
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef MOQData
 * @property {number} [minimum]
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {SEOData} [seo]
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 * @property {MOQData} [moq]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [condition]
 * @property {Object[]} [values]
 * @property {Object[]} data
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {number} priority
 * @property {string} [slug]
 * @property {string} [unit]
 * @property {boolean} is_active
 * @property {string} [key]
 * @property {string} display_type
 * @property {string} name
 * @property {string} [logo]
 */

/**
 * @typedef AppConfigurationDetail
 * @property {number} priority
 * @property {string} slug
 * @property {string[]} [template_slugs]
 * @property {string} app_id
 * @property {boolean} is_active
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} [logo]
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef PageResponseType
 * @property {number} total_count
 * @property {number} next
 * @property {number} current
 * @property {boolean} has_next
 */

/**
 * @typedef GetConfigResponse
 * @property {Object[]} data
 * @property {PageResponseType} page
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {number} priority
 * @property {string} default_key
 * @property {string} app_id
 * @property {string} key
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef AllowSingleRequest
 * @property {boolean} allow_single
 */

/**
 * @typedef DefaultKeyRequest
 * @property {string} default_key
 */

/**
 * @typedef MetaDataListingSortMetaResponse
 * @property {string} [display]
 * @property {string} [key]
 */

/**
 * @typedef MetaDataListingSortResponse
 * @property {MetaDataListingSortMetaResponse[]} [data]
 */

/**
 * @typedef MetaDataListingFilterMetaResponse
 * @property {string} [display]
 * @property {string} [key]
 * @property {string[]} [filter_types]
 * @property {Object[]} [units]
 */

/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
 */

/**
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingSortResponse} sort
 * @property {MetaDataListingFilterResponse} filter
 */

/**
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [compare]
 * @property {Object} [detail]
 * @property {Object} [variant]
 * @property {Object} [similar]
 */

/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {MetaDataListingResponse} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef ConfigurationListingSort
 * @property {ConfigurationListingSortConfig[]} [config]
 * @property {string} default_key
 */

/**
 * @typedef ConfigurationBucketPoints
 * @property {number} [start]
 * @property {string} [display]
 * @property {number} [end]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {Object[]} [map_values]
 * @property {string} [value]
 * @property {string} [condition]
 * @property {Object} [map]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {string} [sort]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} type
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} key
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [display_name]
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */

/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingSort} sort
 * @property {ConfigurationListingFilter} filter
 */

/**
 * @typedef ProductSize
 * @property {number} min
 * @property {number} max
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {number} priority
 * @property {ProductSize} size
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} display_type
 * @property {string} name
 * @property {string} [logo]
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {number} priority
 * @property {string} [title]
 * @property {ProductSize} [size]
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {string} [subtitle]
 */

/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */

/**
 * @typedef ConfigurationProduct
 * @property {ConfigurationProductVariant} variant
 * @property {ConfigurationProductSimilar} similar
 */

/**
 * @typedef AppConfiguration
 * @property {string} [modified_on]
 * @property {ConfigurationListing} [listing]
 * @property {string} config_type
 * @property {Object} [modified_by]
 * @property {string} [config_id]
 * @property {ConfigurationProduct} [product]
 * @property {string} app_id
 * @property {Object} [created_by]
 * @property {string} [type]
 * @property {string} [created_on]
 */

/**
 * @typedef AppCatalogConfiguration
 * @property {string} [modified_on]
 * @property {ConfigurationListing} [listing]
 * @property {string} config_type
 * @property {Object} [modified_by]
 * @property {string} [config_id]
 * @property {ConfigurationProduct} [product]
 * @property {string} app_id
 * @property {Object} [created_by]
 * @property {string} [type]
 * @property {string} [created_on]
 * @property {string} [id]
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [sort]
 * @property {Object} [filter]
 */

/**
 * @typedef EntityConfiguration
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {string} config_type
 * @property {string} [config_id]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} app_id
 * @property {string} [id]
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ProductSortOn
 * @property {boolean} [is_selected]
 * @property {string} [value]
 * @property {string} [name]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} display
 * @property {string[]} [operators]
 * @property {string} name
 * @property {string} [logo]
 * @property {string} [kind]
 */

/**
 * @typedef ProductFiltersValue
 * @property {boolean} is_selected
 * @property {Object} value
 * @property {string} [display_format]
 * @property {number} [min]
 * @property {number} [max]
 * @property {string} [currency_code]
 * @property {string} [query_format]
 * @property {number} [selected_min]
 * @property {string} display
 * @property {number} [count]
 * @property {string} [currency_symbol]
 * @property {number} [selected_max]
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 * @property {Object} operators
 */

/**
 * @typedef UserInfo
 * @property {string} [user_id]
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [username]
 */

/**
 * @typedef CollectionSchedule
 * @property {string} [end]
 * @property {string} [start]
 * @property {number} [duration]
 * @property {string} [cron]
 * @property {NextSchedule[]} [next_schedule]
 */

/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {string} op
 * @property {Object[]} value
 */

/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 */

/**
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
 */

/**
 * @typedef CollectionImage
 * @property {string} url
 * @property {string} aspect_ratio
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} landscape
 * @property {CollectionImage} portrait
 */

/**
 * @typedef CreateCollection
 * @property {string} [sort_on]
 * @property {UserInfo} [modified_by]
 * @property {string} name
 * @property {boolean} [allow_sort]
 * @property {boolean} [allow_facets]
 * @property {CollectionSchedule} [_schedule]
 * @property {string} slug
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [published]
 * @property {SeoDetail} [seo]
 * @property {CollectionBadge} [badge]
 * @property {UserInfo} [created_by]
 * @property {Object} [_locale_language]
 * @property {CollectionImage} logo
 * @property {string} type
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {CollectionBanner} banners
 * @property {string} [description]
 * @property {boolean} [is_visible]
 * @property {string} app_id
 */

/**
 * @typedef BannerImage
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [landscape]
 * @property {BannerImage} [portrait]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {string} [sort_on]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {boolean} [allow_facets]
 * @property {Object} [_schedule]
 * @property {string} [slug]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [is_active]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [badge]
 * @property {string} [type]
 * @property {BannerImage} [logo]
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {string} [app_id]
 * @property {string[]} [tag]
 * @property {Object} [cron]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterType[]} [type]
 * @property {CollectionListingFilterTag[]} [tags]
 */

/**
 * @typedef Media1
 * @property {string} url
 * @property {Object} [meta]
 * @property {string} [type]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {Action} [action]
 * @property {boolean} [allow_facets]
 * @property {Object} [_schedule]
 * @property {string} [slug]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [is_active]
 * @property {string} [uid]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [badge]
 * @property {string} [type]
 * @property {Media1} [logo]
 * @property {number} [priority]
 * @property {Object} [meta]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {string} [app_id]
 * @property {string[]} [tag]
 * @property {Object} [cron]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {Page} [page]
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {boolean} [allow_facets]
 * @property {Object} [_schedule]
 * @property {string} [slug]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [is_active]
 * @property {string} [uid]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [badge]
 * @property {string} [type]
 * @property {Media1} [logo]
 * @property {number} [priority]
 * @property {Object} [meta]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {string} [app_id]
 * @property {string[]} [tag]
 * @property {Object} [cron]
 */

/**
 * @typedef UpdateCollection
 * @property {string} [sort_on]
 * @property {UserInfo} [modified_by]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [allow_facets]
 * @property {string} [slug]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [published]
 * @property {SeoDetail} [seo]
 * @property {CollectionBadge} [badge]
 * @property {Object} [_locale_language]
 * @property {CollectionImage} [logo]
 * @property {string} [type]
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {CollectionBanner} [banners]
 * @property {string} [description]
 * @property {boolean} [is_visible]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {string} [action]
 * @property {number} [item_id]
 */

/**
 * @typedef CollectionItemRequest
 * @property {string} [type]
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {CollectionQuery[]} [query]
 */

/**
 * @typedef UpdatedResponse
 * @property {string} [message]
 * @property {number[]} [items_not_updated]
 */

/**
 * @typedef ProductBrand
 * @property {Media1} [logo]
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef Price1
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [type]
 * @property {string} [key]
 * @property {string} [value]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {ProductDetailAttribute[]} [details]
 * @property {string} [title]
 */

/**
 * @typedef ProductListingDetail
 * @property {string} [item_type]
 * @property {string} [short_description]
 * @property {Object} [teaser_tag]
 * @property {boolean} [has_variant]
 * @property {string} [item_code]
 * @property {string[]} [similars]
 * @property {string} [name]
 * @property {Object} [attributes]
 * @property {ProductBrand} [brand]
 * @property {string} [product_online_date]
 * @property {string} slug
 * @property {string[]} [highlights]
 * @property {number} [rating_count]
 * @property {string} [discount]
 * @property {number} [uid]
 * @property {Media1[]} [medias]
 * @property {boolean} [sellable]
 * @property {ProductListingPrice} [price]
 * @property {string} [type]
 * @property {number} [rating]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [color]
 * @property {string[]} [tryouts]
 * @property {string} [image_nature]
 * @property {string} [description]
 * @property {Object} [promo_meta]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} [page]
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [count]
 * @property {number} [out_of_stock_count]
 * @property {number} [sellable_count]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [article_freshness]
 * @property {number} [available_articles]
 * @property {number} [available_sizes]
 * @property {string} [name]
 * @property {number} [total_sizes]
 * @property {number} [total_articles]
 */

/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightItem} [item]
 * @property {CatalogInsightBrand} [brand_distribution]
 */

/**
 * @typedef CrossSellingData
 * @property {number} [products]
 * @property {number} [articles]
 */

/**
 * @typedef CrossSellingResponse
 * @property {CrossSellingData} [data]
 * @property {CatalogInsightBrand} [brand_distribution]
 */

/**
 * @typedef OptInPostRequest
 * @property {string} [platform]
 * @property {boolean} [enabled]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {number} [company_id]
 * @property {string} opt_level
 */

/**
 * @typedef CompanyOptIn
 * @property {string} platform
 * @property {boolean} enabled
 * @property {number} modified_on
 * @property {Object} [modified_by]
 * @property {number[]} brand_ids
 * @property {number[]} store_ids
 * @property {number} company_id
 * @property {Object} [created_by]
 * @property {string} opt_level
 * @property {number} created_on
 */

/**
 * @typedef GetOptInPlatform
 * @property {Page} page
 * @property {CompanyOptIn[]} items
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {number} [company_id]
 * @property {string} [brand_name]
 * @property {number} [total_article]
 * @property {number} [brand_id]
 */

/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {Page} [page]
 * @property {CompanyBrandDetail[]} [items]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {number} [brand]
 * @property {string} [company]
 * @property {number} [store]
 */

/**
 * @typedef StoreDetail
 * @property {string} [store_code]
 * @property {Object[]} [documents]
 * @property {string} [modified_on]
 * @property {Object} [manager]
 * @property {string} [store_type]
 * @property {Object} [address]
 * @property {Object} [timing]
 * @property {number} [company_id]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object[]} [additional_contacts]
 * @property {string} [display_name]
 * @property {string} [created_on]
 */

/**
 * @typedef OptinStoreDetails
 * @property {Page} [page]
 * @property {StoreDetail[]} [items]
 */

/**
 * @typedef AttributeMasterMandatoryDetails
 * @property {string[]} [l3_keys]
 */

/**
 * @typedef AttributeMasterMeta
 * @property {AttributeMasterMandatoryDetails} mandatory_details
 * @property {boolean} [enriched]
 */

/**
 * @typedef AttributeSchemaRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef AttributeMaster
 * @property {boolean} [mandatory]
 * @property {string} [format]
 * @property {boolean} [multi]
 * @property {AttributeSchemaRange} [range]
 * @property {string[]} [allowed_values]
 * @property {string} type
 */

/**
 * @typedef AttributeMasterFilter
 * @property {number} [priority]
 * @property {string[]} [depends_on]
 * @property {boolean} indexing
 */

/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */

/**
 * @typedef GenderDetail
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [description]
 * @property {string} [slug]
 * @property {AttributeMaster} [schema]
 * @property {AttributeMasterFilter} [filters]
 * @property {string[]} [departments]
 * @property {boolean} [is_nested]
 * @property {AttributeMasterDetails} [details]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [id]
 */

/**
 * @typedef CategoriesResponse
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Page} [page]
 * @property {CategoriesResponse[]} [items]
 */

/**
 * @typedef PTErrorResponse
 * @property {Object} [meta]
 * @property {string} [code]
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {number} [status]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string} [_cls]
 * @property {number} priority_order
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 * @property {string} name
 * @property {string} logo
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {Object} [platforms]
 */

/**
 * @typedef DepartmentCreateResponse
 * @property {string} message
 * @property {number} uid
 */

/**
 * @typedef DepartmentCreateErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef UserSerializer
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [contact]
 * @property {string} [uid]
 * @property {string} [_id]
 */

/**
 * @typedef GetDepartment
 * @property {string} [item_type]
 * @property {number} [priority_order]
 * @property {string} [modified_on]
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {UserSerializer} [modified_by]
 * @property {number} [page_size]
 * @property {boolean} [is_active]
 * @property {UserSerializer} [created_by]
 * @property {string} [name]
 * @property {string} [search]
 * @property {string} [created_on]
 * @property {string} [logo]
 * @property {number} [page_no]
 * @property {number} [uid]
 */

/**
 * @typedef DepartmentsResponse
 * @property {Page} [page]
 * @property {GetDepartment[]} [items]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {Object} [meta]
 * @property {string} [code]
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {number} [status]
 */

/**
 * @typedef UserDetail
 * @property {boolean} [super_user]
 * @property {string} user_id
 * @property {string} [contact]
 * @property {string} username
 */

/**
 * @typedef DepartmentModel
 * @property {Object} [_cls]
 * @property {number} priority_order
 * @property {string} modified_on
 * @property {string} [verified_on]
 * @property {UserDetail} [modified_by]
 * @property {Object} [slug]
 * @property {UserDetail} [verified_by]
 * @property {Object[]} [synonyms]
 * @property {boolean} [is_active]
 * @property {UserDetail} [created_by]
 * @property {Object} name
 * @property {number} [uid]
 * @property {Object} logo
 * @property {Object} [_custom_json]
 * @property {string} created_on
 * @property {Object} [_id]
 */

/**
 * @typedef ProductTemplate
 * @property {string} [modified_on]
 * @property {string} [description]
 * @property {string} slug
 * @property {Object} [modified_by]
 * @property {Object[]} [attributes_schema]
 * @property {string[]} [departments]
 * @property {boolean} [is_expirable]
 * @property {string[]} [categories]
 * @property {boolean} [is_active]
 * @property {Object} [created_by]
 * @property {string} [tag]
 * @property {string} [name]
 * @property {string[]} [attributes]
 * @property {string} [logo]
 * @property {boolean} [is_archived]
 * @property {string} [created_on]
 * @property {boolean} is_physical
 */

/**
 * @typedef TemplatesResponse
 * @property {Page} [page]
 * @property {ProductTemplate} [items]
 */

/**
 * @typedef Properties
 * @property {Object} [short_description]
 * @property {Object} [item_type]
 * @property {Object} [teaser_tag]
 * @property {Object} [item_code]
 * @property {Object} [return_config]
 * @property {Object} [name]
 * @property {Object} [trader]
 * @property {Object} [brand_uid]
 * @property {Object} [category_slug]
 * @property {Object} [slug]
 * @property {Object} [highlights]
 * @property {Object} [no_of_boxes]
 * @property {Object} [is_active]
 * @property {Object} [tags]
 * @property {Object} [command]
 * @property {Object} [sizes]
 * @property {Object} [trader_type]
 * @property {Object} [product_publish]
 * @property {Object} [country_of_origin]
 * @property {Object} [size_guide]
 * @property {Object} [hsn_code]
 * @property {Object} [variants]
 * @property {Object} [product_group_tag]
 * @property {Object} [description]
 * @property {Object} [currency]
 * @property {Object} [multi_size]
 * @property {Object} [custom_order]
 * @property {Object} [is_dependent]
 * @property {Object} [media]
 */

/**
 * @typedef GlobalValidation
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [required]
 * @property {Properties} [properties]
 * @property {string} [type]
 * @property {Object} [definitions]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {string} [id]
 * @property {string} [description]
 * @property {string} slug
 * @property {Object[]} [attributes_schema]
 * @property {string[]} [departments]
 * @property {boolean} [is_expirable]
 * @property {string[]} [categories]
 * @property {boolean} [is_active]
 * @property {string} [tag]
 * @property {string} [name]
 * @property {string[]} [attributes]
 * @property {string} [logo]
 * @property {boolean} [is_archived]
 * @property {boolean} is_physical
 */

/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateValidationData} [data]
 * @property {TemplateDetails} [template_details]
 */

/**
 * @typedef InventoryValidationResponse
 * @property {string} [message]
 * @property {Object} [data]
 */

/**
 * @typedef HSNData
 * @property {string[]} [hsn_code]
 * @property {string[]} [country_of_origin]
 */

/**
 * @typedef HSNCodesResponse
 * @property {string} [message]
 * @property {HSNData} [data]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductDownloadItemsData
 * @property {string[]} [brand]
 * @property {string} [type]
 * @property {string[]} [templates]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {Object} [template_tags]
 * @property {string} [id]
 * @property {string} [url]
 * @property {string} [completed_on]
 * @property {number} [seller_id]
 * @property {string} [task_id]
 * @property {VerifiedBy} [created_by]
 * @property {string} [trigger_on]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [status]
 */

/**
 * @typedef ProductDownloadsResponse
 * @property {Page} [page]
 * @property {ProductDownloadsItems} [items]
 */

/**
 * @typedef ProductConfigurationDownloads
 * @property {Object[]} [data]
 * @property {boolean} [multivalue]
 */

/**
 * @typedef CategoryMappingValues
 * @property {number} [catalog_id]
 * @property {string} name
 */

/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [google]
 */

/**
 * @typedef Hierarchy
 * @property {number} department
 * @property {number} l2
 * @property {number} l1
 */

/**
 * @typedef Media2
 * @property {string} logo
 * @property {string} landscape
 * @property {string} portrait
 */

/**
 * @typedef CategoryRequestBody
 * @property {number} [priority]
 * @property {string[]} [tryouts]
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {number[]} departments
 * @property {boolean} is_active
 * @property {number} level
 * @property {CategoryMapping} [marketplaces]
 * @property {string} name
 * @property {Hierarchy[]} [hierarchy]
 * @property {Media2} [media]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {string} [message]
 * @property {number} [uid]
 */

/**
 * @typedef Category
 * @property {number} [priority]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string[]} [tryouts]
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {Object} [modified_by]
 * @property {number[]} departments
 * @property {boolean} is_active
 * @property {number} level
 * @property {Object} [created_by]
 * @property {CategoryMapping} [marketplaces]
 * @property {string} name
 * @property {Hierarchy[]} [hierarchy]
 * @property {string} [created_on]
 * @property {number} [uid]
 * @property {Media2} [media]
 */

/**
 * @typedef CategoryResponse
 * @property {Page} [page]
 * @property {Category[]} [items]
 */

/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */

/**
 * @typedef CategoryUpdateResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef TeaserTag
 * @property {string} [url]
 * @property {string} [tag]
 */

/**
 * @typedef Trader
 * @property {string} [type]
 * @property {Object} name
 * @property {string[]} [address]
 */

/**
 * @typedef ProductPublish
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef NetQuantity
 * @property {Object} [unit]
 * @property {number} [value]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 * @property {string} [reporting_hsn]
 */

/**
 * @typedef CustomOrder
 * @property {string} [manufacturing_time_unit]
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {string} [short_description]
 * @property {string} item_type
 * @property {TeaserTag} [teaser_tag]
 * @property {string} item_code
 * @property {Object} [variant_group]
 * @property {ReturnConfig} return_config
 * @property {string} name
 * @property {Trader[]} trader
 * @property {Object} [attributes]
 * @property {string} [action]
 * @property {string} [requester]
 * @property {number} brand_uid
 * @property {string} category_slug
 * @property {string} [bulk_job_id]
 * @property {string} slug
 * @property {string[]} [highlights]
 * @property {number} [no_of_boxes]
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 * @property {number} company_id
 * @property {string} template_tag
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {Object[]} sizes
 * @property {ProductPublish} [product_publish]
 * @property {string} country_of_origin
 * @property {string} [size_guide]
 * @property {boolean} [is_set]
 * @property {Object} [variants]
 * @property {boolean} [is_image_less_product]
 * @property {string[]} [product_group_tag]
 * @property {Object} [variant_media]
 * @property {NetQuantity} [net_quantity]
 * @property {TaxIdentifier} tax_identifier
 * @property {string} [description]
 * @property {string} currency
 * @property {boolean} [multi_size]
 * @property {CustomOrder} [custom_order]
 * @property {Object} [change_request_id]
 * @property {number[]} departments
 * @property {boolean} [is_dependent]
 * @property {Media1[]} [media]
 */

/**
 * @typedef ReturnConfigResponse
 * @property {number} [time]
 * @property {string} [unit]
 * @property {boolean} [returnable]
 */

/**
 * @typedef Logo
 * @property {string} [url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef ProductPublished
 * @property {number} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef Image
 * @property {string} [url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef NetQuantityResponse
 * @property {string} [unit]
 * @property {number} [value]
 */

/**
 * @typedef Product
 * @property {string} [short_description]
 * @property {string} [item_type]
 * @property {Object} [teaser_tag]
 * @property {Object} [category]
 * @property {number[]} [all_company_ids]
 * @property {string} [item_code]
 * @property {Object} [modified_by]
 * @property {Object} [variant_group]
 * @property {ReturnConfigResponse} [return_config]
 * @property {string[]} [all_identifiers]
 * @property {string} [name]
 * @property {Trader[]} [trader]
 * @property {Brand} [brand]
 * @property {Object} [attributes]
 * @property {number} [brand_uid]
 * @property {string} [created_on]
 * @property {string} [category_slug]
 * @property {VerifiedBy} [verified_by]
 * @property {string} [modified_on]
 * @property {string} [slug]
 * @property {string} [stage]
 * @property {string[]} [highlights]
 * @property {number} [no_of_boxes]
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 * @property {number} [company_id]
 * @property {string} [template_tag]
 * @property {string} [primary_color]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {Object[]} [sizes]
 * @property {string} [id]
 * @property {string} [pending]
 * @property {Object} [moq]
 * @property {Object[]} [all_sizes]
 * @property {ProductPublished} [product_publish]
 * @property {string} [country_of_origin]
 * @property {string} [size_guide]
 * @property {boolean} [is_set]
 * @property {boolean} [is_expirable]
 * @property {Image[]} [images]
 * @property {Object} [created_by]
 * @property {Object} [variants]
 * @property {string} [hsn_code]
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [is_physical]
 * @property {string[]} [l3_mapping]
 * @property {number} [category_uid]
 * @property {string[]} [product_group_tag]
 * @property {string} [color]
 * @property {Object} [variant_media]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {Object} [tax_identifier]
 * @property {string} [description]
 * @property {string} [currency]
 * @property {string} [image_nature]
 * @property {string} [verified_on]
 * @property {number[]} [departments]
 * @property {Object} [custom_order]
 * @property {boolean} [multi_size]
 * @property {boolean} [is_dependent]
 * @property {Media1[]} [media]
 */

/**
 * @typedef ProductListingResponse
 * @property {Page} [page]
 * @property {Product[]} [items]
 */

/**
 * @typedef ProductVariants
 * @property {number} [category_uid]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {number} [brand_uid]
 * @property {number} [uid]
 * @property {Media1[]} [media]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {ProductVariants[]} [variants]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {Object} [modified_by]
 * @property {string} [unit]
 * @property {boolean} [variant]
 * @property {string} [name]
 * @property {string} [created_on]
 * @property {string} [suggestion]
 * @property {string} [modified_on]
 * @property {string} slug
 * @property {Object} [synonyms]
 * @property {AttributeMaster} schema
 * @property {AttributeMasterFilter} filters
 * @property {string[]} [tags]
 * @property {AttributeMasterDetails} details
 * @property {Object} [created_by]
 * @property {string} [logo]
 * @property {string} [description]
 * @property {string[]} departments
 * @property {boolean} [is_nested]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [raw_key]
 */

/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */

/**
 * @typedef ProductCreateUpdate
 * @property {string} [short_description]
 * @property {string} item_type
 * @property {TeaserTag} [teaser_tag]
 * @property {Object} item_code
 * @property {Object} [variant_group]
 * @property {ReturnConfig} return_config
 * @property {Object} name
 * @property {Trader[]} trader
 * @property {string} [action]
 * @property {string} [requester]
 * @property {number} brand_uid
 * @property {string} category_slug
 * @property {string} [bulk_job_id]
 * @property {string} slug
 * @property {string[]} [highlights]
 * @property {number} [no_of_boxes]
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 * @property {number} company_id
 * @property {string} template_tag
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {ProductPublish} [product_publish]
 * @property {string} country_of_origin
 * @property {string} [size_guide]
 * @property {boolean} [is_set]
 * @property {Object} [variants]
 * @property {boolean} [is_image_less_product]
 * @property {string[]} [product_group_tag]
 * @property {Object} [variant_media]
 * @property {NetQuantity} [net_quantity]
 * @property {TaxIdentifier} tax_identifier
 * @property {string} [description]
 * @property {string} currency
 * @property {boolean} [multi_size]
 * @property {CustomOrder} [custom_order]
 * @property {Object} [change_request_id]
 * @property {number[]} departments
 * @property {boolean} [is_dependent]
 * @property {Media1[]} [media]
 */

/**
 * @typedef SingleProductResponse
 * @property {Product} [data]
 */

/**
 * @typedef ValidateIdentifier
 * @property {string} gtin_type
 * @property {boolean} [primary]
 * @property {string} gtin_value
 */

/**
 * @typedef AllSizes
 * @property {number} item_length
 * @property {Object} item_weight_unit_of_measure
 * @property {Object} size
 * @property {number} item_height
 * @property {number} item_weight
 * @property {number} item_width
 * @property {string} item_dimensions_unit_of_measure
 * @property {ValidateIdentifier[]} [identifiers]
 */

/**
 * @typedef GetAllSizes
 * @property {AllSizes[]} [all_sizes]
 */

/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */

/**
 * @typedef UserInfo1
 * @property {string} [user_id]
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [username]
 */

/**
 * @typedef BulkJob
 * @property {number} [cancelled]
 * @property {string} [file_path]
 * @property {string} [tracking_url]
 * @property {string} [modified_on]
 * @property {number} [succeed]
 * @property {number} [failed]
 * @property {UserInfo1} [modified_by]
 * @property {string} [stage]
 * @property {Object[]} [failed_records]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {UserInfo1} [created_by]
 * @property {number} company_id
 * @property {string} [template_tag]
 * @property {Object[]} [cancelled_records]
 * @property {string} created_on
 * @property {string} [custom_template_tag]
 */

/**
 * @typedef BulkResponse
 * @property {string} [modified_on]
 * @property {UserInfo1} [modified_by]
 * @property {string} batch_id
 * @property {boolean} [is_active]
 * @property {UserInfo1} [created_by]
 * @property {string} created_on
 */

/**
 * @typedef UserDetail1
 * @property {string} [full_name]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductBulkRequest
 * @property {number} [cancelled]
 * @property {string} [file_path]
 * @property {string} [modified_on]
 * @property {number} [failed]
 * @property {number} [succeed]
 * @property {string} [stage]
 * @property {UserDetail1} [modified_by]
 * @property {string[]} [failed_records]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {UserDetail1} [created_by]
 * @property {string} [template_tag]
 * @property {string[]} [cancelled_records]
 * @property {ProductTemplate} [template]
 * @property {string} [created_on]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {Page} [page]
 * @property {ProductBulkRequest} [items]
 */

/**
 * @typedef BulkProductRequest
 * @property {Object[]} data
 * @property {string} batch_id
 * @property {number} company_id
 * @property {string} template_tag
 */

/**
 * @typedef ProductTagsViewResponse
 * @property {string[]} [items]
 */

/**
 * @typedef ProductBulkAssets
 * @property {string} url
 * @property {Object} user
 * @property {number} [company_id]
 */

/**
 * @typedef UserCommon
 * @property {string} [user_id]
 * @property {number} [company_id]
 * @property {string} [username]
 */

/**
 * @typedef Items
 * @property {number} [cancelled]
 * @property {string} [file_path]
 * @property {string} [tracking_url]
 * @property {string} [modified_on]
 * @property {number} [succeed]
 * @property {number} [failed]
 * @property {UserCommon} [modified_by]
 * @property {string} [stage]
 * @property {string[]} [failed_records]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {UserCommon} [created_by]
 * @property {number} [company_id]
 * @property {string[]} [cancelled_records]
 * @property {number} [retry]
 * @property {string} [created_on]
 * @property {string} [id]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Page} [page]
 * @property {Items[]} [items]
 */

/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {number} [item_id]
 * @property {number} [company_id]
 * @property {string} [size]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {boolean} [success]
 * @property {ProductSizeDeleteDataResponse} [data]
 */

/**
 * @typedef ItemQuery
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 * @property {number} [uid]
 */

/**
 * @typedef SetSize
 * @property {number} pieces
 * @property {string} size
 */

/**
 * @typedef SizeDistribution
 * @property {SetSize[]} sizes
 */

/**
 * @typedef InventorySet
 * @property {string} [name]
 * @property {SizeDistribution} size_distribution
 * @property {number} [quantity]
 */

/**
 * @typedef GTIN
 * @property {string} gtin_type
 * @property {boolean} [primary]
 * @property {Object} gtin_value
 */

/**
 * @typedef InvSize
 * @property {InventorySet} [set]
 * @property {number} [item_length]
 * @property {string} store_code
 * @property {number} [price_transfer]
 * @property {Object} size
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} quantity
 * @property {string} currency
 * @property {number} [item_height]
 * @property {number} [price]
 * @property {number} [item_weight]
 * @property {boolean} [is_set]
 * @property {string} [expiration_date]
 * @property {number} [item_width]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {GTIN[]} identifiers
 * @property {number} price_effective
 */

/**
 * @typedef InventoryRequest
 * @property {ItemQuery} item
 * @property {number} company_id
 * @property {InvSize[]} sizes
 */

/**
 * @typedef InventoryResponse
 * @property {Object} [store]
 * @property {number} [price_transfer]
 * @property {number} [quantity]
 * @property {string} [currency]
 * @property {string} [size]
 * @property {number} [price]
 * @property {string} [inventory_updated_on]
 * @property {string} [seller_identifier]
 * @property {number} [item_id]
 * @property {number} [sellable_quantity]
 * @property {Object} [identifiers]
 * @property {number} [price_effective]
 * @property {string} [uid]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {Page} [page]
 * @property {InventoryResponse[]} [items]
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef ReturnConfig1
 * @property {number} [time]
 * @property {string} [unit]
 * @property {boolean} [returnable]
 */

/**
 * @typedef Trader1
 * @property {string} type
 * @property {string} name
 * @property {string[]} address
 */

/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
 */

/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [order_committed]
 */

/**
 * @typedef ManufacturerResponse
 * @property {string} name
 * @property {boolean} is_default
 * @property {string} address
 */

/**
 * @typedef PriceMeta
 * @property {string} currency
 * @property {number} transfer
 * @property {number} effective
 * @property {string} [updated_at]
 * @property {Object} [tp_notes]
 * @property {number} marked
 */

/**
 * @typedef WeightResponse
 * @property {number} shipping
 * @property {string} unit
 * @property {boolean} is_default
 */

/**
 * @typedef DimensionResponse
 * @property {number} height
 * @property {string} unit
 * @property {number} width
 * @property {boolean} is_default
 * @property {number} length
 */

/**
 * @typedef InventorySellerResponse
 * @property {InventorySet} [set]
 * @property {CompanyMeta} company
 * @property {UserSerializer} [modified_by]
 * @property {string} seller_identifier
 * @property {string} [expiration_date]
 * @property {number} item_id
 * @property {string} fynd_article_code
 * @property {ReturnConfig1} [return_config]
 * @property {Trader1[]} [trader]
 * @property {BrandMeta} brand
 * @property {boolean} fragile
 * @property {string} [trace_id]
 * @property {Object} [raw_meta]
 * @property {string} [stage]
 * @property {Object} identifier
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 * @property {Quantities} [quantities]
 * @property {string} [added_on_store]
 * @property {Object} [_custom_json]
 * @property {string} uid
 * @property {StoreMeta} store
 * @property {boolean} [track_inventory]
 * @property {ManufacturerResponse} manufacturer
 * @property {PriceMeta} price
 * @property {string} country_of_origin
 * @property {boolean} [is_set]
 * @property {UserSerializer} [created_by]
 * @property {string} fynd_item_code
 * @property {Object} [meta]
 * @property {string} size
 * @property {Object} [tax_identifier]
 * @property {WeightResponse} weight
 * @property {DimensionResponse} dimension
 * @property {Object} [fynd_meta]
 * @property {number} total_quantity
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {Page} [page]
 * @property {InventorySellerResponse[]} [items]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {number} [cancelled]
 * @property {string} [file_path]
 * @property {string} [modified_on]
 * @property {number} [failed]
 * @property {number} [succeed]
 * @property {Object} [modified_by]
 * @property {string} [stage]
 * @property {string[]} [failed_records]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string[]} [cancelled_records]
 * @property {string} [created_on]
 * @property {string} [id]
 */

/**
 * @typedef BulkInventoryGet
 * @property {Page} [page]
 * @property {BulkInventoryGetItems[]} [items]
 */

/**
 * @typedef InventoryJobPayload
 * @property {string} store_code
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [quantity]
 * @property {string} [currency]
 * @property {string} [trace_id]
 * @property {number} [price]
 * @property {string} seller_identifier
 * @property {string} [expiration_date]
 * @property {string[]} [tags]
 * @property {number} [price_marked]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [total_quantity]
 * @property {number} [price_effective]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {string} batch_id
 * @property {number} company_id
 * @property {Object} [user]
 * @property {InventoryJobPayload[]} sizes
 */

/**
 * @typedef InventoryExportQuantityFilter
 * @property {string} operators
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef InventoryExportFilter
 * @property {InventoryExportQuantityFilter} [quantity]
 * @property {string} [to_date]
 * @property {string} [from_date]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */

/**
 * @typedef InventoryExportRequest
 * @property {string} [type]
 * @property {string[]} [notification_emails]
 * @property {string[]} [data]
 * @property {InventoryExportFilter} filters
 */

/**
 * @typedef InventoryExportResponse
 * @property {number} seller_id
 * @property {Object} [request_params]
 * @property {string} task_id
 * @property {string} [trigger_on]
 * @property {string} [created_on]
 * @property {string} [status]
 * @property {string} [_id]
 */

/**
 * @typedef InventoryExportAdvanceOption
 * @property {InventoryExportQuantityFilter} [quantity]
 * @property {string} [to_date]
 * @property {string} [from_date]
 * @property {number[]} [brand_ids]
 * @property {boolean} [notification]
 * @property {number[]} [store_ids]
 */

/**
 * @typedef InventoryExportJob
 * @property {string} [url]
 * @property {string} [completed_on]
 * @property {number} seller_id
 * @property {InventoryExportAdvanceOption} [filters]
 * @property {string[]} [notification_emails]
 * @property {string} task_id
 * @property {string} type
 * @property {string} [status]
 */

/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */

/**
 * @typedef ReturnConfig2
 * @property {number} [time]
 * @property {string} [unit]
 * @property {boolean} [returnable]
 */

/**
 * @typedef Trader2
 * @property {string} [type]
 * @property {string} [name]
 * @property {string[]} [address]
 */

/**
 * @typedef BrandMeta1
 * @property {string} [name]
 * @property {number} [id]
 */

/**
 * @typedef Quantity
 * @property {number} [count]
 */

/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [sellable]
 * @property {Quantity} [not_available]
 * @property {Quantity} [damaged]
 * @property {Quantity} [order_committed]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {string} [name]
 * @property {boolean} [is_default]
 * @property {string} [address]
 */

/**
 * @typedef PriceArticle
 * @property {string} [currency]
 * @property {number} [transfer]
 * @property {number} [effective]
 * @property {Object} [tp_notes]
 * @property {number} [marked]
 */

/**
 * @typedef WeightResponse1
 * @property {number} [shipping]
 * @property {string} [unit]
 */

/**
 * @typedef DimensionResponse1
 * @property {number} [width]
 * @property {number} [height]
 * @property {string} [unit]
 * @property {number} [length]
 */

/**
 * @typedef GetInventories
 * @property {CompanyMeta1} [company]
 * @property {UserSerializer} [modified_by]
 * @property {string} [seller_identifier]
 * @property {string} [expiration_date]
 * @property {number} [item_id]
 * @property {ReturnConfig2} [return_config]
 * @property {Trader2[]} [trader]
 * @property {BrandMeta1} [brand]
 * @property {string} [trace_id]
 * @property {string} [stage]
 * @property {Object} [identifier]
 * @property {QuantitiesArticle} [quantities]
 * @property {string[]} [tags]
 * @property {string} [uid]
 * @property {string} [id]
 * @property {ArticleStoreResponse} [store]
 * @property {boolean} [track_inventory]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {PriceArticle} [price]
 * @property {string} [country_of_origin]
 * @property {boolean} [is_set]
 * @property {UserSerializer} [created_by]
 * @property {Object} [platforms]
 * @property {Object} [tax_identifier]
 * @property {string} [size]
 * @property {WeightResponse1} [weight]
 * @property {string} [inventory_updated_on]
 * @property {DimensionResponse1} [dimension]
 * @property {DateMeta} [date_meta]
 * @property {number} [total_quantity]
 */

/**
 * @typedef GetInventoriesResponse
 * @property {Page} [page]
 * @property {GetInventories[]} [items]
 */

/**
 * @typedef FilerList
 * @property {string} [display]
 * @property {string} [value]
 */

/**
 * @typedef InventoryConfig
 * @property {FilerList[]} [data]
 * @property {boolean} [multivalues]
 */

/**
 * @typedef InventoryPayload
 * @property {string} [trace_id]
 * @property {string} seller_identifier
 * @property {string} [expiration_date]
 * @property {string[]} [tags]
 * @property {number} [price_marked]
 * @property {number} [total_quantity]
 * @property {number} store_id
 * @property {number} [price_effective]
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {Object} [meta]
 * @property {number} company_id
 * @property {InventoryPayload[]} [payload]
 */

/**
 * @typedef InventoryFailedReason
 * @property {string} message
 * @property {string} [errors]
 */

/**
 * @typedef InventoryResponseItem
 * @property {InventoryFailedReason} [reason]
 * @property {InventoryPayload} [data]
 */

/**
 * @typedef InventoryUpdateResponse
 * @property {string} message
 * @property {InventoryResponseItem[]} [items]
 */

/**
 * @typedef HsnCodesObject
 * @property {number} [threshold1]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {number} [threshold2]
 * @property {number} [tax2]
 * @property {boolean} [tax_on_mrp]
 * @property {boolean} [tax_on_esp]
 * @property {number} [company_id]
 * @property {string} [hsn_code]
 * @property {string} [hs2_code]
 * @property {number} [tax1]
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */

/**
 * @typedef HsnUpsert
 * @property {number} threshold1
 * @property {number} [threshold2]
 * @property {number} [tax2]
 * @property {boolean} tax_on_mrp
 * @property {boolean} [tax_on_esp]
 * @property {number} company_id
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {string} hsn_code
 * @property {string} hs2_code
 * @property {number} tax1
 */

/**
 * @typedef BulkHsnUpsert
 * @property {HsnUpsert[]} data
 */

/**
 * @typedef BulkHsnResponse
 * @property {boolean} [success]
 */

/**
 * @typedef PageResponse
 * @property {string} [current]
 * @property {number} [size]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 */

/**
 * @typedef TaxSlab
 * @property {number} threshold
 * @property {string} effective_date
 * @property {number} [cess]
 * @property {number} rate
 */

/**
 * @typedef HSNDataInsertV2
 * @property {string} type
 * @property {string} reporting_hsn
 * @property {string} [modified_on]
 * @property {string} description
 * @property {Object} [modified_by]
 * @property {string} country_code
 * @property {Object} [created_by]
 * @property {string} [hsn_code_id]
 * @property {string} hsn_code
 * @property {TaxSlab[]} taxes
 * @property {string} [created_on]
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {PageResponse} [page]
 * @property {HSNDataInsertV2[]} [items]
 */

/**
 * @typedef BrandItem
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {string[]} [departments]
 * @property {string} [discount]
 * @property {string} [name]
 * @property {Media} [logo]
 * @property {Action} [action]
 * @property {number} [uid]
 */

/**
 * @typedef BrandListingResponse
 * @property {Page} page
 * @property {BrandItem[]} [items]
 */

/**
 * @typedef Department
 * @property {number} [priority_order]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {Media} [logo]
 * @property {number} [uid]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef ThirdLevelChild
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Object[]} [childs]
 * @property {string} [name]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 */

/**
 * @typedef SecondLevelChild
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [name]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 */

/**
 * @typedef Child
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [name]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 */

/**
 * @typedef CategoryItems
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {Child[]} [childs]
 * @property {string} [name]
 * @property {Action} [action]
 * @property {number} [uid]
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {string} [department]
 * @property {CategoryItems[]} [items]
 */

/**
 * @typedef DepartmentIdentifier
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef CategoryListingResponse
 * @property {DepartmentCategoryTree[]} [data]
 * @property {DepartmentIdentifier[]} [departments]
 */

/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} page
 * @property {ProductFilters[]} [filters]
 * @property {Object} [operators]
 * @property {ProductListingDetail[]} [items]
 */

/**
 * @typedef ProductDetail
 * @property {string} [item_type]
 * @property {string} [short_description]
 * @property {Object} [teaser_tag]
 * @property {boolean} [has_variant]
 * @property {string} [item_code]
 * @property {string[]} [similars]
 * @property {string} [name]
 * @property {Object} [attributes]
 * @property {ProductBrand} [brand]
 * @property {string} [product_online_date]
 * @property {string} slug
 * @property {string[]} [highlights]
 * @property {number} [rating_count]
 * @property {number} [uid]
 * @property {Media1[]} [medias]
 * @property {string} [type]
 * @property {number} [rating]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [color]
 * @property {string[]} [tryouts]
 * @property {string} [image_nature]
 * @property {string} [description]
 * @property {Object} [promo_meta]
 */

/**
 * @typedef InventoryPage
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {string} type
 * @property {boolean} [has_next]
 * @property {number} item_total
 */

/**
 * @typedef InventoryStockResponse
 * @property {InventoryPage} page
 * @property {Object[]} [items]
 */

/**
 * @typedef UserSerializer1
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [address_type]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {string} [city]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [state]
 * @property {number} [longitude]
 * @property {string} [address1]
 * @property {string} [country_code]
 * @property {string} [address2]
 */

/**
 * @typedef GetCompanySerializer
 * @property {string} [company_type]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {UserSerializer1} [modified_by]
 * @property {string} [stage]
 * @property {string} [reject_reason]
 * @property {UserSerializer1} [created_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {string} [business_type]
 * @property {number} [uid]
 * @property {UserSerializer1} [verified_by]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [closing]
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 * @property {boolean} open
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {string} [password]
 * @property {string} [username]
 * @property {boolean} [enabled]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {string} [name]
 * @property {SellerPhoneNumber} mobile_no
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 * @property {string} [order]
 */

/**
 * @typedef GetLocationSerializer
 * @property {GetCompanySerializer} [company]
 * @property {UserSerializer2} [modified_by]
 * @property {string} name
 * @property {string} [created_on]
 * @property {UserSerializer2} [verified_by]
 * @property {string} code
 * @property {string} [modified_on]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {string} [phone_number]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} [store_code]
 * @property {LocationManagerSerializer} [manager]
 * @property {GetAddressSerializer} address
 * @property {Object} [warnings]
 * @property {string[]} [notification_emails]
 * @property {UserSerializer2} [created_by]
 * @property {LocationIntegrationType} [integration_type]
 * @property {Document[]} [documents]
 * @property {string} [verified_on]
 * @property {string} display_name
 */

/**
 * @typedef LocationListSerializer
 * @property {Page} [page]
 * @property {GetLocationSerializer[]} [items]
 */

/**
 * @typedef ApplicationBrandJson
 * @property {Object} _custom_json
 */

/**
 * @typedef ApplicationCategoryJson
 * @property {Object} _custom_json
 */

/**
 * @typedef ApplicationDepartment
 * @property {string} app_id
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {Object} [_custom_json]
 * @property {number} uid
 */

/**
 * @typedef ApplicationDepartmentListingResponse
 * @property {Page} page
 * @property {ApplicationDepartment[]} [items]
 */

/**
 * @typedef ApplicationDepartmentJson
 * @property {Object} _custom_json
 */

/**
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */

/**
 * @typedef ContactDetails
 * @property {SellerPhoneNumber[]} [phone]
 * @property {string[]} [emails]
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {number} [rate]
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} [country]
 * @property {string} [country_code]
 */

/**
 * @typedef Website
 * @property {string} [url]
 */

/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {string} [mode]
 * @property {string} [stage]
 * @property {string} [name]
 * @property {string} business_type
 * @property {string} [business_info]
 * @property {string} company_type
 * @property {string} [modified_on]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 * @property {boolean} [franchise_enabled]
 * @property {string[]} [notification_emails]
 * @property {ContactDetails} [contact_details]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {UserSerializer} [created_by]
 * @property {Document[]} [documents]
 * @property {number} uid
 * @property {string} [created_on]
 * @property {BusinessDetails} [business_details]
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {number} [rate]
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} country
 * @property {string} city
 * @property {number} latitude
 * @property {string} address1
 * @property {number} longitude
 * @property {number} pincode
 * @property {string} [country_code]
 * @property {string} address_type
 * @property {string} state
 * @property {string} [address2]
 * @property {string} [landmark]
 */

/**
 * @typedef UpdateCompany
 * @property {BusinessDetails} [business_details]
 * @property {Document[]} [documents]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {string} [business_type]
 * @property {string} [reject_reason]
 * @property {string} [business_info]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {Object} [_custom_json]
 * @property {string} [company_type]
 * @property {Object} [warnings]
 * @property {boolean} [franchise_enabled]
 * @property {ContactDetails} [contact_details]
 * @property {string[]} [notification_emails]
 * @property {string} [name]
 */

/**
 * @typedef ProfileSuccessResponse
 * @property {boolean} [success]
 * @property {number} [uid]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [pending]
 * @property {number} [verified]
 */

/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [store_documents]
 * @property {number} [uid]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [product]
 * @property {DocumentsObj} [store]
 * @property {string} [stage]
 * @property {DocumentsObj} [brand]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [landscape]
 * @property {string} [portrait]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {string} [mode]
 * @property {string} [reject_reason]
 * @property {string} [description]
 * @property {BrandBannerSerializer} [banner]
 * @property {Object} [_locale_language]
 * @property {string} [logo]
 * @property {string} [stage]
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {string} [slug_key]
 * @property {string} [modified_on]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 * @property {UserSerializer} [created_by]
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {number} [uid]
 * @property {string} [brand_tier]
 * @property {string} [description]
 * @property {Object} [_custom_json]
 * @property {BrandBannerSerializer} [banner]
 * @property {number} [company_id]
 * @property {Object} [_locale_language]
 * @property {string} logo
 * @property {string[]} [synonyms]
 * @property {string} name
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} url
 * @property {string} name
 */

/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */

/**
 * @typedef CompanySerializer
 * @property {string[]} [market_channels]
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {string} business_type
 * @property {string} [reject_reason]
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [verified_on]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} company_type
 * @property {string} [modified_on]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 * @property {UserSerializer} [created_by]
 * @property {string[]} [notification_emails]
 * @property {string} [stage]
 * @property {CompanyDetails} [details]
 * @property {string} [name]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {CompanySerializer} [company]
 * @property {string} [reject_reason]
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 * @property {UserSerializer} [created_by]
 * @property {Object} [warnings]
 * @property {string} [stage]
 * @property {GetBrandResponseSerializer} [brand]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} [uid]
 * @property {number} company
 * @property {number[]} brands
 */

/**
 * @typedef HolidayDateSerializer
 * @property {string} end_date
 * @property {string} start_date
 */

/**
 * @typedef HolidaySchemaSerializer
 * @property {string} holiday_type
 * @property {string} title
 * @property {HolidayDateSerializer} date
 */

/**
 * @typedef AddressSerializer
 * @property {string} [country]
 * @property {string} [city]
 * @property {number} latitude
 * @property {string} [address1]
 * @property {number} longitude
 * @property {number} [pincode]
 * @property {string} [country_code]
 * @property {string} [address_type]
 * @property {string} [state]
 * @property {string} [address2]
 * @property {string} [landmark]
 */

/**
 * @typedef LocationSerializer
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Document[]} [documents]
 * @property {number} [uid]
 * @property {number} company
 * @property {LocationManagerSerializer} [manager]
 * @property {string} code
 * @property {string} display_name
 * @property {Object} [_custom_json]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} [store_type]
 * @property {Object} [warnings]
 * @property {AddressSerializer} address
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string[]} [notification_emails]
 * @property {string} [stage]
 * @property {string} name
 */

/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */

/**
 * @typedef _ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef _ArticleQuery
 * @property {number} [item_id]
 * @property {number[]} [ignored_stores]
 * @property {string} [size]
 */

/**
 * @typedef _AssignStoreArticle
 * @property {_ArticleAssignment} [article_assignment]
 * @property {_ArticleQuery} [query]
 * @property {number} [quantity]
 * @property {string} [group_id]
 * @property {Object} [meta]
 */

/**
 * @typedef AssignStoreRequestValidator
 * @property {string} [app_id]
 * @property {string} [channel_type]
 * @property {number[]} [store_ids]
 * @property {string} [channel_identifier]
 * @property {string} [pincode]
 * @property {number} [company_id]
 * @property {_AssignStoreArticle[]} [articles]
 */

/**
 * @typedef AssignStoreResponseSerializer
 * @property {string} [uid]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [price_marked]
 * @property {number} [quantity]
 * @property {string} [store_pincode]
 * @property {boolean} [status]
 * @property {string} [_id]
 * @property {number} [company_id]
 * @property {number} [item_id]
 * @property {number} [index]
 * @property {number} [store_id]
 * @property {Object} [meta]
 * @property {string} [size]
 * @property {string} [s_city]
 * @property {number} [price_effective]
 */

/**
 * @typedef FailedResponse
 * @property {string} message
 */

/**
 * @typedef CDN
 * @property {string} url
 * @property {string} [absolute_url]
 * @property {string} [relative_url]
 */

/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */

/**
 * @typedef StartResponse
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string[]} [tags]
 */

/**
 * @typedef StartRequest
 * @property {string} file_name
 * @property {string} content_type
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Object} [params]
 */

/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {string} created_on
 * @property {string} modified_on
 */

/**
 * @typedef Opts
 * @property {number} [attempts]
 * @property {number} [timestamp]
 * @property {number} [delay]
 */

/**
 * @typedef CopyFileTask
 * @property {string} id
 * @property {string} name
 * @property {BulkRequest} data
 * @property {Opts} opts
 * @property {number} progress
 * @property {number} delay
 * @property {number} timestamp
 * @property {number} attempts_made
 * @property {string[]} [stacktrace]
 * @property {number} finished_on
 * @property {number} processed_on
 */

/**
 * @typedef BulkUploadResponse
 * @property {string} tracking_url
 * @property {CopyFileTask} task
 */

/**
 * @typedef ReqConfiguration
 * @property {number} [concurrency]
 */

/**
 * @typedef Destination
 * @property {string} namespace
 * @property {string} rewrite
 * @property {string} [basepath]
 */

/**
 * @typedef BulkRequest
 * @property {string[]} urls
 * @property {Destination} destination
 * @property {ReqConfiguration} [configuration]
 */

/**
 * @typedef Urls
 * @property {string} url
 * @property {string} signed_url
 * @property {number} expiry
 */

/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */

/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */

/**
 * @typedef DbRecord
 * @property {boolean} success
 * @property {string[]} tags
 * @property {string} _id
 * @property {string} file_name
 * @property {string} [operation]
 * @property {string} namespace
 * @property {string} content_type
 * @property {string} file_path
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string} created_on
 * @property {string} modified_on
 */

/**
 * @typedef BrowseResponse
 * @property {DbRecord[]} items
 * @property {Page} page
 */

/**
 * @typedef RedirectDevice
 * @property {string} [link]
 * @property {string} [type]
 */

/**
 * @typedef WebRedirect
 * @property {string} [link]
 * @property {string} [type]
 */

/**
 * @typedef Redirects
 * @property {RedirectDevice} [ios]
 * @property {RedirectDevice} [android]
 * @property {WebRedirect} [web]
 * @property {boolean} [force_web]
 */

/**
 * @typedef CampaignShortLink
 * @property {string} [source]
 * @property {string} [medium]
 */

/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry]
 */

/**
 * @typedef SocialMediaTags
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image]
 */

/**
 * @typedef ShortLinkReq
 * @property {string} title
 * @property {string} url
 * @property {string} [hash]
 * @property {boolean} [active]
 * @property {string} [expire_at]
 * @property {boolean} [enable_tracking]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */

/**
 * @typedef UrlInfo
 * @property {string} [original]
 * @property {string} [short]
 * @property {string} [hash]
 */

/**
 * @typedef ShortLinkRes
 * @property {string} [title]
 * @property {UrlInfo} [url]
 * @property {string} [created_by]
 * @property {boolean} [app_redirect]
 * @property {string} [fallback]
 * @property {boolean} [active]
 * @property {string} [_id]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [application]
 * @property {string} [user_id]
 * @property {string} [created_at]
 * @property {Object} [meta]
 * @property {string} [updated_at]
 * @property {boolean} [personalized]
 * @property {CampaignShortLink} [campaign]
 * @property {Redirects} [redirects]
 * @property {Attribution} [attribution]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {number} [count]
 */

/**
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ErrorRes
 * @property {string} [message]
 */

/**
 * @typedef DataTresholdDTO
 * @property {number} [min_price]
 * @property {number} [safe_stock]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {GenericDTO[]} [period_type_list]
 */

/**
 * @typedef GenericDTO
 * @property {string} [text]
 * @property {Object} [value]
 */

/**
 * @typedef JobConfigDTO
 * @property {Object} [integration_data]
 * @property {string} [company_name]
 * @property {string} integration
 * @property {number} company_id
 * @property {TaskDTO} [task_details]
 * @property {DataTresholdDTO} [threshold_details]
 * @property {string} [job_code]
 * @property {string} [alias]
 */

/**
 * @typedef TaskDTO
 * @property {number} [type]
 * @property {GenericDTO[]} [group_list]
 */

/**
 * @typedef ResponseEnvelopeString
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {string} [items]
 * @property {string} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef KafkaMetaModel
 * @property {string} [job_type]
 * @property {number} [batch_id]
 * @property {string} [action]
 * @property {string[]} [trace]
 * @property {string} [created_on]
 * @property {number} [created_timestamp]
 */

/**
 * @typedef SuppressStoreModel
 * @property {number[]} [stores]
 */

/**
 * @typedef SuppressStorePayload
 * @property {SuppressStoreModel[]} [payload]
 * @property {KafkaMetaModel} [meta]
 */

/**
 * @typedef KafkaResponse
 * @property {number} [offset]
 * @property {number} [partition]
 */

/**
 * @typedef ResponseEnvelopeKafkaResponse
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {KafkaResponse} [items]
 * @property {KafkaResponse} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef GCompany
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [name]
 * @property {GStore[]} [stores]
 */

/**
 * @typedef GStore
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {string} [code]
 * @property {string} [name]
 * @property {StoreData} [data]
 */

/**
 * @typedef Metum
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef ResponseEnvelopeListSlingshotConfigurationDetail
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {SlingshotConfigurationDetail[]} [items]
 * @property {SlingshotConfigurationDetail[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef SlingshotConfigurationDetail
 * @property {SlingshotIntegration} [integration]
 * @property {GCompany[]} [companies]
 */

/**
 * @typedef SlingshotIntegration
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Metum[]} [meta]
 */

/**
 * @typedef StoreData
 * @property {string} [location_id]
 */

/**
 * @typedef AWSS3config
 * @property {string} [bucket]
 * @property {string} [region]
 * @property {string} [dir]
 * @property {string} [access_key]
 * @property {string} [secret_key]
 * @property {string} [local_file_path]
 * @property {string} [archive_path]
 * @property {boolean} [archive]
 * @property {boolean} [delete]
 * @property {boolean} [unzip]
 * @property {string} [zip_format]
 * @property {string} [file_regex]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef ArchiveConfig
 * @property {boolean} [delete]
 * @property {boolean} [archive]
 * @property {string} [archive_dir]
 */

/**
 * @typedef Audit
 * @property {string} [created_by]
 * @property {string} [modified_by]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef CatalogMasterConfig
 * @property {string} [source_slug]
 */

/**
 * @typedef CompanyConfig
 * @property {number} [company_id]
 * @property {number[]} [exclude_steps]
 * @property {string[]} [hidden_closet_keys]
 * @property {Object} [open_tags]
 * @property {string[]} [tax_identifiers]
 * @property {number} [delete_quantity_threshold]
 */

/**
 * @typedef DBConfig
 * @property {string} [vendor]
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [dbname]
 * @property {string} [query]
 * @property {boolean} [procedure]
 * @property {string} [driver_class]
 * @property {string} [jdbc_url]
 * @property {Object} [optional_properties]
 */

/**
 * @typedef DBConnectionProfile
 * @property {string} [inventory]
 */

/**
 * @typedef DBParamConfig
 * @property {Object} [params]
 */

/**
 * @typedef DefaultHeadersDTO
 * @property {PropBeanDTO} [store]
 * @property {PropBeanDTO} [intf_article_id]
 * @property {PropBeanDTO} [price_effective]
 * @property {PropBeanDTO} [quantity]
 */

/**
 * @typedef DocMappingConfig
 * @property {Object} [properties]
 * @property {number} [junk_data_threshold_count]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {string} [unwind_field]
 * @property {DefaultHeadersDTO} [default_headers]
 */

/**
 * @typedef EmailConfig
 * @property {string} [recepient]
 * @property {string} [host]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {boolean} [read_from_content]
 * @property {boolean} [filter_based_on_recepients]
 * @property {string} [pcol]
 * @property {string} [subject_line_regex]
 * @property {string} [sender_address]
 * @property {string} [local_dir]
 * @property {string[]} [folder_name_hierarchies]
 * @property {string} [attachment_regex]
 * @property {string} [body_content_regex]
 * @property {boolean} [password_protected]
 * @property {string} [zip_format]
 * @property {boolean} [attachment_mandate]
 * @property {boolean} [filter_files_after_extraction]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_unread_mails]
 * @property {string} [content_type]
 * @property {boolean} [downloadable_link]
 * @property {Object} [properties]
 */

/**
 * @typedef FTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {string} [zip_file_regex]
 * @property {ArchiveConfig} [archive_config]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef FileConfig
 * @property {string} [delimiter]
 * @property {string} [charset]
 * @property {Object} [properties]
 * @property {boolean} [file_has_header]
 * @property {number} [header_index]
 * @property {string[]} [header_array]
 * @property {number} [data_start_index]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {number} [junk_data_threshold_count]
 * @property {string} [file_type]
 * @property {boolean} [line_validity_check]
 * @property {string[]} [sheet_names]
 * @property {boolean} [read_all_sheets]
 * @property {string} [quote_char]
 * @property {string} [escape_char]
 * @property {DefaultHeadersDTO} [default_headers]
 */

/**
 * @typedef GoogleSpreadSheetConfig
 * @property {string} [range]
 * @property {string} [sheet_id]
 * @property {string} [client_secret_location]
 * @property {string} [cred_storage_directory]
 * @property {string} [local_dir]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef HttpConfig
 * @property {string} [hosturl]
 * @property {string} [username]
 * @property {string} [password]
 * @property {Object} [request_params]
 * @property {string} [http_method]
 * @property {string} [request_payload]
 * @property {string} [local_path]
 * @property {ArchiveConfig} [archive_config]
 */

/**
 * @typedef JobConfig
 * @property {number} [_id]
 * @property {string} [job_code]
 * @property {string} [task_type]
 * @property {number} [sync_delay]
 * @property {string} [cron_expression]
 * @property {StoreFilter} [store_filter]
 * @property {ProcessConfig} [process_config]
 * @property {StoreConfig[]} [store_config]
 * @property {Object} [properties]
 * @property {boolean} [immediate_first_run]
 * @property {boolean} [disable]
 * @property {string[]} [dependent_job_codes]
 * @property {CompanyConfig[]} [company_config]
 * @property {number[]} [company_ids]
 * @property {string[]} [tax_identifiers]
 * @property {string} [priority]
 * @property {number} [period_threshold]
 * @property {string} [period_threshold_type]
 * @property {DBConnectionProfile} [db_connection_profile]
 * @property {Object} [params]
 * @property {Object} [open_tags]
 * @property {number} [delete_quantity_threshold]
 * @property {CatalogMasterConfig} [catalog_master_config]
 * @property {string[]} [aggregator_types]
 * @property {string} [integration_type]
 * @property {number} [min_price]
 * @property {Audit} [audit]
 * @property {number} [version]
 * @property {string} [alias]
 */

/**
 * @typedef JobConfigRawDTO
 * @property {string} company_name
 * @property {string} integration
 * @property {number} company_id
 * @property {JobConfig} [data]
 */

/**
 * @typedef JsonDocConfig
 * @property {PropBeanConfig[]} [prop_bean_configs]
 */

/**
 * @typedef LocalFileConfig
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [local_dir]
 * @property {string} [working_dir]
 * @property {boolean} [unzip]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef MongoDocConfig
 * @property {string} [collection_name]
 * @property {Object} [find_query]
 * @property {Object} [projection_query]
 * @property {PropBeanConfig[]} [prop_bean_configs]
 * @property {Object[]} [aggregate_pipeline]
 * @property {boolean} [skip_save]
 */

/**
 * @typedef OAuthConfig
 * @property {number} [limit]
 * @property {number} [pages]
 * @property {number} [interval]
 * @property {string} [consumer_key]
 * @property {string} [consumer_secret]
 * @property {string} [token]
 * @property {string} [token_secret]
 * @property {string} [rest_url]
 * @property {string} [rest_base_url]
 * @property {string} [function_name]
 */

/**
 * @typedef ProcessConfig
 * @property {DBConfig} [db_config]
 * @property {DBParamConfig} [db_param_config]
 * @property {SFTPConfig} [sftp_config]
 * @property {AWSS3config} [aws_s3_config]
 * @property {MongoDocConfig} [mongo_doc_config]
 * @property {FTPConfig} [ftp_config]
 * @property {EmailConfig} [email_config]
 * @property {FileConfig} [file_config]
 * @property {JsonDocConfig} [json_doc_config]
 * @property {DocMappingConfig} [doc_mapping_config]
 * @property {TaskStepConfig} [task_step_config]
 * @property {HttpConfig} [http_config]
 * @property {LocalFileConfig} [local_file_config]
 * @property {OAuthConfig} [oauth_config]
 * @property {GoogleSpreadSheetConfig} [google_spreadsheet_config]
 */

/**
 * @typedef PropBeanConfig
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {Send} [send]
 * @property {Object[]} [validations]
 * @property {string[]} [values]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */

/**
 * @typedef PropBeanDTO
 * @property {boolean} [required]
 * @property {boolean} [optional]
 * @property {boolean} [include]
 * @property {string} [source_field]
 * @property {string[]} [source_fields]
 * @property {string} [destination_field]
 * @property {string} [data_type]
 * @property {Object} [default_value]
 * @property {Object} [const_value]
 * @property {string} [concat_str]
 * @property {string} [function_name]
 * @property {string} [transformer_name]
 * @property {string} [all_param_function_name]
 * @property {string} [sub_separator]
 * @property {string} [index_field]
 * @property {boolean} [ignore_if_not_exists]
 * @property {string} [identifier_type]
 * @property {Object} [projection_query]
 * @property {boolean} [enrich_from_master]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigRawDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigRawDTO[]} [items]
 * @property {JobConfigRawDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef SFTPConfig
 * @property {string} [host]
 * @property {number} [port]
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [unzip]
 * @property {number} [retries]
 * @property {number} [interval]
 * @property {string} [private_key_path]
 * @property {boolean} [strict_host_key_checking]
 * @property {string} [local_dir]
 * @property {string} [remote_dir]
 * @property {boolean} [password_protected]
 * @property {string} [zip_file_regex]
 * @property {string} [file_regex]
 * @property {string} [zip_format]
 * @property {ArchiveConfig} [archive_config]
 * @property {boolean} [read_all_files]
 */

/**
 * @typedef Send
 * @property {boolean} [raw]
 * @property {boolean} [processed]
 */

/**
 * @typedef StoreConfig
 * @property {string} [job_code]
 * @property {string} [storeid]
 * @property {string} [store_alias]
 * @property {string} [store_file_regex]
 * @property {string} [store_file_name]
 * @property {ProcessConfig} [process_config]
 * @property {Object} [properties]
 */

/**
 * @typedef StoreFilter
 * @property {string[]} [include_tags]
 * @property {string[]} [exclude_tags]
 * @property {Object} [query]
 */

/**
 * @typedef TaskConfig
 * @property {string} [name]
 * @property {number} [task_config_id]
 * @property {TaskParam[]} [task_params]
 */

/**
 * @typedef TaskParam
 * @property {string} [name]
 * @property {Object} [value]
 */

/**
 * @typedef TaskStepConfig
 * @property {TaskConfig[]} [task_configs]
 * @property {number[]} [task_config_ids]
 * @property {number[]} [task_config_group_ids]
 */

/**
 * @typedef JobStepsDTO
 * @property {string} [step_name]
 * @property {string} [type]
 * @property {number} [step_execution_time]
 * @property {number} [start_count]
 * @property {number} [end_count]
 * @property {number} [deleted_count]
 * @property {string} [processed_start_time]
 * @property {string} [processed_at]
 */

/**
 * @typedef ResponseEnvelopeListJobStepsDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobStepsDTO[]} [items]
 * @property {JobStepsDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO[]} [items]
 * @property {JobConfigDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ResponseEnvelopeJobConfigDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigDTO} [items]
 * @property {JobConfigDTO} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef JobHistoryDto
 * @property {number} [total_added_count]
 * @property {number} [total_updated_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_initial_count]
 * @property {number} [job_id]
 * @property {string} [status]
 * @property {string} [job_code]
 * @property {string} [processed_on]
 * @property {string[]} [filename]
 * @property {string} [error_type]
 * @property {string} [message]
 */

/**
 * @typedef JobMetricsDto
 * @property {string} [job_code]
 * @property {string} [is_run_more_than_usual]
 * @property {JobHistoryDto[]} [job_history]
 * @property {number} [total_success_count]
 * @property {number} [total_failure_count]
 * @property {number} [total_warning_count]
 * @property {number} [total_suppressed_count]
 * @property {number} [total_job_runs]
 */

/**
 * @typedef ResponseEnvelopeJobMetricsDto
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobMetricsDto} [items]
 * @property {JobMetricsDto} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef JobConfigListDTO
 * @property {string} [code]
 * @property {string} [alias]
 * @property {string} [modified_by]
 * @property {string} [created_by]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {boolean} [active]
 * @property {string} [type]
 */

/**
 * @typedef ResponseEnvelopeListJobConfigListDTO
 * @property {string} [timestamp]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [total_time_taken_in_millis]
 * @property {string} [http_status]
 * @property {JobConfigListDTO[]} [items]
 * @property {JobConfigListDTO[]} [payload]
 * @property {string} [trace_id]
 * @property {Page} [page]
 */

/**
 * @typedef ApplicationInventory
 * @property {AppInventoryConfig} [inventory]
 * @property {AuthenticationConfig} [authentication]
 * @property {ArticleAssignmentConfig} [article_assignment]
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {AppOrderConfig} [order]
 * @property {AppLogisticsConfig} [logistics]
 * @property {string} [business]
 * @property {boolean} [comms_enabled]
 * @property {string[]} [platforms]
 * @property {string} [_id]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [modified_by]
 */

/**
 * @typedef AppInventoryConfig
 * @property {InventoryBrand} [brand]
 * @property {InventoryStore} [store]
 * @property {InventoryCategory} [category]
 * @property {InventoryPrice} [price]
 * @property {InventoryDiscount} [discount]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {boolean} [franchise_enabled]
 * @property {Object[]} [exclude_category]
 * @property {string[]} [image]
 * @property {Object[]} [company_store]
 */

/**
 * @typedef InventoryBrand
 * @property {string} [criteria]
 * @property {Object[]} [brands]
 */

/**
 * @typedef InventoryStore
 * @property {string} [criteria]
 * @property {Object[]} [stores]
 * @property {AppStoreRules} [rules]
 */

/**
 * @typedef AppStoreRules
 * @property {number[]} [companies]
 * @property {Object[]} [brands]
 */

/**
 * @typedef InventoryCategory
 * @property {string} [criteria]
 * @property {Object[]} [categories]
 */

/**
 * @typedef InventoryPrice
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef InventoryDiscount
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef AuthenticationConfig
 * @property {boolean} [required]
 * @property {string} [provider]
 */

/**
 * @typedef ArticleAssignmentConfig
 * @property {ArticleAssignmentRules} [rules]
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef ArticleAssignmentRules
 * @property {StorePriority} [store_priority]
 */

/**
 * @typedef StorePriority
 * @property {boolean} [enabled]
 * @property {Object[]} [storetype_order]
 */

/**
 * @typedef AppCartConfig
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [enabled]
 * @property {number} [max_cart_items]
 * @property {number} [min_cart_value]
 * @property {boolean} [bulk_coupons]
 * @property {boolean} [revenue_engine_coupon]
 * @property {boolean} [empty_cart]
 */

/**
 * @typedef DeliveryCharges
 * @property {boolean} [enabled]
 * @property {Charges} [charges]
 */

/**
 * @typedef Charges
 * @property {number} [threshold]
 * @property {number} [charges]
 */

/**
 * @typedef AppPaymentConfig
 * @property {CallbackUrl} [callback_url]
 * @property {Methods} [methods]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 * @property {boolean} [enabled]
 * @property {number} [cod_amount_limit]
 * @property {number} [cod_charges]
 */

/**
 * @typedef CallbackUrl
 * @property {string} [app]
 * @property {string} [web]
 */

/**
 * @typedef Methods
 * @property {PaymentModeConfig} [pl]
 * @property {PaymentModeConfig} [card]
 * @property {PaymentModeConfig} [nb]
 * @property {PaymentModeConfig} [wl]
 * @property {PaymentModeConfig} [ps]
 * @property {PaymentModeConfig} [upi]
 * @property {PaymentModeConfig} [qr]
 * @property {PaymentModeConfig} [cod]
 * @property {PaymentModeConfig} [pp]
 * @property {PaymentModeConfig} [jp]
 * @property {PaymentModeConfig} [pac]
 * @property {PaymentModeConfig} [fc]
 * @property {PaymentModeConfig} [jiopp]
 * @property {PaymentModeConfig} [stripepg]
 * @property {PaymentModeConfig} [juspaypg]
 * @property {PaymentModeConfig} [payubizpg]
 * @property {PaymentModeConfig} [payumoneypg]
 * @property {PaymentModeConfig} [rupifipg]
 * @property {PaymentModeConfig} [simpl]
 */

/**
 * @typedef PaymentModeConfig
 * @property {boolean} [enabled]
 */

/**
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled]
 * @property {string} [default_options]
 * @property {string} [payment_identifier]
 */

/**
 * @typedef AppOrderConfig
 * @property {boolean} [enabled]
 * @property {boolean} [force_reassignment]
 * @property {string} [message]
 */

/**
 * @typedef AppLogisticsConfig
 * @property {boolean} [logistics_by_seller]
 * @property {boolean} [serviceability_check]
 * @property {boolean} [same_day_delivery]
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef LoyaltyPointsConfig
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 */

/**
 * @typedef AppInventoryPartialUpdate
 * @property {RewardPointsConfig} [reward_points]
 * @property {AppCartConfig} [cart]
 * @property {AppPaymentConfig} [payment]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {boolean} [comms_enabled]
 */

/**
 * @typedef BrandCompanyInfo
 * @property {string} [company_name]
 * @property {number} [company_id]
 */

/**
 * @typedef CompanyByBrandsRequest
 * @property {number} brands
 * @property {string} [search_text]
 */

/**
 * @typedef CompanyByBrandsResponse
 * @property {BrandCompanyInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef StoreByBrandsRequest
 * @property {number} [company_id]
 * @property {number} brands
 * @property {string} [search_text]
 */

/**
 * @typedef StoreByBrandsResponse
 * @property {BrandStoreInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BrandStoreInfo
 * @property {string} [store_name]
 * @property {number} [store_id]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {OptedStoreAddress} [store_address]
 * @property {OptedCompany} [company]
 */

/**
 * @typedef CompanyBrandInfo
 * @property {string} [name]
 * @property {number} [value]
 * @property {string} [brand_logo_url]
 * @property {string} [brand_banner_url]
 * @property {string} [brand_banner_portrait_url]
 */

/**
 * @typedef BrandsByCompanyResponse
 * @property {CompanyBrandInfo} [brands]
 */

/**
 * @typedef CreateApplicationRequest
 * @property {App} [app]
 * @property {AppInventory} [configuration]
 * @property {AppDomain} [domain]
 */

/**
 * @typedef CreateAppResponse
 * @property {Application} [app]
 * @property {ApplicationInventory} [configuration]
 */

/**
 * @typedef ApplicationsResponse
 * @property {Application[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef MobileAppConfiguration
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {string} [package_name]
 */

/**
 * @typedef LandingImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef SplashImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef MobileAppConfigRequest
 * @property {string} [app_name]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 * @property {boolean} [is_active]
 */

/**
 * @typedef BuildVersionHistory
 * @property {BuildVersion} [versions]
 * @property {string} [latest_available_version_name]
 */

/**
 * @typedef BuildVersion
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [platform_type]
 * @property {string} [build_status]
 * @property {string} [version_name]
 * @property {number} [version_code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef AppSupportedCurrency
 * @property {string} [_id]
 * @property {string[]} [supported_currency]
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef DefaultCurrency
 * @property {string} [ref]
 * @property {string} [code]
 */

/**
 * @typedef CurrencyConfig
 * @property {string} [_id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [decimal_digits]
 * @property {string} [symbol]
 */

/**
 * @typedef DomainAdd
 * @property {string} [name]
 */

/**
 * @typedef DomainAddRequest
 * @property {DomainAdd} [domain]
 */

/**
 * @typedef DomainsResponse
 * @property {Domain[]} [domains]
 */

/**
 * @typedef UpdateDomain
 * @property {string} [_id]
 */

/**
 * @typedef UpdateDomainTypeRequest
 * @property {UpdateDomain} [domain]
 * @property {string} [action]
 */

/**
 * @typedef DomainStatusRequest
 * @property {string} [domain_url]
 */

/**
 * @typedef DomainStatus
 * @property {string} [display]
 * @property {boolean} [status]
 */

/**
 * @typedef DomainStatusResponse
 * @property {boolean} [connected]
 * @property {DomainStatus[]} [status]
 */

/**
 * @typedef DomainSuggestionsRequest
 * @property {string} [domain_url]
 * @property {boolean} [custom]
 */

/**
 * @typedef DomainSuggestion
 * @property {string} name
 * @property {boolean} [unsupported]
 * @property {boolean} is_available
 * @property {number} [price]
 * @property {string} [currency]
 */

/**
 * @typedef DomainSuggestionsResponse
 * @property {DomainSuggestion[]} [domains]
 */

/**
 * @typedef GetIntegrationsOptInsResponse
 * @property {IntegrationOptIn[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef IntegrationOptIn
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {string} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */

/**
 * @typedef Validators
 * @property {CompanyValidator} [company]
 * @property {StoreValidator} [store]
 * @property {InventoryValidator} [inventory]
 * @property {OrderValidator} [order]
 */

/**
 * @typedef CompanyValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef JsonSchema
 * @property {string} [display]
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [tooltip]
 */

/**
 * @typedef StoreValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef InventoryValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef OrderValidator
 * @property {JsonSchema[]} [json_schema]
 * @property {string} [browser_script]
 */

/**
 * @typedef IntegrationMeta
 * @property {boolean} [is_public]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef Integration
 * @property {Validators} [validators]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {Object} [constants]
 * @property {Object[]} [companies]
 * @property {string[]} [support]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [icon]
 * @property {string} [owner]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [token]
 * @property {string} [secret]
 * @property {number} [__v]
 */

/**
 * @typedef IntegrationConfigResponse
 * @property {IntegrationLevel[]} [items]
 */

/**
 * @typedef IntegrationLevel
 * @property {boolean} [opted]
 * @property {Object[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {Object} [data]
 */

/**
 * @typedef UpdateIntegrationLevelRequest
 * @property {IntegrationLevel[]} [items]
 */

/**
 * @typedef OptedStoreIntegration
 * @property {boolean} [other_opted]
 * @property {IntegrationOptIn} [other_integration]
 * @property {OtherEntity} [other_entity]
 */

/**
 * @typedef OtherEntity
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [_id]
 * @property {string} [integration]
 * @property {string} [level]
 * @property {number} [uid]
 * @property {OtherEntityData} [data]
 * @property {Object[]} [meta]
 * @property {string} [token]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef LastPatch
 * @property {string} [op]
 * @property {string} [path]
 * @property {string} [value]
 */

/**
 * @typedef OtherEntityData
 * @property {string} [article_identifier]
 */

/**
 * @typedef App
 * @property {string} [company_id]
 * @property {string} [channel_type]
 * @property {ApplicationAuth} [auth]
 * @property {string} [name]
 * @property {string} [desc]
 */

/**
 * @typedef AppInventory
 * @property {InventoryBrandRule} [brand]
 * @property {InventoryStoreRule} [store]
 * @property {string[]} [image]
 * @property {boolean} [franchise_enabled]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [only_verified_products]
 * @property {InventoryPaymentConfig} [payment]
 * @property {InventoryArticleAssignment} [article_assignment]
 */

/**
 * @typedef AppDomain
 * @property {string} [name]
 */

/**
 * @typedef CompaniesResponse
 * @property {AppInventoryCompanies} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AppInventoryCompanies
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [company_type]
 */

/**
 * @typedef StoresResponse
 * @property {AppInventoryStores} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AppInventoryStores
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [company_id]
 */

/**
 * @typedef FilterOrderingStoreRequest
 * @property {boolean} [all_stores]
 * @property {number[]} [deployed_stores]
 * @property {string} [q]
 * @property {boolean} [only_deployed]
 */

/**
 * @typedef DeploymentMeta
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 */

/**
 * @typedef OrderingStoreConfig
 * @property {DeploymentMeta} [deployment_meta]
 */

/**
 * @typedef OtherSellerCompany
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef OtherSellerApplication
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OtherSellerCompany} [company]
 * @property {string} [opt_type]
 */

/**
 * @typedef OtherSellerApplications
 * @property {OtherSellerApplication[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OptedApplicationResponse
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [_id]
 * @property {string} [domain]
 * @property {OptedCompany} [company]
 * @property {OptedInventory} [opted_inventory]
 * @property {OptOutInventory} [opt_out_inventory]
 */

/**
 * @typedef OptedCompany
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef OptedInventory
 * @property {OptType} [opt_type]
 * @property {Object} [items]
 */

/**
 * @typedef OptType
 * @property {string} [key]
 * @property {string} [display]
 */

/**
 * @typedef OptedStore
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [_id]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {OptedStoreAddress} [address]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {number} [company_id]
 */

/**
 * @typedef OptOutInventory
 * @property {number[]} store
 * @property {number[]} company
 */

/**
 * @typedef TokenResponse
 * @property {Tokens} [tokens]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef Tokens
 * @property {Firebase} [firebase]
 * @property {Moengage} [moengage]
 * @property {Segment} [segment]
 * @property {Gtm} [gtm]
 * @property {Freshchat} [freshchat]
 * @property {Safetynet} [safetynet]
 * @property {FyndRewards} [fynd_rewards]
 * @property {GoogleMap} [google_map]
 */

/**
 * @typedef Firebase
 * @property {Credentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef Credentials
 * @property {Ios} [ios]
 * @property {Android} [android]
 * @property {string} [project_id]
 * @property {string} [gcm_sender_id]
 * @property {string} [application_id]
 * @property {string} [api_key]
 */

/**
 * @typedef Ios
 * @property {string} [application_id]
 * @property {string} [api_key]
 */

/**
 * @typedef Android
 * @property {string} [application_id]
 * @property {string} [api_key]
 */

/**
 * @typedef Moengage
 * @property {MoengageCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef MoengageCredentials
 * @property {string} [app_id]
 */

/**
 * @typedef Segment
 * @property {SegmentCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SegmentCredentials
 * @property {string} [write_key]
 */

/**
 * @typedef Gtm
 * @property {GtmCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef GtmCredentials
 * @property {string} [api_key]
 */

/**
 * @typedef Freshchat
 * @property {FreshchatCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef FreshchatCredentials
 * @property {string} [app_id]
 * @property {string} [app_key]
 * @property {string} [web_token]
 */

/**
 * @typedef Safetynet
 * @property {SafetynetCredentials} [credentials]
 * @property {boolean} [enabled]
 */

/**
 * @typedef SafetynetCredentials
 * @property {string} [api_key]
 */

/**
 * @typedef FyndRewards
 * @property {FyndRewardsCredentials} [credentials]
 */

/**
 * @typedef FyndRewardsCredentials
 * @property {string} [public_key]
 */

/**
 * @typedef GoogleMap
 * @property {GoogleMapCredentials} [credentials]
 */

/**
 * @typedef GoogleMapCredentials
 * @property {string} [api_key]
 */

/**
 * @typedef RewardPointsConfig
 * @property {Credit} [credit]
 * @property {Debit} [debit]
 */

/**
 * @typedef Credit
 * @property {boolean} [enabled]
 */

/**
 * @typedef Debit
 * @property {boolean} [enabled]
 * @property {boolean} [auto_apply]
 * @property {string} [strategy_channel]
 */

/**
 * @typedef ProductDetailFeature
 * @property {string[]} [similar]
 * @property {boolean} [seller_selection]
 * @property {boolean} [update_product_meta]
 * @property {boolean} [request_product]
 */

/**
 * @typedef LaunchPage
 * @property {string} [page_type]
 * @property {Object} [params]
 * @property {Object} [query]
 */

/**
 * @typedef LandingPageFeature
 * @property {LaunchPage} [launch_page]
 * @property {boolean} [continue_as_guest]
 * @property {string} [login_btn_text]
 * @property {boolean} [show_domain_textbox]
 * @property {boolean} [show_register_btn]
 */

/**
 * @typedef RegistrationPageFeature
 * @property {boolean} [ask_store_address]
 */

/**
 * @typedef AppFeature
 * @property {ProductDetailFeature} [product_detail]
 * @property {LandingPageFeature} [landing_page]
 * @property {RegistrationPageFeature} [registration_page]
 * @property {HomePageFeature} [home_page]
 * @property {CommonFeature} [common]
 * @property {CartFeature} [cart]
 * @property {QrFeature} [qr]
 * @property {PcrFeature} [pcr]
 * @property {OrderFeature} [order]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef HomePageFeature
 * @property {boolean} [order_processing]
 */

/**
 * @typedef CommonFeature
 * @property {CommunicationOptinDialogFeature} [communication_optin_dialog]
 * @property {DeploymentStoreSelectionFeature} [deployment_store_selection]
 * @property {ListingPriceFeature} [listing_price]
 * @property {CurrencyFeature} [currency]
 * @property {RevenueEngineFeature} [revenue_engine]
 * @property {FeedbackFeature} [feedback]
 * @property {CompareProductsFeature} [compare_products]
 * @property {RewardPointsConfig} [reward_points]
 */

/**
 * @typedef CommunicationOptinDialogFeature
 * @property {boolean} [visibility]
 */

/**
 * @typedef DeploymentStoreSelectionFeature
 * @property {boolean} [enabled]
 * @property {string} [type]
 */

/**
 * @typedef ListingPriceFeature
 * @property {string} [value]
 */

/**
 * @typedef CurrencyFeature
 * @property {string[]} [value]
 * @property {string} [type]
 * @property {string} [default_currency]
 */

/**
 * @typedef RevenueEngineFeature
 * @property {boolean} [enabled]
 */

/**
 * @typedef FeedbackFeature
 * @property {boolean} [enabled]
 */

/**
 * @typedef CompareProductsFeature
 * @property {boolean} [enabled]
 */

/**
 * @typedef CartFeature
 * @property {boolean} [gst_input]
 * @property {boolean} [staff_selection]
 * @property {boolean} [placing_for_customer]
 * @property {boolean} [google_map]
 * @property {boolean} [revenue_engine_coupon]
 */

/**
 * @typedef QrFeature
 * @property {boolean} [application]
 * @property {boolean} [products]
 * @property {boolean} [collections]
 */

/**
 * @typedef PcrFeature
 * @property {boolean} [staff_selection]
 */

/**
 * @typedef OrderFeature
 * @property {boolean} [buy_again]
 */

/**
 * @typedef AppFeatureRequest
 * @property {AppFeature} [feature]
 */

/**
 * @typedef AppFeatureResponse
 * @property {AppFeature} [feature]
 */

/**
 * @typedef Application
 * @property {ApplicationWebsite} [website]
 * @property {ApplicationCors} [cors]
 * @property {ApplicationAuth} [auth]
 * @property {string} [description]
 * @property {string} [channel_type]
 * @property {number} [cache_ttl]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_active]
 * @property {string} [_id]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {number} [company_id]
 * @property {string} [token]
 * @property {ApplicationRedirections[]} [redirections]
 * @property {ApplicationMeta[]} [meta]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 * @property {SecureUrl} [banner]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [favicon]
 * @property {Domain[]} [domains]
 * @property {string} [app_type]
 * @property {SecureUrl} [mobile_logo]
 * @property {Domain} [domain]
 * @property {string} [slug]
 */

/**
 * @typedef UnhandledError
 * @property {string} [message]
 */

/**
 * @typedef InvalidPayloadRequest
 * @property {string} [message]
 */

/**
 * @typedef SuccessMessageResponse
 * @property {string} [message]
 */

/**
 * @typedef InventoryBrandRule
 * @property {string} [criteria]
 * @property {number[]} [brands]
 */

/**
 * @typedef StoreCriteriaRule
 * @property {number[]} [companies]
 * @property {number[]} [brands]
 */

/**
 * @typedef InventoryStoreRule
 * @property {string} [criteria]
 * @property {StoreCriteriaRule[]} [rules]
 * @property {number[]} [stores]
 */

/**
 * @typedef InventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */

/**
 * @typedef StorePriorityRule
 * @property {boolean} [enabled]
 * @property {string[]} [storetype_order]
 */

/**
 * @typedef ArticleAssignmentRule
 * @property {StorePriorityRule} [store_priority]
 */

/**
 * @typedef InventoryArticleAssignment
 * @property {boolean} [post_order_reassignment]
 * @property {ArticleAssignmentRule} [rules]
 */

/**
 * @typedef CompanyAboutAddress
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [country]
 * @property {string} [address_type]
 */

/**
 * @typedef UserEmail
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 */

/**
 * @typedef UserPhoneNumber
 * @property {boolean} [active]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {number} [country_code]
 * @property {string} [phone]
 */

/**
 * @typedef ApplicationInformation
 * @property {InformationAddress} [address]
 * @property {InformationSupport} [support]
 * @property {SocialLinks} [social_links]
 * @property {Links} [links]
 * @property {string} [copyright_text]
 * @property {string} [_id]
 * @property {BusinessHighlights} [business_highlights]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [__v]
 */

/**
 * @typedef InformationAddress
 * @property {string} [loc]
 * @property {string[]} [address_line]
 * @property {InformationPhone[]} [phone]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [pincode]
 */

/**
 * @typedef InformationPhone
 * @property {string} [code]
 * @property {string} [number]
 */

/**
 * @typedef InformationSupport
 * @property {string[]} [phone]
 * @property {string[]} [email]
 * @property {string} [timing]
 */

/**
 * @typedef SocialLinks
 * @property {FacebookLink} [facebook]
 * @property {InstagramLink} [instagram]
 * @property {TwitterLink} [twitter]
 * @property {PinterestLink} [pinterest]
 * @property {GooglePlusLink} [google_plus]
 * @property {YoutubeLink} [youtube]
 * @property {LinkedInLink} [linked_in]
 * @property {VimeoLink} [vimeo]
 * @property {BlogLink} [blog_link]
 */

/**
 * @typedef FacebookLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef InstagramLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef TwitterLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef PinterestLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef GooglePlusLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef YoutubeLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef LinkedInLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef VimeoLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef BlogLink
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [link]
 */

/**
 * @typedef Links
 * @property {string} [title]
 * @property {string} [link]
 */

/**
 * @typedef BusinessHighlights
 * @property {string} [_id]
 * @property {string} [title]
 * @property {string} [icon]
 * @property {string} [sub_title]
 */

/**
 * @typedef ApplicationDetail
 * @property {string} [name]
 * @property {string} [description]
 * @property {SecureUrl} [logo]
 * @property {SecureUrl} [mobile_logo]
 * @property {SecureUrl} [favicon]
 * @property {SecureUrl} [banner]
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {string} [_id]
 * @property {string} [slug]
 */

/**
 * @typedef CurrenciesResponse
 * @property {Currency[]} [items]
 */

/**
 * @typedef AppCurrencyResponse
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {Currency[]} [supported_currency]
 */

/**
 * @typedef StoreLatLong
 * @property {string} [type]
 * @property {number[]} [coordinates]
 */

/**
 * @typedef OptedStoreAddress
 * @property {string} [state]
 * @property {string} [address1]
 * @property {StoreLatLong} [lat_long]
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} [city]
 */

/**
 * @typedef OrderingStores
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 * @property {number[]} [deployed_stores]
 * @property {boolean} [all_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {number} [__v]
 */

/**
 * @typedef OrderingStoresResponse
 * @property {Page} [page]
 * @property {OrderingStore[]} [items]
 */

/**
 * @typedef CouponAction
 * @property {string} [action_date]
 * @property {string} [txn_mode]
 */

/**
 * @typedef RuleDefinition
 * @property {boolean} [is_exact]
 * @property {string} [currency_code]
 * @property {string} value_type
 * @property {string} calculate_on
 * @property {string} applicable_on
 * @property {string} type
 * @property {boolean} [auto_apply]
 * @property {string[]} [scope]
 */

/**
 * @typedef CouponSchedule
 * @property {string} [start]
 * @property {string} [cron]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 */

/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [types]
 * @property {string[]} [codes]
 * @property {string[]} [networks]
 * @property {PaymentAllowValue} [uses]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [user]
 * @property {number} [app]
 * @property {number} [total]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [maximum]
 * @property {UsesRemaining} [remaining]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef PriceRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef Restrictions
 * @property {Object} [payments]
 * @property {number[]} [user_groups]
 * @property {UsesRestriction} [uses]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {string[]} [platforms]
 * @property {PostOrder} [post_order]
 * @property {number[]} [ordering_stores]
 * @property {PriceRange} [price_range]
 * @property {string} [user_type]
 * @property {boolean} [coupon_allowed]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [subtitle]
 * @property {string} [title]
 */

/**
 * @typedef DisplayMeta
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [title]
 * @property {string} [description]
 * @property {DisplayMetaDict} [remove]
 */

/**
 * @typedef State
 * @property {boolean} [is_public]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_display]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef Validation
 * @property {boolean} [anonymous]
 * @property {string[]} [app_id]
 * @property {string} [user_registered_after]
 */

/**
 * @typedef Rule
 * @property {number} [max]
 * @property {number} [key]
 * @property {number} [min]
 * @property {number} [discount_qty]
 * @property {number} [value]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef CouponAdd
 * @property {CouponAction} [action]
 * @property {RuleDefinition} rule_definition
 * @property {CouponSchedule} [_schedule]
 * @property {Ownership} ownership
 * @property {string[]} [tags]
 * @property {Restrictions} [restrictions]
 * @property {string} code
 * @property {string} type_slug
 * @property {Identifier} identifiers
 * @property {DisplayMeta} display_meta
 * @property {State} [state]
 * @property {Validity} validity
 * @property {CouponAuthor} [author]
 * @property {Validation} [validation]
 * @property {Rule[]} rule
 * @property {CouponDateMeta} [date_meta]
 */

/**
 * @typedef CouponsResponse
 * @property {Page} [page]
 * @property {CouponAdd} [items]
 */

/**
 * @typedef SuccessMessage
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef OperationErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef CouponUpdate
 * @property {CouponAction} [action]
 * @property {RuleDefinition} rule_definition
 * @property {CouponSchedule} [_schedule]
 * @property {Ownership} ownership
 * @property {string[]} [tags]
 * @property {Restrictions} [restrictions]
 * @property {string} code
 * @property {string} type_slug
 * @property {Identifier} identifiers
 * @property {DisplayMeta} display_meta
 * @property {State} [state]
 * @property {Validity} validity
 * @property {CouponAuthor} [author]
 * @property {Validation} [validation]
 * @property {Rule[]} rule
 * @property {CouponDateMeta} [date_meta]
 */

/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive]
 * @property {CouponSchedule} [schedule]
 */

/**
 * @typedef Ownership1
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef CompareObject
 * @property {number} [greater_than]
 * @property {number} [less_than_equals]
 * @property {number} [greater_than_equals]
 * @property {number} [less_than]
 * @property {number} [equals]
 */

/**
 * @typedef ItemCriteria
 * @property {string[]} [product_tags]
 * @property {number[]} [item_company]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_exclude_company]
 * @property {boolean} [all_items]
 * @property {number[]} [item_category]
 * @property {number[]} [item_brand]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {CompareObject} [cart_total]
 * @property {CompareObject} [cart_quantity]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_store]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_id]
 * @property {number[]} [item_exclude_brand]
 * @property {string[]} [available_zones]
 * @property {string[]} [buy_rules]
 * @property {string[]} [item_size]
 * @property {number[]} [item_exclude_store]
 * @property {number[]} [item_exclude_category]
 */

/**
 * @typedef DiscountOffer
 * @property {number} [max_usage_per_transaction]
 * @property {number} [discount_price]
 * @property {boolean} [apportion_discount]
 * @property {number} [max_offer_quantity]
 * @property {string} [code]
 * @property {number} [discount_percentage]
 * @property {number} [min_offer_quantity]
 * @property {number} [max_discount_amount]
 * @property {number} [discount_amount]
 * @property {boolean} [partial_can_ret]
 */

/**
 * @typedef DiscountRule
 * @property {string} discount_type
 * @property {ItemCriteria} item_criteria
 * @property {DiscountOffer} offer
 * @property {string} buy_condition
 */

/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */

/**
 * @typedef PromotionPaymentModes
 * @property {string} type
 * @property {string[]} [codes]
 * @property {PaymentAllowValue1} [uses]
 */

/**
 * @typedef UserRegistered
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef UsesRemaining1
 * @property {number} [user]
 * @property {number} [total]
 */

/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [maximum]
 * @property {UsesRemaining1} [remaining]
 */

/**
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef Restrictions1
 * @property {PromotionPaymentModes[]} [payments]
 * @property {string[]} [user_id]
 * @property {number[]} [user_groups]
 * @property {UserRegistered} [user_registered]
 * @property {UsesRestriction1} uses
 * @property {string[]} [platforms]
 * @property {PostOrder1} [post_order]
 * @property {boolean} [anonymous_users]
 * @property {number} [order_quantity]
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [name]
 * @property {string} [offer_text]
 * @property {string} [description]
 * @property {string} [offer_label]
 */

/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */

/**
 * @typedef PromotionAction
 * @property {string} action_date
 * @property {string} action_type
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef PromotionSchedule
 * @property {string} start
 * @property {string} [cron]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 * @property {boolean} published
 */

/**
 * @typedef PromotionListItem
 * @property {string} promo_group
 * @property {Object} [_custom_json]
 * @property {Ownership1} ownership
 * @property {string} [code]
 * @property {string} promotion_type
 * @property {string} application_id
 * @property {string} mode
 * @property {string} [calculate_on]
 * @property {PromotionDateMeta} [date_meta]
 * @property {DiscountRule[]} discount_rules
 * @property {boolean} [apply_all_discount]
 * @property {Restrictions1} [restrictions]
 * @property {DisplayMeta1} display_meta
 * @property {Visibility} [visiblility]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionAuthor} [author]
 * @property {PromotionSchedule} [_schedule]
 * @property {boolean} [stackable]
 * @property {Object} buy_rules
 * @property {string} [apply_exclusive]
 * @property {string} [currency]
 * @property {number} [apply_priority]
 */

/**
 * @typedef PromotionsResponse
 * @property {Page} [page]
 * @property {PromotionListItem} [items]
 */

/**
 * @typedef PromotionAdd
 * @property {string} promo_group
 * @property {Object} [_custom_json]
 * @property {Ownership1} ownership
 * @property {string} [code]
 * @property {string} promotion_type
 * @property {string} application_id
 * @property {string} mode
 * @property {string} [calculate_on]
 * @property {PromotionDateMeta} [date_meta]
 * @property {DiscountRule[]} discount_rules
 * @property {boolean} [apply_all_discount]
 * @property {Restrictions1} [restrictions]
 * @property {DisplayMeta1} display_meta
 * @property {Visibility} [visiblility]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionAuthor} [author]
 * @property {PromotionSchedule} [_schedule]
 * @property {boolean} [stackable]
 * @property {Object} buy_rules
 * @property {string} [apply_exclusive]
 * @property {string} [currency]
 * @property {number} [apply_priority]
 */

/**
 * @typedef PromotionUpdate
 * @property {string} promo_group
 * @property {Object} [_custom_json]
 * @property {Ownership1} ownership
 * @property {string} [code]
 * @property {string} promotion_type
 * @property {string} application_id
 * @property {string} mode
 * @property {string} [calculate_on]
 * @property {PromotionDateMeta} [date_meta]
 * @property {DiscountRule[]} discount_rules
 * @property {boolean} [apply_all_discount]
 * @property {Restrictions1} [restrictions]
 * @property {DisplayMeta1} display_meta
 * @property {Visibility} [visiblility]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionAuthor} [author]
 * @property {PromotionSchedule} [_schedule]
 * @property {boolean} [stackable]
 * @property {Object} buy_rules
 * @property {string} [apply_exclusive]
 * @property {string} [currency]
 * @property {number} [apply_priority]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive]
 * @property {PromotionSchedule} [schedule]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [entity_type]
 * @property {string} [subtitle]
 * @property {string} [created_on]
 * @property {string} [example]
 * @property {string} [modified_on]
 * @property {boolean} [is_hidden]
 * @property {string} [description]
 * @property {string} [type]
 * @property {string} [entity_slug]
 * @property {string} [title]
 */

/**
 * @typedef CartItem
 * @property {string} size
 * @property {number} [quantity]
 * @property {string} product_id
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [key]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {string} [display]
 * @property {number} [value]
 * @property {string[]} [message]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [type]
 * @property {string} [code]
 * @property {string} [sub_title]
 * @property {number} [coupon_value]
 * @property {string} [title]
 * @property {string} [coupon_type]
 * @property {number} [max_discount_value]
 * @property {boolean} [is_applied]
 * @property {string} [description]
 * @property {string} [uid]
 * @property {number} [value]
 * @property {number} [minimum_cart_value]
 * @property {string} [message]
 */

/**
 * @typedef RawBreakup
 * @property {number} [discount]
 * @property {number} [delivery_charge]
 * @property {number} [gst_charges]
 * @property {number} [subtotal]
 * @property {number} [vog]
 * @property {number} [mrp_total]
 * @property {number} [coupon]
 * @property {number} [you_saved]
 * @property {number} [convenience_fee]
 * @property {number} [cod_charge]
 * @property {number} [fynd_cash]
 * @property {number} [total]
 */

/**
 * @typedef LoyaltyPoints
 * @property {string} [description]
 * @property {boolean} [is_applied]
 * @property {number} [total]
 * @property {number} [applicable]
 */

/**
 * @typedef CartBreakup
 * @property {DisplayBreakup[]} [display]
 * @property {CouponBreakup} [coupon]
 * @property {RawBreakup} [raw]
 * @property {LoyaltyPoints} [loyalty_points]
 */

/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */

/**
 * @typedef ProductAction
 * @property {string} [type]
 * @property {ActionQuery} [query]
 * @property {string} [url]
 */

/**
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef ProductImage
 * @property {string} [secure_url]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef CartProduct
 * @property {ProductAction} [action]
 * @property {string} [type]
 * @property {CategoryInfo[]} [categories]
 * @property {BaseInfo} [brand]
 * @property {string} [name]
 * @property {NetQuantity} [net_quantity]
 * @property {ProductImage[]} [images]
 * @property {number} [uid]
 * @property {string} [slug]
 */

/**
 * @typedef BasePrice
 * @property {string} [currency_code]
 * @property {number} [effective]
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */

/**
 * @typedef ProductArticle
 * @property {string} [type]
 * @property {string[]} [product_group_tags]
 * @property {number} [quantity]
 * @property {BaseInfo} [store]
 * @property {Object} [parent_item_identifiers]
 * @property {Object} [_custom_json]
 * @property {Object} [extra_meta]
 * @property {string} [size]
 * @property {BaseInfo} [seller]
 * @property {string} [uid]
 * @property {ArticlePriceInfo} [price]
 */

/**
 * @typedef ProductAvailability
 * @property {number} [other_store_quantity]
 * @property {boolean} [deliverable]
 * @property {string[]} [sizes]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef Ownership2
 * @property {string} [payable_by]
 * @property {string} [payable_category]
 */

/**
 * @typedef FreeGiftItem
 * @property {number} [item_id]
 * @property {string} [item_slug]
 * @property {string} [item_name]
 * @property {Object} [item_price_details]
 * @property {string[]} [item_images_url]
 * @property {string} [item_brand_name]
 */

/**
 * @typedef AppliedFreeArticles
 * @property {FreeGiftItem} [free_gift_item_details]
 * @property {string} [article_id]
 * @property {number} [quantity]
 * @property {string} [parent_item_identifier]
 */

/**
 * @typedef DiscountRulesApp
 * @property {Object} [item_criteria]
 * @property {Object} [offer]
 * @property {Object} [raw_offer]
 * @property {string[]} [matched_buy_rules]
 */

/**
 * @typedef AppliedPromotion
 * @property {number} [article_quantity]
 * @property {string} [promo_id]
 * @property {string} [promotion_name]
 * @property {string} [offer_text]
 * @property {Ownership2} [ownership]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_group]
 * @property {string} [promotion_type]
 * @property {number} [amount]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {boolean} [mrp_promotion]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef ProductPrice
 * @property {number} [marked]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [add_on]
 * @property {number} [selling]
 * @property {number} [effective]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef CartProductInfo
 * @property {CartProduct} [product]
 * @property {string} [key]
 * @property {number} [quantity]
 * @property {Object} [bulk_offer]
 * @property {Object} [parent_item_identifiers]
 * @property {ProductArticle} [article]
 * @property {ProductAvailability} [availability]
 * @property {boolean} [is_set]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {CartProductIdentifer} identifiers
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {string} [discount]
 * @property {PromoMeta} [promo_meta]
 * @property {string} [coupon_message]
 * @property {ProductPriceInfo} [price]
 * @property {string} [message]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {boolean} [success]
 * @property {Object} [errors]
 * @property {string} [message]
 */

/**
 * @typedef ShippingAddress
 * @property {number} [phone]
 * @property {string} [country_iso_code]
 * @property {number} [pincode]
 * @property {string} [area_code_slug]
 * @property {string} [address_type]
 * @property {string} [country_code]
 * @property {string} [country_phone_code]
 * @property {string} [address]
 * @property {string} [email]
 * @property {string} [city]
 * @property {string} [name]
 * @property {string} area_code
 * @property {string} [country]
 * @property {Object} [meta]
 * @property {string} [area]
 * @property {string} [landmark]
 * @property {string} [state]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {ShippingAddress} shipping_address
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef PromiseFormatted
 * @property {string} [min]
 * @property {string} [max]
 */

/**
 * @typedef PromiseTimestamp
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef ShipmentPromise
 * @property {PromiseFormatted} [formatted]
 * @property {PromiseTimestamp} [timestamp]
 */

/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef CartItemMeta
 * @property {string} [group_id]
 * @property {boolean} [primary_item]
 */

/**
 * @typedef OpenApiFiles
 * @property {string} key
 * @property {string[]} values
 */

/**
 * @typedef OpenApiOrderItem
 * @property {number} coupon_effective_discount
 * @property {number} product_id
 * @property {number} [quantity]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} size
 * @property {Object} [extra_meta]
 * @property {number} price_marked
 * @property {number} cod_charges
 * @property {number} amount_paid
 * @property {number} price_effective
 * @property {number} [loyalty_discount]
 * @property {number} delivery_charges
 * @property {CartItemMeta} [meta]
 * @property {OpenApiFiles[]} [files]
 * @property {number} discount
 * @property {number} [employee_discount]
 * @property {number} cashback_applied
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [affiliate_order_id]
 * @property {number} coupon_value
 * @property {number} cod_charges
 * @property {string} [gstin]
 * @property {string} [currency_code]
 * @property {string} coupon_code
 * @property {number} delivery_charges
 * @property {OpenApiOrderItem[]} cart_items
 * @property {OpenApiFiles[]} [files]
 * @property {string} [comment]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} [order_id]
 * @property {string} [payment_mode]
 * @property {number} [loyalty_discount]
 * @property {string} [coupon]
 * @property {number} cart_value
 * @property {Object} [employee_discount]
 * @property {number} cashback_applied
 * @property {ShippingAddress} billing_address
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} order_id
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} [order_ref_id]
 */

/**
 * @typedef AbandonedCart
 * @property {boolean} [is_active]
 * @property {string} [checkout_mode]
 * @property {Object} [cod_charges]
 * @property {Object} [pick_up_customer_details]
 * @property {Object} [fynd_credits]
 * @property {Object} [delivery_charges]
 * @property {boolean} [merge_qty]
 * @property {Object} [promotion]
 * @property {Object} [payments]
 * @property {boolean} [is_archive]
 * @property {Object[]} [payment_methods]
 * @property {string} [order_id]
 * @property {Object} [meta]
 * @property {number} [cart_value]
 * @property {Object[]} articles
 * @property {string} last_modified
 * @property {string} user_id
 * @property {string} created_on
 * @property {Object[]} [shipments]
 * @property {number} [bulk_coupon_discount]
 * @property {string} [gstin]
 * @property {string} [app_id]
 * @property {number} uid
 * @property {string} [comment]
 * @property {string} expire_at
 * @property {number[]} [fc_index_map]
 * @property {boolean} is_default
 * @property {boolean} [buy_now]
 * @property {Object} cashback
 * @property {string} [payment_mode]
 * @property {Object} [coupon]
 * @property {number} [discount]
 * @property {string} _id
 */

/**
 * @typedef AbandonedCartResponse
 * @property {Object} [result]
 * @property {string} [message]
 * @property {Page} [page]
 * @property {boolean} [success]
 * @property {AbandonedCart[]} [items]
 */

/**
 * @typedef CartCurrency
 * @property {string} [symbol]
 * @property {string} [code]
 */

/**
 * @typedef CartDetailResponse
 * @property {boolean} [restrict_checkout]
 * @property {string} [last_modified]
 * @property {string} [id]
 * @property {string} [message]
 * @property {string} [pan_no]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [buy_now]
 * @property {string} [checkout_mode]
 * @property {CartCurrency} [currency]
 * @property {string} [delivery_charge_info]
 * @property {string} [gstin]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [coupon_text]
 * @property {boolean} [is_valid]
 * @property {string} [comment]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef AddProductCart
 * @property {number} [item_id]
 * @property {string[]} [product_group_tags]
 * @property {number} [quantity]
 * @property {string} [article_id]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [seller_id]
 * @property {string} [item_size]
 * @property {Object} [extra_meta]
 * @property {Object} [_custom_json]
 * @property {boolean} [pos]
 * @property {Object} [article_assignment]
 * @property {string} [display]
 * @property {number} [store_id]
 */

/**
 * @typedef AddCartRequest
 * @property {boolean} [new_cart]
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {boolean} [partial]
 */

/**
 * @typedef UpdateProductCart
 * @property {number} [item_id]
 * @property {number} [quantity]
 * @property {string} [article_id]
 * @property {Object} [parent_item_identifiers]
 * @property {Object} [_custom_json]
 * @property {string} [item_size]
 * @property {Object} [extra_meta]
 * @property {CartProductIdentifer} identifiers
 * @property {number} [item_index]
 */

/**
 * @typedef UpdateCartRequest
 * @property {UpdateProductCart[]} [items]
 * @property {string} operation
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef GetShareCartLinkRequest
 * @property {string} [id]
 * @property {Object} [meta]
 */

/**
 * @typedef GetShareCartLinkResponse
 * @property {string} [token]
 * @property {string} [share_url]
 */

/**
 * @typedef SharedCartDetails
 * @property {string} [token]
 * @property {Object} [source]
 * @property {string} [created_on]
 * @property {Object} [meta]
 * @property {Object} [user]
 */

/**
 * @typedef SharedCart
 * @property {string} [id]
 * @property {string} [checkout_mode]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [restrict_checkout]
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {CartBreakup} [breakup_values]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {number} [cart_id]
 * @property {string} [last_modified]
 * @property {string} [gstin]
 * @property {string} [comment]
 * @property {string} [uid]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [buy_now]
 * @property {CartCurrency} [currency]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [coupon_text]
 * @property {boolean} [is_valid]
 * @property {string} [message]
 */

/**
 * @typedef SharedCartResponse
 * @property {SharedCart} [cart]
 * @property {string} [error]
 */

/**
 * @typedef CartList
 * @property {string} [user_id]
 * @property {string} [created_on]
 * @property {string} [item_counts]
 * @property {string} [cart_value]
 * @property {string} [cart_id]
 */

/**
 * @typedef MultiCartResponse
 * @property {boolean} [success]
 * @property {CartList[]} [data]
 */

/**
 * @typedef UpdateUserCartMapping
 * @property {string} user_id
 */

/**
 * @typedef UserCartMappingResponse
 * @property {boolean} [restrict_checkout]
 * @property {string} [last_modified]
 * @property {string} [id]
 * @property {string} [message]
 * @property {string} [pan_no]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [buy_now]
 * @property {string} [checkout_mode]
 * @property {CartCurrency} [currency]
 * @property {string} [delivery_charge_info]
 * @property {string} [gstin]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [coupon_text]
 * @property {UserInfo} [user]
 * @property {boolean} [is_valid]
 * @property {string} [comment]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef DeleteCartDetailResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef CartItemCountResponse
 * @property {number} [user_cart_items_count]
 */

/**
 * @typedef PageCoupon
 * @property {boolean} [has_previous]
 * @property {number} [total_item_count]
 * @property {boolean} [has_next]
 * @property {number} [current]
 * @property {number} [total]
 */

/**
 * @typedef Coupon
 * @property {string} [message]
 * @property {string} [expires_on]
 * @property {boolean} [is_applicable]
 * @property {number} [coupon_value]
 * @property {string} [sub_title]
 * @property {string} [coupon_type]
 * @property {string} [coupon_code]
 * @property {number} [max_discount_value]
 * @property {boolean} [is_applied]
 * @property {string} [description]
 * @property {number} [minimum_cart_value]
 * @property {string} [title]
 */

/**
 * @typedef GetCouponResponse
 * @property {PageCoupon} [page]
 * @property {Coupon[]} [available_coupon_list]
 */

/**
 * @typedef ApplyCouponRequest
 * @property {string} coupon_code
 */

/**
 * @typedef GeoLocation
 * @property {number} [latitude]
 * @property {number} [longitude]
 */

/**
 * @typedef PlatformAddress
 * @property {string} [phone]
 * @property {string} [id]
 * @property {string} [area_code_slug]
 * @property {boolean} [is_active]
 * @property {string} [country_code]
 * @property {string} [checkout_mode]
 * @property {string} [city]
 * @property {string} [name]
 * @property {string} [area]
 * @property {Object} [google_map_point]
 * @property {GeoLocation} [geo_location]
 * @property {string} [area_code]
 * @property {string} [state]
 * @property {Object} [meta]
 * @property {string} [cart_id]
 * @property {string} [user_id]
 * @property {string} [address_type]
 * @property {string} [address]
 * @property {string} [country]
 * @property {string} [landmark]
 * @property {boolean} [is_default_address]
 * @property {string[]} [tags]
 * @property {string} [email]
 * @property {string} [created_by_user_id]
 */

/**
 * @typedef PlatformGetAddressesResponse
 * @property {PlatformAddress[]} [address]
 */

/**
 * @typedef SaveAddressResponse
 * @property {boolean} [is_default_address]
 * @property {string} [id]
 * @property {boolean} [success]
 */

/**
 * @typedef UpdateAddressResponse
 * @property {string} [id]
 * @property {boolean} [success]
 * @property {boolean} [is_updated]
 * @property {boolean} [is_default_address]
 */

/**
 * @typedef DeleteAddressResponse
 * @property {boolean} [is_deleted]
 * @property {string} [id]
 */

/**
 * @typedef PlatformSelectCartAddressRequest
 * @property {string} [id]
 * @property {string} [checkout_mode]
 * @property {string} [billing_address_id]
 * @property {string} [cart_id]
 */

/**
 * @typedef ShipmentResponse
 * @property {Object} [dp_options]
 * @property {string} [order_type]
 * @property {string} [dp_id]
 * @property {string} [fulfillment_type]
 * @property {number} [shipments]
 * @property {number} [fulfillment_id]
 * @property {string} [shipment_type]
 * @property {ShipmentPromise} [promise]
 * @property {string} [box_type]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef CartShipmentsResponse
 * @property {string} [last_modified]
 * @property {string} [id]
 * @property {ShipmentResponse[]} [shipments]
 * @property {string} [checkout_mode]
 * @property {string} [delivery_charge_info]
 * @property {string} [gstin]
 * @property {string} [comment]
 * @property {string} [uid]
 * @property {boolean} [restrict_checkout]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [buy_now]
 * @property {CartCurrency} [currency]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [coupon_text]
 * @property {boolean} [is_valid]
 * @property {boolean} [error]
 * @property {number} [cart_id]
 */

/**
 * @typedef UpdateCartShipmentItem
 * @property {number} [quantity]
 * @property {string} article_uid
 * @property {string} shipment_type
 */

/**
 * @typedef UpdateCartShipmentRequest
 * @property {UpdateCartShipmentItem[]} shipments
 */

/**
 * @typedef PlatformCartMetaRequest
 * @property {string} [pan_no]
 * @property {string} [checkout_mode]
 * @property {string} [gstin]
 * @property {Object} [pick_up_customer_details]
 * @property {string} [comment]
 */

/**
 * @typedef CartMetaResponse
 * @property {string} [message]
 */

/**
 * @typedef CartMetaMissingResponse
 * @property {string[]} [errors]
 */

/**
 * @typedef StaffCheckout
 * @property {string} [employee_code]
 * @property {string} first_name
 * @property {string} user
 * @property {string} last_name
 * @property {string} _id
 */

/**
 * @typedef Files
 * @property {string} key
 * @property {string[]} values
 */

/**
 * @typedef PlatformCartCheckoutDetailRequest
 * @property {string} id
 * @property {string} [billing_address_id]
 * @property {Object} [delivery_address]
 * @property {Object} [extra_meta]
 * @property {string} [aggregator]
 * @property {boolean} [payment_auto_confirm]
 * @property {number} [ordering_store]
 * @property {string} [payment_identifier]
 * @property {boolean} [pos]
 * @property {Object} [meta]
 * @property {string} user_id
 * @property {Object} [payment_params]
 * @property {string} [merchant_code]
 * @property {string} [callback_url]
 * @property {number} [pick_at_store_uid]
 * @property {StaffCheckout} [staff]
 * @property {string} order_type
 * @property {string} [address_id]
 * @property {string} payment_mode
 * @property {Files[]} [files]
 * @property {Object} [billing_address]
 */

/**
 * @typedef CheckCart
 * @property {string} [id]
 * @property {string} [checkout_mode]
 * @property {number} [cod_charges]
 * @property {string} [delivery_charge_info]
 * @property {number} [delivery_charges]
 * @property {number} [delivery_charge_order_value]
 * @property {boolean} [success]
 * @property {boolean} [restrict_checkout]
 * @property {string} [store_code]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [order_id]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [error_message]
 * @property {number} [cart_id]
 * @property {string} [last_modified]
 * @property {string} [gstin]
 * @property {string} [comment]
 * @property {string} [uid]
 * @property {string} [user_type]
 * @property {CartProductInfo[]} [items]
 * @property {Object[]} [store_emps]
 * @property {boolean} [buy_now]
 * @property {CartCurrency} [currency]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [cod_message]
 * @property {string} [coupon_text]
 * @property {boolean} [is_valid]
 * @property {string} [message]
 * @property {boolean} [cod_available]
 */

/**
 * @typedef CartCheckoutResponse
 * @property {CheckCart} [cart]
 * @property {Object} [data]
 * @property {string} [callback_url]
 * @property {string} [payment_confirm_url]
 * @property {string} [order_id]
 * @property {string} [app_intercept_url]
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef CartDeliveryModesResponse
 * @property {number[]} [pickup_stores]
 * @property {string[]} [available_modes]
 */

/**
 * @typedef PickupStoreDetail
 * @property {string} [phone]
 * @property {string} [store_code]
 * @property {number} [id]
 * @property {number} [pincode]
 * @property {string} [area_code_slug]
 * @property {string} [address_type]
 * @property {string} [address]
 * @property {string} [email]
 * @property {string} [country]
 * @property {string} [name]
 * @property {string} [area_code]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [area]
 * @property {string} [landmark]
 * @property {number} [uid]
 */

/**
 * @typedef StoreDetailsResponse
 * @property {PickupStoreDetail[]} [items]
 */

/**
 * @typedef UpdateCartPaymentRequest
 * @property {string} [id]
 * @property {string} [merchant_code]
 * @property {string} [payment_identifier]
 * @property {string} [aggregator_name]
 * @property {string} [payment_mode]
 * @property {string} [address_id]
 */

/**
 * @typedef CouponValidity
 * @property {string} [display_message_en]
 * @property {string} [code]
 * @property {number} [discount]
 * @property {boolean} [valid]
 * @property {string} [title]
 */

/**
 * @typedef PaymentCouponValidate
 * @property {CouponValidity} [coupon_validity]
 * @property {boolean} success
 * @property {string} [message]
 */

/**
 * @typedef E
 * @property {number} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 */

/**
 * @typedef GiveawayResponse
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Giveaway
 * @property {string} [_id]
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {RewardsAudience} [audience]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {RewardsRule} [rule]
 * @property {string} [title]
 * @property {string} [updated_at]
 */

/**
 * @typedef Schedule
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 * @property {string} [cron]
 */

/**
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */

/**
 * @typedef RewardsRule
 * @property {number} [amount]
 */

/**
 * @typedef Offer
 * @property {Schedule} [_schedule]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {Asset} [banner_image]
 * @property {string} [created_at]
 * @property {string} [name]
 * @property {Object} [rule]
 * @property {ShareMessages} [share]
 * @property {string} [sub_text]
 * @property {string} [text]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [url]
 */

/**
 * @typedef ShareMessages
 * @property {number} [email]
 * @property {string} [facebook]
 * @property {string} [fallback]
 * @property {string} [message]
 * @property {string} [messenger]
 * @property {string} [sms]
 * @property {string} [text]
 * @property {string} [twitter]
 * @property {string} [whatsapp]
 */

/**
 * @typedef UserRes
 * @property {Points} [points]
 * @property {RewardUser} [user]
 */

/**
 * @typedef Points
 * @property {number} [available]
 */

/**
 * @typedef RewardUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {Referral} [referral]
 * @property {number} [uid]
 * @property {string} [updated_at]
 * @property {string} [user_block_reason]
 * @property {string} [user_id]
 */

/**
 * @typedef Referral
 * @property {string} [code]
 */

/**
 * @typedef AppUser
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [block_reason]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [user_id]
 */

/**
 * @typedef GiveawayAudience
 * @property {string} [audience_id]
 * @property {number} [current_count]
 */

/**
 * @typedef HistoryRes
 * @property {PointsHistory[]} [items]
 * @property {Page} [page]
 * @property {number} [points]
 */

/**
 * @typedef PointsHistory
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {boolean} [claimed]
 * @property {string} [created_at]
 * @property {string} [expires_on]
 * @property {Object} [meta]
 * @property {number} [points]
 * @property {number} [remaining_points]
 * @property {string} [text_1]
 * @property {string} [text_2]
 * @property {string} [text_3]
 * @property {string} [txn_name]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 */

/**
 * @typedef ConfigurationRes
 * @property {string[]} [valid_android_packages]
 * @property {string} [terms_conditions_link]
 * @property {string} [application_id]
 * @property {boolean} [success]
 */

/**
 * @typedef SetConfigurationRes
 * @property {boolean} [success]
 */

/**
 * @typedef ConfigurationRequest
 * @property {string[]} [valid_android_packages]
 * @property {string} [terms_conditions_link]
 */

/**
 * @typedef StatGroup
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 */

/**
 * @typedef StatsGroups
 * @property {StatGroup[]} [groups]
 */

/**
 * @typedef StatsGroupComponent
 * @property {string} [key]
 * @property {string} [url]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [filters]
 */

/**
 * @typedef StatsGroupComponents
 * @property {string} [title]
 * @property {StatsGroupComponent[]} [components]
 */

/**
 * @typedef StatsRes
 * @property {string} [key]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [data]
 */

/**
 * @typedef ReceivedAt
 * @property {string} [value]
 */

/**
 * @typedef AbandonCartsDetail
 * @property {string} [properties_cart_id]
 * @property {string} [context_traits_first_name]
 * @property {string} [context_traits_last_name]
 * @property {string} [context_traits_phone_number]
 * @property {string} [context_traits_email]
 * @property {string} [context_app_application_id]
 * @property {string} [properties_breakup_values_raw_total]
 * @property {ReceivedAt} [received_at]
 */

/**
 * @typedef AbandonCartsList
 * @property {AbandonCartsDetail[]} [items]
 * @property {string} [cart_total]
 * @property {Page} [page]
 */

/**
 * @typedef AbandonCartDetail
 * @property {string} [_id]
 * @property {string} [user_id]
 * @property {string} [cart_value]
 * @property {Object[]} [articles]
 * @property {Object} [breakup]
 * @property {Object} [address]
 */

/**
 * @typedef ExportJobReq
 * @property {string} [marketplace_name]
 * @property {string} [start_time]
 * @property {string} [end_time]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 */

/**
 * @typedef ExportJobRes
 * @property {string} [status]
 * @property {string} [job_id]
 */

/**
 * @typedef ExportJobStatusRes
 * @property {string} [status]
 * @property {string} [job_id]
 * @property {string} [download_url]
 */

/**
 * @typedef GetLogsListReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 */

/**
 * @typedef MkpLogsResp
 * @property {string} [start_time_iso]
 * @property {string} [end_time_iso]
 * @property {string} [event_type]
 * @property {string} [trace_id]
 * @property {string} [count]
 * @property {string} [status]
 */

/**
 * @typedef GetLogsListRes
 * @property {MkpLogsResp[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SearchLogReq
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 * @property {string} [company_id]
 * @property {string} [end_date]
 * @property {string} [identifier]
 * @property {string} [identifier_value]
 */

/**
 * @typedef LogInfo
 * @property {string} [_id]
 * @property {string} [status]
 * @property {string} [event_type]
 * @property {string} [marketplace_name]
 * @property {string} [event]
 * @property {string} [trace_id]
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {number} [item_id]
 * @property {string} [article_id]
 * @property {string} [seller_identifier]
 */

/**
 * @typedef SearchLogRes
 * @property {LogInfo[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ValidityObject
 * @property {string} start
 * @property {string} end
 */

/**
 * @typedef CreateUpdateDiscount
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} app_ids
 * @property {string[]} extension_ids
 * @property {string} job_type
 * @property {string} discount_type
 * @property {string} discount_level
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 */

/**
 * @typedef DiscountJob
 * @property {string} _id
 * @property {string} name
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {string[]} [app_ids]
 * @property {string} [job_type]
 * @property {string} [discount_type]
 * @property {string} [discount_level]
 * @property {number} [value]
 * @property {string} [file_path]
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {string} created_on
 * @property {string} modified_on
 * @property {UserDetails} created_by
 * @property {UserDetails} modified_by
 * @property {Object} [meta]
 */

/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items
 * @property {Page} page
 */

/**
 * @typedef DiscountItems
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 * @property {string} [seller_identifier]
 * @property {string} discount_type
 * @property {number} value
 */

/**
 * @typedef BulkDiscount
 * @property {number} company_id
 * @property {DiscountItems[]} items
 */

/**
 * @typedef FileJobResponse
 * @property {string} stage
 * @property {number} total
 * @property {number} failed
 * @property {number} company_id
 * @property {Object} [body]
 * @property {string} type
 * @property {string} file_type
 */

/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */

/**
 * @typedef CancelJobResponse
 * @property {boolean} success
 */

/**
 * @typedef UserDetails
 * @property {string} username
 * @property {string} user_id
 */

/**
 * @typedef BadRequestObject
 * @property {string} message
 */

/**
 * @typedef AddProxyReq
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 */

/**
 * @typedef AddProxyResponse
 * @property {string} [_id]
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 * @property {string} [company_id]
 * @property {string} [application_id]
 * @property {string} [extension_id]
 * @property {string} [created_at]
 * @property {string} [modified_at]
 */

/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [info]
 * @property {string} [request_id]
 * @property {Object} [meta]
 */

/**
 * @typedef RemoveProxyResponse
 * @property {string} [message]
 * @property {Object} [data]
 */

/**
 * @typedef EventConfig
 * @property {number} [id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 * @property {string} [display_name]
 * @property {string} [description]
 * @property {string} [created_on]
 */

/**
 * @typedef EventConfigList
 * @property {EventConfig[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EventConfigResponse
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef EventProcessedStatus
 * @property {number} [id]
 * @property {string} [subscriber_id]
 * @property {number} [attempt]
 * @property {string} [response_code]
 * @property {string} [response_message]
 * @property {string} [created_on]
 * @property {string} [processed_on]
 * @property {boolean} [status]
 */

/**
 * @typedef EventPayload
 * @property {number} [id]
 * @property {string} [event_trace_id]
 * @property {string} [message_id]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
 * @property {boolean} [status]
 */

/**
 * @typedef SubscriberConfig
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {SubscriberStatus} [status]
 * @property {string} [email_id]
 * @property {AuthMeta} [auth_meta]
 * @property {number[]} [event_id]
 */

/**
 * @typedef SubscriberResponse
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [webhook_url]
 * @property {Association} [association]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {SubscriberStatus} [status]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {string} [updated_on]
 * @property {EventConfig[]} [event_configs]
 */

/**
 * @typedef SubscriberEvent
 * @property {number} [id]
 * @property {number} [subscriber_id]
 * @property {number} [event_id]
 * @property {string} [created_date]
 */

/**
 * @typedef AuthMeta
 * @property {string} [type]
 * @property {string} [secret]
 */

/**
 * @typedef Association
 * @property {number} [company_id]
 * @property {string[]} [application_id]
 * @property {string} [extension_id]
 * @property {string} [criteria]
 */

/**
 * @typedef EventConfigBase
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [event_category]
 * @property {string} [version]
 */

/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */

/**
 * @typedef CreateLogResponse
 * @property {string} [message]
 * @property {string} [internal_message]
 */

/**
 * @typedef LogMetaObj
 * @property {Object} [modifier]
 * @property {string} [application]
 * @property {EntityObject} [entity]
 * @property {Object} [device_info]
 * @property {Object} [location]
 */

/**
 * @typedef EntityObject
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 */

/**
 * @typedef LogSchemaResponse
 * @property {LogDocs[]} [docs]
 */

/**
 * @typedef LogDocs
 * @property {EntityObj} [entity]
 * @property {Modifier} [modifier]
 * @property {DeviceInfo} [device_info]
 * @property {Location} [location]
 * @property {string} [_id]
 * @property {string} [company]
 * @property {string} [application]
 * @property {string} [sessions]
 * @property {string} [date]
 * @property {Object} [logs]
 */

/**
 * @typedef EntityObj
 * @property {string} [id]
 * @property {string} [type]
 * @property {string} [action]
 * @property {Object} [entity_details]
 */

/**
 * @typedef Modifier
 * @property {string} [user_id]
 * @property {boolean} [as_administrator]
 * @property {Object} [user_details]
 */

/**
 * @typedef DeviceInfo
 * @property {string} [user_agent]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef Location
 * @property {Object} [extra_meta]
 */

/**
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */

/**
 * @typedef EntityTypeObj
 * @property {string} [entity_value]
 * @property {string} [display_name]
 */

module.exports = PlatformClient;
