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
 * @property {Application} [application]
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
 * @property {boolean} success
 * @property {Object[]} [aggregators]
 * @property {string} app_id
 * @property {string[]} display_fields
 * @property {string[]} excluded_fields
 * @property {boolean} created
 */

/**
 * @typedef ErrorCodeDescription
 * @property {boolean} success
 * @property {string} code
 * @property {string} description
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} config_type
 * @property {string} merchant_salt
 * @property {string} secret
 * @property {string} key
 * @property {boolean} [is_active]
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {boolean} [is_active]
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {string} app_id
 */

/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {boolean} success
 * @property {string[]} aggregator
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} code
 * @property {string} description
 */

/**
 * @typedef HttpErrorCodeAndResponse
 * @property {boolean} success
 * @property {ErrorCodeAndDescription} error
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
 */

/**
 * @typedef PaymentModeLogo
 * @property {string} large
 * @property {string} small
 */

/**
 * @typedef IntentApp
 * @property {string} [code]
 * @property {string} [package_name]
 * @property {PaymentModeLogo} [logos]
 * @property {string} [display_name]
 */

/**
 * @typedef PaymentModeList
 * @property {string} [nickname]
 * @property {number} [cod_limit_per_order]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {number} [cod_limit]
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [card_number]
 * @property {string} [display_name]
 * @property {string} [card_reference]
 * @property {string} [card_issuer]
 * @property {number} [retry_count]
 * @property {string} [card_fingerprint]
 * @property {number} [remaining_limit]
 * @property {string} [card_brand]
 * @property {boolean} [expired]
 * @property {string} [fynd_vpa]
 * @property {string} [card_name]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {number} [timeout]
 * @property {string} [card_brand_image]
 * @property {number} [display_priority]
 * @property {string} aggregator_name
 * @property {number} [exp_month]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [card_id]
 * @property {number} [exp_year]
 * @property {string} [merchant_code]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_token]
 * @property {string} [card_isin]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [card_type]
 * @property {boolean} [intent_flow]
 */

/**
 * @typedef RootPaymentMode
 * @property {boolean} [anonymous_enable]
 * @property {string} name
 * @property {boolean} [save_card]
 * @property {boolean} [is_pay_by_card_pl]
 * @property {number} display_priority
 * @property {string} display_name
 * @property {PaymentModeList[]} [list]
 * @property {string} [aggregator_name]
 * @property {boolean} [add_card_enabled]
 */

/**
 * @typedef PaymentOptions
 * @property {RootPaymentMode[]} payment_option
 */

/**
 * @typedef PaymentOptionsResponse
 * @property {boolean} success
 * @property {PaymentOptions} payment_options
 */

/**
 * @typedef Payout
 * @property {string} transfer_type
 * @property {Object} more_attributes
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {Object} unique_transfer_no
 * @property {Object} customers
 * @property {Object[]} payouts_aggregators
 */

/**
 * @typedef PayoutsResponse
 * @property {boolean} success
 * @property {Payout[]} items
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} [account_holder]
 * @property {string} [state]
 * @property {string} [bank_name]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [pincode]
 * @property {string} ifsc_code
 * @property {string} [branch_name]
 * @property {string} [account_no]
 * @property {string} account_type
 */

/**
 * @typedef PayoutRequest
 * @property {string} transfer_type
 * @property {string} unique_external_id
 * @property {string} aggregator
 * @property {Object} users
 * @property {boolean} is_active
 * @property {PayoutBankDetails} bank_details
 */

/**
 * @typedef PayoutResponse
 * @property {boolean} success
 * @property {Object} bank_details
 * @property {string} transfer_type
 * @property {Object} payouts
 * @property {string} aggregator
 * @property {Object} users
 * @property {boolean} is_active
 * @property {string} payment_status
 * @property {string} unique_transfer_no
 * @property {boolean} created
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} success
 * @property {boolean} is_default
 * @property {boolean} is_active
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
 * @property {boolean} success
 * @property {Object} config
 * @property {string} aggregator
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
 * @property {boolean} success
 * @property {string} code
 * @property {string} description
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} account_holder
 * @property {string} bank_name
 * @property {string} ifsc_code
 * @property {string} branch_name
 * @property {string} account_no
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id
 * @property {BankDetailsForOTP} details
 */

/**
 * @typedef IfscCodeResponse
 * @property {boolean} [success]
 * @property {string} bank_name
 * @property {string} branch_name
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} created_on
 * @property {string} subtitle
 * @property {string} ifsc_code
 * @property {string} display_name
 * @property {string} beneficiary_id
 * @property {string} [delights_user_name]
 * @property {string} bank_name
 * @property {string} [branch_name]
 * @property {string} transfer_mode
 * @property {boolean} is_active
 * @property {string} email
 * @property {string} account_holder
 * @property {string} modified_on
 * @property {string} title
 * @property {number} id
 * @property {string} [mobile]
 * @property {string} account_no
 * @property {string} address
 * @property {string} [comment]
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 * @property {boolean} [show_beneficiary_details]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [payment_id]
 * @property {string} [current_status]
 * @property {string} [order_id]
 * @property {Object} [extra_meta]
 * @property {string} [payment_gateway]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} [name]
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {number} amount
 * @property {string} mode
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} order_id
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {boolean} success
 * @property {string} message
 * @property {string} order_id
 */

/**
 * @typedef PlatformPaymentOptions
 * @property {string} source
 * @property {string} mode_of_payment
 * @property {Object} [callback_url]
 * @property {Object} [payment_selection_lock]
 * @property {number} [cod_amount_limit]
 * @property {boolean} [anonymous_cod]
 * @property {number} [cod_charges]
 * @property {Object} methods
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
 * @property {Object} [payment_selection_lock]
 * @property {number} [cod_amount_limit]
 * @property {boolean} [anonymous_cod]
 * @property {number} [cod_charges]
 * @property {Object} methods
 */

/**
 * @typedef CODdata
 * @property {number} remaining_limit
 * @property {string} user_id
 * @property {number} limit
 * @property {number} usages
 * @property {boolean} is_active
 */

/**
 * @typedef GetUserCODLimitResponse
 * @property {boolean} success
 * @property {CODdata} user_cod_data
 */

/**
 * @typedef SetCODForUserRequest
 * @property {boolean} is_active
 * @property {string} merchant_user_id
 * @property {string} mobileno
 */

/**
 * @typedef SetCODOptionResponse
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef FilterInfoOption
 * @property {string} [value]
 * @property {string} text
 * @property {string} [name]
 */

/**
 * @typedef FiltersInfo
 * @property {string} value
 * @property {string} text
 * @property {string} type
 * @property {FilterInfoOption[]} [options]
 */

/**
 * @typedef ShipmentStatus
 * @property {string} title
 * @property {string} actual_status
 * @property {string} ops_status
 * @property {string} hex_code
 * @property {string} status
 */

/**
 * @typedef Prices
 * @property {number} [tax_collected_at_source]
 * @property {number} [delivery_charge]
 * @property {number} [cashback_applied]
 * @property {number} [cod_charges]
 * @property {number} [promotion_effective_discount]
 * @property {number} [amount_paid]
 * @property {number} [price_marked]
 * @property {number} [cashback]
 * @property {number} [fynd_credits]
 * @property {number} [discount]
 * @property {number} [refund_amount]
 * @property {number} [refund_credit]
 * @property {number} [price_effective]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [coupon_value]
 * @property {number} [value_of_good]
 */

/**
 * @typedef UserDataInfo
 * @property {string} [name]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [avis_user_id]
 * @property {string} [gender]
 * @property {string} [first_name]
 * @property {number} [uid]
 * @property {string} [email]
 * @property {string} [mobile]
 * @property {string} [last_name]
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
 * @typedef GSTDetailsData
 * @property {number} gst_fee
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 * @property {string} gstin_code
 * @property {number} value_of_good
 */

/**
 * @typedef PlatformItem
 * @property {string} [name]
 * @property {boolean} [can_cancel]
 * @property {string[]} [image]
 * @property {string} [l3_category_name]
 * @property {boolean} [can_return]
 * @property {number} [l3_category]
 * @property {number} [id]
 * @property {string[]} [l1_category]
 * @property {string} [code]
 * @property {string} [size]
 * @property {string} [color]
 * @property {string[]} [images]
 * @property {number} [department_id]
 */

/**
 * @typedef BagUnit
 * @property {string} shipment_id
 * @property {number} total_shipment_bags
 * @property {number} bag_id
 * @property {boolean} [can_cancel]
 * @property {Prices} [prices]
 * @property {string} ordering_channel
 * @property {boolean} [can_return]
 * @property {number} item_quantity
 * @property {GSTDetailsData} [gst]
 * @property {PlatformItem} [item]
 * @property {Object} status
 */

/**
 * @typedef ShipmentItem
 * @property {string} fulfilling_centre
 * @property {Object} [payment_methods]
 * @property {ShipmentStatus} [shipment_status]
 * @property {Prices} [prices]
 * @property {string} created_at
 * @property {number} total_shipments_in_order
 * @property {string} id
 * @property {Object} [application]
 * @property {UserDataInfo} [user]
 * @property {Object} [channel]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {Object} [sla]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {number} total_bags_count
 * @property {BagUnit[]} [bags]
 * @property {number} shipment_created_at
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {FiltersInfo[]} [filters]
 * @property {ShipmentItem[]} [items]
 * @property {Object} [page]
 * @property {Object} [applied_filters]
 */

/**
 * @typedef Error
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef BagStateMapper
 * @property {string} name
 * @property {string} journey_type
 * @property {number} bs_id
 * @property {string} display_name
 * @property {boolean} [app_facing]
 * @property {string} state_type
 * @property {string} [app_display_name]
 * @property {boolean} [is_active]
 * @property {string} [app_state_name]
 * @property {boolean} [notify_customer]
 */

/**
 * @typedef BagStatusHistory
 * @property {boolean} [kafka_sync]
 * @property {string} [shipment_id]
 * @property {number} [bsh_id]
 * @property {number} [bag_id]
 * @property {string} [delivery_awb_number]
 * @property {string} [created_at]
 * @property {boolean} [display_name]
 * @property {string} [updated_at]
 * @property {number} [delivery_partner_id]
 * @property {number} [state_id]
 * @property {string} [state_type]
 * @property {boolean} [app_display_name]
 * @property {Object[]} [reasons]
 * @property {number} [store_id]
 * @property {boolean} [forward]
 * @property {string} status
 * @property {BagStateMapper} [bag_state_mapper]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [name]
 * @property {string} [id]
 * @property {string} [gst_tag]
 * @property {string} [country]
 * @property {string} [eway_bill_id]
 * @property {string} [awb_no]
 * @property {string} [pincode]
 * @property {string} [track_url]
 */

/**
 * @typedef ItemCriterias
 * @property {number[]} [item_brand]
 */

/**
 * @typedef BuyRules
 * @property {Object} [cart_conditions]
 * @property {ItemCriterias} [item_criteria]
 */

/**
 * @typedef DiscountRules
 * @property {number} [value]
 * @property {string} [type]
 */

/**
 * @typedef AppliedPromos
 * @property {string} [promo_id]
 * @property {string} [promotion_type]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_name]
 * @property {number} [amount]
 * @property {number} [article_quantity]
 * @property {DiscountRules[]} [discount_rules]
 * @property {boolean} [mrp_promotion]
 */

/**
 * @typedef OrderBrandName
 * @property {number} id
 * @property {string} brand_name
 * @property {string} logo
 * @property {string} [company]
 * @property {number} created_on
 * @property {number} [modified_on]
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [return_config]
 * @property {Object} [identifiers]
 * @property {string} [uid]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {number} [longitude]
 * @property {string} [state]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [address_type]
 * @property {string} [contact_person]
 * @property {string} [landmark]
 * @property {string} [version]
 * @property {string} [country]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {string} [address1]
 * @property {string} [address_category]
 * @property {string} [email]
 * @property {string} [city]
 * @property {string} [pincode]
 * @property {string} [area]
 * @property {string} [phone]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {boolean} added_to_fynd_cash
 * @property {number} delivery_charge
 * @property {number} brand_calculated_amount
 * @property {number} cod_charges
 * @property {number} total_units
 * @property {number} amount_paid
 * @property {number} gst_tax_percentage
 * @property {string} size
 * @property {number} price_effective
 * @property {Object} pm_price_split
 * @property {number} price_marked
 * @property {string} gst_tag
 * @property {number} fynd_credits
 * @property {number} coupon_effective_discount
 * @property {string} gst_fee
 * @property {Identifier} identifiers
 * @property {number} cashback_applied
 * @property {number} cashback
 * @property {string} hsn_code
 * @property {number} [amount_paid_roundoff]
 * @property {number} transfer_price
 * @property {number} [tax_collected_at_source]
 * @property {number} promotion_effective_discount
 * @property {string} item_name
 * @property {number} discount
 * @property {number} refund_credit
 * @property {number} coupon_value
 * @property {number} value_of_good
 */

/**
 * @typedef CurrentStatus
 * @property {boolean} [kafka_sync]
 * @property {string} [shipment_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [bag_id]
 * @property {string} [created_at]
 * @property {number} [updated_at]
 * @property {number} [delivery_partner_id]
 * @property {string} [status]
 * @property {number} [state_id]
 * @property {string} [state_type]
 * @property {number} [store_id]
 * @property {number} [delivery_awb_number]
 * @property {number} current_status_id
 */

/**
 * @typedef BagConfigs
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} enable_tracking
 * @property {boolean} is_returnable
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_active
 * @property {boolean} allow_force_return
 */

/**
 * @typedef BagGST
 * @property {number} [gst_fee]
 * @property {number} [brand_calculated_amount]
 * @property {number} [gst_tax_percentage]
 * @property {string} [hsn_code]
 * @property {string} [gst_tag]
 * @property {string} [gstin_code]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [value_of_good]
 */

/**
 * @typedef OrderBags
 * @property {number} [quantity]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {OrderBrandName} [brand]
 * @property {PlatformItem} [item]
 * @property {OrderBagArticle} [article]
 * @property {Prices} [prices]
 * @property {number} [line_number]
 * @property {string} [display_name]
 * @property {boolean} [can_return]
 * @property {Object} [parent_promo_bags]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {string} [seller_identifier]
 * @property {string} [entity_type]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {boolean} [can_cancel]
 * @property {CurrentStatus} [current_status]
 * @property {number} bag_id
 * @property {string} [identifier]
 * @property {BagConfigs} [bag_configs]
 * @property {BagGST} [gst_details]
 */

/**
 * @typedef OrderDetailsData
 * @property {Object} [tax_details]
 * @property {string} [cod_charges]
 * @property {string} [order_value]
 * @property {string} fynd_order_id
 * @property {Object} [ordering_channel_logo]
 * @property {string} [order_date]
 * @property {string} [source]
 * @property {string} [affiliate_id]
 * @property {string} [ordering_channel]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [logo]
 * @property {string} mode
 * @property {string} [source]
 */

/**
 * @typedef TrackingList
 * @property {boolean} [is_current]
 * @property {string} [time]
 * @property {boolean} [is_passed]
 * @property {string} text
 * @property {string} status
 */

/**
 * @typedef FulfillingStore
 * @property {string} store_name
 * @property {string} fulfillment_channel
 * @property {string} state
 * @property {string} address
 * @property {string} contact_person
 * @property {string} id
 * @property {string} code
 * @property {string} country
 * @property {string} city
 * @property {string} pincode
 * @property {Object} meta
 * @property {string} phone
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [shipment_id]
 * @property {string} [created_at]
 * @property {number} [id]
 * @property {number[]} [bag_list]
 * @property {string} [status]
 */

/**
 * @typedef UserDetailsData
 * @property {string} name
 * @property {string} state
 * @property {string} address
 * @property {string} country
 * @property {string} email
 * @property {string} city
 * @property {string} pincode
 * @property {string} phone
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {string} [shipment_status]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {number} status_progress
 * @property {string} [replacement_details]
 * @property {DPDetailsData} [dp_details]
 * @property {string} [pay_button]
 * @property {string} credit_note_id
 * @property {boolean} [enable_tracking]
 * @property {string} [enable_dp_tracking]
 * @property {Object[]} delivery_status
 * @property {OrderBags[]} [bags]
 * @property {Object} [bank_data]
 * @property {Object[]} [forward_tracking_list]
 * @property {boolean} is_fynd_coupon
 * @property {boolean} platform_logo
 * @property {string} [journey_type]
 * @property {Prices} [prices]
 * @property {boolean} [go_green]
 * @property {number} [total_items]
 * @property {string} [user_agent]
 * @property {boolean} is_not_fynd_source
 * @property {string} user_id
 * @property {Object} ordering_store
 * @property {boolean} [can_return]
 * @property {string} [due_date]
 * @property {Object[]} [forward_order_status]
 * @property {number} [shipment_quantity]
 * @property {Object} [user_info]
 * @property {Object[]} [custom_meta]
 * @property {OrderDetailsData} [order]
 * @property {boolean} is_packaging_order
 * @property {boolean} is_invoiced
 * @property {Object[]} items
 * @property {string} [picked_date]
 * @property {string} tracking_url
 * @property {ShipmentPayments} [payments]
 * @property {string} lock_status
 * @property {boolean} [can_cancel]
 * @property {boolean} [beneficiary_details]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [packaging_type]
 * @property {string} [vertical]
 * @property {string} [order_created_time]
 * @property {Object} company
 * @property {Object} fyndstore_emp
 * @property {FulfillingStore} [fulfilling_store]
 * @property {string} email_id
 * @property {string} order_type
 * @property {string[]} [child_nodes]
 * @property {Object} order_status
 * @property {ShipmentStatusData} [status]
 * @property {Object} invoice
 * @property {string} affiliate_shipment_id
 * @property {number} [total_bags]
 * @property {Object} [escalation]
 * @property {string} shipment_id
 * @property {Object} current_shipment_status
 * @property {Object} [refund_details]
 * @property {UserDetailsData} [delivery_details]
 * @property {string[]} [shipment_images]
 * @property {string} [kirana_store_id]
 * @property {string} [priority_text]
 * @property {string} [operational_status]
 * @property {string} [secured_delivery_flag]
 * @property {Object} [delivery_slot]
 * @property {string} [is_fynd_store]
 * @property {string} can_break
 * @property {string} [is_pdsr]
 * @property {string} [mid]
 * @property {Object[]} [forward_shipment_status]
 * @property {string} [refund_text]
 * @property {Object} [coupon]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [payment_mode]
 * @property {UserDetailsData} [billing_details]
 */

/**
 * @typedef OrderMeta
 * @property {Object[]} [order_tags]
 * @property {string[]} [order_child_entities]
 * @property {string} [payment_type]
 * @property {string} [comment]
 * @property {number} [cart_id]
 * @property {number} [mongo_cart_id]
 * @property {string} [order_platform]
 * @property {number} [ordering_store]
 * @property {string} [customer_note]
 * @property {number} [employee_id]
 * @property {Object} [staff]
 * @property {string} [currency_symbol]
 * @property {Object} [extra_meta]
 * @property {string} [order_type]
 * @property {Object[]} [files]
 */

/**
 * @typedef OrderDict
 * @property {Object} [payment_methods]
 * @property {string} fynd_order_id
 * @property {string} order_date
 * @property {number} shipment_count
 * @property {OrderMeta} [meta]
 */

/**
 * @typedef PlatformShipment
 * @property {string} [shipment_status]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {DPDetailsData} [dp_details]
 * @property {string} [enable_dp_tracking]
 * @property {OrderBags[]} [bags]
 * @property {string} [platform_logo]
 * @property {string} [journey_type]
 * @property {Prices} [prices]
 * @property {number} [total_items]
 * @property {string} [user_agent]
 * @property {number} [shipment_quantity]
 * @property {Object[]} [custom_meta]
 * @property {OrderDetailsData} [order]
 * @property {string} [picked_date]
 * @property {ShipmentPayments} [payments]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [packaging_type]
 * @property {string} [vertical]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {ShipmentStatusData} [status]
 * @property {number} [total_bags]
 * @property {string} shipment_id
 * @property {UserDetailsData} [delivery_details]
 * @property {string[]} [shipment_images]
 * @property {string} [priority_text]
 * @property {string} [operational_status]
 * @property {Object} [delivery_slot]
 * @property {Object} [coupon]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [payment_mode]
 * @property {UserDetailsData} [billing_details]
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {OrderDict} [order]
 * @property {PlatformShipment[]} [shipments]
 * @property {Object[]} [custom_meta]
 * @property {boolean} success
 */

/**
 * @typedef SubLane
 * @property {number} [total_items]
 * @property {Object[]} [actions]
 * @property {string} [value]
 * @property {number} [index]
 * @property {string} [text]
 */

/**
 * @typedef SuperLane
 * @property {string} value
 * @property {string} text
 * @property {number} [total_items]
 * @property {SubLane[]} [options]
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [name]
 * @property {string} [display]
 * @property {string} [value]
 */

/**
 * @typedef PlatformOrderItems
 * @property {string} [payment_mode]
 * @property {number} [order_value]
 * @property {string} [order_created_time]
 * @property {PlatformChannel} [channel]
 * @property {number} [total_order_value]
 * @property {UserDataInfo} [user_info]
 * @property {PlatformShipment[]} [shipments]
 * @property {string} [order_id]
 * @property {Object} [meta]
 * @property {PlatformBreakupValues[]} [breakup_values]
 */

/**
 * @typedef OrderListingResponse
 * @property {Page} [page]
 * @property {number} [total_count]
 * @property {string} [lane]
 * @property {string} [message]
 * @property {boolean} [success]
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
 * @property {string} text
 * @property {string} key
 * @property {Options[]} [options]
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [updated_time]
 * @property {string} [last_location_recieved_at]
 * @property {string} [shipment_type]
 * @property {string} [updated_at]
 * @property {string} [account_name]
 * @property {string} [awb]
 * @property {string} [raw_status]
 * @property {string} [status]
 * @property {Object} [meta]
 * @property {string} [reason]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {PlatformTrack[]} [results]
 * @property {Object} [meta]
 */

/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [unfulfilled]
 * @property {FiltersInfo[]} [processed]
 * @property {FiltersInfo[]} [action_centre]
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [filters]
 */

/**
 * @typedef FiltersResponse
 * @property {FiltersInfo[]} [global_filter]
 * @property {AdvanceFilterInfo} [advance_filter]
 */

/**
 * @typedef Success
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef OmsReports
 * @property {string} [report_type]
 * @property {string} [report_requested_at]
 * @property {string} [display_name]
 * @property {Object} [request_details]
 * @property {string} [report_name]
 * @property {string} [s3_key]
 * @property {string} [report_created_at]
 * @property {string} [status]
 * @property {string} [report_id]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [item_id]
 * @property {string} [article_id]
 * @property {string} [company_id]
 * @property {string} [jio_code]
 */

/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */

/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [value]
 * @property {string} [type]
 * @property {string} [message]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {Object[]} [data]
 * @property {string} [trace_id]
 * @property {string} [identifier]
 * @property {boolean} [success]
 * @property {NestedErrorSchemaDataSet[]} [error]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {string} [message]
 * @property {boolean} success
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} [store_name]
 * @property {Object} [label]
 * @property {boolean} do_invoice_label_generated
 * @property {Object} [data]
 * @property {string} [company_id]
 * @property {string} batch_id
 * @property {string} [invoice_status]
 * @property {string} [store_code]
 * @property {string} [store_id]
 * @property {Object} [invoice]
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
 * @property {string} [operation]
 * @property {string} [content_type]
 * @property {FileUploadResponse} [upload]
 * @property {string} [namespace]
 * @property {string} [method]
 * @property {number} [size]
 * @property {URL} [cdn]
 * @property {string} [file_name]
 * @property {string[]} [tags]
 * @property {string} [file_path]
 */

/**
 * @typedef bulkListingData
 * @property {number} [total]
 * @property {number} [store_id]
 * @property {string} [store_name]
 * @property {string} [uploaded_on]
 * @property {string} [user_id]
 * @property {number} [failed]
 * @property {string[]} [processing_shipments]
 * @property {string} [id]
 * @property {string} [batch_id]
 * @property {string} [file_name]
 * @property {string} [store_code]
 * @property {string} [excel_url]
 * @property {string} [status]
 * @property {Object[]} [successful_shipments]
 * @property {Object[]} [failed_shipments]
 * @property {number} [processing]
 * @property {number} [company_id]
 * @property {number} [successful]
 * @property {string} [user_name]
 */

/**
 * @typedef BulkListingPage
 * @property {string} [type]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [total]
 */

/**
 * @typedef BulkListingResponse
 * @property {bulkListingData[]} [data]
 * @property {BulkListingPage} [page]
 * @property {string} [error]
 * @property {boolean} [success]
 */

/**
 * @typedef QuestionSet
 * @property {number} [id]
 * @property {string} [display_name]
 */

/**
 * @typedef Reason
 * @property {string[]} [qc_type]
 * @property {number} [id]
 * @property {QuestionSet[]} [question_set]
 * @property {string} [display_name]
 */

/**
 * @typedef PlatformShipmentReasonsResponse
 * @property {Reason[]} [reasons]
 * @property {boolean} [success]
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
 * @property {string} [company_id]
 * @property {number} [total_shipments_count]
 * @property {string} [batch_id]
 * @property {number} [processing_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [failed_shipments_count]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {string} [uploaded_on]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string[]} [failed_records]
 * @property {string} [user_id]
 * @property {string} [message]
 * @property {string} [success]
 * @property {string[]} [error]
 * @property {string} [uploaded_by]
 * @property {boolean} [status]
 */

/**
 * @typedef Brand
 * @property {number} brand_id
 * @property {string} [pickup_location]
 * @property {boolean} [credit_note_allowed]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} [logo]
 * @property {string} brand_name
 * @property {string} company
 * @property {number} [credit_note_expiry_days]
 * @property {string} [invoice_prefix]
 * @property {number} [created_on]
 * @property {string} [script_last_ran]
 * @property {string} [start_date]
 * @property {number} [modified_on]
 */

/**
 * @typedef Attributes
 * @property {string} [name]
 * @property {string} [marketer_address]
 * @property {string} [brand_name]
 * @property {string} [primary_color_hex]
 * @property {string} [primary_color]
 * @property {string[]} [gender]
 * @property {string} [primary_material]
 * @property {string} [essential]
 * @property {string} [marketer_name]
 */

/**
 * @typedef Item
 * @property {string} [last_updated_at]
 * @property {string} size
 * @property {string} brand
 * @property {string[]} image
 * @property {boolean} [can_return]
 * @property {string} [gender]
 * @property {string} [webstore_product_url]
 * @property {Object} [meta]
 * @property {string} name
 * @property {number} brand_id
 * @property {boolean} [can_cancel]
 * @property {string} [l3_category_name]
 * @property {number} [l1_category_id]
 * @property {string} [code]
 * @property {number} [l2_category_id]
 * @property {Attributes} attributes
 * @property {number} [l3_category]
 * @property {string[]} [l1_category]
 * @property {string[]} [l2_category]
 * @property {string} [color]
 * @property {number} item_id
 * @property {string} slug_key
 * @property {string} [branch_url]
 * @property {number} [department_id]
 */

/**
 * @typedef ReturnConfig
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef Weight
 * @property {string} [unit]
 * @property {boolean} [is_default]
 * @property {number} [shipping]
 */

/**
 * @typedef Dimensions
 * @property {boolean} [is_default]
 * @property {number} [height]
 * @property {string} [unit]
 * @property {number} [width]
 * @property {number} [length]
 */

/**
 * @typedef Article
 * @property {Identifier} identifiers
 * @property {ReturnConfig} [return_config]
 * @property {boolean} [is_set]
 * @property {string} [code]
 * @property {string} size
 * @property {Weight} [weight]
 * @property {Object} [raw_meta]
 * @property {Object} [esp_modified]
 * @property {string} seller_identifier
 * @property {Object} [child_details]
 * @property {Dimensions} [dimensions]
 * @property {Object} [a_set]
 * @property {string} _id
 * @property {string} uid
 */

/**
 * @typedef Dates
 * @property {string} [order_created]
 * @property {Object} [delivery_date]
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef StoreAddress
 * @property {string} contact_person
 * @property {string} updated_at
 * @property {string} [landmark]
 * @property {string} address_category
 * @property {number} longitude
 * @property {string} state
 * @property {string} address_type
 * @property {string} country
 * @property {number} latitude
 * @property {string} [email]
 * @property {string} phone
 * @property {string} created_at
 * @property {string} country_code
 * @property {string} address1
 * @property {string} city
 * @property {number} pincode
 * @property {string} [area]
 * @property {string} [version]
 * @property {string} [address2]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [username]
 * @property {string} [user]
 * @property {string} [password]
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
 * @typedef Document
 * @property {string} legal_name
 * @property {string} value
 * @property {string} ds_type
 * @property {boolean} verified
 * @property {string} [url]
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef StoreMeta
 * @property {Object} [product_return_config]
 * @property {Object} [ewaybill_portal_details]
 * @property {string} display_name
 * @property {Object} [additional_contact_details]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {string} stage
 * @property {Object[]} [timing]
 * @property {StoreGstCredentials} gst_credentials
 * @property {StoreDocuments} [documents]
 * @property {string[]} [notification_emails]
 * @property {string} [gst_number]
 */

/**
 * @typedef Store
 * @property {string} [vat_no]
 * @property {string} contact_person
 * @property {string} [updated_at]
 * @property {boolean} [is_archived]
 * @property {string} s_id
 * @property {string} [mall_area]
 * @property {string[]} [brand_store_tags]
 * @property {boolean} [is_active]
 * @property {number} [parent_store_id]
 * @property {number} longitude
 * @property {string} state
 * @property {StoreAddress} [store_address_json]
 * @property {string} country
 * @property {string} location_type
 * @property {number} latitude
 * @property {number} [packaging_material_count]
 * @property {StoreMeta} meta
 * @property {number} phone
 * @property {string} name
 * @property {Object} [brand_id]
 * @property {string} created_at
 * @property {string} store_email
 * @property {string} [code]
 * @property {string} address1
 * @property {string} city
 * @property {string} pincode
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} fulfillment_channel
 * @property {string} [order_integration_id]
 * @property {number} company_id
 * @property {string} [mall_name]
 * @property {number} [alohomora_user_id]
 * @property {string} [address2]
 * @property {string} login_username
 * @property {string} [store_active_from]
 */

/**
 * @typedef AffiliateMeta
 * @property {number} [loyalty_discount]
 * @property {boolean} [is_priority]
 * @property {string} [coupon_code]
 * @property {number} [quantity]
 * @property {string} [due_date]
 * @property {string} [box_type]
 * @property {string} [order_item_id]
 * @property {number} [size_level_total_qty]
 * @property {string} [channel_order_id]
 * @property {number} [employee_discount]
 * @property {string} [channel_shipment_id]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {string} affiliate_order_id
 * @property {number} [loyalty_discount]
 * @property {AffiliateMeta} affiliate_meta
 * @property {number} [employee_discount]
 * @property {string} affiliate_bag_id
 */

/**
 * @typedef B2BPODetails
 * @property {number} [total_gst_percentage]
 * @property {string} [docker_number]
 * @property {number} [po_line_amount]
 * @property {boolean} [partial_can_ret]
 * @property {number} [item_base_price]
 * @property {number} [po_tax_amount]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_max]
 * @property {string} [t_min]
 */

/**
 * @typedef EInvoice
 * @property {string} [acknowledge_date]
 * @property {string} [error_code]
 * @property {string} [irn]
 * @property {number} [acknowledge_no]
 * @property {string} [signed_qr_code]
 * @property {string} [signed_invoice]
 * @property {string} [error_message]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [credit_note]
 * @property {EInvoice} [invoice]
 */

/**
 * @typedef LockData
 * @property {boolean} [mto]
 * @property {boolean} [locked]
 * @property {string} [lock_message]
 */

/**
 * @typedef Formatted
 * @property {string} [f_min]
 * @property {string} [f_max]
 */

/**
 * @typedef BuyerDetails
 * @property {string} name
 * @property {string} state
 * @property {string} address
 * @property {string} gstin
 * @property {string} [ajio_site_id]
 * @property {string} city
 * @property {number} pincode
 */

/**
 * @typedef ShipmentMeta
 * @property {number} [shipment_weight]
 * @property {string} [return_affiliate_order_id]
 * @property {string} [po_number]
 * @property {number} weight
 * @property {string} [dp_sort_key]
 * @property {string} [return_affiliate_shipment_id]
 * @property {DebugInfo} [debug_info]
 * @property {Object} [dp_options]
 * @property {string} [return_awb_number]
 * @property {string} [dp_name]
 * @property {boolean} [assign_dp_from_sb]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [due_date]
 * @property {string} [dp_id]
 * @property {string} [awb_number]
 * @property {string} [box_type]
 * @property {Object} [b2c_buyer_details]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {string} [marketplace_store_id]
 * @property {Object} [external]
 * @property {LockData} [lock_data]
 * @property {string} [forward_affiliate_order_id]
 * @property {boolean} same_store_available
 * @property {Formatted} [formatted]
 * @property {string} [packaging_name]
 * @property {string} [order_type]
 * @property {Object} [bag_weight]
 * @property {Object} [ewaybill_info]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {string} [fulfilment_priority_text]
 * @property {number} [shipment_volumetric_weight]
 * @property {number} [return_store_node]
 * @property {string} [store_invoice_updated_date]
 * @property {Object} [return_details]
 * @property {boolean} auto_trigger_dp_assignment_acf
 */

/**
 * @typedef PDFLinks
 * @property {string} [invoice_pos]
 * @property {string} [label]
 * @property {string} [label_a4]
 * @property {string} label_type
 * @property {string} invoice_type
 * @property {string} [label_a6]
 * @property {string} [po_invoice]
 * @property {string} [invoice_a4]
 * @property {string} [b2b]
 * @property {string} [label_pos]
 * @property {string} [invoice]
 * @property {string} [credit_note_url]
 * @property {string} [invoice_a6]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} affiliate_order_id
 * @property {string} [company_affiliate_tag]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_store_id
 * @property {ShipmentMeta} shipment_meta
 * @property {PDFLinks} [pdf_links]
 * @property {string} [ad_id]
 * @property {string} [affiliate_id]
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_shipment_id
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} enable_tracking
 * @property {boolean} is_returnable
 * @property {boolean} is_active
 * @property {boolean} can_be_cancelled
 */

/**
 * @typedef BagGSTDetails
 * @property {number} tax_collected_at_source
 * @property {number} gst_fee
 * @property {number} brand_calculated_amount
 * @property {string} cgst_gst_fee
 * @property {number} gst_tax_percentage
 * @property {string} hsn_code
 * @property {number} igst_tax_percentage
 * @property {number} cgst_tax_percentage
 * @property {string} gst_tag
 * @property {string} sgst_gst_fee
 * @property {string} [gstin_code]
 * @property {string} igst_gst_fee
 * @property {boolean} [is_default_hsn_code]
 * @property {number} sgst_tax_percentage
 * @property {string} hsn_code_id
 * @property {number} value_of_good
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {BagStatusHistory} [bag_status_history]
 * @property {number} [quantity]
 * @property {Object[]} [applied_promos]
 * @property {number} b_id
 * @property {string[]} [tags]
 * @property {Brand} brand
 * @property {Item} item
 * @property {string} [b_type]
 * @property {Object} [restore_promos]
 * @property {Article} article
 * @property {string} journey_type
 * @property {Prices} prices
 * @property {Dates} [dates]
 * @property {number} [line_number]
 * @property {ArticleDetails} [article_details]
 * @property {string} [display_name]
 * @property {boolean} [restore_coupon]
 * @property {Store} [ordering_store]
 * @property {Object} [parent_promo_bags]
 * @property {string} [seller_identifier]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {number[]} [original_bag_list]
 * @property {BagStatusHistory} current_operational_status
 * @property {string} [entity_type]
 * @property {BagMeta} [meta]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {AffiliateDetails} [affiliate_details]
 * @property {BagStatusHistory[]} bag_status
 * @property {Object} [qc_required]
 * @property {Object[]} [reasons]
 * @property {BagReturnableCancelableStatus} status
 * @property {BagStatusHistory} current_status
 * @property {string} [order_integration_id]
 * @property {string} [shipment_id]
 * @property {number} [no_of_bags_order]
 * @property {string} [operational_status]
 * @property {string} [identifier]
 * @property {BagGSTDetails} gst_details
 * @property {number} [bag_update_time]
 */

/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} error
 */

/**
 * @typedef Page1
 * @property {number} item_total
 * @property {boolean} has_next
 * @property {number} current
 * @property {number} size
 * @property {string} page_type
 */

/**
 * @typedef GetBagsPlatformResponse
 * @property {BagDetailsPlatformResponse[]} items
 * @property {Page1} page
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
 * @property {string} [affiliate_bag_id]
 * @property {number} [bag_id]
 * @property {string} [item_id]
 * @property {number[]} [reason_ids]
 * @property {string} [fynd_order_id]
 * @property {number} store_id
 * @property {string} [affiliate_id]
 * @property {string} [set_id]
 * @property {string} [mongo_article_id]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef Entities
 * @property {string} [id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 * @property {string} reason_text
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {Entities[]} entities
 * @property {string} action_type
 * @property {string} action
 * @property {string} entity_type
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef Bags
 * @property {string} [affiliate_order_id]
 * @property {number} [bag_id]
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_bag_id]
 */

/**
 * @typedef CheckResponse
 * @property {OriginalFilter} [original_filter]
 * @property {boolean} [is_shipment_locked]
 * @property {string} [affiliate_shipment_id]
 * @property {boolean} [is_bag_locked]
 * @property {string} [affiliate_id]
 * @property {boolean} [lock_status]
 * @property {string} [shipment_id]
 * @property {Bags[]} [bags]
 * @property {string} [status]
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
 * @property {string} [platform_name]
 * @property {string} [description]
 * @property {string} [logo_url]
 * @property {string} [title]
 * @property {string} [platform_id]
 * @property {number} [company_id]
 * @property {string} [to_datetime]
 * @property {string} [from_datetime]
 * @property {string} [created_at]
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
 * @property {boolean} status
 * @property {string} call_id
 */

/**
 * @typedef Products
 * @property {number} [quantity]
 * @property {number} [line_number]
 * @property {string} [identifier]
 */

/**
 * @typedef EntityReasonData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */

/**
 * @typedef EntitiesReasons
 * @property {EntityReasonData} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef ProductsReasonsData
 * @property {string} [reason_text]
 * @property {number} [reason_id]
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {number} [quantity]
 * @property {number} [line_number]
 * @property {string} [identifier]
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters]
 */

/**
 * @typedef ReasonsData
 * @property {EntitiesReasons[]} [entities]
 * @property {ProductsReasons[]} [products]
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {number} [line_number]
 * @property {string} [identifier]
 */

/**
 * @typedef ProductsDataUpdates
 * @property {Object} [data]
 * @property {ProductsDataUpdatesFilters[]} [filters]
 */

/**
 * @typedef DataUpdates
 * @property {EntitiesDataUpdates[]} [entities]
 * @property {ProductsDataUpdates[]} [products]
 */

/**
 * @typedef ShipmentsRequest
 * @property {Products[]} [products]
 * @property {ReasonsData} [reasons]
 * @property {string} identifier
 * @property {DataUpdates} [data_updates]
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
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [task]
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [lock_after_transition]
 */

/**
 * @typedef ShipmentsResponse
 * @property {string} [exception]
 * @property {Object} [meta]
 * @property {string} [stack_trace]
 * @property {string} [identifier]
 * @property {string} [code]
 * @property {string} [message]
 * @property {number} [status]
 * @property {Object} [final_state]
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
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */

/**
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */

/**
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} value
 * @property {string} name
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} id
 * @property {string} [description]
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} secret
 * @property {string} token
 * @property {string} owner
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} name
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateInventoryConfig} [inventory]
 * @property {AffiliateAppConfig} [app]
 */

/**
 * @typedef Affiliate
 * @property {string} id
 * @property {string} token
 * @property {AffiliateConfig} [config]
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {string} marketplace_store_id
 * @property {number} store_id
 */

/**
 * @typedef OrderConfig
 * @property {Affiliate} affiliate
 * @property {boolean} [create_user]
 * @property {string} [store_lookup]
 * @property {string} [bag_end_state]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [article_lookup]
 */

/**
 * @typedef OrderUser
 * @property {string} [address2]
 * @property {string} email
 * @property {string} state
 * @property {string} first_name
 * @property {string} city
 * @property {string} last_name
 * @property {string} country
 * @property {string} pincode
 * @property {number} phone
 * @property {number} mobile
 * @property {string} [address1]
 */

/**
 * @typedef OrderPriority
 * @property {number} [fulfilment_priority]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [affiliate_priority_code]
 */

/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
 */

/**
 * @typedef ArticleDetails1
 * @property {string} _id
 * @property {Object} weight
 * @property {number} brand_id
 * @property {Object} attributes
 * @property {number} quantity
 * @property {Object} category
 * @property {Object} dimension
 */

/**
 * @typedef ShipmentDetails
 * @property {number} fulfillment_id
 * @property {Object} [meta]
 * @property {string} [box_type]
 * @property {ArticleDetails1[]} articles
 * @property {string} affiliate_shipment_id
 * @property {number} shipments
 * @property {number} [dp_id]
 */

/**
 * @typedef LocationDetails
 * @property {number} fulfillment_id
 * @property {string} fulfillment_type
 * @property {ArticleDetails1[]} articles
 */

/**
 * @typedef ShipmentConfig
 * @property {string} source
 * @property {string} action
 * @property {string} identifier
 * @property {string} journey
 * @property {ShipmentDetails[]} shipment
 * @property {string} payment_mode
 * @property {LocationDetails} [location_details]
 * @property {string} to_pincode
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */

/**
 * @typedef AffiliateBag
 * @property {number} price_marked
 * @property {number} transfer_price
 * @property {number} discount
 * @property {number} quantity
 * @property {number} price_effective
 * @property {string} modified_on
 * @property {string} hsn_code_id
 * @property {string} _id
 * @property {string} seller_identifier
 * @property {number} amount_paid
 * @property {string} affiliate_store_id
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} delivery_charge
 * @property {number} unit_price
 * @property {string} item_size
 * @property {Object} identifier
 * @property {number} item_id
 * @property {string} fynd_store_id
 * @property {number} company_id
 * @property {number} avl_qty
 * @property {Object} affiliate_meta
 * @property {string} sku
 * @property {number} store_id
 */

/**
 * @typedef OrderInfo
 * @property {Object} [payment]
 * @property {number} discount
 * @property {number} cod_charges
 * @property {Object} items
 * @property {OrderUser} billing_address
 * @property {OrderPriority} [order_priority]
 * @property {number} delivery_charges
 * @property {number} order_value
 * @property {UserData} user
 * @property {ShipmentData} [shipment]
 * @property {string} payment_mode
 * @property {OrderUser} shipping_address
 * @property {string} [affiliate_order_id]
 * @property {AffiliateBag[]} bags
 * @property {string} [coupon]
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
 * @property {string} slug
 * @property {string} description
 * @property {string} display_text
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef HistoryDict
 * @property {string} [l1_detail]
 * @property {string} type
 * @property {string} [l2_detail]
 * @property {number} [bag_id]
 * @property {string} [ticket_id]
 * @property {string} [l3_detail]
 * @property {string} user
 * @property {string} message
 * @property {string} [ticket_url]
 * @property {string} createdat
 */

/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} [activity_history]
 */

/**
 * @typedef ErrorDetail
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef SmsDataPayload
 * @property {number} amount_paid
 * @property {string} order_id
 * @property {number} phone_number
 * @property {string} brand_name
 * @property {string} customer_name
 * @property {string} message
 * @property {string} payment_mode
 * @property {number} shipment_id
 * @property {string} country_code
 */

/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {SmsDataPayload} [data]
 * @property {number} bag_id
 */

/**
 * @typedef Meta
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */

/**
 * @typedef ShipmentDetail
 * @property {number} id
 * @property {number[]} [bag_list]
 * @property {Meta} meta
 * @property {string} [remarks]
 * @property {string} [shipment_id]
 * @property {string} [status]
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
 * @property {string} order_type
 * @property {string} qc_required
 * @property {number} dp_id
 * @property {string[]} [shipment_ids]
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */

/**
 * @typedef PaymentMethod
 * @property {string} mode
 * @property {Object} [meta]
 * @property {string} refund_by
 * @property {string} collect_by
 * @property {Object} [transaction_data]
 * @property {number} amount
 * @property {string} name
 */

/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */

/**
 * @typedef BillingInfo
 * @property {string} state
 * @property {string} [customer_code]
 * @property {string} city
 * @property {string} [last_name]
 * @property {string} [title]
 * @property {string} [house_no]
 * @property {string} [gender]
 * @property {string} primary_email
 * @property {string} [alternate_mobile_number]
 * @property {string} [floor_no]
 * @property {string} country
 * @property {string} pincode
 * @property {string} address1
 * @property {string} [external_customer_code]
 * @property {string} primary_mobile_number
 * @property {string} [middle_name]
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {string} [alternate_email]
 * @property {string} first_name
 * @property {string} [state_code]
 */

/**
 * @typedef Tax
 * @property {Object[]} [breakup]
 * @property {number} rate
 * @property {Object} amount
 * @property {string} name
 */

/**
 * @typedef Charge
 * @property {Tax} [tax]
 * @property {string} type
 * @property {string} [code]
 * @property {Object} amount
 * @property {string} name
 */

/**
 * @typedef LineItem
 * @property {string} seller_identifier
 * @property {Object} [meta]
 * @property {string} [custom_messasge]
 * @property {number} [quantity]
 * @property {Charge[]} [charges]
 * @property {string} [external_line_id]
 */

/**
 * @typedef ProcessingDates
 * @property {string} [confirm_by_date]
 * @property {string} [dispatch_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [dispatch_after_date]
 * @property {string} [pack_by_date]
 */

/**
 * @typedef Shipment
 * @property {string} [external_shipment_id]
 * @property {LineItem[]} line_items
 * @property {number} location_id
 * @property {ProcessingDates} [processing_dates]
 * @property {Object} [meta]
 * @property {number} [priority]
 */

/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 */

/**
 * @typedef ShippingInfo
 * @property {string} [shipping_type]
 * @property {string} state
 * @property {string} [customer_code]
 * @property {string} city
 * @property {string} [last_name]
 * @property {string} [title]
 * @property {string} [house_no]
 * @property {string} [address_type]
 * @property {string} [gender]
 * @property {string} primary_email
 * @property {string} [alternate_mobile_number]
 * @property {string} [floor_no]
 * @property {string} country
 * @property {string} pincode
 * @property {string} [landmark]
 * @property {string} address1
 * @property {string} [external_customer_code]
 * @property {Object} [geo_location]
 * @property {string} primary_mobile_number
 * @property {Object[]} [slot]
 * @property {string} [middle_name]
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {string} [alternate_email]
 * @property {string} first_name
 * @property {string} [state_code]
 */

/**
 * @typedef CreateOrderAPI
 * @property {Object} [meta]
 * @property {PaymentInfo} payment_info
 * @property {string} [external_order_id]
 * @property {BillingInfo} billing_info
 * @property {Charge[]} charges
 * @property {string} [external_creation_date]
 * @property {Shipment[]} shipments
 * @property {TaxInfo} [tax_info]
 * @property {ShippingInfo} shipping_info
 * @property {Object} [currency_info]
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [exception]
 * @property {string} [meta]
 * @property {string} [stack_trace]
 * @property {string} [code]
 * @property {Object} [info]
 * @property {string} message
 * @property {string} [request_id]
 * @property {number} status
 */

/**
 * @typedef PaymentMethods
 * @property {string} [refund_by]
 * @property {string} [mode]
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
 * @property {Object} [logo_url]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {string} [shipment_assignment]
 * @property {boolean} [location_reassignment]
 * @property {DpConfiguration} [dp_configuration]
 * @property {string[]} [lock_states]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [is_inserted]
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_upserted]
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
 * @property {string} end_date
 * @property {string} start_date
 * @property {number} mobile
 * @property {FyndOrderIdList[]} [order_details]
 */

/**
 * @typedef SearchKeywordResult
 * @property {string} sort_on
 * @property {Object} query
 */

/**
 * @typedef CreateSearchKeyword
 * @property {SearchKeywordResult} result
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetSearchWordsData
 * @property {Object} [result]
 * @property {string} [uid]
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
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
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef AutocompletePageAction
 * @property {string} [url]
 * @property {Object} [params]
 * @property {string} [type]
 * @property {Object} [query]
 */

/**
 * @typedef AutocompleteAction
 * @property {string} [type]
 * @property {AutocompletePageAction} [page]
 */

/**
 * @typedef AutocompleteResult
 * @property {Media} [logo]
 * @property {AutocompleteAction} [action]
 * @property {Object} [_custom_json]
 * @property {string} [display]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 * @property {AutocompleteResult[]} [results]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {string} [uid]
 * @property {string[]} [words]
 * @property {Object[]} [results]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {Page} [page]
 * @property {GetAutocompleteWordsData[]} [items]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {Object[]} [results]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ProductBundleItem
 * @property {number} min_quantity
 * @property {boolean} [allow_remove]
 * @property {number} product_uid
 * @property {number} max_quantity
 * @property {boolean} [auto_select]
 * @property {boolean} [auto_add_to_cart]
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {string} slug
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {string} name
 * @property {string[]} [page_visibility]
 * @property {ProductBundleItem[]} products
 * @property {number} [company_id]
 * @property {string} choice
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {Object} [meta]
 * @property {string} [modified_on]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {Page} [page]
 * @property {GetProductBundleCreateResponse[]} [items]
 */

/**
 * @typedef ProductBundleRequest
 * @property {string} slug
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {string} name
 * @property {string[]} [page_visibility]
 * @property {ProductBundleItem[]} products
 * @property {number} [company_id]
 * @property {string} choice
 * @property {Object} [created_by]
 * @property {Object} [meta]
 * @property {string} [modified_on]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {string} slug
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string} name
 * @property {string[]} [page_visibility]
 * @property {ProductBundleItem[]} products
 * @property {number} [company_id]
 * @property {string} choice
 * @property {Object} [meta]
 * @property {string} [modified_on]
 */

/**
 * @typedef LimitedProductData
 * @property {string} [slug]
 * @property {Object} [attributes]
 * @property {Object} [identifier]
 * @property {number} [uid]
 * @property {string} [item_code]
 * @property {string} [short_description]
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {string} [country_of_origin]
 * @property {string[]} [images]
 * @property {Object} [price]
 * @property {string[]} [sizes]
 */

/**
 * @typedef Price
 * @property {string} [currency]
 * @property {number} [max_effective]
 * @property {number} [min_marked]
 * @property {number} [max_marked]
 * @property {number} [min_effective]
 */

/**
 * @typedef Size
 * @property {number} [quantity]
 * @property {string} [value]
 * @property {string} [display]
 * @property {boolean} [is_available]
 */

/**
 * @typedef GetProducts
 * @property {boolean} [allow_remove]
 * @property {number} [min_quantity]
 * @property {number} [product_uid]
 * @property {number} [max_quantity]
 * @property {LimitedProductData} [product_details]
 * @property {boolean} [auto_select]
 * @property {Price} [price]
 * @property {boolean} [auto_add_to_cart]
 * @property {Size[]} [sizes]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {string} [slug]
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {GetProducts[]} [products]
 * @property {number} [company_id]
 * @property {string} [choice]
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {string} [subtitle]
 * @property {Guide} [guide]
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {string} name
 * @property {number} [brand_id]
 * @property {string} [description]
 * @property {number} [company_id]
 * @property {boolean} [active]
 * @property {string} [modified_on]
 * @property {string} [image]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} [tag]
 * @property {string} title
 */

/**
 * @typedef SizeGuideResponse
 * @property {string} [subtitle]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {Object} [guide]
 * @property {string} [name]
 * @property {number} [brand_id]
 * @property {string} [title]
 * @property {number} [company_id]
 * @property {boolean} [active]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} [tag]
 * @property {string} [modified_on]
 */

/**
 * @typedef MetaFields
 * @property {Object} key
 * @property {Object} value
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 * @property {number} [minimum]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {boolean} [is_gift]
 * @property {Object} [alt_text]
 * @property {MetaFields[]} [_custom_meta]
 * @property {ApplicationItemSEO} [seo]
 * @property {boolean} [is_cod]
 * @property {ApplicationItemMOQ} [moq]
 * @property {Object} [_custom_json]
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
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 * @property {number} [minimum]
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
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} data
 * @property {Object[]} [condition]
 * @property {Object[]} [values]
 */

/**
 * @typedef PageResponseType
 * @property {number} total_count
 * @property {boolean} has_next
 * @property {number} current
 * @property {number} next
 */

/**
 * @typedef GetConfigResponse
 * @property {Object[]} data
 * @property {PageResponseType} page
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {string} [logo]
 * @property {string} [slug]
 * @property {string} [key]
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} name
 * @property {string} display_type
 * @property {string} [unit]
 */

/**
 * @typedef AppConfigurationDetail
 * @property {string} slug
 * @property {string} [logo]
 * @property {number} priority
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {boolean} is_active
 * @property {string} [name]
 * @property {string[]} [template_slugs]
 * @property {boolean} is_default
 * @property {string} app_id
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {string} [logo]
 * @property {string} key
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {string} default_key
 * @property {string} app_id
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
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [variant]
 * @property {Object} [similar]
 * @property {Object} [detail]
 * @property {Object} [compare]
 */

/**
 * @typedef MetaDataListingFilterMetaResponse
 * @property {string} [key]
 * @property {Object[]} [units]
 * @property {string[]} [filter_types]
 * @property {string} [display]
 */

/**
 * @typedef MetaDataListingFilterResponse
 * @property {MetaDataListingFilterMetaResponse[]} [data]
 */

/**
 * @typedef MetaDataListingSortMetaResponse
 * @property {string} [key]
 * @property {string} [display]
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
 * @typedef GetCatalogConfigurationMetaData
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {MetaDataListingResponse} [listing]
 */

/**
 * @typedef ProductSize
 * @property {number} max
 * @property {number} min
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} [logo]
 * @property {string} key
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} name
 * @property {string} display_type
 * @property {ProductSize} size
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {string} [logo]
 * @property {string} key
 * @property {number} priority
 * @property {string} [subtitle]
 * @property {boolean} is_active
 * @property {ProductSize} [size]
 * @property {string} [title]
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
 * @property {number} [end]
 * @property {number} [start]
 * @property {string} [display]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {Object} [map]
 * @property {string} [condition]
 * @property {Object[]} [map_values]
 * @property {string} [value]
 * @property {string} [sort]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} [logo]
 * @property {string} key
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} [name]
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} type
 * @property {string} [display_name]
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 * @property {boolean} allow_single
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} [logo]
 * @property {string} key
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} [name]
 */

/**
 * @typedef ConfigurationListingSort
 * @property {ConfigurationListingSortConfig[]} [config]
 * @property {string} default_key
 */

/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingFilter} filter
 * @property {ConfigurationListingSort} sort
 */

/**
 * @typedef AppCatalogConfiguration
 * @property {string} [config_id]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {ConfigurationProduct} [product]
 * @property {ConfigurationListing} [listing]
 * @property {string} [type]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} config_type
 * @property {string} app_id
 * @property {string} [modified_on]
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef AppConfiguration
 * @property {string} [config_id]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {ConfigurationProduct} [product]
 * @property {ConfigurationListing} [listing]
 * @property {string} [type]
 * @property {Object} [created_by]
 * @property {string} config_type
 * @property {string} app_id
 * @property {string} [modified_on]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */

/**
 * @typedef EntityConfiguration
 * @property {string} [config_id]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {string} [id]
 * @property {string} config_type
 * @property {string} app_id
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ProductSortOn
 * @property {string} [name]
 * @property {string} [value]
 * @property {boolean} [is_selected]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} [logo]
 * @property {string[]} [operators]
 * @property {string} [kind]
 * @property {string} name
 * @property {string} display
 */

/**
 * @typedef ProductFiltersValue
 * @property {string} [query_format]
 * @property {number} [count]
 * @property {number} [selected_max]
 * @property {number} [selected_min]
 * @property {number} [min]
 * @property {Object} value
 * @property {string} [currency_symbol]
 * @property {string} display
 * @property {string} [display_format]
 * @property {number} [max]
 * @property {boolean} is_selected
 * @property {string} [currency_code]
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
 * @typedef CollectionListingFilterType
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterType[]} [type]
 * @property {CollectionListingFilterTag[]} [tags]
 */

/**
 * @typedef BannerImage
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [portrait]
 * @property {BannerImage} [landscape]
 */

/**
 * @typedef Media1
 * @property {string} url
 * @property {string} [type]
 * @property {Object} [meta]
 */

/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {Object[]} value
 * @property {string} op
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {Object} [_schedule]
 * @property {string} [uid]
 * @property {boolean} [is_active]
 * @property {boolean} [allow_facets]
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {ImageUrls} [banners]
 * @property {string[]} [visible_facets_keys]
 * @property {Media1} [logo]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {string} [type]
 * @property {string} [description]
 * @property {string} [app_id]
 * @property {Object} [meta]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [badge]
 * @property {Action} [action]
 * @property {Object} [cron]
 * @property {string[]} [tag]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {Page} [page]
 * @property {GetCollectionDetailNest[]} [items]
 */

/**
 * @typedef CollectionSchedule
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [end]
 * @property {string} [cron]
 * @property {string} [start]
 * @property {number} [duration]
 */

/**
 * @typedef UserInfo
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef CollectionImage
 * @property {string} url
 * @property {string} aspect_ratio
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} portrait
 * @property {CollectionImage} landscape
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
 * @typedef CreateCollection
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [is_active]
 * @property {boolean} [published]
 * @property {UserInfo} [created_by]
 * @property {boolean} [allow_facets]
 * @property {Object} [_custom_json]
 * @property {string} slug
 * @property {number} [priority]
 * @property {CollectionBanner} banners
 * @property {string[]} [tags]
 * @property {string[]} [visible_facets_keys]
 * @property {CollectionImage} logo
 * @property {UserInfo} [modified_by]
 * @property {string} name
 * @property {boolean} [allow_sort]
 * @property {string} type
 * @property {SeoDetail} [seo]
 * @property {string} [description]
 * @property {string} app_id
 * @property {CollectionQuery[]} [query]
 * @property {Object} [meta]
 * @property {CollectionBadge} [badge]
 * @property {string} [sort_on]
 * @property {boolean} [is_visible]
 * @property {Object} [_locale_language]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {Object} [_schedule]
 * @property {boolean} [is_active]
 * @property {boolean} [allow_facets]
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {ImageUrls} [banners]
 * @property {string[]} [visible_facets_keys]
 * @property {BannerImage} [logo]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {string} [type]
 * @property {string} [description]
 * @property {string} [app_id]
 * @property {Object} [meta]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [badge]
 * @property {string} [sort_on]
 * @property {Object} [cron]
 * @property {string[]} [tag]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {Media1} [logo]
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [_schedule]
 * @property {boolean} [is_active]
 * @property {Object} [badge]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {string} [type]
 * @property {Object} [cron]
 * @property {string} [description]
 * @property {ImageUrls} [banners]
 * @property {Object} [meta]
 * @property {boolean} [allow_facets]
 * @property {string} [app_id]
 * @property {CollectionQuery[]} [query]
 * @property {string[]} [tag]
 */

/**
 * @typedef UpdateCollection
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [is_active]
 * @property {boolean} [published]
 * @property {boolean} [allow_facets]
 * @property {Object} [_custom_json]
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {CollectionBanner} [banners]
 * @property {string[]} [tags]
 * @property {string[]} [visible_facets_keys]
 * @property {CollectionImage} [logo]
 * @property {UserInfo} [modified_by]
 * @property {string} [name]
 * @property {boolean} [allow_sort]
 * @property {string} [type]
 * @property {SeoDetail} [seo]
 * @property {string} [description]
 * @property {Object} [meta]
 * @property {CollectionQuery[]} [query]
 * @property {CollectionBadge} [badge]
 * @property {string} [sort_on]
 * @property {boolean} [is_visible]
 * @property {Object} [_locale_language]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {ProductDetailAttribute[]} [details]
 * @property {string} [title]
 */

/**
 * @typedef ProductBrand
 * @property {Media1} [logo]
 * @property {string} [name]
 * @property {Action} [action]
 * @property {number} [uid]
 */

/**
 * @typedef Price1
 * @property {string} [currency_symbol]
 * @property {number} [max]
 * @property {string} [currency_code]
 * @property {number} [min]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 */

/**
 * @typedef ProductListingDetail
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string[]} [highlights]
 * @property {number} [uid]
 * @property {string} [item_type]
 * @property {string} [discount]
 * @property {string} [image_nature]
 * @property {ProductBrand} [brand]
 * @property {string} slug
 * @property {Object} [attributes]
 * @property {string} [product_online_date]
 * @property {string[]} [tryouts]
 * @property {Object} [promo_meta]
 * @property {string} [short_description]
 * @property {Object} [teaser_tag]
 * @property {number} [rating]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [color]
 * @property {string} [description]
 * @property {string[]} [similars]
 * @property {ProductListingPrice} [price]
 * @property {boolean} [sellable]
 * @property {Media1[]} [medias]
 * @property {boolean} [has_variant]
 * @property {number} [rating_count]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 * @property {Page} [page]
 * @property {ProductListingDetail[]} [items]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {number} [item_id]
 * @property {string} [action]
 */

/**
 * @typedef CollectionItemRequest
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 * @property {ItemQueryForUserCollection[]} [item]
 */

/**
 * @typedef UpdatedResponse
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [total_sizes]
 * @property {number} [available_sizes]
 * @property {string} [name]
 * @property {number} [available_articles]
 * @property {number} [total_articles]
 * @property {number} [article_freshness]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [count]
 * @property {number} [out_of_stock_count]
 * @property {number} [sellable_count]
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
 * @property {CrossSellingData} [data]
 * @property {CatalogInsightBrand} [brand_distribution]
 */

/**
 * @typedef OptInPostRequest
 * @property {string} opt_level
 * @property {number[]} [brand_ids]
 * @property {string} [platform]
 * @property {number} [company_id]
 * @property {boolean} [enabled]
 * @property {number[]} [store_ids]
 */

/**
 * @typedef CompanyOptIn
 * @property {string} opt_level
 * @property {number} created_on
 * @property {number[]} brand_ids
 * @property {Object} [modified_by]
 * @property {string} platform
 * @property {number} company_id
 * @property {Object} [created_by]
 * @property {boolean} enabled
 * @property {number[]} store_ids
 * @property {number} modified_on
 */

/**
 * @typedef GetOptInPlatform
 * @property {Page} page
 * @property {CompanyOptIn[]} items
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [name]
 * @property {string} [company_type]
 * @property {number} [uid]
 * @property {string} [business_type]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {string} [brand_name]
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {number} [total_article]
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
 * @property {string} [store_type]
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {Object} [address]
 * @property {string} [name]
 * @property {Object} [timing]
 * @property {number} [company_id]
 * @property {string} [store_code]
 * @property {Object[]} [documents]
 * @property {Object} [manager]
 * @property {Object[]} [additional_contacts]
 * @property {string} [display_name]
 * @property {string} [modified_on]
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
 * @typedef AttributeSchemaRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef AttributeMaster
 * @property {string} [format]
 * @property {string} type
 * @property {boolean} [multi]
 * @property {string[]} [allowed_values]
 * @property {boolean} [mandatory]
 * @property {AttributeSchemaRange} [range]
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
 * @typedef GenderDetail
 * @property {string} [slug]
 * @property {string} [logo]
 * @property {AttributeMasterFilter} [filters]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMaster} [schema]
 * @property {string} [name]
 * @property {AttributeMasterDetails} [details]
 * @property {boolean} [is_nested]
 * @property {string} [description]
 * @property {string} [id]
 * @property {AttributeMasterMeta} [meta]
 * @property {string[]} [departments]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Page} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef PTErrorResponse
 * @property {Object} [errors]
 * @property {number} [status]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [code]
 */

/**
 * @typedef UserSerializer
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [_id]
 * @property {string} [username]
 */

/**
 * @typedef GetDepartment
 * @property {string} [slug]
 * @property {string} [logo]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [name]
 * @property {string} [search]
 * @property {string} [item_type]
 * @property {number} [priority_order]
 * @property {string} [modified_on]
 * @property {UserSerializer} [created_by]
 * @property {string[]} [synonyms]
 * @property {number} [page_no]
 * @property {number} [page_size]
 */

/**
 * @typedef DepartmentsResponse
 * @property {Page} [page]
 * @property {GetDepartment[]} [items]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {Object} [errors]
 * @property {number} [status]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [code]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string} logo
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {string} [_cls]
 * @property {Object} [platforms]
 * @property {string} name
 * @property {number} priority_order
 * @property {string[]} [tags]
 * @property {string[]} [synonyms]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef DepartmentCreateResponse
 * @property {number} uid
 * @property {string} message
 */

/**
 * @typedef DepartmentCreateErrorResponse
 * @property {string} [error]
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
 * @property {Object} [slug]
 * @property {string} logo
 * @property {number} [uid]
 * @property {string} created_on
 * @property {UserDetail} [modified_by]
 * @property {boolean} [is_active]
 * @property {Object} name
 * @property {Object} [_cls]
 * @property {UserDetail} [verified_by]
 * @property {number} priority_order
 * @property {string} [verified_on]
 * @property {UserDetail} [created_by]
 * @property {Object[]} [synonyms]
 * @property {Object} [_id]
 * @property {Object} [_custom_json]
 * @property {string} modified_on
 */

/**
 * @typedef ProductTemplate
 * @property {string} slug
 * @property {string[]} [attributes]
 * @property {string} [logo]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_active]
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {boolean} [is_expirable]
 * @property {string[]} [categories]
 * @property {string} [description]
 * @property {boolean} is_physical
 * @property {string} [modified_on]
 * @property {Object[]} [attributes_schema]
 * @property {Object} [created_by]
 * @property {string} [tag]
 * @property {string[]} [departments]
 */

/**
 * @typedef TemplatesResponse
 * @property {Page} [page]
 * @property {ProductTemplate} [items]
 */

/**
 * @typedef Properties
 * @property {Object} [highlights]
 * @property {Object} [is_active]
 * @property {Object} [item_type]
 * @property {Object} [return_config]
 * @property {Object} [trader]
 * @property {Object} [product_publish]
 * @property {Object} [slug]
 * @property {Object} [media]
 * @property {Object} [short_description]
 * @property {Object} [product_group_tag]
 * @property {Object} [teaser_tag]
 * @property {Object} [tags]
 * @property {Object} [hsn_code]
 * @property {Object} [category_slug]
 * @property {Object} [brand_uid]
 * @property {Object} [custom_order]
 * @property {Object} [item_code]
 * @property {Object} [name]
 * @property {Object} [country_of_origin]
 * @property {Object} [description]
 * @property {Object} [sizes]
 * @property {Object} [variants]
 * @property {Object} [command]
 * @property {Object} [size_guide]
 * @property {Object} [currency]
 * @property {Object} [no_of_boxes]
 * @property {Object} [is_dependent]
 * @property {Object} [trader_type]
 * @property {Object} [multi_size]
 */

/**
 * @typedef GlobalValidation
 * @property {Object} [definitions]
 * @property {string} [type]
 * @property {string} [description]
 * @property {Properties} [properties]
 * @property {string[]} [required]
 * @property {string} [title]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {string} slug
 * @property {string[]} [attributes]
 * @property {string} [logo]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {boolean} [is_expirable]
 * @property {string[]} [categories]
 * @property {string} [description]
 * @property {boolean} is_physical
 * @property {Object[]} [attributes_schema]
 * @property {string} [id]
 * @property {string} [tag]
 * @property {string[]} [departments]
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
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductDownloadItemsData
 * @property {string[]} [brand]
 * @property {string} [type]
 * @property {string[]} [templates]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {string} [status]
 * @property {string} [url]
 * @property {number} [seller_id]
 * @property {string} [id]
 * @property {string} [task_id]
 * @property {VerifiedBy} [created_by]
 * @property {string} [trigger_on]
 * @property {Object} [template_tags]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [completed_on]
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
 * @property {number} l2
 * @property {number} l1
 */

/**
 * @typedef Media2
 * @property {string} logo
 * @property {string} portrait
 * @property {string} landscape
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
 * @typedef Category
 * @property {string} [slug]
 * @property {Hierarchy[]} [hierarchy]
 * @property {number} [priority]
 * @property {number} level
 * @property {string[]} [tryouts]
 * @property {number} [uid]
 * @property {Media2} [media]
 * @property {boolean} is_active
 * @property {string} [created_on]
 * @property {string} name
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string[]} [synonyms]
 * @property {CategoryMapping} [marketplaces]
 * @property {number[]} departments
 */

/**
 * @typedef CategoryResponse
 * @property {Page} [page]
 * @property {Category[]} [items]
 */

/**
 * @typedef CategoryRequestBody
 * @property {string} [slug]
 * @property {Hierarchy[]} [hierarchy]
 * @property {number} [priority]
 * @property {number} level
 * @property {string[]} [tryouts]
 * @property {Media2} [media]
 * @property {boolean} is_active
 * @property {string} name
 * @property {string[]} [synonyms]
 * @property {CategoryMapping} [marketplaces]
 * @property {number[]} departments
 */

/**
 * @typedef CategoryCreateResponse
 * @property {number} [uid]
 * @property {string} [message]
 */

/**
 * @typedef CategoryUpdateResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */

/**
 * @typedef ReturnConfigResponse
 * @property {boolean} returnable
 * @property {string} unit
 * @property {number} time
 */

/**
 * @typedef Image
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 */

/**
 * @typedef NetQuantityResponse
 * @property {number} [value]
 * @property {string} [unit]
 */

/**
 * @typedef Logo
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 */

/**
 * @typedef ProductPublished
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef Product
 * @property {string[]} [highlights]
 * @property {number} [uid]
 * @property {string} [item_type]
 * @property {boolean} [is_active]
 * @property {ReturnConfigResponse} [return_config]
 * @property {string} [template_tag]
 * @property {string} [primary_color]
 * @property {VerifiedBy} [verified_by]
 * @property {Image[]} [images]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {string[]} [l3_mapping]
 * @property {Object[]} [trader]
 * @property {string} [stage]
 * @property {Object} [variant_group]
 * @property {Object} [created_by]
 * @property {string} [verified_on]
 * @property {string} [image_nature]
 * @property {Brand} [brand]
 * @property {Object} [_custom_json]
 * @property {ProductPublished} [product_publish]
 * @property {string} [slug]
 * @property {Object} [attributes]
 * @property {Media1[]} [media]
 * @property {string} [short_description]
 * @property {string[]} [product_group_tag]
 * @property {boolean} [is_expirable]
 * @property {boolean} [is_set]
 * @property {Object} [teaser_tag]
 * @property {string[]} [tags]
 * @property {string} [hsn_code]
 * @property {string} [category_slug]
 * @property {number} [brand_uid]
 * @property {string} [modified_on]
 * @property {number[]} [all_company_ids]
 * @property {number} [category_uid]
 * @property {Object} [custom_order]
 * @property {string} [created_on]
 * @property {string} [item_code]
 * @property {Object} [variant_media]
 * @property {string} [name]
 * @property {string} [country_of_origin]
 * @property {Object[]} [all_sizes]
 * @property {Object} [modified_by]
 * @property {string} [color]
 * @property {string} [description]
 * @property {boolean} [is_physical]
 * @property {Object} [category]
 * @property {string} [pending]
 * @property {string} [id]
 * @property {Object} [moq]
 * @property {number[]} [departments]
 * @property {Object} [variants]
 * @property {Object[]} [sizes]
 * @property {string} [size_guide]
 * @property {string} [currency]
 * @property {number} [no_of_boxes]
 * @property {Object} [tax_identifier]
 * @property {boolean} [is_dependent]
 * @property {string[]} [all_identifiers]
 * @property {number} [company_id]
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [multi_size]
 */

/**
 * @typedef ProductListingResponse
 * @property {Page} [page]
 * @property {Product[]} [items]
 */

/**
 * @typedef NetQuantity
 * @property {number} [value]
 * @property {Object} [unit]
 */

/**
 * @typedef Trader
 * @property {Object} name
 * @property {string} [type]
 * @property {string[]} [address]
 */

/**
 * @typedef ProductPublish
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef TeaserTag
 * @property {string} [url]
 * @property {string} [tag]
 */

/**
 * @typedef CustomOrder
 * @property {string} [manufacturing_time_unit]
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code_id]
 * @property {string} [hsn_code]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {string} [requester]
 * @property {string[]} [highlights]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {string} item_type
 * @property {ReturnConfig} return_config
 * @property {string} template_tag
 * @property {NetQuantity} [net_quantity]
 * @property {Trader[]} trader
 * @property {Object} [variant_group]
 * @property {Object} [_custom_json]
 * @property {ProductPublish} [product_publish]
 * @property {string} slug
 * @property {Object} attributes
 * @property {Media1[]} [media]
 * @property {string} [short_description]
 * @property {string[]} [product_group_tag]
 * @property {Object} [change_request_id]
 * @property {boolean} [is_set]
 * @property {TeaserTag} [teaser_tag]
 * @property {string[]} [tags]
 * @property {string} category_slug
 * @property {string} [bulk_job_id]
 * @property {number} brand_uid
 * @property {CustomOrder} [custom_order]
 * @property {string} item_code
 * @property {Object} [variant_media]
 * @property {string} name
 * @property {string} country_of_origin
 * @property {string} [description]
 * @property {number[]} departments
 * @property {Object} [variants]
 * @property {Object[]} sizes
 * @property {string} [size_guide]
 * @property {string} [action]
 * @property {string} currency
 * @property {number} [no_of_boxes]
 * @property {TaxIdentifier} tax_identifier
 * @property {boolean} [is_dependent]
 * @property {number} company_id
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [multi_size]
 */

/**
 * @typedef ProductVariants
 * @property {number} [category_uid]
 * @property {number} [uid]
 * @property {Media1[]} [media]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {number} [brand_uid]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {ProductVariants[]} [variants]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {string} [raw_key]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMaster} schema
 * @property {string} [unit]
 * @property {Object} [created_by]
 * @property {string} slug
 * @property {AttributeMasterFilter} filters
 * @property {string[]} [tags]
 * @property {Object} [synonyms]
 * @property {string} [modified_on]
 * @property {string} [logo]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} [name]
 * @property {boolean} [variant]
 * @property {AttributeMasterDetails} details
 * @property {boolean} [is_nested]
 * @property {string} [description]
 * @property {string[]} departments
 * @property {string} [suggestion]
 */

/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */

/**
 * @typedef ProductCreateUpdate
 * @property {string} [requester]
 * @property {string[]} [highlights]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {string} item_type
 * @property {ReturnConfig} return_config
 * @property {string} template_tag
 * @property {NetQuantity} [net_quantity]
 * @property {Trader[]} trader
 * @property {Object} [variant_group]
 * @property {Object} [_custom_json]
 * @property {ProductPublish} [product_publish]
 * @property {string} slug
 * @property {Media1[]} [media]
 * @property {string} [short_description]
 * @property {string[]} [product_group_tag]
 * @property {Object} [change_request_id]
 * @property {boolean} [is_set]
 * @property {TeaserTag} [teaser_tag]
 * @property {string[]} [tags]
 * @property {string} category_slug
 * @property {string} [bulk_job_id]
 * @property {number} brand_uid
 * @property {CustomOrder} [custom_order]
 * @property {Object} item_code
 * @property {Object} [variant_media]
 * @property {Object} name
 * @property {string} country_of_origin
 * @property {string} [description]
 * @property {number[]} departments
 * @property {Object} [variants]
 * @property {string} [size_guide]
 * @property {string} [action]
 * @property {string} currency
 * @property {number} [no_of_boxes]
 * @property {TaxIdentifier} tax_identifier
 * @property {boolean} [is_dependent]
 * @property {number} company_id
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [multi_size]
 */

/**
 * @typedef SingleProductResponse
 * @property {Product} [data]
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
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {number} item_length
 * @property {string} item_dimensions_unit_of_measure
 * @property {number} item_width
 * @property {Object} size
 * @property {number} item_height
 */

/**
 * @typedef ListALLSizes
 * @property {AllSizes[]} [all_sizes]
 */

/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */

/**
 * @typedef UserDetail1
 * @property {string} [full_name]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductBulkRequest
 * @property {number} [succeed]
 * @property {string[]} [cancelled_records]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {UserDetail1} [modified_by]
 * @property {string} [template_tag]
 * @property {string[]} [failed_records]
 * @property {number} [failed]
 * @property {number} [cancelled]
 * @property {string} [stage]
 * @property {number} [company_id]
 * @property {UserDetail1} [created_by]
 * @property {ProductTemplate} [template]
 * @property {string} [file_path]
 * @property {string} [modified_on]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {Page} [page]
 * @property {ProductBulkRequest} [items]
 */

/**
 * @typedef UserInfo1
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef BulkJob
 * @property {number} [succeed]
 * @property {Object[]} [cancelled_records]
 * @property {number} [total]
 * @property {string} created_on
 * @property {boolean} [is_active]
 * @property {UserInfo1} [modified_by]
 * @property {string} [template_tag]
 * @property {Object[]} [failed_records]
 * @property {number} [failed]
 * @property {number} [cancelled]
 * @property {string} [custom_template_tag]
 * @property {string} [stage]
 * @property {number} company_id
 * @property {UserInfo1} [created_by]
 * @property {string} [file_path]
 * @property {string} [tracking_url]
 * @property {string} [modified_on]
 */

/**
 * @typedef BulkResponse
 * @property {string} created_on
 * @property {boolean} [is_active]
 * @property {UserInfo1} [modified_by]
 * @property {string} batch_id
 * @property {UserInfo1} [created_by]
 * @property {string} [modified_on]
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
 * @typedef UserCommon
 * @property {number} [company_id]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef Items
 * @property {number} [succeed]
 * @property {string[]} [cancelled_records]
 * @property {number} [total]
 * @property {string} [created_on]
 * @property {UserCommon} [modified_by]
 * @property {boolean} [is_active]
 * @property {string[]} [failed_records]
 * @property {number} [failed]
 * @property {number} [cancelled]
 * @property {string} [tracking_url]
 * @property {string} [stage]
 * @property {number} [company_id]
 * @property {UserCommon} [created_by]
 * @property {string} [id]
 * @property {string} [file_path]
 * @property {number} [retry]
 * @property {string} [modified_on]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Page} [page]
 * @property {Items[]} [items]
 */

/**
 * @typedef ProductBulkAssets
 * @property {Object} user
 * @property {string} url
 * @property {number} [company_id]
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
 * @typedef InventoryResponse
 * @property {number} [sellable_quantity]
 * @property {number} [price_transfer]
 * @property {Object} [store]
 * @property {string} [currency]
 * @property {string} [uid]
 * @property {number} [quantity]
 * @property {string} [seller_identifier]
 * @property {Object} [identifiers]
 * @property {number} [item_id]
 * @property {string} [inventory_updated_on]
 * @property {string} [size]
 * @property {number} [price_effective]
 * @property {number} [price]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {Page} [page]
 * @property {InventoryResponse[]} [items]
 */

/**
 * @typedef ItemQuery
 * @property {number} [brand_uid]
 * @property {number} [uid]
 * @property {string} [item_code]
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
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {SizeDistribution} size_distribution
 */

/**
 * @typedef InvSize
 * @property {number} [item_height]
 * @property {number} [item_weight]
 * @property {number} [price_transfer]
 * @property {string} currency
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} quantity
 * @property {GTIN[]} identifiers
 * @property {InventorySet} [set]
 * @property {number} [item_length]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {boolean} [is_set]
 * @property {string} [expiration_date]
 * @property {string} store_code
 * @property {number} [item_width]
 * @property {Object} size
 * @property {number} price_effective
 * @property {number} [price]
 */

/**
 * @typedef InventoryRequest
 * @property {number} company_id
 * @property {ItemQuery} item
 * @property {InvSize[]} sizes
 */

/**
 * @typedef ReturnConfig1
 * @property {boolean} [returnable]
 * @property {string} [unit]
 * @property {number} [time]
 */

/**
 * @typedef Trader1
 * @property {string} name
 * @property {string} type
 * @property {string[]} address
 */

/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef ManufacturerResponse
 * @property {string} name
 * @property {boolean} is_default
 * @property {string} address
 */

/**
 * @typedef WeightResponse
 * @property {number} shipping
 * @property {boolean} is_default
 * @property {string} unit
 */

/**
 * @typedef DimensionResponse
 * @property {number} height
 * @property {number} length
 * @property {string} unit
 * @property {boolean} is_default
 * @property {number} width
 */

/**
 * @typedef PriceMeta
 * @property {number} transfer
 * @property {string} [updated_at]
 * @property {string} currency
 * @property {number} effective
 * @property {number} marked
 * @property {Object} [tp_notes]
 */

/**
 * @typedef QuantityBase
 * @property {string} [updated_at]
 * @property {number} [count]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [order_committed]
 */

/**
 * @typedef InventorySellerResponse
 * @property {string} uid
 * @property {Object} [raw_meta]
 * @property {Object} [fynd_meta]
 * @property {boolean} [is_active]
 * @property {ReturnConfig1} [return_config]
 * @property {number} total_quantity
 * @property {string} [stage]
 * @property {Trader1[]} [trader]
 * @property {UserSerializer} [created_by]
 * @property {BrandMeta} brand
 * @property {Object} [_custom_json]
 * @property {Object} identifier
 * @property {StoreMeta} store
 * @property {CompanyMeta} company
 * @property {string} [added_on_store]
 * @property {ManufacturerResponse} manufacturer
 * @property {string} fynd_article_code
 * @property {boolean} [is_set]
 * @property {string[]} [tags]
 * @property {string} seller_identifier
 * @property {string} [trace_id]
 * @property {UserSerializer} [modified_by]
 * @property {string} country_of_origin
 * @property {WeightResponse} weight
 * @property {InventorySet} [set]
 * @property {boolean} [track_inventory]
 * @property {number} item_id
 * @property {string} size
 * @property {Object} [meta]
 * @property {DimensionResponse} dimension
 * @property {string} fynd_item_code
 * @property {Object} [tax_identifier]
 * @property {string} [expiration_date]
 * @property {boolean} fragile
 * @property {PriceMeta} price
 * @property {Quantities} [quantities]
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {Page} [page]
 * @property {InventorySellerResponse[]} [items]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {number} [succeed]
 * @property {string[]} [cancelled_records]
 * @property {number} [total]
 * @property {string} [created_on]
 * @property {boolean} [is_active]
 * @property {Object} [modified_by]
 * @property {string[]} [failed_records]
 * @property {number} [failed]
 * @property {number} [cancelled]
 * @property {string} [stage]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} [file_path]
 * @property {string} [modified_on]
 */

/**
 * @typedef BulkInventoryGet
 * @property {Page} [page]
 * @property {BulkInventoryGetItems[]} [items]
 */

/**
 * @typedef InventoryJobPayload
 * @property {string} [trace_id]
 * @property {string} [currency]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [price_marked]
 * @property {number} [quantity]
 * @property {number} [total_quantity]
 * @property {string[]} [tags]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} store_code
 * @property {string} [expiration_date]
 * @property {number} [price]
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 */

/**
 * @typedef InventoryBulkRequest
 * @property {Object} [user]
 * @property {number} company_id
 * @property {string} batch_id
 * @property {InventoryJobPayload[]} sizes
 */

/**
 * @typedef InventoryExportJob
 * @property {Object} [request_params]
 * @property {string} [status]
 * @property {string} [url]
 * @property {string} task_id
 * @property {string} [trigger_on]
 * @property {number} seller_id
 * @property {string} [completed_on]
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [brand]
 * @property {string} [type]
 * @property {number[]} [store]
 */

/**
 * @typedef InventoryExportResponse
 * @property {Object} [request_params]
 * @property {string} [status]
 * @property {string} task_id
 * @property {string} [trigger_on]
 * @property {number} seller_id
 */

/**
 * @typedef ReturnConfig2
 * @property {boolean} [returnable]
 * @property {string} [unit]
 * @property {number} [time]
 */

/**
 * @typedef Trader2
 * @property {string} [name]
 * @property {string} [type]
 * @property {string[]} [address]
 */

/**
 * @typedef BrandMeta1
 * @property {string} [name]
 * @property {number} [id]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {string} [name]
 * @property {string} [store_type]
 * @property {number} [uid]
 * @property {string} [store_code]
 */

/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {string} [name]
 * @property {boolean} [is_default]
 * @property {string} [address]
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
 * @typedef PriceArticle
 * @property {number} [transfer]
 * @property {string} [currency]
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {Object} [tp_notes]
 */

/**
 * @typedef Quantity
 * @property {number} [count]
 */

/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [not_available]
 * @property {Quantity} [damaged]
 * @property {Quantity} [sellable]
 * @property {Quantity} [order_committed]
 */

/**
 * @typedef GetInventories
 * @property {string} [uid]
 * @property {ReturnConfig2} [return_config]
 * @property {number} [total_quantity]
 * @property {string} [stage]
 * @property {Trader2[]} [trader]
 * @property {UserSerializer} [created_by]
 * @property {BrandMeta1} [brand]
 * @property {Object} [identifier]
 * @property {ArticleStoreResponse} [store]
 * @property {CompanyMeta1} [company]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {DateMeta} [date_meta]
 * @property {boolean} [is_set]
 * @property {string[]} [tags]
 * @property {string} [seller_identifier]
 * @property {string} [trace_id]
 * @property {Object} [platforms]
 * @property {UserSerializer} [modified_by]
 * @property {string} [country_of_origin]
 * @property {WeightResponse1} [weight]
 * @property {boolean} [track_inventory]
 * @property {string} [id]
 * @property {number} [item_id]
 * @property {string} [size]
 * @property {DimensionResponse1} [dimension]
 * @property {Object} [tax_identifier]
 * @property {string} [expiration_date]
 * @property {string} [inventory_updated_on]
 * @property {PriceArticle} [price]
 * @property {QuantitiesArticle} [quantities]
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
 * @property {string} [trace_id]
 * @property {number} [price_marked]
 * @property {number} [total_quantity]
 * @property {number} store_id
 * @property {string} [expiration_date]
 * @property {string[]} [tags]
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {number} company_id
 * @property {Object} [meta]
 * @property {InventoryPayload[]} [payload]
 */

/**
 * @typedef InventoryFailedReason
 * @property {string} [errors]
 * @property {string} message
 */

/**
 * @typedef InventoryResponseItem
 * @property {InventoryPayload} [data]
 * @property {InventoryFailedReason} [reason]
 */

/**
 * @typedef InventoryUpdateResponse
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message
 */

/**
 * @typedef PageResponse
 * @property {string} [current]
 * @property {boolean} [has_previous]
 * @property {number} [size]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 */

/**
 * @typedef HsnCodesObject
 * @property {number} [tax2]
 * @property {number} [threshold2]
 * @property {number} [tax1]
 * @property {number} [threshold1]
 * @property {boolean} [tax_on_esp]
 * @property {string} [id]
 * @property {number} [company_id]
 * @property {boolean} [tax_on_mrp]
 * @property {string} [hsn_code]
 * @property {string} [hs2_code]
 * @property {string} [modified_on]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {PageResponse} [page]
 * @property {HsnCodesObject[]} [items]
 */

/**
 * @typedef HsnUpsert
 * @property {number} [tax2]
 * @property {number} [threshold2]
 * @property {number} [uid]
 * @property {boolean} [is_active]
 * @property {number} tax1
 * @property {number} threshold1
 * @property {boolean} [tax_on_esp]
 * @property {number} company_id
 * @property {boolean} tax_on_mrp
 * @property {string} hsn_code
 * @property {string} hs2_code
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
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
 * @property {number} threshold
 * @property {string} effective_date
 * @property {number} rate
 * @property {number} [cess]
 */

/**
 * @typedef HSNDataInsertV2
 * @property {string} country_code
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} reporting_hsn
 * @property {string} type
 * @property {string} description
 * @property {Object} [created_by]
 * @property {string} hsn_code
 * @property {TaxSlab[]} taxes
 * @property {string} [modified_on]
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {PageResponse} [page]
 * @property {HSNDataInsertV2[]} [items]
 */

/**
 * @typedef BrandItem
 * @property {Media} [logo]
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [discount]
 * @property {ImageUrls} [banners]
 * @property {string[]} [departments]
 */

/**
 * @typedef BrandListingResponse
 * @property {Page} page
 * @property {BrandItem[]} [items]
 */

/**
 * @typedef Department
 * @property {string} [slug]
 * @property {Media} [logo]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {number} [priority_order]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef ThirdLevelChild
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {Object[]} [childs]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef SecondLevelChild
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef Child
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CategoryItems
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {Child[]} [childs]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
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
 * @property {Object} [operators]
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} page
 * @property {ProductListingDetail[]} [items]
 */

/**
 * @typedef ProductDetail
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string[]} [highlights]
 * @property {number} [uid]
 * @property {string} [item_type]
 * @property {string} [image_nature]
 * @property {ProductBrand} [brand]
 * @property {string} slug
 * @property {Object} [attributes]
 * @property {string} [product_online_date]
 * @property {string[]} [tryouts]
 * @property {Object} [promo_meta]
 * @property {string} [short_description]
 * @property {Object} [teaser_tag]
 * @property {number} [rating]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string} [color]
 * @property {string} [description]
 * @property {string[]} [similars]
 * @property {Media1[]} [medias]
 * @property {boolean} [has_variant]
 * @property {number} [rating_count]
 */

/**
 * @typedef InventoryPage
 * @property {boolean} [has_previous]
 * @property {string} type
 * @property {string} [next_id]
 * @property {boolean} [has_next]
 * @property {number} item_total
 */

/**
 * @typedef InventoryStockResponse
 * @property {InventoryPage} page
 * @property {Object[]} [items]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef UserSerializer1
 * @property {string} [contact]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {string} number
 * @property {number} country_code
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
 * @typedef GetAddressSerializer
 * @property {string} [address2]
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [address1]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [state]
 * @property {number} [pincode]
 * @property {string} [address_type]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [contact]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef GetCompanySerializer
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [business_type]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSerializer2} [created_by]
 * @property {string} [company_type]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [modified_on]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [minute]
 * @property {number} [hour]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [opening]
 * @property {LocationTimingSerializer} [closing]
 * @property {boolean} open
 * @property {string} weekday
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
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {number} [uid]
 * @property {UserSerializer1} [verified_by]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {UserSerializer1} [created_by]
 * @property {Object} [_custom_json]
 * @property {string} code
 * @property {string[]} [notification_emails]
 * @property {GetAddressSerializer} address
 * @property {GetCompanySerializer} [company]
 * @property {Document[]} [documents]
 * @property {string} display_name
 * @property {string} [modified_on]
 * @property {string} [store_type]
 * @property {string} [created_on]
 * @property {UserSerializer1} [modified_by]
 * @property {string} name
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {LocationManagerSerializer} [manager]
 * @property {Object} [warnings]
 * @property {string} [phone_number]
 * @property {LocationIntegrationType} [integration_type]
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
 * @property {number} uid
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} app_id
 * @property {Object} [_custom_json]
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
 * @typedef Website
 * @property {string} [url]
 */

/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */

/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {string} business_type
 * @property {string} company_type
 * @property {Object} [warnings]
 * @property {string} [mode]
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {BusinessDetails} [business_details]
 * @property {string[]} [notification_emails]
 * @property {number} uid
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [modified_by]
 * @property {Document[]} [documents]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {Object} [_custom_json]
 * @property {ContactDetails} [contact_details]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [name]
 * @property {string} [business_info]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {boolean} [franchise_enabled]
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {number} latitude
 * @property {string} address1
 * @property {string} state
 * @property {string} city
 * @property {string} country
 * @property {string} address_type
 * @property {string} [address2]
 * @property {number} longitude
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} pincode
 */

/**
 * @typedef UpdateCompany
 * @property {string} [business_type]
 * @property {string} [business_info]
 * @property {string} [company_type]
 * @property {string[]} [notification_emails]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {Object} [warnings]
 * @property {Object} [_custom_json]
 * @property {ContactDetails} [contact_details]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {string} [reject_reason]
 * @property {Document[]} [documents]
 * @property {BusinessDetails} [business_details]
 * @property {string} [name]
 * @property {boolean} [franchise_enabled]
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
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [product]
 * @property {number} [uid]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [brand]
 * @property {string} [stage]
 * @property {DocumentsObj} [store]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [portrait]
 * @property {string} [landscape]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {string} [description]
 * @property {Object} [warnings]
 * @property {Object} [_locale_language]
 * @property {string} [mode]
 * @property {string} [logo]
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {UserSerializer} [verified_by]
 * @property {number} [uid]
 * @property {UserSerializer} [created_by]
 * @property {string} [slug_key]
 * @property {BrandBannerSerializer} [banner]
 * @property {UserSerializer} [modified_by]
 * @property {string} [reject_reason]
 * @property {Object} [_custom_json]
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {string} [description]
 * @property {number} [uid]
 * @property {string} [brand_tier]
 * @property {Object} [_custom_json]
 * @property {string[]} [synonyms]
 * @property {Object} [_locale_language]
 * @property {string} logo
 * @property {BrandBannerSerializer} [banner]
 * @property {number} [company_id]
 * @property {string} name
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */

/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */

/**
 * @typedef CompanySerializer
 * @property {string} business_type
 * @property {string[]} [notification_emails]
 * @property {string} [created_on]
 * @property {string} company_type
 * @property {number} [uid]
 * @property {UserSerializer} [created_by]
 * @property {string[]} [market_channels]
 * @property {Object} [_custom_json]
 * @property {CompanyDetails} [details]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [verified_on]
 * @property {string} [reject_reason]
 * @property {UserSerializer} [verified_by]
 * @property {string} [stage]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [name]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {string} [created_on]
 * @property {number} [uid]
 * @property {Object} [warnings]
 * @property {UserSerializer} [created_by]
 * @property {CompanySerializer} [company]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [verified_on]
 * @property {string} [stage]
 * @property {UserSerializer} [verified_by]
 * @property {string} [reject_reason]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {Page} [page]
 * @property {CompanyBrandSerializer[]} [items]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} company
 * @property {number} [uid]
 * @property {number[]} brands
 */

/**
 * @typedef HolidayDateSerializer
 * @property {string} end_date
 * @property {string} start_date
 */

/**
 * @typedef HolidaySchemaSerializer
 * @property {HolidayDateSerializer} date
 * @property {string} title
 * @property {string} holiday_type
 */

/**
 * @typedef LocationSerializer
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string[]} [notification_emails]
 * @property {string} display_name
 * @property {number} [uid]
 * @property {Object} [warnings]
 * @property {string} code
 * @property {Object} [_custom_json]
 * @property {number} company
 * @property {LocationManagerSerializer} [manager]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {GetAddressSerializer} address
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {Document[]} [documents]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} name
 * @property {SellerPhoneNumber[]} [contact_numbers]
 */

/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */

/**
 * @typedef _ArticleQuery
 * @property {string} [size]
 * @property {number} [item_id]
 * @property {number[]} [ignored_stores]
 */

/**
 * @typedef _ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef _AssignStoreArticle
 * @property {_ArticleQuery} [query]
 * @property {Object} [meta]
 * @property {string} [group_id]
 * @property {number} [quantity]
 * @property {_ArticleAssignment} [article_assignment]
 */

/**
 * @typedef AssignStoreRequestValidator
 * @property {string} [channel_identifier]
 * @property {number[]} [store_ids]
 * @property {string} [app_id]
 * @property {_AssignStoreArticle[]} [articles]
 * @property {string} [channel_type]
 * @property {string} [pincode]
 * @property {number} [company_id]
 */

/**
 * @typedef AssignStoreResponseSerializer
 * @property {number} [store_id]
 * @property {string} [uid]
 * @property {Object} [meta]
 * @property {string} [size]
 * @property {number} [index]
 * @property {string} [_id]
 * @property {number} [price_marked]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [quantity]
 * @property {number} [price_effective]
 * @property {string} [s_city]
 * @property {string} [store_pincode]
 * @property {number} [item_id]
 * @property {number} [company_id]
 * @property {boolean} [status]
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
 * @property {InformationPhone} [phone]
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
 * @typedef PriceRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [total]
 * @property {number} [app]
 * @property {number} [user]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [remaining]
 * @property {UsesRemaining} [maximum]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [networks]
 * @property {string[]} [types]
 * @property {string[]} [codes]
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
 * @typedef Restrictions
 * @property {number[]} [ordering_stores]
 * @property {string[]} [platforms]
 * @property {PriceRange} [price_range]
 * @property {number[]} [user_groups]
 * @property {UsesRestriction} [uses]
 * @property {boolean} [coupon_allowed]
 * @property {Object} [payments]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {PostOrder} [post_order]
 * @property {string} [user_type]
 */

/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef RuleDefinition
 * @property {boolean} [auto_apply]
 * @property {string} applicable_on
 * @property {string[]} [scope]
 * @property {string} calculate_on
 * @property {boolean} [is_exact]
 * @property {string} value_type
 * @property {string} type
 * @property {string} [currency_code]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */

/**
 * @typedef DisplayMeta
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [remove]
 * @property {DisplayMetaDict} [auto]
 * @property {DisplayMetaDict} [apply]
 */

/**
 * @typedef State
 * @property {boolean} [is_display]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_public]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef CouponAction
 * @property {string} [action_date]
 * @property {string} [txn_mode]
 */

/**
 * @typedef CouponSchedule
 * @property {Object[]} [next_schedule]
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {string} [user_registered_after]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef Rule
 * @property {number} [min]
 * @property {number} [discount_qty]
 * @property {number} [key]
 * @property {number} [value]
 * @property {number} [max]
 */

/**
 * @typedef CouponAdd
 * @property {Restrictions} [restrictions]
 * @property {Ownership} ownership
 * @property {CouponDateMeta} [date_meta]
 * @property {string[]} [tags]
 * @property {RuleDefinition} rule_definition
 * @property {DisplayMeta} display_meta
 * @property {State} [state]
 * @property {CouponAuthor} [author]
 * @property {Identifier} identifiers
 * @property {string} type_slug
 * @property {Validity} validity
 * @property {CouponAction} [action]
 * @property {string} code
 * @property {CouponSchedule} [_schedule]
 * @property {Validation} [validation]
 * @property {Rule[]} rule
 */

/**
 * @typedef CouponsResponse
 * @property {CouponAdd} [items]
 * @property {Page} [page]
 */

/**
 * @typedef SuccessMessage
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef OperationErrorResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef CouponUpdate
 * @property {Restrictions} [restrictions]
 * @property {Ownership} ownership
 * @property {CouponDateMeta} [date_meta]
 * @property {string[]} [tags]
 * @property {RuleDefinition} rule_definition
 * @property {DisplayMeta} display_meta
 * @property {State} [state]
 * @property {CouponAuthor} [author]
 * @property {Identifier} identifiers
 * @property {string} type_slug
 * @property {Validity} validity
 * @property {CouponAction} [action]
 * @property {string} code
 * @property {CouponSchedule} [_schedule]
 * @property {Validation} [validation]
 * @property {Rule[]} rule
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
 * @typedef DiscountOffer
 * @property {number} [max_discount_amount]
 * @property {boolean} [apportion_discount]
 * @property {number} [discount_price]
 * @property {number} [discount_percentage]
 * @property {boolean} [partial_can_ret]
 * @property {number} [max_offer_quantity]
 * @property {number} [discount_amount]
 * @property {string} [code]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [min_offer_quantity]
 */

/**
 * @typedef CompareObject
 * @property {number} [greater_than]
 * @property {number} [less_than_equals]
 * @property {number} [equals]
 * @property {number} [greater_than_equals]
 * @property {number} [less_than]
 */

/**
 * @typedef ItemCriteria
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_company]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_store]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {number[]} [item_exclude_store]
 * @property {string[]} [available_zones]
 * @property {CompareObject} [cart_total]
 * @property {string[]} [product_tags]
 * @property {number[]} [item_exclude_company]
 * @property {number[]} [item_id]
 * @property {number[]} [item_exclude_brand]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_brand]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_category]
 * @property {string[]} [item_sku]
 * @property {string[]} [item_size]
 * @property {number[]} [item_category]
 * @property {string[]} [buy_rules]
 * @property {boolean} [all_items]
 */

/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {DiscountOffer} offer
 * @property {string} discount_type
 * @property {ItemCriteria} item_criteria
 */

/**
 * @typedef Visibility
 * @property {boolean} coupon_list
 * @property {boolean} pdp
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [description]
 * @property {string} [offer_text]
 * @property {string} [offer_label]
 * @property {string} [name]
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */

/**
 * @typedef PromotionSchedule
 * @property {Object[]} [next_schedule]
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} start
 * @property {string} [end]
 * @property {boolean} published
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
 * @property {UsesRemaining1} [remaining]
 * @property {UsesRemaining1} [maximum]
 */

/**
 * @typedef PaymentAllowValue1
 * @property {number} [max]
 */

/**
 * @typedef PromotionPaymentModes
 * @property {PaymentAllowValue1} [uses]
 * @property {string} type
 * @property {string[]} [codes]
 */

/**
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef Restrictions1
 * @property {string[]} [platforms]
 * @property {UserRegistered} [user_registered]
 * @property {number[]} [user_groups]
 * @property {UsesRestriction1} uses
 * @property {boolean} [anonymous_users]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {PostOrder1} [post_order]
 * @property {number} [order_quantity]
 * @property {string[]} [user_id]
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */

/**
 * @typedef PromotionListItem
 * @property {boolean} [stackable]
 * @property {Ownership1} ownership
 * @property {Object} [_custom_json]
 * @property {DiscountRule[]} discount_rules
 * @property {string} application_id
 * @property {string} promo_group
 * @property {Visibility} [visiblility]
 * @property {boolean} [apply_all_discount]
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAction} [post_order_action]
 * @property {string} [currency]
 * @property {PromotionSchedule} [_schedule]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {string} [code]
 * @property {string} promotion_type
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {Object} buy_rules
 * @property {PromotionAuthor} [author]
 */

/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PromotionAdd
 * @property {boolean} [stackable]
 * @property {Ownership1} ownership
 * @property {Object} [_custom_json]
 * @property {DiscountRule[]} discount_rules
 * @property {string} application_id
 * @property {string} promo_group
 * @property {Visibility} [visiblility]
 * @property {boolean} [apply_all_discount]
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAction} [post_order_action]
 * @property {string} [currency]
 * @property {PromotionSchedule} [_schedule]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {string} [code]
 * @property {string} promotion_type
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {Object} buy_rules
 * @property {PromotionAuthor} [author]
 */

/**
 * @typedef PromotionUpdate
 * @property {boolean} [stackable]
 * @property {Ownership1} ownership
 * @property {Object} [_custom_json]
 * @property {DiscountRule[]} discount_rules
 * @property {string} application_id
 * @property {string} promo_group
 * @property {Visibility} [visiblility]
 * @property {boolean} [apply_all_discount]
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAction} [post_order_action]
 * @property {string} [currency]
 * @property {PromotionSchedule} [_schedule]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {string} [code]
 * @property {string} promotion_type
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {Object} buy_rules
 * @property {PromotionAuthor} [author]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive]
 * @property {PromotionSchedule} [schedule]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [subtitle]
 * @property {string} [modified_on]
 * @property {string} [entity_type]
 * @property {string} [type]
 * @property {string} [entity_slug]
 * @property {string} [example]
 * @property {string} [created_on]
 * @property {boolean} [is_hidden]
 */

/**
 * @typedef CartItem
 * @property {string} product_id
 * @property {number} [quantity]
 * @property {string} size
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef ProductPrice
 * @property {number} [marked]
 * @property {number} [selling]
 * @property {number} [add_on]
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
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
 * @typedef ProductAvailability
 * @property {boolean} [out_of_stock]
 * @property {boolean} [deliverable]
 * @property {string[]} [sizes]
 * @property {boolean} [is_valid]
 * @property {number} [other_store_quantity]
 */

/**
 * @typedef ProductImage
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */

/**
 * @typedef ProductAction
 * @property {string} [url]
 * @property {string} [type]
 * @property {ActionQuery} [query]
 */

/**
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef CartProduct
 * @property {ProductImage[]} [images]
 * @property {NetQuantity} [net_quantity]
 * @property {BaseInfo} [brand]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {ProductAction} [action]
 * @property {string} [type]
 * @property {CategoryInfo[]} [categories]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef FreeGiftItem
 * @property {string} [item_name]
 * @property {string[]} [item_images_url]
 * @property {string} [item_brand_name]
 * @property {number} [item_id]
 * @property {Object} [item_price_details]
 * @property {string} [item_slug]
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
 * @property {Object} [raw_offer]
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [offer]
 */

/**
 * @typedef AppliedPromotion
 * @property {string} [promo_id]
 * @property {number} [article_quantity]
 * @property {string} [offer_text]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {string} [promotion_group]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {string} [promotion_type]
 * @property {boolean} [mrp_promotion]
 * @property {number} [amount]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_name]
 */

/**
 * @typedef BasePrice
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */

/**
 * @typedef ProductArticle
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [extra_meta]
 * @property {BaseInfo} [store]
 * @property {Object} [parent_item_identifiers]
 * @property {string[]} [product_group_tags]
 * @property {string} [size]
 * @property {string} [uid]
 * @property {BaseInfo} [seller]
 * @property {number} [quantity]
 * @property {string} [type]
 */

/**
 * @typedef CartProductInfo
 * @property {string} [message]
 * @property {ProductPriceInfo} [price]
 * @property {PromoMeta} [promo_meta]
 * @property {ProductAvailability} [availability]
 * @property {CartProduct} [product]
 * @property {boolean} [is_set]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {string} [key]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [quantity]
 * @property {CartProductIdentifer} identifiers
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {Object} [bulk_offer]
 * @property {string} [discount]
 * @property {ProductArticle} [article]
 * @property {string} [coupon_message]
 */

/**
 * @typedef LoyaltyPoints
 * @property {number} [total]
 * @property {number} [applicable]
 * @property {boolean} [is_applied]
 * @property {string} [description]
 */

/**
 * @typedef RawBreakup
 * @property {number} [total]
 * @property {number} [cod_charge]
 * @property {number} [you_saved]
 * @property {number} [vog]
 * @property {number} [mrp_total]
 * @property {number} [delivery_charge]
 * @property {number} [fynd_cash]
 * @property {number} [gst_charges]
 * @property {number} [subtotal]
 * @property {number} [discount]
 * @property {number} [convenience_fee]
 * @property {number} [coupon]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [message]
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [code]
 * @property {number} [coupon_value]
 * @property {boolean} [is_applied]
 * @property {number} [max_discount_value]
 * @property {number} [value]
 * @property {string} [uid]
 * @property {string} [sub_title]
 * @property {string} [type]
 * @property {number} [minimum_cart_value]
 * @property {string} [coupon_type]
 */

/**
 * @typedef DisplayBreakup
 * @property {string[]} [message]
 * @property {string} [display]
 * @property {string} [key]
 * @property {number} [value]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef CartBreakup
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {RawBreakup} [raw]
 * @property {CouponBreakup} [coupon]
 * @property {DisplayBreakup[]} [display]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {Object} [errors]
 */

/**
 * @typedef ShippingAddress
 * @property {string} [email]
 * @property {Object} [meta]
 * @property {string} [city]
 * @property {string} [address_type]
 * @property {string} [country_code]
 * @property {string} [name]
 * @property {string} [area_code_slug]
 * @property {string} [state]
 * @property {string} [landmark]
 * @property {string} [area]
 * @property {string} [country]
 * @property {number} [pincode]
 * @property {string} [address]
 * @property {string} area_code
 * @property {number} [phone]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {ShippingAddress} shipping_address
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef PromiseTimestamp
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef PromiseFormatted
 * @property {string} [min]
 * @property {string} [max]
 */

/**
 * @typedef ShipmentPromise
 * @property {PromiseTimestamp} [timestamp]
 * @property {PromiseFormatted} [formatted]
 */

/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {boolean} [is_valid]
 */

/**
 * @typedef CartItemMeta
 * @property {string} [group_id]
 * @property {boolean} [primary_item]
 */

/**
 * @typedef OpenApiFiles
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef OpenApiOrderItem
 * @property {number} delivery_charges
 * @property {number} amount_paid
 * @property {number} [loyalty_discount]
 * @property {CartItemMeta} [meta]
 * @property {number} price_effective
 * @property {number} product_id
 * @property {Object} [extra_meta]
 * @property {number} price_marked
 * @property {number} [employee_discount]
 * @property {OpenApiFiles[]} [files]
 * @property {number} [quantity]
 * @property {number} coupon_effective_discount
 * @property {number} discount
 * @property {number} cashback_applied
 * @property {string} size
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} cod_charges
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [payment_mode]
 * @property {number} delivery_charges
 * @property {string} coupon_code
 * @property {number} coupon_value
 * @property {ShippingAddress} billing_address
 * @property {OpenApiOrderItem[]} cart_items
 * @property {Object} [employee_discount]
 * @property {OpenApiFiles[]} [files]
 * @property {number} cart_value
 * @property {string} [coupon]
 * @property {string} [gstin]
 * @property {number} [loyalty_discount]
 * @property {string} [affiliate_order_id]
 * @property {string} [order_id]
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [comment]
 * @property {number} cashback_applied
 * @property {string} [currency_code]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} cod_charges
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {string} [order_ref_id]
 * @property {string} order_id
 */

/**
 * @typedef AbandonedCart
 * @property {string} [app_id]
 * @property {Object} [promotion]
 * @property {number} [bulk_coupon_discount]
 * @property {number} uid
 * @property {string} last_modified
 * @property {string} _id
 * @property {string} [order_id]
 * @property {string} [checkout_mode]
 * @property {string} [comment]
 * @property {boolean} is_default
 * @property {boolean} [merge_qty]
 * @property {Object[]} [shipments]
 * @property {Object} cashback
 * @property {Object} [delivery_charges]
 * @property {string} [payment_mode]
 * @property {boolean} [is_archive]
 * @property {boolean} [buy_now]
 * @property {Object} [payments]
 * @property {number} [cart_value]
 * @property {string} created_on
 * @property {number} [discount]
 * @property {Object} [coupon]
 * @property {string} user_id
 * @property {string} [gstin]
 * @property {Object} [pick_up_customer_details]
 * @property {Object} [meta]
 * @property {string} expire_at
 * @property {Object} [fynd_credits]
 * @property {number[]} [fc_index_map]
 * @property {boolean} [is_active]
 * @property {Object[]} articles
 * @property {Object[]} [payment_methods]
 * @property {Object} [cod_charges]
 */

/**
 * @typedef AbandonedCartResponse
 * @property {string} [message]
 * @property {AbandonedCart[]} [items]
 * @property {Page} [page]
 * @property {boolean} [success]
 * @property {Object} [result]
 */

/**
 * @typedef CartCurrency
 * @property {string} [code]
 * @property {string} [symbol]
 */

/**
 * @typedef CartDetailResponse
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [last_modified]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [id]
 * @property {string} [checkout_mode]
 * @property {boolean} [buy_now]
 * @property {string} [comment]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [coupon_text]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [is_valid]
 * @property {CartCurrency} [currency]
 * @property {boolean} [restrict_checkout]
 * @property {string} [gstin]
 */

/**
 * @typedef AddProductCart
 * @property {number} [store_id]
 * @property {number} [item_id]
 * @property {Object} [extra_meta]
 * @property {string} [article_id]
 * @property {number} [seller_id]
 * @property {Object} [article_assignment]
 * @property {Object} [parent_item_identifiers]
 * @property {string[]} [product_group_tags]
 * @property {number} [quantity]
 * @property {boolean} [pos]
 * @property {string} [item_size]
 * @property {string} [display]
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {string} [message]
 * @property {boolean} [partial]
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 */

/**
 * @typedef UpdateProductCart
 * @property {number} [item_id]
 * @property {Object} [extra_meta]
 * @property {string} [article_id]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [quantity]
 * @property {CartProductIdentifer} identifiers
 * @property {number} [item_index]
 * @property {string} [item_size]
 */

/**
 * @typedef UpdateCartRequest
 * @property {UpdateProductCart[]} [items]
 * @property {string} operation
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
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
