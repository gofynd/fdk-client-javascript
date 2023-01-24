export = PlatformClient;
declare class PlatformClient {
    constructor(config: any);
    config: any;
    common: Common;
    lead: Lead;
    billing: Billing;
    communication: Communication;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    companyProfile: CompanyProfile;
    fileStorage: FileStorage;
    inventory: Inventory;
    configuration: Configuration;
    analytics: Analytics;
    discount: Discount;
    webhook: Webhook;
    auditTrail: AuditTrail;
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, GetActivityStatus, ActivityHistory, CanBreakRequestBody, CanBreakResponse, FailedOrders, FailOrder, MarketplaceOrder, TotalDiscountsSet, PresentmentMoney, ShopMoney, TotalPriceSet, TotalPriceSetShopMoney, TotalPriceSetPresentmentMoney, TotalTaxSet, TotalTaxSetShopMoney, TotalTaxSetPresentmentMoney, SubtotalPriceSet, SubtotalPriceSetShopMoney, SubtotalPriceSetPresentmentMoney, LineItems, LineItemsArticle, Quantities, NotAvailable, Sellable, OrderCommitted, Damaged, Manufacturer, ArticlePrice, Company, FailOrderDateMeta, MarketplaceIdentifiers, TatacliqLuxury, Dimension, Weight, Store, ArticleMeta, ArticleBrand, LineItemsArticleIdentifier, PriceSet, PriceSetShopMoney, PriceSetPresentmentMoney, TaxLines, TaxLinesPriceSet, TaxLinesPriceSetShopMoney, TaxLinesPriceSetPresentmentMoney, TotalDiscountSet, TotalDiscountSetPresentmentMoney, TotalDiscountSetShopMoney, BillingAddress, TotalShippingPriceSet, TotalShippingPriceSetShopMoney, TotalShippingPriceSetPresentmentMoney, Customer, DefaultAddress, TotalLineItemsPriceSet, TotalLineItemsPriceSetShopMoney, TotalLineItemsPriceSetPresentmentMoney, OrderShippingAddress, OrderListing, OrderItems, PlatformOrderUserInfo, PlatformDeliveryAddress, Channel, PlatformApplication, PlatformShipment, PlatformShipmentStatus, Bags, BagItem, BagItemAttributes, ShipmentPrices, Payments, Filters, Stage, StagesFilters, Options, PlatformOrderPage, AppliedFilters, OrderDetails, OrderDetailsItem, PlatformBreakupValues, ArticleAssignment, PlatformShipmentDetails, PlatformShipmentDetailsStatus, BagsDetails, BagFinancialBreakup, Identifiers, BagCurrStatus, BagArticle, ArticleIdentifiers, Set, SetSizeDistribution, Sizes, BagArticleReturnConfig, GstDetails, BagBreakupValues, BagCurrentStatus, BagStateMapper, BagStatus, BagStatusBagStateMapper, BagPrices, ShipmentBreakupValues, DpDetails, ShipmentInvoice, RtoAddress, StoreAddressJson, PlatformFulfillingStore, FulfillingStoreMeta, AdditionalContactDetails, Documents, Gst, ProductReturnConfig, Timing, Opening, Closing, FulfillingStoreStoreAddressJson, ShipmentGst, PlatformShipmentDetailsBrand, Promise, Timestamp, ShipmentTrackingDetails, ItemsPayments, PlatformOrderDetailsPage, ShipmentDates, OrderLanesCount, StageItem, UpdateOrderReprocessResponse, PlatformOrderTrack, OrderPicklistListing, Stages, ItemTotal, GetPingResponse, GetShipmentAddressResponse, DataShipmentAddress, UpdateShipmentAddressRequest, UpdateShipmentAddressResponse, ShipmentTrackResponse, ShipmentTrackResponseBagListItem, ShipmentTrackResponseBagListItemBreakValues, ShipmentTrackResponseBagListItemStatuses, ShipmentTrackResponseBagListItemStatusesProgress, ShipmentTrackResponseBagListItemStatusesTrack, ShipmentTrackResponseBagListItemDpDetails, ShipmentTrackResponseBagListItemsProductImage, UpdateShipmentStatusResponse, UpdateShipmentStatusBody, ShipmentReasonsResponse, ShipmentResponseReasons, PlatformShipmentTrack, Results, ShipmentUpdateRequest, ShipmentUpdateResponse, UpdateProcessShipmenstRequestBody, UpdateProcessShipmenstRequestResponse, GetVoiceCallbackResponse, GetClickToCallResponse, ApefaceApiError, DeleteResponse, ErrorResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, GetSearchWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ListSizeGuide, Meta, Guide, ValidateSizeGuide, SuccessResponse, SizeGuideResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, MOQData, SEOData, OwnerAppItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, CollectionQuery, BannerImage, ImageUrls, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionSchedule, SeoDetail, CollectionBadge, UserInfo, CollectionImage, CollectionBanner, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, Price1, ProductListingPrice, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Media2, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, ProductPublish, NetQuantity, TeaserTag, CustomOrder, TaxIdentifier, ReturnConfig, Trader, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, ProductPublished, Image, Logo, Brand, Product, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, ProductListingResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, PriceMeta, CompanyMeta, DimensionResponse, BrandMeta, QuantityBase, WeightResponse, ReturnConfig1, Trader1, StoreMeta, ManufacturerResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, PriceArticle, CompanyMeta1, DimensionResponse1, BrandMeta1, Quantity, QuantitiesArticle, ReturnConfig2, ArticleStoreResponse, Trader2, WeightResponse1, ManufacturerResponse1, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, LocationTimingSerializer, LocationDayWiseSerializer, SellerPhoneNumber, LocationManagerSerializer, UserSerializer1, UserSerializer2, GetAddressSerializer, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, ProductReturnConfigSerializer, Document, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, ContactDetails, CompanyTaxesSerializer, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validity, Identifier, CouponDateMeta, CouponAction, Ownership, Rule, Validation, State, PostOrder, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, PriceRange, BulkBundleRestriction, Restrictions, RuleDefinition, DisplayMetaDict, DisplayMeta, CouponAuthor, CouponSchedule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, PromotionDateMeta, UserRegistered, PostOrder1, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, PromotionAction, Visibility, PromotionAuthor, DisplayMeta1, PromotionSchedule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CartProductIdentifer, BuyRules, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, PromoMeta, ProductPrice, ProductPriceInfo, CategoryInfo, ActionQuery, ProductAction, ProductImage, BaseInfo, CartProduct, BasePrice, ArticlePriceInfo, ProductArticle, ProductAvailability, CartProductInfo, DisplayBreakup, RawBreakup, CouponBreakup, LoyaltyPoints, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
}
import Common = require("./client/CommonPlatformClient");
import Lead = require("./client/LeadPlatformClient");
import Billing = require("./client/BillingPlatformClient");
import Communication = require("./client/CommunicationPlatformClient");
import Payment = require("./client/PaymentPlatformClient");
import Order = require("./client/OrderPlatformClient");
import Catalog = require("./client/CatalogPlatformClient");
import CompanyProfile = require("./client/CompanyProfilePlatformClient");
import FileStorage = require("./client/FileStoragePlatformClient");
import Inventory = require("./client/InventoryPlatformClient");
import Configuration = require("./client/ConfigurationPlatformClient");
import Analytics = require("./client/AnalyticsPlatformClient");
import Discount = require("./client/DiscountPlatformClient");
import Webhook = require("./client/WebhookPlatformClient");
import AuditTrail = require("./client/AuditTrailPlatformClient");
import PlatformApplicationClient = require("./PlatformApplicationClient");
type ApplicationResponse = {
    application?: Application;
};
type Currency = {
    _id?: string;
    is_active?: boolean;
    name?: string;
    code?: string;
    created_at?: string;
    updated_at?: string;
    decimal_digits?: number;
    symbol?: string;
};
type Domain = {
    verified?: boolean;
    is_primary?: boolean;
    is_shortlink?: boolean;
    _id?: string;
    name?: string;
    is_predefined?: boolean;
};
type ApplicationWebsite = {
    enabled?: boolean;
    basepath?: string;
};
type ApplicationCors = {
    domains?: string[];
};
type ApplicationAuth = {
    enabled?: boolean;
};
type ApplicationRedirections = {
    redirect_from?: string;
    redirect_to?: string;
    type?: string;
};
type ApplicationMeta = {
    name?: string;
    value?: string;
};
type SecureUrl = {
    secure_url?: string;
};
type Application = {
    website?: ApplicationWebsite;
    cors?: ApplicationCors;
    auth?: ApplicationAuth;
    description?: string;
    channel_type?: string;
    cache_ttl?: number;
    is_internal?: boolean;
    is_active?: boolean;
    _id?: string;
    name?: string;
    owner?: string;
    company_id?: number;
    token?: string;
    redirections?: ApplicationRedirections[];
    meta?: ApplicationMeta[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
    banner?: SecureUrl;
    logo?: SecureUrl;
    favicon?: SecureUrl;
    domains?: Domain[];
    app_type?: string;
    mobile_logo?: SecureUrl;
    domain?: Domain;
};
type NotFound = {
    message?: string;
};
type BadRequest = {
    message?: string;
};
type LocationDefaultLanguage = {
    name?: string;
    code?: string;
};
type LocationDefaultCurrency = {
    name?: string;
    symbol?: string;
    code?: string;
};
type LocationCountry = {
    capital?: string;
    currency?: string;
    iso2?: string;
    iso3?: string;
    name?: string;
    parent?: string;
    phone_code?: string;
    type?: string;
    uid?: number;
    __v?: number;
    _id?: string;
    default_currency?: LocationDefaultCurrency;
    default_language?: LocationDefaultLanguage;
};
type Locations = {
    items?: any[];
};
type TicketList = {
    items?: Ticket[];
    filters?: Filter;
    page?: Page;
};
type Page = {
    item_total?: number;
    next_id?: string;
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    type: string;
    size?: number;
};
type TicketHistoryList = {
    items?: TicketHistory[];
    page?: Page;
};
type CustomFormList = {
    items?: CustomForm[];
    page?: Page;
};
type CreateCustomFormPayload = {
    slug: string;
    title: string;
    inputs: any[];
    description?: string;
    header_image?: string;
    priority: PriorityEnum;
    should_notify?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: any[];
    description?: string;
    priority: PriorityEnum;
    header_image?: string;
    should_notify?: boolean;
    login_required?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditTicketPayload = {
    content?: TicketContent;
    category?: string;
    sub_category?: string;
    source?: string;
    status?: string;
    priority?: PriorityEnum;
    assigned_to?: AgentChangePayload;
    tags?: string[];
};
type AgentChangePayload = {
    agent_id: string;
};
type CreateVideoRoomResponse = {
    unique_name: string;
};
type CloseVideoRoomResponse = {
    success: boolean;
};
type CreateVideoRoomPayload = {
    unique_name: string;
    notify?: NotifyUser[];
};
type NotifyUser = {
    country_code: string;
    phone_number: string;
};
type Filter = {
    priorities: Priority[];
    categories?: TicketCategory[];
    statuses: Status[];
    assignees: any[];
};
type TicketHistoryPayload = {
    value: any;
    type: HistoryTypeEnum;
};
type CustomFormSubmissionPayload = {
    response: any[];
    attachments?: TicketAsset[];
};
type GetTokenForVideoRoomResponse = {
    access_token: string;
};
type GetParticipantsInsideVideoRoomResponse = {
    participants: Participant[];
};
type Participant = {
    user?: UserSchema;
    identity?: string;
    status?: string;
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
    message: string;
    ticket: Ticket;
};
type TicketContext = {
    application_id?: string;
    company_id: string;
};
type CreatedOn = {
    user_agent: string;
};
type TicketAsset = {
    display?: string;
    value: string;
    type: TicketAssetTypeEnum;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: TicketAsset[];
};
type AddTicketPayload = {
    created_by?: any;
    status?: string;
    priority?: PriorityEnum;
    category: string;
    content: TicketContent;
    _custom_json?: any;
};
type Priority = {
    key: PriorityEnum;
    display: string;
    color: string;
};
type Status = {
    key: string;
    display: string;
    color: string;
};
type TicketFeedbackForm = {
    title: string;
    display?: any[];
};
type TicketFeedbackList = {
    items?: TicketFeedback[];
};
type TicketFeedbackPayload = {
    form_response?: any;
};
type SubmitButton = {
    title: string;
    title_color: string;
    background_color: string;
};
type PollForAssignment = {
    duration: number;
    message: string;
    success_message: string;
    failure_message: string;
};
type CustomForm = {
    application_id: string;
    slug: string;
    header_image?: string;
    title: string;
    description?: string;
    priority: Priority;
    login_required: boolean;
    should_notify: boolean;
    success_message?: string;
    submit_button?: SubmitButton;
    inputs: any[];
    created_on?: CreatedOn;
    poll_for_assignment?: PollForAssignment;
    _id: string;
};
type CommunicationDetails = {
    type?: string;
    title?: string;
    value?: string;
    description?: string;
    enabled?: boolean;
};
type SupportGeneralConfig = {
    _id?: string;
    support_email?: CommunicationDetails;
    support_phone?: CommunicationDetails;
    support_faq?: CommunicationDetails;
    show_communication_info?: boolean;
    support_communication?: CommunicationDetails;
    show_support_dris?: boolean;
    integration?: any;
};
type FeedbackForm = {
    inputs?: any;
    title?: string;
    timestamps?: any;
};
type TicketSubCategory = {
    key: string;
    display: string;
    sub_categories?: TicketSubCategory;
};
type TicketCategory = {
    display: string;
    key: string;
    sub_categories?: TicketCategory;
    group_id?: number;
    feedback_form?: FeedbackForm;
};
type CategoryData = {
    list?: TicketCategory;
};
type IntegrationConfig = {
    _id?: string;
    integration_type: string;
    base_url?: string;
    create_ticket_apikey?: string;
    update_ticket_apikey?: string;
    category_sync_apikey?: string;
    category_data?: CategoryData;
    webhook_apikey?: string;
    config_completed?: boolean;
    allow_ticket_creation: boolean;
    show_listing: boolean;
};
type FeedbackResponseItem = {
    display: string;
    key: string;
    value: string;
};
type TicketFeedback = {
    _id: string;
    ticket_id: string;
    company_id: string;
    response: FeedbackResponseItem[];
    category?: string;
    user?: any;
    updated_at?: string;
    created_at?: string;
};
type TicketHistory = {
    type: string;
    value: any;
    ticket_id: string;
    created_on?: CreatedOn;
    created_by?: any;
    _id: string;
    updated_at?: string;
    created_at?: string;
};
type Ticket = {
    context?: TicketContext;
    created_on?: CreatedOn;
    response_id?: string;
    content?: TicketContent;
    category: string;
    sub_category?: string;
    source: TicketSourceEnum;
    status: Status;
    priority: Priority;
    created_by?: any;
    assigned_to?: any;
    tags?: string[];
    _custom_json?: any;
    is_feedback_pending?: boolean;
    integration?: any;
    _id: string;
    updated_at?: string;
    created_at?: string;
};
type Activity = {
    current_state?: any;
    document_id?: string;
    previous_state?: any;
};
type ActivityDump = {
    activity?: Activity;
    created_by?: CreatedBy;
    date_meta?: DateMeta;
    id?: string;
    type?: string;
};
type AddMediaListRequest = {
    entity_id?: string;
    entity_type?: string;
    media_list?: AddMediaRequest[];
    ref_id?: string;
    ref_type?: string;
};
type AddMediaRequest = {
    cloud_id?: string;
    cloud_name?: string;
    cloud_provider?: string;
    entity_id?: string;
    entity_type?: string;
    media_url?: string;
    ref_id?: string;
    ref_type?: string;
    tags?: string[];
    thumbnail_url?: string;
    type?: string;
};
type ApproveRequest = {
    approve?: boolean;
    entity_type?: string;
    id: string;
    reason?: string;
};
type Attribute = {
    date_meta?: DateMeta;
    description?: string;
    id?: string;
    name?: string;
    slug?: string;
    tags?: TagMeta[];
};
type AttributeObject = {
    description?: string;
    name: string;
    slug?: string;
    title?: string;
    type: string;
    value: number;
};
type CreatedBy = {
    id?: string;
    name?: string;
    tags?: TagMeta[];
};
type CursorGetResponse = {
    items?: any[];
    page?: Page;
};
type DateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DeviceMeta = {
    app_version?: string;
    platform?: string;
};
type Entity = {
    id?: string;
    type?: string;
};
type EntityRequest = {
    entity_id?: string;
    entity_type?: string;
};
type FeedbackAttributes = {
    items?: Attribute[];
    page?: Page;
};
type FeedbackError = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    meta?: any;
    request_id?: string;
    stack_trace?: string;
    status?: number;
};
type FeedbackState = {
    active?: boolean;
    archive?: boolean;
    media?: string;
    qna?: boolean;
    rating?: boolean;
    review?: boolean;
};
type GetResponse = {
    data?: any;
    page?: Page;
};
type GetReviewResponse = {
    facets?: ReviewFacet[];
    items?: any[];
    page?: Page;
    sort?: SortMethod[];
};
type InsertResponse = {
    count?: number;
};
type MediaMeta = {
    max_count?: number;
    size?: number;
    type?: string;
};
type MediaMetaRequest = {
    max_count: number;
    size: number;
};
type NumberGetResponse = {
    items?: any[];
    page?: Page;
};
type PageCursor = {
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
    item_total?: number;
    next_id?: string;
    size: number;
    type: string;
};
type PageNumber = {
    current?: number;
    has_next?: boolean;
    item_total?: number;
    size?: number;
    type?: string;
};
type Rating = {
    attributes?: Attribute[];
    attributes_slugs?: string[];
    ui?: UI;
};
type RatingRequest = {
    attributes: string[];
    ui?: UI;
};
type ReportAbuseRequest = {
    description?: string;
    entity_id: string;
    entity_type: string;
};
type Review = {
    description?: string;
    header?: string;
    image_meta?: MediaMeta;
    title?: string;
    video_meta?: MediaMeta;
    vote_allowed?: boolean;
};
type ReviewFacet = {
    display?: string;
    name?: string;
    selected?: boolean;
    slug?: string;
    type?: string;
};
type ReviewRequest = {
    description: string;
    header: string;
    image_meta: MediaMetaRequest;
    is_vote_allowed: boolean;
    title: string;
    video_meta: MediaMetaRequest;
};
type SaveAttributeRequest = {
    description?: string;
    name: string;
    slug: string;
};
type SortMethod = {
    name?: string;
    selected?: boolean;
    type?: string;
};
type TagMeta = {
    media?: MediaMeta[];
    name?: string;
    type?: string;
};
type Template = {
    date_meta?: DateMeta;
    entity?: Entity;
    id?: string;
    name?: string;
    rating?: Rating;
    review?: Review;
    state?: FeedbackState;
    tags?: TagMeta[];
};
type TemplateGetResponse = {
    items?: Template[];
    page?: Page;
};
type TemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type TemplateRequestList = {
    template_list: TemplateRequest[];
};
type UI = {
    feedback_question?: string[];
    icon?: UIIcon;
    text?: string[];
    type?: string;
};
type UIIcon = {
    active?: string;
    inactive?: string;
    selected?: string[];
};
type UpdateAttributeRequest = {
    description?: string;
    name: string;
    slug?: string;
};
type UpdateResponse = {
    count?: number;
};
type UpdateReviewRequest = {
    active?: boolean;
    application?: string;
    approve?: boolean;
    archive?: boolean;
    attributes_rating?: AttributeObject[];
    description?: string;
    device_meta?: DeviceMeta;
    entity_id?: string;
    entity_type?: string;
    media_resource?: MediaMeta[];
    rating?: number;
    review_id?: string;
    template_id?: string;
    title?: string;
};
type UpdateTemplateRequest = {
    active: boolean;
    enable_media_type?: string;
    enable_qna?: boolean;
    enable_rating: boolean;
    enable_review: boolean;
    entity: EntityRequest;
    rating: RatingRequest;
    review: ReviewRequest;
};
type UpdateTemplateStatusRequest = {
    active?: boolean;
    archive?: boolean;
};
type AvailablePageSchema = {
    value?: string;
    text?: string;
    path?: string;
    type?: string;
    sections?: AvailablePageSchemaSections[];
    sections_meta?: AvailablePageSectionMetaAttributes[];
    theme?: string;
    seo?: AvailablePageSeo;
    props?: any[];
    _id?: string;
};
type AvailablePageSectionMetaAttributes = {
    attributes?: any;
};
type AvailablePageSeo = {
    title?: string;
    description?: string;
    _id?: string;
};
type AvailablePageSchemaSections = {
    name?: string;
    label?: string;
    props?: any;
    blocks?: any[];
    preset?: any;
    predicate?: AvailablePagePredicate;
};
type AvailablePageScreenPredicate = {
    mobile?: boolean;
    desktop?: boolean;
    tablet?: boolean;
};
type AvailablePageUserPredicate = {
    authenticated?: boolean;
    anonymous?: boolean;
};
type AvailablePageRoutePredicate = {
    selected?: string;
    exact_url?: string;
    query?: any;
};
type AvailablePagePredicate = {
    screen?: AvailablePageScreenPredicate;
    user?: AvailablePageUserPredicate;
    route?: AvailablePageRoutePredicate;
};
type AllAvailablePageSchema = {
    pages?: AvailablePageSchema[];
};
type PaginationSchema = {
    size?: number;
    item_total?: number;
    has_next?: boolean;
    type?: string;
    current?: number;
};
type ThemesListingResponseSchema = {
    items?: ThemesSchema[];
    page?: PaginationSchema;
};
type AddThemeRequestSchema = {
    theme_id?: string;
};
type UpgradableThemeSchema = {
    parent_theme?: string;
    applied_theme?: string;
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
    variants?: string[];
    subsets?: string[];
    version?: string;
    last_modified?: string;
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
    created_at?: string;
    updated_at?: string;
    version?: string;
    parent_theme_version?: string;
    parent_theme?: string;
    information?: Information;
    tags?: string[];
    src?: Src;
    assets?: AssetsSchema;
    available_sections?: availableSectionSchema[];
    styles?: any;
    config?: Config;
    font?: Font;
    _id?: string;
    __v?: number;
    colors?: Colors;
};
type availableSectionSchema = {
    blocks?: Blocks[];
    name?: string;
    label?: string;
    props?: BlocksProps[];
};
type Information = {
    images?: Images;
    features?: string[];
    name?: string;
    description?: string;
};
type Images = {
    desktop?: string[];
    android?: string[];
    ios?: string[];
    thumbnail?: string[];
};
type Src = {
    link?: string;
};
type AssetsSchema = {
    umd_js?: UmdJs;
    common_js?: CommonJs;
    css?: Css;
};
type UmdJs = {
    link?: string;
    links?: string[];
};
type CommonJs = {
    link?: string;
};
type Css = {
    link?: string;
    links?: string[];
};
type Sections = {
    attributes?: string;
};
type Config = {
    preset?: Preset;
    global_schema?: GlobalSchema;
    current?: string;
    list?: ListSchemaItem[];
};
type Preset = {
    pages?: AvailablePageSchema[];
};
type GlobalSchema = {
    props?: GlobalSchemaProps[];
};
type ListSchemaItem = {
    global_config?: any;
    page?: ConfigPage[];
    name?: string;
};
type Colors = {
    bg_color?: string;
    primary_color?: string;
    secondary_color?: string;
    accent_color?: string;
    link_color?: string;
    button_secondary_color?: string;
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
    semi_bold?: SemiBold;
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
    props?: BlocksProps[];
};
type GlobalSchemaProps = {
    id?: string;
    label?: string;
    type?: string;
    category?: string;
};
type BlocksProps = {
    id?: string;
    label?: string;
    type?: string;
};
type BlockUserRequestSchema = {
    status?: boolean;
    user_id?: string[];
    reason?: string;
};
type ArchiveUserRequestSchema = {
    user_id?: string;
};
type DeleteApplicationUserRequestSchema = {
    user_id?: string;
    reason?: string;
    reason_id?: string;
    request_id?: string;
    otp?: string;
};
type UnDeleteUserRequestSchema = {
    user_id?: string;
    reason?: string;
    reason_id?: string;
};
type EditEmailRequestSchema = {
    email?: string;
};
type SendVerificationLinkMobileRequestSchema = {
    verified?: boolean;
    active?: boolean;
    country_code?: string;
    phone?: string;
    primary?: boolean;
};
type EditMobileRequestSchema = {
    country_code?: string;
    phone?: string;
};
type EditProfileRequestSchema = {
    first_name?: string;
    last_name?: string;
    mobile?: EditProfileMobileSchema;
    country_code?: string;
    email?: string;
    gender?: string;
    dob?: string;
    profile_pic_url?: string;
    android_hash?: string;
    sender?: string;
    register_token?: string;
};
type EditProfileMobileSchema = {
    phone?: string;
    country_code?: string;
};
type SendEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    token?: string;
    register_token?: string;
};
type VerifyEmailOtpRequestSchema = {
    email?: string;
    action?: string;
    register_token?: string;
    otp?: string;
};
type VerifyOtpRequestSchema = {
    request_id?: string;
    register_token?: string;
    otp?: string;
};
type SendMobileOtpRequestSchema = {
    mobile?: string;
    country_code?: string;
    action?: string;
    token?: string;
    android_hash?: string;
    force?: string;
    captcha_code?: string;
};
type UpdatePasswordRequestSchema = {
    old_password?: string;
    new_password?: string;
};
type FormRegisterRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    email?: string;
    password?: string;
    phone?: FormRegisterRequestSchemaPhone;
    register_token?: string;
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
    captcha_code?: string;
};
type SendResetPasswordMobileRequestSchema = {
    country_code?: string;
    mobile?: string;
    captcha_code?: string;
};
type PasswordLoginRequestSchema = {
    captcha_code?: string;
    password?: string;
    username?: string;
};
type SendOtpRequestSchema = {
    country_code?: string;
    captcha_code?: string;
    mobile?: string;
    android_hash?: string;
};
type OAuthRequestSchema = {
    is_signed_in?: boolean;
    oauth2?: OAuthRequestSchemaOauth2;
    profile?: OAuthRequestSchemaProfile;
};
type OAuthRequestAppleSchema = {
    user_identifier?: string;
    oauth?: OAuthRequestAppleSchemaOauth;
    profile?: OAuthRequestAppleSchemaProfile;
};
type UserObjectSchema = {
    user?: UserSchema;
};
type AuthSuccess = {
    register_token?: string;
    user_exists?: boolean;
    user?: UserSchema;
};
type SendOtpResponse = {
    resend_timer?: number;
    resend_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    email?: string;
    resend_email_token?: string;
    register_token?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
};
type ProfileEditSuccess = {
    user?: UserSchema;
    register_token?: string;
    resend_email_token?: string;
    user_exists?: boolean;
    verify_email_link?: boolean;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    email?: string;
    request_id?: string;
    country_code?: string;
    mobile?: string;
    success?: boolean;
    message?: string;
    resend_timer?: number;
    resend_token?: string;
};
type LoginSuccess = {
    user?: UserSchema;
    request_id?: string;
    register_token?: string;
};
type VerifyOtpSuccess = {
    user?: UserSchema;
    user_exists?: boolean;
    register_token?: string;
};
type ResetPasswordSuccess = {
    status?: string;
};
type RegisterFormSuccess = {
    email?: string;
    resend_timer?: number;
    resend_token?: string;
    resend_email_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    verify_email_otp?: boolean;
    verify_mobile_otp?: boolean;
    user_exists?: boolean;
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
type BlockUserSuccess = {
    success?: boolean;
};
type ArchiveUserSuccess = {
    success?: boolean;
};
type DeleteUserSuccess = {
    success?: boolean;
};
type UnDeleteUserSuccess = {
    success?: boolean;
};
type OtpSuccess = {
    resend_timer?: number;
    resend_token?: string;
    register_token?: string;
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
};
type EmailOtpSuccess = {
    success?: boolean;
};
type SessionListSuccess = {
    sessions?: string[];
};
type VerifyMobileOTPSuccess = {
    user?: UserSchema;
    verify_mobile_link?: boolean;
};
type VerifyEmailOTPSuccess = {
    user?: UserSchema;
    verify_email_link?: boolean;
};
type SendMobileVerifyLinkSuccess = {
    verify_mobile_link?: boolean;
};
type SendEmailVerifyLinkSuccess = {
    verify_email_link?: boolean;
};
type UserSearchResponseSchema = {
    users?: UserSchema[];
};
type CustomerListResponseSchema = {
    items?: UserSchema[];
    page?: PaginationSchema;
};
type SessionListResponseSchema = {
    items?: string[];
};
type SessionDeleteResponseSchema = {
    items?: string[];
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
type AuthenticationInternalServerErrorSchema = {
    message?: string;
};
type AuthenticationApiErrorSchema = {
    message?: string;
};
type ProfileEditSuccessSchema = {
    email?: string;
    verify_email_otp?: boolean;
    verify_email_link?: boolean;
    verify_mobile_otp?: boolean;
    user?: string;
    register_token?: string;
    user_exists?: boolean;
};
type FormRegisterRequestSchemaPhone = {
    country_code?: string;
    mobile?: string;
};
type OAuthRequestSchemaOauth2 = {
    access_token?: string;
    expiry?: number;
    refresh_token?: string;
};
type OAuthRequestSchemaProfile = {
    last_name?: string;
    image?: string;
    id?: string;
    email?: string;
    full_name?: string;
    first_name?: string;
};
type OAuthRequestAppleSchemaOauth = {
    identity_token?: string;
};
type OAuthRequestAppleSchemaProfile = {
    last_name?: string;
    full_name?: string;
    first_name?: string;
};
type AuthSuccessUser = {
    first_name?: string;
    last_name?: string;
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
type CreateUserRequestSchema = {
    phone_number: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    gender?: string;
    username: string;
    meta?: any;
};
type CreateUserResponseSchema = {
    user?: UserSchema;
};
type CreateUserSessionRequestSchema = {
    domain?: string;
    max_age?: number;
    user_id?: string;
};
type CreateUserSessionResponseSchema = {
    domain?: string;
    max_age?: number;
    secure?: boolean;
    http_only?: boolean;
    cookie?: any;
};
type PlatformSchema = {
    display?: string;
    look_and_feel?: LookAndFeel;
    updated_at?: string;
    active?: boolean;
    forgot_password?: boolean;
    login?: Login;
    skip_captcha?: boolean;
    name?: string;
    meta?: MetaSchema;
    _id?: string;
    social?: Social;
    required_fields?: RequiredFields;
    register_required_fields?: RegisterRequiredFields;
    skip_login?: boolean;
    flash_card?: FlashCard;
    subtext?: string;
    social_tokens?: SocialTokens;
    created_at?: string;
    register?: boolean;
    mobile_image?: string;
    desktop_image?: string;
    delete_account_day?: number;
    delete_account_reasons?: DeleteAccountReasons[];
    delete_account_consent?: any;
    session_config?: any;
};
type LookAndFeel = {
    card_position?: string;
    background_color?: string;
};
type Login = {
    password?: boolean;
    otp?: boolean;
};
type MetaSchema = {
    fynd_default?: boolean;
};
type Social = {
    account_kit?: boolean;
    facebook?: boolean;
    google?: boolean;
    apple?: boolean;
};
type RequiredFields = {
    email?: PlatformEmail;
    mobile?: PlatformMobile;
};
type PlatformEmail = {
    is_required?: boolean;
    level?: string;
};
type PlatformMobile = {
    is_required?: boolean;
    level?: string;
};
type RegisterRequiredFields = {
    email?: RegisterRequiredFieldsEmail;
    mobile?: RegisterRequiredFieldsMobile;
};
type RegisterRequiredFieldsEmail = {
    is_required?: boolean;
    level?: string;
};
type RegisterRequiredFieldsMobile = {
    is_required?: boolean;
    level?: string;
};
type FlashCard = {
    text?: string;
    text_color?: string;
    background_color?: string;
};
type SocialTokens = {
    facebook?: Facebook;
    account_kit?: Accountkit;
    google?: Google;
};
type DeleteAccountReasons = {
    reason_text?: string;
    reason_id?: string;
    show_text_area?: boolean;
};
type DeleteAccountConsent = {
    consent_text?: string;
};
type Facebook = {
    app_id?: string;
};
type Accountkit = {
    app_id?: string;
};
type Google = {
    app_id?: string;
};
type SessionExpiry = {
    duration?: number;
    type?: string;
    is_rolling?: boolean;
};
type UpdateUserRequestSchema = {
    first_name?: string;
    last_name?: string;
    gender?: string;
    external_id?: string;
    meta?: any;
};
type UserSchema = {
    application_id?: string;
    user_id?: string;
    first_name?: string;
    meta?: any;
    last_name?: string;
    phone_numbers?: PhoneNumber[];
    emails?: Email[];
    gender?: string;
    dob?: string;
    active?: boolean;
    profile_pic_url?: string;
    username?: string;
    account_type?: string;
    debug?: Debug;
    has_old_password_hash?: boolean;
    _id?: string;
    created_at?: string;
    updated_at?: string;
};
type PhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    country_code?: number;
};
type ApplicationLegal = {
    application?: string;
    tnc?: string;
    policy?: string;
    shipping?: string;
    returns?: string;
    faq?: ApplicationLegalFAQ[];
    _id?: string;
    updated_at?: string;
    created_at?: string;
};
type ApplicationLegalFAQ = {
    question?: string;
    answer?: string;
};
type PathMappingSchema = {
    application?: string;
    _id?: string;
    redirect_from?: string;
    redirect_to?: string;
    updated_at?: string;
    created_at?: string;
    __source?: TagSourceSchema;
};
type SeoComponent = {
    seo?: SeoSchema;
};
type SeoSchema = {
    app?: string;
    _id?: string;
    robots_txt?: string;
    sitemap_enabled?: boolean;
    custom_meta_tags?: any[];
    details?: Detail;
    created_at?: string;
    updated_at?: string;
};
type CustomMetaTag = {
    name?: string;
    content?: string;
    _id?: string;
};
type Detail = {
    title?: string;
    description?: string;
};
type AnnouncementPageSchema = {
    page_slug?: string;
    type?: string;
};
type EditorMeta = {
    foreground_color?: string;
    background_color?: string;
    content_type?: string;
    content?: string;
};
type AnnouncementAuthorSchema = {
    created_by?: string;
    modified_by?: string;
};
type AdminAnnouncementSchema = {
    _id?: string;
    platforms?: string[];
    title?: string;
    announcement?: string;
    pages?: AnnouncementPageSchema[];
    editor_meta?: EditorMeta;
    author?: AnnouncementAuthorSchema;
    created_at?: string;
    app?: string;
    modified_at?: string;
    _schedule?: ScheduleSchema;
};
type ScheduleSchema = {
    cron?: string;
    start?: string;
    end?: string;
    duration?: number;
    next_schedule?: any[];
};
type NextSchedule = {
    start?: string;
    end?: string;
};
type AnnouncementSchema = {
    announcement?: string;
    schedule?: ScheduleStartSchema;
};
type ScheduleStartSchema = {
    start?: string;
    end?: string;
};
type BlogGetResponse = {
    items?: BlogSchema[];
    page?: Page;
};
type ResourceContent = {
    type?: string;
    value?: string;
};
type Asset = {
    aspect_ratio?: string;
    id?: string;
    secure_url?: string;
};
type Author = {
    designation?: string;
    id?: string;
    name?: string;
};
type BlogSchema = {
    _id?: string;
    _custom_json?: any;
    application?: string;
    archived?: boolean;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    seo?: SEO;
    _schedule?: CronSchedule;
    title?: string;
    date_meta?: DateMeta;
};
type SEO = {
    description?: string;
    image?: SEOImage;
    title?: string;
};
type SEOImage = {
    url?: string;
};
type BlogRequest = {
    application?: string;
    _custom_json?: any;
    author?: Author;
    content?: ResourceContent[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
    title?: string;
    seo?: SEO;
    _schedule?: CronSchedule;
};
type GetAnnouncementListSchema = {
    items?: AdminAnnouncementSchema[];
    page?: Page;
};
type CreateAnnouncementSchema = {
    message?: string;
    data?: AdminAnnouncementSchema;
};
type DataLoaderResponseSchema = {
    application?: string;
    company?: string;
    _id?: string;
    name?: string;
    service?: string;
    operation_id?: string;
    type?: string;
    url?: string;
    content?: string;
    __source?: DataLoaderSourceSchema;
};
type DataLoaderResetResponseSchema = {
    reset?: string;
};
type Navigation = {
    name?: string;
    slug?: string;
    orientation?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    position?: string;
    application?: string;
    platform?: string;
    navigation?: NavigationReference;
};
type LocaleLanguage = {
    hi?: Language;
    ar?: Language;
    en_us?: Language;
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
    type: PageType;
};
type NavigationReference = {
    acl?: string[];
    tags?: string[];
    _locale_language?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sort_order?: number;
    sub_navigation?: SubNavigationReference[];
};
type SubNavigationReference = {
    acl?: string[];
    tags?: string[];
    _locale_language?: LocaleLanguage;
    image?: string;
    type?: string;
    action?: Action;
    active?: boolean;
    display?: string;
    sort_order?: number;
    sub_navigation?: NavigationReference[];
};
type LandingPage = {
    data?: LandingPageSchema;
    success?: boolean;
};
type ConfigurationSchema = {
    sleep_time?: number;
    start_on_launch?: boolean;
    duration?: number;
    slide_direction?: string;
};
type SlideshowMedia = {
    type?: string;
    url?: string;
    bg_color?: string;
    duration?: number;
    auto_decide_duration?: boolean;
    action?: Action;
};
type Slideshow = {
    data?: SlideshowSchema;
    success?: boolean;
};
type AnnouncementsResponseSchema = {
    announcements?: any;
    refresh_rate?: number;
    refresh_pages?: string[];
};
type FaqResponseSchema = {
    faqs?: FaqSchema[];
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
    sub_type?: string;
    content?: string;
};
type RemoveHandpickedSchema = {
    tags?: string[];
};
type CreateTagSchema = {
    name?: string;
    sub_type?: string;
    _id?: string;
    type?: string;
    url?: string;
    position?: string;
    attributes?: any;
    pages?: any[];
    content?: string;
};
type CreateTagRequestSchema = {
    tags?: CreateTagSchema[];
};
type DataLoaderSchema = {
    name?: string;
    service?: string;
    operation_id?: string;
    type?: string;
    url?: string;
    content?: string;
    __source?: DataLoaderSourceSchema;
    _id?: string;
};
type DataLoaderSourceSchema = {
    type?: string;
    id?: string;
};
type DataLoadersSchema = {
    items?: DataLoaderSchema[];
};
type TagDeleteSuccessResponse = {
    success?: boolean;
};
type ContentAPIError = {
    message?: string;
    status?: number;
    code?: string;
    exception?: string;
    info?: string;
    request_id?: string;
    stack_trace?: string;
    meta?: any;
};
type CommonError = {
    message?: string;
};
type CategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: string[];
    _id?: string;
    slug?: string;
    application?: string;
    icon_url?: string;
    _custom_json?: any;
};
type ChildrenSchema = {
    question?: string;
    answer?: string;
    slug?: string;
    application?: string;
    _id?: string;
};
type CategoryRequestSchema = {
    slug?: string;
    title?: string;
};
type FAQCategorySchema = {
    index?: number;
    title?: string;
    description?: string;
    children?: ChildrenSchema[];
    _id?: string;
    slug?: string;
    application?: string;
    icon_url?: string;
    _custom_json?: any;
};
type FaqSchema = {
    slug?: string;
    application?: string;
    _id?: string;
    question?: string;
    answer?: string;
    tags?: string[];
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
    faqs?: FaqSchema[];
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
    categories?: CategorySchema[];
};
type GetFaqCategoryBySlugSchema = {
    category?: FAQCategorySchema;
};
type LandingPageGetResponse = {
    items?: LandingPageSchema[];
    page?: Page;
};
type LandingPageSchema = {
    slug?: string;
    action?: Action;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _id?: string;
    application?: string;
    archived?: boolean;
    _custom_json?: any;
};
type DefaultNavigationResponse = {
    items?: NavigationSchema[];
};
type NavigationGetResponse = {
    items?: NavigationSchema[];
    page?: Page;
};
type Orientation = {
    portrait?: string[];
    landscape?: string[];
};
type NavigationSchema = {
    _id?: string;
    application?: string;
    archived?: boolean;
    name?: string;
    slug?: string;
    platform?: string[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    orientation?: Orientation;
    version?: number;
    navigation?: NavigationReference[];
};
type NavigationRequest = {
    name?: string;
    slug?: string;
    platform?: string[];
    orientation?: Orientation;
    navigation?: NavigationReference[];
};
type CustomPageSchema = {
    _id?: string;
    platform?: string;
    title?: string;
    slug?: string;
    type?: string;
    orientation?: string;
    application?: string;
    description?: string;
    published?: boolean;
    tags?: string[];
    content?: any[];
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    _schedule?: ScheduleSchema;
};
type ContentSchema = {
    type?: string;
    value?: any;
};
type CustomPage = {
    data?: CustomPageSchema;
};
type FeatureImage = {
    secure_url?: string;
};
type PageGetResponse = {
    items?: PageSchema[];
    page?: Page;
};
type PageSpec = {
    specifications?: any[];
};
type PageSpecParam = {
    key?: string;
    required?: boolean;
};
type PageSpecItem = {
    page_type?: string;
    display_name?: string;
    params?: PageSpecParam[];
    query?: PageSpecParam[];
};
type PageSchema = {
    _id?: string;
    application?: string;
    component_ids?: string[];
    content?: any[];
    content_path?: string;
    created_by?: CreatedBySchema;
    date_meta?: DateMeta;
    description?: string;
    feature_image?: Asset;
    page_meta?: any[];
    _schedule?: ScheduleSchema;
    _custom_json?: any;
    orientation?: string;
    platform?: string;
    published?: boolean;
    slug?: string;
    tags?: string[];
    title?: string;
    type?: string;
    seo?: SEO;
    visibility?: any;
    archived?: boolean;
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
    _schedule?: CronSchedule;
    application?: string;
    author?: Author;
    _custom_json?: any;
    orientation?: string;
    content?: any[];
    feature_image?: Asset;
    published?: boolean;
    reading_time?: string;
    slug?: string;
    tags?: string[];
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
    system_pages?: NavigationSchema[];
    custom_pages?: PageSchema[];
    application_id?: string;
};
type SlideshowGetResponse = {
    items?: SlideshowSchema[];
    page?: Page;
};
type SlideshowSchema = {
    _id?: string;
    slug?: string;
    date_meta?: DateMeta;
    application?: string;
    platform?: string;
    configuration?: ConfigurationSchema;
    media?: SlideshowMedia[];
    active?: boolean;
    archived?: boolean;
    _custom_json?: any;
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
    _id?: string;
    config_type?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    contact?: ContactSchema;
};
type PhoneProperties = {
    key?: string;
    code?: string;
    number?: string;
};
type PhoneSchema = {
    active?: boolean;
    phone?: PhoneProperties[];
};
type EmailProperties = {
    key?: string;
    value?: string;
};
type EmailSchema = {
    active?: boolean;
    email?: EmailProperties[];
};
type ContactSchema = {
    phone?: PhoneSchema;
    email?: EmailSchema;
};
type TagsSchema = {
    application?: string;
    _id?: string;
    tags?: TagSchema[];
};
type TagSchema = {
    name?: string;
    url?: string;
    type?: string;
    sub_type?: string;
    _id?: string;
    position?: string;
    attributes?: any;
    content?: string;
    pages?: any[];
    __source?: TagSourceSchema;
};
type TagSourceSchema = {
    type?: string;
    id?: string;
};
type UnauthenticatedUser = {
    message?: string;
};
type UnauthenticatedApplication = {
    message?: string;
};
type ResourceNotFound = {
    message?: string;
};
type InternalServerError = {
    message?: string;
    code?: string;
};
type CheckValidityResponse = {
    is_valid?: boolean;
    discount_amount?: number;
};
type PlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type Plan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
type DetailedPlanComponents = {
    name?: string;
    slug?: string;
    description?: string;
    group?: string;
    icon?: string;
    links?: any;
    enabled?: boolean;
    display_text?: string;
};
type DetailedPlan = {
    recurring?: PlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
    components?: DetailedPlanComponents[];
};
type SubscriptionTrialPeriod = {
    start_date?: string;
    end_date?: string;
};
type EntityChargePrice = {
    amount: number;
    currency_code: string;
};
type EntityChargeRecurring = {
    interval: string;
};
type ChargeLineItem = {
    name: string;
    term: string;
    pricing_type: string;
    price: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    trial_days?: number;
    is_test?: boolean;
    metadata?: any;
};
type CreateSubscriptionCharge = {
    name: string;
    trial_days?: number;
    line_items: ChargeLineItem[];
    is_test?: boolean;
    return_url: string;
};
type OneTimeChargeItem = {
    name: string;
    term?: string;
    pricing_type: string;
    price: EntityChargePrice;
    capped_amount?: number;
    is_test?: boolean;
    metadata?: any;
};
type CreateOneTimeCharge = {
    name: string;
    charge: OneTimeChargeItem;
    is_test?: boolean;
    return_url: string;
};
type CurrentPeriod = {
    start_date?: string;
    end_date?: string;
};
type SubscriptionCharge = {
    _id?: string;
    name?: string;
    term?: string;
    pricing_type?: string;
    price?: EntityChargePrice;
    recurring?: EntityChargeRecurring;
    capped_amount?: number;
    activated_on?: string;
    cancelled_on?: string;
    billing_date?: string;
    current_period?: CurrentPeriod;
    status?: string;
    is_test?: boolean;
    metadata?: any;
};
type EntitySubscription = {
    _id?: string;
    name?: string;
    status?: string;
    company_id?: number;
    activated_on?: string;
    cancelled_on?: string;
    trial_days?: number;
    trial_period?: SubscriptionTrialPeriod;
    metadata?: any;
    line_items?: SubscriptionCharge[];
};
type OneTimeChargeEntity = {
    _id?: string;
    name?: string;
    status?: string;
    activated_on?: string;
    cancelled_on?: string;
    metadata?: any;
    return_url?: string;
    is_test?: boolean;
    pricing_type?: string;
    subscriber_id?: string;
    entity_type?: string;
    entity_id?: string;
    meta?: any;
    price?: EntityChargePrice;
};
type CreateOneTimeChargeResponse = {
    charge?: OneTimeChargeEntity;
    confirm_url?: string;
};
type CreateSubscriptionResponse = {
    subscription?: EntitySubscription;
    confirm_url?: string;
};
type InvoiceDetailsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceDetailsClient = {
    address_lines?: string[];
    name?: string;
    email?: string;
    phone?: string;
};
type InvoiceDetailsStatusTrail = {
    _id?: string;
    value?: string;
    timestamp?: string;
};
type InvoiceDetailsPaymentMethodsDataChecks = {
    cvc_check?: string;
    address_line1_check?: string;
    address_postal_code_check?: string;
};
type InvoiceDetailsPaymentMethodsDataNetworks = {
    available?: string[];
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
    exp_year?: number;
    networks?: InvoiceDetailsPaymentMethodsDataNetworks;
    exp_month?: number;
    fingerprint?: string;
    generated_from?: string;
    three_d_secure_usage?: InvoiceDetailsPaymentMethodsDataThreeDSecureUsage;
};
type InvoiceDetailsPaymentMethods = {
    id?: number;
    type?: string;
    pg_payment_method_id?: string;
    data?: InvoiceDetailsPaymentMethodsData;
    is_default?: boolean;
};
type InvoicePaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoiceDetails = {
    period?: InvoiceDetailsPeriod;
    client?: InvoiceDetailsClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    _id?: string;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicePaymentMethod;
};
type InvoiceItemsPlanRecurring = {
    interval?: string;
    interval_count?: number;
};
type InvoiceItemsPlan = {
    recurring?: InvoiceItemsPlanRecurring;
    is_trial_plan?: boolean;
    plan_group?: string;
    tag_lines?: string[];
    currency?: string;
    is_active?: boolean;
    is_visible?: boolean;
    trial_period?: number;
    addons?: string[];
    tags?: string[];
    type?: string;
    country?: string;
    _id?: string;
    name?: string;
    description?: string;
    amount?: number;
    product_suite_id?: string;
    created_at?: string;
    modified_at?: string;
};
type InvoiceItemsPeriod = {
    start?: string;
    end?: string;
};
type InvoiceItems = {
    _id?: string;
    currency?: string;
    plan?: InvoiceItemsPlan;
    name?: string;
    quantity?: number;
    description?: string;
    period?: InvoiceItemsPeriod;
    unit_amount?: number;
    amount?: number;
    type?: string;
    invoice_id?: string;
    created_at?: string;
    modified_at?: string;
};
type Invoice = {
    invoice?: InvoiceDetails;
    invoice_items?: InvoiceItems[];
};
type InvoicesDataClient = {
    name?: string;
    email?: string;
    phone?: string;
    address_lines?: string[];
};
type InvoicesDataPeriod = {
    start?: string;
    end?: string;
};
type InvoicesDataPaymentMethod = {
    pg_payment_method_id?: string;
};
type InvoicesData = {
    _id?: string;
    client?: InvoicesDataClient;
    auto_advance?: boolean;
    currency?: string;
    paid?: boolean;
    attemp?: number;
    collection_method?: string;
    subscriber_id?: string;
    invoice_url?: string;
    number?: string;
    pg_data?: any;
    period?: InvoicesDataPeriod;
    receipt_number?: string;
    statement_descriptor?: string;
    current_status?: string;
    status_trail?: InvoiceDetailsStatusTrail[];
    subtotal?: number;
    total?: number;
    subscription?: string;
    next_action_time?: string;
    created_at?: string;
    modified_at?: string;
    hash_identifier?: string;
    payment_method?: InvoicesDataPaymentMethod;
    invoice_items?: InvoiceItems[];
};
type Invoices = {
    data?: InvoicesData[];
    start?: number;
    end?: number;
    limit?: number;
    page?: number;
    total?: number;
};
type Phone = {
    phone_number?: string;
    phone_country_code?: string;
};
type SubscriptionBillingAddress = {
    country?: string;
    state?: string;
    city?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
};
type SubscriptionCustomer = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    _id?: string;
    unique_id?: string;
    type?: string;
    name?: string;
    email?: string;
    created_at?: string;
    modified_at?: string;
    data?: any;
};
type SubscriptionCustomerCreate = {
    phone?: Phone;
    billing_address?: SubscriptionBillingAddress;
    unique_id?: string;
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
    resume_at?: string;
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
    current_period?: SubscriptionCurrentPeriod;
    pause_collection?: SubscriptionPauseCollection;
    trial?: SubscriptionTrial;
    invoice_settings?: SubscriptionInvoiceSettings;
    is_active?: boolean;
    cancel_at_period_end?: boolean;
    _id?: string;
    subscriber_id?: string;
    plan_id?: string;
    product_suite_id?: string;
    plan_data?: Plan;
    current_status?: string;
    collection_method?: string;
    created_at?: string;
    modified_at?: string;
    latest_invoice?: string;
};
type SubscriptionStatus = {
    is_enabled?: boolean;
    subscription?: Subscription;
};
type SubscriptionLimitApplication = {
    enabled?: boolean;
    hard_limit?: number;
    soft_limit?: number;
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
    other_platform?: SubscriptionLimitOtherPlatform;
    team?: SubscriptionLimitTeam;
    products?: SubscriptionLimitProducts;
    extensions?: SubscriptionLimitExtensions;
    integrations?: SubscriptionLimitIntegrations;
    is_trial_plan?: boolean;
};
type SubscriptionActivateReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    plan_id?: string;
    payment_method?: string;
};
type SubscriptionActivateRes = {
    success?: boolean;
    data?: Subscription;
};
type CancelSubscriptionReq = {
    unique_id?: string;
    type?: string;
    product_suite?: string;
    subscription_id?: string;
};
type CancelSubscriptionRes = {
    success?: boolean;
    data?: Subscription;
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
    _id?: string;
    imported?: any;
    processed?: any;
};
type GetStats = {
    items?: Stats[];
};
type CampaignReq = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
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
    _id?: string;
    from_name?: string;
    from_email?: string;
};
type CampaignEmail = {
    template?: CampaignEmailTemplate;
    provider?: CampignEmailProvider;
};
type Campaign = {
    recipient_headers?: RecipientHeaders;
    email?: CampaignEmail;
    description?: string;
    tags?: any[];
    is_active?: boolean;
    _id?: string;
    datasource?: string;
    type?: string;
    name?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type Campaigns = {
    items?: Campaign[];
    page?: Page;
};
type BadRequestSchema = {
    status?: string;
    message?: string;
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
    headers?: BigqueryHeadersResHeaders[];
};
type GetNRecordsCsvReq = {
    url?: string;
    header?: boolean;
    count?: number;
};
type GetNRecordsCsvResItems = {
    phone_number?: string;
    email?: string;
    firstname?: string;
    lastname?: string;
    orderid?: string;
};
type GetNRecordsCsvRes = {
    items?: GetNRecordsCsvResItems[];
};
type AudienceReq = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
};
type Audience = {
    description?: string;
    tags?: string[];
    headers?: string[];
    is_active?: boolean;
    _id?: string;
    name?: string;
    file_url?: string;
    type?: string;
    records_count?: number;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type Audiences = {
    items?: Audience[];
    page?: Page;
};
type EmailProviderReqFrom = {
    name?: string;
    email?: string;
    is_default?: boolean;
};
type EmailProviderReq = {
    name?: string;
    description?: string;
    api_key?: string;
    type?: string;
    provider?: string;
    from_address?: EmailProviderReqFrom[];
};
type EmailProvider = {
    type?: string;
    provider?: string;
    from_address?: EmailProviderReqFrom[];
    _id?: string;
    name?: string;
    description?: string;
    api_key?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type EmailProviders = {
    items?: EmailProvider[];
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
    static_to?: string[];
    static_cc?: string[];
    static_bcc?: string[];
    reply_to?: string;
    headers?: EmailTemplateHeaders[];
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: any[];
    priority?: string;
};
type TemplateAndType = {
    template_type?: string;
    template?: string;
};
type EmailTemplateRes = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: string[];
    static_cc?: string[];
    static_bcc?: string[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    name?: string;
    keys?: EmailTemplateKeys;
    reply_to?: string;
    headers?: EmailTemplateHeaders[];
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type EmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: any[];
    static_cc?: any[];
    static_bcc?: any[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: any[];
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SystemEmailTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    static_to?: any[];
    static_cc?: any[];
    static_bcc?: any[];
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    from_name?: string;
    subject?: TemplateAndType;
    html?: TemplateAndType;
    text?: TemplateAndType;
    headers?: any[];
    attachments?: any[];
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type EmailTemplates = {
    items?: EmailTemplate[];
    page?: Page;
};
type SystemEmailTemplates = {
    items?: SystemEmailTemplate[];
    page?: Page;
};
type PayloadEmailTemplateStructure = {
    key?: string;
    value?: any;
};
type PayloadEmailProviderStructure = {
    _id?: string;
};
type PayloadEmailStructure = {
    template?: PayloadEmailTemplateStructure;
    provider?: PayloadEmailProviderStructure;
};
type PayloadSmsTemplateStructure = {
    key?: string;
    value?: any;
};
type PayloadSmsProviderStructure = {
    _id?: string;
};
type PayloadSmsStructure = {
    template?: PayloadSmsTemplateStructure;
    provider?: PayloadSmsProviderStructure;
};
type PayloadStructure = {
    data?: any[];
    email?: PayloadEmailStructure;
    sms?: PayloadSmsStructure;
    application?: string;
};
type MetaStructure = {
    job_type?: string;
    action?: string;
    trace?: string;
    timestamp?: string;
};
type EngineRequest = {
    payload?: PayloadStructure;
    meta?: MetaStructure;
};
type EngineResponse = {
    success?: boolean;
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
    is_default?: boolean;
    _id?: string;
    application?: string;
    event?: string;
    slug?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type EventSubscriptions = {
    items?: EventSubscription[];
    page?: Page;
};
type TriggerJobResponse = {
    status?: number;
};
type TriggerJobRequest = {
    job_id?: string;
};
type Job = {
    completed?: boolean;
    is_active?: boolean;
    _id?: string;
    campaign?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type Jobs = {
    items?: Job[];
    page?: Page;
};
type JobLog = {
    imported?: any;
    processed?: any;
    _id?: string;
    job?: string;
    campaign?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type JobLogs = {
    items?: JobLog[];
    page?: Page;
};
type LogEmail = {
    template?: string;
};
type LogPushnotification = {
    pushtokens?: string[];
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
    _id?: string;
    application?: string;
    service?: string;
    step?: string;
    status?: string;
    data?: any;
    expire_at?: string;
    created_at?: string;
};
type Logs = {
    items?: Log[];
    page?: Page;
};
type SendOtpSmsCommsTemplate = {
    key?: string;
    value?: any;
};
type SendOtpSmsCommsProvider = {
    slug?: string;
    _id?: string;
};
type SendOtpEmailCommsTemplate = {
    key?: string;
    value?: any;
};
type SendOtpCommsReqData = {
    send_same_otp_to_channel?: boolean;
    mobile?: string;
    country_code?: string;
    to?: string;
};
type SendOtpCommsReqSms = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpSmsCommsTemplate;
    provider?: SendOtpSmsCommsProvider;
};
type SendOtpCommsReqEmail = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpEmailCommsTemplate;
};
type SendOtpCommsResSms = {
    success?: boolean;
    request_id?: string;
    message?: string;
    mobile?: string;
    country_code?: string;
    resend_timer?: number;
};
type SendOtpCommsResEmail = {
    success?: boolean;
    request_id?: string;
    message?: string;
    to?: string;
    resend_timer?: number;
};
type SendOtpCommsReq = {
    data?: SendOtpCommsReqData;
    sms?: SendOtpCommsReqSms;
    email?: SendOtpCommsReqEmail;
};
type SendOtpCommsRes = {
    sms?: SendOtpCommsResSms;
    email?: SendOtpCommsResEmail;
};
type VerifyOtpCommsReq = {
    request_id?: string;
    otp?: string;
};
type VerifyOtpCommsSuccessRes = {
    success?: boolean;
    mobile?: string;
    country_code?: string;
    message?: string;
};
type VerifyOtpCommsErrorRes = {
    success?: boolean;
    message?: string;
};
type PushtokenReq = {
    action?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
};
type PushtokenRes = {
    _id?: string;
    bundle_identifier?: string;
    push_token?: string;
    unique_device_id?: string;
    type?: string;
    platform?: string;
    application_id?: string;
    user_id?: string;
    created_at?: string;
    updated_at?: string;
    expired_at?: string;
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
    _id?: string;
    name?: string;
    description?: string;
    sender?: string;
    username?: string;
    authkey?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type SmsProviders = {
    items?: SmsProvider[];
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
    template_type?: string;
    template?: string;
};
type SmsTemplateReq = {
    name?: string;
    description?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    attachments?: any[];
    priority?: string;
};
type SmsTemplateRes = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    slug?: string;
    __v?: number;
};
type SmsTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    priority?: string;
    tags?: any[];
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SystemSmsTemplate = {
    is_system?: boolean;
    is_internal?: boolean;
    description?: string;
    tags?: any[];
    priority?: string;
    published?: boolean;
    _id?: string;
    slug?: string;
    name?: string;
    message?: SmsTemplateMessage;
    template_variables?: any;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type SmsTemplates = {
    items?: SmsTemplate[];
    page?: Page;
};
type SystemSmsTemplates = {
    items?: SystemSmsTemplate[];
    page?: Page;
};
type Notification = {
    title?: string;
    body?: string;
    subtitle?: string;
    icon?: string;
    deeplink?: string;
    click_action?: string;
};
type SystemNotificationUser = {
    type?: string;
    value?: string;
};
type SystemNotificationSettings = {
    sound?: boolean;
    priority?: string;
    time_to_live?: string;
};
type SystemNotification = {
    notification?: Notification;
    user?: SystemNotificationUser;
    settings?: SystemNotificationUser;
    _id?: string;
    group?: string;
    created_at?: string;
};
type SystemNotificationsPage = {
    type?: string;
    current?: number;
    size?: number;
    item_total?: number;
    has_next?: boolean;
};
type SystemNotifications = {
    items?: SystemNotification[];
    last_read_anchor?: number;
    page?: Page;
};
type PaymentGatewayConfigResponse = {
    excluded_fields: string[];
    display_fields: string[];
    app_id: string;
    created: boolean;
    success: boolean;
    aggregators?: any[];
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
type PaymentGatewayConfig = {
    key: string;
    secret: string;
    merchant_salt: string;
    config_type: string;
    is_active?: boolean;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
    is_active?: boolean;
};
type PaymentGatewayToBeReviewed = {
    success: boolean;
    aggregator: string[];
};
type ErrorCodeAndDescription = {
    code: string;
    description: string;
};
type HttpErrorCodeAndResponse = {
    success: boolean;
    error: ErrorCodeAndDescription;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentApp = {
    code?: string;
    display_name?: string;
    package_name?: string;
    logos?: PaymentModeLogo;
};
type PaymentModeList = {
    timeout?: number;
    card_brand?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    nickname?: string;
    card_name?: string;
    merchant_code?: string;
    card_isin?: string;
    card_type?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    exp_month?: number;
    cod_limit_per_order?: number;
    card_fingerprint?: string;
    remaining_limit?: number;
    aggregator_name: string;
    code?: string;
    intent_flow?: boolean;
    intent_app?: IntentApp[];
    fynd_vpa?: string;
    logo_url?: PaymentModeLogo;
    expired?: boolean;
    intent_app_error_list?: string[];
    exp_year?: number;
    display_priority?: number;
    card_number?: string;
    retry_count?: number;
    display_name?: string;
    cod_limit?: number;
    card_token?: string;
    card_issuer?: string;
    name?: string;
    card_id?: string;
    card_reference?: string;
    card_brand_image?: string;
};
type RootPaymentMode = {
    display_name: string;
    aggregator_name?: string;
    save_card?: boolean;
    list?: PaymentModeList[];
    anonymous_enable?: boolean;
    name: string;
    is_pay_by_card_pl?: boolean;
    display_priority: number;
    add_card_enabled?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    customers: any;
    is_default: boolean;
    unique_transfer_no: any;
    more_attributes: any;
    transfer_type: string;
    payouts_aggregators: any[];
    is_active: boolean;
};
type PayoutBankDetails = {
    state?: string;
    branch_name?: string;
    account_holder?: string;
    city?: string;
    ifsc_code: string;
    pincode?: number;
    country?: string;
    account_no?: string;
    bank_name?: string;
    account_type: string;
};
type PayoutRequest = {
    aggregator: string;
    users: any;
    transfer_type: string;
    unique_external_id: string;
    bank_details: PayoutBankDetails;
    is_active: boolean;
};
type PayoutResponse = {
    aggregator: string;
    payouts: any;
    unique_transfer_no: string;
    users: any;
    success: boolean;
    created: boolean;
    transfer_type: string;
    payment_status: string;
    bank_details: any;
    is_active: boolean;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_default: boolean;
    is_active: boolean;
};
type UpdatePayoutRequest = {
    is_default: boolean;
    is_active: boolean;
    unique_external_id: string;
};
type DeletePayoutResponse = {
    success: boolean;
};
type SubscriptionPaymentMethodResponse = {
    success: boolean;
    data: any[];
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    success: boolean;
    aggregator: string;
    config: any;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    success: boolean;
    data: any;
};
type RefundAccountResponse = {
    success: boolean;
    message: string;
    data?: any;
    is_verified_flag?: boolean;
};
type NotFoundResourceError = {
    code: string;
    success: boolean;
    description: string;
};
type BankDetailsForOTP = {
    account_holder: string;
    branch_name: string;
    ifsc_code: string;
    account_no: string;
    bank_name: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    branch_name: string;
    bank_name: string;
    success?: boolean;
};
type OrderBeneficiaryDetails = {
    ifsc_code: string;
    email: string;
    title: string;
    subtitle: string;
    beneficiary_id: string;
    id: number;
    account_holder: string;
    mobile?: string;
    modified_on: string;
    transfer_mode: string;
    account_no: string;
    bank_name: string;
    is_active: boolean;
    comment?: string;
    delights_user_name?: string;
    created_on: string;
    branch_name?: string;
    display_name: string;
    address: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    payment_gateway?: string;
    current_status?: string;
    order_id?: string;
    payment_id?: string;
    extra_meta?: any;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    amount: number;
    name?: string;
    mode: string;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    success: boolean;
    message: string;
    order_id: string;
};
type PlatformPaymentOptions = {
    anonymous_cod?: boolean;
    cod_amount_limit?: number;
    payment_selection_lock?: any;
    methods: any;
    callback_url?: any;
    source: string;
    mode_of_payment: string;
    cod_charges?: number;
    enabled: boolean;
};
type PlatfromPaymentConfig = {
    success: boolean;
    message: string;
    data: PlatformPaymentOptions;
};
type UpdatePlatformPaymentConfig = {
    anonymous_cod?: boolean;
    cod_amount_limit?: number;
    payment_selection_lock?: any;
    methods: any;
    cod_charges?: number;
};
type CODdata = {
    usages: number;
    remaining_limit: number;
    user_id: string;
    limit: number;
    is_active: boolean;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    mobileno: string;
    merchant_user_id: string;
    is_active: boolean;
};
type SetCODOptionResponse = {
    success: boolean;
    message: string;
};
type GetActivityStatus = {
    activity_history: ActivityHistory;
};
type ActivityHistory = {
    createdat?: string;
    message?: string;
    type?: string;
    user?: string;
};
type CanBreakRequestBody = {
    shipment_ids: string[];
};
type CanBreakResponse = {
    status: boolean;
    valid_actions: any;
};
type FailedOrders = {
    orders: FailOrder;
};
type FailOrder = {
    updated_at?: string;
    _id?: string;
    reason?: string;
    marketplace_order?: MarketplaceOrder;
    marketplace_order_id?: string;
    created_at?: string;
    app_id?: string;
    marketplace?: string;
    company_id?: number;
};
type MarketplaceOrder = {
    order_status_url?: string;
    admin_graphql_api_id?: string;
    email?: string;
    test?: boolean;
    note?: string;
    total_price?: string;
    app_id?: number;
    total_discounts_set?: TotalDiscountsSet;
    total_price_set?: TotalPriceSet;
    total_tax_set?: TotalTaxSet;
    gateway?: string;
    name?: string;
    subtotal_price_set?: SubtotalPriceSet;
    number?: number;
    buyer_accepts_marketing?: boolean;
    contact_email?: string;
    token?: string;
    source_name?: string;
    payment_gateway_names?: any[];
    presentment_currency?: string;
    subtotal_price?: string;
    processed_at?: string;
    order_number?: number;
    total_tip_received?: string;
    id?: number;
    confirmed?: boolean;
    currency?: string;
    total_line_items_price?: string;
    line_items?: LineItems;
    created_at?: string;
    updated_at?: string;
    total_weight?: number;
    billing_address?: BillingAddress;
    total_shipping_price_set?: TotalShippingPriceSet;
    customer?: Customer;
    total_discounts?: string;
    total_line_items_price_set?: TotalLineItemsPriceSet;
    tags?: string;
    total_price_usd?: string;
    user_id?: number;
    total_tax?: string;
    processing_method?: string;
    shipping_address?: OrderShippingAddress;
    taxes_included?: boolean;
    financial_status?: string;
};
type TotalDiscountsSet = {
    presentment_money?: PresentmentMoney;
    shop_money?: ShopMoney;
};
type PresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type ShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalPriceSet = {
    shop_money?: TotalPriceSetShopMoney;
    presentment_money?: TotalPriceSetPresentmentMoney;
};
type TotalPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalTaxSet = {
    shop_money?: TotalTaxSetShopMoney;
    presentment_money?: TotalTaxSetPresentmentMoney;
};
type TotalTaxSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalTaxSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type SubtotalPriceSet = {
    shop_money?: SubtotalPriceSetShopMoney;
    presentment_money?: SubtotalPriceSetPresentmentMoney;
};
type SubtotalPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type SubtotalPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type LineItems = {
    sku?: string;
    fulfillable_quantity?: number;
    grams?: number;
    total_discount?: string;
    article?: LineItemsArticle;
    title?: string;
    variant_inventory_management?: string;
    id?: number;
    variant_id?: number;
    variant_title?: string;
    product_exists?: boolean;
    price?: string;
    admin_graphql_api_id?: string;
    quantity?: number;
    vendor?: string;
    fulfillment_service?: string;
    taxable?: boolean;
    name?: string;
    product_id?: number;
    price_set?: PriceSet;
    tax_lines?: TaxLines;
    requires_shipping?: boolean;
    gift_card?: boolean;
    total_discount_set?: TotalDiscountSet;
};
type LineItemsArticle = {
    quantities?: Quantities;
    old_article_uid?: string;
    total_quantity?: number;
    manufacturer?: Manufacturer;
    price?: ArticlePrice;
    track_inventory?: boolean;
    company?: Company;
    is_active?: boolean;
    date_meta?: FailOrderDateMeta;
    fragile?: boolean;
    marketplace_identifiers?: MarketplaceIdentifiers;
    size?: string;
    is_set?: boolean;
    dimension?: Dimension;
    weight?: Weight;
    store?: Store;
    meta?: ArticleMeta;
    uid?: string;
    brand?: ArticleBrand;
    item_id?: number;
    fynd_article_code?: string;
    _id?: string;
    identifier?: LineItemsArticleIdentifier;
    seller_identifier?: string;
    fynd_item_code?: string;
    country_of_origin?: string;
};
type Quantities = {
    not_available?: NotAvailable;
    sellable?: Sellable;
    order_committed?: OrderCommitted;
    damaged?: Damaged;
};
type NotAvailable = {
    count?: number;
    updated_at?: string;
};
type Sellable = {
    count?: number;
    updated_at?: string;
};
type OrderCommitted = {
    count?: number;
    updated_at?: string;
};
type Damaged = {
    updated_at?: string;
    count?: number;
};
type Manufacturer = {
    is_default?: boolean;
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
    company_type?: string;
    business_type?: string;
    company_name?: string;
    created_on?: string;
    pan_no?: string;
    return_allowed?: boolean;
    meta?: string;
    exchange_allowed?: boolean;
    agreement_start_date?: string;
    exchange_within_days?: number;
    payment_procesing_charge?: number;
    fynd_a_fit_available?: boolean;
    modified_on?: string;
    return_within_days?: number;
};
type FailOrderDateMeta = {
    added_on_store?: string;
    inventory_updated_on?: string;
    created_on?: string;
    modified_on?: string;
};
type MarketplaceIdentifiers = {
    tatacliq_luxury?: TatacliqLuxury;
};
type TatacliqLuxury = {
    sku?: string;
};
type Dimension = {
    height?: number;
    width?: number;
    unit?: string;
    length?: number;
    is_default?: boolean;
};
type Weight = {
    is_default?: boolean;
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
    sku_code?: string;
};
type PriceSet = {
    shop_money?: PriceSetShopMoney;
    presentment_money?: PriceSetPresentmentMoney;
};
type PriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type PriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type TaxLines = {
    title?: string;
    price?: string;
    rate?: number;
    price_set?: TaxLinesPriceSet;
};
type TaxLinesPriceSet = {
    shop_money?: TaxLinesPriceSetShopMoney;
    presentment_money?: TaxLinesPriceSetPresentmentMoney;
};
type TaxLinesPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TaxLinesPriceSetPresentmentMoney = {
    currency_code?: string;
    amount?: string;
};
type TotalDiscountSet = {
    presentment_money?: TotalDiscountSetPresentmentMoney;
    shop_money?: TotalDiscountSetShopMoney;
};
type TotalDiscountSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalDiscountSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type BillingAddress = {
    address1?: string;
    city?: string;
    zip?: string;
    last_name?: string;
    address2?: string;
    latitude?: number;
    longitude?: number;
    province_code?: string;
    phone?: string;
    company?: string;
    name?: string;
    country?: string;
    country_code?: string;
    first_name?: string;
    province?: string;
};
type TotalShippingPriceSet = {
    shop_money?: TotalShippingPriceSetShopMoney;
    presentment_money?: TotalShippingPriceSetPresentmentMoney;
};
type TotalShippingPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalShippingPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type Customer = {
    created_at?: string;
    id?: number;
    last_name?: string;
    state?: string;
    last_order_id?: number;
    note?: string;
    verified_email?: boolean;
    phone?: string;
    accepts_marketing?: boolean;
    first_name?: string;
    tags?: string;
    last_order_name?: string;
    orders_count?: number;
    total_spent?: string;
    tax_exempt?: boolean;
    currency?: string;
    accepts_marketing_updated_at?: string;
    email?: string;
    updated_at?: string;
    admin_graphql_api_id?: string;
    default_address?: DefaultAddress;
};
type DefaultAddress = {
    last_name?: string;
    name?: string;
    province_code?: string;
    country_code?: string;
    is_default?: boolean;
    id?: number;
    customer_id?: number;
    first_name?: string;
    address1?: string;
    phone?: string;
    country_name?: string;
    company?: string;
    address2?: string;
    city?: string;
    province?: string;
    country?: string;
    zip?: string;
};
type TotalLineItemsPriceSet = {
    shop_money?: TotalLineItemsPriceSetShopMoney;
    presentment_money?: TotalLineItemsPriceSetPresentmentMoney;
};
type TotalLineItemsPriceSetShopMoney = {
    amount?: string;
    currency_code?: string;
};
type TotalLineItemsPriceSetPresentmentMoney = {
    amount?: string;
    currency_code?: string;
};
type OrderShippingAddress = {
    address1?: string;
    zip?: string;
    address2?: string;
    country_code?: string;
    country?: string;
    last_name?: string;
    province_code?: string;
    first_name?: string;
    phone?: string;
    province?: string;
    latitude?: number;
    longitude?: number;
    city?: string;
    company?: string;
    name?: string;
};
type OrderListing = {
    items: OrderItems[];
    filters: Filters;
    next_order_status: any;
    page: PlatformOrderPage;
    applied_filters: AppliedFilters;
};
type OrderItems = {
    user?: PlatformOrderUserInfo;
    delivery_address?: PlatformDeliveryAddress;
    channel?: Channel;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipment;
    created_at?: string;
    total_shipments_in_order?: number;
};
type PlatformOrderUserInfo = {
    mobile?: string;
    first_name?: string;
    gender?: string;
    email?: string;
    last_name?: string;
    is_anonymous_user?: boolean;
    uid?: number;
    avis_user_id?: string;
};
type PlatformDeliveryAddress = {
    area?: string;
    state?: string;
    country?: string;
    version?: string;
    address1?: string;
    updated_at?: string;
    city?: string;
    landmark?: string;
    created_at?: string;
    name?: string;
    address?: string;
    phone?: string;
    latitude?: number;
    longitude?: number;
    address_type?: string;
    email?: string;
    pincode?: string;
    address2?: string;
    contact_person?: string;
    address_category?: string;
};
type Channel = {
    name?: string;
    logo?: string;
};
type PlatformApplication = {
    id?: string;
};
type PlatformShipment = {
    status?: PlatformShipmentStatus;
    bags?: Bags;
    prices?: ShipmentPrices;
    id?: string;
    gst?: ShipmentGst;
    priority?: number;
    priority_text?: string;
    lock_status?: boolean;
    ordering_channel?: string;
    total_shipment_bags?: number;
};
type PlatformShipmentStatus = {
    id?: number;
    bag_list?: number[];
    created_at?: string;
    status?: string;
    name?: string;
    progress?: number;
    shipment_id?: string;
    current_shipment_status?: string;
    color_code?: string;
};
type Bags = {
    item?: BagItem;
    id?: number;
};
type BagItem = {
    id?: number;
    size?: string;
    slug_key?: string;
    can_return?: boolean;
    brand_id?: number;
    l2_category?: string[];
    name?: string;
    code?: string;
    can_cancel?: boolean;
    attributes?: BagItemAttributes;
    l3_category_name?: string;
    l3_category?: number;
    l1_category?: string[];
    image?: string[];
    brand?: string;
    last_updated_at?: string;
};
type BagItemAttributes = {
    item_code?: string;
    brand_name?: string;
    country_of_origin?: string;
};
type ShipmentPrices = {
    refund_amount?: number;
    cashback_applied?: number;
    transfer_price?: number;
    coupon_value?: number;
    amount_paid?: number;
    delivery_charge?: number;
    coupon_effective_discount?: number;
    cod_charges?: number;
    refund_credit?: number;
    added_to_fynd_cash?: boolean;
    gst_tax_percentage?: number;
    price_marked?: number;
    price_effective?: number;
    discount?: number;
    promotion_effective_discount?: number;
    amount_paid_roundoff?: number;
    fynd_credits?: number;
    brand_calculated_amount?: number;
    cashback?: number;
    value_of_good?: number;
};
type Payments = {
    is_active?: boolean;
    display_name?: string;
    logo?: string;
    source?: string;
    source_nickname?: string;
    display_priority?: number;
    id?: number;
    mode?: string;
    payment_identifier?: string;
};
type Filters = {
    stage?: Stage;
    stages?: Stages;
};
type Stage = {
    text?: string;
    value?: string;
    is_default?: boolean;
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
type PlatformOrderPage = {
    next?: string;
    previous?: string;
    type?: string;
    size?: number;
    current?: number;
    has_next?: boolean;
    total?: number;
    item_total?: ItemTotal;
};
type AppliedFilters = {
    stage?: string;
    stores?: string[];
    deployment_stores?: string[];
    dp?: number[];
    from_date?: string;
    to_date?: string;
};
type OrderDetails = {
    items: OrderPicklistListing[];
    page: PlatformOrderPage;
    filters: Filters;
    next_order_status: any;
    applied_filters: AppliedFilters;
};
type OrderDetailsItem = {
    user?: PlatformOrderUserInfo;
    delivery_address?: PlatformDeliveryAddress;
    channel?: Channel;
    fyndstore_emp?: any;
    ordering_store?: any;
    breakup_values?: PlatformBreakupValues;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipmentDetails;
    created_at?: string;
    total_shipments_in_order?: number;
    payments?: ItemsPayments;
    payment_methods?: any;
};
type PlatformBreakupValues = {
    display?: string;
    value?: number;
    name?: string;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type PlatformShipmentDetails = {
    status?: PlatformShipmentDetailsStatus;
    bags?: BagsDetails;
    prices?: ShipmentPrices;
    breakup_values?: ShipmentBreakupValues;
    id?: string;
    dp_details?: DpDetails;
    payment_methods?: any;
    invoice?: ShipmentInvoice;
    fulfilling_store?: PlatformFulfillingStore;
    payments?: Payments;
    gst?: ShipmentGst;
    company?: Company;
    brand?: PlatformShipmentDetailsBrand;
    coupon?: any;
    order_source?: string;
    is_not_fynd_source?: boolean;
    can_break?: any;
    comment?: string;
    promise?: Promise;
    tracking_details?: ShipmentTrackingDetails;
    is_fynd_coupon?: boolean;
    order_type?: string;
    total_shipment_bags?: number;
    pod?: any;
    lock_status?: boolean;
    priority?: number;
    priority_text?: string;
    ordering_channel?: string;
    credit_note_id?: string;
    auto_trigger_dp_assignment?: boolean;
    packaging_type?: string;
    dates?: ShipmentDates;
};
type PlatformShipmentDetailsStatus = {
    id?: number;
    bag_list?: number[];
    created_at?: string;
    status?: string;
    name?: string;
    progress?: number;
    shipment_id?: string;
    current_shipment_status?: string;
    color_code?: string;
};
type BagsDetails = {
    financial_breakup?: BagFinancialBreakup[];
    status?: BagCurrStatus;
    item?: BagItem;
    article?: BagArticle;
    id?: number;
    prices?: BagPrices;
    gst_details?: GstDetails;
    breakup_values?: BagBreakupValues;
    update_time?: number;
    current_status?: BagCurrentStatus;
    bag_status?: BagStatus;
    can_cancel?: boolean;
    can_return?: boolean;
    payment_methods?: any;
};
type BagFinancialBreakup = {
    value_of_good?: number;
    hsn_code?: string;
    price_effective?: number;
    cod_charges?: number;
    gst_fee?: number;
    fynd_credits?: number;
    refund_amount?: number;
    cashback_applied?: number;
    transfer_price?: number;
    amount_paid_roundoff?: number;
    coupon_value?: number;
    amount_paid?: number;
    gst_tax_percentage?: number;
    size?: string;
    total_units?: number;
    discount?: number;
    coupon_effective_discount?: number;
    cashback?: number;
    promotion_effective_discount?: number;
    gst_tag?: string;
    delivery_charge?: number;
    refund_credit?: number;
    price_marked?: number;
    identifiers?: Identifiers;
    item_name?: string;
    added_to_fynd_cash?: boolean;
    brand_calculated_amount?: number;
};
type Identifiers = {
    ean?: string;
};
type BagCurrStatus = {
    enable_tracking?: boolean;
    is_customer_return_allowed?: boolean;
    is_active?: boolean;
    is_returnable?: boolean;
    can_be_cancelled?: boolean;
};
type BagArticle = {
    identifiers?: ArticleIdentifiers;
    esp_modified?: boolean;
    is_set?: boolean;
    size?: string;
    code?: string;
    set?: Set;
    seller_identifier?: string;
    return_config?: BagArticleReturnConfig;
    _id?: string;
    uid?: string;
    child_details?: any;
};
type ArticleIdentifiers = {
    ean?: string;
};
type Set = {
    quantity?: number;
    size_distribution?: SetSizeDistribution;
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
type GstDetails = {
    brand_calculated_amount?: number;
    gst_fee?: number;
    gst_tag?: string;
    hsn_code?: string;
    value_of_good?: number;
    gst_tax_percentage?: number;
    is_default_hsn_code?: boolean;
};
type BagBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type BagCurrentStatus = {
    updated_at?: string;
    bag_state_mapper?: BagStateMapper;
    status?: string;
    state_type?: string;
};
type BagStateMapper = {
    app_state_name?: string;
    is_active?: boolean;
    display_name?: string;
    name?: string;
    app_display_name?: string;
};
type BagStatus = {
    status?: string;
    state_type?: string;
    updated_at?: string;
    bag_state_mapper?: BagStatusBagStateMapper;
};
type BagStatusBagStateMapper = {
    is_active?: boolean;
    display_name?: string;
    name?: string;
    app_display_name?: string;
    app_state_name?: string;
};
type BagPrices = {
    cashback?: number;
    refund_credit?: number;
    coupon_value?: number;
    delivery_charge?: number;
    fynd_credits?: number;
    price_marked?: number;
    cashback_applied?: number;
    value_of_good?: number;
    amount_paid_roundoff?: number;
    amount_paid?: number;
    cod_charges?: number;
    price_effective?: number;
    refund_amount?: number;
    discount?: number;
};
type ShipmentBreakupValues = {
    name?: string;
    display?: string;
    value?: number;
};
type DpDetails = {
    gst_tag?: string;
};
type ShipmentInvoice = {
    payment_type?: string;
    updated_date?: string;
    invoice_url?: string;
    label_url?: string;
    payment_mode?: string;
    amount_to_collect?: number;
    rto_address?: RtoAddress;
};
type RtoAddress = {
    name?: string;
    id?: number;
    phone?: string;
    location_type?: string;
    store_address_json?: StoreAddressJson;
    code?: string;
    address1?: string;
    city?: string;
    country?: string;
    pincode?: string;
    company_id?: number;
    contact_person?: string;
    state?: string;
    store_email?: string;
    address2?: string;
};
type StoreAddressJson = {
    country?: string;
    updated_at?: string;
    area?: string;
    state?: string;
    address_type?: string;
    city?: string;
    pincode?: string;
    address1?: string;
    address2?: string;
    latitude?: number;
    longitude?: number;
    email?: string;
    phone?: string;
    created_at?: string;
    contact_person?: string;
    address_category?: string;
    version?: string;
    landmark?: string;
};
type PlatformFulfillingStore = {
    packaging_material_count?: number;
    location_type?: string;
    code?: string;
    city?: string;
    meta?: FulfillingStoreMeta;
    name?: string;
    is_active?: boolean;
    address1?: string;
    store_email?: string;
    is_archived?: boolean;
    state?: string;
    address2?: string;
    contact_person?: string;
    phone?: string;
    is_enabled_for_recon?: boolean;
    fulfillment_channel?: string;
    created_at?: string;
    id?: number;
    pincode?: string;
    brand_store_tags?: string[];
    company_id?: number;
    store_address_json?: FulfillingStoreStoreAddressJson;
    updated_at?: string;
    login_username?: string;
    country?: string;
};
type FulfillingStoreMeta = {
    additional_contact_details?: AdditionalContactDetails;
    documents?: Documents;
    gst_number?: string;
    display_name?: string;
    product_return_config?: ProductReturnConfig;
    allow_dp_assignment_from_fynd?: boolean;
    stage?: string;
    timing?: Timing;
};
type AdditionalContactDetails = {
    number?: string[];
};
type Documents = {
    gst?: Gst;
};
type Gst = {
    legal_name?: string;
    type?: string;
    value?: string;
    verified?: boolean;
};
type ProductReturnConfig = {
    on_same_store?: boolean;
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
    contact_person?: string;
    country?: string;
    pincode?: string;
    version?: string;
    created_at?: string;
    address_type?: string;
    city?: string;
    address1?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    updated_at?: string;
    address_category?: string;
};
type ShipmentGst = {
    brand_calculated_amount?: number;
    value_of_good?: number;
    gst_fee?: number;
};
type PlatformShipmentDetailsBrand = {
    credit_note_allowed?: boolean;
    brand_name?: string;
    modified_on?: string;
    id?: number;
    is_virtual_invoice?: boolean;
    created_on?: string;
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
    is_passed?: boolean;
    is_current?: boolean;
};
type ItemsPayments = {
    display_priority?: number;
    id?: number;
    is_active?: boolean;
    display_name?: string;
    logo?: string;
    payment_identifier?: string;
    source_nickname?: string;
    mode?: string;
    source?: string;
};
type PlatformOrderDetailsPage = {
    next?: string;
    previous?: string;
};
type ShipmentDates = {
    due_date?: string;
};
type OrderLanesCount = {
    stages: StageItem[];
};
type StageItem = {
    count?: number;
    text?: string;
    value?: string;
};
type UpdateOrderReprocessResponse = {
    status: string;
};
type PlatformOrderTrack = {
    success: boolean;
    request_id: string;
    message: string;
    mobile: string;
    country_code: string;
    resend_timer: number;
    resend_token?: string;
};
type OrderPicklistListing = {
    user?: PlatformOrderUserInfo;
    delivery_address?: PlatformDeliveryAddress;
    channel?: Channel;
    fyndstore_emp?: any;
    ordering_store?: any;
    breakup_values?: PlatformBreakupValues;
    id?: string;
    application?: PlatformApplication;
    shipments?: PlatformShipmentDetails;
    created_at?: string;
    total_shipments_in_order?: number;
    payments?: ItemsPayments;
    payment_methods?: any;
};
type Stages = {
    text?: string;
    value?: string;
    is_default?: boolean;
    filters?: StagesFilters;
};
type ItemTotal = {
    new?: number;
    processing?: number;
    returns?: number;
    all?: number;
};
type GetPingResponse = {
    ping: string;
};
type GetShipmentAddressResponse = {
    message: string;
    data: DataShipmentAddress;
    success: boolean;
};
type DataShipmentAddress = {
    city?: string;
    country?: string;
    pincode?: string;
    phone?: string;
    area?: string;
    address?: string;
    landmark?: string;
    state?: string;
    address_type?: string;
    address_category?: string;
    email?: string;
    name?: string;
};
type UpdateShipmentAddressRequest = {
    email: string;
    address: string;
    pincode: string;
    state: string;
    address_type: string;
    country: string;
    name: string;
    phone: string;
    area: string;
    landmark: string;
    city: string;
};
type UpdateShipmentAddressResponse = {
    success: boolean;
    message: string;
};
type ShipmentTrackResponse = {
    bag_list: ShipmentTrackResponseBagListItem[];
    message: string;
    order_value: number;
};
type ShipmentTrackResponseBagListItem = {
    enable_tracking?: boolean;
    price?: string;
    time_slot?: string;
    product_name?: string;
    can_return?: boolean;
    order_date?: string;
    is_try_at_home?: boolean;
    breakup_values?: ShipmentTrackResponseBagListItemBreakValues[];
    statuses?: ShipmentTrackResponseBagListItemStatuses[];
    is_active?: boolean;
    bag_id?: string;
    order_id?: string;
    size?: string;
    payment_mode_source?: string;
    dp_details?: ShipmentTrackResponseBagListItemDpDetails;
    product_id?: number;
    product_image?: ShipmentTrackResponseBagListItemsProductImage;
    brand_name?: string;
    price_marked?: string;
    status?: string;
    can_cancel?: boolean;
    payment_mode?: string;
    fynd_cash_msg?: string;
    delivery_address?: string;
};
type ShipmentTrackResponseBagListItemBreakValues = {
    name?: string;
    display?: string;
    value?: string;
};
type ShipmentTrackResponseBagListItemStatuses = {
    nps_rating?: number;
    nps_string?: string;
    progress_status?: ShipmentTrackResponseBagListItemStatusesProgress[];
    flow_type?: string;
    status_progress?: number;
    is_nps_done?: boolean;
    header_message?: string;
    is_delayed?: string;
    tracking_list?: ShipmentTrackResponseBagListItemStatusesTrack[];
};
type ShipmentTrackResponseBagListItemStatusesProgress = {
    title?: string;
    type?: string;
    state?: boolean;
};
type ShipmentTrackResponseBagListItemStatusesTrack = {
    status?: string;
    time?: string;
    is_passed?: boolean;
    is_current?: boolean;
};
type ShipmentTrackResponseBagListItemDpDetails = {
    tracking_no?: string;
    courier?: string;
};
type ShipmentTrackResponseBagListItemsProductImage = {
    aspect_ratio?: string;
    url?: string;
};
type UpdateShipmentStatusResponse = {
    shipments: any;
    error_shipments?: any[];
};
type UpdateShipmentStatusBody = {
    shipments: any;
    force_transition: boolean;
    task: boolean;
};
type ShipmentReasonsResponse = {
    success: boolean;
    message: string;
    reasons: ShipmentResponseReasons[];
};
type ShipmentResponseReasons = {
    reason_id?: number;
    reason?: string;
};
type PlatformShipmentTrack = {
    results: Results;
};
type Results = {
    awb?: string;
    updated_at?: string;
    last_location_recieved_at?: string;
    reason?: string;
    shipment_type?: string;
    status?: string;
    updated_time?: string;
    account_name?: string;
};
type ShipmentUpdateRequest = {
    bags: string[];
    reason: any;
    comments: string;
    action: string;
};
type ShipmentUpdateResponse = {
    success: boolean;
    message: string;
};
type UpdateProcessShipmenstRequestBody = {
    shipment_ids: string[];
    expected_status: string;
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
    code?: string;
    status?: number;
    meta?: any;
    message?: string;
    error?: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    is_active?: boolean;
};
type GetSearchWordsData = {
    result?: any;
    words?: string[];
    _custom_json?: any;
    uid?: string;
    app_id?: string;
    is_active?: boolean;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type AutocompletePageAction = {
    params?: any;
    query?: any;
    url?: string;
    type?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type Media = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type AutocompleteResult = {
    action?: AutocompleteAction;
    display?: string;
    logo?: Media;
    _custom_json?: any;
};
type CreateAutocompleteKeyword = {
    words?: string[];
    _custom_json?: any;
    results?: AutocompleteResult[];
    app_id?: string;
    is_active?: boolean;
};
type GetAutocompleteWordsData = {
    words?: string[];
    uid?: string;
    _custom_json?: any;
    results?: any[];
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    app_id?: string;
    words?: string[];
    _custom_json?: any;
};
type ProductBundleItem = {
    allow_remove?: boolean;
    max_quantity: number;
    product_uid: number;
    auto_add_to_cart?: boolean;
    min_quantity: number;
    auto_select?: boolean;
};
type GetProductBundleCreateResponse = {
    created_by?: any;
    slug: string;
    products: ProductBundleItem[];
    name: string;
    is_active: boolean;
    modified_by?: any;
    meta?: any;
    id?: string;
    page_visibility?: string[];
    company_id?: number;
    logo?: string;
    same_store_assignment?: boolean;
    created_on?: string;
    choice: string;
    modified_on?: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    created_by?: any;
    slug: string;
    products: ProductBundleItem[];
    name: string;
    is_active: boolean;
    modified_by?: any;
    meta?: any;
    page_visibility?: string[];
    company_id?: number;
    logo?: string;
    same_store_assignment?: boolean;
    created_on?: string;
    choice: string;
    modified_on?: string;
};
type ProductBundleUpdateRequest = {
    slug: string;
    products: ProductBundleItem[];
    name: string;
    is_active: boolean;
    modified_by?: any;
    meta?: any;
    page_visibility?: string[];
    company_id?: number;
    logo?: string;
    same_store_assignment?: boolean;
    choice: string;
    modified_on?: string;
};
type LimitedProductData = {
    identifier?: any;
    slug?: string;
    country_of_origin?: string;
    name?: string;
    attributes?: any;
    price?: any;
    uid?: number;
    short_description?: string;
    sizes?: string[];
    item_code?: string;
    quantity?: number;
    images?: string[];
};
type Size = {
    quantity?: number;
    is_available?: boolean;
    display?: string;
    value?: string;
};
type Price = {
    max_effective?: number;
    currency?: string;
    min_marked?: number;
    min_effective?: number;
    max_marked?: number;
};
type GetProducts = {
    allow_remove?: boolean;
    max_quantity?: number;
    product_uid?: number;
    product_details?: LimitedProductData;
    sizes?: Size[];
    auto_add_to_cart?: boolean;
    min_quantity?: number;
    price?: Price;
    auto_select?: boolean;
};
type GetProductBundleResponse = {
    products?: GetProducts[];
    slug?: string;
    name?: string;
    is_active?: boolean;
    meta?: any;
    company_id?: number;
    logo?: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    choice?: string;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Meta = {
    headers?: any;
    values?: any[];
    unit?: string;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    created_by?: any;
    title: string;
    name: string;
    brand_id?: number;
    modified_by?: any;
    description?: string;
    active?: boolean;
    id?: string;
    tag?: string;
    image?: string;
    company_id?: number;
    guide?: Guide;
    subtitle?: string;
    created_on?: string;
    modified_on?: string;
};
type SuccessResponse = {
    success?: boolean;
};
type SizeGuideResponse = {
    created_by?: any;
    title?: string;
    name?: string;
    brand_id?: number;
    modified_by?: any;
    active?: boolean;
    id?: string;
    tag?: string;
    company_id?: number;
    guide?: any;
    subtitle?: string;
    created_on?: string;
    modified_on?: string;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    moq?: ApplicationItemMOQ;
    is_cod?: boolean;
    _custom_meta?: MetaFields[];
    alt_text?: any;
    is_gift?: boolean;
    seo?: ApplicationItemSEO;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type MOQData = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type SEOData = {
    description?: any;
    title?: any;
};
type OwnerAppItemResponse = {
    moq?: MOQData;
    is_cod?: boolean;
    alt_text?: any;
    is_gift?: boolean;
    seo?: SEOData;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    values?: any[];
    data: any[];
};
type PageResponseType = {
    current: number;
    next: number;
    total_count: number;
    has_next: boolean;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    priority: number;
    slug?: string;
    name: string;
    logo?: string;
    key?: string;
    unit?: string;
    is_active: boolean;
    display_type: string;
};
type AppConfigurationDetail = {
    priority: number;
    template_slugs?: string[];
    slug: string;
    name?: string;
    attributes?: AttributeDetailsGroup[];
    app_id: string;
    logo?: string;
    is_active: boolean;
    is_default: boolean;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    priority: number;
    name?: string;
    default_key: string;
    app_id: string;
    logo?: string;
    key: string;
    is_active: boolean;
    is_default: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    detail?: any;
    variant?: any;
    compare?: any;
    similar?: any;
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingFilterMetaResponse = {
    units?: any[];
    display?: string;
    key?: string;
    filter_types?: string[];
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
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
    min: number;
    max: number;
};
type ConfigurationProductVariantConfig = {
    priority: number;
    name: string;
    size: ProductSize;
    logo?: string;
    key: string;
    is_active: boolean;
    display_type: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    priority: number;
    title?: string;
    size?: ProductSize;
    logo?: string;
    key: string;
    subtitle?: string;
    is_active: boolean;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type ConfigurationListingSortConfig = {
    priority: number;
    name?: string;
    logo?: string;
    key: string;
    is_active: boolean;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    condition?: string;
    sort?: string;
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map?: any;
    map_values?: any[];
};
type ConfigurationListingFilterConfig = {
    priority: number;
    name?: string;
    value_config?: ConfigurationListingFilterValue;
    type: string;
    display_name?: string;
    logo?: string;
    key: string;
    is_active: boolean;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type AppCatalogConfiguration = {
    product?: ConfigurationProduct;
    created_by?: any;
    config_id?: string;
    type?: string;
    modified_by?: any;
    listing?: ConfigurationListing;
    id?: string;
    app_id: string;
    config_type: string;
    created_on?: string;
    modified_on?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    product?: ConfigurationProduct;
    created_by?: any;
    config_id?: string;
    type?: string;
    modified_by?: any;
    listing?: ConfigurationListing;
    app_id: string;
    config_type: string;
    created_on?: string;
    modified_on?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    product?: GetCatalogConfigurationDetailsProduct;
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
    app_id: string;
    config_type: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    is_selected?: boolean;
    value?: string;
    name?: string;
};
type ProductFiltersValue = {
    min?: number;
    currency_symbol?: string;
    count?: number;
    selected_min?: number;
    query_format?: string;
    selected_max?: number;
    display: string;
    value: any;
    is_selected: boolean;
    max?: number;
    display_format?: string;
    currency_code?: string;
};
type ProductFiltersKey = {
    kind?: string;
    name: string;
    operators?: string[];
    display: string;
    logo?: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type GetCollectionQueryOptionResponse = {
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    operators: any;
};
type CollectionListingFilterTag = {
    is_selected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilterType = {
    is_selected?: boolean;
    display?: string;
    name?: string;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type BannerImage = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type GetCollectionDetailNest = {
    query?: CollectionQuery[];
    slug?: string;
    _schedule?: any;
    uid?: string;
    visible_facets_keys?: string[];
    type?: string;
    priority?: number;
    description?: string;
    badge?: any;
    allow_facets?: boolean;
    action?: Action;
    allow_sort?: boolean;
    cron?: any;
    name?: string;
    meta?: any;
    tag?: string[];
    banners?: ImageUrls;
    app_id?: string;
    logo?: Media1;
    is_active?: boolean;
};
type GetCollectionListingResponse = {
    page?: Page;
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
};
type CollectionSchedule = {
    end?: string;
    cron?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
    start?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type UserInfo = {
    username?: string;
    email?: string;
    user_id?: string;
    uid?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CreateCollection = {
    query?: CollectionQuery[];
    published?: boolean;
    slug: string;
    _schedule?: CollectionSchedule;
    visible_facets_keys?: string[];
    seo?: SeoDetail;
    type: string;
    sort_on?: string;
    is_visible?: boolean;
    _locale_language?: any;
    priority?: number;
    description?: string;
    badge?: CollectionBadge;
    allow_facets?: boolean;
    allow_sort?: boolean;
    created_by?: UserInfo;
    name: string;
    modified_by?: UserInfo;
    meta?: any;
    _custom_json?: any;
    banners: CollectionBanner;
    app_id: string;
    logo: CollectionImage;
    tags?: string[];
    is_active?: boolean;
};
type CollectionCreateResponse = {
    query?: CollectionQuery[];
    slug?: string;
    _schedule?: any;
    visible_facets_keys?: string[];
    type?: string;
    sort_on?: string;
    priority?: number;
    description?: string;
    badge?: any;
    allow_facets?: boolean;
    allow_sort?: boolean;
    cron?: any;
    name?: string;
    meta?: any;
    tag?: string[];
    banners?: ImageUrls;
    app_id?: string;
    logo?: BannerImage;
    is_active?: boolean;
};
type CollectionDetailResponse = {
    priority?: number;
    query?: CollectionQuery[];
    allow_sort?: boolean;
    slug?: string;
    _schedule?: any;
    cron?: any;
    name?: string;
    type?: string;
    description?: string;
    meta?: any;
    tag?: string[];
    banners?: ImageUrls;
    badge?: any;
    app_id?: string;
    logo?: Media1;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    is_active?: boolean;
};
type UpdateCollection = {
    query?: CollectionQuery[];
    published?: boolean;
    slug?: string;
    _schedule?: CollectionSchedule;
    visible_facets_keys?: string[];
    seo?: SeoDetail;
    type?: string;
    sort_on?: string;
    is_visible?: boolean;
    _locale_language?: any;
    priority?: number;
    description?: string;
    badge?: CollectionBadge;
    allow_facets?: boolean;
    allow_sort?: boolean;
    name?: string;
    modified_by?: UserInfo;
    meta?: any;
    _custom_json?: any;
    banners?: CollectionBanner;
    logo?: CollectionImage;
    tags?: string[];
    is_active?: boolean;
};
type Price1 = {
    min?: number;
    currency_symbol?: string;
    currency_code?: string;
    max?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductBrand = {
    logo?: Media1;
    action?: Action;
    name?: string;
    uid?: number;
};
type ProductDetailAttribute = {
    type?: string;
    value?: string;
    key?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductListingDetail = {
    slug: string;
    rating?: number;
    short_description?: string;
    uid?: number;
    price?: ProductListingPrice;
    highlights?: string[];
    color?: string;
    type?: string;
    has_variant?: boolean;
    similars?: string[];
    teaser_tag?: any;
    rating_count?: number;
    promo_meta?: any;
    tryouts?: string[];
    brand?: ProductBrand;
    description?: string;
    product_online_date?: string;
    sellable?: boolean;
    image_nature?: string;
    medias?: Media1[];
    item_type?: string;
    name?: string;
    discount?: string;
    attributes?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_code?: string;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    page?: Page;
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    query?: CollectionQuery[];
    item?: ItemQueryForUserCollection[];
    type?: string;
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightBrand = {
    available_articles?: number;
    name?: string;
    article_freshness?: number;
    total_sizes?: number;
    available_sizes?: number;
    total_articles?: number;
};
type CatalogInsightItem = {
    count?: number;
    sellable_count?: number;
    out_of_stock_count?: number;
};
type CatalogInsightResponse = {
    brand_distribution?: CatalogInsightBrand;
    item?: CatalogInsightItem;
};
type CrossSellingData = {
    products?: number;
    articles?: number;
};
type CrossSellingResponse = {
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    enabled?: boolean;
    opt_level: string;
    platform?: string;
    company_id?: number;
    store_ids?: number[];
    brand_ids?: number[];
};
type CompanyOptIn = {
    created_by?: any;
    enabled: boolean;
    opt_level: string;
    modified_by?: any;
    platform: string;
    company_id: number;
    store_ids: number[];
    brand_ids: number[];
    created_on: number;
    modified_on: number;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    business_type?: string;
    company_type?: string;
    name?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    total_article?: number;
    company_id?: number;
    brand_name?: string;
    brand_id?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    brand?: number;
    store?: number;
    company?: string;
};
type StoreDetail = {
    store_type?: string;
    name?: string;
    display_name?: string;
    address?: any;
    additional_contacts?: any[];
    documents?: any[];
    uid?: number;
    manager?: any;
    company_id?: number;
    timing?: any;
    store_code?: string;
    created_on?: string;
    modified_on?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    mandatory?: boolean;
    multi?: boolean;
    type: string;
    format?: string;
    allowed_values?: string[];
    range?: AttributeSchemaRange;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    priority?: number;
    indexing: boolean;
    depends_on?: string[];
};
type GenderDetail = {
    slug?: string;
    is_nested?: boolean;
    name?: string;
    schema?: AttributeMaster;
    description?: string;
    meta?: AttributeMasterMeta;
    enabled_for_end_consumer?: boolean;
    id?: string;
    details?: AttributeMasterDetails;
    filters?: AttributeMasterFilter;
    logo?: string;
    departments?: string[];
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    code?: string;
    status?: number;
    meta?: any;
    errors?: any;
    message?: string;
};
type UserSerializer = {
    _id?: string;
    contact?: string;
    user_id?: string;
    uid?: string;
    username?: string;
};
type GetDepartment = {
    item_type?: string;
    created_by?: UserSerializer;
    slug?: string;
    name?: string;
    modified_by?: UserSerializer;
    uid?: number;
    synonyms?: string[];
    priority_order?: number;
    search?: string;
    created_on?: string;
    logo?: string;
    page_no?: number;
    is_active?: boolean;
    page_size?: number;
    modified_on?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    code?: string;
    status?: number;
    meta?: any;
    errors?: any;
    message?: string;
};
type DepartmentCreateUpdate = {
    slug?: string;
    name: string;
    _cls?: string;
    uid?: number;
    _custom_json?: any;
    synonyms?: string[];
    priority_order: number;
    logo: string;
    platforms?: any;
    tags?: string[];
    is_active?: boolean;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    super_user?: boolean;
    contact?: string;
    username: string;
    user_id: string;
};
type DepartmentModel = {
    verified_by?: UserDetail;
    created_by?: UserDetail;
    slug?: any;
    _id?: any;
    name: any;
    is_active?: boolean;
    modified_by?: UserDetail;
    _cls?: any;
    uid?: number;
    _custom_json?: any;
    synonyms?: any[];
    priority_order: number;
    logo: string;
    verified_on?: string;
    created_on: string;
    modified_on: string;
};
type ProductTemplate = {
    created_by?: any;
    slug: string;
    name?: string;
    modified_by?: any;
    description?: string;
    is_physical: boolean;
    attributes?: string[];
    tag?: string;
    is_archived?: boolean;
    logo?: string;
    categories?: string[];
    created_on?: string;
    departments?: string[];
    is_active?: boolean;
    is_expirable: boolean;
    modified_on?: string;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    product_group_tag?: any;
    variants?: any;
    slug?: any;
    currency?: any;
    product_publish?: any;
    short_description?: any;
    highlights?: any;
    category_slug?: any;
    brand_uid?: any;
    is_active?: any;
    media?: any;
    teaser_tag?: any;
    description?: any;
    no_of_boxes?: any;
    is_dependent?: any;
    command?: any;
    custom_order?: any;
    item_type?: any;
    country_of_origin?: any;
    multi_size?: any;
    size_guide?: any;
    name?: any;
    trader_type?: any;
    return_config?: any;
    trader?: any;
    sizes?: any;
    tags?: any;
    item_code?: any;
    hsn_code?: any;
};
type GlobalValidation = {
    required?: string[];
    title?: string;
    type?: string;
    description?: string;
    properties?: Properties;
    definitions?: any;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    slug: string;
    name?: string;
    description?: string;
    is_physical: boolean;
    attributes?: string[];
    id?: string;
    tag?: string;
    is_archived?: boolean;
    logo?: string;
    categories?: string[];
    departments?: string[];
    is_active?: boolean;
    is_expirable: boolean;
};
type TemplatesValidationResponse = {
    data?: TemplateValidationData;
    template_details?: TemplateDetails;
};
type InventoryValidationResponse = {
    data?: any;
    message?: string;
};
type HSNData = {
    country_of_origin?: string[];
    hsn_code?: string[];
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadItemsData = {
    brand?: string[];
    templates?: string[];
    type?: string;
};
type ProductDownloadsItems = {
    created_by?: VerifiedBy;
    data?: ProductDownloadItemsData;
    status?: string;
    url?: string;
    seller_id?: number;
    id?: string;
    trigger_on?: string;
    completed_on?: string;
    task_id?: string;
    template_tags?: any;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type Media2 = {
    landscape: string;
    logo: string;
    portrait: string;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type Category = {
    priority?: number;
    created_by?: any;
    slug?: string;
    name: string;
    marketplaces?: CategoryMapping;
    tryouts?: string[];
    level: number;
    media?: Media2;
    modified_by?: any;
    id?: string;
    uid?: number;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    created_on?: string;
    departments: number[];
    is_active: boolean;
    modified_on?: string;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    priority?: number;
    slug?: string;
    name: string;
    marketplaces?: CategoryMapping;
    tryouts?: string[];
    level: number;
    media?: Media2;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    departments: number[];
    is_active: boolean;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
    manufacturing_time?: number;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type ReturnConfig = {
    returnable: boolean;
    time: number;
    unit: string;
};
type Trader = {
    address?: string[];
    name: any;
    type?: string;
};
type ProductCreateUpdateSchemaV2 = {
    variant_media?: any;
    variants?: any;
    product_group_tag?: string[];
    slug: string;
    currency: string;
    bulk_job_id?: string;
    product_publish?: ProductPublish;
    is_image_less_product?: boolean;
    short_description?: string;
    uid?: number;
    company_id: number;
    net_quantity?: NetQuantity;
    highlights?: string[];
    category_slug: string;
    brand_uid: number;
    is_active?: boolean;
    media?: Media1[];
    requester?: string;
    is_set?: boolean;
    change_request_id?: any;
    teaser_tag?: TeaserTag;
    departments: number[];
    template_tag: string;
    description?: string;
    no_of_boxes?: number;
    is_dependent?: boolean;
    custom_order?: CustomOrder;
    tax_identifier: TaxIdentifier;
    item_type: string;
    action?: string;
    variant_group?: any;
    country_of_origin: string;
    multi_size?: boolean;
    size_guide?: string;
    name: any;
    return_config: ReturnConfig;
    attributes: any;
    _custom_json?: any;
    trader: Trader[];
    tags?: string[];
    item_code: any;
};
type ProductVariants = {
    brand_uid?: number;
    name?: string;
    category_uid?: number;
    media?: Media1[];
    uid?: number;
    item_code?: string;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    suggestion?: string;
    slug: string;
    variant?: boolean;
    schema: AttributeMaster;
    details: AttributeMasterDetails;
    filters: AttributeMasterFilter;
    created_on?: string;
    modified_on?: string;
    departments: string[];
    is_nested?: boolean;
    description?: string;
    enabled_for_end_consumer?: boolean;
    raw_key?: string;
    synonyms?: any;
    unit?: string;
    created_by?: any;
    name?: string;
    modified_by?: any;
    logo?: string;
    tags?: string[];
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Image = {
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
    url?: string;
};
type Logo = {
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
    url?: string;
};
type Brand = {
    logo?: Logo;
    name?: string;
    uid?: number;
};
type Product = {
    variants?: any;
    slug?: string;
    currency?: string;
    product_publish?: ProductPublished;
    short_description?: string;
    uid?: number;
    l3_mapping?: string[];
    highlights?: string[];
    images?: Image[];
    category_slug?: string;
    primary_color?: string;
    brand_uid?: number;
    color?: string;
    category_uid?: number;
    media?: Media1[];
    is_active?: boolean;
    is_set?: boolean;
    departments?: number[];
    template_tag?: string;
    brand?: Brand;
    description?: string;
    id?: string;
    is_dependent?: boolean;
    image_nature?: string;
    custom_order?: any;
    tax_identifier?: any;
    item_type?: string;
    is_expirable?: boolean;
    variant_group?: any;
    country_of_origin?: string;
    multi_size?: boolean;
    size_guide?: string;
    name?: string;
    all_sizes?: any[];
    is_physical?: boolean;
    _custom_json?: any;
    sizes?: any[];
    item_code?: string;
    hsn_code?: string;
};
type ValidateIdentifier = {
    primary?: boolean;
    gtin_value: string;
    gtin_type: string;
};
type AllSizes = {
    item_width: number;
    item_height: number;
    item_weight: number;
    item_length: number;
    item_dimensions_unit_of_measure: string;
    item_weight_unit_of_measure: any;
    size: any;
    identifiers?: ValidateIdentifier[];
};
type ListALLSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type UserDetail1 = {
    full_name?: string;
    username?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    failed_records?: string[];
    succeed?: number;
    created_by?: UserDetail1;
    is_active?: boolean;
    modified_by?: UserDetail1;
    company_id?: number;
    cancelled?: number;
    total?: number;
    template?: ProductTemplate;
    cancelled_records?: string[];
    template_tag?: string;
    created_on?: string;
    stage?: string;
    failed?: number;
    file_path?: string;
    modified_on?: string;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    username?: string;
    email?: string;
    user_id?: string;
    uid?: string;
};
type BulkJob = {
    succeed?: number;
    failed_records?: any[];
    created_by?: UserInfo1;
    is_active?: boolean;
    modified_by?: UserInfo1;
    custom_template_tag?: string;
    tracking_url?: string;
    company_id: number;
    cancelled?: number;
    total?: number;
    cancelled_records?: any[];
    template_tag?: string;
    failed?: number;
    stage?: string;
    created_on: string;
    file_path?: string;
    modified_on?: string;
};
type BulkResponse = {
    created_by?: UserInfo1;
    is_active?: boolean;
    modified_by?: UserInfo1;
    batch_id: string;
    created_on: string;
    modified_on?: string;
};
type BulkProductRequest = {
    company_id: number;
    data: any[];
    template_tag: string;
    batch_id: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type UserCommon = {
    company_id?: number;
    username?: string;
    user_id?: string;
};
type Items = {
    modified_on?: string;
    succeed?: number;
    created_by?: UserCommon;
    failed_records?: string[];
    is_active?: boolean;
    modified_by?: UserCommon;
    tracking_url?: string;
    id?: string;
    company_id?: number;
    cancelled?: number;
    total?: number;
    cancelled_records?: string[];
    failed?: number;
    stage?: string;
    retry?: number;
    created_on?: string;
    file_path?: string;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    company_id?: number;
    user: any;
    url: string;
};
type ProductSizeDeleteDataResponse = {
    company_id?: number;
    item_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    currency?: string;
    price_transfer?: number;
    uid?: string;
    price_effective?: number;
    size?: string;
    item_id?: number;
    sellable_quantity?: number;
    inventory_updated_on?: string;
    seller_identifier?: string;
    store?: any;
    price?: number;
    quantity?: number;
    identifiers?: any;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type SetSize = {
    size: string;
    pieces: number;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    size_distribution: SizeDistribution;
    name?: string;
    quantity?: number;
};
type GTIN = {
    primary?: boolean;
    gtin_value: any;
    gtin_type: string;
};
type InvSize = {
    item_width?: number;
    store_code: string;
    currency: string;
    item_height?: number;
    set?: InventorySet;
    price?: number;
    price_transfer?: number;
    price_effective: number;
    item_weight?: number;
    expiration_date?: string;
    is_set?: boolean;
    item_length?: number;
    item_dimensions_unit_of_measure?: string;
    item_weight_unit_of_measure?: string;
    size: any;
    quantity: number;
    identifiers: GTIN[];
};
type ItemQuery = {
    brand_uid?: number;
    item_code?: string;
    uid?: number;
};
type InventoryRequest = {
    sizes: InvSize[];
    company_id: number;
    item: ItemQuery;
};
type PriceMeta = {
    marked: number;
    currency: string;
    effective: number;
    transfer: number;
    updated_at?: string;
    tp_notes?: any;
};
type CompanyMeta = {
    id: number;
};
type DimensionResponse = {
    width: number;
    length: number;
    height: number;
    unit: string;
    is_default: boolean;
};
type BrandMeta = {
    id: number;
    name: string;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type ReturnConfig1 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type StoreMeta = {
    id: number;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type InventorySellerResponse = {
    identifier: any;
    fynd_meta?: any;
    uid: string;
    item_id: number;
    price: PriceMeta;
    trace_id?: string;
    company: CompanyMeta;
    dimension: DimensionResponse;
    expiration_date?: string;
    is_set?: boolean;
    raw_meta?: any;
    seller_identifier: string;
    fynd_item_code: string;
    fynd_article_code: string;
    brand: BrandMeta;
    set?: InventorySet;
    total_quantity: number;
    quantities?: Quantities;
    tax_identifier?: any;
    stage?: string;
    country_of_origin: string;
    created_by?: UserSerializer;
    fragile: boolean;
    weight: WeightResponse;
    added_on_store?: string;
    return_config?: ReturnConfig1;
    meta?: any;
    track_inventory?: boolean;
    modified_by?: UserSerializer;
    _custom_json?: any;
    trader?: Trader1[];
    size: string;
    tags?: string[];
    store: StoreMeta;
    is_active?: boolean;
    manufacturer: ManufacturerResponse;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    failed_records?: string[];
    modified_on?: string;
    created_by?: any;
    succeed?: number;
    is_active?: boolean;
    modified_by?: any;
    id?: string;
    cancelled?: number;
    company_id?: number;
    total?: number;
    cancelled_records?: string[];
    failed?: number;
    stage?: string;
    created_on?: string;
    file_path?: string;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    trace_id?: string;
    currency?: string;
    item_dimensions_unit_of_measure?: string;
    total_quantity?: number;
    price?: number;
    price_effective?: number;
    price_marked?: number;
    expiration_date?: string;
    store_code: string;
    item_weight_unit_of_measure?: string;
    tags?: string[];
    seller_identifier: string;
    quantity?: number;
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    company_id: number;
    user?: any;
    batch_id: string;
};
type InventoryExportJob = {
    status?: string;
    url?: string;
    seller_id: number;
    trigger_on?: string;
    completed_on?: string;
    request_params?: any;
    task_id: string;
};
type InventoryExportRequest = {
    brand?: number[];
    store?: number[];
    type?: string;
};
type InventoryExportResponse = {
    status?: string;
    seller_id: number;
    trigger_on?: string;
    request_params?: any;
    task_id: string;
};
type PriceArticle = {
    marked?: number;
    currency?: string;
    effective?: number;
    transfer?: number;
    tp_notes?: any;
};
type CompanyMeta1 = {
    id?: number;
};
type DimensionResponse1 = {
    height?: number;
    unit?: string;
    length?: number;
    width?: number;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    not_available?: Quantity;
    order_committed?: Quantity;
    sellable?: Quantity;
    damaged?: Quantity;
};
type ReturnConfig2 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type ArticleStoreResponse = {
    store_type?: string;
    store_code?: string;
    name?: string;
    uid?: number;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type ManufacturerResponse1 = {
    address?: string;
    name?: string;
    is_default?: boolean;
};
type GetInventories = {
    identifier?: any;
    uid?: string;
    price?: PriceArticle;
    trace_id?: string;
    company?: CompanyMeta1;
    dimension?: DimensionResponse1;
    expiration_date?: string;
    is_set?: boolean;
    date_meta?: DateMeta;
    seller_identifier?: string;
    brand?: BrandMeta1;
    total_quantity?: number;
    id?: string;
    quantities?: QuantitiesArticle;
    inventory_updated_on?: string;
    tax_identifier?: any;
    platforms?: any;
    stage?: string;
    created_by?: UserSerializer;
    country_of_origin?: string;
    return_config?: ReturnConfig2;
    track_inventory?: boolean;
    modified_by?: UserSerializer;
    store?: ArticleStoreResponse;
    trader?: Trader2[];
    tags?: string[];
    weight?: WeightResponse1;
    size?: string;
    manufacturer?: ManufacturerResponse1;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    multivalues?: boolean;
    data?: FilerList[];
};
type InventoryPayload = {
    trace_id?: string;
    store_id: number;
    total_quantity?: number;
    price_effective?: number;
    price_marked?: number;
    expiration_date?: string;
    tags?: string[];
    seller_identifier: string;
};
type InventoryRequestSchemaV2 = {
    company_id: number;
    meta?: any;
    payload?: InventoryPayload[];
};
type InventoryFailedReason = {
    errors?: string;
    message: string;
};
type InventoryResponseItem = {
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type PageResponse = {
    has_previous?: boolean;
    current?: string;
    item_total?: number;
    has_next?: boolean;
    size?: number;
};
type HsnCodesObject = {
    hs2_code?: string;
    modified_on?: string;
    tax1?: number;
    tax_on_esp?: boolean;
    id?: string;
    company_id?: number;
    tax_on_mrp?: boolean;
    threshold1?: number;
    threshold2?: number;
    tax2?: number;
    hsn_code?: string;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    hs2_code: string;
    tax1: number;
    tax_on_esp?: boolean;
    uid?: number;
    company_id: number;
    tax_on_mrp: boolean;
    threshold1: number;
    threshold2?: number;
    tax2?: number;
    is_active?: boolean;
    hsn_code: string;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    effective_date: string;
    rate: number;
    threshold: number;
    cess?: number;
};
type HSNDataInsertV2 = {
    modified_on?: string;
    created_by?: any;
    type: string;
    country_code: string;
    description: string;
    modified_by?: any;
    reporting_hsn: string;
    created_on?: string;
    taxes: TaxSlab[];
    hsn_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    slug?: string;
    name?: string;
    discount?: string;
    uid?: number;
    banners?: ImageUrls;
    logo?: Media;
    departments?: string[];
    action?: Action;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    slug?: string;
    name?: string;
    uid?: number;
    priority_order?: number;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    slug?: string;
    name?: string;
    _custom_json?: any;
    uid?: number;
    banners?: ImageUrls;
    childs?: any[];
    action?: Action;
};
type SecondLevelChild = {
    slug?: string;
    name?: string;
    _custom_json?: any;
    uid?: number;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
    action?: Action;
};
type Child = {
    slug?: string;
    name?: string;
    _custom_json?: any;
    uid?: number;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
    action?: Action;
};
type CategoryItems = {
    slug?: string;
    name?: string;
    uid?: number;
    banners?: ImageUrls;
    childs?: Child[];
    action?: Action;
};
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
};
type CategoryListingResponse = {
    departments?: DepartmentIdentifier[];
    data?: DepartmentCategoryTree[];
};
type ApplicationProductListingResponse = {
    operators?: any;
    sort_on?: ProductSortOn[];
    page: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
};
type ProductDetail = {
    slug: string;
    rating?: number;
    short_description?: string;
    uid?: number;
    highlights?: string[];
    color?: string;
    type?: string;
    has_variant?: boolean;
    similars?: string[];
    teaser_tag?: any;
    rating_count?: number;
    promo_meta?: any;
    tryouts?: string[];
    brand?: ProductBrand;
    description?: string;
    product_online_date?: string;
    image_nature?: string;
    medias?: Media1[];
    item_type?: string;
    name?: string;
    attributes?: any;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_code?: string;
};
type InventoryPage = {
    next_id?: string;
    has_previous?: boolean;
    type: string;
    item_total: number;
    has_next?: boolean;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    open: boolean;
    weekday: string;
    closing?: LocationTimingSerializer;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    email?: string;
    name?: string;
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type UserSerializer2 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetAddressSerializer = {
    state?: string;
    address2?: string;
    address_type?: string;
    country?: string;
    city?: string;
    address1?: string;
    landmark?: string;
    country_code?: string;
    latitude?: number;
    longitude?: number;
    pincode?: number;
};
type GetCompanySerializer = {
    verified_by?: UserSerializer2;
    created_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    name?: string;
    modified_by?: UserSerializer2;
    uid?: number;
    reject_reason?: string;
    business_type?: string;
    company_type?: string;
    verified_on?: string;
    stage?: string;
    created_on?: string;
    modified_on?: string;
};
type InvoiceCredSerializer = {
    password?: string;
    username?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type Document = {
    legal_name?: string;
    type: string;
    url?: string;
    value: string;
    verified?: boolean;
};
type GetLocationSerializer = {
    uid?: number;
    timing?: LocationDayWiseSerializer[];
    manager?: LocationManagerSerializer;
    created_on?: string;
    modified_on?: string;
    verified_by?: UserSerializer1;
    code: string;
    store_type?: string;
    company?: GetCompanySerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    integration_type?: LocationIntegrationType;
    verified_on?: string;
    contact_numbers?: SellerPhoneNumber[];
    phone_number: string;
    warnings?: any;
    stage?: string;
    created_by?: UserSerializer1;
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigSerializer;
    name: string;
    display_name: string;
    modified_by?: UserSerializer1;
    address: GetAddressSerializer;
    documents?: Document[];
    _custom_json?: any;
};
type LocationListSerializer = {
    page?: Page;
    items?: GetLocationSerializer[];
};
type ApplicationBrandJson = {
    _custom_json: any;
};
type ApplicationCategoryJson = {
    _custom_json: any;
};
type ApplicationDepartment = {
    name?: string;
    uid: number;
    _custom_json?: any;
    app_id: string;
    logo?: string;
    is_active?: boolean;
};
type ApplicationDepartmentListingResponse = {
    page: Page;
    items?: ApplicationDepartment[];
};
type ApplicationDepartmentJson = {
    _custom_json: any;
};
type ApplicationStoreJson = {
    _custom_json: any;
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type CompanyTaxesSerializer = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type GetCompanyProfileSerializerResponse = {
    created_by?: UserSerializer;
    modified_on?: string;
    business_type: string;
    company_type: string;
    uid: number;
    business_country_info?: BusinessCountryInfo;
    verified_by?: UserSerializer;
    mode?: string;
    modified_by?: UserSerializer;
    documents?: Document[];
    verified_on?: string;
    addresses?: GetAddressSerializer[];
    _custom_json?: any;
    warnings?: any;
    created_on?: string;
    contact_details?: ContactDetails;
    stage?: string;
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer[];
    franchise_enabled?: boolean;
    business_info?: string;
    name?: string;
    business_details?: BusinessDetails;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    pincode: number;
    address2?: string;
    city: string;
    longitude: number;
    address_type: string;
    landmark?: string;
    country: string;
    state: string;
    latitude: number;
    address1: string;
    country_code?: string;
};
type UpdateCompany = {
    notification_emails?: string[];
    business_type?: string;
    business_details?: BusinessDetails;
    taxes?: CompanyTaxesSerializer1[];
    franchise_enabled?: boolean;
    business_info?: string;
    addresses?: CreateUpdateAddressSerializer[];
    documents?: Document[];
    name?: string;
    company_type?: string;
    _custom_json?: any;
    warnings?: any;
    contact_details?: ContactDetails;
    reject_reason?: string;
};
type ProfileSuccessResponse = {
    success?: boolean;
    uid?: number;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    product?: DocumentsObj;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
    uid?: number;
    stage?: string;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    created_by?: UserSerializer;
    modified_on?: string;
    slug_key?: string;
    uid?: number;
    verified_by?: UserSerializer;
    mode?: string;
    banner?: BrandBannerSerializer;
    _locale_language?: any;
    modified_by?: UserSerializer;
    synonyms?: string[];
    verified_on?: string;
    _custom_json?: any;
    warnings?: any;
    created_on?: string;
    stage?: string;
    description?: string;
    name: string;
    logo?: string;
    reject_reason?: string;
};
type CreateUpdateBrandRequestSerializer = {
    synonyms?: string[];
    company_id?: number;
    description?: string;
    _custom_json?: any;
    name: string;
    banner?: BrandBannerSerializer;
    uid?: number;
    _locale_language?: any;
    logo: string;
    brand_tier?: string;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanyDetails = {
    socials?: CompanySocialAccounts[];
    website_url?: string;
};
type CompanySerializer = {
    created_by?: UserSerializer;
    notification_emails?: string[];
    business_country_info?: BusinessCountryInfo;
    modified_on?: string;
    business_type: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    details?: CompanyDetails;
    verified_on?: string;
    market_channels?: string[];
    addresses?: GetAddressSerializer[];
    stage?: string;
    name?: string;
    company_type: string;
    _custom_json?: any;
    created_on?: string;
    uid?: number;
    reject_reason?: string;
};
type CompanyBrandSerializer = {
    created_by?: UserSerializer;
    modified_on?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    warnings?: any;
    reject_reason?: string;
    verified_on?: string;
    company?: CompanySerializer;
    brand?: GetBrandResponseSerializer;
    created_on?: string;
    uid?: number;
    stage?: string;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    uid?: number;
    company: number;
};
type HolidayDateSerializer = {
    end_date: string;
    start_date: string;
};
type HolidaySchemaSerializer = {
    title: string;
    holiday_type: string;
    date: HolidayDateSerializer;
};
type LocationSerializer = {
    notification_emails?: string[];
    contact_numbers?: SellerPhoneNumber[];
    product_return_config?: ProductReturnConfigSerializer;
    warnings?: any;
    company: number;
    _custom_json?: any;
    name: string;
    code: string;
    timing?: LocationDayWiseSerializer[];
    holiday?: HolidaySchemaSerializer[];
    address: GetAddressSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    display_name: string;
    documents?: Document[];
    store_type?: string;
    uid?: number;
    manager?: LocationManagerSerializer;
    stage?: string;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type _ArticleQuery = {
    item_id?: number;
    ignored_stores?: number[];
    size?: string;
};
type _AssignStoreArticle = {
    quantity?: number;
    article_assignment?: _ArticleAssignment;
    group_id?: string;
    query?: _ArticleQuery;
    meta?: any;
};
type AssignStoreRequestValidator = {
    pincode?: string;
    store_ids?: number[];
    articles?: _AssignStoreArticle[];
    company_id?: number;
    channel_identifier?: string;
    channel_type?: string;
    app_id?: string;
};
type AssignStoreResponseSerializer = {
    index?: number;
    item_id?: number;
    _id?: string;
    s_city?: string;
    store_id?: number;
    price_effective?: number;
    article_assignment?: _ArticleAssignment;
    quantity?: number;
    store_pincode?: string;
    size?: string;
    company_id?: number;
    price_marked?: number;
    status?: boolean;
    uid?: string;
    meta?: any;
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
    file_name: string;
    file_path: string;
    content_type: string;
    method?: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    tags?: string[];
};
type StartRequest = {
    file_name: string;
    content_type: string;
    size: number;
    tags?: string[];
    params?: any;
};
type CompleteResponse = {
    _id: string;
    file_name: string;
    file_path: string;
    content_type: string;
    namespace: string;
    operation: string;
    size: number;
    upload: Upload;
    cdn: CDN;
    success: boolean;
    tags?: string[];
    created_on: string;
    modified_on: string;
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
    attempts_made: number;
    stacktrace?: string[];
    finished_on: number;
    processed_on: number;
};
type BulkUploadResponse = {
    tracking_url: string;
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
    urls: string[];
    destination: Destination;
    configuration?: ReqConfiguration;
};
type Urls = {
    url: string;
    signed_url: string;
    expiry: number;
};
type SignUrlResponse = {
    urls: Urls[];
};
type SignUrlRequest = {
    expiry: number;
    urls: string[];
};
type DbRecord = {
    success: boolean;
    tags: string[];
    _id: string;
    file_name: string;
    operation?: string;
    namespace: string;
    content_type: string;
    file_path: string;
    upload: Upload;
    cdn: CDN;
    created_on: string;
    modified_on: string;
};
type BrowseResponse = {
    items: DbRecord[];
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
    force_web?: boolean;
};
type CampaignShortLink = {
    source?: string;
    medium?: string;
};
type Attribution = {
    campaign_cookie_expiry?: string;
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
    expire_at?: string;
    enable_tracking?: boolean;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
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
    created_by?: string;
    app_redirect?: boolean;
    fallback?: string;
    active?: boolean;
    _id?: string;
    enable_tracking?: boolean;
    expire_at?: string;
    application?: string;
    user_id?: string;
    created_at?: string;
    meta?: any;
    updated_at?: string;
    personalized?: boolean;
    campaign?: CampaignShortLink;
    redirects?: Redirects;
    attribution?: Attribution;
    social_media_tags?: SocialMediaTags;
    count?: number;
};
type ShortLinkList = {
    items?: ShortLinkRes[];
    page?: Page;
};
type ErrorRes = {
    message?: string;
};
type DataTresholdDTO = {
    min_price?: number;
    safe_stock?: number;
    period_threshold?: number;
    period_threshold_type?: string;
    period_type_list?: GenericDTO[];
};
type GenericDTO = {
    text?: string;
    value?: any;
};
type JobConfigDTO = {
    integration_data?: any;
    company_name?: string;
    integration: string;
    company_id: number;
    task_details?: TaskDTO;
    threshold_details?: DataTresholdDTO;
    job_code?: string;
    alias?: string;
};
type TaskDTO = {
    type?: number;
    group_list?: GenericDTO[];
};
type ResponseEnvelopeString = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: string;
    payload?: string;
    trace_id?: string;
    page?: Page;
};
type KafkaMetaModel = {
    job_type?: string;
    batch_id?: number;
    action?: string;
    trace?: string[];
    created_on?: string;
    created_timestamp?: number;
};
type SuppressStoreModel = {
    stores?: number[];
};
type SuppressStorePayload = {
    payload?: SuppressStoreModel[];
    meta?: KafkaMetaModel;
};
type KafkaResponse = {
    offset?: number;
    partition?: number;
};
type ResponseEnvelopeKafkaResponse = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: KafkaResponse;
    payload?: KafkaResponse;
    trace_id?: string;
    page?: Page;
};
type GCompany = {
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    name?: string;
    stores?: GStore[];
};
type GStore = {
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    opted?: boolean;
    permissions?: string[];
    token?: string;
    code?: string;
    name?: string;
    data?: StoreData;
};
type Metum = {
    _id?: string;
    name?: string;
    value?: string;
};
type ResponseEnvelopeListSlingshotConfigurationDetail = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: SlingshotConfigurationDetail[];
    payload?: SlingshotConfigurationDetail[];
    trace_id?: string;
    page?: Page;
};
type SlingshotConfigurationDetail = {
    integration?: SlingshotIntegration;
    companies?: GCompany[];
};
type SlingshotIntegration = {
    _id?: string;
    description?: string;
    name?: string;
    slug?: string;
    meta?: Metum[];
};
type StoreData = {
    location_id?: string;
};
type AWSS3config = {
    bucket?: string;
    region?: string;
    dir?: string;
    access_key?: string;
    secret_key?: string;
    local_file_path?: string;
    archive_path?: string;
    archive?: boolean;
    delete?: boolean;
    unzip?: boolean;
    zip_format?: string;
    file_regex?: string;
    archive_config?: ArchiveConfig;
};
type ArchiveConfig = {
    delete?: boolean;
    archive?: boolean;
    archive_dir?: string;
};
type Audit = {
    created_by?: string;
    modified_by?: string;
    created_on?: string;
    modified_on?: string;
};
type CatalogMasterConfig = {
    source_slug?: string;
};
type CompanyConfig = {
    company_id?: number;
    exclude_steps?: number[];
    hidden_closet_keys?: string[];
    open_tags?: any;
    tax_identifiers?: string[];
    delete_quantity_threshold?: number;
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
    driver_class?: string;
    jdbc_url?: string;
    optional_properties?: any;
};
type DBConnectionProfile = {
    inventory?: string;
};
type DBParamConfig = {
    params?: any;
};
type DefaultHeadersDTO = {
    store?: PropBeanDTO;
    intf_article_id?: PropBeanDTO;
    price_effective?: PropBeanDTO;
    quantity?: PropBeanDTO;
};
type DocMappingConfig = {
    properties?: any;
    junk_data_threshold_count?: number;
    prop_bean_configs?: PropBeanConfig[];
    unwind_field?: string;
    default_headers?: DefaultHeadersDTO;
};
type EmailConfig = {
    recepient?: string;
    host?: string;
    username?: string;
    password?: string;
    unzip?: boolean;
    read_from_content?: boolean;
    filter_based_on_recepients?: boolean;
    pcol?: string;
    subject_line_regex?: string;
    sender_address?: string;
    local_dir?: string;
    folder_name_hierarchies?: string[];
    attachment_regex?: string;
    body_content_regex?: string;
    password_protected?: boolean;
    zip_format?: string;
    attachment_mandate?: boolean;
    filter_files_after_extraction?: boolean;
    archive_config?: ArchiveConfig;
    read_all_unread_mails?: boolean;
    content_type?: string;
    downloadable_link?: boolean;
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
    local_dir?: string;
    remote_dir?: string;
    zip_file_regex?: string;
    archive_config?: ArchiveConfig;
    file_regex?: string;
    zip_format?: string;
    read_all_files?: boolean;
};
type FileConfig = {
    delimiter?: string;
    charset?: string;
    properties?: any;
    file_has_header?: boolean;
    header_index?: number;
    header_array?: string[];
    data_start_index?: number;
    prop_bean_configs?: PropBeanConfig[];
    junk_data_threshold_count?: number;
    file_type?: string;
    line_validity_check?: boolean;
    sheet_names?: string[];
    read_all_sheets?: boolean;
    quote_char?: string;
    escape_char?: string;
    default_headers?: DefaultHeadersDTO;
};
type GoogleSpreadSheetConfig = {
    range?: string;
    sheet_id?: string;
    client_secret_location?: string;
    cred_storage_directory?: string;
    local_dir?: string;
    archive_config?: ArchiveConfig;
};
type HttpConfig = {
    hosturl?: string;
    username?: string;
    password?: string;
    request_params?: any;
    http_method?: string;
    request_payload?: string;
    local_path?: string;
    archive_config?: ArchiveConfig;
};
type JobConfig = {
    _id?: number;
    job_code?: string;
    task_type?: string;
    sync_delay?: number;
    cron_expression?: string;
    store_filter?: StoreFilter;
    process_config?: ProcessConfig;
    store_config?: StoreConfig[];
    properties?: any;
    immediate_first_run?: boolean;
    disable?: boolean;
    dependent_job_codes?: string[];
    company_config?: CompanyConfig[];
    company_ids?: number[];
    tax_identifiers?: string[];
    priority?: string;
    period_threshold?: number;
    period_threshold_type?: string;
    db_connection_profile?: DBConnectionProfile;
    params?: any;
    open_tags?: any;
    delete_quantity_threshold?: number;
    catalog_master_config?: CatalogMasterConfig;
    aggregator_types?: string[];
    integration_type?: string;
    min_price?: number;
    audit?: Audit;
    version?: number;
    alias?: string;
};
type JobConfigRawDTO = {
    company_name: string;
    integration: string;
    company_id: number;
    data?: JobConfig;
};
type JsonDocConfig = {
    prop_bean_configs?: PropBeanConfig[];
};
type LocalFileConfig = {
    retries?: number;
    interval?: number;
    local_dir?: string;
    working_dir?: string;
    unzip?: boolean;
    zip_file_regex?: string;
    file_regex?: string;
    zip_format?: string;
    archive_config?: ArchiveConfig;
    read_all_files?: boolean;
};
type MongoDocConfig = {
    collection_name?: string;
    find_query?: any;
    projection_query?: any;
    prop_bean_configs?: PropBeanConfig[];
    aggregate_pipeline?: any[];
    skip_save?: boolean;
};
type OAuthConfig = {
    limit?: number;
    pages?: number;
    interval?: number;
    consumer_key?: string;
    consumer_secret?: string;
    token?: string;
    token_secret?: string;
    rest_url?: string;
    rest_base_url?: string;
    function_name?: string;
};
type ProcessConfig = {
    db_config?: DBConfig;
    db_param_config?: DBParamConfig;
    sftp_config?: SFTPConfig;
    aws_s3_config?: AWSS3config;
    mongo_doc_config?: MongoDocConfig;
    ftp_config?: FTPConfig;
    email_config?: EmailConfig;
    file_config?: FileConfig;
    json_doc_config?: JsonDocConfig;
    doc_mapping_config?: DocMappingConfig;
    task_step_config?: TaskStepConfig;
    http_config?: HttpConfig;
    local_file_config?: LocalFileConfig;
    oauth_config?: OAuthConfig;
    google_spreadsheet_config?: GoogleSpreadSheetConfig;
};
type PropBeanConfig = {
    required?: boolean;
    optional?: boolean;
    send?: Send;
    validations?: any[];
    values?: string[];
    include?: boolean;
    source_field?: string;
    source_fields?: string[];
    destination_field?: string;
    data_type?: string;
    default_value?: any;
    const_value?: any;
    concat_str?: string;
    function_name?: string;
    transformer_name?: string;
    all_param_function_name?: string;
    sub_separator?: string;
    index_field?: string;
    ignore_if_not_exists?: boolean;
    identifier_type?: string;
    projection_query?: any;
    enrich_from_master?: boolean;
};
type PropBeanDTO = {
    required?: boolean;
    optional?: boolean;
    include?: boolean;
    source_field?: string;
    source_fields?: string[];
    destination_field?: string;
    data_type?: string;
    default_value?: any;
    const_value?: any;
    concat_str?: string;
    function_name?: string;
    transformer_name?: string;
    all_param_function_name?: string;
    sub_separator?: string;
    index_field?: string;
    ignore_if_not_exists?: boolean;
    identifier_type?: string;
    projection_query?: any;
    enrich_from_master?: boolean;
};
type ResponseEnvelopeListJobConfigRawDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigRawDTO[];
    payload?: JobConfigRawDTO[];
    trace_id?: string;
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
    private_key_path?: string;
    strict_host_key_checking?: boolean;
    local_dir?: string;
    remote_dir?: string;
    password_protected?: boolean;
    zip_file_regex?: string;
    file_regex?: string;
    zip_format?: string;
    archive_config?: ArchiveConfig;
    read_all_files?: boolean;
};
type Send = {
    raw?: boolean;
    processed?: boolean;
};
type StoreConfig = {
    job_code?: string;
    storeid?: string;
    store_alias?: string;
    store_file_regex?: string;
    store_file_name?: string;
    process_config?: ProcessConfig;
    properties?: any;
};
type StoreFilter = {
    include_tags?: string[];
    exclude_tags?: string[];
    query?: any;
};
type TaskConfig = {
    name?: string;
    task_config_id?: number;
    task_params?: TaskParam[];
};
type TaskParam = {
    name?: string;
    value?: any;
};
type TaskStepConfig = {
    task_configs?: TaskConfig[];
    task_config_ids?: number[];
    task_config_group_ids?: number[];
};
type JobStepsDTO = {
    step_name?: string;
    type?: string;
    step_execution_time?: number;
    start_count?: number;
    end_count?: number;
    deleted_count?: number;
    processed_start_time?: string;
    processed_at?: string;
};
type ResponseEnvelopeListJobStepsDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobStepsDTO[];
    payload?: JobStepsDTO[];
    trace_id?: string;
    page?: Page;
};
type ResponseEnvelopeListJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigDTO[];
    payload?: JobConfigDTO[];
    trace_id?: string;
    page?: Page;
};
type ResponseEnvelopeJobConfigDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigDTO;
    payload?: JobConfigDTO;
    trace_id?: string;
    page?: Page;
};
type JobHistoryDto = {
    total_added_count?: number;
    total_updated_count?: number;
    total_suppressed_count?: number;
    total_initial_count?: number;
    job_id?: number;
    status?: string;
    job_code?: string;
    processed_on?: string;
    filename?: string[];
    error_type?: string;
    message?: string;
};
type JobMetricsDto = {
    job_code?: string;
    is_run_more_than_usual?: string;
    job_history?: JobHistoryDto[];
    total_success_count?: number;
    total_failure_count?: number;
    total_warning_count?: number;
    total_suppressed_count?: number;
    total_job_runs?: number;
};
type ResponseEnvelopeJobMetricsDto = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobMetricsDto;
    payload?: JobMetricsDto;
    trace_id?: string;
    page?: Page;
};
type JobConfigListDTO = {
    code?: string;
    alias?: string;
    modified_by?: string;
    created_by?: string;
    modified_on?: string;
    created_on?: string;
    active?: boolean;
    type?: string;
};
type ResponseEnvelopeListJobConfigListDTO = {
    timestamp?: string;
    status?: number;
    error?: string;
    exception?: string;
    message?: string;
    total_time_taken_in_millis?: number;
    http_status?: string;
    items?: JobConfigListDTO[];
    payload?: JobConfigListDTO[];
    trace_id?: string;
    page?: Page;
};
type ApplicationInventory = {
    inventory?: AppInventoryConfig;
    authentication?: AuthenticationConfig;
    article_assignment?: ArticleAssignmentConfig;
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    order?: AppOrderConfig;
    logistics?: AppLogisticsConfig;
    business?: string;
    comms_enabled?: boolean;
    platforms?: string[];
    _id?: string;
    loyalty_points?: LoyaltyPointsConfig;
    app?: string;
    created_at?: string;
    updated_at?: string;
    modified_by?: string;
};
type AppInventoryConfig = {
    brand?: InventoryBrand;
    store?: InventoryStore;
    category?: InventoryCategory;
    price?: InventoryPrice;
    discount?: InventoryDiscount;
    out_of_stock?: boolean;
    only_verified_products?: boolean;
    franchise_enabled?: boolean;
    exclude_category?: any[];
    image?: string[];
    company_store?: any[];
};
type InventoryBrand = {
    criteria?: string;
    brands?: any[];
};
type InventoryStore = {
    criteria?: string;
    stores?: any[];
    rules?: AppStoreRules;
};
type AppStoreRules = {
    companies?: number[];
    brands?: any[];
};
type InventoryCategory = {
    criteria?: string;
    categories?: any[];
};
type InventoryPrice = {
    min?: number;
    max?: number;
};
type InventoryDiscount = {
    min?: number;
    max?: number;
};
type AuthenticationConfig = {
    required?: boolean;
    provider?: string;
};
type ArticleAssignmentConfig = {
    rules?: ArticleAssignmentRules;
    post_order_reassignment?: boolean;
};
type ArticleAssignmentRules = {
    store_priority?: StorePriority;
};
type StorePriority = {
    enabled?: boolean;
    storetype_order?: any[];
};
type AppCartConfig = {
    delivery_charges?: DeliveryCharges;
    enabled?: boolean;
    max_cart_items?: number;
    min_cart_value?: number;
    bulk_coupons?: boolean;
    revenue_engine_coupon?: boolean;
    empty_cart?: boolean;
};
type DeliveryCharges = {
    enabled?: boolean;
    charges?: Charges;
};
type Charges = {
    threshold?: number;
    charges?: number;
};
type AppPaymentConfig = {
    callback_url?: CallbackUrl;
    methods?: Methods;
    payment_selection_lock?: PaymentSelectionLock;
    mode_of_payment?: string;
    source?: string;
    enabled?: boolean;
    cod_amount_limit?: number;
    cod_charges?: number;
};
type CallbackUrl = {
    app?: string;
    web?: string;
};
type Methods = {
    pl?: PaymentModeConfig;
    card?: PaymentModeConfig;
    nb?: PaymentModeConfig;
    wl?: PaymentModeConfig;
    ps?: PaymentModeConfig;
    upi?: PaymentModeConfig;
    qr?: PaymentModeConfig;
    cod?: PaymentModeConfig;
    pp?: PaymentModeConfig;
    jp?: PaymentModeConfig;
    pac?: PaymentModeConfig;
    fc?: PaymentModeConfig;
    jiopp?: PaymentModeConfig;
    stripepg?: PaymentModeConfig;
    juspaypg?: PaymentModeConfig;
    payubizpg?: PaymentModeConfig;
    payumoneypg?: PaymentModeConfig;
    rupifipg?: PaymentModeConfig;
    simpl?: PaymentModeConfig;
};
type PaymentModeConfig = {
    enabled?: boolean;
};
type PaymentSelectionLock = {
    enabled?: boolean;
    default_options?: string;
    payment_identifier?: string;
};
type AppOrderConfig = {
    enabled?: boolean;
    force_reassignment?: boolean;
    message?: string;
};
type AppLogisticsConfig = {
    logistics_by_seller?: boolean;
    serviceability_check?: boolean;
    same_day_delivery?: boolean;
    dp_assignment?: boolean;
};
type LoyaltyPointsConfig = {
    enabled?: boolean;
    auto_apply?: boolean;
};
type AppInventoryPartialUpdate = {
    reward_points?: RewardPointsConfig;
    cart?: AppCartConfig;
    payment?: AppPaymentConfig;
    loyalty_points?: LoyaltyPointsConfig;
    comms_enabled?: boolean;
};
type BrandCompanyInfo = {
    company_name?: string;
    company_id?: number;
};
type CompanyByBrandsRequest = {
    brands: number;
    search_text?: string;
};
type CompanyByBrandsResponse = {
    items?: BrandCompanyInfo[];
    page?: Page;
};
type StoreByBrandsRequest = {
    company_id?: number;
    brands: number;
    search_text?: string;
};
type StoreByBrandsResponse = {
    items?: BrandStoreInfo[];
    page?: Page;
};
type BrandStoreInfo = {
    store_name?: string;
    store_id?: number;
    store_type?: string;
    store_code?: string;
    store_address?: OptedStoreAddress;
    company?: OptedCompany;
};
type CompanyBrandInfo = {
    name?: string;
    value?: number;
    brand_logo_url?: string;
    brand_banner_url?: string;
    brand_banner_portrait_url?: string;
};
type BrandsByCompanyResponse = {
    brands?: CompanyBrandInfo;
};
type CreateApplicationRequest = {
    app?: App;
    configuration?: AppInventory;
    domain?: AppDomain;
};
type CreateAppResponse = {
    app?: Application;
    configuration?: ApplicationInventory;
};
type ApplicationsResponse = {
    items?: Application[];
    page?: Page;
};
type MobileAppConfiguration = {
    is_active?: boolean;
    _id?: string;
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    application?: string;
    platform_type?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    package_name?: string;
};
type LandingImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type SplashImage = {
    aspect_ratio?: string;
    secure_url?: string;
};
type MobileAppConfigRequest = {
    app_name?: string;
    landing_image?: LandingImage;
    splash_image?: SplashImage;
    is_active?: boolean;
};
type BuildVersionHistory = {
    versions?: BuildVersion;
    latest_available_version_name?: string;
};
type BuildVersion = {
    _id?: string;
    application?: string;
    platform_type?: string;
    build_status?: string;
    version_name?: string;
    version_code?: number;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type AppSupportedCurrency = {
    _id?: string;
    supported_currency?: string[];
    application?: string;
    default_currency?: DefaultCurrency;
    created_at?: string;
    updated_at?: string;
};
type DefaultCurrency = {
    ref?: string;
    code?: string;
};
type CurrencyConfig = {
    _id?: string;
    is_active?: boolean;
    name?: string;
    code?: string;
    created_at?: string;
    updated_at?: string;
    decimal_digits?: number;
    symbol?: string;
};
type DomainAdd = {
    name?: string;
};
type DomainAddRequest = {
    domain?: DomainAdd;
};
type DomainsResponse = {
    domains?: Domain[];
};
type UpdateDomain = {
    _id?: string;
};
type UpdateDomainTypeRequest = {
    domain?: UpdateDomain;
    action?: string;
};
type DomainStatusRequest = {
    domain_url?: string;
};
type DomainStatus = {
    display?: string;
    status?: boolean;
};
type DomainStatusResponse = {
    connected?: boolean;
    status?: DomainStatus[];
};
type DomainSuggestionsRequest = {
    domain_url?: string;
    custom?: boolean;
};
type DomainSuggestion = {
    name: string;
    unsupported?: boolean;
    is_available: boolean;
    price?: number;
    currency?: string;
};
type DomainSuggestionsResponse = {
    domains?: DomainSuggestion[];
};
type GetIntegrationsOptInsResponse = {
    items?: IntegrationOptIn[];
    page?: Page;
};
type IntegrationOptIn = {
    validators?: Validators;
    description?: string;
    description_html?: string;
    constants?: string;
    companies?: any[];
    support?: string[];
    _id?: string;
    name?: string;
    meta?: IntegrationMeta[];
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type Validators = {
    company?: CompanyValidator;
    store?: StoreValidator;
    inventory?: InventoryValidator;
    order?: OrderValidator;
};
type CompanyValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type JsonSchema = {
    display?: string;
    key?: string;
    type?: string;
    tooltip?: string;
};
type StoreValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type InventoryValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type OrderValidator = {
    json_schema?: JsonSchema[];
    browser_script?: string;
};
type IntegrationMeta = {
    is_public?: boolean;
    _id?: string;
    name?: string;
    value?: string;
};
type Integration = {
    validators?: Validators;
    description?: string;
    description_html?: string;
    constants?: any;
    companies?: any[];
    support?: string[];
    _id?: string;
    name?: string;
    meta?: IntegrationMeta[];
    icon?: string;
    owner?: string;
    created_at?: string;
    updated_at?: string;
    token?: string;
    secret?: string;
    __v?: number;
};
type IntegrationConfigResponse = {
    items?: IntegrationLevel[];
};
type IntegrationLevel = {
    opted?: boolean;
    permissions?: any[];
    last_patch?: LastPatch[];
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    meta?: IntegrationMeta[];
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
    data?: any;
};
type UpdateIntegrationLevelRequest = {
    items?: IntegrationLevel[];
};
type OptedStoreIntegration = {
    other_opted?: boolean;
    other_integration?: IntegrationOptIn;
    other_entity?: OtherEntity;
};
type OtherEntity = {
    opted?: boolean;
    permissions?: string[];
    last_patch?: LastPatch[];
    _id?: string;
    integration?: string;
    level?: string;
    uid?: number;
    data?: OtherEntityData;
    meta?: any[];
    token?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type LastPatch = {
    op?: string;
    path?: string;
    value?: string;
};
type OtherEntityData = {
    article_identifier?: string;
};
type App = {
    company_id?: string;
    channel_type?: string;
    auth?: ApplicationAuth;
    name?: string;
    desc?: string;
};
type AppInventory = {
    brand?: InventoryBrandRule;
    store?: InventoryStoreRule;
    image?: string[];
    franchise_enabled?: boolean;
    out_of_stock?: boolean;
    only_verified_products?: boolean;
    payment?: InventoryPaymentConfig;
    article_assignment?: InventoryArticleAssignment;
};
type AppDomain = {
    name?: string;
};
type CompaniesResponse = {
    items?: AppInventoryCompanies;
    page?: Page;
};
type AppInventoryCompanies = {
    uid?: number;
    name?: string;
    company_type?: string;
};
type StoresResponse = {
    items?: AppInventoryStores;
    page?: Page;
};
type AppInventoryStores = {
    _id?: string;
    modified_on?: string;
    uid?: number;
    name?: string;
    display_name?: string;
    store_type?: string;
    store_code?: string;
    company_id?: number;
};
type FilterOrderingStoreRequest = {
    all_stores?: boolean;
    deployed_stores?: number[];
    q?: string;
    only_deployed?: boolean;
};
type DeploymentMeta = {
    deployed_stores?: number[];
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
};
type OrderingStoreConfig = {
    deployment_meta?: DeploymentMeta;
};
type OtherSellerCompany = {
    uid?: number;
    name?: string;
};
type OtherSellerApplication = {
    name?: string;
    description?: string;
    _id?: string;
    domain?: string;
    company?: OtherSellerCompany;
    opt_type?: string;
};
type OtherSellerApplications = {
    items?: OtherSellerApplication[];
    page?: Page;
};
type OptedApplicationResponse = {
    name?: string;
    description?: string;
    _id?: string;
    domain?: string;
    company?: OptedCompany;
    opted_inventory?: OptedInventory;
    opt_out_inventory?: OptOutInventory;
};
type OptedCompany = {
    uid?: number;
    name?: string;
};
type OptedInventory = {
    opt_type?: OptType;
    items?: any;
};
type OptType = {
    key?: string;
    display?: string;
};
type OptedStore = {
    name?: string;
    store_code?: string;
    _id?: string;
    modified_on?: string;
    uid?: number;
    address?: OptedStoreAddress;
    display_name?: string;
    store_type?: string;
    company_id?: number;
};
type OptOutInventory = {
    store: number[];
    company: number[];
};
type TokenResponse = {
    tokens?: Tokens;
    _id?: string;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type Tokens = {
    firebase?: Firebase;
    moengage?: Moengage;
    segment?: Segment;
    gtm?: Gtm;
    freshchat?: Freshchat;
    safetynet?: Safetynet;
    fynd_rewards?: FyndRewards;
    google_map?: GoogleMap;
};
type Firebase = {
    credentials?: Credentials;
    enabled?: boolean;
};
type Credentials = {
    ios?: Ios;
    android?: Android;
    project_id?: string;
    gcm_sender_id?: string;
    application_id?: string;
    api_key?: string;
};
type Ios = {
    application_id?: string;
    api_key?: string;
};
type Android = {
    application_id?: string;
    api_key?: string;
};
type Moengage = {
    credentials?: MoengageCredentials;
    enabled?: boolean;
};
type MoengageCredentials = {
    app_id?: string;
};
type Segment = {
    credentials?: SegmentCredentials;
    enabled?: boolean;
};
type SegmentCredentials = {
    write_key?: string;
};
type Gtm = {
    credentials?: GtmCredentials;
    enabled?: boolean;
};
type GtmCredentials = {
    api_key?: string;
};
type Freshchat = {
    credentials?: FreshchatCredentials;
    enabled?: boolean;
};
type FreshchatCredentials = {
    app_id?: string;
    app_key?: string;
    web_token?: string;
};
type Safetynet = {
    credentials?: SafetynetCredentials;
    enabled?: boolean;
};
type SafetynetCredentials = {
    api_key?: string;
};
type FyndRewards = {
    credentials?: FyndRewardsCredentials;
};
type FyndRewardsCredentials = {
    public_key?: string;
};
type GoogleMap = {
    credentials?: GoogleMapCredentials;
};
type GoogleMapCredentials = {
    api_key?: string;
};
type RewardPointsConfig = {
    credit?: Credit;
    debit?: Debit;
};
type Credit = {
    enabled?: boolean;
};
type Debit = {
    enabled?: boolean;
    auto_apply?: boolean;
    strategy_channel?: string;
};
type ProductDetailFeature = {
    similar?: string[];
    seller_selection?: boolean;
    update_product_meta?: boolean;
    request_product?: boolean;
};
type LaunchPage = {
    page_type?: string;
    params?: any;
    query?: any;
};
type LandingPageFeature = {
    launch_page?: LaunchPage;
    continue_as_guest?: boolean;
    login_btn_text?: string;
    show_domain_textbox?: boolean;
    show_register_btn?: boolean;
};
type RegistrationPageFeature = {
    ask_store_address?: boolean;
};
type AppFeature = {
    product_detail?: ProductDetailFeature;
    landing_page?: LandingPageFeature;
    registration_page?: RegistrationPageFeature;
    home_page?: HomePageFeature;
    common?: CommonFeature;
    cart?: CartFeature;
    qr?: QrFeature;
    pcr?: PcrFeature;
    order?: OrderFeature;
    _id?: string;
    app?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type HomePageFeature = {
    order_processing?: boolean;
};
type CommonFeature = {
    communication_optin_dialog?: CommunicationOptinDialogFeature;
    deployment_store_selection?: DeploymentStoreSelectionFeature;
    listing_price?: ListingPriceFeature;
    currency?: CurrencyFeature;
    revenue_engine?: RevenueEngineFeature;
    feedback?: FeedbackFeature;
    compare_products?: CompareProductsFeature;
    reward_points?: RewardPointsConfig;
};
type CommunicationOptinDialogFeature = {
    visibility?: boolean;
};
type DeploymentStoreSelectionFeature = {
    enabled?: boolean;
    type?: string;
};
type ListingPriceFeature = {
    value?: string;
};
type CurrencyFeature = {
    value?: string[];
    type?: string;
    default_currency?: string;
};
type RevenueEngineFeature = {
    enabled?: boolean;
};
type FeedbackFeature = {
    enabled?: boolean;
};
type CompareProductsFeature = {
    enabled?: boolean;
};
type CartFeature = {
    gst_input?: boolean;
    staff_selection?: boolean;
    placing_for_customer?: boolean;
    google_map?: boolean;
    revenue_engine_coupon?: boolean;
};
type QrFeature = {
    application?: boolean;
    products?: boolean;
    collections?: boolean;
};
type PcrFeature = {
    staff_selection?: boolean;
};
type OrderFeature = {
    buy_again?: boolean;
};
type AppFeatureRequest = {
    feature?: AppFeature;
};
type AppFeatureResponse = {
    feature?: AppFeature;
};
type UnhandledError = {
    message?: string;
};
type InvalidPayloadRequest = {
    message?: string;
};
type SuccessMessageResponse = {
    message?: string;
};
type InventoryBrandRule = {
    criteria?: string;
    brands?: number[];
};
type StoreCriteriaRule = {
    companies?: number[];
    brands?: number[];
};
type InventoryStoreRule = {
    criteria?: string;
    rules?: StoreCriteriaRule[];
    stores?: number[];
};
type InventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type StorePriorityRule = {
    enabled?: boolean;
    storetype_order?: string[];
};
type ArticleAssignmentRule = {
    store_priority?: StorePriorityRule;
};
type InventoryArticleAssignment = {
    post_order_reassignment?: boolean;
    rules?: ArticleAssignmentRule;
};
type CompanyAboutAddress = {
    pincode?: number;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    address_type?: string;
};
type UserEmail = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    email?: string;
};
type UserPhoneNumber = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    country_code?: number;
    phone?: string;
};
type ApplicationInformation = {
    address?: InformationAddress;
    support?: InformationSupport;
    social_links?: SocialLinks;
    links?: Links;
    copyright_text?: string;
    _id?: string;
    business_highlights?: BusinessHighlights;
    application?: string;
    created_at?: string;
    updated_at?: string;
    __v?: number;
};
type InformationAddress = {
    loc?: string;
    address_line?: string[];
    phone?: InformationPhone;
    city?: string;
    country?: string;
    pincode?: number;
};
type InformationPhone = {
    code?: string;
    number?: string;
};
type InformationSupport = {
    phone?: string[];
    email?: string[];
    timing?: string;
};
type SocialLinks = {
    facebook?: FacebookLink;
    instagram?: InstagramLink;
    twitter?: TwitterLink;
    pinterest?: PinterestLink;
    google_plus?: GooglePlusLink;
    youtube?: YoutubeLink;
    linked_in?: LinkedInLink;
    vimeo?: VimeoLink;
    blog_link?: BlogLink;
};
type FacebookLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type InstagramLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type TwitterLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type PinterestLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type GooglePlusLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type YoutubeLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type LinkedInLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type VimeoLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type BlogLink = {
    title?: string;
    icon?: string;
    link?: string;
};
type Links = {
    title?: string;
    link?: string;
};
type BusinessHighlights = {
    _id?: string;
    title?: string;
    icon?: string;
    sub_title?: string;
};
type ApplicationDetail = {
    name: string;
    description: string;
    logo: SecureUrl;
    mobile_logo: SecureUrl;
    favicon: SecureUrl;
    banner: SecureUrl;
    domain?: Domain;
    domains?: Domain[];
    _id?: string;
};
type CurrenciesResponse = {
    items?: Currency[];
};
type AppCurrencyResponse = {
    application?: string;
    default_currency?: DefaultCurrency;
    supported_currency?: Currency[];
};
type StoreLatLong = {
    type?: string;
    coordinates?: number[];
};
type OptedStoreAddress = {
    state?: string;
    address1?: string;
    lat_long?: StoreLatLong;
    address2?: string;
    pincode?: number;
    country?: string;
    city?: string;
};
type OrderingStore = {
    address?: OptedStoreAddress;
    _id?: string;
    uid?: number;
    name?: string;
    display_name?: string;
    store_type?: string;
    store_code?: string;
    pincode?: number;
    code?: string;
};
type OrderingStores = {
    page?: Page;
    items?: OrderingStore[];
    deployed_stores?: number[];
    all_stores?: boolean;
    enabled?: boolean;
    type?: string;
    _id?: string;
    app?: string;
    __v?: number;
};
type OrderingStoresResponse = {
    page?: Page;
    items?: OrderingStore[];
};
type Validity = {
    priority?: number;
};
type Identifier = {
    item_id?: number[];
    brand_id?: number[];
    user_id?: string[];
    article_id?: string[];
    company_id?: number[];
    collection_id?: string[];
    exclude_brand_id?: number[];
    category_id?: number[];
    store_id?: number[];
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type Rule = {
    min?: number;
    discount_qty?: number;
    max?: number;
    key?: number;
    value?: number;
};
type Validation = {
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: string[];
};
type State = {
    is_public?: boolean;
    is_archived?: boolean;
    is_display?: boolean;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type UsesRemaining = {
    user?: number;
    total?: number;
    app?: number;
};
type UsesRestriction = {
    maximum?: UsesRemaining;
    remaining?: UsesRemaining;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    networks?: string[];
    uses?: PaymentAllowValue;
    types?: string[];
    codes?: string[];
};
type PriceRange = {
    min?: number;
    max?: number;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    user_type?: string;
    platforms?: string[];
    user_groups?: number[];
    post_order?: PostOrder;
    uses?: UsesRestriction;
    ordering_stores?: number[];
    payments?: any;
    price_range?: PriceRange;
    coupon_allowed?: boolean;
    bulk_bundle?: BulkBundleRestriction;
};
type RuleDefinition = {
    is_exact?: boolean;
    currency_code?: string;
    applicable_on: string;
    scope?: string[];
    auto_apply?: boolean;
    type: string;
    value_type: string;
    calculate_on: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    title?: string;
    auto?: DisplayMetaDict;
    description?: string;
    subtitle?: string;
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CouponSchedule = {
    start?: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    cron?: string;
};
type CouponAdd = {
    validity: Validity;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
    tags?: string[];
    code: string;
    action?: CouponAction;
    ownership: Ownership;
    rule: Rule[];
    validation?: Validation;
    state?: State;
    restrictions?: Restrictions;
    rule_definition: RuleDefinition;
    type_slug: string;
    display_meta: DisplayMeta;
    author?: CouponAuthor;
    _schedule?: CouponSchedule;
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
    validity: Validity;
    identifiers: Identifier;
    date_meta?: CouponDateMeta;
    tags?: string[];
    code: string;
    action?: CouponAction;
    ownership: Ownership;
    rule: Rule[];
    validation?: Validation;
    state?: State;
    restrictions?: Restrictions;
    rule_definition: RuleDefinition;
    type_slug: string;
    display_meta: DisplayMeta;
    author?: CouponAuthor;
    _schedule?: CouponSchedule;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type DiscountOffer = {
    min_offer_quantity?: number;
    max_discount_amount?: number;
    partial_can_ret?: boolean;
    discount_percentage?: number;
    max_offer_quantity?: number;
    discount_amount?: number;
    code?: string;
    apportion_discount?: boolean;
    max_usage_per_transaction?: number;
    discount_price?: number;
};
type CompareObject = {
    greater_than_equals?: number;
    less_than?: number;
    greater_than?: number;
    less_than_equals?: number;
    equals?: number;
};
type ItemCriteria = {
    item_exclude_company?: number[];
    item_exclude_sku?: string[];
    item_exclude_brand?: number[];
    item_id?: number[];
    available_zones?: string[];
    product_tags?: string[];
    item_brand?: number[];
    item_store?: number[];
    all_items?: boolean;
    buy_rules?: string[];
    item_category?: number[];
    item_exclude_id?: number[];
    cart_total?: CompareObject;
    item_size?: string[];
    cart_quantity?: CompareObject;
    cart_unique_item_quantity?: CompareObject;
    item_company?: number[];
    item_sku?: string[];
    item_exclude_store?: number[];
    item_exclude_category?: number[];
    cart_unique_item_amount?: CompareObject;
};
type DiscountRule = {
    discount_type: string;
    offer: DiscountOffer;
    buy_condition: string;
    item_criteria: ItemCriteria;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    uses?: PaymentAllowValue1;
    type: string;
    codes?: string[];
};
type Restrictions1 = {
    user_registered?: UserRegistered;
    user_id?: string[];
    platforms?: string[];
    user_groups?: number[];
    order_quantity?: number;
    post_order?: PostOrder1;
    uses: UsesRestriction1;
    payments?: PromotionPaymentModes[];
    anonymous_users?: boolean;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type DisplayMeta1 = {
    name?: string;
    offer_label?: string;
    offer_text?: string;
    description?: string;
};
type PromotionSchedule = {
    published: boolean;
    start: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    cron?: string;
};
type PromotionListItem = {
    ownership: Ownership1;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    apply_exclusive?: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    restrictions?: Restrictions1;
    post_order_action?: PromotionAction;
    buy_rules: any;
    visiblility?: Visibility;
    code?: string;
    stackable?: boolean;
    author?: PromotionAuthor;
    apply_all_discount?: boolean;
    application_id: string;
    promotion_type: string;
    _custom_json?: any;
    calculate_on?: string;
    display_meta: DisplayMeta1;
    mode: string;
    _schedule?: PromotionSchedule;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    ownership: Ownership1;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    apply_exclusive?: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    restrictions?: Restrictions1;
    post_order_action?: PromotionAction;
    buy_rules: any;
    visiblility?: Visibility;
    code?: string;
    stackable?: boolean;
    author?: PromotionAuthor;
    apply_all_discount?: boolean;
    application_id: string;
    promotion_type: string;
    _custom_json?: any;
    calculate_on?: string;
    display_meta: DisplayMeta1;
    mode: string;
    _schedule?: PromotionSchedule;
};
type PromotionUpdate = {
    ownership: Ownership1;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    apply_exclusive?: string;
    currency?: string;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    restrictions?: Restrictions1;
    post_order_action?: PromotionAction;
    buy_rules: any;
    visiblility?: Visibility;
    code?: string;
    stackable?: boolean;
    author?: PromotionAuthor;
    apply_all_discount?: boolean;
    application_id: string;
    promotion_type: string;
    _custom_json?: any;
    calculate_on?: string;
    display_meta: DisplayMeta1;
    mode: string;
    _schedule?: PromotionSchedule;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    modified_on?: string;
    title?: string;
    entity_type?: string;
    entity_slug?: string;
    description?: string;
    example?: string;
    subtitle?: string;
    created_on?: string;
    type?: string;
    is_hidden?: boolean;
};
type CartItem = {
    product_id: string;
    size: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type CartProductIdentifer = {
    identifier?: string;
};
type BuyRules = {
    item_criteria?: any;
    cart_conditions?: any;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    offer?: any;
    raw_offer?: any;
    item_criteria?: any;
};
type FreeGiftItem = {
    item_id?: number;
    item_brand_name?: string;
    item_slug?: string;
    item_price_details?: any;
    item_images_url?: string[];
    item_name?: string;
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    quantity?: number;
    parent_item_identifier?: string;
};
type AppliedPromotion = {
    mrp_promotion?: boolean;
    promotion_group?: string;
    promotion_type?: string;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRulesApp[];
    promotion_name?: string;
    article_quantity?: number;
    amount?: number;
    applied_free_articles?: AppliedFreeArticles[];
    offer_text?: string;
    promo_id?: string;
};
type PromoMeta = {
    message?: string;
};
type ProductPrice = {
    currency_symbol?: string;
    currency_code?: string;
    selling?: number;
    marked?: number;
    add_on?: number;
    effective?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    url?: string;
    type?: string;
    query?: ActionQuery;
};
type ProductImage = {
    aspect_ratio?: string;
    url?: string;
    secure_url?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    name?: string;
    categories?: CategoryInfo[];
    slug?: string;
    action?: ProductAction;
    images?: ProductImage[];
    uid?: number;
    type?: string;
    brand?: BaseInfo;
    net_quantity?: NetQuantity;
};
type BasePrice = {
    effective?: number;
    currency_symbol?: string;
    marked?: number;
    currency_code?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    size?: string;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    quantity?: number;
    extra_meta?: any;
    seller?: BaseInfo;
    price?: ArticlePriceInfo;
    store?: BaseInfo;
    uid?: string;
    type?: string;
};
type ProductAvailability = {
    sizes?: string[];
    deliverable?: boolean;
    out_of_stock?: boolean;
    other_store_quantity?: number;
    is_valid?: boolean;
};
type CartProductInfo = {
    parent_item_identifiers?: any;
    message?: string;
    identifiers: CartProductIdentifer;
    quantity?: number;
    promotions_applied?: AppliedPromotion[];
    promo_meta?: PromoMeta;
    price?: ProductPriceInfo;
    key?: string;
    product?: CartProduct;
    discount?: string;
    is_set?: boolean;
    article?: ProductArticle;
    bulk_offer?: any;
    coupon_message?: string;
    price_per_unit?: ProductPriceInfo;
    availability?: ProductAvailability;
};
type DisplayBreakup = {
    display?: string;
    message?: string[];
    currency_symbol?: string;
    currency_code?: string;
    key?: string;
    value?: number;
};
type RawBreakup = {
    fynd_cash?: number;
    coupon?: number;
    gst_charges?: number;
    total?: number;
    convenience_fee?: number;
    discount?: number;
    vog?: number;
    subtotal?: number;
    cod_charge?: number;
    you_saved?: number;
    delivery_charge?: number;
    mrp_total?: number;
};
type CouponBreakup = {
    message?: string;
    max_discount_value?: number;
    title?: string;
    coupon_type?: string;
    sub_title?: string;
    is_applied?: boolean;
    coupon_value?: number;
    description?: string;
    uid?: string;
    value?: number;
    type?: string;
    minimum_cart_value?: number;
    code?: string;
};
type LoyaltyPoints = {
    total?: number;
    applicable?: number;
    is_applied?: boolean;
    description?: string;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
};
type OpenapiCartDetailsResponse = {
    items?: CartProductInfo[];
    message?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    message?: string;
    success?: boolean;
    errors?: any;
};
type ShippingAddress = {
    email?: string;
    name?: string;
    area_code: string;
    phone?: number;
    meta?: any;
    country?: string;
    city?: string;
    address?: string;
    landmark?: string;
    area_code_slug?: string;
    address_type?: string;
    country_code?: string;
    state?: string;
    area?: string;
    pincode?: number;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
};
type PromiseTimestamp = {
    min?: number;
    max?: number;
};
type PromiseFormatted = {
    min?: string;
    max?: string;
};
type ShipmentPromise = {
    timestamp?: PromiseTimestamp;
    formatted?: PromiseFormatted;
};
type OpenApiCartServiceabilityResponse = {
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type OpenApiOrderItem = {
    product_id: number;
    size: string;
    meta?: CartItemMeta;
    quantity?: number;
    cashback_applied: number;
    delivery_charges: number;
    extra_meta?: any;
    coupon_effective_discount: number;
    payment_methods: MultiTenderPaymentMethod[];
    price_effective: number;
    employee_discount?: number;
    loyalty_discount?: number;
    files?: OpenApiFiles[];
    discount: number;
    cod_charges: number;
    price_marked: number;
    amount_paid: number;
};
type OpenApiPlatformCheckoutReq = {
    order_id?: string;
    cashback_applied: number;
    coupon?: string;
    affiliate_order_id?: string;
    currency_code?: string;
    coupon_code: string;
    cart_items: OpenApiOrderItem[];
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
    gstin?: string;
    shipping_address?: ShippingAddress;
    comment?: string;
    employee_discount?: any;
    cod_charges: number;
    delivery_charges: number;
    cart_value: number;
    files?: OpenApiFiles[];
    payment_mode?: string;
    billing_address: ShippingAddress;
    coupon_value: number;
};
type OpenApiCheckoutResponse = {
    message?: string;
    success?: boolean;
    order_id: string;
    order_ref_id?: string;
};
type AbandonedCart = {
    promotion?: any;
    meta?: any;
    user_id: string;
    coupon?: any;
    uid: number;
    discount?: number;
    pick_up_customer_details?: any;
    shipments?: any[];
    comment?: string;
    expire_at: string;
    delivery_charges?: any;
    cart_value?: number;
    is_default: boolean;
    fc_index_map?: number[];
    payments?: any;
    buy_now?: boolean;
    fynd_credits?: any;
    order_id?: string;
    payment_methods?: any[];
    is_active?: boolean;
    created_on: string;
    bulk_coupon_discount?: number;
    gstin?: string;
    cod_charges?: any;
    app_id?: string;
    checkout_mode?: string;
    articles: any[];
    is_archive?: boolean;
    merge_qty?: boolean;
    _id: string;
    payment_mode?: string;
    cashback: any;
    last_modified: string;
};
type AbandonedCartResponse = {
    message?: string;
    items?: AbandonedCart[];
    page?: Page;
    success?: boolean;
    result?: any;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    message?: string;
    currency?: CartCurrency;
    checkout_mode?: string;
    last_modified?: string;
    items?: CartProductInfo[];
    id?: string;
    comment?: string;
    coupon_text?: string;
    delivery_charge_info?: string;
    payment_selection_lock?: PaymentSelectionLock;
    gstin?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    buy_now?: boolean;
    restrict_checkout?: boolean;
    delivery_promise?: ShipmentPromise;
};
type AddProductCart = {
    item_id?: number;
    parent_item_identifiers?: any;
    product_group_tags?: string[];
    item_size?: string;
    quantity?: number;
    article_assignment?: any;
    display?: string;
    seller_id?: number;
    extra_meta?: any;
    pos?: boolean;
    article_id?: string;
    store_id?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    cart?: CartDetailResponse;
    success?: boolean;
    partial?: boolean;
    message?: string;
};
type UpdateProductCart = {
    item_id?: number;
    parent_item_identifiers?: any;
    item_size?: string;
    identifiers: CartProductIdentifer;
    quantity?: number;
    item_index?: number;
    extra_meta?: any;
    article_id?: string;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    success?: boolean;
    message?: string;
};
type E = {
    code?: number;
    exception?: string;
    info?: string;
    message?: string;
};
type GiveawayResponse = {
    items?: Giveaway[];
    page?: Page;
};
type Giveaway = {
    _id?: string;
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    audience?: RewardsAudience;
    banner_image?: Asset;
    created_at?: string;
    description?: string;
    name?: string;
    rule?: RewardsRule;
    title?: string;
    updated_at?: string;
};
type Schedule = {
    duration?: number;
    end?: string;
    start?: string;
    cron?: string;
};
type RewardsAudience = {
    header_user_id?: string;
    id?: string;
};
type RewardsRule = {
    amount?: number;
};
type Offer = {
    _schedule?: Schedule;
    active?: boolean;
    application_id?: string;
    banner_image?: Asset;
    created_at?: string;
    name?: string;
    rule?: any;
    share?: ShareMessages;
    sub_text?: string;
    text?: string;
    type?: string;
    updated_at?: string;
    updated_by?: string;
    url?: string;
};
type ShareMessages = {
    email?: number;
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
type Points = {
    available?: number;
};
type RewardUser = {
    _id?: string;
    active?: boolean;
    created_at?: string;
    referral?: Referral;
    uid?: number;
    updated_at?: string;
    user_block_reason?: string;
    user_id?: string;
};
type Referral = {
    code?: string;
};
type AppUser = {
    _id?: string;
    active?: boolean;
    application_id?: string;
    block_reason?: string;
    updated_at?: string;
    updated_by?: string;
    user_id?: string;
};
type GiveawayAudience = {
    audience_id?: string;
    current_count?: number;
};
type HistoryRes = {
    items?: PointsHistory[];
    page?: Page;
    points?: number;
};
type PointsHistory = {
    _id?: string;
    application_id?: string;
    claimed?: boolean;
    created_at?: string;
    expires_on?: string;
    meta?: any;
    points?: number;
    remaining_points?: number;
    text_1?: string;
    text_2?: string;
    text_3?: string;
    txn_name?: string;
    updated_at?: string;
    user_id?: string;
};
type StatGroup = {
    key?: string;
    url?: string;
    title?: string;
};
type StatsGroups = {
    groups?: StatGroup[];
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
    components?: StatsGroupComponent[];
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
    properties_cart_id?: string;
    context_traits_first_name?: string;
    context_traits_last_name?: string;
    context_traits_phone_number?: string;
    context_traits_email?: string;
    context_app_application_id?: string;
    properties_breakup_values_raw_total?: string;
    received_at?: ReceivedAt;
};
type AbandonCartsList = {
    items?: AbandonCartsDetail[];
    cart_total?: string;
    page?: Page;
};
type AbandonCartDetail = {
    _id?: string;
    user_id?: string;
    cart_value?: string;
    articles?: any[];
    breakup?: any;
    address?: any;
};
type ExportJobReq = {
    marketplace_name?: string;
    start_time?: string;
    end_time?: string;
    event_type?: string;
    trace_id?: string;
};
type ExportJobRes = {
    status?: string;
    job_id?: string;
};
type ExportJobStatusRes = {
    status?: string;
    job_id?: string;
    download_url?: string;
};
type GetLogsListReq = {
    marketplace_name?: string;
    start_date?: string;
    company_id?: string;
    end_date?: string;
};
type MkpLogsResp = {
    start_time_iso?: string;
    end_time_iso?: string;
    event_type?: string;
    trace_id?: string;
    count?: string;
    status?: string;
};
type GetLogsListRes = {
    items?: MkpLogsResp[];
    page?: Page;
};
type SearchLogReq = {
    marketplace_name?: string;
    start_date?: string;
    company_id?: string;
    end_date?: string;
    identifier?: string;
    identifier_value?: string;
};
type LogInfo = {
    _id?: string;
    status?: string;
    event_type?: string;
    marketplace_name?: string;
    event?: string;
    trace_id?: string;
    company_id?: number;
    brand_id?: number;
    store_code?: string;
    store_id?: number;
    item_id?: number;
    article_id?: string;
    seller_identifier?: string;
};
type SearchLogRes = {
    items?: LogInfo[];
    page?: Page;
};
type ValidityObject = {
    start: string;
    end: string;
};
type CreateUpdateDiscount = {
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids: string[];
    extension_ids: string[];
    job_type: string;
    discount_type: string;
    discount_level: string;
    value?: number;
    file_path?: string;
    brand_ids?: number[];
    store_ids?: number[];
    validity: ValidityObject;
};
type DiscountJob = {
    _id: string;
    name: string;
    company_id: number;
    is_active: boolean;
    app_ids?: string[];
    job_type?: string;
    discount_type?: string;
    discount_level?: string;
    value?: number;
    file_path?: string;
    brand_ids?: number[];
    store_ids?: number[];
    validity: ValidityObject;
    created_on: string;
    modified_on: string;
    created_by: UserDetails;
    modified_by: UserDetails;
    meta?: any;
};
type ListOrCalender = {
    items: DiscountJob[];
    page: Page;
};
type DiscountItems = {
    item_code?: string;
    brand_uid?: number;
    seller_identifier?: string;
    discount_type: string;
    value: number;
};
type BulkDiscount = {
    company_id: number;
    items: DiscountItems[];
};
type FileJobResponse = {
    stage: string;
    total: number;
    failed: number;
    company_id: number;
    body?: any;
    type: string;
    file_type: string;
};
type DownloadFileJob = {
    brand_ids?: number[];
    store_ids?: number[];
};
type CancelJobResponse = {
    success: boolean;
};
type UserDetails = {
    username: string;
    user_id: string;
};
type BadRequestObject = {
    message: string;
};
type AddProxyReq = {
    attached_path?: string;
    proxy_url?: string;
};
type AddProxyResponse = {
    _id?: string;
    attached_path?: string;
    proxy_url?: string;
    company_id?: string;
    application_id?: string;
    extension_id?: string;
    created_at?: string;
    modified_at?: string;
};
type APIError = {
    code?: string;
    message?: string;
    info?: string;
    request_id?: string;
    meta?: any;
};
type RemoveProxyResponse = {
    message?: string;
    data?: any;
};
type EventConfig = {
    id?: number;
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
    display_name?: string;
    description?: string;
    created_on?: string;
};
type EventConfigList = {
    items?: EventConfig[];
    page?: Page;
};
type EventConfigResponse = {
    event_configs?: EventConfig[];
};
type SubscriberConfigList = {
    items?: SubscriberResponse[];
    page?: Page;
};
type EventProcessedStatus = {
    id?: number;
    subscriber_id?: string;
    attempt?: number;
    response_code?: string;
    response_message?: string;
    created_on?: string;
    processed_on?: string;
    status?: boolean;
};
type EventPayload = {
    id?: number;
    event_trace_id?: string;
    message_id?: string;
    event_name?: string;
    event_type?: string;
    version?: string;
    status?: boolean;
};
type SubscriberConfig = {
    id?: number;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    status?: SubscriberStatus;
    email_id?: string;
    auth_meta?: AuthMeta;
    event_id?: number[];
};
type SubscriberResponse = {
    id?: number;
    name?: string;
    webhook_url?: string;
    association?: Association;
    custom_headers?: any;
    email_id?: string;
    status?: SubscriberStatus;
    auth_meta?: AuthMeta;
    created_on?: string;
    updated_on?: string;
    event_configs?: EventConfig[];
};
type SubscriberEvent = {
    id?: number;
    subscriber_id?: number;
    event_id?: number;
    created_date?: string;
};
type AuthMeta = {
    type?: string;
    secret?: string;
};
type Association = {
    company_id?: number;
    application_id?: string[];
    extension_id?: string;
    criteria?: string;
};
type EventConfigBase = {
    event_name?: string;
    event_type?: string;
    event_category?: string;
    version?: string;
};
type RequestBodyAuditLog = {
    log_meta: LogMetaObj;
    log_payload: any;
};
type CreateLogResponse = {
    message?: string;
    internal_message?: string;
};
type LogMetaObj = {
    modifier?: any;
    application?: string;
    entity?: EntityObject;
    device_info?: any;
    location?: any;
};
type EntityObject = {
    id?: string;
    type?: string;
    action?: string;
};
type LogSchemaResponse = {
    docs?: LogDocs[];
};
type LogDocs = {
    entity?: EntityObj;
    modifier?: Modifier;
    device_info?: DeviceInfo;
    location?: Location;
    _id?: string;
    company?: string;
    application?: string;
    sessions?: string;
    date?: string;
    logs?: any;
};
type EntityObj = {
    id?: string;
    type?: string;
    action?: string;
    entity_details?: any;
};
type Modifier = {
    user_id?: string;
    as_administrator?: boolean;
    user_details?: any;
};
type DeviceInfo = {
    user_agent?: string;
    extra_meta?: any;
};
type Location = {
    extra_meta?: any;
};
type EntityTypesResponse = {
    items?: EntityTypeObj[];
};
type EntityTypeObj = {
    entity_value?: string;
    display_name?: string;
};
