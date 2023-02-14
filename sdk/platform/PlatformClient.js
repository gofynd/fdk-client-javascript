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
 * @property {string[]} excluded_fields
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
 * @property {boolean} [is_active]
 * @property {string} merchant_salt
 * @property {string} key
 * @property {string} secret
 * @property {string} config_type
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {boolean} [is_active]
 * @property {string} app_id
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
 * @property {ErrorCodeAndDescription} error
 * @property {boolean} success
 */

/**
 * @typedef PaymentModeLogo
 * @property {string} small
 * @property {string} large
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
 */

/**
 * @typedef IntentApp
 * @property {string} [code]
 * @property {string} [package_name]
 * @property {string} [display_name]
 * @property {PaymentModeLogo} [logos]
 */

/**
 * @typedef PaymentModeList
 * @property {number} [cod_limit]
 * @property {string} [card_token]
 * @property {number} [display_priority]
 * @property {number} [remaining_limit]
 * @property {number} [timeout]
 * @property {string} [display_name]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [name]
 * @property {string} [card_reference]
 * @property {string} [card_type]
 * @property {string} [card_brand]
 * @property {string} [card_fingerprint]
 * @property {number} [retry_count]
 * @property {boolean} [intent_flow]
 * @property {number} [cod_limit_per_order]
 * @property {number} [exp_month]
 * @property {string} aggregator_name
 * @property {string} [card_number]
 * @property {number} [exp_year]
 * @property {string} [merchant_code]
 * @property {string} [fynd_vpa]
 * @property {string} [card_brand_image]
 * @property {string} [card_isin]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {boolean} [expired]
 * @property {string} [card_id]
 * @property {string} [card_name]
 * @property {string} [code]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [card_issuer]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [nickname]
 */

/**
 * @typedef RootPaymentMode
 * @property {boolean} [save_card]
 * @property {boolean} [is_pay_by_card_pl]
 * @property {boolean} [add_card_enabled]
 * @property {number} display_priority
 * @property {PaymentModeList[]} [list]
 * @property {string} display_name
 * @property {boolean} [anonymous_enable]
 * @property {string} name
 * @property {string} [aggregator_name]
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
 * @property {boolean} is_default
 * @property {string} transfer_type
 * @property {boolean} is_active
 * @property {Object[]} payouts_aggregators
 * @property {Object} customers
 * @property {Object} more_attributes
 * @property {Object} unique_transfer_no
 */

/**
 * @typedef PayoutsResponse
 * @property {Payout[]} items
 * @property {boolean} success
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} [country]
 * @property {string} [account_holder]
 * @property {string} [state]
 * @property {string} ifsc_code
 * @property {string} [branch_name]
 * @property {string} [city]
 * @property {string} [bank_name]
 * @property {string} [account_no]
 * @property {number} [pincode]
 * @property {string} account_type
 */

/**
 * @typedef PayoutRequest
 * @property {string} transfer_type
 * @property {boolean} is_active
 * @property {PayoutBankDetails} bank_details
 * @property {string} aggregator
 * @property {string} unique_external_id
 * @property {Object} users
 */

/**
 * @typedef PayoutResponse
 * @property {string} transfer_type
 * @property {boolean} success
 * @property {boolean} is_active
 * @property {string} payment_status
 * @property {Object} bank_details
 * @property {boolean} created
 * @property {string} aggregator
 * @property {string} unique_transfer_no
 * @property {Object} payouts
 * @property {Object} users
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
 * @property {boolean} success
 * @property {Object[]} data
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
 * @property {boolean} success
 * @property {Object} data
 */

/**
 * @typedef RefundAccountResponse
 * @property {boolean} [is_verified_flag]
 * @property {boolean} success
 * @property {string} message
 * @property {Object} [data]
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} description
 * @property {string} code
 * @property {boolean} success
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} account_holder
 * @property {string} ifsc_code
 * @property {string} branch_name
 * @property {string} bank_name
 * @property {string} account_no
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {BankDetailsForOTP} details
 * @property {string} order_id
 */

/**
 * @typedef IfscCodeResponse
 * @property {string} bank_name
 * @property {boolean} [success]
 * @property {string} branch_name
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} account_holder
 * @property {string} transfer_mode
 * @property {string} display_name
 * @property {string} title
 * @property {string} address
 * @property {string} [delights_user_name]
 * @property {string} ifsc_code
 * @property {string} [mobile]
 * @property {string} created_on
 * @property {string} bank_name
 * @property {string} beneficiary_id
 * @property {string} modified_on
 * @property {string} [comment]
 * @property {string} subtitle
 * @property {number} id
 * @property {string} account_no
 * @property {string} email
 * @property {boolean} is_active
 * @property {string} [branch_name]
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [payment_gateway]
 * @property {Object} [extra_meta]
 * @property {string} [current_status]
 * @property {string} [payment_id]
 * @property {string} [order_id]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} [name]
 * @property {number} amount
 * @property {string} mode
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {string} order_id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {boolean} success
 * @property {string} message
 * @property {string} order_id
 */

/**
 * @typedef PlatformPaymentOptions
 * @property {string} mode_of_payment
 * @property {number} [cod_amount_limit]
 * @property {boolean} [anonymous_cod]
 * @property {Object} [payment_selection_lock]
 * @property {number} [cod_charges]
 * @property {Object} methods
 * @property {string} source
 * @property {boolean} enabled
 * @property {Object} [callback_url]
 */

/**
 * @typedef PlatfromPaymentConfig
 * @property {boolean} success
 * @property {string} message
 * @property {PlatformPaymentOptions} data
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
 * @property {number} usages
 * @property {boolean} is_active
 * @property {string} user_id
 * @property {number} remaining_limit
 * @property {number} limit
 */

/**
 * @typedef GetUserCODLimitResponse
 * @property {boolean} success
 * @property {CODdata} user_cod_data
 */

/**
 * @typedef SetCODForUserRequest
 * @property {string} merchant_user_id
 * @property {boolean} is_active
 * @property {string} mobileno
 */

/**
 * @typedef SetCODOptionResponse
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef EdcDetailsRequest
 * @property {string} terminal_serial_no
 */

/**
 * @typedef EdcDevice
 * @property {boolean} [is_active]
 * @property {number} [store_id]
 * @property {string} [merchant_store_pos_code]
 * @property {string} [edc_serial_no]
 * @property {string} [terminal_serial_no]
 * @property {string} [app_id]
 * @property {string} [device_tag]
 */

/**
 * @typedef EdcDeviceDetailsResponse
 * @property {boolean} success
 * @property {EdcDevice} data
 */

/**
 * @typedef EdcUpdateRequest
 * @property {string} [is_active]
 * @property {string} [device_tag]
 * @property {string} terminal_serial_no
 * @property {number} store_id
 */

/**
 * @typedef EdcDeviceAddUpdateResponse
 * @property {boolean} success
 */

/**
 * @typedef EdcAddRequest
 * @property {string} is_active
 * @property {number} store_id
 * @property {string} merchant_store_pos_code
 * @property {string} edc_serial_no
 * @property {string} terminal_serial_no
 * @property {string} device_tag
 */

/**
 * @typedef EdcDeviceListResponse
 * @property {EdcDevice[]} device_list
 * @property {boolean} success
 */

/**
 * @typedef ShipmentStatus
 * @property {string} hex_code
 * @property {string} ops_status
 * @property {string} title
 * @property {string} actual_status
 * @property {string} status
 */

/**
 * @typedef Prices
 * @property {number} [price_effective]
 * @property {number} [tax_collected_at_source]
 * @property {number} [price_marked]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [cashback_applied]
 * @property {number} [refund_credit]
 * @property {number} [coupon_value]
 * @property {number} [promotion_effective_discount]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [cashback]
 * @property {number} [cod_charges]
 * @property {number} [refund_amount]
 * @property {number} [fynd_credits]
 * @property {number} [value_of_good]
 * @property {number} [amount_paid]
 */

/**
 * @typedef UserDataInfo
 * @property {string} [avis_user_id]
 * @property {string} [gender]
 * @property {string} [mobile]
 * @property {string} [email]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [first_name]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [last_name]
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} logo
 * @property {string} type
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} code
 * @property {string} id
 */

/**
 * @typedef PlatformItem
 * @property {boolean} [can_return]
 * @property {number} [l3_category]
 * @property {number} [department_id]
 * @property {string} [color]
 * @property {string} [size]
 * @property {string} [name]
 * @property {string[]} [images]
 * @property {boolean} [can_cancel]
 * @property {string} [l3_category_name]
 * @property {string[]} [image]
 * @property {string} [code]
 * @property {string[]} [l1_category]
 * @property {number} [id]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} tax_collected_at_source
 * @property {string} gstin_code
 * @property {number} value_of_good
 * @property {number} brand_calculated_amount
 * @property {number} gst_fee
 */

/**
 * @typedef BagUnit
 * @property {boolean} [can_return]
 * @property {string} shipment_id
 * @property {number} item_quantity
 * @property {Prices} [prices]
 * @property {boolean} [can_cancel]
 * @property {number} bag_id
 * @property {PlatformItem} [item]
 * @property {number} total_shipment_bags
 * @property {GSTDetailsData} [gst]
 * @property {string} ordering_channel
 * @property {Object} status
 */

/**
 * @typedef ShipmentItem
 * @property {Object} [payment_methods]
 * @property {Object} [channel]
 * @property {string} created_at
 * @property {ShipmentStatus} [shipment_status]
 * @property {Prices} [prices]
 * @property {string} fulfilling_centre
 * @property {UserDataInfo} [user]
 * @property {number} total_shipments_in_order
 * @property {number} total_bags_count
 * @property {number} shipment_created_at
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {Object} [sla]
 * @property {Object} [application]
 * @property {BagUnit[]} [bags]
 * @property {string} id
 */

/**
 * @typedef FilterInfoOption
 * @property {string} text
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef FiltersInfo
 * @property {FilterInfoOption[]} [options]
 * @property {string} text
 * @property {string} type
 * @property {string} value
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {ShipmentItem[]} [items]
 * @property {Object} [page]
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [applied_filters]
 */

/**
 * @typedef Error
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef UserDetailsData
 * @property {string} state
 * @property {string} [email]
 * @property {string} city
 * @property {string} name
 * @property {string} phone
 * @property {string} address
 * @property {string} pincode
 * @property {string} country
 */

/**
 * @typedef TrackingList
 * @property {string} text
 * @property {string} [time]
 * @property {string} status
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [name]
 * @property {string} [gst_tag]
 * @property {string} [awb_no]
 * @property {string} [pincode]
 * @property {string} [eway_bill_id]
 * @property {string} [country]
 * @property {string} [track_url]
 * @property {number} [id]
 */

/**
 * @typedef BagStateMapper
 * @property {boolean} [notify_customer]
 * @property {string} name
 * @property {string} [app_display_name]
 * @property {number} bs_id
 * @property {string} state_type
 * @property {string} journey_type
 * @property {boolean} [is_active]
 * @property {boolean} [app_facing]
 * @property {string} display_name
 * @property {string} [app_state_name]
 */

/**
 * @typedef BagStatusHistory
 * @property {string} [shipment_id]
 * @property {boolean} [forward]
 * @property {string} [updated_at]
 * @property {number} [bsh_id]
 * @property {string} [delivery_awb_number]
 * @property {string} [created_at]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {Object[]} [reasons]
 * @property {string} [app_display_name]
 * @property {number} [state_id]
 * @property {boolean} [kafka_sync]
 * @property {number} [bag_id]
 * @property {string} [state_type]
 * @property {number} [store_id]
 * @property {number} [delivery_partner_id]
 * @property {string} status
 * @property {string} [display_name]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [logo]
 * @property {string} [mode]
 * @property {string} [source]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} fynd_order_id
 * @property {string} [order_value]
 * @property {string} [cod_charges]
 * @property {string} [source]
 * @property {string} [order_date]
 * @property {string} [ordering_channel]
 * @property {Object} [tax_details]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [affiliate_id]
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
 * @property {Object} [cart_conditions]
 * @property {ItemCriterias} [item_criteria]
 */

/**
 * @typedef AppliedPromos
 * @property {string} [promo_id]
 * @property {string} [promotion_type]
 * @property {number} [amount]
 * @property {DiscountRules[]} [discount_rules]
 * @property {number} [article_quantity]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_name]
 * @property {boolean} [mrp_promotion]
 */

/**
 * @typedef CurrentStatus
 * @property {number} current_status_id
 * @property {string} [shipment_id]
 * @property {string} [delivery_awb_number]
 * @property {string} [created_at]
 * @property {number} [updated_at]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [state_id]
 * @property {boolean} [kafka_sync]
 * @property {number} [bag_id]
 * @property {number} [store_id]
 * @property {number} [delivery_partner_id]
 * @property {string} [state_type]
 * @property {string} [status]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} price_effective
 * @property {number} [tax_collected_at_source]
 * @property {number} price_marked
 * @property {string} hsn_code
 * @property {number} cashback_applied
 * @property {boolean} added_to_fynd_cash
 * @property {number} coupon_value
 * @property {number} coupon_effective_discount
 * @property {number} transfer_price
 * @property {number} amount_paid
 * @property {number} discount
 * @property {number} value_of_good
 * @property {number} total_units
 * @property {number} promotion_effective_discount
 * @property {number} gst_tax_percentage
 * @property {string} item_name
 * @property {number} refund_credit
 * @property {number} delivery_charge
 * @property {number} cod_charges
 * @property {number} fynd_credits
 * @property {number} gst_fee
 * @property {Identifier} identifiers
 * @property {number} [amount_paid_roundoff]
 * @property {string} size
 * @property {string} gst_tag
 * @property {number} cashback
 * @property {number} brand_calculated_amount
 */

/**
 * @typedef BagConfigs
 * @property {boolean} is_active
 * @property {boolean} allow_force_return
 * @property {boolean} enable_tracking
 * @property {boolean} is_returnable
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} can_be_cancelled
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [state]
 * @property {string} [address2]
 * @property {number} [longitude]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 * @property {string} [email]
 * @property {string} [city]
 * @property {string} [version]
 * @property {string} [address_type]
 * @property {string} [area]
 * @property {string} [phone]
 * @property {string} [contact_person]
 * @property {string} [landmark]
 * @property {string} [address_category]
 * @property {string} [pincode]
 * @property {string} [address1]
 * @property {string} [country]
 * @property {number} [latitude]
 */

/**
 * @typedef BagGST
 * @property {string} [hsn_code]
 * @property {number} [gst_tax_percentage]
 * @property {boolean} [is_default_hsn_code]
 * @property {string} [gst_tag]
 * @property {string} [gstin_code]
 * @property {number} [gst_fee]
 * @property {number} [value_of_good]
 * @property {number} [brand_calculated_amount]
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [identifiers]
 * @property {string} [uid]
 * @property {Object} [return_config]
 */

/**
 * @typedef OrderBrandName
 * @property {string} [company]
 * @property {string} created_on
 * @property {string} [modified_on]
 * @property {string} logo
 * @property {string} brand_name
 * @property {number} id
 */

/**
 * @typedef OrderBags
 * @property {boolean} [can_return]
 * @property {PlatformItem} [item]
 * @property {string} [display_name]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {Prices} [prices]
 * @property {number} bag_id
 * @property {CurrentStatus} [current_status]
 * @property {string} [entity_type]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {number} [quantity]
 * @property {boolean} [can_cancel]
 * @property {BagConfigs} [bag_configs]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {string} [seller_identifier]
 * @property {number} [line_number]
 * @property {BagGST} [gst_details]
 * @property {Object} [parent_promo_bags]
 * @property {OrderBagArticle} [article]
 * @property {OrderBrandName} [brand]
 * @property {string} [identifier]
 */

/**
 * @typedef FulfillingStore
 * @property {string} state
 * @property {string} store_name
 * @property {Object} meta
 * @property {string} city
 * @property {string} phone
 * @property {string} address
 * @property {string} pincode
 * @property {string} code
 * @property {string} fulfillment_channel
 * @property {string} contact_person
 * @property {string} country
 * @property {number} id
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [shipment_id]
 * @property {string} [created_at]
 * @property {string[]} [bag_list]
 * @property {string} [status]
 * @property {number} [id]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {boolean} [can_return]
 * @property {Object} invoice
 * @property {string} shipment_id
 * @property {Object} current_shipment_status
 * @property {string} [refund_text]
 * @property {boolean} [enable_tracking]
 * @property {string} [due_date]
 * @property {boolean} is_fynd_coupon
 * @property {Object} fyndstore_emp
 * @property {string} email_id
 * @property {boolean} [go_green]
 * @property {string} [secured_delivery_flag]
 * @property {UserDetailsData} [billing_details]
 * @property {Object[]} [forward_tracking_list]
 * @property {Object[]} items
 * @property {TrackingList[]} [tracking_list]
 * @property {boolean} platform_logo
 * @property {DPDetailsData} [dp_details]
 * @property {number} [total_bags]
 * @property {string} [journey_type]
 * @property {string[]} [child_nodes]
 * @property {string} can_break
 * @property {string} [is_pdsr]
 * @property {Object} [coupon]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [vertical]
 * @property {Prices} [prices]
 * @property {string[]} [shipment_images]
 * @property {string} credit_note_id
 * @property {Object} ordering_store
 * @property {number} [total_items]
 * @property {number} [shipment_quantity]
 * @property {Object[]} [forward_shipment_status]
 * @property {boolean} [enable_dp_tracking]
 * @property {UserDetailsData} [delivery_details]
 * @property {ShipmentPayments} [payments]
 * @property {string} affiliate_shipment_id
 * @property {Object} [bank_data]
 * @property {OrderDetailsData} [order]
 * @property {Object[]} [custom_meta]
 * @property {string} [order_created_time]
 * @property {boolean} is_not_fynd_source
 * @property {Object} [refund_details]
 * @property {string} [pay_button]
 * @property {string} [priority_text]
 * @property {string} lock_status
 * @property {number} status_progress
 * @property {string} [packaging_type]
 * @property {boolean} [can_cancel]
 * @property {string} [picked_date]
 * @property {string} user_id
 * @property {OrderBags[]} [bags]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object} [user_info]
 * @property {string} [payment_mode]
 * @property {ShipmentStatusData} [status]
 * @property {boolean} is_packaging_order
 * @property {Object} [escalation]
 * @property {string} tracking_url
 * @property {Object} company
 * @property {string} [is_fynd_store]
 * @property {string} order_type
 * @property {Object[]} delivery_status
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [shipment_status]
 * @property {Object[]} [forward_order_status]
 * @property {string} [kirana_store_id]
 * @property {boolean} is_invoiced
 * @property {Object} order_status
 * @property {Object} [delivery_slot]
 * @property {string} [user_agent]
 * @property {boolean} [beneficiary_details]
 * @property {string} [mid]
 * @property {string} [operational_status]
 * @property {string} [replacement_details]
 */

/**
 * @typedef OrderMeta
 * @property {Object[]} [order_tags]
 * @property {string} [currency_symbol]
 * @property {Object} [extra_meta]
 * @property {string} [order_type]
 * @property {string} [payment_type]
 * @property {number} [employee_id]
 * @property {string} [comment]
 * @property {number} [ordering_store]
 * @property {string} [customer_note]
 * @property {Object} [staff]
 * @property {string[]} [order_child_entities]
 * @property {number} [cart_id]
 * @property {string} [order_platform]
 * @property {Object[]} [files]
 * @property {number} [mongo_cart_id]
 */

/**
 * @typedef OrderDict
 * @property {OrderMeta} [meta]
 * @property {string} order_date
 * @property {string} fynd_order_id
 * @property {Object} [payment_methods]
 */

/**
 * @typedef PlatformShipment
 * @property {string} shipment_id
 * @property {UserDetailsData} [billing_details]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [platform_logo]
 * @property {DPDetailsData} [dp_details]
 * @property {number} [total_bags]
 * @property {string} [journey_type]
 * @property {Object} [coupon]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [vertical]
 * @property {Prices} [prices]
 * @property {string[]} [shipment_images]
 * @property {number} [total_items]
 * @property {number} [shipment_quantity]
 * @property {boolean} [enable_dp_tracking]
 * @property {UserDetailsData} [delivery_details]
 * @property {ShipmentPayments} [payments]
 * @property {OrderDetailsData} [order]
 * @property {Object[]} [custom_meta]
 * @property {string} [priority_text]
 * @property {string} [packaging_type]
 * @property {string} [picked_date]
 * @property {OrderBags[]} [bags]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {string} [payment_mode]
 * @property {ShipmentStatusData} [status]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [shipment_status]
 * @property {Object} [delivery_slot]
 * @property {string} [user_agent]
 * @property {string} [operational_status]
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {OrderDict} [order]
 * @property {boolean} success
 * @property {PlatformShipment[]} [shipments]
 */

/**
 * @typedef SubLane
 * @property {string} [text]
 * @property {Object[]} [actions]
 * @property {number} [index]
 * @property {number} [total_items]
 * @property {string} [value]
 */

/**
 * @typedef SuperLane
 * @property {SubLane[]} [options]
 * @property {string} text
 * @property {number} [total_items]
 * @property {string} value
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [logo]
 * @property {string} [name]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [name]
 * @property {string} [display]
 * @property {string} [value]
 */

/**
 * @typedef PlatformOrderItems
 * @property {string} [order_created_time]
 * @property {PlatformChannel} [channel]
 * @property {string} [order_id]
 * @property {PlatformShipment[]} [shipments]
 * @property {Object} [meta]
 * @property {number} [total_order_value]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {number} [order_value]
 * @property {UserDataInfo} [user_info]
 * @property {string} [payment_mode]
 */

/**
 * @typedef OrderListingResponse
 * @property {number} [total_count]
 * @property {Page} [page]
 * @property {string} [lane]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {PlatformOrderItems[]} [items]
 */

/**
 * @typedef Options
 * @property {string} [text]
 * @property {number} [value]
 */

/**
 * @typedef MetricsCount
 * @property {number} value
 * @property {string} text
 * @property {Options[]} [options]
 * @property {string} key
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [updated_at]
 * @property {string} [status]
 * @property {string} [raw_status]
 * @property {Object} [meta]
 * @property {string} [awb]
 * @property {string} [last_location_recieved_at]
 * @property {string} [account_name]
 * @property {string} [shipment_type]
 * @property {string} [updated_time]
 * @property {string} [reason]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {Object} [meta]
 * @property {PlatformTrack[]} [results]
 */

/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [action_centre]
 * @property {FiltersInfo[]} [processed]
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [unfulfilled]
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
 * @property {string} [report_type]
 * @property {string} [report_requested_at]
 * @property {string} [report_id]
 * @property {Object} [request_details]
 * @property {string} [s3_key]
 * @property {string} [report_created_at]
 * @property {string} [status]
 * @property {string} [display_name]
 * @property {string} [report_name]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [jio_code]
 * @property {string} [article_id]
 * @property {string} [company_id]
 * @property {string} [item_id]
 */

/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */

/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [type]
 * @property {string} [message]
 * @property {string} [value]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {Object[]} [data]
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {boolean} [success]
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
 * @property {Object} [invoice]
 * @property {Object} [label]
 * @property {string} [store_name]
 * @property {Object} [data]
 * @property {string} [invoice_status]
 * @property {boolean} do_invoice_label_generated
 * @property {string} [store_code]
 * @property {string} [store_id]
 * @property {string} [company_id]
 * @property {string} batch_id
 */

/**
 * @typedef FileUploadResponse
 * @property {string} [url]
 * @property {number} [expiry]
 */

/**
 * @typedef URL
 * @property {string} [url]
 */

/**
 * @typedef FileResponse
 * @property {string} [namespace]
 * @property {string[]} [tags]
 * @property {string} [content_type]
 * @property {string} [file_name]
 * @property {number} [size]
 * @property {FileUploadResponse} [upload]
 * @property {URL} [cdn]
 * @property {string} [method]
 * @property {string} [operation]
 * @property {string} [file_path]
 */

/**
 * @typedef bulkListingData
 * @property {number} [failed]
 * @property {number} [successful]
 * @property {number} [processing]
 * @property {Object[]} [failed_shipments]
 * @property {string} [batch_id]
 * @property {Object[]} [successful_shipments]
 * @property {string} [store_name]
 * @property {string} [excel_url]
 * @property {string[]} [processing_shipments]
 * @property {string} [uploaded_on]
 * @property {number} [store_id]
 * @property {number} [company_id]
 * @property {string} [user_name]
 * @property {string} [user_id]
 * @property {number} [total]
 * @property {string} [store_code]
 * @property {string} [status]
 * @property {string} [file_name]
 * @property {string} [id]
 */

/**
 * @typedef BulkListingPage
 * @property {boolean} [has_previous]
 * @property {number} [current]
 * @property {number} [size]
 * @property {boolean} [has_next]
 * @property {number} [total]
 * @property {string} [type]
 */

/**
 * @typedef BulkListingResponse
 * @property {bulkListingData[]} [data]
 * @property {string} [error]
 * @property {boolean} [success]
 * @property {BulkListingPage} [page]
 */

/**
 * @typedef QuestionSet
 * @property {string} [display_name]
 * @property {number} [id]
 */

/**
 * @typedef Reason
 * @property {string[]} [qc_type]
 * @property {QuestionSet[]} [question_set]
 * @property {string} [display_name]
 * @property {number} [id]
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
 * @property {boolean} [status]
 * @property {string} [message]
 */

/**
 * @typedef BulkActionDetailsDataField
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [total_shipments_count]
 * @property {number} [successful_shipments_count]
 * @property {number} [failed_shipments_count]
 * @property {number} [processing_shipments_count]
 * @property {string} [company_id]
 * @property {string} [batch_id]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string[]} [error]
 * @property {string[]} [failed_records]
 * @property {string} [uploaded_by]
 * @property {string} [user_id]
 * @property {string} [uploaded_on]
 * @property {string} [success]
 * @property {string} [message]
 * @property {boolean} [status]
 */

/**
 * @typedef Dates
 * @property {Object} [delivery_date]
 * @property {string} [order_created]
 */

/**
 * @typedef AffiliateMeta
 * @property {string} [order_item_id]
 * @property {string} [coupon_code]
 * @property {string} [channel_shipment_id]
 * @property {number} [quantity]
 * @property {string} [channel_order_id]
 * @property {string} [due_date]
 * @property {number} [loyalty_discount]
 * @property {number} [size_level_total_qty]
 * @property {number} [employee_discount]
 * @property {boolean} [is_priority]
 * @property {string} [box_type]
 */

/**
 * @typedef LockData
 * @property {string} [lock_message]
 * @property {boolean} [mto]
 * @property {boolean} [locked]
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
 * @typedef BuyerDetails
 * @property {string} state
 * @property {string} city
 * @property {string} name
 * @property {string} address
 * @property {number} pincode
 * @property {string} gstin
 * @property {string} [ajio_site_id]
 */

/**
 * @typedef EInvoice
 * @property {string} [error_message]
 * @property {string} [acknowledge_date]
 * @property {string} [signed_qr_code]
 * @property {number} [acknowledge_no]
 * @property {string} [error_code]
 * @property {string} [irn]
 * @property {string} [signed_invoice]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [invoice]
 * @property {EInvoice} [credit_note]
 */

/**
 * @typedef Formatted
 * @property {string} [f_min]
 * @property {string} [f_max]
 */

/**
 * @typedef ShipmentMeta
 * @property {Object} [return_details]
 * @property {string} [dp_name]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [due_date]
 * @property {string} [return_awb_number]
 * @property {LockData} [lock_data]
 * @property {number} weight
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {string} [po_number]
 * @property {string} [store_invoice_updated_date]
 * @property {string} [box_type]
 * @property {string} [awb_number]
 * @property {Object} [bag_weight]
 * @property {string} [forward_affiliate_order_id]
 * @property {Object} [b2c_buyer_details]
 * @property {number} [return_store_node]
 * @property {number} [shipment_weight]
 * @property {string} [dp_sort_key]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [dp_id]
 * @property {string} [return_affiliate_shipment_id]
 * @property {Object} [external]
 * @property {Object} [ewaybill_info]
 * @property {boolean} same_store_available
 * @property {string} [marketplace_store_id]
 * @property {DebugInfo} [debug_info]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {string} [order_type]
 * @property {boolean} [assign_dp_from_sb]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [packaging_name]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {string} [return_affiliate_order_id]
 * @property {Object} [dp_options]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {Formatted} [formatted]
 */

/**
 * @typedef PDFLinks
 * @property {string} [label_a6]
 * @property {string} [invoice]
 * @property {string} [label]
 * @property {string} invoice_type
 * @property {string} [credit_note_url]
 * @property {string} [invoice_pos]
 * @property {string} [invoice_a4]
 * @property {string} label_type
 * @property {string} [label_pos]
 * @property {string} [po_invoice]
 * @property {string} [label_a4]
 * @property {string} [b2b]
 * @property {string} [invoice_a6]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} affiliate_shipment_id
 * @property {string} affiliate_store_id
 * @property {string} [company_affiliate_tag]
 * @property {string} [ad_id]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {string} affiliate_bag_id
 * @property {ShipmentMeta} shipment_meta
 * @property {PDFLinks} [pdf_links]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef B2BPODetails
 * @property {number} [total_gst_percentage]
 * @property {number} [po_line_amount]
 * @property {number} [item_base_price]
 * @property {boolean} [partial_can_ret]
 * @property {number} [po_tax_amount]
 * @property {string} [docker_number]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef Attributes
 * @property {string} [essential]
 * @property {string[]} [gender]
 * @property {string} [primary_color]
 * @property {string} [primary_material]
 * @property {string} [name]
 * @property {string} [marketer_address]
 * @property {string} [marketer_name]
 * @property {string} [brand_name]
 * @property {string} [primary_color_hex]
 */

/**
 * @typedef Item
 * @property {boolean} [can_return]
 * @property {number} [l3_category]
 * @property {Object} [meta]
 * @property {string} [color]
 * @property {string} [l3_category_name]
 * @property {number} brand_id
 * @property {string[]} [l2_category]
 * @property {string[]} [l1_category]
 * @property {string} [branch_url]
 * @property {string} slug_key
 * @property {number} [department_id]
 * @property {string} [webstore_product_url]
 * @property {string[]} image
 * @property {string} [code]
 * @property {number} item_id
 * @property {number} [l1_category_id]
 * @property {string} [gender]
 * @property {boolean} [can_cancel]
 * @property {Attributes} attributes
 * @property {number} [l2_category_id]
 * @property {string} size
 * @property {string} name
 * @property {string} [last_updated_at]
 * @property {string} brand
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [user]
 * @property {string} [username]
 * @property {string} [password]
 */

/**
 * @typedef Document
 * @property {string} legal_name
 * @property {string} [url]
 * @property {string} value
 * @property {boolean} verified
 * @property {string} ds_type
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */

/**
 * @typedef StoreEinvoice
 * @property {boolean} enabled
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [user]
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEwaybill} [e_waybill]
 * @property {StoreEinvoice} [e_invoice]
 */

/**
 * @typedef StoreMeta
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {StoreDocuments} [documents]
 * @property {Object} [additional_contact_details]
 * @property {string[]} [notification_emails]
 * @property {string} stage
 * @property {Object[]} [timing]
 * @property {Object} [ewaybill_portal_details]
 * @property {StoreGstCredentials} gst_credentials
 * @property {Object} [product_return_config]
 * @property {string} [gst_number]
 * @property {string} display_name
 */

/**
 * @typedef StoreAddress
 * @property {string} [address2]
 * @property {number} longitude
 * @property {string} city
 * @property {string} contact_person
 * @property {string} address1
 * @property {string} address_type
 * @property {string} [version]
 * @property {string} [area]
 * @property {string} country_code
 * @property {string} address_category
 * @property {string} [landmark]
 * @property {number} pincode
 * @property {string} country
 * @property {string} state
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} [email]
 * @property {string} phone
 * @property {number} latitude
 */

/**
 * @typedef Store
 * @property {string} [address2]
 * @property {number} longitude
 * @property {StoreMeta} meta
 * @property {string} city
 * @property {string} [mall_area]
 * @property {number} [alohomora_user_id]
 * @property {number} [parent_store_id]
 * @property {Object} [brand_id]
 * @property {string} fulfillment_channel
 * @property {string} contact_person
 * @property {string} address1
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} location_type
 * @property {string} [order_integration_id]
 * @property {string} [code]
 * @property {boolean} [is_active]
 * @property {number} company_id
 * @property {StoreAddress} [store_address_json]
 * @property {string} [mall_name]
 * @property {string} store_email
 * @property {string} [vat_no]
 * @property {boolean} [is_archived]
 * @property {string} pincode
 * @property {string} login_username
 * @property {string} country
 * @property {string[]} [brand_store_tags]
 * @property {string} state
 * @property {number} [packaging_material_count]
 * @property {string} [store_active_from]
 * @property {string} created_at
 * @property {string} [updated_at]
 * @property {string} name
 * @property {number} phone
 * @property {number} latitude
 * @property {string} s_id
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_active
 * @property {boolean} enable_tracking
 * @property {boolean} is_returnable
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} can_be_cancelled
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {number} [loyalty_discount]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {number} [employee_discount]
 * @property {string} affiliate_bag_id
 */

/**
 * @typedef BagGSTDetails
 * @property {number} tax_collected_at_source
 * @property {string} hsn_code
 * @property {number} gst_tax_percentage
 * @property {boolean} [is_default_hsn_code]
 * @property {number} cgst_tax_percentage
 * @property {string} sgst_gst_fee
 * @property {number} igst_tax_percentage
 * @property {string} gst_tag
 * @property {number} sgst_tax_percentage
 * @property {string} [gstin_code]
 * @property {string} hsn_code_id
 * @property {number} gst_fee
 * @property {string} cgst_gst_fee
 * @property {string} igst_gst_fee
 * @property {number} value_of_good
 * @property {number} brand_calculated_amount
 */

/**
 * @typedef ReturnConfig
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */

/**
 * @typedef Dimensions
 * @property {number} [height]
 * @property {string} [unit]
 * @property {number} [length]
 * @property {number} [width]
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
 * @property {ReturnConfig} [return_config]
 * @property {string} size
 * @property {boolean} [is_set]
 * @property {Object} [child_details]
 * @property {Object} [a_set]
 * @property {Dimensions} [dimensions]
 * @property {Weight} [weight]
 * @property {string} uid
 * @property {Object} [raw_meta]
 * @property {string} [code]
 * @property {Object} [esp_modified]
 * @property {Identifier} identifiers
 * @property {string} _id
 * @property {string} seller_identifier
 */

/**
 * @typedef Brand
 * @property {string} [invoice_prefix]
 * @property {string} [pickup_location]
 * @property {string} company
 * @property {string} [script_last_ran]
 * @property {number} [created_on]
 * @property {boolean} [is_virtual_invoice]
 * @property {number} [credit_note_expiry_days]
 * @property {string} [start_date]
 * @property {boolean} [credit_note_allowed]
 * @property {number} [modified_on]
 * @property {number} brand_id
 * @property {string} [logo]
 * @property {string} brand_name
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {string} [shipment_id]
 * @property {Dates} [dates]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {BagMeta} [meta]
 * @property {Item} item
 * @property {number} [bag_update_time]
 * @property {string} journey_type
 * @property {string} [display_name]
 * @property {string[]} [tags]
 * @property {number} b_id
 * @property {Object[]} [applied_promos]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {Prices} prices
 * @property {Store} [ordering_store]
 * @property {BagStatusHistory} current_status
 * @property {string} [order_integration_id]
 * @property {string} [entity_type]
 * @property {Object} [restore_promos]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {number[]} [original_bag_list]
 * @property {Object} [qc_required]
 * @property {number} [quantity]
 * @property {Object[]} [reasons]
 * @property {BagStatusHistory} current_operational_status
 * @property {string} [b_type]
 * @property {BagReturnableCancelableStatus} status
 * @property {string} [seller_identifier]
 * @property {ArticleDetails} [article_details]
 * @property {number} [line_number]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {BagGSTDetails} gst_details
 * @property {Object} [parent_promo_bags]
 * @property {number} [no_of_bags_order]
 * @property {boolean} [restore_coupon]
 * @property {Article} article
 * @property {Brand} brand
 * @property {BagStatusHistory[]} bag_status
 * @property {string} [operational_status]
 * @property {string} [identifier]
 */

/**
 * @typedef ErrorResponse
 * @property {string} error
 * @property {string} message
 */

/**
 * @typedef Page1
 * @property {string} page_type
 * @property {number} current
 * @property {number} item_total
 * @property {number} size
 * @property {boolean} has_next
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
 * @property {string} [error]
 * @property {string} [shipment_id]
 * @property {number} [status]
 * @property {string} [message]
 */

/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */

/**
 * @typedef ErrorResponse1
 * @property {number} status
 * @property {string} message
 * @property {string} [error_trace]
 */

/**
 * @typedef StoreReassign
 * @property {number[]} [reason_ids]
 * @property {string} [set_id]
 * @property {number} [bag_id]
 * @property {string} [affiliate_order_id]
 * @property {string} [mongo_article_id]
 * @property {string} [affiliate_id]
 * @property {string} [item_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [fynd_order_id]
 * @property {number} store_id
 */

/**
 * @typedef StoreReassignResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Entities
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_order_id]
 * @property {string} [id]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} reason_text
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} entity_type
 * @property {string} action_type
 * @property {string} action
 * @property {Entities[]} entities
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef Bags
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_bag_id]
 * @property {number} [bag_id]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef CheckResponse
 * @property {boolean} [is_shipment_locked]
 * @property {string} [shipment_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [status]
 * @property {OriginalFilter} [original_filter]
 * @property {string} [affiliate_id]
 * @property {boolean} [lock_status]
 * @property {boolean} [is_bag_locked]
 * @property {Bags[]} [bags]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {boolean} [success]
 * @property {CheckResponse[]} [check_response]
 * @property {string} [message]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [created_at]
 * @property {string} [platform_name]
 * @property {string} [to_datetime]
 * @property {string} [platform_id]
 * @property {string} [title]
 * @property {string} [from_datetime]
 * @property {string} [description]
 * @property {number} id
 * @property {string} [logo_url]
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
 * @typedef Products
 * @property {number} [quantity]
 * @property {number} [line_number]
 * @property {string} [identifier]
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {number} [line_number]
 * @property {string} [identifier]
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
 * @typedef ProductsReasonsFilters
 * @property {number} [quantity]
 * @property {number} [line_number]
 * @property {string} [identifier]
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
 * @typedef ReasonsData
 * @property {ProductsReasons[]} [products]
 * @property {EntitiesReasons[]} [entities]
 */

/**
 * @typedef ShipmentsRequest
 * @property {Products[]} [products]
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier
 * @property {ReasonsData} [reasons]
 */

/**
 * @typedef StatuesRequest
 * @property {string} [exclude_bags_next_state]
 * @property {string} [status]
 * @property {ShipmentsRequest[]} [shipments]
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
 * @property {string} [code]
 * @property {number} [status]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {string} [stack_trace]
 * @property {Object} [final_state]
 * @property {Object} [meta]
 * @property {string} [identifier]
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
 * @property {string} pincode
 * @property {number} phone
 * @property {string} first_name
 * @property {string} [address2]
 * @property {string} [address1]
 * @property {string} city
 * @property {string} state
 * @property {string} email
 * @property {string} country
 * @property {number} mobile
 * @property {string} last_name
 */

/**
 * @typedef UserData
 * @property {OrderUser} [billing_user]
 * @property {OrderUser} [shipping_user]
 */

/**
 * @typedef ArticleDetails1
 * @property {string} _id
 * @property {Object} weight
 * @property {Object} category
 * @property {Object} dimension
 * @property {number} quantity
 * @property {number} brand_id
 * @property {Object} attributes
 */

/**
 * @typedef LocationDetails
 * @property {ArticleDetails1[]} articles
 * @property {number} fulfillment_id
 * @property {string} fulfillment_type
 */

/**
 * @typedef ShipmentDetails
 * @property {number} fulfillment_id
 * @property {string} affiliate_shipment_id
 * @property {number} [dp_id]
 * @property {ArticleDetails1[]} articles
 * @property {string} [box_type]
 * @property {Object} [meta]
 * @property {number} shipments
 */

/**
 * @typedef ShipmentConfig
 * @property {string} to_pincode
 * @property {LocationDetails} [location_details]
 * @property {string} action
 * @property {ShipmentDetails[]} shipment
 * @property {string} payment_mode
 * @property {string} journey
 * @property {string} source
 * @property {string} identifier
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderPriority
 * @property {number} [fulfilment_priority]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [affiliate_priority_code]
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */

/**
 * @typedef AffiliateBag
 * @property {Object} affiliate_meta
 * @property {string} modified_on
 * @property {string} _id
 * @property {string} hsn_code_id
 * @property {string} item_size
 * @property {number} amount_paid
 * @property {number} price_marked
 * @property {number} delivery_charge
 * @property {string} fynd_store_id
 * @property {string} seller_identifier
 * @property {string} sku
 * @property {number} item_id
 * @property {number} transfer_price
 * @property {number} avl_qty
 * @property {Object} identifier
 * @property {number} store_id
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} discount
 * @property {number} unit_price
 * @property {string} affiliate_store_id
 * @property {number} quantity
 * @property {number} price_effective
 * @property {number} company_id
 */

/**
 * @typedef OrderInfo
 * @property {string} [coupon]
 * @property {UserData} user
 * @property {OrderUser} billing_address
 * @property {Object} [payment]
 * @property {Object} items
 * @property {ShipmentData} [shipment]
 * @property {string} payment_mode
 * @property {string} [affiliate_order_id]
 * @property {number} order_value
 * @property {number} discount
 * @property {number} cod_charges
 * @property {OrderPriority} [order_priority]
 * @property {OrderUser} shipping_address
 * @property {number} delivery_charges
 * @property {AffiliateBag[]} bags
 */

/**
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
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
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} created_at
 * @property {string} [description]
 * @property {string} token
 * @property {string} id
 * @property {string} secret
 * @property {string} owner
 * @property {string} name
 * @property {string} updated_at
 * @property {AffiliateAppConfigMeta[]} [meta]
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateInventoryConfig} [inventory]
 * @property {AffiliateAppConfig} [app]
 */

/**
 * @typedef Affiliate
 * @property {AffiliateConfig} [config]
 * @property {string} id
 * @property {string} token
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {string} marketplace_store_id
 * @property {number} store_id
 */

/**
 * @typedef OrderConfig
 * @property {string} [article_lookup]
 * @property {Affiliate} affiliate
 * @property {string} [store_lookup]
 * @property {boolean} [create_user]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [bag_end_state]
 */

/**
 * @typedef CreateOrderPayload
 * @property {string} affiliate_id
 * @property {OrderInfo} order_info
 * @property {OrderConfig} order_config
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
 * @property {string} display_text
 * @property {string} slug
 * @property {number} id
 * @property {string} description
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef HistoryDict
 * @property {string} user
 * @property {string} [ticket_url]
 * @property {string} [l3_detail]
 * @property {number} [bag_id]
 * @property {string} message
 * @property {string} [ticket_id]
 * @property {string} [l1_detail]
 * @property {string} type
 * @property {string} createdat
 * @property {string} [l2_detail]
 */

/**
 * @typedef ShipmentHistoryResponse
 * @property {HistoryDict[]} [activity_history]
 */

/**
 * @typedef ErrorDetail
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef SmsDataPayload
 * @property {number} shipment_id
 * @property {string} payment_mode
 * @property {string} order_id
 * @property {string} message
 * @property {string} brand_name
 * @property {number} phone_number
 * @property {string} country_code
 * @property {number} amount_paid
 * @property {string} customer_name
 */

/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {number} bag_id
 * @property {SmsDataPayload} [data]
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
 * @property {number[]} [bag_list]
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {number} id
 * @property {Meta} meta
 * @property {string} [remarks]
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
 * @property {string} qc_required
 * @property {string[]} [shipment_ids]
 * @property {string} order_type
 * @property {number} dp_id
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */

/**
 * @typedef Tax
 * @property {Object[]} [breakup]
 * @property {Object} amount
 * @property {string} name
 * @property {number} rate
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
 * @typedef BillingInfo
 * @property {string} [alternate_email]
 * @property {string} country
 * @property {string} [title]
 * @property {string} [external_customer_code]
 * @property {string} primary_email
 * @property {string} [gender]
 * @property {string} state
 * @property {string} [country_code]
 * @property {string} [floor_no]
 * @property {string} pincode
 * @property {string} [house_no]
 * @property {string} [address2]
 * @property {string} address1
 * @property {string} city
 * @property {string} [alternate_mobile_number]
 * @property {string} [middle_name]
 * @property {string} first_name
 * @property {string} [customer_code]
 * @property {string} [state_code]
 * @property {string} primary_mobile_number
 * @property {string} [last_name]
 */

/**
 * @typedef PaymentMethod
 * @property {string} collect_by
 * @property {Object} [transaction_data]
 * @property {number} amount
 * @property {string} name
 * @property {string} mode
 * @property {string} refund_by
 * @property {Object} [meta]
 */

/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */

/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 */

/**
 * @typedef ShippingInfo
 * @property {string} [alternate_email]
 * @property {string} country
 * @property {string} [title]
 * @property {string} [external_customer_code]
 * @property {string} primary_email
 * @property {string} [gender]
 * @property {string} state
 * @property {string} [landmark]
 * @property {string} [country_code]
 * @property {string} [floor_no]
 * @property {string} pincode
 * @property {string} [house_no]
 * @property {string} [address2]
 * @property {string} address1
 * @property {string} city
 * @property {string} [address_type]
 * @property {string} [alternate_mobile_number]
 * @property {string} [middle_name]
 * @property {string} [shipping_type]
 * @property {Object[]} [slot]
 * @property {string} first_name
 * @property {string} [customer_code]
 * @property {string} [state_code]
 * @property {string} primary_mobile_number
 * @property {Object} [geo_location]
 * @property {string} [last_name]
 */

/**
 * @typedef ProcessingDates
 * @property {Object} [dp_pickup_slot]
 * @property {string} [confirm_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [dispatch_by_date]
 * @property {string} [pack_by_date]
 * @property {string} [dispatch_after_date]
 */

/**
 * @typedef LineItem
 * @property {Charge[]} [charges]
 * @property {string} [external_line_id]
 * @property {number} [quantity]
 * @property {string} seller_identifier
 * @property {string} [custom_messasge]
 * @property {Object} [meta]
 */

/**
 * @typedef Shipment
 * @property {ProcessingDates} [processing_dates]
 * @property {string} [external_shipment_id]
 * @property {number} [priority]
 * @property {LineItem[]} line_items
 * @property {number} location_id
 * @property {Object} [meta]
 */

/**
 * @typedef CreateOrderAPI
 * @property {Object} [currency_info]
 * @property {Charge[]} [charges]
 * @property {string} [external_creation_date]
 * @property {BillingInfo} billing_info
 * @property {PaymentInfo} payment_info
 * @property {TaxInfo} [tax_info]
 * @property {string} [external_order_id]
 * @property {Object} [meta]
 * @property {ShippingInfo} shipping_info
 * @property {Shipment[]} shipments
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [code]
 * @property {number} status
 * @property {string} [exception]
 * @property {string} message
 * @property {string} [stack_trace]
 * @property {string} [request_id]
 * @property {string} [meta]
 * @property {Object} [info]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [collect_by]
 * @property {string} [refund_by]
 * @property {string} [mode]
 */

/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [mode_of_payment]
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [source]
 */

/**
 * @typedef CreateChannelConfig
 * @property {DpConfiguration} [dp_configuration]
 * @property {string} [shipment_assignment]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {string[]} [lock_states]
 * @property {boolean} [location_reassignment]
 * @property {Object} [logo_url]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [is_upserted]
 * @property {boolean} [acknowledged]
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
 * @property {string} start_date
 * @property {FyndOrderIdList[]} [order_details]
 * @property {number} mobile
 * @property {string} end_date
 */

/**
 * @typedef SearchKeywordResult
 * @property {string} sort_on
 * @property {Object} query
 */

/**
 * @typedef CreateSearchKeyword
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {SearchKeywordResult} result
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetSearchWordsData
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {Object} [result]
 * @property {string} [uid]
 * @property {string[]} [words]
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
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef AutocompletePageAction
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef AutocompleteAction
 * @property {AutocompletePageAction} [page]
 * @property {string} [type]
 */

/**
 * @typedef AutocompleteResult
 * @property {Object} [_custom_json]
 * @property {Media} [logo]
 * @property {AutocompleteAction} [action]
 * @property {string} [display]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {AutocompleteResult[]} [results]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {string} [app_id]
 * @property {string} [uid]
 * @property {string[]} [words]
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
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {Object[]} [results]
 * @property {string[]} [words]
 */

/**
 * @typedef ProductBundleItem
 * @property {boolean} [auto_select]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} min_quantity
 * @property {number} product_uid
 * @property {number} max_quantity
 * @property {boolean} [allow_remove]
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {ProductBundleItem[]} products
 * @property {string} slug
 * @property {string} choice
 * @property {boolean} is_active
 * @property {boolean} [same_store_assignment]
 * @property {Object} [meta]
 * @property {string} [id]
 * @property {string} name
 * @property {Object} [modified_by]
 * @property {string} [logo]
 * @property {string} [modified_on]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {Page} [page]
 * @property {GetProductBundleCreateResponse[]} [items]
 */

/**
 * @typedef ProductBundleRequest
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {ProductBundleItem[]} products
 * @property {string} slug
 * @property {string} choice
 * @property {boolean} is_active
 * @property {boolean} [same_store_assignment]
 * @property {Object} [meta]
 * @property {string} name
 * @property {Object} [modified_by]
 * @property {string} [logo]
 * @property {string} [modified_on]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {ProductBundleItem[]} products
 * @property {string} slug
 * @property {string} choice
 * @property {boolean} is_active
 * @property {boolean} [same_store_assignment]
 * @property {Object} [meta]
 * @property {string} name
 * @property {Object} [modified_by]
 * @property {string} [logo]
 * @property {string} [modified_on]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 */

/**
 * @typedef Price
 * @property {number} [min_effective]
 * @property {number} [min_marked]
 * @property {number} [max_effective]
 * @property {string} [currency]
 * @property {number} [max_marked]
 */

/**
 * @typedef Size
 * @property {boolean} [is_available]
 * @property {number} [quantity]
 * @property {string} [display]
 * @property {string} [value]
 */

/**
 * @typedef LimitedProductData
 * @property {Object} [price]
 * @property {string} [short_description]
 * @property {string} [slug]
 * @property {string[]} [sizes]
 * @property {string} [country_of_origin]
 * @property {string[]} [images]
 * @property {number} [uid]
 * @property {number} [quantity]
 * @property {string} [name]
 * @property {string} [item_code]
 * @property {Object} [identifier]
 * @property {Object} [attributes]
 */

/**
 * @typedef GetProducts
 * @property {Price} [price]
 * @property {boolean} [auto_select]
 * @property {boolean} [auto_add_to_cart]
 * @property {Size[]} [sizes]
 * @property {number} [product_uid]
 * @property {number} [min_quantity]
 * @property {LimitedProductData} [product_details]
 * @property {number} [max_quantity]
 * @property {boolean} [allow_remove]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {GetProducts[]} [products]
 * @property {string} [slug]
 * @property {string} [choice]
 * @property {boolean} [is_active]
 * @property {boolean} [same_store_assignment]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
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
 * @property {string} title
 * @property {string} [image]
 * @property {number} [brand_id]
 * @property {Object} [created_by]
 * @property {string} [tag]
 * @property {string} [created_on]
 * @property {boolean} [active]
 * @property {string} [id]
 * @property {string} name
 * @property {Object} [modified_by]
 * @property {Guide} [guide]
 * @property {string} [subtitle]
 * @property {string} [description]
 * @property {string} [modified_on]
 * @property {number} [company_id]
 */

/**
 * @typedef SizeGuideResponse
 * @property {Object} [created_by]
 * @property {string} [title]
 * @property {number} [brand_id]
 * @property {string} [created_on]
 * @property {string} [tag]
 * @property {boolean} [active]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Object} [modified_by]
 * @property {Object} [guide]
 * @property {string} [modified_on]
 * @property {string} [subtitle]
 * @property {number} [company_id]
 */

/**
 * @typedef MOQData
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 * @property {number} [minimum]
 */

/**
 * @typedef SEOData
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {Object} [alt_text]
 * @property {MOQData} [moq]
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 * @property {SEOData} [seo]
 */

/**
 * @typedef MetaFields
 * @property {Object} key
 * @property {Object} value
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 * @property {number} [minimum]
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {boolean} [is_gift]
 * @property {MetaFields[]} [_custom_meta]
 * @property {Object} [_custom_json]
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 * @property {ApplicationItemMOQ} [moq]
 * @property {ApplicationItemSEO} [seo]
 */

/**
 * @typedef SuccessResponse1
 * @property {boolean} [success]
 * @property {number} [uid]
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
 * @property {string} [slug]
 * @property {boolean} is_active
 * @property {string} display_type
 * @property {number} priority
 * @property {string} name
 * @property {string} [unit]
 * @property {string} [logo]
 * @property {string} [key]
 */

/**
 * @typedef AppConfigurationDetail
 * @property {boolean} is_default
 * @property {string} slug
 * @property {boolean} is_active
 * @property {string} app_id
 * @property {number} priority
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string[]} [template_slugs]
 * @property {AttributeDetailsGroup[]} [attributes]
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {boolean} is_default
 * @property {boolean} is_active
 * @property {string} app_id
 * @property {string} default_key
 * @property {number} priority
 * @property {string} [name]
 * @property {string} [logo]
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
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [similar]
 * @property {Object} [compare]
 * @property {Object} [detail]
 * @property {Object} [variant]
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
 * @typedef MetaDataListingFilterMetaResponse
 * @property {string[]} [filter_types]
 * @property {string} [key]
 * @property {Object[]} [units]
 * @property {string} [display]
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
 * @typedef GetCatalogConfigurationMetaData
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {MetaDataListingResponse} [listing]
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} key
 */

/**
 * @typedef ConfigurationListingSort
 * @property {ConfigurationListingSortConfig[]} [config]
 * @property {string} default_key
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
 * @property {string} [value]
 * @property {Object[]} [map_values]
 * @property {string} [sort]
 * @property {string} [condition]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} type
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} key
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 * @property {boolean} allow_single
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
 * @typedef ConfigurationProductConfig
 * @property {string} [title]
 * @property {boolean} is_active
 * @property {number} priority
 * @property {ProductSize} [size]
 * @property {string} [logo]
 * @property {string} key
 * @property {string} [subtitle]
 */

/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {boolean} is_active
 * @property {string} display_type
 * @property {number} priority
 * @property {string} name
 * @property {ProductSize} size
 * @property {string} [logo]
 * @property {string} key
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
 * @typedef AppCatalogConfiguration
 * @property {Object} [created_by]
 * @property {string} [config_id]
 * @property {string} [created_on]
 * @property {ConfigurationListing} [listing]
 * @property {string} [type]
 * @property {string} app_id
 * @property {string} [id]
 * @property {ConfigurationProduct} [product]
 * @property {Object} [modified_by]
 * @property {string} config_type
 * @property {string} [modified_on]
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef AppConfiguration
 * @property {Object} [created_by]
 * @property {string} [config_id]
 * @property {string} [created_on]
 * @property {ConfigurationListing} [listing]
 * @property {string} [type]
 * @property {string} app_id
 * @property {ConfigurationProduct} [product]
 * @property {Object} [modified_by]
 * @property {string} config_type
 * @property {string} [modified_on]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [sort]
 * @property {Object} [filter]
 */

/**
 * @typedef EntityConfiguration
 * @property {string} [config_id]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {string} app_id
 * @property {string} [id]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} config_type
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} display
 * @property {string[]} [operators]
 * @property {string} [kind]
 * @property {string} name
 * @property {string} [logo]
 */

/**
 * @typedef ProductFiltersValue
 * @property {number} [min]
 * @property {number} [selected_max]
 * @property {string} display
 * @property {number} [count]
 * @property {number} [max]
 * @property {string} [currency_symbol]
 * @property {Object} value
 * @property {boolean} is_selected
 * @property {string} [currency_code]
 * @property {string} [query_format]
 * @property {string} [display_format]
 * @property {number} [selected_min]
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values
 */

/**
 * @typedef ProductSortOn
 * @property {string} [name]
 * @property {string} [value]
 * @property {boolean} [is_selected]
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Object} operators
 */

/**
 * @typedef CollectionListingFilterType
 * @property {string} [name]
 * @property {string} [display]
 * @property {boolean} [is_selected]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {string} [name]
 * @property {string} [display]
 * @property {boolean} [is_selected]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterType[]} [type]
 * @property {CollectionListingFilterTag[]} [tags]
 */

/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {string} op
 * @property {Object[]} value
 */

/**
 * @typedef Media1
 * @property {Object} [meta]
 * @property {string} [type]
 * @property {string} url
 */

/**
 * @typedef BannerImage
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [portrait]
 * @property {BannerImage} [landscape]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {Object} [cron]
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 * @property {string[]} [tag]
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [badge]
 * @property {Media1} [logo]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {Object} [meta]
 * @property {ImageUrls} [banners]
 * @property {string} [type]
 * @property {Object} [_schedule]
 * @property {Action} [action]
 * @property {string} [uid]
 * @property {string} [name]
 * @property {boolean} [allow_facets]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {Page} [page]
 * @property {GetCollectionDetailNest[]} [items]
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
 * @typedef UserInfo
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [email]
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
 * @typedef CollectionSchedule
 * @property {string} [end]
 * @property {string} [cron]
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [start]
 * @property {number} [duration]
 */

/**
 * @typedef CreateCollection
 * @property {string} [sort_on]
 * @property {boolean} [allow_sort]
 * @property {boolean} [published]
 * @property {string} [description]
 * @property {string} slug
 * @property {number} [priority]
 * @property {CollectionQuery[]} [query]
 * @property {CollectionBadge} [badge]
 * @property {Object} [_locale_language]
 * @property {CollectionImage} logo
 * @property {string[]} [visible_facets_keys]
 * @property {UserInfo} [created_by]
 * @property {boolean} [is_active]
 * @property {string} app_id
 * @property {Object} [meta]
 * @property {boolean} [is_visible]
 * @property {Object} [_custom_json]
 * @property {CollectionBanner} banners
 * @property {UserInfo} [modified_by]
 * @property {string[]} [tags]
 * @property {SeoDetail} [seo]
 * @property {string} type
 * @property {CollectionSchedule} [_schedule]
 * @property {string} name
 * @property {boolean} [allow_facets]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {Object} [cron]
 * @property {string} [sort_on]
 * @property {boolean} [allow_sort]
 * @property {string} [description]
 * @property {string[]} [tag]
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [badge]
 * @property {BannerImage} [logo]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {Object} [meta]
 * @property {ImageUrls} [banners]
 * @property {string} [type]
 * @property {Object} [_schedule]
 * @property {string} [name]
 * @property {boolean} [allow_facets]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {Object} [cron]
 * @property {string[]} [tag]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {Object} [_schedule]
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {boolean} [allow_sort]
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [allow_facets]
 * @property {Object} [badge]
 * @property {Media1} [logo]
 * @property {string} [description]
 * @property {string[]} [visible_facets_keys]
 */

/**
 * @typedef UpdateCollection
 * @property {string} [sort_on]
 * @property {boolean} [allow_sort]
 * @property {boolean} [published]
 * @property {string} [description]
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {CollectionQuery[]} [query]
 * @property {CollectionBadge} [badge]
 * @property {Object} [_locale_language]
 * @property {CollectionImage} [logo]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [is_active]
 * @property {Object} [meta]
 * @property {boolean} [is_visible]
 * @property {Object} [_custom_json]
 * @property {CollectionBanner} [banners]
 * @property {UserInfo} [modified_by]
 * @property {string[]} [tags]
 * @property {SeoDetail} [seo]
 * @property {string} [type]
 * @property {CollectionSchedule} [_schedule]
 * @property {string} [name]
 * @property {boolean} [allow_facets]
 */

/**
 * @typedef Price1
 * @property {number} [min]
 * @property {number} [max]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [marked]
 * @property {Price1} [effective]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [key]
 * @property {string} [type]
 * @property {string} [value]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title]
 * @property {ProductDetailAttribute[]} [details]
 */

/**
 * @typedef ProductBrand
 * @property {Media1} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Action} [action]
 */

/**
 * @typedef ProductListingDetail
 * @property {Object} [promo_meta]
 * @property {boolean} [sellable]
 * @property {Object} [attributes]
 * @property {string} [description]
 * @property {string} [discount]
 * @property {string[]} [tryouts]
 * @property {Media1[]} [medias]
 * @property {string} [item_type]
 * @property {ProductListingPrice} [price]
 * @property {string} slug
 * @property {string} [color]
 * @property {number} [rating]
 * @property {string} [product_online_date]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string[]} [highlights]
 * @property {number} [rating_count]
 * @property {Object} [teaser_tag]
 * @property {ProductBrand} [brand]
 * @property {boolean} [has_variant]
 * @property {string} [short_description]
 * @property {string} [type]
 * @property {string[]} [similars]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [image_nature]
 * @property {string} [item_code]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductFilters[]} [filters]
 * @property {Page} [page]
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductListingDetail[]} [items]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {string} [action]
 * @property {number} [item_id]
 */

/**
 * @typedef CollectionItemRequest
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 */

/**
 * @typedef UpdatedResponse
 * @property {string} [message]
 * @property {number[]} [items_not_updated]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [available_articles]
 * @property {number} [available_sizes]
 * @property {number} [article_freshness]
 * @property {number} [total_articles]
 * @property {string} [name]
 * @property {number} [total_sizes]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [out_of_stock_count]
 * @property {number} [sellable_count]
 * @property {number} [count]
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
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 * @property {boolean} [enabled]
 * @property {string} opt_level
 * @property {string} [platform]
 * @property {number} [company_id]
 */

/**
 * @typedef CompanyOptIn
 * @property {Object} [created_by]
 * @property {number} created_on
 * @property {number[]} brand_ids
 * @property {number[]} store_ids
 * @property {boolean} enabled
 * @property {string} opt_level
 * @property {Object} [modified_by]
 * @property {string} platform
 * @property {number} modified_on
 * @property {number} company_id
 */

/**
 * @typedef GetOptInPlatform
 * @property {Page} page
 * @property {CompanyOptIn[]} items
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [business_type]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [company_type]
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
 * @property {number} [store]
 * @property {number} [brand]
 * @property {string} [company]
 */

/**
 * @typedef StoreDetail
 * @property {Object[]} [documents]
 * @property {string} [created_on]
 * @property {Object} [address]
 * @property {Object[]} [additional_contacts]
 * @property {string} [store_type]
 * @property {number} [uid]
 * @property {string} [display_name]
 * @property {string} [store_code]
 * @property {string} [name]
 * @property {Object} [timing]
 * @property {Object} [manager]
 * @property {string} [modified_on]
 * @property {number} [company_id]
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
 * @property {AttributeSchemaRange} [range]
 * @property {string} type
 * @property {boolean} [mandatory]
 * @property {string[]} [allowed_values]
 * @property {string} [format]
 * @property {boolean} [multi]
 */

/**
 * @typedef AttributeMasterFilter
 * @property {number} [priority]
 * @property {string[]} [depends_on]
 * @property {boolean} indexing
 */

/**
 * @typedef GenderDetail
 * @property {AttributeMasterDetails} [details]
 * @property {string} [slug]
 * @property {string} [logo]
 * @property {AttributeMasterMeta} [meta]
 * @property {AttributeMaster} [schema]
 * @property {boolean} [is_nested]
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [id]
 * @property {AttributeMasterFilter} [filters]
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
 * @property {Object} [errors]
 * @property {string} [message]
 * @property {string} [code]
 */

/**
 * @typedef UserSerializer
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [uid]
 * @property {string} [_id]
 * @property {string} [username]
 */

/**
 * @typedef GetDepartment
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {string} [item_type]
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {number} [priority_order]
 * @property {boolean} [is_active]
 * @property {number} [page_size]
 * @property {number} [uid]
 * @property {number} [page_no]
 * @property {string} [name]
 * @property {UserSerializer} [modified_by]
 * @property {string} [logo]
 * @property {string} [search]
 * @property {string} [modified_on]
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
 * @property {Object} [errors]
 * @property {string} [message]
 * @property {string} [code]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string[]} [synonyms]
 * @property {string} [slug]
 * @property {number} priority_order
 * @property {string} [_cls]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {Object} [platforms]
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {string[]} [tags]
 * @property {string} logo
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
 * @typedef UserDetail
 * @property {string} user_id
 * @property {boolean} [super_user]
 * @property {string} [contact]
 * @property {string} username
 */

/**
 * @typedef DepartmentModel
 * @property {UserDetail} [created_by]
 * @property {string} created_on
 * @property {Object} [slug]
 * @property {Object[]} [synonyms]
 * @property {number} priority_order
 * @property {string} [verified_on]
 * @property {boolean} [is_active]
 * @property {Object} [_cls]
 * @property {Object} [_id]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {Object} name
 * @property {UserDetail} [modified_by]
 * @property {UserDetail} [verified_by]
 * @property {Object} logo
 * @property {string} modified_on
 */

/**
 * @typedef ProductTemplate
 * @property {Object} [created_by]
 * @property {string[]} [categories]
 * @property {string} [created_on]
 * @property {string} [tag]
 * @property {string} slug
 * @property {boolean} [is_archived]
 * @property {boolean} [is_active]
 * @property {Object[]} [attributes_schema]
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {Object} [modified_by]
 * @property {string} [logo]
 * @property {boolean} [is_expirable]
 * @property {string[]} [attributes]
 * @property {string} [description]
 * @property {boolean} is_physical
 * @property {string} [modified_on]
 */

/**
 * @typedef TemplatesResponse
 * @property {Page} [page]
 * @property {ProductTemplate} [items]
 */

/**
 * @typedef Properties
 * @property {Object} [no_of_boxes]
 * @property {Object} [size_guide]
 * @property {Object} [description]
 * @property {Object} [multi_size]
 * @property {Object} [item_type]
 * @property {Object} [variants]
 * @property {Object} [slug]
 * @property {Object} [product_group_tag]
 * @property {Object} [trader]
 * @property {Object} [command]
 * @property {Object} [custom_order]
 * @property {Object} [brand_uid]
 * @property {Object} [hsn_code]
 * @property {Object} [category_slug]
 * @property {Object} [is_active]
 * @property {Object} [highlights]
 * @property {Object} [teaser_tag]
 * @property {Object} [media]
 * @property {Object} [tags]
 * @property {Object} [trader_type]
 * @property {Object} [return_config]
 * @property {Object} [short_description]
 * @property {Object} [product_publish]
 * @property {Object} [country_of_origin]
 * @property {Object} [sizes]
 * @property {Object} [currency]
 * @property {Object} [name]
 * @property {Object} [item_code]
 * @property {Object} [is_dependent]
 */

/**
 * @typedef GlobalValidation
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [definitions]
 * @property {Properties} [properties]
 * @property {string[]} [required]
 * @property {string} [description]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {string[]} [categories]
 * @property {string} [tag]
 * @property {string} slug
 * @property {boolean} [is_archived]
 * @property {boolean} [is_active]
 * @property {Object[]} [attributes_schema]
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {string} [id]
 * @property {string} [logo]
 * @property {boolean} [is_expirable]
 * @property {string[]} [attributes]
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
 * @property {VerifiedBy} [created_by]
 * @property {number} [seller_id]
 * @property {string} [task_id]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [status]
 * @property {Object} [template_tags]
 * @property {string} [id]
 * @property {string} [url]
 * @property {string} [completed_on]
 * @property {string} [trigger_on]
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
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [google]
 * @property {CategoryMappingValues} [facebook]
 */

/**
 * @typedef Media2
 * @property {string} logo
 * @property {string} portrait
 * @property {string} landscape
 */

/**
 * @typedef Hierarchy
 * @property {number} l2
 * @property {number} department
 * @property {number} l1
 */

/**
 * @typedef Category
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string[]} [tryouts]
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {CategoryMapping} [marketplaces]
 * @property {boolean} is_active
 * @property {number} [uid]
 * @property {number} [priority]
 * @property {number[]} departments
 * @property {number} level
 * @property {string} name
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {Media2} [media]
 * @property {string} [modified_on]
 * @property {Hierarchy[]} [hierarchy]
 */

/**
 * @typedef CategoryResponse
 * @property {Page} [page]
 * @property {Category[]} [items]
 */

/**
 * @typedef CategoryRequestBody
 * @property {string[]} [tryouts]
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {CategoryMapping} [marketplaces]
 * @property {boolean} is_active
 * @property {number} [priority]
 * @property {number[]} departments
 * @property {number} level
 * @property {string} name
 * @property {Media2} [media]
 * @property {Hierarchy[]} [hierarchy]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {string} [message]
 * @property {number} [uid]
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
 * @typedef NetQuantityResponse
 * @property {string} [unit]
 * @property {number} [value]
 */

/**
 * @typedef Image
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef Logo
 * @property {string} [secure_url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef ReturnConfigResponse
 * @property {string} [unit]
 * @property {number} [time]
 * @property {boolean} [returnable]
 */

/**
 * @typedef ProductPublished
 * @property {boolean} [is_set]
 * @property {number} [product_online_date]
 */

/**
 * @typedef Product
 * @property {string} [created_on]
 * @property {number} [no_of_boxes]
 * @property {number} [company_id]
 * @property {string} [primary_color]
 * @property {Object} [tax_identifier]
 * @property {string} [size_guide]
 * @property {boolean} [is_set]
 * @property {Object} [variant_media]
 * @property {number[]} [departments]
 * @property {Object} [attributes]
 * @property {string} [description]
 * @property {boolean} [is_physical]
 * @property {boolean} [is_expirable]
 * @property {boolean} [multi_size]
 * @property {string} [item_type]
 * @property {Object} [variants]
 * @property {string} [slug]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {string} [color]
 * @property {string} [template_tag]
 * @property {string[]} [product_group_tag]
 * @property {Object} [variant_group]
 * @property {number[]} [all_company_ids]
 * @property {number} [category_uid]
 * @property {Object[]} [trader]
 * @property {Object} [custom_order]
 * @property {string} [stage]
 * @property {Object} [moq]
 * @property {number} [brand_uid]
 * @property {string[]} [l3_mapping]
 * @property {string} [hsn_code]
 * @property {Object} [created_by]
 * @property {string} [category_slug]
 * @property {boolean} [is_active]
 * @property {Image[]} [images]
 * @property {string[]} [highlights]
 * @property {Object} [_custom_json]
 * @property {string} [id]
 * @property {string} [pending]
 * @property {Object} [modified_by]
 * @property {string[]} [tags]
 * @property {Media1[]} [media]
 * @property {Object} [category]
 * @property {Object} [teaser_tag]
 * @property {Brand} [brand]
 * @property {VerifiedBy} [verified_by]
 * @property {ReturnConfigResponse} [return_config]
 * @property {string} [short_description]
 * @property {ProductPublished} [product_publish]
 * @property {string} [country_of_origin]
 * @property {Object[]} [sizes]
 * @property {string} [verified_on]
 * @property {string[]} [all_identifiers]
 * @property {number} [uid]
 * @property {string} [currency]
 * @property {Object[]} [all_sizes]
 * @property {string} [name]
 * @property {string} [item_code]
 * @property {string} [image_nature]
 * @property {string} [modified_on]
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [is_dependent]
 */

/**
 * @typedef ProductListingResponse
 * @property {Page} [page]
 * @property {Product[]} [items]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code_id]
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code]
 */

/**
 * @typedef NetQuantity
 * @property {Object} [unit]
 * @property {number} [value]
 */

/**
 * @typedef Trader
 * @property {string[]} [address]
 * @property {Object} name
 * @property {string} [type]
 */

/**
 * @typedef CustomOrder
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 * @property {boolean} [is_custom_order]
 */

/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
 */

/**
 * @typedef ProductPublish
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {number} [no_of_boxes]
 * @property {TaxIdentifier} tax_identifier
 * @property {string} [size_guide]
 * @property {boolean} [is_set]
 * @property {Object} [variant_media]
 * @property {number[]} departments
 * @property {Object} attributes
 * @property {string} [description]
 * @property {boolean} [multi_size]
 * @property {string} item_type
 * @property {Object} [variants]
 * @property {string} slug
 * @property {NetQuantity} [net_quantity]
 * @property {string} template_tag
 * @property {string[]} [product_group_tag]
 * @property {Object} [variant_group]
 * @property {string} [requester]
 * @property {Object} [change_request_id]
 * @property {Trader[]} trader
 * @property {CustomOrder} [custom_order]
 * @property {number} brand_uid
 * @property {string} category_slug
 * @property {boolean} [is_active]
 * @property {string[]} [highlights]
 * @property {Object} [_custom_json]
 * @property {TeaserTag} [teaser_tag]
 * @property {Media1[]} [media]
 * @property {string[]} [tags]
 * @property {string} [bulk_job_id]
 * @property {boolean} [is_dependent]
 * @property {ReturnConfig} return_config
 * @property {string} [short_description]
 * @property {ProductPublish} [product_publish]
 * @property {string} country_of_origin
 * @property {Object[]} sizes
 * @property {number} [uid]
 * @property {string} [action]
 * @property {string} currency
 * @property {string} name
 * @property {string} item_code
 * @property {boolean} [is_image_less_product]
 * @property {number} company_id
 */

/**
 * @typedef ProductVariants
 * @property {number} [uid]
 * @property {string} [name]
 * @property {number} [category_uid]
 * @property {string} [item_code]
 * @property {Media1[]} [media]
 * @property {number} [brand_uid]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {Page} [page]
 * @property {ProductVariants[]} [variants]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {AttributeMasterDetails} details
 * @property {string} [created_on]
 * @property {AttributeMaster} schema
 * @property {boolean} [variant]
 * @property {string[]} departments
 * @property {string} [unit]
 * @property {AttributeMasterFilter} filters
 * @property {string} [description]
 * @property {string} slug
 * @property {Object} [synonyms]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [logo]
 * @property {Object} [created_by]
 * @property {boolean} [is_nested]
 * @property {Object} [modified_by]
 * @property {string[]} [tags]
 * @property {string} [raw_key]
 * @property {string} [suggestion]
 * @property {string} [name]
 * @property {string} [modified_on]
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
 * @property {number} [no_of_boxes]
 * @property {TaxIdentifier} tax_identifier
 * @property {string} [size_guide]
 * @property {boolean} [is_set]
 * @property {Object} [variant_media]
 * @property {number[]} departments
 * @property {string} [description]
 * @property {boolean} [multi_size]
 * @property {string} item_type
 * @property {Object} [variants]
 * @property {string} slug
 * @property {NetQuantity} [net_quantity]
 * @property {string} template_tag
 * @property {string[]} [product_group_tag]
 * @property {Object} [variant_group]
 * @property {string} [requester]
 * @property {Object} [change_request_id]
 * @property {Trader[]} trader
 * @property {CustomOrder} [custom_order]
 * @property {number} brand_uid
 * @property {string} category_slug
 * @property {boolean} [is_active]
 * @property {string[]} [highlights]
 * @property {Object} [_custom_json]
 * @property {TeaserTag} [teaser_tag]
 * @property {Media1[]} [media]
 * @property {string[]} [tags]
 * @property {string} [bulk_job_id]
 * @property {boolean} [is_dependent]
 * @property {ReturnConfig} return_config
 * @property {string} [short_description]
 * @property {ProductPublish} [product_publish]
 * @property {string} country_of_origin
 * @property {number} [uid]
 * @property {string} [action]
 * @property {string} currency
 * @property {Object} name
 * @property {Object} item_code
 * @property {boolean} [is_image_less_product]
 * @property {number} company_id
 */

/**
 * @typedef ValidateIdentifier
 * @property {boolean} [primary]
 * @property {string} gtin_type
 * @property {string} gtin_value
 */

/**
 * @typedef AllSizes
 * @property {number} item_height
 * @property {number} item_width
 * @property {number} item_weight
 * @property {number} item_length
 * @property {string} item_dimensions_unit_of_measure
 * @property {Object} item_weight_unit_of_measure
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {Object} size
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
 * @property {string} [user_id]
 * @property {string} [full_name]
 * @property {string} [username]
 */

/**
 * @typedef ProductBulkRequest
 * @property {UserDetail1} [created_by]
 * @property {string} [file_path]
 * @property {string} [created_on]
 * @property {boolean} [is_active]
 * @property {string} [template_tag]
 * @property {string[]} [failed_records]
 * @property {number} [total]
 * @property {number} [cancelled]
 * @property {string[]} [cancelled_records]
 * @property {ProductTemplate} [template]
 * @property {UserDetail1} [modified_by]
 * @property {number} [succeed]
 * @property {string} [stage]
 * @property {number} [failed]
 * @property {string} [modified_on]
 * @property {number} [company_id]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {Page} [page]
 * @property {ProductBulkRequest} [items]
 */

/**
 * @typedef UserInfo1
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [email]
 */

/**
 * @typedef BulkJob
 * @property {UserInfo1} [created_by]
 * @property {string} [stage]
 * @property {string} created_on
 * @property {string} [file_path]
 * @property {string} [custom_template_tag]
 * @property {boolean} [is_active]
 * @property {string} [template_tag]
 * @property {number} [total]
 * @property {number} [cancelled]
 * @property {Object[]} [cancelled_records]
 * @property {string} [tracking_url]
 * @property {UserInfo1} [modified_by]
 * @property {number} [succeed]
 * @property {string} [modified_on]
 * @property {number} [failed]
 * @property {Object[]} [failed_records]
 * @property {number} company_id
 */

/**
 * @typedef BulkResponse
 * @property {UserInfo1} [created_by]
 * @property {string} created_on
 * @property {string} batch_id
 * @property {boolean} [is_active]
 * @property {UserInfo1} [modified_by]
 * @property {string} [modified_on]
 */

/**
 * @typedef BulkProductRequest
 * @property {string} template_tag
 * @property {string} batch_id
 * @property {Object[]} data
 * @property {number} company_id
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
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {number} [company_id]
 */

/**
 * @typedef Items
 * @property {UserCommon} [created_by]
 * @property {string} [file_path]
 * @property {string} [created_on]
 * @property {string} [stage]
 * @property {boolean} [is_active]
 * @property {number} [retry]
 * @property {number} [total]
 * @property {number} [cancelled]
 * @property {string[]} [cancelled_records]
 * @property {string} [id]
 * @property {string} [tracking_url]
 * @property {UserCommon} [modified_by]
 * @property {number} [succeed]
 * @property {string} [modified_on]
 * @property {number} [failed]
 * @property {string[]} [failed_records]
 * @property {number} [company_id]
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
 * @property {number} [company_id]
 * @property {string} [size]
 * @property {number} [item_id]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {boolean} [success]
 * @property {ProductSizeDeleteDataResponse} [data]
 */

/**
 * @typedef InventoryResponse
 * @property {Object} [store]
 * @property {number} [price]
 * @property {number} [price_transfer]
 * @property {number} [item_id]
 * @property {number} [sellable_quantity]
 * @property {string} [seller_identifier]
 * @property {string} [uid]
 * @property {number} [quantity]
 * @property {string} [currency]
 * @property {Object} [identifiers]
 * @property {string} [size]
 * @property {string} [inventory_updated_on]
 * @property {number} [price_effective]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {Page} [page]
 * @property {InventoryResponse[]} [items]
 */

/**
 * @typedef ItemQuery
 * @property {number} [uid]
 * @property {number} [brand_uid]
 * @property {string} [item_code]
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
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {SizeDistribution} size_distribution
 */

/**
 * @typedef GTIN
 * @property {boolean} [primary]
 * @property {string} gtin_type
 * @property {Object} gtin_value
 */

/**
 * @typedef InvSize
 * @property {number} [item_height]
 * @property {number} [price]
 * @property {number} [item_width]
 * @property {number} [price_transfer]
 * @property {number} [item_weight]
 * @property {InventorySet} [set]
 * @property {number} [item_length]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} quantity
 * @property {boolean} [is_set]
 * @property {GTIN[]} identifiers
 * @property {string} store_code
 * @property {string} [expiration_date]
 * @property {Object} size
 * @property {string} currency
 * @property {number} price_effective
 */

/**
 * @typedef InventoryRequest
 * @property {ItemQuery} item
 * @property {InvSize[]} sizes
 * @property {number} company_id
 */

/**
 * @typedef PriceMeta
 * @property {Object} [tp_notes]
 * @property {number} effective
 * @property {number} transfer
 * @property {string} currency
 * @property {number} marked
 * @property {string} [updated_at]
 */

/**
 * @typedef DimensionResponse
 * @property {number} width
 * @property {boolean} is_default
 * @property {number} height
 * @property {number} length
 * @property {string} unit
 */

/**
 * @typedef Trader1
 * @property {string[]} address
 * @property {string} name
 * @property {string} type
 */

/**
 * @typedef QuantityBase
 * @property {string} [updated_at]
 * @property {number} [count]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [damaged]
 */

/**
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef ManufacturerResponse
 * @property {string} address
 * @property {boolean} is_default
 * @property {string} name
 */

/**
 * @typedef ReturnConfig1
 * @property {string} [unit]
 * @property {number} [time]
 * @property {boolean} [returnable]
 */

/**
 * @typedef WeightResponse
 * @property {string} unit
 * @property {number} shipping
 * @property {boolean} is_default
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef InventorySellerResponse
 * @property {Object} [tax_identifier]
 * @property {boolean} [is_set]
 * @property {string} fynd_article_code
 * @property {PriceMeta} price
 * @property {string} [added_on_store]
 * @property {DimensionResponse} dimension
 * @property {Object} identifier
 * @property {Trader1[]} [trader]
 * @property {Quantities} [quantities]
 * @property {Object} [raw_meta]
 * @property {string} [stage]
 * @property {UserSerializer} [created_by]
 * @property {StoreMeta} store
 * @property {boolean} [is_active]
 * @property {string} seller_identifier
 * @property {Object} [meta]
 * @property {string} [trace_id]
 * @property {Object} [_custom_json]
 * @property {Object} [fynd_meta]
 * @property {UserSerializer} [modified_by]
 * @property {string[]} [tags]
 * @property {BrandMeta} brand
 * @property {ManufacturerResponse} manufacturer
 * @property {boolean} fragile
 * @property {ReturnConfig1} [return_config]
 * @property {boolean} [track_inventory]
 * @property {number} total_quantity
 * @property {number} item_id
 * @property {InventorySet} [set]
 * @property {string} fynd_item_code
 * @property {string} country_of_origin
 * @property {WeightResponse} weight
 * @property {string} uid
 * @property {CompanyMeta} company
 * @property {string} [expiration_date]
 * @property {string} size
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {Page} [page]
 * @property {InventorySellerResponse[]} [items]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {Object} [created_by]
 * @property {string} [file_path]
 * @property {string} [created_on]
 * @property {string} [stage]
 * @property {boolean} [is_active]
 * @property {number} [cancelled]
 * @property {number} [total]
 * @property {string[]} [cancelled_records]
 * @property {string} [id]
 * @property {Object} [modified_by]
 * @property {number} [succeed]
 * @property {string} [modified_on]
 * @property {number} [failed]
 * @property {string[]} [failed_records]
 * @property {number} [company_id]
 */

/**
 * @typedef BulkInventoryGet
 * @property {Page} [page]
 * @property {BulkInventoryGetItems[]} [items]
 */

/**
 * @typedef InventoryJobPayload
 * @property {number} [price]
 * @property {number} [total_quantity]
 * @property {string} seller_identifier
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} [currency]
 * @property {number} [quantity]
 * @property {string} [trace_id]
 * @property {string} store_code
 * @property {string} [expiration_date]
 * @property {string[]} [tags]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {string} batch_id
 * @property {Object} [user]
 * @property {InventoryJobPayload[]} sizes
 * @property {number} company_id
 */

/**
 * @typedef InventoryExportJob
 * @property {number} seller_id
 * @property {string} task_id
 * @property {string} [status]
 * @property {Object} [request_params]
 * @property {string} [url]
 * @property {string} [completed_on]
 * @property {string} [trigger_on]
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [store]
 * @property {number[]} [brand]
 * @property {string} [type]
 */

/**
 * @typedef InventoryExportResponse
 * @property {number} seller_id
 * @property {string} task_id
 * @property {string} [status]
 * @property {Object} [request_params]
 * @property {string} [trigger_on]
 */

/**
 * @typedef PriceArticle
 * @property {Object} [tp_notes]
 * @property {number} [effective]
 * @property {number} [transfer]
 * @property {string} [currency]
 * @property {number} [marked]
 */

/**
 * @typedef DimensionResponse1
 * @property {string} [unit]
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [length]
 */

/**
 * @typedef Quantity
 * @property {number} [count]
 */

/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [not_available]
 * @property {Quantity} [sellable]
 * @property {Quantity} [order_committed]
 * @property {Quantity} [damaged]
 */

/**
 * @typedef Trader2
 * @property {string[]} [address]
 * @property {string} [name]
 * @property {string} [type]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {string} [store_code]
 * @property {string} [name]
 * @property {string} [store_type]
 * @property {number} [uid]
 */

/**
 * @typedef BrandMeta1
 * @property {number} [id]
 * @property {string} [name]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {string} [address]
 * @property {boolean} [is_default]
 * @property {string} [name]
 */

/**
 * @typedef ReturnConfig2
 * @property {string} [unit]
 * @property {number} [time]
 * @property {boolean} [returnable]
 */

/**
 * @typedef WeightResponse1
 * @property {string} [unit]
 * @property {number} [shipping]
 */

/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */

/**
 * @typedef GetInventories
 * @property {Object} [tax_identifier]
 * @property {boolean} [is_set]
 * @property {PriceArticle} [price]
 * @property {Object} [platforms]
 * @property {DimensionResponse1} [dimension]
 * @property {Object} [identifier]
 * @property {QuantitiesArticle} [quantities]
 * @property {string} [inventory_updated_on]
 * @property {Trader2[]} [trader]
 * @property {string} [stage]
 * @property {UserSerializer} [created_by]
 * @property {ArticleStoreResponse} [store]
 * @property {DateMeta} [date_meta]
 * @property {string} [seller_identifier]
 * @property {string} [trace_id]
 * @property {string} [id]
 * @property {UserSerializer} [modified_by]
 * @property {string[]} [tags]
 * @property {BrandMeta1} [brand]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {ReturnConfig2} [return_config]
 * @property {boolean} [track_inventory]
 * @property {number} [total_quantity]
 * @property {number} [item_id]
 * @property {WeightResponse1} [weight]
 * @property {string} [country_of_origin]
 * @property {string} [uid]
 * @property {CompanyMeta1} [company]
 * @property {string} [expiration_date]
 * @property {string} [size]
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
 * @property {number} [total_quantity]
 * @property {string} seller_identifier
 * @property {string} [trace_id]
 * @property {number} store_id
 * @property {string} [expiration_date]
 * @property {string[]} [tags]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
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
 * @typedef PageResponse
 * @property {string} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {boolean} [has_previous]
 */

/**
 * @typedef HsnCodesObject
 * @property {string} [hsn_code]
 * @property {boolean} [tax_on_esp]
 * @property {string} [hs2_code]
 * @property {number} [tax2]
 * @property {string} [id]
 * @property {number} [tax1]
 * @property {boolean} [tax_on_mrp]
 * @property {string} [modified_on]
 * @property {number} [threshold2]
 * @property {number} [threshold1]
 * @property {number} [company_id]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {PageResponse} [page]
 * @property {HsnCodesObject[]} [items]
 */

/**
 * @typedef HsnUpsert
 * @property {string} hsn_code
 * @property {boolean} [tax_on_esp]
 * @property {string} hs2_code
 * @property {boolean} [is_active]
 * @property {number} [tax2]
 * @property {number} [uid]
 * @property {number} tax1
 * @property {boolean} tax_on_mrp
 * @property {number} [threshold2]
 * @property {number} threshold1
 * @property {number} company_id
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
 * @property {number} [cess]
 * @property {number} rate
 * @property {number} threshold
 * @property {string} effective_date
 */

/**
 * @typedef HSNDataInsertV2
 * @property {string} hsn_code
 * @property {string} country_code
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} type
 * @property {string} reporting_hsn
 * @property {TaxSlab[]} taxes
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} description
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {PageResponse} [page]
 * @property {HSNDataInsertV2[]} [items]
 */

/**
 * @typedef BrandItem
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {Media} [logo]
 * @property {string} [discount]
 */

/**
 * @typedef BrandListingResponse
 * @property {Page} page
 * @property {BrandItem[]} [items]
 */

/**
 * @typedef Department
 * @property {string} [slug]
 * @property {number} [priority_order]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {Media} [logo]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef ThirdLevelChild
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {Object[]} [childs]
 */

/**
 * @typedef SecondLevelChild
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {ThirdLevelChild[]} [childs]
 */

/**
 * @typedef Child
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {SecondLevelChild[]} [childs]
 */

/**
 * @typedef CategoryItems
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {Child[]} [childs]
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
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductListingDetail[]} [items]
 * @property {ProductFilters[]} [filters]
 * @property {Page} page
 */

/**
 * @typedef ProductDetail
 * @property {Object} [promo_meta]
 * @property {Object} [attributes]
 * @property {string} [description]
 * @property {string[]} [tryouts]
 * @property {Media1[]} [medias]
 * @property {string} [item_type]
 * @property {string} slug
 * @property {string} [color]
 * @property {number} [rating]
 * @property {string} [product_online_date]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string[]} [highlights]
 * @property {number} [rating_count]
 * @property {Object} [teaser_tag]
 * @property {ProductBrand} [brand]
 * @property {boolean} [has_variant]
 * @property {string} [short_description]
 * @property {string} [type]
 * @property {string[]} [similars]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [image_nature]
 * @property {string} [item_code]
 */

/**
 * @typedef InventoryPage
 * @property {string} type
 * @property {string} [next_id]
 * @property {boolean} [has_next]
 * @property {number} item_total
 * @property {boolean} [has_previous]
 */

/**
 * @typedef InventoryStockResponse
 * @property {InventoryPage} page
 * @property {Object[]} [items]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [country_code]
 * @property {string} [state]
 * @property {number} [pincode]
 * @property {string} [city]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [country]
 * @property {string} [address_type]
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {string} [password]
 * @property {boolean} [enabled]
 * @property {string} [username]
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
 * @typedef UserSerializer1
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [opening]
 * @property {boolean} open
 * @property {LocationTimingSerializer} [closing]
 * @property {string} weekday
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 * @property {string} [order]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef GetCompanySerializer
 * @property {UserSerializer2} [created_by]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [verified_on]
 * @property {string} [reject_reason]
 * @property {string} [business_type]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [company_type]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [modified_on]
 */

/**
 * @typedef LocationManagerSerializer
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 * @property {string} [email]
 */

/**
 * @typedef GetLocationSerializer
 * @property {GetAddressSerializer} address
 * @property {string} [created_on]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {Document[]} [documents]
 * @property {string} [phone_number]
 * @property {string} display_name
 * @property {string} [stage]
 * @property {Object} [warnings]
 * @property {UserSerializer1} [created_by]
 * @property {Object} [_custom_json]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {LocationIntegrationType} [integration_type]
 * @property {UserSerializer1} [modified_by]
 * @property {UserSerializer1} [verified_by]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [verified_on]
 * @property {string} [store_type]
 * @property {number} [uid]
 * @property {GetCompanySerializer} [company]
 * @property {string} name
 * @property {LocationManagerSerializer} [manager]
 * @property {string[]} [notification_emails]
 * @property {string} [modified_on]
 * @property {string} code
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
 * @property {boolean} [is_active]
 * @property {string} app_id
 * @property {number} uid
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {string} [logo]
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
 * @property {string} [country]
 * @property {string} [country_code]
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 * @property {number} [rate]
 */

/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {UserSerializer} [verified_by]
 * @property {string} [business_info]
 * @property {string} [name]
 * @property {string} [mode]
 * @property {Object} [_custom_json]
 * @property {string} [created_on]
 * @property {BusinessDetails} [business_details]
 * @property {boolean} [franchise_enabled]
 * @property {string} [verified_on]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [stage]
 * @property {Object} [warnings]
 * @property {UserSerializer} [created_by]
 * @property {string} company_type
 * @property {string} business_type
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {string} [modified_on]
 * @property {Document[]} [documents]
 * @property {UserSerializer} [modified_by]
 * @property {number} uid
 * @property {string[]} [notification_emails]
 * @property {ContactDetails} [contact_details]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} address_type
 * @property {string} state
 * @property {number} longitude
 * @property {number} pincode
 * @property {string} address1
 * @property {string} country
 * @property {string} [country_code]
 * @property {number} latitude
 * @property {string} city
 * @property {string} [address2]
 * @property {string} [landmark]
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 * @property {number} [rate]
 */

/**
 * @typedef UpdateCompany
 * @property {BusinessDetails} [business_details]
 * @property {boolean} [franchise_enabled]
 * @property {string} [business_info]
 * @property {string} [name]
 * @property {Document[]} [documents]
 * @property {string} [company_type]
 * @property {string[]} [notification_emails]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {string} [business_type]
 * @property {Object} [warnings]
 * @property {string} [reject_reason]
 * @property {Object} [_custom_json]
 * @property {ContactDetails} [contact_details]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 */

/**
 * @typedef ProfileSuccessResponse
 * @property {boolean} [success]
 * @property {number} [uid]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [verified]
 * @property {number} [pending]
 */

/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [brand]
 * @property {DocumentsObj} [product]
 * @property {number} [uid]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [company_documents]
 * @property {string} [stage]
 * @property {DocumentsObj} [store_documents]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [portrait]
 * @property {string} [landscape]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {UserSerializer} [verified_by]
 * @property {string} name
 * @property {string} [description]
 * @property {string} [mode]
 * @property {string} [slug_key]
 * @property {Object} [_custom_json]
 * @property {string} [logo]
 * @property {string} [created_on]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 * @property {string} [stage]
 * @property {UserSerializer} [created_by]
 * @property {string[]} [synonyms]
 * @property {Object} [_locale_language]
 * @property {string} [reject_reason]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {number} [uid]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {string} logo
 * @property {string[]} [synonyms]
 * @property {number} [company_id]
 * @property {string} name
 * @property {Object} [_locale_language]
 * @property {string} [description]
 * @property {number} [uid]
 * @property {string} [brand_tier]
 * @property {Object} [_custom_json]
 * @property {BrandBannerSerializer} [banner]
 */

/**
 * @typedef CompanySocialAccounts
 * @property {string} url
 * @property {string} name
 */

/**
 * @typedef CompanyDetails
 * @property {string} [website_url]
 * @property {CompanySocialAccounts[]} [socials]
 */

/**
 * @typedef CompanySerializer
 * @property {CompanyDetails} [details]
 * @property {string[]} [market_channels]
 * @property {string} [created_on]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {string} [name]
 * @property {string} [modified_on]
 * @property {string} company_type
 * @property {UserSerializer} [modified_by]
 * @property {number} [uid]
 * @property {string} [verified_on]
 * @property {string} business_type
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string[]} [notification_emails]
 * @property {string} [reject_reason]
 * @property {Object} [_custom_json]
 * @property {BusinessCountryInfo} [business_country_info]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {string} [created_on]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [created_by]
 * @property {string} [modified_on]
 * @property {CompanySerializer} [company]
 * @property {UserSerializer} [modified_by]
 * @property {number} [uid]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 * @property {string} [stage]
 * @property {string} [reject_reason]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
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
 * @property {string} holiday_type
 * @property {string} title
 */

/**
 * @typedef LocationSerializer
 * @property {string} display_name
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {LocationManagerSerializer} [manager]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [store_type]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} name
 * @property {Document[]} [documents]
 * @property {number} company
 * @property {number} [uid]
 * @property {string[]} [notification_emails]
 * @property {GetAddressSerializer} address
 * @property {string} [stage]
 * @property {Object} [warnings]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {Object} [_custom_json]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} code
 */

/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */

/**
 * @typedef _ArticleQuery
 * @property {number} [item_id]
 * @property {number[]} [ignored_stores]
 * @property {string} [size]
 */

/**
 * @typedef _ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef _AssignStoreArticle
 * @property {number} [quantity]
 * @property {_ArticleQuery} [query]
 * @property {string} [group_id]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {Object} [meta]
 */

/**
 * @typedef AssignStoreRequestValidator
 * @property {string} [channel_identifier]
 * @property {number} [company_id]
 * @property {string} [pincode]
 * @property {string} [app_id]
 * @property {number[]} [store_ids]
 * @property {string} [channel_type]
 * @property {_AssignStoreArticle[]} [articles]
 */

/**
 * @typedef AssignStoreResponseSerializer
 * @property {string} [s_city]
 * @property {boolean} [status]
 * @property {number} [quantity]
 * @property {string} [store_pincode]
 * @property {number} [item_id]
 * @property {number} [company_id]
 * @property {number} [price_marked]
 * @property {number} [price_effective]
 * @property {string} [_id]
 * @property {number} [store_id]
 * @property {string} [uid]
 * @property {number} [index]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {Object} [meta]
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
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [codes]
 * @property {string[]} [types]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [networks]
 */

/**
 * @typedef PriceRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [total]
 * @property {number} [user]
 * @property {number} [app]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [remaining]
 * @property {UsesRemaining} [maximum]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef PostOrder
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */

/**
 * @typedef Restrictions
 * @property {number[]} [user_groups]
 * @property {Object} [payments]
 * @property {PriceRange} [price_range]
 * @property {number[]} [ordering_stores]
 * @property {UsesRestriction} [uses]
 * @property {string} [user_type]
 * @property {boolean} [coupon_allowed]
 * @property {string[]} [platforms]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {PostOrder} [post_order]
 */

/**
 * @typedef Validation
 * @property {string} [user_registered_after]
 * @property {boolean} [anonymous]
 * @property {string[]} [app_id]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef Rule
 * @property {number} [discount_qty]
 * @property {number} [value]
 * @property {number} [min]
 * @property {number} [max]
 * @property {number} [key]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [subtitle]
 * @property {string} [title]
 */

/**
 * @typedef DisplayMeta
 * @property {string} [description]
 * @property {DisplayMetaDict} [apply]
 * @property {string} [title]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [remove]
 */

/**
 * @typedef State
 * @property {boolean} [is_display]
 * @property {boolean} [is_public]
 * @property {boolean} [is_archived]
 */

/**
 * @typedef RuleDefinition
 * @property {string} value_type
 * @property {string} calculate_on
 * @property {string[]} [scope]
 * @property {boolean} [auto_apply]
 * @property {string} [currency_code]
 * @property {boolean} [is_exact]
 * @property {string} applicable_on
 * @property {string} type
 */

/**
 * @typedef CouponSchedule
 * @property {string} [cron]
 * @property {Object[]} [next_schedule]
 * @property {string} [start]
 * @property {number} [duration]
 * @property {string} [end]
 */

/**
 * @typedef Ownership
 * @property {string} payable_category
 * @property {string} payable_by
 */

/**
 * @typedef CouponAdd
 * @property {Restrictions} [restrictions]
 * @property {string[]} [tags]
 * @property {Validation} [validation]
 * @property {string} type_slug
 * @property {Validity} validity
 * @property {Rule[]} rule
 * @property {CouponAuthor} [author]
 * @property {CouponAction} [action]
 * @property {CouponDateMeta} [date_meta]
 * @property {DisplayMeta} display_meta
 * @property {Identifier} identifiers
 * @property {State} [state]
 * @property {string} code
 * @property {RuleDefinition} rule_definition
 * @property {CouponSchedule} [_schedule]
 * @property {Ownership} ownership
 */

/**
 * @typedef CouponsResponse
 * @property {CouponAdd} [items]
 * @property {Page} [page]
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
 * @property {Restrictions} [restrictions]
 * @property {string[]} [tags]
 * @property {Validation} [validation]
 * @property {string} type_slug
 * @property {Validity} validity
 * @property {Rule[]} rule
 * @property {CouponAuthor} [author]
 * @property {CouponAction} [action]
 * @property {CouponDateMeta} [date_meta]
 * @property {DisplayMeta} display_meta
 * @property {Identifier} identifiers
 * @property {State} [state]
 * @property {string} code
 * @property {RuleDefinition} rule_definition
 * @property {CouponSchedule} [_schedule]
 * @property {Ownership} ownership
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
 * @property {number[]} [item_exclude_company]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_company]
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_store]
 * @property {number[]} [item_category]
 * @property {boolean} [all_items]
 * @property {string[]} [product_tags]
 * @property {string[]} [available_zones]
 * @property {number[]} [item_id]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_store]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_exclude_category]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_exclude_id]
 * @property {string[]} [item_size]
 * @property {CompareObject} [cart_total]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_brand]
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [offer_label]
 * @property {string} [offer_text]
 */

/**
 * @typedef Ownership1
 * @property {string} payable_category
 * @property {string} payable_by
 */

/**
 * @typedef DiscountOffer
 * @property {number} [max_offer_quantity]
 * @property {boolean} [apportion_discount]
 * @property {number} [discount_percentage]
 * @property {number} [max_discount_amount]
 * @property {boolean} [partial_can_ret]
 * @property {string} [code]
 * @property {number} [min_offer_quantity]
 * @property {number} [discount_amount]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [discount_price]
 */

/**
 * @typedef DiscountRule
 * @property {string} discount_type
 * @property {ItemCriteria} item_criteria
 * @property {string} buy_condition
 * @property {DiscountOffer} offer
 */

/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
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
 * @typedef UserRegistered
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef UsesRemaining1
 * @property {number} [user]
 * @property {number} [total]
 */

/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [remaining]
 * @property {UsesRemaining1} [maximum]
 */

/**
 * @typedef PostOrder1
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */

/**
 * @typedef Restrictions1
 * @property {boolean} [anonymous_users]
 * @property {number[]} [user_groups]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {UserRegistered} [user_registered]
 * @property {string[]} [user_id]
 * @property {number} [order_quantity]
 * @property {UsesRestriction1} uses
 * @property {string[]} [platforms]
 * @property {PostOrder1} [post_order]
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
 * @property {string} [cron]
 * @property {string} start
 * @property {Object[]} [next_schedule]
 * @property {boolean} published
 * @property {number} [duration]
 * @property {string} [end]
 */

/**
 * @typedef PromotionListItem
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {Object} buy_rules
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} ownership
 * @property {string} promo_group
 * @property {DiscountRule[]} discount_rules
 * @property {string} [code]
 * @property {Visibility} [visiblility]
 * @property {PromotionDateMeta} [date_meta]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {boolean} [stackable]
 * @property {string} promotion_type
 * @property {string} mode
 * @property {Object} [_custom_json]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionAuthor} [author]
 * @property {string} [currency]
 * @property {boolean} [apply_all_discount]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 */

/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PromotionAdd
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {Object} buy_rules
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} ownership
 * @property {string} promo_group
 * @property {DiscountRule[]} discount_rules
 * @property {string} [code]
 * @property {Visibility} [visiblility]
 * @property {PromotionDateMeta} [date_meta]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {boolean} [stackable]
 * @property {string} promotion_type
 * @property {string} mode
 * @property {Object} [_custom_json]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionAuthor} [author]
 * @property {string} [currency]
 * @property {boolean} [apply_all_discount]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 */

/**
 * @typedef PromotionUpdate
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {Object} buy_rules
 * @property {DisplayMeta1} display_meta
 * @property {Ownership1} ownership
 * @property {string} promo_group
 * @property {DiscountRule[]} discount_rules
 * @property {string} [code]
 * @property {Visibility} [visiblility]
 * @property {PromotionDateMeta} [date_meta]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {boolean} [stackable]
 * @property {string} promotion_type
 * @property {string} mode
 * @property {Object} [_custom_json]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionAuthor} [author]
 * @property {string} [currency]
 * @property {boolean} [apply_all_discount]
 * @property {string} application_id
 * @property {PromotionSchedule} [_schedule]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [description]
 * @property {string} [example]
 * @property {string} [title]
 * @property {string} [entity_slug]
 * @property {boolean} [is_hidden]
 * @property {string} [subtitle]
 * @property {string} [created_on]
 * @property {string} [entity_type]
 * @property {string} [modified_on]
 * @property {string} [type]
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
 * @typedef BaseInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef ProductImage
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef CategoryInfo
 * @property {number} [uid]
 * @property {string} [name]
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
 * @typedef CartProduct
 * @property {BaseInfo} [brand]
 * @property {ProductImage[]} [images]
 * @property {CategoryInfo[]} [categories]
 * @property {ProductAction} [action]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {NetQuantity} [net_quantity]
 * @property {string} [type]
 */

/**
 * @typedef ProductPrice
 * @property {number} [effective]
 * @property {number} [selling]
 * @property {string} [currency_code]
 * @property {number} [add_on]
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [base]
 * @property {ProductPrice} [converted]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef FreeGiftItem
 * @property {string[]} [item_images_url]
 * @property {string} [item_name]
 * @property {Object} [item_price_details]
 * @property {string} [item_slug]
 * @property {string} [item_brand_name]
 * @property {number} [item_id]
 */

/**
 * @typedef AppliedFreeArticles
 * @property {string} [article_id]
 * @property {string} [parent_item_identifier]
 * @property {FreeGiftItem} [free_gift_item_details]
 * @property {number} [quantity]
 */

/**
 * @typedef Ownership2
 * @property {string} [payable_category]
 * @property {string} [payable_by]
 */

/**
 * @typedef DiscountRulesApp
 * @property {Object} [raw_offer]
 * @property {Object} [item_criteria]
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [offer]
 */

/**
 * @typedef AppliedPromotion
 * @property {number} [amount]
 * @property {string} [promotion_group]
 * @property {string} [promotion_type]
 * @property {string} [promotion_name]
 * @property {string} [promo_id]
 * @property {string} [offer_text]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {BuyRules[]} [buy_rules]
 * @property {Ownership2} [ownership]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {number} [article_quantity]
 * @property {boolean} [mrp_promotion]
 */

/**
 * @typedef ProductAvailability
 * @property {boolean} [out_of_stock]
 * @property {number} [other_store_quantity]
 * @property {boolean} [deliverable]
 * @property {boolean} [is_valid]
 * @property {string[]} [sizes]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
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
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
 */

/**
 * @typedef ProductArticle
 * @property {number} [quantity]
 * @property {ArticlePriceInfo} [price]
 * @property {BaseInfo} [seller]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [size]
 * @property {Object} [extra_meta]
 * @property {string[]} [product_group_tags]
 * @property {string} [type]
 * @property {BaseInfo} [store]
 */

/**
 * @typedef CartProductInfo
 * @property {CartProduct} [product]
 * @property {number} [quantity]
 * @property {ProductPriceInfo} [price]
 * @property {string} [message]
 * @property {PromoMeta} [promo_meta]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {ProductAvailability} [availability]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [discount]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [coupon_message]
 * @property {string} [key]
 * @property {Object} [bulk_offer]
 * @property {boolean} [is_set]
 * @property {ProductArticle} [article]
 */

/**
 * @typedef LoyaltyPoints
 * @property {string} [description]
 * @property {number} [total]
 * @property {boolean} [is_applied]
 * @property {number} [applicable]
 */

/**
 * @typedef DisplayBreakup
 * @property {string[]} [message]
 * @property {string} [display]
 * @property {number} [value]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {string} [key]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [coupon_type]
 * @property {string} [description]
 * @property {number} [minimum_cart_value]
 * @property {string} [title]
 * @property {string} [message]
 * @property {boolean} [is_applied]
 * @property {number} [value]
 * @property {string} [uid]
 * @property {string} [sub_title]
 * @property {string} [code]
 * @property {number} [coupon_value]
 * @property {string} [type]
 * @property {number} [max_discount_value]
 */

/**
 * @typedef RawBreakup
 * @property {number} [cod_charge]
 * @property {number} [total]
 * @property {number} [fynd_cash]
 * @property {number} [gst_charges]
 * @property {number} [you_saved]
 * @property {number} [coupon]
 * @property {number} [discount]
 * @property {number} [mrp_total]
 * @property {number} [delivery_charge]
 * @property {number} [convenience_fee]
 * @property {number} [subtotal]
 * @property {number} [vog]
 */

/**
 * @typedef CartBreakup
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {DisplayBreakup[]} [display]
 * @property {CouponBreakup} [coupon]
 * @property {RawBreakup} [raw]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {Object} [errors]
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef ShippingAddress
 * @property {number} [pincode]
 * @property {string} area_code
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [area_code_slug]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {string} [address]
 * @property {number} [phone]
 * @property {string} [state]
 * @property {Object} [meta]
 * @property {string} [area]
 * @property {string} [address_type]
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
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
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
 * @property {number} amount_paid
 * @property {number} [quantity]
 * @property {number} coupon_effective_discount
 * @property {number} [loyalty_discount]
 * @property {number} [employee_discount]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} price_effective
 * @property {string} size
 * @property {number} cashback_applied
 * @property {number} cod_charges
 * @property {number} delivery_charges
 * @property {number} product_id
 * @property {number} discount
 * @property {Object} [extra_meta]
 * @property {CartItemMeta} [meta]
 * @property {number} price_marked
 * @property {OpenApiFiles[]} [files]
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {number} cart_value
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {OpenApiOrderItem[]} cart_items
 * @property {number} cod_charges
 * @property {number} cashback_applied
 * @property {number} coupon_value
 * @property {string} [gstin]
 * @property {string} [order_id]
 * @property {number} [loyalty_discount]
 * @property {Object} [employee_discount]
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [affiliate_order_id]
 * @property {string} [coupon]
 * @property {ShippingAddress} billing_address
 * @property {string} [currency_code]
 * @property {number} delivery_charges
 * @property {OpenApiFiles[]} [files]
 * @property {string} [comment]
 * @property {string} [payment_mode]
 * @property {string} coupon_code
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} order_id
 * @property {string} [order_ref_id]
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef AbandonedCart
 * @property {string} [checkout_mode]
 * @property {number} [cart_value]
 * @property {Object[]} [shipments]
 * @property {Object} [meta]
 * @property {boolean} [merge_qty]
 * @property {Object} [fynd_credits]
 * @property {string} created_on
 * @property {Object} [delivery_charges]
 * @property {number} [discount]
 * @property {string} [comment]
 * @property {string} [payment_mode]
 * @property {string} [app_id]
 * @property {string} _id
 * @property {Object} [pick_up_customer_details]
 * @property {Object[]} [payment_methods]
 * @property {boolean} [is_active]
 * @property {number} uid
 * @property {Object} [cod_charges]
 * @property {string} last_modified
 * @property {string} [gstin]
 * @property {boolean} [buy_now]
 * @property {Object[]} articles
 * @property {string} [order_id]
 * @property {number} [bulk_coupon_discount]
 * @property {boolean} is_default
 * @property {Object} [payments]
 * @property {Object} [coupon]
 * @property {Object} cashback
 * @property {number[]} [fc_index_map]
 * @property {string} user_id
 * @property {Object} [promotion]
 * @property {string} expire_at
 * @property {boolean} [is_archive]
 */

/**
 * @typedef AbandonedCartResponse
 * @property {string} [message]
 * @property {AbandonedCart[]} [items]
 * @property {Page} [page]
 * @property {Object} [result]
 * @property {boolean} [success]
 */

/**
 * @typedef CartCurrency
 * @property {string} [symbol]
 * @property {string} [code]
 */

/**
 * @typedef CartDetailResponse
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [checkout_mode]
 * @property {string} [message]
 * @property {boolean} [restrict_checkout]
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {CartCurrency} [currency]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [delivery_charge_info]
 * @property {string} [last_modified]
 * @property {string} [gstin]
 * @property {boolean} [buy_now]
 * @property {string} [comment]
 * @property {string} [id]
 * @property {string} [coupon_text]
 */

/**
 * @typedef AddProductCart
 * @property {Object} [article_assignment]
 * @property {number} [quantity]
 * @property {Object} [extra_meta]
 * @property {boolean} [pos]
 * @property {string} [article_id]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [item_size]
 * @property {string} [display]
 * @property {Object} [_custom_json]
 * @property {number} [item_id]
 * @property {string[]} [product_group_tags]
 * @property {number} [seller_id]
 * @property {number} [store_id]
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
 * @property {number} [quantity]
 * @property {string} [article_id]
 * @property {number} [item_index]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [item_size]
 * @property {Object} [_custom_json]
 * @property {CartProductIdentifer} identifiers
 * @property {number} [item_id]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
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
