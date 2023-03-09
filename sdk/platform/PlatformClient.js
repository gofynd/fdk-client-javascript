const Common = require("./Common/CommonPlatformClient");

const Lead = require("./Lead/LeadPlatformClient");

const Billing = require("./Billing/BillingPlatformClient");

const Communication = require("./Communication/CommunicationPlatformClient");

const Payment = require("./Payment/PaymentPlatformClient");

const Order = require("./Order/OrderPlatformClient");

const Catalog = require("./Catalog/CatalogPlatformClient");

const CompanyProfile = require("./CompanyProfile/CompanyProfilePlatformClient");

const FileStorage = require("./FileStorage/FileStoragePlatformClient");

const Inventory = require("./Inventory/InventoryPlatformClient");

const Configuration = require("./Configuration/ConfigurationPlatformClient");

const Analytics = require("./Analytics/AnalyticsPlatformClient");

const Discount = require("./Discount/DiscountPlatformClient");

const Webhook = require("./Webhook/WebhookPlatformClient");

const AuditTrail = require("./AuditTrail/AuditTrailPlatformClient");

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
 * @typedef PaginationSchema
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [type]
 * @property {number} [current]
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
 * @typedef Email
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 * @property {string} [email]
 * @property {boolean} [active]
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
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
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
 * @typedef UnauthenticatedUser
 * @property {string} [message]
 */

/**
 * @typedef UnauthenticatedApplication
 * @property {string} [message]
 */

/**
 * @typedef BadRequest
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
 * @typedef NotFound
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
 * @typedef PaymentGatewayConfigResponse
 * @property {Object[]} [aggregators]
 * @property {string[]} excluded_fields
 * @property {string} app_id
 * @property {boolean} success
 * @property {string[]} display_fields
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
 * @property {string} key
 * @property {string} secret
 * @property {string} config_type
 * @property {string} merchant_salt
 * @property {boolean} [is_active]
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {boolean} [is_active]
 * @property {string} app_id
 * @property {PaymentGatewayConfig} [aggregator_name]
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
 * @typedef PaymentModeLogo
 * @property {string} large
 * @property {string} small
 */

/**
 * @typedef IntentApp
 * @property {string} [package_name]
 * @property {PaymentModeLogo} [logos]
 * @property {string} [display_name]
 * @property {string} [code]
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [package_name]
 * @property {string} [code]
 */

/**
 * @typedef PaymentModeList
 * @property {string} [card_type]
 * @property {string} [card_issuer]
 * @property {number} [cod_limit_per_order]
 * @property {string} [card_brand_image]
 * @property {string} [card_isin]
 * @property {string} [merchant_code]
 * @property {number} [exp_month]
 * @property {string} [card_id]
 * @property {string} [nickname]
 * @property {string} [card_fingerprint]
 * @property {number} [timeout]
 * @property {string} [display_name]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {IntentApp[]} [intent_app]
 * @property {number} [cod_limit]
 * @property {string} [fynd_vpa]
 * @property {number} [exp_year]
 * @property {string} [code]
 * @property {number} [retry_count]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {string} [card_token]
 * @property {string} aggregator_name
 * @property {string} [card_brand]
 * @property {string[]} [intent_app_error_list]
 * @property {boolean} [intent_flow]
 * @property {string} [name]
 * @property {boolean} [expired]
 * @property {number} [display_priority]
 * @property {string} [card_number]
 * @property {string} [card_reference]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_name]
 * @property {number} [remaining_limit]
 */

/**
 * @typedef RootPaymentMode
 * @property {boolean} [save_card]
 * @property {string} display_name
 * @property {string} [aggregator_name]
 * @property {PaymentModeList[]} [list]
 * @property {boolean} [anonymous_enable]
 * @property {boolean} [add_card_enabled]
 * @property {string} name
 * @property {boolean} [is_pay_by_card_pl]
 * @property {number} display_priority
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
 * @property {Object[]} payouts_aggregators
 * @property {boolean} is_default
 * @property {Object} unique_transfer_no
 * @property {Object} customers
 */

/**
 * @typedef PayoutsResponse
 * @property {Payout[]} items
 * @property {boolean} success
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} ifsc_code
 * @property {string} [account_holder]
 * @property {string} [state]
 * @property {string} account_type
 * @property {string} [branch_name]
 * @property {string} [bank_name]
 * @property {string} [country]
 * @property {number} [pincode]
 * @property {string} [account_no]
 * @property {string} [city]
 */

/**
 * @typedef PayoutRequest
 * @property {string} transfer_type
 * @property {PayoutBankDetails} bank_details
 * @property {string} unique_external_id
 * @property {string} aggregator
 * @property {boolean} is_active
 * @property {Object} users
 */

/**
 * @typedef PayoutResponse
 * @property {Object} payouts
 * @property {string} payment_status
 * @property {string} transfer_type
 * @property {boolean} success
 * @property {Object} bank_details
 * @property {string} aggregator
 * @property {boolean} is_active
 * @property {string} unique_transfer_no
 * @property {Object} users
 * @property {boolean} created
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_default
 * @property {boolean} success
 * @property {boolean} is_active
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_default
 * @property {boolean} is_active
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
 * @property {boolean} [is_verified_flag]
 * @property {boolean} success
 * @property {Object} [data]
 * @property {string} message
 */

/**
 * @typedef NotFoundResourceError
 * @property {boolean} success
 * @property {string} code
 * @property {string} description
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} ifsc_code
 * @property {string} account_holder
 * @property {string} branch_name
 * @property {string} bank_name
 * @property {string} account_no
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {string} order_id
 * @property {BankDetailsForOTP} details
 */

/**
 * @typedef IfscCodeResponse
 * @property {string} branch_name
 * @property {boolean} [success]
 * @property {string} bank_name
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} [delights_user_name]
 * @property {string} title
 * @property {string} account_holder
 * @property {string} subtitle
 * @property {string} bank_name
 * @property {string} account_no
 * @property {string} modified_on
 * @property {string} beneficiary_id
 * @property {string} transfer_mode
 * @property {string} display_name
 * @property {string} email
 * @property {string} [comment]
 * @property {string} ifsc_code
 * @property {string} [mobile]
 * @property {string} created_on
 * @property {number} id
 * @property {string} [branch_name]
 * @property {boolean} is_active
 * @property {string} address
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [order_id]
 * @property {string} [payment_id]
 * @property {Object} [extra_meta]
 * @property {string} [payment_gateway]
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
 * @property {Object} methods
 * @property {boolean} [anonymous_cod]
 * @property {number} [cod_charges]
 * @property {boolean} enabled
 * @property {Object} [payment_selection_lock]
 * @property {string} mode_of_payment
 * @property {Object} [callback_url]
 * @property {number} [cod_amount_limit]
 * @property {string} source
 */

/**
 * @typedef PlatfromPaymentConfig
 * @property {boolean} success
 * @property {string} message
 * @property {PlatformPaymentOptions} data
 */

/**
 * @typedef UpdatePlatformPaymentConfig
 * @property {Object} methods
 * @property {boolean} [anonymous_cod]
 * @property {number} [cod_charges]
 * @property {number} [cod_amount_limit]
 * @property {Object} [payment_selection_lock]
 */

/**
 * @typedef CODdata
 * @property {number} usages
 * @property {boolean} is_active
 * @property {number} limit
 * @property {string} user_id
 * @property {number} remaining_limit
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
 * @typedef EdcModelData
 * @property {string[]} models
 * @property {string} aggregator
 * @property {number} aggregator_id
 */

/**
 * @typedef EdcAggregatorAndModelListResponse
 * @property {boolean} success
 * @property {EdcModelData[]} data
 */

/**
 * @typedef StatisticsData
 * @property {number} inactive_device_count
 * @property {number} active_device_count
 */

/**
 * @typedef EdcDeviceStatsResponse
 * @property {boolean} success
 * @property {StatisticsData} statistics
 */

/**
 * @typedef EdcAddRequest
 * @property {string} terminal_serial_no
 * @property {string} [device_tag]
 * @property {number} store_id
 * @property {number} aggregator_id
 * @property {string} edc_model
 * @property {string} edc_device_serial_no
 */

/**
 * @typedef EdcDevice
 * @property {string} terminal_serial_no
 * @property {string} [aggregator_name]
 * @property {string} application_id
 * @property {string} terminal_unique_identifier
 * @property {string} device_tag
 * @property {string} [edc_model]
 * @property {number} store_id
 * @property {boolean} is_active
 * @property {number} aggregator_id
 * @property {string} [merchant_store_pos_code]
 * @property {string} edc_device_serial_no
 */

/**
 * @typedef EdcDeviceAddResponse
 * @property {boolean} success
 * @property {EdcDevice} data
 */

/**
 * @typedef EdcDeviceDetailsResponse
 * @property {boolean} success
 * @property {EdcDevice} data
 */

/**
 * @typedef EdcUpdateRequest
 * @property {string} [device_tag]
 * @property {string} [edc_model]
 * @property {number} [store_id]
 * @property {string} [is_active]
 * @property {number} [aggregator_id]
 * @property {string} [merchant_store_pos_code]
 * @property {string} [edc_device_serial_no]
 */

/**
 * @typedef EdcDeviceUpdateResponse
 * @property {boolean} success
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
 * @typedef EdcDeviceListResponse
 * @property {boolean} success
 * @property {EdcDevice[]} items
 * @property {Page} page
 */

/**
 * @typedef PaymentInitializationRequest
 * @property {string} order_id
 * @property {string} merchant_order_id
 * @property {string} [device_id]
 * @property {number} amount
 * @property {string} [razorpay_payment_id]
 * @property {number} [timeout]
 * @property {string} customer_id
 * @property {string} aggregator
 * @property {string} contact
 * @property {string} method
 * @property {string} email
 * @property {string} currency
 * @property {string} [vpa]
 */

/**
 * @typedef PaymentInitializationResponse
 * @property {string} merchant_order_id
 * @property {string} [device_id]
 * @property {number} [amount]
 * @property {string} [razorpay_payment_id]
 * @property {string} [upi_poll_url]
 * @property {string} [virtual_id]
 * @property {number} [timeout]
 * @property {string} [bqr_image]
 * @property {boolean} success
 * @property {string} [customer_id]
 * @property {string} aggregator
 * @property {string} [aggregator_order_id]
 * @property {string} [status]
 * @property {string} polling_url
 * @property {string} method
 * @property {string} [currency]
 * @property {string} [vpa]
 */

/**
 * @typedef PaymentStatusUpdateRequest
 * @property {string} order_id
 * @property {string} merchant_order_id
 * @property {string} [device_id]
 * @property {number} amount
 * @property {string} customer_id
 * @property {string} aggregator
 * @property {string} contact
 * @property {string} status
 * @property {string} method
 * @property {string} email
 * @property {string} currency
 * @property {string} [vpa]
 */

/**
 * @typedef PaymentStatusUpdateResponse
 * @property {string} aggregator_name
 * @property {boolean} [success]
 * @property {boolean} retry
 * @property {string} status
 * @property {string} [redirect_url]
 */

/**
 * @typedef ResendOrCancelPaymentRequest
 * @property {string} order_id
 * @property {string} [device_id]
 * @property {string} request_type
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
 * @property {string} text
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef FiltersInfo
 * @property {string} type
 * @property {string} text
 * @property {FilterInfoOption[]} [options]
 * @property {string} value
 */

/**
 * @typedef Prices
 * @property {number} [price_marked]
 * @property {number} [refund_credit]
 * @property {number} [amount_paid]
 * @property {number} [cod_charges]
 * @property {number} [cashback_applied]
 * @property {number} [fynd_credits]
 * @property {number} [refund_amount]
 * @property {number} [price_effective]
 * @property {number} [promotion_effective_discount]
 * @property {number} [value_of_good]
 * @property {number} [coupon_value]
 * @property {number} [discount]
 * @property {number} [cashback]
 * @property {number} [tax_collected_at_source]
 * @property {number} [delivery_charge]
 * @property {number} [amount_paid_roundoff]
 */

/**
 * @typedef UserDataInfo
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {number} [uid]
 * @property {string} [mobile]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [name]
 * @property {string} [avis_user_id]
 * @property {string} [gender]
 * @property {string} [last_name]
 */

/**
 * @typedef ShipmentStatus
 * @property {string} status
 * @property {string} title
 * @property {string} ops_status
 * @property {string} hex_code
 * @property {string} actual_status
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} logo
 * @property {string} type
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} id
 * @property {string} code
 */

/**
 * @typedef GSTDetailsData
 * @property {number} gst_fee
 * @property {string} gstin_code
 * @property {number} value_of_good
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 */

/**
 * @typedef PlatformItem
 * @property {string[]} [image]
 * @property {string} [l3_category_name]
 * @property {boolean} [can_return]
 * @property {number} [l3_category]
 * @property {string} [code]
 * @property {string} [size]
 * @property {string[]} [l1_category]
 * @property {boolean} [can_cancel]
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {string} [name]
 * @property {string[]} [images]
 * @property {number} [id]
 */

/**
 * @typedef BagUnit
 * @property {GSTDetailsData} [gst]
 * @property {number} bag_id
 * @property {boolean} [can_return]
 * @property {Prices} [prices]
 * @property {PlatformItem} [item]
 * @property {Object} status
 * @property {boolean} [can_cancel]
 * @property {number} total_shipment_bags
 * @property {number} item_quantity
 * @property {string} shipment_id
 * @property {string} ordering_channel
 */

/**
 * @typedef ShipmentItem
 * @property {Prices} [prices]
 * @property {Object} [company]
 * @property {UserDataInfo} [user]
 * @property {number} total_bags_count
 * @property {ShipmentStatus} [shipment_status]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {number} total_shipments_in_order
 * @property {Object} [payment_methods]
 * @property {Object} [sla]
 * @property {Object} [channel]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {string} fulfilling_centre
 * @property {BagUnit[]} [bags]
 * @property {Object} [application]
 * @property {number} shipment_created_at
 * @property {string} id
 * @property {string} created_at
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
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef TrackingList
 * @property {string} status
 * @property {boolean} [is_passed]
 * @property {string} text
 * @property {string} [time]
 * @property {boolean} [is_current]
 */

/**
 * @typedef OrderDetailsData
 * @property {Object} [tax_details]
 * @property {string} [cod_charges]
 * @property {string} [affiliate_id]
 * @property {string} [order_date]
 * @property {string} [ordering_channel]
 * @property {string} [order_value]
 * @property {string} [source]
 * @property {string} fynd_order_id
 * @property {Object} [ordering_channel_logo]
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [status]
 * @property {string} [shipment_id]
 * @property {number} [id]
 * @property {string} [created_at]
 * @property {string[]} [bag_list]
 */

/**
 * @typedef UserDetailsData
 * @property {string} [email]
 * @property {string} address
 * @property {string} country
 * @property {string} state
 * @property {string} phone
 * @property {string} name
 * @property {string} pincode
 * @property {string} city
 */

/**
 * @typedef DPDetailsData
 * @property {string} [country]
 * @property {string} [eway_bill_id]
 * @property {string} [awb_no]
 * @property {string} [name]
 * @property {string} [pincode]
 * @property {string} [track_url]
 * @property {string} [gst_tag]
 * @property {number} [id]
 */

/**
 * @typedef EInvoice
 * @property {string} [error_message]
 * @property {string} [signed_invoice]
 * @property {string} [signed_qr_code]
 * @property {string} [error_code]
 * @property {number} [acknowledge_no]
 * @property {string} [acknowledge_date]
 * @property {string} [irn]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [credit_note]
 * @property {EInvoice} [invoice]
 */

/**
 * @typedef OrderingStoreDetails
 * @property {string} code
 * @property {string} address
 * @property {string} store_name
 * @property {string} country
 * @property {string} state
 * @property {string} phone
 * @property {string} city
 * @property {Object} meta
 * @property {string} pincode
 * @property {string} contact_person
 * @property {number} id
 */

/**
 * @typedef PDFLinks
 * @property {string} [label_pos]
 * @property {string} [label_a4]
 * @property {string} invoice_type
 * @property {string} [invoice_a4]
 * @property {string} [invoice_a6]
 * @property {string} [b2b]
 * @property {string} [invoice_pos]
 * @property {string} [po_invoice]
 * @property {string} [label_a6]
 * @property {string} label_type
 * @property {string} [credit_note_url]
 * @property {string} [label]
 * @property {string} [invoice]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_min]
 * @property {string} [t_max]
 */

/**
 * @typedef LockData
 * @property {boolean} [locked]
 * @property {string} [lock_message]
 * @property {boolean} [mto]
 */

/**
 * @typedef Formatted
 * @property {string} [f_max]
 * @property {string} [f_min]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef BuyerDetails
 * @property {string} gstin
 * @property {string} address
 * @property {string} state
 * @property {string} name
 * @property {number} pincode
 * @property {string} city
 * @property {string} [ajio_site_id]
 */

/**
 * @typedef ShipmentMeta
 * @property {string} [dp_id]
 * @property {Object} [bag_weight]
 * @property {Object} [dp_options]
 * @property {string} [dp_sort_key]
 * @property {Object} [return_details]
 * @property {Object} [external]
 * @property {string} [return_affiliate_order_id]
 * @property {number} [shipment_weight]
 * @property {string} [packaging_name]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {number} [return_store_node]
 * @property {LockData} [lock_data]
 * @property {Formatted} [formatted]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [marketplace_store_id]
 * @property {string} [box_type]
 * @property {Object} [b2c_buyer_details]
 * @property {string} [due_date]
 * @property {boolean} same_store_available
 * @property {string} [po_number]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [awb_number]
 * @property {string} [dp_name]
 * @property {string} [return_awb_number]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {number} [shipment_volumetric_weight]
 * @property {number} weight
 * @property {DebugInfo} [debug_info]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [store_invoice_updated_date]
 * @property {string} [order_type]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {Object} [ewaybill_info]
 * @property {string} [forward_affiliate_shipment_id]
 */

/**
 * @typedef AffiliateMeta
 * @property {string} [channel_order_id]
 * @property {string} [coupon_code]
 * @property {string} [box_type]
 * @property {string} [channel_shipment_id]
 * @property {number} [loyalty_discount]
 * @property {number} [size_level_total_qty]
 * @property {string} [order_item_id]
 * @property {string} [due_date]
 * @property {number} [employee_discount]
 * @property {boolean} [is_priority]
 * @property {number} [quantity]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} affiliate_shipment_id
 * @property {PDFLinks} [pdf_links]
 * @property {string} affiliate_order_id
 * @property {string} [affiliate_id]
 * @property {string} affiliate_bag_id
 * @property {string} [ad_id]
 * @property {string} affiliate_store_id
 * @property {ShipmentMeta} shipment_meta
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} [company_affiliate_tag]
 */

/**
 * @typedef BagStateMapper
 * @property {string} [app_display_name]
 * @property {string} state_type
 * @property {string} journey_type
 * @property {boolean} [notify_customer]
 * @property {boolean} [app_facing]
 * @property {string} display_name
 * @property {string} [app_state_name]
 * @property {number} bs_id
 * @property {string} name
 * @property {boolean} [is_active]
 */

/**
 * @typedef BagStatusHistory
 * @property {string} [app_display_name]
 * @property {number} [bsh_id]
 * @property {number} [bag_id]
 * @property {Object[]} [reasons]
 * @property {string} [state_type]
 * @property {string} status
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [created_at]
 * @property {boolean} [forward]
 * @property {string} [shipment_id]
 * @property {string} [display_name]
 * @property {boolean} [kafka_sync]
 * @property {number} [store_id]
 * @property {number} [delivery_partner_id]
 * @property {string} [delivery_awb_number]
 * @property {number} [state_id]
 * @property {string} [updated_at]
 */

/**
 * @typedef Dimensions
 * @property {number} [width]
 * @property {number} [height]
 * @property {boolean} [is_default]
 * @property {number} [length]
 * @property {string} [unit]
 */

/**
 * @typedef Meta
 * @property {Dimensions} [dimension]
 */

/**
 * @typedef FulfillingStore
 * @property {string} code
 * @property {string} address
 * @property {string} fulfillment_channel
 * @property {string} store_name
 * @property {string} country
 * @property {string} state
 * @property {string} phone
 * @property {string} city
 * @property {Object} meta
 * @property {string} pincode
 * @property {string} contact_person
 * @property {number} id
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [mode]
 * @property {string} [logo]
 * @property {string} [source]
 */

/**
 * @typedef BagGST
 * @property {number} [gst_fee]
 * @property {string} [hsn_code]
 * @property {string} [gstin_code]
 * @property {number} [value_of_good]
 * @property {number} [brand_calculated_amount]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [gst_tax_percentage]
 * @property {string} [gst_tag]
 */

/**
 * @typedef CurrentStatus
 * @property {number} [bag_id]
 * @property {number} [updated_at]
 * @property {string} [state_type]
 * @property {string} [status]
 * @property {number} current_status_id
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [shipment_id]
 * @property {boolean} [kafka_sync]
 * @property {number} [store_id]
 * @property {number} [delivery_partner_id]
 * @property {string} [delivery_awb_number]
 * @property {string} [created_at]
 * @property {number} [state_id]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [state]
 * @property {string} [address_category]
 * @property {string} [address1]
 * @property {string} [phone]
 * @property {string} [address_type]
 * @property {number} [longitude]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {string} [pincode]
 * @property {string} [contact_person]
 * @property {string} [area]
 * @property {string} [city]
 * @property {string} [version]
 * @property {string} [updated_at]
 */

/**
 * @typedef BagConfigs
 * @property {boolean} is_returnable
 * @property {boolean} can_be_cancelled
 * @property {boolean} allow_force_return
 * @property {boolean} enable_tracking
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_active
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} refund_credit
 * @property {number} value_of_good
 * @property {Identifier} identifiers
 * @property {string} hsn_code
 * @property {number} total_units
 * @property {number} price_marked
 * @property {number} amount_paid
 * @property {number} transfer_price
 * @property {number} gst_fee
 * @property {number} fynd_credits
 * @property {number} coupon_effective_discount
 * @property {number} coupon_value
 * @property {number} discount
 * @property {number} cashback
 * @property {number} promotion_effective_discount
 * @property {number} delivery_charge
 * @property {number} brand_calculated_amount
 * @property {string} gst_tag
 * @property {number} [amount_paid_roundoff]
 * @property {string} size
 * @property {number} cod_charges
 * @property {number} cashback_applied
 * @property {number} price_effective
 * @property {string} item_name
 * @property {number} [tax_collected_at_source]
 * @property {boolean} added_to_fynd_cash
 * @property {number} gst_tax_percentage
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [return_config]
 * @property {string} [uid]
 * @property {Object} [identifiers]
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
 * @property {DiscountRules[]} [discount_rules]
 * @property {number} [article_quantity]
 * @property {number} [amount]
 * @property {string} [promotion_type]
 * @property {string} [promo_id]
 * @property {boolean} [mrp_promotion]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_name]
 */

/**
 * @typedef OrderBrandName
 * @property {string} company
 * @property {string} [modified_on]
 * @property {string} logo
 * @property {string} brand_name
 * @property {number} id
 * @property {string} created_on
 */

/**
 * @typedef OrderBags
 * @property {number} bag_id
 * @property {boolean} [can_return]
 * @property {BagGST} [gst_details]
 * @property {string} [identifier]
 * @property {Object} [parent_promo_bags]
 * @property {CurrentStatus} [current_status]
 * @property {PlatformItem} [item]
 * @property {boolean} [can_cancel]
 * @property {string} [seller_identifier]
 * @property {number} [quantity]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {BagConfigs} [bag_configs]
 * @property {number} [line_number]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {Prices} [prices]
 * @property {string} [entity_type]
 * @property {OrderBagArticle} [article]
 * @property {string} [display_name]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {OrderBrandName} [brand]
 */

/**
 * @typedef PlatformShipment
 * @property {number} [total_items]
 * @property {TrackingList[]} [tracking_list]
 * @property {number} [fulfilment_priority]
 * @property {OrderDetailsData} [order]
 * @property {ShipmentStatusData} [status]
 * @property {GSTDetailsData} [gst_details]
 * @property {Object} [coupon]
 * @property {string} shipment_id
 * @property {string[]} [shipment_images]
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [payment_mode]
 * @property {DPDetailsData} [dp_details]
 * @property {EinvoiceInfo} [invoice]
 * @property {number} [total_bags]
 * @property {string} [platform_logo]
 * @property {OrderingStoreDetails} [ordering_store]
 * @property {string} [invoice_id]
 * @property {string} [vertical]
 * @property {string} [priority_text]
 * @property {boolean} [enable_dp_tracking]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {string} [user_agent]
 * @property {string} [operational_status]
 * @property {UserDetailsData} [billing_details]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [picked_date]
 * @property {number} [shipment_quantity]
 * @property {Meta} [meta]
 * @property {string} [shipment_status]
 * @property {Object} [delivery_slot]
 * @property {Prices} [prices]
 * @property {Object[]} [custom_meta]
 * @property {string} [packaging_type]
 * @property {string} [journey_type]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {ShipmentPayments} [payments]
 * @property {OrderBags[]} [bags]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {string} [message]
 * @property {PlatformShipment[]} [shipments]
 * @property {boolean} success
 */

/**
 * @typedef OrderMeta
 * @property {number} [mongo_cart_id]
 * @property {number} [cart_id]
 * @property {string} [comment]
 * @property {Object} [extra_meta]
 * @property {number} [employee_id]
 * @property {string} [payment_type]
 * @property {string} [order_platform]
 * @property {Object[]} [files]
 * @property {string[]} [order_child_entities]
 * @property {string} [order_type]
 * @property {number} [ordering_store]
 * @property {string} [currency_symbol]
 * @property {Object[]} [order_tags]
 * @property {Object} [staff]
 * @property {string} [customer_note]
 */

/**
 * @typedef OrderDict
 * @property {Prices} [prices]
 * @property {Object} [tax_details]
 * @property {string} order_date
 * @property {Object} [payment_methods]
 * @property {OrderMeta} [meta]
 * @property {string} fynd_order_id
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {OrderDict} [order]
 * @property {PlatformShipment[]} [shipments]
 * @property {boolean} success
 */

/**
 * @typedef SubLane
 * @property {number} [total_items]
 * @property {Object[]} [actions]
 * @property {string} [text]
 * @property {number} [index]
 * @property {string} [value]
 */

/**
 * @typedef SuperLane
 * @property {number} [total_items]
 * @property {string} text
 * @property {SubLane[]} [options]
 * @property {string} value
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
 * @property {number} [total_order_value]
 * @property {string} [order_created_time]
 * @property {number} [order_value]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {string} [order_id]
 * @property {Object} [meta]
 * @property {string} [payment_mode]
 * @property {PlatformChannel} [channel]
 * @property {UserDataInfo} [user_info]
 * @property {PlatformShipment[]} [shipments]
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
 * @typedef OrderListingResponse
 * @property {string} [message]
 * @property {string} [lane]
 * @property {number} [total_count]
 * @property {PlatformOrderItems[]} [items]
 * @property {Page} [page]
 * @property {boolean} [success]
 */

/**
 * @typedef Options
 * @property {string} [text]
 * @property {number} [value]
 */

/**
 * @typedef MetricsCount
 * @property {string} text
 * @property {string} key
 * @property {Options[]} [options]
 * @property {number} value
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [shipment_type]
 * @property {string} [updated_time]
 * @property {string} [status]
 * @property {string} [account_name]
 * @property {string} [awb]
 * @property {string} [raw_status]
 * @property {Object} [meta]
 * @property {string} [reason]
 * @property {string} [last_location_recieved_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {PlatformTrack[]} [results]
 * @property {Object} [meta]
 */

/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [filters]
 * @property {FiltersInfo[]} [action_centre]
 * @property {FiltersInfo[]} [processed]
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [unfulfilled]
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
 * @property {string} [report_id]
 * @property {Object} [request_details]
 * @property {string} [report_name]
 * @property {string} [status]
 * @property {string} [report_requested_at]
 * @property {string} [report_type]
 * @property {string} [display_name]
 * @property {string} [report_created_at]
 * @property {string} [s3_key]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [article_id]
 * @property {string} [company_id]
 * @property {string} [item_id]
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
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {boolean} [success]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {string} [message]
 * @property {boolean} success
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} [invoice_status]
 * @property {Object} [data]
 * @property {boolean} do_invoice_label_generated
 * @property {string} [store_name]
 * @property {string} [company_id]
 * @property {string} batch_id
 * @property {string} [store_id]
 * @property {string} [store_code]
 * @property {Object} [label]
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
 * @property {string} [namespace]
 * @property {number} [size]
 * @property {string} [file_path]
 * @property {FileUploadResponse} [upload]
 * @property {string} [file_name]
 * @property {string} [method]
 * @property {URL} [cdn]
 * @property {string} [operation]
 * @property {string[]} [tags]
 * @property {string} [content_type]
 */

/**
 * @typedef BulkListingPage
 * @property {number} [current]
 * @property {number} [total]
 * @property {number} [size]
 * @property {boolean} [has_previous]
 * @property {string} [type]
 * @property {boolean} [has_next]
 */

/**
 * @typedef bulkListingData
 * @property {string} [status]
 * @property {string} [store_name]
 * @property {number} [company_id]
 * @property {string} [user_name]
 * @property {string} [file_name]
 * @property {number} [processing]
 * @property {Object[]} [failed_shipments]
 * @property {string} [store_code]
 * @property {Object[]} [successful_shipments]
 * @property {string} [uploaded_on]
 * @property {number} [successful]
 * @property {string} [excel_url]
 * @property {string[]} [processing_shipments]
 * @property {number} [total]
 * @property {string} [user_id]
 * @property {string} [batch_id]
 * @property {number} [failed]
 * @property {number} [store_id]
 * @property {string} [id]
 */

/**
 * @typedef BulkListingResponse
 * @property {BulkListingPage} [page]
 * @property {string} [error]
 * @property {bulkListingData[]} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef QuestionSet
 * @property {string} [display_name]
 * @property {number} [id]
 */

/**
 * @typedef Reason
 * @property {string} [display_name]
 * @property {number} [id]
 * @property {string[]} [qc_type]
 * @property {QuestionSet[]} [question_set]
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
 * @property {number} [successful_shipments_count]
 * @property {number} [failed_shipments_count]
 * @property {string} [company_id]
 * @property {string} [batch_id]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [total_shipments_count]
 * @property {number} [processing_shipments_count]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string[]} [failed_records]
 * @property {string} [message]
 * @property {boolean} [status]
 * @property {string} [user_id]
 * @property {string} [uploaded_by]
 * @property {string} [uploaded_on]
 * @property {string[]} [error]
 * @property {string} [success]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_returnable
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} is_active
 */

/**
 * @typedef BagGSTDetails
 * @property {string} sgst_gst_fee
 * @property {number} gst_fee
 * @property {number} igst_tax_percentage
 * @property {string} hsn_code
 * @property {string} cgst_gst_fee
 * @property {number} cgst_tax_percentage
 * @property {string} [gstin_code]
 * @property {number} value_of_good
 * @property {number} brand_calculated_amount
 * @property {boolean} [is_default_hsn_code]
 * @property {number} tax_collected_at_source
 * @property {string} igst_gst_fee
 * @property {string} hsn_code_id
 * @property {number} gst_tax_percentage
 * @property {string} gst_tag
 * @property {number} sgst_tax_percentage
 */

/**
 * @typedef AffiliateBagDetails
 * @property {string} affiliate_order_id
 * @property {string} affiliate_bag_id
 * @property {number} [loyalty_discount]
 * @property {AffiliateMeta} affiliate_meta
 * @property {number} [employee_discount]
 */

/**
 * @typedef Attributes
 * @property {string} [primary_color]
 * @property {string} [essential]
 * @property {string} [name]
 * @property {string} [marketer_name]
 * @property {string} [primary_material]
 * @property {string} [marketer_address]
 * @property {string} [brand_name]
 * @property {string[]} [gender]
 * @property {string} [primary_color_hex]
 */

/**
 * @typedef Item
 * @property {boolean} [can_return]
 * @property {string} name
 * @property {number} [l3_category]
 * @property {number} brand_id
 * @property {number} [l2_category_id]
 * @property {boolean} [can_cancel]
 * @property {string} [color]
 * @property {number} item_id
 * @property {string[]} image
 * @property {string} [l3_category_name]
 * @property {Object} [meta]
 * @property {string} [gender]
 * @property {string} [branch_url]
 * @property {string} [webstore_product_url]
 * @property {string} slug_key
 * @property {string[]} [l2_category]
 * @property {string} size
 * @property {string} [code]
 * @property {string[]} [l1_category]
 * @property {string} [last_updated_at]
 * @property {Attributes} attributes
 * @property {number} [l1_category_id]
 * @property {number} [department_id]
 * @property {string} brand
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [password]
 * @property {string} [username]
 * @property {string} [user]
 */

/**
 * @typedef Document
 * @property {boolean} verified
 * @property {string} [url]
 * @property {string} ds_type
 * @property {string} value
 * @property {string} legal_name
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
 * @property {string} [password]
 * @property {string} [username]
 * @property {string} [user]
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEwaybill} [e_waybill]
 * @property {StoreEinvoice} [e_invoice]
 */

/**
 * @typedef StoreMeta
 * @property {string} stage
 * @property {Object} [ewaybill_portal_details]
 * @property {string} [gst_number]
 * @property {string[]} [notification_emails]
 * @property {Object} [additional_contact_details]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {string} display_name
 * @property {StoreDocuments} [documents]
 * @property {StoreGstCredentials} gst_credentials
 * @property {Object[]} [timing]
 * @property {Object} [product_return_config]
 */

/**
 * @typedef StoreAddress
 * @property {string} [email]
 * @property {string} country
 * @property {string} address_category
 * @property {number} latitude
 * @property {string} contact_person
 * @property {string} [area]
 * @property {string} state
 * @property {string} [version]
 * @property {string} city
 * @property {string} updated_at
 * @property {string} [address2]
 * @property {string} [landmark]
 * @property {string} created_at
 * @property {string} country_code
 * @property {string} address_type
 * @property {string} address1
 * @property {string} phone
 * @property {number} longitude
 * @property {number} pincode
 */

/**
 * @typedef Store
 * @property {number} company_id
 * @property {string} country
 * @property {string} name
 * @property {boolean} [is_enabled_for_recon]
 * @property {number} latitude
 * @property {string} contact_person
 * @property {string} city
 * @property {string} state
 * @property {string} [updated_at]
 * @property {number} [parent_store_id]
 * @property {string} pincode
 * @property {Object} [brand_id]
 * @property {string} [address2]
 * @property {string} [mall_name]
 * @property {boolean} [is_active]
 * @property {string} created_at
 * @property {string[]} [brand_store_tags]
 * @property {string} login_username
 * @property {string} [mall_area]
 * @property {string} [order_integration_id]
 * @property {string} store_email
 * @property {string} location_type
 * @property {StoreMeta} meta
 * @property {string} [store_active_from]
 * @property {number} [alohomora_user_id]
 * @property {string} [code]
 * @property {string} fulfillment_channel
 * @property {StoreAddress} [store_address_json]
 * @property {string} [vat_no]
 * @property {number} phone
 * @property {number} longitude
 * @property {string} address1
 * @property {number} [packaging_material_count]
 * @property {string} s_id
 * @property {boolean} [is_archived]
 */

/**
 * @typedef Dates
 * @property {string} [order_created]
 * @property {Object} [delivery_date]
 */

/**
 * @typedef B2BPODetails
 * @property {number} [po_tax_amount]
 * @property {boolean} [partial_can_ret]
 * @property {number} [po_line_amount]
 * @property {string} [docker_number]
 * @property {number} [total_gst_percentage]
 * @property {number} [item_base_price]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef Weight
 * @property {number} [shipping]
 * @property {boolean} [is_default]
 * @property {string} [unit]
 */

/**
 * @typedef ReturnConfig
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef Article
 * @property {Dimensions} [dimensions]
 * @property {string} _id
 * @property {string} size
 * @property {string} [code]
 * @property {string} uid
 * @property {Object} [child_details]
 * @property {Object} [raw_meta]
 * @property {string} seller_identifier
 * @property {Identifier} identifiers
 * @property {boolean} [is_set]
 * @property {Weight} [weight]
 * @property {ReturnConfig} [return_config]
 * @property {Object} [a_set]
 * @property {Object} [esp_modified]
 */

/**
 * @typedef Brand
 * @property {string} company
 * @property {number} brand_id
 * @property {string} [pickup_location]
 * @property {string} [script_last_ran]
 * @property {number} [modified_on]
 * @property {string} brand_name
 * @property {string} [invoice_prefix]
 * @property {string} [logo]
 * @property {boolean} [is_virtual_invoice]
 * @property {boolean} [credit_note_allowed]
 * @property {string} [start_date]
 * @property {number} [credit_note_expiry_days]
 * @property {number} [created_on]
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {BagReturnableCancelableStatus} status
 * @property {BagGSTDetails} gst_details
 * @property {string} [identifier]
 * @property {string} [shipment_id]
 * @property {BagStatusHistory} current_operational_status
 * @property {Object} [parent_promo_bags]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {number} [bag_update_time]
 * @property {BagStatusHistory} current_status
 * @property {Object[]} [reasons]
 * @property {Object} [qc_required]
 * @property {Item} item
 * @property {ArticleDetails} [article_details]
 * @property {Store} [ordering_store]
 * @property {string} [seller_identifier]
 * @property {string} [b_type]
 * @property {Dates} [dates]
 * @property {number} [quantity]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {string} [operational_status]
 * @property {string} [order_integration_id]
 * @property {number} [line_number]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {Object} [restore_promos]
 * @property {BagMeta} [meta]
 * @property {BagStatusHistory[]} bag_status
 * @property {string[]} [tags]
 * @property {boolean} [restore_coupon]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {number} b_id
 * @property {number[]} [original_bag_list]
 * @property {number} [no_of_bags_order]
 * @property {Prices} prices
 * @property {string} [entity_type]
 * @property {Article} article
 * @property {string} journey_type
 * @property {string} [display_name]
 * @property {Object[]} [applied_promos]
 * @property {Brand} brand
 */

/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} error
 */

/**
 * @typedef Page1
 * @property {number} current
 * @property {number} size
 * @property {string} page_type
 * @property {number} item_total
 * @property {boolean} has_next
 */

/**
 * @typedef GetBagsPlatformResponse
 * @property {Page1} page
 * @property {BagDetailsPlatformResponse[]} items
 */

/**
 * @typedef GeneratePosOrderReceiptResponse
 * @property {string} [payment_receipt]
 * @property {string} [order_id]
 * @property {string} [invoice_receipt]
 * @property {boolean} [success]
 */

/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} shipment_ids
 */

/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [message]
 * @property {string} [shipment_id]
 * @property {string} [error]
 * @property {number} [status]
 */

/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */

/**
 * @typedef ErrorResponse1
 * @property {string} message
 * @property {number} status
 * @property {string} [error_trace]
 */

/**
 * @typedef StoreReassign
 * @property {string} [affiliate_order_id]
 * @property {string} [set_id]
 * @property {string} [item_id]
 * @property {string} [mongo_article_id]
 * @property {number[]} [reason_ids]
 * @property {number} [bag_id]
 * @property {string} [affiliate_bag_id]
 * @property {number} store_id
 * @property {string} [fynd_order_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef Entities
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [id]
 * @property {string} reason_text
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} action
 * @property {string} action_type
 * @property {Entities[]} entities
 * @property {string} entity_type
 */

/**
 * @typedef Bags
 * @property {string} [affiliate_bag_id]
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_order_id]
 * @property {number} [bag_id]
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef CheckResponse
 * @property {boolean} [is_shipment_locked]
 * @property {boolean} [lock_status]
 * @property {Bags[]} [bags]
 * @property {OriginalFilter} [original_filter]
 * @property {boolean} [is_bag_locked]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [status]
 * @property {string} [shipment_id]
 * @property {string} [affiliate_id]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {string} [message]
 * @property {CheckResponse[]} [check_response]
 * @property {boolean} [success]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [to_datetime]
 * @property {string} [created_at]
 * @property {number} [company_id]
 * @property {string} [logo_url]
 * @property {string} [from_datetime]
 * @property {string} [platform_name]
 * @property {string} [platform_id]
 * @property {number} id
 * @property {string} [title]
 * @property {string} [description]
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
 * @property {string} [identifier]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsDataUpdatesFilters
 * @property {string} [identifier]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsDataUpdates
 * @property {Object} [data]
 * @property {ProductsDataUpdatesFilters[]} [filters]
 */

/**
 * @typedef EntitiesDataUpdates
 * @property {Object} [data]
 * @property {Object[]} [filters]
 */

/**
 * @typedef DataUpdates
 * @property {ProductsDataUpdates[]} [products]
 * @property {EntitiesDataUpdates[]} [entities]
 */

/**
 * @typedef ProductsReasonsData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {number} [quantity]
 * @property {string} [identifier]
 * @property {number} [line_number]
 */

/**
 * @typedef ProductsReasons
 * @property {ProductsReasonsData} [data]
 * @property {ProductsReasonsFilters[]} [filters]
 */

/**
 * @typedef EntityReasonData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
 */

/**
 * @typedef EntitiesReasons
 * @property {EntityReasonData} [data]
 * @property {Object[]} [filters]
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
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [status]
 * @property {string} [exclude_bags_next_state]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [force_transition]
 * @property {boolean} [task]
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [lock_after_transition]
 * @property {StatuesRequest[]} [statuses]
 */

/**
 * @typedef ShipmentsResponse
 * @property {Object} [final_state]
 * @property {string} [identifier]
 * @property {number} [status]
 * @property {Object} [meta]
 * @property {string} [code]
 * @property {string} [stack_trace]
 * @property {string} [message]
 * @property {string} [exception]
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
 * @typedef MarketPlacePdf
 * @property {string} [label]
 * @property {string} [invoice]
 */

/**
 * @typedef AffiliateBag
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} company_id
 * @property {string} sku
 * @property {number} discount
 * @property {Object} affiliate_meta
 * @property {string} fynd_store_id
 * @property {string} modified_on
 * @property {string} hsn_code_id
 * @property {number} delivery_charge
 * @property {string} _id
 * @property {string} seller_identifier
 * @property {number} price_marked
 * @property {number} unit_price
 * @property {string} item_size
 * @property {number} price_effective
 * @property {number} transfer_price
 * @property {number} quantity
 * @property {number} store_id
 * @property {string} affiliate_store_id
 * @property {number} item_id
 * @property {Object} identifier
 * @property {number} avl_qty
 * @property {number} amount_paid
 */

/**
 * @typedef OrderUser
 * @property {string} state
 * @property {string} [address2]
 * @property {number} mobile
 * @property {string} pincode
 * @property {string} first_name
 * @property {string} country
 * @property {string} email
 * @property {string} city
 * @property {string} last_name
 * @property {number} phone
 * @property {string} [address1]
 */

/**
 * @typedef UserData
 * @property {OrderUser} [billing_user]
 * @property {OrderUser} [shipping_user]
 */

/**
 * @typedef ArticleDetails1
 * @property {number} brand_id
 * @property {Object} attributes
 * @property {Object} weight
 * @property {Object} dimension
 * @property {number} quantity
 * @property {Object} category
 * @property {string} _id
 */

/**
 * @typedef LocationDetails
 * @property {string} fulfillment_type
 * @property {ArticleDetails1[]} articles
 * @property {number} fulfillment_id
 */

/**
 * @typedef ShipmentDetails
 * @property {number} shipments
 * @property {ArticleDetails1[]} articles
 * @property {string} affiliate_shipment_id
 * @property {number} fulfillment_id
 * @property {Object} [meta]
 * @property {number} [dp_id]
 * @property {string} [box_type]
 */

/**
 * @typedef ShipmentConfig
 * @property {string} to_pincode
 * @property {string} source
 * @property {string} action
 * @property {string} identifier
 * @property {LocationDetails} [location_details]
 * @property {ShipmentDetails[]} shipment
 * @property {string} journey
 * @property {string} payment_mode
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
 * @typedef OrderInfo
 * @property {string} [affiliate_order_id]
 * @property {number} discount
 * @property {AffiliateBag[]} bags
 * @property {number} cod_charges
 * @property {OrderUser} billing_address
 * @property {Object} [payment]
 * @property {Object} items
 * @property {string} payment_mode
 * @property {OrderUser} shipping_address
 * @property {UserData} user
 * @property {number} delivery_charges
 * @property {ShipmentData} [shipment]
 * @property {number} order_value
 * @property {OrderPriority} [order_priority]
 * @property {string} [coupon]
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} token
 * @property {string} created_at
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} name
 * @property {string} secret
 * @property {string} updated_at
 * @property {string} id
 * @property {string} owner
 * @property {string} [description]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
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
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryOrderConfig} [order]
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateAppConfig} [app]
 * @property {AffiliateInventoryConfig} [inventory]
 */

/**
 * @typedef Affiliate
 * @property {string} token
 * @property {string} id
 * @property {AffiliateConfig} [config]
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {number} store_id
 * @property {string} marketplace_store_id
 */

/**
 * @typedef OrderConfig
 * @property {Affiliate} affiliate
 * @property {string} [bag_end_state]
 * @property {string} [article_lookup]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {boolean} [create_user]
 * @property {string} [store_lookup]
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
 * @property {string} slug
 * @property {string} display_text
 * @property {number} id
 * @property {string} description
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef PostHistoryData
 * @property {string} message
 * @property {string} user_name
 */

/**
 * @typedef PostHistoryFilters
 * @property {string} shipment_id
 * @property {string} [line_number]
 * @property {string} [identifier]
 */

/**
 * @typedef PostActivityHistory
 * @property {PostHistoryData} data
 * @property {PostHistoryFilters[]} filters
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
 * @property {string} [l3_detail]
 * @property {string} [ticket_id]
 * @property {string} createdat
 * @property {string} [l1_detail]
 * @property {string} type
 * @property {string} [ticket_url]
 * @property {string} user
 * @property {number} [bag_id]
 * @property {string} message
 * @property {string} [l2_detail]
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
 * @property {number} phone_number
 * @property {string} brand_name
 * @property {number} amount_paid
 * @property {string} country_code
 * @property {string} message
 * @property {number} shipment_id
 * @property {string} payment_mode
 * @property {string} customer_name
 * @property {string} order_id
 */

/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {SmsDataPayload} [data]
 * @property {number} bag_id
 */

/**
 * @typedef Meta1
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */

/**
 * @typedef ShipmentDetail
 * @property {string} [remarks]
 * @property {number[]} [bag_list]
 * @property {string} [status]
 * @property {Meta1} meta
 * @property {string} [shipment_id]
 * @property {number} id
 */

/**
 * @typedef OrderDetails
 * @property {string} [created_at]
 * @property {string} [fynd_order_id]
 */

/**
 * @typedef OrderStatusData
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {OrderDetails} order_details
 * @property {string[]} [errors]
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
 * @property {string} qc_required
 * @property {string} order_type
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
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
 * @property {Tax} [tax]
 * @property {string} type
 * @property {string} name
 * @property {string} [code]
 * @property {Object} amount
 */

/**
 * @typedef TaxInfo
 * @property {string} [gstin]
 * @property {string} [b2b_gstin_number]
 */

/**
 * @typedef ProcessingDates
 * @property {string} [pack_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {string} [dispatch_after_date]
 * @property {string} [confirm_by_date]
 * @property {string} [dispatch_by_date]
 * @property {Object} [dp_pickup_slot]
 */

/**
 * @typedef LineItem
 * @property {Charge[]} [charges]
 * @property {string} [custom_messasge]
 * @property {Object} [meta]
 * @property {number} [quantity]
 * @property {string} [external_line_id]
 * @property {string} seller_identifier
 */

/**
 * @typedef Shipment
 * @property {number} [priority]
 * @property {string} [external_shipment_id]
 * @property {number} location_id
 * @property {ProcessingDates} [processing_dates]
 * @property {Object} [meta]
 * @property {LineItem[]} line_items
 */

/**
 * @typedef BillingInfo
 * @property {string} state
 * @property {string} [house_no]
 * @property {string} country
 * @property {string} city
 * @property {string} [state_code]
 * @property {string} [address2]
 * @property {string} pincode
 * @property {string} first_name
 * @property {string} [alternate_email]
 * @property {string} [middle_name]
 * @property {string} [gender]
 * @property {string} [external_customer_code]
 * @property {string} primary_mobile_number
 * @property {string} [customer_code]
 * @property {string} [alternate_mobile_number]
 * @property {string} [title]
 * @property {string} address1
 * @property {string} [floor_no]
 * @property {string} primary_email
 * @property {string} [country_code]
 * @property {string} [last_name]
 */

/**
 * @typedef PaymentMethod
 * @property {string} mode
 * @property {Object} [meta]
 * @property {string} refund_by
 * @property {string} name
 * @property {Object} [transaction_data]
 * @property {string} collect_by
 * @property {number} amount
 */

/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */

/**
 * @typedef ShippingInfo
 * @property {string} state
 * @property {string} [house_no]
 * @property {string} country
 * @property {string} city
 * @property {string} [state_code]
 * @property {string} [landmark]
 * @property {string} [address2]
 * @property {string} pincode
 * @property {string} first_name
 * @property {string} [alternate_email]
 * @property {string} [middle_name]
 * @property {string} [shipping_type]
 * @property {string} [gender]
 * @property {string} [external_customer_code]
 * @property {Object[]} [slot]
 * @property {string} primary_mobile_number
 * @property {string} [customer_code]
 * @property {string} [alternate_mobile_number]
 * @property {Object} [geo_location]
 * @property {string} [title]
 * @property {string} address1
 * @property {string} [address_type]
 * @property {string} [floor_no]
 * @property {string} primary_email
 * @property {string} [country_code]
 * @property {string} [last_name]
 */

/**
 * @typedef CreateOrderAPI
 * @property {Charge[]} [charges]
 * @property {TaxInfo} [tax_info]
 * @property {Shipment[]} shipments
 * @property {string} [external_creation_date]
 * @property {BillingInfo} billing_info
 * @property {Object} [meta]
 * @property {Object} [currency_info]
 * @property {string} [external_order_id]
 * @property {PaymentInfo} payment_info
 * @property {ShippingInfo} shipping_info
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {Object} [info]
 * @property {string} [request_id]
 * @property {number} status
 * @property {string} [meta]
 * @property {string} [code]
 * @property {string} [stack_trace]
 * @property {string} message
 * @property {string} [exception]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [mode]
 * @property {string} [collect_by]
 * @property {string} [refund_by]
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
 * @property {Object} [logo_url]
 * @property {boolean} [location_reassignment]
 * @property {string[]} [lock_states]
 * @property {string} [shipment_assignment]
 * @property {CreateChannelPaymentInfo} [payment_info]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [is_inserted]
 * @property {boolean} [is_upserted]
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
 * @property {string} start_date
 * @property {number} mobile
 * @property {string} end_date
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
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetSearchWordsData
 * @property {Object} [result]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {string} [uid]
 */

/**
 * @typedef ErrorResponse
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [error]
 * @property {string} [code]
 * @property {number} [status]
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
 * @typedef GetSearchWordsDetailResponse
 * @property {GetSearchWordsData} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */

/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AutocompletePageAction
 * @property {string} [url]
 * @property {string} [type]
 * @property {Object} [params]
 * @property {Object} [query]
 */

/**
 * @typedef AutocompleteAction
 * @property {string} [type]
 * @property {AutocompletePageAction} [page]
 */

/**
 * @typedef Media
 * @property {string} [url]
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef AutocompleteResult
 * @property {string} [display]
 * @property {Object} [_custom_json]
 * @property {AutocompleteAction} [action]
 * @property {Media} [logo]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {AutocompleteResult[]} [results]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {Object[]} [results]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {string} [uid]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {string[]} [words]
 * @property {Object[]} [results]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 */

/**
 * @typedef ProductBundleItem
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} product_uid
 * @property {boolean} [auto_select]
 * @property {number} min_quantity
 * @property {number} max_quantity
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {ProductBundleItem[]} products
 * @property {Object} [created_by]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string} slug
 * @property {string} choice
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {boolean} [same_store_assignment]
 * @property {string} [created_on]
 * @property {Object} [meta]
 * @property {number} [company_id]
 * @property {string[]} [page_visibility]
 * @property {string} name
 * @property {string} [logo]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductBundleRequest
 * @property {ProductBundleItem[]} products
 * @property {Object} [created_by]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string} slug
 * @property {string} choice
 * @property {string} [modified_on]
 * @property {boolean} [same_store_assignment]
 * @property {string} [created_on]
 * @property {Object} [meta]
 * @property {number} [company_id]
 * @property {string[]} [page_visibility]
 * @property {string} name
 * @property {string} [logo]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {ProductBundleItem[]} products
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string} slug
 * @property {string} choice
 * @property {string} [modified_on]
 * @property {boolean} [same_store_assignment]
 * @property {Object} [meta]
 * @property {number} [company_id]
 * @property {string[]} [page_visibility]
 * @property {string} name
 * @property {string} [logo]
 */

/**
 * @typedef Price
 * @property {number} [max_effective]
 * @property {string} [currency]
 * @property {number} [min_effective]
 * @property {number} [min_marked]
 * @property {number} [max_marked]
 */

/**
 * @typedef LimitedProductData
 * @property {string[]} [sizes]
 * @property {string} [item_code]
 * @property {string} [country_of_origin]
 * @property {Object} [attributes]
 * @property {Object} [price]
 * @property {string} [slug]
 * @property {Object} [identifier]
 * @property {string[]} [images]
 * @property {number} [quantity]
 * @property {string} [short_description]
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef Size
 * @property {boolean} [is_available]
 * @property {string} [display]
 * @property {string} [value]
 * @property {number} [quantity]
 */

/**
 * @typedef GetProducts
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} [product_uid]
 * @property {Price} [price]
 * @property {number} [min_quantity]
 * @property {boolean} [auto_select]
 * @property {LimitedProductData} [product_details]
 * @property {number} [max_quantity]
 * @property {Size[]} [sizes]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {GetProducts[]} [products]
 * @property {boolean} [is_active]
 * @property {string} [slug]
 * @property {string} [choice]
 * @property {boolean} [same_store_assignment]
 * @property {Object} [meta]
 * @property {number} [company_id]
 * @property {string[]} [page_visibility]
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
 */

/**
 * @typedef Meta
 * @property {Object[]} [values]
 * @property {Object} [headers]
 * @property {string} [unit]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {Object} [created_by]
 * @property {string} [tag]
 * @property {string} title
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {boolean} [active]
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [image]
 * @property {number} [brand_id]
 * @property {number} [company_id]
 * @property {Guide} [guide]
 * @property {string} name
 * @property {string} [subtitle]
 */

/**
 * @typedef SuccessResponse
 * @property {boolean} [success]
 */

/**
 * @typedef SizeGuideResponse
 * @property {Object} [created_by]
 * @property {string} [tag]
 * @property {string} [title]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {boolean} [active]
 * @property {string} [created_on]
 * @property {number} [brand_id]
 * @property {number} [company_id]
 * @property {Object} [guide]
 * @property {string} [name]
 * @property {string} [subtitle]
 */

/**
 * @typedef SEOData
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef MOQData
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 * @property {number} [minimum]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {SEOData} [seo]
 * @property {boolean} [is_gift]
 * @property {MOQData} [moq]
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 * @property {number} [minimum]
 */

/**
 * @typedef MetaFields
 * @property {Object} value
 * @property {Object} key
 */

/**
 * @typedef ApplicationItemMeta
 * @property {ApplicationItemSEO} [seo]
 * @property {boolean} [is_gift]
 * @property {ApplicationItemMOQ} [moq]
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 * @property {Object} [_custom_json]
 * @property {MetaFields[]} [_custom_meta]
 */

/**
 * @typedef SuccessResponse1
 * @property {boolean} [success]
 * @property {number} [uid]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [values]
 * @property {Object[]} data
 * @property {Object[]} [condition]
 */

/**
 * @typedef PageResponseType
 * @property {boolean} has_next
 * @property {number} total_count
 * @property {number} next
 * @property {number} current
 */

/**
 * @typedef GetConfigResponse
 * @property {PageResponseType} page
 * @property {Object[]} data
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {string} [key]
 * @property {string} display_type
 * @property {boolean} is_active
 * @property {string} [slug]
 * @property {string} [unit]
 * @property {number} priority
 * @property {string} name
 * @property {string} [logo]
 */

/**
 * @typedef AppConfigurationDetail
 * @property {string} app_id
 * @property {boolean} is_active
 * @property {string} slug
 * @property {string[]} [template_slugs]
 * @property {boolean} is_default
 * @property {number} priority
 * @property {string} [name]
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} [logo]
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {string} key
 * @property {boolean} is_active
 * @property {string} app_id
 * @property {string} default_key
 * @property {boolean} is_default
 * @property {number} priority
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
 * @property {Object[]} [units]
 * @property {string[]} [filter_types]
 * @property {string} [key]
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
 * @property {string} key
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef ConfigurationListingSort
 * @property {string} default_key
 * @property {ConfigurationListingSortConfig[]} [config]
 */

/**
 * @typedef ConfigurationBucketPoints
 * @property {string} [display]
 * @property {number} [end]
 * @property {number} [start]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {string} [value]
 * @property {Object} [map]
 * @property {string} [condition]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {Object[]} [map_values]
 * @property {string} [sort]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} key
 * @property {boolean} is_active
 * @property {string} [display_name]
 * @property {string} type
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {number} priority
 * @property {string} [name]
 * @property {string} [logo]
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
 * @property {number} max
 * @property {number} min
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} key
 * @property {string} display_type
 * @property {boolean} is_active
 * @property {ProductSize} size
 * @property {number} priority
 * @property {string} name
 * @property {string} [logo]
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {string} key
 * @property {string} [title]
 * @property {boolean} is_active
 * @property {ProductSize} [size]
 * @property {number} priority
 * @property {string} [subtitle]
 * @property {string} [logo]
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
 * @typedef AppCatalogConfiguration
 * @property {Object} [created_by]
 * @property {string} [config_id]
 * @property {ConfigurationListing} [listing]
 * @property {string} config_type
 * @property {string} app_id
 * @property {ConfigurationProduct} [product]
 * @property {string} [type]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} [created_on]
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {boolean} [is_default]
 * @property {AppCatalogConfiguration} [data]
 */

/**
 * @typedef AppConfiguration
 * @property {Object} [created_by]
 * @property {string} [config_id]
 * @property {ConfigurationListing} [listing]
 * @property {string} config_type
 * @property {string} app_id
 * @property {ConfigurationProduct} [product]
 * @property {string} [type]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} [created_on]
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
 * @property {string} config_type
 * @property {string} app_id
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} [id]
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {boolean} [is_default]
 * @property {EntityConfiguration} [data]
 */

/**
 * @typedef ProductFiltersValue
 * @property {string} display
 * @property {number} [max]
 * @property {boolean} is_selected
 * @property {string} [display_format]
 * @property {Object} value
 * @property {number} [min]
 * @property {string} [currency_symbol]
 * @property {number} [count]
 * @property {string} [query_format]
 * @property {number} [selected_min]
 * @property {string} [currency_code]
 * @property {number} [selected_max]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} display
 * @property {string} [kind]
 * @property {string[]} [operators]
 * @property {string} name
 * @property {string} [logo]
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values
 * @property {ProductFiltersKey} key
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
 * @typedef CollectionQuery
 * @property {string} op
 * @property {Object[]} value
 * @property {string} attribute
 */

/**
 * @typedef BannerImage
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [landscape]
 * @property {BannerImage} [portrait]
 */

/**
 * @typedef Media1
 * @property {string} [type]
 * @property {string} url
 * @property {Object} [meta]
 */

/**
 * @typedef ActionPage
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 * @property {PageType} type
 */

/**
 * @typedef Action
 * @property {ActionPage} [page]
 * @property {ActionPage} [popup]
 * @property {string} [type]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {boolean} [is_active]
 * @property {Object} [cron]
 * @property {boolean} [allow_sort]
 * @property {Object} [_schedule]
 * @property {string} [uid]
 * @property {CollectionQuery[]} [query]
 * @property {string[]} [tag]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {Media1} [logo]
 * @property {boolean} [allow_facets]
 * @property {string} [type]
 * @property {Action} [action]
 * @property {Object} [badge]
 * @property {string[]} [visible_facets_keys]
 * @property {number} [priority]
 * @property {string} [app_id]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {string} [name]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {string} [display]
 * @property {string} [name]
 * @property {boolean} [is_selected]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {string} [display]
 * @property {string} [name]
 * @property {boolean} [is_selected]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterType[]} [type]
 * @property {CollectionListingFilterTag[]} [tags]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 * @property {CollectionListingFilter} [filters]
 */

/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 */

/**
 * @typedef UserInfo
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [email]
 */

/**
 * @typedef NextSchedule
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef CollectionSchedule
 * @property {number} [duration]
 * @property {string} [cron]
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [end]
 * @property {string} [start]
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
 * @typedef CollectionBadge
 * @property {string} [text]
 * @property {string} [color]
 */

/**
 * @typedef CreateCollection
 * @property {string[]} [tags]
 * @property {SeoDetail} [seo]
 * @property {UserInfo} [modified_by]
 * @property {boolean} [is_active]
 * @property {boolean} [allow_sort]
 * @property {CollectionSchedule} [_schedule]
 * @property {CollectionQuery[]} [query]
 * @property {UserInfo} [created_by]
 * @property {CollectionBanner} banners
 * @property {string} [description]
 * @property {Object} [_custom_json]
 * @property {CollectionImage} logo
 * @property {boolean} [allow_facets]
 * @property {string} type
 * @property {boolean} [published]
 * @property {boolean} [is_visible]
 * @property {CollectionBadge} [badge]
 * @property {Object} [_locale_language]
 * @property {string[]} [visible_facets_keys]
 * @property {number} [priority]
 * @property {string} [sort_on]
 * @property {string} app_id
 * @property {string} slug
 * @property {Object} [meta]
 * @property {string} name
 */

/**
 * @typedef CollectionCreateResponse
 * @property {boolean} [is_active]
 * @property {Object} [cron]
 * @property {boolean} [allow_sort]
 * @property {Object} [_schedule]
 * @property {CollectionQuery[]} [query]
 * @property {string[]} [tag]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {BannerImage} [logo]
 * @property {boolean} [allow_facets]
 * @property {string} [type]
 * @property {Object} [badge]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [sort_on]
 * @property {string} [app_id]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {string} [name]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {boolean} [is_active]
 * @property {Object} [cron]
 * @property {boolean} [allow_sort]
 * @property {Object} [_schedule]
 * @property {string} [uid]
 * @property {CollectionQuery[]} [query]
 * @property {string[]} [tag]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {Media1} [logo]
 * @property {boolean} [allow_facets]
 * @property {string} [type]
 * @property {Object} [badge]
 * @property {string[]} [visible_facets_keys]
 * @property {number} [priority]
 * @property {string} [app_id]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {string} [name]
 */

/**
 * @typedef UpdateCollection
 * @property {string[]} [tags]
 * @property {SeoDetail} [seo]
 * @property {UserInfo} [modified_by]
 * @property {boolean} [is_active]
 * @property {boolean} [allow_sort]
 * @property {CollectionSchedule} [_schedule]
 * @property {CollectionQuery[]} [query]
 * @property {CollectionBanner} [banners]
 * @property {string} [description]
 * @property {Object} [_custom_json]
 * @property {CollectionImage} [logo]
 * @property {boolean} [allow_facets]
 * @property {string} [type]
 * @property {boolean} [published]
 * @property {boolean} [is_visible]
 * @property {CollectionBadge} [badge]
 * @property {Object} [_locale_language]
 * @property {string[]} [visible_facets_keys]
 * @property {number} [priority]
 * @property {string} [sort_on]
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {string} [name]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [key]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {ProductDetailAttribute[]} [details]
 * @property {string} [title]
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
 * @property {Price1} [marked]
 * @property {Price1} [effective]
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
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string[]} [highlights]
 * @property {Object} [attributes]
 * @property {number} [uid]
 * @property {string} [item_type]
 * @property {string} [image_nature]
 * @property {string} [discount]
 * @property {ProductListingPrice} [price]
 * @property {string[]} [similars]
 * @property {string} [description]
 * @property {Media1[]} [medias]
 * @property {string} [product_online_date]
 * @property {number} [rating]
 * @property {Object} [teaser_tag]
 * @property {ProductBrand} [brand]
 * @property {boolean} [sellable]
 * @property {number} [rating_count]
 * @property {string} [type]
 * @property {string} [color]
 * @property {boolean} [has_variant]
 * @property {string} [item_code]
 * @property {string} slug
 * @property {Object} [promo_meta]
 * @property {string[]} [tryouts]
 * @property {string} [short_description]
 * @property {string} [name]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductListingDetail[]} [items]
 * @property {Page} [page]
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef ItemQueryForUserCollection
 * @property {number} [item_id]
 * @property {string} [action]
 */

/**
 * @typedef CollectionItemRequest
 * @property {string} [type]
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {CollectionQuery[]} [query]
 */

/**
 * @typedef UpdatedResponse
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [count]
 * @property {number} [sellable_count]
 * @property {number} [out_of_stock_count]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [article_freshness]
 * @property {number} [total_articles]
 * @property {number} [available_sizes]
 * @property {number} [total_sizes]
 * @property {number} [available_articles]
 * @property {string} [name]
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
 * @property {number[]} [store_ids]
 * @property {string} [platform]
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {string} opt_level
 * @property {boolean} [enabled]
 */

/**
 * @typedef CompanyOptIn
 * @property {Object} [created_by]
 * @property {number[]} store_ids
 * @property {string} platform
 * @property {Object} [modified_by]
 * @property {number} modified_on
 * @property {number} created_on
 * @property {number[]} brand_ids
 * @property {number} company_id
 * @property {string} opt_level
 * @property {boolean} enabled
 */

/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
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
 * @property {number} [total_article]
 * @property {string} [brand_name]
 * @property {number} [brand_id]
 * @property {number} [company_id]
 */

/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {string} [company]
 * @property {number} [brand]
 * @property {number} [store]
 */

/**
 * @typedef StoreDetail
 * @property {string} [store_code]
 * @property {Object[]} [documents]
 * @property {string} [modified_on]
 * @property {string} [display_name]
 * @property {Object} [manager]
 * @property {Object} [timing]
 * @property {string} [store_type]
 * @property {Object} [address]
 * @property {Object[]} [additional_contacts]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */

/**
 * @typedef AttributeMasterFilter
 * @property {boolean} indexing
 * @property {number} [priority]
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
 * @property {boolean} [multi]
 * @property {string} type
 * @property {boolean} [mandatory]
 * @property {AttributeSchemaRange} [range]
 * @property {string[]} [allowed_values]
 * @property {string} [format]
 */

/**
 * @typedef GenderDetail
 * @property {AttributeMasterDetails} [details]
 * @property {string} [logo]
 * @property {string} [slug]
 * @property {AttributeMasterFilter} [filters]
 * @property {string} [id]
 * @property {boolean} [is_nested]
 * @property {string} [description]
 * @property {AttributeMasterMeta} [meta]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string[]} [departments]
 * @property {AttributeMaster} [schema]
 * @property {string} [name]
 */

/**
 * @typedef CategoriesResponse
 * @property {string} [slug_key]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [template_slug]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {CategoriesResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PTErrorResponse
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {Object} [meta]
 * @property {string} [code]
 * @property {number} [status]
 */

/**
 * @typedef UserSerializer
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {string} [contact]
 */

/**
 * @typedef GetDepartment
 * @property {UserSerializer} [created_by]
 * @property {string[]} [synonyms]
 * @property {string} [search]
 * @property {number} [priority_order]
 * @property {string} [item_type]
 * @property {boolean} [is_active]
 * @property {UserSerializer} [modified_by]
 * @property {string} [slug]
 * @property {number} [page_size]
 * @property {string} [modified_on]
 * @property {number} [page_no]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [logo]
 */

/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {string} [message]
 * @property {Object} [errors]
 * @property {Object} [meta]
 * @property {string} [code]
 * @property {number} [status]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string[]} [synonyms]
 * @property {string[]} [tags]
 * @property {number} priority_order
 * @property {string} [_cls]
 * @property {boolean} [is_active]
 * @property {Object} [platforms]
 * @property {string} [slug]
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {number} [uid]
 * @property {string} logo
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
 * @property {string} username
 * @property {string} user_id
 * @property {boolean} [super_user]
 * @property {string} [contact]
 */

/**
 * @typedef DepartmentModel
 * @property {UserDetail} [created_by]
 * @property {Object[]} [synonyms]
 * @property {number} priority_order
 * @property {UserDetail} [verified_by]
 * @property {UserDetail} [modified_by]
 * @property {boolean} [is_active]
 * @property {string} modified_on
 * @property {string} [verified_on]
 * @property {Object} [slug]
 * @property {Object} [_cls]
 * @property {string} created_on
 * @property {Object} [_id]
 * @property {Object} [_custom_json]
 * @property {Object} name
 * @property {number} [uid]
 * @property {string} logo
 */

/**
 * @typedef ProductTemplate
 * @property {boolean} is_physical
 * @property {Object} [created_by]
 * @property {string} [tag]
 * @property {string[]} [categories]
 * @property {string[]} [attributes]
 * @property {boolean} [is_active]
 * @property {boolean} is_expirable
 * @property {string} slug
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {boolean} [is_archived]
 * @property {string} [logo]
 */

/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TemplateDetails
 * @property {boolean} is_physical
 * @property {string} [tag]
 * @property {string[]} [categories]
 * @property {string[]} [attributes]
 * @property {boolean} [is_active]
 * @property {boolean} is_expirable
 * @property {string} slug
 * @property {string} [id]
 * @property {string} [description]
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {boolean} [is_archived]
 * @property {string} [logo]
 */

/**
 * @typedef Properties
 * @property {Object} [product_publish]
 * @property {Object} [tags]
 * @property {Object} [media]
 * @property {Object} [is_active]
 * @property {Object} [highlights]
 * @property {Object} [hsn_code]
 * @property {Object} [return_config]
 * @property {Object} [sizes]
 * @property {Object} [no_of_boxes]
 * @property {Object} [item_type]
 * @property {Object} [custom_order]
 * @property {Object} [country_of_origin]
 * @property {Object} [trader_type]
 * @property {Object} [product_group_tag]
 * @property {Object} [command]
 * @property {Object} [variants]
 * @property {Object} [is_dependent]
 * @property {Object} [description]
 * @property {Object} [teaser_tag]
 * @property {Object} [currency]
 * @property {Object} [item_code]
 * @property {Object} [slug]
 * @property {Object} [size_guide]
 * @property {Object} [multi_size]
 * @property {Object} [brand_uid]
 * @property {Object} [trader]
 * @property {Object} [short_description]
 * @property {Object} [category_slug]
 * @property {Object} [name]
 */

/**
 * @typedef GlobalValidation
 * @property {Object} [definitions]
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} [description]
 * @property {Properties} [properties]
 * @property {string[]} [required]
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
 * @property {string[]} [templates]
 * @property {string} [type]
 * @property {string[]} [brand]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {VerifiedBy} [created_by]
 * @property {string} [trigger_on]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [completed_on]
 * @property {string} [url]
 * @property {string} [id]
 * @property {string} [task_id]
 * @property {number} [seller_id]
 * @property {Object} [template_tags]
 * @property {string} [status]
 */

/**
 * @typedef ProductDownloadsResponse
 * @property {ProductDownloadsItems} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductConfigurationDownloads
 * @property {boolean} [multivalue]
 * @property {Object[]} [data]
 */

/**
 * @typedef Hierarchy
 * @property {number} department
 * @property {number} l1
 * @property {number} l2
 */

/**
 * @typedef Media2
 * @property {string} portrait
 * @property {string} landscape
 * @property {string} logo
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
 * @typedef Category
 * @property {Object} [created_by]
 * @property {Hierarchy[]} [hierarchy]
 * @property {string[]} [synonyms]
 * @property {Media2} [media]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string} [slug]
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {string} [created_on]
 * @property {number} level
 * @property {string[]} [tryouts]
 * @property {number} [priority]
 * @property {number[]} departments
 * @property {number} [uid]
 * @property {CategoryMapping} [marketplaces]
 * @property {string} name
 */

/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CategoryRequestBody
 * @property {Hierarchy[]} [hierarchy]
 * @property {string[]} [synonyms]
 * @property {Media2} [media]
 * @property {boolean} is_active
 * @property {string} [slug]
 * @property {number} level
 * @property {string[]} [tryouts]
 * @property {number} [priority]
 * @property {number[]} departments
 * @property {CategoryMapping} [marketplaces]
 * @property {string} name
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
 * @typedef ProductPublish
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */

/**
 * @typedef Logo
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 * @property {number} [aspect_ratio_f]
 */

/**
 * @typedef Brand
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Logo} [logo]
 */

/**
 * @typedef NetQuantityResponse
 * @property {number} [value]
 * @property {string} [unit]
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
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 * @property {number} [aspect_ratio_f]
 */

/**
 * @typedef Trader
 * @property {string} [type]
 * @property {Object} name
 * @property {string[]} [address]
 */

/**
 * @typedef ProductSchemaV2
 * @property {ProductPublish} [product_publish]
 * @property {string[]} [tags]
 * @property {Media1[]} [media]
 * @property {boolean} [is_active]
 * @property {boolean} [is_expirable]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} [created_on]
 * @property {boolean} [is_set]
 * @property {boolean} [is_image_less_product]
 * @property {number} [company_id]
 * @property {string[]} [highlights]
 * @property {string} [hsn_code]
 * @property {Object[]} [sizes]
 * @property {number} [uid]
 * @property {number} [category_uid]
 * @property {Object} [variant_media]
 * @property {string} [image_nature]
 * @property {boolean} [is_physical]
 * @property {string} [item_type]
 * @property {Object} [custom_order]
 * @property {string} [country_of_origin]
 * @property {number} [no_of_boxes]
 * @property {Object} [attributes]
 * @property {string[]} [product_group_tag]
 * @property {Object} [created_by]
 * @property {Object} [variants]
 * @property {boolean} [is_dependent]
 * @property {string} [description]
 * @property {Object} [tax_identifier]
 * @property {Object} [_custom_json]
 * @property {string} [pending]
 * @property {number[]} [departments]
 * @property {Brand} [brand]
 * @property {Object} [teaser_tag]
 * @property {string[]} [l3_mapping]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {string[]} [all_identifiers]
 * @property {string} [modified_on]
 * @property {string} [currency]
 * @property {string} [verified_on]
 * @property {string} [color]
 * @property {ReturnConfigResponse} [return_config]
 * @property {Object[]} [all_sizes]
 * @property {string} [stage]
 * @property {string} [item_code]
 * @property {Object} [category]
 * @property {string} [primary_color]
 * @property {number[]} [all_company_ids]
 * @property {Object} [moq]
 * @property {VerifiedBy} [verified_by]
 * @property {string} [slug]
 * @property {string} [size_guide]
 * @property {Image[]} [images]
 * @property {Object} [variant_group]
 * @property {number} [brand_uid]
 * @property {boolean} [multi_size]
 * @property {Trader[]} [trader]
 * @property {string} [short_description]
 * @property {string} [category_slug]
 * @property {string} [name]
 * @property {string} [template_tag]
 */

/**
 * @typedef ProductListingResponseV2
 * @property {ProductSchemaV2[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductPublish1
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */

/**
 * @typedef ReturnConfig
 * @property {number} time
 * @property {boolean} returnable
 * @property {string} unit
 */

/**
 * @typedef CustomOrder
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 * @property {boolean} [is_custom_order]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 */

/**
 * @typedef TeaserTag
 * @property {string} [url]
 * @property {string} [tag]
 */

/**
 * @typedef NetQuantity
 * @property {number} [value]
 * @property {Object} [unit]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {ProductPublish1} [product_publish]
 * @property {string[]} [tags]
 * @property {Media1[]} [media]
 * @property {boolean} [is_active]
 * @property {boolean} [is_set]
 * @property {boolean} [is_image_less_product]
 * @property {number} company_id
 * @property {string[]} [highlights]
 * @property {ReturnConfig} return_config
 * @property {Object[]} sizes
 * @property {number} [uid]
 * @property {number} [no_of_boxes]
 * @property {Object} [variant_media]
 * @property {string} item_type
 * @property {Object} [attributes]
 * @property {CustomOrder} [custom_order]
 * @property {string} [requester]
 * @property {string} country_of_origin
 * @property {string[]} [product_group_tag]
 * @property {Object} [variants]
 * @property {boolean} [is_dependent]
 * @property {string} [description]
 * @property {TaxIdentifier} tax_identifier
 * @property {Object} [_custom_json]
 * @property {number[]} departments
 * @property {TeaserTag} [teaser_tag]
 * @property {NetQuantity} [net_quantity]
 * @property {string} currency
 * @property {string} [action]
 * @property {string} [bulk_job_id]
 * @property {string} item_code
 * @property {string} slug
 * @property {string} [size_guide]
 * @property {Object} [variant_group]
 * @property {Object} [change_request_id]
 * @property {number} brand_uid
 * @property {boolean} [multi_size]
 * @property {Trader[]} trader
 * @property {string} [short_description]
 * @property {string} category_slug
 * @property {string} name
 * @property {string} template_tag
 */

/**
 * @typedef ProductVariants
 * @property {string} [item_code]
 * @property {Media1[]} [media]
 * @property {number} [category_uid]
 * @property {number} [brand_uid]
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
 * @property {string[]} [tags]
 * @property {AttributeMasterDetails} details
 * @property {Object} [modified_by]
 * @property {string} [raw_key]
 * @property {boolean} [variant]
 * @property {string} [created_on]
 * @property {Object} [created_by]
 * @property {Object} [synonyms]
 * @property {string} [description]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [suggestion]
 * @property {string[]} departments
 * @property {string} [logo]
 * @property {string} [modified_on]
 * @property {AttributeMasterFilter} filters
 * @property {AttributeMaster} schema
 * @property {string} slug
 * @property {boolean} [is_nested]
 * @property {string} [unit]
 * @property {string} [name]
 */

/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */

/**
 * @typedef SingleProductResponse
 * @property {ProductSchemaV2} [data]
 */

/**
 * @typedef ValidateIdentifier
 * @property {string} gtin_type
 * @property {boolean} [primary]
 * @property {string} gtin_value
 */

/**
 * @typedef AllSizes
 * @property {Object} item_weight_unit_of_measure
 * @property {string} item_dimensions_unit_of_measure
 * @property {number} item_width
 * @property {number} item_height
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {Object} size
 * @property {number} item_weight
 * @property {number} item_length
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
 * @typedef ProductPublished
 * @property {boolean} [is_set]
 * @property {number} [product_online_date]
 */

/**
 * @typedef Product
 * @property {ProductPublished} [product_publish]
 * @property {string[]} [tags]
 * @property {Media1[]} [media]
 * @property {boolean} [is_active]
 * @property {boolean} [is_expirable]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} [created_on]
 * @property {boolean} [is_set]
 * @property {boolean} [is_image_less_product]
 * @property {number} [company_id]
 * @property {string[]} [highlights]
 * @property {string} [hsn_code]
 * @property {Object[]} [sizes]
 * @property {number} [uid]
 * @property {number} [category_uid]
 * @property {Object} [variant_media]
 * @property {string} [image_nature]
 * @property {boolean} [is_physical]
 * @property {string} [item_type]
 * @property {Object} [custom_order]
 * @property {string} [country_of_origin]
 * @property {number} [no_of_boxes]
 * @property {Object} [attributes]
 * @property {string[]} [product_group_tag]
 * @property {Object} [created_by]
 * @property {Object} [variants]
 * @property {boolean} [is_dependent]
 * @property {string} [description]
 * @property {Object} [tax_identifier]
 * @property {Object} [_custom_json]
 * @property {string} [pending]
 * @property {number[]} [departments]
 * @property {Brand} [brand]
 * @property {Object} [teaser_tag]
 * @property {string[]} [l3_mapping]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {string[]} [all_identifiers]
 * @property {string} [modified_on]
 * @property {string} [currency]
 * @property {string} [verified_on]
 * @property {string} [color]
 * @property {ReturnConfigResponse} [return_config]
 * @property {Object[]} [all_sizes]
 * @property {string} [stage]
 * @property {string} [item_code]
 * @property {Object} [category]
 * @property {string} [primary_color]
 * @property {number[]} [all_company_ids]
 * @property {Object} [moq]
 * @property {VerifiedBy} [verified_by]
 * @property {string} [slug]
 * @property {string} [size_guide]
 * @property {Image[]} [images]
 * @property {Object} [variant_group]
 * @property {number} [brand_uid]
 * @property {boolean} [multi_size]
 * @property {Trader[]} [trader]
 * @property {string} [short_description]
 * @property {string} [category_slug]
 * @property {string} [name]
 * @property {string} [template_tag]
 */

/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef UserDetail1
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [full_name]
 */

/**
 * @typedef ProductBulkRequest
 * @property {UserDetail1} [created_by]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {UserDetail1} [modified_by]
 * @property {string} [modified_on]
 * @property {ProductTemplate} [template]
 * @property {string} [created_on]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {string[]} [cancelled_records]
 * @property {number} [succeed]
 * @property {string} [file_path]
 * @property {number} [cancelled]
 * @property {string[]} [failed_records]
 * @property {string} [template_tag]
 * @property {string} [stage]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
 */

/**
 * @typedef UserInfo1
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [email]
 */

/**
 * @typedef BulkJob
 * @property {UserInfo1} [created_by]
 * @property {number} [total]
 * @property {string} [template_tag]
 * @property {boolean} [is_active]
 * @property {UserInfo1} [modified_by]
 * @property {string} [modified_on]
 * @property {string} created_on
 * @property {number} [failed]
 * @property {string} [tracking_url]
 * @property {number} company_id
 * @property {number} [succeed]
 * @property {Object[]} [cancelled_records]
 * @property {string} [file_path]
 * @property {string} [custom_template_tag]
 * @property {Object[]} [failed_records]
 * @property {number} [cancelled]
 * @property {string} [stage]
 */

/**
 * @typedef BulkResponse
 * @property {UserInfo1} [created_by]
 * @property {boolean} [is_active]
 * @property {UserInfo1} [modified_by]
 * @property {string} [modified_on]
 * @property {string} batch_id
 * @property {string} created_on
 */

/**
 * @typedef BulkProductRequest
 * @property {string} template_tag
 * @property {string} batch_id
 * @property {Object[]} data
 * @property {number} company_id
 */

/**
 * @typedef ProductTagsViewResponse
 * @property {string[]} [items]
 */

/**
 * @typedef UserCommon
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {number} [company_id]
 */

/**
 * @typedef Items
 * @property {UserCommon} [created_by]
 * @property {number} [total]
 * @property {UserCommon} [modified_by]
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {number} [retry]
 * @property {string} [id]
 * @property {string} [created_on]
 * @property {number} [failed]
 * @property {string} [tracking_url]
 * @property {number} [company_id]
 * @property {number} [succeed]
 * @property {string[]} [cancelled_records]
 * @property {string} [file_path]
 * @property {string[]} [failed_records]
 * @property {number} [cancelled]
 * @property {string} [stage]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
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
 * @property {number} [company_id]
 * @property {string} [size]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {boolean} [success]
 * @property {ProductSizeDeleteDataResponse} [data]
 */

/**
 * @typedef InventoryResponse
 * @property {number} [sellable_quantity]
 * @property {number} [price_transfer]
 * @property {string} [inventory_updated_on]
 * @property {number} [price]
 * @property {string} [currency]
 * @property {number} [price_effective]
 * @property {string} [seller_identifier]
 * @property {Object} [store]
 * @property {number} [item_id]
 * @property {Object} [identifiers]
 * @property {string} [size]
 * @property {number} [quantity]
 * @property {string} [uid]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
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
 * @property {number} [price_transfer]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} store_code
 * @property {number} quantity
 * @property {number} [price]
 * @property {InventorySet} [set]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} currency
 * @property {number} [item_width]
 * @property {number} price_effective
 * @property {boolean} [is_set]
 * @property {number} [item_height]
 * @property {string} [expiration_date]
 * @property {Object} size
 * @property {GTIN[]} identifiers
 * @property {number} [item_weight]
 * @property {number} [item_length]
 */

/**
 * @typedef ItemQuery
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 * @property {number} [uid]
 */

/**
 * @typedef InventoryRequest
 * @property {InvSize[]} sizes
 * @property {ItemQuery} item
 * @property {number} company_id
 */

/**
 * @typedef WeightResponse
 * @property {boolean} is_default
 * @property {number} shipping
 * @property {string} unit
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef ReturnConfig1
 * @property {number} [time]
 * @property {boolean} [returnable]
 * @property {string} [unit]
 */

/**
 * @typedef DimensionResponse
 * @property {number} height
 * @property {number} length
 * @property {number} width
 * @property {string} unit
 * @property {boolean} is_default
 */

/**
 * @typedef PriceMeta
 * @property {string} currency
 * @property {string} [updated_at]
 * @property {Object} [tp_notes]
 * @property {number} marked
 * @property {number} effective
 * @property {number} transfer
 */

/**
 * @typedef StoreMeta
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
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef ManufacturerResponse
 * @property {boolean} is_default
 * @property {string} name
 * @property {string} address
 */

/**
 * @typedef Trader1
 * @property {string} type
 * @property {string} name
 * @property {string[]} address
 */

/**
 * @typedef InventorySellerResponse
 * @property {WeightResponse} weight
 * @property {string[]} [tags]
 * @property {CompanyMeta} company
 * @property {boolean} [is_active]
 * @property {InventorySet} [set]
 * @property {UserSerializer} [modified_by]
 * @property {string} fynd_item_code
 * @property {boolean} [is_set]
 * @property {ReturnConfig1} [return_config]
 * @property {string} uid
 * @property {DimensionResponse} dimension
 * @property {UserSerializer} [created_by]
 * @property {string} country_of_origin
 * @property {PriceMeta} price
 * @property {string} [trace_id]
 * @property {StoreMeta} store
 * @property {string} seller_identifier
 * @property {number} total_quantity
 * @property {Object} [tax_identifier]
 * @property {number} item_id
 * @property {Object} [_custom_json]
 * @property {Quantities} [quantities]
 * @property {BrandMeta} brand
 * @property {string} fynd_article_code
 * @property {ManufacturerResponse} manufacturer
 * @property {Object} identifier
 * @property {Object} [fynd_meta]
 * @property {string} [added_on_store]
 * @property {string} [expiration_date]
 * @property {string} [stage]
 * @property {boolean} fragile
 * @property {boolean} [track_inventory]
 * @property {Object} [meta]
 * @property {Trader1[]} [trader]
 * @property {string} size
 * @property {Object} [raw_meta]
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef WeightResponse1
 * @property {number} [shipping]
 * @property {string} [unit]
 */

/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */

/**
 * @typedef ReturnConfig2
 * @property {number} [time]
 * @property {boolean} [returnable]
 * @property {string} [unit]
 */

/**
 * @typedef DimensionResponse1
 * @property {number} [height]
 * @property {number} [width]
 * @property {number} [length]
 * @property {string} [unit]
 */

/**
 * @typedef PriceArticle
 * @property {string} [currency]
 * @property {Object} [tp_notes]
 * @property {number} [marked]
 * @property {number} [effective]
 * @property {number} [transfer]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {string} [store_code]
 * @property {string} [store_type]
 * @property {string} [name]
 * @property {number} [uid]
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
 * @typedef BrandMeta1
 * @property {number} [id]
 * @property {string} [name]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {boolean} [is_default]
 * @property {string} [name]
 * @property {string} [address]
 */

/**
 * @typedef DateMeta
 * @property {string} [modified_on]
 * @property {string} [added_on_store]
 * @property {string} [inventory_updated_on]
 * @property {string} [created_on]
 */

/**
 * @typedef Trader2
 * @property {string} [type]
 * @property {string} [name]
 * @property {string[]} [address]
 */

/**
 * @typedef GetInventories
 * @property {WeightResponse1} [weight]
 * @property {string[]} [tags]
 * @property {CompanyMeta1} [company]
 * @property {UserSerializer} [modified_by]
 * @property {string} [id]
 * @property {boolean} [is_set]
 * @property {ReturnConfig2} [return_config]
 * @property {string} [uid]
 * @property {DimensionResponse1} [dimension]
 * @property {UserSerializer} [created_by]
 * @property {string} [country_of_origin]
 * @property {Object} [platforms]
 * @property {PriceArticle} [price]
 * @property {string} [trace_id]
 * @property {ArticleStoreResponse} [store]
 * @property {string} [seller_identifier]
 * @property {Object} [tax_identifier]
 * @property {number} [total_quantity]
 * @property {number} [item_id]
 * @property {QuantitiesArticle} [quantities]
 * @property {BrandMeta1} [brand]
 * @property {string} [inventory_updated_on]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {Object} [identifier]
 * @property {string} [expiration_date]
 * @property {string} [stage]
 * @property {DateMeta} [date_meta]
 * @property {boolean} [track_inventory]
 * @property {Trader2[]} [trader]
 * @property {string} [size]
 */

/**
 * @typedef GetInventoriesResponse
 * @property {GetInventories[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {Object} [created_by]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {string} [created_on]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {string[]} [cancelled_records]
 * @property {number} [succeed]
 * @property {string} [file_path]
 * @property {string[]} [failed_records]
 * @property {number} [cancelled]
 * @property {string} [stage]
 */

/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef InventoryJobPayload
 * @property {string} [item_weight_unit_of_measure]
 * @property {string[]} [tags]
 * @property {string} store_code
 * @property {number} [price]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [currency]
 * @property {number} [price_marked]
 * @property {string} [trace_id]
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 * @property {number} [total_quantity]
 * @property {string} [expiration_date]
 * @property {number} [quantity]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {Object} [user]
 * @property {string} batch_id
 * @property {InventoryJobPayload[]} sizes
 * @property {number} company_id
 */

/**
 * @typedef InventoryExportJob
 * @property {string} [trigger_on]
 * @property {string} [completed_on]
 * @property {string} [url]
 * @property {string} task_id
 * @property {Object} [request_params]
 * @property {number} seller_id
 * @property {string} [status]
 */

/**
 * @typedef InventoryExportRequest
 * @property {string} [type]
 * @property {number[]} [brand]
 * @property {number[]} [store]
 */

/**
 * @typedef InventoryExportResponse
 * @property {string} [trigger_on]
 * @property {string} task_id
 * @property {Object} [request_params]
 * @property {number} seller_id
 * @property {string} [status]
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
 * @property {number} store_id
 * @property {string[]} [tags]
 * @property {number} [price_marked]
 * @property {string} [trace_id]
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 * @property {number} [total_quantity]
 * @property {string} [expiration_date]
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {Object} [meta]
 * @property {number} company_id
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
 * @typedef HsnUpsert
 * @property {boolean} [tax_on_esp]
 * @property {number} [tax2]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {number} tax1
 * @property {number} [threshold2]
 * @property {string} hs2_code
 * @property {number} company_id
 * @property {number} threshold1
 * @property {string} hsn_code
 * @property {boolean} tax_on_mrp
 */

/**
 * @typedef HsnCodesObject
 * @property {boolean} [tax_on_esp]
 * @property {number} [tax2]
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {number} [tax1]
 * @property {number} [threshold2]
 * @property {string} [hs2_code]
 * @property {number} [company_id]
 * @property {number} [threshold1]
 * @property {string} [hsn_code]
 * @property {boolean} [tax_on_mrp]
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
 * @property {number} rate
 * @property {number} [cess]
 * @property {string} effective_date
 */

/**
 * @typedef HSNDataInsertV2
 * @property {Object} [created_by]
 * @property {string} country_code
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {TaxSlab[]} taxes
 * @property {string} type
 * @property {string} [created_on]
 * @property {string} description
 * @property {string} [hsn_code_id]
 * @property {string} reporting_hsn
 * @property {string} hsn_code
 */

/**
 * @typedef PageResponse
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {number} [size]
 * @property {string} [current]
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */

/**
 * @typedef BrandItem
 * @property {string} [discount]
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Media} [logo]
 */

/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */

/**
 * @typedef Department
 * @property {number} [priority_order]
 * @property {string} [slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Media} [logo]
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
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {Object[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef SecondLevelChild
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef Child
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {Object} [_custom_json]
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef CategoryItems
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 * @property {Child[]} [childs]
 * @property {string} [name]
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
 * @property {Page} page
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {Object} [operators]
 */

/**
 * @typedef ProductDetail
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string[]} [highlights]
 * @property {Object} [attributes]
 * @property {number} [uid]
 * @property {string} [item_type]
 * @property {string} [image_nature]
 * @property {string[]} [similars]
 * @property {string} [description]
 * @property {Media1[]} [medias]
 * @property {string} [product_online_date]
 * @property {number} [rating]
 * @property {Object} [teaser_tag]
 * @property {ProductBrand} [brand]
 * @property {number} [rating_count]
 * @property {string} [type]
 * @property {string} [color]
 * @property {boolean} [has_variant]
 * @property {string} [item_code]
 * @property {string} slug
 * @property {Object} [promo_meta]
 * @property {string[]} [tryouts]
 * @property {string} [short_description]
 * @property {string} [name]
 */

/**
 * @typedef InventoryPage
 * @property {boolean} [has_previous]
 * @property {number} item_total
 * @property {string} [next_id]
 * @property {string} type
 * @property {boolean} [has_next]
 */

/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef ArticleQuery
 * @property {number[]} [ignored_stores]
 * @property {number} item_id
 * @property {string} size
 */

/**
 * @typedef AssignStoreArticle
 * @property {ArticleAssignment} [article_assignment]
 * @property {string} [group_id]
 * @property {Object} [meta]
 * @property {number} [quantity]
 * @property {ArticleQuery} [query]
 */

/**
 * @typedef AssignStore
 * @property {number[]} [store_ids]
 * @property {string} app_id
 * @property {AssignStoreArticle[]} articles
 * @property {string} [channel_type]
 * @property {string} pincode
 * @property {number} [company_id]
 * @property {string} [channel_identifier]
 */

/**
 * @typedef ArticleAssignment1
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef StoreAssignResponse
 * @property {number} [store_id]
 * @property {ArticleAssignment1} article_assignment
 * @property {Object[]} [strategy_wise_listing]
 * @property {number} quantity
 * @property {number} [index]
 * @property {number} [price_marked]
 * @property {string} [group_id]
 * @property {number} [price_effective]
 * @property {Object} [meta]
 * @property {number} item_id
 * @property {string} [_id]
 * @property {string} size
 * @property {number} [company_id]
 * @property {string} [s_city]
 * @property {string} [uid]
 * @property {boolean} status
 * @property {number} [store_pincode]
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef UserSerializer1
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [contact]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [address2]
 * @property {string} [country]
 * @property {string} [address1]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [country_code]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [address_type]
 * @property {number} [pincode]
 * @property {string} [landmark]
 */

/**
 * @typedef GetCompanySerializer
 * @property {UserSerializer1} [created_by]
 * @property {UserSerializer1} [verified_by]
 * @property {UserSerializer1} [modified_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {string} [business_type]
 * @property {string} [reject_reason]
 * @property {string} [company_type]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [stage]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [contact]
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {string} [username]
 * @property {boolean} [enabled]
 * @property {string} [password]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_waybill]
 * @property {InvoiceCredSerializer} [e_invoice]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */

/**
 * @typedef LocationManagerSerializer
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 * @property {string} [email]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [minute]
 * @property {number} [hour]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {string} weekday
 * @property {LocationTimingSerializer} [opening]
 * @property {boolean} open
 * @property {LocationTimingSerializer} [closing]
 */

/**
 * @typedef Document
 * @property {string} value
 * @property {string} [url]
 * @property {string} type
 * @property {string} [legal_name]
 * @property {boolean} [verified]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef GetLocationSerializer
 * @property {LocationIntegrationType} [integration_type]
 * @property {GetCompanySerializer} [company]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [created_on]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {number} [uid]
 * @property {UserSerializer2} [created_by]
 * @property {LocationManagerSerializer} [manager]
 * @property {Object} [_custom_json]
 * @property {string[]} [notification_emails]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {string} display_name
 * @property {string} [store_type]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {GetAddressSerializer} address
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Document[]} [documents]
 * @property {Object} [warnings]
 * @property {string} code
 * @property {string} [stage]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {UserSerializer2} [verified_by]
 * @property {string} phone_number
 * @property {string} name
 */

/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
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
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {number} uid
 * @property {string} [logo]
 */

/**
 * @typedef ApplicationDepartmentListingResponse
 * @property {ApplicationDepartment[]} [items]
 * @property {Page} page
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
 * @typedef GetAddressSerializer
 * @property {string} [address_type]
 * @property {string} [country]
 * @property {string} [landmark]
 * @property {string} [country_code]
 * @property {string} [city]
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {string} [state]
 * @property {number} longitude
 * @property {number} latitude
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} [country]
 * @property {string} [country_code]
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {string} [effective_date]
 * @property {number} [rate]
 * @property {boolean} [enable]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {string} number
 * @property {number} country_code
 */

/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
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
 * @typedef UserSerializer
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef Document
 * @property {string} type
 * @property {string} value
 * @property {string} [url]
 * @property {boolean} [verified]
 * @property {string} [legal_name]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {GetAddressSerializer[]} [addresses]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [verified_on]
 * @property {boolean} [franchise_enabled]
 * @property {string} [modified_on]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {Object} [_custom_json]
 * @property {string} [stage]
 * @property {string} company_type
 * @property {string} [created_on]
 * @property {string} business_type
 * @property {string} [business_info]
 * @property {string} [name]
 * @property {ContactDetails} [contact_details]
 * @property {BusinessDetails} [business_details]
 * @property {string[]} [notification_emails]
 * @property {Object} [warnings]
 * @property {number} uid
 * @property {UserSerializer} [modified_by]
 * @property {UserSerializer} [created_by]
 * @property {Document[]} [documents]
 * @property {UserSerializer} [verified_by]
 * @property {string} [mode]
 */

/**
 * @typedef ErrorResponse
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {string} [code]
 * @property {number} [status]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} [landmark]
 * @property {string} country
 * @property {string} address_type
 * @property {string} [country_code]
 * @property {string} city
 * @property {number} pincode
 * @property {string} [address2]
 * @property {string} address1
 * @property {string} state
 * @property {number} longitude
 * @property {number} latitude
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {string} [effective_date]
 * @property {number} [rate]
 * @property {boolean} [enable]
 */

/**
 * @typedef UpdateCompany
 * @property {Object} [_custom_json]
 * @property {string} [reject_reason]
 * @property {boolean} [franchise_enabled]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {Document[]} [documents]
 * @property {string} [company_type]
 * @property {ContactDetails} [contact_details]
 * @property {string} [business_type]
 * @property {BusinessDetails} [business_details]
 * @property {string} [business_info]
 * @property {string[]} [notification_emails]
 * @property {Object} [warnings]
 * @property {string} [name]
 * @property {CompanyTaxesSerializer1[]} [taxes]
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
 * @property {string} [stage]
 * @property {DocumentsObj} [brand]
 * @property {DocumentsObj} [product]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [store]
 * @property {number} [uid]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [portrait]
 * @property {string} [landscape]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {string} [verified_on]
 * @property {string} [description]
 * @property {string} [mode]
 * @property {string} [modified_on]
 * @property {Object} [_custom_json]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {string} name
 * @property {BrandBannerSerializer} [banner]
 * @property {Object} [_locale_language]
 * @property {string} [slug_key]
 * @property {Object} [warnings]
 * @property {number} [uid]
 * @property {UserSerializer} [modified_by]
 * @property {UserSerializer} [created_by]
 * @property {string} [logo]
 * @property {UserSerializer} [verified_by]
 * @property {string[]} [synonyms]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {Object} [_custom_json]
 * @property {string} [brand_tier]
 * @property {string} logo
 * @property {Object} [_locale_language]
 * @property {string} [description]
 * @property {number} [company_id]
 * @property {string} name
 * @property {BrandBannerSerializer} [banner]
 * @property {number} [uid]
 * @property {string[]} [synonyms]
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
 * @property {string} [reject_reason]
 * @property {UserSerializer} [created_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [stage]
 * @property {string} company_type
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {string} business_type
 * @property {CompanyDetails} [details]
 * @property {string[]} [notification_emails]
 * @property {UserSerializer} [verified_by]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string[]} [market_channels]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {string} [reject_reason]
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {CompanySerializer} [company]
 * @property {Object} [warnings]
 * @property {UserSerializer} [verified_by]
 * @property {number} [uid]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
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
 * @property {string} title
 * @property {HolidayDateSerializer} date
 * @property {string} holiday_type
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} hour
 * @property {number} minute
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {boolean} open
 * @property {string} weekday
 * @property {LocationTimingSerializer} [opening]
 * @property {LocationTimingSerializer} [closing]
 */

/**
 * @typedef GetCompanySerializer
 * @property {string} [reject_reason]
 * @property {UserSerializer} [created_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [stage]
 * @property {string} [company_type]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {string} [business_type]
 * @property {UserSerializer} [verified_by]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {string} [name]
 * @property {SellerPhoneNumber} mobile_no
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {string} [password]
 * @property {string} [username]
 * @property {boolean} [enabled]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_waybill]
 * @property {InvoiceCredSerializer} [e_invoice]
 */

/**
 * @typedef GetLocationSerializer
 * @property {string} [phone_number]
 * @property {string} display_name
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {Object} [_custom_json]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} code
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {string} name
 * @property {string} [store_type]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {GetCompanySerializer} [company]
 * @property {string[]} [notification_emails]
 * @property {Object} [warnings]
 * @property {number} [uid]
 * @property {UserSerializer} [modified_by]
 * @property {UserSerializer} [created_by]
 * @property {Document[]} [documents]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {LocationManagerSerializer} [manager]
 * @property {GetAddressSerializer} address
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {UserSerializer} [verified_by]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 */

/**
 * @typedef LocationListSerializer
 * @property {Page} [page]
 * @property {GetLocationSerializer[]} [items]
 */

/**
 * @typedef AddressSerializer
 * @property {string} [address_type]
 * @property {string} [country]
 * @property {string} [landmark]
 * @property {string} [country_code]
 * @property {string} [city]
 * @property {string} [address2]
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {string} [state]
 * @property {number} longitude
 * @property {number} latitude
 */

/**
 * @typedef LocationSerializer
 * @property {Object} [_custom_json]
 * @property {string} [store_type]
 * @property {Document[]} [documents]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} code
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} display_name
 * @property {string} [stage]
 * @property {LocationManagerSerializer} [manager]
 * @property {AddressSerializer} address
 * @property {number} company
 * @property {string[]} [notification_emails]
 * @property {Object} [warnings]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} name
 * @property {number} [uid]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 */

/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
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
 * @property {PanCardConfig} [pan_card]
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
 * @typedef PanCardConfig
 * @property {boolean} [enabled]
 * @property {number} [threshold_amount]
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
 * @property {string} [slug]
 */

/**
 * @typedef NotFound
 * @property {string} [message]
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
 * @typedef RuleDefinition
 * @property {string} type
 * @property {string} [currency_code]
 * @property {boolean} [auto_apply]
 * @property {string} applicable_on
 * @property {string} value_type
 * @property {string} calculate_on
 * @property {boolean} [is_exact]
 * @property {string[]} [scope]
 */

/**
 * @typedef Validation
 * @property {string} [user_registered_after]
 * @property {boolean} [anonymous]
 * @property {string[]} [app_id]
 */

/**
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [types]
 * @property {string[]} [codes]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [networks]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
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
 * @typedef Restrictions
 * @property {PriceRange} [price_range]
 * @property {string} [user_type]
 * @property {boolean} [coupon_allowed]
 * @property {number[]} [ordering_stores]
 * @property {number[]} [user_groups]
 * @property {PostOrder} [post_order]
 * @property {Object} [payments]
 * @property {string[]} [platforms]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {UsesRestriction} [uses]
 */

/**
 * @typedef Identifier
 * @property {string[]} [article_id]
 * @property {number[]} [exclude_brand_id]
 * @property {number[]} [category_id]
 * @property {string[]} [user_id]
 * @property {number[]} [store_id]
 * @property {number[]} [company_id]
 * @property {string[]} [collection_id]
 * @property {number[]} [item_id]
 * @property {number[]} [brand_id]
 */

/**
 * @typedef State
 * @property {boolean} [is_public]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_display]
 */

/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef Ownership
 * @property {string} payable_category
 * @property {string} payable_by
 */

/**
 * @typedef Rule
 * @property {number} [key]
 * @property {number} [max]
 * @property {number} [min]
 * @property {number} [discount_qty]
 * @property {number} [value]
 */

/**
 * @typedef CouponSchedule
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 * @property {string} [cron]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
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
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [remove]
 */

/**
 * @typedef CouponAdd
 * @property {RuleDefinition} rule_definition
 * @property {Validation} [validation]
 * @property {Restrictions} [restrictions]
 * @property {string[]} [tags]
 * @property {Identifier} identifiers
 * @property {State} [state]
 * @property {CouponAction} [action]
 * @property {string} type_slug
 * @property {Validity} validity
 * @property {Ownership} ownership
 * @property {Rule[]} rule
 * @property {string} code
 * @property {CouponSchedule} [_schedule]
 * @property {CouponAuthor} [author]
 * @property {CouponDateMeta} [date_meta]
 * @property {DisplayMeta} display_meta
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
 * @property {RuleDefinition} rule_definition
 * @property {Validation} [validation]
 * @property {Restrictions} [restrictions]
 * @property {string[]} [tags]
 * @property {Identifier} identifiers
 * @property {State} [state]
 * @property {CouponAction} [action]
 * @property {string} type_slug
 * @property {Validity} validity
 * @property {Ownership} ownership
 * @property {Rule[]} rule
 * @property {string} code
 * @property {CouponSchedule} [_schedule]
 * @property {CouponAuthor} [author]
 * @property {CouponDateMeta} [date_meta]
 * @property {DisplayMeta} display_meta
 */

/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef PromotionAction
 * @property {string} action_date
 * @property {string} action_type
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef CompareObject
 * @property {number} [greater_than]
 * @property {number} [equals]
 * @property {number} [less_than_equals]
 * @property {number} [greater_than_equals]
 * @property {number} [less_than]
 */

/**
 * @typedef ItemCriteria
 * @property {number[]} [item_exclude_category]
 * @property {string[]} [item_sku]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_id]
 * @property {number[]} [item_company]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_store]
 * @property {string[]} [item_exclude_sku]
 * @property {string[]} [available_zones]
 * @property {string[]} [product_tags]
 * @property {number[]} [item_exclude_company]
 * @property {boolean} [all_items]
 * @property {number[]} [item_category]
 * @property {CompareObject} [cart_quantity]
 * @property {string[]} [item_size]
 * @property {CompareObject} [cart_total]
 * @property {number[]} [item_exclude_store]
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [offer_label]
 * @property {string} [offer_text]
 * @property {string} [name]
 * @property {string} [description]
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
 * @typedef Restrictions1
 * @property {number} [order_quantity]
 * @property {number[]} [user_groups]
 * @property {PostOrder1} [post_order]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {boolean} [anonymous_users]
 * @property {string[]} [platforms]
 * @property {UserRegistered} [user_registered]
 * @property {string[]} [user_id]
 * @property {UsesRestriction1} uses
 */

/**
 * @typedef Ownership1
 * @property {string} payable_category
 * @property {string} payable_by
 */

/**
 * @typedef DiscountOffer
 * @property {number} [discount_percentage]
 * @property {number} [discount_price]
 * @property {boolean} [apportion_discount]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [max_discount_amount]
 * @property {boolean} [partial_can_ret]
 * @property {number} [discount_amount]
 * @property {string} [code]
 * @property {number} [max_offer_quantity]
 * @property {number} [min_offer_quantity]
 */

/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {string} discount_type
 * @property {DiscountOffer} offer
 * @property {ItemCriteria} item_criteria
 */

/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */

/**
 * @typedef PromotionSchedule
 * @property {string} start
 * @property {string} [end]
 * @property {number} [duration]
 * @property {boolean} published
 * @property {Object[]} [next_schedule]
 * @property {string} [cron]
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef PromotionListItem
 * @property {number} [apply_priority]
 * @property {string} [apply_exclusive]
 * @property {string} [calculate_on]
 * @property {string} [code]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionDateMeta} [date_meta]
 * @property {Object} buy_rules
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {string} [currency]
 * @property {Restrictions1} [restrictions]
 * @property {boolean} [apply_all_discount]
 * @property {Ownership1} ownership
 * @property {DiscountRule[]} discount_rules
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {Visibility} [visiblility]
 * @property {Object} [_custom_json]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} promo_group
 * @property {string} promotion_type
 * @property {PromotionAuthor} [author]
 */

/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PromotionAdd
 * @property {number} [apply_priority]
 * @property {string} [apply_exclusive]
 * @property {string} [calculate_on]
 * @property {string} [code]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionDateMeta} [date_meta]
 * @property {Object} buy_rules
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {string} [currency]
 * @property {Restrictions1} [restrictions]
 * @property {boolean} [apply_all_discount]
 * @property {Ownership1} ownership
 * @property {DiscountRule[]} discount_rules
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {Visibility} [visiblility]
 * @property {Object} [_custom_json]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} promo_group
 * @property {string} promotion_type
 * @property {PromotionAuthor} [author]
 */

/**
 * @typedef PromotionUpdate
 * @property {number} [apply_priority]
 * @property {string} [apply_exclusive]
 * @property {string} [calculate_on]
 * @property {string} [code]
 * @property {PromotionAction} [post_order_action]
 * @property {PromotionDateMeta} [date_meta]
 * @property {Object} buy_rules
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {string} [currency]
 * @property {Restrictions1} [restrictions]
 * @property {boolean} [apply_all_discount]
 * @property {Ownership1} ownership
 * @property {DiscountRule[]} discount_rules
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {Visibility} [visiblility]
 * @property {Object} [_custom_json]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} promo_group
 * @property {string} promotion_type
 * @property {PromotionAuthor} [author]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [title]
 * @property {string} [entity_slug]
 * @property {string} [type]
 * @property {string} [entity_type]
 * @property {string} [example]
 * @property {string} [description]
 * @property {string} [created_on]
 * @property {boolean} [is_hidden]
 * @property {string} [subtitle]
 * @property {string} [modified_on]
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
 * @property {string} [currency_code]
 * @property {string} [key]
 * @property {string} [display]
 * @property {string} [currency_symbol]
 * @property {string[]} [message]
 * @property {number} [value]
 */

/**
 * @typedef RawBreakup
 * @property {number} [coupon]
 * @property {number} [subtotal]
 * @property {number} [fynd_cash]
 * @property {number} [total]
 * @property {number} [discount]
 * @property {number} [cod_charge]
 * @property {number} [gst_charges]
 * @property {number} [vog]
 * @property {number} [mrp_total]
 * @property {number} [you_saved]
 * @property {number} [convenience_fee]
 * @property {number} [delivery_charge]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [type]
 * @property {string} [title]
 * @property {string} [sub_title]
 * @property {string} [coupon_type]
 * @property {number} [max_discount_value]
 * @property {string} [uid]
 * @property {string} [message]
 * @property {string} [description]
 * @property {number} [minimum_cart_value]
 * @property {number} [coupon_value]
 * @property {number} [value]
 * @property {string} [code]
 * @property {boolean} [is_applied]
 */

/**
 * @typedef LoyaltyPoints
 * @property {boolean} [is_applied]
 * @property {number} [applicable]
 * @property {number} [total]
 * @property {string} [description]
 */

/**
 * @typedef CartBreakup
 * @property {DisplayBreakup[]} [display]
 * @property {RawBreakup} [raw]
 * @property {CouponBreakup} [coupon]
 * @property {LoyaltyPoints} [loyalty_points]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef BasePrice
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {number} [marked]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */

/**
 * @typedef ProductArticle
 * @property {string} [size]
 * @property {string} [type]
 * @property {BaseInfo} [store]
 * @property {string[]} [product_group_tags]
 * @property {BaseInfo} [seller]
 * @property {ArticlePriceInfo} [price]
 * @property {string} [uid]
 * @property {Object} [_custom_json]
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [quantity]
 */

/**
 * @typedef ProductPrice
 * @property {number} [effective]
 * @property {string} [currency_code]
 * @property {number} [selling]
 * @property {number} [add_on]
 * @property {number} [marked]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef FreeGiftItem
 * @property {Object} [item_price_details]
 * @property {string} [item_name]
 * @property {string} [item_slug]
 * @property {number} [item_id]
 * @property {string} [item_brand_name]
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
 * @typedef Ownership2
 * @property {string} [payable_category]
 * @property {string} [payable_by]
 */

/**
 * @typedef DiscountRulesApp
 * @property {Object} [raw_offer]
 * @property {Object} [offer]
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [item_criteria]
 */

/**
 * @typedef BuyRules
 * @property {Object} [cart_conditions]
 * @property {Object} [item_criteria]
 */

/**
 * @typedef AppliedPromotion
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {string} [promo_id]
 * @property {boolean} [mrp_promotion]
 * @property {number} [amount]
 * @property {string} [promotion_group]
 * @property {string} [promotion_name]
 * @property {number} [article_quantity]
 * @property {string} [offer_text]
 * @property {Ownership2} [ownership]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {string} [promotion_type]
 * @property {BuyRules[]} [buy_rules]
 */

/**
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef ProductImage
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef NetQuantity
 * @property {string} [value]
 * @property {string} [unit]
 */

/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */

/**
 * @typedef ProductAction
 * @property {string} [type]
 * @property {string} [url]
 * @property {ActionQuery} [query]
 */

/**
 * @typedef CartProduct
 * @property {string} [type]
 * @property {CategoryInfo[]} [categories]
 * @property {string} [slug]
 * @property {ProductImage[]} [images]
 * @property {NetQuantity} [net_quantity]
 * @property {ProductAction} [action]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {BaseInfo} [brand]
 */

/**
 * @typedef ProductAvailability
 * @property {string[]} [sizes]
 * @property {boolean} [is_valid]
 * @property {boolean} [out_of_stock]
 * @property {number} [other_store_quantity]
 * @property {boolean} [deliverable]
 */

/**
 * @typedef CartProductInfo
 * @property {PromoMeta} [promo_meta]
 * @property {Object} [bulk_offer]
 * @property {ProductArticle} [article]
 * @property {string} [key]
 * @property {string} [coupon_message]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {string} [discount]
 * @property {ProductPriceInfo} [price]
 * @property {CartProductIdentifer} identifiers
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {string} [message]
 * @property {CartProduct} [product]
 * @property {boolean} [is_set]
 * @property {ProductAvailability} [availability]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [quantity]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {Object} [errors]
 */

/**
 * @typedef ShippingAddress
 * @property {string} [landmark]
 * @property {string} [email]
 * @property {string} area_code
 * @property {string} [area_code_slug]
 * @property {string} [address]
 * @property {string} [name]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {number} [phone]
 * @property {string} [area]
 * @property {string} [address_type]
 * @property {Object} [meta]
 * @property {number} [pincode]
 * @property {string} [country_phone_code]
 * @property {string} [country_iso_code]
 * @property {string} [state]
 * @property {string} [city]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {ShippingAddress} shipping_address
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef PromiseTimestamp
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef PromiseFormatted
 * @property {string} [max]
 * @property {string} [min]
 */

/**
 * @typedef ShipmentPromise
 * @property {PromiseTimestamp} [timestamp]
 * @property {PromiseFormatted} [formatted]
 */

/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {ShipmentPromise} [delivery_promise]
 * @property {boolean} [is_valid]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [order_id]
 * @property {string} [payment_gateway]
 * @property {string} [current_status]
 * @property {Object} [extra_meta]
 * @property {string} [payment_id]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} mode
 * @property {number} amount
 * @property {string} [name]
 */

/**
 * @typedef OpenApiFiles
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef CartItemMeta
 * @property {boolean} [primary_item]
 * @property {string} [group_id]
 */

/**
 * @typedef OpenApiOrderItem
 * @property {number} price_effective
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} [employee_discount]
 * @property {number} discount
 * @property {number} price_marked
 * @property {number} cashback_applied
 * @property {Object} [extra_meta]
 * @property {number} cod_charges
 * @property {number} coupon_effective_discount
 * @property {number} amount_paid
 * @property {string} size
 * @property {number} product_id
 * @property {number} delivery_charges
 * @property {OpenApiFiles[]} [files]
 * @property {number} [quantity]
 * @property {CartItemMeta} [meta]
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [currency_code]
 * @property {string} [coupon]
 * @property {Object} [employee_discount]
 * @property {number} cashback_applied
 * @property {string} [payment_mode]
 * @property {number} coupon_value
 * @property {OpenApiOrderItem[]} cart_items
 * @property {number} cod_charges
 * @property {OpenApiFiles[]} [files]
 * @property {number} delivery_charges
 * @property {number} [loyalty_discount]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} [order_id]
 * @property {string} [affiliate_order_id]
 * @property {number} cart_value
 * @property {string} coupon_code
 * @property {ShippingAddress} billing_address
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [comment]
 * @property {string} [gstin]
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} [message]
 * @property {string} [order_ref_id]
 * @property {string} order_id
 * @property {boolean} [success]
 */

/**
 * @typedef AbandonedCart
 * @property {Object} [promotion]
 * @property {string} [payment_mode]
 * @property {Object[]} articles
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {string} [checkout_mode]
 * @property {boolean} is_default
 * @property {Object[]} [payment_methods]
 * @property {number} [discount]
 * @property {string} last_modified
 * @property {string} created_on
 * @property {Object} cashback
 * @property {Object} [coupon]
 * @property {boolean} [is_archive]
 * @property {number} [bulk_coupon_discount]
 * @property {number[]} [fc_index_map]
 * @property {Object[]} [shipments]
 * @property {Object} [payments]
 * @property {number} uid
 * @property {Object} [cod_charges]
 * @property {boolean} [buy_now]
 * @property {string} user_id
 * @property {Object} [delivery_charges]
 * @property {Object} [fynd_credits]
 * @property {string} [order_id]
 * @property {number} [cart_value]
 * @property {boolean} [merge_qty]
 * @property {string} _id
 * @property {Object} [pick_up_customer_details]
 * @property {string} [comment]
 * @property {Object} [meta]
 * @property {string} [gstin]
 * @property {string} expire_at
 */

/**
 * @typedef AbandonedCartResponse
 * @property {Object} [result]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {AbandonedCart[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled]
 * @property {string} [payment_identifier]
 * @property {string} [default_options]
 */

/**
 * @typedef CartCurrency
 * @property {string} [code]
 * @property {string} [symbol]
 */

/**
 * @typedef CartDetailResponse
 * @property {string} [coupon_text]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {boolean} [restrict_checkout]
 * @property {boolean} [is_valid]
 * @property {string} [id]
 * @property {string} [last_modified]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [message]
 * @property {string} [pan_no]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [comment]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [buy_now]
 * @property {string} [checkout_mode]
 * @property {string} [gstin]
 * @property {CartCurrency} [currency]
 * @property {string} [delivery_charge_info]
 */

/**
 * @typedef AddProductCart
 * @property {string} [article_id]
 * @property {string[]} [product_group_tags]
 * @property {Object} [article_assignment]
 * @property {number} [store_id]
 * @property {string} [display]
 * @property {number} [seller_id]
 * @property {Object} [_custom_json]
 * @property {string} [item_size]
 * @property {number} [item_id]
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [quantity]
 * @property {boolean} [pos]
 */

/**
 * @typedef AddCartRequest
 * @property {boolean} [new_cart]
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [partial]
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef UpdateProductCart
 * @property {string} [article_id]
 * @property {CartProductIdentifer} identifiers
 * @property {number} [item_index]
 * @property {Object} [_custom_json]
 * @property {string} [item_size]
 * @property {number} [item_id]
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [quantity]
 */

/**
 * @typedef UpdateCartRequest
 * @property {UpdateProductCart[]} [items]
 * @property {string} operation
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 * @property {boolean} [success]
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
 * @property {Object} [user]
 * @property {Object} [source]
 * @property {Object} [meta]
 * @property {string} [created_on]
 * @property {string} [token]
 */

/**
 * @typedef SharedCart
 * @property {string} [message]
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [checkout_mode]
 * @property {string} [coupon_text]
 * @property {boolean} [restrict_checkout]
 * @property {string} [last_modified]
 * @property {CartCurrency} [currency]
 * @property {number} [cart_id]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [id]
 * @property {string} [uid]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [buy_now]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [is_valid]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [comment]
 * @property {string} [gstin]
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
 * @property {string} [cart_value]
 * @property {string} [created_on]
 * @property {string} [user_id]
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
 * @typedef UserInfo
 * @property {string} [gender]
 * @property {string} [external_id]
 * @property {string} [last_name]
 * @property {string} [mobile]
 * @property {string} [first_name]
 * @property {string} [uid]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [modified_on]
 */

/**
 * @typedef UserCartMappingResponse
 * @property {string} [coupon_text]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {boolean} [restrict_checkout]
 * @property {UserInfo} [user]
 * @property {boolean} [is_valid]
 * @property {string} [id]
 * @property {string} [last_modified]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [message]
 * @property {string} [pan_no]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [comment]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [buy_now]
 * @property {string} [checkout_mode]
 * @property {string} [gstin]
 * @property {CartCurrency} [currency]
 * @property {string} [delivery_charge_info]
 */

/**
 * @typedef DeleteCartDetailResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef CartItemCountResponse
 * @property {number} [user_cart_items_count]
 */

/**
 * @typedef PageCoupon
 * @property {number} [total]
 * @property {number} [total_item_count]
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 */

/**
 * @typedef Coupon
 * @property {string} [title]
 * @property {string} [expires_on]
 * @property {string} [sub_title]
 * @property {boolean} [is_applicable]
 * @property {string} [coupon_type]
 * @property {string} [coupon_code]
 * @property {number} [max_discount_value]
 * @property {number} [minimum_cart_value]
 * @property {string} [description]
 * @property {number} [coupon_value]
 * @property {string} [message]
 * @property {boolean} [is_applied]
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
 * @property {Object} [google_map_point]
 * @property {boolean} [is_active]
 * @property {string} [area]
 * @property {string} [checkout_mode]
 * @property {string} [country_code]
 * @property {string} [created_by_user_id]
 * @property {GeoLocation} [geo_location]
 * @property {string} [area_code_slug]
 * @property {boolean} [is_default_address]
 * @property {string} [phone]
 * @property {string} [landmark]
 * @property {string} [cart_id]
 * @property {string} [area_code]
 * @property {string} [id]
 * @property {string} [user_id]
 * @property {string} [country]
 * @property {string} [email]
 * @property {string[]} [tags]
 * @property {string} [address]
 * @property {string} [name]
 * @property {string} [address_type]
 * @property {Object} [meta]
 * @property {string} [city]
 * @property {string} [state]
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
 * @property {boolean} [is_updated]
 * @property {string} [id]
 * @property {boolean} [success]
 * @property {boolean} [is_default_address]
 */

/**
 * @typedef DeleteAddressResponse
 * @property {boolean} [is_deleted]
 * @property {string} [id]
 */

/**
 * @typedef PlatformSelectCartAddressRequest
 * @property {string} [billing_address_id]
 * @property {string} [id]
 * @property {string} [cart_id]
 * @property {string} [checkout_mode]
 */

/**
 * @typedef ShipmentResponse
 * @property {string} [fulfillment_type]
 * @property {string} [box_type]
 * @property {number} [shipments]
 * @property {ShipmentPromise} [promise]
 * @property {CartProductInfo[]} [items]
 * @property {string} [dp_id]
 * @property {number} [fulfillment_id]
 * @property {string} [shipment_type]
 * @property {string} [order_type]
 * @property {Object} [dp_options]
 */

/**
 * @typedef CartShipmentsResponse
 * @property {number} [cart_id]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {ShipmentResponse[]} [shipments]
 * @property {string} [id]
 * @property {string} [uid]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [checkout_mode]
 * @property {boolean} [buy_now]
 * @property {string} [delivery_charge_info]
 * @property {string} [coupon_text]
 * @property {boolean} [restrict_checkout]
 * @property {boolean} [is_valid]
 * @property {string} [last_modified]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [comment]
 * @property {boolean} [error]
 * @property {string} [gstin]
 * @property {CartCurrency} [currency]
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
 * @typedef PlatformCartMetaRequest
 * @property {string} [pan_no]
 * @property {Object} [pick_up_customer_details]
 * @property {string} [comment]
 * @property {string} [checkout_mode]
 * @property {string} [gstin]
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
 * @typedef Files
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef StaffCheckout
 * @property {string} [employee_code]
 * @property {string} last_name
 * @property {string} user
 * @property {string} first_name
 * @property {string} _id
 */

/**
 * @typedef PlatformCartCheckoutDetailRequest
 * @property {number} [ordering_store]
 * @property {string} payment_mode
 * @property {boolean} [pos]
 * @property {string} [payment_identifier]
 * @property {Object} [delivery_address]
 * @property {string} [billing_address_id]
 * @property {string} [callback_url]
 * @property {Object} [extra_meta]
 * @property {string} [aggregator]
 * @property {string} [merchant_code]
 * @property {string} id
 * @property {string} [address_id]
 * @property {number} [pick_at_store_uid]
 * @property {boolean} [payment_auto_confirm]
 * @property {string} user_id
 * @property {Files[]} [files]
 * @property {Object} [payment_params]
 * @property {StaffCheckout} [staff]
 * @property {Object} [billing_address]
 * @property {Object} [meta]
 * @property {string} order_type
 */

/**
 * @typedef CheckCart
 * @property {Object[]} [store_emps]
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [checkout_mode]
 * @property {string} [store_code]
 * @property {boolean} [cod_available]
 * @property {string} [coupon_text]
 * @property {boolean} [restrict_checkout]
 * @property {string} [last_modified]
 * @property {CartCurrency} [currency]
 * @property {string} [user_type]
 * @property {number} [delivery_charge_order_value]
 * @property {number} [cart_id]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [error_message]
 * @property {string} [id]
 * @property {boolean} [success]
 * @property {string} [uid]
 * @property {number} [cod_charges]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [buy_now]
 * @property {number} [delivery_charges]
 * @property {string} [delivery_charge_info]
 * @property {string} [order_id]
 * @property {boolean} [is_valid]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [cod_message]
 * @property {string} [comment]
 * @property {string} [gstin]
 */

/**
 * @typedef CartCheckoutResponse
 * @property {string} [payment_confirm_url]
 * @property {string} [order_id]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} [app_intercept_url]
 * @property {string} [callback_url]
 * @property {CheckCart} [cart]
 * @property {Object} [data]
 */

/**
 * @typedef CartDeliveryModesResponse
 * @property {number[]} [pickup_stores]
 * @property {string[]} [available_modes]
 */

/**
 * @typedef PickupStoreDetail
 * @property {string} [landmark]
 * @property {string} [email]
 * @property {string} [area_code]
 * @property {string} [area_code_slug]
 * @property {string} [address]
 * @property {string} [name]
 * @property {string} [country]
 * @property {number} [uid]
 * @property {number} [id]
 * @property {string} [phone]
 * @property {string} [address_type]
 * @property {string} [area]
 * @property {string} [store_code]
 * @property {number} [pincode]
 * @property {string} [city]
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
 * @property {string} [payment_mode]
 * @property {string} [aggregator_name]
 * @property {string} [address_id]
 * @property {string} [payment_identifier]
 */

/**
 * @typedef CouponValidity
 * @property {string} [title]
 * @property {string} [display_message_en]
 * @property {number} [discount]
 * @property {boolean} [valid]
 * @property {string} [code]
 */

/**
 * @typedef PaymentCouponValidate
 * @property {string} [message]
 * @property {boolean} success
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
 * @typedef Asset
 * @property {string} [aspect_ratio]
 * @property {string} [id]
 * @property {string} [secure_url]
 */

/**
 * @typedef RewardsRule
 * @property {number} [amount]
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
 * @typedef ErrorRes
 * @property {string} [message]
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
 * @typedef BadRequest
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
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */

/**
 * @typedef EntityTypeObj
 * @property {string} [entity_value]
 * @property {string} [display_name]
 */

module.exports = PlatformClient;
