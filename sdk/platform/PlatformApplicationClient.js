const {
  LeadValidator,
  FeedbackValidator,
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
        
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
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
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */

/**
        @typedef EditCustomFormPayload
        
        
        @property { string } title
        
        @property { Array<Object> } inputs
        
        @property { string } [description]
        
        @property { string } [headerImage]
        
        @property { boolean } [shouldNotify]
        
        @property { boolean } [loginRequired]
        
        @property { string } [successMessage]
        
        @property { PollForAssignment } [pollForAssignment]
        
         
    */

/**
        @typedef EditTicketPayload
        
        
        @property { TicketContent } [content]
        
        @property { string } [category]
        
        @property { string } [source]
        
        @property { string } [status]
        
        @property { string } [priority]
        
        @property { AgentChangePayload } [assignedTo]
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef AgentChangePayload
        
        
        @property { string } agentId
        
         
    */

/**
        @typedef CreateVideoRoomResponse
        
        
        @property { string } uniqueName
        
         
    */

/**
        @typedef CloseVideoRoomResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef CreateVideoRoomPayload
        
        
        @property { string } uniqueName
        
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
        
        
        @property { string } accessToken
        
         
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
        @typedef UserSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { Array<PhoneNumber> } [phoneNumbers]
        
        @property { Array<Email> } [emails]
        
        @property { string } [gender]
        
        @property { boolean } [active]
        
        @property { string } [profilePicUrl]
        
        @property { string } [username]
        
        @property { string } [accountType]
        
        @property { string } [uid]
        
        @property { Debug } [debug]
        
        @property { boolean } [hasOldPasswordHash]
        
        @property { string } [id]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef PhoneNumber
        
        
        @property { boolean } [active]
        
        @property { boolean } [primary]
        
        @property { boolean } [verified]
        
        @property { string } [phone]
        
        @property { number } [countryCode]
        
         
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
        
        
        @property { string } [applicationId]
        
        @property { string } companyId
        
         
    */

/**
        @typedef CreatedOn
        
        
        @property { string } userAgent
        
         
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
        
        
        @property { string } status
        
        @property { string } priority
        
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
        
         
    */

/**
        @typedef SubmitButton
        
        
        @property { string } title
        
        @property { string } titleColor
        
        @property { string } backgroundColor
        
         
    */

/**
        @typedef PollForAssignment
        
        
        @property { number } duration
        
        @property { string } message
        
        @property { string } successMessage
        
        @property { string } failureMessage
        
         
    */

/**
        @typedef CustomForm
        
        
        @property { string } applicationId
        
        @property { string } slug
        
        @property { string } [headerImage]
        
        @property { string } title
        
        @property { string } [description]
        
        @property { boolean } loginRequired
        
        @property { boolean } shouldNotify
        
        @property { string } [successMessage]
        
        @property { SubmitButton } [submitButton]
        
        @property { Array<Object> } inputs
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { PollForAssignment } [pollForAssignment]
        
        @property { string } id
        
         
    */

/**
        @typedef TicketHistory
        
        
        @property { string } type
        
        @property { Object } value
        
        @property { string } ticketId
        
        @property { CreatedOn } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { string } id
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef Ticket
        
        
        @property { TicketContext } [context]
        
        @property { CreatedOn } [createdOn]
        
        @property { string } [responseId]
        
        @property { TicketContent } [content]
        
        @property { string } ticketId
        
        @property { TicketCategory } category
        
        @property { string } source
        
        @property { Status } status
        
        @property { Priority } priority
        
        @property { Object } [createdBy]
        
        @property { Object } [assignedTo]
        
        @property { Array<string> } [tags]
        
        @property { Object } [customJson]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef Activity
        
        
        @property { Object } [currentState]
        
        @property { string } [documentId]
        
        @property { Object } [previousState]
        
         
    */

/**
        @typedef ActivityDump
        
        
        @property { Activity } [activity]
        
        @property { CreatedBy } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */

/**
        @typedef AddMediaListRequest
        
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { Array<AddMediaRequest> } [mediaList]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
         
    */

/**
        @typedef AddMediaRequest
        
        
        @property { string } [cloudId]
        
        @property { string } [cloudName]
        
        @property { string } [cloudProvider]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { string } [mediaUrl]
        
        @property { string } [refId]
        
        @property { string } [refType]
        
        @property { Array<string> } [tags]
        
        @property { string } [thumbnailUrl]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ApproveRequest
        
        
        @property { boolean } [approve]
        
        @property { string } [entityType]
        
        @property { string } id
        
        @property { string } [reason]
        
         
    */

/**
        @typedef Attribute
        
        
        @property { DateMeta } [dateMeta]
        
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
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef DeviceMeta
        
        
        @property { string } [appVersion]
        
        @property { string } [platform]
        
         
    */

/**
        @typedef Entity
        
        
        @property { string } [id]
        
        @property { string } [type]
        
         
    */

/**
        @typedef EntityRequest
        
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
         
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
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
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
        
        
        @property { number } [maxCount]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */

/**
        @typedef MediaMetaRequest
        
        
        @property { number } maxCount
        
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
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [itemTotal]
        
        @property { string } [nextId]
        
        @property { number } size
        
        @property { string } type
        
         
    */

/**
        @typedef PageNumber
        
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { number } [size]
        
        @property { string } [type]
        
         
    */

/**
        @typedef Rating
        
        
        @property { Array<Attribute> } [attributes]
        
        @property { Array<string> } [attributesSlugs]
        
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
        
        @property { string } entityId
        
        @property { string } entityType
        
         
    */

/**
        @typedef Review
        
        
        @property { string } [description]
        
        @property { string } [header]
        
        @property { MediaMeta } [imageMeta]
        
        @property { string } [title]
        
        @property { MediaMeta } [videoMeta]
        
        @property { boolean } [voteAllowed]
        
         
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
        
        @property { MediaMetaRequest } imageMeta
        
        @property { boolean } isVoteAllowed
        
        @property { string } title
        
        @property { MediaMetaRequest } videoMeta
        
         
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
        
        
        @property { DateMeta } [dateMeta]
        
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
        
        @property { string } [enableMediaType]
        
        @property { boolean } [enableQna]
        
        @property { boolean } enableRating
        
        @property { boolean } enableReview
        
        @property { EntityRequest } entity
        
        @property { RatingRequest } rating
        
        @property { ReviewRequest } review
        
         
    */

/**
        @typedef TemplateRequestList
        
        
        @property { Array<TemplateRequest> } templateList
        
         
    */

/**
        @typedef UI
        
        
        @property { Array<string> } [feedbackQuestion]
        
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
        
        @property { Array<AttributeObject> } [attributesRating]
        
        @property { string } [description]
        
        @property { DeviceMeta } [deviceMeta]
        
        @property { string } [entityId]
        
        @property { string } [entityType]
        
        @property { Array<MediaMeta> } [mediaResource]
        
        @property { number } [rating]
        
        @property { string } [reviewId]
        
        @property { string } [templateId]
        
        @property { string } [title]
        
         
    */

/**
        @typedef UpdateTemplateRequest
        
        
        @property { boolean } active
        
        @property { string } [enableMediaType]
        
        @property { boolean } [enableQna]
        
        @property { boolean } enableRating
        
        @property { boolean } enableReview
        
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
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
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
        
        
        @property { string } [themeId]
        
         
    */

/**
        @typedef UpgradableThemeSchema
        
        
        @property { string } [parentTheme]
        
        @property { string } [appliedTheme]
        
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
        
        @property { string } [lastModified]
        
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
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [version]
        
        @property { string } [parentThemeVersion]
        
        @property { string } [parentTheme]
        
        @property { Information } [information]
        
        @property { Array<string> } [tags]
        
        @property { Src } [src]
        
        @property { AssetsSchema } [assets]
        
        @property { AvailablePages } [availablePages]
        
        @property { Array<availableSectionSchema> } [availableSections]
        
        @property { Array<sectionSchema> } [sections]
        
        @property { Object } [constants]
        
        @property { Object } [styles]
        
        @property { Config } [config]
        
        @property { Object } [settings]
        
        @property { Font } [font]
        
        @property { string } [id]
        
        @property { number } [v]
        
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
        
        
        @property { string } [pageKey]
        
        @property { PageSections } [pageSections]
        
         
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
        
        
        @property { UmdJs } [umdJs]
        
        @property { CommonJs } [commonJs]
        
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
        
        @property { GlobalSchema } [globalSchema]
        
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
        
        
        @property { string } [bgColor]
        
        @property { string } [primaryColor]
        
        @property { string } [secondaryColor]
        
        @property { string } [accentColor]
        
        @property { string } [linkColor]
        
        @property { string } [buttonSecondaryColor]
        
         
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
        
        @property { SemiBold } [semiBold]
        
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
        
        @property { string } [exactUrl]
        
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
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
        @property { boolean } [primary]
        
         
    */

/**
        @typedef EditMobileRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef EditProfileRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [mobile]
        
        @property { string } [email]
        
        @property { string } [gender]
        
        @property { string } [dob]
        
        @property { string } [profilePicUrl]
        
        @property { string } [androidHash]
        
        @property { string } [sender]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef SendEmailOtpRequestSchema
        
        
        @property { string } [email]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [registerToken]
        
         
    */

/**
        @typedef VerifyOtpRequestSchema
        
        
        @property { string } [requestId]
        
        @property { string } [registerToken]
        
        @property { string } [otp]
        
         
    */

/**
        @typedef SendMobileOtpRequestSchema
        
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
        @property { string } [action]
        
        @property { string } [token]
        
        @property { string } [androidHash]
        
        @property { string } [force]
        
         
    */

/**
        @typedef UpdatePasswordRequestSchema
        
        
        @property { string } [oldPassword]
        
        @property { string } [newPassword]
        
         
    */

/**
        @typedef FormRegisterRequestSchema
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [password]
        
        @property { FormRegisterRequestSchemaPhone } [phone]
        
        @property { string } [registerToken]
        
         
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
        
        @property { string } [captchaCode]
        
         
    */

/**
        @typedef PasswordLoginRequestSchema
        
        
        @property { string } [captchaCode]
        
        @property { string } [password]
        
        @property { string } [username]
        
         
    */

/**
        @typedef SendOtpRequestSchema
        
        
        @property { string } [countryCode]
        
        @property { string } [captchaCode]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchema
        
        
        @property { boolean } [isSignedIn]
        
        @property { OAuthRequestSchemaOauth2 } [oauth2]
        
        @property { OAuthRequestSchemaProfile } [profile]
        
         
    */

/**
        @typedef AuthSuccess
        
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
        @property { AuthSuccessUser } [user]
        
         
    */

/**
        @typedef SendOtpResponse
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef LoginSuccess
        
        
        @property { UserSchema } [user]
        
         
    */

/**
        @typedef VerifyOtpSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [userExists]
        
         
    */

/**
        @typedef ResetPasswordSuccess
        
        
        @property { string } [status]
        
         
    */

/**
        @typedef RegisterFormSuccess
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
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
        
        
        @property { number } [resendTimer]
        
        @property { string } [resendToken]
        
        @property { boolean } [success]
        
        @property { string } [requestId]
        
        @property { string } [message]
        
        @property { string } [mobile]
        
        @property { string } [countryCode]
        
         
    */

/**
        @typedef EmailOtpSuccess
        
        
        @property { string } [resendToken]
        
         
    */

/**
        @typedef SessionListSuccess
        
        
        @property { Array<string> } [sessions]
        
         
    */

/**
        @typedef VerifyMobileOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyMobileLink]
        
         
    */

/**
        @typedef VerifyEmailOTPSuccess
        
        
        @property { UserSchema } [user]
        
        @property { boolean } [verifyEmailLink]
        
         
    */

/**
        @typedef SendMobileVerifyLinkSuccess
        
        
        @property { boolean } [verifyMobileLink]
        
         
    */

/**
        @typedef SendEmailVerifyLinkSuccess
        
        
        @property { boolean } [verifyEmailLink]
        
         
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
        
        @property { boolean } [verifyEmailOtp]
        
        @property { boolean } [verifyEmailLink]
        
        @property { boolean } [verifyMobileOtp]
        
        @property { string } [user]
        
        @property { string } [registerToken]
        
        @property { boolean } [userExists]
        
         
    */

/**
        @typedef FormRegisterRequestSchemaPhone
        
        
        @property { string } [countryCode]
        
        @property { string } [mobile]
        
         
    */

/**
        @typedef OAuthRequestSchemaOauth2
        
        
        @property { string } [accessToken]
        
        @property { number } [expiry]
        
        @property { string } [refreshToken]
        
         
    */

/**
        @typedef OAuthRequestSchemaProfile
        
        
        @property { string } [lastName]
        
        @property { string } [image]
        
        @property { string } [id]
        
        @property { string } [email]
        
        @property { string } [fullName]
        
        @property { string } [firstName]
        
         
    */

/**
        @typedef AuthSuccessUser
        
        
        @property { string } [firstName]
        
        @property { string } [lastName]
        
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
        
        @property { LookAndFeel } [lookAndFeel]
        
        @property { string } [updatedAt]
        
        @property { boolean } [active]
        
        @property { boolean } [forgotPassword]
        
        @property { Login } [login]
        
        @property { boolean } [skipCaptcha]
        
        @property { string } [name]
        
        @property { MetaSchema } [meta]
        
        @property { string } [id]
        
        @property { Social } [social]
        
        @property { RequiredFields } [requiredFields]
        
        @property { RegisterRequiredFields } [registerRequiredFields]
        
        @property { boolean } [skipLogin]
        
        @property { FlashCard } [flashCard]
        
        @property { string } [subtext]
        
        @property { SocialTokens } [socialTokens]
        
        @property { string } [createdAt]
        
        @property { boolean } [register]
        
        @property { string } [mobileImage]
        
        @property { string } [desktopImage]
        
         
    */

/**
        @typedef LookAndFeel
        
        
        @property { string } [cardPosition]
        
        @property { string } [backgroundColor]
        
         
    */

/**
        @typedef Login
        
        
        @property { boolean } [password]
        
        @property { boolean } [otp]
        
         
    */

/**
        @typedef MetaSchema
        
        
        @property { boolean } [fyndDefault]
        
         
    */

/**
        @typedef Social
        
        
        @property { boolean } [accountKit]
        
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
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFields
        
        
        @property { RegisterRequiredFieldsEmail } [email]
        
        @property { RegisterRequiredFieldsMobile } [mobile]
        
         
    */

/**
        @typedef RegisterRequiredFieldsEmail
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */

/**
        @typedef RegisterRequiredFieldsMobile
        
        
        @property { boolean } [isRequired]
        
        @property { string } [level]
        
         
    */

/**
        @typedef FlashCard
        
        
        @property { string } [text]
        
        @property { string } [textColor]
        
        @property { string } [backgroundColor]
        
         
    */

/**
        @typedef SocialTokens
        
        
        @property { Facebook } [facebook]
        
        @property { Accountkit } [accountKit]
        
        @property { Google } [google]
        
         
    */

/**
        @typedef Facebook
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef Accountkit
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef Google
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef ApplicationLegal
        
        
        @property { string } [application]
        
        @property { string } [tnc]
        
        @property { string } [policy]
        
        @property { string } [shipping]
        
        @property { Array<ApplicationLegalFAQ> } [faq]
        
        @property { string } [id]
        
        @property { string } [updatedAt]
        
        @property { string } [createdAt]
        
         
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
        
        @property { string } [id]
        
        @property { string } [robotsTxt]
        
        @property { boolean } [sitemapEnabled]
        
        @property { Array<Object> } [customMetaTags]
        
        @property { Object } [details]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef CustomMetaTag
        
        
        @property { string } [name]
        
        @property { string } [content]
        
        @property { string } [id]
        
         
    */

/**
        @typedef Detail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */

/**
        @typedef StorefrontAnnouncement
        
        
        @property { AnnouncementSchema } [announcements]
        
        @property { number } [refreshRate]
        
        @property { Array<string> } [refreshPages]
        
         
    */

/**
        @typedef AnnouncementPageSchema
        
        
        @property { string } [pageSlug]
        
        @property { string } [type]
        
         
    */

/**
        @typedef EditorMeta
        
        
        @property { string } [foregroundColor]
        
        @property { string } [backgroundColor]
        
        @property { string } [contentType]
        
        @property { string } [content]
        
         
    */

/**
        @typedef AnnouncementAuthorSchema
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
         
    */

/**
        @typedef AdminAnnouncementSchema
        
        
        @property { string } [id]
        
        @property { Array<string> } [platforms]
        
        @property { string } [title]
        
        @property { string } [announcement]
        
        @property { Array<AnnouncementPageSchema> } [pages]
        
        @property { EditorMeta } [editorMeta]
        
        @property { AnnouncementAuthorSchema } [author]
        
        @property { string } [createdAt]
        
        @property { string } [app]
        
        @property { string } [modifiedAt]
        
        @property { ScheduleSchema } [schedule]
        
         
    */

/**
        @typedef ScheduleSchema
        
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { Array<Object> } [nextSchedule]
        
         
    */

/**
        @typedef NextSchedule
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef AnnouncementSchema
        
        
        @property { Array<Object> } [pageSlug]
        
         
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
        
        
        @property { string } [aspectRatio]
        
        @property { string } [id]
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef Author
        
        
        @property { string } [designation]
        
        @property { string } [id]
        
        @property { string } [name]
        
         
    */

/**
        @typedef BlogSchema
        
        
        @property { string } [id]
        
        @property { Object } [customJson]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [schedule]
        
        @property { string } [title]
        
        @property { DateMeta } [dateMeta]
        
         
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
        
        @property { Object } [customJson]
        
        @property { Object } [author]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
        @property { string } [slug]
        
        @property { Array<string> } [tags]
        
        @property { string } [title]
        
        @property { SEO } [seo]
        
        @property { CronSchedule } [schedule]
        
         
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
        
        @property { CreatedBySchema } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [position]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { NavigationReference } [navigation]
        
         
    */

/**
        @typedef LocaleLanguage
        
        
        @property { Language } [hi]
        
        @property { Language } [ar]
        
        @property { Language } [enUs]
        
         
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
        
        @property { LocaleLanguage } [localeLanguage]
        
        @property { string } [image]
        
        @property { string } [type]
        
        @property { Action } [action]
        
        @property { boolean } [active]
        
        @property { string } [display]
        
        @property { number } [sortOrder]
        
        @property { NavigationReference } [subNavigation]
        
         
    */

/**
        @typedef LandingPage
        
        
        @property { LandingPageSchema } [data]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef ConfigurationSchema
        
        
        @property { number } [sleepTime]
        
        @property { boolean } [startOnLaunch]
        
        @property { number } [duration]
        
        @property { string } [slideDirection]
        
         
    */

/**
        @typedef SlideshowMedia
        
        
        @property { string } [type]
        
        @property { string } [url]
        
        @property { string } [bgColor]
        
        @property { number } [duration]
        
        @property { boolean } [autoDecideDuration]
        
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
        
        @property { number } [refreshRate]
        
        @property { Array<string> } [refreshPages]
        
         
    */

/**
        @typedef AnnouncementDataSchema
        
        
        @property { string } [pageSlug]
        
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
        
        @property { string } [subType]
        
        @property { string } [content]
        
         
    */

/**
        @typedef RemoveHandpickedSchema
        
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef CreateTagSchema
        
        
        @property { string } [name]
        
        @property { string } [subType]
        
        @property { string } [id]
        
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
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef CategorySchema
        
        
        @property { number } [index]
        
        @property { string } [id]
        
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
        
        @property { string } [id]
        
         
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
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [iconUrl]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef FaqSchema
        
        
        @property { string } [slug]
        
        @property { string } [application]
        
        @property { string } [id]
        
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
        
        @property { CreatedBySchema } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { Object } [customJson]
        
         
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
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { boolean } [archived]
        
        @property { string } [name]
        
        @property { string } [slug]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBySchema } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
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
        
        
        @property { string } [id]
        
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
        
        @property { CreatedBySchema } [createdBy]
        
        @property { DateMeta } [dateMeta]
        
        @property { ScheduleSchema } [schedule]
        
         
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
        
        
        @property { string } [id]
        
        @property { string } [title]
        
        @property { string } [slug]
        
        @property { string } [readingTime]
        
        @property { string } [application]
        
        @property { string } [description]
        
        @property { FeatureImage } [featureImage]
        
        @property { boolean } [published]
        
        @property { boolean } [archived]
        
        @property { Array<string> } [tags]
        
        @property { ContentSchema } [content]
        
        @property { Author } [author]
        
        @property { ScheduleSchema } [schedule]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef FeatureImage
        
        
        @property { string } [secureUrl]
        
         
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
        
        
        @property { string } [pageType]
        
        @property { string } [displayName]
        
        @property { Array<PageSpecParam> } [params]
        
        @property { Array<PageSpecParam> } [query]
        
         
    */

/**
        @typedef PageSchema
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { Array<string> } [componentIds]
        
        @property { Array<PageContent> } [content]
        
        @property { Object } [createdBy]
        
        @property { Object } [dateMeta]
        
        @property { string } [description]
        
        @property { Object } [featureImage]
        
        @property { Array<PageMeta> } [pageMeta]
        
        @property { ScheduleSchema } [schedule]
        
        @property { Object } [customJson]
        
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
        
        
        @property { CronSchedule } [schedule]
        
        @property { string } [application]
        
        @property { Object } [author]
        
        @property { Object } [customJson]
        
        @property { string } [orientation]
        
        @property { Array<ResourceContent> } [content]
        
        @property { Object } [featureImage]
        
        @property { boolean } [published]
        
        @property { string } [readingTime]
        
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
        
        
        @property { Array<Object> } [systemPages]
        
        @property { Array<Object> } [customPages]
        
        @property { string } [applicationId]
        
         
    */

/**
        @typedef SlideshowGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef SlideshowSchema
        
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Array<SlideshowMedia> } [media]
        
        @property { boolean } [active]
        
        @property { boolean } [archived]
        
        @property { Object } [customJson]
        
         
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
        
        @property { string } [id]
        
        @property { string } [configType]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
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
        
        @property { string } [id]
        
        @property { Array<TagSchema> } [tags]
        
         
    */

/**
        @typedef TagSchema
        
        
        @property { string } [name]
        
        @property { string } [url]
        
        @property { string } [type]
        
        @property { string } [subType]
        
        @property { string } [id]
        
        @property { string } [position]
        
        @property { Object } [attributes]
        
        @property { string } [content]
        
         
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
        
        @property { number } [intervalCount]
        
         
    */

/**
        @typedef Plan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
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
        
        @property { string } [displayText]
        
         
    */

/**
        @typedef DetailedPlan
        
        
        @property { PlanRecurring } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { Array<DetailedPlanComponents> } [components]
        
         
    */

/**
        @typedef InvoiceDetailsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef InvoiceDetailsClient
        
        
        @property { Array<string> } [addressLines]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef InvoiceDetailsStatusTrail
        
        
        @property { string } [id]
        
        @property { string } [value]
        
        @property { string } [timestamp]
        
         
    */

/**
        @typedef InvoiceDetailsPaymentMethodsDataChecks
        
        
        @property { string } [cvcCheck]
        
        @property { string } [addressLine1Check]
        
        @property { string } [addressPostalCodeCheck]
        
         
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
        
        @property { number } [expYear]
        
        @property { InvoiceDetailsPaymentMethodsDataNetworks } [networks]
        
        @property { number } [expMonth]
        
        @property { string } [fingerprint]
        
        @property { string } [generatedFrom]
        
        @property { InvoiceDetailsPaymentMethodsDataThreeDSecureUsage } [threeDSecureUsage]
        
         
    */

/**
        @typedef InvoiceDetailsPaymentMethods
        
        
        @property { number } [id]
        
        @property { string } [type]
        
        @property { string } [pgPaymentMethodId]
        
        @property { InvoiceDetailsPaymentMethodsData } [data]
        
        @property { boolean } [isDefault]
        
         
    */

/**
        @typedef InvoicePaymentMethod
        
        
        @property { string } [pgPaymentMethodId]
        
         
    */

/**
        @typedef InvoiceDetails
        
        
        @property { InvoiceDetailsPeriod } [period]
        
        @property { InvoiceDetailsClient } [client]
        
        @property { boolean } [autoAdvance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [id]
        
        @property { string } [collectionMethod]
        
        @property { string } [subscriberId]
        
        @property { string } [invoiceUrl]
        
        @property { string } [number]
        
        @property { Object } [pgData]
        
        @property { string } [receiptNumber]
        
        @property { string } [statementDescriptor]
        
        @property { string } [currentStatus]
        
        @property { Array<InvoiceDetailsStatusTrail> } [statusTrail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [nextActionTime]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { string } [hashIdentifier]
        
        @property { InvoicePaymentMethod } [paymentMethod]
        
         
    */

/**
        @typedef InvoiceItemsPlanRecurring
        
        
        @property { string } [interval]
        
        @property { number } [intervalCount]
        
         
    */

/**
        @typedef InvoiceItemsPlan
        
        
        @property { InvoiceItemsPlanRecurring } [recurring]
        
        @property { boolean } [isTrialPlan]
        
        @property { string } [planGroup]
        
        @property { Array<string> } [tagLines]
        
        @property { string } [currency]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isVisible]
        
        @property { number } [trialPeriod]
        
        @property { Array<string> } [addons]
        
        @property { Array<string> } [tags]
        
        @property { string } [type]
        
        @property { string } [country]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { number } [amount]
        
        @property { string } [productSuiteId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
    */

/**
        @typedef InvoiceItemsPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef InvoiceItems
        
        
        @property { string } [id]
        
        @property { string } [currency]
        
        @property { InvoiceItemsPlan } [plan]
        
        @property { string } [name]
        
        @property { number } [quantity]
        
        @property { string } [description]
        
        @property { InvoiceItemsPeriod } [period]
        
        @property { number } [unitAmount]
        
        @property { number } [amount]
        
        @property { string } [type]
        
        @property { string } [invoiceId]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
         
    */

/**
        @typedef Invoice
        
        
        @property { InvoiceDetails } [invoice]
        
        @property { Array<InvoiceItems> } [invoiceItems]
        
         
    */

/**
        @typedef InvoicesDataClient
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { Array<string> } [addressLines]
        
         
    */

/**
        @typedef InvoicesDataPeriod
        
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef InvoicesDataPaymentMethod
        
        
        @property { string } [pgPaymentMethodId]
        
         
    */

/**
        @typedef InvoicesData
        
        
        @property { string } [id]
        
        @property { InvoicesDataClient } [client]
        
        @property { boolean } [autoAdvance]
        
        @property { string } [currency]
        
        @property { boolean } [paid]
        
        @property { number } [attemp]
        
        @property { string } [collectionMethod]
        
        @property { string } [subscriberId]
        
        @property { string } [invoiceUrl]
        
        @property { string } [number]
        
        @property { Object } [pgData]
        
        @property { InvoicesDataPeriod } [period]
        
        @property { string } [receiptNumber]
        
        @property { string } [statementDescriptor]
        
        @property { string } [currentStatus]
        
        @property { Array<InvoiceDetailsStatusTrail> } [statusTrail]
        
        @property { number } [subtotal]
        
        @property { number } [total]
        
        @property { string } [subscription]
        
        @property { string } [nextActionTime]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { string } [hashIdentifier]
        
        @property { InvoicesDataPaymentMethod } [paymentMethod]
        
        @property { Array<InvoiceItems> } [invoiceItems]
        
         
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
        
        
        @property { string } [phoneNumber]
        
        @property { string } [phoneCountryCode]
        
         
    */

/**
        @typedef SubscriptionBillingAddress
        
        
        @property { string } [country]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [line1]
        
        @property { string } [line2]
        
        @property { string } [postalCode]
        
         
    */

/**
        @typedef SubscriptionCustomer
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billingAddress]
        
        @property { string } [id]
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef SubscriptionCustomerCreate
        
        
        @property { Phone } [phone]
        
        @property { SubscriptionBillingAddress } [billingAddress]
        
        @property { string } [uniqueId]
        
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
        
        @property { string } [resumeAt]
        
         
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
        
        
        @property { SubscriptionCurrentPeriod } [currentPeriod]
        
        @property { SubscriptionPauseCollection } [pauseCollection]
        
        @property { SubscriptionTrial } [trial]
        
        @property { SubscriptionInvoiceSettings } [invoiceSettings]
        
        @property { boolean } [isActive]
        
        @property { boolean } [cancelAtPeriodEnd]
        
        @property { string } [id]
        
        @property { string } [subscriberId]
        
        @property { string } [planId]
        
        @property { string } [productSuiteId]
        
        @property { Plan } [planData]
        
        @property { string } [currentStatus]
        
        @property { string } [collectionMethod]
        
        @property { string } [createdAt]
        
        @property { string } [modifiedAt]
        
        @property { string } [latestInvoice]
        
         
    */

/**
        @typedef SubscriptionStatus
        
        
        @property { boolean } [isEnabled]
        
        @property { Subscription } [subscription]
        
         
    */

/**
        @typedef SubscriptionLimitApplication
        
        
        @property { boolean } [enabled]
        
        @property { number } [hardLimit]
        
        @property { number } [softLimit]
        
         
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
        
        @property { SubscriptionLimitOtherPlatform } [otherPlatform]
        
        @property { SubscriptionLimitTeam } [team]
        
        @property { SubscriptionLimitProducts } [products]
        
        @property { SubscriptionLimitExtensions } [extensions]
        
        @property { SubscriptionLimitIntegrations } [integrations]
        
        @property { boolean } [isTrialPlan]
        
         
    */

/**
        @typedef SubscriptionActivateReq
        
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [productSuite]
        
        @property { string } [planId]
        
        @property { string } [paymentMethod]
        
         
    */

/**
        @typedef SubscriptionActivateRes
        
        
        @property { boolean } [success]
        
        @property { Subscription } [data]
        
         
    */

/**
        @typedef CancelSubscriptionReq
        
        
        @property { string } [uniqueId]
        
        @property { string } [type]
        
        @property { string } [productSuite]
        
        @property { string } [subscriptionId]
        
         
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
        
        
        @property { string } [id]
        
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
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
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
        
        
        @property { string } [id]
        
        @property { string } [fromName]
        
        @property { string } [fromEmail]
        
         
    */

/**
        @typedef CampaignEmail
        
        
        @property { CampaignEmailTemplate } [template]
        
        @property { CampignEmailProvider } [provider]
        
         
    */

/**
        @typedef Campaign
        
        
        @property { RecipientHeaders } [recipientHeaders]
        
        @property { CampaignEmail } [email]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [datasource]
        
        @property { string } [type]
        
        @property { string } [name]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
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
        
        
        @property { string } [phoneNumber]
        
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
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
         
    */

/**
        @typedef Audience
        
        
        @property { string } [description]
        
        @property { Array<string> } [tags]
        
        @property { Array<string> } [headers]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [fileUrl]
        
        @property { string } [type]
        
        @property { number } [recordsCount]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
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
        
        @property { boolean } [isDefault]
        
         
    */

/**
        @typedef EmailProviderReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [apiKey]
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
         
    */

/**
        @typedef EmailProvider
        
        
        @property { string } [type]
        
        @property { string } [provider]
        
        @property { Array<EmailProviderReqFrom> } [from]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [apiKey]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
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
        
        @property { Array<string> } [staticTo]
        
        @property { Array<string> } [staticCc]
        
        @property { Array<string> } [staticBcc]
        
        @property { string } [replyTo]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */

/**
        @typedef TemplateAndType
        
        
        @property { string } [templateType]
        
        @property { string } [template]
        
         
    */

/**
        @typedef EmailTemplateRes
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<string> } [staticTo]
        
        @property { Array<string> } [staticCc]
        
        @property { Array<string> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { EmailTemplateKeys } [keys]
        
        @property { string } [from]
        
        @property { string } [replyTo]
        
        @property { Array<EmailTemplateHeaders> } [headers]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */

/**
        @typedef EmailTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [staticTo]
        
        @property { Array<any> } [staticCc]
        
        @property { Array<any> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [fromName]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef SystemEmailTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [staticTo]
        
        @property { Array<any> } [staticCc]
        
        @property { Array<any> } [staticBcc]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { string } [from]
        
        @property { string } [fromName]
        
        @property { TemplateAndType } [subject]
        
        @property { TemplateAndType } [html]
        
        @property { TemplateAndType } [text]
        
        @property { Array<any> } [headers]
        
        @property { Array<any> } [attachments]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
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
        
        @property { boolean } [isDefault]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [event]
        
        @property { string } [slug]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
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
        
        
        @property { string } [jobId]
        
         
    */

/**
        @typedef Job
        
        
        @property { boolean } [completed]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [campaign]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef Jobs
        
        
        @property { Array<any> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef JobLog
        
        
        @property { any } [imported]
        
        @property { any } [processed]
        
        @property { string } [id]
        
        @property { string } [job]
        
        @property { string } [campaign]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
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
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [service]
        
        @property { string } [step]
        
        @property { string } [status]
        
        @property { any } [data]
        
        @property { string } [expireAt]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef Logs
        
        
        @property { Array<Log> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PushtokenReq
        
        
        @property { string } [action]
        
        @property { string } [bundleIdentifier]
        
        @property { string } [pushToken]
        
        @property { string } [uniqueDeviceId]
        
         
    */

/**
        @typedef PushtokenRes
        
        
        @property { string } [id]
        
        @property { string } [bundleIdentifier]
        
        @property { string } [pushToken]
        
        @property { string } [uniqueDeviceId]
        
        @property { string } [type]
        
        @property { string } [platform]
        
        @property { string } [applicationId]
        
        @property { string } [userId]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [expiredAt]
        
         
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
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { string } [sender]
        
        @property { string } [username]
        
        @property { string } [authkey]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
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
        
        
        @property { string } [templateType]
        
        @property { string } [template]
        
         
    */

/**
        @typedef SmsTemplateReq
        
        
        @property { string } [name]
        
        @property { string } [description]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { Array<any> } [attachments]
        
        @property { string } [priority]
        
         
    */

/**
        @typedef SmsTemplateRes
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [slug]
        
        @property { number } [v]
        
         
    */

/**
        @typedef SmsTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { string } [priority]
        
        @property { Array<any> } [tags]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef SystemSmsTemplate
        
        
        @property { boolean } [isSystem]
        
        @property { boolean } [isInternal]
        
        @property { string } [description]
        
        @property { Array<any> } [tags]
        
        @property { string } [priority]
        
        @property { boolean } [published]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { string } [name]
        
        @property { SmsTemplateMessage } [message]
        
        @property { any } [templateVariables]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
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
        
        @property { string } [clickAction]
        
         
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
        
        @property { string } [timeToLive]
        
         
    */

/**
        @typedef SystemNotification
        
        
        @property { Notification } [notification]
        
        @property { SystemNotificationUser } [user]
        
        @property { SystemNotificationUser } [settings]
        
        @property { string } [id]
        
        @property { string } [group]
        
        @property { string } [createdAt]
        
         
    */

/**
        @typedef SystemNotificationsPage
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
         
    */

/**
        @typedef SystemNotifications
        
        
        @property { Array<SystemNotification> } [items]
        
        @property { number } [lastReadAnchor]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { boolean } success
        
        @property { Array<string> } displayFields
        
        @property { boolean } created
        
        @property { Array<Object> } [aggregators]
        
        @property { string } appId
        
        @property { Array<string> } excludedFields
        
         
    */

/**
        @typedef ErrorCodeDescription
        
        
        @property { boolean } success
        
        @property { string } description
        
        @property { string } code
        
         
    */

/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } secret
        
        @property { string } configType
        
        @property { string } key
        
        @property { string } merchantSalt
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
        @property { boolean } [isActive]
        
        @property { string } appId
        
         
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
        
        
        @property { boolean } success
        
        @property { ErrorCodeAndDescription } error
        
         
    */

/**
        @typedef PaymentModeLogo
        
        
        @property { string } large
        
        @property { string } small
        
         
    */

/**
        @typedef PaymentModeList
        
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { string } [cardToken]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { number } [retryCount]
        
        @property { string } [cardReference]
        
        @property { number } [displayPriority]
        
        @property { string } [cardId]
        
        @property { string } [merchantCode]
        
        @property { string } [cardFingerprint]
        
        @property { number } [expMonth]
        
        @property { string } [cardIsin]
        
        @property { number } [expYear]
        
        @property { string } [code]
        
        @property { string } [cardBrandImage]
        
        @property { string } aggregatorName
        
        @property { string } [intentFlow]
        
        @property { string } [cardBrand]
        
        @property { string } [cardIssuer]
        
        @property { string } [cardNumber]
        
        @property { string } [displayName]
        
        @property { string } [cardType]
        
        @property { string } [nickname]
        
        @property { string } [name]
        
        @property { boolean } [expired]
        
        @property { string } [cardName]
        
        @property { string } [fyndVpa]
        
        @property { number } [timeout]
        
         
    */

/**
        @typedef RootPaymentMode
        
        
        @property { string } displayName
        
        @property { number } displayPriority
        
        @property { string } [aggregatorName]
        
        @property { boolean } [anonymousEnable]
        
        @property { boolean } [addCardEnabled]
        
        @property { string } name
        
        @property { Array<PaymentModeList> } [list]
        
         
    */

/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } paymentOption
        
         
    */

/**
        @typedef PaymentOptionsResponse
        
        
        @property { boolean } success
        
        @property { PaymentOptions } paymentOptions
        
         
    */

/**
        @typedef PayoutsResponse
        
        
        @property { string } transferType
        
        @property { Object } uniqueTransferNo
        
        @property { Object } customers
        
        @property { boolean } isDefault
        
        @property { Array<Object> } payoutsAggregators
        
        @property { Object } moreAttributes
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef PayoutRequest
        
        
        @property { string } transferType
        
        @property { string } uniqueExternalId
        
        @property { Object } users
        
        @property { string } aggregator
        
        @property { Object } bankDetails
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef PayoutResponse
        
        
        @property { string } transferType
        
        @property { string } paymentStatus
        
        @property { boolean } success
        
        @property { string } uniqueTransferNo
        
        @property { Object } users
        
        @property { Object } payouts
        
        @property { boolean } created
        
        @property { Object } bankDetails
        
        @property { string } aggregator
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } success
        
        @property { boolean } isDefault
        
        @property { boolean } isActive
        
         
    */

/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } isDefault
        
        @property { boolean } isActive
        
        @property { string } uniqueExternalId
        
         
    */

/**
        @typedef DeletePayoutResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
        @property { Array<Object> } data
        
         
    */

/**
        @typedef DeleteSubscriptionPaymentMethodResponse
        
        
        @property { boolean } success
        
         
    */

/**
        @typedef SubscriptionConfigResponse
        
        
        @property { boolean } success
        
        @property { string } aggregator
        
        @property { Object } config
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } uniqueExternalId
        
         
    */

/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { boolean } success
        
        @property { Object } data
        
         
    */

/**
        @typedef GetActivityStatus
        
        
        @property { ActivityHistory } activityHistory
        
         
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
        
        
        @property { string } [updatedAt]
        
        @property { string } [id]
        
        @property { string } [reason]
        
        @property { MarketplaceOrder } [marketplaceOrder]
        
        @property { string } [marketplaceOrderId]
        
        @property { string } [createdAt]
        
        @property { string } [appId]
        
        @property { string } [marketplace]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef MarketplaceOrder
        
        
        @property { string } [orderStatusUrl]
        
        @property { string } [adminGraphqlApiId]
        
        @property { string } [email]
        
        @property { boolean } [test]
        
        @property { string } [note]
        
        @property { string } [totalPrice]
        
        @property { number } [appId]
        
        @property { TotalDiscountsSet } [totalDiscountsSet]
        
        @property { TotalPriceSet } [totalPriceSet]
        
        @property { TotalTaxSet } [totalTaxSet]
        
        @property { string } [gateway]
        
        @property { string } [name]
        
        @property { SubtotalPriceSet } [subtotalPriceSet]
        
        @property { number } [number]
        
        @property { boolean } [buyerAcceptsMarketing]
        
        @property { string } [contactEmail]
        
        @property { string } [token]
        
        @property { string } [sourceName]
        
        @property { Array<any> } [paymentGatewayNames]
        
        @property { string } [presentmentCurrency]
        
        @property { string } [subtotalPrice]
        
        @property { string } [processedAt]
        
        @property { number } [orderNumber]
        
        @property { string } [totalTipReceived]
        
        @property { number } [id]
        
        @property { boolean } [confirmed]
        
        @property { string } [currency]
        
        @property { string } [totalLineItemsPrice]
        
        @property { LineItems } [lineItems]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [totalWeight]
        
        @property { BillingAddress } [billingAddress]
        
        @property { TotalShippingPriceSet } [totalShippingPriceSet]
        
        @property { Customer } [customer]
        
        @property { string } [totalDiscounts]
        
        @property { TotalLineItemsPriceSet } [totalLineItemsPriceSet]
        
        @property { string } [tags]
        
        @property { string } [totalPriceUsd]
        
        @property { number } [userId]
        
        @property { string } [totalTax]
        
        @property { string } [processingMethod]
        
        @property { ShippingAddress } [shippingAddress]
        
        @property { boolean } [taxesIncluded]
        
        @property { string } [financialStatus]
        
         
    */

/**
        @typedef TotalDiscountsSet
        
        
        @property { PresentmentMoney } [presentmentMoney]
        
        @property { ShopMoney } [shopMoney]
        
         
    */

/**
        @typedef PresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef ShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalPriceSet
        
        
        @property { TotalPriceSetShopMoney } [shopMoney]
        
        @property { TotalPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalTaxSet
        
        
        @property { TotalTaxSetShopMoney } [shopMoney]
        
        @property { TotalTaxSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TotalTaxSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalTaxSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef SubtotalPriceSet
        
        
        @property { SubtotalPriceSetShopMoney } [shopMoney]
        
        @property { SubtotalPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef SubtotalPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef SubtotalPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef LineItems
        
        
        @property { string } [sku]
        
        @property { number } [fulfillableQuantity]
        
        @property { number } [grams]
        
        @property { string } [totalDiscount]
        
        @property { LineItemsArticle } [article]
        
        @property { string } [title]
        
        @property { string } [variantInventoryManagement]
        
        @property { number } [id]
        
        @property { number } [variantId]
        
        @property { string } [variantTitle]
        
        @property { boolean } [productExists]
        
        @property { string } [price]
        
        @property { string } [adminGraphqlApiId]
        
        @property { number } [quantity]
        
        @property { string } [vendor]
        
        @property { string } [fulfillmentService]
        
        @property { boolean } [taxable]
        
        @property { string } [name]
        
        @property { number } [productId]
        
        @property { PriceSet } [priceSet]
        
        @property { TaxLines } [taxLines]
        
        @property { boolean } [requiresShipping]
        
        @property { boolean } [giftCard]
        
        @property { TotalDiscountSet } [totalDiscountSet]
        
         
    */

/**
        @typedef LineItemsArticle
        
        
        @property { Quantities } [quantities]
        
        @property { string } [oldArticleUid]
        
        @property { number } [totalQuantity]
        
        @property { Manufacturer } [manufacturer]
        
        @property { ArticlePrice } [price]
        
        @property { boolean } [trackInventory]
        
        @property { Company } [company]
        
        @property { boolean } [isActive]
        
        @property { FailOrderDateMeta } [dateMeta]
        
        @property { boolean } [fragile]
        
        @property { MarketplaceIdentifiers } [marketplaceIdentifiers]
        
        @property { string } [size]
        
        @property { boolean } [isSet]
        
        @property { Dimension } [dimension]
        
        @property { Weight } [weight]
        
        @property { Store } [store]
        
        @property { ArticleMeta } [meta]
        
        @property { string } [uid]
        
        @property { ArticleBrand } [brand]
        
        @property { number } [itemId]
        
        @property { string } [fyndArticleCode]
        
        @property { string } [id]
        
        @property { LineItemsArticleIdentifier } [identifier]
        
        @property { string } [sellerIdentifier]
        
        @property { string } [fyndItemCode]
        
        @property { string } [countryOfOrigin]
        
         
    */

/**
        @typedef Quantities
        
        
        @property { NotAvailable } [notAvailable]
        
        @property { Sellable } [sellable]
        
        @property { OrderCommitted } [orderCommitted]
        
        @property { Damaged } [damaged]
        
         
    */

/**
        @typedef NotAvailable
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef Sellable
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef OrderCommitted
        
        
        @property { number } [count]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef Damaged
        
        
        @property { string } [updatedAt]
        
        @property { number } [count]
        
         
    */

/**
        @typedef Manufacturer
        
        
        @property { boolean } [isDefault]
        
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
        
        @property { string } [companyType]
        
        @property { string } [businessType]
        
        @property { string } [companyName]
        
        @property { string } [createdOn]
        
        @property { string } [panNo]
        
        @property { boolean } [returnAllowed]
        
        @property { string } [meta]
        
        @property { boolean } [exchangeAllowed]
        
        @property { string } [agreementStartDate]
        
        @property { number } [exchangeWithinDays]
        
        @property { number } [paymentProcesingCharge]
        
        @property { boolean } [fyndAFitAvailable]
        
        @property { string } [modifiedOn]
        
        @property { number } [returnWithinDays]
        
         
    */

/**
        @typedef FailOrderDateMeta
        
        
        @property { string } [addedOnStore]
        
        @property { string } [inventoryUpdatedOn]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef MarketplaceIdentifiers
        
        
        @property { TatacliqLuxury } [tatacliqLuxury]
        
         
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
        
        @property { boolean } [isDefault]
        
         
    */

/**
        @typedef Weight
        
        
        @property { boolean } [isDefault]
        
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
        
        
        @property { string } [skuCode]
        
         
    */

/**
        @typedef PriceSet
        
        
        @property { PriceSetShopMoney } [shopMoney]
        
        @property { PriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef PriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef PriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TaxLines
        
        
        @property { string } [title]
        
        @property { string } [price]
        
        @property { number } [rate]
        
        @property { TaxLinesPriceSet } [priceSet]
        
         
    */

/**
        @typedef TaxLinesPriceSet
        
        
        @property { TaxLinesPriceSetShopMoney } [shopMoney]
        
        @property { TaxLinesPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TaxLinesPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TaxLinesPriceSetPresentmentMoney
        
        
        @property { string } [currencyCode]
        
        @property { string } [amount]
        
         
    */

/**
        @typedef TotalDiscountSet
        
        
        @property { TotalDiscountSetPresentmentMoney } [presentmentMoney]
        
        @property { TotalDiscountSetShopMoney } [shopMoney]
        
         
    */

/**
        @typedef TotalDiscountSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalDiscountSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef BillingAddress
        
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [zip]
        
        @property { string } [lastName]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [provinceCode]
        
        @property { string } [phone]
        
        @property { string } [company]
        
        @property { number } [latitude]
        
        @property { string } [name]
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
        @property { string } [firstName]
        
        @property { string } [province]
        
         
    */

/**
        @typedef TotalShippingPriceSet
        
        
        @property { TotalShippingPriceSetShopMoney } [shopMoney]
        
        @property { TotalShippingPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TotalShippingPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalShippingPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef Customer
        
        
        @property { string } [createdAt]
        
        @property { number } [id]
        
        @property { string } [lastName]
        
        @property { string } [state]
        
        @property { number } [lastOrderId]
        
        @property { string } [note]
        
        @property { boolean } [verifiedEmail]
        
        @property { string } [phone]
        
        @property { boolean } [acceptsMarketing]
        
        @property { string } [firstName]
        
        @property { string } [tags]
        
        @property { string } [lastOrderName]
        
        @property { number } [ordersCount]
        
        @property { string } [totalSpent]
        
        @property { boolean } [taxExempt]
        
        @property { string } [currency]
        
        @property { string } [acceptsMarketingUpdatedAt]
        
        @property { string } [email]
        
        @property { string } [updatedAt]
        
        @property { string } [adminGraphqlApiId]
        
        @property { DefaultAddress } [defaultAddress]
        
         
    */

/**
        @typedef DefaultAddress
        
        
        @property { string } [lastName]
        
        @property { string } [name]
        
        @property { string } [provinceCode]
        
        @property { string } [countryCode]
        
        @property { boolean } [isDefault]
        
        @property { number } [id]
        
        @property { number } [customerId]
        
        @property { string } [firstName]
        
        @property { string } [address1]
        
        @property { string } [phone]
        
        @property { string } [countryName]
        
        @property { string } [company]
        
        @property { string } [address2]
        
        @property { string } [city]
        
        @property { string } [province]
        
        @property { string } [country]
        
        @property { string } [zip]
        
         
    */

/**
        @typedef TotalLineItemsPriceSet
        
        
        @property { TotalLineItemsPriceSetShopMoney } [shopMoney]
        
        @property { TotalLineItemsPriceSetPresentmentMoney } [presentmentMoney]
        
         
    */

/**
        @typedef TotalLineItemsPriceSetShopMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef TotalLineItemsPriceSetPresentmentMoney
        
        
        @property { string } [amount]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef ShippingAddress
        
        
        @property { string } [address1]
        
        @property { string } [zip]
        
        @property { string } [address2]
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
        @property { string } [lastName]
        
        @property { number } [latitude]
        
        @property { string } [provinceCode]
        
        @property { string } [firstName]
        
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
        
        @property { NextOrderStatus } nextOrderStatus
        
        @property { PlatformOrderPage } page
        
        @property { AppliedFilters } appliedFilters
        
         
    */

/**
        @typedef OrderItems
        
        
        @property { PlatformOrderUserInfo } [user]
        
        @property { PlatformDeliveryAddress } [deliveryAddress]
        
        @property { Channel } [channel]
        
        @property { PlatformBreakupValues } [breakupValues]
        
        @property { string } [id]
        
        @property { PlatformApplication } [application]
        
        @property { PlatformShipment } [shipments]
        
        @property { string } [createdAt]
        
        @property { number } [totalShipmentsInOrder]
        
        @property { ItemsPayments } [payments]
        
         
    */

/**
        @typedef PlatformOrderUserInfo
        
        
        @property { string } [mobile]
        
        @property { string } [firstName]
        
        @property { string } [gender]
        
        @property { string } [email]
        
        @property { string } [lastName]
        
        @property { boolean } [isAnonymousUser]
        
        @property { number } [uid]
        
        @property { string } [avisUserId]
        
         
    */

/**
        @typedef PlatformDeliveryAddress
        
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [country]
        
        @property { string } [version]
        
        @property { string } [address1]
        
        @property { number } [latitude]
        
        @property { string } [updatedAt]
        
        @property { string } [city]
        
        @property { string } [landmark]
        
        @property { string } [createdAt]
        
        @property { string } [name]
        
        @property { string } [address]
        
        @property { string } [phone]
        
        @property { number } [longitude]
        
        @property { string } [addressType]
        
        @property { string } [email]
        
        @property { string } [pincode]
        
        @property { string } [address2]
        
        @property { string } [contactPerson]
        
        @property { string } [addressCategory]
        
         
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
        
        @property { boolean } [postOrderReassignment]
        
        @property { string } [id]
        
        @property { string } [description]
        
        @property { boolean } [dpAssignment]
        
        @property { ArticleAssignment } [articleAssignment]
        
        @property { boolean } [forceReassignment]
        
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
        
        @property { ShipmentBreakupValues } [breakupValues]
        
        @property { string } [id]
        
        @property { DpDetails } [dpDetails]
        
        @property { ShipmentInvoice } [invoice]
        
        @property { PlatformFulfillingStore } [fulfillingStore]
        
        @property { Payments } [payments]
        
        @property { ShipmentGst } [gst]
        
        @property { Company } [company]
        
        @property { PlatformShipmentBrand } [brand]
        
        @property { Object } [coupon]
        
        @property { string } [orderSource]
        
        @property { boolean } [isNotFyndSource]
        
        @property { string } [comment]
        
        @property { Promise } [promise]
        
        @property { ShipmentTrackingDetails } [trackingDetails]
        
        @property { boolean } [isFyndCoupon]
        
        @property { string } [orderType]
        
        @property { ShipmentUser } [user]
        
         
    */

/**
        @typedef PlatformShipmentStatus
        
        
        @property { number } [id]
        
        @property { Array<number> } [bagList]
        
        @property { string } [createdAt]
        
        @property { string } [status]
        
        @property { string } [name]
        
        @property { number } [progress]
        
        @property { string } [shipmentId]
        
        @property { string } [currentShipmentStatus]
        
        @property { string } [colorCode]
        
         
    */

/**
        @typedef Bags
        
        
        @property { Array<BagFinancialBreakup> } [financialBreakup]
        
        @property { BagCurrStatus } [status]
        
        @property { BagItem } [item]
        
        @property { BagArticle } [article]
        
        @property { number } [id]
        
        @property { BagPrices } [prices]
        
        @property { GstDetails } [gstDetails]
        
        @property { BagBreakupValues } [breakupValues]
        
        @property { number } [updateTime]
        
        @property { BagCurrentStatus } [currentStatus]
        
        @property { BagStatus } [bagStatus]
        
         
    */

/**
        @typedef BagFinancialBreakup
        
        
        @property { number } [valueOfGood]
        
        @property { string } [hsnCode]
        
        @property { number } [priceEffective]
        
        @property { number } [codCharges]
        
        @property { string } [gstFee]
        
        @property { number } [fyndCredits]
        
        @property { number } [refundAmount]
        
        @property { number } [cashbackApplied]
        
        @property { number } [transferPrice]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [couponValue]
        
        @property { number } [amountPaid]
        
        @property { number } [gstTaxPercentage]
        
        @property { string } [size]
        
        @property { number } [totalUnits]
        
        @property { number } [discount]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [cashback]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { string } [gstTag]
        
        @property { number } [deliveryCharge]
        
        @property { number } [refundCredit]
        
        @property { number } [priceMarked]
        
        @property { Identifiers } [identifiers]
        
        @property { string } [itemName]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [brandCalculatedAmount]
        
         
    */

/**
        @typedef Identifiers
        
        
        @property { string } [ean]
        
         
    */

/**
        @typedef BagCurrStatus
        
        
        @property { boolean } [enableTracking]
        
        @property { boolean } [isCustomerReturnAllowed]
        
        @property { boolean } [isActive]
        
        @property { boolean } [isReturnable]
        
        @property { boolean } [canBeCancelled]
        
         
    */

/**
        @typedef BagItem
        
        
        @property { number } [id]
        
        @property { string } [size]
        
        @property { string } [slugKey]
        
        @property { boolean } [canReturn]
        
        @property { number } [brandId]
        
        @property { Array<string> } [l2Category]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { boolean } [canCancel]
        
        @property { BagItemAttributes } [attributes]
        
        @property { string } [l3CategoryName]
        
        @property { number } [l3Category]
        
        @property { Array<string> } [l1Category]
        
        @property { Array<string> } [image]
        
        @property { string } [brand]
        
        @property { string } [lastUpdatedAt]
        
         
    */

/**
        @typedef BagItemAttributes
        
        
        @property { string } [itemCode]
        
        @property { string } [brandName]
        
        @property { string } [countryOfOrigin]
        
         
    */

/**
        @typedef BagArticle
        
        
        @property { ArticleIdentifiers } [identifiers]
        
        @property { boolean } [espModified]
        
        @property { boolean } [isSet]
        
        @property { string } [size]
        
        @property { string } [code]
        
        @property { Set } [set]
        
        @property { string } [sellerIdentifier]
        
        @property { BagArticleReturnConfig } [returnConfig]
        
        @property { string } [id]
        
        @property { string } [uid]
        
        @property { Object } [childDetails]
        
         
    */

/**
        @typedef ArticleIdentifiers
        
        
        @property { string } [ean]
        
         
    */

/**
        @typedef Set
        
        
        @property { number } [quantity]
        
        @property { SetSizeDistribution } [sizeDistribution]
        
         
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
        
        
        @property { number } [refundAmount]
        
        @property { number } [cashbackApplied]
        
        @property { number } [transferPrice]
        
        @property { number } [couponValue]
        
        @property { number } [amountPaid]
        
        @property { number } [deliveryCharge]
        
        @property { number } [couponEffectiveDiscount]
        
        @property { number } [codCharges]
        
        @property { number } [refundCredit]
        
        @property { boolean } [addedToFyndCash]
        
        @property { number } [gstTaxPercentage]
        
        @property { number } [priceMarked]
        
        @property { number } [priceEffective]
        
        @property { number } [discount]
        
        @property { number } [promotionEffectiveDiscount]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [fyndCredits]
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [cashback]
        
        @property { number } [valueOfGood]
        
         
    */

/**
        @typedef GstDetails
        
        
        @property { number } [brandCalculatedAmount]
        
        @property { string } [gstFee]
        
        @property { string } [gstTag]
        
        @property { string } [hsnCode]
        
        @property { number } [valueOfGood]
        
        @property { number } [gstTaxPercentage]
        
        @property { boolean } [isDefaultHsnCode]
        
         
    */

/**
        @typedef BagBreakupValues
        
        
        @property { string } [name]
        
        @property { string } [display]
        
        @property { number } [value]
        
         
    */

/**
        @typedef BagCurrentStatus
        
        
        @property { string } [updatedAt]
        
        @property { BagStateMapper } [bagStateMapper]
        
        @property { string } [status]
        
        @property { string } [stateType]
        
         
    */

/**
        @typedef BagStateMapper
        
        
        @property { string } [appStateName]
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [name]
        
        @property { string } [appDisplayName]
        
         
    */

/**
        @typedef BagStatus
        
        
        @property { string } [status]
        
        @property { string } [stateType]
        
        @property { string } [updatedAt]
        
        @property { BagStatusBagStateMapper } [bagStateMapper]
        
         
    */

/**
        @typedef BagStatusBagStateMapper
        
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [name]
        
        @property { string } [appDisplayName]
        
        @property { string } [appStateName]
        
         
    */

/**
        @typedef BagPrices
        
        
        @property { number } [cashback]
        
        @property { number } [refundCredit]
        
        @property { number } [couponValue]
        
        @property { number } [deliveryCharge]
        
        @property { number } [fyndCredits]
        
        @property { number } [priceMarked]
        
        @property { number } [cashbackApplied]
        
        @property { number } [valueOfGood]
        
        @property { number } [amountPaidRoundoff]
        
        @property { number } [amountPaid]
        
        @property { number } [codCharges]
        
        @property { number } [priceEffective]
        
        @property { number } [refundAmount]
        
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
        
        
        @property { string } [gstTag]
        
         
    */

/**
        @typedef ShipmentInvoice
        
        
        @property { string } [paymentType]
        
        @property { string } [updatedDate]
        
        @property { string } [invoiceUrl]
        
        @property { string } [labelUrl]
        
        @property { string } [paymentMode]
        
        @property { number } [amountToCollect]
        
        @property { RtoAddress } [rtoAddress]
        
         
    */

/**
        @typedef RtoAddress
        
        
        @property { string } [name]
        
        @property { number } [id]
        
        @property { string } [phone]
        
        @property { string } [locationType]
        
        @property { StoreAddressJson } [storeAddressJson]
        
        @property { string } [code]
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { number } [companyId]
        
        @property { string } [contactPerson]
        
        @property { string } [state]
        
        @property { string } [storeEmail]
        
        @property { string } [address2]
        
         
    */

/**
        @typedef StoreAddressJson
        
        
        @property { string } [country]
        
        @property { number } [latitude]
        
        @property { string } [updatedAt]
        
        @property { string } [area]
        
        @property { string } [state]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [pincode]
        
        @property { string } [address1]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { string } [email]
        
        @property { string } [phone]
        
        @property { string } [createdAt]
        
        @property { string } [contactPerson]
        
        @property { string } [addressCategory]
        
        @property { string } [version]
        
        @property { string } [landmark]
        
         
    */

/**
        @typedef PlatformFulfillingStore
        
        
        @property { number } [packagingMaterialCount]
        
        @property { string } [locationType]
        
        @property { string } [code]
        
        @property { string } [city]
        
        @property { FulfillingStoreMeta } [meta]
        
        @property { string } [name]
        
        @property { boolean } [isActive]
        
        @property { string } [address1]
        
        @property { string } [storeEmail]
        
        @property { boolean } [isArchived]
        
        @property { string } [state]
        
        @property { string } [address2]
        
        @property { string } [contactPerson]
        
        @property { string } [phone]
        
        @property { boolean } [isEnabledForRecon]
        
        @property { string } [fulfillmentChannel]
        
        @property { string } [createdAt]
        
        @property { number } [id]
        
        @property { string } [pincode]
        
        @property { Array<string> } [brandStoreTags]
        
        @property { number } [companyId]
        
        @property { FulfillingStoreStoreAddressJson } [storeAddressJson]
        
        @property { string } [updatedAt]
        
        @property { string } [loginUsername]
        
        @property { string } [country]
        
         
    */

/**
        @typedef FulfillingStoreMeta
        
        
        @property { AdditionalContactDetails } [additionalContactDetails]
        
        @property { Documents } [documents]
        
        @property { string } [gstNumber]
        
        @property { string } [displayName]
        
        @property { ProductReturnConfig } [productReturnConfig]
        
        @property { boolean } [allowDpAssignmentFromFynd]
        
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
        
        
        @property { string } [legalName]
        
        @property { string } [type]
        
        @property { string } [value]
        
        @property { boolean } [verified]
        
         
    */

/**
        @typedef ProductReturnConfig
        
        
        @property { boolean } [onSameStore]
        
         
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
        
        @property { string } [contactPerson]
        
        @property { string } [country]
        
        @property { string } [pincode]
        
        @property { string } [version]
        
        @property { string } [createdAt]
        
        @property { string } [addressType]
        
        @property { string } [city]
        
        @property { string } [address1]
        
        @property { string } [landmark]
        
        @property { number } [latitude]
        
        @property { number } [longitude]
        
        @property { string } [updatedAt]
        
        @property { string } [addressCategory]
        
         
    */

/**
        @typedef Payments
        
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [logo]
        
        @property { string } [source]
        
        @property { string } [sourceNickname]
        
        @property { number } [displayPriority]
        
        @property { number } [id]
        
        @property { string } [mode]
        
        @property { string } [paymentIdentifier]
        
         
    */

/**
        @typedef ShipmentGst
        
        
        @property { number } [brandCalculatedAmount]
        
        @property { number } [valueOfGood]
        
        @property { number } [gstFee]
        
         
    */

/**
        @typedef PlatformShipmentBrand
        
        
        @property { boolean } [creditNoteAllowed]
        
        @property { string } [brandName]
        
        @property { string } [modifiedOn]
        
        @property { number } [id]
        
        @property { boolean } [isVirtualInvoice]
        
        @property { string } [createdOn]
        
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
        
        @property { boolean } [isPassed]
        
        @property { boolean } [isCurrent]
        
         
    */

/**
        @typedef ShipmentUser
        
        
        @property { string } [email]
        
        @property { number } [id]
        
        @property { string } [firstName]
        
        @property { string } [mobile]
        
        @property { string } [gender]
        
        @property { string } [lastName]
        
        @property { boolean } [isAnonymousUser]
        
        @property { string } [mongoUserId]
        
         
    */

/**
        @typedef ItemsPayments
        
        
        @property { number } [displayPriority]
        
        @property { number } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [displayName]
        
        @property { string } [logo]
        
        @property { string } [paymentIdentifier]
        
        @property { string } [sourceNickname]
        
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
        
        @property { boolean } [isDefault]
        
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
        
        
        @property { BagConfirmed } [bagConfirmed]
        
        @property { DpAssigned } [dpAssigned]
        
        @property { ReturnBagDelivered } [returnBagDelivered]
        
        @property { Placed } [placed]
        
        @property { DeliveryDone } [deliveryDone]
        
        @property { Pending } [pending]
        
        @property { BagPacked } [bagPacked]
        
         
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
        
        @property { boolean } [hasNext]
        
        @property { ItemTotal } [itemTotal]
        
         
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
        
        @property { string } [fromDate]
        
        @property { string } [toDate]
        
         
    */

/**
        @typedef UpdateOrderReprocessResponse
        
        
        @property { string } status
        
         
    */

/**
        @typedef PlatformOrderTrack
        
        
        @property { boolean } success
        
        @property { string } requestId
        
        @property { string } message
        
        @property { string } mobile
        
        @property { string } countryCode
        
        @property { number } resendTimer
        
        @property { string } [resendToken]
        
         
    */

/**
        @typedef GetPingResponse
        
        
        @property { string } ping
        
         
    */

/**
        @typedef UpdateShipmentStatusResponse
        
        
        @property { Object } shipments
        
        @property { Array<any> } [errorShipments]
        
         
    */

/**
        @typedef UpdateShipmentStatusBody
        
        
        @property { Object } shipments
        
        @property { boolean } forceTransition
        
        @property { boolean } task
        
         
    */

/**
        @typedef PlatformShipmentTrack
        
        
        @property { Results } results
        
         
    */

/**
        @typedef Results
        
        
        @property { string } [awb]
        
        @property { string } [updatedAt]
        
        @property { string } [lastLocationRecievedAt]
        
        @property { string } [reason]
        
        @property { string } [shipmentType]
        
        @property { string } [status]
        
        @property { string } [updatedTime]
        
        @property { string } [accountName]
        
         
    */

/**
        @typedef UpdateProcessShipmenstRequestBody
        
        
        @property { Array<string> } shipmentIds
        
        @property { string } expectedStatus
        
         
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
        @typedef DeleteResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef ErrorResponse
        
        
        @property { string } [code]
        
        @property { string } [message]
        
        @property { Object } [meta]
        
        @property { number } [status]
        
         
    */

/**
        @typedef SearchKeywordResult
        
        
        @property { Object } query
        
        @property { string } sortOn
        
         
    */

/**
        @typedef CreateSearchKeyword
        
        
        @property { string } [appId]
        
        @property { Array<string> } [words]
        
        @property { boolean } [isActive]
        
        @property { SearchKeywordResult } result
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef GetSearchWordsData
        
        
        @property { string } [appId]
        
        @property { Array<string> } [words]
        
        @property { Object } [result]
        
        @property { string } [uid]
        
        @property { Object } [customJson]
        
         
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
        @typedef Media
        
        
        @property { string } [url]
        
        @property { string } [type]
        
         
    */

/**
        @typedef AutocompletePageAction
        
        
        @property { string } [url]
        
        @property { Object } [params]
        
        @property { string } type
        
        @property { Object } query
        
         
    */

/**
        @typedef AutocompleteAction
        
        
        @property { string } [type]
        
        @property { AutocompletePageAction } [page]
        
         
    */

/**
        @typedef AutocompleteResult
        
        
        @property { Object } [customJson]
        
        @property { string } [display]
        
        @property { Media } [logo]
        
        @property { AutocompleteAction } [action]
        
         
    */

/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { string } [appId]
        
        @property { Array<string> } [words]
        
        @property { boolean } [isActive]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef GetAutocompleteWordsData
        
        
        @property { string } [appId]
        
        @property { Array<string> } [words]
        
        @property { Array<Object> } [results]
        
        @property { string } [uid]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { string } [appId]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
        @property { Object } [customJson]
        
         
    */

/**
        @typedef ProductBundleItem
        
        
        @property { boolean } [allowRemove]
        
        @property { number } minQuantity
        
        @property { boolean } [autoAddToCart]
        
        @property { boolean } [autoSelect]
        
        @property { number } maxQuantity
        
        @property { number } productUid
        
         
    */

/**
        @typedef ProductBundleRequest
        
        
        @property { Object } [modifiedBy]
        
        @property { string } slug
        
        @property { string } [modifiedOn]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } isActive
        
        @property { Object } [createdBy]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { Object } [meta]
        
        @property { string } [createdOn]
        
        @property { string } [logo]
        
        @property { string } choice
        
        @property { string } name
        
         
    */

/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { Object } [modifiedBy]
        
        @property { string } slug
        
        @property { string } [modifiedOn]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } isActive
        
        @property { Object } [createdBy]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { Object } [meta]
        
        @property { string } [createdOn]
        
        @property { string } [logo]
        
        @property { number } [companyId]
        
        @property { string } [id]
        
        @property { string } choice
        
        @property { string } name
        
         
    */

/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { Object } [modifiedBy]
        
        @property { string } slug
        
        @property { string } [modifiedOn]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } isActive
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { string } choice
        
        @property { string } name
        
         
    */

/**
        @typedef Price
        
        
        @property { number } [minMarked]
        
        @property { number } [minEffective]
        
        @property { number } [maxMarked]
        
        @property { number } [maxEffective]
        
        @property { string } [currency]
        
         
    */

/**
        @typedef LimitedProductData
        
        
        @property { string } [countryOfOrigin]
        
        @property { string } [slug]
        
        @property { Object } [price]
        
        @property { Array<string> } [images]
        
        @property { Object } [attributes]
        
        @property { Object } [identifier]
        
        @property { string } [shortDescription]
        
        @property { number } [quantity]
        
        @property { string } [itemCode]
        
        @property { Array<string> } [sizes]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Size
        
        
        @property { string } [display]
        
        @property { number } [quantity]
        
        @property { boolean } [isAvailable]
        
        @property { string } [value]
        
         
    */

/**
        @typedef GetProducts
        
        
        @property { boolean } [allowRemove]
        
        @property { number } [minQuantity]
        
        @property { Price } [price]
        
        @property { boolean } [autoAddToCart]
        
        @property { boolean } [autoSelect]
        
        @property { number } [maxQuantity]
        
        @property { number } [productUid]
        
        @property { LimitedProductData } [productDetails]
        
        @property { Array<Size> } [sizes]
        
         
    */

/**
        @typedef GetProductBundleResponse
        
        
        @property { string } [slug]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } [isActive]
        
        @property { Array<GetProducts> } [products]
        
        @property { Array<string> } [pageVisibility]
        
        @property { Object } [meta]
        
        @property { string } [logo]
        
        @property { number } [companyId]
        
        @property { string } [choice]
        
        @property { string } [name]
        
         
    */

/**
        @typedef Meta
        
        
        @property { Object } [headers]
        
        @property { string } [unit]
        
        @property { Array<Object> } [values]
        
         
    */

/**
        @typedef Guide
        
        
        @property { Meta } [meta]
        
         
    */

/**
        @typedef ValidateSizeGuide
        
        
        @property { string } [image]
        
        @property { number } [brandId]
        
        @property { string } [modifiedOn]
        
        @property { string } title
        
        @property { Object } [createdBy]
        
        @property { Guide } [guide]
        
        @property { boolean } [active]
        
        @property { string } [tag]
        
        @property { string } [createdOn]
        
        @property { string } [description]
        
        @property { number } [companyId]
        
        @property { string } [id]
        
        @property { string } [subtitle]
        
        @property { Object } [modifiedBy]
        
        @property { string } name
        
         
    */

/**
        @typedef SuccessResponse
        
        
        @property { boolean } [success]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef ListSizeGuide
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */

/**
        @typedef SizeGuideResponse
        
        
        @property { number } [brandId]
        
        @property { string } [modifiedOn]
        
        @property { string } [title]
        
        @property { Object } [createdBy]
        
        @property { Object } [guide]
        
        @property { boolean } [active]
        
        @property { string } [createdOn]
        
        @property { string } [tag]
        
        @property { number } [companyId]
        
        @property { string } [id]
        
        @property { string } [subtitle]
        
        @property { Object } [modifiedBy]
        
        @property { string } [name]
        
         
    */

/**
        @typedef MetaDataListingSortMetaResponse
        
        
        @property { string } [key]
        
        @property { string } [display]
        
         
    */

/**
        @typedef MetaDataListingSortResponse
        
        
        @property { Array<MetaDataListingSortMetaResponse> } [data]
        
         
    */

/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { string } [key]
        
        @property { string } [display]
        
        @property { Array<Object> } [units]
        
        @property { Array<string> } [filterTypes]
        
         
    */

/**
        @typedef MetaDataListingFilterResponse
        
        
        @property { Array<MetaDataListingFilterMetaResponse> } [data]
        
         
    */

/**
        @typedef MetaDataListingResponse
        
        
        @property { MetaDataListingSortResponse } sort
        
        @property { MetaDataListingFilterResponse } filter
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [compare]
        
        @property { Object } [similar]
        
        @property { Object } [variant]
        
        @property { Object } [detail]
        
         
    */

/**
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { MetaDataListingResponse } [listing]
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */

/**
        @typedef ProductSize
        
        
        @property { number } max
        
        @property { number } min
        
         
    */

/**
        @typedef ConfigurationProductConfig
        
        
        @property { number } priority
        
        @property { string } [title]
        
        @property { boolean } isActive
        
        @property { ProductSize } [size]
        
        @property { string } [logo]
        
        @property { string } key
        
        @property { string } [subtitle]
        
         
    */

/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { string } displayType
        
        @property { number } priority
        
        @property { boolean } isActive
        
        @property { ProductSize } size
        
        @property { string } [logo]
        
        @property { string } key
        
        @property { string } name
        
         
    */

/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */

/**
        @typedef ConfigurationProduct
        
        
        @property { ConfigurationProductSimilar } similar
        
        @property { ConfigurationProductVariant } variant
        
         
    */

/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { number } priority
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { string } key
        
        @property { string } [name]
        
         
    */

/**
        @typedef ConfigurationListingSort
        
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
        @property { string } defaultKey
        
         
    */

/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [start]
        
        @property { number } [end]
        
         
    */

/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { string } [condition]
        
        @property { Array<ConfigurationBucketPoints> } [bucketPoints]
        
        @property { string } [value]
        
        @property { Object } [map]
        
        @property { string } [sort]
        
         
    */

/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { number } priority
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { string } type
        
        @property { string } key
        
        @property { ConfigurationListingFilterValue } [valueConfig]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ConfigurationListingFilter
        
        
        @property { boolean } allowSingle
        
        @property { Array<ConfigurationListingFilterConfig> } [attributeConfig]
        
         
    */

/**
        @typedef ConfigurationListing
        
        
        @property { ConfigurationListingSort } sort
        
        @property { ConfigurationListingFilter } filter
        
         
    */

/**
        @typedef AppConfiguration
        
        
        @property { string } appId
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [configId]
        
        @property { ConfigurationListing } [listing]
        
        @property { string } configType
        
         
    */

/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } appId
        
        @property { ConfigurationProduct } [product]
        
        @property { string } [configId]
        
        @property { ConfigurationListing } [listing]
        
        @property { string } [id]
        
        @property { string } configType
        
         
    */

/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { AppCatalogConfiguration } [data]
        
        @property { boolean } [isDefault]
        
         
    */

/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [sort]
        
        @property { Object } [filter]
        
         
    */

/**
        @typedef EntityConfiguration
        
        
        @property { string } appId
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { string } [configId]
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { string } [id]
        
        @property { string } configType
        
         
    */

/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { EntityConfiguration } [data]
        
        @property { boolean } [isDefault]
        
         
    */

/**
        @typedef ProductFiltersKey
        
        
        @property { string } [kind]
        
        @property { string } display
        
        @property { string } [logo]
        
        @property { string } name
        
         
    */

/**
        @typedef ProductFiltersValue
        
        
        @property { string } [displayFormat]
        
        @property { number } [min]
        
        @property { string } [queryFormat]
        
        @property { number } [max]
        
        @property { string } display
        
        @property { string } [currencySymbol]
        
        @property { boolean } isSelected
        
        @property { string } value
        
        @property { number } [count]
        
        @property { number } [selectedMin]
        
        @property { number } [selectedMax]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef ProductFilters
        
        
        @property { ProductFiltersKey } key
        
        @property { Array<ProductFiltersValue> } values
        
         
    */

/**
        @typedef ProductSortOn
        
        
        @property { string } [value]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */

/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
    */

/**
        @typedef CollectionBadge
        
        
        @property { string } [color]
        
        @property { string } [text]
        
         
    */

/**
        @typedef UserInfo
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [email]
        
        @property { string } [uid]
        
         
    */

/**
        @typedef Schedule
        
        
        @property { string } [start]
        
        @property { string } [cron]
        
        @property { number } [duration]
        
        @property { string } [end]
        
         
    */

/**
        @typedef CollectionImage
        
        
        @property { string } url
        
        @property { string } aspectRatio
        
         
    */

/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } portrait
        
        @property { CollectionImage } landscape
        
         
    */

/**
        @typedef SeoDetail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */

/**
        @typedef CreateCollection
        
        
        @property { CollectionBadge } [badge]
        
        @property { UserInfo } [createdBy]
        
        @property { Schedule } [schedule]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } name
        
        @property { Object } [customJson]
        
        @property { Object } [query]
        
        @property { boolean } [isActive]
        
        @property { Object } [meta]
        
        @property { CollectionImage } logo
        
        @property { boolean } [allowSort]
        
        @property { string } appId
        
        @property { string } slug
        
        @property { boolean } [published]
        
        @property { Array<string> } [tags]
        
        @property { string } type
        
        @property { CollectionBanner } banners
        
        @property { Object } [localeLanguage]
        
        @property { UserInfo } [modifiedBy]
        
        @property { string } [sortOn]
        
        @property { SeoDetail } [seo]
        
        @property { boolean } [allowFacets]
        
         
    */

/**
        @typedef BannerImage
        
        
        @property { string } [url]
        
        @property { string } [aspectRatio]
        
         
    */

/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [portrait]
        
        @property { BannerImage } [landscape]
        
         
    */

/**
        @typedef CollectionCreateResponse
        
        
        @property { string } [appId]
        
        @property { Object } [query]
        
        @property { string } [slug]
        
        @property { Object } [badge]
        
        @property { boolean } [isActive]
        
        @property { Object } [cron]
        
        @property { Object } [meta]
        
        @property { BannerImage } [logo]
        
        @property { Array<string> } [tag]
        
        @property { string } [description]
        
        @property { string } [type]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [schedule]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { boolean } [allowFacets]
        
        @property { boolean } [allowSort]
        
        @property { string } [name]
        
         
    */

/**
        @typedef ProductListingActionPage
        
        
        @property { string } [type]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef ProductListingAction
        
        
        @property { string } [type]
        
        @property { ProductListingActionPage } [page]
        
         
    */

/**
        @typedef Media1
        
        
        @property { string } url
        
        @property { Object } [meta]
        
        @property { string } [type]
        
         
    */

/**
        @typedef GetCollectionDetailNest
        
        
        @property { Object } [badge]
        
        @property { Object } [cron]
        
        @property { Object } [schedule]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [uid]
        
        @property { ProductListingAction } [action]
        
        @property { string } [name]
        
        @property { Object } [query]
        
        @property { boolean } [isActive]
        
        @property { Object } [meta]
        
        @property { Media1 } [logo]
        
        @property { boolean } [allowSort]
        
        @property { string } [appId]
        
        @property { string } [slug]
        
        @property { string } [type]
        
        @property { ImageUrls } [banners]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [allowFacets]
        
         
    */

/**
        @typedef CollectionListingFilterTag
        
        
        @property { string } [display]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CollectionListingFilterType
        
        
        @property { string } [display]
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CollectionListingFilter
        
        
        @property { Array<CollectionListingFilterTag> } [tags]
        
        @property { Array<CollectionListingFilterType> } [type]
        
         
    */

/**
        @typedef GetCollectionListingResponse
        
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { CollectionListingFilter } [filters]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CollectionDetailResponse
        
        
        @property { string } [appId]
        
        @property { Object } [query]
        
        @property { string } [slug]
        
        @property { Object } [badge]
        
        @property { boolean } [isActive]
        
        @property { Object } [cron]
        
        @property { Object } [meta]
        
        @property { Media1 } [logo]
        
        @property { Array<string> } [tag]
        
        @property { string } [description]
        
        @property { string } [type]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [schedule]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { boolean } [allowFacets]
        
        @property { boolean } [allowSort]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CollectionItemRequest
        
        
        @property { number } pageSize
        
        @property { number } pageNo
        
         
    */

/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef Price1
        
        
        @property { number } [max]
        
        @property { number } [min]
        
        @property { string } [currencySymbol]
        
        @property { string } [currencyCode]
        
         
    */

/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [marked]
        
        @property { Price1 } [effective]
        
         
    */

/**
        @typedef ProductListingDetail
        
        
        @property { string } [color]
        
        @property { string } [description]
        
        @property { number } [rating]
        
        @property { number } [uid]
        
        @property { Array<string> } [similars]
        
        @property { boolean } [hasVariant]
        
        @property { string } [name]
        
        @property { string } [discount]
        
        @property { Object } [teaserTag]
        
        @property { boolean } [sellable]
        
        @property { Array<string> } [highlights]
        
        @property { Array<string> } [tryouts]
        
        @property { ProductListingPrice } [price]
        
        @property { Object } [promoMeta]
        
        @property { Object } [attributes]
        
        @property { Array<Media1> } [medias]
        
        @property { string } slug
        
        @property { string } [itemType]
        
        @property { string } [type]
        
        @property { string } [imageNature]
        
        @property { number } [ratingCount]
        
        @property { string } [shortDescription]
        
        @property { string } [productOnlineDate]
        
         
    */

/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [totalSizes]
        
        @property { number } [availableSizes]
        
        @property { number } [articleFreshness]
        
        @property { number } [availableArticles]
        
        @property { number } [totalArticles]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CatalogInsightItem
        
        
        @property { number } [sellableCount]
        
        @property { number } [outOfStockCount]
        
        @property { number } [count]
        
         
    */

/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightBrand } [brandDistribution]
        
        @property { CatalogInsightItem } [item]
        
         
    */

/**
        @typedef CrossSellingData
        
        
        @property { number } [products]
        
        @property { number } [articles]
        
         
    */

/**
        @typedef CrossSellingResponse
        
        
        @property { CrossSellingData } [data]
        
        @property { CatalogInsightBrand } [brandDistribution]
        
         
    */

/**
        @typedef OptInPostRequest
        
        
        @property { string } optLevel
        
        @property { Array<number> } [storeIds]
        
        @property { boolean } [enabled]
        
        @property { Array<number> } [brandIds]
        
         
    */

/**
        @typedef CompanyOptIn
        
        
        @property { string } optLevel
        
        @property { Array<number> } storeIds
        
        @property { number } modifiedOn
        
        @property { Array<number> } brandIds
        
        @property { Object } [createdBy]
        
        @property { number } createdOn
        
        @property { number } companyId
        
        @property { boolean } enabled
        
        @property { Object } [modifiedBy]
        
        @property { string } platform
        
         
    */

/**
        @typedef GetOptInPlatform
        
        
        @property { Array<CompanyOptIn> } items
        
        @property { Page } page
        
         
    */

/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [companyType]
        
        @property { string } [businessType]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [companyId]
        
        @property { number } [brandId]
        
        @property { string } [brandName]
        
        @property { number } [totalArticle]
        
         
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
        
        
        @property { string } [storeCode]
        
        @property { Array<Object> } [additionalContacts]
        
        @property { string } [modifiedOn]
        
        @property { Object } [timing]
        
        @property { string } [displayName]
        
        @property { Array<Object> } [documents]
        
        @property { string } [createdOn]
        
        @property { string } [storeType]
        
        @property { number } [companyId]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OptinStoreDetails
        
        
        @property { Array<StoreDetail> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef PTErrorResponse
        
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
         
    */

/**
        @typedef UserSerializer
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [contact]
        
         
    */

/**
        @typedef GetDepartment
        
        
        @property { Array<string> } [synonyms]
        
        @property { string } [slug]
        
        @property { string } [modifiedOn]
        
        @property { number } [priorityOrder]
        
        @property { boolean } [isActive]
        
        @property { number } [pageNo]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [itemType]
        
        @property { string } [createdOn]
        
        @property { string } [logo]
        
        @property { string } [search]
        
        @property { number } [pageSize]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef DepartmentsResponse
        
        
        @property { Array<GetDepartment> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef DepartmentErrorResponse
        
        
        @property { string } [message]
        
        @property { string } [code]
        
        @property { number } [status]
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
         
    */

/**
        @typedef ProductTemplate
        
        
        @property { string } slug
        
        @property { Array<string> } [categories]
        
        @property { string } [modifiedOn]
        
        @property { Array<string> } [departments]
        
        @property { Array<string> } [attributes]
        
        @property { boolean } [isActive]
        
        @property { boolean } isPhysical
        
        @property { Object } [createdBy]
        
        @property { boolean } [isArchived]
        
        @property { string } [createdOn]
        
        @property { string } [tag]
        
        @property { string } [logo]
        
        @property { string } [description]
        
        @property { Object } [modifiedBy]
        
        @property { string } [name]
        
         
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
        
        
        @property { string } [message]
        
        @property { MultipleCommon } [data]
        
         
    */

/**
        @typedef HSNData
        
        
        @property { Array<string> } [countryOfOrigin]
        
        @property { Array<string> } [hsnCode]
        
         
    */

/**
        @typedef HSNCodesResponse
        
        
        @property { string } [message]
        
        @property { HSNData } [data]
        
         
    */

/**
        @typedef ProductConfligurationDownloads
        
        
        @property { boolean } [multivalue]
        
        @property { Array<MultipleCommon> } [data]
        
         
    */

/**
        @typedef Hierarchy
        
        
        @property { number } l1
        
        @property { number } department
        
        @property { number } l2
        
         
    */

/**
        @typedef CategoryMappingValues
        
        
        @property { number } [catalogId]
        
        @property { string } name
        
         
    */

/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [ajio]
        
        @property { CategoryMappingValues } [facebook]
        
         
    */

/**
        @typedef Media2
        
        
        @property { string } portrait
        
        @property { string } logo
        
        @property { string } landscape
        
         
    */

/**
        @typedef CategoryRequestBody
        
        
        @property { Array<string> } [synonyms]
        
        @property { string } [slug]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<number> } departments
        
        @property { number } [priority]
        
        @property { boolean } isActive
        
        @property { number } level
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Media2 } [media]
        
        @property { string } name
        
         
    */

/**
        @typedef CategoryCreateResponse
        
        
        @property { string } [message]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef Category
        
        
        @property { Array<string> } [synonyms]
        
        @property { string } [slug]
        
        @property { string } [modifiedOn]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { Array<string> } [tryouts]
        
        @property { Array<number> } departments
        
        @property { number } [priority]
        
        @property { boolean } isActive
        
        @property { number } level
        
        @property { Object } [createdBy]
        
        @property { string } [createdOn]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Media2 } [media]
        
        @property { string } [id]
        
        @property { Object } [modifiedBy]
        
        @property { number } [uid]
        
        @property { string } name
        
         
    */

/**
        @typedef CategoryResponse
        
        
        @property { Array<Category> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef CustomOrder
        
        
        @property { boolean } [isCustomOrder]
        
        @property { number } [manufacturingTime]
        
        @property { string } [manufacturingTimeUnit]
        
         
    */

/**
        @typedef TeaserTag
        
        
        @property { string } [url]
        
        @property { string } [tag]
        
         
    */

/**
        @typedef Trader
        
        
        @property { string } address
        
        @property { string } name
        
         
    */

/**
        @typedef ProductPublish
        
        
        @property { boolean } [isSet]
        
        @property { string } [productOnlineDate]
        
         
    */

/**
        @typedef ReturnConfig
        
        
        @property { number } [time]
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
         
    */

/**
        @typedef OrderQuantity
        
        
        @property { number } [maximum]
        
        @property { boolean } [isSet]
        
        @property { number } [minimum]
        
         
    */

/**
        @typedef ProductCreateUpdate
        
        
        @property { string } countryOfOrigin
        
        @property { number } brandUid
        
        @property { string } [requester]
        
        @property { boolean } [isSet]
        
        @property { string } [description]
        
        @property { string } [changeRequestId]
        
        @property { CustomOrder } [customOrder]
        
        @property { number } [uid]
        
        @property { Object } [customJson]
        
        @property { string } name
        
        @property { TeaserTag } [teaserTag]
        
        @property { Array<string> } [highlights]
        
        @property { Array<number> } departments
        
        @property { Trader } [trader]
        
        @property { boolean } [isActive]
        
        @property { ProductPublish } [productPublish]
        
        @property { ReturnConfig } [returnConfig]
        
        @property { boolean } [isDependent]
        
        @property { number } companyId
        
        @property { boolean } [isImageLessProduct]
        
        @property { number } [noOfBoxes]
        
        @property { Array<string> } [productGroupTag]
        
        @property { Object } [variants]
        
        @property { string } slug
        
        @property { string } categorySlug
        
        @property { string } itemType
        
        @property { Array<string> } [tags]
        
        @property { Array<Media1> } [media]
        
        @property { string } currency
        
        @property { string } hsnCode
        
        @property { string } [traderType]
        
        @property { string } templateTag
        
        @property { string } [shortDescription]
        
        @property { boolean } [multiSize]
        
        @property { string } itemCode
        
        @property { OrderQuantity } [moq]
        
        @property { string } [sizeGuide]
        
         
    */

/**
        @typedef Logo
        
        
        @property { string } [url]
        
        @property { number } [aspectRatioF]
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef Brand
        
        
        @property { Logo } [logo]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef UserCommon
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef VerifiedBy
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef Attributes
        
        
        @property { string } [color]
        
        @property { string } [modifiedOn]
        
        @property { string } [verifiedOn]
        
        @property { string } [metaNature]
        
        @property { UserCommon } [createdBy]
        
        @property { string } [createdOn]
        
        @property { string } [productFit]
        
        @property { string } [sleeveLength]
        
        @property { Array<string> } [gender]
        
        @property { string } [stage]
        
        @property { string } [neckType]
        
        @property { boolean } [isImageLessProduct]
        
        @property { VerifiedBy } [verifiedBy]
        
        @property { string } [imageNature]
        
        @property { UserCommon } [modifiedBy]
        
        @property { string } [material]
        
        @property { Array<string> } [l3Mapping]
        
        @property { string } [primaryColor]
        
        @property { string } [pattern]
        
        @property { string } [essential]
        
        @property { string } [primaryMaterial]
        
         
    */

/**
        @typedef ProductPublished
        
        
        @property { boolean } [isSet]
        
        @property { number } [productOnlineDate]
        
         
    */

/**
        @typedef Product
        
        
        @property { string } [countryOfOrigin]
        
        @property { Array<string> } [allSizes]
        
        @property { boolean } [isSet]
        
        @property { string } [description]
        
        @property { Array<Object> } [sizes]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [highlights]
        
        @property { Brand } [brand]
        
        @property { Array<number> } [departments]
        
        @property { Attributes } [attributes]
        
        @property { boolean } [isActive]
        
        @property { ProductPublished } [productPublish]
        
        @property { boolean } [isDependent]
        
        @property { number } [companyId]
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { Array<string> } [images]
        
        @property { string } [categorySlug]
        
        @property { string } [itemType]
        
        @property { Array<string> } [media]
        
        @property { string } [currency]
        
        @property { string } [hsnCode]
        
        @property { string } [templateTag]
        
        @property { boolean } [multiSize]
        
        @property { string } [itemCode]
        
        @property { string } [sizeGuide]
        
         
    */

/**
        @typedef PageData
        
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [itemTotal]
        
        @property { number } [size]
        
        @property { string } [current]
        
         
    */

/**
        @typedef ProductListingResponse
        
        
        @property { Array<Product> } [items]
        
        @property { PageData } [page]
        
         
    */

/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */

/**
        @typedef UserInfo1
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [email]
        
        @property { string } [uid]
        
         
    */

/**
        @typedef BulkJob
        
        
        @property { string } [filePath]
        
        @property { string } [modifiedOn]
        
        @property { Array<Object> } [failedRecords]
        
        @property { number } [cancelled]
        
        @property { Array<Object> } [cancelledRecords]
        
        @property { string } [stage]
        
        @property { boolean } [isActive]
        
        @property { string } [templateTag]
        
        @property { UserInfo1 } [createdBy]
        
        @property { string } [trackingUrl]
        
        @property { number } [failed]
        
        @property { string } [customTemplateTag]
        
        @property { string } createdOn
        
        @property { number } companyId
        
        @property { number } [succeed]
        
        @property { UserInfo1 } [modifiedBy]
        
        @property { number } total
        
         
    */

/**
        @typedef UserDetail
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [fullName]
        
         
    */

/**
        @typedef ProductBulkRequest
        
        
        @property { string } [modifiedOn]
        
        @property { string } [stage]
        
        @property { number } [cancelled]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { number } [total]
        
        @property { boolean } [isActive]
        
        @property { string } [templateTag]
        
        @property { UserDetail } [createdBy]
        
        @property { number } [succeed]
        
        @property { number } [failed]
        
        @property { ProductTemplate } [template]
        
        @property { string } [createdOn]
        
        @property { number } [companyId]
        
        @property { string } [filePath]
        
        @property { UserDetail } [modifiedBy]
        
        @property { Array<string> } [failedRecords]
        
         
    */

/**
        @typedef ProductBulkRequestList
        
        
        @property { ProductBulkRequest } [items]
        
        @property { PageData } [page]
        
         
    */

/**
        @typedef BulkProductRequest
        
        
        @property { number } companyId
        
        @property { string } batchId
        
        @property { Array<Object> } data
        
        @property { string } templateTag
        
         
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
        @typedef ProductBulkAssets
        
        
        @property { number } [companyId]
        
        @property { string } url
        
        @property { Object } user
        
         
    */

/**
        @typedef Items
        
        
        @property { string } [modifiedOn]
        
        @property { string } [stage]
        
        @property { number } [cancelled]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { number } [total]
        
        @property { boolean } [isActive]
        
        @property { number } [succeed]
        
        @property { UserCommon } [createdBy]
        
        @property { string } [trackingUrl]
        
        @property { number } [failed]
        
        @property { string } [createdOn]
        
        @property { number } [retry]
        
        @property { number } [companyId]
        
        @property { string } [id]
        
        @property { string } [filePath]
        
        @property { UserCommon } [modifiedBy]
        
        @property { Array<string> } [failedRecords]
        
         
    */

/**
        @typedef BulkAssetResponse
        
        
        @property { Array<Items> } [items]
        
        @property { PageData } [page]
        
         
    */

/**
        @typedef SetSize
        
        
        @property { string } size
        
        @property { number } pieces
        
         
    */

/**
        @typedef SizeDistribution
        
        
        @property { Array<SetSize> } sizes
        
         
    */

/**
        @typedef InventorySet
        
        
        @property { number } [quantity]
        
        @property { SizeDistribution } sizeDistribution
        
         
    */

/**
        @typedef GTIN
        
        
        @property { boolean } [primary]
        
        @property { string } gtinType
        
        @property { string } gtinValue
        
         
    */

/**
        @typedef InvSize
        
        
        @property { string } storeCode
        
        @property { number } priceEffective
        
        @property { number } price
        
        @property { InventorySet } [set]
        
        @property { number } [priceTransfer]
        
        @property { number } [itemLength]
        
        @property { Array<GTIN> } identifiers
        
        @property { string } size
        
        @property { boolean } [isSet]
        
        @property { number } [itemHeight]
        
        @property { number } [itemWeight]
        
        @property { number } quantity
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemWidth]
        
        @property { string } currency
        
         
    */

/**
        @typedef ItemQuery
        
        
        @property { number } [brandUid]
        
        @property { string } [itemCode]
        
        @property { number } [uid]
        
         
    */

/**
        @typedef InventoryRequest
        
        
        @property { number } companyId
        
        @property { Array<InvSize> } sizes
        
        @property { ItemQuery } item
        
         
    */

/**
        @typedef InventoryRequest1
        
        
        @property { number } [pageNo]
        
        @property { string } [size]
        
        @property { string } [search]
        
        @property { number } [pageSize]
        
        @property { number } [total]
        
         
    */

/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */

/**
        @typedef BulkRequestGet
        
        
        @property { string } [startDate]
        
        @property { string } [stage]
        
        @property { string } [templateTag]
        
        @property { string } [customTemplateTag]
        
        @property { number } [pageNo]
        
        @property { string } [endDate]
        
        @property { string } [search]
        
        @property { number } [pageSize]
        
        @property { number } [total]
        
         
    */

/**
        @typedef Size1
        
        
        @property { string } storeCode
        
        @property { number } priceEffective
        
        @property { number } price
        
        @property { InventorySet } [set]
        
        @property { number } [priceTransfer]
        
        @property { number } [itemLength]
        
        @property { Array<Object> } [identifiers]
        
        @property { string } [size]
        
        @property { boolean } [isSet]
        
        @property { number } [itemHeight]
        
        @property { number } [itemWeight]
        
        @property { number } quantity
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemWidth]
        
        @property { string } sellerIdentifier
        
        @property { string } currency
        
         
    */

/**
        @typedef InventoryBulkRequest
        
        
        @property { number } companyId
        
        @property { string } batchId
        
        @property { Array<Size1> } sizes
        
        @property { Object } [user]
        
         
    */

/**
        @typedef InventoryExportRequest
        
        
        @property { string } [type]
        
        @property { Array<number> } [brand]
        
        @property { Array<number> } [store]
        
         
    */

/**
        @typedef InventoryExportJob
        
        
        @property { number } sellerId
        
        @property { string } [completedOn]
        
        @property { string } [status]
        
        @property { Object } [requestParams]
        
        @property { string } [url]
        
        @property { string } taskId
        
        @property { string } [triggerOn]
        
         
    */

/**
        @typedef FilerList
        
        
        @property { string } [display]
        
        @property { string } [value]
        
         
    */

/**
        @typedef InventoryConfig
        
        
        @property { Array<FilerList> } [data]
        
        @property { boolean } [multivalues]
        
         
    */

/**
        @typedef HsnUpsert
        
        
        @property { string } hsnCode
        
        @property { number } [uid]
        
        @property { number } [tax2]
        
        @property { boolean } isActive
        
        @property { number } [threshold2]
        
        @property { boolean } [taxOnEsp]
        
        @property { number } threshold1
        
        @property { boolean } taxOnMrp
        
        @property { number } companyId
        
        @property { number } tax1
        
        @property { string } hs2Code
        
         
    */

/**
        @typedef HsnCodesObject
        
        
        @property { string } [hsnCode]
        
        @property { number } [uid]
        
        @property { number } [tax2]
        
        @property { boolean } [isActive]
        
        @property { number } [threshold2]
        
        @property { boolean } [taxOnEsp]
        
        @property { number } [threshold1]
        
        @property { boolean } [taxOnMrp]
        
        @property { number } [companyId]
        
        @property { number } [tax1]
        
        @property { string } [hs2Code]
        
         
    */

/**
        @typedef HsnCode
        
        
        @property { HsnCodesObject } [data]
        
         
    */

/**
        @typedef PageResponse
        
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [itemTotal]
        
        @property { number } [size]
        
        @property { string } [current]
        
         
    */

/**
        @typedef HsnCodesListingResponse
        
        
        @property { Array<HsnCodesObject> } [items]
        
        @property { PageResponse } [page]
        
         
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
        @typedef Document
        
        
        @property { boolean } [verified]
        
        @property { string } [url]
        
        @property { string } value
        
        @property { string } type
        
        @property { string } legalName
        
         
    */

/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */

/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */

/**
        @typedef CompanyAddress
        
        
        @property { string } state
        
        @property { string } [countryCode]
        
        @property { string } [address2]
        
        @property { number } longitude
        
        @property { number } latitude
        
        @property { string } address1
        
        @property { string } city
        
        @property { string } country
        
        @property { number } pincode
        
        @property { string } [landmark]
        
         
    */

/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { Object } [warnings]
        
        @property { number } [uid]
        
        @property { string } name
        
        @property { boolean } [franchiseEnabled]
        
        @property { string } [businessInfo]
        
        @property { Document } document
        
        @property { Array<string> } [notificationEmails]
        
        @property { Array<number> } brands
        
        @property { ReferralInfo } [referralInfo]
        
        @property { BusinessCountryInfo } businessCountryInfo
        
        @property { CompanyAddress } address
        
        @property { string } businessType
        
         
    */

/**
        @typedef GetAddressSerializer
        
        
        @property { string } [state]
        
        @property { string } [countryCode]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { number } [latitude]
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
        @property { string } [addressType]
        
        @property { string } [landmark]
        
         
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
        @typedef SellerPhoneNumber
        
        
        @property { string } number
        
        @property { number } countryCode
        
         
    */

/**
        @typedef ContactDetails
        
        
        @property { Array<SellerPhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
    */

/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [countryCode]
        
        @property { string } [country]
        
         
    */

/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { boolean } [franchiseEnabled]
        
        @property { string } [businessInfo]
        
        @property { string } [verifiedOn]
        
        @property { string } [stage]
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } [name]
        
        @property { string } companyType
        
        @property { Object } [warnings]
        
        @property { number } uid
        
        @property { string } [createdOn]
        
        @property { BusinessDetails } [businessDetails]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { ContactDetails } [contactDetails]
        
        @property { string } businessType
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [modifiedOn]
        
        @property { Array<Document> } [documents]
        
        @property { UserSerializer } [createdBy]
        
        @property { BusinessCountryInfo1 } [businessCountryInfo]
        
         
    */

/**
        @typedef DocumentsObj
        
        
        @property { number } [pending]
        
        @property { number } [verified]
        
         
    */

/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [product]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { string } [stage]
        
        @property { DocumentsObj } [store]
        
        @property { DocumentsObj } [brand]
        
         
    */

/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [portrait]
        
        @property { string } [landscape]
        
         
    */

/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { Object } [customJson]
        
        @property { number } [uid]
        
        @property { Array<string> } [synonyms]
        
        @property { number } [companyId]
        
        @property { Object } [localeLanguage]
        
        @property { string } [description]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } logo
        
        @property { string } [brandTier]
        
        @property { string } name
        
         
    */

/**
        @typedef UserSerializer1
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [contact]
        
         
    */

/**
        @typedef GetBrandResponseSerializer
        
        
        @property { Object } [warnings]
        
        @property { Object } [customJson]
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [verifiedOn]
        
        @property { string } [logo]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [stage]
        
        @property { Object } [localeLanguage]
        
        @property { string } [description]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { string } [slugKey]
        
        @property { string } [rejectReason]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } name
        
         
    */

/**
        @typedef GetCompanySerializer
        
        
        @property { number } [uid]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [verifiedOn]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [name]
        
        @property { string } [companyType]
        
        @property { string } [businessType]
        
         
    */

/**
        @typedef CompanyBrandSerializer
        
        
        @property { Object } [warnings]
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } [verifiedOn]
        
        @property { GetCompanySerializer } [company]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { GetBrandResponseSerializer } [brand]
        
         
    */

/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<CompanyBrandSerializer> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { number } company
        
        @property { number } [uid]
        
        @property { Array<number> } brands
        
         
    */

/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [minute]
        
        @property { number } [hour]
        
         
    */

/**
        @typedef LocationDayWiseSerializer
        
        
        @property { LocationTimingSerializer } [opening]
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [closing]
        
        @property { boolean } open
        
         
    */

/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { boolean } [onSameStore]
        
        @property { number } [storeUid]
        
         
    */

/**
        @typedef LocationManagerSerializer
        
        
        @property { SellerPhoneNumber } mobileNo
        
        @property { string } [name]
        
        @property { string } [email]
        
         
    */

/**
        @typedef LocationIntegrationType
        
        
        @property { string } [order]
        
        @property { string } [inventory]
        
         
    */

/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eWaybill]
        
        @property { InvoiceCredSerializer } [eInvoice]
        
         
    */

/**
        @typedef GetLocationSerializer
        
        
        @property { GetCompanySerializer } [company]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } displayName
        
        @property { Object } [customJson]
        
        @property { string } [verifiedOn]
        
        @property { string } [stage]
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } code
        
        @property { string } [storeType]
        
        @property { GetAddressSerializer } address
        
        @property { string } name
        
        @property { Object } [warnings]
        
        @property { number } [uid]
        
        @property { string } phoneNumber
        
        @property { string } [createdOn]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { string } [modifiedOn]
        
        @property { Array<Document> } [documents]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { UserSerializer1 } [createdBy]
        
         
    */

/**
        @typedef LocationListSerializer
        
        
        @property { Array<GetLocationSerializer> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [state]
        
        @property { string } [countryCode]
        
        @property { string } [address2]
        
        @property { number } [longitude]
        
        @property { number } [latitude]
        
        @property { string } [address1]
        
        @property { string } [city]
        
        @property { string } [country]
        
        @property { number } [pincode]
        
        @property { string } [addressType]
        
        @property { string } [landmark]
        
         
    */

/**
        @typedef LocationSerializer
        
        
        @property { Object } [warnings]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { number } [uid]
        
        @property { Object } [customJson]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { number } company
        
        @property { Array<Document> } [documents]
        
        @property { string } [stage]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { GetAddressSerializer1 } address
        
        @property { string } displayName
        
        @property { Array<string> } [notificationEmails]
        
        @property { string } code
        
        @property { string } [storeType]
        
        @property { string } name
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
         
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
        
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
         
    */

/**
        @typedef StartRequest
        
        
        @property { string } fileName
        
        @property { string } contentType
        
        @property { number } size
        
        @property { Array<string> } [tags]
        
         
    */

/**
        @typedef CompleteResponse
        
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } filePath
        
        @property { string } contentType
        
        @property { string } method
        
        @property { string } namespace
        
        @property { string } operation
        
        @property { number } size
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } success
        
        @property { Array<string> } [tags]
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
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
        
        @property { number } attemptsMade
        
        @property { Array<string> } [stacktrace]
        
        @property { number } finishedOn
        
        @property { number } processedOn
        
         
    */

/**
        @typedef BulkResponse
        
        
        @property { string } trackingUrl
        
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
        
        @property { string } signedUrl
        
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
        
        @property { string } id
        
        @property { string } fileName
        
        @property { string } [operation]
        
        @property { string } namespace
        
        @property { string } contentType
        
        @property { string } filePath
        
        @property { Upload } upload
        
        @property { CDN } cdn
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
         
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
        
        @property { boolean } [forceWeb]
        
         
    */

/**
        @typedef CampaignShortLink
        
        
        @property { string } [source]
        
        @property { string } [medium]
        
         
    */

/**
        @typedef Attribution
        
        
        @property { string } [campaignCookieExpiry]
        
         
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
        
        @property { string } [expireAt]
        
        @property { boolean } [enableTracking]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [socialMediaTags]
        
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
        
        @property { string } [createdBy]
        
        @property { boolean } [appRedirect]
        
        @property { string } [fallback]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { boolean } [enableTracking]
        
        @property { string } [expireAt]
        
        @property { string } [application]
        
        @property { string } [userId]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { boolean } [personalized]
        
        @property { CampaignShortLink } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [socialMediaTags]
        
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
        
        
        @property { number } [minPrice]
        
        @property { number } [safeStock]
        
        @property { number } [periodThreshold]
        
        @property { string } [periodThresholdType]
        
        @property { Array<GenericDTO> } [periodTypeList]
        
         
    */

/**
        @typedef GenericDTO
        
        
        @property { string } [text]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef JobConfigDTO
        
        
        @property { string } integration
        
        @property { Object } [integrationData]
        
        @property { string } [companyName]
        
        @property { number } companyId
        
        @property { TaskDTO } [taskDetails]
        
        @property { DataTresholdDTO } [thresholdDetails]
        
        @property { string } [jobCode]
        
        @property { string } [alias]
        
         
    */

/**
        @typedef TaskDTO
        
        
        @property { number } [type]
        
        @property { Array<GenericDTO> } [groupList]
        
         
    */

/**
        @typedef ResponseEnvelopeString
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { string } [items]
        
        @property { string } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AWSS3config
        
        
        @property { string } [bucket]
        
        @property { string } [region]
        
        @property { string } [dir]
        
        @property { string } [accessKey]
        
        @property { string } [secretKey]
        
        @property { string } [localFilePath]
        
        @property { string } [archivePath]
        
        @property { boolean } [archive]
        
        @property { boolean } [delete]
        
        @property { boolean } [unzip]
        
        @property { string } [zipFormat]
        
        @property { string } [fileRegex]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */

/**
        @typedef ArchiveConfig
        
        
        @property { boolean } [delete]
        
        @property { boolean } [archive]
        
        @property { string } [archiveDir]
        
         
    */

/**
        @typedef Audit
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */

/**
        @typedef CatalogMasterConfig
        
        
        @property { string } [sourceSlug]
        
         
    */

/**
        @typedef CompanyConfig
        
        
        @property { number } [companyId]
        
        @property { Array<number> } [excludeSteps]
        
        @property { Array<string> } [hiddenClosetKeys]
        
        @property { Object } [openTags]
        
        @property { Array<string> } [taxIdentifiers]
        
        @property { number } [deleteQuantityThreshold]
        
         
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
        
        @property { string } [driverClass]
        
        @property { string } [jdbcUrl]
        
        @property { Object } [optionalProperties]
        
         
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
        
        @property { PropBeanDTO } [intfArticleId]
        
        @property { PropBeanDTO } [priceEffective]
        
        @property { PropBeanDTO } [quantity]
        
         
    */

/**
        @typedef DocMappingConfig
        
        
        @property { Object } [properties]
        
        @property { number } [junkDataThresholdCount]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { string } [unwindField]
        
        @property { DefaultHeadersDTO } [defaultHeaders]
        
         
    */

/**
        @typedef EmailConfig
        
        
        @property { string } [recepient]
        
        @property { string } [host]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { boolean } [unzip]
        
        @property { boolean } [readFromContent]
        
        @property { boolean } [filterBasedOnRecepients]
        
        @property { string } [pcol]
        
        @property { string } [subjectLineRegex]
        
        @property { string } [senderAddress]
        
        @property { string } [localDir]
        
        @property { Array<string> } [folderNameHierarchies]
        
        @property { string } [attachmentRegex]
        
        @property { string } [bodyContentRegex]
        
        @property { boolean } [passwordProtected]
        
        @property { string } [zipFormat]
        
        @property { boolean } [attachmentMandate]
        
        @property { boolean } [filterFilesAfterExtraction]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllUnreadMails]
        
        @property { string } [contentType]
        
        @property { boolean } [downloadableLink]
        
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
        
        @property { string } [localDir]
        
        @property { string } [remoteDir]
        
        @property { string } [zipFileRegex]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { boolean } [readAllFiles]
        
         
    */

/**
        @typedef FileConfig
        
        
        @property { string } [delimiter]
        
        @property { string } [charset]
        
        @property { Object } [properties]
        
        @property { boolean } [fileHasHeader]
        
        @property { number } [headerIndex]
        
        @property { Array<string> } [headerArray]
        
        @property { number } [dataStartIndex]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { number } [junkDataThresholdCount]
        
        @property { string } [fileType]
        
        @property { boolean } [lineValidityCheck]
        
        @property { Array<string> } [sheetNames]
        
        @property { boolean } [readAllSheets]
        
        @property { string } [quoteChar]
        
        @property { string } [escapeChar]
        
        @property { DefaultHeadersDTO } [defaultHeaders]
        
         
    */

/**
        @typedef GoogleSpreadSheetConfig
        
        
        @property { string } [range]
        
        @property { string } [sheetId]
        
        @property { string } [clientSecretLocation]
        
        @property { string } [credStorageDirectory]
        
        @property { string } [localDir]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */

/**
        @typedef HttpConfig
        
        
        @property { string } [hosturl]
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { Object } [requestParams]
        
        @property { string } [httpMethod]
        
        @property { string } [requestPayload]
        
        @property { string } [localPath]
        
        @property { ArchiveConfig } [archiveConfig]
        
         
    */

/**
        @typedef JobConfig
        
        
        @property { number } [id]
        
        @property { string } [jobCode]
        
        @property { string } [taskType]
        
        @property { number } [syncDelay]
        
        @property { string } [cronExpression]
        
        @property { StoreFilter } [storeFilter]
        
        @property { ProcessConfig } [processConfig]
        
        @property { Array<StoreConfig> } [storeConfig]
        
        @property { Object } [properties]
        
        @property { boolean } [immediateFirstRun]
        
        @property { boolean } [disable]
        
        @property { Array<string> } [dependentJobCodes]
        
        @property { Array<CompanyConfig> } [companyConfig]
        
        @property { Array<number> } [companyIds]
        
        @property { Array<string> } [taxIdentifiers]
        
        @property { string } [priority]
        
        @property { number } [periodThreshold]
        
        @property { string } [periodThresholdType]
        
        @property { DBConnectionProfile } [dbConnectionProfile]
        
        @property { Object } [params]
        
        @property { Object } [openTags]
        
        @property { number } [deleteQuantityThreshold]
        
        @property { CatalogMasterConfig } [catalogMasterConfig]
        
        @property { Array<string> } [aggregatorTypes]
        
        @property { string } [integrationType]
        
        @property { number } [minPrice]
        
        @property { Audit } [audit]
        
        @property { number } [version]
        
        @property { string } [alias]
        
         
    */

/**
        @typedef JobConfigRawDTO
        
        
        @property { string } integration
        
        @property { string } companyName
        
        @property { number } companyId
        
        @property { JobConfig } [data]
        
         
    */

/**
        @typedef JsonDocConfig
        
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
         
    */

/**
        @typedef LocalFileConfig
        
        
        @property { number } [retries]
        
        @property { number } [interval]
        
        @property { string } [localDir]
        
        @property { string } [workingDir]
        
        @property { boolean } [unzip]
        
        @property { string } [zipFileRegex]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllFiles]
        
         
    */

/**
        @typedef MongoDocConfig
        
        
        @property { string } [collectionName]
        
        @property { Object } [findQuery]
        
        @property { Object } [projectionQuery]
        
        @property { Array<PropBeanConfig> } [propBeanConfigs]
        
        @property { Array<Object> } [aggregatePipeline]
        
        @property { boolean } [skipSave]
        
         
    */

/**
        @typedef OAuthConfig
        
        
        @property { number } [limit]
        
        @property { number } [pages]
        
        @property { number } [interval]
        
        @property { string } [consumerKey]
        
        @property { string } [consumerSecret]
        
        @property { string } [token]
        
        @property { string } [tokenSecret]
        
        @property { string } [restUrl]
        
        @property { string } [restBaseUrl]
        
        @property { string } [functionName]
        
         
    */

/**
        @typedef ProcessConfig
        
        
        @property { DBConfig } [dbConfig]
        
        @property { DBParamConfig } [dbParamConfig]
        
        @property { SFTPConfig } [sftpConfig]
        
        @property { AWSS3config } [awsS3Config]
        
        @property { MongoDocConfig } [mongoDocConfig]
        
        @property { FTPConfig } [ftpConfig]
        
        @property { EmailConfig } [emailConfig]
        
        @property { FileConfig } [fileConfig]
        
        @property { JsonDocConfig } [jsonDocConfig]
        
        @property { DocMappingConfig } [docMappingConfig]
        
        @property { TaskStepConfig } [taskStepConfig]
        
        @property { HttpConfig } [httpConfig]
        
        @property { LocalFileConfig } [localFileConfig]
        
        @property { OAuthConfig } [oauthConfig]
        
        @property { GoogleSpreadSheetConfig } [googleSpreadsheetConfig]
        
         
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
        
        @property { string } [sourceField]
        
        @property { Array<string> } [sourceFields]
        
        @property { string } [destinationField]
        
        @property { string } [dataType]
        
        @property { Object } [defaultValue]
        
        @property { Object } [constValue]
        
        @property { string } [concatStr]
        
        @property { string } [functionName]
        
        @property { string } [transformerName]
        
        @property { string } [allParamFunctionName]
        
        @property { string } [subSeparator]
        
        @property { string } [indexField]
        
        @property { boolean } [ignoreIfNotExists]
        
        @property { string } [identifierType]
        
        @property { Object } [projectionQuery]
        
        @property { boolean } [enrichFromMaster]
        
         
    */

/**
        @typedef PropBeanDTO
        
        
        @property { boolean } [required]
        
        @property { boolean } [optional]
        
        @property { boolean } [include]
        
        @property { string } [sourceField]
        
        @property { Array<string> } [sourceFields]
        
        @property { string } [destinationField]
        
        @property { string } [dataType]
        
        @property { Object } [defaultValue]
        
        @property { Object } [constValue]
        
        @property { string } [concatStr]
        
        @property { string } [functionName]
        
        @property { string } [transformerName]
        
        @property { string } [allParamFunctionName]
        
        @property { string } [subSeparator]
        
        @property { string } [indexField]
        
        @property { boolean } [ignoreIfNotExists]
        
        @property { string } [identifierType]
        
        @property { Object } [projectionQuery]
        
        @property { boolean } [enrichFromMaster]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigRawDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigRawDTO> } [items]
        
        @property { Array<JobConfigRawDTO> } [payload]
        
        @property { string } [traceId]
        
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
        
        @property { string } [privateKeyPath]
        
        @property { boolean } [strictHostKeyChecking]
        
        @property { string } [localDir]
        
        @property { string } [remoteDir]
        
        @property { boolean } [passwordProtected]
        
        @property { string } [zipFileRegex]
        
        @property { string } [fileRegex]
        
        @property { string } [zipFormat]
        
        @property { ArchiveConfig } [archiveConfig]
        
        @property { boolean } [readAllFiles]
        
         
    */

/**
        @typedef Send
        
        
        @property { boolean } [raw]
        
        @property { boolean } [processed]
        
         
    */

/**
        @typedef StoreConfig
        
        
        @property { string } [jobCode]
        
        @property { string } [storeid]
        
        @property { string } [storeAlias]
        
        @property { string } [storeFileRegex]
        
        @property { string } [storeFileName]
        
        @property { ProcessConfig } [processConfig]
        
        @property { Object } [properties]
        
         
    */

/**
        @typedef StoreFilter
        
        
        @property { Array<string> } [includeTags]
        
        @property { Array<string> } [excludeTags]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef TaskConfig
        
        
        @property { string } [name]
        
        @property { number } [taskConfigId]
        
        @property { Array<TaskParam> } [taskParams]
        
         
    */

/**
        @typedef TaskParam
        
        
        @property { string } [name]
        
        @property { Object } [value]
        
         
    */

/**
        @typedef TaskStepConfig
        
        
        @property { Array<TaskConfig> } [taskConfigs]
        
        @property { Array<number> } [taskConfigIds]
        
        @property { Array<number> } [taskConfigGroupIds]
        
         
    */

/**
        @typedef ResponseEnvelopeListJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigDTO> } [items]
        
        @property { Array<JobConfigDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ResponseEnvelopeJobConfigDTO
        
        
        @property { string } [timestamp]
        
        @property { number } [status]
        
        @property { string } [error]
        
        @property { string } [exception]
        
        @property { string } [message]
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { JobConfigDTO } [items]
        
        @property { JobConfigDTO } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef JobConfigListDTO
        
        
        @property { string } [code]
        
        @property { string } [alias]
        
        @property { string } [modifiedBy]
        
        @property { string } [createdBy]
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
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
        
        @property { number } [totalTimeTakenInMillis]
        
        @property { string } [httpStatus]
        
        @property { Array<JobConfigListDTO> } [items]
        
        @property { Array<JobConfigListDTO> } [payload]
        
        @property { string } [traceId]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef ApplicationInventory
        
        
        @property { AppInventoryConfig } [inventory]
        
        @property { AuthenticationConfig } [authentication]
        
        @property { ArticleAssignmentConfig } [articleAssignment]
        
        @property { RewardPointsConfig } [rewardPoints]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { AppOrderConfig } [order]
        
        @property { AppLogisticsConfig } [logistics]
        
        @property { string } [business]
        
        @property { boolean } [commsEnabled]
        
        @property { Array<string> } [platforms]
        
        @property { string } [id]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { string } [app]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [modifiedBy]
        
         
    */

/**
        @typedef AppInventoryConfig
        
        
        @property { InventoryBrand } [brand]
        
        @property { InventoryStore } [store]
        
        @property { InventoryCategory } [category]
        
        @property { InventoryPrice } [price]
        
        @property { InventoryDiscount } [discount]
        
        @property { boolean } [outOfStock]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<any> } [excludeCategory]
        
        @property { Array<string> } [image]
        
        @property { Array<any> } [companyStore]
        
         
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
        
        @property { boolean } [postOrderReassignment]
        
        @property { Array<any> } [enforcedStores]
        
         
    */

/**
        @typedef ArticleAssignmentRules
        
        
        @property { StorePriority } [storePriority]
        
         
    */

/**
        @typedef StorePriority
        
        
        @property { boolean } [enabled]
        
        @property { Array<any> } [storetypeOrder]
        
         
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
        
        @property { boolean } [autoApply]
        
        @property { string } [strategyChannel]
        
         
    */

/**
        @typedef AppCartConfig
        
        
        @property { DeliveryCharges } [deliveryCharges]
        
        @property { boolean } [enabled]
        
        @property { number } [maxCartItems]
        
        @property { number } [minCartValue]
        
        @property { boolean } [bulkCoupons]
        
         
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
        
        
        @property { CallbackUrl } [callbackUrl]
        
        @property { Methods } [methods]
        
        @property { PaymentSelectionLock } [paymentSelectionLock]
        
        @property { string } [modeOfPayment]
        
        @property { string } [source]
        
        @property { boolean } [enabled]
        
        @property { number } [codAmountLimit]
        
        @property { number } [codCharges]
        
         
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
        
        @property { string } [defaultOptions]
        
        @property { string } [paymentIdentifier]
        
         
    */

/**
        @typedef AppOrderConfig
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [forceReassignment]
        
         
    */

/**
        @typedef AppLogisticsConfig
        
        
        @property { boolean } [logisticsBySeller]
        
        @property { boolean } [serviceabilityCheck]
        
        @property { boolean } [sameDayDelivery]
        
        @property { boolean } [dpAssignment]
        
         
    */

/**
        @typedef LoyaltyPoints
        
        
        @property { boolean } [enabled]
        
        @property { boolean } [autoApply]
        
         
    */

/**
        @typedef AppInventoryPartialUpdate
        
        
        @property { RewardPointsConfig } [rewardPoints]
        
        @property { AppCartConfig } [cart]
        
        @property { AppPaymentConfig } [payment]
        
        @property { LoyaltyPoints } [loyaltyPoints]
        
        @property { boolean } [commsEnabled]
        
         
    */

/**
        @typedef BrandCompanyInfo
        
        
        @property { string } [companyName]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef CompanyByBrandsRequest
        
        
        @property { number } brands
        
        @property { string } [searchText]
        
         
    */

/**
        @typedef CompanyByBrandsResponse
        
        
        @property { Array<BrandCompanyInfo> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef StoreByBrandsRequest
        
        
        @property { number } [companyId]
        
        @property { number } brands
        
        @property { string } [searchText]
        
         
    */

/**
        @typedef StoreByBrandsResponse
        
        
        @property { Array<BrandStoreInfo> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef BrandStoreInfo
        
        
        @property { string } [storeName]
        
        @property { number } [storeId]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { OptedStoreAddress } [storeAddress]
        
        @property { OptedCompany } [company]
        
         
    */

/**
        @typedef CompanyBrandInfo
        
        
        @property { string } [name]
        
        @property { number } [value]
        
        @property { string } [brandLogoUrl]
        
        @property { string } [brandBannerUrl]
        
        @property { string } [brandBannerPortraitUrl]
        
         
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
        
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [appName]
        
        @property { LandingImage } [landingImage]
        
        @property { SplashImage } [splashImage]
        
        @property { string } [application]
        
        @property { string } [platformType]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { string } [packageName]
        
         
    */

/**
        @typedef LandingImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef SplashImage
        
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef MobileAppConfigRequest
        
        
        @property { string } [appName]
        
        @property { LandingImage } [landingImage]
        
        @property { SplashImage } [splashImage]
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef BuildVersionHistory
        
        
        @property { BuildVersion } [versions]
        
        @property { string } [latestAvailableVersionName]
        
         
    */

/**
        @typedef BuildVersion
        
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [platformType]
        
        @property { string } [buildStatus]
        
        @property { string } [versionName]
        
        @property { number } [versionCode]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef AppSupportedCurrency
        
        
        @property { string } [id]
        
        @property { Array<string> } [supportedCurrency]
        
        @property { string } [application]
        
        @property { DefaultCurrency } [defaultCurrency]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef DefaultCurrency
        
        
        @property { string } [ref]
        
        @property { string } [code]
        
         
    */

/**
        @typedef CurrencyConfig
        
        
        @property { string } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [decimalDigits]
        
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
        
        
        @property { string } [id]
        
         
    */

/**
        @typedef UpdateDomainTypeRequest
        
        
        @property { UpdateDomain } [domain]
        
        @property { string } [action]
        
         
    */

/**
        @typedef DomainStatusRequest
        
        
        @property { string } [domainUrl]
        
         
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
        
        
        @property { string } [domainUrl]
        
        @property { boolean } [custom]
        
         
    */

/**
        @typedef DomainSuggestion
        
        
        @property { string } name
        
        @property { boolean } [unsupported]
        
        @property { boolean } isAvailable
        
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
        
        @property { string } [descriptionHtml]
        
        @property { string } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [v]
        
         
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
        
        
        @property { JsonSchema } [jsonSchema]
        
        @property { string } [browserScript]
        
         
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
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */

/**
        @typedef InventoryValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */

/**
        @typedef OrderValidator
        
        
        @property { Array<JsonSchema> } [jsonSchema]
        
        @property { string } [browserScript]
        
         
    */

/**
        @typedef IntegrationMeta
        
        
        @property { boolean } [isPublic]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef Integration
        
        
        @property { Validators } [validators]
        
        @property { string } [description]
        
        @property { string } [descriptionHtml]
        
        @property { Object } [constants]
        
        @property { Array<Object> } [companies]
        
        @property { Array<string> } [support]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { IntegrationMeta } [meta]
        
        @property { string } [icon]
        
        @property { string } [owner]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { string } [token]
        
        @property { string } [secret]
        
        @property { number } [v]
        
         
    */

/**
        @typedef IntegrationConfigResponse
        
        
        @property { IntegrationLevel } [items]
        
         
    */

/**
        @typedef IntegrationLevel
        
        
        @property { boolean } [opted]
        
        @property { Array<Object> } [permissions]
        
        @property { Array<Object> } [lastPatch]
        
        @property { string } [id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { Array<any> } [meta]
        
        @property { string } [token]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { Object } [data]
        
         
    */

/**
        @typedef OptedStoreIntegration
        
        
        @property { boolean } [otherOpted]
        
        @property { IntegrationOptIn } [otherIntegration]
        
        @property { OtherEntity } [otherEntity]
        
         
    */

/**
        @typedef OtherEntity
        
        
        @property { boolean } [opted]
        
        @property { Array<string> } [permissions]
        
        @property { LastPatch } [lastPatch]
        
        @property { string } [id]
        
        @property { string } [integration]
        
        @property { string } [level]
        
        @property { number } [uid]
        
        @property { OtherEntityData } [data]
        
        @property { Array<Object> } [meta]
        
        @property { string } [token]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef LastPatch
        
        
        @property { string } [op]
        
        @property { string } [path]
        
        @property { string } [value]
        
         
    */

/**
        @typedef OtherEntityData
        
        
        @property { string } [articleIdentifier]
        
         
    */

/**
        @typedef App
        
        
        @property { string } [companyId]
        
        @property { string } [channelType]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [name]
        
        @property { string } [desc]
        
         
    */

/**
        @typedef AppInventory
        
        
        @property { InventoryBrandRule } [brand]
        
        @property { InventoryStoreRule } [store]
        
        @property { Array<string> } [image]
        
        @property { boolean } [franchiseEnabled]
        
        @property { boolean } [outOfStock]
        
        @property { InventoryPaymentConfig } [payment]
        
        @property { InventoryArticleAssignment } [articleAssignment]
        
         
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
        
        @property { string } [companyType]
        
         
    */

/**
        @typedef StoresResponse
        
        
        @property { AppInventoryStores } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AppInventoryStores
        
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef FilterOrderingStoreRequest
        
        
        @property { boolean } [allStores]
        
        @property { Array<number> } [deployedStores]
        
        @property { string } [q]
        
         
    */

/**
        @typedef DeploymentMeta
        
        
        @property { Array<number> } [deployedStores]
        
        @property { boolean } [allStores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { number } [v]
        
         
    */

/**
        @typedef OrderingStoreConfig
        
        
        @property { DeploymentMeta } [deploymentMeta]
        
         
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
        
        @property { string } [id]
        
        @property { string } [domain]
        
        @property { OtherSellerCompany } [company]
        
        @property { string } [optType]
        
         
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
        
        @property { string } [id]
        
        @property { string } [domain]
        
        @property { OptedCompany } [company]
        
        @property { OptedInventory } [optedInventory]
        
        @property { OptOutInventory } [optOutInventory]
        
         
    */

/**
        @typedef OptedCompany
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */

/**
        @typedef OptedInventory
        
        
        @property { OptType } [optType]
        
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
        
        @property { string } [storeCode]
        
        @property { string } [id]
        
        @property { string } [modifiedOn]
        
        @property { number } [uid]
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { number } [companyId]
        
         
    */

/**
        @typedef OptOutInventory
        
        
        @property { Array<number> } store
        
        @property { Array<number> } company
        
         
    */

/**
        @typedef ProductDetailFeature
        
        
        @property { Array<string> } [similar]
        
        @property { boolean } [sellerSelection]
        
        @property { boolean } [updateProductMeta]
        
        @property { boolean } [requestProduct]
        
         
    */

/**
        @typedef LaunchPage
        
        
        @property { string } [pageType]
        
        @property { Object } [params]
        
        @property { Object } [query]
        
         
    */

/**
        @typedef LandingPageFeature
        
        
        @property { LaunchPage } [launchPage]
        
        @property { boolean } [continueAsGuest]
        
        @property { string } [loginBtnText]
        
        @property { boolean } [showDomainTextbox]
        
        @property { boolean } [showRegisterBtn]
        
         
    */

/**
        @typedef RegistrationPageFeature
        
        
        @property { boolean } [askStoreAddress]
        
         
    */

/**
        @typedef AppFeature
        
        
        @property { ProductDetailFeature } [productDetail]
        
        @property { LandingPageFeature } [landingPage]
        
        @property { RegistrationPageFeature } [registrationPage]
        
        @property { HomePageFeature } [homePage]
        
        @property { CommonFeature } [common]
        
        @property { CartFeature } [cart]
        
        @property { QrFeature } [qr]
        
        @property { PcrFeature } [pcr]
        
        @property { OrderFeature } [order]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef HomePageFeature
        
        
        @property { boolean } [orderProcessing]
        
         
    */

/**
        @typedef CommonFeature
        
        
        @property { CommunicationOptinDialogFeature } [communicationOptinDialog]
        
        @property { DeploymentStoreSelectionFeature } [deploymentStoreSelection]
        
        @property { ListingPriceFeature } [listingPrice]
        
        @property { ListingPageFeature } [listingPage]
        
        @property { CurrencyFeature } [currency]
        
        @property { RevenueEngineFeature } [revenueEngine]
        
        @property { FeedbackFeature } [feedback]
        
        @property { CompareProductsFeature } [compareProducts]
        
         
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
        
        
        @property { string } [sortOn]
        
         
    */

/**
        @typedef CurrencyFeature
        
        
        @property { Array<string> } [value]
        
        @property { string } [type]
        
        @property { string } [defaultCurrency]
        
         
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
        
        
        @property { boolean } [gstInput]
        
        @property { boolean } [staffSelection]
        
        @property { boolean } [placingForCustomer]
        
        @property { boolean } [googleMap]
        
         
    */

/**
        @typedef QrFeature
        
        
        @property { boolean } [application]
        
        @property { boolean } [products]
        
        @property { boolean } [collections]
        
         
    */

/**
        @typedef PcrFeature
        
        
        @property { boolean } [staffSelection]
        
         
    */

/**
        @typedef OrderFeature
        
        
        @property { boolean } [buyAgain]
        
         
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
        
        
        @property { string } [id]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [code]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [decimalDigits]
        
        @property { string } [symbol]
        
         
    */

/**
        @typedef Domain
        
        
        @property { boolean } [verified]
        
        @property { boolean } [isPrimary]
        
        @property { boolean } [isDefault]
        
        @property { boolean } [isShortlink]
        
        @property { string } [id]
        
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
        
        @property { string } [redirectTo]
        
        @property { string } [type]
        
         
    */

/**
        @typedef ApplicationMeta
        
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */

/**
        @typedef SecureUrl
        
        
        @property { string } [secureUrl]
        
         
    */

/**
        @typedef Application
        
        
        @property { ApplicationWebsite } [website]
        
        @property { ApplicationCors } [cors]
        
        @property { ApplicationAuth } [auth]
        
        @property { string } [description]
        
        @property { string } [channelType]
        
        @property { number } [cacheTtl]
        
        @property { boolean } [isInternal]
        
        @property { boolean } [isActive]
        
        @property { string } [id]
        
        @property { string } [name]
        
        @property { string } [owner]
        
        @property { number } [companyId]
        
        @property { string } [token]
        
        @property { Array<ApplicationRedirections> } [redirections]
        
        @property { Array<ApplicationMeta> } [meta]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
        @property { SecureUrl } [banner]
        
        @property { SecureUrl } [logo]
        
        @property { SecureUrl } [favicon]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [appType]
        
        @property { SecureUrl } [mobileLogo]
        
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
        
        
        @property { string } [modeOfPayment]
        
        @property { string } [source]
        
         
    */

/**
        @typedef StorePriorityRule
        
        
        @property { boolean } [enabled]
        
        @property { Array<string> } [storetypeOrder]
        
         
    */

/**
        @typedef ArticleAssignmentRule
        
        
        @property { StorePriorityRule } [storePriority]
        
         
    */

/**
        @typedef InventoryArticleAssignment
        
        
        @property { boolean } [postOrderReassignment]
        
        @property { Array<number> } [enforcedStores]
        
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
        
        @property { string } [addressType]
        
         
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
        
        @property { number } [countryCode]
        
        @property { string } [phone]
        
         
    */

/**
        @typedef ApplicationInformation
        
        
        @property { InformationAddress } [address]
        
        @property { InformationSupport } [support]
        
        @property { SocialLinks } [socialLinks]
        
        @property { Links } [links]
        
        @property { string } [copyrightText]
        
        @property { string } [id]
        
        @property { BusinessHighlights } [businessHighlights]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef InformationAddress
        
        
        @property { string } [loc]
        
        @property { Array<string> } [addressLine]
        
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
        
        @property { GooglePlus } [googlePlus]
        
        @property { Youtube } [youtube]
        
        @property { LinkedIn } [linkedIn]
        
        @property { Vimeo } [vimeo]
        
        @property { BlogLink } [blogLink]
        
         
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
        
        
        @property { string } [id]
        
        @property { string } [title]
        
        @property { string } [icon]
        
        @property { string } [subTitle]
        
         
    */

/**
        @typedef ApplicationDetail
        
        
        @property { string } name
        
        @property { string } description
        
        @property { SecureUrl } logo
        
        @property { SecureUrl } mobileLogo
        
        @property { SecureUrl } favicon
        
        @property { SecureUrl } banner
        
        @property { Domain } [domain]
        
        @property { Array<Domain> } [domains]
        
        @property { string } [id]
        
         
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
        
        @property { StoreLatLong } [latLong]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
        @property { string } [country]
        
        @property { string } [city]
        
         
    */

/**
        @typedef OrderingStore
        
        
        @property { OptedStoreAddress } [address]
        
        @property { string } [id]
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { string } [displayName]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { number } [pincode]
        
        @property { string } [code]
        
         
    */

/**
        @typedef OrderingStores
        
        
        @property { Page } [page]
        
        @property { Array<OrderingStore> } [items]
        
        @property { Array<number> } [deployedStores]
        
        @property { boolean } [allStores]
        
        @property { boolean } [enabled]
        
        @property { string } [type]
        
        @property { string } [id]
        
        @property { string } [app]
        
        @property { number } [v]
        
         
    */

/**
        @typedef TokenResponse
        
        
        @property { Tokens } [tokens]
        
        @property { string } [id]
        
        @property { string } [application]
        
        @property { string } [createdAt]
        
        @property { string } [updatedAt]
        
        @property { number } [v]
        
         
    */

/**
        @typedef Tokens
        
        
        @property { Firebase } [firebase]
        
        @property { Moengage } [moengage]
        
        @property { Segment } [segment]
        
        @property { Gtm } [gtm]
        
        @property { Freshchat } [freshchat]
        
        @property { Safetynet } [safetynet]
        
        @property { FyndRewards } [fyndRewards]
        
        @property { Auth } [auth]
        
        @property { GoogleMap } [googleMap]
        
         
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
        
        @property { string } [projectId]
        
        @property { string } [gcmSenderId]
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Ios
        
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Android
        
        
        @property { string } [applicationId]
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Moengage
        
        
        @property { MoengageCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef MoengageCredentials
        
        
        @property { string } [appId]
        
         
    */

/**
        @typedef Segment
        
        
        @property { SegmentCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SegmentCredentials
        
        
        @property { string } [writeKey]
        
         
    */

/**
        @typedef Gtm
        
        
        @property { GtmCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef GtmCredentials
        
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Freshchat
        
        
        @property { FreshchatCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef FreshchatCredentials
        
        
        @property { string } [appId]
        
        @property { string } [appKey]
        
        @property { string } [webToken]
        
         
    */

/**
        @typedef Safetynet
        
        
        @property { SafetynetCredentials } [credentials]
        
        @property { boolean } [enabled]
        
         
    */

/**
        @typedef SafetynetCredentials
        
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef FyndRewards
        
        
        @property { FyndRewardsCredentials } [credentials]
        
         
    */

/**
        @typedef FyndRewardsCredentials
        
        
        @property { string } [publicKey]
        
         
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
        
        
        @property { string } [apiKey]
        
         
    */

/**
        @typedef Identifier
        
        
        @property { Array<number> } [brandId]
        
        @property { Array<number> } [itemId]
        
        @property { Array<string> } [userId]
        
        @property { Array<number> } [categoryId]
        
        @property { Array<number> } [storeId]
        
        @property { Array<string> } [collectionId]
        
        @property { Array<number> } [companyId]
        
        @property { Array<string> } [articleId]
        
         
    */

/**
        @typedef Validation
        
        
        @property { string } [userRegisteredAfter]
        
        @property { Array<string> } [appId]
        
        @property { boolean } [anonymous]
        
         
    */

/**
        @typedef Rule
        
        
        @property { number } [min]
        
        @property { number } [key]
        
        @property { number } [value]
        
        @property { number } [max]
        
        @property { number } [discountQty]
        
         
    */

/**
        @typedef DisplayMetaDict
        
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
         
    */

/**
        @typedef DisplayMeta
        
        
        @property { DisplayMetaDict } [apply]
        
        @property { DisplayMetaDict } [remove]
        
        @property { string } [description]
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
        @property { DisplayMetaDict } [auto]
        
         
    */

/**
        @typedef Ownership
        
        
        @property { string } payableCategory
        
        @property { string } payableBy
        
         
    */

/**
        @typedef CouponAuthor
        
        
        @property { string } [createdBy]
        
        @property { string } [modifiedBy]
        
         
    */

/**
        @typedef CouponAction
        
        
        @property { string } [actionDate]
        
        @property { string } [txnMode]
        
         
    */

/**
        @typedef CouponDateMeta
        
        
        @property { string } [modifiedOn]
        
        @property { string } [createdOn]
        
         
    */

/**
        @typedef RuleDefinition
        
        
        @property { string } type
        
        @property { string } calculateOn
        
        @property { string } [currencyCode]
        
        @property { boolean } [isExact]
        
        @property { boolean } [autoApply]
        
        @property { string } valueType
        
        @property { Array<string> } [scope]
        
        @property { string } applicableOn
        
         
    */

/**
        @typedef State
        
        
        @property { boolean } [isDisplay]
        
        @property { boolean } [isPublic]
        
        @property { boolean } [isArchived]
        
         
    */

/**
        @typedef UsesRemaining
        
        
        @property { number } [total]
        
        @property { number } [user]
        
        @property { number } [app]
        
         
    */

/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [remaining]
        
        @property { UsesRemaining } [maximum]
        
         
    */

/**
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */

/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [types]
        
        @property { Array<string> } [codes]
        
        @property { Array<string> } [networks]
        
        @property { PaymentAllowValue } [uses]
        
         
    */

/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [card]
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [nb]
        
         
    */

/**
        @typedef PriceRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */

/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multiStoreAllowed
        
         
    */

/**
        @typedef PostOrder
        
        
        @property { boolean } [returnAllowed]
        
        @property { boolean } [cancellationAllowed]
        
         
    */

/**
        @typedef Restrictions
        
        
        @property { UsesRestriction } [uses]
        
        @property { boolean } [couponAllowed]
        
        @property { Array<string> } [platforms]
        
        @property { PaymentCodes } [payments]
        
        @property { PriceRange } [priceRange]
        
        @property { BulkBundleRestriction } [bulkBundle]
        
        @property { PostOrder } [postOrder]
        
        @property { Array<number> } [orderingStores]
        
         
    */

/**
        @typedef CouponSchedule
        
        
        @property { number } [duration]
        
        @property { Array<Object> } [nextSchedule]
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { string } [end]
        
         
    */

/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */

/**
        @typedef CouponAdd
        
        
        @property { string } typeSlug
        
        @property { Identifier } identifiers
        
        @property { Validation } [validation]
        
        @property { Array<string> } [tags]
        
        @property { string } code
        
        @property { Array<Rule> } rule
        
        @property { DisplayMeta } displayMeta
        
        @property { Ownership } ownership
        
        @property { CouponAuthor } [author]
        
        @property { CouponAction } [action]
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { RuleDefinition } ruleDefinition
        
        @property { State } [state]
        
        @property { Restrictions } [restrictions]
        
        @property { CouponSchedule } [schedule]
        
        @property { Validity } validity
        
         
    */

/**
        @typedef CouponsResponse
        
        
        @property { Page } [page]
        
        @property { CouponAdd } [items]
        
         
    */

/**
        @typedef SuccessMessage
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef OperationErrorResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */

/**
        @typedef CouponUpdate
        
        
        @property { string } typeSlug
        
        @property { Identifier } identifiers
        
        @property { Validation } [validation]
        
        @property { Array<string> } [tags]
        
        @property { string } code
        
        @property { Array<Rule> } rule
        
        @property { DisplayMeta } displayMeta
        
        @property { Ownership } ownership
        
        @property { CouponAuthor } [author]
        
        @property { CouponAction } [action]
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { RuleDefinition } ruleDefinition
        
        @property { State } [state]
        
        @property { Restrictions } [restrictions]
        
        @property { CouponSchedule } [schedule]
        
        @property { Validity } validity
        
         
    */

/**
        @typedef CouponPartialUpdate
        
        
        @property { CouponSchedule } [schedule]
        
        @property { boolean } [archive]
        
         
    */

/**
        @typedef StoreMapping
        
        
        @property { string } [enabled]
        
        @property { string } [marketplaceStoreId]
        
        @property { number } [storeId]
        
        @property { Object } [meta]
        
         
    */

/**
        @typedef AllChannels
        
        
        @property { boolean } [mkpName]
        
         
    */

/**
        @typedef MyntraPayload
        
        
        @property { string } [merchantId]
        
        @property { string } [secretKey]
        
         
    */

/**
        @typedef AmazonPayload
        
        
        @property { string } [sellerId]
        
        @property { string } [mwsAuthToken]
        
         
    */

/**
        @typedef FlipkartPayload
        
        
        @property { string } [code]
        
         
    */

/**
        @typedef TatacliqPayload
        
        
        @property { string } [userName]
        
        @property { string } [password]
        
        @property { string } [merchantId]
        
         
    */

/**
        @typedef AjioPayload
        
        
        @property { string } [username]
        
        @property { string } [password]
        
        @property { string } [clientIp]
        
         
    */

/**
        @typedef InventorySyncConfig
        
        
        @property { boolean } [inventory]
        
        @property { boolean } [price]
        
         
    */

/**
        @typedef StoreMappingPayload
        
        
        @property { boolean } [storeMappingEnabled]
        
        @property { Array<StoreMapping> } [storeMapping]
        
         
    */

/**
        @typedef StatusPayload
        
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef StatusResp
        
        
        @property { boolean } [isActive]
        
         
    */

/**
        @typedef SyncPayload
        
        
        @property { string } [modifiedSince]
        
         
    */

/**
        @typedef SyncResp
        
        
        @property { string } [message]
        
         
    */

/**
        @typedef MkpResp
        
        
        @property { string } [marketplace]
        
        @property { number } [worker]
        
        @property { string } [workerAssigned]
        
        @property { boolean } [isActive]
        
        @property { boolean } [storeMappingEnabled]
        
        @property { number } [companyId]
        
        @property { Object } [configuration]
        
        @property { Array<StoreMapping> } [storeMapping]
        
         
    */

/**
        @typedef AppUser
        
        
        @property { string } [id]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { string } [blockReason]
        
        @property { string } [updatedAt]
        
        @property { string } [updatedBy]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef E
        
        
        @property { Object } [code]
        
        @property { string } [exception]
        
        @property { string } [info]
        
        @property { string } [message]
        
        @property { string } [requestId]
        
        @property { string } [stackTrace]
        
        @property { number } [status]
        
         
    */

/**
        @typedef Giveaway
        
        
        @property { string } [id]
        
        @property { Schedule } [schedule]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { RewardsAudience } [audience]
        
        @property { Asset } [bannerImage]
        
        @property { string } [createdAt]
        
        @property { string } [description]
        
        @property { RewardsRule } [rule]
        
        @property { string } [title]
        
        @property { string } [updatedAt]
        
         
    */

/**
        @typedef GiveawayResponse
        
        
        @property { Array<Giveaway> } [items]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef HistoryPretty
        
        
        @property { string } [id]
        
        @property { string } [applicationId]
        
        @property { boolean } [claimed]
        
        @property { string } [createdAt]
        
        @property { string } [expiresOn]
        
        @property { number } [points]
        
        @property { number } [remainingPoints]
        
        @property { string } [text1]
        
        @property { string } [text2]
        
        @property { string } [text3]
        
        @property { string } [txnName]
        
        @property { string } [updatedAt]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef HistoryRes
        
        
        @property { Array<HistoryPretty> } [items]
        
        @property { Page } [page]
        
        @property { number } [points]
        
         
    */

/**
        @typedef Offer
        
        
        @property { Schedule } [schedule]
        
        @property { boolean } [active]
        
        @property { string } [applicationId]
        
        @property { Asset } [bannerImage]
        
        @property { string } [createdAt]
        
        @property { string } [name]
        
        @property { Object } [rule]
        
        @property { ShareMessages } [share]
        
        @property { string } [subText]
        
        @property { string } [text]
        
        @property { string } [type]
        
        @property { string } [updatedAt]
        
        @property { string } [updatedBy]
        
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
        
        
        @property { string } [id]
        
        @property { boolean } [active]
        
        @property { string } [createdAt]
        
        @property { Referral } [referral]
        
        @property { number } [uid]
        
        @property { string } [updatedAt]
        
        @property { string } [userBlockReason]
        
        @property { string } [userId]
        
         
    */

/**
        @typedef RewardsAudience
        
        
        @property { string } [headerUserId]
        
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
        
        
        @property { string } [propertiesCartId]
        
        @property { string } [contextTraitsFirstName]
        
        @property { string } [contextTraitsLastName]
        
        @property { string } [contextTraitsPhoneNumber]
        
        @property { string } [contextTraitsEmail]
        
        @property { string } [contextAppApplicationId]
        
        @property { string } [propertiesBreakupValuesRawTotal]
        
        @property { ReceivedAt } [receivedAt]
        
         
    */

/**
        @typedef AbandonCartsList
        
        
        @property { Array<AbandonCartsDetail> } [items]
        
        @property { string } [cartTotal]
        
        @property { Page } [page]
        
         
    */

/**
        @typedef AbandonCartDetail
        
        
        @property { string } [id]
        
        @property { string } [userId]
        
        @property { string } [cartValue]
        
        @property { Array<Object> } [articles]
        
        @property { Object } [breakup]
        
        @property { Object } [address]
        
         
    */

/**
        @typedef ExportJobReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startTime]
        
        @property { string } [endTime]
        
        @property { string } [eventType]
        
        @property { string } [traceId]
        
         
    */

/**
        @typedef ExportJobRes
        
        
        @property { string } [status]
        
        @property { string } [jobId]
        
         
    */

/**
        @typedef ExportJobStatusRes
        
        
        @property { string } [status]
        
        @property { string } [jobId]
        
        @property { string } [downloadUrl]
        
         
    */

/**
        @typedef GetLogsListReq
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startDate]
        
        @property { string } [companyId]
        
        @property { string } [endDate]
        
         
    */

/**
        @typedef MkpLogsResp
        
        
        @property { string } [startTimeIso]
        
        @property { string } [endTimeIso]
        
        @property { string } [eventType]
        
        @property { string } [traceId]
        
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
        
        
        @property { string } [marketplaceName]
        
        @property { string } [startDate]
        
        @property { string } [companyId]
        
        @property { string } [endDate]
        
        @property { string } [identifier]
        
        @property { string } [identifierValue]
        
         
    */

/**
        @typedef LogInfo
        
        
        @property { string } [id]
        
        @property { string } [status]
        
        @property { string } [eventType]
        
        @property { string } [marketplaceName]
        
        @property { string } [event]
        
        @property { string } [traceId]
        
        @property { number } [companyId]
        
        @property { number } [brandId]
        
        @property { string } [storeCode]
        
        @property { number } [storeId]
        
        @property { number } [itemId]
        
        @property { string } [articleId]
        
        @property { string } [sellerIdentifier]
        
         
    */

/**
        @typedef SearchLogRes
        
        
        @property { Array<LogInfo> } [items]
        
        @property { Page } [page]
        
         
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
    
    **/
  getConfigurations({} = {}) {
    const { error } = CatalogValidator.getConfigurations().validate(
      {},
      { abortEarly: false }
    );
    if (error) {
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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
      return new Promise(() => {
        throw error;
      });
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

module.exports = PlatformApplicationClient;
