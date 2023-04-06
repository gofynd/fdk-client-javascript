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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, SessionListResponseInfo, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserEmails, UserPhoneNumbers, GenerateSEOContent, GeneratedSEOContent, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutMoreAttributes, PayoutAggregator, PayoutCustomer, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, Prices, ShipmentItemFulFillingStore, PlatformItem, GSTDetailsData, BagUnit, PaymentModeInfo, UserDataInfo, ShipmentStatus, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, FulfillingStore, BagStateMapper, BagStatusHistory, OrderDetailsData, UserDetailsData, Dimensions, Meta, TrackingList, ShipmentPayments, PhoneDetails, ContactDetails, CompanyDetails, OrderingStoreDetails, ShipmentStatusData, DPDetailsData, InvoiceInfo, AffiliateMeta, EinvoiceInfo, DebugInfo, Formatted, BuyerDetails, ShipmentTimeStamp, LockData, ShipmentMeta, PDFLinks, AffiliateDetails, BagConfigs, OrderBrandName, OrderBagArticle, PlatformDeliveryAddress, Identifier, FinancialBreakup, BagGST, CurrentStatus, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBags, PlatformShipment, ShipmentInfoResponse, TaxDetails, TransactionData, BillingStaffDetails, PlatformUserDetails, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Dates, Brand, ReturnConfig, Weight, Article, B2BPODetails, BagMeta, StoreEwaybill, StoreEinvoice, StoreGstCredentials, Document, StoreDocuments, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, AffiliateBagDetails, BagReturnableCancelableStatus, BagGSTDetails, ArticleDetails, Attributes, Item, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, MarketPlacePdf, AffiliateBag, OrderUser, UserData, OrderPriority, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, Meta1, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, TaxInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, PaymentMethod, PaymentInfo, ShippingInfo, BillingInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, DeleteResponse, GetSearchWordsDetailResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, ApplicationItemMOQ, ApplicationItemSEO, MetaFields, ApplicationItemMeta, SuccessResponse1, MOQData, SEOData, OwnerAppItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionQuery, BannerImage, ImageUrls, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionBadge, UserInfo, CollectionImage, CollectionBanner, SeoDetail, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, UserInfo1, ProductTemplateExportResponse, ProductDownloadsResponse, ProductTemplateExportFilterRequest, ProductTemplateDownloadsExport, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, Image, Logo, Trader, NetQuantityResponse, ReturnConfigResponse, ProductPublish, VerifiedBy, ProductSchemaV2, ProductListingResponseV2, TeaserTag, TaxIdentifier, NetQuantity, CustomOrder, ProductPublish1, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkJob, BulkResponse, BulkProductRequest, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, WeightResponse, ManufacturerResponse, CompanyMeta, BrandMeta, QuantityBase, Quantities, PriceMeta, Trader1, DimensionResponse, ReturnConfig1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, WeightResponse1, ManufacturerResponse1, CompanyMeta1, BrandMeta1, Quantity, QuantitiesArticle, ArticleStoreResponse, PriceArticle, Trader2, DimensionResponse1, ReturnConfig2, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportQuantityFilter, InventoryExportAdvanceOption, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, InventoryJobFilters, InventoryJobDetailResponse, InventoryExportJobListResponse, InventoryExportFilter, InventoryCreateRequest, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, BulkHsnUpsert, BulkHsnResponse, PageResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, UserSerializer1, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationTimingSerializer, LocationDayWiseSerializer, LocationIntegrationType, UserSerializer2, GetAddressSerializer, GetCompanySerializer, SellerPhoneNumber, LocationManagerSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, CompanyTaxesSerializer, BusinessCountryInfo, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CommunicationConfig, CommsConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, CouponAction, Ownership, CouponDateMeta, State, Validity, CouponAuthor, DisplayMetaDict, DisplayMeta, UsesRemaining, UsesRestriction, PriceRange, PaymentAllowValue, PaymentModes, PostOrder, BulkBundleRestriction, Restrictions, Validation, RuleDefinition, CouponSchedule, Rule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionAuthor, Visibility, PromotionAction, PromotionDateMeta, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, DisplayMeta1, UsesRemaining1, UsesRestriction1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, Restrictions1, Ownership1, PromotionSchedule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ActionQuery, ProductAction, BaseInfo, CategoryInfo, ProductImage, CartProduct, PromoMeta, ProductAvailability, ProductPrice, ProductPriceInfo, BasePrice, ArticlePriceInfo, ProductArticle, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, Ownership2, AppliedPromotion, CartProductIdentifer, CartProductInfo, DisplayBreakup, CouponBreakup, LoyaltyPoints, RawBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartRequest, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, Files, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
type Prices = {
    cashback_applied?: number;
    fynd_credits?: number;
    discount?: number;
    cod_charges?: number;
    refund_credit?: number;
    value_of_good?: number;
    coupon_value?: number;
    tax_collected_at_source?: number;
    transfer_price?: number;
    price_marked?: number;
    price_effective?: number;
    cashback?: number;
    delivery_charge?: number;
    amount_paid?: number;
    refund_amount?: number;
    amount_paid_roundoff?: number;
    promotion_effective_discount?: number;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type PlatformItem = {
    department_id?: number;
    size?: string;
    images?: string[];
    image?: string[];
    l3_category_name?: string;
    id?: number;
    l1_category?: string[];
    code?: string;
    color?: string;
    can_return?: boolean;
    can_cancel?: boolean;
    l3_category?: number;
    name?: string;
};
type GSTDetailsData = {
    value_of_good: number;
    gstin_code: string;
    gst_fee: number;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
};
type BagUnit = {
    ordering_channel: string;
    prices?: Prices;
    total_shipment_bags: number;
    shipment_id: string;
    item_quantity: number;
    item?: PlatformItem;
    can_return?: boolean;
    can_cancel?: boolean;
    status: any;
    gst?: GSTDetailsData;
    bag_id: number;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type UserDataInfo = {
    is_anonymous_user?: boolean;
    gender?: string;
    mobile?: string;
    last_name?: string;
    first_name?: string;
    uid?: number;
    email?: string;
    name?: string;
    avis_user_id?: string;
};
type ShipmentStatus = {
    ops_status: string;
    hex_code: string;
    title: string;
    actual_status: string;
    status: string;
};
type ShipmentItem = {
    prices?: Prices;
    shipment_created_at: string;
    sla?: any;
    payment_methods?: any;
    channel?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    shipment_id?: string;
    id: string;
    created_at: string;
    fulfilling_centre: string;
    bags?: BagUnit[];
    payment_mode_info?: PaymentModeInfo;
    total_shipments_in_order: number;
    user?: UserDataInfo;
    total_bags_count: number;
    application?: any;
    shipment_status?: ShipmentStatus;
    company?: any;
};
type FilterInfoOption = {
    value?: string;
    text: string;
    name?: string;
};
type FiltersInfo = {
    value: string;
    text: string;
    options?: FilterInfoOption[];
    type: string;
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    applied_filters?: any;
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type FulfillingStore = {
    city: string;
    pincode: string;
    store_name: string;
    id: number;
    code: string;
    fulfillment_channel: string;
    phone: string;
    country: string;
    address: string;
    contact_person: string;
    state: string;
    meta: any;
};
type BagStateMapper = {
    app_facing?: boolean;
    is_active?: boolean;
    notify_customer?: boolean;
    bs_id: number;
    app_state_name?: string;
    journey_type: string;
    display_name: string;
    state_type: string;
    app_display_name?: string;
    name: string;
};
type BagStatusHistory = {
    bag_state_mapper?: BagStateMapper;
    store_id?: number;
    app_display_name?: string;
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    updated_at?: string;
    forward?: boolean;
    bsh_id?: number;
    shipment_id?: string;
    created_at?: string;
    state_type?: string;
    display_name?: string;
    delivery_awb_number?: string;
    state_id?: number;
    status: string;
    reasons?: any[];
    bag_id?: number;
};
type OrderDetailsData = {
    fynd_order_id: string;
    ordering_channel?: string;
    affiliate_id?: string;
    cod_charges?: string;
    tax_details?: any;
    ordering_channel_logo?: any;
    source?: string;
    order_value?: string;
    order_date?: string;
};
type UserDetailsData = {
    area?: string;
    landmark?: string;
    city: string;
    pincode: string;
    phone: string;
    address_type?: string;
    country: string;
    address1?: string;
    address: string;
    state: string;
    email?: string;
    name: string;
};
type Dimensions = {
    height?: number;
    width?: number;
    length?: number;
    unit?: string;
    is_default?: boolean;
};
type Meta = {
    dimension?: Dimensions;
};
type TrackingList = {
    is_passed?: boolean;
    time?: string;
    is_current?: boolean;
    text: string;
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
    company_gst?: string;
    company_contact?: ContactDetails;
    company_name?: string;
    address?: any;
    company_cin?: string;
};
type OrderingStoreDetails = {
    ordering_store_id: number;
    city: string;
    pincode: string;
    store_name: string;
    code: string;
    phone: string;
    country: string;
    address: string;
    contact_person: string;
    state: string;
    meta: any;
};
type ShipmentStatusData = {
    id?: number;
    shipment_id?: string;
    created_at?: string;
    bag_list?: string[];
    status?: string;
};
type DPDetailsData = {
    gst_tag?: string;
    pincode?: string;
    track_url?: string;
    id?: number;
    eway_bill_id?: string;
    awb_no?: string;
    country?: string;
    name?: string;
};
type InvoiceInfo = {
    store_invoice_id?: string;
    invoice_url?: string;
    label_url?: string;
    updated_date?: string;
    credit_note_id?: string;
};
type AffiliateMeta = {
    loyalty_discount?: number;
    order_item_id?: string;
    channel_shipment_id?: string;
    quantity?: number;
    employee_discount?: number;
    coupon_code?: string;
    due_date?: string;
    size_level_total_qty?: number;
    is_priority?: boolean;
    box_type?: string;
    channel_order_id?: string;
};
type EinvoiceInfo = {
    invoice?: any;
    credit_note?: any;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type BuyerDetails = {
    ajio_site_id?: string;
    city: string;
    pincode: number;
    gstin: string;
    address: string;
    state: string;
    name: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type LockData = {
    mto?: boolean;
    locked?: boolean;
    lock_message?: string;
};
type ShipmentMeta = {
    dp_sort_key?: string;
    packaging_name?: string;
    einvoice_info?: EinvoiceInfo;
    external?: any;
    forward_affiliate_order_id?: string;
    dp_options?: any;
    assign_dp_from_sb?: boolean;
    awb_number?: string;
    auto_trigger_dp_assignment_acf: boolean;
    weight: number;
    dp_name?: string;
    return_awb_number?: string;
    store_invoice_updated_date?: string;
    return_store_node?: number;
    box_type?: string;
    return_affiliate_shipment_id?: string;
    return_affiliate_order_id?: string;
    shipment_volumetric_weight?: number;
    b2c_buyer_details?: any;
    ewaybill_info?: any;
    marketplace_store_id?: string;
    bag_weight?: any;
    po_number?: string;
    shipment_weight?: number;
    debug_info?: DebugInfo;
    return_details?: any;
    fulfilment_priority_text?: string;
    forward_affiliate_shipment_id?: string;
    order_type?: string;
    formatted?: Formatted;
    b2b_buyer_details?: BuyerDetails;
    dp_id?: string;
    timestamp?: ShipmentTimeStamp;
    due_date?: string;
    lock_data?: LockData;
    same_store_available: boolean;
};
type PDFLinks = {
    invoice_type: string;
    delivery_challan_a4?: string;
    label_a4?: string;
    invoice_a4?: string;
    invoice_pos?: string;
    label_a6?: string;
    label_type: string;
    po_invoice?: string;
    b2b?: string;
    invoice?: string;
    invoice_a6?: string;
    label_pos?: string;
    credit_note_url?: string;
    label?: string;
};
type AffiliateDetails = {
    affiliate_order_id: string;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
    company_affiliate_tag?: string;
    shipment_meta: ShipmentMeta;
    affiliate_bag_id: string;
    ad_id?: string;
    pdf_links?: PDFLinks;
};
type BagConfigs = {
    can_be_cancelled: boolean;
    is_active: boolean;
    enable_tracking: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
};
type OrderBrandName = {
    brand_name: string;
    created_on: string;
    logo: string;
    id: number;
    modified_on?: string;
    company: string;
};
type OrderBagArticle = {
    identifiers?: any;
    return_config?: any;
    uid?: string;
};
type PlatformDeliveryAddress = {
    longitude?: number;
    address_category?: string;
    updated_at?: string;
    area?: string;
    landmark?: string;
    city?: string;
    pincode?: string;
    address2?: string;
    created_at?: string;
    version?: string;
    phone?: string;
    latitude?: number;
    address_type?: string;
    country?: string;
    address1?: string;
    contact_person?: string;
    state?: string;
    email?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    discount: number;
    price_marked: number;
    added_to_fynd_cash: boolean;
    coupon_value: number;
    gst_fee: number;
    cashback_applied: number;
    cod_charges: number;
    refund_credit: number;
    gst_tax_percentage: number;
    amount_paid: number;
    tax_collected_at_source?: number;
    item_name: string;
    cashback: number;
    delivery_charge: number;
    identifiers: Identifier;
    brand_calculated_amount: number;
    promotion_effective_discount: number;
    amount_paid_roundoff?: number;
    hsn_code: string;
    fynd_credits: number;
    size: string;
    transfer_price: number;
    value_of_good: number;
    coupon_effective_discount: number;
    price_effective: number;
    total_units: number;
    gst_tag: string;
};
type BagGST = {
    is_default_hsn_code?: boolean;
    hsn_code?: string;
    value_of_good?: number;
    gstin_code?: string;
    brand_calculated_amount?: number;
    gst_tax_percentage?: number;
    gst_fee?: number;
    gst_tag?: string;
};
type CurrentStatus = {
    bag_state_mapper?: BagStateMapper;
    store_id?: number;
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    updated_at?: string;
    shipment_id?: string;
    created_at?: string;
    state_type?: string;
    delivery_awb_number?: string;
    state_id?: number;
    status?: string;
    current_status_id: number;
    bag_id?: number;
};
type DiscountRules = {
    value?: number;
    type?: string;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    item_criteria?: ItemCriterias;
    cart_conditions?: any;
};
type AppliedPromos = {
    discount_rules?: DiscountRules[];
    promotion_type?: string;
    promo_id?: string;
    article_quantity?: number;
    mrp_promotion?: boolean;
    amount?: number;
    promotion_name?: string;
    buy_rules?: BuyRules[];
};
type OrderBags = {
    parent_promo_bags?: any;
    bag_configs?: BagConfigs;
    brand?: OrderBrandName;
    article?: OrderBagArticle;
    delivery_address?: PlatformDeliveryAddress;
    can_cancel?: boolean;
    identifier?: string;
    financial_breakup?: FinancialBreakup;
    gst_details?: BagGST;
    entity_type?: string;
    current_status?: CurrentStatus;
    line_number?: number;
    quantity?: number;
    item?: PlatformItem;
    seller_identifier?: string;
    display_name?: string;
    can_return?: boolean;
    applied_promos?: AppliedPromos[];
    prices?: Prices;
    bag_id: number;
};
type PlatformShipment = {
    shipment_quantity?: number;
    packaging_type?: string;
    fulfilling_store?: FulfillingStore;
    payment_mode?: string;
    bag_status_history?: BagStatusHistory[];
    delivery_slot?: any;
    operational_status?: string;
    order?: OrderDetailsData;
    vertical?: string;
    user?: UserDataInfo;
    invoice_id?: string;
    delivery_details?: UserDetailsData;
    meta?: Meta;
    forward_shipment_id?: string;
    tracking_list?: TrackingList[];
    total_items?: number;
    picked_date?: string;
    payments?: ShipmentPayments;
    custom_meta?: any[];
    company_details?: CompanyDetails;
    shipment_id: string;
    ordering_store?: OrderingStoreDetails;
    total_bags?: number;
    status?: ShipmentStatusData;
    coupon?: any;
    shipment_status?: string;
    user_agent?: string;
    fulfilment_priority?: number;
    billing_details?: UserDetailsData;
    gst_details?: GSTDetailsData;
    enable_dp_tracking?: boolean;
    dp_details?: DPDetailsData;
    payment_methods?: any;
    shipment_images?: string[];
    journey_type?: string;
    invoice?: InvoiceInfo;
    lock_status?: boolean;
    affiliate_details?: AffiliateDetails;
    bags?: OrderBags[];
    priority_text?: string;
    platform_logo?: string;
    prices?: Prices;
};
type ShipmentInfoResponse = {
    success: boolean;
    message?: string;
    shipments?: PlatformShipment[];
};
type TaxDetails = {
    pan_no?: string;
    gstin?: string;
};
type TransactionData = {
    transaction_id?: string;
    entity?: string;
    payment_id?: string;
    terminal_id?: string;
    unique_reference_number?: string;
    currency?: string;
    amount_paid?: string;
    status?: string;
};
type BillingStaffDetails = {
    first_name?: string;
    user?: string;
    staff_id?: number;
    employee_code?: string;
    last_name?: string;
};
type PlatformUserDetails = {
    platform_user_first_name?: string;
    platform_user_last_name?: string;
    platform_user_id?: string;
    platform_user_employee_code?: string;
};
type OrderMeta = {
    mongo_cart_id?: number;
    currency_symbol?: string;
    customer_note?: string;
    files?: any[];
    transaction_data?: TransactionData;
    order_platform?: string;
    ordering_store?: number;
    staff?: any;
    order_tags?: any[];
    company_logo?: string;
    comment?: string;
    billing_staff_details?: BillingStaffDetails;
    platform_user_details?: PlatformUserDetails;
    order_type?: string;
    extra_meta?: any;
    payment_type?: string;
    order_child_entities?: string[];
    employee_id?: number;
    cart_id?: number;
};
type OrderDict = {
    fynd_order_id: string;
    payment_methods?: any;
    tax_details?: TaxDetails;
    prices?: Prices;
    meta?: OrderMeta;
    order_date: string;
};
type ShipmentDetailsResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    order?: OrderDict;
};
type SubLane = {
    total_items?: number;
    actions?: any[];
    value?: string;
    text?: string;
    index?: number;
};
type SuperLane = {
    value: string;
    total_items?: number;
    text: string;
    options?: SubLane[];
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformBreakupValues = {
    value?: string;
    display?: string;
    name?: string;
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformOrderItems = {
    user_info?: UserDataInfo;
    order_id?: string;
    breakup_values?: PlatformBreakupValues[];
    channel?: PlatformChannel;
    total_order_value?: number;
    payment_mode?: string;
    shipments?: PlatformShipment[];
    order_created_time?: string;
    order_value?: number;
    meta?: any;
};
type OrderListingResponse = {
    success?: boolean;
    page?: Page;
    total_count?: number;
    message?: string;
    lane?: string;
    items?: PlatformOrderItems[];
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    value: number;
    text: string;
    options?: Options[];
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    account_name?: string;
    reason?: string;
    updated_at?: string;
    awb?: string;
    shipment_type?: string;
    raw_status?: string;
    last_location_recieved_at?: string;
    status?: string;
    meta?: any;
    updated_time?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    processed?: FiltersInfo[];
    returned?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    filters?: FiltersInfo[];
};
type FiltersResponse = {
    global_filter?: FiltersInfo[];
    advance_filter?: AdvanceFilterInfo;
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    report_name?: string;
    report_type?: string;
    report_id?: string;
    report_created_at?: string;
    display_name?: string;
    s3_key?: string;
    request_details?: any;
    report_requested_at?: string;
    status?: string;
};
type JioCodeUpsertDataSet = {
    item_id?: string;
    article_id?: string;
    company_id?: string;
    jio_code?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    value?: string;
    message?: string;
    type?: string;
};
type JioCodeUpsertResponse = {
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
    data?: any[];
    identifier?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    store_id?: string;
    do_invoice_label_generated: boolean;
    batch_id: string;
    invoice_status?: string;
    company_id?: string;
    store_name?: string;
    invoice?: any;
    store_code?: string;
    data?: any;
    label?: any;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type FileResponse = {
    file_name?: string;
    size?: number;
    file_path?: string;
    method?: string;
    content_type?: string;
    namespace?: string;
    cdn?: URL;
    upload?: FileUploadResponse;
    tags?: string[];
    operation?: string;
};
type BulkListingPage = {
    has_previous?: boolean;
    type?: string;
    size?: number;
    has_next?: boolean;
    total?: number;
    current?: number;
};
type bulkListingData = {
    processing?: number;
    id?: string;
    user_name?: string;
    uploaded_on?: string;
    batch_id?: string;
    failed?: number;
    store_code?: string;
    successful_shipments?: any[];
    status?: string;
    store_id?: number;
    processing_shipments?: string[];
    user_id?: string;
    failed_shipments?: any[];
    file_name?: string;
    company_id?: number;
    store_name?: string;
    successful?: number;
    total?: number;
    excel_url?: string;
};
type BulkListingResponse = {
    success?: boolean;
    error?: string;
    page?: BulkListingPage;
    data?: bulkListingData[];
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    qc_type?: string[];
    question_set?: QuestionSet[];
    display_name?: string;
    id?: number;
};
type PlatformShipmentReasonsResponse = {
    success?: boolean;
    reasons?: Reason[];
};
type BulkActionPayload = {
    url: string;
};
type BulkActionResponse = {
    status?: boolean;
    message?: string;
};
type BulkActionDetailsDataField = {
    successful_shipments_count?: number;
    processing_shipments_count?: number;
    batch_id?: string;
    company_id?: string;
    failed_shipments_count?: number;
    total_shipments_count?: number;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    success?: string;
    uploaded_by?: string;
    user_id?: string;
    uploaded_on?: string;
    error?: string[];
    failed_records?: string[];
    message?: string;
    data?: BulkActionDetailsDataField[];
    status?: boolean;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type Brand = {
    is_virtual_invoice?: boolean;
    script_last_ran?: string;
    credit_note_expiry_days?: number;
    brand_name: string;
    credit_note_allowed?: boolean;
    created_on?: number;
    modified_on?: number;
    logo?: string;
    pickup_location?: string;
    invoice_prefix?: string;
    start_date?: string;
    brand_id: number;
    company: string;
};
type ReturnConfig = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Weight = {
    unit?: string;
    is_default?: boolean;
    shipping?: number;
};
type Article = {
    is_set?: boolean;
    a_set?: any;
    return_config?: ReturnConfig;
    size: string;
    dimensions?: Dimensions;
    weight?: Weight;
    code?: string;
    child_details?: any;
    seller_identifier: string;
    _id: string;
    identifiers: Identifier;
    raw_meta?: any;
    esp_modified?: any;
    uid: string;
};
type B2BPODetails = {
    po_line_amount?: number;
    po_tax_amount?: number;
    total_gst_percentage?: number;
    docker_number?: string;
    item_base_price?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
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
type Document = {
    ds_type: string;
    value: string;
    url?: string;
    verified: boolean;
    legal_name: string;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    username?: string;
    password?: string;
    user?: string;
};
type StoreMeta = {
    gst_number?: string;
    product_return_config?: any;
    notification_emails?: string[];
    gst_credentials: StoreGstCredentials;
    documents?: StoreDocuments;
    stage: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    display_name: string;
    additional_contact_details?: any;
    ewaybill_portal_details?: any;
    timing?: any[];
};
type StoreAddress = {
    longitude: number;
    area?: string;
    pincode: number;
    created_at: string;
    country: string;
    state: string;
    latitude: number;
    city: string;
    address_type: string;
    email?: string;
    address_category: string;
    address2?: string;
    version?: string;
    phone: string;
    address1: string;
    updated_at: string;
    landmark?: string;
    country_code: string;
    contact_person: string;
};
type Store = {
    store_active_from?: string;
    longitude: number;
    parent_store_id?: number;
    pincode: string;
    created_at: string;
    alohomora_user_id?: number;
    code?: string;
    fulfillment_channel: string;
    location_type: string;
    country: string;
    brand_store_tags?: string[];
    mall_area?: string;
    state: string;
    latitude: number;
    meta: StoreMeta;
    store_address_json?: StoreAddress;
    is_active?: boolean;
    city: string;
    mall_name?: string;
    login_username: string;
    address2?: string;
    phone: number;
    brand_id?: any;
    store_email: string;
    is_archived?: boolean;
    is_enabled_for_recon?: boolean;
    address1: string;
    name: string;
    packaging_material_count?: number;
    updated_at?: string;
    company_id: number;
    vat_no?: string;
    s_id: string;
    contact_person: string;
    order_integration_id?: string;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    loyalty_discount?: number;
    affiliate_meta: AffiliateMeta;
    employee_discount?: number;
    affiliate_bag_id: string;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    is_active: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
};
type BagGSTDetails = {
    is_default_hsn_code?: boolean;
    hsn_code: string;
    cgst_gst_fee: string;
    cgst_tax_percentage: number;
    igst_tax_percentage: number;
    value_of_good: number;
    sgst_gst_fee: string;
    gstin_code?: string;
    brand_calculated_amount: number;
    igst_gst_fee: string;
    sgst_tax_percentage: number;
    hsn_code_id: string;
    gst_tax_percentage: number;
    gst_fee: number;
    tax_collected_at_source: number;
    gst_tag: string;
};
type ArticleDetails = {
    status?: any;
};
type Attributes = {
    essential?: string;
    brand_name?: string;
    gender?: string[];
    primary_color?: string;
    marketer_address?: string;
    primary_color_hex?: string;
    marketer_name?: string;
    name?: string;
    primary_material?: string;
};
type Item = {
    l2_category?: string[];
    code?: string;
    brand: string;
    meta?: any;
    department_id?: number;
    branch_url?: string;
    l3_category_name?: string;
    l1_category?: string[];
    can_cancel?: boolean;
    last_updated_at?: string;
    color?: string;
    l2_category_id?: number;
    brand_id: number;
    slug_key: string;
    l3_category?: number;
    item_id: number;
    name: string;
    webstore_product_url?: string;
    l1_category_id?: number;
    size: string;
    image: string[];
    attributes: Attributes;
    gender?: string;
    can_return?: boolean;
};
type BagDetailsPlatformResponse = {
    parent_promo_bags?: any;
    b_id: number;
    bag_status_history?: BagStatusHistory;
    dates?: Dates;
    operational_status?: string;
    brand: Brand;
    article: Article;
    restore_coupon?: boolean;
    meta?: BagMeta;
    original_bag_list?: number[];
    shipment_id?: string;
    no_of_bags_order?: number;
    ordering_store?: Store;
    affiliate_bag_details: AffiliateBagDetails;
    tags?: string[];
    bag_status: BagStatusHistory[];
    status: BagReturnableCancelableStatus;
    identifier?: string;
    b_type?: string;
    restore_promos?: any;
    financial_breakup: FinancialBreakup[];
    qc_required?: any;
    gst_details: BagGSTDetails;
    entity_type?: string;
    journey_type: string;
    bag_update_time?: number;
    article_details?: ArticleDetails;
    current_status: BagStatusHistory;
    reasons?: any[];
    line_number?: number;
    affiliate_details?: AffiliateDetails;
    current_operational_status: BagStatusHistory;
    quantity?: number;
    item: Item;
    seller_identifier?: string;
    display_name?: string;
    applied_promos?: any[];
    prices: Prices;
    order_integration_id?: string;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    current: number;
    size: number;
    has_next: boolean;
    item_total: number;
    page_type: string;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
};
type GeneratePosOrderReceiptResponse = {
    success?: boolean;
    payment_receipt?: string;
    order_id?: string;
    invoice_receipt?: string;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    shipment_id?: string;
    status?: number;
    error?: string;
    message?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    status: number;
    error_trace?: string;
    message: string;
};
type StoreReassign = {
    bag_id?: number;
    reason_ids?: number[];
    mongo_article_id?: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    store_id: number;
    affiliate_id?: string;
    fynd_order_id?: string;
    set_id?: string;
    item_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    reason_text: string;
    affiliate_order_id?: string;
    id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    action: string;
    entity_type: string;
    entities: Entities[];
};
type Bags = {
    affiliate_bag_id?: string;
    bag_id?: number;
    is_locked?: boolean;
    affiliate_order_id?: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type CheckResponse = {
    status?: string;
    bags?: Bags[];
    is_bag_locked?: boolean;
    is_shipment_locked?: boolean;
    shipment_id?: string;
    original_filter?: OriginalFilter;
    lock_status?: boolean;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    check_response?: CheckResponse[];
    message?: string;
};
type AnnouncementResponse = {
    platform_id?: string;
    description?: string;
    company_id?: number;
    id: number;
    created_at?: string;
    title?: string;
    from_datetime?: string;
    logo_url?: string;
    platform_name?: string;
    to_datetime?: string;
};
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
};
type BaseResponse = {
    success: boolean;
    message: string;
};
type Click2CallResponse = {
    status: boolean;
    call_id: string;
};
type Products = {
    quantity?: number;
    line_number?: number;
    identifier?: string;
};
type ProductsReasonsFilters = {
    quantity?: number;
    line_number?: number;
    identifier?: string;
};
type ProductsReasonsData = {
    reason_text?: string;
    reason_id?: number;
};
type ProductsReasons = {
    filters?: ProductsReasonsFilters[];
    data?: ProductsReasonsData;
};
type EntityReasonData = {
    reason_text?: string;
    reason_id?: number;
};
type EntitiesReasons = {
    filters?: any[];
    data?: EntityReasonData;
};
type ReasonsData = {
    products?: ProductsReasons[];
    entities?: EntitiesReasons[];
};
type ProductsDataUpdatesFilters = {
    line_number?: number;
    identifier?: string;
};
type ProductsDataUpdates = {
    filters?: ProductsDataUpdatesFilters[];
    data?: any;
};
type EntitiesDataUpdates = {
    filters?: any[];
    data?: any;
};
type DataUpdates = {
    products?: ProductsDataUpdates[];
    entities?: EntitiesDataUpdates[];
};
type ShipmentsRequest = {
    products?: Products[];
    identifier: string;
    reasons?: ReasonsData;
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    status?: string;
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
    force_transition?: boolean;
};
type ShipmentsResponse = {
    exception?: string;
    final_state?: any;
    message?: string;
    code?: string;
    stack_trace?: string;
    status?: number;
    identifier?: string;
    meta?: any;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    _id: string;
    affiliate_store_id: string;
    avl_qty: number;
    identifier: any;
    price_marked: number;
    item_size: string;
    pdf_links?: MarketPlacePdf;
    seller_identifier: string;
    discount: number;
    affiliate_meta: any;
    amount_paid: number;
    sku: string;
    delivery_charge: number;
    fynd_store_id: string;
    company_id: number;
    store_id: number;
    quantity: number;
    modified_on: string;
    unit_price: number;
    price_effective: number;
    transfer_price: number;
    hsn_code_id: string;
    item_id: number;
};
type OrderUser = {
    first_name: string;
    state: string;
    mobile: number;
    city: string;
    last_name: string;
    email: string;
    pincode: string;
    phone: number;
    address1?: string;
    address2?: string;
    country: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
};
type ArticleDetails1 = {
    category: any;
    _id: string;
    weight: any;
    brand_id: number;
    quantity: number;
    dimension: any;
    attributes: any;
};
type ShipmentDetails = {
    box_type?: string;
    dp_id?: number;
    shipments: number;
    fulfillment_id: number;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    meta?: any;
};
type ShipmentConfig = {
    to_pincode: string;
    action: string;
    source: string;
    payment_mode: string;
    location_details?: LocationDetails;
    journey: string;
    identifier: string;
    shipment: ShipmentDetails[];
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    order_value: number;
    bags: AffiliateBag[];
    user: UserData;
    coupon?: string;
    affiliate_order_id?: string;
    discount: number;
    payment_mode: string;
    shipping_address: OrderUser;
    order_priority?: OrderPriority;
    cod_charges: number;
    delivery_charges: number;
    items: any;
    billing_address: OrderUser;
    shipment?: ShipmentData;
    payment?: any;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    name: string;
    description?: string;
    owner: string;
    secret: string;
    id: string;
    updated_at: string;
    created_at: string;
    token: string;
    meta?: AffiliateAppConfigMeta[];
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    config?: AffiliateConfig;
    id: string;
    token: string;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    affiliate: Affiliate;
    store_lookup?: string;
    article_lookup?: string;
    bag_end_state?: string;
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
};
type CreateOrderPayload = {
    order_info: OrderInfo;
    affiliate_id: string;
    order_config: OrderConfig;
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
    id: number;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    user: string;
    bag_id?: number;
    createdat: string;
    ticket_id?: string;
    message: string;
    l3_detail?: string;
    l1_detail?: string;
    l2_detail?: string;
    type: string;
    ticket_url?: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type PostHistoryFilters = {
    shipment_id: string;
    line_number?: string;
    identifier?: string;
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
type SmsDataPayload = {
    brand_name: string;
    country_code: string;
    message: string;
    payment_mode: string;
    phone_number: number;
    shipment_id: number;
    customer_name: string;
    order_id: string;
    amount_paid: number;
};
type SendSmsPayload = {
    bag_id: number;
    slug: string;
    data?: SmsDataPayload;
};
type Meta1 = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    id: number;
    shipment_id?: string;
    status?: string;
    remarks?: string;
    meta: Meta1;
    bag_list?: number[];
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
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    shipment_ids?: string[];
    qc_required: string;
    order_type: string;
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
type Tax = {
    rate: number;
    name: string;
    amount: any;
    breakup?: any[];
};
type Charge = {
    name: string;
    tax?: Tax;
    code?: string;
    amount: any;
    type: string;
};
type LineItem = {
    custom_messasge?: string;
    seller_identifier: string;
    external_line_id?: string;
    charges?: Charge[];
    quantity?: number;
    meta?: any;
};
type ProcessingDates = {
    customer_pickup_slot?: any;
    pack_by_date?: string;
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
    dispatch_by_date?: string;
    confirm_by_date?: string;
};
type Shipment = {
    line_items: LineItem[];
    processing_dates?: ProcessingDates;
    location_id: number;
    external_shipment_id?: string;
    meta?: any;
    priority?: number;
};
type PaymentMethod = {
    name: string;
    amount: number;
    mode: string;
    transaction_data?: any;
    meta?: any;
    collect_by: string;
    refund_by: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type ShippingInfo = {
    first_name: string;
    country_code?: string;
    address_type?: string;
    state: string;
    city: string;
    primary_mobile_number: string;
    pincode: string;
    slot?: any[];
    address2?: string;
    house_no?: string;
    shipping_type?: string;
    gender?: string;
    last_name?: string;
    alternate_mobile_number?: string;
    country: string;
    state_code?: string;
    middle_name?: string;
    alternate_email?: string;
    landmark?: string;
    customer_code?: string;
    floor_no?: string;
    address1: string;
    external_customer_code?: string;
    primary_email: string;
    title?: string;
    geo_location?: any;
};
type BillingInfo = {
    first_name: string;
    country_code?: string;
    state: string;
    city: string;
    primary_mobile_number: string;
    pincode: string;
    address2?: string;
    house_no?: string;
    gender?: string;
    last_name?: string;
    alternate_mobile_number?: string;
    country: string;
    state_code?: string;
    middle_name?: string;
    alternate_email?: string;
    customer_code?: string;
    floor_no?: string;
    address1: string;
    external_customer_code?: string;
    primary_email: string;
    title?: string;
};
type CreateOrderAPI = {
    tax_info?: TaxInfo;
    shipments: Shipment[];
    currency_info?: any;
    payment_info: PaymentInfo;
    shipping_info: ShippingInfo;
    billing_info: BillingInfo;
    charges?: Charge[];
    external_order_id?: string;
    external_creation_date?: string;
    meta?: any;
};
type CreateOrderErrorReponse = {
    exception?: string;
    message: string;
    code?: string;
    stack_trace?: string;
    request_id?: string;
    info?: any;
    status: number;
    meta?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    mode?: string;
    collect_by?: string;
    refund_by?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
};
type CreateChannelConfig = {
    shipment_assignment?: string;
    dp_configuration?: DpConfiguration;
    lock_states?: string[];
    payment_info?: CreateChannelPaymentInfo;
    location_reassignment?: boolean;
    logo_url?: any;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_upserted?: boolean;
    is_inserted?: boolean;
};
type UploadConsent = {
    manifest_id: string;
    consent_url: string;
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
    mobile: number;
    order_details?: FyndOrderIdList[];
    end_date: string;
    start_date: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    words?: string[];
    _custom_json?: any;
    is_active?: boolean;
    app_id?: string;
    result: SearchKeywordResult;
};
type GetSearchWordsData = {
    words?: string[];
    _custom_json?: any;
    is_active?: boolean;
    uid?: string;
    app_id?: string;
    result?: any;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type Media = {
    type?: string;
    url?: string;
    aspect_ratio?: string;
};
type AutocompletePageAction = {
    url?: string;
    type?: string;
    query?: any;
    params?: any;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    display?: string;
    logo?: Media;
    action?: AutocompleteAction;
    _custom_json?: any;
};
type CreateAutocompleteKeyword = {
    results?: AutocompleteResult[];
    words?: string[];
    _custom_json?: any;
    is_active?: boolean;
    app_id?: string;
};
type GetAutocompleteWordsData = {
    results?: any[];
    words?: string[];
    _custom_json?: any;
    uid?: string;
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type CreateAutocompleteWordsResponse = {
    app_id?: string;
    results?: any[];
    words?: string[];
    _custom_json?: any;
};
type ProductBundleItem = {
    auto_add_to_cart?: boolean;
    min_quantity: number;
    max_quantity: number;
    allow_remove?: boolean;
    auto_select?: boolean;
    product_uid: number;
};
type GetProductBundleCreateResponse = {
    created_by?: any;
    page_visibility?: string[];
    id?: string;
    created_on?: string;
    modified_on?: string;
    company_id?: number;
    products: ProductBundleItem[];
    meta?: any;
    same_store_assignment?: boolean;
    is_active: boolean;
    logo?: string;
    modified_by?: any;
    choice: string;
    slug: string;
    name: string;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    created_by?: any;
    page_visibility?: string[];
    created_on?: string;
    modified_on?: string;
    company_id?: number;
    products: ProductBundleItem[];
    meta?: any;
    same_store_assignment?: boolean;
    is_active: boolean;
    logo?: string;
    modified_by?: any;
    choice: string;
    slug: string;
    name: string;
};
type ProductBundleUpdateRequest = {
    page_visibility?: string[];
    modified_on?: string;
    company_id?: number;
    products: ProductBundleItem[];
    meta?: any;
    same_store_assignment?: boolean;
    is_active: boolean;
    logo?: string;
    modified_by?: any;
    choice: string;
    slug: string;
    name: string;
};
type Size = {
    display?: string;
    quantity?: number;
    is_available?: boolean;
    value?: string;
};
type LimitedProductData = {
    identifier?: any;
    attributes?: any;
    price?: any;
    short_description?: string;
    uid?: number;
    quantity?: number;
    item_code?: string;
    sizes?: string[];
    slug?: string;
    images?: string[];
    name?: string;
    country_of_origin?: string;
};
type Price = {
    min_marked?: number;
    max_effective?: number;
    min_effective?: number;
    max_marked?: number;
    currency?: string;
};
type GetProducts = {
    min_quantity?: number;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    product_details?: LimitedProductData;
    max_quantity?: number;
    allow_remove?: boolean;
    price?: Price;
    auto_select?: boolean;
    product_uid?: number;
};
type GetProductBundleResponse = {
    page_visibility?: string[];
    company_id?: number;
    products?: GetProducts[];
    meta?: any;
    same_store_assignment?: boolean;
    is_active?: boolean;
    logo?: string;
    choice?: string;
    slug?: string;
    name?: string;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    guide?: Guide;
    tag?: string;
    created_by?: any;
    id?: string;
    title: string;
    created_on?: string;
    company_id?: number;
    description?: string;
    modified_on?: string;
    modified_by?: any;
    image?: string;
    subtitle?: string;
    brand_id?: number;
    name: string;
    active?: boolean;
};
type SizeGuideResponse = {
    guide?: any;
    created_by?: any;
    tag?: string;
    id?: string;
    created_on?: string;
    modified_on?: string;
    company_id?: number;
    title?: string;
    modified_by?: any;
    active?: boolean;
    subtitle?: string;
    name?: string;
    brand_id?: number;
};
type ApplicationItemMOQ = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type ApplicationItemSEO = {
    title?: string;
    description?: string;
};
type MetaFields = {
    key: string;
    value: string;
};
type ApplicationItemMeta = {
    is_cod?: boolean;
    moq?: ApplicationItemMOQ;
    _custom_json?: any;
    seo?: ApplicationItemSEO;
    is_gift?: boolean;
    _custom_meta?: MetaFields[];
    alt_text?: any;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type MOQData = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type SEOData = {
    title?: string;
    description?: string;
};
type OwnerAppItemResponse = {
    is_cod?: boolean;
    moq?: MOQData;
    seo?: SEOData;
    is_gift?: boolean;
    alt_text?: any;
};
type GetConfigMetadataResponse = {
    condition?: any[];
    data: any[];
    values?: any[];
};
type PageResponseType = {
    next: number;
    current: number;
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
    key?: string;
    unit?: string;
    display_type: string;
    is_active: boolean;
    logo?: string;
    priority: number;
    slug?: string;
    name: string;
};
type AppConfigurationDetail = {
    attributes?: AttributeDetailsGroup[];
    is_default: boolean;
    is_active: boolean;
    logo?: string;
    app_id: string;
    priority: number;
    slug: string;
    template_slugs?: string[];
    name?: string;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    key: string;
    default_key: string;
    is_default: boolean;
    is_active: boolean;
    logo?: string;
    app_id: string;
    priority: number;
    name?: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    key?: string;
    filter_types?: string[];
    units?: any[];
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingResponse = {
    filter: MetaDataListingFilterResponse;
    sort: MetaDataListingSortResponse;
};
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    detail?: any;
    variant?: any;
    compare?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationBucketPoints = {
    display?: string;
    end?: number;
    start?: number;
};
type ConfigurationListingFilterValue = {
    map_values?: any[];
    bucket_points?: ConfigurationBucketPoints[];
    map?: any;
    condition?: string;
    value?: string;
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    key: string;
    display_name?: string;
    value_config?: ConfigurationListingFilterValue;
    is_active: boolean;
    logo?: string;
    priority: number;
    type: string;
    name?: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    key: string;
    is_active: boolean;
    logo?: string;
    priority: number;
    name?: string;
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
    min: number;
    max: number;
};
type ConfigurationProductConfig = {
    size?: ProductSize;
    key: string;
    title?: string;
    is_active: boolean;
    logo?: string;
    priority: number;
    subtitle?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    size: ProductSize;
    key: string;
    display_type: string;
    is_active: boolean;
    logo?: string;
    priority: number;
    name: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppCatalogConfiguration = {
    created_by?: any;
    id?: string;
    listing?: ConfigurationListing;
    created_on?: string;
    product?: ConfigurationProduct;
    modified_on?: string;
    config_type: string;
    modified_by?: any;
    app_id: string;
    config_id?: string;
    type?: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    created_by?: any;
    listing?: ConfigurationListing;
    created_on?: string;
    product?: ConfigurationProduct;
    modified_on?: string;
    config_type: string;
    modified_by?: any;
    app_id: string;
    config_id?: string;
    type?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    product?: GetCatalogConfigurationDetailsProduct;
    config_type: string;
    app_id: string;
    config_id?: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    name?: string;
    is_selected?: boolean;
    value?: string;
};
type ProductFiltersKey = {
    operators?: string[];
    kind?: string;
    display: string;
    logo?: string;
    name: string;
};
type ProductFiltersValue = {
    min?: number;
    max?: number;
    is_selected: boolean;
    count?: number;
    selected_min?: number;
    display: string;
    currency_code?: string;
    currency_symbol?: string;
    query_format?: string;
    value: any;
    display_format?: string;
    selected_max?: number;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type GetCollectionQueryOptionResponse = {
    operators: any;
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
};
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type BannerImage = {
    type?: string;
    url?: string;
    aspect_ratio?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type Media1 = {
    meta?: any;
    type?: string;
    url: string;
};
type GetCollectionDetailNest = {
    badge?: any;
    tag?: string[];
    is_active?: boolean;
    allow_sort?: boolean;
    cron?: any;
    query?: CollectionQuery[];
    meta?: any;
    app_id?: string;
    priority?: number;
    visible_facets_keys?: string[];
    name?: string;
    banners?: ImageUrls;
    uid?: string;
    action?: Action;
    logo?: Media1;
    allow_facets?: boolean;
    description?: string;
    _schedule?: any;
    slug?: string;
    type?: string;
};
type CollectionListingFilterType = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilterTag = {
    display?: string;
    name?: string;
    is_selected?: boolean;
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
type CollectionBadge = {
    text?: string;
    color?: string;
};
type UserInfo = {
    uid?: string;
    user_id?: string;
    username?: string;
    email?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionSchedule = {
    start?: string;
    next_schedule?: NextSchedule[];
    end?: string;
    cron?: string;
    duration?: number;
};
type CreateCollection = {
    badge?: CollectionBadge;
    created_by?: UserInfo;
    _custom_json?: any;
    is_active?: boolean;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    sort_on?: string;
    meta?: any;
    modified_by?: UserInfo;
    app_id: string;
    visible_facets_keys?: string[];
    priority?: number;
    name: string;
    banners: CollectionBanner;
    tags?: string[];
    logo: CollectionImage;
    _locale_language?: any;
    allow_facets?: boolean;
    is_visible?: boolean;
    description?: string;
    seo?: SeoDetail;
    published?: boolean;
    _schedule?: CollectionSchedule;
    slug: string;
    type: string;
};
type CollectionCreateResponse = {
    badge?: any;
    tag?: string[];
    is_active?: boolean;
    allow_sort?: boolean;
    cron?: any;
    query?: CollectionQuery[];
    sort_on?: string;
    meta?: any;
    app_id?: string;
    visible_facets_keys?: string[];
    priority?: number;
    name?: string;
    banners?: ImageUrls;
    logo?: BannerImage;
    allow_facets?: boolean;
    description?: string;
    _schedule?: any;
    slug?: string;
    type?: string;
};
type CollectionDetailResponse = {
    badge?: any;
    tag?: string[];
    is_active?: boolean;
    allow_sort?: boolean;
    cron?: any;
    query?: CollectionQuery[];
    meta?: any;
    app_id?: string;
    priority?: number;
    visible_facets_keys?: string[];
    name?: string;
    banners?: ImageUrls;
    uid?: string;
    logo?: Media1;
    allow_facets?: boolean;
    description?: string;
    _schedule?: any;
    slug?: string;
    type?: string;
};
type UpdateCollection = {
    badge?: CollectionBadge;
    _custom_json?: any;
    is_active?: boolean;
    allow_sort?: boolean;
    query?: CollectionQuery[];
    sort_on?: string;
    meta?: any;
    modified_by?: UserInfo;
    priority?: number;
    visible_facets_keys?: string[];
    name?: string;
    banners?: CollectionBanner;
    tags?: string[];
    logo?: CollectionImage;
    _locale_language?: any;
    allow_facets?: boolean;
    is_visible?: boolean;
    description?: string;
    seo?: SeoDetail;
    published?: boolean;
    _schedule?: CollectionSchedule;
    slug?: string;
    type?: string;
};
type ProductBrand = {
    uid?: number;
    action?: Action;
    logo?: Media1;
    name?: string;
};
type ProductDetailAttribute = {
    type?: string;
    key?: string;
    value?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type Price1 = {
    currency_code?: string;
    currency_symbol?: string;
    min?: number;
    max?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingDetail = {
    highlights?: string[];
    has_variant?: boolean;
    discount?: string;
    similars?: string[];
    rating?: number;
    image_nature?: string;
    teaser_tag?: any;
    product_online_date?: string;
    color?: string;
    short_description?: string;
    promo_meta?: any;
    name?: string;
    brand?: ProductBrand;
    attributes?: any;
    tryouts?: string[];
    item_type?: string;
    uid?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_code?: string;
    price?: ProductListingPrice;
    rating_count?: number;
    sellable?: boolean;
    medias?: Media1[];
    description?: string;
    slug: string;
    type?: string;
};
type GetCollectionItemsResponse = {
    page?: Page;
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    type?: string;
    query?: CollectionQuery[];
    item?: ItemQueryForUserCollection[];
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightBrand = {
    available_sizes?: number;
    total_sizes?: number;
    article_freshness?: number;
    available_articles?: number;
    total_articles?: number;
    name?: string;
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    sellable_count?: number;
    count?: number;
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
    brand_ids?: number[];
    opt_level: string;
    company_id?: number;
    store_ids?: number[];
    enabled?: boolean;
    platform?: string;
};
type CompanyOptIn = {
    brand_ids: number[];
    opt_level: string;
    created_by?: any;
    created_on: number;
    modified_on: number;
    company_id: number;
    modified_by?: any;
    store_ids: number[];
    enabled: boolean;
    platform: string;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    uid?: number;
    business_type?: string;
    company_type?: string;
    name?: string;
};
type CompanyBrandDetail = {
    brand_name?: string;
    brand_id?: number;
    total_article?: number;
    company_id?: number;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    company?: string;
    brand?: number;
    store?: number;
};
type StoreDetail = {
    timing?: any;
    store_code?: string;
    created_on?: string;
    modified_on?: string;
    display_name?: string;
    company_id?: number;
    uid?: number;
    manager?: any;
    additional_contacts?: any[];
    documents?: any[];
    store_type?: string;
    address?: any;
    name?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeMasterFilter = {
    depends_on?: string[];
    indexing: boolean;
    priority?: number;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    mandatory?: boolean;
    format?: string;
    range?: AttributeSchemaRange;
    multi?: boolean;
    type: string;
    allowed_values?: string[];
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
type GenderDetail = {
    departments?: string[];
    is_nested?: boolean;
    id?: string;
    description?: string;
    filters?: AttributeMasterFilter;
    schema?: AttributeMaster;
    meta?: AttributeMasterMeta;
    details?: AttributeMasterDetails;
    logo?: string;
    slug?: string;
    name?: string;
    enabled_for_end_consumer?: boolean;
};
type CategoriesResponse = {
    uid?: number;
    slug_key?: string;
    slug?: string;
    template_slug?: string;
    name?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: CategoriesResponse[];
};
type PTErrorResponse = {
    meta?: any;
    message?: string;
    errors?: any;
    status?: number;
    code?: string;
};
type UserSerializer = {
    user_id?: string;
    contact?: string;
    uid?: string;
    _id?: string;
    username?: string;
};
type GetDepartment = {
    synonyms?: string[];
    page_no?: number;
    created_by?: UserSerializer;
    item_type?: string;
    created_on?: string;
    modified_on?: string;
    uid?: number;
    is_active?: boolean;
    page_size?: number;
    logo?: string;
    modified_by?: UserSerializer;
    slug?: string;
    search?: string;
    priority_order?: number;
    name?: string;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    meta?: any;
    message?: string;
    errors?: any;
    status?: number;
    code?: string;
};
type DepartmentCreateUpdate = {
    tags?: string[];
    synonyms?: string[];
    platforms?: any;
    _custom_json?: any;
    uid?: number;
    is_active?: boolean;
    _cls?: string;
    logo: string;
    slug?: string;
    priority_order: number;
    name: string;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    user_id: string;
    contact?: string;
    super_user?: boolean;
    username: string;
};
type DepartmentModel = {
    verified_on?: string;
    synonyms?: string[];
    created_by?: UserDetail;
    created_on: string;
    modified_on: string;
    verified_by?: UserDetail;
    uid: number;
    modified_by?: UserDetail;
    is_active?: boolean;
    _id?: any;
    logo: string;
    _cls?: string;
    slug: string;
    _custom_json?: any;
    priority_order: number;
    name: string;
};
type ProductTemplate = {
    departments?: string[];
    attributes?: string[];
    tag?: string;
    created_by?: any;
    is_archived?: boolean;
    created_on?: string;
    modified_on?: string;
    description?: string;
    is_physical: boolean;
    is_active?: boolean;
    modified_by?: any;
    logo?: string;
    slug: string;
    categories?: string[];
    name?: string;
    is_expirable: boolean;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type TemplateDetails = {
    departments?: string[];
    attributes?: string[];
    tag?: string;
    is_archived?: boolean;
    id?: string;
    description?: string;
    is_physical: boolean;
    is_active?: boolean;
    logo?: string;
    slug: string;
    categories?: string[];
    name?: string;
    is_expirable: boolean;
};
type Properties = {
    highlights?: any;
    size_guide?: any;
    is_active?: any;
    country_of_origin?: any;
    teaser_tag?: any;
    short_description?: any;
    command?: any;
    name?: any;
    tags?: any;
    multi_size?: any;
    brand_uid?: any;
    product_group_tag?: any;
    no_of_boxes?: any;
    item_type?: any;
    category_slug?: any;
    item_code?: any;
    sizes?: any;
    trader_type?: any;
    variants?: any;
    trader?: any;
    hsn_code?: any;
    currency?: any;
    media?: any;
    is_dependent?: any;
    return_config?: any;
    custom_order?: any;
    description?: any;
    product_publish?: any;
    slug?: any;
};
type GlobalValidation = {
    required?: string[];
    definitions?: any;
    title?: string;
    description?: string;
    properties?: Properties;
    type?: string;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplatesValidationResponse = {
    template_details?: TemplateDetails;
    data?: TemplateValidationData;
};
type InventoryValidationResponse = {
    message?: string;
    data?: any;
};
type HSNData = {
    country_of_origin?: string[];
    hsn_code?: string[];
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type UserInfo1 = {
    uid?: string;
    user_id?: string;
    username?: string;
    email?: string;
};
type ProductTemplateExportResponse = {
    notification_emails?: string[];
    created_by?: UserInfo1;
    url?: string;
    modified_on?: string;
    filters?: any;
    type?: string;
    task_id: string;
    completed_on?: string;
    status?: string;
    seller_id: number;
};
type ProductDownloadsResponse = {
    items?: ProductTemplateExportResponse[];
};
type ProductTemplateExportFilterRequest = {
    to_date?: string;
    catalogue_types: string[];
    from_date?: string;
    templates: string[];
    brands?: string[];
};
type ProductTemplateDownloadsExport = {
    type?: string;
    notification_emails?: string[];
    filters?: ProductTemplateExportFilterRequest;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Hierarchy = {
    l2: number;
    l1: number;
    department: number;
};
type Media2 = {
    portrait: string;
    landscape: string;
    logo: string;
};
type Category = {
    departments: number[];
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    created_by?: any;
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    created_on?: string;
    modified_on?: string;
    id?: string;
    uid?: number;
    is_active: boolean;
    modified_by?: any;
    priority?: number;
    level: number;
    slug?: string;
    name: string;
    media?: Media2;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    departments: number[];
    marketplaces?: CategoryMapping;
    synonyms?: string[];
    hierarchy?: Hierarchy[];
    tryouts?: string[];
    is_active: boolean;
    priority?: number;
    level: number;
    slug?: string;
    name: string;
    media?: Media2;
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
type Image = {
    url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type Logo = {
    url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type Trader = {
    type?: string;
    address?: string[];
    name: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type ReturnConfigResponse = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductSchemaV2 = {
    highlights?: string[];
    departments?: number[];
    size_guide?: string;
    verified_on?: string;
    created_by?: any;
    _custom_json?: any;
    is_active?: boolean;
    all_company_ids?: number[];
    image_nature?: string;
    country_of_origin?: string;
    images?: Image[];
    is_expirable?: boolean;
    is_image_less_product?: boolean;
    primary_color?: string;
    teaser_tag?: any;
    short_description?: string;
    color?: string;
    moq?: any;
    stage?: string;
    is_physical?: boolean;
    variant_group?: any;
    modified_by?: any;
    all_identifiers?: string[];
    name?: string;
    brand?: Brand;
    category_uid?: number;
    tags?: string[];
    multi_size?: boolean;
    attributes?: any;
    tax_identifier?: any;
    all_sizes?: any[];
    brand_uid?: number;
    product_group_tag?: string[];
    item_type?: string;
    category_slug?: string;
    no_of_boxes?: number;
    is_set?: boolean;
    modified_on?: string;
    created_on?: string;
    uid?: number;
    item_code?: string;
    sizes?: any[];
    variant_media?: any;
    variants?: any;
    trader?: Trader[];
    l3_mapping?: string[];
    hsn_code?: string;
    currency?: string;
    media?: Media1[];
    is_dependent?: boolean;
    net_quantity?: NetQuantityResponse;
    id?: string;
    return_config?: ReturnConfigResponse;
    custom_order?: any;
    description?: string;
    company_id?: number;
    product_publish?: ProductPublish;
    verified_by?: VerifiedBy;
    pending?: string;
    slug?: string;
    category?: any;
    template_tag?: string;
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
    reporting_hsn?: string;
    hsn_code_id?: string;
    hsn_code?: string;
};
type NetQuantity = {
    unit?: string;
    value?: number;
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
    highlights?: string[];
    departments: number[];
    size_guide?: string;
    change_request_id?: any;
    bulk_job_id?: string;
    _custom_json?: any;
    is_active?: boolean;
    country_of_origin: string;
    is_image_less_product?: boolean;
    teaser_tag?: TeaserTag;
    short_description?: string;
    variant_group?: any;
    name: string;
    tags?: string[];
    multi_size?: boolean;
    attributes?: any;
    tax_identifier: TaxIdentifier;
    brand_uid: number;
    product_group_tag?: string[];
    no_of_boxes?: number;
    category_slug: string;
    item_type: string;
    is_set?: boolean;
    uid?: number;
    action?: string;
    item_code: string;
    variant_media?: any;
    requester?: string;
    sizes: any[];
    variants?: any;
    trader: Trader[];
    currency: string;
    media?: Media1[];
    is_dependent?: boolean;
    net_quantity?: NetQuantity;
    return_config: ReturnConfig;
    company_id: number;
    description?: string;
    custom_order?: CustomOrder;
    product_publish?: ProductPublish1;
    slug: string;
    template_tag: string;
};
type ProductVariants = {
    category_uid?: number;
    brand_uid?: number;
    uid?: number;
    item_code?: string;
    name?: string;
    media?: Media1[];
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    departments: string[];
    created_by?: any;
    filters: AttributeMasterFilter;
    schema: AttributeMaster;
    enabled_for_end_consumer?: boolean;
    modified_by?: any;
    name?: string;
    raw_key?: string;
    tags?: string[];
    is_nested?: boolean;
    suggestion?: string;
    created_on?: string;
    modified_on?: string;
    logo?: string;
    synonyms?: any;
    variant?: boolean;
    unit?: string;
    description?: string;
    details: AttributeMasterDetails;
    slug: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: ProductSchemaV2;
};
type ValidateIdentifier = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: string;
};
type AllSizes = {
    item_height: number;
    size: string;
    item_weight: number;
    item_dimensions_unit_of_measure: string;
    item_width: number;
    item_weight_unit_of_measure: string;
    identifiers?: ValidateIdentifier[];
    item_length: number;
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
    highlights?: string[];
    departments?: number[];
    size_guide?: string;
    verified_on?: string;
    created_by?: any;
    _custom_json?: any;
    is_active?: boolean;
    all_company_ids?: number[];
    image_nature?: string;
    country_of_origin?: string;
    images?: Image[];
    is_expirable?: boolean;
    is_image_less_product?: boolean;
    primary_color?: string;
    teaser_tag?: any;
    short_description?: string;
    color?: string;
    moq?: any;
    stage?: string;
    is_physical?: boolean;
    variant_group?: any;
    modified_by?: any;
    all_identifiers?: string[];
    name?: string;
    brand?: Brand;
    category_uid?: number;
    tags?: string[];
    multi_size?: boolean;
    attributes?: any;
    tax_identifier?: any;
    all_sizes?: any[];
    brand_uid?: number;
    product_group_tag?: string[];
    item_type?: string;
    category_slug?: string;
    no_of_boxes?: number;
    is_set?: boolean;
    modified_on?: string;
    created_on?: string;
    uid?: number;
    item_code?: string;
    sizes?: any[];
    variant_media?: any;
    variants?: any;
    trader?: Trader[];
    l3_mapping?: string[];
    hsn_code?: string;
    currency?: string;
    media?: Media1[];
    is_dependent?: boolean;
    net_quantity?: NetQuantityResponse;
    id?: string;
    return_config?: ReturnConfigResponse;
    custom_order?: any;
    description?: string;
    company_id?: number;
    product_publish?: ProductPublished;
    verified_by?: VerifiedBy;
    pending?: string;
    slug?: string;
    category?: any;
    template_tag?: string;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type UserDetail1 = {
    user_id?: string;
    username?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    stage?: string;
    failed?: number;
    created_by?: UserDetail1;
    created_on?: string;
    modified_on?: string;
    company_id?: number;
    failed_records?: string[];
    template?: ProductTemplate;
    is_active?: boolean;
    modified_by?: UserDetail1;
    file_path?: string;
    succeed?: number;
    cancelled?: number;
    total?: number;
    cancelled_records?: string[];
    template_tag?: string;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkJob = {
    created_by?: UserInfo1;
    failed?: number;
    stage?: string;
    tracking_url?: string;
    created_on: string;
    modified_on?: string;
    company_id: number;
    cancelled_records?: any[];
    failed_records?: any[];
    is_active?: boolean;
    modified_by?: UserInfo1;
    file_path?: string;
    custom_template_tag?: string;
    succeed?: number;
    total?: number;
    cancelled?: number;
    template_tag?: string;
};
type BulkResponse = {
    created_by?: UserInfo1;
    created_on: string;
    modified_on?: string;
    is_active?: boolean;
    modified_by?: UserInfo1;
    batch_id: string;
};
type BulkProductRequest = {
    batch_id: string;
    template_tag: string;
    company_id: number;
    data: any[];
};
type ProductTagsViewResponse = {
    items?: string[];
};
type UserCommon = {
    user_id?: string;
    username?: string;
    company_id?: number;
};
type Items = {
    created_by?: UserCommon;
    failed?: number;
    stage?: string;
    tracking_url?: string;
    created_on?: string;
    modified_on?: string;
    company_id?: number;
    failed_records?: string[];
    id?: string;
    is_active?: boolean;
    modified_by?: UserCommon;
    file_path?: string;
    retry?: number;
    succeed?: number;
    cancelled?: number;
    total?: number;
    cancelled_records?: string[];
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    user: any;
    url: string;
    company_id?: number;
};
type ProductSizeDeleteDataResponse = {
    size?: string;
    item_id?: number;
    company_id?: number;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    inventory_updated_on?: string;
    size?: string;
    sellable_quantity?: number;
    store?: any;
    price_effective?: number;
    seller_identifier?: string;
    quantity?: number;
    uid?: string;
    item_id?: number;
    price?: number;
    price_transfer?: number;
    identifiers?: any;
    currency?: string;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type GTIN = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: string;
};
type SetSize = {
    size: string;
    pieces: number;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    quantity?: number;
    size_distribution: SizeDistribution;
    name?: string;
};
type InvSize = {
    item_height?: number;
    expiration_date?: string;
    store_code: string;
    size: string;
    identifiers: GTIN[];
    is_set?: boolean;
    item_dimensions_unit_of_measure?: string;
    price_effective: number;
    item_width?: number;
    quantity: number;
    currency: string;
    item_weight_unit_of_measure?: string;
    price?: number;
    price_transfer?: number;
    item_weight?: number;
    set?: InventorySet;
    item_length?: number;
};
type ItemQuery = {
    uid?: number;
    item_code?: string;
    brand_uid?: number;
};
type InventoryRequest = {
    sizes: InvSize[];
    company_id: number;
    item: ItemQuery;
};
type WeightResponse = {
    is_default: boolean;
    shipping: number;
    unit: string;
};
type ManufacturerResponse = {
    is_default: boolean;
    address: string;
    name: string;
};
type CompanyMeta = {
    id: number;
};
type BrandMeta = {
    id: number;
    name: string;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    not_available?: QuantityBase;
    sellable?: QuantityBase;
    damaged?: QuantityBase;
    order_committed?: QuantityBase;
};
type PriceMeta = {
    effective: number;
    updated_at?: string;
    tp_notes?: any;
    marked: number;
    currency: string;
    transfer: number;
};
type Trader1 = {
    type: string;
    address: string[];
    name: string;
};
type DimensionResponse = {
    width: number;
    unit: string;
    length: number;
    is_default: boolean;
    height: number;
};
type ReturnConfig1 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type InventorySellerResponse = {
    identifier: any;
    created_by?: UserSerializer;
    size: string;
    weight: WeightResponse;
    _custom_json?: any;
    seller_identifier: string;
    is_active?: boolean;
    fynd_item_code: string;
    item_id: number;
    country_of_origin: string;
    set?: InventorySet;
    stage?: string;
    expiration_date?: string;
    fynd_article_code: string;
    manufacturer: ManufacturerResponse;
    meta?: any;
    modified_by?: UserSerializer;
    company: CompanyMeta;
    track_inventory?: boolean;
    brand: BrandMeta;
    quantities?: Quantities;
    tags?: string[];
    tax_identifier?: any;
    fynd_meta?: any;
    raw_meta?: any;
    is_set?: boolean;
    store: StoreMeta;
    uid: string;
    price: PriceMeta;
    trader?: Trader1[];
    dimension: DimensionResponse;
    return_config?: ReturnConfig1;
    added_on_store?: string;
    fragile: boolean;
    trace_id?: string;
    total_quantity: number;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    address?: string;
    name?: string;
};
type CompanyMeta1 = {
    id?: number;
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
    sellable?: Quantity;
    damaged?: Quantity;
    order_committed?: Quantity;
};
type ArticleStoreResponse = {
    uid?: number;
    store_type?: string;
    name?: string;
    store_code?: string;
};
type PriceArticle = {
    effective?: number;
    tp_notes?: any;
    marked?: number;
    currency?: string;
    transfer?: number;
};
type Trader2 = {
    type?: string;
    address?: string[];
    name?: string;
};
type DimensionResponse1 = {
    unit?: string;
    width?: number;
    height?: number;
    length?: number;
};
type ReturnConfig2 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type GetInventories = {
    identifier?: any;
    created_by?: UserSerializer;
    size?: string;
    weight?: WeightResponse1;
    seller_identifier?: string;
    item_id?: number;
    country_of_origin?: string;
    stage?: string;
    inventory_updated_on?: string;
    expiration_date?: string;
    manufacturer?: ManufacturerResponse1;
    modified_by?: UserSerializer;
    company?: CompanyMeta1;
    date_meta?: DateMeta;
    track_inventory?: boolean;
    brand?: BrandMeta1;
    quantities?: QuantitiesArticle;
    tags?: string[];
    tax_identifier?: any;
    platforms?: any;
    store?: ArticleStoreResponse;
    is_set?: boolean;
    uid?: string;
    price?: PriceArticle;
    trader?: Trader2[];
    dimension?: DimensionResponse1;
    id?: string;
    return_config?: ReturnConfig2;
    trace_id?: string;
    total_quantity?: number;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    created_by?: any;
    failed?: number;
    stage?: string;
    id?: string;
    created_on?: string;
    cancelled_records?: string[];
    company_id?: number;
    failed_records?: string[];
    modified_on?: string;
    is_active?: boolean;
    modified_by?: any;
    file_path?: string;
    succeed?: number;
    total?: number;
    cancelled?: number;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    tags?: string[];
    store_code: string;
    expiration_date?: string;
    price_marked?: number;
    item_dimensions_unit_of_measure?: string;
    price_effective?: number;
    seller_identifier: string;
    quantity?: number;
    trace_id?: string;
    item_weight_unit_of_measure?: string;
    price?: number;
    total_quantity?: number;
    currency?: string;
};
type InventoryBulkRequest = {
    batch_id: string;
    user?: any;
    sizes: InventoryJobPayload[];
    company_id: number;
};
type InventoryExportQuantityFilter = {
    min?: number;
    max?: number;
    operators: string;
};
type InventoryExportAdvanceOption = {
    brand_ids?: number[];
    to_date?: string;
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    store_ids?: number[];
};
type InventoryExportJob = {
    notification_emails?: string[];
    completed_on?: string;
    url?: string;
    filters?: InventoryExportAdvanceOption;
    task_id: string;
    type: string;
    status?: string;
    seller_id: number;
};
type InventoryExportRequest = {
    type?: string;
    brand?: number[];
    store?: number[];
};
type InventoryExportResponse = {
    notification_emails?: string[];
    created_by?: string;
    created_on?: string;
    modified_on?: string;
    filters?: any;
    task_id: string;
    type?: string;
    status?: string;
    seller_id: number;
};
type InventoryJobFilters = {
    to_date?: string;
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    stores?: string[];
    brands?: string[];
};
type InventoryJobDetailResponse = {
    notification_emails?: string[];
    created_by?: UserDetail;
    id: string;
    created_on?: string;
    url: string;
    modified_on?: string;
    filters: InventoryJobFilters;
    type?: string;
    task_id: string;
    cancelled_by?: UserDetail;
    completed_on?: string;
    status?: string;
    seller_id: number;
    cancelled_on?: string;
};
type InventoryExportJobListResponse = {
    items: InventoryJobDetailResponse;
};
type InventoryExportFilter = {
    brand_ids?: number[];
    to_date?: string;
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    store_ids: number[];
};
type InventoryCreateRequest = {
    type?: string;
    data?: string[];
    notification_emails?: string[];
    filters: InventoryExportFilter;
};
type FilerList = {
    display?: string;
    value?: string;
};
type InventoryConfig = {
    data?: FilerList[];
    multivalues?: boolean;
};
type InventoryPayload = {
    tags?: string[];
    expiration_date?: string;
    price_marked?: number;
    store_id: number;
    price_effective?: number;
    seller_identifier: string;
    trace_id?: string;
    total_quantity?: number;
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
    message: string;
    items?: InventoryResponseItem[];
};
type HsnUpsert = {
    hsn_code: string;
    threshold2?: number;
    tax1: number;
    company_id: number;
    uid?: number;
    is_active?: boolean;
    hs2_code: string;
    tax_on_mrp: boolean;
    tax_on_esp?: boolean;
    tax2?: number;
    threshold1: number;
};
type HsnCodesObject = {
    hsn_code?: string;
    threshold2?: number;
    tax1?: number;
    id?: string;
    modified_on?: string;
    company_id?: number;
    hs2_code?: string;
    tax_on_mrp?: boolean;
    tax_on_esp?: boolean;
    tax2?: number;
    threshold1?: number;
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
type PageResponse = {
    current?: string;
    has_previous?: boolean;
    size?: number;
    item_total?: number;
    has_next?: boolean;
};
type TaxSlab = {
    effective_date: string;
    threshold: number;
    cess?: number;
    rate: number;
};
type HSNDataInsertV2 = {
    reporting_hsn: string;
    hsn_code_id?: string;
    created_by?: any;
    country_code: string;
    created_on?: string;
    modified_on?: string;
    description: string;
    modified_by?: any;
    type: string;
    hsn_code: string;
    taxes: TaxSlab[];
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    banners?: ImageUrls;
    departments?: string[];
    discount?: string;
    uid?: number;
    action?: Action;
    logo?: Media;
    slug?: string;
    name?: string;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    uid?: number;
    logo?: Media;
    slug?: string;
    priority_order?: number;
    name?: string;
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
    uid?: number;
    action?: Action;
    childs?: any[];
    slug?: string;
    name?: string;
};
type SecondLevelChild = {
    banners?: ImageUrls;
    _custom_json?: any;
    uid?: number;
    action?: Action;
    childs?: ThirdLevelChild[];
    slug?: string;
    name?: string;
};
type Child = {
    banners?: ImageUrls;
    _custom_json?: any;
    uid?: number;
    action?: Action;
    childs?: SecondLevelChild[];
    slug?: string;
    name?: string;
};
type CategoryItems = {
    banners?: ImageUrls;
    uid?: number;
    action?: Action;
    childs?: Child[];
    slug?: string;
    name?: string;
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
    sort_on?: ProductSortOn[];
    page: Page;
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    operators?: any;
};
type ProductDetail = {
    highlights?: string[];
    has_variant?: boolean;
    similars?: string[];
    rating?: number;
    image_nature?: string;
    teaser_tag?: any;
    product_online_date?: string;
    color?: string;
    short_description?: string;
    promo_meta?: any;
    name?: string;
    brand?: ProductBrand;
    attributes?: any;
    tryouts?: string[];
    item_type?: string;
    uid?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    item_code?: string;
    rating_count?: number;
    medias?: Media1[];
    description?: string;
    slug: string;
    type?: string;
};
type InventoryPage = {
    has_previous?: boolean;
    next_id?: string;
    item_total: number;
    has_next?: boolean;
    type: string;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type ArticleQuery = {
    size: string;
    item_id: number;
    ignored_stores?: number[];
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type AssignStoreArticle = {
    group_id?: string;
    query?: ArticleQuery;
    meta?: any;
    quantity?: number;
    article_assignment?: ArticleAssignment;
};
type AssignStore = {
    pincode: string;
    company_id?: number;
    articles: AssignStoreArticle[];
    app_id: string;
    channel_type?: string;
    store_ids?: number[];
    channel_identifier?: string;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    group_id?: string;
    size: string;
    price_marked?: number;
    store_id?: number;
    company_id?: number;
    price_effective?: number;
    meta?: any;
    uid?: string;
    quantity: number;
    _id?: string;
    index?: number;
    store_pincode?: number;
    strategy_wise_listing?: any[];
    item_id: number;
    status: boolean;
    article_assignment: ArticleAssignment1;
    s_city?: string;
};
type UserSerializer1 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type InvoiceCredSerializer = {
    password?: string;
    enabled?: boolean;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    weekday: string;
    open: boolean;
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetAddressSerializer = {
    state?: string;
    pincode?: number;
    address2?: string;
    country_code?: string;
    longitude?: number;
    country?: string;
    address_type?: string;
    city?: string;
    address1?: string;
    landmark?: string;
    latitude?: number;
};
type GetCompanySerializer = {
    verified_on?: string;
    business_type?: string;
    created_by?: UserSerializer2;
    stage?: string;
    company_type?: string;
    created_on?: string;
    modified_on?: string;
    verified_by?: UserSerializer2;
    uid?: number;
    modified_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    reject_reason?: string;
    name?: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type GetLocationSerializer = {
    verified_on?: string;
    notification_emails?: string[];
    created_by?: UserSerializer1;
    product_return_config?: ProductReturnConfigSerializer;
    _custom_json?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    store_type?: string;
    code: string;
    timing?: LocationDayWiseSerializer[];
    integration_type?: LocationIntegrationType;
    stage?: string;
    display_name: string;
    warnings?: any;
    modified_by?: UserSerializer1;
    company?: GetCompanySerializer;
    documents?: Document[];
    address: GetAddressSerializer;
    name: string;
    created_on?: string;
    modified_on?: string;
    uid?: number;
    manager?: LocationManagerSerializer;
    contact_numbers?: SellerPhoneNumber[];
    verified_by?: UserSerializer1;
    phone_number: string;
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
    uid: number;
    is_active?: boolean;
    logo?: string;
    app_id: string;
    name?: string;
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
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type Validity = {
    priority?: number;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    description?: string;
    title?: string;
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    subtitle?: string;
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
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    types?: string[];
    uses?: PaymentAllowValue;
    codes?: string[];
    networks?: string[];
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    uses?: UsesRestriction;
    user_type?: string;
    price_range?: PriceRange;
    payments?: any;
    post_order?: PostOrder;
    coupon_allowed?: boolean;
    bulk_bundle?: BulkBundleRestriction;
    user_groups?: number[];
    platforms?: string[];
    ordering_stores?: number[];
};
type Validation = {
    app_id?: string[];
    user_registered_after?: string;
    anonymous?: boolean;
};
type RuleDefinition = {
    calculate_on: string;
    scope?: string[];
    value_type: string;
    applicable_on: string;
    auto_apply?: boolean;
    currency_code?: string;
    type: string;
    is_exact?: boolean;
};
type CouponSchedule = {
    duration?: number;
    cron?: string;
    end?: string;
    start?: string;
    next_schedule?: any[];
};
type Rule = {
    value?: number;
    discount_qty?: number;
    max?: number;
    key?: number;
    min?: number;
};
type CouponAdd = {
    action?: CouponAction;
    ownership: Ownership;
    date_meta?: CouponDateMeta;
    state?: State;
    validity: Validity;
    author?: CouponAuthor;
    code: string;
    display_meta: DisplayMeta;
    tags?: string[];
    restrictions?: Restrictions;
    validation?: Validation;
    rule_definition: RuleDefinition;
    type_slug: string;
    identifiers: Identifier;
    _schedule?: CouponSchedule;
    rule: Rule[];
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
    action?: CouponAction;
    ownership: Ownership;
    date_meta?: CouponDateMeta;
    state?: State;
    validity: Validity;
    author?: CouponAuthor;
    code: string;
    display_meta: DisplayMeta;
    tags?: string[];
    restrictions?: Restrictions;
    validation?: Validation;
    rule_definition: RuleDefinition;
    type_slug: string;
    identifiers: Identifier;
    _schedule?: CouponSchedule;
    rule: Rule[];
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type DiscountOffer = {
    discount_amount?: number;
    discount_percentage?: number;
    partial_can_ret?: boolean;
    apportion_discount?: boolean;
    code?: string;
    discount_price?: number;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
};
type CompareObject = {
    greater_than?: number;
    greater_than_equals?: number;
    less_than?: number;
    less_than_equals?: number;
    equals?: number;
};
type ItemCriteria = {
    cart_total?: CompareObject;
    item_exclude_category?: number[];
    item_exclude_brand?: number[];
    item_sku?: string[];
    item_company?: number[];
    product_tags?: string[];
    item_exclude_id?: number[];
    all_items?: boolean;
    item_brand?: number[];
    available_zones?: string[];
    item_id?: number[];
    item_size?: string[];
    cart_unique_item_amount?: CompareObject;
    cart_unique_item_quantity?: CompareObject;
    item_exclude_sku?: string[];
    item_store?: number[];
    item_category?: number[];
    buy_rules?: string[];
    cart_quantity?: CompareObject;
    item_exclude_store?: number[];
    item_exclude_company?: number[];
};
type DiscountRule = {
    discount_type: string;
    offer: DiscountOffer;
    buy_condition: string;
    item_criteria: ItemCriteria;
};
type DisplayMeta1 = {
    offer_label?: string;
    description?: string;
    offer_text?: string;
    name?: string;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    type: string;
    uses?: PaymentAllowValue1;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions1 = {
    uses: UsesRestriction1;
    user_registered?: UserRegistered;
    payments?: PromotionPaymentModes[];
    post_order?: PostOrder1;
    anonymous_users?: boolean;
    user_id?: string[];
    order_quantity?: number;
    user_groups?: number[];
    platforms?: string[];
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionSchedule = {
    duration?: number;
    cron?: string;
    published: boolean;
    end?: string;
    start: string;
    next_schedule?: any[];
};
type PromotionListItem = {
    promo_group: string;
    author?: PromotionAuthor;
    code?: string;
    application_id: string;
    visiblility?: Visibility;
    _custom_json?: any;
    post_order_action?: PromotionAction;
    calculate_on?: string;
    apply_priority?: number;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    currency?: string;
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    mode: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    ownership: Ownership1;
    stackable?: boolean;
    _schedule?: PromotionSchedule;
    buy_rules: any;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    promo_group: string;
    author?: PromotionAuthor;
    code?: string;
    application_id: string;
    visiblility?: Visibility;
    _custom_json?: any;
    post_order_action?: PromotionAction;
    calculate_on?: string;
    apply_priority?: number;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    currency?: string;
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    mode: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    ownership: Ownership1;
    stackable?: boolean;
    _schedule?: PromotionSchedule;
    buy_rules: any;
};
type PromotionUpdate = {
    promo_group: string;
    author?: PromotionAuthor;
    code?: string;
    application_id: string;
    visiblility?: Visibility;
    _custom_json?: any;
    post_order_action?: PromotionAction;
    calculate_on?: string;
    apply_priority?: number;
    date_meta?: PromotionDateMeta;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    currency?: string;
    apply_exclusive?: string;
    apply_all_discount?: boolean;
    mode: string;
    promotion_type: string;
    restrictions?: Restrictions1;
    ownership: Ownership1;
    stackable?: boolean;
    _schedule?: PromotionSchedule;
    buy_rules: any;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    modified_on?: string;
    description?: string;
    title?: string;
    entity_type?: string;
    example?: string;
    entity_slug?: string;
    subtitle?: string;
    is_hidden?: boolean;
    type?: string;
    created_on?: string;
};
type CartItem = {
    size: string;
    quantity?: number;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    query?: ActionQuery;
    url?: string;
    type?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type ProductImage = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type CartProduct = {
    action?: ProductAction;
    net_quantity?: NetQuantity;
    brand?: BaseInfo;
    slug?: string;
    categories?: CategoryInfo[];
    images?: ProductImage[];
    item_code?: string;
    uid?: number;
    name?: string;
    type?: string;
};
type PromoMeta = {
    message?: string;
};
type ProductAvailability = {
    other_store_quantity?: number;
    sizes?: string[];
    out_of_stock?: boolean;
    deliverable?: boolean;
    is_valid?: boolean;
};
type ProductPrice = {
    selling?: number;
    effective?: number;
    currency_code?: string;
    marked?: number;
    add_on?: number;
    currency_symbol?: string;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
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
    parent_item_identifiers?: any;
    seller?: BaseInfo;
    price?: ArticlePriceInfo;
    size?: string;
    extra_meta?: any;
    quantity?: number;
    uid?: string;
    type?: string;
    product_group_tags?: string[];
    store?: BaseInfo;
    _custom_json?: any;
};
type DiscountRulesApp = {
    raw_offer?: any;
    offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
};
type FreeGiftItem = {
    item_id?: number;
    item_name?: string;
    item_slug?: string;
    item_price_details?: any;
    item_images_url?: string[];
    item_brand_name?: string;
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    parent_item_identifier?: string;
    quantity?: number;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type AppliedPromotion = {
    promotion_name?: string;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    promotion_group?: string;
    mrp_promotion?: boolean;
    offer_text?: string;
    discount_rules?: DiscountRulesApp[];
    promotion_type?: string;
    promo_id?: string;
    applied_free_articles?: AppliedFreeArticles[];
    ownership?: Ownership2;
    amount?: number;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    product?: CartProduct;
    bulk_offer?: any;
    message?: string;
    parent_item_identifiers?: any;
    promo_meta?: PromoMeta;
    availability?: ProductAvailability;
    price?: ProductPriceInfo;
    quantity?: number;
    price_per_unit?: ProductPriceInfo;
    is_set?: boolean;
    article?: ProductArticle;
    key?: string;
    promotions_applied?: AppliedPromotion[];
    discount?: string;
    coupon_message?: string;
    identifiers: CartProductIdentifer;
};
type DisplayBreakup = {
    value?: number;
    message?: string[];
    key?: string;
    currency_code?: string;
    display?: string;
    currency_symbol?: string;
};
type CouponBreakup = {
    description?: string;
    value?: number;
    message?: string;
    title?: string;
    max_discount_value?: number;
    coupon_value?: number;
    minimum_cart_value?: number;
    code?: string;
    uid?: string;
    type?: string;
    sub_title?: string;
    coupon_type?: string;
    is_applied?: boolean;
};
type LoyaltyPoints = {
    applicable?: number;
    description?: string;
    total?: number;
    is_applied?: boolean;
};
type RawBreakup = {
    convenience_fee?: number;
    total?: number;
    subtotal?: number;
    gst_charges?: number;
    vog?: number;
    cod_charge?: number;
    mrp_total?: number;
    discount?: number;
    you_saved?: number;
    delivery_charge?: number;
    fynd_cash?: number;
    coupon?: number;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
};
type OpenapiCartDetailsResponse = {
    items?: CartProductInfo[];
    is_valid?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
};
type OpenApiErrorResponse = {
    message?: string;
    errors?: any;
    success?: boolean;
};
type ShippingAddress = {
    area?: string;
    phone?: number;
    address?: string;
    address_type?: string;
    state?: string;
    area_code_slug?: string;
    area_code: string;
    city?: string;
    landmark?: string;
    meta?: any;
    country_phone_code?: string;
    country?: string;
    name?: string;
    country_code?: string;
    country_iso_code?: string;
    email?: string;
    pincode?: number;
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
    message?: string;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    breakup_values?: CartBreakup;
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
    loyalty_discount?: number;
    product_id: number;
    cashback_applied: number;
    size: string;
    payment_methods: MultiTenderPaymentMethod[];
    employee_discount?: number;
    extra_meta?: any;
    delivery_charges: number;
    quantity?: number;
    coupon_effective_discount: number;
    meta?: CartItemMeta;
    price_effective: number;
    discount: number;
    files?: OpenApiFiles[];
    cod_charges: number;
    amount_paid: number;
    price_marked: number;
};
type OpenApiPlatformCheckoutReq = {
    cashback_applied: number;
    payment_methods: MultiTenderPaymentMethod[];
    coupon_value: number;
    cart_items: OpenApiOrderItem[];
    delivery_charges: number;
    currency_code?: string;
    affiliate_order_id?: string;
    files?: OpenApiFiles[];
    gstin?: string;
    payment_mode?: string;
    cod_charges: number;
    shipping_address?: ShippingAddress;
    order_id?: string;
    cart_value: number;
    loyalty_discount?: number;
    comment?: string;
    employee_discount?: any;
    coupon_code: string;
    coupon?: string;
    billing_address: ShippingAddress;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    order_ref_id?: string;
    message?: string;
    success?: boolean;
};
type AbandonedCart = {
    promotion?: any;
    buy_now?: boolean;
    delivery_charges?: any;
    meta?: any;
    cod_charges?: any;
    user_id: string;
    app_id?: string;
    discount?: number;
    articles: any[];
    payment_methods?: any[];
    pick_up_customer_details?: any;
    payments?: any;
    last_modified: string;
    uid: number;
    gstin?: string;
    checkout_mode?: string;
    payment_mode?: string;
    bulk_coupon_discount?: number;
    order_id?: string;
    shipments?: any[];
    is_active?: boolean;
    cart_value?: number;
    comment?: string;
    fc_index_map?: number[];
    _id: string;
    cashback: any;
    expire_at: string;
    merge_qty?: boolean;
    created_on: string;
    coupon?: any;
    is_archive?: boolean;
    fynd_credits?: any;
    is_default: boolean;
};
type AbandonedCartResponse = {
    message?: string;
    success?: boolean;
    page?: Page;
    items?: AbandonedCart[];
    result?: any;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    pan_no?: string;
    comment?: string;
    pan_config?: any;
    message?: string;
    buy_now?: boolean;
    items?: CartProductInfo[];
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
    last_modified?: string;
    id?: string;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    currency?: CartCurrency;
    breakup_values?: CartBreakup;
    gstin?: string;
    checkout_mode?: string;
    payment_selection_lock?: PaymentSelectionLock;
    coupon_text?: string;
};
type AddProductCart = {
    item_id?: number;
    article_assignment?: any;
    item_size?: string;
    parent_item_identifiers?: any;
    article_id?: string;
    extra_meta?: any;
    quantity?: number;
    pos?: boolean;
    _custom_json?: any;
    product_group_tags?: string[];
    display?: string;
    seller_id?: number;
    store_id?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
    new_cart?: boolean;
};
type AddCartDetailResponse = {
    cart?: CartDetailResponse;
    message?: string;
    success?: boolean;
    partial?: boolean;
};
type UpdateProductCart = {
    item_index?: number;
    item_id?: number;
    article_id?: string;
    item_size?: string;
    parent_item_identifiers?: any;
    extra_meta?: any;
    quantity?: number;
    _custom_json?: any;
    identifiers: CartProductIdentifer;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    message?: string;
    success?: boolean;
};
type GetShareCartLinkRequest = {
    meta?: any;
    id?: string;
};
type GetShareCartLinkResponse = {
    token?: string;
    share_url?: string;
};
type SharedCartDetails = {
    meta?: any;
    token?: string;
    created_on?: string;
    source?: any;
    user?: any;
};
type SharedCart = {
    buy_now?: boolean;
    items?: CartProductInfo[];
    delivery_charge_info?: string;
    is_valid?: boolean;
    currency?: CartCurrency;
    delivery_promise?: ShipmentPromise;
    cart_id?: number;
    last_modified?: string;
    shared_cart_details?: SharedCartDetails;
    uid?: string;
    gstin?: string;
    checkout_mode?: string;
    payment_selection_lock?: PaymentSelectionLock;
    comment?: string;
    message?: string;
    restrict_checkout?: boolean;
    id?: string;
    breakup_values?: CartBreakup;
    coupon_text?: string;
};
type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
type CartList = {
    pick_up_customer_details?: any;
    cart_id?: string;
    user_id?: string;
    created_on?: string;
    item_counts?: number;
    cart_value?: number;
};
type MultiCartResponse = {
    data?: CartList[];
    success?: boolean;
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    pan_config?: any;
    buy_now?: boolean;
    items?: CartProductInfo[];
    delivery_charge_info?: string;
    is_valid?: boolean;
    currency?: CartCurrency;
    pan_no?: string;
    delivery_promise?: ShipmentPromise;
    last_modified?: string;
    gstin?: string;
    checkout_mode?: string;
    payment_selection_lock?: PaymentSelectionLock;
    user?: UserInfo;
    comment?: string;
    message?: string;
    restrict_checkout?: boolean;
    id?: string;
    breakup_values?: CartBreakup;
    coupon_text?: string;
};
type DeleteCartRequest = {
    cart_id_list?: string[];
};
type DeleteCartDetailResponse = {
    message?: string;
    success?: boolean;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type PageCoupon = {
    has_next?: boolean;
    total_item_count?: number;
    total?: number;
    current?: number;
    has_previous?: boolean;
};
type Coupon = {
    description?: string;
    expires_on?: string;
    title?: string;
    coupon_value?: number;
    message?: string;
    max_discount_value?: number;
    minimum_cart_value?: number;
    coupon_code?: string;
    is_applicable?: boolean;
    sub_title?: string;
    coupon_type?: string;
    is_applied?: boolean;
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
    address_type?: string;
    area_code_slug?: string;
    meta?: any;
    is_default_address?: boolean;
    email?: string;
    tags?: string[];
    phone?: string;
    state?: string;
    user_id?: string;
    name?: string;
    area_code?: string;
    cart_id?: string;
    landmark?: string;
    country?: string;
    checkout_mode?: string;
    country_code?: string;
    google_map_point?: any;
    is_active?: boolean;
    area?: string;
    address?: string;
    city?: string;
    created_by_user_id?: string;
    id?: string;
    geo_location?: GeoLocation;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type SaveAddressResponse = {
    is_default_address?: boolean;
    success?: boolean;
    id?: string;
};
type UpdateAddressResponse = {
    is_default_address?: boolean;
    success?: boolean;
    is_updated?: boolean;
    id?: string;
};
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
type PlatformSelectCartAddressRequest = {
    billing_address_id?: string;
    checkout_mode?: string;
    cart_id?: string;
    id?: string;
};
type ShipmentResponse = {
    box_type?: string;
    items?: CartProductInfo[];
    shipment_type?: string;
    fulfillment_type?: string;
    promise?: ShipmentPromise;
    dp_options?: any;
    shipments?: number;
    order_type?: string;
    dp_id?: string;
    fulfillment_id?: number;
};
type CartShipmentsResponse = {
    buy_now?: boolean;
    delivery_promise?: ShipmentPromise;
    cart_id?: number;
    last_modified?: string;
    uid?: string;
    gstin?: string;
    checkout_mode?: string;
    payment_selection_lock?: PaymentSelectionLock;
    shipments?: ShipmentResponse[];
    comment?: string;
    message?: string;
    restrict_checkout?: boolean;
    delivery_charge_info?: string;
    id?: string;
    is_valid?: boolean;
    currency?: CartCurrency;
    breakup_values?: CartBreakup;
    error?: boolean;
    coupon_text?: string;
};
type UpdateCartShipmentItem = {
    shipment_type: string;
    article_uid: string;
    quantity?: number;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    comment?: string;
    pick_up_customer_details?: any;
    checkout_mode?: string;
    gstin?: string;
    pan_no?: string;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type StaffCheckout = {
    first_name: string;
    employee_code?: string;
    _id: string;
    last_name: string;
    user: string;
};
type Files = {
    key: string;
    values: string[];
};
type PlatformCartCheckoutDetailRequest = {
    payment_params?: any;
    ordering_store?: number;
    meta?: any;
    order_type: string;
    staff?: StaffCheckout;
    device_id?: string;
    merchant_code?: string;
    callback_url?: string;
    billing_address_id?: string;
    user_id: string;
    aggregator?: string;
    pick_at_store_uid?: number;
    delivery_address?: any;
    payment_identifier?: string;
    employee_code?: string;
    extra_meta?: any;
    pos?: boolean;
    checkout_mode?: string;
    files?: Files[];
    payment_mode: string;
    address_id?: string;
    id: string;
    payment_auto_confirm?: boolean;
    billing_address?: any;
};
type CheckCart = {
    user_type?: string;
    buy_now?: boolean;
    items?: CartProductInfo[];
    delivery_charges?: number;
    cod_charges?: number;
    error_message?: string;
    delivery_charge_info?: string;
    is_valid?: boolean;
    currency?: CartCurrency;
    store_emps?: any[];
    cod_message?: string;
    cod_available?: boolean;
    success?: boolean;
    delivery_promise?: ShipmentPromise;
    cart_id?: number;
    last_modified?: string;
    store_code?: string;
    uid?: string;
    gstin?: string;
    checkout_mode?: string;
    payment_selection_lock?: PaymentSelectionLock;
    order_id?: string;
    comment?: string;
    message?: string;
    restrict_checkout?: boolean;
    id?: string;
    breakup_values?: CartBreakup;
    delivery_charge_order_value?: number;
    coupon_text?: string;
};
type CartCheckoutResponse = {
    data?: any;
    callback_url?: string;
    message?: string;
    success?: boolean;
    cart?: CheckCart;
    payment_confirm_url?: string;
    app_intercept_url?: string;
    order_id?: string;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    area?: string;
    phone?: string;
    address?: string;
    address_type?: string;
    state?: string;
    area_code_slug?: string;
    area_code?: string;
    city?: string;
    store_code?: string;
    id?: number;
    landmark?: string;
    country?: string;
    name?: string;
    uid?: number;
    email?: string;
    pincode?: number;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    merchant_code?: string;
    id?: string;
    payment_mode?: string;
    payment_identifier?: string;
    address_id?: string;
    aggregator_name?: string;
};
type CouponValidity = {
    title?: string;
    display_message_en?: string;
    valid?: boolean;
    code?: string;
    discount?: number;
};
type PaymentCouponValidate = {
    message?: string;
    coupon_validity?: CouponValidity;
    success: boolean;
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
