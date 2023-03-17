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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserEmails, UserPhoneNumbers, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutAggregator, PayoutCustomer, PayoutMoreAttributes, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, ShipmentItemFulFillingStore, ShipmentStatus, UserDataInfo, PaymentModeInfo, Prices, PlatformItem, GSTDetailsData, BagUnit, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, FulfillingStore, ShipmentPayments, ShipmentStatusData, OrderBrandName, OrderBagArticle, BagStateMapper, CurrentStatus, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, PlatformDeliveryAddress, BagGST, Identifier, FinancialBreakup, BagConfigs, OrderBags, OrderDetailsData, UserDetailsData, PDFLinks, ShipmentTimeStamp, DebugInfo, LockData, BuyerDetails, EInvoice, EinvoiceInfo, Formatted, ShipmentMeta, AffiliateMeta, AffiliateDetails, BagStatusHistory, Dimensions, Meta, OrderingStoreDetails, CompanyDetails, DPDetailsData, TrackingList, PlatformShipment, ShipmentInfoResponse, BillingStaffDetails, TransactionData, PlatformUserDetails, OrderMeta, TaxDetails, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Brand, Weight, ReturnConfig, Article, BagReturnableCancelableStatus, Dates, Attributes, Item, ArticleDetails, B2BPODetails, BagMeta, AffiliateBagDetails, BagGSTDetails, EInvoicePortalDetails, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, StoreMeta, StoreAddress, Store, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderPriority, OrderUser, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, UserData, OrderInfo, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, Meta1, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ShippingInfo, Tax, Charge, TaxInfo, BillingInfo, PaymentMethod, PaymentInfo, ProcessingDates, LineItem, Shipment, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, MetaFields, ApplicationItemMOQ, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, CollectionQuery, BannerImage, ImageUrls, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, SeoDetail, UserInfo, CollectionSchedule, CollectionImage, CollectionBanner, CollectionBadge, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, GenderDetail, ProductTemplateCategory, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, UserInfo1, ProductTemplateExportResponse, ProductDownloadsResponse, ProductTemplateExportFilterRequest, ProductTemplateDownloadsExport, ProductPartialExportRequest, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Trader, VerifiedBy, Image, ReturnConfigResponse, Logo, NetQuantityResponse, ProductPublish, ProductSchemaV2, ProductListingResponseV2, CustomOrder, NetQuantity, TaxIdentifier, TeaserTag, ProductPublish1, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkJob, BulkResponse, BulkProductRequest, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, Trader1, WeightResponse, CompanyMeta, ReturnConfig1, BrandMeta, PriceMeta, ManufacturerResponse, DimensionResponse, QuantityBase, Quantities, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, Trader2, WeightResponse1, CompanyMeta1, ReturnConfig2, BrandMeta1, PriceArticle, ArticleStoreResponse, ManufacturerResponse1, DimensionResponse1, Quantity, QuantitiesArticle, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportQuantityFilter, InventoryExportAdvanceOption, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, InventoryJobFilters, InventoryJobDetailResponse, InventoryExportJobListResponse, InventoryExportFilter, InventoryCreateRequest, InventoryPartialExportRequest, InventoryExportCreateFilters, InventoryExportCreateResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, PageResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, UserSerializer1, GetAddressSerializer, UserSerializer2, GetCompanySerializer, ProductReturnConfigSerializer, LocationIntegrationType, SellerPhoneNumber, LocationManagerSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, Website, BusinessDetails, CompanyTaxesSerializer, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validation, CouponSchedule, CouponDateMeta, Rule, State, Ownership, DisplayMetaDict, DisplayMeta, PostOrder, BulkBundleRestriction, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, PriceRange, Restrictions, CouponAuthor, CouponAction, RuleDefinition, Validity, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, Ownership1, PostOrder1, UsesRemaining1, UsesRestriction1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, PromotionSchedule, DisplayMeta1, PromotionDateMeta, PromotionAuthor, Visibility, PromotionAction, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, RawBreakup, CouponBreakup, DisplayBreakup, LoyaltyPoints, CartBreakup, ProductPrice, ProductPriceInfo, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, PromoMeta, ProductAvailability, DiscountRulesApp, Ownership2, FreeGiftItem, AppliedFreeArticles, AppliedPromotion, CartProductIdentifer, CategoryInfo, ProductImage, ActionQuery, ProductAction, CartProduct, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartDetailResponse, CartItemCountResponse, Coupon, PageCoupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, Files, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
}
import Common = require("./Common/CommonPlatformClient");
import Lead = require("./Lead/LeadPlatformClient");
import Billing = require("./Billing/BillingPlatformClient");
import Communication = require("./Communication/CommunicationPlatformClient");
import Payment = require("./Payment/PaymentPlatformClient");
import Order = require("./Order/OrderPlatformClient");
import Catalog = require("./Catalog/CatalogPlatformClient");
import CompanyProfile = require("./CompanyProfile/CompanyProfilePlatformClient");
import FileStorage = require("./FileStorage/FileStoragePlatformClient");
import Inventory = require("./Inventory/InventoryPlatformClient");
import Configuration = require("./Configuration/ConfigurationPlatformClient");
import Analytics = require("./Analytics/AnalyticsPlatformClient");
import Discount = require("./Discount/DiscountPlatformClient");
import Webhook = require("./Webhook/WebhookPlatformClient");
import AuditTrail = require("./AuditTrail/AuditTrailPlatformClient");
import PlatformApplicationClient = require("./PlatformApplicationClient");
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
    aggregators?: any[];
    display_fields: string[];
    created: boolean;
    success: boolean;
    excluded_fields: string[];
    app_id: string;
};
type ErrorCodeDescription = {
    success: boolean;
    code: string;
    description: string;
};
type PaymentGatewayConfig = {
    merchant_salt: string;
    key: string;
    config_type: string;
    is_active?: boolean;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    is_active?: boolean;
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
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
    package_name?: string;
    display_name?: string;
    code?: string;
    logos?: PaymentModeLogo;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    card_reference?: string;
    code?: string;
    card_issuer?: string;
    display_name?: string;
    cod_limit_per_order?: number;
    exp_year?: number;
    remaining_limit?: number;
    fynd_vpa?: string;
    intent_flow?: boolean;
    card_type?: string;
    intent_app_error_list?: string[];
    card_token?: string;
    intent_app?: IntentApp[];
    compliant_with_tokenisation_guidelines?: boolean;
    merchant_code?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    cod_limit?: number;
    card_fingerprint?: string;
    aggregator_name: string;
    name?: string;
    card_name?: string;
    display_priority?: number;
    card_brand_image?: string;
    retry_count?: number;
    timeout?: number;
    exp_month?: number;
    logo_url?: PaymentModeLogo;
    card_number?: string;
    expired?: boolean;
    nickname?: string;
    card_isin?: string;
    card_id?: string;
    card_brand?: string;
};
type RootPaymentMode = {
    aggregator_name?: string;
    add_card_enabled?: boolean;
    list?: PaymentModeList[];
    name: string;
    is_pay_by_card_pl?: boolean;
    display_name: string;
    save_card?: boolean;
    display_priority: number;
    anonymous_enable?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutAggregator = {
    aggregator_fund_id?: number;
    payout_details_id?: number;
    aggregator_id?: number;
};
type PayoutCustomer = {
    name?: string;
    id?: number;
    unique_external_id?: string;
    mobile?: string;
};
type PayoutMoreAttributes = {
    city?: string;
    bank_name?: string;
    account_holder?: string;
    branch_name?: string;
    state?: string;
    ifsc_code?: string;
    country?: string;
    account_no?: string;
    account_type?: string;
};
type Payout = {
    is_default: boolean;
    payouts_aggregators?: PayoutAggregator[];
    is_active: boolean;
    transfer_type: string;
    customers: PayoutCustomer;
    more_attributes: PayoutMoreAttributes;
    unique_transfer_no: string;
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    account_holder?: string;
    bank_name?: string;
    city?: string;
    pincode?: number;
    branch_name?: string;
    state?: string;
    ifsc_code: string;
    country?: string;
    account_no?: string;
    account_type: string;
};
type PayoutRequest = {
    aggregator: string;
    bank_details: PayoutBankDetails;
    is_active: boolean;
    transfer_type: string;
    users: any;
    unique_external_id: string;
};
type PayoutResponse = {
    aggregator: string;
    payment_status: string;
    bank_details: any;
    payouts: any;
    is_active: boolean;
    users: any;
    transfer_type: string;
    created: boolean;
    success: boolean;
    unique_transfer_no: string;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_active: boolean;
    is_default: boolean;
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
    data?: any;
    message: string;
};
type NotFoundResourceError = {
    success: boolean;
    code: string;
    description: string;
};
type BankDetailsForOTP = {
    account_holder: string;
    bank_name: string;
    branch_name: string;
    ifsc_code: string;
    account_no: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    branch_name: string;
    bank_name: string;
    success?: boolean;
};
type OrderBeneficiaryDetails = {
    display_name: string;
    id: number;
    email: string;
    account_holder: string;
    beneficiary_id: string;
    is_active: boolean;
    address: string;
    created_on: string;
    ifsc_code: string;
    transfer_mode: string;
    delights_user_name?: string;
    account_no: string;
    bank_name: string;
    branch_name?: string;
    title: string;
    modified_on: string;
    subtitle: string;
    comment?: string;
    mobile?: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    payment_gateway?: string;
    current_status?: string;
    extra_meta?: any;
    order_id?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    name?: string;
    mode: string;
    amount: number;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    success: boolean;
    order_id: string;
    message: string;
};
type PlatformPaymentOptions = {
    anonymous_cod?: boolean;
    payment_selection_lock?: any;
    methods: any;
    mode_of_payment: string;
    callback_url?: any;
    enabled: boolean;
    cod_amount_limit?: number;
    source: string;
    cod_charges?: number;
};
type PlatfromPaymentConfig = {
    success: boolean;
    data: PlatformPaymentOptions;
    message: string;
};
type UpdatePlatformPaymentConfig = {
    anonymous_cod?: boolean;
    payment_selection_lock?: any;
    methods: any;
    cod_amount_limit?: number;
    cod_charges?: number;
};
type CODdata = {
    limit: number;
    is_active: boolean;
    usages: number;
    remaining_limit: number;
    user_id: string;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
};
type SetCODForUserRequest = {
    is_active: boolean;
    mobileno: string;
    merchant_user_id: string;
};
type SetCODOptionResponse = {
    success: boolean;
    message: string;
};
type EdcModelData = {
    aggregator: string;
    aggregator_id: number;
    models: string[];
};
type EdcAggregatorAndModelListResponse = {
    success: boolean;
    data: EdcModelData[];
};
type StatisticsData = {
    inactive_device_count: number;
    active_device_count: number;
};
type EdcDeviceStatsResponse = {
    success: boolean;
    statistics: StatisticsData;
};
type EdcAddRequest = {
    device_tag?: string;
    edc_device_serial_no: string;
    store_id: number;
    edc_model: string;
    terminal_serial_no: string;
    aggregator_id: number;
};
type EdcDevice = {
    aggregator_name?: string;
    application_id: string;
    merchant_store_pos_code?: string;
    edc_device_serial_no: string;
    device_tag: string;
    is_active: boolean;
    terminal_unique_identifier: string;
    store_id: number;
    edc_model?: string;
    terminal_serial_no: string;
    aggregator_id: number;
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
    device_tag?: string;
    edc_device_serial_no?: string;
    is_active?: string;
    merchant_store_pos_code?: string;
    store_id?: number;
    edc_model?: string;
    aggregator_id?: number;
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
    razorpay_payment_id?: string;
    aggregator: string;
    method: string;
    device_id?: string;
    contact: string;
    currency: string;
    vpa?: string;
    customer_id: string;
    email: string;
    timeout?: number;
    order_id: string;
    amount: number;
    merchant_order_id: string;
};
type PaymentInitializationResponse = {
    razorpay_payment_id?: string;
    aggregator: string;
    upi_poll_url?: string;
    virtual_id?: string;
    method: string;
    device_id?: string;
    polling_url: string;
    bqr_image?: string;
    success: boolean;
    currency?: string;
    status?: string;
    vpa?: string;
    customer_id?: string;
    timeout?: number;
    aggregator_order_id?: string;
    amount?: number;
    merchant_order_id: string;
};
type PaymentStatusUpdateRequest = {
    aggregator: string;
    method: string;
    device_id?: string;
    contact: string;
    currency: string;
    status: string;
    vpa?: string;
    customer_id: string;
    email: string;
    order_id: string;
    amount: number;
    merchant_order_id: string;
};
type PaymentStatusUpdateResponse = {
    retry: boolean;
    aggregator_name: string;
    success?: boolean;
    redirect_url?: string;
    status: string;
};
type ResendOrCancelPaymentRequest = {
    device_id?: string;
    request_type: string;
    order_id: string;
};
type LinkStatus = {
    status: boolean;
    message: string;
};
type ResendOrCancelPaymentResponse = {
    success: boolean;
    data: LinkStatus;
};
type FilterInfoOption = {
    text: string;
    name?: string;
    value?: string;
};
type FiltersInfo = {
    text: string;
    type: string;
    options?: FilterInfoOption[];
    value: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type ShipmentStatus = {
    title: string;
    actual_status: string;
    ops_status: string;
    status: string;
    hex_code: string;
};
type UserDataInfo = {
    email?: string;
    avis_user_id?: string;
    name?: string;
    is_anonymous_user?: boolean;
    uid?: number;
    last_name?: string;
    gender?: string;
    mobile?: string;
    first_name?: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type Prices = {
    cashback?: number;
    promotion_effective_discount?: number;
    cashback_applied?: number;
    fynd_credits?: number;
    amount_paid_roundoff?: number;
    delivery_charge?: number;
    coupon_value?: number;
    tax_collected_at_source?: number;
    price_effective?: number;
    price_marked?: number;
    refund_amount?: number;
    cod_charges?: number;
    amount_paid?: number;
    refund_credit?: number;
    discount?: number;
    value_of_good?: number;
};
type PlatformItem = {
    id?: number;
    color?: string;
    name?: string;
    images?: string[];
    image?: string[];
    code?: string;
    l1_category?: string[];
    can_return?: boolean;
    l3_category_name?: string;
    department_id?: number;
    can_cancel?: boolean;
    l3_category?: number;
    size?: string;
};
type GSTDetailsData = {
    gst_fee: number;
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    gstin_code: string;
    value_of_good: number;
};
type BagUnit = {
    item_quantity: number;
    total_shipment_bags: number;
    shipment_id: string;
    ordering_channel: string;
    can_return?: boolean;
    bag_id: number;
    can_cancel?: boolean;
    status: any;
    prices?: Prices;
    item?: PlatformItem;
    gst?: GSTDetailsData;
};
type ShipmentItem = {
    id: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    fulfilling_centre: string;
    shipment_status?: ShipmentStatus;
    total_shipments_in_order: number;
    company?: any;
    user?: UserDataInfo;
    total_bags_count: number;
    payment_mode_info?: PaymentModeInfo;
    prices?: Prices;
    sla?: any;
    application?: any;
    bags?: BagUnit[];
    shipment_created_at: number;
    channel?: any;
    payment_methods?: any;
    created_at: string;
};
type ShipmentInternalPlatformViewResponse = {
    filters?: FiltersInfo[];
    page?: any;
    items?: ShipmentItem[];
    applied_filters?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type FulfillingStore = {
    id: number;
    phone: string;
    city: string;
    fulfillment_channel: string;
    state: string;
    code: string;
    country: string;
    address: string;
    store_name: string;
    pincode: string;
    contact_person: string;
    meta: any;
};
type ShipmentPayments = {
    mode?: string;
    logo?: string;
    source?: string;
};
type ShipmentStatusData = {
    id?: number;
    shipment_id?: string;
    bag_list?: string[];
    status?: string;
    created_at?: string;
};
type OrderBrandName = {
    id: number;
    company: string;
    modified_on?: string;
    created_on: string;
    logo: string;
    brand_name: string;
};
type OrderBagArticle = {
    identifiers?: any;
    return_config?: any;
    uid?: string;
};
type BagStateMapper = {
    name: string;
    is_active?: boolean;
    display_name: string;
    app_facing?: boolean;
    journey_type: string;
    bs_id: number;
    app_display_name?: string;
    app_state_name?: string;
    state_type: string;
    notify_customer?: boolean;
};
type CurrentStatus = {
    updated_at?: number;
    store_id?: number;
    bag_state_mapper?: BagStateMapper;
    shipment_id?: string;
    current_status_id: number;
    created_at?: string;
    bag_id?: number;
    state_id?: number;
    status?: string;
    delivery_awb_number?: string;
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    state_type?: string;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type AppliedPromos = {
    promo_id?: string;
    amount?: number;
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
    article_quantity?: number;
    buy_rules?: BuyRules[];
    promotion_type?: string;
    promotion_name?: string;
};
type PlatformDeliveryAddress = {
    updated_at?: string;
    email?: string;
    phone?: string;
    city?: string;
    landmark?: string;
    latitude?: number;
    state?: string;
    country?: string;
    address2?: string;
    created_at?: string;
    longitude?: number;
    address_category?: string;
    version?: string;
    pincode?: string;
    area?: string;
    address_type?: string;
    contact_person?: string;
    address1?: string;
};
type BagGST = {
    gst_fee?: number;
    gst_tag?: string;
    brand_calculated_amount?: number;
    hsn_code?: string;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    gst_tax_percentage?: number;
    value_of_good?: number;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    coupon_effective_discount: number;
    promotion_effective_discount: number;
    total_units: number;
    brand_calculated_amount: number;
    refund_credit: number;
    cashback: number;
    transfer_price: number;
    delivery_charge: number;
    item_name: string;
    price_marked: number;
    discount: number;
    gst_fee: number;
    gst_tag: string;
    fynd_credits: number;
    cashback_applied: number;
    hsn_code: string;
    coupon_value: number;
    size: string;
    amount_paid: number;
    identifiers: Identifier;
    added_to_fynd_cash: boolean;
    amount_paid_roundoff?: number;
    tax_collected_at_source?: number;
    price_effective: number;
    cod_charges: number;
    gst_tax_percentage: number;
    value_of_good: number;
};
type BagConfigs = {
    allow_force_return: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
};
type OrderBags = {
    brand?: OrderBrandName;
    article?: OrderBagArticle;
    bag_id: number;
    parent_promo_bags?: any;
    current_status?: CurrentStatus;
    entity_type?: string;
    applied_promos?: AppliedPromos[];
    delivery_address?: PlatformDeliveryAddress;
    can_cancel?: boolean;
    prices?: Prices;
    identifier?: string;
    item?: PlatformItem;
    seller_identifier?: string;
    line_number?: number;
    gst_details?: BagGST;
    financial_breakup?: FinancialBreakup;
    can_return?: boolean;
    display_name?: string;
    quantity?: number;
    bag_configs?: BagConfigs;
};
type OrderDetailsData = {
    fynd_order_id: string;
    order_value?: string;
    order_date?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    cod_charges?: string;
    tax_details?: any;
    source?: string;
    affiliate_id?: string;
};
type UserDetailsData = {
    email?: string;
    phone: string;
    name: string;
    city: string;
    state: string;
    country: string;
    address: string;
    pincode: string;
};
type PDFLinks = {
    credit_note_url?: string;
    invoice_a6?: string;
    label_a6?: string;
    invoice_a4?: string;
    invoice_pos?: string;
    label?: string;
    po_invoice?: string;
    b2b?: string;
    label_type: string;
    invoice?: string;
    label_a4?: string;
    invoice_type: string;
    label_pos?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type LockData = {
    locked?: boolean;
    lock_message?: string;
    mto?: boolean;
};
type BuyerDetails = {
    name: string;
    city: string;
    state: string;
    address: string;
    gstin: string;
    pincode: number;
    ajio_site_id?: string;
};
type EInvoice = {
    signed_invoice?: string;
    irn?: string;
    error_message?: string;
    signed_qr_code?: string;
    acknowledge_no?: number;
    acknowledge_date?: string;
    error_code?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentMeta = {
    marketplace_store_id?: string;
    dp_name?: string;
    forward_affiliate_shipment_id?: string;
    dp_sort_key?: string;
    ewaybill_info?: any;
    return_affiliate_shipment_id?: string;
    return_awb_number?: string;
    box_type?: string;
    po_number?: string;
    return_affiliate_order_id?: string;
    dp_id?: string;
    timestamp?: ShipmentTimeStamp;
    b2c_buyer_details?: any;
    debug_info?: DebugInfo;
    store_invoice_updated_date?: string;
    auto_trigger_dp_assignment_acf: boolean;
    bag_weight?: any;
    external?: any;
    shipment_volumetric_weight?: number;
    packaging_name?: string;
    weight: number;
    same_store_available: boolean;
    shipment_weight?: number;
    fulfilment_priority_text?: string;
    forward_affiliate_order_id?: string;
    dp_options?: any;
    lock_data?: LockData;
    awb_number?: string;
    b2b_buyer_details?: BuyerDetails;
    return_store_node?: number;
    due_date?: string;
    return_details?: any;
    order_type?: string;
    einvoice_info?: EinvoiceInfo;
    assign_dp_from_sb?: boolean;
    formatted?: Formatted;
};
type AffiliateMeta = {
    order_item_id?: string;
    channel_order_id?: string;
    size_level_total_qty?: number;
    due_date?: string;
    coupon_code?: string;
    loyalty_discount?: number;
    quantity?: number;
    is_priority?: boolean;
    employee_discount?: number;
    box_type?: string;
    channel_shipment_id?: string;
};
type AffiliateDetails = {
    affiliate_order_id: string;
    pdf_links?: PDFLinks;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    shipment_meta: ShipmentMeta;
    ad_id?: string;
    affiliate_shipment_id: string;
    affiliate_bag_id: string;
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
};
type BagStatusHistory = {
    updated_at?: string;
    store_id?: number;
    bag_state_mapper?: BagStateMapper;
    shipment_id?: string;
    forward?: boolean;
    created_at?: string;
    bag_id?: number;
    state_id?: number;
    display_name?: string;
    status: string;
    delivery_awb_number?: string;
    bsh_id?: number;
    app_display_name?: string;
    reasons?: any[];
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    state_type?: string;
};
type Dimensions = {
    is_default?: boolean;
    length?: number;
    unit?: string;
    height?: number;
    width?: number;
};
type Meta = {
    dimension?: Dimensions;
};
type OrderingStoreDetails = {
    phone: string;
    ordering_store_id: number;
    city: string;
    state: string;
    code: string;
    country: string;
    address: string;
    store_name: string;
    pincode: string;
    contact_person: string;
    meta: any;
};
type CompanyDetails = {
    company_id?: number;
    address?: any;
    company_cin?: string;
    company_name?: string;
};
type DPDetailsData = {
    id?: number;
    name?: string;
    gst_tag?: string;
    country?: string;
    awb_no?: string;
    pincode?: string;
    track_url?: string;
    eway_bill_id?: string;
};
type TrackingList = {
    time?: string;
    text: string;
    status: string;
    is_current?: boolean;
    is_passed?: boolean;
};
type PlatformShipment = {
    shipment_quantity?: number;
    enable_dp_tracking?: boolean;
    fulfilling_store?: FulfillingStore;
    priority_text?: string;
    shipment_status?: string;
    packaging_type?: string;
    fulfilment_priority?: number;
    payments?: ShipmentPayments;
    status?: ShipmentStatusData;
    operational_status?: string;
    platform_logo?: string;
    bags?: OrderBags[];
    order?: OrderDetailsData;
    user?: UserDataInfo;
    delivery_details?: UserDetailsData;
    shipment_images?: string[];
    affiliate_details?: AffiliateDetails;
    journey_type?: string;
    prices?: Prices;
    delivery_slot?: any;
    custom_meta?: any[];
    invoice_id?: string;
    payment_mode?: string;
    total_bags?: number;
    billing_details?: UserDetailsData;
    bag_status_history?: BagStatusHistory[];
    meta?: Meta;
    gst_details?: GSTDetailsData;
    ordering_store?: OrderingStoreDetails;
    shipment_id: string;
    company_details?: CompanyDetails;
    picked_date?: string;
    dp_details?: DPDetailsData;
    user_agent?: string;
    tracking_list?: TrackingList[];
    total_items?: number;
    invoice?: EinvoiceInfo;
    vertical?: string;
    coupon?: any;
};
type ShipmentInfoResponse = {
    message?: string;
    success: boolean;
    shipments?: PlatformShipment[];
};
type BillingStaffDetails = {
    first_name?: string;
    user?: string;
    staff_id?: number;
    last_name?: string;
};
type TransactionData = {
    payment_id?: string;
    entity?: string;
    terminal_id?: string;
    status?: string;
    amount_paid?: string;
    currency?: string;
    unique_reference_number?: string;
    transaction_id?: string;
};
type PlatformUserDetails = {
    platform_user_first_name?: string;
    platform_user_last_name?: string;
    platform_user_id?: string;
};
type OrderMeta = {
    company_logo?: string;
    extra_meta?: any;
    employee_id?: number;
    payment_type?: string;
    cart_id?: number;
    order_tags?: any[];
    customer_note?: string;
    currency_symbol?: string;
    staff?: any;
    order_platform?: string;
    order_child_entities?: string[];
    mongo_cart_id?: number;
    files?: any[];
    billing_staff_details?: BillingStaffDetails;
    ordering_store?: number;
    transaction_data?: TransactionData;
    comment?: string;
    order_type?: string;
    platform_user_details?: PlatformUserDetails;
};
type TaxDetails = {
    gstin?: string;
    pan_no?: string;
};
type OrderDict = {
    fynd_order_id: string;
    order_date: string;
    meta?: OrderMeta;
    prices?: Prices;
    tax_details?: TaxDetails;
    payment_methods?: any;
};
type ShipmentDetailsResponse = {
    success: boolean;
    order?: OrderDict;
    shipments?: PlatformShipment[];
};
type SubLane = {
    text?: string;
    value?: string;
    actions?: any[];
    index?: number;
    total_items?: number;
};
type SuperLane = {
    text: string;
    options?: SubLane[];
    total_items?: number;
    value: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformBreakupValues = {
    display?: string;
    name?: string;
    value?: string;
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformOrderItems = {
    order_value?: number;
    user_info?: UserDataInfo;
    shipments?: PlatformShipment[];
    payment_mode?: string;
    breakup_values?: PlatformBreakupValues[];
    total_order_value?: number;
    order_created_time?: string;
    channel?: PlatformChannel;
    meta?: any;
    order_id?: string;
};
type OrderListingResponse = {
    items?: PlatformOrderItems[];
    lane?: string;
    total_count?: number;
    message?: string;
    success?: boolean;
    page?: Page;
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    text: string;
    options?: Options[];
    key: string;
    value: number;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    updated_at?: string;
    awb?: string;
    account_name?: string;
    shipment_type?: string;
    last_location_recieved_at?: string;
    status?: string;
    reason?: string;
    raw_status?: string;
    meta?: any;
    updated_time?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type AdvanceFilterInfo = {
    processed?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    returned?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    filters?: FiltersInfo[];
};
type FiltersResponse = {
    advance_filter?: AdvanceFilterInfo;
    global_filter?: FiltersInfo[];
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    report_name?: string;
    display_name?: string;
    report_created_at?: string;
    status?: string;
    s3_key?: string;
    report_id?: string;
    report_requested_at?: string;
    report_type?: string;
    request_details?: any;
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
    message?: string;
    type?: string;
    value?: string;
};
type JioCodeUpsertResponse = {
    trace_id?: string;
    error?: NestedErrorSchemaDataSet[];
    data?: any[];
    identifier?: string;
    success?: boolean;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    store_id?: string;
    batch_id: string;
    do_invoice_label_generated: boolean;
    label?: any;
    company_id?: string;
    store_name?: string;
    data?: any;
    invoice?: any;
    store_code?: string;
    invoice_status?: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type FileResponse = {
    content_type?: string;
    cdn?: URL;
    file_path?: string;
    file_name?: string;
    tags?: string[];
    upload?: FileUploadResponse;
    namespace?: string;
    size?: number;
    method?: string;
    operation?: string;
};
type bulkListingData = {
    failed?: number;
    status?: string;
    successful_shipments?: any[];
    id?: string;
    failed_shipments?: any[];
    processing_shipments?: string[];
    total?: number;
    successful?: number;
    uploaded_on?: string;
    store_code?: string;
    user_name?: string;
    user_id?: string;
    batch_id?: string;
    store_name?: string;
    processing?: number;
    store_id?: number;
    file_name?: string;
    company_id?: number;
    excel_url?: string;
};
type BulkListingPage = {
    total?: number;
    has_previous?: boolean;
    type?: string;
    size?: number;
    current?: number;
    has_next?: boolean;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    success?: boolean;
    page?: BulkListingPage;
    error?: string;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    id?: number;
    display_name?: string;
    question_set?: QuestionSet[];
    qc_type?: string[];
};
type PlatformShipmentReasonsResponse = {
    success?: boolean;
    reasons?: Reason[];
};
type BulkActionPayload = {
    url: string;
};
type BulkActionResponse = {
    message?: string;
    status?: boolean;
};
type BulkActionDetailsDataField = {
    batch_id?: string;
    failed_shipments_count?: number;
    company_id?: string;
    processing_shipments_count?: number;
    successful_shipments_count?: number;
    total_shipments_count?: number;
    successful_shipment_ids?: string[];
};
type BulkActionDetailsResponse = {
    failed_records?: string[];
    error?: string[];
    uploaded_on?: string;
    data?: BulkActionDetailsDataField[];
    message?: string;
    status?: boolean;
    uploaded_by?: string;
    success?: string;
    user_id?: string;
};
type Brand = {
    company: string;
    brand_id: number;
    script_last_ran?: string;
    is_virtual_invoice?: boolean;
    modified_on?: number;
    start_date?: string;
    credit_note_expiry_days?: number;
    created_on?: number;
    credit_note_allowed?: boolean;
    logo?: string;
    invoice_prefix?: string;
    brand_name: string;
    pickup_location?: string;
};
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
type ReturnConfig = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Article = {
    child_details?: any;
    seller_identifier: string;
    raw_meta?: any;
    weight?: Weight;
    return_config?: ReturnConfig;
    code?: string;
    is_set?: boolean;
    uid: string;
    dimensions?: Dimensions;
    _id: string;
    size: string;
    a_set?: any;
    identifiers: Identifier;
    esp_modified?: any;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type Attributes = {
    name?: string;
    marketer_name?: string;
    primary_color_hex?: string;
    gender?: string[];
    essential?: string;
    marketer_address?: string;
    primary_material?: string;
    brand_name?: string;
    primary_color?: string;
};
type Item = {
    color?: string;
    brand: string;
    image: string[];
    l3_category_name?: string;
    gender?: string;
    l2_category?: string[];
    l1_category?: string[];
    can_cancel?: boolean;
    last_updated_at?: string;
    brand_id: number;
    code?: string;
    attributes: Attributes;
    department_id?: number;
    webstore_product_url?: string;
    l3_category?: number;
    branch_url?: string;
    size: string;
    meta?: any;
    l2_category_id?: number;
    name: string;
    can_return?: boolean;
    item_id: number;
    l1_category_id?: number;
    slug_key: string;
};
type ArticleDetails = {
    status?: any;
};
type B2BPODetails = {
    po_line_amount?: number;
    total_gst_percentage?: number;
    partial_can_ret?: boolean;
    docker_number?: string;
    po_tax_amount?: number;
    item_base_price?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    loyalty_discount?: number;
    affiliate_bag_id: string;
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
};
type BagGSTDetails = {
    igst_tax_percentage: number;
    gst_fee: number;
    gst_tag: string;
    cgst_tax_percentage: number;
    brand_calculated_amount: number;
    cgst_gst_fee: string;
    hsn_code: string;
    tax_collected_at_source: number;
    hsn_code_id: string;
    igst_gst_fee: string;
    is_default_hsn_code?: boolean;
    sgst_gst_fee: string;
    gstin_code?: string;
    gst_tax_percentage: number;
    value_of_good: number;
    sgst_tax_percentage: number;
};
type EInvoicePortalDetails = {
    username?: string;
    user?: string;
    password?: string;
};
type Document = {
    ds_type: string;
    value: string;
    url?: string;
    legal_name: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    username?: string;
    user?: string;
    password?: string;
    enabled: boolean;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type StoreMeta = {
    product_return_config?: any;
    notification_emails?: string[];
    ewaybill_portal_details?: any;
    additional_contact_details?: any;
    display_name: string;
    timing?: any[];
    einvoice_portal_details?: EInvoicePortalDetails;
    stage: string;
    documents?: StoreDocuments;
    gst_credentials: StoreGstCredentials;
    gst_number?: string;
};
type StoreAddress = {
    country_code: string;
    address_type: string;
    created_at: string;
    state: string;
    updated_at: string;
    email?: string;
    phone: string;
    city: string;
    latitude: number;
    version?: string;
    contact_person: string;
    landmark?: string;
    address2?: string;
    country: string;
    longitude: number;
    pincode: number;
    area?: string;
    address_category: string;
    address1: string;
};
type Store = {
    fulfillment_channel: string;
    is_enabled_for_recon?: boolean;
    store_active_from?: string;
    vat_no?: string;
    parent_store_id?: number;
    created_at: string;
    login_username: string;
    is_active?: boolean;
    state: string;
    packaging_material_count?: number;
    store_email: string;
    updated_at?: string;
    phone: number;
    brand_id?: any;
    city: string;
    order_integration_id?: string;
    latitude: number;
    s_id: string;
    code?: string;
    alohomora_user_id?: number;
    brand_store_tags?: string[];
    contact_person: string;
    meta: StoreMeta;
    store_address_json?: StoreAddress;
    name: string;
    mall_area?: string;
    location_type: string;
    mall_name?: string;
    address2?: string;
    country: string;
    is_archived?: boolean;
    longitude: number;
    company_id: number;
    pincode: string;
    address1: string;
};
type BagDetailsPlatformResponse = {
    brand: Brand;
    article: Article;
    parent_promo_bags?: any;
    status: BagReturnableCancelableStatus;
    current_operational_status: BagStatusHistory;
    operational_status?: string;
    current_status: BagStatusHistory;
    entity_type?: string;
    restore_coupon?: boolean;
    b_id: number;
    applied_promos?: any[];
    bag_status: BagStatusHistory[];
    dates?: Dates;
    journey_type: string;
    prices: Prices;
    bag_update_time?: number;
    identifier?: string;
    item: Item;
    reasons?: any[];
    b_type?: string;
    seller_identifier?: string;
    order_integration_id?: string;
    article_details?: ArticleDetails;
    no_of_bags_order?: number;
    bag_status_history?: BagStatusHistory;
    meta?: BagMeta;
    affiliate_bag_details: AffiliateBagDetails;
    line_number?: number;
    gst_details: BagGSTDetails;
    financial_breakup: FinancialBreakup[];
    ordering_store?: Store;
    shipment_id?: string;
    qc_required?: any;
    display_name?: string;
    original_bag_list?: number[];
    quantity?: number;
    restore_promos?: any;
    tags?: string[];
    affiliate_details?: AffiliateDetails;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    item_total: number;
    page_type: string;
    size: number;
    current: number;
    has_next: boolean;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
};
type GeneratePosOrderReceiptResponse = {
    success?: boolean;
    invoice_receipt?: string;
    payment_receipt?: string;
    order_id?: string;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    status?: number;
    message?: string;
    shipment_id?: string;
    error?: string;
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
    set_id?: string;
    affiliate_id?: string;
    fynd_order_id?: string;
    reason_ids?: number[];
    item_id?: string;
    mongo_article_id?: string;
    affiliate_order_id?: string;
    store_id: number;
    bag_id?: number;
    affiliate_bag_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_bag_id?: string;
    affiliate_id?: string;
    affiliate_order_id?: string;
    id?: string;
    reason_text: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    entity_type: string;
    action_type: string;
    action: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    affiliate_bag_id?: string;
    is_locked?: boolean;
    affiliate_order_id?: string;
    bag_id?: number;
};
type CheckResponse = {
    affiliate_id?: string;
    lock_status?: boolean;
    is_shipment_locked?: boolean;
    original_filter?: OriginalFilter;
    shipment_id?: string;
    is_bag_locked?: boolean;
    status?: string;
    bags?: Bags[];
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    message?: string;
    success?: boolean;
};
type AnnouncementResponse = {
    from_datetime?: string;
    to_datetime?: string;
    created_at?: string;
    description?: string;
    platform_name?: string;
    title?: string;
    logo_url?: string;
    id: number;
    platform_id?: string;
    company_id?: number;
};
type AnnouncementsResponse = {
    announcements?: AnnouncementResponse[];
};
type BaseResponse = {
    message: string;
    success: boolean;
};
type Click2CallResponse = {
    status: boolean;
    call_id: string;
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
    line_number?: number;
    quantity?: number;
    identifier?: string;
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
    line_number?: number;
    identifier?: string;
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
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
type ShipmentsRequest = {
    reasons?: ReasonsData;
    data_updates?: DataUpdates;
    identifier: string;
    products?: Products[];
};
type StatuesRequest = {
    status?: string;
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    lock_after_transition?: boolean;
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
    force_transition?: boolean;
};
type ShipmentsResponse = {
    stack_trace?: string;
    exception?: string;
    message?: string;
    code?: string;
    meta?: any;
    identifier?: string;
    status?: number;
    final_state?: any;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
};
type OrderUser = {
    state: string;
    phone: number;
    pincode: string;
    city: string;
    address2?: string;
    last_name: string;
    address1?: string;
    email: string;
    country: string;
    mobile: number;
    first_name: string;
};
type ArticleDetails1 = {
    _id: string;
    brand_id: number;
    category: any;
    dimension: any;
    weight: any;
    quantity: number;
    attributes: any;
};
type ShipmentDetails = {
    dp_id?: number;
    box_type?: string;
    fulfillment_id: number;
    meta?: any;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    shipments: number;
};
type ShipmentConfig = {
    source: string;
    location_details?: LocationDetails;
    to_pincode: string;
    journey: string;
    payment_mode: string;
    identifier: string;
    shipment: ShipmentDetails[];
    action: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    discount: number;
    modified_on: string;
    item_id: number;
    price_marked: number;
    identifier: any;
    seller_identifier: string;
    company_id: number;
    item_size: string;
    _id: string;
    affiliate_store_id: string;
    sku: string;
    fynd_store_id: string;
    hsn_code_id: string;
    price_effective: number;
    avl_qty: number;
    amount_paid: number;
    store_id: number;
    delivery_charge: number;
    transfer_price: number;
    quantity: number;
    unit_price: number;
    affiliate_meta: any;
    pdf_links?: MarketPlacePdf;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderInfo = {
    order_priority?: OrderPriority;
    order_value: number;
    delivery_charges: number;
    items: any;
    discount: number;
    payment?: any;
    cod_charges: number;
    payment_mode: string;
    affiliate_order_id?: string;
    shipping_address: OrderUser;
    billing_address: OrderUser;
    shipment?: ShipmentData;
    bags: AffiliateBag[];
    user: UserData;
    coupon?: string;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    secret: string;
    created_at: string;
    meta?: AffiliateAppConfigMeta[];
    owner: string;
    description?: string;
    token: string;
    id: string;
    name: string;
    updated_at: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    id: string;
    config?: AffiliateConfig;
    token: string;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    affiliate: Affiliate;
    article_lookup?: string;
    store_lookup?: string;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    create_user?: boolean;
};
type CreateOrderPayload = {
    affiliate_id: string;
    order_info: OrderInfo;
    order_config: OrderConfig;
};
type CreateOrderResponse = {
    fynd_order_id: string;
};
type DispatchManifest = {
    manifest_id: string;
};
type SuccessResponse = {
    message?: string;
    success?: boolean;
};
type ActionInfo = {
    id: number;
    description: string;
    display_text: string;
    slug: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    message: string;
    l2_detail?: string;
    createdat: string;
    bag_id?: number;
    ticket_id?: string;
    l1_detail?: string;
    l3_detail?: string;
    ticket_url?: string;
    type: string;
    user: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type PostHistoryFilters = {
    line_number?: string;
    identifier?: string;
    shipment_id: string;
};
type PostHistoryData = {
    message: string;
    user_name: string;
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
    customer_name: string;
    message: string;
    phone_number: number;
    brand_name: string;
    payment_mode: string;
    order_id: string;
    amount_paid: number;
    shipment_id: number;
    country_code: string;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    slug: string;
    bag_id: number;
};
type Meta1 = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    id: number;
    remarks?: string;
    meta: Meta1;
    bag_list?: number[];
    shipment_id?: string;
    status?: string;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type OrderStatusData = {
    shipment_details?: ShipmentDetail[];
    errors?: string[];
    order_details: OrderDetails;
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    qc_required: string;
    order_type: string;
    dp_id: number;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type ShippingInfo = {
    primary_mobile_number: string;
    alternate_email?: string;
    state_code?: string;
    pincode: string;
    alternate_mobile_number?: string;
    address2?: string;
    customer_code?: string;
    title?: string;
    country: string;
    country_code?: string;
    gender?: string;
    floor_no?: string;
    state: string;
    slot?: any[];
    external_customer_code?: string;
    landmark?: string;
    address_type?: string;
    city: string;
    primary_email: string;
    last_name?: string;
    geo_location?: any;
    address1: string;
    middle_name?: string;
    house_no?: string;
    first_name: string;
    shipping_type?: string;
};
type Tax = {
    name: string;
    rate: number;
    amount: any;
    breakup?: any[];
};
type Charge = {
    tax?: Tax;
    code?: string;
    amount: any;
    type: string;
    name: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type BillingInfo = {
    primary_mobile_number: string;
    alternate_email?: string;
    state_code?: string;
    pincode: string;
    alternate_mobile_number?: string;
    address2?: string;
    customer_code?: string;
    title?: string;
    country: string;
    country_code?: string;
    gender?: string;
    floor_no?: string;
    state: string;
    external_customer_code?: string;
    city: string;
    primary_email: string;
    last_name?: string;
    address1: string;
    middle_name?: string;
    house_no?: string;
    first_name: string;
};
type PaymentMethod = {
    mode: string;
    transaction_data?: any;
    refund_by: string;
    meta?: any;
    amount: number;
    collect_by: string;
    name: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    pack_by_date?: string;
    dispatch_by_date?: string;
    customer_pickup_slot?: any;
    dp_pickup_slot?: any;
    dispatch_after_date?: string;
};
type LineItem = {
    charges?: Charge[];
    meta?: any;
    custom_messasge?: string;
    seller_identifier: string;
    quantity?: number;
    external_line_id?: string;
};
type Shipment = {
    processing_dates?: ProcessingDates;
    external_shipment_id?: string;
    meta?: any;
    priority?: number;
    location_id: number;
    line_items: LineItem[];
};
type CreateOrderAPI = {
    currency_info?: any;
    shipping_info: ShippingInfo;
    charges?: Charge[];
    tax_info?: TaxInfo;
    meta?: any;
    billing_info: BillingInfo;
    external_order_id?: string;
    payment_info: PaymentInfo;
    external_creation_date?: string;
    shipments: Shipment[];
};
type CreateOrderErrorReponse = {
    stack_trace?: string;
    message: string;
    exception?: string;
    info?: any;
    code?: string;
    meta?: string;
    request_id?: string;
    status: number;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    refund_by?: string;
    mode?: string;
    collect_by?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
};
type CreateChannelConfig = {
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
    location_reassignment?: boolean;
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
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
    message?: string[];
    success?: boolean;
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    mobile: number;
    start_date: string;
    order_details?: FyndOrderIdList[];
    end_date: string;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsData = {
    uid?: string;
    result?: any;
    words?: string[];
    is_active?: boolean;
    app_id?: string;
    _custom_json?: any;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    words?: string[];
    is_active?: boolean;
    app_id?: string;
    _custom_json?: any;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    uid?: string;
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type Media = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type AutocompletePageAction = {
    params?: any;
    type?: string;
    query?: any;
    url?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    logo?: Media;
    _custom_json?: any;
    action?: AutocompleteAction;
    display?: string;
};
type CreateAutocompleteKeyword = {
    words?: string[];
    is_active?: boolean;
    app_id?: string;
    _custom_json?: any;
    results?: AutocompleteResult[];
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    results?: any[];
    app_id?: string;
    _custom_json?: any;
};
type ProductBundleItem = {
    product_uid: number;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
    max_quantity: number;
    allow_remove?: boolean;
    min_quantity: number;
};
type GetProductBundleCreateResponse = {
    name: string;
    products: ProductBundleItem[];
    modified_on?: string;
    same_store_assignment?: boolean;
    meta?: any;
    page_visibility?: string[];
    choice: string;
    slug: string;
    created_on?: string;
    id?: string;
    is_active: boolean;
    created_by?: any;
    logo?: string;
    company_id?: number;
    modified_by?: any;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    name: string;
    products: ProductBundleItem[];
    modified_on?: string;
    same_store_assignment?: boolean;
    meta?: any;
    page_visibility?: string[];
    choice: string;
    slug: string;
    created_on?: string;
    is_active: boolean;
    created_by?: any;
    logo?: string;
    company_id?: number;
    modified_by?: any;
};
type Size = {
    is_available?: boolean;
    quantity?: number;
    value?: string;
    display?: string;
};
type LimitedProductData = {
    identifier?: any;
    uid?: number;
    short_description?: string;
    sizes?: string[];
    name?: string;
    price?: any;
    slug?: string;
    images?: string[];
    country_of_origin?: string;
    attributes?: any;
    quantity?: number;
    item_code?: string;
};
type Price = {
    min_effective?: number;
    max_effective?: number;
    max_marked?: number;
    currency?: string;
    min_marked?: number;
};
type GetProducts = {
    product_uid?: number;
    sizes?: Size[];
    auto_add_to_cart?: boolean;
    product_details?: LimitedProductData;
    auto_select?: boolean;
    allow_remove?: boolean;
    max_quantity?: number;
    min_quantity?: number;
    price?: Price;
};
type GetProductBundleResponse = {
    products?: GetProducts[];
    name?: string;
    page_visibility?: string[];
    same_store_assignment?: boolean;
    meta?: any;
    slug?: string;
    logo?: string;
    is_active?: boolean;
    choice?: string;
    company_id?: number;
};
type ProductBundleUpdateRequest = {
    name: string;
    products: ProductBundleItem[];
    modified_on?: string;
    same_store_assignment?: boolean;
    meta?: any;
    page_visibility?: string[];
    choice: string;
    slug: string;
    is_active: boolean;
    logo?: string;
    company_id?: number;
    modified_by?: any;
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
    name: string;
    id?: string;
    modified_on?: string;
    created_on?: string;
    subtitle?: string;
    title: string;
    tag?: string;
    image?: string;
    brand_id?: number;
    active?: boolean;
    created_by?: any;
    description?: string;
    company_id?: number;
    modified_by?: any;
};
type SizeGuideResponse = {
    guide?: any;
    name?: string;
    id?: string;
    modified_on?: string;
    created_on?: string;
    subtitle?: string;
    title?: string;
    tag?: string;
    brand_id?: number;
    active?: boolean;
    created_by?: any;
    company_id?: number;
    modified_by?: any;
};
type MOQData = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type SEOData = {
    description?: string;
    title?: string;
};
type OwnerAppItemResponse = {
    is_cod?: boolean;
    alt_text?: any;
    moq?: MOQData;
    seo?: SEOData;
    is_gift?: boolean;
};
type MetaFields = {
    key: string;
    value: string;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type ApplicationItemSEO = {
    description?: string;
    title?: string;
};
type ApplicationItemMeta = {
    _custom_meta?: MetaFields[];
    is_cod?: boolean;
    alt_text?: any;
    moq?: ApplicationItemMOQ;
    _custom_json?: any;
    seo?: ApplicationItemSEO;
    is_gift?: boolean;
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
    total_count: number;
    has_next: boolean;
    current: number;
    next: number;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    name: string;
    unit?: string;
    display_type: string;
    slug?: string;
    key?: string;
    is_active: boolean;
    logo?: string;
    priority: number;
};
type AppConfigurationDetail = {
    name?: string;
    slug: string;
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    is_active: boolean;
    app_id: string;
    is_default: boolean;
    logo?: string;
    priority: number;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    name?: string;
    default_key: string;
    key: string;
    is_active: boolean;
    app_id: string;
    is_default: boolean;
    logo?: string;
    priority: number;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingSortMetaResponse = {
    key?: string;
    display?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingFilterMetaResponse = {
    units?: any[];
    key?: string;
    filter_types?: string[];
    display?: string;
};
type MetaDataListingFilterResponse = {
    data?: MetaDataListingFilterMetaResponse[];
};
type MetaDataListingResponse = {
    sort: MetaDataListingSortResponse;
    filter: MetaDataListingFilterResponse;
};
type GetCatalogConfigurationDetailsProduct = {
    compare?: any;
    similar?: any;
    variant?: any;
    detail?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationListingSortConfig = {
    name?: string;
    key: string;
    is_active: boolean;
    logo?: string;
    priority: number;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    display?: string;
    start?: number;
    end?: number;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    map_values?: any[];
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    map?: any;
    value?: string;
};
type ConfigurationListingFilterConfig = {
    name?: string;
    value_config?: ConfigurationListingFilterValue;
    key: string;
    is_active: boolean;
    type: string;
    logo?: string;
    priority: number;
    display_name?: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductConfig = {
    subtitle?: string;
    title?: string;
    size?: ProductSize;
    key: string;
    is_active: boolean;
    logo?: string;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    name: string;
    display_type: string;
    size: ProductSize;
    key: string;
    is_active: boolean;
    logo?: string;
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
    listing?: ConfigurationListing;
    id?: string;
    modified_on?: string;
    config_type: string;
    created_on?: string;
    config_id?: string;
    type?: string;
    app_id: string;
    created_by?: any;
    product?: ConfigurationProduct;
    modified_by?: any;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    modified_on?: string;
    config_type: string;
    created_on?: string;
    config_id?: string;
    type?: string;
    app_id: string;
    created_by?: any;
    product?: ConfigurationProduct;
    modified_by?: any;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
    config_type: string;
    config_id?: string;
    app_id: string;
    product?: GetCatalogConfigurationDetailsProduct;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    name?: string;
    value?: string;
    is_selected?: boolean;
};
type ProductFiltersKey = {
    name: string;
    operators?: string[];
    display: string;
    logo?: string;
    kind?: string;
};
type ProductFiltersValue = {
    min?: number;
    is_selected: boolean;
    max?: number;
    selected_max?: number;
    currency_symbol?: string;
    selected_min?: number;
    count?: number;
    display_format?: string;
    display: string;
    value: any;
    currency_code?: string;
    query_format?: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type GetCollectionQueryOptionResponse = {
    sort_on?: ProductSortOn[];
    operators: any;
    filters?: ProductFilters[];
};
type CollectionQuery = {
    op: string;
    attribute: string;
    value: any[];
};
type BannerImage = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type Media1 = {
    meta?: any;
    type?: string;
    url: string;
};
type GetCollectionDetailNest = {
    uid?: string;
    query?: CollectionQuery[];
    allow_sort?: boolean;
    visible_facets_keys?: string[];
    tag?: string[];
    _schedule?: any;
    allow_facets?: boolean;
    cron?: any;
    banners?: ImageUrls;
    type?: string;
    logo?: Media1;
    priority?: number;
    description?: string;
    name?: string;
    badge?: any;
    meta?: any;
    slug?: string;
    action?: Action;
    is_active?: boolean;
    app_id?: string;
};
type CollectionListingFilterType = {
    name?: string;
    is_selected?: boolean;
    display?: string;
};
type CollectionListingFilterTag = {
    name?: string;
    is_selected?: boolean;
    display?: string;
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
type SeoDetail = {
    description?: string;
    title?: string;
};
type UserInfo = {
    username?: string;
    email?: string;
    user_id?: string;
    uid?: string;
};
type CollectionSchedule = {
    duration?: number;
    next_schedule?: NextSchedule[];
    start?: string;
    end?: string;
    cron?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CreateCollection = {
    query?: CollectionQuery[];
    allow_sort?: boolean;
    tags?: string[];
    visible_facets_keys?: string[];
    seo?: SeoDetail;
    modified_by?: UserInfo;
    is_visible?: boolean;
    _schedule?: CollectionSchedule;
    allow_facets?: boolean;
    _locale_language?: any;
    banners: CollectionBanner;
    type: string;
    created_by?: UserInfo;
    logo: CollectionImage;
    description?: string;
    priority?: number;
    name: string;
    badge?: CollectionBadge;
    meta?: any;
    slug: string;
    sort_on?: string;
    is_active?: boolean;
    app_id: string;
    _custom_json?: any;
    published?: boolean;
};
type CollectionCreateResponse = {
    query?: CollectionQuery[];
    allow_sort?: boolean;
    visible_facets_keys?: string[];
    tag?: string[];
    _schedule?: any;
    allow_facets?: boolean;
    cron?: any;
    banners?: ImageUrls;
    type?: string;
    logo?: BannerImage;
    priority?: number;
    description?: string;
    name?: string;
    badge?: any;
    meta?: any;
    slug?: string;
    sort_on?: string;
    is_active?: boolean;
    app_id?: string;
};
type CollectionDetailResponse = {
    uid?: string;
    query?: CollectionQuery[];
    allow_sort?: boolean;
    visible_facets_keys?: string[];
    tag?: string[];
    _schedule?: any;
    allow_facets?: boolean;
    cron?: any;
    banners?: ImageUrls;
    type?: string;
    logo?: Media1;
    priority?: number;
    description?: string;
    name?: string;
    badge?: any;
    meta?: any;
    slug?: string;
    is_active?: boolean;
    app_id?: string;
};
type UpdateCollection = {
    query?: CollectionQuery[];
    allow_sort?: boolean;
    tags?: string[];
    visible_facets_keys?: string[];
    seo?: SeoDetail;
    modified_by?: UserInfo;
    is_visible?: boolean;
    _schedule?: CollectionSchedule;
    allow_facets?: boolean;
    _locale_language?: any;
    banners?: CollectionBanner;
    type?: string;
    logo?: CollectionImage;
    description?: string;
    priority?: number;
    name?: string;
    badge?: CollectionBadge;
    meta?: any;
    slug?: string;
    sort_on?: string;
    is_active?: boolean;
    _custom_json?: any;
    published?: boolean;
};
type ProductBrand = {
    uid?: number;
    action?: Action;
    name?: string;
    logo?: Media1;
};
type Price1 = {
    currency_symbol?: string;
    currency_code?: string;
    min?: number;
    max?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
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
    uid?: number;
    similars?: string[];
    rating_count?: number;
    medias?: Media1[];
    discount?: string;
    image_nature?: string;
    highlights?: string[];
    rating?: number;
    color?: string;
    tryouts?: string[];
    brand?: ProductBrand;
    has_variant?: boolean;
    item_code?: string;
    price?: ProductListingPrice;
    promo_meta?: any;
    type?: string;
    description?: string;
    short_description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    name?: string;
    product_online_date?: string;
    slug: string;
    teaser_tag?: any;
    sellable?: boolean;
    attributes?: any;
    item_type?: string;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    page?: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    item?: ItemQueryForUserCollection[];
    type?: string;
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    sellable_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    name?: string;
    total_articles?: number;
    available_articles?: number;
    article_freshness?: number;
    available_sizes?: number;
    total_sizes?: number;
};
type CatalogInsightResponse = {
    item?: CatalogInsightItem;
    brand_distribution?: CatalogInsightBrand;
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
    opt_level: string;
    enabled?: boolean;
    store_ids?: number[];
    brand_ids?: number[];
    company_id?: number;
    platform?: string;
};
type CompanyOptIn = {
    opt_level: string;
    modified_on: number;
    enabled: boolean;
    created_on: number;
    store_ids: number[];
    brand_ids: number[];
    modified_by?: any;
    created_by?: any;
    company_id: number;
    platform: string;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    uid?: number;
    business_type?: string;
    name?: string;
    company_type?: string;
};
type CompanyBrandDetail = {
    brand_id?: number;
    total_article?: number;
    company_id?: number;
    brand_name?: string;
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
    uid?: number;
    address?: any;
    manager?: any;
    name?: string;
    modified_on?: string;
    created_on?: string;
    company_id?: number;
    store_code?: string;
    documents?: any[];
    store_type?: string;
    timing?: any;
    additional_contacts?: any[];
    display_name?: string;
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
    priority?: number;
    depends_on?: string[];
    indexing: boolean;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    multi?: boolean;
    allowed_values?: string[];
    type: string;
    format?: string;
    range?: AttributeSchemaRange;
    mandatory?: boolean;
};
type GenderDetail = {
    enabled_for_end_consumer?: boolean;
    name?: string;
    id?: string;
    meta?: AttributeMasterMeta;
    details?: AttributeMasterDetails;
    slug?: string;
    is_nested?: boolean;
    filters?: AttributeMasterFilter;
    departments?: string[];
    logo?: string;
    description?: string;
    schema?: AttributeMaster;
};
type ProductTemplateCategory = {
    uid?: number;
    name?: string;
    slug_key?: string;
    slug?: string;
    template_slug?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: ProductTemplateCategory[];
};
type PTErrorResponse = {
    message?: string;
    meta?: any;
    status?: number;
    code?: string;
    errors?: any;
};
type UserSerializer = {
    _id?: string;
    uid?: string;
    user_id?: string;
    username?: string;
    contact?: string;
};
type GetDepartment = {
    uid?: number;
    name?: string;
    page_no?: number;
    modified_on?: string;
    created_on?: string;
    slug?: string;
    priority_order?: number;
    synonyms?: string[];
    search?: string;
    is_active?: boolean;
    page_size?: number;
    created_by?: UserSerializer;
    logo?: string;
    item_type?: string;
    modified_by?: UserSerializer;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    message?: string;
    meta?: any;
    status?: number;
    code?: string;
    errors?: any;
};
type DepartmentCreateUpdate = {
    uid?: number;
    name: string;
    priority_order: number;
    slug?: string;
    _cls?: string;
    synonyms?: string[];
    is_active?: boolean;
    tags?: string[];
    _custom_json?: any;
    logo: string;
    platforms?: any;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    username: string;
    user_id: string;
    contact?: string;
    super_user?: boolean;
};
type DepartmentModel = {
    _id?: any;
    uid?: number;
    verified_by?: UserDetail;
    name: string;
    modified_on: string;
    created_on: string;
    slug?: string;
    verified_on?: string;
    priority_order: number;
    _cls?: string;
    synonyms?: string[];
    is_active?: boolean;
    _custom_json?: any;
    created_by?: UserDetail;
    logo: string;
    modified_by?: UserDetail;
};
type ProductTemplate = {
    is_physical: boolean;
    name?: string;
    is_archived?: boolean;
    modified_on?: string;
    created_on?: string;
    slug: string;
    tag?: string;
    is_expirable: boolean;
    departments?: string[];
    is_active?: boolean;
    modified_by?: any;
    attributes?: string[];
    categories?: string[];
    logo?: string;
    description?: string;
    created_by?: any;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type TemplateDetails = {
    is_physical: boolean;
    name?: string;
    is_archived?: boolean;
    id?: string;
    slug: string;
    tag?: string;
    is_expirable: boolean;
    departments?: string[];
    is_active?: boolean;
    attributes?: string[];
    categories?: string[];
    logo?: string;
    description?: string;
};
type Properties = {
    trader?: any;
    custom_order?: any;
    no_of_boxes?: any;
    country_of_origin?: any;
    tags?: any;
    highlights?: any;
    media?: any;
    command?: any;
    multi_size?: any;
    return_config?: any;
    category_slug?: any;
    item_code?: any;
    variants?: any;
    hsn_code?: any;
    is_dependent?: any;
    product_group_tag?: any;
    currency?: any;
    size_guide?: any;
    description?: any;
    short_description?: any;
    sizes?: any;
    name?: any;
    trader_type?: any;
    brand_uid?: any;
    slug?: any;
    teaser_tag?: any;
    is_active?: any;
    item_type?: any;
    product_publish?: any;
};
type GlobalValidation = {
    title?: string;
    required?: string[];
    definitions?: any;
    description?: string;
    type?: string;
    properties?: Properties;
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
    message?: string;
    data?: any;
};
type HSNData = {
    hsn_code?: string[];
    country_of_origin?: string[];
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type UserInfo1 = {
    username?: string;
    email?: string;
    user_id?: string;
    uid?: string;
};
type ProductTemplateExportResponse = {
    modified_on?: string;
    notification_emails?: string[];
    status?: string;
    seller_id: number;
    filters?: any;
    completed_on?: string;
    type?: string;
    created_by?: UserInfo1;
    task_id: string;
    url?: string;
};
type ProductDownloadsResponse = {
    items?: ProductTemplateExportResponse[];
};
type ProductTemplateExportFilterRequest = {
    templates: string[];
    brands?: string[];
    from_date?: string;
    to_date?: string;
    catalogue_types: string[];
};
type ProductTemplateDownloadsExport = {
    type?: string;
    notification_emails?: string[];
    filters?: ProductTemplateExportFilterRequest;
};
type ProductPartialExportRequest = {
    status?: string;
    notification_emails?: string[];
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Media2 = {
    logo: string;
    landscape: string;
    portrait: string;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Category = {
    uid?: number;
    name: string;
    media?: Media2;
    modified_on?: string;
    id?: string;
    hierarchy?: Hierarchy[];
    created_on?: string;
    slug?: string;
    level: number;
    departments: number[];
    synonyms?: string[];
    is_active: boolean;
    tryouts?: string[];
    created_by?: any;
    marketplaces?: CategoryMapping;
    priority?: number;
    modified_by?: any;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    name: string;
    media?: Media2;
    hierarchy?: Hierarchy[];
    slug?: string;
    level: number;
    departments: number[];
    synonyms?: string[];
    is_active: boolean;
    tryouts?: string[];
    marketplaces?: CategoryMapping;
    priority?: number;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type Trader = {
    address?: string[];
    name: string;
    type?: string;
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type Image = {
    aspect_ratio_f?: number;
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type ReturnConfigResponse = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Logo = {
    aspect_ratio_f?: number;
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductSchemaV2 = {
    uid?: number;
    trader?: Trader[];
    is_image_less_product?: boolean;
    verified_by?: VerifiedBy;
    custom_order?: any;
    images?: Image[];
    primary_color?: string;
    no_of_boxes?: number;
    country_of_origin?: string;
    departments?: number[];
    all_company_ids?: number[];
    image_nature?: string;
    all_sizes?: any[];
    tags?: string[];
    category?: any;
    pending?: string;
    l3_mapping?: string[];
    modified_by?: any;
    is_set?: boolean;
    highlights?: string[];
    media?: Media1[];
    created_on?: string;
    variant_media?: any;
    multi_size?: boolean;
    attributes?: any;
    moq?: any;
    color?: string;
    return_config?: ReturnConfigResponse;
    brand?: Brand;
    category_slug?: string;
    item_code?: string;
    variants?: any;
    id?: string;
    modified_on?: string;
    template_tag?: string;
    net_quantity?: NetQuantityResponse;
    hsn_code?: string;
    is_dependent?: boolean;
    variant_group?: any;
    tax_identifier?: any;
    category_uid?: number;
    product_group_tag?: string[];
    currency?: string;
    is_expirable?: boolean;
    size_guide?: string;
    created_by?: any;
    description?: string;
    company_id?: number;
    stage?: string;
    short_description?: string;
    sizes?: any[];
    name?: string;
    brand_uid?: number;
    slug?: string;
    verified_on?: string;
    teaser_tag?: any;
    is_active?: boolean;
    all_identifiers?: string[];
    _custom_json?: any;
    is_physical?: boolean;
    item_type?: string;
    product_publish?: ProductPublish;
};
type ProductListingResponseV2 = {
    page?: Page;
    items?: ProductSchemaV2[];
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type NetQuantity = {
    unit?: string;
    value?: number;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductPublish1 = {
    is_set?: boolean;
    product_online_date?: string;
};
type ProductCreateUpdateSchemaV2 = {
    trader: Trader[];
    uid?: number;
    is_image_less_product?: boolean;
    custom_order?: CustomOrder;
    no_of_boxes?: number;
    country_of_origin: string;
    departments: number[];
    tags?: string[];
    bulk_job_id?: string;
    is_set?: boolean;
    highlights?: string[];
    media?: Media1[];
    variant_media?: any;
    multi_size?: boolean;
    attributes?: any;
    return_config: ReturnConfig;
    category_slug: string;
    item_code: string;
    variants?: any;
    requester?: string;
    template_tag: string;
    net_quantity?: NetQuantity;
    is_dependent?: boolean;
    variant_group?: any;
    tax_identifier: TaxIdentifier;
    product_group_tag?: string[];
    currency: string;
    size_guide?: string;
    description?: string;
    company_id: number;
    short_description?: string;
    sizes: any[];
    name: string;
    change_request_id?: any;
    brand_uid: number;
    slug: string;
    action?: string;
    teaser_tag?: TeaserTag;
    is_active?: boolean;
    _custom_json?: any;
    item_type: string;
    product_publish?: ProductPublish1;
};
type ProductVariants = {
    uid?: number;
    name?: string;
    media?: Media1[];
    brand_uid?: number;
    category_uid?: number;
    item_code?: string;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    filters: AttributeMasterFilter;
    departments: string[];
    synonyms?: any;
    raw_key?: string;
    tags?: string[];
    schema: AttributeMaster;
    modified_by?: any;
    enabled_for_end_consumer?: boolean;
    created_on?: string;
    is_nested?: boolean;
    unit?: string;
    modified_on?: string;
    details: AttributeMasterDetails;
    created_by?: any;
    logo?: string;
    suggestion?: string;
    description?: string;
    name?: string;
    slug: string;
    variant?: boolean;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: ProductSchemaV2;
};
type ValidateIdentifier = {
    gtin_value: string;
    primary?: boolean;
    gtin_type: string;
};
type AllSizes = {
    identifiers?: ValidateIdentifier[];
    item_height: number;
    item_dimensions_unit_of_measure: string;
    item_weight_unit_of_measure: string;
    size: string;
    item_length: number;
    item_width: number;
    item_weight: number;
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
    uid?: number;
    trader?: Trader[];
    is_image_less_product?: boolean;
    verified_by?: VerifiedBy;
    custom_order?: any;
    images?: Image[];
    primary_color?: string;
    no_of_boxes?: number;
    country_of_origin?: string;
    departments?: number[];
    all_company_ids?: number[];
    image_nature?: string;
    all_sizes?: any[];
    tags?: string[];
    category?: any;
    pending?: string;
    l3_mapping?: string[];
    modified_by?: any;
    is_set?: boolean;
    highlights?: string[];
    media?: Media1[];
    created_on?: string;
    variant_media?: any;
    multi_size?: boolean;
    attributes?: any;
    moq?: any;
    color?: string;
    return_config?: ReturnConfigResponse;
    brand?: Brand;
    category_slug?: string;
    item_code?: string;
    variants?: any;
    id?: string;
    modified_on?: string;
    template_tag?: string;
    net_quantity?: NetQuantityResponse;
    hsn_code?: string;
    is_dependent?: boolean;
    variant_group?: any;
    tax_identifier?: any;
    category_uid?: number;
    product_group_tag?: string[];
    currency?: string;
    is_expirable?: boolean;
    size_guide?: string;
    created_by?: any;
    description?: string;
    company_id?: number;
    stage?: string;
    short_description?: string;
    sizes?: any[];
    name?: string;
    brand_uid?: number;
    slug?: string;
    verified_on?: string;
    teaser_tag?: any;
    is_active?: boolean;
    all_identifiers?: string[];
    _custom_json?: any;
    is_physical?: boolean;
    item_type?: string;
    product_publish?: ProductPublished;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type UserDetail1 = {
    username?: string;
    user_id?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    stage?: string;
    cancelled_records?: string[];
    modified_on?: string;
    template_tag?: string;
    created_on?: string;
    total?: number;
    file_path?: string;
    failed?: number;
    is_active?: boolean;
    cancelled?: number;
    template?: ProductTemplate;
    created_by?: UserDetail1;
    succeed?: number;
    company_id?: number;
    failed_records?: string[];
    modified_by?: UserDetail1;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkJob = {
    stage?: string;
    cancelled_records?: any[];
    modified_on?: string;
    created_on: string;
    template_tag?: string;
    total?: number;
    custom_template_tag?: string;
    file_path?: string;
    cancelled?: number;
    is_active?: boolean;
    failed?: number;
    tracking_url?: string;
    created_by?: UserInfo1;
    succeed?: number;
    company_id: number;
    failed_records?: any[];
    modified_by?: UserInfo1;
};
type BulkResponse = {
    modified_on?: string;
    created_on: string;
    is_active?: boolean;
    batch_id: string;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
};
type BulkProductRequest = {
    template_tag: string;
    batch_id: string;
    company_id: number;
    data: any[];
};
type ProductTagsViewResponse = {
    items?: string[];
};
type UserCommon = {
    username?: string;
    user_id?: string;
    company_id?: number;
};
type Items = {
    stage?: string;
    cancelled_records?: string[];
    id?: string;
    modified_on?: string;
    created_on?: string;
    total?: number;
    file_path?: string;
    failed?: number;
    is_active?: boolean;
    retry?: number;
    cancelled?: number;
    tracking_url?: string;
    created_by?: UserCommon;
    succeed?: number;
    company_id?: number;
    failed_records?: string[];
    modified_by?: UserCommon;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
};
type ProductBulkAssets = {
    user: any;
    company_id?: number;
    url: string;
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    company_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    identifiers?: any;
    uid?: string;
    store?: any;
    sellable_quantity?: number;
    price_effective?: number;
    price_transfer?: number;
    size?: string;
    inventory_updated_on?: string;
    item_id?: number;
    seller_identifier?: string;
    currency?: string;
    quantity?: number;
    price?: number;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type ItemQuery = {
    uid?: number;
    item_code?: string;
    brand_uid?: number;
};
type GTIN = {
    gtin_value: string;
    primary?: boolean;
    gtin_type: string;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    quantity?: number;
    name?: string;
    size_distribution: SizeDistribution;
};
type InvSize = {
    item_height?: number;
    is_set?: boolean;
    identifiers: GTIN[];
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    price_effective: number;
    item_weight_unit_of_measure?: string;
    set?: InventorySet;
    price_transfer?: number;
    size: string;
    store_code: string;
    item_length?: number;
    item_width?: number;
    item_weight?: number;
    currency: string;
    quantity: number;
    price?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type CompanyMeta = {
    id: number;
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type BrandMeta = {
    id: number;
    name: string;
};
type PriceMeta = {
    marked: number;
    updated_at?: string;
    transfer: number;
    tp_notes?: any;
    currency: string;
    effective: number;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type DimensionResponse = {
    height: number;
    unit: string;
    width: number;
    is_default: boolean;
    length: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    sellable?: QuantityBase;
    damaged?: QuantityBase;
};
type InventorySellerResponse = {
    uid: string;
    trader?: Trader1[];
    country_of_origin: string;
    tags?: string[];
    identifier: any;
    modified_by?: UserSerializer;
    fynd_item_code: string;
    is_set?: boolean;
    weight: WeightResponse;
    set?: InventorySet;
    company: CompanyMeta;
    size: string;
    track_inventory?: boolean;
    raw_meta?: any;
    return_config?: ReturnConfig1;
    trace_id?: string;
    brand: BrandMeta;
    price: PriceMeta;
    fynd_article_code: string;
    store: StoreMeta;
    fynd_meta?: any;
    fragile: boolean;
    tax_identifier?: any;
    added_on_store?: string;
    item_id: number;
    manufacturer: ManufacturerResponse;
    created_by?: UserSerializer;
    stage?: string;
    total_quantity: number;
    meta?: any;
    expiration_date?: string;
    seller_identifier: string;
    is_active?: boolean;
    _custom_json?: any;
    dimension: DimensionResponse;
    quantities?: Quantities;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type ReturnConfig2 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type PriceArticle = {
    marked?: number;
    transfer?: number;
    tp_notes?: any;
    currency?: string;
    effective?: number;
};
type ArticleStoreResponse = {
    uid?: number;
    store_type?: string;
    name?: string;
    store_code?: string;
};
type ManufacturerResponse1 = {
    address?: string;
    name?: string;
    is_default?: boolean;
};
type DimensionResponse1 = {
    length?: number;
    height?: number;
    unit?: string;
    width?: number;
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
type GetInventories = {
    trader?: Trader2[];
    uid?: string;
    country_of_origin?: string;
    tags?: string[];
    identifier?: any;
    modified_by?: UserSerializer;
    is_set?: boolean;
    weight?: WeightResponse1;
    company?: CompanyMeta1;
    size?: string;
    track_inventory?: boolean;
    return_config?: ReturnConfig2;
    trace_id?: string;
    brand?: BrandMeta1;
    price?: PriceArticle;
    store?: ArticleStoreResponse;
    id?: string;
    date_meta?: DateMeta;
    tax_identifier?: any;
    inventory_updated_on?: string;
    item_id?: number;
    manufacturer?: ManufacturerResponse1;
    created_by?: UserSerializer;
    stage?: string;
    total_quantity?: number;
    expiration_date?: string;
    seller_identifier?: string;
    dimension?: DimensionResponse1;
    platforms?: any;
    quantities?: QuantitiesArticle;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    stage?: string;
    cancelled_records?: string[];
    id?: string;
    modified_on?: string;
    created_on?: string;
    total?: number;
    file_path?: string;
    cancelled?: number;
    failed?: number;
    is_active?: boolean;
    created_by?: any;
    succeed?: number;
    company_id?: number;
    failed_records?: string[];
    modified_by?: any;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    item_dimensions_unit_of_measure?: string;
    total_quantity?: number;
    expiration_date?: string;
    price_effective?: number;
    item_weight_unit_of_measure?: string;
    store_code: string;
    seller_identifier: string;
    price_marked?: number;
    tags?: string[];
    currency?: string;
    trace_id?: string;
    quantity?: number;
    price?: number;
};
type InventoryBulkRequest = {
    user?: any;
    sizes: InventoryJobPayload[];
    company_id: number;
    batch_id: string;
};
type InventoryExportQuantityFilter = {
    operators: string;
    min?: number;
    max?: number;
};
type InventoryExportAdvanceOption = {
    to_date?: string;
    store_ids?: number[];
    from_date?: string;
    brand_ids?: number[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryExportJob = {
    notification_emails?: string[];
    status?: string;
    seller_id: number;
    filters?: InventoryExportAdvanceOption;
    completed_on?: string;
    type: string;
    task_id: string;
    url?: string;
};
type InventoryExportRequest = {
    store?: number[];
    type?: string;
    brand?: number[];
};
type InventoryExportResponse = {
    modified_on?: string;
    notification_emails?: string[];
    created_on?: string;
    status?: string;
    seller_id: number;
    filters?: any;
    type?: string;
    created_by?: string;
    task_id: string;
};
type InventoryJobFilters = {
    brands?: string[];
    to_date?: string;
    from_date?: string;
    stores?: string[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryJobDetailResponse = {
    id: string;
    modified_on?: string;
    notification_emails?: string[];
    created_on?: string;
    status?: string;
    seller_id: number;
    filters: InventoryJobFilters;
    completed_on?: string;
    type?: string;
    cancelled_on?: string;
    created_by?: UserDetail;
    cancelled_by?: UserDetail;
    task_id: string;
    url: string;
};
type InventoryExportJobListResponse = {
    items: InventoryJobDetailResponse;
};
type InventoryExportFilter = {
    to_date?: string;
    store_ids: number[];
    from_date?: string;
    brand_ids?: number[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryCreateRequest = {
    data?: string[];
    type?: string;
    notification_emails?: string[];
    filters: InventoryExportFilter;
};
type InventoryPartialExportRequest = {
    status?: string;
    notification_emails?: string[];
};
type InventoryExportCreateFilters = {
    to_date?: string;
    store_ids?: number[];
    from_date?: string;
    brand_ids?: number[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryExportCreateResponse = {
    id: string;
    modified_on?: string;
    notification_emails?: string[];
    created_on?: string;
    status?: string;
    seller_id: number;
    filters: InventoryExportCreateFilters;
    completed_on?: string;
    type?: string;
    cancelled_on?: string;
    created_by?: UserDetail;
    cancelled_by?: UserDetail;
    task_id: string;
    url: string;
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
    total_quantity?: number;
    expiration_date?: string;
    price_effective?: number;
    store_id: number;
    seller_identifier: string;
    price_marked?: number;
    tags?: string[];
    trace_id?: string;
};
type InventoryRequestSchemaV2 = {
    meta?: any;
    payload?: InventoryPayload[];
    company_id: number;
};
type InventoryFailedReason = {
    message: string;
    errors?: string;
};
type InventoryResponseItem = {
    data?: InventoryPayload;
    reason?: InventoryFailedReason;
};
type InventoryUpdateResponse = {
    message: string;
    items?: InventoryResponseItem[];
};
type HsnCodesObject = {
    tax_on_mrp?: boolean;
    id?: string;
    threshold1?: number;
    modified_on?: string;
    threshold2?: number;
    hsn_code?: string;
    tax1?: number;
    tax2?: number;
    hs2_code?: string;
    company_id?: number;
    tax_on_esp?: boolean;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    tax_on_mrp: boolean;
    uid?: number;
    threshold1: number;
    threshold2?: number;
    hsn_code: string;
    tax1: number;
    tax2?: number;
    is_active?: boolean;
    hs2_code: string;
    company_id: number;
    tax_on_esp?: boolean;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type PageResponse = {
    has_next?: boolean;
    size?: number;
    current?: string;
    item_total?: number;
    has_previous?: boolean;
};
type TaxSlab = {
    threshold: number;
    rate: number;
    cess?: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    country_code: string;
    modified_on?: string;
    created_on?: string;
    hsn_code: string;
    taxes: TaxSlab[];
    type: string;
    created_by?: any;
    description: string;
    hsn_code_id?: string;
    reporting_hsn: string;
    modified_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    uid?: number;
    name?: string;
    slug?: string;
    discount?: string;
    action?: Action;
    departments?: string[];
    banners?: ImageUrls;
    logo?: Media;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    uid?: number;
    name?: string;
    priority_order?: number;
    slug?: string;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
type ThirdLevelChild = {
    uid?: number;
    childs?: any[];
    name?: string;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    _custom_json?: any;
};
type SecondLevelChild = {
    uid?: number;
    childs?: ThirdLevelChild[];
    name?: string;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    _custom_json?: any;
};
type Child = {
    uid?: number;
    childs?: SecondLevelChild[];
    name?: string;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
    _custom_json?: any;
};
type CategoryItems = {
    uid?: number;
    childs?: Child[];
    name?: string;
    slug?: string;
    action?: Action;
    banners?: ImageUrls;
};
type DepartmentCategoryTree = {
    items?: CategoryItems[];
    department?: string;
};
type CategoryListingResponse = {
    departments?: DepartmentIdentifier[];
    data?: DepartmentCategoryTree[];
};
type ApplicationProductListingResponse = {
    page: Page;
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    operators?: any;
    items?: ProductListingDetail[];
};
type ProductDetail = {
    uid?: number;
    similars?: string[];
    rating_count?: number;
    medias?: Media1[];
    image_nature?: string;
    highlights?: string[];
    rating?: number;
    color?: string;
    tryouts?: string[];
    brand?: ProductBrand;
    has_variant?: boolean;
    item_code?: string;
    promo_meta?: any;
    type?: string;
    description?: string;
    short_description?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    name?: string;
    product_online_date?: string;
    slug: string;
    teaser_tag?: any;
    attributes?: any;
    item_type?: string;
};
type InventoryPage = {
    has_next?: boolean;
    item_total: number;
    type: string;
    has_previous?: boolean;
    next_id?: string;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type ArticleQuery = {
    item_id: number;
    ignored_stores?: number[];
    size: string;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type AssignStoreArticle = {
    meta?: any;
    query?: ArticleQuery;
    article_assignment?: ArticleAssignment;
    quantity?: number;
    group_id?: string;
};
type AssignStore = {
    pincode: string;
    channel_type?: string;
    channel_identifier?: string;
    store_ids?: number[];
    app_id: string;
    articles: AssignStoreArticle[];
    company_id?: number;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    _id?: string;
    uid?: string;
    meta?: any;
    status: boolean;
    price_effective?: number;
    group_id?: string;
    store_id?: number;
    size: string;
    article_assignment: ArticleAssignment1;
    item_id: number;
    price_marked?: number;
    strategy_wise_listing?: any[];
    index?: number;
    quantity: number;
    company_id?: number;
    s_city?: string;
    store_pincode?: number;
};
type UserSerializer1 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetAddressSerializer = {
    address2?: string;
    pincode?: number;
    country_code?: string;
    country?: string;
    state?: string;
    city?: string;
    latitude?: number;
    longitude?: number;
    landmark?: string;
    address1?: string;
    address_type?: string;
};
type UserSerializer2 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetCompanySerializer = {
    stage?: string;
    uid?: number;
    business_type?: string;
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer2;
    name?: string;
    modified_on?: string;
    company_type?: string;
    created_on?: string;
    verified_on?: string;
    reject_reason?: string;
    created_by?: UserSerializer2;
    modified_by?: UserSerializer2;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
};
type InvoiceCredSerializer = {
    username?: string;
    password?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    weekday: string;
    closing?: LocationTimingSerializer;
    open: boolean;
    opening?: LocationTimingSerializer;
};
type GetLocationSerializer = {
    uid?: number;
    verified_by?: UserSerializer1;
    phone_number: string;
    modified_by?: UserSerializer1;
    notification_emails?: string[];
    created_on?: string;
    company?: GetCompanySerializer;
    product_return_config?: ProductReturnConfigSerializer;
    store_type?: string;
    address: GetAddressSerializer;
    modified_on?: string;
    code: string;
    warnings?: any;
    created_by?: UserSerializer1;
    integration_type?: LocationIntegrationType;
    display_name: string;
    stage?: string;
    contact_numbers?: SellerPhoneNumber[];
    manager?: LocationManagerSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    name: string;
    verified_on?: string;
    documents?: Document[];
    _custom_json?: any;
    timing?: LocationDayWiseSerializer[];
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
    uid: number;
    name?: string;
    is_active?: boolean;
    app_id: string;
    _custom_json?: any;
    logo?: string;
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
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type GetCompanyProfileSerializerResponse = {
    created_on?: string;
    business_country_info?: BusinessCountryInfo;
    verified_on?: string;
    business_details?: BusinessDetails;
    modified_by?: UserSerializer;
    notification_emails?: string[];
    addresses?: GetAddressSerializer[];
    franchise_enabled?: boolean;
    company_type: string;
    name?: string;
    uid: number;
    _custom_json?: any;
    taxes?: CompanyTaxesSerializer[];
    warnings?: any;
    verified_by?: UserSerializer;
    stage?: string;
    mode?: string;
    contact_details?: ContactDetails;
    created_by?: UserSerializer;
    modified_on?: string;
    documents?: Document[];
    business_type: string;
    business_info?: string;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type CreateUpdateAddressSerializer = {
    pincode: number;
    landmark?: string;
    address1: string;
    state: string;
    longitude: number;
    latitude: number;
    address_type: string;
    country: string;
    city: string;
    address2?: string;
    country_code?: string;
};
type UpdateCompany = {
    taxes?: CompanyTaxesSerializer1[];
    addresses?: CreateUpdateAddressSerializer[];
    contact_details?: ContactDetails;
    documents?: Document[];
    reject_reason?: string;
    franchise_enabled?: boolean;
    business_details?: BusinessDetails;
    _custom_json?: any;
    company_type?: string;
    business_type?: string;
    warnings?: any;
    name?: string;
    notification_emails?: string[];
    business_info?: string;
};
type ProfileSuccessResponse = {
    success?: boolean;
    uid?: number;
};
type DocumentsObj = {
    pending?: number;
    verified?: number;
};
type MetricsSerializer = {
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
    product?: DocumentsObj;
    uid?: number;
    store?: DocumentsObj;
    brand?: DocumentsObj;
    stage?: string;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    created_on?: string;
    verified_on?: string;
    modified_by?: UserSerializer;
    _locale_language?: any;
    name: string;
    uid?: number;
    synonyms?: string[];
    _custom_json?: any;
    banner?: BrandBannerSerializer;
    warnings?: any;
    verified_by?: UserSerializer;
    mode?: string;
    stage?: string;
    created_by?: UserSerializer;
    modified_on?: string;
    slug_key?: string;
    reject_reason?: string;
    logo?: string;
    description?: string;
};
type CreateUpdateBrandRequestSerializer = {
    company_id?: number;
    _locale_language?: any;
    name: string;
    logo: string;
    uid?: number;
    description?: string;
    synonyms?: string[];
    brand_tier?: string;
    _custom_json?: any;
    banner?: BrandBannerSerializer;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanySerializer = {
    addresses?: GetAddressSerializer[];
    created_by?: UserSerializer;
    modified_on?: string;
    market_channels?: string[];
    reject_reason?: string;
    created_on?: string;
    business_country_info?: BusinessCountryInfo;
    verified_on?: string;
    _custom_json?: any;
    company_type: string;
    business_type: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    name?: string;
    details?: CompanyDetails;
    notification_emails?: string[];
    uid?: number;
    stage?: string;
};
type CompanyBrandSerializer = {
    created_by?: UserSerializer;
    modified_on?: string;
    reject_reason?: string;
    created_on?: string;
    verified_on?: string;
    warnings?: any;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    uid?: number;
    brand?: GetBrandResponseSerializer;
    stage?: string;
    company?: CompanySerializer;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    company: number;
    uid?: number;
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
    landmark?: string;
    address1?: string;
    state?: string;
    longitude: number;
    latitude: number;
    address_type?: string;
    country?: string;
    city?: string;
    address2?: string;
    country_code?: string;
};
type LocationSerializer = {
    gst_credentials?: InvoiceDetailsSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    documents?: Document[];
    holiday?: HolidaySchemaSerializer[];
    code: string;
    timing?: LocationDayWiseSerializer[];
    _custom_json?: any;
    warnings?: any;
    name: string;
    address: AddressSerializer;
    notification_emails?: string[];
    uid?: number;
    store_type?: string;
    display_name: string;
    contact_numbers?: SellerPhoneNumber[];
    manager?: LocationManagerSerializer;
    stage?: string;
    company: number;
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
type Validation = {
    anonymous?: boolean;
    app_id?: string[];
    user_registered_after?: string;
};
type CouponSchedule = {
    cron?: string;
    next_schedule?: any[];
    duration?: number;
    start?: string;
    end?: string;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Rule = {
    max?: number;
    value?: number;
    discount_qty?: number;
    min?: number;
    key?: number;
};
type State = {
    is_public?: boolean;
    is_archived?: boolean;
    is_display?: boolean;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
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
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type UsesRemaining = {
    user?: number;
    total?: number;
    app?: number;
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
    networks?: string[];
    uses?: PaymentAllowValue;
    types?: string[];
};
type PriceRange = {
    max?: number;
    min?: number;
};
type Restrictions = {
    post_order?: PostOrder;
    coupon_allowed?: boolean;
    user_groups?: number[];
    user_type?: string;
    bulk_bundle?: BulkBundleRestriction;
    uses?: UsesRestriction;
    ordering_stores?: number[];
    payments?: any;
    platforms?: string[];
    price_range?: PriceRange;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type RuleDefinition = {
    calculate_on: string;
    is_exact?: boolean;
    scope?: string[];
    currency_code?: string;
    value_type: string;
    auto_apply?: boolean;
    type: string;
    applicable_on: string;
};
type Validity = {
    priority?: number;
};
type CouponAdd = {
    tags?: string[];
    validation?: Validation;
    _schedule?: CouponSchedule;
    date_meta?: CouponDateMeta;
    rule: Rule[];
    identifiers: Identifier;
    state?: State;
    ownership: Ownership;
    display_meta: DisplayMeta;
    code: string;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    type_slug: string;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    validity: Validity;
};
type CouponsResponse = {
    items?: CouponAdd;
    page?: Page;
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
    tags?: string[];
    validation?: Validation;
    _schedule?: CouponSchedule;
    date_meta?: CouponDateMeta;
    rule: Rule[];
    identifiers: Identifier;
    state?: State;
    ownership: Ownership;
    display_meta: DisplayMeta;
    code: string;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    type_slug: string;
    action?: CouponAction;
    rule_definition: RuleDefinition;
    validity: Validity;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type CompareObject = {
    less_than?: number;
    less_than_equals?: number;
    equals?: number;
    greater_than?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    item_exclude_sku?: string[];
    item_size?: string[];
    cart_total?: CompareObject;
    cart_quantity?: CompareObject;
    buy_rules?: string[];
    item_sku?: string[];
    item_brand?: number[];
    available_zones?: string[];
    item_exclude_category?: number[];
    item_exclude_company?: number[];
    item_exclude_store?: number[];
    product_tags?: string[];
    cart_unique_item_quantity?: CompareObject;
    item_store?: number[];
    item_category?: number[];
    all_items?: boolean;
    item_id?: number[];
    item_company?: number[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_id?: number[];
    item_exclude_brand?: number[];
};
type DiscountOffer = {
    max_usage_per_transaction?: number;
    discount_price?: number;
    min_offer_quantity?: number;
    discount_amount?: number;
    max_offer_quantity?: number;
    discount_percentage?: number;
    code?: string;
    partial_can_ret?: boolean;
    max_discount_amount?: number;
    apportion_discount?: boolean;
};
type DiscountRule = {
    discount_type: string;
    buy_condition: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue1;
    type: string;
};
type Restrictions1 = {
    post_order?: PostOrder1;
    anonymous_users?: boolean;
    order_quantity?: number;
    user_groups?: number[];
    uses: UsesRestriction1;
    user_registered?: UserRegistered;
    payments?: PromotionPaymentModes[];
    platforms?: string[];
    user_id?: string[];
};
type PromotionSchedule = {
    cron?: string;
    next_schedule?: any[];
    duration?: number;
    start: string;
    end?: string;
    published: boolean;
};
type DisplayMeta1 = {
    name?: string;
    offer_label?: string;
    description?: string;
    offer_text?: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionListItem = {
    mode: string;
    discount_rules: DiscountRule[];
    ownership: Ownership1;
    restrictions?: Restrictions1;
    promotion_type: string;
    apply_all_discount?: boolean;
    promo_group: string;
    buy_rules: any;
    application_id: string;
    calculate_on?: string;
    _schedule?: PromotionSchedule;
    display_meta: DisplayMeta1;
    code?: string;
    stackable?: boolean;
    _custom_json?: any;
    currency?: string;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
    apply_priority?: number;
    visiblility?: Visibility;
    apply_exclusive?: string;
    post_order_action?: PromotionAction;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    mode: string;
    discount_rules: DiscountRule[];
    ownership: Ownership1;
    restrictions?: Restrictions1;
    promotion_type: string;
    apply_all_discount?: boolean;
    promo_group: string;
    buy_rules: any;
    application_id: string;
    calculate_on?: string;
    _schedule?: PromotionSchedule;
    display_meta: DisplayMeta1;
    code?: string;
    stackable?: boolean;
    _custom_json?: any;
    currency?: string;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
    apply_priority?: number;
    visiblility?: Visibility;
    apply_exclusive?: string;
    post_order_action?: PromotionAction;
};
type PromotionUpdate = {
    mode: string;
    discount_rules: DiscountRule[];
    ownership: Ownership1;
    restrictions?: Restrictions1;
    promotion_type: string;
    apply_all_discount?: boolean;
    promo_group: string;
    buy_rules: any;
    application_id: string;
    calculate_on?: string;
    _schedule?: PromotionSchedule;
    display_meta: DisplayMeta1;
    code?: string;
    stackable?: boolean;
    _custom_json?: any;
    currency?: string;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
    apply_priority?: number;
    visiblility?: Visibility;
    apply_exclusive?: string;
    post_order_action?: PromotionAction;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    subtitle?: string;
    title?: string;
    entity_type?: string;
    entity_slug?: string;
    created_on?: string;
    example?: string;
    type?: string;
    modified_on?: string;
    is_hidden?: boolean;
    description?: string;
};
type CartItem = {
    quantity?: number;
    product_id: string;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type RawBreakup = {
    subtotal?: number;
    convenience_fee?: number;
    vog?: number;
    fynd_cash?: number;
    delivery_charge?: number;
    you_saved?: number;
    cod_charge?: number;
    coupon?: number;
    total?: number;
    discount?: number;
    gst_charges?: number;
    mrp_total?: number;
};
type CouponBreakup = {
    max_discount_value?: number;
    uid?: string;
    sub_title?: string;
    title?: string;
    value?: number;
    message?: string;
    code?: string;
    type?: string;
    coupon_type?: string;
    coupon_value?: number;
    minimum_cart_value?: number;
    description?: string;
    is_applied?: boolean;
};
type DisplayBreakup = {
    display?: string;
    currency_code?: string;
    value?: number;
    message?: string[];
    currency_symbol?: string;
    key?: string;
};
type LoyaltyPoints = {
    description?: string;
    is_applied?: boolean;
    total?: number;
    applicable?: number;
};
type CartBreakup = {
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
};
type ProductPrice = {
    add_on?: number;
    currency_code?: string;
    effective?: number;
    marked?: number;
    currency_symbol?: string;
    selling?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    marked?: number;
    currency_symbol?: string;
    effective?: number;
    currency_code?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    uid?: string;
    seller?: BaseInfo;
    extra_meta?: any;
    product_group_tags?: string[];
    store?: BaseInfo;
    type?: string;
    size?: string;
    _custom_json?: any;
    price?: ArticlePriceInfo;
    quantity?: number;
    parent_item_identifiers?: any;
};
type PromoMeta = {
    message?: string;
};
type ProductAvailability = {
    deliverable?: boolean;
    sizes?: string[];
    is_valid?: boolean;
    out_of_stock?: boolean;
    other_store_quantity?: number;
};
type DiscountRulesApp = {
    raw_offer?: any;
    offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type FreeGiftItem = {
    item_name?: string;
    item_images_url?: string[];
    item_brand_name?: string;
    item_price_details?: any;
    item_slug?: string;
    item_id?: number;
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
    quantity?: number;
    article_id?: string;
};
type AppliedPromotion = {
    offer_text?: string;
    promotion_group?: string;
    buy_rules?: BuyRules[];
    promo_id?: string;
    mrp_promotion?: boolean;
    promotion_name?: string;
    article_quantity?: number;
    discount_rules?: DiscountRulesApp[];
    amount?: number;
    ownership?: Ownership2;
    applied_free_articles?: AppliedFreeArticles[];
    promotion_type?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type ProductImage = {
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    url?: string;
    query?: ActionQuery;
    type?: string;
};
type CartProduct = {
    categories?: CategoryInfo[];
    images?: ProductImage[];
    item_code?: string;
    uid?: number;
    net_quantity?: NetQuantity;
    type?: string;
    name?: string;
    action?: ProductAction;
    slug?: string;
    brand?: BaseInfo;
};
type CartProductInfo = {
    price_per_unit?: ProductPriceInfo;
    discount?: string;
    article?: ProductArticle;
    promo_meta?: PromoMeta;
    availability?: ProductAvailability;
    promotions_applied?: AppliedPromotion[];
    identifiers: CartProductIdentifer;
    message?: string;
    coupon_message?: string;
    is_set?: boolean;
    bulk_offer?: any;
    price?: ProductPriceInfo;
    quantity?: number;
    key?: string;
    product?: CartProduct;
    parent_item_identifiers?: any;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    message?: string;
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    country?: string;
    area?: string;
    area_code: string;
    area_code_slug?: string;
    city?: string;
    country_code?: string;
    meta?: any;
    address_type?: string;
    pincode?: number;
    email?: string;
    state?: string;
    phone?: number;
    name?: string;
    landmark?: string;
    address?: string;
    country_iso_code?: string;
    country_phone_code?: string;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
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
    items?: CartProductInfo[];
    message?: string;
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
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
    cod_charges: number;
    loyalty_discount?: number;
    amount_paid: number;
    delivery_charges: number;
    meta?: CartItemMeta;
    price_effective: number;
    size: string;
    price_marked: number;
    files?: OpenApiFiles[];
    extra_meta?: any;
    payment_methods: MultiTenderPaymentMethod[];
    cashback_applied: number;
    employee_discount?: number;
    discount: number;
    quantity?: number;
    coupon_effective_discount: number;
    product_id: number;
};
type OpenApiPlatformCheckoutReq = {
    billing_address: ShippingAddress;
    cod_charges: number;
    cart_items: OpenApiOrderItem[];
    cart_value: number;
    coupon?: string;
    cashback_applied: number;
    employee_discount?: any;
    coupon_value: number;
    payment_mode?: string;
    coupon_code: string;
    affiliate_order_id?: string;
    loyalty_discount?: number;
    order_id?: string;
    gstin?: string;
    currency_code?: string;
    files?: OpenApiFiles[];
    comment?: string;
    shipping_address?: ShippingAddress;
    payment_methods: MultiTenderPaymentMethod[];
    delivery_charges: number;
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    success?: boolean;
    order_id: string;
    message?: string;
};
type AbandonedCart = {
    pick_up_customer_details?: any;
    meta?: any;
    cart_value?: number;
    fynd_credits?: any;
    created_on: string;
    is_default: boolean;
    is_archive?: boolean;
    last_modified: string;
    payment_mode?: string;
    uid: number;
    order_id?: string;
    gstin?: string;
    articles: any[];
    comment?: string;
    expire_at: string;
    merge_qty?: boolean;
    discount?: number;
    promotion?: any;
    cod_charges?: any;
    cashback: any;
    fc_index_map?: number[];
    shipments?: any[];
    _id: string;
    app_id?: string;
    coupon?: any;
    is_active?: boolean;
    checkout_mode?: string;
    bulk_coupon_discount?: number;
    buy_now?: boolean;
    payments?: any;
    payment_methods?: any[];
    delivery_charges?: any;
    user_id: string;
};
type AbandonedCartResponse = {
    items?: AbandonedCart[];
    message?: string;
    page?: Page;
    success?: boolean;
    result?: any;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    breakup_values?: CartBreakup;
    pan_no?: string;
    items?: CartProductInfo[];
    gstin?: string;
    coupon_text?: string;
    id?: string;
    pan_config?: any;
    delivery_charge_info?: string;
    message?: string;
    comment?: string;
    payment_selection_lock?: PaymentSelectionLock;
    last_modified?: string;
    delivery_promise?: ShipmentPromise;
    buy_now?: boolean;
    is_valid?: boolean;
    restrict_checkout?: boolean;
    checkout_mode?: string;
    currency?: CartCurrency;
};
type AddProductCart = {
    store_id?: number;
    display?: string;
    _custom_json?: any;
    item_size?: string;
    extra_meta?: any;
    product_group_tags?: string[];
    article_assignment?: any;
    seller_id?: number;
    parent_item_identifiers?: any;
    pos?: boolean;
    quantity?: number;
    article_id?: string;
    item_id?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
    new_cart?: boolean;
};
type AddCartDetailResponse = {
    cart?: CartDetailResponse;
    success?: boolean;
    partial?: boolean;
    message?: string;
};
type UpdateProductCart = {
    item_size?: string;
    extra_meta?: any;
    identifiers: CartProductIdentifer;
    item_id?: number;
    item_index?: number;
    _custom_json?: any;
    quantity?: number;
    article_id?: string;
    parent_item_identifiers?: any;
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
    meta?: any;
    token?: string;
    created_on?: string;
    source?: any;
};
type SharedCart = {
    message?: string;
    is_valid?: boolean;
    restrict_checkout?: boolean;
    last_modified?: string;
    shared_cart_details?: SharedCartDetails;
    uid?: string;
    gstin?: string;
    coupon_text?: string;
    id?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    currency?: CartCurrency;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    cart_id?: number;
    buy_now?: boolean;
    checkout_mode?: string;
};
type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
type CartList = {
    pick_up_customer_details?: string;
    cart_value?: string;
    created_on?: string;
    cart_id?: string;
    item_counts?: string;
    user_id?: string;
};
type MultiCartResponse = {
    success?: boolean;
    data?: CartList[];
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    message?: string;
    is_valid?: boolean;
    restrict_checkout?: boolean;
    last_modified?: string;
    user?: UserInfo;
    gstin?: string;
    coupon_text?: string;
    id?: string;
    pan_config?: any;
    delivery_charge_info?: string;
    comment?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_promise?: ShipmentPromise;
    currency?: CartCurrency;
    breakup_values?: CartBreakup;
    pan_no?: string;
    items?: CartProductInfo[];
    buy_now?: boolean;
    checkout_mode?: string;
};
type DeleteCartDetailResponse = {
    success?: boolean;
    message?: string;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type Coupon = {
    max_discount_value?: number;
    sub_title?: string;
    title?: string;
    is_applied?: boolean;
    expires_on?: string;
    message?: string;
    coupon_type?: string;
    coupon_value?: number;
    is_applicable?: boolean;
    minimum_cart_value?: number;
    description?: string;
    coupon_code?: string;
};
type PageCoupon = {
    has_previous?: boolean;
    total_item_count?: number;
    current?: number;
    total?: number;
    has_next?: boolean;
};
type GetCouponResponse = {
    available_coupon_list?: Coupon[];
    page?: PageCoupon;
};
type ApplyCouponRequest = {
    coupon_code: string;
};
type GeoLocation = {
    latitude?: number;
    longitude?: number;
};
type PlatformAddress = {
    area_code?: string;
    country_code?: string;
    meta?: any;
    email?: string;
    address_type?: string;
    landmark?: string;
    address?: string;
    country?: string;
    city?: string;
    id?: string;
    state?: string;
    phone?: string;
    google_map_point?: any;
    geo_location?: GeoLocation;
    name?: string;
    tags?: string[];
    created_by_user_id?: string;
    is_default_address?: boolean;
    area?: string;
    area_code_slug?: string;
    is_active?: boolean;
    cart_id?: string;
    checkout_mode?: string;
    user_id?: string;
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
    id?: string;
    is_updated?: boolean;
    is_default_address?: boolean;
};
type DeleteAddressResponse = {
    id?: string;
    is_deleted?: boolean;
};
type PlatformSelectCartAddressRequest = {
    checkout_mode?: string;
    id?: string;
    billing_address_id?: string;
    cart_id?: string;
};
type ShipmentResponse = {
    dp_id?: string;
    box_type?: string;
    shipment_type?: string;
    items?: CartProductInfo[];
    fulfillment_id?: number;
    shipments?: number;
    promise?: ShipmentPromise;
    dp_options?: any;
    order_type?: string;
    fulfillment_type?: string;
};
type CartShipmentsResponse = {
    shipments?: ShipmentResponse[];
    error?: boolean;
    message?: string;
    is_valid?: boolean;
    restrict_checkout?: boolean;
    last_modified?: string;
    currency?: CartCurrency;
    uid?: string;
    breakup_values?: CartBreakup;
    gstin?: string;
    coupon_text?: string;
    id?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    comment?: string;
    cart_id?: number;
    delivery_promise?: ShipmentPromise;
    buy_now?: boolean;
    checkout_mode?: string;
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
    pan_no?: string;
    pick_up_customer_details?: any;
    gstin?: string;
    comment?: string;
    checkout_mode?: string;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type StaffCheckout = {
    user: string;
    employee_code?: string;
    _id: string;
    last_name: string;
    first_name: string;
};
type Files = {
    key: string;
    values: string[];
};
type PlatformCartCheckoutDetailRequest = {
    pick_at_store_uid?: number;
    aggregator?: string;
    meta?: any;
    staff?: StaffCheckout;
    payment_mode: string;
    delivery_address?: any;
    id: string;
    files?: Files[];
    device_id?: string;
    billing_address_id?: string;
    pos?: boolean;
    payment_auto_confirm?: boolean;
    billing_address?: any;
    extra_meta?: any;
    ordering_store?: number;
    merchant_code?: string;
    order_type: string;
    payment_identifier?: string;
    callback_url?: string;
    address_id?: string;
    checkout_mode?: string;
    payment_params?: any;
    user_id: string;
};
type CheckCart = {
    message?: string;
    store_code?: string;
    is_valid?: boolean;
    restrict_checkout?: boolean;
    last_modified?: string;
    success?: boolean;
    uid?: string;
    cod_available?: boolean;
    order_id?: string;
    gstin?: string;
    coupon_text?: string;
    id?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    comment?: string;
    error_message?: string;
    delivery_promise?: ShipmentPromise;
    cod_charges?: number;
    store_emps?: any[];
    cod_message?: string;
    currency?: CartCurrency;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    cart_id?: number;
    user_type?: string;
    delivery_charge_order_value?: number;
    buy_now?: boolean;
    checkout_mode?: string;
    delivery_charges?: number;
};
type CartCheckoutResponse = {
    callback_url?: string;
    cart?: CheckCart;
    order_id?: string;
    data?: any;
    app_intercept_url?: string;
    message?: string;
    payment_confirm_url?: string;
    success?: boolean;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    country?: string;
    uid?: number;
    area?: string;
    area_code?: string;
    area_code_slug?: string;
    city?: string;
    id?: number;
    address_type?: string;
    email?: string;
    pincode?: number;
    state?: string;
    store_code?: string;
    phone?: string;
    name?: string;
    landmark?: string;
    address?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    payment_identifier?: string;
    address_id?: string;
    id?: string;
    merchant_code?: string;
    aggregator_name?: string;
    payment_mode?: string;
};
type CouponValidity = {
    title?: string;
    display_message_en?: string;
    code?: string;
    valid?: boolean;
    discount?: number;
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
