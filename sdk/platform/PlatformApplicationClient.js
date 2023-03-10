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
 * @property {string} [name]
 * @property {string} [value]
 * @property {string} text
 */

/**
 * @typedef FiltersInfo
 * @property {FilterInfoOption[]} [options]
 * @property {string} value
 * @property {string} text
 * @property {string} type
 */

/**
 * @typedef UserDataInfo
 * @property {string} [email]
 * @property {number} [uid]
 * @property {string} [avis_user_id]
 * @property {string} [mobile]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [first_name]
 * @property {string} [name]
 * @property {string} [last_name]
 * @property {string} [gender]
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
 * @typedef ShipmentStatus
 * @property {string} actual_status
 * @property {string} status
 * @property {string} title
 * @property {string} ops_status
 * @property {string} hex_code
 */

/**
 * @typedef PlatformItem
 * @property {string[]} [image]
 * @property {number} [id]
 * @property {string[]} [images]
 * @property {string[]} [l1_category]
 * @property {string} [color]
 * @property {string} [size]
 * @property {string} [l3_category_name]
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {number} [l3_category]
 * @property {string} [name]
 * @property {number} [department_id]
 * @property {string} [code]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} value_of_good
 * @property {number} tax_collected_at_source
 * @property {number} brand_calculated_amount
 * @property {number} gst_fee
 * @property {string} gstin_code
 */

/**
 * @typedef Prices
 * @property {number} [price_marked]
 * @property {number} [cashback_applied]
 * @property {number} [amount_paid]
 * @property {number} [coupon_value]
 * @property {number} [refund_amount]
 * @property {number} [price_effective]
 * @property {number} [refund_credit]
 * @property {number} [fynd_credits]
 * @property {number} [value_of_good]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [promotion_effective_discount]
 * @property {number} [tax_collected_at_source]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [cashback]
 * @property {number} [cod_charges]
 */

/**
 * @typedef BagUnit
 * @property {PlatformItem} [item]
 * @property {string} ordering_channel
 * @property {GSTDetailsData} [gst]
 * @property {Object} status
 * @property {number} item_quantity
 * @property {boolean} [can_cancel]
 * @property {boolean} [can_return]
 * @property {Prices} [prices]
 * @property {number} total_shipment_bags
 * @property {number} bag_id
 * @property {string} shipment_id
 */

/**
 * @typedef ShipmentItem
 * @property {string} created_at
 * @property {Object} [company]
 * @property {number} total_bags_count
 * @property {UserDataInfo} [user]
 * @property {string} id
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {number} shipment_created_at
 * @property {Object} [payment_methods]
 * @property {ShipmentStatus} [shipment_status]
 * @property {Object} [sla]
 * @property {BagUnit[]} [bags]
 * @property {string} fulfilling_centre
 * @property {Object} [channel]
 * @property {Prices} [prices]
 * @property {Object} [application]
 * @property {number} total_shipments_in_order
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
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef OrderDetailsData
 * @property {Object} [tax_details]
 * @property {string} [source]
 * @property {string} [ordering_channel]
 * @property {string} [order_value]
 * @property {string} [affiliate_id]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [cod_charges]
 * @property {string} fynd_order_id
 * @property {string} [order_date]
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
 * @typedef UserDetailsData
 * @property {string} [email]
 * @property {string} country
 * @property {string} state
 * @property {string} address
 * @property {string} city
 * @property {string} pincode
 * @property {string} name
 * @property {string} phone
 */

/**
 * @typedef EInvoice
 * @property {string} [irn]
 * @property {number} [acknowledge_no]
 * @property {string} [error_code]
 * @property {string} [error_message]
 * @property {string} [signed_qr_code]
 * @property {string} [signed_invoice]
 * @property {string} [acknowledge_date]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [invoice]
 * @property {EInvoice} [credit_note]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [mode]
 * @property {string} [logo]
 * @property {string} [source]
 */

/**
 * @typedef Dimensions
 * @property {number} [height]
 * @property {number} [width]
 * @property {string} [unit]
 * @property {boolean} [is_default]
 * @property {number} [length]
 */

/**
 * @typedef Meta
 * @property {Dimensions} [dimension]
 */

/**
 * @typedef FulfillingStore
 * @property {string} country
 * @property {string} state
 * @property {string} address
 * @property {string} pincode
 * @property {number} id
 * @property {Object} meta
 * @property {string} fulfillment_channel
 * @property {string} contact_person
 * @property {string} city
 * @property {string} store_name
 * @property {string} phone
 * @property {string} code
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [created_at]
 * @property {number} [id]
 * @property {string} [status]
 * @property {string[]} [bag_list]
 * @property {string} [shipment_id]
 */

/**
 * @typedef BagStateMapper
 * @property {number} bs_id
 * @property {boolean} [app_facing]
 * @property {boolean} [notify_customer]
 * @property {string} [app_display_name]
 * @property {string} display_name
 * @property {boolean} [is_active]
 * @property {string} name
 * @property {string} [app_state_name]
 * @property {string} journey_type
 * @property {string} state_type
 */

/**
 * @typedef BagStatusHistory
 * @property {string} [created_at]
 * @property {number} [state_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [delivery_partner_id]
 * @property {string} status
 * @property {string} [delivery_awb_number]
 * @property {number} [bsh_id]
 * @property {number} [store_id]
 * @property {string} [app_display_name]
 * @property {boolean} [kafka_sync]
 * @property {Object[]} [reasons]
 * @property {string} [display_name]
 * @property {boolean} [forward]
 * @property {string} [state_type]
 * @property {string} [updated_at]
 * @property {number} [bag_id]
 * @property {string} [shipment_id]
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
 * @typedef Formatted
 * @property {string} [f_max]
 * @property {string} [f_min]
 */

/**
 * @typedef LockData
 * @property {string} [lock_message]
 * @property {boolean} [locked]
 * @property {boolean} [mto]
 */

/**
 * @typedef BuyerDetails
 * @property {number} pincode
 * @property {string} state
 * @property {string} address
 * @property {string} city
 * @property {string} [ajio_site_id]
 * @property {string} gstin
 * @property {string} name
 */

/**
 * @typedef ShipmentMeta
 * @property {Object} [external]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [awb_number]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [dp_id]
 * @property {DebugInfo} [debug_info]
 * @property {boolean} [assign_dp_from_sb]
 * @property {number} [shipment_weight]
 * @property {string} [po_number]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [return_awb_number]
 * @property {Object} [b2c_buyer_details]
 * @property {Formatted} [formatted]
 * @property {number} weight
 * @property {LockData} [lock_data]
 * @property {string} [marketplace_store_id]
 * @property {string} [dp_sort_key]
 * @property {number} [return_store_node]
 * @property {Object} [dp_options]
 * @property {number} [shipment_volumetric_weight]
 * @property {Object} [bag_weight]
 * @property {string} [fulfilment_priority_text]
 * @property {string} [due_date]
 * @property {string} [return_affiliate_shipment_id]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {Object} [ewaybill_info]
 * @property {string} [return_affiliate_order_id]
 * @property {string} [dp_name]
 * @property {string} [order_type]
 * @property {string} [packaging_name]
 * @property {string} [box_type]
 * @property {string} [store_invoice_updated_date]
 * @property {boolean} same_store_available
 * @property {Object} [return_details]
 */

/**
 * @typedef PDFLinks
 * @property {string} [po_invoice]
 * @property {string} [invoice_a6]
 * @property {string} [invoice]
 * @property {string} [credit_note_url]
 * @property {string} [invoice_pos]
 * @property {string} [label_a4]
 * @property {string} label_type
 * @property {string} [label_a6]
 * @property {string} [label]
 * @property {string} [label_pos]
 * @property {string} [b2b]
 * @property {string} [invoice_a4]
 * @property {string} invoice_type
 */

/**
 * @typedef AffiliateMeta
 * @property {number} [employee_discount]
 * @property {string} [channel_shipment_id]
 * @property {string} [box_type]
 * @property {number} [size_level_total_qty]
 * @property {string} [due_date]
 * @property {string} [order_item_id]
 * @property {number} [quantity]
 * @property {number} [loyalty_discount]
 * @property {string} [channel_order_id]
 * @property {boolean} [is_priority]
 * @property {string} [coupon_code]
 */

/**
 * @typedef AffiliateDetails
 * @property {ShipmentMeta} shipment_meta
 * @property {PDFLinks} [pdf_links]
 * @property {string} [affiliate_id]
 * @property {string} [ad_id]
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_store_id
 * @property {string} [company_affiliate_tag]
 * @property {string} affiliate_order_id
 * @property {string} affiliate_shipment_id
 * @property {AffiliateMeta} affiliate_meta
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [email]
 * @property {string} [created_at]
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [pincode]
 * @property {string} [version]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {number} [longitude]
 * @property {string} [updated_at]
 * @property {string} [landmark]
 * @property {string} [address_category]
 * @property {string} [address_type]
 * @property {string} [area]
 * @property {number} [latitude]
 * @property {string} [city]
 * @property {string} [phone]
 * @property {string} [contact_person]
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
 * @property {Object} [cart_conditions]
 * @property {ItemCriterias} [item_criteria]
 */

/**
 * @typedef AppliedPromos
 * @property {string} [promo_id]
 * @property {number} [amount]
 * @property {DiscountRules[]} [discount_rules]
 * @property {string} [promotion_name]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_type]
 * @property {boolean} [mrp_promotion]
 * @property {number} [article_quantity]
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [identifiers]
 * @property {Object} [return_config]
 * @property {string} [uid]
 */

/**
 * @typedef OrderBrandName
 * @property {string} logo
 * @property {string} company
 * @property {number} id
 * @property {string} created_on
 * @property {string} brand_name
 * @property {string} [modified_on]
 */

/**
 * @typedef CurrentStatus
 * @property {string} [created_at]
 * @property {number} [state_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {number} [delivery_partner_id]
 * @property {string} [status]
 * @property {string} [shipment_id]
 * @property {number} [updated_at]
 * @property {number} [store_id]
 * @property {boolean} [kafka_sync]
 * @property {number} current_status_id
 * @property {string} [delivery_awb_number]
 * @property {number} [bag_id]
 * @property {string} [state_type]
 */

/**
 * @typedef BagGST
 * @property {string} [gst_tag]
 * @property {number} [gst_tax_percentage]
 * @property {number} [value_of_good]
 * @property {string} [hsn_code]
 * @property {number} [brand_calculated_amount]
 * @property {number} [gst_fee]
 * @property {boolean} [is_default_hsn_code]
 * @property {string} [gstin_code]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} refund_credit
 * @property {number} [amount_paid_roundoff]
 * @property {number} promotion_effective_discount
 * @property {string} item_name
 * @property {string} gst_tag
 * @property {boolean} added_to_fynd_cash
 * @property {string} size
 * @property {number} [tax_collected_at_source]
 * @property {number} brand_calculated_amount
 * @property {number} delivery_charge
 * @property {number} discount
 * @property {number} fynd_credits
 * @property {number} price_marked
 * @property {number} gst_tax_percentage
 * @property {number} value_of_good
 * @property {number} total_units
 * @property {number} coupon_effective_discount
 * @property {number} gst_fee
 * @property {Identifier} identifiers
 * @property {number} transfer_price
 * @property {number} cod_charges
 * @property {number} price_effective
 * @property {number} cashback_applied
 * @property {number} amount_paid
 * @property {number} coupon_value
 * @property {string} hsn_code
 * @property {number} cashback
 */

/**
 * @typedef BagConfigs
 * @property {boolean} enable_tracking
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} can_be_cancelled
 * @property {boolean} allow_force_return
 * @property {boolean} is_returnable
 * @property {boolean} is_active
 */

/**
 * @typedef OrderBags
 * @property {number} [line_number]
 * @property {boolean} [can_return]
 * @property {Prices} [prices]
 * @property {number} bag_id
 * @property {string} [seller_identifier]
 * @property {string} [entity_type]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {number} [quantity]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {OrderBagArticle} [article]
 * @property {Object} [parent_promo_bags]
 * @property {PlatformItem} [item]
 * @property {string} [display_name]
 * @property {OrderBrandName} [brand]
 * @property {string} [identifier]
 * @property {CurrentStatus} [current_status]
 * @property {BagGST} [gst_details]
 * @property {boolean} [can_cancel]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {BagConfigs} [bag_configs]
 */

/**
 * @typedef OrderingStoreDetails
 * @property {string} country
 * @property {string} state
 * @property {string} address
 * @property {string} pincode
 * @property {number} id
 * @property {Object} meta
 * @property {string} contact_person
 * @property {string} city
 * @property {string} store_name
 * @property {string} phone
 * @property {string} code
 */

/**
 * @typedef DPDetailsData
 * @property {string} [gst_tag]
 * @property {string} [country]
 * @property {string} [pincode]
 * @property {number} [id]
 * @property {string} [track_url]
 * @property {string} [eway_bill_id]
 * @property {string} [name]
 * @property {string} [awb_no]
 */

/**
 * @typedef PlatformShipment
 * @property {OrderDetailsData} [order]
 * @property {string} [picked_date]
 * @property {Object[]} [custom_meta]
 * @property {number} [fulfilment_priority]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [vertical]
 * @property {string[]} [shipment_images]
 * @property {string} [invoice_id]
 * @property {Prices} [prices]
 * @property {string} [journey_type]
 * @property {UserDetailsData} [delivery_details]
 * @property {EinvoiceInfo} [invoice]
 * @property {string} [shipment_status]
 * @property {string} [payment_mode]
 * @property {string} [priority_text]
 * @property {number} [total_bags]
 * @property {Object} [coupon]
 * @property {ShipmentPayments} [payments]
 * @property {UserDetailsData} [billing_details]
 * @property {number} [shipment_quantity]
 * @property {number} [total_items]
 * @property {string} [user_agent]
 * @property {string} [operational_status]
 * @property {GSTDetailsData} [gst_details]
 * @property {Object} [delivery_slot]
 * @property {Meta} [meta]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {ShipmentStatusData} [status]
 * @property {boolean} [enable_dp_tracking]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {OrderBags[]} [bags]
 * @property {string} [packaging_type]
 * @property {OrderingStoreDetails} [ordering_store]
 * @property {string} [platform_logo]
 * @property {DPDetailsData} [dp_details]
 * @property {string} shipment_id
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {PlatformShipment[]} [shipments]
 * @property {string} [message]
 * @property {boolean} success
 */

/**
 * @typedef OrderMeta
 * @property {string} [customer_note]
 * @property {string} [payment_type]
 * @property {string} [order_type]
 * @property {string[]} [order_child_entities]
 * @property {Object[]} [files]
 * @property {string} [comment]
 * @property {Object} [staff]
 * @property {string} [order_platform]
 * @property {number} [employee_id]
 * @property {number} [cart_id]
 * @property {string} [currency_symbol]
 * @property {Object} [extra_meta]
 * @property {number} [mongo_cart_id]
 * @property {Object[]} [order_tags]
 * @property {number} [ordering_store]
 */

/**
 * @typedef OrderDict
 * @property {Object} [tax_details]
 * @property {OrderMeta} [meta]
 * @property {Object} [payment_methods]
 * @property {Prices} [prices]
 * @property {string} fynd_order_id
 * @property {string} order_date
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {OrderDict} [order]
 * @property {PlatformShipment[]} [shipments]
 * @property {boolean} success
 */

/**
 * @typedef SubLane
 * @property {Object[]} [actions]
 * @property {string} [value]
 * @property {string} [text]
 * @property {number} [index]
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
 * @property {PlatformShipment[]} [shipments]
 * @property {string} [order_created_time]
 * @property {Object} [meta]
 * @property {number} [order_value]
 * @property {UserDataInfo} [user_info]
 * @property {string} [payment_mode]
 * @property {number} [total_order_value]
 * @property {string} [order_id]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {PlatformChannel} [channel]
 */

/**
 * @typedef OrderListingResponse
 * @property {string} [lane]
 * @property {string} [message]
 * @property {number} [total_count]
 * @property {boolean} [success]
 * @property {Page} [page]
 * @property {PlatformOrderItems[]} [items]
 */

/**
 * @typedef Options
 * @property {number} [value]
 * @property {string} [text]
 */

/**
 * @typedef MetricsCount
 * @property {string} key
 * @property {Options[]} [options]
 * @property {number} value
 * @property {string} text
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [reason]
 * @property {string} [raw_status]
 * @property {Object} [meta]
 * @property {string} [status]
 * @property {string} [account_name]
 * @property {string} [awb]
 * @property {string} [shipment_type]
 * @property {string} [last_location_recieved_at]
 * @property {string} [updated_at]
 * @property {string} [updated_time]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {PlatformTrack[]} [results]
 * @property {Object} [meta]
 */

/**
 * @typedef AdvanceFilterInfo
 * @property {FiltersInfo[]} [action_centre]
 * @property {FiltersInfo[]} [unfulfilled]
 * @property {FiltersInfo[]} [returned]
 * @property {FiltersInfo[]} [processed]
 * @property {FiltersInfo[]} [filters]
 */

/**
 * @typedef FiltersResponse
 * @property {AdvanceFilterInfo} [advance_filter]
 * @property {FiltersInfo[]} [global_filter]
 */

/**
 * @typedef Success
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef OmsReports
 * @property {string} [s3_key]
 * @property {Object} [request_details]
 * @property {string} [status]
 * @property {string} [report_created_at]
 * @property {string} [report_type]
 * @property {string} [display_name]
 * @property {string} [report_id]
 * @property {string} [report_name]
 * @property {string} [report_requested_at]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [jio_code]
 * @property {string} [article_id]
 * @property {string} [item_id]
 * @property {string} [company_id]
 */

/**
 * @typedef JioCodeUpsertPayload
 * @property {JioCodeUpsertDataSet[]} [data]
 */

/**
 * @typedef NestedErrorSchemaDataSet
 * @property {string} [message]
 * @property {string} [value]
 * @property {string} [type]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {string} [identifier]
 * @property {Object[]} [data]
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {boolean} [success]
 * @property {string} [trace_id]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {string} [message]
 * @property {boolean} success
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} batch_id
 * @property {boolean} do_invoice_label_generated
 * @property {Object} [label]
 * @property {string} [store_code]
 * @property {Object} [invoice]
 * @property {Object} [data]
 * @property {string} [store_id]
 * @property {string} [invoice_status]
 * @property {string} [store_name]
 * @property {string} [company_id]
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
 * @property {FileUploadResponse} [upload]
 * @property {string} [operation]
 * @property {number} [size]
 * @property {string} [file_name]
 * @property {string} [namespace]
 * @property {string} [content_type]
 * @property {string} [method]
 * @property {string[]} [tags]
 * @property {string} [file_path]
 * @property {URL} [cdn]
 */

/**
 * @typedef bulkListingData
 * @property {string} [store_code]
 * @property {number} [successful]
 * @property {string} [user_name]
 * @property {string} [store_name]
 * @property {number} [company_id]
 * @property {string} [batch_id]
 * @property {number} [failed]
 * @property {string} [id]
 * @property {number} [total]
 * @property {Object[]} [failed_shipments]
 * @property {string[]} [processing_shipments]
 * @property {number} [store_id]
 * @property {string} [user_id]
 * @property {number} [processing]
 * @property {string} [excel_url]
 * @property {Object[]} [successful_shipments]
 * @property {string} [status]
 * @property {string} [file_name]
 * @property {string} [uploaded_on]
 */

/**
 * @typedef BulkListingPage
 * @property {string} [type]
 * @property {number} [total]
 * @property {number} [size]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [current]
 */

/**
 * @typedef BulkListingResponse
 * @property {bulkListingData[]} [data]
 * @property {string} [error]
 * @property {BulkListingPage} [page]
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
 * @property {QuestionSet[]} [question_set]
 * @property {string[]} [qc_type]
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
 * @property {string} [message]
 * @property {boolean} [status]
 */

/**
 * @typedef BulkActionDetailsDataField
 * @property {number} [failed_shipments_count]
 * @property {string} [batch_id]
 * @property {number} [successful_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [processing_shipments_count]
 * @property {number} [total_shipments_count]
 * @property {string} [company_id]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {string} [message]
 * @property {string[]} [failed_records]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string[]} [error]
 * @property {boolean} [status]
 * @property {string} [success]
 * @property {string} [user_id]
 * @property {string} [uploaded_by]
 * @property {string} [uploaded_on]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {number} [employee_discount]
 * @property {string} affiliate_bag_id
 * @property {number} [loyalty_discount]
 * @property {string} affiliate_order_id
 * @property {AffiliateMeta} affiliate_meta
 */

/**
 * @typedef StoreAddress
 * @property {string} created_at
 * @property {string} [address2]
 * @property {string} city
 * @property {string} [landmark]
 * @property {string} address_type
 * @property {string} contact_person
 * @property {string} country
 * @property {number} pincode
 * @property {number} latitude
 * @property {string} [email]
 * @property {string} [version]
 * @property {string} country_code
 * @property {string} address_category
 * @property {string} phone
 * @property {string} address1
 * @property {string} state
 * @property {number} longitude
 * @property {string} [area]
 * @property {string} updated_at
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [password]
 * @property {boolean} enabled
 * @property {string} [user]
 * @property {string} [username]
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
 * @property {string} [password]
 * @property {string} [username]
 * @property {string} [user]
 */

/**
 * @typedef Document
 * @property {string} ds_type
 * @property {string} value
 * @property {string} legal_name
 * @property {string} [url]
 * @property {boolean} verified
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef StoreMeta
 * @property {StoreGstCredentials} gst_credentials
 * @property {Object} [product_return_config]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {Object} [ewaybill_portal_details]
 * @property {StoreDocuments} [documents]
 * @property {string} stage
 * @property {string} display_name
 * @property {Object[]} [timing]
 * @property {string} [gst_number]
 * @property {Object} [additional_contact_details]
 * @property {string[]} [notification_emails]
 */

/**
 * @typedef Store
 * @property {string} s_id
 * @property {string} created_at
 * @property {string} [address2]
 * @property {string} [vat_no]
 * @property {string} login_username
 * @property {boolean} [is_active]
 * @property {number} [parent_store_id]
 * @property {number} company_id
 * @property {Object} [brand_id]
 * @property {string} contact_person
 * @property {StoreAddress} [store_address_json]
 * @property {string} country
 * @property {string} pincode
 * @property {string} location_type
 * @property {string} [order_integration_id]
 * @property {string} [updated_at]
 * @property {number} latitude
 * @property {number} [alohomora_user_id]
 * @property {number} [packaging_material_count]
 * @property {boolean} [is_enabled_for_recon]
 * @property {boolean} [is_archived]
 * @property {string} [store_active_from]
 * @property {string} fulfillment_channel
 * @property {string[]} [brand_store_tags]
 * @property {string} name
 * @property {number} phone
 * @property {string} [mall_area]
 * @property {string} address1
 * @property {string} state
 * @property {StoreMeta} meta
 * @property {number} longitude
 * @property {string} [mall_name]
 * @property {string} store_email
 * @property {string} city
 * @property {string} [code]
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef Weight
 * @property {number} [shipping]
 * @property {string} [unit]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ReturnConfig
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef Article
 * @property {Object} [child_details]
 * @property {Object} [esp_modified]
 * @property {Object} [a_set]
 * @property {string} seller_identifier
 * @property {string} uid
 * @property {Object} [raw_meta]
 * @property {Weight} [weight]
 * @property {string} size
 * @property {Dimensions} [dimensions]
 * @property {ReturnConfig} [return_config]
 * @property {Identifier} identifiers
 * @property {boolean} [is_set]
 * @property {string} _id
 * @property {string} [code]
 */

/**
 * @typedef Attributes
 * @property {string} [marketer_address]
 * @property {string} [primary_color_hex]
 * @property {string} [primary_material]
 * @property {string} [brand_name]
 * @property {string} [marketer_name]
 * @property {string} [primary_color]
 * @property {string} [name]
 * @property {string[]} [gender]
 * @property {string} [essential]
 */

/**
 * @typedef Item
 * @property {string} [branch_url]
 * @property {boolean} [can_return]
 * @property {number} brand_id
 * @property {string} [last_updated_at]
 * @property {string} size
 * @property {number} [l2_category_id]
 * @property {string} [gender]
 * @property {string} slug_key
 * @property {string} [webstore_product_url]
 * @property {number} [l1_category_id]
 * @property {string} [l3_category_name]
 * @property {string} brand
 * @property {Attributes} attributes
 * @property {string} name
 * @property {number} item_id
 * @property {string[]} image
 * @property {string[]} [l2_category]
 * @property {Object} [meta]
 * @property {string[]} [l1_category]
 * @property {boolean} [can_cancel]
 * @property {number} [l3_category]
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {string} [code]
 */

/**
 * @typedef Brand
 * @property {string} [start_date]
 * @property {string} company
 * @property {boolean} [is_virtual_invoice]
 * @property {string} [logo]
 * @property {number} [created_on]
 * @property {boolean} [credit_note_allowed]
 * @property {string} [script_last_ran]
 * @property {string} [invoice_prefix]
 * @property {number} [credit_note_expiry_days]
 * @property {string} brand_name
 * @property {string} [pickup_location]
 * @property {number} [modified_on]
 * @property {number} brand_id
 */

/**
 * @typedef BagGSTDetails
 * @property {string} gst_tag
 * @property {number} igst_tax_percentage
 * @property {number} gst_tax_percentage
 * @property {string} hsn_code_id
 * @property {number} value_of_good
 * @property {string} hsn_code
 * @property {string} cgst_gst_fee
 * @property {string} igst_gst_fee
 * @property {number} tax_collected_at_source
 * @property {number} sgst_tax_percentage
 * @property {number} brand_calculated_amount
 * @property {number} gst_fee
 * @property {boolean} [is_default_hsn_code]
 * @property {string} [gstin_code]
 * @property {string} sgst_gst_fee
 * @property {number} cgst_tax_percentage
 */

/**
 * @typedef B2BPODetails
 * @property {string} [docker_number]
 * @property {number} [po_line_amount]
 * @property {boolean} [partial_can_ret]
 * @property {number} [item_base_price]
 * @property {number} [po_tax_amount]
 * @property {number} [total_gst_percentage]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} enable_tracking
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_active
 * @property {boolean} is_returnable
 */

/**
 * @typedef Dates
 * @property {string} [order_created]
 * @property {Object} [delivery_date]
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {number} [line_number]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {Store} [ordering_store]
 * @property {BagStatusHistory} current_operational_status
 * @property {number[]} [original_bag_list]
 * @property {Prices} prices
 * @property {ArticleDetails} [article_details]
 * @property {string} journey_type
 * @property {number} [no_of_bags_order]
 * @property {string} [seller_identifier]
 * @property {string} [entity_type]
 * @property {string} [order_integration_id]
 * @property {string} [b_type]
 * @property {number} [quantity]
 * @property {Object[]} [applied_promos]
 * @property {string[]} [tags]
 * @property {Article} article
 * @property {Object} [parent_promo_bags]
 * @property {Item} item
 * @property {Object} [restore_promos]
 * @property {string} [display_name]
 * @property {Object[]} [reasons]
 * @property {Brand} brand
 * @property {BagStatusHistory[]} bag_status
 * @property {string} [identifier]
 * @property {string} [operational_status]
 * @property {number} b_id
 * @property {BagGSTDetails} gst_details
 * @property {BagMeta} [meta]
 * @property {number} [bag_update_time]
 * @property {BagReturnableCancelableStatus} status
 * @property {Object} [qc_required]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {boolean} [restore_coupon]
 * @property {Dates} [dates]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {BagStatusHistory} current_status
 * @property {BagStatusHistory} [bag_status_history]
 * @property {string} [shipment_id]
 */

/**
 * @typedef ErrorResponse
 * @property {string} error
 * @property {string} message
 */

/**
 * @typedef Page1
 * @property {number} size
 * @property {string} page_type
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {number} current
 */

/**
 * @typedef GetBagsPlatformResponse
 * @property {BagDetailsPlatformResponse[]} items
 * @property {Page1} page
 */

/**
 * @typedef GeneratePosOrderReceiptResponse
 * @property {string} [order_id]
 * @property {string} [invoice_receipt]
 * @property {string} [payment_receipt]
 * @property {boolean} [success]
 */

/**
 * @typedef InvalidateShipmentCachePayload
 * @property {string[]} shipment_ids
 */

/**
 * @typedef InvalidateShipmentCacheNestedResponse
 * @property {string} [shipment_id]
 * @property {string} [message]
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
 * @property {string} [error_trace]
 * @property {number} status
 */

/**
 * @typedef StoreReassign
 * @property {number} store_id
 * @property {string} [set_id]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_bag_id]
 * @property {number[]} [reason_ids]
 * @property {string} [item_id]
 * @property {string} [mongo_article_id]
 * @property {string} [fynd_order_id]
 * @property {string} [affiliate_order_id]
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
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} reason_text
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {Entities[]} entities
 * @property {string} action_type
 * @property {string} entity_type
 * @property {string} action
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
 * @property {number} [bag_id]
 * @property {string} [affiliate_bag_id]
 */

/**
 * @typedef CheckResponse
 * @property {string} [shipment_id]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 * @property {boolean} [lock_status]
 * @property {boolean} [is_shipment_locked]
 * @property {boolean} [is_bag_locked]
 * @property {OriginalFilter} [original_filter]
 * @property {Bags[]} [bags]
 * @property {string} [status]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {boolean} [success]
 * @property {CheckResponse[]} [check_response]
 * @property {string} [message]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [to_datetime]
 * @property {number} id
 * @property {string} [from_datetime]
 * @property {string} [platform_id]
 * @property {string} [description]
 * @property {string} [logo_url]
 * @property {string} [created_at]
 * @property {number} [company_id]
 * @property {string} [platform_name]
 * @property {string} [title]
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
 * @typedef Products
 * @property {number} [quantity]
 * @property {string} [identifier]
 * @property {number} [line_number]
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
 * @property {number} [quantity]
 * @property {string} [identifier]
 * @property {number} [line_number]
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
 * @property {Products[]} [products]
 * @property {string} identifier
 * @property {DataUpdates} [data_updates]
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
 * @property {boolean} [force_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [task]
 */

/**
 * @typedef ShipmentsResponse
 * @property {string} [message]
 * @property {string} [identifier]
 * @property {string} [stack_trace]
 * @property {string} [code]
 * @property {Object} [final_state]
 * @property {number} [status]
 * @property {Object} [meta]
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
 * @typedef OrderUser
 * @property {string} [address2]
 * @property {string} last_name
 * @property {number} phone
 * @property {string} pincode
 * @property {string} country
 * @property {string} [address1]
 * @property {string} first_name
 * @property {string} email
 * @property {number} mobile
 * @property {string} state
 * @property {string} city
 */

/**
 * @typedef OrderPriority
 * @property {string} [fulfilment_priority_text]
 * @property {number} [fulfilment_priority]
 * @property {string} [affiliate_priority_code]
 */

/**
 * @typedef UserData
 * @property {OrderUser} [billing_user]
 * @property {OrderUser} [shipping_user]
 */

/**
 * @typedef ArticleDetails1
 * @property {Object} category
 * @property {number} quantity
 * @property {Object} weight
 * @property {Object} dimension
 * @property {Object} attributes
 * @property {string} _id
 * @property {number} brand_id
 */

/**
 * @typedef LocationDetails
 * @property {ArticleDetails1[]} articles
 * @property {string} fulfillment_type
 * @property {number} fulfillment_id
 */

/**
 * @typedef ShipmentDetails
 * @property {number} shipments
 * @property {number} fulfillment_id
 * @property {string} affiliate_shipment_id
 * @property {number} [dp_id]
 * @property {Object} [meta]
 * @property {string} [box_type]
 * @property {ArticleDetails1[]} articles
 */

/**
 * @typedef ShipmentConfig
 * @property {LocationDetails} [location_details]
 * @property {string} to_pincode
 * @property {string} payment_mode
 * @property {string} identifier
 * @property {ShipmentDetails[]} shipment
 * @property {string} source
 * @property {string} action
 * @property {string} journey
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [label]
 * @property {string} [invoice]
 */

/**
 * @typedef AffiliateBag
 * @property {number} store_id
 * @property {string} seller_identifier
 * @property {number} avl_qty
 * @property {number} amount_paid
 * @property {number} discount
 * @property {number} price_effective
 * @property {string} fynd_store_id
 * @property {string} hsn_code_id
 * @property {string} modified_on
 * @property {number} unit_price
 * @property {string} affiliate_store_id
 * @property {string} item_size
 * @property {string} sku
 * @property {number} transfer_price
 * @property {number} company_id
 * @property {number} item_id
 * @property {number} delivery_charge
 * @property {MarketPlacePdf} [pdf_links]
 * @property {Object} affiliate_meta
 * @property {Object} identifier
 * @property {number} quantity
 * @property {string} _id
 * @property {number} price_marked
 */

/**
 * @typedef OrderInfo
 * @property {OrderUser} billing_address
 * @property {OrderPriority} [order_priority]
 * @property {string} payment_mode
 * @property {number} order_value
 * @property {UserData} user
 * @property {OrderUser} shipping_address
 * @property {Object} items
 * @property {number} delivery_charges
 * @property {ShipmentData} [shipment]
 * @property {string} [coupon]
 * @property {AffiliateBag[]} bags
 * @property {Object} [payment]
 * @property {number} cod_charges
 * @property {string} [affiliate_order_id]
 * @property {number} discount
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
 * @property {string} token
 * @property {string} id
 * @property {string} secret
 * @property {string} updated_at
 * @property {string} [description]
 * @property {string} created_at
 * @property {string} name
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} owner
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
 * @typedef AffiliateInventoryArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 */

/**
 * @typedef AffiliateInventoryOrderConfig
 * @property {boolean} [force_reassignment]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryPaymentConfig} [payment]
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
 * @property {string} [bag_end_state]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [store_lookup]
 * @property {Affiliate} affiliate
 * @property {boolean} [create_user]
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
 * @property {string} message
 * @property {string} [ticket_url]
 * @property {string} type
 * @property {string} [l2_detail]
 * @property {number} [bag_id]
 * @property {string} user
 * @property {string} createdat
 * @property {string} [l1_detail]
 * @property {string} [l3_detail]
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
 * @typedef SmsDataPayload
 * @property {number} shipment_id
 * @property {string} message
 * @property {string} payment_mode
 * @property {number} amount_paid
 * @property {string} customer_name
 * @property {string} country_code
 * @property {number} phone_number
 * @property {string} order_id
 * @property {string} brand_name
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
 * @property {string} [state_manager_used]
 * @property {number} [kafka_emission_status]
 */

/**
 * @typedef ShipmentDetail
 * @property {string} [shipment_id]
 * @property {number[]} [bag_list]
 * @property {string} [remarks]
 * @property {number} id
 * @property {Meta1} meta
 * @property {string} [status]
 */

/**
 * @typedef OrderStatusData
 * @property {OrderDetails} order_details
 * @property {ShipmentDetail[]} [shipment_details]
 * @property {string[]} [errors]
 */

/**
 * @typedef OrderStatusResult
 * @property {OrderStatusData[]} [result]
 * @property {string} success
 */

/**
 * @typedef ManualAssignDPToShipment
 * @property {number} dp_id
 * @property {string} order_type
 * @property {string[]} [shipment_ids]
 * @property {string} qc_required
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */

/**
 * @typedef Tax
 * @property {Object[]} [breakup]
 * @property {string} name
 * @property {number} rate
 * @property {Object} amount
 */

/**
 * @typedef Charge
 * @property {string} type
 * @property {Tax} [tax]
 * @property {string} name
 * @property {string} [code]
 * @property {Object} amount
 */

/**
 * @typedef LineItem
 * @property {Charge[]} [charges]
 * @property {string} seller_identifier
 * @property {number} [quantity]
 * @property {string} [custom_messasge]
 * @property {Object} [meta]
 * @property {string} [external_line_id]
 */

/**
 * @typedef ProcessingDates
 * @property {Object} [customer_pickup_slot]
 * @property {string} [dispatch_after_date]
 * @property {string} [pack_by_date]
 * @property {string} [dispatch_by_date]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [confirm_by_date]
 */

/**
 * @typedef Shipment
 * @property {LineItem[]} line_items
 * @property {ProcessingDates} [processing_dates]
 * @property {number} location_id
 * @property {string} [external_shipment_id]
 * @property {Object} [meta]
 * @property {number} [priority]
 */

/**
 * @typedef BillingInfo
 * @property {string} [country_code]
 * @property {string} address1
 * @property {string} [floor_no]
 * @property {string} [house_no]
 * @property {string} [external_customer_code]
 * @property {string} [alternate_mobile_number]
 * @property {string} [address2]
 * @property {string} pincode
 * @property {string} [alternate_email]
 * @property {string} country
 * @property {string} first_name
 * @property {string} [state_code]
 * @property {string} [middle_name]
 * @property {string} state
 * @property {string} city
 * @property {string} [last_name]
 * @property {string} primary_email
 * @property {string} primary_mobile_number
 * @property {string} [gender]
 * @property {string} [customer_code]
 * @property {string} [title]
 */

/**
 * @typedef PaymentMethod
 * @property {string} refund_by
 * @property {string} mode
 * @property {string} collect_by
 * @property {string} name
 * @property {Object} [meta]
 * @property {number} amount
 * @property {Object} [transaction_data]
 */

/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */

/**
 * @typedef ShippingInfo
 * @property {string} [shipping_type]
 * @property {string} [country_code]
 * @property {string} address1
 * @property {string} [floor_no]
 * @property {string} [house_no]
 * @property {Object} [geo_location]
 * @property {string} [external_customer_code]
 * @property {string} [alternate_mobile_number]
 * @property {string} [address2]
 * @property {string} pincode
 * @property {string} [alternate_email]
 * @property {string} country
 * @property {string} [address_type]
 * @property {Object[]} [slot]
 * @property {string} first_name
 * @property {string} [state_code]
 * @property {string} [middle_name]
 * @property {string} state
 * @property {string} city
 * @property {string} [last_name]
 * @property {string} primary_email
 * @property {string} primary_mobile_number
 * @property {string} [gender]
 * @property {string} [customer_code]
 * @property {string} [landmark]
 * @property {string} [title]
 */

/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 */

/**
 * @typedef CreateOrderAPI
 * @property {Charge[]} [charges]
 * @property {Object} [currency_info]
 * @property {Shipment[]} shipments
 * @property {BillingInfo} billing_info
 * @property {PaymentInfo} payment_info
 * @property {string} [external_creation_date]
 * @property {ShippingInfo} shipping_info
 * @property {TaxInfo} [tax_info]
 * @property {Object} [meta]
 * @property {string} [external_order_id]
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} message
 * @property {Object} [info]
 * @property {string} [stack_trace]
 * @property {string} [code]
 * @property {number} status
 * @property {string} [meta]
 * @property {string} [exception]
 * @property {string} [request_id]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [mode]
 * @property {string} [refund_by]
 * @property {string} [collect_by]
 */

/**
 * @typedef CreateChannelPaymentInfo
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 * @property {PaymentMethods[]} [payment_methods]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
 */

/**
 * @typedef CreateChannelConfig
 * @property {boolean} [location_reassignment]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {DpConfiguration} [dp_configuration]
 * @property {string} [shipment_assignment]
 * @property {Object} [logo_url]
 * @property {string[]} [lock_states]
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
 * @property {boolean} [is_upserted]
 * @property {boolean} [acknowledged]
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
 * @property {FyndOrderIdList[]} [order_details]
 * @property {number} mobile
 * @property {string} end_date
 * @property {string} start_date
 */

/**
 * @typedef GetSearchWordsData
 * @property {Object} [result]
 * @property {string} [app_id]
 * @property {string} [uid]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
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
 * @typedef ErrorResponse
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [code]
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
 * @property {SearchKeywordResult} result
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 */

/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {string} [app_id]
 * @property {string} [uid]
 * @property {Object[]} [results]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AutocompletePageAction
 * @property {string} [type]
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [url]
 */

/**
 * @typedef AutocompleteAction
 * @property {string} [type]
 * @property {AutocompletePageAction} [page]
 */

/**
 * @typedef Media
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */

/**
 * @typedef AutocompleteResult
 * @property {string} [display]
 * @property {AutocompleteAction} [action]
 * @property {Media} [logo]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {AutocompleteResult[]} [results]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
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
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {number} max_quantity
 * @property {number} min_quantity
 * @property {number} product_uid
 * @property {boolean} [allow_remove]
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 * @property {Object} [created_by]
 * @property {string} name
 * @property {string} [created_on]
 * @property {Object} [meta]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string} [logo]
 * @property {ProductBundleItem[]} products
 * @property {number} [company_id]
 * @property {string} choice
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} slug
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductBundleRequest
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 * @property {Object} [created_by]
 * @property {string} name
 * @property {string} [created_on]
 * @property {Object} [meta]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string} [logo]
 * @property {ProductBundleItem[]} products
 * @property {number} [company_id]
 * @property {string} choice
 * @property {string} [modified_on]
 * @property {string} slug
 */

/**
 * @typedef Price
 * @property {number} [max_effective]
 * @property {string} [currency]
 * @property {number} [min_marked]
 * @property {number} [min_effective]
 * @property {number} [max_marked]
 */

/**
 * @typedef Size
 * @property {string} [display]
 * @property {number} [quantity]
 * @property {string} [value]
 * @property {boolean} [is_available]
 */

/**
 * @typedef LimitedProductData
 * @property {string} [slug]
 * @property {string} [short_description]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string[]} [sizes]
 * @property {string} [item_code]
 * @property {Object} [attributes]
 * @property {string} [country_of_origin]
 * @property {Object} [identifier]
 * @property {Object} [price]
 * @property {number} [quantity]
 * @property {string[]} [images]
 */

/**
 * @typedef GetProducts
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {Price} [price]
 * @property {number} [max_quantity]
 * @property {Size[]} [sizes]
 * @property {LimitedProductData} [product_details]
 * @property {number} [min_quantity]
 * @property {number} [product_uid]
 * @property {boolean} [allow_remove]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 * @property {string} [name]
 * @property {Object} [meta]
 * @property {boolean} [is_active]
 * @property {string} [logo]
 * @property {GetProducts[]} [products]
 * @property {number} [company_id]
 * @property {string} [choice]
 * @property {string} [slug]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 * @property {string} name
 * @property {Object} [meta]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string} [logo]
 * @property {ProductBundleItem[]} products
 * @property {number} [company_id]
 * @property {string} choice
 * @property {string} [modified_on]
 * @property {string} slug
 */

/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
 */

/**
 * @typedef Meta
 * @property {string} [unit]
 * @property {Object[]} [values]
 * @property {Object} [headers]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {string} [description]
 * @property {string} [image]
 * @property {Guide} [guide]
 * @property {string} name
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} title
 * @property {string} [subtitle]
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {boolean} [active]
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} [tag]
 */

/**
 * @typedef SuccessResponse
 * @property {boolean} [success]
 */

/**
 * @typedef SizeGuideResponse
 * @property {Object} [guide]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {Object} [modified_by]
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {number} [company_id]
 * @property {number} [brand_id]
 * @property {boolean} [active]
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} [tag]
 */

/**
 * @typedef MOQData
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 * @property {number} [minimum]
 */

/**
 * @typedef SEOData
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 * @property {MOQData} [moq]
 * @property {boolean} [is_gift]
 * @property {SEOData} [seo]
 */

/**
 * @typedef MetaFields
 * @property {Object} value
 * @property {Object} key
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 * @property {number} [minimum]
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 * @property {MetaFields[]} [_custom_meta]
 * @property {ApplicationItemMOQ} [moq]
 * @property {boolean} [is_gift]
 * @property {ApplicationItemSEO} [seo]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef SuccessResponse1
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} data
 * @property {Object[]} [condition]
 * @property {Object[]} [values]
 */

/**
 * @typedef PageResponseType
 * @property {number} next
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} total_count
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
 * @property {number} priority
 * @property {string} name
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {string} display_type
 * @property {string} [slug]
 * @property {string} [unit]
 * @property {string} [key]
 */

/**
 * @typedef AppConfigurationDetail
 * @property {string[]} [template_slugs]
 * @property {number} priority
 * @property {boolean} is_default
 * @property {string} app_id
 * @property {string} [name]
 * @property {boolean} is_active
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} [logo]
 * @property {string} slug
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {number} priority
 * @property {boolean} is_default
 * @property {string} app_id
 * @property {string} [name]
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {string} default_key
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
 * @property {Object} [similar]
 * @property {Object} [detail]
 * @property {Object} [compare]
 * @property {Object} [variant]
 */

/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {MetaDataListingResponse} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {number} priority
 * @property {string} [name]
 * @property {boolean} is_active
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
 * @property {string} [display]
 * @property {number} [start]
 * @property {number} [end]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {string} [sort]
 * @property {Object[]} [map_values]
 * @property {string} [value]
 * @property {Object} [map]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {string} [condition]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} type
 * @property {number} priority
 * @property {string} [name]
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {string} [display_name]
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} key
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
 * @typedef ConfigurationProductConfig
 * @property {number} priority
 * @property {string} [title]
 * @property {boolean} is_active
 * @property {string} [subtitle]
 * @property {string} [logo]
 * @property {ProductSize} [size]
 * @property {string} key
 */

/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {number} priority
 * @property {string} name
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {string} display_type
 * @property {ProductSize} size
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
 * @property {string} [config_id]
 * @property {string} [type]
 * @property {Object} [created_by]
 * @property {string} app_id
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} config_type
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {ConfigurationListing} [listing]
 * @property {ConfigurationProduct} [product]
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef AppConfiguration
 * @property {string} [config_id]
 * @property {string} [type]
 * @property {Object} [created_by]
 * @property {string} app_id
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} config_type
 * @property {string} [modified_on]
 * @property {ConfigurationListing} [listing]
 * @property {ConfigurationProduct} [product]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [sort]
 * @property {Object} [filter]
 */

/**
 * @typedef EntityConfiguration
 * @property {string} [config_id]
 * @property {string} app_id
 * @property {string} config_type
 * @property {string} [id]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ProductSortOn
 * @property {string} [value]
 * @property {string} [name]
 * @property {boolean} [is_selected]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} [kind]
 * @property {string} name
 * @property {string[]} [operators]
 * @property {string} [logo]
 * @property {string} display
 */

/**
 * @typedef ProductFiltersValue
 * @property {number} [selected_max]
 * @property {number} [count]
 * @property {Object} value
 * @property {boolean} is_selected
 * @property {string} [query_format]
 * @property {number} [min]
 * @property {number} [selected_min]
 * @property {number} [max]
 * @property {string} [currency_symbol]
 * @property {string} display
 * @property {string} [currency_code]
 * @property {string} [display_format]
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
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {Object[]} value
 * @property {string} op
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
 * @typedef Media1
 * @property {string} [type]
 * @property {string} url
 * @property {Object} [meta]
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
 * @typedef GetCollectionDetailNest
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {string} [description]
 * @property {string} [type]
 * @property {Object} [cron]
 * @property {Object} [_schedule]
 * @property {Action} [action]
 * @property {string} [name]
 * @property {string} [uid]
 * @property {Object} [meta]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [slug]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_active]
 * @property {string[]} [tag]
 * @property {string} [app_id]
 * @property {Media1} [logo]
 * @property {Object} [badge]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef NextSchedule
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef CollectionSchedule
 * @property {string} [cron]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {string} [start]
 * @property {NextSchedule[]} [next_schedule]
 */

/**
 * @typedef UserInfo
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 */

/**
 * @typedef CollectionImage
 * @property {string} aspect_ratio
 * @property {string} url
 */

/**
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} portrait
 * @property {CollectionImage} landscape
 */

/**
 * @typedef CreateCollection
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {boolean} [published]
 * @property {string[]} [tags]
 * @property {string} type
 * @property {string} [description]
 * @property {CollectionSchedule} [_schedule]
 * @property {string} name
 * @property {UserInfo} [modified_by]
 * @property {Object} [meta]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [is_visible]
 * @property {SeoDetail} [seo]
 * @property {string} slug
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {UserInfo} [created_by]
 * @property {string} app_id
 * @property {Object} [_locale_language]
 * @property {CollectionImage} logo
 * @property {CollectionBadge} [badge]
 * @property {CollectionBanner} banners
 * @property {string} [sort_on]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {string} [description]
 * @property {string} [type]
 * @property {Object} [cron]
 * @property {Object} [_schedule]
 * @property {string} [name]
 * @property {Object} [meta]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [slug]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_active]
 * @property {string[]} [tag]
 * @property {string} [app_id]
 * @property {BannerImage} [logo]
 * @property {Object} [badge]
 * @property {ImageUrls} [banners]
 * @property {string} [sort_on]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {string} [description]
 * @property {string} [type]
 * @property {Object} [cron]
 * @property {Object} [_schedule]
 * @property {string} [name]
 * @property {string} [uid]
 * @property {Object} [meta]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [slug]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_active]
 * @property {string[]} [tag]
 * @property {string} [app_id]
 * @property {Media1} [logo]
 * @property {Object} [badge]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef UpdateCollection
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {boolean} [published]
 * @property {string[]} [tags]
 * @property {string} [description]
 * @property {string} [type]
 * @property {CollectionSchedule} [_schedule]
 * @property {string} [name]
 * @property {UserInfo} [modified_by]
 * @property {Object} [meta]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [is_visible]
 * @property {SeoDetail} [seo]
 * @property {string} [slug]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {CollectionImage} [logo]
 * @property {CollectionBadge} [badge]
 * @property {CollectionBanner} [banners]
 * @property {string} [sort_on]
 */

/**
 * @typedef ProductBrand
 * @property {number} [uid]
 * @property {Action} [action]
 * @property {string} [name]
 * @property {Media1} [logo]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [type]
 * @property {string} [value]
 * @property {string} [key]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {string} [title]
 * @property {ProductDetailAttribute[]} [details]
 */

/**
 * @typedef Price1
 * @property {string} [currency_symbol]
 * @property {number} [min]
 * @property {string} [currency_code]
 * @property {number} [max]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [marked]
 * @property {Price1} [effective]
 */

/**
 * @typedef ProductListingDetail
 * @property {string[]} [tryouts]
 * @property {string} [discount]
 * @property {ProductBrand} [brand]
 * @property {number} [rating_count]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [product_online_date]
 * @property {string} [type]
 * @property {string} [description]
 * @property {string} [short_description]
 * @property {Object} [promo_meta]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {Media1[]} [medias]
 * @property {Object} [teaser_tag]
 * @property {boolean} [sellable]
 * @property {string} slug
 * @property {string} [color]
 * @property {string} [image_nature]
 * @property {boolean} [has_variant]
 * @property {Object} [attributes]
 * @property {string} [item_type]
 * @property {string[]} [similars]
 * @property {number} [rating]
 * @property {ProductListingPrice} [price]
 * @property {string} [item_code]
 * @property {string[]} [highlights]
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
 * @property {string} [action]
 * @property {number} [item_id]
 */

/**
 * @typedef CollectionItemRequest
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 * @property {ItemQueryForUserCollection[]} [item]
 */

/**
 * @typedef UpdatedResponse
 * @property {string} [message]
 * @property {number[]} [items_not_updated]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [count]
 * @property {number} [sellable_count]
 * @property {number} [out_of_stock_count]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [available_articles]
 * @property {number} [article_freshness]
 * @property {string} [name]
 * @property {number} [total_articles]
 * @property {number} [available_sizes]
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
 * @property {number[]} [brand_ids]
 * @property {string} opt_level
 * @property {number[]} [store_ids]
 * @property {string} [platform]
 * @property {boolean} [enabled]
 * @property {number} [company_id]
 */

/**
 * @typedef CompanyOptIn
 * @property {number[]} brand_ids
 * @property {string} opt_level
 * @property {number[]} store_ids
 * @property {number} created_on
 * @property {Object} [modified_by]
 * @property {string} platform
 * @property {boolean} enabled
 * @property {number} company_id
 * @property {number} modified_on
 * @property {Object} [created_by]
 */

/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [name]
 * @property {string} [business_type]
 * @property {number} [uid]
 * @property {string} [company_type]
 */

/**
 * @typedef CompanyBrandDetail
 * @property {string} [brand_name]
 * @property {number} [total_article]
 * @property {number} [company_id]
 * @property {number} [brand_id]
 */

/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef OptinCompanyMetrics
 * @property {number} [store]
 * @property {number} [brand]
 * @property {string} [company]
 */

/**
 * @typedef StoreDetail
 * @property {Object} [timing]
 * @property {Object[]} [documents]
 * @property {string} [display_name]
 * @property {string} [store_type]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [created_on]
 * @property {Object[]} [additional_contacts]
 * @property {string} [store_code]
 * @property {number} [company_id]
 * @property {Object} [manager]
 * @property {string} [modified_on]
 * @property {Object} [address]
 */

/**
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterFilter
 * @property {boolean} indexing
 * @property {string[]} [depends_on]
 * @property {number} [priority]
 */

/**
 * @typedef AttributeSchemaRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef AttributeMaster
 * @property {string} type
 * @property {string[]} [allowed_values]
 * @property {AttributeSchemaRange} [range]
 * @property {boolean} [multi]
 * @property {string} [format]
 * @property {boolean} [mandatory]
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
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */

/**
 * @typedef GenderDetail
 * @property {string} [description]
 * @property {AttributeMasterFilter} [filters]
 * @property {AttributeMaster} [schema]
 * @property {string} [name]
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [logo]
 * @property {boolean} [is_nested]
 * @property {string} [id]
 * @property {AttributeMasterDetails} [details]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [slug]
 * @property {string[]} [departments]
 */

/**
 * @typedef CategoriesResponse
 * @property {string} [template_slug]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [slug_key]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {CategoriesResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PTErrorResponse
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 * @property {Object} [errors]
 * @property {string} [code]
 */

/**
 * @typedef UserSerializer
 * @property {string} [username]
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [_id]
 * @property {string} [contact]
 */

/**
 * @typedef GetDepartment
 * @property {number} [priority_order]
 * @property {UserSerializer} [created_by]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string[]} [synonyms]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {number} [page_size]
 * @property {UserSerializer} [modified_by]
 * @property {string} [logo]
 * @property {string} [item_type]
 * @property {number} [page_no]
 * @property {string} [search]
 * @property {string} [slug]
 */

/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 * @property {Object} [errors]
 * @property {string} [code]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string} [_cls]
 * @property {number} priority_order
 * @property {Object} [platforms]
 * @property {string} name
 * @property {number} [uid]
 * @property {string[]} [synonyms]
 * @property {boolean} [is_active]
 * @property {string} logo
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {string} [slug]
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
 * @property {boolean} [super_user]
 * @property {string} [contact]
 * @property {string} username
 * @property {string} user_id
 */

/**
 * @typedef DepartmentModel
 * @property {Object} [slug]
 * @property {Object} [_cls]
 * @property {number} priority_order
 * @property {UserDetail} [verified_by]
 * @property {string} created_on
 * @property {string} [verified_on]
 * @property {UserDetail} [modified_by]
 * @property {number} [uid]
 * @property {Object} name
 * @property {boolean} [is_active]
 * @property {Object[]} [synonyms]
 * @property {string} logo
 * @property {Object} [_id]
 * @property {string} modified_on
 * @property {UserDetail} [created_by]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef ProductTemplate
 * @property {string} [description]
 * @property {boolean} is_physical
 * @property {Object} [created_by]
 * @property {string} [name]
 * @property {boolean} is_expirable
 * @property {Object} [modified_by]
 * @property {boolean} [is_active]
 * @property {string} [created_on]
 * @property {string[]} [attributes]
 * @property {string} [logo]
 * @property {string[]} [categories]
 * @property {string} [modified_on]
 * @property {string} slug
 * @property {boolean} [is_archived]
 * @property {string[]} [departments]
 * @property {string} [tag]
 */

/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Properties
 * @property {Object} [size_guide]
 * @property {Object} [multi_size]
 * @property {Object} [product_group_tag]
 * @property {Object} [hsn_code]
 * @property {Object} [is_dependent]
 * @property {Object} [tags]
 * @property {Object} [media]
 * @property {Object} [description]
 * @property {Object} [category_slug]
 * @property {Object} [short_description]
 * @property {Object} [name]
 * @property {Object} [currency]
 * @property {Object} [teaser_tag]
 * @property {Object} [product_publish]
 * @property {Object} [slug]
 * @property {Object} [trader]
 * @property {Object} [command]
 * @property {Object} [brand_uid]
 * @property {Object} [sizes]
 * @property {Object} [is_active]
 * @property {Object} [return_config]
 * @property {Object} [item_type]
 * @property {Object} [country_of_origin]
 * @property {Object} [custom_order]
 * @property {Object} [trader_type]
 * @property {Object} [variants]
 * @property {Object} [item_code]
 * @property {Object} [no_of_boxes]
 * @property {Object} [highlights]
 */

/**
 * @typedef GlobalValidation
 * @property {string} [description]
 * @property {string} [type]
 * @property {Properties} [properties]
 * @property {Object} [definitions]
 * @property {string} [title]
 * @property {string[]} [required]
 */

/**
 * @typedef TemplateValidationData
 * @property {GlobalValidation} [global_validation]
 * @property {Object} [template_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {string} [description]
 * @property {boolean} is_physical
 * @property {string} [name]
 * @property {boolean} is_expirable
 * @property {boolean} [is_active]
 * @property {string[]} [attributes]
 * @property {string} [logo]
 * @property {string[]} [categories]
 * @property {string} [id]
 * @property {string} slug
 * @property {boolean} [is_archived]
 * @property {string[]} [departments]
 * @property {string} [tag]
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
 * @typedef ProductDownloadItemsData
 * @property {string} [type]
 * @property {string[]} [templates]
 * @property {string[]} [brand]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {Object} [template_tags]
 * @property {string} [completed_on]
 * @property {number} [seller_id]
 * @property {string} [status]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [trigger_on]
 * @property {string} [id]
 * @property {string} [task_id]
 * @property {VerifiedBy} [created_by]
 * @property {string} [url]
 */

/**
 * @typedef ProductDownloadsResponse
 * @property {ProductDownloadsItems} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductConfigurationDownloads
 * @property {Object[]} [data]
 * @property {boolean} [multivalue]
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
 * @property {CategoryMappingValues} [google]
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [ajio]
 */

/**
 * @typedef Media2
 * @property {string} portrait
 * @property {string} logo
 * @property {string} landscape
 */

/**
 * @typedef Category
 * @property {number} [priority]
 * @property {Hierarchy[]} [hierarchy]
 * @property {Object} [created_by]
 * @property {string} name
 * @property {number} [uid]
 * @property {string[]} [synonyms]
 * @property {string[]} [tryouts]
 * @property {boolean} is_active
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} [slug]
 * @property {CategoryMapping} [marketplaces]
 * @property {number} level
 * @property {number[]} departments
 * @property {Media2} [media]
 */

/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CategoryRequestBody
 * @property {number} [priority]
 * @property {Hierarchy[]} [hierarchy]
 * @property {string} name
 * @property {string[]} [synonyms]
 * @property {string[]} [tryouts]
 * @property {boolean} is_active
 * @property {string} [slug]
 * @property {CategoryMapping} [marketplaces]
 * @property {number} level
 * @property {number[]} departments
 * @property {Media2} [media]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {string} [message]
 * @property {number} [uid]
 */

/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */

/**
 * @typedef CategoryUpdateResponse
 * @property {string} [message]
 * @property {boolean} [success]
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
 * @typedef ProductPublish
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */

/**
 * @typedef Trader
 * @property {string} [type]
 * @property {Object} name
 * @property {string[]} [address]
 */

/**
 * @typedef ReturnConfigResponse
 * @property {number} [time]
 * @property {string} [unit]
 * @property {boolean} [returnable]
 */

/**
 * @typedef NetQuantityResponse
 * @property {number} [value]
 * @property {string} [unit]
 */

/**
 * @typedef Image
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [secure_url]
 */

/**
 * @typedef ProductSchemaV2
 * @property {string} [size_guide]
 * @property {boolean} [multi_size]
 * @property {boolean} [is_expirable]
 * @property {string[]} [product_group_tag]
 * @property {boolean} [is_dependent]
 * @property {string} [hsn_code]
 * @property {string[]} [tags]
 * @property {Brand} [brand]
 * @property {number[]} [departments]
 * @property {string[]} [highlights]
 * @property {string} [description]
 * @property {string} [category_slug]
 * @property {Media1[]} [media]
 * @property {Object} [variant_group]
 * @property {string} [short_description]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [currency]
 * @property {Object} [modified_by]
 * @property {boolean} [is_image_less_product]
 * @property {string} [pending]
 * @property {string} [verified_on]
 * @property {Object} [teaser_tag]
 * @property {ProductPublish} [product_publish]
 * @property {boolean} [is_set]
 * @property {string} [id]
 * @property {string} [slug]
 * @property {Object} [tax_identifier]
 * @property {string} [color]
 * @property {string} [image_nature]
 * @property {Trader[]} [trader]
 * @property {number} [category_uid]
 * @property {string[]} [all_identifiers]
 * @property {number} [brand_uid]
 * @property {string[]} [l3_mapping]
 * @property {number[]} [all_company_ids]
 * @property {VerifiedBy} [verified_by]
 * @property {Object} [category]
 * @property {string} [created_on]
 * @property {Object[]} [sizes]
 * @property {boolean} [is_active]
 * @property {ReturnConfigResponse} [return_config]
 * @property {string} [item_type]
 * @property {string} [country_of_origin]
 * @property {Object} [custom_order]
 * @property {Object} [attributes]
 * @property {Object} [moq]
 * @property {Object} [_custom_json]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {string} [modified_on]
 * @property {Image[]} [images]
 * @property {Object} [created_by]
 * @property {number} [company_id]
 * @property {string} [template_tag]
 * @property {string} [primary_color]
 * @property {string} [stage]
 * @property {Object} [variants]
 * @property {Object} [variant_media]
 * @property {string} [item_code]
 * @property {number} [no_of_boxes]
 * @property {Object[]} [all_sizes]
 * @property {boolean} [is_physical]
 */

/**
 * @typedef ProductListingResponseV2
 * @property {ProductSchemaV2[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TeaserTag
 * @property {string} [url]
 * @property {string} [tag]
 */

/**
 * @typedef ProductPublish1
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */

/**
 * @typedef ReturnConfig
 * @property {number} time
 * @property {string} unit
 * @property {boolean} returnable
 */

/**
 * @typedef CustomOrder
 * @property {boolean} [is_custom_order]
 * @property {string} [manufacturing_time_unit]
 * @property {number} [manufacturing_time]
 */

/**
 * @typedef NetQuantity
 * @property {number} [value]
 * @property {Object} [unit]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code_id]
 * @property {string} [hsn_code]
 * @property {string} [reporting_hsn]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {string} [size_guide]
 * @property {Object} [change_request_id]
 * @property {boolean} [multi_size]
 * @property {string[]} [product_group_tag]
 * @property {boolean} [is_dependent]
 * @property {string[]} [tags]
 * @property {number[]} departments
 * @property {Media1[]} [media]
 * @property {string} [description]
 * @property {string} category_slug
 * @property {Object} [variant_group]
 * @property {string} [bulk_job_id]
 * @property {string} [short_description]
 * @property {string} [action]
 * @property {string} name
 * @property {number} [uid]
 * @property {string} currency
 * @property {string} [requester]
 * @property {boolean} [is_image_less_product]
 * @property {TeaserTag} [teaser_tag]
 * @property {ProductPublish1} [product_publish]
 * @property {boolean} [is_set]
 * @property {string} slug
 * @property {Trader[]} trader
 * @property {number} brand_uid
 * @property {Object[]} sizes
 * @property {boolean} [is_active]
 * @property {ReturnConfig} return_config
 * @property {string} item_type
 * @property {string} country_of_origin
 * @property {CustomOrder} [custom_order]
 * @property {Object} [attributes]
 * @property {number} company_id
 * @property {Object} [_custom_json]
 * @property {NetQuantity} [net_quantity]
 * @property {string} template_tag
 * @property {Object} [variants]
 * @property {Object} [variant_media]
 * @property {string} item_code
 * @property {number} [no_of_boxes]
 * @property {string[]} [highlights]
 * @property {TaxIdentifier} tax_identifier
 */

/**
 * @typedef ProductVariants
 * @property {number} [category_uid]
 * @property {number} [brand_uid]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [item_code]
 * @property {Media1[]} [media]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {ProductVariants[]} [variants]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {string} [raw_key]
 * @property {AttributeMaster} schema
 * @property {Object} [synonyms]
 * @property {boolean} [is_nested]
 * @property {string[]} [tags]
 * @property {string[]} departments
 * @property {string} [description]
 * @property {AttributeMasterFilter} filters
 * @property {string} [name]
 * @property {Object} [modified_by]
 * @property {string} [suggestion]
 * @property {AttributeMasterDetails} details
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} slug
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {string} [unit]
 * @property {string} [logo]
 * @property {boolean} [variant]
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
 * @property {string} gtin_value
 * @property {boolean} [primary]
 * @property {string} gtin_type
 */

/**
 * @typedef AllSizes
 * @property {string} item_dimensions_unit_of_measure
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {number} item_height
 * @property {Object} item_weight_unit_of_measure
 * @property {number} item_length
 * @property {number} item_weight
 * @property {number} item_width
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
 * @typedef ProductPublished
 * @property {boolean} [is_set]
 * @property {number} [product_online_date]
 */

/**
 * @typedef Product
 * @property {string} [size_guide]
 * @property {boolean} [multi_size]
 * @property {boolean} [is_expirable]
 * @property {string[]} [product_group_tag]
 * @property {boolean} [is_dependent]
 * @property {string} [hsn_code]
 * @property {string[]} [tags]
 * @property {Brand} [brand]
 * @property {number[]} [departments]
 * @property {string[]} [highlights]
 * @property {string} [description]
 * @property {string} [category_slug]
 * @property {Media1[]} [media]
 * @property {Object} [variant_group]
 * @property {string} [short_description]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [currency]
 * @property {Object} [modified_by]
 * @property {boolean} [is_image_less_product]
 * @property {string} [pending]
 * @property {string} [verified_on]
 * @property {Object} [teaser_tag]
 * @property {ProductPublished} [product_publish]
 * @property {boolean} [is_set]
 * @property {string} [id]
 * @property {string} [slug]
 * @property {Object} [tax_identifier]
 * @property {string} [color]
 * @property {string} [image_nature]
 * @property {Trader[]} [trader]
 * @property {number} [category_uid]
 * @property {string[]} [all_identifiers]
 * @property {number} [brand_uid]
 * @property {string[]} [l3_mapping]
 * @property {number[]} [all_company_ids]
 * @property {VerifiedBy} [verified_by]
 * @property {Object} [category]
 * @property {string} [created_on]
 * @property {Object[]} [sizes]
 * @property {boolean} [is_active]
 * @property {ReturnConfigResponse} [return_config]
 * @property {string} [item_type]
 * @property {string} [country_of_origin]
 * @property {Object} [custom_order]
 * @property {Object} [attributes]
 * @property {Object} [moq]
 * @property {Object} [_custom_json]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {string} [modified_on]
 * @property {Image[]} [images]
 * @property {Object} [created_by]
 * @property {number} [company_id]
 * @property {string} [template_tag]
 * @property {string} [primary_color]
 * @property {string} [stage]
 * @property {Object} [variants]
 * @property {Object} [variant_media]
 * @property {string} [item_code]
 * @property {number} [no_of_boxes]
 * @property {Object[]} [all_sizes]
 * @property {boolean} [is_physical]
 */

/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
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
 * @property {number} [cancelled]
 * @property {string} [stage]
 * @property {string[]} [failed_records]
 * @property {string} [created_on]
 * @property {UserDetail1} [modified_by]
 * @property {boolean} [is_active]
 * @property {string} [file_path]
 * @property {string[]} [cancelled_records]
 * @property {number} [failed]
 * @property {number} [total]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {UserDetail1} [created_by]
 * @property {string} [template_tag]
 * @property {ProductTemplate} [template]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
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
 * @property {number} [cancelled]
 * @property {string} [stage]
 * @property {string} [tracking_url]
 * @property {Object[]} [failed_records]
 * @property {string} created_on
 * @property {UserInfo1} [modified_by]
 * @property {boolean} [is_active]
 * @property {string} [file_path]
 * @property {number} [total]
 * @property {Object[]} [cancelled_records]
 * @property {number} [failed]
 * @property {number} company_id
 * @property {string} [modified_on]
 * @property {UserInfo1} [created_by]
 * @property {string} [custom_template_tag]
 * @property {string} [template_tag]
 */

/**
 * @typedef BulkResponse
 * @property {string} batch_id
 * @property {string} created_on
 * @property {UserInfo1} [modified_by]
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {UserInfo1} [created_by]
 */

/**
 * @typedef BulkProductRequest
 * @property {Object[]} data
 * @property {string} batch_id
 * @property {string} template_tag
 * @property {number} company_id
 */

/**
 * @typedef ProductTagsViewResponse
 * @property {string[]} [items]
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
 * @property {number} [cancelled]
 * @property {string} [stage]
 * @property {string} [tracking_url]
 * @property {string[]} [failed_records]
 * @property {string} [created_on]
 * @property {UserCommon} [modified_by]
 * @property {boolean} [is_active]
 * @property {string} [file_path]
 * @property {string[]} [cancelled_records]
 * @property {number} [failed]
 * @property {number} [retry]
 * @property {number} [total]
 * @property {number} [company_id]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {UserCommon} [created_by]
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
 * @property {number} [company_id]
 * @property {string} [size]
 * @property {number} [item_id]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {ProductSizeDeleteDataResponse} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef InventoryResponse
 * @property {number} [price_effective]
 * @property {Object} [store]
 * @property {number} [item_id]
 * @property {string} [inventory_updated_on]
 * @property {number} [sellable_quantity]
 * @property {Object} [identifiers]
 * @property {string} [seller_identifier]
 * @property {string} [uid]
 * @property {string} [currency]
 * @property {number} [price]
 * @property {number} [price_transfer]
 * @property {number} [quantity]
 * @property {string} [size]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ItemQuery
 * @property {string} [item_code]
 * @property {number} [uid]
 * @property {number} [brand_uid]
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
 * @property {number} [quantity]
 * @property {SizeDistribution} size_distribution
 * @property {string} [name]
 */

/**
 * @typedef InvSize
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} price_effective
 * @property {GTIN[]} identifiers
 * @property {number} [item_height]
 * @property {number} [item_width]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [item_length]
 * @property {string} [expiration_date]
 * @property {InventorySet} [set]
 * @property {string} store_code
 * @property {string} currency
 * @property {boolean} [is_set]
 * @property {number} [item_weight]
 * @property {number} [price]
 * @property {number} [price_transfer]
 * @property {number} quantity
 * @property {Object} size
 */

/**
 * @typedef InventoryRequest
 * @property {ItemQuery} item
 * @property {InvSize[]} sizes
 * @property {number} company_id
 */

/**
 * @typedef DimensionResponse
 * @property {boolean} is_default
 * @property {number} width
 * @property {number} height
 * @property {string} unit
 * @property {number} length
 */

/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
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
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [damaged]
 */

/**
 * @typedef Trader1
 * @property {string} type
 * @property {string} name
 * @property {string[]} address
 */

/**
 * @typedef ReturnConfig1
 * @property {number} [time]
 * @property {string} [unit]
 * @property {boolean} [returnable]
 */

/**
 * @typedef WeightResponse
 * @property {number} shipping
 * @property {string} unit
 * @property {boolean} is_default
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef ManufacturerResponse
 * @property {string} name
 * @property {string} address
 * @property {boolean} is_default
 */

/**
 * @typedef PriceMeta
 * @property {string} [updated_at]
 * @property {number} transfer
 * @property {string} currency
 * @property {Object} [tp_notes]
 * @property {number} marked
 * @property {number} effective
 */

/**
 * @typedef InventorySellerResponse
 * @property {string} fynd_item_code
 * @property {string} [expiration_date]
 * @property {DimensionResponse} dimension
 * @property {string[]} [tags]
 * @property {BrandMeta} brand
 * @property {boolean} fragile
 * @property {StoreMeta} store
 * @property {number} item_id
 * @property {string} seller_identifier
 * @property {string} uid
 * @property {Object} [meta]
 * @property {UserSerializer} [modified_by]
 * @property {number} total_quantity
 * @property {Quantities} [quantities]
 * @property {boolean} [is_set]
 * @property {string} fynd_article_code
 * @property {Object} [raw_meta]
 * @property {Trader1[]} [trader]
 * @property {string} [trace_id]
 * @property {boolean} [track_inventory]
 * @property {ReturnConfig1} [return_config]
 * @property {Object} [fynd_meta]
 * @property {InventorySet} [set]
 * @property {boolean} [is_active]
 * @property {string} country_of_origin
 * @property {Object} [_custom_json]
 * @property {WeightResponse} weight
 * @property {string} size
 * @property {UserSerializer} [created_by]
 * @property {CompanyMeta} company
 * @property {string} [stage]
 * @property {ManufacturerResponse} manufacturer
 * @property {Object} identifier
 * @property {PriceMeta} price
 * @property {string} [added_on_store]
 * @property {Object} [tax_identifier]
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DimensionResponse1
 * @property {number} [width]
 * @property {string} [unit]
 * @property {number} [height]
 * @property {number} [length]
 */

/**
 * @typedef BrandMeta1
 * @property {string} [name]
 * @property {number} [id]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {number} [uid]
 * @property {string} [store_type]
 * @property {string} [name]
 * @property {string} [store_code]
 */

/**
 * @typedef Quantity
 * @property {number} [count]
 */

/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [order_committed]
 * @property {Quantity} [not_available]
 * @property {Quantity} [sellable]
 * @property {Quantity} [damaged]
 */

/**
 * @typedef Trader2
 * @property {string} [type]
 * @property {string} [name]
 * @property {string[]} [address]
 */

/**
 * @typedef ReturnConfig2
 * @property {number} [time]
 * @property {string} [unit]
 * @property {boolean} [returnable]
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
 * @typedef ManufacturerResponse1
 * @property {string} [name]
 * @property {string} [address]
 * @property {boolean} [is_default]
 */

/**
 * @typedef DateMeta
 * @property {string} [modified_on]
 * @property {string} [added_on_store]
 * @property {string} [created_on]
 * @property {string} [inventory_updated_on]
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
 * @typedef GetInventories
 * @property {string} [expiration_date]
 * @property {DimensionResponse1} [dimension]
 * @property {string[]} [tags]
 * @property {BrandMeta1} [brand]
 * @property {ArticleStoreResponse} [store]
 * @property {string} [inventory_updated_on]
 * @property {number} [item_id]
 * @property {string} [seller_identifier]
 * @property {string} [uid]
 * @property {UserSerializer} [modified_by]
 * @property {number} [total_quantity]
 * @property {QuantitiesArticle} [quantities]
 * @property {boolean} [is_set]
 * @property {string} [id]
 * @property {Trader2[]} [trader]
 * @property {string} [trace_id]
 * @property {boolean} [track_inventory]
 * @property {ReturnConfig2} [return_config]
 * @property {string} [country_of_origin]
 * @property {WeightResponse1} [weight]
 * @property {string} [size]
 * @property {UserSerializer} [created_by]
 * @property {CompanyMeta1} [company]
 * @property {string} [stage]
 * @property {Object} [platforms]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {Object} [identifier]
 * @property {DateMeta} [date_meta]
 * @property {PriceArticle} [price]
 * @property {Object} [tax_identifier]
 */

/**
 * @typedef GetInventoriesResponse
 * @property {GetInventories[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {number} [succeed]
 * @property {number} [cancelled]
 * @property {string} [stage]
 * @property {string[]} [failed_records]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {boolean} [is_active]
 * @property {string} [file_path]
 * @property {string[]} [cancelled_records]
 * @property {number} [failed]
 * @property {number} [total]
 * @property {number} [company_id]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 */

/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef InventoryJobPayload
 * @property {string} [trace_id]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 * @property {number} [price_marked]
 * @property {string} [currency]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} [expiration_date]
 * @property {number} [total_quantity]
 * @property {string} store_code
 * @property {string[]} [tags]
 * @property {number} [price]
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
 * @property {string} [completed_on]
 * @property {number} seller_id
 * @property {string} [status]
 * @property {Object} [request_params]
 * @property {string} [trigger_on]
 * @property {string} task_id
 * @property {string} [url]
 */

/**
 * @typedef InventoryExportRequest
 * @property {string} [type]
 * @property {number[]} [store]
 * @property {number[]} [brand]
 */

/**
 * @typedef InventoryExportResponse
 * @property {number} seller_id
 * @property {string} [status]
 * @property {Object} [request_params]
 * @property {string} [trigger_on]
 * @property {string} task_id
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
 * @property {number} [price_effective]
 * @property {string} seller_identifier
 * @property {number} [price_marked]
 * @property {string} [expiration_date]
 * @property {number} [total_quantity]
 * @property {string[]} [tags]
 * @property {number} store_id
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
 * @property {InventoryPayload} [data]
 * @property {InventoryFailedReason} [reason]
 */

/**
 * @typedef InventoryUpdateResponse
 * @property {string} message
 * @property {InventoryResponseItem[]} [items]
 */

/**
 * @typedef HsnCodesObject
 * @property {number} [tax2]
 * @property {boolean} [tax_on_esp]
 * @property {string} [hs2_code]
 * @property {number} [threshold1]
 * @property {number} [threshold2]
 * @property {string} [hsn_code]
 * @property {number} [tax1]
 * @property {number} [company_id]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {boolean} [tax_on_mrp]
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */

/**
 * @typedef HsnUpsert
 * @property {number} [tax2]
 * @property {boolean} [tax_on_esp]
 * @property {string} hs2_code
 * @property {number} [uid]
 * @property {number} threshold1
 * @property {number} [threshold2]
 * @property {boolean} [is_active]
 * @property {string} hsn_code
 * @property {number} tax1
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
 * @property {string} effective_date
 * @property {number} threshold
 * @property {number} [cess]
 */

/**
 * @typedef HSNDataInsertV2
 * @property {string} description
 * @property {string} type
 * @property {string} [hsn_code_id]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {string} hsn_code
 * @property {TaxSlab[]} taxes
 * @property {string} [modified_on]
 * @property {Object} [created_by]
 * @property {string} country_code
 * @property {string} reporting_hsn
 */

/**
 * @typedef PageResponse
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {string} [current]
 * @property {number} [size]
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
 * @property {string} [discount]
 * @property {Media} [logo]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {string[]} [departments]
 */

/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */

/**
 * @typedef Department
 * @property {number} [priority_order]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {Media} [logo]
 * @property {string} [slug]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef ThirdLevelChild
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {Object[]} [childs]
 * @property {Object} [_custom_json]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 */

/**
 * @typedef SecondLevelChild
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {ThirdLevelChild[]} [childs]
 * @property {Object} [_custom_json]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 */

/**
 * @typedef Child
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {SecondLevelChild[]} [childs]
 * @property {Object} [_custom_json]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 */

/**
 * @typedef CategoryItems
 * @property {Action} [action]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {Child[]} [childs]
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {CategoryItems[]} [items]
 * @property {string} [department]
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
 * @property {ProductFilters[]} [filters]
 * @property {Page} page
 * @property {Object} [operators]
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 */

/**
 * @typedef ProductDetail
 * @property {string[]} [tryouts]
 * @property {ProductBrand} [brand]
 * @property {number} [rating_count]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [product_online_date]
 * @property {string} [type]
 * @property {string} [description]
 * @property {string} [short_description]
 * @property {Object} [promo_meta]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {Media1[]} [medias]
 * @property {Object} [teaser_tag]
 * @property {string} slug
 * @property {string} [color]
 * @property {string} [image_nature]
 * @property {boolean} [has_variant]
 * @property {Object} [attributes]
 * @property {string} [item_type]
 * @property {string[]} [similars]
 * @property {number} [rating]
 * @property {string} [item_code]
 * @property {string[]} [highlights]
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
 * @property {string} size
 * @property {number[]} [ignored_stores]
 * @property {number} item_id
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef AssignStoreArticle
 * @property {ArticleQuery} [query]
 * @property {ArticleAssignment} [article_assignment]
 * @property {Object} [meta]
 * @property {string} [group_id]
 * @property {number} [quantity]
 */

/**
 * @typedef AssignStore
 * @property {AssignStoreArticle[]} articles
 * @property {string} [channel_type]
 * @property {string} pincode
 * @property {string} app_id
 * @property {number[]} [store_ids]
 * @property {string} [channel_identifier]
 * @property {number} [company_id]
 */

/**
 * @typedef ArticleAssignment1
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef StoreAssignResponse
 * @property {number} [price_effective]
 * @property {ArticleAssignment1} article_assignment
 * @property {number} item_id
 * @property {number} [price_marked]
 * @property {string} [uid]
 * @property {Object[]} [strategy_wise_listing]
 * @property {Object} [meta]
 * @property {boolean} status
 * @property {number} [index]
 * @property {string} [group_id]
 * @property {string} [s_city]
 * @property {number} [company_id]
 * @property {string} [_id]
 * @property {number} quantity
 * @property {string} size
 * @property {number} [store_pincode]
 * @property {number} [store_id]
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
 * @typedef Document
 * @property {string} type
 * @property {string} value
 * @property {string} [legal_name]
 * @property {boolean} [verified]
 * @property {string} [url]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [minute]
 * @property {number} [hour]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 * @property {boolean} open
 * @property {LocationTimingSerializer} [closing]
 */

/**
 * @typedef UserSerializer1
 * @property {string} [contact]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */

/**
 * @typedef LocationManagerSerializer
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [email]
 * @property {string} [name]
 */

/**
 * @typedef GetAddressSerializer
 * @property {number} [pincode]
 * @property {string} [city]
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {string} [address_type]
 * @property {string} [country_code]
 * @property {string} [state]
 * @property {string} [landmark]
 * @property {number} [longitude]
 * @property {string} [country]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [contact]
 * @property {string} [username]
 * @property {string} [user_id]
 */

/**
 * @typedef GetCompanySerializer
 * @property {UserSerializer2} [verified_by]
 * @property {string} [stage]
 * @property {string} [business_type]
 * @property {number} [uid]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [name]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [company_type]
 * @property {string} [reject_reason]
 * @property {string} [modified_on]
 * @property {UserSerializer2} [created_by]
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef GetLocationSerializer
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {Document[]} [documents]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Object} [warnings]
 * @property {number} [uid]
 * @property {string} [verified_on]
 * @property {UserSerializer1} [modified_by]
 * @property {string} name
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {UserSerializer1} [verified_by]
 * @property {string} [created_on]
 * @property {string[]} [notification_emails]
 * @property {LocationManagerSerializer} [manager]
 * @property {Object} [_custom_json]
 * @property {string} [modified_on]
 * @property {UserSerializer1} [created_by]
 * @property {GetAddressSerializer} address
 * @property {string} code
 * @property {GetCompanySerializer} [company]
 * @property {string} [stage]
 * @property {LocationIntegrationType} [integration_type]
 * @property {string} [store_type]
 * @property {string} phone_number
 * @property {string} display_name
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
 * @property {number} uid
 * @property {boolean} [is_active]
 * @property {string} [logo]
 * @property {Object} [_custom_json]
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
 * @typedef CouponAction
 * @property {string} [action_date]
 * @property {string} [txn_mode]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef Identifier
 * @property {number[]} [exclude_brand_id]
 * @property {number[]} [item_id]
 * @property {string[]} [collection_id]
 * @property {number[]} [brand_id]
 * @property {number[]} [store_id]
 * @property {number[]} [company_id]
 * @property {string[]} [article_id]
 * @property {number[]} [category_id]
 * @property {string[]} [user_id]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */

/**
 * @typedef DisplayMeta
 * @property {DisplayMetaDict} [remove]
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [description]
 * @property {DisplayMetaDict} [apply]
 */

/**
 * @typedef CouponSchedule
 * @property {Object[]} [next_schedule]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {string} [start]
 * @property {string} [cron]
 */

/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef Rule
 * @property {number} [value]
 * @property {number} [key]
 * @property {number} [min]
 * @property {number} [max]
 * @property {number} [discount_qty]
 */

/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {string} [user_registered_after]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [types]
 * @property {string[]} [networks]
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [codes]
 */

/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */

/**
 * @typedef UsesRemaining
 * @property {number} [app]
 * @property {number} [user]
 * @property {number} [total]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [remaining]
 * @property {UsesRemaining} [maximum]
 */

/**
 * @typedef PostOrder
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */

/**
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef Restrictions
 * @property {number[]} [user_groups]
 * @property {string[]} [platforms]
 * @property {string} [user_type]
 * @property {Object} [payments]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {UsesRestriction} [uses]
 * @property {number[]} [ordering_stores]
 * @property {boolean} [coupon_allowed]
 * @property {PostOrder} [post_order]
 * @property {PriceRange} [price_range]
 */

/**
 * @typedef RuleDefinition
 * @property {string} value_type
 * @property {string} applicable_on
 * @property {string} [currency_code]
 * @property {string} type
 * @property {string[]} [scope]
 * @property {string} calculate_on
 * @property {boolean} [is_exact]
 * @property {boolean} [auto_apply]
 */

/**
 * @typedef State
 * @property {boolean} [is_archived]
 * @property {boolean} [is_display]
 * @property {boolean} [is_public]
 */

/**
 * @typedef CouponAdd
 * @property {CouponAction} [action]
 * @property {CouponDateMeta} [date_meta]
 * @property {string} type_slug
 * @property {Identifier} identifiers
 * @property {DisplayMeta} display_meta
 * @property {CouponSchedule} [_schedule]
 * @property {Ownership} ownership
 * @property {CouponAuthor} [author]
 * @property {string[]} [tags]
 * @property {Validity} validity
 * @property {Rule[]} rule
 * @property {Validation} [validation]
 * @property {Restrictions} [restrictions]
 * @property {RuleDefinition} rule_definition
 * @property {State} [state]
 * @property {string} code
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
 * @property {CouponDateMeta} [date_meta]
 * @property {string} type_slug
 * @property {Identifier} identifiers
 * @property {DisplayMeta} display_meta
 * @property {CouponSchedule} [_schedule]
 * @property {Ownership} ownership
 * @property {CouponAuthor} [author]
 * @property {string[]} [tags]
 * @property {Validity} validity
 * @property {Rule[]} rule
 * @property {Validation} [validation]
 * @property {Restrictions} [restrictions]
 * @property {RuleDefinition} rule_definition
 * @property {State} [state]
 * @property {string} code
 */

/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef Ownership1
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [offer_label]
 * @property {string} [offer_text]
 */

/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */

/**
 * @typedef CompareObject
 * @property {number} [less_than_equals]
 * @property {number} [less_than]
 * @property {number} [greater_than]
 * @property {number} [equals]
 * @property {number} [greater_than_equals]
 */

/**
 * @typedef ItemCriteria
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_exclude_category]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_store]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_exclude_company]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {number[]} [item_category]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_id]
 * @property {string[]} [available_zones]
 * @property {string[]} [buy_rules]
 * @property {string[]} [item_size]
 * @property {number[]} [item_exclude_id]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {boolean} [all_items]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_exclude_store]
 * @property {CompareObject} [cart_total]
 * @property {string[]} [product_tags]
 * @property {number[]} [item_company]
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef DiscountOffer
 * @property {number} [discount_amount]
 * @property {number} [discount_price]
 * @property {number} [max_offer_quantity]
 * @property {boolean} [apportion_discount]
 * @property {number} [min_offer_quantity]
 * @property {number} [discount_percentage]
 * @property {number} [max_discount_amount]
 * @property {number} [max_usage_per_transaction]
 * @property {boolean} [partial_can_ret]
 * @property {string} [code]
 */

/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {string} discount_type
 * @property {DiscountOffer} offer
 * @property {ItemCriteria} item_criteria
 */

/**
 * @typedef UserRegistered
 * @property {string} [end]
 * @property {string} [start]
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
 * @property {number[]} [user_groups]
 * @property {string[]} [platforms]
 * @property {boolean} [anonymous_users]
 * @property {number} [order_quantity]
 * @property {UserRegistered} [user_registered]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {UsesRestriction1} uses
 * @property {PostOrder1} [post_order]
 * @property {string[]} [user_id]
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef PromotionSchedule
 * @property {Object[]} [next_schedule]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {string} start
 * @property {string} [cron]
 * @property {boolean} published
 */

/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */

/**
 * @typedef PromotionListItem
 * @property {Ownership1} ownership
 * @property {string} promotion_type
 * @property {string} [calculate_on]
 * @property {string} mode
 * @property {DisplayMeta1} display_meta
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {PromotionAction} [post_order_action]
 * @property {Object} buy_rules
 * @property {string} [currency]
 * @property {string} [code]
 * @property {PromotionAuthor} [author]
 * @property {DiscountRule[]} discount_rules
 * @property {Restrictions1} [restrictions]
 * @property {string} promo_group
 * @property {PromotionDateMeta} [date_meta]
 * @property {boolean} [apply_all_discount]
 * @property {PromotionSchedule} [_schedule]
 * @property {Visibility} [visiblility]
 * @property {Object} [_custom_json]
 * @property {string} application_id
 * @property {boolean} [stackable]
 */

/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PromotionAdd
 * @property {Ownership1} ownership
 * @property {string} promotion_type
 * @property {string} [calculate_on]
 * @property {string} mode
 * @property {DisplayMeta1} display_meta
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {PromotionAction} [post_order_action]
 * @property {Object} buy_rules
 * @property {string} [currency]
 * @property {string} [code]
 * @property {PromotionAuthor} [author]
 * @property {DiscountRule[]} discount_rules
 * @property {Restrictions1} [restrictions]
 * @property {string} promo_group
 * @property {PromotionDateMeta} [date_meta]
 * @property {boolean} [apply_all_discount]
 * @property {PromotionSchedule} [_schedule]
 * @property {Visibility} [visiblility]
 * @property {Object} [_custom_json]
 * @property {string} application_id
 * @property {boolean} [stackable]
 */

/**
 * @typedef PromotionUpdate
 * @property {Ownership1} ownership
 * @property {string} promotion_type
 * @property {string} [calculate_on]
 * @property {string} mode
 * @property {DisplayMeta1} display_meta
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {PromotionAction} [post_order_action]
 * @property {Object} buy_rules
 * @property {string} [currency]
 * @property {string} [code]
 * @property {PromotionAuthor} [author]
 * @property {DiscountRule[]} discount_rules
 * @property {Restrictions1} [restrictions]
 * @property {string} promo_group
 * @property {PromotionDateMeta} [date_meta]
 * @property {boolean} [apply_all_discount]
 * @property {PromotionSchedule} [_schedule]
 * @property {Visibility} [visiblility]
 * @property {Object} [_custom_json]
 * @property {string} application_id
 * @property {boolean} [stackable]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [example]
 * @property {boolean} [is_hidden]
 * @property {string} [modified_on]
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {string} [type]
 * @property {string} [created_on]
 * @property {string} [entity_type]
 * @property {string} [description]
 * @property {string} [entity_slug]
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
 * @typedef LoyaltyPoints
 * @property {boolean} [is_applied]
 * @property {number} [applicable]
 * @property {string} [description]
 * @property {number} [total]
 */

/**
 * @typedef RawBreakup
 * @property {number} [mrp_total]
 * @property {number} [total]
 * @property {number} [convenience_fee]
 * @property {number} [discount]
 * @property {number} [gst_charges]
 * @property {number} [vog]
 * @property {number} [coupon]
 * @property {number} [delivery_charge]
 * @property {number} [subtotal]
 * @property {number} [cod_charge]
 * @property {number} [fynd_cash]
 * @property {number} [you_saved]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [currency_symbol]
 * @property {string[]} [message]
 * @property {number} [value]
 * @property {string} [key]
 * @property {string} [currency_code]
 * @property {string} [display]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [message]
 * @property {number} [coupon_value]
 * @property {number} [value]
 * @property {string} [uid]
 * @property {string} [coupon_type]
 * @property {string} [type]
 * @property {string} [title]
 * @property {number} [max_discount_value]
 * @property {number} [minimum_cart_value]
 * @property {boolean} [is_applied]
 * @property {string} [description]
 * @property {string} [sub_title]
 * @property {string} [code]
 */

/**
 * @typedef CartBreakup
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {RawBreakup} [raw]
 * @property {DisplayBreakup[]} [display]
 * @property {CouponBreakup} [coupon]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */

/**
 * @typedef ProductAction
 * @property {ActionQuery} [query]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef NetQuantity
 * @property {string} [unit]
 * @property {string} [value]
 */

/**
 * @typedef CategoryInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef ProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 * @property {string} [url]
 */

/**
 * @typedef BaseInfo
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef CartProduct
 * @property {ProductAction} [action]
 * @property {NetQuantity} [net_quantity]
 * @property {CategoryInfo[]} [categories]
 * @property {number} [uid]
 * @property {string} [type]
 * @property {string} [slug]
 * @property {ProductImage[]} [images]
 * @property {BaseInfo} [brand]
 * @property {string} [name]
 */

/**
 * @typedef ProductPrice
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {number} [add_on]
 * @property {number} [selling]
 * @property {string} [currency_code]
 * @property {number} [marked]
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
 * @typedef BasePrice
 * @property {string} [currency_code]
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */

/**
 * @typedef ProductArticle
 * @property {Object} [extra_meta]
 * @property {string} [uid]
 * @property {string} [size]
 * @property {string} [type]
 * @property {BaseInfo} [store]
 * @property {number} [quantity]
 * @property {ArticlePriceInfo} [price]
 * @property {Object} [_custom_json]
 * @property {string[]} [product_group_tags]
 * @property {Object} [parent_item_identifiers]
 * @property {BaseInfo} [seller]
 */

/**
 * @typedef FreeGiftItem
 * @property {string} [item_name]
 * @property {number} [item_id]
 * @property {string} [item_slug]
 * @property {string} [item_brand_name]
 * @property {Object} [item_price_details]
 * @property {string[]} [item_images_url]
 */

/**
 * @typedef AppliedFreeArticles
 * @property {FreeGiftItem} [free_gift_item_details]
 * @property {number} [quantity]
 * @property {string} [parent_item_identifier]
 * @property {string} [article_id]
 */

/**
 * @typedef Ownership2
 * @property {string} [payable_by]
 * @property {string} [payable_category]
 */

/**
 * @typedef DiscountRulesApp
 * @property {Object} [raw_offer]
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [offer]
 * @property {Object} [item_criteria]
 */

/**
 * @typedef BuyRules
 * @property {Object} [cart_conditions]
 * @property {Object} [item_criteria]
 */

/**
 * @typedef AppliedPromotion
 * @property {string} [promo_id]
 * @property {boolean} [mrp_promotion]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {string} [offer_text]
 * @property {string} [promotion_name]
 * @property {Ownership2} [ownership]
 * @property {string} [promotion_type]
 * @property {number} [article_quantity]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {string} [promotion_group]
 * @property {number} [amount]
 * @property {BuyRules[]} [buy_rules]
 */

/**
 * @typedef ProductAvailability
 * @property {boolean} [deliverable]
 * @property {number} [other_store_quantity]
 * @property {boolean} [out_of_stock]
 * @property {boolean} [is_valid]
 * @property {string[]} [sizes]
 */

/**
 * @typedef CartProductInfo
 * @property {string} [message]
 * @property {string} [coupon_message]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [discount]
 * @property {Object} [bulk_offer]
 * @property {boolean} [is_set]
 * @property {CartProduct} [product]
 * @property {string} [key]
 * @property {number} [quantity]
 * @property {ProductPriceInfo} [price]
 * @property {PromoMeta} [promo_meta]
 * @property {ProductArticle} [article]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {Object} [parent_item_identifiers]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {ProductAvailability} [availability]
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
 * @property {string} [message]
 * @property {Object} [errors]
 */

/**
 * @typedef ShippingAddress
 * @property {string} [country_phone_code]
 * @property {string} [state]
 * @property {Object} [meta]
 * @property {number} [pincode]
 * @property {string} [landmark]
 * @property {string} [email]
 * @property {string} [country]
 * @property {string} area_code
 * @property {string} [area_code_slug]
 * @property {number} [phone]
 * @property {string} [country_code]
 * @property {string} [address]
 * @property {string} [area]
 * @property {string} [name]
 * @property {string} [country_iso_code]
 * @property {string} [address_type]
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
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {Object} [extra_meta]
 * @property {string} [payment_id]
 * @property {string} [current_status]
 * @property {string} [payment_gateway]
 * @property {string} [order_id]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {number} amount
 * @property {string} [name]
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} mode
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
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} amount_paid
 * @property {Object} [extra_meta]
 * @property {number} product_id
 * @property {number} cashback_applied
 * @property {number} discount
 * @property {number} [loyalty_discount]
 * @property {CartItemMeta} [meta]
 * @property {number} delivery_charges
 * @property {number} cod_charges
 * @property {number} [quantity]
 * @property {number} price_effective
 * @property {number} [employee_discount]
 * @property {number} coupon_effective_discount
 * @property {number} price_marked
 * @property {OpenApiFiles[]} [files]
 * @property {string} size
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {number} coupon_value
 * @property {string} coupon_code
 * @property {Object} [employee_discount]
 * @property {number} cart_value
 * @property {string} [order_id]
 * @property {string} [currency_code]
 * @property {string} [payment_mode]
 * @property {string} [affiliate_order_id]
 * @property {OpenApiOrderItem[]} cart_items
 * @property {OpenApiFiles[]} [files]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} cashback_applied
 * @property {number} [loyalty_discount]
 * @property {string} [gstin]
 * @property {number} delivery_charges
 * @property {string} [coupon]
 * @property {ShippingAddress} billing_address
 * @property {number} cod_charges
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [comment]
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} [order_ref_id]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {string} order_id
 */

/**
 * @typedef AbandonedCart
 * @property {Object[]} articles
 * @property {Object} [fynd_credits]
 * @property {string} [checkout_mode]
 * @property {Object[]} [shipments]
 * @property {string} created_on
 * @property {number} [cart_value]
 * @property {string} [payment_mode]
 * @property {Object} [meta]
 * @property {number} uid
 * @property {Object} [delivery_charges]
 * @property {Object} [coupon]
 * @property {boolean} [merge_qty]
 * @property {Object} [payments]
 * @property {Object} [pick_up_customer_details]
 * @property {string} expire_at
 * @property {boolean} [is_archive]
 * @property {string} [app_id]
 * @property {boolean} [buy_now]
 * @property {number} [bulk_coupon_discount]
 * @property {Object} [promotion]
 * @property {string} [order_id]
 * @property {string} _id
 * @property {string} user_id
 * @property {boolean} [is_active]
 * @property {Object[]} [payment_methods]
 * @property {Object} cashback
 * @property {number} [discount]
 * @property {string} [gstin]
 * @property {Object} [cod_charges]
 * @property {boolean} is_default
 * @property {string} last_modified
 * @property {number[]} [fc_index_map]
 * @property {string} [comment]
 */

/**
 * @typedef AbandonedCartResponse
 * @property {AbandonedCart[]} [items]
 * @property {string} [message]
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
 * @typedef PaymentSelectionLock
 * @property {boolean} [enabled]
 * @property {string} [default_options]
 * @property {string} [payment_identifier]
 */

/**
 * @typedef CartDetailResponse
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
 * @property {string} [id]
 * @property {string} [checkout_mode]
 * @property {string} [coupon_text]
 * @property {boolean} [buy_now]
 * @property {string} [gstin]
 * @property {string} [pan_no]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [is_valid]
 * @property {boolean} [restrict_checkout]
 * @property {string} [last_modified]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment]
 * @property {CartCurrency} [currency]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 */

/**
 * @typedef AddProductCart
 * @property {number} [seller_id]
 * @property {Object} [extra_meta]
 * @property {number} [item_id]
 * @property {number} [store_id]
 * @property {string} [article_id]
 * @property {number} [quantity]
 * @property {Object} [_custom_json]
 * @property {boolean} [pos]
 * @property {string[]} [product_group_tags]
 * @property {Object} [article_assignment]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [display]
 * @property {string} [item_size]
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 * @property {boolean} [new_cart]
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
 * @property {Object} [extra_meta]
 * @property {number} [item_id]
 * @property {number} [item_index]
 * @property {CartProductIdentifer} identifiers
 * @property {string} [article_id]
 * @property {number} [quantity]
 * @property {Object} [_custom_json]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [item_size]
 */

/**
 * @typedef UpdateCartRequest
 * @property {UpdateProductCart[]} [items]
 * @property {string} operation
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
 * @property {Object} [meta]
 * @property {Object} [user]
 * @property {string} [token]
 * @property {Object} [source]
 * @property {string} [created_on]
 */

/**
 * @typedef SharedCart
 * @property {CartProductInfo[]} [items]
 * @property {string} [id]
 * @property {string} [checkout_mode]
 * @property {string} [coupon_text]
 * @property {number} [cart_id]
 * @property {boolean} [restrict_checkout]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [message]
 * @property {string} [uid]
 * @property {string} [delivery_charge_info]
 * @property {CartCurrency} [currency]
 * @property {boolean} [buy_now]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [gstin]
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {string} [last_modified]
 * @property {string} [comment]
 */

/**
 * @typedef SharedCartResponse
 * @property {string} [error]
 * @property {SharedCart} [cart]
 */

/**
 * @typedef CartList
 * @property {string} [cart_id]
 * @property {string} [created_on]
 * @property {string} [cart_value]
 * @property {string} [item_counts]
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
 * @property {string} [first_name]
 * @property {string} [modified_on]
 * @property {string} [external_id]
 * @property {string} [uid]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {string} [_id]
 * @property {string} [mobile]
 * @property {string} [created_at]
 */

/**
 * @typedef UserCartMappingResponse
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
 * @property {string} [id]
 * @property {string} [checkout_mode]
 * @property {string} [coupon_text]
 * @property {boolean} [buy_now]
 * @property {string} [gstin]
 * @property {string} [pan_no]
 * @property {UserInfo} [user]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [is_valid]
 * @property {boolean} [restrict_checkout]
 * @property {string} [last_modified]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment]
 * @property {CartCurrency} [currency]
 * @property {PaymentSelectionLock} [payment_selection_lock]
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
 * @property {number} [total_item_count]
 * @property {number} [current]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 */

/**
 * @typedef Coupon
 * @property {string} [message]
 * @property {number} [coupon_value]
 * @property {string} [coupon_code]
 * @property {boolean} [is_applied]
 * @property {string} [coupon_type]
 * @property {string} [title]
 * @property {number} [max_discount_value]
 * @property {number} [minimum_cart_value]
 * @property {boolean} [is_applicable]
 * @property {string} [description]
 * @property {string} [expires_on]
 * @property {string} [sub_title]
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
 * @property {string} [id]
 * @property {string} [checkout_mode]
 * @property {string} [cart_id]
 * @property {string} [created_by_user_id]
 * @property {string} [area]
 * @property {string} [name]
 * @property {string[]} [tags]
 * @property {Object} [meta]
 * @property {string} [country]
 * @property {Object} [google_map_point]
 * @property {string} [area_code]
 * @property {GeoLocation} [geo_location]
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [email]
 * @property {string} [area_code_slug]
 * @property {string} [address_type]
 * @property {string} [user_id]
 * @property {boolean} [is_active]
 * @property {string} [landmark]
 * @property {string} [phone]
 * @property {string} [country_code]
 * @property {string} [state]
 * @property {boolean} [is_default_address]
 */

/**
 * @typedef PlatformGetAddressesResponse
 * @property {PlatformAddress[]} [address]
 */

/**
 * @typedef SaveAddressResponse
 * @property {boolean} [success]
 * @property {string} [id]
 * @property {boolean} [is_default_address]
 */

/**
 * @typedef UpdateAddressResponse
 * @property {boolean} [is_updated]
 * @property {boolean} [success]
 * @property {string} [id]
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
 * @property {string} [billing_address_id]
 * @property {string} [checkout_mode]
 * @property {string} [cart_id]
 */

/**
 * @typedef ShipmentResponse
 * @property {string} [order_type]
 * @property {number} [fulfillment_id]
 * @property {CartProductInfo[]} [items]
 * @property {number} [shipments]
 * @property {Object} [dp_options]
 * @property {string} [dp_id]
 * @property {ShipmentPromise} [promise]
 * @property {string} [box_type]
 * @property {string} [shipment_type]
 * @property {string} [fulfillment_type]
 */

/**
 * @typedef CartShipmentsResponse
 * @property {string} [id]
 * @property {string} [checkout_mode]
 * @property {string} [coupon_text]
 * @property {ShipmentResponse[]} [shipments]
 * @property {number} [cart_id]
 * @property {boolean} [error]
 * @property {boolean} [buy_now]
 * @property {boolean} [is_valid]
 * @property {boolean} [restrict_checkout]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [message]
 * @property {string} [uid]
 * @property {string} [gstin]
 * @property {string} [delivery_charge_info]
 * @property {string} [last_modified]
 * @property {string} [comment]
 * @property {CartCurrency} [currency]
 */

/**
 * @typedef UpdateCartShipmentItem
 * @property {string} article_uid
 * @property {string} shipment_type
 * @property {number} [quantity]
 */

/**
 * @typedef UpdateCartShipmentRequest
 * @property {UpdateCartShipmentItem[]} shipments
 */

/**
 * @typedef PlatformCartMetaRequest
 * @property {string} [checkout_mode]
 * @property {string} [gstin]
 * @property {string} [pan_no]
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
 * @typedef Files
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef StaffCheckout
 * @property {string} first_name
 * @property {string} user
 * @property {string} last_name
 * @property {string} [employee_code]
 * @property {string} _id
 */

/**
 * @typedef PlatformCartCheckoutDetailRequest
 * @property {string} id
 * @property {Object} [delivery_address]
 * @property {string} [aggregator]
 * @property {boolean} [pos]
 * @property {string} payment_mode
 * @property {string} order_type
 * @property {number} [pick_at_store_uid]
 * @property {Object} [meta]
 * @property {Files[]} [files]
 * @property {Object} [payment_params]
 * @property {Object} [extra_meta]
 * @property {string} [payment_identifier]
 * @property {string} [address_id]
 * @property {StaffCheckout} [staff]
 * @property {string} [merchant_code]
 * @property {boolean} [payment_auto_confirm]
 * @property {string} user_id
 * @property {string} [billing_address_id]
 * @property {Object} [billing_address]
 * @property {string} [callback_url]
 * @property {number} [ordering_store]
 */

/**
 * @typedef CheckCart
 * @property {CartProductInfo[]} [items]
 * @property {string} [id]
 * @property {string} [store_code]
 * @property {string} [checkout_mode]
 * @property {string} [coupon_text]
 * @property {number} [cart_id]
 * @property {string} [cod_message]
 * @property {boolean} [restrict_checkout]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [user_type]
 * @property {string} [message]
 * @property {string} [uid]
 * @property {number} [delivery_charges]
 * @property {string} [delivery_charge_info]
 * @property {CartCurrency} [currency]
 * @property {boolean} [buy_now]
 * @property {number} [delivery_charge_order_value]
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [order_id]
 * @property {boolean} [success]
 * @property {boolean} [cod_available]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [gstin]
 * @property {string} [error_message]
 * @property {number} [cod_charges]
 * @property {Object[]} [store_emps]
 * @property {string} [last_modified]
 * @property {string} [comment]
 */

/**
 * @typedef CartCheckoutResponse
 * @property {string} [message]
 * @property {Object} [data]
 * @property {string} [payment_confirm_url]
 * @property {string} [app_intercept_url]
 * @property {string} [callback_url]
 * @property {string} [order_id]
 * @property {CheckCart} [cart]
 * @property {boolean} [success]
 */

/**
 * @typedef CartDeliveryModesResponse
 * @property {string[]} [available_modes]
 * @property {number[]} [pickup_stores]
 */

/**
 * @typedef PickupStoreDetail
 * @property {string} [state]
 * @property {number} [id]
 * @property {string} [store_code]
 * @property {string} [email]
 * @property {number} [pincode]
 * @property {string} [landmark]
 * @property {string} [country]
 * @property {number} [uid]
 * @property {string} [area_code]
 * @property {string} [area_code_slug]
 * @property {string} [phone]
 * @property {string} [address]
 * @property {string} [area]
 * @property {string} [name]
 * @property {string} [address_type]
 * @property {string} [city]
 */

/**
 * @typedef StoreDetailsResponse
 * @property {PickupStoreDetail[]} [items]
 */

/**
 * @typedef UpdateCartPaymentRequest
 * @property {string} [id]
 * @property {string} [payment_identifier]
 * @property {string} [merchant_code]
 * @property {string} [address_id]
 * @property {string} [aggregator_name]
 * @property {string} [payment_mode]
 */

/**
 * @typedef CouponValidity
 * @property {number} [discount]
 * @property {string} [title]
 * @property {string} [display_message_en]
 * @property {boolean} [valid]
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

module.exports = PlatformApplicationClient;
