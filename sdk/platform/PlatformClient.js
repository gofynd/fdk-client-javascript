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
 * @property {string} [value]
 */

/**
 * @typedef SendOtpEmailCommsTemplate
 * @property {string} [key]
 * @property {string} [value]
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
 */

/**
 * @typedef SendOtpCommsReqEmail
 * @property {number} [otp_length]
 * @property {number} [expiry]
 * @property {SendOtpSmsCommsTemplate} [template]
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
 * @property {boolean} success
 * @property {string[]} excluded_fields
 * @property {boolean} created
 * @property {string[]} display_fields
 * @property {string} app_id
 * @property {Object[]} [aggregators]
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
 * @property {string} key
 * @property {string} config_type
 * @property {string} secret
 * @property {boolean} [is_active]
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
 * @property {PaymentModeLogo} [logos]
 * @property {string} [display_name]
 * @property {string} [package_name]
 * @property {string} [code]
 */

/**
 * @typedef PaymentModeList
 * @property {string} [fynd_vpa]
 * @property {string[]} [intent_app_error_list]
 * @property {string} [display_name]
 * @property {string} [nickname]
 * @property {number} [display_priority]
 * @property {string} [card_name]
 * @property {string} [card_number]
 * @property {string} [name]
 * @property {number} [cod_limit]
 * @property {string} [card_reference]
 * @property {number} [cod_limit_per_order]
 * @property {number} [retry_count]
 * @property {string} [code]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {number} [exp_month]
 * @property {string} [card_type]
 * @property {string} [card_id]
 * @property {string} [card_brand_image]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [card_isin]
 * @property {string} [card_issuer]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {boolean} [expired]
 * @property {string} aggregator_name
 * @property {string} [card_fingerprint]
 * @property {number} [exp_year]
 * @property {number} [remaining_limit]
 * @property {string} [merchant_code]
 * @property {number} [timeout]
 * @property {string} [card_brand]
 * @property {IntentApp[]} [intent_app]
 * @property {boolean} [intent_flow]
 * @property {string} [card_token]
 */

/**
 * @typedef RootPaymentMode
 * @property {boolean} [add_card_enabled]
 * @property {boolean} [anonymous_enable]
 * @property {string} display_name
 * @property {boolean} [is_pay_by_card_pl]
 * @property {number} display_priority
 * @property {string} name
 * @property {PaymentModeList[]} [list]
 * @property {string} [aggregator_name]
 * @property {boolean} [save_card]
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
 * @property {Object[]} payouts_aggregators
 * @property {Object} customers
 * @property {Object} unique_transfer_no
 * @property {string} transfer_type
 * @property {boolean} is_default
 * @property {boolean} is_active
 * @property {Object} more_attributes
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} account_type
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [account_no]
 * @property {string} [bank_name]
 * @property {string} [city]
 * @property {string} [account_holder]
 * @property {string} ifsc_code
 * @property {string} [branch_name]
 * @property {number} [pincode]
 */

/**
 * @typedef PayoutRequest
 * @property {Object} users
 * @property {string} aggregator
 * @property {string} transfer_type
 * @property {string} unique_external_id
 * @property {PayoutBankDetails} bank_details
 * @property {boolean} is_active
 */

/**
 * @typedef PayoutResponse
 * @property {Object} users
 * @property {boolean} success
 * @property {string} aggregator
 * @property {boolean} created
 * @property {string} payment_status
 * @property {string} unique_transfer_no
 * @property {string} transfer_type
 * @property {Object} payouts
 * @property {Object} bank_details
 * @property {boolean} is_active
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} success
 * @property {boolean} is_active
 * @property {boolean} is_default
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
 * @property {boolean} success
 * @property {boolean} [is_verified_flag]
 * @property {Object} [data]
 * @property {string} message
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} description
 * @property {boolean} success
 * @property {string} code
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} account_no
 * @property {string} bank_name
 * @property {string} account_holder
 * @property {string} ifsc_code
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
 * @property {string} display_name
 * @property {string} email
 * @property {string} beneficiary_id
 * @property {string} title
 * @property {string} [comment]
 * @property {string} modified_on
 * @property {string} bank_name
 * @property {string} created_on
 * @property {string} account_holder
 * @property {string} ifsc_code
 * @property {string} [branch_name]
 * @property {string} account_no
 * @property {number} id
 * @property {string} transfer_mode
 * @property {string} subtitle
 * @property {string} [delights_user_name]
 * @property {string} address
 * @property {string} [mobile]
 * @property {boolean} is_active
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 * @property {boolean} [show_beneficiary_details]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [order_id]
 * @property {string} [payment_gateway]
 * @property {string} [payment_id]
 * @property {string} [current_status]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {number} amount
 * @property {string} [name]
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} mode
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
 * @typedef CODdata
 * @property {number} limit
 * @property {number} usages
 * @property {number} remaining_limit
 * @property {string} user_id
 * @property {boolean} is_active
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
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef FilterInfoOption
 * @property {string} text
 * @property {string} [value]
 * @property {string} [name]
 */

/**
 * @typedef FiltersInfo
 * @property {string} type
 * @property {string} text
 * @property {string} value
 * @property {FilterInfoOption[]} [options]
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
 * @property {string} [mobile]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [name]
 * @property {number} [uid]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {string} [email]
 * @property {string} [avis_user_id]
 */

/**
 * @typedef ShipmentStatus
 * @property {string} actual_status
 * @property {string} title
 * @property {string} ops_status
 * @property {string} hex_code
 * @property {string} status
 */

/**
 * @typedef PlatformItem
 * @property {string} [color]
 * @property {string} [name]
 * @property {number} [department_id]
 * @property {number} [l3_category]
 * @property {string[]} [images]
 * @property {string} [l3_category_name]
 * @property {boolean} [can_cancel]
 * @property {string} [size]
 * @property {string[]} [l1_category]
 * @property {string[]} [image]
 * @property {number} [id]
 * @property {string} [code]
 * @property {boolean} [can_return]
 */

/**
 * @typedef GSTDetailsData
 * @property {number} value_of_good
 * @property {string} gstin_code
 * @property {number} tax_collected_at_source
 * @property {number} gst_fee
 * @property {number} brand_calculated_amount
 */

/**
 * @typedef Prices
 * @property {number} [amount_paid]
 * @property {number} [discount]
 * @property {number} [refund_amount]
 * @property {number} [price_effective]
 * @property {number} [promotion_effective_discount]
 * @property {number} [cashback]
 * @property {number} [refund_credit]
 * @property {number} [tax_collected_at_source]
 * @property {number} [value_of_good]
 * @property {number} [delivery_charge]
 * @property {number} [cashback_applied]
 * @property {number} [price_marked]
 * @property {number} [coupon_value]
 * @property {number} [fynd_credits]
 * @property {number} [cod_charges]
 * @property {number} [amount_paid_roundoff]
 */

/**
 * @typedef BagUnit
 * @property {number} bag_id
 * @property {string} ordering_channel
 * @property {boolean} [can_return]
 * @property {number} item_quantity
 * @property {string} shipment_id
 * @property {PlatformItem} [item]
 * @property {GSTDetailsData} [gst]
 * @property {boolean} [can_cancel]
 * @property {number} total_shipment_bags
 * @property {Prices} [prices]
 * @property {Object} status
 */

/**
 * @typedef ShipmentItem
 * @property {Object} [application]
 * @property {Object} [channel]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {string} created_at
 * @property {UserDataInfo} [user]
 * @property {ShipmentStatus} [shipment_status]
 * @property {number} total_bags_count
 * @property {BagUnit[]} [bags]
 * @property {string} fulfilling_centre
 * @property {number} total_shipments_in_order
 * @property {string} id
 * @property {Object} [payment_methods]
 * @property {number} shipment_created_at
 * @property {Prices} [prices]
 * @property {Object} [sla]
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {Object} [applied_filters]
 * @property {FiltersInfo[]} [filters]
 * @property {ShipmentItem[]} [items]
 * @property {Object} [page]
 */

/**
 * @typedef Error
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef FulfillingStore
 * @property {string} state
 * @property {string} fulfillment_channel
 * @property {string} city
 * @property {string} phone
 * @property {string} country
 * @property {string} address
 * @property {string} contact_person
 * @property {Object} meta
 * @property {string} id
 * @property {string} store_name
 * @property {string} code
 * @property {string} pincode
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
 * @property {number} [article_quantity]
 * @property {DiscountRules[]} [discount_rules]
 * @property {BuyRules[]} [buy_rules]
 * @property {boolean} [mrp_promotion]
 * @property {string} [promotion_name]
 * @property {number} [amount]
 * @property {string} [promotion_type]
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [state]
 * @property {string} [landmark]
 * @property {string} [version]
 * @property {string} [address_type]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {string} [created_at]
 * @property {string} [address_category]
 * @property {string} [city]
 * @property {string} [phone]
 * @property {string} [country]
 * @property {string} [address1]
 * @property {string} [contact_person]
 * @property {string} [area]
 * @property {string} [email]
 * @property {string} [updated_at]
 * @property {string} [pincode]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} discount
 * @property {number} delivery_charge
 * @property {number} cashback_applied
 * @property {number} gst_tax_percentage
 * @property {number} coupon_value
 * @property {number} promotion_effective_discount
 * @property {number} cashback
 * @property {boolean} added_to_fynd_cash
 * @property {number} amount_paid
 * @property {number} coupon_effective_discount
 * @property {number} value_of_good
 * @property {string} gst_tag
 * @property {string} size
 * @property {number} price_marked
 * @property {Identifier} identifiers
 * @property {number} [tax_collected_at_source]
 * @property {number} cod_charges
 * @property {string} gst_fee
 * @property {number} brand_calculated_amount
 * @property {number} total_units
 * @property {number} price_effective
 * @property {string} item_name
 * @property {number} transfer_price
 * @property {number} fynd_credits
 * @property {Object} pm_price_split
 * @property {number} [amount_paid_roundoff]
 * @property {number} refund_credit
 * @property {string} hsn_code
 */

/**
 * @typedef BagConfigs
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} allow_force_return
 * @property {boolean} is_returnable
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef OrderBagArticle
 * @property {string} [uid]
 * @property {Object} [return_config]
 * @property {Object} [identifiers]
 */

/**
 * @typedef OrderBrandName
 * @property {number} created_on
 * @property {string} logo
 * @property {string} brand_name
 * @property {string} company
 * @property {number} id
 * @property {number} [modified_on]
 */

/**
 * @typedef BagGST
 * @property {number} [value_of_good]
 * @property {string} [hsn_code]
 * @property {string} [gst_tag]
 * @property {string} [gstin_code]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [gst_tax_percentage]
 * @property {number} [gst_fee]
 * @property {number} [brand_calculated_amount]
 */

/**
 * @typedef OrderBags
 * @property {Object} [parent_promo_bags]
 * @property {string} [current_status]
 * @property {number} bag_id
 * @property {AppliedPromos[]} [applied_promos]
 * @property {number} [line_number]
 * @property {PlatformItem} [item]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {string} [entity_type]
 * @property {string} [display_name]
 * @property {BagConfigs} [bag_configs]
 * @property {number} [quantity]
 * @property {boolean} [can_cancel]
 * @property {Prices} [prices]
 * @property {OrderBagArticle} [article]
 * @property {string} [identifier]
 * @property {string} [seller_identifier]
 * @property {boolean} [can_return]
 * @property {OrderBrandName} [brand]
 * @property {BagGST} [gst_details]
 */

/**
 * @typedef TrackingList
 * @property {string} text
 * @property {string} [time]
 * @property {boolean} [is_passed]
 * @property {boolean} [is_current]
 * @property {string} status
 */

/**
 * @typedef UserDetailsData
 * @property {string} state
 * @property {string} name
 * @property {string} city
 * @property {string} phone
 * @property {string} country
 * @property {string} address
 * @property {string} email
 * @property {string} pincode
 */

/**
 * @typedef BagStateMapper
 * @property {string} state_type
 * @property {string} display_name
 * @property {string} journey_type
 * @property {string} name
 * @property {boolean} [is_active]
 * @property {boolean} [app_facing]
 * @property {string} [app_state_name]
 * @property {number} bs_id
 * @property {string} [app_display_name]
 * @property {boolean} [notify_customer]
 */

/**
 * @typedef BagStatusHistory
 * @property {boolean} [kafka_sync]
 * @property {string} [state_type]
 * @property {number} bag_id
 * @property {string} created_at
 * @property {boolean} [display_name]
 * @property {number} [delivery_partner_id]
 * @property {string} [delivery_awb_number]
 * @property {number} store_id
 * @property {string} shipment_id
 * @property {Object[]} [reasons]
 * @property {number} state_id
 * @property {boolean} [forward]
 * @property {BagStateMapper} bag_state_mapper
 * @property {string} [updated_at]
 * @property {number} bsh_id
 * @property {boolean} [app_display_name]
 * @property {string} status
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [created_at]
 * @property {string} [shipment_id]
 * @property {number} [id]
 * @property {number[]} [bag_list]
 * @property {string} [status]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [source]
 * @property {string} mode
 * @property {string} [logo]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [source]
 * @property {string} [order_date]
 * @property {string} [affiliate_id]
 * @property {string} [ordering_channel]
 * @property {Object} [ordering_channel_logo]
 * @property {string} fynd_order_id
 * @property {string} [order_value]
 * @property {Object} [tax_details]
 * @property {string} [cod_charges]
 */

/**
 * @typedef DPDetailsData
 * @property {string} [name]
 * @property {string} [country]
 * @property {string} [gst_tag]
 * @property {string} [eway_bill_id]
 * @property {string} [awb_no]
 * @property {string} [track_url]
 * @property {string} [id]
 * @property {string} [pincode]
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {number} status_progress
 * @property {FulfillingStore} [fulfilling_store]
 * @property {Object} [refund_details]
 * @property {boolean} [go_green]
 * @property {OrderBags[]} [bags]
 * @property {string} email_id
 * @property {Object[]} [custom_meta]
 * @property {string} tracking_url
 * @property {string[]} [child_nodes]
 * @property {Object[]} [forward_tracking_list]
 * @property {boolean} is_fynd_coupon
 * @property {string[]} [shipment_images]
 * @property {string} [vertical]
 * @property {TrackingList[]} [tracking_list]
 * @property {boolean} is_packaging_order
 * @property {string} [priority_text]
 * @property {boolean} is_invoiced
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [payment_mode]
 * @property {string} [picked_date]
 * @property {boolean} [enable_tracking]
 * @property {string} [replacement_details]
 * @property {boolean} is_not_fynd_source
 * @property {string} [is_pdsr]
 * @property {Object} [delivery_slot]
 * @property {Object} fyndstore_emp
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [kirana_store_id]
 * @property {string} credit_note_id
 * @property {Object} [user_info]
 * @property {Object} company
 * @property {Object} invoice
 * @property {string} can_break
 * @property {string} [refund_text]
 * @property {number} [total_bags]
 * @property {boolean} platform_logo
 * @property {string} [enable_dp_tracking]
 * @property {boolean} [can_cancel]
 * @property {string} [due_date]
 * @property {string} order_type
 * @property {Prices} [prices]
 * @property {ShipmentStatusData} [status]
 * @property {string} user_id
 * @property {string} [journey_type]
 * @property {string} [user_agent]
 * @property {string} affiliate_shipment_id
 * @property {Object} current_shipment_status
 * @property {string} shipment_id
 * @property {string} [pay_button]
 * @property {Object} [coupon]
 * @property {ShipmentPayments} [payments]
 * @property {Object[]} items
 * @property {number} [shipment_quantity]
 * @property {Object} ordering_store
 * @property {string} lock_status
 * @property {string} [secured_delivery_flag]
 * @property {boolean} [can_return]
 * @property {Object} [bank_data]
 * @property {GSTDetailsData} [gst_details]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [shipment_status]
 * @property {Object} [escalation]
 * @property {string} [is_fynd_store]
 * @property {Object[]} delivery_status
 * @property {string} [operational_status]
 * @property {OrderDetailsData} [order]
 * @property {Object} order_status
 * @property {string} [packaging_type]
 * @property {number} [total_items]
 * @property {string} [mid]
 * @property {Object[]} [forward_order_status]
 * @property {DPDetailsData} [dp_details]
 * @property {Object[]} [forward_shipment_status]
 * @property {boolean} [beneficiary_details]
 * @property {string} [order_created_time]
 */

/**
 * @typedef OrderDict
 * @property {string} order_date
 * @property {string} fynd_order_id
 * @property {number} shipment_count
 */

/**
 * @typedef PlatformShipment
 * @property {FulfillingStore} [fulfilling_store]
 * @property {OrderBags[]} [bags]
 * @property {Object[]} [custom_meta]
 * @property {string[]} [shipment_images]
 * @property {string} [vertical]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [priority_text]
 * @property {UserDetailsData} [delivery_details]
 * @property {string} [payment_mode]
 * @property {string} [picked_date]
 * @property {Object} [delivery_slot]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {number} [total_bags]
 * @property {string} [platform_logo]
 * @property {string} [enable_dp_tracking]
 * @property {Prices} [prices]
 * @property {ShipmentStatusData} [status]
 * @property {string} [journey_type]
 * @property {string} [user_agent]
 * @property {string} shipment_id
 * @property {Object} [coupon]
 * @property {ShipmentPayments} [payments]
 * @property {number} [shipment_quantity]
 * @property {GSTDetailsData} [gst_details]
 * @property {UserDetailsData} [billing_details]
 * @property {string} [shipment_status]
 * @property {string} [operational_status]
 * @property {OrderDetailsData} [order]
 * @property {string} [packaging_type]
 * @property {number} [total_items]
 * @property {DPDetailsData} [dp_details]
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {OrderDict} [order]
 * @property {boolean} success
 * @property {Object[]} [custom_meta]
 * @property {PlatformShipment[]} [shipments]
 */

/**
 * @typedef SubLane
 * @property {string} [text]
 * @property {Object[]} [actions]
 * @property {string} [value]
 * @property {number} [total_items]
 * @property {number} [index]
 */

/**
 * @typedef SuperLane
 * @property {number} [total_items]
 * @property {string} text
 * @property {string} value
 * @property {SubLane[]} [options]
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
 * @property {string} [display]
 * @property {string} [name]
 */

/**
 * @typedef PlatformOrderItems
 * @property {PlatformChannel} [channel]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {UserDataInfo} [user_info]
 * @property {number} [order_value]
 * @property {Object} [meta]
 * @property {number} [total_order_value]
 * @property {PlatformShipment[]} [shipments]
 * @property {string} [order_id]
 * @property {string} [order_created_time]
 * @property {string} [payment_mode]
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
 * @property {boolean} [success]
 * @property {string} [message]
 * @property {number} [total_count]
 * @property {string} [lane]
 * @property {PlatformOrderItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Options
 * @property {string} [text]
 * @property {number} [value]
 */

/**
 * @typedef MetricsCount
 * @property {string} key
 * @property {string} text
 * @property {number} value
 * @property {Options[]} [options]
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [reason]
 * @property {string} [raw_status]
 * @property {string} [account_name]
 * @property {string} [shipment_type]
 * @property {Object} [meta]
 * @property {string} [updated_time]
 * @property {string} [updated_at]
 * @property {string} [awb]
 * @property {string} [last_location_recieved_at]
 * @property {string} [status]
 */

/**
 * @typedef PlatformShipmentTrack
 * @property {PlatformTrack[]} [results]
 * @property {Object} [meta]
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
 * @property {string} [display_name]
 * @property {string} [report_requested_at]
 * @property {string} [report_created_at]
 * @property {string} [report_type]
 * @property {string} [report_id]
 * @property {Object} [request_details]
 * @property {string} [report_name]
 * @property {string} [s3_key]
 * @property {string} [status]
 */

/**
 * @typedef JioCodeUpsertDataSet
 * @property {string} [company_id]
 * @property {string} [article_id]
 * @property {string} [jio_code]
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
 * @property {boolean} [success]
 * @property {string} [trace_id]
 * @property {string} [identifier]
 * @property {Object[]} [data]
 * @property {NestedErrorSchemaDataSet[]} [error]
 */

/**
 * @typedef BulkInvoicingResponse
 * @property {boolean} success
 * @property {string} [message]
 */

/**
 * @typedef BulkInvoiceLabelResponse
 * @property {string} [company_id]
 * @property {string} batch_id
 * @property {boolean} do_invoice_label_generated
 * @property {string} [store_id]
 * @property {Object} [invoice]
 * @property {string} [store_code]
 * @property {Object} [data]
 * @property {string} [invoice_status]
 * @property {string} [store_name]
 * @property {Object} [label]
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
 * @property {FileUploadResponse} [upload]
 * @property {number} [size]
 * @property {string} [content_type]
 * @property {string} [operation]
 * @property {string} [file_name]
 * @property {string} [file_path]
 * @property {string[]} [tags]
 * @property {URL} [cdn]
 * @property {string} [method]
 */

/**
 * @typedef bulkListingData
 * @property {string} [excel_url]
 * @property {number} [failed]
 * @property {number} [store_id]
 * @property {string} [uploaded_on]
 * @property {number} [successful]
 * @property {string} [user_name]
 * @property {Object[]} [failed_shipments]
 * @property {string} [store_code]
 * @property {Object[]} [successful_shipments]
 * @property {string} [status]
 * @property {number} [company_id]
 * @property {string} [user_id]
 * @property {number} [total]
 * @property {string} [id]
 * @property {string} [batch_id]
 * @property {number} [processing]
 * @property {string[]} [processing_shipments]
 * @property {string} [file_name]
 * @property {string} [store_name]
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
 * @typedef BulkListingResponse
 * @property {boolean} [success]
 * @property {bulkListingData[]} [data]
 * @property {string} [error]
 * @property {BulkListingPage} [page]
 */

/**
 * @typedef DateRange
 * @property {string} [to_date]
 * @property {string} [from_date]
 */

/**
 * @typedef ManifestFilter
 * @property {string} [lane]
 * @property {DateRange} [date_range]
 * @property {string} [dp_name]
 * @property {string} [sales_channels]
 * @property {string} [dp_ids]
 * @property {string} [store_name]
 * @property {string} [sales_channel_name]
 * @property {string} [stores]
 */

/**
 * @typedef GeneratedManifestItem
 * @property {number} [company_id]
 * @property {string} [created_at]
 * @property {string} [manifest_id]
 * @property {boolean} [is_active]
 * @property {ManifestFilter} [filters]
 * @property {string} [created_by]
 * @property {string} [status]
 */

/**
 * @typedef ManifestPage
 * @property {number} [total]
 * @property {string} [type]
 * @property {string} [current]
 * @property {string} [size]
 * @property {boolean} [has_previous]
 * @property {boolean} [has_next]
 */

/**
 * @typedef GeneratedManifestResponse
 * @property {GeneratedManifestItem[]} [items]
 * @property {ManifestPage} [page]
 */

/**
 * @typedef ManifestDetailTotalShipmentPricesCount
 * @property {number} [total_price]
 * @property {number} [shipment_count]
 */

/**
 * @typedef ManifestDetailMeta
 * @property {ManifestFilter} [filters]
 * @property {ManifestDetailTotalShipmentPricesCount} [total_shipment_prices_count]
 */

/**
 * @typedef ManifestDetail
 * @property {number} [company_id]
 * @property {number} [user_id]
 * @property {string} [created_at]
 * @property {string} [manifest_id]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {ManifestFilter} [filters]
 * @property {ManifestDetailMeta} [meta]
 * @property {number} [id]
 * @property {string} [created_by]
 * @property {string} [status]
 */

/**
 * @typedef ManifestDetailItem
 * @property {string} [invoice_id]
 * @property {string} [awb]
 * @property {string} [shipment_id]
 * @property {number} [item_qty]
 * @property {string} [order_id]
 */

/**
 * @typedef ManifestDetailResponse
 * @property {ManifestDetail[]} [manifest_details]
 * @property {number} [additional_shipment_count]
 * @property {ManifestDetailItem[]} [items]
 * @property {ManifestPage} [page]
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
 * @property {string} [company_id]
 * @property {string} [batch_id]
 * @property {number} [successful_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 * @property {number} [failed_shipments_count]
 * @property {number} [total_shipments_count]
 * @property {number} [processing_shipments_count]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {string} [user_id]
 * @property {string} [success]
 * @property {string} [message]
 * @property {boolean} [status]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string[]} [failed_records]
 * @property {string} [uploaded_on]
 * @property {string[]} [error]
 * @property {string} [uploaded_by]
 */

/**
 * @typedef Dates
 * @property {string} [order_created]
 * @property {Object} [delivery_date]
 */

/**
 * @typedef Attributes
 * @property {string} [name]
 * @property {string} [primary_material]
 * @property {string} [brand_name]
 * @property {string} [primary_color_hex]
 * @property {string} [essential]
 * @property {string} [marketer_name]
 * @property {string} [primary_color]
 * @property {string} [marketer_address]
 * @property {string[]} [gender]
 */

/**
 * @typedef Item
 * @property {string} [l3_category_name]
 * @property {Object} [meta]
 * @property {number} [l1_category_id]
 * @property {string[]} [l2_category]
 * @property {Attributes} attributes
 * @property {number} [department_id]
 * @property {number} brand_id
 * @property {string} size
 * @property {string[]} image
 * @property {boolean} [can_cancel]
 * @property {string} [gender]
 * @property {string} [webstore_product_url]
 * @property {string} name
 * @property {string} [branch_url]
 * @property {string} [code]
 * @property {string} [last_updated_at]
 * @property {boolean} [can_return]
 * @property {string} brand
 * @property {string} [color]
 * @property {number} [l2_category_id]
 * @property {number} [l3_category]
 * @property {string[]} [l1_category]
 * @property {number} item_id
 * @property {string} slug_key
 */

/**
 * @typedef B2BPODetails
 * @property {number} [total_gst_percentage]
 * @property {string} [docker_number]
 * @property {number} [po_line_amount]
 * @property {number} [item_base_price]
 * @property {number} [po_tax_amount]
 * @property {boolean} [partial_can_ret]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef AffiliateMeta
 * @property {number} [loyalty_discount]
 * @property {string} [box_type]
 * @property {number} [quantity]
 * @property {boolean} [is_priority]
 * @property {number} [size_level_total_qty]
 * @property {string} [coupon_code]
 * @property {string} [channel_order_id]
 * @property {string} [due_date]
 * @property {string} [channel_shipment_id]
 * @property {string} [order_item_id]
 * @property {number} [employee_discount]
 */

/**
 * @typedef AffiliateBagDetails
 * @property {string} affiliate_bag_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {number} [loyalty_discount]
 * @property {number} [employee_discount]
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
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
 * @property {string} [unit]
 * @property {number} [shipping]
 */

/**
 * @typedef Dimensions
 * @property {boolean} [is_default]
 * @property {string} [unit]
 * @property {number} [height]
 * @property {number} [length]
 * @property {number} [width]
 */

/**
 * @typedef Article
 * @property {ReturnConfig} [return_config]
 * @property {Weight} [weight]
 * @property {Object} [a_set]
 * @property {string} uid
 * @property {string} seller_identifier
 * @property {string} _id
 * @property {Object} [esp_modified]
 * @property {string} size
 * @property {boolean} [is_set]
 * @property {Identifier} identifiers
 * @property {Dimensions} [dimensions]
 * @property {Object} [raw_meta]
 * @property {string} [code]
 * @property {Object} [child_details]
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} enable_tracking
 * @property {boolean} is_active
 * @property {boolean} is_returnable
 * @property {boolean} can_be_cancelled
 * @property {boolean} is_customer_return_allowed
 */

/**
 * @typedef PDFLinks
 * @property {string} [label_pos]
 * @property {string} [invoice_a4]
 * @property {string} [b2b]
 * @property {string} label_type
 * @property {string} [invoice_a6]
 * @property {string} [po_invoice]
 * @property {string} [credit_note_url]
 * @property {string} [invoice]
 * @property {string} [label_a6]
 * @property {string} [invoice_pos]
 * @property {string} invoice_type
 * @property {string} [label]
 * @property {string} [label_a4]
 */

/**
 * @typedef LockData
 * @property {string} [lock_message]
 * @property {boolean} [mto]
 * @property {boolean} [locked]
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
 * @typedef EInvoice
 * @property {string} [signed_invoice]
 * @property {string} [error_message]
 * @property {string} [acknowledge_date]
 * @property {string} [error_code]
 * @property {number} [acknowledge_no]
 * @property {string} [signed_qr_code]
 * @property {string} [irn]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [credit_note]
 * @property {EInvoice} [invoice]
 */

/**
 * @typedef BuyerDetails
 * @property {string} state
 * @property {string} name
 * @property {string} city
 * @property {string} address
 * @property {string} [ajio_site_id]
 * @property {number} pincode
 * @property {string} gstin
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef ShipmentMeta
 * @property {LockData} [lock_data]
 * @property {string} [packaging_name]
 * @property {Object} [dp_options]
 * @property {Formatted} [formatted]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {Object} [external]
 * @property {string} [po_number]
 * @property {boolean} same_store_available
 * @property {Object} [bag_weight]
 * @property {string} [marketplace_store_id]
 * @property {string} [forward_affiliate_order_id]
 * @property {Object} [ewaybill_info]
 * @property {number} [return_store_node]
 * @property {string} [store_invoice_updated_date]
 * @property {string} [return_affiliate_order_id]
 * @property {number} [shipment_weight]
 * @property {string} [dp_sort_key]
 * @property {string} [due_date]
 * @property {string} [return_awb_number]
 * @property {string} [order_type]
 * @property {string} [dp_id]
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {Object} [return_details]
 * @property {string} [box_type]
 * @property {string} [fulfilment_priority_text]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {boolean} [assign_dp_from_sb]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [return_affiliate_shipment_id]
 * @property {number} weight
 * @property {DebugInfo} [debug_info]
 * @property {string} [awb_number]
 * @property {Object} [b2c_buyer_details]
 * @property {string} [dp_name]
 */

/**
 * @typedef AffiliateDetails
 * @property {string} affiliate_bag_id
 * @property {PDFLinks} [pdf_links]
 * @property {string} [affiliate_id]
 * @property {string} affiliate_shipment_id
 * @property {string} affiliate_store_id
 * @property {string} [ad_id]
 * @property {AffiliateMeta} affiliate_meta
 * @property {string} affiliate_order_id
 * @property {ShipmentMeta} shipment_meta
 * @property {string} [company_affiliate_tag]
 */

/**
 * @typedef StoreAddress
 * @property {string} created_at
 * @property {number} longitude
 * @property {string} city
 * @property {string} [area]
 * @property {string} [address2]
 * @property {string} [version]
 * @property {string} country_code
 * @property {string} contact_person
 * @property {string} state
 * @property {string} [landmark]
 * @property {string} address_type
 * @property {number} latitude
 * @property {string} phone
 * @property {string} country
 * @property {string} [email]
 * @property {string} address_category
 * @property {string} address1
 * @property {string} updated_at
 * @property {number} pincode
 */

/**
 * @typedef Document
 * @property {string} [url]
 * @property {boolean} verified
 * @property {string} legal_name
 * @property {string} value
 * @property {string} ds_type
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef StoreEinvoice
 * @property {string} [password]
 * @property {string} [username]
 * @property {boolean} enabled
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
 * @property {string} [password]
 * @property {string} [username]
 * @property {string} [user]
 */

/**
 * @typedef StoreMeta
 * @property {StoreDocuments} [documents]
 * @property {string} display_name
 * @property {string} stage
 * @property {Object} [product_return_config]
 * @property {string} [gst_number]
 * @property {Object[]} [timing]
 * @property {string[]} [notification_emails]
 * @property {Object} [ewaybill_portal_details]
 * @property {StoreGstCredentials} gst_credentials
 * @property {Object} [additional_contact_details]
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 */

/**
 * @typedef Store
 * @property {StoreAddress} [store_address_json]
 * @property {number} [parent_store_id]
 * @property {number} [packaging_material_count]
 * @property {string} created_at
 * @property {number} longitude
 * @property {string} city
 * @property {string} login_username
 * @property {StoreMeta} meta
 * @property {string} [address2]
 * @property {string} location_type
 * @property {string} [mall_area]
 * @property {string[]} [brand_store_tags]
 * @property {boolean} [is_active]
 * @property {Object} [brand_id]
 * @property {number} [alohomora_user_id]
 * @property {string} contact_person
 * @property {string} pincode
 * @property {number} company_id
 * @property {string} state
 * @property {number} latitude
 * @property {string} fulfillment_channel
 * @property {string} name
 * @property {number} phone
 * @property {string} country
 * @property {boolean} [is_archived]
 * @property {string} s_id
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} [code]
 * @property {string} [order_integration_id]
 * @property {string} store_email
 * @property {string} address1
 * @property {string} [store_active_from]
 * @property {string} [vat_no]
 * @property {string} [updated_at]
 * @property {string} [mall_name]
 */

/**
 * @typedef Brand
 * @property {number} [credit_note_expiry_days]
 * @property {number} [created_on]
 * @property {string} [logo]
 * @property {string} [script_last_ran]
 * @property {number} brand_id
 * @property {boolean} [is_virtual_invoice]
 * @property {string} brand_name
 * @property {string} company
 * @property {string} [start_date]
 * @property {boolean} [credit_note_allowed]
 * @property {string} [pickup_location]
 * @property {string} [invoice_prefix]
 * @property {number} [modified_on]
 */

/**
 * @typedef BagGSTDetails
 * @property {number} cgst_tax_percentage
 * @property {number} value_of_good
 * @property {string} hsn_code
 * @property {string} gst_tag
 * @property {string} [gstin_code]
 * @property {boolean} [is_default_hsn_code]
 * @property {string} hsn_code_id
 * @property {number} sgst_tax_percentage
 * @property {number} gst_tax_percentage
 * @property {number} igst_tax_percentage
 * @property {string} sgst_gst_fee
 * @property {number} tax_collected_at_source
 * @property {string} cgst_gst_fee
 * @property {number} gst_fee
 * @property {number} brand_calculated_amount
 * @property {string} igst_gst_fee
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {Object} [parent_promo_bags]
 * @property {BagStatusHistory} current_status
 * @property {Dates} [dates]
 * @property {BagStatusHistory} current_operational_status
 * @property {Object[]} [applied_promos]
 * @property {number} [line_number]
 * @property {Item} item
 * @property {BagMeta} [meta]
 * @property {number} [no_of_bags_order]
 * @property {string[]} [tags]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {string} [entity_type]
 * @property {string} [display_name]
 * @property {number[]} [original_bag_list]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {number} [quantity]
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {Object[]} [reasons]
 * @property {ArticleDetails} [article_details]
 * @property {Object} [restore_promos]
 * @property {Prices} prices
 * @property {Article} article
 * @property {BagReturnableCancelableStatus} status
 * @property {string} journey_type
 * @property {string} [identifier]
 * @property {Object} [qc_required]
 * @property {string} [b_type]
 * @property {string} [seller_identifier]
 * @property {AffiliateDetails} [affiliate_details]
 * @property {string} [shipment_id]
 * @property {Store} [ordering_store]
 * @property {string} [order_integration_id]
 * @property {Brand} brand
 * @property {BagGSTDetails} gst_details
 * @property {string} [operational_status]
 * @property {number} [bag_update_time]
 * @property {boolean} [restore_coupon]
 * @property {BagStatusHistory[]} bag_status
 * @property {number} b_id
 */

/**
 * @typedef ErrorResponse
 * @property {string} message
 * @property {string} error
 */

/**
 * @typedef Page1
 * @property {string} page_type
 * @property {number} current
 * @property {number} size
 * @property {number} item_total
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
 * @property {string} [message]
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
 * @property {string} [fynd_order_id]
 * @property {string} [set_id]
 * @property {number} store_id
 * @property {string} [item_id]
 * @property {number} [bag_id]
 * @property {number[]} [reason_ids]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_order_id]
 * @property {string} [mongo_article_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef Entities
 * @property {string} reason_text
 * @property {string} [id]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_id]
 * @property {string} [affiliate_bag_id]
 * @property {string} [affiliate_order_id]
 */

/**
 * @typedef UpdateShipmentLockPayload
 * @property {string} entity_type
 * @property {string} action
 * @property {string} action_type
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
 * @property {string} [affiliate_order_id]
 * @property {number} [bag_id]
 */

/**
 * @typedef CheckResponse
 * @property {string} [shipment_id]
 * @property {string} [affiliate_id]
 * @property {OriginalFilter} [original_filter]
 * @property {boolean} [lock_status]
 * @property {string} [affiliate_shipment_id]
 * @property {string} [status]
 * @property {boolean} [is_bag_locked]
 * @property {Bags[]} [bags]
 * @property {boolean} [is_shipment_locked]
 */

/**
 * @typedef UpdateShipmentLockResponse
 * @property {string} [message]
 * @property {boolean} [success]
 * @property {CheckResponse[]} [check_response]
 */

/**
 * @typedef AnnouncementResponse
 * @property {string} [platform_id]
 * @property {number} id
 * @property {string} [title]
 * @property {string} [platform_name]
 * @property {string} [description]
 * @property {string} [from_datetime]
 * @property {string} [to_datetime]
 * @property {string} [created_at]
 * @property {number} [company_id]
 * @property {string} [logo_url]
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
 * @typedef ProductsReasonsData
 * @property {number} [reason_id]
 * @property {string} [reason_text]
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
 * @typedef Products
 * @property {number} [quantity]
 * @property {number} [line_number]
 * @property {string} [identifier]
 */

/**
 * @typedef ShipmentsRequest
 * @property {DataUpdates} [data_updates]
 * @property {ReasonsData} [reasons]
 * @property {string} identifier
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
 * @property {boolean} [unlock_before_transition]
 * @property {boolean} [lock_after_transition]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [force_transition]
 * @property {boolean} [task]
 */

/**
 * @typedef ShipmentsResponse
 * @property {string} [stack_trace]
 * @property {string} [message]
 * @property {string} [exception]
 * @property {number} [status]
 * @property {string} [identifier]
 * @property {Object} [final_state]
 * @property {string} [code]
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
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
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
 * @typedef AffiliateInventoryLogisticsConfig
 * @property {boolean} [dp_assignment]
 */

/**
 * @typedef AffiliateInventoryConfig
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} id
 * @property {string} updated_at
 * @property {string} secret
 * @property {string} [description]
 * @property {string} created_at
 * @property {string} token
 * @property {string} owner
 * @property {string} name
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
 * @property {string} token
 * @property {string} id
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {string} marketplace_store_id
 * @property {number} store_id
 */

/**
 * @typedef OrderConfig
 * @property {string} [store_lookup]
 * @property {string} [article_lookup]
 * @property {Affiliate} affiliate
 * @property {boolean} [create_user]
 * @property {string} [bag_end_state]
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 */

/**
 * @typedef OrderUser
 * @property {number} mobile
 * @property {string} [address1]
 * @property {string} city
 * @property {string} pincode
 * @property {string} [address2]
 * @property {string} state
 * @property {number} phone
 * @property {string} last_name
 * @property {string} first_name
 * @property {string} email
 * @property {string} country
 */

/**
 * @typedef UserData
 * @property {OrderUser} [billing_user]
 * @property {OrderUser} [shipping_user]
 */

/**
 * @typedef OrderPriority
 * @property {string} [affiliate_priority_code]
 * @property {number} [fulfilment_priority]
 * @property {string} [fulfilment_priority_text]
 */

/**
 * @typedef MarketPlacePdf
 * @property {string} [label]
 * @property {string} [invoice]
 */

/**
 * @typedef AffiliateBag
 * @property {number} amount_paid
 * @property {string} modified_on
 * @property {string} item_size
 * @property {string} seller_identifier
 * @property {Object} affiliate_meta
 * @property {number} delivery_charge
 * @property {number} quantity
 * @property {number} item_id
 * @property {number} avl_qty
 * @property {number} unit_price
 * @property {number} price_effective
 * @property {string} fynd_store_id
 * @property {string} affiliate_store_id
 * @property {number} transfer_price
 * @property {Object} identifier
 * @property {string} hsn_code_id
 * @property {MarketPlacePdf} [pdf_links]
 * @property {number} company_id
 * @property {string} sku
 * @property {number} store_id
 * @property {string} _id
 * @property {number} discount
 * @property {number} price_marked
 */

/**
 * @typedef ArticleDetails1
 * @property {Object} category
 * @property {number} brand_id
 * @property {Object} attributes
 * @property {number} quantity
 * @property {string} _id
 * @property {Object} dimension
 * @property {Object} weight
 */

/**
 * @typedef ShipmentDetails
 * @property {number} [dp_id]
 * @property {string} affiliate_shipment_id
 * @property {number} shipments
 * @property {string} [box_type]
 * @property {ArticleDetails1[]} articles
 * @property {Object} [meta]
 * @property {number} fulfillment_id
 */

/**
 * @typedef LocationDetails
 * @property {ArticleDetails1[]} articles
 * @property {string} fulfillment_type
 * @property {number} fulfillment_id
 */

/**
 * @typedef ShipmentConfig
 * @property {ShipmentDetails[]} shipment
 * @property {string} to_pincode
 * @property {LocationDetails} [location_details]
 * @property {string} payment_mode
 * @property {string} identifier
 * @property {string} journey
 * @property {string} action
 * @property {string} source
 */

/**
 * @typedef ShipmentData
 * @property {ShipmentConfig} shipment_data
 */

/**
 * @typedef OrderInfo
 * @property {OrderUser} shipping_address
 * @property {Object} items
 * @property {UserData} user
 * @property {OrderUser} billing_address
 * @property {Object} [payment]
 * @property {string} payment_mode
 * @property {OrderPriority} [order_priority]
 * @property {string} [coupon]
 * @property {number} discount
 * @property {number} order_value
 * @property {number} cod_charges
 * @property {AffiliateBag[]} bags
 * @property {ShipmentData} [shipment]
 * @property {string} [affiliate_order_id]
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
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef ActionInfo
 * @property {string} description
 * @property {string} display_text
 * @property {string} slug
 * @property {number} id
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef HistoryDict
 * @property {string} [ticket_id]
 * @property {string} user
 * @property {string} type
 * @property {string} [l1_detail]
 * @property {string} message
 * @property {string} [l2_detail]
 * @property {string} [l3_detail]
 * @property {string} [ticket_url]
 * @property {number} [bag_id]
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
 * @property {string} country_code
 * @property {number} amount_paid
 * @property {number} shipment_id
 * @property {string} customer_name
 * @property {string} message
 * @property {string} brand_name
 * @property {string} order_id
 * @property {string} payment_mode
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
 * @property {string} [fynd_order_id]
 * @property {string} [created_at]
 */

/**
 * @typedef Meta
 * @property {string} [state_manager_used]
 * @property {number} [kafka_emission_status]
 */

/**
 * @typedef ShipmentDetail
 * @property {string} [shipment_id]
 * @property {number} id
 * @property {number[]} [bag_list]
 * @property {string} [remarks]
 * @property {string} [status]
 * @property {Meta} meta
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
 * @property {number} dp_id
 * @property {string} order_type
 * @property {string[]} [shipment_ids]
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string[]} [errors]
 * @property {string} success
 */

/**
 * @typedef Tax
 * @property {string} name
 * @property {Object} amount
 * @property {Object[]} [breakup]
 * @property {number} rate
 */

/**
 * @typedef Charge
 * @property {Tax} [tax]
 * @property {string} type
 * @property {Object} amount
 * @property {string} name
 * @property {string} [code]
 */

/**
 * @typedef PaymentMethod
 * @property {Object} [transaction_data]
 * @property {string} mode
 * @property {string} refund_by
 * @property {string} collect_by
 * @property {number} amount
 * @property {string} name
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
 * @typedef BillingInfo
 * @property {string} [country_code]
 * @property {string} first_name
 * @property {string} [gender]
 * @property {string} country
 * @property {string} address1
 * @property {string} pincode
 * @property {string} [address2]
 * @property {string} state
 * @property {string} [alternate_mobile_number]
 * @property {string} [last_name]
 * @property {string} city
 * @property {string} primary_mobile_number
 * @property {string} [external_customer_code]
 * @property {string} primary_email
 * @property {string} [state_code]
 * @property {string} [floor_no]
 * @property {string} [customer_code]
 * @property {string} [house_no]
 * @property {string} [alternate_email]
 * @property {string} [title]
 * @property {string} [middle_name]
 */

/**
 * @typedef ProcessingDates
 * @property {string} [confirm_by_date]
 * @property {string} [dispatch_by_date]
 * @property {string} [dispatch_after_date]
 * @property {Object} [customer_pickup_slot]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [pack_by_date]
 */

/**
 * @typedef LineItem
 * @property {Charge[]} [charges]
 * @property {number} [quantity]
 * @property {string} [custom_messasge]
 * @property {string} seller_identifier
 * @property {Object} [meta]
 * @property {string} [external_line_id]
 */

/**
 * @typedef Shipment
 * @property {number} location_id
 * @property {ProcessingDates} [processing_dates]
 * @property {number} [priority]
 * @property {string} [external_shipment_id]
 * @property {Object} [meta]
 * @property {LineItem[]} line_items
 */

/**
 * @typedef ShippingInfo
 * @property {string} [country_code]
 * @property {Object} [geo_location]
 * @property {Object[]} [slot]
 * @property {string} first_name
 * @property {string} [gender]
 * @property {string} country
 * @property {string} [landmark]
 * @property {string} address1
 * @property {string} pincode
 * @property {string} [shipping_type]
 * @property {string} [address2]
 * @property {string} state
 * @property {string} [alternate_mobile_number]
 * @property {string} [last_name]
 * @property {string} [address_type]
 * @property {string} city
 * @property {string} primary_mobile_number
 * @property {string} [external_customer_code]
 * @property {string} primary_email
 * @property {string} [state_code]
 * @property {string} [floor_no]
 * @property {string} [customer_code]
 * @property {string} [house_no]
 * @property {string} [alternate_email]
 * @property {string} [title]
 * @property {string} [middle_name]
 */

/**
 * @typedef CreateOrderAPI
 * @property {string} [external_creation_date]
 * @property {Charge[]} [charges]
 * @property {PaymentInfo} payment_info
 * @property {TaxInfo} [tax_info]
 * @property {string} [external_order_id]
 * @property {BillingInfo} billing_info
 * @property {Object} [currency_info]
 * @property {Shipment[]} shipments
 * @property {ShippingInfo} shipping_info
 * @property {Object} [meta]
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {Object} [info]
 * @property {string} [stack_trace]
 * @property {string} message
 * @property {string} [exception]
 * @property {number} status
 * @property {string} [request_id]
 * @property {string} [meta]
 * @property {string} [code]
 */

/**
 * @typedef PaymentMethods
 * @property {string} [collect_by]
 * @property {string} [mode]
 * @property {string} [refund_by]
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
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {DpConfiguration} [dp_configuration]
 * @property {string} [shipment_assignment]
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
 * @property {FyndOrderIdList[]} [order_details]
 * @property {number} mobile
 * @property {string} end_date
 */

/**
 * @typedef GetSearchWordsData
 * @property {Object} [result]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 * @property {string} [uid]
 * @property {Object} [_custom_json]
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
 * @property {string} [code]
 * @property {number} [status]
 * @property {string} [message]
 * @property {string} [error]
 * @property {Object} [meta]
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
 * @property {string[]} [words]
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
 * @property {string} [uid]
 * @property {string[]} [words]
 * @property {Object[]} [results]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AutocompletePageAction
 * @property {string} [type]
 * @property {string} [url]
 * @property {Object} [query]
 * @property {Object} [params]
 */

/**
 * @typedef AutocompleteAction
 * @property {string} [type]
 * @property {AutocompletePageAction} [page]
 */

/**
 * @typedef Media
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef AutocompleteResult
 * @property {AutocompleteAction} [action]
 * @property {Media} [logo]
 * @property {Object} [_custom_json]
 * @property {string} [display]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {string[]} [words]
 * @property {AutocompleteResult[]} [results]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {Object[]} [results]
 * @property {string} [app_id]
 * @property {Object} [_custom_json]
 * @property {string[]} [words]
 */

/**
 * @typedef ProductBundleItem
 * @property {boolean} [auto_add_to_cart]
 * @property {number} min_quantity
 * @property {number} product_uid
 * @property {number} max_quantity
 * @property {boolean} [auto_select]
 * @property {boolean} [allow_remove]
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {boolean} [same_store_assignment]
 * @property {string} name
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {Object} [created_by]
 * @property {string} choice
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {ProductBundleItem[]} products
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string[]} [page_visibility]
 * @property {string} slug
 * @property {Object} [meta]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductBundleRequest
 * @property {boolean} [same_store_assignment]
 * @property {string} name
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {Object} [created_by]
 * @property {string} choice
 * @property {string} [modified_on]
 * @property {ProductBundleItem[]} products
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string[]} [page_visibility]
 * @property {string} slug
 * @property {Object} [meta]
 */

/**
 * @typedef LimitedProductData
 * @property {string} [name]
 * @property {string[]} [images]
 * @property {string[]} [sizes]
 * @property {string} [item_code]
 * @property {string} [short_description]
 * @property {Object} [price]
 * @property {Object} [attributes]
 * @property {string} [country_of_origin]
 * @property {number} [uid]
 * @property {Object} [identifier]
 * @property {string} [slug]
 * @property {number} [quantity]
 */

/**
 * @typedef Size
 * @property {number} [quantity]
 * @property {boolean} [is_available]
 * @property {string} [value]
 * @property {string} [display]
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
 * @typedef GetProducts
 * @property {boolean} [auto_add_to_cart]
 * @property {number} [min_quantity]
 * @property {LimitedProductData} [product_details]
 * @property {number} [product_uid]
 * @property {Size[]} [sizes]
 * @property {Price} [price]
 * @property {number} [max_quantity]
 * @property {boolean} [auto_select]
 * @property {boolean} [allow_remove]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {boolean} [same_store_assignment]
 * @property {string} [name]
 * @property {number} [company_id]
 * @property {string} [choice]
 * @property {GetProducts[]} [products]
 * @property {string} [logo]
 * @property {boolean} [is_active]
 * @property {string[]} [page_visibility]
 * @property {string} [slug]
 * @property {Object} [meta]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {boolean} [same_store_assignment]
 * @property {string} name
 * @property {number} [company_id]
 * @property {string} choice
 * @property {string} [modified_on]
 * @property {ProductBundleItem[]} products
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {Object} [modified_by]
 * @property {string[]} [page_visibility]
 * @property {string} slug
 * @property {Object} [meta]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
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
 * @property {string} name
 * @property {string} [description]
 * @property {string} [subtitle]
 * @property {number} [company_id]
 * @property {Guide} [guide]
 * @property {string} [created_on]
 * @property {string} [tag]
 * @property {Object} [created_by]
 * @property {string} title
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} [image]
 * @property {number} [brand_id]
 * @property {Object} [modified_by]
 * @property {boolean} [active]
 */

/**
 * @typedef SuccessResponse
 * @property {boolean} [success]
 */

/**
 * @typedef SizeGuideResponse
 * @property {string} [name]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {Object} [guide]
 * @property {string} [subtitle]
 * @property {Object} [created_by]
 * @property {string} [tag]
 * @property {string} [title]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {number} [brand_id]
 * @property {Object} [modified_by]
 * @property {boolean} [active]
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
 * @property {MOQData} [moq]
 * @property {SEOData} [seo]
 * @property {boolean} [is_gift]
 * @property {boolean} [is_cod]
 * @property {Object} [alt_text]
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
 * @typedef MetaFields
 * @property {Object} value
 * @property {Object} key
 */

/**
 * @typedef ApplicationItemMeta
 * @property {ApplicationItemSEO} [seo]
 * @property {ApplicationItemMOQ} [moq]
 * @property {boolean} [is_gift]
 * @property {boolean} [is_cod]
 * @property {MetaFields[]} [_custom_meta]
 * @property {Object} [_custom_json]
 * @property {Object} [alt_text]
 */

/**
 * @typedef SuccessResponse1
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [values]
 * @property {Object[]} [condition]
 * @property {Object[]} data
 */

/**
 * @typedef PageResponseType
 * @property {boolean} has_next
 * @property {number} current
 * @property {number} total_count
 * @property {number} next
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
 * @property {string} [unit]
 * @property {string} [logo]
 * @property {string} display_type
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} [slug]
 * @property {string} [key]
 */

/**
 * @typedef AppConfigurationDetail
 * @property {string} [name]
 * @property {string} app_id
 * @property {boolean} is_default
 * @property {string[]} [template_slugs]
 * @property {string} [logo]
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} slug
 */

/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */

/**
 * @typedef AppConfigurationsSort
 * @property {string} [name]
 * @property {string} app_id
 * @property {boolean} is_default
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {string} default_key
 * @property {number} priority
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
 * @property {Object[]} [units]
 * @property {string[]} [filter_types]
 * @property {string} [key]
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
 * @property {Object} [compare]
 * @property {Object} [variant]
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
 * @property {string} name
 * @property {string} [logo]
 * @property {string} display_type
 * @property {boolean} is_active
 * @property {number} priority
 * @property {ProductSize} size
 * @property {string} key
 */

/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductConfig
 * @property {string} [subtitle]
 * @property {string} [title]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {number} priority
 * @property {ProductSize} [size]
 * @property {string} key
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
 * @property {string} [value]
 * @property {string} [sort]
 * @property {Object[]} [map_values]
 * @property {string} [condition]
 * @property {Object} [map]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [display_name]
 * @property {boolean} is_active
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {number} priority
 * @property {string} type
 * @property {string} key
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} [name]
 * @property {string} [logo]
 * @property {boolean} is_active
 * @property {number} priority
 * @property {string} key
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
 * @property {string} [created_on]
 * @property {ConfigurationProduct} [product]
 * @property {string} app_id
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string} config_type
 * @property {string} [config_id]
 * @property {ConfigurationListing} [listing]
 * @property {string} [type]
 * @property {Object} [modified_by]
 */

/**
 * @typedef GetAppCatalogConfiguration
 * @property {boolean} [is_default]
 * @property {AppCatalogConfiguration} [data]
 */

/**
 * @typedef AppConfiguration
 * @property {string} [created_on]
 * @property {ConfigurationProduct} [product]
 * @property {string} app_id
 * @property {Object} [created_by]
 * @property {string} [modified_on]
 * @property {string} config_type
 * @property {string} [config_id]
 * @property {ConfigurationListing} [listing]
 * @property {string} [type]
 * @property {Object} [modified_by]
 */

/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */

/**
 * @typedef EntityConfiguration
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 * @property {string} app_id
 * @property {string} [id]
 * @property {string} config_type
 * @property {string} [config_id]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {boolean} [is_default]
 * @property {EntityConfiguration} [data]
 */

/**
 * @typedef ProductSortOn
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [value]
 */

/**
 * @typedef ProductFiltersValue
 * @property {number} [selected_min]
 * @property {string} [display_format]
 * @property {Object} value
 * @property {number} [count]
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {number} [selected_max]
 * @property {number} [max]
 * @property {string} display
 * @property {boolean} is_selected
 * @property {number} [min]
 * @property {string} [query_format]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} name
 * @property {string[]} [operators]
 * @property {string} [kind]
 * @property {string} display
 * @property {string} [logo]
 */

/**
 * @typedef ProductFilters
 * @property {ProductFiltersValue[]} values
 * @property {ProductFiltersKey} key
 */

/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {Object} operators
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef Media1
 * @property {string} [type]
 * @property {string} url
 * @property {Object} [meta]
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
 * @typedef CollectionQuery
 * @property {string} op
 * @property {string} attribute
 * @property {Object[]} value
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {number} [priority]
 * @property {string} [slug]
 * @property {Object} [cron]
 * @property {string} [description]
 * @property {string[]} [tag]
 * @property {Media1} [logo]
 * @property {Object} [_schedule]
 * @property {string} [type]
 * @property {ImageUrls} [banners]
 * @property {Object} [meta]
 * @property {Action} [action]
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_active]
 * @property {CollectionQuery[]} [query]
 * @property {string} [name]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {boolean} [allow_facets]
 * @property {string[]} [visible_facets_keys]
 * @property {string} [uid]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [display]
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
 * @typedef CollectionImage
 * @property {string} url
 * @property {string} aspect_ratio
 */

/**
 * @typedef NextSchedule
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef CollectionSchedule
 * @property {string} [start]
 * @property {string} [end]
 * @property {NextSchedule[]} [next_schedule]
 * @property {number} [duration]
 * @property {string} [cron]
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
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
 */

/**
 * @typedef UserInfo
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [username]
 * @property {string} [email]
 */

/**
 * @typedef CreateCollection
 * @property {number} [priority]
 * @property {Object} [_custom_json]
 * @property {string} slug
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {CollectionImage} logo
 * @property {CollectionSchedule} [_schedule]
 * @property {string} type
 * @property {string} [sort_on]
 * @property {CollectionBanner} banners
 * @property {Object} [meta]
 * @property {SeoDetail} [seo]
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [_locale_language]
 * @property {string} name
 * @property {CollectionBadge} [badge]
 * @property {boolean} [published]
 * @property {UserInfo} [created_by]
 * @property {string} app_id
 * @property {boolean} [allow_facets]
 * @property {string[]} [visible_facets_keys]
 * @property {UserInfo} [modified_by]
 */

/**
 * @typedef CollectionCreateResponse
 * @property {number} [priority]
 * @property {string} [slug]
 * @property {Object} [cron]
 * @property {string} [description]
 * @property {string[]} [tag]
 * @property {BannerImage} [logo]
 * @property {Object} [_schedule]
 * @property {string} [type]
 * @property {string} [sort_on]
 * @property {ImageUrls} [banners]
 * @property {Object} [meta]
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_active]
 * @property {CollectionQuery[]} [query]
 * @property {string} [name]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {boolean} [allow_facets]
 * @property {string[]} [visible_facets_keys]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {string[]} [visible_facets_keys]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [slug]
 * @property {Object} [badge]
 * @property {string} [app_id]
 * @property {string[]} [tag]
 * @property {boolean} [allow_sort]
 * @property {boolean} [allow_facets]
 * @property {Media1} [logo]
 * @property {Object} [_schedule]
 * @property {boolean} [is_active]
 * @property {number} [priority]
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 * @property {ImageUrls} [banners]
 * @property {Object} [meta]
 * @property {Object} [cron]
 */

/**
 * @typedef UpdateCollection
 * @property {number} [priority]
 * @property {Object} [_custom_json]
 * @property {string} [slug]
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {CollectionImage} [logo]
 * @property {CollectionSchedule} [_schedule]
 * @property {string} [type]
 * @property {string} [sort_on]
 * @property {CollectionBanner} [banners]
 * @property {Object} [meta]
 * @property {SeoDetail} [seo]
 * @property {boolean} [allow_sort]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {CollectionQuery[]} [query]
 * @property {Object} [_locale_language]
 * @property {string} [name]
 * @property {CollectionBadge} [badge]
 * @property {boolean} [published]
 * @property {boolean} [allow_facets]
 * @property {string[]} [visible_facets_keys]
 * @property {UserInfo} [modified_by]
 */

/**
 * @typedef ProductBrand
 * @property {Action} [action]
 * @property {Media1} [logo]
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef Price1
 * @property {string} [currency_symbol]
 * @property {string} [currency_code]
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
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
 * @typedef ProductListingDetail
 * @property {number} [rating_count]
 * @property {Object} [teaser_tag]
 * @property {ProductBrand} [brand]
 * @property {string[]} [tryouts]
 * @property {string} [item_type]
 * @property {ProductListingPrice} [price]
 * @property {string} [color]
 * @property {number} [rating]
 * @property {string} [product_online_date]
 * @property {string} [image_nature]
 * @property {string} slug
 * @property {Media1[]} [medias]
 * @property {string} [description]
 * @property {string[]} [similars]
 * @property {string} [short_description]
 * @property {string} [item_code]
 * @property {string} [type]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {string} [discount]
 * @property {boolean} [has_variant]
 * @property {string} [name]
 * @property {Object} [promo_meta]
 * @property {Object} [attributes]
 * @property {string[]} [highlights]
 * @property {number} [uid]
 * @property {boolean} [sellable]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductListingDetail[]} [items]
 * @property {Page} [page]
 * @property {ProductFilters[]} [filters]
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
 * @property {string} [name]
 * @property {number} [total_sizes]
 * @property {number} [available_articles]
 * @property {number} [article_freshness]
 * @property {number} [available_sizes]
 * @property {number} [total_articles]
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
 * @property {number} [articles]
 * @property {number} [products]
 */

/**
 * @typedef CrossSellingResponse
 * @property {CatalogInsightBrand} [brand_distribution]
 * @property {CrossSellingData} [data]
 */

/**
 * @typedef OptInPostRequest
 * @property {string} opt_level
 * @property {number[]} [store_ids]
 * @property {number} [company_id]
 * @property {number[]} [brand_ids]
 * @property {string} [platform]
 * @property {boolean} [enabled]
 */

/**
 * @typedef CompanyOptIn
 * @property {string} opt_level
 * @property {number} company_id
 * @property {number[]} store_ids
 * @property {number} created_on
 * @property {Object} [created_by]
 * @property {number} modified_on
 * @property {number[]} brand_ids
 * @property {string} platform
 * @property {boolean} enabled
 * @property {Object} [modified_by]
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
 * @property {number} [total_article]
 * @property {string} [brand_name]
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
 * @property {number} [brand]
 * @property {number} [store]
 * @property {string} [company]
 */

/**
 * @typedef StoreDetail
 * @property {Object[]} [documents]
 * @property {string} [name]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {Object} [address]
 * @property {string} [store_code]
 * @property {string} [store_type]
 * @property {string} [modified_on]
 * @property {string} [display_name]
 * @property {Object} [timing]
 * @property {number} [uid]
 * @property {Object[]} [additional_contacts]
 * @property {Object} [manager]
 */

/**
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterFilter
 * @property {string[]} [depends_on]
 * @property {boolean} indexing
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
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef AttributeMaster
 * @property {string} [format]
 * @property {boolean} [mandatory]
 * @property {boolean} [multi]
 * @property {string[]} [allowed_values]
 * @property {string} type
 * @property {AttributeSchemaRange} [range]
 */

/**
 * @typedef GenderDetail
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [id]
 * @property {AttributeMasterFilter} [filters]
 * @property {boolean} [is_nested]
 * @property {string[]} [departments]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterDetails} [details]
 * @property {string} [logo]
 * @property {string} [slug]
 * @property {AttributeMasterMeta} [meta]
 * @property {AttributeMaster} [schema]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PTErrorResponse
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {number} [status]
 * @property {string} [message]
 * @property {Object} [meta]
 */

/**
 * @typedef UserSerializer
 * @property {string} [user_id]
 * @property {string} [_id]
 * @property {string} [contact]
 * @property {string} [username]
 * @property {string} [uid]
 */

/**
 * @typedef GetDepartment
 * @property {string[]} [synonyms]
 * @property {string} [search]
 * @property {string} [name]
 * @property {number} [page_no]
 * @property {number} [page_size]
 * @property {string} [created_on]
 * @property {UserSerializer} [created_by]
 * @property {number} [priority_order]
 * @property {string} [modified_on]
 * @property {string} [item_type]
 * @property {string} [logo]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {UserSerializer} [modified_by]
 * @property {string} [slug]
 */

/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {number} [status]
 * @property {string} [message]
 * @property {Object} [meta]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {string[]} [tags]
 * @property {number} priority_order
 * @property {Object} [platforms]
 * @property {string} logo
 * @property {string} [_cls]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {number} [uid]
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
 * @typedef UserDetail
 * @property {string} user_id
 * @property {string} [contact]
 * @property {string} username
 * @property {boolean} [super_user]
 */

/**
 * @typedef DepartmentModel
 * @property {Object[]} [synonyms]
 * @property {UserDetail} [verified_by]
 * @property {string} created_on
 * @property {Object} [slug]
 * @property {Object} name
 * @property {Object} [_id]
 * @property {UserDetail} [created_by]
 * @property {number} priority_order
 * @property {string} modified_on
 * @property {string} logo
 * @property {Object} [_cls]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {UserDetail} [modified_by]
 * @property {string} [verified_on]
 */

/**
 * @typedef ProductTemplate
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [created_on]
 * @property {string} [tag]
 * @property {Object} [created_by]
 * @property {string[]} [departments]
 * @property {string} [modified_on]
 * @property {string[]} [attributes]
 * @property {string} [logo]
 * @property {string[]} [categories]
 * @property {boolean} is_expirable
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 * @property {boolean} is_physical
 * @property {Object} [modified_by]
 * @property {string} slug
 */

/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TemplateDetails
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [tag]
 * @property {string} [id]
 * @property {string[]} [departments]
 * @property {string[]} [attributes]
 * @property {string} [logo]
 * @property {string[]} [categories]
 * @property {boolean} is_expirable
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 * @property {boolean} is_physical
 * @property {string} slug
 */

/**
 * @typedef Properties
 * @property {Object} [teaser_tag]
 * @property {Object} [size_guide]
 * @property {Object} [hsn_code]
 * @property {Object} [no_of_boxes]
 * @property {Object} [item_type]
 * @property {Object} [product_publish]
 * @property {Object} [slug]
 * @property {Object} [variants]
 * @property {Object} [description]
 * @property {Object} [currency]
 * @property {Object} [item_code]
 * @property {Object} [short_description]
 * @property {Object} [custom_order]
 * @property {Object} [tags]
 * @property {Object} [is_dependent]
 * @property {Object} [country_of_origin]
 * @property {Object} [return_config]
 * @property {Object} [command]
 * @property {Object} [is_active]
 * @property {Object} [name]
 * @property {Object} [sizes]
 * @property {Object} [brand_uid]
 * @property {Object} [category_slug]
 * @property {Object} [trader]
 * @property {Object} [trader_type]
 * @property {Object} [highlights]
 * @property {Object} [media]
 * @property {Object} [multi_size]
 * @property {Object} [product_group_tag]
 */

/**
 * @typedef GlobalValidation
 * @property {string} [description]
 * @property {Object} [definitions]
 * @property {string[]} [required]
 * @property {string} [title]
 * @property {Properties} [properties]
 * @property {string} [type]
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
 * @property {string[]} [brand]
 * @property {string} [type]
 * @property {string[]} [templates]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {ProductDownloadItemsData} [data]
 * @property {VerifiedBy} [created_by]
 * @property {string} [status]
 * @property {string} [id]
 * @property {number} [seller_id]
 * @property {string} [completed_on]
 * @property {string} [url]
 * @property {Object} [template_tags]
 * @property {string} [task_id]
 * @property {string} [trigger_on]
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
 * @property {CategoryMappingValues} [google]
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [ajio]
 */

/**
 * @typedef Category
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {string} [created_on]
 * @property {Hierarchy[]} [hierarchy]
 * @property {Object} [created_by]
 * @property {string[]} [tryouts]
 * @property {string} [id]
 * @property {number[]} departments
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {Media2} [media]
 * @property {boolean} is_active
 * @property {number} [priority]
 * @property {CategoryMapping} [marketplaces]
 * @property {number} [uid]
 * @property {number} level
 * @property {string} [slug]
 */

/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef CategoryRequestBody
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {Hierarchy[]} [hierarchy]
 * @property {string[]} [tryouts]
 * @property {number[]} departments
 * @property {Media2} [media]
 * @property {boolean} is_active
 * @property {number} [priority]
 * @property {CategoryMapping} [marketplaces]
 * @property {number} level
 * @property {string} [slug]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {number} [uid]
 * @property {string} [message]
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
 * @typedef Image
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef Logo
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef Brand
 * @property {Logo} [logo]
 * @property {number} [uid]
 * @property {string} [name]
 */

/**
 * @typedef ProductPublished
 * @property {number} [product_online_date]
 * @property {boolean} [is_set]
 */

/**
 * @typedef NetQuantityResponse
 * @property {string} [unit]
 * @property {number} [value]
 */

/**
 * @typedef ReturnConfigResponse
 * @property {string} [unit]
 * @property {number} [time]
 * @property {boolean} [returnable]
 */

/**
 * @typedef Product
 * @property {Object} [teaser_tag]
 * @property {VerifiedBy} [verified_by]
 * @property {Image[]} [images]
 * @property {Object[]} [all_sizes]
 * @property {string} [size_guide]
 * @property {Brand} [brand]
 * @property {string} [hsn_code]
 * @property {string} [id]
 * @property {number} [no_of_boxes]
 * @property {number[]} [departments]
 * @property {string} [item_type]
 * @property {string} [template_tag]
 * @property {string} [color]
 * @property {boolean} [is_image_less_product]
 * @property {string[]} [l3_mapping]
 * @property {boolean} [is_physical]
 * @property {string} [image_nature]
 * @property {ProductPublished} [product_publish]
 * @property {Object} [_custom_json]
 * @property {number} [category_uid]
 * @property {string} [pending]
 * @property {string} [slug]
 * @property {string[]} [all_identifiers]
 * @property {Object} [variants]
 * @property {string} [description]
 * @property {Object} [moq]
 * @property {boolean} [is_set]
 * @property {NetQuantityResponse} [net_quantity]
 * @property {number} [company_id]
 * @property {string} [currency]
 * @property {string} [item_code]
 * @property {string} [short_description]
 * @property {Object} [custom_order]
 * @property {string[]} [tags]
 * @property {boolean} [is_dependent]
 * @property {string} [primary_color]
 * @property {string} [stage]
 * @property {string} [country_of_origin]
 * @property {ReturnConfigResponse} [return_config]
 * @property {string} [verified_on]
 * @property {string} [created_on]
 * @property {number[]} [all_company_ids]
 * @property {Object} [variant_group]
 * @property {boolean} [is_expirable]
 * @property {Object} [variant_media]
 * @property {boolean} [is_active]
 * @property {Object} [category]
 * @property {string} [name]
 * @property {Object} [tax_identifier]
 * @property {Object[]} [sizes]
 * @property {Object} [created_by]
 * @property {number} [brand_uid]
 * @property {string} [modified_on]
 * @property {string} [category_slug]
 * @property {Object[]} [trader]
 * @property {Object} [attributes]
 * @property {string[]} [highlights]
 * @property {Media1[]} [media]
 * @property {boolean} [multi_size]
 * @property {number} [uid]
 * @property {Object} [modified_by]
 * @property {string[]} [product_group_tag]
 */

/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
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
 * @typedef CustomOrder
 * @property {string} [manufacturing_time_unit]
 * @property {number} [manufacturing_time]
 * @property {boolean} [is_custom_order]
 */

/**
 * @typedef ReturnConfig
 * @property {string} unit
 * @property {number} time
 * @property {boolean} returnable
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 */

/**
 * @typedef Trader
 * @property {string} [type]
 * @property {Object} name
 * @property {string[]} [address]
 */

/**
 * @typedef ProductCreateUpdateSchemaV2
 * @property {TeaserTag} [teaser_tag]
 * @property {string} [size_guide]
 * @property {string} [bulk_job_id]
 * @property {boolean} [is_image_less_product]
 * @property {number} [no_of_boxes]
 * @property {string} item_type
 * @property {number[]} departments
 * @property {string} template_tag
 * @property {string} [requester]
 * @property {ProductPublish} [product_publish]
 * @property {Object} [_custom_json]
 * @property {string} slug
 * @property {Object} [variants]
 * @property {number} company_id
 * @property {string} [description]
 * @property {boolean} [is_set]
 * @property {NetQuantity} [net_quantity]
 * @property {string} currency
 * @property {string} item_code
 * @property {string} [short_description]
 * @property {CustomOrder} [custom_order]
 * @property {string[]} [tags]
 * @property {boolean} [is_dependent]
 * @property {string} country_of_origin
 * @property {ReturnConfig} return_config
 * @property {string} [action]
 * @property {Object} [variant_group]
 * @property {Object} [variant_media]
 * @property {boolean} [is_active]
 * @property {string} name
 * @property {TaxIdentifier} tax_identifier
 * @property {Object[]} sizes
 * @property {number} brand_uid
 * @property {string} category_slug
 * @property {Trader[]} trader
 * @property {Object} attributes
 * @property {string[]} [highlights]
 * @property {Media1[]} [media]
 * @property {boolean} [multi_size]
 * @property {Object} [change_request_id]
 * @property {number} [uid]
 * @property {string[]} [product_group_tag]
 */

/**
 * @typedef ProductVariants
 * @property {string} [name]
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 * @property {Media1[]} [media]
 * @property {number} [category_uid]
 * @property {number} [uid]
 */

/**
 * @typedef ProductVariantsResponse
 * @property {ProductVariants[]} [variants]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {string[]} departments
 * @property {AttributeMasterDetails} details
 * @property {string} slug
 * @property {string} [description]
 * @property {string[]} [tags]
 * @property {boolean} [is_nested]
 * @property {string} [logo]
 * @property {string} [suggestion]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [created_on]
 * @property {string} [raw_key]
 * @property {boolean} [variant]
 * @property {Object} [synonyms]
 * @property {string} [name]
 * @property {string} [unit]
 * @property {Object} [created_by]
 * @property {AttributeMasterFilter} filters
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {AttributeMaster} schema
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
 * @property {string} gtin_type
 * @property {string} gtin_value
 * @property {boolean} [primary]
 */

/**
 * @typedef AllSizes
 * @property {Object} item_weight_unit_of_measure
 * @property {number} item_length
 * @property {ValidateIdentifier[]} [identifiers]
 * @property {number} item_weight
 * @property {string} item_dimensions_unit_of_measure
 * @property {Object} size
 * @property {number} item_height
 * @property {number} item_width
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
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {number} [failed]
 * @property {string} [file_path]
 * @property {UserDetail1} [created_by]
 * @property {ProductTemplate} [template]
 * @property {string} [modified_on]
 * @property {string} [template_tag]
 * @property {string[]} [failed_records]
 * @property {string[]} [cancelled_records]
 * @property {number} [cancelled]
 * @property {boolean} [is_active]
 * @property {string} [stage]
 * @property {number} [total]
 * @property {UserDetail1} [modified_by]
 * @property {number} [succeed]
 */

/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
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
 * @property {string} created_on
 * @property {number} company_id
 * @property {number} [failed]
 * @property {string} [file_path]
 * @property {UserInfo1} [created_by]
 * @property {string} [tracking_url]
 * @property {string} [custom_template_tag]
 * @property {string} [modified_on]
 * @property {number} [cancelled]
 * @property {Object[]} [failed_records]
 * @property {Object[]} [cancelled_records]
 * @property {string} [template_tag]
 * @property {boolean} [is_active]
 * @property {string} [stage]
 * @property {number} [total]
 * @property {UserInfo1} [modified_by]
 * @property {number} [succeed]
 */

/**
 * @typedef BulkResponse
 * @property {string} created_on
 * @property {UserInfo1} [created_by]
 * @property {string} [modified_on]
 * @property {string} batch_id
 * @property {boolean} [is_active]
 * @property {UserInfo1} [modified_by]
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
 * @property {string} [user_id]
 * @property {string} [username]
 * @property {number} [company_id]
 */

/**
 * @typedef Items
 * @property {number} [retry]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {number} [failed]
 * @property {string} [file_path]
 * @property {UserCommon} [created_by]
 * @property {string} [tracking_url]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {string[]} [failed_records]
 * @property {number} [cancelled]
 * @property {string[]} [cancelled_records]
 * @property {boolean} [is_active]
 * @property {string} [stage]
 * @property {number} [total]
 * @property {UserCommon} [modified_by]
 * @property {number} [succeed]
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
 * @property {boolean} [success]
 * @property {ProductSizeDeleteDataResponse} [data]
 */

/**
 * @typedef InventoryResponse
 * @property {string} [seller_identifier]
 * @property {Object} [identifiers]
 * @property {string} [currency]
 * @property {Object} [store]
 * @property {number} [sellable_quantity]
 * @property {number} [item_id]
 * @property {number} [price]
 * @property {string} [inventory_updated_on]
 * @property {string} [size]
 * @property {string} [uid]
 * @property {number} [price_effective]
 * @property {number} [price_transfer]
 * @property {number} [quantity]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef GTIN
 * @property {string} gtin_type
 * @property {Object} gtin_value
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
 * @property {string} [expiration_date]
 * @property {string} [item_weight_unit_of_measure]
 * @property {boolean} [is_set]
 * @property {number} [item_length]
 * @property {GTIN[]} identifiers
 * @property {string} store_code
 * @property {string} currency
 * @property {number} [price]
 * @property {number} [item_weight]
 * @property {InventorySet} [set]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [item_width]
 * @property {number} [price_transfer]
 * @property {number} price_effective
 * @property {number} [item_height]
 * @property {Object} size
 * @property {number} quantity
 */

/**
 * @typedef ItemQuery
 * @property {number} [uid]
 * @property {string} [item_code]
 * @property {number} [brand_uid]
 */

/**
 * @typedef InventoryRequest
 * @property {InvSize[]} sizes
 * @property {number} company_id
 * @property {ItemQuery} item
 */

/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
 */

/**
 * @typedef ManufacturerResponse
 * @property {string} address
 * @property {boolean} is_default
 * @property {string} name
 */

/**
 * @typedef PriceMeta
 * @property {number} transfer
 * @property {string} currency
 * @property {Object} [tp_notes]
 * @property {number} effective
 * @property {string} [updated_at]
 * @property {number} marked
 */

/**
 * @typedef WeightResponse
 * @property {number} shipping
 * @property {string} unit
 * @property {boolean} is_default
 */

/**
 * @typedef ReturnConfig1
 * @property {string} [unit]
 * @property {number} [time]
 * @property {boolean} [returnable]
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
 * @typedef DimensionResponse
 * @property {number} length
 * @property {number} width
 * @property {number} height
 * @property {string} unit
 * @property {boolean} is_default
 */

/**
 * @typedef Trader1
 * @property {string} type
 * @property {string} name
 * @property {string[]} address
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef InventorySellerResponse
 * @property {Object} [fynd_meta]
 * @property {BrandMeta} brand
 * @property {ManufacturerResponse} manufacturer
 * @property {Object} [raw_meta]
 * @property {PriceMeta} price
 * @property {boolean} fragile
 * @property {WeightResponse} weight
 * @property {Object} [_custom_json]
 * @property {string} [expiration_date]
 * @property {string} [added_on_store]
 * @property {boolean} [is_set]
 * @property {boolean} [track_inventory]
 * @property {string[]} [tags]
 * @property {number} total_quantity
 * @property {string} [stage]
 * @property {string} country_of_origin
 * @property {ReturnConfig1} [return_config]
 * @property {Object} identifier
 * @property {string} size
 * @property {Object} [meta]
 * @property {string} seller_identifier
 * @property {StoreMeta} store
 * @property {boolean} [is_active]
 * @property {Quantities} [quantities]
 * @property {string} fynd_article_code
 * @property {DimensionResponse} dimension
 * @property {Object} [tax_identifier]
 * @property {UserSerializer} [created_by]
 * @property {number} item_id
 * @property {Trader1[]} [trader]
 * @property {string} fynd_item_code
 * @property {string} [trace_id]
 * @property {InventorySet} [set]
 * @property {CompanyMeta} company
 * @property {string} uid
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BrandMeta1
 * @property {string} [name]
 * @property {number} [id]
 */

/**
 * @typedef ManufacturerResponse1
 * @property {string} [address]
 * @property {boolean} [is_default]
 * @property {string} [name]
 */

/**
 * @typedef PriceArticle
 * @property {number} [transfer]
 * @property {string} [currency]
 * @property {Object} [tp_notes]
 * @property {number} [effective]
 * @property {number} [marked]
 */

/**
 * @typedef WeightResponse1
 * @property {number} [shipping]
 * @property {string} [unit]
 */

/**
 * @typedef ReturnConfig2
 * @property {string} [unit]
 * @property {number} [time]
 * @property {boolean} [returnable]
 */

/**
 * @typedef ArticleStoreResponse
 * @property {string} [store_type]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [store_code]
 */

/**
 * @typedef DateMeta
 * @property {string} [inventory_updated_on]
 * @property {string} [added_on_store]
 * @property {string} [created_on]
 * @property {string} [modified_on]
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
 * @typedef DimensionResponse1
 * @property {number} [height]
 * @property {string} [unit]
 * @property {number} [length]
 * @property {number} [width]
 */

/**
 * @typedef Trader2
 * @property {string} [type]
 * @property {string} [name]
 * @property {string[]} [address]
 */

/**
 * @typedef CompanyMeta1
 * @property {number} [id]
 */

/**
 * @typedef GetInventories
 * @property {BrandMeta1} [brand]
 * @property {ManufacturerResponse1} [manufacturer]
 * @property {string} [id]
 * @property {PriceArticle} [price]
 * @property {WeightResponse1} [weight]
 * @property {string} [expiration_date]
 * @property {boolean} [is_set]
 * @property {boolean} [track_inventory]
 * @property {string[]} [tags]
 * @property {string} [inventory_updated_on]
 * @property {number} [total_quantity]
 * @property {string} [stage]
 * @property {string} [country_of_origin]
 * @property {ReturnConfig2} [return_config]
 * @property {Object} [identifier]
 * @property {string} [size]
 * @property {string} [seller_identifier]
 * @property {ArticleStoreResponse} [store]
 * @property {DateMeta} [date_meta]
 * @property {QuantitiesArticle} [quantities]
 * @property {DimensionResponse1} [dimension]
 * @property {Object} [tax_identifier]
 * @property {UserSerializer} [created_by]
 * @property {number} [item_id]
 * @property {Trader2[]} [trader]
 * @property {Object} [platforms]
 * @property {string} [trace_id]
 * @property {CompanyMeta1} [company]
 * @property {string} [uid]
 * @property {UserSerializer} [modified_by]
 */

/**
 * @typedef GetInventoriesResponse
 * @property {GetInventories[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {number} [failed]
 * @property {string} [file_path]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {number} [cancelled]
 * @property {string[]} [failed_records]
 * @property {string[]} [cancelled_records]
 * @property {boolean} [is_active]
 * @property {string} [stage]
 * @property {number} [total]
 * @property {Object} [modified_by]
 * @property {number} [succeed]
 */

/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef InventoryJobPayload
 * @property {string} [expiration_date]
 * @property {string} [item_weight_unit_of_measure]
 * @property {string} seller_identifier
 * @property {string} store_code
 * @property {string} [currency]
 * @property {string[]} [tags]
 * @property {number} [price]
 * @property {number} [price_marked]
 * @property {number} [total_quantity]
 * @property {string} [trace_id]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [price_effective]
 * @property {number} [quantity]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {Object} [user]
 * @property {InventoryJobPayload[]} sizes
 * @property {string} batch_id
 * @property {number} company_id
 */

/**
 * @typedef InventoryExportJob
 * @property {string} [status]
 * @property {number} seller_id
 * @property {string} [completed_on]
 * @property {string} [url]
 * @property {Object} [request_params]
 * @property {string} task_id
 * @property {string} [trigger_on]
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [brand]
 * @property {string} [type]
 * @property {number[]} [store]
 */

/**
 * @typedef InventoryExportResponse
 * @property {string} [status]
 * @property {number} seller_id
 * @property {Object} [request_params]
 * @property {string} task_id
 * @property {string} [trigger_on]
 */

/**
 * @typedef FilerList
 * @property {string} [value]
 * @property {string} [display]
 */

/**
 * @typedef InventoryConfig
 * @property {boolean} [multivalues]
 * @property {FilerList[]} [data]
 */

/**
 * @typedef InventoryPayload
 * @property {string} [expiration_date]
 * @property {string} seller_identifier
 * @property {string[]} [tags]
 * @property {number} store_id
 * @property {number} [price_marked]
 * @property {number} [total_quantity]
 * @property {string} [trace_id]
 * @property {number} [price_effective]
 */

/**
 * @typedef InventoryRequestSchemaV2
 * @property {InventoryPayload[]} [payload]
 * @property {number} company_id
 * @property {Object} [meta]
 */

/**
 * @typedef InventoryFailedReason
 * @property {string} [errors]
 * @property {string} message
 */

/**
 * @typedef InventoryResponseItem
 * @property {InventoryFailedReason} [reason]
 * @property {InventoryPayload} [data]
 */

/**
 * @typedef InventoryUpdateResponse
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message
 */

/**
 * @typedef HsnCodesObject
 * @property {number} [company_id]
 * @property {number} [threshold1]
 * @property {string} [hsn_code]
 * @property {boolean} [tax_on_esp]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {number} [tax2]
 * @property {number} [threshold2]
 * @property {boolean} [tax_on_mrp]
 * @property {number} [tax1]
 * @property {string} [hs2_code]
 */

/**
 * @typedef PageResponse
 * @property {number} [item_total]
 * @property {boolean} [has_next]
 * @property {string} [current]
 * @property {number} [size]
 * @property {boolean} [has_previous]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {HsnCodesObject[]} [items]
 * @property {PageResponse} [page]
 */

/**
 * @typedef HsnUpsert
 * @property {number} company_id
 * @property {number} threshold1
 * @property {string} hsn_code
 * @property {boolean} [tax_on_esp]
 * @property {number} [tax2]
 * @property {number} [threshold2]
 * @property {boolean} tax_on_mrp
 * @property {boolean} [is_active]
 * @property {number} [uid]
 * @property {number} tax1
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
 * @property {number} rate
 * @property {string} effective_date
 * @property {number} [cess]
 */

/**
 * @typedef HSNDataInsertV2
 * @property {string} country_code
 * @property {string} description
 * @property {string} [created_on]
 * @property {TaxSlab[]} taxes
 * @property {Object} [created_by]
 * @property {string} hsn_code
 * @property {string} [modified_on]
 * @property {string} type
 * @property {string} reporting_hsn
 * @property {Object} [modified_by]
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
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
 * @property {Object} [meta]
 * @property {number} [quantity]
 */

/**
 * @typedef AssignStore
 * @property {string} [channel_identifier]
 * @property {number} [company_id]
 * @property {number[]} [store_ids]
 * @property {string} pincode
 * @property {string} app_id
 * @property {AssignStoreArticle[]} articles
 * @property {string} [channel_type]
 */

/**
 * @typedef ArticleAssignment1
 * @property {string} [strategy]
 * @property {string} [level]
 */

/**
 * @typedef StoreAssignResponse
 * @property {ArticleAssignment1} article_assignment
 * @property {number} [company_id]
 * @property {string} [group_id]
 * @property {string} [_id]
 * @property {boolean} status
 * @property {number} [index]
 * @property {number} [store_pincode]
 * @property {number} item_id
 * @property {number} [store_id]
 * @property {number} [price_marked]
 * @property {string} [s_city]
 * @property {Object[]} [strategy_wise_listing]
 * @property {string} [uid]
 * @property {number} [price_effective]
 * @property {string} size
 * @property {Object} [meta]
 * @property {number} quantity
 */

/**
 * @typedef BrandItem
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {string[]} [departments]
 * @property {Media} [logo]
 * @property {number} [uid]
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
 * @property {number} [priority_order]
 * @property {Media} [logo]
 * @property {number} [uid]
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
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {Object[]} [childs]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef SecondLevelChild
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {ThirdLevelChild[]} [childs]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef Child
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {SecondLevelChild[]} [childs]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef CategoryItems
 * @property {string} [name]
 * @property {string} [slug]
 * @property {Action} [action]
 * @property {Child[]} [childs]
 * @property {number} [uid]
 * @property {ImageUrls} [banners]
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
 * @property {Object} [operators]
 * @property {Page} page
 * @property {ProductFilters[]} [filters]
 * @property {ProductSortOn[]} [sort_on]
 * @property {ProductListingDetail[]} [items]
 */

/**
 * @typedef ProductDetail
 * @property {number} [rating_count]
 * @property {Object} [teaser_tag]
 * @property {ProductBrand} [brand]
 * @property {string[]} [tryouts]
 * @property {string} [item_type]
 * @property {string} [color]
 * @property {number} [rating]
 * @property {string} [product_online_date]
 * @property {string} [image_nature]
 * @property {string} slug
 * @property {Media1[]} [medias]
 * @property {string} [description]
 * @property {string[]} [similars]
 * @property {string} [short_description]
 * @property {string} [item_code]
 * @property {string} [type]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {boolean} [has_variant]
 * @property {string} [name]
 * @property {Object} [promo_meta]
 * @property {Object} [attributes]
 * @property {string[]} [highlights]
 * @property {number} [uid]
 */

/**
 * @typedef InventoryPage
 * @property {number} item_total
 * @property {boolean} [has_next]
 * @property {string} [next_id]
 * @property {string} type
 * @property {boolean} [has_previous]
 */

/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */

/**
 * @typedef UserSerializer1
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef GetAddressSerializer
 * @property {number} [latitude]
 * @property {string} [country_code]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {number} [longitude]
 * @property {number} [pincode]
 * @property {string} [address2]
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [address1]
 * @property {string} [landmark]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
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
 * @typedef Document
 * @property {string} value
 * @property {string} [url]
 * @property {string} type
 * @property {boolean} [verified]
 * @property {string} [legal_name]
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
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [username]
 * @property {string} [password]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_waybill]
 * @property {InvoiceCredSerializer} [e_invoice]
 */

/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 * @property {string} [order]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [user_id]
 * @property {string} [contact]
 * @property {string} [username]
 */

/**
 * @typedef GetCompanySerializer
 * @property {GetAddressSerializer[]} [addresses]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {UserSerializer2} [created_by]
 * @property {string} [reject_reason]
 * @property {string} [modified_on]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [verified_on]
 */

/**
 * @typedef GetLocationSerializer
 * @property {UserSerializer1} [verified_by]
 * @property {string} phone_number
 * @property {GetAddressSerializer} address
 * @property {Object} [warnings]
 * @property {Object} [_custom_json]
 * @property {string[]} [notification_emails]
 * @property {string} [store_type]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} [created_on]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {Document[]} [documents]
 * @property {string} code
 * @property {string} name
 * @property {UserSerializer1} [created_by]
 * @property {string} [modified_on]
 * @property {string} display_name
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {LocationIntegrationType} [integration_type]
 * @property {GetCompanySerializer} [company]
 * @property {number} [uid]
 * @property {UserSerializer1} [modified_by]
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
 * @property {string} [name]
 * @property {string} app_id
 * @property {string} [logo]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {number} uid
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
 * @property {string} [username]
 * @property {string} [user_id]
 * @property {string} [contact]
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
 * @typedef GetAddressSerializer
 * @property {string} [country_code]
 * @property {string} [address1]
 * @property {string} [landmark]
 * @property {number} [longitude]
 * @property {string} [address2]
 * @property {number} [latitude]
 * @property {number} [pincode]
 * @property {string} [city]
 * @property {string} [address_type]
 * @property {string} [state]
 * @property {string} [country]
 */

/**
 * @typedef CompanyTaxesSerializer
 * @property {string} [effective_date]
 * @property {number} [rate]
 * @property {boolean} [enable]
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
 * @typedef Document
 * @property {string} [legal_name]
 * @property {string} type
 * @property {boolean} [verified]
 * @property {string} [url]
 * @property {string} value
 */

/**
 * @typedef BusinessCountryInfo
 * @property {string} [country_code]
 * @property {string} [country]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {Object} [_custom_json]
 * @property {boolean} [franchise_enabled]
 * @property {UserSerializer} [created_by]
 * @property {string} [modified_on]
 * @property {BusinessDetails} [business_details]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {UserSerializer} [modified_by]
 * @property {ContactDetails} [contact_details]
 * @property {Object} [warnings]
 * @property {UserSerializer} [verified_by]
 * @property {string} [business_info]
 * @property {string} [name]
 * @property {string} [mode]
 * @property {string} [created_on]
 * @property {number} uid
 * @property {Document[]} [documents]
 * @property {string} [stage]
 * @property {string} company_type
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string[]} [notification_emails]
 * @property {string} [verified_on]
 * @property {string} business_type
 */

/**
 * @typedef ErrorResponse
 * @property {number} [status]
 * @property {string} [code]
 * @property {string} [message]
 * @property {Object} [meta]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {string} [country_code]
 * @property {string} address1
 * @property {string} [landmark]
 * @property {string} address_type
 * @property {number} longitude
 * @property {string} [address2]
 * @property {number} pincode
 * @property {string} city
 * @property {number} latitude
 * @property {string} state
 * @property {string} country
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {string} [effective_date]
 * @property {number} [rate]
 * @property {boolean} [enable]
 */

/**
 * @typedef UpdateCompany
 * @property {BusinessDetails} [business_details]
 * @property {string} [business_info]
 * @property {boolean} [franchise_enabled]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {Document[]} [documents]
 * @property {ContactDetails} [contact_details]
 * @property {string} [company_type]
 * @property {string[]} [notification_emails]
 * @property {string} [reject_reason]
 * @property {Object} [warnings]
 * @property {string} [business_type]
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
 * @property {DocumentsObj} [store_documents]
 * @property {DocumentsObj} [brand]
 * @property {DocumentsObj} [product]
 * @property {DocumentsObj} [company_documents]
 * @property {string} [stage]
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
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [created_by]
 * @property {string} [description]
 * @property {string} [slug_key]
 * @property {string} [modified_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [logo]
 * @property {Object} [warnings]
 * @property {UserSerializer} [verified_by]
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {string} [mode]
 * @property {Object} [_locale_language]
 * @property {string} [created_on]
 * @property {number} [uid]
 * @property {string} [stage]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [verified_on]
 * @property {string} [reject_reason]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {Object} [_custom_json]
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {string} [description]
 * @property {Object} [_locale_language]
 * @property {number} [company_id]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} logo
 * @property {string} [brand_tier]
 * @property {number} [uid]
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
 * @property {UserSerializer} [verified_by]
 * @property {string[]} [market_channels]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {string} business_type
 * @property {UserSerializer} [created_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {CompanyDetails} [details]
 * @property {UserSerializer} [modified_by]
 * @property {string} company_type
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} [modified_on]
 * @property {string[]} [notification_emails]
 * @property {string} [verified_on]
 * @property {string} [reject_reason]
 * @property {number} [uid]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {UserSerializer} [verified_by]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {UserSerializer} [created_by]
 * @property {UserSerializer} [modified_by]
 * @property {string} [stage]
 * @property {CompanySerializer} [company]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {string} [reject_reason]
 * @property {Object} [warnings]
 * @property {number} [uid]
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
 * @typedef InvoiceCredSerializer
 * @property {string} [username]
 * @property {string} [password]
 * @property {boolean} [enabled]
 */

/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_waybill]
 * @property {InvoiceCredSerializer} [e_invoice]
 */

/**
 * @typedef GetCompanySerializer
 * @property {UserSerializer} [verified_by]
 * @property {string} [name]
 * @property {string} [business_type]
 * @property {UserSerializer} [created_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {UserSerializer} [modified_by]
 * @property {string} [company_type]
 * @property {string} [stage]
 * @property {string} [created_on]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {string} [reject_reason]
 * @property {number} [uid]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} hour
 * @property {number} minute
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [opening]
 * @property {boolean} open
 * @property {string} weekday
 * @property {LocationTimingSerializer} [closing]
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */

/**
 * @typedef HolidayDateSerializer
 * @property {string} start_date
 * @property {string} end_date
 */

/**
 * @typedef HolidaySchemaSerializer
 * @property {HolidayDateSerializer} date
 * @property {string} title
 * @property {string} holiday_type
 */

/**
 * @typedef GetLocationSerializer
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [created_by]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {GetCompanySerializer} [company]
 * @property {string} [modified_on]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {LocationManagerSerializer} [manager]
 * @property {GetAddressSerializer} address
 * @property {UserSerializer} [modified_by]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {Object} [warnings]
 * @property {UserSerializer} [verified_by]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} name
 * @property {string} phone_number
 * @property {string} [store_type]
 * @property {string} [created_on]
 * @property {number} [uid]
 * @property {string} display_name
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} code
 * @property {Document[]} [documents]
 * @property {string} [stage]
 * @property {string[]} [notification_emails]
 * @property {string} [verified_on]
 */

/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef LocationSerializer
 * @property {Object} [_custom_json]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} display_name
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {string} name
 * @property {string} code
 * @property {GetAddressSerializer} address
 * @property {Document[]} [documents]
 * @property {string} [stage]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {number} company
 * @property {string} [store_type]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string[]} [notification_emails]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {Object} [warnings]
 * @property {number} [uid]
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
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef _AssignStoreArticle
 * @property {_ArticleQuery} [query]
 * @property {string} [group_id]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {Object} [meta]
 * @property {number} [quantity]
 */

/**
 * @typedef AssignStoreRequestValidator
 * @property {string} [channel_identifier]
 * @property {number[]} [store_ids]
 * @property {string} [app_id]
 * @property {number} [company_id]
 * @property {_AssignStoreArticle[]} [articles]
 * @property {string} [channel_type]
 * @property {string} [pincode]
 */

/**
 * @typedef AssignStoreResponseSerializer
 * @property {boolean} [status]
 * @property {string} [s_city]
 * @property {number} [store_id]
 * @property {number} [index]
 * @property {string} [_id]
 * @property {string} [store_pincode]
 * @property {number} [company_id]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {string} [size]
 * @property {Object} [meta]
 * @property {number} [item_id]
 * @property {number} [price_marked]
 * @property {number} [preice_effective]
 * @property {number} [quantity]
 * @property {string} [uid]
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
 * @typedef Identifier
 * @property {string[]} [article_id]
 * @property {number[]} [store_id]
 * @property {string[]} [collection_id]
 * @property {string[]} [user_id]
 * @property {number[]} [company_id]
 * @property {number[]} [brand_id]
 * @property {string[]} [email_domain]
 * @property {number[]} [category_id]
 * @property {number[]} [exclude_brand_id]
 * @property {number[]} [item_id]
 */

/**
 * @typedef Validation
 * @property {boolean} [anonymous]
 * @property {string[]} [app_id]
 * @property {string} [user_registered_after]
 */

/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */

/**
 * @typedef PriceRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef PostOrder
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {PaymentAllowValue} [uses]
 * @property {string[]} [codes]
 * @property {string[]} [types]
 * @property {string[]} [networks]
 */

/**
 * @typedef UsesRemaining
 * @property {number} [user]
 * @property {number} [app]
 * @property {number} [total]
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
 * @typedef Restrictions
 * @property {number[]} [ordering_stores]
 * @property {PriceRange} [price_range]
 * @property {PostOrder} [post_order]
 * @property {number[]} [user_groups]
 * @property {Object} [payments]
 * @property {string} [user_type]
 * @property {UsesRestriction} [uses]
 * @property {boolean} [coupon_allowed]
 * @property {string[]} [platforms]
 * @property {BulkBundleRestriction} [bulk_bundle]
 */

/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef Rule
 * @property {number} [discount_qty]
 * @property {number} [min]
 * @property {number} [value]
 * @property {number} [key]
 * @property {number} [max]
 */

/**
 * @typedef State
 * @property {boolean} [is_public]
 * @property {boolean} [is_archived]
 * @property {boolean} [is_display]
 */

/**
 * @typedef CouponSchedule
 * @property {string} [cron]
 * @property {Object[]} [next_schedule]
 * @property {string} [end]
 * @property {string} [start]
 * @property {number} [duration]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [subtitle]
 * @property {string} [title]
 */

/**
 * @typedef DisplayMeta
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {DisplayMetaDict} [apply]
 * @property {string} [description]
 * @property {DisplayMetaDict} [auto]
 * @property {DisplayMetaDict} [remove]
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
 * @typedef RuleDefinition
 * @property {string} type
 * @property {string} value_type
 * @property {boolean} [auto_apply]
 * @property {boolean} [is_exact]
 * @property {string} applicable_on
 * @property {string} [currency_code]
 * @property {string[]} [scope]
 * @property {string} calculate_on
 */

/**
 * @typedef CouponAdd
 * @property {Identifier} identifiers
 * @property {Validation} [validation]
 * @property {Ownership} ownership
 * @property {Restrictions} [restrictions]
 * @property {string} code
 * @property {string} type_slug
 * @property {CouponDateMeta} [date_meta]
 * @property {Rule[]} rule
 * @property {State} [state]
 * @property {CouponSchedule} [_schedule]
 * @property {Validity} validity
 * @property {DisplayMeta} display_meta
 * @property {CouponAuthor} [author]
 * @property {string[]} [tags]
 * @property {CouponAction} [action]
 * @property {RuleDefinition} rule_definition
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
 * @property {Identifier} identifiers
 * @property {Validation} [validation]
 * @property {Ownership} ownership
 * @property {Restrictions} [restrictions]
 * @property {string} code
 * @property {string} type_slug
 * @property {CouponDateMeta} [date_meta]
 * @property {Rule[]} rule
 * @property {State} [state]
 * @property {CouponSchedule} [_schedule]
 * @property {Validity} validity
 * @property {DisplayMeta} display_meta
 * @property {CouponAuthor} [author]
 * @property {string[]} [tags]
 * @property {CouponAction} [action]
 * @property {RuleDefinition} rule_definition
 */

/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive]
 * @property {CouponSchedule} [schedule]
 */

/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */

/**
 * @typedef PromotionSchedule
 * @property {boolean} published
 * @property {string} [cron]
 * @property {Object[]} [next_schedule]
 * @property {string} [end]
 * @property {string} start
 * @property {number} [duration]
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef DiscountOffer
 * @property {number} [discount_price]
 * @property {boolean} [apportion_discount]
 * @property {number} [discount_percentage]
 * @property {boolean} [partial_can_ret]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [max_offer_quantity]
 * @property {string} [code]
 * @property {number} [max_discount_amount]
 * @property {number} [min_offer_quantity]
 * @property {number} [discount_amount]
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
 * @property {number[]} [item_store]
 * @property {number[]} [item_category]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_brand]
 * @property {CompareObject} [cart_total]
 * @property {number[]} [item_id]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_exclude_company]
 * @property {number[]} [item_exclude_id]
 * @property {number[]} [item_company]
 * @property {string[]} [item_size]
 * @property {string[]} [buy_rules]
 * @property {CompareObject} [cart_unique_item_quantity]
 * @property {string[]} [available_zones]
 * @property {CompareObject} [cart_quantity]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_exclude_category]
 * @property {number[]} [item_brand]
 * @property {boolean} [all_items]
 * @property {number[]} [item_exclude_store]
 */

/**
 * @typedef DiscountRule
 * @property {DiscountOffer} offer
 * @property {ItemCriteria} item_criteria
 * @property {string} buy_condition
 * @property {string} discount_type
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [name]
 * @property {string} [offer_text]
 * @property {string} [description]
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
 * @property {string} type
 * @property {string[]} [codes]
 * @property {PaymentAllowValue1} [uses]
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
 * @typedef UserRegistered
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef Restrictions1
 * @property {PostOrder1} [post_order]
 * @property {number[]} [user_groups]
 * @property {string[]} [user_id]
 * @property {number} [order_quantity]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {UsesRestriction1} uses
 * @property {UserRegistered} [user_registered]
 * @property {string[]} [platforms]
 * @property {boolean} [anonymous_users]
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef PromotionListItem
 * @property {string} promotion_type
 * @property {Visibility} [visiblility]
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionAuthor} [author]
 * @property {DiscountRule[]} discount_rules
 * @property {string} [calculate_on]
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {Object} [_custom_json]
 * @property {boolean} [apply_all_discount]
 * @property {number} [apply_priority]
 * @property {string} mode
 * @property {Object} buy_rules
 * @property {string} promo_group
 * @property {DisplayMeta1} display_meta
 * @property {PromotionAction} [post_order_action]
 * @property {string} [apply_exclusive]
 * @property {Ownership1} ownership
 * @property {Restrictions1} [restrictions]
 * @property {string} [code]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [currency]
 */

/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PromotionAdd
 * @property {string} promotion_type
 * @property {Visibility} [visiblility]
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionAuthor} [author]
 * @property {DiscountRule[]} discount_rules
 * @property {string} [calculate_on]
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {Object} [_custom_json]
 * @property {boolean} [apply_all_discount]
 * @property {number} [apply_priority]
 * @property {string} mode
 * @property {Object} buy_rules
 * @property {string} promo_group
 * @property {DisplayMeta1} display_meta
 * @property {PromotionAction} [post_order_action]
 * @property {string} [apply_exclusive]
 * @property {Ownership1} ownership
 * @property {Restrictions1} [restrictions]
 * @property {string} [code]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [currency]
 */

/**
 * @typedef PromotionUpdate
 * @property {string} promotion_type
 * @property {Visibility} [visiblility]
 * @property {PromotionSchedule} [_schedule]
 * @property {PromotionAuthor} [author]
 * @property {DiscountRule[]} discount_rules
 * @property {string} [calculate_on]
 * @property {boolean} [stackable]
 * @property {string} application_id
 * @property {Object} [_custom_json]
 * @property {boolean} [apply_all_discount]
 * @property {number} [apply_priority]
 * @property {string} mode
 * @property {Object} buy_rules
 * @property {string} promo_group
 * @property {DisplayMeta1} display_meta
 * @property {PromotionAction} [post_order_action]
 * @property {string} [apply_exclusive]
 * @property {Ownership1} ownership
 * @property {Restrictions1} [restrictions]
 * @property {string} [code]
 * @property {PromotionDateMeta} [date_meta]
 * @property {string} [currency]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive]
 * @property {PromotionSchedule} [schedule]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [type]
 * @property {string} [modified_on]
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {string} [entity_slug]
 * @property {string} [description]
 * @property {string} [entity_type]
 * @property {string} [created_on]
 * @property {string} [example]
 * @property {boolean} [is_hidden]
 */

/**
 * @typedef CartItem
 * @property {number} [quantity]
 * @property {string} size
 * @property {string} product_id
 */

/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */

/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */

/**
 * @typedef ProductAvailability
 * @property {number} [other_store_quantity]
 * @property {boolean} [deliverable]
 * @property {boolean} [is_valid]
 * @property {boolean} [out_of_stock]
 * @property {string[]} [sizes]
 */

/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef BasePrice
 * @property {number} [effective]
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 * @property {string} [currency_code]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
 */

/**
 * @typedef ProductArticle
 * @property {string} [type]
 * @property {BaseInfo} [seller]
 * @property {Object} [gift_card]
 * @property {Object} [cart_item_meta]
 * @property {ArticlePriceInfo} [price]
 * @property {boolean} [is_gift_visible]
 * @property {string} [seller_identifier]
 * @property {BaseInfo} [store]
 * @property {Object} [identifier]
 * @property {string} [uid]
 * @property {string[]} [product_group_tags]
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [quantity]
 * @property {string} [size]
 */

/**
 * @typedef BuyRules
 * @property {Object} [cart_conditions]
 * @property {Object} [item_criteria]
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
 * @property {string[]} [item_images_url]
 * @property {string} [item_brand_name]
 * @property {Object} [item_price_details]
 * @property {string} [item_slug]
 * @property {string} [item_name]
 * @property {number} [item_id]
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
 * @property {string} [promo_id]
 * @property {number} [article_quantity]
 * @property {BuyRules[]} [buy_rules]
 * @property {string} [promotion_group]
 * @property {string} [promotion_type]
 * @property {string} [offer_text]
 * @property {boolean} [mrp_promotion]
 * @property {string} [promotion_name]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {number} [amount]
 */

/**
 * @typedef ProductPrice
 * @property {number} [add_on]
 * @property {number} [effective]
 * @property {number} [selling]
 * @property {string} [currency_code]
 * @property {number} [marked]
 * @property {string} [currency_symbol]
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
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef ProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [url]
 * @property {string} [secure_url]
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
 * @property {string} [type]
 * @property {ActionQuery} [query]
 * @property {string} [url]
 */

/**
 * @typedef CartProduct
 * @property {string} [type]
 * @property {CategoryInfo[]} [categories]
 * @property {ProductImage[]} [images]
 * @property {Tags} [teaser_tag]
 * @property {string} [slug]
 * @property {BaseInfo} [brand]
 * @property {string} [name]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {ProductAction} [action]
 */

/**
 * @typedef CouponDetails
 * @property {string} [code]
 * @property {number} [discount_total_quantity]
 * @property {number} [discount_single_quantity]
 */

/**
 * @typedef CartProductInfo
 * @property {boolean} [is_set]
 * @property {CartProductIdentifer} identifiers
 * @property {ProductAvailability} [availability]
 * @property {ProductArticle} [article]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {string} [key]
 * @property {ProductPriceInfo} [price]
 * @property {PromoMeta} [promo_meta]
 * @property {Object} [bulk_offer]
 * @property {CartProduct} [product]
 * @property {string} [discount]
 * @property {CouponDetails} [coupon]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {number} [quantity]
 * @property {string} [coupon_message]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [message]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [type]
 * @property {number} [minimum_cart_value]
 * @property {number} [value]
 * @property {string} [title]
 * @property {boolean} [is_applied]
 * @property {number} [max_discount_value]
 * @property {string} [code]
 * @property {number} [coupon_value]
 * @property {string} [coupon_type]
 * @property {string} [description]
 * @property {string} [sub_title]
 * @property {string} [uid]
 * @property {string} [message]
 */

/**
 * @typedef LoyaltyPoints
 * @property {number} [total]
 * @property {boolean} [is_applied]
 * @property {string} [description]
 * @property {number} [applicable]
 */

/**
 * @typedef DisplayBreakup
 * @property {number} [value]
 * @property {string} [key]
 * @property {string} [display]
 * @property {string} [currency_code]
 * @property {string[]} [message]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef RawBreakup
 * @property {number} [cod_charge]
 * @property {number} [gift_card]
 * @property {number} [mrp_total]
 * @property {number} [gst_charges]
 * @property {number} [fynd_cash]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [coupon]
 * @property {number} [convenience_fee]
 * @property {number} [vog]
 * @property {number} [total]
 * @property {number} [subtotal]
 * @property {number} [you_saved]
 */

/**
 * @typedef CartBreakup
 * @property {CouponBreakup} [coupon]
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {DisplayBreakup[]} [display]
 * @property {RawBreakup} [raw]
 */

/**
 * @typedef OpenapiCartDetailsResponse
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
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
 * @property {string} [area]
 * @property {string} [landmark]
 * @property {Object} [meta]
 * @property {string} [country_code]
 * @property {number} [pincode]
 * @property {string} [state]
 * @property {string} [name]
 * @property {string} area_code
 * @property {string} [city]
 * @property {number} [phone]
 * @property {string} [country]
 * @property {string} [address]
 * @property {string} [address_type]
 * @property {string} [area_code_slug]
 * @property {string} [email]
 */

/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {CartItem} [cart_items]
 * @property {ShippingAddress} shipping_address
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
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {string} [message]
 * @property {ShipmentPromise} [delivery_promise]
 */

/**
 * @typedef CartItemMeta
 * @property {boolean} [primary_item]
 * @property {string} [group_id]
 */

/**
 * @typedef OpenApiFiles
 * @property {string} key
 * @property {string[]} values
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [payment_gateway]
 * @property {string} [payment_id]
 * @property {string} [order_id]
 * @property {string} [current_status]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef MultiTenderPaymentMethod
 * @property {string} [name]
 * @property {number} amount
 * @property {string} mode
 * @property {MultiTenderPaymentMeta} [meta]
 */

/**
 * @typedef OpenApiOrderItem
 * @property {string} size
 * @property {number} price_effective
 * @property {number} amount_paid
 * @property {number} price_marked
 * @property {CartItemMeta} [meta]
 * @property {number} delivery_charges
 * @property {number} coupon_effective_discount
 * @property {number} discount
 * @property {OpenApiFiles[]} [files]
 * @property {number} cashback_applied
 * @property {number} [quantity]
 * @property {number} [employee_discount]
 * @property {number} cod_charges
 * @property {Object} [extra_meta]
 * @property {number} product_id
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} [loyalty_discount]
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {OpenApiOrderItem[]} cart_items
 * @property {number} delivery_charges
 * @property {string} [gstin]
 * @property {string} [coupon]
 * @property {string} [comment]
 * @property {number} cashback_applied
 * @property {string} [currency_code]
 * @property {string} coupon_code
 * @property {Object} [employee_discount]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} cod_charges
 * @property {ShippingAddress} [shipping_address]
 * @property {string} [affiliate_order_id]
 * @property {ShippingAddress} billing_address
 * @property {string} [payment_mode]
 * @property {string} [order_id]
 * @property {OpenApiFiles[]} [files]
 * @property {number} cart_value
 * @property {number} coupon_value
 * @property {number} [loyalty_discount]
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
 * @property {boolean} [merge_qty]
 * @property {string} _id
 * @property {Object} [meta]
 * @property {Object} [delivery_charges]
 * @property {string} [gstin]
 * @property {Object} [payments]
 * @property {boolean} [buy_now]
 * @property {Object} [coupon]
 * @property {string} [comment]
 * @property {number} uid
 * @property {string} created_on
 * @property {Object[]} [payment_methods]
 * @property {Object} [fynd_credits]
 * @property {string} user_id
 * @property {Object[]} articles
 * @property {number} [cart_value]
 * @property {boolean} is_default
 * @property {number} [discount]
 * @property {number} [bulk_coupon_discount]
 * @property {boolean} [is_active]
 * @property {Object} [promotion]
 * @property {Object} [cod_charges]
 * @property {string} [checkout_mode]
 * @property {string} expire_at
 * @property {Object} cashback
 * @property {Object[]} [shipments]
 * @property {string} [payment_mode]
 * @property {string} last_modified
 * @property {string} [order_id]
 * @property {string} [app_id]
 * @property {number[]} [fc_index_map]
 * @property {boolean} [is_archive]
 * @property {Object} [pick_up_customer_details]
 */

/**
 * @typedef AbandonedCartResponse
 * @property {boolean} [success]
 * @property {AbandonedCart[]} [items]
 * @property {Page} [page]
 * @property {Object} [result]
 * @property {string} [message]
 */

/**
 * @typedef AddProductCart
 * @property {string} [article_id]
 * @property {string} [item_size]
 * @property {number} [store_id]
 * @property {boolean} [pos]
 * @property {number} [seller_id]
 * @property {string} [display]
 * @property {Object} [article_assignment]
 * @property {string[]} [product_group_tags]
 * @property {number} [quantity]
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [item_id]
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
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
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {CartBreakup} [breakup_values]
 * @property {CartProductInfo[]} [items]
 * @property {string} [coupon_text]
 * @property {string} [gstin]
 * @property {string} [last_modified]
 * @property {boolean} [restrict_checkout]
 * @property {boolean} [is_valid]
 * @property {boolean} [buy_now]
 * @property {string} [id]
 * @property {string} [delivery_charge_info]
 * @property {string} [comment]
 * @property {CartCurrency} [currency]
 * @property {string} [checkout_mode]
 * @property {string} [message]
 * @property {ShipmentPromise} [delivery_promise]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {boolean} [partial]
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * @typedef UpdateProductCart
 * @property {CartProductIdentifer} identifiers
 * @property {string} [article_id]
 * @property {string} [item_size]
 * @property {number} [item_index]
 * @property {Object} [extra_meta]
 * @property {number} [quantity]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [item_id]
 */

/**
 * @typedef UpdateCartRequest
 * @property {string} operation
 * @property {UpdateProductCart[]} [items]
 */

/**
 * @typedef UpdateCartDetailResponse
 * @property {CartDetailResponse} [cart]
 * @property {string} [message]
 * @property {boolean} [success]
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

module.exports = PlatformClient;
