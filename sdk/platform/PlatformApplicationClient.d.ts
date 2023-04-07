export = PlatformApplicationClient;
declare class PlatformApplicationClient {
    constructor(applicationId: any, config: any);
    config: any;
    companyId: any;
    applicationId: any;
    lead: Lead;
    feedback: Feedback;
    theme: Theme;
    user: User;
    content: Content;
    communication: Communication;
    payment: Payment;
    order: Order;
    catalog: Catalog;
    fileStorage: FileStorage;
    share: Share;
    configuration: Configuration;
    cart: Cart;
    rewards: Rewards;
    analytics: Analytics;
    partner: Partner;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformApplicationClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, SessionListResponseInfo, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserEmails, UserPhoneNumbers, GenerateSEOContent, GeneratedSEOContent, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutMoreAttributes, PayoutAggregator, PayoutCustomer, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, Prices, ShipmentItemFulFillingStore, PlatformItem, GSTDetailsData, BagUnit, ShipmentStatus, PaymentModeInfo, UserDataInfo, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, OrderDetailsData, Dimensions, Meta, OrderBagArticle, Identifier, FinancialBreakup, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagStateMapper, CurrentStatus, OrderBrandName, BagGST, BagConfigs, PlatformDeliveryAddress, OrderBags, OrderingStoreDetails, ShipmentStatusData, UserDetailsData, FulfillingStore, EinvoiceInfo, BuyerDetails, DebugInfo, Formatted, LockData, ShipmentTimeStamp, ShipmentMeta, AffiliateMeta, PDFLinks, AffiliateDetails, BagStatusHistory, InvoiceInfo, DPDetailsData, TrackingList, ShipmentPayments, PhoneDetails, ContactDetails, CompanyDetails, PlatformShipment, ShipmentInfoResponse, TaxDetails, PlatformUserDetails, TransactionData, BillingStaffDetails, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, AffiliateBagDetails, ArticleDetails, Weight, ReturnConfig, Article, B2BPODetails, BagMeta, Attributes, Item, Dates, BagReturnableCancelableStatus, EInvoicePortalDetails, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, StoreMeta, StoreAddress, Store, Brand, BagGSTDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryStoreConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, UserData, OrderPriority, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta1, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, TaxInfo, ProcessingDates, Tax, Charge, LineItem, Shipment, PaymentMethod, PaymentInfo, ShippingInfo, BillingInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, LimitedProductData, Price, Size, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, Media1, BannerImage, ImageUrls, CollectionQuery, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionImage, UserInfo, SeoDetail, CollectionBanner, CollectionSchedule, CollectionBadge, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, UserInfo1, ProductTemplateExportResponse, ProductDownloadsResponse, ProductTemplateExportFilterRequest, ProductTemplateDownloadsExport, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Logo, Trader, Image, NetQuantityResponse, ProductPublish, VerifiedBy, ReturnConfigResponse, ProductSchemaV2, ProductListingResponseV2, TeaserTag, TaxIdentifier, NetQuantity, CustomOrder, ProductPublish1, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkJob, BulkResponse, BulkProductRequest, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, BrandMeta, PriceMeta, Trader1, WeightResponse, ManufacturerResponse, QuantityBase, Quantities, CompanyMeta, ReturnConfig1, DimensionResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BrandMeta1, PriceArticle, Trader2, ArticleStoreResponse, Quantity, QuantitiesArticle, WeightResponse1, ManufacturerResponse1, CompanyMeta1, ReturnConfig2, DimensionResponse1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportQuantityFilter, InventoryExportAdvanceOption, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, InventoryJobFilters, InventoryJobDetailResponse, InventoryExportJobListResponse, InventoryExportFilter, InventoryCreateRequest, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, PageResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, LocationTimingSerializer, LocationDayWiseSerializer, SellerPhoneNumber, LocationManagerSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer1, LocationIntegrationType, GetAddressSerializer, UserSerializer2, GetCompanySerializer, ProductReturnConfigSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, BusinessCountryInfo, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CommunicationConfig, CommsConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Ownership, RuleDefinition, Validity, Rule, PriceRange, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, BulkBundleRestriction, PostOrder, Restrictions, State, CouponAction, DisplayMetaDict, DisplayMeta, CouponAuthor, CouponDateMeta, Validation, CouponSchedule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, Ownership1, CompareObject, ItemCriteria, PromotionAction, PromotionSchedule, DisplayMeta1, PromotionDateMeta, Visibility, DiscountOffer, DiscountRule, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, PostOrder1, Restrictions1, PromotionAuthor, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, RawBreakup, CouponBreakup, LoyaltyPoints, DisplayBreakup, CartBreakup, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, PromoMeta, Ownership2, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, ProductAvailability, CartProductIdentifer, ProductPrice, ProductPriceInfo, ProductImage, ActionQuery, ProductAction, CategoryInfo, CartProduct, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartRequest, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, Files, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
}
import Lead = require("./Lead/LeadPlatformApplicationClient");
import Feedback = require("./Feedback/FeedbackPlatformApplicationClient");
import Theme = require("./Theme/ThemePlatformApplicationClient");
import User = require("./User/UserPlatformApplicationClient");
import Content = require("./Content/ContentPlatformApplicationClient");
import Communication = require("./Communication/CommunicationPlatformApplicationClient");
import Payment = require("./Payment/PaymentPlatformApplicationClient");
import Order = require("./Order/OrderPlatformApplicationClient");
import Catalog = require("./Catalog/CatalogPlatformApplicationClient");
import FileStorage = require("./FileStorage/FileStoragePlatformApplicationClient");
import Share = require("./Share/SharePlatformApplicationClient");
import Configuration = require("./Configuration/ConfigurationPlatformApplicationClient");
import Cart = require("./Cart/CartPlatformApplicationClient");
import Rewards = require("./Rewards/RewardsPlatformApplicationClient");
import Analytics = require("./Analytics/AnalyticsPlatformApplicationClient");
import Partner = require("./Partner/PartnerPlatformApplicationClient");
type ApplicationResponse = {
    application?: ApplicationData;
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
type ApplicationData = {
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
    slug?: string;
};
type NotFound = {
    message?: string;
};
type BadRequest = {
    message?: string;
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
type LocationDefaultLanguage = {
    name?: string;
    code?: string;
};
type LocationDefaultCurrency = {
    name?: string;
    symbol?: string;
    code?: string;
};
type LocationDetails = {
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
    state_code?: string;
    country_code?: string;
    latitude?: string;
    longitude?: string;
};
type Locations = {
    items?: LocationDetails[];
};
type TicketList = {
    items?: Ticket[];
    filters?: Filter;
    page?: Page;
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
    ticket?: Ticket;
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
    category: TicketCategory;
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
    items?: SessionListResponseInfo[];
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
type SessionListResponseInfo = {
    session_id?: string;
    user_agent?: string;
    ip?: string;
    domain?: string;
    expire_in?: string;
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
    phone_numbers?: UserPhoneNumbers[];
    emails?: UserEmails[];
};
type UserEmails = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    email?: string;
};
type UserPhoneNumbers = {
    active?: boolean;
    primary?: boolean;
    verified?: boolean;
    phone?: string;
    country_code?: string;
};
type GenerateSEOContent = {
    text?: string;
    existing_text?: string;
    keywords?: string[];
    type?: string;
};
type GeneratedSEOContent = {
    title?: string;
    description?: string;
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
    __source?: PathSourceSchema;
};
type PathSourceSchema = {
    type?: string;
    id?: string;
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
    credit_balance?: number;
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
    mandate_amount?: number;
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
    success: boolean;
    app_id: string;
    created: boolean;
    excluded_fields: string[];
    aggregators?: any[];
    display_fields: string[];
};
type ErrorCodeDescription = {
    success: boolean;
    code: string;
    description: string;
};
type PaymentGatewayConfig = {
    config_type: string;
    key: string;
    secret: string;
    merchant_salt: string;
    is_active?: boolean;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    aggregator_name?: PaymentGatewayConfig;
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
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentApp = {
    display_name?: string;
    code?: string;
    logos?: PaymentModeLogo;
    package_name?: string;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    code?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_issuer?: string;
    card_brand?: string;
    cod_limit_per_order?: number;
    intent_app_error_list?: string[];
    name?: string;
    card_isin?: string;
    cod_limit?: number;
    card_reference?: string;
    nickname?: string;
    exp_year?: number;
    card_type?: string;
    display_priority?: number;
    retry_count?: number;
    fynd_vpa?: string;
    display_name?: string;
    merchant_code?: string;
    intent_flow?: boolean;
    card_id?: string;
    exp_month?: number;
    card_brand_image?: string;
    card_number?: string;
    remaining_limit?: number;
    logo_url?: PaymentModeLogo;
    card_name?: string;
    aggregator_name: string;
    intent_app?: IntentApp[];
    card_fingerprint?: string;
    expired?: boolean;
    card_token?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    timeout?: number;
};
type RootPaymentMode = {
    display_name: string;
    aggregator_name?: string;
    name: string;
    is_pay_by_card_pl?: boolean;
    anonymous_enable?: boolean;
    save_card?: boolean;
    list?: PaymentModeList[];
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
type PayoutMoreAttributes = {
    state?: string;
    bank_name?: string;
    ifsc_code?: string;
    account_holder?: string;
    account_no?: string;
    account_type?: string;
    country?: string;
    city?: string;
    branch_name?: string;
};
type PayoutAggregator = {
    aggregator_id?: number;
    aggregator_fund_id?: number;
    payout_details_id?: number;
};
type PayoutCustomer = {
    mobile?: string;
    id?: number;
    name?: string;
    unique_external_id?: string;
};
type Payout = {
    more_attributes: PayoutMoreAttributes;
    unique_transfer_no: string;
    is_default: boolean;
    payouts_aggregators?: PayoutAggregator[];
    transfer_type: string;
    customers: PayoutCustomer;
    is_active: boolean;
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    state?: string;
    branch_name?: string;
    ifsc_code: string;
    bank_name?: string;
    account_no?: string;
    account_type: string;
    pincode?: number;
    country?: string;
    city?: string;
    account_holder?: string;
};
type PayoutRequest = {
    bank_details: PayoutBankDetails;
    aggregator: string;
    users: any;
    unique_external_id: string;
    transfer_type: string;
    is_active: boolean;
};
type PayoutResponse = {
    bank_details: any;
    aggregator: string;
    success: boolean;
    unique_transfer_no: string;
    users: any;
    created: boolean;
    transfer_type: string;
    payouts: any;
    payment_status: string;
    is_active: boolean;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_default: boolean;
    is_active: boolean;
};
type UpdatePayoutRequest = {
    is_active: boolean;
    is_default: boolean;
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
    is_verified_flag?: boolean;
    message: string;
    data?: any;
};
type NotFoundResourceError = {
    success: boolean;
    code: string;
    description: string;
};
type BankDetailsForOTP = {
    ifsc_code: string;
    bank_name: string;
    account_holder: string;
    account_no: string;
    branch_name: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    success?: boolean;
    bank_name: string;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    ifsc_code: string;
    account_holder: string;
    beneficiary_id: string;
    created_on: string;
    bank_name: string;
    id: number;
    transfer_mode: string;
    mobile?: string;
    address: string;
    is_active: boolean;
    display_name: string;
    email: string;
    comment?: string;
    account_no: string;
    subtitle: string;
    modified_on: string;
    title: string;
    delights_user_name?: string;
    branch_name?: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    current_status?: string;
    payment_gateway?: string;
    payment_id?: string;
    extra_meta?: any;
};
type MultiTenderPaymentMethod = {
    name?: string;
    mode: string;
    amount: number;
    meta?: MultiTenderPaymentMeta;
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
    methods: any;
    source: string;
    mode_of_payment: string;
    callback_url?: any;
    cod_charges?: number;
    payment_selection_lock?: any;
    cod_amount_limit?: number;
    enabled: boolean;
};
type PlatfromPaymentConfig = {
    success: boolean;
    message: string;
    data: PlatformPaymentOptions;
};
type UpdatePlatformPaymentConfig = {
    anonymous_cod?: boolean;
    methods: any;
    payment_selection_lock?: any;
    cod_charges?: number;
    cod_amount_limit?: number;
};
type CODdata = {
    usages: number;
    remaining_limit: number;
    user_id: string;
    limit: number;
    is_active: boolean;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
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
type EdcModelData = {
    aggregator_id: number;
    aggregator: string;
    models: string[];
};
type EdcAggregatorAndModelListResponse = {
    success: boolean;
    data: EdcModelData[];
};
type StatisticsData = {
    active_device_count: number;
    inactive_device_count: number;
};
type EdcDeviceStatsResponse = {
    success: boolean;
    statistics: StatisticsData;
};
type EdcAddRequest = {
    terminal_serial_no: string;
    device_tag?: string;
    edc_model: string;
    aggregator_id: number;
    edc_device_serial_no: string;
    store_id: number;
};
type EdcDevice = {
    aggregator_name?: string;
    terminal_serial_no: string;
    merchant_store_pos_code?: string;
    device_tag: string;
    edc_model?: string;
    terminal_unique_identifier: string;
    aggregator_id: number;
    application_id: string;
    edc_device_serial_no: string;
    store_id: number;
    is_active: boolean;
};
type EdcDeviceAddResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcDeviceDetailsResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcUpdateRequest = {
    edc_device_serial_no?: string;
    device_tag?: string;
    edc_model?: string;
    aggregator_id?: number;
    merchant_store_pos_code?: string;
    store_id?: number;
    is_active?: boolean;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    success: boolean;
    items: EdcDevice[];
    page: Page;
};
type PaymentInitializationRequest = {
    aggregator: string;
    currency: string;
    email: string;
    amount: number;
    order_id: string;
    method: string;
    device_id?: string;
    customer_id: string;
    contact: string;
    vpa?: string;
    razorpay_payment_id?: string;
    merchant_order_id: string;
    timeout?: number;
};
type PaymentInitializationResponse = {
    aggregator: string;
    amount?: number;
    method: string;
    upi_poll_url?: string;
    success: boolean;
    razorpay_payment_id?: string;
    device_id?: string;
    status?: string;
    customer_id?: string;
    aggregator_order_id?: string;
    vpa?: string;
    polling_url: string;
    virtual_id?: string;
    currency?: string;
    merchant_order_id: string;
    bqr_image?: string;
    timeout?: number;
};
type PaymentStatusUpdateRequest = {
    aggregator: string;
    amount: number;
    email: string;
    order_id: string;
    method: string;
    device_id?: string;
    status: string;
    customer_id: string;
    contact: string;
    vpa?: string;
    currency: string;
    merchant_order_id: string;
};
type PaymentStatusUpdateResponse = {
    aggregator_name: string;
    success?: boolean;
    status: string;
    redirect_url?: string;
    retry: boolean;
};
type ResendOrCancelPaymentRequest = {
    order_id: string;
    request_type: string;
    device_id?: string;
};
type LinkStatus = {
    message: string;
    status: boolean;
};
type ResendOrCancelPaymentResponse = {
    success: boolean;
    data: LinkStatus;
};
type FilterInfoOption = {
    value?: string;
    text: string;
    name?: string;
};
type FiltersInfo = {
    type: string;
    value: string;
    text: string;
    options?: FilterInfoOption[];
};
type Prices = {
    coupon_value?: number;
    fynd_credits?: number;
    price_effective?: number;
    amount_paid_roundoff?: number;
    cod_charges?: number;
    price_marked?: number;
    transfer_price?: number;
    cashback?: number;
    discount?: number;
    refund_amount?: number;
    value_of_good?: number;
    tax_collected_at_source?: number;
    amount_paid?: number;
    promotion_effective_discount?: number;
    refund_credit?: number;
    cashback_applied?: number;
    delivery_charge?: number;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type PlatformItem = {
    color?: string;
    code?: string;
    department_id?: number;
    l3_category_name?: string;
    id?: number;
    images?: string[];
    l1_category?: string[];
    l3_category?: number;
    size?: string;
    name?: string;
    image?: string[];
    can_return?: boolean;
    can_cancel?: boolean;
};
type GSTDetailsData = {
    gst_fee: number;
    brand_calculated_amount: number;
    gstin_code: string;
    value_of_good: number;
    tax_collected_at_source: number;
};
type BagUnit = {
    item_quantity: number;
    item?: PlatformItem;
    prices?: Prices;
    ordering_channel: string;
    gst?: GSTDetailsData;
    shipment_id: string;
    status: any;
    total_shipment_bags: number;
    bag_id: number;
    can_return?: boolean;
    can_cancel?: boolean;
};
type ShipmentStatus = {
    ops_status: string;
    hex_code: string;
    title: string;
    status: string;
    actual_status: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type UserDataInfo = {
    is_anonymous_user?: boolean;
    avis_user_id?: string;
    last_name?: string;
    uid?: number;
    gender?: string;
    email?: string;
    name?: string;
    first_name?: string;
    mobile?: string;
};
type ShipmentItem = {
    application?: any;
    prices?: Prices;
    total_shipments_in_order: number;
    fulfilling_store?: ShipmentItemFulFillingStore;
    company?: any;
    shipment_created_at: string;
    total_bags_count: number;
    created_at: string;
    shipment_id?: string;
    bags?: BagUnit[];
    id: string;
    payment_methods?: any;
    shipment_status?: ShipmentStatus;
    channel?: any;
    payment_mode_info?: PaymentModeInfo;
    user?: UserDataInfo;
    sla?: any;
    fulfilling_centre: string;
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    applied_filters?: any;
    items?: ShipmentItem[];
    page?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type OrderDetailsData = {
    ordering_channel_logo?: any;
    cod_charges?: string;
    fynd_order_id: string;
    ordering_channel?: string;
    tax_details?: any;
    source?: string;
    order_value?: string;
    affiliate_id?: string;
    order_date?: string;
};
type Dimensions = {
    height?: number;
    unit?: string;
    width?: number;
    length?: number;
    is_default?: boolean;
};
type Meta = {
    dimension?: Dimensions;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    fynd_credits: number;
    transfer_price: number;
    value_of_good: number;
    tax_collected_at_source?: number;
    refund_credit: number;
    total_units: number;
    hsn_code: string;
    amount_paid_roundoff?: number;
    cod_charges: number;
    price_marked: number;
    gst_tag: string;
    added_to_fynd_cash: boolean;
    amount_paid: number;
    gst_tax_percentage: number;
    gst_fee: number;
    cashback: number;
    discount: number;
    item_name: string;
    promotion_effective_discount: number;
    delivery_charge: number;
    brand_calculated_amount: number;
    coupon_value: number;
    price_effective: number;
    size: string;
    identifiers: Identifier;
    coupon_effective_discount: number;
    cashback_applied: number;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type AppliedPromos = {
    amount?: number;
    promo_id?: string;
    buy_rules?: BuyRules[];
    article_quantity?: number;
    promotion_type?: string;
    discount_rules?: DiscountRules[];
    mrp_promotion?: boolean;
    promotion_name?: string;
};
type BagStateMapper = {
    notify_customer?: boolean;
    bs_id: number;
    app_display_name?: string;
    is_active?: boolean;
    display_name: string;
    journey_type: string;
    state_type: string;
    app_facing?: boolean;
    name: string;
    app_state_name?: string;
};
type CurrentStatus = {
    current_status_id: number;
    updated_at?: string;
    bag_state_mapper?: BagStateMapper;
    kafka_sync?: boolean;
    created_at?: string;
    store_id?: number;
    status?: string;
    delivery_partner_id?: number;
    state_id?: number;
    shipment_id?: string;
    state_type?: string;
    bag_id?: number;
    delivery_awb_number?: string;
};
type OrderBrandName = {
    created_on: string;
    company: string;
    id: number;
    logo: string;
    brand_name: string;
    modified_on?: string;
};
type BagGST = {
    brand_calculated_amount?: number;
    gst_fee?: number;
    hsn_code?: string;
    gst_tag?: string;
    gstin_code?: string;
    value_of_good?: number;
    is_default_hsn_code?: boolean;
    gst_tax_percentage?: number;
};
type BagConfigs = {
    enable_tracking: boolean;
    is_active: boolean;
    is_returnable: boolean;
    allow_force_return: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
};
type PlatformDeliveryAddress = {
    phone?: string;
    state?: string;
    city?: string;
    country?: string;
    latitude?: number;
    contact_person?: string;
    pincode?: string;
    address_category?: string;
    address1?: string;
    created_at?: string;
    email?: string;
    address2?: string;
    longitude?: number;
    version?: string;
    updated_at?: string;
    address_type?: string;
    landmark?: string;
    area?: string;
};
type OrderBags = {
    seller_identifier?: string;
    article?: OrderBagArticle;
    item?: PlatformItem;
    display_name?: string;
    financial_breakup?: FinancialBreakup;
    quantity?: number;
    applied_promos?: AppliedPromos[];
    can_return?: boolean;
    current_status?: CurrentStatus;
    line_number?: number;
    identifier?: string;
    prices?: Prices;
    entity_type?: string;
    brand?: OrderBrandName;
    gst_details?: BagGST;
    bag_configs?: BagConfigs;
    bag_id: number;
    parent_promo_bags?: any;
    delivery_address?: PlatformDeliveryAddress;
    can_cancel?: boolean;
};
type OrderingStoreDetails = {
    phone: string;
    state: string;
    city: string;
    country: string;
    ordering_store_id: number;
    address: string;
    contact_person: string;
    pincode: string;
    code: string;
    meta: any;
    store_name: string;
};
type ShipmentStatusData = {
    bag_list?: string[];
    created_at?: string;
    shipment_id?: string;
    status?: string;
    id?: number;
};
type UserDetailsData = {
    phone: string;
    state: string;
    city: string;
    country: string;
    address: string;
    pincode: string;
    address1?: string;
    email?: string;
    name: string;
    address_type?: string;
    landmark?: string;
    area?: string;
};
type FulfillingStore = {
    phone: string;
    state: string;
    city: string;
    country: string;
    address: string;
    contact_person: string;
    pincode: string;
    code: string;
    meta: any;
    id: number;
    store_name: string;
    fulfillment_channel: string;
};
type EinvoiceInfo = {
    credit_note?: any;
    invoice?: any;
};
type BuyerDetails = {
    state: string;
    city: string;
    address: string;
    pincode: number;
    gstin: string;
    ajio_site_id?: string;
    name: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type LockData = {
    mto?: boolean;
    locked?: boolean;
    lock_message?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type ShipmentMeta = {
    auto_trigger_dp_assignment_acf: boolean;
    einvoice_info?: EinvoiceInfo;
    bag_weight?: any;
    b2b_buyer_details?: BuyerDetails;
    weight: number;
    debug_info?: DebugInfo;
    due_date?: string;
    ewaybill_info?: any;
    b2c_buyer_details?: any;
    same_store_available: boolean;
    shipment_weight?: number;
    store_invoice_updated_date?: string;
    fulfilment_priority_text?: string;
    return_affiliate_shipment_id?: string;
    box_type?: string;
    formatted?: Formatted;
    packaging_name?: string;
    marketplace_store_id?: string;
    shipment_volumetric_weight?: number;
    dp_sort_key?: string;
    po_number?: string;
    dp_id?: string;
    awb_number?: string;
    return_affiliate_order_id?: string;
    return_awb_number?: string;
    return_store_node?: number;
    assign_dp_from_sb?: boolean;
    order_type?: string;
    dp_name?: string;
    return_details?: any;
    external?: any;
    dp_options?: any;
    lock_data?: LockData;
    forward_affiliate_order_id?: string;
    timestamp?: ShipmentTimeStamp;
    forward_affiliate_shipment_id?: string;
};
type AffiliateMeta = {
    box_type?: string;
    employee_discount?: number;
    coupon_code?: string;
    is_priority?: boolean;
    channel_order_id?: string;
    channel_shipment_id?: string;
    quantity?: number;
    loyalty_discount?: number;
    size_level_total_qty?: number;
    order_item_id?: string;
    due_date?: string;
};
type PDFLinks = {
    b2b?: string;
    delivery_challan_a4?: string;
    label_a6?: string;
    invoice_a4?: string;
    invoice_type: string;
    po_invoice?: string;
    label?: string;
    invoice_pos?: string;
    invoice_a6?: string;
    invoice?: string;
    credit_note_url?: string;
    label_a4?: string;
    label_type: string;
    label_pos?: string;
};
type AffiliateDetails = {
    affiliate_bag_id: string;
    shipment_meta: ShipmentMeta;
    ad_id?: string;
    affiliate_order_id: string;
    affiliate_store_id: string;
    affiliate_shipment_id: string;
    affiliate_meta: AffiliateMeta;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    company_affiliate_tag?: string;
};
type BagStatusHistory = {
    app_display_name?: string;
    display_name?: string;
    bsh_id?: number;
    bag_state_mapper?: BagStateMapper;
    kafka_sync?: boolean;
    created_at?: string;
    store_id?: number;
    shipment_id?: string;
    delivery_partner_id?: number;
    status: string;
    state_id?: number;
    reasons?: any[];
    state_type?: string;
    bag_id?: number;
    updated_at?: string;
    delivery_awb_number?: string;
    forward?: boolean;
};
type InvoiceInfo = {
    credit_note_id?: string;
    invoice_url?: string;
    label_url?: string;
    store_invoice_id?: string;
    updated_date?: string;
};
type DPDetailsData = {
    awb_no?: string;
    eway_bill_id?: string;
    country?: string;
    track_url?: string;
    gst_tag?: string;
    pincode?: string;
    id?: number;
    name?: string;
};
type TrackingList = {
    is_current?: boolean;
    text: string;
    time?: string;
    is_passed?: boolean;
    status: string;
};
type ShipmentPayments = {
    logo?: string;
    source?: string;
    mode?: string;
};
type PhoneDetails = {
    mobile_number?: string;
    country_code?: number;
};
type ContactDetails = {
    emails?: string[];
    phone?: PhoneDetails[];
};
type CompanyDetails = {
    company_id?: number;
    address?: any;
    company_cin?: string;
    company_name?: string;
    company_gst?: string;
    company_contact?: ContactDetails;
};
type PlatformShipment = {
    total_bags?: number;
    order?: OrderDetailsData;
    picked_date?: string;
    shipment_id: string;
    meta?: Meta;
    invoice_id?: string;
    priority_text?: string;
    vertical?: string;
    delivery_slot?: any;
    forward_shipment_id?: string;
    bags?: OrderBags[];
    ordering_store?: OrderingStoreDetails;
    user_agent?: string;
    status?: ShipmentStatusData;
    enable_dp_tracking?: boolean;
    shipment_status?: string;
    payment_mode?: string;
    custom_meta?: any[];
    total_items?: number;
    billing_details?: UserDetailsData;
    prices?: Prices;
    operational_status?: string;
    fulfilling_store?: FulfillingStore;
    coupon?: any;
    delivery_details?: UserDetailsData;
    packaging_type?: string;
    affiliate_details?: AffiliateDetails;
    fulfilment_priority?: number;
    bag_status_history?: BagStatusHistory[];
    invoice?: InvoiceInfo;
    dp_details?: DPDetailsData;
    user?: UserDataInfo;
    shipment_quantity?: number;
    tracking_list?: TrackingList[];
    journey_type?: string;
    gst_details?: GSTDetailsData;
    lock_status?: boolean;
    payment_methods?: any;
    payments?: ShipmentPayments;
    company_details?: CompanyDetails;
    platform_logo?: string;
    shipment_images?: string[];
};
type ShipmentInfoResponse = {
    message?: string;
    shipments?: PlatformShipment[];
    success: boolean;
};
type TaxDetails = {
    pan_no?: string;
    gstin?: string;
};
type PlatformUserDetails = {
    platform_user_first_name?: string;
    platform_user_employee_code?: string;
    platform_user_id?: string;
    platform_user_last_name?: string;
};
type TransactionData = {
    transaction_id?: string;
    payment_id?: string;
    terminal_id?: string;
    status?: string;
    amount_paid?: string;
    entity?: string;
    unique_reference_number?: string;
    currency?: string;
};
type BillingStaffDetails = {
    first_name?: string;
    last_name?: string;
    staff_id?: number;
    employee_code?: string;
    user?: string;
};
type OrderMeta = {
    comment?: string;
    mongo_cart_id?: number;
    employee_id?: number;
    company_logo?: string;
    order_platform?: string;
    cart_id?: number;
    staff?: any;
    platform_user_details?: PlatformUserDetails;
    order_tags?: any[];
    ordering_store?: number;
    extra_meta?: any;
    customer_note?: string;
    files?: any[];
    transaction_data?: TransactionData;
    billing_staff_details?: BillingStaffDetails;
    currency_symbol?: string;
    order_type?: string;
    payment_type?: string;
    order_child_entities?: string[];
};
type OrderDict = {
    prices?: Prices;
    fynd_order_id: string;
    tax_details?: TaxDetails;
    meta?: OrderMeta;
    payment_methods?: any;
    order_date: string;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    order?: OrderDict;
    success: boolean;
};
type SubLane = {
    total_items?: number;
    actions?: any[];
    value?: string;
    text?: string;
    index?: number;
};
type SuperLane = {
    total_items?: number;
    value: string;
    text: string;
    options?: SubLane[];
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformBreakupValues = {
    value?: string;
    display?: string;
    name?: string;
};
type PlatformOrderItems = {
    order_id?: string;
    total_order_value?: number;
    order_value?: number;
    meta?: any;
    order_created_time?: string;
    payment_mode?: string;
    channel?: PlatformChannel;
    breakup_values?: PlatformBreakupValues[];
    user_info?: UserDataInfo;
    shipments?: PlatformShipment[];
};
type OrderListingResponse = {
    total_count?: number;
    message?: string;
    success?: boolean;
    lane?: string;
    items?: PlatformOrderItems[];
    page?: Page;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    value: number;
    key: string;
    text: string;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    account_name?: string;
    reason?: string;
    shipment_type?: string;
    meta?: any;
    status?: string;
    raw_status?: string;
    last_location_recieved_at?: string;
    updated_time?: string;
    updated_at?: string;
    awb?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    filters?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    returned?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    processed?: FiltersInfo[];
};
type FiltersResponse = {
    global_filter?: FiltersInfo[];
    advance_filter?: AdvanceFilterInfo;
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    display_name?: string;
    report_type?: string;
    status?: string;
    s3_key?: string;
    report_created_at?: string;
    report_requested_at?: string;
    request_details?: any;
    report_id?: string;
    report_name?: string;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    article_id?: string;
    jio_code?: string;
    item_id?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    type?: string;
    value?: string;
    message?: string;
};
type JioCodeUpsertResponse = {
    identifier?: string;
    data?: any[];
    trace_id?: string;
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    do_invoice_label_generated: boolean;
    company_id?: string;
    data?: any;
    store_code?: string;
    store_id?: string;
    batch_id: string;
    store_name?: string;
    label?: any;
    invoice_status?: string;
    invoice?: any;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type URL = {
    url?: string;
};
type FileResponse = {
    method?: string;
    file_name?: string;
    operation?: string;
    content_type?: string;
    upload?: FileUploadResponse;
    size?: number;
    file_path?: string;
    cdn?: URL;
    namespace?: string;
    tags?: string[];
};
type bulkListingData = {
    batch_id?: string;
    successful?: number;
    user_id?: string;
    successful_shipments?: any[];
    failed_shipments?: any[];
    store_id?: number;
    status?: string;
    id?: string;
    processing_shipments?: string[];
    processing?: number;
    file_name?: string;
    user_name?: string;
    uploaded_on?: string;
    store_code?: string;
    failed?: number;
    store_name?: string;
    total?: number;
    company_id?: number;
    excel_url?: string;
};
type BulkListingPage = {
    current?: number;
    has_next?: boolean;
    size?: number;
    has_previous?: boolean;
    total?: number;
    type?: string;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    error?: string;
    page?: BulkListingPage;
    success?: boolean;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    qc_type?: string[];
    id?: number;
    question_set?: QuestionSet[];
    display_name?: string;
};
type PlatformShipmentReasonsResponse = {
    reasons?: Reason[];
    success?: boolean;
};
type BulkActionPayload = {
    url: string;
};
type BulkActionResponse = {
    status?: boolean;
    message?: string;
};
type BulkActionDetailsDataField = {
    processing_shipments_count?: number;
    company_id?: string;
    successful_shipments_count?: number;
    total_shipments_count?: number;
    batch_id?: string;
    failed_shipments_count?: number;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    uploaded_by?: string;
    data?: BulkActionDetailsDataField[];
    uploaded_on?: string;
    user_id?: string;
    message?: string;
    success?: string;
    status?: boolean;
    failed_records?: string[];
    error?: string[];
};
type AffiliateBagDetails = {
    affiliate_bag_id: string;
    employee_discount?: number;
    affiliate_order_id: string;
    loyalty_discount?: number;
    affiliate_meta: AffiliateMeta;
};
type ArticleDetails = {
    status?: any;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type ReturnConfig = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type Article = {
    esp_modified?: any;
    _id: string;
    a_set?: any;
    uid: string;
    seller_identifier: string;
    code?: string;
    size: string;
    raw_meta?: any;
    identifiers: Identifier;
    child_details?: any;
    dimensions?: Dimensions;
    weight?: Weight;
    return_config?: ReturnConfig;
    is_set?: boolean;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    docker_number?: string;
    po_tax_amount?: number;
    partial_can_ret?: boolean;
    po_line_amount?: number;
    item_base_price?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Attributes = {
    primary_color?: string;
    marketer_address?: string;
    primary_color_hex?: string;
    gender?: string[];
    essential?: string;
    name?: string;
    marketer_name?: string;
    primary_material?: string;
    brand_name?: string;
};
type Item = {
    l1_category_id?: number;
    meta?: any;
    department_id?: number;
    name: string;
    branch_url?: string;
    l2_category?: string[];
    l2_category_id?: number;
    attributes: Attributes;
    code?: string;
    webstore_product_url?: string;
    item_id: number;
    last_updated_at?: string;
    can_return?: boolean;
    gender?: string;
    brand_id: number;
    l3_category?: number;
    slug_key: string;
    brand: string;
    l3_category_name?: string;
    l1_category?: string[];
    size: string;
    image: string[];
    color?: string;
    can_cancel?: boolean;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    is_active: boolean;
    is_returnable: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
};
type EInvoicePortalDetails = {
    password?: string;
    user?: string;
    username?: string;
};
type Document = {
    verified: boolean;
    url?: string;
    value: string;
    legal_name: string;
    ds_type: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    password?: string;
    user?: string;
    enabled: boolean;
    username?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type StoreMeta = {
    timing?: any[];
    einvoice_portal_details?: EInvoicePortalDetails;
    ewaybill_portal_details?: any;
    display_name: string;
    documents?: StoreDocuments;
    additional_contact_details?: any;
    gst_credentials: StoreGstCredentials;
    stage: string;
    notification_emails?: string[];
    product_return_config?: any;
    gst_number?: string;
};
type StoreAddress = {
    longitude: number;
    landmark?: string;
    country: string;
    latitude: number;
    contact_person: string;
    created_at: string;
    address_type: string;
    address_category: string;
    country_code: string;
    address2?: string;
    version?: string;
    updated_at: string;
    state: string;
    phone: string;
    city: string;
    pincode: number;
    address1: string;
    email?: string;
    area?: string;
};
type Store = {
    alohomora_user_id?: number;
    packaging_material_count?: number;
    location_type: string;
    meta: StoreMeta;
    store_active_from?: string;
    mall_name?: string;
    longitude: number;
    name: string;
    fulfillment_channel: string;
    order_integration_id?: string;
    country: string;
    latitude: number;
    login_username: string;
    contact_person: string;
    code?: string;
    created_at: string;
    is_enabled_for_recon?: boolean;
    is_active?: boolean;
    store_address_json?: StoreAddress;
    brand_id?: any;
    address2?: string;
    updated_at?: string;
    vat_no?: string;
    is_archived?: boolean;
    company_id: number;
    city: string;
    phone: number;
    state: string;
    store_email: string;
    s_id: string;
    pincode: string;
    mall_area?: string;
    address1: string;
    brand_store_tags?: string[];
    parent_store_id?: number;
};
type Brand = {
    credit_note_allowed?: boolean;
    pickup_location?: string;
    is_virtual_invoice?: boolean;
    company: string;
    created_on?: number;
    invoice_prefix?: string;
    brand_id: number;
    credit_note_expiry_days?: number;
    start_date?: string;
    logo?: string;
    brand_name: string;
    script_last_ran?: string;
    modified_on?: number;
};
type BagGSTDetails = {
    brand_calculated_amount: number;
    gst_fee: number;
    igst_gst_fee: string;
    hsn_code: string;
    sgst_tax_percentage: number;
    gst_tag: string;
    hsn_code_id: string;
    gstin_code?: string;
    cgst_gst_fee: string;
    value_of_good: number;
    sgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    tax_collected_at_source: number;
    gst_tax_percentage: number;
    cgst_tax_percentage: number;
    igst_tax_percentage: number;
};
type BagDetailsPlatformResponse = {
    affiliate_bag_details: AffiliateBagDetails;
    seller_identifier?: string;
    article_details?: ArticleDetails;
    article: Article;
    meta?: BagMeta;
    shipment_id?: string;
    restore_promos?: any;
    b_id: number;
    order_integration_id?: string;
    item: Item;
    display_name?: string;
    dates?: Dates;
    qc_required?: any;
    financial_breakup: FinancialBreakup[];
    applied_promos?: any[];
    quantity?: number;
    b_type?: string;
    status: BagReturnableCancelableStatus;
    ordering_store?: Store;
    current_status: BagStatusHistory;
    line_number?: number;
    identifier?: string;
    bag_update_time?: number;
    prices: Prices;
    operational_status?: string;
    affiliate_details?: AffiliateDetails;
    bag_status: BagStatusHistory[];
    entity_type?: string;
    no_of_bags_order?: number;
    original_bag_list?: number[];
    bag_status_history?: BagStatusHistory;
    brand: Brand;
    current_operational_status: BagStatusHistory;
    journey_type: string;
    restore_coupon?: boolean;
    gst_details: BagGSTDetails;
    reasons?: any[];
    parent_promo_bags?: any;
    tags?: string[];
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    current: number;
    item_total: number;
    has_next: boolean;
    page_type: string;
    size: number;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type GeneratePosOrderReceiptResponse = {
    payment_receipt?: string;
    invoice_receipt?: string;
    order_id?: string;
    success?: boolean;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    error?: string;
    status?: number;
    message?: string;
    shipment_id?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    status: number;
    message: string;
    error_trace?: string;
};
type StoreReassign = {
    store_id: number;
    mongo_article_id?: string;
    affiliate_order_id?: string;
    item_id?: string;
    set_id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    fynd_order_id?: string;
    reason_ids?: number[];
    bag_id?: number;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_shipment_id?: string;
    reason_text: string;
    id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    affiliate_bag_id?: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    action: string;
    entities: Entities[];
    entity_type: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    affiliate_order_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
    is_locked?: boolean;
};
type CheckResponse = {
    affiliate_shipment_id?: string;
    is_shipment_locked?: boolean;
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    status?: string;
    shipment_id?: string;
    bags?: Bags[];
    is_bag_locked?: boolean;
    affiliate_id?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    created_at?: string;
    id: number;
    company_id?: number;
    description?: string;
    logo_url?: string;
    to_datetime?: string;
    title?: string;
    from_datetime?: string;
    platform_id?: string;
    platform_name?: string;
};
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
};
type BaseResponse = {
    success: boolean;
    message: string;
};
type Click2CallResponse = {
    call_id: string;
    status: boolean;
};
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
type EntitiesReasons = {
    filters?: any[];
    data?: EntityReasonData;
};
type ProductsReasonsFilters = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
};
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasons = {
    filters?: ProductsReasonsFilters[];
    data?: ProductsReasonsData;
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type EntitiesDataUpdates = {
    filters?: any[];
    data?: any;
};
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
};
type ProductsDataUpdates = {
    filters?: ProductsDataUpdatesFilters[];
    data?: any;
};
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    products?: ProductsDataUpdates[];
};
type Products = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
};
type ShipmentsRequest = {
    reasons?: ReasonsData;
    identifier: string;
    data_updates?: DataUpdates;
    products?: Products[];
};
type StatuesRequest = {
    status?: string;
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    statuses?: StatuesRequest[];
    force_transition?: boolean;
    task?: boolean;
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
};
type ShipmentsResponse = {
    code?: string;
    identifier?: string;
    stack_trace?: string;
    status?: number;
    exception?: string;
    meta?: any;
    final_state?: any;
    message?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    created_at: string;
    id: string;
    description?: string;
    updated_at: string;
    owner: string;
    token: string;
    secret: string;
    name: string;
    meta?: AffiliateAppConfigMeta[];
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    token: string;
    id: string;
    config?: AffiliateConfig;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    store_lookup?: string;
    create_user?: boolean;
    affiliate: Affiliate;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    article_lookup?: string;
};
type OrderUser = {
    state: string;
    address2?: string;
    first_name: string;
    city: string;
    mobile: number;
    pincode: string;
    email: string;
    country: string;
    address1?: string;
    phone: number;
    last_name: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
};
type ArticleDetails1 = {
    dimension: any;
    category: any;
    weight: any;
    attributes: any;
    _id: string;
    quantity: number;
    brand_id: number;
};
type ShipmentDetails = {
    affiliate_shipment_id: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
    shipments: number;
    box_type?: string;
    meta?: any;
    dp_id?: number;
};
type ShipmentConfig = {
    payment_mode: string;
    journey: string;
    identifier: string;
    source: string;
    shipment: ShipmentDetails[];
    location_details?: LocationDetails;
    action: string;
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    amount_paid: number;
    company_id: number;
    modified_on: string;
    identifier: any;
    affiliate_meta: any;
    transfer_price: number;
    sku: string;
    price_marked: number;
    unit_price: number;
    affiliate_store_id: string;
    discount: number;
    pdf_links?: MarketPlacePdf;
    fynd_store_id: string;
    seller_identifier: string;
    hsn_code_id: string;
    delivery_charge: number;
    _id: string;
    item_id: number;
    price_effective: number;
    quantity: number;
    store_id: number;
    item_size: string;
    avl_qty: number;
};
type OrderInfo = {
    cod_charges: number;
    delivery_charges: number;
    discount: number;
    order_value: number;
    user: UserData;
    payment_mode: string;
    billing_address: OrderUser;
    shipping_address: OrderUser;
    order_priority?: OrderPriority;
    shipment?: ShipmentData;
    affiliate_order_id?: string;
    bags: AffiliateBag[];
    coupon?: string;
    items: any;
    payment?: any;
};
type CreateOrderPayload = {
    order_config: OrderConfig;
    order_info: OrderInfo;
    affiliate_id: string;
};
type CreateOrderResponse = {
    fynd_order_id: string;
};
type DispatchManifest = {
    manifest_id: string;
};
type SuccessResponse = {
    success?: boolean;
    message?: string;
};
type ActionInfo = {
    display_text: string;
    slug: string;
    description: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type PostHistoryFilters = {
    identifier?: string;
    line_number?: string;
    shipment_id: string;
};
type PostHistoryData = {
    user_name: string;
    message: string;
};
type PostActivityHistory = {
    filters: PostHistoryFilters[];
    data: PostHistoryData;
};
type PostHistoryDict = {
    activity_history: PostActivityHistory;
};
type PostShipmentHistory = {
    activity_history?: PostHistoryDict[];
};
type HistoryDict = {
    type: string;
    l2_detail?: string;
    l1_detail?: string;
    user: string;
    bag_id?: number;
    l3_detail?: string;
    ticket_id?: string;
    ticket_url?: string;
    createdat: string;
    message: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    amount_paid: number;
    payment_mode: string;
    order_id: string;
    phone_number: number;
    shipment_id: number;
    customer_name: string;
    country_code: string;
    brand_name: string;
    message: string;
};
type SendSmsPayload = {
    slug: string;
    bag_id: number;
    data?: SmsDataPayload;
};
type Meta1 = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    bag_list?: number[];
    id: number;
    status?: string;
    shipment_id?: string;
    meta: Meta1;
    remarks?: string;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type OrderStatusData = {
    shipment_details?: ShipmentDetail[];
    order_details: OrderDetails;
    errors?: string[];
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    order_type: string;
    shipment_ids?: string[];
    qc_required: string;
    dp_id: number;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type ProcessingDates = {
    pack_by_date?: string;
    confirm_by_date?: string;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
    customer_pickup_slot?: any;
};
type Tax = {
    amount: any;
    breakup?: any[];
    name: string;
    rate: number;
};
type Charge = {
    type: string;
    code?: string;
    tax?: Tax;
    name: string;
    amount: any;
};
type LineItem = {
    seller_identifier: string;
    external_line_id?: string;
    custom_messasge?: string;
    charges?: Charge[];
    meta?: any;
    quantity?: number;
};
type Shipment = {
    location_id: number;
    priority?: number;
    processing_dates?: ProcessingDates;
    meta?: any;
    external_shipment_id?: string;
    line_items: LineItem[];
};
type PaymentMethod = {
    refund_by: string;
    collect_by: string;
    name: string;
    mode: string;
    transaction_data?: any;
    meta?: any;
    amount: number;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type ShippingInfo = {
    state: string;
    first_name: string;
    city: string;
    state_code?: string;
    house_no?: string;
    geo_location?: any;
    external_customer_code?: string;
    last_name?: string;
    pincode: string;
    customer_code?: string;
    country_code?: string;
    floor_no?: string;
    slot?: any[];
    alternate_mobile_number?: string;
    address2?: string;
    primary_email: string;
    title?: string;
    alternate_email?: string;
    primary_mobile_number: string;
    address1: string;
    landmark?: string;
    address_type?: string;
    shipping_type?: string;
    gender?: string;
    country: string;
    middle_name?: string;
};
type BillingInfo = {
    state: string;
    first_name: string;
    city: string;
    state_code?: string;
    house_no?: string;
    external_customer_code?: string;
    last_name?: string;
    pincode: string;
    customer_code?: string;
    country_code?: string;
    floor_no?: string;
    alternate_mobile_number?: string;
    address2?: string;
    primary_email: string;
    title?: string;
    alternate_email?: string;
    primary_mobile_number: string;
    address1: string;
    gender?: string;
    country: string;
    middle_name?: string;
};
type CreateOrderAPI = {
    currency_info?: any;
    external_creation_date?: string;
    tax_info?: TaxInfo;
    shipments: Shipment[];
    external_order_id?: string;
    payment_info: PaymentInfo;
    charges?: Charge[];
    shipping_info: ShippingInfo;
    meta?: any;
    billing_info: BillingInfo;
};
type CreateOrderErrorReponse = {
    info?: any;
    code?: string;
    request_id?: string;
    stack_trace?: string;
    status: number;
    exception?: string;
    meta?: string;
    message: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    collect_by?: string;
    refund_by?: string;
    mode?: string;
};
type CreateChannelPaymentInfo = {
    payment_methods?: PaymentMethods[];
    source?: string;
    mode_of_payment?: string;
};
type CreateChannelConfig = {
    lock_states?: string[];
    logo_url?: any;
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
    location_reassignment?: boolean;
    payment_info?: CreateChannelPaymentInfo;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_inserted?: boolean;
    is_upserted?: boolean;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type UploadConsent = {
    consent_url: string;
    manifest_id: string;
};
type PlatformOrderUpdate = {
    order_id: string;
};
type ResponseDetail = {
    success?: boolean;
    message?: string[];
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    start_date: string;
    order_details?: FyndOrderIdList[];
    mobile: number;
    end_date: string;
};
type GetSearchWordsData = {
    result?: any;
    _custom_json?: any;
    is_active?: boolean;
    uid?: string;
    app_id?: string;
    words?: string[];
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    _custom_json?: any;
    is_active?: boolean;
    app_id?: string;
    words?: string[];
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    results?: any[];
    uid?: string;
    app_id?: string;
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type AutocompletePageAction = {
    url?: string;
    type?: string;
    params?: any;
    query?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type Media = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type AutocompleteResult = {
    _custom_json?: any;
    display?: string;
    action?: AutocompleteAction;
    logo?: Media;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    is_active?: boolean;
    results?: AutocompleteResult[];
    app_id?: string;
    words?: string[];
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    results?: any[];
    app_id?: string;
    words?: string[];
};
type ProductBundleItem = {
    min_quantity: number;
    product_uid: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    allow_remove?: boolean;
    max_quantity: number;
};
type GetProductBundleCreateResponse = {
    id?: string;
    name: string;
    meta?: any;
    products: ProductBundleItem[];
    is_active: boolean;
    modified_on?: string;
    company_id?: number;
    created_by?: any;
    created_on?: string;
    choice: string;
    logo?: string;
    page_visibility?: string[];
    modified_by?: any;
    slug: string;
    same_store_assignment?: boolean;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    name: string;
    meta?: any;
    products: ProductBundleItem[];
    is_active: boolean;
    modified_on?: string;
    company_id?: number;
    created_by?: any;
    created_on?: string;
    choice: string;
    logo?: string;
    page_visibility?: string[];
    modified_by?: any;
    slug: string;
    same_store_assignment?: boolean;
};
type LimitedProductData = {
    identifier?: any;
    name?: string;
    short_description?: string;
    images?: string[];
    item_code?: string;
    uid?: number;
    quantity?: number;
    country_of_origin?: string;
    price?: any;
    slug?: string;
    attributes?: any;
    sizes?: string[];
};
type Price = {
    max_effective?: number;
    max_marked?: number;
    currency?: string;
    min_marked?: number;
    min_effective?: number;
};
type Size = {
    value?: string;
    display?: string;
    quantity?: number;
    is_available?: boolean;
};
type GetProducts = {
    min_quantity?: number;
    product_details?: LimitedProductData;
    product_uid?: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    allow_remove?: boolean;
    max_quantity?: number;
    price?: Price;
    sizes?: Size[];
};
type GetProductBundleResponse = {
    name?: string;
    meta?: any;
    is_active?: boolean;
    company_id?: number;
    logo?: string;
    choice?: string;
    products?: GetProducts[];
    page_visibility?: string[];
    slug?: string;
    same_store_assignment?: boolean;
};
type ProductBundleUpdateRequest = {
    name: string;
    meta?: any;
    products: ProductBundleItem[];
    is_active: boolean;
    modified_on?: string;
    company_id?: number;
    choice: string;
    logo?: string;
    page_visibility?: string[];
    modified_by?: any;
    slug: string;
    same_store_assignment?: boolean;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    id?: string;
    description?: string;
    name: string;
    active?: boolean;
    modified_on?: string;
    brand_id?: number;
    company_id?: number;
    created_by?: any;
    modified_by?: any;
    image?: string;
    created_on?: string;
    subtitle?: string;
    guide?: Guide;
    tag?: string;
    title: string;
};
type SizeGuideResponse = {
    id?: string;
    name?: string;
    active?: boolean;
    modified_on?: string;
    brand_id?: number;
    created_by?: any;
    company_id?: number;
    created_on?: string;
    subtitle?: string;
    modified_by?: any;
    tag?: string;
    title?: string;
    guide?: any;
};
type MOQData = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type SEOData = {
    description?: string;
    title?: string;
};
type OwnerAppItemResponse = {
    moq?: MOQData;
    alt_text?: any;
    is_gift?: boolean;
    is_cod?: boolean;
    seo?: SEOData;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    minimum?: number;
    maximum?: number;
};
type MetaFields = {
    key: string;
    value: string;
};
type ApplicationItemSEO = {
    description?: string;
    title?: string;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    moq?: ApplicationItemMOQ;
    alt_text?: any;
    is_gift?: boolean;
    is_cod?: boolean;
    _custom_meta?: MetaFields[];
    seo?: ApplicationItemSEO;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    values?: any[];
    data: any[];
    condition?: any[];
};
type PageResponseType = {
    has_next: boolean;
    next: number;
    current: number;
    total_count: number;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    unit?: string;
    display_type: string;
    name: string;
    is_active: boolean;
    logo?: string;
    key?: string;
    slug?: string;
    priority: number;
};
type AppConfigurationDetail = {
    name?: string;
    is_active: boolean;
    template_slugs?: string[];
    app_id: string;
    is_default: boolean;
    logo?: string;
    slug: string;
    attributes?: AttributeDetailsGroup[];
    priority: number;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    default_key: string;
    name?: string;
    is_active: boolean;
    is_default: boolean;
    logo?: string;
    key: string;
    app_id: string;
    priority: number;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    detail?: any;
    compare?: any;
    variant?: any;
};
type MetaDataListingFilterMetaResponse = {
    key?: string;
    display?: string;
    units?: any[];
    filter_types?: string[];
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingSortMetaResponse = {
    key?: string;
    display?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
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
    display?: string;
    start?: number;
};
type ConfigurationListingFilterValue = {
    value?: string;
    map_values?: any[];
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
    sort?: string;
    map?: any;
};
type ConfigurationListingFilterConfig = {
    name?: string;
    is_active: boolean;
    value_config?: ConfigurationListingFilterValue;
    display_name?: string;
    logo?: string;
    key: string;
    type: string;
    priority: number;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    name?: string;
    is_active: boolean;
    logo?: string;
    key: string;
    priority: number;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    is_active: boolean;
    subtitle?: string;
    size?: ProductSize;
    logo?: string;
    key: string;
    title?: string;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    display_type: string;
    name: string;
    is_active: boolean;
    size: ProductSize;
    logo?: string;
    key: string;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppCatalogConfiguration = {
    id?: string;
    config_type: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    modified_on?: string;
    created_by?: any;
    modified_by?: any;
    created_on?: string;
    type?: string;
    config_id?: string;
    app_id: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    config_type: string;
    listing?: ConfigurationListing;
    product?: ConfigurationProduct;
    modified_on?: string;
    created_by?: any;
    modified_by?: any;
    created_on?: string;
    type?: string;
    config_id?: string;
    app_id: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    id?: string;
    config_type: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    product?: GetCatalogConfigurationDetailsProduct;
    config_id?: string;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersKey = {
    operators?: string[];
    name: string;
    kind?: string;
    display: string;
    logo?: string;
};
type ProductFiltersValue = {
    value: any;
    query_format?: string;
    currency_symbol?: string;
    currency_code?: string;
    display: string;
    min?: number;
    is_selected: boolean;
    max?: number;
    count?: number;
    selected_max?: number;
    selected_min?: number;
    display_format?: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type ProductSortOn = {
    value?: string;
    is_selected?: boolean;
    name?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
};
type Media1 = {
    url: string;
    meta?: any;
    type?: string;
};
type BannerImage = {
    url?: string;
    type?: string;
    aspect_ratio?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionQuery = {
    value: any[];
    op: string;
    attribute: string;
};
type GetCollectionDetailNest = {
    meta?: any;
    logo?: Media1;
    slug?: string;
    app_id?: string;
    visible_facets_keys?: string[];
    description?: string;
    allow_facets?: boolean;
    name?: string;
    allow_sort?: boolean;
    tag?: string[];
    priority?: number;
    cron?: any;
    banners?: ImageUrls;
    _schedule?: any;
    is_active?: boolean;
    uid?: string;
    badge?: any;
    action?: Action;
    type?: string;
    query?: CollectionQuery[];
};
type CollectionListingFilterType = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilterTag = {
    display?: string;
    is_selected?: boolean;
    name?: string;
};
type CollectionListingFilter = {
    type?: CollectionListingFilterType[];
    tags?: CollectionListingFilterTag[];
};
type GetCollectionListingResponse = {
    page?: Page;
    items?: GetCollectionDetailNest[];
    filters?: CollectionListingFilter;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type UserInfo = {
    uid?: string;
    username?: string;
    email?: string;
    user_id?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionSchedule = {
    duration?: number;
    start?: string;
    next_schedule?: NextSchedule[];
    end?: string;
    cron?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CreateCollection = {
    meta?: any;
    logo: CollectionImage;
    app_id: string;
    slug: string;
    visible_facets_keys?: string[];
    description?: string;
    allow_facets?: boolean;
    _custom_json?: any;
    name: string;
    allow_sort?: boolean;
    is_visible?: boolean;
    _locale_language?: any;
    created_by?: UserInfo;
    seo?: SeoDetail;
    published?: boolean;
    priority?: number;
    banners: CollectionBanner;
    _schedule?: CollectionSchedule;
    is_active?: boolean;
    tags?: string[];
    sort_on?: string;
    badge?: CollectionBadge;
    modified_by?: UserInfo;
    type: string;
    query?: CollectionQuery[];
};
type CollectionCreateResponse = {
    meta?: any;
    logo?: BannerImage;
    slug?: string;
    app_id?: string;
    visible_facets_keys?: string[];
    description?: string;
    allow_facets?: boolean;
    name?: string;
    allow_sort?: boolean;
    tag?: string[];
    priority?: number;
    cron?: any;
    banners?: ImageUrls;
    _schedule?: any;
    is_active?: boolean;
    sort_on?: string;
    badge?: any;
    type?: string;
    query?: CollectionQuery[];
};
type CollectionDetailResponse = {
    meta?: any;
    logo?: Media1;
    slug?: string;
    app_id?: string;
    visible_facets_keys?: string[];
    description?: string;
    allow_facets?: boolean;
    name?: string;
    allow_sort?: boolean;
    tag?: string[];
    priority?: number;
    cron?: any;
    banners?: ImageUrls;
    _schedule?: any;
    is_active?: boolean;
    uid?: string;
    badge?: any;
    type?: string;
    query?: CollectionQuery[];
};
type UpdateCollection = {
    meta?: any;
    logo?: CollectionImage;
    slug?: string;
    visible_facets_keys?: string[];
    description?: string;
    allow_facets?: boolean;
    _custom_json?: any;
    name?: string;
    allow_sort?: boolean;
    is_visible?: boolean;
    _locale_language?: any;
    seo?: SeoDetail;
    published?: boolean;
    priority?: number;
    banners?: CollectionBanner;
    _schedule?: CollectionSchedule;
    is_active?: boolean;
    tags?: string[];
    sort_on?: string;
    badge?: CollectionBadge;
    modified_by?: UserInfo;
    type?: string;
    query?: CollectionQuery[];
};
type ProductBrand = {
    action?: Action;
    uid?: number;
    logo?: Media1;
    name?: string;
};
type Price1 = {
    max?: number;
    currency_symbol?: string;
    min?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductDetailAttribute = {
    key?: string;
    type?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductListingDetail = {
    color?: string;
    brand?: ProductBrand;
    similars?: string[];
    item_code?: string;
    image_nature?: string;
    price?: ProductListingPrice;
    has_variant?: boolean;
    slug: string;
    description?: string;
    sellable?: boolean;
    rating_count?: number;
    teaser_tag?: any;
    name?: string;
    tryouts?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    attributes?: any;
    discount?: string;
    item_type?: string;
    short_description?: string;
    uid?: number;
    rating?: number;
    product_online_date?: string;
    medias?: Media1[];
    type?: string;
    highlights?: string[];
    promo_meta?: any;
};
type GetCollectionItemsResponse = {
    page?: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    type?: string;
    item?: ItemQueryForUserCollection[];
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightBrand = {
    total_articles?: number;
    article_freshness?: number;
    available_articles?: number;
    available_sizes?: number;
    name?: string;
    total_sizes?: number;
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
    articles?: number;
    products?: number;
};
type CrossSellingResponse = {
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    store_ids?: number[];
    opt_level: string;
    company_id?: number;
    enabled?: boolean;
    platform?: string;
    brand_ids?: number[];
};
type CompanyOptIn = {
    store_ids: number[];
    modified_on: number;
    opt_level: string;
    company_id: number;
    created_by?: any;
    created_on: number;
    enabled: boolean;
    platform: string;
    modified_by?: any;
    brand_ids: number[];
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    uid?: number;
    company_type?: string;
    business_type?: string;
    name?: string;
};
type CompanyBrandDetail = {
    company_id?: number;
    brand_name?: string;
    total_article?: number;
    brand_id?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    store?: number;
    company?: string;
    brand?: number;
};
type StoreDetail = {
    timing?: any;
    name?: string;
    modified_on?: string;
    store_code?: string;
    company_id?: number;
    uid?: number;
    additional_contacts?: any[];
    display_name?: string;
    created_on?: string;
    documents?: any[];
    store_type?: string;
    manager?: any;
    address?: any;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
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
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    format?: string;
    range?: AttributeSchemaRange;
    mandatory?: boolean;
    allowed_values?: string[];
    multi?: boolean;
    type: string;
};
type GenderDetail = {
    id?: string;
    name?: string;
    meta?: AttributeMasterMeta;
    details?: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    departments?: string[];
    filters?: AttributeMasterFilter;
    schema?: AttributeMaster;
    logo?: string;
    is_nested?: boolean;
    slug?: string;
    description?: string;
};
type CategoriesResponse = {
    name?: string;
    uid?: number;
    template_slug?: string;
    slug_key?: string;
    slug?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: CategoriesResponse[];
};
type PTErrorResponse = {
    code?: string;
    meta?: any;
    errors?: any;
    status?: number;
    message?: string;
};
type UserSerializer = {
    _id?: string;
    username?: string;
    contact?: string;
    uid?: string;
    user_id?: string;
};
type GetDepartment = {
    synonyms?: string[];
    name?: string;
    is_active?: boolean;
    page_no?: number;
    item_type?: string;
    modified_on?: string;
    search?: string;
    priority_order?: number;
    created_by?: UserSerializer;
    uid?: number;
    created_on?: string;
    logo?: string;
    page_size?: number;
    modified_by?: UserSerializer;
    slug?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    code?: string;
    meta?: any;
    errors?: any;
    status?: number;
    message?: string;
};
type DepartmentCreateUpdate = {
    _custom_json?: any;
    synonyms?: string[];
    _cls?: string;
    name: string;
    is_active?: boolean;
    tags?: string[];
    priority_order: number;
    uid?: number;
    logo: string;
    platforms?: any;
    slug?: string;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    contact?: string;
    super_user?: boolean;
    username: string;
    user_id: string;
};
type DepartmentModel = {
    verified_on?: string;
    synonyms?: string[];
    _custom_json?: any;
    _cls?: string;
    name: string;
    is_active?: boolean;
    _id?: any;
    modified_on: string;
    verified_by?: UserDetail;
    priority_order: number;
    created_by?: UserDetail;
    uid: number;
    created_on: string;
    logo: string;
    modified_by?: UserDetail;
    slug: string;
};
type ProductTemplate = {
    attributes?: string[];
    name?: string;
    departments?: string[];
    is_active?: boolean;
    modified_on?: string;
    created_by?: any;
    is_physical: boolean;
    logo?: string;
    created_on?: string;
    is_archived?: boolean;
    is_expirable: boolean;
    categories?: string[];
    modified_by?: any;
    tag?: string;
    slug: string;
    description?: string;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type TemplateDetails = {
    id?: string;
    attributes?: string[];
    name?: string;
    departments?: string[];
    is_active?: boolean;
    is_physical: boolean;
    logo?: string;
    is_archived?: boolean;
    is_expirable: boolean;
    categories?: string[];
    tag?: string;
    slug: string;
    description?: string;
};
type Properties = {
    multi_size?: any;
    item_code?: any;
    size_guide?: any;
    is_dependent?: any;
    slug?: any;
    description?: any;
    variants?: any;
    trader?: any;
    teaser_tag?: any;
    name?: any;
    media?: any;
    hsn_code?: any;
    category_slug?: any;
    brand_uid?: any;
    no_of_boxes?: any;
    currency?: any;
    is_active?: any;
    short_description?: any;
    item_type?: any;
    tags?: any;
    custom_order?: any;
    product_group_tag?: any;
    sizes?: any;
    product_publish?: any;
    return_config?: any;
    highlights?: any;
    command?: any;
    country_of_origin?: any;
    trader_type?: any;
};
type GlobalValidation = {
    properties?: Properties;
    required?: string[];
    type?: string;
    title?: string;
    definitions?: any;
    description?: string;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplatesValidationResponse = {
    template_details?: TemplateDetails;
    data?: TemplateValidationData;
};
type InventoryValidationResponse = {
    data?: any;
    message?: string;
};
type HSNData = {
    hsn_code?: string[];
    country_of_origin?: string[];
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type UserInfo1 = {
    uid?: string;
    username?: string;
    email?: string;
    user_id?: string;
};
type ProductTemplateExportResponse = {
    completed_on?: string;
    notification_emails?: string[];
    modified_on?: string;
    filters?: any;
    status?: string;
    created_by?: UserInfo1;
    task_id: string;
    seller_id: number;
    url?: string;
    type?: string;
};
type ProductDownloadsResponse = {
    items?: ProductTemplateExportResponse[];
};
type ProductTemplateExportFilterRequest = {
    brands?: string[];
    templates: string[];
    to_date?: string;
    catalogue_types: string[];
    from_date?: string;
};
type ProductTemplateDownloadsExport = {
    type?: string;
    notification_emails?: string[];
    filters?: ProductTemplateExportFilterRequest;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type Media2 = {
    portrait: string;
    landscape: string;
    logo: string;
};
type Hierarchy = {
    department: number;
    l2: number;
    l1: number;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Category = {
    synonyms?: string[];
    id?: string;
    name: string;
    departments: number[];
    media?: Media2;
    is_active: boolean;
    modified_on?: string;
    tryouts?: string[];
    created_by?: any;
    uid?: number;
    level: number;
    priority?: number;
    created_on?: string;
    hierarchy?: Hierarchy[];
    modified_by?: any;
    slug?: string;
    marketplaces?: CategoryMapping;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    synonyms?: string[];
    media?: Media2;
    departments: number[];
    name: string;
    is_active: boolean;
    tryouts?: string[];
    level: number;
    priority?: number;
    hierarchy?: Hierarchy[];
    slug?: string;
    marketplaces?: CategoryMapping;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type Logo = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type Trader = {
    type?: string;
    address?: string[];
    name: string;
};
type Image = {
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ReturnConfigResponse = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type ProductSchemaV2 = {
    multi_size?: boolean;
    moq?: any;
    category_uid?: number;
    color?: string;
    variant_group?: any;
    brand?: Brand;
    company_id?: number;
    item_code?: string;
    stage?: string;
    size_guide?: string;
    image_nature?: string;
    slug?: string;
    is_dependent?: boolean;
    description?: string;
    _custom_json?: any;
    id?: string;
    variants?: any;
    trader?: Trader[];
    verified_on?: string;
    teaser_tag?: any;
    name?: string;
    departments?: number[];
    media?: Media1[];
    hsn_code?: string;
    primary_color?: string;
    modified_on?: string;
    category_slug?: string;
    images?: Image[];
    created_by?: any;
    is_physical?: boolean;
    tax_identifier?: any;
    is_image_less_product?: boolean;
    is_expirable?: boolean;
    brand_uid?: number;
    no_of_boxes?: number;
    attributes?: any;
    all_sizes?: any[];
    category?: any;
    currency?: string;
    is_active?: boolean;
    short_description?: string;
    item_type?: string;
    tags?: string[];
    pending?: string;
    uid?: number;
    is_set?: boolean;
    net_quantity?: NetQuantityResponse;
    created_on?: string;
    all_identifiers?: string[];
    l3_mapping?: string[];
    template_tag?: string;
    custom_order?: any;
    product_group_tag?: string[];
    modified_by?: any;
    sizes?: any[];
    all_company_ids?: number[];
    product_publish?: ProductPublish;
    variant_media?: any;
    verified_by?: VerifiedBy;
    return_config?: ReturnConfigResponse;
    country_of_origin?: string;
    highlights?: string[];
};
type ProductListingResponseV2 = {
    page?: Page;
    items?: ProductSchemaV2[];
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    hsn_code?: string;
    reporting_hsn?: string;
};
type NetQuantity = {
    value?: number;
    unit?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
    manufacturing_time?: number;
};
type ProductPublish1 = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductCreateUpdateSchemaV2 = {
    multi_size?: boolean;
    change_request_id?: any;
    variant_group?: any;
    company_id: number;
    item_code: string;
    size_guide?: string;
    slug: string;
    is_dependent?: boolean;
    description?: string;
    _custom_json?: any;
    variants?: any;
    trader: Trader[];
    teaser_tag?: TeaserTag;
    name: string;
    media?: Media1[];
    departments: number[];
    category_slug: string;
    tax_identifier: TaxIdentifier;
    is_image_less_product?: boolean;
    brand_uid: number;
    no_of_boxes?: number;
    attributes?: any;
    currency: string;
    is_active?: boolean;
    short_description?: string;
    item_type: string;
    tags?: string[];
    requester?: string;
    uid?: number;
    is_set?: boolean;
    net_quantity?: NetQuantity;
    template_tag: string;
    custom_order?: CustomOrder;
    product_group_tag?: string[];
    sizes: any[];
    product_publish?: ProductPublish1;
    action?: string;
    variant_media?: any;
    bulk_job_id?: string;
    return_config: ReturnConfig;
    country_of_origin: string;
    highlights?: string[];
};
type ProductVariants = {
    media?: Media1[];
    name?: string;
    category_uid?: number;
    item_code?: string;
    uid?: number;
    brand_uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    variant?: boolean;
    raw_key?: string;
    logo?: string;
    slug: string;
    description?: string;
    name?: string;
    departments: string[];
    enabled_for_end_consumer?: boolean;
    suggestion?: string;
    modified_on?: string;
    created_by?: any;
    is_nested?: boolean;
    unit?: string;
    tags?: string[];
    created_on?: string;
    modified_by?: any;
    details: AttributeMasterDetails;
    synonyms?: any;
    filters: AttributeMasterFilter;
    schema: AttributeMaster;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: ProductSchemaV2;
};
type ValidateIdentifier = {
    gtin_value: string;
    gtin_type: string;
    primary?: boolean;
};
type AllSizes = {
    item_dimensions_unit_of_measure: string;
    item_length: number;
    size: string;
    item_weight_unit_of_measure: string;
    item_height: number;
    item_width: number;
    item_weight: number;
    identifiers?: ValidateIdentifier[];
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Product = {
    multi_size?: boolean;
    moq?: any;
    category_uid?: number;
    color?: string;
    variant_group?: any;
    brand?: Brand;
    company_id?: number;
    item_code?: string;
    stage?: string;
    size_guide?: string;
    image_nature?: string;
    slug?: string;
    is_dependent?: boolean;
    description?: string;
    _custom_json?: any;
    id?: string;
    variants?: any;
    trader?: Trader[];
    verified_on?: string;
    teaser_tag?: any;
    name?: string;
    departments?: number[];
    media?: Media1[];
    hsn_code?: string;
    primary_color?: string;
    modified_on?: string;
    category_slug?: string;
    images?: Image[];
    created_by?: any;
    is_physical?: boolean;
    tax_identifier?: any;
    is_image_less_product?: boolean;
    is_expirable?: boolean;
    brand_uid?: number;
    no_of_boxes?: number;
    attributes?: any;
    all_sizes?: any[];
    category?: any;
    currency?: string;
    is_active?: boolean;
    short_description?: string;
    item_type?: string;
    tags?: string[];
    pending?: string;
    uid?: number;
    is_set?: boolean;
    net_quantity?: NetQuantityResponse;
    created_on?: string;
    all_identifiers?: string[];
    l3_mapping?: string[];
    template_tag?: string;
    custom_order?: any;
    product_group_tag?: string[];
    modified_by?: any;
    sizes?: any[];
    all_company_ids?: number[];
    product_publish?: ProductPublished;
    variant_media?: any;
    verified_by?: VerifiedBy;
    return_config?: ReturnConfigResponse;
    country_of_origin?: string;
    highlights?: string[];
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type UserDetail1 = {
    username?: string;
    full_name?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    failed?: number;
    file_path?: string;
    is_active?: boolean;
    modified_on?: string;
    total?: number;
    stage?: string;
    company_id?: number;
    failed_records?: string[];
    created_by?: UserDetail1;
    succeed?: number;
    cancelled?: number;
    created_on?: string;
    template_tag?: string;
    modified_by?: UserDetail1;
    cancelled_records?: string[];
    template?: ProductTemplate;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkJob = {
    failed?: number;
    is_active?: boolean;
    modified_on?: string;
    total?: number;
    cancelled?: number;
    created_by?: UserInfo1;
    company_id: number;
    succeed?: number;
    failed_records?: any[];
    stage?: string;
    created_on: string;
    template_tag?: string;
    tracking_url?: string;
    file_path?: string;
    custom_template_tag?: string;
    modified_by?: UserInfo1;
    cancelled_records?: any[];
};
type BulkResponse = {
    batch_id: string;
    is_active?: boolean;
    modified_on?: string;
    created_by?: UserInfo1;
    created_on: string;
    modified_by?: UserInfo1;
};
type BulkProductRequest = {
    company_id: number;
    batch_id: string;
    template_tag: string;
    data: any[];
};
type ProductTagsViewResponse = {
    items?: string[];
};
type UserCommon = {
    company_id?: number;
    username?: string;
    user_id?: string;
};
type Items = {
    failed?: number;
    retry?: number;
    id?: string;
    is_active?: boolean;
    modified_on?: string;
    total?: number;
    stage?: string;
    created_by?: UserCommon;
    failed_records?: string[];
    succeed?: number;
    company_id?: number;
    cancelled?: number;
    created_on?: string;
    tracking_url?: string;
    file_path?: string;
    modified_by?: UserCommon;
    cancelled_records?: string[];
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    url: string;
    company_id?: number;
    user: any;
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
    store?: any;
    seller_identifier?: string;
    currency?: string;
    size?: string;
    price_transfer?: number;
    price?: number;
    uid?: string;
    price_effective?: number;
    quantity?: number;
    item_id?: number;
    sellable_quantity?: number;
    identifiers?: any;
    inventory_updated_on?: string;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type ItemQuery = {
    item_code?: string;
    uid?: number;
    brand_uid?: number;
};
type SetSize = {
    size: string;
    pieces: number;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    name?: string;
    quantity?: number;
    size_distribution: SizeDistribution;
};
type GTIN = {
    gtin_value: string;
    gtin_type: string;
    primary?: boolean;
};
type InvSize = {
    currency: string;
    set?: InventorySet;
    item_length?: number;
    size: string;
    item_weight?: number;
    price_transfer?: number;
    item_height?: number;
    item_weight_unit_of_measure?: string;
    expiration_date?: string;
    identifiers: GTIN[];
    is_set?: boolean;
    price_effective: number;
    quantity: number;
    item_width?: number;
    store_code: string;
    price?: number;
    item_dimensions_unit_of_measure?: string;
};
type InventoryRequest = {
    company_id: number;
    item: ItemQuery;
    sizes: InvSize[];
};
type BrandMeta = {
    id: number;
    name: string;
};
type PriceMeta = {
    effective: number;
    currency: string;
    tp_notes?: any;
    updated_at?: string;
    transfer: number;
    marked: number;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type ManufacturerResponse = {
    name: string;
    is_default: boolean;
    address: string;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    sellable?: QuantityBase;
    damaged?: QuantityBase;
};
type CompanyMeta = {
    id: number;
};
type ReturnConfig1 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type DimensionResponse = {
    unit: string;
    width: number;
    length: number;
    height: number;
    is_default: boolean;
};
type InventorySellerResponse = {
    meta?: any;
    set?: InventorySet;
    expiration_date?: string;
    brand: BrandMeta;
    stage?: string;
    price: PriceMeta;
    item_id: number;
    raw_meta?: any;
    _custom_json?: any;
    trader?: Trader1[];
    total_quantity: number;
    added_on_store?: string;
    created_by?: UserSerializer;
    fynd_meta?: any;
    fynd_article_code: string;
    trace_id?: string;
    tax_identifier?: any;
    fynd_item_code: string;
    store: StoreMeta;
    identifier: any;
    is_active?: boolean;
    tags?: string[];
    fragile: boolean;
    uid: string;
    is_set?: boolean;
    modified_by?: UserSerializer;
    seller_identifier: string;
    track_inventory?: boolean;
    weight: WeightResponse;
    manufacturer: ManufacturerResponse;
    quantities?: Quantities;
    company: CompanyMeta;
    size: string;
    return_config?: ReturnConfig1;
    dimension: DimensionResponse;
    country_of_origin: string;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type PriceArticle = {
    effective?: number;
    currency?: string;
    tp_notes?: any;
    transfer?: number;
    marked?: number;
};
type Trader2 = {
    type?: string;
    address?: string[];
    name?: string;
};
type ArticleStoreResponse = {
    uid?: number;
    store_type?: string;
    store_code?: string;
    name?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    order_committed?: Quantity;
    not_available?: Quantity;
    sellable?: Quantity;
    damaged?: Quantity;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type ManufacturerResponse1 = {
    name?: string;
    is_default?: boolean;
    address?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type ReturnConfig2 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type DimensionResponse1 = {
    unit?: string;
    length?: number;
    height?: number;
    width?: number;
};
type GetInventories = {
    expiration_date?: string;
    brand?: BrandMeta1;
    stage?: string;
    item_id?: number;
    price?: PriceArticle;
    date_meta?: DateMeta;
    id?: string;
    trader?: Trader2[];
    total_quantity?: number;
    created_by?: UserSerializer;
    trace_id?: string;
    tax_identifier?: any;
    store?: ArticleStoreResponse;
    identifier?: any;
    tags?: string[];
    uid?: string;
    is_set?: boolean;
    modified_by?: UserSerializer;
    seller_identifier?: string;
    quantities?: QuantitiesArticle;
    weight?: WeightResponse1;
    manufacturer?: ManufacturerResponse1;
    track_inventory?: boolean;
    company?: CompanyMeta1;
    size?: string;
    return_config?: ReturnConfig2;
    dimension?: DimensionResponse1;
    country_of_origin?: string;
    platforms?: any;
    inventory_updated_on?: string;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    failed?: number;
    id?: string;
    is_active?: boolean;
    modified_on?: string;
    cancelled?: number;
    stage?: string;
    company_id?: number;
    created_by?: any;
    failed_records?: string[];
    succeed?: number;
    total?: number;
    created_on?: string;
    file_path?: string;
    modified_by?: any;
    cancelled_records?: string[];
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    seller_identifier: string;
    total_quantity?: number;
    currency?: string;
    price_marked?: number;
    store_code: string;
    expiration_date?: string;
    item_weight_unit_of_measure?: string;
    tags?: string[];
    trace_id?: string;
    price_effective?: number;
    quantity?: number;
    price?: number;
    item_dimensions_unit_of_measure?: string;
};
type InventoryBulkRequest = {
    company_id: number;
    batch_id: string;
    user?: any;
    sizes: InventoryJobPayload[];
};
type InventoryExportQuantityFilter = {
    max?: number;
    min?: number;
    operators: string;
};
type InventoryExportAdvanceOption = {
    store_ids?: number[];
    to_date?: string;
    quantity?: InventoryExportQuantityFilter;
    brand_ids?: number[];
    from_date?: string;
};
type InventoryExportJob = {
    completed_on?: string;
    notification_emails?: string[];
    filters?: InventoryExportAdvanceOption;
    status?: string;
    task_id: string;
    seller_id: number;
    url?: string;
    type: string;
};
type InventoryExportRequest = {
    type?: string;
    store?: number[];
    brand?: number[];
};
type InventoryExportResponse = {
    notification_emails?: string[];
    modified_on?: string;
    filters?: any;
    status?: string;
    created_by?: string;
    created_on?: string;
    task_id: string;
    seller_id: number;
    type?: string;
};
type InventoryJobFilters = {
    brands?: string[];
    stores?: string[];
    to_date?: string;
    quantity?: InventoryExportQuantityFilter;
    from_date?: string;
};
type InventoryJobDetailResponse = {
    completed_on?: string;
    notification_emails?: string[];
    id: string;
    cancelled_by?: UserDetail;
    modified_on?: string;
    filters: InventoryJobFilters;
    status?: string;
    cancelled_on?: string;
    created_by?: UserDetail;
    task_id: string;
    created_on?: string;
    seller_id: number;
    url: string;
    type?: string;
};
type InventoryExportJobListResponse = {
    items: InventoryJobDetailResponse;
};
type InventoryExportFilter = {
    store_ids: number[];
    to_date?: string;
    quantity?: InventoryExportQuantityFilter;
    brand_ids?: number[];
    from_date?: string;
};
type InventoryCreateRequest = {
    type?: string;
    notification_emails?: string[];
    data?: string[];
    filters: InventoryExportFilter;
};
type FilerList = {
    value?: string;
    display?: string;
};
type InventoryConfig = {
    multivalues?: boolean;
    data?: FilerList[];
};
type InventoryPayload = {
    seller_identifier: string;
    total_quantity?: number;
    price_marked?: number;
    expiration_date?: string;
    tags?: string[];
    trace_id?: string;
    price_effective?: number;
    store_id: number;
};
type InventoryRequestSchemaV2 = {
    meta?: any;
    payload?: InventoryPayload[];
    company_id: number;
};
type InventoryFailedReason = {
    errors?: string;
    message: string;
};
type InventoryResponseItem = {
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    tax_on_mrp?: boolean;
    id?: string;
    hs2_code?: string;
    threshold1?: number;
    tax1?: number;
    hsn_code?: string;
    modified_on?: string;
    company_id?: number;
    tax_on_esp?: boolean;
    tax2?: number;
    threshold2?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    tax_on_mrp: boolean;
    hs2_code: string;
    threshold1: number;
    tax1: number;
    hsn_code: string;
    is_active?: boolean;
    company_id: number;
    uid?: number;
    tax_on_esp?: boolean;
    tax2?: number;
    threshold2?: number;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type PageResponse = {
    size?: number;
    item_total?: number;
    has_next?: boolean;
    has_previous?: boolean;
    current?: string;
};
type TaxSlab = {
    rate: number;
    effective_date: string;
    threshold: number;
    cess?: number;
};
type HSNDataInsertV2 = {
    country_code: string;
    hsn_code: string;
    modified_on?: string;
    taxes: TaxSlab[];
    reporting_hsn: string;
    created_by?: any;
    hsn_code_id?: string;
    created_on?: string;
    type: string;
    modified_by?: any;
    description: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    banners?: ImageUrls;
    discount?: string;
    action?: Action;
    name?: string;
    departments?: string[];
    uid?: number;
    logo?: Media;
    slug?: string;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    name?: string;
    priority_order?: number;
    uid?: number;
    logo?: Media;
    slug?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
type ThirdLevelChild = {
    banners?: ImageUrls;
    _custom_json?: any;
    action?: Action;
    name?: string;
    childs?: any[];
    uid?: number;
    slug?: string;
};
type SecondLevelChild = {
    banners?: ImageUrls;
    _custom_json?: any;
    action?: Action;
    name?: string;
    childs?: ThirdLevelChild[];
    uid?: number;
    slug?: string;
};
type Child = {
    banners?: ImageUrls;
    _custom_json?: any;
    action?: Action;
    name?: string;
    childs?: SecondLevelChild[];
    uid?: number;
    slug?: string;
};
type CategoryItems = {
    banners?: ImageUrls;
    action?: Action;
    name?: string;
    childs?: Child[];
    uid?: number;
    slug?: string;
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
    page: Page;
    operators?: any;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
};
type ProductDetail = {
    color?: string;
    brand?: ProductBrand;
    similars?: string[];
    item_code?: string;
    image_nature?: string;
    has_variant?: boolean;
    slug: string;
    description?: string;
    rating_count?: number;
    teaser_tag?: any;
    name?: string;
    tryouts?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    attributes?: any;
    item_type?: string;
    short_description?: string;
    uid?: number;
    rating?: number;
    product_online_date?: string;
    medias?: Media1[];
    type?: string;
    highlights?: string[];
    promo_meta?: any;
};
type InventoryPage = {
    item_total: number;
    has_next?: boolean;
    has_previous?: boolean;
    type: string;
    next_id?: string;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type ArticleQuery = {
    ignored_stores?: number[];
    item_id: number;
    size: string;
};
type AssignStoreArticle = {
    group_id?: string;
    meta?: any;
    article_assignment?: ArticleAssignment;
    quantity?: number;
    query?: ArticleQuery;
};
type AssignStore = {
    pincode: string;
    store_ids?: number[];
    channel_identifier?: string;
    company_id?: number;
    articles: AssignStoreArticle[];
    app_id: string;
    channel_type?: string;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    strategy_wise_listing?: any[];
    group_id?: string;
    meta?: any;
    article_assignment: ArticleAssignment1;
    _id?: string;
    price_marked?: number;
    size: string;
    status: boolean;
    store_pincode?: number;
    company_id?: number;
    uid?: string;
    price_effective?: number;
    store_id?: number;
    quantity: number;
    index?: number;
    item_id: number;
    s_city?: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    weekday: string;
    opening?: LocationTimingSerializer;
    open: boolean;
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
type InvoiceCredSerializer = {
    password?: string;
    username?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetAddressSerializer = {
    country_code?: string;
    pincode?: number;
    landmark?: string;
    longitude?: number;
    latitude?: number;
    address2?: string;
    state?: string;
    address_type?: string;
    city?: string;
    address1?: string;
    country?: string;
};
type UserSerializer2 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetCompanySerializer = {
    verified_on?: string;
    reject_reason?: string;
    name?: string;
    company_type?: string;
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    verified_by?: UserSerializer2;
    stage?: string;
    created_by?: UserSerializer2;
    uid?: number;
    created_on?: string;
    modified_by?: UserSerializer2;
    business_type?: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type GetLocationSerializer = {
    timing?: LocationDayWiseSerializer[];
    stage?: string;
    manager?: LocationManagerSerializer;
    contact_numbers?: SellerPhoneNumber[];
    verified_on?: string;
    _custom_json?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    name: string;
    modified_on?: string;
    created_by?: UserSerializer1;
    phone_number: string;
    display_name: string;
    documents?: Document[];
    store_type?: string;
    integration_type?: LocationIntegrationType;
    uid?: number;
    created_on?: string;
    warnings?: any;
    modified_by?: UserSerializer1;
    address: GetAddressSerializer;
    code: string;
    notification_emails?: string[];
    company?: GetCompanySerializer;
    verified_by?: UserSerializer1;
    product_return_config?: ProductReturnConfigSerializer;
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
    _custom_json?: any;
    name?: string;
    is_active?: boolean;
    uid: number;
    logo?: string;
    app_id: string;
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
type CompanyTaxesSerializer = {
    enable?: boolean;
    effective_date?: string;
    rate?: number;
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type GetCompanyProfileSerializerResponse = {
    modified_on?: string;
    verified_by?: UserSerializer;
    _custom_json?: any;
    modified_by?: UserSerializer;
    documents?: Document[];
    company_type: string;
    stage?: string;
    business_type: string;
    taxes?: CompanyTaxesSerializer[];
    addresses?: GetAddressSerializer[];
    business_info?: string;
    mode?: string;
    created_on?: string;
    franchise_enabled?: boolean;
    name?: string;
    created_by?: UserSerializer;
    uid: number;
    contact_details?: ContactDetails;
    business_country_info?: BusinessCountryInfo;
    verified_on?: string;
    warnings?: any;
    notification_emails?: string[];
    business_details?: BusinessDetails;
};
type CreateUpdateAddressSerializer = {
    pincode: number;
    city: string;
    landmark?: string;
    state: string;
    address1: string;
    country_code?: string;
    longitude: number;
    address_type: string;
    latitude: number;
    address2?: string;
    country: string;
};
type UpdateCompany = {
    addresses?: CreateUpdateAddressSerializer[];
    business_info?: string;
    _custom_json?: any;
    warnings?: any;
    company_type?: string;
    contact_details?: ContactDetails;
    notification_emails?: string[];
    documents?: Document[];
    business_type?: string;
    reject_reason?: string;
    business_details?: BusinessDetails;
    franchise_enabled?: boolean;
    name?: string;
    taxes?: CompanyTaxesSerializer[];
};
type ProfileSuccessResponse = {
    uid?: number;
    success?: boolean;
};
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
type MetricsSerializer = {
    brand?: DocumentsObj;
    uid?: number;
    store?: DocumentsObj;
    product?: DocumentsObj;
    stage?: string;
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait: string;
    landscape: string;
};
type GetBrandResponseSerializer = {
    modified_on?: string;
    logo?: string;
    verified_by?: UserSerializer;
    _custom_json?: any;
    modified_by?: UserSerializer;
    stage?: string;
    slug_key?: string;
    mode?: string;
    created_on?: string;
    banner?: BrandBannerSerializer;
    name: string;
    created_by?: UserSerializer;
    uid?: number;
    synonyms?: string[];
    reject_reason?: string;
    _locale_language?: any;
    verified_on?: string;
    description?: string;
    warnings?: any;
};
type CreateUpdateBrandRequestSerializer = {
    uid?: number;
    logo: string;
    description?: string;
    brand_tier?: string;
    _custom_json?: any;
    company_id?: number;
    banner: BrandBannerSerializer;
    synonyms?: string[];
    _locale_language?: any;
    name: string;
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanySerializer = {
    modified_on?: string;
    uid?: number;
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer;
    _custom_json?: any;
    modified_by?: UserSerializer;
    created_on?: string;
    company_type: string;
    notification_emails?: string[];
    business_type: string;
    details?: CompanyDetails;
    stage?: string;
    reject_reason?: string;
    business_country_info?: BusinessCountryInfo;
    name?: string;
    verified_on?: string;
    created_by?: UserSerializer;
    market_channels?: string[];
};
type CompanyBrandSerializer = {
    modified_on?: string;
    uid?: number;
    brand?: GetBrandResponseSerializer;
    verified_by?: UserSerializer;
    warnings?: any;
    company?: CompanySerializer;
    modified_by?: UserSerializer;
    created_on?: string;
    stage?: string;
    reject_reason?: string;
    verified_on?: string;
    created_by?: UserSerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    uid?: number;
    company: number;
    brands: number[];
};
type HolidayDateSerializer = {
    end_date: string;
    start_date: string;
};
type HolidaySchemaSerializer = {
    title: string;
    date: HolidayDateSerializer;
    holiday_type: string;
};
type AddressSerializer = {
    pincode?: number;
    city?: string;
    landmark?: string;
    state?: string;
    address1?: string;
    country_code?: string;
    longitude: number;
    address_type?: string;
    latitude: number;
    address2?: string;
    country?: string;
};
type LocationSerializer = {
    product_return_config?: ProductReturnConfigSerializer;
    uid?: number;
    display_name: string;
    _custom_json?: any;
    store_type?: string;
    warnings?: any;
    company: number;
    documents?: Document[];
    timing?: LocationDayWiseSerializer[];
    stage?: string;
    notification_emails?: string[];
    contact_numbers?: SellerPhoneNumber[];
    manager?: LocationManagerSerializer;
    address: AddressSerializer;
    code: string;
    holiday?: HolidaySchemaSerializer[];
    gst_credentials?: InvoiceDetailsSerializer;
    name: string;
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type FailedResponse = {
    message: string;
};
type CDN = {
    url: string;
    absolute_url?: string;
    relative_url?: string;
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
    communication?: CommunicationConfig;
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
    pan_card?: PanCardConfig;
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
    communication?: CommunicationConfig;
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
type PanCardConfig = {
    enabled?: boolean;
    threshold_amount?: number;
};
type CommunicationConfig = {
    email?: CommsConfig;
    sms?: CommsConfig;
    voice?: CommsConfig;
};
type CommsConfig = {
    enabled?: boolean;
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
    slug?: string;
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
    phone?: InformationPhone[];
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
    name?: string;
    description?: string;
    logo?: SecureUrl;
    mobile_logo?: SecureUrl;
    favicon?: SecureUrl;
    banner?: SecureUrl;
    domain?: Domain;
    domains?: Domain[];
    _id?: string;
    slug?: string;
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
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type RuleDefinition = {
    value_type: string;
    auto_apply?: boolean;
    applicable_on: string;
    calculate_on: string;
    is_exact?: boolean;
    scope?: string[];
    type: string;
    currency_code?: string;
};
type Validity = {
    priority?: number;
};
type Rule = {
    max?: number;
    discount_qty?: number;
    key?: number;
    min?: number;
    value?: number;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type UsesRemaining = {
    user?: number;
    app?: number;
    total?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue;
    networks?: string[];
    types?: string[];
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions = {
    price_range?: PriceRange;
    ordering_stores?: number[];
    uses?: UsesRestriction;
    coupon_allowed?: boolean;
    user_groups?: number[];
    user_type?: string;
    payments?: any;
    bulk_bundle?: BulkBundleRestriction;
    platforms?: string[];
    post_order?: PostOrder;
};
type State = {
    is_archived?: boolean;
    is_display?: boolean;
    is_public?: boolean;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    subtitle?: string;
    title?: string;
    auto?: DisplayMetaDict;
    description?: string;
    remove?: DisplayMetaDict;
    apply?: DisplayMetaDict;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Validation = {
    user_registered_after?: string;
    anonymous?: boolean;
    app_id?: string[];
};
type CouponSchedule = {
    duration?: number;
    end?: string;
    next_schedule?: any[];
    cron?: string;
    start?: string;
};
type CouponAdd = {
    ownership: Ownership;
    rule_definition: RuleDefinition;
    validity: Validity;
    rule: Rule[];
    restrictions?: Restrictions;
    state?: State;
    action?: CouponAction;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    author?: CouponAuthor;
    date_meta?: CouponDateMeta;
    code: string;
    tags?: string[];
    type_slug: string;
    validation?: Validation;
    _schedule?: CouponSchedule;
};
type CouponsResponse = {
    page?: Page;
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
    ownership: Ownership;
    rule_definition: RuleDefinition;
    validity: Validity;
    rule: Rule[];
    restrictions?: Restrictions;
    state?: State;
    action?: CouponAction;
    display_meta: DisplayMeta;
    identifiers: Identifier;
    author?: CouponAuthor;
    date_meta?: CouponDateMeta;
    code: string;
    tags?: string[];
    type_slug: string;
    validation?: Validation;
    _schedule?: CouponSchedule;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type CompareObject = {
    greater_than?: number;
    greater_than_equals?: number;
    less_than?: number;
    equals?: number;
    less_than_equals?: number;
};
type ItemCriteria = {
    buy_rules?: string[];
    item_size?: string[];
    cart_total?: CompareObject;
    item_exclude_brand?: number[];
    item_company?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_brand?: number[];
    all_items?: boolean;
    item_id?: number[];
    available_zones?: string[];
    item_exclude_store?: number[];
    item_exclude_category?: number[];
    item_store?: number[];
    item_exclude_id?: number[];
    item_exclude_sku?: string[];
    cart_unique_item_amount?: CompareObject;
    product_tags?: string[];
    cart_quantity?: CompareObject;
    item_exclude_company?: number[];
    item_sku?: string[];
    item_category?: number[];
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionSchedule = {
    duration?: number;
    end?: string;
    published: boolean;
    cron?: string;
    next_schedule?: any[];
    start: string;
};
type DisplayMeta1 = {
    description?: string;
    offer_label?: string;
    offer_text?: string;
    name?: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type DiscountOffer = {
    max_offer_quantity?: number;
    min_offer_quantity?: number;
    discount_amount?: number;
    apportion_discount?: boolean;
    discount_price?: number;
    discount_percentage?: number;
    max_usage_per_transaction?: number;
    partial_can_ret?: boolean;
    code?: string;
    max_discount_amount?: number;
};
type DiscountRule = {
    discount_type: string;
    item_criteria: ItemCriteria;
    buy_condition: string;
    offer: DiscountOffer;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue1;
    type: string;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions1 = {
    anonymous_users?: boolean;
    uses: UsesRestriction1;
    user_id?: string[];
    order_quantity?: number;
    user_groups?: number[];
    payments?: PromotionPaymentModes[];
    user_registered?: UserRegistered;
    platforms?: string[];
    post_order?: PostOrder1;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type PromotionListItem = {
    ownership: Ownership1;
    buy_rules: any;
    post_order_action?: PromotionAction;
    _schedule?: PromotionSchedule;
    calculate_on?: string;
    code?: string;
    apply_priority?: number;
    _custom_json?: any;
    application_id: string;
    currency?: string;
    display_meta: DisplayMeta1;
    date_meta?: PromotionDateMeta;
    apply_all_discount?: boolean;
    apply_exclusive?: string;
    stackable?: boolean;
    visiblility?: Visibility;
    promotion_type: string;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    author?: PromotionAuthor;
    promo_group: string;
    mode: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    ownership: Ownership1;
    buy_rules: any;
    post_order_action?: PromotionAction;
    _schedule?: PromotionSchedule;
    calculate_on?: string;
    code?: string;
    apply_priority?: number;
    _custom_json?: any;
    application_id: string;
    currency?: string;
    display_meta: DisplayMeta1;
    date_meta?: PromotionDateMeta;
    apply_all_discount?: boolean;
    apply_exclusive?: string;
    stackable?: boolean;
    visiblility?: Visibility;
    promotion_type: string;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    author?: PromotionAuthor;
    promo_group: string;
    mode: string;
};
type PromotionUpdate = {
    ownership: Ownership1;
    buy_rules: any;
    post_order_action?: PromotionAction;
    _schedule?: PromotionSchedule;
    calculate_on?: string;
    code?: string;
    apply_priority?: number;
    _custom_json?: any;
    application_id: string;
    currency?: string;
    display_meta: DisplayMeta1;
    date_meta?: PromotionDateMeta;
    apply_all_discount?: boolean;
    apply_exclusive?: string;
    stackable?: boolean;
    visiblility?: Visibility;
    promotion_type: string;
    discount_rules: DiscountRule[];
    restrictions?: Restrictions1;
    author?: PromotionAuthor;
    promo_group: string;
    mode: string;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    title?: string;
    subtitle?: string;
    modified_on?: string;
    type?: string;
    entity_type?: string;
    entity_slug?: string;
    example?: string;
    description?: string;
    is_hidden?: boolean;
    created_on?: string;
};
type CartItem = {
    product_id: string;
    size: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type RawBreakup = {
    cod_charge?: number;
    subtotal?: number;
    discount?: number;
    convenience_fee?: number;
    mrp_total?: number;
    vog?: number;
    fynd_cash?: number;
    gst_charges?: number;
    total?: number;
    you_saved?: number;
    coupon?: number;
    delivery_charge?: number;
};
type CouponBreakup = {
    title?: string;
    coupon_type?: string;
    max_discount_value?: number;
    minimum_cart_value?: number;
    message?: string;
    coupon_value?: number;
    code?: string;
    description?: string;
    type?: string;
    is_applied?: boolean;
    value?: number;
    uid?: string;
    sub_title?: string;
};
type LoyaltyPoints = {
    description?: string;
    is_applied?: boolean;
    total?: number;
    applicable?: number;
};
type DisplayBreakup = {
    currency_symbol?: string;
    display?: string;
    message?: string[];
    key?: string;
    value?: number;
    currency_code?: string;
};
type CartBreakup = {
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    currency_symbol?: string;
    effective?: number;
    marked?: number;
    currency_code?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    seller?: BaseInfo;
    _custom_json?: any;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    extra_meta?: any;
    size?: string;
    store?: BaseInfo;
    type?: string;
    quantity?: number;
    price?: ArticlePriceInfo;
    uid?: string;
};
type PromoMeta = {
    message?: string;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type DiscountRulesApp = {
    raw_offer?: any;
    matched_buy_rules?: string[];
    item_criteria?: any;
    offer?: any;
};
type FreeGiftItem = {
    item_slug?: string;
    item_price_details?: any;
    item_images_url?: string[];
    item_id?: number;
    item_brand_name?: string;
    item_name?: string;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    quantity?: number;
    article_id?: string;
    free_gift_item_details?: FreeGiftItem;
};
type AppliedPromotion = {
    ownership?: Ownership2;
    offer_text?: string;
    discount_rules?: DiscountRulesApp[];
    buy_rules?: BuyRules[];
    article_quantity?: number;
    amount?: number;
    applied_free_articles?: AppliedFreeArticles[];
    promo_id?: string;
    mrp_promotion?: boolean;
    promotion_group?: string;
    promotion_name?: string;
    promotion_type?: string;
};
type ProductAvailability = {
    sizes?: string[];
    is_valid?: boolean;
    deliverable?: boolean;
    other_store_quantity?: number;
    out_of_stock?: boolean;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductPrice = {
    add_on?: number;
    currency_symbol?: string;
    selling?: number;
    effective?: number;
    marked?: number;
    currency_code?: string;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    type?: string;
    query?: ActionQuery;
    url?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type CartProduct = {
    slug?: string;
    images?: ProductImage[];
    action?: ProductAction;
    item_code?: string;
    categories?: CategoryInfo[];
    name?: string;
    net_quantity?: NetQuantity;
    type?: string;
    uid?: number;
    brand?: BaseInfo;
};
type CartProductInfo = {
    article?: ProductArticle;
    discount?: string;
    is_set?: boolean;
    promo_meta?: PromoMeta;
    promotions_applied?: AppliedPromotion[];
    availability?: ProductAvailability;
    bulk_offer?: any;
    coupon_message?: string;
    parent_item_identifiers?: any;
    message?: string;
    key?: string;
    identifiers: CartProductIdentifer;
    price_per_unit?: ProductPriceInfo;
    product?: CartProduct;
    quantity?: number;
    price?: ProductPriceInfo;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    message?: string;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    meta?: any;
    landmark?: string;
    address_type?: string;
    phone?: number;
    area_code: string;
    country?: string;
    country_phone_code?: string;
    address?: string;
    state?: string;
    name?: string;
    pincode?: number;
    area_code_slug?: string;
    city?: string;
    country_code?: string;
    country_iso_code?: string;
    area?: string;
    email?: string;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
};
type PromiseFormatted = {
    max?: string;
    min?: string;
};
type PromiseTimestamp = {
    max?: number;
    min?: number;
};
type ShipmentPromise = {
    formatted?: PromiseFormatted;
    timestamp?: PromiseTimestamp;
};
type OpenApiCartServiceabilityResponse = {
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    message?: string;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
type OpenApiOrderItem = {
    meta?: CartItemMeta;
    discount: number;
    files?: OpenApiFiles[];
    cashback_applied: number;
    payment_methods: MultiTenderPaymentMethod[];
    delivery_charges: number;
    employee_discount?: number;
    price_effective: number;
    price_marked: number;
    loyalty_discount?: number;
    extra_meta?: any;
    product_id: number;
    size: string;
    coupon_effective_discount: number;
    quantity?: number;
    cod_charges: number;
    amount_paid: number;
};
type OpenApiPlatformCheckoutReq = {
    order_id?: string;
    affiliate_order_id?: string;
    billing_address: ShippingAddress;
    files?: OpenApiFiles[];
    cashback_applied: number;
    delivery_charges: number;
    employee_discount?: any;
    cart_items: OpenApiOrderItem[];
    loyalty_discount?: number;
    cart_value: number;
    coupon?: string;
    gstin?: string;
    coupon_code: string;
    payment_mode?: string;
    payment_methods: MultiTenderPaymentMethod[];
    shipping_address?: ShippingAddress;
    coupon_value: number;
    cod_charges: number;
    currency_code?: string;
    comment?: string;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    success?: boolean;
    order_ref_id?: string;
    message?: string;
};
type AbandonedCart = {
    order_id?: string;
    checkout_mode?: string;
    articles: any[];
    delivery_charges?: any;
    user_id: string;
    fynd_credits?: any;
    pick_up_customer_details?: any;
    is_archive?: boolean;
    coupon?: any;
    cart_value?: number;
    meta?: any;
    cashback: any;
    fc_index_map?: number[];
    last_modified: string;
    is_default: boolean;
    bulk_coupon_discount?: number;
    discount?: number;
    app_id?: string;
    expire_at: string;
    payments?: any;
    buy_now?: boolean;
    promotion?: any;
    gstin?: string;
    is_active?: boolean;
    payment_mode?: string;
    payment_methods?: any[];
    _id: string;
    shipments?: any[];
    cod_charges?: any;
    merge_qty?: boolean;
    created_on: string;
    uid: number;
    comment?: string;
};
type AbandonedCartResponse = {
    success?: boolean;
    page?: Page;
    message?: string;
    result?: any;
    items?: AbandonedCart[];
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    pan_no?: string;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    breakup_values?: CartBreakup;
    coupon_text?: string;
    checkout_mode?: string;
    is_valid?: boolean;
    delivery_charge_info?: string;
    message?: string;
    currency?: CartCurrency;
    buy_now?: boolean;
    delivery_promise?: ShipmentPromise;
    pan_config?: any;
    last_modified?: string;
    items?: CartProductInfo[];
    id?: string;
    gstin?: string;
    comment?: string;
};
type AddProductCart = {
    pos?: boolean;
    _custom_json?: any;
    display?: string;
    article_id?: string;
    product_group_tags?: string[];
    parent_item_identifiers?: any;
    extra_meta?: any;
    item_id?: number;
    article_assignment?: any;
    item_size?: string;
    quantity?: number;
    store_id?: number;
    seller_id?: number;
};
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    partial?: boolean;
    success?: boolean;
    message?: string;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    item_index?: number;
    _custom_json?: any;
    article_id?: string;
    parent_item_identifiers?: any;
    extra_meta?: any;
    item_id?: number;
    identifiers: CartProductIdentifer;
    item_size?: string;
    quantity?: number;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
type UpdateCartDetailResponse = {
    success?: boolean;
    message?: string;
    cart?: CartDetailResponse;
};
type GetShareCartLinkRequest = {
    meta?: any;
    id?: string;
};
type GetShareCartLinkResponse = {
    share_url?: string;
    token?: string;
};
type SharedCartDetails = {
    user?: any;
    token?: string;
    source?: any;
    meta?: any;
    created_on?: string;
};
type SharedCart = {
    restrict_checkout?: boolean;
    coupon_text?: string;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    currency?: CartCurrency;
    last_modified?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    buy_now?: boolean;
    items?: CartProductInfo[];
    id?: string;
    gstin?: string;
    cart_id?: number;
    message?: string;
    shared_cart_details?: SharedCartDetails;
    delivery_promise?: ShipmentPromise;
    uid?: string;
    comment?: string;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    cart_id?: string;
    user_id?: string;
    pick_up_customer_details?: any;
    item_counts?: number;
    cart_value?: number;
    created_on?: string;
};
type MultiCartResponse = {
    success?: boolean;
    data?: CartList[];
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    restrict_checkout?: boolean;
    coupon_text?: string;
    checkout_mode?: string;
    pan_config?: any;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    currency?: CartCurrency;
    last_modified?: string;
    pan_no?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    buy_now?: boolean;
    items?: CartProductInfo[];
    id?: string;
    gstin?: string;
    user?: UserInfo;
    message?: string;
    delivery_promise?: ShipmentPromise;
    comment?: string;
};
type DeleteCartRequest = {
    cart_id_list?: string[];
};
type DeleteCartDetailResponse = {
    success?: boolean;
    message?: string;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type PageCoupon = {
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    total?: number;
    total_item_count?: number;
};
type Coupon = {
    title?: string;
    sub_title?: string;
    expires_on?: string;
    coupon_type?: string;
    minimum_cart_value?: number;
    max_discount_value?: number;
    message?: string;
    is_applicable?: boolean;
    coupon_value?: number;
    description?: string;
    is_applied?: boolean;
    coupon_code?: string;
};
type GetCouponResponse = {
    page?: PageCoupon;
    available_coupon_list?: Coupon[];
};
type ApplyCouponRequest = {
    coupon_code: string;
};
type GeoLocation = {
    latitude?: number;
    longitude?: number;
};
type PlatformAddress = {
    is_default_address?: boolean;
    checkout_mode?: string;
    user_id?: string;
    area_code_slug?: string;
    country_code?: string;
    meta?: any;
    geo_location?: GeoLocation;
    landmark?: string;
    phone?: string;
    address_type?: string;
    state?: string;
    created_by_user_id?: string;
    area?: string;
    email?: string;
    area_code?: string;
    address?: string;
    name?: string;
    id?: string;
    is_active?: boolean;
    country?: string;
    cart_id?: string;
    google_map_point?: any;
    tags?: string[];
    city?: string;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type SaveAddressResponse = {
    success?: boolean;
    id?: string;
    is_default_address?: boolean;
};
type UpdateAddressResponse = {
    success?: boolean;
    is_updated?: boolean;
    id?: string;
    is_default_address?: boolean;
};
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
type PlatformSelectCartAddressRequest = {
    billing_address_id?: string;
    checkout_mode?: string;
    id?: string;
    cart_id?: string;
};
type ShipmentResponse = {
    fulfillment_type?: string;
    dp_options?: any;
    shipment_type?: string;
    box_type?: string;
    promise?: ShipmentPromise;
    shipments?: number;
    order_type?: string;
    dp_id?: string;
    items?: CartProductInfo[];
    fulfillment_id?: number;
};
type CartShipmentsResponse = {
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    coupon_text?: string;
    checkout_mode?: string;
    delivery_charge_info?: string;
    buy_now?: boolean;
    id?: string;
    gstin?: string;
    breakup_values?: CartBreakup;
    cart_id?: number;
    is_valid?: boolean;
    currency?: CartCurrency;
    message?: string;
    error?: boolean;
    shipments?: ShipmentResponse[];
    delivery_promise?: ShipmentPromise;
    last_modified?: string;
    uid?: string;
    comment?: string;
};
type UpdateCartShipmentItem = {
    quantity?: number;
    article_uid: string;
    shipment_type: string;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    pan_no?: string;
    checkout_mode?: string;
    pick_up_customer_details?: any;
    gstin?: string;
    comment?: string;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type StaffCheckout = {
    last_name: string;
    employee_code?: string;
    first_name: string;
    _id: string;
    user: string;
};
type Files = {
    key: string;
    values: string[];
};
type PlatformCartCheckoutDetailRequest = {
    ordering_store?: number;
    pos?: boolean;
    employee_code?: string;
    checkout_mode?: string;
    aggregator?: string;
    delivery_address?: any;
    user_id: string;
    order_type: string;
    meta?: any;
    payment_auto_confirm?: boolean;
    staff?: StaffCheckout;
    device_id?: string;
    payment_params?: any;
    pick_at_store_uid?: number;
    billing_address?: any;
    files?: Files[];
    payment_identifier?: string;
    merchant_code?: string;
    address_id?: string;
    id: string;
    payment_mode: string;
    billing_address_id?: string;
    extra_meta?: any;
    callback_url?: string;
};
type CheckCart = {
    restrict_checkout?: boolean;
    order_id?: string;
    coupon_text?: string;
    checkout_mode?: string;
    delivery_charges?: number;
    success?: boolean;
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    currency?: CartCurrency;
    user_type?: string;
    cod_message?: string;
    last_modified?: string;
    delivery_charge_order_value?: number;
    store_emps?: any[];
    payment_selection_lock?: PaymentSelectionLock;
    cod_available?: boolean;
    delivery_charge_info?: string;
    buy_now?: boolean;
    items?: CartProductInfo[];
    id?: string;
    gstin?: string;
    error_message?: string;
    cart_id?: number;
    message?: string;
    delivery_promise?: ShipmentPromise;
    store_code?: string;
    cod_charges?: number;
    uid?: string;
    comment?: string;
};
type CartCheckoutResponse = {
    order_id?: string;
    success?: boolean;
    app_intercept_url?: string;
    message?: string;
    cart?: CheckCart;
    data?: any;
    payment_confirm_url?: string;
    callback_url?: string;
};
type CartDeliveryModesResponse = {
    available_modes?: string[];
    pickup_stores?: number[];
};
type PickupStoreDetail = {
    landmark?: string;
    phone?: string;
    address_type?: string;
    area_code?: string;
    country?: string;
    state?: string;
    address?: string;
    id?: number;
    name?: string;
    pincode?: number;
    area_code_slug?: string;
    city?: string;
    store_code?: string;
    area?: string;
    email?: string;
    uid?: number;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    payment_identifier?: string;
    payment_mode?: string;
    merchant_code?: string;
    address_id?: string;
    aggregator_name?: string;
    id?: string;
};
type CouponValidity = {
    discount?: number;
    title?: string;
    display_message_en?: string;
    code?: string;
    valid?: boolean;
};
type PaymentCouponValidate = {
    success: boolean;
    coupon_validity?: CouponValidity;
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
type ConfigurationRes = {
    valid_android_packages?: string[];
    terms_conditions_link?: string;
    application_id?: string;
    success?: boolean;
};
type SetConfigurationRes = {
    success?: boolean;
};
type ConfigurationRequest = {
    valid_android_packages?: string[];
    terms_conditions_link?: string;
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
type RemoveProxyResponse = {
    message?: string;
    data?: any;
};
type APIError = {
    code?: string;
    message?: string;
    info?: string;
    request_id?: string;
    meta?: any;
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
