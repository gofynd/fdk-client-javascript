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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcDevice, EdcDeviceDetailsResponse, EdcAddRequest, EdcDeviceAddResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, PaymentModeInfo, PlatformItem, GSTDetailsData, Prices, BagUnit, ShipmentItemFulFillingStore, ShipmentStatus, UserDataInfo, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, DPDetailsData, ShipmentPayments, OrderDetailsData, ShipmentStatusData, TrackingList, BagGST, Identifier, FinancialBreakup, OrderBrandName, OrderBagArticle, PlatformDeliveryAddress, BagStateMapper, CurrentStatus, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, BagConfigs, OrderBags, UserDetailsData, BagStatusHistory, FulfillingStore, ShipmentInfoResponse, OrderingStore, PlatformShipment, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, B2BPODetails, BagMeta, BagGSTDetails, Brand, ReturnConfig, Weight, Dimensions, Article, BagReturnableCancelableStatus, AffiliateMeta, AffiliateBagDetails, Dates, Attributes, Item, PDFLinks, EInvoice, EinvoiceInfo, DebugInfo, Formatted, LockData, BuyerDetails, ShipmentTimeStamp, ShipmentMeta, AffiliateDetails, StoreAddress, EInvoicePortalDetails, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, StoreMeta, Store, ArticleDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderPriority, OrderUser, UserData, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, PaymentMethod, PaymentInfo, Tax, Charge, ShippingInfo, BillingInfo, ProcessingDates, LineItem, Shipment, TaxInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, LimitedProductData, Size, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, GetMultiSizeGuide, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersKey, ProductFiltersValue, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, BannerImage, ImageUrls, Media1, CollectionQuery, GetCollectionDetailNest, GetCollectionListingResponse, CollectionSchedule, SeoDetail, CollectionImage, CollectionBanner, CollectionBadge, UserInfo, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Media2, Hierarchy, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, Logo, ReturnConfigResponse, Image, NetQuantityResponse, ProductPublished, Product, ProductListingResponse, CustomOrder, Trader, NetQuantity, TeaserTag, TaxIdentifier, ProductPublish, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ProductCreateUpdate, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, ManufacturerResponse, Trader1, BrandMeta, CompanyMeta, ReturnConfig1, DimensionResponse, PriceMeta, WeightResponse, QuantityBase, Quantities, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportQuantityFilter, InventoryExportAdvanceOption, InventoryExportJob, InventoryExportFilter, InventoryExportRequest, InventoryExportResponse, ManufacturerResponse1, Trader2, BrandMeta1, CompanyMeta1, ReturnConfig2, DimensionResponse1, PriceArticle, WeightResponse1, ArticleStoreResponse, Quantity, QuantitiesArticle, GetInventories, GetInventoriesResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, LocationTimingSerializer, LocationDayWiseSerializer, UserSerializer1, GetAddressSerializer, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, SellerPhoneNumber, LocationManagerSerializer, LocationIntegrationType, ProductReturnConfigSerializer, UserSerializer2, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, ContactDetails, BusinessCountryInfo, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStores, OrderingStoresResponse, PostOrder, PaymentAllowValue, PaymentModes, UsesRemaining, UsesRestriction, BulkBundleRestriction, PriceRange, Restrictions, RuleDefinition, CouponAction, Validity, CouponSchedule, Validation, CouponDateMeta, Rule, DisplayMetaDict, DisplayMeta, CouponAuthor, Ownership, State, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionSchedule, PromotionDateMeta, PromotionAuthor, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, Ownership1, Visibility, PostOrder1, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, Restrictions1, DisplayMeta1, PromotionAction, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, PromoMeta, CartProductIdentifer, ProductPrice, ProductPriceInfo, ProductAvailability, ActionQuery, ProductAction, BaseInfo, CategoryInfo, ProductImage, CartProduct, BasePrice, ArticlePriceInfo, ProductArticle, FreeGiftItem, AppliedFreeArticles, Ownership2, DiscountRulesApp, AppliedPromotion, CartProductInfo, LoyaltyPoints, CouponBreakup, DisplayBreakup, RawBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, Files, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    excluded_fields: string[];
    app_id: string;
    display_fields: string[];
    created: boolean;
    aggregators?: any[];
    success: boolean;
};
type ErrorCodeDescription = {
    description: string;
    success: boolean;
    code: string;
};
type PaymentGatewayConfig = {
    config_type: string;
    secret: string;
    merchant_salt: string;
    is_active?: boolean;
    key: string;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    is_active?: boolean;
    aggregator_name?: PaymentGatewayConfig;
};
type PaymentGatewayToBeReviewed = {
    success: boolean;
    aggregator: string[];
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
type IntentApp = {
    logos?: PaymentModeLogo;
    package_name?: string;
    code?: string;
    display_name?: string;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    intent_app_error_list?: string[];
    expired?: boolean;
    merchant_code?: string;
    card_number?: string;
    card_issuer?: string;
    intent_flow?: boolean;
    cod_limit_per_order?: number;
    intent_app?: IntentApp[];
    card_reference?: string;
    logo_url?: PaymentModeLogo;
    fynd_vpa?: string;
    card_isin?: string;
    aggregator_name: string;
    nickname?: string;
    display_priority?: number;
    timeout?: number;
    card_fingerprint?: string;
    card_type?: string;
    card_brand_image?: string;
    remaining_limit?: number;
    card_name?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    card_brand?: string;
    card_token?: string;
    code?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    cod_limit?: number;
    card_id?: string;
    name?: string;
    retry_count?: number;
    display_name?: string;
    exp_year?: number;
    exp_month?: number;
};
type RootPaymentMode = {
    list?: PaymentModeList[];
    add_card_enabled?: boolean;
    save_card?: boolean;
    aggregator_name?: string;
    display_priority: number;
    name: string;
    is_pay_by_card_pl?: boolean;
    anonymous_enable?: boolean;
    display_name: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type Payout = {
    customers: any;
    more_attributes: any;
    transfer_type: string;
    is_default: boolean;
    is_active: boolean;
    unique_transfer_no: any;
    payouts_aggregators: any[];
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    ifsc_code: string;
    account_type: string;
    city?: string;
    account_holder?: string;
    branch_name?: string;
    country?: string;
    account_no?: string;
    pincode?: number;
    bank_name?: string;
    state?: string;
};
type PayoutRequest = {
    bank_details: PayoutBankDetails;
    users: any;
    aggregator: string;
    transfer_type: string;
    is_active: boolean;
    unique_external_id: string;
};
type PayoutResponse = {
    bank_details: any;
    users: any;
    created: boolean;
    aggregator: string;
    transfer_type: string;
    payouts: any;
    payment_status: string;
    is_active: boolean;
    unique_transfer_no: string;
    success: boolean;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_active: boolean;
    is_default: boolean;
};
type UpdatePayoutRequest = {
    is_active: boolean;
    unique_external_id: string;
    is_default: boolean;
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
    config: any;
    aggregator: string;
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
    description: string;
    success: boolean;
    code: string;
};
type BankDetailsForOTP = {
    ifsc_code: string;
    account_holder: string;
    branch_name: string;
    account_no: string;
    bank_name: string;
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
    email: string;
    beneficiary_id: string;
    mobile?: string;
    modified_on: string;
    account_no: string;
    account_holder: string;
    branch_name?: string;
    address: string;
    created_on: string;
    title: string;
    subtitle: string;
    is_active: boolean;
    delights_user_name?: string;
    transfer_mode: string;
    bank_name: string;
    ifsc_code: string;
    id: number;
    display_name: string;
    comment?: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    payment_gateway?: string;
    payment_id?: string;
    order_id?: string;
    current_status?: string;
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
    enabled: boolean;
    mode_of_payment: string;
    payment_selection_lock?: any;
    source: string;
    cod_charges?: number;
    callback_url?: any;
    methods: any;
    cod_amount_limit?: number;
    anonymous_cod?: boolean;
};
type PlatfromPaymentConfig = {
    success: boolean;
    data: PlatformPaymentOptions;
    message: string;
};
type UpdatePlatformPaymentConfig = {
    payment_selection_lock?: any;
    cod_charges?: number;
    methods: any;
    cod_amount_limit?: number;
    anonymous_cod?: boolean;
};
type CODdata = {
    usages: number;
    limit: number;
    is_active: boolean;
    remaining_limit: number;
    user_id: string;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
};
type SetCODForUserRequest = {
    mobileno: string;
    is_active: boolean;
    merchant_user_id: string;
};
type SetCODOptionResponse = {
    success: boolean;
    message: string;
};
type EdcAggregatorAndModelListResponse = {
    success: boolean;
    edc_models: any;
    aggregators: any;
};
type StatisticsData = {
    active_device_count: number;
    inactive_device_count: number;
    store_count: number;
    filter_options: any;
};
type EdcDeviceStatsResponse = {
    success: boolean;
    statistics: StatisticsData;
};
type EdcDevice = {
    aggregator_id: number;
    terminal_serial_no: string;
    edc_models_name?: string;
    terminal_unique_identifier: string;
    aggregator_name?: string;
    store_name: string;
    device_tag: string;
    edc_models_id: number;
    application_id: string;
    is_active: string;
    edc_device_serial_no: string;
    store_id: number;
    merchant_store_pos_code?: string;
};
type EdcDeviceDetailsResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcAddRequest = {
    aggregator_id: number;
    terminal_serial_no: string;
    edc_model_id: number;
    store_name: string;
    device_tag?: string;
    edc_device_serial_no: string;
    store_id: number;
};
type EdcDeviceAddResponse = {
    success: boolean;
    data: EdcDevice;
};
type EdcUpdateRequest = {
    aggregator_id?: number;
    terminal_serial_no: string;
    edc_model_id: number;
    store_name?: string;
    device_tag?: string;
    is_active?: string;
    edc_device_serial_no?: string;
    store_id?: number;
    merchant_store_pos_code?: string;
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
    vpa?: string;
    email: string;
    amount: number;
    aggregator: string;
    method: string;
    order_id: string;
    contact: string;
    merchant_order_id: string;
    razorpay_payment_id?: string;
    device_id?: string;
    timeout?: number;
    currency: string;
    customer_id: string;
};
type PaymentInitializationResponse = {
    vpa?: string;
    polling_url: string;
    aggregator_order_id?: string;
    amount?: number;
    bqr_image?: string;
    aggregator: string;
    method: string;
    upi_poll_url?: string;
    status?: string;
    merchant_order_id: string;
    razorpay_payment_id?: string;
    virtual_id?: string;
    device_id?: string;
    success: boolean;
    timeout?: number;
    currency?: string;
    customer_id?: string;
};
type PaymentStatusUpdateRequest = {
    vpa?: string;
    email: string;
    amount: number;
    aggregator: string;
    method: string;
    order_id: string;
    status: string;
    contact: string;
    merchant_order_id: string;
    device_id?: string;
    currency: string;
    customer_id: string;
};
type PaymentStatusUpdateResponse = {
    aggregator_name: string;
    status: string;
    retry: boolean;
    redirect_url?: string;
    success?: boolean;
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
    name?: string;
    value?: string;
    text: string;
};
type FiltersInfo = {
    type: string;
    value: string;
    options?: FilterInfoOption[];
    text: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type PlatformItem = {
    department_id?: number;
    l3_category?: number;
    size?: string;
    id?: number;
    can_return?: boolean;
    l1_category?: string[];
    code?: string;
    l3_category_name?: string;
    color?: string;
    image?: string[];
    name?: string;
    images?: string[];
    can_cancel?: boolean;
};
type GSTDetailsData = {
    brand_calculated_amount: number;
    gst_fee: number;
    value_of_good: number;
    gstin_code: string;
    tax_collected_at_source: number;
};
type Prices = {
    price_marked?: number;
    cashback?: number;
    coupon_value?: number;
    delivery_charge?: number;
    value_of_good?: number;
    fynd_credits?: number;
    refund_amount?: number;
    cashback_applied?: number;
    price_effective?: number;
    promotion_effective_discount?: number;
    cod_charges?: number;
    amount_paid?: number;
    tax_collected_at_source?: number;
    discount?: number;
    amount_paid_roundoff?: number;
    refund_credit?: number;
};
type BagUnit = {
    item?: PlatformItem;
    item_quantity: number;
    bag_id: number;
    can_return?: boolean;
    gst?: GSTDetailsData;
    prices?: Prices;
    total_shipment_bags: number;
    status: any;
    ordering_channel: string;
    shipment_id: string;
    can_cancel?: boolean;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type ShipmentStatus = {
    status: string;
    ops_status: string;
    hex_code: string;
    title: string;
    actual_status: string;
};
type UserDataInfo = {
    uid?: number;
    mobile?: string;
    gender?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    avis_user_id?: string;
    is_anonymous_user?: boolean;
    name?: string;
};
type ShipmentItem = {
    company?: any;
    total_bags_count: number;
    application?: any;
    id: string;
    shipment_created_at: number;
    channel?: any;
    payment_mode_info?: PaymentModeInfo;
    bags?: BagUnit[];
    created_at: string;
    prices?: Prices;
    fulfilling_centre: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    total_shipments_in_order: number;
    sla?: any;
    payment_methods?: any;
    shipment_status?: ShipmentStatus;
    user?: UserDataInfo;
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    applied_filters?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type DPDetailsData = {
    track_url?: string;
    country?: string;
    pincode?: string;
    id?: number;
    gst_tag?: string;
    name?: string;
    eway_bill_id?: string;
    awb_no?: string;
};
type ShipmentPayments = {
    logo?: string;
    mode?: string;
    source?: string;
};
type OrderDetailsData = {
    order_date?: string;
    fynd_order_id: string;
    affiliate_id?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    cod_charges?: string;
    tax_details?: any;
    order_value?: string;
    source?: string;
};
type ShipmentStatusData = {
    id?: number;
    created_at?: string;
    status?: string;
    shipment_id?: string;
    bag_list?: string[];
};
type TrackingList = {
    is_current?: boolean;
    text: string;
    status: string;
    is_passed?: boolean;
    time?: string;
};
type BagGST = {
    brand_calculated_amount?: number;
    is_default_hsn_code?: boolean;
    gst_fee?: number;
    gst_tax_percentage?: number;
    value_of_good?: number;
    hsn_code?: string;
    gst_tag?: string;
    gstin_code?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    brand_calculated_amount: number;
    transfer_price: number;
    size: string;
    price_effective: number;
    cod_charges: number;
    amount_paid: number;
    amount_paid_roundoff?: number;
    identifiers: Identifier;
    fynd_credits: number;
    cashback_applied: number;
    hsn_code: string;
    tax_collected_at_source?: number;
    discount: number;
    refund_credit: number;
    price_marked: number;
    gst_fee: number;
    item_name: string;
    gst_tax_percentage: number;
    delivery_charge: number;
    added_to_fynd_cash: boolean;
    total_units: number;
    gst_tag: string;
    cashback: number;
    coupon_value: number;
    value_of_good: number;
    coupon_effective_discount: number;
    promotion_effective_discount: number;
};
type OrderBrandName = {
    company?: string;
    created_on: string;
    logo: string;
    id: number;
    brand_name: string;
    modified_on?: string;
};
type OrderBagArticle = {
    identifiers?: any;
    uid?: string;
    return_config?: any;
};
type PlatformDeliveryAddress = {
    address1?: string;
    phone?: string;
    landmark?: string;
    latitude?: number;
    country?: string;
    city?: string;
    pincode?: string;
    version?: string;
    longitude?: number;
    address_type?: string;
    email?: string;
    created_at?: string;
    updated_at?: string;
    contact_person?: string;
    address_category?: string;
    address2?: string;
    area?: string;
    state?: string;
};
type BagStateMapper = {
    display_name: string;
    app_display_name?: string;
    app_facing?: boolean;
    notify_customer?: boolean;
    bs_id: number;
    is_active?: boolean;
    journey_type: string;
    state_type: string;
    app_state_name?: string;
    name: string;
};
type CurrentStatus = {
    bag_id?: number;
    shipment_id?: string;
    current_status_id: number;
    kafka_sync?: boolean;
    created_at?: string;
    bag_state_mapper?: BagStateMapper;
    status?: string;
    updated_at?: number;
    store_id?: number;
    state_type?: string;
    state_id?: number;
    delivery_awb_number?: string;
    delivery_partner_id?: number;
};
type DiscountRules = {
    value?: number;
    type?: string;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    cart_conditions?: any;
    item_criteria?: ItemCriterias;
};
type AppliedPromos = {
    discount_rules?: DiscountRules[];
    mrp_promotion?: boolean;
    amount?: number;
    promo_id?: string;
    promotion_name?: string;
    promotion_type?: string;
    article_quantity?: number;
    buy_rules?: BuyRules[];
};
type BagConfigs = {
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
    allow_force_return: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
};
type OrderBags = {
    bag_id: number;
    seller_identifier?: string;
    gst_details?: BagGST;
    financial_breakup?: FinancialBreakup;
    quantity?: number;
    can_return?: boolean;
    brand?: OrderBrandName;
    article?: OrderBagArticle;
    parent_promo_bags?: any;
    delivery_address?: PlatformDeliveryAddress;
    current_status?: CurrentStatus;
    entity_type?: string;
    applied_promos?: AppliedPromos[];
    item?: PlatformItem;
    display_name?: string;
    bag_configs?: BagConfigs;
    line_number?: number;
    prices?: Prices;
    identifier?: string;
    can_cancel?: boolean;
};
type UserDetailsData = {
    country: string;
    city: string;
    pincode: string;
    email?: string;
    address: string;
    state: string;
    name: string;
    phone: string;
};
type BagStatusHistory = {
    forward?: boolean;
    display_name?: string;
    bag_id?: number;
    app_display_name?: string;
    kafka_sync?: boolean;
    created_at?: string;
    bag_state_mapper?: BagStateMapper;
    status: string;
    state_id?: number;
    updated_at?: string;
    reasons?: any[];
    bsh_id?: number;
    store_id?: number;
    state_type?: string;
    shipment_id?: string;
    delivery_awb_number?: string;
    delivery_partner_id?: number;
};
type FulfillingStore = {
    fulfillment_channel: string;
    city: string;
    country: string;
    id: number;
    pincode: string;
    store_name: string;
    code: string;
    address: string;
    state: string;
    contact_person: string;
    meta: any;
    phone: string;
};
type ShipmentInfoResponse = {
    fyndstore_emp: any;
    can_break: string;
    pay_button?: string;
    replacement_details?: string;
    child_nodes?: string[];
    dp_details?: DPDetailsData;
    items: any[];
    delivery_slot?: any;
    user_agent?: string;
    operational_status?: string;
    beneficiary_details?: boolean;
    is_fynd_coupon: boolean;
    enable_tracking?: boolean;
    total_bags?: number;
    gst_details?: GSTDetailsData;
    enable_dp_tracking?: boolean;
    payments?: ShipmentPayments;
    mid?: string;
    email_id: string;
    invoice: any;
    priority_text?: string;
    refund_details?: any;
    coupon?: any;
    picked_date?: string;
    can_return?: boolean;
    current_shipment_status: any;
    order?: OrderDetailsData;
    is_not_fynd_source: boolean;
    credit_note_id: string;
    bank_data?: any;
    status?: ShipmentStatusData;
    shipment_images?: string[];
    tracking_list?: TrackingList[];
    tracking_url: string;
    order_status: any;
    shipment_id: string;
    affiliate_shipment_id: string;
    payment_mode?: string;
    shipment_status?: string;
    total_items?: number;
    company: any;
    is_pdsr?: string;
    lock_status: string;
    bags?: OrderBags[];
    delivery_details?: UserDetailsData;
    journey_type?: string;
    bag_status_history?: BagStatusHistory[];
    forward_shipment_status?: any[];
    platform_logo: boolean;
    forward_order_status?: any[];
    user_id: string;
    is_packaging_order: boolean;
    is_fynd_store?: string;
    secured_delivery_flag?: string;
    is_invoiced: boolean;
    go_green?: boolean;
    due_date?: string;
    order_created_time?: string;
    custom_meta?: any[];
    forward_tracking_list?: any[];
    billing_details?: UserDetailsData;
    vertical?: string;
    user_info?: any;
    refund_text?: string;
    ordering_store: any;
    prices?: Prices;
    delivery_status: any[];
    order_type: string;
    kirana_store_id?: string;
    escalation?: any;
    shipment_quantity?: number;
    packaging_type?: string;
    can_cancel?: boolean;
    fulfilling_store?: FulfillingStore;
    status_progress: number;
};
type OrderingStore = {
    country: string;
    city: string;
    pincode: string;
    id: string;
    store_name: string;
    code: string;
    address: string;
    state: string;
    contact_person: string;
    meta: any;
    phone: string;
};
type PlatformShipment = {
    dp_details?: DPDetailsData;
    delivery_slot?: any;
    user_agent?: string;
    operational_status?: string;
    total_bags?: number;
    gst_details?: GSTDetailsData;
    enable_dp_tracking?: boolean;
    payments?: ShipmentPayments;
    priority_text?: string;
    coupon?: any;
    picked_date?: string;
    order?: OrderDetailsData;
    status?: ShipmentStatusData;
    shipment_images?: string[];
    tracking_list?: TrackingList[];
    shipment_id: string;
    payment_mode?: string;
    shipment_status?: string;
    total_items?: number;
    bags?: OrderBags[];
    delivery_details?: UserDetailsData;
    journey_type?: string;
    bag_status_history?: BagStatusHistory[];
    platform_logo?: string;
    custom_meta?: any[];
    billing_details?: UserDetailsData;
    vertical?: string;
    ordering_store?: OrderingStore;
    prices?: Prices;
    shipment_quantity?: number;
    packaging_type?: string;
    fulfilling_store?: FulfillingStore;
};
type OrderMeta = {
    cart_id?: number;
    customer_note?: string;
    order_platform?: string;
    ordering_store?: number;
    extra_meta?: any;
    mongo_cart_id?: number;
    payment_type?: string;
    order_type?: string;
    order_tags?: any[];
    currency_symbol?: string;
    staff?: any;
    comment?: string;
    employee_id?: number;
    order_child_entities?: string[];
    files?: any[];
};
type OrderDict = {
    order_date: string;
    fynd_order_id: string;
    prices?: Prices;
    meta?: OrderMeta;
    tax_details?: any;
    payment_methods?: any;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    order?: OrderDict;
};
type SubLane = {
    text?: string;
    actions?: any[];
    index?: number;
    value?: string;
    total_items?: number;
};
type SuperLane = {
    value: string;
    options?: SubLane[];
    text: string;
    total_items?: number;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformBreakupValues = {
    name?: string;
    display?: string;
    value?: string;
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformOrderItems = {
    shipments?: PlatformShipment[];
    total_order_value?: number;
    payment_mode?: string;
    breakup_values?: PlatformBreakupValues[];
    user_info?: UserDataInfo;
    channel?: PlatformChannel;
    meta?: any;
    order_id?: string;
    order_value?: number;
    order_created_time?: string;
};
type OrderListingResponse = {
    success?: boolean;
    message?: string;
    page?: Page;
    items?: PlatformOrderItems[];
    lane?: string;
    total_count?: number;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    value: number;
    options?: Options[];
    text: string;
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    shipment_type?: string;
    account_name?: string;
    raw_status?: string;
    reason?: string;
    status?: string;
    updated_time?: string;
    updated_at?: string;
    awb?: string;
    meta?: any;
    last_location_recieved_at?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type AdvanceFilterInfo = {
    processed?: FiltersInfo[];
    returned?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    filters?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
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
    report_id?: string;
    report_requested_at?: string;
    display_name?: string;
    report_created_at?: string;
    status?: string;
    s3_key?: string;
    request_details?: any;
    report_type?: string;
    report_name?: string;
};
type JioCodeUpsertDataSet = {
    item_id?: string;
    company_id?: string;
    article_id?: string;
    jio_code?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    value?: string;
    type?: string;
    message?: string;
};
type JioCodeUpsertResponse = {
    data?: any[];
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
    identifier?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    data?: any;
    invoice?: any;
    store_name?: string;
    invoice_status?: string;
    label?: any;
    do_invoice_label_generated: boolean;
    store_id?: string;
    batch_id: string;
    company_id?: string;
    store_code?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type URL = {
    url?: string;
};
type FileResponse = {
    upload?: FileUploadResponse;
    size?: number;
    content_type?: string;
    namespace?: string;
    cdn?: URL;
    file_name?: string;
    operation?: string;
    tags?: string[];
    method?: string;
    file_path?: string;
};
type bulkListingData = {
    total?: number;
    successful?: number;
    batch_id?: string;
    processing?: number;
    file_name?: string;
    excel_url?: string;
    status?: string;
    store_id?: number;
    uploaded_on?: string;
    company_id?: number;
    store_name?: string;
    user_name?: string;
    user_id?: string;
    successful_shipments?: any[];
    processing_shipments?: string[];
    store_code?: string;
    id?: string;
    failed_shipments?: any[];
    failed?: number;
};
type BulkListingPage = {
    size?: number;
    has_next?: boolean;
    total?: number;
    type?: string;
    current?: number;
    has_previous?: boolean;
};
type BulkListingResponse = {
    data?: bulkListingData[];
    page?: BulkListingPage;
    success?: boolean;
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
    successful_shipments_count?: number;
    failed_shipments_count?: number;
    successful_shipment_ids?: string[];
    processing_shipments_count?: number;
    batch_id?: string;
    total_shipments_count?: number;
    company_id?: string;
};
type BulkActionDetailsResponse = {
    data?: BulkActionDetailsDataField[];
    success?: string;
    error?: string[];
    message?: string;
    failed_records?: string[];
    status?: boolean;
    user_id?: string;
    uploaded_by?: string;
    uploaded_on?: string;
};
type B2BPODetails = {
    item_base_price?: number;
    total_gst_percentage?: number;
    docker_number?: string;
    po_line_amount?: number;
    po_tax_amount?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type BagGSTDetails = {
    brand_calculated_amount: number;
    is_default_hsn_code?: boolean;
    gst_fee: number;
    cgst_tax_percentage: number;
    cgst_gst_fee: string;
    sgst_tax_percentage: number;
    gst_tax_percentage: number;
    hsn_code_id: string;
    value_of_good: number;
    igst_gst_fee: string;
    igst_tax_percentage: number;
    sgst_gst_fee: string;
    hsn_code: string;
    gst_tag: string;
    gstin_code?: string;
    tax_collected_at_source: number;
};
type Brand = {
    company: string;
    script_last_ran?: string;
    created_on?: number;
    logo?: string;
    credit_note_allowed?: boolean;
    pickup_location?: string;
    credit_note_expiry_days?: number;
    modified_on?: number;
    brand_id: number;
    brand_name: string;
    is_virtual_invoice?: boolean;
    invoice_prefix?: string;
    start_date?: string;
};
type ReturnConfig = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type Dimensions = {
    length?: number;
    width?: number;
    height?: number;
    unit?: string;
    is_default?: boolean;
};
type Article = {
    a_set?: any;
    uid: string;
    size: string;
    esp_modified?: any;
    raw_meta?: any;
    return_config?: ReturnConfig;
    identifiers: Identifier;
    code?: string;
    seller_identifier: string;
    _id: string;
    weight?: Weight;
    is_set?: boolean;
    child_details?: any;
    dimensions?: Dimensions;
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
};
type AffiliateMeta = {
    channel_order_id?: string;
    quantity?: number;
    box_type?: string;
    employee_discount?: number;
    order_item_id?: string;
    coupon_code?: string;
    size_level_total_qty?: number;
    loyalty_discount?: number;
    due_date?: string;
    channel_shipment_id?: string;
    is_priority?: boolean;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    employee_discount?: number;
    loyalty_discount?: number;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type Attributes = {
    gender?: string[];
    primary_color_hex?: string;
    brand_name?: string;
    essential?: string;
    primary_color?: string;
    name?: string;
    primary_material?: string;
    marketer_address?: string;
    marketer_name?: string;
};
type Item = {
    l3_category?: number;
    size: string;
    slug_key: string;
    color?: string;
    brand_id: number;
    meta?: any;
    image: string[];
    l2_category_id?: number;
    last_updated_at?: string;
    branch_url?: string;
    can_return?: boolean;
    brand: string;
    webstore_product_url?: string;
    gender?: string;
    item_id: number;
    l2_category?: string[];
    code?: string;
    attributes: Attributes;
    department_id?: number;
    l3_category_name?: string;
    name: string;
    l1_category?: string[];
    can_cancel?: boolean;
    l1_category_id?: number;
};
type PDFLinks = {
    invoice?: string;
    credit_note_url?: string;
    invoice_pos?: string;
    label_a6?: string;
    invoice_a4?: string;
    label?: string;
    label_type: string;
    b2b?: string;
    label_pos?: string;
    po_invoice?: string;
    label_a4?: string;
    invoice_a6?: string;
    invoice_type: string;
};
type EInvoice = {
    acknowledge_no?: number;
    acknowledge_date?: string;
    signed_invoice?: string;
    signed_qr_code?: string;
    irn?: string;
    error_message?: string;
    error_code?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type BuyerDetails = {
    gstin: string;
    city: string;
    pincode: number;
    ajio_site_id?: string;
    address: string;
    name: string;
    state: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type ShipmentMeta = {
    einvoice_info?: EinvoiceInfo;
    box_type?: string;
    return_affiliate_order_id?: string;
    debug_info?: DebugInfo;
    dp_options?: any;
    formatted?: Formatted;
    assign_dp_from_sb?: boolean;
    lock_data?: LockData;
    b2b_buyer_details?: BuyerDetails;
    dp_name?: string;
    return_store_node?: number;
    packaging_name?: string;
    forward_affiliate_shipment_id?: string;
    store_invoice_updated_date?: string;
    ewaybill_info?: any;
    po_number?: string;
    awb_number?: string;
    same_store_available: boolean;
    timestamp?: ShipmentTimeStamp;
    return_details?: any;
    shipment_weight?: number;
    marketplace_store_id?: string;
    bag_weight?: any;
    external?: any;
    weight: number;
    shipment_volumetric_weight?: number;
    b2c_buyer_details?: any;
    due_date?: string;
    dp_id?: string;
    auto_trigger_dp_assignment_acf: boolean;
    return_awb_number?: string;
    order_type?: string;
    dp_sort_key?: string;
    fulfilment_priority_text?: string;
    return_affiliate_shipment_id?: string;
    forward_affiliate_order_id?: string;
};
type AffiliateDetails = {
    affiliate_order_id: string;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
    affiliate_id?: string;
    ad_id?: string;
    company_affiliate_tag?: string;
    pdf_links?: PDFLinks;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    shipment_meta: ShipmentMeta;
};
type StoreAddress = {
    latitude: number;
    address_category: string;
    landmark?: string;
    city: string;
    version?: string;
    email?: string;
    country_code: string;
    address1: string;
    address_type: string;
    country: string;
    pincode: number;
    address2?: string;
    phone: string;
    state: string;
    longitude: number;
    created_at: string;
    updated_at: string;
    contact_person: string;
    area?: string;
};
type EInvoicePortalDetails = {
    password?: string;
    username?: string;
    user?: string;
};
type Document = {
    legal_name: string;
    verified: boolean;
    ds_type: string;
    value: string;
    url?: string;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    user?: string;
    enabled: boolean;
    password?: string;
    username?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type StoreMeta = {
    notification_emails?: string[];
    display_name: string;
    stage: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    timing?: any[];
    ewaybill_portal_details?: any;
    documents?: StoreDocuments;
    additional_contact_details?: any;
    gst_number?: string;
    product_return_config?: any;
    gst_credentials: StoreGstCredentials;
};
type Store = {
    latitude: number;
    store_address_json?: StoreAddress;
    fulfillment_channel: string;
    location_type: string;
    is_archived?: boolean;
    s_id: string;
    store_email: string;
    alohomora_user_id?: number;
    brand_id?: any;
    packaging_material_count?: number;
    meta: StoreMeta;
    brand_store_tags?: string[];
    order_integration_id?: string;
    mall_name?: string;
    city: string;
    is_active?: boolean;
    mall_area?: string;
    is_enabled_for_recon?: boolean;
    company_id: number;
    store_active_from?: string;
    address1: string;
    login_username: string;
    country: string;
    pincode: string;
    code?: string;
    address2?: string;
    phone: number;
    state: string;
    vat_no?: string;
    longitude: number;
    parent_store_id?: number;
    created_at: string;
    updated_at?: string;
    contact_person: string;
    name: string;
};
type ArticleDetails = {
    status?: any;
};
type BagDetailsPlatformResponse = {
    b_id: number;
    restore_promos?: any;
    seller_identifier?: string;
    operational_status?: string;
    b_type?: string;
    meta?: BagMeta;
    gst_details: BagGSTDetails;
    financial_breakup: FinancialBreakup[];
    bag_update_time?: number;
    order_integration_id?: string;
    quantity?: number;
    brand: Brand;
    original_bag_list?: number[];
    article: Article;
    parent_promo_bags?: any;
    current_status: BagStatusHistory;
    entity_type?: string;
    applied_promos?: any[];
    status: BagReturnableCancelableStatus;
    affiliate_bag_details: AffiliateBagDetails;
    dates?: Dates;
    shipment_id?: string;
    item: Item;
    display_name?: string;
    line_number?: number;
    restore_coupon?: boolean;
    qc_required?: any;
    journey_type: string;
    bag_status_history?: BagStatusHistory;
    reasons?: any[];
    affiliate_details?: AffiliateDetails;
    current_operational_status: BagStatusHistory;
    bag_status: BagStatusHistory[];
    ordering_store?: Store;
    article_details?: ArticleDetails;
    prices: Prices;
    no_of_bags_order?: number;
    identifier?: string;
    tags?: string[];
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    size: number;
    page_type: string;
    has_next: boolean;
    current: number;
    item_total: number;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    error?: string;
    message?: string;
    shipment_id?: string;
    status?: number;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    error_trace?: string;
    message: string;
    status: number;
};
type StoreReassign = {
    mongo_article_id?: string;
    affiliate_id?: string;
    item_id?: string;
    bag_id?: number;
    fynd_order_id?: string;
    set_id?: string;
    store_id: number;
    reason_ids?: number[];
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    id?: string;
    affiliate_id?: string;
    reason_text: string;
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    action: string;
    entities: Entities[];
    entity_type: string;
};
type Bags = {
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    is_locked?: boolean;
    bag_id?: number;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    is_shipment_locked?: boolean;
    affiliate_id?: string;
    lock_status?: boolean;
    shipment_id?: string;
    affiliate_shipment_id?: string;
    is_bag_locked?: boolean;
    bags?: Bags[];
    status?: string;
    original_filter?: OriginalFilter;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    message?: string;
    success?: boolean;
};
type AnnouncementResponse = {
    description?: string;
    id: number;
    company_id?: number;
    created_at?: string;
    platform_id?: string;
    to_datetime?: string;
    logo_url?: string;
    platform_name?: string;
    title?: string;
    from_datetime?: string;
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
type Products = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasonsFilters = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
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
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
};
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
type DataUpdates = {
    products?: ProductsDataUpdates[];
    entities?: EntitiesDataUpdates[];
};
type ShipmentsRequest = {
    products?: Products[];
    reasons?: ReasonsData;
    identifier: string;
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    status?: string;
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
    lock_after_transition?: boolean;
    force_transition?: boolean;
};
type ShipmentsResponse = {
    message?: string;
    identifier?: string;
    code?: string;
    final_state?: any;
    meta?: any;
    exception?: string;
    stack_trace?: string;
    status?: number;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    description?: string;
    id: string;
    secret: string;
    token: string;
    created_at: string;
    name: string;
    meta?: AffiliateAppConfigMeta[];
    owner: string;
    updated_at: string;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryConfig = {
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    order?: AffiliateInventoryOrderConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    id: string;
    config?: AffiliateConfig;
    token: string;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    bag_end_state?: string;
    create_user?: boolean;
    affiliate: Affiliate;
    store_lookup?: string;
    article_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
};
type OrderUser = {
    last_name: string;
    mobile: number;
    address2?: string;
    address1?: string;
    first_name: string;
    pincode: string;
    email: string;
    country: string;
    phone: number;
    city: string;
    state: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type ArticleDetails1 = {
    attributes: any;
    category: any;
    weight: any;
    dimension: any;
    quantity: number;
    brand_id: number;
    _id: string;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_type: string;
    fulfillment_id: number;
};
type ShipmentDetails = {
    meta?: any;
    box_type?: string;
    dp_id?: number;
    affiliate_shipment_id: string;
    articles: ArticleDetails1[];
    shipments: number;
    fulfillment_id: number;
};
type ShipmentConfig = {
    journey: string;
    identifier: string;
    payment_mode: string;
    source: string;
    location_details?: LocationDetails;
    shipment: ShipmentDetails[];
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
    transfer_price: number;
    price_marked: number;
    identifier: any;
    unit_price: number;
    quantity: number;
    hsn_code_id: string;
    store_id: number;
    seller_identifier: string;
    company_id: number;
    delivery_charge: number;
    sku: string;
    price_effective: number;
    affiliate_meta: any;
    _id: string;
    pdf_links?: MarketPlacePdf;
    affiliate_store_id: string;
    item_id: number;
    item_size: string;
    modified_on: string;
    fynd_store_id: string;
    amount_paid: number;
    discount: number;
    avl_qty: number;
};
type OrderInfo = {
    payment?: any;
    order_priority?: OrderPriority;
    delivery_charges: number;
    billing_address: OrderUser;
    payment_mode: string;
    items: any;
    coupon?: string;
    user: UserData;
    shipping_address: OrderUser;
    shipment?: ShipmentData;
    order_value: number;
    discount: number;
    bags: AffiliateBag[];
    affiliate_order_id?: string;
    cod_charges: number;
};
type CreateOrderPayload = {
    affiliate_id: string;
    order_config: OrderConfig;
    order_info: OrderInfo;
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
    slug: string;
    id: number;
    description: string;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type PostHistoryData = {
    message: string;
    user_name: string;
};
type PostHistoryFilters = {
    line_number?: string;
    shipment_id: string;
    identifier?: string;
};
type PostActivityHistory = {
    data: PostHistoryData;
    filters: PostHistoryFilters[];
};
type PostHistoryDict = {
    activity_history: PostActivityHistory;
};
type PostShipmentHistory = {
    activity_history?: PostHistoryDict[];
};
type HistoryDict = {
    l1_detail?: string;
    l3_detail?: string;
    bag_id?: number;
    ticket_id?: string;
    createdat: string;
    user: string;
    l2_detail?: string;
    type: string;
    ticket_url?: string;
    message: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    payment_mode: string;
    phone_number: number;
    shipment_id: number;
    brand_name: string;
    amount_paid: number;
    customer_name: string;
    message: string;
    order_id: string;
    country_code: string;
};
type SendSmsPayload = {
    slug: string;
    data?: SmsDataPayload;
    bag_id: number;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    remarks?: string;
    id: number;
    meta: Meta;
    shipment_id?: string;
    bag_list?: number[];
    status?: string;
};
type OrderStatusData = {
    errors?: string[];
    order_details: OrderDetails;
    shipment_details?: ShipmentDetail[];
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    order_type: string;
    shipment_ids?: string[];
    dp_id: number;
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type PaymentMethod = {
    refund_by: string;
    name: string;
    meta?: any;
    transaction_data?: any;
    mode: string;
    amount: number;
    collect_by: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
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
    name: string;
    amount: any;
    type: string;
};
type ShippingInfo = {
    primary_email: string;
    house_no?: string;
    primary_mobile_number: string;
    pincode: string;
    shipping_type?: string;
    title?: string;
    state: string;
    external_customer_code?: string;
    middle_name?: string;
    address2?: string;
    slot?: any[];
    country_code?: string;
    gender?: string;
    last_name?: string;
    address1: string;
    first_name: string;
    alternate_email?: string;
    floor_no?: string;
    state_code?: string;
    customer_code?: string;
    city: string;
    address_type?: string;
    alternate_mobile_number?: string;
    country: string;
    landmark?: string;
    geo_location?: any;
};
type BillingInfo = {
    primary_email: string;
    house_no?: string;
    primary_mobile_number: string;
    pincode: string;
    title?: string;
    state: string;
    external_customer_code?: string;
    middle_name?: string;
    address2?: string;
    country_code?: string;
    gender?: string;
    last_name?: string;
    address1: string;
    first_name: string;
    alternate_email?: string;
    floor_no?: string;
    state_code?: string;
    customer_code?: string;
    city: string;
    alternate_mobile_number?: string;
    country: string;
};
type ProcessingDates = {
    dispatch_after_date?: string;
    confirm_by_date?: string;
    pack_by_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
    dispatch_by_date?: string;
};
type LineItem = {
    custom_messasge?: string;
    quantity?: number;
    meta?: any;
    charges?: Charge[];
    external_line_id?: string;
    seller_identifier: string;
};
type Shipment = {
    processing_dates?: ProcessingDates;
    priority?: number;
    line_items: LineItem[];
    location_id: number;
    meta?: any;
    external_shipment_id?: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type CreateOrderAPI = {
    external_order_id?: string;
    payment_info: PaymentInfo;
    external_creation_date?: string;
    currency_info?: any;
    meta?: any;
    charges?: Charge[];
    shipping_info: ShippingInfo;
    billing_info: BillingInfo;
    shipments: Shipment[];
    tax_info?: TaxInfo;
};
type CreateOrderErrorReponse = {
    info?: any;
    code?: string;
    status: number;
    request_id?: string;
    meta?: string;
    exception?: string;
    stack_trace?: string;
    message: string;
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
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
    source?: string;
};
type CreateChannelConfig = {
    dp_configuration?: DpConfiguration;
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
    logo_url?: any;
    location_reassignment?: boolean;
    shipment_assignment?: string;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    is_upserted?: boolean;
    is_inserted?: boolean;
    acknowledged?: boolean;
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
type GetSearchWordsData = {
    result?: any;
    _custom_json?: any;
    words?: string[];
    is_active?: boolean;
    uid?: string;
    app_id?: string;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    result: SearchKeywordResult;
    _custom_json?: any;
    words?: string[];
    is_active?: boolean;
    app_id?: string;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    results?: any[];
    words?: string[];
    uid?: string;
    app_id?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type AutocompletePageAction = {
    url?: string;
    params?: any;
    query?: any;
    type?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type Media = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type AutocompleteResult = {
    action?: AutocompleteAction;
    _custom_json?: any;
    logo?: Media;
    display?: string;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    words?: string[];
    results?: AutocompleteResult[];
    is_active?: boolean;
    app_id?: string;
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    results?: any[];
    _custom_json?: any;
    app_id?: string;
};
type ProductBundleItem = {
    allow_remove?: boolean;
    auto_select?: boolean;
    min_quantity: number;
    max_quantity: number;
    auto_add_to_cart?: boolean;
    product_uid: number;
};
type GetProductBundleCreateResponse = {
    id?: string;
    slug: string;
    logo?: string;
    is_active: boolean;
    page_visibility?: string[];
    name: string;
    created_on?: string;
    meta?: any;
    company_id?: number;
    created_by?: any;
    same_store_assignment?: boolean;
    modified_on?: string;
    choice: string;
    products: ProductBundleItem[];
    modified_by?: any;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    slug: string;
    logo?: string;
    is_active: boolean;
    page_visibility?: string[];
    name: string;
    created_on?: string;
    meta?: any;
    company_id?: number;
    created_by?: any;
    same_store_assignment?: boolean;
    modified_on?: string;
    choice: string;
    products: ProductBundleItem[];
    modified_by?: any;
};
type LimitedProductData = {
    sizes?: string[];
    country_of_origin?: string;
    slug?: string;
    item_code?: string;
    price?: any;
    identifier?: any;
    name?: string;
    quantity?: number;
    short_description?: string;
    images?: string[];
    uid?: number;
    attributes?: any;
};
type Size = {
    quantity?: number;
    value?: string;
    display?: string;
    is_available?: boolean;
};
type Price = {
    currency?: string;
    min_marked?: number;
    max_marked?: number;
    min_effective?: number;
    max_effective?: number;
};
type GetProducts = {
    product_details?: LimitedProductData;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    price?: Price;
    auto_select?: boolean;
    min_quantity?: number;
    max_quantity?: number;
    allow_remove?: boolean;
    product_uid?: number;
};
type GetProductBundleResponse = {
    slug?: string;
    page_visibility?: string[];
    logo?: string;
    is_active?: boolean;
    name?: string;
    meta?: any;
    company_id?: number;
    same_store_assignment?: boolean;
    choice?: string;
    products?: GetProducts[];
};
type ProductBundleUpdateRequest = {
    slug: string;
    logo?: string;
    is_active: boolean;
    page_visibility?: string[];
    name: string;
    meta?: any;
    company_id?: number;
    same_store_assignment?: boolean;
    modified_on?: string;
    choice: string;
    products: ProductBundleItem[];
    modified_by?: any;
};
type GetMultiSizeGuide = {
    guide?: any;
    image?: string;
    _id?: string;
    title?: string;
    active?: boolean;
    name?: string;
    description?: string;
    created_on?: string;
    tag?: string;
    subtitle?: string;
    company_id?: number;
    created_by?: any;
    modified_on?: string;
    brand_id?: number;
    modified_by?: any;
};
type ListSizeGuide = {
    page?: any;
    items?: GetMultiSizeGuide[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    guide?: Guide;
    image?: string;
    id?: string;
    title: string;
    active?: boolean;
    name: string;
    description?: string;
    created_on?: string;
    tag?: string;
    subtitle?: string;
    company_id?: number;
    created_by?: any;
    modified_on?: string;
    brand_id?: number;
    modified_by?: any;
};
type SizeGuideResponse = {
    guide?: any;
    id?: string;
    active?: boolean;
    title?: string;
    created_on?: string;
    name?: string;
    company_id?: number;
    tag?: string;
    subtitle?: string;
    created_by?: any;
    modified_on?: string;
    brand_id?: number;
    modified_by?: any;
};
type MOQData = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type SEOData = {
    description?: any;
    title?: any;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    is_gift?: boolean;
    moq?: MOQData;
    seo?: SEOData;
    is_cod?: boolean;
};
type ApplicationItemMOQ = {
    increment_unit?: number;
    maximum?: number;
    minimum?: number;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationItemMeta = {
    alt_text?: any;
    is_gift?: boolean;
    _custom_json?: any;
    moq?: ApplicationItemMOQ;
    _custom_meta?: MetaFields[];
    seo?: ApplicationItemSEO;
    is_cod?: boolean;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    data: any[];
    condition?: any[];
    values?: any[];
};
type PageResponseType = {
    has_next: boolean;
    current: number;
    total_count: number;
    next: number;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    priority: number;
    display_type: string;
    unit?: string;
    slug?: string;
    logo?: string;
    name: string;
    key?: string;
    is_active: boolean;
};
type AppConfigurationDetail = {
    priority: number;
    slug: string;
    logo?: string;
    is_default: boolean;
    name?: string;
    is_active: boolean;
    template_slugs?: string[];
    app_id: string;
    attributes?: AttributeDetailsGroup[];
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    priority: number;
    logo?: string;
    is_default: boolean;
    name?: string;
    key: string;
    is_active: boolean;
    default_key: string;
    app_id: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
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
type GetCatalogConfigurationDetailsProduct = {
    detail?: any;
    variant?: any;
    similar?: any;
    compare?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ConfigurationBucketPoints = {
    end?: number;
    start?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    map?: any;
    bucket_points?: ConfigurationBucketPoints[];
    condition?: string;
    value?: string;
    sort?: string;
    map_values?: any[];
};
type ConfigurationListingFilterConfig = {
    priority: number;
    logo?: string;
    name?: string;
    key: string;
    display_name?: string;
    is_active: boolean;
    type: string;
    value_config?: ConfigurationListingFilterValue;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    priority: number;
    logo?: string;
    name?: string;
    key: string;
    is_active: boolean;
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
type ConfigurationProductVariantConfig = {
    priority: number;
    display_type: string;
    logo?: string;
    name: string;
    key: string;
    size: ProductSize;
    is_active: boolean;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    priority: number;
    title?: string;
    logo?: string;
    key: string;
    subtitle?: string;
    size?: ProductSize;
    is_active: boolean;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppCatalogConfiguration = {
    listing?: ConfigurationListing;
    id?: string;
    modified_on?: string;
    created_on?: string;
    modified_by?: any;
    config_id?: string;
    config_type: string;
    created_by?: any;
    product?: ConfigurationProduct;
    app_id: string;
    type?: string;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    modified_on?: string;
    created_on?: string;
    modified_by?: any;
    config_id?: string;
    config_type: string;
    created_by?: any;
    product?: ConfigurationProduct;
    app_id: string;
    type?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    id?: string;
    config_id?: string;
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductFiltersKey = {
    kind?: string;
    operators?: string[];
    logo?: string;
    name: string;
    display: string;
};
type ProductFiltersValue = {
    selected_max?: number;
    count?: number;
    currency_symbol?: string;
    query_format?: string;
    is_selected: boolean;
    min?: number;
    currency_code?: string;
    value: any;
    display_format?: string;
    selected_min?: number;
    max?: number;
    display: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type ProductSortOn = {
    name?: string;
    is_selected?: boolean;
    value?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    operators: any;
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
type BannerImage = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type Media1 = {
    url: string;
    meta?: any;
    type?: string;
};
type CollectionQuery = {
    attribute: string;
    op: string;
    value: any[];
};
type GetCollectionDetailNest = {
    allow_facets?: boolean;
    allow_sort?: boolean;
    _schedule?: any;
    tag?: string[];
    cron?: any;
    is_active?: boolean;
    banners?: ImageUrls;
    app_id?: string;
    type?: string;
    logo?: Media1;
    name?: string;
    action?: Action;
    priority?: number;
    slug?: string;
    visible_facets_keys?: string[];
    query?: CollectionQuery[];
    badge?: any;
    description?: string;
    meta?: any;
    uid?: string;
};
type GetCollectionListingResponse = {
    page?: Page;
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
};
type CollectionSchedule = {
    next_schedule?: NextSchedule[];
    start?: string;
    end?: string;
    duration?: number;
    cron?: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type UserInfo = {
    user_id?: string;
    username?: string;
    email?: string;
    uid?: string;
};
type CreateCollection = {
    allow_facets?: boolean;
    allow_sort?: boolean;
    _custom_json?: any;
    _schedule?: CollectionSchedule;
    is_active?: boolean;
    seo?: SeoDetail;
    banners: CollectionBanner;
    published?: boolean;
    app_id: string;
    tags?: string[];
    type: string;
    logo: CollectionImage;
    is_visible?: boolean;
    name: string;
    _locale_language?: any;
    priority?: number;
    slug: string;
    visible_facets_keys?: string[];
    query?: CollectionQuery[];
    sort_on?: string;
    badge?: CollectionBadge;
    description?: string;
    meta?: any;
    created_by?: UserInfo;
    modified_by?: UserInfo;
};
type CollectionCreateResponse = {
    allow_facets?: boolean;
    allow_sort?: boolean;
    _schedule?: any;
    tag?: string[];
    cron?: any;
    is_active?: boolean;
    banners?: ImageUrls;
    app_id?: string;
    type?: string;
    logo?: BannerImage;
    name?: string;
    priority?: number;
    slug?: string;
    visible_facets_keys?: string[];
    query?: CollectionQuery[];
    sort_on?: string;
    badge?: any;
    description?: string;
    meta?: any;
};
type CollectionDetailResponse = {
    allow_facets?: boolean;
    allow_sort?: boolean;
    _schedule?: any;
    tag?: string[];
    cron?: any;
    is_active?: boolean;
    banners?: ImageUrls;
    app_id?: string;
    type?: string;
    logo?: Media1;
    name?: string;
    priority?: number;
    slug?: string;
    visible_facets_keys?: string[];
    query?: CollectionQuery[];
    badge?: any;
    description?: string;
    meta?: any;
    uid?: string;
};
type UpdateCollection = {
    allow_facets?: boolean;
    allow_sort?: boolean;
    _custom_json?: any;
    _schedule?: CollectionSchedule;
    is_active?: boolean;
    seo?: SeoDetail;
    banners?: CollectionBanner;
    published?: boolean;
    type?: string;
    tags?: string[];
    logo?: CollectionImage;
    is_visible?: boolean;
    name?: string;
    _locale_language?: any;
    priority?: number;
    slug?: string;
    visible_facets_keys?: string[];
    query?: CollectionQuery[];
    sort_on?: string;
    badge?: CollectionBadge;
    description?: string;
    meta?: any;
    modified_by?: UserInfo;
};
type ProductBrand = {
    name?: string;
    action?: Action;
    uid?: number;
    logo?: Media1;
};
type Price1 = {
    currency_code?: string;
    currency_symbol?: string;
    min?: number;
    max?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductDetailAttribute = {
    key?: string;
    value?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductListingDetail = {
    product_online_date?: string;
    medias?: Media1[];
    brand?: ProductBrand;
    color?: string;
    tryouts?: string[];
    type?: string;
    attributes?: any;
    similars?: string[];
    image_nature?: string;
    price?: ProductListingPrice;
    name?: string;
    has_variant?: boolean;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    teaser_tag?: any;
    rating?: number;
    sellable?: boolean;
    promo_meta?: any;
    slug: string;
    rating_count?: number;
    short_description?: string;
    discount?: string;
    highlights?: string[];
    item_code?: string;
    description?: string;
    item_type?: string;
    uid?: number;
};
type GetCollectionItemsResponse = {
    page?: Page;
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
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
    article_freshness?: number;
    total_sizes?: number;
    total_articles?: number;
    available_sizes?: number;
    name?: string;
    available_articles?: number;
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    count?: number;
    sellable_count?: number;
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
    brand_ids?: number[];
    opt_level: string;
    store_ids?: number[];
    platform?: string;
    enabled?: boolean;
    company_id?: number;
};
type CompanyOptIn = {
    brand_ids: number[];
    opt_level: string;
    store_ids: number[];
    platform: string;
    created_on: number;
    company_id: number;
    enabled: boolean;
    created_by?: any;
    modified_on: number;
    modified_by?: any;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    business_type?: string;
    name?: string;
    uid?: number;
    company_type?: string;
};
type CompanyBrandDetail = {
    total_article?: number;
    company_id?: number;
    brand_id?: number;
    brand_name?: string;
};
type OptinCompanyBrandDetailsView = {
    page?: Page;
    items?: CompanyBrandDetail[];
};
type OptinCompanyMetrics = {
    company?: string;
    store?: number;
    brand?: number;
};
type StoreDetail = {
    manager?: any;
    address?: any;
    timing?: any;
    documents?: any[];
    created_on?: string;
    name?: string;
    store_code?: string;
    company_id?: number;
    additional_contacts?: any[];
    store_type?: string;
    modified_on?: string;
    uid?: number;
    display_name?: string;
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
    allowed_values?: string[];
    multi?: boolean;
    format?: string;
    range?: AttributeSchemaRange;
    type: string;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    indexing: boolean;
    priority?: number;
};
type GenderDetail = {
    schema?: AttributeMaster;
    details?: AttributeMasterDetails;
    id?: string;
    slug?: string;
    logo?: string;
    is_nested?: boolean;
    name?: string;
    description?: string;
    meta?: AttributeMasterMeta;
    departments?: string[];
    enabled_for_end_consumer?: boolean;
    filters?: AttributeMasterFilter;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    code?: string;
    errors?: any;
    message?: string;
    meta?: any;
    status?: number;
};
type UserSerializer = {
    user_id?: string;
    _id?: string;
    contact?: string;
    username?: string;
    uid?: string;
};
type GetDepartment = {
    priority_order?: number;
    search?: string;
    page_no?: number;
    slug?: string;
    logo?: string;
    name?: string;
    created_on?: string;
    item_type?: string;
    synonyms?: string[];
    created_by?: UserSerializer;
    is_active?: boolean;
    modified_on?: string;
    uid?: number;
    page_size?: number;
    modified_by?: UserSerializer;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    code?: string;
    errors?: any;
    message?: string;
    meta?: any;
    status?: number;
};
type DepartmentCreateUpdate = {
    priority_order: number;
    _custom_json?: any;
    slug?: string;
    logo: string;
    name: string;
    platforms?: any;
    _cls?: string;
    synonyms?: string[];
    is_active?: boolean;
    uid?: number;
    tags?: string[];
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
    username: string;
    user_id: string;
    contact?: string;
};
type DepartmentModel = {
    priority_order: number;
    verified_by?: UserDetail;
    _id?: any;
    verified_on?: string;
    slug?: any;
    _custom_json?: any;
    logo: any;
    created_on: string;
    name: any;
    _cls?: any;
    synonyms?: any[];
    created_by?: UserDetail;
    is_active?: boolean;
    modified_on: string;
    uid?: number;
    modified_by?: UserDetail;
};
type ProductTemplate = {
    categories?: string[];
    is_expirable?: boolean;
    is_archived?: boolean;
    slug: string;
    logo?: string;
    is_physical: boolean;
    name?: string;
    description?: string;
    modified_by?: any;
    tag?: string;
    departments?: string[];
    created_on?: string;
    modified_on?: string;
    created_by?: any;
    is_active?: boolean;
    attributes_schema?: any[];
    attributes?: string[];
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    custom_order?: any;
    currency?: any;
    media?: any;
    trader?: any;
    size_guide?: any;
    trader_type?: any;
    variants?: any;
    is_active?: any;
    command?: any;
    multi_size?: any;
    is_dependent?: any;
    tags?: any;
    return_config?: any;
    name?: any;
    hsn_code?: any;
    no_of_boxes?: any;
    teaser_tag?: any;
    country_of_origin?: any;
    slug?: any;
    product_group_tag?: any;
    short_description?: any;
    brand_uid?: any;
    category_slug?: any;
    highlights?: any;
    sizes?: any;
    product_publish?: any;
    item_code?: any;
    description?: any;
    item_type?: any;
};
type GlobalValidation = {
    title?: string;
    properties?: Properties;
    definitions?: any;
    description?: string;
    type?: string;
    required?: string[];
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    categories?: string[];
    is_expirable?: boolean;
    is_archived?: boolean;
    id?: string;
    slug: string;
    logo?: string;
    is_physical: boolean;
    name?: string;
    description?: string;
    tag?: string;
    departments?: string[];
    is_active?: boolean;
    attributes_schema?: any[];
    attributes?: string[];
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
    hsn_code?: string[];
    country_of_origin?: string[];
};
type HSNCodesResponse = {
    data?: HSNData;
    message?: string;
};
type ProductDownloadItemsData = {
    templates?: string[];
    type?: string;
    brand?: string[];
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadsItems = {
    data?: ProductDownloadItemsData;
    task_id?: string;
    completed_on?: string;
    url?: string;
    id?: string;
    seller_id?: number;
    status?: string;
    template_tags?: any;
    created_by?: VerifiedBy;
    trigger_on?: string;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Media2 = {
    portrait: string;
    logo: string;
    landscape: string;
};
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
};
type Category = {
    priority?: number;
    level: number;
    marketplaces?: CategoryMapping;
    id?: string;
    media?: Media2;
    slug?: string;
    hierarchy?: Hierarchy[];
    name: string;
    created_on?: string;
    departments: number[];
    synonyms?: string[];
    created_by?: any;
    is_active: boolean;
    modified_on?: string;
    uid?: number;
    tryouts?: string[];
    modified_by?: any;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    priority?: number;
    level: number;
    marketplaces?: CategoryMapping;
    media?: Media2;
    slug?: string;
    hierarchy?: Hierarchy[];
    name: string;
    departments: number[];
    synonyms?: string[];
    is_active: boolean;
    tryouts?: string[];
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
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type ReturnConfigResponse = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Image = {
    aspect_ratio_f?: number;
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Product = {
    custom_order?: any;
    _custom_json?: any;
    currency?: string;
    media?: Media1[];
    id?: string;
    trader?: any[];
    is_image_less_product?: boolean;
    size_guide?: string;
    company_id?: number;
    brand?: Brand;
    variants?: any;
    is_active?: boolean;
    color?: string;
    modified_on?: string;
    category_uid?: number;
    multi_size?: boolean;
    is_dependent?: boolean;
    tags?: string[];
    return_config?: ReturnConfigResponse;
    is_expirable?: boolean;
    attributes?: any;
    stage?: string;
    image_nature?: string;
    is_physical?: boolean;
    name?: string;
    hsn_code?: string;
    all_sizes?: any[];
    images?: Image[];
    verified_on?: string;
    variant_group?: any;
    net_quantity?: NetQuantityResponse;
    category?: any;
    no_of_boxes?: number;
    teaser_tag?: any;
    l3_mapping?: string[];
    country_of_origin?: string;
    slug?: string;
    template_tag?: string;
    product_group_tag?: string[];
    primary_color?: string;
    departments?: number[];
    short_description?: string;
    all_company_ids?: number[];
    brand_uid?: number;
    pending?: string;
    category_slug?: string;
    verified_by?: VerifiedBy;
    tax_identifier?: any;
    highlights?: string[];
    sizes?: any[];
    product_publish?: ProductPublished;
    item_code?: string;
    is_set?: boolean;
    variant_media?: any;
    all_identifiers?: string[];
    created_on?: string;
    description?: string;
    moq?: any;
    item_type?: string;
    created_by?: any;
    uid?: number;
    modified_by?: any;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type Trader = {
    name: any;
    address?: string[];
    type?: string;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type ProductCreateUpdateSchemaV2 = {
    custom_order?: CustomOrder;
    _custom_json?: any;
    currency: string;
    media?: Media1[];
    trader: Trader[];
    bulk_job_id?: string;
    is_image_less_product?: boolean;
    size_guide?: string;
    company_id: number;
    variants?: any;
    is_active?: boolean;
    multi_size?: boolean;
    is_dependent?: boolean;
    tags?: string[];
    return_config: ReturnConfig;
    attributes?: any;
    name: string;
    action?: string;
    variant_group?: any;
    net_quantity?: NetQuantity;
    no_of_boxes?: number;
    teaser_tag?: TeaserTag;
    country_of_origin: string;
    slug: string;
    template_tag: string;
    product_group_tag?: string[];
    departments: number[];
    short_description?: string;
    brand_uid: number;
    category_slug: string;
    tax_identifier: TaxIdentifier;
    highlights?: string[];
    sizes: any[];
    product_publish?: ProductPublish;
    item_code: string;
    is_set?: boolean;
    variant_media?: any;
    change_request_id?: any;
    description?: string;
    requester?: string;
    item_type: string;
    uid?: number;
};
type ProductVariants = {
    media?: Media1[];
    item_code?: string;
    name?: string;
    brand_uid?: number;
    uid?: number;
    category_uid?: number;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    raw_key?: string;
    is_nested?: boolean;
    synonyms?: any;
    enabled_for_end_consumer?: boolean;
    modified_on?: string;
    filters: AttributeMasterFilter;
    tags?: string[];
    details: AttributeMasterDetails;
    logo?: string;
    name?: string;
    variant?: boolean;
    suggestion?: string;
    unit?: string;
    slug: string;
    departments: string[];
    schema: AttributeMaster;
    created_on?: string;
    description?: string;
    created_by?: any;
    modified_by?: any;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ProductCreateUpdate = {
    custom_order?: CustomOrder;
    _custom_json?: any;
    currency: string;
    media?: Media1[];
    trader: Trader[];
    bulk_job_id?: string;
    is_image_less_product?: boolean;
    size_guide?: string;
    company_id: number;
    variants?: any;
    is_active?: boolean;
    multi_size?: boolean;
    is_dependent?: boolean;
    tags?: string[];
    return_config: ReturnConfig;
    name: any;
    action?: string;
    variant_group?: any;
    net_quantity?: NetQuantity;
    no_of_boxes?: number;
    teaser_tag?: TeaserTag;
    country_of_origin: string;
    slug: string;
    template_tag: string;
    product_group_tag?: string[];
    departments: number[];
    short_description?: string;
    brand_uid: number;
    category_slug: string;
    tax_identifier: TaxIdentifier;
    highlights?: string[];
    product_publish?: ProductPublish;
    item_code: any;
    is_set?: boolean;
    variant_media?: any;
    change_request_id?: any;
    description?: string;
    requester?: string;
    item_type: string;
    uid?: number;
};
type ValidateIdentifier = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: string;
};
type AllSizes = {
    identifiers?: ValidateIdentifier[];
    item_weight: number;
    item_weight_unit_of_measure: any;
    item_height: number;
    item_dimensions_unit_of_measure: string;
    item_length: number;
    size: any;
    item_width: number;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    full_name?: string;
    username?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    cancelled?: number;
    template?: ProductTemplate;
    template_tag?: string;
    total?: number;
    created_on?: string;
    failed_records?: string[];
    cancelled_records?: string[];
    company_id?: number;
    succeed?: number;
    modified_by?: UserDetail1;
    file_path?: string;
    created_by?: UserDetail1;
    is_active?: boolean;
    modified_on?: string;
    stage?: string;
    failed?: number;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    user_id?: string;
    username?: string;
    email?: string;
    uid?: string;
};
type BulkJob = {
    cancelled?: number;
    tracking_url?: string;
    total?: number;
    template_tag?: string;
    created_on: string;
    failed?: number;
    succeed?: number;
    company_id: number;
    cancelled_records?: any[];
    failed_records?: any[];
    file_path?: string;
    created_by?: UserInfo1;
    is_active?: boolean;
    custom_template_tag?: string;
    modified_on?: string;
    stage?: string;
    modified_by?: UserInfo1;
};
type BulkResponse = {
    batch_id: string;
    created_on: string;
    created_by?: UserInfo1;
    is_active?: boolean;
    modified_on?: string;
    modified_by?: UserInfo1;
};
type BulkProductRequest = {
    data: any[];
    batch_id: string;
    company_id: number;
    template_tag: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type UserCommon = {
    username?: string;
    company_id?: number;
    user_id?: string;
};
type Items = {
    cancelled?: number;
    tracking_url?: string;
    retry?: number;
    id?: string;
    total?: number;
    created_on?: string;
    failed?: number;
    succeed?: number;
    cancelled_records?: string[];
    failed_records?: string[];
    company_id?: number;
    file_path?: string;
    created_by?: UserCommon;
    is_active?: boolean;
    modified_on?: string;
    stage?: string;
    modified_by?: UserCommon;
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
    size?: string;
    item_id?: number;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type InventoryResponse = {
    identifiers?: any;
    store?: any;
    inventory_updated_on?: string;
    currency?: string;
    price_transfer?: number;
    price?: number;
    seller_identifier?: string;
    price_effective?: number;
    quantity?: number;
    item_id?: number;
    size?: string;
    uid?: string;
    sellable_quantity?: number;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type GTIN = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: any;
};
type SetSize = {
    pieces: number;
    size: string;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    size_distribution: SizeDistribution;
    name?: string;
    quantity?: number;
};
type InvSize = {
    identifiers: GTIN[];
    item_weight?: number;
    item_weight_unit_of_measure?: string;
    item_height?: number;
    currency: string;
    price_transfer?: number;
    set?: InventorySet;
    price?: number;
    is_set?: boolean;
    expiration_date?: string;
    item_dimensions_unit_of_measure?: string;
    price_effective: number;
    store_code: string;
    size: any;
    item_length?: number;
    quantity: number;
    item_width?: number;
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
type ManufacturerResponse = {
    is_default: boolean;
    name: string;
    address: string;
};
type Trader1 = {
    name: string;
    address: string[];
    type: string;
};
type BrandMeta = {
    name: string;
    id: number;
};
type CompanyMeta = {
    id: number;
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type DimensionResponse = {
    width: number;
    unit: string;
    is_default: boolean;
    length: number;
    height: number;
};
type PriceMeta = {
    transfer: number;
    currency: string;
    updated_at?: string;
    marked: number;
    effective: number;
    tp_notes?: any;
};
type WeightResponse = {
    is_default: boolean;
    shipping: number;
    unit: string;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    sellable?: QuantityBase;
};
type InventorySellerResponse = {
    track_inventory?: boolean;
    manufacturer: ManufacturerResponse;
    fynd_meta?: any;
    fynd_item_code: string;
    _custom_json?: any;
    trader?: Trader1[];
    set?: InventorySet;
    identifier: any;
    brand: BrandMeta;
    company: CompanyMeta;
    is_active?: boolean;
    total_quantity: number;
    stage?: string;
    return_config?: ReturnConfig1;
    tags?: string[];
    dimension: DimensionResponse;
    price: PriceMeta;
    added_on_store?: string;
    country_of_origin: string;
    expiration_date?: string;
    weight: WeightResponse;
    seller_identifier: string;
    fragile: boolean;
    store: StoreMeta;
    fynd_article_code: string;
    tax_identifier?: any;
    raw_meta?: any;
    is_set?: boolean;
    trace_id?: string;
    meta?: any;
    size: string;
    item_id: number;
    created_by?: UserSerializer;
    uid: string;
    quantities?: Quantities;
    modified_by?: UserSerializer;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BulkInventoryGetItems = {
    cancelled?: number;
    id?: string;
    total?: number;
    created_on?: string;
    failed_records?: string[];
    cancelled_records?: string[];
    company_id?: number;
    modified_by?: any;
    succeed?: number;
    file_path?: string;
    created_by?: any;
    is_active?: boolean;
    modified_on?: string;
    stage?: string;
    failed?: number;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    item_weight_unit_of_measure?: string;
    price_marked?: number;
    currency?: string;
    expiration_date?: string;
    trace_id?: string;
    price?: number;
    seller_identifier: string;
    item_dimensions_unit_of_measure?: string;
    price_effective?: number;
    store_code: string;
    quantity?: number;
    total_quantity?: number;
    tags?: string[];
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    batch_id: string;
    company_id: number;
    user?: any;
};
type InventoryExportQuantityFilter = {
    operators: string;
    min?: number;
    max?: number;
};
type InventoryExportAdvanceOption = {
    brand_ids?: number[];
    from_date?: string;
    store_ids?: number[];
    notification?: boolean;
    quantity?: InventoryExportQuantityFilter;
    to_date?: string;
};
type InventoryExportJob = {
    task_id: string;
    completed_on?: string;
    url?: string;
    seller_id: number;
    status?: string;
    notification_emails?: string[];
    filters?: InventoryExportAdvanceOption;
    type: string;
};
type InventoryExportFilter = {
    brand_ids?: number[];
    from_date?: string;
    store_ids?: number[];
    quantity?: InventoryExportQuantityFilter;
    to_date?: string;
};
type InventoryExportRequest = {
    data?: string[];
    filters: InventoryExportFilter;
    notification_emails?: string[];
    type?: string;
};
type InventoryExportResponse = {
    task_id: string;
    _id?: string;
    request_params?: any;
    seller_id: number;
    created_on?: string;
    status?: string;
    trigger_on?: string;
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    name?: string;
    address?: string;
};
type Trader2 = {
    name?: string;
    address?: string[];
    type?: string;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type CompanyMeta1 = {
    id?: number;
};
type ReturnConfig2 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type DimensionResponse1 = {
    height?: number;
    length?: number;
    width?: number;
    unit?: string;
};
type PriceArticle = {
    transfer?: number;
    currency?: string;
    marked?: number;
    effective?: number;
    tp_notes?: any;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type ArticleStoreResponse = {
    name?: string;
    store_type?: string;
    store_code?: string;
    uid?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    order_committed?: Quantity;
    not_available?: Quantity;
    damaged?: Quantity;
    sellable?: Quantity;
};
type GetInventories = {
    track_inventory?: boolean;
    date_meta?: DateMeta;
    manufacturer?: ManufacturerResponse1;
    id?: string;
    trader?: Trader2[];
    identifier?: any;
    brand?: BrandMeta1;
    company?: CompanyMeta1;
    total_quantity?: number;
    stage?: string;
    return_config?: ReturnConfig2;
    tags?: string[];
    dimension?: DimensionResponse1;
    price?: PriceArticle;
    platforms?: any;
    country_of_origin?: string;
    expiration_date?: string;
    weight?: WeightResponse1;
    seller_identifier?: string;
    store?: ArticleStoreResponse;
    tax_identifier?: any;
    inventory_updated_on?: string;
    is_set?: boolean;
    trace_id?: string;
    size?: string;
    item_id?: number;
    created_by?: UserSerializer;
    uid?: string;
    quantities?: QuantitiesArticle;
    modified_by?: UserSerializer;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type FilerList = {
    value?: string;
    display?: string;
};
type InventoryConfig = {
    data?: FilerList[];
    multivalues?: boolean;
};
type InventoryPayload = {
    store_id: number;
    price_marked?: number;
    expiration_date?: string;
    trace_id?: string;
    seller_identifier: string;
    price_effective?: number;
    total_quantity?: number;
    tags?: string[];
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    meta?: any;
    company_id: number;
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
    has_next?: boolean;
    item_total?: number;
    current?: string;
    size?: number;
    has_previous?: boolean;
};
type HsnCodesObject = {
    tax_on_esp?: boolean;
    hs2_code?: string;
    threshold1?: number;
    id?: string;
    tax1?: number;
    hsn_code?: string;
    company_id?: number;
    threshold2?: number;
    tax_on_mrp?: boolean;
    tax2?: number;
    modified_on?: string;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    tax_on_esp?: boolean;
    hs2_code: string;
    threshold1: number;
    tax1: number;
    hsn_code: string;
    company_id: number;
    threshold2?: number;
    tax_on_mrp: boolean;
    tax2?: number;
    is_active?: boolean;
    uid?: number;
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
    rate: number;
    effective_date: string;
    cess?: number;
    threshold: number;
};
type HSNDataInsertV2 = {
    taxes: TaxSlab[];
    hsn_code: string;
    description: string;
    created_on?: string;
    reporting_hsn: string;
    created_by?: any;
    country_code: string;
    modified_on?: string;
    type: string;
    modified_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    slug?: string;
    logo?: Media;
    name?: string;
    action?: Action;
    departments?: string[];
    discount?: string;
    banners?: ImageUrls;
    uid?: number;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    priority_order?: number;
    slug?: string;
    logo?: Media;
    name?: string;
    uid?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    _custom_json?: any;
    slug?: string;
    name?: string;
    action?: Action;
    childs?: any[];
    banners?: ImageUrls;
    uid?: number;
};
type SecondLevelChild = {
    _custom_json?: any;
    slug?: string;
    name?: string;
    action?: Action;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    uid?: number;
};
type Child = {
    _custom_json?: any;
    slug?: string;
    name?: string;
    action?: Action;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    uid?: number;
};
type CategoryItems = {
    slug?: string;
    name?: string;
    action?: Action;
    childs?: Child[];
    banners?: ImageUrls;
    uid?: number;
};
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type CategoryListingResponse = {
    data?: DepartmentCategoryTree[];
    departments?: DepartmentIdentifier[];
};
type ApplicationProductListingResponse = {
    sort_on?: ProductSortOn[];
    operators?: any;
    page: Page;
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
};
type ProductDetail = {
    product_online_date?: string;
    medias?: Media1[];
    brand?: ProductBrand;
    color?: string;
    tryouts?: string[];
    type?: string;
    attributes?: any;
    similars?: string[];
    image_nature?: string;
    name?: string;
    has_variant?: boolean;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    teaser_tag?: any;
    rating?: number;
    promo_meta?: any;
    slug: string;
    rating_count?: number;
    short_description?: string;
    highlights?: string[];
    item_code?: string;
    description?: string;
    item_type?: string;
    uid?: number;
};
type InventoryPage = {
    next_id?: string;
    has_next?: boolean;
    item_total: number;
    has_previous?: boolean;
    type: string;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    opening?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
};
type UserSerializer1 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetAddressSerializer = {
    city?: string;
    landmark?: string;
    state?: string;
    address_type?: string;
    address1?: string;
    latitude?: number;
    country_code?: string;
    country?: string;
    longitude?: number;
    pincode?: number;
    address2?: string;
};
type GetCompanySerializer = {
    verified_by?: UserSerializer1;
    business_type?: string;
    verified_on?: string;
    stage?: string;
    created_on?: string;
    name?: string;
    reject_reason?: string;
    created_by?: UserSerializer1;
    modified_on?: string;
    addresses?: GetAddressSerializer[];
    uid?: number;
    company_type?: string;
    modified_by?: UserSerializer1;
};
type InvoiceCredSerializer = {
    username?: string;
    password?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationManagerSerializer = {
    name?: string;
    email?: string;
    mobile_no: SellerPhoneNumber;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type UserSerializer2 = {
    username?: string;
    user_id?: string;
    contact?: string;
};
type GetLocationSerializer = {
    timing?: LocationDayWiseSerializer[];
    _custom_json?: any;
    store_code?: string;
    notification_emails?: string[];
    company?: GetCompanySerializer;
    modified_on?: string;
    display_name: string;
    stage?: string;
    address: GetAddressSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    contact_numbers?: SellerPhoneNumber[];
    name: string;
    store_type?: string;
    verified_on?: string;
    manager?: LocationManagerSerializer;
    integration_type?: LocationIntegrationType;
    product_return_config?: ProductReturnConfigSerializer;
    documents?: Document[];
    phone_number?: string;
    verified_by?: UserSerializer2;
    code: string;
    created_on?: string;
    created_by?: UserSerializer2;
    warnings?: any;
    uid?: number;
    modified_by?: UserSerializer2;
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
    logo?: string;
    name?: string;
    is_active?: boolean;
    uid: number;
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
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type BusinessCountryInfo = {
    country_code?: string;
    country?: string;
};
type CompanyTaxesSerializer = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type GetCompanyProfileSerializerResponse = {
    franchise_enabled?: boolean;
    business_details?: BusinessDetails;
    modified_by?: UserSerializer;
    stage?: string;
    business_info?: string;
    name?: string;
    contact_details?: ContactDetails;
    addresses?: GetAddressSerializer[];
    mode?: string;
    modified_on?: string;
    verified_by?: UserSerializer;
    company_type: string;
    verified_on?: string;
    _custom_json?: any;
    documents?: Document[];
    business_country_info?: BusinessCountryInfo;
    warnings?: any;
    uid: number;
    business_type: string;
    notification_emails?: string[];
    created_by?: UserSerializer;
    taxes?: CompanyTaxesSerializer[];
    created_on?: string;
};
type CreateUpdateAddressSerializer = {
    city: string;
    latitude: number;
    country: string;
    address_type: string;
    landmark?: string;
    country_code?: string;
    address2?: string;
    longitude: number;
    pincode: number;
    address1: string;
    state: string;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type UpdateCompany = {
    franchise_enabled?: boolean;
    company_type?: string;
    reject_reason?: string;
    business_details?: BusinessDetails;
    contact_details?: ContactDetails;
    addresses?: CreateUpdateAddressSerializer[];
    _custom_json?: any;
    documents?: Document[];
    taxes?: CompanyTaxesSerializer1[];
    business_info?: string;
    warnings?: any;
    business_type?: string;
    name?: string;
    notification_emails?: string[];
};
type ProfileSuccessResponse = {
    uid?: number;
    success?: boolean;
};
type DocumentsObj = {
    verified?: number;
    pending?: number;
};
type MetricsSerializer = {
    company_documents?: DocumentsObj;
    store?: DocumentsObj;
    brand?: DocumentsObj;
    stage?: string;
    store_documents?: DocumentsObj;
    uid?: number;
    product?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    modified_by?: UserSerializer;
    stage?: string;
    slug_key?: string;
    banner?: BrandBannerSerializer;
    name: string;
    _locale_language?: any;
    mode?: string;
    modified_on?: string;
    verified_by?: UserSerializer;
    verified_on?: string;
    _custom_json?: any;
    warnings?: any;
    uid?: number;
    synonyms?: string[];
    created_by?: UserSerializer;
    reject_reason?: string;
    created_on?: string;
    logo?: string;
    description?: string;
};
type CreateUpdateBrandRequestSerializer = {
    banner?: BrandBannerSerializer;
    brand_tier?: string;
    _locale_language?: any;
    company_id?: number;
    _custom_json?: any;
    uid?: number;
    synonyms?: string[];
    logo: string;
    name: string;
    description?: string;
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanyDetails = {
    socials?: CompanySocialAccounts[];
    website_url?: string;
};
type CompanySerializer = {
    modified_on?: string;
    verified_by?: UserSerializer;
    company_type: string;
    details?: CompanyDetails;
    created_by?: UserSerializer;
    notification_emails?: string[];
    reject_reason?: string;
    modified_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    stage?: string;
    verified_on?: string;
    _custom_json?: any;
    business_country_info?: BusinessCountryInfo;
    created_on?: string;
    uid?: number;
    business_type: string;
    name?: string;
    market_channels?: string[];
};
type CompanyBrandSerializer = {
    modified_on?: string;
    verified_by?: UserSerializer;
    company?: CompanySerializer;
    created_by?: UserSerializer;
    reject_reason?: string;
    warnings?: any;
    brand?: GetBrandResponseSerializer;
    modified_by?: UserSerializer;
    stage?: string;
    verified_on?: string;
    created_on?: string;
    uid?: number;
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
    start_date: string;
    end_date: string;
};
type HolidaySchemaSerializer = {
    title: string;
    holiday_type: string;
    date: HolidayDateSerializer;
};
type AddressSerializer = {
    city?: string;
    latitude: number;
    country?: string;
    landmark?: string;
    pincode?: number;
    country_code?: string;
    address2?: string;
    longitude: number;
    address_type?: string;
    address1?: string;
    state?: string;
};
type LocationSerializer = {
    company: number;
    contact_numbers?: SellerPhoneNumber[];
    holiday?: HolidaySchemaSerializer[];
    product_return_config?: ProductReturnConfigSerializer;
    stage?: string;
    manager?: LocationManagerSerializer;
    _custom_json?: any;
    display_name: string;
    documents?: Document[];
    code: string;
    address: AddressSerializer;
    timing?: LocationDayWiseSerializer[];
    warnings?: any;
    uid?: number;
    store_type?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    name: string;
    notification_emails?: string[];
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleQuery = {
    ignored_stores?: number[];
    size?: string;
    item_id?: number;
};
type _ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type _AssignStoreArticle = {
    query?: _ArticleQuery;
    article_assignment?: _ArticleAssignment;
    group_id?: string;
    quantity?: number;
    meta?: any;
};
type AssignStoreRequestValidator = {
    articles?: _AssignStoreArticle[];
    channel_type?: string;
    app_id?: string;
    company_id?: number;
    channel_identifier?: string;
    store_ids?: number[];
    pincode?: string;
};
type AssignStoreResponseSerializer = {
    index?: number;
    price_marked?: number;
    store_id?: number;
    _id?: string;
    price_effective?: number;
    article_assignment?: _ArticleAssignment;
    size?: string;
    store_pincode?: string;
    s_city?: string;
    company_id?: number;
    status?: boolean;
    uid?: string;
    quantity?: number;
    item_id?: number;
    meta?: any;
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
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    networks?: string[];
    codes?: string[];
    uses?: PaymentAllowValue;
    types?: string[];
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
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PriceRange = {
    min?: number;
    max?: number;
};
type Restrictions = {
    platforms?: string[];
    post_order?: PostOrder;
    payments?: any;
    uses?: UsesRestriction;
    bulk_bundle?: BulkBundleRestriction;
    user_type?: string;
    coupon_allowed?: boolean;
    ordering_stores?: number[];
    user_groups?: number[];
    price_range?: PriceRange;
};
type RuleDefinition = {
    applicable_on: string;
    scope?: string[];
    value_type: string;
    type: string;
    is_exact?: boolean;
    auto_apply?: boolean;
    currency_code?: string;
    calculate_on: string;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type Validity = {
    priority?: number;
};
type CouponSchedule = {
    next_schedule?: any[];
    end?: string;
    cron?: string;
    duration?: number;
    start?: string;
};
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Rule = {
    value?: number;
    key?: number;
    max?: number;
    min?: number;
    discount_qty?: number;
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    title?: string;
    description?: string;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    subtitle?: string;
    remove?: DisplayMetaDict;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type State = {
    is_archived?: boolean;
    is_display?: boolean;
    is_public?: boolean;
};
type CouponAdd = {
    restrictions?: Restrictions;
    rule_definition: RuleDefinition;
    action?: CouponAction;
    identifiers: Identifier;
    validity: Validity;
    _schedule?: CouponSchedule;
    validation?: Validation;
    date_meta?: CouponDateMeta;
    code: string;
    rule: Rule[];
    display_meta: DisplayMeta;
    author?: CouponAuthor;
    ownership: Ownership;
    tags?: string[];
    state?: State;
    type_slug: string;
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
    restrictions?: Restrictions;
    rule_definition: RuleDefinition;
    action?: CouponAction;
    identifiers: Identifier;
    validity: Validity;
    _schedule?: CouponSchedule;
    validation?: Validation;
    date_meta?: CouponDateMeta;
    code: string;
    rule: Rule[];
    display_meta: DisplayMeta;
    author?: CouponAuthor;
    ownership: Ownership;
    tags?: string[];
    state?: State;
    type_slug: string;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type PromotionSchedule = {
    next_schedule?: any[];
    end?: string;
    cron?: string;
    duration?: number;
    start: string;
    published: boolean;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CompareObject = {
    less_than_equals?: number;
    less_than?: number;
    equals?: number;
    greater_than?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    item_exclude_category?: number[];
    item_exclude_company?: number[];
    item_sku?: string[];
    product_tags?: string[];
    cart_quantity?: CompareObject;
    cart_total?: CompareObject;
    cart_unique_item_quantity?: CompareObject;
    cart_unique_item_amount?: CompareObject;
    item_size?: string[];
    item_category?: number[];
    item_id?: number[];
    buy_rules?: string[];
    item_store?: number[];
    item_company?: number[];
    available_zones?: string[];
    item_brand?: number[];
    all_items?: boolean;
    item_exclude_sku?: string[];
    item_exclude_brand?: number[];
    item_exclude_store?: number[];
    item_exclude_id?: number[];
};
type DiscountOffer = {
    max_usage_per_transaction?: number;
    discount_percentage?: number;
    discount_amount?: number;
    max_offer_quantity?: number;
    code?: string;
    max_discount_amount?: number;
    partial_can_ret?: boolean;
    apportion_discount?: boolean;
    min_offer_quantity?: number;
    discount_price?: number;
};
type DiscountRule = {
    discount_type: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
    buy_condition: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    uses?: PaymentAllowValue1;
    codes?: string[];
    type: string;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type Restrictions1 = {
    platforms?: string[];
    post_order?: PostOrder1;
    user_id?: string[];
    uses: UsesRestriction1;
    payments?: PromotionPaymentModes[];
    order_quantity?: number;
    user_registered?: UserRegistered;
    user_groups?: number[];
    anonymous_users?: boolean;
};
type DisplayMeta1 = {
    description?: string;
    name?: string;
    offer_label?: string;
    offer_text?: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionListItem = {
    _schedule?: PromotionSchedule;
    application_id: string;
    stackable?: boolean;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
    currency?: string;
    _custom_json?: any;
    mode: string;
    apply_exclusive?: string;
    discount_rules: DiscountRule[];
    buy_rules: any;
    code?: string;
    ownership: Ownership1;
    visiblility?: Visibility;
    apply_priority?: number;
    restrictions?: Restrictions1;
    promo_group: string;
    promotion_type: string;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    apply_all_discount?: boolean;
    calculate_on?: string;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    _schedule?: PromotionSchedule;
    application_id: string;
    stackable?: boolean;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
    currency?: string;
    _custom_json?: any;
    mode: string;
    apply_exclusive?: string;
    discount_rules: DiscountRule[];
    buy_rules: any;
    code?: string;
    ownership: Ownership1;
    visiblility?: Visibility;
    apply_priority?: number;
    restrictions?: Restrictions1;
    promo_group: string;
    promotion_type: string;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    apply_all_discount?: boolean;
    calculate_on?: string;
};
type PromotionUpdate = {
    _schedule?: PromotionSchedule;
    application_id: string;
    stackable?: boolean;
    date_meta?: PromotionDateMeta;
    author?: PromotionAuthor;
    currency?: string;
    _custom_json?: any;
    mode: string;
    apply_exclusive?: string;
    discount_rules: DiscountRule[];
    buy_rules: any;
    code?: string;
    ownership: Ownership1;
    visiblility?: Visibility;
    apply_priority?: number;
    restrictions?: Restrictions1;
    promo_group: string;
    promotion_type: string;
    display_meta: DisplayMeta1;
    post_order_action?: PromotionAction;
    apply_all_discount?: boolean;
    calculate_on?: string;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    created_on?: string;
    is_hidden?: boolean;
    entity_slug?: string;
    title?: string;
    type?: string;
    description?: string;
    modified_on?: string;
    subtitle?: string;
    example?: string;
    entity_type?: string;
};
type CartItem = {
    size: string;
    product_id: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type PromoMeta = {
    message?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type ProductPrice = {
    effective?: number;
    add_on?: number;
    marked?: number;
    currency_code?: string;
    selling?: number;
    currency_symbol?: string;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type ProductAvailability = {
    other_store_quantity?: number;
    sizes?: string[];
    is_valid?: boolean;
    deliverable?: boolean;
    out_of_stock?: boolean;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    url?: string;
    query?: ActionQuery;
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
    type?: string;
    brand?: BaseInfo;
    slug?: string;
    net_quantity?: NetQuantity;
    categories?: CategoryInfo[];
    name?: string;
    uid?: number;
    images?: ProductImage[];
};
type BasePrice = {
    marked?: number;
    currency_code?: string;
    currency_symbol?: string;
    effective?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    parent_item_identifiers?: any;
    store?: BaseInfo;
    quantity?: number;
    type?: string;
    _custom_json?: any;
    size?: string;
    price?: ArticlePriceInfo;
    extra_meta?: any;
    product_group_tags?: string[];
    uid?: string;
    seller?: BaseInfo;
};
type FreeGiftItem = {
    item_price_details?: any;
    item_id?: number;
    item_brand_name?: string;
    item_name?: string;
    item_slug?: string;
    item_images_url?: string[];
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
    article_id?: string;
    parent_item_identifier?: string;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    raw_offer?: any;
    item_criteria?: any;
    offer?: any;
};
type AppliedPromotion = {
    amount?: number;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    promo_id?: string;
    promotion_type?: string;
    offer_text?: string;
    mrp_promotion?: boolean;
    applied_free_articles?: AppliedFreeArticles[];
    ownership?: Ownership2;
    promotion_group?: string;
    discount_rules?: DiscountRulesApp[];
    promotion_name?: string;
};
type CartProductInfo = {
    parent_item_identifiers?: any;
    promo_meta?: PromoMeta;
    identifiers: CartProductIdentifer;
    key?: string;
    quantity?: number;
    discount?: string;
    bulk_offer?: any;
    price?: ProductPriceInfo;
    coupon_message?: string;
    is_set?: boolean;
    availability?: ProductAvailability;
    product?: CartProduct;
    price_per_unit?: ProductPriceInfo;
    article?: ProductArticle;
    message?: string;
    promotions_applied?: AppliedPromotion[];
};
type LoyaltyPoints = {
    description?: string;
    is_applied?: boolean;
    applicable?: number;
    total?: number;
};
type CouponBreakup = {
    value?: number;
    title?: string;
    coupon_value?: number;
    type?: string;
    description?: string;
    is_applied?: boolean;
    code?: string;
    message?: string;
    sub_title?: string;
    max_discount_value?: number;
    uid?: string;
    coupon_type?: string;
    minimum_cart_value?: number;
};
type DisplayBreakup = {
    value?: number;
    key?: string;
    display?: string;
    currency_code?: string;
    message?: string[];
    currency_symbol?: string;
};
type RawBreakup = {
    fynd_cash?: number;
    discount?: number;
    vog?: number;
    convenience_fee?: number;
    mrp_total?: number;
    you_saved?: number;
    gst_charges?: number;
    subtotal?: number;
    total?: number;
    coupon?: number;
    cod_charge?: number;
    delivery_charge?: number;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    raw?: RawBreakup;
};
type OpenapiCartDetailsResponse = {
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    message?: string;
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    errors?: any;
    message?: string;
    success?: boolean;
};
type ShippingAddress = {
    address_type?: string;
    country_code?: string;
    area_code_slug?: string;
    phone?: number;
    landmark?: string;
    meta?: any;
    country_phone_code?: string;
    area_code: string;
    city?: string;
    country?: string;
    email?: string;
    country_iso_code?: string;
    name?: string;
    area?: string;
    state?: string;
    pincode?: number;
    address?: string;
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
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    message?: string;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
type OpenApiOrderItem = {
    product_id: number;
    quantity?: number;
    discount: number;
    amount_paid: number;
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
    files?: OpenApiFiles[];
    coupon_effective_discount: number;
    delivery_charges: number;
    meta?: CartItemMeta;
    cod_charges: number;
    cashback_applied: number;
    price_marked: number;
    size: string;
    employee_discount?: number;
    extra_meta?: any;
    price_effective: number;
};
type OpenApiPlatformCheckoutReq = {
    billing_address: ShippingAddress;
    payment_methods: MultiTenderPaymentMethod[];
    loyalty_discount?: number;
    files?: OpenApiFiles[];
    cart_items: OpenApiOrderItem[];
    delivery_charges: number;
    comment?: string;
    coupon_code: string;
    affiliate_order_id?: string;
    cashback_applied: number;
    gstin?: string;
    shipping_address?: ShippingAddress;
    cart_value: number;
    coupon_value: number;
    order_id?: string;
    cod_charges: number;
    currency_code?: string;
    coupon?: string;
    employee_discount?: any;
    payment_mode?: string;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    order_ref_id?: string;
    message?: string;
    success?: boolean;
};
type AbandonedCart = {
    fynd_credits?: any;
    delivery_charges?: any;
    promotion?: any;
    fc_index_map?: number[];
    is_default: boolean;
    meta?: any;
    gstin?: string;
    pick_up_customer_details?: any;
    articles: any[];
    last_modified: string;
    order_id?: string;
    checkout_mode?: string;
    cashback: any;
    is_archive?: boolean;
    cod_charges?: any;
    expire_at: string;
    buy_now?: boolean;
    bulk_coupon_discount?: number;
    payment_mode?: string;
    comment?: string;
    user_id: string;
    shipments?: any[];
    discount?: number;
    payment_methods?: any[];
    merge_qty?: boolean;
    is_active?: boolean;
    app_id?: string;
    created_on: string;
    payments?: any;
    cart_value?: number;
    uid: number;
    coupon?: any;
    _id: string;
};
type AbandonedCartResponse = {
    items?: AbandonedCart[];
    success?: boolean;
    page?: Page;
    message?: string;
    result?: any;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    items?: CartProductInfo[];
    id?: string;
    delivery_promise?: ShipmentPromise;
    last_modified?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
    coupon_text?: string;
    breakup_values?: CartBreakup;
    restrict_checkout?: boolean;
    is_valid?: boolean;
    gstin?: string;
    buy_now?: boolean;
    message?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    comment?: string;
};
type AddProductCart = {
    parent_item_identifiers?: any;
    item_id?: number;
    quantity?: number;
    seller_id?: number;
    article_assignment?: any;
    display?: string;
    article_id?: string;
    _custom_json?: any;
    store_id?: number;
    product_group_tags?: string[];
    item_size?: string;
    extra_meta?: any;
    pos?: boolean;
};
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    partial?: boolean;
    cart?: CartDetailResponse;
    message?: string;
    success?: boolean;
};
type UpdateProductCart = {
    parent_item_identifiers?: any;
    item_id?: number;
    quantity?: number;
    identifiers: CartProductIdentifer;
    _custom_json?: any;
    article_id?: string;
    item_index?: number;
    item_size?: string;
    extra_meta?: any;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    message?: string;
    success?: boolean;
};
type GetShareCartLinkRequest = {
    id?: string;
    meta?: any;
};
type GetShareCartLinkResponse = {
    token?: string;
    share_url?: string;
};
type SharedCartDetails = {
    created_on?: string;
    source?: any;
    token?: string;
    meta?: any;
    user?: any;
};
type SharedCart = {
    id?: string;
    gstin?: string;
    cart_id?: number;
    message?: string;
    last_modified?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
    coupon_text?: string;
    shared_cart_details?: SharedCartDetails;
    buy_now?: boolean;
    comment?: string;
    breakup_values?: CartBreakup;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    is_valid?: boolean;
    uid?: string;
    delivery_charge_info?: string;
};
type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
type CartList = {
    created_on?: string;
    user_id?: string;
    cart_value?: string;
    item_counts?: string;
    cart_id?: string;
};
type MultiCartResponse = {
    data?: CartList[];
    success?: boolean;
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    items?: CartProductInfo[];
    id?: string;
    delivery_promise?: ShipmentPromise;
    last_modified?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
    coupon_text?: string;
    breakup_values?: CartBreakup;
    restrict_checkout?: boolean;
    is_valid?: boolean;
    gstin?: string;
    buy_now?: boolean;
    message?: string;
    user?: UserInfo;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    comment?: string;
};
type DeleteCartDetailResponse = {
    message?: string;
    success?: boolean;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type PageCoupon = {
    has_previous?: boolean;
    has_next?: boolean;
    current?: number;
    total_item_count?: number;
    total?: number;
};
type Coupon = {
    coupon_value?: number;
    title?: string;
    description?: string;
    is_applicable?: boolean;
    is_applied?: boolean;
    coupon_code?: string;
    coupon_type?: string;
    sub_title?: string;
    message?: string;
    max_discount_value?: number;
    expires_on?: string;
    minimum_cart_value?: number;
};
type GetCouponResponse = {
    page?: PageCoupon;
    available_coupon_list?: Coupon[];
};
type ApplyCouponRequest = {
    coupon_code: string;
};
type GeoLocation = {
    longitude?: number;
    latitude?: number;
};
type PlatformAddress = {
    id?: string;
    phone?: string;
    meta?: any;
    cart_id?: string;
    email?: string;
    state?: string;
    created_by_user_id?: string;
    checkout_mode?: string;
    area_code?: string;
    name?: string;
    tags?: string[];
    area?: string;
    address_type?: string;
    user_id?: string;
    country_code?: string;
    area_code_slug?: string;
    is_active?: boolean;
    country?: string;
    city?: string;
    address?: string;
    is_default_address?: boolean;
    landmark?: string;
    geo_location?: GeoLocation;
    google_map_point?: any;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type SaveAddressResponse = {
    id?: string;
    success?: boolean;
    is_default_address?: boolean;
};
type UpdateAddressResponse = {
    success?: boolean;
    id?: string;
    is_updated?: boolean;
    is_default_address?: boolean;
};
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
type PlatformSelectCartAddressRequest = {
    id?: string;
    checkout_mode?: string;
    billing_address_id?: string;
    cart_id?: string;
};
type ShipmentResponse = {
    order_type?: string;
    items?: CartProductInfo[];
    shipments?: number;
    dp_options?: any;
    shipment_type?: string;
    box_type?: string;
    fulfillment_type?: string;
    dp_id?: string;
    promise?: ShipmentPromise;
    fulfillment_id?: number;
};
type CartShipmentsResponse = {
    id?: string;
    shipments?: ShipmentResponse[];
    error?: boolean;
    breakup_values?: CartBreakup;
    restrict_checkout?: boolean;
    gstin?: string;
    cart_id?: number;
    message?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_promise?: ShipmentPromise;
    last_modified?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
    coupon_text?: string;
    is_valid?: boolean;
    buy_now?: boolean;
    uid?: string;
    delivery_charge_info?: string;
    comment?: string;
};
type UpdateCartShipmentItem = {
    article_uid: string;
    quantity?: number;
    shipment_type: string;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    pick_up_customer_details?: any;
    checkout_mode?: string;
    gstin?: string;
    pan_no?: string;
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
    user: string;
    _id: string;
};
type Files = {
    values: string[];
    key: string;
};
type PlatformCartCheckoutDetailRequest = {
    aggregator?: string;
    id: string;
    billing_address?: any;
    meta?: any;
    extra_meta?: any;
    ordering_store?: number;
    payment_mode: string;
    payment_auto_confirm?: boolean;
    merchant_code?: string;
    delivery_address?: any;
    user_id: string;
    billing_address_id?: string;
    address_id?: string;
    pick_at_store_uid?: number;
    payment_identifier?: string;
    pos?: boolean;
    order_type: string;
    payment_params?: any;
    callback_url?: string;
    staff?: StaffCheckout;
    files?: Files[];
};
type CheckCart = {
    id?: string;
    delivery_charges?: number;
    cod_available?: boolean;
    gstin?: string;
    cart_id?: number;
    message?: string;
    store_emps?: any[];
    user_type?: string;
    last_modified?: string;
    checkout_mode?: string;
    currency?: CartCurrency;
    order_id?: string;
    coupon_text?: string;
    success?: boolean;
    cod_charges?: number;
    buy_now?: boolean;
    comment?: string;
    store_code?: string;
    breakup_values?: CartBreakup;
    restrict_checkout?: boolean;
    cod_message?: string;
    payment_selection_lock?: PaymentSelectionLock;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    error_message?: string;
    delivery_charge_order_value?: number;
    is_valid?: boolean;
    uid?: string;
    delivery_charge_info?: string;
};
type CartCheckoutResponse = {
    payment_confirm_url?: string;
    order_id?: string;
    app_intercept_url?: string;
    success?: boolean;
    callback_url?: string;
    cart?: CheckCart;
    message?: string;
    data?: any;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    address_type?: string;
    id?: number;
    store_code?: string;
    area_code_slug?: string;
    phone?: string;
    area_code?: string;
    landmark?: string;
    city?: string;
    uid?: number;
    email?: string;
    country?: string;
    name?: string;
    area?: string;
    state?: string;
    pincode?: number;
    address?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    merchant_code?: string;
    id?: string;
    address_id?: string;
    aggregator_name?: string;
    payment_identifier?: string;
    payment_mode?: string;
};
type CouponValidity = {
    valid?: boolean;
    title?: string;
    discount?: number;
    code?: string;
    display_message_en?: string;
};
type PaymentCouponValidate = {
    coupon_validity?: CouponValidity;
    message?: string;
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
