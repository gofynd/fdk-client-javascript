const Common = require("./Common/CommonPlatformClient");

const Lead = require("./Lead/LeadPlatformClient");

const Billing = require("./Billing/BillingPlatformClient");

const Communication = require("./Communication/CommunicationPlatformClient");

const Payment = require("./Payment/PaymentPlatformClient");

const Catalog = require("./Catalog/CatalogPlatformClient");

const CompanyProfile = require("./CompanyProfile/CompanyProfilePlatformClient");

const FileStorage = require("./FileStorage/FileStoragePlatformClient");

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

    this.catalog = new Catalog(config);

    this.companyProfile = new CompanyProfile(config);

    this.fileStorage = new FileStorage(config);

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
 * @typedef Application
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [app_type]
 * @property {ApplicationAuth} [auth]
 * @property {SecureUrl} [banner]
 * @property {number} [cache_ttl]
 * @property {string} [channel_type]
 * @property {number} [company_id]
 * @property {ApplicationCors} [cors]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {SecureUrl} [favicon]
 * @property {boolean} [is_active]
 * @property {boolean} [is_internal]
 * @property {SecureUrl} [logo]
 * @property {ApplicationMeta[]} [meta]
 * @property {SecureUrl} [mobile_logo]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {ApplicationRedirections[]} [redirections]
 * @property {string} [token]
 * @property {string} [updated_at]
 * @property {ApplicationWebsite} [website]
 */
/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled]
 */
/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */
/**
 * @typedef ApplicationMeta
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [type]
 */
/**
 * @typedef ApplicationResponse
 * @property {Application} [application]
 */
/**
 * @typedef ApplicationWebsite
 * @property {string} [basepath]
 * @property {boolean} [enabled]
 */
/**
 * @typedef BadRequest
 * @property {string} [message]
 */
/**
 * @typedef Currency
 * @property {string} [_id]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {number} [decimal_digits]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [symbol]
 * @property {string} [updated_at]
 */
/**
 * @typedef Domain
 * @property {string} [_id]
 * @property {boolean} [is_predefined]
 * @property {boolean} [is_primary]
 * @property {boolean} [is_shortlink]
 * @property {string} [name]
 * @property {boolean} [verified]
 */
/**
 * @typedef LocationCountry
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [capital]
 * @property {string} [currency]
 * @property {LocationDefaultCurrency} [default_currency]
 * @property {LocationDefaultLanguage} [default_language]
 * @property {string} [iso2]
 * @property {string} [iso3]
 * @property {string} [name]
 * @property {string} [parent]
 * @property {string} [phone_code]
 * @property {string} [type]
 * @property {number} [uid]
 */
/**
 * @typedef LocationDefaultCurrency
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [symbol]
 */
/**
 * @typedef LocationDefaultLanguage
 * @property {string} [code]
 * @property {string} [name]
 */
/**
 * @typedef Locations
 * @property {Object[]} [items]
 */
/**
 * @typedef NotFound
 * @property {string} [message]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef SecureUrl
 * @property {string} [secure_url]
 */

/**
 * @typedef AddTicketPayload
 * @property {Object} [_custom_json]
 * @property {string} category
 * @property {TicketContent} content
 * @property {Object} [created_by]
 * @property {PriorityEnum} [priority]
 * @property {string} [status]
 */
/**
 * @typedef AgentChangePayload
 * @property {string} agent_id
 */
/**
 * @typedef CategoryData
 * @property {TicketCategory} [list]
 */
/**
 * @typedef CloseVideoRoomResponse
 * @property {boolean} success
 */
/**
 * @typedef CommunicationDetails
 * @property {string} [description]
 * @property {boolean} [enabled]
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef CreateCustomFormPayload
 * @property {string} [description]
 * @property {string} [header_image]
 * @property {Object[]} inputs
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {PriorityEnum} priority
 * @property {boolean} [should_notify]
 * @property {string} slug
 * @property {string} [success_message]
 * @property {string} title
 */
/**
 * @typedef CreatedOn
 * @property {string} user_agent
 */
/**
 * @typedef CreateVideoRoomPayload
 * @property {NotifyUser[]} [notify]
 * @property {string} unique_name
 */
/**
 * @typedef CreateVideoRoomResponse
 * @property {string} unique_name
 */
/**
 * @typedef CustomForm
 * @property {string} _id
 * @property {string} application_id
 * @property {CreatedOn} [created_on]
 * @property {string} [description]
 * @property {string} [header_image]
 * @property {Object[]} inputs
 * @property {boolean} login_required
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {Priority} priority
 * @property {boolean} should_notify
 * @property {string} slug
 * @property {SubmitButton} [submit_button]
 * @property {string} [success_message]
 * @property {string} title
 */
/**
 * @typedef CustomFormList
 * @property {CustomForm[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CustomFormSubmissionPayload
 * @property {TicketAsset[]} [attachments]
 * @property {Object[]} response
 */
/**
 * @typedef Debug
 * @property {string} [platform]
 * @property {string} [source]
 */
/**
 * @typedef EditCustomFormPayload
 * @property {string} [description]
 * @property {string} [header_image]
 * @property {Object[]} inputs
 * @property {boolean} [login_required]
 * @property {PollForAssignment} [poll_for_assignment]
 * @property {PriorityEnum} priority
 * @property {boolean} [should_notify]
 * @property {string} [success_message]
 * @property {string} title
 */
/**
 * @typedef EditTicketPayload
 * @property {AgentChangePayload} [assigned_to]
 * @property {string} [category]
 * @property {TicketContent} [content]
 * @property {PriorityEnum} [priority]
 * @property {string} [source]
 * @property {string} [status]
 * @property {string} [sub_category]
 * @property {string[]} [tags]
 */
/**
 * @typedef Email
 * @property {boolean} [active]
 * @property {string} [email]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 */
/**
 * @typedef FeedbackForm
 * @property {Object} [inputs]
 * @property {Object} [timestamps]
 * @property {string} [title]
 */
/**
 * @typedef FeedbackResponseItem
 * @property {string} display
 * @property {string} key
 * @property {string} value
 */
/**
 * @typedef Filter
 * @property {Object[]} assignees
 * @property {TicketCategory[]} [categories]
 * @property {Priority[]} priorities
 * @property {Status[]} statuses
 */
/**
 * @typedef GetParticipantsInsideVideoRoomResponse
 * @property {Participant[]} participants
 */
/**
 * @typedef GetTokenForVideoRoomResponse
 * @property {string} access_token
 */
/**
 * @typedef IntegrationConfig
 * @property {string} [_id]
 * @property {boolean} allow_ticket_creation
 * @property {string} [base_url]
 * @property {CategoryData} [category_data]
 * @property {string} [category_sync_apikey]
 * @property {boolean} [config_completed]
 * @property {string} [create_ticket_apikey]
 * @property {string} integration_type
 * @property {boolean} show_listing
 * @property {string} [update_ticket_apikey]
 * @property {string} [webhook_apikey]
 */
/**
 * @typedef NotifyUser
 * @property {string} country_code
 * @property {string} phone_number
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef Participant
 * @property {string} [identity]
 * @property {string} [status]
 * @property {UserSchema} [user]
 */
/**
 * @typedef PhoneNumber
 * @property {boolean} [active]
 * @property {number} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 */
/**
 * @typedef PollForAssignment
 * @property {number} duration
 * @property {string} failure_message
 * @property {string} message
 * @property {string} success_message
 */
/**
 * @typedef Priority
 * @property {string} color
 * @property {string} display
 * @property {PriorityEnum} key
 */
/**
 * @typedef Status
 * @property {string} color
 * @property {string} display
 * @property {string} key
 */
/**
 * @typedef SubmitButton
 * @property {string} background_color
 * @property {string} title
 * @property {string} title_color
 */
/**
 * @typedef SubmitCustomFormResponse
 * @property {string} message
 * @property {Ticket} ticket
 */
/**
 * @typedef SupportGeneralConfig
 * @property {string} [_id]
 * @property {Object} [integration]
 * @property {boolean} [show_communication_info]
 * @property {boolean} [show_support_dris]
 * @property {CommunicationDetails} [support_communication]
 * @property {CommunicationDetails} [support_email]
 * @property {CommunicationDetails} [support_faq]
 * @property {CommunicationDetails} [support_phone]
 */
/**
 * @typedef Ticket
 * @property {Object} [_custom_json]
 * @property {string} _id
 * @property {Object} [assigned_to]
 * @property {string} category
 * @property {TicketContent} [content]
 * @property {TicketContext} [context]
 * @property {string} [created_at]
 * @property {Object} [created_by]
 * @property {CreatedOn} [created_on]
 * @property {Object} [integration]
 * @property {boolean} [is_feedback_pending]
 * @property {Priority} priority
 * @property {string} [response_id]
 * @property {TicketSourceEnum} source
 * @property {Status} status
 * @property {string} [sub_category]
 * @property {string[]} [tags]
 * @property {string} [updated_at]
 */
/**
 * @typedef TicketAsset
 * @property {string} [display]
 * @property {TicketAssetTypeEnum} type
 * @property {string} value
 */
/**
 * @typedef TicketCategory
 * @property {string} display
 * @property {FeedbackForm} [feedback_form]
 * @property {number} [group_id]
 * @property {string} key
 * @property {TicketCategory} [sub_categories]
 */
/**
 * @typedef TicketContent
 * @property {TicketAsset[]} [attachments]
 * @property {string} [description]
 * @property {string} title
 */
/**
 * @typedef TicketContext
 * @property {string} [application_id]
 * @property {string} company_id
 */
/**
 * @typedef TicketFeedback
 * @property {string} _id
 * @property {string} [category]
 * @property {string} company_id
 * @property {string} [created_at]
 * @property {FeedbackResponseItem[]} response
 * @property {string} ticket_id
 * @property {string} [updated_at]
 * @property {Object} [user]
 */
/**
 * @typedef TicketFeedbackForm
 * @property {Object[]} [display]
 * @property {string} title
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
 * @typedef TicketHistory
 * @property {string} _id
 * @property {string} [created_at]
 * @property {Object} [created_by]
 * @property {CreatedOn} [created_on]
 * @property {string} ticket_id
 * @property {string} type
 * @property {string} [updated_at]
 * @property {Object} value
 */
/**
 * @typedef TicketHistoryList
 * @property {TicketHistory[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TicketHistoryPayload
 * @property {HistoryTypeEnum} type
 * @property {Object} value
 */
/**
 * @typedef TicketList
 * @property {Filter} [filters]
 * @property {Ticket[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TicketSubCategory
 * @property {string} display
 * @property {string} key
 * @property {TicketSubCategory} [sub_categories]
 */
/**
 * @typedef UserSchema
 * @property {string} [_id]
 * @property {string} [account_type]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [created_at]
 * @property {Debug} [debug]
 * @property {string} [dob]
 * @property {Email[]} [emails]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {boolean} [has_old_password_hash]
 * @property {string} [last_name]
 * @property {Object} [meta]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {string} [profile_pic_url]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef AddThemeRequestSchema
 * @property {string} [theme_id]
 */
/**
 * @typedef AllAvailablePageSchema
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef AssetsSchema
 * @property {CommonJs} [common_js]
 * @property {Css} [css]
 * @property {UmdJs} [umd_js]
 */
/**
 * @typedef AvailablePagePredicate
 * @property {AvailablePageRoutePredicate} [route]
 * @property {AvailablePageScreenPredicate} [screen]
 * @property {AvailablePageUserPredicate} [user]
 */
/**
 * @typedef AvailablePageRoutePredicate
 * @property {string} [exact_url]
 * @property {Object} [query]
 * @property {string} [selected]
 */
/**
 * @typedef AvailablePageSchema
 * @property {string} [_id]
 * @property {string} [path]
 * @property {Object[]} [props]
 * @property {AvailablePageSchemaSections[]} [sections]
 * @property {AvailablePageSectionMetaAttributes[]} [sections_meta]
 * @property {AvailablePageSeo} [seo]
 * @property {string} [text]
 * @property {string} [theme]
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef AvailablePageSchemaSections
 * @property {Object[]} [blocks]
 * @property {string} [label]
 * @property {string} [name]
 * @property {AvailablePagePredicate} [predicate]
 * @property {Object} [preset]
 * @property {Object} [props]
 */
/**
 * @typedef AvailablePageScreenPredicate
 * @property {boolean} [desktop]
 * @property {boolean} [mobile]
 * @property {boolean} [tablet]
 */
/**
 * @typedef AvailablePageSectionMetaAttributes
 * @property {Object} [attributes]
 */
/**
 * @typedef AvailablePageSeo
 * @property {string} [_id]
 * @property {string} [description]
 * @property {string} [title]
 */
/**
 * @typedef AvailablePageUserPredicate
 * @property {boolean} [anonymous]
 * @property {boolean} [authenticated]
 */
/**
 * @typedef availableSectionSchema
 * @property {Blocks[]} [blocks]
 * @property {string} [label]
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 */
/**
 * @typedef BlitzkriegApiErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegInternalServerErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef BlitzkriegNotFoundSchema
 * @property {string} [message]
 */
/**
 * @typedef Blocks
 * @property {string} [name]
 * @property {BlocksProps[]} [props]
 * @property {string} [type]
 */
/**
 * @typedef BlocksProps
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */
/**
 * @typedef Bold
 * @property {string} [file]
 * @property {string} [name]
 */
/**
 * @typedef Colors
 * @property {string} [accent_color]
 * @property {string} [bg_color]
 * @property {string} [button_secondary_color]
 * @property {string} [link_color]
 * @property {string} [primary_color]
 * @property {string} [secondary_color]
 */
/**
 * @typedef CommonJs
 * @property {string} [link]
 */
/**
 * @typedef Config
 * @property {string} [current]
 * @property {GlobalSchema} [global_schema]
 * @property {ListSchemaItem[]} [list]
 * @property {Preset} [preset]
 */
/**
 * @typedef ConfigPage
 * @property {string} [page]
 * @property {Object} [settings]
 */
/**
 * @typedef Css
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef Custom
 * @property {Object} [props]
 */
/**
 * @typedef Font
 * @property {string} [family]
 * @property {Variants} [variants]
 */
/**
 * @typedef FontsSchema
 * @property {FontsSchemaItems} [items]
 * @property {string} [kind]
 */
/**
 * @typedef FontsSchemaItems
 * @property {string} [category]
 * @property {string} [family]
 * @property {FontsSchemaItemsFiles} [files]
 * @property {string} [kind]
 * @property {string} [last_modified]
 * @property {string[]} [subsets]
 * @property {string[]} [variants]
 * @property {string} [version]
 */
/**
 * @typedef FontsSchemaItemsFiles
 * @property {string} [bold]
 * @property {string} [italic]
 * @property {string} [regular]
 */
/**
 * @typedef GlobalSchema
 * @property {GlobalSchemaProps[]} [props]
 */
/**
 * @typedef GlobalSchemaProps
 * @property {string} [category]
 * @property {string} [id]
 * @property {string} [label]
 * @property {string} [type]
 */
/**
 * @typedef Images
 * @property {string[]} [android]
 * @property {string[]} [desktop]
 * @property {string[]} [ios]
 * @property {string[]} [thumbnail]
 */
/**
 * @typedef Information
 * @property {string} [description]
 * @property {string[]} [features]
 * @property {Images} [images]
 * @property {string} [name]
 */
/**
 * @typedef Light
 * @property {string} [file]
 * @property {string} [name]
 */
/**
 * @typedef ListSchemaItem
 * @property {Object} [global_config]
 * @property {string} [name]
 * @property {ConfigPage[]} [page]
 */
/**
 * @typedef Medium
 * @property {string} [file]
 * @property {string} [name]
 */
/**
 * @typedef PaginationSchema
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef Preset
 * @property {AvailablePageSchema[]} [pages]
 */
/**
 * @typedef Regular
 * @property {string} [file]
 * @property {string} [name]
 */
/**
 * @typedef Sections
 * @property {string} [attributes]
 */
/**
 * @typedef SemiBold
 * @property {string} [file]
 * @property {string} [name]
 */
/**
 * @typedef Src
 * @property {string} [link]
 */
/**
 * @typedef ThemesListingResponseSchema
 * @property {ThemesSchema[]} [items]
 * @property {PaginationSchema} [page]
 */
/**
 * @typedef ThemesSchema
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [applied]
 * @property {boolean} [archived]
 * @property {AssetsSchema} [assets]
 * @property {availableSectionSchema[]} [available_sections]
 * @property {Colors} [colors]
 * @property {Config} [config]
 * @property {string} [created_at]
 * @property {boolean} [customized]
 * @property {Font} [font]
 * @property {Information} [information]
 * @property {string} [parent_theme]
 * @property {string} [parent_theme_version]
 * @property {boolean} [published]
 * @property {Src} [src]
 * @property {Object} [styles]
 * @property {string[]} [tags]
 * @property {string} [updated_at]
 * @property {string} [version]
 */
/**
 * @typedef UmdJs
 * @property {string} [link]
 * @property {string[]} [links]
 */
/**
 * @typedef UpgradableThemeSchema
 * @property {string} [applied_theme]
 * @property {string} [parent_theme]
 * @property {boolean} [upgrade]
 */
/**
 * @typedef Variants
 * @property {Bold} [bold]
 * @property {Light} [light]
 * @property {Medium} [medium]
 * @property {Regular} [regular]
 * @property {SemiBold} [semi_bold]
 */

/**
 * @typedef Accountkit
 * @property {string} [app_id]
 */
/**
 * @typedef ArchiveUserRequestSchema
 * @property {string} [user_id]
 */
/**
 * @typedef ArchiveUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef AuthenticationApiErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef AuthenticationInternalServerErrorSchema
 * @property {string} [message]
 */
/**
 * @typedef AuthSuccess
 * @property {string} [register_token]
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 */
/**
 * @typedef AuthSuccessUser
 * @property {boolean} [active]
 * @property {AuthSuccessUserDebug} [debug]
 * @property {AuthSuccessUserEmails} [emails]
 * @property {string} [first_name]
 * @property {string} [last_name]
 */
/**
 * @typedef AuthSuccessUserDebug
 * @property {string} [platform]
 */
/**
 * @typedef AuthSuccessUserEmails
 * @property {boolean} [active]
 * @property {string} [email]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 */
/**
 * @typedef BlockUserRequestSchema
 * @property {string} [reason]
 * @property {boolean} [status]
 * @property {string[]} [user_id]
 */
/**
 * @typedef BlockUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef CodeRequestBodySchema
 * @property {string} [code]
 */
/**
 * @typedef CreateUserRequestSchema
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {Object} [meta]
 * @property {string} phone_number
 * @property {string} username
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
 * @property {Object} [cookie]
 * @property {string} [domain]
 * @property {boolean} [http_only]
 * @property {number} [max_age]
 * @property {boolean} [secure]
 */
/**
 * @typedef CustomerListResponseSchema
 * @property {UserSchema[]} [items]
 * @property {PaginationSchema} [page]
 */
/**
 * @typedef Debug
 * @property {string} [platform]
 * @property {string} [source]
 */
/**
 * @typedef DeleteAccountConsent
 * @property {string} [consent_text]
 */
/**
 * @typedef DeleteAccountReasons
 * @property {string} [reason_id]
 * @property {string} [reason_text]
 * @property {boolean} [show_text_area]
 */
/**
 * @typedef DeleteApplicationUserRequestSchema
 * @property {string} [otp]
 * @property {string} [reason]
 * @property {string} [reason_id]
 * @property {string} [request_id]
 * @property {string} [user_id]
 */
/**
 * @typedef DeleteUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef EditEmailRequestSchema
 * @property {string} [email]
 */
/**
 * @typedef EditMobileRequestSchema
 * @property {string} [country_code]
 * @property {string} [phone]
 */
/**
 * @typedef EditProfileMobileSchema
 * @property {string} [country_code]
 * @property {string} [phone]
 */
/**
 * @typedef EditProfileRequestSchema
 * @property {string} [android_hash]
 * @property {string} [country_code]
 * @property {string} [dob]
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {EditProfileMobileSchema} [mobile]
 * @property {string} [profile_pic_url]
 * @property {string} [register_token]
 * @property {string} [sender]
 */
/**
 * @typedef Email
 * @property {boolean} [active]
 * @property {string} [email]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 */
/**
 * @typedef EmailOtpSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef Facebook
 * @property {string} [app_id]
 */
/**
 * @typedef FlashCard
 * @property {string} [background_color]
 * @property {string} [text]
 * @property {string} [text_color]
 */
/**
 * @typedef ForgotPasswordRequestSchema
 * @property {string} [code]
 * @property {string} [password]
 */
/**
 * @typedef FormRegisterRequestSchema
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {string} [password]
 * @property {FormRegisterRequestSchemaPhone} [phone]
 * @property {string} [register_token]
 */
/**
 * @typedef FormRegisterRequestSchemaPhone
 * @property {string} [country_code]
 * @property {string} [mobile]
 */
/**
 * @typedef Google
 * @property {string} [app_id]
 */
/**
 * @typedef HasPasswordSuccess
 * @property {boolean} [result]
 */
/**
 * @typedef Login
 * @property {boolean} [otp]
 * @property {boolean} [password]
 */
/**
 * @typedef LoginSuccess
 * @property {string} [register_token]
 * @property {string} [request_id]
 * @property {UserSchema} [user]
 */
/**
 * @typedef LogoutSuccess
 * @property {boolean} [logout]
 */
/**
 * @typedef LookAndFeel
 * @property {string} [background_color]
 * @property {string} [card_position]
 */
/**
 * @typedef MetaSchema
 * @property {boolean} [fynd_default]
 */
/**
 * @typedef NotFoundSchema
 * @property {string} [message]
 */
/**
 * @typedef OAuthRequestAppleSchema
 * @property {OAuthRequestAppleSchemaOauth} [oauth]
 * @property {OAuthRequestAppleSchemaProfile} [profile]
 * @property {string} [user_identifier]
 */
/**
 * @typedef OAuthRequestAppleSchemaOauth
 * @property {string} [identity_token]
 */
/**
 * @typedef OAuthRequestAppleSchemaProfile
 * @property {string} [first_name]
 * @property {string} [full_name]
 * @property {string} [last_name]
 */
/**
 * @typedef OAuthRequestSchema
 * @property {boolean} [is_signed_in]
 * @property {OAuthRequestSchemaOauth2} [oauth2]
 * @property {OAuthRequestSchemaProfile} [profile]
 */
/**
 * @typedef OAuthRequestSchemaOauth2
 * @property {string} [access_token]
 * @property {number} [expiry]
 * @property {string} [refresh_token]
 */
/**
 * @typedef OAuthRequestSchemaProfile
 * @property {string} [email]
 * @property {string} [first_name]
 * @property {string} [full_name]
 * @property {string} [id]
 * @property {string} [image]
 * @property {string} [last_name]
 */
/**
 * @typedef OtpSuccess
 * @property {string} [country_code]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [register_token]
 * @property {string} [request_id]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 */
/**
 * @typedef PaginationSchema
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef PasswordLoginRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [password]
 * @property {string} [username]
 */
/**
 * @typedef PhoneNumber
 * @property {boolean} [active]
 * @property {number} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
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
 * @typedef PlatformSchema
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {Object} [delete_account_consent]
 * @property {number} [delete_account_day]
 * @property {DeleteAccountReasons[]} [delete_account_reasons]
 * @property {string} [desktop_image]
 * @property {string} [display]
 * @property {FlashCard} [flash_card]
 * @property {boolean} [forgot_password]
 * @property {Login} [login]
 * @property {LookAndFeel} [look_and_feel]
 * @property {MetaSchema} [meta]
 * @property {string} [mobile_image]
 * @property {string} [name]
 * @property {boolean} [register]
 * @property {RegisterRequiredFields} [register_required_fields]
 * @property {RequiredFields} [required_fields]
 * @property {Object} [session_config]
 * @property {boolean} [skip_captcha]
 * @property {boolean} [skip_login]
 * @property {Social} [social]
 * @property {SocialTokens} [social_tokens]
 * @property {string} [subtext]
 * @property {string} [updated_at]
 */
/**
 * @typedef ProfileEditSuccess
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [register_token]
 * @property {string} [request_id]
 * @property {string} [resend_email_token]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 */
/**
 * @typedef ProfileEditSuccessSchema
 * @property {string} [email]
 * @property {string} [register_token]
 * @property {string} [user]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_link]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 */
/**
 * @typedef RegisterFormSuccess
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [register_token]
 * @property {string} [request_id]
 * @property {string} [resend_email_token]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
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
 * @typedef RequiredFields
 * @property {PlatformEmail} [email]
 * @property {PlatformMobile} [mobile]
 */
/**
 * @typedef ResetPasswordSuccess
 * @property {string} [status]
 */
/**
 * @typedef SendEmailOtpRequestSchema
 * @property {string} [action]
 * @property {string} [email]
 * @property {string} [register_token]
 * @property {string} [token]
 */
/**
 * @typedef SendEmailVerifyLinkSuccess
 * @property {boolean} [verify_email_link]
 */
/**
 * @typedef SendMobileOtpRequestSchema
 * @property {string} [action]
 * @property {string} [android_hash]
 * @property {string} [captcha_code]
 * @property {string} [country_code]
 * @property {string} [force]
 * @property {string} [mobile]
 * @property {string} [token]
 */
/**
 * @typedef SendMobileVerifyLinkSuccess
 * @property {boolean} [verify_mobile_link]
 */
/**
 * @typedef SendOtpRequestSchema
 * @property {string} [android_hash]
 * @property {string} [captcha_code]
 * @property {string} [country_code]
 * @property {string} [mobile]
 */
/**
 * @typedef SendOtpResponse
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [register_token]
 * @property {string} [request_id]
 * @property {string} [resend_email_token]
 * @property {number} [resend_timer]
 * @property {string} [resend_token]
 * @property {boolean} [success]
 * @property {boolean} [user_exists]
 * @property {boolean} [verify_email_otp]
 * @property {boolean} [verify_mobile_otp]
 */
/**
 * @typedef SendResetPasswordEmailRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [email]
 */
/**
 * @typedef SendResetPasswordMobileRequestSchema
 * @property {string} [captcha_code]
 * @property {string} [country_code]
 * @property {string} [mobile]
 */
/**
 * @typedef SendVerificationLinkMobileRequestSchema
 * @property {boolean} [active]
 * @property {string} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 */
/**
 * @typedef SessionDeleteResponseSchema
 * @property {string[]} [items]
 */
/**
 * @typedef SessionExpiry
 * @property {number} [duration]
 * @property {boolean} [is_rolling]
 * @property {string} [type]
 */
/**
 * @typedef SessionListResponseSchema
 * @property {string[]} [items]
 */
/**
 * @typedef SessionListSuccess
 * @property {string[]} [sessions]
 */
/**
 * @typedef Social
 * @property {boolean} [account_kit]
 * @property {boolean} [apple]
 * @property {boolean} [facebook]
 * @property {boolean} [google]
 */
/**
 * @typedef SocialTokens
 * @property {Accountkit} [account_kit]
 * @property {Facebook} [facebook]
 * @property {Google} [google]
 */
/**
 * @typedef TokenRequestBodySchema
 * @property {string} [token]
 */
/**
 * @typedef UnauthenticatedSchema
 * @property {boolean} [authenticated]
 */
/**
 * @typedef UnauthorizedSchema
 * @property {string} [message]
 */
/**
 * @typedef UnDeleteUserRequestSchema
 * @property {string} [reason]
 * @property {string} [reason_id]
 * @property {string} [user_id]
 */
/**
 * @typedef UnDeleteUserSuccess
 * @property {boolean} [success]
 */
/**
 * @typedef UpdatePasswordRequestSchema
 * @property {string} [new_password]
 * @property {string} [old_password]
 */
/**
 * @typedef UpdateUserRequestSchema
 * @property {string} [external_id]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {string} [last_name]
 * @property {Object} [meta]
 */
/**
 * @typedef UserObjectSchema
 * @property {UserSchema} [user]
 */
/**
 * @typedef UserSchema
 * @property {string} [_id]
 * @property {string} [account_type]
 * @property {boolean} [active]
 * @property {string} [application_id]
 * @property {string} [created_at]
 * @property {Debug} [debug]
 * @property {string} [dob]
 * @property {Email[]} [emails]
 * @property {string} [first_name]
 * @property {string} [gender]
 * @property {boolean} [has_old_password_hash]
 * @property {string} [last_name]
 * @property {Object} [meta]
 * @property {PhoneNumber[]} [phone_numbers]
 * @property {string} [profile_pic_url]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef UserSearchResponseSchema
 * @property {UserSchema[]} [users]
 */
/**
 * @typedef VerifyEmailOtpRequestSchema
 * @property {string} [action]
 * @property {string} [email]
 * @property {string} [otp]
 * @property {string} [register_token]
 */
/**
 * @typedef VerifyEmailOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_email_link]
 */
/**
 * @typedef VerifyEmailSuccess
 * @property {string} [message]
 */
/**
 * @typedef VerifyMobileOTPSuccess
 * @property {UserSchema} [user]
 * @property {boolean} [verify_mobile_link]
 */
/**
 * @typedef VerifyOtpRequestSchema
 * @property {string} [otp]
 * @property {string} [register_token]
 * @property {string} [request_id]
 */
/**
 * @typedef VerifyOtpSuccess
 * @property {string} [register_token]
 * @property {UserSchema} [user]
 * @property {boolean} [user_exists]
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
 * @property {PageType} type
 * @property {string} [url]
 */
/**
 * @typedef AdminAnnouncementSchema
 * @property {string} [_id]
 * @property {ScheduleSchema} [_schedule]
 * @property {string} [announcement]
 * @property {string} [app]
 * @property {AnnouncementAuthorSchema} [author]
 * @property {string} [created_at]
 * @property {EditorMeta} [editor_meta]
 * @property {string} [modified_at]
 * @property {AnnouncementPageSchema[]} [pages]
 * @property {string[]} [platforms]
 * @property {string} [title]
 */
/**
 * @typedef AnnouncementAuthorSchema
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */
/**
 * @typedef AnnouncementPageSchema
 * @property {string} [page_slug]
 * @property {string} [type]
 */
/**
 * @typedef AnnouncementSchema
 * @property {string} [announcement]
 * @property {ScheduleStartSchema} [schedule]
 */
/**
 * @typedef AnnouncementsResponseSchema
 * @property {Object} [announcements]
 * @property {string[]} [refresh_pages]
 * @property {number} [refresh_rate]
 */
/**
 * @typedef ApplicationLegal
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {ApplicationLegalFAQ[]} [faq]
 * @property {string} [policy]
 * @property {string} [returns]
 * @property {string} [shipping]
 * @property {string} [tnc]
 * @property {string} [updated_at]
 */
/**
 * @typedef ApplicationLegalFAQ
 * @property {string} [answer]
 * @property {string} [question]
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
 * @typedef BlogGetResponse
 * @property {BlogSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BlogRequest
 * @property {Object} [_custom_json]
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 */
/**
 * @typedef BlogSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {Author} [author]
 * @property {ResourceContent[]} [content]
 * @property {DateMeta} [date_meta]
 * @property {Asset} [feature_image]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 */
/**
 * @typedef CategoryRequestSchema
 * @property {string} [slug]
 * @property {string} [title]
 */
/**
 * @typedef CategorySchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string[]} [children]
 * @property {string} [description]
 * @property {string} [icon_url]
 * @property {number} [index]
 * @property {string} [slug]
 * @property {string} [title]
 */
/**
 * @typedef ChildrenSchema
 * @property {string} [_id]
 * @property {string} [answer]
 * @property {string} [application]
 * @property {string} [question]
 * @property {string} [slug]
 */
/**
 * @typedef CommonError
 * @property {string} [message]
 */
/**
 * @typedef ConfigurationSchema
 * @property {number} [duration]
 * @property {number} [sleep_time]
 * @property {string} [slide_direction]
 * @property {boolean} [start_on_launch]
 */
/**
 * @typedef ContactSchema
 * @property {EmailSchema} [email]
 * @property {PhoneSchema} [phone]
 */
/**
 * @typedef ContentAPIError
 * @property {string} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
 */
/**
 * @typedef ContentSchema
 * @property {string} [type]
 * @property {Object} [value]
 */
/**
 * @typedef CreateAnnouncementSchema
 * @property {AdminAnnouncementSchema} [data]
 * @property {string} [message]
 */
/**
 * @typedef CreatedBySchema
 * @property {string} [id]
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
 * @typedef CreateFaqResponseSchema
 * @property {FaqSchema} [faq]
 */
/**
 * @typedef CreateFaqSchema
 * @property {FAQ} [faq]
 */
/**
 * @typedef CreateTagRequestSchema
 * @property {CreateTagSchema[]} [tags]
 */
/**
 * @typedef CreateTagSchema
 * @property {string} [_id]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {string} [name]
 * @property {Object[]} [pages]
 * @property {string} [position]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef CronSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef CustomMetaTag
 * @property {string} [_id]
 * @property {string} [content]
 * @property {string} [name]
 */
/**
 * @typedef CustomPage
 * @property {CustomPageSchema} [data]
 */
/**
 * @typedef CustomPageSchema
 * @property {string} [_id]
 * @property {ScheduleSchema} [_schedule]
 * @property {string} [application]
 * @property {Object[]} [content]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 */
/**
 * @typedef DataLoaderResetResponseSchema
 * @property {string} [reset]
 */
/**
 * @typedef DataLoaderResponseSchema
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [content]
 * @property {string} [name]
 * @property {string} [operation_id]
 * @property {string} [service]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef DataLoaderSchema
 * @property {DataLoaderSourceSchema} [__source]
 * @property {string} [_id]
 * @property {string} [content]
 * @property {string} [name]
 * @property {string} [operation_id]
 * @property {string} [service]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef DataLoaderSourceSchema
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef DataLoadersSchema
 * @property {DataLoaderSchema[]} [items]
 */
/**
 * @typedef DateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef DefaultNavigationResponse
 * @property {NavigationSchema[]} [items]
 */
/**
 * @typedef Detail
 * @property {string} [description]
 * @property {string} [title]
 */
/**
 * @typedef EditorMeta
 * @property {string} [background_color]
 * @property {string} [content]
 * @property {string} [content_type]
 * @property {string} [foreground_color]
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
 * @typedef FAQ
 * @property {string} [answer]
 * @property {string} [question]
 * @property {string} [slug]
 */
/**
 * @typedef FAQCategorySchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {ChildrenSchema[]} [children]
 * @property {string} [description]
 * @property {string} [icon_url]
 * @property {number} [index]
 * @property {string} [slug]
 * @property {string} [title]
 */
/**
 * @typedef FaqResponseSchema
 * @property {FaqSchema[]} [faqs]
 */
/**
 * @typedef FaqSchema
 * @property {string} [_id]
 * @property {string} [answer]
 * @property {string} [application]
 * @property {string} [question]
 * @property {string} [slug]
 * @property {string[]} [tags]
 */
/**
 * @typedef FeatureImage
 * @property {string} [secure_url]
 */
/**
 * @typedef GetAnnouncementListSchema
 * @property {AdminAnnouncementSchema[]} [items]
 * @property {Page} [page]
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
 * @typedef GetFaqSchema
 * @property {FaqSchema[]} [faqs]
 */
/**
 * @typedef HandpickedTagSchema
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {string} [name]
 * @property {string} [position]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef LandingPage
 * @property {LandingPageSchema} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef LandingPageGetResponse
 * @property {LandingPageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LandingPageSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {Action} [action]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string[]} [platform]
 * @property {string} [slug]
 */
/**
 * @typedef Language
 * @property {string} [display]
 */
/**
 * @typedef LocaleLanguage
 * @property {Language} [ar]
 * @property {Language} [en_us]
 * @property {Language} [hi]
 */
/**
 * @typedef Navigation
 * @property {string} [_id]
 * @property {string} [application]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [name]
 * @property {NavigationReference} [navigation]
 * @property {string} [orientation]
 * @property {string} [platform]
 * @property {string} [position]
 * @property {string} [slug]
 */
/**
 * @typedef NavigationGetResponse
 * @property {NavigationSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef NavigationReference
 * @property {LocaleLanguage} [_locale_language]
 * @property {string[]} [acl]
 * @property {Action} [action]
 * @property {boolean} [active]
 * @property {string} [display]
 * @property {string} [image]
 * @property {number} [sort_order]
 * @property {NavigationReference[]} [sub_navigation]
 * @property {string[]} [tags]
 * @property {string} [type]
 */
/**
 * @typedef NavigationRequest
 * @property {string} [name]
 * @property {NavigationReference[]} [navigation]
 * @property {Orientation} [orientation]
 * @property {string[]} [platform]
 * @property {string} [slug]
 */
/**
 * @typedef NavigationSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [name]
 * @property {NavigationReference[]} [navigation]
 * @property {Orientation} [orientation]
 * @property {string[]} [platform]
 * @property {string} [slug]
 * @property {number} [version]
 */
/**
 * @typedef NextSchedule
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef Orientation
 * @property {string[]} [landscape]
 * @property {string[]} [portrait]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef PageContent
 * @property {string} [type]
 * @property {Object} [value]
 */
/**
 * @typedef PageGetResponse
 * @property {PageSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PageMeta
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef PageMetaSchema
 * @property {string} [application_id]
 * @property {PageSchema[]} [custom_pages]
 * @property {NavigationSchema[]} [system_pages]
 */
/**
 * @typedef PagePublishRequest
 * @property {boolean} [publish]
 */
/**
 * @typedef PageRequest
 * @property {Object} [_custom_json]
 * @property {CronSchedule} [_schedule]
 * @property {string} [application]
 * @property {Author} [author]
 * @property {Object[]} [content]
 * @property {Asset} [feature_image]
 * @property {string} [orientation]
 * @property {boolean} [published]
 * @property {string} [reading_time]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 */
/**
 * @typedef PageSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {ScheduleSchema} [_schedule]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {string[]} [component_ids]
 * @property {Object[]} [content]
 * @property {string} [content_path]
 * @property {CreatedBySchema} [created_by]
 * @property {DateMeta} [date_meta]
 * @property {string} [description]
 * @property {Asset} [feature_image]
 * @property {string} [orientation]
 * @property {Object[]} [page_meta]
 * @property {string} [platform]
 * @property {boolean} [published]
 * @property {SEO} [seo]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [title]
 * @property {string} [type]
 * @property {Object} [visibility]
 */
/**
 * @typedef PageSpec
 * @property {Object[]} [specifications]
 */
/**
 * @typedef PageSpecItem
 * @property {string} [display_name]
 * @property {string} [page_type]
 * @property {PageSpecParam[]} [params]
 * @property {PageSpecParam[]} [query]
 */
/**
 * @typedef PageSpecParam
 * @property {string} [key]
 * @property {boolean} [required]
 */
/**
 * @typedef PathMappingSchema
 * @property {TagSourceSchema} [__source]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [updated_at]
 */
/**
 * @typedef PhoneProperties
 * @property {string} [code]
 * @property {string} [key]
 * @property {string} [number]
 */
/**
 * @typedef PhoneSchema
 * @property {boolean} [active]
 * @property {PhoneProperties[]} [phone]
 */
/**
 * @typedef RemoveHandpickedSchema
 * @property {string[]} [tags]
 */
/**
 * @typedef ResourceContent
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef ScheduleSchema
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {string} [start]
 */
/**
 * @typedef ScheduleStartSchema
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef SEO
 * @property {string} [description]
 * @property {SEOImage} [image]
 * @property {string} [title]
 */
/**
 * @typedef SeoComponent
 * @property {SeoSchema} [seo]
 */
/**
 * @typedef SEOImage
 * @property {string} [url]
 */
/**
 * @typedef SeoSchema
 * @property {string} [_id]
 * @property {string} [app]
 * @property {string} [created_at]
 * @property {Object[]} [custom_meta_tags]
 * @property {Detail} [details]
 * @property {string} [robots_txt]
 * @property {boolean} [sitemap_enabled]
 * @property {string} [updated_at]
 */
/**
 * @typedef Slideshow
 * @property {SlideshowSchema} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef SlideshowGetResponse
 * @property {SlideshowSchema[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SlideshowMedia
 * @property {Action} [action]
 * @property {boolean} [auto_decide_duration]
 * @property {string} [bg_color]
 * @property {number} [duration]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef SlideshowRequest
 * @property {boolean} [active]
 * @property {ConfigurationSchema} [configuration]
 * @property {SlideshowMedia} [media]
 * @property {string} [platform]
 * @property {string} [slug]
 */
/**
 * @typedef SlideshowSchema
 * @property {Object} [_custom_json]
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {string} [application]
 * @property {boolean} [archived]
 * @property {ConfigurationSchema} [configuration]
 * @property {DateMeta} [date_meta]
 * @property {SlideshowMedia[]} [media]
 * @property {string} [platform]
 * @property {string} [slug]
 */
/**
 * @typedef Support
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [config_type]
 * @property {ContactSchema} [contact]
 * @property {boolean} [created]
 * @property {string} [created_at]
 * @property {string} [updated_at]
 */
/**
 * @typedef TagDeleteSuccessResponse
 * @property {boolean} [success]
 */
/**
 * @typedef TagSchema
 * @property {TagSourceSchema} [__source]
 * @property {string} [_id]
 * @property {Object} [attributes]
 * @property {string} [content]
 * @property {string} [name]
 * @property {Object[]} [pages]
 * @property {string} [position]
 * @property {string} [sub_type]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef TagSourceSchema
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef TagsSchema
 * @property {string} [_id]
 * @property {string} [application]
 * @property {TagSchema[]} [tags]
 */
/**
 * @typedef UpdateFaqCategoryRequestSchema
 * @property {CategorySchema} [category]
 */
/**
 * @typedef UpdateHandpickedSchema
 * @property {HandpickedTagSchema} [tag]
 */

/**
 * @typedef BadRequest
 * @property {string} [message]
 */
/**
 * @typedef CancelSubscriptionReq
 * @property {string} [product_suite]
 * @property {string} [subscription_id]
 * @property {string} [type]
 * @property {string} [unique_id]
 */
/**
 * @typedef CancelSubscriptionRes
 * @property {Subscription} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef ChargeLineItem
 * @property {number} [capped_amount]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 * @property {string} name
 * @property {EntityChargePrice} price
 * @property {string} pricing_type
 * @property {EntityChargeRecurring} [recurring]
 * @property {string} term
 * @property {number} [trial_days]
 */
/**
 * @typedef CheckValidityResponse
 * @property {number} [discount_amount]
 * @property {boolean} [is_valid]
 */
/**
 * @typedef CreateSubscriptionCharge
 * @property {boolean} [is_test]
 * @property {ChargeLineItem[]} line_items
 * @property {string} name
 * @property {string} return_url
 * @property {number} [trial_days]
 */
/**
 * @typedef CreateSubscriptionResponse
 * @property {string} [confirm_url]
 * @property {EntitySubscription} [subscription]
 */
/**
 * @typedef CurrentPeriod
 * @property {string} [end_date]
 * @property {string} [start_date]
 */
/**
 * @typedef DetailedPlan
 * @property {string} [_id]
 * @property {string[]} [addons]
 * @property {number} [amount]
 * @property {DetailedPlanComponents[]} [components]
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_trial_plan]
 * @property {boolean} [is_visible]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [plan_group]
 * @property {string} [product_suite_id]
 * @property {PlanRecurring} [recurring]
 * @property {string[]} [tag_lines]
 * @property {string[]} [tags]
 * @property {number} [trial_period]
 * @property {string} [type]
 */
/**
 * @typedef DetailedPlanComponents
 * @property {string} [description]
 * @property {string} [display_text]
 * @property {boolean} [enabled]
 * @property {string} [group]
 * @property {string} [icon]
 * @property {Object} [links]
 * @property {string} [name]
 * @property {string} [slug]
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
 * @typedef EntitySubscription
 * @property {string} [_id]
 * @property {string} [activated_on]
 * @property {string} [cancelled_on]
 * @property {number} [company_id]
 * @property {SubscriptionCharge[]} [line_items]
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {string} [status]
 * @property {number} [trial_days]
 * @property {SubscriptionTrialPeriod} [trial_period]
 */
/**
 * @typedef InternalServerError
 * @property {string} [code]
 * @property {string} [message]
 */
/**
 * @typedef Invoice
 * @property {InvoiceDetails} [invoice]
 * @property {InvoiceItems[]} [invoice_items]
 */
/**
 * @typedef InvoiceDetails
 * @property {string} [_id]
 * @property {number} [attemp]
 * @property {boolean} [auto_advance]
 * @property {InvoiceDetailsClient} [client]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [current_status]
 * @property {string} [hash_identifier]
 * @property {string} [invoice_url]
 * @property {string} [modified_at]
 * @property {string} [next_action_time]
 * @property {string} [number]
 * @property {boolean} [paid]
 * @property {InvoicePaymentMethod} [payment_method]
 * @property {InvoiceDetailsPeriod} [period]
 * @property {Object} [pg_data]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {string} [subscriber_id]
 * @property {string} [subscription]
 * @property {number} [subtotal]
 * @property {number} [total]
 */
/**
 * @typedef InvoiceDetailsClient
 * @property {string[]} [address_lines]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [phone]
 */
/**
 * @typedef InvoiceDetailsPaymentMethods
 * @property {InvoiceDetailsPaymentMethodsData} [data]
 * @property {number} [id]
 * @property {boolean} [is_default]
 * @property {string} [pg_payment_method_id]
 * @property {string} [type]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsData
 * @property {string} [brand]
 * @property {InvoiceDetailsPaymentMethodsDataChecks} [checks]
 * @property {string} [country]
 * @property {number} [exp_month]
 * @property {number} [exp_year]
 * @property {string} [fingerprint]
 * @property {string} [funding]
 * @property {string} [generated_from]
 * @property {string} [last4]
 * @property {InvoiceDetailsPaymentMethodsDataNetworks} [networks]
 * @property {InvoiceDetailsPaymentMethodsDataThreeDSecureUsage} [three_d_secure_usage]
 * @property {string} [wallet]
 */
/**
 * @typedef InvoiceDetailsPaymentMethodsDataChecks
 * @property {string} [address_line1_check]
 * @property {string} [address_postal_code_check]
 * @property {string} [cvc_check]
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
 * @typedef InvoiceDetailsPeriod
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef InvoiceDetailsStatusTrail
 * @property {string} [_id]
 * @property {string} [timestamp]
 * @property {string} [value]
 */
/**
 * @typedef InvoiceItems
 * @property {string} [_id]
 * @property {number} [amount]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [description]
 * @property {string} [invoice_id]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {InvoiceItemsPeriod} [period]
 * @property {InvoiceItemsPlan} [plan]
 * @property {number} [quantity]
 * @property {string} [type]
 * @property {number} [unit_amount]
 */
/**
 * @typedef InvoiceItemsPeriod
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef InvoiceItemsPlan
 * @property {string} [_id]
 * @property {string[]} [addons]
 * @property {number} [amount]
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_trial_plan]
 * @property {boolean} [is_visible]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [plan_group]
 * @property {string} [product_suite_id]
 * @property {InvoiceItemsPlanRecurring} [recurring]
 * @property {string[]} [tag_lines]
 * @property {string[]} [tags]
 * @property {number} [trial_period]
 * @property {string} [type]
 */
/**
 * @typedef InvoiceItemsPlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef InvoicePaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef Invoices
 * @property {InvoicesData[]} [data]
 * @property {number} [end]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {number} [start]
 * @property {number} [total]
 */
/**
 * @typedef InvoicesData
 * @property {string} [_id]
 * @property {number} [attemp]
 * @property {boolean} [auto_advance]
 * @property {InvoicesDataClient} [client]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [current_status]
 * @property {string} [hash_identifier]
 * @property {InvoiceItems[]} [invoice_items]
 * @property {string} [invoice_url]
 * @property {string} [modified_at]
 * @property {string} [next_action_time]
 * @property {string} [number]
 * @property {boolean} [paid]
 * @property {InvoicesDataPaymentMethod} [payment_method]
 * @property {InvoicesDataPeriod} [period]
 * @property {Object} [pg_data]
 * @property {string} [receipt_number]
 * @property {string} [statement_descriptor]
 * @property {InvoiceDetailsStatusTrail[]} [status_trail]
 * @property {string} [subscriber_id]
 * @property {string} [subscription]
 * @property {number} [subtotal]
 * @property {number} [total]
 */
/**
 * @typedef InvoicesDataClient
 * @property {string[]} [address_lines]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [phone]
 */
/**
 * @typedef InvoicesDataPaymentMethod
 * @property {string} [pg_payment_method_id]
 */
/**
 * @typedef InvoicesDataPeriod
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef Phone
 * @property {string} [phone_country_code]
 * @property {string} [phone_number]
 */
/**
 * @typedef Plan
 * @property {string} [_id]
 * @property {string[]} [addons]
 * @property {number} [amount]
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_trial_plan]
 * @property {boolean} [is_visible]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {string} [plan_group]
 * @property {string} [product_suite_id]
 * @property {PlanRecurring} [recurring]
 * @property {string[]} [tag_lines]
 * @property {string[]} [tags]
 * @property {number} [trial_period]
 * @property {string} [type]
 */
/**
 * @typedef PlanRecurring
 * @property {string} [interval]
 * @property {number} [interval_count]
 */
/**
 * @typedef ResourceNotFound
 * @property {string} [message]
 */
/**
 * @typedef Subscription
 * @property {string} [_id]
 * @property {boolean} [cancel_at_period_end]
 * @property {string} [collection_method]
 * @property {string} [created_at]
 * @property {SubscriptionCurrentPeriod} [current_period]
 * @property {string} [current_status]
 * @property {SubscriptionInvoiceSettings} [invoice_settings]
 * @property {boolean} [is_active]
 * @property {string} [latest_invoice]
 * @property {string} [modified_at]
 * @property {SubscriptionPauseCollection} [pause_collection]
 * @property {Plan} [plan_data]
 * @property {string} [plan_id]
 * @property {string} [product_suite_id]
 * @property {string} [subscriber_id]
 * @property {SubscriptionTrial} [trial]
 */
/**
 * @typedef SubscriptionActivateReq
 * @property {string} [payment_method]
 * @property {string} [plan_id]
 * @property {string} [product_suite]
 * @property {string} [type]
 * @property {string} [unique_id]
 */
/**
 * @typedef SubscriptionActivateRes
 * @property {Subscription} [data]
 * @property {boolean} [success]
 */
/**
 * @typedef SubscriptionBillingAddress
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [line1]
 * @property {string} [line2]
 * @property {string} [postal_code]
 * @property {string} [state]
 */
/**
 * @typedef SubscriptionCharge
 * @property {string} [_id]
 * @property {string} [activated_on]
 * @property {string} [billing_date]
 * @property {string} [cancelled_on]
 * @property {number} [capped_amount]
 * @property {CurrentPeriod} [current_period]
 * @property {boolean} [is_test]
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {EntityChargePrice} [price]
 * @property {string} [pricing_type]
 * @property {EntityChargeRecurring} [recurring]
 * @property {string} [status]
 * @property {string} [term]
 */
/**
 * @typedef SubscriptionCurrentPeriod
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef SubscriptionCustomer
 * @property {string} [_id]
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [created_at]
 * @property {Object} [data]
 * @property {string} [email]
 * @property {string} [modified_at]
 * @property {string} [name]
 * @property {Phone} [phone]
 * @property {string} [type]
 * @property {string} [unique_id]
 */
/**
 * @typedef SubscriptionCustomerCreate
 * @property {SubscriptionBillingAddress} [billing_address]
 * @property {string} [email]
 * @property {string} [name]
 * @property {Phone} [phone]
 * @property {string} [type]
 * @property {string} [unique_id]
 */
/**
 * @typedef SubscriptionInvoiceSettings
 * @property {boolean} [charging]
 * @property {boolean} [generation]
 */
/**
 * @typedef SubscriptionLimit
 * @property {SubscriptionLimitApplication} [application]
 * @property {SubscriptionLimitExtensions} [extensions]
 * @property {SubscriptionLimitIntegrations} [integrations]
 * @property {boolean} [is_trial_plan]
 * @property {SubscriptionLimitMarketplace} [marketplace]
 * @property {SubscriptionLimitOtherPlatform} [other_platform]
 * @property {SubscriptionLimitProducts} [products]
 * @property {SubscriptionLimitTeam} [team]
 */
/**
 * @typedef SubscriptionLimitApplication
 * @property {boolean} [enabled]
 * @property {number} [hard_limit]
 * @property {number} [soft_limit]
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
 * @typedef SubscriptionLimitMarketplace
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitOtherPlatform
 * @property {boolean} [enabled]
 */
/**
 * @typedef SubscriptionLimitProducts
 * @property {boolean} [bulk]
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionLimitTeam
 * @property {number} [limit]
 */
/**
 * @typedef SubscriptionPauseCollection
 * @property {string} [behavior]
 * @property {string} [resume_at]
 */
/**
 * @typedef SubscriptionStatus
 * @property {boolean} [is_enabled]
 * @property {Subscription} [subscription]
 */
/**
 * @typedef SubscriptionTrial
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef SubscriptionTrialPeriod
 * @property {string} [end_date]
 * @property {string} [start_date]
 */
/**
 * @typedef UnauthenticatedApplication
 * @property {string} [message]
 */
/**
 * @typedef UnauthenticatedUser
 * @property {string} [message]
 */

/**
 * @typedef Audience
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [file_url]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {number} [records_count]
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string} [updated_at]
 */
/**
 * @typedef AudienceReq
 * @property {string} [application]
 * @property {string} [description]
 * @property {string} [file_url]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {number} [records_count]
 * @property {string[]} [tags]
 * @property {string} [type]
 */
/**
 * @typedef Audiences
 * @property {Audience[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BadRequestSchema
 * @property {string} [message]
 * @property {string} [status]
 */
/**
 * @typedef BigqueryHeadersReq
 * @property {string} [query]
 * @property {string} [type]
 */
/**
 * @typedef BigqueryHeadersRes
 * @property {BigqueryHeadersResHeaders[]} [headers]
 */
/**
 * @typedef BigqueryHeadersResHeaders
 * @property {string} [name]
 * @property {string} [type]
 */
/**
 * @typedef Campaign
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [datasource]
 * @property {string} [description]
 * @property {CampaignEmail} [email]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {RecipientHeaders} [recipient_headers]
 * @property {string} [slug]
 * @property {Object[]} [tags]
 * @property {string} [type]
 * @property {string} [updated_at]
 */
/**
 * @typedef CampaignEmail
 * @property {CampignEmailProvider} [provider]
 * @property {CampaignEmailTemplate} [template]
 */
/**
 * @typedef CampaignEmailTemplate
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef CampaignReq
 * @property {string} [application]
 * @property {string} [description]
 * @property {string} [file_url]
 * @property {string[]} [headers]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {number} [records_count]
 * @property {string[]} [tags]
 * @property {string} [type]
 */
/**
 * @typedef Campaigns
 * @property {Campaign[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CampignEmailProvider
 * @property {string} [_id]
 * @property {string} [from_email]
 * @property {string} [from_name]
 */
/**
 * @typedef EmailProvider
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [api_key]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {EmailProviderReqFrom[]} [from_address]
 * @property {string} [name]
 * @property {string} [provider]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [updated_at]
 */
/**
 * @typedef EmailProviderReq
 * @property {string} [api_key]
 * @property {string} [description]
 * @property {EmailProviderReqFrom[]} [from_address]
 * @property {string} [name]
 * @property {string} [provider]
 * @property {string} [type]
 */
/**
 * @typedef EmailProviderReqFrom
 * @property {string} [email]
 * @property {boolean} [is_default]
 * @property {string} [name]
 */
/**
 * @typedef EmailProviders
 * @property {EmailProvider[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EmailTemplate
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [from_name]
 * @property {Object[]} [headers]
 * @property {TemplateAndType} [html]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_to]
 * @property {TemplateAndType} [subject]
 * @property {Object[]} [tags]
 * @property {TemplateAndType} [text]
 * @property {string} [updated_at]
 */
/**
 * @typedef EmailTemplateDeleteFailureRes
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef EmailTemplateDeleteSuccessRes
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef EmailTemplateHeaders
 * @property {string} [key]
 * @property {string} [value]
 */
/**
 * @typedef EmailTemplateKeys
 * @property {string} [bcc]
 * @property {string} [cc]
 * @property {string} [to]
 */
/**
 * @typedef EmailTemplateReq
 * @property {Object[]} [attachments]
 * @property {string} [description]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [html]
 * @property {EmailTemplateKeys} [keys]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {string} [reply_to]
 * @property {string[]} [static_bcc]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_to]
 * @property {TemplateAndType} [subject]
 * @property {TemplateAndType} [text]
 */
/**
 * @typedef EmailTemplateRes
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {EmailTemplateHeaders[]} [headers]
 * @property {TemplateAndType} [html]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {EmailTemplateKeys} [keys]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [reply_to]
 * @property {string} [slug]
 * @property {string[]} [static_bcc]
 * @property {string[]} [static_cc]
 * @property {string[]} [static_to]
 * @property {TemplateAndType} [subject]
 * @property {Object[]} [tags]
 * @property {TemplateAndType} [text]
 * @property {string} [updated_at]
 */
/**
 * @typedef EmailTemplates
 * @property {EmailTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EngineRequest
 * @property {MetaStructure} [meta]
 * @property {PayloadStructure} [payload]
 */
/**
 * @typedef EngineResponse
 * @property {boolean} [success]
 */
/**
 * @typedef EventSubscription
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {string} [event]
 * @property {boolean} [is_default]
 * @property {string} [slug]
 * @property {EventSubscriptionTemplate} [template]
 * @property {string} [updated_at]
 */
/**
 * @typedef EventSubscriptions
 * @property {EventSubscription[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef EventSubscriptionTemplate
 * @property {EventSubscriptionTemplateEmail} [email]
 * @property {EventSubscriptionTemplateSms} [sms]
 */
/**
 * @typedef EventSubscriptionTemplateEmail
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */
/**
 * @typedef EventSubscriptionTemplateSms
 * @property {boolean} [subscribed]
 * @property {string} [template]
 */
/**
 * @typedef GetNRecordsCsvReq
 * @property {number} [count]
 * @property {boolean} [header]
 * @property {string} [url]
 */
/**
 * @typedef GetNRecordsCsvRes
 * @property {GetNRecordsCsvResItems[]} [items]
 */
/**
 * @typedef GetNRecordsCsvResItems
 * @property {string} [email]
 * @property {string} [firstname]
 * @property {string} [lastname]
 * @property {string} [orderid]
 * @property {string} [phone_number]
 */
/**
 * @typedef GetStats
 * @property {Stats[]} [items]
 */
/**
 * @typedef Job
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [campaign]
 * @property {boolean} [completed]
 * @property {string} [created_at]
 * @property {boolean} [is_active]
 * @property {string} [updated_at]
 */
/**
 * @typedef JobLog
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [campaign]
 * @property {string} [created_at]
 * @property {Object} [imported]
 * @property {string} [job]
 * @property {Object} [processed]
 * @property {string} [updated_at]
 */
/**
 * @typedef JobLogs
 * @property {JobLog[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Jobs
 * @property {Job[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Log
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {Object} [data]
 * @property {LogEmail} [email]
 * @property {string} [expire_at]
 * @property {LogMeta} [meta]
 * @property {LogPushnotification} [pushnotification]
 * @property {string} [service]
 * @property {string} [status]
 * @property {string} [step]
 */
/**
 * @typedef LogEmail
 * @property {string} [template]
 */
/**
 * @typedef LogMeta
 * @property {string} [identifier]
 * @property {string} [key]
 * @property {string} [offset]
 * @property {string} [partition]
 * @property {string} [topic]
 * @property {string} [type]
 */
/**
 * @typedef LogPushnotification
 * @property {string[]} [pushtokens]
 */
/**
 * @typedef Logs
 * @property {Log[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef MetaStructure
 * @property {string} [action]
 * @property {string} [job_type]
 * @property {string} [timestamp]
 * @property {string} [trace]
 */
/**
 * @typedef NotFound
 * @property {string} [message]
 */
/**
 * @typedef Notification
 * @property {string} [body]
 * @property {string} [click_action]
 * @property {string} [deeplink]
 * @property {string} [icon]
 * @property {string} [subtitle]
 * @property {string} [title]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef PayloadEmailProviderStructure
 * @property {string} [_id]
 */
/**
 * @typedef PayloadEmailStructure
 * @property {PayloadEmailProviderStructure} [provider]
 * @property {PayloadEmailTemplateStructure} [template]
 */
/**
 * @typedef PayloadEmailTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef PayloadSmsProviderStructure
 * @property {string} [_id]
 */
/**
 * @typedef PayloadSmsStructure
 * @property {PayloadSmsProviderStructure} [provider]
 * @property {PayloadSmsTemplateStructure} [template]
 */
/**
 * @typedef PayloadSmsTemplateStructure
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef PayloadStructure
 * @property {string} [application]
 * @property {Object[]} [data]
 * @property {PayloadEmailStructure} [email]
 * @property {PayloadSmsStructure} [sms]
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
 * @property {string} [application_id]
 * @property {string} [bundle_identifier]
 * @property {string} [created_at]
 * @property {string} [expired_at]
 * @property {string} [platform]
 * @property {string} [push_token]
 * @property {string} [type]
 * @property {string} [unique_device_id]
 * @property {string} [updated_at]
 * @property {string} [user_id]
 */
/**
 * @typedef RecipientHeaders
 * @property {string} [email]
 */
/**
 * @typedef SendOtpCommsReq
 * @property {SendOtpCommsReqData} [data]
 * @property {SendOtpCommsReqEmail} [email]
 * @property {SendOtpCommsReqSms} [sms]
 */
/**
 * @typedef SendOtpCommsReqData
 * @property {string} [country_code]
 * @property {string} [mobile]
 * @property {boolean} [send_same_otp_to_channel]
 * @property {string} [to]
 */
/**
 * @typedef SendOtpCommsReqEmail
 * @property {number} [expiry]
 * @property {number} [otp_length]
 * @property {SendOtpEmailCommsProvider} [provider]
 * @property {SendOtpEmailCommsTemplate} [template]
 */
/**
 * @typedef SendOtpCommsReqSms
 * @property {number} [expiry]
 * @property {number} [otp_length]
 * @property {SendOtpSmsCommsProvider} [provider]
 * @property {SendOtpSmsCommsTemplate} [template]
 */
/**
 * @typedef SendOtpCommsRes
 * @property {SendOtpCommsResEmail} [email]
 * @property {SendOtpCommsResSms} [sms]
 */
/**
 * @typedef SendOtpCommsResEmail
 * @property {string} [message]
 * @property {string} [request_id]
 * @property {number} [resend_timer]
 * @property {boolean} [success]
 * @property {string} [to]
 */
/**
 * @typedef SendOtpCommsResSms
 * @property {string} [country_code]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {string} [request_id]
 * @property {number} [resend_timer]
 * @property {boolean} [success]
 */
/**
 * @typedef SendOtpEmailCommsProvider
 * @property {string} [_id]
 * @property {string} [slug]
 */
/**
 * @typedef SendOtpEmailCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef SendOtpSmsCommsProvider
 * @property {string} [_id]
 * @property {string} [slug]
 */
/**
 * @typedef SendOtpSmsCommsTemplate
 * @property {string} [key]
 * @property {Object} [value]
 */
/**
 * @typedef SmsProvider
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [authkey]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [provider]
 * @property {number} [rpt]
 * @property {string} [sender]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {string} [updated_at]
 * @property {string} [username]
 */
/**
 * @typedef SmsProviderReq
 * @property {string} [authkey]
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [provider]
 * @property {string} [sender]
 * @property {string} [type]
 * @property {string} [username]
 */
/**
 * @typedef SmsProviders
 * @property {SmsProvider[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SmsTemplate
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {SmsTemplateMessage} [message]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {Object[]} [tags]
 * @property {Object} [template_variables]
 * @property {string} [updated_at]
 */
/**
 * @typedef SmsTemplateDeleteFailureRes
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef SmsTemplateDeleteSuccessRes
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef SmsTemplateMessage
 * @property {string} [template]
 * @property {string} [template_type]
 */
/**
 * @typedef SmsTemplateReq
 * @property {Object[]} [attachments]
 * @property {string} [description]
 * @property {SmsTemplateMessage} [message]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {Object} [template_variables]
 */
/**
 * @typedef SmsTemplateRes
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {SmsTemplateMessage} [message]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {Object[]} [tags]
 * @property {Object} [template_variables]
 * @property {string} [updated_at]
 */
/**
 * @typedef SmsTemplates
 * @property {SmsTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Stats
 * @property {string} [_id]
 * @property {Object} [imported]
 * @property {Object} [processed]
 */
/**
 * @typedef StatsImported
 * @property {number} [count]
 */
/**
 * @typedef StatsProcessed
 * @property {StatsProcessedEmail} [email]
 * @property {StatsProcessedSms} [sms]
 */
/**
 * @typedef StatsProcessedEmail
 * @property {number} [failed]
 * @property {number} [success]
 * @property {number} [suppressed]
 */
/**
 * @typedef StatsProcessedSms
 * @property {number} [failed]
 * @property {number} [success]
 * @property {number} [suppressed]
 */
/**
 * @typedef SystemEmailTemplate
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {Object[]} [attachments]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [from_name]
 * @property {Object[]} [headers]
 * @property {TemplateAndType} [html]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {Object[]} [static_bcc]
 * @property {Object[]} [static_cc]
 * @property {Object[]} [static_to]
 * @property {TemplateAndType} [subject]
 * @property {Object[]} [tags]
 * @property {TemplateAndType} [text]
 * @property {string} [updated_at]
 */
/**
 * @typedef SystemEmailTemplates
 * @property {SystemEmailTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SystemNotification
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [group]
 * @property {Notification} [notification]
 * @property {SystemNotificationUser} [settings]
 * @property {SystemNotificationUser} [user]
 */
/**
 * @typedef SystemNotifications
 * @property {SystemNotification[]} [items]
 * @property {number} [last_read_anchor]
 * @property {Page} [page]
 */
/**
 * @typedef SystemNotificationSettings
 * @property {string} [priority]
 * @property {boolean} [sound]
 * @property {string} [time_to_live]
 */
/**
 * @typedef SystemNotificationsPage
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [type]
 */
/**
 * @typedef SystemNotificationUser
 * @property {string} [type]
 * @property {string} [value]
 */
/**
 * @typedef SystemSmsTemplate
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [is_internal]
 * @property {boolean} [is_system]
 * @property {SmsTemplateMessage} [message]
 * @property {string} [name]
 * @property {string} [priority]
 * @property {boolean} [published]
 * @property {string} [slug]
 * @property {Object[]} [tags]
 * @property {Object} [template_variables]
 * @property {string} [updated_at]
 */
/**
 * @typedef SystemSmsTemplates
 * @property {SystemSmsTemplate[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TemplateAndType
 * @property {string} [template]
 * @property {string} [template_type]
 */
/**
 * @typedef TriggerJobRequest
 * @property {string} [job_id]
 */
/**
 * @typedef TriggerJobResponse
 * @property {number} [status]
 */
/**
 * @typedef VerifyOtpCommsErrorRes
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef VerifyOtpCommsReq
 * @property {string} [otp]
 * @property {string} [request_id]
 */
/**
 * @typedef VerifyOtpCommsSuccessRes
 * @property {string} [country_code]
 * @property {string} [message]
 * @property {string} [mobile]
 * @property {boolean} [success]
 */

/**
 * @typedef AddBeneficiaryDetailsRequest
 * @property {boolean} delights
 * @property {BeneficiaryModeDetails} details
 * @property {string} order_id
 * @property {string} [otp]
 * @property {string} [request_id]
 * @property {string} shipment_id
 * @property {string} transfer_mode
 */
/**
 * @typedef BeneficiaryModeDetails
 * @property {string} account_holder
 * @property {string} account_no
 * @property {string} [address]
 * @property {string} bank_name
 * @property {string} branch_name
 * @property {string} [comment]
 * @property {string} email
 * @property {string} ifsc_code
 * @property {string} mobile
 * @property {string} [vpa]
 * @property {string} [wallet]
 */
/**
 * @typedef DeletePayoutResponse
 * @property {boolean} success
 */
/**
 * @typedef DeleteSubscriptionPaymentMethodResponse
 * @property {boolean} success
 */
/**
 * @typedef ErrorCodeAndDescription
 * @property {string} code
 * @property {string} description
 */
/**
 * @typedef ErrorCodeDescription
 * @property {string} code
 * @property {string} description
 * @property {boolean} success
 */
/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} error
 * @property {boolean} success
 */
/**
 * @typedef IfscCodeResponse
 * @property {string} bank_name
 * @property {string} branch_name
 * @property {boolean} [success]
 */
/**
 * @typedef IntentApp
 * @property {string} [code]
 * @property {string} [display_name]
 * @property {PaymentModeLogo} [logos]
 * @property {string} [package_name]
 */
/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
 */
/**
 * @typedef NotFoundResourceError
 * @property {string} code
 * @property {string} description
 * @property {boolean} success
 */
/**
 * @typedef OrderBeneficiaryDetails
 * @property {string} account_holder
 * @property {string} account_no
 * @property {string} address
 * @property {string} bank_name
 * @property {string} beneficiary_id
 * @property {string} [branch_name]
 * @property {string} [comment]
 * @property {string} created_on
 * @property {string} [delights_user_name]
 * @property {string} display_name
 * @property {string} email
 * @property {number} id
 * @property {string} ifsc_code
 * @property {boolean} is_active
 * @property {string} [mobile]
 * @property {string} modified_on
 * @property {string} subtitle
 * @property {string} title
 * @property {string} transfer_mode
 */
/**
 * @typedef OrderBeneficiaryResponse
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 * @property {boolean} [show_beneficiary_details]
 */
/**
 * @typedef PaymentConfirmationMode
 * @property {number} amount
 * @property {Object} [meta]
 * @property {string} mode
 * @property {string} [name]
 */
/**
 * @typedef PaymentConfirmationRequest
 * @property {string} order_id
 * @property {PaymentConfirmationMode[]} payment_methods
 */
/**
 * @typedef PaymentConfirmationResponse
 * @property {string} message
 * @property {string} order_id
 * @property {boolean} success
 */
/**
 * @typedef PaymentGatewayConfig
 * @property {string} config_type
 * @property {boolean} [is_active]
 * @property {string} key
 * @property {string} merchant_salt
 * @property {string} secret
 */
/**
 * @typedef PaymentGatewayConfigRequest
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {string} app_id
 * @property {boolean} [is_active]
 */
/**
 * @typedef PaymentGatewayConfigResponse
 * @property {Object[]} [aggregators]
 * @property {string} app_id
 * @property {boolean} created
 * @property {string[]} display_fields
 * @property {string[]} excluded_fields
 * @property {boolean} success
 */
/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {string[]} aggregator
 * @property {boolean} success
 */
/**
 * @typedef PaymentModeList
 * @property {string} aggregator_name
 * @property {string} [card_brand]
 * @property {string} [card_brand_image]
 * @property {string} [card_fingerprint]
 * @property {string} [card_id]
 * @property {string} [card_isin]
 * @property {string} [card_issuer]
 * @property {string} [card_name]
 * @property {string} [card_number]
 * @property {string} [card_reference]
 * @property {string} [card_token]
 * @property {string} [card_type]
 * @property {string} [code]
 * @property {string} [display_name]
 * @property {number} [display_priority]
 * @property {number} [exp_month]
 * @property {number} [exp_year]
 * @property {boolean} [expired]
 * @property {string} [fynd_vpa]
 * @property {IntentApp[]} [intent_app]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {string[]} [intent_app_error_list]
 * @property {boolean} [intent_flow]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string} [merchant_code]
 * @property {string} [name]
 * @property {string} [nickname]
 * @property {number} [retry_count]
 * @property {number} [timeout]
 */
/**
 * @typedef PaymentModeLogo
 * @property {string} large
 * @property {string} small
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
 * @typedef PayoutBankDetails
 * @property {string} [account_holder]
 * @property {string} [account_no]
 * @property {string} account_type
 * @property {string} [bank_name]
 * @property {string} [branch_name]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} ifsc_code
 * @property {number} [pincode]
 * @property {string} [state]
 */
/**
 * @typedef PayoutRequest
 * @property {string} aggregator
 * @property {PayoutBankDetails} bank_details
 * @property {boolean} is_active
 * @property {string} transfer_type
 * @property {string} unique_external_id
 * @property {Object} users
 */
/**
 * @typedef PayoutResponse
 * @property {string} aggregator
 * @property {Object} bank_details
 * @property {boolean} created
 * @property {boolean} is_active
 * @property {string} payment_status
 * @property {Object} payouts
 * @property {boolean} success
 * @property {string} transfer_type
 * @property {string} unique_transfer_no
 * @property {Object} users
 */
/**
 * @typedef PayoutsResponse
 * @property {Object} customers
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {Object} more_attributes
 * @property {Object[]} payouts_aggregators
 * @property {string} transfer_type
 * @property {Object} unique_transfer_no
 */
/**
 * @typedef RefundAccountResponse
 * @property {Object} [data]
 * @property {boolean} [is_verified_flag]
 * @property {string} message
 * @property {boolean} success
 */
/**
 * @typedef RootPaymentMode
 * @property {boolean} [add_card_enabled]
 * @property {string} [aggregator_name]
 * @property {boolean} [anonymous_enable]
 * @property {string} display_name
 * @property {number} display_priority
 * @property {PaymentModeList[]} [list]
 * @property {string} name
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
 * @typedef SubscriptionConfigResponse
 * @property {string} aggregator
 * @property {Object} config
 * @property {boolean} success
 */
/**
 * @typedef SubscriptionPaymentMethodResponse
 * @property {Object[]} data
 * @property {boolean} success
 */
/**
 * @typedef UpdatePayoutRequest
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {string} unique_external_id
 */
/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {boolean} success
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
 * @property {PageType} type
 * @property {string} [url]
 */
/**
 * @typedef AllowSingleRequest
 * @property {boolean} allow_single
 */
/**
 * @typedef AppCatalogConfiguration
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} config_type
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {ConfigurationListing} [listing]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {ConfigurationProduct} [product]
 * @property {string} [type]
 */
/**
 * @typedef AppConfiguration
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} config_type
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {ConfigurationListing} [listing]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {ConfigurationProduct} [product]
 * @property {string} [type]
 */
/**
 * @typedef AppConfigurationDetail
 * @property {string} app_id
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} priority
 * @property {string} slug
 * @property {string[]} [template_slugs]
 */
/**
 * @typedef AppConfigurationsSort
 * @property {string} app_id
 * @property {string} default_key
 * @property {boolean} is_active
 * @property {boolean} is_default
 * @property {string} key
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} priority
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
 * @property {string} app_id
 * @property {boolean} [is_active]
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} uid
 */
/**
 * @typedef ApplicationDepartmentJson
 * @property {Object} _custom_json
 */
/**
 * @typedef ApplicationDepartmentListingResponse
 * @property {ApplicationDepartment[]} [items]
 * @property {Page} page
 */
/**
 * @typedef ApplicationItemMeta
 * @property {Object} [_custom_json]
 * @property {MetaFields[]} [_custom_meta]
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 * @property {ApplicationItemMOQ} [moq]
 * @property {ApplicationItemSEO} [seo]
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
 * @typedef ApplicationProductListingResponse
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {Object} [operators]
 * @property {Page} page
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef ApplicationStoreJson
 * @property {Object} _custom_json
 */
/**
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */
/**
 * @typedef ArticleAssignment1
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
 * @typedef AssignStore
 * @property {string} app_id
 * @property {AssignStoreArticle[]} articles
 * @property {string} [channel_identifier]
 * @property {string} [channel_type]
 * @property {number} [company_id]
 * @property {string} pincode
 * @property {number[]} [store_ids]
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
 * @typedef AttributeDetailsGroup
 * @property {string} display_type
 * @property {boolean} is_active
 * @property {string} [key]
 * @property {string} [logo]
 * @property {string} name
 * @property {number} priority
 * @property {string} [slug]
 * @property {string} [unit]
 */
/**
 * @typedef AttributeMaster
 * @property {string[]} [allowed_values]
 * @property {string} [format]
 * @property {boolean} [mandatory]
 * @property {boolean} [multi]
 * @property {AttributeSchemaRange} [range]
 * @property {string} type
 */
/**
 * @typedef AttributeMasterDetails
 * @property {string} display_type
 */
/**
 * @typedef AttributeMasterFilter
 * @property {string[]} [depends_on]
 * @property {boolean} indexing
 * @property {number} [priority]
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
 * @typedef AttributeMasterSerializer
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string[]} departments
 * @property {string} [description]
 * @property {AttributeMasterDetails} details
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterFilter} filters
 * @property {boolean} [is_nested]
 * @property {string} [logo]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [raw_key]
 * @property {AttributeMaster} schema
 * @property {string} slug
 * @property {string} [suggestion]
 * @property {Object} [synonyms]
 * @property {string[]} [tags]
 * @property {string} [unit]
 * @property {boolean} [variant]
 */
/**
 * @typedef AttributeSchemaRange
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef AutocompleteAction
 * @property {AutocompletePageAction} [page]
 * @property {string} [type]
 */
/**
 * @typedef AutocompletePageAction
 * @property {Object} [params]
 * @property {Object} [query]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef AutocompleteResult
 * @property {Object} [_custom_json]
 * @property {AutocompleteAction} [action]
 * @property {string} [display]
 * @property {Media} [logo]
 */
/**
 * @typedef BannerImage
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef Brand
 * @property {Logo} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef BrandItem
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {string[]} [departments]
 * @property {string} [discount]
 * @property {Media} [logo]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */
/**
 * @typedef BrandMeta
 * @property {number} id
 * @property {string} name
 */
/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BulkHsnResponse
 * @property {boolean} [success]
 */
/**
 * @typedef BulkHsnUpsert
 * @property {HsnUpsert[]} data
 */
/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef BulkInventoryGetItems
 * @property {number} [cancelled]
 * @property {string[]} [cancelled_records]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {number} [failed]
 * @property {string[]} [failed_records]
 * @property {string} [file_path]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {number} [succeed]
 * @property {number} [total]
 */
/**
 * @typedef BulkJob
 * @property {number} [cancelled]
 * @property {Object[]} [cancelled_records]
 * @property {number} company_id
 * @property {UserInfo1} [created_by]
 * @property {string} created_on
 * @property {string} [custom_template_tag]
 * @property {number} [failed]
 * @property {Object[]} [failed_records]
 * @property {string} [file_path]
 * @property {boolean} [is_active]
 * @property {UserInfo1} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {number} [succeed]
 * @property {string} [template_tag]
 * @property {number} [total]
 * @property {string} [tracking_url]
 */
/**
 * @typedef BulkProductRequest
 * @property {string} batch_id
 * @property {number} company_id
 * @property {Object[]} data
 * @property {string} template_tag
 */
/**
 * @typedef BulkResponse
 * @property {string} batch_id
 * @property {UserInfo1} [created_by]
 * @property {string} created_on
 * @property {boolean} [is_active]
 * @property {UserInfo1} [modified_by]
 * @property {string} [modified_on]
 */
/**
 * @typedef CatalogInsightBrand
 * @property {number} [article_freshness]
 * @property {number} [available_articles]
 * @property {number} [available_sizes]
 * @property {string} [name]
 * @property {number} [total_articles]
 * @property {number} [total_sizes]
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
 * @typedef Category
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {number[]} departments
 * @property {Hierarchy[]} [hierarchy]
 * @property {string} [id]
 * @property {boolean} is_active
 * @property {number} level
 * @property {CategoryMapping} [marketplaces]
 * @property {Media2} [media]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {number} [priority]
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {string[]} [tryouts]
 * @property {number} [uid]
 */
/**
 * @typedef CategoryCreateResponse
 * @property {string} [message]
 * @property {number} [uid]
 */
/**
 * @typedef CategoryItems
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {Child[]} [childs]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef CategoryListingResponse
 * @property {DepartmentCategoryTree[]} [data]
 * @property {DepartmentIdentifier[]} [departments]
 */
/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [ajio]
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [google]
 */
/**
 * @typedef CategoryMappingValues
 * @property {number} [catalog_id]
 * @property {string} name
 */
/**
 * @typedef CategoryRequestBody
 * @property {number[]} departments
 * @property {Hierarchy[]} [hierarchy]
 * @property {boolean} is_active
 * @property {number} level
 * @property {CategoryMapping} [marketplaces]
 * @property {Media2} [media]
 * @property {string} name
 * @property {number} [priority]
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {string[]} [tryouts]
 */
/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CategoryUpdateResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef Child
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef CollectionBadge
 * @property {string} [color]
 * @property {string} [text]
 */
/**
 * @typedef CollectionBanner
 * @property {CollectionImage} landscape
 * @property {CollectionImage} portrait
 */
/**
 * @typedef CollectionCreateResponse
 * @property {Object} [_schedule]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {string} [app_id]
 * @property {Object} [badge]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {BannerImage} [logo]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {number} [priority]
 * @property {CollectionQuery[]} [query]
 * @property {string} [slug]
 * @property {string} [sort_on]
 * @property {string[]} [tag]
 * @property {string} [type]
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef CollectionDetailResponse
 * @property {Object} [_schedule]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {string} [app_id]
 * @property {Object} [badge]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {Media1} [logo]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {number} [priority]
 * @property {CollectionQuery[]} [query]
 * @property {string} [slug]
 * @property {string[]} [tag]
 * @property {string} [type]
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef CollectionImage
 * @property {string} aspect_ratio
 * @property {string} url
 */
/**
 * @typedef CollectionItemRequest
 * @property {ItemQueryForUserCollection[]} [item]
 * @property {CollectionQuery[]} [query]
 * @property {string} [type]
 */
/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterTag[]} [tags]
 * @property {CollectionListingFilterType[]} [type]
 */
/**
 * @typedef CollectionListingFilterTag
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */
/**
 * @typedef CollectionListingFilterType
 * @property {string} [display]
 * @property {boolean} [is_selected]
 * @property {string} [name]
 */
/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {string} op
 * @property {Object[]} value
 */
/**
 * @typedef CollectionSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [start]
 */
/**
 * @typedef CompanyBrandDetail
 * @property {number} [brand_id]
 * @property {string} [brand_name]
 * @property {number} [company_id]
 * @property {number} [total_article]
 */
/**
 * @typedef CompanyMeta
 * @property {number} id
 */
/**
 * @typedef CompanyOptIn
 * @property {number[]} brand_ids
 * @property {number} company_id
 * @property {Object} [created_by]
 * @property {number} created_on
 * @property {boolean} enabled
 * @property {Object} [modified_by]
 * @property {number} modified_on
 * @property {string} opt_level
 * @property {string} platform
 * @property {number[]} store_ids
 */
/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */
/**
 * @typedef ConfigSuccessResponse
 * @property {string} message
 */
/**
 * @typedef ConfigurationBucketPoints
 * @property {string} [display]
 * @property {number} [end]
 * @property {number} [start]
 */
/**
 * @typedef ConfigurationListing
 * @property {ConfigurationListingFilter} filter
 * @property {ConfigurationListingSort} sort
 */
/**
 * @typedef ConfigurationListingFilter
 * @property {boolean} allow_single
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 */
/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} [display_name]
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} priority
 * @property {string} type
 * @property {ConfigurationListingFilterValue} [value_config]
 */
/**
 * @typedef ConfigurationListingFilterValue
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {string} [condition]
 * @property {Object} [map]
 * @property {Object[]} [map_values]
 * @property {string} [sort]
 * @property {string} [value]
 */
/**
 * @typedef ConfigurationListingSort
 * @property {ConfigurationListingSortConfig[]} [config]
 * @property {string} default_key
 */
/**
 * @typedef ConfigurationListingSortConfig
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {string} [name]
 * @property {number} priority
 */
/**
 * @typedef ConfigurationProduct
 * @property {ConfigurationProductSimilar} similar
 * @property {ConfigurationProductVariant} variant
 */
/**
 * @typedef ConfigurationProductConfig
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {number} priority
 * @property {ProductSize} [size]
 * @property {string} [subtitle]
 * @property {string} [title]
 */
/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */
/**
 * @typedef ConfigurationProductVariant
 * @property {ConfigurationProductVariantConfig[]} [config]
 */
/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} display_type
 * @property {boolean} is_active
 * @property {string} key
 * @property {string} [logo]
 * @property {string} name
 * @property {number} priority
 * @property {ProductSize} size
 */
/**
 * @typedef CreateAutocompleteKeyword
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {AutocompleteResult[]} [results]
 * @property {string[]} [words]
 */
/**
 * @typedef CreateAutocompleteWordsResponse
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {Object[]} [results]
 * @property {string[]} [words]
 */
/**
 * @typedef CreateCollection
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {string} app_id
 * @property {CollectionBadge} [badge]
 * @property {CollectionBanner} banners
 * @property {UserInfo} [created_by]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {CollectionImage} logo
 * @property {Object} [meta]
 * @property {UserInfo} [modified_by]
 * @property {string} name
 * @property {number} [priority]
 * @property {boolean} [published]
 * @property {CollectionQuery[]} [query]
 * @property {SeoDetail} [seo]
 * @property {string} slug
 * @property {string} [sort_on]
 * @property {string[]} [tags]
 * @property {string} type
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef CreateSearchKeyword
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {SearchKeywordResult} result
 * @property {string[]} [words]
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
 * @typedef CustomOrder
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 * @property {string} [manufacturing_time_unit]
 */
/**
 * @typedef DefaultKeyRequest
 * @property {string} default_key
 */
/**
 * @typedef DeleteResponse
 * @property {string} [message]
 */
/**
 * @typedef Department
 * @property {Media} [logo]
 * @property {string} [name]
 * @property {number} [priority_order]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef DepartmentCategoryTree
 * @property {string} [department]
 * @property {CategoryItems[]} [items]
 */
/**
 * @typedef DepartmentCreateErrorResponse
 * @property {string} [error]
 */
/**
 * @typedef DepartmentCreateResponse
 * @property {string} message
 * @property {number} uid
 */
/**
 * @typedef DepartmentCreateUpdate
 * @property {string} [_cls]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_active]
 * @property {string} logo
 * @property {string} name
 * @property {Object} [platforms]
 * @property {number} priority_order
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {string[]} [tags]
 * @property {number} [uid]
 */
/**
 * @typedef DepartmentErrorResponse
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 */
/**
 * @typedef DepartmentIdentifier
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef DepartmentModel
 * @property {Object} [_cls]
 * @property {Object} [_custom_json]
 * @property {Object} [_id]
 * @property {UserDetail} [created_by]
 * @property {string} created_on
 * @property {boolean} [is_active]
 * @property {string} logo
 * @property {UserDetail} [modified_by]
 * @property {string} modified_on
 * @property {Object} name
 * @property {number} priority_order
 * @property {Object} [slug]
 * @property {Object[]} [synonyms]
 * @property {number} [uid]
 * @property {UserDetail} [verified_by]
 * @property {string} [verified_on]
 */
/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */
/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef DimensionResponse
 * @property {number} height
 * @property {boolean} is_default
 * @property {number} length
 * @property {string} unit
 * @property {number} width
 */
/**
 * @typedef Document
 * @property {string} [legal_name]
 * @property {string} type
 * @property {string} [url]
 * @property {string} value
 * @property {boolean} [verified]
 */
/**
 * @typedef EntityConfiguration
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} config_type
 * @property {string} [id]
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */
/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {string} [error]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 */
/**
 * @typedef FilerList
 * @property {string} [display]
 * @property {string} [value]
 */
/**
 * @typedef GenderDetail
 * @property {string[]} [departments]
 * @property {string} [description]
 * @property {AttributeMasterDetails} [details]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {AttributeMasterFilter} [filters]
 * @property {string} [id]
 * @property {boolean} [is_nested]
 * @property {string} [logo]
 * @property {AttributeMasterMeta} [meta]
 * @property {string} [name]
 * @property {AttributeMaster} [schema]
 * @property {string} [slug]
 */
/**
 * @typedef GetAddressSerializer
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {number} [pincode]
 * @property {string} [state]
 */
/**
 * @typedef GetAppCatalogConfiguration
 * @property {AppCatalogConfiguration} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {EntityConfiguration} [data]
 * @property {boolean} [is_default]
 */
/**
 * @typedef GetAutocompleteWordsData
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {Object[]} [results]
 * @property {string} [uid]
 * @property {string[]} [words]
 */
/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetCatalogConfigurationDetailsProduct
 * @property {Object} [compare]
 * @property {Object} [detail]
 * @property {Object} [similar]
 * @property {Object} [variant]
 */
/**
 * @typedef GetCatalogConfigurationDetailsSchemaListing
 * @property {Object} [filter]
 * @property {Object} [sort]
 */
/**
 * @typedef GetCatalogConfigurationMetaData
 * @property {MetaDataListingResponse} [listing]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */
/**
 * @typedef GetCollectionDetailNest
 * @property {Object} [_schedule]
 * @property {Action} [action]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {string} [app_id]
 * @property {Object} [badge]
 * @property {ImageUrls} [banners]
 * @property {Object} [cron]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {Media1} [logo]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {number} [priority]
 * @property {CollectionQuery[]} [query]
 * @property {string} [slug]
 * @property {string[]} [tag]
 * @property {string} [type]
 * @property {string} [uid]
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {Page} [page]
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef GetCollectionListingResponse
 * @property {CollectionListingFilter} [filters]
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetCollectionQueryOptionResponse
 * @property {ProductFilters[]} [filters]
 * @property {Object} operators
 * @property {ProductSortOn[]} [sort_on]
 */
/**
 * @typedef GetCompanySerializer
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {UserSerializer2} [created_by]
 * @property {string} [created_on]
 * @property {UserSerializer2} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [verified_on]
 */
/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} [condition]
 * @property {Object[]} data
 * @property {Object[]} [values]
 */
/**
 * @typedef GetConfigResponse
 * @property {Object[]} data
 * @property {PageResponseType} page
 */
/**
 * @typedef GetDepartment
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {boolean} [is_active]
 * @property {string} [item_type]
 * @property {string} [logo]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {number} [page_no]
 * @property {number} [page_size]
 * @property {number} [priority_order]
 * @property {string} [search]
 * @property {string} [slug]
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 */
/**
 * @typedef GetLocationSerializer
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer} address
 * @property {string} code
 * @property {GetCompanySerializer} [company]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {UserSerializer1} [created_by]
 * @property {string} [created_on]
 * @property {string} display_name
 * @property {Document[]} [documents]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {LocationIntegrationType} [integration_type]
 * @property {LocationManagerSerializer} [manager]
 * @property {UserSerializer1} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string[]} [notification_emails]
 * @property {string} phone_number
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {number} [uid]
 * @property {UserSerializer1} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */
/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */
/**
 * @typedef GetProductBundleCreateResponse
 * @property {string} choice
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} [id]
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {Object} [meta]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string[]} [page_visibility]
 * @property {ProductBundleItem[]} products
 * @property {boolean} [same_store_assignment]
 * @property {string} slug
 */
/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetProductBundleResponse
 * @property {string} [choice]
 * @property {number} [company_id]
 * @property {boolean} [is_active]
 * @property {string} [logo]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string[]} [page_visibility]
 * @property {GetProducts[]} [products]
 * @property {boolean} [same_store_assignment]
 * @property {string} [slug]
 */
/**
 * @typedef GetProducts
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {number} [max_quantity]
 * @property {number} [min_quantity]
 * @property {Price} [price]
 * @property {LimitedProductData} [product_details]
 * @property {number} [product_uid]
 * @property {Size[]} [sizes]
 */
/**
 * @typedef GetSearchWordsData
 * @property {Object} [_custom_json]
 * @property {string} [app_id]
 * @property {boolean} [is_active]
 * @property {Object} [result]
 * @property {string} [uid]
 * @property {string[]} [words]
 */
/**
 * @typedef GetSearchWordsDetailResponse
 * @property {GetSearchWordsData} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GetSearchWordsResponse
 * @property {GetSearchWordsData[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef GlobalValidation
 * @property {Object} [definitions]
 * @property {string} [description]
 * @property {Properties} [properties]
 * @property {string[]} [required]
 * @property {string} [title]
 * @property {string} [type]
 */
/**
 * @typedef GTIN
 * @property {string} gtin_type
 * @property {Object} gtin_value
 * @property {boolean} [primary]
 */
/**
 * @typedef Guide
 * @property {Meta} [meta]
 */
/**
 * @typedef Hierarchy
 * @property {number} department
 * @property {number} l1
 * @property {number} l2
 */
/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */
/**
 * @typedef HsnCodesListingResponse
 * @property {HsnCodesObject[]} [items]
 * @property {PageResponse} [page]
 */
/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */
/**
 * @typedef HsnCodesObject
 * @property {number} [company_id]
 * @property {string} [hs2_code]
 * @property {string} [hsn_code]
 * @property {string} [id]
 * @property {string} [modified_on]
 * @property {number} [tax1]
 * @property {number} [tax2]
 * @property {boolean} [tax_on_esp]
 * @property {boolean} [tax_on_mrp]
 * @property {number} [threshold1]
 * @property {number} [threshold2]
 */
/**
 * @typedef HSNCodesResponse
 * @property {HSNData} [data]
 * @property {string} [message]
 */
/**
 * @typedef HSNData
 * @property {string[]} [country_of_origin]
 * @property {string[]} [hsn_code]
 */
/**
 * @typedef HSNDataInsertV2
 * @property {string} country_code
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} description
 * @property {string} hsn_code
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} reporting_hsn
 * @property {TaxSlab[]} taxes
 * @property {string} type
 */
/**
 * @typedef HsnUpsert
 * @property {number} company_id
 * @property {string} hs2_code
 * @property {string} hsn_code
 * @property {boolean} [is_active]
 * @property {number} tax1
 * @property {number} [tax2]
 * @property {boolean} [tax_on_esp]
 * @property {boolean} tax_on_mrp
 * @property {number} threshold1
 * @property {number} [threshold2]
 * @property {number} [uid]
 */
/**
 * @typedef Image
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 * @property {string} [url]
 */
/**
 * @typedef ImageUrls
 * @property {BannerImage} [landscape]
 * @property {BannerImage} [portrait]
 */
/**
 * @typedef InventoryBulkRequest
 * @property {string} batch_id
 * @property {number} company_id
 * @property {InventoryJobPayload[]} sizes
 * @property {Object} [user]
 */
/**
 * @typedef InventoryConfig
 * @property {FilerList[]} [data]
 * @property {boolean} [multivalues]
 */
/**
 * @typedef InventoryExportJob
 * @property {string} [completed_on]
 * @property {Object} [request_params]
 * @property {number} seller_id
 * @property {string} [status]
 * @property {string} task_id
 * @property {string} [trigger_on]
 * @property {string} [url]
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
 * @property {number} seller_id
 * @property {string} [status]
 * @property {string} task_id
 * @property {string} [trigger_on]
 */
/**
 * @typedef InventoryFailedReason
 * @property {string} [errors]
 * @property {string} message
 */
/**
 * @typedef InventoryJobPayload
 * @property {string} [currency]
 * @property {string} [expiration_date]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [price]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {number} [quantity]
 * @property {string} seller_identifier
 * @property {string} store_code
 * @property {string[]} [tags]
 * @property {number} [total_quantity]
 * @property {string} [trace_id]
 */
/**
 * @typedef InventoryPage
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} item_total
 * @property {string} [next_id]
 * @property {string} type
 */
/**
 * @typedef InventoryPayload
 * @property {string} [expiration_date]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {string} seller_identifier
 * @property {number} store_id
 * @property {string[]} [tags]
 * @property {number} [total_quantity]
 * @property {string} [trace_id]
 */
/**
 * @typedef InventoryRequest
 * @property {number} company_id
 * @property {ItemQuery} item
 * @property {InvSize[]} sizes
 */
/**
 * @typedef InventoryRequestSchemaV2
 * @property {number} company_id
 * @property {Object} [meta]
 * @property {InventoryPayload[]} [payload]
 */
/**
 * @typedef InventoryResponse
 * @property {string} [currency]
 * @property {Object} [identifiers]
 * @property {string} [inventory_updated_on]
 * @property {number} [item_id]
 * @property {number} [price]
 * @property {number} [price_effective]
 * @property {number} [price_transfer]
 * @property {number} [quantity]
 * @property {number} [sellable_quantity]
 * @property {string} [seller_identifier]
 * @property {string} [size]
 * @property {Object} [store]
 * @property {string} [uid]
 */
/**
 * @typedef InventoryResponseItem
 * @property {InventoryPayload} [data]
 * @property {InventoryFailedReason} [reason]
 */
/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef InventorySellerResponse
 * @property {Object} [_custom_json]
 * @property {string} [added_on_store]
 * @property {BrandMeta} brand
 * @property {CompanyMeta} company
 * @property {string} country_of_origin
 * @property {UserSerializer} [created_by]
 * @property {DimensionResponse} dimension
 * @property {string} [expiration_date]
 * @property {boolean} fragile
 * @property {string} fynd_article_code
 * @property {string} fynd_item_code
 * @property {Object} [fynd_meta]
 * @property {Object} identifier
 * @property {boolean} [is_active]
 * @property {boolean} [is_set]
 * @property {number} item_id
 * @property {ManufacturerResponse} manufacturer
 * @property {Object} [meta]
 * @property {UserSerializer} [modified_by]
 * @property {PriceMeta} price
 * @property {Quantities} [quantities]
 * @property {Object} [raw_meta]
 * @property {ReturnConfig1} [return_config]
 * @property {string} seller_identifier
 * @property {InventorySet} [set]
 * @property {string} size
 * @property {string} [stage]
 * @property {StoreMeta} store
 * @property {string[]} [tags]
 * @property {Object} [tax_identifier]
 * @property {number} total_quantity
 * @property {string} [trace_id]
 * @property {boolean} [track_inventory]
 * @property {Trader1[]} [trader]
 * @property {string} uid
 * @property {WeightResponse} weight
 */
/**
 * @typedef InventorySet
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {SizeDistribution} size_distribution
 */
/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */
/**
 * @typedef InventoryUpdateResponse
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message
 */
/**
 * @typedef InventoryValidationResponse
 * @property {Object} [data]
 * @property {string} [message]
 */
/**
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [password]
 * @property {string} [username]
 */
/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */
/**
 * @typedef InvSize
 * @property {string} currency
 * @property {string} [expiration_date]
 * @property {GTIN[]} identifiers
 * @property {boolean} [is_set]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [item_height]
 * @property {number} [item_length]
 * @property {number} [item_weight]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [item_width]
 * @property {number} [price]
 * @property {number} price_effective
 * @property {number} [price_transfer]
 * @property {number} quantity
 * @property {InventorySet} [set]
 * @property {Object} size
 * @property {string} store_code
 */
/**
 * @typedef ItemQuery
 * @property {number} [brand_uid]
 * @property {string} [item_code]
 * @property {number} [uid]
 */
/**
 * @typedef ItemQueryForUserCollection
 * @property {string} [action]
 * @property {number} [item_id]
 */
/**
 * @typedef Items
 * @property {number} [cancelled]
 * @property {string[]} [cancelled_records]
 * @property {number} [company_id]
 * @property {UserCommon} [created_by]
 * @property {string} [created_on]
 * @property {number} [failed]
 * @property {string[]} [failed_records]
 * @property {string} [file_path]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {UserCommon} [modified_by]
 * @property {string} [modified_on]
 * @property {number} [retry]
 * @property {string} [stage]
 * @property {number} [succeed]
 * @property {number} [total]
 * @property {string} [tracking_url]
 */
/**
 * @typedef LimitedProductData
 * @property {Object} [attributes]
 * @property {string} [country_of_origin]
 * @property {Object} [identifier]
 * @property {string[]} [images]
 * @property {string} [item_code]
 * @property {string} [name]
 * @property {Object} [price]
 * @property {number} [quantity]
 * @property {string} [short_description]
 * @property {string[]} [sizes]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
 */
/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [closing]
 * @property {boolean} open
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 */
/**
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 * @property {string} [order]
 */
/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
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
 * @typedef Logo
 * @property {string} [aspect_ratio]
 * @property {number} [aspect_ratio_f]
 * @property {string} [secure_url]
 * @property {string} [url]
 */
/**
 * @typedef ManufacturerResponse
 * @property {string} address
 * @property {boolean} is_default
 * @property {string} name
 */
/**
 * @typedef Media
 * @property {string} [aspect_ratio]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef Media1
 * @property {Object} [meta]
 * @property {string} [type]
 * @property {string} url
 */
/**
 * @typedef Media2
 * @property {string} landscape
 * @property {string} logo
 * @property {string} portrait
 */
/**
 * @typedef Meta
 * @property {Object} [headers]
 * @property {string} [unit]
 * @property {Object[]} [values]
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
 * @typedef MetaDataListingResponse
 * @property {MetaDataListingFilterResponse} filter
 * @property {MetaDataListingSortResponse} sort
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
 * @typedef MetaFields
 * @property {Object} key
 * @property {Object} value
 */
/**
 * @typedef MOQData
 * @property {number} [increment_unit]
 * @property {number} [maximum]
 * @property {number} [minimum]
 */
/**
 * @typedef NestedTags
 * @property {string[]} [tags]
 */
/**
 * @typedef NetQuantity
 * @property {Object} [unit]
 * @property {number} [value]
 */
/**
 * @typedef NextSchedule
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef OptinCompanyBrandDetailsView
 * @property {CompanyBrandDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OptinCompanyDetail
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef OptinCompanyMetrics
 * @property {number} [brand]
 * @property {string} [company]
 * @property {number} [store]
 */
/**
 * @typedef OptInPostRequest
 * @property {number[]} [brand_ids]
 * @property {number} [company_id]
 * @property {boolean} [enabled]
 * @property {string} opt_level
 * @property {string} [platform]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef OptinStoreDetails
 * @property {StoreDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OwnerAppItemResponse
 * @property {Object} [alt_text]
 * @property {boolean} [is_cod]
 * @property {boolean} [is_gift]
 * @property {MOQData} [moq]
 * @property {SEOData} [seo]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef PageResponse
 * @property {string} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {number} [size]
 */
/**
 * @typedef PageResponseType
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} next
 * @property {number} total_count
 */
/**
 * @typedef Price
 * @property {string} [currency]
 * @property {number} [max_effective]
 * @property {number} [max_marked]
 * @property {number} [min_effective]
 * @property {number} [min_marked]
 */
/**
 * @typedef Price1
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef PriceMeta
 * @property {string} currency
 * @property {number} effective
 * @property {number} marked
 * @property {Object} [tp_notes]
 * @property {number} transfer
 * @property {string} [updated_at]
 */
/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef Product
 * @property {Object} [_custom_json]
 * @property {Object[]} [all_sizes]
 * @property {Brand} [brand]
 * @property {number} [brand_uid]
 * @property {string} [category_slug]
 * @property {number} [category_uid]
 * @property {string} [color]
 * @property {string} [country_of_origin]
 * @property {string} [currency]
 * @property {Object} [custom_order]
 * @property {number[]} [departments]
 * @property {string} [description]
 * @property {string[]} [highlights]
 * @property {string} [hsn_code]
 * @property {string} [id]
 * @property {string} [image_nature]
 * @property {Image[]} [images]
 * @property {boolean} [is_active]
 * @property {boolean} [is_dependent]
 * @property {boolean} [is_expirable]
 * @property {boolean} [is_physical]
 * @property {boolean} [is_set]
 * @property {string} [item_code]
 * @property {string} [item_type]
 * @property {string[]} [l3_mapping]
 * @property {Media1[]} [media]
 * @property {boolean} [multi_size]
 * @property {string} [name]
 * @property {string} [primary_color]
 * @property {ProductPublished} [product_publish]
 * @property {string} [short_description]
 * @property {string} [size_guide]
 * @property {Object[]} [sizes]
 * @property {string} [slug]
 * @property {Object} [tax_identifier]
 * @property {string} [template_tag]
 * @property {number} [uid]
 * @property {Object} [variant_group]
 * @property {Object} [variants]
 */
/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */
/**
 * @typedef ProductBrand
 * @property {Action} [action]
 * @property {Media1} [logo]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef ProductBulkAssets
 * @property {number} [company_id]
 * @property {string} url
 * @property {Object} user
 */
/**
 * @typedef ProductBulkRequest
 * @property {number} [cancelled]
 * @property {string[]} [cancelled_records]
 * @property {number} [company_id]
 * @property {UserDetail1} [created_by]
 * @property {string} [created_on]
 * @property {number} [failed]
 * @property {string[]} [failed_records]
 * @property {string} [file_path]
 * @property {boolean} [is_active]
 * @property {UserDetail1} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {number} [succeed]
 * @property {ProductTemplate} [template]
 * @property {string} [template_tag]
 * @property {number} [total]
 */
/**
 * @typedef ProductBulkRequestList
 * @property {ProductBulkRequest} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductBundleItem
 * @property {boolean} [allow_remove]
 * @property {boolean} [auto_add_to_cart]
 * @property {boolean} [auto_select]
 * @property {number} max_quantity
 * @property {number} min_quantity
 * @property {number} product_uid
 */
/**
 * @typedef ProductBundleRequest
 * @property {string} choice
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {Object} [meta]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string[]} [page_visibility]
 * @property {ProductBundleItem[]} products
 * @property {boolean} [same_store_assignment]
 * @property {string} slug
 */
/**
 * @typedef ProductBundleUpdateRequest
 * @property {string} choice
 * @property {number} [company_id]
 * @property {boolean} is_active
 * @property {string} [logo]
 * @property {Object} [meta]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string[]} [page_visibility]
 * @property {ProductBundleItem[]} products
 * @property {boolean} [same_store_assignment]
 * @property {string} slug
 */
/**
 * @typedef ProductConfigurationDownloads
 * @property {Object[]} [data]
 * @property {boolean} [multivalue]
 */
/**
 * @typedef ProductCreateUpdate
 * @property {Object} [_custom_json]
 * @property {string} [action]
 * @property {number} brand_uid
 * @property {string} [bulk_job_id]
 * @property {string} category_slug
 * @property {Object} [change_request_id]
 * @property {number} company_id
 * @property {string} country_of_origin
 * @property {string} currency
 * @property {CustomOrder} [custom_order]
 * @property {number[]} departments
 * @property {string} [description]
 * @property {string[]} [highlights]
 * @property {boolean} [is_active]
 * @property {boolean} [is_dependent]
 * @property {boolean} [is_image_less_product]
 * @property {boolean} [is_set]
 * @property {Object} item_code
 * @property {string} item_type
 * @property {Media1[]} [media]
 * @property {boolean} [multi_size]
 * @property {Object} name
 * @property {NetQuantity} [net_quantity]
 * @property {number} [no_of_boxes]
 * @property {string[]} [product_group_tag]
 * @property {ProductPublish} [product_publish]
 * @property {string} [requester]
 * @property {ReturnConfig} return_config
 * @property {string} [short_description]
 * @property {string} [size_guide]
 * @property {string} slug
 * @property {string[]} [tags]
 * @property {TaxIdentifier} tax_identifier
 * @property {TeaserTag} [teaser_tag]
 * @property {string} template_tag
 * @property {Trader[]} trader
 * @property {number} [uid]
 * @property {Object} [variant_group]
 * @property {Object} [variant_media]
 * @property {Object} [variants]
 */
/**
 * @typedef ProductDetail
 * @property {Object} [attributes]
 * @property {ProductBrand} [brand]
 * @property {string} [color]
 * @property {string} [description]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {boolean} [has_variant]
 * @property {string[]} [highlights]
 * @property {string} [image_nature]
 * @property {string} [item_code]
 * @property {string} [item_type]
 * @property {Media1[]} [medias]
 * @property {string} [name]
 * @property {string} [product_online_date]
 * @property {Object} [promo_meta]
 * @property {number} [rating]
 * @property {number} [rating_count]
 * @property {string} [short_description]
 * @property {string[]} [similars]
 * @property {string} slug
 * @property {Object} [teaser_tag]
 * @property {string[]} [tryouts]
 * @property {string} [type]
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
 * @typedef ProductDownloadItemsData
 * @property {string[]} [brand]
 * @property {string[]} [templates]
 * @property {string} [type]
 */
/**
 * @typedef ProductDownloadsItems
 * @property {string} [completed_on]
 * @property {VerifiedBy} [created_by]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [id]
 * @property {number} [seller_id]
 * @property {string} [status]
 * @property {string} [task_id]
 * @property {Object} [template_tags]
 * @property {string} [trigger_on]
 * @property {string} [url]
 */
/**
 * @typedef ProductDownloadsResponse
 * @property {ProductDownloadsItems} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductFilters
 * @property {ProductFiltersKey} key
 * @property {ProductFiltersValue[]} values
 */
/**
 * @typedef ProductFiltersKey
 * @property {string} display
 * @property {string} [kind]
 * @property {string} [logo]
 * @property {string} name
 * @property {string[]} [operators]
 */
/**
 * @typedef ProductFiltersValue
 * @property {number} [count]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {string} display
 * @property {string} [display_format]
 * @property {boolean} is_selected
 * @property {number} [max]
 * @property {number} [min]
 * @property {string} [query_format]
 * @property {number} [selected_max]
 * @property {number} [selected_min]
 * @property {Object} value
 */
/**
 * @typedef ProductListingDetail
 * @property {Object} [attributes]
 * @property {ProductBrand} [brand]
 * @property {string} [color]
 * @property {string} [description]
 * @property {string} [discount]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {boolean} [has_variant]
 * @property {string[]} [highlights]
 * @property {string} [image_nature]
 * @property {string} [item_code]
 * @property {string} [item_type]
 * @property {Media1[]} [medias]
 * @property {string} [name]
 * @property {ProductListingPrice} [price]
 * @property {string} [product_online_date]
 * @property {Object} [promo_meta]
 * @property {number} [rating]
 * @property {number} [rating_count]
 * @property {boolean} [sellable]
 * @property {string} [short_description]
 * @property {string[]} [similars]
 * @property {string} slug
 * @property {Object} [teaser_tag]
 * @property {string[]} [tryouts]
 * @property {string} [type]
 * @property {number} [uid]
 */
/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 */
/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ProductPublish
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */
/**
 * @typedef ProductPublished
 * @property {boolean} [is_set]
 * @property {number} [product_online_date]
 */
/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */
/**
 * @typedef ProductSize
 * @property {number} max
 * @property {number} min
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
 * @typedef ProductSortOn
 * @property {boolean} [is_selected]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef ProductTagsViewResponse
 * @property {NestedTags} [items]
 */
/**
 * @typedef ProductTemplate
 * @property {string[]} [attributes]
 * @property {string[]} [categories]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string[]} [departments]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 * @property {boolean} is_expirable
 * @property {boolean} is_physical
 * @property {string} [logo]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} slug
 * @property {string} [tag]
 */
/**
 * @typedef ProductVariants
 * @property {number} [brand_uid]
 * @property {number} [category_uid]
 * @property {string} [item_code]
 * @property {Media1[]} [media]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef ProductVariantsResponse
 * @property {Page} [page]
 * @property {ProductVariants[]} [variants]
 */
/**
 * @typedef Properties
 * @property {Object} [brand_uid]
 * @property {Object} [category_slug]
 * @property {Object} [command]
 * @property {Object} [country_of_origin]
 * @property {Object} [currency]
 * @property {Object} [custom_order]
 * @property {Object} [description]
 * @property {Object} [highlights]
 * @property {Object} [hsn_code]
 * @property {Object} [is_active]
 * @property {Object} [is_dependent]
 * @property {Object} [item_code]
 * @property {Object} [item_type]
 * @property {Object} [media]
 * @property {Object} [multi_size]
 * @property {Object} [name]
 * @property {Object} [no_of_boxes]
 * @property {Object} [product_group_tag]
 * @property {Object} [product_publish]
 * @property {Object} [return_config]
 * @property {Object} [short_description]
 * @property {Object} [size_guide]
 * @property {Object} [sizes]
 * @property {Object} [slug]
 * @property {Object} [tags]
 * @property {Object} [teaser_tag]
 * @property {Object} [trader]
 * @property {Object} [trader_type]
 * @property {Object} [variants]
 */
/**
 * @typedef PTErrorResponse
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 */
/**
 * @typedef Quantities
 * @property {QuantityBase} [damaged]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [sellable]
 */
/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */
/**
 * @typedef ReturnConfig
 * @property {boolean} returnable
 * @property {number} time
 * @property {string} unit
 */
/**
 * @typedef ReturnConfig1
 * @property {boolean} [returnable]
 * @property {number} [time]
 * @property {string} [unit]
 */
/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */
/**
 * @typedef SecondLevelChild
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */
/**
 * @typedef SEOData
 * @property {Object} [description]
 * @property {Object} [title]
 */
/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 */
/**
 * @typedef SetSize
 * @property {number} pieces
 * @property {string} size
 */
/**
 * @typedef SingleCategoryResponse
 * @property {Category} [data]
 */
/**
 * @typedef Size
 * @property {string} [display]
 * @property {boolean} [is_available]
 * @property {number} [quantity]
 * @property {string} [value]
 */
/**
 * @typedef SizeDistribution
 * @property {SetSize[]} sizes
 */
/**
 * @typedef SizeGuideResponse
 * @property {boolean} [active]
 * @property {number} [brand_id]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {Object} [guide]
 * @property {string} [id]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [subtitle]
 * @property {string} [tag]
 * @property {string} [title]
 */
/**
 * @typedef StoreAssignResponse
 * @property {string} [_id]
 * @property {ArticleAssignment1} article_assignment
 * @property {number} [company_id]
 * @property {string} [group_id]
 * @property {number} [index]
 * @property {number} item_id
 * @property {Object} [meta]
 * @property {number} [price_effective]
 * @property {number} [price_marked]
 * @property {number} quantity
 * @property {string} [s_city]
 * @property {string} size
 * @property {boolean} status
 * @property {number} [store_id]
 * @property {number} [store_pincode]
 * @property {Object[]} [strategy_wise_listing]
 * @property {string} [uid]
 */
/**
 * @typedef StoreDetail
 * @property {Object[]} [additional_contacts]
 * @property {Object} [address]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {string} [display_name]
 * @property {Object[]} [documents]
 * @property {Object} [manager]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [store_type]
 * @property {Object} [timing]
 * @property {number} [uid]
 */
/**
 * @typedef StoreMeta
 * @property {number} id
 */
/**
 * @typedef SuccessResponse
 * @property {boolean} [success]
 */
/**
 * @typedef SuccessResponse1
 * @property {boolean} [success]
 * @property {number} [uid]
 */
/**
 * @typedef TaxIdentifier
 * @property {string} [hsn_code]
 * @property {string} [hsn_code_id]
 * @property {string} [reporting_hsn]
 */
/**
 * @typedef TaxSlab
 * @property {number} [cess]
 * @property {string} effective_date
 * @property {number} rate
 * @property {number} threshold
 */
/**
 * @typedef TeaserTag
 * @property {string} [tag]
 * @property {string} [url]
 */
/**
 * @typedef TemplateDetails
 * @property {string[]} [attributes]
 * @property {string[]} [categories]
 * @property {string[]} [departments]
 * @property {string} [description]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {boolean} [is_archived]
 * @property {boolean} is_expirable
 * @property {boolean} is_physical
 * @property {string} [logo]
 * @property {string} [name]
 * @property {string} slug
 * @property {string} [tag]
 */
/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */
/**
 * @typedef TemplatesValidationResponse
 * @property {TemplateValidationData} [data]
 * @property {TemplateDetails} [template_details]
 */
/**
 * @typedef TemplateValidationData
 * @property {GlobalValidation} [global_validation]
 * @property {Object} [template_validation]
 */
/**
 * @typedef ThirdLevelChild
 * @property {Object} [_custom_json]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 * @property {Object[]} [childs]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {number} [uid]
 */
/**
 * @typedef Trader
 * @property {string[]} [address]
 * @property {Object} name
 * @property {string} [type]
 */
/**
 * @typedef Trader1
 * @property {string[]} address
 * @property {string} name
 * @property {string} type
 */
/**
 * @typedef UpdateCollection
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [allow_facets]
 * @property {boolean} [allow_sort]
 * @property {CollectionBadge} [badge]
 * @property {CollectionBanner} [banners]
 * @property {string} [description]
 * @property {boolean} [is_active]
 * @property {boolean} [is_visible]
 * @property {CollectionImage} [logo]
 * @property {Object} [meta]
 * @property {UserInfo} [modified_by]
 * @property {string} [name]
 * @property {number} [priority]
 * @property {boolean} [published]
 * @property {CollectionQuery[]} [query]
 * @property {SeoDetail} [seo]
 * @property {string} [slug]
 * @property {string} [sort_on]
 * @property {string[]} [tags]
 * @property {string} [type]
 * @property {string[]} [visible_facets_keys]
 */
/**
 * @typedef UpdatedResponse
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */
/**
 * @typedef UserCommon
 * @property {number} [company_id]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef UserDetail
 * @property {string} [contact]
 * @property {boolean} [super_user]
 * @property {string} user_id
 * @property {string} username
 */
/**
 * @typedef UserDetail1
 * @property {string} [full_name]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef UserInfo
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef UserInfo1
 * @property {string} [email]
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef UserSerializer
 * @property {string} [_id]
 * @property {string} [contact]
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef UserSerializer1
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef UserSerializer2
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */
/**
 * @typedef ValidateSizeGuide
 * @property {boolean} [active]
 * @property {number} [brand_id]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {Guide} [guide]
 * @property {string} [id]
 * @property {string} [image]
 * @property {Object} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string} [subtitle]
 * @property {string} [tag]
 * @property {string} title
 */
/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef WeightResponse
 * @property {boolean} is_default
 * @property {number} shipping
 * @property {string} unit
 */

/**
 * @typedef _ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */
/**
 * @typedef _ArticleQuery
 * @property {number[]} [ignored_stores]
 * @property {number} [item_id]
 * @property {string} [size]
 */
/**
 * @typedef _AssignStoreArticle
 * @property {_ArticleAssignment} [article_assignment]
 * @property {string} [group_id]
 * @property {Object} [meta]
 * @property {number} [quantity]
 * @property {_ArticleQuery} [query]
 */
/**
 * @typedef AssignStoreRequestValidator
 * @property {string} [app_id]
 * @property {_AssignStoreArticle[]} [articles]
 * @property {string} [channel_identifier]
 * @property {string} [channel_type]
 * @property {number} [company_id]
 * @property {string} [pincode]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef AssignStoreResponseSerializer
 * @property {string} [_id]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [company_id]
 * @property {number} [index]
 * @property {number} [item_id]
 * @property {Object} [meta]
 * @property {number} [preice_effective]
 * @property {number} [price_marked]
 * @property {number} [quantity]
 * @property {string} [s_city]
 * @property {string} [size]
 * @property {boolean} [status]
 * @property {number} [store_id]
 * @property {string} [store_pincode]
 * @property {string} [uid]
 */
/**
 * @typedef BrandBannerSerializer
 * @property {string} [landscape]
 * @property {string} [portrait]
 */
/**
 * @typedef BulkLocationSerializer
 * @property {LocationSerializer[]} [data]
 */
/**
 * @typedef BusinessCountryInfo
 * @property {string} [country]
 * @property {string} [country_code]
 */
/**
 * @typedef BusinessDetails
 * @property {Website} [website]
 */
/**
 * @typedef CompanyBrandListSerializer
 * @property {CompanyBrandSerializer[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CompanyBrandPostRequestSerializer
 * @property {number[]} brands
 * @property {number} company
 * @property {number} [uid]
 */
/**
 * @typedef CompanyBrandSerializer
 * @property {GetBrandResponseSerializer} [brand]
 * @property {CompanySerializer} [company]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */
/**
 * @typedef CompanyDetails
 * @property {CompanySocialAccounts[]} [socials]
 * @property {string} [website_url]
 */
/**
 * @typedef CompanySerializer
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string} business_type
 * @property {string} company_type
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {CompanyDetails} [details]
 * @property {string[]} [market_channels]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 */
/**
 * @typedef CompanySocialAccounts
 * @property {string} name
 * @property {string} url
 */
/**
 * @typedef CompanyTaxesSerializer
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 * @property {number} [rate]
 */
/**
 * @typedef CompanyTaxesSerializer1
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
 * @typedef CreateUpdateAddressSerializer
 * @property {string} address1
 * @property {string} [address2]
 * @property {string} address_type
 * @property {string} city
 * @property {string} country
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} latitude
 * @property {number} longitude
 * @property {number} pincode
 * @property {string} state
 */
/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [brand_tier]
 * @property {number} [company_id]
 * @property {string} [description]
 * @property {string} logo
 * @property {string} name
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 */
/**
 * @typedef Document
 * @property {string} [legal_name]
 * @property {string} type
 * @property {string} [url]
 * @property {string} value
 * @property {boolean} [verified]
 */
/**
 * @typedef DocumentsObj
 * @property {number} [pending]
 * @property {number} [verified]
 */
/**
 * @typedef ErrorResponse
 * @property {string} [code]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {number} [status]
 */
/**
 * @typedef GetAddressSerializer
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [landmark]
 * @property {number} [latitude]
 * @property {number} [longitude]
 * @property {number} [pincode]
 * @property {string} [state]
 */
/**
 * @typedef GetBrandResponseSerializer
 * @property {Object} [_custom_json]
 * @property {Object} [_locale_language]
 * @property {BrandBannerSerializer} [banner]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [logo]
 * @property {string} [mode]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string} [reject_reason]
 * @property {string} [slug_key]
 * @property {string} [stage]
 * @property {string[]} [synonyms]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */
/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {BusinessDetails} [business_details]
 * @property {string} [business_info]
 * @property {string} business_type
 * @property {string} company_type
 * @property {ContactDetails} [contact_details]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {Document[]} [documents]
 * @property {boolean} [franchise_enabled]
 * @property {string} [mode]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {string} [stage]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {number} uid
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
 */
/**
 * @typedef GetCompanySerializer
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [reject_reason]
 * @property {string} [stage]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 */
/**
 * @typedef GetLocationSerializer
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer} address
 * @property {string} code
 * @property {GetCompanySerializer} [company]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {UserSerializer} [created_by]
 * @property {string} [created_on]
 * @property {string} display_name
 * @property {Document[]} [documents]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {LocationManagerSerializer} [manager]
 * @property {UserSerializer} [modified_by]
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string[]} [notification_emails]
 * @property {string} phone_number
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {number} [uid]
 * @property {UserSerializer} [verified_by]
 * @property {string} [verified_on]
 * @property {Object} [warnings]
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
 * @typedef InvoiceCredSerializer
 * @property {boolean} [enabled]
 * @property {string} [password]
 * @property {string} [username]
 */
/**
 * @typedef InvoiceDetailsSerializer
 * @property {InvoiceCredSerializer} [e_invoice]
 * @property {InvoiceCredSerializer} [e_waybill]
 */
/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [closing]
 * @property {boolean} open
 * @property {LocationTimingSerializer} [opening]
 * @property {string} weekday
 */
/**
 * @typedef LocationListSerializer
 * @property {GetLocationSerializer[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LocationManagerSerializer
 * @property {string} [email]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [name]
 */
/**
 * @typedef LocationSerializer
 * @property {Object} [_custom_json]
 * @property {GetAddressSerializer} address
 * @property {string} code
 * @property {number} company
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} display_name
 * @property {Document[]} [documents]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {HolidaySchemaSerializer[]} [holiday]
 * @property {LocationManagerSerializer} [manager]
 * @property {string} name
 * @property {string[]} [notification_emails]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} [stage]
 * @property {string} [store_type]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {number} [uid]
 * @property {Object} [warnings]
 */
/**
 * @typedef LocationTimingSerializer
 * @property {number} hour
 * @property {number} minute
 */
/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [brand]
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [product]
 * @property {string} [stage]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [store_documents]
 * @property {number} [uid]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef ProductReturnConfigSerializer
 * @property {boolean} [on_same_store]
 * @property {number} [store_uid]
 */
/**
 * @typedef ProfileSuccessResponse
 * @property {boolean} [success]
 * @property {number} [uid]
 */
/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */
/**
 * @typedef UpdateCompany
 * @property {Object} [_custom_json]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {BusinessDetails} [business_details]
 * @property {string} [business_info]
 * @property {string} [business_type]
 * @property {string} [company_type]
 * @property {ContactDetails} [contact_details]
 * @property {Document[]} [documents]
 * @property {boolean} [franchise_enabled]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {string} [reject_reason]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {Object} [warnings]
 */
/**
 * @typedef UserSerializer
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */
/**
 * @typedef Website
 * @property {string} [url]
 */

/**
 * @typedef BrowseResponse
 * @property {DbRecord[]} items
 * @property {Page} page
 */
/**
 * @typedef BulkRequest
 * @property {ReqConfiguration} [configuration]
 * @property {Destination} destination
 * @property {string[]} urls
 */
/**
 * @typedef BulkUploadResponse
 * @property {CopyFileTask} task
 * @property {string} tracking_url
 */
/**
 * @typedef CDN
 * @property {string} url
 */
/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {CDN} cdn
 * @property {string} content_type
 * @property {string} created_on
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} modified_on
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {Upload} upload
 */
/**
 * @typedef CopyFileTask
 * @property {number} attempts_made
 * @property {BulkRequest} data
 * @property {number} delay
 * @property {number} finished_on
 * @property {string} id
 * @property {string} name
 * @property {Opts} opts
 * @property {number} processed_on
 * @property {number} progress
 * @property {string[]} [stacktrace]
 * @property {number} timestamp
 */
/**
 * @typedef DbRecord
 * @property {string} _id
 * @property {CDN} cdn
 * @property {string} content_type
 * @property {string} created_on
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} modified_on
 * @property {string} namespace
 * @property {string} [operation]
 * @property {boolean} success
 * @property {string[]} tags
 * @property {Upload} upload
 */
/**
 * @typedef Destination
 * @property {string} [basepath]
 * @property {string} namespace
 * @property {string} rewrite
 */
/**
 * @typedef FailedResponse
 * @property {string} message
 */
/**
 * @typedef Opts
 * @property {number} [attempts]
 * @property {number} [delay]
 * @property {number} [timestamp]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef ReqConfiguration
 * @property {number} [concurrency]
 */
/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */
/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */
/**
 * @typedef StartRequest
 * @property {string} content_type
 * @property {string} file_name
 * @property {Object} [params]
 * @property {number} size
 * @property {string[]} [tags]
 */
/**
 * @typedef StartResponse
 * @property {CDN} cdn
 * @property {string} content_type
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Upload} upload
 */
/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */
/**
 * @typedef Urls
 * @property {number} expiry
 * @property {string} signed_url
 * @property {string} url
 */

/**
 * @typedef Attribution
 * @property {string} [campaign_cookie_expiry]
 */
/**
 * @typedef CampaignShortLink
 * @property {string} [medium]
 * @property {string} [source]
 */
/**
 * @typedef ErrorRes
 * @property {string} [message]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef RedirectDevice
 * @property {string} [link]
 * @property {string} [type]
 */
/**
 * @typedef Redirects
 * @property {RedirectDevice} [android]
 * @property {boolean} [force_web]
 * @property {RedirectDevice} [ios]
 * @property {WebRedirect} [web]
 */
/**
 * @typedef ShortLinkList
 * @property {ShortLinkRes[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ShortLinkReq
 * @property {boolean} [active]
 * @property {Attribution} [attribution]
 * @property {CampaignShortLink} [campaign]
 * @property {number} [count]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [hash]
 * @property {boolean} [personalized]
 * @property {Redirects} [redirects]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {string} title
 * @property {string} url
 */
/**
 * @typedef ShortLinkRes
 * @property {string} [_id]
 * @property {boolean} [active]
 * @property {boolean} [app_redirect]
 * @property {string} [application]
 * @property {Attribution} [attribution]
 * @property {CampaignShortLink} [campaign]
 * @property {number} [count]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {boolean} [enable_tracking]
 * @property {string} [expire_at]
 * @property {string} [fallback]
 * @property {Object} [meta]
 * @property {boolean} [personalized]
 * @property {Redirects} [redirects]
 * @property {SocialMediaTags} [social_media_tags]
 * @property {string} [title]
 * @property {string} [updated_at]
 * @property {UrlInfo} [url]
 * @property {string} [user_id]
 */
/**
 * @typedef SocialMediaTags
 * @property {string} [description]
 * @property {string} [image]
 * @property {string} [title]
 */
/**
 * @typedef UrlInfo
 * @property {string} [hash]
 * @property {string} [original]
 * @property {string} [short]
 */
/**
 * @typedef WebRedirect
 * @property {string} [link]
 * @property {string} [type]
 */

/**
 * @typedef Android
 * @property {string} [api_key]
 * @property {string} [application_id]
 */
/**
 * @typedef App
 * @property {ApplicationAuth} [auth]
 * @property {string} [channel_type]
 * @property {string} [company_id]
 * @property {string} [desc]
 * @property {string} [name]
 */
/**
 * @typedef AppCartConfig
 * @property {boolean} [bulk_coupons]
 * @property {DeliveryCharges} [delivery_charges]
 * @property {boolean} [enabled]
 * @property {number} [max_cart_items]
 * @property {number} [min_cart_value]
 * @property {boolean} [revenue_engine_coupon]
 */
/**
 * @typedef AppCurrencyResponse
 * @property {string} [application]
 * @property {DefaultCurrency} [default_currency]
 * @property {Currency[]} [supported_currency]
 */
/**
 * @typedef AppDomain
 * @property {string} [name]
 */
/**
 * @typedef AppFeature
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [app]
 * @property {CartFeature} [cart]
 * @property {CommonFeature} [common]
 * @property {string} [created_at]
 * @property {HomePageFeature} [home_page]
 * @property {LandingPageFeature} [landing_page]
 * @property {OrderFeature} [order]
 * @property {PcrFeature} [pcr]
 * @property {ProductDetailFeature} [product_detail]
 * @property {QrFeature} [qr]
 * @property {RegistrationPageFeature} [registration_page]
 * @property {string} [updated_at]
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
 * @typedef AppInventory
 * @property {InventoryArticleAssignment} [article_assignment]
 * @property {InventoryBrandRule} [brand]
 * @property {boolean} [franchise_enabled]
 * @property {string[]} [image]
 * @property {boolean} [only_verified_products]
 * @property {boolean} [out_of_stock]
 * @property {InventoryPaymentConfig} [payment]
 * @property {InventoryStoreRule} [store]
 */
/**
 * @typedef AppInventoryCompanies
 * @property {string} [company_type]
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef AppInventoryConfig
 * @property {InventoryBrand} [brand]
 * @property {InventoryCategory} [category]
 * @property {Object[]} [company_store]
 * @property {InventoryDiscount} [discount]
 * @property {Object[]} [exclude_category]
 * @property {boolean} [franchise_enabled]
 * @property {string[]} [image]
 * @property {boolean} [only_verified_products]
 * @property {boolean} [out_of_stock]
 * @property {InventoryPrice} [price]
 * @property {InventoryStore} [store]
 */
/**
 * @typedef AppInventoryPartialUpdate
 * @property {AppCartConfig} [cart]
 * @property {boolean} [comms_enabled]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {AppPaymentConfig} [payment]
 * @property {RewardPointsConfig} [reward_points]
 */
/**
 * @typedef AppInventoryStores
 * @property {string} [_id]
 * @property {number} [company_id]
 * @property {string} [display_name]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [store_type]
 * @property {number} [uid]
 */
/**
 * @typedef Application
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [app_type]
 * @property {ApplicationAuth} [auth]
 * @property {SecureUrl} [banner]
 * @property {number} [cache_ttl]
 * @property {string} [channel_type]
 * @property {number} [company_id]
 * @property {ApplicationCors} [cors]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {SecureUrl} [favicon]
 * @property {boolean} [is_active]
 * @property {boolean} [is_internal]
 * @property {SecureUrl} [logo]
 * @property {ApplicationMeta[]} [meta]
 * @property {SecureUrl} [mobile_logo]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {ApplicationRedirections[]} [redirections]
 * @property {string} [token]
 * @property {string} [updated_at]
 * @property {ApplicationWebsite} [website]
 */
/**
 * @typedef ApplicationAuth
 * @property {boolean} [enabled]
 */
/**
 * @typedef ApplicationCors
 * @property {string[]} [domains]
 */
/**
 * @typedef ApplicationDetail
 * @property {string} [_id]
 * @property {SecureUrl} banner
 * @property {string} description
 * @property {Domain} [domain]
 * @property {Domain[]} [domains]
 * @property {SecureUrl} favicon
 * @property {SecureUrl} logo
 * @property {SecureUrl} mobile_logo
 * @property {string} name
 */
/**
 * @typedef ApplicationInformation
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {InformationAddress} [address]
 * @property {string} [application]
 * @property {BusinessHighlights} [business_highlights]
 * @property {string} [copyright_text]
 * @property {string} [created_at]
 * @property {Links} [links]
 * @property {SocialLinks} [social_links]
 * @property {InformationSupport} [support]
 * @property {string} [updated_at]
 */
/**
 * @typedef ApplicationInventory
 * @property {string} [_id]
 * @property {string} [app]
 * @property {ArticleAssignmentConfig} [article_assignment]
 * @property {AuthenticationConfig} [authentication]
 * @property {string} [business]
 * @property {AppCartConfig} [cart]
 * @property {boolean} [comms_enabled]
 * @property {string} [created_at]
 * @property {AppInventoryConfig} [inventory]
 * @property {AppLogisticsConfig} [logistics]
 * @property {LoyaltyPointsConfig} [loyalty_points]
 * @property {string} [modified_by]
 * @property {AppOrderConfig} [order]
 * @property {AppPaymentConfig} [payment]
 * @property {string[]} [platforms]
 * @property {RewardPointsConfig} [reward_points]
 * @property {string} [updated_at]
 */
/**
 * @typedef ApplicationMeta
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef ApplicationRedirections
 * @property {string} [redirect_from]
 * @property {string} [redirect_to]
 * @property {string} [type]
 */
/**
 * @typedef ApplicationsResponse
 * @property {Application[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ApplicationWebsite
 * @property {string} [basepath]
 * @property {boolean} [enabled]
 */
/**
 * @typedef AppLogisticsConfig
 * @property {boolean} [dp_assignment]
 * @property {boolean} [logistics_by_seller]
 * @property {boolean} [same_day_delivery]
 * @property {boolean} [serviceability_check]
 */
/**
 * @typedef AppOrderConfig
 * @property {boolean} [enabled]
 * @property {boolean} [force_reassignment]
 * @property {string} [message]
 */
/**
 * @typedef AppPaymentConfig
 * @property {CallbackUrl} [callback_url]
 * @property {number} [cod_amount_limit]
 * @property {number} [cod_charges]
 * @property {boolean} [enabled]
 * @property {Methods} [methods]
 * @property {string} [mode_of_payment]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {string} [source]
 */
/**
 * @typedef AppStoreRules
 * @property {Object[]} [brands]
 * @property {number[]} [companies]
 */
/**
 * @typedef AppSupportedCurrency
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {DefaultCurrency} [default_currency]
 * @property {string[]} [supported_currency]
 * @property {string} [updated_at]
 */
/**
 * @typedef ArticleAssignmentConfig
 * @property {boolean} [post_order_reassignment]
 * @property {ArticleAssignmentRules} [rules]
 */
/**
 * @typedef ArticleAssignmentRule
 * @property {StorePriorityRule} [store_priority]
 */
/**
 * @typedef ArticleAssignmentRules
 * @property {StorePriority} [store_priority]
 */
/**
 * @typedef AuthenticationConfig
 * @property {string} [provider]
 * @property {boolean} [required]
 */
/**
 * @typedef BlogLink
 * @property {string} [icon]
 * @property {string} [link]
 * @property {string} [title]
 */
/**
 * @typedef BrandCompanyInfo
 * @property {number} [company_id]
 * @property {string} [company_name]
 */
/**
 * @typedef BrandsByCompanyResponse
 * @property {CompanyBrandInfo} [brands]
 */
/**
 * @typedef BrandStoreInfo
 * @property {OptedCompany} [company]
 * @property {OptedStoreAddress} [store_address]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {string} [store_name]
 * @property {string} [store_type]
 */
/**
 * @typedef BuildVersion
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [build_status]
 * @property {string} [created_at]
 * @property {string} [platform_type]
 * @property {string} [updated_at]
 * @property {number} [version_code]
 * @property {string} [version_name]
 */
/**
 * @typedef BuildVersionHistory
 * @property {string} [latest_available_version_name]
 * @property {BuildVersion} [versions]
 */
/**
 * @typedef BusinessHighlights
 * @property {string} [_id]
 * @property {string} [icon]
 * @property {string} [sub_title]
 * @property {string} [title]
 */
/**
 * @typedef CallbackUrl
 * @property {string} [app]
 * @property {string} [web]
 */
/**
 * @typedef CartFeature
 * @property {boolean} [google_map]
 * @property {boolean} [gst_input]
 * @property {boolean} [placing_for_customer]
 * @property {boolean} [revenue_engine_coupon]
 * @property {boolean} [staff_selection]
 */
/**
 * @typedef Charges
 * @property {number} [charges]
 * @property {number} [threshold]
 */
/**
 * @typedef CommonFeature
 * @property {CommunicationOptinDialogFeature} [communication_optin_dialog]
 * @property {CompareProductsFeature} [compare_products]
 * @property {CurrencyFeature} [currency]
 * @property {DeploymentStoreSelectionFeature} [deployment_store_selection]
 * @property {FeedbackFeature} [feedback]
 * @property {ListingPriceFeature} [listing_price]
 * @property {RevenueEngineFeature} [revenue_engine]
 * @property {RewardPointsConfig} [reward_points]
 */
/**
 * @typedef CommunicationOptinDialogFeature
 * @property {boolean} [visibility]
 */
/**
 * @typedef CompaniesResponse
 * @property {AppInventoryCompanies} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CompanyAboutAddress
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [address_type]
 * @property {string} [city]
 * @property {string} [country]
 * @property {number} [pincode]
 * @property {string} [state]
 */
/**
 * @typedef CompanyBrandInfo
 * @property {string} [brand_banner_portrait_url]
 * @property {string} [brand_banner_url]
 * @property {string} [brand_logo_url]
 * @property {string} [name]
 * @property {number} [value]
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
 * @typedef CompanyValidator
 * @property {string} [browser_script]
 * @property {JsonSchema[]} [json_schema]
 */
/**
 * @typedef CompareProductsFeature
 * @property {boolean} [enabled]
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
 * @typedef Credentials
 * @property {Android} [android]
 * @property {string} [api_key]
 * @property {string} [application_id]
 * @property {string} [gcm_sender_id]
 * @property {Ios} [ios]
 * @property {string} [project_id]
 */
/**
 * @typedef Credit
 * @property {boolean} [enabled]
 */
/**
 * @typedef CurrenciesResponse
 * @property {Currency[]} [items]
 */
/**
 * @typedef Currency
 * @property {string} [_id]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {number} [decimal_digits]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [symbol]
 * @property {string} [updated_at]
 */
/**
 * @typedef CurrencyConfig
 * @property {string} [_id]
 * @property {string} [code]
 * @property {string} [created_at]
 * @property {number} [decimal_digits]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [symbol]
 * @property {string} [updated_at]
 */
/**
 * @typedef CurrencyFeature
 * @property {string} [default_currency]
 * @property {string} [type]
 * @property {string[]} [value]
 */
/**
 * @typedef Debit
 * @property {boolean} [auto_apply]
 * @property {boolean} [enabled]
 * @property {string} [strategy_channel]
 */
/**
 * @typedef DefaultCurrency
 * @property {string} [code]
 * @property {string} [ref]
 */
/**
 * @typedef DeliveryCharges
 * @property {Charges} [charges]
 * @property {boolean} [enabled]
 */
/**
 * @typedef DeploymentMeta
 * @property {string} [_id]
 * @property {boolean} [all_stores]
 * @property {string} [app]
 * @property {number[]} [deployed_stores]
 * @property {boolean} [enabled]
 * @property {string} [type]
 */
/**
 * @typedef DeploymentStoreSelectionFeature
 * @property {boolean} [enabled]
 * @property {string} [type]
 */
/**
 * @typedef Domain
 * @property {string} [_id]
 * @property {boolean} [is_predefined]
 * @property {boolean} [is_primary]
 * @property {boolean} [is_shortlink]
 * @property {string} [name]
 * @property {boolean} [verified]
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
 * @typedef DomainStatus
 * @property {string} [display]
 * @property {boolean} [status]
 */
/**
 * @typedef DomainStatusRequest
 * @property {string} [domain_url]
 */
/**
 * @typedef DomainStatusResponse
 * @property {boolean} [connected]
 * @property {DomainStatus[]} [status]
 */
/**
 * @typedef DomainSuggestion
 * @property {string} [currency]
 * @property {boolean} is_available
 * @property {string} name
 * @property {number} [price]
 * @property {boolean} [unsupported]
 */
/**
 * @typedef DomainSuggestionsRequest
 * @property {boolean} [custom]
 * @property {string} [domain_url]
 */
/**
 * @typedef DomainSuggestionsResponse
 * @property {DomainSuggestion[]} [domains]
 */
/**
 * @typedef FacebookLink
 * @property {string} [icon]
 * @property {string} [link]
 * @property {string} [title]
 */
/**
 * @typedef FeedbackFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef FilterOrderingStoreRequest
 * @property {boolean} [all_stores]
 * @property {number[]} [deployed_stores]
 * @property {string} [q]
 */
/**
 * @typedef Firebase
 * @property {Credentials} [credentials]
 * @property {boolean} [enabled]
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
 * @typedef FyndRewards
 * @property {FyndRewardsCredentials} [credentials]
 */
/**
 * @typedef FyndRewardsCredentials
 * @property {string} [public_key]
 */
/**
 * @typedef GetIntegrationsOptInsResponse
 * @property {IntegrationOptIn[]} [items]
 * @property {Page} [page]
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
 * @typedef GooglePlusLink
 * @property {string} [icon]
 * @property {string} [link]
 * @property {string} [title]
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
 * @typedef HomePageFeature
 * @property {boolean} [order_processing]
 */
/**
 * @typedef InformationAddress
 * @property {string[]} [address_line]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [loc]
 * @property {InformationPhone} [phone]
 * @property {number} [pincode]
 */
/**
 * @typedef InformationPhone
 * @property {string} [code]
 * @property {string} [number]
 */
/**
 * @typedef InformationSupport
 * @property {string[]} [email]
 * @property {string[]} [phone]
 * @property {string} [timing]
 */
/**
 * @typedef InstagramLink
 * @property {string} [icon]
 * @property {string} [link]
 * @property {string} [title]
 */
/**
 * @typedef Integration
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {Object[]} [companies]
 * @property {Object} [constants]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {string} [icon]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {string} [secret]
 * @property {string[]} [support]
 * @property {string} [token]
 * @property {string} [updated_at]
 * @property {Validators} [validators]
 */
/**
 * @typedef IntegrationConfigResponse
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef IntegrationLevel
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {Object} [data]
 * @property {string} [integration]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [level]
 * @property {IntegrationMeta[]} [meta]
 * @property {boolean} [opted]
 * @property {Object[]} [permissions]
 * @property {string} [token]
 * @property {number} [uid]
 * @property {string} [updated_at]
 */
/**
 * @typedef IntegrationMeta
 * @property {string} [_id]
 * @property {boolean} [is_public]
 * @property {string} [name]
 * @property {string} [value]
 */
/**
 * @typedef IntegrationOptIn
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {Object[]} [companies]
 * @property {string} [constants]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [description_html]
 * @property {string} [icon]
 * @property {IntegrationMeta[]} [meta]
 * @property {string} [name]
 * @property {string} [owner]
 * @property {string} [secret]
 * @property {string[]} [support]
 * @property {string} [token]
 * @property {string} [updated_at]
 * @property {Validators} [validators]
 */
/**
 * @typedef InvalidPayloadRequest
 * @property {string} [message]
 */
/**
 * @typedef InventoryArticleAssignment
 * @property {boolean} [post_order_reassignment]
 * @property {ArticleAssignmentRule} [rules]
 */
/**
 * @typedef InventoryBrand
 * @property {Object[]} [brands]
 * @property {string} [criteria]
 */
/**
 * @typedef InventoryBrandRule
 * @property {number[]} [brands]
 * @property {string} [criteria]
 */
/**
 * @typedef InventoryCategory
 * @property {Object[]} [categories]
 * @property {string} [criteria]
 */
/**
 * @typedef InventoryDiscount
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef InventoryPaymentConfig
 * @property {string} [mode_of_payment]
 * @property {string} [source]
 */
/**
 * @typedef InventoryPrice
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef InventoryStore
 * @property {string} [criteria]
 * @property {AppStoreRules} [rules]
 * @property {Object[]} [stores]
 */
/**
 * @typedef InventoryStoreRule
 * @property {string} [criteria]
 * @property {StoreCriteriaRule[]} [rules]
 * @property {number[]} [stores]
 */
/**
 * @typedef InventoryValidator
 * @property {string} [browser_script]
 * @property {JsonSchema[]} [json_schema]
 */
/**
 * @typedef Ios
 * @property {string} [api_key]
 * @property {string} [application_id]
 */
/**
 * @typedef JsonSchema
 * @property {string} [display]
 * @property {string} [key]
 * @property {string} [tooltip]
 * @property {string} [type]
 */
/**
 * @typedef LandingImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */
/**
 * @typedef LandingPageFeature
 * @property {boolean} [continue_as_guest]
 * @property {LaunchPage} [launch_page]
 * @property {string} [login_btn_text]
 * @property {boolean} [show_domain_textbox]
 * @property {boolean} [show_register_btn]
 */
/**
 * @typedef LastPatch
 * @property {string} [op]
 * @property {string} [path]
 * @property {string} [value]
 */
/**
 * @typedef LaunchPage
 * @property {string} [page_type]
 * @property {Object} [params]
 * @property {Object} [query]
 */
/**
 * @typedef LinkedInLink
 * @property {string} [icon]
 * @property {string} [link]
 * @property {string} [title]
 */
/**
 * @typedef Links
 * @property {string} [link]
 * @property {string} [title]
 */
/**
 * @typedef ListingPriceFeature
 * @property {string} [value]
 */
/**
 * @typedef LoyaltyPointsConfig
 * @property {boolean} [auto_apply]
 * @property {boolean} [enabled]
 */
/**
 * @typedef Methods
 * @property {PaymentModeConfig} [card]
 * @property {PaymentModeConfig} [cod]
 * @property {PaymentModeConfig} [fc]
 * @property {PaymentModeConfig} [jiopp]
 * @property {PaymentModeConfig} [jp]
 * @property {PaymentModeConfig} [juspaypg]
 * @property {PaymentModeConfig} [nb]
 * @property {PaymentModeConfig} [pac]
 * @property {PaymentModeConfig} [payubizpg]
 * @property {PaymentModeConfig} [payumoneypg]
 * @property {PaymentModeConfig} [pl]
 * @property {PaymentModeConfig} [pp]
 * @property {PaymentModeConfig} [ps]
 * @property {PaymentModeConfig} [qr]
 * @property {PaymentModeConfig} [rupifipg]
 * @property {PaymentModeConfig} [simpl]
 * @property {PaymentModeConfig} [stripepg]
 * @property {PaymentModeConfig} [upi]
 * @property {PaymentModeConfig} [wl]
 */
/**
 * @typedef MobileAppConfigRequest
 * @property {string} [app_name]
 * @property {boolean} [is_active]
 * @property {LandingImage} [landing_image]
 * @property {SplashImage} [splash_image]
 */
/**
 * @typedef MobileAppConfiguration
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [app_name]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {boolean} [is_active]
 * @property {LandingImage} [landing_image]
 * @property {string} [package_name]
 * @property {string} [platform_type]
 * @property {SplashImage} [splash_image]
 * @property {string} [updated_at]
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
 * @typedef NotFound
 * @property {string} [message]
 */
/**
 * @typedef OptedApplicationResponse
 * @property {string} [_id]
 * @property {OptedCompany} [company]
 * @property {string} [description]
 * @property {string} [domain]
 * @property {string} [name]
 * @property {OptOutInventory} [opt_out_inventory]
 * @property {OptedInventory} [opted_inventory]
 */
/**
 * @typedef OptedCompany
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef OptedInventory
 * @property {Object} [items]
 * @property {OptType} [opt_type]
 */
/**
 * @typedef OptedStore
 * @property {string} [_id]
 * @property {OptedStoreAddress} [address]
 * @property {number} [company_id]
 * @property {string} [display_name]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [store_code]
 * @property {string} [store_type]
 * @property {number} [uid]
 */
/**
 * @typedef OptedStoreAddress
 * @property {string} [address1]
 * @property {string} [address2]
 * @property {string} [city]
 * @property {string} [country]
 * @property {StoreLatLong} [lat_long]
 * @property {number} [pincode]
 * @property {string} [state]
 */
/**
 * @typedef OptedStoreIntegration
 * @property {OtherEntity} [other_entity]
 * @property {IntegrationOptIn} [other_integration]
 * @property {boolean} [other_opted]
 */
/**
 * @typedef OptOutInventory
 * @property {number[]} company
 * @property {number[]} store
 */
/**
 * @typedef OptType
 * @property {string} [display]
 * @property {string} [key]
 */
/**
 * @typedef OrderFeature
 * @property {boolean} [buy_again]
 */
/**
 * @typedef OrderingStore
 * @property {string} [_id]
 * @property {OptedStoreAddress} [address]
 * @property {string} [code]
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {number} [pincode]
 * @property {string} [store_code]
 * @property {string} [store_type]
 * @property {number} [uid]
 */
/**
 * @typedef OrderingStoreConfig
 * @property {DeploymentMeta} [deployment_meta]
 */
/**
 * @typedef OrderingStores
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {boolean} [all_stores]
 * @property {string} [app]
 * @property {number[]} [deployed_stores]
 * @property {boolean} [enabled]
 * @property {OrderingStore[]} [items]
 * @property {Page} [page]
 * @property {string} [type]
 */
/**
 * @typedef OrderingStoresResponse
 * @property {OrderingStore[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OrderValidator
 * @property {string} [browser_script]
 * @property {JsonSchema[]} [json_schema]
 */
/**
 * @typedef OtherEntity
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [created_at]
 * @property {OtherEntityData} [data]
 * @property {string} [integration]
 * @property {LastPatch[]} [last_patch]
 * @property {string} [level]
 * @property {Object[]} [meta]
 * @property {boolean} [opted]
 * @property {string[]} [permissions]
 * @property {string} [token]
 * @property {number} [uid]
 * @property {string} [updated_at]
 */
/**
 * @typedef OtherEntityData
 * @property {string} [article_identifier]
 */
/**
 * @typedef OtherSellerApplication
 * @property {string} [_id]
 * @property {OtherSellerCompany} [company]
 * @property {string} [description]
 * @property {string} [domain]
 * @property {string} [name]
 * @property {string} [opt_type]
 */
/**
 * @typedef OtherSellerApplications
 * @property {OtherSellerApplication[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef OtherSellerCompany
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef PaymentModeConfig
 * @property {boolean} [enabled]
 */
/**
 * @typedef PaymentSelectionLock
 * @property {string} [default_options]
 * @property {boolean} [enabled]
 * @property {string} [payment_identifier]
 */
/**
 * @typedef PcrFeature
 * @property {boolean} [staff_selection]
 */
/**
 * @typedef PinterestLink
 * @property {string} [icon]
 * @property {string} [link]
 * @property {string} [title]
 */
/**
 * @typedef ProductDetailFeature
 * @property {boolean} [request_product]
 * @property {boolean} [seller_selection]
 * @property {string[]} [similar]
 * @property {boolean} [update_product_meta]
 */
/**
 * @typedef QrFeature
 * @property {boolean} [application]
 * @property {boolean} [collections]
 * @property {boolean} [products]
 */
/**
 * @typedef RegistrationPageFeature
 * @property {boolean} [ask_store_address]
 */
/**
 * @typedef RevenueEngineFeature
 * @property {boolean} [enabled]
 */
/**
 * @typedef RewardPointsConfig
 * @property {Credit} [credit]
 * @property {Debit} [debit]
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
 * @typedef SecureUrl
 * @property {string} [secure_url]
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
 * @typedef SocialLinks
 * @property {BlogLink} [blog_link]
 * @property {FacebookLink} [facebook]
 * @property {GooglePlusLink} [google_plus]
 * @property {InstagramLink} [instagram]
 * @property {LinkedInLink} [linked_in]
 * @property {PinterestLink} [pinterest]
 * @property {TwitterLink} [twitter]
 * @property {VimeoLink} [vimeo]
 * @property {YoutubeLink} [youtube]
 */
/**
 * @typedef SplashImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */
/**
 * @typedef StoreByBrandsRequest
 * @property {number} brands
 * @property {number} [company_id]
 * @property {string} [search_text]
 */
/**
 * @typedef StoreByBrandsResponse
 * @property {BrandStoreInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef StoreCriteriaRule
 * @property {number[]} [brands]
 * @property {number[]} [companies]
 */
/**
 * @typedef StoreLatLong
 * @property {number[]} [coordinates]
 * @property {string} [type]
 */
/**
 * @typedef StorePriority
 * @property {boolean} [enabled]
 * @property {Object[]} [storetype_order]
 */
/**
 * @typedef StorePriorityRule
 * @property {boolean} [enabled]
 * @property {string[]} [storetype_order]
 */
/**
 * @typedef StoresResponse
 * @property {AppInventoryStores} [items]
 * @property {Page} [page]
 */
/**
 * @typedef StoreValidator
 * @property {string} [browser_script]
 * @property {JsonSchema[]} [json_schema]
 */
/**
 * @typedef SuccessMessageResponse
 * @property {string} [message]
 */
/**
 * @typedef TokenResponse
 * @property {number} [__v]
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [created_at]
 * @property {Tokens} [tokens]
 * @property {string} [updated_at]
 */
/**
 * @typedef Tokens
 * @property {Firebase} [firebase]
 * @property {Freshchat} [freshchat]
 * @property {FyndRewards} [fynd_rewards]
 * @property {GoogleMap} [google_map]
 * @property {Gtm} [gtm]
 * @property {Moengage} [moengage]
 * @property {Safetynet} [safetynet]
 * @property {Segment} [segment]
 */
/**
 * @typedef TwitterLink
 * @property {string} [icon]
 * @property {string} [link]
 * @property {string} [title]
 */
/**
 * @typedef UnhandledError
 * @property {string} [message]
 */
/**
 * @typedef UpdateDomain
 * @property {string} [_id]
 */
/**
 * @typedef UpdateDomainTypeRequest
 * @property {string} [action]
 * @property {UpdateDomain} [domain]
 */
/**
 * @typedef UpdateIntegrationLevelRequest
 * @property {IntegrationLevel[]} [items]
 */
/**
 * @typedef UserEmail
 * @property {boolean} [active]
 * @property {string} [email]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 */
/**
 * @typedef UserPhoneNumber
 * @property {boolean} [active]
 * @property {number} [country_code]
 * @property {string} [phone]
 * @property {boolean} [primary]
 * @property {boolean} [verified]
 */
/**
 * @typedef Validators
 * @property {CompanyValidator} [company]
 * @property {InventoryValidator} [inventory]
 * @property {OrderValidator} [order]
 * @property {StoreValidator} [store]
 */
/**
 * @typedef VimeoLink
 * @property {string} [icon]
 * @property {string} [link]
 * @property {string} [title]
 */
/**
 * @typedef YoutubeLink
 * @property {string} [icon]
 * @property {string} [link]
 * @property {string} [title]
 */

/**
 * @typedef ActionQuery
 * @property {string[]} [product_slug]
 */
/**
 * @typedef AppliedPromotion
 * @property {number} [amount]
 * @property {number} [article_quantity]
 * @property {boolean} [mrp_promotion]
 * @property {string} [offer_text]
 * @property {string} [promo_id]
 * @property {string} [promotion_type]
 */
/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
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
 * @property {number} [effective]
 * @property {number} [marked]
 */
/**
 * @typedef BulkBundleRestriction
 * @property {boolean} multi_store_allowed
 */
/**
 * @typedef CartBreakup
 * @property {CouponBreakup} [coupon]
 * @property {DisplayBreakup[]} [display]
 * @property {LoyaltyPoints} [loyalty_points]
 * @property {RawBreakup} [raw]
 */
/**
 * @typedef CartItem
 * @property {string} product_id
 * @property {number} [quantity]
 * @property {string} size
 */
/**
 * @typedef CartItemMeta
 * @property {string} [group_id]
 * @property {boolean} [primary_item]
 */
/**
 * @typedef CartProduct
 * @property {ProductAction} [action]
 * @property {BaseInfo} [brand]
 * @property {CategoryInfo[]} [categories]
 * @property {ProductImage[]} [images]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [type]
 * @property {number} [uid]
 */
/**
 * @typedef CartProductIdentifer
 * @property {string} [identifier]
 */
/**
 * @typedef CartProductInfo
 * @property {ProductArticle} [article]
 * @property {ProductAvailability} [availability]
 * @property {Object} [bulk_offer]
 * @property {string} [coupon_message]
 * @property {string} [discount]
 * @property {CartProductIdentifer} identifiers
 * @property {boolean} [is_set]
 * @property {string} [key]
 * @property {string} [message]
 * @property {Object} [parent_item_identifiers]
 * @property {ProductPriceInfo} [price]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {CartProduct} [product]
 * @property {PromoMeta} [promo_meta]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {number} [quantity]
 */
/**
 * @typedef CategoryInfo
 * @property {string} [name]
 * @property {number} [uid]
 */
/**
 * @typedef CompareObject
 * @property {number} [equals]
 * @property {number} [greater_than]
 * @property {number} [greater_than_equals]
 * @property {number} [less_than]
 * @property {number} [less_than_equals]
 */
/**
 * @typedef CouponAction
 * @property {string} [action_date]
 * @property {string} [txn_mode]
 */
/**
 * @typedef CouponAdd
 * @property {CouponSchedule} [_schedule]
 * @property {CouponAction} [action]
 * @property {CouponAuthor} [author]
 * @property {string} code
 * @property {CouponDateMeta} [date_meta]
 * @property {DisplayMeta} display_meta
 * @property {Identifier} identifiers
 * @property {Ownership} ownership
 * @property {Restrictions} [restrictions]
 * @property {Rule[]} rule
 * @property {RuleDefinition} rule_definition
 * @property {State} [state]
 * @property {string[]} [tags]
 * @property {string} type_slug
 * @property {Validation} [validation]
 * @property {Validity} validity
 */
/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */
/**
 * @typedef CouponBreakup
 * @property {string} [code]
 * @property {boolean} [is_applied]
 * @property {string} [message]
 * @property {string} [type]
 * @property {string} [uid]
 * @property {number} [value]
 */
/**
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef CouponPartialUpdate
 * @property {boolean} [archive]
 * @property {CouponSchedule} [schedule]
 */
/**
 * @typedef CouponSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {string} [start]
 */
/**
 * @typedef CouponsResponse
 * @property {CouponAdd} [items]
 * @property {Page} [page]
 */
/**
 * @typedef CouponUpdate
 * @property {CouponSchedule} [_schedule]
 * @property {CouponAction} [action]
 * @property {CouponAuthor} [author]
 * @property {string} code
 * @property {CouponDateMeta} [date_meta]
 * @property {DisplayMeta} display_meta
 * @property {Identifier} identifiers
 * @property {Ownership} ownership
 * @property {Restrictions} [restrictions]
 * @property {Rule[]} rule
 * @property {RuleDefinition} rule_definition
 * @property {State} [state]
 * @property {string[]} [tags]
 * @property {string} type_slug
 * @property {Validation} [validation]
 * @property {Validity} validity
 */
/**
 * @typedef DiscountOffer
 * @property {string} [code]
 * @property {number} [discount_amount]
 * @property {number} [discount_percentage]
 * @property {number} [discount_price]
 * @property {number} [max_discount_amount]
 * @property {number} [max_offer_quantity]
 * @property {number} [min_offer_quantity]
 */
/**
 * @typedef DiscountRule
 * @property {string} buy_condition
 * @property {string} discount_type
 * @property {ItemCriteria} item_criteria
 * @property {DiscountOffer} offer
 */
/**
 * @typedef DisplayBreakup
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {string} [display]
 * @property {string} [key]
 * @property {string[]} [message]
 * @property {number} [value]
 */
/**
 * @typedef DisplayMeta
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [auto]
 * @property {string} [description]
 * @property {DisplayMetaDict} [remove]
 * @property {string} [subtitle]
 * @property {string} [title]
 */
/**
 * @typedef DisplayMeta1
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [offer_text]
 */
/**
 * @typedef DisplayMetaDict
 * @property {string} [subtitle]
 * @property {string} [title]
 */
/**
 * @typedef Identifier
 * @property {string[]} [article_id]
 * @property {number[]} [brand_id]
 * @property {number[]} [category_id]
 * @property {string[]} [collection_id]
 * @property {number[]} [company_id]
 * @property {number[]} [exclude_brand_id]
 * @property {number[]} [item_id]
 * @property {number[]} [store_id]
 * @property {string[]} [user_id]
 */
/**
 * @typedef ItemCriteria
 * @property {boolean} [all_items]
 * @property {string[]} [buy_rules]
 * @property {CompareObject} [cart_quantity]
 * @property {CompareObject} [cart_total]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_category]
 * @property {number[]} [item_company]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_exclude_category]
 * @property {number[]} [item_exclude_company]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_exclude_store]
 * @property {number[]} [item_id]
 * @property {string[]} [item_size]
 * @property {string[]} [item_sku]
 * @property {number[]} [item_store]
 */
/**
 * @typedef LoyaltyPoints
 * @property {number} [applicable]
 * @property {string} [description]
 * @property {boolean} [is_applied]
 * @property {number} [total]
 */
/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [current_status]
 * @property {Object} [extra_meta]
 * @property {string} [order_id]
 * @property {string} [payment_gateway]
 * @property {string} [payment_id]
 */
/**
 * @typedef MultiTenderPaymentMethod
 * @property {number} amount
 * @property {MultiTenderPaymentMeta} [meta]
 * @property {string} mode
 * @property {string} [name]
 */
/**
 * @typedef OpenapiCartDetailsRequest
 * @property {CartItem} [cart_items]
 */
/**
 * @typedef OpenapiCartDetailsResponse
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
 */
/**
 * @typedef OpenApiCartServiceabilityRequest
 * @property {CartItem} [cart_items]
 * @property {ShippingAddress} shipping_address
 */
/**
 * @typedef OpenApiCartServiceabilityResponse
 * @property {CartBreakup} [breakup_values]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {boolean} [is_valid]
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
 */
/**
 * @typedef OpenApiCheckoutResponse
 * @property {string} [message]
 * @property {string} order_id
 * @property {string} [order_ref_id]
 * @property {boolean} [success]
 */
/**
 * @typedef OpenApiErrorResponse
 * @property {Object} [errors]
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef OpenApiFiles
 * @property {string} key
 * @property {string[]} values
 */
/**
 * @typedef OpenApiOrderItem
 * @property {number} amount_paid
 * @property {number} cashback_applied
 * @property {number} cod_charges
 * @property {number} coupon_effective_discount
 * @property {number} delivery_charges
 * @property {number} discount
 * @property {number} [employee_discount]
 * @property {Object} [extra_meta]
 * @property {OpenApiFiles[]} [files]
 * @property {number} [loyalty_discount]
 * @property {CartItemMeta} [meta]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {number} price_effective
 * @property {number} price_marked
 * @property {number} product_id
 * @property {number} [quantity]
 * @property {string} size
 */
/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {string} [affiliate_order_id]
 * @property {ShippingAddress} billing_address
 * @property {OpenApiOrderItem[]} cart_items
 * @property {number} cart_value
 * @property {number} cashback_applied
 * @property {number} cod_charges
 * @property {string} [comment]
 * @property {string} [coupon]
 * @property {string} coupon_code
 * @property {number} coupon_value
 * @property {string} [currency_code]
 * @property {number} delivery_charges
 * @property {Object} [employee_discount]
 * @property {OpenApiFiles[]} [files]
 * @property {string} [gstin]
 * @property {number} [loyalty_discount]
 * @property {string} [order_id]
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {string} [payment_mode]
 * @property {ShippingAddress} [shipping_address]
 */
/**
 * @typedef OperationErrorResponse
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef Ownership
 * @property {string} payable_by
 * @property {string} payable_category
 */
/**
 * @typedef Ownership1
 * @property {string} payable_by
 * @property {string} payable_category
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */
/**
 * @typedef PaymentAllowValue1
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
 * @typedef PostOrder
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */
/**
 * @typedef PostOrder1
 * @property {boolean} [cancellation_allowed]
 * @property {boolean} [return_allowed]
 */
/**
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
 */
/**
 * @typedef ProductAction
 * @property {ActionQuery} [query]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef ProductArticle
 * @property {Object} [extra_meta]
 * @property {Object} [parent_item_identifiers]
 * @property {ArticlePriceInfo} [price]
 * @property {string[]} [product_group_tags]
 * @property {number} [quantity]
 * @property {BaseInfo} [seller]
 * @property {string} [size]
 * @property {BaseInfo} [store]
 * @property {string} [type]
 * @property {string} [uid]
 */
/**
 * @typedef ProductAvailability
 * @property {boolean} [deliverable]
 * @property {boolean} [is_valid]
 * @property {number} [other_store_quantity]
 * @property {boolean} [out_of_stock]
 * @property {string[]} [sizes]
 */
/**
 * @typedef ProductImage
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 * @property {string} [url]
 */
/**
 * @typedef ProductPrice
 * @property {number} [add_on]
 * @property {string} [currency_code]
 * @property {string} [currency_symbol]
 * @property {number} [effective]
 * @property {number} [marked]
 * @property {number} [selling]
 */
/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [base]
 * @property {ProductPrice} [converted]
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
 * @typedef PromoMeta
 * @property {string} [message]
 */
/**
 * @typedef PromotionAction
 * @property {string} action_date
 * @property {string} action_type
 */
/**
 * @typedef PromotionAdd
 * @property {Object} [_custom_json]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} application_id
 * @property {boolean} [apply_all_discount]
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {PromotionAuthor} [author]
 * @property {Object} buy_rules
 * @property {string} [code]
 * @property {string} [currency]
 * @property {PromotionDateMeta} [date_meta]
 * @property {DiscountRule[]} discount_rules
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {Ownership1} ownership
 * @property {PromotionAction} [post_order_action]
 * @property {string} promo_group
 * @property {string} promotion_type
 * @property {Restrictions1} [restrictions]
 * @property {boolean} [stackable]
 * @property {Visibility} [visiblility]
 */
/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */
/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */
/**
 * @typedef PromotionListItem
 * @property {Object} [_custom_json]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} application_id
 * @property {boolean} [apply_all_discount]
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {PromotionAuthor} [author]
 * @property {Object} buy_rules
 * @property {string} [code]
 * @property {string} [currency]
 * @property {PromotionDateMeta} [date_meta]
 * @property {DiscountRule[]} discount_rules
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {Ownership1} ownership
 * @property {PromotionAction} [post_order_action]
 * @property {string} promo_group
 * @property {string} promotion_type
 * @property {Restrictions1} [restrictions]
 * @property {boolean} [stackable]
 * @property {Visibility} [visiblility]
 */
/**
 * @typedef PromotionPartialUpdate
 * @property {boolean} [archive]
 * @property {PromotionSchedule} [schedule]
 */
/**
 * @typedef PromotionPaymentModes
 * @property {string[]} [codes]
 * @property {string} type
 * @property {PaymentAllowValue1} [uses]
 */
/**
 * @typedef PromotionSchedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 * @property {boolean} published
 * @property {string} start
 */
/**
 * @typedef PromotionsResponse
 * @property {PromotionListItem} [items]
 * @property {Page} [page]
 */
/**
 * @typedef PromotionUpdate
 * @property {Object} [_custom_json]
 * @property {PromotionSchedule} [_schedule]
 * @property {string} application_id
 * @property {boolean} [apply_all_discount]
 * @property {string} [apply_exclusive]
 * @property {number} [apply_priority]
 * @property {PromotionAuthor} [author]
 * @property {Object} buy_rules
 * @property {string} [code]
 * @property {string} [currency]
 * @property {PromotionDateMeta} [date_meta]
 * @property {DiscountRule[]} discount_rules
 * @property {DisplayMeta1} display_meta
 * @property {string} mode
 * @property {Ownership1} ownership
 * @property {PromotionAction} [post_order_action]
 * @property {string} promo_group
 * @property {string} promotion_type
 * @property {Restrictions1} [restrictions]
 * @property {boolean} [stackable]
 * @property {Visibility} [visiblility]
 */
/**
 * @typedef RawBreakup
 * @property {number} [cod_charge]
 * @property {number} [convenience_fee]
 * @property {number} [coupon]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [fynd_cash]
 * @property {number} [gst_charges]
 * @property {number} [mrp_total]
 * @property {number} [subtotal]
 * @property {number} [total]
 * @property {number} [vog]
 * @property {number} [you_saved]
 */
/**
 * @typedef Restrictions
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {boolean} [coupon_allowed]
 * @property {number[]} [ordering_stores]
 * @property {Object} [payments]
 * @property {string[]} [platforms]
 * @property {PostOrder} [post_order]
 * @property {PriceRange} [price_range]
 * @property {number[]} [user_groups]
 * @property {UsesRestriction} [uses]
 */
/**
 * @typedef Restrictions1
 * @property {boolean} [anonymous_users]
 * @property {number} [order_quantity]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {string[]} [platforms]
 * @property {PostOrder1} [post_order]
 * @property {number[]} [user_groups]
 * @property {string[]} [user_id]
 * @property {UserRegistered} [user_registered]
 * @property {UsesRestriction1} uses
 */
/**
 * @typedef Rule
 * @property {number} [discount_qty]
 * @property {number} [key]
 * @property {number} [max]
 * @property {number} [min]
 * @property {number} [value]
 */
/**
 * @typedef RuleDefinition
 * @property {string} applicable_on
 * @property {boolean} [auto_apply]
 * @property {string} calculate_on
 * @property {string} [currency_code]
 * @property {boolean} [is_exact]
 * @property {string[]} [scope]
 * @property {string} type
 * @property {string} value_type
 */
/**
 * @typedef ShipmentPromise
 * @property {PromiseFormatted} [formatted]
 * @property {PromiseTimestamp} [timestamp]
 */
/**
 * @typedef ShippingAddress
 * @property {string} [address]
 * @property {string} [address_type]
 * @property {string} [area]
 * @property {string} area_code
 * @property {string} [area_code_slug]
 * @property {string} [city]
 * @property {string} [country]
 * @property {string} [country_code]
 * @property {string} [email]
 * @property {string} [landmark]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {number} [phone]
 * @property {number} [pincode]
 * @property {string} [state]
 */
/**
 * @typedef State
 * @property {boolean} [is_archived]
 * @property {boolean} [is_display]
 * @property {boolean} [is_public]
 */
/**
 * @typedef SuccessMessage
 * @property {string} [message]
 * @property {boolean} [success]
 */
/**
 * @typedef UserRegistered
 * @property {string} [end]
 * @property {string} [start]
 */
/**
 * @typedef UsesRemaining
 * @property {number} [app]
 * @property {number} [total]
 * @property {number} [user]
 */
/**
 * @typedef UsesRemaining1
 * @property {number} [total]
 * @property {number} [user]
 */
/**
 * @typedef UsesRestriction
 * @property {UsesRemaining} [maximum]
 * @property {UsesRemaining} [remaining]
 */
/**
 * @typedef UsesRestriction1
 * @property {UsesRemaining1} [maximum]
 * @property {UsesRemaining1} [remaining]
 */
/**
 * @typedef Validation
 * @property {boolean} [anonymous]
 * @property {string[]} [app_id]
 * @property {string} [user_registered_after]
 */
/**
 * @typedef Validity
 * @property {number} [priority]
 */
/**
 * @typedef Visibility
 * @property {boolean} coupon_list
 * @property {boolean} pdp
 */

/**
 * @typedef AbandonCartDetail
 * @property {string} [_id]
 * @property {Object} [address]
 * @property {Object[]} [articles]
 * @property {Object} [breakup]
 * @property {string} [cart_value]
 * @property {string} [user_id]
 */
/**
 * @typedef AbandonCartsDetail
 * @property {string} [context_app_application_id]
 * @property {string} [context_traits_email]
 * @property {string} [context_traits_first_name]
 * @property {string} [context_traits_last_name]
 * @property {string} [context_traits_phone_number]
 * @property {string} [properties_breakup_values_raw_total]
 * @property {string} [properties_cart_id]
 * @property {ReceivedAt} [received_at]
 */
/**
 * @typedef AbandonCartsList
 * @property {string} [cart_total]
 * @property {AbandonCartsDetail[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef ErrorRes
 * @property {string} [message]
 */
/**
 * @typedef ExportJobReq
 * @property {string} [end_time]
 * @property {string} [event_type]
 * @property {string} [marketplace_name]
 * @property {string} [start_time]
 * @property {string} [trace_id]
 */
/**
 * @typedef ExportJobRes
 * @property {string} [job_id]
 * @property {string} [status]
 */
/**
 * @typedef ExportJobStatusRes
 * @property {string} [download_url]
 * @property {string} [job_id]
 * @property {string} [status]
 */
/**
 * @typedef GetLogsListReq
 * @property {string} [company_id]
 * @property {string} [end_date]
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 */
/**
 * @typedef GetLogsListRes
 * @property {MkpLogsResp[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef LogInfo
 * @property {string} [_id]
 * @property {string} [article_id]
 * @property {number} [brand_id]
 * @property {number} [company_id]
 * @property {string} [event]
 * @property {string} [event_type]
 * @property {number} [item_id]
 * @property {string} [marketplace_name]
 * @property {string} [seller_identifier]
 * @property {string} [status]
 * @property {string} [store_code]
 * @property {number} [store_id]
 * @property {string} [trace_id]
 */
/**
 * @typedef MkpLogsResp
 * @property {string} [count]
 * @property {string} [end_time_iso]
 * @property {string} [event_type]
 * @property {string} [start_time_iso]
 * @property {string} [status]
 * @property {string} [trace_id]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef ReceivedAt
 * @property {string} [value]
 */
/**
 * @typedef SearchLogReq
 * @property {string} [company_id]
 * @property {string} [end_date]
 * @property {string} [identifier]
 * @property {string} [identifier_value]
 * @property {string} [marketplace_name]
 * @property {string} [start_date]
 */
/**
 * @typedef SearchLogRes
 * @property {LogInfo[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef StatGroup
 * @property {string} [key]
 * @property {string} [title]
 * @property {string} [url]
 */
/**
 * @typedef StatsGroupComponent
 * @property {Object} [filters]
 * @property {string} [key]
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} [url]
 */
/**
 * @typedef StatsGroupComponents
 * @property {StatsGroupComponent[]} [components]
 * @property {string} [title]
 */
/**
 * @typedef StatsGroups
 * @property {StatGroup[]} [groups]
 */
/**
 * @typedef StatsRes
 * @property {Object} [data]
 * @property {string} [key]
 * @property {string} [title]
 * @property {string} [type]
 */

/**
 * @typedef BadRequestObject
 * @property {string} message
 */
/**
 * @typedef CancelJobResponse
 * @property {boolean} success
 */
/**
 * @typedef CreateUpdateDiscount
 * @property {string[]} app_ids
 * @property {number[]} [brand_ids]
 * @property {number} company_id
 * @property {string} discount_level
 * @property {string} discount_type
 * @property {string[]} extension_ids
 * @property {string} [file_path]
 * @property {boolean} is_active
 * @property {string} job_type
 * @property {string} name
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {number} [value]
 */
/**
 * @typedef DiscountJob
 * @property {string} _id
 * @property {string[]} [app_ids]
 * @property {number[]} [brand_ids]
 * @property {number} company_id
 * @property {UserDetails} created_by
 * @property {string} created_on
 * @property {string} [discount_level]
 * @property {string} [discount_type]
 * @property {string} [file_path]
 * @property {boolean} is_active
 * @property {string} [job_type]
 * @property {Object} [meta]
 * @property {UserDetails} modified_by
 * @property {string} modified_on
 * @property {string} name
 * @property {number[]} [store_ids]
 * @property {ValidityObject} validity
 * @property {number} [value]
 */
/**
 * @typedef DownloadFileJob
 * @property {number[]} [brand_ids]
 * @property {number[]} [store_ids]
 */
/**
 * @typedef FileJobResponse
 * @property {Object} [body]
 * @property {number} company_id
 * @property {number} failed
 * @property {string} file_type
 * @property {string} stage
 * @property {number} total
 * @property {string} type
 */
/**
 * @typedef ListOrCalender
 * @property {DiscountJob[]} items
 * @property {Page} page
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef UserDetails
 * @property {string} user_id
 * @property {string} username
 */
/**
 * @typedef ValidityObject
 * @property {string} end
 * @property {string} start
 */

/**
 * @typedef AddProxyReq
 * @property {string} [attached_path]
 * @property {string} [proxy_url]
 */
/**
 * @typedef AddProxyResponse
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {string} [attached_path]
 * @property {string} [company_id]
 * @property {string} [created_at]
 * @property {string} [extension_id]
 * @property {string} [modified_at]
 * @property {string} [proxy_url]
 */
/**
 * @typedef APIError
 * @property {string} [code]
 * @property {string} [info]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {string} [request_id]
 */
/**
 * @typedef RemoveProxyResponse
 * @property {Object} [data]
 * @property {string} [message]
 */

/**
 * @typedef Association
 * @property {string[]} [application_id]
 * @property {number} [company_id]
 * @property {string} [criteria]
 * @property {string} [extension_id]
 */
/**
 * @typedef AuthMeta
 * @property {string} [secret]
 * @property {string} [type]
 */
/**
 * @typedef EventConfig
 * @property {string} [created_on]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {number} [id]
 * @property {string} [version]
 */
/**
 * @typedef EventConfigBase
 * @property {string} [event_category]
 * @property {string} [event_name]
 * @property {string} [event_type]
 * @property {string} [version]
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
 * @typedef EventPayload
 * @property {string} [event_name]
 * @property {string} [event_trace_id]
 * @property {string} [event_type]
 * @property {number} [id]
 * @property {string} [message_id]
 * @property {boolean} [status]
 * @property {string} [version]
 */
/**
 * @typedef EventProcessedStatus
 * @property {number} [attempt]
 * @property {string} [created_on]
 * @property {number} [id]
 * @property {string} [processed_on]
 * @property {string} [response_code]
 * @property {string} [response_message]
 * @property {boolean} [status]
 * @property {string} [subscriber_id]
 */
/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */
/**
 * @typedef SubscriberConfig
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {number[]} [event_id]
 * @property {number} [id]
 * @property {string} [name]
 * @property {SubscriberStatus} [status]
 * @property {string} [webhook_url]
 */
/**
 * @typedef SubscriberConfigList
 * @property {SubscriberResponse[]} [items]
 * @property {Page} [page]
 */
/**
 * @typedef SubscriberEvent
 * @property {string} [created_date]
 * @property {number} [event_id]
 * @property {number} [id]
 * @property {number} [subscriber_id]
 */
/**
 * @typedef SubscriberResponse
 * @property {Association} [association]
 * @property {AuthMeta} [auth_meta]
 * @property {string} [created_on]
 * @property {Object} [custom_headers]
 * @property {string} [email_id]
 * @property {EventConfig[]} [event_configs]
 * @property {number} [id]
 * @property {string} [name]
 * @property {SubscriberStatus} [status]
 * @property {string} [updated_on]
 * @property {string} [webhook_url]
 */

/**
 * @typedef BadRequest
 * @property {string} [message]
 */
/**
 * @typedef CreateLogResponse
 * @property {string} [internal_message]
 * @property {string} [message]
 */
/**
 * @typedef DeviceInfo
 * @property {Object} [extra_meta]
 * @property {string} [user_agent]
 */
/**
 * @typedef EntityObj
 * @property {string} [action]
 * @property {Object} [entity_details]
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef EntityObject
 * @property {string} [action]
 * @property {string} [id]
 * @property {string} [type]
 */
/**
 * @typedef EntityTypeObj
 * @property {string} [display_name]
 * @property {string} [entity_value]
 */
/**
 * @typedef EntityTypesResponse
 * @property {EntityTypeObj[]} [items]
 */
/**
 * @typedef InternalServerError
 * @property {string} [code]
 * @property {string} [message]
 */
/**
 * @typedef Location
 * @property {Object} [extra_meta]
 */
/**
 * @typedef LogDocs
 * @property {string} [_id]
 * @property {string} [application]
 * @property {string} [company]
 * @property {string} [date]
 * @property {DeviceInfo} [device_info]
 * @property {EntityObj} [entity]
 * @property {Location} [location]
 * @property {Object} [logs]
 * @property {Modifier} [modifier]
 * @property {string} [sessions]
 */
/**
 * @typedef LogMetaObj
 * @property {string} [application]
 * @property {Object} [device_info]
 * @property {EntityObject} [entity]
 * @property {Object} [location]
 * @property {Object} [modifier]
 */
/**
 * @typedef LogSchemaResponse
 * @property {LogDocs[]} [docs]
 */
/**
 * @typedef Modifier
 * @property {boolean} [as_administrator]
 * @property {Object} [user_details]
 * @property {string} [user_id]
 */
/**
 * @typedef RequestBodyAuditLog
 * @property {LogMetaObj} log_meta
 * @property {Object} log_payload
 */
/**
 * @typedef ResourceNotFound
 * @property {string} [message]
 */

module.exports = PlatformClient;
