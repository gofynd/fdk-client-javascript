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

const Serviceability = require("./Serviceability/ServiceabilityPlatformClient");

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

    this.serviceability = new Serviceability(config);
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
 * @property {Ticket} ticket
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
 * @property {string} category
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
 * @typedef GenerateSEOContent
 * @property {string} [text]
 * @property {string} [existing_text]
 * @property {string[]} [keywords]
 * @property {string} [type]
 */

/**
 * @typedef GeneratedSEOContent
 * @property {string} [title]
 * @property {string} [description]
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
 * @property {PathSourceSchema} [__source]
 */

/**
 * @typedef PathSourceSchema
 * @property {string} [type]
 * @property {string} [id]
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
 * @property {string} app_id
 * @property {string[]} excluded_fields
 * @property {boolean} created
 * @property {Object[]} [aggregators]
 * @property {boolean} success
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
 * @property {string} secret
 * @property {string} merchant_salt
 * @property {string} key
 * @property {boolean} [is_active]
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {string} app_id
 * @property {boolean} [is_active]
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
 * @property {string} small
 * @property {string} large
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [package_name]
 * @property {string} [code]
 */

/**
 * @typedef IntentApp
 * @property {string} [display_name]
 * @property {PaymentModeLogo} [logos]
 * @property {string} [package_name]
 * @property {string} [code]
 */

/**
 * @typedef PaymentModeList
 * @property {number} [cod_limit]
 * @property {boolean} [expired]
 * @property {string[]} [intent_app_error_list]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {string} [code]
 * @property {number} [timeout]
 * @property {string} [display_name]
 * @property {number} [display_priority]
 * @property {PaymentModeLogo} [logo_url]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {string} [merchant_code]
 * @property {string} [name]
 * @property {string} [fynd_vpa]
 * @property {string} [card_id]
 * @property {string} [card_brand_image]
 * @property {number} [exp_month]
 * @property {string} [card_brand]
 * @property {string} [nickname]
 * @property {boolean} [intent_flow]
 * @property {number} [exp_year]
 * @property {string} [card_isin]
 * @property {number} [remaining_limit]
 * @property {string} [card_reference]
 * @property {string} [card_issuer]
 * @property {number} [cod_limit_per_order]
 * @property {string} [card_type]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [card_number]
 * @property {string} [card_token]
 * @property {number} [retry_count]
 * @property {string} [card_fingerprint]
 * @property {string} aggregator_name
 * @property {string} [card_name]
 */

/**
 * @typedef RootPaymentMode
 * @property {string} display_name
 * @property {number} display_priority
 * @property {boolean} [is_pay_by_card_pl]
 * @property {string} name
 * @property {boolean} [save_card]
 * @property {boolean} [add_card_enabled]
 * @property {boolean} [anonymous_enable]
 * @property {string} [aggregator_name]
 * @property {PaymentModeList[]} [list]
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
 * @typedef PayoutsResponse
 * @property {Object} unique_transfer_no
 * @property {Object} more_attributes
 * @property {Object} customers
 * @property {boolean} is_default
 * @property {string} transfer_type
 * @property {boolean} is_active
 * @property {Object[]} payouts_aggregators
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} ifsc_code
 * @property {string} account_type
 * @property {string} [account_no]
 * @property {string} [account_holder]
 * @property {string} [bank_name]
 * @property {string} [city]
 * @property {string} [branch_name]
 * @property {number} [pincode]
 */

/**
 * @typedef PayoutRequest
 * @property {string} unique_external_id
 * @property {string} aggregator
 * @property {Object} users
 * @property {PayoutBankDetails} bank_details
 * @property {string} transfer_type
 * @property {boolean} is_active
 */

/**
 * @typedef PayoutResponse
 * @property {string} unique_transfer_no
 * @property {boolean} created
 * @property {string} payment_status
 * @property {Object} payouts
 * @property {Object} users
 * @property {string} transfer_type
 * @property {Object} bank_details
 * @property {string} aggregator
 * @property {boolean} success
 * @property {boolean} is_active
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
 * @property {string} unique_external_id
 * @property {boolean} is_active
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
 * @property {Object} [data]
 * @property {string} message
 * @property {boolean} success
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
 * @property {string} ifsc_code
 * @property {string} account_holder
 * @property {string} account_no
 * @property {string} bank_name
 * @property {string} branch_name
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
 * @property {string} created_on
 * @property {string} [comment]
 * @property {string} email
 * @property {string} account_no
 * @property {string} beneficiary_id
 * @property {string} display_name
 * @property {string} [delights_user_name]
 * @property {string} subtitle
 * @property {number} id
 * @property {boolean} is_active
 * @property {string} account_holder
 * @property {string} address
 * @property {string} bank_name
 * @property {string} title
 * @property {string} [branch_name]
 * @property {string} [mobile]
 * @property {string} ifsc_code
 * @property {string} modified_on
 * @property {string} transfer_mode
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 * @property {boolean} [show_beneficiary_details]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [payment_id]
 * @property {string} [payment_gateway]
 * @property {string} [order_id]
 * @property {Object} [extra_meta]
 * @property {string} [current_status]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} [name]
 * @property {string} mode
 * @property {number} amount
 * @property {MultiTenderPaymentMeta} [meta]
 */

/**
 * @typedef PaymentConfirmationRequest
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} order_id
 */

/**
 * @typedef PaymentConfirmationResponse
 * @property {string} order_id
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef CODdata
 * @property {number} limit
 * @property {number} remaining_limit
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
 * @property {string} mobileno
 * @property {boolean} is_active
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
 * @property {string[]} models
 * @property {number} aggregator_id
 */

/**
 * @typedef EdcAggregatorAndModelListResponse
 * @property {EdcModelData[]} data
 * @property {boolean} success
 */

/**
 * @typedef StatisticsData
 * @property {number} active_device_count
 * @property {number} inactive_device_count
 */

/**
 * @typedef EdcDeviceStatsResponse
 * @property {StatisticsData} statistics
 * @property {boolean} success
 */

/**
 * @typedef EdcAddRequest
 * @property {number} store_id
 * @property {string} [device_tag]
 * @property {string} edc_device_serial_no
 * @property {number} aggregator_id
 * @property {string} terminal_serial_no
 * @property {string} edc_model
 */

/**
 * @typedef EdcDevice
 * @property {string} [merchant_store_pos_code]
 * @property {string} terminal_unique_identifier
 * @property {string} application_id
 * @property {number} store_id
 * @property {string} device_tag
 * @property {string} edc_device_serial_no
 * @property {number} aggregator_id
 * @property {string} [aggregator_name]
 * @property {string} terminal_serial_no
 * @property {string} [edc_model]
 * @property {boolean} is_active
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
 * @property {string} [merchant_store_pos_code]
 * @property {number} [store_id]
 * @property {string} [device_tag]
 * @property {string} [edc_device_serial_no]
 * @property {number} [aggregator_id]
 * @property {string} [edc_model]
 * @property {boolean} [is_active]
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
 * @property {EdcDevice[]} items
 * @property {Page} page
 * @property {boolean} success
 */

/**
 * @typedef PaymentInitializationRequest
 * @property {string} merchant_order_id
 * @property {string} method
 * @property {string} [vpa]
 * @property {string} order_id
 * @property {string} [razorpay_payment_id]
 * @property {string} currency
 * @property {string} customer_id
 * @property {string} [device_id]
 * @property {string} email
 * @property {number} amount
 * @property {number} [timeout]
 * @property {string} aggregator
 * @property {string} contact
 */

/**
 * @typedef PaymentInitializationResponse
 * @property {string} [bqr_image]
 * @property {string} [virtual_id]
 * @property {string} merchant_order_id
 * @property {string} [aggregator_order_id]
 * @property {string} method
 * @property {string} [vpa]
 * @property {string} polling_url
 * @property {string} [upi_poll_url]
 * @property {string} [status]
 * @property {string} [currency]
 * @property {string} [customer_id]
 * @property {string} [razorpay_payment_id]
 * @property {string} [device_id]
 * @property {number} [amount]
 * @property {number} [timeout]
 * @property {string} aggregator
 * @property {boolean} success
 */

/**
 * @typedef PaymentStatusUpdateRequest
 * @property {string} merchant_order_id
 * @property {string} method
 * @property {string} [vpa]
 * @property {string} order_id
 * @property {string} status
 * @property {string} currency
 * @property {string} customer_id
 * @property {string} [device_id]
 * @property {string} email
 * @property {number} amount
 * @property {string} aggregator
 * @property {string} contact
 */

/**
 * @typedef PaymentStatusUpdateResponse
 * @property {string} status
 * @property {boolean} retry
 * @property {string} [redirect_url]
 * @property {string} aggregator_name
 * @property {boolean} [success]
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
 * @property {LinkStatus} data
 * @property {boolean} success
 */

/**
 * @typedef FilterInfoOption
 * @property {string} [name]
 * @property {string} text
 * @property {string} [value]
 */

/**
 * @typedef FiltersInfo
 * @property {FilterInfoOption[]} [options]
 * @property {string} type
 * @property {string} text
 * @property {string} value
 */

/**
 * @typedef ShipmentStatus
 * @property {string} hex_code
 * @property {string} ops_status
 * @property {string} actual_status
 * @property {string} title
 * @property {string} status
 */

/**
 * @typedef GSTDetailsData
 * @property {number} gst_fee
 * @property {number} brand_calculated_amount
 * @property {number} tax_collected_at_source
 * @property {number} value_of_good
 * @property {string} gstin_code
 */

/**
 * @typedef Prices
 * @property {number} [price_marked]
 * @property {number} [fynd_credits]
 * @property {number} [cashback_applied]
 * @property {number} [cod_charges]
 * @property {number} [cashback]
 * @property {number} [promotion_effective_discount]
 * @property {number} [coupon_value]
 * @property {number} [amount_paid]
 * @property {number} [price_effective]
 * @property {number} [discount]
 * @property {number} [transfer_price]
 * @property {number} [refund_amount]
 * @property {number} [refund_credit]
 * @property {number} [delivery_charge]
 * @property {number} [value_of_good]
 * @property {number} [tax_collected_at_source]
 * @property {number} [amount_paid_roundoff]
 */

/**
 * @typedef PlatformItem
 * @property {boolean} [can_cancel]
 * @property {number} [l3_category]
 * @property {string[]} [image]
 * @property {string} [color]
 * @property {string[]} [images]
 * @property {number} [department_id]
 * @property {number} [id]
 * @property {string} [l3_category_name]
 * @property {string} [name]
 * @property {string} [size]
 * @property {string} [code]
 * @property {string[]} [l1_category]
 * @property {boolean} [can_return]
 */

/**
 * @typedef BagUnit
 * @property {boolean} [can_cancel]
 * @property {number} bag_id
 * @property {string} ordering_channel
 * @property {GSTDetailsData} [gst]
 * @property {number} total_shipment_bags
 * @property {Object} status
 * @property {string} shipment_id
 * @property {Prices} [prices]
 * @property {number} item_quantity
 * @property {PlatformItem} [item]
 * @property {boolean} [can_return]
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
 * @typedef UserDataInfo
 * @property {string} [avis_user_id]
 * @property {string} [mobile]
 * @property {string} [gender]
 * @property {string} [email]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [name]
 * @property {string} [first_name]
 * @property {number} [uid]
 * @property {string} [last_name]
 */

/**
 * @typedef ShipmentItem
 * @property {Object} [channel]
 * @property {ShipmentStatus} [shipment_status]
 * @property {BagUnit[]} [bags]
 * @property {string} fulfilling_centre
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {number} total_bags_count
 * @property {string} created_at
 * @property {Object} [payment_methods]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {UserDataInfo} [user]
 * @property {string} [shipment_id]
 * @property {string} id
 * @property {Object} [sla]
 * @property {Object} [application]
 * @property {string} shipment_created_at
 * @property {Prices} [prices]
 * @property {number} total_shipments_in_order
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
 * @typedef Dimensions
 * @property {number} [height]
 * @property {string} [unit]
 * @property {boolean} [is_default]
 * @property {number} [length]
 * @property {number} [width]
 */

/**
 * @typedef Meta
 * @property {Dimensions} [dimension]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [source]
 * @property {string} [mode]
 * @property {string} [logo]
 */

/**
 * @typedef OrderingStoreDetails
 * @property {number} ordering_store_id
 * @property {string} state
 * @property {Object} meta
 * @property {string} contact_person
 * @property {string} address
 * @property {string} phone
 * @property {string} country
 * @property {string} store_name
 * @property {string} city
 * @property {string} pincode
 * @property {string} code
 */

/**
 * @typedef OrderDetailsData
 * @property {Object} [tax_details]
 * @property {string} [cod_charges]
 * @property {string} [ordering_channel]
 * @property {string} [source]
 * @property {Object} [ordering_channel_logo]
 * @property {string} [order_value]
 * @property {string} [affiliate_id]
 * @property {string} fynd_order_id
 * @property {string} [order_date]
 */

/**
 * @typedef PhoneDetails
 * @property {string} [mobile_number]
 * @property {number} [country_code]
 */

/**
 * @typedef ContactDetails
 * @property {PhoneDetails[]} [phone]
 * @property {string[]} [emails]
 */

/**
 * @typedef CompanyDetails
 * @property {Object} [address]
 * @property {string} [company_cin]
 * @property {string} [company_name]
 * @property {string} [company_gst]
 * @property {ContactDetails} [company_contact]
 * @property {number} [company_id]
 */

/**
 * @typedef UserDetailsData
 * @property {string} state
 * @property {string} [area]
 * @property {string} address
 * @property {string} phone
 * @property {string} [address_type]
 * @property {string} country
 * @property {string} [address1]
 * @property {string} [email]
 * @property {string} city
 * @property {string} name
 * @property {string} pincode
 * @property {string} [landmark]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {number} [latitude]
 * @property {string} [state]
 * @property {string} [address_category]
 * @property {string} [area]
 * @property {number} [longitude]
 * @property {string} [address_type]
 * @property {string} [phone]
 * @property {string} [contact_person]
 * @property {string} [country]
 * @property {string} [updated_at]
 * @property {string} [address1]
 * @property {string} [email]
 * @property {string} [version]
 * @property {string} [created_at]
 * @property {string} [city]
 * @property {string} [pincode]
 * @property {string} [landmark]
 * @property {string} [address2]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} price_marked
 * @property {number} gst_fee
 * @property {boolean} added_to_fynd_cash
 * @property {number} delivery_charge
 * @property {number} fynd_credits
 * @property {number} cashback
 * @property {string} gst_tag
 * @property {number} amount_paid
 * @property {number} price_effective
 * @property {number} gst_tax_percentage
 * @property {string} size
 * @property {number} [amount_paid_roundoff]
 * @property {number} promotion_effective_discount
 * @property {string} hsn_code
 * @property {number} brand_calculated_amount
 * @property {number} coupon_effective_discount
 * @property {number} discount
 * @property {number} refund_credit
 * @property {number} value_of_good
 * @property {number} cashback_applied
 * @property {number} cod_charges
 * @property {Identifier} identifiers
 * @property {number} coupon_value
 * @property {number} transfer_price
 * @property {number} total_units
 * @property {number} [tax_collected_at_source]
 * @property {string} item_name
 */

/**
 * @typedef OrderBrandName
 * @property {string} created_on
 * @property {string} logo
 * @property {string} company
 * @property {string} brand_name
 * @property {string} [modified_on]
 * @property {number} id
 */

/**
 * @typedef BagConfigs
 * @property {boolean} is_active
 * @property {boolean} allow_force_return
 * @property {boolean} is_returnable
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef BagStateMapper
 * @property {boolean} [is_active]
 * @property {boolean} [app_facing]
 * @property {string} state_type
 * @property {boolean} [notify_customer]
 * @property {string} display_name
 * @property {number} bs_id
 * @property {string} journey_type
 * @property {string} [app_display_name]
 * @property {string} name
 * @property {string} [app_state_name]
 */

/**
 * @typedef CurrentStatus
 * @property {boolean} [kafka_sync]
 * @property {number} current_status_id
 * @property {number} [delivery_partner_id]
 * @property {string} [state_type]
 * @property {number} [bag_id]
 * @property {string} [updated_at]
 * @property {number} [store_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [delivery_awb_number]
 * @property {string} [created_at]
 * @property {number} [state_id]
 * @property {string} [shipment_id]
 * @property {string} [status]
 */

/**
 * @typedef OrderBagArticle
 * @property {Object} [return_config]
 * @property {Object} [identifiers]
 * @property {string} [uid]
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
 * @property {string} [type]
 * @property {number} [value]
 */

/**
 * @typedef AppliedPromos
 * @property {number} [article_quantity]
 * @property {string} [promotion_type]
 * @property {boolean} [mrp_promotion]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_name]
 * @property {DiscountRules[]} [discount_rules]
 * @property {number} [amount]
 * @property {string} [promo_id]
 */

/**
 * @typedef BagGST
 * @property {string} [gst_tag]
 * @property {number} [gst_fee]
 * @property {string} [hsn_code]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [gst_tax_percentage]
 * @property {number} [brand_calculated_amount]
 * @property {number} [value_of_good]
 * @property {string} [gstin_code]
 */

/**
 * @typedef OrderBags
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {FinancialBreakup} [financial_breakup]
 * @property {PlatformItem} [item]
 * @property {boolean} [can_return]
 * @property {OrderBrandName} [brand]
 * @property {string} [identifier]
 * @property {BagConfigs} [bag_configs]
 * @property {Prices} [prices]
 * @property {CurrentStatus} [current_status]
 * @property {boolean} [can_cancel]
 * @property {number} [quantity]
 * @property {OrderBagArticle} [article]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {BagGST} [gst_details]
 * @property {number} bag_id
 * @property {string} [display_name]
 * @property {string} [seller_identifier]
 * @property {string} [entity_type]
 * @property {Object} [parent_promo_bags]
 * @property {number} [line_number]
 */

/**
 * @typedef AffiliateMeta
 * @property {string} [channel_order_id]
 * @property {number} [employee_discount]
 * @property {number} [quantity]
 * @property {string} [coupon_code]
 * @property {string} [due_date]
 * @property {boolean} [is_priority]
 * @property {string} [order_item_id]
 * @property {number} [loyalty_discount]
 * @property {string} [channel_shipment_id]
 * @property {number} [size_level_total_qty]
 * @property {string} [box_type]
 */

/**
 * @typedef PDFLinks
 * @property {string} [invoice_a4]
 * @property {string} [invoice]
 * @property {string} [credit_note_url]
 * @property {string} [b2b]
 * @property {string} [label]
 * @property {string} label_type
 * @property {string} [label_a6]
 * @property {string} [po_invoice]
 * @property {string} [delivery_challan_a4]
 * @property {string} [invoice_pos]
 * @property {string} [label_pos]
 * @property {string} [label_a4]
 * @property {string} invoice_type
 * @property {string} [invoice_a6]
 */

/**
 * @typedef BuyerDetails
 * @property {string} state
 * @property {string} [ajio_site_id]
 * @property {string} address
 * @property {string} gstin
 * @property {string} city
 * @property {string} name
 * @property {number} pincode
 */

/**
 * @typedef LockData
 * @property {boolean} [mto]
 * @property {boolean} [locked]
 * @property {string} [lock_message]
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef EinvoiceInfo
 * @property {Object} [credit_note]
 * @property {Object} [invoice]
 */

/**
 * @typedef Formatted
 * @property {string} [f_max]
 * @property {string} [f_min]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_min]
 * @property {string} [t_max]
 */

/**
 * @typedef ShipmentMeta
 * @property {Object} [external]
 * @property {string} [dp_id]
 * @property {string} [forward_affiliate_order_id]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {string} [return_awb_number]
 * @property {string} [box_type]
 * @property {Object} [ewaybill_info]
 * @property {Object} [b2c_buyer_details]
 * @property {number} weight
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [marketplace_store_id]
 * @property {LockData} [lock_data]
 * @property {Object} [return_details]
 * @property {string} [fulfilment_priority_text]
 * @property {DebugInfo} [debug_info]
 * @property {Object} [dp_options]
 * @property {string} [store_invoice_updated_date]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [awb_number]
 * @property {string} [dp_sort_key]
 * @property {string} [return_affiliate_shipment_id]
 * @property {number} [shipment_volumetric_weight]
 * @property {Formatted} [formatted]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {Object} [bag_weight]
 * @property {string} [packaging_name]
 * @property {string} [order_type]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {string} [dp_name]
 * @property {string} [po_number]
 * @property {number} [return_store_node]
 * @property {string} [return_affiliate_order_id]
 * @property {string} [due_date]
 * @property {boolean} same_store_available
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {number} [shipment_weight]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_order_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {PDFLinks} [pdf_links]
 * @property {ShipmentMeta} shipment_meta
 * @property {string} [company_affiliate_tag]
 * @property {string} [affiliate_id]
 * @property {string} affiliate_store_id
 * @property {string} affiliate_shipment_id
 * @property {string} [ad_id]
 */

/**
 * @typedef FulfillingStore
 * @property {string} state
 * @property {Object} meta
 * @property {string} code
 * @property {string} contact_person
 * @property {string} address
 * @property {string} phone
 * @property {string} country
 * @property {string} fulfillment_channel
 * @property {string} store_name
 * @property {string} city
 * @property {string} pincode
 * @property {number} id
 */

/**
 * @typedef DPDetailsData
 * @property {string} [gst_tag]
 * @property {string} [awb_no]
 * @property {string} [country]
 * @property {string} [track_url]
 * @property {string} [name]
 * @property {string} [eway_bill_id]
 * @property {number} [id]
 * @property {string} [pincode]
 */

/**
 * @typedef InvoiceInfo
 * @property {string} [store_invoice_id]
 * @property {string} [invoice_url]
 * @property {string} [label_url]
 * @property {string} [credit_note_id]
 * @property {string} [updated_date]
 */

/**
 * @typedef BagStatusHistory
 * @property {boolean} [kafka_sync]
 * @property {number} [delivery_partner_id]
 * @property {Object[]} [reasons]
 * @property {number} [bag_id]
 * @property {string} [state_type]
 * @property {string} [updated_at]
 * @property {string} [display_name]
 * @property {number} [store_id]
 * @property {BagStateMapper} [bag_state_mapper]
 * @property {string} [delivery_awb_number]
 * @property {boolean} [forward]
 * @property {string} [created_at]
 * @property {number} [state_id]
 * @property {string} [app_display_name]
 * @property {string} [shipment_id]
 * @property {string} status
 * @property {number} [bsh_id]
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [created_at]
 * @property {string} [shipment_id]
 * @property {number} [id]
 * @property {string[]} [bag_list]
 * @property {string} [status]
 */

/**
 * @typedef TrackingList
 * @property {string} text
 * @property {boolean} [is_passed]
 * @property {boolean} [is_current]
 * @property {string} [time]
 * @property {string} status
 */

/**
 * @typedef PlatformShipment
 * @property {string} [shipment_status]
 * @property {string} [operational_status]
 * @property {Meta} [meta]
 * @property {string} [vertical]
 * @property {number} [fulfilment_priority]
 * @property {ShipmentPayments} [payments]
 * @property {OrderingStoreDetails} [ordering_store]
 * @property {OrderDetailsData} [order]
 * @property {CompanyDetails} [company_details]
 * @property {Object} [payment_methods]
 * @property {UserDataInfo} [user]
 * @property {boolean} [lock_status]
 * @property {UserDetailsData} [billing_details]
 * @property {number} [total_items]
 * @property {Object} [coupon]
 * @property {string} [user_agent]
 * @property {OrderBags[]} [bags]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {number} [shipment_quantity]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {number} [total_bags]
 * @property {string} shipment_id
 * @property {string} [picked_date]
 * @property {Object} [delivery_slot]
 * @property {DPDetailsData} [dp_details]
 * @property {Prices} [prices]
 * @property {string} [payment_mode]
 * @property {InvoiceInfo} [invoice]
 * @property {string[]} [shipment_images]
 * @property {GSTDetailsData} [gst_details]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [journey_type]
 * @property {ShipmentStatusData} [status]
 * @property {boolean} [enable_dp_tracking]
 * @property {string} [packaging_type]
 * @property {string} [invoice_id]
 * @property {string} [platform_logo]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [priority_text]
 * @property {string} [forward_shipment_id]
 * @property {UserDetailsData} [delivery_details]
 * @property {Object[]} [custom_meta]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {PlatformShipment[]} [shipments]
 * @property {boolean} success
 * @property {string} [message]
 */

/**
 * @typedef TaxDetails
 * @property {string} [gstin]
 * @property {string} [pan_no]
 */

/**
 * @typedef BillingStaffDetails
 * @property {string} [user]
 * @property {string} [first_name]
 * @property {number} [staff_id]
 * @property {string} [employee_code]
 * @property {string} [last_name]
 */

/**
 * @typedef TransactionData
 * @property {string} [payment_id]
 * @property {string} [currency]
 * @property {string} [unique_reference_number]
 * @property {string} [amount_paid]
 * @property {string} [terminal_id]
 * @property {string} [entity]
 * @property {string} [transaction_id]
 * @property {string} [status]
 */

/**
 * @typedef PlatformUserDetails
 * @property {string} [platform_user_first_name]
 * @property {string} [platform_user_employee_code]
 * @property {string} [platform_user_last_name]
 * @property {string} [platform_user_id]
 */

/**
 * @typedef OrderMeta
 * @property {BillingStaffDetails} [billing_staff_details]
 * @property {number} [cart_id]
 * @property {Object} [staff]
 * @property {number} [ordering_store]
 * @property {string} [customer_note]
 * @property {string} [company_logo]
 * @property {number} [mongo_cart_id]
 * @property {string} [payment_type]
 * @property {string[]} [order_child_entities]
 * @property {string} [currency_symbol]
 * @property {number} [employee_id]
 * @property {string} [order_type]
 * @property {TransactionData} [transaction_data]
 * @property {string} [order_platform]
 * @property {Object} [extra_meta]
 * @property {Object[]} [order_tags]
 * @property {PlatformUserDetails} [platform_user_details]
 * @property {Object[]} [files]
 * @property {string} [comment]
 */

/**
 * @typedef OrderDict
 * @property {TaxDetails} [tax_details]
 * @property {OrderMeta} [meta]
 * @property {Object} [payment_methods]
 * @property {string} fynd_order_id
 * @property {string} order_date
 * @property {Prices} [prices]
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {PlatformShipment[]} [shipments]
 * @property {boolean} success
 * @property {OrderDict} [order]
 */

/**
 * @typedef SubLane
 * @property {number} [total_items]
 * @property {number} [index]
 * @property {string} [text]
 * @property {Object[]} [actions]
 * @property {string} [value]
 */

/**
 * @typedef SuperLane
 * @property {number} [total_items]
 * @property {SubLane[]} [options]
 * @property {string} text
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
 * @property {string} [value]
 * @property {string} [name]
 * @property {string} [display]
 */

/**
 * @typedef PlatformOrderItems
 * @property {PlatformChannel} [channel]
 * @property {Object} [meta]
 * @property {number} [total_order_value]
 * @property {PlatformShipment[]} [shipments]
 * @property {string} [order_id]
 * @property {UserDataInfo} [user_info]
 * @property {number} [order_value]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {string} [payment_mode]
 * @property {string} [order_created_time]
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
 * @property {PlatformOrderItems[]} [items]
 * @property {boolean} [success]
 * @property {Page} [page]
 * @property {number} [total_count]
 */

/**
 * @typedef Options
 * @property {string} [text]
 * @property {number} [value]
 */

/**
 * @typedef MetricsCount
 * @property {string} key
 * @property {number} value
 * @property {string} text
 * @property {Options[]} [options]
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {Object} [meta]
 * @property {string} [reason]
 * @property {string} [raw_status]
 * @property {string} [updated_at]
 * @property {string} [shipment_type]
 * @property {string} [last_location_recieved_at]
 * @property {string} [awb]
 * @property {string} [updated_time]
 * @property {string} [status]
 * @property {string} [account_name]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {Object} [meta]
 * @property {PlatformTrack[]} [results]
 */

/**
 * @typedef FiltersResponse
 * @property {Object[]} [advance]
 */

/**
 * @typedef Success
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef OmsReports
 * @property {string} [report_requested_at]
 * @property {Object} [request_details]
 * @property {string} [report_created_at]
 * @property {string} [s3_key]
 * @property {string} [display_name]
 * @property {string} [report_type]
 * @property {string} [report_name]
 * @property {string} [report_id]
 * @property {string} [status]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [article_id]
 * @property {string} [item_id]
 * @property {string} [jio_code]
 * @property {string} [company_id]
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
 * @property {NestedErrorSchemaDataSet[]} [error]
 * @property {string} [trace_id]
 * @property {Object[]} [data]
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
 * @property {Object} [label]
 * @property {Object} [invoice]
 * @property {string} batch_id
 * @property {string} [invoice_status]
 * @property {Object} [data]
 * @property {string} [store_id]
 * @property {string} [store_code]
 * @property {string} [store_name]
 * @property {boolean} do_invoice_label_generated
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
 * @property {string} [content_type]
 * @property {string} [file_name]
 * @property {string} [method]
 * @property {string} [namespace]
 * @property {string} [file_path]
 * @property {FileUploadResponse} [upload]
 * @property {URL} [cdn]
 * @property {number} [size]
 * @property {string[]} [tags]
 * @property {string} [operation]
 */

/**
 * @typedef BulkListingPage
 * @property {number} [total]
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 */

/**
 * @typedef bulkListingData
 * @property {string} [store_name]
 * @property {string} [user_name]
 * @property {string} [uploaded_on]
 * @property {number} [company_id]
 * @property {number} [failed]
 * @property {number} [processing]
 * @property {string} [store_code]
 * @property {string} [id]
 * @property {Object[]} [successful_shipments]
 * @property {number} [total]
 * @property {number} [store_id]
 * @property {number} [successful]
 * @property {string} [status]
 * @property {string} [user_id]
 * @property {string} [batch_id]
 * @property {string} [file_name]
 * @property {Object[]} [failed_shipments]
 * @property {string} [excel_url]
 * @property {string[]} [processing_shipments]
 */

/**
 * @typedef BulkListingResponse
 * @property {boolean} [success]
 * @property {BulkListingPage} [page]
 * @property {bulkListingData[]} [data]
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
 * @property {string[]} [qc_type]
 * @property {QuestionSet[]} [question_set]
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
 * @property {string} [batch_id]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [total_shipments_count]
 * @property {number} [failed_shipments_count]
 * @property {number} [processing_shipments_count]
 * @property {string} [company_id]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {string} [user_id]
 * @property {string} [message]
 * @property {string} [uploaded_by]
 * @property {string[]} [error]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string} [success]
 * @property {string[]} [failed_records]
 * @property {string} [uploaded_on]
 * @property {boolean} [status]
 */

/**
 * @typedef B2BPODetails
 * @property {number} [po_line_amount]
 * @property {number} [item_base_price]
 * @property {number} [po_tax_amount]
 * @property {boolean} [partial_can_ret]
 * @property {number} [total_gst_percentage]
 * @property {string} [docker_number]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef Dates
 * @property {string} [order_created]
 * @property {Object} [delivery_date]
 */

/**
 * @typedef StoreEwaybill
 * @property {boolean} [enabled]
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [username]
 * @property {boolean} enabled
 * @property {string} [password]
 * @property {string} [user]
 */

/**
 * @typedef StoreGstCredentials
 * @property {StoreEwaybill} [e_waybill]
 * @property {StoreEinvoice} [e_invoice]
 */

/**
 * @typedef Document
 * @property {string} [url]
 * @property {boolean} verified
 * @property {string} ds_type
 * @property {string} legal_name
 * @property {string} value
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [username]
 * @property {string} [password]
 * @property {string} [user]
 */

/**
 * @typedef StoreMeta
 * @property {string} stage
 * @property {string} display_name
 * @property {Object[]} [timing]
 * @property {Object} [additional_contact_details]
 * @property {Object} [product_return_config]
 * @property {Object} [ewaybill_portal_details]
 * @property {string[]} [notification_emails]
 * @property {string} [gst_number]
 * @property {StoreGstCredentials} gst_credentials
 * @property {StoreDocuments} [documents]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 */

/**
 * @typedef StoreAddress
 * @property {string} [area]
 * @property {number} longitude
 * @property {string} phone
 * @property {string} created_at
 * @property {string} address_category
 * @property {string} [version]
 * @property {string} [landmark]
 * @property {string} country_code
 * @property {number} latitude
 * @property {string} state
 * @property {string} contact_person
 * @property {string} address1
 * @property {number} pincode
 * @property {string} address_type
 * @property {string} country
 * @property {string} updated_at
 * @property {string} [email]
 * @property {string} city
 * @property {string} [address2]
 */

/**
 * @typedef Store
 * @property {StoreMeta} meta
 * @property {number} longitude
 * @property {string} [order_integration_id]
 * @property {number} phone
 * @property {string} [mall_name]
 * @property {Object} [brand_id]
 * @property {string} created_at
 * @property {string} name
 * @property {string} [code]
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} login_username
 * @property {number} company_id
 * @property {boolean} [is_archived]
 * @property {number} [parent_store_id]
 * @property {string[]} [brand_store_tags]
 * @property {number} [alohomora_user_id]
 * @property {string} [mall_area]
 * @property {number} latitude
 * @property {string} state
 * @property {string} contact_person
 * @property {StoreAddress} [store_address_json]
 * @property {string} s_id
 * @property {number} [packaging_material_count]
 * @property {string} address1
 * @property {string} store_email
 * @property {string} [store_active_from]
 * @property {string} pincode
 * @property {string} location_type
 * @property {boolean} [is_active]
 * @property {string} country
 * @property {string} [updated_at]
 * @property {string} fulfillment_channel
 * @property {string} city
 * @property {string} [vat_no]
 * @property {string} [address2]
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {number} [employee_discount]
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_order_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef Attributes
 * @property {string} [essential]
 * @property {string} [primary_material]
 * @property {string} [marketer_name]
 * @property {string} [primary_color]
 * @property {string[]} [gender]
 * @property {string} [marketer_address]
 * @property {string} [brand_name]
 * @property {string} [primary_color_hex]
 * @property {string} [name]
 */

/**
 * @typedef Item
 * @property {Object} [meta]
 * @property {number} [l3_category]
 * @property {Attributes} attributes
 * @property {number} brand_id
 * @property {string} name
 * @property {string} [code]
 * @property {string} [last_updated_at]
 * @property {string[]} [l1_category]
 * @property {boolean} [can_return]
 * @property {number} [l2_category_id]
 * @property {string} brand
 * @property {number} item_id
 * @property {string} [branch_url]
 * @property {string} [webstore_product_url]
 * @property {string[]} image
 * @property {string} slug_key
 * @property {string} size
 * @property {string[]} [l2_category]
 * @property {boolean} [can_cancel]
 * @property {string} [color]
 * @property {string} [l3_category_name]
 * @property {number} [l1_category_id]
 * @property {string} [gender]
 * @property {number} [department_id]
 */

/**
 * @typedef Brand
 * @property {boolean} [is_virtual_invoice]
 * @property {number} [created_on]
 * @property {boolean} [credit_note_allowed]
 * @property {string} [logo]
 * @property {string} company
 * @property {string} [invoice_prefix]
 * @property {number} [credit_note_expiry_days]
 * @property {string} [script_last_ran]
 * @property {number} brand_id
 * @property {number} [modified_on]
 * @property {string} [pickup_location]
 * @property {string} brand_name
 * @property {string} [start_date]
 */

/**
 * @typedef ReturnConfig
 * @property {number} [time]
 * @property {boolean} [returnable]
 * @property {string} [unit]
 */

/**
 * @typedef Weight
 * @property {string} [unit]
 * @property {boolean} [is_default]
 * @property {number} [shipping]
 */

/**
 * @typedef Article
 * @property {Object} [esp_modified]
 * @property {Identifier} identifiers
 * @property {boolean} [is_set]
 * @property {ReturnConfig} [return_config]
 * @property {Object} [raw_meta]
 * @property {Dimensions} [dimensions]
 * @property {Weight} [weight]
 * @property {string} seller_identifier
 * @property {Object} [a_set]
 * @property {Object} [child_details]
 * @property {string} _id
 * @property {string} size
 * @property {string} [code]
 * @property {string} uid
 */

/**
 * @typedef BagGSTDetails
 * @property {string} cgst_gst_fee
 * @property {number} igst_tax_percentage
 * @property {string} gst_tag
 * @property {number} gst_fee
 * @property {string} hsn_code
 * @property {boolean} [is_default_hsn_code]
 * @property {number} gst_tax_percentage
 * @property {number} brand_calculated_amount
 * @property {string} sgst_gst_fee
 * @property {string} igst_gst_fee
 * @property {string} hsn_code_id
 * @property {number} sgst_tax_percentage
 * @property {number} tax_collected_at_source
 * @property {number} value_of_good
 * @property {string} [gstin_code]
 * @property {number} cgst_tax_percentage
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_active
 * @property {boolean} is_returnable
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {BagMeta} [meta]
 * @property {string} [operational_status]
 * @property {Object[]} [reasons]
 * @property {string} [order_integration_id]
 * @property {boolean} [restore_coupon]
 * @property {Dates} [dates]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {Store} [ordering_store]
 * @property {BagStatusHistory} current_operational_status
 * @property {string} [b_type]
 * @property {ArticleDetails} [article_details]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {Item} item
 * @property {Brand} brand
 * @property {AffiliateDetails} [affiliate_details]
 * @property {Object} [qc_required]
 * @property {string} [identifier]
 * @property {string} [shipment_id]
 * @property {Prices} prices
 * @property {BagStatusHistory} current_status
 * @property {number} [quantity]
 * @property {number} [bag_update_time]
 * @property {Article} article
 * @property {number} [no_of_bags_order]
 * @property {Object[]} [applied_promos]
 * @property {BagGSTDetails} gst_details
 * @property {BagStatusHistory} [bag_status_history]
 * @property {number} b_id
 * @property {string} journey_type
 * @property {BagStatusHistory[]} bag_status
 * @property {string[]} [tags]
 * @property {BagReturnableCancelableStatus} status
 * @property {Object} [restore_promos]
 * @property {string} [display_name]
 * @property {string} [seller_identifier]
 * @property {number[]} [original_bag_list]
 * @property {string} [entity_type]
 * @property {Object} [parent_promo_bags]
 * @property {number} [line_number]
 */

/**
 * @typedef ErrorResponse
 * @property {string} error
 * @property {string} message
 */

/**
 * @typedef Page1
 * @property {number} current
 * @property {number} item_total
 * @property {number} size
 * @property {boolean} has_next
 * @property {string} page_type
 */

/**
 * @typedef GetBagsPlatformResponse
 * @property {Page1} page
 * @property {BagDetailsPlatformResponse[]} items
 */

/**
 * @typedef GeneratePosOrderReceiptResponse
 * @property {boolean} [success]
 * @property {string} [invoice_receipt]
 * @property {string} [payment_receipt]
 * @property {string} [order_id]
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
 * @property {string} message
 * @property {number} status
 * @property {string} [error_trace]
 */

/**
 * @typedef StoreReassign
 * @property {string} [item_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_order_id]
 * @property {number} store_id
 * @property {number} [bag_id]
 * @property {string} [affiliate_id]
 * @property {number[]} [reason_ids]
 * @property {string} [fynd_order_id]
 * @property {string} [mongo_article_id]
 * @property {string} [set_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Entities
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 * @property {string} reason_text
 * @property {string} [id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} action
 * @property {string} entity_type
 * @property {string} action_type
 * @property {Entities[]} entities
 */

/**
 * @typedef Bags
 * @property {number} [bag_id]
 * @property {boolean} [is_locked]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef OriginalFilter
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_shipment_id]
 */

/**
 * @typedef CheckResponse
 * @property {string} [shipment_id]
 * @property {Bags[]} [bags]
 * @property {string} [affiliate_shipment_id]
 * @property {boolean} [is_bag_locked]
 * @property {boolean} [is_shipment_locked]
 * @property {string} [status]
 * @property {string} [affiliate_id]
 * @property {OriginalFilter} [original_filter]
 * @property {boolean} [lock_status]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {CheckResponse[]} [check_response]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [platform_name]
 * @property {string} [to_datetime]
 * @property {string} [platform_id]
 * @property {string} [logo_url]
 * @property {string} [from_datetime]
 * @property {number} [company_id]
 * @property {string} [title]
 * @property {number} id
 * @property {string} [description]
 * @property {string} [created_at]
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
 * @typedef ProductsReasonsFilters
 * @property {number} [quantity]
 * @property {number} [line_number]
 * @property {string} [identifier]
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
 * @typedef ShipmentsRequest
 * @property {string} identifier
 * @property {Products[]} [products]
 * @property {ReasonsData} [reasons]
 * @property {DataUpdates} [data_updates]
 */

/**
 * @typedef StatuesRequest
 * @property {string} [exclude_bags_next_state]
 * @property {string} [status]
 * @property {ShipmentsRequest[]} [shipments]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [task]
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [force_transition]
 */

/**
 * @typedef ShipmentsResponse
 * @property {Object} [final_state]
 * @property {number} [status]
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {string} [code]
 * @property {string} [stack_trace]
 * @property {string} [identifier]
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
 * @typedef AffiliateInventoryStoreConfig
 * @property {Object} [store]
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
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} value
 * @property {string} name
 */

/**
 * @typedef AffiliateAppConfig
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} id
 * @property {string} updated_at
 * @property {string} secret
 * @property {string} name
 * @property {string} [description]
 * @property {string} owner
 * @property {string} created_at
 * @property {string} token
 */

/**
 * @typedef AffiliateConfig
 * @property {AffiliateInventoryConfig} [inventory]
 * @property {AffiliateAppConfig} [app]
 */

/**
 * @typedef Affiliate
 * @property {string} id
 * @property {AffiliateConfig} [config]
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
 * @property {string} [bag_end_state]
 * @property {Affiliate} affiliate
 * @property {boolean} [create_user]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [store_lookup]
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [invoice]
 * @property {string} [label]
 */

/**
 * @typedef AffiliateBag
 * @property {number} quantity
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} unit_price
 * @property {string} sku
 * @property {Object} affiliate_meta
 * @property {number} delivery_charge
 * @property {string} affiliate_store_id
 * @property {number} discount
 * @property {number} avl_qty
 * @property {string} seller_identifier
 * @property {string} fynd_store_id
 * @property {string} _id
 * @property {number} price_effective
 * @property {number} item_id
 * @property {string} modified_on
 * @property {number} price_marked
 * @property {number} transfer_price
 * @property {number} amount_paid
 * @property {string} item_size
 * @property {number} company_id
 * @property {Object} identifier
 * @property {number} store_id
 * @property {string} hsn_code_id
 */

/**
 * @typedef ArticleDetails1
 * @property {number} brand_id
 * @property {Object} weight
 * @property {Object} category
 * @property {number} quantity
 * @property {Object} attributes
 * @property {string} _id
 * @property {Object} dimension
 */

/**
 * @typedef ShipmentDetails
 * @property {string} [box_type]
 * @property {string} affiliate_shipment_id
 * @property {ArticleDetails1[]} articles
 * @property {number} [dp_id]
 * @property {Object} [meta]
 * @property {number} fulfillment_id
 * @property {number} shipments
 */

/**
 * @typedef LocationDetails
 * @property {string} fulfillment_type
 * @property {number} fulfillment_id
 * @property {ArticleDetails1[]} articles
 */

/**
 * @typedef ShipmentConfig
 * @property {ShipmentDetails[]} shipment
 * @property {string} to_pincode
 * @property {string} action
 * @property {string} journey
 * @property {LocationDetails} [location_details]
 * @property {string} source
 * @property {string} identifier
 * @property {string} payment_mode
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderUser
 * @property {string} email
 * @property {number} mobile
 * @property {string} country
 * @property {string} pincode
 * @property {string} last_name
 * @property {string} [address1]
 * @property {number} phone
 * @property {string} [address2]
 * @property {string} state
 * @property {string} city
 * @property {string} first_name
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
 * @typedef OrderInfo
 * @property {number} discount
 * @property {AffiliateBag[]} bags
 * @property {string} [coupon]
 * @property {ShipmentData} [shipment]
 * @property {string} [affiliate_order_id]
 * @property {number} order_value
 * @property {number} cod_charges
 * @property {OrderUser} billing_address
 * @property {OrderUser} shipping_address
 * @property {OrderPriority} [order_priority]
 * @property {UserData} user
 * @property {Object} [payment]
 * @property {number} delivery_charges
 * @property {string} payment_mode
 * @property {Object} items
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
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef ActionInfo
 * @property {number} id
 * @property {string} description
 * @property {string} display_text
 * @property {string} slug
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
 * @property {string} [l1_detail]
 * @property {string} type
 * @property {string} [ticket_id]
 * @property {string} [l2_detail]
 * @property {number} [bag_id]
 * @property {string} message
 * @property {string} createdat
 * @property {string} [ticket_url]
 * @property {string} user
 * @property {string} [l3_detail]
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
 * @property {string} customer_name
 * @property {string} brand_name
 * @property {string} order_id
 * @property {string} message
 * @property {number} phone_number
 * @property {string} payment_mode
 * @property {number} amount_paid
 * @property {string} country_code
 */

/**
 * @typedef SendSmsPayload
 * @property {number} bag_id
 * @property {SmsDataPayload} [data]
 * @property {string} slug
 */

/**
 * @typedef OrderDetails
 * @property {string} [created_at]
 * @property {string} [fynd_order_id]
 */

/**
 * @typedef Meta1
 * @property {number} [kafka_emission_status]
 * @property {string} [state_manager_used]
 */

/**
 * @typedef ShipmentDetail
 * @property {string} [shipment_id]
 * @property {string} [remarks]
 * @property {string} [status]
 * @property {number[]} [bag_list]
 * @property {Meta1} meta
 * @property {number} id
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
 * @property {string[]} [shipment_ids]
 * @property {string} order_type
 * @property {number} dp_id
 * @property {string} qc_required
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string[]} [errors]
 * @property {string} success
 */

/**
 * @typedef Tax
 * @property {number} rate
 * @property {Object[]} [breakup]
 * @property {Object} amount
 * @property {string} name
 */

/**
 * @typedef Charge
 * @property {string} type
 * @property {Tax} [tax]
 * @property {string} [code]
 * @property {string} name
 * @property {Object} amount
 */

/**
 * @typedef ShippingInfo
 * @property {string} [customer_code]
 * @property {string} [middle_name]
 * @property {string} [address2]
 * @property {string} [house_no]
 * @property {string} [alternate_email]
 * @property {string} [country_code]
 * @property {string} primary_email
 * @property {string} state
 * @property {string} [alternate_mobile_number]
 * @property {string} [floor_no]
 * @property {string} pincode
 * @property {string} [external_customer_code]
 * @property {string} [title]
 * @property {string} [gender]
 * @property {string} address1
 * @property {string} [state_code]
 * @property {string} city
 * @property {string} [shipping_type]
 * @property {string} [last_name]
 * @property {string} [landmark]
 * @property {string} first_name
 * @property {string} country
 * @property {string} [address_type]
 * @property {string} primary_mobile_number
 * @property {Object} [geo_location]
 * @property {Object[]} [slot]
 */

/**
 * @typedef LineItem
 * @property {string} seller_identifier
 * @property {string} [external_line_id]
 * @property {number} [quantity]
 * @property {Object} [meta]
 * @property {Charge[]} [charges]
 * @property {string} [custom_messasge]
 */

/**
 * @typedef ProcessingDates
 * @property {string} [confirm_by_date]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [pack_by_date]
 * @property {string} [dispatch_after_date]
 * @property {string} [dispatch_by_date]
 * @property {Object} [customer_pickup_slot]
 */

/**
 * @typedef Shipment
 * @property {LineItem[]} line_items
 * @property {ProcessingDates} [processing_dates]
 * @property {Object} [meta]
 * @property {number} location_id
 * @property {number} [priority]
 * @property {string} [external_shipment_id]
 */

/**
 * @typedef PaymentMethod
 * @property {Object} [transaction_data]
 * @property {string} mode
 * @property {string} refund_by
 * @property {Object} [meta]
 * @property {string} name
 * @property {number} amount
 * @property {string} collect_by
 */

/**
 * @typedef PaymentInfo
 * @property {string} primary_mode
 * @property {PaymentMethod[]} [payment_methods]
 */

/**
 * @typedef BillingInfo
 * @property {string} [customer_code]
 * @property {string} [middle_name]
 * @property {string} [address2]
 * @property {string} [house_no]
 * @property {string} [alternate_email]
 * @property {string} [country_code]
 * @property {string} primary_email
 * @property {string} state
 * @property {string} [alternate_mobile_number]
 * @property {string} [floor_no]
 * @property {string} pincode
 * @property {string} [external_customer_code]
 * @property {string} [title]
 * @property {string} [gender]
 * @property {string} address1
 * @property {string} [state_code]
 * @property {string} city
 * @property {string} [last_name]
 * @property {string} first_name
 * @property {string} country
 * @property {string} primary_mobile_number
 */

/**
 * @typedef TaxInfo
 * @property {string} [b2b_gstin_number]
 * @property {string} [gstin]
 */

/**
 * @typedef CreateOrderAPI
 * @property {string} [external_order_id]
 * @property {Object} [meta]
 * @property {Charge[]} [charges]
 * @property {ShippingInfo} shipping_info
 * @property {string} [external_creation_date]
 * @property {Shipment[]} shipments
 * @property {PaymentInfo} payment_info
 * @property {BillingInfo} billing_info
 * @property {TaxInfo} [tax_info]
 * @property {Object} [currency_info]
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {Object} [info]
 * @property {number} status
 * @property {string} [meta]
 * @property {string} message
 * @property {string} [request_id]
 * @property {string} [code]
 * @property {string} [stack_trace]
 * @property {string} [exception]
 */

/**
 * @typedef DpConfiguration
 * @property {string} [shipping_by]
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
 * @property {string} [mode_of_payment]
 * @property {PaymentMethods[]} [payment_methods]
 */

/**
 * @typedef CreateChannelConfig
 * @property {string} [shipment_assignment]
 * @property {DpConfiguration} [dp_configuration]
 * @property {Object} [logo_url]
 * @property {string[]} [lock_states]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {boolean} [location_reassignment]
 */

/**
 * @typedef CreateChannelConfigData
 * @property {CreateChannelConfig} [config_data]
 */

/**
 * @typedef CreateChannelConfigResponse
 * @property {boolean} [acknowledged]
 * @property {boolean} [is_inserted]
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
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */

/**
 * @typedef CreateSearchKeyword
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {SearchKeywordResult} result
 * @property {string} [app_id]
 */

/**
 * @typedef GetSearchWordsData
 * @property {string} [uid]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {Object} [result]
 * @property {string} [app_id]
 */

/**
 * @typedef ErrorResponse
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [error]
 * @property {string} [code]
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
 * @property {AutocompleteResult[]} [results]
 * @property {string[]} [words]
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {string} [uid]
 * @property {string[]} [words]
 * @property {Object[]} [results]
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {Page} [page]
 * @property {GetAutocompleteWordsData[]} [items]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 * @property {Object[]} [results]
 * @property {string} [app_id]
 */

/**
 * @typedef ProductBundleItem
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_select]
 * @property {number} min_quantity
 * @property {boolean} [auto_add_to_cart]
 * @property {number} product_uid
 * @property {number} max_quantity
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {string} [id]
 * @property {string} name
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} [modified_on]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {Object} [meta]
 * @property {string} [created_on]
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {Object} [created_by]
 * @property {string} choice
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {Page} [page]
 * @property {GetProductBundleCreateResponse[]} [items]
 */

/**
 * @typedef ProductBundleRequest
 * @property {string} name
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} [modified_on]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {Object} [meta]
 * @property {string} [created_on]
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {Object} [created_by]
 * @property {string} choice
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {string} name
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} [modified_on]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {string} choice
 */

/**
 * @typedef Size
 * @property {string} [display]
 * @property {number} [quantity]
 * @property {boolean} [is_available]
 * @property {string} [value]
 */

/**
 * @typedef LimitedProductData
 * @property {string[]} [sizes]
 * @property {string} [country_of_origin]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {string} [short_description]
 * @property {string[]} [images]
 * @property {Object} [identifier]
 * @property {Object} [price]
 * @property {number} [quantity]
 * @property {Object} [attributes]
 * @property {string} [item_code]
 */

/**
 * @typedef Price
 * @property {number} [max_marked]
 * @property {string} [currency]
 * @property {number} [max_effective]
 * @property {number} [min_marked]
 * @property {number} [min_effective]
 */

/**
 * @typedef GetProducts
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_select]
 * @property {Size[]} [sizes]
 * @property {boolean} [auto_add_to_cart]
 * @property {number} [min_quantity]
 * @property {number} [product_uid]
 * @property {LimitedProductData} [product_details]
 * @property {number} [max_quantity]
 * @property {Price} [price]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {string} [name]
 * @property {number} [company_id]
 * @property {string} [logo]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {Object} [meta]
 * @property {string[]} [page_visibility]
 * @property {GetProducts[]} [products]
 * @property {boolean} [same_store_assignment]
 * @property {string} [choice]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object} [page]
 * @property {Object[]} [items]
 */

/**
 * @typedef Meta
 * @property {Object[]} [values]
 * @property {string} [unit]
 * @property {Object} [headers]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {string} [id]
 * @property {string} [subtitle]
 * @property {string} name
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {Object} [created_by]
 * @property {string} [tag]
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {boolean} [active]
 * @property {string} title
 * @property {number} [brand_id]
 * @property {string} [image]
 * @property {Guide} [guide]
 */

/**
 * @typedef SuccessResponse
 * @property {boolean} [success]
 */

/**
 * @typedef SizeGuideResponse
 * @property {string} [id]
 * @property {string} [subtitle]
 * @property {string} [name]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {Object} [created_by]
 * @property {string} [tag]
 * @property {string} [created_on]
 * @property {boolean} [active]
 * @property {string} [title]
 * @property {number} [brand_id]
 * @property {Object} [guide]
 */

/**
 * @typedef SEOData
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef MOQData
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 * @property {number} [minimum]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {Object} [alt_text]
 * @property {SEOData} [seo]
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 * @property {MOQData} [moq]
 */

/**
 * @typedef MetaFields
 * @property {Object} value
 * @property {Object} key
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [title]
 * @property {Object} [description]
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 * @property {number} [minimum]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {MetaFields[]} [_custom_meta]
 * @property {Object} [alt_text]
 * @property {Object} [_custom_json]
 * @property {ApplicationItemSEO} [seo]
 * @property {boolean} [is_gift]
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
 * @typedef PageResponseType
 * @property {number} current
 * @property {number} next
 * @property {number} total_count
 * @property {boolean} has_next
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
 * @property {string} name
 * @property {string} [logo]
 * @property {string} [slug]
 * @property {boolean} is_active
 * @property {string} [key]
 * @property {string} [unit]
 * @property {number} priority
 * @property {string} display_type
 */

/**
 * @typedef AppConfigurationDetail
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} slug
 * @property {boolean} is_active
 * @property {string} app_id
 * @property {string[]} [template_slugs]
 * @property {number} priority
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {boolean} is_default
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {string} [name]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} app_id
 * @property {string} default_key
 * @property {number} priority
 * @property {boolean} is_default
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
 * @typedef ConfigurationBucketPoints
 * @property {string} [display]
 * @property {number} [end]
 * @property {number} [start]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {Object[]} [map_values]
 * @property {Object} [map]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {string} [value]
 * @property {string} [condition]
 * @property {string} [sort]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} [name]
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} [display_name]
 * @property {string} type
 * @property {string} key
 * @property {number} priority
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 * @property {boolean} allow_single
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} [name]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} key
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
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} display_type
 * @property {number} priority
 * @property {ProductSize} size
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {string} [subtitle]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [title]
 * @property {number} priority
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
 * @typedef AppCatalogConfiguration
 * @property {string} [id]
 * @property {string} config_type
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} [config_id]
 * @property {string} [type]
 * @property {string} [created_on]
 * @property {ConfigurationListing} [listing]
 * @property {ConfigurationProduct} [product]
 * @property {Object} [created_by]
 * @property {string} app_id
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef AppConfiguration
 * @property {string} config_type
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} [config_id]
 * @property {string} [type]
 * @property {string} [created_on]
 * @property {ConfigurationListing} [listing]
 * @property {ConfigurationProduct} [product]
 * @property {Object} [created_by]
 * @property {string} app_id
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */

/**
 * @typedef EntityConfiguration
 * @property {string} [id]
 * @property {string} config_type
 * @property {string} [config_id]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} app_id
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */

/**
 * @typedef ProductFiltersValue
 * @property {number} [count]
 * @property {number} [min]
 * @property {number} [max]
 * @property {number} [selected_min]
 * @property {string} [currency_code]
 * @property {string} display
 * @property {Object} value
 * @property {string} [query_format]
 * @property {number} [selected_max]
 * @property {string} [display_format]
 * @property {boolean} is_selected
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} name
 * @property {string} [logo]
 * @property {string} [kind]
 * @property {string} display
 * @property {string[]} [operators]
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values
 * @property {ProductFiltersKey} key
 */

/**
 * @typedef ProductSortOn
 * @property {string} [value]
 * @property {string} [name]
 * @property {boolean} [is_selected]
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductFilters[]} [filters]
 * @property {Object} operators
 * @property {ProductSortOn[]} [sort_on]
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
 * @typedef BannerImage
 * @property {string} [type]
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 */

/**
 * @typedef ImageUrls
 * @property {BannerImage} [landscape]
 * @property {BannerImage} [portrait]
 */

/**
 * @typedef Media1
 * @property {string} [type]
 * @property {Object} [meta]
 * @property {string} url
 */

/**
 * @typedef CollectionQuery
 * @property {Object[]} value
 * @property {string} op
 * @property {string} attribute
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
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [badge]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string[]} [tag]
 * @property {boolean} [allow_sort]
 * @property {Object} [cron]
 * @property {Media1} [logo]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [is_active]
 * @property {Action} [action]
 * @property {boolean} [allow_facets]
 * @property {string} [app_id]
 * @property {string} [uid]
 * @property {Object} [_schedule]
 * @property {Object} [meta]
 * @property {string} [description]
 * @property {number} [priority]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {Page} [page]
 * @property {GetCollectionDetailNest[]} [items]
 */

/**
 * @typedef CollectionImage
 * @property {string} aspect_ratio
 * @property {string} url
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} landscape
 * @property {CollectionImage} portrait
 */

/**
 * @typedef SeoDetail
 * @property {string} [title]
 * @property {string} [description]
 */

/**
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
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
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [start]
 * @property {string} [end]
 * @property {number} [duration]
 * @property {string} [cron]
 */

/**
 * @typedef CreateCollection
 * @property {CollectionBanner} banners
 * @property {string} slug
 * @property {boolean} [published]
 * @property {SeoDetail} [seo]
 * @property {string[]} [visible_facets_keys]
 * @property {CollectionBadge} [badge]
 * @property {string} name
 * @property {UserInfo} [modified_by]
 * @property {string} type
 * @property {boolean} [allow_sort]
 * @property {CollectionImage} logo
 * @property {CollectionQuery[]} [query]
 * @property {string[]} [tags]
 * @property {boolean} [is_active]
 * @property {boolean} [allow_facets]
 * @property {string} app_id
 * @property {CollectionSchedule} [_schedule]
 * @property {Object} [_locale_language]
 * @property {boolean} [is_visible]
 * @property {Object} [meta]
 * @property {Object} [_custom_json]
 * @property {string} [description]
 * @property {string} [sort_on]
 * @property {UserInfo} [created_by]
 * @property {number} [priority]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {ImageUrls} [banners]
 * @property {string} [slug]
 * @property {string[]} [visible_facets_keys]
 * @property {Object} [badge]
 * @property {string} [name]
 * @property {string} [type]
 * @property {string[]} [tag]
 * @property {boolean} [allow_sort]
 * @property {Object} [cron]
 * @property {BannerImage} [logo]
 * @property {CollectionQuery[]} [query]
 * @property {boolean} [is_active]
 * @property {boolean} [allow_facets]
 * @property {string} [app_id]
 * @property {Object} [_schedule]
 * @property {Object} [meta]
 * @property {string} [description]
 * @property {string} [sort_on]
 * @property {number} [priority]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {Object} [badge]
 * @property {Media1} [logo]
 * @property {CollectionQuery[]} [query]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {Object} [_schedule]
 * @property {string} [type]
 * @property {string[]} [tag]
 * @property {Object} [meta]
 * @property {boolean} [allow_sort]
 * @property {boolean} [allow_facets]
 * @property {string} [description]
 * @property {Object} [cron]
 * @property {string[]} [visible_facets_keys]
 * @property {number} [priority]
 * @property {string} [app_id]
 */

/**
 * @typedef UpdateCollection
 * @property {CollectionBanner} [banners]
 * @property {string} [slug]
 * @property {boolean} [published]
 * @property {SeoDetail} [seo]
 * @property {string[]} [visible_facets_keys]
 * @property {CollectionBadge} [badge]
 * @property {string} [name]
 * @property {UserInfo} [modified_by]
 * @property {string} [type]
 * @property {boolean} [allow_sort]
 * @property {CollectionImage} [logo]
 * @property {CollectionQuery[]} [query]
 * @property {string[]} [tags]
 * @property {boolean} [is_active]
 * @property {boolean} [allow_facets]
 * @property {CollectionSchedule} [_schedule]
 * @property {Object} [_locale_language]
 * @property {boolean} [is_visible]
 * @property {Object} [meta]
 * @property {Object} [_custom_json]
 * @property {string} [description]
 * @property {string} [sort_on]
 * @property {number} [priority]
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
 * @property {Action} [action]
 * @property {string} [name]
 * @property {Media1} [logo]
 * @property {number} [uid]
 */

/**
 * @typedef Price1
 * @property {number} [min]
 * @property {number} [max]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 */

/**
 * @typedef ProductListingDetail
 * @property {string} slug
 * @property {number} [rating_count]
 * @property {Media1[]} [medias]
 * @property {boolean} [has_variant]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [item_type]
 * @property {string} [name]
 * @property {number} [rating]
 * @property {string} [type]
 * @property {ProductBrand} [brand]
 * @property {ProductListingPrice} [price]
 * @property {string[]} [tryouts]
 * @property {string} [short_description]
 * @property {boolean} [sellable]
 * @property {Object} [teaser_tag]
 * @property {string} [color]
 * @property {string[]} [similars]
 * @property {Object} [attributes]
 * @property {Object} [promo_meta]
 * @property {string} [image_nature]
 * @property {number} [uid]
 * @property {string[]} [highlights]
 * @property {string} [product_online_date]
 * @property {string} [description]
 * @property {string} [discount]
 * @property {string} [item_code]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductFilters[]} [filters]
 * @property {Page} [page]
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
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
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [total_articles]
 * @property {string} [name]
 * @property {number} [article_freshness]
 * @property {number} [total_sizes]
 * @property {number} [available_sizes]
 * @property {number} [available_articles]
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
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CrossSellingData} [data]
 */

/**
 * @typedef OptInPostRequest
 * @property {number} [company_id]
 * @property {boolean} [enabled]
 * @property {number[]} [store_ids]
 * @property {string} opt_level
 * @property {string} [platform]
 * @property {number[]} [brand_ids]
 */

/**
 * @typedef CompanyOptIn
 * @property {number} company_id
 * @property {boolean} enabled
 * @property {number} modified_on
 * @property {Object} [modified_by]
 * @property {Object} [created_by]
 * @property {number[]} store_ids
 * @property {number} created_on
 * @property {string} opt_level
 * @property {string} platform
 * @property {number[]} brand_ids
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
 * @property {string} [company]
 * @property {number} [brand]
 * @property {number} [store]
 */

/**
 * @typedef StoreDetail
 * @property {string} [name]
 * @property {number} [company_id]
 * @property {number} [uid]
 * @property {string} [modified_on]
 * @property {Object[]} [documents]
 * @property {Object[]} [additional_contacts]
 * @property {string} [display_name]
 * @property {Object} [timing]
 * @property {string} [created_on]
 * @property {Object} [manager]
 * @property {string} [store_code]
 * @property {Object} [address]
 * @property {string} [store_type]
 */

/**
 * @typedef OptinStoreDetails
 * @property {Page} [page]
 * @property {StoreDetail[]} [items]
 */

/**
 * @typedef AttributeMasterFilter
 * @property {boolean} indexing
 * @property {string[]} [depends_on]
 * @property {number} [priority]
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
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef AttributeMaster
 * @property {string} [format]
 * @property {string} type
 * @property {AttributeSchemaRange} [range]
 * @property {string[]} [allowed_values]
 * @property {boolean} [multi]
 * @property {boolean} [mandatory]
 */

/**
 * @typedef GenderDetail
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [slug]
 * @property {AttributeMasterFilter} [filters]
 * @property {AttributeMasterDetails} [details]
 * @property {AttributeMasterMeta} [meta]
 * @property {boolean} [is_nested]
 * @property {string[]} [departments]
 * @property {AttributeMaster} [schema]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [description]
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
 * @typedef UserSerializer
 * @property {string} [uid]
 * @property {string} [_id]
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef GetDepartment
 * @property {string} [name]
 * @property {string} [logo]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {boolean} [is_active]
 * @property {string[]} [synonyms]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [created_on]
 * @property {number} [page_no]
 * @property {string} [search]
 * @property {string} [item_type]
 * @property {number} [priority_order]
 * @property {UserSerializer} [created_by]
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
 * @property {Object} [meta]
 * @property {string} [message]
 * @property {number} [status]
 * @property {string} [code]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string} name
 * @property {Object} [platforms]
 * @property {string} logo
 * @property {number} [uid]
 * @property {string[]} [synonyms]
 * @property {boolean} [is_active]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {string} [_cls]
 * @property {number} priority_order
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
 * @property {string} user_id
 * @property {string} username
 */

/**
 * @typedef DepartmentModel
 * @property {Object} name
 * @property {Object} [_id]
 * @property {string} modified_on
 * @property {Object} [slug]
 * @property {UserDetail} [modified_by]
 * @property {number} [uid]
 * @property {string} logo
 * @property {boolean} [is_active]
 * @property {Object[]} [synonyms]
 * @property {string} [verified_on]
 * @property {string} created_on
 * @property {Object} [_cls]
 * @property {Object} [_custom_json]
 * @property {number} priority_order
 * @property {UserDetail} [created_by]
 * @property {UserDetail} [verified_by]
 */

/**
 * @typedef ProductTemplate
 * @property {string} [name]
 * @property {boolean} [is_archived]
 * @property {string} [logo]
 * @property {string} [modified_on]
 * @property {string} slug
 * @property {boolean} [is_active]
 * @property {boolean} is_physical
 * @property {string[]} [categories]
 * @property {string} [tag]
 * @property {string[]} [departments]
 * @property {boolean} is_expirable
 * @property {Object} [modified_by]
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {Object} [created_by]
 * @property {string[]} [attributes]
 */

/**
 * @typedef TemplatesResponse
 * @property {Page} [page]
 * @property {ProductTemplate} [items]
 */

/**
 * @typedef Properties
 * @property {Object} [slug]
 * @property {Object} [currency]
 * @property {Object} [trader_type]
 * @property {Object} [is_dependent]
 * @property {Object} [item_type]
 * @property {Object} [country_of_origin]
 * @property {Object} [name]
 * @property {Object} [return_config]
 * @property {Object} [media]
 * @property {Object} [product_publish]
 * @property {Object} [sizes]
 * @property {Object} [brand_uid]
 * @property {Object} [multi_size]
 * @property {Object} [custom_order]
 * @property {Object} [short_description]
 * @property {Object} [is_active]
 * @property {Object} [tags]
 * @property {Object} [product_group_tag]
 * @property {Object} [teaser_tag]
 * @property {Object} [no_of_boxes]
 * @property {Object} [category_slug]
 * @property {Object} [hsn_code]
 * @property {Object} [highlights]
 * @property {Object} [command]
 * @property {Object} [variants]
 * @property {Object} [trader]
 * @property {Object} [description]
 * @property {Object} [size_guide]
 * @property {Object} [item_code]
 */

/**
 * @typedef GlobalValidation
 * @property {Properties} [properties]
 * @property {string} [type]
 * @property {string[]} [required]
 * @property {Object} [definitions]
 * @property {string} [description]
 * @property {string} [title]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {string} [id]
 * @property {string} [name]
 * @property {boolean} [is_archived]
 * @property {string} [logo]
 * @property {string} slug
 * @property {boolean} [is_active]
 * @property {boolean} is_physical
 * @property {string[]} [categories]
 * @property {string} [tag]
 * @property {string[]} [departments]
 * @property {boolean} is_expirable
 * @property {string} [description]
 * @property {string[]} [attributes]
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
 * @property {string[]} [country_of_origin]
 * @property {string[]} [hsn_code]
 */

/**
 * @typedef HSNCodesResponse
 * @property {string} [message]
 * @property {HSNData} [data]
 */

/**
 * @typedef ProductDownloadItemsData
 * @property {string} [type]
 * @property {string[]} [templates]
 * @property {string[]} [brand]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {string} [trigger_on]
 * @property {string} [id]
 * @property {Object} [template_tags]
 * @property {number} [seller_id]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [url]
 * @property {string} [task_id]
 * @property {string} [status]
 * @property {VerifiedBy} [created_by]
 * @property {string} [completed_on]
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
 * @typedef Hierarchy
 * @property {number} l1
 * @property {number} department
 * @property {number} l2
 */

/**
 * @typedef CategoryMappingValues
 * @property {string} name
 * @property {number} [catalog_id]
 */

/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [google]
 */

/**
 * @typedef Media2
 * @property {string} landscape
 * @property {string} logo
 * @property {string} portrait
 */

/**
 * @typedef Category
 * @property {string} [id]
 * @property {string} name
 * @property {number} [uid]
 * @property {string[]} [synonyms]
 * @property {string} [slug]
 * @property {Hierarchy[]} [hierarchy]
 * @property {number} level
 * @property {CategoryMapping} [marketplaces]
 * @property {boolean} is_active
 * @property {number[]} departments
 * @property {Media2} [media]
 * @property {string} [created_on]
 * @property {Object} [modified_by]
 * @property {Object} [created_by]
 * @property {number} [priority]
 * @property {string} [modified_on]
 * @property {string[]} [tryouts]
 */

/**
 * @typedef CategoryResponse
 * @property {Page} [page]
 * @property {Category[]} [items]
 */

/**
 * @typedef CategoryRequestBody
 * @property {string} name
 * @property {string[]} [synonyms]
 * @property {string} [slug]
 * @property {Hierarchy[]} [hierarchy]
 * @property {number} level
 * @property {CategoryMapping} [marketplaces]
 * @property {boolean} is_active
 * @property {number[]} departments
 * @property {Media2} [media]
 * @property {number} [priority]
 * @property {string[]} [tryouts]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {number} [uid]
 * @property {string} [message]
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
 * @property {number} [value]
 * @property {string} [unit]
 */

/**
 * @typedef ReturnConfigResponse
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef Image
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 */

/**
 * @typedef Logo
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 */

/**
 * @typedef Brand
 * @property {number} [uid]
 * @property {string} [name]
 * @property {Logo} [logo]
 */

/**
 * @typedef ProductPublished
 * @property {number} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef Product
 * @property {string} [slug]
 * @property {string} [currency]
 * @property {string} [created_on]
 * @property {string} [verified_on]
 * @property {Object} [variant_media]
 * @property {boolean} [is_dependent]
 * @property {Object} [moq]
 * @property {string} [item_type]
 * @property {string} [country_of_origin]
 * @property {string} [id]
 * @property {string} [name]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {Object[]} [all_sizes]
 * @property {boolean} [is_physical]
 * @property {string} [template_tag]
 * @property {ReturnConfigResponse} [return_config]
 * @property {Object} [modified_by]
 * @property {boolean} [is_image_less_product]
 * @property {Media1[]} [media]
 * @property {Image[]} [images]
 * @property {string[]} [all_identifiers]
 * @property {Object} [tax_identifier]
 * @property {Object} [variant_group]
 * @property {Brand} [brand]
 * @property {boolean} [is_set]
 * @property {boolean} [is_expirable]
 * @property {VerifiedBy} [verified_by]
 * @property {ProductPublished} [product_publish]
 * @property {string[]} [l3_mapping]
 * @property {Object[]} [sizes]
 * @property {number} [brand_uid]
 * @property {number} [company_id]
 * @property {boolean} [multi_size]
 * @property {Object} [custom_order]
 * @property {string} [short_description]
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 * @property {Object} [category]
 * @property {number[]} [all_company_ids]
 * @property {string[]} [product_group_tag]
 * @property {string} [color]
 * @property {Object} [teaser_tag]
 * @property {Object} [attributes]
 * @property {string} [pending]
 * @property {number} [no_of_boxes]
 * @property {string} [stage]
 * @property {string} [image_nature]
 * @property {number} [uid]
 * @property {string} [modified_on]
 * @property {string} [category_slug]
 * @property {number} [category_uid]
 * @property {string} [hsn_code]
 * @property {string[]} [highlights]
 * @property {number[]} [departments]
 * @property {Object} [_custom_json]
 * @property {Object} [variants]
 * @property {string} [primary_color]
 * @property {Object[]} [trader]
 * @property {string} [description]
 * @property {string} [size_guide]
 * @property {Object} [created_by]
 * @property {string} [item_code]
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
 * @typedef ReturnConfig
 * @property {string} unit
 * @property {boolean} returnable
 * @property {number} time
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 * @property {string} [reporting_hsn]
 */

/**
 * @typedef ProductPublish
 * @property {string} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef CustomOrder
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 */

/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
 */

/**
 * @typedef Trader
 * @property {string} [type]
 * @property {Object} name
 * @property {string[]} [address]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {string} slug
 * @property {string} currency
 * @property {Object} [variant_media]
 * @property {boolean} [is_dependent]
 * @property {string} item_type
 * @property {string} country_of_origin
 * @property {NetQuantity} [net_quantity]
 * @property {string} name
 * @property {boolean} [is_image_less_product]
 * @property {string} template_tag
 * @property {ReturnConfig} return_config
 * @property {Media1[]} [media]
 * @property {TaxIdentifier} tax_identifier
 * @property {Object} [variant_group]
 * @property {boolean} [is_set]
 * @property {string} [requester]
 * @property {string} [bulk_job_id]
 * @property {ProductPublish} [product_publish]
 * @property {Object[]} sizes
 * @property {number} company_id
 * @property {number} brand_uid
 * @property {boolean} [multi_size]
 * @property {CustomOrder} [custom_order]
 * @property {string} [short_description]
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 * @property {string[]} [product_group_tag]
 * @property {string} [action]
 * @property {TeaserTag} [teaser_tag]
 * @property {Object} attributes
 * @property {number} [no_of_boxes]
 * @property {number} [uid]
 * @property {string} category_slug
 * @property {Object} [change_request_id]
 * @property {string[]} [highlights]
 * @property {number[]} departments
 * @property {Object} [_custom_json]
 * @property {Object} [variants]
 * @property {Trader[]} trader
 * @property {string} [description]
 * @property {string} [size_guide]
 * @property {string} item_code
 */

/**
 * @typedef ProductVariants
 * @property {string} [name]
 * @property {number} [brand_uid]
 * @property {number} [uid]
 * @property {number} [category_uid]
 * @property {Media1[]} [media]
 * @property {string} [item_code]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {ProductVariants[]} [variants]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {Object} [synonyms]
 * @property {string} slug
 * @property {AttributeMasterDetails} details
 * @property {string} [suggestion]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {Object} [modified_by]
 * @property {AttributeMaster} schema
 * @property {string} [raw_key]
 * @property {string} [logo]
 * @property {string[]} [tags]
 * @property {AttributeMasterFilter} filters
 * @property {boolean} [is_nested]
 * @property {boolean} [variant]
 * @property {string} [unit]
 * @property {string} [modified_on]
 * @property {string[]} departments
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [description]
 * @property {Object} [created_by]
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
 * @typedef ValidateIdentifier
 * @property {boolean} [primary]
 * @property {string} gtin_value
 * @property {string} gtin_type
 */

/**
 * @typedef AllSizes
 * @property {number} item_length
 * @property {number} item_width
 * @property {number} item_height
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {number} item_weight
 * @property {string} item_dimensions_unit_of_measure
 * @property {Object} item_weight_unit_of_measure
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
 * @property {string} [full_name]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductBulkRequest
 * @property {string} [stage]
 * @property {string[]} [cancelled_records]
 * @property {number} [company_id]
 * @property {ProductTemplate} [template]
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {string} [template_tag]
 * @property {UserDetail1} [modified_by]
 * @property {string[]} [failed_records]
 * @property {string} [created_on]
 * @property {number} [total]
 * @property {number} [cancelled]
 * @property {number} [succeed]
 * @property {string} [file_path]
 * @property {UserDetail1} [created_by]
 * @property {number} [failed]
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
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef BulkJob
 * @property {string} [stage]
 * @property {Object[]} [cancelled_records]
 * @property {number} company_id
 * @property {string} [tracking_url]
 * @property {string} [modified_on]
 * @property {UserInfo1} [modified_by]
 * @property {boolean} [is_active]
 * @property {string} [template_tag]
 * @property {Object[]} [failed_records]
 * @property {string} created_on
 * @property {number} [total]
 * @property {number} [cancelled]
 * @property {number} [succeed]
 * @property {string} [file_path]
 * @property {UserInfo1} [created_by]
 * @property {number} [failed]
 * @property {string} [custom_template_tag]
 */

/**
 * @typedef BulkResponse
 * @property {string} [modified_on]
 * @property {UserInfo1} [modified_by]
 * @property {boolean} [is_active]
 * @property {string} batch_id
 * @property {string} created_on
 * @property {UserInfo1} [created_by]
 */

/**
 * @typedef BulkProductRequest
 * @property {string} template_tag
 * @property {string} batch_id
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
 * @typedef UserCommon
 * @property {number} [company_id]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef Items
 * @property {string} [stage]
 * @property {number} [retry]
 * @property {string[]} [cancelled_records]
 * @property {number} [company_id]
 * @property {string} [tracking_url]
 * @property {string} [modified_on]
 * @property {string} [id]
 * @property {UserCommon} [modified_by]
 * @property {boolean} [is_active]
 * @property {string[]} [failed_records]
 * @property {string} [created_on]
 * @property {number} [total]
 * @property {number} [cancelled]
 * @property {number} [succeed]
 * @property {string} [file_path]
 * @property {UserCommon} [created_by]
 * @property {number} [failed]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Page} [page]
 * @property {Items[]} [items]
 */

/**
 * @typedef ProductBulkAssets
 * @property {number} [company_id]
 * @property {Object} user
 * @property {string} url
 */

/**
 * @typedef ProductSizeDeleteDataResponse
 * @property {number} [company_id]
 * @property {number} [item_id]
 * @property {string} [size]
 */

/**
 * @typedef ProductSizeDeleteResponse
 * @property {ProductSizeDeleteDataResponse} [data]
 * @property {boolean} [success]
 */

/**
 * @typedef InventoryResponse
 * @property {string} [uid]
 * @property {string} [seller_identifier]
 * @property {string} [currency]
 * @property {Object} [identifiers]
 * @property {number} [price_effective]
 * @property {Object} [store]
 * @property {number} [price_transfer]
 * @property {number} [sellable_quantity]
 * @property {number} [price]
 * @property {number} [quantity]
 * @property {string} [inventory_updated_on]
 * @property {number} [item_id]
 * @property {string} [size]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {Page} [page]
 * @property {InventoryResponse[]} [items]
 */

/**
 * @typedef GTIN
 * @property {boolean} [primary]
 * @property {Object} gtin_value
 * @property {string} gtin_type
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
 * @property {number} [quantity]
 * @property {string} [name]
 * @property {SizeDistribution} size_distribution
 */

/**
 * @typedef InvSize
 * @property {number} [item_length]
 * @property {number} [item_width]
 * @property {number} [item_height]
 * @property {string} currency
 * @property {string} [expiration_date]
 * @property {GTIN[]} identifiers
 * @property {number} price_effective
 * @property {number} [item_weight]
 * @property {number} [price_transfer]
 * @property {string} [item_weight_unit_of_measure]
 * @property {boolean} [is_set]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [price]
 * @property {string} store_code
 * @property {number} quantity
 * @property {InventorySet} [set]
 * @property {Object} size
 */

/**
 * @typedef ItemQuery
 * @property {number} [brand_uid]
 * @property {number} [uid]
 * @property {string} [item_code]
 */

/**
 * @typedef InventoryRequest
 * @property {InvSize[]} sizes
 * @property {number} company_id
 * @property {ItemQuery} item
 */

/**
 * @typedef StoreMeta
 * @property {number} id
 */

/**
 * @typedef ReturnConfig1
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef WeightResponse
 * @property {string} unit
 * @property {number} shipping
 * @property {boolean} is_default
 */

/**
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef PriceMeta
 * @property {string} [updated_at]
 * @property {string} currency
 * @property {number} transfer
 * @property {number} effective
 * @property {number} marked
 * @property {Object} [tp_notes]
 */

/**
 * @typedef ManufacturerResponse
 * @property {string} name
 * @property {string} address
 * @property {boolean} is_default
 */

/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [order_committed]
 */

/**
 * @typedef DimensionResponse
 * @property {number} width
 * @property {number} length
 * @property {boolean} is_default
 * @property {string} unit
 * @property {number} height
 */

/**
 * @typedef Trader1
 * @property {string} type
 * @property {string} name
 * @property {string[]} address
 */

/**
 * @typedef InventorySellerResponse
 * @property {string} fynd_article_code
 * @property {string} [trace_id]
 * @property {StoreMeta} store
 * @property {string} country_of_origin
 * @property {string} seller_identifier
 * @property {UserSerializer} [modified_by]
 * @property {ReturnConfig1} [return_config]
 * @property {CompanyMeta} company
 * @property {Object} [fynd_meta]
 * @property {Object} [tax_identifier]
 * @property {WeightResponse} weight
 * @property {BrandMeta} brand
 * @property {string} [added_on_store]
 * @property {PriceMeta} price
 * @property {boolean} [is_set]
 * @property {boolean} fragile
 * @property {number} item_id
 * @property {string[]} [tags]
 * @property {boolean} [is_active]
 * @property {boolean} [track_inventory]
 * @property {ManufacturerResponse} manufacturer
 * @property {string} fynd_item_code
 * @property {Object} identifier
 * @property {number} total_quantity
 * @property {InventorySet} [set]
 * @property {Quantities} [quantities]
 * @property {string} [stage]
 * @property {string} uid
 * @property {Object} [raw_meta]
 * @property {string} [expiration_date]
 * @property {DimensionResponse} dimension
 * @property {Object} [meta]
 * @property {Object} [_custom_json]
 * @property {Trader1[]} [trader]
 * @property {UserSerializer} [created_by]
 * @property {string} size
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {Page} [page]
 * @property {InventorySellerResponse[]} [items]
 */

/**
 * @typedef DateMeta
 * @property {string} [inventory_updated_on]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [added_on_store]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [store_code]
 * @property {string} [store_type]
 */

/**
 * @typedef ReturnConfig2
 * @property {string} [unit]
 * @property {boolean} [returnable]
 * @property {number} [time]
 */

/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */

/**
 * @typedef WeightResponse1
 * @property {string} [unit]
 * @property {number} [shipping]
 */

/**
 * @typedef BrandMeta1
 * @property {number} [id]
 * @property {string} [name]
 */

/**
 * @typedef PriceArticle
 * @property {string} [currency]
 * @property {number} [transfer]
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {Object} [tp_notes]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {string} [name]
 * @property {string} [address]
 * @property {boolean} [is_default]
 */

/**
 * @typedef Quantity
 * @property {number} [count]
 */

/**
 * @typedef QuantitiesArticle
 * @property {Quantity} [damaged]
 * @property {Quantity} [not_available]
 * @property {Quantity} [sellable]
 * @property {Quantity} [order_committed]
 */

/**
 * @typedef DimensionResponse1
 * @property {string} [unit]
 * @property {number} [length]
 * @property {number} [height]
 * @property {number} [width]
 */

/**
 * @typedef Trader2
 * @property {string} [type]
 * @property {string} [name]
 * @property {string[]} [address]
 */

/**
 * @typedef GetInventories
 * @property {DateMeta} [date_meta]
 * @property {string} [trace_id]
 * @property {ArticleStoreResponse} [store]
 * @property {string} [id]
 * @property {string} [country_of_origin]
 * @property {string} [seller_identifier]
 * @property {UserSerializer} [modified_by]
 * @property {ReturnConfig2} [return_config]
 * @property {CompanyMeta1} [company]
 * @property {Object} [tax_identifier]
 * @property {WeightResponse1} [weight]
 * @property {BrandMeta1} [brand]
 * @property {PriceArticle} [price]
 * @property {boolean} [is_set]
 * @property {string} [inventory_updated_on]
 * @property {number} [item_id]
 * @property {Object} [platforms]
 * @property {string[]} [tags]
 * @property {boolean} [track_inventory]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {Object} [identifier]
 * @property {number} [total_quantity]
 * @property {QuantitiesArticle} [quantities]
 * @property {string} [stage]
 * @property {string} [uid]
 * @property {string} [expiration_date]
 * @property {DimensionResponse1} [dimension]
 * @property {Trader2[]} [trader]
 * @property {UserSerializer} [created_by]
 * @property {string} [size]
 */

/**
 * @typedef GetInventoriesResponse
 * @property {Page} [page]
 * @property {GetInventories[]} [items]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {string} [id]
 * @property {string} [stage]
 * @property {string[]} [cancelled_records]
 * @property {number} [company_id]
 * @property {string} [modified_on]
 * @property {boolean} [is_active]
 * @property {Object} [modified_by]
 * @property {string[]} [failed_records]
 * @property {string} [created_on]
 * @property {number} [total]
 * @property {number} [cancelled]
 * @property {number} [succeed]
 * @property {string} [file_path]
 * @property {Object} [created_by]
 * @property {number} [failed]
 */

/**
 * @typedef BulkInventoryGet
 * @property {Page} [page]
 * @property {BulkInventoryGetItems[]} [items]
 */

/**
 * @typedef InventoryJobPayload
 * @property {string} seller_identifier
 * @property {string[]} [tags]
 * @property {string} [currency]
 * @property {string} [expiration_date]
 * @property {number} [price_effective]
 * @property {string} [trace_id]
 * @property {number} [total_quantity]
 * @property {string} store_code
 * @property {number} [price_marked]
 * @property {number} [price]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [quantity]
 * @property {string} [item_weight_unit_of_measure]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {InventoryJobPayload[]} sizes
 * @property {string} batch_id
 * @property {number} company_id
 * @property {Object} [user]
 */

/**
 * @typedef InventoryExportJob
 * @property {string} [trigger_on]
 * @property {number} seller_id
 * @property {string} [url]
 * @property {string} task_id
 * @property {string} [status]
 * @property {string} [completed_on]
 * @property {Object} [request_params]
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
 * @property {number} seller_id
 * @property {string} task_id
 * @property {string} [status]
 * @property {Object} [request_params]
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
 * @property {string} seller_identifier
 * @property {string[]} [tags]
 * @property {string} [expiration_date]
 * @property {number} [price_effective]
 * @property {string} [trace_id]
 * @property {number} [total_quantity]
 * @property {number} store_id
 * @property {number} [price_marked]
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
 * @property {string} message
 * @property {InventoryResponseItem[]} [items]
 */

/**
 * @typedef PageResponse
 * @property {number} [item_total]
 * @property {boolean} [has_previous]
 * @property {string} [current]
 * @property {boolean} [has_next]
 * @property {number} [size]
 */

/**
 * @typedef HsnCodesObject
 * @property {string} [id]
 * @property {number} [company_id]
 * @property {number} [tax1]
 * @property {string} [hs2_code]
 * @property {number} [threshold2]
 * @property {string} [modified_on]
 * @property {string} [hsn_code]
 * @property {number} [threshold1]
 * @property {number} [tax2]
 * @property {boolean} [tax_on_mrp]
 * @property {boolean} [tax_on_esp]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {PageResponse} [page]
 * @property {HsnCodesObject[]} [items]
 */

/**
 * @typedef HsnUpsert
 * @property {number} company_id
 * @property {number} [uid]
 * @property {number} tax1
 * @property {string} hs2_code
 * @property {number} [threshold2]
 * @property {boolean} [is_active]
 * @property {string} hsn_code
 * @property {number} threshold1
 * @property {number} [tax2]
 * @property {boolean} tax_on_mrp
 * @property {boolean} [tax_on_esp]
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
 * @property {string} effective_date
 * @property {number} rate
 * @property {number} threshold
 * @property {number} [cess]
 */

/**
 * @typedef HSNDataInsertV2
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} hsn_code
 * @property {string} type
 * @property {string} [created_on]
 * @property {string} country_code
 * @property {string} reporting_hsn
 * @property {TaxSlab[]} taxes
 * @property {string} description
 * @property {Object} [created_by]
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {PageResponse} [page]
 * @property {HSNDataInsertV2[]} [items]
 */

/**
 * @typedef ArticleQuery
 * @property {number[]} [ignored_stores]
 * @property {number} item_id
 * @property {string} size
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef AssignStoreArticle
 * @property {ArticleQuery} [query]
 * @property {Object} [meta]
 * @property {string} [group_id]
 * @property {ArticleAssignment} [article_assignment]
 * @property {number} [quantity]
 */

/**
 * @typedef AssignStore
 * @property {string} [channel_identifier]
 * @property {number} [company_id]
 * @property {number[]} [store_ids]
 * @property {string} pincode
 * @property {string} [channel_type]
 * @property {string} app_id
 * @property {AssignStoreArticle[]} articles
 */

/**
 * @typedef ArticleAssignment1
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef StoreAssignResponse
 * @property {number} [company_id]
 * @property {string} [_id]
 * @property {string} [uid]
 * @property {Object[]} [strategy_wise_listing]
 * @property {number} quantity
 * @property {number} [price_effective]
 * @property {Object} [meta]
 * @property {boolean} status
 * @property {string} [group_id]
 * @property {string} [s_city]
 * @property {number} [store_id]
 * @property {ArticleAssignment1} article_assignment
 * @property {number} [price_marked]
 * @property {number} [store_pincode]
 * @property {number} [index]
 * @property {number} item_id
 * @property {string} size
 */

/**
 * @typedef BrandItem
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {Media} [logo]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {string[]} [departments]
 * @property {Action} [action]
 * @property {string} [discount]
 */

/**
 * @typedef BrandListingResponse
 * @property {Page} page
 * @property {BrandItem[]} [items]
 */

/**
 * @typedef Department
 * @property {string} [name]
 * @property {Media} [logo]
 * @property {number} [uid]
 * @property {string} [slug]
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
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {Object[]} [childs]
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 */

/**
 * @typedef SecondLevelChild
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {ThirdLevelChild[]} [childs]
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 */

/**
 * @typedef Child
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {SecondLevelChild[]} [childs]
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 */

/**
 * @typedef CategoryItems
 * @property {ImageUrls} [banners]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [slug]
 * @property {Child[]} [childs]
 * @property {Action} [action]
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {string} [department]
 * @property {CategoryItems[]} [items]
 */

/**
 * @typedef CategoryListingResponse
 * @property {DepartmentIdentifier[]} [departments]
 * @property {DepartmentCategoryTree[]} [data]
 */

/**
 * @typedef ApplicationProductListingResponse
 * @property {ProductFilters[]} [filters]
 * @property {Page} page
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Object} [operators]
 */

/**
 * @typedef ProductDetail
 * @property {string} slug
 * @property {number} [rating_count]
 * @property {Media1[]} [medias]
 * @property {boolean} [has_variant]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [item_type]
 * @property {string} [name]
 * @property {number} [rating]
 * @property {string} [type]
 * @property {ProductBrand} [brand]
 * @property {string[]} [tryouts]
 * @property {string} [short_description]
 * @property {Object} [teaser_tag]
 * @property {string} [color]
 * @property {string[]} [similars]
 * @property {Object} [attributes]
 * @property {Object} [promo_meta]
 * @property {string} [image_nature]
 * @property {number} [uid]
 * @property {string[]} [highlights]
 * @property {string} [product_online_date]
 * @property {string} [description]
 * @property {string} [item_code]
 */

/**
 * @typedef InventoryPage
 * @property {number} item_total
 * @property {boolean} [has_previous]
 * @property {string} type
 * @property {string} [next_id]
 * @property {boolean} [has_next]
 */

/**
 * @typedef InventoryStockResponse
 * @property {InventoryPage} page
 * @property {Object[]} [items]
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
 * @typedef LocationTimingSerializer
 * @property {number} [minute]
 * @property {number} [hour]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {boolean} open
 * @property {LocationTimingSerializer} [closing]
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 */

/**
 * @typedef UserSerializer1
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [state]
 * @property {string} [landmark]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {number} [latitude]
 * @property {string} [country_code]
 * @property {number} [pincode]
 * @property {number} [longitude]
 * @property {string} [country]
 * @property {string} [address1]
 * @property {string} [address2]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef GetCompanySerializer
 * @property {string} [business_type]
 * @property {string} [stage]
 * @property {string} [name]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {number} [uid]
 * @property {string} [modified_on]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {string} [company_type]
 * @property {string} [reject_reason]
 * @property {UserSerializer2} [created_by]
 * @property {UserSerializer2} [verified_by]
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
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef Document
 * @property {string} [url]
 * @property {string} type
 * @property {string} value
 * @property {boolean} [verified]
 * @property {string} [legal_name]
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef GetLocationSerializer
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} phone_number
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} [store_type]
 * @property {string} name
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {UserSerializer1} [modified_by]
 * @property {GetCompanySerializer} [company]
 * @property {Object} [warnings]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {UserSerializer1} [verified_by]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {Document[]} [documents]
 * @property {string} display_name
 * @property {string[]} [notification_emails]
 * @property {LocationIntegrationType} [integration_type]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {string} [modified_on]
 * @property {Object} [_custom_json]
 * @property {UserSerializer1} [created_by]
 * @property {string} code
 * @property {GetAddressSerializer} address
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
 * @property {string} [name]
 * @property {string} [logo]
 * @property {number} uid
 * @property {boolean} [is_active]
 * @property {Object} [_custom_json]
 * @property {string} app_id
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
 * @typedef GetAddressSerializer
 * @property {number} [pincode]
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} [country]
 * @property {string} [city]
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {string} [address_type]
 * @property {string} [landmark]
 * @property {string} [address1]
 * @property {string} [state]
 */

/**
 * @typedef Document
 * @property {string} type
 * @property {string} value
 * @property {boolean} [verified]
 * @property {string} [url]
 * @property {string} [legal_name]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */

/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */

/**
 * @typedef UserSerializer
 * @property {string} [contact]
 * @property {string} [username]
 * @property {string} [user_id]
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
 * @typedef GetCompanyProfileSerializerResponse
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [modified_on]
 * @property {Object} [warnings]
 * @property {Document[]} [documents]
 * @property {ContactDetails} [contact_details]
 * @property {number} uid
 * @property {UserSerializer} [modified_by]
 * @property {string} [business_info]
 * @property {string} company_type
 * @property {UserSerializer} [verified_by]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {UserSerializer} [created_by]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {string} business_type
 * @property {string} [verified_on]
 * @property {boolean} [franchise_enabled]
 * @property {string[]} [notification_emails]
 * @property {string} [created_on]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {BusinessDetails} [business_details]
 * @property {string} [mode]
 * @property {string} [stage]
 */

/**
 * @typedef ErrorResponse
 * @property {Object} [meta]
 * @property {string} [code]
 * @property {number} [status]
 * @property {string} [message]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {number} pincode
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} country
 * @property {string} city
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {string} address_type
 * @property {string} [landmark]
 * @property {string} address1
 * @property {string} state
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {boolean} [enable]
 * @property {string} [effective_date]
 * @property {number} [rate]
 */

/**
 * @typedef UpdateCompany
 * @property {boolean} [franchise_enabled]
 * @property {string[]} [notification_emails]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {ContactDetails} [contact_details]
 * @property {Document[]} [documents]
 * @property {Object} [_custom_json]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {string} [reject_reason]
 * @property {string} [name]
 * @property {Object} [warnings]
 * @property {BusinessDetails} [business_details]
 * @property {string} [business_type]
 * @property {string} [business_info]
 * @property {string} [company_type]
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
 * @property {DocumentsObj} [brand]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [company_documents]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {DocumentsObj} [product]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [landscape]
 * @property {string} [portrait]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {string} [modified_on]
 * @property {Object} [warnings]
 * @property {string} [slug_key]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [reject_reason]
 * @property {number} [uid]
 * @property {UserSerializer} [modified_by]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [created_by]
 * @property {string[]} [synonyms]
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {string} name
 * @property {string} [logo]
 * @property {string} [description]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {string} [mode]
 * @property {string} [stage]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [brand_tier]
 * @property {string[]} [synonyms]
 * @property {Object} [_custom_json]
 * @property {number} [company_id]
 * @property {Object} [_locale_language]
 * @property {string} name
 * @property {string} logo
 * @property {number} [uid]
 * @property {string} [description]
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
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {CompanyDetails} [details]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string[]} [notification_emails]
 * @property {string} [created_on]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {Object} [_custom_json]
 * @property {string[]} [market_channels]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {string} business_type
 * @property {UserSerializer} [modified_by]
 * @property {string} company_type
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [created_on]
 * @property {CompanySerializer} [company]
 * @property {string} [modified_on]
 * @property {string} [reject_reason]
 * @property {Object} [warnings]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef CompanyBrandListSerializer
 * @property {Page} [page]
 * @property {CompanyBrandSerializer[]} [items]
 */

/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number[]} brands
 * @property {number} company
 * @property {number} [uid]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} hour
 * @property {number} minute
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [closing]
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 * @property {boolean} open
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
 * @typedef GetCompanySerializer
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {UserSerializer} [created_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {string} [business_type]
 * @property {UserSerializer} [modified_by]
 * @property {string} [company_type]
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
 * @typedef LocationManagerSerializer
 * @property {string} [name]
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef GetLocationSerializer
 * @property {GetAddressSerializer} address
 * @property {string} [modified_on]
 * @property {Object} [warnings]
 * @property {string} display_name
 * @property {string} [phone_number]
 * @property {Document[]} [documents]
 * @property {string} [store_type]
 * @property {number} [uid]
 * @property {string} code
 * @property {UserSerializer} [modified_by]
 * @property {UserSerializer} [verified_by]
 * @property {UserSerializer} [created_by]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {Object} [_custom_json]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} name
 * @property {string} [verified_on]
 * @property {string[]} [notification_emails]
 * @property {string} [created_on]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {GetCompanySerializer} [company]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} [stage]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 */

/**
 * @typedef LocationListSerializer
 * @property {Page} [page]
 * @property {GetLocationSerializer[]} [items]
 */

/**
 * @typedef AddressSerializer
 * @property {number} [pincode]
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} [country]
 * @property {string} [city]
 * @property {string} [country_code]
 * @property {string} [address2]
 * @property {string} [address_type]
 * @property {string} [landmark]
 * @property {string} [address1]
 * @property {string} [state]
 */

/**
 * @typedef LocationSerializer
 * @property {string[]} [notification_emails]
 * @property {Document[]} [documents]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} [store_type]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {Object} [_custom_json]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {number} company
 * @property {AddressSerializer} address
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string} name
 * @property {Object} [warnings]
 * @property {string} display_name
 * @property {LocationManagerSerializer} [manager]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {string} code
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
 * @property {GStore[]} [gstores]
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
 * @property {string} integration
 * @property {Object} [integration_data]
 * @property {string} [company_name]
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
 * @property {string} integration
 * @property {string} company_name
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
 * @property {Object} [mapping]
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
 * @property {number} [cod_threshold_amount]
 * @property {number} [online_threshold_amount]
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
 * @typedef CouponSchedule
 * @property {number} [duration]
 * @property {string} [start]
 * @property {string} [cron]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 */

/**
 * @typedef Rule
 * @property {number} [value]
 * @property {number} [min]
 * @property {number} [max]
 * @property {number} [discount_qty]
 * @property {number} [key]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [app]
 * @property {number} [total]
 * @property {number} [user]
 */

/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [maximum]
 * @property {UsesRemaining} [remaining]
 */

/**
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */

/**
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
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
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [types]
 * @property {string[]} [networks]
 * @property {string[]} [codes]
 */

/**
 * @typedef Restrictions
 * @property {UsesRestriction} [uses]
 * @property {PostOrder} [post_order]
 * @property {PriceRange} [price_range]
 * @property {number[]} [ordering_stores]
 * @property {number[]} [user_groups]
 * @property {string[]} [platforms]
 * @property {string} [user_type]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {boolean} [coupon_allowed]
 * @property {Object} [payments]
 */

/**
 * @typedef State
 * @property {boolean} [is_archived]
 * @property {boolean} [is_display]
 * @property {boolean} [is_public]
 */

/**
 * @typedef Validation
 * @property {string[]} [app_id]
 * @property {string} [user_registered_after]
 * @property {boolean} [anonymous]
 */

/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */

/**
 * @typedef RuleDefinition
 * @property {string} applicable_on
 * @property {string[]} [scope]
 * @property {string} [currency_code]
 * @property {string} calculate_on
 * @property {string} value_type
 * @property {string} type
 * @property {boolean} [auto_apply]
 * @property {boolean} [is_exact]
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
 * @typedef CouponAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [subtitle]
 * @property {string} [title]
 */

/**
 * @typedef DisplayMeta
 * @property {string} [title]
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [remove]
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [description]
 */

/**
 * @typedef Identifier
 * @property {string[]} [article_id]
 * @property {number[]} [store_id]
 * @property {string[]} [email_domain]
 * @property {number[]} [item_id]
 * @property {number[]} [exclude_brand_id]
 * @property {number[]} [category_id]
 * @property {string[]} [user_id]
 * @property {string[]} [collection_id]
 * @property {number[]} [company_id]
 * @property {number[]} [brand_id]
 */

/**
 * @typedef CouponAdd
 * @property {CouponSchedule} [_schedule]
 * @property {string} code
 * @property {Rule[]} rule
 * @property {CouponDateMeta} [date_meta]
 * @property {Restrictions} [restrictions]
 * @property {State} [state]
 * @property {Validation} [validation]
 * @property {CouponAction} [action]
 * @property {RuleDefinition} rule_definition
 * @property {Validity} validity
 * @property {string[]} [tags]
 * @property {Ownership} ownership
 * @property {CouponAuthor} [author]
 * @property {DisplayMeta} display_meta
 * @property {Identifier} identifiers
 * @property {string} type_slug
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
 * @property {CouponSchedule} [_schedule]
 * @property {string} code
 * @property {Rule[]} rule
 * @property {CouponDateMeta} [date_meta]
 * @property {Restrictions} [restrictions]
 * @property {State} [state]
 * @property {Validation} [validation]
 * @property {CouponAction} [action]
 * @property {RuleDefinition} rule_definition
 * @property {Validity} validity
 * @property {string[]} [tags]
 * @property {Ownership} ownership
 * @property {CouponAuthor} [author]
 * @property {DisplayMeta} display_meta
 * @property {Identifier} identifiers
 * @property {string} type_slug
 */

/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive]
 * @property {CouponSchedule} [schedule]
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [offer_text]
 * @property {string} [name]
 * @property {string} [description]
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
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
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
 * @typedef Restrictions1
 * @property {UsesRestriction1} uses
 * @property {PostOrder1} [post_order]
 * @property {UserRegistered} [user_registered]
 * @property {number} [order_quantity]
 * @property {number[]} [user_groups]
 * @property {string[]} [platforms]
 * @property {string[]} [user_id]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {boolean} [anonymous_users]
 */

/**
 * @typedef DiscountOffer
 * @property {number} [max_offer_quantity]
 * @property {string} [code]
 * @property {number} [min_offer_quantity]
 * @property {boolean} [partial_can_ret]
 * @property {number} [max_discount_amount]
 * @property {number} [discount_price]
 * @property {boolean} [apportion_discount]
 * @property {number} [discount_amount]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [discount_percentage]
 */

/**
 * @typedef CompareObject
 * @property {number} [less_than_equals]
 * @property {number} [equals]
 * @property {number} [greater_than]
 * @property {number} [less_than]
 * @property {number} [greater_than_equals]
 */

/**
 * @typedef ItemCriteria
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_category]
 * @property {number[]} [item_id]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_brand]
 * @property {string[]} [item_sku]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_exclude_store]
 * @property {number[]} [item_exclude_category]
 * @property {string[]} [item_size]
 * @property {number[]} [item_store]
 * @property {boolean} [all_items]
 * @property {CompareObject} [cart_total]
 * @property {string[]} [available_zones]
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_exclude_company]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_company]
 * @property {CompareObject} [cart_unique_item_amount]
 */

/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {DiscountOffer} offer
 * @property {ItemCriteria} item_criteria
 * @property {string} discount_type
 */

/**
 * @typedef PromotionAction
 * @property {string} action_type
 * @property {string} action_date
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [modified_by]
 * @property {string} [created_by]
 */

/**
 * @typedef PromotionSchedule
 * @property {boolean} published
 * @property {number} [duration]
 * @property {string} start
 * @property {string} [cron]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 */

/**
 * @typedef Ownership1
 * @property {string} payable_category
 * @property {string} payable_by
 */

/**
 * @typedef PromotionListItem
 * @property {string} application_id
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [calculate_on]
 * @property {string} promotion_type
 * @property {Visibility} [visiblility]
 * @property {string} [apply_exclusive]
 * @property {DisplayMeta1} display_meta
 * @property {Restrictions1} [restrictions]
 * @property {DiscountRule[]} discount_rules
 * @property {string} promo_group
 * @property {PromotionAction} [post_order_action]
 * @property {string} [currency]
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {boolean} [apply_all_discount]
 * @property {Object} buy_rules
 * @property {PromotionSchedule} [_schedule]
 * @property {boolean} [stackable]
 * @property {string} mode
 * @property {Ownership1} ownership
 */

/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PromotionAdd
 * @property {string} application_id
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [calculate_on]
 * @property {string} promotion_type
 * @property {Visibility} [visiblility]
 * @property {string} [apply_exclusive]
 * @property {DisplayMeta1} display_meta
 * @property {Restrictions1} [restrictions]
 * @property {DiscountRule[]} discount_rules
 * @property {string} promo_group
 * @property {PromotionAction} [post_order_action]
 * @property {string} [currency]
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {boolean} [apply_all_discount]
 * @property {Object} buy_rules
 * @property {PromotionSchedule} [_schedule]
 * @property {boolean} [stackable]
 * @property {string} mode
 * @property {Ownership1} ownership
 */

/**
 * @typedef PromotionUpdate
 * @property {string} application_id
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [calculate_on]
 * @property {string} promotion_type
 * @property {Visibility} [visiblility]
 * @property {string} [apply_exclusive]
 * @property {DisplayMeta1} display_meta
 * @property {Restrictions1} [restrictions]
 * @property {DiscountRule[]} discount_rules
 * @property {string} promo_group
 * @property {PromotionAction} [post_order_action]
 * @property {string} [currency]
 * @property {PromotionAuthor} [author]
 * @property {number} [apply_priority]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {boolean} [apply_all_discount]
 * @property {Object} buy_rules
 * @property {PromotionSchedule} [_schedule]
 * @property {boolean} [stackable]
 * @property {string} mode
 * @property {Ownership1} ownership
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive]
 * @property {PromotionSchedule} [schedule]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [entity_slug]
 * @property {string} [title]
 * @property {string} [example]
 * @property {boolean} [is_hidden]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [subtitle]
 * @property {string} [type]
 * @property {string} [description]
 * @property {string} [entity_type]
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
 * @typedef LoyaltyPoints
 * @property {string} [description]
 * @property {number} [applicable]
 * @property {boolean} [is_applied]
 * @property {number} [total]
 */

/**
 * @typedef DisplayBreakup
 * @property {number} [value]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {string} [display]
 * @property {string} [key]
 * @property {string[]} [message]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [sub_title]
 * @property {number} [value]
 * @property {string} [title]
 * @property {string} [code]
 * @property {boolean} [is_applied]
 * @property {number} [minimum_cart_value]
 * @property {number} [coupon_value]
 * @property {string} [coupon_type]
 * @property {string} [uid]
 * @property {string} [type]
 * @property {string} [message]
 * @property {string} [description]
 * @property {number} [max_discount_value]
 */

/**
 * @typedef RawBreakup
 * @property {number} [you_saved]
 * @property {number} [mrp_total]
 * @property {number} [gift_card]
 * @property {number} [subtotal]
 * @property {number} [fynd_cash]
 * @property {number} [cod_charge]
 * @property {number} [discount]
 * @property {number} [coupon]
 * @property {number} [total]
 * @property {number} [convenience_fee]
 * @property {number} [vog]
 * @property {number} [delivery_charge]
 * @property {number} [gst_charges]
 */

/**
 * @typedef CartBreakup
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {DisplayBreakup[]} [display]
 * @property {CouponBreakup} [coupon]
 * @property {RawBreakup} [raw]
 */

/**
 * @typedef BasePrice
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {string} [currency_code]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [converted]
 * @property {BasePrice} [base]
 */

/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef ProductArticle
 * @property {string} [seller_identifier]
 * @property {Object} [gift_card]
 * @property {ArticlePriceInfo} [price]
 * @property {string[]} [product_group_tags]
 * @property {Object} [extra_meta]
 * @property {string} [uid]
 * @property {boolean} [is_gift_visible]
 * @property {BaseInfo} [store]
 * @property {Object} [cart_item_meta]
 * @property {string} [type]
 * @property {string} [size]
 * @property {BaseInfo} [seller]
 * @property {Object} [parent_item_identifiers]
 * @property {Object} [identifier]
 * @property {number} [quantity]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef ProductPrice
 * @property {number} [effective]
 * @property {number} [selling]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {number} [add_on]
 * @property {number} [marked]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [converted]
 * @property {ProductPrice} [base]
 */

/**
 * @typedef DiscountRulesApp
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [offer]
 * @property {Object} [item_criteria]
 * @property {Object} [raw_offer]
 */

/**
 * @typedef BuyRules
 * @property {Object} [cart_conditions]
 * @property {Object} [item_criteria]
 */

/**
 * @typedef FreeGiftItem
 * @property {string[]} [item_images_url]
 * @property {string} [item_name]
 * @property {Object} [item_price_details]
 * @property {string} [item_brand_name]
 * @property {number} [item_id]
 * @property {string} [item_slug]
 */

/**
 * @typedef AppliedFreeArticles
 * @property {string} [parent_item_identifier]
 * @property {FreeGiftItem} [free_gift_item_details]
 * @property {string} [article_id]
 * @property {number} [quantity]
 */

/**
 * @typedef AppliedPromotion
 * @property {number} [article_quantity]
 * @property {string} [promo_id]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {string} [offer_text]
 * @property {string} [promotion_group]
 * @property {string} [promotion_name]
 * @property {string} [promotion_type]
 * @property {BuyRules[]} [buy_rules]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {number} [amount]
 * @property {boolean} [mrp_promotion]
 */

/**
 * @typedef ProductAvailability
 * @property {number} [other_store_quantity]
 * @property {boolean} [is_valid]
 * @property {string[]} [sizes]
 * @property {boolean} [deliverable]
 * @property {boolean} [out_of_stock]
 */

/**
 * @typedef CouponDetails
 * @property {number} [discount_single_quantity]
 * @property {number} [discount_total_quantity]
 * @property {string} [code]
 */

/**
 * @typedef ProductImage
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef Tags
 * @property {Object} [tags]
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
 * @typedef CartProduct
 * @property {string} [name]
 * @property {ProductImage[]} [images]
 * @property {CategoryInfo[]} [categories]
 * @property {string} [item_code]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {Tags} [teaser_tag]
 * @property {string[]} [tags]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {BaseInfo} [brand]
 * @property {ProductAction} [action]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef CartProductInfo
 * @property {ProductArticle} [article]
 * @property {string} [coupon_message]
 * @property {PromoMeta} [promo_meta]
 * @property {ProductPriceInfo} [price]
 * @property {string} [message]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {ProductAvailability} [availability]
 * @property {string} [discount]
 * @property {Object} [bulk_offer]
 * @property {CouponDetails} [coupon]
 * @property {string} [key]
 * @property {CartProduct} [product]
 * @property {number} [quantity]
 * @property {Object} [parent_item_identifiers]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {boolean} [is_set]
 * @property {CartProductIdentifer} identifiers
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {string} [message]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
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
 * @property {string} [name]
 * @property {string} [address]
 * @property {string} [area]
 * @property {string} [state]
 * @property {Object} [meta]
 * @property {string} area_code
 * @property {number} [phone]
 * @property {string} [country]
 * @property {string} [area_code_slug]
 * @property {string} [city]
 * @property {string} [country_code]
 * @property {string} [address_type]
 * @property {string} [email]
 * @property {number} [pincode]
 * @property {string} [landmark]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {CartItem} [cart_items]
 * @property {ShippingAddress} shipping_address
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
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {Object} [extra_meta]
 * @property {string} [payment_id]
 * @property {string} [payment_gateway]
 * @property {string} [order_id]
 * @property {string} [current_status]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} [name]
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {number} amount
 * @property {string} mode
 */

/**
 * @typedef OpenApiFiles
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef CartItemMeta
 * @property {string} [group_id]
 * @property {boolean} [primary_item]
 */

/**
 * @typedef OpenApiOrderItem
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} cashback_applied
 * @property {number} coupon_effective_discount
 * @property {number} price_effective
 * @property {number} price_marked
 * @property {OpenApiFiles[]} [files]
 * @property {CartItemMeta} [meta]
 * @property {Object} [extra_meta]
 * @property {number} product_id
 * @property {string} size
 * @property {number} cod_charges
 * @property {number} discount
 * @property {number} delivery_charges
 * @property {number} [loyalty_discount]
 * @property {number} [employee_discount]
 * @property {number} [quantity]
 * @property {number} amount_paid
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {OpenApiOrderItem[]} cart_items
 * @property {number} coupon_value
 * @property {number} cart_value
 * @property {ShippingAddress} billing_address
 * @property {string} [order_id]
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [affiliate_order_id]
 * @property {number} [loyalty_discount]
 * @property {string} [comment]
 * @property {Object} [employee_discount]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {OpenApiFiles[]} [files]
 * @property {string} [gstin]
 * @property {string} [currency_code]
 * @property {number} cod_charges
 * @property {string} [payment_mode]
 * @property {number} delivery_charges
 * @property {string} [coupon]
 * @property {number} cashback_applied
 * @property {string} coupon_code
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
 * @property {string} expire_at
 * @property {Object} [promotion]
 * @property {Object} [fynd_credits]
 * @property {Object} [pick_up_customer_details]
 * @property {string} [order_id]
 * @property {boolean} [is_archive]
 * @property {Object[]} [payment_methods]
 * @property {Object} cashback
 * @property {string} [payment_mode]
 * @property {number[]} [fc_index_map]
 * @property {Object} [payments]
 * @property {string} last_modified
 * @property {number} [cart_value]
 * @property {number} uid
 * @property {boolean} [buy_now]
 * @property {number} [discount]
 * @property {string} [app_id]
 * @property {string} _id
 * @property {string} [comment]
 * @property {boolean} is_default
 * @property {string} [checkout_mode]
 * @property {boolean} [is_active]
 * @property {string} [gstin]
 * @property {number} [bulk_coupon_discount]
 * @property {string} created_on
 * @property {Object} [meta]
 * @property {Object} [cod_charges]
 * @property {Object[]} articles
 * @property {Object[]} [shipments]
 * @property {Object} [delivery_charges]
 * @property {Object} [coupon]
 * @property {string} user_id
 * @property {boolean} [merge_qty]
 */

/**
 * @typedef AbandonedCartResponse
 * @property {Page} [page]
 * @property {Object} [result]
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {AbandonedCart[]} [items]
 */

/**
 * @typedef AddProductCart
 * @property {number} [store_id]
 * @property {boolean} [pos]
 * @property {string} [article_id]
 * @property {string[]} [product_group_tags]
 * @property {Object} [extra_meta]
 * @property {number} [item_id]
 * @property {string} [item_size]
 * @property {string} [display]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [seller_id]
 * @property {Object} [article_assignment]
 * @property {number} [quantity]
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 * @property {boolean} [new_cart]
 */

/**
 * @typedef PaymentSelectionLock
 * @property {string} [payment_identifier]
 * @property {boolean} [enabled]
 * @property {string} [default_options]
 */

/**
 * @typedef CartCurrency
 * @property {string} [code]
 * @property {string} [symbol]
 */

/**
 * @typedef CartDetailResponse
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [pan_no]
 * @property {string} [gstin]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [is_valid]
 * @property {string} [last_modified]
 * @property {boolean} [buy_now]
 * @property {string} [id]
 * @property {boolean} [restrict_checkout]
 * @property {string} [comment]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {CartCurrency} [currency]
 * @property {Object} [pan_config]
 * @property {string} [message]
 * @property {CartProductInfo[]} [items]
 * @property {string} [coupon_text]
 * @property {string} [checkout_mode]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {boolean} [partial]
 * @property {CartDetailResponse} [cart]
 */

/**
 * @typedef UpdateProductCart
 * @property {string} [article_id]
 * @property {Object} [extra_meta]
 * @property {number} [item_id]
 * @property {string} [item_size]
 * @property {CartProductIdentifer} identifiers
 * @property {Object} [parent_item_identifiers]
 * @property {number} [quantity]
 * @property {number} [item_index]
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
 * @property {string} [token]
 * @property {string} [share_url]
 */

/**
 * @typedef SharedCartDetails
 * @property {Object} [source]
 * @property {string} [created_on]
 * @property {Object} [meta]
 * @property {string} [token]
 * @property {Object} [user]
 */

/**
 * @typedef SharedCart
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [delivery_charge_info]
 * @property {SharedCartDetails} [shared_cart_details]
 * @property {CartCurrency} [currency]
 * @property {CartProductInfo[]} [items]
 * @property {string} [last_modified]
 * @property {string} [uid]
 * @property {boolean} [buy_now]
 * @property {string} [id]
 * @property {boolean} [restrict_checkout]
 * @property {string} [comment]
 * @property {string} [message]
 * @property {string} [coupon_text]
 * @property {string} [checkout_mode]
 * @property {string} [gstin]
 * @property {boolean} [is_valid]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {number} [cart_id]
 */

/**
 * @typedef SharedCartResponse
 * @property {string} [error]
 * @property {SharedCart} [cart]
 */

/**
 * @typedef CartList
 * @property {number} [item_counts]
 * @property {string} [created_on]
 * @property {number} [cart_value]
 * @property {Object} [pick_up_customer_details]
 * @property {string} [cart_id]
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
 * @property {string} [modified_on]
 * @property {string} [uid]
 * @property {string} [_id]
 * @property {string} [mobile]
 * @property {string} [created_at]
 * @property {string} [last_name]
 * @property {string} [first_name]
 */

/**
 * @typedef UserCartMappingResponse
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartBreakup} [breakup_values]
 * @property {Object} [pan_config]
 * @property {string} [delivery_charge_info]
 * @property {CartCurrency} [currency]
 * @property {UserInfo} [user]
 * @property {CartProductInfo[]} [items]
 * @property {string} [last_modified]
 * @property {boolean} [buy_now]
 * @property {string} [id]
 * @property {boolean} [restrict_checkout]
 * @property {string} [comment]
 * @property {string} [message]
 * @property {string} [coupon_text]
 * @property {string} [checkout_mode]
 * @property {string} [pan_no]
 * @property {string} [gstin]
 * @property {boolean} [is_valid]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 */

/**
 * @typedef DeleteCartRequest
 * @property {string[]} [cart_id_list]
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
 * @typedef Coupon
 * @property {number} [minimum_cart_value]
 * @property {string} [sub_title]
 * @property {string} [title]
 * @property {boolean} [is_applied]
 * @property {number} [coupon_value]
 * @property {string} [coupon_type]
 * @property {string} [message]
 * @property {string} [expires_on]
 * @property {boolean} [is_applicable]
 * @property {string} [description]
 * @property {number} [max_discount_value]
 * @property {string} [coupon_code]
 */

/**
 * @typedef PageCoupon
 * @property {boolean} [has_previous]
 * @property {number} [total_item_count]
 * @property {boolean} [has_next]
 * @property {number} [total]
 * @property {number} [current]
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
 * @property {string} [address]
 * @property {GeoLocation} [geo_location]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [area]
 * @property {Object} [google_map_point]
 * @property {string} [area_code]
 * @property {string} [phone]
 * @property {string} [area_code_slug]
 * @property {string} [created_by_user_id]
 * @property {string} [id]
 * @property {string[]} [tags]
 * @property {string} [country]
 * @property {string} [checkout_mode]
 * @property {string} [state]
 * @property {boolean} [is_active]
 * @property {Object} [meta]
 * @property {string} [city]
 * @property {string} [cart_id]
 * @property {string} [address_type]
 * @property {string} [user_id]
 * @property {boolean} [is_default_address]
 * @property {string} [landmark]
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
 * @property {boolean} [is_default_address]
 * @property {boolean} [is_updated]
 */

/**
 * @typedef DeleteAddressResponse
 * @property {string} [id]
 * @property {boolean} [is_deleted]
 */

/**
 * @typedef PlatformSelectCartAddressRequest
 * @property {string} [id]
 * @property {string} [cart_id]
 * @property {string} [billing_address_id]
 * @property {string} [user_id]
 * @property {string} [checkout_mode]
 */

/**
 * @typedef ShipmentResponse
 * @property {string} [shipment_type]
 * @property {ShipmentPromise} [promise]
 * @property {string} [fulfillment_type]
 * @property {Object} [dp_options]
 * @property {number} [fulfillment_id]
 * @property {string} [dp_id]
 * @property {number} [shipments]
 * @property {string} [order_type]
 * @property {string} [box_type]
 * @property {CartProductInfo[]} [items]
 */

/**
 * @typedef CartShipmentsResponse
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [last_modified]
 * @property {string} [uid]
 * @property {boolean} [buy_now]
 * @property {string} [id]
 * @property {boolean} [restrict_checkout]
 * @property {string} [comment]
 * @property {string} [message]
 * @property {string} [coupon_text]
 * @property {string} [checkout_mode]
 * @property {string} [gstin]
 * @property {string} [delivery_charge_info]
 * @property {boolean} [is_valid]
 * @property {ShipmentResponse[]} [shipments]
 * @property {boolean} [error]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {number} [cart_id]
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
 * @property {string} [pan_no]
 * @property {string} [gstin]
 * @property {Object} [pick_up_customer_details]
 * @property {string} [comment]
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
 * @typedef Files
 * @property {string[]} values
 * @property {string} key
 */

/**
 * @typedef StaffCheckout
 * @property {string} _id
 * @property {string} [employee_code]
 * @property {string} user
 * @property {string} last_name
 * @property {string} first_name
 */

/**
 * @typedef PlatformCartCheckoutDetailRequest
 * @property {Object} [billing_address]
 * @property {string} order_type
 * @property {Object} [delivery_address]
 * @property {Files[]} [files]
 * @property {string} [device_id]
 * @property {string} payment_mode
 * @property {string} [merchant_code]
 * @property {number} [ordering_store]
 * @property {boolean} [pos]
 * @property {string} [callback_url]
 * @property {string} [address_id]
 * @property {string} id
 * @property {string} [payment_identifier]
 * @property {Object} [payment_params]
 * @property {string} [checkout_mode]
 * @property {string} [aggregator]
 * @property {Object} [extra_meta]
 * @property {Object} [meta]
 * @property {boolean} [payment_auto_confirm]
 * @property {string} [employee_code]
 * @property {StaffCheckout} [staff]
 * @property {string} [billing_address_id]
 * @property {string} user_id
 * @property {number} [pick_at_store_uid]
 */

/**
 * @typedef CheckCart
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [order_id]
 * @property {boolean} [success]
 * @property {string} [error_message]
 * @property {string} [store_code]
 * @property {string} [delivery_charge_info]
 * @property {string} [user_type]
 * @property {CartCurrency} [currency]
 * @property {CartProductInfo[]} [items]
 * @property {boolean} [cod_available]
 * @property {string} [last_modified]
 * @property {string} [uid]
 * @property {boolean} [buy_now]
 * @property {string} [id]
 * @property {boolean} [restrict_checkout]
 * @property {string} [cod_message]
 * @property {string} [comment]
 * @property {string} [message]
 * @property {string} [coupon_text]
 * @property {string} [checkout_mode]
 * @property {string} [gstin]
 * @property {boolean} [is_valid]
 * @property {number} [cod_charges]
 * @property {number} [delivery_charges]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {number} [cart_id]
 * @property {Object[]} [store_emps]
 * @property {number} [delivery_charge_order_value]
 */

/**
 * @typedef CartCheckoutResponse
 * @property {Object} [data]
 * @property {CheckCart} [cart]
 * @property {string} [callback_url]
 * @property {string} [message]
 * @property {string} [order_id]
 * @property {boolean} [success]
 * @property {string} [payment_confirm_url]
 * @property {string} [app_intercept_url]
 */

/**
 * @typedef CartDeliveryModesResponse
 * @property {number[]} [pickup_stores]
 * @property {string[]} [available_modes]
 */

/**
 * @typedef PickupStoreDetail
 * @property {string} [name]
 * @property {string} [address]
 * @property {string} [area]
 * @property {string} [state]
 * @property {string} [area_code]
 * @property {number} [uid]
 * @property {string} [store_code]
 * @property {string} [phone]
 * @property {string} [country]
 * @property {number} [id]
 * @property {string} [area_code_slug]
 * @property {string} [city]
 * @property {string} [address_type]
 * @property {string} [email]
 * @property {number} [pincode]
 * @property {string} [landmark]
 */

/**
 * @typedef StoreDetailsResponse
 * @property {PickupStoreDetail[]} [items]
 */

/**
 * @typedef UpdateCartPaymentRequest
 * @property {string} [address_id]
 * @property {string} [id]
 * @property {string} [payment_mode]
 * @property {string} [aggregator_name]
 * @property {string} [merchant_code]
 * @property {string} [payment_identifier]
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

/**
 * @typedef ApplicationServiceabilityConfig
 * @property {string} serviceability_type
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ServiceabilityrErrorResponse
 * @property {string} value
 * @property {string} message
 * @property {string} type
 */

/**
 * @typedef ApplicationServiceabilityConfigResponse
 * @property {boolean} success
 * @property {ApplicationServiceabilityConfig} [data]
 * @property {ServiceabilityrErrorResponse} [error]
 */

/**
 * @typedef EntityRegionView_Request
 * @property {string[]} [parent_id]
 * @property {string[]} sub_type
 */

/**
 * @typedef EntityRegionView_page
 * @property {string} type
 * @property {number} current
 * @property {number} size
 * @property {number} item_total
 * @property {boolean} has_next
 */

/**
 * @typedef EntityRegionView_Items
 * @property {string} sub_type
 * @property {string} uid
 * @property {string} name
 */

/**
 * @typedef EntityRegionView_Error
 * @property {string} [value]
 * @property {string} [message]
 * @property {string} [type]
 */

/**
 * @typedef EntityRegionView_Response
 * @property {boolean} success
 * @property {EntityRegionView_page} page
 * @property {EntityRegionView_Items[]} data
 * @property {EntityRegionView_Error} error
 */

/**
 * @typedef ZoneDataItem
 * @property {number} current
 * @property {number} size
 * @property {string} type
 * @property {number} item_total
 * @property {boolean} has_next
 */

/**
 * @typedef ListViewProduct
 * @property {number} count
 * @property {string} type
 */

/**
 * @typedef ListViewChannels
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ListViewItems
 * @property {number} pincodes_count
 * @property {string} slug
 * @property {number} company_id
 * @property {string} zone_id
 * @property {string} name
 * @property {number} stores_count
 * @property {ListViewProduct} product
 * @property {ListViewChannels} channels
 * @property {boolean} is_active
 */

/**
 * @typedef ListViewSummary
 * @property {number} total_zones
 * @property {number} total_active_zones
 * @property {number} total_pincodes_served
 */

/**
 * @typedef ListViewResponse
 * @property {ZoneDataItem[]} page
 * @property {ListViewItems[]} items
 * @property {ListViewSummary[]} summary
 */

/**
 * @typedef CompanyStoreView_PageItems
 * @property {string} type
 * @property {number} current
 * @property {number} size
 * @property {number} item_total
 * @property {boolean} has_next
 */

/**
 * @typedef CompanyStoreView_Response
 * @property {Object[]} [items]
 * @property {CompanyStoreView_PageItems[]} page
 */

/**
 * @typedef GetZoneDataViewChannels
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ZoneProductTypes
 * @property {string[]} tags
 * @property {string} type
 */

/**
 * @typedef ZoneMappingType
 * @property {string[]} [state]
 * @property {string} country
 * @property {string[]} [pincode]
 */

/**
 * @typedef UpdateZoneData
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 */

/**
 * @typedef ZoneUpdateRequest
 * @property {UpdateZoneData} data
 * @property {string} identifier
 */

/**
 * @typedef ZoneSuccessResponse
 * @property {boolean} success
 * @property {number} status_code
 */

/**
 * @typedef GetZoneDataViewItems
 * @property {string} zone_id
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 * @property {number} stores_count
 * @property {number} pincodes_count
 */

/**
 * @typedef GetSingleZoneDataViewResponse
 * @property {GetZoneDataViewItems} data
 */

/**
 * @typedef CreateZoneData
 * @property {string} name
 * @property {string} slug
 * @property {number} company_id
 * @property {boolean} is_active
 * @property {GetZoneDataViewChannels[]} channels
 * @property {ZoneProductTypes} product
 * @property {number[]} store_ids
 * @property {string} region_type
 * @property {ZoneMappingType[]} mapping
 * @property {string} [assignment_preference]
 */

/**
 * @typedef ZoneRequest
 * @property {CreateZoneData} data
 * @property {string} identifier
 */

/**
 * @typedef ZoneResponse
 * @property {boolean} success
 * @property {number} status_code
 * @property {string} zone_id
 */

/**
 * @typedef GetZoneFromPincodeViewRequest
 * @property {string} country
 * @property {string} pincode
 */

/**
 * @typedef GetZoneFromPincodeViewResponse
 * @property {string} serviceability_type
 * @property {string[]} zones
 */

/**
 * @typedef AddressResponse
 * @property {string} [address2]
 * @property {number} [longitude]
 * @property {string} [city]
 * @property {string} [address1]
 * @property {number} [latitude]
 * @property {string} [landmark]
 * @property {number} [pincode]
 * @property {string} [state]
 * @property {string} [country]
 */

/**
 * @typedef ContactNumberResponse
 * @property {number} [country_code]
 * @property {string} [number]
 */

/**
 * @typedef IntegrationTypeResponse
 * @property {string} [order]
 * @property {string} [inventory]
 */

/**
 * @typedef CreatedByResponse
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef MobileNo
 * @property {number} [country_code]
 * @property {string} [number]
 */

/**
 * @typedef ManagerResponse
 * @property {MobileNo} [mobile_no]
 * @property {string} [name]
 * @property {string} [email]
 */

/**
 * @typedef ProductReturnConfigResponse
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef ModifiedByResponse
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef EwayBillResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef EinvoiceResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef GstCredentialsResponse
 * @property {EwayBillResponse} [e_waybill]
 * @property {EinvoiceResponse} [e_invoice]
 */

/**
 * @typedef DocumentsResponse
 * @property {string} [legal_name]
 * @property {string} [value]
 * @property {boolean} [verified]
 * @property {string} [type]
 */

/**
 * @typedef Dp
 * @property {string} [external_account_id]
 * @property {number} [rvp_priority]
 * @property {number} [area_code]
 * @property {number} [lm_priority]
 * @property {boolean} [assign_dp_from_sb]
 * @property {string} [transport_mode]
 * @property {number} [fm_priority]
 * @property {string} [payment_mode]
 * @property {string[]} [operations]
 * @property {string} [internal_account_id]
 */

/**
 * @typedef LogisticsResponse
 * @property {Dp} [dp]
 * @property {boolean} [override]
 */

/**
 * @typedef OpeningClosing
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef TimmingResponse
 * @property {OpeningClosing} [opening]
 * @property {OpeningClosing} [closing]
 * @property {boolean} [open]
 * @property {string} [weekday]
 */

/**
 * @typedef WarningsResponse
 * @property {string} [store_address]
 */

/**
 * @typedef ItemResponse
 * @property {AddressResponse} [address]
 * @property {string} [verified_on]
 * @property {number} [company_id]
 * @property {string} [_cls]
 * @property {string} [created_on]
 * @property {ContactNumberResponse[]} [contact_numbers]
 * @property {IntegrationTypeResponse} [integration_type]
 * @property {string[]} [notification_emails]
 * @property {CreatedByResponse} [created_by]
 * @property {string} [stage]
 * @property {ManagerResponse} [manager]
 * @property {string} [modified_on]
 * @property {ProductReturnConfigResponse} [product_return_config]
 * @property {ModifiedByResponse} [verified_by]
 * @property {string} [store_type]
 * @property {string} [name]
 * @property {string} [display_name]
 * @property {number} [company]
 * @property {Object} [_custom_json]
 * @property {string} [code]
 * @property {GstCredentialsResponse} [gst_credentials]
 * @property {DocumentsResponse[]} [documents]
 * @property {LogisticsResponse} [logistics]
 * @property {number} [uid]
 * @property {TimmingResponse[]} [timing]
 * @property {WarningsResponse} [warnings]
 * @property {ModifiedByResponse} [modified_by]
 * @property {string} [sub_type]
 */

/**
 * @typedef PageResponse
 * @property {string} [type]
 * @property {number} [current]
 * @property {number} [size]
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 */

/**
 * @typedef GetStoresViewResponse
 * @property {ItemResponse[]} [items]
 * @property {PageResponse} page
 */

module.exports = PlatformClient;
