export = PlatformApplicationClient;
declare class PlatformApplicationClient {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    theme: Theme;
    user: User;
    content: Content;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    share: Share;
    cart: Cart;
    rewards: Rewards;
    analytics: Analytics;
}
declare namespace PlatformApplicationClient {
    export { TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, KeyValue, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketCategory, SubmitButton, PollForAssignment, CustomForm, TicketHistory, Ticket, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, pagesSchema, availableSectionSchema, sectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, AvailablePages, Seo, Sections, Config, Preset, GlobalSchema, ListSchema, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, BlocksProps, PageSections, PageSectionsBlocks, PageSectionsBlocksProps, Predicate, Screen, PredicateUserSchema, Route, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, SendEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, AuthSuccess, SendOtpResponse, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, Mobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, Facebook, Accountkit, Google, ApplicationLegal, ApplicationLegalFAQ, SeoComponent, SeoSchema, CustomMetaTag, Detail, StorefrontAnnouncement, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, announcementSchema, scheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, AnnouncementDataSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, APIError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryByIdOrSlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, CustomBlogSchema, FeatureImage, CustomBlog, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, UnauthenticatedUser, UnauthenticatedApplication, BadRequest, ResourceNotFound, InternalServerError, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, GetActivityStatus, ActivityHistory, FailedOrders, FailOrder, MarketplaceOrder, TotalDiscountsSet, PresentmentMoney, ShopMoney, TotalPriceSet, TotalPriceSetShopMoney, TotalPriceSetPresentmentMoney, TotalTaxSet, TotalTaxSetShopMoney, TotalTaxSetPresentmentMoney, SubtotalPriceSet, SubtotalPriceSetShopMoney, SubtotalPriceSetPresentmentMoney, LineItems, LineItemsArticle, Quantities, NotAvailable, Sellable, OrderCommitted, Damaged, Manufacturer, ArticlePrice, Company, FailOrderDateMeta, MarketplaceIdentifiers, TatacliqLuxury, Dimension, Weight, Store, ArticleMeta, ArticleBrand, LineItemsArticleIdentifier, PriceSet, PriceSetShopMoney, PriceSetPresentmentMoney, TaxLines, TaxLinesPriceSet, TaxLinesPriceSetShopMoney, TaxLinesPriceSetPresentmentMoney, TotalDiscountSet, TotalDiscountSetPresentmentMoney, TotalDiscountSetShopMoney, BillingAddress, TotalShippingPriceSet, TotalShippingPriceSetShopMoney, TotalShippingPriceSetPresentmentMoney, Customer, DefaultAddress, TotalLineItemsPriceSet, TotalLineItemsPriceSetShopMoney, TotalLineItemsPriceSetPresentmentMoney, ShippingAddress, OrderListing, OrderItems, PlatformOrderUserInfo, PlatformDeliveryAddress, Channel, PlatformBreakupValues, PlatformApplication, ArticleAssignment, PlatformShipment, PlatformShipmentStatus, Bags, BagFinancialBreakup, Identifiers, BagCurrStatus, BagItem, BagItemAttributes, BagArticle, ArticleIdentifiers, Set, SetSizeDistribution, Sizes, BagArticleReturnConfig, ShipmentPrices, GstDetails, BagBreakupValues, BagCurrentStatus, BagStateMapper, BagStatus, BagStatusBagStateMapper, BagPrices, ShipmentBreakupValues, DpDetails, ShipmentInvoice, RtoAddress, StoreAddressJson, PlatformFulfillingStore, FulfillingStoreMeta, AdditionalContactDetails, Documents, Gst, ProductReturnConfig, Timing, Opening, Closing, FulfillingStoreStoreAddressJson, Payments, ShipmentGst, PlatformShipmentBrand, Promise, Timestamp, ShipmentTrackingDetails, ShipmentUser, ItemsPayments, Filters, Stages, StagesFilters, Options, NextOrderStatus, BagConfirmed, DpAssigned, ReturnBagDelivered, Placed, DeliveryDone, Pending, BagPacked, PlatformOrderPage, ItemTotal, AppliedFilters, UpdateOrderReprocessResponse, PlatformOrderTrack, GetPingResponse, UpdateShipmentStatusResponse, UpdateShipmentStatusBody, PlatformShipmentTrack, Results, UpdateProcessShipmenstRequestBody, UpdateProcessShipmenstRequestResponse, GetVoiceCallbackResponse, GetClickToCallResponse, ApefaceApiError, DeleteResponse, ErrorResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, Page, GetSearchWordsDetailResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ListSizeGuide, Meta, Guide, ValidateSizeGuide, SuccessResponse, SizeGuideResponse, GetCatalogConfigurationDetailsProduct, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, Media1, BannerImage, ImageUrls, ProductListingActionPage, ProductListingAction, GetCollectionDetailNest, GetCollectionListingResponse, CollectionImage, UserInfo, Schedule, SeoDetail, CollectionBadge, CollectionBanner, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, BasePage, MultipleCommon, ProdcutTemplateCategoriesResponse, PTErrorResponse, BasePage1, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, ProductTemplate, TemplatesResponse, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductConfligurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, PageData, ProductPublished, Logo, Brand, UserCommon, VerifiedBy, Attributes, Product, ProductListingResponse, Trader, ProductPublish, ReturnConfig, TeaserTag, OrderQuantity, CustomOrder, ProductCreateUpdate, ValidateProduct, UserDetail, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkProductRequest, NestedTags, ProductTagsViewResponse, Items, BulkAssetResponse, ProductBulkAssets, InventoryRequest, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest1, BulkRequestGet, CommonResponse, Size1, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, FilerList, InventoryConfig, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, SellerPhoneNumber, ContactDetails, GetAddressSerializer, Document, Website, BusinessDetails, BusinessCountryInfo, GetCompanyProfileSerializerResponse, ReferralInfo, BusinessCountryInfo1, CompanyAddress, CompanyStoreSerializerRequest, DocumentsObj, MetricsSerializer, UserSerializer1, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationListSerializer, LocationManagerSerializer, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetAddressSerializer1, LocationTimingSerializer, LocationDayWiseSerializer, LocationSerializer, LocationIntegrationType, GetCompanySerializer, GetLocationSerializer, RedirectDevice, WebRedirect, Redirects, Campaign, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, RuleDefinition, CouponDateMeta, Validation, Rule, State, Validity, Ownership, CouponAuthor, CouponAction, DisplayMetaDict, DisplayMeta, CouponSchedule, PriceRange, BulkBundleRestriction, PostOrder, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, PaymentCodes, Restrictions, Identifier, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, StoreMapping, AllChannels, MyntraPayload, AmazonPayload, FlipkartPayload, TatacliqPayload, AjioPayload, InventorySyncConfig, StoreMappingPayload, StatusPayload, StatusResp, SyncPayload, SyncResp, MkpResp, AppUser, Audience, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, DiscountJob, ListOrCalender, CreateUpdateDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails };
}
/**
        @typedef TicketList
        
        
        @property { Array<Ticket> } [items]
        
        @property { Filter } [filters]
        
        @property { Page } [page]
        
         
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
        @typedef GetFaqCategoryByIdOrSlugSchema
        
        
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
        @typedef PaymentGatewayConfigResponse
        
        
        @property { boolean } created
        
        @property { Array<Object> } [aggregators]
        
        @property { Array<string> } excludedFields
        
        @property { boolean } success
        
        @property { Array<string> } displayFields
        
        @property { string } appId
        
         
    */
/**
        @typedef ErrorCodeDescription
        
        
        @property { string } description
        
        @property { string } code
        
        @property { boolean } success
        
         
    */
/**
        @typedef PaymentGatewayConfig
        
        
        @property { string } configType
        
        @property { string } secret
        
        @property { string } key
        
        @property { boolean } [isActive]
        
        @property { string } merchantSalt
        
         
    */
/**
        @typedef PaymentGatewayConfigRequest
        
        
        @property { PaymentGatewayConfig } [aggregatorName]
        
        @property { boolean } [isActive]
        
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
        
        
        @property { ErrorCodeAndDescription } error
        
        @property { boolean } success
        
         
    */
/**
        @typedef PaymentModeLogo
        
        
        @property { string } large
        
        @property { string } small
        
         
    */
/**
        @typedef PaymentModeList
        
        
        @property { number } [retryCount]
        
        @property { number } [expMonth]
        
        @property { string } [intentFlow]
        
        @property { string } [cardFingerprint]
        
        @property { string } [fyndVpa]
        
        @property { string } [cardReference]
        
        @property { string } [displayName]
        
        @property { Array<string> } [intentAppErrorList]
        
        @property { string } [nickname]
        
        @property { string } [cardNumber]
        
        @property { string } [cardBrandImage]
        
        @property { string } [cardToken]
        
        @property { number } [displayPriority]
        
        @property { string } [cardId]
        
        @property { string } [cardIsin]
        
        @property { string } [code]
        
        @property { string } aggregatorName
        
        @property { string } [cardIssuer]
        
        @property { string } [cardBrand]
        
        @property { number } [expYear]
        
        @property { string } [cardType]
        
        @property { string } [merchantCode]
        
        @property { string } [name]
        
        @property { number } [timeout]
        
        @property { PaymentModeLogo } [logoUrl]
        
        @property { boolean } [expired]
        
        @property { string } [cardName]
        
         
    */
/**
        @typedef RootPaymentMode
        
        
        @property { string } name
        
        @property { string } [aggregatorName]
        
        @property { boolean } [addCardEnabled]
        
        @property { Array<PaymentModeList> } [list]
        
        @property { string } displayName
        
        @property { number } displayPriority
        
        @property { boolean } [anonymousEnable]
        
         
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
        
        
        @property { Object } uniqueTransferNo
        
        @property { string } transferType
        
        @property { Object } moreAttributes
        
        @property { Object } customers
        
        @property { boolean } isDefault
        
        @property { Array<Object> } payoutsAggregators
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef PayoutRequest
        
        
        @property { string } uniqueExternalId
        
        @property { string } transferType
        
        @property { string } aggregator
        
        @property { Object } users
        
        @property { Object } bankDetails
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef PayoutResponse
        
        
        @property { string } uniqueTransferNo
        
        @property { boolean } created
        
        @property { string } paymentStatus
        
        @property { Object } users
        
        @property { string } aggregator
        
        @property { string } transferType
        
        @property { Object } payouts
        
        @property { Object } bankDetails
        
        @property { boolean } success
        
        @property { boolean } isActive
        
         
    */
/**
        @typedef UpdatePayoutResponse
        
        
        @property { boolean } isActive
        
        @property { boolean } success
        
        @property { boolean } isDefault
        
         
    */
/**
        @typedef UpdatePayoutRequest
        
        
        @property { boolean } isActive
        
        @property { string } uniqueExternalId
        
        @property { boolean } isDefault
        
         
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
        
        
        @property { Object } config
        
        @property { string } aggregator
        
        @property { boolean } success
        
         
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
        
        
        @property { string } [message]
        
        @property { number } [status]
        
        @property { string } [code]
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef SearchKeywordResult
        
        
        @property { Object } query
        
        @property { string } sortOn
        
         
    */
/**
        @typedef CreateSearchKeyword
        
        
        @property { SearchKeywordResult } result
        
        @property { Object } [customJson]
        
        @property { boolean } [isActive]
        
        @property { string } [appId]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef GetSearchWordsData
        
        
        @property { string } [uid]
        
        @property { Object } [result]
        
        @property { Object } [customJson]
        
        @property { string } [appId]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef Page
        
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [current]
        
        @property { string } [nextPageId]
        
        @property { boolean } [hasNext]
        
         
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
        @typedef Media
        
        
        @property { string } [type]
        
        @property { string } [url]
        
         
    */
/**
        @typedef AutocompletePageAction
        
        
        @property { Object } query
        
        @property { Object } [params]
        
        @property { string } type
        
        @property { string } [url]
        
         
    */
/**
        @typedef AutocompleteAction
        
        
        @property { AutocompletePageAction } [page]
        
        @property { string } [type]
        
         
    */
/**
        @typedef AutocompleteResult
        
        
        @property { Media } [logo]
        
        @property { AutocompleteAction } [action]
        
        @property { Object } [customJson]
        
        @property { string } [display]
        
         
    */
/**
        @typedef CreateAutocompleteKeyword
        
        
        @property { Object } [customJson]
        
        @property { boolean } [isActive]
        
        @property { string } [appId]
        
        @property { Array<AutocompleteResult> } [results]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef GetAutocompleteWordsData
        
        
        @property { string } [uid]
        
        @property { Object } [customJson]
        
        @property { string } [appId]
        
        @property { Array<Object> } [results]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef GetAutocompleteWordsResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetAutocompleteWordsData> } [items]
        
         
    */
/**
        @typedef CreateAutocompleteWordsResponse
        
        
        @property { Array<Object> } [results]
        
        @property { Object } [customJson]
        
        @property { string } [appId]
        
        @property { Array<string> } [words]
        
         
    */
/**
        @typedef ProductBundleItem
        
        
        @property { number } productUid
        
        @property { number } maxQuantity
        
        @property { boolean } [autoAddToCart]
        
        @property { boolean } [autoSelect]
        
        @property { boolean } [allowRemove]
        
        @property { number } minQuantity
        
         
    */
/**
        @typedef GetProductBundleCreateResponse
        
        
        @property { string } [id]
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } isActive
        
        @property { Object } [meta]
        
        @property { string } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } [logo]
        
        @property { string } [modifiedOn]
        
        @property { string } name
        
        @property { string } choice
        
        @property { string } slug
        
        @property { number } [companyId]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef GetProductBundleListingResponse
        
        
        @property { Page } [page]
        
        @property { Array<GetProductBundleCreateResponse> } [items]
        
         
    */
/**
        @typedef ProductBundleRequest
        
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } isActive
        
        @property { Object } [meta]
        
        @property { string } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } [logo]
        
        @property { string } [modifiedOn]
        
        @property { string } name
        
        @property { string } choice
        
        @property { string } slug
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef ProductBundleUpdateRequest
        
        
        @property { Array<ProductBundleItem> } products
        
        @property { Array<string> } [pageVisibility]
        
        @property { boolean } isActive
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } [logo]
        
        @property { string } [modifiedOn]
        
        @property { string } name
        
        @property { string } choice
        
        @property { string } slug
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef LimitedProductData
        
        
        @property { string } [itemCode]
        
        @property { Object } [identifier]
        
        @property { number } [uid]
        
        @property { number } [quantity]
        
        @property { Array<string> } [sizes]
        
        @property { Array<string> } [images]
        
        @property { string } [countryOfOrigin]
        
        @property { Object } [price]
        
        @property { string } [name]
        
        @property { string } [shortDescription]
        
        @property { Object } [attributes]
        
        @property { string } [slug]
        
         
    */
/**
        @typedef Size
        
        
        @property { number } [quantity]
        
        @property { boolean } [isAvailable]
        
        @property { string } [value]
        
        @property { string } [display]
        
         
    */
/**
        @typedef Price
        
        
        @property { number } [maxMarked]
        
        @property { number } [minMarked]
        
        @property { number } [minEffective]
        
        @property { string } [currency]
        
        @property { number } [maxEffective]
        
         
    */
/**
        @typedef GetProducts
        
        
        @property { LimitedProductData } [productDetails]
        
        @property { number } [productUid]
        
        @property { number } [maxQuantity]
        
        @property { Array<Size> } [sizes]
        
        @property { boolean } [autoAddToCart]
        
        @property { boolean } [autoSelect]
        
        @property { Price } [price]
        
        @property { boolean } [allowRemove]
        
        @property { number } [minQuantity]
        
         
    */
/**
        @typedef GetProductBundleResponse
        
        
        @property { Array<GetProducts> } [products]
        
        @property { boolean } [isActive]
        
        @property { Object } [meta]
        
        @property { boolean } [sameStoreAssignment]
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { string } [choice]
        
        @property { Array<string> } [pageVisibility]
        
        @property { string } [slug]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef ListSizeGuide
        
        
        @property { Object } [page]
        
        @property { Array<Object> } [items]
        
         
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
        
        
        @property { string } title
        
        @property { string } [id]
        
        @property { string } [image]
        
        @property { string } [subtitle]
        
        @property { string } [description]
        
        @property { string } [createdOn]
        
        @property { Guide } [guide]
        
        @property { boolean } [active]
        
        @property { string } [modifiedOn]
        
        @property { string } [tag]
        
        @property { string } name
        
        @property { number } [brandId]
        
        @property { Object } [createdBy]
        
        @property { number } [companyId]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef SuccessResponse
        
        
        @property { number } [uid]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef SizeGuideResponse
        
        
        @property { string } [title]
        
        @property { string } [id]
        
        @property { string } [subtitle]
        
        @property { string } [createdOn]
        
        @property { Object } [guide]
        
        @property { boolean } [active]
        
        @property { string } [modifiedOn]
        
        @property { string } [tag]
        
        @property { number } [brandId]
        
        @property { string } [name]
        
        @property { Object } [createdBy]
        
        @property { number } [companyId]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsProduct
        
        
        @property { Object } [variant]
        
        @property { Object } [compare]
        
        @property { Object } [similar]
        
        @property { Object } [detail]
        
         
    */
/**
        @typedef MetaDataListingFilterMetaResponse
        
        
        @property { Array<string> } [filterTypes]
        
        @property { Array<Object> } [units]
        
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
        @typedef GetCatalogConfigurationMetaData
        
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
        @property { MetaDataListingResponse } [listing]
        
         
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
        
        @property { Object } [map]
        
        @property { string } [condition]
        
        @property { string } [sort]
        
         
    */
/**
        @typedef ConfigurationListingFilterConfig
        
        
        @property { string } key
        
        @property { ConfigurationListingFilterValue } [valueConfig]
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { string } type
        
        @property { number } priority
        
         
    */
/**
        @typedef ConfigurationListingFilter
        
        
        @property { boolean } allowSingle
        
        @property { Array<ConfigurationListingFilterConfig> } [attributeConfig]
        
         
    */
/**
        @typedef ConfigurationListingSortConfig
        
        
        @property { string } key
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { string } [name]
        
        @property { number } priority
        
         
    */
/**
        @typedef ConfigurationListingSort
        
        
        @property { Array<ConfigurationListingSortConfig> } [config]
        
        @property { string } defaultKey
        
         
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
        
        
        @property { string } key
        
        @property { boolean } isActive
        
        @property { string } displayType
        
        @property { string } [logo]
        
        @property { ProductSize } size
        
        @property { string } name
        
        @property { number } priority
        
         
    */
/**
        @typedef ConfigurationProductVariant
        
        
        @property { Array<ConfigurationProductVariantConfig> } [config]
        
         
    */
/**
        @typedef ConfigurationProductConfig
        
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
        @property { string } key
        
        @property { boolean } isActive
        
        @property { string } [logo]
        
        @property { ProductSize } [size]
        
        @property { number } priority
        
         
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
        
        
        @property { string } [id]
        
        @property { ConfigurationListing } [listing]
        
        @property { string } appId
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { ConfigurationProduct } [product]
        
         
    */
/**
        @typedef GetAppCatalogConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { AppCatalogConfiguration } [data]
        
         
    */
/**
        @typedef AppConfiguration
        
        
        @property { ConfigurationListing } [listing]
        
        @property { string } appId
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { ConfigurationProduct } [product]
        
         
    */
/**
        @typedef GetCatalogConfigurationDetailsSchemaListing
        
        
        @property { Object } [filter]
        
        @property { Object } [sort]
        
         
    */
/**
        @typedef EntityConfiguration
        
        
        @property { string } [id]
        
        @property { GetCatalogConfigurationDetailsSchemaListing } [listing]
        
        @property { string } appId
        
        @property { string } [configId]
        
        @property { string } configType
        
        @property { GetCatalogConfigurationDetailsProduct } [product]
        
         
    */
/**
        @typedef GetAppCatalogEntityConfiguration
        
        
        @property { boolean } [isDefault]
        
        @property { EntityConfiguration } [data]
        
         
    */
/**
        @typedef ProductFiltersValue
        
        
        @property { string } [queryFormat]
        
        @property { boolean } isSelected
        
        @property { number } [selectedMax]
        
        @property { number } [count]
        
        @property { string } value
        
        @property { string } [displayFormat]
        
        @property { number } [min]
        
        @property { string } display
        
        @property { number } [max]
        
        @property { string } [currencyCode]
        
        @property { string } [currencySymbol]
        
        @property { number } [selectedMin]
        
         
    */
/**
        @typedef ProductFiltersKey
        
        
        @property { string } [logo]
        
        @property { string } display
        
        @property { string } [kind]
        
        @property { string } name
        
         
    */
/**
        @typedef ProductFilters
        
        
        @property { Array<ProductFiltersValue> } values
        
        @property { ProductFiltersKey } key
        
         
    */
/**
        @typedef ProductSortOn
        
        
        @property { boolean } [isSelected]
        
        @property { string } [value]
        
        @property { string } [name]
        
         
    */
/**
        @typedef GetCollectionQueryOptionResponse
        
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductSortOn> } [sortOn]
        
         
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
        
        @property { string } [type]
        
        @property { string } url
        
         
    */
/**
        @typedef BannerImage
        
        
        @property { string } [aspectRatio]
        
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
        
        
        @property { Object } [query]
        
        @property { Media1 } [logo]
        
        @property { Object } [schedule]
        
        @property { Object } [cron]
        
        @property { string } [type]
        
        @property { string } [slug]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [badge]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowSort]
        
        @property { Object } [meta]
        
        @property { Array<string> } [tag]
        
        @property { ImageUrls } [banners]
        
        @property { string } [name]
        
        @property { string } [uid]
        
        @property { ProductListingAction } [action]
        
        @property { string } [appId]
        
        @property { boolean } [allowFacets]
        
         
    */
/**
        @typedef GetCollectionListingResponse
        
        
        @property { CollectionListingFilter } [filters]
        
        @property { Array<GetCollectionDetailNest> } [items]
        
        @property { Page } [page]
        
         
    */
/**
        @typedef CollectionImage
        
        
        @property { string } aspectRatio
        
        @property { string } url
        
         
    */
/**
        @typedef UserInfo
        
        
        @property { string } [email]
        
        @property { string } [userId]
        
        @property { string } [uid]
        
        @property { string } [username]
        
         
    */
/**
        @typedef Schedule
        
        
        @property { string } [end]
        
        @property { number } [duration]
        
        @property { string } [cron]
        
        @property { string } [start]
        
         
    */
/**
        @typedef SeoDetail
        
        
        @property { string } [title]
        
        @property { string } [description]
        
         
    */
/**
        @typedef CollectionBadge
        
        
        @property { string } [text]
        
        @property { string } [color]
        
         
    */
/**
        @typedef CollectionBanner
        
        
        @property { CollectionImage } landscape
        
        @property { CollectionImage } portrait
        
         
    */
/**
        @typedef CreateCollection
        
        
        @property { Object } [query]
        
        @property { boolean } [published]
        
        @property { CollectionImage } logo
        
        @property { UserInfo } [createdBy]
        
        @property { Schedule } [schedule]
        
        @property { Array<string> } [tags]
        
        @property { string } type
        
        @property { string } slug
        
        @property { string } [description]
        
        @property { SeoDetail } [seo]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowSort]
        
        @property { CollectionBadge } [badge]
        
        @property { Object } [meta]
        
        @property { CollectionBanner } banners
        
        @property { string } name
        
        @property { UserInfo } [modifiedBy]
        
        @property { Object } [customJson]
        
        @property { string } appId
        
        @property { Object } [localeLanguage]
        
        @property { string } [sortOn]
        
        @property { boolean } [allowFacets]
        
         
    */
/**
        @typedef CollectionCreateResponse
        
        
        @property { Object } [query]
        
        @property { Object } [schedule]
        
        @property { Object } [badge]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [cron]
        
        @property { string } [appId]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowSort]
        
        @property { Object } [meta]
        
        @property { BannerImage } [logo]
        
        @property { Array<string> } [tag]
        
        @property { ImageUrls } [banners]
        
        @property { boolean } [allowFacets]
        
        @property { string } [name]
        
        @property { string } [type]
        
        @property { string } [slug]
        
         
    */
/**
        @typedef CollectionDetailResponse
        
        
        @property { Object } [query]
        
        @property { Object } [schedule]
        
        @property { Object } [badge]
        
        @property { string } [description]
        
        @property { Array<string> } [visibleFacetsKeys]
        
        @property { Object } [cron]
        
        @property { string } [appId]
        
        @property { boolean } [isActive]
        
        @property { boolean } [allowSort]
        
        @property { Object } [meta]
        
        @property { Media1 } [logo]
        
        @property { Array<string> } [tag]
        
        @property { ImageUrls } [banners]
        
        @property { boolean } [allowFacets]
        
        @property { string } [name]
        
        @property { string } [type]
        
        @property { string } [slug]
        
         
    */
/**
        @typedef Price1
        
        
        @property { string } [currencySymbol]
        
        @property { string } [currencyCode]
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef ProductListingPrice
        
        
        @property { Price1 } [marked]
        
        @property { Price1 } [effective]
        
         
    */
/**
        @typedef ProductListingDetail
        
        
        @property { Array<string> } [highlights]
        
        @property { ProductListingPrice } [price]
        
        @property { Array<string> } [similars]
        
        @property { Array<Media1> } [medias]
        
        @property { Object } [teaserTag]
        
        @property { string } [itemType]
        
        @property { Object } [promoMeta]
        
        @property { string } [type]
        
        @property { string } [shortDescription]
        
        @property { string } slug
        
        @property { string } [description]
        
        @property { string } [discount]
        
        @property { string } [productOnlineDate]
        
        @property { string } [name]
        
        @property { string } [color]
        
        @property { boolean } [hasVariant]
        
        @property { Object } [attributes]
        
        @property { boolean } [sellable]
        
        @property { number } [uid]
        
        @property { string } [imageNature]
        
        @property { number } [rating]
        
        @property { Array<string> } [tryouts]
        
        @property { number } [ratingCount]
        
         
    */
/**
        @typedef GetCollectionItemsResponse
        
        
        @property { Array<ProductSortOn> } [sortOn]
        
        @property { Array<ProductFilters> } [filters]
        
        @property { Array<ProductListingDetail> } [items]
        
        @property { Page } [page]
        
         
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
        @typedef CatalogInsightBrand
        
        
        @property { number } [totalSizes]
        
        @property { number } [totalArticles]
        
        @property { string } [name]
        
        @property { number } [articleFreshness]
        
        @property { number } [availableSizes]
        
        @property { number } [availableArticles]
        
         
    */
/**
        @typedef CatalogInsightItem
        
        
        @property { number } [count]
        
        @property { number } [outOfStockCount]
        
        @property { number } [sellableCount]
        
         
    */
/**
        @typedef CatalogInsightResponse
        
        
        @property { CatalogInsightBrand } [brandDistribution]
        
        @property { CatalogInsightItem } [item]
        
         
    */
/**
        @typedef CrossSellingData
        
        
        @property { number } [articles]
        
        @property { number } [products]
        
         
    */
/**
        @typedef CrossSellingResponse
        
        
        @property { CrossSellingData } [data]
        
        @property { CatalogInsightBrand } [brandDistribution]
        
         
    */
/**
        @typedef OptInPostRequest
        
        
        @property { boolean } [enabled]
        
        @property { Array<number> } [storeIds]
        
        @property { Array<number> } [brandIds]
        
        @property { string } optLevel
        
         
    */
/**
        @typedef CompanyOptIn
        
        
        @property { Array<number> } brandIds
        
        @property { boolean } enabled
        
        @property { Array<number> } storeIds
        
        @property { number } createdOn
        
        @property { string } optLevel
        
        @property { number } modifiedOn
        
        @property { string } platform
        
        @property { Object } [createdBy]
        
        @property { number } companyId
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef GetOptInPlatform
        
        
        @property { Page } page
        
        @property { Array<CompanyOptIn> } items
        
         
    */
/**
        @typedef OptinCompanyDetail
        
        
        @property { string } [businessType]
        
        @property { number } [uid]
        
        @property { string } [companyType]
        
        @property { string } [name]
        
         
    */
/**
        @typedef CompanyBrandDetail
        
        
        @property { number } [totalArticle]
        
        @property { string } [brandName]
        
        @property { number } [brandId]
        
        @property { number } [companyId]
        
         
    */
/**
        @typedef OptinCompanyBrandDetailsView
        
        
        @property { Page } [page]
        
        @property { Array<CompanyBrandDetail> } [items]
        
         
    */
/**
        @typedef OptinCompanyMetrics
        
        
        @property { number } [store]
        
        @property { string } [company]
        
        @property { number } [brand]
        
         
    */
/**
        @typedef StoreDetail
        
        
        @property { number } [uid]
        
        @property { string } [storeCode]
        
        @property { string } [createdOn]
        
        @property { string } [displayName]
        
        @property { string } [modifiedOn]
        
        @property { string } [name]
        
        @property { Array<Object> } [documents]
        
        @property { Object } [timing]
        
        @property { Array<Object> } [additionalContacts]
        
        @property { number } [companyId]
        
        @property { string } [storeType]
        
         
    */
/**
        @typedef OptinStoreDetails
        
        
        @property { Page } [page]
        
        @property { Array<StoreDetail> } [items]
        
         
    */
/**
        @typedef BasePage
        
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
        @property { number } [current]
        
        @property { boolean } [hasNext]
        
         
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
        
        
        @property { number } [status]
        
        @property { Object } [errors]
        
        @property { Object } [meta]
        
        @property { string } [message]
        
        @property { string } [code]
        
         
    */
/**
        @typedef BasePage1
        
        
        @property { boolean } [hasPrevious]
        
        @property { string } [nextPageId]
        
        @property { boolean } [hasNext]
        
        @property { number } [itemTotal]
        
         
    */
/**
        @typedef UserSerializer
        
        
        @property { string } [userId]
        
        @property { string } [contact]
        
        @property { string } [username]
        
         
    */
/**
        @typedef GetDepartment
        
        
        @property { number } [uid]
        
        @property { string } [search]
        
        @property { boolean } [isActive]
        
        @property { string } [createdOn]
        
        @property { UserSerializer } [createdBy]
        
        @property { string } [logo]
        
        @property { Array<string> } [synonyms]
        
        @property { string } [modifiedOn]
        
        @property { string } [name]
        
        @property { number } [pageNo]
        
        @property { number } [pageSize]
        
        @property { string } [itemType]
        
        @property { number } [priorityOrder]
        
        @property { string } [slug]
        
        @property { UserSerializer } [modifiedBy]
        
         
    */
/**
        @typedef DepartmentsResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<GetDepartment> } [items]
        
         
    */
/**
        @typedef DepartmentErrorResponse
        
        
        @property { number } [status]
        
        @property { Object } [errors]
        
        @property { Object } [meta]
        
        @property { string } [message]
        
        @property { string } [code]
        
         
    */
/**
        @typedef ProductTemplate
        
        
        @property { string } [description]
        
        @property { boolean } [isActive]
        
        @property { string } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { boolean } [isArchived]
        
        @property { string } [logo]
        
        @property { string } [tag]
        
        @property { Array<string> } [categories]
        
        @property { Array<string> } [departments]
        
        @property { string } [name]
        
        @property { string } [modifiedOn]
        
        @property { boolean } isPhysical
        
        @property { Array<string> } [attributes]
        
        @property { string } slug
        
        @property { Object } [modifiedBy]
        
         
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
        
        
        @property { MultipleCommon } [data]
        
        @property { string } [message]
        
         
    */
/**
        @typedef HSNData
        
        
        @property { Array<string> } [hsnCode]
        
        @property { Array<string> } [countryOfOrigin]
        
         
    */
/**
        @typedef HSNCodesResponse
        
        
        @property { HSNData } [data]
        
        @property { string } [message]
        
         
    */
/**
        @typedef ProductConfligurationDownloads
        
        
        @property { Array<MultipleCommon> } [data]
        
        @property { boolean } [multivalue]
        
         
    */
/**
        @typedef CategoryMappingValues
        
        
        @property { string } name
        
        @property { number } [catalogId]
        
         
    */
/**
        @typedef CategoryMapping
        
        
        @property { CategoryMappingValues } [google]
        
        @property { CategoryMappingValues } [ajio]
        
        @property { CategoryMappingValues } [facebook]
        
         
    */
/**
        @typedef Hierarchy
        
        
        @property { number } department
        
        @property { number } l1
        
        @property { number } l2
        
         
    */
/**
        @typedef Media2
        
        
        @property { string } logo
        
        @property { string } portrait
        
        @property { string } landscape
        
         
    */
/**
        @typedef Category
        
        
        @property { number } level
        
        @property { number } [uid]
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { boolean } isActive
        
        @property { string } [createdOn]
        
        @property { Object } [createdBy]
        
        @property { string } [modifiedOn]
        
        @property { Array<string> } [synonyms]
        
        @property { Array<number> } departments
        
        @property { string } name
        
        @property { string } [id]
        
        @property { Array<string> } [tryouts]
        
        @property { Media2 } [media]
        
        @property { number } [priority]
        
        @property { string } [slug]
        
        @property { Object } [modifiedBy]
        
         
    */
/**
        @typedef CategoryResponse
        
        
        @property { BasePage1 } [page]
        
        @property { Array<Category> } [items]
        
         
    */
/**
        @typedef CategoryRequestBody
        
        
        @property { number } level
        
        @property { CategoryMapping } [marketplaces]
        
        @property { Array<Hierarchy> } [hierarchy]
        
        @property { boolean } isActive
        
        @property { Array<string> } [synonyms]
        
        @property { Array<number> } departments
        
        @property { string } name
        
        @property { Array<string> } [tryouts]
        
        @property { Media2 } [media]
        
        @property { number } [priority]
        
        @property { string } [slug]
        
         
    */
/**
        @typedef CategoryCreateResponse
        
        
        @property { string } [message]
        
        @property { number } [uid]
        
         
    */
/**
        @typedef CategoryUpdateResponse
        
        
        @property { string } [message]
        
        @property { boolean } [success]
        
         
    */
/**
        @typedef PageData
        
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
        @property { string } [current]
        
        @property { boolean } [hasNext]
        
         
    */
/**
        @typedef ProductPublished
        
        
        @property { boolean } [isSet]
        
        @property { number } [productOnlineDate]
        
         
    */
/**
        @typedef Logo
        
        
        @property { number } [aspectRatioF]
        
        @property { string } [aspectRatio]
        
        @property { string } [secureUrl]
        
        @property { string } [url]
        
         
    */
/**
        @typedef Brand
        
        
        @property { Logo } [logo]
        
        @property { number } [uid]
        
        @property { string } [name]
        
         
    */
/**
        @typedef UserCommon
        
        
        @property { string } [userId]
        
        @property { number } [companyId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef VerifiedBy
        
        
        @property { string } [userId]
        
        @property { string } [username]
        
         
    */
/**
        @typedef Attributes
        
        
        @property { string } [sleeveLength]
        
        @property { Array<string> } [gender]
        
        @property { string } [verifiedOn]
        
        @property { string } [pattern]
        
        @property { UserCommon } [createdBy]
        
        @property { boolean } [isImageLessProduct]
        
        @property { string } [essential]
        
        @property { string } [productFit]
        
        @property { string } [metaNature]
        
        @property { string } [material]
        
        @property { string } [primaryColor]
        
        @property { string } [modifiedOn]
        
        @property { string } [neckType]
        
        @property { string } [primaryMaterial]
        
        @property { string } [color]
        
        @property { UserCommon } [modifiedBy]
        
        @property { Array<string> } [l3Mapping]
        
        @property { string } [stage]
        
        @property { string } [createdOn]
        
        @property { string } [imageNature]
        
        @property { VerifiedBy } [verifiedBy]
        
         
    */
/**
        @typedef Product
        
        
        @property { Array<Object> } [sizes]
        
        @property { boolean } [isDependent]
        
        @property { string } [countryOfOrigin]
        
        @property { string } [highlights]
        
        @property { ProductPublished } [productPublish]
        
        @property { boolean } [isSet]
        
        @property { Array<string> } [media]
        
        @property { number } [companyId]
        
        @property { string } [itemCode]
        
        @property { Array<string> } [allSizes]
        
        @property { string } [slug]
        
        @property { string } [id]
        
        @property { Brand } [brand]
        
        @property { string } [description]
        
        @property { boolean } [isActive]
        
        @property { boolean } [multiSize]
        
        @property { Array<string> } [images]
        
        @property { Array<number> } [departments]
        
        @property { string } [name]
        
        @property { string } [sizeGuide]
        
        @property { string } [hsnCode]
        
        @property { Attributes } [attributes]
        
        @property { string } [templateTag]
        
        @property { number } [uid]
        
        @property { string } [categorySlug]
        
        @property { string } [currency]
        
        @property { string } [itemType]
        
         
    */
/**
        @typedef ProductListingResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Product> } [items]
        
         
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
        
        
        @property { string } [unit]
        
        @property { boolean } [returnable]
        
        @property { number } [time]
        
         
    */
/**
        @typedef TeaserTag
        
        
        @property { string } [tag]
        
        @property { string } [url]
        
         
    */
/**
        @typedef OrderQuantity
        
        
        @property { boolean } [isSet]
        
        @property { number } [minimum]
        
        @property { number } [maximum]
        
         
    */
/**
        @typedef CustomOrder
        
        
        @property { number } [manufacturingTime]
        
        @property { string } [manufacturingTimeUnit]
        
        @property { boolean } [isCustomOrder]
        
         
    */
/**
        @typedef ProductCreateUpdate
        
        
        @property { boolean } [isDependent]
        
        @property { Object } [variants]
        
        @property { string } countryOfOrigin
        
        @property { Array<string> } [highlights]
        
        @property { Trader } [trader]
        
        @property { ProductPublish } [productPublish]
        
        @property { boolean } [isSet]
        
        @property { Array<Media1> } [media]
        
        @property { number } companyId
        
        @property { ReturnConfig } [returnConfig]
        
        @property { string } itemCode
        
        @property { boolean } [isImageLessProduct]
        
        @property { Array<string> } [tags]
        
        @property { string } [traderType]
        
        @property { TeaserTag } [teaserTag]
        
        @property { string } [shortDescription]
        
        @property { OrderQuantity } [moq]
        
        @property { string } slug
        
        @property { string } [description]
        
        @property { boolean } [isActive]
        
        @property { boolean } [multiSize]
        
        @property { Array<number> } departments
        
        @property { string } name
        
        @property { string } [sizeGuide]
        
        @property { Array<string> } [productGroupTag]
        
        @property { string } hsnCode
        
        @property { string } [changeRequestId]
        
        @property { string } templateTag
        
        @property { number } [uid]
        
        @property { string } categorySlug
        
        @property { Object } [customJson]
        
        @property { string } [requester]
        
        @property { number } [noOfBoxes]
        
        @property { string } currency
        
        @property { string } itemType
        
        @property { CustomOrder } [customOrder]
        
        @property { number } brandUid
        
         
    */
/**
        @typedef ValidateProduct
        
        
        @property { boolean } [valid]
        
         
    */
/**
        @typedef UserDetail
        
        
        @property { string } [userId]
        
        @property { string } [fullName]
        
        @property { string } [username]
        
         
    */
/**
        @typedef ProductBulkRequest
        
        
        @property { Array<string> } [cancelledRecords]
        
        @property { string } [filePath]
        
        @property { string } [templateTag]
        
        @property { number } [cancelled]
        
        @property { string } [stage]
        
        @property { ProductTemplate } [template]
        
        @property { boolean } [isActive]
        
        @property { number } [failed]
        
        @property { string } [createdOn]
        
        @property { number } [succeed]
        
        @property { string } [modifiedOn]
        
        @property { Array<string> } [failedRecords]
        
        @property { number } [total]
        
        @property { UserDetail } [createdBy]
        
        @property { number } [companyId]
        
        @property { UserDetail } [modifiedBy]
        
         
    */
/**
        @typedef ProductBulkRequestList
        
        
        @property { PageData } [page]
        
        @property { ProductBulkRequest } [items]
        
         
    */
/**
        @typedef UserInfo1
        
        
        @property { string } [email]
        
        @property { string } [userId]
        
        @property { string } [uid]
        
        @property { string } [username]
        
         
    */
/**
        @typedef BulkJob
        
        
        @property { Array<Object> } [cancelledRecords]
        
        @property { string } [filePath]
        
        @property { string } [templateTag]
        
        @property { number } [cancelled]
        
        @property { string } [stage]
        
        @property { boolean } [isActive]
        
        @property { string } createdOn
        
        @property { number } [failed]
        
        @property { number } [succeed]
        
        @property { string } [trackingUrl]
        
        @property { string } [modifiedOn]
        
        @property { Array<Object> } [failedRecords]
        
        @property { string } [customTemplateTag]
        
        @property { number } total
        
        @property { UserInfo1 } [createdBy]
        
        @property { number } companyId
        
        @property { UserInfo1 } [modifiedBy]
        
         
    */
/**
        @typedef BulkProductRequest
        
        
        @property { string } batchId
        
        @property { Array<Object> } data
        
        @property { string } templateTag
        
        @property { number } companyId
        
         
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
        
        
        @property { string } [id]
        
        @property { string } [filePath]
        
        @property { Array<string> } [cancelledRecords]
        
        @property { number } [cancelled]
        
        @property { string } [stage]
        
        @property { string } [createdOn]
        
        @property { number } [failed]
        
        @property { boolean } [isActive]
        
        @property { number } [succeed]
        
        @property { string } [trackingUrl]
        
        @property { string } [modifiedOn]
        
        @property { Array<string> } [failedRecords]
        
        @property { number } [retry]
        
        @property { number } [companyId]
        
        @property { UserCommon } [createdBy]
        
        @property { number } [total]
        
        @property { UserCommon } [modifiedBy]
        
         
    */
/**
        @typedef BulkAssetResponse
        
        
        @property { PageData } [page]
        
        @property { Array<Items> } [items]
        
         
    */
/**
        @typedef ProductBulkAssets
        
        
        @property { Object } user
        
        @property { number } [companyId]
        
        @property { string } url
        
         
    */
/**
        @typedef InventoryRequest
        
        
        @property { string } [search]
        
        @property { string } [size]
        
        @property { number } [pageNo]
        
        @property { number } [pageSize]
        
        @property { number } [total]
        
         
    */
/**
        @typedef ItemQuery
        
        
        @property { string } [itemCode]
        
        @property { number } [uid]
        
        @property { number } [brandUid]
        
         
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
        
        
        @property { SizeDistribution } sizeDistribution
        
        @property { number } [quantity]
        
         
    */
/**
        @typedef GTIN
        
        
        @property { string } gtinType
        
        @property { string } gtinValue
        
        @property { boolean } [primary]
        
         
    */
/**
        @typedef InvSize
        
        
        @property { InventorySet } [set]
        
        @property { number } [itemWidth]
        
        @property { number } quantity
        
        @property { number } [priceTransfer]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemWeight]
        
        @property { string } storeCode
        
        @property { string } size
        
        @property { number } price
        
        @property { number } priceEffective
        
        @property { number } [itemLength]
        
        @property { number } [itemHeight]
        
        @property { Array<GTIN> } identifiers
        
        @property { string } currency
        
        @property { boolean } [isSet]
        
        @property { string } [itemWeightUnitOfMeasure]
        
         
    */
/**
        @typedef InventoryRequest1
        
        
        @property { ItemQuery } item
        
        @property { number } companyId
        
        @property { Array<InvSize> } sizes
        
         
    */
/**
        @typedef BulkRequestGet
        
        
        @property { string } [templateTag]
        
        @property { string } [search]
        
        @property { string } [startDate]
        
        @property { string } [stage]
        
        @property { string } [endDate]
        
        @property { string } [customTemplateTag]
        
        @property { number } [pageNo]
        
        @property { number } [pageSize]
        
        @property { number } [total]
        
         
    */
/**
        @typedef CommonResponse
        
        
        @property { string } [success]
        
         
    */
/**
        @typedef Size1
        
        
        @property { InventorySet } [set]
        
        @property { number } [itemWidth]
        
        @property { number } quantity
        
        @property { number } [priceTransfer]
        
        @property { string } [itemDimensionsUnitOfMeasure]
        
        @property { number } [itemWeight]
        
        @property { string } sellerIdentifier
        
        @property { string } storeCode
        
        @property { string } [size]
        
        @property { number } price
        
        @property { number } priceEffective
        
        @property { number } [itemLength]
        
        @property { number } [itemHeight]
        
        @property { Array<Object> } [identifiers]
        
        @property { string } currency
        
        @property { boolean } [isSet]
        
        @property { string } [itemWeightUnitOfMeasure]
        
         
    */
/**
        @typedef InventoryBulkRequest
        
        
        @property { string } batchId
        
        @property { Object } [user]
        
        @property { number } companyId
        
        @property { Array<Size1> } sizes
        
         
    */
/**
        @typedef InventoryExportJob
        
        
        @property { string } taskId
        
        @property { Object } [requestParams]
        
        @property { string } [status]
        
        @property { string } [triggerOn]
        
        @property { string } [completedOn]
        
        @property { number } sellerId
        
        @property { string } [url]
        
         
    */
/**
        @typedef InventoryExportRequest
        
        
        @property { Array<number> } [brand]
        
        @property { Array<number> } [store]
        
        @property { string } [type]
        
         
    */
/**
        @typedef FilerList
        
        
        @property { string } [value]
        
        @property { string } [display]
        
         
    */
/**
        @typedef InventoryConfig
        
        
        @property { Array<FilerList> } [data]
        
        @property { boolean } [multivalues]
        
         
    */
/**
        @typedef PageResponse
        
        
        @property { number } [itemTotal]
        
        @property { boolean } [hasPrevious]
        
        @property { number } [size]
        
        @property { string } [current]
        
        @property { boolean } [hasNext]
        
         
    */
/**
        @typedef HsnCodesObject
        
        
        @property { number } [uid]
        
        @property { number } [threshold2]
        
        @property { string } [hs2Code]
        
        @property { boolean } [isActive]
        
        @property { boolean } [taxOnMrp]
        
        @property { number } [tax1]
        
        @property { string } [hsnCode]
        
        @property { number } [tax2]
        
        @property { boolean } [taxOnEsp]
        
        @property { number } [companyId]
        
        @property { number } [threshold1]
        
         
    */
/**
        @typedef HsnCodesListingResponse
        
        
        @property { PageResponse } [page]
        
        @property { Array<HsnCodesObject> } [items]
        
         
    */
/**
        @typedef HsnUpsert
        
        
        @property { number } [threshold2]
        
        @property { string } hs2Code
        
        @property { boolean } isActive
        
        @property { boolean } taxOnMrp
        
        @property { number } tax1
        
        @property { string } hsnCode
        
        @property { number } [tax2]
        
        @property { boolean } [taxOnEsp]
        
        @property { number } companyId
        
        @property { number } threshold1
        
         
    */
/**
        @typedef HsnCode
        
        
        @property { HsnCodesObject } [data]
        
         
    */
/**
        @typedef SellerPhoneNumber
        
        
        @property { number } countryCode
        
        @property { string } number
        
         
    */
/**
        @typedef ContactDetails
        
        
        @property { Array<SellerPhoneNumber> } [phone]
        
        @property { Array<string> } [emails]
        
         
    */
/**
        @typedef GetAddressSerializer
        
        
        @property { string } [country]
        
        @property { string } [landmark]
        
        @property { string } [countryCode]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [addressType]
        
        @property { number } [longitude]
        
        @property { string } [address1]
        
        @property { number } [latitude]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
         
    */
/**
        @typedef Document
        
        
        @property { string } legalName
        
        @property { string } type
        
        @property { string } [url]
        
        @property { string } value
        
        @property { boolean } [verified]
        
         
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
        @typedef BusinessCountryInfo
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef GetCompanyProfileSerializerResponse
        
        
        @property { boolean } [franchiseEnabled]
        
        @property { ContactDetails } [contactDetails]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { Array<Document> } [documents]
        
        @property { BusinessDetails } [businessDetails]
        
        @property { Array<string> } [notificationEmails]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { Object } [warnings]
        
        @property { string } businessType
        
        @property { string } [modifiedOn]
        
        @property { string } [stage]
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [name]
        
        @property { string } companyType
        
        @property { number } uid
        
        @property { string } [businessInfo]
        
        @property { string } [createdOn]
        
        @property { BusinessCountryInfo } [businessCountryInfo]
        
        @property { UserSerializer } [createdBy]
        
         
    */
/**
        @typedef ReferralInfo
        
        
        @property { string } [referralCode]
        
         
    */
/**
        @typedef BusinessCountryInfo1
        
        
        @property { string } [country]
        
        @property { string } [countryCode]
        
         
    */
/**
        @typedef CompanyAddress
        
        
        @property { string } country
        
        @property { string } [landmark]
        
        @property { string } [countryCode]
        
        @property { string } state
        
        @property { string } city
        
        @property { number } longitude
        
        @property { string } address1
        
        @property { number } latitude
        
        @property { string } [address2]
        
        @property { number } pincode
        
         
    */
/**
        @typedef CompanyStoreSerializerRequest
        
        
        @property { ReferralInfo } [referralInfo]
        
        @property { number } [uid]
        
        @property { Array<number> } brands
        
        @property { string } [businessInfo]
        
        @property { boolean } [franchiseEnabled]
        
        @property { Array<string> } [notificationEmails]
        
        @property { Object } [warnings]
        
        @property { Document } document
        
        @property { BusinessCountryInfo1 } businessCountryInfo
        
        @property { string } businessType
        
        @property { string } name
        
        @property { CompanyAddress } address
        
         
    */
/**
        @typedef DocumentsObj
        
        
        @property { number } [verified]
        
        @property { number } [pending]
        
         
    */
/**
        @typedef MetricsSerializer
        
        
        @property { DocumentsObj } [brand]
        
        @property { number } [uid]
        
        @property { DocumentsObj } [storeDocuments]
        
        @property { DocumentsObj } [companyDocuments]
        
        @property { string } [stage]
        
        @property { DocumentsObj } [product]
        
        @property { DocumentsObj } [store]
        
         
    */
/**
        @typedef UserSerializer1
        
        
        @property { string } [username]
        
        @property { string } [userId]
        
        @property { string } [contact]
        
         
    */
/**
        @typedef BrandBannerSerializer
        
        
        @property { string } [landscape]
        
        @property { string } [portrait]
        
         
    */
/**
        @typedef GetBrandResponseSerializer
        
        
        @property { Array<string> } [synonyms]
        
        @property { string } [logo]
        
        @property { string } [description]
        
        @property { number } [uid]
        
        @property { Object } [customJson]
        
        @property { Object } [warnings]
        
        @property { Object } [localeLanguage]
        
        @property { string } [modifiedOn]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { string } [createdOn]
        
        @property { string } [slugKey]
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } name
        
        @property { UserSerializer1 } [createdBy]
        
        @property { BrandBannerSerializer } [banner]
        
         
    */
/**
        @typedef CreateUpdateBrandRequestSerializer
        
        
        @property { Array<string> } [synonyms]
        
        @property { string } logo
        
        @property { string } [description]
        
        @property { number } [uid]
        
        @property { Object } [customJson]
        
        @property { Object } [localeLanguage]
        
        @property { string } [brandTier]
        
        @property { string } name
        
        @property { number } [companyId]
        
        @property { BrandBannerSerializer } [banner]
        
         
    */
/**
        @typedef CompanyBrandListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef CompanyBrandPostRequestSerializer
        
        
        @property { Array<number> } brands
        
        @property { number } company
        
        @property { number } [uid]
        
         
    */
/**
        @typedef LocationListSerializer
        
        
        @property { Array<Object> } [items]
        
        @property { Object } [page]
        
         
    */
/**
        @typedef LocationManagerSerializer
        
        
        @property { string } [name]
        
        @property { string } [email]
        
        @property { SellerPhoneNumber } mobileNo
        
         
    */
/**
        @typedef ProductReturnConfigSerializer
        
        
        @property { boolean } [onSameStore]
        
        @property { number } [storeUid]
        
         
    */
/**
        @typedef InvoiceCredSerializer
        
        
        @property { boolean } [enabled]
        
        @property { string } [username]
        
        @property { string } [password]
        
         
    */
/**
        @typedef InvoiceDetailsSerializer
        
        
        @property { InvoiceCredSerializer } [eInvoice]
        
        @property { InvoiceCredSerializer } [eWaybill]
        
         
    */
/**
        @typedef GetAddressSerializer1
        
        
        @property { string } [country]
        
        @property { string } [landmark]
        
        @property { string } [countryCode]
        
        @property { string } [state]
        
        @property { string } [city]
        
        @property { string } [addressType]
        
        @property { number } [longitude]
        
        @property { string } [address1]
        
        @property { number } [latitude]
        
        @property { string } [address2]
        
        @property { number } [pincode]
        
         
    */
/**
        @typedef LocationTimingSerializer
        
        
        @property { number } [hour]
        
        @property { number } [minute]
        
         
    */
/**
        @typedef LocationDayWiseSerializer
        
        
        @property { boolean } open
        
        @property { string } weekday
        
        @property { LocationTimingSerializer } [closing]
        
        @property { LocationTimingSerializer } [opening]
        
         
    */
/**
        @typedef LocationSerializer
        
        
        @property { string } displayName
        
        @property { string } code
        
        @property { Array<Document> } [documents]
        
        @property { number } [uid]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { Object } [customJson]
        
        @property { Array<string> } [notificationEmails]
        
        @property { Object } [warnings]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { number } company
        
        @property { string } [stage]
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
        @property { string } [storeType]
        
        @property { string } name
        
        @property { GetAddressSerializer1 } address
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
         
    */
/**
        @typedef LocationIntegrationType
        
        
        @property { string } [inventory]
        
        @property { string } [order]
        
         
    */
/**
        @typedef GetCompanySerializer
        
        
        @property { string } [companyType]
        
        @property { number } [uid]
        
        @property { string } [businessType]
        
        @property { string } [modifiedOn]
        
        @property { UserSerializer } [verifiedBy]
        
        @property { string } [createdOn]
        
        @property { Array<GetAddressSerializer> } [addresses]
        
        @property { string } [stage]
        
        @property { string } [rejectReason]
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer } [modifiedBy]
        
        @property { string } [name]
        
        @property { UserSerializer } [createdBy]
        
         
    */
/**
        @typedef GetLocationSerializer
        
        
        @property { string } displayName
        
        @property { string } phoneNumber
        
        @property { string } code
        
        @property { Object } [customJson]
        
        @property { Array<SellerPhoneNumber> } [contactNumbers]
        
        @property { Array<Document> } [documents]
        
        @property { LocationManagerSerializer } [manager]
        
        @property { ProductReturnConfigSerializer } [productReturnConfig]
        
        @property { Array<string> } [notificationEmails]
        
        @property { UserSerializer1 } [verifiedBy]
        
        @property { Object } [warnings]
        
        @property { LocationIntegrationType } [integrationType]
        
        @property { string } [storeType]
        
        @property { Array<LocationDayWiseSerializer> } [timing]
        
        @property { InvoiceDetailsSerializer } [gstCredentials]
        
        @property { string } [modifiedOn]
        
        @property { string } [stage]
        
        @property { string } [verifiedOn]
        
        @property { UserSerializer1 } [modifiedBy]
        
        @property { string } name
        
        @property { GetAddressSerializer } address
        
        @property { number } [uid]
        
        @property { GetCompanySerializer } [company]
        
        @property { string } [createdOn]
        
        @property { UserSerializer1 } [createdBy]
        
         
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
        @typedef Campaign
        
        
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
        @typedef RuleDefinition
        
        
        @property { string } calculateOn
        
        @property { string } type
        
        @property { string } [currencyCode]
        
        @property { string } applicableOn
        
        @property { boolean } [autoApply]
        
        @property { Array<string> } [scope]
        
        @property { string } valueType
        
        @property { boolean } [isExact]
        
         
    */
/**
        @typedef CouponDateMeta
        
        
        @property { string } [createdOn]
        
        @property { string } [modifiedOn]
        
         
    */
/**
        @typedef Validation
        
        
        @property { boolean } [anonymous]
        
        @property { string } [userRegisteredAfter]
        
        @property { Array<string> } [appId]
        
         
    */
/**
        @typedef Rule
        
        
        @property { number } [discountQty]
        
        @property { number } [max]
        
        @property { number } [key]
        
        @property { number } [value]
        
        @property { number } [min]
        
         
    */
/**
        @typedef State
        
        
        @property { boolean } [isArchived]
        
        @property { boolean } [isPublic]
        
        @property { boolean } [isDisplay]
        
         
    */
/**
        @typedef Validity
        
        
        @property { number } [priority]
        
         
    */
/**
        @typedef Ownership
        
        
        @property { string } payableBy
        
        @property { string } payableCategory
        
         
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
        @typedef DisplayMetaDict
        
        
        @property { string } [title]
        
        @property { string } [subtitle]
        
         
    */
/**
        @typedef DisplayMeta
        
        
        @property { string } [description]
        
        @property { DisplayMetaDict } [apply]
        
        @property { string } [subtitle]
        
        @property { DisplayMetaDict } [auto]
        
        @property { DisplayMetaDict } [remove]
        
        @property { string } [title]
        
         
    */
/**
        @typedef CouponSchedule
        
        
        @property { string } [cron]
        
        @property { Array<Object> } [nextSchedule]
        
        @property { string } [start]
        
        @property { string } [end]
        
        @property { number } [duration]
        
         
    */
/**
        @typedef PriceRange
        
        
        @property { number } [min]
        
        @property { number } [max]
        
         
    */
/**
        @typedef BulkBundleRestriction
        
        
        @property { boolean } multiStoreAllowed
        
         
    */
/**
        @typedef PostOrder
        
        
        @property { boolean } [cancellationAllowed]
        
        @property { boolean } [returnAllowed]
        
         
    */
/**
        @typedef UsesRemaining
        
        
        @property { number } [app]
        
        @property { number } [total]
        
        @property { number } [user]
        
         
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
        
        
        @property { Array<string> } [codes]
        
        @property { PaymentAllowValue } [uses]
        
        @property { Array<string> } [types]
        
        @property { Array<string> } [networks]
        
         
    */
/**
        @typedef PaymentCodes
        
        
        @property { PaymentModes } [qr]
        
        @property { PaymentModes } [nb]
        
        @property { PaymentModes } [pl]
        
        @property { PaymentModes } [upi]
        
        @property { PaymentModes } [card]
        
        @property { PaymentModes } [wl]
        
        @property { PaymentModes } [ps]
        
         
    */
/**
        @typedef Restrictions
        
        
        @property { PriceRange } [priceRange]
        
        @property { Array<number> } [orderingStores]
        
        @property { boolean } [couponAllowed]
        
        @property { BulkBundleRestriction } [bulkBundle]
        
        @property { PostOrder } [postOrder]
        
        @property { UsesRestriction } [uses]
        
        @property { Array<string> } [platforms]
        
        @property { PaymentCodes } [payments]
        
         
    */
/**
        @typedef Identifier
        
        
        @property { Array<string> } [userId]
        
        @property { Array<string> } [collectionId]
        
        @property { Array<number> } [storeId]
        
        @property { Array<number> } [brandId]
        
        @property { Array<number> } [itemId]
        
        @property { Array<number> } [companyId]
        
        @property { Array<string> } [articleId]
        
        @property { Array<number> } [categoryId]
        
         
    */
/**
        @typedef CouponAdd
        
        
        @property { RuleDefinition } ruleDefinition
        
        @property { string } typeSlug
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { Validation } [validation]
        
        @property { Array<string> } [tags]
        
        @property { Array<Rule> } rule
        
        @property { State } [state]
        
        @property { Validity } validity
        
        @property { string } code
        
        @property { Ownership } ownership
        
        @property { CouponAuthor } [author]
        
        @property { CouponAction } [action]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponSchedule } [schedule]
        
        @property { Restrictions } [restrictions]
        
        @property { Identifier } identifiers
        
         
    */
/**
        @typedef CouponsResponse
        
        
        @property { CouponAdd } [items]
        
        @property { Page } [page]
        
         
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
        
        
        @property { RuleDefinition } ruleDefinition
        
        @property { string } typeSlug
        
        @property { CouponDateMeta } [dateMeta]
        
        @property { Validation } [validation]
        
        @property { Array<string> } [tags]
        
        @property { Array<Rule> } rule
        
        @property { State } [state]
        
        @property { Validity } validity
        
        @property { string } code
        
        @property { Ownership } ownership
        
        @property { CouponAuthor } [author]
        
        @property { CouponAction } [action]
        
        @property { DisplayMeta } displayMeta
        
        @property { CouponSchedule } [schedule]
        
        @property { Restrictions } [restrictions]
        
        @property { Identifier } identifiers
        
         
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
        @typedef Audience
        
        
        @property { string } [headerUserId]
        
        @property { string } [id]
        
         
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
        
        @property { Audience } [audience]
        
        @property { Asset } [bannerImage]
        
        @property { string } [createdAt]
        
        @property { string } [description]
        
        @property { Rule } [rule]
        
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
/**
        @typedef DiscountJob
        
        
        @property { string } id
        
        @property { string } name
        
        @property { number } companyId
        
        @property { boolean } isActive
        
        @property { Array<string> } [appIds]
        
        @property { string } [jobType]
        
        @property { string } [discountType]
        
        @property { string } [discountLevel]
        
        @property { number } [value]
        
        @property { string } [filePath]
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
        @property { Validity } validity
        
        @property { string } createdOn
        
        @property { string } modifiedOn
        
        @property { UserDetails } createdBy
        
        @property { UserDetails } modifiedBy
        
        @property { Object } [meta]
        
         
    */
/**
        @typedef ListOrCalender
        
        
        @property { Array<DiscountJob> } items
        
        @property { Page } page
        
         
    */
/**
        @typedef CreateUpdateDiscount
        
        
        @property { string } name
        
        @property { number } companyId
        
        @property { boolean } isActive
        
        @property { Array<string> } appIds
        
        @property { string } jobType
        
        @property { string } discountType
        
        @property { string } discountLevel
        
        @property { number } [value]
        
        @property { string } [filePath]
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
        @property { Validity } validity
        
         
    */
/**
        @typedef FileJobResponse
        
        
        @property { string } stage
        
        @property { number } total
        
        @property { number } failed
        
        @property { number } companyId
        
        @property { Object } [body]
        
        @property { string } type
        
        @property { string } fileType
        
         
    */
/**
        @typedef DownloadFileJob
        
        
        @property { Array<number> } [brandIds]
        
        @property { Array<number> } [storeIds]
        
         
    */
/**
        @typedef CancelJobResponse
        
        
        @property { boolean } success
        
         
    */
/**
        @typedef UserDetails
        
        
        @property { string } username
        
        @property { string } userId
        
         
    */
declare class Lead {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
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
    getTickets({ items, filters, q, status, priority, category }?: {
        items?: boolean;
        filters?: boolean;
        q?: string;
        status?: string;
        priority?: string;
        category?: string;
    }): any;
    /**
      *
      * @summary: Retreives ticket details of a application level ticket
      * @description: Retreives ticket details of a application level ticket with ticket ID
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Tiket ID of the ticket to be fetched
      
      **/
    getTicket({ ticketId }?: {
        ticketId: string;
    }): any;
    /**
     *
     * @summary: Edits ticket details of a application level ticket
     * @description: Edits ticket details of a application level ticket such as status, priority, category, tags, attachments, assigne & ticket content changes
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
     * @summary: Create history for specific application level ticket
     * @description: Create history for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
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
      * @summary: Gets history list for specific application level ticket
      * @description: Gets history list for specific application level ticket, this history is seen on ticket detail page, this can be comment, log or rating.
      * @param {Object} arg - arg object.
      * @param {string} arg.ticketId - Ticket ID for which history is to be fetched
      
      **/
    getTicketHistory({ ticketId }?: {
        ticketId: string;
    }): any;
    /**
      *
      * @summary: Get specific custom form using it's slug
      * @description: Get specific custom form using it's slug, this is used to view the form.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug of form whose response is getting submitted
      
      **/
    getCustomForm({ slug }?: {
        slug: string;
    }): any;
    /**
     *
     * @summary: Edit the given custom form
     * @description: Edit the given custom form field such as adding or deleting input, assignee, title, decription, notification and polling information.
     * @param {Object} arg - arg object.
     * @param {string} arg.slug - Slug of form whose response is getting submitted
     * @param {EditCustomFormPayload} arg.body
     **/
    editCustomForm({ slug, body }?: {
        slug: string;
        body: EditCustomFormPayload;
    }): any;
    /**
      *
      * @summary: Get list of custom form
      * @description: Get list of custom form for given application
      * @param {Object} arg - arg object.
      
      **/
    getCustomForms({}?: any): any;
    /**
     *
     * @summary: Creates a new custom form
     * @description: Creates a new custom form for given application
     * @param {Object} arg - arg object.
     * @param {CreateCustomFormPayload} arg.body
     **/
    createCustomForm({ body }?: {
        body: CreateCustomFormPayload;
    }): any;
    /**
      *
      * @summary: Get Token to join a specific Video Room using it's unqiue name
      * @description: Get Token to join a specific Video Room using it's unqiue name, this Token is your ticket to Room and also creates your identity there.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of video room
      
      **/
    getTokenForVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): any;
    /**
      *
      * @summary: Get participants of a specific Video Room using it's unique name
      * @description: Get participants of a specific Video Room using it's unique name, this can be used to check if people are already there in the room and also to show their names.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of Video Room
      
      **/
    getVideoParticipants({ uniqueName }?: {
        uniqueName: string;
    }): any;
    /**
     *
     * @summary: Open a video room.
     * @description: Open a video room.
     * @param {Object} arg - arg object.
     * @param {CreateVideoRoomPayload} arg.body
     **/
    openVideoRoom({ body }?: {
        body: CreateVideoRoomPayload;
    }): any;
    /**
      *
      * @summary: Close the video room and force all participants to leave.
      * @description: Close the video room and force all participants to leave.
      * @param {Object} arg - arg object.
      * @param {string} arg.uniqueName - Unique name of Video Room
      
      **/
    closeVideoRoom({ uniqueName }?: {
        uniqueName: string;
    }): any;
}
declare class Theme {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Gets list of themes in theme library
      * @description: Gets list of themes in theme library
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param {number} [arg.pageNo] - Page number. Default is 1.
      
      **/
    getThemeLibrary({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): any;
    /**
     *
     * @summary: Add theme to theme library
     * @description: Add theme to theme library
     * @param {Object} arg - arg object.
     * @param {AddThemeRequestSchema} arg.body
     **/
    addToThemeLibrary({ body }?: {
        body: AddThemeRequestSchema;
    }): any;
    /**
     *
     * @summary: Apply theme
     * @description: Apply theme
     * @param {Object} arg - arg object.
     * @param {AddThemeRequestSchema} arg.body
     **/
    applyTheme({ body }?: {
        body: AddThemeRequestSchema;
    }): any;
    /**
      *
      * @summary: Checks if theme is upgradable
      * @description: Checks if theme is upgradable
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    isUpgradable({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Upgrades theme
      * @description: Upgrades theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    upgradeTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Gets public themes
      * @description: Gets public themes
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param {number} [arg.pageNo] - Page number. Default is 1.
      
      **/
    getPublicThemes({ pageSize, pageNo }?: {
        pageSize?: number;
        pageNo?: number;
    }): any;
    /**
     *
     * @summary: Create new theme
     * @description: Create new theme
     * @param {Object} arg - arg object.
     * @param {ThemesSchema} arg.body
     **/
    createTheme({ body }?: {
        body: ThemesSchema;
    }): any;
    /**
      *
      * @summary: Get applied theme
      * @description: Get applied theme
      * @param {Object} arg - arg object.
      
      **/
    getAppliedTheme({}?: any): any;
    /**
      *
      * @summary: Gets fonts
      * @description: Gets fonts
      * @param {Object} arg - arg object.
      
      **/
    getFonts({}?: any): any;
    /**
      *
      * @summary: Gets theme by id
      * @description: Gets theme by id
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    getThemeById({ themeId }?: {
        themeId: string;
    }): any;
    /**
     *
     * @summary: Update theme
     * @description: Update theme
     * @param {Object} arg - arg object.
     * @param {string} arg.themeId - Theme ID
     * @param {ThemesSchema} arg.body
     **/
    updateTheme({ themeId, body }?: {
        themeId: string;
        body: ThemesSchema;
    }): any;
    /**
      *
      * @summary: Delete theme
      * @description: Delete theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    deleteTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Gets theme for preview
      * @description: Gets theme for preview
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    getThemeForPreview({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Publish theme
      * @description: Publish theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    publishTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Unpublish theme
      * @description: Unpublish theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    unpublishTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Archive theme
      * @description: Archive theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    archiveTheme({ themeId }?: {
        themeId: string;
    }): any;
    /**
      *
      * @summary: Unarchive theme
      * @description: Unarchive theme
      * @param {Object} arg - arg object.
      * @param {string} arg.themeId - Theme ID
      
      **/
    unarchiveTheme({ themeId }?: {
        themeId: string;
    }): any;
}
declare class User {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Gets list of customers
      * @description: Used to get application customers list
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 10.
      * @param {number} [arg.pageNo] - Page number. Default is 1.
      
      **/
    getCustomers({ q, pageSize, pageNo }?: {
        q?: string;
        pageSize?: number;
        pageNo?: number;
    }): any;
    /**
      *
      * @summary: Search users
      * @description: Search users
      * @param {Object} arg - arg object.
      * @param {string} [arg.q] - The search query. This can be a partial or complete name of a either a product, brand or category
      
      **/
    searchUsers({ q }?: {
        q?: string;
    }): any;
    /**
      *
      * @summary: Get platform config
      * @description: Used to get platform config
      * @param {Object} arg - arg object.
      
      **/
    getPlatformConfig({}?: any): any;
    /**
     *
     * @summary: Update platform config
     * @description: Used to update platform config
     * @param {Object} arg - arg object.
     * @param {PlatformSchema} arg.body
     **/
    updatePlatformConfig({ body }?: {
        body: PlatformSchema;
    }): any;
}
declare class Content {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get annoucements list
      * @description: Get list of announcements
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getAnnouncementsList({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get annoucements list
      * @description: Get list of announcements
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company ID
      * @param {string} arg.applicationId - Application ID
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getAnnouncementsListPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create an annoucement
     * @description: Create an announcement
     * @param {Object} arg - arg object.
     * @param {AdminAnnouncementSchema} arg.body
     **/
    createAnnouncement({ body }?: {
        body: AdminAnnouncementSchema;
    }): any;
    /**
      *
      * @summary: Get annoucement by id
      * @description: Get announcement by id
      * @param {Object} arg - arg object.
      * @param {string} arg.announcementId - Announcement ID
      
      **/
    getAnnouncementById({ announcementId }?: {
        announcementId: string;
    }): any;
    /**
     *
     * @summary: Update an annoucement
     * @description: Update an announcement
     * @param {Object} arg - arg object.
     * @param {string} arg.announcementId - Announcement ID
     * @param {AdminAnnouncementSchema} arg.body
     **/
    updateAnnouncement({ announcementId, body }?: {
        announcementId: string;
        body: AdminAnnouncementSchema;
    }): any;
    /**
     *
     * @summary: Update schedule or published status of an annoucement
     * @description: Update schedule or published status of an announcement
     * @param {Object} arg - arg object.
     * @param {string} arg.announcementId - Announcement ID
     * @param {ScheduleSchema} arg.body
     **/
    updateAnnouncementSchedule({ announcementId, body }?: {
        announcementId: string;
        body: ScheduleSchema;
    }): any;
    /**
      *
      * @summary: Delete annoucement by id
      * @description: Delete announcement by id
      * @param {Object} arg - arg object.
      * @param {string} arg.announcementId - Announcement ID
      
      **/
    deleteAnnouncement({ announcementId }?: {
        announcementId: string;
    }): any;
    /**
     *
     * @summary: Create blog
     * @description: Use this to create a blog.
     * @param {Object} arg - arg object.
     * @param {BlogRequest} arg.body
     **/
    createBlog({ body }?: {
        body: BlogRequest;
    }): any;
    /**
      *
      * @summary: Get blogs
      * @description: Use this to get blogs.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getBlogs({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get blogs
      * @description: Use this to get blogs.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company Id
      * @param {string} arg.applicationId - Application Id
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getBlogsPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Update blog
     * @description: Use this to update blog.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Blog Id
     * @param {BlogRequest} arg.body
     **/
    updateBlog({ id, body }?: {
        id: string;
        body: BlogRequest;
    }): any;
    /**
      *
      * @summary: Delete blogs
      * @description: Use this to delete blogs.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Blog Id
      
      **/
    deleteBlog({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get components by component Id
      * @description: The endpoint fetches the component by component Id
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - slug of page to be fetched
      
      **/
    getComponentById({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get FAQ categories list
      * @description: Get list of FAQ categories
      * @param {Object} arg - arg object.
      
      **/
    getFaqCategories({}?: any): any;
    /**
      *
      * @summary: Get FAQ category by slug or id
      * @description: Get FAQ category by slug or id
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Slug or Id of FAQ Category
      
      **/
    getFaqCategoryBySlugOrId({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
     *
     * @summary: Creates a FAQ category
     * @description: Add Faq Category
     * @param {Object} arg - arg object.
     * @param {CreateFaqCategoryRequestSchema} arg.body
     **/
    createFaqCategory({ body }?: {
        body: CreateFaqCategoryRequestSchema;
    }): any;
    /**
     *
     * @summary: Updates a FAQ category
     * @description: Update Faq Category
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Faq category ID
     * @param {UpdateFaqCategoryRequestSchema} arg.body
     **/
    updateFaqCategory({ id, body }?: {
        id: string;
        body: UpdateFaqCategoryRequestSchema;
    }): any;
    /**
      *
      * @summary: Deletes a FAQ category
      * @description: Delete Faq Category
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Faq category ID
      
      **/
    deleteFaqCategory({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get FAQs of a Faq Category id or slug
      * @description: Get FAQs of a Faq Category `id` or `slug`
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Faq category ID or slug
      
      **/
    getFaqsByCategoryIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
     *
     * @summary: Creates FAQs for category whose `id` is specified
     * @description: Creates FAQs for category whose `id` is specified
     * @param {Object} arg - arg object.
     * @param {string} arg.categoryId - Faq category ID
     * @param {CreateFaqSchema} arg.body
     **/
    addFaq({ categoryId, body }?: {
        categoryId: string;
        body: CreateFaqSchema;
    }): any;
    /**
     *
     * @summary: Updates FAQ
     * @description: Updates FAQ
     * @param {Object} arg - arg object.
     * @param {string} arg.categoryId - Faq category ID
     * @param {string} arg.faqId - Faq ID
     * @param {CreateFaqSchema} arg.body
     **/
    updateFaq({ categoryId, faqId, body }?: {
        categoryId: string;
        faqId: string;
        body: CreateFaqSchema;
    }): any;
    /**
      *
      * @summary: Delete FAQ
      * @description: Delete FAQ
      * @param {Object} arg - arg object.
      * @param {string} arg.categoryId - Faq category ID
      * @param {string} arg.faqId - Faq ID
      
      **/
    deleteFaq({ categoryId, faqId }?: {
        categoryId: string;
        faqId: string;
    }): any;
    /**
      *
      * @summary: Get frequently asked question
      * @description: Get frequently asked questions list. These will be helpful for users to using website.
      * @param {Object} arg - arg object.
      * @param {string} arg.idOrSlug - Slug or Id of FAQ
      
      **/
    getFaqByIdOrSlug({ idOrSlug }?: {
        idOrSlug: string;
    }): any;
    /**
      *
      * @summary: Get landing-pages
      * @description: Use this to get landing-pages.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getLandingPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get landing-pages
      * @description: Use this to get landing-pages.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company ID
      * @param {string} arg.applicationId - Application ID
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getLandingPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create landing-page
     * @description: Use this to create landing-page.
     * @param {Object} arg - arg object.
     * @param {LandingPageSchema} arg.body
     **/
    createLandingPage({ body }?: {
        body: LandingPageSchema;
    }): any;
    /**
     *
     * @summary: Update landing-page
     * @description: Use this to update landing-page.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Landing page ID
     * @param {LandingPageSchema} arg.body
     **/
    updateLandingPage({ id, body }?: {
        id: string;
        body: LandingPageSchema;
    }): any;
    /**
      *
      * @summary: Delete landing-page
      * @description: Use this to delete landing-page.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Landing page ID
      
      **/
    deleteLandingPage({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get legal information
      * @description: Get legal information of application, which includes policy, Terms and Conditions, and FAQ information of application.
      * @param {Object} arg - arg object.
      
      **/
    getLegalInformation({}?: any): any;
    /**
     *
     * @summary: Save legal information
     * @description: Save legal information of application, which includes Policy, Terms and Conditions, and FAQ information of application.
     * @param {Object} arg - arg object.
     * @param {ApplicationLegal} arg.body
     **/
    updateLegalInformation({ body }?: {
        body: ApplicationLegal;
    }): any;
    /**
      *
      * @summary: Get navigations
      * @description: Use this to get navigations.
      * @param {Object} arg - arg object.
      * @param {string} arg.devicePlatform - Device platform
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getNavigations({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
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
    getNavigationsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create navigation
     * @description: Use this to create navigation.
     * @param {Object} arg - arg object.
     * @param {NavigationRequest} arg.body
     **/
    createNavigation({ body }?: {
        body: NavigationRequest;
    }): any;
    /**
      *
      * @summary: Get default navigations
      * @description: Use this to get default navigations.
      * @param {Object} arg - arg object.
      
      **/
    getDefaultNavigations({}?: any): any;
    /**
      *
      * @summary: Get navigation by slug
      * @description: Use this to get navigation by slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug
      * @param {string} arg.devicePlatform - Device platform
      
      **/
    getNavigationBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): any;
    /**
     *
     * @summary: Update navigation
     * @description: Use this to update navigation.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Navigation ID
     * @param {NavigationRequest} arg.body
     **/
    updateNavigation({ id, body }?: {
        id: string;
        body: NavigationRequest;
    }): any;
    /**
      *
      * @summary: Delete navigation
      * @description: Use this to delete navigation.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Navigation ID
      
      **/
    deleteNavigation({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get page meta
      * @description: Use this to get Page Meta.
      * @param {Object} arg - arg object.
      
      **/
    getPageMeta({}?: any): any;
    /**
      *
      * @summary: Get page spec
      * @description: Use this to get page spec.
      * @param {Object} arg - arg object.
      
      **/
    getPageSpec({}?: any): any;
    /**
     *
     * @summary: Create page
     * @description: Use this to create a page.
     * @param {Object} arg - arg object.
     * @param {PageRequest} arg.body
     **/
    createPage({ body }?: {
        body: PageRequest;
    }): any;
    /**
      *
      * @summary: Get pages
      * @description: Use this to get pages.
      * @param {Object} arg - arg object.
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getPages({ pageNo, pageSize }?: {
        pageNo?: number;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: Get pages
      * @description: Use this to get pages.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - Company Id
      * @param {string} arg.applicationId - Application Id
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getPagesPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create page preview
     * @description: Use this to create a page preview.
     * @param {Object} arg - arg object.
     * @param {PageRequest} arg.body
     **/
    createPagePreview({ body }?: {
        body: PageRequest;
    }): any;
    /**
     *
     * @summary: Update page
     * @description: Use this to update page.
     * @param {Object} arg - arg object.
     * @param {string} arg.slug - Page publish slug
     * @param {PagePublishRequest} arg.body
     **/
    updatePagePreview({ slug, body }?: {
        slug: string;
        body: PagePublishRequest;
    }): any;
    /**
     *
     * @summary: Update page
     * @description: Use this to update page.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Page Id
     * @param {PageSchema} arg.body
     **/
    updatePage({ id, body }?: {
        id: string;
        body: PageSchema;
    }): any;
    /**
      *
      * @summary: Delete page
      * @description: Use this to delete page.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Page Id
      
      **/
    deletePage({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get pages by component Id
      * @description: The endpoint fetches the component by component Id
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug of page to be fetched
      
      **/
    getPageBySlug({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Get seo of application
      * @description: Get seo of application
      * @param {Object} arg - arg object.
      
      **/
    getSEOConfiguration({}?: any): any;
    /**
     *
     * @summary: Update seo of application
     * @description: Update seo of application
     * @param {Object} arg - arg object.
     * @param {SeoComponent} arg.body
     **/
    updateSEOConfiguration({ body }?: {
        body: SeoComponent;
    }): any;
    /**
      *
      * @summary: Get slideshows
      * @description: Use this to get slideshows.
      * @param {Object} arg - arg object.
      * @param {string} arg.devicePlatform - Device platform
      * @param {number} [arg.pageNo] - Each response will contain **page_no** param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page.
      
      **/
    getSlideshows({ devicePlatform, pageNo, pageSize }?: {
        devicePlatform: string;
        pageNo?: number;
        pageSize?: number;
    }): any;
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
    getSlideshowsPaginator({ companyId, applicationId, devicePlatform, pageSize, }?: {
        companyId: string;
        applicationId: string;
        devicePlatform: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Create slideshow
     * @description: Use this to create slideshow.
     * @param {Object} arg - arg object.
     * @param {SlideshowRequest} arg.body
     **/
    createSlideshow({ body }?: {
        body: SlideshowRequest;
    }): any;
    /**
      *
      * @summary: Get slideshow by slug
      * @description: Use this to get slideshow by slug.
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - Slug
      * @param {string} arg.devicePlatform - Device platform
      
      **/
    getSlideshowBySlug({ slug, devicePlatform }?: {
        slug: string;
        devicePlatform: string;
    }): any;
    /**
     *
     * @summary: Update slideshow
     * @description: Use this to update slideshow.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Slideshow ID
     * @param {SlideshowRequest} arg.body
     **/
    updateSlideshow({ id, body }?: {
        id: string;
        body: SlideshowRequest;
    }): any;
    /**
      *
      * @summary: Delete slideshow
      * @description: Use this to delete slideshow.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Slideshow ID
      
      **/
    deleteSlideshow({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get support information
      * @description: Get contact details for customer support. Including emails and phone numbers
      * @param {Object} arg - arg object.
      
      **/
    getSupportInformation({}?: any): any;
    /**
     *
     * @summary: Update support data of application
     * @description: Update support data of application
     * @param {Object} arg - arg object.
     * @param {Support} arg.body
     **/
    updateSupportInformation({ body }?: {
        body: Support;
    }): any;
    /**
     *
     * @summary: Creates Tag
     * @description: Create tags
     * @param {Object} arg - arg object.
     * @param {CreateTagRequestSchema} arg.body
     **/
    createInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): any;
    /**
     *
     * @summary: Updates a Tag
     * @description: Update tag
     * @param {Object} arg - arg object.
     * @param {CreateTagRequestSchema} arg.body
     **/
    updateInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): any;
    /**
      *
      * @summary: Delete tags for application
      * @description: Delete tags for application
      * @param {Object} arg - arg object.
      
      **/
    deleteAllInjectableTags({}?: any): any;
    /**
      *
      * @summary: Get tags for application
      * @description: Get tags for application
      * @param {Object} arg - arg object.
      
      **/
    getInjectableTags({}?: any): any;
    /**
     *
     * @summary: Adds a Tag
     * @description: Add tag
     * @param {Object} arg - arg object.
     * @param {CreateTagRequestSchema} arg.body
     **/
    addInjectableTag({ body }?: {
        body: CreateTagRequestSchema;
    }): any;
    /**
     *
     * @summary: Removes a Tag
     * @description: Remove a particular tag
     * @param {Object} arg - arg object.
     * @param {RemoveHandpickedSchema} arg.body
     **/
    removeInjectableTag({ body }?: {
        body: RemoveHandpickedSchema;
    }): any;
    /**
     *
     * @summary: Edits a Tag by Id
     * @description: Edits a particular tag
     * @param {Object} arg - arg object.
     * @param {string} arg.tagId - Tag ID
     * @param {UpdateHandpickedSchema} arg.body
     **/
    editInjectableTag({ tagId, body }?: {
        tagId: string;
        body: UpdateHandpickedSchema;
    }): any;
}
declare class Payment {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get All Brand Payment Gateway Config Secret
      * @description: Get All Brand Payment Gateway Config Secret
      * @param {Object} arg - arg object.
      
      **/
    getBrandPaymentGatewayConfig({}?: any): any;
    /**
     *
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     * @param {Object} arg - arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     **/
    saveBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): any;
    /**
     *
     * @summary: Save Config Secret For Brand Payment Gateway
     * @description: Save Config Secret For Brand Payment Gateway
     * @param {Object} arg - arg object.
     * @param {PaymentGatewayConfigRequest} arg.body
     **/
    updateBrandPaymentGatewayConfig({ body }?: {
        body: PaymentGatewayConfigRequest;
    }): any;
    /**
      *
      * @summary: Get All Valid Payment Options
      * @description: Use this API to get Get All Valid Payment Options for making payment
      * @param {Object} arg - arg object.
      * @param {boolean} arg.refresh -
      * @param {string} arg.requestType -
      
      **/
    getPaymentModeRoutes({ refresh, requestType }?: {
        refresh: boolean;
        requestType: string;
    }): any;
}
declare class Order {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Track Shipment by shipment id, for application based on application Id
      * @description: Shipment Track
      * @param {Object} arg - arg object.
      * @param {string} arg.shipmentId - Shipment Id
      
      **/
    trackShipmentPlatform({ shipmentId }?: {
        shipmentId: string;
    }): any;
    /**
      *
      * @summary: Track Order by order id, for application based on application Id
      * @description: Order Track
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId - Order Id
      
      **/
    trackOrder({ orderId }?: {
        orderId: string;
    }): any;
    /**
      *
      * @summary: Get all failed orders application wise
      * @description: Failed Orders
      * @param {Object} arg - arg object.
      
      **/
    failedOrders({}?: any): any;
    /**
      *
      * @summary: Reprocess order by order id
      * @description: Order Reprocess
      * @param {Object} arg - arg object.
      * @param {string} arg.orderId - Order Id
      
      **/
    reprocessOrder({ orderId }?: {
        orderId: string;
    }): any;
}
declare class Catalog {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Delete a Search Keywords
      * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
      
      **/
    deleteSearchKeywords({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update Search Keyword
     * @description: Update Search Keyword by its id. On successful request, returns the updated collection
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateSearchKeyword} arg.body
     **/
    updateSearchKeywords({ id, body }?: {
        id: string;
        body: CreateSearchKeyword;
    }): any;
    /**
      *
      * @summary: Get a Search Keywords Details
      * @description: Get the details of a words by its `id`. If successful, returns a Collection resource in the response body specified in `GetSearchWordsDetailResponseSchema`
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
      
      **/
    getSearchKeywords({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: List all Search Custom Keyword Listing
      * @description: Custom Search Keyword allows you to map conditions with keywords to give you the ultimate results
      * @param {Object} arg - arg object.
      
      **/
    getAllSearchKeyword({}?: any): any;
    /**
     *
     * @summary: Add a Custom Search Keywords
     * @description: Create a Custom Search Keywords. See `CreateSearchKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateSearchKeywordSchema`
     * @param {Object} arg - arg object.
     * @param {CreateSearchKeyword} arg.body
     **/
    createCustomKeyword({ body }?: {
        body: CreateSearchKeyword;
    }): any;
    /**
      *
      * @summary: Delete a Autocomplete Keywords
      * @description: Delete a keywords by it's id. Returns an object that tells whether the keywords was deleted successfully
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
      
      **/
    deleteAutocompleteKeyword({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Create & Update Autocomplete Keyword
     * @description: Update a mapping by it's id. On successful request, returns the updated Keyword mapping
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to delete.
     * @param {CreateAutocompleteKeyword} arg.body
     **/
    updateAutocompleteKeyword({ id, body }?: {
        id: string;
        body: CreateAutocompleteKeyword;
    }): any;
    /**
      *
      * @summary: Get a Autocomplete Keywords Details
      * @description: Get the details of a words by its `id`. If successful, returns a keywords resource in the response body specified in `GetAutocompleteWordsResponseSchema`
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier for a particular detail. Pass the `id` of the keywords which you want to retrieve.
      
      **/
    getAutocompleteKeywordDetail({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: List all Autocomplete Keyword Listing
      * @description: Custom Autocomplete Keyword allows you to map conditions with keywords to give you the ultimate results
      * @param {Object} arg - arg object.
      
      **/
    getAutocompleteConfig({}?: any): any;
    /**
     *
     * @summary: Add a Custom Autocomplete Keywords
     * @description: Create a Custom Autocomplete Keywords. See `CreateAutocompleteKeywordSchema` for the list of attributes needed to create a mapping and /collections/query-options for the available options to create a rule. On successful request, returns a paginated list of collections specified in `CreateAutocompleteKeywordSchema`
     * @param {Object} arg - arg object.
     * @param {CreateAutocompleteKeyword} arg.body
     **/
    createCustomAutocompleteRule({ body }?: {
        body: CreateAutocompleteKeyword;
    }): any;
    /**
      *
      * @summary: Get configuration meta  details for catalog for admin panel
      * @description: configuration meta  details for catalog.
      * @param {Object} arg - arg object.
      
      **/
    getCatalogConfiguration({}?: any): any;
    /**
      *
      * @summary: Get configured details for catalog
      * @description: configured details for catalog.
      * @param {Object} arg - arg object.
      
      **/
    getConfigurations({}?: any): any;
    /**
     *
     * @summary: Add configuration for products & listings
     * @description: Add configuration for products & listing.
     * @param {Object} arg - arg object.
     * @param {AppConfiguration} arg.body
     **/
    createConfigurationProductListing({ body }?: {
        body: AppConfiguration;
    }): any;
    /**
      *
      * @summary: Get configured details for catalog
      * @description: configured details for catalog.
      * @param {Object} arg - arg object.
      * @param {string} arg.type - type can be brands, categories etc.
      
      **/
    getConfigurationByType({ type }?: {
        type: string;
    }): any;
    /**
     *
     * @summary: Add configuration for categories and brands
     * @description: Add configuration for categories & brands.
     * @param {Object} arg - arg object.
     * @param {string} arg.type - type can be brands, categories etc.
     * @param {AppConfiguration} arg.body
     **/
    createConfigurationByType({ type, body }?: {
        type: string;
        body: AppConfiguration;
    }): any;
    /**
      *
      * @summary: Get query filters to configure a collection
      * @description: Get query filters to configure a collection
      * @param {Object} arg - arg object.
      
      **/
    getQueryFilters({}?: any): any;
    /**
      *
      * @summary: List all the collections
      * @description: A Collection allows you to organize your products into hierarchical groups. For example, a dress might be in the category _Clothing_, the individual product might also be in the collection _Summer_. On successful request, returns all the collections as specified in `CollectionListingSchema`
      * @param {Object} arg - arg object.
      
      **/
    getAllCollections({}?: any): any;
    /**
     *
     * @summary: Add a Collection
     * @description: Create a collection. See `CreateCollectionRequestSchema` for the list of attributes needed to create a collection and collections/query-options for the available options to create a collection. On successful request, returns a paginated list of collections specified in `CollectionCreateResponse`
     * @param {Object} arg - arg object.
     * @param {CreateCollection} arg.body
     **/
    createCollection({ body }?: {
        body: CreateCollection;
    }): any;
    /**
      *
      * @summary: Get a particular collection
      * @description: Get the details of a collection by its `slug`. If successful, returns a Collection resource in the response body specified in `CollectionDetailResponse`
      * @param {Object} arg - arg object.
      * @param {string} arg.slug - A `slug` is a human readable, URL friendly unique identifier of an object. Pass the `slug` of the collection which you want to retrieve.
      
      **/
    getCollectionDetail({ slug }?: {
        slug: string;
    }): any;
    /**
      *
      * @summary: Delete a Collection
      * @description: Delete a collection by it's id. Returns an object that tells whether the collection was deleted successfully
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier of a collection.
      
      **/
    deleteCollection({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Update a collection
      * @description: Update a collection by it's id. On successful request, returns the updated collection
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier of a collection.
      
      **/
    updateCollection({ id }?: {
        id: string;
    }): any;
    /**
      *
      * @summary: Get the items for a collection
      * @description: Get items from a collection specified by its `id`.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - A `id` is a unique identifier of a collection.
      * @param {string} [arg.sortOn] - Each response will contain sort_on param, which should be sent back to make pagination work.
      * @param {string} [arg.pageId] - Each response will contain next_page_id param, which should be sent back to make pagination work.
      * @param {number} [arg.pageSize] - Number of items to retrieve in each page. Default is 12.
      
      **/
    getCollectionItems({ id, sortOn, pageId, pageSize }?: {
        id: string;
        sortOn?: string;
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
     *
     * @summary: Add items to a collection
     * @description: Adds items to a collection specified by its `id`. See `CollectionItemRequest` for the list of attributes needed to add items to an collection.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - A `id` is a unique identifier of a collection.
     * @param {CollectionItemRequest} arg.body
     **/
    addCollectionItems({ id, body }?: {
        id: string;
        body: CollectionItemRequest;
    }): any;
    /**
      *
      * @summary: Analytics data of catalog and inventory.
      * @description: Catalog Insights api returns the count of catalog related data like products, brands, departments and categories that have been made live as per configuration of the app.
      * @param {Object} arg - arg object.
      * @param {string} [arg.brand] - Brand slug
      
      **/
    getCatalogInsights({ brand }?: {
        brand?: string;
    }): any;
}
declare class Share {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
     *
     * @summary: Create short link
     * @description: Create short link
     * @param {Object} arg - arg object.
     * @param {ShortLinkReq} arg.body
     **/
    createShortLink({ body }?: {
        body: ShortLinkReq;
    }): any;
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
    getShortLinks({ pageNo, pageSize, createdBy, active, q }?: {
        pageNo?: number;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): any;
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
    getShortLinksPaginator({ companyId, applicationId, pageSize, createdBy, active, q, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        createdBy?: string;
        active?: string;
        q?: string;
    }): Paginator;
    /**
      *
      * @summary: Get short link by hash
      * @description: Get short link by hash
      * @param {Object} arg - arg object.
      * @param {string} arg.hash - Hash of short url
      
      **/
    getShortLinkByHash({ hash }?: {
        hash: string;
    }): any;
    /**
     *
     * @summary: Update short link by id
     * @description: Update short link by id
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Short link document identifier
     * @param {ShortLinkReq} arg.body
     **/
    updateShortLinkById({ id, body }?: {
        id: string;
        body: ShortLinkReq;
    }): any;
}
declare class Cart {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
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
    getCoupons({ pageNo, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        pageNo?: number;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): any;
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
    getCouponsPaginator({ companyId, applicationId, pageSize, isArchived, title, isPublic, isDisplay, typeSlug, code, }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
        isArchived?: boolean;
        title?: string;
        isPublic?: boolean;
        isDisplay?: boolean;
        typeSlug?: string;
        code?: string;
    }): Paginator;
    /**
     *
     * @summary: Create new coupon
     * @description: Create new coupon
     * @param {Object} arg - arg object.
     * @param {CouponAdd} arg.body
     **/
    createCoupon({ body }?: {
        body: CouponAdd;
    }): any;
    /**
      *
      * @summary: Get with single coupon details or coupon list
      * @description: Get single coupon details with `id` in path param
      * @param {Object} arg - arg object.
      * @param {string} arg.id -
      
      **/
    getCouponById({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Update existing coupon configuration
     * @description: Update coupon with id sent in `id`
     * @param {Object} arg - arg object.
     * @param {string} arg.id -
     * @param {CouponUpdate} arg.body
     **/
    updateCoupon({ id, body }?: {
        id: string;
        body: CouponUpdate;
    }): any;
    /**
     *
     * @summary: Update coupon archive state and schedule
     * @description: Update archive/unarchive and change schedule for coupon
     * @param {Object} arg - arg object.
     * @param {string} arg.id -
     * @param {CouponPartialUpdate} arg.body
     **/
    updateCouponPartially({ id, body }?: {
        id: string;
        body: CouponPartialUpdate;
    }): any;
}
declare class Rewards {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: List of giveaways of the current application.
      * @description: List of giveaways of the current application.
      * @param {Object} arg - arg object.
      * @param {string} [arg.pageId] - pagination page id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getGiveaways({ pageId, pageSize }?: {
        pageId?: string;
        pageSize?: number;
    }): any;
    /**
      *
      * @summary: List of giveaways of the current application.
      * @description: List of giveaways of the current application.
      * @param {Object} arg - arg object.
      * @param {string} arg.companyId - company id
      * @param {string} arg.applicationId - application id
      * @param {number} [arg.pageSize] - pagination page size
      
      **/
    getGiveawaysPaginator({ companyId, applicationId, pageSize }?: {
        companyId: string;
        applicationId: string;
        pageSize?: number;
    }): Paginator;
    /**
     *
     * @summary: Adds a new giveaway.
     * @description: Adds a new giveaway.
     * @param {Object} arg - arg object.
     * @param {Giveaway} arg.body
     **/
    createGiveaway({ body }?: {
        body: Giveaway;
    }): any;
    /**
      *
      * @summary: Get giveaway by ID.
      * @description: Get giveaway by ID.
      * @param {Object} arg - arg object.
      * @param {string} arg.id - Giveaway ID
      
      **/
    getGiveawayByID({ id }?: {
        id: string;
    }): any;
    /**
     *
     * @summary: Updates the giveaway by it's ID.
     * @description: Updates the giveaway by it's ID.
     * @param {Object} arg - arg object.
     * @param {string} arg.id - Giveaway ID
     * @param {Giveaway} arg.body
     **/
    updateGiveaway({ id, body }?: {
        id: string;
        body: Giveaway;
    }): any;
    /**
      *
      * @summary: List of offer of the current application.
      * @description: List of offer of the current application.
      * @param {Object} arg - arg object.
      
      **/
    getOffers({}?: any): any;
    /**
      *
      * @summary: Get offer by name.
      * @description: Get offer by name.
      * @param {Object} arg - arg object.
      * @param {string} arg.cookie - User's session cookie. This cookie is set in browser cookie when logged-in to fynd's authentication system i.e. `Grimlock` or by using grimlock-backend SDK for backend implementation.
      * @param {string} arg.name - Offer name
      
      **/
    getOfferByName({ cookie, name }?: {
        cookie: string;
        name: string;
    }): any;
    /**
     *
     * @summary: Updates the offer by name.
     * @description: Updates the offer by name.
     * @param {Object} arg - arg object.
     * @param {string} arg.name - Offer name
     * @param {Offer} arg.body
     **/
    updateOfferByName({ name, body }?: {
        name: string;
        body: Offer;
    }): any;
    /**
      *
      * @summary: User's reward details.
      * @description: User's reward details.
      * @param {Object} arg - arg object.
      * @param {string} arg.userId - user id
      
      **/
    getUserAvailablePoints({ userId }?: {
        userId: string;
    }): any;
    /**
     *
     * @summary: Update User status
     * @description: Update user status, active/archive
     * @param {Object} arg - arg object.
     * @param {string} arg.userId - user id
     * @param {AppUser} arg.body
     **/
    updateUserStatus({ userId, body }?: {
        userId: string;
        body: AppUser;
    }): any;
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
    getUserPointsHistory({ userId, pageId, pageLimit, pageSize }?: {
        userId: string;
        pageId?: string;
        pageLimit?: number;
        pageSize?: number;
    }): any;
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
    getUserPointsHistoryPaginator({ companyId, applicationId, userId, pageSize, }?: {
        companyId: string;
        applicationId: string;
        userId: string;
        pageSize?: number;
    }): Paginator;
}
declare class Analytics {
    constructor(config: any, applicationId: any);
    config: any;
    applicationId: any;
    /**
      *
      * @summary: Get statistics groups
      * @description: Get statistics groups
      * @param {Object} arg - arg object.
      
      **/
    getStatiscticsGroups({}?: any): any;
    /**
      *
      * @summary: Get statistics group components
      * @description: Get statistics group components
      * @param {Object} arg - arg object.
      * @param {string} arg.groupName - Group name
      
      **/
    getStatiscticsGroupComponents({ groupName }?: {
        groupName: string;
    }): any;
    /**
      *
      * @summary: Get component statistics csv
      * @description: Get component statistics csv
      * @param {Object} arg - arg object.
      * @param {string} arg.componentName - Component name
      
      **/
    getComponentStatsCSV({ componentName }?: {
        componentName: string;
    }): any;
    /**
      *
      * @summary: Get component statistics pdf
      * @description: Get component statistics pdf
      * @param {Object} arg - arg object.
      * @param {string} arg.componentName - Component name
      
      **/
    getComponentStatsPDF({ componentName }?: {
        componentName: string;
    }): any;
    /**
      *
      * @summary: Get component statistics
      * @description: Get component statistics
      * @param {Object} arg - arg object.
      * @param {string} arg.componentName - Component name
      
      **/
    getComponentStats({ componentName }?: {
        componentName: string;
    }): any;
    /**
      *
      * @summary: Get abandon carts list
      * @description: Get abandon carts list
      * @param {Object} arg - arg object.
      * @param {string} arg.from - From date
      * @param {string} arg.to - To date
      * @param {string} [arg.pageNo] - Current page number
      * @param {string} [arg.pageSize] - Current page size
      
      **/
    getAbandonCartList({ from, to, pageNo, pageSize }?: {
        from: string;
        to: string;
        pageNo?: string;
        pageSize?: string;
    }): any;
    /**
      *
      * @summary: Get abandon carts csv
      * @description: Get abandon carts csv
      * @param {Object} arg - arg object.
      * @param {string} arg.from - From date
      * @param {string} arg.to - To date
      
      **/
    getAbandonCartsCSV({ from, to }?: {
        from: string;
        to: string;
    }): any;
    /**
      *
      * @summary: Get abandon carts details
      * @description: Get abandon cart details
      * @param {Object} arg - arg object.
      * @param {string} arg.cartId - Cart Id
      
      **/
    getAbandonCartDetail({ cartId }?: {
        cartId: string;
    }): any;
}
type TicketList = {
    items?: Array<Ticket>;
    filters?: Filter;
    page?: Page;
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
type SeoComponent = {
    seo?: SeoSchema;
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
    page?: Page;
};
type ResourceContent = {
    type?: string;
    value?: string;
};
type Asset = {
    aspectRatio?: string;
    id?: string;
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
    page?: Page;
};
type CreateAnnouncementSchema = {
    message?: string;
    data?: AdminAnnouncementSchema;
};
type Navigation = {
    name?: string;
    slug?: string;
    orientation?: string;
    createdBy?: CreatedBySchema;
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
type SlideshowMedia = {
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
type LandingPageGetResponse = {
    items?: Array<any>;
    page?: Page;
};
type LandingPageSchema = {
    slug?: string;
    action?: Action;
    platform?: Array<string>;
    createdBy?: CreatedBySchema;
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
    page?: Page;
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
    createdBy?: CreatedBySchema;
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
    createdBy?: CreatedBySchema;
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
    page?: Page;
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
type CreatedBySchema = {
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
    page?: Page;
};
type SlideshowSchema = {
    id?: string;
    slug?: string;
    dateMeta?: DateMeta;
    application?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: Array<SlideshowMedia>;
    active?: boolean;
    archived?: boolean;
    customJson?: any;
};
type SlideshowRequest = {
    slug?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia;
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
type PhoneProperties = {
    key?: string;
    code?: string;
    number?: string;
};
type PhoneSchema = {
    active?: boolean;
    phone?: Array<PhoneProperties>;
};
type EmailProperties = {
    key?: string;
    value?: string;
};
type EmailSchema = {
    active?: boolean;
    email?: Array<EmailProperties>;
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
type UnauthenticatedUser = {
    message?: string;
};
type UnauthenticatedApplication = {
    message?: string;
};
type BadRequest = {
    message?: string;
};
type ResourceNotFound = {
    message?: string;
};
type InternalServerError = {
    message?: string;
    code?: string;
};
type PlanRecurring = {
    interval?: string;
    intervalCount?: number;
};
type Plan = {
    recurring?: PlanRecurring;
    isTrialPlan?: boolean;
    planGroup?: string;
    tagLines?: Array<string>;
    currency?: string;
    isActive?: boolean;
    isVisible?: boolean;
    trialPeriod?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    id?: string;
    name?: string;
    description?: string;
    amount?: number;
    productSuiteId?: string;
    createdAt?: string;
    modifiedAt?: string;
};
type DetailedPlanComponents = {
    name?: string;
    slug?: string;
    description?: string;
    group?: string;
    icon?: string;
    links?: any;
    enabled?: boolean;
    displayText?: string;
};
type DetailedPlan = {
    recurring?: PlanRecurring;
    isTrialPlan?: boolean;
    planGroup?: string;
    tagLines?: Array<string>;
    currency?: string;
    isActive?: boolean;
    isVisible?: boolean;
    trialPeriod?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    id?: string;
    name?: string;
    description?: string;
    amount?: number;
    productSuiteId?: string;
    createdAt?: string;
    modifiedAt?: string;
    components?: Array<DetailedPlanComponents>;
};
type InvoiceDetailsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceDetailsClient = {
    addressLines?: Array<string>;
    name?: string;
    email?: string;
    phone?: string;
};
type InvoiceDetailsStatusTrail = {
    id?: string;
    value?: string;
    timestamp?: string;
};
type InvoiceDetailsPaymentMethodsDataChecks = {
    cvcCheck?: string;
    addressLine1Check?: string;
    addressPostalCodeCheck?: string;
};
type InvoiceDetailsPaymentMethodsDataNetworks = {
    available?: Array<string>;
    preferred?: string;
};
type InvoiceDetailsPaymentMethodsDataThreeDSecureUsage = {
    supported?: boolean;
};
type InvoiceDetailsPaymentMethodsData = {
    brand?: string;
    last4?: string;
    checks?: InvoiceDetailsPaymentMethodsDataChecks;
    wallet?: string;
    country?: string;
    funding?: string;
    expYear?: number;
    networks?: InvoiceDetailsPaymentMethodsDataNetworks;
    expMonth?: number;
    fingerprint?: string;
    generatedFrom?: string;
    threeDSecureUsage?: InvoiceDetailsPaymentMethodsDataThreeDSecureUsage;
};
type InvoiceDetailsPaymentMethods = {
    id?: number;
    type?: string;
    pgPaymentMethodId?: string;
    data?: InvoiceDetailsPaymentMethodsData;
    isDefault?: boolean;
};
type InvoicePaymentMethod = {
    pgPaymentMethodId?: string;
};
type InvoiceDetails = {
    period?: InvoiceDetailsPeriod;
    client?: InvoiceDetailsClient;
    autoAdvance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    id?: string;
    collectionMethod?: string;
    subscriberId?: string;
    invoiceUrl?: string;
    number?: string;
    pgData?: any;
    receiptNumber?: string;
    statementDescriptor?: string;
    currentStatus?: string;
    statusTrail?: Array<InvoiceDetailsStatusTrail>;
    subtotal?: number;
    total?: number;
    subscription?: string;
    nextActionTime?: string;
    createdAt?: string;
    modifiedAt?: string;
    hashIdentifier?: string;
    paymentMethod?: InvoicePaymentMethod;
};
type InvoiceItemsPlanRecurring = {
    interval?: string;
    intervalCount?: number;
};
type InvoiceItemsPlan = {
    recurring?: InvoiceItemsPlanRecurring;
    isTrialPlan?: boolean;
    planGroup?: string;
    tagLines?: Array<string>;
    currency?: string;
    isActive?: boolean;
    isVisible?: boolean;
    trialPeriod?: number;
    addons?: Array<string>;
    tags?: Array<string>;
    type?: string;
    country?: string;
    id?: string;
    name?: string;
    description?: string;
    amount?: number;
    productSuiteId?: string;
    createdAt?: string;
    modifiedAt?: string;
};
type InvoiceItemsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceItems = {
    id?: string;
    currency?: string;
    plan?: InvoiceItemsPlan;
    name?: string;
    quantity?: number;
    description?: string;
    period?: InvoiceItemsPeriod;
    unitAmount?: number;
    amount?: number;
    type?: string;
    invoiceId?: string;
    createdAt?: string;
    modifiedAt?: string;
};
type Invoice = {
    invoice?: InvoiceDetails;
    invoiceItems?: Array<InvoiceItems>;
};
type InvoicesDataClient = {
    name?: string;
    email?: string;
    phone?: string;
    addressLines?: Array<string>;
};
type InvoicesDataPeriod = {
    start?: string;
    end?: string;
};
type InvoicesDataPaymentMethod = {
    pgPaymentMethodId?: string;
};
type InvoicesData = {
    id?: string;
    client?: InvoicesDataClient;
    autoAdvance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    collectionMethod?: string;
    subscriberId?: string;
    invoiceUrl?: string;
    number?: string;
    pgData?: any;
    period?: InvoicesDataPeriod;
    receiptNumber?: string;
    statementDescriptor?: string;
    currentStatus?: string;
    statusTrail?: Array<InvoiceDetailsStatusTrail>;
    subtotal?: number;
    total?: number;
    subscription?: string;
    nextActionTime?: string;
    createdAt?: string;
    modifiedAt?: string;
    hashIdentifier?: string;
    paymentMethod?: InvoicesDataPaymentMethod;
    invoiceItems?: Array<InvoiceItems>;
};
type Invoices = {
    data?: Array<InvoicesData>;
    start?: number;
    end?: number;
    limit?: number;
    page?: number;
    total?: number;
};
type Phone = {
    phoneNumber?: string;
    phoneCountryCode?: string;
};
type SubscriptionBillingAddress = {
    country?: string;
    state?: string;
    city?: string;
    line1?: string;
    line2?: string;
    postalCode?: string;
};
type SubscriptionCustomer = {
    phone?: Phone;
    billingAddress?: SubscriptionBillingAddress;
    id?: string;
    uniqueId?: string;
    type?: string;
    name?: string;
    email?: string;
    createdAt?: string;
    modifiedAt?: string;
    data?: any;
};
type SubscriptionCustomerCreate = {
    phone?: Phone;
    billingAddress?: SubscriptionBillingAddress;
    uniqueId?: string;
    type?: string;
    name?: string;
    email?: string;
};
type SubscriptionCurrentPeriod = {
    start?: string;
    end?: string;
};
type SubscriptionPauseCollection = {
    behavior?: string;
    resumeAt?: string;
};
type SubscriptionTrial = {
    start?: string;
    end?: string;
};
type SubscriptionInvoiceSettings = {
    generation?: boolean;
    charging?: boolean;
};
type Subscription = {
    currentPeriod?: SubscriptionCurrentPeriod;
    pauseCollection?: SubscriptionPauseCollection;
    trial?: SubscriptionTrial;
    invoiceSettings?: SubscriptionInvoiceSettings;
    isActive?: boolean;
    cancelAtPeriodEnd?: boolean;
    id?: string;
    subscriberId?: string;
    planId?: string;
    productSuiteId?: string;
    planData?: Plan;
    currentStatus?: string;
    collectionMethod?: string;
    createdAt?: string;
    modifiedAt?: string;
    latestInvoice?: string;
};
type SubscriptionStatus = {
    isEnabled?: boolean;
    subscription?: Subscription;
};
type SubscriptionLimitApplication = {
    enabled?: boolean;
    hardLimit?: number;
    softLimit?: number;
};
type SubscriptionLimitMarketplace = {
    enabled?: boolean;
};
type SubscriptionLimitOtherPlatform = {
    enabled?: boolean;
};
type SubscriptionLimitTeam = {
    limit?: number;
};
type SubscriptionLimitProducts = {
    bulk?: boolean;
    limit?: number;
};
type SubscriptionLimitExtensions = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimitIntegrations = {
    enabled?: boolean;
    limit?: number;
};
type SubscriptionLimit = {
    application?: SubscriptionLimitApplication;
    marketplace?: SubscriptionLimitMarketplace;
    otherPlatform?: SubscriptionLimitOtherPlatform;
    team?: SubscriptionLimitTeam;
    products?: SubscriptionLimitProducts;
    extensions?: SubscriptionLimitExtensions;
    integrations?: SubscriptionLimitIntegrations;
    isTrialPlan?: boolean;
};
type SubscriptionActivateReq = {
    uniqueId?: string;
    type?: string;
    productSuite?: string;
    planId?: string;
    paymentMethod?: string;
};
type SubscriptionActivateRes = {
    success?: boolean;
    data?: Subscription;
};
type CancelSubscriptionReq = {
    uniqueId?: string;
    type?: string;
    productSuite?: string;
    subscriptionId?: string;
};
type CancelSubscriptionRes = {
    success?: boolean;
    data?: Subscription;
};
type PaymentGatewayConfigResponse = {
    created: boolean;
    aggregators?: Array<any>;
    excludedFields: Array<string>;
    success: boolean;
    displayFields: Array<string>;
    appId: string;
};
type ErrorCodeDescription = {
    description: string;
    code: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    configType: string;
    secret: string;
    key: string;
    isActive?: boolean;
    merchantSalt: string;
};
type PaymentGatewayConfigRequest = {
    aggregatorName?: PaymentGatewayConfig;
    isActive?: boolean;
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
    error: ErrorCodeAndDescription;
    success: boolean;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type PaymentModeList = {
    retryCount?: number;
    expMonth?: number;
    intentFlow?: string;
    cardFingerprint?: string;
    fyndVpa?: string;
    cardReference?: string;
    displayName?: string;
    intentAppErrorList?: Array<string>;
    nickname?: string;
    cardNumber?: string;
    cardBrandImage?: string;
    cardToken?: string;
    displayPriority?: number;
    cardId?: string;
    cardIsin?: string;
    code?: string;
    aggregatorName: string;
    cardIssuer?: string;
    cardBrand?: string;
    expYear?: number;
    cardType?: string;
    merchantCode?: string;
    name?: string;
    timeout?: number;
    logoUrl?: PaymentModeLogo;
    expired?: boolean;
    cardName?: string;
};
type RootPaymentMode = {
    name: string;
    aggregatorName?: string;
    addCardEnabled?: boolean;
    list?: Array<PaymentModeList>;
    displayName: string;
    displayPriority: number;
    anonymousEnable?: boolean;
};
type PaymentOptions = {
    paymentOption: Array<RootPaymentMode>;
};
type PaymentOptionsResponse = {
    success: boolean;
    paymentOptions: PaymentOptions;
};
type PayoutsResponse = {
    uniqueTransferNo: any;
    transferType: string;
    moreAttributes: any;
    customers: any;
    isDefault: boolean;
    payoutsAggregators: Array<any>;
    isActive: boolean;
};
type PayoutRequest = {
    uniqueExternalId: string;
    transferType: string;
    aggregator: string;
    users: any;
    bankDetails: any;
    isActive: boolean;
};
type PayoutResponse = {
    uniqueTransferNo: string;
    created: boolean;
    paymentStatus: string;
    users: any;
    aggregator: string;
    transferType: string;
    payouts: any;
    bankDetails: any;
    success: boolean;
    isActive: boolean;
};
type UpdatePayoutResponse = {
    isActive: boolean;
    success: boolean;
    isDefault: boolean;
};
type UpdatePayoutRequest = {
    isActive: boolean;
    uniqueExternalId: string;
    isDefault: boolean;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    success: boolean;
    data: Array<any>;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    config: any;
    aggregator: string;
    success: boolean;
};
type SaveSubscriptionSetupIntentRequest = {
    uniqueExternalId: string;
};
type SaveSubscriptionSetupIntentResponse = {
    success: boolean;
    data: any;
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
    message?: string;
    status?: number;
    code?: string;
    meta?: any;
};
type SearchKeywordResult = {
    query: any;
    sortOn: string;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    customJson?: any;
    isActive?: boolean;
    appId?: string;
    words?: Array<string>;
};
type GetSearchWordsData = {
    uid?: string;
    result?: any;
    customJson?: any;
    appId?: string;
    words?: Array<string>;
};
type Page = {
    itemTotal?: number;
    hasPrevious?: boolean;
    current?: number;
    nextPageId?: string;
    hasNext?: boolean;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: Array<GetSearchWordsData>;
};
type Media = {
    type?: string;
    url?: string;
};
type AutocompletePageAction = {
    query: any;
    params?: any;
    type: string;
    url?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    logo?: Media;
    action?: AutocompleteAction;
    customJson?: any;
    display?: string;
};
type CreateAutocompleteKeyword = {
    customJson?: any;
    isActive?: boolean;
    appId?: string;
    results?: Array<AutocompleteResult>;
    words?: Array<string>;
};
type GetAutocompleteWordsData = {
    uid?: string;
    customJson?: any;
    appId?: string;
    results?: Array<any>;
    words?: Array<string>;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: Array<GetAutocompleteWordsData>;
};
type CreateAutocompleteWordsResponse = {
    results?: Array<any>;
    customJson?: any;
    appId?: string;
    words?: Array<string>;
};
type ProductBundleItem = {
    productUid: number;
    maxQuantity: number;
    autoAddToCart?: boolean;
    autoSelect?: boolean;
    allowRemove?: boolean;
    minQuantity: number;
};
type GetProductBundleCreateResponse = {
    id?: string;
    products: Array<ProductBundleItem>;
    pageVisibility?: Array<string>;
    isActive: boolean;
    meta?: any;
    createdOn?: string;
    createdBy?: any;
    sameStoreAssignment?: boolean;
    logo?: string;
    modifiedOn?: string;
    name: string;
    choice: string;
    slug: string;
    companyId?: number;
    modifiedBy?: any;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: Array<GetProductBundleCreateResponse>;
};
type ProductBundleRequest = {
    products: Array<ProductBundleItem>;
    pageVisibility?: Array<string>;
    isActive: boolean;
    meta?: any;
    createdOn?: string;
    createdBy?: any;
    sameStoreAssignment?: boolean;
    logo?: string;
    modifiedOn?: string;
    name: string;
    choice: string;
    slug: string;
    modifiedBy?: any;
};
type ProductBundleUpdateRequest = {
    products: Array<ProductBundleItem>;
    pageVisibility?: Array<string>;
    isActive: boolean;
    meta?: any;
    sameStoreAssignment?: boolean;
    logo?: string;
    modifiedOn?: string;
    name: string;
    choice: string;
    slug: string;
    modifiedBy?: any;
};
type LimitedProductData = {
    itemCode?: string;
    identifier?: any;
    uid?: number;
    quantity?: number;
    sizes?: Array<string>;
    images?: Array<string>;
    countryOfOrigin?: string;
    price?: any;
    name?: string;
    shortDescription?: string;
    attributes?: any;
    slug?: string;
};
type Size = {
    quantity?: number;
    isAvailable?: boolean;
    value?: string;
    display?: string;
};
type Price = {
    maxMarked?: number;
    minMarked?: number;
    minEffective?: number;
    currency?: string;
    maxEffective?: number;
};
type GetProducts = {
    productDetails?: LimitedProductData;
    productUid?: number;
    maxQuantity?: number;
    sizes?: Array<Size>;
    autoAddToCart?: boolean;
    autoSelect?: boolean;
    price?: Price;
    allowRemove?: boolean;
    minQuantity?: number;
};
type GetProductBundleResponse = {
    products?: Array<GetProducts>;
    isActive?: boolean;
    meta?: any;
    sameStoreAssignment?: boolean;
    logo?: string;
    name?: string;
    choice?: string;
    pageVisibility?: Array<string>;
    slug?: string;
    companyId?: number;
};
type ListSizeGuide = {
    page?: any;
    items?: Array<any>;
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
    title: string;
    id?: string;
    image?: string;
    subtitle?: string;
    description?: string;
    createdOn?: string;
    guide?: Guide;
    active?: boolean;
    modifiedOn?: string;
    tag?: string;
    name: string;
    brandId?: number;
    createdBy?: any;
    companyId?: number;
    modifiedBy?: any;
};
type SuccessResponse = {
    uid?: number;
    success?: boolean;
};
type SizeGuideResponse = {
    title?: string;
    id?: string;
    subtitle?: string;
    createdOn?: string;
    guide?: any;
    active?: boolean;
    modifiedOn?: string;
    tag?: string;
    brandId?: number;
    name?: string;
    createdBy?: any;
    companyId?: number;
    modifiedBy?: any;
};
type GetCatalogConfigurationDetailsProduct = {
    variant?: any;
    compare?: any;
    similar?: any;
    detail?: any;
};
type MetaDataListingFilterMetaResponse = {
    filterTypes?: Array<string>;
    units?: Array<any>;
    display?: string;
    key?: string;
};
type MetaDataListingFilterResponse = {
    data?: Array<MetaDataListingFilterMetaResponse>;
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: Array<MetaDataListingSortMetaResponse>;
};
type MetaDataListingResponse = {
    filter: MetaDataListingFilterResponse;
    sort: MetaDataListingSortResponse;
};
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    bucketPoints?: Array<ConfigurationBucketPoints>;
    value?: string;
    map?: any;
    condition?: string;
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    key: string;
    valueConfig?: ConfigurationListingFilterValue;
    isActive: boolean;
    logo?: string;
    name?: string;
    type: string;
    priority: number;
};
type ConfigurationListingFilter = {
    allowSingle: boolean;
    attributeConfig?: Array<ConfigurationListingFilterConfig>;
};
type ConfigurationListingSortConfig = {
    key: string;
    isActive: boolean;
    logo?: string;
    name?: string;
    priority: number;
};
type ConfigurationListingSort = {
    config?: Array<ConfigurationListingSortConfig>;
    defaultKey: string;
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductVariantConfig = {
    key: string;
    isActive: boolean;
    displayType: string;
    logo?: string;
    size: ProductSize;
    name: string;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: Array<ConfigurationProductVariantConfig>;
};
type ConfigurationProductConfig = {
    title?: string;
    subtitle?: string;
    key: string;
    isActive: boolean;
    logo?: string;
    size?: ProductSize;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: Array<ConfigurationProductConfig>;
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppCatalogConfiguration = {
    id?: string;
    listing?: ConfigurationListing;
    appId: string;
    configId?: string;
    configType: string;
    product?: ConfigurationProduct;
};
type GetAppCatalogConfiguration = {
    isDefault?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    appId: string;
    configId?: string;
    configType: string;
    product?: ConfigurationProduct;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    appId: string;
    configId?: string;
    configType: string;
    product?: GetCatalogConfigurationDetailsProduct;
};
type GetAppCatalogEntityConfiguration = {
    isDefault?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersValue = {
    queryFormat?: string;
    isSelected: boolean;
    selectedMax?: number;
    count?: number;
    value: string;
    displayFormat?: string;
    min?: number;
    display: string;
    max?: number;
    currencyCode?: string;
    currencySymbol?: string;
    selectedMin?: number;
};
type ProductFiltersKey = {
    logo?: string;
    display: string;
    kind?: string;
    name: string;
};
type ProductFilters = {
    values: Array<ProductFiltersValue>;
    key: ProductFiltersKey;
};
type ProductSortOn = {
    isSelected?: boolean;
    value?: string;
    name?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: Array<ProductFilters>;
    sortOn?: Array<ProductSortOn>;
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
    type?: string;
    url: string;
};
type BannerImage = {
    aspectRatio?: string;
    url?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
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
    query?: any;
    logo?: Media1;
    schedule?: any;
    cron?: any;
    type?: string;
    slug?: string;
    description?: string;
    visibleFacetsKeys?: Array<string>;
    badge?: any;
    isActive?: boolean;
    allowSort?: boolean;
    meta?: any;
    tag?: Array<string>;
    banners?: ImageUrls;
    name?: string;
    uid?: string;
    action?: ProductListingAction;
    appId?: string;
    allowFacets?: boolean;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: Array<GetCollectionDetailNest>;
    page?: Page;
};
type CollectionImage = {
    aspectRatio: string;
    url: string;
};
type UserInfo = {
    email?: string;
    userId?: string;
    uid?: string;
    username?: string;
};
type Schedule = {
    end?: string;
    duration?: number;
    cron?: string;
    start?: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CreateCollection = {
    query?: any;
    published?: boolean;
    logo: CollectionImage;
    createdBy?: UserInfo;
    schedule?: Schedule;
    tags?: Array<string>;
    type: string;
    slug: string;
    description?: string;
    seo?: SeoDetail;
    visibleFacetsKeys?: Array<string>;
    isActive?: boolean;
    allowSort?: boolean;
    badge?: CollectionBadge;
    meta?: any;
    banners: CollectionBanner;
    name: string;
    modifiedBy?: UserInfo;
    customJson?: any;
    appId: string;
    localeLanguage?: any;
    sortOn?: string;
    allowFacets?: boolean;
};
type CollectionCreateResponse = {
    query?: any;
    schedule?: any;
    badge?: any;
    description?: string;
    visibleFacetsKeys?: Array<string>;
    cron?: any;
    appId?: string;
    isActive?: boolean;
    allowSort?: boolean;
    meta?: any;
    logo?: BannerImage;
    tag?: Array<string>;
    banners?: ImageUrls;
    allowFacets?: boolean;
    name?: string;
    type?: string;
    slug?: string;
};
type CollectionDetailResponse = {
    query?: any;
    schedule?: any;
    badge?: any;
    description?: string;
    visibleFacetsKeys?: Array<string>;
    cron?: any;
    appId?: string;
    isActive?: boolean;
    allowSort?: boolean;
    meta?: any;
    logo?: Media1;
    tag?: Array<string>;
    banners?: ImageUrls;
    allowFacets?: boolean;
    name?: string;
    type?: string;
    slug?: string;
};
type Price1 = {
    currencySymbol?: string;
    currencyCode?: string;
    min?: number;
    max?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    highlights?: Array<string>;
    price?: ProductListingPrice;
    similars?: Array<string>;
    medias?: Array<Media1>;
    teaserTag?: any;
    itemType?: string;
    promoMeta?: any;
    type?: string;
    shortDescription?: string;
    slug: string;
    description?: string;
    discount?: string;
    productOnlineDate?: string;
    name?: string;
    color?: string;
    hasVariant?: boolean;
    attributes?: any;
    sellable?: boolean;
    uid?: number;
    imageNature?: string;
    rating?: number;
    tryouts?: Array<string>;
    ratingCount?: number;
};
type GetCollectionItemsResponse = {
    sortOn?: Array<ProductSortOn>;
    filters?: Array<ProductFilters>;
    items?: Array<ProductListingDetail>;
    page?: Page;
};
type CollectionItemRequest = {
    pageNo: number;
    pageSize: number;
};
type UpdatedResponse = {
    message?: string;
};
type CatalogInsightBrand = {
    totalSizes?: number;
    totalArticles?: number;
    name?: string;
    articleFreshness?: number;
    availableSizes?: number;
    availableArticles?: number;
};
type CatalogInsightItem = {
    count?: number;
    outOfStockCount?: number;
    sellableCount?: number;
};
type CatalogInsightResponse = {
    brandDistribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
};
type CrossSellingData = {
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    data?: CrossSellingData;
    brandDistribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    enabled?: boolean;
    storeIds?: Array<number>;
    brandIds?: Array<number>;
    optLevel: string;
};
type CompanyOptIn = {
    brandIds: Array<number>;
    enabled: boolean;
    storeIds: Array<number>;
    createdOn: number;
    optLevel: string;
    modifiedOn: number;
    platform: string;
    createdBy?: any;
    companyId: number;
    modifiedBy?: any;
};
type GetOptInPlatform = {
    page: Page;
    items: Array<CompanyOptIn>;
};
type OptinCompanyDetail = {
    businessType?: string;
    uid?: number;
    companyType?: string;
    name?: string;
};
type CompanyBrandDetail = {
    totalArticle?: number;
    brandName?: string;
    brandId?: number;
    companyId?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: Array<CompanyBrandDetail>;
};
type OptinCompanyMetrics = {
    store?: number;
    company?: string;
    brand?: number;
};
type StoreDetail = {
    uid?: number;
    storeCode?: string;
    createdOn?: string;
    displayName?: string;
    modifiedOn?: string;
    name?: string;
    documents?: Array<any>;
    timing?: any;
    additionalContacts?: Array<any>;
    companyId?: number;
    storeType?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: Array<StoreDetail>;
};
type BasePage = {
    itemTotal?: number;
    hasPrevious?: boolean;
    size?: number;
    current?: number;
    hasNext?: boolean;
};
type MultipleCommon = {
    uid?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: BasePage;
    items?: MultipleCommon;
};
type PTErrorResponse = {
    status?: number;
    errors?: any;
    meta?: any;
    message?: string;
    code?: string;
};
type BasePage1 = {
    hasPrevious?: boolean;
    nextPageId?: string;
    hasNext?: boolean;
    itemTotal?: number;
};
type UserSerializer = {
    userId?: string;
    contact?: string;
    username?: string;
};
type GetDepartment = {
    uid?: number;
    search?: string;
    isActive?: boolean;
    createdOn?: string;
    createdBy?: UserSerializer;
    logo?: string;
    synonyms?: Array<string>;
    modifiedOn?: string;
    name?: string;
    pageNo?: number;
    pageSize?: number;
    itemType?: string;
    priorityOrder?: number;
    slug?: string;
    modifiedBy?: UserSerializer;
};
type DepartmentsResponse = {
    page?: BasePage1;
    items?: Array<GetDepartment>;
};
type DepartmentErrorResponse = {
    status?: number;
    errors?: any;
    meta?: any;
    message?: string;
    code?: string;
};
type ProductTemplate = {
    description?: string;
    isActive?: boolean;
    createdOn?: string;
    createdBy?: any;
    isArchived?: boolean;
    logo?: string;
    tag?: string;
    categories?: Array<string>;
    departments?: Array<string>;
    name?: string;
    modifiedOn?: string;
    isPhysical: boolean;
    attributes?: Array<string>;
    slug: string;
    modifiedBy?: any;
};
type TemplatesResponse = {
    page?: BasePage;
    items?: ProductTemplate;
};
type TemplatesValidationResponse = {
    data?: MultipleCommon;
};
type InventoryValidationResponse = {
    data?: MultipleCommon;
    message?: string;
};
type HSNData = {
    hsnCode?: Array<string>;
    countryOfOrigin?: Array<string>;
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type ProductConfligurationDownloads = {
    data?: Array<MultipleCommon>;
    multivalue?: boolean;
};
type CategoryMappingValues = {
    name: string;
    catalogId?: number;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
};
type Media2 = {
    logo: string;
    portrait: string;
    landscape: string;
};
type Category = {
    level: number;
    uid?: number;
    marketplaces?: CategoryMapping;
    hierarchy?: Array<Hierarchy>;
    isActive: boolean;
    createdOn?: string;
    createdBy?: any;
    modifiedOn?: string;
    synonyms?: Array<string>;
    departments: Array<number>;
    name: string;
    id?: string;
    tryouts?: Array<string>;
    media?: Media2;
    priority?: number;
    slug?: string;
    modifiedBy?: any;
};
type CategoryResponse = {
    page?: BasePage1;
    items?: Array<Category>;
};
type CategoryRequestBody = {
    level: number;
    marketplaces?: CategoryMapping;
    hierarchy?: Array<Hierarchy>;
    isActive: boolean;
    synonyms?: Array<string>;
    departments: Array<number>;
    name: string;
    tryouts?: Array<string>;
    media?: Media2;
    priority?: number;
    slug?: string;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type PageData = {
    itemTotal?: number;
    hasPrevious?: boolean;
    size?: number;
    current?: string;
    hasNext?: boolean;
};
type ProductPublished = {
    isSet?: boolean;
    productOnlineDate?: number;
};
type Logo = {
    aspectRatioF?: number;
    aspectRatio?: string;
    secureUrl?: string;
    url?: string;
};
type Brand = {
    logo?: Logo;
    uid?: number;
    name?: string;
};
type UserCommon = {
    userId?: string;
    companyId?: number;
    username?: string;
};
type VerifiedBy = {
    userId?: string;
    username?: string;
};
type Attributes = {
    sleeveLength?: string;
    gender?: Array<string>;
    verifiedOn?: string;
    pattern?: string;
    createdBy?: UserCommon;
    isImageLessProduct?: boolean;
    essential?: string;
    productFit?: string;
    metaNature?: string;
    material?: string;
    primaryColor?: string;
    modifiedOn?: string;
    neckType?: string;
    primaryMaterial?: string;
    color?: string;
    modifiedBy?: UserCommon;
    l3Mapping?: Array<string>;
    stage?: string;
    createdOn?: string;
    imageNature?: string;
    verifiedBy?: VerifiedBy;
};
type Product = {
    sizes?: Array<any>;
    isDependent?: boolean;
    countryOfOrigin?: string;
    highlights?: string;
    productPublish?: ProductPublished;
    isSet?: boolean;
    media?: Array<string>;
    companyId?: number;
    itemCode?: string;
    allSizes?: Array<string>;
    slug?: string;
    id?: string;
    brand?: Brand;
    description?: string;
    isActive?: boolean;
    multiSize?: boolean;
    images?: Array<string>;
    departments?: Array<number>;
    name?: string;
    sizeGuide?: string;
    hsnCode?: string;
    attributes?: Attributes;
    templateTag?: string;
    uid?: number;
    categorySlug?: string;
    currency?: string;
    itemType?: string;
};
type ProductListingResponse = {
    page?: PageData;
    items?: Array<Product>;
};
type Trader = {
    address: string;
    name: string;
};
type ProductPublish = {
    isSet?: boolean;
    productOnlineDate?: string;
};
type ReturnConfig = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type OrderQuantity = {
    isSet?: boolean;
    minimum?: number;
    maximum?: number;
};
type CustomOrder = {
    manufacturingTime?: number;
    manufacturingTimeUnit?: string;
    isCustomOrder?: boolean;
};
type ProductCreateUpdate = {
    isDependent?: boolean;
    variants?: any;
    countryOfOrigin: string;
    highlights?: Array<string>;
    trader?: Trader;
    productPublish?: ProductPublish;
    isSet?: boolean;
    media?: Array<Media1>;
    companyId: number;
    returnConfig?: ReturnConfig;
    itemCode: string;
    isImageLessProduct?: boolean;
    tags?: Array<string>;
    traderType?: string;
    teaserTag?: TeaserTag;
    shortDescription?: string;
    moq?: OrderQuantity;
    slug: string;
    description?: string;
    isActive?: boolean;
    multiSize?: boolean;
    departments: Array<number>;
    name: string;
    sizeGuide?: string;
    productGroupTag?: Array<string>;
    hsnCode: string;
    changeRequestId?: string;
    templateTag: string;
    uid?: number;
    categorySlug: string;
    customJson?: any;
    requester?: string;
    noOfBoxes?: number;
    currency: string;
    itemType: string;
    customOrder?: CustomOrder;
    brandUid: number;
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail = {
    userId?: string;
    fullName?: string;
    username?: string;
};
type ProductBulkRequest = {
    cancelledRecords?: Array<string>;
    filePath?: string;
    templateTag?: string;
    cancelled?: number;
    stage?: string;
    template?: ProductTemplate;
    isActive?: boolean;
    failed?: number;
    createdOn?: string;
    succeed?: number;
    modifiedOn?: string;
    failedRecords?: Array<string>;
    total?: number;
    createdBy?: UserDetail;
    companyId?: number;
    modifiedBy?: UserDetail;
};
type ProductBulkRequestList = {
    page?: PageData;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    email?: string;
    userId?: string;
    uid?: string;
    username?: string;
};
type BulkJob = {
    cancelledRecords?: Array<any>;
    filePath?: string;
    templateTag?: string;
    cancelled?: number;
    stage?: string;
    isActive?: boolean;
    createdOn: string;
    failed?: number;
    succeed?: number;
    trackingUrl?: string;
    modifiedOn?: string;
    failedRecords?: Array<any>;
    customTemplateTag?: string;
    total: number;
    createdBy?: UserInfo1;
    companyId: number;
    modifiedBy?: UserInfo1;
};
type BulkProductRequest = {
    batchId: string;
    data: Array<any>;
    templateTag: string;
    companyId: number;
};
type NestedTags = {
    tags?: Array<string>;
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type Items = {
    id?: string;
    filePath?: string;
    cancelledRecords?: Array<string>;
    cancelled?: number;
    stage?: string;
    createdOn?: string;
    failed?: number;
    isActive?: boolean;
    succeed?: number;
    trackingUrl?: string;
    modifiedOn?: string;
    failedRecords?: Array<string>;
    retry?: number;
    companyId?: number;
    createdBy?: UserCommon;
    total?: number;
    modifiedBy?: UserCommon;
};
type BulkAssetResponse = {
    page?: PageData;
    items?: Array<Items>;
};
type ProductBulkAssets = {
    user: any;
    companyId?: number;
    url: string;
};
type InventoryRequest = {
    search?: string;
    size?: string;
    pageNo?: number;
    pageSize?: number;
    total?: number;
};
type ItemQuery = {
    itemCode?: string;
    uid?: number;
    brandUid?: number;
};
type SetSize = {
    size: string;
    pieces: number;
};
type SizeDistribution = {
    sizes: Array<SetSize>;
};
type InventorySet = {
    sizeDistribution: SizeDistribution;
    quantity?: number;
};
type GTIN = {
    gtinType: string;
    gtinValue: string;
    primary?: boolean;
};
type InvSize = {
    set?: InventorySet;
    itemWidth?: number;
    quantity: number;
    priceTransfer?: number;
    itemDimensionsUnitOfMeasure?: string;
    itemWeight?: number;
    storeCode: string;
    size: string;
    price: number;
    priceEffective: number;
    itemLength?: number;
    itemHeight?: number;
    identifiers: Array<GTIN>;
    currency: string;
    isSet?: boolean;
    itemWeightUnitOfMeasure?: string;
};
type InventoryRequest1 = {
    item: ItemQuery;
    companyId: number;
    sizes: Array<InvSize>;
};
type BulkRequestGet = {
    templateTag?: string;
    search?: string;
    startDate?: string;
    stage?: string;
    endDate?: string;
    customTemplateTag?: string;
    pageNo?: number;
    pageSize?: number;
    total?: number;
};
type CommonResponse = {
    success?: string;
};
type Size1 = {
    set?: InventorySet;
    itemWidth?: number;
    quantity: number;
    priceTransfer?: number;
    itemDimensionsUnitOfMeasure?: string;
    itemWeight?: number;
    sellerIdentifier: string;
    storeCode: string;
    size?: string;
    price: number;
    priceEffective: number;
    itemLength?: number;
    itemHeight?: number;
    identifiers?: Array<any>;
    currency: string;
    isSet?: boolean;
    itemWeightUnitOfMeasure?: string;
};
type InventoryBulkRequest = {
    batchId: string;
    user?: any;
    companyId: number;
    sizes: Array<Size1>;
};
type InventoryExportJob = {
    taskId: string;
    requestParams?: any;
    status?: string;
    triggerOn?: string;
    completedOn?: string;
    sellerId: number;
    url?: string;
};
type InventoryExportRequest = {
    brand?: Array<number>;
    store?: Array<number>;
    type?: string;
};
type FilerList = {
    value?: string;
    display?: string;
};
type InventoryConfig = {
    data?: Array<FilerList>;
    multivalues?: boolean;
};
type PageResponse = {
    itemTotal?: number;
    hasPrevious?: boolean;
    size?: number;
    current?: string;
    hasNext?: boolean;
};
type HsnCodesObject = {
    uid?: number;
    threshold2?: number;
    hs2Code?: string;
    isActive?: boolean;
    taxOnMrp?: boolean;
    tax1?: number;
    hsnCode?: string;
    tax2?: number;
    taxOnEsp?: boolean;
    companyId?: number;
    threshold1?: number;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: Array<HsnCodesObject>;
};
type HsnUpsert = {
    threshold2?: number;
    hs2Code: string;
    isActive: boolean;
    taxOnMrp: boolean;
    tax1: number;
    hsnCode: string;
    tax2?: number;
    taxOnEsp?: boolean;
    companyId: number;
    threshold1: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type SellerPhoneNumber = {
    countryCode: number;
    number: string;
};
type ContactDetails = {
    phone?: Array<SellerPhoneNumber>;
    emails?: Array<string>;
};
type GetAddressSerializer = {
    country?: string;
    landmark?: string;
    countryCode?: string;
    state?: string;
    city?: string;
    addressType?: string;
    longitude?: number;
    address1?: string;
    latitude?: number;
    address2?: string;
    pincode?: number;
};
type Document = {
    legalName: string;
    type: string;
    url?: string;
    value: string;
    verified?: boolean;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type BusinessCountryInfo = {
    country?: string;
    countryCode?: string;
};
type GetCompanyProfileSerializerResponse = {
    franchiseEnabled?: boolean;
    contactDetails?: ContactDetails;
    addresses?: Array<GetAddressSerializer>;
    documents?: Array<Document>;
    businessDetails?: BusinessDetails;
    notificationEmails?: Array<string>;
    verifiedBy?: UserSerializer;
    warnings?: any;
    businessType: string;
    modifiedOn?: string;
    stage?: string;
    verifiedOn?: string;
    modifiedBy?: UserSerializer;
    name?: string;
    companyType: string;
    uid: number;
    businessInfo?: string;
    createdOn?: string;
    businessCountryInfo?: BusinessCountryInfo;
    createdBy?: UserSerializer;
};
type ReferralInfo = {
    referralCode?: string;
};
type BusinessCountryInfo1 = {
    country?: string;
    countryCode?: string;
};
type CompanyAddress = {
    country: string;
    landmark?: string;
    countryCode?: string;
    state: string;
    city: string;
    longitude: number;
    address1: string;
    latitude: number;
    address2?: string;
    pincode: number;
};
type CompanyStoreSerializerRequest = {
    referralInfo?: ReferralInfo;
    uid?: number;
    brands: Array<number>;
    businessInfo?: string;
    franchiseEnabled?: boolean;
    notificationEmails?: Array<string>;
    warnings?: any;
    document: Document;
    businessCountryInfo: BusinessCountryInfo1;
    businessType: string;
    name: string;
    address: CompanyAddress;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    brand?: DocumentsObj;
    uid?: number;
    storeDocuments?: DocumentsObj;
    companyDocuments?: DocumentsObj;
    stage?: string;
    product?: DocumentsObj;
    store?: DocumentsObj;
};
type UserSerializer1 = {
    username?: string;
    userId?: string;
    contact?: string;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    synonyms?: Array<string>;
    logo?: string;
    description?: string;
    uid?: number;
    customJson?: any;
    warnings?: any;
    localeLanguage?: any;
    modifiedOn?: string;
    verifiedBy?: UserSerializer1;
    createdOn?: string;
    slugKey?: string;
    stage?: string;
    rejectReason?: string;
    verifiedOn?: string;
    modifiedBy?: UserSerializer1;
    name: string;
    createdBy?: UserSerializer1;
    banner?: BrandBannerSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    synonyms?: Array<string>;
    logo: string;
    description?: string;
    uid?: number;
    customJson?: any;
    localeLanguage?: any;
    brandTier?: string;
    name: string;
    companyId?: number;
    banner?: BrandBannerSerializer;
};
type CompanyBrandListSerializer = {
    items?: Array<any>;
    page?: any;
};
type CompanyBrandPostRequestSerializer = {
    brands: Array<number>;
    company: number;
    uid?: number;
};
type LocationListSerializer = {
    items?: Array<any>;
    page?: any;
};
type LocationManagerSerializer = {
    name?: string;
    email?: string;
    mobileNo: SellerPhoneNumber;
};
type ProductReturnConfigSerializer = {
    onSameStore?: boolean;
    storeUid?: number;
};
type InvoiceCredSerializer = {
    enabled?: boolean;
    username?: string;
    password?: string;
};
type InvoiceDetailsSerializer = {
    eInvoice?: InvoiceCredSerializer;
    eWaybill?: InvoiceCredSerializer;
};
type GetAddressSerializer1 = {
    country?: string;
    landmark?: string;
    countryCode?: string;
    state?: string;
    city?: string;
    addressType?: string;
    longitude?: number;
    address1?: string;
    latitude?: number;
    address2?: string;
    pincode?: number;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    weekday: string;
    closing?: LocationTimingSerializer;
    opening?: LocationTimingSerializer;
};
type LocationSerializer = {
    displayName: string;
    code: string;
    documents?: Array<Document>;
    uid?: number;
    manager?: LocationManagerSerializer;
    customJson?: any;
    notificationEmails?: Array<string>;
    warnings?: any;
    productReturnConfig?: ProductReturnConfigSerializer;
    gstCredentials?: InvoiceDetailsSerializer;
    company: number;
    stage?: string;
    contactNumbers?: Array<SellerPhoneNumber>;
    storeType?: string;
    name: string;
    address: GetAddressSerializer1;
    timing?: Array<LocationDayWiseSerializer>;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetCompanySerializer = {
    companyType?: string;
    uid?: number;
    businessType?: string;
    modifiedOn?: string;
    verifiedBy?: UserSerializer;
    createdOn?: string;
    addresses?: Array<GetAddressSerializer>;
    stage?: string;
    rejectReason?: string;
    verifiedOn?: string;
    modifiedBy?: UserSerializer;
    name?: string;
    createdBy?: UserSerializer;
};
type GetLocationSerializer = {
    displayName: string;
    phoneNumber: string;
    code: string;
    customJson?: any;
    contactNumbers?: Array<SellerPhoneNumber>;
    documents?: Array<Document>;
    manager?: LocationManagerSerializer;
    productReturnConfig?: ProductReturnConfigSerializer;
    notificationEmails?: Array<string>;
    verifiedBy?: UserSerializer1;
    warnings?: any;
    integrationType?: LocationIntegrationType;
    storeType?: string;
    timing?: Array<LocationDayWiseSerializer>;
    gstCredentials?: InvoiceDetailsSerializer;
    modifiedOn?: string;
    stage?: string;
    verifiedOn?: string;
    modifiedBy?: UserSerializer1;
    name: string;
    address: GetAddressSerializer;
    uid?: number;
    company?: GetCompanySerializer;
    createdOn?: string;
    createdBy?: UserSerializer1;
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
type Campaign = {
    source?: string;
    medium?: string;
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
type ErrorRes = {
    message?: string;
};
type DataTresholdDTO = {
    minPrice?: number;
    safeStock?: number;
    periodThreshold?: number;
    periodThresholdType?: string;
    periodTypeList?: Array<GenericDTO>;
};
type GenericDTO = {
    text?: string;
    value?: any;
};
type JobConfigDTO = {
    integration: string;
    integrationData?: any;
    companyName?: string;
    companyId: number;
    taskDetails?: TaskDTO;
    thresholdDetails?: DataTresholdDTO;
    jobCode?: string;
    alias?: string;
};
type TaskDTO = {
    type?: number;
    groupList?: Array<GenericDTO>;
};
type ResponseEnvelopeString = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: string;
    payload?: string;
    traceId?: string;
    page?: Page;
};
type AWSS3config = {
    bucket?: string;
    region?: string;
    dir?: string;
    accessKey?: string;
    secretKey?: string;
    localFilePath?: string;
    archivePath?: string;
    archive?: boolean;
    delete?: boolean;
    unzip?: boolean;
    zipFormat?: string;
    fileRegex?: string;
    archiveConfig?: ArchiveConfig;
};
type ArchiveConfig = {
    delete?: boolean;
    archive?: boolean;
    archiveDir?: string;
};
type Audit = {
    createdBy?: string;
    modifiedBy?: string;
    createdOn?: string;
    modifiedOn?: string;
};
type CatalogMasterConfig = {
    sourceSlug?: string;
};
type CompanyConfig = {
    companyId?: number;
    excludeSteps?: Array<number>;
    hiddenClosetKeys?: Array<string>;
    openTags?: any;
    taxIdentifiers?: Array<string>;
    deleteQuantityThreshold?: number;
};
type DBConfig = {
    vendor?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    dbname?: string;
    query?: string;
    procedure?: boolean;
    driverClass?: string;
    jdbcUrl?: string;
    optionalProperties?: any;
};
type DBConnectionProfile = {
    inventory?: string;
};
type DBParamConfig = {
    params?: any;
};
type DefaultHeadersDTO = {
    store?: PropBeanDTO;
    intfArticleId?: PropBeanDTO;
    priceEffective?: PropBeanDTO;
    quantity?: PropBeanDTO;
};
type DocMappingConfig = {
    properties?: any;
    junkDataThresholdCount?: number;
    propBeanConfigs?: Array<PropBeanConfig>;
    unwindField?: string;
    defaultHeaders?: DefaultHeadersDTO;
};
type EmailConfig = {
    recepient?: string;
    host?: string;
    username?: string;
    password?: string;
    unzip?: boolean;
    readFromContent?: boolean;
    filterBasedOnRecepients?: boolean;
    pcol?: string;
    subjectLineRegex?: string;
    senderAddress?: string;
    localDir?: string;
    folderNameHierarchies?: Array<string>;
    attachmentRegex?: string;
    bodyContentRegex?: string;
    passwordProtected?: boolean;
    zipFormat?: string;
    attachmentMandate?: boolean;
    filterFilesAfterExtraction?: boolean;
    archiveConfig?: ArchiveConfig;
    readAllUnreadMails?: boolean;
    contentType?: string;
    downloadableLink?: boolean;
    properties?: any;
};
type FTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    localDir?: string;
    remoteDir?: string;
    zipFileRegex?: string;
    archiveConfig?: ArchiveConfig;
    fileRegex?: string;
    zipFormat?: string;
    readAllFiles?: boolean;
};
type FileConfig = {
    delimiter?: string;
    charset?: string;
    properties?: any;
    fileHasHeader?: boolean;
    headerIndex?: number;
    headerArray?: Array<string>;
    dataStartIndex?: number;
    propBeanConfigs?: Array<PropBeanConfig>;
    junkDataThresholdCount?: number;
    fileType?: string;
    lineValidityCheck?: boolean;
    sheetNames?: Array<string>;
    readAllSheets?: boolean;
    quoteChar?: string;
    escapeChar?: string;
    defaultHeaders?: DefaultHeadersDTO;
};
type GoogleSpreadSheetConfig = {
    range?: string;
    sheetId?: string;
    clientSecretLocation?: string;
    credStorageDirectory?: string;
    localDir?: string;
    archiveConfig?: ArchiveConfig;
};
type HttpConfig = {
    hosturl?: string;
    username?: string;
    password?: string;
    requestParams?: any;
    httpMethod?: string;
    requestPayload?: string;
    localPath?: string;
    archiveConfig?: ArchiveConfig;
};
type JobConfig = {
    id?: number;
    jobCode?: string;
    taskType?: string;
    syncDelay?: number;
    cronExpression?: string;
    storeFilter?: StoreFilter;
    processConfig?: ProcessConfig;
    storeConfig?: Array<StoreConfig>;
    properties?: any;
    immediateFirstRun?: boolean;
    disable?: boolean;
    dependentJobCodes?: Array<string>;
    companyConfig?: Array<CompanyConfig>;
    companyIds?: Array<number>;
    taxIdentifiers?: Array<string>;
    priority?: string;
    periodThreshold?: number;
    periodThresholdType?: string;
    dbConnectionProfile?: DBConnectionProfile;
    params?: any;
    openTags?: any;
    deleteQuantityThreshold?: number;
    catalogMasterConfig?: CatalogMasterConfig;
    aggregatorTypes?: Array<string>;
    integrationType?: string;
    minPrice?: number;
    audit?: Audit;
    version?: number;
    alias?: string;
};
type JobConfigRawDTO = {
    integration: string;
    companyName: string;
    companyId: number;
    data?: JobConfig;
};
type JsonDocConfig = {
    propBeanConfigs?: Array<PropBeanConfig>;
};
type LocalFileConfig = {
    retries?: number;
    interval?: number;
    localDir?: string;
    workingDir?: string;
    unzip?: boolean;
    zipFileRegex?: string;
    fileRegex?: string;
    zipFormat?: string;
    archiveConfig?: ArchiveConfig;
    readAllFiles?: boolean;
};
type MongoDocConfig = {
    collectionName?: string;
    findQuery?: any;
    projectionQuery?: any;
    propBeanConfigs?: Array<PropBeanConfig>;
    aggregatePipeline?: Array<any>;
    skipSave?: boolean;
};
type OAuthConfig = {
    limit?: number;
    pages?: number;
    interval?: number;
    consumerKey?: string;
    consumerSecret?: string;
    token?: string;
    tokenSecret?: string;
    restUrl?: string;
    restBaseUrl?: string;
    functionName?: string;
};
type ProcessConfig = {
    dbConfig?: DBConfig;
    dbParamConfig?: DBParamConfig;
    sftpConfig?: SFTPConfig;
    awsS3Config?: AWSS3config;
    mongoDocConfig?: MongoDocConfig;
    ftpConfig?: FTPConfig;
    emailConfig?: EmailConfig;
    fileConfig?: FileConfig;
    jsonDocConfig?: JsonDocConfig;
    docMappingConfig?: DocMappingConfig;
    taskStepConfig?: TaskStepConfig;
    httpConfig?: HttpConfig;
    localFileConfig?: LocalFileConfig;
    oauthConfig?: OAuthConfig;
    googleSpreadsheetConfig?: GoogleSpreadSheetConfig;
};
type PropBeanConfig = {
    required?: boolean;
    mapping?: any;
    optional?: boolean;
    send?: Send;
    validations?: Array<any>;
    values?: Array<string>;
    include?: boolean;
    sourceField?: string;
    sourceFields?: Array<string>;
    destinationField?: string;
    dataType?: string;
    defaultValue?: any;
    constValue?: any;
    concatStr?: string;
    functionName?: string;
    transformerName?: string;
    allParamFunctionName?: string;
    subSeparator?: string;
    indexField?: string;
    ignoreIfNotExists?: boolean;
    identifierType?: string;
    projectionQuery?: any;
    enrichFromMaster?: boolean;
};
type PropBeanDTO = {
    required?: boolean;
    optional?: boolean;
    include?: boolean;
    sourceField?: string;
    sourceFields?: Array<string>;
    destinationField?: string;
    dataType?: string;
    defaultValue?: any;
    constValue?: any;
    concatStr?: string;
    functionName?: string;
    transformerName?: string;
    allParamFunctionName?: string;
    subSeparator?: string;
    indexField?: string;
    ignoreIfNotExists?: boolean;
    identifierType?: string;
    projectionQuery?: any;
    enrichFromMaster?: boolean;
};
type ResponseEnvelopeListJobConfigRawDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: Array<JobConfigRawDTO>;
    payload?: Array<JobConfigRawDTO>;
    traceId?: string;
    page?: Page;
};
type SFTPConfig = {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    unzip?: boolean;
    retries?: number;
    interval?: number;
    privateKeyPath?: string;
    strictHostKeyChecking?: boolean;
    localDir?: string;
    remoteDir?: string;
    passwordProtected?: boolean;
    zipFileRegex?: string;
    fileRegex?: string;
    zipFormat?: string;
    archiveConfig?: ArchiveConfig;
    readAllFiles?: boolean;
};
type Send = {
    raw?: boolean;
    processed?: boolean;
};
type StoreConfig = {
    jobCode?: string;
    storeid?: string;
    storeAlias?: string;
    storeFileRegex?: string;
    storeFileName?: string;
    processConfig?: ProcessConfig;
    properties?: any;
};
type StoreFilter = {
    includeTags?: Array<string>;
    excludeTags?: Array<string>;
    query?: any;
};
type TaskConfig = {
    name?: string;
    taskConfigId?: number;
    taskParams?: Array<TaskParam>;
};
type TaskParam = {
    name?: string;
    value?: any;
};
type TaskStepConfig = {
    taskConfigs?: Array<TaskConfig>;
    taskConfigIds?: Array<number>;
    taskConfigGroupIds?: Array<number>;
};
type ResponseEnvelopeListJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: Array<JobConfigDTO>;
    payload?: Array<JobConfigDTO>;
    traceId?: string;
    page?: Page;
};
type ResponseEnvelopeJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: JobConfigDTO;
    payload?: JobConfigDTO;
    traceId?: string;
    page?: Page;
};
type JobConfigListDTO = {
    code?: string;
    alias?: string;
    modifiedBy?: string;
    createdBy?: string;
    modifiedOn?: string;
    createdOn?: string;
    active?: boolean;
    type?: string;
};
type ResponseEnvelopeListJobConfigListDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    totalTimeTakenInMillis?: number;
    httpStatus?: string;
    items?: Array<JobConfigListDTO>;
    payload?: Array<JobConfigListDTO>;
    traceId?: string;
    page?: Page;
};
type RuleDefinition = {
    calculateOn: string;
    type: string;
    currencyCode?: string;
    applicableOn: string;
    autoApply?: boolean;
    scope?: Array<string>;
    valueType: string;
    isExact?: boolean;
};
type CouponDateMeta = {
    createdOn?: string;
    modifiedOn?: string;
};
type Validation = {
    anonymous?: boolean;
    userRegisteredAfter?: string;
    appId?: Array<string>;
};
type Rule = {
    discountQty?: number;
    max?: number;
    key?: number;
    value?: number;
    min?: number;
};
type State = {
    isArchived?: boolean;
    isPublic?: boolean;
    isDisplay?: boolean;
};
type Validity = {
    priority?: number;
};
type Ownership = {
    payableBy: string;
    payableCategory: string;
};
type CouponAuthor = {
    createdBy?: string;
    modifiedBy?: string;
};
type CouponAction = {
    actionDate?: string;
    txnMode?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    description?: string;
    apply?: DisplayMetaDict;
    subtitle?: string;
    auto?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    title?: string;
};
type CouponSchedule = {
    cron?: string;
    nextSchedule?: Array<any>;
    start?: string;
    end?: string;
    duration?: number;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type BulkBundleRestriction = {
    multiStoreAllowed: boolean;
};
type PostOrder = {
    cancellationAllowed?: boolean;
    returnAllowed?: boolean;
};
type UsesRemaining = {
    app?: number;
    total?: number;
    user?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: Array<string>;
    uses?: PaymentAllowValue;
    types?: Array<string>;
    networks?: Array<string>;
};
type PaymentCodes = {
    qr?: PaymentModes;
    nb?: PaymentModes;
    pl?: PaymentModes;
    upi?: PaymentModes;
    card?: PaymentModes;
    wl?: PaymentModes;
    ps?: PaymentModes;
};
type Restrictions = {
    priceRange?: PriceRange;
    orderingStores?: Array<number>;
    couponAllowed?: boolean;
    bulkBundle?: BulkBundleRestriction;
    postOrder?: PostOrder;
    uses?: UsesRestriction;
    platforms?: Array<string>;
    payments?: PaymentCodes;
};
type Identifier = {
    userId?: Array<string>;
    collectionId?: Array<string>;
    storeId?: Array<number>;
    brandId?: Array<number>;
    itemId?: Array<number>;
    companyId?: Array<number>;
    articleId?: Array<string>;
    categoryId?: Array<number>;
};
type CouponAdd = {
    ruleDefinition: RuleDefinition;
    typeSlug: string;
    dateMeta?: CouponDateMeta;
    validation?: Validation;
    tags?: Array<string>;
    rule: Array<Rule>;
    state?: State;
    validity: Validity;
    code: string;
    ownership: Ownership;
    author?: CouponAuthor;
    action?: CouponAction;
    displayMeta: DisplayMeta;
    schedule?: CouponSchedule;
    restrictions?: Restrictions;
    identifiers: Identifier;
};
type CouponsResponse = {
    items?: CouponAdd;
    page?: Page;
};
type SuccessMessage = {
    message?: string;
    success?: boolean;
};
type OperationErrorResponse = {
    message?: string;
    success?: boolean;
};
type CouponUpdate = {
    ruleDefinition: RuleDefinition;
    typeSlug: string;
    dateMeta?: CouponDateMeta;
    validation?: Validation;
    tags?: Array<string>;
    rule: Array<Rule>;
    state?: State;
    validity: Validity;
    code: string;
    ownership: Ownership;
    author?: CouponAuthor;
    action?: CouponAction;
    displayMeta: DisplayMeta;
    schedule?: CouponSchedule;
    restrictions?: Restrictions;
    identifiers: Identifier;
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
type InventorySyncConfig = {
    inventory?: boolean;
    price?: boolean;
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
type AppUser = {
    id?: string;
    active?: boolean;
    applicationId?: string;
    blockReason?: string;
    updatedAt?: string;
    updatedBy?: string;
    userId?: string;
};
type Audience = {
    headerUserId?: string;
    id?: string;
};
type E = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    requestId?: string;
    stackTrace?: string;
    status?: number;
};
type Giveaway = {
    id?: string;
    schedule?: Schedule;
    active?: boolean;
    applicationId?: string;
    audience?: Audience;
    bannerImage?: Asset;
    createdAt?: string;
    description?: string;
    rule?: Rule;
    title?: string;
    updatedAt?: string;
};
type GiveawayResponse = {
    items?: Array<Giveaway>;
    page?: Page;
};
type HistoryPretty = {
    id?: string;
    applicationId?: string;
    claimed?: boolean;
    createdAt?: string;
    expiresOn?: string;
    points?: number;
    remainingPoints?: number;
    text1?: string;
    text2?: string;
    text3?: string;
    txnName?: string;
    updatedAt?: string;
    userId?: string;
};
type HistoryRes = {
    items?: Array<HistoryPretty>;
    page?: Page;
    points?: number;
};
type Offer = {
    schedule?: Schedule;
    active?: boolean;
    applicationId?: string;
    bannerImage?: Asset;
    createdAt?: string;
    name?: string;
    rule?: any;
    share?: ShareMessages;
    subText?: string;
    text?: string;
    type?: string;
    updatedAt?: string;
    updatedBy?: string;
    url?: string;
};
type Points = {
    available?: number;
};
type Referral = {
    code?: string;
};
type RewardUser = {
    id?: string;
    active?: boolean;
    createdAt?: string;
    referral?: Referral;
    uid?: number;
    updatedAt?: string;
    userBlockReason?: string;
    userId?: string;
};
type ShareMessages = {
    email?: string;
    facebook?: string;
    fallback?: string;
    message?: string;
    messenger?: string;
    sms?: string;
    text?: string;
    twitter?: string;
    whatsapp?: string;
};
type UserRes = {
    points?: Points;
    user?: RewardUser;
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
type DiscountJob = {
    id: string;
    name: string;
    companyId: number;
    isActive: boolean;
    appIds?: Array<string>;
    jobType?: string;
    discountType?: string;
    discountLevel?: string;
    value?: number;
    filePath?: string;
    brandIds?: Array<number>;
    storeIds?: Array<number>;
    validity: Validity;
    createdOn: string;
    modifiedOn: string;
    createdBy: UserDetails;
    modifiedBy: UserDetails;
    meta?: any;
};
type ListOrCalender = {
    items: Array<DiscountJob>;
    page: Page;
};
type CreateUpdateDiscount = {
    name: string;
    companyId: number;
    isActive: boolean;
    appIds: Array<string>;
    jobType: string;
    discountType: string;
    discountLevel: string;
    value?: number;
    filePath?: string;
    brandIds?: Array<number>;
    storeIds?: Array<number>;
    validity: Validity;
};
type FileJobResponse = {
    stage: string;
    total: number;
    failed: number;
    companyId: number;
    body?: any;
    type: string;
    fileType: string;
};
type DownloadFileJob = {
    brandIds?: Array<number>;
    storeIds?: Array<number>;
};
type CancelJobResponse = {
    success: boolean;
};
type UserDetails = {
    username: string;
    userId: string;
};
import Paginator = require("../common/Paginator");
