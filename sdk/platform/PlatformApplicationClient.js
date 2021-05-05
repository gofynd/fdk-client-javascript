const {
  LeadValidator,
  FeedbackValidator,
  ThemeValidator,
  UserValidator,
  ContentValidator,
  AssignmentValidator,
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
} = require("./PlatformApplicationModels");
const PlatformAPIClient = require("./PlatformAPIClient");
const Paginator = require("../common/Paginator");

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
    this.assignment = new Assignment(config, applicationId);
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
}

/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef Page
        
        
        @property { number } [item_total]
        
        @property { string } [next_id]
        
        @property { boolean } [has_previous]
        
        @property { boolean } [has_next]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } [size]
        
         
    */

/**
        @typedef TicketHistoryList
        
        
        @property { Array<TicketHistory> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */

/**
        @typedef CustomFormList
        
        
        @property { Array<CustomForm> } [docs]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [pages]
        
        @property { number } [total]
        
         
    */

/**
        @typedef CreateCustomFormPayload
        
        
        @property { string } slug
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [header_image]
        
        @property { boolean } [should_notify]
        
        @property { string } [success_message]
        
        @property { PollForAssignment } [poll_for_assignment]
        
         
    */

/**
        @typedef EditCustomFormPayload
        
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [header_image]
        
        @property { boolean } [should_notify]
        
        @property { boolean } [login_required]
        
        @property { string } [success_message]
        
        @property { PollForAssignment } [poll_for_assignment]
        
         
    */

/**
        @typedef EditTicketPayload
        
        
        @property { TicketContent } [content]
        
        @property { string } [category]
        
        @property { string } [sub_category]
        
        @property { string } [source]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { AgentChangePayload } [assigned_to]
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef AgentChangePayload
        
        
        @property { string } agent_id
        
         
    */

/**
        @typedef CreateVideoRoomResponse
        
        
        @property { string } unique_name
        
         
    */

/**
        @typedef CloseVideoRoomResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef CreateVideoRoomPayload
        
        
        @property { string } unique_name
        
        @property { Array<Object> } [notify]
        
         
    */

/**
        @typedef Filter
        
        
        @property { Array<Priority> } priorities
        
        @property { Array<TicketCategory> } [categories]
        
        @property { Array<Status> } statuses
        
        @property { Array<Object> } assignees
        
         
    */

/**
        @typedef TicketHistoryPayload
        
        
        @property { Object } value
        
        @property { string } type
        
         
    */

/**
        @typedef CustomFormSubmissionPayload
        
        
        @property { Array<KeyValue> } response
        
         
    */

/**
        @typedef KeyValue
        
        
        @property { string } key
        
        @property { string } value
        
         
    */

/**
        @typedef GetTokenForVideoRoomResponse
        
        
        @property { string } access_token
        
         
    */

/**
        @typedef GetParticipantsInsideVideoRoomResponse
        
        
        @property { Array<Participant> } participants
        
         
    */

/**
        @typedef Participant
        
        
        @property { UserSchema } [user]
        
        @property { string } [identity]
        
        @property { string } [status]
        
         
    */

/**
        @typedef PhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [country_code]
        
         
    */

/**
        @typedef Email
        
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef Debug
        
        
        @property { string } [source]
        
        @property { string } [platform]
        
         
    */

/**
        @typedef SubmitCustomFormResponse
        
        
        @property { Ticket } ticket
        
         
    */

/**
        @typedef TicketContext
        
        
        @property { string } [application_id]
        
        @property { string } company_id
        
         
    */

/**
        @typedef CreatedOn
        
        
        @property { string } user_agent
        
         
    */

/**
        @typedef TicketAsset
        
        
        @property { string } [display]
        
        @property { string } value
        
        @property { string } type
        
         
    */

/**
        @typedef TicketContent
        
        
        @property { string } title
        
        @property { string } [description]
        
        @property { Array<TicketAsset> } [attachments]
        
         
    */

/**
        @typedef AddTicketPayload
        
        
        @property { Object } [created_by]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { string } category
        
        @property { TicketContent } content
        
         
    */

/**
        @typedef Priority
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */

/**
        @typedef Status
        
        
        @property { string } key
        
        @property { string } display
        
        @property { string } color
        
         
    */

/**
        @typedef TicketCategory
        
        
        @property { string } key
        
        @property { string } display
        
        @property { CustomForm } [form]
        
        @property { Array<TicketSubCategory> } [sub_categories]
        
         
    */

/**
        @typedef TicketSubCategory
        
        
        @property { string } key
        
        @property { string } display
        
         
    */

/**
        @typedef SubmitButton
        
        
        @property { string } title
        
        @property { string } title_color
        
        @property { string } background_color
        
         
    */

/**
        @typedef PollForAssignment
        
        
        @property { number } duration
        
        @property { string } message
        
        @property { string } success_message
        
        @property { string } failure_message
        
         
    */

/**
        @typedef CustomForm
        
        
        @property { string } application_id
        
        @property { string } slug
        
        @property { string } [header_image]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { boolean } login_required
        
        @property { boolean } should_notify
        
        @property { string } [success_message]
        
        @property { SubmitButton } [submit_button]
        
        @property { Array<Object> } inputs
        
        @property { CreatedOn } [created_on]
        
        @property { Object } [created_by]
        
        @property { PollForAssignment } [poll_for_assignment]
        
        @property { string } _id
        
         
    */

/**
        @typedef TicketHistory
        
        
        @property { string } type
        
        @property { Object } value
        
        @property { string } ticket_id
        
        @property { CreatedOn } [created_on]
        
        @property { Object } [created_by]
        
        @property { string } _id
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */

/**
        @typedef Ticket
        
        
        @property { TicketContext } [context]
        
        @property { CreatedOn } [created_on]
        
        @property { string } [response_id]
        
        @property { TicketContent } [content]
        
        @property { string } ticket_id
        
        @property { TicketCategory } category
        
        @property { TicketSubCategory } [sub_category]
        
        @property { string } source
        
        @property { Status } status
        
        @property { Priority } priority
        
        @property { Object } [created_by]
        
        @property { Object } [assigned_to]
        
        @property { Array<string> } [tags]
        
        @property { Object } [_custom_json]
        
        @property { string } [_id]
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */

/**
        @typedef Activity
        
        
        @property { Object } [current_state]
        
        @property { string } [document_id]
        
        @property { Object } [previous_state]
        
         
    */

/**
        @typedef ActivityDump
        
        
        @property { Activity } [activity]
        
        @property { CreatedBy } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */

/**
        @typedef AddMediaListRequest
        
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
        @property { Array<AddMediaRequest> } [media_list]
        
        @property { string } [ref_id]
        
        @property { string } [ref_type]
        
         
    */

/**
        @typedef AddMediaRequest
        
        
        @property { string } [cloud_id]
        
        @property { string } [cloud_name]
        
        @property { string } [cloud_provider]
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
        @property { string } [media_url]
        
        @property { string } [ref_id]
        
        @property { string } [ref_type]
        
        @property { Array<string> } [tags]
        
        @property { string } [thumbnail_url]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ApproveRequest
        
        
        @property { boolean } [approve]
        
        @property { string } [entity_type]
        
        @property { string } id
        
        @property { string } [reason]
        
         
    */

/**
        @typedef Attribute
        
        
        @property { DateMeta } [date_meta]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<TagMeta> } [tags]
        
         
    */

/**
        @typedef AttributeObject
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } type
        
        @property { number } value
        
         
    */

/**
        @typedef CreatedBy
        
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { Array<TagMeta> } [tags]
        
         
    */

/**
        @typedef CursorGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef DateMeta
        
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef DeviceMeta
        
        
        @property { string } [app_version]
        
        @property { string } [platform]
        
         
    */

/**
        @typedef Entity
        
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */

/**
        @typedef EntityRequest
        
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
         
    */

/**
        @typedef FeedbackAttributes
        
        
        @property { Array<Attribute> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef FeedbackError
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
        @property { string } [request_id]
        
        @property { string } [stack_trace]
        
        @property { number } [status]
        
         
    */

/**
        @typedef FeedbackState
        
        
        @property { boolean } [active]
        
        @property { boolean } [archive]
        
        @property { string } [media]
        
        @property { boolean } [qna]
        
        @property { boolean } [rating]
        
        @property { boolean } [review]
        
         
    */

/**
        @typedef GetResponse
        
        
        @property { Object } [data]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef GetReviewResponse
        
        
        @property { Array<ReviewFacet> } [facets]
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
        @property { Array<SortMethod> } [sort]
        
         
    */

/**
        @typedef InsertResponse
        
        
        @property { number } [count]
        
         
    */

/**
        @typedef MediaMeta
        
        
        @property { number } [max_count]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */

/**
        @typedef MediaMetaRequest
        
        
        @property { number } max_count
        
        @property { number } size
        
         
    */

/**
        @typedef NumberGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PageCursor
        
        
        @property { number } [current]
        
        @property { boolean } [has_next]
        
        @property { boolean } [has_previous]
        
        @property { number } [item_total]
        
        @property { string } [next_id]
        
        @property { number } size
        
        @property { string } type
        
         
    */

/**
        @typedef PageNumber
        
        
        @property { number } [current]
        
        @property { boolean } [has_next]
        
        @property { number } [item_total]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Rating
        
        
        @property { Array<Attribute> } [attributes]
        
        @property { Array<string> } [attributes_slugs]
        
        @property { UI } [ui]
        
         
    */

/**
        @typedef RatingRequest
        
        
        @property { Array<string> } attributes
        
        @property { UI } [ui]
        
         
    */

/**
        @typedef ReportAbuseRequest
        
        
        @property { string } [description]
        
        @property { string } entity_id
        
        @property { string } entity_type
        
         
    */

/**
        @typedef Review
        
        
        @property { string } [description]
        
        @property { string } [header]
        
        @property { MediaMeta } [image_meta]
        
        @property { string } [title]
        
        @property { MediaMeta } [video_meta]
        
        @property { boolean } [vote_allowed]
        
         
    */

/**
        @typedef ReviewFacet
        
        
        @property { string } [display]
        
        @property { string } [name]
        
        @property { boolean } [selected]
        
        @property { string } [slug]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ReviewRequest
        
        
        @property { string } description
        
        @property { string } header
        
        @property { MediaMetaRequest } image_meta
        
        @property { boolean } is_vote_allowed
        
        @property { string } title
        
        @property { MediaMetaRequest } video_meta
        
         
    */

/**
        @typedef SaveAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } slug
        
         
    */

/**
        @typedef SortMethod
        
        
        @property { string } [name]
        
        @property { boolean } [selected]
        
        @property { string } [type]
        
         
    */

/**
        @typedef TagMeta
        
        
        @property { Array<MediaMeta> } [media]
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Template
        
        
        @property { DateMeta } [date_meta]
        
        @property { Entity } [entity]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { Rating } [rating]
        
        @property { Review } [review]
        
        @property { FeedbackState } [state]
        
        @property { Array<TagMeta> } [tags]
        
         
    */

/**
        @typedef TemplateGetResponse
        
        
        @property { Array<Template> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef TemplateRequest
        
        
        @property { boolean } active
        
        @property { string } [enable_media_type]
        
        @property { boolean } [enable_qna]
        
        @property { boolean } enable_rating
        
        @property { boolean } enable_review
        
        @property { EntityRequest } entity
        
        @property { RatingRequest } rating
        
        @property { ReviewRequest } review
        
         
    */

/**
        @typedef TemplateRequestList
        
        
        @property { Array<TemplateRequest> } template_list
        
         
    */

/**
        @typedef UI
        
        
        @property { Array<string> } [feedback_question]
        
        @property { UIIcon } [icon]
        
        @property { Array<string> } [text]
        
        @property { string } [type]
        
         
    */

/**
        @typedef UIIcon
        
        
        @property { string } [active]
        
        @property { string } [inactive]
        
        @property { Array<string> } [selected]
        
         
    */

/**
        @typedef UpdateAttributeRequest
        
        
        @property { string } [description]
        
        @property { string } name
        
        @property { string } [slug]
        
         
    */

/**
        @typedef UpdateResponse
        
        
        @property { number } [count]
        
         
    */

/**
        @typedef UpdateReviewRequest
        
        
        @property { boolean } [active]
        
        @property { string } [application]
        
        @property { boolean } [approve]
        
        @property { boolean } [archive]
        
        @property { Array<AttributeObject> } [attributes_rating]
        
        @property { string } [description]
        
        @property { DeviceMeta } [device_meta]
        
        @property { string } [entity_id]
        
        @property { string } [entity_type]
        
        @property { Array<MediaMeta> } [media_resource]
        
        @property { number } [rating]
        
        @property { string } [review_id]
        
        @property { string } [template_id]
        
        @property { string } [title]
        
         
    */

/**
        @typedef UpdateTemplateRequest
        
        
        @property { boolean } active
        
        @property { string } [enable_media_type]
        
        @property { boolean } [enable_qna]
        
        @property { boolean } enable_rating
        
        @property { boolean } enable_review
        
        @property { EntityRequest } entity
        
        @property { RatingRequest } rating
        
        @property { ReviewRequest } review
        
         
    */

/**
        @typedef UpdateTemplateStatusRequest
        
        
        @property { boolean } [active]
        
        @property { boolean } [archive]
        
         
    */

/**
        @typedef PaginationSchema
        
        
        @property { number } [size]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
        @property { string } [type]
        
        @property { number } [current]
        
         
    */

/**
        @typedef ThemesListingResponseSchema
        
        
        @property { Array<ThemesSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */

/**
        @typedef AddThemeRequestSchema
        
        
        @property { string } [theme_id]
        
         
    */

/**
        @typedef UpgradableThemeSchema
        
        
        @property { string } [parent_theme]
        
        @property { string } [applied_theme]
        
        @property { boolean } [upgrade]
        
         
    */

/**
        @typedef FontsSchema
        
        
        @property { FontsSchemaItems } [items]
        
        @property { string } [kind]
        
         
    */

/**
        @typedef BlitzkriegApiErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef BlitzkriegNotFoundSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef BlitzkriegInternalServerErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef FontsSchemaItems
        
        
        @property { string } [family]
        
        @property { Array<string> } [variants]
        
        @property { Array<string> } [subsets]
        
        @property { string } [version]
        
        @property { string } [last_modified]
        
        @property { FontsSchemaItemsFiles } [files]
        
        @property { string } [category]
        
        @property { string } [kind]
        
         
    */

/**
        @typedef FontsSchemaItemsFiles
        
        
        @property { string } [regular]
        
        @property { string } [italic]
        
        @property { string } [bold]
        
         
    */

/**
        @typedef ThemesSchema
        
        
        @property { string } [application]
        
        @property { boolean } [applied]
        
        @property { boolean } [customized]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [version]
        
        @property { string } [parent_theme_version]
        
        @property { string } [parent_theme]
        
        @property { Information } [information]
        
        @property { Array<string> } [tags]
        
        @property { Src } [src]
        
        @property { AssetsSchema } [assets]
        
        @property { AvailablePages } [available_pages]
        
        @property { Array<availableSectionSchema> } [available_sections]
        
        @property { Array<sectionSchema> } [sections]
        
        @property { Object } [constants]
        
        @property { Object } [styles]
        
        @property { Config } [config]
        
        @property { Object } [settings]
        
        @property { Font } [font]
        
        @property { string } [_id]
        
        @property { number } [__v]
        
        @property { Colors } [colors]
        
         
    */

/**
        @typedef pagesSchema
        
        
        @property { string } [text]
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { Sections } [sections]
        
         
    */

/**
        @typedef availableSectionSchema
        
        
        @property { Blocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
         
    */

/**
        @typedef sectionSchema
        
        
        @property { string } [page_key]
        
        @property { PageSections } [page_sections]
        
         
    */

/**
        @typedef Information
        
        
        @property { Images } [images]
        
        @property { Array<string> } [features]
        
        @property { string } [name]
        
        @property { string } [description]
        
         
    */

/**
        @typedef Images
        
        
        @property { Array<string> } [desktop]
        
        @property { Array<string> } [android]
        
        @property { Array<string> } [ios]
        
        @property { Array<string> } [thumbnail]
        
         
    */

/**
        @typedef Src
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef AssetsSchema
        
        
        @property { UmdJs } [umd_js]
        
        @property { CommonJs } [common_js]
        
        @property { Css } [css]
        
         
    */

/**
        @typedef UmdJs
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef CommonJs
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef Css
        
        
        @property { string } [link]
        
         
    */

/**
        @typedef AvailablePages
        
        
        @property { string } [path]
        
        @property { string } [type]
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { Seo } [seo]
        
        @property { Object } [props]
        
        @property { Sections } [sections]
        
         
    */

/**
        @typedef Seo
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */

/**
        @typedef Sections
        
        
        @property { string } [attributes]
        
         
    */

/**
        @typedef Config
        
        
        @property { Preset } [preset]
        
        @property { GlobalSchema } [global_schema]
        
        @property { string } [current]
        
        @property { ListSchema } [list]
        
         
    */

/**
        @typedef Preset
        
        
        @property { sectionSchema } [sections]
        
         
    */

/**
        @typedef GlobalSchema
        
        
        @property { Object } [props]
        
         
    */

/**
        @typedef ListSchema
        
        
        @property { Object } [global]
        
        @property { ConfigPage } [page]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Colors
        
        
        @property { string } [bg_color]
        
        @property { string } [primary_color]
        
        @property { string } [secondary_color]
        
        @property { string } [accent_color]
        
        @property { string } [link_color]
        
        @property { string } [button_secondary_color]
        
         
    */

/**
        @typedef Custom
        
        
        @property { Object } [props]
        
         
    */

/**
        @typedef ConfigPage
        
        
        @property { Object } [settings]
        
        @property { string } [page]
        
         
    */

/**
        @typedef Font
        
        
        @property { string } [family]
        
        @property { Variants } [variants]
        
         
    */

/**
        @typedef Variants
        
        
        @property { Medium } [medium]
        
        @property { SemiBold } [semi_bold]
        
        @property { Bold } [bold]
        
        @property { Light } [light]
        
        @property { Regular } [regular]
        
         
    */

/**
        @typedef Medium
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef SemiBold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Bold
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Light
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Regular
        
        
        @property { string } [name]
        
        @property { string } [file]
        
         
    */

/**
        @typedef Blocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { BlocksProps } [props]
        
         
    */

/**
        @typedef BlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */

/**
        @typedef PageSections
        
        
        @property { PageSectionsBlocks } [blocks]
        
        @property { string } [name]
        
        @property { string } [label]
        
        @property { Object } [props]
        
        @property { Object } [preset]
        
        @property { Predicate } [predicate]
        
         
    */

/**
        @typedef PageSectionsBlocks
        
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { PageSectionsBlocksProps } [props]
        
         
    */

/**
        @typedef PageSectionsBlocksProps
        
        
        @property { string } [id]
        
        @property { string } [label]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Predicate
        
        
        @property { Screen } [screen]
        
        @property { PredicateUserSchema } [user]
        
        @property { Route } [route]
        
         
    */

/**
        @typedef Screen
        
        
        @property { boolean } [mobile]
        
        @property { boolean } [desktop]
        
        @property { boolean } [tablet]
        
         
    */

/**
        @typedef PredicateUserSchema
        
        
        @property { boolean } [authenticated]
        
        @property { boolean } [anonymous]
        
         
    */

/**
        @typedef Route
        
        
        @property { string } [selected]
        
        @property { string } [exact_url]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef EditEmailRequestSchema
        
        
        @property { string } [email]
        
         
    */

/**
        @typedef SendVerificationLinkMobileRequestSchema
        
        
        @property { boolean } [verified]
        
        @property { boolean } [active]
        
        @property { string } [country_code]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */

/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [country_code]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [mobile]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profile_pic_url]
        
        @property { string } [android_hash]
        
        @property { string } [sender]
        
        @property { string } [register_token]
        
         
    */

/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [register_token]
        
         
    */

/**
        @typedef VerifyEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [register_token]
        
        @property { string } [otp]
        
         
    */

/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [request_id]
        
        @property { string } [register_token]
        
        @property { string } [otp]
        
         
    */

/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [android_hash]
        
        @property { string } [force]
        
        @property { string } [captcha_code]
        
         
    */

/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [old_password]
        
        @property { string } [new_password]
        
         
    */

/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { FormRegisterRequestSchemaPhone } [phone]
        
        @property { string } [register_token]
        
         
    */

/**
        @typedef TokenRequestBodySchema
        
        
        @property { string } [token]
        
         
    */

/**
        @typedef ForgotPasswordRequestSchema
        
        
        @property { string } [code]
        
        @property { string } [password]
        
         
    */

/**
        @typedef CodeRequestBodySchema
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef SendResetPasswordEmailRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [captcha_code]
        
         
    */

/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [captcha_code]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */

/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [country_code]
        
        @property { string } [captcha_code]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [is_signed_in]
        
        @property { OAuthRequestSchemaOauth2 } [oauth2]
        
        @property { OAuthRequestSchemaProfile } [profile]
        
         
    */

/**
        @typedef UserObjectSchema
        
        
        @property { UserSchema } [user]
        
         
    */

/**
        @typedef AuthSuccess
        
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
        @property { UserSchema } [user]
        
         
    */

/**
        @typedef SendOtpResponse
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { string } [email]
        
        @property { string } [resend_email_token]
        
        @property { string } [register_token]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { boolean } [user_exists]
        
         
    */

/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
        @property { string } [request_id]
        
        @property { string } [register_token]
        
         
    */

/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [user_exists]
        
         
    */

/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */

/**
        @typedef RegisterFormSuccess
        
        
        @property { string } [email]
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { string } [resend_email_token]
        
        @property { string } [register_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { boolean } [user_exists]
        
         
    */

/**
        @typedef VerifyEmailSuccess
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef HasPasswordSuccess
        
        
        @property { boolean } [result]
        
         
    */

/**
        @typedef LogoutSuccess
        
        
        @property { boolean } [logout]
        
         
    */

/**
        @typedef OtpSuccess
        
        
        @property { number } [resend_timer]
        
        @property { string } [resend_token]
        
        @property { string } [register_token]
        
        @property { boolean } [success]
        
        @property { string } [request_id]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef EmailOtpSuccess
        
        
        @property { string } [resend_token]
        
        @property { string } [register_token]
        
         
    */

/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */

/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verify_mobile_link]
        
         
    */

/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verify_email_link]
        
         
    */

/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verify_mobile_link]
        
         
    */

/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verify_email_link]
        
         
    */

/**
        @typedef UserSearchResponseSchema
        
        
        @property { Array<UserSchema> } [users]
        
         
    */

/**
        @typedef CustomerListResponseSchema
        
        
        @property { Array<UserSchema> } [items]
        
        @property { PaginationSchema } [page]
        
         
    */

/**
        @typedef UnauthorizedSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef UnauthenticatedSchema
        
        
        @property { boolean } [authenticated]
        
         
    */

/**
        @typedef NotFoundSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef AuthenticationApiErrorSchema
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef ProfileEditSuccessSchema
        
        
        @property { string } [email]
        
        @property { boolean } [verify_email_otp]
        
        @property { boolean } [verify_email_link]
        
        @property { boolean } [verify_mobile_otp]
        
        @property { string } [user]
        
        @property { string } [register_token]
        
        @property { boolean } [user_exists]
        
         
    */

/**
        @typedef FormRegisterRequestSchemaPhone
        
        
        @property { string } [country_code]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchemaOauth2
        
        
        @property { string } [access_token]
        
        @property { number } [expiry]
        
        @property { string } [refresh_token]
        
         
    */

/**
        @typedef OAuthRequestSchemaProfile
        
        
        @property { string } [last_name]
        
        @property { string } [image]
        
        @property { string } [id]
        
        @property { string } [email]
        
        @property { string } [full_name]
        
        @property { string } [first_name]
        
         
    */

/**
        @typedef AuthSuccessUser
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { AuthSuccessUserDebug } [debug]
        
        @property { boolean } [active]
        
        @property { AuthSuccessUserEmails } [emails]
        
         
    */

/**
        @typedef AuthSuccessUserDebug
        
        
        @property { string } [platform]
        
         
    */

/**
        @typedef AuthSuccessUserEmails
        
        
        @property { string } [email]
        
        @property { boolean } [verified]
        
        @property { boolean } [primary]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef PlatformSchema
        
        
        @property { string } [display]
        
        @property { LookAndFeel } [look_and_feel]
        
        @property { string } [updated_at]
        
        @property { boolean } [active]
        
        @property { boolean } [forgot_password]
        
        @property { Login } [login]
        
        @property { boolean } [skip_captcha]
        
        @property { string } [name]
        
        @property { MetaSchema } [meta]
        
        @property { string } [_id]
        
        @property { Social } [social]
        
        @property { RequiredFields } [required_fields]
        
        @property { RegisterRequiredFields } [register_required_fields]
        
        @property { boolean } [skip_login]
        
        @property { FlashCard } [flash_card]
        
        @property { string } [subtext]
        
        @property { SocialTokens } [social_tokens]
        
        @property { string } [created_at]
        
        @property { boolean } [register]
        
        @property { string } [mobile_image]
        
        @property { string } [desktop_image]
        
         
    */

/**
        @typedef LookAndFeel
        
        
        @property { string } [card_position]
        
        @property { string } [background_color]
        
         
    */

/**
        @typedef Login
        
        
        @property { boolean } [password]
        
        @property { boolean } [otp]
        
         
    */

/**
        @typedef MetaSchema
        
        
        @property { boolean } [fynd_default]
        
         
    */

/**
        @typedef Social
        
        
        @property { boolean } [account_kit]
        
        @property { boolean } [facebook]
        
        @property { boolean } [google]
        
         
    */

/**
        @typedef RequiredFields
        
        
        @property { Email } [email]
        
        @property { Mobile } [mobile]
        
         
    */

/**
        @typedef Mobile
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFields
        
        
        @property { RegisterRequiredFieldsEmail } [email]
        
        @property { RegisterRequiredFieldsMobile } [mobile]
        
         
    */

/**
        @typedef RegisterRequiredFieldsEmail
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFieldsMobile
        
        
        @property { boolean } [is_required]
        
        @property { string } [level]
        
         
    */

/**
        @typedef FlashCard
        
        
        @property { string } [text]
        
        @property { string } [text_color]
        
        @property { string } [background_color]
        
         
    */

/**
        @typedef SocialTokens
        
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [account_kit]
        
        @property { Google } [google]
        
         
    */

/**
        @typedef Facebook
        
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef Accountkit
        
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef Google
        
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef UserSchema
        
        
        @property { string } [first_name]
        
        @property { string } [last_name]
        
        @property { Array<PhoneNumber> } [phone_numbers]
        
        @property { Array<Email> } [emails]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { boolean } [active]
        
        @property { string } [profile_pic_url]
        
        @property { string } [username]
        
        @property { string } [account_type]
        
        @property { string } [uid]
        
        @property { Debug } [debug]
        
        @property { boolean } [has_old_password_hash]
        
        @property { string } [_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef ApplicationLegal
        
        
        @property { string } [application]
        
        @property { string } [tnc]
        
        @property { string } [policy]
        
        @property { string } [shipping]
        
        @property { Array<ApplicationLegalFAQ> } [faq]
        
        @property { string } [_id]
        
        @property { string } [updated_at]
        
        @property { string } [created_at]
        
         
    */

/**
        @typedef ApplicationLegalFAQ
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */

/**
        @typedef SeoComponent
        
        
        @property { SeoSchema } [seo]
        
         
    */

/**
        @typedef SeoSchema
        
        
        @property { string } [app]
        
        @property { string } [_id]
        
        @property { string } [robots_txt]
        
        @property { boolean } [sitemap_enabled]
        
        @property { Array<Object> } [custom_meta_tags]
        
        @property { Detail } [details]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef CustomMetaTag
        
        
        @property { string } [name]
        
        @property { string } [content]
        
        @property { string } [_id]
        
         
    */

/**
        @typedef Detail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */

/**
        @typedef StorefrontAnnouncement
        
        
        @property { AnnouncementSchema } [announcements]
        
        @property { number } [refresh_rate]
        
        @property { Array<string> } [refresh_pages]
        
         
    */

/**
        @typedef AnnouncementPageSchema
        
        
        @property { string } [page_slug]
        
        @property { string } [type]
        
         
    */

/**
        @typedef EditorMeta
        
        
        @property { string } [foreground_color]
        
        @property { string } [background_color]
        
        @property { string } [content_type]
        
        @property { string } [content]
        
         
    */

/**
        @typedef AnnouncementAuthorSchema
        
        
        @property { string } [created_by]
        
        @property { string } [modified_by]
        
         
    */

/**
        @typedef AdminAnnouncementSchema
        
        
        @property { string } [_id]
        
        @property { Array<string> } [platforms]
        
        @property { string } [title]
        
        @property { string } [announcement]
        
        @property { Array<AnnouncementPageSchema> } [pages]
        
        @property { EditorMeta } [editor_meta]
        
        @property { AnnouncementAuthorSchema } [author]
        
        @property { string } [created_at]
        
        @property { string } [app]
        
        @property { string } [modified_at]
        
        @property { ScheduleSchema } [_schedule]
        
         
    */

/**
        @typedef ScheduleSchema
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { Array<Object> } [next_schedule]
        
         
    */

/**
        @typedef NextSchedule
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef AnnouncementSchema
        
        
        @property { Array<Object> } [page_slug]
        
         
    */

/**
        @typedef announcementSchema
        
        
        @property { string } [announcement]
        
        @property { scheduleStartSchema } [schedule]
        
         
    */

/**
        @typedef scheduleStartSchema
        
        
        @property { string } [start]
        
         
    */

/**
        @typedef BlogGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ResourceContent
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Asset
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [id]
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef Author
        
        
        @property { string } [designation]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef BlogSchema
        
        
        @property { string } [_id]
        
        @property { Object } [_custom_json]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Author } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Asset } [feature_image]
        
        @property { boolean } [published]
        
        @property { string } [reading_time]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [_schedule]
        
        @property { string } [title]
        
        @property { DateMeta } [date_meta]
        
         
    */

/**
        @typedef SEO
        
        
        @property { string } [description]
        
        @property { SEOImage } [image]
        
        @property { string } [title]
        
         
    */

/**
        @typedef SEOImage
        
        
        @property { string } [url]
        
         
    */

/**
        @typedef BlogRequest
        
        
        @property { string } [application]
        
        @property { Object } [_custom_json]
        
        @property { Author } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Asset } [feature_image]
        
        @property { boolean } [published]
        
        @property { string } [reading_time]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [_schedule]
        
         
    */

/**
        @typedef GetAnnouncementListSchema
        
        
        @property { Array<AdminAnnouncementSchema> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CreateAnnouncementSchema
        
        
        @property { string } [message]
        
        @property { AdminAnnouncementSchema } [data]
        
         
    */

/**
        @typedef Navigation
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [orientation]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [_id]
        
        @property { string } [position]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { NavigationReference } [navigation]
        
         
    */

/**
        @typedef LocaleLanguage
        
        
        @property { Language } [hi]
        
        @property { Language } [ar]
        
        @property { Language } [en_us]
        
         
    */

/**
        @typedef Language
        
        
        @property { string } [display]
        
         
    */

/**
        @typedef Action
        
        
        @property { ActionPage } [page]
        
        @property { ActionPage } [popup]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ActionPage
        
        
        @property { Object } [params]
        
        @property { Object } [query]
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */

/**
        @typedef NavigationReference
        
        
        @property { Array<string> } [acl]
        
        @property { Array<string> } [tags]
        
        @property { LocaleLanguage } [_locale_language]
        
        @property { string } [image]
        
        @property { string } [type]
        
        @property { Action } [action]
        
        @property { boolean } [active]
        
        @property { string } [display]
        
        @property { number } [sort_order]
        
        @property { NavigationReference } [sub_navigation]
        
         
    */

/**
        @typedef LandingPage
        
        
        @property { LandingPageSchema } [data]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef ConfigurationSchema
        
        
        @property { number } [sleep_time]
        
        @property { boolean } [start_on_launch]
        
        @property { number } [duration]
        
        @property { string } [slide_direction]
        
         
    */

/**
        @typedef SlideshowMedia
        
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [bg_color]
        
        @property { number } [duration]
        
        @property { boolean } [auto_decide_duration]
        
        @property { Action } [action]
        
         
    */

/**
        @typedef Slideshow
        
        
        @property { SlideshowSchema } [data]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef AnnouncementsResponseSchema
        
        
        @property { Object } [announcements]
        
        @property { number } [refresh_rate]
        
        @property { Array<string> } [refresh_pages]
        
         
    */

/**
        @typedef AnnouncementDataSchema
        
        
        @property { string } [page_slug]
        
        @property { StorefrontAnnouncement } [announcement]
        
         
    */

/**
        @typedef FaqResponseSchema
        
        
        @property { Array<FAQ> } [faqs]
        
         
    */

/**
        @typedef UpdateHandpickedSchema
        
        
        @property { HandpickedTagSchema } [tag]
        
         
    */

/**
        @typedef HandpickedTagSchema
        
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [sub_type]
        
        @property { string } [content]
        
         
    */

/**
        @typedef RemoveHandpickedSchema
        
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef CreateTagSchema
        
        
        @property { string } [name]
        
        @property { string } [sub_type]
        
        @property { string } [_id]
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
    */

/**
        @typedef CreateTagRequestSchema
        
        
        @property { Array<CreateTagSchema> } [tags]
        
         
    */

/**
        @typedef APIError
        
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [request_id]
        
        @property { string } [stack_trace]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef CategorySchema
        
        
        @property { number } [index]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [title]
        
        @property { string } [application]
        
         
    */

/**
        @typedef ChildrenSchema
        
        
        @property { string } [question]
        
        @property { string } [answer]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [_id]
        
         
    */

/**
        @typedef CategoryRequestSchema
        
        
        @property { string } [slug]
        
        @property { string } [title]
        
         
    */

/**
        @typedef FAQCategorySchema
        
        
        @property { number } [index]
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { ChildrenSchema } [children]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [icon_url]
        
        @property { Object } [_custom_json]
        
         
    */

/**
        @typedef FaqSchema
        
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [_id]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */

/**
        @typedef FAQ
        
        
        @property { string } [slug]
        
        @property { string } [question]
        
        @property { string } [answer]
        
         
    */

/**
        @typedef CreateFaqResponseSchema
        
        
        @property { FaqSchema } [faq]
        
         
    */

/**
        @typedef CreateFaqSchema
        
        
        @property { FAQ } [faq]
        
         
    */

/**
        @typedef GetFaqSchema
        
        
        @property { Array<Object> } [faqs]
        
         
    */

/**
        @typedef UpdateFaqCategoryRequestSchema
        
        
        @property { CategorySchema } [category]
        
         
    */

/**
        @typedef CreateFaqCategoryRequestSchema
        
        
        @property { CategoryRequestSchema } [category]
        
         
    */

/**
        @typedef CreateFaqCategorySchema
        
        
        @property { CategorySchema } [category]
        
         
    */

/**
        @typedef GetFaqCategoriesSchema
        
        
        @property { Array<CategorySchema> } [categories]
        
         
    */

/**
        @typedef GetFaqCategoryBySlugSchema
        
        
        @property { FAQCategorySchema } [category]
        
         
    */

/**
        @typedef LandingPageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef LandingPageSchema
        
        
        @property { string } [slug]
        
        @property { Action } [action]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [_custom_json]
        
         
    */

/**
        @typedef DefaultNavigationResponse
        
        
        @property { Array<Object> } [items]
        
         
    */

/**
        @typedef NavigationGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef Orientation
        
        
        @property { Array<string> } [portrait]
        
        @property { Array<string> } [landscape]
        
         
    */

/**
        @typedef NavigationSchema
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { Orientation } [orientation]
        
        @property { number } [version]
        
        @property { NavigationReference } [navigation]
        
         
    */

/**
        @typedef NavigationRequest
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { Orientation } [orientation]
        
        @property { NavigationReference } [navigation]
        
         
    */

/**
        @typedef CustomPageSchema
        
        
        @property { string } [_id]
        
        @property { string } [platform]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [type]
        
        @property { string } [orientation]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { boolean } [published]
        
        @property { Array<string> } [tags]
        
        @property { Array<ContentSchema> } [content]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { ScheduleSchema } [_schedule]
        
         
    */

/**
        @typedef ContentSchema
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef CustomPage
        
        
        @property { CustomPageSchema } [data]
        
         
    */

/**
        @typedef CustomBlogSchema
        
        
        @property { string } [_id]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [reading_time]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { FeatureImage } [feature_image]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { Array<string> } [tags]
        
        @property { ContentSchema } [content]
        
        @property { Author } [author]
        
        @property { ScheduleSchema } [_schedule]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { Object } [_custom_json]
        
         
    */

/**
        @typedef FeatureImage
        
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef CustomBlog
        
        
        @property { CustomBlogSchema } [data]
        
         
    */

/**
        @typedef PageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PageSpec
        
        
        @property { Array<Object> } [specifications]
        
         
    */

/**
        @typedef PageSpecParam
        
        
        @property { string } [key]
        
        @property { boolean } [required]
        
         
    */

/**
        @typedef PageSpecItem
        
        
        @property { string } [page_type]
        
        @property { string } [display_name]
        
        @property { Array<PageSpecParam> } [params]
        
        @property { Array<PageSpecParam> } [query]
        
         
    */

/**
        @typedef PageSchema
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { Array<string> } [component_ids]
        
        @property { Array<PageContent> } [content]
        
        @property { CreatedBySchema } [created_by]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [description]
        
        @property { Asset } [feature_image]
        
        @property { Array<PageMeta> } [page_meta]
        
        @property { ScheduleSchema } [_schedule]
        
        @property { Object } [_custom_json]
        
        @property { string } [orientation]
        
        @property { string } [platform]
        
        @property { boolean } [published]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { SEO } [seo]
        
        @property { Object } [visibility]
        
         
    */

/**
        @typedef CreatedBySchema
        
        
        @property { string } [id]
        
         
    */

/**
        @typedef PageContent
        
        
        @property { string } [type]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef PageMeta
        
        
        @property { string } [key]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef PageRequest
        
        
        @property { CronSchedule } [_schedule]
        
        @property { string } [application]
        
        @property { Author } [author]
        
        @property { Object } [_custom_json]
        
        @property { string } [orientation]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Asset } [feature_image]
        
        @property { boolean } [published]
        
        @property { string } [reading_time]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { string } [title]
        
         
    */

/**
        @typedef CronSchedule
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
         
    */

/**
        @typedef PagePublishRequest
        
        
        @property { boolean } [publish]
        
         
    */

/**
        @typedef PageMetaSchema
        
        
        @property { Array<Object> } [system_pages]
        
        @property { Array<Object> } [custom_pages]
        
        @property { string } [application_id]
        
         
    */

/**
        @typedef SlideshowGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SlideshowSchema
        
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { DateMeta } [date_meta]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Array<SlideshowMedia> } [media]
        
        @property { boolean } [active]
        
        @property { boolean } [archived]
        
        @property { Object } [_custom_json]
        
         
    */

/**
        @typedef SlideshowRequest
        
        
        @property { string } [slug]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { SlideshowMedia } [media]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef Support
        
        
        @property { boolean } [created]
        
        @property { string } [_id]
        
        @property { string } [config_type]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { ContactSchema } [contact]
        
         
    */

/**
        @typedef PhoneProperties
        
        
        @property { string } [key]
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */

/**
        @typedef PhoneSchema
        
        
        @property { boolean } [active]
        
        @property { Array<PhoneProperties> } [phone]
        
         
    */

/**
        @typedef EmailProperties
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */

/**
        @typedef EmailSchema
        
        
        @property { boolean } [active]
        
        @property { Array<EmailProperties> } [email]
        
         
    */

/**
        @typedef ContactSchema
        
        
        @property { PhoneSchema } [phone]
        
        @property { EmailSchema } [email]
        
         
    */

/**
        @typedef TagsSchema
        
        
        @property { string } [application]
        
        @property { string } [_id]
        
        @property { Array<TagSchema> } [tags]
        
         
    */

/**
        @typedef TagSchema
        
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [sub_type]
        
        @property { string } [_id]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
    */

/**
        @typedef ErrorResponseSchema
        
        
        @property { string } [message]
        
        @property { number } [code]
        
         
    */

/**
        @typedef Success
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef CreatedModifiedByObject
        
        
        @property { string } [username]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef PickupPointResponse
        
        
        @property { Array<ItemProperties> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PickupPointSchema
        
        
        @property { Array<string> } [notification_emails]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { string } [code]
        
        @property { AddressObject } [address]
        
        @property { AdditionalContactsObject } [additional_contacts]
        
        @property { Array<AdditionalContactsObject> } [timing]
        
        @property { CreatedModifiedByObject } [created_by]
        
        @property { TimingObject } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef ItemProperties
        
        
        @property { Array<string> } [notification_emails]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { string } [code]
        
        @property { AddressObject } [address]
        
        @property { AdditionalContactsObject } [additional_contacts]
        
        @property { Array<AdditionalContactsObject> } [timing]
        
        @property { CreatedModifiedByObject } [created_by]
        
        @property { TimingObject } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef AddressObject
        
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef AdditionalContactsObject
        
        
        @property { number } [number]
        
        @property { number } [country_code]
        
         
    */

/**
        @typedef TimingObject
        
        
        @property { OpeningClosingObject } [opening]
        
        @property { OpeningClosingObject } [closing]
        
        @property { boolean } [open]
        
        @property { string } [weekday]
        
         
    */

/**
        @typedef OpeningClosingObject
        
        
        @property { string } [hour]
        
        @property { string } [minute]
        
         
    */

/**
        @typedef PickupResponse
        
        
        @property { Array<PickupResponseItems> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PickupConfiguration
        
        
        @property { boolean } [datetime_check]
        
        @property { string } [header]
        
        @property { string } [instruction_for_customer]
        
         
    */

/**
        @typedef PickupResponseItems
        
        
        @property { boolean } [datetime_check]
        
        @property { string } [header]
        
        @property { string } [instruction_for_customer]
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef ShippingSchema
        
        
        @property { AssignmentSchema } [assignment]
        
        @property { string } [_id]
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef ShippingResponse
        
        
        @property { ShippingSchema } [data]
        
        @property { string } [message]
        
         
    */

/**
        @typedef AssignmentSchema
        
        
        @property { FulfillmentPriorityObject } [fulfillment_priority]
        
        @property { string } [default_sort_strategy]
        
         
    */

/**
        @typedef FulfillmentPriorityObject
        
        
        @property { string } [priorities]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef StoreSchema
        
        
        @property { StoreAssignmentObject } [assignment]
        
        @property { string } [_id]
        
         
    */

/**
        @typedef StoreResponse
        
        
        @property { StoreSchema } [data]
        
        @property { string } [message]
        
         
    */

/**
        @typedef StoreAssignmentObject
        
        
        @property { StrategyObject } [strategy]
        
        @property { string } [assignment_type]
        
         
    */

/**
        @typedef StrategyObject
        
        
        @property { Array<StrategyItems> } [rules]
        
         
    */

/**
        @typedef StrategyItems
        
        
        @property { Array<string> } [product_tags]
        
        @property { string } [zone]
        
         
    */

/**
        @typedef StoreListResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ZoneSchema
        
        
        @property { ZoneDetailsObject } [zone_detail]
        
        @property { string } [_id]
        
         
    */

/**
        @typedef ZoneListResponse
        
        
        @property { Array<ZoneSchema> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef RegionObject
        
        
        @property { string } [country]
        
        @property { string } [state]
        
         
    */

/**
        @typedef PincodeObject
        
        
        @property { Array<number> } [pincode_list]
        
         
    */

/**
        @typedef RadiusObject
        
        
        @property { number } [value]
        
         
    */

/**
        @typedef ZoneDetailsObject
        
        
        @property { RadiusObject } [radius]
        
        @property { PincodeObject } [pincode]
        
        @property { RegionObject } [region]
        
         
    */

/**
        @typedef UnauthenticatedUser
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef UnauthenticatedApplication
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef BadRequest
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef ResourceNotFound
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef InternalServerError
        
        
        @property { string } [message]
        
        @property { string } [code]
        
         
    */

/**
        @typedef PlanRecurring
        
        
        @property { string } [interval]
        
        @property { number } [interval_count]
        
         
    */

/**
        @typedef Plan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [is_trial_plan]
        
        @property { string } [plan_group]
        
        @property { Array<string> } [tag_lines]
        
        @property { string } [currency]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_visible]
        
        @property { number } [trial_period]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [product_suite_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
         
    */

/**
        @typedef DetailedPlanComponents
        
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { string } [description]
        
        @property { string } [group]
        
        @property { string } [icon]
        
        @property { Object } [links]
        
        @property { boolean } [enabled]
        
        @property { string } [display_text]
        
         
    */

/**
        @typedef DetailedPlan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [is_trial_plan]
        
        @property { string } [plan_group]
        
        @property { Array<string> } [tag_lines]
        
        @property { string } [currency]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_visible]
        
        @property { number } [trial_period]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [product_suite_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { Array<DetailedPlanComponents> } [components]
        
         
    */

/**
        @typedef InvoiceDetailsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef InvoiceDetailsClient
        
        
        @property { Array<string> } [address_lines]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef InvoiceDetailsStatusTrail
        
        
        @property { string } [_id]
        
        @property { string } [value]
        
        @property { string } [timestamp]
        
         
    */

/**
        @typedef InvoiceDetailsPaymentMethodsDataChecks
        
        
        @property { string } [cvc_check]
        
        @property { string } [address_line1_check]
        
        @property { string } [address_postal_code_check]
        
         
    */

/**
        @typedef InvoiceDetailsPaymentMethodsDataNetworks
        
        
        @property { Array<string> } [available]
        
        @property { string } [preferred]
        
         
    */

/**
        @typedef InvoiceDetailsPaymentMethodsDataThreeDSecureUsage
        
        
        @property { boolean } [supported]
        
         
    */

/**
        @typedef InvoiceDetailsPaymentMethodsData
        
        
        @property { string } [brand]
        
        @property { string } [last4]
        
        @property { InvoiceDetailsPaymentMethodsDataChecks } [checks]
        
        @property { string } [wallet]
        
        @property { string } [country]
        
        @property { string } [funding]
        
        @property { number } [exp_year]
        
        @property { InvoiceDetailsPaymentMethodsDataNetworks } [networks]
        
        @property { number } [exp_month]
        
        @property { string } [fingerprint]
        
        @property { string } [generated_from]
        
        @property { InvoiceDetailsPaymentMethodsDataThreeDSecureUsage } [three_d_secure_usage]
        
         
    */

/**
        @typedef InvoiceDetailsPaymentMethods
        
        
        @property { number } [id]
        
        @property { string } [type]
        
        @property { string } [pg_payment_method_id]
        
        @property { InvoiceDetailsPaymentMethodsData } [data]
        
        @property { boolean } [is_default]
        
         
    */

/**
        @typedef InvoicePaymentMethod
        
        
        @property { string } [pg_payment_method_id]
        
         
    */

/**
        @typedef InvoiceDetails
        
        
        @property { InvoiceDetailsPeriod } [period]
        
        @property { InvoiceDetailsClient } [client]
        
        @property { boolean } [auto_advance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [_id]
        
        @property { string } [collection_method]
        
        @property { string } [subscriber_id]
        
        @property { string } [invoice_url]
        
        @property { string } [number]
        
        @property { Object } [pg_data]
        
        @property { string } [receipt_number]
        
        @property { string } [statement_descriptor]
        
        @property { string } [current_status]
        
        @property { Array<InvoiceDetailsStatusTrail> } [status_trail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [next_action_time]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { string } [hash_identifier]
        
        @property { InvoicePaymentMethod } [payment_method]
        
         
    */

/**
        @typedef InvoiceItemsPlanRecurring
        
        
        @property { string } [interval]
        
        @property { number } [interval_count]
        
         
    */

/**
        @typedef InvoiceItemsPlan
        
        
        @property { InvoiceItemsPlanRecurring } [recurring]
        
        @property { boolean } [is_trial_plan]
        
        @property { string } [plan_group]
        
        @property { Array<string> } [tag_lines]
        
        @property { string } [currency]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_visible]
        
        @property { number } [trial_period]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [product_suite_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
         
    */

/**
        @typedef InvoiceItemsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef InvoiceItems
        
        
        @property { string } [_id]
        
        @property { string } [currency]
        
        @property { InvoiceItemsPlan } [plan]
        
        @property { string } [name]
        
        @property { number } [quantity]
        
        @property { string } [description]
        
        @property { InvoiceItemsPeriod } [period]
        
        @property { number } [unit_amount]
        
        @property { number } [amount]
        
        @property { string } [type]
        
        @property { string } [invoice_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
         
    */

/**
        @typedef Invoice
        
        
        @property { InvoiceDetails } [invoice]
        
        @property { Array<InvoiceItems> } [invoice_items]
        
         
    */

/**
        @typedef InvoicesDataClient
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { Array<string> } [address_lines]
        
         
    */

/**
        @typedef InvoicesDataPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef InvoicesDataPaymentMethod
        
        
        @property { string } [pg_payment_method_id]
        
         
    */

/**
        @typedef InvoicesData
        
        
        @property { string } [_id]
        
        @property { InvoicesDataClient } [client]
        
        @property { boolean } [auto_advance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [collection_method]
        
        @property { string } [subscriber_id]
        
        @property { string } [invoice_url]
        
        @property { string } [number]
        
        @property { Object } [pg_data]
        
        @property { InvoicesDataPeriod } [period]
        
        @property { string } [receipt_number]
        
        @property { string } [statement_descriptor]
        
        @property { string } [current_status]
        
        @property { Array<InvoiceDetailsStatusTrail> } [status_trail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [next_action_time]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { string } [hash_identifier]
        
        @property { InvoicesDataPaymentMethod } [payment_method]
        
        @property { Array<InvoiceItems> } [invoice_items]
        
         
    */

/**
        @typedef Invoices
        
        
        @property { Array<InvoicesData> } [data]
        
        @property { number } [start]
        
        @property { number } [end]
        
        @property { number } [limit]
        
        @property { number } [page]
        
        @property { number } [total]
        
         
    */

/**
        @typedef Phone
        
        
        @property { string } [phone_number]
        
        @property { string } [phone_country_code]
        
         
    */

/**
        @typedef SubscriptionBillingAddress
        
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [line1]
        
        @property { string } [line2]
        
        @property { string } [postal_code]
        
         
    */

/**
        @typedef SubscriptionCustomer
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billing_address]
        
        @property { string } [_id]
        
        @property { string } [unique_id]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef SubscriptionCustomerCreate
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billing_address]
        
        @property { string } [unique_id]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */

/**
        @typedef SubscriptionCurrentPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef SubscriptionPauseCollection
        
        
        @property { string } [behavior]
        
        @property { string } [resume_at]
        
         
    */

/**
        @typedef SubscriptionTrial
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef SubscriptionInvoiceSettings
        
        
        @property { boolean } [generation]
        
        @property { boolean } [charging]
        
         
    */

/**
        @typedef Subscription
        
        
        @property { SubscriptionCurrentPeriod } [current_period]
        
        @property { SubscriptionPauseCollection } [pause_collection]
        
        @property { SubscriptionTrial } [trial]
        
        @property { SubscriptionInvoiceSettings } [invoice_settings]
        
        @property { boolean } [is_active]
        
        @property { boolean } [cancel_at_period_end]
        
        @property { string } [_id]
        
        @property { string } [subscriber_id]
        
        @property { string } [plan_id]
        
        @property { string } [product_suite_id]
        
        @property { Plan } [plan_data]
        
        @property { string } [current_status]
        
        @property { string } [collection_method]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
        @property { string } [latest_invoice]
        
         
    */

/**
        @typedef SubscriptionStatus
        
        
        @property { boolean } [is_enabled]
        
        @property { Subscription } [subscription]
        
         
    */

/**
        @typedef SubscriptionLimitApplication
        
        
        @property { boolean } [enabled]
        
        @property { number } [hard_limit]
        
        @property { number } [soft_limit]
        
         
    */

/**
        @typedef SubscriptionLimitMarketplace
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SubscriptionLimitOtherPlatform
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SubscriptionLimitTeam
        
        
        @property { number } [limit]
        
         
    */

/**
        @typedef SubscriptionLimitProducts
        
        
        @property { boolean } [bulk]
        
        @property { number } [limit]
        
         
    */

/**
        @typedef SubscriptionLimitExtensions
        
        
        @property { boolean } [enabled]
        
        @property { number } [limit]
        
         
    */

/**
        @typedef SubscriptionLimitIntegrations
        
        
        @property { boolean } [enabled]
        
        @property { number } [limit]
        
         
    */

/**
        @typedef SubscriptionLimit
        
        
        @property { SubscriptionLimitApplication } [application]
        
        @property { SubscriptionLimitMarketplace } [marketplace]
        
        @property { SubscriptionLimitOtherPlatform } [other_platform]
        
        @property { SubscriptionLimitTeam } [team]
        
        @property { SubscriptionLimitProducts } [products]
        
        @property { SubscriptionLimitExtensions } [extensions]
        
        @property { SubscriptionLimitIntegrations } [integrations]
        
        @property { boolean } [is_trial_plan]
        
         
    */

/**
        @typedef SubscriptionActivateReq
        
        
        @property { string } [unique_id]
        
        @property { string } [type]
        
        @property { string } [product_suite]
        
        @property { string } [plan_id]
        
        @property { string } [payment_method]
        
         
    */

/**
        @typedef SubscriptionActivateRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
    */

/**
        @typedef CancelSubscriptionReq
        
        
        @property { string } [unique_id]
        
        @property { string } [type]
        
        @property { string } [product_suite]
        
        @property { string } [subscription_id]
        
         
    */

/**
        @typedef CancelSubscriptionRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
    */

/**
        @typedef StatsImported
        
        
        @property { number } [count]
        
         
    */

/**
        @typedef StatsProcessedEmail
        
        
        @property { number } [success]
        
        @property { number } [failed]
        
        @property { number } [suppressed]
        
         
    */

/**
        @typedef StatsProcessedSms
        
        
        @property { number } [success]
        
        @property { number } [failed]
        
        @property { number } [suppressed]
        
         
    */

/**
        @typedef StatsProcessed
        
        
        @property { StatsProcessedEmail } [email]
        
        @property { StatsProcessedSms } [sms]
        
         
    */

/**
        @typedef Stats
        
        
        @property { string } [_id]
        
        @property { any } [imported]
        
        @property { any } [processed]
        
         
    */

/**
        @typedef GetStats
        
        
        @property { Array<Stats> } [items]
        
         
    */

/**
        @typedef CampaignReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [file_url]
        
        @property { string } [type]
        
        @property { number } [records_count]
        
        @property { string } [application]
        
         
    */

/**
        @typedef RecipientHeaders
        
        
        @property { string } [email]
        
         
    */

/**
        @typedef CampaignEmailTemplate
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */

/**
        @typedef CampignEmailProvider
        
        
        @property { string } [_id]
        
        @property { string } [from_name]
        
        @property { string } [from_email]
        
         
    */

/**
        @typedef CampaignEmail
        
        
        @property { CampaignEmailTemplate } [template]
        
        @property { CampignEmailProvider } [provider]
        
         
    */

/**
        @typedef Campaign
        
        
        @property { RecipientHeaders } [recipient_headers]
        
        @property { CampaignEmail } [email]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [datasource]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef Campaigns
        
        
        @property { Array<Campaign> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef BigqueryHeadersReq
        
        
        @property { string } [query]
        
        @property { string } [type]
        
         
    */

/**
        @typedef BigqueryHeadersResHeaders
        
        
        @property { string } [name]
        
        @property { string } [type]
        
         
    */

/**
        @typedef BigqueryHeadersRes
        
        
        @property { Array<BigqueryHeadersResHeaders> } [headers]
        
         
    */

/**
        @typedef GetNRecordsCsvReq
        
        
        @property { string } [url]
        
        @property { boolean } [header]
        
        @property { number } [count]
        
         
    */

/**
        @typedef GetNRecordsCsvResItems
        
        
        @property { string } [phone_number]
        
        @property { string } [email]
        
        @property { string } [firstname]
        
        @property { string } [lastname]
        
        @property { string } [orderid]
        
         
    */

/**
        @typedef GetNRecordsCsvRes
        
        
        @property { Array<GetNRecordsCsvResItems> } [items]
        
         
    */

/**
        @typedef AudienceReq
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [file_url]
        
        @property { string } [type]
        
        @property { number } [records_count]
        
        @property { string } [application]
        
         
    */

/**
        @typedef Audience
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [file_url]
        
        @property { string } [type]
        
        @property { number } [records_count]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef Audiences
        
        
        @property { Array<Audience> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef EmailProviderReqFrom
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { boolean } [is_default]
        
         
    */

/**
        @typedef EmailProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [api_key]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
         
    */

/**
        @typedef EmailProvider
        
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [api_key]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef EmailProviders
        
        
        @property { Array<EmailProvider> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef EmailTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef EmailTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef EmailTemplateKeys
        
        
        @property { string } [to]
        
        @property { string } [cc]
        
        @property { string } [bcc]
        
         
    */

/**
        @typedef EmailTemplateHeaders
        
        
        @property { string } [key]
        
        @property { string } [value]
        
         
    */

/**
        @typedef EmailTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { Array<string> } [static_to]
        
        @property { Array<string> } [static_cc]
        
        @property { Array<string> } [static_bcc]
        
        @property { string } [reply_to]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */

/**
        @typedef TemplateAndType
        
        
        @property { string } [template_type]
        
        @property { string } [template]
        
         
    */

/**
        @typedef EmailTemplateRes
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<string> } [static_to]
        
        @property { Array<string> } [static_cc]
        
        @property { Array<string> } [static_bcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { string } [reply_to]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef EmailTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [static_to]
        
        @property { Array<any> } [static_cc]
        
        @property { Array<any> } [static_bcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [from_name]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef SystemEmailTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [static_to]
        
        @property { Array<any> } [static_cc]
        
        @property { Array<any> } [static_bcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [from_name]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef EmailTemplates
        
        
        @property { Array<EmailTemplate> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SystemEmailTemplates
        
        
        @property { Array<SystemEmailTemplate> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef EventSubscriptionTemplateSms
        
        
        @property { boolean } [subscribed]
        
        @property { string } [template]
        
         
    */

/**
        @typedef EventSubscriptionTemplateEmail
        
        
        @property { boolean } [subscribed]
        
        @property { string } [template]
        
         
    */

/**
        @typedef EventSubscriptionTemplate
        
        
        @property { EventSubscriptionTemplateSms } [sms]
        
        @property { EventSubscriptionTemplateEmail } [email]
        
         
    */

/**
        @typedef EventSubscription
        
        
        @property { EventSubscriptionTemplate } [template]
        
        @property { boolean } [is_default]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [event]
        
        @property { string } [slug]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef EventSubscriptions
        
        
        @property { Array<EventSubscription> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef TriggerJobResponse
        
        
        @property { number } [status]
        
         
    */

/**
        @typedef TriggerJobRequest
        
        
        @property { string } [job_id]
        
         
    */

/**
        @typedef Job
        
        
        @property { boolean } [completed]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [campaign]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef Jobs
        
        
        @property { Array<Job> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef JobLog
        
        
        @property { any } [imported]
        
        @property { any } [processed]
        
        @property { string } [_id]
        
        @property { string } [job]
        
        @property { string } [campaign]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef JobLogs
        
        
        @property { Array<JobLog> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef LogEmail
        
        
        @property { string } [template]
        
         
    */

/**
        @typedef LogPushnotification
        
        
        @property { Array<string> } [pushtokens]
        
         
    */

/**
        @typedef LogMeta
        
        
        @property { string } [type]
        
        @property { string } [identifier]
        
        @property { string } [key]
        
        @property { string } [offset]
        
        @property { string } [partition]
        
        @property { string } [topic]
        
         
    */

/**
        @typedef Log
        
        
        @property { LogEmail } [email]
        
        @property { LogPushnotification } [pushnotification]
        
        @property { LogMeta } [meta]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [service]
        
        @property { string } [step]
        
        @property { string } [status]
        
        @property { any } [data]
        
        @property { string } [expire_at]
        
        @property { string } [created_at]
        
         
    */

/**
        @typedef Logs
        
        
        @property { Array<Log> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PushtokenReq
        
        
        @property { string } [action]
        
        @property { string } [bundle_identifier]
        
        @property { string } [push_token]
        
        @property { string } [unique_device_id]
        
         
    */

/**
        @typedef PushtokenRes
        
        
        @property { string } [_id]
        
        @property { string } [bundle_identifier]
        
        @property { string } [push_token]
        
        @property { string } [unique_device_id]
        
        @property { string } [type]
        
        @property { string } [platform]
        
        @property { string } [application_id]
        
        @property { string } [user_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [expired_at]
        
         
    */

/**
        @typedef SmsProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [type]
        
        @property { string } [provider]
        
         
    */

/**
        @typedef SmsProvider
        
        
        @property { number } [rpt]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef SmsProviders
        
        
        @property { Array<SmsProvider> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SmsTemplateDeleteSuccessRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef SmsTemplateDeleteFailureRes
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef SmsTemplateMessage
        
        
        @property { string } [template_type]
        
        @property { string } [template]
        
         
    */

/**
        @typedef SmsTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */

/**
        @typedef SmsTemplateRes
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [slug]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef SmsTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { string } [priority]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef SystemSmsTemplate
        
        
        @property { boolean } [is_system]
        
        @property { boolean } [is_internal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [_id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [template_variables]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef SmsTemplates
        
        
        @property { Array<SmsTemplate> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SystemSmsTemplates
        
        
        @property { Array<SystemSmsTemplate> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef Notification
        
        
        @property { string } [title]
        
        @property { string } [body]
        
        @property { string } [subtitle]
        
        @property { string } [icon]
        
        @property { string } [deeplink]
        
        @property { string } [click_action]
        
         
    */

/**
        @typedef SystemNotificationUser
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */

/**
        @typedef SystemNotificationSettings
        
        
        @property { boolean } [sound]
        
        @property { string } [priority]
        
        @property { string } [time_to_live]
        
         
    */

/**
        @typedef SystemNotification
        
        
        @property { Notification } [notification]
        
        @property { SystemNotificationUser } [user]
        
        @property { SystemNotificationUser } [settings]
        
        @property { string } [_id]
        
        @property { string } [group]
        
        @property { string } [created_at]
        
         
    */

/**
        @typedef SystemNotificationsPage
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { number } [item_total]
        
        @property { boolean } [has_next]
        
         
    */

/**
        @typedef SystemNotifications
        
        
        @property { Array<SystemNotification> } [items]
        
        @property { number } [last_read_anchor]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { Array<string> } display_fields
        
        @property { Array<Object> } [aggregators]
        
        @property { string } app_id
        
        @property { boolean } success
        
        @property { Array<string> } excluded_fields
        
        @property { boolean } created
        
         
    */

/**
        @typedef ErrorCodeDescription
        
        
        @property { boolean } success
        
        @property { string } description
        
        @property { string } code
        
         
    */

/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } key
        
        @property { string } merchant_salt
        
        @property { string } secret
        
        @property { string } config_type
        
        @property { boolean } [is_active]
        
         
    */

/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { PaymentGatewayConfig } [aggregator_name]
        
        @property { boolean } [is_active]
        
        @property { string } app_id
        
         
    */

/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { boolean } success
        
        @property { Array<string> } aggregator
        
         
    */

/**
        @typedef ErrorCodeAndDescription
        
        
        @property { string } description
        
        @property { string } code
        
         
    */

/**
        @typedef HttpErrorCodeAndResponse
        
        
        @property { ErrorCodeAndDescription } error
        
        @property { boolean } success
        
         
    */

/**
        @typedef PaymentModeLogo
        
        
        @property { string } small
        
        @property { string } large
        
         
    */

/**
        @typedef PaymentModeList
        
        
        @property { string } [card_name]
        
        @property { string } [card_token]
        
        @property { string } [card_brand_image]
        
        @property { number } [display_priority]
        
        @property { string } [code]
        
        @property { string } [display_name]
        
        @property { string } aggregator_name
        
        @property { string } [intent_flow]
        
        @property { string } [card_brand]
        
        @property { number } [exp_month]
        
        @property { number } [exp_year]
        
        @property { number } [retry_count]
        
        @property { string } [card_issuer]
        
        @property { string } [card_id]
        
        @property { boolean } [expired]
        
        @property { number } [timeout]
        
        @property { string } [card_fingerprint]
        
        @property { string } [card_isin]
        
        @property { string } [card_type]
        
        @property { string } [card_number]
        
        @property { string } [card_reference]
        
        @property { Array<string> } [intent_app_error_list]
        
        @property { string } [merchant_code]
        
        @property { string } [nickname]
        
        @property { string } [fynd_vpa]
        
        @property { string } [name]
        
        @property { PaymentModeLogo } [logo_url]
        
         
    */

/**
        @typedef RootPaymentMode
        
        
        @property { string } name
        
        @property { boolean } [anonymous_enable]
        
        @property { boolean } [add_card_enabled]
        
        @property { Array<PaymentModeList> } [list]
        
        @property { number } display_priority
        
        @property { string } display_name
        
        @property { string } [aggregator_name]
        
         
    */

/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } payment_option
        
         
    */

/**
        @typedef PaymentOptionsResponse
        
        
        @property { boolean } success
        
        @property { PaymentOptions } payment_options
        
         
    */

/**
        @typedef PayoutsResponse
        
        
        @property { boolean } is_active
        
        @property { Object } unique_transfer_no
        
        @property { boolean } is_default
        
        @property { Array<Object> } payouts_aggregators
        
        @property { Object } more_attributes
        
        @property { Object } customers
        
        @property { string } transfer_type
        
         
    */

/**
        @typedef PayoutRequest
        
        
        @property { string } unique_external_id
        
        @property { Object } users
        
        @property { boolean } is_active
        
        @property { Object } bank_details
        
        @property { string } transfer_type
        
        @property { string } aggregator
        
         
    */

/**
        @typedef PayoutResponse
        
        
        @property { Object } payouts
        
        @property { Object } users
        
        @property { string } unique_transfer_no
        
        @property { string } payment_status
        
        @property { boolean } success
        
        @property { string } transfer_type
        
        @property { Object } bank_details
        
        @property { boolean } created
        
        @property { boolean } is_active
        
        @property { string } aggregator
        
         
    */

/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } success
        
        @property { boolean } is_default
        
        @property { boolean } is_active
        
         
    */

/**
        @typedef UpdatePayoutRequest
        
        
        @property { string } unique_external_id
        
        @property { boolean } is_default
        
        @property { boolean } is_active
        
         
    */

/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { Array<Object> } data
        
        @property { boolean } success
        
         
    */

/**
        @typedef DeleteSubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionConfigResponse
        
        
        @property { Object } config
        
        @property { boolean } success
        
        @property { string } aggregator
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } unique_external_id
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { Object } data
        
        @property { boolean } success
        
         
    */

/**
        @typedef GetActivityStatus
        
        
        @property { ActivityHistory } activity_history
        
         
    */

/**
        @typedef ActivityHistory
        
        
        @property { string } [createdat]
        
        @property { string } [message]
        
        @property { string } [type]
        
        @property { string } [user]
        
         
    */

/**
        @typedef FailedOrders
        
        
        @property { FailOrder } orders
        
         
    */

/**
        @typedef FailOrder
        
        
        @property { string } [updated_at]
        
        @property { string } [_id]
        
        @property { string } [reason]
        
        @property { MarketplaceOrder } [marketplace_order]
        
        @property { string } [marketplace_order_id]
        
        @property { string } [created_at]
        
        @property { string } [app_id]
        
        @property { string } [marketplace]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef MarketplaceOrder
        
        
        @property { string } [order_status_url]
        
        @property { string } [admin_graphql_api_id]
        
        @property { string } [email]
        
        @property { boolean } [test]
        
        @property { string } [note]
        
        @property { string } [total_price]
        
        @property { number } [app_id]
        
        @property { TotalDiscountsSet } [total_discounts_set]
        
        @property { TotalPriceSet } [total_price_set]
        
        @property { TotalTaxSet } [total_tax_set]
        
        @property { string } [gateway]
        
        @property { string } [name]
        
        @property { SubtotalPriceSet } [subtotal_price_set]
        
        @property { number } [number]
        
        @property { boolean } [buyer_accepts_marketing]
        
        @property { string } [contact_email]
        
        @property { string } [token]
        
        @property { string } [source_name]
        
        @property { Array<any> } [payment_gateway_names]
        
        @property { string } [presentment_currency]
        
        @property { string } [subtotal_price]
        
        @property { string } [processed_at]
        
        @property { number } [order_number]
        
        @property { string } [total_tip_received]
        
        @property { number } [id]
        
        @property { boolean } [confirmed]
        
        @property { string } [currency]
        
        @property { string } [total_line_items_price]
        
        @property { LineItems } [line_items]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [total_weight]
        
        @property { BillingAddress } [billing_address]
        
        @property { TotalShippingPriceSet } [total_shipping_price_set]
        
        @property { Customer } [customer]
        
        @property { string } [total_discounts]
        
        @property { TotalLineItemsPriceSet } [total_line_items_price_set]
        
        @property { string } [tags]
        
        @property { string } [total_price_usd]
        
        @property { number } [user_id]
        
        @property { string } [total_tax]
        
        @property { string } [processing_method]
        
        @property { ShippingAddress } [shipping_address]
        
        @property { boolean } [taxes_included]
        
        @property { string } [financial_status]
        
         
    */

/**
        @typedef TotalDiscountsSet
        
        
        @property { PresentmentMoney } [presentment_money]
        
        @property { ShopMoney } [shop_money]
        
         
    */

/**
        @typedef PresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef ShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalPriceSet
        
        
        @property { TotalPriceSetShopMoney } [shop_money]
        
        @property { TotalPriceSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef TotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalTaxSet
        
        
        @property { TotalTaxSetShopMoney } [shop_money]
        
        @property { TotalTaxSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef TotalTaxSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalTaxSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef SubtotalPriceSet
        
        
        @property { SubtotalPriceSetShopMoney } [shop_money]
        
        @property { SubtotalPriceSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef SubtotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef SubtotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef LineItems
        
        
        @property { string } [sku]
        
        @property { number } [fulfillable_quantity]
        
        @property { number } [grams]
        
        @property { string } [total_discount]
        
        @property { LineItemsArticle } [article]
        
        @property { string } [title]
        
        @property { string } [variant_inventory_management]
        
        @property { number } [id]
        
        @property { number } [variant_id]
        
        @property { string } [variant_title]
        
        @property { boolean } [product_exists]
        
        @property { string } [price]
        
        @property { string } [admin_graphql_api_id]
        
        @property { number } [quantity]
        
        @property { string } [vendor]
        
        @property { string } [fulfillment_service]
        
        @property { boolean } [taxable]
        
        @property { string } [name]
        
        @property { number } [product_id]
        
        @property { PriceSet } [price_set]
        
        @property { TaxLines } [tax_lines]
        
        @property { boolean } [requires_shipping]
        
        @property { boolean } [gift_card]
        
        @property { TotalDiscountSet } [total_discount_set]
        
         
    */

/**
        @typedef LineItemsArticle
        
        
        @property { Quantities } [quantities]
        
        @property { string } [old_article_uid]
        
        @property { number } [total_quantity]
        
        @property { Manufacturer } [manufacturer]
        
        @property { ArticlePrice } [price]
        
        @property { boolean } [track_inventory]
        
        @property { Company } [company]
        
        @property { boolean } [is_active]
        
        @property { FailOrderDateMeta } [date_meta]
        
        @property { boolean } [fragile]
        
        @property { MarketplaceIdentifiers } [marketplace_identifiers]
        
        @property { string } [size]
        
        @property { boolean } [is_set]
        
        @property { Dimension } [dimension]
        
        @property { Weight } [weight]
        
        @property { Store } [store]
        
        @property { ArticleMeta } [meta]
        
        @property { string } [uid]
        
        @property { ArticleBrand } [brand]
        
        @property { number } [item_id]
        
        @property { string } [fynd_article_code]
        
        @property { string } [_id]
        
        @property { LineItemsArticleIdentifier } [identifier]
        
        @property { string } [seller_identifier]
        
        @property { string } [fynd_item_code]
        
        @property { string } [country_of_origin]
        
         
    */

/**
        @typedef Quantities
        
        
        @property { NotAvailable } [not_available]
        
        @property { Sellable } [sellable]
        
        @property { OrderCommitted } [order_committed]
        
        @property { Damaged } [damaged]
        
         
    */

/**
        @typedef NotAvailable
        
        
        @property { number } [count]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef Sellable
        
        
        @property { number } [count]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef OrderCommitted
        
        
        @property { number } [count]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef Damaged
        
        
        @property { string } [updated_at]
        
        @property { number } [count]
        
         
    */

/**
        @typedef Manufacturer
        
        
        @property { boolean } [is_default]
        
        @property { string } [address]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ArticlePrice
        
        
        @property { number } [marked]
        
        @property { string } [currency]
        
        @property { number } [effective]
        
        @property { number } [transfer]
        
         
    */

/**
        @typedef Company
        
        
        @property { number } [id]
        
        @property { string } [company_type]
        
        @property { string } [business_type]
        
        @property { string } [company_name]
        
        @property { string } [created_on]
        
        @property { string } [pan_no]
        
        @property { boolean } [return_allowed]
        
        @property { string } [meta]
        
        @property { boolean } [exchange_allowed]
        
        @property { string } [agreement_start_date]
        
        @property { number } [exchange_within_days]
        
        @property { number } [payment_procesing_charge]
        
        @property { boolean } [fynd_a_fit_available]
        
        @property { string } [modified_on]
        
        @property { number } [return_within_days]
        
         
    */

/**
        @typedef FailOrderDateMeta
        
        
        @property { string } [added_on_store]
        
        @property { string } [inventory_updated_on]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef MarketplaceIdentifiers
        
        
        @property { TatacliqLuxury } [tatacliq_luxury]
        
         
    */

/**
        @typedef TatacliqLuxury
        
        
        @property { string } [sku]
        
         
    */

/**
        @typedef Dimension
        
        
        @property { number } [height]
        
        @property { number } [width]
        
        @property { string } [unit]
        
        @property { number } [length]
        
        @property { boolean } [is_default]
        
         
    */

/**
        @typedef Weight
        
        
        @property { boolean } [is_default]
        
        @property { string } [unit]
        
        @property { number } [shipping]
        
         
    */

/**
        @typedef Store
        
        
        @property { number } [id]
        
         
    */

/**
        @typedef ArticleMeta
        
        
        @property { string } [service]
        
         
    */

/**
        @typedef ArticleBrand
        
        
        @property { string } [name]
        
        @property { number } [id]
        
         
    */

/**
        @typedef LineItemsArticleIdentifier
        
        
        @property { string } [sku_code]
        
         
    */

/**
        @typedef PriceSet
        
        
        @property { PriceSetShopMoney } [shop_money]
        
        @property { PriceSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef PriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef PriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TaxLines
        
        
        @property { string } [title]
        
        @property { string } [price]
        
        @property { number } [rate]
        
        @property { TaxLinesPriceSet } [price_set]
        
         
    */

/**
        @typedef TaxLinesPriceSet
        
        
        @property { TaxLinesPriceSetShopMoney } [shop_money]
        
        @property { TaxLinesPriceSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef TaxLinesPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TaxLinesPriceSetPresentmentMoney
        
        
        @property { string } [currency_code]
        
        @property { string } [amount]
        
         
    */

/**
        @typedef TotalDiscountSet
        
        
        @property { TotalDiscountSetPresentmentMoney } [presentment_money]
        
        @property { TotalDiscountSetShopMoney } [shop_money]
        
         
    */

/**
        @typedef TotalDiscountSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalDiscountSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef BillingAddress
        
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [zip]
        
        @property { string } [last_name]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [province_code]
        
        @property { string } [phone]
        
        @property { string } [company]
        
        @property { number } [latitude]
        
        @property { string } [name]
        
        @property { string } [country]
        
        @property { string } [country_code]
        
        @property { string } [first_name]
        
        @property { string } [province]
        
         
    */

/**
        @typedef TotalShippingPriceSet
        
        
        @property { TotalShippingPriceSetShopMoney } [shop_money]
        
        @property { TotalShippingPriceSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef TotalShippingPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalShippingPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef Customer
        
        
        @property { string } [created_at]
        
        @property { number } [id]
        
        @property { string } [last_name]
        
        @property { string } [state]
        
        @property { number } [last_order_id]
        
        @property { string } [note]
        
        @property { boolean } [verified_email]
        
        @property { string } [phone]
        
        @property { boolean } [accepts_marketing]
        
        @property { string } [first_name]
        
        @property { string } [tags]
        
        @property { string } [last_order_name]
        
        @property { number } [orders_count]
        
        @property { string } [total_spent]
        
        @property { boolean } [tax_exempt]
        
        @property { string } [currency]
        
        @property { string } [accepts_marketing_updated_at]
        
        @property { string } [email]
        
        @property { string } [updated_at]
        
        @property { string } [admin_graphql_api_id]
        
        @property { DefaultAddress } [default_address]
        
         
    */

/**
        @typedef DefaultAddress
        
        
        @property { string } [last_name]
        
        @property { string } [name]
        
        @property { string } [province_code]
        
        @property { string } [country_code]
        
        @property { boolean } [is_default]
        
        @property { number } [id]
        
        @property { number } [customer_id]
        
        @property { string } [first_name]
        
        @property { string } [address1]
        
        @property { string } [phone]
        
        @property { string } [country_name]
        
        @property { string } [company]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [province]
        
        @property { string } [country]
        
        @property { string } [zip]
        
         
    */

/**
        @typedef TotalLineItemsPriceSet
        
        
        @property { TotalLineItemsPriceSetShopMoney } [shop_money]
        
        @property { TotalLineItemsPriceSetPresentmentMoney } [presentment_money]
        
         
    */

/**
        @typedef TotalLineItemsPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef TotalLineItemsPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef ShippingAddress
        
        
        @property { string } [address1]
        
        @property { string } [zip]
        
        @property { string } [address2]
        
        @property { string } [country_code]
        
        @property { string } [country]
        
        @property { string } [last_name]
        
        @property { number } [latitude]
        
        @property { string } [province_code]
        
        @property { string } [first_name]
        
        @property { string } [phone]
        
        @property { string } [province]
        
        @property { number } [longitude]
        
        @property { string } [city]
        
        @property { string } [company]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OrderListing
        
        
        @property { Array<OrderItems> } items
        
        @property { Filters } filters
        
        @property { NextOrderStatus } next_order_status
        
        @property { PlatformOrderPage } page
        
        @property { AppliedFilters } applied_filters
        
         
    */

/**
        @typedef OrderItems
        
        
        @property { PlatformOrderUserInfo } [user]
        
        @property { PlatformDeliveryAddress } [delivery_address]
        
        @property { Channel } [channel]
        
        @property { PlatformBreakupValues } [breakup_values]
        
        @property { string } [id]
        
        @property { PlatformApplication } [application]
        
        @property { PlatformShipment } [shipments]
        
        @property { string } [created_at]
        
        @property { number } [total_shipments_in_order]
        
        @property { ItemsPayments } [payments]
        
         
    */

/**
        @typedef PlatformOrderUserInfo
        
        
        @property { string } [mobile]
        
        @property { string } [first_name]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [last_name]
        
        @property { boolean } [is_anonymous_user]
        
        @property { number } [uid]
        
        @property { string } [avis_user_id]
        
         
    */

/**
        @typedef PlatformDeliveryAddress
        
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { number } [latitude]
        
        @property { string } [updated_at]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [created_at]
        
        @property { string } [name]
        
        @property { string } [address]
        
        @property { string } [phone]
        
        @property { number } [longitude]
        
        @property { string } [address_type]
        
        @property { string } [email]
        
        @property { string } [pincode]
        
        @property { string } [address2]
        
        @property { string } [contact_person]
        
        @property { string } [address_category]
        
         
    */

/**
        @typedef Channel
        
        
        @property { string } [name]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef PlatformBreakupValues
        
        
        @property { string } [display]
        
        @property { number } [value]
        
        @property { string } [name]
        
         
    */

/**
        @typedef PlatformApplication
        
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { boolean } [post_order_reassignment]
        
        @property { string } [id]
        
        @property { string } [description]
        
        @property { boolean } [dp_assignment]
        
        @property { ArticleAssignment } [article_assignment]
        
        @property { boolean } [force_reassignment]
        
        @property { string } [token]
        
        @property { string } [secret]
        
         
    */

/**
        @typedef ArticleAssignment
        
        
        @property { string } [strategy]
        
        @property { string } [level]
        
         
    */

/**
        @typedef PlatformShipment
        
        
        @property { PlatformShipmentStatus } [status]
        
        @property { Bags } [bags]
        
        @property { ShipmentPrices } [prices]
        
        @property { ShipmentBreakupValues } [breakup_values]
        
        @property { string } [id]
        
        @property { DpDetails } [dp_details]
        
        @property { ShipmentInvoice } [invoice]
        
        @property { PlatformFulfillingStore } [fulfilling_store]
        
        @property { Payments } [payments]
        
        @property { ShipmentGst } [gst]
        
        @property { Company } [company]
        
        @property { PlatformShipmentBrand } [brand]
        
        @property { Object } [coupon]
        
        @property { string } [order_source]
        
        @property { boolean } [is_not_fynd_source]
        
        @property { string } [comment]
        
        @property { Promise } [promise]
        
        @property { ShipmentTrackingDetails } [tracking_details]
        
        @property { boolean } [is_fynd_coupon]
        
        @property { string } [order_type]
        
        @property { ShipmentUser } [user]
        
         
    */

/**
        @typedef PlatformShipmentStatus
        
        
        @property { number } [id]
        
        @property { Array<number> } [bag_list]
        
        @property { string } [created_at]
        
        @property { string } [status]
        
        @property { string } [name]
        
        @property { number } [progress]
        
        @property { string } [shipment_id]
        
        @property { string } [current_shipment_status]
        
        @property { string } [color_code]
        
         
    */

/**
        @typedef Bags
        
        
        @property { Array<BagFinancialBreakup> } [financial_breakup]
        
        @property { BagCurrStatus } [status]
        
        @property { BagItem } [item]
        
        @property { BagArticle } [article]
        
        @property { number } [id]
        
        @property { BagPrices } [prices]
        
        @property { GstDetails } [gst_details]
        
        @property { BagBreakupValues } [breakup_values]
        
        @property { number } [update_time]
        
        @property { BagCurrentStatus } [current_status]
        
        @property { BagStatus } [bag_status]
        
         
    */

/**
        @typedef BagFinancialBreakup
        
        
        @property { number } [value_of_good]
        
        @property { string } [hsn_code]
        
        @property { number } [price_effective]
        
        @property { number } [cod_charges]
        
        @property { string } [gst_fee]
        
        @property { number } [fynd_credits]
        
        @property { number } [refund_amount]
        
        @property { number } [cashback_applied]
        
        @property { number } [transfer_price]
        
        @property { number } [amount_paid_roundoff]
        
        @property { number } [coupon_value]
        
        @property { number } [amount_paid]
        
        @property { number } [gst_tax_percentage]
        
        @property { string } [size]
        
        @property { number } [total_units]
        
        @property { number } [discount]
        
        @property { number } [coupon_effective_discount]
        
        @property { number } [cashback]
        
        @property { number } [promotion_effective_discount]
        
        @property { string } [gst_tag]
        
        @property { number } [delivery_charge]
        
        @property { number } [refund_credit]
        
        @property { number } [price_marked]
        
        @property { Identifiers } [identifiers]
        
        @property { string } [item_name]
        
        @property { boolean } [added_to_fynd_cash]
        
        @property { number } [brand_calculated_amount]
        
         
    */

/**
        @typedef Identifiers
        
        
        @property { string } [ean]
        
         
    */

/**
        @typedef BagCurrStatus
        
        
        @property { boolean } [enable_tracking]
        
        @property { boolean } [is_customer_return_allowed]
        
        @property { boolean } [is_active]
        
        @property { boolean } [is_returnable]
        
        @property { boolean } [can_be_cancelled]
        
         
    */

/**
        @typedef BagItem
        
        
        @property { number } [id]
        
        @property { string } [size]
        
        @property { string } [slug_key]
        
        @property { boolean } [can_return]
        
        @property { number } [brand_id]
        
        @property { Array<string> } [l2_category]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { boolean } [can_cancel]
        
        @property { BagItemAttributes } [attributes]
        
        @property { string } [l3_category_name]
        
        @property { number } [l3_category]
        
        @property { Array<string> } [l1_category]
        
        @property { Array<string> } [image]
        
        @property { string } [brand]
        
        @property { string } [last_updated_at]
        
         
    */

/**
        @typedef BagItemAttributes
        
        
        @property { string } [item_code]
        
        @property { string } [brand_name]
        
        @property { string } [country_of_origin]
        
         
    */

/**
        @typedef BagArticle
        
        
        @property { ArticleIdentifiers } [identifiers]
        
        @property { boolean } [esp_modified]
        
        @property { boolean } [is_set]
        
        @property { string } [size]
        
        @property { string } [code]
        
        @property { Set } [set]
        
        @property { string } [seller_identifier]
        
        @property { BagArticleReturnConfig } [return_config]
        
        @property { string } [_id]
        
        @property { string } [uid]
        
        @property { Object } [child_details]
        
         
    */

/**
        @typedef ArticleIdentifiers
        
        
        @property { string } [ean]
        
         
    */

/**
        @typedef Set
        
        
        @property { number } [quantity]
        
        @property { SetSizeDistribution } [size_distribution]
        
         
    */

/**
        @typedef SetSizeDistribution
        
        
        @property { Sizes } [sizes]
        
         
    */

/**
        @typedef Sizes
        
        
        @property { string } [size]
        
        @property { number } [pieces]
        
         
    */

/**
        @typedef BagArticleReturnConfig
        
        
        @property { number } [time]
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
         
    */

/**
        @typedef ShipmentPrices
        
        
        @property { number } [refund_amount]
        
        @property { number } [cashback_applied]
        
        @property { number } [transfer_price]
        
        @property { number } [coupon_value]
        
        @property { number } [amount_paid]
        
        @property { number } [delivery_charge]
        
        @property { number } [coupon_effective_discount]
        
        @property { number } [cod_charges]
        
        @property { number } [refund_credit]
        
        @property { boolean } [added_to_fynd_cash]
        
        @property { number } [gst_tax_percentage]
        
        @property { number } [price_marked]
        
        @property { number } [price_effective]
        
        @property { number } [discount]
        
        @property { number } [promotion_effective_discount]
        
        @property { number } [amount_paid_roundoff]
        
        @property { number } [fynd_credits]
        
        @property { number } [brand_calculated_amount]
        
        @property { number } [cashback]
        
        @property { number } [value_of_good]
        
         
    */

/**
        @typedef GstDetails
        
        
        @property { number } [brand_calculated_amount]
        
        @property { string } [gst_fee]
        
        @property { string } [gst_tag]
        
        @property { string } [hsn_code]
        
        @property { number } [value_of_good]
        
        @property { number } [gst_tax_percentage]
        
        @property { boolean } [is_default_hsn_code]
        
         
    */

/**
        @typedef BagBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */

/**
        @typedef BagCurrentStatus
        
        
        @property { string } [updated_at]
        
        @property { BagStateMapper } [bag_state_mapper]
        
        @property { string } [status]
        
        @property { string } [state_type]
        
         
    */

/**
        @typedef BagStateMapper
        
        
        @property { string } [app_state_name]
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [name]
        
        @property { string } [app_display_name]
        
         
    */

/**
        @typedef BagStatus
        
        
        @property { string } [status]
        
        @property { string } [state_type]
        
        @property { string } [updated_at]
        
        @property { BagStatusBagStateMapper } [bag_state_mapper]
        
         
    */

/**
        @typedef BagStatusBagStateMapper
        
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [name]
        
        @property { string } [app_display_name]
        
        @property { string } [app_state_name]
        
         
    */

/**
        @typedef BagPrices
        
        
        @property { number } [cashback]
        
        @property { number } [refund_credit]
        
        @property { number } [coupon_value]
        
        @property { number } [delivery_charge]
        
        @property { number } [fynd_credits]
        
        @property { number } [price_marked]
        
        @property { number } [cashback_applied]
        
        @property { number } [value_of_good]
        
        @property { number } [amount_paid_roundoff]
        
        @property { number } [amount_paid]
        
        @property { number } [cod_charges]
        
        @property { number } [price_effective]
        
        @property { number } [refund_amount]
        
        @property { number } [discount]
        
         
    */

/**
        @typedef ShipmentBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */

/**
        @typedef DpDetails
        
        
        @property { string } [gst_tag]
        
         
    */

/**
        @typedef ShipmentInvoice
        
        
        @property { string } [payment_type]
        
        @property { string } [updated_date]
        
        @property { string } [invoice_url]
        
        @property { string } [label_url]
        
        @property { string } [payment_mode]
        
        @property { number } [amount_to_collect]
        
        @property { RtoAddress } [rto_address]
        
         
    */

/**
        @typedef RtoAddress
        
        
        @property { string } [name]
        
        @property { number } [id]
        
        @property { string } [phone]
        
        @property { string } [location_type]
        
        @property { StoreAddressJson } [store_address_json]
        
        @property { string } [code]
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { number } [company_id]
        
        @property { string } [contact_person]
        
        @property { string } [state]
        
        @property { string } [store_email]
        
        @property { string } [address2]
        
         
    */

/**
        @typedef StoreAddressJson
        
        
        @property { string } [country]
        
        @property { number } [latitude]
        
        @property { string } [updated_at]
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [address_type]
        
        @property { string } [city]
        
        @property { string } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [created_at]
        
        @property { string } [contact_person]
        
        @property { string } [address_category]
        
        @property { string } [version]
        
        @property { string } [landmark]
        
         
    */

/**
        @typedef PlatformFulfillingStore
        
        
        @property { number } [packaging_material_count]
        
        @property { string } [location_type]
        
        @property { string } [code]
        
        @property { string } [city]
        
        @property { FulfillingStoreMeta } [meta]
        
        @property { string } [name]
        
        @property { boolean } [is_active]
        
        @property { string } [address1]
        
        @property { string } [store_email]
        
        @property { boolean } [is_archived]
        
        @property { string } [state]
        
        @property { string } [address2]
        
        @property { string } [contact_person]
        
        @property { string } [phone]
        
        @property { boolean } [is_enabled_for_recon]
        
        @property { string } [fulfillment_channel]
        
        @property { string } [created_at]
        
        @property { number } [id]
        
        @property { string } [pincode]
        
        @property { Array<string> } [brand_store_tags]
        
        @property { number } [company_id]
        
        @property { FulfillingStoreStoreAddressJson } [store_address_json]
        
        @property { string } [updated_at]
        
        @property { string } [login_username]
        
        @property { string } [country]
        
         
    */

/**
        @typedef FulfillingStoreMeta
        
        
        @property { AdditionalContactDetails } [additional_contact_details]
        
        @property { Documents } [documents]
        
        @property { string } [gst_number]
        
        @property { string } [display_name]
        
        @property { ProductReturnConfig } [product_return_config]
        
        @property { boolean } [allow_dp_assignment_from_fynd]
        
        @property { string } [stage]
        
        @property { Timing } [timing]
        
         
    */

/**
        @typedef AdditionalContactDetails
        
        
        @property { Array<string> } [number]
        
         
    */

/**
        @typedef Documents
        
        
        @property { Gst } [gst]
        
         
    */

/**
        @typedef Gst
        
        
        @property { string } [legal_name]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { boolean } [verified]
        
         
    */

/**
        @typedef ProductReturnConfig
        
        
        @property { boolean } [on_same_store]
        
         
    */

/**
        @typedef Timing
        
        
        @property { Opening } [opening]
        
        @property { string } [weekday]
        
        @property { boolean } [open]
        
        @property { Closing } [closing]
        
         
    */

/**
        @typedef Opening
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */

/**
        @typedef Closing
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */

/**
        @typedef FulfillingStoreStoreAddressJson
        
        
        @property { string } [address2]
        
        @property { string } [area]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [state]
        
        @property { string } [contact_person]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { string } [version]
        
        @property { string } [created_at]
        
        @property { string } [address_type]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [landmark]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [updated_at]
        
        @property { string } [address_category]
        
         
    */

/**
        @typedef Payments
        
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [logo]
        
        @property { string } [source]
        
        @property { string } [source_nickname]
        
        @property { number } [display_priority]
        
        @property { number } [id]
        
        @property { string } [mode]
        
        @property { string } [payment_identifier]
        
         
    */

/**
        @typedef ShipmentGst
        
        
        @property { number } [brand_calculated_amount]
        
        @property { number } [value_of_good]
        
        @property { number } [gst_fee]
        
         
    */

/**
        @typedef PlatformShipmentBrand
        
        
        @property { boolean } [credit_note_allowed]
        
        @property { string } [brand_name]
        
        @property { string } [modified_on]
        
        @property { number } [id]
        
        @property { boolean } [is_virtual_invoice]
        
        @property { string } [created_on]
        
        @property { string } [logo]
        
         
    */

/**
        @typedef Promise
        
        
        @property { Timestamp } [timestamp]
        
         
    */

/**
        @typedef Timestamp
        
        
        @property { string } [min]
        
        @property { string } [max]
        
         
    */

/**
        @typedef ShipmentTrackingDetails
        
        
        @property { string } [status]
        
        @property { string } [time]
        
        @property { boolean } [is_passed]
        
        @property { boolean } [is_current]
        
         
    */

/**
        @typedef ShipmentUser
        
        
        @property { string } [email]
        
        @property { number } [id]
        
        @property { string } [first_name]
        
        @property { string } [mobile]
        
        @property { string } [gender]
        
        @property { string } [last_name]
        
        @property { boolean } [is_anonymous_user]
        
        @property { string } [mongo_user_id]
        
         
    */

/**
        @typedef ItemsPayments
        
        
        @property { number } [display_priority]
        
        @property { number } [id]
        
        @property { boolean } [is_active]
        
        @property { string } [display_name]
        
        @property { string } [logo]
        
        @property { string } [payment_identifier]
        
        @property { string } [source_nickname]
        
        @property { string } [mode]
        
        @property { string } [source]
        
         
    */

/**
        @typedef Filters
        
        
        @property { Stages } [stages]
        
         
    */

/**
        @typedef Stages
        
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { boolean } [is_default]
        
        @property { StagesFilters } [filters]
        
         
    */

/**
        @typedef StagesFilters
        
        
        @property { string } [text]
        
        @property { string } [value]
        
        @property { string } [type]
        
        @property { Options } [options]
        
         
    */

/**
        @typedef Options
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef NextOrderStatus
        
        
        @property { BagConfirmed } [bag_confirmed]
        
        @property { DpAssigned } [dp_assigned]
        
        @property { ReturnBagDelivered } [return_bag_delivered]
        
        @property { Placed } [placed]
        
        @property { DeliveryDone } [delivery_done]
        
        @property { Pending } [pending]
        
        @property { BagPacked } [bag_packed]
        
         
    */

/**
        @typedef BagConfirmed
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef DpAssigned
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef ReturnBagDelivered
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Placed
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef DeliveryDone
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Pending
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef BagPacked
        
        
        @property { string } [text]
        
        @property { string } [value]
        
         
    */

/**
        @typedef PlatformOrderPage
        
        
        @property { string } [next]
        
        @property { string } [previous]
        
        @property { string } [type]
        
        @property { number } [size]
        
        @property { number } [current]
        
        @property { boolean } [has_next]
        
        @property { ItemTotal } [item_total]
        
         
    */

/**
        @typedef ItemTotal
        
        
        @property { number } [new]
        
        @property { number } [processing]
        
        @property { number } [returns]
        
        @property { number } [all]
        
         
    */

/**
        @typedef AppliedFilters
        
        
        @property { string } [stage]
        
        @property { Array<string> } [stores]
        
        @property { string } [from_date]
        
        @property { string } [to_date]
        
         
    */

/**
        @typedef UpdateOrderReprocessResponse
        
        
        @property { string } status
        
         
    */

/**
        @typedef PlatformOrderTrack
        
        
        @property { boolean } success
        
        @property { string } request_id
        
        @property { string } message
        
        @property { string } mobile
        
        @property { string } country_code
        
        @property { number } resend_timer
        
        @property { string } [resend_token]
        
         
    */

/**
        @typedef GetPingResponse
        
        
        @property { string } ping
        
         
    */

/**
        @typedef UpdateShipmentStatusResponse
        
        
        @property { Object } shipments
        
        @property { Array<any> } [error_shipments]
        
         
    */

/**
        @typedef UpdateShipmentStatusBody
        
        
        @property { Object } shipments
        
        @property { boolean } force_transition
        
        @property { boolean } task
        
         
    */

/**
        @typedef PlatformShipmentTrack
        
        
        @property { Results } results
        
         
    */

/**
        @typedef Results
        
        
        @property { string } [awb]
        
        @property { string } [updated_at]
        
        @property { string } [last_location_recieved_at]
        
        @property { string } [reason]
        
        @property { string } [shipment_type]
        
        @property { string } [status]
        
        @property { string } [updated_time]
        
        @property { string } [account_name]
        
         
    */

/**
        @typedef UpdateProcessShipmenstRequestBody
        
        
        @property { Array<string> } shipment_ids
        
        @property { string } expected_status
        
         
    */

/**
        @typedef UpdateProcessShipmenstRequestResponse
        
        
        @property { boolean } success
        
        @property { string } message
        
         
    */

/**
        @typedef GetVoiceCallbackResponse
        
        
        @property { string } message
        
         
    */

/**
        @typedef GetClickToCallResponse
        
        
        @property { string } message
        
         
    */

/**
        @typedef ApefaceApiError
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef SearchKeywordResult
        
        
        @property { Object } query
        
        @property { string } sort_on
        
         
    */

/**
        @typedef CreateSearchKeyword
        
        
        @property { string } [app_id]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [words]
        
        @property { Object } [_custom_json]
        
        @property { SearchKeywordResult } result
        
         
    */

/**
        @typedef GetSearchWordsData
        
        
        @property { string } [app_id]
        
        @property { Array<string> } [words]
        
        @property { Object } [_custom_json]
        
        @property { string } [uid]
        
        @property { Object } [result]
        
         
    */

/**
        @typedef ErrorResponse
        
        
        @property { string } [code]
        
        @property { Object } [meta]
        
        @property { number } [status]
        
        @property { string } [message]
        
         
    */

/**
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { GetSearchWordsData } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef GetSearchWordsResponse
        
        
        @property { Array<GetSearchWordsData> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AutocompletePageAction
        
        
        @property { string } [url]
        
        @property { Object } query
        
        @property { string } type
        
        @property { Object } [params]
        
         
    */

/**
        @typedef AutocompleteAction
        
        
        @property { AutocompletePageAction } [page]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Media
        
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */

/**
        @typedef AutocompleteResult
        
        
        @property { AutocompleteAction } [action]
        
        @property { string } [display]
        
        @property { Media } [logo]
        
        @property { Object } [_custom_json]
        
         
    */

/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { string } [app_id]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { boolean } [is_active]
        
        @property { Array<string> } [words]
        
        @property { Object } [_custom_json]
        
         
    */

/**
        @typedef GetAutocompleteWordsData
        
        
        @property { string } [app_id]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
        @property { Object } [_custom_json]
        
        @property { string } [uid]
        
         
    */

/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { Object } [_custom_json]
        
        @property { string } [app_id]
        
        @property { Array<string> } [words]
        
        @property { Array<Object> } [results]
        
         
    */

/**
        @typedef ProductBundleItem
        
        
        @property { boolean } [allow_remove]
        
        @property { number } max_quantity
        
        @property { number } product_uid
        
        @property { boolean } [auto_select]
        
        @property { number } min_quantity
        
        @property { boolean } [auto_add_to_cart]
        
         
    */

/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { number } [company_id]
        
        @property { string } [logo]
        
        @property { string } choice
        
        @property { boolean } [same_store_assignment]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } name
        
        @property { Object } [meta]
        
        @property { Array<string> } [page_visibility]
        
        @property { string } [id]
        
        @property { Object } [created_by]
        
        @property { boolean } is_active
        
        @property { Object } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { string } slug
        
         
    */

/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ProductBundleRequest
        
        
        @property { string } [logo]
        
        @property { string } choice
        
        @property { boolean } [same_store_assignment]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } name
        
        @property { Object } [meta]
        
        @property { Array<string> } [page_visibility]
        
        @property { Object } [created_by]
        
        @property { boolean } is_active
        
        @property { Object } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { string } slug
        
         
    */

/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { string } [logo]
        
        @property { string } choice
        
        @property { boolean } [same_store_assignment]
        
        @property { Array<ProductBundleItem> } products
        
        @property { string } name
        
        @property { Object } [meta]
        
        @property { Array<string> } [page_visibility]
        
        @property { boolean } is_active
        
        @property { Object } [modified_by]
        
        @property { string } [modified_on]
        
        @property { string } slug
        
         
    */

/**
        @typedef Size
        
        
        @property { boolean } [is_available]
        
        @property { string } [display]
        
        @property { string } [value]
        
        @property { number } [quantity]
        
         
    */

/**
        @typedef Price
        
        
        @property { number } [min_marked]
        
        @property { number } [max_marked]
        
        @property { number } [max_effective]
        
        @property { number } [min_effective]
        
        @property { string } [currency]
        
         
    */

/**
        @typedef LimitedProductData
        
        
        @property { Array<string> } [sizes]
        
        @property { string } [country_of_origin]
        
        @property { number } [quantity]
        
        @property { Object } [attributes]
        
        @property { string } [name]
        
        @property { Object } [price]
        
        @property { Object } [identifier]
        
        @property { string } [short_description]
        
        @property { string } [item_code]
        
        @property { number } [uid]
        
        @property { Array<string> } [images]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef GetProducts
        
        
        @property { Array<Size> } [sizes]
        
        @property { boolean } [allow_remove]
        
        @property { number } [max_quantity]
        
        @property { number } [product_uid]
        
        @property { boolean } [auto_select]
        
        @property { Price } [price]
        
        @property { number } [min_quantity]
        
        @property { boolean } [auto_add_to_cart]
        
        @property { LimitedProductData } [product_details]
        
         
    */

/**
        @typedef GetProductBundleResponse
        
        
        @property { number } [company_id]
        
        @property { Array<string> } [page_visibility]
        
        @property { string } [choice]
        
        @property { Array<GetProducts> } [products]
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { Object } [meta]
        
        @property { boolean } [same_store_assignment]
        
        @property { boolean } [is_active]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef ListSizeGuide
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef Meta
        
        
        @property { Array<Object> } [values]
        
        @property { Object } [headers]
        
        @property { string } [unit]
        
         
    */

/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */

/**
        @typedef ValidateSizeGuide
        
        
        @property { number } [company_id]
        
        @property { boolean } [active]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { string } [image]
        
        @property { string } name
        
        @property { string } [id]
        
        @property { number } [brand_id]
        
        @property { Object } [created_by]
        
        @property { Guide } [guide]
        
        @property { string } [tag]
        
        @property { Object } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { string } [subtitle]
        
         
    */

/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef SizeGuideResponse
        
        
        @property { number } [company_id]
        
        @property { string } [id]
        
        @property { string } [title]
        
        @property { string } [name]
        
        @property { string } [subtitle]
        
        @property { Object } [created_by]
        
        @property { number } [brand_id]
        
        @property { Object } [guide]
        
        @property { string } [tag]
        
        @property { Object } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { boolean } [active]
        
         
    */

/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { Array<Object> } [units]
        
        @property { Array<string> } [filter_types]
        
        @property { string } [display]
        
        @property { string } [key]
        
         
    */

/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
    */

/**
        @typedef MetaDataListingSortMetaResponse
        
        
        @property { string } [display]
        
        @property { string } [key]
        
         
    */

/**
        @typedef MetaDataListingSortResponse
        
        
        @property { Array<MetaDataListingSortMetaResponse> } [data]
        
         
    */

/**
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingFilterResponse } filter
        
        @property { MetaDataListingSortResponse } sort
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [compare]
        
        @property { Object } [variant]
        
        @property { Object } [similar]
        
        @property { Object } [detail]
        
         
    */

/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { MetaDataListingResponse } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */

/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [end]
        
        @property { number } [start]
        
         
    */

/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Object } [map]
        
        @property { Array<ConfigurationBucketPoints> } [bucket_points]
        
        @property { string } [condition]
        
        @property { string } [sort]
        
        @property { string } [value]
        
         
    */

/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } [logo]
        
        @property { number } priority
        
        @property { string } [name]
        
        @property { boolean } is_active
        
        @property { ConfigurationListingFilterValue } [value_config]
        
        @property { string } type
        
        @property { string } key
        
         
    */

/**
        @typedef ConfigurationListingFilter
        
        
        @property { Array<ConfigurationListingFilterConfig> } [attribute_config]
        
        @property { boolean } allow_single
        
         
    */

/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { string } [logo]
        
        @property { number } priority
        
        @property { string } [name]
        
        @property { boolean } is_active
        
        @property { string } key
        
         
    */

/**
        @typedef ConfigurationListingSort
        
        
        @property { string } default_key
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingFilter } filter
        
        @property { ConfigurationListingSort } sort
        
         
    */

/**
        @typedef ProductSize
        
        
        @property { number } min
        
        @property { number } max
        
         
    */

/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { string } [logo]
        
        @property { ProductSize } size
        
        @property { number } priority
        
        @property { string } name
        
        @property { string } display_type
        
        @property { boolean } is_active
        
        @property { string } key
        
         
    */

/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } [logo]
        
        @property { string } [title]
        
        @property { ProductSize } [size]
        
        @property { number } priority
        
        @property { string } [subtitle]
        
        @property { boolean } is_active
        
        @property { string } key
        
         
    */

/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProduct
        
        
        @property { ConfigurationProductVariant } variant
        
        @property { ConfigurationProductSimilar } similar
        
         
    */

/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } app_id
        
        @property { ConfigurationListing } [listing]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [config_id]
        
        @property { string } config_type
        
        @property { string } [id]
        
         
    */

/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { AppCatalogConfiguration } [data]
        
        @property { boolean } [is_default]
        
         
    */

/**
        @typedef AppConfiguration
        
        
        @property { string } app_id
        
        @property { ConfigurationListing } [listing]
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [config_id]
        
        @property { string } config_type
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [filter]
        
        @property { Object } [sort]
        
         
    */

/**
        @typedef EntityConfiguration
        
        
        @property { string } app_id
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { string } [config_id]
        
        @property { string } config_type
        
        @property { string } [id]
        
         
    */

/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { EntityConfiguration } [data]
        
        @property { boolean } [is_default]
        
         
    */

/**
        @typedef ProductSortOn
        
        
        @property { string } [name]
        
        @property { boolean } [is_selected]
        
        @property { string } [value]
        
         
    */

/**
        @typedef ProductFiltersValue
        
        
        @property { number } [selected_min]
        
        @property { number } [selected_max]
        
        @property { string } [currency_code]
        
        @property { string } display
        
        @property { number } [count]
        
        @property { string } [query_format]
        
        @property { number } [min]
        
        @property { number } [max]
        
        @property { string } [display_format]
        
        @property { boolean } is_selected
        
        @property { string } [currency_symbol]
        
        @property { string } value
        
         
    */

/**
        @typedef ProductFiltersKey
        
        
        @property { string } name
        
        @property { string } [kind]
        
        @property { string } display
        
        @property { string } [logo]
        
         
    */

/**
        @typedef ProductFilters
        
        
        @property { Array<ProductFiltersValue> } values
        
        @property { ProductFiltersKey } key
        
         
    */

/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductSortOn> } [sort_on]
        
        @property { Array<ProductFilters> } [filters]
        
         
    */

/**
        @typedef Media1
        
        
        @property { Object } [meta]
        
        @property { string } url
        
        @property { string } [type]
        
         
    */

/**
        @typedef BannerImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [url]
        
         
    */

/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [landscape]
        
        @property { BannerImage } [portrait]
        
         
    */

/**
        @typedef ProductListingActionPage
        
        
        @property { Object } [query]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ProductListingAction
        
        
        @property { ProductListingActionPage } [page]
        
        @property { string } [type]
        
         
    */

/**
        @typedef GetCollectionDetailNest
        
        
        @property { Media1 } [logo]
        
        @property { boolean } [allow_facets]
        
        @property { boolean } [is_active]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [query]
        
        @property { string } [description]
        
        @property { boolean } [allow_sort]
        
        @property { Object } [badge]
        
        @property { string } [slug]
        
        @property { ProductListingAction } [action]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { string } [name]
        
        @property { string } [uid]
        
        @property { string } [type]
        
        @property { string } [app_id]
        
        @property { Object } [_schedule]
        
        @property { Object } [meta]
        
        @property { Object } [cron]
        
        @property { Array<string> } [tag]
        
         
    */

/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [name]
        
        @property { boolean } [is_selected]
        
        @property { string } [display]
        
         
    */

/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [name]
        
        @property { boolean } [is_selected]
        
        @property { string } [display]
        
         
    */

/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterType> } [type]
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
         
    */

/**
        @typedef GetCollectionListingResponse
        
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { Page } [page]
        
        @property { CollectionListingFilter } [filters]
        
         
    */

/**
        @typedef CollectionImage
        
        
        @property { string } aspect_ratio
        
        @property { string } url
        
         
    */

/**
        @typedef UserInfo
        
        
        @property { string } [username]
        
        @property { string } [email]
        
        @property { string } [uid]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } landscape
        
        @property { CollectionImage } portrait
        
         
    */

/**
        @typedef SeoDetail
        
        
        @property { string } [description]
        
        @property { string } [title]
        
         
    */

/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */

/**
        @typedef Schedule
        
        
        @property { string } [end]
        
        @property { string } [start]
        
        @property { number } [duration]
        
        @property { string } [cron]
        
         
    */

/**
        @typedef CreateCollection
        
        
        @property { CollectionImage } logo
        
        @property { boolean } [allow_facets]
        
        @property { boolean } [is_active]
        
        @property { Object } [_custom_json]
        
        @property { UserInfo } [modified_by]
        
        @property { CollectionBanner } banners
        
        @property { SeoDetail } [seo]
        
        @property { Object } [query]
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { boolean } [published]
        
        @property { UserInfo } [created_by]
        
        @property { boolean } [allow_sort]
        
        @property { Object } [_locale_language]
        
        @property { CollectionBadge } [badge]
        
        @property { string } slug
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { string } name
        
        @property { string } type
        
        @property { string } app_id
        
        @property { Schedule } [_schedule]
        
        @property { Object } [meta]
        
        @property { string } [sort_on]
        
         
    */

/**
        @typedef CollectionCreateResponse
        
        
        @property { string } [app_id]
        
        @property { Object } [query]
        
        @property { string } [description]
        
        @property { BannerImage } [logo]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Object } [badge]
        
        @property { string } [name]
        
        @property { Object } [_schedule]
        
        @property { Object } [meta]
        
        @property { boolean } [allow_facets]
        
        @property { boolean } [allow_sort]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [is_active]
        
        @property { Object } [cron]
        
        @property { ImageUrls } [banners]
        
        @property { string } [type]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef CollectionDetailResponse
        
        
        @property { string } [app_id]
        
        @property { Object } [query]
        
        @property { string } [description]
        
        @property { Media1 } [logo]
        
        @property { Array<string> } [visible_facets_keys]
        
        @property { Object } [badge]
        
        @property { string } [name]
        
        @property { Object } [_schedule]
        
        @property { Object } [meta]
        
        @property { boolean } [allow_facets]
        
        @property { boolean } [allow_sort]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [is_active]
        
        @property { Object } [cron]
        
        @property { ImageUrls } [banners]
        
        @property { string } [type]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef ProductDetailAttribute
        
        
        @property { string } [value]
        
        @property { string } [type]
        
        @property { string } [key]
        
         
    */

/**
        @typedef ProductDetailGroupedAttribute
        
        
        @property { string } [title]
        
        @property { Array<ProductDetailAttribute> } [details]
        
         
    */

/**
        @typedef ProductBrand
        
        
        @property { string } [name]
        
        @property { ProductListingAction } [action]
        
        @property { Media1 } [logo]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef Price1
        
        
        @property { number } [min]
        
        @property { number } [max]
        
        @property { string } [currency_symbol]
        
        @property { string } [currency_code]
        
         
    */

/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [effective]
        
        @property { Price1 } [marked]
        
         
    */

/**
        @typedef ProductListingDetail
        
        
        @property { Array<Media1> } [medias]
        
        @property { string } [item_type]
        
        @property { string } [image_nature]
        
        @property { boolean } [has_variant]
        
        @property { Object } [teaser_tag]
        
        @property { Array<string> } [tryouts]
        
        @property { string } [description]
        
        @property { Object } [attributes]
        
        @property { Array<ProductDetailGroupedAttribute> } [grouped_attributes]
        
        @property { number } [rating_count]
        
        @property { ProductBrand } [brand]
        
        @property { Array<string> } [similars]
        
        @property { string } [product_online_date]
        
        @property { number } [rating]
        
        @property { string } slug
        
        @property { string } [discount]
        
        @property { string } [name]
        
        @property { ProductListingPrice } [price]
        
        @property { string } [color]
        
        @property { string } [short_description]
        
        @property { string } [item_code]
        
        @property { string } [type]
        
        @property { number } [uid]
        
        @property { Array<string> } [highlights]
        
        @property { Object } [promo_meta]
        
        @property { boolean } [sellable]
        
         
    */

/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } [page]
        
        @property { Array<ProductSortOn> } [sort_on]
        
        @property { Array<ProductFilters> } [filters]
        
         
    */

/**
        @typedef CollectionItemRequest
        
        
        @property { number } page_size
        
        @property { number } page_no
        
         
    */

/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [available_articles]
        
        @property { number } [total_sizes]
        
        @property { string } [name]
        
        @property { number } [article_freshness]
        
        @property { number } [available_sizes]
        
        @property { number } [total_articles]
        
         
    */

/**
        @typedef CatalogInsightItem
        
        
        @property { number } [out_of_stock_count]
        
        @property { number } [sellable_count]
        
        @property { number } [count]
        
         
    */

/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightBrand } [brand_distribution]
        
        @property { CatalogInsightItem } [item]
        
         
    */

/**
        @typedef CrossSellingData
        
        
        @property { number } [articles]
        
        @property { number } [products]
        
         
    */

/**
        @typedef CrossSellingResponse
        
        
        @property { CatalogInsightBrand } [brand_distribution]
        
        @property { CrossSellingData } [data]
        
         
    */

/**
        @typedef OptInPostRequest
        
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
        @property { boolean } [enabled]
        
        @property { string } opt_level
        
         
    */

/**
        @typedef CompanyOptIn
        
        
        @property { number } company_id
        
        @property { number } created_on
        
        @property { Object } [created_by]
        
        @property { boolean } enabled
        
        @property { string } opt_level
        
        @property { string } platform
        
        @property { Object } [modified_by]
        
        @property { Array<number> } brand_ids
        
        @property { Array<number> } store_ids
        
        @property { number } modified_on
        
         
    */

/**
        @typedef GetOptInPlatform
        
        
        @property { Array<CompanyOptIn> } items
        
        @property { Page } page
        
         
    */

/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [name]
        
        @property { string } [company_type]
        
        @property { string } [business_type]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [total_article]
        
        @property { number } [company_id]
        
        @property { string } [brand_name]
        
        @property { number } [brand_id]
        
         
    */

/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Array<CompanyBrandDetail> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef OptinCompanyMetrics
        
        
        @property { string } [company]
        
        @property { number } [store]
        
        @property { number } [brand]
        
         
    */

/**
        @typedef StoreDetail
        
        
        @property { string } [store_type]
        
        @property { number } [company_id]
        
        @property { Array<Object> } [additional_contacts]
        
        @property { Object } [timing]
        
        @property { string } [name]
        
        @property { string } [display_name]
        
        @property { string } [store_code]
        
        @property { Array<Object> } [documents]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef OptinStoreDetails
        
        
        @property { Array<StoreDetail> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AttributeSchemaRange
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef AttributeMaster
        
        
        @property { boolean } [multi]
        
        @property { AttributeSchemaRange } [range]
        
        @property { boolean } [mandatory]
        
        @property { string } [format]
        
        @property { string } type
        
        @property { Array<string> } [allowed_values]
        
         
    */

/**
        @typedef AttributeMasterMandatoryDetails
        
        
        @property { Array<string> } [l3_keys]
        
         
    */

/**
        @typedef AttributeMasterMeta
        
        
        @property { AttributeMasterMandatoryDetails } mandatory_details
        
        @property { boolean } [enriched]
        
         
    */

/**
        @typedef AttributeMasterFilter
        
        
        @property { Array<string> } [depends_on]
        
        @property { number } [priority]
        
        @property { boolean } indexing
        
         
    */

/**
        @typedef AttributeMasterDetails
        
        
        @property { string } display_type
        
         
    */

/**
        @typedef GenderDetail
        
        
        @property { AttributeMaster } [schema]
        
        @property { string } [description]
        
        @property { string } [logo]
        
        @property { boolean } [is_nested]
        
        @property { string } [name]
        
        @property { AttributeMasterMeta } [meta]
        
        @property { boolean } [enabled_for_end_consumer]
        
        @property { AttributeMasterFilter } [filters]
        
        @property { string } [id]
        
        @property { Array<string> } [departments]
        
        @property { AttributeMasterDetails } [details]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PTErrorResponse
        
        
        @property { Object } [meta]
        
        @property { number } [status]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { string } [code]
        
         
    */

/**
        @typedef UserSerializer
        
        
        @property { string } [user_id]
        
        @property { string } [username]
        
        @property { string } [contact]
        
         
    */

/**
        @typedef GetDepartment
        
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { Array<string> } [synonyms]
        
        @property { number } [page_size]
        
        @property { string } [item_type]
        
        @property { UserSerializer } [created_by]
        
        @property { boolean } [is_active]
        
        @property { number } [page_no]
        
        @property { UserSerializer } [modified_by]
        
        @property { number } [priority_order]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { string } [search]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef DepartmentsResponse
        
        
        @property { Array<GetDepartment> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef DepartmentErrorResponse
        
        
        @property { Object } [meta]
        
        @property { number } [status]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { string } [code]
        
         
    */

/**
        @typedef ProductTemplate
        
        
        @property { boolean } [is_archived]
        
        @property { string } [description]
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { Array<string> } [attributes]
        
        @property { Object } [created_by]
        
        @property { boolean } is_physical
        
        @property { Object } [modified_by]
        
        @property { boolean } [is_active]
        
        @property { string } slug
        
        @property { Array<string> } [categories]
        
        @property { Array<string> } [departments]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { string } [tag]
        
         
    */

/**
        @typedef TemplatesResponse
        
        
        @property { ProductTemplate } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef MultipleCommon
        
        
        @property { string } [uid]
        
         
    */

/**
        @typedef TemplatesValidationResponse
        
        
        @property { MultipleCommon } [data]
        
         
    */

/**
        @typedef InventoryValidationResponse
        
        
        @property { MultipleCommon } [data]
        
        @property { string } [message]
        
         
    */

/**
        @typedef HSNData
        
        
        @property { Array<string> } [country_of_origin]
        
        @property { Array<string> } [hsn_code]
        
         
    */

/**
        @typedef HSNCodesResponse
        
        
        @property { HSNData } [data]
        
        @property { string } [message]
        
         
    */

/**
        @typedef ProductConfligurationDownloads
        
        
        @property { boolean } [multivalue]
        
        @property { Array<MultipleCommon> } [data]
        
         
    */

/**
        @typedef Media2
        
        
        @property { string } landscape
        
        @property { string } portrait
        
        @property { string } logo
        
         
    */

/**
        @typedef Hierarchy
        
        
        @property { number } department
        
        @property { number } l2
        
        @property { number } l1
        
         
    */

/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalog_id]
        
         
    */

/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [facebook]
        
        @property { CategoryMappingValues } [ajio]
        
         
    */

/**
        @typedef Category
        
        
        @property { Array<string> } [tryouts]
        
        @property { Media2 } [media]
        
        @property { number } [priority]
        
        @property { string } name
        
        @property { Array<string> } [synonyms]
        
        @property { Object } [created_by]
        
        @property { number } level
        
        @property { boolean } is_active
        
        @property { string } [slug]
        
        @property { string } [_id]
        
        @property { Object } [modified_by]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { Array<number> } departments
        
         
    */

/**
        @typedef CategoryResponse
        
        
        @property { Array<Category> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CategoryRequestBody
        
        
        @property { Array<string> } [tryouts]
        
        @property { Media2 } [media]
        
        @property { number } [priority]
        
        @property { string } name
        
        @property { Array<string> } [synonyms]
        
        @property { number } level
        
        @property { boolean } is_active
        
        @property { string } [slug]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Array<number> } departments
        
         
    */

/**
        @typedef CategoryCreateResponse
        
        
        @property { number } [uid]
        
        @property { string } [message]
        
         
    */

/**
        @typedef CategoryUpdateResponse
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef UserCommon
        
        
        @property { number } [company_id]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */

/**
        @typedef VerifiedBy
        
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */

/**
        @typedef Attributes
        
        
        @property { Array<string> } [gender]
        
        @property { string } [material]
        
        @property { string } [primary_material]
        
        @property { string } [sleeve_length]
        
        @property { string } [primary_color]
        
        @property { string } [image_nature]
        
        @property { boolean } [is_image_less_product]
        
        @property { UserCommon } [modified_by]
        
        @property { string } [created_on]
        
        @property { Array<string> } [l3_mapping]
        
        @property { UserCommon } [created_by]
        
        @property { VerifiedBy } [verified_by]
        
        @property { string } [pattern]
        
        @property { string } [stage]
        
        @property { string } [essential]
        
        @property { string } [color]
        
        @property { string } [modified_on]
        
        @property { string } [neck_type]
        
        @property { string } [verified_on]
        
        @property { string } [product_fit]
        
        @property { string } [meta_nature]
        
         
    */

/**
        @typedef Logo
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [url]
        
        @property { string } [secure_url]
        
        @property { number } [aspect_ratio_f]
        
         
    */

/**
        @typedef Brand
        
        
        @property { string } [name]
        
        @property { Logo } [logo]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef ProductPublished
        
        
        @property { number } [product_online_date]
        
        @property { boolean } [is_set]
        
         
    */

/**
        @typedef Product
        
        
        @property { string } [size_guide]
        
        @property { string } [item_type]
        
        @property { boolean } [is_active]
        
        @property { Array<Object> } [sizes]
        
        @property { string } [country_of_origin]
        
        @property { string } [description]
        
        @property { string } [template_tag]
        
        @property { boolean } [is_dependent]
        
        @property { boolean } [multi_size]
        
        @property { Attributes } [attributes]
        
        @property { Brand } [brand]
        
        @property { string } [slug]
        
        @property { number } [company_id]
        
        @property { string } [name]
        
        @property { Array<string> } [all_sizes]
        
        @property { string } [category_slug]
        
        @property { string } [id]
        
        @property { string } [item_code]
        
        @property { number } [uid]
        
        @property { string } [currency]
        
        @property { Array<number> } [departments]
        
        @property { Array<string> } [media]
        
        @property { string } [highlights]
        
        @property { boolean } [is_set]
        
        @property { string } [hsn_code]
        
        @property { ProductPublished } [product_publish]
        
        @property { Array<string> } [images]
        
         
    */

/**
        @typedef PageData
        
        
        @property { boolean } [has_next]
        
        @property { number } [size]
        
        @property { string } [current]
        
        @property { number } [item_total]
        
        @property { boolean } [has_previous]
        
         
    */

/**
        @typedef ProductListingResponse
        
        
        @property { Array<Product> } [items]
        
        @property { PageData } [page]
        
         
    */

/**
        @typedef CustomOrder
        
        
        @property { boolean } [is_custom_order]
        
        @property { string } [manufacturing_time_unit]
        
        @property { number } [manufacturing_time]
        
         
    */

/**
        @typedef TeaserTag
        
        
        @property { string } [url]
        
        @property { string } [tag]
        
         
    */

/**
        @typedef OrderQuantity
        
        
        @property { number } [minimum]
        
        @property { number } [maximum]
        
        @property { boolean } [is_set]
        
         
    */

/**
        @typedef ReturnConfig
        
        
        @property { boolean } [returnable]
        
        @property { string } [unit]
        
        @property { number } [time]
        
         
    */

/**
        @typedef Trader
        
        
        @property { string } name
        
        @property { string } address
        
         
    */

/**
        @typedef ProductPublish
        
        
        @property { string } [product_online_date]
        
        @property { boolean } [is_set]
        
         
    */

/**
        @typedef ProductCreateUpdate
        
        
        @property { Array<string> } [product_group_tag]
        
        @property { string } [trader_type]
        
        @property { string } [size_guide]
        
        @property { Object } [variants]
        
        @property { string } [requester]
        
        @property { string } item_type
        
        @property { boolean } [is_image_less_product]
        
        @property { boolean } [is_active]
        
        @property { CustomOrder } [custom_order]
        
        @property { Object } [_custom_json]
        
        @property { TeaserTag } [teaser_tag]
        
        @property { string } country_of_origin
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { string } template_tag
        
        @property { boolean } [is_dependent]
        
        @property { boolean } [multi_size]
        
        @property { string } slug
        
        @property { string } [change_request_id]
        
        @property { number } company_id
        
        @property { string } name
        
        @property { number } [no_of_boxes]
        
        @property { OrderQuantity } [moq]
        
        @property { string } category_slug
        
        @property { string } [short_description]
        
        @property { string } item_code
        
        @property { string } currency
        
        @property { number } [uid]
        
        @property { Array<number> } departments
        
        @property { ReturnConfig } [return_config]
        
        @property { Trader } [trader]
        
        @property { Array<Media1> } [media]
        
        @property { number } brand_uid
        
        @property { Array<string> } [highlights]
        
        @property { boolean } [is_set]
        
        @property { string } hsn_code
        
        @property { ProductPublish } [product_publish]
        
         
    */

/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */

/**
        @typedef UserDetail
        
        
        @property { string } [full_name]
        
        @property { string } [user_id]
        
        @property { string } [username]
        
         
    */

/**
        @typedef ProductBulkRequest
        
        
        @property { string } [file_path]
        
        @property { number } [company_id]
        
        @property { number } [cancelled]
        
        @property { string } [template_tag]
        
        @property { Array<string> } [failed_records]
        
        @property { UserDetail } [created_by]
        
        @property { Array<string> } [cancelled_records]
        
        @property { UserDetail } [modified_by]
        
        @property { boolean } [is_active]
        
        @property { number } [total]
        
        @property { string } [stage]
        
        @property { number } [failed]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { ProductTemplate } [template]
        
        @property { number } [succeed]
        
         
    */

/**
        @typedef ProductBulkRequestList
        
        
        @property { ProductBulkRequest } [items]
        
        @property { PageData } [page]
        
         
    */

/**
        @typedef UserInfo1
        
        
        @property { string } [username]
        
        @property { string } [email]
        
        @property { string } [uid]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef BulkJob
        
        
        @property { string } [file_path]
        
        @property { number } company_id
        
        @property { string } [custom_template_tag]
        
        @property { string } [template_tag]
        
        @property { string } [tracking_url]
        
        @property { number } total
        
        @property { Array<Object> } [failed_records]
        
        @property { UserInfo1 } [created_by]
        
        @property { Array<Object> } [cancelled_records]
        
        @property { boolean } [is_active]
        
        @property { number } [failed]
        
        @property { UserInfo1 } [modified_by]
        
        @property { string } [stage]
        
        @property { number } [cancelled]
        
        @property { string } created_on
        
        @property { string } [modified_on]
        
        @property { number } [succeed]
        
         
    */

/**
        @typedef BulkProductRequest
        
        
        @property { number } company_id
        
        @property { Array<Object> } data
        
        @property { string } batch_id
        
        @property { string } template_tag
        
         
    */

/**
        @typedef NestedTags
        
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef ProductTagsViewResponse
        
        
        @property { NestedTags } [items]
        
         
    */

/**
        @typedef Items
        
        
        @property { string } [file_path]
        
        @property { number } [company_id]
        
        @property { string } [id]
        
        @property { number } [retry]
        
        @property { number } [cancelled]
        
        @property { string } [tracking_url]
        
        @property { Array<string> } [failed_records]
        
        @property { number } [total]
        
        @property { UserCommon } [created_by]
        
        @property { Array<string> } [cancelled_records]
        
        @property { boolean } [is_active]
        
        @property { UserCommon } [modified_by]
        
        @property { string } [stage]
        
        @property { number } [failed]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
        @property { number } [succeed]
        
         
    */

/**
        @typedef BulkAssetResponse
        
        
        @property { Array<Items> } [items]
        
        @property { PageData } [page]
        
         
    */

/**
        @typedef ProductBulkAssets
        
        
        @property { Object } user
        
        @property { number } [company_id]
        
        @property { string } url
        
         
    */

/**
        @typedef InventoryRequest
        
        
        @property { string } [size]
        
        @property { number } [page_size]
        
        @property { number } [page_no]
        
        @property { number } [total]
        
        @property { string } [search]
        
         
    */

/**
        @typedef GTIN
        
        
        @property { boolean } [primary]
        
        @property { string } gtin_type
        
        @property { string } gtin_value
        
         
    */

/**
        @typedef SetSize
        
        
        @property { number } pieces
        
        @property { string } size
        
         
    */

/**
        @typedef SizeDistribution
        
        
        @property { Array<SetSize> } sizes
        
         
    */

/**
        @typedef InventorySet
        
        
        @property { number } [quantity]
        
        @property { SizeDistribution } size_distribution
        
         
    */

/**
        @typedef InvSize
        
        
        @property { string } size
        
        @property { number } [item_width]
        
        @property { number } quantity
        
        @property { number } [item_length]
        
        @property { number } price
        
        @property { number } [item_height]
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } [item_weight]
        
        @property { boolean } [is_set]
        
        @property { number } price_effective
        
        @property { number } [price_transfer]
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { Array<GTIN> } identifiers
        
        @property { string } store_code
        
        @property { InventorySet } [set]
        
        @property { string } currency
        
         
    */

/**
        @typedef ItemQuery
        
        
        @property { string } [item_code]
        
        @property { number } [uid]
        
        @property { number } [brand_uid]
        
         
    */

/**
        @typedef InventoryRequest1
        
        
        @property { Array<InvSize> } sizes
        
        @property { number } company_id
        
        @property { ItemQuery } item
        
         
    */

/**
        @typedef BulkRequestGet
        
        
        @property { string } [custom_template_tag]
        
        @property { string } [end_date]
        
        @property { string } [template_tag]
        
        @property { string } [start_date]
        
        @property { number } [page_size]
        
        @property { number } [page_no]
        
        @property { number } [total]
        
        @property { string } [stage]
        
        @property { string } [search]
        
         
    */

/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */

/**
        @typedef Size1
        
        
        @property { string } [size]
        
        @property { number } [item_width]
        
        @property { number } quantity
        
        @property { number } [item_length]
        
        @property { number } price
        
        @property { number } [item_height]
        
        @property { string } [item_weight_unit_of_measure]
        
        @property { number } [item_weight]
        
        @property { boolean } [is_set]
        
        @property { number } price_effective
        
        @property { number } [price_transfer]
        
        @property { string } [item_dimensions_unit_of_measure]
        
        @property { Array<Object> } [identifiers]
        
        @property { string } store_code
        
        @property { string } seller_identifier
        
        @property { InventorySet } [set]
        
        @property { string } currency
        
         
    */

/**
        @typedef InventoryBulkRequest
        
        
        @property { Array<Size1> } sizes
        
        @property { Object } [user]
        
        @property { number } company_id
        
        @property { string } batch_id
        
         
    */

/**
        @typedef InventoryExportJob
        
        
        @property { string } [trigger_on]
        
        @property { Object } [request_params]
        
        @property { string } [url]
        
        @property { number } seller_id
        
        @property { string } [completed_on]
        
        @property { string } [status]
        
        @property { string } task_id
        
         
    */

/**
        @typedef InventoryExportRequest
        
        
        @property { Array<number> } [store]
        
        @property { Array<number> } [brand]
        
        @property { string } [type]
        
         
    */

/**
        @typedef FilerList
        
        
        @property { string } [display]
        
        @property { string } [value]
        
         
    */

/**
        @typedef InventoryConfig
        
        
        @property { boolean } [multivalues]
        
        @property { Array<FilerList> } [data]
        
         
    */

/**
        @typedef HsnCodesObject
        
        
        @property { number } [company_id]
        
        @property { string } [hs2_code]
        
        @property { number } [tax1]
        
        @property { number } [threshold2]
        
        @property { number } [threshold1]
        
        @property { boolean } [tax_on_mrp]
        
        @property { boolean } [tax_on_esp]
        
        @property { string } [hsn_code]
        
        @property { string } [id]
        
        @property { number } [tax2]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef PageResponse
        
        
        @property { boolean } [has_next]
        
        @property { number } [size]
        
        @property { string } [current]
        
        @property { number } [item_total]
        
        @property { boolean } [has_previous]
        
         
    */

/**
        @typedef HsnCodesListingResponse
        
        
        @property { Array<HsnCodesObject> } [items]
        
        @property { PageResponse } [page]
        
         
    */

/**
        @typedef HsnUpsert
        
        
        @property { number } company_id
        
        @property { string } hs2_code
        
        @property { number } tax1
        
        @property { number } [threshold2]
        
        @property { number } threshold1
        
        @property { boolean } tax_on_mrp
        
        @property { boolean } [tax_on_esp]
        
        @property { string } hsn_code
        
        @property { number } [tax2]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef HsnCode
        
        
        @property { HsnCodesObject } [data]
        
         
    */

/**
        @typedef BulkHsnUpsert
        
        
        @property { Array<HsnUpsert> } data
        
         
    */

/**
        @typedef BulkHsnResponse
        
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef BrandItem
        
        
        @property { ProductListingAction } [action]
        
        @property { Media } [logo]
        
        @property { string } [discount]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { ImageUrls } [banners]
        
        @property { number } [uid]
        
        @property { Array<string> } [departments]
        
         
    */

/**
        @typedef BrandListingResponse
        
        
        @property { Array<BrandItem> } [items]
        
        @property { Page } page
        
         
    */

/**
        @typedef Department
        
        
        @property { Media } [logo]
        
        @property { string } [name]
        
        @property { number } [priority_order]
        
        @property { number } [uid]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef DepartmentResponse
        
        
        @property { Array<Department> } [items]
        
         
    */

/**
        @typedef CategoryItems
        
        
        @property { ProductListingAction } [action]
        
        @property { string } [name]
        
        @property { Array<Object> } [childs]
        
        @property { ImageUrls } [banners]
        
        @property { number } [uid]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef DepartmentCategoryTree
        
        
        @property { Array<CategoryItems> } [items]
        
        @property { string } [department]
        
         
    */

/**
        @typedef DepartmentIdentifier
        
        
        @property { number } [uid]
        
        @property { string } [slug]
        
         
    */

/**
        @typedef CategoryListingResponse
        
        
        @property { Array<DepartmentCategoryTree> } [data]
        
        @property { Array<DepartmentIdentifier> } [departments]
        
         
    */

/**
        @typedef ApplicationProductListingResponse
        
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } page
        
        @property { Array<ProductSortOn> } [sort_on]
        
        @property { Array<ProductFilters> } [filters]
        
         
    */

/**
        @typedef ProductDetail
        
        
        @property { Array<Media1> } [medias]
        
        @property { string } [item_type]
        
        @property { string } [image_nature]
        
        @property { boolean } [has_variant]
        
        @property { Object } [teaser_tag]
        
        @property { Array<string> } [tryouts]
        
        @property { string } [description]
        
        @property { Object } [attributes]
        
        @property { Array<ProductDetailGroupedAttribute> } [grouped_attributes]
        
        @property { number } [rating_count]
        
        @property { ProductBrand } [brand]
        
        @property { Array<string> } [similars]
        
        @property { string } [product_online_date]
        
        @property { number } [rating]
        
        @property { string } slug
        
        @property { string } [name]
        
        @property { string } [color]
        
        @property { string } [short_description]
        
        @property { string } [item_code]
        
        @property { string } [type]
        
        @property { number } [uid]
        
        @property { Array<string> } [highlights]
        
        @property { Object } [promo_meta]
        
         
    */

/**
        @typedef Document
        
        
        @property { boolean } [verified]
        
        @property { string } value
        
        @property { string } type
        
        @property { string } legal_name
        
        @property { string } [url]
        
         
    */

/**
        @typedef CompanyAddress
        
        
        @property { string } state
        
        @property { string } city
        
        @property { string } [landmark]
        
        @property { string } address1
        
        @property { string } country
        
        @property { string } [country_code]
        
        @property { number } pincode
        
        @property { number } latitude
        
        @property { number } longitude
        
        @property { string } [address2]
        
         
    */

/**
        @typedef ReferralInfo
        
        
        @property { string } [referral_code]
        
         
    */

/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [country]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { number } [uid]
        
        @property { Document } document
        
        @property { string } name
        
        @property { Array<string> } [notification_emails]
        
        @property { CompanyAddress } address
        
        @property { Object } [warnings]
        
        @property { boolean } [franchise_enabled]
        
        @property { ReferralInfo } [referral_info]
        
        @property { string } [business_info]
        
        @property { Array<number> } brands
        
        @property { BusinessCountryInfo } business_country_info
        
        @property { string } business_type
        
         
    */

/**
        @typedef SellerPhoneNumber
        
        
        @property { number } country_code
        
        @property { string } number
        
         
    */

/**
        @typedef ContactDetails
        
        
        @property { Array<SellerPhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
    */

/**
        @typedef GetAddressSerializer
        
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { string } [country]
        
        @property { string } [country_code]
        
        @property { number } [pincode]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [address_type]
        
        @property { string } [address2]
        
         
    */

/**
        @typedef Website
        
        
        @property { string } [url]
        
         
    */

/**
        @typedef BusinessDetails
        
        
        @property { Website } [website]
        
         
    */

/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [country]
        
        @property { string } [country_code]
        
         
    */

/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { ContactDetails } [contact_details]
        
        @property { Array<Document> } [documents]
        
        @property { Object } [warnings]
        
        @property { string } company_type
        
        @property { string } [business_info]
        
        @property { UserSerializer } [modified_by]
        
        @property { string } [created_on]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [stage]
        
        @property { string } [verified_on]
        
        @property { number } uid
        
        @property { string } [name]
        
        @property { Array<string> } [notification_emails]
        
        @property { UserSerializer } [verified_by]
        
        @property { UserSerializer } [created_by]
        
        @property { boolean } [franchise_enabled]
        
        @property { string } [modified_on]
        
        @property { BusinessDetails } [business_details]
        
        @property { BusinessCountryInfo1 } [business_country_info]
        
        @property { string } business_type
        
         
    */

/**
        @typedef DocumentsObj
        
        
        @property { number } [verified]
        
        @property { number } [pending]
        
         
    */

/**
        @typedef MetricsSerializer
        
        
        @property { number } [uid]
        
        @property { DocumentsObj } [store]
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [store_documents]
        
        @property { DocumentsObj } [company_documents]
        
        @property { DocumentsObj } [brand]
        
        @property { string } [stage]
        
         
    */

/**
        @typedef UserSerializer1
        
        
        @property { string } [contact]
        
        @property { string } [username]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [portrait]
        
        @property { string } [landscape]
        
         
    */

/**
        @typedef GetBrandResponseSerializer
        
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { string } name
        
        @property { string } [created_on]
        
        @property { string } [logo]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { Object } [warnings]
        
        @property { UserSerializer1 } [verified_by]
        
        @property { string } [slug_key]
        
        @property { string } [description]
        
        @property { UserSerializer1 } [created_by]
        
        @property { Object } [_custom_json]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [stage]
        
        @property { Object } [_locale_language]
        
        @property { string } [verified_on]
        
        @property { string } [reject_reason]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { number } [uid]
        
        @property { string } name
        
        @property { string } logo
        
        @property { string } [brand_tier]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { number } [company_id]
        
        @property { string } [description]
        
        @property { Object } [_custom_json]
        
        @property { Array<string> } [synonyms]
        
        @property { Object } [_locale_language]
        
         
    */

/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { number } [uid]
        
        @property { Array<number> } brands
        
        @property { number } company
        
         
    */

/**
        @typedef GetCompanySerializer
        
        
        @property { number } [uid]
        
        @property { UserSerializer } [modified_by]
        
        @property { string } [name]
        
        @property { string } [created_on]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [company_type]
        
        @property { UserSerializer } [verified_by]
        
        @property { UserSerializer } [created_by]
        
        @property { string } [stage]
        
        @property { string } [verified_on]
        
        @property { string } [reject_reason]
        
        @property { string } [business_type]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef CompanyBrandSerializer
        
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { string } [created_on]
        
        @property { Object } [warnings]
        
        @property { UserSerializer1 } [verified_by]
        
        @property { UserSerializer1 } [created_by]
        
        @property { GetBrandResponseSerializer } [brand]
        
        @property { GetCompanySerializer } [company]
        
        @property { string } [stage]
        
        @property { string } [verified_on]
        
        @property { string } [reject_reason]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<CompanyBrandSerializer> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [address1]
        
        @property { string } [country]
        
        @property { string } [country_code]
        
        @property { number } [pincode]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [address_type]
        
        @property { string } [address2]
        
         
    */

/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { number } [store_uid]
        
        @property { boolean } [on_same_store]
        
         
    */

/**
        @typedef LocationManagerSerializer
        
        
        @property { SellerPhoneNumber } mobile_no
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */

/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */

/**
        @typedef LocationDayWiseSerializer
        
        
        @property { LocationTimingSerializer } [closing]
        
        @property { boolean } open
        
        @property { LocationTimingSerializer } [opening]
        
        @property { string } weekday
        
         
    */

/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [password]
        
        @property { string } [username]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [e_waybill]
        
        @property { InvoiceCredSerializer } [e_invoice]
        
         
    */

/**
        @typedef LocationSerializer
        
        
        @property { number } [uid]
        
        @property { string } [store_type]
        
        @property { string } name
        
        @property { Array<string> } [notification_emails]
        
        @property { Array<Document> } [documents]
        
        @property { GetAddressSerializer1 } address
        
        @property { Object } [warnings]
        
        @property { ProductReturnConfigSerializer } [product_return_config]
        
        @property { string } display_name
        
        @property { string } code
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Object } [_custom_json]
        
        @property { number } company
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } [stage]
        
        @property { Array<SellerPhoneNumber> } [contact_numbers]
        
        @property { InvoiceDetailsSerializer } [gst_credentials]
        
         
    */

/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */

/**
        @typedef GetLocationSerializer
        
        
        @property { LocationIntegrationType } [integration_type]
        
        @property { Array<Document> } [documents]
        
        @property { Object } [warnings]
        
        @property { Object } [_custom_json]
        
        @property { GetCompanySerializer } [company]
        
        @property { Array<SellerPhoneNumber> } [contact_numbers]
        
        @property { UserSerializer1 } [modified_by]
        
        @property { string } [created_on]
        
        @property { ProductReturnConfigSerializer } [product_return_config]
        
        @property { string } code
        
        @property { string } [stage]
        
        @property { string } [verified_on]
        
        @property { number } [uid]
        
        @property { string } name
        
        @property { Array<string> } [notification_emails]
        
        @property { UserSerializer1 } [verified_by]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { UserSerializer1 } [created_by]
        
        @property { InvoiceDetailsSerializer } [gst_credentials]
        
        @property { string } [modified_on]
        
        @property { string } [store_type]
        
        @property { GetAddressSerializer } address
        
        @property { string } display_name
        
        @property { string } phone_number
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
         
    */

/**
        @typedef LocationListSerializer
        
        
        @property { Array<GetLocationSerializer> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef FailedResponse
        
        
        @property { string } message
        
         
    */

/**
        @typedef CDN
        
        
        @property { string } url
        
         
    */

/**
        @typedef Upload
        
        
        @property { number } expiry
        
        @property { string } url
        
         
    */

/**
        @typedef StartResponse
        
        
        @property { string } file_name
        
        @property { string } file_path
        
        @property { string } content_type
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
         
    */

/**
        @typedef StartRequest
        
        
        @property { string } file_name
        
        @property { string } content_type
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef CompleteResponse
        
        
        @property { string } _id
        
        @property { string } file_name
        
        @property { string } file_path
        
        @property { string } content_type
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } created_on
        
        @property { string } modified_on
        
         
    */

/**
        @typedef Opts
        
        
        @property { number } [attempts]
        
        @property { number } [timestamp]
        
        @property { number } [delay]
        
         
    */

/**
        @typedef CopyFileTask
        
        
        @property { string } id
        
        @property { string } name
        
        @property { BulkRequest } data
        
        @property { Opts } opts
        
        @property { number } progress
        
        @property { number } delay
        
        @property { number } timestamp
        
        @property { number } attempts_made
        
        @property { Array<string> } [stacktrace]
        
        @property { number } finished_on
        
        @property { number } processed_on
        
         
    */

/**
        @typedef BulkResponse
        
        
        @property { string } tracking_url
        
        @property { CopyFileTask } task
        
         
    */

/**
        @typedef ReqConfiguration
        
        
        @property { number } [concurrency]
        
         
    */

/**
        @typedef Destination
        
        
        @property { string } namespace
        
        @property { string } rewrite
        
        @property { string } [basepath]
        
         
    */

/**
        @typedef BulkRequest
        
        
        @property { Array<string> } urls
        
        @property { Destination } destination
        
        @property { ReqConfiguration } [configuration]
        
         
    */

/**
        @typedef Urls
        
        
        @property { string } url
        
        @property { string } signed_url
        
        @property { number } expiry
        
         
    */

/**
        @typedef SignUrlResponse
        
        
        @property { Array<Urls> } urls
        
         
    */

/**
        @typedef SignUrlRequest
        
        
        @property { number } expiry
        
        @property { Array<string> } urls
        
         
    */

/**
        @typedef DbRecord
        
        
        @property { boolean } success
        
        @property { Array<string> } tags
        
        @property { string } _id
        
        @property { string } file_name
        
        @property { string } [operation]
        
        @property { string } namespace
        
        @property { string } content_type
        
        @property { string } file_path
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } created_on
        
        @property { string } modified_on
        
         
    */

/**
        @typedef BrowseResponse
        
        
        @property { Array<DbRecord> } items
        
        @property { Page } page
        
         
    */

/**
        @typedef RedirectDevice
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */

/**
        @typedef WebRedirect
        
        
        @property { string } [link]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Redirects
        
        
        @property { RedirectDevice } [ios]
        
        @property { RedirectDevice } [android]
        
        @property { WebRedirect } [web]
        
        @property { boolean } [force_web]
        
         
    */

/**
        @typedef CampaignShortLink
        
        
        @property { string } [source]
        
        @property { string } [medium]
        
         
    */

/**
        @typedef Attribution
        
        
        @property { string } [campaign_cookie_expiry]
        
         
    */

/**
        @typedef SocialMediaTags
        
        
        @property { string } [title]
        
        @property { string } [description]
        
        @property { string } [image]
        
         
    */

/**
        @typedef ShortLinkReq
        
        
        @property { string } title
        
        @property { string } url
        
        @property { string } [hash]
        
        @property { boolean } [active]
        
        @property { string } [expire_at]
        
        @property { boolean } [enable_tracking]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [social_media_tags]
        
        @property { number } [count]
        
         
    */

/**
        @typedef UrlInfo
        
        
        @property { string } [original]
        
        @property { string } [short]
        
        @property { string } [hash]
        
         
    */

/**
        @typedef ShortLinkRes
        
        
        @property { string } [title]
        
        @property { UrlInfo } [url]
        
        @property { string } [created_by]
        
        @property { boolean } [app_redirect]
        
        @property { string } [fallback]
        
        @property { boolean } [active]
        
        @property { string } [_id]
        
        @property { boolean } [enable_tracking]
        
        @property { string } [expire_at]
        
        @property { string } [application]
        
        @property { string } [user_id]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [social_media_tags]
        
        @property { number } [count]
        
         
    */

/**
        @typedef ShortLinkList
        
        
        @property { Array<ShortLinkRes> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ErrorRes
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef DataTresholdDTO
        
        
        @property { number } [min_price]
        
        @property { number } [safe_stock]
        
        @property { number } [period_threshold]
        
        @property { string } [period_threshold_type]
        
        @property { Array<GenericDTO> } [period_type_list]
        
         
    */

/**
        @typedef GenericDTO
        
        
        @property { string } [text]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef JobConfigDTO
        
        
        @property { string } integration
        
        @property { Object } [integration_data]
        
        @property { string } [company_name]
        
        @property { number } company_id
        
        @property { TaskDTO } [task_details]
        
        @property { DataTresholdDTO } [threshold_details]
        
        @property { string } [job_code]
        
        @property { string } [alias]
        
         
    */

/**
        @typedef TaskDTO
        
        
        @property { number } [type]
        
        @property { Array<GenericDTO> } [group_list]
        
         
    */

/**
        @typedef ResponseEnvelopeString
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { string } [items]
        
        @property { string } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AWSS3config
        
        
        @property { string } [bucket]
        
        @property { string } [region]
        
        @property { string } [dir]
        
        @property { string } [access_key]
        
        @property { string } [secret_key]
        
        @property { string } [local_file_path]
        
        @property { string } [archive_path]
        
        @property { boolean } [archive]
        
        @property { boolean } [delete]
        
        @property { boolean } [unzip]
        
        @property { string } [zip_format]
        
        @property { string } [file_regex]
        
        @property { ArchiveConfig } [archive_config]
        
         
    */

/**
        @typedef ArchiveConfig
        
        
        @property { boolean } [delete]
        
        @property { boolean } [archive]
        
        @property { string } [archive_dir]
        
         
    */

/**
        @typedef Audit
        
        
        @property { string } [created_by]
        
        @property { string } [modified_by]
        
        @property { string } [created_on]
        
        @property { string } [modified_on]
        
         
    */

/**
        @typedef CatalogMasterConfig
        
        
        @property { string } [source_slug]
        
         
    */

/**
        @typedef CompanyConfig
        
        
        @property { number } [company_id]
        
        @property { Array<number> } [exclude_steps]
        
        @property { Array<string> } [hidden_closet_keys]
        
        @property { Object } [open_tags]
        
        @property { Array<string> } [tax_identifiers]
        
        @property { number } [delete_quantity_threshold]
        
         
    */

/**
        @typedef DBConfig
        
        
        @property { string } [vendor]
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [dbname]
        
        @property { string } [query]
        
        @property { boolean } [procedure]
        
        @property { string } [driver_class]
        
        @property { string } [jdbc_url]
        
        @property { Object } [optional_properties]
        
         
    */

/**
        @typedef DBConnectionProfile
        
        
        @property { string } [inventory]
        
         
    */

/**
        @typedef DBParamConfig
        
        
        @property { Object } [params]
        
         
    */

/**
        @typedef DefaultHeadersDTO
        
        
        @property { PropBeanDTO } [store]
        
        @property { PropBeanDTO } [intf_article_id]
        
        @property { PropBeanDTO } [price_effective]
        
        @property { PropBeanDTO } [quantity]
        
         
    */

/**
        @typedef DocMappingConfig
        
        
        @property { Object } [properties]
        
        @property { number } [junk_data_threshold_count]
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
        @property { string } [unwind_field]
        
        @property { DefaultHeadersDTO } [default_headers]
        
         
    */

/**
        @typedef EmailConfig
        
        
        @property { string } [recepient]
        
        @property { string } [host]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { boolean } [read_from_content]
        
        @property { boolean } [filter_based_on_recepients]
        
        @property { string } [pcol]
        
        @property { string } [subject_line_regex]
        
        @property { string } [sender_address]
        
        @property { string } [local_dir]
        
        @property { Array<string> } [folder_name_hierarchies]
        
        @property { string } [attachment_regex]
        
        @property { string } [body_content_regex]
        
        @property { boolean } [password_protected]
        
        @property { string } [zip_format]
        
        @property { boolean } [attachment_mandate]
        
        @property { boolean } [filter_files_after_extraction]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { boolean } [read_all_unread_mails]
        
        @property { string } [content_type]
        
        @property { boolean } [downloadable_link]
        
        @property { Object } [properties]
        
         
    */

/**
        @typedef FTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [local_dir]
        
        @property { string } [remote_dir]
        
        @property { string } [zip_file_regex]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { string } [file_regex]
        
        @property { string } [zip_format]
        
        @property { boolean } [read_all_files]
        
         
    */

/**
        @typedef FileConfig
        
        
        @property { string } [delimiter]
        
        @property { string } [charset]
        
        @property { Object } [properties]
        
        @property { boolean } [file_has_header]
        
        @property { number } [header_index]
        
        @property { Array<string> } [header_array]
        
        @property { number } [data_start_index]
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
        @property { number } [junk_data_threshold_count]
        
        @property { string } [file_type]
        
        @property { boolean } [line_validity_check]
        
        @property { Array<string> } [sheet_names]
        
        @property { boolean } [read_all_sheets]
        
        @property { string } [quote_char]
        
        @property { string } [escape_char]
        
        @property { DefaultHeadersDTO } [default_headers]
        
         
    */

/**
        @typedef GoogleSpreadSheetConfig
        
        
        @property { string } [range]
        
        @property { string } [sheet_id]
        
        @property { string } [client_secret_location]
        
        @property { string } [cred_storage_directory]
        
        @property { string } [local_dir]
        
        @property { ArchiveConfig } [archive_config]
        
         
    */

/**
        @typedef HttpConfig
        
        
        @property { string } [hosturl]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { Object } [request_params]
        
        @property { string } [http_method]
        
        @property { string } [request_payload]
        
        @property { string } [local_path]
        
        @property { ArchiveConfig } [archive_config]
        
         
    */

/**
        @typedef JobConfig
        
        
        @property { number } [_id]
        
        @property { string } [job_code]
        
        @property { string } [task_type]
        
        @property { number } [sync_delay]
        
        @property { string } [cron_expression]
        
        @property { StoreFilter } [store_filter]
        
        @property { ProcessConfig } [process_config]
        
        @property { Array<StoreConfig> } [store_config]
        
        @property { Object } [properties]
        
        @property { boolean } [immediate_first_run]
        
        @property { boolean } [disable]
        
        @property { Array<string> } [dependent_job_codes]
        
        @property { Array<CompanyConfig> } [company_config]
        
        @property { Array<number> } [company_ids]
        
        @property { Array<string> } [tax_identifiers]
        
        @property { string } [priority]
        
        @property { number } [period_threshold]
        
        @property { string } [period_threshold_type]
        
        @property { DBConnectionProfile } [db_connection_profile]
        
        @property { Object } [params]
        
        @property { Object } [open_tags]
        
        @property { number } [delete_quantity_threshold]
        
        @property { CatalogMasterConfig } [catalog_master_config]
        
        @property { Array<string> } [aggregator_types]
        
        @property { string } [integration_type]
        
        @property { number } [min_price]
        
        @property { Audit } [audit]
        
        @property { number } [version]
        
        @property { string } [alias]
        
         
    */

/**
        @typedef JobConfigRawDTO
        
        
        @property { string } integration
        
        @property { string } company_name
        
        @property { number } company_id
        
        @property { JobConfig } [data]
        
         
    */

/**
        @typedef JsonDocConfig
        
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
         
    */

/**
        @typedef LocalFileConfig
        
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [local_dir]
        
        @property { string } [working_dir]
        
        @property { boolean } [unzip]
        
        @property { string } [zip_file_regex]
        
        @property { string } [file_regex]
        
        @property { string } [zip_format]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { boolean } [read_all_files]
        
         
    */

/**
        @typedef MongoDocConfig
        
        
        @property { string } [collection_name]
        
        @property { Object } [find_query]
        
        @property { Object } [projection_query]
        
        @property { Array<PropBeanConfig> } [prop_bean_configs]
        
        @property { Array<Object> } [aggregate_pipeline]
        
        @property { boolean } [skip_save]
        
         
    */

/**
        @typedef OAuthConfig
        
        
        @property { number } [limit]
        
        @property { number } [pages]
        
        @property { number } [interval]
        
        @property { string } [consumer_key]
        
        @property { string } [consumer_secret]
        
        @property { string } [token]
        
        @property { string } [token_secret]
        
        @property { string } [rest_url]
        
        @property { string } [rest_base_url]
        
        @property { string } [function_name]
        
         
    */

/**
        @typedef ProcessConfig
        
        
        @property { DBConfig } [db_config]
        
        @property { DBParamConfig } [db_param_config]
        
        @property { SFTPConfig } [sftp_config]
        
        @property { AWSS3config } [aws_s3_config]
        
        @property { MongoDocConfig } [mongo_doc_config]
        
        @property { FTPConfig } [ftp_config]
        
        @property { EmailConfig } [email_config]
        
        @property { FileConfig } [file_config]
        
        @property { JsonDocConfig } [json_doc_config]
        
        @property { DocMappingConfig } [doc_mapping_config]
        
        @property { TaskStepConfig } [task_step_config]
        
        @property { HttpConfig } [http_config]
        
        @property { LocalFileConfig } [local_file_config]
        
        @property { OAuthConfig } [oauth_config]
        
        @property { GoogleSpreadSheetConfig } [google_spreadsheet_config]
        
         
    */

/**
        @typedef PropBeanConfig
        
        
        @property { boolean } [required]
        
        @property { Object } [mapping]
        
        @property { boolean } [optional]
        
        @property { Send } [send]
        
        @property { Array<Object> } [validations]
        
        @property { Array<string> } [values]
        
        @property { boolean } [include]
        
        @property { string } [source_field]
        
        @property { Array<string> } [source_fields]
        
        @property { string } [destination_field]
        
        @property { string } [data_type]
        
        @property { Object } [default_value]
        
        @property { Object } [const_value]
        
        @property { string } [concat_str]
        
        @property { string } [function_name]
        
        @property { string } [transformer_name]
        
        @property { string } [all_param_function_name]
        
        @property { string } [sub_separator]
        
        @property { string } [index_field]
        
        @property { boolean } [ignore_if_not_exists]
        
        @property { string } [identifier_type]
        
        @property { Object } [projection_query]
        
        @property { boolean } [enrich_from_master]
        
         
    */

/**
        @typedef PropBeanDTO
        
        
        @property { boolean } [required]
        
        @property { boolean } [optional]
        
        @property { boolean } [include]
        
        @property { string } [source_field]
        
        @property { Array<string> } [source_fields]
        
        @property { string } [destination_field]
        
        @property { string } [data_type]
        
        @property { Object } [default_value]
        
        @property { Object } [const_value]
        
        @property { string } [concat_str]
        
        @property { string } [function_name]
        
        @property { string } [transformer_name]
        
        @property { string } [all_param_function_name]
        
        @property { string } [sub_separator]
        
        @property { string } [index_field]
        
        @property { boolean } [ignore_if_not_exists]
        
        @property { string } [identifier_type]
        
        @property { Object } [projection_query]
        
        @property { boolean } [enrich_from_master]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigRawDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { Array<JobConfigRawDTO> } [items]
        
        @property { Array<JobConfigRawDTO> } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SFTPConfig
        
        
        @property { string } [host]
        
        @property { number } [port]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [private_key_path]
        
        @property { boolean } [strict_host_key_checking]
        
        @property { string } [local_dir]
        
        @property { string } [remote_dir]
        
        @property { boolean } [password_protected]
        
        @property { string } [zip_file_regex]
        
        @property { string } [file_regex]
        
        @property { string } [zip_format]
        
        @property { ArchiveConfig } [archive_config]
        
        @property { boolean } [read_all_files]
        
         
    */

/**
        @typedef Send
        
        
        @property { boolean } [raw]
        
        @property { boolean } [processed]
        
         
    */

/**
        @typedef StoreConfig
        
        
        @property { string } [job_code]
        
        @property { string } [storeid]
        
        @property { string } [store_alias]
        
        @property { string } [store_file_regex]
        
        @property { string } [store_file_name]
        
        @property { ProcessConfig } [process_config]
        
        @property { Object } [properties]
        
         
    */

/**
        @typedef StoreFilter
        
        
        @property { Array<string> } [include_tags]
        
        @property { Array<string> } [exclude_tags]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef TaskConfig
        
        
        @property { string } [name]
        
        @property { number } [task_config_id]
        
        @property { Array<TaskParam> } [task_params]
        
         
    */

/**
        @typedef TaskParam
        
        
        @property { string } [name]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef TaskStepConfig
        
        
        @property { Array<TaskConfig> } [task_configs]
        
        @property { Array<number> } [task_config_ids]
        
        @property { Array<number> } [task_config_group_ids]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { Array<JobConfigDTO> } [items]
        
        @property { Array<JobConfigDTO> } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ResponseEnvelopeJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { JobConfigDTO } [items]
        
        @property { JobConfigDTO } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef JobConfigListDTO
        
        
        @property { string } [code]
        
        @property { string } [alias]
        
        @property { string } [modified_by]
        
        @property { string } [created_by]
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
        @property { boolean } [active]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigListDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [total_time_taken_in_millis]
        
        @property { string } [http_status]
        
        @property { Array<JobConfigListDTO> } [items]
        
        @property { Array<JobConfigListDTO> } [payload]
        
        @property { string } [trace_id]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ApplicationInventory
        
        
        @property { AppInventoryConfig } [inventory]
        
        @property { AuthenticationConfig } [authentication]
        
        @property { ArticleAssignmentConfig } [article_assignment]
        
        @property { RewardPointsConfig } [reward_points]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { AppOrderConfig } [order]
        
        @property { AppLogisticsConfig } [logistics]
        
        @property { string } [business]
        
        @property { boolean } [comms_enabled]
        
        @property { Array<string> } [platforms]
        
        @property { string } [_id]
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { string } [app]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [modified_by]
        
         
    */

/**
        @typedef AppInventoryConfig
        
        
        @property { InventoryBrand } [brand]
        
        @property { InventoryStore } [store]
        
        @property { InventoryCategory } [category]
        
        @property { InventoryPrice } [price]
        
        @property { InventoryDiscount } [discount]
        
        @property { boolean } [out_of_stock]
        
        @property { boolean } [franchise_enabled]
        
        @property { Array<any> } [exclude_category]
        
        @property { Array<string> } [image]
        
        @property { Array<any> } [company_store]
        
         
    */

/**
        @typedef InventoryBrand
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [brands]
        
         
    */

/**
        @typedef InventoryStore
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [stores]
        
        @property { AppStoreRules } [rules]
        
         
    */

/**
        @typedef AppStoreRules
        
        
        @property { Array<number> } [companies]
        
        @property { Array<any> } [brands]
        
         
    */

/**
        @typedef InventoryCategory
        
        
        @property { string } [criteria]
        
        @property { Array<any> } [categories]
        
         
    */

/**
        @typedef InventoryPrice
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef InventoryDiscount
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */

/**
        @typedef AuthenticationConfig
        
        
        @property { boolean } [required]
        
        @property { string } [provider]
        
         
    */

/**
        @typedef ArticleAssignmentConfig
        
        
        @property { ArticleAssignmentRules } [rules]
        
        @property { boolean } [post_order_reassignment]
        
        @property { Array<any> } [enforced_stores]
        
         
    */

/**
        @typedef ArticleAssignmentRules
        
        
        @property { StorePriority } [store_priority]
        
         
    */

/**
        @typedef StorePriority
        
        
        @property { boolean } [enabled]
        
        @property { Array<any> } [storetype_order]
        
         
    */

/**
        @typedef RewardPointsConfig
        
        
        @property { Credit } [credit]
        
        @property { Debit } [debit]
        
         
    */

/**
        @typedef Credit
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef Debit
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [auto_apply]
        
        @property { string } [strategy_channel]
        
         
    */

/**
        @typedef AppCartConfig
        
        
        @property { DeliveryCharges } [delivery_charges]
        
        @property { boolean } [enabled]
        
        @property { number } [max_cart_items]
        
        @property { number } [min_cart_value]
        
        @property { boolean } [bulk_coupons]
        
         
    */

/**
        @typedef DeliveryCharges
        
        
        @property { boolean } [enabled]
        
        @property { Charges } [charges]
        
         
    */

/**
        @typedef Charges
        
        
        @property { number } [threshold]
        
        @property { number } [charges]
        
         
    */

/**
        @typedef AppPaymentConfig
        
        
        @property { CallbackUrl } [callback_url]
        
        @property { Methods } [methods]
        
        @property { PaymentSelectionLock } [payment_selection_lock]
        
        @property { string } [mode_of_payment]
        
        @property { string } [source]
        
        @property { boolean } [enabled]
        
        @property { number } [cod_amount_limit]
        
        @property { number } [cod_charges]
        
         
    */

/**
        @typedef CallbackUrl
        
        
        @property { string } [app]
        
        @property { string } [web]
        
         
    */

/**
        @typedef Methods
        
        
        @property { PaymentModeConfig } [pl]
        
        @property { PaymentModeConfig } [card]
        
        @property { PaymentModeConfig } [nb]
        
        @property { PaymentModeConfig } [wl]
        
        @property { PaymentModeConfig } [ps]
        
        @property { PaymentModeConfig } [upi]
        
        @property { PaymentModeConfig } [qr]
        
        @property { PaymentModeConfig } [cod]
        
        @property { PaymentModeConfig } [pp]
        
        @property { PaymentModeConfig } [jp]
        
        @property { PaymentModeConfig } [pac]
        
        @property { PaymentModeConfig } [fc]
        
        @property { PaymentModeConfig } [jiopp]
        
        @property { PaymentModeConfig } [stripepg]
        
        @property { PaymentModeConfig } [juspaypg]
        
        @property { PaymentModeConfig } [payubizpg]
        
        @property { PaymentModeConfig } [payumoneypg]
        
        @property { PaymentModeConfig } [rupifipg]
        
        @property { PaymentModeConfig } [simpl]
        
         
    */

/**
        @typedef PaymentModeConfig
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef PaymentSelectionLock
        
        
        @property { boolean } [enabled]
        
        @property { string } [default_options]
        
        @property { string } [payment_identifier]
        
         
    */

/**
        @typedef AppOrderConfig
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [force_reassignment]
        
         
    */

/**
        @typedef AppLogisticsConfig
        
        
        @property { boolean } [logistics_by_seller]
        
        @property { boolean } [serviceability_check]
        
        @property { boolean } [same_day_delivery]
        
        @property { boolean } [dp_assignment]
        
         
    */

/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [auto_apply]
        
         
    */

/**
        @typedef AppInventoryPartialUpdate
        
        
        @property { RewardPointsConfig } [reward_points]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { LoyaltyPoints } [loyalty_points]
        
        @property { boolean } [comms_enabled]
        
         
    */

/**
        @typedef BrandCompanyInfo
        
        
        @property { string } [company_name]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef CompanyByBrandsRequest
        
        
        @property { number } brands
        
        @property { string } [search_text]
        
         
    */

/**
        @typedef CompanyByBrandsResponse
        
        
        @property { Array<BrandCompanyInfo> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef StoreByBrandsRequest
        
        
        @property { number } [company_id]
        
        @property { number } brands
        
        @property { string } [search_text]
        
         
    */

/**
        @typedef StoreByBrandsResponse
        
        
        @property { Array<BrandStoreInfo> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef BrandStoreInfo
        
        
        @property { string } [store_name]
        
        @property { number } [store_id]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { OptedStoreAddress } [store_address]
        
        @property { OptedCompany } [company]
        
         
    */

/**
        @typedef CompanyBrandInfo
        
        
        @property { string } [name]
        
        @property { number } [value]
        
        @property { string } [brand_logo_url]
        
        @property { string } [brand_banner_url]
        
        @property { string } [brand_banner_portrait_url]
        
         
    */

/**
        @typedef BrandsByCompanyResponse
        
        
        @property { CompanyBrandInfo } [brands]
        
         
    */

/**
        @typedef CreateApplicationRequest
        
        
        @property { App } [app]
        
        @property { AppInventory } [configuration]
        
        @property { AppDomain } [domain]
        
         
    */

/**
        @typedef CreateAppResponse
        
        
        @property { Application } [app]
        
        @property { ApplicationInventory } [configuration]
        
         
    */

/**
        @typedef ApplicationsResponse
        
        
        @property { Array<Application> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef MobileAppConfiguration
        
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [app_name]
        
        @property { LandingImage } [landing_image]
        
        @property { SplashImage } [splash_image]
        
        @property { string } [application]
        
        @property { string } [platform_type]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { string } [package_name]
        
         
    */

/**
        @typedef LandingImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef SplashImage
        
        
        @property { string } [aspect_ratio]
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef MobileAppConfigRequest
        
        
        @property { string } [app_name]
        
        @property { LandingImage } [landing_image]
        
        @property { SplashImage } [splash_image]
        
        @property { boolean } [is_active]
        
         
    */

/**
        @typedef BuildVersionHistory
        
        
        @property { BuildVersion } [versions]
        
        @property { string } [latest_available_version_name]
        
         
    */

/**
        @typedef BuildVersion
        
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [platform_type]
        
        @property { string } [build_status]
        
        @property { string } [version_name]
        
        @property { number } [version_code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef AppSupportedCurrency
        
        
        @property { string } [_id]
        
        @property { Array<string> } [supported_currency]
        
        @property { string } [application]
        
        @property { DefaultCurrency } [default_currency]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef DefaultCurrency
        
        
        @property { string } [ref]
        
        @property { string } [code]
        
         
    */

/**
        @typedef CurrencyConfig
        
        
        @property { string } [_id]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [decimal_digits]
        
        @property { string } [symbol]
        
         
    */

/**
        @typedef DomainAdd
        
        
        @property { string } [name]
        
         
    */

/**
        @typedef DomainAddRequest
        
        
        @property { DomainAdd } [domain]
        
         
    */

/**
        @typedef DomainsResponse
        
        
        @property { Array<Domain> } [domains]
        
         
    */

/**
        @typedef UpdateDomain
        
        
        @property { string } [_id]
        
         
    */

/**
        @typedef UpdateDomainTypeRequest
        
        
        @property { UpdateDomain } [domain]
        
        @property { string } [action]
        
         
    */

/**
        @typedef DomainStatusRequest
        
        
        @property { string } [domain_url]
        
         
    */

/**
        @typedef DomainStatus
        
        
        @property { string } [display]
        
        @property { boolean } [status]
        
         
    */

/**
        @typedef DomainStatusResponse
        
        
        @property { boolean } [connected]
        
        @property { Array<DomainStatus> } [status]
        
         
    */

/**
        @typedef DomainSuggestionsRequest
        
        
        @property { string } [domain_url]
        
        @property { boolean } [custom]
        
         
    */

/**
        @typedef DomainSuggestion
        
        
        @property { string } name
        
        @property { boolean } [unsupported]
        
        @property { boolean } is_available
        
        @property { number } [price]
        
        @property { string } [currency]
        
         
    */

/**
        @typedef DomainSuggestionsResponse
        
        
        @property { Array<DomainSuggestion> } [domains]
        
         
    */

/**
        @typedef GetIntegrationsOptInsResponse
        
        
        @property { IntegrationOptIn } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef IntegrationOptIn
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [description_html]
        
        @property { string } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef Validators
        
        
        @property { CompanyValidator } [company]
        
        @property { StoreValidator } [store]
        
        @property { InventoryValidator } [inventory]
        
        @property { OrderValidator } [order]
        
         
    */

/**
        @typedef CompanyValidator
        
        
        @property { JsonSchema } [json_schema]
        
        @property { string } [browser_script]
        
         
    */

/**
        @typedef JsonSchema
        
        
        @property { string } [display]
        
        @property { string } [key]
        
        @property { string } [type]
        
        @property { string } [tooltip]
        
         
    */

/**
        @typedef StoreValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */

/**
        @typedef InventoryValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */

/**
        @typedef OrderValidator
        
        
        @property { Array<JsonSchema> } [json_schema]
        
        @property { string } [browser_script]
        
         
    */

/**
        @typedef IntegrationMeta
        
        
        @property { boolean } [is_public]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Integration
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [description_html]
        
        @property { Object } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef IntegrationConfigResponse
        
        
        @property { IntegrationLevel } [items]
        
         
    */

/**
        @typedef IntegrationLevel
        
        
        @property { boolean } [opted]
        
        @property { Array<Object> } [permissions]
        
        @property { Array<Object> } [last_patch]
        
        @property { string } [_id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { Array<any> } [meta]
        
        @property { string } [token]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef OptedStoreIntegration
        
        
        @property { boolean } [other_opted]
        
        @property { IntegrationOptIn } [other_integration]
        
        @property { OtherEntity } [other_entity]
        
         
    */

/**
        @typedef OtherEntity
        
        
        @property { boolean } [opted]
        
        @property { Array<string> } [permissions]
        
        @property { LastPatch } [last_patch]
        
        @property { string } [_id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { OtherEntityData } [data]
        
        @property { Array<Object> } [meta]
        
        @property { string } [token]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef LastPatch
        
        
        @property { string } [op]
        
        @property { string } [path]
        
        @property { string } [value]
        
         
    */

/**
        @typedef OtherEntityData
        
        
        @property { string } [article_identifier]
        
         
    */

/**
        @typedef App
        
        
        @property { string } [company_id]
        
        @property { string } [channel_type]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [name]
        
        @property { string } [desc]
        
         
    */

/**
        @typedef AppInventory
        
        
        @property { InventoryBrandRule } [brand]
        
        @property { InventoryStoreRule } [store]
        
        @property { Array<string> } [image]
        
        @property { boolean } [franchise_enabled]
        
        @property { boolean } [out_of_stock]
        
        @property { InventoryPaymentConfig } [payment]
        
        @property { InventoryArticleAssignment } [article_assignment]
        
         
    */

/**
        @typedef AppDomain
        
        
        @property { string } [name]
        
         
    */

/**
        @typedef CompaniesResponse
        
        
        @property { AppInventoryCompanies } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AppInventoryCompanies
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [company_type]
        
         
    */

/**
        @typedef StoresResponse
        
        
        @property { AppInventoryStores } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AppInventoryStores
        
        
        @property { string } [_id]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef FilterOrderingStoreRequest
        
        
        @property { boolean } [all_stores]
        
        @property { Array<number> } [deployed_stores]
        
        @property { string } [q]
        
         
    */

/**
        @typedef DeploymentMeta
        
        
        @property { Array<number> } [deployed_stores]
        
        @property { boolean } [all_stores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef OrderingStoreConfig
        
        
        @property { DeploymentMeta } [deployment_meta]
        
         
    */

/**
        @typedef OtherSellerCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OtherSellerApplication
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [_id]
        
        @property { string } [domain]
        
        @property { OtherSellerCompany } [company]
        
        @property { string } [opt_type]
        
         
    */

/**
        @typedef OtherSellerApplications
        
        
        @property { Array<OtherSellerApplication> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef OptedApplicationResponse
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [_id]
        
        @property { string } [domain]
        
        @property { OptedCompany } [company]
        
        @property { OptedInventory } [opted_inventory]
        
        @property { OptOutInventory } [opt_out_inventory]
        
         
    */

/**
        @typedef OptedCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OptedInventory
        
        
        @property { OptType } [opt_type]
        
        @property { any } [items]
        
         
    */

/**
        @typedef OptType
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */

/**
        @typedef OptedStore
        
        
        @property { string } [name]
        
        @property { string } [store_code]
        
        @property { string } [_id]
        
        @property { string } [modified_on]
        
        @property { number } [uid]
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { number } [company_id]
        
         
    */

/**
        @typedef OptOutInventory
        
        
        @property { Array<number> } store
        
        @property { Array<number> } company
        
         
    */

/**
        @typedef ProductDetailFeature
        
        
        @property { Array<string> } [similar]
        
        @property { boolean } [seller_selection]
        
        @property { boolean } [update_product_meta]
        
        @property { boolean } [request_product]
        
         
    */

/**
        @typedef LaunchPage
        
        
        @property { string } [page_type]
        
        @property { Object } [params]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef LandingPageFeature
        
        
        @property { LaunchPage } [launch_page]
        
        @property { boolean } [continue_as_guest]
        
        @property { string } [login_btn_text]
        
        @property { boolean } [show_domain_textbox]
        
        @property { boolean } [show_register_btn]
        
         
    */

/**
        @typedef RegistrationPageFeature
        
        
        @property { boolean } [ask_store_address]
        
         
    */

/**
        @typedef AppFeature
        
        
        @property { ProductDetailFeature } [product_detail]
        
        @property { LandingPageFeature } [landing_page]
        
        @property { RegistrationPageFeature } [registration_page]
        
        @property { HomePageFeature } [home_page]
        
        @property { CommonFeature } [common]
        
        @property { CartFeature } [cart]
        
        @property { QrFeature } [qr]
        
        @property { PcrFeature } [pcr]
        
        @property { OrderFeature } [order]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef HomePageFeature
        
        
        @property { boolean } [order_processing]
        
         
    */

/**
        @typedef CommonFeature
        
        
        @property { CommunicationOptinDialogFeature } [communication_optin_dialog]
        
        @property { DeploymentStoreSelectionFeature } [deployment_store_selection]
        
        @property { ListingPriceFeature } [listing_price]
        
        @property { ListingPageFeature } [listing_page]
        
        @property { CurrencyFeature } [currency]
        
        @property { RevenueEngineFeature } [revenue_engine]
        
        @property { FeedbackFeature } [feedback]
        
        @property { CompareProductsFeature } [compare_products]
        
         
    */

/**
        @typedef CommunicationOptinDialogFeature
        
        
        @property { boolean } [visibility]
        
         
    */

/**
        @typedef DeploymentStoreSelectionFeature
        
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ListingPriceFeature
        
        
        @property { string } [value]
        
        @property { string } [sort]
        
         
    */

/**
        @typedef ListingPageFeature
        
        
        @property { string } [sort_on]
        
         
    */

/**
        @typedef CurrencyFeature
        
        
        @property { Array<string> } [value]
        
        @property { string } [type]
        
        @property { string } [default_currency]
        
         
    */

/**
        @typedef RevenueEngineFeature
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef FeedbackFeature
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef CompareProductsFeature
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef CartFeature
        
        
        @property { boolean } [gst_input]
        
        @property { boolean } [staff_selection]
        
        @property { boolean } [placing_for_customer]
        
        @property { boolean } [google_map]
        
         
    */

/**
        @typedef QrFeature
        
        
        @property { boolean } [application]
        
        @property { boolean } [products]
        
        @property { boolean } [collections]
        
         
    */

/**
        @typedef PcrFeature
        
        
        @property { boolean } [staff_selection]
        
         
    */

/**
        @typedef OrderFeature
        
        
        @property { boolean } [buy_again]
        
         
    */

/**
        @typedef AppFeatureRequest
        
        
        @property { AppFeature } [feature]
        
         
    */

/**
        @typedef AppFeatureResponse
        
        
        @property { AppFeature } [feature]
        
         
    */

/**
        @typedef Currency
        
        
        @property { string } [_id]
        
        @property { boolean } [is_active]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [decimal_digits]
        
        @property { string } [symbol]
        
         
    */

/**
        @typedef Domain
        
        
        @property { boolean } [verified]
        
        @property { boolean } [is_primary]
        
        @property { boolean } [is_default]
        
        @property { boolean } [is_shortlink]
        
        @property { string } [_id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ApplicationWebsite
        
        
        @property { boolean } [enabled]
        
        @property { string } [basepath]
        
         
    */

/**
        @typedef ApplicationCors
        
        
        @property { Array<string> } [domains]
        
         
    */

/**
        @typedef ApplicationAuth
        
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef ApplicationRedirections
        
        
        @property { string } [from]
        
        @property { string } [redirect_to]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ApplicationMeta
        
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef SecureUrl
        
        
        @property { string } [secure_url]
        
         
    */

/**
        @typedef Application
        
        
        @property { ApplicationWebsite } [website]
        
        @property { ApplicationCors } [cors]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [description]
        
        @property { string } [channel_type]
        
        @property { number } [cache_ttl]
        
        @property { boolean } [is_internal]
        
        @property { boolean } [is_active]
        
        @property { string } [_id]
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { number } [company_id]
        
        @property { string } [token]
        
        @property { Array<ApplicationRedirections> } [redirections]
        
        @property { Array<ApplicationMeta> } [meta]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
        @property { SecureUrl } [banner]
        
        @property { SecureUrl } [logo]
        
        @property { SecureUrl } [favicon]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [app_type]
        
        @property { SecureUrl } [mobile_logo]
        
        @property { Domain } [domain]
        
         
    */

/**
        @typedef NotFound
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef UnhandledError
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef InvalidPayloadRequest
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef SuccessMessageResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef InventoryBrandRule
        
        
        @property { string } [criteria]
        
        @property { Array<number> } [brands]
        
         
    */

/**
        @typedef StoreCriteriaRule
        
        
        @property { Array<number> } [companies]
        
        @property { Array<number> } [brands]
        
         
    */

/**
        @typedef InventoryStoreRule
        
        
        @property { string } [criteria]
        
        @property { Array<StoreCriteriaRule> } [rules]
        
        @property { Array<number> } [stores]
        
         
    */

/**
        @typedef InventoryPaymentConfig
        
        
        @property { string } [mode_of_payment]
        
        @property { string } [source]
        
         
    */

/**
        @typedef StorePriorityRule
        
        
        @property { boolean } [enabled]
        
        @property { Array<string> } [storetype_order]
        
         
    */

/**
        @typedef ArticleAssignmentRule
        
        
        @property { StorePriorityRule } [store_priority]
        
         
    */

/**
        @typedef InventoryArticleAssignment
        
        
        @property { boolean } [post_order_reassignment]
        
        @property { Array<number> } [enforced_stores]
        
        @property { ArticleAssignmentRule } [rules]
        
         
    */

/**
        @typedef CompanyAboutAddress
        
        
        @property { number } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [address_type]
        
         
    */

/**
        @typedef UserEmail
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [email]
        
         
    */

/**
        @typedef UserPhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { number } [country_code]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef ApplicationInformation
        
        
        @property { InformationAddress } [address]
        
        @property { InformationSupport } [support]
        
        @property { SocialLinks } [social_links]
        
        @property { Links } [links]
        
        @property { string } [copyright_text]
        
        @property { string } [_id]
        
        @property { BusinessHighlights } [business_highlights]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef InformationAddress
        
        
        @property { string } [loc]
        
        @property { Array<string> } [address_line]
        
        @property { InformationPhone } [phone]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
         
    */

/**
        @typedef InformationPhone
        
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */

/**
        @typedef InformationSupport
        
        
        @property { Array<string> } [phone]
        
        @property { Array<string> } [email]
        
        @property { string } [timing]
        
         
    */

/**
        @typedef SocialLinks
        
        
        @property { Facebook } [facebook]
        
        @property { Instagram } [instagram]
        
        @property { Twitter } [twitter]
        
        @property { Pinterest } [pinterest]
        
        @property { GooglePlus } [google_plus]
        
        @property { Youtube } [youtube]
        
        @property { LinkedIn } [linked_in]
        
        @property { Vimeo } [vimeo]
        
        @property { BlogLink } [blog_link]
        
         
    */

/**
        @typedef Instagram
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Twitter
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Pinterest
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef GooglePlus
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Youtube
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef LinkedIn
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Vimeo
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef BlogLink
        
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [link]
        
         
    */

/**
        @typedef Links
        
        
        @property { string } [title]
        
        @property { string } [link]
        
         
    */

/**
        @typedef BusinessHighlights
        
        
        @property { string } [_id]
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [sub_title]
        
         
    */

/**
        @typedef ApplicationDetail
        
        
        @property { string } name
        
        @property { string } description
        
        @property { SecureUrl } logo
        
        @property { SecureUrl } mobile_logo
        
        @property { SecureUrl } favicon
        
        @property { SecureUrl } banner
        
        @property { Domain } [domain]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [_id]
        
         
    */

/**
        @typedef CurrenciesResponse
        
        
        @property { Array<Currency> } [items]
        
         
    */

/**
        @typedef StoreLatLong
        
        
        @property { string } [type]
        
        @property { Array<number> } [coordinates]
        
         
    */

/**
        @typedef OptedStoreAddress
        
        
        @property { string } [state]
        
        @property { string } [address1]
        
        @property { StoreLatLong } [lat_long]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
         
    */

/**
        @typedef OrderingStore
        
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [_id]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [display_name]
        
        @property { string } [store_type]
        
        @property { string } [store_code]
        
        @property { number } [pincode]
        
        @property { string } [code]
        
         
    */

/**
        @typedef OrderingStores
        
        
        @property { Page } [page]
        
        @property { Array<OrderingStore> } [items]
        
        @property { Array<number> } [deployed_stores]
        
        @property { boolean } [all_stores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [_id]
        
        @property { string } [app]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef TokenResponse
        
        
        @property { Tokens } [tokens]
        
        @property { string } [_id]
        
        @property { string } [application]
        
        @property { string } [created_at]
        
        @property { string } [updated_at]
        
        @property { number } [__v]
        
         
    */

/**
        @typedef Tokens
        
        
        @property { Firebase } [firebase]
        
        @property { Moengage } [moengage]
        
        @property { Segment } [segment]
        
        @property { Gtm } [gtm]
        
        @property { Freshchat } [freshchat]
        
        @property { Safetynet } [safetynet]
        
        @property { FyndRewards } [fynd_rewards]
        
        @property { Auth } [auth]
        
        @property { GoogleMap } [google_map]
        
         
    */

/**
        @typedef Firebase
        
        
        @property { Credentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef Credentials
        
        
        @property { Ios } [ios]
        
        @property { Android } [android]
        
        @property { string } [project_id]
        
        @property { string } [gcm_sender_id]
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Ios
        
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Android
        
        
        @property { string } [application_id]
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Moengage
        
        
        @property { MoengageCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef MoengageCredentials
        
        
        @property { string } [app_id]
        
         
    */

/**
        @typedef Segment
        
        
        @property { SegmentCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SegmentCredentials
        
        
        @property { string } [write_key]
        
         
    */

/**
        @typedef Gtm
        
        
        @property { GtmCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef GtmCredentials
        
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Freshchat
        
        
        @property { FreshchatCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef FreshchatCredentials
        
        
        @property { string } [app_id]
        
        @property { string } [app_key]
        
        @property { string } [web_token]
        
         
    */

/**
        @typedef Safetynet
        
        
        @property { SafetynetCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SafetynetCredentials
        
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef FyndRewards
        
        
        @property { FyndRewardsCredentials } [credentials]
        
         
    */

/**
        @typedef FyndRewardsCredentials
        
        
        @property { string } [public_key]
        
         
    */

/**
        @typedef Auth
        
        
        @property { Google } [google]
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountkit]
        
         
    */

/**
        @typedef GoogleMap
        
        
        @property { GoogleMapCredentials } [credentials]
        
         
    */

/**
        @typedef GoogleMapCredentials
        
        
        @property { string } [api_key]
        
         
    */

/**
        @typedef Rule
        
        
        @property { number } [max]
        
        @property { number } [value]
        
        @property { number } [key]
        
        @property { number } [min]
        
        @property { number } [discount_qty]
        
         
    */

/**
        @typedef DisplayMetaDict
        
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
         
    */

/**
        @typedef DisplayMeta
        
        
        @property { string } [subtitle]
        
        @property { DisplayMetaDict } [apply]
        
        @property { DisplayMetaDict } [auto]
        
        @property { string } [description]
        
        @property { DisplayMetaDict } [remove]
        
        @property { string } [title]
        
         
    */

/**
        @typedef Identifier
        
        
        @property { Array<number> } [item_id]
        
        @property { Array<number> } [brand_id]
        
        @property { Array<number> } [category_id]
        
        @property { Array<string> } [article_id]
        
        @property { Array<string> } [collection_id]
        
        @property { Array<number> } [store_id]
        
        @property { Array<string> } [user_id]
        
        @property { Array<number> } [company_id]
        
         
    */

/**
        @typedef RuleDefinition
        
        
        @property { string } type
        
        @property { string } value_type
        
        @property { string } calculate_on
        
        @property { boolean } [auto_apply]
        
        @property { string } [currency_code]
        
        @property { boolean } [is_exact]
        
        @property { Array<string> } [scope]
        
        @property { string } applicable_on
        
         
    */

/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */

/**
        @typedef CouponAction
        
        
        @property { string } [txn_mode]
        
        @property { string } [action_date]
        
         
    */

/**
        @typedef CouponSchedule
        
        
        @property { string } [start]
        
        @property { number } [duration]
        
        @property { Array<Object> } [next_schedule]
        
        @property { string } [cron]
        
        @property { string } [end]
        
         
    */

/**
        @typedef Validation
        
        
        @property { string } [user_registered_after]
        
        @property { boolean } [anonymous]
        
        @property { Array<string> } [app_id]
        
         
    */

/**
        @typedef State
        
        
        @property { boolean } [is_display]
        
        @property { boolean } [is_public]
        
        @property { boolean } [is_archived]
        
         
    */

/**
        @typedef PriceRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */

/**
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */

/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [codes]
        
        @property { PaymentAllowValue } [uses]
        
        @property { Array<string> } [types]
        
        @property { Array<string> } [networks]
        
         
    */

/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [nb]
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [card]
        
         
    */

/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multi_store_allowed
        
         
    */

/**
        @typedef UsesRemaining
        
        
        @property { number } [user]
        
        @property { number } [total]
        
        @property { number } [app]
        
         
    */

/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [remaining]
        
        @property { UsesRemaining } [maximum]
        
         
    */

/**
        @typedef PostOrder
        
        
        @property { boolean } [cancellation_allowed]
        
        @property { boolean } [return_allowed]
        
         
    */

/**
        @typedef Restrictions
        
        
        @property { PriceRange } [price_range]
        
        @property { PaymentCodes } [payments]
        
        @property { Array<number> } [ordering_stores]
        
        @property { BulkBundleRestriction } [bulk_bundle]
        
        @property { UsesRestriction } [uses]
        
        @property { Array<string> } [platforms]
        
        @property { PostOrder } [post_order]
        
        @property { boolean } [coupon_allowed]
        
         
    */

/**
        @typedef CouponDateMeta
        
        
        @property { string } [modified_on]
        
        @property { string } [created_on]
        
         
    */

/**
        @typedef CouponAuthor
        
        
        @property { string } [modified_by]
        
        @property { string } [created_by]
        
         
    */

/**
        @typedef Ownership
        
        
        @property { string } payable_by
        
        @property { string } payable_category
        
         
    */

/**
        @typedef CouponAdd
        
        
        @property { Array<Rule> } rule
        
        @property { DisplayMeta } display_meta
        
        @property { Identifier } identifiers
        
        @property { RuleDefinition } rule_definition
        
        @property { Validity } validity
        
        @property { CouponAction } [action]
        
        @property { CouponSchedule } [_schedule]
        
        @property { Validation } [validation]
        
        @property { State } [state]
        
        @property { Array<string> } [tags]
        
        @property { string } code
        
        @property { string } type_slug
        
        @property { Restrictions } [restrictions]
        
        @property { CouponDateMeta } [date_meta]
        
        @property { CouponAuthor } [author]
        
        @property { Ownership } ownership
        
         
    */

/**
        @typedef CouponsResponse
        
        
        @property { Page } [page]
        
        @property { CouponAdd } [items]
        
         
    */

/**
        @typedef SuccessMessage
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef OperationErrorResponse
        
        
        @property { boolean } [success]
        
        @property { string } [message]
        
         
    */

/**
        @typedef CouponUpdate
        
        
        @property { Array<Rule> } rule
        
        @property { DisplayMeta } display_meta
        
        @property { Identifier } identifiers
        
        @property { RuleDefinition } rule_definition
        
        @property { Validity } validity
        
        @property { CouponAction } [action]
        
        @property { CouponSchedule } [_schedule]
        
        @property { Validation } [validation]
        
        @property { State } [state]
        
        @property { Array<string> } [tags]
        
        @property { string } code
        
        @property { string } type_slug
        
        @property { Restrictions } [restrictions]
        
        @property { CouponDateMeta } [date_meta]
        
        @property { CouponAuthor } [author]
        
        @property { Ownership } ownership
        
         
    */

/**
        @typedef CouponPartialUpdate
        
        
        @property { boolean } [archive]
        
        @property { CouponSchedule } [schedule]
        
         
    */

/**
        @typedef StoreMapping
        
        
        @property { string } [enabled]
        
        @property { string } [marketplace_store_id]
        
        @property { number } [store_id]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef AllChannels
        
        
        @property { boolean } [mkp_name]
        
         
    */

/**
        @typedef MyntraPayload
        
        
        @property { string } [merchant_id]
        
        @property { string } [secret_key]
        
         
    */

/**
        @typedef AmazonPayload
        
        
        @property { string } [seller_id]
        
        @property { string } [mws_auth_token]
        
         
    */

/**
        @typedef FlipkartPayload
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef TatacliqPayload
        
        
        @property { string } [user_name]
        
        @property { string } [password]
        
        @property { string } [merchant_id]
        
         
    */

/**
        @typedef AjioPayload
        
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [client_ip]
        
         
    */

/**
        @typedef InventorySyncConfig
        
        
        @property { boolean } [inventory]
        
        @property { boolean } [price]
        
         
    */

/**
        @typedef StoreMappingPayload
        
        
        @property { boolean } [store_mapping_enabled]
        
        @property { Array<StoreMapping> } [store_mapping]
        
         
    */

/**
        @typedef StatusPayload
        
        
        @property { boolean } [is_active]
        
         
    */

/**
        @typedef StatusResp
        
        
        @property { boolean } [is_active]
        
         
    */

/**
        @typedef SyncPayload
        
        
        @property { string } [modified_since]
        
         
    */

/**
        @typedef SyncResp
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef MkpResp
        
        
        @property { string } [marketplace]
        
        @property { number } [worker]
        
        @property { string } [worker_assigned]
        
        @property { boolean } [is_active]
        
        @property { boolean } [store_mapping_enabled]
        
        @property { number } [company_id]
        
        @property { Object } [configuration]
        
        @property { Array<StoreMapping> } [store_mapping]
        
         
    */

/**
        @typedef AppUser
        
        
        @property { string } [_id]
        
        @property { boolean } [active]
        
        @property { string } [application_id]
        
        @property { string } [block_reason]
        
        @property { string } [updated_at]
        
        @property { string } [updated_by]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef E
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
        @property { string } [request_id]
        
        @property { string } [stack_trace]
        
        @property { number } [status]
        
         
    */

/**
        @typedef Giveaway
        
        
        @property { string } [_id]
        
        @property { Schedule } [_schedule]
        
        @property { boolean } [active]
        
        @property { string } [application_id]
        
        @property { RewardsAudience } [audience]
        
        @property { Asset } [banner_image]
        
        @property { string } [created_at]
        
        @property { string } [description]
        
        @property { RewardsRule } [rule]
        
        @property { string } [title]
        
        @property { string } [updated_at]
        
         
    */

/**
        @typedef GiveawayResponse
        
        
        @property { Array<Giveaway> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef HistoryPretty
        
        
        @property { string } [_id]
        
        @property { string } [application_id]
        
        @property { boolean } [claimed]
        
        @property { string } [created_at]
        
        @property { string } [expires_on]
        
        @property { number } [points]
        
        @property { number } [remaining_points]
        
        @property { string } [text_1]
        
        @property { string } [text_2]
        
        @property { string } [text_3]
        
        @property { string } [txn_name]
        
        @property { string } [updated_at]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef HistoryRes
        
        
        @property { Array<HistoryPretty> } [items]
        
        @property { Page } [page]
        
        @property { number } [points]
        
         
    */

/**
        @typedef Offer
        
        
        @property { Schedule } [_schedule]
        
        @property { boolean } [active]
        
        @property { string } [application_id]
        
        @property { Asset } [banner_image]
        
        @property { string } [created_at]
        
        @property { string } [name]
        
        @property { Object } [rule]
        
        @property { ShareMessages } [share]
        
        @property { string } [sub_text]
        
        @property { string } [text]
        
        @property { string } [type]
        
        @property { string } [updated_at]
        
        @property { string } [updated_by]
        
        @property { string } [url]
        
         
    */

/**
        @typedef Points
        
        
        @property { number } [available]
        
         
    */

/**
        @typedef Referral
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef RewardUser
        
        
        @property { string } [_id]
        
        @property { boolean } [active]
        
        @property { string } [created_at]
        
        @property { Referral } [referral]
        
        @property { number } [uid]
        
        @property { string } [updated_at]
        
        @property { string } [user_block_reason]
        
        @property { string } [user_id]
        
         
    */

/**
        @typedef RewardsAudience
        
        
        @property { string } [header_user_id]
        
        @property { string } [id]
        
         
    */

/**
        @typedef RewardsRule
        
        
        @property { number } [amount]
        
         
    */

/**
        @typedef ShareMessages
        
        
        @property { string } [email]
        
        @property { string } [facebook]
        
        @property { string } [fallback]
        
        @property { string } [message]
        
        @property { string } [messenger]
        
        @property { string } [sms]
        
        @property { string } [text]
        
        @property { string } [twitter]
        
        @property { string } [whatsapp]
        
         
    */

/**
        @typedef UserRes
        
        
        @property { Points } [points]
        
        @property { RewardUser } [user]
        
         
    */

/**
        @typedef StatGroup
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
         
    */

/**
        @typedef StatsGroups
        
        
        @property { Array<StatGroup> } [groups]
        
         
    */

/**
        @typedef StatsGroupComponent
        
        
        @property { string } [key]
        
        @property { string } [url]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [filters]
        
         
    */

/**
        @typedef StatsGroupComponents
        
        
        @property { string } [title]
        
        @property { Array<StatsGroupComponent> } [components]
        
         
    */

/**
        @typedef StatsRes
        
        
        @property { string } [key]
        
        @property { string } [title]
        
        @property { string } [type]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef ReceivedAt
        
        
        @property { string } [value]
        
         
    */

/**
        @typedef AbandonCartsDetail
        
        
        @property { string } [properties_cart_id]
        
        @property { string } [context_traits_first_name]
        
        @property { string } [context_traits_last_name]
        
        @property { string } [context_traits_phone_number]
        
        @property { string } [context_traits_email]
        
        @property { string } [context_app_application_id]
        
        @property { string } [properties_breakup_values_raw_total]
        
        @property { ReceivedAt } [received_at]
        
         
    */

/**
        @typedef AbandonCartsList
        
        
        @property { Array<AbandonCartsDetail> } [items]
        
        @property { string } [cart_total]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AbandonCartDetail
        
        
        @property { string } [_id]
        
        @property { string } [user_id]
        
        @property { string } [cart_value]
        
        @property { Array<Object> } [articles]
        
        @property { Object } [breakup]
        
        @property { Object } [address]
        
         
    */

/**
        @typedef ExportJobReq
        
        
        @property { string } [marketplace_name]
        
        @property { string } [start_time]
        
        @property { string } [end_time]
        
        @property { string } [event_type]
        
        @property { string } [trace_id]
        
         
    */

/**
        @typedef ExportJobRes
        
        
        @property { string } [status]
        
        @property { string } [job_id]
        
         
    */

/**
        @typedef ExportJobStatusRes
        
        
        @property { string } [status]
        
        @property { string } [job_id]
        
        @property { string } [download_url]
        
         
    */

/**
        @typedef GetLogsListReq
        
        
        @property { string } [marketplace_name]
        
        @property { string } [start_date]
        
        @property { string } [company_id]
        
        @property { string } [end_date]
        
         
    */

/**
        @typedef MkpLogsResp
        
        
        @property { string } [start_time_iso]
        
        @property { string } [end_time_iso]
        
        @property { string } [event_type]
        
        @property { string } [trace_id]
        
        @property { string } [count]
        
        @property { string } [status]
        
         
    */

/**
        @typedef GetLogsListRes
        
        
        @property { Array<MkpLogsResp> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SearchLogReq
        
        
        @property { string } [marketplace_name]
        
        @property { string } [start_date]
        
        @property { string } [company_id]
        
        @property { string } [end_date]
        
        @property { string } [identifier]
        
        @property { string } [identifier_value]
        
         
    */

/**
        @typedef LogInfo
        
        
        @property { string } [_id]
        
        @property { string } [status]
        
        @property { string } [event_type]
        
        @property { string } [marketplace_name]
        
        @property { string } [event]
        
        @property { string } [trace_id]
        
        @property { number } [company_id]
        
        @property { number } [brand_id]
        
        @property { string } [store_code]
        
        @property { number } [store_id]
        
        @property { number } [item_id]
        
        @property { string } [article_id]
        
        @property { string } [seller_identifier]
        
         
    */

/**
        @typedef SearchLogRes
        
        
        @property { Array<LogInfo> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ValidityObject
        
        
        @property { string } start
        
        @property { string } end
        
         
    */

/**
        @typedef CreateUpdateDiscount
        
        
        @property { string } name
        
        @property { number } company_id
        
        @property { boolean } is_active
        
        @property { Array<string> } app_ids
        
        @property { string } job_type
        
        @property { string } discount_type
        
        @property { string } discount_level
        
        @property { number } [value]
        
        @property { string } [file_path]
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
        @property { ValidityObject } validity
        
         
    */

/**
        @typedef DiscountJob
        
        
        @property { string } _id
        
        @property { string } name
        
        @property { number } company_id
        
        @property { boolean } is_active
        
        @property { Array<string> } [app_ids]
        
        @property { string } [job_type]
        
        @property { string } [discount_type]
        
        @property { string } [discount_level]
        
        @property { number } [value]
        
        @property { string } [file_path]
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
        @property { ValidityObject } validity
        
        @property { string } created_on
        
        @property { string } modified_on
        
        @property { UserDetails } created_by
        
        @property { UserDetails } modified_by
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef ListOrCalender
        
        
        @property { Array<DiscountJob> } items
        
        @property { Page } page
        
         
    */

/**
        @typedef FileJobResponse
        
        
        @property { string } stage
        
        @property { number } total
        
        @property { number } failed
        
        @property { number } company_id
        
        @property { Object } [body]
        
        @property { string } type
        
        @property { string } file_type
        
         
    */

/**
        @typedef DownloadFileJob
        
        
        @property { Array<number> } [brand_ids]
        
        @property { Array<number> } [store_ids]
        
         
    */

/**
        @typedef CancelJobResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef UserDetails
        
        
        @property { string } username
        
        @property { string } user_id
        
         
    */

/**
        @typedef BadRequestObject
        
        
        @property { string } message
        
         
    */

/**
        @typedef AddProxyReq
        
        
        @property { string } [attached_path]
        
        @property { string } [proxy_url]
        
         
    */

/**
        @typedef AddProxyResponse
        
        
        @property { string } [_id]
        
        @property { string } [attached_path]
        
        @property { string } [proxy_url]
        
        @property { string } [company_id]
        
        @property { string } [application_id]
        
        @property { string } [extension_id]
        
        @property { string } [created_at]
        
        @property { string } [modified_at]
        
         
    */

/**
        @typedef ApiError
        
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef RemoveProxyResponse
        
        
        @property { string } [message]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef EventConfig
        
        
        @property { number } [id]
        
        @property { string } [event_name]
        
        @property { string } [event_type]
        
        @property { string } [version]
        
        @property { string } [display_name]
        
        @property { string } [description]
        
        @property { string } [created_on]
        
         
    */

/**
        @typedef EventConfigList
        
        
        @property { Array<EventConfig> } [items]
        
         
    */

/**
        @typedef SubscriberConfigList
        
        
        @property { Array<SubscriberConfig> } [subscribers]
        
         
    */

/**
        @typedef EventProcessedStatus
        
        
        @property { number } [id]
        
        @property { string } [subscriber_id]
        
        @property { number } [attempt]
        
        @property { string } [response_code]
        
        @property { string } [response_message]
        
        @property { string } [created_on]
        
        @property { string } [processed_on]
        
        @property { boolean } [status]
        
         
    */

/**
        @typedef EventPayload
        
        
        @property { number } [id]
        
        @property { string } [event_trace_id]
        
        @property { number } [event_company_id]
        
        @property { string } [event_application_id]
        
        @property { string } [event_extension_id]
        
        @property { string } [event_name]
        
        @property { boolean } [status]
        
         
    */

/**
        @typedef SubscriberConfig
        
        
        @property { number } [id]
        
        @property { string } [webhook_url]
        
        @property { number } [company_id]
        
        @property { string } [application_id]
        
        @property { string } [extension_id]
        
        @property { string } [status]
        
        @property { Object } [auth_meta]
        
        @property { string } [created_on]
        
        @property { string } [updated_on]
        
        @property { Object } [subscriber_event_mapping]
        
         
    */

/**
        @typedef SubscriberEvent
        
        
        @property { number } [id]
        
        @property { number } [subscriber_id]
        
        @property { number } [event_id]
        
        @property { string } [created_date]
        
         
    */

/**
        @typedef AuthMeta
        
        
        @property { string } [type]
        
        @property { string } [username]
        
        @property { string } [password]
        
         
    */

class Lead {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Gets the list of Application level Tickets and/or ticket filters depending on query params
    * @description: Gets the list of Application level Tickets and/or ticket filters
    * @param {Object} arg - arg object.
    * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
    * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
    * @param {string} [arg.q] - Search through ticket titles and description
    * @param {string} [arg.status] - Filter tickets on status
    * @param {string} [arg.priority] - Filter tickets on priority
    * @param {string} [arg.category] - Filter tickets on category
    
    **/
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
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["items"] = items;
    queryObj["filters"] = filters;
    queryObj["q"] = q;
    queryObj["status"] = status;
    queryObj["priority"] = priority;
    queryObj["category"] = category;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Retreives ticket details of a application level ticket
    * @description: Retreives ticket details of a application level ticket with ticket ID
    * @param {Object} arg - arg object.
    * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
    
    **/
  getTicket({ ticketId } = {}) {
    const { error } = LeadValidator.getTicket().validate(
      {
        ticketId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${ticketId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edits ticket details of a application level ticket
   * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
   * @param {Object} arg - arg object.
   * @param {string} arg.ticketId - Ticket ID of ticket to be edited
   * @param {EditTicketPayload} arg.body
   **/
  editTicket({ ticketId, body } = {}) {
    const { error } = LeadValidator.editTicket().validate(
      {
        ticketId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${ticketId}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create history for specific application level ticket
   * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
   * @param {Object} arg - arg object.
   * @param {string} arg.ticketId - Ticket ID for which history is created
   * @param {TicketHistoryPayload} arg.body
   **/
  createHistory({ ticketId, body } = {}) {
    const { error } = LeadValidator.createHistory().validate(
      {
        ticketId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${ticketId}/history`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Gets history list for specific application level ticket
    * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
    * @param {Object} arg - arg object.
    * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
    
    **/
  getTicketHistory({ ticketId } = {}) {
    const { error } = LeadValidator.getTicketHistory().validate(
      {
        ticketId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ticket/${ticketId}/history`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get specific custom form using it's slug
    * @description: Get specific custom form using it's slug, this is used to view the form.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug of form whose response is getting submitted
    
    **/
  getCustomForm({ slug } = {}) {
    const { error } = LeadValidator.getCustomForm().validate(
      {
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form/${slug}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Edit the given custom form
   * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
   * @param {Object} arg - arg object.
   * @param {string} arg.slug - Slug of form whose response is getting submitted
   * @param {EditCustomFormPayload} arg.body
   **/
  editCustomForm({ slug, body } = {}) {
    const { error } = LeadValidator.editCustomForm().validate(
      {
        slug,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form/${slug}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get list of custom form
    * @description: Get list of custom form for given application
    * @param {Object} arg - arg object.
    
    **/
  getCustomForms({} = {}) {
    const { error } = LeadValidator.getCustomForms().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Creates a new custom form
   * @description: Creates a new custom form for given application
   * @param {Object} arg - arg object.
   * @param {CreateCustomFormPayload} arg.body
   **/
  createCustomForm({ body } = {}) {
    const { error } = LeadValidator.createCustomForm().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/form`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get Token to join a specific Video Room using it's unqiue name
    * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of video room
    
    **/
  getTokenForVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.getTokenForVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}/token`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get participants of a specific Video Room using it's unique name
    * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    **/
  getVideoParticipants({ uniqueName } = {}) {
    const { error } = LeadValidator.getVideoParticipants().validate(
      {
        uniqueName,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}/participants`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Open a video room.
   * @description: Open a video room.
   * @param {Object} arg - arg object.
   * @param {CreateVideoRoomPayload} arg.body
   **/
  openVideoRoom({ body } = {}) {
    const { error } = LeadValidator.openVideoRoom().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Close the video room and force all participants to leave.
    * @description: Close the video room and force all participants to leave.
    * @param {Object} arg - arg object.
    * @param {string} arg.uniqueName - Unique name of Video Room
    
    **/
  closeVideoRoom({ uniqueName } = {}) {
    const { error } = LeadValidator.closeVideoRoom().validate(
      {
        uniqueName,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/lead/v1.0/company/${this.config.companyId}/application/${this.applicationId}/video/room/${uniqueName}`,
      queryObj,
      undefined
    );
  }
}

class Feedback {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Get list of attribute data
    * @description: Provides a list of all attribute data.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - pagination page no
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getAttributes({ pageNo, pageSize } = {}) {
    const { error } = FeedbackValidator.getAttributes().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/attributes/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of attribute data
    * @description: Provides a list of all attribute data.
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - company id
    * @param {string} arg.applicationId - application id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getAttributesPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAttributes({
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
    *
    * @summary: Get list of customer reviews [admin]
    * @description: The endpoint provides a list of customer reviews based on entity and provided filters
    * @param {Object} arg - arg object.
    * @param {string} [arg.id] - review id
    * @param {string} [arg.entityId] - entity id
    * @param {string} [arg.entityType] - entity type
    * @param {string} [arg.userId] - user id
    * @param {string} [arg.media] - media type e.g. image | video | video_file | video_link
    * @param {Array<number>} [arg.rating] - rating filter, 1-5
    * @param {Array<string>} [arg.attributeRating] - attribute rating filter with ma,e of attribute
    * @param {boolean} [arg.facets] - facets (true|false)
    * @param {string} [arg.sort] - sort by : default | top | recent
    * @param {string} [arg.next] - pagination next
    * @param {string} [arg.start] - pagination start
    * @param {string} [arg.limit] - pagination limit
    * @param {string} [arg.count] - pagination count
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getCustomerReviews({
    id,
    entityId,
    entityType,
    userId,
    media,
    rating,
    attributeRating,
    facets,
    sort,
    next,
    start,
    limit,
    count,
    pageId,
    pageSize,
  } = {}) {
    const { error } = FeedbackValidator.getCustomerReviews().validate(
      {
        id,
        entityId,
        entityType,
        userId,
        media,
        rating,
        attributeRating,
        facets,
        sort,
        next,
        start,
        limit,
        count,
        pageId,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["id"] = id;
    queryObj["entity_id"] = entityId;
    queryObj["entity_type"] = entityType;
    queryObj["user_id"] = userId;
    queryObj["media"] = media;
    queryObj["rating"] = rating;
    queryObj["attribute_rating"] = attributeRating;
    queryObj["facets"] = facets;
    queryObj["sort"] = sort;
    queryObj["next"] = next;
    queryObj["start"] = start;
    queryObj["limit"] = limit;
    queryObj["count"] = count;
    queryObj["page_id"] = pageId;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/reviews/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of customer reviews [admin]
    * @description: The endpoint provides a list of customer reviews based on entity and provided filters
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - company id
    * @param {string} arg.applicationId - application id
    * @param {string} [arg.id] - review id
    * @param {string} [arg.entityId] - entity id
    * @param {string} [arg.entityType] - entity type
    * @param {string} [arg.userId] - user id
    * @param {string} [arg.media] - media type e.g. image | video | video_file | video_link
    * @param {Array<number>} [arg.rating] - rating filter, 1-5
    * @param {Array<string>} [arg.attributeRating] - attribute rating filter with ma,e of attribute
    * @param {boolean} [arg.facets] - facets (true|false)
    * @param {string} [arg.sort] - sort by : default | top | recent
    * @param {string} [arg.next] - pagination next
    * @param {string} [arg.start] - pagination start
    * @param {string} [arg.limit] - pagination limit
    * @param {string} [arg.count] - pagination count
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getCustomerReviewsPaginator({
    companyId,
    applicationId,
    id,
    entityId,
    entityType,
    userId,
    media,
    rating,
    attributeRating,
    facets,
    sort,
    next,
    start,
    limit,
    count,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getCustomerReviews({
        companyId: companyId,
        applicationId: applicationId,
        id: id,
        entityId: entityId,
        entityType: entityType,
        userId: userId,
        media: media,
        rating: rating,
        attributeRating: attributeRating,
        facets: facets,
        sort: sort,
        next: next,
        start: start,
        limit: limit,
        count: count,
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
   *
   * @summary: update approve details
   * @description: The is used to update approve details like status and description text
   * @param {Object} arg - arg object.
   * @param {string} arg.reviewId - review id
   * @param {ApproveRequest} arg.body
   **/
  updateApprove({ reviewId, body } = {}) {
    const { error } = FeedbackValidator.updateApprove().validate(
      {
        reviewId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/reviews/${reviewId}/approve/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: get history details
    * @description: The is used to get the history details like status and description text
    * @param {Object} arg - arg object.
    * @param {string} arg.reviewId - review id
    
    **/
  getHistory({ reviewId } = {}) {
    const { error } = FeedbackValidator.getHistory().validate(
      {
        reviewId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/reviews/${reviewId}/history/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of templates
    * @description: Get all templates of application
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getApplicationTemplates({ pageId, pageSize } = {}) {
    const { error } = FeedbackValidator.getApplicationTemplates().validate(
      {
        pageId,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_id"] = pageId;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/templates/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of templates
    * @description: Get all templates of application
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - company id
    * @param {string} arg.applicationId - application id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getApplicationTemplatesPaginator({
    companyId,
    applicationId,
    pageSize,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getApplicationTemplates({
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
    *
    * @summary: Create a new template
    * @description: Create a new template for review with following data:
- Enable media, rating and review
- Rating - active/inactive/selected rate choices, attributes, text on rate, comment for each rate, type
- Review - header, title, description, image and video meta, enable votes
    * @param {Object} arg - arg object.
    * @param {TemplateRequestList} arg.body
    **/
  createTemplate({ body } = {}) {
    const { error } = FeedbackValidator.createTemplate().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/templates/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a template by ID
    * @description: Get the template for product or l3 type by ID
    * @param {Object} arg - arg object.
    * @param {string} arg.id - template id
    
    **/
  getTemplateById({ id } = {}) {
    const { error } = FeedbackValidator.getTemplateById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/templates/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update a template's status
   * @description: Update existing template status, active/archive
   * @param {Object} arg - arg object.
   * @param {string} arg.id - template id
   * @param {UpdateTemplateRequest} arg.body
   **/
  updateTemplate({ id, body } = {}) {
    const { error } = FeedbackValidator.updateTemplate().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/templates/${id}/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update a template's status
   * @description: Update existing template status, active/archive
   * @param {Object} arg - arg object.
   * @param {string} arg.id - template id
   * @param {UpdateTemplateStatusRequest} arg.body
   **/
  updateTemplateStatus({ id, body } = {}) {
    const { error } = FeedbackValidator.updateTemplateStatus().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/feedback/v1.0/company/${this.config.companyId}/application/${this.applicationId}/templates/${id}/status`,
      queryObj,
      body
    );
  }
}

class Theme {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Gets list of themes in theme library
    * @description: Gets list of themes in theme library
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    * @param {number} [arg.pageNo] - Page number. Default is 1.
    
    **/
  getThemeLibrary({ pageSize, pageNo } = {}) {
    const { error } = ThemeValidator.getThemeLibrary().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_size"] = pageSize;
    queryObj["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/library`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add theme to theme library
   * @description: Add theme to theme library
   * @param {Object} arg - arg object.
   * @param {AddThemeRequestSchema} arg.body
   **/
  addToThemeLibrary({ body } = {}) {
    const { error } = ThemeValidator.addToThemeLibrary().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/library`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Apply theme
   * @description: Apply theme
   * @param {Object} arg - arg object.
   * @param {AddThemeRequestSchema} arg.body
   **/
  applyTheme({ body } = {}) {
    const { error } = ThemeValidator.applyTheme().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/apply`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Checks if theme is upgradable
    * @description: Checks if theme is upgradable
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  isUpgradable({ themeId } = {}) {
    const { error } = ThemeValidator.isUpgradable().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgradable`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Upgrades theme
    * @description: Upgrades theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  upgradeTheme({ themeId } = {}) {
    const { error } = ThemeValidator.upgradeTheme().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/upgrade`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Gets public themes
    * @description: Gets public themes
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    * @param {number} [arg.pageNo] - Page number. Default is 1.
    
    **/
  getPublicThemes({ pageSize, pageNo } = {}) {
    const { error } = ThemeValidator.getPublicThemes().validate(
      {
        pageSize,
        pageNo,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_size"] = pageSize;
    queryObj["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/public/library`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create new theme
   * @description: Create new theme
   * @param {Object} arg - arg object.
   * @param {ThemesSchema} arg.body
   **/
  createTheme({ body } = {}) {
    const { error } = ThemeValidator.createTheme().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get applied theme
    * @description: Get applied theme
    * @param {Object} arg - arg object.
    
    **/
  getAppliedTheme({} = {}) {
    const { error } = ThemeValidator.getAppliedTheme().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Gets fonts
    * @description: Gets fonts
    * @param {Object} arg - arg object.
    
    **/
  getFonts({} = {}) {
    const { error } = ThemeValidator.getFonts().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/fonts`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Gets theme by id
    * @description: Gets theme by id
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  getThemeById({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeById().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update theme
   * @description: Update theme
   * @param {Object} arg - arg object.
   * @param {string} arg.themeId - Theme ID
   * @param {ThemesSchema} arg.body
   **/
  updateTheme({ themeId, body } = {}) {
    const { error } = ThemeValidator.updateTheme().validate(
      {
        themeId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete theme
    * @description: Delete theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  deleteTheme({ themeId } = {}) {
    const { error } = ThemeValidator.deleteTheme().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Gets theme for preview
    * @description: Gets theme for preview
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  getThemeForPreview({ themeId } = {}) {
    const { error } = ThemeValidator.getThemeForPreview().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/preview`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Publish theme
    * @description: Publish theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  publishTheme({ themeId } = {}) {
    const { error } = ThemeValidator.publishTheme().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/publish`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Unpublish theme
    * @description: Unpublish theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  unpublishTheme({ themeId } = {}) {
    const { error } = ThemeValidator.unpublishTheme().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/unpublish`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Archive theme
    * @description: Archive theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  archiveTheme({ themeId } = {}) {
    const { error } = ThemeValidator.archiveTheme().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/archive`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Unarchive theme
    * @description: Unarchive theme
    * @param {Object} arg - arg object.
    * @param {string} arg.themeId - Theme ID
    
    **/
  unarchiveTheme({ themeId } = {}) {
    const { error } = ThemeValidator.unarchiveTheme().validate(
      {
        themeId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/theme/v1.0/company/${this.config.companyId}/application/${this.applicationId}/${themeId}/unarchive`,
      queryObj,
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
    *
    * @summary: Gets list of customers
    * @description: Used to get application customers list
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
    * @param {number} [arg.pageNo] - Page number. Default is 1.
    
    **/
  getCustomers({ q, pageSize, pageNo } = {}) {
    const { error } = UserValidator.getCustomers().validate(
      {
        q,
        pageSize,
        pageNo,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["q"] = q;
    queryObj["page_size"] = pageSize;
    queryObj["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/list`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Search users
    * @description: Search users
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    
    **/
  searchUsers({ q } = {}) {
    const { error } = UserValidator.searchUsers().validate(
      {
        q,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/customers/search`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get platform config
    * @description: Used to get platform config
    * @param {Object} arg - arg object.
    
    **/
  getPlatformConfig({} = {}) {
    const { error } = UserValidator.getPlatformConfig().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update platform config
   * @description: Used to update platform config
   * @param {Object} arg - arg object.
   * @param {PlatformSchema} arg.body
   **/
  updatePlatformConfig({ body } = {}) {
    const { error } = UserValidator.updatePlatformConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/user/v1.0/company/${this.config.companyId}/application/${this.applicationId}/platform/config`,
      queryObj,
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
    *
    * @summary: Get annoucements list
    * @description: Get list of announcements
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    
    **/
  getAnnouncementsList({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getAnnouncementsList().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get annoucements list
    * @description: Get list of announcements
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company ID
    * @param {string} arg.applicationId - Application ID
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    
    **/
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
   *
   * @summary: Create an annoucement
   * @description: Create an announcement
   * @param {Object} arg - arg object.
   * @param {AdminAnnouncementSchema} arg.body
   **/
  createAnnouncement({ body } = {}) {
    const { error } = ContentValidator.createAnnouncement().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get annoucement by id
    * @description: Get announcement by id
    * @param {Object} arg - arg object.
    * @param {string} arg.announcementId - Announcement ID
    
    **/
  getAnnouncementById({ announcementId } = {}) {
    const { error } = ContentValidator.getAnnouncementById().validate(
      {
        announcementId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update an annoucement
   * @description: Update an announcement
   * @param {Object} arg - arg object.
   * @param {string} arg.announcementId - Announcement ID
   * @param {AdminAnnouncementSchema} arg.body
   **/
  updateAnnouncement({ announcementId, body } = {}) {
    const { error } = ContentValidator.updateAnnouncement().validate(
      {
        announcementId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update schedule or published status of an annoucement
   * @description: Update schedule or published status of an announcement
   * @param {Object} arg - arg object.
   * @param {string} arg.announcementId - Announcement ID
   * @param {ScheduleSchema} arg.body
   **/
  updateAnnouncementSchedule({ announcementId, body } = {}) {
    const { error } = ContentValidator.updateAnnouncementSchedule().validate(
      {
        announcementId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete annoucement by id
    * @description: Delete announcement by id
    * @param {Object} arg - arg object.
    * @param {string} arg.announcementId - Announcement ID
    
    **/
  deleteAnnouncement({ announcementId } = {}) {
    const { error } = ContentValidator.deleteAnnouncement().validate(
      {
        announcementId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/announcements/${announcementId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create blog
   * @description: Use this to create a blog.
   * @param {Object} arg - arg object.
   * @param {BlogRequest} arg.body
   **/
  createBlog({ body } = {}) {
    const { error } = ContentValidator.createBlog().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get blogs
    * @description: Use this to get blogs.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    
    **/
  getBlogs({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getBlogs().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get blogs
    * @description: Use this to get blogs.
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company Id
    * @param {string} arg.applicationId - Application Id
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    
    **/
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
   *
   * @summary: Update blog
   * @description: Use this to update blog.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Blog Id
   * @param {BlogRequest} arg.body
   **/
  updateBlog({ id, body } = {}) {
    const { error } = ContentValidator.updateBlog().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete blogs
    * @description: Use this to delete blogs.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Blog Id
    
    **/
  deleteBlog({ id } = {}) {
    const { error } = ContentValidator.deleteBlog().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get components by component Id
    * @description: The endpoint fetches the component by component Id
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - slug of page to be fetched
    
    **/
  getComponentById({ slug } = {}) {
    const { error } = ContentValidator.getComponentById().validate(
      {
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/blogs/${slug}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get FAQ categories list
    * @description: Get list of FAQ categories
    * @param {Object} arg - arg object.
    
    **/
  getFaqCategories({} = {}) {
    const { error } = ContentValidator.getFaqCategories().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/categories`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get FAQ category by slug or id
    * @description: Get FAQ category by slug or id
    * @param {Object} arg - arg object.
    * @param {string} arg.idOrSlug - Slug or Id of FAQ Category
    
    **/
  getFaqCategoryBySlugOrId({ idOrSlug } = {}) {
    const { error } = ContentValidator.getFaqCategoryBySlugOrId().validate(
      {
        idOrSlug,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${idOrSlug}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Creates a FAQ category
   * @description: Add Faq Category
   * @param {Object} arg - arg object.
   * @param {CreateFaqCategoryRequestSchema} arg.body
   **/
  createFaqCategory({ body } = {}) {
    const { error } = ContentValidator.createFaqCategory().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Updates a FAQ category
   * @description: Update Faq Category
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Faq category ID
   * @param {UpdateFaqCategoryRequestSchema} arg.body
   **/
  updateFaqCategory({ id, body } = {}) {
    const { error } = ContentValidator.updateFaqCategory().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Deletes a FAQ category
    * @description: Delete Faq Category
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Faq category ID
    
    **/
  deleteFaqCategory({ id } = {}) {
    const { error } = ContentValidator.deleteFaqCategory().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get FAQs of a Faq Category id or slug
    * @description: Get FAQs of a Faq Category `id` or `slug`
    * @param {Object} arg - arg object.
    * @param {string} arg.idOrSlug - Faq category ID or slug
    
    **/
  getFaqsByCategoryIdOrSlug({ idOrSlug } = {}) {
    const { error } = ContentValidator.getFaqsByCategoryIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${idOrSlug}/faqs`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Creates FAQs for category whose `id` is specified
   * @description: Creates FAQs for category whose `id` is specified
   * @param {Object} arg - arg object.
   * @param {string} arg.categoryId - Faq category ID
   * @param {CreateFaqSchema} arg.body
   **/
  addFaq({ categoryId, body } = {}) {
    const { error } = ContentValidator.addFaq().validate(
      {
        categoryId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faqs`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Updates FAQ
   * @description: Updates FAQ
   * @param {Object} arg - arg object.
   * @param {string} arg.categoryId - Faq category ID
   * @param {string} arg.faqId - Faq ID
   * @param {CreateFaqSchema} arg.body
   **/
  updateFaq({ categoryId, faqId, body } = {}) {
    const { error } = ContentValidator.updateFaq().validate(
      {
        categoryId,
        faqId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete FAQ
    * @description: Delete FAQ
    * @param {Object} arg - arg object.
    * @param {string} arg.categoryId - Faq category ID
    * @param {string} arg.faqId - Faq ID
    
    **/
  deleteFaq({ categoryId, faqId } = {}) {
    const { error } = ContentValidator.deleteFaq().validate(
      {
        categoryId,
        faqId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/category/${categoryId}/faq/${faqId}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get frequently asked question
    * @description: Get frequently asked questions list. These will be helpful for users to using website.
    * @param {Object} arg - arg object.
    * @param {string} arg.idOrSlug - Slug or Id of FAQ
    
    **/
  getFaqByIdOrSlug({ idOrSlug } = {}) {
    const { error } = ContentValidator.getFaqByIdOrSlug().validate(
      {
        idOrSlug,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/faq/${idOrSlug}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get landing-pages
    * @description: Use this to get landing-pages.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    
    **/
  getLandingPages({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getLandingPages().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get landing-pages
    * @description: Use this to get landing-pages.
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company ID
    * @param {string} arg.applicationId - Application ID
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    
    **/
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
   *
   * @summary: Create landing-page
   * @description: Use this to create landing-page.
   * @param {Object} arg - arg object.
   * @param {LandingPageSchema} arg.body
   **/
  createLandingPage({ body } = {}) {
    const { error } = ContentValidator.createLandingPage().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update landing-page
   * @description: Use this to update landing-page.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Landing page ID
   * @param {LandingPageSchema} arg.body
   **/
  updateLandingPage({ id, body } = {}) {
    const { error } = ContentValidator.updateLandingPage().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete landing-page
    * @description: Use this to delete landing-page.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Landing page ID
    
    **/
  deleteLandingPage({ id } = {}) {
    const { error } = ContentValidator.deleteLandingPage().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/landing-page/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get legal information
    * @description: Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
    * @param {Object} arg - arg object.
    
    **/
  getLegalInformation({} = {}) {
    const { error } = ContentValidator.getLegalInformation().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/legal`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save legal information
   * @description: Save legal information of application, which includes Policy, Terms and Conditions, and FAQ information of application.
   * @param {Object} arg - arg object.
   * @param {ApplicationLegal} arg.body
   **/
  updateLegalInformation({ body } = {}) {
    const { error } = ContentValidator.updateLegalInformation().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/legal`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get navigations
    * @description: Use this to get navigations.
    * @param {Object} arg - arg object.
    * @param {string} arg.devicePlatform - Device platform
    * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    
    **/
  getNavigations({ devicePlatform, pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getNavigations().validate(
      {
        devicePlatform,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["device_platform"] = devicePlatform;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get navigations
    * @description: Use this to get navigations.
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company ID
    * @param {string} arg.applicationId - Application ID
    * @param {string} arg.devicePlatform - Device platform
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    
    **/
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
   *
   * @summary: Create navigation
   * @description: Use this to create navigation.
   * @param {Object} arg - arg object.
   * @param {NavigationRequest} arg.body
   **/
  createNavigation({ body } = {}) {
    const { error } = ContentValidator.createNavigation().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get default navigations
    * @description: Use this to get default navigations.
    * @param {Object} arg - arg object.
    
    **/
  getDefaultNavigations({} = {}) {
    const { error } = ContentValidator.getDefaultNavigations().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/default`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get navigation by slug
    * @description: Use this to get navigation by slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug
    * @param {string} arg.devicePlatform - Device platform
    
    **/
  getNavigationBySlug({ slug, devicePlatform } = {}) {
    const { error } = ContentValidator.getNavigationBySlug().validate(
      {
        slug,
        devicePlatform,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["device_platform"] = devicePlatform;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${slug}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update navigation
   * @description: Use this to update navigation.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Navigation ID
   * @param {NavigationRequest} arg.body
   **/
  updateNavigation({ id, body } = {}) {
    const { error } = ContentValidator.updateNavigation().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete navigation
    * @description: Use this to delete navigation.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Navigation ID
    
    **/
  deleteNavigation({ id } = {}) {
    const { error } = ContentValidator.deleteNavigation().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/navigations/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get page meta
    * @description: Use this to get Page Meta.
    * @param {Object} arg - arg object.
    
    **/
  getPageMeta({} = {}) {
    const { error } = ContentValidator.getPageMeta().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/meta`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get page spec
    * @description: Use this to get page spec.
    * @param {Object} arg - arg object.
    
    **/
  getPageSpec({} = {}) {
    const { error } = ContentValidator.getPageSpec().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/spec`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Create page
   * @description: Use this to create a page.
   * @param {Object} arg - arg object.
   * @param {PageRequest} arg.body
   **/
  createPage({ body } = {}) {
    const { error } = ContentValidator.createPage().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get pages
    * @description: Use this to get pages.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    
    **/
  getPages({ pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getPages().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get pages
    * @description: Use this to get pages.
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company Id
    * @param {string} arg.applicationId - Application Id
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    
    **/
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
   *
   * @summary: Create page preview
   * @description: Use this to create a page preview.
   * @param {Object} arg - arg object.
   * @param {PageRequest} arg.body
   **/
  createPagePreview({ body } = {}) {
    const { error } = ContentValidator.createPagePreview().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/preview/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update page
   * @description: Use this to update page.
   * @param {Object} arg - arg object.
   * @param {string} arg.slug - Page publish slug
   * @param {PagePublishRequest} arg.body
   **/
  updatePagePreview({ slug, body } = {}) {
    const { error } = ContentValidator.updatePagePreview().validate(
      {
        slug,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/publish/${slug}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update page
   * @description: Use this to update page.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Page Id
   * @param {PageSchema} arg.body
   **/
  updatePage({ id, body } = {}) {
    const { error } = ContentValidator.updatePage().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete page
    * @description: Use this to delete page.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Page Id
    
    **/
  deletePage({ id } = {}) {
    const { error } = ContentValidator.deletePage().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get pages by component Id
    * @description: The endpoint fetches the component by component Id
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug of page to be fetched
    
    **/
  getPageBySlug({ slug } = {}) {
    const { error } = ContentValidator.getPageBySlug().validate(
      {
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pages/${slug}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get seo of application
    * @description: Get seo of application
    * @param {Object} arg - arg object.
    
    **/
  getSEOConfiguration({} = {}) {
    const { error } = ContentValidator.getSEOConfiguration().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update seo of application
   * @description: Update seo of application
   * @param {Object} arg - arg object.
   * @param {SeoComponent} arg.body
   **/
  updateSEOConfiguration({ body } = {}) {
    const { error } = ContentValidator.updateSEOConfiguration().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/seo`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get slideshows
    * @description: Use this to get slideshows.
    * @param {Object} arg - arg object.
    * @param {string} arg.devicePlatform - Device platform
    * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    
    **/
  getSlideshows({ devicePlatform, pageNo, pageSize } = {}) {
    const { error } = ContentValidator.getSlideshows().validate(
      {
        devicePlatform,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["device_platform"] = devicePlatform;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get slideshows
    * @description: Use this to get slideshows.
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company ID
    * @param {string} arg.applicationId - Application ID
    * @param {string} arg.devicePlatform - Device platform
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
    
    **/
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
   *
   * @summary: Create slideshow
   * @description: Use this to create slideshow.
   * @param {Object} arg - arg object.
   * @param {SlideshowRequest} arg.body
   **/
  createSlideshow({ body } = {}) {
    const { error } = ContentValidator.createSlideshow().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get slideshow by slug
    * @description: Use this to get slideshow by slug.
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - Slug
    * @param {string} arg.devicePlatform - Device platform
    
    **/
  getSlideshowBySlug({ slug, devicePlatform } = {}) {
    const { error } = ContentValidator.getSlideshowBySlug().validate(
      {
        slug,
        devicePlatform,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["device_platform"] = devicePlatform;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${slug}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update slideshow
   * @description: Use this to update slideshow.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Slideshow ID
   * @param {SlideshowRequest} arg.body
   **/
  updateSlideshow({ id, body } = {}) {
    const { error } = ContentValidator.updateSlideshow().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete slideshow
    * @description: Use this to delete slideshow.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Slideshow ID
    
    **/
  deleteSlideshow({ id } = {}) {
    const { error } = ContentValidator.deleteSlideshow().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/slideshows/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get support information
    * @description: Get contact details for customer support. Including emails and phone numbers
    * @param {Object} arg - arg object.
    
    **/
  getSupportInformation({} = {}) {
    const { error } = ContentValidator.getSupportInformation().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/support`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update support data of application
   * @description: Update support data of application
   * @param {Object} arg - arg object.
   * @param {Support} arg.body
   **/
  updateSupportInformation({ body } = {}) {
    const { error } = ContentValidator.updateSupportInformation().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/support`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Creates Tag
   * @description: Create tags
   * @param {Object} arg - arg object.
   * @param {CreateTagRequestSchema} arg.body
   **/
  createInjectableTag({ body } = {}) {
    const { error } = ContentValidator.createInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Updates a Tag
   * @description: Update tag
   * @param {Object} arg - arg object.
   * @param {CreateTagRequestSchema} arg.body
   **/
  updateInjectableTag({ body } = {}) {
    const { error } = ContentValidator.updateInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete tags for application
    * @description: Delete tags for application
    * @param {Object} arg - arg object.
    
    **/
  deleteAllInjectableTags({} = {}) {
    const { error } = ContentValidator.deleteAllInjectableTags().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get tags for application
    * @description: Get tags for application
    * @param {Object} arg - arg object.
    
    **/
  getInjectableTags({} = {}) {
    const { error } = ContentValidator.getInjectableTags().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Adds a Tag
   * @description: Add tag
   * @param {Object} arg - arg object.
   * @param {CreateTagRequestSchema} arg.body
   **/
  addInjectableTag({ body } = {}) {
    const { error } = ContentValidator.addInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/add`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Removes a Tag
   * @description: Remove a particular tag
   * @param {Object} arg - arg object.
   * @param {RemoveHandpickedSchema} arg.body
   **/
  removeInjectableTag({ body } = {}) {
    const { error } = ContentValidator.removeInjectableTag().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/remove/handpicked`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Edits a Tag by Id
   * @description: Edits a particular tag
   * @param {Object} arg - arg object.
   * @param {string} arg.tagId - Tag ID
   * @param {UpdateHandpickedSchema} arg.body
   **/
  editInjectableTag({ tagId, body } = {}) {
    const { error } = ContentValidator.editInjectableTag().validate(
      {
        tagId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/content/v1.0/company/${this.config.companyId}/application/${this.applicationId}/tags/edit/handpicked/${tagId}`,
      queryObj,
      body
    );
  }
}

class Assignment {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: 
    * @description: Create a new Pickup point for an application.

    * @param {Object} arg - arg object.
    * @param {PickupPointSchema} arg.body
    **/
  createPickupLocation({ body } = {}) {
    const { error } = AssignmentValidator.createPickupLocation().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pickup/locations`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: 
    * @description: Update list of pickup points for an application.

    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - Search query
    * @param {number} [arg.pageNo] - Request a page number
    * @param {number} [arg.pageSize] - Request a page size
    
    **/
  getPickupLocation({ q, pageNo, pageSize } = {}) {
    const { error } = AssignmentValidator.getPickupLocation().validate(
      {
        q,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["q"] = q;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pickup/locations`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: 
    * @description: Update list of pickup points for an application.

    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - Search query
    * @param {number} [arg.pageSize] - Request a page size
    * @param {number} arg.companyId - Company Id
    * @param {string} arg.applicationId - Application Id
    
    **/
  getPickupLocationPaginator({ q, pageSize, companyId, applicationId } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getPickupLocation({
        companyId: companyId,
        applicationId: applicationId,
        q: q,
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
    *
    * @summary: 
    * @description: Update Pickup Point for an application. Pickup Point once created
can be updated using this API. 'x-application-id'm and request body are required to trigger
a successful update.

    * @param {Object} arg - arg object.
    * @param {number} arg.id - Pickup Point ID
    * @param {PickupPointSchema} arg.body
    **/
  updatePickupLocation({ id, body } = {}) {
    const { error } = AssignmentValidator.updatePickupLocation().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pickup/locations/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: 
    * @description: This API returns Pickup point data for an id. Returns not found if no data exists for the
store id passed.

    * @param {Object} arg - arg object.
    * @param {number} arg.id - Pickup Point Id
    
    **/
  getPickupLocationById({ id } = {}) {
    const { error } = AssignmentValidator.getPickupLocationById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pickup/locations/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: 
    * @description: Create a new pickup configuration for an application id. Only one configuration can be
created per application id.

    * @param {Object} arg - arg object.
    * @param {PickupConfiguration} arg.body
    **/
  createPickupConfiguration({ body } = {}) {
    const { error } = AssignmentValidator.createPickupConfiguration().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pickup/configurations`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: 
    * @description: Let pickup configuration for an application. z-application-id is required in
the header to fetch the data.

    * @param {Object} arg - arg object.
    
    **/
  getPickupConfiguration({} = {}) {
    const { error } = AssignmentValidator.getPickupConfiguration().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pickup/configurations`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: 
    * @description: Get Shipping configuration for an application. Returns the global shipping configuration
including shipping priority and default strategy, etc. Every application can have one set of
configuration each. The endpoint requires an application id to get the data.

    * @param {Object} arg - arg object.
    
    **/
  getAllocationConfiguration({} = {}) {
    const { error } = AssignmentValidator.getAllocationConfiguration().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/allocate/configurations`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: 
    * @description: Create a new Shipping configuration for an application The configuration is for
all the stores under an application. There can be only one configuration for an
application i.e, for an application configuration can be created only once.

    * @param {Object} arg - arg object.
    * @param {ShippingSchema} arg.body
    **/
  createAllocationConfiguration({ body } = {}) {
    const {
      error,
    } = AssignmentValidator.createAllocationConfiguration().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/allocate/configurations`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: 
    * @description: Update Shipping configuration for an application. Application configuration once created
can be updated using this API. 'x-application-id'm and request body are required to trigger
a successful update.

    * @param {Object} arg - arg object.
    * @param {ShippingSchema} arg.body
    **/
  updateAllocationConfiguration({ body } = {}) {
    const {
      error,
    } = AssignmentValidator.updateAllocationConfiguration().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/allocate/configurations`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: 
    * @description: List Stores of an application. Two types of stores are listed,
some having allocation types as standard and others, advanced.
API has support for pagination, filter by type and search by name.

    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - Search query
    * @param {number} [arg.pageNo] - Request a page number
    * @param {number} [arg.pageSize] - Request a page size
    * @param {string} [arg.type] - Type can be 'standard' or 'advanced'
    
    **/
  getAllocationLocations({ q, pageNo, pageSize, type } = {}) {
    const { error } = AssignmentValidator.getAllocationLocations().validate(
      {
        q,
        pageNo,
        pageSize,
        type,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["q"] = q;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["type"] = type;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/allocate/locations/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: 
    * @description: List Stores of an application. Two types of stores are listed,
some having allocation types as standard and others, advanced.
API has support for pagination, filter by type and search by name.

    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - Search query
    * @param {number} [arg.pageSize] - Request a page size
    * @param {string} [arg.type] - Type can be 'standard' or 'advanced'
    * @param {number} arg.companyId - Company Id
    * @param {string} arg.applicationId - Application Id
    
    **/
  getAllocationLocationsPaginator({
    q,
    pageSize,
    type,
    companyId,
    applicationId,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAllocationLocations({
        companyId: companyId,
        applicationId: applicationId,
        q: q,
        pageNo: pageNo,
        pageSize: pageSize,
        type: type,
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
    *
    * @summary: 
    * @description: This API returns store data for an id. Returns not found if no data exists for the
store id passed. The data is returned from sixspeed database which includes only the
shipping configuration of the stores including store id and app id.

    * @param {Object} arg - arg object.
    * @param {number} arg.id - Store Id
    
    **/
  getAllocationLocationById({ id } = {}) {
    const { error } = AssignmentValidator.getAllocationLocationById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/allocate/locations/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: 
    * @description: A store configuration once created can be updated via this API. Store id in request params
and udpated request body are required to successfully update the store data.

    * @param {Object} arg - arg object.
    * @param {number} arg.id - Store Id
    * @param {StoreSchema} arg.body
    **/
  updateAllocationLocation({ id, body } = {}) {
    const { error } = AssignmentValidator.updateAllocationLocation().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/allocate/locations/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: 
    * @description: Create a new store shipping configuratiion. The configuration is stored into the
sixspeed database. One one store data can be created for one store id. Ther can be one
default configuration and multiple non-default ones. The default is not binded with product
tags while others are required to be.

    * @param {Object} arg - arg object.
    * @param {StoreSchema} arg.body
    **/
  createAllocationLocation({ body } = {}) {
    const { error } = AssignmentValidator.createAllocationLocation().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/allocate/locations`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: 
    * @description: Get a list of zones created, where every zone has a unique name and id. They can be
of three different types, radius, pincode and country.

    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - Search query
    * @param {number} [arg.pageNo] - Request a page number
    * @param {number} [arg.pageSize] - Request a page size
    
    **/
  getDestinationZones({ q, pageNo, pageSize } = {}) {
    const { error } = AssignmentValidator.getDestinationZones().validate(
      {
        q,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["q"] = q;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/destination-zones`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: 
    * @description: Get a list of zones created, where every zone has a unique name and id. They can be
of three different types, radius, pincode and country.

    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - Search query
    * @param {number} [arg.pageSize] - Request a page size
    * @param {number} arg.companyId - Company Id
    * @param {string} arg.applicationId - Application Id
    
    **/
  getDestinationZonesPaginator({ q, pageSize, companyId, applicationId } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getDestinationZones({
        companyId: companyId,
        applicationId: applicationId,
        q: q,
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
    *
    * @summary: 
    * @description: This API lets you create a zone which can be used further be mapped with store
configuration rules to defined a shipping rule. Either of the three details need to
be passed, zone_detail, pincode and region.

    * @param {Object} arg - arg object.
    * @param {ZoneSchema} arg.body
    **/
  postDestinationZone({ body } = {}) {
    const { error } = AssignmentValidator.postDestinationZone().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/destination-zones`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: 
    * @description: Returns zone data for the specified zone id. Id is the required parameter and returns
not found if no data is found for the passed zone id.

    * @param {Object} arg - arg object.
    * @param {number} arg.id - Store Id
    
    **/
  getDestinationZoneById({ id } = {}) {
    const { error } = AssignmentValidator.getDestinationZoneById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/destination-zones/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: 
    * @description: Zone once created can be updated using this API. Zone id and request body are the required
data to update a zone.

    * @param {Object} arg - arg object.
    * @param {number} arg.id - Store Id
    * @param {ZoneSchema} arg.body
    **/
  updateDestinationZone({ id, body } = {}) {
    const { error } = AssignmentValidator.updateDestinationZone().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/assignment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/destination-zones/${id}`,
      queryObj,
      body
    );
  }
}

class Communication {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Get campaigns
    * @description: Get campaigns
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
  getCampaigns({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getCampaigns().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get campaigns
    * @description: Get campaigns
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
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
   *
   * @summary: Create campaign
   * @description: Create campaign
   * @param {Object} arg - arg object.
   * @param {CampaignReq} arg.body
   **/
  createCampaign({ body } = {}) {
    const { error } = CommunicationValidator.createCampaign().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get campaign by id
    * @description: Get campaign by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Campaign id
    
    **/
  getCampaignById({ id } = {}) {
    const { error } = CommunicationValidator.getCampaignById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update campaign by id
   * @description: Update campaign by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Campaign id
   * @param {CampaignReq} arg.body
   **/
  updateCampaignById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateCampaignById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/campaigns/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get stats of campaign by id
    * @description: Get stats of campaign by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Campaign id
    
    **/
  getStatsOfCampaignById({ id } = {}) {
    const { error } = CommunicationValidator.getStatsOfCampaignById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/campaigns/get-stats/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get audiences
    * @description: Get audiences
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
  getAudiences({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getAudiences().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get audiences
    * @description: Get audiences
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
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
   *
   * @summary: Create audience
   * @description: Create audience
   * @param {Object} arg - arg object.
   * @param {AudienceReq} arg.body
   **/
  createAudience({ body } = {}) {
    const { error } = CommunicationValidator.createAudience().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get bigquery headers
   * @description: Get bigquery headers
   * @param {Object} arg - arg object.
   * @param {BigqueryHeadersReq} arg.body
   **/
  getBigqueryHeaders({ body } = {}) {
    const { error } = CommunicationValidator.getBigqueryHeaders().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/bigquery-headers`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get audience by id
    * @description: Get audience by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Audience id
    
    **/
  getAudienceById({ id } = {}) {
    const { error } = CommunicationValidator.getAudienceById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update audience by id
   * @description: Update audience by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Audience id
   * @param {AudienceReq} arg.body
   **/
  updateAudienceById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateAudienceById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/datasources/${id}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get n sample records from csv
   * @description: Get n sample records from csv
   * @param {Object} arg - arg object.
   * @param {GetNRecordsCsvReq} arg.body
   **/
  getNSampleRecordsFromCsv({ body } = {}) {
    const {
      error,
    } = CommunicationValidator.getNSampleRecordsFromCsv().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sources/get-n-records`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get email providers
    * @description: Get email providers
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
  getEmailProviders({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getEmailProviders().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get email providers
    * @description: Get email providers
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
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
   *
   * @summary: Create email provider
   * @description: Create email provider
   * @param {Object} arg - arg object.
   * @param {EmailProviderReq} arg.body
   **/
  createEmailProvider({ body } = {}) {
    const { error } = CommunicationValidator.createEmailProvider().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get email provider by id
    * @description: Get email provider by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Email provider id
    
    **/
  getEmailProviderById({ id } = {}) {
    const { error } = CommunicationValidator.getEmailProviderById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update email provider by id
   * @description: Update email provider by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Email provider id
   * @param {EmailProviderReq} arg.body
   **/
  updateEmailProviderById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateEmailProviderById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/providers/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get email templates
    * @description: Get email templates
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
  getEmailTemplates({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getEmailTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get email templates
    * @description: Get email templates
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
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
   *
   * @summary: Create email template
   * @description: Create email template
   * @param {Object} arg - arg object.
   * @param {EmailTemplateReq} arg.body
   **/
  createEmailTemplate({ body } = {}) {
    const { error } = CommunicationValidator.createEmailTemplate().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get system email templates
    * @description: Get system email templates
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
  getSystemEmailTemplates({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getSystemEmailTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/system-templates`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get system email templates
    * @description: Get system email templates
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
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
    *
    * @summary: Get email template by id
    * @description: Get email template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Email template id
    
    **/
  getEmailTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.getEmailTemplateById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update email template by id
   * @description: Update email template by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Email template id
   * @param {EmailTemplateReq} arg.body
   **/
  updateEmailTemplateById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateEmailTemplateById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete email template by id
    * @description: Delete email template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Email template id
    
    **/
  deleteEmailTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.deleteEmailTemplateById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/email/templates/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get event subscriptions
    * @description: Get event subscriptions
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {string} [arg.populate] - populate fields
    
    **/
  getEventSubscriptions({ pageNo, pageSize, populate } = {}) {
    const { error } = CommunicationValidator.getEventSubscriptions().validate(
      {
        pageNo,
        pageSize,
        populate,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["populate"] = populate;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/event/event-subscriptions`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get event subscriptions
    * @description: Get event subscriptions
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    * @param {number} [arg.pageSize] - Current request items count
    * @param {string} [arg.populate] - populate fields
    
    **/
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
    *
    * @summary: Get jobs
    * @description: Get jobs
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
  getJobs({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getJobs().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/jobs`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get jobs
    * @description: Get jobs
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
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
   *
   * @summary: Trigger campaign job
   * @description: Trigger campaign job
   * @param {Object} arg - arg object.
   * @param {TriggerJobRequest} arg.body
   **/
  triggerCampaignJob({ body } = {}) {
    const { error } = CommunicationValidator.triggerCampaignJob().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/trigger-job`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get job logs
    * @description: Get job logs
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
  getJobLogs({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getJobLogs().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/jobs/logs`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get job logs
    * @description: Get job logs
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
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
    *
    * @summary: Get communication logs
    * @description: Get communication logs
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageId] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on _id
    * @param {Object} [arg.query] - 
    
    **/
  getCommunicationLogs({ pageId, pageSize, sort, query } = {}) {
    const { error } = CommunicationValidator.getCommunicationLogs().validate(
      {
        pageId,
        pageSize,
        sort,
        query,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_id"] = pageId;
    queryObj["page_size"] = pageSize;
    queryObj["sort"] = sort;
    queryObj["query"] = query;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/log`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get communication logs
    * @description: Get communication logs
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on _id
    * @param {Object} [arg.query] - 
    
    **/
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
    *
    * @summary: Get sms providers
    * @description: Get sms providers
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
  getSmsProviders({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getSmsProviders().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get sms providers
    * @description: Get sms providers
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
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
   *
   * @summary: Create sms provider
   * @description: Create sms provider
   * @param {Object} arg - arg object.
   * @param {SmsProviderReq} arg.body
   **/
  createSmsProvider({ body } = {}) {
    const { error } = CommunicationValidator.createSmsProvider().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get sms provider by id
    * @description: Get sms provider by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Sms provider id
    
    **/
  getSmsProviderById({ id } = {}) {
    const { error } = CommunicationValidator.getSmsProviderById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update sms provider by id
   * @description: Update sms provider by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Sms provider id
   * @param {SmsProviderReq} arg.body
   **/
  updateSmsProviderById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateSmsProviderById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/providers/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get sms templates
    * @description: Get sms templates
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
  getSmsTemplates({ pageNo, pageSize, sort } = {}) {
    const { error } = CommunicationValidator.getSmsTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get sms templates
    * @description: Get sms templates
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
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
   *
   * @summary: Create sms template
   * @description: Create sms template
   * @param {Object} arg - arg object.
   * @param {SmsTemplateReq} arg.body
   **/
  createSmsTemplate({ body } = {}) {
    const { error } = CommunicationValidator.createSmsTemplate().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get sms template by id
    * @description: Get sms template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Sms template id
    
    **/
  getSmsTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.getSmsTemplateById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update sms template by id
   * @description: Update sms template by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Sms template id
   * @param {SmsTemplateReq} arg.body
   **/
  updateSmsTemplateById({ id, body } = {}) {
    const { error } = CommunicationValidator.updateSmsTemplateById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete sms template by id
    * @description: Delete sms template by id
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Sms template id
    
    **/
  deleteSmsTemplateById({ id } = {}) {
    const { error } = CommunicationValidator.deleteSmsTemplateById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/templates/${id}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get system sms templates
    * @description: Get system sms templates
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
  getSystemSystemTemplates({ pageNo, pageSize, sort } = {}) {
    const {
      error,
    } = CommunicationValidator.getSystemSystemTemplates().validate(
      {
        pageNo,
        pageSize,
        sort,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["sort"] = sort;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/communication/v1.0/company/${this.config.companyId}/application/${this.applicationId}/sms/system-templates`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get system sms templates
    * @description: Get system sms templates
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company id
    * @param {string} arg.applicationId - Application id
    * @param {number} [arg.pageSize] - Current request items count
    * @param {Object} [arg.sort] - To sort based on created_at
    
    **/
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
    *
    * @summary: Get All Brand Payment Gateway Config Secret
    * @description: Get All Brand Payment Gateway Config Secret
    * @param {Object} arg - arg object.
    
    **/
  getBrandPaymentGatewayConfig({} = {}) {
    const { error } = PaymentValidator.getBrandPaymentGatewayConfig().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   * @param {Object} arg - arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   **/
  saveBrandPaymentGatewayConfig({ body } = {}) {
    const { error } = PaymentValidator.saveBrandPaymentGatewayConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Save Config Secret For Brand Payment Gateway
   * @description: Save Config Secret For Brand Payment Gateway
   * @param {Object} arg - arg object.
   * @param {PaymentGatewayConfigRequest} arg.body
   **/
  updateBrandPaymentGatewayConfig({ body } = {}) {
    const {
      error,
    } = PaymentValidator.updateBrandPaymentGatewayConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/aggregator/request`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get All Valid Payment Options
    * @description: Use this API to get Get All Valid Payment Options for making payment
    * @param {Object} arg - arg object.
    * @param {boolean} arg.refresh - 
    * @param {string} arg.requestType - 
    
    **/
  getPaymentModeRoutes({ refresh, requestType } = {}) {
    const { error } = PaymentValidator.getPaymentModeRoutes().validate(
      {
        refresh,
        requestType,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["refresh"] = refresh;
    queryObj["request_type"] = requestType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/payment/v1.0/company/${this.config.companyId}/application/${this.applicationId}/payment/options`,
      queryObj,
      undefined
    );
  }
}

class Order {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: Track Shipment by shipment id, for application based on application Id
    * @description: Shipment Track
    * @param {Object} arg - arg object.
    * @param {string} arg.shipmentId - Shipment Id
    
    **/
  trackShipmentPlatform({ shipmentId } = {}) {
    const { error } = OrderValidator.trackShipmentPlatform().validate(
      {
        shipmentId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/shipments/${shipmentId}/track`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Track Order by order id, for application based on application Id
    * @description: Order Track
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - Order Id
    
    **/
  trackOrder({ orderId } = {}) {
    const { error } = OrderValidator.trackOrder().validate(
      {
        orderId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/${orderId}/track`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get all failed orders application wise
    * @description: Failed Orders
    * @param {Object} arg - arg object.
    
    **/
  failedOrders({} = {}) {
    const { error } = OrderValidator.failedOrders().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/failed`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Reprocess order by order id
    * @description: Order Reprocess
    * @param {Object} arg - arg object.
    * @param {string} arg.orderId - Order Id
    
    **/
  reprocessOrder({ orderId } = {}) {
    const { error } = OrderValidator.reprocessOrder().validate(
      {
        orderId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/order/v1.0/company/${this.config.companyId}/application/${this.applicationId}/orders/${orderId}/reprocess`,
      queryObj,
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
   *
   * @summary: Update Search Keyword
   * @description: Update Search Keyword by its id. On successful request, returns the updated collection
   * @param {Object} arg - arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
   * @param {CreateSearchKeyword} arg.body
   **/
  updateSearchKeywords({ id, body } = {}) {
    const { error } = CatalogValidator.updateSearchKeywords().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete a Search Keywords
    * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
    
    **/
  deleteSearchKeywords({ id } = {}) {
    const { error } = CatalogValidator.deleteSearchKeywords().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get a Search Keywords Details
    * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
    
    **/
  getSearchKeywords({ id } = {}) {
    const { error } = CatalogValidator.getSearchKeywords().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List all Search Custom Keyword Listing
    * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
    * @param {Object} arg - arg object.
    
    **/
  getAllSearchKeyword({} = {}) {
    const { error } = CatalogValidator.getAllSearchKeyword().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add a Custom Search Keywords
   * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
   * @param {Object} arg - arg object.
   * @param {CreateSearchKeyword} arg.body
   **/
  createCustomKeyword({ body } = {}) {
    const { error } = CatalogValidator.createCustomKeyword().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/keyword/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Create & Update Autocomplete Keyword
   * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
   * @param {Object} arg - arg object.
   * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
   * @param {CreateAutocompleteKeyword} arg.body
   **/
  updateAutocompleteKeyword({ id, body } = {}) {
    const { error } = CatalogValidator.updateAutocompleteKeyword().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Delete a Autocomplete Keywords
    * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
    
    **/
  deleteAutocompleteKeyword({ id } = {}) {
    const { error } = CatalogValidator.deleteAutocompleteKeyword().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get a Autocomplete Keywords Details
    * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
    
    **/
  getAutocompleteKeywordDetail({ id } = {}) {
    const { error } = CatalogValidator.getAutocompleteKeywordDetail().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List all Autocomplete Keyword Listing
    * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
    * @param {Object} arg - arg object.
    
    **/
  getAutocompleteConfig({} = {}) {
    const { error } = CatalogValidator.getAutocompleteConfig().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add a Custom Autocomplete Keywords
   * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
   * @param {Object} arg - arg object.
   * @param {CreateAutocompleteKeyword} arg.body
   **/
  createCustomAutocompleteRule({ body } = {}) {
    const { error } = CatalogValidator.createCustomAutocompleteRule().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/search/autocomplete/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get configuration meta  details for catalog for admin panel
    * @description: configuration meta  details for catalog.
    * @param {Object} arg - arg object.
    
    **/
  getCatalogConfiguration({} = {}) {
    const { error } = CatalogValidator.getCatalogConfiguration().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/metadata/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get configured details for catalog
    * @description: configured details for catalog.
    * @param {Object} arg - arg object.
    
    **/
  getConfigurations({} = {}) {
    const { error } = CatalogValidator.getConfigurations().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add configuration for products & listings
   * @description: Add configuration for products & listing.
   * @param {Object} arg - arg object.
   * @param {AppConfiguration} arg.body
   **/
  createConfigurationProductListing({ body } = {}) {
    const {
      error,
    } = CatalogValidator.createConfigurationProductListing().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get configured details for catalog
    * @description: configured details for catalog.
    * @param {Object} arg - arg object.
    * @param {string} arg.type - type can be brands, categories etc.
    
    **/
  getConfigurationByType({ type } = {}) {
    const { error } = CatalogValidator.getConfigurationByType().validate(
      {
        type,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${type}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add configuration for categories and brands
   * @description: Add configuration for categories & brands.
   * @param {Object} arg - arg object.
   * @param {string} arg.type - type can be brands, categories etc.
   * @param {AppConfiguration} arg.body
   **/
  createConfigurationByType({ type, body } = {}) {
    const { error } = CatalogValidator.createConfigurationByType().validate(
      {
        type,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/product-configuration/${type}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get query filters to configure a collection
    * @description: Get query filters to configure a collection
    * @param {Object} arg - arg object.
    
    **/
  getQueryFilters({} = {}) {
    const { error } = CatalogValidator.getQueryFilters().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/query-options/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List all the collections
    * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
    * @param {Object} arg - arg object.
    
    **/
  getAllCollections({} = {}) {
    const { error } = CatalogValidator.getAllCollections().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add a Collection
   * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
   * @param {Object} arg - arg object.
   * @param {CreateCollection} arg.body
   **/
  createCollection({ body } = {}) {
    const { error } = CatalogValidator.createCollection().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get a particular collection
    * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
    
    **/
  getCollectionDetail({ slug } = {}) {
    const { error } = CatalogValidator.getCollectionDetail().validate(
      {
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${slug}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Update a collection
    * @description: Update a collection by it's id. On successful request, returns the updated collection
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier of a collection.
    
    **/
  updateCollection({ id } = {}) {
    const { error } = CatalogValidator.updateCollection().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Delete a Collection
    * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier of a collection.
    
    **/
  deleteCollection({ id } = {}) {
    const { error } = CatalogValidator.deleteCollection().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get the items for a collection
    * @description: Get items from a collection specified by its `id`.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - A `id` is a unique identifier of a collection.
    * @param {string} [arg.sortOn] - Each response will contain sort_on param, which should be sent back to make pagination work.
    * @param {string} [arg.pageId] - Each response will contain next_id param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getCollectionItems({ id, sortOn, pageId, pageSize } = {}) {
    const { error } = CatalogValidator.getCollectionItems().validate(
      {
        id,
        sortOn,
        pageId,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["sort_on"] = sortOn;
    queryObj["page_id"] = pageId;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/items/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add items to a collection
   * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - A `id` is a unique identifier of a collection.
   * @param {CollectionItemRequest} arg.body
   **/
  addCollectionItems({ id, body } = {}) {
    const { error } = CatalogValidator.addCollectionItems().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/collections/${id}/items/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Analytics data of catalog and inventory.
    * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
    * @param {Object} arg - arg object.
    * @param {string} [arg.brand] - Brand slug
    
    **/
  getCatalogInsights({ brand } = {}) {
    const { error } = CatalogValidator.getCatalogInsights().validate(
      {
        brand,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["brand"] = brand;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/analytics/insights/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List all the brands
    * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
    * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getApplicationBrands({ department, pageNo, pageSize } = {}) {
    const { error } = CatalogValidator.getApplicationBrands().validate(
      {
        department,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["department"] = department;
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/brands`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List all the brands
    * @description: A brand is the name under which a product is being sold. Use this API to list all the brands. You can pass optionally filter the brands by the department. If successful, returns a paginated list of brands specified in `BrandListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - A `company_id` is a unique identifier for a particular seller account.
    * @param {string} arg.applicationId - A `application_id` is a unique identifier for a particular sale channel.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getApplicationBrandsPaginator({
    companyId,
    applicationId,
    department,
    pageSize,
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
    *
    * @summary: List all the departments
    * @description: Departments are a way to categorise similar products. A product can lie in multiple departments. For example, a skirt can below to the 'Women's Fashion' Department while a handbag can lie in 'Women's Accessories' Department. Use this API to list all the departments. If successful, returns the list of departments specified in `DepartmentResponse`
    * @param {Object} arg - arg object.
    
    **/
  getDepartments({} = {}) {
    const { error } = CatalogValidator.getDepartments().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/departments`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List all the categories
    * @description: List all the categories. You can optionally pass filter the brands by the department. If successful, returns a paginated list of brands specified in `CategoryListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.department] - The name of the department. Use this parameter to filter products by a particular department. See below the list of available departments. You can retrieve available departments from the **v1.0/departments/** API
    
    **/
  getCategories({ department } = {}) {
    const { error } = CatalogValidator.getCategories().validate(
      {
        department,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["department"] = department;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/categories`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
    * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
    * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
    * @param {string} [arg.pageId] - Each response will contain **page_id** param, which should be sent back to make pagination work.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    * @param {number} [arg.pageNo] - If page_type is number then pass it to fetch page items. Default is 1.
    * @param {string} [arg.pageType] - For pagination type should be cursor or number. Default is cursor.
    
    **/
  getAppicationProducts({
    q,
    f,
    filters,
    sortOn,
    pageId,
    pageSize,
    pageNo,
    pageType,
  } = {}) {
    const { error } = CatalogValidator.getAppicationProducts().validate(
      {
        q,
        f,
        filters,
        sortOn,
        pageId,
        pageSize,
        pageNo,
        pageType,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["q"] = q;
    queryObj["f"] = f;
    queryObj["filters"] = filters;
    queryObj["sort_on"] = sortOn;
    queryObj["page_id"] = pageId;
    queryObj["page_size"] = pageSize;
    queryObj["page_no"] = pageNo;
    queryObj["page_type"] = pageType;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/products`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List the products
    * @description: List all the products associated with a brand, collection or category in a requested sort order. The API additionally supports arbitrary search queries that may refer the name of any product, brand, category or collection. If successful, returns a paginated list of products specified in `ApplicationProductListingResponse`
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - A `company_id` is a unique identifier for a particular seller account.
    * @param {string} arg.applicationId - A `application_id` is a unique identifier for a particular sale channel.
    * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
    * @param {string} [arg.f] - The search filter parameters. All the parameter filtered from filter parameters will be passed in **f** parameter in this format. **?f=brand:voi-jeans||and:::category:t-shirts||shirts**
    * @param {boolean} [arg.filters] - Pass `filters` parameter to fetch the filter details. This flag is used to fetch all filters
    * @param {string} [arg.sortOn] - The order to sort the list of products on. The supported sort parameters are popularity, price, redemption and discount in either ascending or descending order. See the supported values below.
    * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
    
    **/
  getAppicationProductsPaginator({
    companyId,
    applicationId,
    q,
    f,
    filters,
    sortOn,
    pageSize,
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
        filters: filters,
        sortOn: sortOn,
        pageId: pageId,
        pageSize: pageSize,
        pageNo: pageNo,
        pageType: pageType,
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
    *
    * @summary: Get a product
    * @description: Products are the core resource of an application. Products can be associated by categories, collections, brands and more. This API retrieves the product specified by the given **slug**. If successful, returns a Product resource in the response body specified in `ProductDetail`
    * @param {Object} arg - arg object.
    * @param {string} arg.slug - The unique identifier of a product. i.e; `slug` of a product. You can retrieve these from the APIs that list products like **v1.0/products/**
    
    **/
  getProductDetailBySlug({ slug } = {}) {
    const { error } = CatalogValidator.getProductDetailBySlug().validate(
      {
        slug,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/catalog/v1.0/company/${this.config.companyId}/application/${this.applicationId}/products/${slug}`,
      queryObj,
      undefined
    );
  }
}

class FileStorage {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
    *
    * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
    * @description: Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `appStartUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `appCompleteUpload` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartRequest} arg.body
    **/
  appStartUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.appStartUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/upload/start/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
    * @description: Uploads an arbitrarily sized buffer or blob.

It has three Major Steps:
* Start
* Upload
* Complete

### Start
Initiates the assets upload using `appStartUpload`.
It returns the storage link in response.

### Upload
Use the storage link to upload a file (Buffer or Blob) to the File Storage.
Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.

### Complete
After successfully upload, call `appCompleteUpload` api to complete the upload process.
This operation will return the url for the uploaded file.

    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {StartResponse} arg.body
    **/
  appCompleteUpload({ namespace, body } = {}) {
    const { error } = FileStorageValidator.appCompleteUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/upload/complete/`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Copy Files
   * @description: Copy Files
   * @param {Object} arg - arg object.
   * @param {boolean} [arg.sync] - sync
   * @param {BulkRequest} arg.body
   **/
  appCopyFiles({ body, sync } = {}) {
    const { error } = FileStorageValidator.appCopyFiles().validate(
      {
        body,
        sync,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["sync"] = sync;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/uploads/copy/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Browse Files
    * @description: Browse Files
    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {number} [arg.pageNo] - page no
    
    **/
  appBrowse({ namespace, pageNo } = {}) {
    const { error } = FileStorageValidator.appBrowse().validate(
      {
        namespace,
        pageNo,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/browse/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Browse Files
    * @description: Browse Files
    * @param {Object} arg - arg object.
    * @param {string} arg.namespace - bucket name
    * @param {number} arg.companyId - company_id
    * @param {number} arg.applicationId - application_id
    
    **/
  appBrowsePaginator({ namespace, companyId, applicationId } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.appBrowse({
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
   *
   * @summary: Create short link
   * @description: Create short link
   * @param {Object} arg - arg object.
   * @param {ShortLinkReq} arg.body
   **/
  createShortLink({ body } = {}) {
    const { error } = ShareValidator.createShortLink().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get short links
    * @description: Get short links
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page number
    * @param {number} [arg.pageSize] - Current page size
    * @param {string} [arg.createdBy] - Short link creator
    * @param {string} [arg.active] - Short link active status
    * @param {string} [arg.q] - Search text for original and short url
    
    **/
  getShortLinks({ pageNo, pageSize, createdBy, active, q } = {}) {
    const { error } = ShareValidator.getShortLinks().validate(
      {
        pageNo,
        pageSize,
        createdBy,
        active,
        q,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["created_by"] = createdBy;
    queryObj["active"] = active;
    queryObj["q"] = q;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get short links
    * @description: Get short links
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company Id
    * @param {string} arg.applicationId - Application Id
    * @param {number} [arg.pageSize] - Current page size
    * @param {string} [arg.createdBy] - Short link creator
    * @param {string} [arg.active] - Short link active status
    * @param {string} [arg.q] - Search text for original and short url
    
    **/
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
    *
    * @summary: Get short link by hash
    * @description: Get short link by hash
    * @param {Object} arg - arg object.
    * @param {string} arg.hash - Hash of short url
    
    **/
  getShortLinkByHash({ hash } = {}) {
    const { error } = ShareValidator.getShortLinkByHash().validate(
      {
        hash,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/${hash}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update short link by id
   * @description: Update short link by id
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Short link document identifier
   * @param {ShortLinkReq} arg.body
   **/
  updateShortLinkById({ id, body } = {}) {
    const { error } = ShareValidator.updateShortLinkById().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/share/v1.0/company/${this.config.companyId}/application/${this.applicationId}/links/short-link/${id}/`,
      queryObj,
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
    *
    * @summary: Get latest build config
    * @description: Get latest build config
    * @param {Object} arg - arg object.
    * @param {string} arg.platformType - Current platform name
    
    **/
  getBuildConfig({ platformType } = {}) {
    const { error } = ConfigurationValidator.getBuildConfig().validate(
      {
        platformType,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/build/${platformType}/configuration`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update build config for next build
   * @description: Update build config for next build
   * @param {Object} arg - arg object.
   * @param {string} arg.platformType - Current platform name
   * @param {MobileAppConfigRequest} arg.body
   **/
  updateBuildConfig({ platformType, body } = {}) {
    const { error } = ConfigurationValidator.updateBuildConfig().validate(
      {
        platformType,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/build/${platformType}/configuration`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get previous versions
    * @description: Get previous versions
    * @param {Object} arg - arg object.
    * @param {string} arg.platformType - Current platform name
    
    **/
  getPreviousVersions({ platformType } = {}) {
    const { error } = ConfigurationValidator.getPreviousVersions().validate(
      {
        platformType,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/build/${platformType}/versions`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get features of application
    * @description: Get features of application
    * @param {Object} arg - arg object.
    
    **/
  getAppFeatures({} = {}) {
    const { error } = ConfigurationValidator.getAppFeatures().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/feature`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update features of application
   * @description: Update features of application
   * @param {Object} arg - arg object.
   * @param {AppFeatureRequest} arg.body
   **/
  updateAppFeatures({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppFeatures().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/feature`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get basic application details
    * @description: Get basic application details like name
    * @param {Object} arg - arg object.
    
    **/
  getAppBasicDetails({} = {}) {
    const { error } = ConfigurationValidator.getAppBasicDetails().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/detail`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add or update application's basic details
   * @description: Add or update application's basic details
   * @param {Object} arg - arg object.
   * @param {ApplicationDetail} arg.body
   **/
  updateAppBasicDetails({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppBasicDetails().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/detail`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get application information
    * @description: Get Application Current Information. This includes information about social links, address and contact information of company/seller/brand of the application.
    * @param {Object} arg - arg object.
    
    **/
  getAppContactInfo({} = {}) {
    const { error } = ConfigurationValidator.getAppContactInfo().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/information`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Get application information
   * @description: Save Application Current Information. This includes information about social links, address and contact information of an application.
   * @param {Object} arg - arg object.
   * @param {ApplicationInformation} arg.body
   **/
  updateAppContactInfo({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppContactInfo().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/information`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get social tokens
    * @description: Get social tokens.
    * @param {Object} arg - arg object.
    
    **/
  getAppApiTokens({} = {}) {
    const { error } = ConfigurationValidator.getAppApiTokens().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/token`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add social tokens
   * @description: Add social tokens.
   * @param {Object} arg - arg object.
   * @param {TokenResponse} arg.body
   **/
  updateAppApiTokens({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppApiTokens().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/token`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Application inventory enabled companies
    * @description: Application inventory enabled companies.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getAppCompanies({ pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getAppCompanies().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/companies`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Application inventory enabled companies
    * @description: Application inventory enabled companies.
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Current company id
    * @param {string} arg.applicationId - Current application id
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getAppCompaniesPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAppCompanies({
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
    *
    * @summary: Application inventory enabled stores
    * @description: Application inventory enabled stores.
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - Current page no
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
  getAppStores({ pageNo, pageSize } = {}) {
    const { error } = ConfigurationValidator.getAppStores().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stores`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Application inventory enabled stores
    * @description: Application inventory enabled stores.
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Current company id
    * @param {string} arg.applicationId - Current application id
    * @param {number} [arg.pageSize] - Current request items count
    
    **/
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
    *
    * @summary: Get application configuration
    * @description: Get application configuration for various features and data
    * @param {Object} arg - arg object.
    
    **/
  getInventoryConfig({} = {}) {
    const { error } = ConfigurationValidator.getInventoryConfig().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update application configuration
   * @description: Update application configuration for various features and data
   * @param {Object} arg - arg object.
   * @param {ApplicationInventory} arg.body
   **/
  updateInventoryConfig({ body } = {}) {
    const { error } = ConfigurationValidator.updateInventoryConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Partially update application configuration
   * @description: Partially update application configuration for various features and data
   * @param {Object} arg - arg object.
   * @param {AppInventoryPartialUpdate} arg.body
   **/
  partiallyUpdateInventoryConfig({ body } = {}) {
    const {
      error,
    } = ConfigurationValidator.partiallyUpdateInventoryConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get application enabled currency list
    * @description: Get application enabled currency list
    * @param {Object} arg - arg object.
    
    **/
  getAppCurrencyConfig({} = {}) {
    const { error } = ConfigurationValidator.getAppCurrencyConfig().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/currency`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add initial application supported currency
   * @description: Add initial application supported currency for various features and data. Default INR will be enabled.
   * @param {Object} arg - arg object.
   * @param {AppSupportedCurrency} arg.body
   **/
  updateAppCurrencyConfig({ body } = {}) {
    const { error } = ConfigurationValidator.updateAppCurrencyConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/currency`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get ordering store by filter
   * @description: Get ordering store by filter
   * @param {Object} arg - arg object.
   * @param {number} [arg.pageNo] - Current page no
   * @param {number} [arg.pageSize] - Current request items count
   * @param {FilterOrderingStoreRequest} arg.body
   **/
  getOrderingStoresByFilter({ body, pageNo, pageSize } = {}) {
    const {
      error,
    } = ConfigurationValidator.getOrderingStoresByFilter().validate(
      {
        body,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ordering-store/stores/filter`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get ordering store by filter
   * @description: Get ordering store by filter
   * @param {Object} arg - arg object.
   * @param {string} arg.companyId - Current company id
   * @param {string} arg.applicationId - Current application id
   * @param {number} [arg.pageSize] - Current request items count
   * @param {FilterOrderingStoreRequest} arg.body
   **/
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
   *
   * @summary: Add/Update ordering store config
   * @description: Add/Update ordering store config.
   * @param {Object} arg - arg object.
   * @param {OrderingStoreConfig} arg.body
   **/
  updateOrderingStoreConfig({ body } = {}) {
    const {
      error,
    } = ConfigurationValidator.updateOrderingStoreConfig().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ordering-store`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get attached domain list
    * @description: Get attached domain list.
    * @param {Object} arg - arg object.
    
    **/
  getDomains({} = {}) {
    const { error } = ConfigurationValidator.getDomains().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Add new domain to application
   * @description: Add new domain to application.
   * @param {Object} arg - arg object.
   * @param {DomainAddRequest} arg.body
   **/
  addDomain({ body } = {}) {
    const { error } = ConfigurationValidator.addDomain().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Remove attached domain
    * @description: Remove attached domain.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Domain _id
    
    **/
  removeDomainById({ id } = {}) {
    const { error } = ConfigurationValidator.removeDomainById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Change domain type
   * @description: Change a domain to Primary or Shortlink domain
   * @param {Object} arg - arg object.
   * @param {UpdateDomainTypeRequest} arg.body
   **/
  changeDomainType({ body } = {}) {
    const { error } = ConfigurationValidator.changeDomainType().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain/set-domain`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Get domain connected status.
   * @description: Get domain connected status. Check if domain is live and mapped to appropriate IP to fynd servers.
   * @param {Object} arg - arg object.
   * @param {DomainStatusRequest} arg.body
   **/
  getDomainStatus({ body } = {}) {
    const { error } = ConfigurationValidator.getDomainStatus().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain/domain-status`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get application data from id
    * @description: Get application data from id
    * @param {Object} arg - arg object.
    
    **/
  getApplicationById({} = {}) {
    const { error } = ConfigurationValidator.getApplicationById().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}`,
      queryObj,
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
    *
    * @summary: Get with single coupon details or coupon list
    * @description: Get coupon list with pagination
    * @param {Object} arg - arg object.
    * @param {number} [arg.pageNo] - 
    * @param {number} [arg.pageSize] - 
    * @param {boolean} [arg.isArchived] - 
    * @param {string} [arg.title] - 
    * @param {boolean} [arg.isPublic] - 
    * @param {boolean} [arg.isDisplay] - 
    * @param {string} [arg.typeSlug] - 
    * @param {string} [arg.code] - 
    
    **/
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
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;
    queryObj["is_archived"] = isArchived;
    queryObj["title"] = title;
    queryObj["is_public"] = isPublic;
    queryObj["is_display"] = isDisplay;
    queryObj["type_slug"] = typeSlug;
    queryObj["code"] = code;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get with single coupon details or coupon list
    * @description: Get coupon list with pagination
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Current company id
    * @param {string} arg.applicationId - Current Application _id
    * @param {number} [arg.pageSize] - 
    * @param {boolean} [arg.isArchived] - 
    * @param {string} [arg.title] - 
    * @param {boolean} [arg.isPublic] - 
    * @param {boolean} [arg.isDisplay] - 
    * @param {string} [arg.typeSlug] - 
    * @param {string} [arg.code] - 
    
    **/
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
   *
   * @summary: Create new coupon
   * @description: Create new coupon
   * @param {Object} arg - arg object.
   * @param {CouponAdd} arg.body
   **/
  createCoupon({ body } = {}) {
    const { error } = CartValidator.createCoupon().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get with single coupon details or coupon list
    * @description: Get single coupon details with `id` in path param
    * @param {Object} arg - arg object.
    * @param {string} arg.id - 
    
    **/
  getCouponById({ id } = {}) {
    const { error } = CartValidator.getCouponById().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update existing coupon configuration
   * @description: Update coupon with id sent in `id`
   * @param {Object} arg - arg object.
   * @param {string} arg.id -
   * @param {CouponUpdate} arg.body
   **/
  updateCoupon({ id, body } = {}) {
    const { error } = CartValidator.updateCoupon().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      queryObj,
      body
    );
  }

  /**
   *
   * @summary: Update coupon archive state and schedule
   * @description: Update archive/unarchive and change schedule for coupon
   * @param {Object} arg - arg object.
   * @param {string} arg.id -
   * @param {CouponPartialUpdate} arg.body
   **/
  updateCouponPartially({ id, body } = {}) {
    const { error } = CartValidator.updateCouponPartially().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/cart/v1.0/company/${this.config.companyId}/application/${this.applicationId}/coupon/${id}`,
      queryObj,
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
    *
    * @summary: List of giveaways of the current application.
    * @description: List of giveaways of the current application.
    * @param {Object} arg - arg object.
    * @param {string} [arg.pageId] - pagination page id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
  getGiveaways({ pageId, pageSize } = {}) {
    const { error } = RewardsValidator.getGiveaways().validate(
      {
        pageId,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_id"] = pageId;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: List of giveaways of the current application.
    * @description: List of giveaways of the current application.
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - company id
    * @param {string} arg.applicationId - application id
    * @param {number} [arg.pageSize] - pagination page size
    
    **/
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
   *
   * @summary: Adds a new giveaway.
   * @description: Adds a new giveaway.
   * @param {Object} arg - arg object.
   * @param {Giveaway} arg.body
   **/
  createGiveaway({ body } = {}) {
    const { error } = RewardsValidator.createGiveaway().validate(
      {
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get giveaway by ID.
    * @description: Get giveaway by ID.
    * @param {Object} arg - arg object.
    * @param {string} arg.id - Giveaway ID
    
    **/
  getGiveawayByID({ id } = {}) {
    const { error } = RewardsValidator.getGiveawayByID().validate(
      {
        id,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/${id}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Updates the giveaway by it's ID.
   * @description: Updates the giveaway by it's ID.
   * @param {Object} arg - arg object.
   * @param {string} arg.id - Giveaway ID
   * @param {Giveaway} arg.body
   **/
  updateGiveaway({ id, body } = {}) {
    const { error } = RewardsValidator.updateGiveaway().validate(
      {
        id,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/giveaways/${id}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: List of offer of the current application.
    * @description: List of offer of the current application.
    * @param {Object} arg - arg object.
    
    **/
  getOffers({} = {}) {
    const { error } = RewardsValidator.getOffers().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/offers/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get offer by name.
    * @description: Get offer by name.
    * @param {Object} arg - arg object.
    * @param {string} arg.cookie - User's session cookie. This cookie is set in browser cookie when logged-in to fynd's authentication system i.e. `Grimlock` or by using grimlock-backend SDK for backend implementation.
    * @param {string} arg.name - Offer name
    
    **/
  getOfferByName({ cookie, name } = {}) {
    const { error } = RewardsValidator.getOfferByName().validate(
      {
        cookie,
        name,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/offers/${name}/`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Updates the offer by name.
   * @description: Updates the offer by name.
   * @param {Object} arg - arg object.
   * @param {string} arg.name - Offer name
   * @param {Offer} arg.body
   **/
  updateOfferByName({ name, body } = {}) {
    const { error } = RewardsValidator.updateOfferByName().validate(
      {
        name,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/offers/${name}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: User's reward details.
    * @description: User's reward details.
    * @param {Object} arg - arg object.
    * @param {string} arg.userId - user id
    
    **/
  getUserAvailablePoints({ userId } = {}) {
    const { error } = RewardsValidator.getUserAvailablePoints().validate(
      {
        userId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/users/${userId}`,
      queryObj,
      undefined
    );
  }

  /**
   *
   * @summary: Update User status
   * @description: Update user status, active/archive
   * @param {Object} arg - arg object.
   * @param {string} arg.userId - user id
   * @param {AppUser} arg.body
   **/
  updateUserStatus({ userId, body } = {}) {
    const { error } = RewardsValidator.updateUserStatus().validate(
      {
        userId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/users/${userId}/`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Get list of points transactions.
    * @description: Get list of points transactions.
The list of points history is paginated.
    * @param {Object} arg - arg object.
    * @param {string} arg.userId - user id
    * @param {string} [arg.pageId] - PageID is the ID of the requested page. For first request it should be kept empty.
    * @param {number} [arg.pageLimit] - PageLimit is the number of requested items in response.
    * @param {number} [arg.pageSize] - PageSize is the number of requested items in response.
    
    **/
  getUserPointsHistory({ userId, pageId, pageLimit, pageSize } = {}) {
    const { error } = RewardsValidator.getUserPointsHistory().validate(
      {
        userId,
        pageId,
        pageLimit,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_id"] = pageId;
    queryObj["page_limit"] = pageLimit;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/rewards/v1.0/company/${this.config.companyId}/application/${this.applicationId}/users/${userId}/points/history/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get list of points transactions.
    * @description: Get list of points transactions.
The list of points history is paginated.
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - company id
    * @param {string} arg.applicationId - application id
    * @param {string} arg.userId - user id
    * @param {number} [arg.pageSize] - PageSize is the number of requested items in response.
    
    **/
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
    *
    * @summary: Get statistics groups
    * @description: Get statistics groups
    * @param {Object} arg - arg object.
    
    **/
  getStatiscticsGroups({} = {}) {
    const { error } = AnalyticsValidator.getStatiscticsGroups().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/group`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get statistics group components
    * @description: Get statistics group components
    * @param {Object} arg - arg object.
    * @param {string} arg.groupName - Group name
    
    **/
  getStatiscticsGroupComponents({ groupName } = {}) {
    const {
      error,
    } = AnalyticsValidator.getStatiscticsGroupComponents().validate(
      {
        groupName,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/group/${groupName}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get component statistics csv
    * @description: Get component statistics csv
    * @param {Object} arg - arg object.
    * @param {string} arg.componentName - Component name
    
    **/
  getComponentStatsCSV({ componentName } = {}) {
    const { error } = AnalyticsValidator.getComponentStatsCSV().validate(
      {
        componentName,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/component/{component_name}.csv`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get component statistics pdf
    * @description: Get component statistics pdf
    * @param {Object} arg - arg object.
    * @param {string} arg.componentName - Component name
    
    **/
  getComponentStatsPDF({ componentName } = {}) {
    const { error } = AnalyticsValidator.getComponentStatsPDF().validate(
      {
        componentName,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/component/{component_name}.pdf`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get component statistics
    * @description: Get component statistics
    * @param {Object} arg - arg object.
    * @param {string} arg.componentName - Component name
    
    **/
  getComponentStats({ componentName } = {}) {
    const { error } = AnalyticsValidator.getComponentStats().validate(
      {
        componentName,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stats/component/${componentName}`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get abandon carts list
    * @description: Get abandon carts list
    * @param {Object} arg - arg object.
    * @param {string} arg.fromDate - From date
    * @param {string} arg.toDate - To date
    * @param {number} [arg.pageNo] - Current page number
    * @param {number} [arg.pageSize] - Current page size
    
    **/
  getAbandonCartList({ fromDate, toDate, pageNo, pageSize } = {}) {
    const { error } = AnalyticsValidator.getAbandonCartList().validate(
      {
        fromDate,
        toDate,
        pageNo,
        pageSize,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};
    queryObj["page_no"] = pageNo;
    queryObj["page_size"] = pageSize;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/from/${fromDate}/to/${toDate}/abandon-cart/`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get abandon carts list
    * @description: Get abandon carts list
    * @param {Object} arg - arg object.
    * @param {string} arg.companyId - Company Id
    * @param {string} arg.applicationId - Application Id
    * @param {string} arg.fromDate - From date
    * @param {string} arg.toDate - To date
    * @param {number} [arg.pageSize] - Current page size
    
    **/
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
    *
    * @summary: Get abandon carts csv
    * @description: Get abandon carts csv
    * @param {Object} arg - arg object.
    * @param {string} arg.fromDate - From date
    * @param {string} arg.toDate - To date
    
    **/
  getAbandonCartsCSV({ fromDate, toDate } = {}) {
    const { error } = AnalyticsValidator.getAbandonCartsCSV().validate(
      {
        fromDate,
        toDate,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/${fromDate}/to/${toDate}/abandon-cart.csv`,
      queryObj,
      undefined
    );
  }

  /**
    *
    * @summary: Get abandon carts details
    * @description: Get abandon cart details
    * @param {Object} arg - arg object.
    * @param {string} arg.cartId - Cart Id
    
    **/
  getAbandonCartDetail({ cartId } = {}) {
    const { error } = AnalyticsValidator.getAbandonCartDetail().validate(
      {
        cartId,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/analytics/v1.0/company/${this.config.companyId}/application/${this.applicationId}/cart/abandon-cart/${cartId}`,
      queryObj,
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
   *
   * @summary: Add proxy path for external url
   * @description: Add proxy path for external url
   * @param {Object} arg - arg object.
   * @param {string} arg.extensionId - Extension id
   * @param {AddProxyReq} arg.body
   **/
  addProxyPath({ extensionId, body } = {}) {
    const { error } = PartnerValidator.addProxyPath().validate(
      {
        extensionId,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/application/${this.applicationId}/proxy/${extensionId}`,
      queryObj,
      body
    );
  }

  /**
    *
    * @summary: Remove proxy path for external url
    * @description: Remove proxy path for external url
    * @param {Object} arg - arg object.
    * @param {string} arg.extensionId - Extension id
    * @param {string} arg.attachedPath - Attachaed path slug
    
    **/
  removeProxyPath({ extensionId, attachedPath } = {}) {
    const { error } = PartnerValidator.removeProxyPath().validate(
      {
        extensionId,
        attachedPath,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(error);
    }

    const queryObj = {};

    return PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/partners/v1.0/company/${this.config.companyId}/application/${this.applicationId}/proxy/${extensionId}/${attachedPath}`,
      queryObj,
      undefined
    );
  }
}

module.exports = PlatformApplicationClient;
