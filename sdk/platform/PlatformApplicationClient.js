const Lead = require("./Lead/LeadPlatformApplicationClient");

const Feedback = require("./Feedback/FeedbackPlatformApplicationClient");

const Theme = require("./Theme/ThemePlatformApplicationClient");

const User = require("./User/UserPlatformApplicationClient");

const Content = require("./Content/ContentPlatformApplicationClient");

const Communication = require("./Communication/CommunicationPlatformApplicationClient");

const Payment = require("./Payment/PaymentPlatformApplicationClient");

const Order = require("./Order/OrderPlatformApplicationClient");

const Catalog = require("./Catalog/CatalogPlatformApplicationClient");

const FileStorage = require("./FileStorage/FileStoragePlatformApplicationClient");

const Share = require("./Share/SharePlatformApplicationClient");

const Configuration = require("./Configuration/ConfigurationPlatformApplicationClient");

const Cart = require("./Cart/CartPlatformApplicationClient");

const Rewards = require("./Rewards/RewardsPlatformApplicationClient");

const Analytics = require("./Analytics/AnalyticsPlatformApplicationClient");

const Partner = require("./Partner/PartnerPlatformApplicationClient");

const { FDKClientValidationError } = require("../common/FDKError");

class PlatformApplicationClient {
  constructor(applicationId, config) {
    this.config = config;
    this.companyId = config.companyId;
    this.applicationId = applicationId;

    this.lead = new Lead(config, applicationId);

    this.feedback = new Feedback(config, applicationId);

    this.theme = new Theme(config, applicationId);

    this.user = new User(config, applicationId);

    this.content = new Content(config, applicationId);

    this.communication = new Communication(config, applicationId);

    this.payment = new Payment(config, applicationId);

    this.order = new Order(config, applicationId);

    this.catalog = new Catalog(config, applicationId);

    this.fileStorage = new FileStorage(config, applicationId);

    this.share = new Share(config, applicationId);

    this.configuration = new Configuration(config, applicationId);

    this.cart = new Cart(config, applicationId);

    this.rewards = new Rewards(config, applicationId);

    this.analytics = new Analytics(config, applicationId);

    this.partner = new Partner(config, applicationId);
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
 * @property {string[]} display_fields
 * @property {Object[]} [aggregators]
 * @property {boolean} created
 * @property {boolean} success
 * @property {string[]} excluded_fields
 * @property {string} app_id
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} code
 * @property {boolean} success
 * @property {string} description
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} config_type
 * @property {boolean} [is_active]
 * @property {string} merchant_salt
 * @property {string} secret
 * @property {string} key
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {string} app_id
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {boolean} [is_active]
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
 * @property {string} small
 * @property {string} large
 */

/**
 * @typedef IntentApp
 * @property {string} [code]
 * @property {string} [display_name]
 * @property {string} [package_name]
 * @property {PaymentModeLogo} [logos]
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
 */

/**
 * @typedef PaymentModeList
 * @property {string} [card_issuer]
 * @property {number} [display_priority]
 * @property {IntentApp[]} [intent_app]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {string} [card_fingerprint]
 * @property {string} [merchant_code]
 * @property {number} [exp_month]
 * @property {string} [card_type]
 * @property {string} [card_id]
 * @property {string} [card_isin]
 * @property {string} [nickname]
 * @property {number} [cod_limit_per_order]
 * @property {string} [name]
 * @property {string} [card_brand]
 * @property {string} [card_token]
 * @property {boolean} [expired]
 * @property {number} [exp_year]
 * @property {number} [timeout]
 * @property {string[]} [intent_app_error_list]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {PaymentModeLogo} [logo_url]
 * @property {number} [retry_count]
 * @property {boolean} [intent_flow]
 * @property {number} [cod_limit]
 * @property {string} [card_brand_image]
 * @property {string} [fynd_vpa]
 * @property {number} [remaining_limit]
 * @property {string} [card_reference]
 * @property {string} [card_name]
 * @property {string} [code]
 * @property {string} [display_name]
 * @property {string} [card_number]
 * @property {string} aggregator_name
 */

/**
 * @typedef RootPaymentMode
 * @property {boolean} [add_card_enabled]
 * @property {number} display_priority
 * @property {boolean} [save_card]
 * @property {boolean} [is_pay_by_card_pl]
 * @property {boolean} [anonymous_enable]
 * @property {string} name
 * @property {PaymentModeList[]} [list]
 * @property {string} display_name
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
 * @property {string} transfer_type
 * @property {Object} unique_transfer_no
 * @property {boolean} is_default
 * @property {boolean} is_active
 * @property {Object} customers
 * @property {Object[]} payouts_aggregators
 * @property {Object} more_attributes
 */

/**
 * @typedef PayoutsResponse
 * @property {boolean} success
 * @property {Payout[]} items
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} account_type
 * @property {string} [country]
 * @property {string} ifsc_code
 * @property {string} [bank_name]
 * @property {string} [branch_name]
 * @property {string} [city]
 * @property {number} [pincode]
 * @property {string} [account_no]
 * @property {string} [account_holder]
 * @property {string} [state]
 */

/**
 * @typedef PayoutRequest
 * @property {string} transfer_type
 * @property {string} aggregator
 * @property {Object} users
 * @property {boolean} is_active
 * @property {string} unique_external_id
 * @property {PayoutBankDetails} bank_details
 */

/**
 * @typedef PayoutResponse
 * @property {string} transfer_type
 * @property {string} unique_transfer_no
 * @property {boolean} created
 * @property {Object} users
 * @property {string} aggregator
 * @property {boolean} is_active
 * @property {Object} payouts
 * @property {string} payment_status
 * @property {Object} bank_details
 * @property {boolean} success
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} success
 * @property {boolean} is_default
 * @property {boolean} is_active
 */

/**
 * @typedef UpdatePayoutRequest
 * @property {string} unique_external_id
 * @property {boolean} is_default
 * @property {boolean} is_active
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
 * @property {string} message
 * @property {boolean} success
 * @property {Object} [data]
 * @property {boolean} [is_verified_flag]
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} code
 * @property {boolean} success
 * @property {string} description
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} ifsc_code
 * @property {string} bank_name
 * @property {string} branch_name
 * @property {string} account_no
 * @property {string} account_holder
 */

/**
 * @typedef AddBeneficiaryDetailsOTPRequest
 * @property {BankDetailsForOTP} details
 * @property {string} order_id
 */

/**
 * @typedef IfscCodeResponse
 * @property {boolean} [success]
 * @property {string} branch_name
 * @property {string} bank_name
 */

/**
 * @typedef OrderBeneficiaryDetails
 * @property {boolean} is_active
 * @property {string} [comment]
 * @property {string} bank_name
 * @property {string} subtitle
 * @property {string} email
 * @property {string} modified_on
 * @property {string} [mobile]
 * @property {string} [branch_name]
 * @property {string} account_holder
 * @property {string} created_on
 * @property {string} transfer_mode
 * @property {string} title
 * @property {string} ifsc_code
 * @property {string} account_no
 * @property {string} address
 * @property {string} beneficiary_id
 * @property {string} display_name
 * @property {string} [delights_user_name]
 * @property {number} id
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [payment_gateway]
 * @property {string} [current_status]
 * @property {Object} [extra_meta]
 * @property {string} [order_id]
 * @property {string} [payment_id]
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
 * @property {string} message
 * @property {boolean} success
 * @property {string} order_id
 */

/**
 * @typedef PlatformPaymentOptions
 * @property {string} source
 * @property {Object} [callback_url]
 * @property {string} mode_of_payment
 * @property {boolean} [anonymous_cod]
 * @property {boolean} enabled
 * @property {number} [cod_amount_limit]
 * @property {number} [cod_charges]
 * @property {Object} methods
 * @property {Object} [payment_selection_lock]
 */

/**
 * @typedef PlatfromPaymentConfig
 * @property {string} message
 * @property {boolean} success
 * @property {PlatformPaymentOptions} data
 */

/**
 * @typedef UpdatePlatformPaymentConfig
 * @property {boolean} [anonymous_cod]
 * @property {number} [cod_amount_limit]
 * @property {number} [cod_charges]
 * @property {Object} methods
 * @property {Object} [payment_selection_lock]
 */

/**
 * @typedef CODdata
 * @property {number} remaining_limit
 * @property {string} user_id
 * @property {boolean} is_active
 * @property {number} limit
 * @property {number} usages
 */

/**
 * @typedef GetUserCODLimitResponse
 * @property {boolean} success
 * @property {CODdata} user_cod_data
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
 * @typedef EdcModelData
 * @property {string[]} models
 * @property {number} aggregator_id
 * @property {string} aggregator
 */

/**
 * @typedef EdcAggregatorAndModelListResponse
 * @property {boolean} success
 * @property {EdcModelData[]} data
 */

/**
 * @typedef StatisticsData
 * @property {number} active_device_count
 * @property {number} inactive_device_count
 */

/**
 * @typedef EdcDeviceStatsResponse
 * @property {boolean} success
 * @property {StatisticsData} statistics
 */

/**
 * @typedef EdcAddRequest
 * @property {string} edc_device_serial_no
 * @property {string} terminal_serial_no
 * @property {number} aggregator_id
 * @property {number} store_id
 * @property {string} edc_model
 * @property {string} [device_tag]
 */

/**
 * @typedef EdcDevice
 * @property {string} application_id
 * @property {string} edc_device_serial_no
 * @property {string} [edc_model]
 * @property {string} terminal_serial_no
 * @property {boolean} is_active
 * @property {number} aggregator_id
 * @property {string} terminal_unique_identifier
 * @property {number} store_id
 * @property {string} [merchant_store_pos_code]
 * @property {string} device_tag
 * @property {string} [aggregator_name]
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
 * @property {string} [edc_device_serial_no]
 * @property {string} [edc_model]
 * @property {string} [is_active]
 * @property {number} [aggregator_id]
 * @property {number} [store_id]
 * @property {string} [merchant_store_pos_code]
 * @property {string} [device_tag]
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
 * @property {string} customer_id
 * @property {string} email
 * @property {string} contact
 * @property {string} aggregator
 * @property {string} [vpa]
 * @property {string} method
 * @property {number} [timeout]
 * @property {string} currency
 * @property {string} merchant_order_id
 * @property {string} [razorpay_payment_id]
 * @property {number} amount
 * @property {string} order_id
 * @property {string} [device_id]
 */

/**
 * @typedef PaymentInitializationResponse
 * @property {string} [customer_id]
 * @property {string} aggregator
 * @property {string} [vpa]
 * @property {string} method
 * @property {string} [upi_poll_url]
 * @property {string} [currency]
 * @property {number} [timeout]
 * @property {string} merchant_order_id
 * @property {string} [status]
 * @property {string} [device_id]
 * @property {string} [razorpay_payment_id]
 * @property {string} [virtual_id]
 * @property {string} [bqr_image]
 * @property {number} [amount]
 * @property {boolean} success
 * @property {string} polling_url
 * @property {string} [aggregator_order_id]
 */

/**
 * @typedef PaymentStatusUpdateRequest
 * @property {string} customer_id
 * @property {string} email
 * @property {string} contact
 * @property {string} aggregator
 * @property {string} [vpa]
 * @property {string} method
 * @property {string} currency
 * @property {string} merchant_order_id
 * @property {string} status
 * @property {number} amount
 * @property {string} order_id
 * @property {string} [device_id]
 */

/**
 * @typedef PaymentStatusUpdateResponse
 * @property {boolean} retry
 * @property {string} status
 * @property {boolean} [success]
 * @property {string} [redirect_url]
 * @property {string} aggregator_name
 */

/**
 * @typedef ResendOrCancelPaymentRequest
 * @property {string} order_id
 * @property {string} request_type
 * @property {string} [device_id]
 */

/**
 * @typedef LinkStatus
 * @property {string} message
 * @property {boolean} status
 */

/**
 * @typedef ResendOrCancelPaymentResponse
 * @property {boolean} success
 * @property {LinkStatus} data
 */

/**
 * @typedef UserDataInfo
 * @property {number} [uid]
 * @property {string} [avis_user_id]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {string} [last_name]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [name]
 * @property {string} [first_name]
 * @property {string} [mobile]
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} type
 * @property {string} logo
 */

/**
 * @typedef PlatformItem
 * @property {boolean} [can_cancel]
 * @property {string[]} [image]
 * @property {string[]} [l1_category]
 * @property {string} [l3_category_name]
 * @property {boolean} [can_return]
 * @property {string} [size]
 * @property {number} [l3_category]
 * @property {string[]} [images]
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {number} [id]
 */

/**
 * @typedef Prices
 * @property {number} [coupon_value]
 * @property {number} [tax_collected_at_source]
 * @property {number} [fynd_credits]
 * @property {number} [cashback_applied]
 * @property {number} [refund_amount]
 * @property {number} [refund_credit]
 * @property {number} [value_of_good]
 * @property {number} [promotion_effective_discount]
 * @property {number} [discount]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [delivery_charge]
 * @property {number} [cashback]
 * @property {number} [price_effective]
 * @property {number} [cod_charges]
 * @property {number} [price_marked]
 * @property {number} [amount_paid]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} tax_collected_at_source
 * @property {number} gst_fee
 * @property {number} value_of_good
 * @property {string} gstin_code
 * @property {number} brand_calculated_amount
 */

/**
 * @typedef BagUnit
 * @property {boolean} [can_cancel]
 * @property {Object} status
 * @property {PlatformItem} [item]
 * @property {number} bag_id
 * @property {string} shipment_id
 * @property {boolean} [can_return]
 * @property {string} ordering_channel
 * @property {Prices} [prices]
 * @property {GSTDetailsData} [gst]
 * @property {number} item_quantity
 * @property {number} total_shipment_bags
 */

/**
 * @typedef ShipmentStatus
 * @property {string} status
 * @property {string} ops_status
 * @property {string} actual_status
 * @property {string} hex_code
 * @property {string} title
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} code
 * @property {string} id
 */

/**
 * @typedef ShipmentItem
 * @property {string} created_at
 * @property {UserDataInfo} [user]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {BagUnit[]} [bags]
 * @property {Prices} [prices]
 * @property {ShipmentStatus} [shipment_status]
 * @property {Object} [channel]
 * @property {Object} [sla]
 * @property {Object} [application]
 * @property {Object} [company]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {number} total_bags_count
 * @property {number} shipment_created_at
 * @property {number} total_shipments_in_order
 * @property {Object} [payment_methods]
 * @property {string} id
 * @property {string} fulfilling_centre
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
 * @property {string} value
 * @property {FilterInfoOption[]} [options]
 * @property {string} text
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {Object} [applied_filters]
 * @property {ShipmentItem[]} [items]
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [page]
 */

/**
 * @typedef Error
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [mode]
 * @property {string} [logo]
 * @property {string} [source]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [track_url]
 * @property {string} [eway_bill_id]
 * @property {string} [name]
 * @property {string} [awb_no]
 * @property {string} [gst_tag]
 * @property {string} [pincode]
 * @property {number} [id]
 * @property {string} [country]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [ordering_channel]
 * @property {string} [affiliate_id]
 * @property {string} [source]
 * @property {string} [order_value]
 * @property {Object} [ordering_channel_logo]
 * @property {string} fynd_order_id
 * @property {string} [order_date]
 * @property {string} [cod_charges]
 * @property {Object} [tax_details]
 */

/**
 * @typedef UserDetailsData
 * @property {string} address
 * @property {string} [email]
 * @property {string} city
 * @property {string} name
 * @property {string} state
 * @property {string} pincode
 * @property {string} country
 * @property {string} phone
 */

/**
 * @typedef TrackingList
 * @property {string} status
 * @property {string} text
 * @property {string} [time]
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 */

/**
 * @typedef AffiliateMeta
 * @property {string} [due_date]
 * @property {string} [channel_shipment_id]
 * @property {string} [channel_order_id]
 * @property {boolean} [is_priority]
 * @property {number} [loyalty_discount]
 * @property {number} [size_level_total_qty]
 * @property {number} [quantity]
 * @property {string} [coupon_code]
 * @property {string} [order_item_id]
 * @property {string} [box_type]
 * @property {number} [employee_discount]
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
 * @typedef Formatted
 * @property {string} [f_max]
 * @property {string} [f_min]
 */

/**
 * @typedef LockData
 * @property {boolean} [mto]
 * @property {boolean} [locked]
 * @property {string} [lock_message]
 */

/**
 * @typedef BuyerDetails
 * @property {string} gstin
 * @property {string} address
 * @property {string} city
 * @property {string} name
 * @property {string} [ajio_site_id]
 * @property {string} state
 * @property {number} pincode
 */

/**
 * @typedef EInvoice
 * @property {string} [error_code]
 * @property {string} [acknowledge_date]
 * @property {string} [irn]
 * @property {string} [signed_qr_code]
 * @property {number} [acknowledge_no]
 * @property {string} [signed_invoice]
 * @property {string} [error_message]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [credit_note]
 * @property {EInvoice} [invoice]
 */

/**
 * @typedef ShipmentMeta
 * @property {string} [forward_affiliate_order_id]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {string} [dp_sort_key]
 * @property {string} [po_number]
 * @property {Object} [b2c_buyer_details]
 * @property {DebugInfo} [debug_info]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [return_affiliate_order_id]
 * @property {string} [dp_id]
 * @property {Object} [external]
 * @property {number} [shipment_weight]
 * @property {Formatted} [formatted]
 * @property {string} [marketplace_store_id]
 * @property {Object} [dp_options]
 * @property {string} [dp_name]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [order_type]
 * @property {string} [box_type]
 * @property {LockData} [lock_data]
 * @property {Object} [return_details]
 * @property {string} [packaging_name]
 * @property {string} [store_invoice_updated_date]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [awb_number]
 * @property {Object} [bag_weight]
 * @property {string} [due_date]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {number} [return_store_node]
 * @property {number} weight
 * @property {string} [return_awb_number]
 * @property {boolean} same_store_available
 * @property {Object} [ewaybill_info]
 */

/**
 * @typedef PDFLinks
 * @property {string} [b2b]
 * @property {string} [label_a6]
 * @property {string} [label_pos]
 * @property {string} [invoice_a6]
 * @property {string} [invoice_a4]
 * @property {string} invoice_type
 * @property {string} [credit_note_url]
 * @property {string} label_type
 * @property {string} [invoice]
 * @property {string} [label]
 * @property {string} [po_invoice]
 * @property {string} [invoice_pos]
 * @property {string} [label_a4]
 */

/**
 * @typedef AffiliateDetails
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} [ad_id]
 * @property {string} affiliate_shipment_id
 * @property {ShipmentMeta} shipment_meta
 * @property {string} [affiliate_id]
 * @property {string} [company_affiliate_tag]
 * @property {string} affiliate_order_id
 * @property {string} affiliate_store_id
 * @property {PDFLinks} [pdf_links]
 * @property {string} affiliate_bag_id
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [status]
 * @property {string} [created_at]
 * @property {string} [shipment_id]
 * @property {string[]} [bag_list]
 * @property {number} [id]
 */

/**
 * @typedef BagStateMapper
 * @property {string} [app_state_name]
 * @property {string} state_type
 * @property {string} display_name
 * @property {boolean} [is_active]
 * @property {boolean} [notify_customer]
 * @property {string} journey_type
 * @property {number} bs_id
 * @property {string} name
 * @property {string} [app_display_name]
 * @property {boolean} [app_facing]
 */

/**
 * @typedef BagStatusHistory
 * @property {Object[]} [reasons]
 * @property {number} [delivery_partner_id]
 * @property {string} status
 * @property {string} [state_type]
 * @property {string} [shipment_id]
 * @property {number} [bag_id]
 * @property {string} [created_at]
 * @property {string} [display_name]
 * @property {boolean} [forward]
 * @property {boolean} [kafka_sync]
 * @property {number} [state_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [delivery_awb_number]
 * @property {string} [app_display_name]
 * @property {string} [updated_at]
 * @property {number} [bsh_id]
 * @property {number} [store_id]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [landmark]
 * @property {string} [created_at]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [updated_at]
 * @property {string} [email]
 * @property {string} [city]
 * @property {string} [address1]
 * @property {string} [contact_person]
 * @property {string} [version]
 * @property {string} [area]
 * @property {string} [address_type]
 * @property {string} [address_category]
 * @property {string} [state]
 * @property {string} [pincode]
 * @property {string} [country]
 * @property {string} [phone]
 */

/**
 * @typedef BagConfigs
 * @property {boolean} is_active
 * @property {boolean} is_returnable
 * @property {boolean} allow_force_return
 * @property {boolean} enable_tracking
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef CurrentStatus
 * @property {number} [delivery_partner_id]
 * @property {string} [created_at]
 * @property {string} [state_type]
 * @property {string} [status]
 * @property {number} [bag_id]
 * @property {string} [shipment_id]
 * @property {boolean} [kafka_sync]
 * @property {number} [state_id]
 * @property {number} current_status_id
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [delivery_awb_number]
 * @property {number} [updated_at]
 * @property {number} [store_id]
 */

/**
 * @typedef BagGST
 * @property {number} [gst_fee]
 * @property {number} [value_of_good]
 * @property {string} [gstin_code]
 * @property {number} [brand_calculated_amount]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [gst_tax_percentage]
 * @property {string} [gst_tag]
 * @property {string} [hsn_code]
 */

/**
 * @typedef OrderBagArticle
 * @property {string} [uid]
 * @property {Object} [identifiers]
 * @property {Object} [return_config]
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
 * @property {string} [type]
 * @property {number} [value]
 */

/**
 * @typedef AppliedPromos
 * @property {string} [promotion_name]
 * @property {boolean} [mrp_promotion]
 * @property {string} [promotion_type]
 * @property {number} [article_quantity]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promo_id]
 * @property {number} [amount]
 * @property {DiscountRules[]} [discount_rules]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} gst_fee
 * @property {number} promotion_effective_discount
 * @property {number} discount
 * @property {number} [amount_paid_roundoff]
 * @property {boolean} added_to_fynd_cash
 * @property {number} coupon_effective_discount
 * @property {string} hsn_code
 * @property {number} value_of_good
 * @property {string} item_name
 * @property {string} size
 * @property {number} brand_calculated_amount
 * @property {Identifier} identifiers
 * @property {number} total_units
 * @property {number} price_marked
 * @property {string} gst_tag
 * @property {number} fynd_credits
 * @property {number} [tax_collected_at_source]
 * @property {number} cashback_applied
 * @property {number} delivery_charge
 * @property {number} cod_charges
 * @property {number} coupon_value
 * @property {number} refund_credit
 * @property {number} cashback
 * @property {number} transfer_price
 * @property {number} price_effective
 * @property {number} gst_tax_percentage
 * @property {number} amount_paid
 */

/**
 * @typedef OrderBrandName
 * @property {string} created_on
 * @property {string} brand_name
 * @property {string} logo
 * @property {string} [modified_on]
 * @property {string} company
 * @property {number} id
 */

/**
 * @typedef OrderBags
 * @property {string} [seller_identifier]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {string} [identifier]
 * @property {boolean} [can_cancel]
 * @property {number} bag_id
 * @property {BagConfigs} [bag_configs]
 * @property {number} [quantity]
 * @property {CurrentStatus} [current_status]
 * @property {boolean} [can_return]
 * @property {string} [display_name]
 * @property {BagGST} [gst_details]
 * @property {string} [entity_type]
 * @property {number} [line_number]
 * @property {OrderBagArticle} [article]
 * @property {PlatformItem} [item]
 * @property {Object} [parent_promo_bags]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {Prices} [prices]
 * @property {OrderBrandName} [brand]
 */

/**
 * @typedef OrderingStoreDetails
 * @property {string} address
 * @property {string} city
 * @property {string} store_name
 * @property {string} contact_person
 * @property {string} code
 * @property {string} state
 * @property {Object} meta
 * @property {string} pincode
 * @property {number} ordering_store_id
 * @property {string} country
 * @property {string} phone
 */

/**
 * @typedef FulfillingStore
 * @property {string} address
 * @property {string} pincode
 * @property {string} city
 * @property {string} store_name
 * @property {string} contact_person
 * @property {string} code
 * @property {string} state
 * @property {Object} meta
 * @property {string} fulfillment_channel
 * @property {number} id
 * @property {string} country
 * @property {string} phone
 */

/**
 * @typedef Dimensions
 * @property {number} [length]
 * @property {number} [width]
 * @property {string} [unit]
 * @property {boolean} [is_default]
 * @property {number} [height]
 */

/**
 * @typedef Meta
 * @property {Dimensions} [dimension]
 */

/**
 * @typedef CompanyDetails
 * @property {string} [company_cin]
 * @property {number} [company_id]
 * @property {Object} [address]
 * @property {string} [company_name]
 */

/**
 * @typedef PlatformShipment
 * @property {ShipmentPayments} [payments]
 * @property {number} [shipment_quantity]
 * @property {DPDetailsData} [dp_details]
 * @property {UserDataInfo} [user]
 * @property {string} [vertical]
 * @property {OrderDetailsData} [order]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [operational_status]
 * @property {string} shipment_id
 * @property {UserDetailsData} [delivery_details]
 * @property {Object} [delivery_slot]
 * @property {TrackingList[]} [tracking_list]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {Object} [coupon]
 * @property {number} [fulfilment_priority]
 * @property {string} [packaging_type]
 * @property {ShipmentStatusData} [status]
 * @property {string[]} [shipment_images]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {GSTDetailsData} [gst_details]
 * @property {string} [payment_mode]
 * @property {OrderBags[]} [bags]
 * @property {string} [user_agent]
 * @property {string} [invoice_id]
 * @property {Object[]} [custom_meta]
 * @property {number} [total_bags]
 * @property {number} [total_items]
 * @property {OrderingStoreDetails} [ordering_store]
 * @property {Prices} [prices]
 * @property {string} [shipment_status]
 * @property {string} [platform_logo]
 * @property {string} [picked_date]
 * @property {string} [priority_text]
 * @property {boolean} [enable_dp_tracking]
 * @property {EinvoiceInfo} [invoice]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Meta} [meta]
 * @property {string} [journey_type]
 * @property {CompanyDetails} [company_details]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {boolean} success
 * @property {PlatformShipment[]} [shipments]
 * @property {string} [message]
 */

/**
 * @typedef BillingStaffDetails
 * @property {string} [last_name]
 * @property {number} [staff_id]
 * @property {string} [user]
 * @property {string} [first_name]
 */

/**
 * @typedef PlatformUserDetails
 * @property {string} [platform_user_first_name]
 * @property {string} [platform_user_id]
 * @property {string} [platform_user_last_name]
 */

/**
 * @typedef TransactionData
 * @property {string} [status]
 * @property {string} [currency]
 * @property {string} [unique_reference_number]
 * @property {string} [terminal_id]
 * @property {string} [transaction_id]
 * @property {string} [entity]
 * @property {string} [payment_id]
 * @property {string} [amount_paid]
 */

/**
 * @typedef OrderMeta
 * @property {string} [order_platform]
 * @property {BillingStaffDetails} [billing_staff_details]
 * @property {PlatformUserDetails} [platform_user_details]
 * @property {Object[]} [order_tags]
 * @property {Object} [staff]
 * @property {string} [company_logo]
 * @property {TransactionData} [transaction_data]
 * @property {string} [order_type]
 * @property {string[]} [order_child_entities]
 * @property {string} [customer_note]
 * @property {Object} [extra_meta]
 * @property {Object[]} [files]
 * @property {number} [mongo_cart_id]
 * @property {number} [employee_id]
 * @property {string} [currency_symbol]
 * @property {number} [cart_id]
 * @property {number} [ordering_store]
 * @property {string} [comment]
 * @property {string} [payment_type]
 */

/**
 * @typedef TaxDetails
 * @property {string} [pan_no]
 * @property {string} [gstin]
 */

/**
 * @typedef OrderDict
 * @property {Prices} [prices]
 * @property {OrderMeta} [meta]
 * @property {string} fynd_order_id
 * @property {string} order_date
 * @property {Object} [payment_methods]
 * @property {TaxDetails} [tax_details]
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {boolean} success
 * @property {PlatformShipment[]} [shipments]
 * @property {OrderDict} [order]
 */

/**
 * @typedef SubLane
 * @property {number} [index]
 * @property {Object[]} [actions]
 * @property {number} [total_items]
 * @property {string} [text]
 * @property {string} [value]
 */

/**
 * @typedef SuperLane
 * @property {string} value
 * @property {SubLane[]} [options]
 * @property {string} text
 * @property {number} [total_items]
 */

/**
 * @typedef LaneConfigResponse
 * @property {SuperLane[]} [super_lanes]
 */

/**
 * @typedef PlatformBreakupValues
 * @property {string} [value]
 * @property {string} [name]
 * @property {string} [display]
 */

/**
 * @typedef PlatformChannel
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef PlatformOrderItems
 * @property {UserDataInfo} [user_info]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {string} [payment_mode]
 * @property {string} [order_created_time]
 * @property {PlatformChannel} [channel]
 * @property {number} [order_value]
 * @property {string} [order_id]
 * @property {PlatformShipment[]} [shipments]
 * @property {number} [total_order_value]
 * @property {Object} [meta]
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
 * @property {number} [total_count]
 * @property {boolean} [success]
 * @property {string} [lane]
 * @property {PlatformOrderItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Options
 * @property {number} [value]
 * @property {string} [text]
 */

/**
 * @typedef MetricsCount
 * @property {number} value
 * @property {Options[]} [options]
 * @property {string} key
 * @property {string} text
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [status]
 * @property {string} [reason]
 * @property {string} [last_location_recieved_at]
 * @property {string} [raw_status]
 * @property {string} [updated_time]
 * @property {string} [updated_at]
 * @property {Object} [meta]
 * @property {string} [account_name]
 * @property {string} [awb]
 * @property {string} [shipment_type]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {Object} [meta]
 * @property {PlatformTrack[]} [results]
 */

/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [processed]
 * @property {FiltersInfo[]} [filters]
 * @property {FiltersInfo[]} [unfulfilled]
 * @property {FiltersInfo[]} [action_centre]
 * @property {FiltersInfo[]} [returned]
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
 * @property {string} [report_requested_at]
 * @property {string} [report_created_at]
 * @property {string} [display_name]
 * @property {string} [report_name]
 * @property {Object} [request_details]
 * @property {string} [s3_key]
 * @property {string} [report_id]
 * @property {string} [report_type]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [company_id]
 * @property {string} [article_id]
 * @property {string} [item_id]
 * @property {string} [jio_code]
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
 * @property {string} [trace_id]
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {boolean} [success]
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
 * @property {string} [company_id]
 * @property {string} batch_id
 * @property {boolean} do_invoice_label_generated
 * @property {Object} [invoice]
 * @property {string} [store_name]
 * @property {Object} [label]
 * @property {string} [invoice_status]
 * @property {string} [store_code]
 * @property {string} [store_id]
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
 * @property {FileUploadResponse} [upload]
 * @property {string} [operation]
 * @property {number} [size]
 * @property {string} [content_type]
 * @property {string} [file_path]
 * @property {URL} [cdn]
 * @property {string} [namespace]
 * @property {string} [method]
 * @property {string[]} [tags]
 * @property {string} [file_name]
 */

/**
 * @typedef bulkListingData
 * @property {string} [excel_url]
 * @property {string[]} [processing_shipments]
 * @property {string} [store_name]
 * @property {number} [processing]
 * @property {number} [total]
 * @property {string} [file_name]
 * @property {number} [failed]
 * @property {string} [batch_id]
 * @property {string} [user_id]
 * @property {string} [status]
 * @property {Object[]} [failed_shipments]
 * @property {number} [company_id]
 * @property {string} [uploaded_on]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {string} [user_name]
 * @property {Object[]} [successful_shipments]
 * @property {string} [id]
 * @property {number} [successful]
 */

/**
 * @typedef BulkListingPage
 * @property {boolean} [has_next]
 * @property {number} [size]
 * @property {boolean} [has_previous]
 * @property {number} [total]
 * @property {string} [type]
 * @property {number} [current]
 */

/**
 * @typedef BulkListingResponse
 * @property {bulkListingData[]} [data]
 * @property {boolean} [success]
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
 * @property {string[]} [qc_type]
 * @property {QuestionSet[]} [question_set]
 * @property {number} [id]
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
 * @property {boolean} [status]
 * @property {string} [message]
 */

/**
 * @typedef BulkActionDetailsDataField
 * @property {string} [company_id]
 * @property {string} [batch_id]
 * @property {number} [total_shipments_count]
 * @property {number} [failed_shipments_count]
 * @property {number} [successful_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [processing_shipments_count]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string} [message]
 * @property {boolean} [status]
 * @property {string[]} [failed_records]
 * @property {string} [uploaded_by]
 * @property {string[]} [error]
 * @property {string} [success]
 * @property {string} [uploaded_on]
 * @property {string} [user_id]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {number} [loyalty_discount]
 * @property {string} affiliate_bag_id
 * @property {number} [employee_discount]
 */

/**
 * @typedef Dates
 * @property {Object} [delivery_date]
 * @property {string} [order_created]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_active
 * @property {boolean} is_returnable
 * @property {boolean} enable_tracking
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef BagGSTDetails
 * @property {number} cgst_tax_percentage
 * @property {number} tax_collected_at_source
 * @property {string} cgst_gst_fee
 * @property {number} gst_fee
 * @property {string} igst_gst_fee
 * @property {number} value_of_good
 * @property {string} sgst_gst_fee
 * @property {number} sgst_tax_percentage
 * @property {number} igst_tax_percentage
 * @property {string} [gstin_code]
 * @property {number} brand_calculated_amount
 * @property {boolean} [is_default_hsn_code]
 * @property {string} hsn_code_id
 * @property {number} gst_tax_percentage
 * @property {string} gst_tag
 * @property {string} hsn_code
 */

/**
 * @typedef Weight
 * @property {boolean} [is_default]
 * @property {string} [unit]
 * @property {number} [shipping]
 */

/**
 * @typedef ReturnConfig
 * @property {boolean} [returnable]
 * @property {string} [unit]
 * @property {number} [time]
 */

/**
 * @typedef Article
 * @property {Object} [esp_modified]
 * @property {string} uid
 * @property {string} seller_identifier
 * @property {Dimensions} [dimensions]
 * @property {string} _id
 * @property {Object} [child_details]
 * @property {Weight} [weight]
 * @property {string} size
 * @property {ReturnConfig} [return_config]
 * @property {Identifier} identifiers
 * @property {boolean} [is_set]
 * @property {string} [code]
 * @property {Object} [a_set]
 * @property {Object} [raw_meta]
 */

/**
 * @typedef Attributes
 * @property {string} [brand_name]
 * @property {string[]} [gender]
 * @property {string} [essential]
 * @property {string} [marketer_name]
 * @property {string} [primary_material]
 * @property {string} [name]
 * @property {string} [marketer_address]
 * @property {string} [primary_color_hex]
 * @property {string} [primary_color]
 */

/**
 * @typedef Item
 * @property {string[]} [l1_category]
 * @property {number} item_id
 * @property {number} brand_id
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {boolean} [can_cancel]
 * @property {Attributes} attributes
 * @property {string} size
 * @property {string} name
 * @property {string} [code]
 * @property {string} [branch_url]
 * @property {string[]} image
 * @property {boolean} [can_return]
 * @property {string} [l3_category_name]
 * @property {string[]} [l2_category]
 * @property {number} [l2_category_id]
 * @property {string} [webstore_product_url]
 * @property {string} [gender]
 * @property {string} brand
 * @property {number} [l3_category]
 * @property {number} [l1_category_id]
 * @property {Object} [meta]
 * @property {string} slug_key
 * @property {string} [last_updated_at]
 */

/**
 * @typedef StoreAddress
 * @property {string} created_at
 * @property {string} [address2]
 * @property {string} [area]
 * @property {string} address_category
 * @property {number} latitude
 * @property {string} country_code
 * @property {string} city
 * @property {string} [version]
 * @property {string} updated_at
 * @property {number} pincode
 * @property {string} contact_person
 * @property {string} address_type
 * @property {string} state
 * @property {string} country
 * @property {string} phone
 * @property {string} [landmark]
 * @property {number} longitude
 * @property {string} [email]
 * @property {string} address1
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [user]
 * @property {boolean} enabled
 * @property {string} [username]
 * @property {string} [password]
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
 * @property {string} value
 * @property {string} [url]
 * @property {string} legal_name
 * @property {boolean} verified
 * @property {string} ds_type
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
 * @property {Object[]} [timing]
 * @property {Object} [product_return_config]
 * @property {Object} [additional_contact_details]
 * @property {string} display_name
 * @property {StoreGstCredentials} gst_credentials
 * @property {string[]} [notification_emails]
 * @property {string} stage
 * @property {Object} [ewaybill_portal_details]
 * @property {StoreDocuments} [documents]
 * @property {string} [gst_number]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 */

/**
 * @typedef Store
 * @property {string} location_type
 * @property {string} [mall_name]
 * @property {string} created_at
 * @property {string} [address2]
 * @property {number} [packaging_material_count]
 * @property {Object} [brand_id]
 * @property {boolean} [is_archived]
 * @property {string} [order_integration_id]
 * @property {number} latitude
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} city
 * @property {string[]} [brand_store_tags]
 * @property {string} [vat_no]
 * @property {number} [parent_store_id]
 * @property {string} [code]
 * @property {string} name
 * @property {string} [updated_at]
 * @property {string} pincode
 * @property {string} login_username
 * @property {string} s_id
 * @property {StoreAddress} [store_address_json]
 * @property {number} company_id
 * @property {boolean} [is_active]
 * @property {string} contact_person
 * @property {string} [store_active_from]
 * @property {string} state
 * @property {string} country
 * @property {number} phone
 * @property {number} longitude
 * @property {number} [alohomora_user_id]
 * @property {string} address1
 * @property {string} [mall_area]
 * @property {string} store_email
 * @property {StoreMeta} meta
 * @property {string} fulfillment_channel
 */

/**
 * @typedef Brand
 * @property {number} [created_on]
 * @property {boolean} [credit_note_allowed]
 * @property {string} [invoice_prefix]
 * @property {string} brand_name
 * @property {string} [script_last_ran]
 * @property {string} [logo]
 * @property {number} [modified_on]
 * @property {string} [start_date]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} company
 * @property {number} brand_id
 * @property {number} [credit_note_expiry_days]
 * @property {string} [pickup_location]
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef B2BPODetails
 * @property {number} [po_line_amount]
 * @property {number} [total_gst_percentage]
 * @property {string} [docker_number]
 * @property {number} [item_base_price]
 * @property {number} [po_tax_amount]
 * @property {boolean} [partial_can_ret]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {string} [seller_identifier]
 * @property {Object} [restore_promos]
 * @property {number} b_id
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {string} [operational_status]
 * @property {string} [identifier]
 * @property {string} [order_integration_id]
 * @property {string} [b_type]
 * @property {string} [shipment_id]
 * @property {number} [no_of_bags_order]
 * @property {number} [bag_update_time]
 * @property {Dates} [dates]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {number} [quantity]
 * @property {string[]} [tags]
 * @property {boolean} [restore_coupon]
 * @property {BagStatusHistory} current_status
 * @property {BagReturnableCancelableStatus} status
 * @property {string} [display_name]
 * @property {BagGSTDetails} gst_details
 * @property {BagStatusHistory} [bag_status_history]
 * @property {string} [entity_type]
 * @property {BagStatusHistory} current_operational_status
 * @property {number} [line_number]
 * @property {Article} article
 * @property {Item} item
 * @property {BagStatusHistory[]} bag_status
 * @property {Object} [parent_promo_bags]
 * @property {Store} [ordering_store]
 * @property {Object[]} [applied_promos]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {Prices} prices
 * @property {Brand} brand
 * @property {ArticleDetails} [article_details]
 * @property {number[]} [original_bag_list]
 * @property {Object[]} [reasons]
 * @property {BagMeta} [meta]
 * @property {string} journey_type
 * @property {Object} [qc_required]
 */

/**
 * @typedef ErrorResponse
 * @property {string} error
 * @property {string} message
 */

/**
 * @typedef Page1
 * @property {number} item_total
 * @property {boolean} has_next
 * @property {number} size
 * @property {string} page_type
 * @property {number} current
 */

/**
 * @typedef GetBagsPlatformResponse
 * @property {BagDetailsPlatformResponse[]} items
 * @property {Page1} page
 */

/**
 * @typedef GeneratePosOrderReceiptResponse
 * @property {boolean} [success]
 * @property {string} [order_id]
 * @property {string} [payment_receipt]
 * @property {string} [invoice_receipt]
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
 * @property {number} store_id
 * @property {number} [bag_id]
 * @property {string} [item_id]
 * @property {number[]} [reason_ids]
 * @property {string} [set_id]
 * @property {string} [fynd_order_id]
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_id]
 * @property {string} [mongo_article_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Entities
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} reason_text
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_id]
 * @property {string} [id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {Entities[]} entities
 * @property {string} action
 * @property {string} action_type
 * @property {string} entity_type
 */

/**
 * @typedef Bags
 * @property {string} [affiliate_bag_id]
 * @property {number} [bag_id]
 * @property {string} [affiliate_order_id]
 * @property {boolean} [is_locked]
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef CheckResponse
 * @property {string} [shipment_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 * @property {Bags[]} [bags]
 * @property {boolean} [lock_status]
 * @property {string} [status]
 * @property {OriginalFilter} [original_filter]
 * @property {boolean} [is_bag_locked]
 * @property {boolean} [is_shipment_locked]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {boolean} [success]
 * @property {CheckResponse[]} [check_response]
 * @property {string} [message]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [description]
 * @property {string} [to_datetime]
 * @property {string} [platform_id]
 * @property {string} [logo_url]
 * @property {string} [from_datetime]
 * @property {number} [company_id]
 * @property {string} [platform_name]
 * @property {string} [created_at]
 * @property {number} id
 * @property {string} [title]
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
 * @property {number} [line_number]
 * @property {string} [identifier]
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
 * @property {number} [line_number]
 * @property {number} [quantity]
 * @property {string} [identifier]
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
 * @property {number} [line_number]
 * @property {number} [quantity]
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
 * @typedef ReasonsData
 * @property {EntitiesReasons[]} [entities]
 * @property {ProductsReasons[]} [products]
 */

/**
 * @typedef ShipmentsRequest
 * @property {DataUpdates} [data_updates]
 * @property {string} identifier
 * @property {Products[]} [products]
 * @property {ReasonsData} [reasons]
 */

/**
 * @typedef StatuesRequest
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [exclude_bags_next_state]
 * @property {string} [status]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [unlock_before_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [force_transition]
 * @property {boolean} [task]
 */

/**
 * @typedef ShipmentsResponse
 * @property {Object} [final_state]
 * @property {string} [stack_trace]
 * @property {string} [identifier]
 * @property {Object} [meta]
 * @property {string} [exception]
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
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
 * @typedef AffiliateAppConfigMeta
 * @property {string} value
 * @property {string} name
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} updated_at
 * @property {string} owner
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} name
 * @property {string} [description]
 * @property {string} secret
 * @property {string} token
 * @property {string} created_at
 * @property {string} id
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
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
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
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryStoreConfig} [inventory]
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
 * @typedef AffiliateStoreIdMapping
 * @property {number} store_id
 * @property {string} marketplace_store_id
 */

/**
 * @typedef OrderConfig
 * @property {Affiliate} affiliate
 * @property {string} [store_lookup]
 * @property {string} [bag_end_state]
 * @property {string} [article_lookup]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {boolean} [create_user]
 */

/**
 * @typedef OrderUser
 * @property {string} city
 * @property {string} email
 * @property {number} phone
 * @property {string} country
 * @property {string} state
 * @property {string} pincode
 * @property {string} first_name
 * @property {string} [address2]
 * @property {string} last_name
 * @property {number} mobile
 * @property {string} [address1]
 */

/**
 * @typedef UserData
 * @property {OrderUser} [shipping_user]
 * @property {OrderUser} [billing_user]
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
 * @property {number} item_id
 * @property {string} item_size
 * @property {string} seller_identifier
 * @property {number} quantity
 * @property {MarketPlacePdf} [pdf_links]
 * @property {string} modified_on
 * @property {number} avl_qty
 * @property {number} store_id
 * @property {string} sku
 * @property {Object} identifier
 * @property {string} _id
 * @property {string} affiliate_store_id
 * @property {number} discount
 * @property {number} price_effective
 * @property {number} price_marked
 * @property {string} fynd_store_id
 * @property {number} delivery_charge
 * @property {number} company_id
 * @property {number} unit_price
 * @property {number} transfer_price
 * @property {number} amount_paid
 * @property {string} hsn_code_id
 * @property {Object} affiliate_meta
 */

/**
 * @typedef ArticleDetails1
 * @property {string} _id
 * @property {number} brand_id
 * @property {Object} dimension
 * @property {number} quantity
 * @property {Object} category
 * @property {Object} weight
 * @property {Object} attributes
 */

/**
 * @typedef LocationDetails
 * @property {number} fulfillment_id
 * @property {ArticleDetails1[]} articles
 * @property {string} fulfillment_type
 */

/**
 * @typedef ShipmentDetails
 * @property {ArticleDetails1[]} articles
 * @property {string} affiliate_shipment_id
 * @property {number} shipments
 * @property {Object} [meta]
 * @property {number} fulfillment_id
 * @property {number} [dp_id]
 * @property {string} [box_type]
 */

/**
 * @typedef ShipmentConfig
 * @property {string} payment_mode
 * @property {string} identifier
 * @property {string} to_pincode
 * @property {LocationDetails} [location_details]
 * @property {string} action
 * @property {string} source
 * @property {string} journey
 * @property {ShipmentDetails[]} shipment
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderInfo
 * @property {OrderUser} shipping_address
 * @property {string} [coupon]
 * @property {Object} [payment]
 * @property {UserData} user
 * @property {number} discount
 * @property {string} payment_mode
 * @property {OrderUser} billing_address
 * @property {OrderPriority} [order_priority]
 * @property {AffiliateBag[]} bags
 * @property {number} order_value
 * @property {number} cod_charges
 * @property {ShipmentData} [shipment]
 * @property {string} [affiliate_order_id]
 * @property {Object} items
 * @property {number} delivery_charges
 */

/**
 * @typedef CreateOrderPayload
 * @property {string} affiliate_id
 * @property {OrderConfig} order_config
 * @property {OrderInfo} order_info
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
 * @typedef HistoryDict
 * @property {number} [bag_id]
 * @property {string} user
 * @property {string} [ticket_url]
 * @property {string} createdat
 * @property {string} [l2_detail]
 * @property {string} message
 * @property {string} [l3_detail]
 * @property {string} type
 * @property {string} [l1_detail]
 * @property {string} [ticket_id]
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
 * @typedef PostHistoryFilters
 * @property {string} [line_number]
 * @property {string} [identifier]
 * @property {string} shipment_id
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
 * @typedef SmsDataPayload
 * @property {number} shipment_id
 * @property {number} amount_paid
 * @property {string} customer_name
 * @property {string} order_id
 * @property {string} payment_mode
 * @property {string} brand_name
 * @property {string} message
 * @property {string} country_code
 * @property {number} phone_number
 */

/**
 * @typedef SendSmsPayload
 * @property {string} slug
 * @property {number} bag_id
 * @property {SmsDataPayload} [data]
 */

/**
 * @typedef OrderDetails
 * @property {string} [fynd_order_id]
 * @property {string} [created_at]
 */

/**
 * @typedef Meta1
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */

/**
 * @typedef ShipmentDetail
 * @property {string} [remarks]
 * @property {string} [shipment_id]
 * @property {Meta1} meta
 * @property {string} [status]
 * @property {number[]} [bag_list]
 * @property {number} id
 */

/**
 * @typedef OrderStatusData
 * @property {OrderDetails} order_details
 * @property {string[]} [errors]
 * @property {ShipmentDetail[]} [shipment_details]
 */

/**
 * @typedef OrderStatusResult
 * @property {OrderStatusData[]} [result]
 * @property {string} success
 */

/**
 * @typedef ManualAssignDPToShipment
 * @property {string[]} [shipment_ids]
 * @property {string} order_type
 * @property {number} dp_id
 * @property {string} qc_required
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */

/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 */

/**
 * @typedef Tax
 * @property {Object} amount
 * @property {string} name
 * @property {number} rate
 * @property {Object[]} [breakup]
 */

/**
 * @typedef Charge
 * @property {Object} amount
 * @property {Tax} [tax]
 * @property {string} name
 * @property {string} [code]
 * @property {string} type
 */

/**
 * @typedef ProcessingDates
 * @property {string} [confirm_by_date]
 * @property {string} [dispatch_after_date]
 * @property {string} [pack_by_date]
 * @property {string} [dispatch_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {Object} [dp_pickup_slot]
 */

/**
 * @typedef LineItem
 * @property {string} seller_identifier
 * @property {number} [quantity]
 * @property {Charge[]} [charges]
 * @property {string} [custom_messasge]
 * @property {Object} [meta]
 * @property {string} [external_line_id]
 */

/**
 * @typedef Shipment
 * @property {number} location_id
 * @property {number} [priority]
 * @property {string} [external_shipment_id]
 * @property {Object} [meta]
 * @property {ProcessingDates} [processing_dates]
 * @property {LineItem[]} line_items
 */

/**
 * @typedef BillingInfo
 * @property {string} [middle_name]
 * @property {string} [external_customer_code]
 * @property {string} primary_mobile_number
 * @property {string} city
 * @property {string} country
 * @property {string} [alternate_mobile_number]
 * @property {string} pincode
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {string} [floor_no]
 * @property {string} [state_code]
 * @property {string} primary_email
 * @property {string} state
 * @property {string} first_name
 * @property {string} [house_no]
 * @property {string} [title]
 * @property {string} [customer_code]
 * @property {string} [alternate_email]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {string} address1
 */

/**
 * @typedef ShippingInfo
 * @property {string} [middle_name]
 * @property {string} [external_customer_code]
 * @property {string} primary_mobile_number
 * @property {string} [shipping_type]
 * @property {Object} [geo_location]
 * @property {string} city
 * @property {string} country
 * @property {string} [alternate_mobile_number]
 * @property {string} pincode
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {string} [landmark]
 * @property {string} [floor_no]
 * @property {string} [state_code]
 * @property {string} primary_email
 * @property {string} state
 * @property {string} first_name
 * @property {string} [house_no]
 * @property {string} [title]
 * @property {string} [customer_code]
 * @property {string} [address_type]
 * @property {string} [alternate_email]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {Object[]} [slot]
 * @property {string} address1
 */

/**
 * @typedef PaymentMethod
 * @property {number} amount
 * @property {Object} [transaction_data]
 * @property {string} collect_by
 * @property {Object} [meta]
 * @property {string} name
 * @property {string} refund_by
 * @property {string} mode
 */

/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */

/**
 * @typedef CreateOrderAPI
 * @property {TaxInfo} [tax_info]
 * @property {Charge[]} [charges]
 * @property {Shipment[]} shipments
 * @property {BillingInfo} billing_info
 * @property {string} [external_creation_date]
 * @property {ShippingInfo} shipping_info
 * @property {Object} [meta]
 * @property {Object} [currency_info]
 * @property {string} [external_order_id]
 * @property {PaymentInfo} payment_info
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {string} [meta]
 * @property {string} [exception]
 * @property {string} message
 * @property {number} status
 * @property {string} [code]
 * @property {Object} [info]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [refund_by]
 * @property {string} [collect_by]
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
 * @property {string} [shipment_assignment]
 * @property {boolean} [location_reassignment]
 * @property {string[]} [lock_states]
 * @property {DpConfiguration} [dp_configuration]
 * @property {Object} [logo_url]
 * @property {CreateChannelPaymentInfo} [payment_info]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConifgErrorResponse
 * @property {string} [error]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [is_inserted]
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_upserted]
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
 * @property {boolean} [success]
 * @property {string[]} [message]
 */

/**
 * @typedef FyndOrderIdList
 * @property {string[]} [fynd_order_id]
 */

/**
 * @typedef OrderStatus
 * @property {FyndOrderIdList[]} [order_details]
 * @property {string} end_date
 * @property {string} start_date
 * @property {number} mobile
 */

/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */

/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [message]
 * @property {Object} [meta]
 */

/**
 * @typedef GetSearchWordsData
 * @property {string} [app_id]
 * @property {Object} [result]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string} [uid]
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
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */

/**
 * @typedef CreateSearchKeyword
 * @property {string} [app_id]
 * @property {SearchKeywordResult} result
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {string} [uid]
 * @property {Object[]} [results]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Media
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef AutocompletePageAction
 * @property {Object} [query]
 * @property {Object} [params]
 * @property {string} [type]
 * @property {string} [url]
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
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {AutocompleteResult[]} [results]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {Object[]} [results]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {string[]} [words]
 */

/**
 * @typedef ProductBundleItem
 * @property {number} product_uid
 * @property {number} min_quantity
 * @property {number} max_quantity
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 */

/**
 * @typedef ProductBundleRequest
 * @property {boolean} [same_store_assignment]
 * @property {string} choice
 * @property {Object} [modified_by]
 * @property {string} name
 * @property {string} [modified_on]
 * @property {ProductBundleItem[]} products
 * @property {boolean} is_active
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {string} [logo]
 * @property {Object} [created_by]
 * @property {string} slug
 * @property {Object} [meta]
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {boolean} [same_store_assignment]
 * @property {string} choice
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} name
 * @property {string} [modified_on]
 * @property {ProductBundleItem[]} products
 * @property {boolean} is_active
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {string} [logo]
 * @property {Object} [created_by]
 * @property {string} slug
 * @property {Object} [meta]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LimitedProductData
 * @property {Object} [price]
 * @property {string} [name]
 * @property {string[]} [images]
 * @property {number} [uid]
 * @property {string} [country_of_origin]
 * @property {Object} [identifier]
 * @property {Object} [attributes]
 * @property {string} [short_description]
 * @property {string} [item_code]
 * @property {string} [slug]
 * @property {number} [quantity]
 * @property {string[]} [sizes]
 */

/**
 * @typedef Price
 * @property {number} [min_effective]
 * @property {string} [currency]
 * @property {number} [max_effective]
 * @property {number} [min_marked]
 * @property {number} [max_marked]
 */

/**
 * @typedef Size
 * @property {boolean} [is_available]
 * @property {number} [quantity]
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef GetProducts
 * @property {LimitedProductData} [product_details]
 * @property {number} [product_uid]
 * @property {Price} [price]
 * @property {boolean} [allow_remove]
 * @property {number} [max_quantity]
 * @property {number} [min_quantity]
 * @property {boolean} [auto_add_to_cart]
 * @property {Size[]} [sizes]
 * @property {boolean} [auto_select]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {string} [logo]
 * @property {boolean} [same_store_assignment]
 * @property {string} [choice]
 * @property {string} [name]
 * @property {GetProducts[]} [products]
 * @property {boolean} [is_active]
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [slug]
 * @property {Object} [meta]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {boolean} [same_store_assignment]
 * @property {string} choice
 * @property {Object} [modified_by]
 * @property {string} name
 * @property {string} [modified_on]
 * @property {ProductBundleItem[]} products
 * @property {boolean} is_active
 * @property {string[]} [page_visibility]
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} slug
 * @property {Object} [meta]
 */

/**
 * @typedef Meta
 * @property {string} [unit]
 * @property {Object} [headers]
 * @property {Object[]} [values]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {string} [description]
 * @property {string} [image]
 * @property {string} title
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} name
 * @property {Guide} [guide]
 * @property {string} [modified_on]
 * @property {string} [tag]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {string} [subtitle]
 * @property {Object} [created_by]
 * @property {boolean} [active]
 * @property {number} [brand_id]
 */

/**
 * @typedef SuccessResponse
 * @property {boolean} [success]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
 */

/**
 * @typedef SizeGuideResponse
 * @property {Object} [modified_by]
 * @property {string} [title]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [modified_on]
 * @property {Object} [guide]
 * @property {string} [tag]
 * @property {string} [subtitle]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {boolean} [active]
 * @property {number} [brand_id]
 */

/**
 * @typedef SEOData
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef MOQData
 * @property {number} [minimum]
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {SEOData} [seo]
 * @property {boolean} [is_gift]
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 * @property {MOQData} [moq]
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
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {ApplicationItemSEO} [seo]
 * @property {boolean} [is_gift]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_cod]
 * @property {MetaFields[]} [_custom_meta]
 * @property {Object} [alt_text]
 * @property {ApplicationItemMOQ} [moq]
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
 * @typedef AttributeDetailsGroup
 * @property {string} [unit]
 * @property {string} name
 * @property {boolean} is_active
 * @property {string} [key]
 * @property {string} [logo]
 * @property {string} [slug]
 * @property {string} display_type
 * @property {number} priority
 */

/**
 * @typedef AppConfigurationDetail
 * @property {string[]} [template_slugs]
 * @property {string} app_id
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {boolean} is_active
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} [logo]
 * @property {string} slug
 * @property {number} priority
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef PageResponseType
 * @property {number} next
 * @property {number} total_count
 * @property {boolean} has_next
 * @property {number} current
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
 * @property {string} app_id
 * @property {string} default_key
 * @property {string} [name]
 * @property {boolean} is_default
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {number} priority
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
 * @property {Object[]} [units]
 * @property {string} [key]
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
 * @typedef ConfigurationBucketPoints
 * @property {number} [end]
 * @property {number} [start]
 * @property {string} [display]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {Object} [map]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {Object[]} [map_values]
 * @property {string} [value]
 * @property {string} [condition]
 * @property {string} [sort]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} type
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {number} priority
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} [name]
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {number} priority
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
 * @typedef ProductSize
 * @property {number} min
 * @property {number} max
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} name
 * @property {ProductSize} size
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {string} display_type
 * @property {number} priority
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {string} [title]
 * @property {ProductSize} [size]
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {string} [subtitle]
 * @property {number} priority
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
 * @property {ConfigurationListing} [listing]
 * @property {string} [type]
 * @property {string} app_id
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {string} [config_id]
 * @property {Object} [created_by]
 * @property {ConfigurationProduct} [product]
 * @property {string} config_type
 */

/**
 * @typedef AppCatalogConfiguration
 * @property {ConfigurationListing} [listing]
 * @property {string} [type]
 * @property {string} app_id
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {string} [config_id]
 * @property {Object} [created_by]
 * @property {ConfigurationProduct} [product]
 * @property {string} config_type
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
 * @property {string} app_id
 * @property {string} [id]
 * @property {string} [config_id]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} config_type
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ProductFiltersValue
 * @property {number} [selected_min]
 * @property {boolean} is_selected
 * @property {string} [currency_symbol]
 * @property {number} [count]
 * @property {string} [currency_code]
 * @property {string} [query_format]
 * @property {string} display
 * @property {number} [min]
 * @property {number} [selected_max]
 * @property {string} [display_format]
 * @property {number} [max]
 * @property {Object} value
 */

/**
 * @typedef ProductFiltersKey
 * @property {string[]} [operators]
 * @property {string} [kind]
 * @property {string} name
 * @property {string} display
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
 * @property {ProductFilters[]} [filters]
 * @property {Object} operators
 * @property {ProductSortOn[]} [sort_on]
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
 * @typedef UserInfo
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef NextSchedule
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef CollectionSchedule
 * @property {string} [end]
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [start]
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} portrait
 * @property {CollectionImage} landscape
 */

/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {Object[]} value
 * @property {string} op
 */

/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 */

/**
 * @typedef CreateCollection
 * @property {string} type
 * @property {string[]} [tags]
 * @property {boolean} [allow_facets]
 * @property {CollectionBadge} [badge]
 * @property {CollectionImage} logo
 * @property {UserInfo} [created_by]
 * @property {boolean} [published]
 * @property {CollectionSchedule} [_schedule]
 * @property {CollectionBanner} banners
 * @property {string} [description]
 * @property {string} [sort_on]
 * @property {string} app_id
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {string} slug
 * @property {boolean} [allow_sort]
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {boolean} [is_visible]
 * @property {UserInfo} [modified_by]
 * @property {SeoDetail} [seo]
 * @property {string} name
 * @property {string[]} [visible_facets_keys]
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
 * @typedef CollectionCreateResponse
 * @property {string} [type]
 * @property {boolean} [allow_facets]
 * @property {Object} [badge]
 * @property {BannerImage} [logo]
 * @property {string[]} [tag]
 * @property {Object} [_schedule]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {string} [app_id]
 * @property {Object} [cron]
 * @property {string} [sort_on]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [is_active]
 * @property {string} [slug]
 * @property {boolean} [allow_sort]
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {string} [name]
 * @property {string[]} [visible_facets_keys]
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
 * @typedef Media1
 * @property {string} [type]
 * @property {Object} [meta]
 * @property {string} url
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
 * @property {string} [type]
 * @property {boolean} [allow_facets]
 * @property {Object} [badge]
 * @property {Media1} [logo]
 * @property {string[]} [tag]
 * @property {Object} [_schedule]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {string} [app_id]
 * @property {Object} [cron]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [is_active]
 * @property {string} [uid]
 * @property {string} [slug]
 * @property {boolean} [allow_sort]
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {Action} [action]
 * @property {string} [name]
 * @property {string[]} [visible_facets_keys]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {string} [type]
 * @property {boolean} [allow_facets]
 * @property {Object} [badge]
 * @property {Media1} [logo]
 * @property {string[]} [tag]
 * @property {Object} [_schedule]
 * @property {ImageUrls} [banners]
 * @property {string} [description]
 * @property {string} [app_id]
 * @property {Object} [cron]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [is_active]
 * @property {string} [uid]
 * @property {string} [slug]
 * @property {boolean} [allow_sort]
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {string} [name]
 * @property {string[]} [visible_facets_keys]
 */

/**
 * @typedef UpdateCollection
 * @property {string} [type]
 * @property {string[]} [tags]
 * @property {boolean} [allow_facets]
 * @property {CollectionBadge} [badge]
 * @property {CollectionImage} [logo]
 * @property {boolean} [published]
 * @property {CollectionSchedule} [_schedule]
 * @property {CollectionBanner} [banners]
 * @property {string} [description]
 * @property {string} [sort_on]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {string} [slug]
 * @property {boolean} [allow_sort]
 * @property {Object} [meta]
 * @property {number} [priority]
 * @property {boolean} [is_visible]
 * @property {UserInfo} [modified_by]
 * @property {SeoDetail} [seo]
 * @property {string} [name]
 * @property {string[]} [visible_facets_keys]
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
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */

/**
 * @typedef ProductBrand
 * @property {Media1} [logo]
 * @property {Action} [action]
 * @property {string} [name]
 * @property {number} [uid]
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
 * @typedef Price1
 * @property {number} [min]
 * @property {string} [currency_code]
 * @property {number} [max]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [marked]
 * @property {Price1} [effective]
 */

/**
 * @typedef ProductListingDetail
 * @property {string} [product_online_date]
 * @property {string} [type]
 * @property {ProductBrand} [brand]
 * @property {Object} [promo_meta]
 * @property {number} [rating_count]
 * @property {Object} [attributes]
 * @property {number} [rating]
 * @property {string[]} [similars]
 * @property {string} [discount]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {Media1[]} [medias]
 * @property {string} [image_nature]
 * @property {string} [short_description]
 * @property {boolean} [has_variant]
 * @property {string} [description]
 * @property {string[]} [tryouts]
 * @property {string} [item_type]
 * @property {ProductListingPrice} [price]
 * @property {number} [uid]
 * @property {string} slug
 * @property {Object} [teaser_tag]
 * @property {string} [color]
 * @property {string} [name]
 * @property {string[]} [highlights]
 * @property {string} [item_code]
 * @property {boolean} [sellable]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductListingDetail[]} [items]
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} [page]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [out_of_stock_count]
 * @property {number} [sellable_count]
 * @property {number} [count]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [available_articles]
 * @property {string} [name]
 * @property {number} [available_sizes]
 * @property {number} [total_articles]
 * @property {number} [article_freshness]
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
 * @property {number[]} [store_ids]
 * @property {string} [platform]
 * @property {boolean} [enabled]
 * @property {string} opt_level
 * @property {number} [company_id]
 * @property {number[]} [brand_ids]
 */

/**
 * @typedef CompanyOptIn
 * @property {number[]} store_ids
 * @property {Object} [modified_by]
 * @property {string} platform
 * @property {number} modified_on
 * @property {boolean} enabled
 * @property {string} opt_level
 * @property {number} created_on
 * @property {number} company_id
 * @property {number[]} brand_ids
 * @property {Object} [created_by]
 */

/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [business_type]
 * @property {number} [uid]
 * @property {string} [company_type]
 * @property {string} [name]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {number} [company_id]
 * @property {number} [total_article]
 * @property {string} [brand_name]
 * @property {number} [brand_id]
 */

/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {string} [company]
 * @property {number} [store]
 * @property {number} [brand]
 */

/**
 * @typedef StoreDetail
 * @property {Object} [manager]
 * @property {Object} [address]
 * @property {string} [name]
 * @property {string} [modified_on]
 * @property {string} [display_name]
 * @property {Object[]} [additional_contacts]
 * @property {number} [uid]
 * @property {string} [store_type]
 * @property {Object} [timing]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {string} [store_code]
 * @property {Object[]} [documents]
 */

/**
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeSchemaRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef AttributeMaster
 * @property {string} [format]
 * @property {string} type
 * @property {string[]} [allowed_values]
 * @property {boolean} [multi]
 * @property {boolean} [mandatory]
 * @property {AttributeSchemaRange} [range]
 */

/**
 * @typedef AttributeMasterFilter
 * @property {string[]} [depends_on]
 * @property {number} [priority]
 * @property {boolean} indexing
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
 * @property {string} [description]
 * @property {AttributeMaster} [schema]
 * @property {AttributeMasterFilter} [filters]
 * @property {string} [id]
 * @property {string} [name]
 * @property {boolean} [is_nested]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterDetails} [details]
 * @property {string} [logo]
 * @property {string[]} [departments]
 * @property {string} [slug]
 * @property {AttributeMasterMeta} [meta]
 */

/**
 * @typedef CategoriesResponse
 * @property {string} [slug_key]
 * @property {number} [uid]
 * @property {string} [template_slug]
 * @property {string} [name]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {CategoriesResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PTErrorResponse
 * @property {Object} [errors]
 * @property {string} [code]
 * @property {number} [status]
 * @property {string} [message]
 * @property {Object} [meta]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string} name
 * @property {Object} [platforms]
 * @property {string[]} [synonyms]
 * @property {string[]} [tags]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {number} priority_order
 * @property {Object} [_custom_json]
 * @property {string} [_cls]
 * @property {string} logo
 * @property {string} [slug]
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
 * @typedef UserSerializer
 * @property {string} [contact]
 * @property {string} [_id]
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [uid]
 */

/**
 * @typedef GetDepartment
 * @property {number} [page_no]
 * @property {number} [page_size]
 * @property {string} [search]
 * @property {UserSerializer} [modified_by]
 * @property {string} [item_type]
 * @property {string} [name]
 * @property {string[]} [synonyms]
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {number} [priority_order]
 * @property {string} [created_on]
 * @property {string} [logo]
 * @property {UserSerializer} [created_by]
 * @property {string} [slug]
 */

/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {Object} [errors]
 * @property {string} [code]
 * @property {number} [status]
 * @property {string} [message]
 * @property {Object} [meta]
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
 * @property {UserDetail} [modified_by]
 * @property {Object} [_id]
 * @property {Object} name
 * @property {Object[]} [synonyms]
 * @property {string} modified_on
 * @property {string} [verified_on]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {number} priority_order
 * @property {UserDetail} [verified_by]
 * @property {string} created_on
 * @property {Object} [_custom_json]
 * @property {Object} [_cls]
 * @property {string} logo
 * @property {UserDetail} [created_by]
 * @property {Object} [slug]
 */

/**
 * @typedef ProductTemplate
 * @property {string} [description]
 * @property {Object} [modified_by]
 * @property {string} [name]
 * @property {string[]} [categories]
 * @property {boolean} [is_archived]
 * @property {boolean} is_physical
 * @property {string} [modified_on]
 * @property {string} [tag]
 * @property {boolean} [is_active]
 * @property {boolean} is_expirable
 * @property {string} [created_on]
 * @property {string[]} [attributes]
 * @property {string} [logo]
 * @property {Object} [created_by]
 * @property {string[]} [departments]
 * @property {string} slug
 */

/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Properties
 * @property {Object} [custom_order]
 * @property {Object} [product_publish]
 * @property {Object} [tags]
 * @property {Object} [is_dependent]
 * @property {Object} [no_of_boxes]
 * @property {Object} [short_description]
 * @property {Object} [description]
 * @property {Object} [item_type]
 * @property {Object} [category_slug]
 * @property {Object} [multi_size]
 * @property {Object} [currency]
 * @property {Object} [is_active]
 * @property {Object} [trader]
 * @property {Object} [slug]
 * @property {Object} [command]
 * @property {Object} [sizes]
 * @property {Object} [product_group_tag]
 * @property {Object} [size_guide]
 * @property {Object} [trader_type]
 * @property {Object} [teaser_tag]
 * @property {Object} [name]
 * @property {Object} [country_of_origin]
 * @property {Object} [highlights]
 * @property {Object} [media]
 * @property {Object} [hsn_code]
 * @property {Object} [item_code]
 * @property {Object} [variants]
 * @property {Object} [return_config]
 * @property {Object} [brand_uid]
 */

/**
 * @typedef GlobalValidation
 * @property {string} [description]
 * @property {Object} [definitions]
 * @property {string} [type]
 * @property {string[]} [required]
 * @property {string} [title]
 * @property {Properties} [properties]
 */

/**
 * @typedef TemplateValidationData
 * @property {GlobalValidation} [global_validation]
 * @property {Object} [template_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string[]} [categories]
 * @property {boolean} [is_archived]
 * @property {boolean} is_physical
 * @property {string} [tag]
 * @property {boolean} [is_active]
 * @property {boolean} is_expirable
 * @property {string[]} [attributes]
 * @property {string} [logo]
 * @property {string[]} [departments]
 * @property {string} slug
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
 * @property {string[]} [country_of_origin]
 * @property {string[]} [hsn_code]
 */

/**
 * @typedef HSNCodesResponse
 * @property {HSNData} [data]
 * @property {string} [message]
 */

/**
 * @typedef UserInfo1
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductTemplateExportResponse
 * @property {Object} [filters]
 * @property {string} [type]
 * @property {string} task_id
 * @property {string} [url]
 * @property {string} [status]
 * @property {string} [modified_on]
 * @property {number} seller_id
 * @property {UserInfo1} [created_by]
 * @property {string} [completed_on]
 * @property {string[]} [notification_emails]
 */

/**
 * @typedef ProductDownloadsResponse
 * @property {ProductTemplateExportResponse[]} [items]
 */

/**
 * @typedef ProductTemplateExportFilterRequest
 * @property {string[]} [brands]
 * @property {string} [from_date]
 * @property {string} [to_date]
 * @property {string[]} catalogue_types
 * @property {string[]} templates
 */

/**
 * @typedef ProductTemplateDownloadsExport
 * @property {ProductTemplateExportFilterRequest} [filters]
 * @property {string} [type]
 * @property {string[]} [notification_emails]
 */

/**
 * @typedef ProductPartialExportRequest
 * @property {Object} [status]
 * @property {string[]} [notification_emails]
 */

/**
 * @typedef ProductConfigurationDownloads
 * @property {boolean} [multivalue]
 * @property {Object[]} [data]
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
 * @typedef Hierarchy
 * @property {number} l1
 * @property {number} department
 * @property {number} l2
 */

/**
 * @typedef Media2
 * @property {string} logo
 * @property {string} portrait
 * @property {string} landscape
 */

/**
 * @typedef CategoryRequestBody
 * @property {CategoryMapping} [marketplaces]
 * @property {string[]} [tryouts]
 * @property {string} name
 * @property {Hierarchy[]} [hierarchy]
 * @property {boolean} is_active
 * @property {Media2} [media]
 * @property {string[]} [synonyms]
 * @property {number[]} departments
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {number} level
 */

/**
 * @typedef CategoryCreateResponse
 * @property {number} [uid]
 * @property {string} [message]
 */

/**
 * @typedef Category
 * @property {CategoryMapping} [marketplaces]
 * @property {string[]} [tryouts]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} name
 * @property {Hierarchy[]} [hierarchy]
 * @property {string} [modified_on]
 * @property {boolean} is_active
 * @property {number} [uid]
 * @property {Media2} [media]
 * @property {string} [created_on]
 * @property {string[]} [synonyms]
 * @property {Object} [created_by]
 * @property {number[]} departments
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {number} level
 */

/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
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
 * @typedef CustomOrder
 * @property {number} [manufacturing_time]
 * @property {boolean} [is_custom_order]
 * @property {string} [manufacturing_time_unit]
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
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code_id]
 * @property {string} [hsn_code]
 */

/**
 * @typedef Trader
 * @property {string[]} [address]
 * @property {string} [type]
 * @property {string} name
 */

/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
 */

/**
 * @typedef ReturnConfig
 * @property {string} unit
 * @property {boolean} returnable
 * @property {number} time
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {Object} [change_request_id]
 * @property {CustomOrder} [custom_order]
 * @property {boolean} [is_set]
 * @property {ProductPublish} [product_publish]
 * @property {string[]} [tags]
 * @property {Object} [attributes]
 * @property {boolean} [is_dependent]
 * @property {string} [bulk_job_id]
 * @property {NetQuantity} [net_quantity]
 * @property {number} [no_of_boxes]
 * @property {string} [requester]
 * @property {TaxIdentifier} tax_identifier
 * @property {number[]} departments
 * @property {string} [short_description]
 * @property {string} [description]
 * @property {Object} [variant_group]
 * @property {string} item_type
 * @property {string} template_tag
 * @property {string} category_slug
 * @property {boolean} [multi_size]
 * @property {string} currency
 * @property {boolean} [is_active]
 * @property {Trader[]} trader
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {number} company_id
 * @property {string} slug
 * @property {Object[]} sizes
 * @property {string[]} [product_group_tag]
 * @property {boolean} [is_image_less_product]
 * @property {string} [size_guide]
 * @property {TeaserTag} [teaser_tag]
 * @property {string} [action]
 * @property {string} name
 * @property {string[]} [highlights]
 * @property {string} country_of_origin
 * @property {Media1[]} [media]
 * @property {Object} [variant_media]
 * @property {string} item_code
 * @property {Object} [variants]
 * @property {ReturnConfig} return_config
 * @property {number} brand_uid
 */

/**
 * @typedef Logo
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [secure_url]
 */

/**
 * @typedef Brand
 * @property {Logo} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef ProductPublish1
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef NetQuantityResponse
 * @property {string} [unit]
 * @property {number} [value]
 */

/**
 * @typedef Image
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [secure_url]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ReturnConfigResponse
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef ProductSchemaV2
 * @property {Object} [custom_order]
 * @property {Brand} [brand]
 * @property {boolean} [is_set]
 * @property {string} [id]
 * @property {Object} [variants]
 * @property {ProductPublish1} [product_publish]
 * @property {string[]} [tags]
 * @property {boolean} [is_expirable]
 * @property {Object} [attributes]
 * @property {Object} [created_by]
 * @property {boolean} [is_dependent]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {Object[]} [all_sizes]
 * @property {number} [no_of_boxes]
 * @property {Object} [tax_identifier]
 * @property {string} [image_nature]
 * @property {string[]} [l3_mapping]
 * @property {string} [modified_on]
 * @property {string} [short_description]
 * @property {string} [stage]
 * @property {number} [category_uid]
 * @property {string} [description]
 * @property {Object} [variant_group]
 * @property {number[]} [all_company_ids]
 * @property {string} [item_type]
 * @property {string} [template_tag]
 * @property {string} [category_slug]
 * @property {boolean} [is_physical]
 * @property {string[]} [all_identifiers]
 * @property {boolean} [multi_size]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {Trader[]} [trader]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {string} [slug]
 * @property {Object[]} [sizes]
 * @property {string} [primary_color]
 * @property {string[]} [product_group_tag]
 * @property {boolean} [is_image_less_product]
 * @property {string} [size_guide]
 * @property {Object} [teaser_tag]
 * @property {Object} [modified_by]
 * @property {string} [pending]
 * @property {string} [color]
 * @property {string} [name]
 * @property {Image[]} [images]
 * @property {Object} [moq]
 * @property {string} [verified_on]
 * @property {Object} [category]
 * @property {string} [country_of_origin]
 * @property {string[]} [highlights]
 * @property {Media1[]} [media]
 * @property {Object} [variant_media]
 * @property {string} [hsn_code]
 * @property {VerifiedBy} [verified_by]
 * @property {string} [item_code]
 * @property {number[]} [departments]
 * @property {ReturnConfigResponse} [return_config]
 * @property {number} [brand_uid]
 */

/**
 * @typedef ProductListingResponseV2
 * @property {ProductSchemaV2[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductVariants
 * @property {number} [category_uid]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Media1[]} [media]
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {ProductVariants[]} [variants]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {boolean} [is_nested]
 * @property {string[]} [tags]
 * @property {string} [raw_key]
 * @property {string} [logo]
 * @property {Object} [created_by]
 * @property {string} [suggestion]
 * @property {AttributeMaster} schema
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [modified_on]
 * @property {string} [description]
 * @property {string} [unit]
 * @property {string} [created_on]
 * @property {string} slug
 * @property {AttributeMasterFilter} filters
 * @property {Object} [modified_by]
 * @property {string} [name]
 * @property {AttributeMasterDetails} details
 * @property {boolean} [variant]
 * @property {Object} [synonyms]
 * @property {string[]} departments
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
 * @property {number} item_length
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {Object} size
 * @property {Object} item_weight_unit_of_measure
 * @property {number} item_width
 * @property {number} item_height
 * @property {string} item_dimensions_unit_of_measure
 * @property {number} item_weight
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
 * @property {number} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef Product
 * @property {Object} [custom_order]
 * @property {Brand} [brand]
 * @property {boolean} [is_set]
 * @property {string} [id]
 * @property {Object} [variants]
 * @property {ProductPublished} [product_publish]
 * @property {string[]} [tags]
 * @property {boolean} [is_expirable]
 * @property {Object} [attributes]
 * @property {Object} [created_by]
 * @property {boolean} [is_dependent]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {Object[]} [all_sizes]
 * @property {number} [no_of_boxes]
 * @property {Object} [tax_identifier]
 * @property {string} [image_nature]
 * @property {string[]} [l3_mapping]
 * @property {string} [modified_on]
 * @property {string} [short_description]
 * @property {string} [stage]
 * @property {number} [category_uid]
 * @property {string} [description]
 * @property {Object} [variant_group]
 * @property {number[]} [all_company_ids]
 * @property {string} [item_type]
 * @property {string} [template_tag]
 * @property {string} [category_slug]
 * @property {boolean} [is_physical]
 * @property {string[]} [all_identifiers]
 * @property {boolean} [multi_size]
 * @property {string} [currency]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {Trader[]} [trader]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {string} [slug]
 * @property {Object[]} [sizes]
 * @property {string} [primary_color]
 * @property {string[]} [product_group_tag]
 * @property {boolean} [is_image_less_product]
 * @property {string} [size_guide]
 * @property {Object} [teaser_tag]
 * @property {Object} [modified_by]
 * @property {string} [pending]
 * @property {string} [color]
 * @property {string} [name]
 * @property {Image[]} [images]
 * @property {Object} [moq]
 * @property {string} [verified_on]
 * @property {Object} [category]
 * @property {string} [country_of_origin]
 * @property {string[]} [highlights]
 * @property {Media1[]} [media]
 * @property {Object} [variant_media]
 * @property {string} [hsn_code]
 * @property {VerifiedBy} [verified_by]
 * @property {string} [item_code]
 * @property {number[]} [departments]
 * @property {ReturnConfigResponse} [return_config]
 * @property {number} [brand_uid]
 */

/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkJob
 * @property {string} [tracking_url]
 * @property {number} [failed]
 * @property {number} [succeed]
 * @property {string} [custom_template_tag]
 * @property {UserInfo1} [modified_by]
 * @property {Object[]} [cancelled_records]
 * @property {string} [template_tag]
 * @property {number} [cancelled]
 * @property {string} [modified_on]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {string} [stage]
 * @property {string} created_on
 * @property {string} [file_path]
 * @property {number} company_id
 * @property {UserInfo1} [created_by]
 * @property {Object[]} [failed_records]
 */

/**
 * @typedef BulkResponse
 * @property {UserInfo1} [modified_by]
 * @property {string} batch_id
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {string} created_on
 * @property {UserInfo1} [created_by]
 */

/**
 * @typedef UserDetail1
 * @property {string} [user_id]
 * @property {string} [full_name]
 * @property {string} [username]
 */

/**
 * @typedef ProductBulkRequest
 * @property {number} [failed]
 * @property {number} [succeed]
 * @property {string} [template_tag]
 * @property {string[]} [cancelled_records]
 * @property {UserDetail1} [modified_by]
 * @property {number} [cancelled]
 * @property {ProductTemplate} [template]
 * @property {string} [modified_on]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {string} [file_path]
 * @property {string} [stage]
 * @property {UserDetail1} [created_by]
 * @property {string[]} [failed_records]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkProductRequest
 * @property {number} company_id
 * @property {Object[]} data
 * @property {string} batch_id
 * @property {string} template_tag
 */

/**
 * @typedef ProductTagsViewResponse
 * @property {string[]} [items]
 */

/**
 * @typedef ProductBulkAssets
 * @property {number} [company_id]
 * @property {Object} user
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
 * @property {string} [tracking_url]
 * @property {number} [failed]
 * @property {number} [succeed]
 * @property {UserCommon} [modified_by]
 * @property {string[]} [cancelled_records]
 * @property {string} [id]
 * @property {number} [cancelled]
 * @property {string} [modified_on]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {number} [retry]
 * @property {string} [file_path]
 * @property {string} [stage]
 * @property {UserCommon} [created_by]
 * @property {string[]} [failed_records]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
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
 * @typedef GTIN
 * @property {string} gtin_type
 * @property {boolean} [primary]
 * @property {Object} gtin_value
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
 * @property {number} [item_length]
 * @property {boolean} [is_set]
 * @property {number} [price]
 * @property {GTIN[]} identifiers
 * @property {Object} size
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [price_transfer]
 * @property {number} [item_width]
 * @property {InventorySet} [set]
 * @property {number} price_effective
 * @property {number} [item_height]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [expiration_date]
 * @property {string} currency
 * @property {string} store_code
 * @property {number} [item_weight]
 * @property {number} quantity
 */

/**
 * @typedef ItemQuery
 * @property {string} [item_code]
 * @property {number} [uid]
 * @property {number} [brand_uid]
 */

/**
 * @typedef InventoryRequest
 * @property {number} company_id
 * @property {InvSize[]} sizes
 * @property {ItemQuery} item
 */

/**
 * @typedef InventoryResponse
 * @property {number} [price]
 * @property {Object} [store]
 * @property {Object} [identifiers]
 * @property {string} [size]
 * @property {number} [item_id]
 * @property {number} [sellable_quantity]
 * @property {string} [currency]
 * @property {number} [price_transfer]
 * @property {string} [seller_identifier]
 * @property {number} [price_effective]
 * @property {string} [uid]
 * @property {string} [inventory_updated_on]
 * @property {number} [quantity]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
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
 * @typedef DimensionResponse
 * @property {number} width
 * @property {string} unit
 * @property {boolean} is_default
 * @property {number} height
 * @property {number} length
 */

/**
 * @typedef StoreMeta
 * @property {number} id
 */

/**
 * @typedef PriceMeta
 * @property {number} transfer
 * @property {string} currency
 * @property {Object} [tp_notes]
 * @property {number} marked
 * @property {string} [updated_at]
 * @property {number} effective
 */

/**
 * @typedef ManufacturerResponse
 * @property {string} address
 * @property {string} name
 * @property {boolean} is_default
 */

/**
 * @typedef QuantityBase
 * @property {string} [updated_at]
 * @property {number} [count]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [damaged]
 */

/**
 * @typedef Trader1
 * @property {string[]} address
 * @property {string} type
 * @property {string} name
 */

/**
 * @typedef ReturnConfig1
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef InventorySellerResponse
 * @property {BrandMeta} brand
 * @property {boolean} [is_set]
 * @property {string[]} [tags]
 * @property {UserSerializer} [created_by]
 * @property {Object} [fynd_meta]
 * @property {boolean} fragile
 * @property {string} [trace_id]
 * @property {Object} [tax_identifier]
 * @property {WeightResponse} weight
 * @property {number} item_id
 * @property {InventorySet} [set]
 * @property {CompanyMeta} company
 * @property {DimensionResponse} dimension
 * @property {Object} identifier
 * @property {string} [stage]
 * @property {StoreMeta} store
 * @property {string} fynd_article_code
 * @property {Object} [raw_meta]
 * @property {PriceMeta} price
 * @property {ManufacturerResponse} manufacturer
 * @property {Quantities} [quantities]
 * @property {string} seller_identifier
 * @property {string} uid
 * @property {string} [added_on_store]
 * @property {boolean} [is_active]
 * @property {Trader1[]} [trader]
 * @property {Object} [_custom_json]
 * @property {string} [expiration_date]
 * @property {Object} [meta]
 * @property {string} fynd_item_code
 * @property {number} total_quantity
 * @property {UserSerializer} [modified_by]
 * @property {string} size
 * @property {string} country_of_origin
 * @property {boolean} [track_inventory]
 * @property {ReturnConfig1} [return_config]
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BrandMeta1
 * @property {number} [id]
 * @property {string} [name]
 */

/**
 * @typedef DateMeta
 * @property {string} [inventory_updated_on]
 * @property {string} [added_on_store]
 * @property {string} [created_on]
 * @property {string} [modified_on]
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
 * @typedef DimensionResponse1
 * @property {string} [unit]
 * @property {number} [width]
 * @property {number} [height]
 * @property {number} [length]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {string} [name]
 * @property {string} [store_type]
 * @property {string} [store_code]
 * @property {number} [uid]
 */

/**
 * @typedef PriceArticle
 * @property {number} [transfer]
 * @property {string} [currency]
 * @property {Object} [tp_notes]
 * @property {number} [marked]
 * @property {number} [effective]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {string} [address]
 * @property {string} [name]
 * @property {boolean} [is_default]
 */

/**
 * @typedef Quantity
 * @property {number} [count]
 */

/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [order_committed]
 * @property {Quantity} [sellable]
 * @property {Quantity} [not_available]
 * @property {Quantity} [damaged]
 */

/**
 * @typedef Trader2
 * @property {string[]} [address]
 * @property {string} [type]
 * @property {string} [name]
 */

/**
 * @typedef ReturnConfig2
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef GetInventories
 * @property {BrandMeta1} [brand]
 * @property {boolean} [is_set]
 * @property {string} [id]
 * @property {DateMeta} [date_meta]
 * @property {string[]} [tags]
 * @property {UserSerializer} [created_by]
 * @property {string} [trace_id]
 * @property {Object} [tax_identifier]
 * @property {WeightResponse1} [weight]
 * @property {number} [item_id]
 * @property {CompanyMeta1} [company]
 * @property {DimensionResponse1} [dimension]
 * @property {Object} [identifier]
 * @property {string} [stage]
 * @property {ArticleStoreResponse} [store]
 * @property {PriceArticle} [price]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {QuantitiesArticle} [quantities]
 * @property {string} [seller_identifier]
 * @property {Trader2[]} [trader]
 * @property {string} [uid]
 * @property {string} [expiration_date]
 * @property {string} [inventory_updated_on]
 * @property {number} [total_quantity]
 * @property {UserSerializer} [modified_by]
 * @property {Object} [platforms]
 * @property {string} [size]
 * @property {string} [country_of_origin]
 * @property {boolean} [track_inventory]
 * @property {ReturnConfig2} [return_config]
 */

/**
 * @typedef GetInventoriesResponse
 * @property {GetInventories[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {number} [failed]
 * @property {number} [succeed]
 * @property {Object} [modified_by]
 * @property {string[]} [cancelled_records]
 * @property {string} [id]
 * @property {number} [cancelled]
 * @property {string} [modified_on]
 * @property {number} [total]
 * @property {boolean} [is_active]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {string} [file_path]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string[]} [failed_records]
 */

/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef InventoryJobPayload
 * @property {number} [price_marked]
 * @property {number} [total_quantity]
 * @property {number} [price]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} [currency]
 * @property {string[]} [tags]
 * @property {string} seller_identifier
 * @property {number} [price_effective]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [expiration_date]
 * @property {string} store_code
 * @property {number} [quantity]
 * @property {string} [trace_id]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {number} company_id
 * @property {Object} [user]
 * @property {InventoryJobPayload[]} sizes
 * @property {string} batch_id
 */

/**
 * @typedef InventoryExportRequest
 * @property {string} [type]
 * @property {number[]} [store]
 * @property {number[]} [brand]
 */

/**
 * @typedef InventoryExportResponse
 * @property {Object} [filters]
 * @property {string} [type]
 * @property {string} task_id
 * @property {string} [status]
 * @property {string} [modified_on]
 * @property {string} [created_on]
 * @property {number} seller_id
 * @property {string} [created_by]
 * @property {string[]} [notification_emails]
 */

/**
 * @typedef InventoryExportQuantityFilter
 * @property {number} [min]
 * @property {number} [max]
 * @property {string} operators
 */

/**
 * @typedef InventoryExportAdvanceOption
 * @property {string} [from_date]
 * @property {number[]} [store_ids]
 * @property {string} [to_date]
 * @property {number[]} [brand_ids]
 * @property {InventoryExportQuantityFilter} [quantity]
 */

/**
 * @typedef InventoryExportJob
 * @property {InventoryExportAdvanceOption} [filters]
 * @property {string} type
 * @property {string} task_id
 * @property {string} [url]
 * @property {string} [status]
 * @property {number} seller_id
 * @property {string} [completed_on]
 * @property {string[]} [notification_emails]
 */

/**
 * @typedef InventoryExportFilter
 * @property {string} [from_date]
 * @property {number[]} store_ids
 * @property {string} [to_date]
 * @property {number[]} [brand_ids]
 * @property {InventoryExportQuantityFilter} [quantity]
 */

/**
 * @typedef InventoryCreateRequest
 * @property {InventoryExportFilter} filters
 * @property {string} [type]
 * @property {string[]} [notification_emails]
 * @property {string[]} [data]
 */

/**
 * @typedef InventoryJobFilters
 * @property {string[]} [brands]
 * @property {string} [from_date]
 * @property {string[]} [stores]
 * @property {string} [to_date]
 * @property {InventoryExportQuantityFilter} [quantity]
 */

/**
 * @typedef InventoryJobDetailResponse
 * @property {InventoryJobFilters} filters
 * @property {string} [type]
 * @property {string} task_id
 * @property {string} url
 * @property {string} id
 * @property {Object} [status]
 * @property {string} [modified_on]
 * @property {UserDetail} [cancelled_by]
 * @property {string} [created_on]
 * @property {number} seller_id
 * @property {UserDetail} [created_by]
 * @property {string} [cancelled_on]
 * @property {string} [completed_on]
 * @property {string[]} [notification_emails]
 */

/**
 * @typedef InventoryExportJobListResponse
 * @property {InventoryJobDetailResponse} items
 */

/**
 * @typedef InventoryPartialExportRequest
 * @property {Object} [status]
 * @property {string[]} [notification_emails]
 */

/**
 * @typedef InventoryExportCreateFilters
 * @property {string} [from_date]
 * @property {number[]} [store_ids]
 * @property {string} [to_date]
 * @property {number[]} [brand_ids]
 * @property {InventoryExportQuantityFilter} [quantity]
 */

/**
 * @typedef InventoryExportCreateResponse
 * @property {InventoryExportCreateFilters} filters
 * @property {string} [type]
 * @property {string} task_id
 * @property {string} url
 * @property {string} id
 * @property {Object} [status]
 * @property {string} [modified_on]
 * @property {UserDetail} [cancelled_by]
 * @property {string} [created_on]
 * @property {number} seller_id
 * @property {UserDetail} [created_by]
 * @property {string} [cancelled_on]
 * @property {string} [completed_on]
 * @property {string[]} [notification_emails]
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
 * @property {string[]} [tags]
 * @property {string} seller_identifier
 * @property {number} [price_effective]
 * @property {string} [expiration_date]
 * @property {number} store_id
 * @property {string} [trace_id]
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {number} company_id
 * @property {Object} [meta]
 * @property {InventoryPayload[]} [payload]
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
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message
 */

/**
 * @typedef HsnCodesObject
 * @property {number} [threshold2]
 * @property {string} [id]
 * @property {number} [tax2]
 * @property {string} [hs2_code]
 * @property {string} [modified_on]
 * @property {number} [threshold1]
 * @property {number} [tax1]
 * @property {boolean} [tax_on_esp]
 * @property {string} [hsn_code]
 * @property {number} [company_id]
 * @property {boolean} [tax_on_mrp]
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */

/**
 * @typedef HsnUpsert
 * @property {number} [threshold2]
 * @property {number} [tax2]
 * @property {string} hs2_code
 * @property {number} threshold1
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {number} tax1
 * @property {boolean} [tax_on_esp]
 * @property {string} hsn_code
 * @property {number} company_id
 * @property {boolean} tax_on_mrp
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
 * @property {number} [cess]
 * @property {string} effective_date
 * @property {number} threshold
 */

/**
 * @typedef HSNDataInsertV2
 * @property {string} description
 * @property {string} type
 * @property {Object} [modified_by]
 * @property {TaxSlab[]} taxes
 * @property {string} [hsn_code_id]
 * @property {string} [modified_on]
 * @property {string} reporting_hsn
 * @property {string} [created_on]
 * @property {string} hsn_code
 * @property {Object} [created_by]
 * @property {string} country_code
 */

/**
 * @typedef PageResponse
 * @property {boolean} [has_next]
 * @property {number} [size]
 * @property {string} [current]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */

/**
 * @typedef BrandItem
 * @property {Action} [action]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {Media} [logo]
 * @property {string[]} [departments]
 * @property {ImageUrls} [banners]
 * @property {string} [discount]
 */

/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */

/**
 * @typedef Department
 * @property {string} [name]
 * @property {number} [uid]
 * @property {number} [priority_order]
 * @property {Media} [logo]
 * @property {string} [slug]
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
 * @property {Action} [action]
 * @property {string} [name]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
 * @property {Object[]} [childs]
 */

/**
 * @typedef SecondLevelChild
 * @property {Action} [action]
 * @property {string} [name]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
 * @property {ThirdLevelChild[]} [childs]
 */

/**
 * @typedef Child
 * @property {Action} [action]
 * @property {string} [name]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
 * @property {SecondLevelChild[]} [childs]
 */

/**
 * @typedef CategoryItems
 * @property {Action} [action]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {ImageUrls} [banners]
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
 * @property {ProductFilters[]} [filters]
 * @property {Object} [operators]
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductListingDetail[]} [items]
 * @property {Page} page
 */

/**
 * @typedef ProductDetail
 * @property {string} [product_online_date]
 * @property {string} [type]
 * @property {ProductBrand} [brand]
 * @property {Object} [promo_meta]
 * @property {number} [rating_count]
 * @property {Object} [attributes]
 * @property {number} [rating]
 * @property {string[]} [similars]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {Media1[]} [medias]
 * @property {string} [image_nature]
 * @property {string} [short_description]
 * @property {boolean} [has_variant]
 * @property {string} [description]
 * @property {string[]} [tryouts]
 * @property {string} [item_type]
 * @property {number} [uid]
 * @property {string} slug
 * @property {Object} [teaser_tag]
 * @property {string} [color]
 * @property {string} [name]
 * @property {string[]} [highlights]
 * @property {string} [item_code]
 */

/**
 * @typedef InventoryPage
 * @property {string} type
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {string} [next_id]
 * @property {number} item_total
 */

/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */

/**
 * @typedef ArticleQuery
 * @property {number[]} [ignored_stores]
 * @property {string} size
 * @property {number} item_id
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef AssignStoreArticle
 * @property {string} [group_id]
 * @property {ArticleQuery} [query]
 * @property {ArticleAssignment} [article_assignment]
 * @property {number} [quantity]
 * @property {Object} [meta]
 */

/**
 * @typedef AssignStore
 * @property {AssignStoreArticle[]} articles
 * @property {number[]} [store_ids]
 * @property {string} app_id
 * @property {string} [channel_type]
 * @property {string} [channel_identifier]
 * @property {number} [company_id]
 * @property {string} pincode
 */

/**
 * @typedef ArticleAssignment1
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef StoreAssignResponse
 * @property {string} [group_id]
 * @property {number} [price_marked]
 * @property {number} [store_pincode]
 * @property {boolean} status
 * @property {string} [_id]
 * @property {string} size
 * @property {number} item_id
 * @property {string} [uid]
 * @property {number} [price_effective]
 * @property {number} [store_id]
 * @property {number} [index]
 * @property {number} [company_id]
 * @property {ArticleAssignment1} article_assignment
 * @property {string} [s_city]
 * @property {number} quantity
 * @property {Object} [meta]
 * @property {Object[]} [strategy_wise_listing]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [address1]
 * @property {string} [city]
 * @property {string} [state]
 * @property {number} [pincode]
 * @property {number} [longitude]
 * @property {string} [country]
 * @property {number} [latitude]
 * @property {string} [landmark]
 * @property {string} [address2]
 * @property {string} [address_type]
 * @property {string} [country_code]
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
 * @typedef UserSerializer2
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef GetCompanySerializer
 * @property {string} [business_type]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [name]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {number} [uid]
 * @property {string} [company_type]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [created_on]
 * @property {string} [stage]
 * @property {UserSerializer2} [created_by]
 * @property {string} [reject_reason]
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef Document
 * @property {string} type
 * @property {string} [url]
 * @property {boolean} [verified]
 * @property {string} [legal_name]
 * @property {string} value
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {string} weekday
 * @property {boolean} open
 * @property {LocationTimingSerializer} [opening]
 * @property {LocationTimingSerializer} [closing]
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
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {GetAddressSerializer} address
 * @property {string} display_name
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {UserSerializer1} [created_by]
 * @property {string} [modified_on]
 * @property {string} phone_number
 * @property {GetCompanySerializer} [company]
 * @property {LocationIntegrationType} [integration_type]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {string} code
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [created_on]
 * @property {Document[]} [documents]
 * @property {string[]} [notification_emails]
 * @property {LocationManagerSerializer} [manager]
 * @property {UserSerializer1} [modified_by]
 * @property {string} name
 * @property {string} [verified_on]
 * @property {UserSerializer1} [verified_by]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Object} [warnings]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
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
 * @property {string} app_id
 * @property {string} [name]
 * @property {boolean} [is_active]
 * @property {number} uid
 * @property {Object} [_custom_json]
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
 * @typedef UserSerializer
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {string} [contact]
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} [country]
 * @property {string} [country_code]
 */

/**
 * @typedef Document
 * @property {string} [url]
 * @property {string} value
 * @property {boolean} [verified]
 * @property {string} type
 * @property {string} [legal_name]
 */

/**
 * @typedef GetAddressSerializer
 * @property {number} longitude
 * @property {number} [pincode]
 * @property {number} latitude
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [address_type]
 * @property {string} [landmark]
 * @property {string} [country]
 * @property {string} [address2]
 * @property {string} [address1]
 * @property {string} [country_code]
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
 * @typedef CompanyTaxesSerializer
 * @property {boolean} [enable]
 * @property {number} [rate]
 * @property {string} [effective_date]
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
 * @property {Object} [warnings]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {Document[]} [documents]
 * @property {string} [business_info]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} company_type
 * @property {boolean} [franchise_enabled]
 * @property {number} uid
 * @property {ContactDetails} [contact_details]
 * @property {string} [verified_on]
 * @property {string} business_type
 * @property {string} [modified_on]
 * @property {string} [mode]
 * @property {string} [stage]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {string} [created_on]
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [created_by]
 * @property {BusinessDetails} [business_details]
 */

/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {string} [message]
 * @property {number} [status]
 * @property {Object} [meta]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {number} longitude
 * @property {number} pincode
 * @property {number} latitude
 * @property {string} state
 * @property {string} city
 * @property {string} address_type
 * @property {string} [landmark]
 * @property {string} country
 * @property {string} [address2]
 * @property {string} address1
 * @property {string} [country_code]
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {boolean} [enable]
 * @property {number} [rate]
 * @property {string} [effective_date]
 */

/**
 * @typedef UpdateCompany
 * @property {Document[]} [documents]
 * @property {string} [business_type]
 * @property {string} [business_info]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {ContactDetails} [contact_details]
 * @property {Object} [warnings]
 * @property {string} [name]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {string} [reject_reason]
 * @property {Object} [_custom_json]
 * @property {string[]} [notification_emails]
 * @property {string} [company_type]
 * @property {boolean} [franchise_enabled]
 * @property {BusinessDetails} [business_details]
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
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [store]
 * @property {string} [stage]
 * @property {DocumentsObj} [product]
 * @property {number} [uid]
 * @property {DocumentsObj} [brand]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [landscape]
 * @property {string} [portrait]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {Object} [warnings]
 * @property {string} [logo]
 * @property {string} name
 * @property {string} [reject_reason]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 * @property {Object} [_locale_language]
 * @property {string} [description]
 * @property {string} [slug_key]
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {string} [mode]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [created_by]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {number} [company_id]
 * @property {Object} [_locale_language]
 * @property {number} [uid]
 * @property {string} [brand_tier]
 * @property {string} [description]
 * @property {string} logo
 * @property {string} name
 * @property {BrandBannerSerializer} [banner]
 * @property {Object} [_custom_json]
 * @property {string[]} [synonyms]
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
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} business_type
 * @property {string} [modified_on]
 * @property {string[]} [market_channels]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [stage]
 * @property {string} [name]
 * @property {CompanyDetails} [details]
 * @property {string} [reject_reason]
 * @property {string} [created_on]
 * @property {Object} [_custom_json]
 * @property {string[]} [notification_emails]
 * @property {string} company_type
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [created_by]
 * @property {string} [verified_on]
 * @property {number} [uid]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {CompanySerializer} [company]
 * @property {string} [modified_on]
 * @property {Object} [warnings]
 * @property {string} [stage]
 * @property {string} [reject_reason]
 * @property {string} [created_on]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [created_by]
 * @property {string} [verified_on]
 * @property {number} [uid]
 * @property {UserSerializer} [modified_by]
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
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number} company
 * @property {number[]} brands
 * @property {number} [uid]
 */

/**
 * @typedef GetCompanySerializer
 * @property {string} [business_type]
 * @property {string} [modified_on]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [stage]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {string} [created_on]
 * @property {string} [company_type]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [created_by]
 * @property {string} [verified_on]
 * @property {number} [uid]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} hour
 * @property {number} minute
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {boolean} open
 * @property {LocationTimingSerializer} [opening]
 * @property {LocationTimingSerializer} [closing]
 * @property {string} weekday
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {string} [name]
 * @property {SellerPhoneNumber} mobile_no
 */

/**
 * @typedef HolidayDateSerializer
 * @property {string} end_date
 * @property {string} start_date
 */

/**
 * @typedef HolidaySchemaSerializer
 * @property {string} holiday_type
 * @property {HolidayDateSerializer} date
 * @property {string} title
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef InvoiceCredSerializer
 * @property {string} [username]
 * @property {boolean} [enabled]
 * @property {string} [password]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */

/**
 * @typedef GetLocationSerializer
 * @property {GetCompanySerializer} [company]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Object} [warnings]
 * @property {string} name
 * @property {LocationManagerSerializer} [manager]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string[]} [notification_emails]
 * @property {string} [phone_number]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [modified_by]
 * @property {Document[]} [documents]
 * @property {number} [uid]
 * @property {string} display_name
 * @property {string} code
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {string} [store_type]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer} address
 * @property {UserSerializer} [created_by]
 */

/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AddressSerializer
 * @property {number} longitude
 * @property {number} [pincode]
 * @property {number} latitude
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} [address_type]
 * @property {string} [landmark]
 * @property {string} [country]
 * @property {string} [address2]
 * @property {string} [address1]
 * @property {string} [country_code]
 */

/**
 * @typedef LocationSerializer
 * @property {string} code
 * @property {number} company
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Document[]} [documents]
 * @property {string} [store_type]
 * @property {Object} [warnings]
 * @property {string} [stage]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} name
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {LocationManagerSerializer} [manager]
 * @property {Object} [_custom_json]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string[]} [notification_emails]
 * @property {AddressSerializer} address
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {number} [uid]
 * @property {string} display_name
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
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */

/**
 * @typedef Rule
 * @property {number} [max]
 * @property {number} [min]
 * @property {number} [discount_qty]
 * @property {number} [key]
 * @property {number} [value]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */

/**
 * @typedef DisplayMeta
 * @property {DisplayMetaDict} [remove]
 * @property {string} [subtitle]
 * @property {string} [title]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [description]
 * @property {DisplayMetaDict} [apply]
 */

/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {boolean} [anonymous]
 * @property {string} [user_registered_after]
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef RuleDefinition
 * @property {string[]} [scope]
 * @property {string} applicable_on
 * @property {boolean} [auto_apply]
 * @property {boolean} [is_exact]
 * @property {string} calculate_on
 * @property {string} value_type
 * @property {string} type
 * @property {string} [currency_code]
 */

/**
 * @typedef State
 * @property {boolean} [is_display]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_public]
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
 * @typedef PostOrder
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
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
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [networks]
 * @property {string[]} [codes]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [types]
 */

/**
 * @typedef Restrictions
 * @property {string[]} [platforms]
 * @property {UsesRestriction} [uses]
 * @property {PostOrder} [post_order]
 * @property {number[]} [ordering_stores]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {string} [user_type]
 * @property {PriceRange} [price_range]
 * @property {Object} [payments]
 * @property {number[]} [user_groups]
 * @property {boolean} [coupon_allowed]
 */

/**
 * @typedef CouponSchedule
 * @property {number} [duration]
 * @property {string} [start]
 * @property {string} [cron]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef Identifier
 * @property {number[]} [item_id]
 * @property {number[]} [exclude_brand_id]
 * @property {string[]} [collection_id]
 * @property {string[]} [article_id]
 * @property {number[]} [store_id]
 * @property {number[]} [company_id]
 * @property {number[]} [category_id]
 * @property {string[]} [user_id]
 * @property {number[]} [brand_id]
 */

/**
 * @typedef CouponAdd
 * @property {string[]} [tags]
 * @property {Ownership} ownership
 * @property {CouponAction} [action]
 * @property {string} type_slug
 * @property {Rule[]} rule
 * @property {Validity} validity
 * @property {DisplayMeta} display_meta
 * @property {Validation} [validation]
 * @property {CouponAuthor} [author]
 * @property {RuleDefinition} rule_definition
 * @property {State} [state]
 * @property {Restrictions} [restrictions]
 * @property {CouponSchedule} [_schedule]
 * @property {CouponDateMeta} [date_meta]
 * @property {Identifier} identifiers
 * @property {string} code
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
 * @property {string[]} [tags]
 * @property {Ownership} ownership
 * @property {CouponAction} [action]
 * @property {string} type_slug
 * @property {Rule[]} rule
 * @property {Validity} validity
 * @property {DisplayMeta} display_meta
 * @property {Validation} [validation]
 * @property {CouponAuthor} [author]
 * @property {RuleDefinition} rule_definition
 * @property {State} [state]
 * @property {Restrictions} [restrictions]
 * @property {CouponSchedule} [_schedule]
 * @property {CouponDateMeta} [date_meta]
 * @property {Identifier} identifiers
 * @property {string} code
 */

/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive]
 * @property {CouponSchedule} [schedule]
 */

/**
 * @typedef DiscountOffer
 * @property {number} [min_offer_quantity]
 * @property {number} [discount_price]
 * @property {boolean} [partial_can_ret]
 * @property {number} [discount_percentage]
 * @property {number} [max_discount_amount]
 * @property {number} [max_offer_quantity]
 * @property {boolean} [apportion_discount]
 * @property {number} [discount_amount]
 * @property {number} [max_usage_per_transaction]
 * @property {string} [code]
 */

/**
 * @typedef CompareObject
 * @property {number} [greater_than_equals]
 * @property {number} [equals]
 * @property {number} [less_than_equals]
 * @property {number} [greater_than]
 * @property {number} [less_than]
 */

/**
 * @typedef ItemCriteria
 * @property {number[]} [item_exclude_brand]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_exclude_company]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_exclude_category]
 * @property {string[]} [product_tags]
 * @property {string[]} [buy_rules]
 * @property {CompareObject} [cart_total]
 * @property {number[]} [item_id]
 * @property {number[]} [item_exclude_store]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {number[]} [item_company]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_brand]
 * @property {boolean} [all_items]
 * @property {string[]} [available_zones]
 * @property {string[]} [item_size]
 * @property {number[]} [item_store]
 * @property {number[]} [item_category]
 */

/**
 * @typedef DiscountRule
 * @property {DiscountOffer} offer
 * @property {string} discount_type
 * @property {ItemCriteria} item_criteria
 * @property {string} buy_condition
 */

/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
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
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
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
 * @typedef Restrictions1
 * @property {string[]} [platforms]
 * @property {UsesRestriction1} uses
 * @property {PostOrder1} [post_order]
 * @property {boolean} [anonymous_users]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {UserRegistered} [user_registered]
 * @property {string[]} [user_id]
 * @property {number[]} [user_groups]
 * @property {number} [order_quantity]
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
 * @typedef Ownership1
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [offer_label]
 * @property {string} [description]
 * @property {string} [offer_text]
 * @property {string} [name]
 */

/**
 * @typedef PromotionSchedule
 * @property {number} [duration]
 * @property {Object[]} [next_schedule]
 * @property {string} start
 * @property {string} [cron]
 * @property {string} [end]
 * @property {boolean} published
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef PromotionListItem
 * @property {string} application_id
 * @property {DiscountRule[]} discount_rules
 * @property {string} [currency]
 * @property {Visibility} [visiblility]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {string} [code]
 * @property {PromotionAction} [post_order_action]
 * @property {Object} buy_rules
 * @property {boolean} [stackable]
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {string} promo_group
 * @property {PromotionAuthor} [author]
 * @property {string} mode
 * @property {string} promotion_type
 * @property {Object} [_custom_json]
 * @property {Ownership1} ownership
 * @property {DisplayMeta1} display_meta
 * @property {boolean} [apply_all_discount]
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionDateMeta} [date_meta]
 */

/**
 * @typedef PromotionsResponse
 * @property {Page} [page]
 * @property {PromotionListItem} [items]
 */

/**
 * @typedef PromotionAdd
 * @property {string} application_id
 * @property {DiscountRule[]} discount_rules
 * @property {string} [currency]
 * @property {Visibility} [visiblility]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {string} [code]
 * @property {PromotionAction} [post_order_action]
 * @property {Object} buy_rules
 * @property {boolean} [stackable]
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {string} promo_group
 * @property {PromotionAuthor} [author]
 * @property {string} mode
 * @property {string} promotion_type
 * @property {Object} [_custom_json]
 * @property {Ownership1} ownership
 * @property {DisplayMeta1} display_meta
 * @property {boolean} [apply_all_discount]
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionDateMeta} [date_meta]
 */

/**
 * @typedef PromotionUpdate
 * @property {string} application_id
 * @property {DiscountRule[]} discount_rules
 * @property {string} [currency]
 * @property {Visibility} [visiblility]
 * @property {Restrictions1} [restrictions]
 * @property {string} [apply_exclusive]
 * @property {string} [code]
 * @property {PromotionAction} [post_order_action]
 * @property {Object} buy_rules
 * @property {boolean} [stackable]
 * @property {number} [apply_priority]
 * @property {string} [calculate_on]
 * @property {string} promo_group
 * @property {PromotionAuthor} [author]
 * @property {string} mode
 * @property {string} promotion_type
 * @property {Object} [_custom_json]
 * @property {Ownership1} ownership
 * @property {DisplayMeta1} display_meta
 * @property {boolean} [apply_all_discount]
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionDateMeta} [date_meta]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive]
 * @property {PromotionSchedule} [schedule]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [created_on]
 * @property {string} [subtitle]
 * @property {string} [title]
 * @property {string} [modified_on]
 * @property {string} [example]
 * @property {string} [entity_type]
 * @property {string} [type]
 * @property {boolean} [is_hidden]
 * @property {string} [description]
 * @property {string} [entity_slug]
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
 * @typedef ProductPrice
 * @property {number} [marked]
 * @property {string} [currency_symbol]
 * @property {number} [add_on]
 * @property {number} [selling]
 * @property {string} [currency_code]
 * @property {number} [effective]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [base]
 * @property {ProductPrice} [converted]
 */

/**
 * @typedef ProductAvailability
 * @property {number} [other_store_quantity]
 * @property {boolean} [is_valid]
 * @property {boolean} [deliverable]
 * @property {string[]} [sizes]
 * @property {boolean} [out_of_stock]
 */

/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */

/**
 * @typedef ProductAction
 * @property {string} [url]
 * @property {ActionQuery} [query]
 * @property {string} [type]
 */

/**
 * @typedef CategoryInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef NetQuantity
 * @property {string} [unit]
 * @property {string} [value]
 */

/**
 * @typedef BaseInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef ProductImage
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */

/**
 * @typedef CartProduct
 * @property {string} [item_code]
 * @property {ProductAction} [action]
 * @property {string} [name]
 * @property {string} [type]
 * @property {CategoryInfo[]} [categories]
 * @property {NetQuantity} [net_quantity]
 * @property {BaseInfo} [brand]
 * @property {string} [slug]
 * @property {ProductImage[]} [images]
 * @property {number} [uid]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
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
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
 */

/**
 * @typedef ProductArticle
 * @property {Object} [_custom_json]
 * @property {number} [quantity]
 * @property {string} [type]
 * @property {BaseInfo} [seller]
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [size]
 * @property {Object} [extra_meta]
 * @property {string[]} [product_group_tags]
 * @property {BaseInfo} [store]
 * @property {string} [uid]
 */

/**
 * @typedef BuyRules
 * @property {Object} [cart_conditions]
 * @property {Object} [item_criteria]
 */

/**
 * @typedef Ownership2
 * @property {string} [payable_by]
 * @property {string} [payable_category]
 */

/**
 * @typedef FreeGiftItem
 * @property {number} [item_id]
 * @property {string} [item_brand_name]
 * @property {string[]} [item_images_url]
 * @property {string} [item_name]
 * @property {string} [item_slug]
 * @property {Object} [item_price_details]
 */

/**
 * @typedef AppliedFreeArticles
 * @property {string} [parent_item_identifier]
 * @property {FreeGiftItem} [free_gift_item_details]
 * @property {number} [quantity]
 * @property {string} [article_id]
 */

/**
 * @typedef DiscountRulesApp
 * @property {Object} [offer]
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [raw_offer]
 * @property {Object} [item_criteria]
 */

/**
 * @typedef AppliedPromotion
 * @property {number} [article_quantity]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_group]
 * @property {string} [promo_id]
 * @property {Ownership2} [ownership]
 * @property {boolean} [mrp_promotion]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {number} [amount]
 * @property {string} [promotion_name]
 * @property {string} [promotion_type]
 * @property {string} [offer_text]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef CartProductInfo
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {boolean} [is_set]
 * @property {ProductAvailability} [availability]
 * @property {string} [discount]
 * @property {string} [message]
 * @property {CartProduct} [product]
 * @property {PromoMeta} [promo_meta]
 * @property {string} [key]
 * @property {ProductPriceInfo} [price]
 * @property {Object} [parent_item_identifiers]
 * @property {ProductArticle} [article]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {Object} [bulk_offer]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [coupon_message]
 * @property {number} [quantity]
 */

/**
 * @typedef RawBreakup
 * @property {number} [mrp_total]
 * @property {number} [delivery_charge]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {number} [convenience_fee]
 * @property {number} [discount]
 * @property {number} [gst_charges]
 * @property {number} [vog]
 * @property {number} [fynd_cash]
 * @property {number} [cod_charge]
 * @property {number} [coupon]
 * @property {number} [you_saved]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [message]
 * @property {string} [title]
 * @property {number} [max_discount_value]
 * @property {string} [type]
 * @property {number} [coupon_value]
 * @property {number} [minimum_cart_value]
 * @property {number} [value]
 * @property {string} [description]
 * @property {string} [coupon_type]
 * @property {string} [sub_title]
 * @property {boolean} [is_applied]
 * @property {string} [uid]
 * @property {string} [code]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [display]
 * @property {string[]} [message]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {string} [key]
 * @property {number} [value]
 */

/**
 * @typedef LoyaltyPoints
 * @property {string} [description]
 * @property {number} [total]
 * @property {boolean} [is_applied]
 * @property {number} [applicable]
 */

/**
 * @typedef CartBreakup
 * @property {RawBreakup} [raw]
 * @property {CouponBreakup} [coupon]
 * @property {DisplayBreakup[]} [display]
 * @property {LoyaltyPoints} [loyalty_points]
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
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {Object} [errors]
 */

/**
 * @typedef ShippingAddress
 * @property {string} [email]
 * @property {number} [pincode]
 * @property {Object} [meta]
 * @property {string} area_code
 * @property {number} [phone]
 * @property {string} [country_phone_code]
 * @property {string} [area]
 * @property {string} [country_iso_code]
 * @property {string} [name]
 * @property {string} [country]
 * @property {string} [landmark]
 * @property {string} [area_code_slug]
 * @property {string} [state]
 * @property {string} [address_type]
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [country_code]
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
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {boolean} [is_valid]
 * @property {CartBreakup} [breakup_values]
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
 * @typedef MultiTenderPaymentMeta
 * @property {string} [current_status]
 * @property {string} [payment_gateway]
 * @property {string} [payment_id]
 * @property {string} [order_id]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} [name]
 * @property {number} amount
 * @property {string} mode
 */

/**
 * @typedef OpenApiOrderItem
 * @property {number} product_id
 * @property {number} [loyalty_discount]
 * @property {number} [employee_discount]
 * @property {number} amount_paid
 * @property {number} discount
 * @property {CartItemMeta} [meta]
 * @property {OpenApiFiles[]} [files]
 * @property {number} delivery_charges
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} size
 * @property {number} price_effective
 * @property {number} price_marked
 * @property {Object} [extra_meta]
 * @property {number} coupon_effective_discount
 * @property {number} cod_charges
 * @property {number} cashback_applied
 * @property {number} [quantity]
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [payment_mode]
 * @property {number} [loyalty_discount]
 * @property {OpenApiOrderItem[]} cart_items
 * @property {Object} [employee_discount]
 * @property {number} delivery_charges
 * @property {string} coupon_code
 * @property {string} [affiliate_order_id]
 * @property {string} [coupon]
 * @property {string} [order_id]
 * @property {string} [currency_code]
 * @property {string} [gstin]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {OpenApiFiles[]} [files]
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [comment]
 * @property {number} coupon_value
 * @property {number} cart_value
 * @property {ShippingAddress} billing_address
 * @property {number} cashback_applied
 * @property {number} cod_charges
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} order_id
 * @property {string} [order_ref_id]
 */

/**
 * @typedef AbandonedCart
 * @property {Object} [fynd_credits]
 * @property {number} [discount]
 * @property {Object[]} [shipments]
 * @property {Object} [pick_up_customer_details]
 * @property {string} last_modified
 * @property {Object} [coupon]
 * @property {number[]} [fc_index_map]
 * @property {string} [gstin]
 * @property {boolean} [is_archive]
 * @property {boolean} [merge_qty]
 * @property {Object[]} [payment_methods]
 * @property {boolean} [is_active]
 * @property {string} [comment]
 * @property {Object} [payments]
 * @property {Object} [cod_charges]
 * @property {number} uid
 * @property {string} [checkout_mode]
 * @property {string} created_on
 * @property {string} [app_id]
 * @property {string} [payment_mode]
 * @property {Object[]} articles
 * @property {number} [bulk_coupon_discount]
 * @property {Object} [delivery_charges]
 * @property {boolean} [buy_now]
 * @property {string} [order_id]
 * @property {string} expire_at
 * @property {Object} [promotion]
 * @property {string} _id
 * @property {Object} cashback
 * @property {Object} [meta]
 * @property {boolean} is_default
 * @property {number} [cart_value]
 * @property {string} user_id
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
 * @typedef PaymentSelectionLock
 * @property {string} [default_options]
 * @property {boolean} [enabled]
 * @property {string} [payment_identifier]
 */

/**
 * @typedef CartCurrency
 * @property {string} [symbol]
 * @property {string} [code]
 */

/**
 * @typedef CartDetailResponse
 * @property {string} [checkout_mode]
 * @property {boolean} [restrict_checkout]
 * @property {string} [id]
 * @property {string} [message]
 * @property {string} [delivery_charge_info]
 * @property {string} [comment]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [buy_now]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {Object} [pan_config]
 * @property {string} [pan_no]
 * @property {string} [last_modified]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {CartCurrency} [currency]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 * @property {CartBreakup} [breakup_values]
 */

/**
 * @typedef AddProductCart
 * @property {number} [item_id]
 * @property {string} [display]
 * @property {Object} [_custom_json]
 * @property {string} [article_id]
 * @property {number} [seller_id]
 * @property {Object} [article_assignment]
 * @property {string} [item_size]
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [store_id]
 * @property {string[]} [product_group_tags]
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
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 * @property {boolean} [partial]
 */

/**
 * @typedef UpdateProductCart
 * @property {number} [item_id]
 * @property {Object} [_custom_json]
 * @property {string} [article_id]
 * @property {string} [item_size]
 * @property {number} [item_index]
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {CartProductIdentifer} identifiers
 * @property {number} [quantity]
 */

/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {boolean} [success]
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 */

/**
 * @typedef GetShareCartLinkRequest
 * @property {Object} [meta]
 * @property {string} [id]
 */

/**
 * @typedef GetShareCartLinkResponse
 * @property {string} [token]
 * @property {string} [share_url]
 */

/**
 * @typedef SharedCartDetails
 * @property {string} [created_on]
 * @property {Object} [user]
 * @property {Object} [meta]
 * @property {string} [token]
 * @property {Object} [source]
 */

/**
 * @typedef SharedCart
 * @property {string} [message]
 * @property {boolean} [is_valid]
 * @property {string} [last_modified]
 * @property {CartCurrency} [currency]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {string} [comment]
 * @property {CartProductInfo[]} [items]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [uid]
 * @property {number} [cart_id]
 * @property {string} [checkout_mode]
 * @property {string} [id]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [buy_now]
 * @property {boolean} [restrict_checkout]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {CartBreakup} [breakup_values]
 */

/**
 * @typedef SharedCartResponse
 * @property {SharedCart} [cart]
 * @property {string} [error]
 */

/**
 * @typedef CartList
 * @property {string} [cart_id]
 * @property {string} [item_counts]
 * @property {string} [created_on]
 * @property {string} [cart_value]
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
 * @property {string} [last_name]
 * @property {string} [created_at]
 * @property {string} [external_id]
 * @property {string} [modified_on]
 * @property {string} [first_name]
 * @property {string} [mobile]
 * @property {string} [gender]
 * @property {string} [_id]
 * @property {string} [uid]
 */

/**
 * @typedef UserCartMappingResponse
 * @property {string} [message]
 * @property {boolean} [is_valid]
 * @property {string} [pan_no]
 * @property {string} [last_modified]
 * @property {CartCurrency} [currency]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 * @property {string} [comment]
 * @property {CartProductInfo[]} [items]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {Object} [pan_config]
 * @property {string} [checkout_mode]
 * @property {UserInfo} [user]
 * @property {string} [id]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [buy_now]
 * @property {boolean} [restrict_checkout]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {CartBreakup} [breakup_values]
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
 * @property {number} [total]
 * @property {number} [current]
 * @property {boolean} [has_previous]
 * @property {number} [total_item_count]
 * @property {boolean} [has_next]
 */

/**
 * @typedef Coupon
 * @property {string} [sub_title]
 * @property {string} [title]
 * @property {string} [message]
 * @property {string} [expires_on]
 * @property {number} [coupon_value]
 * @property {number} [max_discount_value]
 * @property {string} [coupon_code]
 * @property {boolean} [is_applicable]
 * @property {number} [minimum_cart_value]
 * @property {string} [coupon_type]
 * @property {string} [description]
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
 * @property {number} [longitude]
 * @property {number} [latitude]
 */

/**
 * @typedef PlatformAddress
 * @property {string} [email]
 * @property {string[]} [tags]
 * @property {string} [area_code]
 * @property {Object} [google_map_point]
 * @property {string} [area_code_slug]
 * @property {string} [country]
 * @property {boolean} [is_active]
 * @property {boolean} [is_default_address]
 * @property {string} [phone]
 * @property {string} [name]
 * @property {string} [address_type]
 * @property {string} [address]
 * @property {string} [created_by_user_id]
 * @property {string} [country_code]
 * @property {string} [cart_id]
 * @property {string} [checkout_mode]
 * @property {string} [id]
 * @property {GeoLocation} [geo_location]
 * @property {string} [landmark]
 * @property {string} [state]
 * @property {string} [city]
 * @property {Object} [meta]
 * @property {string} [area]
 * @property {string} [user_id]
 */

/**
 * @typedef PlatformGetAddressesResponse
 * @property {PlatformAddress[]} [address]
 */

/**
 * @typedef SaveAddressResponse
 * @property {boolean} [is_default_address]
 * @property {boolean} [success]
 * @property {string} [id]
 */

/**
 * @typedef UpdateAddressResponse
 * @property {boolean} [is_updated]
 * @property {boolean} [is_default_address]
 * @property {boolean} [success]
 * @property {string} [id]
 */

/**
 * @typedef DeleteAddressResponse
 * @property {boolean} [is_deleted]
 * @property {string} [id]
 */

/**
 * @typedef PlatformSelectCartAddressRequest
 * @property {string} [billing_address_id]
 * @property {string} [checkout_mode]
 * @property {string} [cart_id]
 * @property {string} [id]
 */

/**
 * @typedef ShipmentResponse
 * @property {string} [shipment_type]
 * @property {string} [fulfillment_type]
 * @property {number} [shipments]
 * @property {string} [box_type]
 * @property {number} [fulfillment_id]
 * @property {CartProductInfo[]} [items]
 * @property {string} [order_type]
 * @property {ShipmentPromise} [promise]
 * @property {string} [dp_id]
 * @property {Object} [dp_options]
 */

/**
 * @typedef CartShipmentsResponse
 * @property {number} [cart_id]
 * @property {string} [checkout_mode]
 * @property {string} [id]
 * @property {string} [message]
 * @property {string} [delivery_charge_info]
 * @property {ShipmentResponse[]} [shipments]
 * @property {boolean} [buy_now]
 * @property {boolean} [is_valid]
 * @property {boolean} [error]
 * @property {string} [last_modified]
 * @property {CartCurrency} [currency]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 * @property {boolean} [restrict_checkout]
 * @property {string} [comment]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [uid]
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
 * @typedef PlatformCartMetaRequest
 * @property {string} [checkout_mode]
 * @property {string} [comment]
 * @property {Object} [pick_up_customer_details]
 * @property {string} [pan_no]
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
 * @typedef StaffCheckout
 * @property {string} last_name
 * @property {string} user
 * @property {string} [employee_code]
 * @property {string} first_name
 * @property {string} _id
 */

/**
 * @typedef Files
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef PlatformCartCheckoutDetailRequest
 * @property {string} [callback_url]
 * @property {number} [ordering_store]
 * @property {StaffCheckout} [staff]
 * @property {boolean} [pos]
 * @property {Object} [payment_params]
 * @property {string} [address_id]
 * @property {string} [checkout_mode]
 * @property {string} payment_mode
 * @property {string} id
 * @property {string} [billing_address_id]
 * @property {Object} [delivery_address]
 * @property {string} order_type
 * @property {string} [merchant_code]
 * @property {string} [aggregator]
 * @property {boolean} [payment_auto_confirm]
 * @property {Object} [extra_meta]
 * @property {Files[]} [files]
 * @property {Object} [meta]
 * @property {number} [pick_at_store_uid]
 * @property {string} user_id
 * @property {string} [payment_identifier]
 * @property {Object} [billing_address]
 */

/**
 * @typedef CheckCart
 * @property {boolean} [cod_available]
 * @property {string} [message]
 * @property {string} [cod_message]
 * @property {boolean} [is_valid]
 * @property {string} [last_modified]
 * @property {CartCurrency} [currency]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 * @property {string} [comment]
 * @property {CartProductInfo[]} [items]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {Object[]} [store_emps]
 * @property {string} [store_code]
 * @property {string} [error_message]
 * @property {string} [uid]
 * @property {number} [cod_charges]
 * @property {number} [cart_id]
 * @property {string} [checkout_mode]
 * @property {string} [id]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [buy_now]
 * @property {number} [delivery_charges]
 * @property {string} [user_type]
 * @property {string} [order_id]
 * @property {boolean} [success]
 * @property {boolean} [restrict_checkout]
 * @property {number} [delivery_charge_order_value]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {CartBreakup} [breakup_values]
 */

/**
 * @typedef CartCheckoutResponse
 * @property {string} [payment_confirm_url]
 * @property {string} [message]
 * @property {string} [callback_url]
 * @property {Object} [data]
 * @property {string} [app_intercept_url]
 * @property {string} [order_id]
 * @property {boolean} [success]
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
 * @property {number} [pincode]
 * @property {number} [id]
 * @property {string} [area_code]
 * @property {string} [phone]
 * @property {string} [area]
 * @property {string} [name]
 * @property {string} [country]
 * @property {string} [area_code_slug]
 * @property {string} [landmark]
 * @property {string} [store_code]
 * @property {string} [state]
 * @property {string} [address_type]
 * @property {string} [address]
 * @property {string} [city]
 * @property {number} [uid]
 */

/**
 * @typedef StoreDetailsResponse
 * @property {PickupStoreDetail[]} [items]
 */

/**
 * @typedef UpdateCartPaymentRequest
 * @property {string} [aggregator_name]
 * @property {string} [payment_mode]
 * @property {string} [id]
 * @property {string} [address_id]
 * @property {string} [merchant_code]
 * @property {string} [payment_identifier]
 */

/**
 * @typedef CouponValidity
 * @property {boolean} [valid]
 * @property {number} [discount]
 * @property {string} [title]
 * @property {string} [display_message_en]
 * @property {string} [code]
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
 * @typedef RemoveProxyResponse
 * @property {string} [message]
 * @property {Object} [data]
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

module.exports = PlatformApplicationClient;
