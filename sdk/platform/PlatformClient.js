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
 * @property {boolean} success
 * @property {string} app_id
 * @property {Object[]} [aggregators]
 * @property {boolean} created
 * @property {string[]} display_fields
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} description
 * @property {boolean} success
 * @property {string} code
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} merchant_salt
 * @property {string} config_type
 * @property {boolean} [is_active]
 * @property {string} key
 * @property {string} secret
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
 * @property {string} description
 * @property {string} code
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
 * @typedef IntentApp
 * @property {string} [display_name]
 * @property {string} [package_name]
 * @property {PaymentModeLogo} [logos]
 * @property {string} [code]
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [package_name]
 * @property {string} [code]
 */

/**
 * @typedef PaymentModeList
 * @property {string} aggregator_name
 * @property {string} [card_id]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [card_type]
 * @property {number} [timeout]
 * @property {number} [retry_count]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [card_name]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {number} [cod_limit]
 * @property {string} [fynd_vpa]
 * @property {number} [remaining_limit]
 * @property {string} [card_number]
 * @property {string} [card_reference]
 * @property {string} [nickname]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {boolean} [intent_flow]
 * @property {string} [code]
 * @property {string} [merchant_code]
 * @property {string} [card_issuer]
 * @property {string} [card_brand]
 * @property {string} [card_brand_image]
 * @property {string} [card_fingerprint]
 * @property {string} [name]
 * @property {number} [cod_limit_per_order]
 * @property {string} [card_token]
 * @property {number} [exp_month]
 * @property {boolean} [expired]
 * @property {number} [display_priority]
 * @property {number} [exp_year]
 * @property {string} [display_name]
 * @property {string} [card_isin]
 * @property {PaymentModeLogo} [logo_url]
 */

/**
 * @typedef RootPaymentMode
 * @property {boolean} [add_card_enabled]
 * @property {boolean} [save_card]
 * @property {string} [aggregator_name]
 * @property {number} display_priority
 * @property {boolean} [is_pay_by_card_pl]
 * @property {string} display_name
 * @property {string} name
 * @property {PaymentModeList[]} [list]
 * @property {boolean} [anonymous_enable]
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
 * @property {string} transfer_type
 * @property {boolean} is_default
 * @property {Object[]} payouts_aggregators
 * @property {boolean} is_active
 * @property {Object} customers
 * @property {Object} unique_transfer_no
 */

/**
 * @typedef PayoutsResponse
 * @property {Payout[]} items
 * @property {boolean} success
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} ifsc_code
 * @property {string} account_type
 * @property {string} [country]
 * @property {string} [city]
 * @property {string} [bank_name]
 * @property {string} [branch_name]
 * @property {number} [pincode]
 * @property {string} [state]
 * @property {string} [account_no]
 * @property {string} [account_holder]
 */

/**
 * @typedef PayoutRequest
 * @property {PayoutBankDetails} bank_details
 * @property {string} transfer_type
 * @property {string} unique_external_id
 * @property {boolean} is_active
 * @property {string} aggregator
 * @property {Object} users
 */

/**
 * @typedef PayoutResponse
 * @property {Object} bank_details
 * @property {boolean} success
 * @property {string} transfer_type
 * @property {Object} payouts
 * @property {boolean} is_active
 * @property {string} aggregator
 * @property {boolean} created
 * @property {string} payment_status
 * @property {string} unique_transfer_no
 * @property {Object} users
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_active
 * @property {boolean} success
 * @property {boolean} is_default
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {string} unique_external_id
 */

/**
 * @typedef DeletePayoutResponse
 * @property {boolean} success
 */

/**
 * @typedef SubscriptionPaymentMethodResponse
 * @property {boolean} success
 * @property {Object[]} data
 */

/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success
 */

/**
 * @typedef SubscriptionConfigResponse
 * @property {string} aggregator
 * @property {boolean} success
 * @property {Object} config
 */

/**
 * @typedef SaveSubscriptionSetupIntentRequest
 * @property {string} unique_external_id
 */

/**
 * @typedef SaveSubscriptionSetupIntentResponse
 * @property {boolean} success
 * @property {Object} data
 */

/**
 * @typedef RefundAccountResponse
 * @property {boolean} success
 * @property {Object} [data]
 * @property {string} message
 * @property {boolean} [is_verified_flag]
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} description
 * @property {boolean} success
 * @property {string} code
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} ifsc_code
 * @property {string} account_holder
 * @property {string} bank_name
 * @property {string} account_no
 * @property {string} branch_name
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id
 * @property {BankDetailsForOTP} details
 */

/**
 * @typedef IfscCodeResponse
 * @property {string} bank_name
 * @property {boolean} [success]
 * @property {string} branch_name
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} [comment]
 * @property {string} [delights_user_name]
 * @property {boolean} is_active
 * @property {string} bank_name
 * @property {string} title
 * @property {string} modified_on
 * @property {string} email
 * @property {string} ifsc_code
 * @property {string} subtitle
 * @property {number} id
 * @property {string} address
 * @property {string} account_no
 * @property {string} [branch_name]
 * @property {string} created_on
 * @property {string} [mobile]
 * @property {string} beneficiary_id
 * @property {string} account_holder
 * @property {string} transfer_mode
 * @property {string} display_name
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [payment_gateway]
 * @property {string} [order_id]
 * @property {string} [payment_id]
 * @property {Object} [extra_meta]
 * @property {string} [current_status]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} mode
 * @property {number} amount
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
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef PlatformPaymentOptions
 * @property {number} [cod_charges]
 * @property {number} [cod_amount_limit]
 * @property {Object} [payment_selection_lock]
 * @property {string} source
 * @property {Object} [callback_url]
 * @property {Object} methods
 * @property {boolean} [anonymous_cod]
 * @property {string} mode_of_payment
 * @property {boolean} enabled
 */

/**
 * @typedef PlatfromPaymentConfig
 * @property {boolean} success
 * @property {PlatformPaymentOptions} data
 * @property {string} message
 */

/**
 * @typedef UpdatePlatformPaymentConfig
 * @property {number} [cod_charges]
 * @property {number} [cod_amount_limit]
 * @property {Object} [payment_selection_lock]
 * @property {boolean} [anonymous_cod]
 * @property {Object} methods
 */

/**
 * @typedef CODdata
 * @property {number} limit
 * @property {boolean} is_active
 * @property {string} user_id
 * @property {number} remaining_limit
 * @property {number} usages
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
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef EdcDevice
 * @property {string} terminal_unique_identifier
 * @property {number} aggregator_id
 * @property {string} device_tag
 * @property {string} is_active
 * @property {string} terminal_serial_no
 * @property {string} edc_device_serial_no
 * @property {string} application_id
 * @property {string} [merchant_store_pos_code]
 * @property {number} store_id
 */

/**
 * @typedef EdcDeviceDetailsResponse
 * @property {boolean} success
 * @property {EdcDevice} data
 */

/**
 * @typedef EdcAddRequest
 * @property {string} edc_serial_no
 * @property {number} aggregator_id
 * @property {string} terminal_serial_no
 * @property {string} [device_tag]
 * @property {number} [store_id]
 */

/**
 * @typedef EdcDeviceAddResponse
 * @property {boolean} success
 * @property {EdcDevice} data
 */

/**
 * @typedef EdcUpdateRequest
 * @property {number} [aggregator_id]
 * @property {string} [merchant_store_pos_code]
 * @property {string} [is_active]
 * @property {string} terminal_serial_no
 * @property {string} [device_tag]
 * @property {number} [store_id]
 */

/**
 * @typedef EdcDeviceUpdateResponse
 * @property {boolean} success
 */

/**
 * @typedef EdcDeviceListResponse
 * @property {boolean} success
 * @property {number} current_page
 * @property {EdcDevice[]} device_list
 * @property {number} inactive_device_count
 * @property {number} device_count
 * @property {boolean} next_page
 * @property {number} active_device_count
 * @property {number} total_stores
 * @property {number} total_page
 */

/**
 * @typedef PaymentInitializationRequest
 * @property {string} email
 * @property {string} order_id
 * @property {string} [vpa]
 * @property {string} currency
 * @property {number} [timeout]
 * @property {string} customer_id
 * @property {string} contact
 * @property {string} [razorpay_payment_id]
 * @property {string} [device_id]
 * @property {string} merchant_order_id
 * @property {string} aggregator
 * @property {string} method
 * @property {number} amount
 */

/**
 * @typedef PaymentInitializationResponse
 * @property {string} [virtual_id]
 * @property {boolean} success
 * @property {string} polling_url
 * @property {string} [bqr_image]
 * @property {string} [vpa]
 * @property {string} method
 * @property {string} [currency]
 * @property {number} [timeout]
 * @property {string} [customer_id]
 * @property {string} [upi_poll_url]
 * @property {string} [razorpay_payment_id]
 * @property {string} [device_id]
 * @property {string} merchant_order_id
 * @property {string} aggregator
 * @property {string} [status]
 * @property {number} [amount]
 * @property {string} [aggregator_order_id]
 */

/**
 * @typedef PaymentStatusUpdateRequest
 * @property {string} email
 * @property {string} order_id
 * @property {string} [vpa]
 * @property {string} method
 * @property {string} currency
 * @property {string} customer_id
 * @property {string} contact
 * @property {string} [device_id]
 * @property {string} merchant_order_id
 * @property {string} aggregator
 * @property {string} status
 * @property {number} amount
 */

/**
 * @typedef PaymentStatusUpdateResponse
 * @property {boolean} [success]
 * @property {string} [redirect_url]
 * @property {string} aggregator_name
 * @property {boolean} retry
 * @property {string} status
 */

/**
 * @typedef ResendOrCancelPaymentRequest
 * @property {string} request_type
 * @property {string} order_id
 * @property {string} [device_id]
 */

/**
 * @typedef LinkStatus
 * @property {boolean} status
 * @property {string} message
 */

/**
 * @typedef ResendOrCancelPaymentResponse
 * @property {boolean} success
 * @property {LinkStatus} data
 */

/**
 * @typedef FilterInfoOption
 * @property {string} [value]
 * @property {string} [name]
 * @property {string} text
 */

/**
 * @typedef FiltersInfo
 * @property {string} value
 * @property {FilterInfoOption[]} [options]
 * @property {string} type
 * @property {string} text
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} id
 * @property {string} code
 */

/**
 * @typedef Prices
 * @property {number} [fynd_credits]
 * @property {number} [amount_paid]
 * @property {number} [cashback]
 * @property {number} [refund_credit]
 * @property {number} [cod_charges]
 * @property {number} [price_marked]
 * @property {number} [discount]
 * @property {number} [coupon_value]
 * @property {number} [promotion_effective_discount]
 * @property {number} [price_effective]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [value_of_good]
 * @property {number} [refund_amount]
 * @property {number} [cashback_applied]
 * @property {number} [tax_collected_at_source]
 * @property {number} [delivery_charge]
 */

/**
 * @typedef UserDataInfo
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {number} [uid]
 * @property {string} [avis_user_id]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [name]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [gender]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} gst_fee
 * @property {string} gstin_code
 * @property {number} brand_calculated_amount
 * @property {number} value_of_good
 * @property {number} tax_collected_at_source
 */

/**
 * @typedef PlatformItem
 * @property {string} [color]
 * @property {boolean} [can_return]
 * @property {boolean} [can_cancel]
 * @property {string} [size]
 * @property {string[]} [images]
 * @property {string} [code]
 * @property {string} [l3_category_name]
 * @property {string} [name]
 * @property {number} [id]
 * @property {number} [department_id]
 * @property {number} [l3_category]
 * @property {string[]} [image]
 * @property {string[]} [l1_category]
 */

/**
 * @typedef BagUnit
 * @property {Object} status
 * @property {number} total_shipment_bags
 * @property {boolean} [can_return]
 * @property {boolean} [can_cancel]
 * @property {string} ordering_channel
 * @property {Prices} [prices]
 * @property {GSTDetailsData} [gst]
 * @property {PlatformItem} [item]
 * @property {string} shipment_id
 * @property {number} bag_id
 * @property {number} item_quantity
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} type
 * @property {string} logo
 */

/**
 * @typedef ShipmentStatus
 * @property {string} status
 * @property {string} hex_code
 * @property {string} actual_status
 * @property {string} title
 * @property {string} ops_status
 */

/**
 * @typedef ShipmentItem
 * @property {Object} [sla]
 * @property {number} total_shipments_in_order
 * @property {string} created_at
 * @property {Object} [channel]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {Prices} [prices]
 * @property {UserDataInfo} [user]
 * @property {string} id
 * @property {Object} [payment_methods]
 * @property {string} fulfilling_centre
 * @property {number} shipment_created_at
 * @property {number} total_bags_count
 * @property {BagUnit[]} [bags]
 * @property {Object} [application]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {ShipmentStatus} [shipment_status]
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {Object} [applied_filters]
 * @property {Object} [page]
 * @property {FiltersInfo[]} [filters]
 * @property {ShipmentItem[]} [items]
 */

/**
 * @typedef Error
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef UserDetailsData
 * @property {string} [email]
 * @property {string} pincode
 * @property {string} address
 * @property {string} name
 * @property {string} phone
 * @property {string} country
 * @property {string} state
 * @property {string} city
 */

/**
 * @typedef DiscountRules
 * @property {number} [value]
 * @property {string} [type]
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
 * @property {boolean} [mrp_promotion]
 * @property {number} [article_quantity]
 * @property {DiscountRules[]} [discount_rules]
 * @property {string} [promo_id]
 * @property {BuyRules[]} [buy_rules]
 * @property {number} [amount]
 * @property {string} [promotion_type]
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [return_config]
 * @property {string} [uid]
 * @property {Object} [identifiers]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} refund_credit
 * @property {string} size
 * @property {Identifier} identifiers
 * @property {number} brand_calculated_amount
 * @property {number} value_of_good
 * @property {number} cashback_applied
 * @property {number} amount_paid
 * @property {number} cod_charges
 * @property {number} price_effective
 * @property {number} [amount_paid_roundoff]
 * @property {number} [tax_collected_at_source]
 * @property {number} gst_tax_percentage
 * @property {number} gst_fee
 * @property {number} transfer_price
 * @property {string} gst_tag
 * @property {number} coupon_value
 * @property {boolean} added_to_fynd_cash
 * @property {number} delivery_charge
 * @property {number} total_units
 * @property {number} fynd_credits
 * @property {string} hsn_code
 * @property {number} cashback
 * @property {number} price_marked
 * @property {number} discount
 * @property {number} promotion_effective_discount
 * @property {string} item_name
 * @property {number} coupon_effective_discount
 */

/**
 * @typedef BagGST
 * @property {string} [hsn_code]
 * @property {number} [gst_tax_percentage]
 * @property {number} [gst_fee]
 * @property {string} [gst_tag]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [brand_calculated_amount]
 * @property {number} [value_of_good]
 * @property {string} [gstin_code]
 */

/**
 * @typedef OrderBrandName
 * @property {string} logo
 * @property {number} id
 * @property {string} brand_name
 * @property {string} [modified_on]
 * @property {string} [company]
 * @property {string} created_on
 */

/**
 * @typedef BagConfigs
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_returnable
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} allow_force_return
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [email]
 * @property {string} [address2]
 * @property {string} [address1]
 * @property {string} [address_type]
 * @property {string} [pincode]
 * @property {string} [contact_person]
 * @property {number} [longitude]
 * @property {string} [created_at]
 * @property {string} [address_category]
 * @property {string} [updated_at]
 * @property {string} [phone]
 * @property {number} [latitude]
 * @property {string} [version]
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [area]
 * @property {string} [city]
 * @property {string} [landmark]
 */

/**
 * @typedef BagStateMapper
 * @property {number} bs_id
 * @property {string} [app_state_name]
 * @property {string} name
 * @property {string} display_name
 * @property {string} [app_display_name]
 * @property {boolean} [app_facing]
 * @property {string} state_type
 * @property {string} journey_type
 * @property {boolean} [is_active]
 * @property {boolean} [notify_customer]
 */

/**
 * @typedef CurrentStatus
 * @property {string} [status]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [created_at]
 * @property {number} [delivery_partner_id]
 * @property {number} current_status_id
 * @property {string} [delivery_awb_number]
 * @property {number} [updated_at]
 * @property {number} [store_id]
 * @property {number} [state_id]
 * @property {string} [shipment_id]
 * @property {number} [bag_id]
 * @property {boolean} [kafka_sync]
 * @property {string} [state_type]
 */

/**
 * @typedef OrderBags
 * @property {AppliedPromos[]} [applied_promos]
 * @property {OrderBagArticle} [article]
 * @property {number} bag_id
 * @property {FinancialBreakup} [financial_breakup]
 * @property {string} [identifier]
 * @property {BagGST} [gst_details]
 * @property {OrderBrandName} [brand]
 * @property {BagConfigs} [bag_configs]
 * @property {string} [entity_type]
 * @property {boolean} [can_cancel]
 * @property {Object} [parent_promo_bags]
 * @property {Prices} [prices]
 * @property {number} [line_number]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {boolean} [can_return]
 * @property {string} [seller_identifier]
 * @property {CurrentStatus} [current_status]
 * @property {string} [display_name]
 * @property {PlatformItem} [item]
 * @property {number} [quantity]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [gst_tag]
 * @property {string} [awb_no]
 * @property {string} [pincode]
 * @property {string} [name]
 * @property {number} [id]
 * @property {string} [country]
 * @property {string} [track_url]
 * @property {string} [eway_bill_id]
 */

/**
 * @typedef BagStatusHistory
 * @property {string} status
 * @property {number} [bsh_id]
 * @property {Object[]} [reasons]
 * @property {boolean} [forward]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {number} [delivery_partner_id]
 * @property {number} [store_id]
 * @property {string} [display_name]
 * @property {string} [app_display_name]
 * @property {string} [shipment_id]
 * @property {number} [state_id]
 * @property {number} [bag_id]
 * @property {string} [state_type]
 * @property {boolean} [kafka_sync]
 * @property {string} [delivery_awb_number]
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [status]
 * @property {string[]} [bag_list]
 * @property {string} [created_at]
 * @property {number} [id]
 * @property {string} [shipment_id]
 */

/**
 * @typedef TrackingList
 * @property {string} status
 * @property {string} [time]
 * @property {string} text
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [order_date]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [ordering_channel]
 * @property {string} [cod_charges]
 * @property {string} [source]
 * @property {string} [affiliate_id]
 * @property {string} fynd_order_id
 * @property {string} [order_value]
 * @property {Object} [tax_details]
 */

/**
 * @typedef FulfillingStore
 * @property {string} contact_person
 * @property {string} pincode
 * @property {Object} meta
 * @property {string} address
 * @property {string} phone
 * @property {number} id
 * @property {string} country
 * @property {string} state
 * @property {string} fulfillment_channel
 * @property {string} city
 * @property {string} code
 * @property {string} store_name
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [source]
 * @property {string} [mode]
 * @property {string} [logo]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {UserDetailsData} [delivery_details]
 * @property {string} user_id
 * @property {string} [picked_date]
 * @property {string} [packaging_type]
 * @property {Object} fyndstore_emp
 * @property {string} [secured_delivery_flag]
 * @property {boolean} [go_green]
 * @property {string[]} [shipment_images]
 * @property {string} [due_date]
 * @property {Object} [user_info]
 * @property {string} [payment_mode]
 * @property {string} [pay_button]
 * @property {OrderBags[]} [bags]
 * @property {string} can_break
 * @property {string} [journey_type]
 * @property {Object[]} [forward_tracking_list]
 * @property {Object[]} [forward_order_status]
 * @property {boolean} is_invoiced
 * @property {Object} [delivery_slot]
 * @property {Object} [escalation]
 * @property {number} status_progress
 * @property {string} credit_note_id
 * @property {string} order_type
 * @property {Object} ordering_store
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [operational_status]
 * @property {Object[]} [custom_meta]
 * @property {UserDetailsData} [billing_details]
 * @property {DPDetailsData} [dp_details]
 * @property {number} [shipment_quantity]
 * @property {Object} current_shipment_status
 * @property {string[]} [child_nodes]
 * @property {Object} [refund_details]
 * @property {number} [total_bags]
 * @property {string} [kirana_store_id]
 * @property {boolean} is_packaging_order
 * @property {string} [refund_text]
 * @property {string} affiliate_shipment_id
 * @property {number} [total_items]
 * @property {string} tracking_url
 * @property {boolean} [can_cancel]
 * @property {string} [priority_text]
 * @property {boolean} platform_logo
 * @property {string} [order_created_time]
 * @property {Prices} [prices]
 * @property {boolean} is_fynd_coupon
 * @property {boolean} [beneficiary_details]
 * @property {boolean} [enable_tracking]
 * @property {string} [user_agent]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {Object} order_status
 * @property {string} [is_fynd_store]
 * @property {Object} company
 * @property {string} [mid]
 * @property {Object} [bank_data]
 * @property {Object[]} [forward_shipment_status]
 * @property {Object[]} items
 * @property {ShipmentStatusData} [status]
 * @property {Object} [coupon]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} lock_status
 * @property {boolean} [enable_dp_tracking]
 * @property {boolean} is_not_fynd_source
 * @property {Object[]} delivery_status
 * @property {boolean} [can_return]
 * @property {string} [is_pdsr]
 * @property {OrderDetailsData} [order]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {string} email_id
 * @property {ShipmentPayments} [payments]
 * @property {Object} invoice
 * @property {string} shipment_id
 * @property {string} [vertical]
 * @property {string} [shipment_status]
 * @property {string} [replacement_details]
 */

/**
 * @typedef OrderMeta
 * @property {number} [mongo_cart_id]
 * @property {Object[]} [files]
 * @property {string} [order_platform]
 * @property {string} [currency_symbol]
 * @property {string} [payment_type]
 * @property {string} [order_type]
 * @property {number} [ordering_store]
 * @property {string} [customer_note]
 * @property {Object} [extra_meta]
 * @property {string} [comment]
 * @property {number} [employee_id]
 * @property {Object} [staff]
 * @property {string[]} [order_child_entities]
 * @property {number} [cart_id]
 * @property {Object[]} [order_tags]
 */

/**
 * @typedef OrderDict
 * @property {string} order_date
 * @property {OrderMeta} [meta]
 * @property {Prices} [prices]
 * @property {string} fynd_order_id
 * @property {Object} [payment_methods]
 */

/**
 * @typedef PlatformShipment
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [picked_date]
 * @property {string} [packaging_type]
 * @property {string[]} [shipment_images]
 * @property {string} [payment_mode]
 * @property {OrderBags[]} [bags]
 * @property {string} [journey_type]
 * @property {Object} [delivery_slot]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [operational_status]
 * @property {Object[]} [custom_meta]
 * @property {UserDetailsData} [billing_details]
 * @property {DPDetailsData} [dp_details]
 * @property {number} [shipment_quantity]
 * @property {number} [total_bags]
 * @property {number} [total_items]
 * @property {string} [priority_text]
 * @property {string} [platform_logo]
 * @property {Prices} [prices]
 * @property {string} [user_agent]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {ShipmentStatusData} [status]
 * @property {Object} [coupon]
 * @property {TrackingList[]} [tracking_list]
 * @property {boolean} [enable_dp_tracking]
 * @property {OrderDetailsData} [order]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {ShipmentPayments} [payments]
 * @property {string} shipment_id
 * @property {string} [vertical]
 * @property {string} [shipment_status]
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {boolean} success
 * @property {OrderDict} [order]
 * @property {PlatformShipment[]} [shipments]
 */

/**
 * @typedef SubLane
 * @property {number} [total_items]
 * @property {number} [index]
 * @property {Object[]} [actions]
 * @property {string} [value]
 * @property {string} [text]
 */

/**
 * @typedef SuperLane
 * @property {string} value
 * @property {SubLane[]} [options]
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
 * @property {string} [display]
 * @property {string} [value]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef PlatformOrderItems
 * @property {number} [total_order_value]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {Object} [meta]
 * @property {PlatformChannel} [channel]
 * @property {string} [order_created_time]
 * @property {string} [order_id]
 * @property {number} [order_value]
 * @property {UserDataInfo} [user_info]
 * @property {string} [payment_mode]
 * @property {PlatformShipment[]} [shipments]
 */

/**
 * @typedef OrderListingResponse
 * @property {number} [total_count]
 * @property {string} [lane]
 * @property {Page} [page]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {PlatformOrderItems[]} [items]
 */

/**
 * @typedef Options
 * @property {number} [value]
 * @property {string} [text]
 */

/**
 * @typedef MetricsCount
 * @property {number} value
 * @property {string} key
 * @property {Options[]} [options]
 * @property {string} text
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [status]
 * @property {string} [raw_status]
 * @property {string} [last_location_recieved_at]
 * @property {string} [account_name]
 * @property {string} [shipment_type]
 * @property {string} [reason]
 * @property {Object} [meta]
 * @property {string} [updated_at]
 * @property {string} [awb]
 * @property {string} [updated_time]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {Object} [meta]
 * @property {PlatformTrack[]} [results]
 */

/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [processed]
 * @property {FiltersInfo[]} [unfulfilled]
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [action_centre]
 * @property {FiltersInfo[]} [filters]
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
 * @property {string} [status]
 * @property {string} [report_id]
 * @property {string} [report_requested_at]
 * @property {string} [report_type]
 * @property {string} [s3_key]
 * @property {string} [report_created_at]
 * @property {string} [display_name]
 * @property {Object} [request_details]
 * @property {string} [report_name]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [company_id]
 * @property {string} [jio_code]
 * @property {string} [article_id]
 * @property {string} [item_id]
 */

/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */

/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [value]
 * @property {string} [message]
 * @property {string} [type]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {Object[]} [data]
 * @property {boolean} [success]
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {string} [trace_id]
 * @property {string} [identifier]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {boolean} success
 * @property {string} [message]
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {Object} [data]
 * @property {string} [store_code]
 * @property {string} [company_id]
 * @property {string} [invoice_status]
 * @property {string} [store_id]
 * @property {Object} [invoice]
 * @property {boolean} do_invoice_label_generated
 * @property {string} batch_id
 * @property {Object} [label]
 * @property {string} [store_name]
 */

/**
 * @typedef URL
 * @property {string} [url]
 */

/**
 * @typedef FileUploadResponse
 * @property {number} [expiry]
 * @property {string} [url]
 */

/**
 * @typedef FileResponse
 * @property {string} [file_name]
 * @property {number} [size]
 * @property {string} [method]
 * @property {URL} [cdn]
 * @property {string} [operation]
 * @property {string} [content_type]
 * @property {string} [namespace]
 * @property {string} [file_path]
 * @property {string[]} [tags]
 * @property {FileUploadResponse} [upload]
 */

/**
 * @typedef bulkListingData
 * @property {string} [user_id]
 * @property {string} [store_code]
 * @property {string} [uploaded_on]
 * @property {Object[]} [successful_shipments]
 * @property {string} [file_name]
 * @property {number} [processing]
 * @property {number} [successful]
 * @property {string[]} [processing_shipments]
 * @property {number} [company_id]
 * @property {number} [total]
 * @property {string} [store_name]
 * @property {Object[]} [failed_shipments]
 * @property {number} [store_id]
 * @property {number} [failed]
 * @property {string} [excel_url]
 * @property {string} [user_name]
 * @property {string} [status]
 * @property {string} [id]
 * @property {string} [batch_id]
 */

/**
 * @typedef BulkListingPage
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {number} [size]
 * @property {number} [total]
 * @property {number} [current]
 * @property {string} [type]
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
 * @property {number} [id]
 * @property {string} [display_name]
 */

/**
 * @typedef Reason
 * @property {number} [id]
 * @property {string} [display_name]
 * @property {QuestionSet[]} [question_set]
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
 * @property {number} [total_shipments_count]
 * @property {string} [company_id]
 * @property {number} [successful_shipments_count]
 * @property {string} [batch_id]
 * @property {number} [processing_shipments_count]
 * @property {number} [failed_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {boolean} [status]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string[]} [failed_records]
 * @property {string} [uploaded_by]
 * @property {string} [user_id]
 * @property {string} [success]
 * @property {string[]} [error]
 * @property {string} [uploaded_on]
 * @property {string} [message]
 */

/**
 * @typedef Dimensions
 * @property {number} [width]
 * @property {boolean} [is_default]
 * @property {number} [height]
 * @property {string} [unit]
 * @property {number} [length]
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
 * @typedef Article
 * @property {boolean} [is_set]
 * @property {string} seller_identifier
 * @property {string} size
 * @property {Identifier} identifiers
 * @property {string} uid
 * @property {Dimensions} [dimensions]
 * @property {Object} [child_details]
 * @property {Object} [a_set]
 * @property {Object} [raw_meta]
 * @property {Object} [esp_modified]
 * @property {ReturnConfig} [return_config]
 * @property {Weight} [weight]
 * @property {string} _id
 * @property {string} [code]
 */

/**
 * @typedef AffiliateMeta
 * @property {string} [channel_shipment_id]
 * @property {number} [loyalty_discount]
 * @property {string} [channel_order_id]
 * @property {number} [size_level_total_qty]
 * @property {string} [order_item_id]
 * @property {string} [due_date]
 * @property {string} [coupon_code]
 * @property {string} [box_type]
 * @property {boolean} [is_priority]
 * @property {number} [quantity]
 * @property {number} [employee_discount]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {string} affiliate_order_id
 * @property {number} [loyalty_discount]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_bag_id
 * @property {number} [employee_discount]
 */

/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [password]
 * @property {string} [username]
 * @property {boolean} enabled
 * @property {string} [user]
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEwaybill} [e_waybill]
 * @property {StoreEinvoice} [e_invoice]
 */

/**
 * @typedef Document
 * @property {string} ds_type
 * @property {string} legal_name
 * @property {string} [url]
 * @property {boolean} verified
 * @property {string} value
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [user]
 * @property {string} [username]
 * @property {string} [password]
 */

/**
 * @typedef StoreMeta
 * @property {string} stage
 * @property {Object} [additional_contact_details]
 * @property {Object} [ewaybill_portal_details]
 * @property {StoreGstCredentials} gst_credentials
 * @property {StoreDocuments} [documents]
 * @property {Object[]} [timing]
 * @property {string} display_name
 * @property {string} [gst_number]
 * @property {string[]} [notification_emails]
 * @property {Object} [product_return_config]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 */

/**
 * @typedef StoreAddress
 * @property {string} [email]
 * @property {string} [address2]
 * @property {string} country_code
 * @property {string} created_at
 * @property {number} latitude
 * @property {string} state
 * @property {string} address_type
 * @property {number} longitude
 * @property {string} phone
 * @property {string} country
 * @property {string} contact_person
 * @property {string} address_category
 * @property {string} updated_at
 * @property {string} [area]
 * @property {string} [landmark]
 * @property {string} address1
 * @property {number} pincode
 * @property {string} [version]
 * @property {string} city
 */

/**
 * @typedef Store
 * @property {string} [address2]
 * @property {string} created_at
 * @property {number} [packaging_material_count]
 * @property {string[]} [brand_store_tags]
 * @property {number} latitude
 * @property {string} name
 * @property {string} [order_integration_id]
 * @property {string} location_type
 * @property {string} state
 * @property {string} [store_active_from]
 * @property {number} [alohomora_user_id]
 * @property {number} longitude
 * @property {number} company_id
 * @property {string} store_email
 * @property {number} phone
 * @property {string} country
 * @property {boolean} [is_archived]
 * @property {string} fulfillment_channel
 * @property {Object} [brand_id]
 * @property {string} login_username
 * @property {string} contact_person
 * @property {StoreMeta} meta
 * @property {string} [updated_at]
 * @property {string} s_id
 * @property {string} [vat_no]
 * @property {string} [mall_name]
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} [mall_area]
 * @property {boolean} [is_active]
 * @property {string} [code]
 * @property {string} address1
 * @property {string} pincode
 * @property {number} [parent_store_id]
 * @property {string} city
 * @property {StoreAddress} [store_address_json]
 */

/**
 * @typedef BagGSTDetails
 * @property {number} cgst_tax_percentage
 * @property {string} hsn_code
 * @property {number} gst_tax_percentage
 * @property {number} gst_fee
 * @property {string} gst_tag
 * @property {string} cgst_gst_fee
 * @property {number} sgst_tax_percentage
 * @property {string} igst_gst_fee
 * @property {string} hsn_code_id
 * @property {number} igst_tax_percentage
 * @property {boolean} [is_default_hsn_code]
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 * @property {number} value_of_good
 * @property {string} [gstin_code]
 * @property {string} sgst_gst_fee
 */

/**
 * @typedef Brand
 * @property {string} [pickup_location]
 * @property {string} [script_last_ran]
 * @property {boolean} [is_virtual_invoice]
 * @property {number} [credit_note_expiry_days]
 * @property {string} [logo]
 * @property {string} [start_date]
 * @property {string} brand_name
 * @property {number} [modified_on]
 * @property {number} brand_id
 * @property {string} company
 * @property {string} [invoice_prefix]
 * @property {number} [created_on]
 * @property {boolean} [credit_note_allowed]
 */

/**
 * @typedef Dates
 * @property {Object} [delivery_date]
 * @property {string} [order_created]
 */

/**
 * @typedef B2BPODetails
 * @property {boolean} [partial_can_ret]
 * @property {string} [docker_number]
 * @property {number} [po_line_amount]
 * @property {number} [total_gst_percentage]
 * @property {number} [item_base_price]
 * @property {number} [po_tax_amount]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef EInvoice
 * @property {string} [error_message]
 * @property {string} [acknowledge_date]
 * @property {string} [signed_qr_code]
 * @property {string} [irn]
 * @property {string} [error_code]
 * @property {number} [acknowledge_no]
 * @property {string} [signed_invoice]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [invoice]
 * @property {EInvoice} [credit_note]
 */

/**
 * @typedef BuyerDetails
 * @property {number} pincode
 * @property {string} [ajio_site_id]
 * @property {string} address
 * @property {string} name
 * @property {string} state
 * @property {string} city
 * @property {string} gstin
 */

/**
 * @typedef Formatted
 * @property {string} [f_min]
 * @property {string} [f_max]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_min]
 * @property {string} [t_max]
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
 * @typedef ShipmentMeta
 * @property {string} [forward_affiliate_order_id]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {boolean} same_store_available
 * @property {string} [due_date]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {string} [po_number]
 * @property {string} [dp_id]
 * @property {Formatted} [formatted]
 * @property {string} [order_type]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [dp_sort_key]
 * @property {Object} [return_details]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [store_invoice_updated_date]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [return_affiliate_order_id]
 * @property {Object} [ewaybill_info]
 * @property {DebugInfo} [debug_info]
 * @property {string} [box_type]
 * @property {number} weight
 * @property {LockData} [lock_data]
 * @property {string} [marketplace_store_id]
 * @property {string} [packaging_name]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {Object} [bag_weight]
 * @property {Object} [external]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [return_awb_number]
 * @property {number} [shipment_weight]
 * @property {string} [awb_number]
 * @property {Object} [dp_options]
 * @property {string} [dp_name]
 * @property {Object} [b2c_buyer_details]
 * @property {number} [return_store_node]
 */

/**
 * @typedef PDFLinks
 * @property {string} [b2b]
 * @property {string} label_type
 * @property {string} [po_invoice]
 * @property {string} invoice_type
 * @property {string} [label_a4]
 * @property {string} [label_a6]
 * @property {string} [credit_note_url]
 * @property {string} [label_pos]
 * @property {string} [invoice_pos]
 * @property {string} [invoice]
 * @property {string} [invoice_a4]
 * @property {string} [invoice_a6]
 * @property {string} [label]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} affiliate_shipment_id
 * @property {string} affiliate_order_id
 * @property {string} [company_affiliate_tag]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_store_id
 * @property {string} [affiliate_id]
 * @property {ShipmentMeta} shipment_meta
 * @property {PDFLinks} [pdf_links]
 * @property {string} affiliate_bag_id
 * @property {string} [ad_id]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_returnable
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef Attributes
 * @property {string} [primary_color_hex]
 * @property {string} [essential]
 * @property {string} [marketer_name]
 * @property {string} [name]
 * @property {string} [brand_name]
 * @property {string} [primary_material]
 * @property {string[]} [gender]
 * @property {string} [marketer_address]
 * @property {string} [primary_color]
 */

/**
 * @typedef Item
 * @property {string} [color]
 * @property {string} size
 * @property {number} [l1_category_id]
 * @property {string} name
 * @property {Attributes} attributes
 * @property {string} [webstore_product_url]
 * @property {number} [department_id]
 * @property {string} [last_updated_at]
 * @property {string} brand
 * @property {number} item_id
 * @property {number} brand_id
 * @property {string} [branch_url]
 * @property {string[]} image
 * @property {boolean} [can_cancel]
 * @property {Object} [meta]
 * @property {string} slug_key
 * @property {string} [gender]
 * @property {string[]} [l2_category]
 * @property {string} [code]
 * @property {string[]} [l1_category]
 * @property {boolean} [can_return]
 * @property {string} [l3_category_name]
 * @property {number} [l3_category]
 * @property {number} [l2_category_id]
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {string[]} [tags]
 * @property {string} [order_integration_id]
 * @property {Object[]} [applied_promos]
 * @property {Article} article
 * @property {FinancialBreakup[]} financial_breakup
 * @property {string} journey_type
 * @property {string} [identifier]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {Store} [ordering_store]
 * @property {BagGSTDetails} gst_details
 * @property {number} b_id
 * @property {number} [bag_update_time]
 * @property {string} [b_type]
 * @property {Brand} brand
 * @property {string} [operational_status]
 * @property {number[]} [original_bag_list]
 * @property {BagStatusHistory} current_operational_status
 * @property {boolean} [restore_coupon]
 * @property {string} [entity_type]
 * @property {Object} [qc_required]
 * @property {Dates} [dates]
 * @property {Object} [restore_promos]
 * @property {BagMeta} [meta]
 * @property {Object} [parent_promo_bags]
 * @property {Prices} prices
 * @property {number} [line_number]
 * @property {BagStatusHistory[]} bag_status
 * @property {BagStatusHistory} [bag_status_history]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {BagReturnableCancelableStatus} status
 * @property {string} [seller_identifier]
 * @property {ArticleDetails} [article_details]
 * @property {BagStatusHistory} current_status
 * @property {string} [display_name]
 * @property {Item} item
 * @property {string} [shipment_id]
 * @property {Object[]} [reasons]
 * @property {number} [quantity]
 * @property {number} [no_of_bags_order]
 */

/**
 * @typedef ErrorResponse
 * @property {string} error
 * @property {string} message
 */

/**
 * @typedef Page1
 * @property {boolean} has_next
 * @property {number} size
 * @property {number} item_total
 * @property {number} current
 * @property {string} page_type
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
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [error]
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
 * @property {string} [mongo_article_id]
 * @property {string} [fynd_order_id]
 * @property {number} store_id
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [item_id]
 * @property {number} [bag_id]
 * @property {string} [set_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef Entities
 * @property {string} [id]
 * @property {string} reason_text
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {Entities[]} entities
 * @property {string} entity_type
 * @property {string} action_type
 * @property {string} action
 */

/**
 * @typedef Bags
 * @property {string} [affiliate_order_id]
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_bag_id]
 * @property {number} [bag_id]
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef CheckResponse
 * @property {boolean} [is_bag_locked]
 * @property {string} [status]
 * @property {string} [shipment_id]
 * @property {Bags[]} [bags]
 * @property {OriginalFilter} [original_filter]
 * @property {boolean} [is_shipment_locked]
 * @property {boolean} [lock_status]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {CheckResponse[]} [check_response]
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef AnnouncementResponse
 * @property {number} id
 * @property {number} [company_id]
 * @property {string} [title]
 * @property {string} [to_datetime]
 * @property {string} [platform_id]
 * @property {string} [description]
 * @property {string} [created_at]
 * @property {string} [platform_name]
 * @property {string} [logo_url]
 * @property {string} [from_datetime]
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
 * @typedef ReasonsData
 * @property {EntitiesReasons[]} [entities]
 * @property {ProductsReasons[]} [products]
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
 * @typedef Products
 * @property {string} [identifier]
 * @property {number} [quantity]
 * @property {number} [line_number]
 */

/**
 * @typedef ShipmentsRequest
 * @property {ReasonsData} [reasons]
 * @property {string} identifier
 * @property {DataUpdates} [data_updates]
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
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [force_transition]
 * @property {boolean} [unlock_before_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task]
 */

/**
 * @typedef ShipmentsResponse
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [stack_trace]
 * @property {Object} [final_state]
 * @property {string} [identifier]
 * @property {Object} [meta]
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
 * @property {string} id
 * @property {string} name
 * @property {string} token
 * @property {string} updated_at
 * @property {string} owner
 * @property {string} secret
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} [description]
 * @property {string} created_at
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
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateAppConfig} [app]
 * @property {AffiliateInventoryConfig} [inventory]
 */

/**
 * @typedef Affiliate
 * @property {string} id
 * @property {string} token
 * @property {AffiliateConfig} [config]
 */

/**
 * @typedef OrderConfig
 * @property {string} [bag_end_state]
 * @property {boolean} [create_user]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [store_lookup]
 * @property {Affiliate} affiliate
 * @property {string} [article_lookup]
 */

/**
 * @typedef ArticleDetails1
 * @property {number} brand_id
 * @property {Object} attributes
 * @property {Object} weight
 * @property {number} quantity
 * @property {Object} dimension
 * @property {Object} category
 * @property {string} _id
 */

/**
 * @typedef ShipmentDetails
 * @property {number} [dp_id]
 * @property {ArticleDetails1[]} articles
 * @property {number} fulfillment_id
 * @property {number} shipments
 * @property {Object} [meta]
 * @property {string} [box_type]
 * @property {string} affiliate_shipment_id
 */

/**
 * @typedef LocationDetails
 * @property {string} fulfillment_type
 * @property {ArticleDetails1[]} articles
 * @property {number} fulfillment_id
 */

/**
 * @typedef ShipmentConfig
 * @property {ShipmentDetails[]} shipment
 * @property {string} journey
 * @property {string} to_pincode
 * @property {string} payment_mode
 * @property {string} source
 * @property {LocationDetails} [location_details]
 * @property {string} identifier
 * @property {string} action
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderUser
 * @property {string} city
 * @property {number} phone
 * @property {string} first_name
 * @property {string} country
 * @property {string} email
 * @property {string} pincode
 * @property {string} [address2]
 * @property {string} [address1]
 * @property {number} mobile
 * @property {string} state
 * @property {string} last_name
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [label]
 * @property {string} [invoice]
 */

/**
 * @typedef AffiliateBag
 * @property {number} company_id
 * @property {number} discount
 * @property {number} item_id
 * @property {string} hsn_code_id
 * @property {string} _id
 * @property {number} price_effective
 * @property {MarketPlacePdf} [pdf_links]
 * @property {Object} affiliate_meta
 * @property {number} quantity
 * @property {number} price_marked
 * @property {number} transfer_price
 * @property {string} item_size
 * @property {number} unit_price
 * @property {string} seller_identifier
 * @property {number} store_id
 * @property {string} fynd_store_id
 * @property {string} modified_on
 * @property {string} affiliate_store_id
 * @property {number} avl_qty
 * @property {string} sku
 * @property {number} delivery_charge
 * @property {number} amount_paid
 * @property {Object} identifier
 */

/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
 */

/**
 * @typedef OrderPriority
 * @property {string} [fulfilment_priority_text]
 * @property {string} [affiliate_priority_code]
 * @property {number} [fulfilment_priority]
 */

/**
 * @typedef OrderInfo
 * @property {ShipmentData} [shipment]
 * @property {OrderUser} shipping_address
 * @property {string} payment_mode
 * @property {OrderUser} billing_address
 * @property {string} [affiliate_order_id]
 * @property {number} discount
 * @property {string} [coupon]
 * @property {AffiliateBag[]} bags
 * @property {number} order_value
 * @property {Object} items
 * @property {UserData} user
 * @property {Object} [payment]
 * @property {number} cod_charges
 * @property {OrderPriority} [order_priority]
 * @property {number} delivery_charges
 */

/**
 * @typedef CreateOrderPayload
 * @property {OrderConfig} order_config
 * @property {OrderInfo} order_info
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
 * @property {number} id
 * @property {string} display_text
 * @property {string} slug
 * @property {string} description
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
 * @property {string} [l2_detail]
 * @property {string} message
 * @property {string} [l3_detail]
 * @property {string} [ticket_id]
 * @property {string} type
 * @property {string} user
 * @property {number} [bag_id]
 * @property {string} [ticket_url]
 * @property {string} createdat
 * @property {string} [l1_detail]
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
 * @property {string} customer_name
 * @property {string} brand_name
 * @property {string} message
 * @property {string} order_id
 * @property {string} payment_mode
 * @property {string} country_code
 * @property {number} amount_paid
 * @property {number} shipment_id
 * @property {number} phone_number
 */

/**
 * @typedef SendSmsPayload
 * @property {SmsDataPayload} [data]
 * @property {string} slug
 * @property {number} bag_id
 */

/**
 * @typedef OrderDetails
 * @property {string} [created_at]
 * @property {string} [fynd_order_id]
 */

/**
 * @typedef Meta
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */

/**
 * @typedef ShipmentDetail
 * @property {number} id
 * @property {string} [remarks]
 * @property {number[]} [bag_list]
 * @property {string} [status]
 * @property {string} [shipment_id]
 * @property {Meta} meta
 */

/**
 * @typedef OrderStatusData
 * @property {OrderDetails} order_details
 * @property {string[]} [errors]
 * @property {ShipmentDetail[]} [shipment_details]
 */

/**
 * @typedef OrderStatusResult
 * @property {string} success
 * @property {OrderStatusData[]} [result]
 */

/**
 * @typedef ManualAssignDPToShipment
 * @property {string} qc_required
 * @property {number} dp_id
 * @property {string[]} [shipment_ids]
 * @property {string} order_type
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */

/**
 * @typedef ShippingInfo
 * @property {string} [alternate_mobile_number]
 * @property {string} [house_no]
 * @property {string} state
 * @property {string} [external_customer_code]
 * @property {string} [customer_code]
 * @property {Object[]} [slot]
 * @property {string} primary_email
 * @property {string} [title]
 * @property {string} first_name
 * @property {string} [country_code]
 * @property {string} [alternate_email]
 * @property {Object} [geo_location]
 * @property {string} city
 * @property {string} [landmark]
 * @property {string} pincode
 * @property {string} [address2]
 * @property {string} address1
 * @property {string} [middle_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} [address_type]
 * @property {string} country
 * @property {string} [state_code]
 * @property {string} [shipping_type]
 * @property {string} primary_mobile_number
 * @property {string} [floor_no]
 */

/**
 * @typedef Tax
 * @property {string} name
 * @property {number} rate
 * @property {Object} amount
 * @property {Object[]} [breakup]
 */

/**
 * @typedef Charge
 * @property {string} name
 * @property {string} [code]
 * @property {Object} amount
 * @property {string} type
 * @property {Tax} [tax]
 */

/**
 * @typedef PaymentMethod
 * @property {string} name
 * @property {string} mode
 * @property {number} amount
 * @property {string} refund_by
 * @property {Object} [transaction_data]
 * @property {Object} [meta]
 * @property {string} collect_by
 */

/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */

/**
 * @typedef ProcessingDates
 * @property {string} [dispatch_after_date]
 * @property {string} [confirm_by_date]
 * @property {string} [pack_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [dispatch_by_date]
 */

/**
 * @typedef LineItem
 * @property {string} [external_line_id]
 * @property {string} seller_identifier
 * @property {string} [custom_messasge]
 * @property {Charge[]} [charges]
 * @property {number} [quantity]
 * @property {Object} [meta]
 */

/**
 * @typedef Shipment
 * @property {ProcessingDates} [processing_dates]
 * @property {number} location_id
 * @property {LineItem[]} line_items
 * @property {number} [priority]
 * @property {Object} [meta]
 * @property {string} [external_shipment_id]
 */

/**
 * @typedef BillingInfo
 * @property {string} [alternate_mobile_number]
 * @property {string} [house_no]
 * @property {string} state
 * @property {string} [external_customer_code]
 * @property {string} [customer_code]
 * @property {string} primary_email
 * @property {string} [title]
 * @property {string} first_name
 * @property {string} [country_code]
 * @property {string} [alternate_email]
 * @property {string} city
 * @property {string} pincode
 * @property {string} [address2]
 * @property {string} address1
 * @property {string} [middle_name]
 * @property {string} [last_name]
 * @property {string} [gender]
 * @property {string} country
 * @property {string} [state_code]
 * @property {string} primary_mobile_number
 * @property {string} [floor_no]
 */

/**
 * @typedef TaxInfo
 * @property {string} [gstin]
 * @property {string} [b2b_gstin_number]
 */

/**
 * @typedef CreateOrderAPI
 * @property {ShippingInfo} shipping_info
 * @property {Charge[]} [charges]
 * @property {PaymentInfo} payment_info
 * @property {Object} [currency_info]
 * @property {string} [external_creation_date]
 * @property {Shipment[]} shipments
 * @property {Object} [meta]
 * @property {BillingInfo} billing_info
 * @property {string} [external_order_id]
 * @property {TaxInfo} [tax_info]
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [code]
 * @property {Object} [info]
 * @property {string} [exception]
 * @property {string} message
 * @property {number} status
 * @property {string} [stack_trace]
 * @property {string} [meta]
 * @property {string} [request_id]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [mode]
 * @property {string} [collect_by]
 * @property {string} [refund_by]
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
 * @property {DpConfiguration} [dp_configuration]
 * @property {boolean} [location_reassignment]
 * @property {string} [shipment_assignment]
 * @property {string[]} [lock_states]
 * @property {Object} [logo_url]
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
 * @property {string} consent_url
 * @property {string} manifest_id
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
 * @property {number} mobile
 * @property {string} start_date
 * @property {FyndOrderIdList[]} [order_details]
 * @property {string} end_date
 */

/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */

/**
 * @typedef CreateSearchKeyword
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {SearchKeywordResult} result
 */

/**
 * @typedef GetSearchWordsData
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {string} [uid]
 * @property {boolean} [is_active]
 * @property {Object} [result]
 */

/**
 * @typedef GetSearchWordsDetailResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData} [items]
 */

/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */

/**
 * @typedef GetSearchWordsResponse
 * @property {Page} [page]
 * @property {GetSearchWordsData[]} [items]
 */

/**
 * @typedef Media
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 */

/**
 * @typedef AutocompletePageAction
 * @property {string} [url]
 * @property {Object} [query]
 * @property {Object} [params]
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
 * @property {string} [display]
 * @property {AutocompleteAction} [action]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {AutocompleteResult[]} [results]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {string} [uid]
 * @property {Object} [_custom_json]
 * @property {Object[]} [results]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {Page} [page]
 * @property {GetAutocompleteWordsData[]} [items]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object[]} [results]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ProductBundleItem
 * @property {boolean} [auto_select]
 * @property {number} min_quantity
 * @property {boolean} [auto_add_to_cart]
 * @property {number} product_uid
 * @property {number} max_quantity
 * @property {boolean} [allow_remove]
 */

/**
 * @typedef ProductBundleRequest
 * @property {ProductBundleItem[]} products
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {string} choice
 * @property {Object} [meta]
 * @property {boolean} is_active
 * @property {string} [created_on]
 * @property {string} slug
 * @property {string} name
 * @property {Object} [modified_by]
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {ProductBundleItem[]} products
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {string} choice
 * @property {string} [id]
 * @property {Object} [meta]
 * @property {boolean} is_active
 * @property {string} [created_on]
 * @property {string} slug
 * @property {string} name
 * @property {Object} [modified_by]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {Page} [page]
 * @property {GetProductBundleCreateResponse[]} [items]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {ProductBundleItem[]} products
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {string} choice
 * @property {Object} [meta]
 * @property {boolean} is_active
 * @property {string} slug
 * @property {string} name
 * @property {Object} [modified_by]
 */

/**
 * @typedef Price
 * @property {number} [min_effective]
 * @property {string} [currency]
 * @property {number} [max_marked]
 * @property {number} [min_marked]
 * @property {number} [max_effective]
 */

/**
 * @typedef Size
 * @property {boolean} [is_available]
 * @property {string} [display]
 * @property {number} [quantity]
 * @property {string} [value]
 */

/**
 * @typedef LimitedProductData
 * @property {Object} [price]
 * @property {number} [quantity]
 * @property {string} [country_of_origin]
 * @property {string} [item_code]
 * @property {number} [uid]
 * @property {string[]} [images]
 * @property {string} [short_description]
 * @property {string[]} [sizes]
 * @property {Object} [attributes]
 * @property {Object} [identifier]
 * @property {string} [slug]
 * @property {string} [name]
 */

/**
 * @typedef GetProducts
 * @property {boolean} [auto_select]
 * @property {Price} [price]
 * @property {Size[]} [sizes]
 * @property {number} [min_quantity]
 * @property {LimitedProductData} [product_details]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} [product_uid]
 * @property {number} [max_quantity]
 * @property {boolean} [allow_remove]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {GetProducts[]} [products]
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [choice]
 * @property {Object} [meta]
 * @property {boolean} [is_active]
 * @property {string} [slug]
 * @property {string} [name]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {string} title
 * @property {string} [image]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {string} [subtitle]
 * @property {boolean} [active]
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} [created_on]
 * @property {string} [tag]
 * @property {string} [description]
 * @property {number} [brand_id]
 * @property {string} name
 * @property {Guide} [guide]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef SizeGuideResponse
 * @property {string} [title]
 * @property {string} [modified_on]
 * @property {number} [company_id]
 * @property {string} [subtitle]
 * @property {boolean} [active]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} [created_on]
 * @property {string} [tag]
 * @property {Object} [guide]
 * @property {number} [brand_id]
 * @property {string} [name]
 * @property {Object} [modified_by]
 */

/**
 * @typedef SEOData
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef MOQData
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {boolean} [is_gift]
 * @property {Object} [alt_text]
 * @property {SEOData} [seo]
 * @property {boolean} [is_cod]
 * @property {MOQData} [moq]
 */

/**
 * @typedef MetaFields
 * @property {Object} key
 * @property {Object} value
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {boolean} [is_gift]
 * @property {Object} [_custom_json]
 * @property {MetaFields[]} [_custom_meta]
 * @property {Object} [alt_text]
 * @property {ApplicationItemSEO} [seo]
 * @property {boolean} [is_cod]
 * @property {ApplicationItemMOQ} [moq]
 */

/**
 * @typedef SuccessResponse1
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [condition]
 * @property {Object[]} [values]
 * @property {Object[]} data
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {string} [logo]
 * @property {number} priority
 * @property {string} [unit]
 * @property {boolean} is_active
 * @property {string} [slug]
 * @property {string} name
 * @property {string} [key]
 * @property {string} display_type
 */

/**
 * @typedef AppConfigurationDetail
 * @property {string[]} [template_slugs]
 * @property {string} [logo]
 * @property {number} priority
 * @property {string} app_id
 * @property {boolean} is_active
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} slug
 * @property {boolean} is_default
 * @property {string} [name]
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef PageResponseType
 * @property {number} total_count
 * @property {number} next
 * @property {boolean} has_next
 * @property {number} current
 */

/**
 * @typedef GetConfigResponse
 * @property {PageResponseType} page
 * @property {Object[]} data
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {string} [logo]
 * @property {number} priority
 * @property {string} app_id
 * @property {boolean} is_active
 * @property {string} default_key
 * @property {boolean} is_default
 * @property {string} [name]
 * @property {string} key
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
 * @property {string} [key]
 * @property {Object[]} [units]
 * @property {string[]} [filter_types]
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
 * @property {Object} [variant]
 * @property {Object} [compare]
 * @property {Object} [detail]
 * @property {Object} [similar]
 */

/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {MetaDataListingResponse} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */

/**
 * @typedef ProductSize
 * @property {number} max
 * @property {number} min
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} [logo]
 * @property {number} priority
 * @property {string} display_type
 * @property {boolean} is_active
 * @property {string} name
 * @property {string} key
 * @property {ProductSize} size
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {string} [title]
 * @property {string} [logo]
 * @property {number} priority
 * @property {string} [subtitle]
 * @property {boolean} is_active
 * @property {string} key
 * @property {ProductSize} [size]
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
 * @typedef ConfigurationBucketPoints
 * @property {number} [start]
 * @property {string} [display]
 * @property {number} [end]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {Object} [map]
 * @property {string} [value]
 * @property {Object[]} [map_values]
 * @property {string} [sort]
 * @property {string} [condition]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} [logo]
 * @property {number} priority
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} [display_name]
 * @property {string} type
 * @property {boolean} is_active
 * @property {string} [name]
 * @property {string} key
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 * @property {boolean} allow_single
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} [logo]
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} [name]
 * @property {string} key
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
 * @typedef AppConfiguration
 * @property {string} app_id
 * @property {string} [modified_on]
 * @property {string} [type]
 * @property {Object} [created_by]
 * @property {ConfigurationProduct} [product]
 * @property {string} [created_on]
 * @property {string} [config_id]
 * @property {string} config_type
 * @property {ConfigurationListing} [listing]
 * @property {Object} [modified_by]
 */

/**
 * @typedef AppCatalogConfiguration
 * @property {string} app_id
 * @property {string} [modified_on]
 * @property {string} [type]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {ConfigurationProduct} [product]
 * @property {string} [created_on]
 * @property {string} [config_id]
 * @property {string} config_type
 * @property {ConfigurationListing} [listing]
 * @property {Object} [modified_by]
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {boolean} [is_default]
 * @property {AppCatalogConfiguration} [data]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */

/**
 * @typedef EntityConfiguration
 * @property {string} app_id
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} [config_id]
 * @property {string} config_type
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {string} [id]
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {boolean} [is_default]
 * @property {EntityConfiguration} [data]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} [logo]
 * @property {string} [kind]
 * @property {string[]} [operators]
 * @property {string} name
 * @property {string} display
 */

/**
 * @typedef ProductFiltersValue
 * @property {number} [selected_max]
 * @property {string} [currency_code]
 * @property {boolean} is_selected
 * @property {number} [count]
 * @property {string} [currency_symbol]
 * @property {number} [min]
 * @property {number} [max]
 * @property {string} [display_format]
 * @property {Object} value
 * @property {string} display
 * @property {number} [selected_min]
 * @property {string} [query_format]
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values
 */

/**
 * @typedef ProductSortOn
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [value]
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {Object} operators
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef CollectionImage
 * @property {string} url
 * @property {string} aspect_ratio
 */

/**
 * @typedef UserInfo
 * @property {string} [uid]
 * @property {string} [email]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
 */

/**
 * @typedef CollectionSchedule
 * @property {string} [start]
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [end]
 * @property {string} [cron]
 * @property {number} [duration]
 */

/**
 * @typedef CollectionQuery
 * @property {string} op
 * @property {string} attribute
 * @property {Object[]} value
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} portrait
 * @property {CollectionImage} landscape
 */

/**
 * @typedef SeoDetail
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef CreateCollection
 * @property {CollectionImage} logo
 * @property {Object} [_custom_json]
 * @property {string} slug
 * @property {number} [priority]
 * @property {boolean} [published]
 * @property {string} type
 * @property {Object} [meta]
 * @property {string} name
 * @property {string} [sort_on]
 * @property {string} app_id
 * @property {string[]} [visible_facets_keys]
 * @property {UserInfo} [created_by]
 * @property {boolean} [allow_sort]
 * @property {CollectionBadge} [badge]
 * @property {CollectionSchedule} [_schedule]
 * @property {string} [description]
 * @property {CollectionQuery[]} [query]
 * @property {string[]} [tags]
 * @property {boolean} [allow_facets]
 * @property {Object} [_locale_language]
 * @property {CollectionBanner} banners
 * @property {boolean} [is_visible]
 * @property {boolean} [is_active]
 * @property {SeoDetail} [seo]
 * @property {UserInfo} [modified_by]
 */

/**
 * @typedef BannerImage
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [landscape]
 * @property {BannerImage} [portrait]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {BannerImage} [logo]
 * @property {string} [slug]
 * @property {Object} [cron]
 * @property {number} [priority]
 * @property {string} [type]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string} [sort_on]
 * @property {string} [app_id]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [allow_sort]
 * @property {Object} [badge]
 * @property {Object} [_schedule]
 * @property {string} [description]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [allow_facets]
 * @property {ImageUrls} [banners]
 * @property {boolean} [is_active]
 * @property {string[]} [tag]
 */

/**
 * @typedef Media1
 * @property {string} url
 * @property {string} [type]
 * @property {Object} [meta]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {Media1} [logo]
 * @property {string} [uid]
 * @property {string} [slug]
 * @property {Object} [cron]
 * @property {number} [priority]
 * @property {string} [type]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string} [app_id]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [allow_sort]
 * @property {Object} [badge]
 * @property {Object} [_schedule]
 * @property {string} [description]
 * @property {CollectionQuery[]} [query]
 * @property {Action} [action]
 * @property {boolean} [allow_facets]
 * @property {ImageUrls} [banners]
 * @property {boolean} [is_active]
 * @property {string[]} [tag]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {string} [name]
 * @property {string} [display]
 * @property {boolean} [is_selected]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {string} [name]
 * @property {string} [display]
 * @property {boolean} [is_selected]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterTag[]} [tags]
 * @property {CollectionListingFilterType[]} [type]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {Page} [page]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {CollectionListingFilter} [filters]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {Media1} [logo]
 * @property {string} [uid]
 * @property {string} [slug]
 * @property {Object} [cron]
 * @property {number} [priority]
 * @property {string} [type]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string} [app_id]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [allow_sort]
 * @property {Object} [badge]
 * @property {Object} [_schedule]
 * @property {string} [description]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [allow_facets]
 * @property {ImageUrls} [banners]
 * @property {boolean} [is_active]
 * @property {string[]} [tag]
 */

/**
 * @typedef UpdateCollection
 * @property {CollectionImage} [logo]
 * @property {Object} [_custom_json]
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {boolean} [published]
 * @property {string} [type]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string} [sort_on]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [allow_sort]
 * @property {CollectionBadge} [badge]
 * @property {CollectionSchedule} [_schedule]
 * @property {string} [description]
 * @property {CollectionQuery[]} [query]
 * @property {string[]} [tags]
 * @property {boolean} [allow_facets]
 * @property {Object} [_locale_language]
 * @property {CollectionBanner} [banners]
 * @property {boolean} [is_visible]
 * @property {boolean} [is_active]
 * @property {SeoDetail} [seo]
 * @property {UserInfo} [modified_by]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {string} [action]
 * @property {number} [item_id]
 */

/**
 * @typedef CollectionItemRequest
 * @property {CollectionQuery[]} [query]
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {string} [type]
 */

/**
 * @typedef UpdatedResponse
 * @property {string} [message]
 * @property {number[]} [items_not_updated]
 */

/**
 * @typedef Price1
 * @property {number} [max]
 * @property {string} [currency_code]
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
 * @property {string} [key]
 * @property {string} [value]
 * @property {string} [type]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title]
 * @property {ProductDetailAttribute[]} [details]
 */

/**
 * @typedef ProductBrand
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {Media1} [logo]
 */

/**
 * @typedef ProductListingDetail
 * @property {boolean} [sellable]
 * @property {number} [uid]
 * @property {string} [short_description]
 * @property {string} slug
 * @property {string} [item_type]
 * @property {ProductListingPrice} [price]
 * @property {string} [product_online_date]
 * @property {string} [type]
 * @property {string[]} [tryouts]
 * @property {string} [discount]
 * @property {string[]} [similars]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {number} [rating_count]
 * @property {number} [rating]
 * @property {Object} [promo_meta]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {Media1[]} [medias]
 * @property {string} [description]
 * @property {Object} [teaser_tag]
 * @property {boolean} [has_variant]
 * @property {string} [item_code]
 * @property {string} [image_nature]
 * @property {ProductBrand} [brand]
 * @property {string} [color]
 * @property {string[]} [highlights]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {Page} [page]
 * @property {ProductListingDetail[]} [items]
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [total_sizes]
 * @property {number} [article_freshness]
 * @property {number} [available_sizes]
 * @property {number} [available_articles]
 * @property {string} [name]
 * @property {number} [total_articles]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [count]
 * @property {number} [sellable_count]
 * @property {number} [out_of_stock_count]
 */

/**
 * @typedef CatalogInsightResponse
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CatalogInsightItem} [item]
 */

/**
 * @typedef CrossSellingData
 * @property {number} [products]
 * @property {number} [articles]
 */

/**
 * @typedef CrossSellingResponse
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CrossSellingData} [data]
 */

/**
 * @typedef OptInPostRequest
 * @property {string} [platform]
 * @property {string} opt_level
 * @property {number} [company_id]
 * @property {number[]} [brand_ids]
 * @property {boolean} [enabled]
 * @property {number[]} [store_ids]
 */

/**
 * @typedef CompanyOptIn
 * @property {string} platform
 * @property {string} opt_level
 * @property {number} company_id
 * @property {number[]} brand_ids
 * @property {number} modified_on
 * @property {boolean} enabled
 * @property {Object} [created_by]
 * @property {Object} [modified_by]
 * @property {number} created_on
 * @property {number[]} store_ids
 */

/**
 * @typedef GetOptInPlatform
 * @property {Page} page
 * @property {CompanyOptIn[]} items
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [company_type]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [business_type]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {number} [brand_id]
 * @property {number} [total_article]
 * @property {string} [brand_name]
 * @property {number} [company_id]
 */

/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {Page} [page]
 * @property {CompanyBrandDetail[]} [items]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {number} [brand]
 * @property {number} [store]
 * @property {string} [company]
 */

/**
 * @typedef StoreDetail
 * @property {Object[]} [documents]
 * @property {Object[]} [additional_contacts]
 * @property {Object} [manager]
 * @property {string} [display_name]
 * @property {string} [store_code]
 * @property {string} [modified_on]
 * @property {number} [company_id]
 * @property {number} [uid]
 * @property {Object} [address]
 * @property {Object} [timing]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {string} [store_type]
 */

/**
 * @typedef OptinStoreDetails
 * @property {Page} [page]
 * @property {StoreDetail[]} [items]
 */

/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */

/**
 * @typedef AttributeMasterMandatoryDetails
 * @property {string[]} [l3_keys]
 */

/**
 * @typedef AttributeMasterMeta
 * @property {boolean} [enriched]
 * @property {AttributeMasterMandatoryDetails} mandatory_details
 */

/**
 * @typedef AttributeSchemaRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef AttributeMaster
 * @property {string} type
 * @property {boolean} [multi]
 * @property {boolean} [mandatory]
 * @property {string[]} [allowed_values]
 * @property {AttributeSchemaRange} [range]
 * @property {string} [format]
 */

/**
 * @typedef AttributeMasterFilter
 * @property {number} [priority]
 * @property {string[]} [depends_on]
 * @property {boolean} indexing
 */

/**
 * @typedef GenderDetail
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [logo]
 * @property {AttributeMasterDetails} [details]
 * @property {string[]} [departments]
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [description]
 * @property {AttributeMaster} [schema]
 * @property {AttributeMasterFilter} [filters]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {boolean} [is_nested]
 * @property {string} [id]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Page} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef PTErrorResponse
 * @property {Object} [errors]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string} logo
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {Object} [platforms]
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 * @property {string} [_cls]
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {number} priority_order
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
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [contact]
 * @property {string} [_id]
 */

/**
 * @typedef GetDepartment
 * @property {string} [item_type]
 * @property {string} [logo]
 * @property {string} [search]
 * @property {string} [modified_on]
 * @property {number} [page_size]
 * @property {UserSerializer} [created_by]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {string} [name]
 * @property {number} [priority_order]
 * @property {UserSerializer} [modified_by]
 * @property {number} [page_no]
 */

/**
 * @typedef DepartmentsResponse
 * @property {Page} [page]
 * @property {GetDepartment[]} [items]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {Object} [errors]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 */

/**
 * @typedef UserDetail
 * @property {string} [contact]
 * @property {boolean} [super_user]
 * @property {string} username
 * @property {string} user_id
 */

/**
 * @typedef DepartmentModel
 * @property {Object} logo
 * @property {string} modified_on
 * @property {UserDetail} [created_by]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} created_on
 * @property {UserDetail} [verified_by]
 * @property {boolean} [is_active]
 * @property {string} [verified_on]
 * @property {Object} [_id]
 * @property {Object} [slug]
 * @property {Object} [_cls]
 * @property {Object[]} [synonyms]
 * @property {Object} name
 * @property {number} priority_order
 * @property {UserDetail} [modified_by]
 */

/**
 * @typedef ProductTemplate
 * @property {string} [logo]
 * @property {boolean} is_physical
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {Object[]} [attributes_schema]
 * @property {string[]} [departments]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_active]
 * @property {string} [tag]
 * @property {string} [description]
 * @property {string[]} [attributes]
 * @property {boolean} [is_expirable]
 * @property {string} slug
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {string[]} [categories]
 * @property {Object} [modified_by]
 */

/**
 * @typedef TemplatesResponse
 * @property {Page} [page]
 * @property {ProductTemplate} [items]
 */

/**
 * @typedef TemplateDetails
 * @property {string} [logo]
 * @property {boolean} is_physical
 * @property {Object[]} [attributes_schema]
 * @property {string[]} [departments]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_active]
 * @property {string} [tag]
 * @property {string} [description]
 * @property {string[]} [attributes]
 * @property {boolean} [is_expirable]
 * @property {string} slug
 * @property {string} [name]
 * @property {string[]} [categories]
 * @property {string} [id]
 */

/**
 * @typedef Properties
 * @property {Object} [trader_type]
 * @property {Object} [trader]
 * @property {Object} [short_description]
 * @property {Object} [size_guide]
 * @property {Object} [slug]
 * @property {Object} [product_group_tag]
 * @property {Object} [brand_uid]
 * @property {Object} [item_type]
 * @property {Object} [custom_order]
 * @property {Object} [variants]
 * @property {Object} [category_slug]
 * @property {Object} [product_publish]
 * @property {Object} [name]
 * @property {Object} [return_config]
 * @property {Object} [country_of_origin]
 * @property {Object} [sizes]
 * @property {Object} [multi_size]
 * @property {Object} [description]
 * @property {Object} [tags]
 * @property {Object} [currency]
 * @property {Object} [hsn_code]
 * @property {Object} [is_dependent]
 * @property {Object} [command]
 * @property {Object} [media]
 * @property {Object} [teaser_tag]
 * @property {Object} [item_code]
 * @property {Object} [is_active]
 * @property {Object} [no_of_boxes]
 * @property {Object} [highlights]
 */

/**
 * @typedef GlobalValidation
 * @property {string} [title]
 * @property {string[]} [required]
 * @property {string} [type]
 * @property {Properties} [properties]
 * @property {Object} [definitions]
 * @property {string} [description]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateDetails} [template_details]
 * @property {TemplateValidationData} [data]
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
 * @typedef ProductDownloadItemsData
 * @property {string[]} [brand]
 * @property {string[]} [templates]
 * @property {string} [type]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {string} [url]
 * @property {ProductDownloadItemsData} [data]
 * @property {VerifiedBy} [created_by]
 * @property {string} [task_id]
 * @property {string} [completed_on]
 * @property {number} [seller_id]
 * @property {string} [trigger_on]
 * @property {string} [status]
 * @property {Object} [template_tags]
 * @property {string} [id]
 */

/**
 * @typedef ProductDownloadsResponse
 * @property {Page} [page]
 * @property {ProductDownloadsItems} [items]
 */

/**
 * @typedef ProductConfigurationDownloads
 * @property {boolean} [multivalue]
 * @property {Object[]} [data]
 */

/**
 * @typedef Media2
 * @property {string} landscape
 * @property {string} logo
 * @property {string} portrait
 */

/**
 * @typedef Hierarchy
 * @property {number} l2
 * @property {number} l1
 * @property {number} department
 */

/**
 * @typedef CategoryMappingValues
 * @property {string} name
 * @property {number} [catalog_id]
 */

/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [google]
 * @property {CategoryMappingValues} [ajio]
 */

/**
 * @typedef CategoryRequestBody
 * @property {Media2} [media]
 * @property {number} level
 * @property {number} [priority]
 * @property {Hierarchy[]} [hierarchy]
 * @property {string[]} [tryouts]
 * @property {number[]} departments
 * @property {CategoryMapping} [marketplaces]
 * @property {boolean} is_active
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {string} name
 */

/**
 * @typedef CategoryCreateResponse
 * @property {string} [message]
 * @property {number} [uid]
 */

/**
 * @typedef Category
 * @property {Media2} [media]
 * @property {number} level
 * @property {number} [priority]
 * @property {Hierarchy[]} [hierarchy]
 * @property {string[]} [tryouts]
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {number} [uid]
 * @property {string} [id]
 * @property {number[]} departments
 * @property {CategoryMapping} [marketplaces]
 * @property {boolean} is_active
 * @property {string} [created_on]
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {Object} [modified_by]
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
 * @typedef Trader
 * @property {Object} name
 * @property {string[]} [address]
 * @property {string} [type]
 */

/**
 * @typedef CustomOrder
 * @property {string} [manufacturing_time_unit]
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 * @property {string} [reporting_hsn]
 */

/**
 * @typedef ProductPublish
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */

/**
 * @typedef TeaserTag
 * @property {string} [url]
 * @property {string} [tag]
 */

/**
 * @typedef NetQuantity
 * @property {Object} [unit]
 * @property {number} [value]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {Object} [variant_group]
 * @property {Trader[]} trader
 * @property {Object} [_custom_json]
 * @property {string} [short_description]
 * @property {number} [uid]
 * @property {string} [size_guide]
 * @property {Object} [variant_media]
 * @property {string} [bulk_job_id]
 * @property {string} template_tag
 * @property {string} slug
 * @property {Object} [change_request_id]
 * @property {string[]} [product_group_tag]
 * @property {number} brand_uid
 * @property {string} item_type
 * @property {CustomOrder} [custom_order]
 * @property {Object} [variants]
 * @property {string} category_slug
 * @property {TaxIdentifier} tax_identifier
 * @property {Object} [attributes]
 * @property {ProductPublish} [product_publish]
 * @property {string} name
 * @property {ReturnConfig} return_config
 * @property {string} country_of_origin
 * @property {Object[]} sizes
 * @property {boolean} [multi_size]
 * @property {number[]} departments
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string} [action]
 * @property {string} currency
 * @property {boolean} [is_set]
 * @property {boolean} [is_dependent]
 * @property {Media1[]} [media]
 * @property {TeaserTag} [teaser_tag]
 * @property {number} company_id
 * @property {string} item_code
 * @property {boolean} [is_active]
 * @property {number} [no_of_boxes]
 * @property {boolean} [is_image_less_product]
 * @property {string} [requester]
 * @property {NetQuantity} [net_quantity]
 * @property {string[]} [highlights]
 */

/**
 * @typedef ProductPublished
 * @property {boolean} [is_set]
 * @property {number} [product_online_date]
 */

/**
 * @typedef ReturnConfigResponse
 * @property {number} [time]
 * @property {boolean} [returnable]
 * @property {string} [unit]
 */

/**
 * @typedef Image
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 */

/**
 * @typedef Logo
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 */

/**
 * @typedef NetQuantityResponse
 * @property {string} [unit]
 * @property {number} [value]
 */

/**
 * @typedef Product
 * @property {Object} [variant_group]
 * @property {Object[]} [trader]
 * @property {string} [modified_on]
 * @property {string[]} [l3_mapping]
 * @property {Object} [_custom_json]
 * @property {string} [short_description]
 * @property {number} [uid]
 * @property {string} [size_guide]
 * @property {Object} [variant_media]
 * @property {string} [primary_color]
 * @property {string} [verified_on]
 * @property {string} [template_tag]
 * @property {string} [slug]
 * @property {string[]} [product_group_tag]
 * @property {number} [brand_uid]
 * @property {string} [id]
 * @property {string} [item_type]
 * @property {boolean} [is_physical]
 * @property {Object} [custom_order]
 * @property {Object} [category]
 * @property {Object} [modified_by]
 * @property {Object} [variants]
 * @property {string} [created_on]
 * @property {string} [category_slug]
 * @property {Object} [tax_identifier]
 * @property {Object} [attributes]
 * @property {number[]} [all_company_ids]
 * @property {ProductPublished} [product_publish]
 * @property {string} [name]
 * @property {ReturnConfigResponse} [return_config]
 * @property {Object[]} [all_sizes]
 * @property {string} [country_of_origin]
 * @property {Object} [created_by]
 * @property {Object[]} [sizes]
 * @property {Image[]} [images]
 * @property {number[]} [departments]
 * @property {boolean} [multi_size]
 * @property {boolean} [is_expirable]
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string} [currency]
 * @property {string} [pending]
 * @property {number} [category_uid]
 * @property {boolean} [is_set]
 * @property {string} [hsn_code]
 * @property {boolean} [is_dependent]
 * @property {string} [stage]
 * @property {Object} [moq]
 * @property {Media1[]} [media]
 * @property {Object} [teaser_tag]
 * @property {number} [company_id]
 * @property {string} [item_code]
 * @property {string[]} [all_identifiers]
 * @property {string} [image_nature]
 * @property {boolean} [is_active]
 * @property {Brand} [brand]
 * @property {string} [color]
 * @property {number} [no_of_boxes]
 * @property {VerifiedBy} [verified_by]
 * @property {boolean} [is_image_less_product]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {string[]} [highlights]
 */

/**
 * @typedef ProductListingResponse
 * @property {Page} [page]
 * @property {Product[]} [items]
 */

/**
 * @typedef ProductVariants
 * @property {Media1[]} [media]
 * @property {string} [item_code]
 * @property {number} [uid]
 * @property {number} [category_uid]
 * @property {string} [name]
 * @property {number} [brand_uid]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {Page} [page]
 * @property {ProductVariants[]} [variants]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [logo]
 * @property {string} [modified_on]
 * @property {boolean} [variant]
 * @property {string} slug
 * @property {string} [suggestion]
 * @property {string} [created_on]
 * @property {Object} [synonyms]
 * @property {string} [name]
 * @property {boolean} [is_nested]
 * @property {Object} [created_by]
 * @property {AttributeMasterDetails} details
 * @property {string[]} departments
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string} [raw_key]
 * @property {string} [unit]
 * @property {AttributeMaster} schema
 * @property {AttributeMasterFilter} filters
 * @property {Object} [modified_by]
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
 * @property {Object} [variant_group]
 * @property {Trader[]} trader
 * @property {Object} [_custom_json]
 * @property {string} [short_description]
 * @property {number} [uid]
 * @property {string} [size_guide]
 * @property {Object} [variant_media]
 * @property {string} [bulk_job_id]
 * @property {string} template_tag
 * @property {string} slug
 * @property {Object} [change_request_id]
 * @property {string[]} [product_group_tag]
 * @property {number} brand_uid
 * @property {string} item_type
 * @property {CustomOrder} [custom_order]
 * @property {Object} [variants]
 * @property {string} category_slug
 * @property {TaxIdentifier} tax_identifier
 * @property {ProductPublish} [product_publish]
 * @property {Object} name
 * @property {ReturnConfig} return_config
 * @property {string} country_of_origin
 * @property {boolean} [multi_size]
 * @property {number[]} departments
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {string} [action]
 * @property {string} currency
 * @property {boolean} [is_set]
 * @property {boolean} [is_dependent]
 * @property {Media1[]} [media]
 * @property {TeaserTag} [teaser_tag]
 * @property {number} company_id
 * @property {Object} item_code
 * @property {boolean} [is_active]
 * @property {number} [no_of_boxes]
 * @property {boolean} [is_image_less_product]
 * @property {string} [requester]
 * @property {NetQuantity} [net_quantity]
 * @property {string[]} [highlights]
 */

/**
 * @typedef ValidateIdentifier
 * @property {string} gtin_value
 * @property {string} gtin_type
 * @property {boolean} [primary]
 */

/**
 * @typedef AllSizes
 * @property {number} item_weight
 * @property {Object} item_weight_unit_of_measure
 * @property {number} item_length
 * @property {number} item_height
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {number} item_width
 * @property {string} item_dimensions_unit_of_measure
 * @property {Object} size
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
 * @property {string} [uid]
 * @property {string} [email]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef BulkJob
 * @property {string} [modified_on]
 * @property {number} company_id
 * @property {Object[]} [cancelled_records]
 * @property {UserInfo1} [created_by]
 * @property {string} [file_path]
 * @property {Object[]} [failed_records]
 * @property {string} [custom_template_tag]
 * @property {boolean} [is_active]
 * @property {string} created_on
 * @property {number} [total]
 * @property {string} [template_tag]
 * @property {number} [cancelled]
 * @property {number} [succeed]
 * @property {number} [failed]
 * @property {string} [stage]
 * @property {string} [tracking_url]
 * @property {UserInfo1} [modified_by]
 */

/**
 * @typedef BulkResponse
 * @property {string} batch_id
 * @property {string} [modified_on]
 * @property {UserInfo1} [created_by]
 * @property {boolean} [is_active]
 * @property {string} created_on
 * @property {UserInfo1} [modified_by]
 */

/**
 * @typedef UserDetail1
 * @property {string} [full_name]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductBulkRequest
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {UserDetail1} [created_by]
 * @property {string} [file_path]
 * @property {UserDetail1} [modified_by]
 * @property {string[]} [failed_records]
 * @property {number} [succeed]
 * @property {ProductTemplate} [template]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {number} [total]
 * @property {string} [template_tag]
 * @property {string[]} [cancelled_records]
 * @property {number} [failed]
 * @property {string} [stage]
 * @property {number} [cancelled]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {Page} [page]
 * @property {ProductBulkRequest} [items]
 */

/**
 * @typedef BulkProductRequest
 * @property {string} batch_id
 * @property {string} template_tag
 * @property {number} company_id
 * @property {Object[]} data
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
 * @property {string} url
 * @property {Object} user
 * @property {number} [company_id]
 */

/**
 * @typedef UserCommon
 * @property {number} [company_id]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef Items
 * @property {number} [retry]
 * @property {string} [modified_on]
 * @property {string[]} [cancelled_records]
 * @property {number} [company_id]
 * @property {UserCommon} [created_by]
 * @property {string} [file_path]
 * @property {string} [id]
 * @property {string[]} [failed_records]
 * @property {string} [created_on]
 * @property {boolean} [is_active]
 * @property {number} [total]
 * @property {number} [cancelled]
 * @property {number} [succeed]
 * @property {number} [failed]
 * @property {string} [stage]
 * @property {string} [tracking_url]
 * @property {UserCommon} [modified_by]
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
 * @property {ProductSizeDeleteDataResponse} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef GTIN
 * @property {Object} gtin_value
 * @property {string} gtin_type
 * @property {boolean} [primary]
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
 * @property {SizeDistribution} size_distribution
 * @property {string} [name]
 * @property {number} [quantity]
 */

/**
 * @typedef InvSize
 * @property {number} [price]
 * @property {number} [item_weight]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} quantity
 * @property {string} store_code
 * @property {number} price_effective
 * @property {number} [price_transfer]
 * @property {number} [item_length]
 * @property {number} [item_height]
 * @property {GTIN[]} identifiers
 * @property {string} [expiration_date]
 * @property {number} [item_width]
 * @property {string} currency
 * @property {boolean} [is_set]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {InventorySet} [set]
 * @property {Object} size
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
 * @property {number} company_id
 * @property {ItemQuery} item
 */

/**
 * @typedef InventoryResponse
 * @property {number} [price]
 * @property {number} [quantity]
 * @property {number} [price_effective]
 * @property {number} [price_transfer]
 * @property {string} [uid]
 * @property {number} [item_id]
 * @property {string} [inventory_updated_on]
 * @property {string} [seller_identifier]
 * @property {Object} [identifiers]
 * @property {string} [currency]
 * @property {Object} [store]
 * @property {number} [sellable_quantity]
 * @property {string} [size]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {Page} [page]
 * @property {InventoryResponse[]} [items]
 */

/**
 * @typedef Trader1
 * @property {string} name
 * @property {string[]} address
 * @property {string} type
 */

/**
 * @typedef PriceMeta
 * @property {number} marked
 * @property {string} [updated_at]
 * @property {number} transfer
 * @property {string} currency
 * @property {Object} [tp_notes]
 * @property {number} effective
 */

/**
 * @typedef DimensionResponse
 * @property {string} unit
 * @property {number} length
 * @property {number} width
 * @property {number} height
 * @property {boolean} is_default
 */

/**
 * @typedef ReturnConfig1
 * @property {number} [time]
 * @property {boolean} [returnable]
 * @property {string} [unit]
 */

/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [order_committed]
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef WeightResponse
 * @property {number} shipping
 * @property {string} unit
 * @property {boolean} is_default
 */

/**
 * @typedef ManufacturerResponse
 * @property {string} name
 * @property {string} address
 * @property {boolean} is_default
 */

/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
 */

/**
 * @typedef InventorySellerResponse
 * @property {Trader1[]} [trader]
 * @property {string} uid
 * @property {string} fynd_article_code
 * @property {Object} [_custom_json]
 * @property {string} [added_on_store]
 * @property {InventorySet} [set]
 * @property {PriceMeta} price
 * @property {string} fynd_item_code
 * @property {string} seller_identifier
 * @property {DimensionResponse} dimension
 * @property {Object} [meta]
 * @property {Object} identifier
 * @property {Object} [tax_identifier]
 * @property {string} [trace_id]
 * @property {StoreMeta} store
 * @property {ReturnConfig1} [return_config]
 * @property {string} country_of_origin
 * @property {UserSerializer} [created_by]
 * @property {Quantities} [quantities]
 * @property {string[]} [tags]
 * @property {CompanyMeta} company
 * @property {Object} [raw_meta]
 * @property {boolean} [track_inventory]
 * @property {boolean} [is_set]
 * @property {string} [stage]
 * @property {string} size
 * @property {WeightResponse} weight
 * @property {boolean} fragile
 * @property {number} item_id
 * @property {number} total_quantity
 * @property {boolean} [is_active]
 * @property {ManufacturerResponse} manufacturer
 * @property {BrandMeta} brand
 * @property {string} [expiration_date]
 * @property {Object} [fynd_meta]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {Page} [page]
 * @property {InventorySellerResponse[]} [items]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {string} [file_path]
 * @property {string} [id]
 * @property {Object} [modified_by]
 * @property {string[]} [failed_records]
 * @property {number} [succeed]
 * @property {string} [created_on]
 * @property {boolean} [is_active]
 * @property {number} [total]
 * @property {string[]} [cancelled_records]
 * @property {number} [failed]
 * @property {string} [stage]
 * @property {number} [cancelled]
 */

/**
 * @typedef BulkInventoryGet
 * @property {Page} [page]
 * @property {BulkInventoryGetItems[]} [items]
 */

/**
 * @typedef InventoryJobPayload
 * @property {number} [price]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [quantity]
 * @property {string} store_code
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 * @property {number} [total_quantity]
 * @property {number} [price_marked]
 * @property {string} [expiration_date]
 * @property {string[]} [tags]
 * @property {string} [currency]
 * @property {string} [trace_id]
 * @property {string} [item_dimensions_unit_of_measure]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {string} batch_id
 * @property {Object} [user]
 * @property {InventoryJobPayload[]} sizes
 * @property {number} company_id
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [brand]
 * @property {number[]} [store]
 * @property {string} [type]
 */

/**
 * @typedef InventoryExportResponse
 * @property {Object} [request_params]
 * @property {string} task_id
 * @property {number} seller_id
 * @property {string} [trigger_on]
 * @property {string} [status]
 */

/**
 * @typedef InventoryExportJob
 * @property {string} [url]
 * @property {Object} [request_params]
 * @property {string} task_id
 * @property {string} [completed_on]
 * @property {number} seller_id
 * @property {string} [trigger_on]
 * @property {string} [status]
 */

/**
 * @typedef Trader2
 * @property {string} [name]
 * @property {string[]} [address]
 * @property {string} [type]
 */

/**
 * @typedef PriceArticle
 * @property {number} [marked]
 * @property {number} [transfer]
 * @property {string} [currency]
 * @property {Object} [tp_notes]
 * @property {number} [effective]
 */

/**
 * @typedef DimensionResponse1
 * @property {number} [height]
 * @property {number} [length]
 * @property {number} [width]
 * @property {string} [unit]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [store_type]
 * @property {string} [store_code]
 */

/**
 * @typedef ReturnConfig2
 * @property {number} [time]
 * @property {boolean} [returnable]
 * @property {string} [unit]
 */

/**
 * @typedef Quantity
 * @property {number} [count]
 */

/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [sellable]
 * @property {Quantity} [damaged]
 * @property {Quantity} [not_available]
 * @property {Quantity} [order_committed]
 */

/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */

/**
 * @typedef WeightResponse1
 * @property {number} [shipping]
 * @property {string} [unit]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {string} [name]
 * @property {string} [address]
 * @property {boolean} [is_default]
 */

/**
 * @typedef BrandMeta1
 * @property {string} [name]
 * @property {number} [id]
 */

/**
 * @typedef GetInventories
 * @property {Trader2[]} [trader]
 * @property {string} [uid]
 * @property {string} [id]
 * @property {PriceArticle} [price]
 * @property {string} [seller_identifier]
 * @property {DimensionResponse1} [dimension]
 * @property {Object} [platforms]
 * @property {Object} [tax_identifier]
 * @property {Object} [identifier]
 * @property {string} [trace_id]
 * @property {ArticleStoreResponse} [store]
 * @property {ReturnConfig2} [return_config]
 * @property {string} [country_of_origin]
 * @property {UserSerializer} [created_by]
 * @property {QuantitiesArticle} [quantities]
 * @property {string[]} [tags]
 * @property {CompanyMeta1} [company]
 * @property {boolean} [track_inventory]
 * @property {boolean} [is_set]
 * @property {string} [stage]
 * @property {string} [size]
 * @property {WeightResponse1} [weight]
 * @property {DateMeta} [date_meta]
 * @property {number} [item_id]
 * @property {string} [inventory_updated_on]
 * @property {number} [total_quantity]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {string} [expiration_date]
 * @property {BrandMeta1} [brand]
 * @property {UserSerializer} [modified_by]
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
 * @property {boolean} [multivalues]
 * @property {FilerList[]} [data]
 */

/**
 * @typedef InventoryPayload
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 * @property {number} [total_quantity]
 * @property {number} [price_marked]
 * @property {string} [expiration_date]
 * @property {string[]} [tags]
 * @property {number} store_id
 * @property {string} [trace_id]
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {InventoryPayload[]} [payload]
 * @property {number} company_id
 * @property {Object} [meta]
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
 * @typedef HsnUpsert
 * @property {number} company_id
 * @property {string} hs2_code
 * @property {boolean} tax_on_mrp
 * @property {number} [uid]
 * @property {number} [threshold2]
 * @property {number} [tax2]
 * @property {number} tax1
 * @property {boolean} [is_active]
 * @property {number} threshold1
 * @property {string} hsn_code
 * @property {boolean} [tax_on_esp]
 */

/**
 * @typedef HsnCodesObject
 * @property {number} [company_id]
 * @property {string} [hs2_code]
 * @property {string} [modified_on]
 * @property {boolean} [tax_on_mrp]
 * @property {number} [threshold2]
 * @property {number} [tax2]
 * @property {number} [tax1]
 * @property {number} [threshold1]
 * @property {string} [hsn_code]
 * @property {string} [id]
 * @property {boolean} [tax_on_esp]
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */

/**
 * @typedef PageResponse
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 * @property {string} [current]
 * @property {number} [item_total]
 * @property {number} [size]
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
 * @property {string} [modified_on]
 * @property {string} type
 * @property {Object} [created_by]
 * @property {string} country_code
 * @property {TaxSlab[]} taxes
 * @property {string} [created_on]
 * @property {string} description
 * @property {string} reporting_hsn
 * @property {string} hsn_code
 * @property {Object} [modified_by]
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {PageResponse} [page]
 * @property {HSNDataInsertV2[]} [items]
 */

/**
 * @typedef BrandItem
 * @property {Media} [logo]
 * @property {number} [uid]
 * @property {string} [discount]
 * @property {ImageUrls} [banners]
 * @property {string[]} [departments]
 * @property {Action} [action]
 * @property {string} [slug]
 * @property {string} [name]
 */

/**
 * @typedef BrandListingResponse
 * @property {Page} page
 * @property {BrandItem[]} [items]
 */

/**
 * @typedef Department
 * @property {Media} [logo]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [priority_order]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef DepartmentIdentifier
 * @property {number} [uid]
 * @property {string} [slug]
 */

/**
 * @typedef ThirdLevelChild
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {Object[]} [childs]
 */

/**
 * @typedef SecondLevelChild
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {ThirdLevelChild[]} [childs]
 */

/**
 * @typedef Child
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {SecondLevelChild[]} [childs]
 */

/**
 * @typedef CategoryItems
 * @property {ImageUrls} [banners]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {Child[]} [childs]
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
 * @property {ProductListingDetail[]} [items]
 * @property {Page} page
 * @property {Object} [operators]
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef ProductDetail
 * @property {number} [uid]
 * @property {string} [short_description]
 * @property {string} slug
 * @property {string} [item_type]
 * @property {string} [product_online_date]
 * @property {string} [type]
 * @property {string[]} [tryouts]
 * @property {string[]} [similars]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {number} [rating_count]
 * @property {number} [rating]
 * @property {Object} [promo_meta]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {Media1[]} [medias]
 * @property {string} [description]
 * @property {Object} [teaser_tag]
 * @property {boolean} [has_variant]
 * @property {string} [item_code]
 * @property {string} [image_nature]
 * @property {ProductBrand} [brand]
 * @property {string} [color]
 * @property {string[]} [highlights]
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
 * @typedef GetAddressSerializer
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [pincode]
 * @property {string} [state]
 * @property {string} [address1]
 * @property {string} [country]
 * @property {string} [city]
 * @property {string} [address2]
 * @property {string} [country_code]
 * @property {string} [address_type]
 * @property {number} [longitude]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [minute]
 * @property {number} [hour]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {boolean} open
 * @property {string} weekday
 * @property {LocationTimingSerializer} [closing]
 * @property {LocationTimingSerializer} [opening]
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 * @property {string} [order]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {string} number
 * @property {number} country_code
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [name]
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 */

/**
 * @typedef UserSerializer1
 * @property {string} [contact]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [username]
 * @property {string} [password]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [contact]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef GetCompanySerializer
 * @property {string} [company_type]
 * @property {string} [modified_on]
 * @property {UserSerializer2} [created_by]
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [verified_on]
 * @property {string} [business_type]
 * @property {string} [name]
 * @property {string} [stage]
 * @property {string} [reject_reason]
 * @property {UserSerializer2} [modified_by]
 * @property {GetAddressSerializer[]} [addresses]
 */

/**
 * @typedef GetLocationSerializer
 * @property {Document[]} [documents]
 * @property {string} [modified_on]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [verified_on]
 * @property {string} [phone_number]
 * @property {string} code
 * @property {string[]} [notification_emails]
 * @property {GetAddressSerializer} address
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} [created_on]
 * @property {LocationIntegrationType} [integration_type]
 * @property {string} name
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {LocationManagerSerializer} [manager]
 * @property {UserSerializer1} [created_by]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {Object} [warnings]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {GetCompanySerializer} [company]
 * @property {string} [stage]
 * @property {string} display_name
 * @property {UserSerializer1} [verified_by]
 * @property {string} [store_type]
 * @property {UserSerializer1} [modified_by]
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
 * @property {string} [logo]
 * @property {string} app_id
 * @property {number} uid
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string} [name]
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
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
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
 * @typedef CompanyTaxesSerializer
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 * @property {boolean} [franchise_enabled]
 * @property {ContactDetails} [contact_details]
 * @property {UserSerializer} [modified_by]
 * @property {string} [name]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {UserSerializer} [verified_by]
 * @property {Object} [_custom_json]
 * @property {string} [business_info]
 * @property {string} business_type
 * @property {BusinessDetails} [business_details]
 * @property {string} [mode]
 * @property {Document[]} [documents]
 * @property {string} [modified_on]
 * @property {string} company_type
 * @property {string} [created_on]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {number} uid
 * @property {string[]} [notification_emails]
 * @property {string} [stage]
 * @property {UserSerializer} [created_by]
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} [address2]
 * @property {string} city
 * @property {string} country
 * @property {string} state
 * @property {number} longitude
 * @property {number} pincode
 * @property {string} address1
 * @property {string} [country_code]
 * @property {string} address_type
 * @property {number} latitude
 * @property {string} [landmark]
 */

/**
 * @typedef UpdateCompany
 * @property {ContactDetails} [contact_details]
 * @property {string} [business_info]
 * @property {string} [company_type]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {string} [name]
 * @property {string} [business_type]
 * @property {BusinessDetails} [business_details]
 * @property {string[]} [notification_emails]
 * @property {Document[]} [documents]
 * @property {Object} [warnings]
 * @property {boolean} [franchise_enabled]
 * @property {Object} [_custom_json]
 * @property {string} [reject_reason]
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
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [brand]
 * @property {DocumentsObj} [store]
 * @property {number} [uid]
 * @property {DocumentsObj} [company_documents]
 * @property {string} [stage]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [portrait]
 * @property {string} [landscape]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {Object} [_locale_language]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 * @property {string} [reject_reason]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [description]
 * @property {UserSerializer} [modified_by]
 * @property {string} name
 * @property {string[]} [synonyms]
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [verified_by]
 * @property {string} [mode]
 * @property {string} [logo]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {string} [slug_key]
 * @property {UserSerializer} [created_by]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {Object} [_locale_language]
 * @property {string} name
 * @property {number} [company_id]
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 * @property {string} [brand_tier]
 * @property {Object} [_custom_json]
 * @property {string} logo
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [description]
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
 * @property {UserSerializer} [modified_by]
 * @property {string} company_type
 * @property {string} [created_on]
 * @property {CompanyDetails} [details]
 * @property {string} [name]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [verified_on]
 * @property {string} business_type
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {string[]} [notification_emails]
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [verified_by]
 * @property {string} [reject_reason]
 * @property {string[]} [market_channels]
 * @property {string} [modified_on]
 * @property {UserSerializer} [created_by]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {UserSerializer} [modified_by]
 * @property {string} [created_on]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [verified_on]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {Object} [warnings]
 * @property {CompanySerializer} [company]
 * @property {UserSerializer} [verified_by]
 * @property {string} [reject_reason]
 * @property {string} [modified_on]
 * @property {UserSerializer} [created_by]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {Page} [page]
 * @property {CompanyBrandSerializer[]} [items]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} [uid]
 * @property {number[]} brands
 * @property {number} company
 */

/**
 * @typedef HolidayDateSerializer
 * @property {string} end_date
 * @property {string} start_date
 */

/**
 * @typedef HolidaySchemaSerializer
 * @property {HolidayDateSerializer} date
 * @property {string} holiday_type
 * @property {string} title
 */

/**
 * @typedef AddressSerializer
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [state]
 * @property {number} longitude
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {string} [country_code]
 * @property {string} [address_type]
 * @property {number} latitude
 * @property {string} [landmark]
 */

/**
 * @typedef LocationSerializer
 * @property {string} [store_type]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} name
 * @property {AddressSerializer} address
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {number} [uid]
 * @property {LocationManagerSerializer} [manager]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} code
 * @property {Document[]} [documents]
 * @property {number} company
 * @property {string[]} [notification_emails]
 * @property {string} [stage]
 * @property {Object} [_custom_json]
 * @property {Object} [warnings]
 * @property {string} display_name
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
 * @property {string} [group_id]
 * @property {Object} [meta]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [quantity]
 * @property {_ArticleQuery} [query]
 */

/**
 * @typedef AssignStoreRequestValidator
 * @property {string} [app_id]
 * @property {number} [company_id]
 * @property {_AssignStoreArticle[]} [articles]
 * @property {number[]} [store_ids]
 * @property {string} [channel_identifier]
 * @property {string} [channel_type]
 * @property {string} [pincode]
 */

/**
 * @typedef AssignStoreResponseSerializer
 * @property {Object} [meta]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [company_id]
 * @property {boolean} [status]
 * @property {string} [store_pincode]
 * @property {number} [quantity]
 * @property {string} [uid]
 * @property {string} [s_city]
 * @property {number} [price_marked]
 * @property {number} [price_effective]
 * @property {string} [_id]
 * @property {number} [item_id]
 * @property {string} [size]
 * @property {number} [store_id]
 * @property {number} [index]
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
 * @typedef Rule
 * @property {number} [key]
 * @property {number} [max]
 * @property {number} [min]
 * @property {number} [value]
 * @property {number} [discount_qty]
 */

/**
 * @typedef RuleDefinition
 * @property {boolean} [is_exact]
 * @property {string} applicable_on
 * @property {string} type
 * @property {string[]} [scope]
 * @property {string} calculate_on
 * @property {string} [currency_code]
 * @property {string} value_type
 * @property {boolean} [auto_apply]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef State
 * @property {boolean} [is_public]
 * @property {boolean} [is_display]
 * @property {boolean} [is_archived]
 */

/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */

/**
 * @typedef CouponSchedule
 * @property {string} [end]
 * @property {string} [start]
 * @property {number} [duration]
 * @property {string} [cron]
 * @property {Object[]} [next_schedule]
 */

/**
 * @typedef Validation
 * @property {string} [user_registered_after]
 * @property {string[]} [app_id]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef Ownership
 * @property {string} payable_category
 * @property {string} payable_by
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
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [total]
 * @property {number} [user]
 * @property {number} [app]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [maximum]
 * @property {UsesRemaining} [remaining]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [codes]
 * @property {string[]} [networks]
 * @property {string[]} [types]
 * @property {PaymentAllowValue} [uses]
 */

/**
 * @typedef Restrictions
 * @property {PostOrder} [post_order]
 * @property {number[]} [user_groups]
 * @property {string[]} [platforms]
 * @property {boolean} [coupon_allowed]
 * @property {number[]} [ordering_stores]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {PriceRange} [price_range]
 * @property {UsesRestriction} [uses]
 * @property {Object} [payments]
 * @property {string} [user_type]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */

/**
 * @typedef DisplayMeta
 * @property {DisplayMetaDict} [auto]
 * @property {DisplayMetaDict} [remove]
 * @property {string} [title]
 * @property {DisplayMetaDict} [apply]
 * @property {string} [subtitle]
 * @property {string} [description]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef CouponAdd
 * @property {Rule[]} rule
 * @property {RuleDefinition} rule_definition
 * @property {string} code
 * @property {string[]} [tags]
 * @property {CouponDateMeta} [date_meta]
 * @property {Identifier} identifiers
 * @property {CouponAuthor} [author]
 * @property {State} [state]
 * @property {CouponAction} [action]
 * @property {CouponSchedule} [_schedule]
 * @property {Validation} [validation]
 * @property {Ownership} ownership
 * @property {string} type_slug
 * @property {Restrictions} [restrictions]
 * @property {DisplayMeta} display_meta
 * @property {Validity} validity
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
 * @property {Rule[]} rule
 * @property {RuleDefinition} rule_definition
 * @property {string} code
 * @property {string[]} [tags]
 * @property {CouponDateMeta} [date_meta]
 * @property {Identifier} identifiers
 * @property {CouponAuthor} [author]
 * @property {State} [state]
 * @property {CouponAction} [action]
 * @property {CouponSchedule} [_schedule]
 * @property {Validation} [validation]
 * @property {Ownership} ownership
 * @property {string} type_slug
 * @property {Restrictions} [restrictions]
 * @property {DisplayMeta} display_meta
 * @property {Validity} validity
 */

/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */

/**
 * @typedef DiscountOffer
 * @property {number} [max_offer_quantity]
 * @property {boolean} [partial_can_ret]
 * @property {number} [discount_percentage]
 * @property {string} [code]
 * @property {number} [min_offer_quantity]
 * @property {number} [discount_price]
 * @property {boolean} [apportion_discount]
 * @property {number} [max_discount_amount]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [discount_amount]
 */

/**
 * @typedef CompareObject
 * @property {number} [less_than_equals]
 * @property {number} [less_than]
 * @property {number} [greater_than]
 * @property {number} [greater_than_equals]
 * @property {number} [equals]
 */

/**
 * @typedef ItemCriteria
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_store]
 * @property {number[]} [item_company]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_id]
 * @property {number[]} [item_exclude_id]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_brand]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {string[]} [available_zones]
 * @property {boolean} [all_items]
 * @property {string[]} [product_tags]
 * @property {string[]} [item_size]
 * @property {number[]} [item_exclude_company]
 * @property {number[]} [item_category]
 * @property {number[]} [item_exclude_store]
 * @property {string[]} [item_exclude_sku]
 * @property {string[]} [buy_rules]
 * @property {CompareObject} [cart_total]
 * @property {number[]} [item_exclude_category]
 */

/**
 * @typedef DiscountRule
 * @property {string} discount_type
 * @property {string} buy_condition
 * @property {DiscountOffer} offer
 * @property {ItemCriteria} item_criteria
 */

/**
 * @typedef PromotionSchedule
 * @property {string} [end]
 * @property {string} start
 * @property {boolean} published
 * @property {number} [duration]
 * @property {string} [cron]
 * @property {Object[]} [next_schedule]
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [offer_label]
 * @property {string} [offer_text]
 * @property {string} [name]
 * @property {string} [description]
 */

/**
 * @typedef Ownership1
 * @property {string} payable_category
 * @property {string} payable_by
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
 * @property {string} type
 * @property {PaymentAllowValue1} [uses]
 */

/**
 * @typedef UserRegistered
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef UsesRemaining1
 * @property {number} [total]
 * @property {number} [user]
 */

/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [maximum]
 * @property {UsesRemaining1} [remaining]
 */

/**
 * @typedef Restrictions1
 * @property {number} [order_quantity]
 * @property {PostOrder1} [post_order]
 * @property {number[]} [user_groups]
 * @property {string[]} [platforms]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {string[]} [user_id]
 * @property {UserRegistered} [user_registered]
 * @property {UsesRestriction1} uses
 * @property {boolean} [anonymous_users]
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [modified_on]
 * @property {string} [created_on]
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
 * @typedef PromotionListItem
 * @property {Visibility} [visiblility]
 * @property {boolean} [apply_all_discount]
 * @property {string} [currency]
 * @property {boolean} [stackable]
 * @property {string} mode
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionSchedule} [_schedule]
 * @property {number} [apply_priority]
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} ownership
 * @property {string} [code]
 * @property {string} application_id
 * @property {string} [apply_exclusive]
 * @property {Restrictions1} [restrictions]
 * @property {string} promo_group
 * @property {Object} buy_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionAuthor} [author]
 * @property {string} [calculate_on]
 * @property {string} promotion_type
 * @property {Object} [_custom_json]
 */

/**
 * @typedef PromotionsResponse
 * @property {Page} [page]
 * @property {PromotionListItem} [items]
 */

/**
 * @typedef PromotionAdd
 * @property {Visibility} [visiblility]
 * @property {boolean} [apply_all_discount]
 * @property {string} [currency]
 * @property {boolean} [stackable]
 * @property {string} mode
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionSchedule} [_schedule]
 * @property {number} [apply_priority]
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} ownership
 * @property {string} [code]
 * @property {string} application_id
 * @property {string} [apply_exclusive]
 * @property {Restrictions1} [restrictions]
 * @property {string} promo_group
 * @property {Object} buy_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionAuthor} [author]
 * @property {string} [calculate_on]
 * @property {string} promotion_type
 * @property {Object} [_custom_json]
 */

/**
 * @typedef PromotionUpdate
 * @property {Visibility} [visiblility]
 * @property {boolean} [apply_all_discount]
 * @property {string} [currency]
 * @property {boolean} [stackable]
 * @property {string} mode
 * @property {DiscountRule[]} discount_rules
 * @property {PromotionSchedule} [_schedule]
 * @property {number} [apply_priority]
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} ownership
 * @property {string} [code]
 * @property {string} application_id
 * @property {string} [apply_exclusive]
 * @property {Restrictions1} [restrictions]
 * @property {string} promo_group
 * @property {Object} buy_rules
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionAuthor} [author]
 * @property {string} [calculate_on]
 * @property {string} promotion_type
 * @property {Object} [_custom_json]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [entity_slug]
 * @property {string} [type]
 * @property {string} [entity_type]
 * @property {boolean} [is_hidden]
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [description]
 * @property {string} [example]
 */

/**
 * @typedef CartItem
 * @property {string} product_id
 * @property {string} size
 * @property {number} [quantity]
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef ProductPrice
 * @property {string} [currency_symbol]
 * @property {number} [add_on]
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {number} [selling]
 * @property {number} [marked]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */

/**
 * @typedef FreeGiftItem
 * @property {string} [item_name]
 * @property {Object} [item_price_details]
 * @property {string} [item_slug]
 * @property {string} [item_brand_name]
 * @property {number} [item_id]
 * @property {string[]} [item_images_url]
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
 * @property {Object} [raw_offer]
 * @property {Object} [item_criteria]
 * @property {Object} [offer]
 * @property {string[]} [matched_buy_rules]
 */

/**
 * @typedef Ownership2
 * @property {string} [payable_category]
 * @property {string} [payable_by]
 */

/**
 * @typedef AppliedPromotion
 * @property {boolean} [mrp_promotion]
 * @property {BuyRules[]} [buy_rules]
 * @property {number} [amount]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {string} [promotion_group]
 * @property {string} [promotion_name]
 * @property {number} [article_quantity]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {string} [promotion_type]
 * @property {string} [promo_id]
 * @property {string} [offer_text]
 * @property {Ownership2} [ownership]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef ProductAvailability
 * @property {boolean} [deliverable]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [is_valid]
 * @property {number} [other_store_quantity]
 * @property {string[]} [sizes]
 */

/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef BasePrice
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 * @property {number} [effective]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */

/**
 * @typedef ProductArticle
 * @property {string} [size]
 * @property {string[]} [product_group_tags]
 * @property {number} [quantity]
 * @property {BaseInfo} [store]
 * @property {string} [type]
 * @property {string} [uid]
 * @property {ArticlePriceInfo} [price]
 * @property {BaseInfo} [seller]
 * @property {Object} [extra_meta]
 * @property {Object} [_custom_json]
 * @property {Object} [parent_item_identifiers]
 */

/**
 * @typedef ProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {string} [secure_url]
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
 * @typedef CartProduct
 * @property {string} [name]
 * @property {BaseInfo} [brand]
 * @property {string} [type]
 * @property {number} [uid]
 * @property {ProductImage[]} [images]
 * @property {ProductAction} [action]
 * @property {CategoryInfo[]} [categories]
 * @property {NetQuantity} [net_quantity]
 * @property {string} [slug]
 */

/**
 * @typedef CartProductInfo
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {string} [key]
 * @property {string} [discount]
 * @property {number} [quantity]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {boolean} [is_set]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [message]
 * @property {Object} [bulk_offer]
 * @property {PromoMeta} [promo_meta]
 * @property {ProductAvailability} [availability]
 * @property {ProductPriceInfo} [price]
 * @property {ProductArticle} [article]
 * @property {string} [coupon_message]
 * @property {Object} [parent_item_identifiers]
 * @property {CartProduct} [product]
 */

/**
 * @typedef RawBreakup
 * @property {number} [gst_charges]
 * @property {number} [fynd_cash]
 * @property {number} [coupon]
 * @property {number} [discount]
 * @property {number} [delivery_charge]
 * @property {number} [mrp_total]
 * @property {number} [convenience_fee]
 * @property {number} [total]
 * @property {number} [cod_charge]
 * @property {number} [subtotal]
 * @property {number} [vog]
 * @property {number} [you_saved]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [currency_symbol]
 * @property {string} [key]
 * @property {string[]} [message]
 * @property {string} [currency_code]
 * @property {number} [value]
 * @property {string} [display]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [code]
 * @property {string} [sub_title]
 * @property {string} [type]
 * @property {string} [uid]
 * @property {string} [message]
 * @property {boolean} [is_applied]
 * @property {number} [coupon_value]
 * @property {string} [title]
 * @property {number} [max_discount_value]
 * @property {string} [coupon_type]
 * @property {number} [value]
 * @property {string} [description]
 * @property {number} [minimum_cart_value]
 */

/**
 * @typedef LoyaltyPoints
 * @property {number} [applicable]
 * @property {number} [total]
 * @property {string} [description]
 * @property {boolean} [is_applied]
 */

/**
 * @typedef CartBreakup
 * @property {RawBreakup} [raw]
 * @property {DisplayBreakup[]} [display]
 * @property {CouponBreakup} [coupon]
 * @property {LoyaltyPoints} [loyalty_points]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {Object} [errors]
 */

/**
 * @typedef ShippingAddress
 * @property {string} [email]
 * @property {string} [name]
 * @property {number} [pincode]
 * @property {string} [landmark]
 * @property {number} [phone]
 * @property {string} [country]
 * @property {string} [area]
 * @property {string} [state]
 * @property {string} [area_code_slug]
 * @property {string} [country_code]
 * @property {string} [address_type]
 * @property {Object} [meta]
 * @property {string} area_code
 * @property {string} [city]
 * @property {string} [address]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {ShippingAddress} shipping_address
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef PromiseFormatted
 * @property {string} [max]
 * @property {string} [min]
 */

/**
 * @typedef PromiseTimestamp
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef ShipmentPromise
 * @property {PromiseFormatted} [formatted]
 * @property {PromiseTimestamp} [timestamp]
 */

/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {ShipmentPromise} [delivery_promise]
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
 * @property {number} price_effective
 * @property {number} price_marked
 * @property {number} discount
 * @property {number} [quantity]
 * @property {string} size
 * @property {number} cod_charges
 * @property {number} delivery_charges
 * @property {OpenApiFiles[]} [files]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} cashback_applied
 * @property {number} coupon_effective_discount
 * @property {number} product_id
 * @property {number} [loyalty_discount]
 * @property {CartItemMeta} [meta]
 * @property {Object} [extra_meta]
 * @property {number} [employee_discount]
 * @property {number} amount_paid
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [comment]
 * @property {number} cod_charges
 * @property {string} [coupon]
 * @property {string} [affiliate_order_id]
 * @property {number} delivery_charges
 * @property {string} [order_id]
 * @property {number} coupon_value
 * @property {string} [currency_code]
 * @property {Object} [employee_discount]
 * @property {string} [gstin]
 * @property {OpenApiOrderItem[]} cart_items
 * @property {OpenApiFiles[]} [files]
 * @property {number} cart_value
 * @property {string} [payment_mode]
 * @property {ShippingAddress} billing_address
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} cashback_applied
 * @property {string} coupon_code
 * @property {number} [loyalty_discount]
 * @property {ShippingAddress} [shipping_address]
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {boolean} [success]
 * @property {string} [order_ref_id]
 * @property {string} [message]
 * @property {string} order_id
 */

/**
 * @typedef AbandonedCart
 * @property {Object} [cod_charges]
 * @property {string} [order_id]
 * @property {string} _id
 * @property {Object} cashback
 * @property {number} [discount]
 * @property {string} [app_id]
 * @property {Object} [promotion]
 * @property {string} [payment_mode]
 * @property {boolean} [merge_qty]
 * @property {string} user_id
 * @property {Object} [payments]
 * @property {number} [bulk_coupon_discount]
 * @property {string} [comment]
 * @property {Object} [coupon]
 * @property {Object} [delivery_charges]
 * @property {boolean} [is_active]
 * @property {Object} [meta]
 * @property {string} [gstin]
 * @property {Object} [fynd_credits]
 * @property {string} created_on
 * @property {string} [checkout_mode]
 * @property {string} expire_at
 * @property {string} last_modified
 * @property {number} [cart_value]
 * @property {Object[]} [shipments]
 * @property {Object[]} articles
 * @property {number} uid
 * @property {Object[]} [payment_methods]
 * @property {boolean} is_default
 * @property {boolean} [is_archive]
 * @property {Object} [pick_up_customer_details]
 * @property {number[]} [fc_index_map]
 * @property {boolean} [buy_now]
 */

/**
 * @typedef AbandonedCartResponse
 * @property {Object} [result]
 * @property {string} [message]
 * @property {boolean} [success]
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
 * @property {string} [comment]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [restrict_checkout]
 * @property {string} [last_modified]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info]
 * @property {string} [message]
 * @property {string} [id]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartProductInfo[]} [items]
 * @property {CartCurrency} [currency]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 * @property {string} [checkout_mode]
 * @property {boolean} [buy_now]
 */

/**
 * @typedef AddProductCart
 * @property {string[]} [product_group_tags]
 * @property {string} [item_size]
 * @property {number} [quantity]
 * @property {number} [store_id]
 * @property {Object} [article_assignment]
 * @property {boolean} [pos]
 * @property {string} [article_id]
 * @property {number} [item_id]
 * @property {Object} [extra_meta]
 * @property {number} [seller_id]
 * @property {Object} [_custom_json]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [display]
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [partial]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CartDetailResponse} [cart]
 */

/**
 * @typedef UpdateProductCart
 * @property {number} [quantity]
 * @property {string} [item_size]
 * @property {number} [item_index]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [article_id]
 * @property {number} [item_id]
 * @property {Object} [extra_meta]
 * @property {Object} [_custom_json]
 * @property {Object} [parent_item_identifiers]
 */

/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CartDetailResponse} [cart]
 */

/**
 * @typedef GetShareCartLinkRequest
 * @property {string} [id]
 * @property {Object} [meta]
 */

/**
 * @typedef GetShareCartLinkResponse
 * @property {string} [share_url]
 * @property {string} [token]
 */

/**
 * @typedef SharedCartDetails
 * @property {Object} [user]
 * @property {string} [token]
 * @property {Object} [source]
 * @property {Object} [meta]
 * @property {string} [created_on]
 */

/**
 * @typedef SharedCart
 * @property {string} [id]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartCurrency} [currency]
 * @property {boolean} [restrict_checkout]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [coupon_text]
 * @property {string} [comment]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [gstin]
 * @property {string} [checkout_mode]
 * @property {string} [last_modified]
 * @property {string} [delivery_charge_info]
 * @property {string} [message]
 * @property {number} [cart_id]
 * @property {string} [uid]
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [buy_now]
 */

/**
 * @typedef SharedCartResponse
 * @property {string} [error]
 * @property {SharedCart} [cart]
 */

/**
 * @typedef CartList
 * @property {string} [item_counts]
 * @property {string} [cart_value]
 * @property {string} [cart_id]
 * @property {string} [user_id]
 * @property {string} [created_on]
 */

/**
 * @typedef UserCartMappingResponse
 * @property {string} [comment]
 * @property {UserInfo} [user]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [restrict_checkout]
 * @property {string} [last_modified]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [delivery_charge_info]
 * @property {string} [message]
 * @property {string} [id]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartProductInfo[]} [items]
 * @property {CartCurrency} [currency]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 * @property {string} [checkout_mode]
 * @property {boolean} [buy_now]
 */

/**
 * @typedef CartItemCountResponse
 * @property {number} [user_cart_items_count]
 */

/**
 * @typedef Coupon
 * @property {string} [sub_title]
 * @property {string} [expires_on]
 * @property {string} [message]
 * @property {number} [coupon_value]
 * @property {boolean} [is_applied]
 * @property {string} [coupon_type]
 * @property {string} [title]
 * @property {number} [max_discount_value]
 * @property {boolean} [is_applicable]
 * @property {string} [coupon_code]
 * @property {string} [description]
 * @property {number} [minimum_cart_value]
 */

/**
 * @typedef PageCoupon
 * @property {boolean} [has_previous]
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [total_item_count]
 * @property {number} [total]
 */

/**
 * @typedef GetCouponResponse
 * @property {Coupon[]} [available_coupon_list]
 * @property {PageCoupon} [page]
 */

/**
 * @typedef ApplyCouponRequest
 * @property {string} coupon_code
 */

/**
 * @typedef GeoLocation
 * @property {number} [longitude]
 * @property {number} [latitude]
 */

/**
 * @typedef PlatformAddress
 * @property {Object} [google_map_point]
 * @property {string} [name]
 * @property {string} [state]
 * @property {string} [id]
 * @property {string} [country_code]
 * @property {string} [city]
 * @property {string} [landmark]
 * @property {GeoLocation} [geo_location]
 * @property {string} [user_id]
 * @property {string} [area_code]
 * @property {string} [address]
 * @property {string[]} [tags]
 * @property {string} [phone]
 * @property {string} [country]
 * @property {string} [area]
 * @property {string} [created_by_user_id]
 * @property {boolean} [is_active]
 * @property {string} [area_code_slug]
 * @property {string} [address_type]
 * @property {Object} [meta]
 * @property {string} [checkout_mode]
 * @property {string} [email]
 * @property {string} [cart_id]
 * @property {boolean} [is_default_address]
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
 * @property {string} [id]
 * @property {boolean} [success]
 * @property {boolean} [is_updated]
 * @property {boolean} [is_default_address]
 */

/**
 * @typedef DeleteAddressResponse
 * @property {string} [id]
 * @property {boolean} [is_deleted]
 */

/**
 * @typedef PlatformSelectCartAddressRequest
 * @property {string} [id]
 * @property {string} [billing_address_id]
 * @property {string} [checkout_mode]
 * @property {string} [cart_id]
 */

/**
 * @typedef ShipmentResponse
 * @property {string} [shipment_type]
 * @property {string} [fulfillment_type]
 * @property {ShipmentPromise} [promise]
 * @property {number} [shipments]
 * @property {number} [fulfillment_id]
 * @property {Object} [dp_options]
 * @property {CartProductInfo[]} [items]
 * @property {string} [box_type]
 * @property {string} [order_type]
 * @property {string} [dp_id]
 */

/**
 * @typedef CartShipmentsResponse
 * @property {string} [comment]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [id]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartCurrency} [currency]
 * @property {string} [gstin]
 * @property {string} [checkout_mode]
 * @property {boolean} [restrict_checkout]
 * @property {string} [last_modified]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [error]
 * @property {ShipmentResponse[]} [shipments]
 * @property {string} [delivery_charge_info]
 * @property {string} [message]
 * @property {number} [cart_id]
 * @property {string} [uid]
 * @property {string} [coupon_text]
 * @property {boolean} [buy_now]
 */

/**
 * @typedef UpdateCartShipmentItem
 * @property {string} article_uid
 * @property {number} [quantity]
 * @property {string} shipment_type
 */

/**
 * @typedef UpdateCartShipmentRequest
 * @property {UpdateCartShipmentItem[]} shipments
 */

/**
 * @typedef CartMetaRequest
 * @property {string} [comment]
 * @property {string} [gstin]
 * @property {Object} [pick_up_customer_details]
 * @property {string} [checkout_mode]
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
 * @property {string} first_name
 * @property {string} _id
 * @property {string} user
 * @property {string} last_name
 */

/**
 * @typedef PlatformCartCheckoutDetailRequest
 * @property {Object} [payment_params]
 * @property {string} [callback_url]
 * @property {Object} [delivery_address]
 * @property {string} [merchant_code]
 * @property {number} [ordering_store]
 * @property {string} [address_id]
 * @property {string} [payment_identifier]
 * @property {boolean} [payment_auto_confirm]
 * @property {string} [billing_address_id]
 * @property {string} payment_mode
 * @property {Object} [billing_address]
 * @property {string} id
 * @property {string} user_id
 * @property {StaffCheckout} [staff]
 * @property {Object} [meta]
 * @property {Object} [extra_meta]
 * @property {string} [aggregator]
 */

/**
 * @typedef CheckCart
 * @property {string} [cod_message]
 * @property {number} [cod_charges]
 * @property {string} [order_id]
 * @property {number} [delivery_charge_order_value]
 * @property {string} [id]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartCurrency} [currency]
 * @property {string} [user_type]
 * @property {boolean} [restrict_checkout]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {boolean} [cod_available]
 * @property {boolean} [success]
 * @property {string} [coupon_text]
 * @property {string} [error_message]
 * @property {string} [comment]
 * @property {CartBreakup} [breakup_values]
 * @property {number} [delivery_charges]
 * @property {string} [store_code]
 * @property {string} [gstin]
 * @property {string} [checkout_mode]
 * @property {string} [last_modified]
 * @property {string} [delivery_charge_info]
 * @property {string} [message]
 * @property {number} [cart_id]
 * @property {string} [uid]
 * @property {Object[]} [store_emps]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [buy_now]
 */

/**
 * @typedef CartCheckoutResponse
 * @property {string} [callback_url]
 * @property {Object} [data]
 * @property {string} [payment_confirm_url]
 * @property {string} [message]
 * @property {string} [order_id]
 * @property {boolean} [success]
 * @property {string} [app_intercept_url]
 * @property {CheckCart} [cart]
 */

/**
 * @typedef CartDeliveryModesResponse
 * @property {number[]} [pickup_stores]
 * @property {string[]} [available_modes]
 */

/**
 * @typedef PickupStoreDetail
 * @property {string} [email]
 * @property {string} [name]
 * @property {number} [pincode]
 * @property {string} [store_code]
 * @property {string} [landmark]
 * @property {string} [phone]
 * @property {string} [country]
 * @property {number} [uid]
 * @property {string} [area]
 * @property {string} [state]
 * @property {number} [id]
 * @property {string} [area_code_slug]
 * @property {string} [address_type]
 * @property {string} [area_code]
 * @property {string} [city]
 * @property {string} [address]
 */

/**
 * @typedef StoreDetailsResponse
 * @property {PickupStoreDetail[]} [items]
 */

/**
 * @typedef UpdateCartPaymentRequest
 * @property {string} [merchant_code]
 * @property {string} [address_id]
 * @property {string} [payment_identifier]
 * @property {string} [payment_mode]
 * @property {string} [id]
 * @property {string} [aggregator_name]
 */

/**
 * @typedef CouponValidity
 * @property {number} [discount]
 * @property {string} [code]
 * @property {string} [display_message_en]
 * @property {boolean} [valid]
 * @property {string} [title]
 */

/**
 * @typedef PaymentCouponValidate
 * @property {boolean} success
 * @property {CouponValidity} [coupon_validity]
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
