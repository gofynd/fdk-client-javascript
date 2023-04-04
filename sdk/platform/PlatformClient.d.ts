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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, SessionListResponseInfo, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserEmails, UserPhoneNumbers, GenerateSEOContent, GeneratedSEOContent, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, PathSourceSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutMoreAttributes, PayoutCustomer, PayoutAggregator, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, UserDataInfo, PaymentModeInfo, PlatformItem, Prices, GSTDetailsData, BagUnit, ShipmentStatus, ShipmentItemFulFillingStore, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, OrderDetailsData, BagStateMapper, BagStatusHistory, ShipmentStatusData, UserDetailsData, InvoiceInfo, DPDetailsData, ShipmentPayments, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBrandName, OrderBagArticle, BagGST, BagConfigs, CurrentStatus, PlatformDeliveryAddress, Identifier, FinancialBreakup, OrderBags, Dimensions, Meta, OrderingStoreDetails, AffiliateMeta, BuyerDetails, LockData, ShipmentTimeStamp, EInvoice, EinvoiceInfo, Formatted, DebugInfo, ShipmentMeta, PDFLinks, AffiliateDetails, TrackingList, PhoneDetails, ContactDetails, CompanyDetails, FulfillingStore, PlatformShipment, ShipmentInfoResponse, BillingStaffDetails, PlatformUserDetails, TransactionData, OrderMeta, TaxDetails, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, BagReturnableCancelableStatus, Brand, Dates, Weight, ReturnConfig, Article, ArticleDetails, BagGSTDetails, AffiliateBagDetails, Attributes, Item, B2BPODetails, BagMeta, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, StoreMeta, StoreAddress, Store, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, Products, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateStoreIdMapping, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, OrderUser, UserData, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, OrderPriority, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, PostHistoryData, PostHistoryFilters, PostActivityHistory, PostHistoryDict, PostShipmentHistory, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, ShippingInfo, Tax, Charge, TaxInfo, BillingInfo, PaymentMethod, PaymentInfo, ProcessingDates, LineItem, Shipment, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Size, Price, LimitedProductData, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, ApplicationItemSEO, ApplicationItemMOQ, MetaFields, ApplicationItemMeta, SuccessResponse1, SEOData, MOQData, OwnerAppItemResponse, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, SeoDetail, UserInfo, CollectionBadge, CollectionQuery, CollectionSchedule, CollectionImage, CollectionBanner, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, AttributeSchemaRange, AttributeMaster, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, CategoryMappingValues, CategoryMapping, Hierarchy, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, ProductPublish, CustomOrder, TeaserTag, NetQuantity, Trader, TaxIdentifier, ProductCreateUpdateSchemaV2, ProductPublish1, NetQuantityResponse, Logo, Image, ReturnConfigResponse, ProductSchemaV2, ProductListingResponseV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, InventoryResponse, InventoryResponsePaginated, ManufacturerResponse, DimensionResponse, WeightResponse, CompanyMeta, QuantityBase, Quantities, PriceMeta, Trader1, ReturnConfig1, BrandMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ManufacturerResponse1, DimensionResponse1, WeightResponse1, ArticleStoreResponse, CompanyMeta1, Quantity, QuantitiesArticle, PriceArticle, Trader2, ReturnConfig2, BrandMeta1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, BulkHsnUpsert, BulkHsnResponse, PageResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, UserSerializer1, ProductReturnConfigSerializer, UserSerializer2, GetAddressSerializer, GetCompanySerializer, LocationTimingSerializer, LocationDayWiseSerializer, LocationIntegrationType, InvoiceCredSerializer, InvoiceDetailsSerializer, SellerPhoneNumber, LocationManagerSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, Website, BusinessDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CommunicationConfig, CommsConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, UsesRemaining, UsesRestriction, PriceRange, PostOrder, BulkBundleRestriction, PaymentAllowValue, PaymentModes, Restrictions, DisplayMetaDict, DisplayMeta, Rule, State, CouponDateMeta, CouponSchedule, CouponAction, Validity, Validation, Ownership, RuleDefinition, CouponAuthor, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, UserRegistered, UsesRemaining1, UsesRestriction1, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, Restrictions1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, DisplayMeta1, PromotionDateMeta, PromotionAuthor, PromotionAction, Visibility, PromotionSchedule, Ownership1, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, LoyaltyPoints, DisplayBreakup, CouponBreakup, RawBreakup, CartBreakup, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, ProductAvailability, ProductPrice, ProductPriceInfo, PromoMeta, CategoryInfo, ProductImage, ActionQuery, ProductAction, CartProduct, DiscountRulesApp, FreeGiftItem, AppliedFreeArticles, Ownership2, AppliedPromotion, CartProductIdentifer, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartRequest, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, Files, StaffCheckout, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    created: boolean;
    excluded_fields: string[];
    app_id: string;
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
    merchant_salt: string;
    secret: string;
    key: string;
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
    exp_month?: number;
    card_brand_image?: string;
    card_brand?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    remaining_limit?: number;
    retry_count?: number;
    expired?: boolean;
    card_number?: string;
    code?: string;
    card_issuer?: string;
    nickname?: string;
    card_id?: string;
    intent_app?: IntentApp[];
    intent_app_error_list?: string[];
    card_fingerprint?: string;
    cod_limit_per_order?: number;
    card_isin?: string;
    aggregator_name: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_name?: string;
    logo_url?: PaymentModeLogo;
    intent_flow?: boolean;
    merchant_code?: string;
    name?: string;
    card_reference?: string;
    cod_limit?: number;
    card_token?: string;
    display_name?: string;
    display_priority?: number;
    card_type?: string;
    fynd_vpa?: string;
    exp_year?: number;
    timeout?: number;
};
type RootPaymentMode = {
    display_name: string;
    anonymous_enable?: boolean;
    is_pay_by_card_pl?: boolean;
    aggregator_name?: string;
    display_priority: number;
    list?: PaymentModeList[];
    add_card_enabled?: boolean;
    save_card?: boolean;
    name: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutMoreAttributes = {
    account_type?: string;
    account_no?: string;
    ifsc_code?: string;
    state?: string;
    bank_name?: string;
    country?: string;
    branch_name?: string;
    account_holder?: string;
    city?: string;
};
type PayoutCustomer = {
    mobile?: string;
    unique_external_id?: string;
    id?: number;
    name?: string;
};
type PayoutAggregator = {
    aggregator_fund_id?: number;
    aggregator_id?: number;
    payout_details_id?: number;
};
type Payout = {
    transfer_type: string;
    more_attributes: PayoutMoreAttributes;
    unique_transfer_no: string;
    customers: PayoutCustomer;
    payouts_aggregators?: PayoutAggregator[];
    is_default: boolean;
    is_active: boolean;
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    account_no?: string;
    ifsc_code: string;
    pincode?: number;
    bank_name?: string;
    state?: string;
    city?: string;
    country?: string;
    branch_name?: string;
    account_holder?: string;
    account_type: string;
};
type PayoutRequest = {
    transfer_type: string;
    unique_external_id: string;
    aggregator: string;
    users: any;
    bank_details: PayoutBankDetails;
    is_active: boolean;
};
type PayoutResponse = {
    success: boolean;
    transfer_type: string;
    payment_status: string;
    unique_transfer_no: string;
    created: boolean;
    payouts: any;
    aggregator: string;
    users: any;
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
    unique_external_id: string;
    is_active: boolean;
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
    account_no: string;
    ifsc_code: string;
    bank_name: string;
    branch_name: string;
    account_holder: string;
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
    account_no: string;
    comment?: string;
    id: number;
    is_active: boolean;
    bank_name: string;
    mobile?: string;
    address: string;
    title: string;
    subtitle: string;
    branch_name?: string;
    beneficiary_id: string;
    transfer_mode: string;
    delights_user_name?: string;
    ifsc_code: string;
    created_on: string;
    display_name: string;
    email: string;
    modified_on: string;
    account_holder: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    payment_gateway?: string;
    current_status?: string;
    payment_id?: string;
    extra_meta?: any;
};
type MultiTenderPaymentMethod = {
    amount: number;
    meta?: MultiTenderPaymentMeta;
    name?: string;
    mode: string;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    order_id: string;
    success: boolean;
    message: string;
};
type PlatformPaymentOptions = {
    payment_selection_lock?: any;
    source: string;
    enabled: boolean;
    cod_charges?: number;
    mode_of_payment: string;
    callback_url?: any;
    cod_amount_limit?: number;
    methods: any;
    anonymous_cod?: boolean;
};
type PlatfromPaymentConfig = {
    success: boolean;
    message: string;
    data: PlatformPaymentOptions;
};
type UpdatePlatformPaymentConfig = {
    payment_selection_lock?: any;
    cod_charges?: number;
    cod_amount_limit?: number;
    methods: any;
    anonymous_cod?: boolean;
};
type CODdata = {
    user_id: string;
    limit: number;
    usages: number;
    remaining_limit: number;
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
    models: string[];
    aggregator_id: number;
    aggregator: string;
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
    store_id: number;
    edc_model: string;
    aggregator_id: number;
    device_tag?: string;
    terminal_serial_no: string;
    edc_device_serial_no: string;
};
type EdcDevice = {
    store_id: number;
    edc_model?: string;
    aggregator_id: number;
    device_tag: string;
    aggregator_name?: string;
    terminal_serial_no: string;
    application_id: string;
    terminal_unique_identifier: string;
    edc_device_serial_no: string;
    merchant_store_pos_code?: string;
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
    store_id?: number;
    edc_model?: string;
    aggregator_id?: number;
    device_tag?: string;
    edc_device_serial_no?: string;
    merchant_store_pos_code?: string;
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
    razorpay_payment_id?: string;
    currency: string;
    device_id?: string;
    order_id: string;
    amount: number;
    method: string;
    email: string;
    merchant_order_id: string;
    contact: string;
    customer_id: string;
    vpa?: string;
    timeout?: number;
    aggregator: string;
};
type PaymentInitializationResponse = {
    success: boolean;
    polling_url: string;
    razorpay_payment_id?: string;
    bqr_image?: string;
    currency?: string;
    status?: string;
    virtual_id?: string;
    amount?: number;
    method: string;
    device_id?: string;
    aggregator_order_id?: string;
    upi_poll_url?: string;
    merchant_order_id: string;
    customer_id?: string;
    vpa?: string;
    timeout?: number;
    aggregator: string;
};
type PaymentStatusUpdateRequest = {
    currency: string;
    status: string;
    device_id?: string;
    order_id: string;
    amount: number;
    method: string;
    email: string;
    merchant_order_id: string;
    contact: string;
    customer_id: string;
    vpa?: string;
    aggregator: string;
};
type PaymentStatusUpdateResponse = {
    success?: boolean;
    status: string;
    redirect_url?: string;
    aggregator_name: string;
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
    name?: string;
    text: string;
    value?: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    text: string;
    type: string;
    value: string;
};
type UserDataInfo = {
    email?: string;
    avis_user_id?: string;
    mobile?: string;
    gender?: string;
    is_anonymous_user?: boolean;
    uid?: number;
    last_name?: string;
    first_name?: string;
    name?: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type PlatformItem = {
    code?: string;
    l3_category?: number;
    id?: number;
    images?: string[];
    can_cancel?: boolean;
    department_id?: number;
    image?: string[];
    can_return?: boolean;
    color?: string;
    size?: string;
    l1_category?: string[];
    l3_category_name?: string;
    name?: string;
};
type Prices = {
    fynd_credits?: number;
    promotion_effective_discount?: number;
    price_effective?: number;
    amount_paid?: number;
    price_marked?: number;
    cashback_applied?: number;
    delivery_charge?: number;
    coupon_value?: number;
    discount?: number;
    refund_credit?: number;
    tax_collected_at_source?: number;
    transfer_price?: number;
    cod_charges?: number;
    value_of_good?: number;
    amount_paid_roundoff?: number;
    cashback?: number;
    refund_amount?: number;
};
type GSTDetailsData = {
    gstin_code: string;
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    gst_fee: number;
    value_of_good: number;
};
type BagUnit = {
    item?: PlatformItem;
    ordering_channel: string;
    total_shipment_bags: number;
    bag_id: number;
    status: any;
    can_cancel?: boolean;
    can_return?: boolean;
    prices?: Prices;
    gst?: GSTDetailsData;
    item_quantity: number;
    shipment_id: string;
};
type ShipmentStatus = {
    actual_status: string;
    title: string;
    status: string;
    hex_code: string;
    ops_status: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentItem = {
    application?: any;
    total_shipments_in_order: number;
    company?: any;
    id: string;
    user?: UserDataInfo;
    payment_mode_info?: PaymentModeInfo;
    shipment_created_at: string;
    payment_methods?: any;
    total_bags_count: number;
    bags?: BagUnit[];
    channel?: any;
    prices?: Prices;
    created_at: string;
    shipment_status?: ShipmentStatus;
    shipment_id?: string;
    sla?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    fulfilling_centre: string;
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
    page?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type OrderDetailsData = {
    ordering_channel?: string;
    ordering_channel_logo?: any;
    order_date?: string;
    order_value?: string;
    source?: string;
    tax_details?: any;
    cod_charges?: string;
    affiliate_id?: string;
    fynd_order_id: string;
};
type BagStateMapper = {
    state_type: string;
    bs_id: number;
    journey_type: string;
    app_state_name?: string;
    app_display_name?: string;
    notify_customer?: boolean;
    display_name: string;
    is_active?: boolean;
    app_facing?: boolean;
    name: string;
};
type BagStatusHistory = {
    state_type?: string;
    updated_at?: string;
    bag_id?: number;
    delivery_awb_number?: string;
    reasons?: any[];
    status: string;
    state_id?: number;
    bsh_id?: number;
    kafka_sync?: boolean;
    store_id?: number;
    created_at?: string;
    app_display_name?: string;
    display_name?: string;
    forward?: boolean;
    shipment_id?: string;
    delivery_partner_id?: number;
    bag_state_mapper?: BagStateMapper;
};
type ShipmentStatusData = {
    id?: number;
    bag_list?: string[];
    status?: string;
    created_at?: string;
    shipment_id?: string;
};
type UserDetailsData = {
    area?: string;
    email?: string;
    state: string;
    pincode: string;
    address_type?: string;
    address1?: string;
    city: string;
    landmark?: string;
    address: string;
    phone: string;
    name: string;
    country: string;
};
type InvoiceInfo = {
    label_url?: string;
    store_invoice_id?: string;
    credit_note_id?: string;
    invoice_url?: string;
    updated_date?: string;
};
type DPDetailsData = {
    eway_bill_id?: string;
    id?: number;
    awb_no?: string;
    gst_tag?: string;
    pincode?: string;
    track_url?: string;
    name?: string;
    country?: string;
};
type ShipmentPayments = {
    source?: string;
    mode?: string;
    logo?: string;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    item_criteria?: ItemCriterias;
    cart_conditions?: any;
};
type AppliedPromos = {
    promotion_type?: string;
    amount?: number;
    mrp_promotion?: boolean;
    article_quantity?: number;
    promotion_name?: string;
    promo_id?: string;
    discount_rules?: DiscountRules[];
    buy_rules?: BuyRules[];
};
type OrderBrandName = {
    company: string;
    modified_on?: string;
    id: number;
    brand_name: string;
    created_on: string;
    logo: string;
};
type OrderBagArticle = {
    return_config?: any;
    identifiers?: any;
    uid?: string;
};
type BagGST = {
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    gst_tag?: string;
    brand_calculated_amount?: number;
    gst_tax_percentage?: number;
    hsn_code?: string;
    gst_fee?: number;
    value_of_good?: number;
};
type BagConfigs = {
    can_be_cancelled: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    is_active: boolean;
};
type CurrentStatus = {
    state_type?: string;
    updated_at?: string;
    bag_id?: number;
    delivery_awb_number?: string;
    status?: string;
    state_id?: number;
    current_status_id: number;
    kafka_sync?: boolean;
    store_id?: number;
    created_at?: string;
    shipment_id?: string;
    delivery_partner_id?: number;
    bag_state_mapper?: BagStateMapper;
};
type PlatformDeliveryAddress = {
    area?: string;
    address2?: string;
    email?: string;
    updated_at?: string;
    address_category?: string;
    state?: string;
    pincode?: string;
    address1?: string;
    latitude?: number;
    version?: string;
    created_at?: string;
    longitude?: number;
    city?: string;
    landmark?: string;
    contact_person?: string;
    phone?: string;
    address_type?: string;
    country?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    cashback_applied: number;
    total_units: number;
    transfer_price: number;
    discount: number;
    gst_fee: number;
    value_of_good: number;
    size: string;
    cashback: number;
    refund_credit: number;
    fynd_credits: number;
    price_effective: number;
    price_marked: number;
    gst_tax_percentage: number;
    tax_collected_at_source?: number;
    hsn_code: string;
    coupon_value: number;
    coupon_effective_discount: number;
    amount_paid_roundoff?: number;
    promotion_effective_discount: number;
    gst_tag: string;
    brand_calculated_amount: number;
    amount_paid: number;
    delivery_charge: number;
    identifiers: Identifier;
    cod_charges: number;
    item_name: string;
    added_to_fynd_cash: boolean;
};
type OrderBags = {
    seller_identifier?: string;
    bag_id: number;
    applied_promos?: AppliedPromos[];
    can_cancel?: boolean;
    prices?: Prices;
    brand?: OrderBrandName;
    identifier?: string;
    entity_type?: string;
    parent_promo_bags?: any;
    article?: OrderBagArticle;
    can_return?: boolean;
    display_name?: string;
    gst_details?: BagGST;
    item?: PlatformItem;
    bag_configs?: BagConfigs;
    current_status?: CurrentStatus;
    delivery_address?: PlatformDeliveryAddress;
    financial_breakup?: FinancialBreakup;
    line_number?: number;
    quantity?: number;
};
type Dimensions = {
    height?: number;
    is_default?: boolean;
    width?: number;
    length?: number;
    unit?: string;
};
type Meta = {
    dimension?: Dimensions;
};
type OrderingStoreDetails = {
    code: string;
    meta: any;
    ordering_store_id: number;
    state: string;
    pincode: string;
    store_name: string;
    contact_person: string;
    city: string;
    address: string;
    phone: string;
    country: string;
};
type AffiliateMeta = {
    quantity?: number;
    order_item_id?: string;
    box_type?: string;
    due_date?: string;
    size_level_total_qty?: number;
    channel_shipment_id?: string;
    is_priority?: boolean;
    employee_discount?: number;
    coupon_code?: string;
    channel_order_id?: string;
    loyalty_discount?: number;
};
type BuyerDetails = {
    gstin: string;
    ajio_site_id?: string;
    state: string;
    pincode: number;
    city: string;
    address: string;
    name: string;
};
type LockData = {
    locked?: boolean;
    mto?: boolean;
    lock_message?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type EInvoice = {
    error_code?: string;
    acknowledge_date?: string;
    signed_qr_code?: string;
    irn?: string;
    acknowledge_no?: number;
    error_message?: string;
    signed_invoice?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentMeta = {
    shipment_weight?: number;
    external?: any;
    store_invoice_updated_date?: string;
    shipment_volumetric_weight?: number;
    b2b_buyer_details?: BuyerDetails;
    forward_affiliate_order_id?: string;
    lock_data?: LockData;
    timestamp?: ShipmentTimeStamp;
    b2c_buyer_details?: any;
    einvoice_info?: EinvoiceInfo;
    order_type?: string;
    packaging_name?: string;
    po_number?: string;
    marketplace_store_id?: string;
    due_date?: string;
    return_awb_number?: string;
    return_details?: any;
    return_store_node?: number;
    fulfilment_priority_text?: string;
    assign_dp_from_sb?: boolean;
    dp_sort_key?: string;
    auto_trigger_dp_assignment_acf: boolean;
    same_store_available: boolean;
    forward_affiliate_shipment_id?: string;
    awb_number?: string;
    dp_name?: string;
    bag_weight?: any;
    weight: number;
    return_affiliate_order_id?: string;
    formatted?: Formatted;
    box_type?: string;
    return_affiliate_shipment_id?: string;
    dp_options?: any;
    dp_id?: string;
    debug_info?: DebugInfo;
    ewaybill_info?: any;
};
type PDFLinks = {
    po_invoice?: string;
    label_a4?: string;
    invoice_a6?: string;
    delivery_challan_a4?: string;
    label_pos?: string;
    invoice_type: string;
    label_type: string;
    invoice_pos?: string;
    b2b?: string;
    invoice_a4?: string;
    credit_note_url?: string;
    invoice?: string;
    label?: string;
    label_a6?: string;
};
type AffiliateDetails = {
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
    ad_id?: string;
    affiliate_shipment_id: string;
    shipment_meta: ShipmentMeta;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    affiliate_order_id: string;
};
type TrackingList = {
    time?: string;
    is_passed?: boolean;
    text: string;
    status: string;
    is_current?: boolean;
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
    company_name?: string;
    company_contact?: ContactDetails;
    company_id?: number;
    address?: any;
    company_gst?: string;
    company_cin?: string;
};
type FulfillingStore = {
    code: string;
    meta: any;
    id: number;
    state: string;
    pincode: string;
    store_name: string;
    contact_person: string;
    city: string;
    address: string;
    phone: string;
    fulfillment_channel: string;
    country: string;
};
type PlatformShipment = {
    user_agent?: string;
    fulfilment_priority?: number;
    order?: OrderDetailsData;
    shipment_images?: string[];
    delivery_slot?: any;
    user?: UserDataInfo;
    bag_status_history?: BagStatusHistory[];
    status?: ShipmentStatusData;
    billing_details?: UserDetailsData;
    total_items?: number;
    forward_shipment_id?: string;
    prices?: Prices;
    payment_methods?: any;
    platform_logo?: string;
    invoice?: InvoiceInfo;
    dp_details?: DPDetailsData;
    payments?: ShipmentPayments;
    custom_meta?: any[];
    bags?: OrderBags[];
    invoice_id?: string;
    packaging_type?: string;
    gst_details?: GSTDetailsData;
    meta?: Meta;
    journey_type?: string;
    ordering_store?: OrderingStoreDetails;
    affiliate_details?: AffiliateDetails;
    tracking_list?: TrackingList[];
    operational_status?: string;
    shipment_status?: string;
    company_details?: CompanyDetails;
    delivery_details?: UserDetailsData;
    total_bags?: number;
    coupon?: any;
    picked_date?: string;
    shipment_quantity?: number;
    priority_text?: string;
    vertical?: string;
    payment_mode?: string;
    shipment_id: string;
    lock_status?: boolean;
    fulfilling_store?: FulfillingStore;
    enable_dp_tracking?: boolean;
};
type ShipmentInfoResponse = {
    message?: string;
    success: boolean;
    shipments?: PlatformShipment[];
};
type BillingStaffDetails = {
    user?: string;
    employee_code?: string;
    last_name?: string;
    first_name?: string;
    staff_id?: number;
};
type PlatformUserDetails = {
    platform_user_id?: string;
    platform_user_last_name?: string;
    platform_user_first_name?: string;
    platform_user_employee_code?: string;
};
type TransactionData = {
    terminal_id?: string;
    entity?: string;
    transaction_id?: string;
    amount_paid?: string;
    status?: string;
    payment_id?: string;
    currency?: string;
    unique_reference_number?: string;
};
type OrderMeta = {
    employee_id?: number;
    currency_symbol?: string;
    cart_id?: number;
    comment?: string;
    staff?: any;
    order_type?: string;
    order_tags?: any[];
    order_platform?: string;
    billing_staff_details?: BillingStaffDetails;
    company_logo?: string;
    files?: any[];
    payment_type?: string;
    ordering_store?: number;
    platform_user_details?: PlatformUserDetails;
    extra_meta?: any;
    mongo_cart_id?: number;
    order_child_entities?: string[];
    customer_note?: string;
    transaction_data?: TransactionData;
};
type TaxDetails = {
    gstin?: string;
    pan_no?: string;
};
type OrderDict = {
    meta?: OrderMeta;
    order_date: string;
    prices?: Prices;
    fynd_order_id: string;
    payment_methods?: any;
    tax_details?: TaxDetails;
};
type ShipmentDetailsResponse = {
    success: boolean;
    order?: OrderDict;
    shipments?: PlatformShipment[];
};
type SubLane = {
    text?: string;
    actions?: any[];
    value?: string;
    total_items?: number;
    index?: number;
};
type SuperLane = {
    options?: SubLane[];
    total_items?: number;
    text: string;
    value: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformBreakupValues = {
    name?: string;
    value?: string;
    display?: string;
};
type PlatformOrderItems = {
    meta?: any;
    total_order_value?: number;
    order_id?: string;
    shipments?: PlatformShipment[];
    user_info?: UserDataInfo;
    order_value?: number;
    channel?: PlatformChannel;
    payment_mode?: string;
    order_created_time?: string;
    breakup_values?: PlatformBreakupValues[];
};
type OrderListingResponse = {
    message?: string;
    total_count?: number;
    lane?: string;
    success?: boolean;
    page?: Page;
    items?: PlatformOrderItems[];
};
type Options = {
    text?: string;
    value?: number;
};
type MetricsCount = {
    key: string;
    text: string;
    value: number;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    reason?: string;
    updated_at?: string;
    meta?: any;
    shipment_type?: string;
    status?: string;
    last_location_recieved_at?: string;
    updated_time?: string;
    account_name?: string;
    awb?: string;
    raw_status?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    unfulfilled?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    returned?: FiltersInfo[];
    filters?: FiltersInfo[];
    processed?: FiltersInfo[];
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
    request_details?: any;
    report_requested_at?: string;
    report_type?: string;
    report_name?: string;
    report_created_at?: string;
    status?: string;
    s3_key?: string;
    report_id?: string;
    display_name?: string;
};
type JioCodeUpsertDataSet = {
    article_id?: string;
    item_id?: string;
    company_id?: string;
    jio_code?: string;
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
    success?: boolean;
    trace_id?: string;
    data?: any[];
    identifier?: string;
    error?: NestedErrorSchemaDataSet[];
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    invoice_status?: string;
    do_invoice_label_generated: boolean;
    store_name?: string;
    store_id?: string;
    store_code?: string;
    data?: any;
    invoice?: any;
    batch_id: string;
    label?: any;
    company_id?: string;
};
type URL = {
    url?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type FileResponse = {
    file_path?: string;
    method?: string;
    file_name?: string;
    cdn?: URL;
    content_type?: string;
    tags?: string[];
    size?: number;
    namespace?: string;
    upload?: FileUploadResponse;
    operation?: string;
};
type BulkListingPage = {
    type?: string;
    total?: number;
    current?: number;
    has_previous?: boolean;
    size?: number;
    has_next?: boolean;
};
type bulkListingData = {
    total?: number;
    excel_url?: string;
    status?: string;
    failed_shipments?: any[];
    successful_shipments?: any[];
    user_id?: string;
    file_name?: string;
    id?: string;
    failed?: number;
    batch_id?: string;
    company_id?: number;
    uploaded_on?: string;
    processing_shipments?: string[];
    user_name?: string;
    store_name?: string;
    successful?: number;
    store_code?: string;
    store_id?: number;
    processing?: number;
};
type BulkListingResponse = {
    page?: BulkListingPage;
    success?: boolean;
    error?: string;
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
    message?: string;
    status?: boolean;
};
type BulkActionDetailsDataField = {
    total_shipments_count?: number;
    successful_shipments_count?: number;
    failed_shipments_count?: number;
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
    batch_id?: string;
    company_id?: string;
};
type BulkActionDetailsResponse = {
    uploaded_on?: string;
    message?: string;
    user_id?: string;
    failed_records?: string[];
    success?: string;
    uploaded_by?: string;
    status?: boolean;
    data?: BulkActionDetailsDataField[];
    error?: string[];
};
type BagReturnableCancelableStatus = {
    can_be_cancelled: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    enable_tracking: boolean;
    is_active: boolean;
};
type Brand = {
    invoice_prefix?: string;
    brand_id: number;
    company: string;
    is_virtual_invoice?: boolean;
    modified_on?: number;
    start_date?: string;
    credit_note_allowed?: boolean;
    brand_name: string;
    script_last_ran?: string;
    created_on?: number;
    pickup_location?: string;
    logo?: string;
    credit_note_expiry_days?: number;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type Weight = {
    shipping?: number;
    is_default?: boolean;
    unit?: string;
};
type ReturnConfig = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Article = {
    _id: string;
    code?: string;
    a_set?: any;
    seller_identifier: string;
    is_set?: boolean;
    weight?: Weight;
    return_config?: ReturnConfig;
    dimensions?: Dimensions;
    identifiers: Identifier;
    uid: string;
    child_details?: any;
    esp_modified?: any;
    raw_meta?: any;
    size: string;
};
type ArticleDetails = {
    status?: any;
};
type BagGSTDetails = {
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    gst_tag: string;
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    gst_tax_percentage: number;
    hsn_code: string;
    sgst_tax_percentage: number;
    cgst_tax_percentage: number;
    sgst_gst_fee: string;
    hsn_code_id: string;
    gst_fee: number;
    cgst_gst_fee: string;
    value_of_good: number;
    igst_tax_percentage: number;
    igst_gst_fee: string;
};
type AffiliateBagDetails = {
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
    employee_discount?: number;
    loyalty_discount?: number;
    affiliate_order_id: string;
};
type Attributes = {
    marketer_address?: string;
    essential?: string;
    primary_color?: string;
    primary_color_hex?: string;
    primary_material?: string;
    gender?: string[];
    brand_name?: string;
    marketer_name?: string;
    name?: string;
};
type Item = {
    gender?: string;
    can_cancel?: boolean;
    department_id?: number;
    color?: string;
    item_id: number;
    size: string;
    l1_category?: string[];
    brand: string;
    attributes: Attributes;
    image: string[];
    can_return?: boolean;
    webstore_product_url?: string;
    last_updated_at?: string;
    name: string;
    meta?: any;
    l3_category?: number;
    brand_id: number;
    branch_url?: string;
    l1_category_id?: number;
    l2_category?: string[];
    l3_category_name?: string;
    l2_category_id?: number;
    code?: string;
    slug_key: string;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    po_line_amount?: number;
    item_base_price?: number;
    docker_number?: string;
    po_tax_amount?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type EInvoicePortalDetails = {
    username?: string;
    user?: string;
    password?: string;
};
type StoreEinvoice = {
    username?: string;
    user?: string;
    enabled: boolean;
    password?: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
type Document = {
    legal_name: string;
    value: string;
    ds_type: string;
    url?: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreMeta = {
    einvoice_portal_details?: EInvoicePortalDetails;
    notification_emails?: string[];
    gst_credentials: StoreGstCredentials;
    timing?: any[];
    documents?: StoreDocuments;
    ewaybill_portal_details?: any;
    additional_contact_details?: any;
    display_name: string;
    gst_number?: string;
    product_return_config?: any;
    stage: string;
};
type StoreAddress = {
    area?: string;
    address2?: string;
    email?: string;
    updated_at: string;
    pincode: number;
    state: string;
    latitude: number;
    contact_person: string;
    city: string;
    address_type: string;
    address_category: string;
    landmark?: string;
    country_code: string;
    version?: string;
    address1: string;
    created_at: string;
    longitude: number;
    phone: string;
    country: string;
};
type Store = {
    address2?: string;
    updated_at?: string;
    pincode: string;
    state: string;
    s_id: string;
    latitude: number;
    contact_person: string;
    city: string;
    packaging_material_count?: number;
    is_archived?: boolean;
    fulfillment_channel: string;
    mall_name?: string;
    store_email: string;
    is_active?: boolean;
    alohomora_user_id?: number;
    location_type: string;
    name: string;
    company_id: number;
    meta: StoreMeta;
    brand_id?: any;
    is_enabled_for_recon?: boolean;
    brand_store_tags?: string[];
    order_integration_id?: string;
    code?: string;
    mall_area?: string;
    phone: number;
    store_address_json?: StoreAddress;
    parent_store_id?: number;
    address1: string;
    created_at: string;
    vat_no?: string;
    longitude: number;
    store_active_from?: string;
    login_username: string;
    country: string;
};
type BagDetailsPlatformResponse = {
    seller_identifier?: string;
    applied_promos?: any[];
    status: BagReturnableCancelableStatus;
    bag_status_history?: BagStatusHistory;
    original_bag_list?: number[];
    prices: Prices;
    no_of_bags_order?: number;
    tags?: string[];
    brand: Brand;
    identifier?: string;
    entity_type?: string;
    current_operational_status: BagStatusHistory;
    qc_required?: any;
    b_id: number;
    dates?: Dates;
    parent_promo_bags?: any;
    article: Article;
    display_name?: string;
    article_details?: ArticleDetails;
    gst_details: BagGSTDetails;
    bag_status: BagStatusHistory[];
    affiliate_bag_details: AffiliateBagDetails;
    shipment_id?: string;
    item: Item;
    meta?: BagMeta;
    reasons?: any[];
    journey_type: string;
    restore_promos?: any;
    ordering_store?: Store;
    affiliate_details?: AffiliateDetails;
    operational_status?: string;
    bag_update_time?: number;
    order_integration_id?: string;
    current_status: BagStatusHistory;
    financial_breakup: FinancialBreakup[];
    line_number?: number;
    b_type?: string;
    restore_coupon?: boolean;
    quantity?: number;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    page_type: string;
    current: number;
    item_total: number;
    size: number;
    has_next: boolean;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type GeneratePosOrderReceiptResponse = {
    invoice_receipt?: string;
    success?: boolean;
    payment_receipt?: string;
    order_id?: string;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    status?: number;
    message?: string;
    error?: string;
    shipment_id?: string;
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
    store_id: number;
    mongo_article_id?: string;
    set_id?: string;
    affiliate_bag_id?: string;
    reason_ids?: number[];
    affiliate_order_id?: string;
    bag_id?: number;
    item_id?: string;
    fynd_order_id?: string;
    affiliate_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    reason_text: string;
    affiliate_bag_id?: string;
    id?: string;
    affiliate_shipment_id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    action: string;
    action_type: string;
    entity_type: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    affiliate_order_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
    is_locked?: boolean;
};
type CheckResponse = {
    is_bag_locked?: boolean;
    shipment_id?: string;
    original_filter?: OriginalFilter;
    status?: string;
    affiliate_shipment_id?: string;
    bags?: Bags[];
    affiliate_id?: string;
    lock_status?: boolean;
    is_shipment_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    message?: string;
    success?: boolean;
};
type AnnouncementResponse = {
    platform_name?: string;
    title?: string;
    created_at?: string;
    id: number;
    description?: string;
    logo_url?: string;
    from_datetime?: string;
    platform_id?: string;
    company_id?: number;
    to_datetime?: string;
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
    reason_text?: string;
    reason_id?: number;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
type ProductsReasonsData = {
    reason_text?: string;
    reason_id?: number;
};
type ProductsReasonsFilters = {
    quantity?: number;
    identifier?: string;
    line_number?: number;
};
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type Products = {
    quantity?: number;
    identifier?: string;
    line_number?: number;
};
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
};
type ProductsDataUpdates = {
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
};
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    products?: ProductsDataUpdates[];
};
type ShipmentsRequest = {
    reasons?: ReasonsData;
    products?: Products[];
    identifier: string;
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    status?: string;
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
};
type UpdateShipmentStatusRequest = {
    statuses?: StatuesRequest[];
    force_transition?: boolean;
    task?: boolean;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    final_state?: any;
    code?: string;
    stack_trace?: string;
    status?: number;
    identifier?: string;
    message?: string;
    exception?: string;
    meta?: any;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryConfig = {
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    inventory?: AffiliateInventoryStoreConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    token: string;
    meta?: AffiliateAppConfigMeta[];
    secret: string;
    updated_at: string;
    name: string;
    created_at: string;
    id: string;
    description?: string;
    owner: string;
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    token: string;
    id: string;
    config?: AffiliateConfig;
};
type OrderConfig = {
    article_lookup?: string;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    affiliate: Affiliate;
    create_user?: boolean;
    store_lookup?: string;
};
type OrderUser = {
    city: string;
    email: string;
    address2?: string;
    address1?: string;
    mobile: number;
    pincode: string;
    last_name: string;
    phone: number;
    first_name: string;
    country: string;
    state: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type ArticleDetails1 = {
    category: any;
    brand_id: number;
    dimension: any;
    attributes: any;
    quantity: number;
    _id: string;
    weight: any;
};
type ShipmentDetails = {
    box_type?: string;
    fulfillment_id: number;
    dp_id?: number;
    affiliate_shipment_id: string;
    shipments: number;
    articles: ArticleDetails1[];
    meta?: any;
};
type ShipmentConfig = {
    location_details?: LocationDetails;
    to_pincode: string;
    source: string;
    identifier: string;
    shipment: ShipmentDetails[];
    journey: string;
    payment_mode: string;
    action: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    label?: string;
    invoice?: string;
};
type AffiliateBag = {
    affiliate_meta: any;
    discount: number;
    hsn_code_id: string;
    identifier: any;
    pdf_links?: MarketPlacePdf;
    _id: string;
    delivery_charge: number;
    amount_paid: number;
    item_size: string;
    price_marked: number;
    price_effective: number;
    company_id: number;
    fynd_store_id: string;
    store_id: number;
    avl_qty: number;
    sku: string;
    transfer_price: number;
    modified_on: string;
    affiliate_store_id: string;
    item_id: number;
    unit_price: number;
    quantity: number;
    seller_identifier: string;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type OrderInfo = {
    order_value: number;
    shipping_address: OrderUser;
    delivery_charges: number;
    user: UserData;
    coupon?: string;
    discount: number;
    items: any;
    cod_charges: number;
    shipment?: ShipmentData;
    payment?: any;
    payment_mode: string;
    bags: AffiliateBag[];
    billing_address: OrderUser;
    affiliate_order_id?: string;
    order_priority?: OrderPriority;
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
    display_text: string;
    id: number;
    description: string;
    slug: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type PostHistoryData = {
    user_name: string;
    message: string;
};
type PostHistoryFilters = {
    shipment_id: string;
    identifier?: string;
    line_number?: string;
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
    ticket_id?: string;
    user: string;
    ticket_url?: string;
    l2_detail?: string;
    l3_detail?: string;
    message: string;
    type: string;
    l1_detail?: string;
    createdat: string;
    bag_id?: number;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    brand_name: string;
    amount_paid: number;
    customer_name: string;
    shipment_id: number;
    message: string;
    payment_mode: string;
    phone_number: number;
    order_id: string;
    country_code: string;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    bag_id: number;
    slug: string;
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type Meta1 = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    bag_list?: number[];
    shipment_id?: string;
    status?: string;
    id: number;
    remarks?: string;
    meta: Meta1;
};
type OrderStatusData = {
    order_details: OrderDetails;
    errors?: string[];
    shipment_details?: ShipmentDetail[];
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    qc_required: string;
    dp_id: number;
    order_type: string;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type ShippingInfo = {
    city: string;
    title?: string;
    slot?: any[];
    address_type?: string;
    country_code?: string;
    address1: string;
    state_code?: string;
    last_name?: string;
    house_no?: string;
    customer_code?: string;
    geo_location?: any;
    alternate_mobile_number?: string;
    address2?: string;
    pincode: string;
    alternate_email?: string;
    gender?: string;
    primary_email: string;
    primary_mobile_number: string;
    floor_no?: string;
    external_customer_code?: string;
    landmark?: string;
    first_name: string;
    country: string;
    shipping_type?: string;
    state: string;
    middle_name?: string;
};
type Tax = {
    amount: any;
    breakup?: any[];
    rate: number;
    name: string;
};
type Charge = {
    code?: string;
    tax?: Tax;
    name: string;
    amount: any;
    type: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type BillingInfo = {
    city: string;
    title?: string;
    country_code?: string;
    address1: string;
    state_code?: string;
    last_name?: string;
    house_no?: string;
    customer_code?: string;
    alternate_mobile_number?: string;
    address2?: string;
    pincode: string;
    alternate_email?: string;
    gender?: string;
    primary_email: string;
    primary_mobile_number: string;
    floor_no?: string;
    external_customer_code?: string;
    first_name: string;
    country: string;
    state: string;
    middle_name?: string;
};
type PaymentMethod = {
    transaction_data?: any;
    refund_by: string;
    name: string;
    mode: string;
    amount: number;
    collect_by: string;
    meta?: any;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type ProcessingDates = {
    dispatch_by_date?: string;
    pack_by_date?: string;
    confirm_by_date?: string;
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
};
type LineItem = {
    charges?: Charge[];
    quantity?: number;
    seller_identifier: string;
    external_line_id?: string;
    custom_messasge?: string;
    meta?: any;
};
type Shipment = {
    location_id: number;
    processing_dates?: ProcessingDates;
    priority?: number;
    external_shipment_id?: string;
    line_items: LineItem[];
    meta?: any;
};
type CreateOrderAPI = {
    shipping_info: ShippingInfo;
    currency_info?: any;
    charges?: Charge[];
    tax_info?: TaxInfo;
    billing_info: BillingInfo;
    external_creation_date?: string;
    payment_info: PaymentInfo;
    shipments: Shipment[];
    external_order_id?: string;
    meta?: any;
};
type CreateOrderErrorReponse = {
    info?: any;
    code?: string;
    stack_trace?: string;
    status: number;
    message: string;
    exception?: string;
    request_id?: string;
    meta?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    mode?: string;
    refund_by?: string;
    collect_by?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    lock_states?: string[];
    dp_configuration?: DpConfiguration;
    logo_url?: any;
    shipment_assignment?: string;
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
    message?: string[];
    success?: boolean;
};
type FyndOrderIdList = {
    fynd_order_id?: string[];
};
type OrderStatus = {
    end_date: string;
    order_details?: FyndOrderIdList[];
    mobile: number;
    start_date: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    is_active?: boolean;
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    result: SearchKeywordResult;
};
type GetSearchWordsData = {
    is_active?: boolean;
    words?: string[];
    uid?: string;
    _custom_json?: any;
    app_id?: string;
    result?: any;
};
type GetSearchWordsDetailResponse = {
    page?: Page;
    items?: GetSearchWordsData;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type Media = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
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
type AutocompleteResult = {
    display?: string;
    _custom_json?: any;
    logo?: Media;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    results?: AutocompleteResult[];
};
type GetAutocompleteWordsData = {
    words?: string[];
    uid?: string;
    _custom_json?: any;
    app_id?: string;
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    results?: any[];
};
type ProductBundleItem = {
    min_quantity: number;
    auto_select?: boolean;
    product_uid: number;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    max_quantity: number;
};
type ProductBundleRequest = {
    is_active: boolean;
    slug: string;
    modified_on?: string;
    page_visibility?: string[];
    choice: string;
    logo?: string;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    created_on?: string;
    meta?: any;
    created_by?: any;
    name: string;
    company_id?: number;
    modified_by?: any;
};
type GetProductBundleCreateResponse = {
    is_active: boolean;
    slug: string;
    modified_on?: string;
    page_visibility?: string[];
    choice: string;
    logo?: string;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    created_on?: string;
    meta?: any;
    created_by?: any;
    id?: string;
    name: string;
    company_id?: number;
    modified_by?: any;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleUpdateRequest = {
    is_active: boolean;
    slug: string;
    modified_on?: string;
    page_visibility?: string[];
    choice: string;
    logo?: string;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    meta?: any;
    name: string;
    company_id?: number;
    modified_by?: any;
};
type Size = {
    display?: string;
    quantity?: number;
    is_available?: boolean;
    value?: string;
};
type Price = {
    min_marked?: number;
    max_effective?: number;
    currency?: string;
    min_effective?: number;
    max_marked?: number;
};
type LimitedProductData = {
    item_code?: string;
    slug?: string;
    images?: string[];
    quantity?: number;
    identifier?: any;
    short_description?: string;
    sizes?: string[];
    price?: any;
    attributes?: any;
    uid?: number;
    country_of_origin?: string;
    name?: string;
};
type GetProducts = {
    min_quantity?: number;
    product_uid?: number;
    auto_select?: boolean;
    sizes?: Size[];
    price?: Price;
    product_details?: LimitedProductData;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    max_quantity?: number;
};
type GetProductBundleResponse = {
    is_active?: boolean;
    slug?: string;
    page_visibility?: string[];
    choice?: string;
    logo?: string;
    same_store_assignment?: boolean;
    products?: GetProducts[];
    meta?: any;
    name?: string;
    company_id?: number;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    modified_on?: string;
    title: string;
    tag?: string;
    description?: string;
    image?: string;
    created_on?: string;
    brand_id?: number;
    created_by?: any;
    active?: boolean;
    guide?: Guide;
    id?: string;
    subtitle?: string;
    name: string;
    company_id?: number;
    modified_by?: any;
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type SizeGuideResponse = {
    modified_on?: string;
    title?: string;
    tag?: string;
    created_on?: string;
    brand_id?: number;
    created_by?: any;
    active?: boolean;
    guide?: any;
    id?: string;
    subtitle?: string;
    name?: string;
    company_id?: number;
    modified_by?: any;
};
type ApplicationItemSEO = {
    description?: string;
    title?: string;
};
type ApplicationItemMOQ = {
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
};
type MetaFields = {
    key: string;
    value: string;
};
type ApplicationItemMeta = {
    alt_text?: any;
    seo?: ApplicationItemSEO;
    moq?: ApplicationItemMOQ;
    is_cod?: boolean;
    _custom_json?: any;
    _custom_meta?: MetaFields[];
    is_gift?: boolean;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type SEOData = {
    description?: string;
    title?: string;
};
type MOQData = {
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    seo?: SEOData;
    moq?: MOQData;
    is_cod?: boolean;
    is_gift?: boolean;
};
type GetConfigMetadataResponse = {
    values?: any[];
    condition?: any[];
    data: any[];
};
type AttributeDetailsGroup = {
    is_active: boolean;
    slug?: string;
    unit?: string;
    key?: string;
    priority: number;
    logo?: string;
    display_type: string;
    name: string;
};
type AppConfigurationDetail = {
    is_active: boolean;
    slug: string;
    logo?: string;
    priority: number;
    attributes?: AttributeDetailsGroup[];
    template_slugs?: string[];
    is_default: boolean;
    app_id: string;
    name?: string;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    has_next: boolean;
    total_count: number;
    current: number;
    next: number;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_active: boolean;
    key: string;
    logo?: string;
    priority: number;
    is_default: boolean;
    app_id: string;
    name?: string;
    default_key: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingSortMetaResponse = {
    display?: string;
    key?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingFilterMetaResponse = {
    filter_types?: string[];
    display?: string;
    key?: string;
    units?: any[];
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
    variant?: any;
    detail?: any;
    similar?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    is_active: boolean;
    size: ProductSize;
    key: string;
    priority: number;
    logo?: string;
    display_type: string;
    name: string;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    is_active: boolean;
    title?: string;
    size?: ProductSize;
    key: string;
    priority: number;
    logo?: string;
    subtitle?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type ConfigurationListingSortConfig = {
    is_active: boolean;
    key: string;
    priority: number;
    logo?: string;
    name?: string;
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
    condition?: string;
    map_values?: any[];
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map?: any;
};
type ConfigurationListingFilterConfig = {
    is_active: boolean;
    display_name?: string;
    type: string;
    key: string;
    priority: number;
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    name?: string;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListing = {
    sort: ConfigurationListingSort;
    filter: ConfigurationListingFilter;
};
type AppConfiguration = {
    product?: ConfigurationProduct;
    modified_on?: string;
    type?: string;
    config_id?: string;
    listing?: ConfigurationListing;
    config_type: string;
    created_by?: any;
    created_on?: string;
    app_id: string;
    modified_by?: any;
};
type AppCatalogConfiguration = {
    product?: ConfigurationProduct;
    modified_on?: string;
    type?: string;
    config_id?: string;
    listing?: ConfigurationListing;
    config_type: string;
    created_by?: any;
    created_on?: string;
    id?: string;
    app_id: string;
    modified_by?: any;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    product?: GetCatalogConfigurationDetailsProduct;
    config_id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
    id?: string;
    app_id: string;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    name?: string;
    value?: string;
    is_selected?: boolean;
};
type ProductFiltersKey = {
    kind?: string;
    display: string;
    operators?: string[];
    logo?: string;
    name: string;
};
type ProductFiltersValue = {
    display: string;
    min?: number;
    currency_symbol?: string;
    count?: number;
    max?: number;
    is_selected: boolean;
    query_format?: string;
    selected_min?: number;
    value: any;
    currency_code?: string;
    selected_max?: number;
    display_format?: string;
};
type ProductFilters = {
    key: ProductFiltersKey;
    values: ProductFiltersValue[];
};
type GetCollectionQueryOptionResponse = {
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    operators: any;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type UserInfo = {
    uid?: string;
    username?: string;
    email?: string;
    user_id?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type CollectionSchedule = {
    duration?: number;
    next_schedule?: NextSchedule[];
    end?: string;
    start?: string;
    cron?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CreateCollection = {
    seo?: SeoDetail;
    published?: boolean;
    sort_on?: string;
    created_by?: UserInfo;
    allow_sort?: boolean;
    _locale_language?: any;
    is_active?: boolean;
    meta?: any;
    modified_by?: UserInfo;
    badge?: CollectionBadge;
    allow_facets?: boolean;
    tags?: string[];
    name: string;
    is_visible?: boolean;
    query?: CollectionQuery[];
    slug: string;
    _schedule?: CollectionSchedule;
    type: string;
    logo: CollectionImage;
    description?: string;
    banners: CollectionBanner;
    priority?: number;
    visible_facets_keys?: string[];
    _custom_json?: any;
    app_id: string;
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
type CollectionCreateResponse = {
    sort_on?: string;
    cron?: any;
    allow_sort?: boolean;
    is_active?: boolean;
    meta?: any;
    badge?: any;
    allow_facets?: boolean;
    tag?: string[];
    name?: string;
    query?: CollectionQuery[];
    slug?: string;
    _schedule?: any;
    type?: string;
    description?: string;
    logo?: BannerImage;
    banners?: ImageUrls;
    priority?: number;
    visible_facets_keys?: string[];
    app_id?: string;
};
type CollectionListingFilterTag = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilterType = {
    display?: string;
    name?: string;
    is_selected?: boolean;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type Media1 = {
    url: string;
    meta?: any;
    type?: string;
};
type GetCollectionDetailNest = {
    cron?: any;
    uid?: string;
    allow_sort?: boolean;
    is_active?: boolean;
    meta?: any;
    badge?: any;
    allow_facets?: boolean;
    tag?: string[];
    name?: string;
    query?: CollectionQuery[];
    slug?: string;
    _schedule?: any;
    type?: string;
    description?: string;
    logo?: Media1;
    banners?: ImageUrls;
    priority?: number;
    visible_facets_keys?: string[];
    action?: Action;
    app_id?: string;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    page?: Page;
    items?: GetCollectionDetailNest[];
};
type CollectionDetailResponse = {
    cron?: any;
    uid?: string;
    allow_sort?: boolean;
    is_active?: boolean;
    meta?: any;
    badge?: any;
    allow_facets?: boolean;
    tag?: string[];
    name?: string;
    query?: CollectionQuery[];
    slug?: string;
    _schedule?: any;
    type?: string;
    description?: string;
    logo?: Media1;
    banners?: ImageUrls;
    priority?: number;
    visible_facets_keys?: string[];
    app_id?: string;
};
type UpdateCollection = {
    seo?: SeoDetail;
    published?: boolean;
    sort_on?: string;
    allow_sort?: boolean;
    _locale_language?: any;
    is_active?: boolean;
    meta?: any;
    modified_by?: UserInfo;
    badge?: CollectionBadge;
    allow_facets?: boolean;
    tags?: string[];
    name?: string;
    is_visible?: boolean;
    query?: CollectionQuery[];
    slug?: string;
    _schedule?: CollectionSchedule;
    type?: string;
    logo?: CollectionImage;
    description?: string;
    banners?: CollectionBanner;
    priority?: number;
    visible_facets_keys?: string[];
    _custom_json?: any;
};
type ItemQueryForUserCollection = {
    item_id?: number;
    action?: string;
};
type CollectionItemRequest = {
    item?: ItemQueryForUserCollection[];
    query?: CollectionQuery[];
    type?: string;
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type Price1 = {
    max?: number;
    currency_code?: string;
    min?: number;
    currency_symbol?: string;
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
    details?: ProductDetailAttribute[];
    title?: string;
};
type ProductBrand = {
    uid?: number;
    name?: string;
    logo?: Media1;
    action?: Action;
};
type ProductListingDetail = {
    tryouts?: string[];
    item_code?: string;
    has_variant?: boolean;
    highlights?: string[];
    uid?: number;
    color?: string;
    item_type?: string;
    short_description?: string;
    attributes?: any;
    medias?: Media1[];
    promo_meta?: any;
    teaser_tag?: any;
    similars?: string[];
    price?: ProductListingPrice;
    rating_count?: number;
    discount?: string;
    name?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    rating?: number;
    sellable?: boolean;
    slug: string;
    type?: string;
    description?: string;
    product_online_date?: string;
    brand?: ProductBrand;
    image_nature?: string;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
    page?: Page;
    items?: ProductListingDetail[];
};
type CatalogInsightItem = {
    sellable_count?: number;
    out_of_stock_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    total_sizes?: number;
    total_articles?: number;
    available_sizes?: number;
    available_articles?: number;
    article_freshness?: number;
    name?: string;
};
type CatalogInsightResponse = {
    item?: CatalogInsightItem;
    brand_distribution?: CatalogInsightBrand;
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
    platform?: string;
    enabled?: boolean;
    opt_level: string;
    company_id?: number;
    store_ids?: number[];
};
type CompanyOptIn = {
    modified_on: number;
    brand_ids: number[];
    platform: string;
    enabled: boolean;
    opt_level: string;
    created_on: number;
    created_by?: any;
    company_id: number;
    store_ids: number[];
    modified_by?: any;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    business_type?: string;
    uid?: number;
    name?: string;
    company_type?: string;
};
type CompanyBrandDetail = {
    brand_name?: string;
    brand_id?: number;
    company_id?: number;
    total_article?: number;
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
    display_name?: string;
    company_id?: number;
    modified_on?: string;
    additional_contacts?: any[];
    manager?: any;
    created_on?: string;
    uid?: number;
    store_code?: string;
    name?: string;
    store_type?: string;
    address?: any;
    documents?: any[];
    timing?: any;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeMasterFilter = {
    indexing: boolean;
    priority?: number;
    depends_on?: string[];
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    range?: AttributeSchemaRange;
    type: string;
    allowed_values?: string[];
    format?: string;
    multi?: boolean;
    mandatory?: boolean;
};
type GenderDetail = {
    is_nested?: boolean;
    slug?: string;
    description?: string;
    logo?: string;
    details?: AttributeMasterDetails;
    meta?: AttributeMasterMeta;
    enabled_for_end_consumer?: boolean;
    departments?: string[];
    id?: string;
    filters?: AttributeMasterFilter;
    schema?: AttributeMaster;
    name?: string;
};
type CategoriesResponse = {
    slug?: string;
    uid?: number;
    slug_key?: string;
    template_slug?: string;
    name?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: CategoriesResponse[];
};
type PTErrorResponse = {
    errors?: any;
    meta?: any;
    code?: string;
    message?: string;
    status?: number;
};
type DepartmentCreateUpdate = {
    is_active?: boolean;
    priority_order: number;
    slug?: string;
    logo: string;
    _cls?: string;
    uid?: number;
    _custom_json?: any;
    tags?: string[];
    platforms?: any;
    synonyms?: string[];
    name: string;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    username?: string;
    contact?: string;
    uid?: string;
    user_id?: string;
    _id?: string;
};
type GetDepartment = {
    is_active?: boolean;
    slug?: string;
    priority_order?: number;
    page_size?: number;
    modified_on?: string;
    page_no?: number;
    logo?: string;
    created_on?: string;
    uid?: number;
    created_by?: UserSerializer;
    synonyms?: string[];
    search?: string;
    name?: string;
    item_type?: string;
    modified_by?: UserSerializer;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    errors?: any;
    meta?: any;
    code?: string;
    message?: string;
    status?: number;
};
type UserDetail = {
    super_user?: boolean;
    user_id: string;
    username: string;
    contact?: string;
};
type DepartmentModel = {
    is_active?: boolean;
    slug: string;
    priority_order: number;
    modified_on: string;
    modified_by?: UserDetail;
    logo: string;
    _cls?: string;
    created_on: string;
    uid: number;
    created_by?: UserDetail;
    _custom_json?: any;
    verified_by?: UserDetail;
    verified_on?: string;
    synonyms?: string[];
    name: string;
    _id?: any;
};
type ProductTemplate = {
    is_active?: boolean;
    slug: string;
    modified_on?: string;
    tag?: string;
    description?: string;
    logo?: string;
    attributes?: string[];
    created_on?: string;
    departments?: string[];
    is_archived?: boolean;
    created_by?: any;
    is_expirable: boolean;
    name?: string;
    is_physical: boolean;
    categories?: string[];
    modified_by?: any;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type TemplateDetails = {
    is_active?: boolean;
    slug: string;
    tag?: string;
    description?: string;
    logo?: string;
    attributes?: string[];
    departments?: string[];
    is_archived?: boolean;
    id?: string;
    is_expirable: boolean;
    name?: string;
    is_physical: boolean;
    categories?: string[];
};
type Properties = {
    item_code?: any;
    highlights?: any;
    command?: any;
    product_publish?: any;
    category_slug?: any;
    item_type?: any;
    is_active?: any;
    size_guide?: any;
    short_description?: any;
    brand_uid?: any;
    country_of_origin?: any;
    media?: any;
    custom_order?: any;
    teaser_tag?: any;
    product_group_tag?: any;
    trader_type?: any;
    sizes?: any;
    multi_size?: any;
    currency?: any;
    tags?: any;
    is_dependent?: any;
    name?: any;
    hsn_code?: any;
    slug?: any;
    trader?: any;
    no_of_boxes?: any;
    description?: any;
    variants?: any;
    return_config?: any;
};
type GlobalValidation = {
    required?: string[];
    type?: string;
    title?: string;
    properties?: Properties;
    description?: string;
    definitions?: any;
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
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadItemsData = {
    templates?: string[];
    brand?: string[];
    type?: string;
};
type ProductDownloadsItems = {
    url?: string;
    seller_id?: number;
    completed_on?: string;
    template_tags?: any;
    created_by?: VerifiedBy;
    task_id?: string;
    trigger_on?: string;
    id?: string;
    status?: string;
    data?: ProductDownloadItemsData;
};
type ProductDownloadsResponse = {
    page?: Page;
    items?: ProductDownloadsItems;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Media2 = {
    portrait: string;
    logo: string;
    landscape: string;
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
type Hierarchy = {
    l1: number;
    department: number;
    l2: number;
};
type CategoryRequestBody = {
    tryouts?: string[];
    slug?: string;
    is_active: boolean;
    priority?: number;
    media?: Media2;
    departments: number[];
    level: number;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
    name: string;
    hierarchy?: Hierarchy[];
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type Category = {
    tryouts?: string[];
    slug?: string;
    is_active: boolean;
    modified_on?: string;
    id?: string;
    priority?: number;
    created_on?: string;
    uid?: number;
    departments: number[];
    media?: Media2;
    created_by?: any;
    level: number;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
    name: string;
    hierarchy?: Hierarchy[];
    modified_by?: any;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type NetQuantity = {
    unit?: string;
    value?: number;
};
type Trader = {
    address?: string[];
    name: string;
    type?: string;
};
type TaxIdentifier = {
    hsn_code_id?: string;
    reporting_hsn?: string;
    hsn_code?: string;
};
type ProductCreateUpdateSchemaV2 = {
    item_code: string;
    highlights?: string[];
    product_publish?: ProductPublish;
    template_tag: string;
    uid?: number;
    category_slug: string;
    item_type: string;
    is_active?: boolean;
    size_guide?: string;
    short_description?: string;
    attributes?: any;
    brand_uid: number;
    country_of_origin: string;
    media?: Media1[];
    custom_order?: CustomOrder;
    teaser_tag?: TeaserTag;
    product_group_tag?: string[];
    bulk_job_id?: string;
    company_id: number;
    net_quantity?: NetQuantity;
    sizes: any[];
    requester?: string;
    currency: string;
    multi_size?: boolean;
    tags?: string[];
    name: string;
    is_dependent?: boolean;
    variant_group?: any;
    is_image_less_product?: boolean;
    slug: string;
    trader: Trader[];
    no_of_boxes?: number;
    description?: string;
    is_set?: boolean;
    change_request_id?: any;
    _custom_json?: any;
    departments: number[];
    action?: string;
    variants?: any;
    return_config: ReturnConfig;
    variant_media?: any;
    tax_identifier: TaxIdentifier;
};
type ProductPublish1 = {
    is_set?: boolean;
    product_online_date?: string;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Logo = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type Image = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type ReturnConfigResponse = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type ProductSchemaV2 = {
    item_code?: string;
    highlights?: string[];
    category_uid?: number;
    product_publish?: ProductPublish1;
    template_tag?: string;
    uid?: number;
    created_by?: any;
    verified_by?: VerifiedBy;
    category_slug?: string;
    id?: string;
    all_company_ids?: number[];
    color?: string;
    item_type?: string;
    pending?: string;
    is_active?: boolean;
    size_guide?: string;
    short_description?: string;
    attributes?: any;
    brand_uid?: number;
    country_of_origin?: string;
    media?: Media1[];
    custom_order?: any;
    teaser_tag?: any;
    product_group_tag?: string[];
    is_expirable?: boolean;
    company_id?: number;
    modified_by?: any;
    net_quantity?: NetQuantityResponse;
    modified_on?: string;
    stage?: string;
    brand?: Brand;
    sizes?: any[];
    category?: any;
    multi_size?: boolean;
    currency?: string;
    tags?: string[];
    verified_on?: string;
    name?: string;
    is_dependent?: boolean;
    variant_group?: any;
    hsn_code?: string;
    is_image_less_product?: boolean;
    slug?: string;
    images?: Image[];
    trader?: Trader[];
    all_sizes?: any[];
    no_of_boxes?: number;
    primary_color?: string;
    l3_mapping?: string[];
    description?: string;
    created_on?: string;
    is_set?: boolean;
    departments?: number[];
    _custom_json?: any;
    moq?: any;
    all_identifiers?: string[];
    variants?: any;
    return_config?: ReturnConfigResponse;
    variant_media?: any;
    is_physical?: boolean;
    tax_identifier?: any;
    image_nature?: string;
};
type ProductListingResponseV2 = {
    page?: Page;
    items?: ProductSchemaV2[];
};
type ProductVariants = {
    item_code?: string;
    category_uid?: number;
    brand_uid?: number;
    uid?: number;
    media?: Media1[];
    name?: string;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    is_nested?: boolean;
    enabled_for_end_consumer?: boolean;
    created_by?: any;
    synonyms?: any;
    suggestion?: string;
    variant?: boolean;
    raw_key?: string;
    filters: AttributeMasterFilter;
    schema: AttributeMaster;
    modified_by?: any;
    modified_on?: string;
    unit?: string;
    tags?: string[];
    name?: string;
    slug: string;
    description?: string;
    logo?: string;
    created_on?: string;
    departments: string[];
    details: AttributeMasterDetails;
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
    item_dimensions_unit_of_measure: string;
    item_height: number;
    size: string;
    item_length: number;
    item_weight: number;
    identifiers?: ValidateIdentifier[];
    item_width: number;
    item_weight_unit_of_measure: string;
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
    item_code?: string;
    highlights?: string[];
    category_uid?: number;
    product_publish?: ProductPublished;
    template_tag?: string;
    uid?: number;
    created_by?: any;
    verified_by?: VerifiedBy;
    category_slug?: string;
    id?: string;
    all_company_ids?: number[];
    color?: string;
    item_type?: string;
    pending?: string;
    is_active?: boolean;
    size_guide?: string;
    short_description?: string;
    attributes?: any;
    brand_uid?: number;
    country_of_origin?: string;
    media?: Media1[];
    custom_order?: any;
    teaser_tag?: any;
    product_group_tag?: string[];
    is_expirable?: boolean;
    company_id?: number;
    modified_by?: any;
    net_quantity?: NetQuantityResponse;
    modified_on?: string;
    stage?: string;
    brand?: Brand;
    sizes?: any[];
    category?: any;
    multi_size?: boolean;
    currency?: string;
    tags?: string[];
    verified_on?: string;
    name?: string;
    is_dependent?: boolean;
    variant_group?: any;
    hsn_code?: string;
    is_image_less_product?: boolean;
    slug?: string;
    images?: Image[];
    trader?: Trader[];
    all_sizes?: any[];
    no_of_boxes?: number;
    primary_color?: string;
    l3_mapping?: string[];
    description?: string;
    created_on?: string;
    is_set?: boolean;
    departments?: number[];
    _custom_json?: any;
    moq?: any;
    all_identifiers?: string[];
    variants?: any;
    return_config?: ReturnConfigResponse;
    variant_media?: any;
    is_physical?: boolean;
    tax_identifier?: any;
    image_nature?: string;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type UserInfo1 = {
    uid?: string;
    username?: string;
    email?: string;
    user_id?: string;
};
type BulkJob = {
    is_active?: boolean;
    cancelled?: number;
    modified_on?: string;
    stage?: string;
    failed_records?: any[];
    cancelled_records?: any[];
    tracking_url?: string;
    created_on: string;
    template_tag?: string;
    created_by?: UserInfo1;
    succeed?: number;
    failed?: number;
    custom_template_tag?: string;
    file_path?: string;
    total?: number;
    company_id: number;
    modified_by?: UserInfo1;
};
type BulkResponse = {
    is_active?: boolean;
    modified_on?: string;
    batch_id: string;
    created_on: string;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
};
type UserDetail1 = {
    user_id?: string;
    username?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    is_active?: boolean;
    cancelled?: number;
    modified_on?: string;
    stage?: string;
    failed_records?: string[];
    template?: ProductTemplate;
    cancelled_records?: string[];
    template_tag?: string;
    created_on?: string;
    created_by?: UserDetail1;
    succeed?: number;
    failed?: number;
    file_path?: string;
    total?: number;
    company_id?: number;
    modified_by?: UserDetail1;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
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
type ProductBulkAssets = {
    url: string;
    user: any;
    company_id?: number;
};
type UserCommon = {
    user_id?: string;
    username?: string;
    company_id?: number;
};
type Items = {
    is_active?: boolean;
    cancelled?: number;
    modified_on?: string;
    stage?: string;
    failed_records?: string[];
    id?: string;
    cancelled_records?: string[];
    tracking_url?: string;
    created_on?: string;
    created_by?: UserCommon;
    succeed?: number;
    failed?: number;
    retry?: number;
    file_path?: string;
    total?: number;
    company_id?: number;
    modified_by?: UserCommon;
};
type BulkAssetResponse = {
    page?: Page;
    items?: Items[];
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
type SetSize = {
    size: string;
    pieces: number;
};
type SizeDistribution = {
    sizes: SetSize[];
};
type InventorySet = {
    quantity?: number;
    name?: string;
    size_distribution: SizeDistribution;
};
type GTIN = {
    gtin_value: string;
    primary?: boolean;
    gtin_type: string;
};
type InvSize = {
    item_dimensions_unit_of_measure?: string;
    quantity: number;
    price_effective: number;
    item_height?: number;
    set?: InventorySet;
    size: string;
    item_length?: number;
    item_weight?: number;
    price?: number;
    identifiers: GTIN[];
    is_set?: boolean;
    item_width?: number;
    expiration_date?: string;
    store_code: string;
    currency: string;
    price_transfer?: number;
    item_weight_unit_of_measure?: string;
};
type ItemQuery = {
    brand_uid?: number;
    uid?: number;
    item_code?: string;
};
type InventoryRequest = {
    sizes: InvSize[];
    item: ItemQuery;
    company_id: number;
};
type InventoryResponse = {
    quantity?: number;
    item_id?: number;
    price_effective?: number;
    store?: any;
    size?: string;
    price?: number;
    sellable_quantity?: number;
    identifiers?: any;
    inventory_updated_on?: string;
    uid?: string;
    currency?: string;
    price_transfer?: number;
    seller_identifier?: string;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type DimensionResponse = {
    width: number;
    unit: string;
    is_default: boolean;
    height: number;
    length: number;
};
type WeightResponse = {
    shipping: number;
    is_default: boolean;
    unit: string;
};
type CompanyMeta = {
    id: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    not_available?: QuantityBase;
    sellable?: QuantityBase;
    order_committed?: QuantityBase;
    damaged?: QuantityBase;
};
type PriceMeta = {
    tp_notes?: any;
    updated_at?: string;
    marked: number;
    effective: number;
    currency: string;
    transfer: number;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type ReturnConfig1 = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type BrandMeta = {
    name: string;
    id: number;
};
type InventorySellerResponse = {
    item_id: number;
    set?: InventorySet;
    raw_meta?: any;
    fragile: boolean;
    manufacturer: ManufacturerResponse;
    uid: string;
    created_by?: UserSerializer;
    expiration_date?: string;
    dimension: DimensionResponse;
    is_active?: boolean;
    identifier: any;
    total_quantity: number;
    country_of_origin: string;
    meta?: any;
    trace_id?: string;
    fynd_meta?: any;
    seller_identifier: string;
    weight: WeightResponse;
    modified_by?: UserSerializer;
    store: StoreMeta;
    company: CompanyMeta;
    added_on_store?: string;
    size: string;
    stage?: string;
    quantities?: Quantities;
    fynd_item_code: string;
    price: PriceMeta;
    fynd_article_code: string;
    tags?: string[];
    tax_identifier?: any;
    track_inventory?: boolean;
    trader?: Trader1[];
    is_set?: boolean;
    _custom_json?: any;
    return_config?: ReturnConfig1;
    brand: BrandMeta;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
type DimensionResponse1 = {
    height?: number;
    width?: number;
    length?: number;
    unit?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type ArticleStoreResponse = {
    uid?: number;
    store_code?: string;
    name?: string;
    store_type?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    not_available?: Quantity;
    sellable?: Quantity;
    order_committed?: Quantity;
    damaged?: Quantity;
};
type PriceArticle = {
    tp_notes?: any;
    marked?: number;
    effective?: number;
    currency?: string;
    transfer?: number;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type ReturnConfig2 = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type GetInventories = {
    item_id?: number;
    manufacturer?: ManufacturerResponse1;
    inventory_updated_on?: string;
    created_by?: UserSerializer;
    expiration_date?: string;
    uid?: string;
    id?: string;
    dimension?: DimensionResponse1;
    platforms?: any;
    identifier?: any;
    total_quantity?: number;
    country_of_origin?: string;
    trace_id?: string;
    seller_identifier?: string;
    weight?: WeightResponse1;
    date_meta?: DateMeta;
    modified_by?: UserSerializer;
    store?: ArticleStoreResponse;
    company?: CompanyMeta1;
    stage?: string;
    size?: string;
    quantities?: QuantitiesArticle;
    price?: PriceArticle;
    tags?: string[];
    tax_identifier?: any;
    track_inventory?: boolean;
    trader?: Trader2[];
    is_set?: boolean;
    return_config?: ReturnConfig2;
    brand?: BrandMeta1;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    cancelled?: number;
    is_active?: boolean;
    modified_on?: string;
    id?: string;
    failed_records?: string[];
    stage?: string;
    cancelled_records?: string[];
    created_on?: string;
    created_by?: any;
    succeed?: number;
    failed?: number;
    file_path?: string;
    total?: number;
    company_id?: number;
    modified_by?: any;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    item_weight_unit_of_measure?: string;
    item_dimensions_unit_of_measure?: string;
    quantity?: number;
    price_effective?: number;
    price?: number;
    price_marked?: number;
    store_code: string;
    total_quantity?: number;
    expiration_date?: string;
    trace_id?: string;
    tags?: string[];
    currency?: string;
    seller_identifier: string;
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    user?: any;
    company_id: number;
    batch_id: string;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    request_params?: any;
    seller_id: number;
    task_id: string;
    trigger_on?: string;
    status?: string;
};
type InventoryExportJob = {
    url?: string;
    seller_id: number;
    request_params?: any;
    completed_on?: string;
    task_id: string;
    trigger_on?: string;
    status?: string;
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
    price_effective?: number;
    store_id: number;
    price_marked?: number;
    total_quantity?: number;
    expiration_date?: string;
    trace_id?: string;
    tags?: string[];
    seller_identifier: string;
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
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    message: string;
    items?: InventoryResponseItem[];
};
type HsnUpsert = {
    is_active?: boolean;
    threshold2?: number;
    tax2?: number;
    tax1: number;
    tax_on_mrp: boolean;
    uid?: number;
    threshold1: number;
    hs2_code: string;
    tax_on_esp?: boolean;
    company_id: number;
    hsn_code: string;
};
type HsnCodesObject = {
    threshold2?: number;
    modified_on?: string;
    tax2?: number;
    id?: string;
    tax1?: number;
    tax_on_mrp?: boolean;
    threshold1?: number;
    hs2_code?: string;
    tax_on_esp?: boolean;
    company_id?: number;
    hsn_code?: string;
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
    size?: number;
    current?: string;
    item_total?: number;
    has_previous?: boolean;
    has_next?: boolean;
};
type TaxSlab = {
    rate: number;
    cess?: number;
    threshold: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    hsn_code_id?: string;
    modified_by?: any;
    taxes: TaxSlab[];
    type: string;
    modified_on?: string;
    description: string;
    created_on?: string;
    created_by?: any;
    country_code: string;
    reporting_hsn: string;
    hsn_code: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    slug?: string;
    logo?: Media;
    banners?: ImageUrls;
    uid?: number;
    departments?: string[];
    discount?: string;
    action?: Action;
    name?: string;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    priority_order?: number;
    slug?: string;
    logo?: Media;
    uid?: number;
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
    slug?: string;
    childs?: any[];
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
    action?: Action;
    name?: string;
};
type SecondLevelChild = {
    slug?: string;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
    action?: Action;
    name?: string;
};
type Child = {
    slug?: string;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    uid?: number;
    _custom_json?: any;
    action?: Action;
    name?: string;
};
type CategoryItems = {
    slug?: string;
    childs?: Child[];
    banners?: ImageUrls;
    uid?: number;
    action?: Action;
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
    page: Page;
    operators?: any;
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    filters?: ProductFilters[];
};
type ProductDetail = {
    tryouts?: string[];
    item_code?: string;
    has_variant?: boolean;
    highlights?: string[];
    uid?: number;
    color?: string;
    item_type?: string;
    short_description?: string;
    attributes?: any;
    medias?: Media1[];
    promo_meta?: any;
    teaser_tag?: any;
    similars?: string[];
    rating_count?: number;
    name?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    rating?: number;
    slug: string;
    type?: string;
    description?: string;
    product_online_date?: string;
    brand?: ProductBrand;
    image_nature?: string;
};
type InventoryPage = {
    type: string;
    next_id?: string;
    item_total: number;
    has_previous?: boolean;
    has_next?: boolean;
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
    size: string;
    item_id: number;
    ignored_stores?: number[];
};
type AssignStoreArticle = {
    quantity?: number;
    group_id?: string;
    article_assignment?: ArticleAssignment;
    meta?: any;
    query?: ArticleQuery;
};
type AssignStore = {
    channel_identifier?: string;
    articles: AssignStoreArticle[];
    channel_type?: string;
    pincode: string;
    app_id: string;
    company_id?: number;
    store_ids?: number[];
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    quantity: number;
    item_id: number;
    price_effective?: number;
    group_id?: string;
    store_id?: number;
    size: string;
    article_assignment: ArticleAssignment1;
    strategy_wise_listing?: any[];
    s_city?: string;
    price_marked?: number;
    uid?: string;
    meta?: any;
    index?: number;
    store_pincode?: number;
    company_id?: number;
    status: boolean;
    _id?: string;
};
type UserSerializer1 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type UserSerializer2 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type GetAddressSerializer = {
    state?: string;
    country?: string;
    city?: string;
    address1?: string;
    longitude?: number;
    address2?: string;
    landmark?: string;
    country_code?: string;
    pincode?: number;
    address_type?: string;
    latitude?: number;
};
type GetCompanySerializer = {
    modified_on?: string;
    business_type?: string;
    stage?: string;
    created_on?: string;
    uid?: number;
    created_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    reject_reason?: string;
    verified_by?: UserSerializer2;
    verified_on?: string;
    name?: string;
    company_type?: string;
    modified_by?: UserSerializer2;
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
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type InvoiceCredSerializer = {
    password?: string;
    username?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    mobile_no: SellerPhoneNumber;
    name?: string;
    email?: string;
};
type GetLocationSerializer = {
    warnings?: any;
    uid?: number;
    created_by?: UserSerializer1;
    verified_by?: UserSerializer1;
    phone_number: string;
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigSerializer;
    code: string;
    modified_by?: UserSerializer1;
    modified_on?: string;
    company?: GetCompanySerializer;
    stage?: string;
    store_type?: string;
    address: GetAddressSerializer;
    verified_on?: string;
    name: string;
    timing?: LocationDayWiseSerializer[];
    documents?: Document[];
    display_name: string;
    integration_type?: LocationIntegrationType;
    gst_credentials?: InvoiceDetailsSerializer;
    created_on?: string;
    _custom_json?: any;
    manager?: LocationManagerSerializer;
    contact_numbers?: SellerPhoneNumber[];
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
    is_active?: boolean;
    logo?: string;
    uid: number;
    _custom_json?: any;
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
    effective_date?: string;
    rate?: number;
    enable?: boolean;
};
type GetCompanyProfileSerializerResponse = {
    business_info?: string;
    verified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    mode?: string;
    created_by?: UserSerializer;
    uid: number;
    verified_on?: string;
    stage?: string;
    franchise_enabled?: boolean;
    contact_details?: ContactDetails;
    company_type: string;
    documents?: Document[];
    notification_emails?: string[];
    business_details?: BusinessDetails;
    warnings?: any;
    addresses?: GetAddressSerializer[];
    business_type: string;
    created_on?: string;
    _custom_json?: any;
    name?: string;
    taxes?: CompanyTaxesSerializer[];
    modified_on?: string;
    modified_by?: UserSerializer;
};
type CreateUpdateAddressSerializer = {
    latitude: number;
    address2?: string;
    address_type: string;
    address1: string;
    country_code?: string;
    longitude: number;
    country: string;
    state: string;
    pincode: number;
    landmark?: string;
    city: string;
};
type UpdateCompany = {
    company_type?: string;
    _custom_json?: any;
    business_info?: string;
    documents?: Document[];
    name?: string;
    franchise_enabled?: boolean;
    taxes?: CompanyTaxesSerializer[];
    notification_emails?: string[];
    business_details?: BusinessDetails;
    warnings?: any;
    addresses?: CreateUpdateAddressSerializer[];
    contact_details?: ContactDetails;
    reject_reason?: string;
    business_type?: string;
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
    stage?: string;
    product?: DocumentsObj;
    store_documents?: DocumentsObj;
    company_documents?: DocumentsObj;
    store?: DocumentsObj;
    brand?: DocumentsObj;
    uid?: number;
};
type BrandBannerSerializer = {
    landscape: string;
    portrait: string;
};
type GetBrandResponseSerializer = {
    verified_by?: UserSerializer;
    mode?: string;
    created_by?: UserSerializer;
    banner?: BrandBannerSerializer;
    reject_reason?: string;
    uid?: number;
    verified_on?: string;
    stage?: string;
    _locale_language?: any;
    synonyms?: string[];
    slug_key?: string;
    logo?: string;
    warnings?: any;
    created_on?: string;
    _custom_json?: any;
    name: string;
    description?: string;
    modified_on?: string;
    modified_by?: UserSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    _custom_json?: any;
    logo: string;
    company_id?: number;
    name: string;
    brand_tier?: string;
    description?: string;
    banner: BrandBannerSerializer;
    synonyms?: string[];
    _locale_language?: any;
    uid?: number;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanySerializer = {
    verified_on?: string;
    company_type: string;
    stage?: string;
    market_channels?: string[];
    details?: CompanyDetails;
    _custom_json?: any;
    name?: string;
    verified_by?: UserSerializer;
    notification_emails?: string[];
    business_country_info?: BusinessCountryInfo;
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    reject_reason?: string;
    business_type: string;
    created_on?: string;
    uid?: number;
};
type CompanyBrandSerializer = {
    verified_on?: string;
    stage?: string;
    company?: CompanySerializer;
    verified_by?: UserSerializer;
    warnings?: any;
    modified_on?: string;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    reject_reason?: string;
    brand?: GetBrandResponseSerializer;
    created_on?: string;
    uid?: number;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    brands: number[];
    uid?: number;
    company: number;
};
type HolidayDateSerializer = {
    start_date: string;
    end_date: string;
};
type HolidaySchemaSerializer = {
    date: HolidayDateSerializer;
    holiday_type: string;
    title: string;
};
type AddressSerializer = {
    latitude: number;
    address2?: string;
    address_type?: string;
    address1?: string;
    country_code?: string;
    longitude: number;
    country?: string;
    state?: string;
    pincode?: number;
    landmark?: string;
    city?: string;
};
type LocationSerializer = {
    manager?: LocationManagerSerializer;
    timing?: LocationDayWiseSerializer[];
    holiday?: HolidaySchemaSerializer[];
    stage?: string;
    _custom_json?: any;
    address: AddressSerializer;
    company: number;
    name: string;
    documents?: Document[];
    contact_numbers?: SellerPhoneNumber[];
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigSerializer;
    warnings?: any;
    display_name: string;
    gst_credentials?: InvoiceDetailsSerializer;
    store_type?: string;
    code: string;
    uid?: number;
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
type UsesRemaining = {
    app?: number;
    user?: number;
    total?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type PriceRange = {
    max?: number;
    min?: number;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
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
type Restrictions = {
    platforms?: string[];
    user_type?: string;
    coupon_allowed?: boolean;
    uses?: UsesRestriction;
    price_range?: PriceRange;
    ordering_stores?: number[];
    post_order?: PostOrder;
    bulk_bundle?: BulkBundleRestriction;
    payments?: any;
    user_groups?: number[];
};
type DisplayMetaDict = {
    subtitle?: string;
    title?: string;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    description?: string;
    title?: string;
    subtitle?: string;
    auto?: DisplayMetaDict;
    remove?: DisplayMetaDict;
};
type Rule = {
    max?: number;
    min?: number;
    value?: number;
    discount_qty?: number;
    key?: number;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CouponSchedule = {
    duration?: number;
    next_schedule?: any[];
    cron?: string;
    start?: string;
    end?: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Validity = {
    priority?: number;
};
type Validation = {
    app_id?: string[];
    user_registered_after?: string;
    anonymous?: boolean;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type RuleDefinition = {
    currency_code?: string;
    applicable_on: string;
    calculate_on: string;
    auto_apply?: boolean;
    type: string;
    scope?: string[];
    is_exact?: boolean;
    value_type: string;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CouponAdd = {
    restrictions?: Restrictions;
    display_meta: DisplayMeta;
    rule: Rule[];
    state?: State;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    action?: CouponAction;
    tags?: string[];
    code: string;
    validity: Validity;
    validation?: Validation;
    ownership: Ownership;
    rule_definition: RuleDefinition;
    author?: CouponAuthor;
    identifiers: Identifier;
    type_slug: string;
};
type CouponsResponse = {
    page?: Page;
    items?: CouponAdd;
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
    display_meta: DisplayMeta;
    rule: Rule[];
    state?: State;
    date_meta?: CouponDateMeta;
    _schedule?: CouponSchedule;
    action?: CouponAction;
    tags?: string[];
    code: string;
    validity: Validity;
    validation?: Validation;
    ownership: Ownership;
    rule_definition: RuleDefinition;
    author?: CouponAuthor;
    identifiers: Identifier;
    type_slug: string;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    type: string;
    codes?: string[];
    uses?: PaymentAllowValue1;
};
type Restrictions1 = {
    platforms?: string[];
    user_registered?: UserRegistered;
    order_quantity?: number;
    uses: UsesRestriction1;
    user_groups?: number[];
    post_order?: PostOrder1;
    user_id?: string[];
    payments?: PromotionPaymentModes[];
    anonymous_users?: boolean;
};
type CompareObject = {
    less_than_equals?: number;
    greater_than?: number;
    equals?: number;
    less_than?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    item_store?: number[];
    cart_unique_item_amount?: CompareObject;
    cart_total?: CompareObject;
    buy_rules?: string[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_id?: number[];
    item_exclude_company?: number[];
    item_id?: number[];
    item_sku?: string[];
    item_exclude_category?: number[];
    item_exclude_brand?: number[];
    all_items?: boolean;
    product_tags?: string[];
    cart_quantity?: CompareObject;
    item_brand?: number[];
    item_category?: number[];
    item_company?: number[];
    item_size?: string[];
    available_zones?: string[];
    item_exclude_store?: number[];
    item_exclude_sku?: string[];
};
type DiscountOffer = {
    apportion_discount?: boolean;
    partial_can_ret?: boolean;
    min_offer_quantity?: number;
    discount_amount?: number;
    code?: string;
    discount_percentage?: number;
    max_usage_per_transaction?: number;
    discount_price?: number;
    max_offer_quantity?: number;
    max_discount_amount?: number;
};
type DiscountRule = {
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
    discount_type: string;
    buy_condition: string;
};
type DisplayMeta1 = {
    name?: string;
    description?: string;
    offer_label?: string;
    offer_text?: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionSchedule = {
    duration?: number;
    published: boolean;
    next_schedule?: any[];
    cron?: string;
    start: string;
    end?: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionListItem = {
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    mode: string;
    apply_exclusive?: string;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    apply_all_discount?: boolean;
    code?: string;
    author?: PromotionAuthor;
    calculate_on?: string;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    promo_group: string;
    visiblility?: Visibility;
    currency?: string;
    _schedule?: PromotionSchedule;
    stackable?: boolean;
    _custom_json?: any;
    promotion_type: string;
    ownership: Ownership1;
    application_id: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    mode: string;
    apply_exclusive?: string;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    apply_all_discount?: boolean;
    code?: string;
    author?: PromotionAuthor;
    calculate_on?: string;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    promo_group: string;
    visiblility?: Visibility;
    currency?: string;
    _schedule?: PromotionSchedule;
    stackable?: boolean;
    _custom_json?: any;
    promotion_type: string;
    ownership: Ownership1;
    application_id: string;
};
type PromotionUpdate = {
    restrictions?: Restrictions1;
    discount_rules: DiscountRule[];
    display_meta: DisplayMeta1;
    mode: string;
    apply_exclusive?: string;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    apply_all_discount?: boolean;
    code?: string;
    author?: PromotionAuthor;
    calculate_on?: string;
    apply_priority?: number;
    post_order_action?: PromotionAction;
    promo_group: string;
    visiblility?: Visibility;
    currency?: string;
    _schedule?: PromotionSchedule;
    stackable?: boolean;
    _custom_json?: any;
    promotion_type: string;
    ownership: Ownership1;
    application_id: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    modified_on?: string;
    type?: string;
    description?: string;
    example?: string;
    created_on?: string;
    title?: string;
    is_hidden?: boolean;
    entity_type?: string;
    entity_slug?: string;
    subtitle?: string;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type LoyaltyPoints = {
    applicable?: number;
    description?: string;
    is_applied?: boolean;
    total?: number;
};
type DisplayBreakup = {
    currency_code?: string;
    message?: string[];
    value?: number;
    display?: string;
    currency_symbol?: string;
    key?: string;
};
type CouponBreakup = {
    is_applied?: boolean;
    minimum_cart_value?: number;
    max_discount_value?: number;
    uid?: string;
    message?: string;
    value?: number;
    description?: string;
    coupon_value?: number;
    code?: string;
    sub_title?: string;
    title?: string;
    coupon_type?: string;
    type?: string;
};
type RawBreakup = {
    discount?: number;
    gst_charges?: number;
    mrp_total?: number;
    cod_charge?: number;
    convenience_fee?: number;
    coupon?: number;
    vog?: number;
    delivery_charge?: number;
    you_saved?: number;
    subtotal?: number;
    total?: number;
    fynd_cash?: number;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
    raw?: RawBreakup;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    marked?: number;
    effective?: number;
    currency_symbol?: string;
    currency_code?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    seller?: BaseInfo;
    product_group_tags?: string[];
    uid?: string;
    price?: ArticlePriceInfo;
    extra_meta?: any;
    size?: string;
    _custom_json?: any;
    type?: string;
    parent_item_identifiers?: any;
    quantity?: number;
    store?: BaseInfo;
};
type ProductAvailability = {
    is_valid?: boolean;
    deliverable?: boolean;
    other_store_quantity?: number;
    out_of_stock?: boolean;
    sizes?: string[];
};
type ProductPrice = {
    selling?: number;
    currency_code?: string;
    marked?: number;
    effective?: number;
    add_on?: number;
    currency_symbol?: string;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type ProductImage = {
    aspect_ratio?: string;
    secure_url?: string;
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
type CartProduct = {
    name?: string;
    categories?: CategoryInfo[];
    item_code?: string;
    images?: ProductImage[];
    uid?: number;
    net_quantity?: NetQuantity;
    action?: ProductAction;
    type?: string;
    slug?: string;
    brand?: BaseInfo;
};
type DiscountRulesApp = {
    raw_offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
    offer?: any;
};
type FreeGiftItem = {
    item_brand_name?: string;
    item_name?: string;
    item_images_url?: string[];
    item_slug?: string;
    item_id?: number;
    item_price_details?: any;
};
type AppliedFreeArticles = {
    quantity?: number;
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    parent_item_identifier?: string;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type AppliedPromotion = {
    offer_text?: string;
    discount_rules?: DiscountRulesApp[];
    amount?: number;
    promotion_name?: string;
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
    promotion_group?: string;
    applied_free_articles?: AppliedFreeArticles[];
    article_quantity?: number;
    ownership?: Ownership2;
    promotion_type?: string;
    promo_id?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    discount?: string;
    message?: string;
    coupon_message?: string;
    article?: ProductArticle;
    availability?: ProductAvailability;
    is_set?: boolean;
    parent_item_identifiers?: any;
    price?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    product?: CartProduct;
    bulk_offer?: any;
    price_per_unit?: ProductPriceInfo;
    promotions_applied?: AppliedPromotion[];
    key?: string;
    quantity?: number;
    identifiers: CartProductIdentifer;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    message?: string;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    message?: string;
    success?: boolean;
    errors?: any;
};
type ShippingAddress = {
    name?: string;
    area?: string;
    email?: string;
    country_iso_code?: string;
    address?: string;
    state?: string;
    city?: string;
    address_type?: string;
    country_phone_code?: string;
    country_code?: string;
    phone?: number;
    meta?: any;
    landmark?: string;
    country?: string;
    area_code: string;
    pincode?: number;
    area_code_slug?: string;
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
    is_valid?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
};
type OpenApiFiles = {
    values: string[];
    key: string;
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiOrderItem = {
    discount: number;
    loyalty_discount?: number;
    employee_discount?: number;
    delivery_charges: number;
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    coupon_effective_discount: number;
    price_effective: number;
    size: string;
    price_marked: number;
    extra_meta?: any;
    product_id: number;
    meta?: CartItemMeta;
    cod_charges: number;
    cashback_applied: number;
    amount_paid: number;
    quantity?: number;
};
type OpenApiPlatformCheckoutReq = {
    coupon_code: string;
    order_id?: string;
    currency_code?: string;
    loyalty_discount?: number;
    employee_discount?: any;
    shipping_address?: ShippingAddress;
    payment_methods: MultiTenderPaymentMethod[];
    coupon_value: number;
    comment?: string;
    cod_charges: number;
    cashback_applied: number;
    cart_value: number;
    affiliate_order_id?: string;
    payment_mode?: string;
    files?: OpenApiFiles[];
    coupon?: string;
    gstin?: string;
    cart_items: OpenApiOrderItem[];
    delivery_charges: number;
    billing_address: ShippingAddress;
};
type OpenApiCheckoutResponse = {
    message?: string;
    success?: boolean;
    order_ref_id?: string;
    order_id: string;
};
type AbandonedCart = {
    buy_now?: boolean;
    articles: any[];
    cod_charges?: any;
    user_id: string;
    cart_value?: number;
    fc_index_map?: number[];
    cashback: any;
    is_active?: boolean;
    shipments?: any[];
    expire_at: string;
    uid: number;
    _id: string;
    coupon?: any;
    gstin?: string;
    is_archive?: boolean;
    last_modified: string;
    promotion?: any;
    order_id?: string;
    discount?: number;
    fynd_credits?: any;
    is_default: boolean;
    payment_methods?: any[];
    app_id?: string;
    created_on: string;
    comment?: string;
    bulk_coupon_discount?: number;
    checkout_mode?: string;
    meta?: any;
    merge_qty?: boolean;
    payments?: any;
    payment_mode?: string;
    pick_up_customer_details?: any;
    delivery_charges?: any;
};
type AbandonedCartResponse = {
    result?: any;
    success?: boolean;
    message?: string;
    page?: Page;
    items?: AbandonedCart[];
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    is_valid?: boolean;
    buy_now?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    message?: string;
    breakup_values?: CartBreakup;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    id?: string;
    gstin?: string;
    pan_no?: string;
    last_modified?: string;
    comment?: string;
    restrict_checkout?: boolean;
    items?: CartProductInfo[];
    checkout_mode?: string;
    delivery_promise?: ShipmentPromise;
    pan_config?: any;
    coupon_text?: string;
};
type AddProductCart = {
    product_group_tags?: string[];
    article_assignment?: any;
    seller_id?: number;
    item_size?: string;
    pos?: boolean;
    store_id?: number;
    item_id?: number;
    display?: string;
    article_id?: string;
    extra_meta?: any;
    _custom_json?: any;
    parent_item_identifiers?: any;
    quantity?: number;
};
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    cart?: CartDetailResponse;
    partial?: boolean;
    message?: string;
    success?: boolean;
};
type UpdateProductCart = {
    item_index?: number;
    item_size?: string;
    extra_meta?: any;
    item_id?: number;
    article_id?: string;
    _custom_json?: any;
    parent_item_identifiers?: any;
    quantity?: number;
    identifiers: CartProductIdentifer;
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
    share_url?: string;
    token?: string;
};
type SharedCartDetails = {
    created_on?: string;
    token?: string;
    source?: any;
    meta?: any;
    user?: any;
};
type SharedCart = {
    buy_now?: boolean;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    coupon_text?: string;
    payment_selection_lock?: PaymentSelectionLock;
    uid?: string;
    cart_id?: number;
    gstin?: string;
    last_modified?: string;
    is_valid?: boolean;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    id?: string;
    comment?: string;
    restrict_checkout?: boolean;
    checkout_mode?: string;
    message?: string;
    shared_cart_details?: SharedCartDetails;
    items?: CartProductInfo[];
};
type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
type CartList = {
    item_counts?: number;
    pick_up_customer_details?: any;
    cart_id?: string;
    created_on?: string;
    user_id?: string;
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
    buy_now?: boolean;
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    coupon_text?: string;
    payment_selection_lock?: PaymentSelectionLock;
    gstin?: string;
    last_modified?: string;
    user?: UserInfo;
    pan_config?: any;
    is_valid?: boolean;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    id?: string;
    pan_no?: string;
    comment?: string;
    restrict_checkout?: boolean;
    checkout_mode?: string;
    message?: string;
    items?: CartProductInfo[];
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
    current?: number;
    has_previous?: boolean;
    total?: number;
    total_item_count?: number;
};
type Coupon = {
    coupon_code?: string;
    is_applied?: boolean;
    minimum_cart_value?: number;
    max_discount_value?: number;
    is_applicable?: boolean;
    expires_on?: string;
    message?: string;
    description?: string;
    coupon_value?: number;
    sub_title?: string;
    title?: string;
    coupon_type?: string;
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
    area?: string;
    email?: string;
    user_id?: string;
    is_active?: boolean;
    name?: string;
    is_default_address?: boolean;
    cart_id?: string;
    city?: string;
    tags?: string[];
    phone?: string;
    geo_location?: GeoLocation;
    google_map_point?: any;
    address?: string;
    id?: string;
    created_by_user_id?: string;
    meta?: any;
    checkout_mode?: string;
    area_code?: string;
    state?: string;
    address_type?: string;
    country_code?: string;
    country?: string;
    landmark?: string;
    area_code_slug?: string;
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
    is_updated?: boolean;
    is_default_address?: boolean;
    success?: boolean;
    id?: string;
};
type DeleteAddressResponse = {
    is_deleted?: boolean;
    id?: string;
};
type PlatformSelectCartAddressRequest = {
    cart_id?: string;
    id?: string;
    checkout_mode?: string;
    billing_address_id?: string;
};
type ShipmentResponse = {
    promise?: ShipmentPromise;
    shipment_type?: string;
    fulfillment_type?: string;
    dp_id?: string;
    order_type?: string;
    box_type?: string;
    dp_options?: any;
    items?: CartProductInfo[];
    fulfillment_id?: number;
    shipments?: number;
};
type CartShipmentsResponse = {
    is_valid?: boolean;
    buy_now?: boolean;
    currency?: CartCurrency;
    breakup_values?: CartBreakup;
    delivery_charge_info?: string;
    id?: string;
    comment?: string;
    restrict_checkout?: boolean;
    delivery_promise?: ShipmentPromise;
    checkout_mode?: string;
    coupon_text?: string;
    shipments?: ShipmentResponse[];
    payment_selection_lock?: PaymentSelectionLock;
    uid?: string;
    message?: string;
    cart_id?: number;
    error?: boolean;
    gstin?: string;
    last_modified?: string;
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
    pan_no?: string;
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
type Files = {
    values: string[];
    key: string;
};
type StaffCheckout = {
    _id: string;
    last_name: string;
    first_name: string;
    employee_code?: string;
    user: string;
};
type PlatformCartCheckoutDetailRequest = {
    callback_url?: string;
    payment_params?: any;
    user_id: string;
    device_id?: string;
    payment_identifier?: string;
    pick_at_store_uid?: number;
    ordering_store?: number;
    payment_auto_confirm?: boolean;
    employee_code?: string;
    billing_address?: any;
    aggregator?: string;
    delivery_address?: any;
    address_id?: string;
    merchant_code?: string;
    id: string;
    billing_address_id?: string;
    extra_meta?: any;
    pos?: boolean;
    meta?: any;
    checkout_mode?: string;
    payment_mode: string;
    files?: Files[];
    order_type: string;
    staff?: StaffCheckout;
};
type CheckCart = {
    buy_now?: boolean;
    store_code?: string;
    breakup_values?: CartBreakup;
    cod_available?: boolean;
    delivery_promise?: ShipmentPromise;
    cod_charges?: number;
    coupon_text?: string;
    payment_selection_lock?: PaymentSelectionLock;
    user_type?: string;
    uid?: string;
    cart_id?: number;
    gstin?: string;
    last_modified?: string;
    error_message?: string;
    is_valid?: boolean;
    order_id?: string;
    currency?: CartCurrency;
    delivery_charge_info?: string;
    id?: string;
    comment?: string;
    restrict_checkout?: boolean;
    checkout_mode?: string;
    success?: boolean;
    cod_message?: string;
    message?: string;
    items?: CartProductInfo[];
    delivery_charges?: number;
    delivery_charge_order_value?: number;
    store_emps?: any[];
};
type CartCheckoutResponse = {
    cart?: CheckCart;
    order_id?: string;
    success?: boolean;
    app_intercept_url?: string;
    message?: string;
    callback_url?: string;
    payment_confirm_url?: string;
    data?: any;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    name?: string;
    area?: string;
    email?: string;
    store_code?: string;
    uid?: number;
    address?: string;
    state?: string;
    id?: number;
    city?: string;
    address_type?: string;
    phone?: string;
    country?: string;
    landmark?: string;
    area_code?: string;
    pincode?: number;
    area_code_slug?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    address_id?: string;
    payment_mode?: string;
    merchant_code?: string;
    id?: string;
    aggregator_name?: string;
    payment_identifier?: string;
};
type CouponValidity = {
    discount?: number;
    display_message_en?: string;
    code?: string;
    title?: string;
    valid?: boolean;
};
type PaymentCouponValidate = {
    message?: string;
    success: boolean;
    coupon_validity?: CouponValidity;
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
