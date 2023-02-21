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
 * @typedef LocationCountry
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
 */

/**
 * @typedef Locations
 * @property {Object[]} [items]
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
 * @property {SubNavigationReference[]} [sub_navigation]
 */

/**
 * @typedef SubNavigationReference
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
 * @property {string[]} excluded_fields
 * @property {string[]} display_fields
 * @property {boolean} success
 * @property {Object[]} [aggregators]
 * @property {boolean} created
 * @property {string} app_id
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} description
 * @property {string} code
 * @property {boolean} success
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} config_type
 * @property {boolean} [is_active]
 * @property {string} key
 * @property {string} secret
 * @property {string} merchant_salt
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {string} app_id
 * @property {boolean} [is_active]
 * @property {PaymentGatewayConfig} [aggregator_name]
 */

/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {boolean} success
 * @property {string[]} aggregator
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} description
 * @property {string} code
 */

/**
 * @typedef HttpErrorCodeAndResponse
 * @property {boolean} success
 * @property {ErrorCodeAndDescription} error
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [package_name]
 * @property {string} [code]
 */

/**
 * @typedef PaymentModeLogo
 * @property {string} small
 * @property {string} large
 */

/**
 * @typedef IntentApp
 * @property {string} [display_name]
 * @property {string} [code]
 * @property {string} [package_name]
 * @property {PaymentModeLogo} [logos]
 */

/**
 * @typedef PaymentModeList
 * @property {string} [card_token]
 * @property {string} [code]
 * @property {string} [card_name]
 * @property {string} aggregator_name
 * @property {string} [name]
 * @property {number} [exp_month]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {number} [cod_limit]
 * @property {string} [card_id]
 * @property {number} [cod_limit_per_order]
 * @property {string} [card_fingerprint]
 * @property {PaymentModeLogo} [logo_url]
 * @property {number} [remaining_limit]
 * @property {string} [card_type]
 * @property {number} [timeout]
 * @property {boolean} [intent_flow]
 * @property {string} [card_brand_image]
 * @property {string} [display_name]
 * @property {string} [nickname]
 * @property {string} [card_issuer]
 * @property {string[]} [intent_app_error_list]
 * @property {number} [exp_year]
 * @property {number} [retry_count]
 * @property {string} [card_brand]
 * @property {string} [card_number]
 * @property {string} [merchant_code]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [card_reference]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {number} [display_priority]
 * @property {string} [card_isin]
 * @property {boolean} [expired]
 * @property {string} [fynd_vpa]
 */

/**
 * @typedef RootPaymentMode
 * @property {string} display_name
 * @property {boolean} [save_card]
 * @property {PaymentModeList[]} [list]
 * @property {string} [aggregator_name]
 * @property {number} display_priority
 * @property {boolean} [anonymous_enable]
 * @property {string} name
 * @property {boolean} [is_pay_by_card_pl]
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
 * @property {Object} more_attributes
 * @property {boolean} is_default
 * @property {boolean} is_active
 * @property {Object} customers
 * @property {Object[]} payouts_aggregators
 * @property {Object} unique_transfer_no
 * @property {string} transfer_type
 */

/**
 * @typedef PayoutsResponse
 * @property {Payout[]} items
 * @property {boolean} success
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} [state]
 * @property {string} [branch_name]
 * @property {string} [account_holder]
 * @property {number} [pincode]
 * @property {string} [account_no]
 * @property {string} [city]
 * @property {string} ifsc_code
 * @property {string} [country]
 * @property {string} account_type
 * @property {string} [bank_name]
 */

/**
 * @typedef PayoutRequest
 * @property {string} aggregator
 * @property {PayoutBankDetails} bank_details
 * @property {string} unique_external_id
 * @property {boolean} is_active
 * @property {Object} users
 * @property {string} transfer_type
 */

/**
 * @typedef PayoutResponse
 * @property {Object} bank_details
 * @property {string} aggregator
 * @property {string} payment_status
 * @property {boolean} success
 * @property {boolean} is_active
 * @property {Object} users
 * @property {boolean} created
 * @property {Object} payouts
 * @property {string} unique_transfer_no
 * @property {string} transfer_type
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_default
 * @property {boolean} success
 * @property {boolean} is_active
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {string} unique_external_id
 * @property {boolean} is_active
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
 * @property {Object} config
 * @property {boolean} success
 * @property {string} aggregator
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
 * @property {string} message
 * @property {Object} [data]
 * @property {boolean} success
 * @property {boolean} [is_verified_flag]
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} description
 * @property {string} code
 * @property {boolean} success
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} branch_name
 * @property {string} account_holder
 * @property {string} account_no
 * @property {string} ifsc_code
 * @property {string} bank_name
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {BankDetailsForOTP} details
 * @property {string} order_id
 */

/**
 * @typedef IfscCodeResponse
 * @property {string} branch_name
 * @property {string} bank_name
 * @property {boolean} [success]
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} address
 * @property {string} [branch_name]
 * @property {string} account_holder
 * @property {boolean} is_active
 * @property {string} created_on
 * @property {string} transfer_mode
 * @property {string} email
 * @property {number} id
 * @property {string} bank_name
 * @property {string} subtitle
 * @property {string} display_name
 * @property {string} title
 * @property {string} [comment]
 * @property {string} ifsc_code
 * @property {string} beneficiary_id
 * @property {string} [mobile]
 * @property {string} account_no
 * @property {string} modified_on
 * @property {string} [delights_user_name]
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {Object} [extra_meta]
 * @property {string} [order_id]
 * @property {string} [payment_id]
 * @property {string} [current_status]
 * @property {string} [payment_gateway]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} mode
 * @property {string} [name]
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {number} amount
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} order_id
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {string} message
 * @property {boolean} success
 * @property {string} order_id
 */

/**
 * @typedef PlatformPaymentOptions
 * @property {Object} [payment_selection_lock]
 * @property {number} [cod_charges]
 * @property {number} [cod_amount_limit]
 * @property {string} mode_of_payment
 * @property {Object} methods
 * @property {boolean} enabled
 * @property {string} source
 * @property {boolean} [anonymous_cod]
 * @property {Object} [callback_url]
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
 * @property {number} [cod_amount_limit]
 * @property {Object} methods
 * @property {boolean} [anonymous_cod]
 */

/**
 * @typedef CODdata
 * @property {number} remaining_limit
 * @property {string} user_id
 * @property {number} usages
 * @property {boolean} is_active
 * @property {number} limit
 */

/**
 * @typedef GetUserCODLimitResponse
 * @property {CODdata} user_cod_data
 * @property {boolean} success
 */

/**
 * @typedef SetCODForUserRequest
 * @property {string} merchant_user_id
 * @property {string} mobileno
 * @property {boolean} is_active
 */

/**
 * @typedef SetCODOptionResponse
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef EdcDevice
 * @property {string} application_id
 * @property {string} terminal_serial_no
 * @property {number} store_id
 * @property {string} is_active
 * @property {string} terminal_unique_identifier
 * @property {string} [merchant_store_pos_code]
 * @property {string} device_tag
 * @property {number} aggregator_id
 * @property {string} edc_device_serial_no
 */

/**
 * @typedef EdcDeviceDetailsResponse
 * @property {EdcDevice} data
 * @property {boolean} success
 */

/**
 * @typedef EdcAddRequest
 * @property {string} terminal_serial_no
 * @property {number} [store_id]
 * @property {string} [device_tag]
 * @property {number} aggregator_id
 * @property {string} edc_serial_no
 */

/**
 * @typedef EdcDeviceAddResponse
 * @property {EdcDevice} data
 * @property {boolean} success
 */

/**
 * @typedef EdcUpdateRequest
 * @property {string} terminal_serial_no
 * @property {number} [store_id]
 * @property {string} [is_active]
 * @property {string} [merchant_store_pos_code]
 * @property {string} [device_tag]
 * @property {number} [aggregator_id]
 */

/**
 * @typedef EdcDeviceUpdateResponse
 * @property {boolean} success
 */

/**
 * @typedef EdcDeviceListResponse
 * @property {number} current_page
 * @property {number} total_page
 * @property {number} device_count
 * @property {boolean} next_page
 * @property {number} inactive_device_count
 * @property {number} active_device_count
 * @property {boolean} success
 * @property {number} total_stores
 * @property {EdcDevice[]} device_list
 */

/**
 * @typedef PaymentInitializationRequest
 * @property {string} [device_id]
 * @property {string} order_id
 * @property {string} [razorpay_payment_id]
 * @property {string} aggregator
 * @property {string} customer_id
 * @property {number} [timeout]
 * @property {string} merchant_order_id
 * @property {string} [vpa]
 * @property {string} email
 * @property {string} currency
 * @property {string} contact
 * @property {string} method
 * @property {number} amount
 */

/**
 * @typedef PaymentInitializationResponse
 * @property {string} [device_id]
 * @property {string} [virtual_id]
 * @property {string} aggregator
 * @property {string} [razorpay_payment_id]
 * @property {string} [status]
 * @property {string} [customer_id]
 * @property {string} merchant_order_id
 * @property {boolean} success
 * @property {string} [aggregator_order_id]
 * @property {string} [vpa]
 * @property {string} [upi_poll_url]
 * @property {number} [timeout]
 * @property {string} [currency]
 * @property {string} polling_url
 * @property {string} [bqr_image]
 * @property {string} method
 * @property {number} [amount]
 */

/**
 * @typedef PaymentStatusUpdateRequest
 * @property {string} [device_id]
 * @property {string} order_id
 * @property {string} aggregator
 * @property {string} status
 * @property {string} customer_id
 * @property {string} merchant_order_id
 * @property {string} [vpa]
 * @property {string} email
 * @property {string} currency
 * @property {string} contact
 * @property {string} method
 * @property {number} amount
 */

/**
 * @typedef PaymentStatusUpdateResponse
 * @property {boolean} retry
 * @property {string} [redirect_url]
 * @property {string} status
 * @property {boolean} [success]
 * @property {string} aggregator_name
 */

/**
 * @typedef ResendOrCancelPaymentRequest
 * @property {string} [device_id]
 * @property {string} request_type
 * @property {string} order_id
 */

/**
 * @typedef LinkStatus
 * @property {boolean} status
 * @property {string} message
 */

/**
 * @typedef ResendOrCancelPaymentResponse
 * @property {LinkStatus} data
 * @property {boolean} success
 */

/**
 * @typedef FilterInfoOption
 * @property {string} [value]
 * @property {string} [name]
 * @property {string} text
 */

/**
 * @typedef FiltersInfo
 * @property {string} type
 * @property {FilterInfoOption[]} [options]
 * @property {string} value
 * @property {string} text
 */

/**
 * @typedef Prices
 * @property {number} [coupon_value]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [cashback_applied]
 * @property {number} [delivery_charge]
 * @property {number} [price_effective]
 * @property {number} [promotion_effective_discount]
 * @property {number} [amount_paid]
 * @property {number} [refund_amount]
 * @property {number} [discount]
 * @property {number} [value_of_good]
 * @property {number} [fynd_credits]
 * @property {number} [refund_credit]
 * @property {number} [tax_collected_at_source]
 * @property {number} [cod_charges]
 * @property {number} [price_marked]
 * @property {number} [cashback]
 */

/**
 * @typedef PlatformItem
 * @property {number} [department_id]
 * @property {string} [name]
 * @property {string} [code]
 * @property {number} [l3_category]
 * @property {string[]} [image]
 * @property {string} [color]
 * @property {string[]} [l1_category]
 * @property {string[]} [images]
 * @property {string} [l3_category_name]
 * @property {number} [id]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {string} [size]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} brand_calculated_amount
 * @property {number} gst_fee
 * @property {number} value_of_good
 * @property {number} tax_collected_at_source
 * @property {string} gstin_code
 */

/**
 * @typedef BagUnit
 * @property {number} total_shipment_bags
 * @property {string} ordering_channel
 * @property {number} item_quantity
 * @property {Prices} [prices]
 * @property {string} shipment_id
 * @property {PlatformItem} [item]
 * @property {boolean} [can_return]
 * @property {GSTDetailsData} [gst]
 * @property {Object} status
 * @property {boolean} [can_cancel]
 * @property {number} bag_id
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} type
 * @property {string} logo
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} id
 * @property {string} code
 */

/**
 * @typedef ShipmentStatus
 * @property {string} actual_status
 * @property {string} title
 * @property {string} hex_code
 * @property {string} ops_status
 * @property {string} status
 */

/**
 * @typedef UserDataInfo
 * @property {string} [mobile]
 * @property {string} [last_name]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [name]
 * @property {string} [gender]
 * @property {string} [avis_user_id]
 * @property {string} [first_name]
 * @property {string} [email]
 * @property {number} [uid]
 */

/**
 * @typedef ShipmentItem
 * @property {BagUnit[]} [bags]
 * @property {number} total_bags_count
 * @property {string} fulfilling_centre
 * @property {number} shipment_created_at
 * @property {Object} [channel]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {Prices} [prices]
 * @property {number} total_shipments_in_order
 * @property {Object} [payment_methods]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {ShipmentStatus} [shipment_status]
 * @property {Object} [sla]
 * @property {Object} [application]
 * @property {string} id
 * @property {string} created_at
 * @property {UserDataInfo} [user]
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {FiltersInfo[]} [filters]
 * @property {ShipmentItem[]} [items]
 * @property {Object} [applied_filters]
 * @property {Object} [page]
 */

/**
 * @typedef Error
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef UserDetailsData
 * @property {string} phone
 * @property {string} name
 * @property {string} country
 * @property {string} state
 * @property {string} pincode
 * @property {string} [email]
 * @property {string} address
 * @property {string} city
 */

/**
 * @typedef FulfillingStore
 * @property {Object} meta
 * @property {string} phone
 * @property {string} country
 * @property {string} code
 * @property {string} state
 * @property {string} pincode
 * @property {string} city
 * @property {string} address
 * @property {string} contact_person
 * @property {number} id
 * @property {string} store_name
 * @property {string} fulfillment_channel
 */

/**
 * @typedef BagStateMapper
 * @property {string} journey_type
 * @property {string} state_type
 * @property {string} name
 * @property {string} [app_state_name]
 * @property {boolean} [app_facing]
 * @property {boolean} [notify_customer]
 * @property {number} bs_id
 * @property {boolean} [is_active]
 * @property {string} [app_display_name]
 * @property {string} display_name
 */

/**
 * @typedef BagStatusHistory
 * @property {number} [state_id]
 * @property {string} [state_type]
 * @property {string} [delivery_awb_number]
 * @property {string} [updated_at]
 * @property {string} [display_name]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [shipment_id]
 * @property {number} [store_id]
 * @property {string} [app_display_name]
 * @property {boolean} [forward]
 * @property {Object[]} [reasons]
 * @property {boolean} [kafka_sync]
 * @property {string} status
 * @property {string} [created_at]
 * @property {number} [bag_id]
 * @property {number} [delivery_partner_id]
 * @property {number} [bsh_id]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [logo]
 * @property {string} [mode]
 * @property {string} [source]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [country]
 * @property {string} [name]
 * @property {string} [awb_no]
 * @property {string} [eway_bill_id]
 * @property {string} [gst_tag]
 * @property {string} [pincode]
 * @property {number} [id]
 * @property {string} [track_url]
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [shipment_id]
 * @property {number} [id]
 * @property {string[]} [bag_list]
 * @property {string} [status]
 * @property {string} [created_at]
 */

/**
 * @typedef BagGST
 * @property {number} [gst_tax_percentage]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [brand_calculated_amount]
 * @property {string} [gst_tag]
 * @property {number} [gst_fee]
 * @property {number} [value_of_good]
 * @property {string} [gstin_code]
 * @property {string} [hsn_code]
 */

/**
 * @typedef DiscountRules
 * @property {string} [type]
 * @property {number} [value]
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
 * @typedef AppliedPromos
 * @property {string} [promotion_name]
 * @property {number} [amount]
 * @property {number} [article_quantity]
 * @property {string} [promotion_type]
 * @property {string} [promo_id]
 * @property {DiscountRules[]} [discount_rules]
 * @property {BuyRules[]} [buy_rules]
 * @property {boolean} [mrp_promotion]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} [amount_paid_roundoff]
 * @property {number} brand_calculated_amount
 * @property {number} total_units
 * @property {number} gst_fee
 * @property {number} price_effective
 * @property {number} coupon_value
 * @property {number} cashback_applied
 * @property {number} promotion_effective_discount
 * @property {number} value_of_good
 * @property {number} discount
 * @property {number} refund_credit
 * @property {number} [tax_collected_at_source]
 * @property {string} size
 * @property {number} coupon_effective_discount
 * @property {number} cod_charges
 * @property {Identifier} identifiers
 * @property {number} amount_paid
 * @property {number} transfer_price
 * @property {number} price_marked
 * @property {string} hsn_code
 * @property {number} cashback
 * @property {number} gst_tax_percentage
 * @property {number} delivery_charge
 * @property {string} gst_tag
 * @property {number} fynd_credits
 * @property {boolean} added_to_fynd_cash
 * @property {string} item_name
 */

/**
 * @typedef BagConfigs
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} enable_tracking
 * @property {boolean} allow_force_return
 * @property {boolean} is_active
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_returnable
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [return_config]
 * @property {Object} [identifiers]
 * @property {string} [uid]
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
 * @typedef CurrentStatus
 * @property {number} [state_id]
 * @property {string} [state_type]
 * @property {number} current_status_id
 * @property {number} [updated_at]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [shipment_id]
 * @property {number} [store_id]
 * @property {number} [delivery_partner_id]
 * @property {boolean} [kafka_sync]
 * @property {string} [status]
 * @property {string} [created_at]
 * @property {number} [bag_id]
 * @property {string} [delivery_awb_number]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [address_type]
 * @property {string} [phone]
 * @property {string} [country]
 * @property {string} [landmark]
 * @property {string} [area]
 * @property {string} [address1]
 * @property {string} [updated_at]
 * @property {string} [state]
 * @property {string} [pincode]
 * @property {string} [version]
 * @property {number} [longitude]
 * @property {string} [address2]
 * @property {string} [email]
 * @property {string} [contact_person]
 * @property {string} [address_category]
 * @property {string} [created_at]
 * @property {number} [latitude]
 * @property {string} [city]
 */

/**
 * @typedef OrderBags
 * @property {number} [quantity]
 * @property {string} [entity_type]
 * @property {string} [identifier]
 * @property {BagGST} [gst_details]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {string} [display_name]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {BagConfigs} [bag_configs]
 * @property {number} [line_number]
 * @property {Prices} [prices]
 * @property {OrderBagArticle} [article]
 * @property {boolean} [can_cancel]
 * @property {number} bag_id
 * @property {OrderBrandName} [brand]
 * @property {string} [seller_identifier]
 * @property {CurrentStatus} [current_status]
 * @property {PlatformItem} [item]
 * @property {Object} [parent_promo_bags]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {boolean} [can_return]
 */

/**
 * @typedef TrackingList
 * @property {boolean} [is_passed]
 * @property {string} text
 * @property {string} [time]
 * @property {string} status
 * @property {boolean} [is_current]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [ordering_channel]
 * @property {string} [order_date]
 * @property {string} [affiliate_id]
 * @property {string} [cod_charges]
 * @property {Object} [ordering_channel_logo]
 * @property {Object} [tax_details]
 * @property {string} [order_value]
 * @property {string} fynd_order_id
 * @property {string} [source]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {UserDetailsData} [delivery_details]
 * @property {Object} fyndstore_emp
 * @property {string} [payment_mode]
 * @property {string} [replacement_details]
 * @property {string} [is_pdsr]
 * @property {Object[]} [forward_shipment_status]
 * @property {GSTDetailsData} [gst_details]
 * @property {boolean} [enable_dp_tracking]
 * @property {Object} [user_info]
 * @property {Object[]} items
 * @property {Object[]} [forward_tracking_list]
 * @property {Object} [coupon]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {string} [user_agent]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [pay_button]
 * @property {boolean} is_packaging_order
 * @property {string} [journey_type]
 * @property {string} [refund_text]
 * @property {ShipmentPayments} [payments]
 * @property {DPDetailsData} [dp_details]
 * @property {boolean} [go_green]
 * @property {boolean} is_fynd_coupon
 * @property {Prices} [prices]
 * @property {string} shipment_id
 * @property {string} [picked_date]
 * @property {string} email_id
 * @property {Object} ordering_store
 * @property {Object[]} delivery_status
 * @property {string[]} [child_nodes]
 * @property {string} order_type
 * @property {number} [total_items]
 * @property {boolean} is_not_fynd_source
 * @property {string} [shipment_status]
 * @property {string} [vertical]
 * @property {string} tracking_url
 * @property {boolean} is_invoiced
 * @property {boolean} [can_cancel]
 * @property {number} [total_bags]
 * @property {string[]} [shipment_images]
 * @property {boolean} platform_logo
 * @property {Object} order_status
 * @property {string} user_id
 * @property {string} [due_date]
 * @property {string} [kirana_store_id]
 * @property {boolean} [beneficiary_details]
 * @property {Object[]} [forward_order_status]
 * @property {string} [operational_status]
 * @property {Object} [bank_data]
 * @property {Object} [delivery_slot]
 * @property {string} [packaging_type]
 * @property {number} [shipment_quantity]
 * @property {Object} current_shipment_status
 * @property {string} [priority_text]
 * @property {string} [order_created_time]
 * @property {ShipmentStatusData} [status]
 * @property {string} lock_status
 * @property {OrderBags[]} [bags]
 * @property {string} [is_fynd_store]
 * @property {string} credit_note_id
 * @property {boolean} [enable_tracking]
 * @property {Object} company
 * @property {TrackingList[]} [tracking_list]
 * @property {Object[]} [custom_meta]
 * @property {Object} invoice
 * @property {string} can_break
 * @property {OrderDetailsData} [order]
 * @property {string} affiliate_shipment_id
 * @property {UserDetailsData} [billing_details]
 * @property {number} status_progress
 * @property {Object} [refund_details]
 * @property {string} [mid]
 * @property {string} [secured_delivery_flag]
 * @property {boolean} [can_return]
 * @property {Object} [escalation]
 */

/**
 * @typedef PlatformShipment
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [payment_mode]
 * @property {GSTDetailsData} [gst_details]
 * @property {boolean} [enable_dp_tracking]
 * @property {Object} [coupon]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {string} [user_agent]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [journey_type]
 * @property {ShipmentPayments} [payments]
 * @property {DPDetailsData} [dp_details]
 * @property {Prices} [prices]
 * @property {string} shipment_id
 * @property {string} [picked_date]
 * @property {number} [total_items]
 * @property {string} [shipment_status]
 * @property {string} [vertical]
 * @property {number} [total_bags]
 * @property {string[]} [shipment_images]
 * @property {string} [platform_logo]
 * @property {string} [operational_status]
 * @property {Object} [delivery_slot]
 * @property {string} [packaging_type]
 * @property {number} [shipment_quantity]
 * @property {string} [priority_text]
 * @property {ShipmentStatusData} [status]
 * @property {OrderBags[]} [bags]
 * @property {TrackingList[]} [tracking_list]
 * @property {Object[]} [custom_meta]
 * @property {OrderDetailsData} [order]
 * @property {UserDetailsData} [billing_details]
 */

/**
 * @typedef OrderMeta
 * @property {string} [payment_type]
 * @property {number} [employee_id]
 * @property {number} [mongo_cart_id]
 * @property {Object[]} [order_tags]
 * @property {number} [cart_id]
 * @property {string} [currency_symbol]
 * @property {Object} [extra_meta]
 * @property {string} [customer_note]
 * @property {number} [ordering_store]
 * @property {string} [order_type]
 * @property {string} [order_platform]
 * @property {string[]} [order_child_entities]
 * @property {string} [comment]
 * @property {Object} [staff]
 * @property {Object[]} [files]
 */

/**
 * @typedef OrderDict
 * @property {OrderMeta} [meta]
 * @property {string} order_date
 * @property {Prices} [prices]
 * @property {Object} [payment_methods]
 * @property {string} fynd_order_id
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {boolean} success
 * @property {PlatformShipment[]} [shipments]
 * @property {OrderDict} [order]
 */

/**
 * @typedef SubLane
 * @property {string} [value]
 * @property {string} [text]
 * @property {Object[]} [actions]
 * @property {number} [total_items]
 * @property {number} [index]
 */

/**
 * @typedef SuperLane
 * @property {SubLane[]} [options]
 * @property {string} value
 * @property {string} text
 * @property {number} [total_items]
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [display]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef PlatformOrderItems
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {Object} [meta]
 * @property {string} [order_id]
 * @property {string} [payment_mode]
 * @property {PlatformChannel} [channel]
 * @property {PlatformShipment[]} [shipments]
 * @property {UserDataInfo} [user_info]
 * @property {number} [order_value]
 * @property {string} [order_created_time]
 * @property {number} [total_order_value]
 */

/**
 * @typedef OrderListingResponse
 * @property {number} [total_count]
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {Page} [page]
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
 * @property {Object} [meta]
 * @property {string} [raw_status]
 * @property {string} [updated_at]
 * @property {string} [reason]
 * @property {string} [updated_time]
 * @property {string} [account_name]
 * @property {string} [shipment_type]
 * @property {string} [last_location_recieved_at]
 * @property {string} [status]
 * @property {string} [awb]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {Object} [meta]
 * @property {PlatformTrack[]} [results]
 */

/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [processed]
 * @property {FiltersInfo[]} [action_centre]
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [filters]
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
 * @property {string} [s3_key]
 * @property {string} [report_created_at]
 * @property {string} [report_requested_at]
 * @property {string} [report_id]
 * @property {string} [status]
 * @property {string} [report_name]
 * @property {Object} [request_details]
 * @property {string} [display_name]
 * @property {string} [report_type]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [jio_code]
 * @property {string} [company_id]
 * @property {string} [article_id]
 * @property {string} [item_id]
 */

/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */

/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [message]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {string} [trace_id]
 * @property {boolean} [success]
 * @property {Object[]} [data]
 * @property {string} [identifier]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {boolean} success
 * @property {string} [message]
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {boolean} do_invoice_label_generated
 * @property {string} [store_code]
 * @property {string} [store_id]
 * @property {Object} [invoice]
 * @property {Object} [data]
 * @property {string} [company_id]
 * @property {string} [invoice_status]
 * @property {string} batch_id
 * @property {string} [store_name]
 * @property {Object} [label]
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
 * @property {string[]} [tags]
 * @property {string} [file_path]
 * @property {string} [operation]
 * @property {string} [namespace]
 * @property {FileUploadResponse} [upload]
 * @property {string} [method]
 * @property {string} [file_name]
 * @property {string} [content_type]
 * @property {URL} [cdn]
 * @property {number} [size]
 */

/**
 * @typedef bulkListingData
 * @property {string} [user_name]
 * @property {number} [total]
 * @property {string} [batch_id]
 * @property {number} [processing]
 * @property {number} [successful]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {string[]} [processing_shipments]
 * @property {string} [file_name]
 * @property {string} [store_name]
 * @property {string} [user_id]
 * @property {string} [excel_url]
 * @property {string} [uploaded_on]
 * @property {Object[]} [successful_shipments]
 * @property {Object[]} [failed_shipments]
 * @property {string} [store_code]
 * @property {string} [status]
 * @property {number} [store_id]
 * @property {string} [id]
 */

/**
 * @typedef BulkListingPage
 * @property {boolean} [has_previous]
 * @property {number} [current]
 * @property {string} [type]
 * @property {number} [total]
 * @property {boolean} [has_next]
 * @property {number} [size]
 */

/**
 * @typedef BulkListingResponse
 * @property {boolean} [success]
 * @property {string} [error]
 * @property {bulkListingData[]} [data]
 * @property {BulkListingPage} [page]
 */

/**
 * @typedef QuestionSet
 * @property {number} [id]
 * @property {string} [display_name]
 */

/**
 * @typedef Reason
 * @property {number} [id]
 * @property {QuestionSet[]} [question_set]
 * @property {string} [display_name]
 * @property {string[]} [qc_type]
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
 * @property {boolean} [status]
 * @property {string} [message]
 */

/**
 * @typedef BulkActionDetailsDataField
 * @property {number} [failed_shipments_count]
 * @property {number} [successful_shipments_count]
 * @property {number} [processing_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {string} [company_id]
 * @property {number} [total_shipments_count]
 * @property {string} [batch_id]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {string} [uploaded_by]
 * @property {string[]} [error]
 * @property {string} [uploaded_on]
 * @property {string} [message]
 * @property {string} [success]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string[]} [failed_records]
 * @property {boolean} [status]
 * @property {string} [user_id]
 */

/**
 * @typedef AffiliateMeta
 * @property {number} [quantity]
 * @property {string} [channel_shipment_id]
 * @property {boolean} [is_priority]
 * @property {string} [box_type]
 * @property {string} [coupon_code]
 * @property {string} [order_item_id]
 * @property {number} [loyalty_discount]
 * @property {string} [due_date]
 * @property {number} [employee_discount]
 * @property {string} [channel_order_id]
 * @property {number} [size_level_total_qty]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {string} affiliate_order_id
 * @property {string} affiliate_bag_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {number} [employee_discount]
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef PDFLinks
 * @property {string} [invoice_a4]
 * @property {string} invoice_type
 * @property {string} [b2b]
 * @property {string} [invoice_a6]
 * @property {string} [invoice]
 * @property {string} [label_a6]
 * @property {string} label_type
 * @property {string} [po_invoice]
 * @property {string} [label_a4]
 * @property {string} [label_pos]
 * @property {string} [invoice_pos]
 * @property {string} [label]
 * @property {string} [credit_note_url]
 */

/**
 * @typedef EInvoice
 * @property {string} [error_message]
 * @property {string} [acknowledge_date]
 * @property {string} [signed_invoice]
 * @property {string} [error_code]
 * @property {string} [signed_qr_code]
 * @property {number} [acknowledge_no]
 * @property {string} [irn]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [credit_note]
 * @property {EInvoice} [invoice]
 */

/**
 * @typedef BuyerDetails
 * @property {string} name
 * @property {string} state
 * @property {number} pincode
 * @property {string} [ajio_site_id]
 * @property {string} gstin
 * @property {string} address
 * @property {string} city
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef LockData
 * @property {boolean} [locked]
 * @property {boolean} [mto]
 * @property {string} [lock_message]
 */

/**
 * @typedef Formatted
 * @property {string} [f_max]
 * @property {string} [f_min]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_max]
 * @property {string} [t_min]
 */

/**
 * @typedef ShipmentMeta
 * @property {boolean} same_store_available
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [awb_number]
 * @property {number} [shipment_weight]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {Object} [dp_options]
 * @property {DebugInfo} [debug_info]
 * @property {string} [dp_sort_key]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {Object} [b2c_buyer_details]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {Object} [bag_weight]
 * @property {string} [box_type]
 * @property {string} [order_type]
 * @property {LockData} [lock_data]
 * @property {string} [dp_id]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [due_date]
 * @property {string} [forward_affiliate_order_id]
 * @property {Formatted} [formatted]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [po_number]
 * @property {string} [marketplace_store_id]
 * @property {string} [return_awb_number]
 * @property {number} [return_store_node]
 * @property {string} [packaging_name]
 * @property {Object} [return_details]
 * @property {string} [return_affiliate_order_id]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {number} weight
 * @property {Object} [ewaybill_info]
 * @property {Object} [external]
 * @property {string} [dp_name]
 * @property {string} [store_invoice_updated_date]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} [ad_id]
 * @property {string} affiliate_order_id
 * @property {string} [affiliate_id]
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_shipment_id
 * @property {PDFLinks} [pdf_links]
 * @property {string} affiliate_store_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} [company_affiliate_tag]
 * @property {ShipmentMeta} shipment_meta
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef BagGSTDetails
 * @property {number} gst_tax_percentage
 * @property {string} cgst_gst_fee
 * @property {boolean} [is_default_hsn_code]
 * @property {number} brand_calculated_amount
 * @property {string} gst_tag
 * @property {number} gst_fee
 * @property {string} igst_gst_fee
 * @property {number} sgst_tax_percentage
 * @property {number} value_of_good
 * @property {number} igst_tax_percentage
 * @property {number} tax_collected_at_source
 * @property {string} sgst_gst_fee
 * @property {number} cgst_tax_percentage
 * @property {string} [gstin_code]
 * @property {string} hsn_code
 * @property {string} hsn_code_id
 */

/**
 * @typedef Dates
 * @property {string} [order_created]
 * @property {Object} [delivery_date]
 */

/**
 * @typedef StoreAddress
 * @property {string} country
 * @property {string} address1
 * @property {string} state
 * @property {number} pincode
 * @property {string} country_code
 * @property {string} created_at
 * @property {number} latitude
 * @property {string} [version]
 * @property {string} city
 * @property {string} address_type
 * @property {string} [landmark]
 * @property {number} longitude
 * @property {string} contact_person
 * @property {string} phone
 * @property {string} [area]
 * @property {string} [email]
 * @property {string} address_category
 * @property {string} updated_at
 * @property {string} [address2]
 */

/**
 * @typedef Document
 * @property {string} [url]
 * @property {string} value
 * @property {string} legal_name
 * @property {boolean} verified
 * @property {string} ds_type
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef StoreEinvoice
 * @property {boolean} enabled
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [user]
 */

/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEinvoice} [e_invoice]
 * @property {StoreEwaybill} [e_waybill]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [user]
 */

/**
 * @typedef StoreMeta
 * @property {StoreDocuments} [documents]
 * @property {Object} [product_return_config]
 * @property {string[]} [notification_emails]
 * @property {StoreGstCredentials} gst_credentials
 * @property {string} stage
 * @property {Object} [additional_contact_details]
 * @property {Object} [ewaybill_portal_details]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {Object[]} [timing]
 * @property {string} [gst_number]
 * @property {string} display_name
 */

/**
 * @typedef Store
 * @property {string} country
 * @property {string} name
 * @property {string} address1
 * @property {string} location_type
 * @property {string} state
 * @property {string} pincode
 * @property {string} [store_active_from]
 * @property {boolean} [is_archived]
 * @property {StoreAddress} [store_address_json]
 * @property {string} s_id
 * @property {number} latitude
 * @property {string} created_at
 * @property {string} fulfillment_channel
 * @property {boolean} [is_enabled_for_recon]
 * @property {number} [alohomora_user_id]
 * @property {string} city
 * @property {string} [mall_name]
 * @property {number} longitude
 * @property {number} [parent_store_id]
 * @property {number} company_id
 * @property {string} contact_person
 * @property {string} store_email
 * @property {StoreMeta} meta
 * @property {number} phone
 * @property {string[]} [brand_store_tags]
 * @property {boolean} [is_active]
 * @property {string} [order_integration_id]
 * @property {Object} [brand_id]
 * @property {string} login_username
 * @property {string} [code]
 * @property {string} [mall_area]
 * @property {string} [updated_at]
 * @property {number} [packaging_material_count]
 * @property {string} [address2]
 * @property {string} [vat_no]
 */

/**
 * @typedef ReturnConfig
 * @property {number} [time]
 * @property {string} [unit]
 * @property {boolean} [returnable]
 */

/**
 * @typedef Weight
 * @property {boolean} [is_default]
 * @property {number} [shipping]
 * @property {string} [unit]
 */

/**
 * @typedef Dimensions
 * @property {boolean} [is_default]
 * @property {number} [width]
 * @property {string} [unit]
 * @property {number} [height]
 * @property {number} [length]
 */

/**
 * @typedef Article
 * @property {string} [code]
 * @property {string} seller_identifier
 * @property {Object} [child_details]
 * @property {Object} [esp_modified]
 * @property {Identifier} identifiers
 * @property {Object} [raw_meta]
 * @property {Object} [a_set]
 * @property {boolean} [is_set]
 * @property {ReturnConfig} [return_config]
 * @property {Weight} [weight]
 * @property {Dimensions} [dimensions]
 * @property {string} uid
 * @property {string} _id
 * @property {string} size
 */

/**
 * @typedef Brand
 * @property {string} [start_date]
 * @property {string} [pickup_location]
 * @property {string} company
 * @property {string} brand_name
 * @property {boolean} [credit_note_allowed]
 * @property {number} [created_on]
 * @property {string} [logo]
 * @property {boolean} [is_virtual_invoice]
 * @property {number} brand_id
 * @property {number} [modified_on]
 * @property {string} [script_last_ran]
 * @property {string} [invoice_prefix]
 * @property {number} [credit_note_expiry_days]
 */

/**
 * @typedef B2BPODetails
 * @property {string} [docker_number]
 * @property {number} [po_line_amount]
 * @property {number} [po_tax_amount]
 * @property {number} [total_gst_percentage]
 * @property {boolean} [partial_can_ret]
 * @property {number} [item_base_price]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef Attributes
 * @property {string} [name]
 * @property {string} [primary_color_hex]
 * @property {string} [essential]
 * @property {string[]} [gender]
 * @property {string} [marketer_name]
 * @property {string} [marketer_address]
 * @property {string} [primary_color]
 * @property {string} [brand_name]
 * @property {string} [primary_material]
 */

/**
 * @typedef Item
 * @property {string} name
 * @property {string[]} image
 * @property {string[]} [l1_category]
 * @property {string} [l3_category_name]
 * @property {string} slug_key
 * @property {number} [l1_category_id]
 * @property {number} [department_id]
 * @property {number} [l3_category]
 * @property {Attributes} attributes
 * @property {boolean} [can_return]
 * @property {boolean} [can_cancel]
 * @property {string} [branch_url]
 * @property {string} size
 * @property {string} brand
 * @property {Object} [meta]
 * @property {string} [webstore_product_url]
 * @property {number} brand_id
 * @property {string} [last_updated_at]
 * @property {string[]} [l2_category]
 * @property {string} [code]
 * @property {string} [gender]
 * @property {string} [color]
 * @property {number} [l2_category_id]
 * @property {number} item_id
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_returnable
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {number} [quantity]
 * @property {string} [entity_type]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {boolean} [restore_coupon]
 * @property {number} [no_of_bags_order]
 * @property {ArticleDetails} [article_details]
 * @property {number} b_id
 * @property {BagGSTDetails} gst_details
 * @property {string} [identifier]
 * @property {BagStatusHistory} current_operational_status
 * @property {BagStatusHistory} [bag_status_history]
 * @property {string} [display_name]
 * @property {Object[]} [applied_promos]
 * @property {string} journey_type
 * @property {FinancialBreakup[]} financial_breakup
 * @property {Object} [qc_required]
 * @property {number} [bag_update_time]
 * @property {Dates} [dates]
 * @property {string[]} [tags]
 * @property {Object} [restore_promos]
 * @property {number} [line_number]
 * @property {Prices} prices
 * @property {string} [shipment_id]
 * @property {Store} [ordering_store]
 * @property {Article} article
 * @property {Brand} brand
 * @property {BagMeta} [meta]
 * @property {string} [seller_identifier]
 * @property {BagStatusHistory} current_status
 * @property {string} [operational_status]
 * @property {Item} item
 * @property {Object[]} [reasons]
 * @property {string} [order_integration_id]
 * @property {BagReturnableCancelableStatus} status
 * @property {Object} [parent_promo_bags]
 * @property {string} [b_type]
 * @property {number[]} [original_bag_list]
 * @property {BagStatusHistory[]} bag_status
 */

/**
 * @typedef ErrorResponse
 * @property {string} error
 * @property {string} message
 */

/**
 * @typedef Page1
 * @property {number} current
 * @property {string} page_type
 * @property {number} item_total
 * @property {boolean} has_next
 * @property {number} size
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
 * @property {number[]} [reason_ids]
 * @property {string} [set_id]
 * @property {string} [fynd_order_id]
 * @property {string} [mongo_article_id]
 * @property {string} [item_id]
 * @property {string} [affiliate_bag_id]
 * @property {number} store_id
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_id]
 * @property {number} [bag_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Entities
 * @property {string} [id]
 * @property {string} [affiliate_bag_id]
 * @property {string} reason_text
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} action_type
 * @property {string} action
 * @property {string} entity_type
 * @property {Entities[]} entities
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef Bags
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_bag_id]
 * @property {number} [bag_id]
 */

/**
 * @typedef CheckResponse
 * @property {string} [shipment_id]
 * @property {boolean} [is_bag_locked]
 * @property {OriginalFilter} [original_filter]
 * @property {Bags[]} [bags]
 * @property {boolean} [lock_status]
 * @property {boolean} [is_shipment_locked]
 * @property {string} [affiliate_id]
 * @property {string} [status]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CheckResponse[]} [check_response]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [from_datetime]
 * @property {string} [title]
 * @property {string} [platform_name]
 * @property {string} [logo_url]
 * @property {number} id
 * @property {string} [description]
 * @property {string} [to_datetime]
 * @property {string} [created_at]
 * @property {string} [platform_id]
 * @property {number} [company_id]
 */

/**
 * @typedef AnnouncementsResponse
 * @property {AnnouncementResponse[]} [announcements]
 */

/**
 * @typedef BaseResponse
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef Click2CallResponse
 * @property {string} call_id
 * @property {boolean} status
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object[]} [filters]
 * @property {Object} [data]
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
 * @typedef DataUpdates
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {ProductsDataUpdates[]} [products]
 */

/**
 * @typedef EntityReasonData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */

/**
 * @typedef EntitiesReasons
 * @property {Object[]} [filters]
 * @property {EntityReasonData} [data]
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {number} [quantity]
 */

/**
 * @typedef ProductsReasonsData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsFilters[]} [filters]
 * @property {ProductsReasonsData} [data]
 */

/**
 * @typedef ReasonsData
 * @property {EntitiesReasons[]} [entities]
 * @property {ProductsReasons[]} [products]
 */

/**
 * @typedef Products
 * @property {string} [identifier]
 * @property {number} [line_number]
 * @property {number} [quantity]
 */

/**
 * @typedef ShipmentsRequest
 * @property {string} identifier
 * @property {DataUpdates} [data_updates]
 * @property {ReasonsData} [reasons]
 * @property {Products[]} [products]
 */

/**
 * @typedef StatuesRequest
 * @property {string} [exclude_bags_next_state]
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [status]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [force_transition]
 * @property {boolean} [unlock_before_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task]
 * @property {boolean} [lock_after_transition]
 */

/**
 * @typedef ShipmentsResponse
 * @property {string} [identifier]
 * @property {Object} [final_state]
 * @property {string} [code]
 * @property {string} [message]
 * @property {string} [stack_trace]
 * @property {string} [exception]
 * @property {Object} [meta]
 * @property {number} [status]
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
 * @property {string} country
 * @property {string} pincode
 * @property {string} [address1]
 * @property {number} phone
 * @property {string} [address2]
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} email
 * @property {number} mobile
 * @property {string} city
 * @property {string} state
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */

/**
 * @typedef AffiliateBag
 * @property {string} seller_identifier
 * @property {string} _id
 * @property {number} discount
 * @property {number} price_marked
 * @property {number} amount_paid
 * @property {string} hsn_code_id
 * @property {string} fynd_store_id
 * @property {Object} identifier
 * @property {string} item_size
 * @property {string} sku
 * @property {number} price_effective
 * @property {number} store_id
 * @property {number} company_id
 * @property {MarketPlacePdf} [pdf_links]
 * @property {string} affiliate_store_id
 * @property {number} unit_price
 * @property {number} delivery_charge
 * @property {string} modified_on
 * @property {Object} affiliate_meta
 * @property {number} transfer_price
 * @property {number} item_id
 * @property {number} quantity
 * @property {number} avl_qty
 */

/**
 * @typedef ArticleDetails1
 * @property {Object} attributes
 * @property {string} _id
 * @property {Object} weight
 * @property {number} quantity
 * @property {Object} dimension
 * @property {Object} category
 * @property {number} brand_id
 */

/**
 * @typedef LocationDetails
 * @property {ArticleDetails1[]} articles
 * @property {number} fulfillment_id
 * @property {string} fulfillment_type
 */

/**
 * @typedef ShipmentDetails
 * @property {ArticleDetails1[]} articles
 * @property {number} shipments
 * @property {string} [box_type]
 * @property {number} [dp_id]
 * @property {Object} [meta]
 * @property {number} fulfillment_id
 * @property {string} affiliate_shipment_id
 */

/**
 * @typedef ShipmentConfig
 * @property {string} to_pincode
 * @property {string} identifier
 * @property {LocationDetails} [location_details]
 * @property {string} source
 * @property {string} payment_mode
 * @property {ShipmentDetails[]} shipment
 * @property {string} action
 * @property {string} journey
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderPriority
 * @property {string} [affiliate_priority_code]
 * @property {string} [fulfilment_priority_text]
 * @property {number} [fulfilment_priority]
 */

/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
 */

/**
 * @typedef OrderInfo
 * @property {Object} items
 * @property {OrderUser} shipping_address
 * @property {string} payment_mode
 * @property {number} discount
 * @property {AffiliateBag[]} bags
 * @property {ShipmentData} [shipment]
 * @property {number} cod_charges
 * @property {string} [affiliate_order_id]
 * @property {number} order_value
 * @property {string} [coupon]
 * @property {number} delivery_charges
 * @property {Object} [payment]
 * @property {OrderPriority} [order_priority]
 * @property {OrderUser} billing_address
 * @property {UserData} user
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {number} store_id
 * @property {string} marketplace_store_id
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} secret
 * @property {string} token
 * @property {string} id
 * @property {string} [description]
 * @property {string} created_at
 * @property {string} owner
 * @property {string} name
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} updated_at
 */

/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */

/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateAppConfig} [app]
 * @property {AffiliateInventoryConfig} [inventory]
 */

/**
 * @typedef Affiliate
 * @property {string} id
 * @property {AffiliateConfig} [config]
 * @property {string} token
 */

/**
 * @typedef OrderConfig
 * @property {string} [bag_end_state]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {boolean} [create_user]
 * @property {string} [article_lookup]
 * @property {string} [store_lookup]
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
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef ActionInfo
 * @property {number} id
 * @property {string} slug
 * @property {string} display_text
 * @property {string} description
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef PostHistoryFilters
 * @property {string} shipment_id
 * @property {string} [line_number]
 * @property {string} [identifier]
 */

/**
 * @typedef PostHistoryData
 * @property {string} message
 * @property {string} user_name
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
 * @property {string} message
 * @property {string} [l1_detail]
 * @property {string} [ticket_id]
 * @property {string} [ticket_url]
 * @property {string} [l2_detail]
 * @property {number} [bag_id]
 * @property {string} type
 * @property {string} [l3_detail]
 * @property {string} createdat
 */

/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} activity_history
 */

/**
 * @typedef ErrorDetail
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SmsDataPayload
 * @property {number} shipment_id
 * @property {string} message
 * @property {string} payment_mode
 * @property {string} brand_name
 * @property {number} amount_paid
 * @property {string} order_id
 * @property {string} customer_name
 * @property {string} country_code
 * @property {number} phone_number
 */

/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {SmsDataPayload} [data]
 * @property {number} bag_id
 */

/**
 * @typedef OrderDetails
 * @property {string} [fynd_order_id]
 * @property {string} [created_at]
 */

/**
 * @typedef Meta
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */

/**
 * @typedef ShipmentDetail
 * @property {string} [shipment_id]
 * @property {number[]} [bag_list]
 * @property {string} [remarks]
 * @property {number} id
 * @property {Meta} meta
 * @property {string} [status]
 */

/**
 * @typedef OrderStatusData
 * @property {string[]} [errors]
 * @property {OrderDetails} order_details
 * @property {ShipmentDetail[]} [shipment_details]
 */

/**
 * @typedef OrderStatusResult
 * @property {string} success
 * @property {OrderStatusData[]} [result]
 */

/**
 * @typedef ManualAssignDPToShipment
 * @property {number} dp_id
 * @property {string[]} [shipment_ids]
 * @property {string} order_type
 * @property {string} qc_required
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */

/**
 * @typedef ProcessingDates
 * @property {Object} [customer_pickup_slot]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [pack_by_date]
 * @property {string} [dispatch_after_date]
 * @property {string} [dispatch_by_date]
 * @property {string} [confirm_by_date]
 */

/**
 * @typedef Tax
 * @property {string} name
 * @property {Object} amount
 * @property {number} rate
 * @property {Object[]} [breakup]
 */

/**
 * @typedef Charge
 * @property {Tax} [tax]
 * @property {string} [code]
 * @property {Object} amount
 * @property {string} name
 * @property {string} type
 */

/**
 * @typedef LineItem
 * @property {string} seller_identifier
 * @property {string} [custom_messasge]
 * @property {Charge[]} [charges]
 * @property {string} [external_line_id]
 * @property {number} [quantity]
 * @property {Object} [meta]
 */

/**
 * @typedef Shipment
 * @property {ProcessingDates} [processing_dates]
 * @property {number} [priority]
 * @property {LineItem[]} line_items
 * @property {number} location_id
 * @property {Object} [meta]
 * @property {string} [external_shipment_id]
 */

/**
 * @typedef ShippingInfo
 * @property {string} [shipping_type]
 * @property {string} [landmark]
 * @property {string} first_name
 * @property {string} [last_name]
 * @property {string} [house_no]
 * @property {string} primary_mobile_number
 * @property {string} [floor_no]
 * @property {string} [middle_name]
 * @property {string} [customer_code]
 * @property {string} pincode
 * @property {string} address1
 * @property {string} [address2]
 * @property {string} [alternate_mobile_number]
 * @property {string} [address_type]
 * @property {string} [gender]
 * @property {string} primary_email
 * @property {Object} [geo_location]
 * @property {Object[]} [slot]
 * @property {string} state
 * @property {string} [country_code]
 * @property {string} [alternate_email]
 * @property {string} [title]
 * @property {string} country
 * @property {string} [state_code]
 * @property {string} city
 * @property {string} [external_customer_code]
 */

/**
 * @typedef PaymentMethod
 * @property {string} mode
 * @property {number} amount
 * @property {string} refund_by
 * @property {string} collect_by
 * @property {string} name
 * @property {Object} [meta]
 * @property {Object} [transaction_data]
 */

/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */

/**
 * @typedef BillingInfo
 * @property {string} first_name
 * @property {string} [last_name]
 * @property {string} [house_no]
 * @property {string} primary_mobile_number
 * @property {string} [floor_no]
 * @property {string} [middle_name]
 * @property {string} [customer_code]
 * @property {string} pincode
 * @property {string} address1
 * @property {string} [address2]
 * @property {string} [alternate_mobile_number]
 * @property {string} [gender]
 * @property {string} primary_email
 * @property {string} state
 * @property {string} [country_code]
 * @property {string} [alternate_email]
 * @property {string} [title]
 * @property {string} country
 * @property {string} [state_code]
 * @property {string} city
 * @property {string} [external_customer_code]
 */

/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 */

/**
 * @typedef CreateOrderAPI
 * @property {Shipment[]} shipments
 * @property {ShippingInfo} shipping_info
 * @property {PaymentInfo} payment_info
 * @property {string} [external_order_id]
 * @property {Charge[]} [charges]
 * @property {Object} [currency_info]
 * @property {string} [external_creation_date]
 * @property {BillingInfo} billing_info
 * @property {Object} [meta]
 * @property {TaxInfo} [tax_info]
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [request_id]
 * @property {string} [code]
 * @property {string} message
 * @property {string} [stack_trace]
 * @property {Object} [info]
 * @property {string} [exception]
 * @property {string} [meta]
 * @property {number} status
 */

/**
 * @typedef PaymentMethods
 * @property {string} [mode]
 * @property {string} [refund_by]
 * @property {string} [collect_by]
 */

/**
 * @typedef CreateChannelPaymentInfo
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef CreateChannelConfig
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {Object} [logo_url]
 * @property {string} [shipment_assignment]
 * @property {string[]} [lock_states]
 * @property {DpConfiguration} [dp_configuration]
 * @property {boolean} [location_reassignment]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_upserted]
 * @property {boolean} [is_inserted]
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
 * @property {boolean} [success]
 * @property {string[]} [message]
 */

/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */

/**
 * @typedef OrderStatus
 * @property {number} mobile
 * @property {string} start_date
 * @property {FyndOrderIdList[]} [order_details]
 * @property {string} end_date
 */

/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */

/**
 * @typedef SearchKeywordResult
 * @property {string} sort_on
 * @property {Object} query
 */

/**
 * @typedef CreateSearchKeyword
 * @property {Object} [_custom_json]
 * @property {SearchKeywordResult} result
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 */

/**
 * @typedef GetSearchWordsData
 * @property {Object} [_custom_json]
 * @property {Object} [result]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 * @property {string} [uid]
 */

/**
 * @typedef GetSearchWordsDetailResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData} [items]
 */

/**
 * @typedef GetSearchWordsResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData[]} [items]
 */

/**
 * @typedef Media
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {string} [type]
 */

/**
 * @typedef AutocompletePageAction
 * @property {Object} [params]
 * @property {string} [url]
 * @property {Object} [query]
 * @property {string} [type]
 */

/**
 * @typedef AutocompleteAction
 * @property {AutocompletePageAction} [page]
 * @property {string} [type]
 */

/**
 * @typedef AutocompleteResult
 * @property {Media} [logo]
 * @property {Object} [_custom_json]
 * @property {string} [display]
 * @property {AutocompleteAction} [action]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {AutocompleteResult[]} [results]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {Object[]} [results]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {string} [uid]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {Page} [page]
 * @property {GetAutocompleteWordsData[]} [items]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {Object[]} [results]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 */

/**
 * @typedef ProductBundleItem
 * @property {number} max_quantity
 * @property {number} min_quantity
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_select]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} product_uid
 */

/**
 * @typedef ProductBundleRequest
 * @property {boolean} [same_store_assignment]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {ProductBundleItem[]} products
 * @property {string} choice
 * @property {Object} [meta]
 * @property {boolean} is_active
 * @property {string[]} [page_visibility]
 * @property {string} [created_on]
 * @property {string} name
 * @property {Object} [created_by]
 * @property {string} [logo]
 * @property {string} slug
 * @property {number} [company_id]
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {boolean} [same_store_assignment]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {ProductBundleItem[]} products
 * @property {string} choice
 * @property {Object} [meta]
 * @property {boolean} is_active
 * @property {string[]} [page_visibility]
 * @property {string} [created_on]
 * @property {string} name
 * @property {string} [id]
 * @property {Object} [created_by]
 * @property {string} [logo]
 * @property {string} slug
 * @property {number} [company_id]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {Page} [page]
 * @property {GetProductBundleCreateResponse[]} [items]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {boolean} [same_store_assignment]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {ProductBundleItem[]} products
 * @property {string} choice
 * @property {Object} [meta]
 * @property {boolean} is_active
 * @property {string[]} [page_visibility]
 * @property {string} name
 * @property {string} [logo]
 * @property {string} slug
 * @property {number} [company_id]
 */

/**
 * @typedef LimitedProductData
 * @property {number} [quantity]
 * @property {string} [item_code]
 * @property {Object} [price]
 * @property {string[]} [sizes]
 * @property {string} [country_of_origin]
 * @property {string} [name]
 * @property {Object} [identifier]
 * @property {Object} [attributes]
 * @property {string} [slug]
 * @property {string[]} [images]
 * @property {number} [uid]
 * @property {string} [short_description]
 */

/**
 * @typedef Price
 * @property {number} [max_marked]
 * @property {number} [min_marked]
 * @property {string} [currency]
 * @property {number} [min_effective]
 * @property {number} [max_effective]
 */

/**
 * @typedef Size
 * @property {string} [value]
 * @property {boolean} [is_available]
 * @property {string} [display]
 * @property {number} [quantity]
 */

/**
 * @typedef GetProducts
 * @property {LimitedProductData} [product_details]
 * @property {number} [max_quantity]
 * @property {number} [min_quantity]
 * @property {boolean} [auto_add_to_cart]
 * @property {Price} [price]
 * @property {boolean} [auto_select]
 * @property {Size[]} [sizes]
 * @property {boolean} [allow_remove]
 * @property {number} [product_uid]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {boolean} [same_store_assignment]
 * @property {string[]} [page_visibility]
 * @property {GetProducts[]} [products]
 * @property {Object} [meta]
 * @property {string} [choice]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [slug]
 * @property {number} [company_id]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {string} [subtitle]
 * @property {string} [image]
 * @property {string} [tag]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {string} title
 * @property {Object} [created_by]
 * @property {string} name
 * @property {boolean} [active]
 * @property {number} [brand_id]
 * @property {string} [id]
 * @property {Guide} [guide]
 * @property {string} [description]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef SizeGuideResponse
 * @property {string} [subtitle]
 * @property {number} [brand_id]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} [tag]
 * @property {string} [created_on]
 * @property {string} [title]
 * @property {string} [name]
 * @property {boolean} [active]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {Object} [guide]
 * @property {number} [company_id]
 */

/**
 * @typedef MetaFields
 * @property {Object} value
 * @property {Object} key
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [maximum]
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {boolean} [is_gift]
 * @property {Object} [_custom_json]
 * @property {MetaFields[]} [_custom_meta]
 * @property {ApplicationItemMOQ} [moq]
 * @property {Object} [alt_text]
 * @property {ApplicationItemSEO} [seo]
 * @property {boolean} [is_cod]
 */

/**
 * @typedef SuccessResponse1
 * @property {boolean} [success]
 * @property {number} [uid]
 */

/**
 * @typedef MOQData
 * @property {number} [maximum]
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef SEOData
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {boolean} [is_gift]
 * @property {MOQData} [moq]
 * @property {Object} [alt_text]
 * @property {SEOData} [seo]
 * @property {boolean} [is_cod]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} data
 * @property {Object[]} [values]
 * @property {Object[]} [condition]
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {number} priority
 * @property {string} display_type
 * @property {string} name
 * @property {string} [key]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} [unit]
 * @property {string} [slug]
 */

/**
 * @typedef AppConfigurationDetail
 * @property {number} priority
 * @property {string[]} [template_slugs]
 * @property {boolean} is_default
 * @property {string} [name]
 * @property {string} app_id
 * @property {boolean} is_active
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} slug
 * @property {string} [logo]
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef PageResponseType
 * @property {number} current
 * @property {number} next
 * @property {number} total_count
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
 * @property {boolean} is_default
 * @property {string} [name]
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_active
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
 * @typedef MetaDataListingFilterMetaResponse
 * @property {string} [display]
 * @property {string[]} [filter_types]
 * @property {string} [key]
 * @property {Object[]} [units]
 */

/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
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
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingFilterResponse} filter
 * @property {MetaDataListingSortResponse} sort
 */

/**
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [compare]
 * @property {Object} [similar]
 * @property {Object} [detail]
 * @property {Object} [variant]
 */

/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {MetaDataListingResponse} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */

/**
 * @typedef ConfigurationBucketPoints
 * @property {number} [start]
 * @property {number} [end]
 * @property {string} [display]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {string} [value]
 * @property {string} [sort]
 * @property {Object[]} [map_values]
 * @property {string} [condition]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {Object} [map]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {number} priority
 * @property {string} [display_name]
 * @property {string} type
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} [name]
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_active
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 * @property {boolean} allow_single
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {number} priority
 * @property {string} [name]
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_active
 */

/**
 * @typedef ConfigurationListingSort
 * @property {string} default_key
 * @property {ConfigurationListingSortConfig[]} [config]
 */

/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingFilter} filter
 * @property {ConfigurationListingSort} sort
 */

/**
 * @typedef ProductSize
 * @property {number} max
 * @property {number} min
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {number} priority
 * @property {string} [subtitle]
 * @property {ProductSize} [size]
 * @property {string} [title]
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_active
 */

/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {number} priority
 * @property {ProductSize} size
 * @property {string} display_type
 * @property {string} name
 * @property {string} key
 * @property {string} [logo]
 * @property {boolean} is_active
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProduct
 * @property {ConfigurationProductSimilar} similar
 * @property {ConfigurationProductVariant} variant
 */

/**
 * @typedef AppConfiguration
 * @property {string} [type]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {ConfigurationListing} [listing]
 * @property {ConfigurationProduct} [product]
 * @property {string} config_type
 * @property {string} [config_id]
 * @property {string} [created_on]
 * @property {Object} [created_by]
 * @property {string} app_id
 */

/**
 * @typedef AppCatalogConfiguration
 * @property {string} [type]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {ConfigurationListing} [listing]
 * @property {ConfigurationProduct} [product]
 * @property {string} config_type
 * @property {string} [config_id]
 * @property {string} [created_on]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} app_id
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */

/**
 * @typedef EntityConfiguration
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} config_type
 * @property {string} [config_id]
 * @property {string} [id]
 * @property {string} app_id
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ProductSortOn
 * @property {string} [value]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */

/**
 * @typedef ProductFiltersValue
 * @property {Object} value
 * @property {number} [selected_max]
 * @property {boolean} is_selected
 * @property {string} [currency_code]
 * @property {string} [display_format]
 * @property {number} [count]
 * @property {string} display
 * @property {string} [query_format]
 * @property {number} [max]
 * @property {string} [currency_symbol]
 * @property {number} [min]
 * @property {number} [selected_min]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string[]} [operators]
 * @property {string} display
 * @property {string} name
 * @property {string} [logo]
 * @property {string} [kind]
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values
 * @property {ProductFiltersKey} key
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 * @property {Object} operators
 */

/**
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
 */

/**
 * @typedef CollectionImage
 * @property {string} aspect_ratio
 * @property {string} url
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} portrait
 * @property {CollectionImage} landscape
 */

/**
 * @typedef CollectionQuery
 * @property {Object[]} value
 * @property {string} attribute
 * @property {string} op
 */

/**
 * @typedef CollectionSchedule
 * @property {string} [start]
 * @property {NextSchedule[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [cron]
 */

/**
 * @typedef UserInfo
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [email]
 * @property {string} [username]
 */

/**
 * @typedef SeoDetail
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef CreateCollection
 * @property {CollectionBadge} [badge]
 * @property {boolean} [allow_facets]
 * @property {CollectionBanner} banners
 * @property {string} name
 * @property {string} app_id
 * @property {boolean} [published]
 * @property {string} slug
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {Object} [_custom_json]
 * @property {CollectionSchedule} [_schedule]
 * @property {string[]} [tags]
 * @property {boolean} [allow_sort]
 * @property {Object} [_locale_language]
 * @property {string} [description]
 * @property {UserInfo} [modified_by]
 * @property {string} type
 * @property {boolean} [is_visible]
 * @property {SeoDetail} [seo]
 * @property {UserInfo} [created_by]
 * @property {boolean} [is_active]
 * @property {CollectionImage} logo
 * @property {Object} [meta]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [sort_on]
 */

/**
 * @typedef BannerImage
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {string} [type]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [portrait]
 * @property {BannerImage} [landscape]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {Object} [badge]
 * @property {boolean} [allow_facets]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {string} [app_id]
 * @property {string} [slug]
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {Object} [_schedule]
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 * @property {string} [type]
 * @property {boolean} [is_active]
 * @property {BannerImage} [logo]
 * @property {string[]} [tag]
 * @property {Object} [meta]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [sort_on]
 * @property {Object} [cron]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {boolean} [is_selected]
 * @property {string} [display]
 * @property {string} [name]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {boolean} [is_selected]
 * @property {string} [display]
 * @property {string} [name]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterTag[]} [tags]
 * @property {CollectionListingFilterType[]} [type]
 */

/**
 * @typedef Media1
 * @property {Object} [meta]
 * @property {string} url
 * @property {string} [type]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {Object} [badge]
 * @property {boolean} [allow_facets]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {string} [app_id]
 * @property {string} [slug]
 * @property {string} [uid]
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {Action} [action]
 * @property {Object} [_schedule]
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 * @property {string} [type]
 * @property {boolean} [is_active]
 * @property {Media1} [logo]
 * @property {string[]} [tag]
 * @property {Object} [meta]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [cron]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {Page} [page]
 * @property {GetCollectionDetailNest[]} [items]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {Object} [badge]
 * @property {boolean} [allow_facets]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {string} [app_id]
 * @property {string} [slug]
 * @property {string} [uid]
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {Object} [_schedule]
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 * @property {string} [type]
 * @property {boolean} [is_active]
 * @property {Media1} [logo]
 * @property {string[]} [tag]
 * @property {Object} [meta]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [cron]
 */

/**
 * @typedef UpdateCollection
 * @property {CollectionBadge} [badge]
 * @property {boolean} [allow_facets]
 * @property {CollectionBanner} [banners]
 * @property {string} [name]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {Object} [_custom_json]
 * @property {CollectionSchedule} [_schedule]
 * @property {string[]} [tags]
 * @property {boolean} [allow_sort]
 * @property {Object} [_locale_language]
 * @property {string} [description]
 * @property {UserInfo} [modified_by]
 * @property {string} [type]
 * @property {boolean} [is_visible]
 * @property {SeoDetail} [seo]
 * @property {boolean} [is_active]
 * @property {CollectionImage} [logo]
 * @property {Object} [meta]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [sort_on]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {number} [item_id]
 * @property {string} [action]
 */

/**
 * @typedef CollectionItemRequest
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {CollectionQuery[]} [query]
 * @property {string} [type]
 */

/**
 * @typedef UpdatedResponse
 * @property {string} [message]
 * @property {number[]} [items_not_updated]
 */

/**
 * @typedef Price1
 * @property {string} [currency_code]
 * @property {number} [max]
 * @property {string} [currency_symbol]
 * @property {number} [min]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [marked]
 * @property {Price1} [effective]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [key]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title]
 * @property {ProductDetailAttribute[]} [details]
 */

/**
 * @typedef ProductBrand
 * @property {Media1} [logo]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {Action} [action]
 */

/**
 * @typedef ProductListingDetail
 * @property {string} [item_code]
 * @property {Media1[]} [medias]
 * @property {ProductListingPrice} [price]
 * @property {string} [discount]
 * @property {string[]} [similars]
 * @property {string} [name]
 * @property {boolean} [has_variant]
 * @property {string} slug
 * @property {number} [uid]
 * @property {string} [short_description]
 * @property {string} [description]
 * @property {string} [color]
 * @property {string} [type]
 * @property {string[]} [highlights]
 * @property {Object} [promo_meta]
 * @property {string[]} [tryouts]
 * @property {Object} [teaser_tag]
 * @property {Object} [attributes]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {number} [rating_count]
 * @property {boolean} [sellable]
 * @property {string} [item_type]
 * @property {string} [product_online_date]
 * @property {ProductBrand} [brand]
 * @property {string} [image_nature]
 * @property {number} [rating]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 * @property {Page} [page]
 * @property {ProductListingDetail[]} [items]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [out_of_stock_count]
 * @property {number} [count]
 * @property {number} [sellable_count]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [available_sizes]
 * @property {number} [article_freshness]
 * @property {number} [available_articles]
 * @property {number} [total_articles]
 * @property {string} [name]
 * @property {number} [total_sizes]
 */

/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightItem} [item]
 * @property {CatalogInsightBrand} [brand_distribution]
 */

/**
 * @typedef CrossSellingData
 * @property {number} [articles]
 * @property {number} [products]
 */

/**
 * @typedef CrossSellingResponse
 * @property {CrossSellingData} [data]
 * @property {CatalogInsightBrand} [brand_distribution]
 */

/**
 * @typedef OptInPostRequest
 * @property {boolean} [enabled]
 * @property {string} [platform]
 * @property {number[]} [brand_ids]
 * @property {string} opt_level
 * @property {number[]} [store_ids]
 * @property {number} [company_id]
 */

/**
 * @typedef CompanyOptIn
 * @property {boolean} enabled
 * @property {number} modified_on
 * @property {string} platform
 * @property {Object} [modified_by]
 * @property {number} created_on
 * @property {number[]} brand_ids
 * @property {Object} [created_by]
 * @property {string} opt_level
 * @property {number[]} store_ids
 * @property {number} company_id
 */

/**
 * @typedef GetOptInPlatform
 * @property {Page} page
 * @property {CompanyOptIn[]} items
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [company_type]
 * @property {string} [business_type]
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {string} [brand_name]
 * @property {number} [company_id]
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
 * @property {number} [store]
 * @property {number} [brand]
 * @property {string} [company]
 */

/**
 * @typedef StoreDetail
 * @property {string} [display_name]
 * @property {string} [modified_on]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {Object} [timing]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {Object[]} [documents]
 * @property {Object} [address]
 * @property {Object} [manager]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Object[]} [additional_contacts]
 */

/**
 * @typedef OptinStoreDetails
 * @property {Page} [page]
 * @property {StoreDetail[]} [items]
 */

/**
 * @typedef AttributeMasterFilter
 * @property {number} [priority]
 * @property {boolean} indexing
 * @property {string[]} [depends_on]
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
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef AttributeMaster
 * @property {string} type
 * @property {string[]} [allowed_values]
 * @property {boolean} [mandatory]
 * @property {string} [format]
 * @property {AttributeSchemaRange} [range]
 * @property {boolean} [multi]
 */

/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */

/**
 * @typedef GenderDetail
 * @property {AttributeMasterFilter} [filters]
 * @property {boolean} [is_nested]
 * @property {AttributeMasterMeta} [meta]
 * @property {string[]} [departments]
 * @property {AttributeMaster} [schema]
 * @property {AttributeMasterDetails} [details]
 * @property {string} [name]
 * @property {string} [id]
 * @property {string} [logo]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [slug]
 * @property {string} [description]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Page} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef PTErrorResponse
 * @property {number} [status]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {string} [code]
 * @property {Object} [errors]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {Object} [_custom_json]
 * @property {string[]} [synonyms]
 * @property {string} [_cls]
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 * @property {string} [slug]
 * @property {string} name
 * @property {number} priority_order
 * @property {string} logo
 * @property {Object} [platforms]
 * @property {number} [uid]
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
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {string} [username]
 */

/**
 * @typedef GetDepartment
 * @property {string} [modified_on]
 * @property {string[]} [synonyms]
 * @property {UserSerializer} [modified_by]
 * @property {string} [item_type]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {number} [page_size]
 * @property {UserSerializer} [created_by]
 * @property {string} [name]
 * @property {number} [page_no]
 * @property {number} [priority_order]
 * @property {string} [logo]
 * @property {string} [search]
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef DepartmentsResponse
 * @property {Page} [page]
 * @property {GetDepartment[]} [items]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {number} [status]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {string} [code]
 * @property {Object} [errors]
 */

/**
 * @typedef UserDetail
 * @property {string} user_id
 * @property {string} [contact]
 * @property {boolean} [super_user]
 * @property {string} username
 */

/**
 * @typedef DepartmentModel
 * @property {string} [verified_on]
 * @property {Object} [_custom_json]
 * @property {string} modified_on
 * @property {UserDetail} [modified_by]
 * @property {Object[]} [synonyms]
 * @property {Object} [_cls]
 * @property {UserDetail} [verified_by]
 * @property {boolean} [is_active]
 * @property {string} created_on
 * @property {number} priority_order
 * @property {Object} [slug]
 * @property {Object} name
 * @property {UserDetail} [created_by]
 * @property {Object} logo
 * @property {Object} [_id]
 * @property {number} [uid]
 */

/**
 * @typedef ProductTemplate
 * @property {string} [tag]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {Object[]} [attributes_schema]
 * @property {string[]} [categories]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_expirable]
 * @property {string[]} [departments]
 * @property {string} [created_on]
 * @property {Object} [created_by]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {boolean} [is_active]
 * @property {string[]} [attributes]
 * @property {string} slug
 * @property {string} [description]
 * @property {boolean} is_physical
 */

/**
 * @typedef TemplatesResponse
 * @property {Page} [page]
 * @property {ProductTemplate} [items]
 */

/**
 * @typedef Properties
 * @property {Object} [trader_type]
 * @property {Object} [item_code]
 * @property {Object} [media]
 * @property {Object} [product_group_tag]
 * @property {Object} [name]
 * @property {Object} [slug]
 * @property {Object} [short_description]
 * @property {Object} [custom_order]
 * @property {Object} [tags]
 * @property {Object} [trader]
 * @property {Object} [brand_uid]
 * @property {Object} [sizes]
 * @property {Object} [category_slug]
 * @property {Object} [country_of_origin]
 * @property {Object} [variants]
 * @property {Object} [description]
 * @property {Object} [highlights]
 * @property {Object} [no_of_boxes]
 * @property {Object} [hsn_code]
 * @property {Object} [teaser_tag]
 * @property {Object} [is_active]
 * @property {Object} [product_publish]
 * @property {Object} [command]
 * @property {Object} [multi_size]
 * @property {Object} [currency]
 * @property {Object} [is_dependent]
 * @property {Object} [return_config]
 * @property {Object} [item_type]
 * @property {Object} [size_guide]
 */

/**
 * @typedef GlobalValidation
 * @property {string} [type]
 * @property {Properties} [properties]
 * @property {string} [title]
 * @property {string[]} [required]
 * @property {Object} [definitions]
 * @property {string} [description]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {string} [tag]
 * @property {Object[]} [attributes_schema]
 * @property {string[]} [categories]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_expirable]
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {string} [id]
 * @property {string} [logo]
 * @property {boolean} [is_active]
 * @property {string[]} [attributes]
 * @property {string} slug
 * @property {string} [description]
 * @property {boolean} is_physical
 */

/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateValidationData} [data]
 * @property {TemplateDetails} [template_details]
 */

/**
 * @typedef InventoryValidationResponse
 * @property {Object} [data]
 * @property {string} [message]
 */

/**
 * @typedef HSNData
 * @property {string[]} [hsn_code]
 * @property {string[]} [country_of_origin]
 */

/**
 * @typedef HSNCodesResponse
 * @property {HSNData} [data]
 * @property {string} [message]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductDownloadItemsData
 * @property {string[]} [templates]
 * @property {string[]} [brand]
 * @property {string} [type]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {string} [status]
 * @property {string} [url]
 * @property {string} [completed_on]
 * @property {string} [trigger_on]
 * @property {Object} [template_tags]
 * @property {string} [task_id]
 * @property {VerifiedBy} [created_by]
 * @property {ProductDownloadItemsData} [data]
 * @property {number} [seller_id]
 * @property {string} [id]
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
 * @typedef Hierarchy
 * @property {number} department
 * @property {number} l1
 * @property {number} l2
 */

/**
 * @typedef Media2
 * @property {string} logo
 * @property {string} landscape
 * @property {string} portrait
 */

/**
 * @typedef CategoryMappingValues
 * @property {string} name
 * @property {number} [catalog_id]
 */

/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [google]
 * @property {CategoryMappingValues} [facebook]
 */

/**
 * @typedef CategoryRequestBody
 * @property {number} [priority]
 * @property {Hierarchy[]} [hierarchy]
 * @property {number} level
 * @property {string[]} [synonyms]
 * @property {string[]} [tryouts]
 * @property {Media2} [media]
 * @property {CategoryMapping} [marketplaces]
 * @property {number[]} departments
 * @property {string} name
 * @property {boolean} is_active
 * @property {string} [slug]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {string} [message]
 * @property {number} [uid]
 */

/**
 * @typedef Category
 * @property {number} [priority]
 * @property {Hierarchy[]} [hierarchy]
 * @property {Object} [modified_by]
 * @property {number} level
 * @property {string[]} [synonyms]
 * @property {string[]} [tryouts]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {Media2} [media]
 * @property {CategoryMapping} [marketplaces]
 * @property {number[]} departments
 * @property {string} name
 * @property {string} [id]
 * @property {Object} [created_by]
 * @property {boolean} is_active
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef CategoryResponse
 * @property {Page} [page]
 * @property {Category[]} [items]
 */

/**
 * @typedef CategoryUpdateResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code_id]
 * @property {string} [hsn_code]
 * @property {string} [reporting_hsn]
 */

/**
 * @typedef CustomOrder
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 * @property {boolean} [is_custom_order]
 */

/**
 * @typedef Trader
 * @property {string[]} [address]
 * @property {Object} name
 * @property {string} [type]
 */

/**
 * @typedef TeaserTag
 * @property {string} [url]
 * @property {string} [tag]
 */

/**
 * @typedef ProductPublish
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef NetQuantity
 * @property {number} [value]
 * @property {Object} [unit]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {Object} [variant_media]
 * @property {string} item_code
 * @property {TaxIdentifier} tax_identifier
 * @property {string} template_tag
 * @property {Media1[]} [media]
 * @property {string[]} [product_group_tag]
 * @property {string} name
 * @property {string} slug
 * @property {string} [bulk_job_id]
 * @property {number} [uid]
 * @property {string} [short_description]
 * @property {string} [action]
 * @property {Object} [_custom_json]
 * @property {CustomOrder} [custom_order]
 * @property {string[]} [tags]
 * @property {Trader[]} trader
 * @property {number} brand_uid
 * @property {number[]} departments
 * @property {Object[]} sizes
 * @property {string} category_slug
 * @property {string} country_of_origin
 * @property {boolean} [is_set]
 * @property {string} [description]
 * @property {Object} [variants]
 * @property {Object} [variant_group]
 * @property {string[]} [highlights]
 * @property {boolean} [is_image_less_product]
 * @property {Object} [change_request_id]
 * @property {number} [no_of_boxes]
 * @property {TeaserTag} [teaser_tag]
 * @property {boolean} [is_active]
 * @property {Object} [attributes]
 * @property {ProductPublish} [product_publish]
 * @property {number} company_id
 * @property {boolean} [multi_size]
 * @property {NetQuantity} [net_quantity]
 * @property {string} currency
 * @property {boolean} [is_dependent]
 * @property {ReturnConfig} return_config
 * @property {string} item_type
 * @property {string} [requester]
 * @property {string} [size_guide]
 */

/**
 * @typedef ProductPublished
 * @property {number} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef Image
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [secure_url]
 */

/**
 * @typedef NetQuantityResponse
 * @property {number} [value]
 * @property {string} [unit]
 */

/**
 * @typedef ReturnConfigResponse
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */

/**
 * @typedef Logo
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [secure_url]
 */

/**
 * @typedef Product
 * @property {string} [verified_on]
 * @property {Object} [variant_media]
 * @property {string} [modified_on]
 * @property {string} [item_code]
 * @property {Object} [tax_identifier]
 * @property {string} [template_tag]
 * @property {Object} [moq]
 * @property {Media1[]} [media]
 * @property {boolean} [is_expirable]
 * @property {string[]} [product_group_tag]
 * @property {string} [stage]
 * @property {number} [category_uid]
 * @property {string} [name]
 * @property {string} [id]
 * @property {string} [slug]
 * @property {number[]} [all_company_ids]
 * @property {number} [uid]
 * @property {string} [short_description]
 * @property {Object} [_custom_json]
 * @property {Object} [custom_order]
 * @property {string[]} [tags]
 * @property {Object[]} [trader]
 * @property {number} [brand_uid]
 * @property {number[]} [departments]
 * @property {Object[]} [sizes]
 * @property {string} [category_slug]
 * @property {boolean} [is_set]
 * @property {string} [country_of_origin]
 * @property {string} [description]
 * @property {Object} [variants]
 * @property {boolean} [is_physical]
 * @property {Object} [variant_group]
 * @property {string} [color]
 * @property {string[]} [highlights]
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {boolean} [is_image_less_product]
 * @property {number} [no_of_boxes]
 * @property {string} [hsn_code]
 * @property {Object[]} [all_sizes]
 * @property {Object} [created_by]
 * @property {boolean} [is_active]
 * @property {Object} [teaser_tag]
 * @property {Object} [attributes]
 * @property {ProductPublished} [product_publish]
 * @property {Image[]} [images]
 * @property {string} [pending]
 * @property {number} [company_id]
 * @property {boolean} [multi_size]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {string} [currency]
 * @property {string[]} [l3_mapping]
 * @property {boolean} [is_dependent]
 * @property {string} [primary_color]
 * @property {string} [item_type]
 * @property {ReturnConfigResponse} [return_config]
 * @property {Brand} [brand]
 * @property {string[]} [all_identifiers]
 * @property {Object} [category]
 * @property {string} [image_nature]
 * @property {string} [size_guide]
 * @property {VerifiedBy} [verified_by]
 */

/**
 * @typedef ProductListingResponse
 * @property {Page} [page]
 * @property {Product[]} [items]
 */

/**
 * @typedef ProductVariants
 * @property {string} [item_code]
 * @property {Media1[]} [media]
 * @property {number} [brand_uid]
 * @property {number} [category_uid]
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {Page} [page]
 * @property {ProductVariants[]} [variants]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {string} [modified_on]
 * @property {boolean} [variant]
 * @property {string} [raw_key]
 * @property {string} [name]
 * @property {string} slug
 * @property {AttributeMasterFilter} filters
 * @property {Object} [synonyms]
 * @property {string[]} [tags]
 * @property {string[]} departments
 * @property {AttributeMasterDetails} details
 * @property {string} [suggestion]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [description]
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {Object} [created_by]
 * @property {string} [logo]
 * @property {boolean} [is_nested]
 * @property {AttributeMaster} schema
 * @property {string} [unit]
 */

/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */

/**
 * @typedef SingleProductResponse
 * @property {Product} [data]
 */

/**
 * @typedef ProductCreateUpdate
 * @property {Object} [variant_media]
 * @property {Object} item_code
 * @property {TaxIdentifier} tax_identifier
 * @property {string} template_tag
 * @property {Media1[]} [media]
 * @property {string[]} [product_group_tag]
 * @property {Object} name
 * @property {string} slug
 * @property {string} [bulk_job_id]
 * @property {number} [uid]
 * @property {string} [short_description]
 * @property {string} [action]
 * @property {Object} [_custom_json]
 * @property {CustomOrder} [custom_order]
 * @property {string[]} [tags]
 * @property {Trader[]} trader
 * @property {number} brand_uid
 * @property {number[]} departments
 * @property {string} category_slug
 * @property {string} country_of_origin
 * @property {boolean} [is_set]
 * @property {string} [description]
 * @property {Object} [variants]
 * @property {Object} [variant_group]
 * @property {string[]} [highlights]
 * @property {boolean} [is_image_less_product]
 * @property {Object} [change_request_id]
 * @property {number} [no_of_boxes]
 * @property {TeaserTag} [teaser_tag]
 * @property {boolean} [is_active]
 * @property {ProductPublish} [product_publish]
 * @property {number} company_id
 * @property {boolean} [multi_size]
 * @property {NetQuantity} [net_quantity]
 * @property {string} currency
 * @property {boolean} [is_dependent]
 * @property {ReturnConfig} return_config
 * @property {string} item_type
 * @property {string} [requester]
 * @property {string} [size_guide]
 */

/**
 * @typedef ValidateIdentifier
 * @property {string} gtin_value
 * @property {boolean} [primary]
 * @property {string} gtin_type
 */

/**
 * @typedef AllSizes
 * @property {number} item_width
 * @property {number} item_height
 * @property {Object} size
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {string} item_dimensions_unit_of_measure
 * @property {number} item_weight
 * @property {number} item_length
 * @property {Object} item_weight_unit_of_measure
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
 * @property {string} [uid]
 * @property {string} [email]
 * @property {string} [username]
 */

/**
 * @typedef BulkJob
 * @property {string} [file_path]
 * @property {number} [total]
 * @property {string} [modified_on]
 * @property {UserInfo1} [modified_by]
 * @property {string} [template_tag]
 * @property {string} created_on
 * @property {number} [succeed]
 * @property {string} [stage]
 * @property {number} [cancelled]
 * @property {string} [tracking_url]
 * @property {string} [custom_template_tag]
 * @property {Object[]} [cancelled_records]
 * @property {UserInfo1} [created_by]
 * @property {boolean} [is_active]
 * @property {number} [failed]
 * @property {Object[]} [failed_records]
 * @property {number} company_id
 */

/**
 * @typedef BulkResponse
 * @property {string} [modified_on]
 * @property {UserInfo1} [modified_by]
 * @property {string} created_on
 * @property {string} batch_id
 * @property {UserInfo1} [created_by]
 * @property {boolean} [is_active]
 */

/**
 * @typedef UserDetail1
 * @property {string} [user_id]
 * @property {string} [full_name]
 * @property {string} [username]
 */

/**
 * @typedef ProductBulkRequest
 * @property {string} [file_path]
 * @property {number} [total]
 * @property {string} [modified_on]
 * @property {UserDetail1} [modified_by]
 * @property {string} [template_tag]
 * @property {string} [created_on]
 * @property {number} [succeed]
 * @property {string} [stage]
 * @property {UserDetail1} [created_by]
 * @property {number} [cancelled]
 * @property {number} [failed]
 * @property {string[]} [cancelled_records]
 * @property {boolean} [is_active]
 * @property {string[]} [failed_records]
 * @property {ProductTemplate} [template]
 * @property {number} [company_id]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {Page} [page]
 * @property {ProductBulkRequest} [items]
 */

/**
 * @typedef BulkProductRequest
 * @property {Object[]} data
 * @property {string} template_tag
 * @property {number} company_id
 * @property {string} batch_id
 */

/**
 * @typedef NestedTags
 * @property {string[]} [tags]
 */

/**
 * @typedef ProductTagsViewResponse
 * @property {NestedTags} [items]
 */

/**
 * @typedef ProductBulkAssets
 * @property {Object} user
 * @property {number} [company_id]
 * @property {string} url
 */

/**
 * @typedef UserCommon
 * @property {string} [user_id]
 * @property {number} [company_id]
 * @property {string} [username]
 */

/**
 * @typedef Items
 * @property {string} [file_path]
 * @property {number} [total]
 * @property {UserCommon} [modified_by]
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {number} [retry]
 * @property {string} [created_on]
 * @property {number} [succeed]
 * @property {string} [stage]
 * @property {number} [cancelled]
 * @property {string} [tracking_url]
 * @property {string[]} [cancelled_records]
 * @property {UserCommon} [created_by]
 * @property {number} [failed]
 * @property {string[]} [failed_records]
 * @property {string} [id]
 * @property {number} [company_id]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Page} [page]
 * @property {Items[]} [items]
 */

/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {number} [item_id]
 * @property {string} [size]
 * @property {number} [company_id]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {ProductSizeDeleteDataResponse} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef GTIN
 * @property {Object} gtin_value
 * @property {boolean} [primary]
 * @property {string} gtin_type
 */

/**
 * @typedef SetSize
 * @property {string} size
 * @property {number} pieces
 */

/**
 * @typedef SizeDistribution
 * @property {SetSize[]} sizes
 */

/**
 * @typedef InventorySet
 * @property {SizeDistribution} size_distribution
 * @property {string} [name]
 * @property {number} [quantity]
 */

/**
 * @typedef InvSize
 * @property {string} currency
 * @property {number} [item_width]
 * @property {number} [item_height]
 * @property {number} quantity
 * @property {string} store_code
 * @property {Object} size
 * @property {number} [price_transfer]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [price]
 * @property {GTIN[]} identifiers
 * @property {number} price_effective
 * @property {InventorySet} [set]
 * @property {number} [item_weight]
 * @property {boolean} [is_set]
 * @property {number} [item_length]
 * @property {string} [expiration_date]
 * @property {string} [item_weight_unit_of_measure]
 */

/**
 * @typedef ItemQuery
 * @property {string} [item_code]
 * @property {number} [uid]
 * @property {number} [brand_uid]
 */

/**
 * @typedef InventoryRequest
 * @property {InvSize[]} sizes
 * @property {ItemQuery} item
 * @property {number} company_id
 */

/**
 * @typedef InventoryResponse
 * @property {string} [inventory_updated_on]
 * @property {number} [sellable_quantity]
 * @property {Object} [store]
 * @property {string} [currency]
 * @property {number} [quantity]
 * @property {string} [seller_identifier]
 * @property {number} [item_id]
 * @property {Object} [identifiers]
 * @property {number} [price_transfer]
 * @property {string} [size]
 * @property {number} [price]
 * @property {number} [price_effective]
 * @property {string} [uid]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {Page} [page]
 * @property {InventoryResponse[]} [items]
 */

/**
 * @typedef PriceMeta
 * @property {Object} [tp_notes]
 * @property {string} currency
 * @property {number} effective
 * @property {number} transfer
 * @property {number} marked
 * @property {string} [updated_at]
 */

/**
 * @typedef Trader1
 * @property {string[]} address
 * @property {string} name
 * @property {string} type
 */

/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [sellable]
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef ManufacturerResponse
 * @property {string} address
 * @property {boolean} is_default
 * @property {string} name
 */

/**
 * @typedef WeightResponse
 * @property {number} shipping
 * @property {boolean} is_default
 * @property {string} unit
 */

/**
 * @typedef ReturnConfig1
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */

/**
 * @typedef DimensionResponse
 * @property {number} width
 * @property {number} height
 * @property {boolean} is_default
 * @property {number} length
 * @property {string} unit
 */

/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
 */

/**
 * @typedef InventorySellerResponse
 * @property {string} fynd_article_code
 * @property {Object} [tax_identifier]
 * @property {boolean} fragile
 * @property {PriceMeta} price
 * @property {string} [stage]
 * @property {string} uid
 * @property {Object} [_custom_json]
 * @property {StoreMeta} store
 * @property {string[]} [tags]
 * @property {Trader1[]} [trader]
 * @property {string} [trace_id]
 * @property {Quantities} [quantities]
 * @property {Object} identifier
 * @property {InventorySet} [set]
 * @property {boolean} [is_set]
 * @property {string} country_of_origin
 * @property {string} fynd_item_code
 * @property {number} total_quantity
 * @property {string} seller_identifier
 * @property {UserSerializer} [modified_by]
 * @property {number} item_id
 * @property {string} [added_on_store]
 * @property {string} size
 * @property {CompanyMeta} company
 * @property {boolean} [track_inventory]
 * @property {boolean} [is_active]
 * @property {UserSerializer} [created_by]
 * @property {ManufacturerResponse} manufacturer
 * @property {WeightResponse} weight
 * @property {string} [expiration_date]
 * @property {ReturnConfig1} [return_config]
 * @property {DimensionResponse} dimension
 * @property {Object} [meta]
 * @property {BrandMeta} brand
 * @property {Object} [fynd_meta]
 * @property {Object} [raw_meta]
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {Page} [page]
 * @property {InventorySellerResponse[]} [items]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {string} [file_path]
 * @property {number} [total]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {number} [succeed]
 * @property {string} [stage]
 * @property {number} [cancelled]
 * @property {string[]} [cancelled_records]
 * @property {Object} [created_by]
 * @property {number} [failed]
 * @property {string[]} [failed_records]
 * @property {string} [id]
 * @property {number} [company_id]
 */

/**
 * @typedef BulkInventoryGet
 * @property {Page} [page]
 * @property {BulkInventoryGetItems[]} [items]
 */

/**
 * @typedef InventoryJobPayload
 * @property {number} [price_marked]
 * @property {string} [currency]
 * @property {number} [total_quantity]
 * @property {string} seller_identifier
 * @property {number} [quantity]
 * @property {string} store_code
 * @property {string[]} [tags]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [price]
 * @property {string} [trace_id]
 * @property {number} [price_effective]
 * @property {string} [expiration_date]
 * @property {string} [item_weight_unit_of_measure]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {InventoryJobPayload[]} sizes
 * @property {Object} [user]
 * @property {number} company_id
 * @property {string} batch_id
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [store]
 * @property {number[]} [brand]
 * @property {string} [type]
 */

/**
 * @typedef InventoryExportResponse
 * @property {string} [status]
 * @property {string} [trigger_on]
 * @property {number} seller_id
 * @property {string} task_id
 * @property {Object} [request_params]
 */

/**
 * @typedef InventoryExportJob
 * @property {string} [status]
 * @property {string} [url]
 * @property {string} [completed_on]
 * @property {string} [trigger_on]
 * @property {number} seller_id
 * @property {string} task_id
 * @property {Object} [request_params]
 */

/**
 * @typedef PriceArticle
 * @property {Object} [tp_notes]
 * @property {string} [currency]
 * @property {number} [effective]
 * @property {number} [transfer]
 * @property {number} [marked]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {string} [store_code]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [store_type]
 */

/**
 * @typedef Trader2
 * @property {string[]} [address]
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef Quantity
 * @property {number} [count]
 */

/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [order_committed]
 * @property {Quantity} [damaged]
 * @property {Quantity} [not_available]
 * @property {Quantity} [sellable]
 */

/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {string} [address]
 * @property {boolean} [is_default]
 * @property {string} [name]
 */

/**
 * @typedef WeightResponse1
 * @property {number} [shipping]
 * @property {string} [unit]
 */

/**
 * @typedef ReturnConfig2
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */

/**
 * @typedef DimensionResponse1
 * @property {number} [width]
 * @property {number} [length]
 * @property {string} [unit]
 * @property {number} [height]
 */

/**
 * @typedef BrandMeta1
 * @property {string} [name]
 * @property {number} [id]
 */

/**
 * @typedef GetInventories
 * @property {string} [inventory_updated_on]
 * @property {Object} [tax_identifier]
 * @property {PriceArticle} [price]
 * @property {string} [stage]
 * @property {string} [id]
 * @property {string} [uid]
 * @property {ArticleStoreResponse} [store]
 * @property {string[]} [tags]
 * @property {string} [trace_id]
 * @property {Trader2[]} [trader]
 * @property {QuantitiesArticle} [quantities]
 * @property {Object} [identifier]
 * @property {boolean} [is_set]
 * @property {string} [country_of_origin]
 * @property {number} [total_quantity]
 * @property {string} [seller_identifier]
 * @property {UserSerializer} [modified_by]
 * @property {number} [item_id]
 * @property {string} [size]
 * @property {CompanyMeta1} [company]
 * @property {boolean} [track_inventory]
 * @property {UserSerializer} [created_by]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {string} [expiration_date]
 * @property {WeightResponse1} [weight]
 * @property {ReturnConfig2} [return_config]
 * @property {DimensionResponse1} [dimension]
 * @property {BrandMeta1} [brand]
 * @property {DateMeta} [date_meta]
 * @property {Object} [platforms]
 */

/**
 * @typedef GetInventoriesResponse
 * @property {Page} [page]
 * @property {GetInventories[]} [items]
 */

/**
 * @typedef FilerList
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef InventoryConfig
 * @property {FilerList[]} [data]
 * @property {boolean} [multivalues]
 */

/**
 * @typedef InventoryPayload
 * @property {number} [price_marked]
 * @property {number} [total_quantity]
 * @property {string} seller_identifier
 * @property {string[]} [tags]
 * @property {string} [trace_id]
 * @property {number} [price_effective]
 * @property {number} store_id
 * @property {string} [expiration_date]
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {InventoryPayload[]} [payload]
 * @property {Object} [meta]
 * @property {number} company_id
 */

/**
 * @typedef InventoryFailedReason
 * @property {string} message
 * @property {string} [errors]
 */

/**
 * @typedef InventoryResponseItem
 * @property {InventoryPayload} [data]
 * @property {InventoryFailedReason} [reason]
 */

/**
 * @typedef InventoryUpdateResponse
 * @property {string} message
 * @property {InventoryResponseItem[]} [items]
 */

/**
 * @typedef HsnUpsert
 * @property {number} threshold1
 * @property {number} [tax2]
 * @property {number} tax1
 * @property {string} hs2_code
 * @property {number} [threshold2]
 * @property {string} hsn_code
 * @property {boolean} tax_on_mrp
 * @property {boolean} [tax_on_esp]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {number} company_id
 */

/**
 * @typedef HsnCodesObject
 * @property {number} [threshold1]
 * @property {number} [tax2]
 * @property {string} [modified_on]
 * @property {number} [tax1]
 * @property {string} [hs2_code]
 * @property {number} [threshold2]
 * @property {string} [hsn_code]
 * @property {boolean} [tax_on_mrp]
 * @property {string} [id]
 * @property {boolean} [tax_on_esp]
 * @property {number} [company_id]
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */

/**
 * @typedef PageResponse
 * @property {boolean} [has_previous]
 * @property {number} [size]
 * @property {boolean} [has_next]
 * @property {string} [current]
 * @property {number} [item_total]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {PageResponse} [page]
 * @property {HsnCodesObject[]} [items]
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
 * @typedef TaxSlab
 * @property {number} rate
 * @property {string} effective_date
 * @property {number} threshold
 * @property {number} [cess]
 */

/**
 * @typedef HSNDataInsertV2
 * @property {string} type
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {Object} [created_by]
 * @property {string} hsn_code
 * @property {string} reporting_hsn
 * @property {TaxSlab[]} taxes
 * @property {string} country_code
 * @property {string} description
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {PageResponse} [page]
 * @property {HSNDataInsertV2[]} [items]
 */

/**
 * @typedef BrandItem
 * @property {Action} [action]
 * @property {string[]} [departments]
 * @property {string} [discount]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {Media} [logo]
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef BrandListingResponse
 * @property {Page} page
 * @property {BrandItem[]} [items]
 */

/**
 * @typedef Department
 * @property {string} [name]
 * @property {number} [priority_order]
 * @property {Media} [logo]
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef DepartmentIdentifier
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef ThirdLevelChild
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {Object[]} [childs]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef SecondLevelChild
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {ThirdLevelChild[]} [childs]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef Child
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {SecondLevelChild[]} [childs]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef CategoryItems
 * @property {Action} [action]
 * @property {Child[]} [childs]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {CategoryItems[]} [items]
 * @property {string} [department]
 */

/**
 * @typedef CategoryListingResponse
 * @property {DepartmentIdentifier[]} [departments]
 * @property {DepartmentCategoryTree[]} [data]
 */

/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductFilters[]} [filters]
 * @property {Object} [operators]
 * @property {Page} page
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef ProductDetail
 * @property {string} [item_code]
 * @property {Media1[]} [medias]
 * @property {string[]} [similars]
 * @property {string} [name]
 * @property {boolean} [has_variant]
 * @property {string} slug
 * @property {number} [uid]
 * @property {string} [short_description]
 * @property {string} [description]
 * @property {string} [color]
 * @property {string} [type]
 * @property {string[]} [highlights]
 * @property {Object} [promo_meta]
 * @property {string[]} [tryouts]
 * @property {Object} [teaser_tag]
 * @property {Object} [attributes]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {number} [rating_count]
 * @property {string} [item_type]
 * @property {string} [product_online_date]
 * @property {ProductBrand} [brand]
 * @property {string} [image_nature]
 * @property {number} [rating]
 */

/**
 * @typedef InventoryPage
 * @property {string} type
 * @property {string} [next_id]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} item_total
 */

/**
 * @typedef InventoryStockResponse
 * @property {InventoryPage} page
 * @property {Object[]} [items]
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {string} [password]
 * @property {boolean} [enabled]
 * @property {string} [username]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_waybill]
 * @property {InvoiceCredSerializer} [e_invoice]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {string} number
 * @property {number} country_code
 */

/**
 * @typedef LocationManagerSerializer
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 * @property {string} [email]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef UserSerializer1
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {boolean} open
 * @property {LocationTimingSerializer} [closing]
 * @property {string} weekday
 * @property {LocationTimingSerializer} [opening]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [state]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [country]
 * @property {string} [address_type]
 * @property {number} [pincode]
 * @property {string} [country_code]
 * @property {string} [city]
 */

/**
 * @typedef GetCompanySerializer
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [reject_reason]
 * @property {string} [created_on]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [stage]
 * @property {string} [business_type]
 * @property {UserSerializer2} [created_by]
 * @property {string} [company_type]
 * @property {string} [name]
 * @property {UserSerializer2} [verified_by]
 * @property {number} [uid]
 */

/**
 * @typedef GetLocationSerializer
 * @property {string} [phone_number]
 * @property {string} [verified_on]
 * @property {string} display_name
 * @property {string} [modified_on]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} [stage]
 * @property {LocationManagerSerializer} [manager]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} name
 * @property {Object} [warnings]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [store_type]
 * @property {Document[]} [documents]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string[]} [notification_emails]
 * @property {UserSerializer1} [modified_by]
 * @property {LocationIntegrationType} [integration_type]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} [created_on]
 * @property {string} code
 * @property {GetCompanySerializer} [company]
 * @property {UserSerializer1} [created_by]
 * @property {GetAddressSerializer} address
 * @property {UserSerializer1} [verified_by]
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
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} app_id
 * @property {string} [logo]
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
 * @typedef BusinessCountryInfo
 * @property {string} [country]
 * @property {string} [country_code]
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
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
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {string} [mode]
 * @property {Object} [warnings]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [created_on]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [name]
 * @property {string} company_type
 * @property {string} [verified_on]
 * @property {string} business_type
 * @property {UserSerializer} [verified_by]
 * @property {number} uid
 * @property {string[]} [notification_emails]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {UserSerializer} [created_by]
 * @property {Object} [_custom_json]
 * @property {Document[]} [documents]
 * @property {boolean} [franchise_enabled]
 * @property {BusinessDetails} [business_details]
 * @property {UserSerializer} [modified_by]
 * @property {string} [business_info]
 * @property {string} [stage]
 * @property {string} [modified_on]
 * @property {ContactDetails} [contact_details]
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} city
 * @property {number} pincode
 * @property {string} [landmark]
 * @property {string} address_type
 * @property {string} [address2]
 * @property {string} country
 * @property {string} address1
 * @property {string} state
 * @property {string} [country_code]
 * @property {number} latitude
 * @property {number} longitude
 */

/**
 * @typedef UpdateCompany
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {string} [company_type]
 * @property {Document[]} [documents]
 * @property {string} [business_type]
 * @property {string} [business_info]
 * @property {Object} [warnings]
 * @property {BusinessDetails} [business_details]
 * @property {ContactDetails} [contact_details]
 * @property {string[]} [notification_emails]
 * @property {boolean} [franchise_enabled]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {string} [reject_reason]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 */

/**
 * @typedef ProfileSuccessResponse
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [verified]
 * @property {number} [pending]
 */

/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [product]
 * @property {DocumentsObj} [store]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {DocumentsObj} [brand]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [company_documents]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [portrait]
 * @property {string} [landscape]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {string} [mode]
 * @property {Object} [warnings]
 * @property {string} [created_on]
 * @property {string} [reject_reason]
 * @property {string} name
 * @property {string} [description]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {number} [uid]
 * @property {string} [slug_key]
 * @property {string} [logo]
 * @property {UserSerializer} [created_by]
 * @property {Object} [_custom_json]
 * @property {BrandBannerSerializer} [banner]
 * @property {UserSerializer} [modified_by]
 * @property {string} [stage]
 * @property {string} [modified_on]
 * @property {string[]} [synonyms]
 * @property {Object} [_locale_language]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {string} [description]
 * @property {number} [company_id]
 * @property {number} [uid]
 * @property {string[]} [synonyms]
 * @property {string} [brand_tier]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} logo
 * @property {Object} [_locale_language]
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */

/**
 * @typedef CompanyDetails
 * @property {string} [website_url]
 * @property {CompanySocialAccounts[]} [socials]
 */

/**
 * @typedef CompanySerializer
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {string} company_type
 * @property {string} [verified_on]
 * @property {UserSerializer} [modified_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {CompanyDetails} [details]
 * @property {string} business_type
 * @property {string} [stage]
 * @property {UserSerializer} [verified_by]
 * @property {string[]} [market_channels]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {string[]} [notification_emails]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [created_on]
 * @property {string} [reject_reason]
 * @property {UserSerializer} [created_by]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {string} [verified_on]
 * @property {UserSerializer} [modified_by]
 * @property {CompanySerializer} [company]
 * @property {string} [stage]
 * @property {UserSerializer} [verified_by]
 * @property {Object} [warnings]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [created_on]
 * @property {string} [reject_reason]
 * @property {UserSerializer} [created_by]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {Page} [page]
 * @property {CompanyBrandSerializer[]} [items]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number[]} brands
 * @property {number} [uid]
 * @property {number} company
 */

/**
 * @typedef HolidayDateSerializer
 * @property {string} start_date
 * @property {string} end_date
 */

/**
 * @typedef HolidaySchemaSerializer
 * @property {HolidayDateSerializer} date
 * @property {string} holiday_type
 * @property {string} title
 */

/**
 * @typedef AddressSerializer
 * @property {string} [city]
 * @property {number} [pincode]
 * @property {string} [address_type]
 * @property {string} [landmark]
 * @property {string} [address2]
 * @property {string} [country]
 * @property {string} [address1]
 * @property {string} [state]
 * @property {string} [country_code]
 * @property {number} latitude
 * @property {number} longitude
 */

/**
 * @typedef LocationSerializer
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {Document[]} [documents]
 * @property {number} company
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {Object} [warnings]
 * @property {AddressSerializer} address
 * @property {number} [uid]
 * @property {string} display_name
 * @property {string[]} [notification_emails]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} code
 * @property {LocationManagerSerializer} [manager]
 * @property {HolidaySchemaSerializer[]} [holiday]
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
 * @property {number} [quantity]
 * @property {Object} [meta]
 * @property {_ArticleQuery} [query]
 * @property {string} [group_id]
 */

/**
 * @typedef AssignStoreRequestValidator
 * @property {string} [pincode]
 * @property {number} [company_id]
 * @property {string} [channel_identifier]
 * @property {_AssignStoreArticle[]} [articles]
 * @property {string} [channel_type]
 * @property {number[]} [store_ids]
 * @property {string} [app_id]
 */

/**
 * @typedef AssignStoreResponseSerializer
 * @property {number} [item_id]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [company_id]
 * @property {number} [store_id]
 * @property {number} [quantity]
 * @property {boolean} [status]
 * @property {Object} [meta]
 * @property {string} [_id]
 * @property {string} [s_city]
 * @property {string} [uid]
 * @property {number} [index]
 * @property {string} [store_pincode]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {string} [size]
 */

/**
 * @typedef FailedResponse
 * @property {string} message
 */

/**
 * @typedef CDN
 * @property {string} url
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
 * @property {string} name
 * @property {string} description
 * @property {SecureUrl} logo
 * @property {SecureUrl} mobile_logo
 * @property {SecureUrl} favicon
 * @property {SecureUrl} banner
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
 * @typedef OrderingStore
 * @property {OptedStoreAddress} [address]
 * @property {string} [_id]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [pincode]
 * @property {string} [code]
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
 * @typedef Validation
 * @property {boolean} [anonymous]
 * @property {string} [user_registered_after]
 * @property {string[]} [app_id]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */

/**
 * @typedef RuleDefinition
 * @property {boolean} [auto_apply]
 * @property {string} type
 * @property {string[]} [scope]
 * @property {string} [currency_code]
 * @property {string} value_type
 * @property {boolean} [is_exact]
 * @property {string} calculate_on
 * @property {string} applicable_on
 */

/**
 * @typedef Rule
 * @property {number} [min]
 * @property {number} [discount_qty]
 * @property {number} [key]
 * @property {number} [max]
 * @property {number} [value]
 */

/**
 * @typedef CouponSchedule
 * @property {string} [cron]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {string} [start]
 * @property {number} [duration]
 */

/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */

/**
 * @typedef PriceRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [codes]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [networks]
 * @property {string[]} [types]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [user]
 * @property {number} [total]
 * @property {number} [app]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [maximum]
 * @property {UsesRemaining} [remaining]
 */

/**
 * @typedef Restrictions
 * @property {number[]} [ordering_stores]
 * @property {boolean} [coupon_allowed]
 * @property {number[]} [user_groups]
 * @property {PriceRange} [price_range]
 * @property {PostOrder} [post_order]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {string[]} [platforms]
 * @property {Object} [payments]
 * @property {UsesRestriction} [uses]
 * @property {string} [user_type]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */

/**
 * @typedef State
 * @property {boolean} [is_public]
 * @property {boolean} [is_display]
 * @property {boolean} [is_archived]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [subtitle]
 * @property {string} [title]
 */

/**
 * @typedef DisplayMeta
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [remove]
 * @property {string} [title]
 * @property {DisplayMetaDict} [auto]
 * @property {DisplayMetaDict} [apply]
 * @property {string} [description]
 */

/**
 * @typedef CouponAdd
 * @property {Validation} [validation]
 * @property {Validity} validity
 * @property {string} code
 * @property {Ownership} ownership
 * @property {string[]} [tags]
 * @property {Identifier} identifiers
 * @property {CouponDateMeta} [date_meta]
 * @property {RuleDefinition} rule_definition
 * @property {Rule[]} rule
 * @property {CouponSchedule} [_schedule]
 * @property {CouponAction} [action]
 * @property {string} type_slug
 * @property {Restrictions} [restrictions]
 * @property {CouponAuthor} [author]
 * @property {State} [state]
 * @property {DisplayMeta} display_meta
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
 * @property {Validation} [validation]
 * @property {Validity} validity
 * @property {string} code
 * @property {Ownership} ownership
 * @property {string[]} [tags]
 * @property {Identifier} identifiers
 * @property {CouponDateMeta} [date_meta]
 * @property {RuleDefinition} rule_definition
 * @property {Rule[]} rule
 * @property {CouponSchedule} [_schedule]
 * @property {CouponAction} [action]
 * @property {string} type_slug
 * @property {Restrictions} [restrictions]
 * @property {CouponAuthor} [author]
 * @property {State} [state]
 * @property {DisplayMeta} display_meta
 */

/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef CompareObject
 * @property {number} [less_than]
 * @property {number} [less_than_equals]
 * @property {number} [greater_than]
 * @property {number} [equals]
 * @property {number} [greater_than_equals]
 */

/**
 * @typedef ItemCriteria
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_company]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_category]
 * @property {number[]} [item_exclude_category]
 * @property {boolean} [all_items]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_company]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_exclude_store]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_id]
 * @property {string[]} [item_size]
 * @property {CompareObject} [cart_total]
 * @property {string[]} [product_tags]
 * @property {string[]} [available_zones]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_store]
 * @property {number[]} [item_exclude_brand]
 */

/**
 * @typedef DiscountOffer
 * @property {number} [discount_amount]
 * @property {number} [discount_percentage]
 * @property {number} [max_offer_quantity]
 * @property {string} [code]
 * @property {number} [discount_price]
 * @property {number} [max_discount_amount]
 * @property {number} [min_offer_quantity]
 * @property {number} [max_usage_per_transaction]
 * @property {boolean} [partial_can_ret]
 * @property {boolean} [apportion_discount]
 */

/**
 * @typedef DiscountRule
 * @property {DiscountOffer} offer
 * @property {string} buy_condition
 * @property {string} discount_type
 * @property {ItemCriteria} item_criteria
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */

/**
 * @typedef PromotionSchedule
 * @property {string} [cron]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {string} start
 * @property {boolean} published
 * @property {number} [duration]
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [offer_text]
 * @property {string} [name]
 * @property {string} [offer_label]
 * @property {string} [description]
 */

/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */

/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */

/**
 * @typedef Ownership1
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef UserRegistered
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */

/**
 * @typedef PromotionPaymentModes
 * @property {string[]} [codes]
 * @property {PaymentAllowValue1} [uses]
 * @property {string} type
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
 * @typedef Restrictions1
 * @property {boolean} [anonymous_users]
 * @property {number[]} [user_groups]
 * @property {UserRegistered} [user_registered]
 * @property {PostOrder1} [post_order]
 * @property {string[]} [user_id]
 * @property {string[]} [platforms]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {number} [order_quantity]
 * @property {UsesRestriction1} uses
 */

/**
 * @typedef PromotionListItem
 * @property {Object} buy_rules
 * @property {string} [code]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} [currency]
 * @property {DisplayMeta1} display_meta
 * @property {Visibility} [visiblility]
 * @property {PromotionAction} [post_order_action]
 * @property {string} application_id
 * @property {string} mode
 * @property {Object} [_custom_json]
 * @property {boolean} [apply_all_discount]
 * @property {string} [calculate_on]
 * @property {boolean} [stackable]
 * @property {string} promo_group
 * @property {Ownership1} ownership
 * @property {string} promotion_type
 * @property {string} [apply_exclusive]
 * @property {Restrictions1} [restrictions]
 */

/**
 * @typedef PromotionsResponse
 * @property {Page} [page]
 * @property {PromotionListItem} [items]
 */

/**
 * @typedef PromotionAdd
 * @property {Object} buy_rules
 * @property {string} [code]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} [currency]
 * @property {DisplayMeta1} display_meta
 * @property {Visibility} [visiblility]
 * @property {PromotionAction} [post_order_action]
 * @property {string} application_id
 * @property {string} mode
 * @property {Object} [_custom_json]
 * @property {boolean} [apply_all_discount]
 * @property {string} [calculate_on]
 * @property {boolean} [stackable]
 * @property {string} promo_group
 * @property {Ownership1} ownership
 * @property {string} promotion_type
 * @property {string} [apply_exclusive]
 * @property {Restrictions1} [restrictions]
 */

/**
 * @typedef PromotionUpdate
 * @property {Object} buy_rules
 * @property {string} [code]
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} [currency]
 * @property {DisplayMeta1} display_meta
 * @property {Visibility} [visiblility]
 * @property {PromotionAction} [post_order_action]
 * @property {string} application_id
 * @property {string} mode
 * @property {Object} [_custom_json]
 * @property {boolean} [apply_all_discount]
 * @property {string} [calculate_on]
 * @property {boolean} [stackable]
 * @property {string} promo_group
 * @property {Ownership1} ownership
 * @property {string} promotion_type
 * @property {string} [apply_exclusive]
 * @property {Restrictions1} [restrictions]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [subtitle]
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} [created_on]
 * @property {string} [entity_type]
 * @property {string} [example]
 * @property {string} [modified_on]
 * @property {boolean} [is_hidden]
 * @property {string} [entity_slug]
 * @property {string} [description]
 */

/**
 * @typedef CartItem
 * @property {number} [quantity]
 * @property {string} product_id
 * @property {string} size
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [message]
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} [code]
 * @property {string} [sub_title]
 * @property {number} [coupon_value]
 * @property {number} [minimum_cart_value]
 * @property {string} [coupon_type]
 * @property {number} [value]
 * @property {number} [max_discount_value]
 * @property {boolean} [is_applied]
 * @property {string} [uid]
 * @property {string} [description]
 */

/**
 * @typedef RawBreakup
 * @property {number} [mrp_total]
 * @property {number} [vog]
 * @property {number} [convenience_fee]
 * @property {number} [coupon]
 * @property {number} [total]
 * @property {number} [you_saved]
 * @property {number} [subtotal]
 * @property {number} [discount]
 * @property {number} [gst_charges]
 * @property {number} [cod_charge]
 * @property {number} [fynd_cash]
 * @property {number} [delivery_charge]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [display]
 * @property {string[]} [message]
 * @property {string} [currency_symbol]
 * @property {string} [key]
 * @property {string} [currency_code]
 * @property {number} [value]
 */

/**
 * @typedef LoyaltyPoints
 * @property {number} [total]
 * @property {boolean} [is_applied]
 * @property {number} [applicable]
 * @property {string} [description]
 */

/**
 * @typedef CartBreakup
 * @property {CouponBreakup} [coupon]
 * @property {RawBreakup} [raw]
 * @property {DisplayBreakup[]} [display]
 * @property {LoyaltyPoints} [loyalty_points]
 */

/**
 * @typedef ProductAvailability
 * @property {boolean} [out_of_stock]
 * @property {boolean} [deliverable]
 * @property {string[]} [sizes]
 * @property {boolean} [is_valid]
 * @property {number} [other_store_quantity]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef BasePrice
 * @property {string} [currency_code]
 * @property {number} [marked]
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */

/**
 * @typedef ProductArticle
 * @property {BaseInfo} [seller]
 * @property {string} [type]
 * @property {string[]} [product_group_tags]
 * @property {ArticlePriceInfo} [price]
 * @property {BaseInfo} [store]
 * @property {Object} [_custom_json]
 * @property {number} [quantity]
 * @property {string} [size]
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [uid]
 */

/**
 * @typedef Ownership2
 * @property {string} [payable_by]
 * @property {string} [payable_category]
 */

/**
 * @typedef DiscountRulesApp
 * @property {Object} [raw_offer]
 * @property {Object} [offer]
 * @property {Object} [item_criteria]
 * @property {string[]} [matched_buy_rules]
 */

/**
 * @typedef FreeGiftItem
 * @property {string} [item_name]
 * @property {string} [item_brand_name]
 * @property {number} [item_id]
 * @property {string[]} [item_images_url]
 * @property {string} [item_slug]
 * @property {Object} [item_price_details]
 */

/**
 * @typedef AppliedFreeArticles
 * @property {number} [quantity]
 * @property {string} [article_id]
 * @property {FreeGiftItem} [free_gift_item_details]
 * @property {string} [parent_item_identifier]
 */

/**
 * @typedef AppliedPromotion
 * @property {BuyRules[]} [buy_rules]
 * @property {Ownership2} [ownership]
 * @property {number} [article_quantity]
 * @property {number} [amount]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {string} [promotion_type]
 * @property {string} [promotion_name]
 * @property {string} [offer_text]
 * @property {string} [promotion_group]
 * @property {string} [promo_id]
 * @property {boolean} [mrp_promotion]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef ProductPrice
 * @property {number} [marked]
 * @property {number} [selling]
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {number} [add_on]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */

/**
 * @typedef ProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 * @property {string} [url]
 */

/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */

/**
 * @typedef ProductAction
 * @property {ActionQuery} [query]
 * @property {string} [url]
 * @property {string} [type]
 */

/**
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef CartProduct
 * @property {ProductImage[]} [images]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [name]
 * @property {NetQuantity} [net_quantity]
 * @property {ProductAction} [action]
 * @property {CategoryInfo[]} [categories]
 * @property {BaseInfo} [brand]
 * @property {number} [uid]
 */

/**
 * @typedef CartProductInfo
 * @property {string} [coupon_message]
 * @property {string} [message]
 * @property {boolean} [is_set]
 * @property {ProductAvailability} [availability]
 * @property {string} [discount]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [key]
 * @property {ProductArticle} [article]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {number} [quantity]
 * @property {PromoMeta} [promo_meta]
 * @property {Object} [bulk_offer]
 * @property {Object} [parent_item_identifiers]
 * @property {ProductPriceInfo} [price]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {CartProduct} [product]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {boolean} [is_valid]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {Object} [errors]
 */

/**
 * @typedef ShippingAddress
 * @property {number} [pincode]
 * @property {string} [city]
 * @property {number} [phone]
 * @property {Object} [meta]
 * @property {string} [address_type]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [area]
 * @property {string} [country_code]
 * @property {string} [area_code_slug]
 * @property {string} [landmark]
 * @property {string} [address]
 * @property {string} [country]
 * @property {string} area_code
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
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef OpenApiFiles
 * @property {string} key
 * @property {string[]} values
 */

/**
 * @typedef CartItemMeta
 * @property {boolean} [primary_item]
 * @property {string} [group_id]
 */

/**
 * @typedef OpenApiOrderItem
 * @property {string} size
 * @property {number} amount_paid
 * @property {OpenApiFiles[]} [files]
 * @property {number} cod_charges
 * @property {number} [employee_discount]
 * @property {number} coupon_effective_discount
 * @property {number} price_effective
 * @property {CartItemMeta} [meta]
 * @property {number} discount
 * @property {number} price_marked
 * @property {number} [loyalty_discount]
 * @property {number} product_id
 * @property {number} [quantity]
 * @property {Object} [extra_meta]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} cashback_applied
 * @property {number} delivery_charges
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [affiliate_order_id]
 * @property {number} cod_charges
 * @property {Object} [employee_discount]
 * @property {string} [coupon]
 * @property {string} coupon_code
 * @property {OpenApiOrderItem[]} cart_items
 * @property {string} [payment_mode]
 * @property {string} [currency_code]
 * @property {number} cart_value
 * @property {string} [comment]
 * @property {string} [order_id]
 * @property {number} [loyalty_discount]
 * @property {number} delivery_charges
 * @property {OpenApiFiles[]} [files]
 * @property {ShippingAddress} billing_address
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [gstin]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} coupon_value
 * @property {number} cashback_applied
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} [order_ref_id]
 * @property {string} order_id
 */

/**
 * @typedef AbandonedCart
 * @property {Object} [cod_charges]
 * @property {Object[]} articles
 * @property {number} [discount]
 * @property {Object} [pick_up_customer_details]
 * @property {string} [payment_mode]
 * @property {number} [cart_value]
 * @property {Object} cashback
 * @property {string} [comment]
 * @property {string} [order_id]
 * @property {boolean} [is_archive]
 * @property {string} last_modified
 * @property {string} user_id
 * @property {Object[]} [payment_methods]
 * @property {boolean} is_default
 * @property {number} uid
 * @property {Object[]} [shipments]
 * @property {Object} [promotion]
 * @property {Object} [coupon]
 * @property {boolean} [buy_now]
 * @property {Object} [payments]
 * @property {Object} [fynd_credits]
 * @property {string} expire_at
 * @property {Object} [delivery_charges]
 * @property {boolean} [merge_qty]
 * @property {string} _id
 * @property {Object} [meta]
 * @property {number[]} [fc_index_map]
 * @property {number} [bulk_coupon_discount]
 * @property {boolean} [is_active]
 * @property {string} [gstin]
 * @property {string} [app_id]
 * @property {string} [checkout_mode]
 * @property {string} created_on
 */

/**
 * @typedef AbandonedCartResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {Object} [result]
 * @property {AbandonedCart[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CartCurrency
 * @property {string} [symbol]
 * @property {string} [code]
 */

/**
 * @typedef CartDetailResponse
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [coupon_text]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 * @property {boolean} [restrict_checkout]
 * @property {string} [id]
 * @property {string} [delivery_charge_info]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [last_modified]
 * @property {CartCurrency} [currency]
 * @property {boolean} [buy_now]
 * @property {string} [comment]
 * @property {string} [gstin]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [is_valid]
 * @property {string} [checkout_mode]
 */

/**
 * @typedef AddProductCart
 * @property {string} [item_size]
 * @property {string} [display]
 * @property {boolean} [pos]
 * @property {string} [article_id]
 * @property {string[]} [product_group_tags]
 * @property {Object} [article_assignment]
 * @property {Object} [_custom_json]
 * @property {number} [seller_id]
 * @property {number} [item_id]
 * @property {number} [store_id]
 * @property {number} [quantity]
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 */

/**
 * @typedef AddCartRequest
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
 * @property {string} [item_size]
 * @property {string} [article_id]
 * @property {CartProductIdentifer} identifiers
 * @property {Object} [_custom_json]
 * @property {number} [item_id]
 * @property {number} [quantity]
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [item_index]
 */

/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef GetShareCartLinkRequest
 * @property {Object} [meta]
 * @property {string} [id]
 */

/**
 * @typedef GetShareCartLinkResponse
 * @property {string} [share_url]
 * @property {string} [token]
 */

/**
 * @typedef SharedCartDetails
 * @property {Object} [source]
 * @property {string} [token]
 * @property {Object} [meta]
 * @property {Object} [user]
 * @property {string} [created_on]
 */

/**
 * @typedef SharedCart
 * @property {CartProductInfo[]} [items]
 * @property {string} [comment]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [message]
 * @property {boolean} [restrict_checkout]
 * @property {string} [id]
 * @property {string} [delivery_charge_info]
 * @property {number} [cart_id]
 * @property {string} [last_modified]
 * @property {CartCurrency} [currency]
 * @property {boolean} [is_valid]
 * @property {string} [uid]
 * @property {CartBreakup} [breakup_values]
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {boolean} [buy_now]
 * @property {string} [coupon_text]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [gstin]
 * @property {string} [checkout_mode]
 */

/**
 * @typedef SharedCartResponse
 * @property {SharedCart} [cart]
 * @property {string} [error]
 */

/**
 * @typedef CartList
 * @property {string} [item_counts]
 * @property {string} [cart_id]
 * @property {string} [user_id]
 * @property {string} [cart_value]
 * @property {string} [created_on]
 */

/**
 * @typedef UserCartMappingResponse
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [coupon_text]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 * @property {boolean} [restrict_checkout]
 * @property {string} [id]
 * @property {string} [delivery_charge_info]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [last_modified]
 * @property {CartCurrency} [currency]
 * @property {boolean} [buy_now]
 * @property {string} [comment]
 * @property {string} [gstin]
 * @property {CartProductInfo[]} [items]
 * @property {UserInfo} [user]
 * @property {boolean} [is_valid]
 * @property {string} [checkout_mode]
 */

/**
 * @typedef CartItemCountResponse
 * @property {number} [user_cart_items_count]
 */

/**
 * @typedef PageCoupon
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [total_item_count]
 * @property {number} [total]
 * @property {number} [current]
 */

/**
 * @typedef Coupon
 * @property {string} [message]
 * @property {string} [title]
 * @property {string} [sub_title]
 * @property {string} [coupon_type]
 * @property {number} [minimum_cart_value]
 * @property {string} [coupon_code]
 * @property {boolean} [is_applicable]
 * @property {boolean} [is_applied]
 * @property {string} [expires_on]
 * @property {number} [max_discount_value]
 * @property {number} [coupon_value]
 * @property {string} [description]
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
 * @property {string[]} [tags]
 * @property {string} [address_type]
 * @property {string} [area]
 * @property {string} [name]
 * @property {string} [country_code]
 * @property {string} [address]
 * @property {GeoLocation} [geo_location]
 * @property {string} [state]
 * @property {Object} [google_map_point]
 * @property {string} [id]
 * @property {string} [cart_id]
 * @property {string} [email]
 * @property {string} [area_code_slug]
 * @property {string} [user_id]
 * @property {string} [city]
 * @property {boolean} [is_default_address]
 * @property {string} [country]
 * @property {string} [phone]
 * @property {Object} [meta]
 * @property {boolean} [is_active]
 * @property {string} [created_by_user_id]
 * @property {string} [landmark]
 * @property {string} [checkout_mode]
 * @property {string} [area_code]
 */

/**
 * @typedef PlatformGetAddressesResponse
 * @property {PlatformAddress[]} [address]
 */

/**
 * @typedef SaveAddressResponse
 * @property {string} [id]
 * @property {boolean} [success]
 * @property {boolean} [is_default_address]
 */

/**
 * @typedef UpdateAddressResponse
 * @property {boolean} [is_default_address]
 * @property {boolean} [success]
 * @property {boolean} [is_updated]
 * @property {string} [id]
 */

/**
 * @typedef DeleteAddressResponse
 * @property {boolean} [is_deleted]
 * @property {string} [id]
 */

/**
 * @typedef PlatformSelectCartAddressRequest
 * @property {string} [checkout_mode]
 * @property {string} [billing_address_id]
 * @property {string} [cart_id]
 * @property {string} [id]
 */

/**
 * @typedef ShipmentResponse
 * @property {string} [dp_id]
 * @property {string} [order_type]
 * @property {ShipmentPromise} [promise]
 * @property {number} [fulfillment_id]
 * @property {string} [box_type]
 * @property {string} [fulfillment_type]
 * @property {CartProductInfo[]} [items]
 * @property {number} [shipments]
 * @property {string} [shipment_type]
 * @property {Object} [dp_options]
 */

/**
 * @typedef CartShipmentsResponse
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [error]
 * @property {boolean} [buy_now]
 * @property {string} [comment]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [coupon_text]
 * @property {string} [message]
 * @property {boolean} [restrict_checkout]
 * @property {boolean} [is_valid]
 * @property {string} [id]
 * @property {string} [delivery_charge_info]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {number} [cart_id]
 * @property {string} [last_modified]
 * @property {string} [gstin]
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode]
 * @property {string} [uid]
 * @property {ShipmentResponse[]} [shipments]
 */

/**
 * @typedef UpdateCartShipmentItem
 * @property {string} shipment_type
 * @property {number} [quantity]
 * @property {string} article_uid
 */

/**
 * @typedef UpdateCartShipmentRequest
 * @property {UpdateCartShipmentItem[]} shipments
 */

/**
 * @typedef CartMetaRequest
 * @property {string} [comment]
 * @property {string} [checkout_mode]
 * @property {string} [gstin]
 * @property {Object} [pick_up_customer_details]
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
 * @property {string} user
 * @property {string} first_name
 * @property {string} _id
 * @property {string} last_name
 */

/**
 * @typedef PlatformCartCheckoutDetailRequest
 * @property {string} [merchant_code]
 * @property {string} [callback_url]
 * @property {string} id
 * @property {Object} [billing_address]
 * @property {StaffCheckout} [staff]
 * @property {Object} [meta]
 * @property {number} [ordering_store]
 * @property {string} [billing_address_id]
 * @property {string} [aggregator]
 * @property {string} [payment_identifier]
 * @property {string} user_id
 * @property {Object} [payment_params]
 * @property {string} [address_id]
 * @property {string} payment_mode
 * @property {Object} [extra_meta]
 * @property {boolean} [payment_auto_confirm]
 * @property {Object} [delivery_address]
 */

/**
 * @typedef CheckCart
 * @property {number} [cod_charges]
 * @property {string} [cod_message]
 * @property {Object[]} [store_emps]
 * @property {string} [error_message]
 * @property {CartProductInfo[]} [items]
 * @property {string} [comment]
 * @property {string} [user_type]
 * @property {boolean} [cod_available]
 * @property {string} [order_id]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [message]
 * @property {boolean} [restrict_checkout]
 * @property {string} [id]
 * @property {string} [delivery_charge_info]
 * @property {number} [cart_id]
 * @property {string} [last_modified]
 * @property {CartCurrency} [currency]
 * @property {boolean} [is_valid]
 * @property {number} [delivery_charge_order_value]
 * @property {string} [uid]
 * @property {boolean} [success]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [buy_now]
 * @property {string} [store_code]
 * @property {number} [delivery_charges]
 * @property {string} [coupon_text]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [gstin]
 * @property {string} [checkout_mode]
 */

/**
 * @typedef CartCheckoutResponse
 * @property {CheckCart} [cart]
 * @property {boolean} [success]
 * @property {string} [callback_url]
 * @property {string} [message]
 * @property {string} [app_intercept_url]
 * @property {string} [payment_confirm_url]
 * @property {Object} [data]
 * @property {string} [order_id]
 */

/**
 * @typedef CartDeliveryModesResponse
 * @property {string[]} [available_modes]
 * @property {number[]} [pickup_stores]
 */

/**
 * @typedef PickupStoreDetail
 * @property {number} [pincode]
 * @property {string} [city]
 * @property {string} [phone]
 * @property {number} [id]
 * @property {string} [address_type]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [area]
 * @property {number} [uid]
 * @property {string} [area_code_slug]
 * @property {string} [landmark]
 * @property {string} [address]
 * @property {string} [country]
 * @property {string} [store_code]
 * @property {string} [area_code]
 * @property {string} [state]
 */

/**
 * @typedef StoreDetailsResponse
 * @property {PickupStoreDetail[]} [items]
 */

/**
 * @typedef UpdateCartPaymentRequest
 * @property {string} [merchant_code]
 * @property {string} [id]
 * @property {string} [payment_identifier]
 * @property {string} [aggregator_name]
 * @property {string} [payment_mode]
 * @property {string} [address_id]
 */

/**
 * @typedef CouponValidity
 * @property {string} [title]
 * @property {string} [code]
 * @property {number} [discount]
 * @property {boolean} [valid]
 * @property {string} [display_message_en]
 */

/**
 * @typedef PaymentCouponValidate
 * @property {boolean} success
 * @property {string} [message]
 * @property {CouponValidity} [coupon_validity]
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
