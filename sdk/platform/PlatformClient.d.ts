export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    lead: Lead;
    communication: Communication;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    companyProfile: CompanyProfile;
    assets: Assets;
    marketplaces: Marketplaces;
    analytics: Analytics;
    application(applicationId: any): PlatformApplicationClient;
}
declare namespace PlatformClient {
    export { TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, KeyValue, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, SubmitButton, PollForAssignment, CustomForm, TicketHistory, Ticket, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, pagesSchema, availableSectionSchema, sectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, AvailablePages, Seo, Sections, Config, Preset, GlobalSchema, ListSchema, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, BlocksProps, PageSections, PageSectionsBlocks, PageSectionsBlocksProps, Predicate, Screen, PredicateUserSchema, Route, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, SendEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, AuthSuccess, SendOtpResponse, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, Mobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, Facebook, Accountkit, Google, ApplicationLegal, ApplicationLegalFAQ, SeoSchema, CustomMetaTag, Detail, StorefrontAnnouncement, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, announcementSchema, scheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, Media, Slideshow, AnnouncementsResponseSchema, AnnouncementDataSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, APIError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryByIdOrSlugSchema, Pagination, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, CustomBlogSchema, FeatureImage, CustomBlog, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBy, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, Phone, PhoneSchema, EmailSchema, ContactSchema, TagsSchema, TagSchema, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, GetActivityStatus, ActivityHistory, FailedOrders, FailOrder, MarketplaceOrder, TotalDiscountsSet, PresentmentMoney, ShopMoney, TotalPriceSet, TotalPriceSetShopMoney, TotalPriceSetPresentmentMoney, TotalTaxSet, TotalTaxSetShopMoney, TotalTaxSetPresentmentMoney, SubtotalPriceSet, SubtotalPriceSetShopMoney, SubtotalPriceSetPresentmentMoney, LineItems, LineItemsArticle, Quantities, NotAvailable, Sellable, OrderCommitted, Damaged, Manufacturer, ArticlePrice, Company, FailOrderDateMeta, MarketplaceIdentifiers, TatacliqLuxury, Dimension, Weight, Store, ArticleMeta, ArticleBrand, LineItemsArticleIdentifier, PriceSet, PriceSetShopMoney, PriceSetPresentmentMoney, TaxLines, TaxLinesPriceSet, TaxLinesPriceSetShopMoney, TaxLinesPriceSetPresentmentMoney, TotalDiscountSet, TotalDiscountSetPresentmentMoney, TotalDiscountSetShopMoney, BillingAddress, TotalShippingPriceSet, TotalShippingPriceSetShopMoney, TotalShippingPriceSetPresentmentMoney, Customer, DefaultAddress, TotalLineItemsPriceSet, TotalLineItemsPriceSetShopMoney, TotalLineItemsPriceSetPresentmentMoney, ShippingAddress, OrderListing, OrderItems, PlatformOrderUserInfo, PlatformDeliveryAddress, Channel, PlatformBreakupValues, PlatformApplication, ArticleAssignment, PlatformShipment, PlatformShipmentStatus, Bags, BagFinancialBreakup, Identifiers, BagCurrStatus, BagItem, BagItemAttributes, BagArticle, ArticleIdentifiers, Set, SetSizeDistribution, Sizes, BagArticleReturnConfig, ShipmentPrices, GstDetails, BagBreakupValues, BagCurrentStatus, BagStateMapper, BagStatus, BagStatusBagStateMapper, BagPrices, ShipmentBreakupValues, DpDetails, ShipmentInvoice, RtoAddress, StoreAddressJson, PlatformFulfillingStore, FulfillingStoreMeta, AdditionalContactDetails, Documents, Gst, ProductReturnConfig, Timing, Opening, Closing, FulfillingStoreStoreAddressJson, Payments, ShipmentGst, PlatformShipmentBrand, Promise, Timestamp, ShipmentTrackingDetails, ShipmentUser, ItemsPayments, Filters, Stages, StagesFilters, Options, NextOrderStatus, BagConfirmed, DpAssigned, ReturnBagDelivered, Placed, DeliveryDone, Pending, BagPacked, PlatformOrderPage, ItemTotal, AppliedFilters, UpdateOrderReprocessResponse, PlatformOrderTrack, GetPingResponse, UpdateShipmentStatusResponse, UpdateShipmentStatusBody, PlatformShipmentTrack, Results, UpdateProcessShipmenstRequestBody, UpdateProcessShipmenstRequestResponse, GetVoiceCallbackResponse, GetClickToCallResponse, ApefaceApiError, DeleteResponse, ErrorResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, Meta, Guide, ValidateSizeGuide, SuccessResponse, ListSizeGuide, SizeGuideResponse, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionImage, UserInfo, Schedule, CollectionBadge, SeoDetail, CollectionBanner, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, Media1, ProductListingActionPage, ProductListingAction, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, CollectionItemRequest, UpdatedResponse, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, BasePage, MultipleCommon, ProdcutTemplateCategoriesResponse, PTErrorResponse, BasePage1, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, ProductTemplate, TemplatesResponse, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductConfligurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, ProductPublish, CustomOrder, Trader, OrderQuantity, TeaserTag, ReturnConfig, ProductCreateUpdate, PageData, ProductPublished, UserCommon, VerifiedBy, Attributes, Logo, Brand, Product, ProductListingResponse, ValidateProduct, UserInfo1, BulkJob, UserDetail, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, Items, BulkAssetResponse, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, InventoryRequest1, CommonResponse, BulkRequestGet, Size1, InventoryBulkRequest, InventoryExportRequest, InventoryExportJob, FilerList, InventoryConfig, ReferralInfo, CompanyAddress, Document, BusinessCountryInfo, CompanyStoreSerializerRequest, Website, BusinessDetails, ContactDetails, GetAddressSerializer, BusinessCountryInfo1, GetCompanyProfileSerializerResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, UserSerializer1, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanyBrandPostRequestSerializer, CompanyBrandListSerializer, LocationTimingSerializer, LocationDayWiseSerializer, ProductReturnConfigSerializer, GetAddressSerializer1, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationManagerSerializer, LocationSerializer, LocationListSerializer, LocationIntegrationType, GetCompanySerializer, GetLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, PostOrder, BulkBundleRestriction, PaymentAllowValue, PaymentModes, PaymentCodes, UsesRemaining, UsesRestriction, PriceRange, Restrictions, RuleDefinition, CouponSchedule, Identifier, Ownership, Validity, CouponAction, DisplayMetaDict, DisplayMeta, CouponDateMeta, State, Validation, Rule, CouponAuthor, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, StoreMapping, AllChannels, MyntraPayload, AmazonPayload, FlipkartPayload, TatacliqPayload, AjioPayload, StoreMappingPayload, StatusPayload, StatusResp, SyncPayload, SyncResp, MkpResp, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes };
}
/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef Page
        
        
        @property { number } itemTotal
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } size
        
         
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
        
        @property { Object } [page]
        
         
    */
/**
        @typedef ResourceContent
        
        
        @property { string } [type]
        
        @property { string } [value]
        
         
    */
/**
        @typedef Asset
        
        
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
        @typedef DateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
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
        
        @property { Pagination } [page]
        
         
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
        
        @property { CreatedBy } [createdBy]
        
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
        @typedef Media
        
        
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
        @typedef GetFaqCategoryByIdOrSlugSchema
        
        
        @property { FAQCategorySchema } [category]
        
         
    */
/**
        @typedef Pagination
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
         
    */
/**
        @typedef LandingPageGetResponse
        
        
        @property { Array<Object> } [items]
        
        @property { Pagination } [page]
        
         
    */
/**
        @typedef LandingPageSchema
        
        
        @property { string } [slug]
        
        @property { Action } [action]
        
        @property { Array<string> } [platform]
        
        @property { CreatedBy } [createdBy]
        
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
        
        @property { Pagination } [page]
        
         
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
        
        @property { CreatedBy } [createdBy]
        
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
        
        @property { CreatedBy } [createdBy]
        
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
        
        @property { Object } [page]
        
         
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
        @typedef CreatedBy
        
        
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
        
        @property { Pagination } [page]
        
         
    */
/**
        @typedef SlideshowSchema
        
        
        @property { string } [id]
        
        @property { string } [slug]
        
        @property { DateMeta } [dateMeta]
        
        @property { string } [application]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Array<Media> } [media]
        
        @property { boolean } [active]
        
        @property { boolean } [archived]
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef SlideshowRequest
        
        
        @property { string } [slug]
        
        @property { string } [platform]
        
        @property { ConfigurationSchema } [configuration]
        
        @property { Media } [media]
        
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
        @typedef Phone
        
        
        @property { string } [key]
        
        @property { string } [code]
        
        @property { string } [number]
        
         
    */
/**
        @typedef PhoneSchema
        
        
        @property { boolean } [active]
        
        @property { Array<Phone> } [phone]
        
         
    */
/**
        @typedef EmailSchema
        
        
        @property { boolean } [active]
        
        @property { Array<Email> } [email]
        
         
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
        @typedef Page
        
        
        @property { string } [type]
        
        @property { number } [current]
        
        @property { number } [size]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
         
    */
/**
        @typedef PaymentGatewayConfigResponse
        
        
        @property { Array<Object> } [aggregators]
        
        @property { Array<string> } excludedFields
        
        @property { Array<string> } displayFields
        
        @property { string } appId
        
        @property { boolean } created
        
        @property { boolean } success
        
         
    */
/**
        @typedef ErrorCodeDescription
        
        
        @property { string } description
        
        @property { boolean } success
        
        @property { string } code
        
         
    */
/**
        @typedef PaymentGatewayConfig
        
        
        @property { boolean } [isActive]
        
        @property { string } key
        
        @property { string } configType
        
        @property { string } merchantSalt
        
        @property { string } secret
        
         
    */
/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { boolean } [isActive]
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
        @property { string } appId
        
         
    */
/**
        @typedef PaymentGatewayToBeReviewed
        
        
        @property { Array<string> } aggregator
        
        @property { boolean } success
        
         
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
        
        
        @property { string } [cardType]
        
        @property { boolean } [expired]
        
        @property { string } [cardId]
        
        @property { string } [name]
        
        @property { number } [expYear]
        
        @property { string } [code]
        
        @property { string } [cardReference]
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { number } [retryCount]
        
        @property { string } [cardBrand]
        
        @property { string } [cardBrandImage]
        
        @property { string } [cardNumber]
        
        @property { string } [displayName]
        
        @property { string } [cardIssuer]
        
        @property { string } [nickname]
        
        @property { string } [cardToken]
        
        @property { number } [timeout]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { string } aggregatorName
        
        @property { string } [cardName]
        
        @property { number } [expMonth]
        
        @property { string } [cardIsin]
        
        @property { string } [merchantCode]
        
        @property { number } [displayPriority]
        
        @property { string } [intentFlow]
        
        @property { string } [fyndVpa]
        
        @property { string } [cardFingerprint]
        
         
    */
/**
        @typedef RootPaymentMode
        
        
        @property { boolean } [anonymousEnable]
        
        @property { string } [aggregatorName]
        
        @property { Array<PaymentModeList> } [list]
        
        @property { number } displayPriority
        
        @property { string } displayName
        
        @property { string } name
        
        @property { boolean } [addCardEnabled]
        
         
    */
/**
        @typedef PaymentOptions
        
        
        @property { Array<RootPaymentMode> } paymentOption
        
         
    */
/**
        @typedef PaymentOptionsResponse
        
        
        @property { PaymentOptions } paymentOptions
        
        @property { boolean } success
        
         
    */
/**
        @typedef PayoutsResponse
        
        
        @property { boolean } isActive
        
        @property { Object } uniqueTransferNo
        
        @property { string } transferType
        
        @property { Object } moreAttributes
        
        @property { Object } customers
        
        @property { Array<Object> } payoutsAggregators
        
        @property { boolean } isDefault
        
         
    */
/**
        @typedef PayoutRequest
        
        
        @property { string } aggregator
        
        @property { boolean } isActive
        
        @property { Object } bankDetails
        
        @property { Object } users
        
        @property { string } transferType
        
        @property { string } uniqueExternalId
        
         
    */
/**
        @typedef PayoutResponse
        
        
        @property { string } aggregator
        
        @property { boolean } isActive
        
        @property { string } paymentStatus
        
        @property { Object } bankDetails
        
        @property { string } uniqueTransferNo
        
        @property { Object } users
        
        @property { string } transferType
        
        @property { Object } payouts
        
        @property { boolean } created
        
        @property { boolean } success
        
         
    */
/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } isActive
        
        @property { boolean } success
        
        @property { boolean } isDefault
        
         
    */
/**
        @typedef UpdatePayoutRequest
        
        
        @property { string } uniqueExternalId
        
        @property { boolean } isActive
        
        @property { boolean } isDefault
        
         
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
        
        
        @property { string } aggregator
        
        @property { Object } config
        
        @property { boolean } success
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentRequest
        
        
        @property { string } uniqueExternalId
        
         
    */
/**
        @typedef SaveSubscriptionSetupIntentResponse
        
        
        @property { Object } data
        
        @property { boolean } success
        
         
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
        
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
         
    */
/**
        @typedef SearchKeywordResult
        
        
        @property { Object } query
        
        @property { string } sortOn
        
         
    */
/**
        @typedef CreateSearchKeyword
        
        
        @property { SearchKeywordResult } result
        
        @property { string } [appId]
        
        @property { boolean } [isActive]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef GetSearchWordsData
        
        
        @property { Object } [result]
        
        @property { string } [uid]
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef Page
        
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { string } [nextPageId]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
         
    */
/**
        @typedef GetSearchWordsDetailResponse
        
        
        @property { Page } [page]
        
        @property { GetSearchWordsData } [items]
        
         
    */
/**
        @typedef GetSearchWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetSearchWordsData> } [items]
        
         
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
        @typedef AutocompleteResult
        
        
        @property { string } [display]
        
        @property { AutocompleteAction } [action]
        
        @property { Object } [customJson]
        
        @property { Media } [logo]
        
         
    */
/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { string } [appId]
        
        @property { boolean } [isActive]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [words]
        
        @property { Array<AutocompleteResult> } [results]
        
         
    */
/**
        @typedef GetAutocompleteWordsData
        
        
        @property { string } [uid]
        
        @property { string } [appId]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [words]
        
        @property { Array<Object> } [results]
        
         
    */
/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
         
    */
/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { Object } [customJson]
        
        @property { Array<string> } [words]
        
        @property { string } [appId]
        
        @property { Array<Object> } [results]
        
         
    */
/**
        @typedef ProductBundleItem
        
        
        @property { number } productUid
        
        @property { boolean } [autoAddToCart]
        
        @property { boolean } [allowRemove]
        
        @property { number } minQuantity
        
        @property { number } maxQuantity
        
        @property { boolean } [autoSelect]
        
         
    */
/**
        @typedef ProductBundleRequest
        
        
        @property { string } [modifiedOn]
        
        @property { string } slug
        
        @property { string } choice
        
        @property { Object } [createdBy]
        
        @property { Object } [meta]
        
        @property { string } [createdOn]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { string } [modifiedOn]
        
        @property { number } [companyId]
        
        @property { string } slug
        
        @property { string } choice
        
        @property { Object } [createdBy]
        
        @property { Object } [meta]
        
        @property { string } [id]
        
        @property { string } [createdOn]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
         
    */
/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { string } [modifiedOn]
        
        @property { string } slug
        
        @property { string } choice
        
        @property { Object } [meta]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } isActive
        
        @property { string } name
        
        @property { string } [logo]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef LimitedProductData
        
        
        @property { Array<string> } [sizes]
        
        @property { string } [slug]
        
        @property { Object } [identifier]
        
        @property { string } [itemCode]
        
        @property { number } [uid]
        
        @property { Array<string> } [images]
        
        @property { string } [shortDescription]
        
        @property { string } [countryOfOrigin]
        
        @property { Object } [price]
        
        @property { number } [quantity]
        
        @property { Object } [attributes]
        
        @property { string } [name]
        
         
    */
/**
        @typedef Size
        
        
        @property { string } [display]
        
        @property { number } [quantity]
        
        @property { string } [value]
        
        @property { boolean } [isAvailable]
        
         
    */
/**
        @typedef Price
        
        
        @property { number } [maxMarked]
        
        @property { number } [minMarked]
        
        @property { number } [maxEffective]
        
        @property { number } [minEffective]
        
        @property { string } [currency]
        
         
    */
/**
        @typedef GetProducts
        
        
        @property { number } [productUid]
        
        @property { LimitedProductData } [productDetails]
        
        @property { boolean } [autoAddToCart]
        
        @property { Array<Size> } [sizes]
        
        @property { boolean } [allowRemove]
        
        @property { number } [minQuantity]
        
        @property { Price } [price]
        
        @property { number } [maxQuantity]
        
        @property { boolean } [autoSelect]
        
         
    */
/**
        @typedef GetProductBundleResponse
        
        
        @property { number } [companyId]
        
        @property { string } [slug]
        
        @property { string } [choice]
        
        @property { Object } [meta]
        
        @property { Array<GetProducts> } [products]
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [logo]
        
         
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
        
        
        @property { number } [brandId]
        
        @property { number } [companyId]
        
        @property { string } [modifiedOn]
        
        @property { Object } [createdBy]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { string } title
        
        @property { string } [createdOn]
        
        @property { string } [tag]
        
        @property { string } [subtitle]
        
        @property { string } [image]
        
        @property { string } [description]
        
        @property { string } name
        
        @property { Guide } [guide]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { number } [uid]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef ListSizeGuide
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
    */
/**
        @typedef SizeGuideResponse
        
        
        @property { number } [brandId]
        
        @property { string } [modifiedOn]
        
        @property { number } [companyId]
        
        @property { Object } [createdBy]
        
        @property { boolean } [active]
        
        @property { string } [id]
        
        @property { string } [createdOn]
        
        @property { string } [title]
        
        @property { string } [tag]
        
        @property { string } [subtitle]
        
        @property { string } [name]
        
        @property { Object } [guide]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [similar]
        
        @property { Object } [detail]
        
        @property { Object } [compare]
        
        @property { Object } [variant]
        
         
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
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { string } [display]
        
        @property { Array<string> } [filterTypes]
        
        @property { string } [key]
        
        @property { Array<Object> } [units]
        
         
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
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { MetaDataListingResponse } [listing]
        
         
    */
/**
        @typedef ProductSize
        
        
        @property { number } max
        
        @property { number } min
        
         
    */
/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } key
        
        @property { ProductSize } [size]
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { number } priority
        
         
    */
/**
        @typedef ConfigurationProductSimilar
        
        
        @property { Array<ConfigurationProductConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProductVariantConfig
        
        
        @property { string } key
        
        @property { string } name
        
        @property { ProductSize } size
        
        @property { string } displayType
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { number } priority
        
         
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
        
        
        @property { string } key
        
        @property { string } [name]
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { number } priority
        
         
    */
/**
        @typedef ConfigurationListingSort
        
        
        @property { string } defaultKey
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationBucketPoints
        
        
        @property { number } [end]
        
        @property { number } [start]
        
         
    */
/**
        @typedef ConfigurationListingFilterValue
        
        
        @property { Array<ConfigurationBucketPoints> } [bucketPoints]
        
        @property { string } [value]
        
        @property { string } [sort]
        
        @property { string } [condition]
        
        @property { Object } [map]
        
         
    */
/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } key
        
        @property { string } type
        
        @property { ConfigurationListingFilterValue } [valueConfig]
        
        @property { string } [name]
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { number } priority
        
         
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
        
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { string } appId
        
        @property { ConfigurationProduct } [product]
        
        @property { ConfigurationListing } [listing]
        
         
    */
/**
        @typedef AppCatalogConfiguration
        
        
        @property { string } [configId]
        
        @property { string } [id]
        
        @property { string } configType
        
        @property { string } appId
        
        @property { ConfigurationProduct } [product]
        
        @property { ConfigurationListing } [listing]
        
         
    */
/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { AppCatalogConfiguration } [data]
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [sort]
        
        @property { Object } [filter]
        
         
    */
/**
        @typedef EntityConfiguration
        
        
        @property { string } [configId]
        
        @property { string } [id]
        
        @property { string } configType
        
        @property { string } appId
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
         
    */
/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { EntityConfiguration } [data]
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { number } [selectedMin]
        
        @property { string } value
        
        @property { number } [max]
        
        @property { number } [selectedMax]
        
        @property { string } display
        
        @property { number } [count]
        
        @property { string } [currencyCode]
        
        @property { string } [displayFormat]
        
        @property { string } [queryFormat]
        
        @property { number } [min]
        
        @property { boolean } isSelected
        
        @property { string } [currencySymbol]
        
         
    */
/**
        @typedef ProductFiltersKey
        
        
        @property { string } display
        
        @property { string } [kind]
        
        @property { string } name
        
        @property { string } [logo]
        
         
    */
/**
        @typedef ProductFilters
        
        
        @property { Array<ProductFiltersValue> } values
        
        @property { ProductFiltersKey } key
        
         
    */
/**
        @typedef ProductSortOn
        
        
        @property { boolean } [isSelected]
        
        @property { string } [name]
        
        @property { string } [value]
        
         
    */
/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
    */
/**
        @typedef CollectionImage
        
        
        @property { string } url
        
        @property { string } aspectRatio
        
         
    */
/**
        @typedef UserInfo
        
        
        @property { string } [email]
        
        @property { string } [uid]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef Schedule
        
        
        @property { string } [cron]
        
        @property { string } [end]
        
        @property { string } [start]
        
        @property { number } [duration]
        
         
    */
/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */
/**
        @typedef SeoDetail
        
        
        @property { string } [description]
        
        @property { string } [title]
        
         
    */
/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } landscape
        
        @property { CollectionImage } portrait
        
         
    */
/**
        @typedef CreateCollection
        
        
        @property { Array<string> } [tags]
        
        @property { boolean } [published]
        
        @property { string } type
        
        @property { boolean } [allowFacets]
        
        @property { CollectionImage } logo
        
        @property { UserInfo } [modifiedBy]
        
        @property { string } slug
        
        @property { UserInfo } [createdBy]
        
        @property { boolean } [allowSort]
        
        @property { Object } [localeLanguage]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [sortOn]
        
        @property { Schedule } [schedule]
        
        @property { boolean } [isActive]
        
        @property { string } name
        
        @property { CollectionBadge } [badge]
        
        @property { SeoDetail } [seo]
        
        @property { Object } [meta]
        
        @property { Object } [query]
        
        @property { string } appId
        
        @property { CollectionBanner } banners
        
        @property { Object } [customJson]
        
         
    */
/**
        @typedef BannerImage
        
        
        @property { string } [url]
        
        @property { string } [aspectRatio]
        
         
    */
/**
        @typedef ImageUrls
        
        
        @property { BannerImage } [landscape]
        
        @property { BannerImage } [portrait]
        
         
    */
/**
        @typedef CollectionCreateResponse
        
        
        @property { Object } [badge]
        
        @property { Object } [schedule]
        
        @property { string } [type]
        
        @property { string } [slug]
        
        @property { Object } [meta]
        
        @property { Object } [query]
        
        @property { string } [name]
        
        @property { string } [appId]
        
        @property { boolean } [allowSort]
        
        @property { ImageUrls } [banners]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowFacets]
        
        @property { Object } [cron]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [description]
        
        @property { BannerImage } [logo]
        
         
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
        @typedef Media1
        
        
        @property { Object } [meta]
        
        @property { string } url
        
        @property { string } [type]
        
         
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
        
        
        @property { string } [type]
        
        @property { boolean } [allowFacets]
        
        @property { Media1 } [logo]
        
        @property { string } [slug]
        
        @property { boolean } [allowSort]
        
        @property { string } [uid]
        
        @property { Array<string> } [tag]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [schedule]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { Object } [badge]
        
        @property { Object } [meta]
        
        @property { Object } [query]
        
        @property { ProductListingAction } [action]
        
        @property { string } [appId]
        
        @property { ImageUrls } [banners]
        
        @property { Object } [cron]
        
         
    */
/**
        @typedef GetCollectionListingResponse
        
        
        @property { CollectionListingFilter } [filters]
        
        @property { Page } [page]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { Object } [badge]
        
        @property { Object } [schedule]
        
        @property { string } [type]
        
        @property { string } [slug]
        
        @property { Object } [meta]
        
        @property { Object } [query]
        
        @property { string } [name]
        
        @property { string } [appId]
        
        @property { boolean } [allowSort]
        
        @property { ImageUrls } [banners]
        
        @property { Array<string> } [tag]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowFacets]
        
        @property { Object } [cron]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { string } [description]
        
        @property { Media1 } [logo]
        
         
    */
/**
        @typedef CollectionItemRequest
        
        
        @property { number } pageNo
        
        @property { number } pageSize
        
         
    */
/**
        @typedef UpdatedResponse
        
        
        @property { string } [message]
        
         
    */
/**
        @typedef Price1
        
        
        @property { string } [currencyCode]
        
        @property { number } [max]
        
        @property { number } [min]
        
        @property { string } [currencySymbol]
        
         
    */
/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [effective]
        
        @property { Price1 } [marked]
        
         
    */
/**
        @typedef ProductListingDetail
        
        
        @property { string } [productOnlineDate]
        
        @property { string } [type]
        
        @property { boolean } [sellable]
        
        @property { Object } [attributes]
        
        @property { string } [color]
        
        @property { string } slug
        
        @property { number } [uid]
        
        @property { string } [imageNature]
        
        @property { Array<string> } [highlights]
        
        @property { ProductListingPrice } [price]
        
        @property { string } [description]
        
        @property { number } [rating]
        
        @property { Array<Media1> } [medias]
        
        @property { boolean } [hasVariant]
        
        @property { string } [name]
        
        @property { Object } [promoMeta]
        
        @property { number } [ratingCount]
        
        @property { Array<string> } [similars]
        
        @property { string } [shortDescription]
        
        @property { string } [itemType]
        
        @property { Object } [teaserTag]
        
        @property { Array<string> } [tryouts]
        
        @property { string } [discount]
        
         
    */
/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Page } [page]
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Array<ProductListingDetail> } [items]
        
         
    */
/**
        @typedef CatalogInsightBrand
        
        
        @property { number } [articleFreshness]
        
        @property { number } [totalArticles]
        
        @property { number } [availableSizes]
        
        @property { number } [totalSizes]
        
        @property { number } [availableArticles]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CatalogInsightItem
        
        
        @property { number } [sellableCount]
        
        @property { number } [count]
        
        @property { number } [outOfStockCount]
        
         
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
        
        
        @property { CatalogInsightBrand } [brandDistribution]
        
        @property { CrossSellingData } [data]
        
         
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
        
        @property { number } companyId
        
        @property { number } modifiedOn
        
        @property { Object } [createdBy]
        
        @property { number } createdOn
        
        @property { Array<number> } brandIds
        
        @property { string } platform
        
        @property { Array<number> } storeIds
        
        @property { boolean } enabled
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef GetOptInPlatform
        
        
        @property { Page } page
        
        @property { Array<CompanyOptIn> } items
        
         
    */
/**
        @typedef OptinCompanyDetail
        
        
        @property { number } [uid]
        
        @property { string } [businessType]
        
        @property { string } [name]
        
        @property { string } [companyType]
        
         
    */
/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [brandId]
        
        @property { string } [brandName]
        
        @property { number } [companyId]
        
        @property { number } [totalArticle]
        
         
    */
/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandDetail> } [items]
        
         
    */
/**
        @typedef OptinCompanyMetrics
        
        
        @property { number } [brand]
        
        @property { number } [store]
        
        @property { string } [company]
        
         
    */
/**
        @typedef StoreDetail
        
        
        @property { Array<Object> } [additionalContacts]
        
        @property { string } [modifiedOn]
        
        @property { number } [companyId]
        
        @property { Object } [timing]
        
        @property { number } [uid]
        
        @property { string } [displayName]
        
        @property { string } [createdOn]
        
        @property { Array<Object> } [documents]
        
        @property { string } [storeType]
        
        @property { string } [storeCode]
        
        @property { string } [name]
        
         
    */
/**
        @typedef OptinStoreDetails
        
        
        @property { Page } [page]
        
        @property { Array<StoreDetail> } [items]
        
         
    */
/**
        @typedef BasePage
        
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
         
    */
/**
        @typedef MultipleCommon
        
        
        @property { string } [uid]
        
         
    */
/**
        @typedef ProdcutTemplateCategoriesResponse
        
        
        @property { BasePage } [page]
        
        @property { MultipleCommon } [items]
        
         
    */
/**
        @typedef PTErrorResponse
        
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
         
    */
/**
        @typedef BasePage1
        
        
        @property { string } [nextPageId]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasNext]
        
        @property { boolean } [hasPrevious]
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
        @property { string } [contact]
        
         
    */
/**
        @typedef GetDepartment
        
        
        @property { number } [pageSize]
        
        @property { string } [modifiedOn]
        
        @property { string } [slug]
        
        @property { UserSerializer } [createdBy]
        
        @property { number } [pageNo]
        
        @property { number } [uid]
        
        @property { string } [createdOn]
        
        @property { string } [itemType]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [search]
        
        @property { boolean } [isActive]
        
        @property { number } [priorityOrder]
        
        @property { string } [name]
        
        @property { string } [logo]
        
        @property { UserSerializer } [modifiedBy]
        
         
    */
/**
        @typedef DepartmentsResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<GetDepartment> } [items]
        
         
    */
/**
        @typedef DepartmentErrorResponse
        
        
        @property { Object } [meta]
        
        @property { Object } [errors]
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
         
    */
/**
        @typedef ProductTemplate
        
        
        @property { string } [modifiedOn]
        
        @property { boolean } isPhysical
        
        @property { string } slug
        
        @property { Object } [createdBy]
        
        @property { string } [createdOn]
        
        @property { string } [tag]
        
        @property { Array<string> } [departments]
        
        @property { Object } [modifiedBy]
        
        @property { boolean } [isActive]
        
        @property { Array<string> } [attributes]
        
        @property { string } [description]
        
        @property { Array<string> } [categories]
        
        @property { string } [name]
        
        @property { string } [logo]
        
        @property { boolean } [isArchived]
        
         
    */
/**
        @typedef TemplatesResponse
        
        
        @property { BasePage } [page]
        
        @property { ProductTemplate } [items]
        
         
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
        
        
        @property { Array<string> } [hsnCode]
        
        @property { Array<string> } [countryOfOrigin]
        
         
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
        @typedef Media2
        
        
        @property { string } landscape
        
        @property { string } logo
        
        @property { string } portrait
        
         
    */
/**
        @typedef CategoryMappingValues
        
        
        @property { number } [catalogId]
        
        @property { string } name
        
         
    */
/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [facebook]
        
        @property { CategoryMappingValues } [ajio]
        
        @property { CategoryMappingValues } [google]
        
         
    */
/**
        @typedef Hierarchy
        
        
        @property { number } l2
        
        @property { number } department
        
        @property { number } l1
        
         
    */
/**
        @typedef CategoryRequestBody
        
        
        @property { Array<string> } [tryouts]
        
        @property { string } [slug]
        
        @property { Array<string> } [synonyms]
        
        @property { Array<number> } departments
        
        @property { boolean } isActive
        
        @property { number } level
        
        @property { Media2 } [media]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { string } name
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { number } [priority]
        
         
    */
/**
        @typedef CategoryCreateResponse
        
        
        @property { number } [uid]
        
        @property { string } [message]
        
         
    */
/**
        @typedef Category
        
        
        @property { Array<string> } [tryouts]
        
        @property { string } [modifiedOn]
        
        @property { string } [slug]
        
        @property { Object } [createdBy]
        
        @property { number } [uid]
        
        @property { string } [createdOn]
        
        @property { Array<string> } [synonyms]
        
        @property { Array<number> } departments
        
        @property { Object } [modifiedBy]
        
        @property { string } [id]
        
        @property { boolean } isActive
        
        @property { number } level
        
        @property { Media2 } [media]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { string } name
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { number } [priority]
        
         
    */
/**
        @typedef CategoryResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<Category> } [items]
        
         
    */
/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef ProductPublish
        
        
        @property { string } [productOnlineDate]
        
        @property { boolean } [isSet]
        
         
    */
/**
        @typedef CustomOrder
        
        
        @property { number } [manufacturingTime]
        
        @property { boolean } [isCustomOrder]
        
        @property { string } [manufacturingTimeUnit]
        
         
    */
/**
        @typedef Trader
        
        
        @property { string } address
        
        @property { string } name
        
         
    */
/**
        @typedef OrderQuantity
        
        
        @property { boolean } [isSet]
        
        @property { number } [maximum]
        
        @property { number } [minimum]
        
         
    */
/**
        @typedef TeaserTag
        
        
        @property { string } [tag]
        
        @property { string } [url]
        
         
    */
/**
        @typedef ReturnConfig
        
        
        @property { boolean } [returnable]
        
        @property { string } [unit]
        
        @property { number } [time]
        
         
    */
/**
        @typedef ProductCreateUpdate
        
        
        @property { Array<string> } [tags]
        
        @property { number } companyId
        
        @property { ProductPublish } [productPublish]
        
        @property { string } [changeRequestId]
        
        @property { Array<string> } [productGroupTag]
        
        @property { boolean } [isDependent]
        
        @property { CustomOrder } [customOrder]
        
        @property { string } [sizeGuide]
        
        @property { number } [noOfBoxes]
        
        @property { Trader } [trader]
        
        @property { OrderQuantity } [moq]
        
        @property { string } slug
        
        @property { number } [uid]
        
        @property { Array<string> } [highlights]
        
        @property { Object } [variants]
        
        @property { string } hsnCode
        
        @property { boolean } [multiSize]
        
        @property { Array<Media1> } [media]
        
        @property { string } [description]
        
        @property { string } [requester]
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } categorySlug
        
        @property { Array<number> } departments
        
        @property { boolean } [isActive]
        
        @property { string } name
        
        @property { string } [traderType]
        
        @property { number } brandUid
        
        @property { string } itemCode
        
        @property { boolean } [isSet]
        
        @property { string } [shortDescription]
        
        @property { string } countryOfOrigin
        
        @property { string } itemType
        
        @property { TeaserTag } [teaserTag]
        
        @property { string } templateTag
        
        @property { Object } [customJson]
        
        @property { string } currency
        
        @property { ReturnConfig } [returnConfig]
        
         
    */
/**
        @typedef PageData
        
        
        @property { string } [current]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
         
    */
/**
        @typedef ProductPublished
        
        
        @property { number } [productOnlineDate]
        
        @property { boolean } [isSet]
        
         
    */
/**
        @typedef UserCommon
        
        
        @property { number } [companyId]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef VerifiedBy
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef Attributes
        
        
        @property { string } [pattern]
        
        @property { Array<string> } [l3Mapping]
        
        @property { string } [productFit]
        
        @property { string } [color]
        
        @property { string } [essential]
        
        @property { string } [stage]
        
        @property { UserCommon } [modifiedBy]
        
        @property { VerifiedBy } [verifiedBy]
        
        @property { string } [material]
        
        @property { string } [modifiedOn]
        
        @property { UserCommon } [createdBy]
        
        @property { string } [imageNature]
        
        @property { Array<string> } [gender]
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } [metaNature]
        
        @property { string } [sleeveLength]
        
        @property { string } [primaryColor]
        
        @property { string } [verifiedOn]
        
        @property { string } [primaryMaterial]
        
        @property { string } [createdOn]
        
        @property { string } [neckType]
        
         
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
        
        
        @property { number } [uid]
        
        @property { string } [name]
        
        @property { Logo } [logo]
        
         
    */
/**
        @typedef Product
        
        
        @property { number } [companyId]
        
        @property { ProductPublished } [productPublish]
        
        @property { boolean } [isDependent]
        
        @property { string } [sizeGuide]
        
        @property { Attributes } [attributes]
        
        @property { Array<Object> } [sizes]
        
        @property { string } [slug]
        
        @property { number } [uid]
        
        @property { string } [highlights]
        
        @property { string } [hsnCode]
        
        @property { boolean } [multiSize]
        
        @property { Array<string> } [media]
        
        @property { string } [description]
        
        @property { string } [id]
        
        @property { string } [categorySlug]
        
        @property { Array<number> } [departments]
        
        @property { boolean } [isActive]
        
        @property { string } [name]
        
        @property { string } [itemCode]
        
        @property { boolean } [isSet]
        
        @property { Array<string> } [images]
        
        @property { string } [countryOfOrigin]
        
        @property { Array<string> } [allSizes]
        
        @property { string } [itemType]
        
        @property { Brand } [brand]
        
        @property { string } [templateTag]
        
        @property { string } [currency]
        
         
    */
/**
        @typedef ProductListingResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Product> } [items]
        
         
    */
/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */
/**
        @typedef UserInfo1
        
        
        @property { string } [email]
        
        @property { string } [uid]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef BulkJob
        
        
        @property { number } total
        
        @property { string } [modifiedOn]
        
        @property { number } companyId
        
        @property { UserInfo1 } [createdBy]
        
        @property { number } [failed]
        
        @property { string } [filePath]
        
        @property { string } [customTemplateTag]
        
        @property { string } createdOn
        
        @property { Array<Object> } [cancelledRecords]
        
        @property { Array<Object> } [failedRecords]
        
        @property { string } [templateTag]
        
        @property { boolean } [isActive]
        
        @property { string } [trackingUrl]
        
        @property { number } [succeed]
        
        @property { string } [stage]
        
        @property { UserInfo1 } [modifiedBy]
        
        @property { number } [cancelled]
        
         
    */
/**
        @typedef UserDetail
        
        
        @property { string } [fullName]
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef ProductBulkRequest
        
        
        @property { number } [total]
        
        @property { number } [companyId]
        
        @property { string } [modifiedOn]
        
        @property { UserDetail } [createdBy]
        
        @property { number } [failed]
        
        @property { string } [filePath]
        
        @property { string } [createdOn]
        
        @property { ProductTemplate } [template]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { Array<string> } [failedRecords]
        
        @property { string } [templateTag]
        
        @property { boolean } [isActive]
        
        @property { number } [succeed]
        
        @property { string } [stage]
        
        @property { UserDetail } [modifiedBy]
        
        @property { number } [cancelled]
        
         
    */
/**
        @typedef ProductBulkRequestList
        
        
        @property { PageData } [page]
        
        @property { ProductBulkRequest } [items]
        
         
    */
/**
        @typedef BulkProductRequest
        
        
        @property { string } templateTag
        
        @property { number } companyId
        
        @property { string } batchId
        
        @property { Array<Object> } data
        
         
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
        
        
        @property { Object } user
        
        @property { string } url
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef Items
        
        
        @property { number } [total]
        
        @property { string } [filePath]
        
        @property { string } [modifiedOn]
        
        @property { UserCommon } [createdBy]
        
        @property { number } [failed]
        
        @property { number } [retry]
        
        @property { number } [companyId]
        
        @property { string } [id]
        
        @property { string } [createdOn]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { Array<string> } [failedRecords]
        
        @property { boolean } [isActive]
        
        @property { string } [trackingUrl]
        
        @property { number } [succeed]
        
        @property { string } [stage]
        
        @property { UserCommon } [modifiedBy]
        
        @property { number } [cancelled]
        
         
    */
/**
        @typedef BulkAssetResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Items> } [items]
        
         
    */
/**
        @typedef ItemQuery
        
        
        @property { number } [uid]
        
        @property { string } [itemCode]
        
        @property { number } [brandUid]
        
         
    */
/**
        @typedef GTIN
        
        
        @property { boolean } [primary]
        
        @property { string } gtinValue
        
        @property { string } gtinType
        
         
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
        
        
        @property { SizeDistribution } sizeDistribution
        
        @property { number } [quantity]
        
         
    */
/**
        @typedef InvSize
        
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { number } [itemHeight]
        
        @property { Array<GTIN> } identifiers
        
        @property { boolean } [isSet]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemLength]
        
        @property { number } [itemWeight]
        
        @property { number } price
        
        @property { number } [itemWidth]
        
        @property { number } quantity
        
        @property { string } storeCode
        
        @property { number } [priceTransfer]
        
        @property { string } currency
        
        @property { InventorySet } [set]
        
        @property { string } size
        
        @property { number } priceEffective
        
         
    */
/**
        @typedef InventoryRequest
        
        
        @property { ItemQuery } item
        
        @property { number } companyId
        
        @property { Array<InvSize> } sizes
        
         
    */
/**
        @typedef InventoryRequest1
        
        
        @property { number } [pageSize]
        
        @property { number } [total]
        
        @property { number } [pageNo]
        
        @property { string } [search]
        
        @property { string } [size]
        
         
    */
/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */
/**
        @typedef BulkRequestGet
        
        
        @property { number } [pageSize]
        
        @property { number } [total]
        
        @property { string } [customTemplateTag]
        
        @property { number } [pageNo]
        
        @property { string } [startDate]
        
        @property { string } [endDate]
        
        @property { string } [templateTag]
        
        @property { string } [stage]
        
        @property { string } [search]
        
         
    */
/**
        @typedef Size1
        
        
        @property { string } [itemWeightUnitOfMeasure]
        
        @property { number } [itemHeight]
        
        @property { Array<Object> } [identifiers]
        
        @property { boolean } [isSet]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemLength]
        
        @property { number } [itemWeight]
        
        @property { number } price
        
        @property { number } [itemWidth]
        
        @property { number } quantity
        
        @property { string } storeCode
        
        @property { number } [priceTransfer]
        
        @property { string } currency
        
        @property { InventorySet } [set]
        
        @property { string } sellerIdentifier
        
        @property { string } [size]
        
        @property { number } priceEffective
        
         
    */
/**
        @typedef InventoryBulkRequest
        
        
        @property { Object } [user]
        
        @property { number } companyId
        
        @property { Array<Size1> } sizes
        
        @property { string } batchId
        
         
    */
/**
        @typedef InventoryExportRequest
        
        
        @property { Array<number> } [brand]
        
        @property { Array<number> } [store]
        
        @property { string } [type]
        
         
    */
/**
        @typedef InventoryExportJob
        
        
        @property { string } taskId
        
        @property { number } sellerId
        
        @property { string } [triggerOn]
        
        @property { string } [completedOn]
        
        @property { Object } [requestParams]
        
        @property { string } [url]
        
        @property { string } [status]
        
         
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
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */
/**
        @typedef CompanyAddress
        
        
        @property { string } [address2]
        
        @property { number } latitude
        
        @property { string } [landmark]
        
        @property { number } pincode
        
        @property { number } longitude
        
        @property { string } state
        
        @property { string } country
        
        @property { string } [countryCode]
        
        @property { string } address1
        
        @property { string } city
        
         
    */
/**
        @typedef Document
        
        
        @property { string } type
        
        @property { string } legalName
        
        @property { string } value
        
        @property { string } [url]
        
        @property { boolean } [verified]
        
         
    */
/**
        @typedef BusinessCountryInfo
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { Array<number> } brands
        
        @property { boolean } [franchiseEnabled]
        
        @property { ReferralInfo } [referralInfo]
        
        @property { string } name
        
        @property { Object } [warnings]
        
        @property { CompanyAddress } address
        
        @property { string } businessType
        
        @property { Array<string> } [notificationEmails]
        
        @property { number } [uid]
        
        @property { Document } document
        
        @property { string } [businessInfo]
        
        @property { BusinessCountryInfo } businessCountryInfo
        
         
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
        @typedef ContactDetails
        
        
        @property { Array<PhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
    */
/**
        @typedef GetAddressSerializer
        
        
        @property { string } [address2]
        
        @property { number } [latitude]
        
        @property { string } [landmark]
        
        @property { number } [pincode]
        
        @property { number } [longitude]
        
        @property { string } [country]
        
        @property { string } [addressType]
        
        @property { string } [state]
        
        @property { string } [countryCode]
        
        @property { string } [address1]
        
        @property { string } [city]
        
         
    */
/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { string } [modifiedOn]
        
        @property { string } companyType
        
        @property { BusinessDetails } [businessDetails]
        
        @property { Array<Document> } [documents]
        
        @property { Array<string> } [notificationEmails]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [createdOn]
        
        @property { Object } [warnings]
        
        @property { string } [verifiedOn]
        
        @property { string } businessType
        
        @property { UserSerializer } [verifiedBy]
        
        @property { ContactDetails } [contactDetails]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { number } uid
        
        @property { string } [businessInfo]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [name]
        
        @property { string } [stage]
        
        @property { BusinessCountryInfo1 } [businessCountryInfo]
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [verified]
        
        @property { number } [pending]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [brand]
        
        @property { string } [stage]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [store]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [contact]
        
        @property { string } [username]
        
        @property { string } [userId]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { string } [modifiedOn]
        
        @property { BrandBannerSerializer } [banner]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [logo]
        
        @property { Object } [customJson]
        
        @property { string } [createdOn]
        
        @property { string } name
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
        @property { Object } [warnings]
        
        @property { string } [verifiedOn]
        
        @property { string } [description]
        
        @property { string } [slugKey]
        
        @property { Object } [localeLanguage]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { UserSerializer1 } [modifiedBy]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { BrandBannerSerializer } [banner]
        
        @property { Array<string> } [synonyms]
        
        @property { string } logo
        
        @property { Object } [customJson]
        
        @property { number } [companyId]
        
        @property { string } [brandTier]
        
        @property { string } name
        
        @property { Object } [localeLanguage]
        
        @property { string } [description]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { Array<number> } brands
        
        @property { number } company
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef LocationDayWiseSerializer
        
        
        @property { LocationTimingSerializer } [opening]
        
        @property { LocationTimingSerializer } [closing]
        
        @property { string } weekday
        
        @property { boolean } open
        
         
    */
/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { number } [storeUid]
        
        @property { boolean } [onSameStore]
        
         
    */
/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [address2]
        
        @property { number } [latitude]
        
        @property { string } [landmark]
        
        @property { number } [pincode]
        
        @property { number } [longitude]
        
        @property { string } [country]
        
        @property { string } [addressType]
        
        @property { string } [state]
        
        @property { string } [countryCode]
        
        @property { string } [address1]
        
        @property { string } [city]
        
         
    */
/**
        @typedef InvoiceCredSerializer
        
        
        @property { string } [username]
        
        @property { boolean } [enabled]
        
        @property { string } [password]
        
         
    */
/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eWaybill]
        
        @property { InvoiceCredSerializer } [eInvoice]
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [email]
        
        @property { PhoneNumber } mobileNo
        
        @property { string } [name]
        
         
    */
/**
        @typedef LocationSerializer
        
        
        @property { Object } [customJson]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { number } company
        
        @property { string } name
        
        @property { string } [stage]
        
        @property { string } code
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { string } displayName
        
        @property { string } [storeType]
        
        @property { Array<Document> } [documents]
        
        @property { GetAddressSerializer1 } address
        
        @property { Array<string> } [notificationEmails]
        
        @property { number } [uid]
        
        @property { Object } [warnings]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { LocationManagerSerializer } [manager]
        
         
    */
/**
        @typedef LocationListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { string } [modifiedOn]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [createdOn]
        
        @property { string } [companyType]
        
        @property { string } [name]
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
        @property { string } [verifiedOn]
        
        @property { string } [businessType]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { number } [uid]
        
        @property { UserSerializer } [createdBy]
        
        @property { UserSerializer } [modifiedBy]
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { string } [modifiedOn]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { Array<Document> } [documents]
        
        @property { Array<string> } [notificationEmails]
        
        @property { UserSerializer1 } [createdBy]
        
        @property { string } [createdOn]
        
        @property { string } code
        
        @property { Object } [warnings]
        
        @property { string } [verifiedOn]
        
        @property { string } [storeType]
        
        @property { GetAddressSerializer } address
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } phoneNumber
        
        @property { Array<PhoneNumber> } [contactNumbers]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Object } [customJson]
        
        @property { GetCompanySerializer } [company]
        
        @property { string } displayName
        
        @property { number } [uid]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { string } name
        
        @property { string } [stage]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
         
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
        @typedef Page
        
        
        @property { number } current
        
        @property { number } itemTotal
        
        @property { number } type
        
        @property { boolean } hasNext
        
        @property { number } [size]
        
         
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
        
        @property { Campaign } [campaign]
        
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
        
        @property { Campaign } [campaign]
        
        @property { Redirects } [redirects]
        
        @property { Attribution } [attribution]
        
        @property { SocialMediaTags } [socialMediaTags]
        
        @property { number } [count]
        
         
    */
/**
        @typedef Page
        
        
        @property { number } itemTotal
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } size
        
         
    */
/**
        @typedef ShortLinkList
        
        
        @property { Array<ShortLinkRes> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef PostOrder
        
        
        @property { boolean } [cancellationAllowed]
        
        @property { boolean } [returnAllowed]
        
         
    */
/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multiStoreAllowed
        
         
    */
/**
        @typedef PaymentAllowValue
        
        
        @property { number } [max]
        
         
    */
/**
        @typedef PaymentModes
        
        
        @property { Array<string> } [codes]
        
        @property { PaymentAllowValue } [uses]
        
        @property { Array<string> } [networks]
        
        @property { Array<string> } [types]
        
         
    */
/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [ps]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [card]
        
        @property { PaymentModes } [nb]
        
        @property { PaymentModes } [pl]
        
         
    */
/**
        @typedef UsesRemaining
        
        
        @property { number } [app]
        
        @property { number } [total]
        
        @property { number } [user]
        
         
    */
/**
        @typedef UsesRestriction
        
        
        @property { UsesRemaining } [maximum]
        
        @property { UsesRemaining } [remaining]
        
         
    */
/**
        @typedef PriceRange
        
        
        @property { number } [max]
        
        @property { number } [min]
        
         
    */
/**
        @typedef Restrictions
        
        
        @property { PostOrder } [postOrder]
        
        @property { Array<string> } [platforms]
        
        @property { boolean } [couponAllowed]
        
        @property { BulkBundleRestriction } [bulkBundle]
        
        @property { PaymentCodes } [payments]
        
        @property { Array<number> } [orderingStores]
        
        @property { UsesRestriction } [uses]
        
        @property { PriceRange } [priceRange]
        
         
    */
/**
        @typedef RuleDefinition
        
        
        @property { string } applicableOn
        
        @property { boolean } [isExact]
        
        @property { string } [currencyCode]
        
        @property { Array<string> } [scope]
        
        @property { string } valueType
        
        @property { string } type
        
        @property { boolean } [autoApply]
        
        @property { string } calculateOn
        
         
    */
/**
        @typedef CouponSchedule
        
        
        @property { string } [end]
        
        @property { string } [cron]
        
        @property { string } [start]
        
        @property { Array<Object> } [nextSchedule]
        
        @property { number } [duration]
        
         
    */
/**
        @typedef Identifier
        
        
        @property { Array<string> } [articleId]
        
        @property { Array<number> } [storeId]
        
        @property { Array<number> } [brandId]
        
        @property { Array<string> } [collectionId]
        
        @property { Array<number> } [companyId]
        
        @property { Array<string> } [userId]
        
        @property { Array<number> } [categoryId]
        
        @property { Array<number> } [itemId]
        
         
    */
/**
        @typedef Ownership
        
        
        @property { string } payableBy
        
        @property { string } payableCategory
        
         
    */
/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */
/**
        @typedef CouponAction
        
        
        @property { string } [txnMode]
        
        @property { string } [actionDate]
        
         
    */
/**
        @typedef DisplayMetaDict
        
        
        @property { string } [subtitle]
        
        @property { string } [title]
        
         
    */
/**
        @typedef DisplayMeta
        
        
        @property { string } [subtitle]
        
        @property { string } [description]
        
        @property { DisplayMetaDict } [apply]
        
        @property { string } [title]
        
        @property { DisplayMetaDict } [remove]
        
        @property { DisplayMetaDict } [auto]
        
         
    */
/**
        @typedef CouponDateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef State
        
        
        @property { boolean } [isDisplay]
        
        @property { boolean } [isArchived]
        
        @property { boolean } [isPublic]
        
         
    */
/**
        @typedef Validation
        
        
        @property { Array<string> } [appId]
        
        @property { string } [userRegisteredAfter]
        
        @property { boolean } [anonymous]
        
         
    */
/**
        @typedef Rule
        
        
        @property { number } [min]
        
        @property { number } [discountQty]
        
        @property { number } [value]
        
        @property { number } [key]
        
        @property { number } [max]
        
         
    */
/**
        @typedef CouponAuthor
        
        
        @property { string } [modifiedBy]
        
        @property { string } [createdBy]
        
         
    */
/**
        @typedef CouponAdd
        
        
        @property { Restrictions } [restrictions]
        
        @property { string } code
        
        @property { RuleDefinition } ruleDefinition
        
        @property { CouponSchedule } [schedule]
        
        @property { string } typeSlug
        
        @property { Identifier } identifiers
        
        @property { Ownership } ownership
        
        @property { Validity } validity
        
        @property { CouponAction } [action]
        
        @property { Array<string> } [tags]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { State } [state]
        
        @property { Validation } [validation]
        
        @property { Array<Rule> } rule
        
        @property { CouponAuthor } [author]
        
         
    */
/**
        @typedef CouponsResponse
        
        
        @property { Pagination } [page]
        
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
        
        
        @property { Restrictions } [restrictions]
        
        @property { string } code
        
        @property { RuleDefinition } ruleDefinition
        
        @property { CouponSchedule } [schedule]
        
        @property { string } typeSlug
        
        @property { Identifier } identifiers
        
        @property { Ownership } ownership
        
        @property { Validity } validity
        
        @property { CouponAction } [action]
        
        @property { Array<string> } [tags]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { State } [state]
        
        @property { Validation } [validation]
        
        @property { Array<Rule> } rule
        
        @property { CouponAuthor } [author]
        
         
    */
/**
        @typedef CouponPartialUpdate
        
        
        @property { boolean } [archive]
        
        @property { CouponSchedule } [schedule]
        
         
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
        @typedef Page
        
        
        @property { number } itemTotal
        
        @property { string } [nextId]
        
        @property { boolean } [hasPrevious]
        
        @property { boolean } [hasNext]
        
        @property { number } [current]
        
        @property { string } type
        
        @property { number } size
        
         
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
declare class Lead {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * @description: Gets the list of company level tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getTickets({ items, filters, q, status, priority, category, pageNo, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Gets the list of company level tickets and/or ticket filters depending on query params
      * @description: Gets the list of company level tickets and/or ticket filters
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.items] - Decides that the reponse will contain the list of tickets
      * @param {boolean} [arg.filters] - Decides that the reponse will contain the ticket filters
      * @param {string} [arg.q] - Search through ticket titles and description
      * @param {string} [arg.status] - Filter tickets on status
      * @param {string} [arg.priority] - Filter tickets on priority
      * @param {string} [arg.category] - Filter tickets on category
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getTicketsPaginator({ items, filters, q, status, priority, category, pageSize, }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Creates a company level ticket
     * @description: Creates a company level ticket
     * @param {Object} arg - arg object.
     * @param {AddTicketPayload} arg.body
     **/
    createTicket({ body }?: {
        body: AddTicketPayload;
    }): any;
    /**
      *
      * @summary: Retreives ticket details of a company level ticket with ticket ID
      * @description: Retreives ticket details of a company level ticket
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
      
      **/
    getTicket({ ticketId }?: {
        ticketId: string;
    }): any;
    /**
     *
     * @summary: Edits ticket details of a company level ticket
     * @description: Edits ticket details of a company level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID of ticket to be edited
     * @param {EditTicketPayload} arg.body
     **/
    editTicket({ ticketId, body }?: {
        ticketId: string;
        body: EditTicketPayload;
    }): any;
    /**
     *
     * @summary: Create history for specific company level ticket
     * @description: Create history for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
     * @param {Object} arg - arg object.
     * @param {string} arg.ticketId - Ticket ID for which history is created
     * @param {TicketHistoryPayload} arg.body
     **/
    createHistory({ ticketId, body }?: {
        ticketId: string;
        body: TicketHistoryPayload;
    }): any;
    /**
      *
      * @summary: Gets history list for specific company level ticket
      * @description: Gets history list for specific company level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
      
      **/
    getTicketHistory({ ticketId }?: {
        ticketId: string;
    }): any;
}
declare class Communication {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get system notifications
      * @description: Get system notifications
      * @param {Object} arg - arg object.
      * @param {Object} [arg.query] -
      * @param {number} [arg.pageNo] -
      * @param {number} [arg.pageSize] -
      
      **/
    getSystemNotifications({ query, pageNo, pageSize }?: {
        query?: any;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get system notifications
      * @description: Get system notifications
      * @param {Object} arg - arg object.
      * @param {Object} [arg.query] -
      * @param {number} [arg.pageSize] -
      
      **/
    getSystemNotificationsPaginator({ query, pageSize }?: {
        query?: any;
        pageSize?: number;
    }): Paginator;
}
declare class Payment {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get All Payouts
      * @description: Get All Payouts
      * @param {Object} arg - arg object.
      * @param {string} [arg.uniqueExternalId] - Fetch payouts using unique external id
      
      **/
    getAllPayouts({ uniqueExternalId }?: {
        uniqueExternalId?: string;
    }): any;
    /**
     *
     * @summary: Save Payout
     * @description: Save Payout
     * @param {Object} arg - arg object.
     * @param {PayoutRequest} arg.body
     **/
    savePayout({ body }?: {
        body: PayoutRequest;
    }): any;
    /**
     *
     * @summary: Update Payout
     * @description: Update Payout
     * @param {Object} arg - arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {PayoutRequest} arg.body
     **/
    updatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: PayoutRequest;
    }): any;
    /**
     *
     * @summary: Partial Update Payout
     * @description: Partial Update Payout
     * @param {Object} arg - arg object.
     * @param {string} arg.uniqueTransferNo - Unique transfer id
     * @param {UpdatePayoutRequest} arg.body
     **/
    activateAndDectivatePayout({ uniqueTransferNo, body }?: {
        uniqueTransferNo: string;
        body: UpdatePayoutRequest;
    }): any;
    /**
      *
      * @summary: Delete Payout
      * @description: Delete Payout
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueTransferNo - Unique transfer id
      
      **/
    deletePayout({ uniqueTransferNo }?: {
        uniqueTransferNo: string;
    }): any;
    /**
      *
      * @summary: List Subscription Payment Method
      * @description: Get all  Subscription  Payment Method
      * @param {Object} arg - arg object.
      
      **/
    getSubscriptionPaymentMethod({}?: any): any;
    /**
      *
      * @summary: Delete Subscription Payment Method
      * @description: Uses this api to Delete Subscription Payment Method
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueExternalId -
      * @param {string} arg.paymentMethodId -
      
      **/
    deleteSubscriptionPaymentMethod({ uniqueExternalId, paymentMethodId }?: {
        uniqueExternalId: string;
        paymentMethodId: string;
    }): any;
    /**
      *
      * @summary: List Subscription Config
      * @description: Get all  Subscription Config details
      * @param {Object} arg - arg object.
      
      **/
    getSubscriptionConfig({}?: any): any;
    /**
     *
     * @summary: Save Subscription Setup Intent
     * @description: Uses this api to Save Subscription Setup Intent
     * @param {Object} arg - arg object.
     * @param {SaveSubscriptionSetupIntentRequest} arg.body
     **/
    saveSubscriptionSetupIntent({ body }?: {
        body: SaveSubscriptionSetupIntentRequest;
    }): any;
}
declare class Order {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Update status of Shipment
     * @description: Update Shipment Status
     * @param {Object} arg - arg object.
     * @param {UpdateShipmentStatusBody} arg.body
     **/
    shipmentStatusUpdate({ body }?: {
        body: UpdateShipmentStatusBody;
    }): any;
    /**
      *
      * @summary: Get Activity Status
      * @description: Get Activity Status
      * @param {Object} arg - arg object.
      * @param {string} arg.bagId - Bag Id
      
      **/
    activityStatus({ bagId }?: {
        bagId: string;
    }): any;
    /**
     *
     * @summary: Update Store Process-Shipment
     * @description: Update Store Process-Shipment
     * @param {Object} arg - arg object.
     * @param {UpdateProcessShipmenstRequestBody} arg.body
     **/
    storeProcessShipmentUpdate({ body }?: {
        body: UpdateProcessShipmenstRequestBody;
    }): any;
    /**
      *
      * @summary: Get Orders for company based on Company Id
      * @description: Get Orders
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageNo] - Current page number
      * @param {string} [arg.pageSize] - Page limit
      * @param {string} [arg.fromDate] - From Date
      * @param {string} [arg.toDate] - To Date
      * @param {string} [arg.q] - Keyword for Search
      * @param {string} [arg.stage] - Specefic Order Stage
      * @param {string} [arg.salesChannels] - Selected Sales Channel
      * @param {string} [arg.orderId] - Order Id
      * @param {string} [arg.stores] - Selected Stores
      * @param {string} [arg.status] - Status of order
      * @param {boolean} [arg.shortenUrls] - Shorten URL option
      * @param {string} [arg.filterType] - Filters
      
      **/
    getOrdersByCompanyId({ pageNo, pageSize, fromDate, toDate, q, stage, salesChannels, orderId, stores, status, shortenUrls, filterType, }?: {
        pageNo?: string;
        pageSize?: string;
        fromDate?: string;
        toDate?: string;
        q?: string;
        stage?: string;
        salesChannels?: string;
        orderId?: string;
        stores?: string;
        status?: string;
        shortenUrls?: boolean;
        filterType?: string;
    }): any;
    /**
      *
      * @summary: Get Ping
      * @description: Get Ping
      * @param {Object} arg - arg object.
      
      **/
    getPing({}?: any): any;
    /**
      *
      * @summary: Get Voice Callback
      * @description: Voice Callback
      * @param {Object} arg - arg object.
      
      **/
    voiceCallback({}?: any): any;
    /**
      *
      * @summary: Get Voice Click to Call
      * @description: Voice Click to Call
      * @param {Object} arg - arg object.
      * @param {string} arg.caller - Caller contact number
      * @param {string} arg.receiver - Receiver contact number
      
      **/
    voiceClickToCall({ caller, receiver }?: {
        caller: string;
        receiver: string;
    }): any;
}
declare class Catalog {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Create Product Bundle
     * @description: Create Product Bundle. See `ProductBundleRequest` for the request body parameter need to create a product bundle. On successful request, returns in `ProductBundleRequest` with id
     * @param {Object} arg - arg object.
     * @param {ProductBundleRequest} arg.body
     **/
    createProductBundle({ body }?: {
        body: ProductBundleRequest;
    }): any;
    /**
      *
      * @summary: List all Product Bundles
      * @description: Get all product bundles for a particular company
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - A search string that is searched with product bundle name.
      
      **/
    getProductBundle({ q }?: {
        q?: string;
    }): any;
    /**
     *
     * @summary: Update a Product Bundle
     * @description: Update a Product Bundle by its id. On successful request, returns the updated product bundle
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
     * @param {ProductBundleUpdateRequest} arg.body
     **/
    updateProductBundle({ id, body }?: {
        id: string;
        body: ProductBundleUpdateRequest;
    }): any;
    /**
      *
      * @summary: Get a particular Product Bundle details
      * @description: Get a particular Bundle details by its `id`. If successful, returns a Product bundle resource in the response body specified in `GetProductBundleResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
      
      **/
    getProductBundleDetail({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Create a size guide.
     * @description: This API allows to create a size guide associated to a brand.
     * @param {Object} arg - arg object.
     * @param {ValidateSizeGuide} arg.body
     **/
    createSizeGuide({ body }?: {
        body: ValidateSizeGuide;
    }): any;
    /**
      *
      * @summary: Get list of size guides
      * @description: This API allows to view all the size guides associated to the seller.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.active] - filter size guide on basis of active, in-active
      * @param {string} [arg.q] - Query that is to be searched.
      * @param {string} [arg.tag] - to filter size guide on basis of tag.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getSizeGuides({ active, q, tag, pageNo, pageSize }?: {
        active?: boolean;
        q?: string;
        tag?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Edit a size guide.
     * @description: This API allows to edit a size guide.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Mongo id of the size guide to be edited
     * @param {ValidateSizeGuide} arg.body
     **/
    updateSizeGuide({ id, body }?: {
        id: string;
        body: ValidateSizeGuide;
    }): any;
    /**
      *
      * @summary: Get a single size guide.
      * @description: This API helps to get data associated to a size guide.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Id of the size guide to be viewed.
      
      **/
    getSizeGuide({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Analytics data of catalog and inventory that are being cross-selled.
      * @description: Analytics data of catalog and inventory that are being cross-selled.
      * @param {Object} arg - arg object.
      * @param {string} arg.sellerAppId - Id of the seller application which is serving the invetory/catalog of the company
      
      **/
    getSellerInsights({ sellerAppId }?: {
        sellerAppId: string;
    }): any;
    /**
     *
     * @summary: Create/Update opt-in infomation.
     * @description: Use this API to create/update opt-in information for given platform. If successful, returns data in the response body as specified in `OptInPostResponseSchema`
     * @param {Object} arg - arg object.
     * @param {string} arg.marketplace - The marketplace for which the detail needs to be retrieved.
     * @param {OptInPostRequest} arg.body
     **/
    createMarketplaceOptin({ marketplace, body }?: {
        marketplace: string;
        body: OptInPostRequest;
    }): any;
    /**
      *
      * @summary: Get opt-in infomation.
      * @description: Use this API to fetch opt-in information for all the platforms. If successful, returns a logs in the response body as specified in `GetOptInPlatformSchema`
      * @param {Object} arg - arg object.
      
      **/
    getMarketplaceOptinDetail({}?: any): any;
    /**
      *
      * @summary: Get the Company details.
      * @description: Get the details of the company associated with the given company_id passed.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyDetail({}?: any): any;
    /**
      *
      * @summary: Get the Company Brand details of Optin.
      * @description: Get the details of the Brands associated with the given company_id passed.
      * @param {Object} arg - arg object.
      * @param {boolean} [arg.isActive] - The is_active status for the optin id.
      * @param {boolean} [arg.q] - The search value to filter the list.
      * @param {number} [arg.pageNo] - The number of page for the company id.
      * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
      * @param {string} [arg.marketplace] - The marketplace platform associated with the company id.
      
      **/
    getCompanyBrandDetail({ isActive, q, pageNo, pageSize, marketplace }?: {
        isActive?: boolean;
        q?: boolean;
        pageNo?: number;
        pageSize?: number;
        marketplace?: string;
    }): any;
    /**
      *
      * @summary: Get the Company metrics
      * @description: Get the Company metrics associated with the company ID passed.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyMetrics({}?: any): any;
    /**
      *
      * @summary: Get the Store details.
      * @description: Get the details of the store associated with the company ID passed.
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search related the store for the company id.
      * @param {number} [arg.pageNo] - The number of page for the company id.
      * @param {number} [arg.pageSize] - Number of records that can be seen on the page for the company id.
      
      **/
    getStoreDetail({ q, pageNo, pageSize }?: {
        q?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: List Department specifiec product categories
      * @description: Allows you to list all product categories values for the departments specified
      * @param {Object} arg - arg object.
      * @param {string} arg.departments - A `department` is name of a departments whose category needs to be listed. Can specify multiple departments.
      * @param {string} arg.itemType - An `item_type` is the type of item, it can be `set`, `standard`, `digital`, etc.
      
      **/
    listProductTemplateCategories({ departments, itemType }?: {
        departments: string;
        itemType: string;
    }): any;
    /**
      *
      * @summary: List all Departments
      * @description: Allows you to list all departments, also can search using name and filter active and incative departments, and item type
      * @param {Object} arg - arg object.
      
      **/
    listDepartmentsData({}?: any): any;
    /**
      *
      * @summary: Get specific departments details by passing in unique id of the department
      * @description: Allows you to get department data, by uid
      * @param {Object} arg - arg object.
      * @param {string} arg.uid - A `uid` is a unique identifier of a department.
      
      **/
    getDepartmentData({ uid }?: {
        uid: string;
    }): any;
    /**
      *
      * @summary: List all Templates
      * @description: Allows you to list all product templates, also can filter by department
      * @param {Object} arg - arg object.
      * @param {string} arg.departments - A `departments` is the name of a particular department.
      
      **/
    listProductTemplate({ departments }?: {
        departments: string;
    }): any;
    /**
      *
      * @summary: Validate Product Template Schema
      * @description: Allows you to list all product templates validation values for all the fields present in the database
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
      
      **/
    validateProductTemplate({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Download Product Template View
      * @description: Allows you to download product template data
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a unique identifier for a particular template.
      
      **/
    downloadProductTemplateViews({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Download Product Template View
      * @description: Allows you to download product template data
      * @param {Object} arg - arg object.
      * @param {string} arg.itemType - An `item_type` defines the type of item.
      
      **/
    downloadProductTemplateView({ itemType }?: {
        itemType: string;
    }): any;
    /**
      *
      * @summary: Validate Product Template Schema
      * @description: Allows you to list all product templates validation values for all the fields present in the database
      * @param {Object} arg - arg object.
      * @param {string} arg.itemType - An `item_type` defines the type of item. The default value is standard.
      
      **/
    validateProductTemplateSchema({ itemType }?: {
        itemType: string;
    }): any;
    /**
      *
      * @summary: List HSN Codes
      * @description: Allows you to list all hsn Codes
      * @param {Object} arg - arg object.
      
      **/
    listHSNCodes({}?: any): any;
    /**
      *
      * @summary: Allows you to list all product templates export list details
      * @description: Can vies details including trigger data, task id , etc.
      * @param {Object} arg - arg object.
      
      **/
    listProductTemplateExportDetails({}?: any): any;
    /**
      *
      * @summary: Allows you to list all values for Templates, Brands or Type
      * @description: The filter type query parameter defines what type of data to return. The type of query returns the valid values for the same
      * @param {Object} arg - arg object.
      * @param {string} arg.filter - A `filter` is the unique identifier of the type of value required.
      
      **/
    listTemplateBrandTypeValues({ filter }?: {
        filter: string;
    }): any;
    /**
     *
     * @summary: Create product categories
     * @description: This API lets user create product categories
     * @param {Object} arg - arg object.
     * @param {CategoryRequestBody} arg.body
     **/
    createCategories({ body }?: {
        body: CategoryRequestBody;
    }): any;
    /**
      *
      * @summary: Get product categories list
      * @description: This API gets meta associated to product categories.
      * @param {Object} arg - arg object.
      * @param {string} [arg.level] - Get category for multiple levels
      * @param {string} [arg.q] - Get multiple categories filtered by search string
      
      **/
    listCategories({ level, q }?: {
        level?: string;
        q?: string;
    }): any;
    /**
     *
     * @summary: Update product categories
     * @description: Update a product category using this apu
     * @param {Object} arg - arg object.
     * @param {string} arg.uid - Category unique id
     * @param {CategoryRequestBody} arg.body
     **/
    updateCategory({ uid, body }?: {
        uid: string;
        body: CategoryRequestBody;
    }): any;
    /**
      *
      * @summary: Get product category by uid
      * @description: This API gets meta associated to product categories.
      * @param {Object} arg - arg object.
      * @param {string} arg.uid - Category unique id
      
      **/
    getCategoryData({ uid }?: {
        uid: string;
    }): any;
    /**
     *
     * @summary: Create a product.
     * @description: This API allows to create product.
     * @param {Object} arg - arg object.
     * @param {ProductCreateUpdate} arg.body
     **/
    createProduct({ body }?: {
        body: ProductCreateUpdate;
    }): any;
    /**
      *
      * @summary: Get product list
      * @description: This API gets meta associated to products.
      * @param {Object} arg - arg object.
      * @param {number} [arg.brandIds] - Get multiple products filtered by brand Ids
      * @param {number} [arg.categoryIds] - Get multiple products filtered by category Ids
      * @param {string} [arg.search] - Get multiple products filtered by search string
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getProducts({ brandIds, categoryIds, search, pageNo, pageSize }?: {
        brandIds?: number;
        categoryIds?: number;
        search?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Delete a product.
      * @description: This API allows to delete product.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Id of the product to be updated.
      
      **/
    deleteProduct({ itemId }?: {
        itemId: number;
    }): any;
    /**
     *
     * @summary: Edit a product.
     * @description: This API allows to edit product.
     * @param {Object} arg - arg object.
     * @param {number} arg.itemId - Id of the product to be updated.
     * @param {ProductCreateUpdate} arg.body
     **/
    editProduct({ itemId, body }?: {
        itemId: number;
        body: ProductCreateUpdate;
    }): any;
    /**
      *
      * @summary: Get a single product.
      * @description: This API helps to get data associated to a particular product.
      * @param {Object} arg - arg object.
      * @param {string} [arg.itemCode] - Item code of the product.
      * @param {number} arg.itemId - Item Id of the product.
      * @param {number} [arg.brandUid] - Brand Id of the product.
      * @param {number} [arg.uid] - Id of the product.
      
      **/
    getProduct({ itemId, itemCode, brandUid, uid }?: {
        itemCode?: string;
        itemId: number;
        brandUid?: number;
        uid?: number;
    }): any;
    /**
      *
      * @summary: Validate product/size data
      * @description: This API validates product data.
      * @param {Object} arg - arg object.
      
      **/
    getProductValidation({}?: any): any;
    /**
      *
      * @summary: Get a single product size.
      * @description: This API helps to get data associated to a particular product size.
      * @param {Object} arg - arg object.
      * @param {string} [arg.itemCode] - Item code of the product size.
      * @param {number} arg.itemId - Item Id of the product size.
      * @param {number} [arg.brandUid] - Brand Id of the product size.
      * @param {number} [arg.uid] - Id of the product size.
      
      **/
    getProductSize({ itemId, itemCode, brandUid, uid }?: {
        itemCode?: string;
        itemId: number;
        brandUid?: number;
        uid?: number;
    }): any;
    /**
     *
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job.
     * @param {Object} arg - arg object.
     * @param {BulkJob} arg.body
     **/
    updateProductAssetsInBulk({ body }?: {
        body: BulkJob;
    }): any;
    /**
      *
      * @summary: Get a list of all bulk product upload jobs.
      * @description: This API helps to get bulk product upload jobs data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductBulkUploadHistory({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Delete Bulk product job.
      * @description: This API allows to delete bulk product job associated with company.
      * @param {Object} arg - arg object.
      * @param {number} arg.batchId - Batch Id of the bulk product job to be deleted.
      
      **/
    deleteProductBulkJob({ batchId }?: {
        batchId: number;
    }): any;
    /**
     *
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     * @param {Object} arg - arg object.
     * @param {string} arg.batchId - Batch Id in which assets to be uploaded.
     * @param {BulkProductRequest} arg.body
     **/
    createProductsInBulk({ batchId, body }?: {
        batchId: string;
        body: BulkProductRequest;
    }): any;
    /**
      *
      * @summary: Get a list of all tags associated with company.
      * @description: This API helps to get tags data associated to a particular copmpany.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyTags({}?: any): any;
    /**
     *
     * @summary: Create a Bulk asset upload Job.
     * @description: This API helps to create a bulk asset upload job.
     * @param {Object} arg - arg object.
     * @param {ProductBulkAssets} arg.body
     **/
    createProductAssetsInBulk({ body }?: {
        body: ProductBulkAssets;
    }): any;
    /**
      *
      * @summary: Get a list of all bulk asset jobs.
      * @description: This API helps to get bulk asset jobs data associated to a particular company.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getProductAssetsInBulk({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Delete a Size associated with product.
      * @description: This API allows to delete size associated with product.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Item Id of the product associated with size to be deleted.
      * @param {number} arg.size - size to be deleted.
      
      **/
    deleteSize({ itemId, size }?: {
        itemId: number;
        size: number;
    }): any;
    /**
     *
     * @summary: Add Inventory for particular size and store.
     * @description: This API allows add Inventory for particular size and store.
     * @param {Object} arg - arg object.
     * @param {number} arg.itemId - Item of the company associated to product that is to be viewed.
     * @param {string} arg.size - Size in which inventory is to be added.
     * @param {InventoryRequest} arg.body
     **/
    addInventory({ itemId, size, body }?: {
        itemId: number;
        size: string;
        body: InventoryRequest;
    }): any;
    /**
      *
      * @summary: Get Inventory for company
      * @description: This API allows get Inventory data for particular company grouped by size and store.
      * @param {Object} arg - arg object.
      * @param {string} arg.itemId - Item code of the product of which size is to be get.
      * @param {string} arg.size - Size of which inventory is to get.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getInventory({ itemId, size, pageNo, pageSize }?: {
        itemId: string;
        size: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Delete a Inventory.
      * @description: This API allows to delete inventory of a particular product for particular company.
      * @param {Object} arg - arg object.
      * @param {number} arg.itemId - Id of the product associated with Inventory to be deleted.
      * @param {number} arg.locationId - Location ID of store of which inventory is to be deleted.
      
      **/
    deleteInventory({ itemId, locationId }?: {
        itemId: number;
        locationId: number;
    }): any;
    /**
     *
     * @summary: Create a Bulk Inventory upload Job.
     * @description: This API helps to create a bulk Inventory upload job.
     * @param {Object} arg - arg object.
     * @param {BulkJob} arg.body
     **/
    createBulkInventoryJob({ body }?: {
        body: BulkJob;
    }): any;
    /**
      *
      * @summary: Get a list of all bulk Inventory upload jobs.
      * @description: This API helps to get bulk Inventory upload jobs data.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getInventoryBulkUploadHistory({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Delete Bulk Inventory job.
      * @description: This API allows to delete bulk Inventory job associated with company.
      * @param {Object} arg - arg object.
      
      **/
    deleteBulkInventoryJob({}?: any): any;
    /**
     *
     * @summary: Create products in bulk associated with given batch Id.
     * @description: This API helps to create products in bulk push to kafka for approval/creation.
     * @param {Object} arg - arg object.
     * @param {InventoryBulkRequest} arg.body
     **/
    createBulkInventory({ body }?: {
        body: InventoryBulkRequest;
    }): any;
    /**
     *
     * @summary: Create a Inventory export Job.
     * @description: This API helps to create a Inventory export job.
     * @param {Object} arg - arg object.
     * @param {InventoryExportRequest} arg.body
     **/
    createInventoryExportJob({ body }?: {
        body: InventoryExportRequest;
    }): any;
    /**
      *
      * @summary: Get Inventory export history.
      * @description: This API helps to get Inventory export history.
      * @param {Object} arg - arg object.
      
      **/
    getInventoryExport({}?: any): any;
    /**
      *
      * @summary: Get List of different filters for inventory export
      * @description: This API allows get List of different filters like brand, store, and type for inventory export.
      * @param {Object} arg - arg object.
      * @param {string} [arg.filterType] - filter type from any one of ['brand', 'store', 'type']
      
      **/
    exportInventoryConfig({ filterType }?: {
        filterType?: string;
    }): any;
}
declare class CompanyProfile {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Edit company profile
     * @description: This API allows to edit the company profile of the seller account.
     * @param {Object} arg - arg object.
     * @param {CompanyStoreSerializerRequest} arg.body
     **/
    updateCompany({ body }?: {
        body: CompanyStoreSerializerRequest;
    }): any;
    /**
      *
      * @summary: Get company profile
      * @description: This API allows to view the company profile of the seller account.
      * @param {Object} arg - arg object.
      
      **/
    cbsOnboardGet({}?: any): any;
    /**
      *
      * @summary: Get company metrics
      * @description: This API allows to view the company metrics, i.e. the status of its brand and stores. Also its allows to view the number of products, company documents & store documents which are verified and unverified.
      * @param {Object} arg - arg object.
      
      **/
    getCompanyMetrics({}?: any): any;
    /**
      *
      * @summary: Get a single brand.
      * @description: This API helps to get data associated to a particular brand.
      * @param {Object} arg - arg object.
      * @param {string} arg.brandId - Id of the brand to be viewed.
      
      **/
    getBrand({ brandId }?: {
        brandId: string;
    }): any;
    /**
     *
     * @summary: Edit a brand.
     * @description: This API allows to edit meta of a brand.
     * @param {Object} arg - arg object.
     * @param {string} arg.brandId - Id of the brand to be viewed.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     **/
    editBrand({ brandId, body }?: {
        brandId: string;
        body: CreateUpdateBrandRequestSerializer;
    }): any;
    /**
     *
     * @summary: Create a Brand.
     * @description: This API allows to create a brand associated to a company.
     * @param {Object} arg - arg object.
     * @param {CreateUpdateBrandRequestSerializer} arg.body
     **/
    createBrand({ body }?: {
        body: CreateUpdateBrandRequestSerializer;
    }): any;
    /**
      *
      * @summary: Get brands associated to a company
      * @description: This API helps to get view brands associated to a particular company.
      * @param {Object} arg - arg object.
      
      **/
    getBrands({}?: any): any;
    /**
     *
     * @summary: Create a location asscoiated to a company.
     * @description: This API allows to create a location associated to a company.
     * @param {Object} arg - arg object.
     * @param {LocationSerializer} arg.body
     **/
    createLocation({ body }?: {
        body: LocationSerializer;
    }): any;
    /**
      *
      * @summary: Get list of locations
      * @description: This API allows to view all the locations asscoiated to a company.
      * @param {Object} arg - arg object.
      * @param {string} [arg.storeType] - Helps to sort the location list on the basis of location type.
      * @param {string} [arg.q] - Query that is to be searched.
      * @param {string} [arg.stage] - to filter companies on basis of verified or unverified companies.
      * @param {number} [arg.pageNo] - The page number to navigate through the given set of results
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      
      **/
    getLocations({ storeType, q, stage, pageNo, pageSize }?: {
        storeType?: string;
        q?: string;
        stage?: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get details of a specific location.
      * @description: This API helps to get data associated to a specific location.
      * @param {Object} arg - arg object.
      * @param {string} arg.locationId - Id of the location which you want to view.
      
      **/
    getLocationDetail({ locationId }?: {
        locationId: string;
    }): any;
    /**
     *
     * @summary: Edit a location asscoiated to a company.
     * @description: This API allows to edit a location associated to a company.
     * @param {Object} arg - arg object.
     * @param {string} arg.locationId - Id of the location which you want to edit.
     * @param {LocationSerializer} arg.body
     **/
    updateLocation({ locationId, body }?: {
        locationId: string;
        body: LocationSerializer;
    }): any;
}
declare class Assets {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `startUpload`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `completeUpload` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartRequest} arg.body
      **/
    startUpload({ namespace, body }?: {
        namespace: string;
        body: StartRequest;
    }): any;
    /**
      *
      * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
      * @description: Uploads an arbitrarily sized buffer or blob.
  
  It has three Major Steps:
  * Start
  * Upload
  * Complete
  
  ### Start
  Initiates the assets upload using `startUpload`.
  It returns the storage link in response.
  
  ### Upload
  Use the storage link to upload a file (Buffer or Blob) to the File Storage.
  Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
  
  ### Complete
  After successfully upload, call `completeUpload` api to complete the upload process.
  This operation will return the url for the uploaded file.
  
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      * @param {StartResponse} arg.body
      **/
    completeUpload({ namespace, body }?: {
        namespace: string;
        body: StartResponse;
    }): any;
    /**
     *
     * @summary: Explain here
     * @description: Describe here
     * @param {Object} arg - arg object.
     * @param {SignUrlRequest} arg.body
     **/
    getSignUrls({ body }?: {
        body: SignUrlRequest;
    }): any;
    /**
     *
     * @summary: Copy Files
     * @description: Copy Files
     * @param {Object} arg - arg object.
     * @param {boolean} [arg.sync] - sync
     * @param {BulkRequest} arg.body
     **/
    copyFiles({ body, sync }?: {
        sync?: boolean;
        body: BulkRequest;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      
      **/
    browse({ namespace }?: {
        namespace: string;
    }): any;
    /**
      *
      * @summary: Browse Files
      * @description: Browse Files
      * @param {Object} arg - arg object.
      * @param {string} arg.namespace - bucket name
      
      **/
    browsePaginator({ namespace }?: {
        namespace: string;
    }): Paginator;
    /**
      *
      * @summary: Proxy
      * @description: Proxy
      * @param {Object} arg - arg object.
      * @param {string} arg.url - url
      
      **/
    proxy({ url }?: {
        url: string;
    }): any;
}
declare class Marketplaces {
    constructor(config: any);
    config: any;
    /**
      *
      * @summary: Get available marketplace channels
      * @description: Get available marketplace channels
      * @param {Object} arg - arg object.
      
      **/
    getAvailableChannels({}?: any): any;
    /**
      *
      * @summary: Get all registered marketplace channels for a seller
      * @description: Get all registered marketplace channels for a seller
      * @param {Object} arg - arg object.
      
      **/
    getChannels({}?: any): any;
    /**
      *
      * @summary: Get registered marketplace channel for a seller
      * @description: Get registered marketplace channel for a seller
      * @param {Object} arg - arg object.
      * @param {string} arg.channel - Name of marketplace channel
      
      **/
    getChannel({ channel }?: {
        channel: string;
    }): any;
    /**
     *
     * @summary: Create Myntra marketplace channel for a seller
     * @description: Create Myntra marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {MyntraPayload} arg.body
     **/
    registerMyntraChannel({ body }?: {
        body: MyntraPayload;
    }): any;
    /**
     *
     * @summary: Update Myntra marketplace channel credentials for a seller
     * @description: Update Myntra marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {MyntraPayload} arg.body
     **/
    updateMyntraChannelCredentials({ body }?: {
        body: MyntraPayload;
    }): any;
    /**
     *
     * @summary: Create Amazon marketplace channel for a seller
     * @description: Create Amazon marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {AmazonPayload} arg.body
     **/
    registerAmazonChannel({ body }?: {
        body: AmazonPayload;
    }): any;
    /**
     *
     * @summary: Update Amazon marketplace channel credentials for a seller
     * @description: Update Amazon marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {AmazonPayload} arg.body
     **/
    updateAmazonChannelCredentials({ body }?: {
        body: AmazonPayload;
    }): any;
    /**
     *
     * @summary: Create Flipkart / Flipkart Assured marketplace channel for a seller
     * @description: Create Flipkart / Flipkart Assured marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.flipkartChannel - Name of marketplace channel
     * @param {FlipkartPayload} arg.body
     **/
    registerFlipkartChannel({ flipkartChannel, body }?: {
        flipkartChannel: string;
        body: FlipkartPayload;
    }): any;
    /**
     *
     * @summary: Update Flipkart / Flipkart Assured marketplace channel credentials for a seller
     * @description: Update Flipkart / Flipkart Assured marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.flipkartChannel - Name of marketplace channel
     * @param {FlipkartPayload} arg.body
     **/
    updateFlipkartChannelCredentials({ flipkartChannel, body }?: {
        flipkartChannel: string;
        body: FlipkartPayload;
    }): any;
    /**
     *
     * @summary: Create Tatacliq / Tatacliq Luxury marketplace channel for a seller
     * @description: Create Tatacliq / Tatacliq Luxury marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.tatacliqChannel - Name of marketplace channel
     * @param {TatacliqPayload} arg.body
     **/
    registerTatacliqChannel({ tatacliqChannel, body }?: {
        tatacliqChannel: string;
        body: TatacliqPayload;
    }): any;
    /**
     *
     * @summary: Update Tatacliq / Tatacliq Luxury Assured marketplace channel credentials for a seller
     * @description: Update Tatacliq / Tatacliq Luxury marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.tatacliqChannel - Name of marketplace channel
     * @param {TatacliqPayload} arg.body
     **/
    updateTatacliqChannelCredentials({ tatacliqChannel, body }?: {
        tatacliqChannel: string;
        body: TatacliqPayload;
    }): any;
    /**
     *
     * @summary: Create Ajio marketplace channel for a seller
     * @description: Create Ajio marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {AjioPayload} arg.body
     **/
    registerAjioChannel({ body }?: {
        body: AjioPayload;
    }): any;
    /**
     *
     * @summary: Update Ajio marketplace channel credentials for a seller
     * @description: Update Ajio marketplace channel credentials for a seller
     * @param {Object} arg - arg object.
     * @param {AjioPayload} arg.body
     **/
    updateAjioChannelCredentials({ body }?: {
        body: AjioPayload;
    }): any;
    /**
     *
     * @summary: Update inventory sync configuration of marketplace channel for a seller
     * @description: Update inventory sync configuration of marketplace channel for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.channel - Name of marketplace channel
     * @param {string} [arg.validateCred] - Validate marketplace cred while saving inventory config
     * @param {InventoryConfig} arg.body
     **/
    updateChannelInventoryConfig({ channel, body, validateCred }?: {
        channel: string;
        validateCred?: string;
        body: InventoryConfig;
    }): any;
    /**
      *
      * @summary: Get marketplace channel location config for a seller
      * @description: Get marketplace channel location config for a seller
      * @param {Object} arg - arg object.
      * @param {string} arg.channel - Name of marketplace channel
      
      **/
    getChannelLocationConfig({ channel }?: {
        channel: string;
    }): any;
    /**
     *
     * @summary: update marketplace channel location config for a seller
     * @description: update marketplace channel location config for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.channel - Name of marketplace channel
     * @param {StoreMappingPayload} arg.body
     **/
    updateChannelLocationConfig({ channel, body }?: {
        channel: string;
        body: StoreMappingPayload;
    }): any;
    /**
      *
      * @summary: Get marketplace channel active status for a seller
      * @description: Get marketplace channel active status for a seller
      * @param {Object} arg - arg object.
      * @param {string} arg.channel - Name of marketplace channel
      
      **/
    getChannelStatus({ channel }?: {
        channel: string;
    }): any;
    /**
     *
     * @summary: Update marketplace channel active status for a seller
     * @description: Update marketplace channel active status for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.channel - Name of marketplace channel
     * @param {StatusPayload} arg.body
     **/
    updateChannelStatus({ channel, body }?: {
        channel: string;
        body: StatusPayload;
    }): any;
    /**
     *
     * @summary: Trigger marketplace channel inventory updates for a seller
     * @description: Trigger marketplace channel inventory updates for a seller
     * @param {Object} arg - arg object.
     * @param {string} arg.channel - Name of marketplace channel
     * @param {string} arg.updateType - Inventory update type
     * @param {SyncPayload} arg.body
     **/
    triggerChannelInventoryUpdates({ channel, updateType, body }?: {
        channel: string;
        updateType: string;
        body: SyncPayload;
    }): any;
}
declare class Analytics {
    constructor(config: any);
    config: any;
    /**
     *
     * @summary: Create data export job in required format
     * @description: Create data export job in required format
     * @param {Object} arg - arg object.
     * @param {string} arg.exportType - Export type / format
     * @param {ExportJobReq} arg.body
     **/
    createExportJob({ exportType, body }?: {
        exportType: string;
        body: ExportJobReq;
    }): any;
    /**
      *
      * @summary: Get data export job status
      * @description: Get data export job status
      * @param {Object} arg - arg object.
      * @param {string} arg.exportType - Export type / format
      * @param {string} arg.jobId - Export job id
      
      **/
    getExportJobStatus({ exportType, jobId }?: {
        exportType: string;
        jobId: string;
    }): any;
    /**
     *
     * @summary: Get logs list
     * @description: Get logs list
     * @param {Object} arg - arg object.
     * @param {string} arg.logType - Log type
     * @param {string} [arg.pageNo] - Current page number
     * @param {string} [arg.pageSize] - Current page size
     * @param {GetLogsListReq} arg.body
     **/
    getLogsList({ logType, body, pageNo, pageSize }?: {
        logType: string;
        pageNo?: string;
        pageSize?: string;
        body: GetLogsListReq;
    }): any;
    /**
     *
     * @summary: Search logs
     * @description: Search logs
     * @param {Object} arg - arg object.
     * @param {string} [arg.pageNo] - Current page number
     * @param {string} [arg.pageSize] - Current page size
     * @param {string} arg.logType - Log type
     * @param {SearchLogReq} arg.body
     **/
    searchLogs({ logType, body, pageNo, pageSize }?: {
        pageNo?: string;
        pageSize?: string;
        logType: string;
        body: SearchLogReq;
    }): any;
}
import PlatformApplicationClient = require("./PlatformApplicationClient");
type TicketList = {
    items?: Array<Ticket>;
    filters?: Filter;
    page?: Page;
};
type Page = {
    itemTotal: number;
    nextId?: string;
    hasPrevious?: boolean;
    hasNext?: boolean;
    current?: number;
    type: string;
    size: number;
};
type TicketHistoryList = {
    docs?: Array<TicketHistory>;
    limit?: number;
    page?: number;
    pages?: number;
    total?: number;
};
type CustomFormList = {
    docs?: Array<CustomForm>;
    limit?: number;
    page?: number;
    pages?: number;
    total?: number;
};
type CreateCustomFormPayload = {
    slug: string;
    title: string;
    inputs: Array<any>;
    description?: string;
    headerImage?: string;
    shouldNotify?: boolean;
    successMessage?: string;
    pollForAssignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: Array<any>;
    description?: string;
    headerImage?: string;
    shouldNotify?: boolean;
    loginRequired?: boolean;
    successMessage?: string;
    pollForAssignment?: PollForAssignment;
};
type EditTicketPayload = {
    content?: TicketContent;
    category?: string;
    source?: string;
    status?: string;
    priority?: string;
    assignedTo?: AgentChangePayload;
    tags?: Array<string>;
};
type AgentChangePayload = {
    agentId: string;
};
type CreateVideoRoomResponse = {
    uniqueName: string;
};
type CloseVideoRoomResponse = {
    success: boolean;
};
type CreateVideoRoomPayload = {
    uniqueName: string;
    notify?: Array<any>;
};
type Filter = {
    priorities: Array<Priority>;
    categories?: Array<TicketCategory>;
    statuses: Array<Status>;
    assignees: Array<any>;
};
type TicketHistoryPayload = {
    value: any;
    type: string;
};
type CustomFormSubmissionPayload = {
    response: Array<KeyValue>;
};
type KeyValue = {
    key: string;
    value: string;
};
type GetTokenForVideoRoomResponse = {
    accessToken: string;
};
type GetParticipantsInsideVideoRoomResponse = {
    participants: Array<Participant>;
};
type Participant = {
    user?: UserSchema;
    identity?: string;
    status?: string;
};
type UserSchema = {
    firstName?: string;
    lastName?: string;
    phoneNumbers?: Array<PhoneNumber>;
    emails?: Array<Email>;
    gender?: string;
    active?: boolean;
    profilePicUrl?: string;
    username?: string;
    accountType?: string;
    uid?: string;
    debug?: Debug;
    hasOldPasswordHash?: boolean;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
};
type PhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    countryCode?: number;
};
type Email = {
    primary?: boolean;
    verified?: boolean;
    email?: string;
    active?: boolean;
};
type Debug = {
    source?: string;
    platform?: string;
};
type SubmitCustomFormResponse = {
    ticket: Ticket;
};
type TicketContext = {
    applicationId?: string;
    companyId: string;
};
type CreatedOn = {
    userAgent: string;
};
type TicketAsset = {
    display?: string;
    value: string;
    type: string;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: Array<TicketAsset>;
};
type AddTicketPayload = {
    status: string;
    priority: string;
    category: string;
    content: TicketContent;
};
type Priority = {
    key: string;
    display: string;
    color: string;
};
type Status = {
    key: string;
    display: string;
    color: string;
};
type TicketCategory = {
    key: string;
    display: string;
    form?: CustomForm;
};
type SubmitButton = {
    title: string;
    titleColor: string;
    backgroundColor: string;
};
type PollForAssignment = {
    duration: number;
    message: string;
    successMessage: string;
    failureMessage: string;
};
type CustomForm = {
    applicationId: string;
    slug: string;
    headerImage?: string;
    title: string;
    description?: string;
    loginRequired: boolean;
    shouldNotify: boolean;
    successMessage?: string;
    submitButton?: SubmitButton;
    inputs: Array<any>;
    createdOn?: CreatedOn;
    createdBy?: any;
    pollForAssignment?: PollForAssignment;
    id: string;
};
type TicketHistory = {
    type: string;
    value: any;
    ticketId: string;
    createdOn?: CreatedOn;
    createdBy?: any;
    id: string;
    updatedAt?: string;
    createdAt?: string;
};
type Ticket = {
    context?: TicketContext;
    createdOn?: CreatedOn;
    responseId?: string;
    content?: TicketContent;
    ticketId: string;
    category: TicketCategory;
    source: string;
    status: Status;
    priority: Priority;
    createdBy?: any;
    assignedTo?: any;
    tags?: Array<string>;
    customJson?: any;
    id?: string;
    updatedAt?: string;
    createdAt?: string;
};
type PaginationSchema = {
    size?: number;
    itemTotal?: number;
    hasNext?: boolean;
    type?: string;
    current?: number;
};
type ThemesListingResponseSchema = {
    items?: Array<ThemesSchema>;
    page?: PaginationSchema;
};
type AddThemeRequestSchema = {
    themeId?: string;
};
type UpgradableThemeSchema = {
    parentTheme?: string;
    appliedTheme?: string;
    upgrade?: boolean;
};
type FontsSchema = {
    items?: FontsSchemaItems;
    kind?: string;
};
type BlitzkriegApiErrorSchema = {
    message?: string;
};
type BlitzkriegNotFoundSchema = {
    message?: string;
};
type BlitzkriegInternalServerErrorSchema = {
    message?: string;
};
type FontsSchemaItems = {
    family?: string;
    variants?: Array<string>;
    subsets?: Array<string>;
    version?: string;
    lastModified?: string;
    files?: FontsSchemaItemsFiles;
    category?: string;
    kind?: string;
};
type FontsSchemaItemsFiles = {
    regular?: string;
    italic?: string;
    bold?: string;
};
type ThemesSchema = {
    application?: string;
    applied?: boolean;
    customized?: boolean;
    published?: boolean;
    archived?: boolean;
    createdAt?: string;
    updatedAt?: string;
    version?: string;
    parentThemeVersion?: string;
    parentTheme?: string;
    information?: Information;
    tags?: Array<string>;
    src?: Src;
    assets?: AssetsSchema;
    availablePages?: AvailablePages;
    availableSections?: Array<availableSectionSchema>;
    sections?: Array<sectionSchema>;
    constants?: any;
    styles?: any;
    config?: Config;
    settings?: any;
    font?: Font;
    id?: string;
    v?: number;
    colors?: Colors;
};
type pagesSchema = {
    text?: string;
    path?: string;
    type?: string;
    value?: string;
    sections?: Sections;
};
type availableSectionSchema = {
    blocks?: Blocks;
    name?: string;
    label?: string;
    props?: any;
};
type sectionSchema = {
    pageKey?: string;
    pageSections?: PageSections;
};
type Information = {
    images?: Images;
    features?: Array<string>;
    name?: string;
    description?: string;
};
type Images = {
    desktop?: Array<string>;
    android?: Array<string>;
    ios?: Array<string>;
    thumbnail?: Array<string>;
};
type Src = {
    link?: string;
};
type AssetsSchema = {
    umdJs?: UmdJs;
    commonJs?: CommonJs;
    css?: Css;
};
type UmdJs = {
    link?: string;
};
type CommonJs = {
    link?: string;
};
type Css = {
    link?: string;
};
type AvailablePages = {
    path?: string;
    type?: string;
    text?: string;
    value?: string;
    seo?: Seo;
    props?: any;
    sections?: Sections;
};
type Seo = {
    title?: string;
    description?: string;
};
type Sections = {
    attributes?: string;
};
type Config = {
    preset?: Preset;
    globalSchema?: GlobalSchema;
    current?: string;
    list?: ListSchema;
};
type Preset = {
    sections?: sectionSchema;
};
type GlobalSchema = {
    props?: any;
};
type ListSchema = {
    global?: any;
    page?: ConfigPage;
    name?: string;
};
type Colors = {
    bgColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
    linkColor?: string;
    buttonSecondaryColor?: string;
};
type Custom = {
    props?: any;
};
type ConfigPage = {
    settings?: any;
    page?: string;
};
type Font = {
    family?: string;
    variants?: Variants;
};
type Variants = {
    medium?: Medium;
    semiBold?: SemiBold;
    bold?: Bold;
    light?: Light;
    regular?: Regular;
};
type Medium = {
    name?: string;
    file?: string;
};
type SemiBold = {
    name?: string;
    file?: string;
};
type Bold = {
    name?: string;
    file?: string;
};
type Light = {
    name?: string;
    file?: string;
};
type Regular = {
    name?: string;
    file?: string;
};
type Blocks = {
    type?: string;
    name?: string;
    props?: BlocksProps;
};
type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type PageSections = {
    blocks?: PageSectionsBlocks;
    name?: string;
    label?: string;
    props?: any;
    preset?: any;
    predicate?: Predicate;
};
type PageSectionsBlocks = {
    type?: string;
    name?: string;
    props?: PageSectionsBlocksProps;
};
type PageSectionsBlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type Predicate = {
    screen?: Screen;
    user?: PredicateUserSchema;
    route?: Route;
};
type Screen = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
type PredicateUserSchema = {
    authenticated?: boolean;
    anonymous?: boolean;
};
type Route = {
    selected?: string;
    exactUrl?: string;
    query?: any;
};
type EditEmailRequestSchema = {
    email?: string;
};
type SendVerificationLinkMobileRequestSchema = {
    verified?: boolean;
    active?: boolean;
    countryCode?: string;
    phone?: string;
    primary?: boolean;
};
type EditMobileRequestSchema = {
    countryCode?: string;
    phone?: string;
};
type EditProfileRequestSchema = {
    firstName?: string;
    lastName?: string;
    mobile?: string;
    email?: string;
    gender?: string;
    dob?: string;
    profilePicUrl?: string;
    androidHash?: string;
    sender?: string;
    registerToken?: string;
};
type SendEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    token?: string;
    registerToken?: string;
};
type VerifyOtpRequestSchema = {
    requestId?: string;
    registerToken?: string;
    otp?: string;
};
type SendMobileOtpRequestSchema = {
    mobile?: string;
    countryCode?: string;
    action?: string;
    token?: string;
    androidHash?: string;
    force?: string;
};
type UpdatePasswordRequestSchema = {
    oldPassword?: string;
    newPassword?: string;
};
type FormRegisterRequestSchema = {
    firstName?: string;
    lastName?: string;
    gender?: string;
    email?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    registerToken?: string;
};
type TokenRequestBodySchema = {
    token?: string;
};
type ForgotPasswordRequestSchema = {
    code?: string;
    password?: string;
};
type CodeRequestBodySchema = {
    code?: string;
};
type SendResetPasswordEmailRequestSchema = {
    email?: string;
    captchaCode?: string;
};
type PasswordLoginRequestSchema = {
    captchaCode?: string;
    password?: string;
    username?: string;
};
type SendOtpRequestSchema = {
    countryCode?: string;
    captchaCode?: string;
    mobile?: string;
};
type OAuthRequestSchema = {
    isSignedIn?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
type AuthSuccess = {
    registerToken?: string;
    userExists?: boolean;
    user?: AuthSuccessUser;
};
type SendOtpResponse = {
    resendTimer?: number;
    resendToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
};
type LoginSuccess = {
    user?: UserSchema;
};
type VerifyOtpSuccess = {
    user?: UserSchema;
    userExists?: boolean;
};
type ResetPasswordSuccess = {
    status?: string;
};
type RegisterFormSuccess = {
    resendTimer?: number;
    resendToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
};
type VerifyEmailSuccess = {
    message?: string;
};
type HasPasswordSuccess = {
    result?: boolean;
};
type LogoutSuccess = {
    logout?: boolean;
};
type OtpSuccess = {
    resendTimer?: number;
    resendToken?: string;
    success?: boolean;
    requestId?: string;
    message?: string;
    mobile?: string;
    countryCode?: string;
};
type EmailOtpSuccess = {
    resendToken?: string;
};
type SessionListSuccess = {
    sessions?: Array<string>;
};
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verifyMobileLink?: boolean;
};
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verifyEmailLink?: boolean;
};
type SendMobileVerifyLinkSuccess = {
    verifyMobileLink?: boolean;
};
type SendEmailVerifyLinkSuccess = {
    verifyEmailLink?: boolean;
};
type UserSearchResponseSchema = {
    users?: Array<UserSchema>;
};
type CustomerListResponseSchema = {
    items?: Array<UserSchema>;
    page?: PaginationSchema;
};
type UnauthorizedSchema = {
    message?: string;
};
type UnauthenticatedSchema = {
    authenticated?: boolean;
};
type NotFoundSchema = {
    message?: string;
};
type AuthenticationApiErrorSchema = {
    message?: string;
};
type ProfileEditSuccessSchema = {
    email?: string;
    verifyEmailOtp?: boolean;
    verifyEmailLink?: boolean;
    verifyMobileOtp?: boolean;
    user?: string;
    registerToken?: string;
    userExists?: boolean;
};
type FormRegisterRequestSchemaPhone = {
    countryCode?: string;
    mobile?: string;
};
type OAuthRequestSchemaOauth2 = {
    accessToken?: string;
    expiry?: number;
    refreshToken?: string;
};
type OAuthRequestSchemaProfile = {
    lastName?: string;
    image?: string;
    id?: string;
    email?: string;
    fullName?: string;
    firstName?: string;
};
type AuthSuccessUser = {
    firstName?: string;
    lastName?: string;
    debug?: AuthSuccessUserDebug;
    active?: boolean;
    emails?: AuthSuccessUserEmails;
};
type AuthSuccessUserDebug = {
    platform?: string;
};
type AuthSuccessUserEmails = {
    email?: string;
    verified?: boolean;
    primary?: boolean;
    active?: boolean;
};
type PlatformSchema = {
    display?: string;
    lookAndFeel?: LookAndFeel;
    updatedAt?: string;
    active?: boolean;
    forgotPassword?: boolean;
    login?: Login;
    skipCaptcha?: boolean;
    name?: string;
    meta?: MetaSchema;
    id?: string;
    social?: Social;
    requiredFields?: RequiredFields;
    registerRequiredFields?: RegisterRequiredFields;
    skipLogin?: boolean;
    flashCard?: FlashCard;
    subtext?: string;
    socialTokens?: SocialTokens;
    createdAt?: string;
    register?: boolean;
};
type LookAndFeel = {
    cardPosition?: string;
    backgroundColor?: string;
};
type Login = {
    password?: boolean;
    otp?: boolean;
};
type MetaSchema = {
    fyndDefault?: boolean;
};
type Social = {
    accountKit?: boolean;
    facebook?: boolean;
    google?: boolean;
};
type RequiredFields = {
    email?: Email;
    mobile?: Mobile;
};
type Mobile = {
    isRequired?: boolean;
    level?: string;
};
type RegisterRequiredFields = {
    email?: RegisterRequiredFieldsEmail;
    mobile?: RegisterRequiredFieldsMobile;
};
type RegisterRequiredFieldsEmail = {
    isRequired?: boolean;
    level?: string;
};
type RegisterRequiredFieldsMobile = {
    isRequired?: boolean;
    level?: string;
};
type FlashCard = {
    text?: string;
    textColor?: string;
    backgroundColor?: string;
};
type SocialTokens = {
    facebook?: Facebook;
    accountKit?: Accountkit;
    google?: Google;
};
type Facebook = {
    appId?: string;
};
type Accountkit = {
    appId?: string;
};
type Google = {
    appId?: string;
};
type ApplicationLegal = {
    application?: string;
    tnc?: string;
    policy?: string;
    shipping?: string;
    faq?: Array<ApplicationLegalFAQ>;
    id?: string;
    updatedAt?: string;
    createdAt?: string;
};
type ApplicationLegalFAQ = {
    question?: string;
    answer?: string;
};
type SeoSchema = {
    app?: string;
    id?: string;
    robotsTxt?: string;
    sitemapEnabled?: boolean;
    customMetaTags?: Array<any>;
    details?: any;
    createdAt?: string;
    updatedAt?: string;
};
type CustomMetaTag = {
    name?: string;
    content?: string;
    id?: string;
};
type Detail = {
    title?: string;
    description?: string;
};
type StorefrontAnnouncement = {
    announcements?: AnnouncementSchema;
    refreshRate?: number;
    refreshPages?: Array<string>;
};
type AnnouncementPageSchema = {
    pageSlug?: string;
    type?: string;
};
type EditorMeta = {
    foregroundColor?: string;
    backgroundColor?: string;
    contentType?: string;
    content?: string;
};
type AnnouncementAuthorSchema = {
    createdBy?: string;
    modifiedBy?: string;
};
type AdminAnnouncementSchema = {
    id?: string;
    platforms?: Array<string>;
    title?: string;
    announcement?: string;
    pages?: Array<AnnouncementPageSchema>;
    editorMeta?: EditorMeta;
    author?: AnnouncementAuthorSchema;
    createdAt?: string;
    app?: string;
    modifiedAt?: string;
    schedule?: ScheduleSchema;
};
type ScheduleSchema = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    nextSchedule?: Array<any>;
};
type NextSchedule = {
    start?: string;
    end?: string;
};
type AnnouncementSchema = {
    pageSlug?: Array<any>;
};
type announcementSchema = {
    announcement?: string;
    schedule?: scheduleStartSchema;
};
type scheduleStartSchema = {
    start?: string;
};
type BlogGetResponse = {
    items?: Array<any>;
    page?: any;
};
type ResourceContent = {
    type?: string;
    value?: string;
};
type Asset = {
    secureUrl?: string;
};
type Author = {
    designation?: string;
    id?: string;
    name?: string;
};
type BlogSchema = {
    id?: string;
    customJson?: any;
    application?: string;
    archived?: boolean;
    author?: any;
    content?: Array<ResourceContent>;
    featureImage?: any;
    published?: boolean;
    readingTime?: string;
    slug?: string;
    tags?: Array<string>;
    seo?: SEO;
    schedule?: CronSchedule;
    title?: string;
    dateMeta?: DateMeta;
};
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
};
type SEOImage = {
    url?: string;
};
type DateMeta = {
    createdOn?: string;
    modifiedOn?: string;
};
type BlogRequest = {
    application?: string;
    customJson?: any;
    author?: any;
    content?: Array<ResourceContent>;
    featureImage?: any;
    published?: boolean;
    readingTime?: string;
    slug?: string;
    tags?: Array<string>;
    title?: string;
    seo?: SEO;
    schedule?: CronSchedule;
};
type GetAnnouncementListSchema = {
    items?: Array<AdminAnnouncementSchema>;
    page?: Pagination;
};
type CreateAnnouncementSchema = {
    message?: string;
    data?: AdminAnnouncementSchema;
};
type Navigation = {
    name?: string;
    slug?: string;
    orientation?: string;
    createdBy?: CreatedBy;
    dateMeta?: DateMeta;
    id?: string;
    position?: string;
    application?: string;
    platform?: string;
    navigation?: NavigationReference;
};
type LocaleLanguage = {
    hi?: Language;
    ar?: Language;
    enUs?: Language;
};
type Language = {
    display?: string;
};
type Action = {
    page?: ActionPage;
    popup?: ActionPage;
    type?: string;
};
type ActionPage = {
    params?: any;
    query?: any;
    url?: string;
    type?: string;
};
type NavigationReference = {
    acl?: Array<string>;
    tags?: Array<string>;
    localeLanguage?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sortOrder?: number;
    subNavigation?: NavigationReference;
};
type LandingPage = {
    data?: LandingPageSchema;
    success?: boolean;
};
type ConfigurationSchema = {
    sleepTime?: number;
    startOnLaunch?: boolean;
    duration?: number;
    slideDirection?: string;
};
type Media = {
    type?: string;
    url?: string;
    bgColor?: string;
    duration?: number;
    autoDecideDuration?: boolean;
    action?: Action;
};
type Slideshow = {
    data?: SlideshowSchema;
    success?: boolean;
};
type AnnouncementsResponseSchema = {
    announcements?: any;
    refreshRate?: number;
    refreshPages?: Array<string>;
};
type AnnouncementDataSchema = {
    pageSlug?: string;
    announcement?: StorefrontAnnouncement;
};
type FaqResponseSchema = {
    faqs?: Array<FAQ>;
};
type UpdateHandpickedSchema = {
    tag?: HandpickedTagSchema;
};
type HandpickedTagSchema = {
    position?: string;
    attributes?: any;
    name?: string;
    url?: string;
    type?: string;
    subType?: string;
    content?: string;
};
type RemoveHandpickedSchema = {
    tags?: Array<string>;
};
type CreateTagSchema = {
    name?: string;
    subType?: string;
    id?: string;
    type?: string;
    url?: string;
    position?: string;
    attributes?: any;
    content?: string;
};
type CreateTagRequestSchema = {
    tags?: Array<CreateTagSchema>;
};
type APIError = {
    message?: string;
    status?: number;
    code?: string;
    exception?: string;
    info?: string;
    requestId?: string;
    stackTrace?: string;
    meta?: any;
};
type CategorySchema = {
    index?: number;
    id?: string;
    slug?: string;
    title?: string;
    application?: string;
};
type ChildrenSchema = {
    question?: string;
    answer?: string;
    slug?: string;
    application?: string;
    id?: string;
};
type CategoryRequestSchema = {
    slug?: string;
    title?: string;
};
type FAQCategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: ChildrenSchema;
    id?: string;
    slug?: string;
    application?: string;
    iconUrl?: string;
    customJson?: any;
};
type FaqSchema = {
    slug?: string;
    application?: string;
    id?: string;
    question?: string;
    answer?: string;
};
type FAQ = {
    slug?: string;
    question?: string;
    answer?: string;
};
type CreateFaqResponseSchema = {
    faq?: FaqSchema;
};
type CreateFaqSchema = {
    faq?: FAQ;
};
type GetFaqSchema = {
    faqs?: Array<any>;
};
type UpdateFaqCategoryRequestSchema = {
    category?: CategorySchema;
};
type CreateFaqCategoryRequestSchema = {
    category?: CategoryRequestSchema;
};
type CreateFaqCategorySchema = {
    category?: CategorySchema;
};
type GetFaqCategoriesSchema = {
    categories?: Array<CategorySchema>;
};
type GetFaqCategoryByIdOrSlugSchema = {
    category?: FAQCategorySchema;
};
type Pagination = {
    type?: string;
    current?: number;
    size?: number;
    itemTotal?: number;
    hasNext?: boolean;
};
type LandingPageGetResponse = {
    items?: Array<any>;
    page?: Pagination;
};
type LandingPageSchema = {
    slug?: string;
    action?: Action;
    platform?: Array<string>;
    createdBy?: CreatedBy;
    dateMeta?: DateMeta;
    id?: string;
    application?: string;
    archived?: boolean;
    customJson?: any;
};
type DefaultNavigationResponse = {
    items?: Array<any>;
};
type NavigationGetResponse = {
    items?: Array<any>;
    page?: Pagination;
};
type Orientation = {
    portrait?: Array<string>;
    landscape?: Array<string>;
};
type NavigationSchema = {
    id?: string;
    application?: string;
    archived?: boolean;
    name?: string;
    slug?: string;
    platform?: Array<string>;
    createdBy?: CreatedBy;
    dateMeta?: DateMeta;
    orientation?: Orientation;
    version?: number;
    navigation?: NavigationReference;
};
type NavigationRequest = {
    name?: string;
    slug?: string;
    platform?: Array<string>;
    orientation?: Orientation;
    navigation?: NavigationReference;
};
type CustomPageSchema = {
    id?: string;
    platform?: string;
    title?: string;
    slug?: string;
    type?: string;
    orientation?: string;
    application?: string;
    description?: string;
    published?: boolean;
    tags?: Array<string>;
    content?: Array<ContentSchema>;
    createdBy?: CreatedBy;
    dateMeta?: DateMeta;
    schedule?: ScheduleSchema;
};
type ContentSchema = {
    type?: string;
    value?: string;
};
type CustomPage = {
    data?: CustomPageSchema;
};
type CustomBlogSchema = {
    id?: string;
    title?: string;
    slug?: string;
    readingTime?: string;
    application?: string;
    description?: string;
    featureImage?: FeatureImage;
    published?: boolean;
    archived?: boolean;
    tags?: Array<string>;
    content?: ContentSchema;
    author?: Author;
    schedule?: ScheduleSchema;
    createdAt?: string;
    updatedAt?: string;
    customJson?: any;
};
type FeatureImage = {
    secureUrl?: string;
};
type CustomBlog = {
    data?: CustomBlogSchema;
};
type PageGetResponse = {
    items?: Array<any>;
    page?: any;
};
type PageSpec = {
    specifications?: Array<any>;
};
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
type PageSpecItem = {
    pageType?: string;
    displayName?: string;
    params?: Array<PageSpecParam>;
    query?: Array<PageSpecParam>;
};
type PageSchema = {
    id?: string;
    application?: string;
    componentIds?: Array<string>;
    content?: Array<PageContent>;
    createdBy?: any;
    dateMeta?: any;
    description?: string;
    featureImage?: any;
    pageMeta?: Array<PageMeta>;
    schedule?: ScheduleSchema;
    customJson?: any;
    orientation?: string;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: Array<string>;
    title?: string;
    type?: string;
    seo?: SEO;
    visibility?: any;
};
type CreatedBy = {
    id?: string;
};
type PageContent = {
    type?: string;
    value?: any;
};
type PageMeta = {
    key?: string;
    value?: any;
};
type PageRequest = {
    schedule?: CronSchedule;
    application?: string;
    author?: any;
    customJson?: any;
    orientation?: string;
    content?: Array<ResourceContent>;
    featureImage?: any;
    published?: boolean;
    readingTime?: string;
    slug?: string;
    tags?: Array<string>;
    seo?: SEO;
    title?: string;
};
type CronSchedule = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
};
type PagePublishRequest = {
    publish?: boolean;
};
type PageMetaSchema = {
    systemPages?: Array<any>;
    customPages?: Array<any>;
    applicationId?: string;
};
type SlideshowGetResponse = {
    items?: Array<any>;
    page?: Pagination;
};
type SlideshowSchema = {
    id?: string;
    slug?: string;
    dateMeta?: DateMeta;
    application?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: Array<Media>;
    active?: boolean;
    archived?: boolean;
    customJson?: any;
};
type SlideshowRequest = {
    slug?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: Media;
    active?: boolean;
};
type Support = {
    created?: boolean;
    id?: string;
    configType?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    contact?: ContactSchema;
};
type Phone = {
    key?: string;
    code?: string;
    number?: string;
};
type PhoneSchema = {
    active?: boolean;
    phone?: Array<Phone>;
};
type EmailSchema = {
    active?: boolean;
    email?: Array<Email>;
};
type ContactSchema = {
    phone?: PhoneSchema;
    email?: EmailSchema;
};
type TagsSchema = {
    application?: string;
    id?: string;
    tags?: Array<TagSchema>;
};
type TagSchema = {
    name?: string;
    url?: string;
    type?: string;
    subType?: string;
    id?: string;
    position?: string;
    attributes?: any;
    content?: string;
};
type StatsImported = {
    count?: number;
};
type StatsProcessedEmail = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessedSms = {
    success?: number;
    failed?: number;
    suppressed?: number;
};
type StatsProcessed = {
    email?: StatsProcessedEmail;
    sms?: StatsProcessedSms;
};
type Stats = {
    id?: string;
    imported?: any;
    processed?: any;
};
type GetStats = {
    items?: Array<Stats>;
};
type CampaignReq = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    isActive?: boolean;
    name?: string;
    fileUrl?: string;
    type?: string;
    recordsCount?: number;
    application?: string;
};
type RecipientHeaders = {
    email?: string;
};
type CampaignEmailTemplate = {
    key?: string;
    value?: string;
};
type CampignEmailProvider = {
    id?: string;
    fromName?: string;
    fromEmail?: string;
};
type CampaignEmail = {
    template?: CampaignEmailTemplate;
    provider?: CampignEmailProvider;
};
type Campaign = {
    recipientHeaders?: RecipientHeaders;
    email?: CampaignEmail;
    description?: string;
    tags?: Array<any>;
    isActive?: boolean;
    id?: string;
    datasource?: string;
    type?: string;
    name?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type Campaigns = {
    items?: Array<Campaign>;
    page?: Page;
};
type BigqueryHeadersReq = {
    query?: string;
    type?: string;
};
type BigqueryHeadersResHeaders = {
    name?: string;
    type?: string;
};
type BigqueryHeadersRes = {
    headers?: Array<BigqueryHeadersResHeaders>;
};
type GetNRecordsCsvReq = {
    url?: string;
    header?: boolean;
    count?: number;
};
type GetNRecordsCsvResItems = {
    phoneNumber?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    orderid?: string;
};
type GetNRecordsCsvRes = {
    items?: Array<GetNRecordsCsvResItems>;
};
type AudienceReq = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    isActive?: boolean;
    name?: string;
    fileUrl?: string;
    type?: string;
    recordsCount?: number;
    application?: string;
};
type Audience = {
    description?: string;
    tags?: Array<string>;
    headers?: Array<string>;
    isActive?: boolean;
    id?: string;
    name?: string;
    fileUrl?: string;
    type?: string;
    recordsCount?: number;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type Audiences = {
    items?: Array<Audience>;
    page?: Page;
};
type EmailProviderReqFrom = {
    name?: string;
    email?: string;
    isDefault?: boolean;
};
type EmailProviderReq = {
    name?: string;
    description?: string;
    apiKey?: string;
    type?: string;
    provider?: string;
    from?: Array<EmailProviderReqFrom>;
};
type EmailProvider = {
    type?: string;
    provider?: string;
    from?: Array<EmailProviderReqFrom>;
    id?: string;
    name?: string;
    description?: string;
    apiKey?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type EmailProviders = {
    items?: Array<EmailProvider>;
    page?: Page;
};
type EmailTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type EmailTemplateKeys = {
    to?: string;
    cc?: string;
    bcc?: string;
};
type EmailTemplateHeaders = {
    key?: string;
    value?: string;
};
type EmailTemplateReq = {
    name?: string;
    description?: string;
    keys?: EmailTemplateKeys;
    from?: string;
    staticTo?: Array<string>;
    staticCc?: Array<string>;
    staticBcc?: Array<string>;
    replyTo?: string;
    headers?: Array<EmailTemplateHeaders>;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: Array<any>;
    priority?: string;
};
type TemplateAndType = {
    templateType?: string;
    template?: string;
};
type EmailTemplateRes = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    staticTo?: Array<string>;
    staticCc?: Array<string>;
    staticBcc?: Array<string>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    name?: string;
    keys?: EmailTemplateKeys;
    from?: string;
    replyTo?: string;
    headers?: Array<EmailTemplateHeaders>;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: Array<any>;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type EmailTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    staticTo?: Array<any>;
    staticCc?: Array<any>;
    staticBcc?: Array<any>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    from?: string;
    fromName?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: Array<any>;
    attachments?: Array<any>;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type SystemEmailTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    staticTo?: Array<any>;
    staticCc?: Array<any>;
    staticBcc?: Array<any>;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    from?: string;
    fromName?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: Array<any>;
    attachments?: Array<any>;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type EmailTemplates = {
    items?: Array<EmailTemplate>;
    page?: Page;
};
type SystemEmailTemplates = {
    items?: Array<SystemEmailTemplate>;
    page?: Page;
};
type EventSubscriptionTemplateSms = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplateEmail = {
    subscribed?: boolean;
    template?: string;
};
type EventSubscriptionTemplate = {
    sms?: EventSubscriptionTemplateSms;
    email?: EventSubscriptionTemplateEmail;
};
type EventSubscription = {
    template?: EventSubscriptionTemplate;
    isDefault?: boolean;
    id?: string;
    application?: string;
    event?: string;
    slug?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type EventSubscriptions = {
    items?: Array<EventSubscription>;
    page?: Page;
};
type TriggerJobResponse = {
    status?: number;
};
type TriggerJobRequest = {
    jobId?: string;
};
type Job = {
    completed?: boolean;
    isActive?: boolean;
    id?: string;
    campaign?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type Jobs = {
    items?: Array<any>;
    page?: Page;
};
type JobLog = {
    imported?: any;
    processed?: any;
    id?: string;
    job?: string;
    campaign?: string;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type JobLogs = {
    items?: Array<JobLog>;
    page?: Page;
};
type LogEmail = {
    template?: string;
};
type LogPushnotification = {
    pushtokens?: Array<string>;
};
type LogMeta = {
    type?: string;
    identifier?: string;
    key?: string;
    offset?: string;
    partition?: string;
    topic?: string;
};
type Log = {
    email?: LogEmail;
    pushnotification?: LogPushnotification;
    meta?: LogMeta;
    id?: string;
    application?: string;
    service?: string;
    step?: string;
    status?: string;
    data?: any;
    expireAt?: string;
    createdAt?: string;
};
type Logs = {
    items?: Array<Log>;
    page?: Page;
};
type PushtokenReq = {
    action?: string;
    bundleIdentifier?: string;
    pushToken?: string;
    uniqueDeviceId?: string;
};
type PushtokenRes = {
    id?: string;
    bundleIdentifier?: string;
    pushToken?: string;
    uniqueDeviceId?: string;
    type?: string;
    platform?: string;
    applicationId?: string;
    userId?: string;
    createdAt?: string;
    updatedAt?: string;
    expiredAt?: string;
};
type SmsProviderReq = {
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    type?: string;
    provider?: string;
};
type SmsProvider = {
    rpt?: number;
    type?: string;
    provider?: string;
    id?: string;
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    application?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type SmsProviders = {
    items?: Array<SmsProvider>;
    page?: Page;
};
type SmsTemplateDeleteSuccessRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateDeleteFailureRes = {
    success?: boolean;
    message?: string;
};
type SmsTemplateMessage = {
    templateType?: string;
    template?: string;
};
type SmsTemplateReq = {
    name?: string;
    description?: string;
    message?: SmsTemplateMessage;
    templateVariables?: any;
    attachments?: Array<any>;
    priority?: string;
};
type SmsTemplateRes = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    name?: string;
    message?: SmsTemplateMessage;
    templateVariables?: any;
    createdAt?: string;
    updatedAt?: string;
    slug?: string;
    v?: number;
};
type SmsTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    priority?: string;
    tags?: Array<any>;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    templateVariables?: any;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type SystemSmsTemplate = {
    isSystem?: boolean;
    isInternal?: boolean;
    description?: string;
    tags?: Array<any>;
    priority?: string;
    published?: boolean;
    id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    templateVariables?: any;
    createdAt?: string;
    updatedAt?: string;
    v?: number;
};
type SmsTemplates = {
    items?: Array<SmsTemplate>;
    page?: Page;
};
type SystemSmsTemplates = {
    items?: Array<SystemSmsTemplate>;
    page?: Page;
};
type Notification = {
    title?: string;
    body?: string;
    subtitle?: string;
    icon?: string;
    deeplink?: string;
    clickAction?: string;
};
type SystemNotificationUser = {
    type?: string;
    value?: string;
};
type SystemNotificationSettings = {
    sound?: boolean;
    priority?: string;
    timeToLive?: string;
};
type SystemNotification = {
    notification?: Notification;
    user?: SystemNotificationUser;
    settings?: SystemNotificationUser;
    id?: string;
    group?: string;
    createdAt?: string;
};
type SystemNotificationsPage = {
    type?: string;
    current?: number;
    size?: number;
    itemTotal?: number;
    hasNext?: boolean;
};
type SystemNotifications = {
    items?: Array<SystemNotification>;
    lastReadAnchor?: number;
    page?: Page;
};
type PaymentGatewayConfigResponse = {
    aggregators?: Array<any>;
    excludedFields: Array<string>;
    displayFields: Array<string>;
    appId: string;
    created: boolean;
    success: boolean;
};
type ErrorCodeDescription = {
    description: string;
    success: boolean;
    code: string;
};
type PaymentGatewayConfig = {
    isActive?: boolean;
    key: string;
    configType: string;
    merchantSalt: string;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    isActive?: boolean;
    aggregatorName?: PaymentGatewayConfig;
    appId: string;
};
type PaymentGatewayToBeReviewed = {
    aggregator: Array<string>;
    success: boolean;
};
type ErrorCodeAndDescription = {
    description: string;
    code: string;
};
type HttpErrorCodeAndResponse = {
    success: boolean;
    error: ErrorCodeAndDescription;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type PaymentModeList = {
    cardType?: string;
    expired?: boolean;
    cardId?: string;
    name?: string;
    expYear?: number;
    code?: string;
    cardReference?: string;
    intentAppErrorList?: Array<string>;
    retryCount?: number;
    cardBrand?: string;
    cardBrandImage?: string;
    cardNumber?: string;
    displayName?: string;
    cardIssuer?: string;
    nickname?: string;
    cardToken?: string;
    timeout?: number;
    logoUrl?: PaymentModeLogo;
    aggregatorName: string;
    cardName?: string;
    expMonth?: number;
    cardIsin?: string;
    merchantCode?: string;
    displayPriority?: number;
    intentFlow?: string;
    fyndVpa?: string;
    cardFingerprint?: string;
};
type RootPaymentMode = {
    anonymousEnable?: boolean;
    aggregatorName?: string;
    list?: Array<PaymentModeList>;
    displayPriority: number;
    displayName: string;
    name: string;
    addCardEnabled?: boolean;
};
type PaymentOptions = {
    paymentOption: Array<RootPaymentMode>;
};
type PaymentOptionsResponse = {
    paymentOptions: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    isActive: boolean;
    uniqueTransferNo: any;
    transferType: string;
    moreAttributes: any;
    customers: any;
    payoutsAggregators: Array<any>;
    isDefault: boolean;
};
type PayoutRequest = {
    aggregator: string;
    isActive: boolean;
    bankDetails: any;
    users: any;
    transferType: string;
    uniqueExternalId: string;
};
type PayoutResponse = {
    aggregator: string;
    isActive: boolean;
    paymentStatus: string;
    bankDetails: any;
    uniqueTransferNo: string;
    users: any;
    transferType: string;
    payouts: any;
    created: boolean;
    success: boolean;
};
type UpdatePayoutResponse = {
    isActive: boolean;
    success: boolean;
    isDefault: boolean;
};
type UpdatePayoutRequest = {
    uniqueExternalId: string;
    isActive: boolean;
    isDefault: boolean;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    data: Array<any>;
    success: boolean;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    aggregator: string;
    config: any;
    success: boolean;
};
type SaveSubscriptionSetupIntentRequest = {
    uniqueExternalId: string;
};
type SaveSubscriptionSetupIntentResponse = {
    data: any;
    success: boolean;
};
type GetActivityStatus = {
    activityHistory: ActivityHistory;
};
type ActivityHistory = {
    createdat?: string;
    message?: string;
    type?: string;
    user?: string;
};
type FailedOrders = {
    orders: FailOrder;
};
type FailOrder = {
    updatedAt?: string;
    id?: string;
    reason?: string;
    marketplaceOrder?: MarketplaceOrder;
    marketplaceOrderId?: string;
    createdAt?: string;
    appId?: string;
    marketplace?: string;
    companyId?: number;
};
type MarketplaceOrder = {
    orderStatusUrl?: string;
    adminGraphqlApiId?: string;
    email?: string;
    test?: boolean;
    note?: string;
    totalPrice?: string;
    appId?: number;
    totalDiscountsSet?: TotalDiscountsSet;
    totalPriceSet?: TotalPriceSet;
    totalTaxSet?: TotalTaxSet;
    gateway?: string;
    name?: string;
    subtotalPriceSet?: SubtotalPriceSet;
    number?: number;
    buyerAcceptsMarketing?: boolean;
    contactEmail?: string;
    token?: string;
    sourceName?: string;
    paymentGatewayNames?: Array<any>;
    presentmentCurrency?: string;
    subtotalPrice?: string;
    processedAt?: string;
    orderNumber?: number;
    totalTipReceived?: string;
    id?: number;
    confirmed?: boolean;
    currency?: string;
    totalLineItemsPrice?: string;
    lineItems?: LineItems;
    createdAt?: string;
    updatedAt?: string;
    totalWeight?: number;
    billingAddress?: BillingAddress;
    totalShippingPriceSet?: TotalShippingPriceSet;
    customer?: Customer;
    totalDiscounts?: string;
    totalLineItemsPriceSet?: TotalLineItemsPriceSet;
    tags?: string;
    totalPriceUsd?: string;
    userId?: number;
    totalTax?: string;
    processingMethod?: string;
    shippingAddress?: ShippingAddress;
    taxesIncluded?: boolean;
    financialStatus?: string;
};
type TotalDiscountsSet = {
    presentmentMoney?: PresentmentMoney;
    shopMoney?: ShopMoney;
};
type PresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type ShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalPriceSet = {
    shopMoney?: TotalPriceSetShopMoney;
    presentmentMoney?: TotalPriceSetPresentmentMoney;
};
type TotalPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalPriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalTaxSet = {
    shopMoney?: TotalTaxSetShopMoney;
    presentmentMoney?: TotalTaxSetPresentmentMoney;
};
type TotalTaxSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalTaxSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type SubtotalPriceSet = {
    shopMoney?: SubtotalPriceSetShopMoney;
    presentmentMoney?: SubtotalPriceSetPresentmentMoney;
};
type SubtotalPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type SubtotalPriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type LineItems = {
    sku?: string;
    fulfillableQuantity?: number;
    grams?: number;
    totalDiscount?: string;
    article?: LineItemsArticle;
    title?: string;
    variantInventoryManagement?: string;
    id?: number;
    variantId?: number;
    variantTitle?: string;
    productExists?: boolean;
    price?: string;
    adminGraphqlApiId?: string;
    quantity?: number;
    vendor?: string;
    fulfillmentService?: string;
    taxable?: boolean;
    name?: string;
    productId?: number;
    priceSet?: PriceSet;
    taxLines?: TaxLines;
    requiresShipping?: boolean;
    giftCard?: boolean;
    totalDiscountSet?: TotalDiscountSet;
};
type LineItemsArticle = {
    quantities?: Quantities;
    oldArticleUid?: string;
    totalQuantity?: number;
    manufacturer?: Manufacturer;
    price?: ArticlePrice;
    trackInventory?: boolean;
    company?: Company;
    isActive?: boolean;
    dateMeta?: FailOrderDateMeta;
    fragile?: boolean;
    marketplaceIdentifiers?: MarketplaceIdentifiers;
    size?: string;
    isSet?: boolean;
    dimension?: Dimension;
    weight?: Weight;
    store?: Store;
    meta?: ArticleMeta;
    uid?: string;
    brand?: ArticleBrand;
    itemId?: number;
    fyndArticleCode?: string;
    id?: string;
    identifier?: LineItemsArticleIdentifier;
    sellerIdentifier?: string;
    fyndItemCode?: string;
    countryOfOrigin?: string;
};
type Quantities = {
    notAvailable?: NotAvailable;
    sellable?: Sellable;
    orderCommitted?: OrderCommitted;
    damaged?: Damaged;
};
type NotAvailable = {
    count?: number;
    updatedAt?: string;
};
type Sellable = {
    count?: number;
    updatedAt?: string;
};
type OrderCommitted = {
    count?: number;
    updatedAt?: string;
};
type Damaged = {
    updatedAt?: string;
    count?: number;
};
type Manufacturer = {
    isDefault?: boolean;
    address?: string;
    name?: string;
};
type ArticlePrice = {
    marked?: number;
    currency?: string;
    effective?: number;
    transfer?: number;
};
type Company = {
    id?: number;
    companyType?: string;
    businessType?: string;
    companyName?: string;
    createdOn?: string;
    panNo?: string;
    returnAllowed?: boolean;
    meta?: string;
    exchangeAllowed?: boolean;
    agreementStartDate?: string;
    exchangeWithinDays?: number;
    paymentProcesingCharge?: number;
    fyndAFitAvailable?: boolean;
    modifiedOn?: string;
    returnWithinDays?: number;
};
type FailOrderDateMeta = {
    addedOnStore?: string;
    inventoryUpdatedOn?: string;
    createdOn?: string;
    modifiedOn?: string;
};
type MarketplaceIdentifiers = {
    tatacliqLuxury?: TatacliqLuxury;
};
type TatacliqLuxury = {
    sku?: string;
};
type Dimension = {
    height?: number;
    width?: number;
    unit?: string;
    length?: number;
    isDefault?: boolean;
};
type Weight = {
    isDefault?: boolean;
    unit?: string;
    shipping?: number;
};
type Store = {
    id?: number;
};
type ArticleMeta = {
    service?: string;
};
type ArticleBrand = {
    name?: string;
    id?: number;
};
type LineItemsArticleIdentifier = {
    skuCode?: string;
};
type PriceSet = {
    shopMoney?: PriceSetShopMoney;
    presentmentMoney?: PriceSetPresentmentMoney;
};
type PriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type PriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type TaxLines = {
    title?: string;
    price?: string;
    rate?: number;
    priceSet?: TaxLinesPriceSet;
};
type TaxLinesPriceSet = {
    shopMoney?: TaxLinesPriceSetShopMoney;
    presentmentMoney?: TaxLinesPriceSetPresentmentMoney;
};
type TaxLinesPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TaxLinesPriceSetPresentmentMoney = {
    currencyCode?: string;
    amount?: string;
};
type TotalDiscountSet = {
    presentmentMoney?: TotalDiscountSetPresentmentMoney;
    shopMoney?: TotalDiscountSetShopMoney;
};
type TotalDiscountSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalDiscountSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type BillingAddress = {
    address1?: string;
    city?: string;
    zip?: string;
    lastName?: string;
    address2?: string;
    longitude?: number;
    provinceCode?: string;
    phone?: string;
    company?: string;
    latitude?: number;
    name?: string;
    country?: string;
    countryCode?: string;
    firstName?: string;
    province?: string;
};
type TotalShippingPriceSet = {
    shopMoney?: TotalShippingPriceSetShopMoney;
    presentmentMoney?: TotalShippingPriceSetPresentmentMoney;
};
type TotalShippingPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalShippingPriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type Customer = {
    createdAt?: string;
    id?: number;
    lastName?: string;
    state?: string;
    lastOrderId?: number;
    note?: string;
    verifiedEmail?: boolean;
    phone?: string;
    acceptsMarketing?: boolean;
    firstName?: string;
    tags?: string;
    lastOrderName?: string;
    ordersCount?: number;
    totalSpent?: string;
    taxExempt?: boolean;
    currency?: string;
    acceptsMarketingUpdatedAt?: string;
    email?: string;
    updatedAt?: string;
    adminGraphqlApiId?: string;
    defaultAddress?: DefaultAddress;
};
type DefaultAddress = {
    lastName?: string;
    name?: string;
    provinceCode?: string;
    countryCode?: string;
    isDefault?: boolean;
    id?: number;
    customerId?: number;
    firstName?: string;
    address1?: string;
    phone?: string;
    countryName?: string;
    company?: string;
    address2?: string;
    city?: string;
    province?: string;
    country?: string;
    zip?: string;
};
type TotalLineItemsPriceSet = {
    shopMoney?: TotalLineItemsPriceSetShopMoney;
    presentmentMoney?: TotalLineItemsPriceSetPresentmentMoney;
};
type TotalLineItemsPriceSetShopMoney = {
    amount?: string;
    currencyCode?: string;
};
type TotalLineItemsPriceSetPresentmentMoney = {
    amount?: string;
    currencyCode?: string;
};
type ShippingAddress = {
    address1?: string;
    zip?: string;
    address2?: string;
    countryCode?: string;
    country?: string;
    lastName?: string;
    latitude?: number;
    provinceCode?: string;
    firstName?: string;
    phone?: string;
    province?: string;
    longitude?: number;
    city?: string;
    company?: string;
    name?: string;
};
type OrderListing = {
    items: Array<OrderItems>;
    filters: Filters;
    nextOrderStatus: NextOrderStatus;
    page: PlatformOrderPage;
    appliedFilters: AppliedFilters;
};
type OrderItems = {
    user?: PlatformOrderUserInfo;
    deliveryAddress?: PlatformDeliveryAddress;
    channel?: Channel;
    breakupValues?: PlatformBreakupValues;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipment;
    createdAt?: string;
    totalShipmentsInOrder?: number;
    payments?: ItemsPayments;
};
type PlatformOrderUserInfo = {
    mobile?: string;
    firstName?: string;
    gender?: string;
    email?: string;
    lastName?: string;
    isAnonymousUser?: boolean;
    uid?: number;
    avisUserId?: string;
};
type PlatformDeliveryAddress = {
    area?: string;
    state?: string;
    country?: string;
    version?: string;
    address1?: string;
    latitude?: number;
    updatedAt?: string;
    city?: string;
    landmark?: string;
    createdAt?: string;
    name?: string;
    address?: string;
    phone?: string;
    longitude?: number;
    addressType?: string;
    email?: string;
    pincode?: string;
    address2?: string;
    contactPerson?: string;
    addressCategory?: string;
};
type Channel = {
    name?: string;
    logo?: string;
};
type PlatformBreakupValues = {
    display?: string;
    value?: number;
    name?: string;
};
type PlatformApplication = {
    name?: string;
    owner?: string;
    postOrderReassignment?: boolean;
    id?: string;
    description?: string;
    dpAssignment?: boolean;
    articleAssignment?: ArticleAssignment;
    forceReassignment?: boolean;
    token?: string;
    secret?: string;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type PlatformShipment = {
    status?: PlatformShipmentStatus;
    bags?: Bags;
    prices?: ShipmentPrices;
    breakupValues?: ShipmentBreakupValues;
    id?: string;
    dpDetails?: DpDetails;
    invoice?: ShipmentInvoice;
    fulfillingStore?: PlatformFulfillingStore;
    payments?: Payments;
    gst?: ShipmentGst;
    company?: Company;
    brand?: PlatformShipmentBrand;
    coupon?: any;
    orderSource?: string;
    isNotFyndSource?: boolean;
    comment?: string;
    promise?: Promise;
    trackingDetails?: ShipmentTrackingDetails;
    isFyndCoupon?: boolean;
    orderType?: string;
    user?: ShipmentUser;
};
type PlatformShipmentStatus = {
    id?: number;
    bagList?: Array<number>;
    createdAt?: string;
    status?: string;
    name?: string;
    progress?: number;
    shipmentId?: string;
    currentShipmentStatus?: string;
    colorCode?: string;
};
type Bags = {
    financialBreakup?: Array<BagFinancialBreakup>;
    status?: BagCurrStatus;
    item?: BagItem;
    article?: BagArticle;
    id?: number;
    prices?: BagPrices;
    gstDetails?: GstDetails;
    breakupValues?: BagBreakupValues;
    updateTime?: number;
    currentStatus?: BagCurrentStatus;
    bagStatus?: BagStatus;
};
type BagFinancialBreakup = {
    valueOfGood?: number;
    hsnCode?: string;
    priceEffective?: number;
    codCharges?: number;
    gstFee?: string;
    fyndCredits?: number;
    refundAmount?: number;
    cashbackApplied?: number;
    transferPrice?: number;
    amountPaidRoundoff?: number;
    couponValue?: number;
    amountPaid?: number;
    gstTaxPercentage?: number;
    size?: string;
    totalUnits?: number;
    discount?: number;
    couponEffectiveDiscount?: number;
    cashback?: number;
    promotionEffectiveDiscount?: number;
    gstTag?: string;
    deliveryCharge?: number;
    refundCredit?: number;
    priceMarked?: number;
    identifiers?: Identifiers;
    itemName?: string;
    addedToFyndCash?: boolean;
    brandCalculatedAmount?: number;
};
type Identifiers = {
    ean?: string;
};
type BagCurrStatus = {
    enableTracking?: boolean;
    isCustomerReturnAllowed?: boolean;
    isActive?: boolean;
    isReturnable?: boolean;
    canBeCancelled?: boolean;
};
type BagItem = {
    id?: number;
    size?: string;
    slugKey?: string;
    canReturn?: boolean;
    brandId?: number;
    l2Category?: Array<string>;
    name?: string;
    code?: string;
    canCancel?: boolean;
    attributes?: BagItemAttributes;
    l3CategoryName?: string;
    l3Category?: number;
    l1Category?: Array<string>;
    image?: Array<string>;
    brand?: string;
    lastUpdatedAt?: string;
};
type BagItemAttributes = {
    itemCode?: string;
    brandName?: string;
    countryOfOrigin?: string;
};
type BagArticle = {
    identifiers?: ArticleIdentifiers;
    espModified?: boolean;
    isSet?: boolean;
    size?: string;
    code?: string;
    set?: Set;
    sellerIdentifier?: string;
    returnConfig?: BagArticleReturnConfig;
    id?: string;
    uid?: string;
    childDetails?: any;
};
type ArticleIdentifiers = {
    ean?: string;
};
type Set = {
    quantity?: number;
    sizeDistribution?: SetSizeDistribution;
};
type SetSizeDistribution = {
    sizes?: Sizes;
};
type Sizes = {
    size?: string;
    pieces?: number;
};
type BagArticleReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type ShipmentPrices = {
    refundAmount?: number;
    cashbackApplied?: number;
    transferPrice?: number;
    couponValue?: number;
    amountPaid?: number;
    deliveryCharge?: number;
    couponEffectiveDiscount?: number;
    codCharges?: number;
    refundCredit?: number;
    addedToFyndCash?: boolean;
    gstTaxPercentage?: number;
    priceMarked?: number;
    priceEffective?: number;
    discount?: number;
    promotionEffectiveDiscount?: number;
    amountPaidRoundoff?: number;
    fyndCredits?: number;
    brandCalculatedAmount?: number;
    cashback?: number;
    valueOfGood?: number;
};
type GstDetails = {
    brandCalculatedAmount?: number;
    gstFee?: string;
    gstTag?: string;
    hsnCode?: string;
    valueOfGood?: number;
    gstTaxPercentage?: number;
    isDefaultHsnCode?: boolean;
};
type BagBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type BagCurrentStatus = {
    updatedAt?: string;
    bagStateMapper?: BagStateMapper;
    status?: string;
    stateType?: string;
};
type BagStateMapper = {
    appStateName?: string;
    isActive?: boolean;
    displayName?: string;
    name?: string;
    appDisplayName?: string;
};
type BagStatus = {
    status?: string;
    stateType?: string;
    updatedAt?: string;
    bagStateMapper?: BagStatusBagStateMapper;
};
type BagStatusBagStateMapper = {
    isActive?: boolean;
    displayName?: string;
    name?: string;
    appDisplayName?: string;
    appStateName?: string;
};
type BagPrices = {
    cashback?: number;
    refundCredit?: number;
    couponValue?: number;
    deliveryCharge?: number;
    fyndCredits?: number;
    priceMarked?: number;
    cashbackApplied?: number;
    valueOfGood?: number;
    amountPaidRoundoff?: number;
    amountPaid?: number;
    codCharges?: number;
    priceEffective?: number;
    refundAmount?: number;
    discount?: number;
};
type ShipmentBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type DpDetails = {
    gstTag?: string;
};
type ShipmentInvoice = {
    paymentType?: string;
    updatedDate?: string;
    invoiceUrl?: string;
    labelUrl?: string;
    paymentMode?: string;
    amountToCollect?: number;
    rtoAddress?: RtoAddress;
};
type RtoAddress = {
    name?: string;
    id?: number;
    phone?: string;
    locationType?: string;
    storeAddressJson?: StoreAddressJson;
    code?: string;
    address1?: string;
    city?: string;
    country?: string;
    pincode?: string;
    companyId?: number;
    contactPerson?: string;
    state?: string;
    storeEmail?: string;
    address2?: string;
};
type StoreAddressJson = {
    country?: string;
    latitude?: number;
    updatedAt?: string;
    area?: string;
    state?: string;
    addressType?: string;
    city?: string;
    pincode?: string;
    address1?: string;
    address2?: string;
    longitude?: number;
    email?: string;
    phone?: string;
    createdAt?: string;
    contactPerson?: string;
    addressCategory?: string;
    version?: string;
    landmark?: string;
};
type PlatformFulfillingStore = {
    packagingMaterialCount?: number;
    locationType?: string;
    code?: string;
    city?: string;
    meta?: FulfillingStoreMeta;
    name?: string;
    isActive?: boolean;
    address1?: string;
    storeEmail?: string;
    isArchived?: boolean;
    state?: string;
    address2?: string;
    contactPerson?: string;
    phone?: string;
    isEnabledForRecon?: boolean;
    fulfillmentChannel?: string;
    createdAt?: string;
    id?: number;
    pincode?: string;
    brandStoreTags?: Array<string>;
    companyId?: number;
    storeAddressJson?: FulfillingStoreStoreAddressJson;
    updatedAt?: string;
    loginUsername?: string;
    country?: string;
};
type FulfillingStoreMeta = {
    additionalContactDetails?: AdditionalContactDetails;
    documents?: Documents;
    gstNumber?: string;
    displayName?: string;
    productReturnConfig?: ProductReturnConfig;
    allowDpAssignmentFromFynd?: boolean;
    stage?: string;
    timing?: Timing;
};
type AdditionalContactDetails = {
    number?: Array<string>;
};
type Documents = {
    gst?: Gst;
};
type Gst = {
    legalName?: string;
    type?: string;
    value?: string;
    verified?: boolean;
};
type ProductReturnConfig = {
    onSameStore?: boolean;
};
type Timing = {
    opening?: Opening;
    weekday?: string;
    open?: boolean;
    closing?: Closing;
};
type Opening = {
    minute?: number;
    hour?: number;
};
type Closing = {
    hour?: number;
    minute?: number;
};
type FulfillingStoreStoreAddressJson = {
    address2?: string;
    area?: string;
    email?: string;
    phone?: string;
    state?: string;
    contactPerson?: string;
    country?: string;
    pincode?: string;
    version?: string;
    createdAt?: string;
    addressType?: string;
    city?: string;
    address1?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    updatedAt?: string;
    addressCategory?: string;
};
type Payments = {
    isActive?: boolean;
    displayName?: string;
    logo?: string;
    source?: string;
    sourceNickname?: string;
    displayPriority?: number;
    id?: number;
    mode?: string;
    paymentIdentifier?: string;
};
type ShipmentGst = {
    brandCalculatedAmount?: number;
    valueOfGood?: number;
    gstFee?: number;
};
type PlatformShipmentBrand = {
    creditNoteAllowed?: boolean;
    brandName?: string;
    modifiedOn?: string;
    id?: number;
    isVirtualInvoice?: boolean;
    createdOn?: string;
    logo?: string;
};
type Promise = {
    timestamp?: Timestamp;
};
type Timestamp = {
    min?: string;
    max?: string;
};
type ShipmentTrackingDetails = {
    status?: string;
    time?: string;
    isPassed?: boolean;
    isCurrent?: boolean;
};
type ShipmentUser = {
    email?: string;
    id?: number;
    firstName?: string;
    mobile?: string;
    gender?: string;
    lastName?: string;
    isAnonymousUser?: boolean;
    mongoUserId?: string;
};
type ItemsPayments = {
    displayPriority?: number;
    id?: number;
    isActive?: boolean;
    displayName?: string;
    logo?: string;
    paymentIdentifier?: string;
    sourceNickname?: string;
    mode?: string;
    source?: string;
};
type Filters = {
    stages?: Stages;
};
type Stages = {
    text?: string;
    value?: string;
    isDefault?: boolean;
    filters?: StagesFilters;
};
type StagesFilters = {
    text?: string;
    value?: string;
    type?: string;
    options?: Options;
};
type Options = {
    text?: string;
    value?: string;
};
type NextOrderStatus = {
    bagConfirmed?: BagConfirmed;
    dpAssigned?: DpAssigned;
    returnBagDelivered?: ReturnBagDelivered;
    placed?: Placed;
    deliveryDone?: DeliveryDone;
    pending?: Pending;
    bagPacked?: BagPacked;
};
type BagConfirmed = {
    text?: string;
    value?: string;
};
type DpAssigned = {
    text?: string;
    value?: string;
};
type ReturnBagDelivered = {
    text?: string;
    value?: string;
};
type Placed = {
    text?: string;
    value?: string;
};
type DeliveryDone = {
    text?: string;
    value?: string;
};
type Pending = {
    text?: string;
    value?: string;
};
type BagPacked = {
    text?: string;
    value?: string;
};
type PlatformOrderPage = {
    next?: string;
    previous?: string;
    type?: string;
    size?: number;
    current?: number;
    hasNext?: boolean;
    itemTotal?: ItemTotal;
};
type ItemTotal = {
    new?: number;
    processing?: number;
    returns?: number;
    all?: number;
};
type AppliedFilters = {
    stage?: string;
    stores?: Array<string>;
    fromDate?: string;
    toDate?: string;
};
type UpdateOrderReprocessResponse = {
    status: string;
};
type PlatformOrderTrack = {
    success: boolean;
    requestId: string;
    message: string;
    mobile: string;
    countryCode: string;
    resendTimer: number;
    resendToken?: string;
};
type GetPingResponse = {
    ping: string;
};
type UpdateShipmentStatusResponse = {
    shipments: any;
    errorShipments?: Array<any>;
};
type UpdateShipmentStatusBody = {
    shipments: any;
    forceTransition: boolean;
    task: boolean;
};
type PlatformShipmentTrack = {
    results: Results;
};
type Results = {
    awb?: string;
    updatedAt?: string;
    lastLocationRecievedAt?: string;
    reason?: string;
    shipmentType?: string;
    status?: string;
    updatedTime?: string;
    accountName?: string;
};
type UpdateProcessShipmenstRequestBody = {
    shipmentIds: Array<string>;
    expectedStatus: string;
};
type UpdateProcessShipmenstRequestResponse = {
    success: boolean;
    message: string;
};
type GetVoiceCallbackResponse = {
    message: string;
};
type GetClickToCallResponse = {
    message: string;
};
type ApefaceApiError = {
    message?: string;
};
type DeleteResponse = {
    message?: string;
};
type ErrorResponse = {
    meta?: any;
    errors?: any;
    message?: string;
    status?: number;
    code?: string;
};
type SearchKeywordResult = {
    query: any;
    sortOn: string;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    appId?: string;
    isActive?: boolean;
    customJson?: any;
    words?: Array<string>;
};
type GetSearchWordsData = {
    result?: any;
    uid?: string;
    appId?: string;
    customJson?: any;
    words?: Array<string>;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: Array<GetSearchWordsData>;
};
type AutocompletePageAction = {
    url?: string;
    query: any;
    type: string;
    params?: any;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    display?: string;
    action?: AutocompleteAction;
    customJson?: any;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    appId?: string;
    isActive?: boolean;
    customJson?: any;
    words?: Array<string>;
    results?: Array<AutocompleteResult>;
};
type GetAutocompleteWordsData = {
    uid?: string;
    appId?: string;
    customJson?: any;
    words?: Array<string>;
    results?: Array<any>;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: Array<GetAutocompleteWordsData>;
};
type CreateAutocompleteWordsResponse = {
    customJson?: any;
    words?: Array<string>;
    appId?: string;
    results?: Array<any>;
};
type ProductBundleItem = {
    productUid: number;
    autoAddToCart?: boolean;
    allowRemove?: boolean;
    minQuantity: number;
    maxQuantity: number;
    autoSelect?: boolean;
};
type ProductBundleRequest = {
    modifiedOn?: string;
    slug: string;
    choice: string;
    createdBy?: any;
    meta?: any;
    createdOn?: string;
    products: Array<ProductBundleItem>;
    pageVisibility?: Array<string>;
    sameStoreAssignment?: boolean;
    isActive: boolean;
    name: string;
    logo?: string;
    modifiedBy?: any;
};
type GetProductBundleCreateResponse = {
    modifiedOn?: string;
    companyId?: number;
    slug: string;
    choice: string;
    createdBy?: any;
    meta?: any;
    id?: string;
    createdOn?: string;
    products: Array<ProductBundleItem>;
    pageVisibility?: Array<string>;
    sameStoreAssignment?: boolean;
    isActive: boolean;
    name: string;
    logo?: string;
    modifiedBy?: any;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: Array<GetProductBundleCreateResponse>;
};
type ProductBundleUpdateRequest = {
    modifiedOn?: string;
    slug: string;
    choice: string;
    meta?: any;
    products: Array<ProductBundleItem>;
    pageVisibility?: Array<string>;
    sameStoreAssignment?: boolean;
    isActive: boolean;
    name: string;
    logo?: string;
    modifiedBy?: any;
};
type LimitedProductData = {
    sizes?: Array<string>;
    slug?: string;
    identifier?: any;
    itemCode?: string;
    uid?: number;
    images?: Array<string>;
    shortDescription?: string;
    countryOfOrigin?: string;
    price?: any;
    quantity?: number;
    attributes?: any;
    name?: string;
};
type Size = {
    display?: string;
    quantity?: number;
    value?: string;
    isAvailable?: boolean;
};
type Price = {
    maxMarked?: number;
    minMarked?: number;
    maxEffective?: number;
    minEffective?: number;
    currency?: string;
};
type GetProducts = {
    productUid?: number;
    productDetails?: LimitedProductData;
    autoAddToCart?: boolean;
    sizes?: Array<Size>;
    allowRemove?: boolean;
    minQuantity?: number;
    price?: Price;
    maxQuantity?: number;
    autoSelect?: boolean;
};
type GetProductBundleResponse = {
    companyId?: number;
    slug?: string;
    choice?: string;
    meta?: any;
    products?: Array<GetProducts>;
    pageVisibility?: Array<string>;
    sameStoreAssignment?: boolean;
    isActive?: boolean;
    name?: string;
    logo?: string;
};
type Meta = {
    values?: Array<any>;
    headers?: any;
    unit?: string;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    brandId?: number;
    companyId?: number;
    modifiedOn?: string;
    createdBy?: any;
    active?: boolean;
    id?: string;
    title: string;
    createdOn?: string;
    tag?: string;
    subtitle?: string;
    image?: string;
    description?: string;
    name: string;
    guide?: Guide;
    modifiedBy?: any;
};
type SuccessResponse = {
    uid?: number;
    success?: boolean;
};
type ListSizeGuide = {
    page?: any;
    items?: Array<any>;
};
type SizeGuideResponse = {
    brandId?: number;
    modifiedOn?: string;
    companyId?: number;
    createdBy?: any;
    active?: boolean;
    id?: string;
    createdOn?: string;
    title?: string;
    tag?: string;
    subtitle?: string;
    name?: string;
    guide?: any;
    modifiedBy?: any;
};
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    detail?: any;
    compare?: any;
    variant?: any;
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: Array<MetaDataListingSortMetaResponse>;
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    filterTypes?: Array<string>;
    key?: string;
    units?: Array<any>;
};
type MetaDataListingFilterResponse = {
    data?: Array<MetaDataListingFilterMetaResponse>;
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    key: string;
    size?: ProductSize;
    title?: string;
    subtitle?: string;
    isActive: boolean;
    logo?: string;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: Array<ConfigurationProductConfig>;
};
type ConfigurationProductVariantConfig = {
    key: string;
    name: string;
    size: ProductSize;
    displayType: string;
    isActive: boolean;
    logo?: string;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: Array<ConfigurationProductVariantConfig>;
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationListingSortConfig = {
    key: string;
    name?: string;
    isActive: boolean;
    logo?: string;
    priority: number;
};
type ConfigurationListingSort = {
    defaultKey: string;
    config?: Array<ConfigurationListingSortConfig>;
};
type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    bucketPoints?: Array<ConfigurationBucketPoints>;
    value?: string;
    sort?: string;
    condition?: string;
    map?: any;
};
type ConfigurationListingFilterConfig = {
    key: string;
    type: string;
    valueConfig?: ConfigurationListingFilterValue;
    name?: string;
    isActive: boolean;
    logo?: string;
    priority: number;
};
type ConfigurationListingFilter = {
    allowSingle: boolean;
    attributeConfig?: Array<ConfigurationListingFilterConfig>;
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type AppConfiguration = {
    configId?: string;
    configType: string;
    appId: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
};
type AppCatalogConfiguration = {
    configId?: string;
    id?: string;
    configType: string;
    appId: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
};
type GetAppCatalogConfiguration = {
    isDefault?: boolean;
    data?: AppCatalogConfiguration;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    configId?: string;
    id?: string;
    configType: string;
    appId: string;
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
};
type GetAppCatalogEntityConfiguration = {
    isDefault?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersValue = {
    selectedMin?: number;
    value: string;
    max?: number;
    selectedMax?: number;
    display: string;
    count?: number;
    currencyCode?: string;
    displayFormat?: string;
    queryFormat?: string;
    min?: number;
    isSelected: boolean;
    currencySymbol?: string;
};
type ProductFiltersKey = {
    display: string;
    kind?: string;
    name: string;
    logo?: string;
};
type ProductFilters = {
    values: Array<ProductFiltersValue>;
    key: ProductFiltersKey;
};
type ProductSortOn = {
    isSelected?: boolean;
    name?: string;
    value?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: Array<ProductFilters>;
    sortOn?: Array<ProductSortOn>;
};
type CollectionImage = {
    url: string;
    aspectRatio: string;
};
type UserInfo = {
    email?: string;
    uid?: string;
    userId?: string;
    username?: string;
};
type Schedule = {
    cron?: string;
    end?: string;
    start?: string;
    duration?: number;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CreateCollection = {
    tags?: Array<string>;
    published?: boolean;
    type: string;
    allowFacets?: boolean;
    logo: CollectionImage;
    modifiedBy?: UserInfo;
    slug: string;
    createdBy?: UserInfo;
    allowSort?: boolean;
    localeLanguage?: any;
    description?: string;
    visibleFacetsKeys?: Array<string>;
    sortOn?: string;
    schedule?: Schedule;
    isActive?: boolean;
    name: string;
    badge?: CollectionBadge;
    seo?: SeoDetail;
    meta?: any;
    query?: any;
    appId: string;
    banners: CollectionBanner;
    customJson?: any;
};
type BannerImage = {
    url?: string;
    aspectRatio?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionCreateResponse = {
    badge?: any;
    schedule?: any;
    type?: string;
    slug?: string;
    meta?: any;
    query?: any;
    name?: string;
    appId?: string;
    allowSort?: boolean;
    banners?: ImageUrls;
    tag?: Array<string>;
    isActive?: boolean;
    allowFacets?: boolean;
    cron?: any;
    visibleFacetsKeys?: Array<string>;
    description?: string;
    logo?: BannerImage;
};
type CollectionListingFilterTag = {
    display?: string;
    isSelected?: boolean;
    name?: string;
};
type CollectionListingFilterType = {
    display?: string;
    isSelected?: boolean;
    name?: string;
};
type CollectionListingFilter = {
    tags?: Array<CollectionListingFilterTag>;
    type?: Array<CollectionListingFilterType>;
};
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type ProductListingActionPage = {
    query?: any;
    type?: string;
};
type ProductListingAction = {
    page?: ProductListingActionPage;
    type?: string;
};
type GetCollectionDetailNest = {
    type?: string;
    allowFacets?: boolean;
    logo?: Media1;
    slug?: string;
    allowSort?: boolean;
    uid?: string;
    tag?: Array<string>;
    description?: string;
    visibleFacetsKeys?: Array<string>;
    schedule?: any;
    isActive?: boolean;
    name?: string;
    badge?: any;
    meta?: any;
    query?: any;
    action?: ProductListingAction;
    appId?: string;
    banners?: ImageUrls;
    cron?: any;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    page?: Page;
    items?: Array<GetCollectionDetailNest>;
};
type CollectionDetailResponse = {
    badge?: any;
    schedule?: any;
    type?: string;
    slug?: string;
    meta?: any;
    query?: any;
    name?: string;
    appId?: string;
    allowSort?: boolean;
    banners?: ImageUrls;
    tag?: Array<string>;
    isActive?: boolean;
    allowFacets?: boolean;
    cron?: any;
    visibleFacetsKeys?: Array<string>;
    description?: string;
    logo?: Media1;
};
type CollectionItemRequest = {
    pageNo: number;
    pageSize: number;
};
type UpdatedResponse = {
    message?: string;
};
type Price1 = {
    currencyCode?: string;
    max?: number;
    min?: number;
    currencySymbol?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingDetail = {
    productOnlineDate?: string;
    type?: string;
    sellable?: boolean;
    attributes?: any;
    color?: string;
    slug: string;
    uid?: number;
    imageNature?: string;
    highlights?: Array<string>;
    price?: ProductListingPrice;
    description?: string;
    rating?: number;
    medias?: Array<Media1>;
    hasVariant?: boolean;
    name?: string;
    promoMeta?: any;
    ratingCount?: number;
    similars?: Array<string>;
    shortDescription?: string;
    itemType?: string;
    teaserTag?: any;
    tryouts?: Array<string>;
    discount?: string;
};
type GetCollectionItemsResponse = {
    filters?: Array<ProductFilters>;
    page?: Page;
    sortOn?: Array<ProductSortOn>;
    items?: Array<ProductListingDetail>;
};
type CatalogInsightBrand = {
    articleFreshness?: number;
    totalArticles?: number;
    availableSizes?: number;
    totalSizes?: number;
    availableArticles?: number;
    name?: string;
};
type CatalogInsightItem = {
    sellableCount?: number;
    count?: number;
    outOfStockCount?: number;
};
type CatalogInsightResponse = {
    brandDistribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
};
type CrossSellingData = {
    products?: number;
    articles?: number;
};
type CrossSellingResponse = {
    brandDistribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    optLevel: string;
    storeIds?: Array<number>;
    enabled?: boolean;
    brandIds?: Array<number>;
};
type CompanyOptIn = {
    optLevel: string;
    companyId: number;
    modifiedOn: number;
    createdBy?: any;
    createdOn: number;
    brandIds: Array<number>;
    platform: string;
    storeIds: Array<number>;
    enabled: boolean;
    modifiedBy?: any;
};
type GetOptInPlatform = {
    page: Page;
    items: Array<CompanyOptIn>;
};
type OptinCompanyDetail = {
    uid?: number;
    businessType?: string;
    name?: string;
    companyType?: string;
};
type CompanyBrandDetail = {
    brandId?: number;
    brandName?: string;
    companyId?: number;
    totalArticle?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: Array<CompanyBrandDetail>;
};
type OptinCompanyMetrics = {
    brand?: number;
    store?: number;
    company?: string;
};
type StoreDetail = {
    additionalContacts?: Array<any>;
    modifiedOn?: string;
    companyId?: number;
    timing?: any;
    uid?: number;
    displayName?: string;
    createdOn?: string;
    documents?: Array<any>;
    storeType?: string;
    storeCode?: string;
    name?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: Array<StoreDetail>;
};
type BasePage = {
    current?: number;
    hasNext?: boolean;
    itemTotal?: number;
    hasPrevious?: boolean;
    size?: number;
};
type MultipleCommon = {
    uid?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: BasePage;
    items?: MultipleCommon;
};
type PTErrorResponse = {
    meta?: any;
    errors?: any;
    message?: string;
    status?: number;
    code?: string;
};
type BasePage1 = {
    nextPageId?: string;
    itemTotal?: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
};
type UserSerializer = {
    userId?: string;
    username?: string;
    contact?: string;
};
type GetDepartment = {
    pageSize?: number;
    modifiedOn?: string;
    slug?: string;
    createdBy?: UserSerializer;
    pageNo?: number;
    uid?: number;
    createdOn?: string;
    itemType?: string;
    synonyms?: Array<string>;
    search?: string;
    isActive?: boolean;
    priorityOrder?: number;
    name?: string;
    logo?: string;
    modifiedBy?: UserSerializer;
};
type DepartmentsResponse = {
    page?: BasePage1;
    items?: Array<GetDepartment>;
};
type DepartmentErrorResponse = {
    meta?: any;
    errors?: any;
    message?: string;
    status?: number;
    code?: string;
};
type ProductTemplate = {
    modifiedOn?: string;
    isPhysical: boolean;
    slug: string;
    createdBy?: any;
    createdOn?: string;
    tag?: string;
    departments?: Array<string>;
    modifiedBy?: any;
    isActive?: boolean;
    attributes?: Array<string>;
    description?: string;
    categories?: Array<string>;
    name?: string;
    logo?: string;
    isArchived?: boolean;
};
type TemplatesResponse = {
    page?: BasePage;
    items?: ProductTemplate;
};
type TemplatesValidationResponse = {
    data?: MultipleCommon;
};
type InventoryValidationResponse = {
    message?: string;
    data?: MultipleCommon;
};
type HSNData = {
    hsnCode?: Array<string>;
    countryOfOrigin?: Array<string>;
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type ProductConfligurationDownloads = {
    multivalue?: boolean;
    data?: Array<MultipleCommon>;
};
type Media2 = {
    landscape: string;
    logo: string;
    portrait: string;
};
type CategoryMappingValues = {
    catalogId?: number;
    name: string;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type CategoryRequestBody = {
    tryouts?: Array<string>;
    slug?: string;
    synonyms?: Array<string>;
    departments: Array<number>;
    isActive: boolean;
    level: number;
    media?: Media2;
    marketplaces?: CategoryMapping;
    name: string;
    hierarchy?: Array<Hierarchy>;
    priority?: number;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type Category = {
    tryouts?: Array<string>;
    modifiedOn?: string;
    slug?: string;
    createdBy?: any;
    uid?: number;
    createdOn?: string;
    synonyms?: Array<string>;
    departments: Array<number>;
    modifiedBy?: any;
    id?: string;
    isActive: boolean;
    level: number;
    media?: Media2;
    marketplaces?: CategoryMapping;
    name: string;
    hierarchy?: Array<Hierarchy>;
    priority?: number;
};
type CategoryResponse = {
    page?: BasePage1;
    items?: Array<Category>;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type ProductPublish = {
    productOnlineDate?: string;
    isSet?: boolean;
};
type CustomOrder = {
    manufacturingTime?: number;
    isCustomOrder?: boolean;
    manufacturingTimeUnit?: string;
};
type Trader = {
    address: string;
    name: string;
};
type OrderQuantity = {
    isSet?: boolean;
    maximum?: number;
    minimum?: number;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ReturnConfig = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type ProductCreateUpdate = {
    tags?: Array<string>;
    companyId: number;
    productPublish?: ProductPublish;
    changeRequestId?: string;
    productGroupTag?: Array<string>;
    isDependent?: boolean;
    customOrder?: CustomOrder;
    sizeGuide?: string;
    noOfBoxes?: number;
    trader?: Trader;
    moq?: OrderQuantity;
    slug: string;
    uid?: number;
    highlights?: Array<string>;
    variants?: any;
    hsnCode: string;
    multiSize?: boolean;
    media?: Array<Media1>;
    description?: string;
    requester?: string;
    isImageLessProduct?: boolean;
    categorySlug: string;
    departments: Array<number>;
    isActive?: boolean;
    name: string;
    traderType?: string;
    brandUid: number;
    itemCode: string;
    isSet?: boolean;
    shortDescription?: string;
    countryOfOrigin: string;
    itemType: string;
    teaserTag?: TeaserTag;
    templateTag: string;
    customJson?: any;
    currency: string;
    returnConfig?: ReturnConfig;
};
type PageData = {
    current?: string;
    hasNext?: boolean;
    itemTotal?: number;
    hasPrevious?: boolean;
    size?: number;
};
type ProductPublished = {
    productOnlineDate?: number;
    isSet?: boolean;
};
type UserCommon = {
    companyId?: number;
    userId?: string;
    username?: string;
};
type VerifiedBy = {
    userId?: string;
    username?: string;
};
type Attributes = {
    pattern?: string;
    l3Mapping?: Array<string>;
    productFit?: string;
    color?: string;
    essential?: string;
    stage?: string;
    modifiedBy?: UserCommon;
    verifiedBy?: VerifiedBy;
    material?: string;
    modifiedOn?: string;
    createdBy?: UserCommon;
    imageNature?: string;
    gender?: Array<string>;
    isImageLessProduct?: boolean;
    metaNature?: string;
    sleeveLength?: string;
    primaryColor?: string;
    verifiedOn?: string;
    primaryMaterial?: string;
    createdOn?: string;
    neckType?: string;
};
type Logo = {
    url?: string;
    aspectRatioF?: number;
    aspectRatio?: string;
    secureUrl?: string;
};
type Brand = {
    uid?: number;
    name?: string;
    logo?: Logo;
};
type Product = {
    companyId?: number;
    productPublish?: ProductPublished;
    isDependent?: boolean;
    sizeGuide?: string;
    attributes?: Attributes;
    sizes?: Array<any>;
    slug?: string;
    uid?: number;
    highlights?: string;
    hsnCode?: string;
    multiSize?: boolean;
    media?: Array<string>;
    description?: string;
    id?: string;
    categorySlug?: string;
    departments?: Array<number>;
    isActive?: boolean;
    name?: string;
    itemCode?: string;
    isSet?: boolean;
    images?: Array<string>;
    countryOfOrigin?: string;
    allSizes?: Array<string>;
    itemType?: string;
    brand?: Brand;
    templateTag?: string;
    currency?: string;
};
type ProductListingResponse = {
    page?: PageData;
    items?: Array<Product>;
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    email?: string;
    uid?: string;
    userId?: string;
    username?: string;
};
type BulkJob = {
    total: number;
    modifiedOn?: string;
    companyId: number;
    createdBy?: UserInfo1;
    failed?: number;
    filePath?: string;
    customTemplateTag?: string;
    createdOn: string;
    cancelledRecords?: Array<any>;
    failedRecords?: Array<any>;
    templateTag?: string;
    isActive?: boolean;
    trackingUrl?: string;
    succeed?: number;
    stage?: string;
    modifiedBy?: UserInfo1;
    cancelled?: number;
};
type UserDetail = {
    fullName?: string;
    userId?: string;
    username?: string;
};
type ProductBulkRequest = {
    total?: number;
    companyId?: number;
    modifiedOn?: string;
    createdBy?: UserDetail;
    failed?: number;
    filePath?: string;
    createdOn?: string;
    template?: ProductTemplate;
    cancelledRecords?: Array<string>;
    failedRecords?: Array<string>;
    templateTag?: string;
    isActive?: boolean;
    succeed?: number;
    stage?: string;
    modifiedBy?: UserDetail;
    cancelled?: number;
};
type ProductBulkRequestList = {
    page?: PageData;
    items?: ProductBulkRequest;
};
type BulkProductRequest = {
    templateTag: string;
    companyId: number;
    batchId: string;
    data: Array<any>;
};
type NestedTags = {
    tags?: Array<string>;
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    user: any;
    url: string;
    companyId?: number;
};
type Items = {
    total?: number;
    filePath?: string;
    modifiedOn?: string;
    createdBy?: UserCommon;
    failed?: number;
    retry?: number;
    companyId?: number;
    id?: string;
    createdOn?: string;
    cancelledRecords?: Array<string>;
    failedRecords?: Array<string>;
    isActive?: boolean;
    trackingUrl?: string;
    succeed?: number;
    stage?: string;
    modifiedBy?: UserCommon;
    cancelled?: number;
};
type BulkAssetResponse = {
    page?: PageData;
    items?: Array<Items>;
};
type ItemQuery = {
    uid?: number;
    itemCode?: string;
    brandUid?: number;
};
type GTIN = {
    primary?: boolean;
    gtinValue: string;
    gtinType: string;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: Array<SetSize>;
};
type InventorySet = {
    sizeDistribution: SizeDistribution;
    quantity?: number;
};
type InvSize = {
    itemWeightUnitOfMeasure?: string;
    itemHeight?: number;
    identifiers: Array<GTIN>;
    isSet?: boolean;
    itemDimensionsUnitOfMeasure?: string;
    itemLength?: number;
    itemWeight?: number;
    price: number;
    itemWidth?: number;
    quantity: number;
    storeCode: string;
    priceTransfer?: number;
    currency: string;
    set?: InventorySet;
    size: string;
    priceEffective: number;
};
type InventoryRequest = {
    item: ItemQuery;
    companyId: number;
    sizes: Array<InvSize>;
};
type InventoryRequest1 = {
    pageSize?: number;
    total?: number;
    pageNo?: number;
    search?: string;
    size?: string;
};
type CommonResponse = {
    success?: string;
};
type BulkRequestGet = {
    pageSize?: number;
    total?: number;
    customTemplateTag?: string;
    pageNo?: number;
    startDate?: string;
    endDate?: string;
    templateTag?: string;
    stage?: string;
    search?: string;
};
type Size1 = {
    itemWeightUnitOfMeasure?: string;
    itemHeight?: number;
    identifiers?: Array<any>;
    isSet?: boolean;
    itemDimensionsUnitOfMeasure?: string;
    itemLength?: number;
    itemWeight?: number;
    price: number;
    itemWidth?: number;
    quantity: number;
    storeCode: string;
    priceTransfer?: number;
    currency: string;
    set?: InventorySet;
    sellerIdentifier: string;
    size?: string;
    priceEffective: number;
};
type InventoryBulkRequest = {
    user?: any;
    companyId: number;
    sizes: Array<Size1>;
    batchId: string;
};
type InventoryExportRequest = {
    brand?: Array<number>;
    store?: Array<number>;
    type?: string;
};
type InventoryExportJob = {
    taskId: string;
    sellerId: number;
    triggerOn?: string;
    completedOn?: string;
    requestParams?: any;
    url?: string;
    status?: string;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    multivalues?: boolean;
    data?: Array<FilerList>;
};
type ReferralInfo = {
    referralCode?: string;
};
type CompanyAddress = {
    address2?: string;
    latitude: number;
    landmark?: string;
    pincode: number;
    longitude: number;
    state: string;
    country: string;
    countryCode?: string;
    address1: string;
    city: string;
};
type Document = {
    type: string;
    legalName: string;
    value: string;
    url?: string;
    verified?: boolean;
};
type BusinessCountryInfo = {
    country?: string;
    countryCode?: string;
};
type CompanyStoreSerializerRequest = {
    brands: Array<number>;
    franchiseEnabled?: boolean;
    referralInfo?: ReferralInfo;
    name: string;
    warnings?: any;
    address: CompanyAddress;
    businessType: string;
    notificationEmails?: Array<string>;
    uid?: number;
    document: Document;
    businessInfo?: string;
    businessCountryInfo: BusinessCountryInfo;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type ContactDetails = {
    phone?: Array<PhoneNumber>;
    emails?: Array<string>;
};
type GetAddressSerializer = {
    address2?: string;
    latitude?: number;
    landmark?: string;
    pincode?: number;
    longitude?: number;
    country?: string;
    addressType?: string;
    state?: string;
    countryCode?: string;
    address1?: string;
    city?: string;
};
type BusinessCountryInfo1 = {
    country?: string;
    countryCode?: string;
};
type GetCompanyProfileSerializerResponse = {
    modifiedOn?: string;
    companyType: string;
    businessDetails?: BusinessDetails;
    documents?: Array<Document>;
    notificationEmails?: Array<string>;
    createdBy?: UserSerializer;
    createdOn?: string;
    warnings?: any;
    verifiedOn?: string;
    businessType: string;
    verifiedBy?: UserSerializer;
    contactDetails?: ContactDetails;
    franchiseEnabled?: boolean;
    addresses?: Array<GetAddressSerializer>;
    uid: number;
    businessInfo?: string;
    modifiedBy?: UserSerializer;
    name?: string;
    stage?: string;
    businessCountryInfo?: BusinessCountryInfo1;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    brand?: DocumentsObj;
    stage?: string;
    companyDocuments?: DocumentsObj;
    uid?: number;
    storeDocuments?: DocumentsObj;
    product?: DocumentsObj;
    store?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    userId?: string;
};
type GetBrandResponseSerializer = {
    modifiedOn?: string;
    banner?: BrandBannerSerializer;
    synonyms?: Array<string>;
    logo?: string;
    customJson?: any;
    createdOn?: string;
    name: string;
    stage?: string;
    rejectReason?: string;
    warnings?: any;
    verifiedOn?: string;
    description?: string;
    slugKey?: string;
    localeLanguage?: any;
    verifiedBy?: UserSerializer1;
    uid?: number;
    createdBy?: UserSerializer1;
    modifiedBy?: UserSerializer1;
};
type CreateUpdateBrandRequestSerializer = {
    banner?: BrandBannerSerializer;
    synonyms?: Array<string>;
    logo: string;
    customJson?: any;
    companyId?: number;
    brandTier?: string;
    name: string;
    localeLanguage?: any;
    description?: string;
    uid?: number;
};
type CompanyBrandPostRequestSerializer = {
    brands: Array<number>;
    company: number;
    uid?: number;
};
type CompanyBrandListSerializer = {
    items?: Array<any>;
    page?: any;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
};
type ProductReturnConfigSerializer = {
    storeUid?: number;
    onSameStore?: boolean;
};
type GetAddressSerializer1 = {
    address2?: string;
    latitude?: number;
    landmark?: string;
    pincode?: number;
    longitude?: number;
    country?: string;
    addressType?: string;
    state?: string;
    countryCode?: string;
    address1?: string;
    city?: string;
};
type InvoiceCredSerializer = {
    username?: string;
    enabled?: boolean;
    password?: string;
};
type InvoiceDetailsSerializer = {
    eWaybill?: InvoiceCredSerializer;
    eInvoice?: InvoiceCredSerializer;
};
type LocationManagerSerializer = {
    email?: string;
    mobileNo: PhoneNumber;
    name?: string;
};
type LocationSerializer = {
    customJson?: any;
    timing?: Array<LocationDayWiseSerializer>;
    company: number;
    name: string;
    stage?: string;
    code: string;
    productReturnConfig?: ProductReturnConfigSerializer;
    displayName: string;
    storeType?: string;
    documents?: Array<Document>;
    address: GetAddressSerializer1;
    notificationEmails?: Array<string>;
    uid?: number;
    warnings?: any;
    gstCredentials?: InvoiceDetailsSerializer;
    contactNumbers?: Array<PhoneNumber>;
    manager?: LocationManagerSerializer;
};
type LocationListSerializer = {
    items?: Array<any>;
    page?: any;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetCompanySerializer = {
    modifiedOn?: string;
    addresses?: Array<GetAddressSerializer>;
    createdOn?: string;
    companyType?: string;
    name?: string;
    stage?: string;
    rejectReason?: string;
    verifiedOn?: string;
    businessType?: string;
    verifiedBy?: UserSerializer;
    uid?: number;
    createdBy?: UserSerializer;
    modifiedBy?: UserSerializer;
};
type GetLocationSerializer = {
    modifiedOn?: string;
    integrationType?: LocationIntegrationType;
    productReturnConfig?: ProductReturnConfigSerializer;
    documents?: Array<Document>;
    notificationEmails?: Array<string>;
    createdBy?: UserSerializer1;
    createdOn?: string;
    code: string;
    warnings?: any;
    verifiedOn?: string;
    storeType?: string;
    address: GetAddressSerializer;
    verifiedBy?: UserSerializer1;
    phoneNumber: string;
    contactNumbers?: Array<PhoneNumber>;
    manager?: LocationManagerSerializer;
    customJson?: any;
    company?: GetCompanySerializer;
    displayName: string;
    uid?: number;
    modifiedBy?: UserSerializer1;
    timing?: Array<LocationDayWiseSerializer>;
    name: string;
    stage?: string;
    gstCredentials?: InvoiceDetailsSerializer;
};
type FailedResponse = {
    message: string;
};
type CDN = {
    url: string;
};
type Upload = {
    expiry: number;
    url: string;
};
type StartResponse = {
    fileName: string;
    filePath: string;
    contentType: string;
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
};
type StartRequest = {
    fileName: string;
    contentType: string;
    size: number;
    tags?: Array<string>;
};
type CompleteResponse = {
    id: string;
    fileName: string;
    filePath: string;
    contentType: string;
    method: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: string;
    tags?: Array<string>;
    createdOn: string;
    modifiedOn: string;
};
type Opts = {
    attempts?: number;
    timestamp?: number;
    delay?: number;
};
type CopyFileTask = {
    id: string;
    name: string;
    data: BulkRequest;
    opts: Opts;
    progress: number;
    delay: number;
    timestamp: number;
    attemptsMade: number;
    stacktrace?: Array<string>;
    finishedOn: number;
    processedOn: number;
};
type BulkResponse = {
    trackingUrl: string;
    task: CopyFileTask;
};
type ReqConfiguration = {
    concurrency?: number;
};
type Destination = {
    namespace: string;
    rewrite: string;
    basepath?: string;
};
type BulkRequest = {
    urls: Array<string>;
    destination: Destination;
    configuration?: ReqConfiguration;
};
type Urls = {
    url: string;
    signedUrl: string;
    expiry: number;
};
type SignUrlResponse = {
    urls: Array<Urls>;
};
type SignUrlRequest = {
    expiry: number;
    urls: Array<string>;
};
type DbRecord = {
    success: boolean;
    tags: Array<string>;
    id: string;
    fileName: string;
    operation?: string;
    namespace: string;
    contentType: string;
    filePath: string;
    upload: Upload;
    cdn: CDN;
    createdOn: string;
    modifiedOn: string;
};
type BrowseResponse = {
    items: Array<DbRecord>;
    page: Page;
};
type RedirectDevice = {
    link?: string;
    type?: string;
};
type WebRedirect = {
    link?: string;
    type?: string;
};
type Redirects = {
    ios?: RedirectDevice;
    android?: RedirectDevice;
    web?: WebRedirect;
    forceWeb?: boolean;
};
type Attribution = {
    campaignCookieExpiry?: string;
};
type SocialMediaTags = {
    title?: string;
    description?: string;
    image?: string;
};
type ShortLinkReq = {
    title: string;
    url: string;
    hash?: string;
    active?: boolean;
    expireAt?: string;
    enableTracking?: boolean;
    personalized?: boolean;
    campaign?: Campaign;
    redirects?: Redirects;
    attribution?: Attribution;
    socialMediaTags?: SocialMediaTags;
    count?: number;
};
type UrlInfo = {
    original?: string;
    short?: string;
    hash?: string;
};
type ShortLinkRes = {
    title?: string;
    url?: UrlInfo;
    createdBy?: string;
    appRedirect?: boolean;
    fallback?: string;
    active?: boolean;
    id?: string;
    enableTracking?: boolean;
    expireAt?: string;
    application?: string;
    userId?: string;
    createdAt?: string;
    updatedAt?: string;
    personalized?: boolean;
    campaign?: Campaign;
    redirects?: Redirects;
    attribution?: Attribution;
    socialMediaTags?: SocialMediaTags;
    count?: number;
};
type ShortLinkList = {
    items?: Array<ShortLinkRes>;
    page?: Page;
};
type PostOrder = {
    cancellationAllowed?: boolean;
    returnAllowed?: boolean;
};
type BulkBundleRestriction = {
    multiStoreAllowed: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: Array<string>;
    uses?: PaymentAllowValue;
    networks?: Array<string>;
    types?: Array<string>;
};
type PaymentCodes = {
    ps?: PaymentModes;
    wl?: PaymentModes;
    qr?: PaymentModes;
    upi?: PaymentModes;
    card?: PaymentModes;
    nb?: PaymentModes;
    pl?: PaymentModes;
};
type UsesRemaining = {
    app?: number;
    total?: number;
    user?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type Restrictions = {
    postOrder?: PostOrder;
    platforms?: Array<string>;
    couponAllowed?: boolean;
    bulkBundle?: BulkBundleRestriction;
    payments?: PaymentCodes;
    orderingStores?: Array<number>;
    uses?: UsesRestriction;
    priceRange?: PriceRange;
};
type RuleDefinition = {
    applicableOn: string;
    isExact?: boolean;
    currencyCode?: string;
    scope?: Array<string>;
    valueType: string;
    type: string;
    autoApply?: boolean;
    calculateOn: string;
};
type CouponSchedule = {
    end?: string;
    cron?: string;
    start?: string;
    nextSchedule?: Array<any>;
    duration?: number;
};
type Identifier = {
    articleId?: Array<string>;
    storeId?: Array<number>;
    brandId?: Array<number>;
    collectionId?: Array<string>;
    companyId?: Array<number>;
    userId?: Array<string>;
    categoryId?: Array<number>;
    itemId?: Array<number>;
};
type Ownership = {
    payableBy: string;
    payableCategory: string;
};
type Validity = {
    priority?: number;
};
type CouponAction = {
    txnMode?: string;
    actionDate?: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    subtitle?: string;
    description?: string;
    apply?: DisplayMetaDict;
    title?: string;
    remove?: DisplayMetaDict;
    auto?: DisplayMetaDict;
};
type CouponDateMeta = {
    createdOn?: string;
    modifiedOn?: string;
};
type State = {
    isDisplay?: boolean;
    isArchived?: boolean;
    isPublic?: boolean;
};
type Validation = {
    appId?: Array<string>;
    userRegisteredAfter?: string;
    anonymous?: boolean;
};
type Rule = {
    min?: number;
    discountQty?: number;
    value?: number;
    key?: number;
    max?: number;
};
type CouponAuthor = {
    modifiedBy?: string;
    createdBy?: string;
};
type CouponAdd = {
    restrictions?: Restrictions;
    code: string;
    ruleDefinition: RuleDefinition;
    schedule?: CouponSchedule;
    typeSlug: string;
    identifiers: Identifier;
    ownership: Ownership;
    validity: Validity;
    action?: CouponAction;
    tags?: Array<string>;
    displayMeta: DisplayMeta;
    dateMeta?: CouponDateMeta;
    state?: State;
    validation?: Validation;
    rule: Array<Rule>;
    author?: CouponAuthor;
};
type CouponsResponse = {
    page?: Pagination;
    items?: CouponAdd;
};
type SuccessMessage = {
    success?: boolean;
    message?: string;
};
type OperationErrorResponse = {
    success?: boolean;
    message?: string;
};
type CouponUpdate = {
    restrictions?: Restrictions;
    code: string;
    ruleDefinition: RuleDefinition;
    schedule?: CouponSchedule;
    typeSlug: string;
    identifiers: Identifier;
    ownership: Ownership;
    validity: Validity;
    action?: CouponAction;
    tags?: Array<string>;
    displayMeta: DisplayMeta;
    dateMeta?: CouponDateMeta;
    state?: State;
    validation?: Validation;
    rule: Array<Rule>;
    author?: CouponAuthor;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type StoreMapping = {
    enabled?: string;
    marketplaceStoreId?: string;
    storeId?: number;
    meta?: any;
};
type AllChannels = {
    mkpName?: boolean;
};
type MyntraPayload = {
    merchantId?: string;
    secretKey?: string;
};
type AmazonPayload = {
    sellerId?: string;
    mwsAuthToken?: string;
};
type FlipkartPayload = {
    code?: string;
};
type TatacliqPayload = {
    userName?: string;
    password?: string;
    merchantId?: string;
};
type AjioPayload = {
    username?: string;
    password?: string;
    clientIp?: string;
};
type StoreMappingPayload = {
    storeMappingEnabled?: boolean;
    storeMapping?: Array<StoreMapping>;
};
type StatusPayload = {
    isActive?: boolean;
};
type StatusResp = {
    isActive?: boolean;
};
type SyncPayload = {
    modifiedSince?: string;
};
type SyncResp = {
    message?: string;
};
type MkpResp = {
    marketplace?: string;
    worker?: number;
    workerAssigned?: string;
    isActive?: boolean;
    storeMappingEnabled?: boolean;
    companyId?: number;
    configuration?: any;
    storeMapping?: Array<StoreMapping>;
};
type StatGroup = {
    key?: string;
    url?: string;
    title?: string;
};
type StatsGroups = {
    groups?: Array<StatGroup>;
};
type StatsGroupComponent = {
    key?: string;
    url?: string;
    title?: string;
    type?: string;
    filters?: any;
};
type StatsGroupComponents = {
    title?: string;
    components?: Array<StatsGroupComponent>;
};
type StatsRes = {
    key?: string;
    title?: string;
    type?: string;
    data?: any;
};
type ReceivedAt = {
    value?: string;
};
type AbandonCartsDetail = {
    propertiesCartId?: string;
    contextTraitsFirstName?: string;
    contextTraitsLastName?: string;
    contextTraitsPhoneNumber?: string;
    contextTraitsEmail?: string;
    contextAppApplicationId?: string;
    propertiesBreakupValuesRawTotal?: string;
    receivedAt?: ReceivedAt;
};
type AbandonCartsList = {
    items?: Array<AbandonCartsDetail>;
    cartTotal?: string;
    page?: Page;
};
type AbandonCartDetail = {
    id?: string;
    userId?: string;
    cartValue?: string;
    articles?: Array<any>;
    breakup?: any;
    address?: any;
};
type ExportJobReq = {
    marketplaceName?: string;
    startTime?: string;
    endTime?: string;
    eventType?: string;
};
type ExportJobRes = {
    status?: string;
    jobId?: string;
};
type ExportJobStatusRes = {
    status?: string;
    jobId?: string;
    downloadUrl?: string;
};
type GetLogsListReq = {
    marketplaceName?: string;
    startDate?: string;
    companyId?: string;
    endDate?: string;
};
type MkpLogsResp = {
    startTimeIso?: string;
    endTimeIso?: string;
    eventType?: string;
    traceId?: string;
    count?: string;
    status?: string;
};
type GetLogsListRes = {
    items?: Array<MkpLogsResp>;
    page?: Page;
};
type SearchLogReq = {
    marketplaceName?: string;
    startDate?: string;
    companyId?: string;
    endDate?: string;
    identifier?: string;
    identifierValue?: string;
};
type LogInfo = {
    id?: string;
    status?: string;
    eventType?: string;
    marketplaceName?: string;
    event?: string;
    traceId?: string;
    companyId?: number;
    brandId?: number;
    storeCode?: string;
    storeId?: number;
    itemId?: number;
    articleId?: string;
    sellerIdentifier?: string;
};
type SearchLogRes = {
    items?: Array<LogInfo>;
    page?: Page;
};
import Paginator = require("../common/Paginator");
