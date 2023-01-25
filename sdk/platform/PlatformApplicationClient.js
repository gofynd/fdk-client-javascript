const {
  LeadValidator,
  ThemeValidator,
  UserValidator,
  ContentValidator,
  CommunicationValidator,
  PaymentValidator,
  OrderValidator,
  CatalogValidator,
  FileStorageValidator,
  ShareValidator,
  ConfigurationValidator,
  CartValidator,
  RewardsValidator,
  AnalyticsValidator,
  PartnerValidator,
  ServiceabilityValidator,
} = require("./PlatformApplicationModels");
const PlatformAPIClient = require("./PlatformAPIClient");
const Paginator = require("../common/Paginator");
const { FDKClientValidationError } = require("../common/FDKError");

class PlatformApplicationClient {
  constructor(applicationId, config) {
    this.config = config;
    this.companyId = config.companyId;
    this.applicationId = applicationId;

    this.lead = new Lead(config, applicationId);
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
    this.serviceability = new Serviceability(config, applicationId);
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
 * @typedef PaymentGatewayConfigResponse
 * @property {Object[]} [aggregators]
 * @property {string[]} display_fields
 * @property {string[]} excluded_fields
 * @property {string} app_id
 * @property {boolean} created
 * @property {boolean} success
 */

/**
 * @typedef ErrorCodeDescription
 * @property {string} code
 * @property {string} description
 * @property {boolean} success
 */

/**
 * @typedef PaymentGatewayConfig
 * @property {string} config_type
 * @property {string} key
 * @property {string} merchant_salt
 * @property {string} secret
 * @property {boolean} [is_active]
 */

/**
 * @typedef PaymentGatewayConfigRequest
 * @property {string} app_id
 * @property {PaymentGatewayConfig} [aggregator_name]
 * @property {boolean} [is_active]
 */

/**
 * @typedef PaymentGatewayToBeReviewed
 * @property {string[]} aggregator
 * @property {boolean} success
 */

/**
 * @typedef ErrorCodeAndDescription
 * @property {string} code
 * @property {string} description
 */

/**
 * @typedef HttpErrorCodeAndResponse
 * @property {ErrorCodeAndDescription} error
 * @property {boolean} success
 */

/**
 * @typedef IntentAppErrorList
 * @property {string} [code]
 * @property {string} [package_name]
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
 * @typedef PaymentModeList
 * @property {string} [display_name]
 * @property {IntentAppErrorList[]} [intent_app_error_dict_list]
 * @property {string} [card_type]
 * @property {string} [card_brand]
 * @property {string} [card_isin]
 * @property {number} [cod_limit_per_order]
 * @property {string} [merchant_code]
 * @property {number} [timeout]
 * @property {number} [retry_count]
 * @property {string} [card_brand_image]
 * @property {IntentApp[]} [intent_app]
 * @property {string} [card_token]
 * @property {string} aggregator_name
 * @property {string} [nickname]
 * @property {number} [remaining_limit]
 * @property {PaymentModeLogo} [logo_url]
 * @property {string[]} [intent_app_error_list]
 * @property {number} [exp_year]
 * @property {boolean} [expired]
 * @property {string} [card_number]
 * @property {string} [code]
 * @property {string} [card_id]
 * @property {number} [display_priority]
 * @property {number} [exp_month]
 * @property {boolean} [compliant_with_tokenisation_guidelines]
 * @property {string} [card_reference]
 * @property {string} [fynd_vpa]
 * @property {string} [name]
 * @property {string} [card_name]
 * @property {boolean} [intent_flow]
 * @property {string} [card_issuer]
 * @property {number} [cod_limit]
 * @property {string} [card_fingerprint]
 */

/**
 * @typedef RootPaymentMode
 * @property {string} display_name
 * @property {boolean} [save_card]
 * @property {PaymentModeList[]} [list]
 * @property {boolean} [is_pay_by_card_pl]
 * @property {string} name
 * @property {boolean} [anonymous_enable]
 * @property {string} [aggregator_name]
 * @property {number} display_priority
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
 * @typedef PayoutsResponse
 * @property {Object[]} payouts_aggregators
 * @property {Object} unique_transfer_no
 * @property {string} transfer_type
 * @property {Object} more_attributes
 * @property {boolean} is_default
 * @property {Object} customers
 * @property {boolean} is_active
 */

/**
 * @typedef PayoutBankDetails
 * @property {string} [bank_name]
 * @property {number} [pincode]
 * @property {string} [branch_name]
 * @property {string} [country]
 * @property {string} ifsc_code
 * @property {string} [account_holder]
 * @property {string} [state]
 * @property {string} [city]
 * @property {string} account_type
 * @property {string} [account_no]
 */

/**
 * @typedef PayoutRequest
 * @property {string} unique_external_id
 * @property {string} transfer_type
 * @property {PayoutBankDetails} bank_details
 * @property {boolean} is_active
 * @property {string} aggregator
 * @property {Object} users
 */

/**
 * @typedef PayoutResponse
 * @property {string} unique_transfer_no
 * @property {string} transfer_type
 * @property {Object} bank_details
 * @property {string} payment_status
 * @property {Object} payouts
 * @property {boolean} is_active
 * @property {boolean} created
 * @property {string} aggregator
 * @property {Object} users
 * @property {boolean} success
 */

/**
 * @typedef UpdatePayoutResponse
 * @property {boolean} is_default
 * @property {boolean} is_active
 * @property {boolean} success
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
 * @property {boolean} [is_verified_flag]
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef NotFoundResourceError
 * @property {string} code
 * @property {string} description
 * @property {boolean} success
 */

/**
 * @typedef BankDetailsForOTP
 * @property {string} bank_name
 * @property {string} branch_name
 * @property {string} ifsc_code
 * @property {string} account_holder
 * @property {string} account_no
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
 * @property {string} bank_name
 * @property {string} display_name
 * @property {string} [delights_user_name]
 * @property {string} [branch_name]
 * @property {string} beneficiary_id
 * @property {string} email
 * @property {string} modified_on
 * @property {string} title
 * @property {string} ifsc_code
 * @property {string} created_on
 * @property {boolean} is_active
 * @property {string} address
 * @property {string} [mobile]
 * @property {string} [comment]
 * @property {string} subtitle
 * @property {number} id
 * @property {string} account_no
 * @property {string} account_holder
 * @property {string} transfer_mode
 */

/**
 * @typedef OrderBeneficiaryResponse
 * @property {boolean} [show_beneficiary_details]
 * @property {OrderBeneficiaryDetails[]} [beneficiaries]
 */

/**
 * @typedef MultiTenderPaymentMeta
 * @property {string} [order_id]
 * @property {string} [current_status]
 * @property {Object} [extra_meta]
 * @property {string} [payment_gateway]
 * @property {string} [payment_id]
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
 * @property {string} order_id
 * @property {string} message
 * @property {boolean} success
 */

/**
 * @typedef CODdata
 * @property {number} remaining_limit
 * @property {number} limit
 * @property {number} usages
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
 * @property {string} mobileno
 * @property {string} merchant_user_id
 * @property {boolean} is_active
 */

/**
 * @typedef SetCODOptionResponse
 * @property {string} message
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
 * @typedef GSTDetailsData
 * @property {number} tax_collected_at_source
 * @property {number} value_of_good
 * @property {string} gstin_code
 * @property {number} gst_fee
 * @property {number} brand_calculated_amount
 */

/**
 * @typedef Prices
 * @property {number} [cashback_applied]
 * @property {number} [amount_paid_roundoff]
 * @property {number} [tax_collected_at_source]
 * @property {number} [fynd_credits]
 * @property {number} [promotion_effective_discount]
 * @property {number} [refund_amount]
 * @property {number} [amount_paid]
 * @property {number} [price_marked]
 * @property {number} [cod_charges]
 * @property {number} [value_of_good]
 * @property {number} [coupon_value]
 * @property {number} [refund_credit]
 * @property {number} [cashback]
 * @property {number} [delivery_charge]
 * @property {number} [discount]
 * @property {number} [price_effective]
 */

/**
 * @typedef PlatformItem
 * @property {boolean} [can_return]
 * @property {boolean} [can_cancel]
 * @property {number} [l3_category]
 * @property {string} [color]
 * @property {number} [department_id]
 * @property {string[]} [images]
 * @property {number} [id]
 * @property {string} [size]
 * @property {string} [code]
 * @property {string} [name]
 * @property {string} [l3_category_name]
 * @property {string[]} [image]
 * @property {string[]} [l1_category]
 */

/**
 * @typedef BagUnit
 * @property {number} total_shipment_bags
 * @property {string} shipment_id
 * @property {Object} status
 * @property {GSTDetailsData} [gst]
 * @property {string} ordering_channel
 * @property {number} bag_id
 * @property {number} item_quantity
 * @property {Prices} [prices]
 * @property {PlatformItem} [item]
 */

/**
 * @typedef ShipmentStatus
 * @property {string} ops_status
 * @property {string} status
 * @property {string} hex_code
 * @property {string} title
 * @property {string} actual_status
 */

/**
 * @typedef UserDataInfo
 * @property {string} [avis_user_id]
 * @property {string} [email]
 * @property {string} [gender]
 * @property {string} [mobile]
 * @property {boolean} [is_anonymous_user]
 * @property {string} [first_name]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {string} [last_name]
 */

/**
 * @typedef ShipmentItemFulFillingStore
 * @property {string} code
 * @property {string} id
 */

/**
 * @typedef PaymentModeInfo
 * @property {string} logo
 * @property {string} type
 */

/**
 * @typedef ShipmentItem
 * @property {number} total_bags_count
 * @property {Object} [channel]
 * @property {BagUnit[]} [bags]
 * @property {Object} [sla]
 * @property {ShipmentStatus} [shipment_status]
 * @property {Object} [payment_methods]
 * @property {string} id
 * @property {string} created_at
 * @property {Object} [application]
 * @property {number} shipment_created_at
 * @property {string} fulfilling_centre
 * @property {UserDataInfo} [user]
 * @property {ShipmentItemFulFillingStore} [fulfilling_store]
 * @property {Prices} [prices]
 * @property {PaymentModeInfo} [payment_mode_info]
 * @property {number} total_shipments_in_order
 */

/**
 * @typedef ShipmentInternalPlatformViewResponse
 * @property {Object} [page]
 * @property {FiltersInfo[]} [filters]
 * @property {Object} [applied_filters]
 * @property {ShipmentItem[]} [items]
 */

/**
 * @typedef Error
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef BagStateMapper
 * @property {string} journey_type
 * @property {boolean} [notify_customer]
 * @property {string} [app_display_name]
 * @property {string} [app_state_name]
 * @property {string} state_type
 * @property {boolean} [is_active]
 * @property {string} display_name
 * @property {string} name
 * @property {number} bs_id
 * @property {boolean} [app_facing]
 */

/**
 * @typedef BagStatusHistory
 * @property {string} [updated_at]
 * @property {number} [delivery_partner_id]
 * @property {string} shipment_id
 * @property {string} status
 * @property {BagStateMapper} bag_state_mapper
 * @property {Object[]} [reasons]
 * @property {number} store_id
 * @property {number} bsh_id
 * @property {boolean} [app_display_name]
 * @property {string} [state_type]
 * @property {boolean} [forward]
 * @property {string} created_at
 * @property {number} bag_id
 * @property {string} [delivery_awb_number]
 * @property {boolean} [kafka_sync]
 * @property {boolean} [display_name]
 * @property {number} state_id
 */

/**
 * @typedef UserDetailsData
 * @property {string} city
 * @property {string} country
 * @property {string} state
 * @property {string} email
 * @property {string} address
 * @property {string} pincode
 * @property {string} name
 * @property {string} phone
 */

/**
 * @typedef DPDetailsData
 * @property {string} [track_url]
 * @property {string} [country]
 * @property {string} [awb_no]
 * @property {string} [eway_bill_id]
 * @property {string} [id]
 * @property {string} [gst_tag]
 * @property {string} [pincode]
 * @property {string} [name]
 */

/**
 * @typedef TrackingList
 * @property {string} status
 * @property {boolean} [is_current]
 * @property {boolean} [is_passed]
 * @property {string} [time]
 * @property {string} text
 */

/**
 * @typedef OrderBrandName
 * @property {string} brand_name
 * @property {number} [modified_on]
 * @property {string} company
 * @property {string} logo
 * @property {number} created_on
 * @property {number} id
 */

/**
 * @typedef PlatformDeliveryAddress
 * @property {string} [updated_at]
 * @property {string} [address2]
 * @property {string} [landmark]
 * @property {string} [country]
 * @property {string} [state]
 * @property {string} [email]
 * @property {string} [address_type]
 * @property {string} [contact_person]
 * @property {string} [version]
 * @property {string} [created_at]
 * @property {string} [pincode]
 * @property {string} [address_category]
 * @property {number} [latitude]
 * @property {string} [address1]
 * @property {string} [city]
 * @property {number} [longitude]
 * @property {string} [area]
 * @property {string} [phone]
 */

/**
 * @typedef BagGST
 * @property {string} [hsn_code]
 * @property {number} [gst_tax_percentage]
 * @property {number} [value_of_good]
 * @property {string} [gstin_code]
 * @property {number} [gst_fee]
 * @property {string} [gst_tag]
 * @property {boolean} [is_default_hsn_code]
 * @property {number} [brand_calculated_amount]
 */

/**
 * @typedef OrderBagArticle
 * @property {string} [uid]
 * @property {Object} [identifiers]
 * @property {Object} [return_config]
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
 * @property {string} [promo_id]
 * @property {DiscountRules[]} [discount_rules]
 * @property {boolean} [mrp_promotion]
 * @property {BuyRules[]} [buy_rules]
 * @property {number} [article_quantity]
 * @property {string} [promotion_name]
 * @property {number} [amount]
 * @property {string} [promotion_type]
 */

/**
 * @typedef Identifier
 * @property {string} [ean]
 */

/**
 * @typedef FinancialBreakup
 * @property {number} cashback_applied
 * @property {number} amount_paid
 * @property {string} item_name
 * @property {boolean} added_to_fynd_cash
 * @property {string} gst_fee
 * @property {string} size
 * @property {number} coupon_effective_discount
 * @property {number} price_effective
 * @property {number} brand_calculated_amount
 * @property {string} hsn_code
 * @property {number} fynd_credits
 * @property {number} value_of_good
 * @property {number} cod_charges
 * @property {Object} pm_price_split
 * @property {number} coupon_value
 * @property {string} gst_tag
 * @property {number} promotion_effective_discount
 * @property {number} delivery_charge
 * @property {number} discount
 * @property {number} total_units
 * @property {number} transfer_price
 * @property {number} [amount_paid_roundoff]
 * @property {number} [tax_collected_at_source]
 * @property {number} gst_tax_percentage
 * @property {Identifier} identifiers
 * @property {number} price_marked
 * @property {number} refund_credit
 * @property {number} cashback
 */

/**
 * @typedef BagConfigs
 * @property {boolean} is_returnable
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} allow_force_return
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 */

/**
 * @typedef OrderBags
 * @property {Object} [parent_promo_bags]
 * @property {OrderBrandName} [brand]
 * @property {PlatformDeliveryAddress} [delivery_address]
 * @property {BagGST} [gst_details]
 * @property {string} [seller_identifier]
 * @property {OrderBagArticle} [article]
 * @property {number} [quantity]
 * @property {AppliedPromos[]} [applied_promos]
 * @property {number} [line_number]
 * @property {FinancialBreakup[]} [financial_breakup]
 * @property {string} [entity_type]
 * @property {number} bag_id
 * @property {string} [current_status]
 * @property {string} [display_name]
 * @property {Prices} [prices]
 * @property {PlatformItem} [item]
 * @property {BagConfigs} [bag_configs]
 * @property {string} [identifier]
 */

/**
 * @typedef ShipmentPayments
 * @property {string} [logo]
 * @property {string} mode
 * @property {string} [source]
 */

/**
 * @typedef ShipmentStatusData
 * @property {string} [shipment_id]
 * @property {string} [status]
 * @property {number} [id]
 * @property {string} [created_at]
 * @property {number[]} [bag_list]
 */

/**
 * @typedef OrderDetailsData
 * @property {string} [source]
 * @property {Object} [tax_details]
 * @property {string} [order_date]
 * @property {string} [order_value]
 * @property {string} [cod_charges]
 * @property {string} [ordering_channel]
 * @property {Object} [ordering_channel_logo]
 * @property {string} fynd_order_id
 * @property {string} [affiliate_id]
 */

/**
 * @typedef FulfillingStore
 * @property {string} country
 * @property {string} state
 * @property {string} fulfillment_channel
 * @property {string} contact_person
 * @property {string} id
 * @property {string} address
 * @property {string} pincode
 * @property {string} store_name
 * @property {string} code
 * @property {string} city
 * @property {Object} meta
 * @property {string} phone
 */

/**
 * @typedef ShipmentInfoResponse
 * @property {string} affiliate_shipment_id
 * @property {string} [journey_type]
 * @property {boolean} [can_cancel]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {Object} company
 * @property {string} [vertical]
 * @property {Object} [coupon]
 * @property {Object} ordering_store
 * @property {Object} [escalation]
 * @property {string} user_id
 * @property {Object} [refund_details]
 * @property {string} [refund_text]
 * @property {boolean} [beneficiary_details]
 * @property {string} [is_pdsr]
 * @property {string} tracking_url
 * @property {string} [pay_button]
 * @property {boolean} is_invoiced
 * @property {boolean} platform_logo
 * @property {string} [order_created_time]
 * @property {boolean} is_fynd_coupon
 * @property {string} [user_agent]
 * @property {string} email_id
 * @property {Object} fyndstore_emp
 * @property {GSTDetailsData} [gst_details]
 * @property {boolean} is_packaging_order
 * @property {Object} current_shipment_status
 * @property {Object[]} [custom_meta]
 * @property {string} [is_fynd_store]
 * @property {string} [mid]
 * @property {Object} invoice
 * @property {number} [shipment_quantity]
 * @property {string} [enable_dp_tracking]
 * @property {string} [secured_delivery_flag]
 * @property {UserDetailsData} [billing_details]
 * @property {UserDetailsData} [delivery_details]
 * @property {DPDetailsData} [dp_details]
 * @property {Object[]} items
 * @property {string} [kirana_store_id]
 * @property {Object[]} delivery_status
 * @property {string} [replacement_details]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [due_date]
 * @property {Object[]} [forward_order_status]
 * @property {string} lock_status
 * @property {Object} [user_info]
 * @property {string} order_type
 * @property {number} status_progress
 * @property {string} [payment_mode]
 * @property {Prices} [prices]
 * @property {OrderBags[]} [bags]
 * @property {string} [operational_status]
 * @property {ShipmentPayments} [payments]
 * @property {number} [total_bags]
 * @property {string} can_break
 * @property {string} shipment_id
 * @property {ShipmentStatusData} [status]
 * @property {string} [packaging_type]
 * @property {Object} order_status
 * @property {string} credit_note_id
 * @property {string[]} [child_nodes]
 * @property {boolean} [can_return]
 * @property {string[]} [shipment_images]
 * @property {Object} [bank_data]
 * @property {string} [shipment_status]
 * @property {number} [total_items]
 * @property {Object} [delivery_slot]
 * @property {Object[]} [forward_shipment_status]
 * @property {Object[]} [forward_tracking_list]
 * @property {OrderDetailsData} [order]
 * @property {string} [priority_text]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {boolean} [go_green]
 * @property {string} [picked_date]
 * @property {boolean} [enable_tracking]
 * @property {boolean} is_not_fynd_source
 */

/**
 * @typedef PlatformShipment
 * @property {string} [journey_type]
 * @property {BagStatusHistory[]} [bag_status_history]
 * @property {string} [vertical]
 * @property {string} [platform_logo]
 * @property {string} [user_agent]
 * @property {GSTDetailsData} [gst_details]
 * @property {Object[]} [custom_meta]
 * @property {number} [shipment_quantity]
 * @property {string} [enable_dp_tracking]
 * @property {UserDetailsData} [billing_details]
 * @property {UserDetailsData} [delivery_details]
 * @property {DPDetailsData} [dp_details]
 * @property {TrackingList[]} [tracking_list]
 * @property {string} [payment_mode]
 * @property {Prices} [prices]
 * @property {OrderBags[]} [bags]
 * @property {string} [operational_status]
 * @property {ShipmentPayments} [payments]
 * @property {number} [total_bags]
 * @property {string} shipment_id
 * @property {ShipmentStatusData} [status]
 * @property {string} [packaging_type]
 * @property {string[]} [shipment_images]
 * @property {string} [shipment_status]
 * @property {number} [total_items]
 * @property {Object} [delivery_slot]
 * @property {OrderDetailsData} [order]
 * @property {string} [priority_text]
 * @property {FulfillingStore} [fulfilling_store]
 * @property {string} [picked_date]
 */

/**
 * @typedef OrderDict
 * @property {string} fynd_order_id
 * @property {number} shipment_count
 * @property {string} order_date
 */

/**
 * @typedef ShipmentDetailsResponse
 * @property {PlatformShipment[]} [shipments]
 * @property {Object[]} [custom_meta]
 * @property {OrderDict} [order]
 * @property {boolean} success
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
 * @property {string} [name]
 * @property {string} [display]
 * @property {string} [value]
 */

/**
 * @typedef PlatformOrderItems
 * @property {PlatformChannel} [channel]
 * @property {number} [total_order_value]
 * @property {number} [order_value]
 * @property {PlatformBreakupValues[]} [breakup_values]
 * @property {PlatformShipment[]} [shipments]
 * @property {UserDataInfo} [user_info]
 * @property {string} [payment_mode]
 * @property {string} [order_created_time]
 * @property {string} [order_id]
 * @property {Object} [meta]
 */

/**
 * @typedef OrderListingResponse
 * @property {string} [lane]
 * @property {number} [total_count]
 * @property {boolean} [success]
 * @property {Page} [page]
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
 * @property {string} key
 * @property {string} text
 * @property {Options[]} [options]
 */

/**
 * @typedef MetricCountResponse
 * @property {MetricsCount[]} [items]
 */

/**
 * @typedef PlatformTrack
 * @property {string} [updated_at]
 * @property {string} [status]
 * @property {string} [reason]
 * @property {string} [account_name]
 * @property {string} [last_location_recieved_at]
 * @property {string} [updated_time]
 * @property {Object} [meta]
 * @property {string} [raw_status]
 * @property {string} [awb]
 * @property {string} [shipment_type]
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
 * @property {string} [status]
 * @property {string} [s3_key]
 * @property {string} [report_id]
 * @property {string} [report_name]
 * @property {string} [report_requested_at]
 * @property {string} [report_created_at]
 * @property {Object} [request_details]
 * @property {string} [display_name]
 * @property {string} [report_type]
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
 * @property {string} [type]
 * @property {string} [message]
 * @property {string} [value]
 */

/**
 * @typedef JioCodeUpsertResponse
 * @property {string} [trace_id]
 * @property {NestedErrorSchemaDataSet[]} [error]
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
 * @property {Object} [label]
 * @property {string} batch_id
 * @property {boolean} do_invoice_label_generated
 * @property {string} [store_id]
 * @property {Object} [invoice]
 * @property {string} [invoice_status]
 * @property {Object} [data]
 * @property {string} [company_id]
 * @property {string} [store_name]
 * @property {string} [store_code]
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
 * @property {string} [file_name]
 * @property {string} [file_path]
 * @property {FileUploadResponse} [upload]
 * @property {URL} [cdn]
 * @property {string[]} [tags]
 * @property {string} [operation]
 * @property {string} [content_type]
 * @property {number} [size]
 * @property {string} [method]
 */

/**
 * @typedef BulkListingPage
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {string} [type]
 * @property {number} [size]
 * @property {number} [current]
 * @property {number} [total]
 */

/**
 * @typedef bulkListingData
 * @property {number} [store_id]
 * @property {string} [user_id]
 * @property {Object[]} [successful_shipments]
 * @property {string} [excel_url]
 * @property {string} [uploaded_on]
 * @property {number} [failed]
 * @property {string} [file_name]
 * @property {string[]} [processing_shipments]
 * @property {string} [id]
 * @property {number} [company_id]
 * @property {string} [store_name]
 * @property {number} [total]
 * @property {string} [store_code]
 * @property {string} [status]
 * @property {string} [batch_id]
 * @property {string} [user_name]
 * @property {number} [successful]
 * @property {Object[]} [failed_shipments]
 * @property {number} [processing]
 */

/**
 * @typedef BulkListingResponse
 * @property {string} [error]
 * @property {BulkListingPage} [page]
 * @property {boolean} [success]
 * @property {bulkListingData[]} [data]
 */

/**
 * @typedef ManifestPage
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {string} [type]
 * @property {string} [size]
 * @property {string} [current]
 * @property {number} [total]
 */

/**
 * @typedef DateRange
 * @property {string} [to_date]
 * @property {string} [from_date]
 */

/**
 * @typedef ManifestFilter
 * @property {string} [lane]
 * @property {string} [sales_channel_name]
 * @property {string} [dp_ids]
 * @property {string} [sales_channels]
 * @property {DateRange} [date_range]
 * @property {string} [dp_name]
 * @property {string} [store_name]
 * @property {string} [stores]
 */

/**
 * @typedef GeneratedManifestItem
 * @property {string} [status]
 * @property {ManifestFilter} [filters]
 * @property {string} [created_by]
 * @property {boolean} [is_active]
 * @property {string} [manifest_id]
 * @property {number} [company_id]
 * @property {string} [created_at]
 */

/**
 * @typedef GeneratedManifestResponse
 * @property {ManifestPage} [page]
 * @property {GeneratedManifestItem[]} [items]
 */

/**
 * @typedef ManifestDetailTotalShipmentPricesCount
 * @property {number} [total_price]
 * @property {number} [shipment_count]
 */

/**
 * @typedef ManifestDetailMeta
 * @property {ManifestDetailTotalShipmentPricesCount} [total_shipment_prices_count]
 * @property {ManifestFilter} [filters]
 */

/**
 * @typedef ManifestDetail
 * @property {string} [status]
 * @property {ManifestFilter} [filters]
 * @property {number} [uid]
 * @property {string} [created_by]
 * @property {number} [user_id]
 * @property {number} [id]
 * @property {boolean} [is_active]
 * @property {string} [manifest_id]
 * @property {number} [company_id]
 * @property {string} [created_at]
 * @property {ManifestDetailMeta} [meta]
 */

/**
 * @typedef ManifestDetailItem
 * @property {string} [shipment_id]
 * @property {string} [invoice_id]
 * @property {string} [awb]
 * @property {string} [order_id]
 * @property {number} [item_qty]
 */

/**
 * @typedef ManifestDetailResponse
 * @property {number} [additional_shipment_count]
 * @property {ManifestPage} [page]
 * @property {ManifestDetail[]} [manifest_details]
 * @property {ManifestDetailItem[]} [items]
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
 * @property {number} [processing_shipments_count]
 * @property {string} [batch_id]
 * @property {number} [successful_shipments_count]
 * @property {number} [failed_shipments_count]
 * @property {string} [company_id]
 * @property {number} [total_shipments_count]
 * @property {string[]} [successful_shipment_ids]
 */

/**
 * @typedef BulkActionDetailsResponse
 * @property {boolean} [status]
 * @property {string[]} [failed_records]
 * @property {string[]} [error]
 * @property {string} [user_id]
 * @property {string} [uploaded_on]
 * @property {string} [success]
 * @property {BulkActionDetailsDataField[]} [data]
 * @property {string} [uploaded_by]
 * @property {string} [message]
 */

/**
 * @typedef Document
 * @property {string} ds_type
 * @property {string} value
 * @property {string} [url]
 * @property {string} legal_name
 * @property {boolean} verified
 */

/**
 * @typedef StoreDocuments
 * @property {Document} [gst]
 */

/**
 * @typedef EInvoicePortalDetails
 * @property {string} [password]
 * @property {string} [username]
 * @property {string} [user]
 */

/**
 * @typedef StoreEinvoice
 * @property {boolean} enabled
 * @property {string} [user]
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
 * @typedef StoreMeta
 * @property {Object[]} [timing]
 * @property {StoreDocuments} [documents]
 * @property {Object} [ewaybill_portal_details]
 * @property {Object} [additional_contact_details]
 * @property {string[]} [notification_emails]
 * @property {string} stage
 * @property {Object} [product_return_config]
 * @property {string} [gst_number]
 * @property {string} display_name
 * @property {EInvoicePortalDetails} [einvoice_portal_details]
 * @property {StoreGstCredentials} gst_credentials
 */

/**
 * @typedef StoreAddress
 * @property {string} updated_at
 * @property {string} address_type
 * @property {number} longitude
 * @property {string} address1
 * @property {string} country
 * @property {string} [email]
 * @property {string} contact_person
 * @property {string} created_at
 * @property {string} phone
 * @property {number} pincode
 * @property {string} [landmark]
 * @property {string} [area]
 * @property {string} [address2]
 * @property {string} state
 * @property {string} [version]
 * @property {string} country_code
 * @property {string} address_category
 * @property {number} latitude
 * @property {string} city
 */

/**
 * @typedef Store
 * @property {string} store_email
 * @property {string} [updated_at]
 * @property {boolean} [is_archived]
 * @property {string} fulfillment_channel
 * @property {string} [code]
 * @property {string} address1
 * @property {number} longitude
 * @property {number} [parent_store_id]
 * @property {string} [mall_name]
 * @property {Object} [brand_id]
 * @property {string} country
 * @property {string[]} [brand_store_tags]
 * @property {boolean} [is_enabled_for_recon]
 * @property {string} contact_person
 * @property {number} [packaging_material_count]
 * @property {string} location_type
 * @property {string} created_at
 * @property {StoreMeta} meta
 * @property {number} phone
 * @property {string} [mall_area]
 * @property {string} [vat_no]
 * @property {number} company_id
 * @property {string} pincode
 * @property {string} login_username
 * @property {string} s_id
 * @property {string} name
 * @property {string} [address2]
 * @property {number} [alohomora_user_id]
 * @property {StoreAddress} [store_address_json]
 * @property {string} state
 * @property {boolean} [is_active]
 * @property {string} [order_integration_id]
 * @property {number} latitude
 * @property {string} [store_active_from]
 * @property {string} city
 */

/**
 * @typedef Dimensions
 * @property {number} [length]
 * @property {string} [unit]
 * @property {number} [height]
 * @property {boolean} [is_default]
 * @property {number} [width]
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
 * @property {Dimensions} [dimensions]
 * @property {Object} [child_details]
 * @property {Identifier} identifiers
 * @property {string} uid
 * @property {ReturnConfig} [return_config]
 * @property {Object} [raw_meta]
 * @property {Weight} [weight]
 * @property {Object} [a_set]
 * @property {string} size
 * @property {Object} [esp_modified]
 * @property {string} [code]
 * @property {string} seller_identifier
 * @property {string} _id
 */

/**
 * @typedef AffiliateMeta
 * @property {string} [box_type]
 * @property {string} [channel_order_id]
 * @property {boolean} [is_priority]
 * @property {number} [loyalty_discount]
 * @property {number} [size_level_total_qty]
 * @property {number} [employee_discount]
 * @property {string} [due_date]
 * @property {string} [order_item_id]
 * @property {string} [channel_shipment_id]
 * @property {number} [quantity]
 * @property {string} [coupon_code]
 */

/**
 * @typedef LockData
 * @property {boolean} [locked]
 * @property {string} [lock_message]
 * @property {boolean} [mto]
 */

/**
 * @typedef ShipmentTimeStamp
 * @property {string} [t_min]
 * @property {string} [t_max]
 */

/**
 * @typedef EInvoice
 * @property {string} [error_message]
 * @property {string} [signed_qr_code]
 * @property {string} [error_code]
 * @property {number} [acknowledge_no]
 * @property {string} [signed_invoice]
 * @property {string} [irn]
 * @property {string} [acknowledge_date]
 */

/**
 * @typedef EinvoiceInfo
 * @property {EInvoice} [credit_note]
 * @property {EInvoice} [invoice]
 */

/**
 * @typedef Formatted
 * @property {string} [f_max]
 * @property {string} [f_min]
 */

/**
 * @typedef BuyerDetails
 * @property {string} [ajio_site_id]
 * @property {string} state
 * @property {string} address
 * @property {string} name
 * @property {number} pincode
 * @property {string} gstin
 * @property {string} city
 */

/**
 * @typedef DebugInfo
 * @property {string} [stormbreaker_uuid]
 */

/**
 * @typedef ShipmentMeta
 * @property {string} [box_type]
 * @property {string} [forward_affiliate_order_id]
 * @property {string} [store_invoice_updated_date]
 * @property {Object} [b2c_buyer_details]
 * @property {Object} [external]
 * @property {boolean} auto_trigger_dp_assignment_acf
 * @property {LockData} [lock_data]
 * @property {string} [dp_name]
 * @property {string} [forward_affiliate_shipment_id]
 * @property {ShipmentTimeStamp} [timestamp]
 * @property {string} [awb_number]
 * @property {number} [return_store_node]
 * @property {boolean} [assign_dp_from_sb]
 * @property {number} [shipment_weight]
 * @property {string} [marketplace_store_id]
 * @property {boolean} same_store_available
 * @property {EinvoiceInfo} [einvoice_info]
 * @property {number} weight
 * @property {string} [fulfilment_priority_text]
 * @property {Object} [dp_options]
 * @property {string} [dp_id]
 * @property {string} [return_affiliate_shipment_id]
 * @property {string} [packaging_name]
 * @property {string} [dp_sort_key]
 * @property {string} [due_date]
 * @property {Formatted} [formatted]
 * @property {Object} [return_details]
 * @property {string} [order_type]
 * @property {BuyerDetails} [b2b_buyer_details]
 * @property {number} [shipment_volumetric_weight]
 * @property {string} [po_number]
 * @property {string} [return_affiliate_order_id]
 * @property {DebugInfo} [debug_info]
 * @property {Object} [ewaybill_info]
 * @property {Object} [bag_weight]
 * @property {string} [return_awb_number]
 */

/**
 * @typedef PDFLinks
 * @property {string} [label]
 * @property {string} [label_a4]
 * @property {string} [invoice_a4]
 * @property {string} invoice_type
 * @property {string} [label_a6]
 * @property {string} [invoice]
 * @property {string} [po_invoice]
 * @property {string} [invoice_a6]
 * @property {string} [label_pos]
 * @property {string} [invoice_pos]
 * @property {string} [credit_note_url]
 * @property {string} [b2b]
 * @property {string} label_type
 */

/**
 * @typedef AffiliateDetails
 * @property {string} [ad_id]
 * @property {string} affiliate_shipment_id
 * @property {string} affiliate_bag_id
 * @property {string} affiliate_order_id
 * @property {AffiliateMeta} affiliate_meta
 * @property {ShipmentMeta} shipment_meta
 * @property {string} affiliate_store_id
 * @property {PDFLinks} [pdf_links]
 * @property {string} [affiliate_id]
 * @property {string} [company_affiliate_tag]
 */

/**
 * @typedef Dates
 * @property {string} [order_created]
 * @property {Object} [delivery_date]
 */

/**
 * @typedef Brand
 * @property {string} brand_name
 * @property {number} [modified_on]
 * @property {string} [script_last_ran]
 * @property {string} company
 * @property {string} [pickup_location]
 * @property {number} [credit_note_expiry_days]
 * @property {boolean} [credit_note_allowed]
 * @property {number} [created_on]
 * @property {string} [logo]
 * @property {boolean} [is_virtual_invoice]
 * @property {string} [start_date]
 * @property {number} brand_id
 * @property {string} [invoice_prefix]
 */

/**
 * @typedef BagGSTDetails
 * @property {string} hsn_code
 * @property {string} cgst_gst_fee
 * @property {number} tax_collected_at_source
 * @property {number} gst_tax_percentage
 * @property {number} igst_tax_percentage
 * @property {number} value_of_good
 * @property {string} [gstin_code]
 * @property {string} igst_gst_fee
 * @property {number} gst_fee
 * @property {string} sgst_gst_fee
 * @property {string} gst_tag
 * @property {string} hsn_code_id
 * @property {number} cgst_tax_percentage
 * @property {number} sgst_tax_percentage
 * @property {boolean} [is_default_hsn_code]
 * @property {number} brand_calculated_amount
 */

/**
 * @typedef B2BPODetails
 * @property {string} [docker_number]
 * @property {number} [item_base_price]
 * @property {number} [po_tax_amount]
 * @property {boolean} [partial_can_ret]
 * @property {number} [po_line_amount]
 * @property {number} [total_gst_percentage]
 */

/**
 * @typedef BagMeta
 * @property {B2BPODetails} [b2b_po_details]
 */

/**
 * @typedef Attributes
 * @property {string} [brand_name]
 * @property {string} [marketer_name]
 * @property {string} [essential]
 * @property {string[]} [gender]
 * @property {string} [primary_color]
 * @property {string} [marketer_address]
 * @property {string} [name]
 * @property {string} [primary_color_hex]
 * @property {string} [primary_material]
 */

/**
 * @typedef Item
 * @property {boolean} [can_cancel]
 * @property {string} [webstore_product_url]
 * @property {number} [l3_category]
 * @property {Attributes} attributes
 * @property {string} [last_updated_at]
 * @property {string} [code]
 * @property {number} item_id
 * @property {string} slug_key
 * @property {string} [l3_category_name]
 * @property {number} brand_id
 * @property {string[]} [l2_category]
 * @property {string} [color]
 * @property {string} brand
 * @property {number} [department_id]
 * @property {string} [branch_url]
 * @property {number} [l2_category_id]
 * @property {string} size
 * @property {Object} [meta]
 * @property {string[]} [l1_category]
 * @property {string} name
 * @property {boolean} [can_return]
 * @property {string} [gender]
 * @property {number} [l1_category_id]
 * @property {string[]} image
 */

/**
 * @typedef AffiliateBagDetails
 * @property {number} [loyalty_discount]
 * @property {string} affiliate_bag_id
 * @property {number} [employee_discount]
 * @property {string} affiliate_order_id
 * @property {AffiliateMeta} affiliate_meta
 */

/**
 * @typedef BagReturnableCancelableStatus
 * @property {boolean} is_returnable
 * @property {boolean} is_active
 * @property {boolean} is_customer_return_allowed
 * @property {boolean} can_be_cancelled
 * @property {boolean} enable_tracking
 */

/**
 * @typedef ArticleDetails
 * @property {Object} [status]
 */

/**
 * @typedef BagDetailsPlatformResponse
 * @property {Object} [parent_promo_bags]
 * @property {string} journey_type
 * @property {Object} [restore_promos]
 * @property {BagStatusHistory} [bag_status_history]
 * @property {Object[]} [reasons]
 * @property {Store} [ordering_store]
 * @property {Article} article
 * @property {AffiliateDetails} [affiliate_details]
 * @property {number} [line_number]
 * @property {FinancialBreakup[]} financial_breakup
 * @property {BagStatusHistory} current_operational_status
 * @property {Dates} [dates]
 * @property {string} [b_type]
 * @property {string} [identifier]
 * @property {Brand} brand
 * @property {BagGSTDetails} gst_details
 * @property {number[]} [original_bag_list]
 * @property {number} [no_of_bags_order]
 * @property {string[]} [tags]
 * @property {string} [seller_identifier]
 * @property {BagMeta} [meta]
 * @property {boolean} [restore_coupon]
 * @property {BagStatusHistory} current_status
 * @property {string} [display_name]
 * @property {Prices} prices
 * @property {Item} item
 * @property {AffiliateBagDetails} affiliate_bag_details
 * @property {string} [operational_status]
 * @property {number} [quantity]
 * @property {BagReturnableCancelableStatus} status
 * @property {string} [shipment_id]
 * @property {ArticleDetails} [article_details]
 * @property {number} [bag_update_time]
 * @property {Object[]} [applied_promos]
 * @property {number} b_id
 * @property {string} [entity_type]
 * @property {BagStatusHistory[]} bag_status
 * @property {Object} [qc_required]
 * @property {string} [order_integration_id]
 */

/**
 * @typedef ErrorResponse
 * @property {string} error
 * @property {string} message
 */

/**
 * @typedef Page1
 * @property {boolean} has_next
 * @property {number} item_total
 * @property {string} page_type
 * @property {number} size
 * @property {number} current
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
 * @property {number} [status]
 * @property {string} [message]
 * @property {string} [error]
 */

/**
 * @typedef InvalidateShipmentCacheResponse
 * @property {InvalidateShipmentCacheNestedResponse[]} [response]
 */

/**
 * @typedef ErrorResponse1
 * @property {string} [error_trace]
 * @property {number} status
 * @property {string} message
 */

/**
 * @typedef StoreReassign
 * @property {number[]} [reason_ids]
 * @property {string} [item_id]
 * @property {string} [affiliate_order_id]
 * @property {number} [bag_id]
 * @property {string} [fynd_order_id]
 * @property {string} [affiliate_id]
 * @property {string} [set_id]
 * @property {string} [mongo_article_id]
 * @property {number} store_id
 * @property {string} [affiliate_bag_id]
 */

/**
 * @typedef StoreReassignResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * @typedef Entities
 * @property {string} [id]
 * @property {string} [affiliate_order_id]
 * @property {string} [affiliate_id]
 * @property {string} reason_text
 * @property {string} [affiliate_shipment_id]
 * @property {string} [affiliate_bag_id]
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
 * @property {string} [affiliate_order_id]
 * @property {boolean} [is_locked]
 * @property {number} [bag_id]
 * @property {string} [affiliate_bag_id]
 */

/**
 * @typedef CheckResponse
 * @property {boolean} [is_bag_locked]
 * @property {string} [shipment_id]
 * @property {OriginalFilter} [original_filter]
 * @property {string} [affiliate_id]
 * @property {Bags[]} [bags]
 * @property {boolean} [is_shipment_locked]
 * @property {string} [status]
 * @property {string} [affiliate_shipment_id]
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
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {number} id
 * @property {string} [title]
 * @property {string} [platform_name]
 * @property {string} [logo_url]
 * @property {string} [from_datetime]
 * @property {string} [to_datetime]
 * @property {number} [company_id]
 * @property {string} [platform_id]
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
 * @property {boolean} status
 * @property {string} call_id
 */

/**
 * @typedef ProductsReasonsFilters
 * @property {string} [identifier]
 * @property {number} [quantity]
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
 * @typedef Products
 * @property {string} [identifier]
 * @property {number} [quantity]
 * @property {number} [line_number]
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
 * @property {ReasonsData} [reasons]
 * @property {string} identifier
 * @property {Products[]} [products]
 * @property {DataUpdates} [data_updates]
 */

/**
 * @typedef StatuesRequest
 * @property {string} [status]
 * @property {ShipmentsRequest[]} [shipments]
 * @property {string} [exclude_bags_next_state]
 */

/**
 * @typedef UpdateShipmentStatusRequest
 * @property {boolean} [lock_after_transition]
 * @property {boolean} [task]
 * @property {StatuesRequest[]} [statuses]
 * @property {boolean} [force_transition]
 * @property {boolean} [unlock_before_transition]
 */

/**
 * @typedef ShipmentsResponse
 * @property {string} [exception]
 * @property {string} [code]
 * @property {string} [stack_trace]
 * @property {string} [message]
 * @property {Object} [meta]
 * @property {Object} [final_state]
 * @property {string} [identifier]
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
 * @property {number} phone
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} city
 * @property {string} pincode
 * @property {string} [address2]
 * @property {string} state
 * @property {string} [address1]
 * @property {string} email
 * @property {number} mobile
 * @property {string} country
 */

/**
 * @typedef ArticleDetails1
 * @property {string} _id
 * @property {Object} weight
 * @property {Object} dimension
 * @property {Object} category
 * @property {number} brand_id
 * @property {number} quantity
 * @property {Object} attributes
 */

/**
 * @typedef ShipmentDetails
 * @property {string} affiliate_shipment_id
 * @property {string} [box_type]
 * @property {Object} [meta]
 * @property {number} fulfillment_id
 * @property {number} [dp_id]
 * @property {number} shipments
 * @property {ArticleDetails1[]} articles
 */

/**
 * @typedef LocationDetails
 * @property {number} fulfillment_id
 * @property {string} fulfillment_type
 * @property {ArticleDetails1[]} articles
 */

/**
 * @typedef ShipmentConfig
 * @property {ShipmentDetails[]} shipment
 * @property {string} payment_mode
 * @property {string} to_pincode
 * @property {LocationDetails} [location_details]
 * @property {string} identifier
 * @property {string} journey
 * @property {string} source
 * @property {string} action
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
 * @property {number} price_effective
 * @property {string} _id
 * @property {string} modified_on
 * @property {number} store_id
 * @property {string} seller_identifier
 * @property {number} unit_price
 * @property {string} affiliate_store_id
 * @property {string} item_size
 * @property {number} transfer_price
 * @property {MarketPlacePdf} [pdf_links]
 * @property {Object} identifier
 * @property {number} avl_qty
 * @property {number} price_marked
 * @property {number} discount
 * @property {number} quantity
 * @property {number} delivery_charge
 * @property {string} fynd_store_id
 * @property {number} item_id
 * @property {Object} affiliate_meta
 * @property {string} hsn_code_id
 * @property {number} company_id
 * @property {string} sku
 * @property {number} amount_paid
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
 * @property {OrderUser} shipping_address
 * @property {string} [coupon]
 * @property {number} cod_charges
 * @property {string} [affiliate_order_id]
 * @property {ShipmentData} [shipment]
 * @property {Object} [payment]
 * @property {string} payment_mode
 * @property {number} discount
 * @property {Object} items
 * @property {OrderUser} billing_address
 * @property {AffiliateBag[]} bags
 * @property {OrderPriority} [order_priority]
 * @property {UserData} user
 * @property {number} delivery_charges
 * @property {number} order_value
 */

/**
 * @typedef AffiliateStoreIdMapping
 * @property {number} store_id
 * @property {string} marketplace_store_id
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
 * @typedef AffiliateInventoryPaymentConfig
 * @property {string} [source]
 * @property {string} [mode_of_payment]
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
 * @property {AffiliateInventoryOrderConfig} [order]
 * @property {AffiliateInventoryStoreConfig} [inventory]
 * @property {AffiliateInventoryPaymentConfig} [payment]
 * @property {AffiliateInventoryArticleAssignmentConfig} [article_assignment]
 * @property {AffiliateInventoryLogisticsConfig} [logistics]
 */

/**
 * @typedef AffiliateAppConfigMeta
 * @property {string} value
 * @property {string} name
 */

/**
 * @typedef AffiliateAppConfig
 * @property {string} created_at
 * @property {string} [description]
 * @property {string} name
 * @property {string} id
 * @property {string} owner
 * @property {AffiliateAppConfigMeta[]} [meta]
 * @property {string} updated_at
 * @property {string} secret
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
 * @typedef OrderConfig
 * @property {AffiliateStoreIdMapping[]} affiliate_store_id_mapping
 * @property {string} [store_lookup]
 * @property {boolean} [create_user]
 * @property {Affiliate} affiliate
 * @property {string} [bag_end_state]
 * @property {string} [article_lookup]
 */

/**
 * @typedef CreateOrderPayload
 * @property {OrderInfo} order_info
 * @property {string} affiliate_id
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
 * @property {number} id
 * @property {string} description
 * @property {string} slug
 * @property {string} display_text
 */

/**
 * @typedef GetActionsResponse
 * @property {ActionInfo} permissions
 */

/**
 * @typedef HistoryDict
 * @property {string} [l1_detail]
 * @property {string} createdat
 * @property {string} [l2_detail]
 * @property {string} message
 * @property {string} [ticket_id]
 * @property {number} [bag_id]
 * @property {string} [l3_detail]
 * @property {string} user
 * @property {string} [ticket_url]
 * @property {string} type
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
 * @property {string} country_code
 * @property {string} message
 * @property {string} payment_mode
 * @property {number} phone_number
 * @property {number} amount_paid
 * @property {string} customer_name
 * @property {string} brand_name
 * @property {string} order_id
 */

/**
 * @typedef SendSmsPayload
 * @property {SmsDataPayload} [data]
 * @property {number} bag_id
 * @property {string} slug
 */

/**
 * @typedef Meta
 * @property {string} [state_manager_used]
 * @property {number} [kafka_emission_status]
 */

/**
 * @typedef ShipmentDetail
 * @property {number[]} [bag_list]
 * @property {string} [shipment_id]
 * @property {number} id
 * @property {string} [remarks]
 * @property {Meta} meta
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
 * @property {string} order_type
 * @property {string[]} [shipment_ids]
 * @property {string} qc_required
 * @property {number} dp_id
 */

/**
 * @typedef ManualAssignDPToShipmentResponse
 * @property {string} success
 * @property {string[]} [errors]
 */

/**
 * @typedef TaxInfo
 * @property {string} [gstin]
 * @property {string} [b2b_gstin_number]
 */

/**
 * @typedef ShippingInfo
 * @property {string} [state_code]
 * @property {string} primary_mobile_number
 * @property {string} pincode
 * @property {string} [landmark]
 * @property {string} state
 * @property {Object[]} [slot]
 * @property {string} [customer_code]
 * @property {string} [floor_no]
 * @property {string} [address_type]
 * @property {string} city
 * @property {string} [middle_name]
 * @property {string} [alternate_mobile_number]
 * @property {string} [external_customer_code]
 * @property {string} primary_email
 * @property {string} first_name
 * @property {string} [shipping_type]
 * @property {string} [country_code]
 * @property {string} [title]
 * @property {string} [last_name]
 * @property {Object} [geo_location]
 * @property {string} [house_no]
 * @property {string} [address2]
 * @property {string} address1
 * @property {string} [gender]
 * @property {string} [alternate_email]
 * @property {string} country
 */

/**
 * @typedef BillingInfo
 * @property {string} [state_code]
 * @property {string} primary_mobile_number
 * @property {string} pincode
 * @property {string} state
 * @property {string} [customer_code]
 * @property {string} [floor_no]
 * @property {string} city
 * @property {string} [alternate_mobile_number]
 * @property {string} [middle_name]
 * @property {string} [external_customer_code]
 * @property {string} primary_email
 * @property {string} first_name
 * @property {string} [country_code]
 * @property {string} [title]
 * @property {string} [last_name]
 * @property {string} [house_no]
 * @property {string} [address2]
 * @property {string} address1
 * @property {string} [gender]
 * @property {string} [alternate_email]
 * @property {string} country
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
 * @property {string} name
 * @property {Object} amount
 * @property {string} [code]
 * @property {Tax} [tax]
 * @property {string} type
 */

/**
 * @typedef PaymentMethod
 * @property {string} name
 * @property {number} amount
 * @property {string} mode
 * @property {Object} [meta]
 * @property {string} collect_by
 * @property {Object} [transaction_data]
 * @property {string} refund_by
 */

/**
 * @typedef PaymentInfo
 * @property {PaymentMethod[]} [payment_methods]
 * @property {string} primary_mode
 */

/**
 * @typedef LineItem
 * @property {string} [custom_messasge]
 * @property {string} [external_line_id]
 * @property {Charge[]} charges
 * @property {Object} [meta]
 * @property {string} seller_identifier
 * @property {number} [quantity]
 */

/**
 * @typedef ProcessingDates
 * @property {string} [dispatch_after_date]
 * @property {string} [confirm_by_date]
 * @property {Object} [customer_pickup_slot]
 * @property {Object} [dp_pickup_slot]
 * @property {string} [pack_by_date]
 * @property {string} [dispatch_by_date]
 */

/**
 * @typedef Shipment
 * @property {number} [priority]
 * @property {LineItem[]} line_items
 * @property {number} [external_shipment_id]
 * @property {ProcessingDates} [processing_dates]
 * @property {Object} [meta]
 * @property {number} location_id
 */

/**
 * @typedef CreateOrderAPI
 * @property {TaxInfo} [tax_info]
 * @property {ShippingInfo} shipping_info
 * @property {BillingInfo} billing_info
 * @property {Object} [currency_info]
 * @property {Charge[]} charges
 * @property {PaymentInfo} payment_info
 * @property {Object} [meta]
 * @property {string} [external_creation_date]
 * @property {Shipment[]} shipments
 * @property {string} [external_order_id]
 */

/**
 * @typedef CreateOrderErrorReponse
 * @property {string} [exception]
 * @property {string} [request_id]
 * @property {string} [code]
 * @property {string} [stack_trace]
 * @property {string} message
 * @property {string} [meta]
 * @property {Object} [info]
 * @property {number} status
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
 * @property {PaymentMethods[]} [payment_methods]
 * @property {string} [source]
 * @property {string} [mode_of_payment]
 */

/**
 * @typedef CreateChannelConfig
 * @property {DpConfiguration} [dp_configuration]
 * @property {Object} [logo_url]
 * @property {boolean} [location_reassignment]
 * @property {CreateChannelPaymentInfo} [payment_info]
 * @property {string} [shipment_assignment]
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
 * @property {boolean} [is_upserted]
 * @property {boolean} [is_inserted]
 * @property {boolean} [acknowledged]
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
 * @property {string} start_date
 * @property {string} end_date
 * @property {number} mobile
 */

/**
 * @typedef SearchKeywordResult
 * @property {Object} query
 * @property {string} sort_on
 */

/**
 * @typedef CreateSearchKeyword
 * @property {SearchKeywordResult} result
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetSearchWordsData
 * @property {string} [uid]
 * @property {Object} [result]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
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
 * @typedef Media
 * @property {string} [url]
 * @property {string} [aspect_ratio]
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
 * @typedef AutocompleteAction
 * @property {AutocompletePageAction} [page]
 * @property {string} [type]
 */

/**
 * @typedef AutocompleteResult
 * @property {Media} [logo]
 * @property {AutocompleteAction} [action]
 * @property {string} [display]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CreateAutocompleteKeyword
 * @property {AutocompleteResult[]} [results]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetAutocompleteWordsData
 * @property {Object[]} [results]
 * @property {string} [uid]
 * @property {string} [app_id]
 * @property {string[]} [words]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef GetAutocompleteWordsResponse
 * @property {GetAutocompleteWordsData[]} [items]
 * @property {Page} [page]
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
 * @property {number} min_quantity
 * @property {boolean} [allow_remove]
 * @property {number} max_quantity
 * @property {number} product_uid
 * @property {boolean} [auto_add_to_cart]
 */

/**
 * @typedef ProductBundleRequest
 * @property {Object} [meta]
 * @property {string} slug
 * @property {string} choice
 * @property {Object} [modified_by]
 * @property {boolean} [same_store_assignment]
 * @property {Object} [created_by]
 * @property {ProductBundleItem[]} products
 * @property {boolean} is_active
 * @property {string[]} [page_visibility]
 * @property {string} [modified_on]
 * @property {number} [company_id]
 * @property {string} name
 * @property {string} [logo]
 * @property {string} [created_on]
 */

/**
 * @typedef GetProductBundleCreateResponse
 * @property {Object} [meta]
 * @property {string} slug
 * @property {string} choice
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {boolean} [same_store_assignment]
 * @property {Object} [created_by]
 * @property {ProductBundleItem[]} products
 * @property {boolean} is_active
 * @property {string[]} [page_visibility]
 * @property {string} [modified_on]
 * @property {number} [company_id]
 * @property {string} name
 * @property {string} [logo]
 * @property {string} [created_on]
 */

/**
 * @typedef GetProductBundleListingResponse
 * @property {GetProductBundleCreateResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ProductBundleUpdateRequest
 * @property {Object} [meta]
 * @property {string} slug
 * @property {string} choice
 * @property {Object} [modified_by]
 * @property {boolean} [same_store_assignment]
 * @property {ProductBundleItem[]} products
 * @property {boolean} is_active
 * @property {string[]} [page_visibility]
 * @property {string} [modified_on]
 * @property {number} [company_id]
 * @property {string} name
 * @property {string} [logo]
 */

/**
 * @typedef LimitedProductData
 * @property {string} [slug]
 * @property {Object} [price]
 * @property {string} [item_code]
 * @property {number} [uid]
 * @property {string} [country_of_origin]
 * @property {string[]} [images]
 * @property {Object} [attributes]
 * @property {string} [name]
 * @property {number} [quantity]
 * @property {string} [short_description]
 * @property {Object} [identifier]
 * @property {string[]} [sizes]
 */

/**
 * @typedef Price
 * @property {number} [max_effective]
 * @property {number} [max_marked]
 * @property {string} [currency]
 * @property {number} [min_effective]
 * @property {number} [min_marked]
 */

/**
 * @typedef Size
 * @property {boolean} [is_available]
 * @property {string} [value]
 * @property {number} [quantity]
 * @property {string} [display]
 */

/**
 * @typedef GetProducts
 * @property {LimitedProductData} [product_details]
 * @property {boolean} [auto_select]
 * @property {Price} [price]
 * @property {number} [min_quantity]
 * @property {boolean} [allow_remove]
 * @property {number} [max_quantity]
 * @property {number} [product_uid]
 * @property {Size[]} [sizes]
 * @property {boolean} [auto_add_to_cart]
 */

/**
 * @typedef GetProductBundleResponse
 * @property {string} [slug]
 * @property {Object} [meta]
 * @property {string} [choice]
 * @property {boolean} [same_store_assignment]
 * @property {GetProducts[]} [products]
 * @property {string[]} [page_visibility]
 * @property {boolean} [is_active]
 * @property {number} [company_id]
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef Guide
 * @property {Meta} [meta]
 */

/**
 * @typedef ValidateSizeGuide
 * @property {string} [description]
 * @property {string} [created_on]
 * @property {string} [tag]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {boolean} [active]
 * @property {string} [subtitle]
 * @property {number} [company_id]
 * @property {Object} [created_by]
 * @property {string} [modified_on]
 * @property {number} [brand_id]
 * @property {string} name
 * @property {Guide} [guide]
 * @property {string} title
 * @property {string} [image]
 */

/**
 * @typedef ListSizeGuide
 * @property {Object[]} [items]
 * @property {Object} [page]
 */

/**
 * @typedef SizeGuideResponse
 * @property {string} [tag]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {boolean} [active]
 * @property {Object} [created_by]
 * @property {number} [company_id]
 * @property {string} [subtitle]
 * @property {string} [modified_on]
 * @property {number} [brand_id]
 * @property {string} [name]
 * @property {Object} [guide]
 * @property {string} [created_on]
 * @property {string} [title]
 */

/**
 * @typedef MetaFields
 * @property {Object} value
 * @property {Object} key
 */

/**
 * @typedef ApplicationItemMOQ
 * @property {number} [minimum]
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef ApplicationItemSEO
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef ApplicationItemMeta
 * @property {MetaFields[]} [_custom_meta]
 * @property {ApplicationItemMOQ} [moq]
 * @property {boolean} [is_gift]
 * @property {Object} [_custom_json]
 * @property {boolean} [is_cod]
 * @property {ApplicationItemSEO} [seo]
 * @property {Object} [alt_text]
 */

/**
 * @typedef SuccessResponse1
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef MOQData
 * @property {number} [minimum]
 * @property {number} [maximum]
 * @property {number} [increment_unit]
 */

/**
 * @typedef SEOData
 * @property {Object} [description]
 * @property {Object} [title]
 */

/**
 * @typedef OwnerAppItemResponse
 * @property {MOQData} [moq]
 * @property {boolean} [is_gift]
 * @property {boolean} [is_cod]
 * @property {SEOData} [seo]
 * @property {Object} [alt_text]
 */

/**
 * @typedef GetConfigMetadataResponse
 * @property {Object[]} data
 * @property {Object[]} [values]
 * @property {Object[]} [condition]
 */

/**
 * @typedef AttributeDetailsGroup
 * @property {string} [slug]
 * @property {string} [key]
 * @property {string} [unit]
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} display_type
 * @property {string} name
 * @property {string} [logo]
 */

/**
 * @typedef AppConfigurationDetail
 * @property {string} slug
 * @property {boolean} is_default
 * @property {string[]} [template_slugs]
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} app_id
 * @property {AttributeDetailsGroup[]} [attributes]
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef ConfigErrorResponse
 * @property {string} message
 */

/**
 * @typedef PageResponseType
 * @property {boolean} has_next
 * @property {number} total_count
 * @property {number} current
 * @property {number} next
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
 * @property {boolean} is_default
 * @property {string} key
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} app_id
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} default_key
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
 * @property {Object} [detail]
 * @property {Object} [compare]
 * @property {Object} [similar]
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
 * @property {string} [display]
 * @property {number} [end]
 */

/**
 * @typedef ConfigurationListingFilterValue
 * @property {string} [sort]
 * @property {Object} [map]
 * @property {ConfigurationBucketPoints[]} [bucket_points]
 * @property {string} [condition]
 * @property {string} [value]
 * @property {Object[]} [map_values]
 */

/**
 * @typedef ConfigurationListingFilterConfig
 * @property {string} key
 * @property {number} priority
 * @property {string} [display_name]
 * @property {boolean} is_active
 * @property {ConfigurationListingFilterValue} [value_config]
 * @property {string} type
 * @property {string} [name]
 * @property {string} [logo]
 */

/**
 * @typedef ConfigurationListingFilter
 * @property {ConfigurationListingFilterConfig[]} [attribute_config]
 * @property {boolean} allow_single
 */

/**
 * @typedef ConfigurationListingSortConfig
 * @property {string} key
 * @property {number} priority
 * @property {boolean} is_active
 * @property {string} [name]
 * @property {string} [logo]
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
 * @typedef ConfigurationProductConfig
 * @property {string} key
 * @property {number} priority
 * @property {string} [subtitle]
 * @property {boolean} is_active
 * @property {ProductSize} [size]
 * @property {string} [logo]
 * @property {string} [title]
 */

/**
 * @typedef ConfigurationProductSimilar
 * @property {ConfigurationProductConfig[]} [config]
 */

/**
 * @typedef ConfigurationProductVariantConfig
 * @property {string} key
 * @property {number} priority
 * @property {ProductSize} size
 * @property {boolean} is_active
 * @property {string} display_type
 * @property {string} name
 * @property {string} [logo]
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
 * @property {ConfigurationListing} [listing]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} config_type
 * @property {Object} [created_by]
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} [type]
 * @property {ConfigurationProduct} [product]
 * @property {string} [created_on]
 */

/**
 * @typedef AppCatalogConfiguration
 * @property {ConfigurationListing} [listing]
 * @property {string} [modified_on]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} config_type
 * @property {Object} [created_by]
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {string} [type]
 * @property {ConfigurationProduct} [product]
 * @property {string} [created_on]
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
 * @property {GetCatalogConfigurationDetailsSchemaListing} [listing]
 * @property {string} [id]
 * @property {string} config_type
 * @property {string} app_id
 * @property {string} [config_id]
 * @property {GetCatalogConfigurationDetailsProduct} [product]
 */

/**
 * @typedef GetAppCatalogEntityConfiguration
 * @property {boolean} [is_default]
 * @property {EntityConfiguration} [data]
 */

/**
 * @typedef ProductSortOn
 * @property {string} [name]
 * @property {string} [value]
 * @property {boolean} [is_selected]
 */

/**
 * @typedef ProductFiltersValue
 * @property {number} [min]
 * @property {string} [currency_code]
 * @property {string} display
 * @property {string} [currency_symbol]
 * @property {string} [display_format]
 * @property {boolean} is_selected
 * @property {number} [count]
 * @property {number} [max]
 * @property {number} [selected_min]
 * @property {string} [query_format]
 * @property {Object} value
 * @property {number} [selected_max]
 */

/**
 * @typedef ProductFiltersKey
 * @property {string} [kind]
 * @property {string[]} [operators]
 * @property {string} display
 * @property {string} name
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
 * @typedef UserInfo
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [email]
 * @property {string} [username]
 */

/**
 * @typedef CollectionImage
 * @property {string} url
 * @property {string} aspect_ratio
 */

/**
 * @typedef CollectionSchedule
 * @property {string} [start]
 * @property {number} [duration]
 * @property {string} [cron]
 * @property {NextSchedule[]} [next_schedule]
 * @property {string} [end]
 */

/**
 * @typedef CollectionBadge
 * @property {string} [text]
 * @property {string} [color]
 */

/**
 * @typedef CollectionQuery
 * @property {string} attribute
 * @property {string} op
 * @property {Object[]} value
 */

/**
 * @typedef SeoDetail
 * @property {string} [description]
 * @property {string} [title]
 */

/**
 * @typedef CollectionBanner
 * @property {CollectionImage} landscape
 * @property {CollectionImage} portrait
 */

/**
 * @typedef CreateCollection
 * @property {boolean} [allow_sort]
 * @property {string} slug
 * @property {Object} [_locale_language]
 * @property {UserInfo} [modified_by]
 * @property {number} [priority]
 * @property {UserInfo} [created_by]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [allow_facets]
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 * @property {boolean} [is_visible]
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {CollectionImage} logo
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [published]
 * @property {CollectionBadge} [badge]
 * @property {string} type
 * @property {CollectionQuery[]} [query]
 * @property {SeoDetail} [seo]
 * @property {string} [description]
 * @property {Object} [meta]
 * @property {string} [sort_on]
 * @property {string} app_id
 * @property {CollectionBanner} banners
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
 * @property {boolean} [allow_sort]
 * @property {Object} [cron]
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [allow_facets]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {BannerImage} [logo]
 * @property {Object} [_schedule]
 * @property {Object} [badge]
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 * @property {string} [description]
 * @property {Object} [meta]
 * @property {string[]} [tag]
 * @property {string} [sort_on]
 * @property {string} [app_id]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef Media1
 * @property {string} url
 * @property {string} [type]
 * @property {Object} [meta]
 */

/**
 * @typedef GetCollectionDetailNest
 * @property {boolean} [allow_sort]
 * @property {Object} [cron]
 * @property {string} [slug]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [allow_facets]
 * @property {boolean} [is_active]
 * @property {string} [uid]
 * @property {string} [name]
 * @property {Media1} [logo]
 * @property {Object} [_schedule]
 * @property {Object} [badge]
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 * @property {string} [description]
 * @property {Object} [meta]
 * @property {string[]} [tag]
 * @property {string} [app_id]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 */

/**
 * @typedef CollectionListingFilterTag
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilterType
 * @property {string} [name]
 * @property {boolean} [is_selected]
 * @property {string} [display]
 */

/**
 * @typedef CollectionListingFilter
 * @property {CollectionListingFilterTag[]} [tags]
 * @property {CollectionListingFilterType[]} [type]
 */

/**
 * @typedef GetCollectionListingResponse
 * @property {GetCollectionDetailNest[]} [items]
 * @property {Page} [page]
 * @property {CollectionListingFilter} [filters]
 */

/**
 * @typedef CollectionDetailResponse
 * @property {string} [description]
 * @property {Media1} [logo]
 * @property {boolean} [allow_sort]
 * @property {Object} [_schedule]
 * @property {Object} [cron]
 * @property {string} [slug]
 * @property {string[]} [tag]
 * @property {Object} [meta]
 * @property {CollectionQuery[]} [query]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [allow_facets]
 * @property {boolean} [is_active]
 * @property {string} [app_id]
 * @property {string} [type]
 * @property {Object} [badge]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef UpdateCollection
 * @property {boolean} [allow_sort]
 * @property {string} [slug]
 * @property {Object} [_locale_language]
 * @property {UserInfo} [modified_by]
 * @property {number} [priority]
 * @property {string[]} [visible_facets_keys]
 * @property {boolean} [allow_facets]
 * @property {boolean} [is_active]
 * @property {string[]} [tags]
 * @property {boolean} [is_visible]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {CollectionImage} [logo]
 * @property {CollectionSchedule} [_schedule]
 * @property {boolean} [published]
 * @property {CollectionBadge} [badge]
 * @property {string} [type]
 * @property {CollectionQuery[]} [query]
 * @property {SeoDetail} [seo]
 * @property {string} [description]
 * @property {Object} [meta]
 * @property {string} [sort_on]
 * @property {CollectionBanner} [banners]
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
 * @property {number[]} [items_not_updated]
 * @property {string} [message]
 */

/**
 * @typedef Price1
 * @property {string} [currency_code]
 * @property {number} [min]
 * @property {number} [max]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ProductListingPrice
 * @property {Price1} [effective]
 * @property {Price1} [marked]
 */

/**
 * @typedef ProductDetailAttribute
 * @property {string} [value]
 * @property {string} [key]
 * @property {string} [type]
 */

/**
 * @typedef ProductDetailGroupedAttribute
 * @property {ProductDetailAttribute[]} [details]
 * @property {string} [title]
 */

/**
 * @typedef ProductBrand
 * @property {string} [name]
 * @property {Media1} [logo]
 * @property {number} [uid]
 * @property {Action} [action]
 */

/**
 * @typedef ProductListingDetail
 * @property {string} slug
 * @property {Media1[]} [medias]
 * @property {string} [discount]
 * @property {Object} [promo_meta]
 * @property {string[]} [highlights]
 * @property {Object} [attributes]
 * @property {string} [color]
 * @property {string} [item_type]
 * @property {ProductListingPrice} [price]
 * @property {string} [item_code]
 * @property {number} [uid]
 * @property {Object} [teaser_tag]
 * @property {boolean} [has_variant]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {number} [rating_count]
 * @property {string} [name]
 * @property {number} [rating]
 * @property {string} [product_online_date]
 * @property {string[]} [tryouts]
 * @property {string} [type]
 * @property {string} [image_nature]
 * @property {string} [description]
 * @property {string[]} [similars]
 * @property {boolean} [sellable]
 * @property {ProductBrand} [brand]
 * @property {string} [short_description]
 */

/**
 * @typedef GetCollectionItemsResponse
 * @property {ProductListingDetail[]} [items]
 * @property {ProductSortOn[]} [sort_on]
 * @property {Page} [page]
 * @property {ProductFilters[]} [filters]
 */

/**
 * @typedef CatalogInsightBrand
 * @property {number} [article_freshness]
 * @property {number} [total_sizes]
 * @property {number} [available_sizes]
 * @property {number} [total_articles]
 * @property {string} [name]
 * @property {number} [available_articles]
 */

/**
 * @typedef CatalogInsightItem
 * @property {number} [sellable_count]
 * @property {number} [count]
 * @property {number} [out_of_stock_count]
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
 * @property {boolean} [enabled]
 * @property {string} opt_level
 * @property {number[]} [store_ids]
 * @property {number} [company_id]
 * @property {string} [platform]
 * @property {number[]} [brand_ids]
 */

/**
 * @typedef CompanyOptIn
 * @property {boolean} enabled
 * @property {string} opt_level
 * @property {Object} [modified_by]
 * @property {Object} [created_by]
 * @property {number[]} store_ids
 * @property {number} modified_on
 * @property {number} company_id
 * @property {number} created_on
 * @property {string} platform
 * @property {number[]} brand_ids
 */

/**
 * @typedef GetOptInPlatform
 * @property {CompanyOptIn[]} items
 * @property {Page} page
 */

/**
 * @typedef OptinCompanyDetail
 * @property {string} [company_type]
 * @property {string} [name]
 * @property {string} [business_type]
 * @property {number} [uid]
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
 * @property {number} [store]
 * @property {string} [company]
 * @property {number} [brand]
 */

/**
 * @typedef StoreDetail
 * @property {Object} [manager]
 * @property {string} [store_type]
 * @property {number} [uid]
 * @property {string} [store_code]
 * @property {string} [display_name]
 * @property {number} [company_id]
 * @property {Object[]} [documents]
 * @property {Object[]} [additional_contacts]
 * @property {Object} [address]
 * @property {string} [modified_on]
 * @property {Object} [timing]
 * @property {string} [name]
 * @property {string} [created_on]
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
 * @typedef AttributeSchemaRange
 * @property {number} [min]
 * @property {number} [max]
 */

/**
 * @typedef AttributeMaster
 * @property {boolean} [mandatory]
 * @property {AttributeSchemaRange} [range]
 * @property {boolean} [multi]
 * @property {string} type
 * @property {string} [format]
 * @property {string[]} [allowed_values]
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
 * @typedef AttributeMasterFilter
 * @property {string[]} [depends_on]
 * @property {boolean} indexing
 * @property {number} [priority]
 */

/**
 * @typedef GenderDetail
 * @property {string} [description]
 * @property {AttributeMasterDetails} [details]
 * @property {AttributeMaster} [schema]
 * @property {string} [slug]
 * @property {AttributeMasterMeta} [meta]
 * @property {boolean} [is_nested]
 * @property {string[]} [departments]
 * @property {string} [id]
 * @property {AttributeMasterFilter} [filters]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {boolean} [enabled_for_end_consumer]
 */

/**
 * @typedef ProdcutTemplateCategoriesResponse
 * @property {Object[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef PTErrorResponse
 * @property {Object} [meta]
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {number} [status]
 * @property {string} [message]
 */

/**
 * @typedef DepartmentCreateUpdate
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {string} [_cls]
 * @property {string[]} [tags]
 * @property {boolean} [is_active]
 * @property {number} priority_order
 * @property {Object} [_custom_json]
 * @property {string} name
 * @property {string} logo
 * @property {Object} [platforms]
 * @property {string[]} [synonyms]
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
 * @property {string} [user_id]
 * @property {string} [uid]
 * @property {string} [_id]
 * @property {string} [username]
 */

/**
 * @typedef GetDepartment
 * @property {string} [slug]
 * @property {string} [search]
 * @property {string} [item_type]
 * @property {UserSerializer} [modified_by]
 * @property {number} [uid]
 * @property {number} [page_no]
 * @property {number} [page_size]
 * @property {UserSerializer} [created_by]
 * @property {boolean} [is_active]
 * @property {number} [priority_order]
 * @property {string} [modified_on]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [created_on]
 * @property {string[]} [synonyms]
 */

/**
 * @typedef DepartmentsResponse
 * @property {GetDepartment[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef DepartmentErrorResponse
 * @property {Object} [meta]
 * @property {string} [code]
 * @property {Object} [errors]
 * @property {number} [status]
 * @property {string} [message]
 */

/**
 * @typedef UserDetail
 * @property {string} [contact]
 * @property {string} user_id
 * @property {boolean} [super_user]
 * @property {string} username
 */

/**
 * @typedef DepartmentModel
 * @property {string} modified_on
 * @property {Object} [slug]
 * @property {UserDetail} [modified_by]
 * @property {number} [uid]
 * @property {UserDetail} [verified_by]
 * @property {Object} [_custom_json]
 * @property {UserDetail} [created_by]
 * @property {Object} [_id]
 * @property {Object} [_cls]
 * @property {boolean} [is_active]
 * @property {number} priority_order
 * @property {string} [verified_on]
 * @property {Object} name
 * @property {string} logo
 * @property {string} created_on
 * @property {Object[]} [synonyms]
 */

/**
 * @typedef ProductTemplate
 * @property {string} [description]
 * @property {boolean} is_expirable
 * @property {string[]} [categories]
 * @property {string} slug
 * @property {boolean} is_physical
 * @property {string} [tag]
 * @property {Object} [modified_by]
 * @property {string[]} [departments]
 * @property {Object} [created_by]
 * @property {boolean} [is_active]
 * @property {string} [modified_on]
 * @property {string[]} [attributes]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [created_on]
 * @property {boolean} [is_archived]
 */

/**
 * @typedef TemplatesResponse
 * @property {ProductTemplate} [items]
 * @property {Page} [page]
 */

/**
 * @typedef Properties
 * @property {Object} [product_group_tag]
 * @property {Object} [slug]
 * @property {Object} [is_dependent]
 * @property {Object} [return_config]
 * @property {Object} [brand_uid]
 * @property {Object} [size_guide]
 * @property {Object} [is_active]
 * @property {Object} [highlights]
 * @property {Object} [multi_size]
 * @property {Object} [item_type]
 * @property {Object} [item_code]
 * @property {Object} [teaser_tag]
 * @property {Object} [tags]
 * @property {Object} [name]
 * @property {Object} [sizes]
 * @property {Object} [trader]
 * @property {Object} [media]
 * @property {Object} [currency]
 * @property {Object} [category_slug]
 * @property {Object} [command]
 * @property {Object} [trader_type]
 * @property {Object} [custom_order]
 * @property {Object} [hsn_code]
 * @property {Object} [description]
 * @property {Object} [product_publish]
 * @property {Object} [country_of_origin]
 * @property {Object} [variants]
 * @property {Object} [no_of_boxes]
 * @property {Object} [short_description]
 */

/**
 * @typedef GlobalValidation
 * @property {string} [description]
 * @property {Object} [definitions]
 * @property {string[]} [required]
 * @property {string} [type]
 * @property {string} [title]
 * @property {Properties} [properties]
 */

/**
 * @typedef TemplateValidationData
 * @property {Object} [template_validation]
 * @property {GlobalValidation} [global_validation]
 */

/**
 * @typedef TemplateDetails
 * @property {string} [description]
 * @property {boolean} is_expirable
 * @property {string[]} [categories]
 * @property {string} slug
 * @property {boolean} is_physical
 * @property {string} [tag]
 * @property {string[]} [departments]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {string[]} [attributes]
 * @property {string} [name]
 * @property {string} [logo]
 * @property {boolean} [is_archived]
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
 * @typedef ProductDownloadItemsData
 * @property {string[]} [templates]
 * @property {string[]} [brand]
 * @property {string} [type]
 */

/**
 * @typedef VerifiedBy
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductDownloadsItems
 * @property {Object} [template_tags]
 * @property {ProductDownloadItemsData} [data]
 * @property {string} [trigger_on]
 * @property {string} [task_id]
 * @property {string} [url]
 * @property {number} [seller_id]
 * @property {string} [id]
 * @property {VerifiedBy} [created_by]
 * @property {string} [completed_on]
 * @property {string} [status]
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
 * @typedef Media2
 * @property {string} logo
 * @property {string} landscape
 * @property {string} portrait
 */

/**
 * @typedef CategoryMappingValues
 * @property {number} [catalog_id]
 * @property {string} name
 */

/**
 * @typedef CategoryMapping
 * @property {CategoryMappingValues} [google]
 * @property {CategoryMappingValues} [facebook]
 * @property {CategoryMappingValues} [ajio]
 */

/**
 * @typedef Hierarchy
 * @property {number} l2
 * @property {number} department
 * @property {number} l1
 */

/**
 * @typedef CategoryRequestBody
 * @property {string} [slug]
 * @property {Media2} [media]
 * @property {number[]} departments
 * @property {CategoryMapping} [marketplaces]
 * @property {string[]} [tryouts]
 * @property {number} [priority]
 * @property {boolean} is_active
 * @property {string} name
 * @property {Hierarchy[]} [hierarchy]
 * @property {number} level
 * @property {string[]} [synonyms]
 */

/**
 * @typedef CategoryCreateResponse
 * @property {number} [uid]
 * @property {string} [message]
 */

/**
 * @typedef Category
 * @property {string} [slug]
 * @property {Media2} [media]
 * @property {Object} [modified_by]
 * @property {number} [uid]
 * @property {number[]} departments
 * @property {CategoryMapping} [marketplaces]
 * @property {string[]} [tryouts]
 * @property {number} [priority]
 * @property {Object} [created_by]
 * @property {string} [id]
 * @property {boolean} is_active
 * @property {string} [modified_on]
 * @property {string} name
 * @property {string} [created_on]
 * @property {Hierarchy[]} [hierarchy]
 * @property {number} level
 * @property {string[]} [synonyms]
 */

/**
 * @typedef CategoryResponse
 * @property {Category[]} [items]
 * @property {Page} [page]
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
 * @typedef NetQuantity
 * @property {number} [value]
 * @property {Object} [unit]
 */

/**
 * @typedef TaxIdentifier
 * @property {string} [reporting_hsn]
 * @property {string} [hsn_code_id]
 * @property {string} [hsn_code]
 */

/**
 * @typedef TeaserTag
 * @property {string} [url]
 * @property {string} [tag]
 */

/**
 * @typedef Trader
 * @property {Object} name
 * @property {string} [type]
 * @property {string[]} [address]
 */

/**
 * @typedef CustomOrder
 * @property {string} [manufacturing_time_unit]
 * @property {boolean} [is_custom_order]
 * @property {number} [manufacturing_time]
 */

/**
 * @typedef ProductPublish
 * @property {boolean} [is_set]
 * @property {string} [product_online_date]
 */

/**
 * @typedef ProductCreateUpdate
 * @property {string[]} [product_group_tag]
 * @property {string} slug
 * @property {NetQuantity} [net_quantity]
 * @property {string} template_tag
 * @property {boolean} [is_dependent]
 * @property {string} [action]
 * @property {number[]} departments
 * @property {number} brand_uid
 * @property {string} [size_guide]
 * @property {ReturnConfig} return_config
 * @property {string} [bulk_job_id]
 * @property {boolean} [is_active]
 * @property {string[]} [highlights]
 * @property {TaxIdentifier} tax_identifier
 * @property {boolean} [multi_size]
 * @property {boolean} [is_image_less_product]
 * @property {string} item_type
 * @property {Object} item_code
 * @property {number} [uid]
 * @property {TeaserTag} [teaser_tag]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {Object} name
 * @property {Object} [change_request_id]
 * @property {Trader[]} trader
 * @property {string} category_slug
 * @property {boolean} [is_set]
 * @property {string} currency
 * @property {Media1[]} [media]
 * @property {CustomOrder} [custom_order]
 * @property {string} [requester]
 * @property {Object} [variants_group]
 * @property {string} [description]
 * @property {ProductPublish} [product_publish]
 * @property {Object} [variants]
 * @property {string} country_of_origin
 * @property {Object} [variant_media]
 * @property {number} [no_of_boxes]
 * @property {number} company_id
 * @property {string} [short_description]
 */

/**
 * @typedef Image
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef ProductPublished
 * @property {boolean} [is_set]
 * @property {number} [product_online_date]
 */

/**
 * @typedef Logo
 * @property {number} [aspect_ratio_f]
 * @property {string} [url]
 * @property {string} [aspect_ratio]
 * @property {string} [secure_url]
 */

/**
 * @typedef Product
 * @property {boolean} [is_expirable]
 * @property {string} [slug]
 * @property {string} [template_tag]
 * @property {boolean} [is_dependent]
 * @property {number[]} [departments]
 * @property {number} [brand_uid]
 * @property {string} [size_guide]
 * @property {boolean} [is_active]
 * @property {string[]} [highlights]
 * @property {boolean} [multi_size]
 * @property {Object} [tax_identifier]
 * @property {string} [color]
 * @property {boolean} [is_physical]
 * @property {string} [item_type]
 * @property {string} [item_code]
 * @property {number} [uid]
 * @property {number} [category_uid]
 * @property {Image[]} [images]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {Object[]} [sizes]
 * @property {Media1[]} [media]
 * @property {boolean} [is_set]
 * @property {string} [currency]
 * @property {string} [category_slug]
 * @property {Object[]} [all_sizes]
 * @property {string} [id]
 * @property {string} [image_nature]
 * @property {Object} [custom_order]
 * @property {string} [hsn_code]
 * @property {string} [description]
 * @property {ProductPublished} [product_publish]
 * @property {string[]} [l3_mapping]
 * @property {Object} [variant_group]
 * @property {string} [country_of_origin]
 * @property {Object} [variants]
 * @property {Brand} [brand]
 * @property {string} [short_description]
 * @property {string} [primary_color]
 */

/**
 * @typedef ProductListingResponse
 * @property {Product[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef AttributeMasterSerializer
 * @property {boolean} [is_nested]
 * @property {string} slug
 * @property {Object} [modified_by]
 * @property {string[]} departments
 * @property {Object} [created_by]
 * @property {string} [created_on]
 * @property {AttributeMasterDetails} details
 * @property {boolean} [variant]
 * @property {string[]} [tags]
 * @property {string} [name]
 * @property {boolean} [enabled_for_end_consumer]
 * @property {string} [suggestion]
 * @property {string} [logo]
 * @property {AttributeMasterFilter} filters
 * @property {string} [modified_on]
 * @property {string} [raw_key]
 * @property {Object} [synonyms]
 * @property {string} [description]
 * @property {AttributeMaster} schema
 * @property {string} [unit]
 */

/**
 * @typedef ProductAttributesResponse
 * @property {AttributeMasterSerializer[]} items
 */

/**
 * @typedef ValidateProduct
 * @property {boolean} [valid]
 */

/**
 * @typedef UserInfo1
 * @property {string} [uid]
 * @property {string} [user_id]
 * @property {string} [email]
 * @property {string} [username]
 */

/**
 * @typedef BulkJob
 * @property {string} [tracking_url]
 * @property {Object[]} [cancelled_records]
 * @property {number} [cancelled]
 * @property {Object[]} [failed_records]
 * @property {string} [template_tag]
 * @property {string} [custom_template_tag]
 * @property {UserInfo1} [modified_by]
 * @property {string} [file_path]
 * @property {UserInfo1} [created_by]
 * @property {string} [stage]
 * @property {boolean} [is_active]
 * @property {number} total
 * @property {string} [modified_on]
 * @property {number} company_id
 * @property {string} created_on
 * @property {number} [succeed]
 * @property {number} [failed]
 */

/**
 * @typedef BulkResponse
 * @property {UserInfo1} [modified_by]
 * @property {UserInfo1} [created_by]
 * @property {boolean} [is_active]
 * @property {string} batch_id
 * @property {string} [modified_on]
 * @property {string} created_on
 */

/**
 * @typedef UserDetail1
 * @property {string} [full_name]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ProductBulkRequest
 * @property {string} [modified_on]
 * @property {number} [succeed]
 * @property {number} [cancelled]
 * @property {string[]} [failed_records]
 * @property {string} [template_tag]
 * @property {UserDetail1} [modified_by]
 * @property {string} [file_path]
 * @property {UserDetail1} [created_by]
 * @property {string} [stage]
 * @property {ProductTemplate} [template]
 * @property {boolean} [is_active]
 * @property {number} [total]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {string[]} [cancelled_records]
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
 * @typedef NestedTags
 * @property {string[]} [tags]
 */

/**
 * @typedef ProductTagsViewResponse
 * @property {NestedTags} [items]
 */

/**
 * @typedef ProductBulkAssets
 * @property {number} [company_id]
 * @property {string} url
 * @property {Object} user
 */

/**
 * @typedef UserCommon
 * @property {number} [company_id]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef Items
 * @property {string} [tracking_url]
 * @property {string[]} [cancelled_records]
 * @property {number} [retry]
 * @property {number} [cancelled]
 * @property {string[]} [failed_records]
 * @property {UserCommon} [modified_by]
 * @property {string} [id]
 * @property {UserCommon} [created_by]
 * @property {string} [stage]
 * @property {number} [company_id]
 * @property {boolean} [is_active]
 * @property {number} [total]
 * @property {string} [modified_on]
 * @property {string} [file_path]
 * @property {string} [created_on]
 * @property {number} [succeed]
 * @property {number} [failed]
 */

/**
 * @typedef BulkAssetResponse
 * @property {Items[]} [items]
 * @property {Page} [page]
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
 * @typedef ItemQuery
 * @property {string} [item_code]
 * @property {number} [uid]
 * @property {number} [brand_uid]
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
 * @property {SizeDistribution} size_distribution
 * @property {number} [quantity]
 */

/**
 * @typedef GTIN
 * @property {string} gtin_type
 * @property {Object} gtin_value
 * @property {boolean} [primary]
 */

/**
 * @typedef InvSize
 * @property {string} [expiration_date]
 * @property {number} [item_weight]
 * @property {number} [price]
 * @property {boolean} [is_set]
 * @property {string} currency
 * @property {string} store_code
 * @property {number} price_effective
 * @property {number} quantity
 * @property {InventorySet} [set]
 * @property {number} [price_transfer]
 * @property {number} [item_length]
 * @property {number} [item_height]
 * @property {Object} size
 * @property {GTIN[]} identifiers
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {number} [item_width]
 * @property {string} [item_weight_unit_of_measure]
 */

/**
 * @typedef InventoryRequest
 * @property {number} company_id
 * @property {ItemQuery} item
 * @property {InvSize[]} sizes
 */

/**
 * @typedef InventoryResponse
 * @property {number} [item_id]
 * @property {number} [sellable_quantity]
 * @property {number} [price]
 * @property {string} [seller_identifier]
 * @property {string} [currency]
 * @property {string} [uid]
 * @property {number} [price_effective]
 * @property {Object} [store]
 * @property {number} [price_transfer]
 * @property {string} [size]
 * @property {Object} [identifiers]
 * @property {number} [quantity]
 * @property {string} [inventory_updated_on]
 */

/**
 * @typedef InventoryResponsePaginated
 * @property {InventoryResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef ReturnConfig1
 * @property {boolean} [returnable]
 * @property {string} [unit]
 * @property {number} [time]
 */

/**
 * @typedef PriceMeta
 * @property {number} transfer
 * @property {number} effective
 * @property {string} currency
 * @property {Object} [tp_notes]
 * @property {number} marked
 * @property {string} [updated_at]
 */

/**
 * @typedef CompanyMeta
 * @property {number} id
 */

/**
 * @typedef ManufacturerResponse
 * @property {boolean} is_default
 * @property {string} name
 * @property {string} address
 */

/**
 * @typedef Trader1
 * @property {string} name
 * @property {string} type
 * @property {string[]} address
 */

/**
 * @typedef DimensionResponse
 * @property {number} height
 * @property {boolean} is_default
 * @property {number} width
 * @property {string} unit
 * @property {number} length
 */

/**
 * @typedef QuantityBase
 * @property {number} [count]
 * @property {string} [updated_at]
 */

/**
 * @typedef Quantities
 * @property {QuantityBase} [sellable]
 * @property {QuantityBase} [order_committed]
 * @property {QuantityBase} [not_available]
 * @property {QuantityBase} [damaged]
 */

/**
 * @typedef WeightResponse
 * @property {boolean} is_default
 * @property {number} shipping
 * @property {string} unit
 */

/**
 * @typedef BrandMeta
 * @property {string} name
 * @property {number} id
 */

/**
 * @typedef InventorySellerResponse
 * @property {Object} [raw_meta]
 * @property {string} seller_identifier
 * @property {UserSerializer} [modified_by]
 * @property {ReturnConfig1} [return_config]
 * @property {UserSerializer} [created_by]
 * @property {string} [stage]
 * @property {StoreMeta} store
 * @property {Object} [fynd_meta]
 * @property {boolean} [is_active]
 * @property {Object} [tax_identifier]
 * @property {number} item_id
 * @property {string} [expiration_date]
 * @property {PriceMeta} price
 * @property {string} uid
 * @property {InventorySet} [set]
 * @property {string} [added_on_store]
 * @property {string[]} [tags]
 * @property {Object} [_custom_json]
 * @property {CompanyMeta} company
 * @property {string} fynd_article_code
 * @property {ManufacturerResponse} manufacturer
 * @property {Trader1[]} [trader]
 * @property {boolean} [is_set]
 * @property {DimensionResponse} dimension
 * @property {Quantities} [quantities]
 * @property {string} fynd_item_code
 * @property {Object} [meta]
 * @property {string} [trace_id]
 * @property {WeightResponse} weight
 * @property {boolean} [track_inventory]
 * @property {boolean} fragile
 * @property {number} total_quantity
 * @property {BrandMeta} brand
 * @property {string} country_of_origin
 * @property {string} size
 * @property {Object} identifier
 */

/**
 * @typedef InventorySellerIdentifierResponsePaginated
 * @property {InventorySellerResponse[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef BulkInventoryGetItems
 * @property {string} [modified_on]
 * @property {number} [cancelled]
 * @property {number} [succeed]
 * @property {string[]} [failed_records]
 * @property {Object} [modified_by]
 * @property {string} [id]
 * @property {string} [file_path]
 * @property {Object} [created_by]
 * @property {string} [stage]
 * @property {boolean} [is_active]
 * @property {number} [total]
 * @property {number} [failed]
 * @property {number} [company_id]
 * @property {string} [created_on]
 * @property {string[]} [cancelled_records]
 */

/**
 * @typedef BulkInventoryGet
 * @property {BulkInventoryGetItems[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef InventoryJobPayload
 * @property {string} [expiration_date]
 * @property {string} [trace_id]
 * @property {string} seller_identifier
 * @property {number} [price]
 * @property {string} [currency]
 * @property {string} store_code
 * @property {number} [price_effective]
 * @property {number} [total_quantity]
 * @property {number} [quantity]
 * @property {string[]} [tags]
 * @property {string} [item_dimensions_unit_of_measure]
 * @property {string} [item_weight_unit_of_measure]
 * @property {number} [price_marked]
 */

/**
 * @typedef InventoryBulkRequest
 * @property {number} company_id
 * @property {string} batch_id
 * @property {Object} [user]
 * @property {InventoryJobPayload[]} sizes
 */

/**
 * @typedef InventoryExportRequest
 * @property {number[]} [store]
 * @property {number[]} [brand]
 * @property {string} [type]
 */

/**
 * @typedef InventoryExportResponse
 * @property {string} [trigger_on]
 * @property {string} task_id
 * @property {number} seller_id
 * @property {Object} [request_params]
 * @property {string} [status]
 */

/**
 * @typedef InventoryExportJob
 * @property {string} [trigger_on]
 * @property {string} task_id
 * @property {string} [url]
 * @property {number} seller_id
 * @property {string} [completed_on]
 * @property {Object} [request_params]
 * @property {string} [status]
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
 * @property {string} [expiration_date]
 * @property {string} [trace_id]
 * @property {string} seller_identifier
 * @property {number} store_id
 * @property {number} [price_effective]
 * @property {number} [total_quantity]
 * @property {string[]} [tags]
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
 * @property {InventoryResponseItem[]} [items]
 * @property {string} message
 */

/**
 * @typedef HsnUpsert
 * @property {boolean} [tax_on_esp]
 * @property {boolean} tax_on_mrp
 * @property {number} [uid]
 * @property {string} hs2_code
 * @property {boolean} [is_active]
 * @property {number} tax1
 * @property {number} [threshold2]
 * @property {number} company_id
 * @property {number} threshold1
 * @property {string} hsn_code
 * @property {number} [tax2]
 */

/**
 * @typedef HsnCodesObject
 * @property {string} [modified_on]
 * @property {boolean} [tax_on_esp]
 * @property {boolean} [tax_on_mrp]
 * @property {string} [id]
 * @property {string} [hs2_code]
 * @property {number} [tax1]
 * @property {number} [threshold2]
 * @property {number} [company_id]
 * @property {number} [threshold1]
 * @property {string} [hsn_code]
 * @property {number} [tax2]
 */

/**
 * @typedef HsnCode
 * @property {HsnCodesObject} [data]
 */

/**
 * @typedef PageResponse
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {number} [size]
 * @property {string} [current]
 */

/**
 * @typedef HsnCodesListingResponse
 * @property {HsnCodesObject[]} [items]
 * @property {PageResponse} [page]
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
 * @property {number} threshold
 * @property {number} [cess]
 * @property {number} rate
 */

/**
 * @typedef HSNDataInsertV2
 * @property {string} description
 * @property {string} country_code
 * @property {Object} [modified_by]
 * @property {Object} [created_by]
 * @property {TaxSlab[]} taxes
 * @property {string} type
 * @property {string} [modified_on]
 * @property {string} reporting_hsn
 * @property {string} [created_on]
 * @property {string} hsn_code
 */

/**
 * @typedef HsnCodesListingResponseSchemaV2
 * @property {HSNDataInsertV2[]} [items]
 * @property {PageResponse} [page]
 */

/**
 * @typedef ArticleAssignment
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef ArticleQuery
 * @property {number} item_id
 * @property {string} size
 * @property {number[]} [ignored_stores]
 */

/**
 * @typedef AssignStoreArticle
 * @property {string} [group_id]
 * @property {ArticleAssignment} [article_assignment]
 * @property {Object} [meta]
 * @property {ArticleQuery} [query]
 * @property {number} [quantity]
 */

/**
 * @typedef AssignStore
 * @property {string} [channel_type]
 * @property {string} [channel_identifier]
 * @property {AssignStoreArticle[]} articles
 * @property {string} pincode
 * @property {number[]} [store_ids]
 * @property {string} app_id
 * @property {number} [company_id]
 */

/**
 * @typedef ArticleAssignment1
 * @property {string} [level]
 * @property {string} [strategy]
 */

/**
 * @typedef StoreAssignResponse
 * @property {number} item_id
 * @property {ArticleAssignment1} article_assignment
 * @property {number} [index]
 * @property {string} [group_id]
 * @property {Object} [meta]
 * @property {string} [uid]
 * @property {number} [store_id]
 * @property {number} [price_effective]
 * @property {string} [s_city]
 * @property {string} [_id]
 * @property {Object[]} [strategy_wise_listing]
 * @property {boolean} status
 * @property {number} [company_id]
 * @property {string} size
 * @property {number} [store_pincode]
 * @property {number} quantity
 * @property {number} [price_marked]
 */

/**
 * @typedef BrandItem
 * @property {string} [slug]
 * @property {string} [discount]
 * @property {number} [uid]
 * @property {string[]} [departments]
 * @property {string} [name]
 * @property {Media} [logo]
 * @property {Action} [action]
 * @property {ImageUrls} [banners]
 */

/**
 * @typedef BrandListingResponse
 * @property {BrandItem[]} [items]
 * @property {Page} page
 */

/**
 * @typedef Department
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {number} [priority_order]
 * @property {string} [name]
 * @property {Media} [logo]
 */

/**
 * @typedef DepartmentResponse
 * @property {Department[]} [items]
 */

/**
 * @typedef ThirdLevelChild
 * @property {Object[]} [childs]
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 */

/**
 * @typedef SecondLevelChild
 * @property {ThirdLevelChild[]} [childs]
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 */

/**
 * @typedef Child
 * @property {SecondLevelChild[]} [childs]
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {Object} [_custom_json]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 */

/**
 * @typedef CategoryItems
 * @property {Child[]} [childs]
 * @property {string} [slug]
 * @property {number} [uid]
 * @property {string} [name]
 * @property {ImageUrls} [banners]
 * @property {Action} [action]
 */

/**
 * @typedef DepartmentCategoryTree
 * @property {CategoryItems[]} [items]
 * @property {string} [department]
 */

/**
 * @typedef DepartmentIdentifier
 * @property {number} [uid]
 * @property {string} [slug]
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
 * @property {ProductFilters[]} [filters]
 * @property {ProductListingDetail[]} [items]
 * @property {Page} page
 */

/**
 * @typedef ProductDetail
 * @property {string} slug
 * @property {Media1[]} [medias]
 * @property {Object} [promo_meta]
 * @property {string[]} [highlights]
 * @property {Object} [attributes]
 * @property {string} [color]
 * @property {string} [item_type]
 * @property {string} [item_code]
 * @property {number} [uid]
 * @property {Object} [teaser_tag]
 * @property {boolean} [has_variant]
 * @property {ProductDetailGroupedAttribute[]} [grouped_attributes]
 * @property {number} [rating_count]
 * @property {string} [name]
 * @property {number} [rating]
 * @property {string} [product_online_date]
 * @property {string[]} [tryouts]
 * @property {string} [type]
 * @property {string} [image_nature]
 * @property {string} [description]
 * @property {string[]} [similars]
 * @property {ProductBrand} [brand]
 * @property {string} [short_description]
 */

/**
 * @typedef InventoryPage
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {string} type
 * @property {string} [next_id]
 * @property {number} item_total
 */

/**
 * @typedef InventoryStockResponse
 * @property {Object[]} [items]
 * @property {InventoryPage} page
 */

/**
 * @typedef UserSerializer1
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef LocationTimingSerializer
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef LocationDayWiseSerializer
 * @property {LocationTimingSerializer} [closing]
 * @property {boolean} open
 * @property {string} weekday
 * @property {LocationTimingSerializer} [opening]
 */

/**
 * @typedef ProductReturnConfigSerializer
 * @property {number} [store_uid]
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef GetAddressSerializer
 * @property {string} [address2]
 * @property {string} [country_code]
 * @property {string} [address1]
 * @property {string} [country]
 * @property {number} [longitude]
 * @property {number} [latitude]
 * @property {string} [address_type]
 * @property {number} [pincode]
 * @property {string} [landmark]
 * @property {string} [state]
 * @property {string} [city]
 */

/**
 * @typedef UserSerializer2
 * @property {string} [contact]
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef GetCompanySerializer
 * @property {GetAddressSerializer[]} [addresses]
 * @property {string} [modified_on]
 * @property {string} [reject_reason]
 * @property {UserSerializer2} [modified_by]
 * @property {number} [uid]
 * @property {string} [company_type]
 * @property {UserSerializer2} [created_by]
 * @property {string} [stage]
 * @property {UserSerializer2} [verified_by]
 * @property {string} [name]
 * @property {string} [business_type]
 * @property {string} [created_on]
 * @property {string} [verified_on]
 */

/**
 * @typedef SellerPhoneNumber
 * @property {number} country_code
 * @property {string} number
 */

/**
 * @typedef LocationManagerSerializer
 * @property {string} [name]
 * @property {SellerPhoneNumber} mobile_no
 * @property {string} [email]
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
 * @typedef LocationIntegrationType
 * @property {string} [inventory]
 * @property {string} [order]
 */

/**
 * @typedef GetLocationSerializer
 * @property {UserSerializer1} [modified_by]
 * @property {UserSerializer1} [created_by]
 * @property {string} [stage]
 * @property {UserSerializer1} [verified_by]
 * @property {LocationDayWiseSerializer[]} [timing]
 * @property {string} [created_on]
 * @property {Object} [warnings]
 * @property {string[]} [notification_emails]
 * @property {string} [store_type]
 * @property {number} [uid]
 * @property {string} display_name
 * @property {Object} [_custom_json]
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} name
 * @property {GetCompanySerializer} [company]
 * @property {string} phone_number
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {LocationManagerSerializer} [manager]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {LocationIntegrationType} [integration_type]
 * @property {string} code
 * @property {Document[]} [documents]
 * @property {string} [modified_on]
 * @property {string} [verified_on]
 * @property {GetAddressSerializer} address
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
 * @property {number} uid
 * @property {boolean} [is_active]
 * @property {string} app_id
 * @property {Object} [_custom_json]
 * @property {string} [name]
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
 * @typedef CompanyTaxesSerializer
 * @property {string} [effective_date]
 * @property {boolean} [enable]
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
 * @typedef BusinessCountryInfo
 * @property {string} [country]
 * @property {string} [country_code]
 */

/**
 * @typedef ContactDetails
 * @property {string[]} [emails]
 * @property {SellerPhoneNumber[]} [phone]
 */

/**
 * @typedef GetCompanyProfileSerializerResponse
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {CompanyTaxesSerializer[]} [taxes]
 * @property {boolean} [franchise_enabled]
 * @property {BusinessDetails} [business_details]
 * @property {Document[]} [documents]
 * @property {string[]} [notification_emails]
 * @property {string} [created_on]
 * @property {string} [business_info]
 * @property {string} [stage]
 * @property {string} business_type
 * @property {number} uid
 * @property {UserSerializer} [modified_by]
 * @property {string} [name]
 * @property {string} company_type
 * @property {string} [mode]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {ContactDetails} [contact_details]
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [created_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {Object} [warnings]
 * @property {UserSerializer} [verified_by]
 */

/**
 * @typedef CompanyTaxesSerializer1
 * @property {string} [effective_date]
 * @property {boolean} [enable]
 * @property {number} [rate]
 */

/**
 * @typedef CreateUpdateAddressSerializer
 * @property {number} latitude
 * @property {string} address_type
 * @property {string} address1
 * @property {number} longitude
 * @property {string} country
 * @property {string} state
 * @property {string} [address2]
 * @property {string} city
 * @property {number} pincode
 * @property {string} [country_code]
 * @property {string} [landmark]
 */

/**
 * @typedef UpdateCompany
 * @property {string} [business_info]
 * @property {string} [name]
 * @property {string} [company_type]
 * @property {CompanyTaxesSerializer1[]} [taxes]
 * @property {string} [business_type]
 * @property {string} [reject_reason]
 * @property {Object} [_custom_json]
 * @property {ContactDetails} [contact_details]
 * @property {boolean} [franchise_enabled]
 * @property {BusinessDetails} [business_details]
 * @property {Document[]} [documents]
 * @property {string[]} [notification_emails]
 * @property {CreateUpdateAddressSerializer[]} [addresses]
 * @property {Object} [warnings]
 */

/**
 * @typedef ProfileSuccessResponse
 * @property {number} [uid]
 * @property {boolean} [success]
 */

/**
 * @typedef DocumentsObj
 * @property {number} [pending]
 * @property {number} [verified]
 */

/**
 * @typedef MetricsSerializer
 * @property {DocumentsObj} [company_documents]
 * @property {DocumentsObj} [brand]
 * @property {string} [stage]
 * @property {DocumentsObj} [store]
 * @property {DocumentsObj} [product]
 * @property {number} [uid]
 * @property {DocumentsObj} [store_documents]
 */

/**
 * @typedef BrandBannerSerializer
 * @property {string} [portrait]
 * @property {string} [landscape]
 */

/**
 * @typedef GetBrandResponseSerializer
 * @property {string} [description]
 * @property {string} [logo]
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {BrandBannerSerializer} [banner]
 * @property {string} [reject_reason]
 * @property {string} [created_on]
 * @property {string} [stage]
 * @property {string} [slug_key]
 * @property {Object} [_locale_language]
 * @property {number} [uid]
 * @property {UserSerializer} [modified_by]
 * @property {string[]} [synonyms]
 * @property {string} name
 * @property {string} [mode]
 * @property {Object} [_custom_json]
 * @property {UserSerializer} [created_by]
 * @property {Object} [warnings]
 * @property {UserSerializer} [verified_by]
 */

/**
 * @typedef CreateUpdateBrandRequestSerializer
 * @property {string[]} [synonyms]
 * @property {string} [description]
 * @property {string} [brand_tier]
 * @property {number} [company_id]
 * @property {string} name
 * @property {Object} [_locale_language]
 * @property {BrandBannerSerializer} [banner]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {string} logo
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
 * @property {CompanyDetails} [details]
 * @property {string} [created_on]
 * @property {string} [name]
 * @property {string} company_type
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {string} [stage]
 * @property {string} business_type
 * @property {string[]} [market_channels]
 * @property {string} [reject_reason]
 * @property {Object} [_custom_json]
 * @property {number} [uid]
 * @property {BusinessCountryInfo} [business_country_info]
 * @property {string[]} [notification_emails]
 * @property {UserSerializer} [created_by]
 * @property {GetAddressSerializer[]} [addresses]
 * @property {UserSerializer} [modified_by]
 * @property {UserSerializer} [verified_by]
 */

/**
 * @typedef CompanyBrandSerializer
 * @property {string} [created_on]
 * @property {GetBrandResponseSerializer} [brand]
 * @property {string} [stage]
 * @property {string} [verified_on]
 * @property {string} [modified_on]
 * @property {string} [reject_reason]
 * @property {Object} [warnings]
 * @property {number} [uid]
 * @property {UserSerializer} [created_by]
 * @property {CompanySerializer} [company]
 * @property {UserSerializer} [modified_by]
 * @property {UserSerializer} [verified_by]
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
 * @typedef LocationSerializer
 * @property {GetAddressSerializer} address
 * @property {string} display_name
 * @property {ProductReturnConfigSerializer} [product_return_config]
 * @property {string} name
 * @property {string} [stage]
 * @property {SellerPhoneNumber[]} [contact_numbers]
 * @property {string} code
 * @property {string} [store_type]
 * @property {Object} [_custom_json]
 * @property {Object} [warnings]
 * @property {number} [uid]
 * @property {LocationManagerSerializer} [manager]
 * @property {Document[]} [documents]
 * @property {InvoiceDetailsSerializer} [gst_credentials]
 * @property {string[]} [notification_emails]
 * @property {number} company
 * @property {LocationDayWiseSerializer[]} [timing]
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
 * @property {string} [size]
 * @property {number} [item_id]
 * @property {number[]} [ignored_stores]
 */

/**
 * @typedef _AssignStoreArticle
 * @property {_ArticleAssignment} [article_assignment]
 * @property {Object} [meta]
 * @property {number} [quantity]
 * @property {string} [group_id]
 * @property {_ArticleQuery} [query]
 */

/**
 * @typedef AssignStoreRequestValidator
 * @property {string} [app_id]
 * @property {number} [company_id]
 * @property {string} [channel_type]
 * @property {number[]} [store_ids]
 * @property {_AssignStoreArticle[]} [articles]
 * @property {string} [pincode]
 * @property {string} [channel_identifier]
 */

/**
 * @typedef AssignStoreResponseSerializer
 * @property {string} [_id]
 * @property {_ArticleAssignment} [article_assignment]
 * @property {number} [company_id]
 * @property {string} [s_city]
 * @property {string} [size]
 * @property {number} [price_marked]
 * @property {Object} [meta]
 * @property {number} [item_id]
 * @property {number} [quantity]
 * @property {number} [store_id]
 * @property {boolean} [status]
 * @property {string} [uid]
 * @property {number} [preice_effective]
 * @property {string} [store_pincode]
 * @property {number} [index]
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
 * @typedef CouponDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef RuleDefinition
 * @property {boolean} [auto_apply]
 * @property {string} calculate_on
 * @property {string} applicable_on
 * @property {string} type
 * @property {string} value_type
 * @property {string} [currency_code]
 * @property {boolean} [is_exact]
 * @property {string[]} [scope]
 */

/**
 * @typedef Validity
 * @property {number} [priority]
 */

/**
 * @typedef Validation
 * @property {boolean} [anonymous]
 * @property {string} [user_registered_after]
 * @property {string[]} [app_id]
 */

/**
 * @typedef CouponAction
 * @property {string} [txn_mode]
 * @property {string} [action_date]
 */

/**
 * @typedef CouponSchedule
 * @property {string} [start]
 * @property {number} [duration]
 * @property {string} [cron]
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 */

/**
 * @typedef PaymentAllowValue
 * @property {number} [max]
 */

/**
 * @typedef PaymentModes
 * @property {string[]} [networks]
 * @property {string[]} [types]
 * @property {string[]} [codes]
 * @property {PaymentAllowValue} [uses]
 */

/**
 * @typedef PostOrder
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
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
 * @typedef PriceRange
 * @property {number} [max]
 * @property {number} [min]
 */

/**
 * @typedef Restrictions
 * @property {boolean} [coupon_allowed]
 * @property {Object} [payments]
 * @property {string} [user_type]
 * @property {PostOrder} [post_order]
 * @property {UsesRestriction} [uses]
 * @property {number[]} [ordering_stores]
 * @property {string[]} [platforms]
 * @property {BulkBundleRestriction} [bulk_bundle]
 * @property {number[]} [user_groups]
 * @property {PriceRange} [price_range]
 */

/**
 * @typedef Ownership
 * @property {string} payable_category
 * @property {string} payable_by
 */

/**
 * @typedef CouponAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef State
 * @property {boolean} [is_archived]
 * @property {boolean} [is_display]
 * @property {boolean} [is_public]
 */

/**
 * @typedef Rule
 * @property {number} [max]
 * @property {number} [min]
 * @property {number} [value]
 * @property {number} [key]
 * @property {number} [discount_qty]
 */

/**
 * @typedef DisplayMetaDict
 * @property {string} [title]
 * @property {string} [subtitle]
 */

/**
 * @typedef DisplayMeta
 * @property {string} [title]
 * @property {DisplayMetaDict} [apply]
 * @property {DisplayMetaDict} [remove]
 * @property {string} [subtitle]
 * @property {string} [description]
 * @property {DisplayMetaDict} [auto]
 */

/**
 * @typedef CouponAdd
 * @property {CouponDateMeta} [date_meta]
 * @property {string[]} [tags]
 * @property {RuleDefinition} rule_definition
 * @property {Validity} validity
 * @property {Validation} [validation]
 * @property {CouponAction} [action]
 * @property {string} code
 * @property {CouponSchedule} [_schedule]
 * @property {Restrictions} [restrictions]
 * @property {Identifier} identifiers
 * @property {string} type_slug
 * @property {Ownership} ownership
 * @property {CouponAuthor} [author]
 * @property {State} [state]
 * @property {Rule[]} rule
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
 * @property {CouponDateMeta} [date_meta]
 * @property {string[]} [tags]
 * @property {RuleDefinition} rule_definition
 * @property {Validity} validity
 * @property {Validation} [validation]
 * @property {CouponAction} [action]
 * @property {string} code
 * @property {CouponSchedule} [_schedule]
 * @property {Restrictions} [restrictions]
 * @property {Identifier} identifiers
 * @property {string} type_slug
 * @property {Ownership} ownership
 * @property {CouponAuthor} [author]
 * @property {State} [state]
 * @property {Rule[]} rule
 * @property {DisplayMeta} display_meta
 */

/**
 * @typedef CouponPartialUpdate
 * @property {CouponSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef CompareObject
 * @property {number} [greater_than_equals]
 * @property {number} [less_than_equals]
 * @property {number} [equals]
 * @property {number} [greater_than]
 * @property {number} [less_than]
 */

/**
 * @typedef ItemCriteria
 * @property {string[]} [item_size]
 * @property {string[]} [item_sku]
 * @property {CompareObject} [cart_quantity]
 * @property {number[]} [item_id]
 * @property {string[]} [buy_rules]
 * @property {number[]} [item_brand]
 * @property {number[]} [item_exclude_brand]
 * @property {number[]} [item_exclude_company]
 * @property {CompareObject} [cart_total]
 * @property {number[]} [item_exclude_store]
 * @property {CompareObject} [cart_unique_item_amount]
 * @property {number[]} [item_exclude_id]
 * @property {string[]} [available_zones]
 * @property {number[]} [item_company]
 * @property {number[]} [item_store]
 * @property {boolean} [all_items]
 * @property {string[]} [item_exclude_sku]
 * @property {number[]} [item_category]
 * @property {number[]} [item_exclude_category]
 * @property {CompareObject} [cart_unique_item_quantity]
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
 * @typedef PostOrder1
 * @property {boolean} [return_allowed]
 * @property {boolean} [cancellation_allowed]
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
 * @typedef UserRegistered
 * @property {string} [start]
 * @property {string} [end]
 */

/**
 * @typedef Restrictions1
 * @property {boolean} [anonymous_users]
 * @property {PromotionPaymentModes[]} [payments]
 * @property {PostOrder1} [post_order]
 * @property {UsesRestriction1} uses
 * @property {string[]} [platforms]
 * @property {number} [order_quantity]
 * @property {number[]} [user_groups]
 * @property {string[]} [user_id]
 * @property {UserRegistered} [user_registered]
 */

/**
 * @typedef DisplayMeta1
 * @property {string} [offer_text]
 * @property {string} [description]
 * @property {string} [name]
 */

/**
 * @typedef DiscountOffer
 * @property {number} [max_offer_quantity]
 * @property {string} [code]
 * @property {boolean} [partial_can_ret]
 * @property {boolean} [apportion_discount]
 * @property {number} [max_discount_amount]
 * @property {number} [discount_amount]
 * @property {number} [max_usage_per_transaction]
 * @property {number} [min_offer_quantity]
 * @property {number} [discount_percentage]
 * @property {number} [discount_price]
 */

/**
 * @typedef DiscountRule
 * @property {ItemCriteria} item_criteria
 * @property {string} discount_type
 * @property {DiscountOffer} offer
 * @property {string} buy_condition
 */

/**
 * @typedef PromotionDateMeta
 * @property {string} [created_on]
 * @property {string} [modified_on]
 */

/**
 * @typedef PromotionAction
 * @property {string} action_date
 * @property {string} action_type
 */

/**
 * @typedef PromotionSchedule
 * @property {string} start
 * @property {number} [duration]
 * @property {string} [cron]
 * @property {boolean} published
 * @property {string} [end]
 * @property {Object[]} [next_schedule]
 */

/**
 * @typedef Ownership1
 * @property {string} payable_category
 * @property {string} payable_by
 */

/**
 * @typedef PromotionAuthor
 * @property {string} [created_by]
 * @property {string} [modified_by]
 */

/**
 * @typedef Visibility
 * @property {boolean} pdp
 * @property {boolean} coupon_list
 */

/**
 * @typedef PromotionListItem
 * @property {string} [code]
 * @property {Object} buy_rules
 * @property {Restrictions1} [restrictions]
 * @property {string} mode
 * @property {DisplayMeta1} display_meta
 * @property {boolean} [stackable]
 * @property {DiscountRule[]} discount_rules
 * @property {string} promo_group
 * @property {boolean} [apply_all_discount]
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAction} [post_order_action]
 * @property {string} [calculate_on]
 * @property {PromotionSchedule} [_schedule]
 * @property {Ownership1} ownership
 * @property {string} [apply_exclusive]
 * @property {PromotionAuthor} [author]
 * @property {Object} [_custom_json]
 * @property {number} [apply_priority]
 * @property {string} application_id
 * @property {string} promotion_type
 * @property {Visibility} [visiblility]
 * @property {string} [currency]
 */

/**
 * @typedef PromotionsResponse
 * @property {Page} [page]
 * @property {PromotionListItem} [items]
 */

/**
 * @typedef PromotionAdd
 * @property {string} [code]
 * @property {Object} buy_rules
 * @property {Restrictions1} [restrictions]
 * @property {string} mode
 * @property {DisplayMeta1} display_meta
 * @property {boolean} [stackable]
 * @property {DiscountRule[]} discount_rules
 * @property {string} promo_group
 * @property {boolean} [apply_all_discount]
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAction} [post_order_action]
 * @property {string} [calculate_on]
 * @property {PromotionSchedule} [_schedule]
 * @property {Ownership1} ownership
 * @property {string} [apply_exclusive]
 * @property {PromotionAuthor} [author]
 * @property {Object} [_custom_json]
 * @property {number} [apply_priority]
 * @property {string} application_id
 * @property {string} promotion_type
 * @property {Visibility} [visiblility]
 * @property {string} [currency]
 */

/**
 * @typedef PromotionUpdate
 * @property {string} [code]
 * @property {Object} buy_rules
 * @property {Restrictions1} [restrictions]
 * @property {string} mode
 * @property {DisplayMeta1} display_meta
 * @property {boolean} [stackable]
 * @property {DiscountRule[]} discount_rules
 * @property {string} promo_group
 * @property {boolean} [apply_all_discount]
 * @property {PromotionDateMeta} [date_meta]
 * @property {PromotionAction} [post_order_action]
 * @property {string} [calculate_on]
 * @property {PromotionSchedule} [_schedule]
 * @property {Ownership1} ownership
 * @property {string} [apply_exclusive]
 * @property {PromotionAuthor} [author]
 * @property {Object} [_custom_json]
 * @property {number} [apply_priority]
 * @property {string} application_id
 * @property {string} promotion_type
 * @property {Visibility} [visiblility]
 * @property {string} [currency]
 */

/**
 * @typedef PromotionPartialUpdate
 * @property {PromotionSchedule} [schedule]
 * @property {boolean} [archive]
 */

/**
 * @typedef ActivePromosResponse
 * @property {string} [title]
 * @property {string} [entity_type]
 * @property {string} [entity_slug]
 * @property {string} [subtitle]
 * @property {string} [description]
 * @property {string} [type]
 * @property {boolean} [is_hidden]
 * @property {string} [example]
 * @property {string} [created_on]
 * @property {string} [modified_on]
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
 * @typedef CouponDetails
 * @property {number} [discount_total_quantity]
 * @property {string} [code]
 * @property {number} [discount_single_quantity]
 */

/**
 * @typedef BaseInfo
 * @property {string} [name]
 * @property {number} [uid]
 */

/**
 * @typedef BasePrice
 * @property {number} [marked]
 * @property {string} [currency_code]
 * @property {number} [effective]
 * @property {string} [currency_symbol]
 */

/**
 * @typedef ArticlePriceInfo
 * @property {BasePrice} [base]
 * @property {BasePrice} [converted]
 */

/**
 * @typedef ProductArticle
 * @property {boolean} [is_gift_visible]
 * @property {string[]} [product_group_tags]
 * @property {number} [quantity]
 * @property {Object} [gift_card]
 * @property {BaseInfo} [store]
 * @property {string} [uid]
 * @property {Object} [parent_item_identifiers]
 * @property {BaseInfo} [seller]
 * @property {ArticlePriceInfo} [price]
 * @property {string} [type]
 * @property {boolean} [is_gift]
 * @property {string} [size]
 * @property {Object} [identifier]
 * @property {string} [seller_identifier]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef DiscountRulesApp
 * @property {Object} [offer]
 * @property {string[]} [matched_buy_rules]
 * @property {Object} [item_criteria]
 * @property {Object} [raw_offer]
 */

/**
 * @typedef FreeGiftItem
 * @property {string[]} [item_images_url]
 * @property {string} [item_brand_name]
 * @property {string} [item_slug]
 * @property {string} [item_name]
 * @property {Object} [item_price_details]
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
 * @property {boolean} [mrp_promotion]
 * @property {string} [offer_text]
 * @property {string} [promotion_group]
 * @property {BuyRules[]} [buy_rules]
 * @property {DiscountRulesApp[]} [discount_rules]
 * @property {string} [promotion_type]
 * @property {number} [article_quantity]
 * @property {AppliedFreeArticles[]} [applied_free_articles]
 * @property {string} [promotion_name]
 * @property {number} [amount]
 */

/**
 * @typedef ProductAvailability
 * @property {boolean} [deliverable]
 * @property {boolean} [is_valid]
 * @property {boolean} [out_of_stock]
 * @property {number} [other_store_quantity]
 * @property {string[]} [sizes]
 */

/**
 * @typedef PromoMeta
 * @property {string} [message]
 */

/**
 * @typedef ProductPrice
 * @property {string} [currency_symbol]
 * @property {number} [marked]
 * @property {number} [selling]
 * @property {string} [currency_code]
 * @property {number} [effective]
 * @property {number} [add_on]
 */

/**
 * @typedef ProductPriceInfo
 * @property {ProductPrice} [base]
 * @property {ProductPrice} [converted]
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
 * @typedef ProductImage
 * @property {string} [url]
 * @property {string} [secure_url]
 * @property {string} [aspect_ratio]
 */

/**
 * @typedef Tags
 * @property {Object} [tags]
 */

/**
 * @typedef CartProduct
 * @property {string} [slug]
 * @property {string[]} [tags]
 * @property {ProductAction} [action]
 * @property {number} [uid]
 * @property {CategoryInfo[]} [categories]
 * @property {string} [type]
 * @property {string} [name]
 * @property {ProductImage[]} [images]
 * @property {Tags} [teaser_tag]
 * @property {BaseInfo} [brand]
 * @property {Object} [_custom_json]
 */

/**
 * @typedef CartProductInfo
 * @property {CouponDetails} [coupon]
 * @property {boolean} [is_set]
 * @property {ProductArticle} [article]
 * @property {AppliedPromotion[]} [promotions_applied]
 * @property {ProductAvailability} [availability]
 * @property {PromoMeta} [promo_meta]
 * @property {number} [quantity]
 * @property {string} [discount]
 * @property {Object} [parent_item_identifiers]
 * @property {string} [key]
 * @property {ProductPriceInfo} [price]
 * @property {ProductPriceInfo} [price_per_unit]
 * @property {CartProductIdentifer} identifiers
 * @property {CartProduct} [product]
 * @property {string} [coupon_message]
 * @property {Object} [bulk_offer]
 * @property {string} [message]
 */

/**
 * @typedef RawBreakup
 * @property {number} [fynd_cash]
 * @property {number} [coupon]
 * @property {number} [gst_charges]
 * @property {number} [total]
 * @property {number} [discount]
 * @property {number} [vog]
 * @property {number} [convenience_fee]
 * @property {number} [subtotal]
 * @property {number} [you_saved]
 * @property {number} [mrp_total]
 * @property {number} [cod_charge]
 * @property {number} [delivery_charge]
 */

/**
 * @typedef CouponBreakup
 * @property {string} [title]
 * @property {number} [max_discount_value]
 * @property {string} [sub_title]
 * @property {string} [code]
 * @property {number} [value]
 * @property {string} [uid]
 * @property {boolean} [is_applied]
 * @property {string} [description]
 * @property {string} [type]
 * @property {number} [coupon_value]
 * @property {string} [coupon_type]
 * @property {number} [minimum_cart_value]
 * @property {string} [message]
 */

/**
 * @typedef DisplayBreakup
 * @property {string} [display]
 * @property {string} [currency_symbol]
 * @property {number} [value]
 * @property {string} [key]
 * @property {string} [currency_code]
 * @property {string[]} [message]
 */

/**
 * @typedef LoyaltyPoints
 * @property {number} [total]
 * @property {boolean} [is_applied]
 * @property {string} [description]
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
 * @property {CartProductInfo[]} [items]
 * @property {CartBreakup} [breakup_values]
 * @property {boolean} [is_valid]
 * @property {string} [message]
 */

/**
 * @typedef OpenApiErrorResponse
 * @property {boolean} [success]
 * @property {Object} [errors]
 * @property {string} [message]
 */

/**
 * @typedef ShippingAddress
 * @property {number} [pincode]
 * @property {string} [country]
 * @property {string} area_code
 * @property {string} [country_code]
 * @property {string} [address]
 * @property {string} [email]
 * @property {number} [phone]
 * @property {string} [address_type]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {string} [area]
 * @property {string} [state]
 * @property {string} [landmark]
 * @property {string} [area_code_slug]
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
 * @property {boolean} [is_valid]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {CartProductInfo[]} [items]
 * @property {string} [message]
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
 * @property {number} price_marked
 * @property {number} [employee_discount]
 * @property {number} amount_paid
 * @property {string} size
 * @property {OpenApiFiles[]} [files]
 * @property {number} [quantity]
 * @property {number} delivery_charges
 * @property {number} discount
 * @property {number} product_id
 * @property {number} price_effective
 * @property {number} cod_charges
 * @property {number} coupon_effective_discount
 * @property {CartItemMeta} [meta]
 * @property {number} [loyalty_discount]
 * @property {number} cashback_applied
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {Object} [extra_meta]
 */

/**
 * @typedef OpenApiPlatformCheckoutReq
 * @property {Object} [employee_discount]
 * @property {string} [payment_mode]
 * @property {string} [gstin]
 * @property {ShippingAddress} [shipping_address]
 * @property {number} [loyalty_discount]
 * @property {number} cashback_applied
 * @property {ShippingAddress} billing_address
 * @property {MultiTenderPaymentMethod[]} payment_methods
 * @property {OpenApiOrderItem[]} cart_items
 * @property {string} [coupon]
 * @property {OpenApiFiles[]} [files]
 * @property {number} delivery_charges
 * @property {string} coupon_code
 * @property {number} cod_charges
 * @property {number} cart_value
 * @property {string} [currency_code]
 * @property {string} [order_id]
 * @property {string} [affiliate_order_id]
 * @property {number} coupon_value
 * @property {string} [comment]
 */

/**
 * @typedef OpenApiCheckoutResponse
 * @property {boolean} [success]
 * @property {string} [order_ref_id]
 * @property {string} order_id
 * @property {string} [message]
 */

/**
 * @typedef AbandonedCart
 * @property {number[]} [fc_index_map]
 * @property {Object[]} [shipments]
 * @property {string} [gstin]
 * @property {Object} cashback
 * @property {string} created_on
 * @property {string} last_modified
 * @property {Object[]} articles
 * @property {number} [bulk_coupon_discount]
 * @property {string} [app_id]
 * @property {Object} [cod_charges]
 * @property {Object} [meta]
 * @property {number} [cart_value]
 * @property {string} [order_id]
 * @property {boolean} [buy_now]
 * @property {string} user_id
 * @property {string} [checkout_mode]
 * @property {number} [discount]
 * @property {Object} [fynd_credits]
 * @property {number} uid
 * @property {boolean} [is_active]
 * @property {Object[]} [payment_methods]
 * @property {Object} [coupon]
 * @property {Object} [promotion]
 * @property {Object} [payments]
 * @property {string} _id
 * @property {Object} [delivery_charges]
 * @property {boolean} [is_archive]
 * @property {Object} [pick_up_customer_details]
 * @property {boolean} is_default
 * @property {string} [payment_mode]
 * @property {string} [comment]
 * @property {string} expire_at
 * @property {boolean} [merge_qty]
 */

/**
 * @typedef AbandonedCartResponse
 * @property {Page} [page]
 * @property {Object} [result]
 * @property {boolean} [success]
 * @property {AbandonedCart[]} [items]
 * @property {string} [message]
 */

/**
 * @typedef AddProductCart
 * @property {string} [item_size]
 * @property {string} [display]
 * @property {string[]} [product_group_tags]
 * @property {number} [quantity]
 * @property {number} [item_id]
 * @property {boolean} [pos]
 * @property {string} [article_id]
 * @property {Object} [parent_item_identifiers]
 * @property {number} [seller_id]
 * @property {Object} [article_assignment]
 * @property {number} [store_id]
 * @property {Object} [extra_meta]
 */

/**
 * @typedef AddCartRequest
 * @property {AddProductCart[]} [items]
 */

/**
 * @typedef CartCurrency
 * @property {string} [symbol]
 * @property {string} [code]
 */

/**
 * @typedef CartDetailResponse
 * @property {string} [last_modified]
 * @property {CartBreakup} [breakup_values]
 * @property {string} [checkout_mode]
 * @property {boolean} [is_valid]
 * @property {PaymentSelectionLock} [payment_selection_lock]
 * @property {CartCurrency} [currency]
 * @property {string} [gstin]
 * @property {string} [id]
 * @property {string} [coupon_text]
 * @property {boolean} [buy_now]
 * @property {CartProductInfo[]} [items]
 * @property {string} [delivery_charge_info]
 * @property {ShipmentPromise} [delivery_promise]
 * @property {string} [comment]
 * @property {boolean} [restrict_checkout]
 * @property {string} [message]
 */

/**
 * @typedef AddCartDetailResponse
 * @property {CartDetailResponse} [cart]
 * @property {boolean} [success]
 * @property {boolean} [partial]
 * @property {string} [message]
 */

/**
 * @typedef UpdateProductCart
 * @property {string} [item_size]
 * @property {number} [quantity]
 * @property {string} [article_id]
 * @property {number} [item_id]
 * @property {number} [item_index]
 * @property {Object} [parent_item_identifiers]
 * @property {CartProductIdentifer} identifiers
 * @property {Object} [extra_meta]
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
 * @typedef E
 * @property {Object} [code]
 * @property {string} [exception]
 * @property {string} [info]
 * @property {string} [message]
 * @property {string} [request_id]
 * @property {string} [stack_trace]
 * @property {number} [status]
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
 * @typedef GiveawayResponse
 * @property {Giveaway[]} [items]
 * @property {Page} [page]
 */

/**
 * @typedef HistoryPretty
 * @property {string} [_id]
 * @property {string} [application_id]
 * @property {boolean} [claimed]
 * @property {string} [created_at]
 * @property {string} [expires_on]
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
 * @typedef HistoryRes
 * @property {HistoryPretty[]} [items]
 * @property {Page} [page]
 * @property {number} [points]
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
 * @typedef Points
 * @property {number} [available]
 */

/**
 * @typedef Referral
 * @property {string} [code]
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
 * @typedef RewardsAudience
 * @property {string} [header_user_id]
 * @property {string} [id]
 */

/**
 * @typedef RewardsRule
 * @property {number} [amount]
 */

/**
 * @typedef Schedule
 * @property {string} [cron]
 * @property {number} [duration]
 * @property {string} [end]
 * @property {string} [start]
 */

/**
 * @typedef ShareMessages
 * @property {string} [email]
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

/**
 * @typedef ApplicationServiceabilityConfig
 * @property {string} serviceability_type
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ServiceabilityrErrorResponse
 * @property {string} type
 * @property {string} message
 * @property {string} value
 */

/**
 * @typedef ApplicationServiceabilityConfigResponse
 * @property {ApplicationServiceabilityConfig} [data]
 * @property {ServiceabilityrErrorResponse} [error]
 * @property {boolean} success
 */

/**
 * @typedef EntityRegionView_Request
 * @property {string[]} [parent_id]
 * @property {string[]} sub_type
 */

/**
 * @typedef EntityRegionView_page
 * @property {string} type
 * @property {number} item_total
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} size
 */

/**
 * @typedef EntityRegionView_Error
 * @property {string} [type]
 * @property {string} [message]
 * @property {string} [value]
 */

/**
 * @typedef EntityRegionView_Items
 * @property {string} name
 * @property {string} uid
 * @property {string} sub_type
 */

/**
 * @typedef EntityRegionView_Response
 * @property {EntityRegionView_page} page
 * @property {EntityRegionView_Error} error
 * @property {EntityRegionView_Items[]} data
 * @property {boolean} success
 */

/**
 * @typedef ListViewProduct
 * @property {string} type
 * @property {number} count
 */

/**
 * @typedef ListViewChannels
 * @property {string} channel_id
 * @property {string} channel_type
 */

/**
 * @typedef ListViewItems
 * @property {number} stores_count
 * @property {boolean} is_active
 * @property {ListViewProduct} product
 * @property {ListViewChannels} channels
 * @property {string} zone_id
 * @property {number} company_id
 * @property {string} name
 * @property {string} slug
 * @property {number} pincodes_count
 */

/**
 * @typedef ListViewSummary
 * @property {number} total_active_zones
 * @property {number} total_pincodes_served
 * @property {number} total_zones
 */

/**
 * @typedef ZoneDataItem
 * @property {number} item_total
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} size
 * @property {string} type
 */

/**
 * @typedef ListViewResponse
 * @property {ListViewItems[]} items
 * @property {ListViewSummary[]} summary
 * @property {ZoneDataItem[]} page
 */

/**
 * @typedef CompanyStoreView_PageItems
 * @property {string} type
 * @property {number} item_total
 * @property {number} current
 * @property {boolean} has_next
 * @property {number} size
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
 * @property {string} type
 * @property {string[]} tags
 */

/**
 * @typedef ZoneMappingType
 * @property {string[]} [state]
 * @property {string} country
 * @property {string[]} [pincode]
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
 * @property {string} identifier
 * @property {UpdateZoneData} data
 */

/**
 * @typedef ZoneSuccessResponse
 * @property {number} status_code
 * @property {boolean} success
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
 * @property {string} identifier
 * @property {CreateZoneData} data
 */

/**
 * @typedef ZoneResponse
 * @property {string} zone_id
 * @property {number} status_code
 * @property {boolean} success
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
 * @typedef ModifiedByResponse
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ContactNumberResponse
 * @property {number} [country_code]
 * @property {string} [number]
 */

/**
 * @typedef IntegrationTypeResponse
 * @property {string} [inventory]
 * @property {string} [order]
 */

/**
 * @typedef Dp
 * @property {number} [rvp_priority]
 * @property {string} [internal_account_id]
 * @property {string} [transport_mode]
 * @property {number} [area_code]
 * @property {string} [payment_mode]
 * @property {string} [external_account_id]
 * @property {number} [lm_priority]
 * @property {boolean} [assign_dp_from_sb]
 * @property {number} [fm_priority]
 * @property {string[]} [operations]
 */

/**
 * @typedef LogisticsResponse
 * @property {boolean} [override]
 * @property {Dp} [dp]
 */

/**
 * @typedef AddressResponse
 * @property {string} [landmark]
 * @property {string} [state]
 * @property {number} [latitude]
 * @property {string} [address2]
 * @property {string} [country]
 * @property {number} [pincode]
 * @property {string} [address1]
 * @property {number} [longitude]
 * @property {string} [city]
 */

/**
 * @typedef ProductReturnConfigResponse
 * @property {boolean} [on_same_store]
 */

/**
 * @typedef EinvoiceResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef EwayBillResponse
 * @property {boolean} [enabled]
 */

/**
 * @typedef GstCredentialsResponse
 * @property {EinvoiceResponse} [e_invoice]
 * @property {EwayBillResponse} [e_waybill]
 */

/**
 * @typedef OpeningClosing
 * @property {number} [hour]
 * @property {number} [minute]
 */

/**
 * @typedef TimmingResponse
 * @property {OpeningClosing} [opening]
 * @property {boolean} [open]
 * @property {OpeningClosing} [closing]
 * @property {string} [weekday]
 */

/**
 * @typedef MobileNo
 * @property {number} [country_code]
 * @property {string} [number]
 */

/**
 * @typedef ManagerResponse
 * @property {string} [name]
 * @property {string} [email]
 * @property {MobileNo} [mobile_no]
 */

/**
 * @typedef WarningsResponse
 * @property {string} [store_address]
 */

/**
 * @typedef DocumentsResponse
 * @property {string} [type]
 * @property {boolean} [verified]
 * @property {string} [legal_name]
 * @property {string} [value]
 */

/**
 * @typedef CreatedByResponse
 * @property {string} [user_id]
 * @property {string} [username]
 */

/**
 * @typedef ItemResponse
 * @property {string} [stage]
 * @property {ModifiedByResponse} [modified_by]
 * @property {ContactNumberResponse[]} [contact_numbers]
 * @property {string} [store_type]
 * @property {string} [display_name]
 * @property {IntegrationTypeResponse} [integration_type]
 * @property {LogisticsResponse} [logistics]
 * @property {number} [company]
 * @property {ModifiedByResponse} [verified_by]
 * @property {AddressResponse} [address]
 * @property {string} [code]
 * @property {number} [uid]
 * @property {string} [created_on]
 * @property {number} [company_id]
 * @property {string} [_cls]
 * @property {ProductReturnConfigResponse} [product_return_config]
 * @property {GstCredentialsResponse} [gst_credentials]
 * @property {TimmingResponse[]} [timing]
 * @property {Object} [_custom_json]
 * @property {ManagerResponse} [manager]
 * @property {string} [verified_on]
 * @property {string} [sub_type]
 * @property {WarningsResponse} [warnings]
 * @property {DocumentsResponse[]} [documents]
 * @property {CreatedByResponse} [created_by]
 * @property {string} [name]
 * @property {string[]} [notification_emails]
 * @property {string} [modified_on]
 */

/**
 * @typedef GetStoresViewResponse
 * @property {ItemResponse[]} [items]
 * @property {PageResponse} page
 */

/**
 * @typedef GenerateBulkInvoiceLabelShipment
 * @property {number} store_id
 * @property {string} from_date
 * @property {string} to_date
 * @property {string} document_type
 * @property {string[]} [shipment_ids]
 */

/**
 * @typedef GenerateBulkInvoiceOrLabelUrl
 * @property {string} uid
 * @property {string} document_type
 * @property {number} batch_id
 */

/**
 * @typedef DocumentType
 * @property {string} invoice
 * @property {string} label
 */

/**
 * @typedef BulkListBadRequestResponse
 * @property {boolean} [success]
 * @property {string} [error]
 */

/**
 * @typedef BulkListFailedResponse
 * @property {boolean} [success]
 * @property {string} [error]
 */

/**
 * @typedef SuccessResponseGenerateBulkShipment
 * @property {boolean} success
 * @property {number} job_id
 * @property {string} [trace_id]
 */

/**
 * @typedef SuccessResponseBulkStatus
 * @property {boolean} success
 * @property {string} status
 * @property {string} [trace_id]
 */

/**
 * @typedef GenerateBulkUrlSuccessResponse
 * @property {string} url
 * @property {string} uid
 * @property {number} expires_in
 * @property {string} presigned_type
 */

/**
 * @typedef InternalErrorResponseGenerateBulkShipment
 * @property {boolean} success
 * @property {string} error
 */

/**
 * @typedef BadRequestResponseGenerateBulkUrl
 * @property {boolean} success
 * @property {string} message
 * @property {string} [request_id]
 * @property {string} [exception]
 * @property {string} [stack_trace]
 * @property {Object} [meta]
 */

/**
 * @typedef InternalErrorResponseGenerateBulkUrl
 * @property {boolean} success
 * @property {string} message
 */

/**
 * @typedef GenerateBulkShipment
 * @property {string} uid
 * @property {string} store_code
 * @property {string} batch_id
 * @property {string} document_type
 */

/**
 * @typedef GenerateBulkUrl
 * @property {number} [expires_in]
 * @property {string} document_type
 * @property {string} batch_id
 */

/**
 * @typedef GetBulkStatusRequest
 * @property {string} batch_id
 */

/**
 * @typedef BadRequestResponseGenerateBulkItemParameters
 * @property {string} [missing_property]
 * @property {string} [type]
 */

/**
 * @typedef BadRequestResponseGenerateBulkItem
 * @property {string} [keyword]
 * @property {string} [data_path]
 * @property {string} [schema_path]
 * @property {BadRequestResponseGenerateBulkItemParameters} [parameters]
 * @property {string} [message]
 */

/**
 * @typedef SuccessResponseGenerateBulk
 * @property {boolean} success
 */

/**
 * @typedef BadRequestResponseGenerateBulk
 * @property {boolean} success
 * @property {BadRequestResponseGenerateBulkItem[]} error_message
 */

/**
 * @typedef InternalErrorResponseGenerateBulk
 * @property {boolean} success
 * @property {string} [error_message]
 */

/**
 * @typedef ShippingToAddress
 * @property {string} address
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} pincode
 */

/**
 * @typedef SellerAddress
 * @property {string} address
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} pincode
 */

/**
 * @typedef BoxDetails
 * @property {string} box_id
 * @property {string} total_quantity
 * @property {string} package_count
 * @property {string} dimension
 * @property {string} weight
 */

/**
 * @typedef GenerateBulkBoxLabel
 * @property {string} stock_transfer_id
 * @property {string} label_type
 * @property {string} uid
 * @property {string} seller_name
 * @property {number} template_id
 * @property {BoxDetails[]} box_details
 */

/**
 * @typedef GenerateBulkShipmentLabel
 * @property {string} label_type
 * @property {string} uid
 * @property {number} template_id
 * @property {ShipmentDetails[]} shipments
 */

/**
 * @typedef GenerateNoc
 * @property {string} uid
 * @property {string} seller_name
 * @property {string} seller_gstin
 * @property {string} fc_gstin
 * @property {number} template_id
 * @property {SellerAddress} fc_address
 * @property {SellerAddress} seller_address
 */

/**
 * @typedef PackageDetails
 * @property {string} package_id
 * @property {string} item_quantity
 * @property {string} package_type
 * @property {string} packaging_type
 * @property {string} dimension
 * @property {string} weight
 */

/**
 * @typedef PackageItemDetails
 * @property {string} jio_code
 * @property {string} item_name
 * @property {string} mrp
 * @property {string} country_of_origin
 * @property {string} best_before_date
 * @property {string} ean
 * @property {PackageDetails[]} package_details
 */

/**
 * @typedef GenerateBulkPackageLabel
 * @property {string} stock_transfer_id
 * @property {string} label_type
 * @property {string} uid
 * @property {string} seller_name
 * @property {number} template_id
 * @property {PackageItemDetails[]} item_details
 */

/**
 * @typedef SignedSuccessResponse
 * @property {string} [uid]
 * @property {string} [url]
 * @property {number} [expires_in]
 */

/**
 * @typedef BulkPresignedSuccessResponse
 * @property {string} success
 * @property {string} [batch_id]
 * @property {string} [presigned_type]
 * @property {string} presigned_url
 * @property {number} [expires_in]
 */

/**
 * @typedef SignedBadRequestResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */

/**
 * @typedef SignedFailedResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */

/**
 * @typedef StatusSuccessResponse
 * @property {boolean} [success]
 * @property {string} [status]
 */

/**
 * @typedef StatusBadRequestResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */

/**
 * @typedef StatusFailedResponse
 * @property {boolean} [success]
 * @property {string} [error_message]
 */

/**
 * @typedef GenerateManifest
 * @property {number} store_id
 * @property {string} from_date
 * @property {string} to_date
 * @property {string[]} [shipment_ids]
 */

/**
 * @typedef GeneratePresignedManifestUrl
 * @property {string} manifest_id
 * @property {string} uid
 */

/**
 * @typedef ManifestLink
 * @property {string} name
 * @property {string} manifest_id
 */

/**
 * @typedef GenerateManifestUrlSuccessResponse
 * @property {string} url
 * @property {string} uid
 * @property {string} manifest_id
 * @property {number} expires_in
 * @property {string} presigned_type
 */

/**
 * @typedef ManifestListFailedResponse
 * @property {boolean} [success]
 * @property {string} [error]
 */

/**
 * @typedef InvoiceLabelPresignedRequestBody
 * @property {string} document_type
 * @property {string} entity_id
 * @property {number} [expires_in]
 */

class Lead {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.items] - Decides that the reponse will contain the
   *   list of tickets
   * @param {boolean} [arg.filters] - Decides that the reponse will contain
   *   the ticket filters
   * @param {string} [arg.q] - Search through ticket titles and description
   * @param {string} [arg.status] - Filter tickets on status
   * @param {PriorityEnum} [arg.priority] - Filter tickets on priority
   * @param {string} [arg.category] - Filter tickets on category
   * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
   * @description: Gets the list of Application level Tickets and/or ticket filters
   */
  getTickets({ items, filters, q, status, priority, category } = {}) {
    const { error } = LeadValidator.getTickets().validate(
      {
        items,
        filters,
        q,
        status,
        priority,
        category,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["items"] = items;
    query_params["filters"] = filters;
    query_params["q"] = q;
    query_params["status"] = status;
    query_params["priority"] = priority;
    query_params["category"] = category;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Tiket ID of the ticket to be fetched
   * @summary: Retreives ticket details of a application level ticket
   * @description: Retreives ticket details of a application level ticket with ticket ID
   */
  getTicket({ id } = {}) {
    const { error } = LeadValidator.getTicket().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Ticket ID of ticket to be edited
   * @param {EditTicketPayload} arg.body
   * @summary: Edits ticket details of a application level ticket
   * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
   */
  editTicket({ id, body } = {}) {
    const { error } = LeadValidator.editTicket().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Ticket ID for which history is created
   * @param {TicketHistoryPayload} arg.body
   * @summary: Create history for specific application level ticket
   * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   */
  createHistory({ id, body } = {}) {
    const { error } = LeadValidator.createHistory().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${id}/history`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Ticket ID for which history is to be fetched
   * @summary: Gets history list for specific application level ticket
   * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   */
  getTicketHistory({ id } = {}) {
    const { error } = LeadValidator.getTicketHistory().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${id}/history`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @summary: Get specific custom form using it's slug
   * @description: Get specific custom form using it's slug, this is used to view the form.
   */
  getCustomForm({ slug } = {}) {
    const { error } = LeadValidator.getCustomForm().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form/${slug}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @param {EditCustomFormPayload} arg.body
   * @summary: Edit the given custom form
   * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
   */
  editCustomForm({ slug, body } = {}) {
    const { error } = LeadValidator.editCustomForm().validate(
      {
        slug,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form/${slug}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get list of custom form
   * @description: Get list of custom form for given application
   */
  getCustomForms({} = {}) {
    const { error } = LeadValidator.getCustomForms().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateCustomFormPayload} arg.body
   * @summary: Creates a new custom form
   * @description: Creates a new custom form for given application
   */
  createCustomForm({ body } = {}) {
    const { error } = LeadValidator.createCustomForm().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uniqueName - Unique name of video room
   * @summary: Get Token to join a specific Video Room using it's unqiue name
   * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
   */
  getTokenForVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getTokenForVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}/token`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uniqueName - Unique name of Video Room
   * @summary: Get participants of a specific Video Room using it's unique name
   * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
   */
  getVideoParticipants({ uniqueName } = {}) {
    const { error } = LeadValidator.getVideoParticipants().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}/participants`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateVideoRoomPayload} arg.body
   * @summary: Open a video room.
   * @description: Open a video room.
   */
  openVideoRoom({ body } = {}) {
    const { error } = LeadValidator.openVideoRoom().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.uniqueName - Unique name of Video Room
   * @summary: Close the video room and force all participants to leave.
   * @description: Close the video room and force all participants to leave.
   */
  closeVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.closeVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}`,
      query_params,
      undefined
    );
  }
}

class Theme {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme to be retrieved
   * @summary: Get all pages of a theme
   * @description: Use this API to retrieve all the available pages of a theme by its ID.
   */
  getAllPages({ themeId } = {}) {
    const { error } = ThemeValidator.getAllPages().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/page`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme
   * @param {AvailablePageSchema} arg.body
   * @summary: Create a page
   * @description: Use this API to create a page for a theme by its ID.
   */
  createPage({ themeId, body } = {}) {
    const { error } = ThemeValidator.createPage().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/page`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme to be retrieved
   * @param {AllAvailablePageSchema} arg.body
   * @summary: Update multiple pages of a theme
   * @description: Use this API to update multiple pages of a theme by its ID.
   */
  updateMultiplePages({ themeId, body } = {}) {
    const { error } = ThemeValidator.updateMultiplePages().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/page`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme to be retrieved
   * @param {string} arg.pageValue - Value of the page to be retrieved
   * @summary: Get page of a theme
   * @description: Use this API to retrieve a page of a theme.
   */
  getPage({ themeId, pageValue } = {}) {
    const { error } = ThemeValidator.getPage().validate(
      {
        themeId,
        pageValue,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/${pageValue}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme
   * @param {string} arg.pageValue - Value of the page to be updated
   * @param {AvailablePageSchema} arg.body
   * @summary: Updates a page
   * @description: Use this API to update a page for a theme by its ID.
   */
  updatePage({ themeId, pageValue, body } = {}) {
    const { error } = ThemeValidator.updatePage().validate(
      {
        themeId,
        pageValue,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/${pageValue}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID of the theme
   * @param {string} arg.pageValue - Value of the page to be updated
   * @summary: Deletes a page
   * @description: Use this API to delete a page for a theme by its ID and page_value.
   */
  deletePage({ themeId, pageValue } = {}) {
    const { error } = ThemeValidator.deletePage().validate(
      {
        themeId,
        pageValue,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/${pageValue}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @summary: Get a list of themes from the theme library
   * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to fetch a list of themes from the library along with their configuration details.
   */
  getThemeLibrary({ pageSize, pageNo } = {}) {
    const { error } = ThemeValidator.getThemeLibrary().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/library`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddThemeRequestSchema} arg.body
   * @summary: Add a theme to the theme library
   * @description: Theme library is a personalized collection of themes that are chosen and added from the available themes. Use this API to choose a theme and add it to the theme library.
   */
  addToThemeLibrary({ body } = {}) {
    const { error } = ThemeValidator.addToThemeLibrary().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/library`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddThemeRequestSchema} arg.body
   * @summary: Apply a theme
   * @description: Use this API to apply a theme to the website.
   */
  applyTheme({ body } = {}) {
    const { error } = ThemeValidator.applyTheme().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/apply`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - Theme ID
   * @summary: Checks if theme is upgradable
   * @description: There's always a possibility that new features get added to a theme. Use this API to check if the applied theme has an upgrade available.
   */
  isUpgradable({ themeId } = {}) {
    const { error } = ThemeValidator.isUpgradable().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgradable`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Upgrade a theme
   * @description: Use this API to upgrade the current theme to its latest version.
   */
  upgradeTheme({ themeId } = {}) {
    const { error } = ThemeValidator.upgradeTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgrade`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @summary: Get all public themes
   * @description: Use this API to get a list of free themes that you can apply to your website.
   */
  getPublicThemes({ pageSize, pageNo } = {}) {
    const { error } = ThemeValidator.getPublicThemes().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/list/public`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ThemesSchema} arg.body
   * @summary: Create a new theme
   * @description: Themes improve the look and appearance of a website. Use this API to create a theme.
   */
  createTheme({ body } = {}) {
    const { error } = ThemeValidator.createTheme().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get the applied theme
   * @description: Use this API to retrieve the theme that is currently applied to the website along with its details.
   */
  getAppliedTheme({} = {}) {
    const { error } = ThemeValidator.getAppliedTheme().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get all the supported fonts in a theme
   * @description: Font is a collection of characters with a similar design. Use this API to retrieve a list of website fonts.
   */
  getFonts({} = {}) {
    const { error } = ThemeValidator.getFonts().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/fonts`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Gets theme by id
   * @description: Use this API to retrieve the details of a specific theme by using its ID.
   */
  getThemeById({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeById().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @param {ThemesSchema} arg.body
   * @summary: Update a theme
   * @description: Use this API to edit an existing theme. You can customize the website font, sections, images, styles, and many more.
   */
  updateTheme({ themeId, body } = {}) {
    const { error } = ThemeValidator.updateTheme().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Delete a theme
   * @description: Use this API to delete a theme from the theme library.
   */
  deleteTheme({ themeId } = {}) {
    const { error } = ThemeValidator.deleteTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Get a theme preview
   * @description: A theme can be previewed before applying it. Use this API to retrieve the theme preview by using its ID.
   */
  getThemeForPreview({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeForPreview().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/preview`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Publish a theme
   * @description: Use this API to publish a theme that is either newly created or edited.
   */
  publishTheme({ themeId } = {}) {
    const { error } = ThemeValidator.publishTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/publish`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Unpublish a theme
   * @description: Use this API to remove an existing theme from the list of available themes.
   */
  unpublishTheme({ themeId } = {}) {
    const { error } = ThemeValidator.unpublishTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/unpublish`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Archive a theme
   * @description: Use this API to store an existing theme but not delete it so that it can be used in future if required.
   */
  archiveTheme({ themeId } = {}) {
    const { error } = ThemeValidator.archiveTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/archive`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Unarchive a theme
   * @description: Use this API to restore an archived theme and bring it back for editing or publishing.
   */
  unarchiveTheme({ themeId } = {}) {
    const { error } = ThemeValidator.unarchiveTheme().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/unarchive`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.themeId - ID allotted to the theme.
   * @summary: Fetch last modified timestamp
   * @description: Use this API to fetch Last-Modified timestamp in header metadata.
   */
  getThemeLastModified({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeLastModified().validate(
      {
        themeId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "head",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/polling`,
      query_params,
      undefined
    );
  }
}

class User {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {Object} [arg.q] - The search query. Mobile number or email ID of
   *   a customer.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @summary: Get a list of customers
   * @description: Use this API to retrieve a list of customers who have registered in the application.
   */
  getCustomers({ q, pageSize, pageNo } = {}) {
    const { error } = UserValidator.getCustomers().validate(
      {
        q,
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/list`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - The search query. Mobile number or email ID of
   *   a customer.
   * @summary: Search an existing user.
   * @description: Use this API to retrieve an existing user from a list.
   */
  searchUsers({ q } = {}) {
    const { error } = UserValidator.searchUsers().validate(
      {
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/search`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateUserRequestSchema} arg.body
   * @summary: Create user
   * @description: Create user
   */
  createUser({ body } = {}) {
    const { error } = UserValidator.createUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {BlockUserRequestSchema} arg.body
   * @summary: Block/Unblock user
   * @description: Block/Unblock user
   */
  blockOrUnblockUsers({ body } = {}) {
    const { error } = UserValidator.blockOrUnblockUsers().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/activation`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ArchiveUserRequestSchema} arg.body
   * @summary: archive user
   * @description: archive user
   */
  archiveUser({ body } = {}) {
    const { error } = UserValidator.archiveUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/archive`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UnDeleteUserRequestSchema} arg.body
   * @summary: undelete user who deleted from application and have not elapsed the platform configured delete days
   * @description: undelete user who deleted from application and have not elapsed the platform configured delete days
   */
  unDeleteUser({ body } = {}) {
    const { error } = UserValidator.unDeleteUser().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/undelete`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.userId - User ID
   * @param {UpdateUserRequestSchema} arg.body
   * @summary: Update user
   * @description: Update user
   */
  updateUser({ userId, body } = {}) {
    const { error } = UserValidator.updateUser().validate(
      {
        userId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/${userId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateUserSessionRequestSchema} arg.body
   * @summary: Create user session
   * @description: Create user session
   */
  createUserSession({ body } = {}) {
    const { error } = UserValidator.createUserSession().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/session`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID of a customer.
   * @summary: Get a list of all session for a user
   * @description: Use this API to retrieve a list of session of customers who have registered in the application.
   */
  getActiveSessions({ id } = {}) {
    const { error } = UserValidator.getActiveSessions().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["id"] = id;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/sesions`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID of a customer.
   * @summary: Delete a list of all session for a user
   * @description: Use this API to Delete a list of session of customers who have registered in the application.
   */
  deleteActiveSessions({ id } = {}) {
    const { error } = UserValidator.deleteActiveSessions().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["id"] = id;

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/sesions`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get platform configurations
   * @description: Use this API to get all the platform configurations such as mobile image, desktop image, social logins, and all other text.
   */
  getPlatformConfig({} = {}) {
    const { error } = UserValidator.getPlatformConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PlatformSchema} arg.body
   * @summary: Update platform configurations
   * @description: Use this API to edit the existing platform configurations such as mobile image, desktop image, social logins, and all other text.
   */
  updatePlatformConfig({ body } = {}) {
    const { error } = UserValidator.updatePlatformConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
      query_params,
      body
    );
  }
}

class Content {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @summary: Get a list of announcements
   * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
   */
  getAnnouncementsList({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getAnnouncementsList().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @summary: Get a list of announcements
   * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to retrieve a list of announcements.
   */
  getAnnouncementsListPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAnnouncementsList({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AdminAnnouncementSchema} arg.body
   * @summary: Create an announcement
   * @description: Announcements are useful to highlight a message or information on top of a webpage. Use this API to create an announcement.
   */
  createAnnouncement({ body } = {}) {
    const { error } = ContentValidator.createAnnouncement().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.announcementId - ID allotted to the announcement.
   * @summary: Get announcement by ID
   * @description: Use this API to retrieve an announcement and its details such as the target platform and pages on which it's applicable
   */
  getAnnouncementById({ announcementId } = {}) {
    const { error } = ContentValidator.getAnnouncementById().validate(
      {
        announcementId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.announcementId - ID allotted to the announcement.
   * @param {AdminAnnouncementSchema} arg.body
   * @summary: Update an announcement
   * @description: Use this API to edit an existing announcement and its details such as the target platform and pages on which it's applicable
   */
  updateAnnouncement({ announcementId, body } = {}) {
    const { error } = ContentValidator.updateAnnouncement().validate(
      {
        announcementId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.announcementId - ID allotted to the announcement.
   * @param {ScheduleSchema} arg.body
   * @summary: Update the schedule and the publish status of an announcement
   * @description: Use this API to edit the duration, i.e. start date-time and end date-time of an announcement. Moreover, you can enable/disable an announcement using this API.
   */
  updateAnnouncementSchedule({ announcementId, body } = {}) {
    const { error } = ContentValidator.updateAnnouncementSchedule().validate(
      {
        announcementId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.announcementId - ID allotted to the announcement.
   * @summary: Delete announcement by id
   * @description: Use this API to delete an existing announcement.
   */
  deleteAnnouncement({ announcementId } = {}) {
    const { error } = ContentValidator.deleteAnnouncement().validate(
      {
        announcementId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {BlogRequest} arg.body
   * @summary: Create a blog
   * @description: Use this API to create a blog.
   */
  createBlog({ body } = {}) {
    const { error } = ContentValidator.createBlog().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @summary: Get blogs
   * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
   */
  getBlogs({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getBlogs().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @summary: Get blogs
   * @description: Use this API to get a list of blogs along with their details, such as the title, reading time, publish status, feature image, tags, author, etc.
   */
  getBlogsPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getBlogs({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the blog.
   * @param {BlogRequest} arg.body
   * @summary: Update a blog
   * @description: Use this API to update the details of an existing blog which includes title, feature image, content, SEO details, expiry, etc.
   */
  updateBlog({ id, body } = {}) {
    const { error } = ContentValidator.updateBlog().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the blog.
   * @summary: Delete blogs
   * @description: Use this API to delete a blog.
   */
  deleteBlog({ id } = {}) {
    const { error } = ContentValidator.deleteBlog().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a blog page. You can get slug value of a blog from `getBlogs` API.
   * @summary: Get components of a blog
   * @description: Use this API to retrieve the components of a blog, such as title, slug, feature image, content, schedule, publish status, author, etc.
   */
  getComponentById({ slug } = {}) {
    const { error } = ContentValidator.getComponentById().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${slug}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DataLoaderSchema} arg.body
   * @summary: Adds a data loader
   * @description: Use this API to add data loader. This includes the data loader name, operationId, service name and its type (url/function) with corresponding value.
   */
  addDataLoader({ body } = {}) {
    const { error } = ContentValidator.addDataLoader().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get all the data loaders in an application
   * @description: Use this to get all data loaders of an application
   */
  getDataLoaders({} = {}) {
    const { error } = ContentValidator.getDataLoaders().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.dataLoaderId - ID allotted to the data loader.
   * @summary: Delete data loader in application
   * @description: Use this API to delete data loader.
   */
  deleteDataLoader({ dataLoaderId } = {}) {
    const { error } = ContentValidator.deleteDataLoader().validate(
      {
        dataLoaderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/${dataLoaderId}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.dataLoaderId - ID allotted to the data loader.
   * @param {DataLoaderSchema} arg.body
   * @summary: Edit a data loader by id
   * @description: Use this API to edit the details of an existing data loader by its ID.
   */
  editDataLoader({ dataLoaderId, body } = {}) {
    const { error } = ContentValidator.editDataLoader().validate(
      {
        dataLoaderId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/${dataLoaderId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.dataLoaderId - ID allotted to the data loader.
   * @summary: Select a data loader by id
   * @description: Use this API to select a data loader to be used in applications.
   */
  selectDataLoader({ dataLoaderId } = {}) {
    const { error } = ContentValidator.selectDataLoader().validate(
      {
        dataLoaderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/${dataLoaderId}/select`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.service - Name of service.
   * @param {string} arg.operationId - Name of operation id of the service.
   * @summary: Reset a data loader by serive name and operation Id
   * @description: Use this API to reselect a data loader.
   */
  resetDataLoader({ service, operationId } = {}) {
    const { error } = ContentValidator.resetDataLoader().validate(
      {
        service,
        operationId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/data-loader/${service}/${operationId}/reset`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get a list of FAQ categories
   * @description: FAQs can be divided into categories. Use this API to get a list of FAQ categories.
   */
  getFaqCategories({} = {}) {
    const { error } = ContentValidator.getFaqCategories().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/categories`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
   *   category. Slug is a short, human-readable, URL-friendly identifier of
   *   an object. You can get slug value of an FAQ category from
   *   `getFaqCategories` API.
   * @summary: Get an FAQ category by slug or id
   * @description: FAQs can be divided into categories. Use this API to get an FAQ categories using its slug or ID.
   */
  getFaqCategoryBySlugOrId({ idOrSlug } = {}) {
    const { error } = ContentValidator.getFaqCategoryBySlugOrId().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${idOrSlug}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateFaqCategoryRequestSchema} arg.body
   * @summary: Create an FAQ category
   * @description: FAQs help users to solve an issue or know more about a process. FAQs can be categorized separately, for e.g. some questions can be related to payment, some could be related to purchase, shipping, navigating, etc. Use this API to create an FAQ category.
   */
  createFaqCategory({ body } = {}) {
    const { error } = ContentValidator.createFaqCategory().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to an FAQ category.
   * @param {UpdateFaqCategoryRequestSchema} arg.body
   * @summary: Update an FAQ category
   * @description: Use this API to edit an existing FAQ category.
   */
  updateFaqCategory({ id, body } = {}) {
    const { error } = ContentValidator.updateFaqCategory().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to an FAQ category.
   * @summary: Delete an FAQ category
   * @description: Use this API to delete an FAQ category.
   */
  deleteFaqCategory({ id } = {}) {
    const { error } = ContentValidator.deleteFaqCategory().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
   *   category. Slug is a short, human-readable, URL-friendly identifier of
   *   an object. You can get slug value of an FAQ category from
   *   `getFaqCategories` API.
   * @summary: Get question and answers within an FAQ category
   * @description: Use this API to retrieve all the commonly asked question and answers belonging to an FAQ category.
   */
  getFaqsByCategoryIdOrSlug({ idOrSlug } = {}) {
    const { error } = ContentValidator.getFaqsByCategoryIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${idOrSlug}/faqs`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.categoryId - ID allotted to an FAQ category.
   * @param {CreateFaqSchema} arg.body
   * @summary: Create an FAQ
   * @description: FAQs help users to solve an issue or know more about a process. Use this API to create an FAQ for a given FAQ category.
   */
  addFaq({ categoryId, body } = {}) {
    const { error } = ContentValidator.addFaq().validate(
      {
        categoryId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faqs`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.categoryId - ID allotted to an FAQ category.
   * @param {string} arg.faqId - ID allotted to an FAQ.
   * @param {CreateFaqSchema} arg.body
   * @summary: Update an FAQ
   * @description: Use this API to edit an existing FAQ.
   */
  updateFaq({ categoryId, faqId, body } = {}) {
    const { error } = ContentValidator.updateFaq().validate(
      {
        categoryId,
        faqId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.categoryId - ID allotted to an FAQ category.
   * @param {string} arg.faqId - ID allotted to an FAQ.
   * @summary: Delete an FAQ
   * @description: Use this API to delete an existing FAQ.
   */
  deleteFaq({ categoryId, faqId } = {}) {
    const { error } = ContentValidator.deleteFaq().validate(
      {
        categoryId,
        faqId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.idOrSlug - ID or the slug allotted to an FAQ
   *   category. Slug is a short, human-readable, URL-friendly identifier of
   *   an object. You can get slug value of an FAQ category from
   *   `getFaqCategories` API.
   * @summary: Get an FAQ
   * @description: Use this API to retrieve a specific FAQ. You will get the question and answer of that FAQ.
   */
  getFaqByIdOrSlug({ idOrSlug } = {}) {
    const { error } = ContentValidator.getFaqByIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/${idOrSlug}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @summary: Get landing pages
   * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
   */
  getLandingPages({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getLandingPages().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @summary: Get landing pages
   * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to fetch a list of landing pages.
   */
  getLandingPagesPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getLandingPages({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {LandingPageSchema} arg.body
   * @summary: Create a landing page
   * @description: Landing page is the first page that a prospect lands upon while visiting a website. Use this API to create a landing page.
   */
  createLandingPage({ body } = {}) {
    const { error } = ContentValidator.createLandingPage().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to a landing page.
   * @param {LandingPageSchema} arg.body
   * @summary: Update a landing page
   * @description: Use this API to edit the details of an existing landing page.
   */
  updateLandingPage({ id, body } = {}) {
    const { error } = ContentValidator.updateLandingPage().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to a landing page.
   * @summary: Delete a landing page
   * @description: Use this API to delete an existing landing page.
   */
  deleteLandingPage({ id } = {}) {
    const { error } = ContentValidator.deleteLandingPage().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get legal information
   * @description: Use this API to get the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
   */
  getLegalInformation({} = {}) {
    const { error } = ContentValidator.getLegalInformation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/legal`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ApplicationLegal} arg.body
   * @summary: Save legal information
   * @description: Use this API to edit, update and save the legal information of an application, which includes Policy, Terms and Conditions, Shipping Policy and FAQ regarding the application.
   */
  updateLegalInformation({ body } = {}) {
    const { error } = ContentValidator.updateLegalInformation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/legal`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.devicePlatform - Filter navigations by platform.
   *   Acceptable values are: web, android, ios, all
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @summary: Get navigations
   * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
   */
  getNavigations({ devicePlatform, pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getNavigations().validate(
      {
        devicePlatform,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["device_platform"] = devicePlatform;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {string} arg.devicePlatform - Filter navigations by platform.
   *   Acceptable values are: web, android, ios, all
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @summary: Get navigations
   * @description: Use this API to fetch the navigations details which includes the items of the navigation pane. It also shows the orientation, links, sub-navigations, etc.
   */
  getNavigationsPaginator({
    companyId,
    applicationId,
    devicePlatform,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getNavigations({
        companyId: companyId,
        applicationId: applicationId,
        devicePlatform: devicePlatform,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {NavigationRequest} arg.body
   * @summary: Create a navigation
   * @description: Navigation is the arrangement of navigational items to ease the accessibility of resources for users on a website. Use this API to create a navigation.
   */
  createNavigation({ body } = {}) {
    const { error } = ContentValidator.createNavigation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get default navigations
   * @description: On any website (application), there are navigations that are present by default. Use this API to retrieve those default navigations.
   */
  getDefaultNavigations({} = {}) {
    const { error } = ContentValidator.getDefaultNavigations().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/default`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a navigation. You can get slug value of a navigation from
   *   `getNavigations` API.
   * @param {string} arg.devicePlatform - Filter navigations by platform.
   *   Acceptable values are: web, android, ios, all
   * @summary: Get a navigation by slug
   * @description: Use this API to retrieve a navigation by its slug.
   */
  getNavigationBySlug({ slug, devicePlatform } = {}) {
    const { error } = ContentValidator.getNavigationBySlug().validate(
      {
        slug,
        devicePlatform,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["device_platform"] = devicePlatform;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${slug}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the navigation.
   * @param {NavigationRequest} arg.body
   * @summary: Update a navigation
   * @description: Use this API to edit the details of an existing navigation.
   */
  updateNavigation({ id, body } = {}) {
    const { error } = ContentValidator.updateNavigation().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the navigation.
   * @summary: Delete a navigation
   * @description: Use this API to delete an existing navigation.
   */
  deleteNavigation({ id } = {}) {
    const { error } = ContentValidator.deleteNavigation().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.pageType] - Fetch meta by page type. Acceptable
   *   values are: system, custom and all
   * @param {boolean} [arg.cartPages] - Pass this param value as `true` to
   *   fetch meta with cart pages
   * @summary: Get page meta
   * @description: Use this API to get the meta of custom pages (blog, page) and default system pages (e.g. home/brand/category/collection).
   */
  getPageMeta({ pageType, cartPages } = {}) {
    const { error } = ContentValidator.getPageMeta().validate(
      {
        pageType,
        cartPages,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_type"] = pageType;
    query_params["cart_pages"] = cartPages;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/meta`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get page spec
   * @description: Use this API to get the specifications of a page, such as page type, display name, params and query.
   */
  getPageSpec({} = {}) {
    const { error } = ContentValidator.getPageSpec().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/spec`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a page. You can get slug value of a page from `getPages` API.
   * @param {PagePublishRequest} arg.body
   * @summary: Change the publish status of a page
   * @description: Use this API to change the publish status of an existing page. Allows you to publish and unpublish the page.
   */
  updatePagePreview({ slug, body } = {}) {
    const { error } = ContentValidator.updatePagePreview().validate(
      {
        slug,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/publish/${slug}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the page.
   * @summary: Delete a page
   * @description: Use this API to delete an existing page.
   */
  deletePage({ id } = {}) {
    const { error } = ContentValidator.deletePage().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PathMappingSchema} arg.body
   * @summary: Save path based redirection rules
   * @description: Use this API to add redirection rules
   */
  addPathRedirectionRules({ body } = {}) {
    const { error } = ContentValidator.addPathRedirectionRules().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 5.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @summary: Get path based redirection rules
   * @description: Use this API to get path based redirection rules.
   */
  getPathRedirectionRules({ pageSize, pageNo } = {}) {
    const { error } = ContentValidator.getPathRedirectionRules().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.pathId - ID allotted to the path redirection rule.
   * @summary: Get path based redirection rule
   * @description: Use this API to get path based redirection rule.
   */
  getPathRedirectionRule({ pathId } = {}) {
    const { error } = ContentValidator.getPathRedirectionRule().validate(
      {
        pathId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings/${pathId}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.pathId - ID allotted to the path redirection rule.
   * @param {PathMappingSchema} arg.body
   * @summary: Update path based redirection rules
   * @description: Use this API to update redirection rules
   */
  updatePathRedirectionRules({ pathId, body } = {}) {
    const { error } = ContentValidator.updatePathRedirectionRules().validate(
      {
        pathId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings/${pathId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.pathId - ID allotted to the path redirection rule.
   * @summary: Delete path based redirection rules
   * @description: Use this API to delete redirection rules
   */
  deletePathRedirectionRules({ pathId } = {}) {
    const { error } = ContentValidator.deletePathRedirectionRules().validate(
      {
        pathId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/path-mappings/${pathId}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get SEO configuration of an application
   * @description: Use this API to know how the SEO is configured in the application. This includes the sitemap, robot.txt, custom meta tags, etc.
   */
  getSEOConfiguration({} = {}) {
    const { error } = ContentValidator.getSEOConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SeoComponent} arg.body
   * @summary: Update SEO of application
   * @description: Use this API to edit the SEO details of an application. This includes the sitemap, robot.txt, custom meta tags, etc.
   */
  updateSEOConfiguration({ body } = {}) {
    const { error } = ContentValidator.updateSEOConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.devicePlatform - Filter slideshows by platform.
   *   Acceptable values are: web, android, ios and all
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @summary: Get slideshows
   * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
   */
  getSlideshows({ devicePlatform, pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getSlideshows().validate(
      {
        devicePlatform,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["device_platform"] = devicePlatform;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {string} arg.devicePlatform - Filter slideshows by platform.
   *   Acceptable values are: web, android, ios and all
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @summary: Get slideshows
   * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to fetch a list of slideshows.
   */
  getSlideshowsPaginator({
    companyId,
    applicationId,
    devicePlatform,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSlideshows({
        companyId: companyId,
        applicationId: applicationId,
        devicePlatform: devicePlatform,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SlideshowRequest} arg.body
   * @summary: Create a slideshow
   * @description: A slideshow is a group of images, videos or a combination of both that are shown on the website in the form of slides. Use this API to create a slideshow.
   */
  createSlideshow({ body } = {}) {
    const { error } = ContentValidator.createSlideshow().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a slideshow. You can get slug value of a page from
   *   `getSlideshows` API.
   * @param {string} arg.devicePlatform - Filter slideshows by platform.
   *   Acceptable values are: web, android, ios and all
   * @summary: Get slideshow by slug
   * @description: Use this API to retrieve the details of a slideshow by its slug.
   */
  getSlideshowBySlug({ slug, devicePlatform } = {}) {
    const { error } = ContentValidator.getSlideshowBySlug().validate(
      {
        slug,
        devicePlatform,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["device_platform"] = devicePlatform;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${slug}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the slideshow.
   * @param {SlideshowRequest} arg.body
   * @summary: Update a slideshow
   * @description: Use this API to edit the details of an existing slideshow.
   */
  updateSlideshow({ id, body } = {}) {
    const { error } = ContentValidator.updateSlideshow().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the slideshow.
   * @summary: Delete a slideshow
   * @description: Use this API to delete an existing slideshow.
   */
  deleteSlideshow({ id } = {}) {
    const { error } = ContentValidator.deleteSlideshow().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get support information
   * @description: Use this API to get the contact details for customer support, including emails and phone numbers.
   */
  getSupportInformation({} = {}) {
    const { error } = ContentValidator.getSupportInformation().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/support`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {Support} arg.body
   * @summary: Update the support data of an application
   * @description: Use this API to edit the existing contact details for customer support, including emails and phone numbers.
   */
  updateSupportInformation({ body } = {}) {
    const { error } = ContentValidator.updateSupportInformation().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/support`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateTagRequestSchema} arg.body
   * @summary: Update a tag
   * @description: Use this API to edit the details of an existing tag. This includes the tag name, tag type (css/js), url and position of the tag.
   */
  updateInjectableTag({ body } = {}) {
    const { error } = ContentValidator.updateInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Delete tags in application
   * @description: Use this API to delete all the existing tags at once.
   */
  deleteAllInjectableTags({} = {}) {
    const { error } = ContentValidator.deleteAllInjectableTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get all the tags in an application
   * @description: Use this API to get all the CSS and JS injected in the application in the form of tags.
   */
  getInjectableTags({} = {}) {
    const { error } = ContentValidator.getInjectableTags().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateTagRequestSchema} arg.body
   * @summary: Add a tag
   * @description: CSS and JS can be injected in the application (website) with the help of tags. Use this API to create such tags by entering the tag name, tag type (css/js), url and position of the tag.
   */
  addInjectableTag({ body } = {}) {
    const { error } = ContentValidator.addInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/add`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {RemoveHandpickedSchema} arg.body
   * @summary: Remove a tag
   * @description: Use this API to delete an existing tag.
   */
  removeInjectableTag({ body } = {}) {
    const { error } = ContentValidator.removeInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/remove/handpicked`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.tagId - ID allotted to the tag.
   * @param {UpdateHandpickedSchema} arg.body
   * @summary: Edit a tag by id
   * @description: Use this API to edit the details of an existing tag by its ID.
   */
  editInjectableTag({ tagId, body } = {}) {
    const { error } = ContentValidator.editInjectableTag().validate(
      {
        tagId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/edit/handpicked/${tagId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PageRequest} arg.body
   * @summary: Create a page
   * @description: Use this API to create a custom page using a title, seo, publish status, feature image, tags, meta, etc.
   */
  createPage({ body } = {}) {
    const { error } = ContentValidator.createPage().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @summary: Get a list of pages
   * @description: Use this API to retrieve a list of pages.
   */
  getPages({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getPages().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Numeric ID allotted to an application
   *   created within a business account.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @summary: Get a list of pages
   * @description: Use this API to retrieve a list of pages.
   */
  getPagesPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getPages({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - ID allotted to the page.
   * @param {PageSchema} arg.body
   * @summary: Update a page
   * @description: Use this API to edit the details of an existing page, such as its title, seo, publish status, feature image, tags, schedule, etc.
   */
  updatePage({ id, body } = {}) {
    const { error } = ContentValidator.updatePage().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A short, human-readable, URL-friendly
   *   identifier of a page. You can get slug value of a page from `getPages` API.
   * @summary: Get pages by component Id
   * @description: Use this API to retrieve the components of a page, such as its title, seo, publish status, feature image, tags, schedule, etc.
   */
  getPageBySlug({ slug } = {}) {
    const { error } = ContentValidator.getPageBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v2.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${slug}`,
      query_params,
      undefined
    );
  }
}

class Communication {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get campaigns
   * @description: Get campaigns
   */
  getCampaigns({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getCampaigns().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get campaigns
   * @description: Get campaigns
   */
  getCampaignsPaginator({ companyId, applicationId, pageSize, sort } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCampaigns({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CampaignReq} arg.body
   * @summary: Create campaign
   * @description: Create campaign
   */
  createCampaign({ body } = {}) {
    const { error } = CommunicationValidator.createCampaign().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Campaign id
   * @summary: Get campaign by id
   * @description: Get campaign by id
   */
  getCampaignById({ id } = {}) {
    const { error } = CommunicationValidator.getCampaignById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Campaign id
   * @param {CampaignReq} arg.body
   * @summary: Update campaign by id
   * @description: Update campaign by id
   */
  updateCampaignById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateCampaignById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Campaign id
   * @summary: Get stats of campaign by id
   * @description: Get stats of campaign by id
   */
  getStatsOfCampaignById({ id } = {}) {
    const { error } = CommunicationValidator.getStatsOfCampaignById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/get-stats/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get audiences
   * @description: Get audiences
   */
  getAudiences({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getAudiences().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get audiences
   * @description: Get audiences
   */
  getAudiencesPaginator({ companyId, applicationId, pageSize, sort } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAudiences({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AudienceReq} arg.body
   * @summary: Create audience
   * @description: Create audience
   */
  createAudience({ body } = {}) {
    const { error } = CommunicationValidator.createAudience().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {BigqueryHeadersReq} arg.body
   * @summary: Get bigquery headers
   * @description: Get bigquery headers
   */
  getBigqueryHeaders({ body } = {}) {
    const { error } = CommunicationValidator.getBigqueryHeaders().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/bigquery-headers`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Audience id
   * @summary: Get audience by id
   * @description: Get audience by id
   */
  getAudienceById({ id } = {}) {
    const { error } = CommunicationValidator.getAudienceById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Audience id
   * @param {AudienceReq} arg.body
   * @summary: Update audience by id
   * @description: Update audience by id
   */
  updateAudienceById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateAudienceById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetNRecordsCsvReq} arg.body
   * @summary: Get n sample records from csv
   * @description: Get n sample records from csv
   */
  getNSampleRecordsFromCsv({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.getNSampleRecordsFromCsv().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/get-n-records`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get email providers
   * @description: Get email providers
   */
  getEmailProviders({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getEmailProviders().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get email providers
   * @description: Get email providers
   */
  getEmailProvidersPaginator({
    companyId,
    applicationId,
    pageSize,
    sort,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getEmailProviders({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EmailProviderReq} arg.body
   * @summary: Create email provider
   * @description: Create email provider
   */
  createEmailProvider({ body } = {}) {
    const { error } = CommunicationValidator.createEmailProvider().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Email provider id
   * @summary: Get email provider by id
   * @description: Get email provider by id
   */
  getEmailProviderById({ id } = {}) {
    const { error } = CommunicationValidator.getEmailProviderById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Email provider id
   * @param {EmailProviderReq} arg.body
   * @summary: Update email provider by id
   * @description: Update email provider by id
   */
  updateEmailProviderById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateEmailProviderById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get email templates
   * @description: Get email templates
   */
  getEmailTemplates({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getEmailTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get email templates
   * @description: Get email templates
   */
  getEmailTemplatesPaginator({
    companyId,
    applicationId,
    pageSize,
    sort,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getEmailTemplates({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EmailTemplateReq} arg.body
   * @summary: Create email template
   * @description: Create email template
   */
  createEmailTemplate({ body } = {}) {
    const { error } = CommunicationValidator.createEmailTemplate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get system email templates
   * @description: Get system email templates
   */
  getSystemEmailTemplates({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getSystemEmailTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/system-templates`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get system email templates
   * @description: Get system email templates
   */
  getSystemEmailTemplatesPaginator({
    companyId,
    applicationId,
    pageSize,
    sort,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSystemEmailTemplates({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Email template id
   * @summary: Get email template by id
   * @description: Get email template by id
   */
  getEmailTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.getEmailTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Email template id
   * @param {EmailTemplateReq} arg.body
   * @summary: Update email template by id
   * @description: Update email template by id
   */
  updateEmailTemplateById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateEmailTemplateById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Email template id
   * @summary: Delete email template by id
   * @description: Delete email template by id
   */
  deleteEmailTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.deleteEmailTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EngineRequest} arg.body
   * @summary: Send email or sms synchronously
   * @description: Send email or sms synchronously
   */
  sendCommunicationSynchronously({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.sendCommunicationSynchronously().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/engine/send-instant`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EngineRequest} arg.body
   * @summary: Send email or sms asynchronously
   * @description: Send email or sms asynchronously
   */
  sendCommunicationAsynchronously({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.sendCommunicationAsynchronously().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/engine/send-async`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {string} [arg.populate] - Populate fields
   * @summary: Get event subscriptions
   * @description: Get event subscriptions
   */
  getEventSubscriptions({ pageNo, pageSize, populate } = {}) {
    const { error } = CommunicationValidator.getEventSubscriptions().validate(
      {
        pageNo,
        pageSize,
        populate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["populate"] = populate;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/event/event-subscriptions`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {string} [arg.populate] - Populate fields
   * @summary: Get event subscriptions
   * @description: Get event subscriptions
   */
  getEventSubscriptionsPaginator({
    companyId,
    applicationId,
    pageSize,
    populate,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getEventSubscriptions({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        populate: populate,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get jobs
   * @description: Get jobs
   */
  getJobs({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getJobs().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/jobs`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get jobs
   * @description: Get jobs
   */
  getJobsPaginator({ companyId, applicationId, pageSize, sort } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getJobs({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {TriggerJobRequest} arg.body
   * @summary: Trigger campaign job
   * @description: Trigger campaign job
   */
  triggerCampaignJob({ body } = {}) {
    const { error } = CommunicationValidator.triggerCampaignJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/trigger-job`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get job logs
   * @description: Get job logs
   */
  getJobLogs({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getJobLogs().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/logs`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get job logs
   * @description: Get job logs
   */
  getJobLogsPaginator({ companyId, applicationId, pageSize, sort } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getJobLogs({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.pageId] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on _id
   * @param {Object} [arg.query] -
   * @summary: Get communication logs
   * @description: Get communication logs
   */
  getCommunicationLogs({ pageId, pageSize, sort, query } = {}) {
    const { error } = CommunicationValidator.getCommunicationLogs().validate(
      {
        pageId,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;
    query_params["query"] = query;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/log`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on _id
   * @param {Object} [arg.query] -
   * @summary: Get communication logs
   * @description: Get communication logs
   */
  getCommunicationLogsPaginator({
    companyId,
    applicationId,
    pageSize,
    sort,
    query,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getCommunicationLogs({
        companyId: companyId,
        applicationId: applicationId,
        pageId: pageId,
        pageSize: pageSize,
        sort: sort,
        query: query,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SendOtpCommsReq} arg.body
   * @summary: Send OTP using email and sms
   * @description: Send OTP Comms via email and sms
   */
  sendOtp({ body } = {}) {
    const { error } = CommunicationValidator.sendOtp().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/otp/send-otp-comms`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {VerifyOtpCommsReq} arg.body
   * @summary: Verify OTP sent via email and sms
   * @description: Verify OTP sent via email and sms
   */
  verfiyOtp({ body } = {}) {
    const { error } = CommunicationValidator.verfiyOtp().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/otp/verify-otp-comms`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get sms providers
   * @description: Get sms providers
   */
  getSmsProviders({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getSmsProviders().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get sms providers
   * @description: Get sms providers
   */
  getSmsProvidersPaginator({ companyId, applicationId, pageSize, sort } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSmsProviders({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SmsProviderReq} arg.body
   * @summary: Create sms provider
   * @description: Create sms provider
   */
  createSmsProvider({ body } = {}) {
    const { error } = CommunicationValidator.createSmsProvider().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Sms provider id
   * @summary: Get sms provider by id
   * @description: Get sms provider by id
   */
  getSmsProviderById({ id } = {}) {
    const { error } = CommunicationValidator.getSmsProviderById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Sms provider id
   * @param {SmsProviderReq} arg.body
   * @summary: Update sms provider by id
   * @description: Update sms provider by id
   */
  updateSmsProviderById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateSmsProviderById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get sms templates
   * @description: Get sms templates
   */
  getSmsTemplates({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getSmsTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get sms templates
   * @description: Get sms templates
   */
  getSmsTemplatesPaginator({ companyId, applicationId, pageSize, sort } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSmsTemplates({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SmsTemplateReq} arg.body
   * @summary: Create sms template
   * @description: Create sms template
   */
  createSmsTemplate({ body } = {}) {
    const { error } = CommunicationValidator.createSmsTemplate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Sms template id
   * @summary: Get sms template by id
   * @description: Get sms template by id
   */
  getSmsTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.getSmsTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Sms template id
   * @param {SmsTemplateReq} arg.body
   * @summary: Update sms template by id
   * @description: Update sms template by id
   */
  updateSmsTemplateById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateSmsTemplateById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Sms template id
   * @summary: Delete sms template by id
   * @description: Delete sms template by id
   */
  deleteSmsTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.deleteSmsTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get system sms templates
   * @description: Get system sms templates
   */
  getSystemSystemTemplates({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationValidator.getSystemSystemTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/system-templates`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {Object} [arg.sort] - To sort based on created_at
   * @summary: Get system sms templates
   * @description: Get system sms templates
   */
  getSystemSystemTemplatesPaginator({
    companyId,
    applicationId,
    pageSize,
    sort,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getSystemSystemTemplates({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        sort: sort,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }
}

class Payment {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get All Brand Payment Gateway Config Secret
   * @description: Get All Brand Payment Gateway Config Secret
   */
  getBrandPaymentGatewayConfig({} = {}) {
    const { error } = PaymentValidator.getBrandPaymentGatewayConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   */
  saveBrandPaymentGatewayConfig({ body } = {}) {
    const { error } = PaymentValidator.saveBrandPaymentGatewayConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   */
  updateBrandPaymentGatewayConfig({ body } = {}) {
    const {
      error,
    } = PaymentValidator.updateBrandPaymentGatewayConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} arg.refresh -
   * @param {string} arg.requestType -
   * @summary: Get All Valid Payment Options
   * @description: Use this API to get Get All Valid Payment Options for making payment
   */
  getPaymentModeRoutes({ refresh, requestType } = {}) {
    const { error } = PaymentValidator.getPaymentModeRoutes().validate(
      {
        refresh,
        requestType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["refresh"] = refresh;
    query_params["request_type"] = requestType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @param {string} [arg.requestHash] -
   * @summary: Get bank details
   * @description: Use this API to get saved bank details for returned/cancelled order using order id.
   */
  getBankAccountDetailsOpenAPI({ orderId, requestHash } = {}) {
    const { error } = PaymentValidator.getBankAccountDetailsOpenAPI().validate(
      {
        orderId,
        requestHash,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["order_id"] = orderId;
    query_params["request_hash"] = requestHash;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/account`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AddBeneficiaryDetailsOTPRequest} arg.body
   * @summary: Save bank details for cancelled/returned order
   * @description: Use this API to save bank details for returned/cancelled order to refund amount in his account.
   */
  addRefundBankAccountUsingOTP({ body } = {}) {
    const { error } = PaymentValidator.addRefundBankAccountUsingOTP().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/account`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @summary: List Order Beneficiary
   * @description: Get all active  beneficiary details added by the user for refund
   */
  getUserOrderBeneficiaries({ orderId } = {}) {
    const { error } = PaymentValidator.getUserOrderBeneficiaries().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/accounts/order`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @summary: List User Beneficiary
   * @description: Get all active  beneficiary details added by the user for refund
   */
  getUserBeneficiaries({ orderId } = {}) {
    const { error } = PaymentValidator.getUserBeneficiaries().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/refund/accounts/user`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentConfirmationRequest} arg.body
   * @summary: Confirm payment after successful payment from payment gateway
   * @description: Use this API to confirm payment after payment gateway accepted payment.
   */
  confirmPayment({ body } = {}) {
    const { error } = PaymentValidator.confirmPayment().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/confirm`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.merchantUserId -
   * @param {string} arg.mobileNo -
   * @summary: Get COD limit for user
   * @description: Use this API to get user cod limit and reamining limit for the payment
   */
  getUserCODlimitRoutes({ merchantUserId, mobileNo } = {}) {
    const { error } = PaymentValidator.getUserCODlimitRoutes().validate(
      {
        merchantUserId,
        mobileNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["merchant_user_id"] = merchantUserId;
    query_params["mobile_no"] = mobileNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/user-cod`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SetCODForUserRequest} arg.body
   * @summary: Set COD option for user for payment
   * @description: Use this API to set cod option as true or false for the payment
   */
  setUserCODlimitRoutes({ body } = {}) {
    const { error } = PaymentValidator.setUserCODlimitRoutes().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/user-cod`,
      query_params,
      body
    );
  }
}

class Order {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.lane] -
   * @param {string} [arg.searchType] -
   * @param {string} [arg.searchId] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {string} [arg.dpIds] -
   * @param {string} [arg.orderingCompanyId] -
   * @param {string} [arg.stores] -
   * @param {string} [arg.salesChannel] -
   * @param {string} [arg.requestByExt] -
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.customerId] -
   * @param {boolean} [arg.isPrioritySort] -
   * @summary:
   * @description:
   */
  getApplicationShipments({
    lane,
    searchType,
    searchId,
    fromDate,
    toDate,
    dpIds,
    orderingCompanyId,
    stores,
    salesChannel,
    requestByExt,
    pageNo,
    pageSize,
    customerId,
    isPrioritySort,
  } = {}) {
    const { error } = OrderValidator.getApplicationShipments().validate(
      {
        lane,
        searchType,
        searchId,
        fromDate,
        toDate,
        dpIds,
        orderingCompanyId,
        stores,
        salesChannel,
        requestByExt,
        pageNo,
        pageSize,
        customerId,
        isPrioritySort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["lane"] = lane;
    query_params["search_type"] = searchType;
    query_params["search_id"] = searchId;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["dp_ids"] = dpIds;
    query_params["ordering_company_id"] = orderingCompanyId;
    query_params["stores"] = stores;
    query_params["sales_channel"] = salesChannel;
    query_params["request_by_ext"] = requestByExt;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["customer_id"] = customerId;
    query_params["is_priority_sort"] = isPrioritySort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/application/${this.applicationId}/shipments/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.orderId -
   * @summary:
   * @description:
   */
  getAppOrderShipmentDetails({ orderId } = {}) {
    const { error } = OrderValidator.getAppOrderShipmentDetails().validate(
      {
        orderId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["order_id"] = orderId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/application/${this.applicationId}/order-details`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.shipmentId -
   * @summary: Track shipment
   * @description: Track Shipment by shipment id, for application based on application Id
   */
  trackPlatformShipment({ shipmentId } = {}) {
    const { error } = OrderValidator.trackPlatformShipment().validate(
      {
        shipmentId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/orders/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/${shipmentId}/track`,
      query_params,
      undefined
    );
  }
}

class Catalog {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular
   *   detail. Pass the `id` of the keywords which you want to delete.
   * @param {CreateSearchKeyword} arg.body
   * @summary: Update Search Keyword
   * @description: Update Search Keyword by its id. On successful request, returns the updated collection
   */
  updateSearchKeywords({ id, body } = {}) {
    const { error } = CatalogValidator.updateSearchKeywords().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular
   *   detail. Pass the `id` of the keywords which you want to retrieve.
   * @summary: Get a Search Keywords Details
   * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
   */
  getSearchKeywords({ id } = {}) {
    const { error } = CatalogValidator.getSearchKeywords().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular
   *   detail. Pass the `id` of the keywords which you want to delete.
   * @summary: Delete a Search Keywords
   * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
   */
  deleteSearchKeywords({ id } = {}) {
    const { error } = CatalogValidator.deleteSearchKeywords().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateSearchKeyword} arg.body
   * @summary: Add a Custom Search Keywords
   * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
   */
  createCustomKeyword({ body } = {}) {
    const { error } = CatalogValidator.createCustomKeyword().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: List all Search Custom Keyword Listing
   * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
   */
  getAllSearchKeyword({} = {}) {
    const { error } = CatalogValidator.getAllSearchKeyword().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular
   *   detail. Pass the `id` of the keywords which you want to delete.
   * @param {CreateAutocompleteKeyword} arg.body
   * @summary: Create & Update Autocomplete Keyword
   * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
   */
  updateAutocompleteKeyword({ id, body } = {}) {
    const { error } = CatalogValidator.updateAutocompleteKeyword().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular
   *   detail. Pass the `id` of the keywords which you want to retrieve.
   * @summary: Get a Autocomplete Keywords Details
   * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
   */
  getAutocompleteKeywordDetail({ id } = {}) {
    const { error } = CatalogValidator.getAutocompleteKeywordDetail().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular
   *   detail. Pass the `id` of the keywords which you want to delete.
   * @summary: Delete a Autocomplete Keywords
   * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
   */
  deleteAutocompleteKeyword({ id } = {}) {
    const { error } = CatalogValidator.deleteAutocompleteKeyword().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateAutocompleteKeyword} arg.body
   * @summary: Add a Custom Autocomplete Keywords
   * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
   */
  createCustomAutocompleteRule({ body } = {}) {
    const { error } = CatalogValidator.createCustomAutocompleteRule().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: List all Autocomplete Keyword Listing
   * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
   */
  getAutocompleteConfig({} = {}) {
    const { error } = CatalogValidator.getAutocompleteConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.itemId - Product id for which the custom_meta is associated.
   * @param {ApplicationItemMeta} arg.body
   * @summary: Update a single custom meta.
   * @description: This API helps to update data associated to a item custom meta.
   */
  updateAppProduct({ itemId, body } = {}) {
    const { error } = CatalogValidator.updateAppProduct().validate(
      {
        itemId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product/${itemId}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.itemId - Product id for a particular product.
   * @summary: Get company application product data.
   * @description: Products are the core resource of an application. If successful, returns a Company Application Product resource in the response body depending upon filter sent.
   */
  getAppProduct({ itemId } = {}) {
    const { error } = CatalogValidator.getAppProduct().validate(
      {
        itemId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product/${itemId}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.configType - A `config_type` is an identifier that
   *   defines a specific type of configuration.
   * @param {string} [arg.templateSlug] - Get configuration list filtered by
   *   `template_slug` string. This is for the details and comparision groups.
   * @summary: Get configuration metadata details for catalog for admin panel
   * @description: Get the configuraion metadata details for catalog.
   */
  getConfigurationMetadata({ configType, templateSlug } = {}) {
    const { error } = CatalogValidator.getConfigurationMetadata().validate(
      {
        configType,
        templateSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["template_slug"] = templateSlug;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/metadata/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.configType - A `config_type` is a unique identifier
   *   for a particular group configuration type.
   * @param {AppConfigurationDetail} arg.body
   * @summary: Create configuration for Group config types.
   * @description: Create configuration for Group config types.
   */
  createGroupConfiguration({ configType, body } = {}) {
    const { error } = CatalogValidator.createGroupConfiguration().validate(
      {
        configType,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/groups`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.configType - A `config_type` is an identifier that
   *   defines a specific type of configuration.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.search] - Get configuration list filtered by `search` string.
   * @param {string} [arg.templateSlug] - Get configuration list filtered by
   *   `template_slug` string. This is for the details and comparision groups.
   * @summary: Get the details of the application configured configurations of group config types.
   * @description: Get the details of the application configured configurations of group config types.
   */
  getGroupConfigurations({
    configType,
    pageNo,
    pageSize,
    search,
    templateSlug,
  } = {}) {
    const { error } = CatalogValidator.getGroupConfigurations().validate(
      {
        configType,
        pageNo,
        pageSize,
        search,
        templateSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["search"] = search;
    query_params["template_slug"] = templateSlug;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/groups`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.configType - A `config_type` is a unique identifier
   *   for a particular group configuration type.
   * @param {string} arg.groupSlug - A `group_slug` is a unique identifier of
   *   a particular configuration.
   * @param {AppConfigurationDetail} arg.body
   * @summary: Update the group configurations for the application.
   * @description: Update the group configurations for the application.
   */
  updateGroupConfiguration({ configType, groupSlug, body } = {}) {
    const { error } = CatalogValidator.updateGroupConfiguration().validate(
      {
        configType,
        groupSlug,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/groups/${groupSlug}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.configType - A `config_type` is a unique identifier
   *   for a particular group configuration type.
   * @param {string} arg.groupSlug - A `group_slug` is a unique identifier of
   *   a particular configuration.
   * @summary: Delete configuration of the product config type of the application.
   * @description: Delete configuration of the product config type of the application.
   */
  deleteGroupConfiguration({ configType, groupSlug } = {}) {
    const { error } = CatalogValidator.deleteGroupConfiguration().validate(
      {
        configType,
        groupSlug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/groups/${groupSlug}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.configType - A `config_type` is a unique identifier
   *   for a particular listing configuration type.
   * @param {AppConfigurationsSort} arg.body
   * @summary: Add configuration for listings
   * @description: Add configuration for listing.
   */
  createListingConfiguration({ configType, body } = {}) {
    const { error } = CatalogValidator.createListingConfiguration().validate(
      {
        configType,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.configType - A `config_type` is an identifier that
   *   defines a specific type of configuration.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.search] - Get configuration list filtered by `search` string.
   * @summary: Get the details of the application configured configurations of listing config types.
   * @description: Get the details of the application configured configurations of listing config types.
   */
  getListingConfigurations({ configType, pageNo, pageSize, search } = {}) {
    const { error } = CatalogValidator.getListingConfigurations().validate(
      {
        configType,
        pageNo,
        pageSize,
        search,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["search"] = search;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.configType - A `config_type` is a unique identifier
   *   for a particular listing configuration type.
   * @param {string} arg.configId - A `config_id` is a unique identifier of a
   *   particular configuration.
   * @param {AppConfigurationsSort} arg.body
   * @summary: Update configuration for listings
   * @description: Update configuration for listing.
   */
  updateListingConfiguration({ configType, configId, body } = {}) {
    const { error } = CatalogValidator.updateListingConfiguration().validate(
      {
        configType,
        configId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/item/${configId}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.configType - A `config_type` is a unique identifier
   *   for a particular listing configuration type.
   * @param {string} arg.configId - A `config_id` is a unique identifier of a
   *   particular configuration.
   * @summary: Delete configuration for listings
   * @description: Delete configuration for listing.
   */
  deleteListingConfiguration({ configType, configId } = {}) {
    const { error } = CatalogValidator.deleteListingConfiguration().validate(
      {
        configType,
        configId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${configType}/item/${configId}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AllowSingleRequest} arg.body
   * @summary: Update allow single flag for filters of the application.
   * @description: Update allow single flag for filters of the application.
   */
  updateAllowSingle({ body } = {}) {
    const { error } = CatalogValidator.updateAllowSingle().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/filter/allow_single`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DefaultKeyRequest} arg.body
   * @summary: Update the default sort key configuration for the application.
   * @description: Update the default sort key configuration for the application.
   */
  updateDefaultSort({ body } = {}) {
    const { error } = CatalogValidator.updateDefaultSort().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v2.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/sort/default_key`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get configuration meta  details for catalog for admin panel
   * @description: configuration meta  details for catalog.
   */
  getCatalogConfiguration({} = {}) {
    const { error } = CatalogValidator.getCatalogConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/metadata/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AppConfiguration} arg.body
   * @summary: Add configuration for products & listings
   * @description: Add configuration for products & listing.
   */
  createConfigurationProductListing({ body } = {}) {
    const {
      error,
    } = CatalogValidator.createConfigurationProductListing().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get configured details for catalog
   * @description: configured details for catalog.
   */
  getConfigurations({} = {}) {
    const { error } = CatalogValidator.getConfigurations().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.type - Type can be brands, categories etc.
   * @param {AppConfiguration} arg.body
   * @summary: Add configuration for categories and brands
   * @description: Add configuration for categories & brands.
   */
  createConfigurationByType({ type, body } = {}) {
    const { error } = CatalogValidator.createConfigurationByType().validate(
      {
        type,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${type}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.type - Type can be brands, categories etc.
   * @summary: Get configured details for catalog
   * @description: configured details for catalog.
   */
  getConfigurationByType({ type } = {}) {
    const { error } = CatalogValidator.getConfigurationByType().validate(
      {
        type,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${type}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get query filters to configure a collection
   * @description: Get query filters to configure a collection
   */
  getQueryFilters({} = {}) {
    const { error } = CatalogValidator.getQueryFilters().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/query-options/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateCollection} arg.body
   * @summary: Add a Collection
   * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
   */
  createCollection({ body } = {}) {
    const { error } = CatalogValidator.createCollection().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - Get collection list filtered by q string,
   * @param {string} [arg.scheduleStatus] - Get collection list filtered by
   *   scheduled status,
   * @param {string} [arg.type] - Type of the collections
   * @param {string[]} [arg.tags] - Each response will contain next_id param,
   *   which should be sent back to make pagination work.
   * @param {boolean} [arg.isActive] - Get collections filtered by active status.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @summary: List all the collections
   * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
   */
  getAllCollections({
    q,
    scheduleStatus,
    type,
    tags,
    isActive,
    pageNo,
    pageSize,
  } = {}) {
    const { error } = CatalogValidator.getAllCollections().validate(
      {
        q,
        scheduleStatus,
        type,
        tags,
        isActive,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["schedule_status"] = scheduleStatus;
    query_params["type"] = type;
    query_params["tags"] = tags;
    query_params["is_active"] = isActive;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - A `slug` is a human readable, URL friendly
   *   unique identifier of an object. Pass the `slug` of the collection which
   *   you want to retrieve.
   * @summary: Get a particular collection
   * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
   */
  getCollectionDetail({ slug } = {}) {
    const { error } = CatalogValidator.getCollectionDetail().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${slug}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - A `id` is a unique identifier of a collection.
   * @param {UpdateCollection} arg.body
   * @summary: Update a collection
   * @description: Update a collection by it's id. On successful request, returns the updated collection
   */
  updateCollection({ id, body } = {}) {
    const { error } = CatalogValidator.updateCollection().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - A `id` is a unique identifier of a collection.
   * @summary: Delete a Collection
   * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
   */
  deleteCollection({ id } = {}) {
    const { error } = CatalogValidator.deleteCollection().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - A `id` is a unique identifier of a collection.
   * @param {CollectionItemRequest} arg.body
   * @summary: Add items to a collection
   * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
   */
  addCollectionItems({ id, body } = {}) {
    const { error } = CatalogValidator.addCollectionItems().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/items/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - A `id` is a unique identifier of a collection.
   * @param {string} [arg.sortOn] - Each response will contain sort_on param,
   *   which should be sent back to make pagination work.
   * @param {string} [arg.pageId] - Each response will contain next_id param,
   *   which should be sent back to make pagination work.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @summary: Get the items for a collection
   * @description: Get items from a collection specified by its `id`.
   */
  getCollectionItems({ id, sortOn, pageId, pageSize } = {}) {
    const { error } = CatalogValidator.getCollectionItems().validate(
      {
        id,
        sortOn,
        pageId,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["sort_on"] = sortOn;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/items/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.brand] - Brand slug
   * @summary: Analytics data of catalog and inventory.
   * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
   */
  getCatalogInsights({ brand } = {}) {
    const { error } = CatalogValidator.getCatalogInsights().validate(
      {
        brand,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["brand"] = brand;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/analytics/insights/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.itemId - Item code of the product of which size is to be get.
   * @param {string} arg.sizeIdentifier - Size Identifier (Seller Identifier
   *   or Primary Identifier) of which inventory is to get.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search with help of store code.
   * @param {number[]} [arg.locationIds] - Search by store ids.
   * @summary: Get Inventory for company
   * @description: This API allows get Inventory data for particular company grouped by size and store.
   */
  getDiscountedInventoryBySizeIdentifier({
    itemId,
    sizeIdentifier,
    pageNo,
    pageSize,
    q,
    locationIds,
  } = {}) {
    const {
      error,
    } = CatalogValidator.getDiscountedInventoryBySizeIdentifier().validate(
      {
        itemId,
        sizeIdentifier,
        pageNo,
        pageSize,
        q,
        locationIds,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["location_ids"] = locationIds;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/products/${itemId}/inventory/${sizeIdentifier}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See below the
   *   list of available departments. You can retrieve available departments
   *   from the **v1.0/departments/** API
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search query with brand name.Use this parameter
   *   to search brands by brand name.
   * @param {number[]} [arg.brandId] - Helps to sort the brands list on the
   *   basis of uid list.
   * @summary: List all the brands
   * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
   */
  getApplicationBrands({ department, pageNo, pageSize, q, brandId } = {}) {
    const { error } = CatalogValidator.getApplicationBrands().validate(
      {
        department,
        pageNo,
        pageSize,
        q,
        brandId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["department"] = department;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["brand_id"] = brandId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/brands`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - A `company_id` is a unique identifier for
   *   a particular seller account.
   * @param {string} arg.applicationId - A `application_id` is a unique
   *   identifier for a particular sale channel.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See below the
   *   list of available departments. You can retrieve available departments
   *   from the **v1.0/departments/** API
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search query with brand name.Use this parameter
   *   to search brands by brand name.
   * @param {number[]} [arg.brandId] - Helps to sort the brands list on the
   *   basis of uid list.
   * @summary: List all the brands
   * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
   */
  getApplicationBrandsPaginator({
    companyId,
    applicationId,
    department,
    pageSize,
    q,
    brandId,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getApplicationBrands({
        companyId: companyId,
        applicationId: applicationId,
        department: department,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        brandId: brandId,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: List all the departments
   * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
   */
  getDepartments({} = {}) {
    const { error } = CatalogValidator.getDepartments().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/departments`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.department] - The name of the department. Use this
   *   parameter to filter products by a particular department. See below the
   *   list of available departments. You can retrieve available departments
   *   from the **v1.0/departments/** API
   * @summary: List all the categories
   * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
   */
  getCategories({ department } = {}) {
    const { error } = CatalogValidator.getCategories().validate(
      {
        department,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["department"] = department;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/categories`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.q] - The search query. This can be a partial or
   *   complete name of a either a product, brand or category
   * @param {string} [arg.f] - The search filter parameters. All the parameter
   *   filtered from filter parameters will be passed in **f** parameter in
   *   this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
   * @param {string} [arg.c] - The search filter parameters for collection
   *   items. All the parameter filtered from filter parameters will be passed
   *   in **c** parameter in this format.
   *   **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
   * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
   *   filter details. This flag is used to fetch all filters
   * @param {string} [arg.sortOn] - The order to sort the list of products on.
   *   The supported sort parameters are popularity, price, redemption and
   *   discount in either ascending or descending order. See the supported
   *   values below.
   * @param {string} [arg.pageId] - Each response will contain **page_id**
   *   param, which should be sent back to make pagination work.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {number} [arg.pageNo] - If page_type is number then pass it to
   *   fetch page items. Default is 1.
   * @param {string} [arg.pageType] - For pagination type should be cursor or
   *   number. Default is cursor.
   * @param {number[]} [arg.itemIds] - Item Ids of product
   * @summary: List the products
   * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
   */
  getAppicationProducts({
    q,
    f,
    c,
    filters,
    sortOn,
    pageId,
    pageSize,
    pageNo,
    pageType,
    itemIds,
  } = {}) {
    const { error } = CatalogValidator.getAppicationProducts().validate(
      {
        q,
        f,
        c,
        filters,
        sortOn,
        pageId,
        pageSize,
        pageNo,
        pageType,
        itemIds,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["q"] = q;
    query_params["f"] = f;
    query_params["c"] = c;
    query_params["filters"] = filters;
    query_params["sort_on"] = sortOn;
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;
    query_params["page_no"] = pageNo;
    query_params["page_type"] = pageType;
    query_params["item_ids"] = itemIds;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/products`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - A `company_id` is a unique identifier for
   *   a particular seller account.
   * @param {string} arg.applicationId - A `application_id` is a unique
   *   identifier for a particular sale channel.
   * @param {string} [arg.q] - The search query. This can be a partial or
   *   complete name of a either a product, brand or category
   * @param {string} [arg.f] - The search filter parameters. All the parameter
   *   filtered from filter parameters will be passed in **f** parameter in
   *   this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
   * @param {string} [arg.c] - The search filter parameters for collection
   *   items. All the parameter filtered from filter parameters will be passed
   *   in **c** parameter in this format.
   *   **?c=brand:in:voi-jeans|and:::category:nin:t-shirts|shirts**
   * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the
   *   filter details. This flag is used to fetch all filters
   * @param {string} [arg.sortOn] - The order to sort the list of products on.
   *   The supported sort parameters are popularity, price, redemption and
   *   discount in either ascending or descending order. See the supported
   *   values below.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {number[]} [arg.itemIds] - Item Ids of product
   * @summary: List the products
   * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
   */
  getAppicationProductsPaginator({
    companyId,
    applicationId,
    q,
    f,
    c,
    filters,
    sortOn,
    pageSize,
    itemIds,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getAppicationProducts({
        companyId: companyId,
        applicationId: applicationId,
        q: q,
        f: f,
        c: c,
        filters: filters,
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
        pageNo: pageNo,
        pageType: pageType,
        itemIds: itemIds,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.slug - The unique identifier of a product. i.e;
   *   `slug` of a product. You can retrieve these from the APIs that list
   *   products like **v1.0/products/**
   * @summary: Get a product
   * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
   */
  getProductDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getProductDetailBySlug().validate(
      {
        slug,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/products/${slug}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number[]} [arg.brandIds] - Get multiple products filtered by Brand Ids
   * @param {number[]} [arg.categoryIds] - Get multiple products filtered by
   *   Category Ids
   * @param {number[]} [arg.departmentIds] - Get multiple products filtered by
   *   Department Ids
   * @param {string[]} [arg.tags] - Get multiple products filtered by tags
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 10.
   * @param {string} [arg.q] - Search with Item Code, Name, Slug or Identifier.
   * @summary: Get applicationwise products
   * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. If successful, returns a Product resource in the response body specified in `ApplicationProductListingResponseDatabasePowered`
   */
  getAppProducts({
    brandIds,
    categoryIds,
    departmentIds,
    tags,
    pageNo,
    pageSize,
    q,
  } = {}) {
    const { error } = CatalogValidator.getAppProducts().validate(
      {
        brandIds,
        categoryIds,
        departmentIds,
        tags,
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["brand_ids"] = brandIds;
    query_params["category_ids"] = categoryIds;
    query_params["department_ids"] = departmentIds;
    query_params["tags"] = tags;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/raw-products/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number[]} [arg.itemIds] - The Item Id of the product.
   * @param {number[]} [arg.storeIds] - The Store Id of products to fetch inventory.
   * @param {number[]} [arg.brandIds] - The Brand Id of products to fetch inventory.
   * @param {string[]} [arg.sellerIdentifiers] - Unique seller_identifier of
   *   the product.
   * @param {string} [arg.timestamp] - Timestamp in UTC format (2020-07-23T10:27:50Z)
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @param {string} [arg.pageId] - Page ID to retrieve next set of results.
   * @summary: Get the stock of a product
   * @description: Retrieve the available Inventory of the products. Use this API to get the Inventory status of products with the filters of timestamp, store_ids, brand_ids, item_id - Items - Pagination
   */
  getAppInventory({
    itemIds,
    storeIds,
    brandIds,
    sellerIdentifiers,
    timestamp,
    pageSize,
    pageId,
  } = {}) {
    const { error } = CatalogValidator.getAppInventory().validate(
      {
        itemIds,
        storeIds,
        brandIds,
        sellerIdentifiers,
        timestamp,
        pageSize,
        pageId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["item_ids"] = itemIds;
    query_params["store_ids"] = storeIds;
    query_params["brand_ids"] = brandIds;
    query_params["seller_identifiers"] = sellerIdentifiers;
    query_params["timestamp"] = timestamp;
    query_params["page_size"] = pageSize;
    query_params["page_id"] = pageId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/inventory/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.storeType] - Helps to sort the location list on the
   *   basis of location type.
   * @param {number[]} [arg.uid] - Helps to sort the location list on the
   *   basis of uid list.
   * @param {string} [arg.q] - Query that is to be searched.
   * @param {string} [arg.stage] - To filter companies on basis of verified or
   *   unverified companies.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 20.
   * @summary: Get list of locations
   * @description: This API allows to view all the locations asscoiated to a application.
   */
  getAppLocations({ storeType, uid, q, stage, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getAppLocations().validate(
      {
        storeType,
        uid,
        q,
        stage,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["store_type"] = storeType;
    query_params["uid"] = uid;
    query_params["q"] = q;
    query_params["stage"] = stage;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/locations`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Id of the company whose locations are to fetched
   * @param {string} arg.applicationId - Id of the application whose locations
   *   are to fetched
   * @param {string} [arg.storeType] - Helps to sort the location list on the
   *   basis of location type.
   * @param {number[]} [arg.uid] - Helps to sort the location list on the
   *   basis of uid list.
   * @param {string} [arg.q] - Query that is to be searched.
   * @param {string} [arg.stage] - To filter companies on basis of verified or
   *   unverified companies.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 20.
   * @summary: Get list of locations
   * @description: This API allows to view all the locations asscoiated to a application.
   */
  getAppLocationsPaginator({
    companyId,
    applicationId,
    storeType,
    uid,
    q,
    stage,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAppLocations({
        companyId: companyId,
        applicationId: applicationId,
        storeType: storeType,
        uid: uid,
        q: q,
        stage: stage,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search query with brand name.Use this parameter
   *   to search brands by brand name.
   * @summary: List all the brands for the application
   * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
   */
  getApplicationBrandListing({ pageNo, pageSize, q } = {}) {
    const { error } = CatalogValidator.getApplicationBrandListing().validate(
      {
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/brand`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - A `company_id` is a unique identifier for
   *   a particular seller account.
   * @param {string} arg.applicationId - A `application_id` is a unique
   *   identifier for a particular sale channel.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search query with brand name.Use this parameter
   *   to search brands by brand name.
   * @summary: List all the brands for the application
   * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
   */
  getApplicationBrandListingPaginator({
    companyId,
    applicationId,
    pageSize,
    q,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getApplicationBrandListing({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.brandUid - Brand id for which the custom_json is associated.
   * @param {ApplicationBrandJson} arg.body
   * @summary: Update a single custom json.
   * @description: This API helps to update data associated to a item custom meta.
   */
  updateAppBrand({ brandUid, body } = {}) {
    const { error } = CatalogValidator.updateAppBrand().validate(
      {
        brandUid,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/brand/${brandUid}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.departmentId] - A `department_id` is a unique
   *   identifier for a particular department.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search query with brand name.Use this parameter
   *   to search brands by brand name.
   * @summary: List all the brands for the application
   * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
   */
  getApplicationCategoryListing({ departmentId, pageNo, pageSize, q } = {}) {
    const { error } = CatalogValidator.getApplicationCategoryListing().validate(
      {
        departmentId,
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["department_id"] = departmentId;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/category`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - A `company_id` is a unique identifier for
   *   a particular seller account.
   * @param {string} arg.applicationId - A `application_id` is a unique
   *   identifier for a particular sale channel.
   * @param {number} [arg.departmentId] - A `department_id` is a unique
   *   identifier for a particular department.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search query with brand name.Use this parameter
   *   to search brands by brand name.
   * @summary: List all the brands for the application
   * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
   */
  getApplicationCategoryListingPaginator({
    companyId,
    applicationId,
    departmentId,
    pageSize,
    q,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getApplicationCategoryListing({
        companyId: companyId,
        applicationId: applicationId,
        departmentId: departmentId,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.categoryUid - Category id for which the custom_json
   *   is associated.
   * @param {ApplicationCategoryJson} arg.body
   * @summary: Update a single custom json.
   * @description: This API helps to update data associated to a item custom meta.
   */
  updateAppCategory({ categoryUid, body } = {}) {
    const { error } = CatalogValidator.updateAppCategory().validate(
      {
        categoryUid,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/category/${categoryUid}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search query with brand name.Use this parameter
   *   to search department by name.
   * @summary: List all the departments for the application
   * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the application departments. If successful, returns the list of departments specified in `ApplicationDepartmentListingResponse`
   */
  getApplicationDepartmentListing({ pageNo, pageSize, q } = {}) {
    const {
      error,
    } = CatalogValidator.getApplicationDepartmentListing().validate(
      {
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/department`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - A `company_id` is a unique identifier for
   *   a particular seller account.
   * @param {string} arg.applicationId - A `application_id` is a unique
   *   identifier for a particular sale channel.
   * @param {number} [arg.pageSize] - Number of items to retrieve in each
   *   page. Default is 12.
   * @param {string} [arg.q] - Search query with brand name.Use this parameter
   *   to search department by name.
   * @summary: List all the departments for the application
   * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the application departments. If successful, returns the list of departments specified in `ApplicationDepartmentListingResponse`
   */
  getApplicationDepartmentListingPaginator({
    companyId,
    applicationId,
    pageSize,
    q,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getApplicationDepartmentListing({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.departmentUid - Department id for which the
   *   custom_json is associated.
   * @param {ApplicationDepartmentJson} arg.body
   * @summary: Update a single custom json.
   * @description: This API helps to update data associated to a item custom meta.
   */
  updateAppDepartment({ departmentUid, body } = {}) {
    const { error } = CatalogValidator.updateAppDepartment().validate(
      {
        departmentUid,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/department/${departmentUid}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.storeUid - Store id for which the custom_json is associated.
   * @param {ApplicationStoreJson} arg.body
   * @summary: Update a single custom json.
   * @description: This API helps to update data associated to a item custom meta.
   */
  updateAppLocation({ storeUid, body } = {}) {
    const { error } = CatalogValidator.updateAppLocation().validate(
      {
        storeUid,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/store/${storeUid}`,
      query_params,
      body
    );
  }
}

class FileStorage {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Bucket name
   * @param {StartRequest} arg.body
   * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
   * @description: Uploads an arbitrarily sized buffer or blob.
   *
   * It has three Major Steps:
   * Start
   * Upload
   * Complete
   *
   * ### Start
   * Initiates the assets upload using `appStartUpload`.
   * It returns the storage link in response.
   *
   * ### Upload
   * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
   * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
   *
   * ### Complete
   * After successfully upload, call `appCompleteUpload` api to complete the upload process.
   * This operation will return the url for the uploaded file.
   */
  appStartUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.appStartUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/upload/start/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Bucket name
   * @param {StartResponse} arg.body
   * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
   * @description: Uploads an arbitrarily sized buffer or blob.
   *
   * It has three Major Steps:
   * Start
   * Upload
   * Complete
   *
   * ### Start
   * Initiates the assets upload using `appStartUpload`.
   * It returns the storage link in response.
   *
   * ### Upload
   * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
   * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
   *
   * ### Complete
   * After successfully upload, call `appCompleteUpload` api to complete the upload process.
   * This operation will return the url for the uploaded file.
   */
  appCompleteUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.appCompleteUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/upload/complete/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.sync] - Sync
   * @param {BulkRequest} arg.body
   * @summary: Copy Files
   * @description: Copy Files
   */
  appCopyFiles({ body, sync } = {}) {
    const { error } = FileStorageValidator.appCopyFiles().validate(
      {
        body,
        sync,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["sync"] = sync;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/uploads/copy/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Bucket name
   * @param {number} [arg.pageNo] - Page no
   * @summary: Browse Files
   * @description: Browse Files
   */
  browse({ namespace, pageNo } = {}) {
    const { error } = FileStorageValidator.browse().validate(
      {
        namespace,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/browse/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Bucket name
   * @param {number} arg.companyId - Company_id
   * @param {number} arg.applicationId - Application_id
   * @summary: Browse Files
   * @description: Browse Files
   */
  browsePaginator({ namespace, companyId, applicationId } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.browse({
        namespace: namespace,
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }
}

class Share {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ShortLinkReq} arg.body
   * @summary: Create short link
   * @description: Create short link
   */
  createShortLink({ body } = {}) {
    const { error } = ShareValidator.createShortLink().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page number
   * @param {number} [arg.pageSize] - Current page size
   * @param {string} [arg.createdBy] - Short link creator
   * @param {string} [arg.active] - Short link active status
   * @param {string} [arg.q] - Search text for original and short url
   * @summary: Get short links
   * @description: Get short links
   */
  getShortLinks({ pageNo, pageSize, createdBy, active, q } = {}) {
    const { error } = ShareValidator.getShortLinks().validate(
      {
        pageNo,
        pageSize,
        createdBy,
        active,
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["created_by"] = createdBy;
    query_params["active"] = active;
    query_params["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company Id
   * @param {string} arg.applicationId - Application Id
   * @param {number} [arg.pageSize] - Current page size
   * @param {string} [arg.createdBy] - Short link creator
   * @param {string} [arg.active] - Short link active status
   * @param {string} [arg.q] - Search text for original and short url
   * @summary: Get short links
   * @description: Get short links
   */
  getShortLinksPaginator({
    companyId,
    applicationId,
    pageSize,
    createdBy,
    active,
    q,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getShortLinks({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        createdBy: createdBy,
        active: active,
        q: q,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.hash - Hash of short url
   * @summary: Get short link by hash
   * @description: Get short link by hash
   */
  getShortLinkByHash({ hash } = {}) {
    const { error } = ShareValidator.getShortLinkByHash().validate(
      {
        hash,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/${hash}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Short link document identifier
   * @param {ShortLinkReq} arg.body
   * @summary: Update short link by id
   * @description: Update short link by id
   */
  updateShortLinkById({ id, body } = {}) {
    const { error } = ShareValidator.updateShortLinkById().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/${id}/`,
      query_params,
      body
    );
  }
}

class Configuration {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.platformType - Current platform name
   * @summary: Get latest build config
   * @description: Get latest build config
   */
  getBuildConfig({ platformType } = {}) {
    const { error } = ConfigurationValidator.getBuildConfig().validate(
      {
        platformType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/build/${platformType}/configuration`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.platformType - Current platform name
   * @param {MobileAppConfigRequest} arg.body
   * @summary: Update build config for next build
   * @description: Update build config for next build
   */
  updateBuildConfig({ platformType, body } = {}) {
    const { error } = ConfigurationValidator.updateBuildConfig().validate(
      {
        platformType,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/build/${platformType}/configuration`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.platformType - Current platform name
   * @summary: Get previous build versions
   * @description: Get previous build versions
   */
  getPreviousVersions({ platformType } = {}) {
    const { error } = ConfigurationValidator.getPreviousVersions().validate(
      {
        platformType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/build/${platformType}/versions`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get features of application
   * @description: Get features of application
   */
  getAppFeatures({} = {}) {
    const { error } = ConfigurationValidator.getAppFeatures().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/feature`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AppFeatureRequest} arg.body
   * @summary: Update features of application
   * @description: Update features of application
   */
  updateAppFeatures({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppFeatures().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/feature`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get basic application details
   * @description: Get basic application details like name
   */
  getAppBasicDetails({} = {}) {
    const { error } = ConfigurationValidator.getAppBasicDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/detail`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ApplicationDetail} arg.body
   * @summary: Add or update application's basic details
   * @description: Add or update application's basic details
   */
  updateAppBasicDetails({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppBasicDetails().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/detail`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get application information
   * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
   */
  getAppContactInfo({} = {}) {
    const { error } = ConfigurationValidator.getAppContactInfo().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/information`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ApplicationInformation} arg.body
   * @summary: Get application information
   * @description: Save Application Current Information. This includes information about social links, address and contact information of an application.
   */
  updateAppContactInfo({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppContactInfo().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/information`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get social tokens
   * @description: Get social tokens.
   */
  getAppApiTokens({} = {}) {
    const { error } = ConfigurationValidator.getAppApiTokens().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/token`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {TokenResponse} arg.body
   * @summary: Add social tokens
   * @description: Add social tokens.
   */
  updateAppApiTokens({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppApiTokens().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/token`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.uid] - Uid of companies to be fetched
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @summary: Application inventory enabled companies
   * @description: Application inventory enabled companies.
   */
  getAppCompanies({ uid, pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getAppCompanies().validate(
      {
        uid,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["uid"] = uid;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/companies`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current application id
   * @param {number} [arg.uid] - Uid of companies to be fetched
   * @param {number} [arg.pageSize] - Current request items count
   * @summary: Application inventory enabled companies
   * @description: Application inventory enabled companies.
   */
  getAppCompaniesPaginator({ companyId, applicationId, uid, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAppCompanies({
        companyId: companyId,
        applicationId: applicationId,
        uid: uid,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @summary: Application inventory enabled stores
   * @description: Application inventory enabled stores.
   */
  getAppStores({ pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getAppStores().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stores`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current application id
   * @param {number} [arg.pageSize] - Current request items count
   * @summary: Application inventory enabled stores
   * @description: Application inventory enabled stores.
   */
  getAppStoresPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAppStores({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get application configuration
   * @description: Get application configuration for various features and data
   */
  getInventoryConfig({} = {}) {
    const { error } = ConfigurationValidator.getInventoryConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ApplicationInventory} arg.body
   * @summary: Update application configuration
   * @description: Update application configuration for various features and data
   */
  updateInventoryConfig({ body } = {}) {
    const { error } = ConfigurationValidator.updateInventoryConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AppInventoryPartialUpdate} arg.body
   * @summary: Partially update application configuration
   * @description: Partially update application configuration for various features and data
   */
  partiallyUpdateInventoryConfig({ body } = {}) {
    const {
      error,
    } = ConfigurationValidator.partiallyUpdateInventoryConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get application enabled currency list
   * @description: Get application enabled currency list
   */
  getAppCurrencyConfig({} = {}) {
    const { error } = ConfigurationValidator.getAppCurrencyConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/currency`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {AppSupportedCurrency} arg.body
   * @summary: Add initial application supported currency
   * @description: Add initial application supported currency for various features and data. Default INR will be enabled.
   */
  updateAppCurrencyConfig({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppCurrencyConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/currency`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get currencies enabled in the application
   * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
   */
  getAppSupportedCurrency({} = {}) {
    const { error } = ConfigurationValidator.getAppSupportedCurrency().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/currency/supported`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {FilterOrderingStoreRequest} arg.body
   * @summary: Get ordering store by filter
   * @description: Get ordering store by filter
   */
  getOrderingStoresByFilter({ body, pageNo, pageSize } = {}) {
    const {
      error,
    } = ConfigurationValidator.getOrderingStoresByFilter().validate(
      {
        body,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ordering-store/stores/filter`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {FilterOrderingStoreRequest} arg.body
   * @summary: Get ordering store by filter
   * @description: Get ordering store by filter
   */
  getOrderingStoresByFilterPaginator({
    companyId,
    applicationId,
    pageSize,
    body,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getOrderingStoresByFilter({
        companyId: companyId,
        applicationId: applicationId,
        body: body,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OrderingStoreConfig} arg.body
   * @summary: Add/Update ordering store config
   * @description: Add/Update ordering store config.
   */
  updateOrderingStoreConfig({ body } = {}) {
    const {
      error,
    } = ConfigurationValidator.updateOrderingStoreConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ordering-store`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {string} [arg.q] - Store code or name of the ordering store.
   * @summary: Get deployment stores
   * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
   */
  getStaffOrderingStores({ pageNo, pageSize, q } = {}) {
    const { error } = ConfigurationValidator.getStaffOrderingStores().validate(
      {
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ordering-store/staff-stores`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current application id
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {string} [arg.q] - Store code or name of the ordering store.
   * @summary: Get deployment stores
   * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
   */
  getStaffOrderingStoresPaginator({
    companyId,
    applicationId,
    pageSize,
    q,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getStaffOrderingStores({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get attached domain list
   * @description: Get attached domain list.
   */
  getDomains({} = {}) {
    const { error } = ConfigurationValidator.getDomains().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DomainAddRequest} arg.body
   * @summary: Add new domain to application
   * @description: Add new domain to application.
   */
  addDomain({ body } = {}) {
    const { error } = ConfigurationValidator.addDomain().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Domain _id
   * @summary: Remove attached domain
   * @description: Remove attached domain.
   */
  removeDomainById({ id } = {}) {
    const { error } = ConfigurationValidator.removeDomainById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {UpdateDomainTypeRequest} arg.body
   * @summary: Change domain type
   * @description: Change a domain to Primary or Shortlink domain
   */
  changeDomainType({ body } = {}) {
    const { error } = ConfigurationValidator.changeDomainType().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain/set-domain`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DomainStatusRequest} arg.body
   * @summary: Get domain connected status.
   * @description: Get domain connected status. Check if domain is live and mapped to appropriate IP to fynd servers.
   */
  getDomainStatus({ body } = {}) {
    const { error } = ConfigurationValidator.getDomainStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain/domain-status`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get application data from id
   * @description: Get application data from id
   */
  getApplicationById({} = {}) {
    const { error } = ConfigurationValidator.getApplicationById().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}`,
      query_params,
      undefined
    );
  }
}

class Cart {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.isArchived] -
   * @param {string} [arg.title] -
   * @param {boolean} [arg.isPublic] -
   * @param {boolean} [arg.isDisplay] -
   * @param {string} [arg.typeSlug] -
   * @param {string} [arg.code] -
   * @summary: Get with single coupon details or coupon list
   * @description: Get coupon list with pagination
   */
  getCoupons({
    pageNo,
    pageSize,
    isArchived,
    title,
    isPublic,
    isDisplay,
    typeSlug,
    code,
  } = {}) {
    const { error } = CartValidator.getCoupons().validate(
      {
        pageNo,
        pageSize,
        isArchived,
        title,
        isPublic,
        isDisplay,
        typeSlug,
        code,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_archived"] = isArchived;
    query_params["title"] = title;
    query_params["is_public"] = isPublic;
    query_params["is_display"] = isDisplay;
    query_params["type_slug"] = typeSlug;
    query_params["code"] = code;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current Application _id
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.isArchived] -
   * @param {string} [arg.title] -
   * @param {boolean} [arg.isPublic] -
   * @param {boolean} [arg.isDisplay] -
   * @param {string} [arg.typeSlug] -
   * @param {string} [arg.code] -
   * @summary: Get with single coupon details or coupon list
   * @description: Get coupon list with pagination
   */
  getCouponsPaginator({
    companyId,
    applicationId,
    pageSize,
    isArchived,
    title,
    isPublic,
    isDisplay,
    typeSlug,
    code,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCoupons({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        isArchived: isArchived,
        title: title,
        isPublic: isPublic,
        isDisplay: isDisplay,
        typeSlug: typeSlug,
        code: code,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CouponAdd} arg.body
   * @summary: Create new coupon
   * @description: Create new coupon
   */
  createCoupon({ body } = {}) {
    const { error } = CartValidator.createCoupon().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @summary: Get with single coupon details or coupon list
   * @description: Get single coupon details with `id` in path param
   */
  getCouponById({ id } = {}) {
    const { error } = CartValidator.getCouponById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @param {CouponUpdate} arg.body
   * @summary: Update existing coupon configuration
   * @description: Update coupon with id sent in `id`
   */
  updateCoupon({ id, body } = {}) {
    const { error } = CartValidator.updateCoupon().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @param {CouponPartialUpdate} arg.body
   * @summary: Update coupon archive state and schedule
   * @description: Update archive/unarchive and change schedule for coupon
   */
  updateCouponPartially({ id, body } = {}) {
    const { error } = CartValidator.updateCouponPartially().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.q] -
   * @param {string} [arg.status] -
   * @param {string} [arg.promoGroup] -
   * @param {string} [arg.promotionType] -
   * @param {string} [arg.fpPanel] -
   * @param {string} [arg.promotionId] -
   * @summary: Get promotion list
   * @description: Get promotion list with pagination
   */
  getPromotions({
    pageNo,
    pageSize,
    q,
    status,
    promoGroup,
    promotionType,
    fpPanel,
    promotionId,
  } = {}) {
    const { error } = CartValidator.getPromotions().validate(
      {
        pageNo,
        pageSize,
        q,
        status,
        promoGroup,
        promotionType,
        fpPanel,
        promotionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["status"] = status;
    query_params["promo_group"] = promoGroup;
    query_params["promotion_type"] = promotionType;
    query_params["fp_panel"] = fpPanel;
    query_params["promotion_id"] = promotionId;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promotion`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current Application _id
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.q] -
   * @param {string} [arg.status] -
   * @param {string} [arg.promoGroup] -
   * @param {string} [arg.promotionType] -
   * @param {string} [arg.fpPanel] -
   * @param {string} [arg.promotionId] -
   * @summary: Get promotion list
   * @description: Get promotion list with pagination
   */
  getPromotionsPaginator({
    companyId,
    applicationId,
    pageSize,
    q,
    status,
    promoGroup,
    promotionType,
    fpPanel,
    promotionId,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getPromotions({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        status: status,
        promoGroup: promoGroup,
        promotionType: promotionType,
        fpPanel: fpPanel,
        promotionId: promotionId,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PromotionAdd} arg.body
   * @summary: Create new promotion
   * @description: Create new promotion
   */
  createPromotion({ body } = {}) {
    const { error } = CartValidator.createPromotion().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promotion`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @summary: Get with single promotion details or promotion list
   * @description: Get single promotion details with `id` in path param
   */
  getPromotionById({ id } = {}) {
    const { error } = CartValidator.getPromotionById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promotion/${id}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @param {PromotionUpdate} arg.body
   * @summary: Update existing promotion configuration
   * @description: Update promotion with id sent in `id`
   */
  updatePromotion({ id, body } = {}) {
    const { error } = CartValidator.updatePromotion().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promotion/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id -
   * @param {PromotionPartialUpdate} arg.body
   * @summary: Update promotion publish state and schedule
   * @description: Update publish/unpublish and change schedule for promotion
   */
  updatePromotionPartially({ id, body } = {}) {
    const { error } = CartValidator.updatePromotionPartially().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promotion/${id}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Fetch all promos that are set as active
   * @description: Use this API to get list of all the active promos/coupons.
   */
  getPromosCouponConfig({} = {}) {
    const { error } = CartValidator.getPromosCouponConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/promo-coupons`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OpenapiCartDetailsRequest} arg.body
   * @summary: Fetch Cart Details
   * @description: Get all the details of cart for a list of provided `cart_items`
   */
  fetchAndvalidateCartItems({ body } = {}) {
    const { error } = CartValidator.fetchAndvalidateCartItems().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/validate`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OpenApiCartServiceabilityRequest} arg.body
   * @summary: Check Pincode Serviceability
   * @description: Check Pincode serviceability for cart items provided in `cart_items` and address pincode in `shipping_address`
   */
  checkCartServiceability({ body } = {}) {
    const { error } = CartValidator.checkCartServiceability().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/serviceability`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OpenApiPlatformCheckoutReq} arg.body
   * @summary: Create Fynd order with cart details
   * @description: Generate Fynd order for cart details send with provided `cart_items`
   */
  checkoutCart({ body } = {}) {
    const { error } = CartValidator.checkoutCart().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/checkout`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {boolean} [arg.anonymousCart] -
   * @param {string} [arg.lastId] -
   * @param {string} [arg.sortOn] -
   * @summary: Get with abandoned cart list
   * @description: Get abandoned cart list with pagination
   */
  getAbandonedCart({
    pageNo,
    pageSize,
    fromDate,
    toDate,
    anonymousCart,
    lastId,
    sortOn,
  } = {}) {
    const { error } = CartValidator.getAbandonedCart().validate(
      {
        pageNo,
        pageSize,
        fromDate,
        toDate,
        anonymousCart,
        lastId,
        sortOn,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["from_date"] = fromDate;
    query_params["to_date"] = toDate;
    query_params["anonymous_cart"] = anonymousCart;
    query_params["last_id"] = lastId;
    query_params["sort_on"] = sortOn;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/abandoned/carts`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current Application _id
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.fromDate] -
   * @param {string} [arg.toDate] -
   * @param {boolean} [arg.anonymousCart] -
   * @param {string} [arg.lastId] -
   * @param {string} [arg.sortOn] -
   * @summary: Get with abandoned cart list
   * @description: Get abandoned cart list with pagination
   */
  getAbandonedCartPaginator({
    companyId,
    applicationId,
    pageSize,
    fromDate,
    toDate,
    anonymousCart,
    lastId,
    sortOn,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAbandonedCart({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
        pageSize: pageSize,
        fromDate: fromDate,
        toDate: toDate,
        anonymousCart: anonymousCart,
        lastId: lastId,
        sortOn: sortOn,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.cartId - Current Cart _id
   * @param {boolean} [arg.b] -
   * @param {AddCartRequest} arg.body
   * @summary: Add items to abandoned cart
   * @description: Use this API to add items to the abandoned cart.
   */
  addItems({ cartId, body, b } = {}) {
    const { error } = CartValidator.addItems().validate(
      {
        cartId,
        body,
        b,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["b"] = b;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/abandoned/carts/${cartId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.cartId - Current Cart _id
   * @param {boolean} [arg.b] -
   * @param {UpdateCartRequest} arg.body
   * @summary: Update items in the abandoned cart
   * @description: <p>Use this API to update items added to the cart with the help of a request object containing attributes like item_quantity and item_size. These attributes will be fetched from the following APIs</p> <ul> <li><font color="monochrome">operation</font> Operation for current api call. <b>update_item</b> for update items. <b>remove_item</b> for removing items.</li> <li> <font color="monochrome">item_id</font>  "/platform/content/v1/products/"</li> <li> <font color="monochrome">item_size</font>   "/platform/content/v1/products/:slug/sizes/"</li> <li> <font color="monochrome">quantity</font>  item quantity (must be greater than or equal to 1)</li> <li> <font color="monochrome">article_id</font>   "/content​/v1​/products​/:identifier​/sizes​/price​/"</li> <li> <font color="monochrome">item_index</font>  item position in the cart (must be greater than or equal to 0)</li> </ul>
   */
  updateCart({ cartId, body, b } = {}) {
    const { error } = CartValidator.updateCart().validate(
      {
        cartId,
        body,
        b,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["b"] = b;

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/abandoned/carts/${cartId}`,
      query_params,
      body
    );
  }
}

class Rewards {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.pageId] - Pagination page id
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: List of giveaways of the current application.
   * @description: List of giveaways of the current application.
   */
  getGiveaways({ pageId, pageSize } = {}) {
    const { error } = RewardsValidator.getGiveaways().validate(
      {
        pageId,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {number} [arg.pageSize] - Pagination page size
   * @summary: List of giveaways of the current application.
   * @description: List of giveaways of the current application.
   */
  getGiveawaysPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getGiveaways({
        companyId: companyId,
        applicationId: applicationId,
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {Giveaway} arg.body
   * @summary: Adds a new giveaway.
   * @description: Adds a new giveaway.
   */
  createGiveaway({ body } = {}) {
    const { error } = RewardsValidator.createGiveaway().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Giveaway ID
   * @summary: Get giveaway by ID.
   * @description: Get giveaway by ID.
   */
  getGiveawayByID({ id } = {}) {
    const { error } = RewardsValidator.getGiveawayByID().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/${id}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Giveaway ID
   * @param {Giveaway} arg.body
   * @summary: Updates the giveaway by it's ID.
   * @description: Updates the giveaway by it's ID.
   */
  updateGiveaway({ id, body } = {}) {
    const { error } = RewardsValidator.updateGiveaway().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/${id}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: List of offer of the current application.
   * @description: List of offer of the current application.
   */
  getOffers({} = {}) {
    const { error } = RewardsValidator.getOffers().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/offers/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.cookie - User's session cookie. This cookie is set in
   *   browser cookie when logged-in to fynd's authentication system i.e.
   *   `Grimlock` or by using grimlock-backend SDK for backend implementation.
   * @param {string} arg.name - Offer name
   * @summary: Get offer by name.
   * @description: Get offer by name.
   */
  getOfferByName({ cookie, name } = {}) {
    const { error } = RewardsValidator.getOfferByName().validate(
      {
        cookie,
        name,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/offers/${name}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.name - Offer name
   * @param {Offer} arg.body
   * @summary: Updates the offer by name.
   * @description: Updates the offer by name.
   */
  updateOfferByName({ name, body } = {}) {
    const { error } = RewardsValidator.updateOfferByName().validate(
      {
        name,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/offers/${name}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.userId - User id
   * @summary: User's reward details.
   * @description: User's reward details.
   */
  getUserAvailablePoints({ userId } = {}) {
    const { error } = RewardsValidator.getUserAvailablePoints().validate(
      {
        userId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/users/${userId}/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.userId - User id
   * @param {AppUser} arg.body
   * @summary: Update User status
   * @description: Update user status, active/archive
   */
  updateUserStatus({ userId, body } = {}) {
    const { error } = RewardsValidator.updateUserStatus().validate(
      {
        userId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/users/${userId}/`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.userId - User id
   * @param {string} [arg.pageId] - PageID is the ID of the requested page.
   *   For first request it should be kept empty.
   * @param {number} [arg.pageLimit] - PageLimit is the number of requested
   *   items in response.
   * @param {number} [arg.pageSize] - PageSize is the number of requested
   *   items in response.
   * @summary: Get list of points transactions.
   * @description: Get list of points transactions.
   * The list of points history is paginated.
   */
  getUserPointsHistory({ userId, pageId, pageLimit, pageSize } = {}) {
    const { error } = RewardsValidator.getUserPointsHistory().validate(
      {
        userId,
        pageId,
        pageLimit,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_limit"] = pageLimit;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/users/${userId}/points/history/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company id
   * @param {string} arg.applicationId - Application id
   * @param {string} arg.userId - User id
   * @param {number} [arg.pageSize] - PageSize is the number of requested
   *   items in response.
   * @summary: Get list of points transactions.
   * @description: Get list of points transactions.
   * The list of points history is paginated.
   */
  getUserPointsHistoryPaginator({
    companyId,
    applicationId,
    userId,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getUserPointsHistory({
        companyId: companyId,
        applicationId: applicationId,
        userId: userId,
        pageId: pageId,
        pageLimit: pageLimit,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }
}

class Analytics {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get statistics groups
   * @description: Get statistics groups
   */
  getStatiscticsGroups({} = {}) {
    const { error } = AnalyticsValidator.getStatiscticsGroups().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/group`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.groupName - Group name
   * @summary: Get statistics group components
   * @description: Get statistics group components
   */
  getStatiscticsGroupComponents({ groupName } = {}) {
    const {
      error,
    } = AnalyticsValidator.getStatiscticsGroupComponents().validate(
      {
        groupName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/group/${groupName}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.componentName - Component name
   * @summary: Get component statistics csv
   * @description: Get component statistics csv
   */
  getComponentStatsCSV({ componentName } = {}) {
    const { error } = AnalyticsValidator.getComponentStatsCSV().validate(
      {
        componentName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/component/{component_name}.csv`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.componentName - Component name
   * @summary: Get component statistics pdf
   * @description: Get component statistics pdf
   */
  getComponentStatsPDF({ componentName } = {}) {
    const { error } = AnalyticsValidator.getComponentStatsPDF().validate(
      {
        componentName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/component/{component_name}.pdf`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.componentName - Component name
   * @summary: Get component statistics
   * @description: Get component statistics
   */
  getComponentStats({ componentName } = {}) {
    const { error } = AnalyticsValidator.getComponentStats().validate(
      {
        componentName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/component/${componentName}`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.fromDate - From date
   * @param {string} arg.toDate - To date
   * @param {number} [arg.pageNo] - Current page number
   * @param {number} [arg.pageSize] - Current page size
   * @summary: Get abandon carts list
   * @description: Get abandon carts list
   */
  getAbandonCartList({ fromDate, toDate, pageNo, pageSize } = {}) {
    const { error } = AnalyticsValidator.getAbandonCartList().validate(
      {
        fromDate,
        toDate,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/from/${fromDate}/to/${toDate}/abandon-cart/`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Company Id
   * @param {string} arg.applicationId - Application Id
   * @param {string} arg.fromDate - From date
   * @param {string} arg.toDate - To date
   * @param {number} [arg.pageSize] - Current page size
   * @summary: Get abandon carts list
   * @description: Get abandon carts list
   */
  getAbandonCartListPaginator({
    companyId,
    applicationId,
    fromDate,
    toDate,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAbandonCartList({
        companyId: companyId,
        applicationId: applicationId,
        fromDate: fromDate,
        toDate: toDate,
        pageNo: pageNo,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.fromDate - From date
   * @param {string} arg.toDate - To date
   * @summary: Get abandon carts csv
   * @description: Get abandon carts csv
   */
  getAbandonCartsCSV({ fromDate, toDate } = {}) {
    const { error } = AnalyticsValidator.getAbandonCartsCSV().validate(
      {
        fromDate,
        toDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/${fromDate}/to/${toDate}/abandon-cart.csv`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.cartId - Cart Id
   * @summary: Get abandon carts details
   * @description: Get abandon cart details
   */
  getAbandonCartDetail({ cartId } = {}) {
    const { error } = AnalyticsValidator.getAbandonCartDetail().validate(
      {
        cartId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/abandon-cart/${cartId}`,
      query_params,
      undefined
    );
  }
}

class Partner {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.extensionId - Extension id
   * @param {AddProxyReq} arg.body
   * @summary: Add proxy path for external url
   * @description: Add proxy path for external url
   */
  addProxyPath({ extensionId, body } = {}) {
    const { error } = PartnerValidator.addProxyPath().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/application/${this.applicationId}/proxy/${extensionId}`,
      query_params,
      body
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.extensionId - Extension id
   * @param {string} arg.attachedPath - Attachaed path slug
   * @summary: Remove proxy path for external url
   * @description: Remove proxy path for external url
   */
  removeProxyPath({ extensionId, attachedPath } = {}) {
    const { error } = PartnerValidator.removeProxyPath().validate(
      {
        extensionId,
        attachedPath,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/application/${this.applicationId}/proxy/${extensionId}/${attachedPath}`,
      query_params,
      undefined
    );
  }
}

class Serviceability {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Zone configuration of application.
   * @description: This API returns serviceability config of the application.
   */
  getApplicationServiceability({} = {}) {
    const {
      error,
    } = ServiceabilityValidator.getApplicationServiceability().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/serviceability`,
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetZoneFromPincodeViewRequest} arg.body
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View.
   */
  upsertZoneControllerView({ body } = {}) {
    const {
      error,
    } = ServiceabilityValidator.upsertZoneControllerView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/zones`,
      query_params,
      body
    );
  }
}

module.exports = PlatformApplicationClient;
