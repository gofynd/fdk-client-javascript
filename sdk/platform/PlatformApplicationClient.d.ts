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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, UserDataInfo, PaymentModeInfo, PlatformItem, Prices, GSTDetailsData, BagUnit, ShipmentStatus, ShipmentItemFulFillingStore, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, ShipmentPayments, DPDetailsData, OrderDetailsData, UserDetailsData, TrackingList, AffiliateMeta, DebugInfo, ShipmentTimeStamp, Formatted, LockData, BuyerDetails, EInvoice, EinvoiceInfo, ShipmentMeta, PDFLinks, AffiliateDetails, ShipmentStatusData, BagStateMapper, BagStatusHistory, PlatformDeliveryAddress, BagConfigs, CurrentStatus, BagGST, OrderBagArticle, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, Identifier, FinancialBreakup, OrderBrandName, OrderBags, OrderingStoreDetails, FulfillingStore, Dimensions, Meta, CompanyDetails, PlatformShipment, ShipmentInfoResponse, BillingStaffDetails, PlatformUserDetails, TransactionData, OrderMeta, TaxDetails, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, bulkListingData, BulkListingPage, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, AffiliateBagDetails, Dates, BagReturnableCancelableStatus, BagGSTDetails, Weight, ReturnConfig, Article, Attributes, Item, StoreAddress, StoreEinvoice, StoreEwaybill, StoreGstCredentials, Document, StoreDocuments, EInvoicePortalDetails, StoreMeta, Store, Brand, ArticleDetails, B2BPODetails, BagMeta, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, Bags, OriginalFilter, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, Products, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderUser, UserData, OrderPriority, MarketPlacePdf, AffiliateBag, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, OrderDetails, Meta1, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, TaxInfo, Tax, Charge, ProcessingDates, LineItem, Shipment, BillingInfo, ShippingInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, LimitedProductData, Price, Size, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, MetaFields, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionBadge, CollectionImage, UserInfo, CollectionSchedule, CollectionBanner, CollectionQuery, SeoDetail, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, UserInfo1, ProductTemplateExportResponse, ProductDownloadsResponse, ProductTemplateExportFilterRequest, ProductTemplateDownloadsExport, ProductPartialExportRequest, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, SingleCategoryResponse, CategoryUpdateResponse, CustomOrder, ProductPublish, NetQuantity, TaxIdentifier, Trader, TeaserTag, ProductCreateUpdateSchemaV2, Logo, ProductPublish1, NetQuantityResponse, Image, VerifiedBy, ReturnConfigResponse, ProductSchemaV2, ProductListingResponseV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, InventoryResponse, InventoryResponsePaginated, BrandMeta, WeightResponse, CompanyMeta, DimensionResponse, PriceMeta, ManufacturerResponse, QuantityBase, Quantities, Trader1, ReturnConfig1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BrandMeta1, WeightResponse1, CompanyMeta1, DimensionResponse1, ArticleStoreResponse, PriceArticle, ManufacturerResponse1, Quantity, QuantitiesArticle, Trader2, ReturnConfig2, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportQuantityFilter, InventoryExportAdvanceOption, InventoryExportJob, InventoryExportFilter, InventoryCreateRequest, InventoryJobFilters, InventoryJobDetailResponse, InventoryExportJobListResponse, InventoryPartialExportRequest, InventoryExportCreateFilters, InventoryExportCreateResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, PageResponse, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, ProductReturnConfigSerializer, GetAddressSerializer, SellerPhoneNumber, UserSerializer1, UserSerializer2, GetCompanySerializer, LocationIntegrationType, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, ContactDetails, CompanyTaxesSerializer, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Ownership, CouponAction, Rule, Validity, DisplayMetaDict, DisplayMeta, Validation, CouponAuthor, RuleDefinition, State, UsesRemaining, UsesRestriction, PostOrder, BulkBundleRestriction, PriceRange, PaymentAllowValue, PaymentModes, Restrictions, CouponSchedule, CouponDateMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, Visibility, UsesRemaining1, UsesRestriction1, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, Restrictions1, PromotionAction, PromotionAuthor, Ownership1, DisplayMeta1, PromotionSchedule, PromotionDateMeta, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, ProductPrice, ProductPriceInfo, ProductAvailability, ActionQuery, ProductAction, CategoryInfo, BaseInfo, ProductImage, CartProduct, PromoMeta, BasePrice, ArticlePriceInfo, ProductArticle, Ownership2, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, CartProductIdentifer, CartProductInfo, RawBreakup, CouponBreakup, DisplayBreakup, LoyaltyPoints, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, Files, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    display_fields: string[];
    aggregators?: any[];
    created: boolean;
    success: boolean;
    excluded_fields: string[];
    app_id: string;
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
type PaymentGatewayConfig = {
    config_type: string;
    is_active?: boolean;
    merchant_salt: string;
    secret: string;
    key: string;
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
    small: string;
    large: string;
};
type IntentApp = {
    code?: string;
    display_name?: string;
    package_name?: string;
    logos?: PaymentModeLogo;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    card_issuer?: string;
    display_priority?: number;
    intent_app?: IntentApp[];
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_fingerprint?: string;
    merchant_code?: string;
    exp_month?: number;
    card_type?: string;
    card_id?: string;
    card_isin?: string;
    nickname?: string;
    cod_limit_per_order?: number;
    name?: string;
    card_brand?: string;
    card_token?: string;
    expired?: boolean;
    exp_year?: number;
    timeout?: number;
    intent_app_error_list?: string[];
    compliant_with_tokenisation_guidelines?: boolean;
    logo_url?: PaymentModeLogo;
    retry_count?: number;
    intent_flow?: boolean;
    cod_limit?: number;
    card_brand_image?: string;
    fynd_vpa?: string;
    remaining_limit?: number;
    card_reference?: string;
    card_name?: string;
    code?: string;
    display_name?: string;
    card_number?: string;
    aggregator_name: string;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    display_priority: number;
    save_card?: boolean;
    is_pay_by_card_pl?: boolean;
    anonymous_enable?: boolean;
    name: string;
    list?: PaymentModeList[];
    display_name: string;
    aggregator_name?: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type Payout = {
    transfer_type: string;
    unique_transfer_no: any;
    is_default: boolean;
    is_active: boolean;
    customers: any;
    payouts_aggregators: any[];
    more_attributes: any;
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    account_type: string;
    country?: string;
    ifsc_code: string;
    bank_name?: string;
    branch_name?: string;
    city?: string;
    pincode?: number;
    account_no?: string;
    account_holder?: string;
    state?: string;
};
type PayoutRequest = {
    transfer_type: string;
    aggregator: string;
    users: any;
    is_active: boolean;
    unique_external_id: string;
    bank_details: PayoutBankDetails;
};
type PayoutResponse = {
    transfer_type: string;
    unique_transfer_no: string;
    created: boolean;
    users: any;
    aggregator: string;
    is_active: boolean;
    payouts: any;
    payment_status: string;
    bank_details: any;
    success: boolean;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_default: boolean;
    is_active: boolean;
};
type UpdatePayoutRequest = {
    unique_external_id: string;
    is_default: boolean;
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
    message: string;
    success: boolean;
    data?: any;
    is_verified_flag?: boolean;
};
type NotFoundResourceError = {
    code: string;
    success: boolean;
    description: string;
};
type BankDetailsForOTP = {
    ifsc_code: string;
    bank_name: string;
    branch_name: string;
    account_no: string;
    account_holder: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    success?: boolean;
    branch_name: string;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    is_active: boolean;
    comment?: string;
    bank_name: string;
    subtitle: string;
    email: string;
    modified_on: string;
    mobile?: string;
    branch_name?: string;
    account_holder: string;
    created_on: string;
    transfer_mode: string;
    title: string;
    ifsc_code: string;
    account_no: string;
    address: string;
    beneficiary_id: string;
    display_name: string;
    delights_user_name?: string;
    id: number;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    payment_gateway?: string;
    current_status?: string;
    extra_meta?: any;
    order_id?: string;
    payment_id?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    name?: string;
    amount: number;
    mode: string;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    message: string;
    success: boolean;
    order_id: string;
};
type PlatformPaymentOptions = {
    source: string;
    callback_url?: any;
    mode_of_payment: string;
    anonymous_cod?: boolean;
    enabled: boolean;
    cod_amount_limit?: number;
    cod_charges?: number;
    methods: any;
    payment_selection_lock?: any;
};
type PlatfromPaymentConfig = {
    message: string;
    success: boolean;
    data: PlatformPaymentOptions;
};
type UpdatePlatformPaymentConfig = {
    anonymous_cod?: boolean;
    cod_amount_limit?: number;
    cod_charges?: number;
    methods: any;
    payment_selection_lock?: any;
};
type CODdata = {
    remaining_limit: number;
    user_id: string;
    is_active: boolean;
    limit: number;
    usages: number;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
};
type SetCODForUserRequest = {
    merchant_user_id: string;
    mobileno: string;
    is_active: boolean;
};
type SetCODOptionResponse = {
    message: string;
    success: boolean;
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
    active_device_count: number;
    inactive_device_count: number;
};
type EdcDeviceStatsResponse = {
    success: boolean;
    statistics: StatisticsData;
};
type EdcAddRequest = {
    edc_device_serial_no: string;
    terminal_serial_no: string;
    aggregator_id: number;
    store_id: number;
    edc_model: string;
    device_tag?: string;
};
type EdcDevice = {
    application_id: string;
    edc_device_serial_no: string;
    edc_model?: string;
    terminal_serial_no: string;
    is_active: boolean;
    aggregator_id: number;
    terminal_unique_identifier: string;
    store_id: number;
    merchant_store_pos_code?: string;
    device_tag: string;
    aggregator_name?: string;
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
    edc_model?: string;
    is_active?: string;
    aggregator_id?: number;
    store_id?: number;
    merchant_store_pos_code?: string;
    device_tag?: string;
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
    customer_id: string;
    email: string;
    contact: string;
    aggregator: string;
    vpa?: string;
    method: string;
    timeout?: number;
    currency: string;
    merchant_order_id: string;
    razorpay_payment_id?: string;
    amount: number;
    order_id: string;
    device_id?: string;
};
type PaymentInitializationResponse = {
    customer_id?: string;
    aggregator: string;
    vpa?: string;
    method: string;
    upi_poll_url?: string;
    currency?: string;
    timeout?: number;
    merchant_order_id: string;
    status?: string;
    device_id?: string;
    razorpay_payment_id?: string;
    virtual_id?: string;
    bqr_image?: string;
    amount?: number;
    success: boolean;
    polling_url: string;
    aggregator_order_id?: string;
};
type PaymentStatusUpdateRequest = {
    customer_id: string;
    email: string;
    contact: string;
    aggregator: string;
    vpa?: string;
    method: string;
    currency: string;
    merchant_order_id: string;
    status: string;
    amount: number;
    order_id: string;
    device_id?: string;
};
type PaymentStatusUpdateResponse = {
    retry: boolean;
    status: string;
    success?: boolean;
    redirect_url?: string;
    aggregator_name: string;
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
type UserDataInfo = {
    uid?: number;
    avis_user_id?: string;
    gender?: string;
    email?: string;
    last_name?: string;
    is_anonymous_user?: boolean;
    name?: string;
    first_name?: string;
    mobile?: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type PlatformItem = {
    can_cancel?: boolean;
    image?: string[];
    l1_category?: string[];
    l3_category_name?: string;
    can_return?: boolean;
    size?: string;
    l3_category?: number;
    images?: string[];
    code?: string;
    name?: string;
    color?: string;
    department_id?: number;
    id?: number;
};
type Prices = {
    coupon_value?: number;
    tax_collected_at_source?: number;
    fynd_credits?: number;
    cashback_applied?: number;
    refund_amount?: number;
    refund_credit?: number;
    value_of_good?: number;
    promotion_effective_discount?: number;
    discount?: number;
    amount_paid_roundoff?: number;
    delivery_charge?: number;
    cashback?: number;
    price_effective?: number;
    cod_charges?: number;
    price_marked?: number;
    amount_paid?: number;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    gst_fee: number;
    value_of_good: number;
    gstin_code: string;
    brand_calculated_amount: number;
};
type BagUnit = {
    can_cancel?: boolean;
    status: any;
    item?: PlatformItem;
    bag_id: number;
    shipment_id: string;
    can_return?: boolean;
    ordering_channel: string;
    prices?: Prices;
    gst?: GSTDetailsData;
    item_quantity: number;
    total_shipment_bags: number;
};
type ShipmentStatus = {
    status: string;
    ops_status: string;
    actual_status: string;
    hex_code: string;
    title: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type ShipmentItem = {
    created_at: string;
    user?: UserDataInfo;
    payment_mode_info?: PaymentModeInfo;
    bags?: BagUnit[];
    prices?: Prices;
    shipment_status?: ShipmentStatus;
    channel?: any;
    sla?: any;
    application?: any;
    company?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    total_bags_count: number;
    shipment_created_at: number;
    total_shipments_in_order: number;
    payment_methods?: any;
    id: string;
    fulfilling_centre: string;
};
type FilterInfoOption = {
    value?: string;
    name?: string;
    text: string;
};
type FiltersInfo = {
    type: string;
    value: string;
    options?: FilterInfoOption[];
    text: string;
};
type ShipmentInternalPlatformViewResponse = {
    applied_filters?: any;
    items?: ShipmentItem[];
    filters?: FiltersInfo[];
    page?: any;
};
type Error = {
    success?: boolean;
    message?: string;
};
type ShipmentPayments = {
    mode?: string;
    logo?: string;
    source?: string;
};
type DPDetailsData = {
    track_url?: string;
    eway_bill_id?: string;
    name?: string;
    awb_no?: string;
    gst_tag?: string;
    pincode?: string;
    id?: number;
    country?: string;
};
type OrderDetailsData = {
    ordering_channel?: string;
    affiliate_id?: string;
    source?: string;
    order_value?: string;
    ordering_channel_logo?: any;
    fynd_order_id: string;
    order_date?: string;
    cod_charges?: string;
    tax_details?: any;
};
type UserDetailsData = {
    address: string;
    email?: string;
    city: string;
    name: string;
    state: string;
    pincode: string;
    country: string;
    phone: string;
};
type TrackingList = {
    status: string;
    text: string;
    time?: string;
    is_current?: boolean;
    is_passed?: boolean;
};
type AffiliateMeta = {
    due_date?: string;
    channel_shipment_id?: string;
    channel_order_id?: string;
    is_priority?: boolean;
    loyalty_discount?: number;
    size_level_total_qty?: number;
    quantity?: number;
    coupon_code?: string;
    order_item_id?: string;
    box_type?: string;
    employee_discount?: number;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
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
type BuyerDetails = {
    gstin: string;
    address: string;
    city: string;
    name: string;
    ajio_site_id?: string;
    state: string;
    pincode: number;
};
type EInvoice = {
    error_code?: string;
    acknowledge_date?: string;
    irn?: string;
    signed_qr_code?: string;
    acknowledge_no?: number;
    signed_invoice?: string;
    error_message?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type ShipmentMeta = {
    forward_affiliate_order_id?: string;
    auto_trigger_dp_assignment_acf: boolean;
    dp_sort_key?: string;
    po_number?: string;
    b2c_buyer_details?: any;
    debug_info?: DebugInfo;
    timestamp?: ShipmentTimeStamp;
    return_affiliate_order_id?: string;
    dp_id?: string;
    external?: any;
    shipment_weight?: number;
    formatted?: Formatted;
    marketplace_store_id?: string;
    dp_options?: any;
    dp_name?: string;
    shipment_volumetric_weight?: number;
    forward_affiliate_shipment_id?: string;
    assign_dp_from_sb?: boolean;
    return_affiliate_shipment_id?: string;
    order_type?: string;
    box_type?: string;
    lock_data?: LockData;
    return_details?: any;
    packaging_name?: string;
    store_invoice_updated_date?: string;
    b2b_buyer_details?: BuyerDetails;
    fulfilment_priority_text?: string;
    awb_number?: string;
    bag_weight?: any;
    due_date?: string;
    einvoice_info?: EinvoiceInfo;
    return_store_node?: number;
    weight: number;
    return_awb_number?: string;
    same_store_available: boolean;
    ewaybill_info?: any;
};
type PDFLinks = {
    b2b?: string;
    label_a6?: string;
    label_pos?: string;
    invoice_a6?: string;
    invoice_a4?: string;
    invoice_type: string;
    credit_note_url?: string;
    label_type: string;
    invoice?: string;
    label?: string;
    po_invoice?: string;
    invoice_pos?: string;
    label_a4?: string;
};
type AffiliateDetails = {
    affiliate_meta: AffiliateMeta;
    ad_id?: string;
    affiliate_shipment_id: string;
    shipment_meta: ShipmentMeta;
    affiliate_id?: string;
    company_affiliate_tag?: string;
    affiliate_order_id: string;
    affiliate_store_id: string;
    pdf_links?: PDFLinks;
    affiliate_bag_id: string;
};
type ShipmentStatusData = {
    status?: string;
    created_at?: string;
    shipment_id?: string;
    bag_list?: string[];
    id?: number;
};
type BagStateMapper = {
    app_state_name?: string;
    state_type: string;
    display_name: string;
    is_active?: boolean;
    notify_customer?: boolean;
    journey_type: string;
    bs_id: number;
    name: string;
    app_display_name?: string;
    app_facing?: boolean;
};
type BagStatusHistory = {
    reasons?: any[];
    delivery_partner_id?: number;
    status: string;
    state_type?: string;
    shipment_id?: string;
    bag_id?: number;
    created_at?: string;
    display_name?: string;
    forward?: boolean;
    kafka_sync?: boolean;
    state_id?: number;
    bag_state_mapper?: BagStateMapper;
    delivery_awb_number?: string;
    app_display_name?: string;
    updated_at?: string;
    bsh_id?: number;
    store_id?: number;
};
type PlatformDeliveryAddress = {
    landmark?: string;
    created_at?: string;
    address2?: string;
    latitude?: number;
    longitude?: number;
    updated_at?: string;
    email?: string;
    city?: string;
    address1?: string;
    contact_person?: string;
    version?: string;
    area?: string;
    address_type?: string;
    address_category?: string;
    state?: string;
    pincode?: string;
    country?: string;
    phone?: string;
};
type BagConfigs = {
    is_active: boolean;
    is_returnable: boolean;
    allow_force_return: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
};
type CurrentStatus = {
    delivery_partner_id?: number;
    created_at?: string;
    state_type?: string;
    status?: string;
    bag_id?: number;
    shipment_id?: string;
    kafka_sync?: boolean;
    state_id?: number;
    current_status_id: number;
    bag_state_mapper?: BagStateMapper;
    delivery_awb_number?: string;
    updated_at?: number;
    store_id?: number;
};
type BagGST = {
    gst_fee?: number;
    value_of_good?: number;
    gstin_code?: string;
    brand_calculated_amount?: number;
    is_default_hsn_code?: boolean;
    gst_tax_percentage?: number;
    gst_tag?: string;
    hsn_code?: string;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    item_criteria?: ItemCriterias;
    cart_conditions?: any;
};
type DiscountRules = {
    type?: string;
    value?: number;
};
type AppliedPromos = {
    promotion_name?: string;
    mrp_promotion?: boolean;
    promotion_type?: string;
    article_quantity?: number;
    buy_rules?: BuyRules[];
    promo_id?: string;
    amount?: number;
    discount_rules?: DiscountRules[];
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    gst_fee: number;
    promotion_effective_discount: number;
    discount: number;
    amount_paid_roundoff?: number;
    added_to_fynd_cash: boolean;
    coupon_effective_discount: number;
    hsn_code: string;
    value_of_good: number;
    item_name: string;
    size: string;
    brand_calculated_amount: number;
    identifiers: Identifier;
    total_units: number;
    price_marked: number;
    gst_tag: string;
    fynd_credits: number;
    tax_collected_at_source?: number;
    cashback_applied: number;
    delivery_charge: number;
    cod_charges: number;
    coupon_value: number;
    refund_credit: number;
    cashback: number;
    transfer_price: number;
    price_effective: number;
    gst_tax_percentage: number;
    amount_paid: number;
};
type OrderBrandName = {
    created_on: string;
    brand_name: string;
    logo: string;
    modified_on?: string;
    company: string;
    id: number;
};
type OrderBags = {
    seller_identifier?: string;
    delivery_address?: PlatformDeliveryAddress;
    identifier?: string;
    can_cancel?: boolean;
    bag_id: number;
    bag_configs?: BagConfigs;
    quantity?: number;
    current_status?: CurrentStatus;
    can_return?: boolean;
    display_name?: string;
    gst_details?: BagGST;
    entity_type?: string;
    line_number?: number;
    article?: OrderBagArticle;
    item?: PlatformItem;
    parent_promo_bags?: any;
    applied_promos?: AppliedPromos[];
    financial_breakup?: FinancialBreakup;
    prices?: Prices;
    brand?: OrderBrandName;
};
type OrderingStoreDetails = {
    address: string;
    city: string;
    store_name: string;
    contact_person: string;
    code: string;
    state: string;
    meta: any;
    pincode: string;
    ordering_store_id: number;
    country: string;
    phone: string;
};
type FulfillingStore = {
    address: string;
    pincode: string;
    city: string;
    store_name: string;
    contact_person: string;
    code: string;
    state: string;
    meta: any;
    fulfillment_channel: string;
    id: number;
    country: string;
    phone: string;
};
type Dimensions = {
    length?: number;
    width?: number;
    unit?: string;
    is_default?: boolean;
    height?: number;
};
type Meta = {
    dimension?: Dimensions;
};
type CompanyDetails = {
    company_cin?: string;
    company_id?: number;
    address?: any;
    company_name?: string;
};
type PlatformShipment = {
    payments?: ShipmentPayments;
    shipment_quantity?: number;
    dp_details?: DPDetailsData;
    user?: UserDataInfo;
    vertical?: string;
    order?: OrderDetailsData;
    billing_details?: UserDetailsData;
    operational_status?: string;
    shipment_id: string;
    delivery_details?: UserDetailsData;
    delivery_slot?: any;
    tracking_list?: TrackingList[];
    affiliate_details?: AffiliateDetails;
    coupon?: any;
    fulfilment_priority?: number;
    packaging_type?: string;
    status?: ShipmentStatusData;
    shipment_images?: string[];
    bag_status_history?: BagStatusHistory[];
    gst_details?: GSTDetailsData;
    payment_mode?: string;
    bags?: OrderBags[];
    user_agent?: string;
    invoice_id?: string;
    custom_meta?: any[];
    total_bags?: number;
    total_items?: number;
    ordering_store?: OrderingStoreDetails;
    prices?: Prices;
    shipment_status?: string;
    platform_logo?: string;
    picked_date?: string;
    priority_text?: string;
    enable_dp_tracking?: boolean;
    invoice?: EinvoiceInfo;
    fulfilling_store?: FulfillingStore;
    meta?: Meta;
    journey_type?: string;
    company_details?: CompanyDetails;
};
type ShipmentInfoResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    message?: string;
};
type BillingStaffDetails = {
    last_name?: string;
    staff_id?: number;
    user?: string;
    first_name?: string;
};
type PlatformUserDetails = {
    platform_user_first_name?: string;
    platform_user_id?: string;
    platform_user_last_name?: string;
};
type TransactionData = {
    status?: string;
    currency?: string;
    unique_reference_number?: string;
    terminal_id?: string;
    transaction_id?: string;
    entity?: string;
    payment_id?: string;
    amount_paid?: string;
};
type OrderMeta = {
    order_platform?: string;
    billing_staff_details?: BillingStaffDetails;
    platform_user_details?: PlatformUserDetails;
    order_tags?: any[];
    staff?: any;
    company_logo?: string;
    transaction_data?: TransactionData;
    order_type?: string;
    order_child_entities?: string[];
    customer_note?: string;
    extra_meta?: any;
    files?: any[];
    mongo_cart_id?: number;
    employee_id?: number;
    currency_symbol?: string;
    cart_id?: number;
    ordering_store?: number;
    comment?: string;
    payment_type?: string;
};
type TaxDetails = {
    pan_no?: string;
    gstin?: string;
};
type OrderDict = {
    prices?: Prices;
    meta?: OrderMeta;
    fynd_order_id: string;
    order_date: string;
    payment_methods?: any;
    tax_details?: TaxDetails;
};
type ShipmentDetailsResponse = {
    success: boolean;
    shipments?: PlatformShipment[];
    order?: OrderDict;
};
type SubLane = {
    index?: number;
    actions?: any[];
    total_items?: number;
    text?: string;
    value?: string;
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
    value?: string;
    name?: string;
    display?: string;
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformOrderItems = {
    user_info?: UserDataInfo;
    breakup_values?: PlatformBreakupValues[];
    payment_mode?: string;
    order_created_time?: string;
    channel?: PlatformChannel;
    order_value?: number;
    order_id?: string;
    shipments?: PlatformShipment[];
    total_order_value?: number;
    meta?: any;
};
type OrderListingResponse = {
    message?: string;
    total_count?: number;
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
    options?: Options[];
    key: string;
    text: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    status?: string;
    reason?: string;
    last_location_recieved_at?: string;
    raw_status?: string;
    updated_time?: string;
    updated_at?: string;
    meta?: any;
    account_name?: string;
    awb?: string;
    shipment_type?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type AdvanceFilterInfo = {
    processed?: FiltersInfo[];
    filters?: FiltersInfo[];
    unfulfilled?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    returned?: FiltersInfo[];
};
type FiltersResponse = {
    advance_filter?: AdvanceFilterInfo;
    global_filter?: FiltersInfo[];
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    status?: string;
    report_requested_at?: string;
    report_created_at?: string;
    display_name?: string;
    report_name?: string;
    request_details?: any;
    s3_key?: string;
    report_id?: string;
    report_type?: string;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    article_id?: string;
    item_id?: string;
    jio_code?: string;
};
type JioCodeUpsertPayload = {
    data?: JioCodeUpsertDataSet[];
};
type NestedErrorSchemaDataSet = {
    type?: string;
    message?: string;
    value?: string;
};
type JioCodeUpsertResponse = {
    data?: any[];
    trace_id?: string;
    error?: NestedErrorSchemaDataSet[];
    success?: boolean;
    identifier?: string;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    data?: any;
    company_id?: string;
    batch_id: string;
    do_invoice_label_generated: boolean;
    invoice?: any;
    store_name?: string;
    label?: any;
    invoice_status?: string;
    store_code?: string;
    store_id?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type URL = {
    url?: string;
};
type FileResponse = {
    upload?: FileUploadResponse;
    operation?: string;
    size?: number;
    content_type?: string;
    file_path?: string;
    cdn?: URL;
    namespace?: string;
    method?: string;
    tags?: string[];
    file_name?: string;
};
type bulkListingData = {
    excel_url?: string;
    processing_shipments?: string[];
    store_name?: string;
    processing?: number;
    total?: number;
    file_name?: string;
    failed?: number;
    batch_id?: string;
    user_id?: string;
    status?: string;
    failed_shipments?: any[];
    company_id?: number;
    uploaded_on?: string;
    store_code?: string;
    store_id?: number;
    user_name?: string;
    successful_shipments?: any[];
    id?: string;
    successful?: number;
};
type BulkListingPage = {
    has_next?: boolean;
    size?: number;
    has_previous?: boolean;
    total?: number;
    type?: string;
    current?: number;
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
    qc_type?: string[];
    question_set?: QuestionSet[];
    id?: number;
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
    company_id?: string;
    batch_id?: string;
    total_shipments_count?: number;
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    successful_shipment_ids?: string[];
    processing_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    data?: BulkActionDetailsDataField[];
    message?: string;
    status?: boolean;
    failed_records?: string[];
    uploaded_by?: string;
    error?: string[];
    success?: string;
    uploaded_on?: string;
    user_id?: string;
};
type AffiliateBagDetails = {
    affiliate_meta: AffiliateMeta;
    affiliate_order_id: string;
    loyalty_discount?: number;
    affiliate_bag_id: string;
    employee_discount?: number;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
};
type BagGSTDetails = {
    cgst_tax_percentage: number;
    tax_collected_at_source: number;
    cgst_gst_fee: string;
    gst_fee: number;
    igst_gst_fee: string;
    value_of_good: number;
    sgst_gst_fee: string;
    sgst_tax_percentage: number;
    igst_tax_percentage: number;
    gstin_code?: string;
    brand_calculated_amount: number;
    is_default_hsn_code?: boolean;
    hsn_code_id: string;
    gst_tax_percentage: number;
    gst_tag: string;
    hsn_code: string;
};
type Weight = {
    is_default?: boolean;
    unit?: string;
    shipping?: number;
};
type ReturnConfig = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Article = {
    esp_modified?: any;
    uid: string;
    seller_identifier: string;
    dimensions?: Dimensions;
    _id: string;
    child_details?: any;
    weight?: Weight;
    size: string;
    return_config?: ReturnConfig;
    identifiers: Identifier;
    is_set?: boolean;
    code?: string;
    a_set?: any;
    raw_meta?: any;
};
type Attributes = {
    brand_name?: string;
    gender?: string[];
    essential?: string;
    marketer_name?: string;
    primary_material?: string;
    name?: string;
    marketer_address?: string;
    primary_color_hex?: string;
    primary_color?: string;
};
type Item = {
    l1_category?: string[];
    item_id: number;
    brand_id: number;
    color?: string;
    department_id?: number;
    can_cancel?: boolean;
    attributes: Attributes;
    size: string;
    name: string;
    code?: string;
    branch_url?: string;
    image: string[];
    can_return?: boolean;
    l3_category_name?: string;
    l2_category?: string[];
    l2_category_id?: number;
    webstore_product_url?: string;
    gender?: string;
    brand: string;
    l3_category?: number;
    l1_category_id?: number;
    meta?: any;
    slug_key: string;
    last_updated_at?: string;
};
type StoreAddress = {
    created_at: string;
    address2?: string;
    area?: string;
    address_category: string;
    latitude: number;
    country_code: string;
    city: string;
    version?: string;
    updated_at: string;
    pincode: number;
    contact_person: string;
    address_type: string;
    state: string;
    country: string;
    phone: string;
    landmark?: string;
    longitude: number;
    email?: string;
    address1: string;
};
type StoreEinvoice = {
    user?: string;
    enabled: boolean;
    username?: string;
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
    value: string;
    url?: string;
    legal_name: string;
    verified: boolean;
    ds_type: string;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    user?: string;
    username?: string;
    password?: string;
};
type StoreMeta = {
    timing?: any[];
    product_return_config?: any;
    additional_contact_details?: any;
    display_name: string;
    gst_credentials: StoreGstCredentials;
    notification_emails?: string[];
    stage: string;
    ewaybill_portal_details?: any;
    documents?: StoreDocuments;
    gst_number?: string;
    einvoice_portal_details?: EInvoicePortalDetails;
};
type Store = {
    location_type: string;
    mall_name?: string;
    created_at: string;
    address2?: string;
    packaging_material_count?: number;
    brand_id?: any;
    is_archived?: boolean;
    order_integration_id?: string;
    latitude: number;
    is_enabled_for_recon?: boolean;
    city: string;
    brand_store_tags?: string[];
    vat_no?: string;
    parent_store_id?: number;
    code?: string;
    name: string;
    updated_at?: string;
    pincode: string;
    login_username: string;
    s_id: string;
    store_address_json?: StoreAddress;
    company_id: number;
    is_active?: boolean;
    contact_person: string;
    store_active_from?: string;
    state: string;
    country: string;
    phone: number;
    longitude: number;
    alohomora_user_id?: number;
    address1: string;
    mall_area?: string;
    store_email: string;
    meta: StoreMeta;
    fulfillment_channel: string;
};
type Brand = {
    created_on?: number;
    credit_note_allowed?: boolean;
    invoice_prefix?: string;
    brand_name: string;
    script_last_ran?: string;
    logo?: string;
    modified_on?: number;
    start_date?: string;
    is_virtual_invoice?: boolean;
    company: string;
    brand_id: number;
    credit_note_expiry_days?: number;
    pickup_location?: string;
};
type ArticleDetails = {
    status?: any;
};
type B2BPODetails = {
    po_line_amount?: number;
    total_gst_percentage?: number;
    docker_number?: string;
    item_base_price?: number;
    po_tax_amount?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type BagDetailsPlatformResponse = {
    seller_identifier?: string;
    restore_promos?: any;
    b_id: number;
    affiliate_bag_details: AffiliateBagDetails;
    operational_status?: string;
    identifier?: string;
    order_integration_id?: string;
    b_type?: string;
    shipment_id?: string;
    no_of_bags_order?: number;
    bag_update_time?: number;
    dates?: Dates;
    affiliate_details?: AffiliateDetails;
    quantity?: number;
    tags?: string[];
    restore_coupon?: boolean;
    current_status: BagStatusHistory;
    status: BagReturnableCancelableStatus;
    display_name?: string;
    gst_details: BagGSTDetails;
    bag_status_history?: BagStatusHistory;
    entity_type?: string;
    current_operational_status: BagStatusHistory;
    line_number?: number;
    article: Article;
    item: Item;
    bag_status: BagStatusHistory[];
    parent_promo_bags?: any;
    ordering_store?: Store;
    applied_promos?: any[];
    financial_breakup: FinancialBreakup[];
    prices: Prices;
    brand: Brand;
    article_details?: ArticleDetails;
    original_bag_list?: number[];
    reasons?: any[];
    meta?: BagMeta;
    journey_type: string;
    qc_required?: any;
};
type ErrorResponse = {
    error: string;
    message: string;
};
type Page1 = {
    item_total: number;
    has_next: boolean;
    size: number;
    page_type: string;
    current: number;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type GeneratePosOrderReceiptResponse = {
    success?: boolean;
    order_id?: string;
    payment_receipt?: string;
    invoice_receipt?: string;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    shipment_id?: string;
    error?: string;
    message?: string;
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
    affiliate_bag_id?: string;
    store_id: number;
    bag_id?: number;
    item_id?: string;
    reason_ids?: number[];
    set_id?: string;
    fynd_order_id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    mongo_article_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_bag_id?: string;
    affiliate_shipment_id?: string;
    reason_text: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    id?: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    action: string;
    action_type: string;
    entity_type: string;
};
type Bags = {
    affiliate_bag_id?: string;
    bag_id?: number;
    affiliate_order_id?: string;
    is_locked?: boolean;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type CheckResponse = {
    shipment_id?: string;
    affiliate_shipment_id?: string;
    affiliate_id?: string;
    bags?: Bags[];
    lock_status?: boolean;
    status?: string;
    original_filter?: OriginalFilter;
    is_bag_locked?: boolean;
    is_shipment_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    success?: boolean;
    check_response?: CheckResponse[];
    message?: string;
};
type AnnouncementResponse = {
    description?: string;
    to_datetime?: string;
    platform_id?: string;
    logo_url?: string;
    from_datetime?: string;
    company_id?: number;
    platform_name?: string;
    created_at?: string;
    id: number;
    title?: string;
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
type EntityReasonData = {
    reason_text?: string;
    reason_id?: number;
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
    reason_text?: string;
    reason_id?: number;
};
type ProductsReasons = {
    filters?: ProductsReasonsFilters[];
    data?: ProductsReasonsData;
};
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type ShipmentsRequest = {
    data_updates?: DataUpdates;
    identifier: string;
    products?: Products[];
    reasons?: ReasonsData;
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
    status?: string;
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
    force_transition?: boolean;
    task?: boolean;
};
type ShipmentsResponse = {
    final_state?: any;
    stack_trace?: string;
    identifier?: string;
    meta?: any;
    exception?: string;
    message?: string;
    status?: number;
    code?: string;
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
    updated_at: string;
    owner: string;
    meta?: AffiliateAppConfigMeta[];
    name: string;
    description?: string;
    secret: string;
    token: string;
    created_at: string;
    id: string;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryConfig = {
    payment?: AffiliateInventoryPaymentConfig;
    order?: AffiliateInventoryOrderConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    config?: AffiliateConfig;
    token: string;
    id: string;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    affiliate: Affiliate;
    store_lookup?: string;
    bag_end_state?: string;
    article_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    create_user?: boolean;
};
type OrderUser = {
    city: string;
    email: string;
    phone: number;
    country: string;
    state: string;
    pincode: string;
    first_name: string;
    address2?: string;
    last_name: string;
    mobile: number;
    address1?: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderPriority = {
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    item_id: number;
    item_size: string;
    seller_identifier: string;
    quantity: number;
    pdf_links?: MarketPlacePdf;
    modified_on: string;
    avl_qty: number;
    store_id: number;
    sku: string;
    identifier: any;
    _id: string;
    affiliate_store_id: string;
    discount: number;
    price_effective: number;
    price_marked: number;
    fynd_store_id: string;
    delivery_charge: number;
    company_id: number;
    unit_price: number;
    transfer_price: number;
    amount_paid: number;
    hsn_code_id: string;
    affiliate_meta: any;
};
type ArticleDetails1 = {
    _id: string;
    brand_id: number;
    dimension: any;
    quantity: number;
    category: any;
    weight: any;
    attributes: any;
};
type ShipmentDetails = {
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    shipments: number;
    meta?: any;
    fulfillment_id: number;
    dp_id?: number;
    box_type?: string;
};
type ShipmentConfig = {
    payment_mode: string;
    identifier: string;
    to_pincode: string;
    location_details?: LocationDetails;
    action: string;
    source: string;
    journey: string;
    shipment: ShipmentDetails[];
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    shipping_address: OrderUser;
    coupon?: string;
    payment?: any;
    user: UserData;
    discount: number;
    payment_mode: string;
    billing_address: OrderUser;
    order_priority?: OrderPriority;
    bags: AffiliateBag[];
    order_value: number;
    cod_charges: number;
    shipment?: ShipmentData;
    affiliate_order_id?: string;
    items: any;
    delivery_charges: number;
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
    success?: boolean;
    message?: string;
};
type ActionInfo = {
    slug: string;
    display_text: string;
    id: number;
    description: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    bag_id?: number;
    user: string;
    ticket_url?: string;
    createdat: string;
    l2_detail?: string;
    message: string;
    l3_detail?: string;
    type: string;
    l1_detail?: string;
    ticket_id?: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type PostHistoryFilters = {
    line_number?: string;
    identifier?: string;
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
type SmsDataPayload = {
    shipment_id: number;
    amount_paid: number;
    customer_name: string;
    order_id: string;
    payment_mode: string;
    brand_name: string;
    message: string;
    country_code: string;
    phone_number: number;
};
type SendSmsPayload = {
    slug: string;
    bag_id: number;
    data?: SmsDataPayload;
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
};
type Meta1 = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    remarks?: string;
    shipment_id?: string;
    meta: Meta1;
    status?: string;
    bag_list?: number[];
    id: number;
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
    shipment_ids?: string[];
    order_type: string;
    dp_id: number;
    qc_required: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type Tax = {
    amount: any;
    name: string;
    rate: number;
    breakup?: any[];
};
type Charge = {
    amount: any;
    tax?: Tax;
    name: string;
    code?: string;
    type: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    dispatch_after_date?: string;
    pack_by_date?: string;
    dispatch_by_date?: string;
    customer_pickup_slot?: any;
    dp_pickup_slot?: any;
};
type LineItem = {
    seller_identifier: string;
    quantity?: number;
    charges?: Charge[];
    custom_messasge?: string;
    meta?: any;
    external_line_id?: string;
};
type Shipment = {
    location_id: number;
    priority?: number;
    external_shipment_id?: string;
    meta?: any;
    processing_dates?: ProcessingDates;
    line_items: LineItem[];
};
type BillingInfo = {
    middle_name?: string;
    external_customer_code?: string;
    primary_mobile_number: string;
    city: string;
    country: string;
    alternate_mobile_number?: string;
    pincode: string;
    country_code?: string;
    address2?: string;
    floor_no?: string;
    state_code?: string;
    primary_email: string;
    state: string;
    first_name: string;
    house_no?: string;
    title?: string;
    customer_code?: string;
    alternate_email?: string;
    gender?: string;
    last_name?: string;
    address1: string;
};
type ShippingInfo = {
    middle_name?: string;
    external_customer_code?: string;
    primary_mobile_number: string;
    shipping_type?: string;
    geo_location?: any;
    city: string;
    country: string;
    alternate_mobile_number?: string;
    pincode: string;
    country_code?: string;
    address2?: string;
    landmark?: string;
    floor_no?: string;
    state_code?: string;
    primary_email: string;
    state: string;
    first_name: string;
    house_no?: string;
    title?: string;
    customer_code?: string;
    address_type?: string;
    alternate_email?: string;
    gender?: string;
    last_name?: string;
    slot?: any[];
    address1: string;
};
type PaymentMethod = {
    amount: number;
    transaction_data?: any;
    collect_by: string;
    meta?: any;
    name: string;
    refund_by: string;
    mode: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type CreateOrderAPI = {
    tax_info?: TaxInfo;
    charges?: Charge[];
    shipments: Shipment[];
    billing_info: BillingInfo;
    external_creation_date?: string;
    shipping_info: ShippingInfo;
    meta?: any;
    currency_info?: any;
    external_order_id?: string;
    payment_info: PaymentInfo;
};
type CreateOrderErrorReponse = {
    request_id?: string;
    stack_trace?: string;
    meta?: string;
    exception?: string;
    message: string;
    status: number;
    code?: string;
    info?: any;
};
type DpConfiguration = {
    shipping_by?: string;
};
type PaymentMethods = {
    refund_by?: string;
    collect_by?: string;
    mode?: string;
};
type CreateChannelPaymentInfo = {
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
    source?: string;
};
type CreateChannelConfig = {
    shipment_assignment?: string;
    location_reassignment?: boolean;
    lock_states?: string[];
    dp_configuration?: DpConfiguration;
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
};
type CreateChannelConfigResponse = {
    is_inserted?: boolean;
    acknowledged?: boolean;
    is_upserted?: boolean;
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
    order_details?: FyndOrderIdList[];
    end_date: string;
    start_date: string;
    mobile: number;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsData = {
    app_id?: string;
    result?: any;
    words?: string[];
    is_active?: boolean;
    _custom_json?: any;
    uid?: string;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    app_id?: string;
    result: SearchKeywordResult;
    words?: string[];
    is_active?: boolean;
    _custom_json?: any;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    app_id?: string;
    words?: string[];
    _custom_json?: any;
    uid?: string;
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type Media = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type AutocompletePageAction = {
    query?: any;
    params?: any;
    type?: string;
    url?: string;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type AutocompleteResult = {
    logo?: Media;
    action?: AutocompleteAction;
    _custom_json?: any;
    display?: string;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    words?: string[];
    is_active?: boolean;
    _custom_json?: any;
    results?: AutocompleteResult[];
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    _custom_json?: any;
    app_id?: string;
    words?: string[];
};
type ProductBundleItem = {
    product_uid: number;
    min_quantity: number;
    max_quantity: number;
    allow_remove?: boolean;
    auto_add_to_cart?: boolean;
    auto_select?: boolean;
};
type ProductBundleRequest = {
    same_store_assignment?: boolean;
    choice: string;
    modified_by?: any;
    name: string;
    modified_on?: string;
    products: ProductBundleItem[];
    is_active: boolean;
    page_visibility?: string[];
    company_id?: number;
    created_on?: string;
    logo?: string;
    created_by?: any;
    slug: string;
    meta?: any;
};
type GetProductBundleCreateResponse = {
    same_store_assignment?: boolean;
    choice: string;
    modified_by?: any;
    id?: string;
    name: string;
    modified_on?: string;
    products: ProductBundleItem[];
    is_active: boolean;
    page_visibility?: string[];
    company_id?: number;
    created_on?: string;
    logo?: string;
    created_by?: any;
    slug: string;
    meta?: any;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type LimitedProductData = {
    price?: any;
    name?: string;
    images?: string[];
    uid?: number;
    country_of_origin?: string;
    identifier?: any;
    attributes?: any;
    short_description?: string;
    item_code?: string;
    slug?: string;
    quantity?: number;
    sizes?: string[];
};
type Price = {
    min_effective?: number;
    currency?: string;
    max_effective?: number;
    min_marked?: number;
    max_marked?: number;
};
type Size = {
    is_available?: boolean;
    quantity?: number;
    value?: string;
    display?: string;
};
type GetProducts = {
    product_details?: LimitedProductData;
    product_uid?: number;
    price?: Price;
    allow_remove?: boolean;
    max_quantity?: number;
    min_quantity?: number;
    auto_add_to_cart?: boolean;
    sizes?: Size[];
    auto_select?: boolean;
};
type GetProductBundleResponse = {
    logo?: string;
    same_store_assignment?: boolean;
    choice?: string;
    name?: string;
    products?: GetProducts[];
    is_active?: boolean;
    page_visibility?: string[];
    company_id?: number;
    slug?: string;
    meta?: any;
};
type ProductBundleUpdateRequest = {
    same_store_assignment?: boolean;
    choice: string;
    modified_by?: any;
    name: string;
    modified_on?: string;
    products: ProductBundleItem[];
    is_active: boolean;
    page_visibility?: string[];
    company_id?: number;
    logo?: string;
    slug: string;
    meta?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    description?: string;
    image?: string;
    title: string;
    modified_by?: any;
    id?: string;
    name: string;
    guide?: Guide;
    modified_on?: string;
    tag?: string;
    created_on?: string;
    company_id?: number;
    subtitle?: string;
    created_by?: any;
    active?: boolean;
    brand_id?: number;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    modified_by?: any;
    title?: string;
    id?: string;
    name?: string;
    modified_on?: string;
    guide?: any;
    tag?: string;
    subtitle?: string;
    created_on?: string;
    company_id?: number;
    created_by?: any;
    active?: boolean;
    brand_id?: number;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    is_gift?: boolean;
    alt_text?: any;
    is_cod?: boolean;
    moq?: MOQData;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemMOQ = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type ApplicationItemMeta = {
    seo?: ApplicationItemSEO;
    is_gift?: boolean;
    _custom_json?: any;
    is_cod?: boolean;
    _custom_meta?: MetaFields[];
    alt_text?: any;
    moq?: ApplicationItemMOQ;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type GetConfigMetadataResponse = {
    values?: any[];
    data: any[];
    condition?: any[];
};
type AttributeDetailsGroup = {
    unit?: string;
    name: string;
    is_active: boolean;
    key?: string;
    logo?: string;
    slug?: string;
    display_type: string;
    priority: number;
};
type AppConfigurationDetail = {
    template_slugs?: string[];
    app_id: string;
    name?: string;
    is_default: boolean;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    logo?: string;
    slug: string;
    priority: number;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    next: number;
    total_count: number;
    has_next: boolean;
    current: number;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    app_id: string;
    default_key: string;
    name?: string;
    is_default: boolean;
    is_active: boolean;
    key: string;
    logo?: string;
    priority: number;
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
    variant?: any;
    compare?: any;
    detail?: any;
    similar?: any;
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
    map_values?: any[];
    value?: string;
    condition?: string;
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    type: string;
    value_config?: ConfigurationListingFilterValue;
    name?: string;
    display_name?: string;
    is_active: boolean;
    key: string;
    logo?: string;
    priority: number;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    name?: string;
    is_active: boolean;
    key: string;
    logo?: string;
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
    min: number;
    max: number;
};
type ConfigurationProductVariantConfig = {
    name: string;
    size: ProductSize;
    is_active: boolean;
    key: string;
    logo?: string;
    display_type: string;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    title?: string;
    size?: ProductSize;
    is_active: boolean;
    key: string;
    logo?: string;
    subtitle?: string;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppConfiguration = {
    listing?: ConfigurationListing;
    type?: string;
    app_id: string;
    modified_by?: any;
    modified_on?: string;
    created_on?: string;
    config_id?: string;
    created_by?: any;
    product?: ConfigurationProduct;
    config_type: string;
};
type AppCatalogConfiguration = {
    listing?: ConfigurationListing;
    type?: string;
    app_id: string;
    modified_by?: any;
    id?: string;
    modified_on?: string;
    created_on?: string;
    config_id?: string;
    created_by?: any;
    product?: ConfigurationProduct;
    config_type: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    app_id: string;
    id?: string;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_type: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersValue = {
    selected_min?: number;
    is_selected: boolean;
    currency_symbol?: string;
    count?: number;
    currency_code?: string;
    query_format?: string;
    display: string;
    min?: number;
    selected_max?: number;
    display_format?: string;
    max?: number;
    value: any;
};
type ProductFiltersKey = {
    operators?: string[];
    kind?: string;
    name: string;
    display: string;
    logo?: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type ProductSortOn = {
    name?: string;
    is_selected?: boolean;
    value?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    operators: any;
    sort_on?: ProductSortOn[];
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type UserInfo = {
    email?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type CollectionSchedule = {
    end?: string;
    cron?: string;
    duration?: number;
    next_schedule?: NextSchedule[];
    start?: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type SeoDetail = {
    description?: string;
    title?: string;
};
type CreateCollection = {
    type: string;
    tags?: string[];
    allow_facets?: boolean;
    badge?: CollectionBadge;
    logo: CollectionImage;
    created_by?: UserInfo;
    published?: boolean;
    _schedule?: CollectionSchedule;
    banners: CollectionBanner;
    description?: string;
    sort_on?: string;
    app_id: string;
    query?: CollectionQuery[];
    is_active?: boolean;
    _custom_json?: any;
    _locale_language?: any;
    slug: string;
    allow_sort?: boolean;
    meta?: any;
    priority?: number;
    is_visible?: boolean;
    modified_by?: UserInfo;
    seo?: SeoDetail;
    name: string;
    visible_facets_keys?: string[];
};
type BannerImage = {
    aspect_ratio?: string;
    type?: string;
    url?: string;
};
type ImageUrls = {
    portrait?: BannerImage;
    landscape?: BannerImage;
};
type CollectionCreateResponse = {
    type?: string;
    allow_facets?: boolean;
    badge?: any;
    logo?: BannerImage;
    tag?: string[];
    _schedule?: any;
    banners?: ImageUrls;
    description?: string;
    app_id?: string;
    cron?: any;
    sort_on?: string;
    query?: CollectionQuery[];
    is_active?: boolean;
    slug?: string;
    allow_sort?: boolean;
    meta?: any;
    priority?: number;
    name?: string;
    visible_facets_keys?: string[];
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
type Media1 = {
    type?: string;
    meta?: any;
    url: string;
};
type GetCollectionDetailNest = {
    type?: string;
    allow_facets?: boolean;
    badge?: any;
    logo?: Media1;
    tag?: string[];
    _schedule?: any;
    banners?: ImageUrls;
    description?: string;
    app_id?: string;
    cron?: any;
    query?: CollectionQuery[];
    is_active?: boolean;
    uid?: string;
    slug?: string;
    allow_sort?: boolean;
    meta?: any;
    priority?: number;
    action?: Action;
    name?: string;
    visible_facets_keys?: string[];
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionDetailResponse = {
    type?: string;
    allow_facets?: boolean;
    badge?: any;
    logo?: Media1;
    tag?: string[];
    _schedule?: any;
    banners?: ImageUrls;
    description?: string;
    app_id?: string;
    cron?: any;
    query?: CollectionQuery[];
    is_active?: boolean;
    uid?: string;
    slug?: string;
    allow_sort?: boolean;
    meta?: any;
    priority?: number;
    name?: string;
    visible_facets_keys?: string[];
};
type UpdateCollection = {
    type?: string;
    tags?: string[];
    allow_facets?: boolean;
    badge?: CollectionBadge;
    logo?: CollectionImage;
    published?: boolean;
    _schedule?: CollectionSchedule;
    banners?: CollectionBanner;
    description?: string;
    sort_on?: string;
    query?: CollectionQuery[];
    is_active?: boolean;
    _custom_json?: any;
    _locale_language?: any;
    slug?: string;
    allow_sort?: boolean;
    meta?: any;
    priority?: number;
    is_visible?: boolean;
    modified_by?: UserInfo;
    seo?: SeoDetail;
    name?: string;
    visible_facets_keys?: string[];
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    item?: ItemQueryForUserCollection[];
    type?: string;
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type ProductBrand = {
    logo?: Media1;
    action?: Action;
    name?: string;
    uid?: number;
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
type Price1 = {
    min?: number;
    currency_code?: string;
    max?: number;
    currency_symbol?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    product_online_date?: string;
    type?: string;
    brand?: ProductBrand;
    promo_meta?: any;
    rating_count?: number;
    attributes?: any;
    rating?: number;
    similars?: string[];
    discount?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    medias?: Media1[];
    image_nature?: string;
    short_description?: string;
    has_variant?: boolean;
    description?: string;
    tryouts?: string[];
    item_type?: string;
    price?: ProductListingPrice;
    uid?: number;
    slug: string;
    teaser_tag?: any;
    color?: string;
    name?: string;
    highlights?: string[];
    item_code?: string;
    sellable?: boolean;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    page?: Page;
};
type CatalogInsightItem = {
    out_of_stock_count?: number;
    sellable_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    available_articles?: number;
    name?: string;
    available_sizes?: number;
    total_articles?: number;
    article_freshness?: number;
    total_sizes?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    store_ids?: number[];
    platform?: string;
    enabled?: boolean;
    opt_level: string;
    company_id?: number;
    brand_ids?: number[];
};
type CompanyOptIn = {
    store_ids: number[];
    modified_by?: any;
    platform: string;
    modified_on: number;
    enabled: boolean;
    opt_level: string;
    created_on: number;
    company_id: number;
    brand_ids: number[];
    created_by?: any;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    business_type?: string;
    uid?: number;
    company_type?: string;
    name?: string;
};
type CompanyBrandDetail = {
    company_id?: number;
    total_article?: number;
    brand_name?: string;
    brand_id?: number;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    company?: string;
    store?: number;
    brand?: number;
};
type StoreDetail = {
    manager?: any;
    address?: any;
    name?: string;
    modified_on?: string;
    display_name?: string;
    additional_contacts?: any[];
    uid?: number;
    store_type?: string;
    timing?: any;
    created_on?: string;
    company_id?: number;
    store_code?: string;
    documents?: any[];
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    format?: string;
    type: string;
    allowed_values?: string[];
    multi?: boolean;
    mandatory?: boolean;
    range?: AttributeSchemaRange;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    priority?: number;
    indexing: boolean;
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
type GenderDetail = {
    description?: string;
    schema?: AttributeMaster;
    filters?: AttributeMasterFilter;
    id?: string;
    name?: string;
    is_nested?: boolean;
    enabled_for_end_consumer?: boolean;
    details?: AttributeMasterDetails;
    logo?: string;
    departments?: string[];
    slug?: string;
    meta?: AttributeMasterMeta;
};
type CategoriesResponse = {
    slug_key?: string;
    uid?: number;
    template_slug?: string;
    name?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: CategoriesResponse[];
    page?: Page;
};
type PTErrorResponse = {
    errors?: any;
    code?: string;
    status?: number;
    message?: string;
    meta?: any;
};
type DepartmentCreateUpdate = {
    name: string;
    platforms?: any;
    synonyms?: string[];
    tags?: string[];
    is_active?: boolean;
    uid?: number;
    priority_order: number;
    _custom_json?: any;
    _cls?: string;
    logo: string;
    slug?: string;
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    contact?: string;
    _id?: string;
    username?: string;
    user_id?: string;
    uid?: string;
};
type GetDepartment = {
    page_no?: number;
    page_size?: number;
    search?: string;
    modified_by?: UserSerializer;
    item_type?: string;
    name?: string;
    synonyms?: string[];
    modified_on?: string;
    is_active?: boolean;
    uid?: number;
    priority_order?: number;
    created_on?: string;
    logo?: string;
    created_by?: UserSerializer;
    slug?: string;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    errors?: any;
    code?: string;
    status?: number;
    message?: string;
    meta?: any;
};
type UserDetail = {
    user_id: string;
    super_user?: boolean;
    contact?: string;
    username: string;
};
type DepartmentModel = {
    modified_by?: UserDetail;
    _id?: any;
    name: any;
    synonyms?: any[];
    modified_on: string;
    verified_on?: string;
    is_active?: boolean;
    uid?: number;
    priority_order: number;
    verified_by?: UserDetail;
    created_on: string;
    _custom_json?: any;
    _cls?: any;
    logo: string;
    created_by?: UserDetail;
    slug?: any;
};
type ProductTemplate = {
    description?: string;
    modified_by?: any;
    name?: string;
    categories?: string[];
    is_archived?: boolean;
    is_physical: boolean;
    modified_on?: string;
    tag?: string;
    is_active?: boolean;
    is_expirable: boolean;
    created_on?: string;
    attributes?: string[];
    logo?: string;
    created_by?: any;
    departments?: string[];
    slug: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    custom_order?: any;
    product_publish?: any;
    tags?: any;
    is_dependent?: any;
    no_of_boxes?: any;
    short_description?: any;
    description?: any;
    item_type?: any;
    category_slug?: any;
    multi_size?: any;
    currency?: any;
    is_active?: any;
    trader?: any;
    slug?: any;
    command?: any;
    sizes?: any;
    product_group_tag?: any;
    size_guide?: any;
    trader_type?: any;
    teaser_tag?: any;
    name?: any;
    country_of_origin?: any;
    highlights?: any;
    media?: any;
    hsn_code?: any;
    item_code?: any;
    variants?: any;
    return_config?: any;
    brand_uid?: any;
};
type GlobalValidation = {
    description?: string;
    definitions?: any;
    type?: string;
    required?: string[];
    title?: string;
    properties?: Properties;
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    description?: string;
    id?: string;
    name?: string;
    categories?: string[];
    is_archived?: boolean;
    is_physical: boolean;
    tag?: string;
    is_active?: boolean;
    is_expirable: boolean;
    attributes?: string[];
    logo?: string;
    departments?: string[];
    slug: string;
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
type UserInfo1 = {
    email?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type ProductTemplateExportResponse = {
    filters?: any;
    type?: string;
    task_id: string;
    url?: string;
    status?: string;
    modified_on?: string;
    seller_id: number;
    created_by?: UserInfo1;
    completed_on?: string;
    notification_emails?: string[];
};
type ProductDownloadsResponse = {
    items?: ProductTemplateExportResponse[];
};
type ProductTemplateExportFilterRequest = {
    brands?: string[];
    from_date?: string;
    to_date?: string;
    catalogue_types: string[];
    templates: string[];
};
type ProductTemplateDownloadsExport = {
    filters?: ProductTemplateExportFilterRequest;
    type?: string;
    notification_emails?: string[];
};
type ProductPartialExportRequest = {
    status?: any;
    notification_emails?: string[];
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
    l1: number;
    department: number;
    l2: number;
};
type Media2 = {
    logo: string;
    portrait: string;
    landscape: string;
};
type CategoryRequestBody = {
    marketplaces?: CategoryMapping;
    tryouts?: string[];
    name: string;
    hierarchy?: Hierarchy[];
    is_active: boolean;
    media?: Media2;
    synonyms?: string[];
    departments: number[];
    slug?: string;
    priority?: number;
    level: number;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type Category = {
    marketplaces?: CategoryMapping;
    tryouts?: string[];
    modified_by?: any;
    id?: string;
    name: string;
    hierarchy?: Hierarchy[];
    modified_on?: string;
    is_active: boolean;
    uid?: number;
    media?: Media2;
    created_on?: string;
    synonyms?: string[];
    created_by?: any;
    departments: number[];
    slug?: string;
    priority?: number;
    level: number;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TaxIdentifier = {
    reporting_hsn?: string;
    hsn_code_id?: string;
    hsn_code?: string;
};
type Trader = {
    address?: string[];
    type?: string;
    name: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductCreateUpdateSchemaV2 = {
    change_request_id?: any;
    custom_order?: CustomOrder;
    is_set?: boolean;
    product_publish?: ProductPublish;
    tags?: string[];
    attributes?: any;
    is_dependent?: boolean;
    bulk_job_id?: string;
    net_quantity?: NetQuantity;
    no_of_boxes?: number;
    requester?: string;
    tax_identifier: TaxIdentifier;
    departments: number[];
    short_description?: string;
    description?: string;
    variant_group?: any;
    item_type: string;
    template_tag: string;
    category_slug: string;
    multi_size?: boolean;
    currency: string;
    is_active?: boolean;
    trader: Trader[];
    _custom_json?: any;
    uid?: number;
    company_id: number;
    slug: string;
    sizes: any[];
    product_group_tag?: string[];
    is_image_less_product?: boolean;
    size_guide?: string;
    teaser_tag?: TeaserTag;
    action?: string;
    name: string;
    highlights?: string[];
    country_of_origin: string;
    media?: Media1[];
    variant_media?: any;
    item_code: string;
    variants?: any;
    return_config: ReturnConfig;
    brand_uid: number;
};
type Logo = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
    secure_url?: string;
};
type ProductPublish1 = {
    product_online_date?: string;
    is_set?: boolean;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Image = {
    aspect_ratio?: string;
    aspect_ratio_f?: number;
    url?: string;
    secure_url?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ReturnConfigResponse = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type ProductSchemaV2 = {
    custom_order?: any;
    brand?: Brand;
    is_set?: boolean;
    id?: string;
    variants?: any;
    product_publish?: ProductPublish1;
    tags?: string[];
    is_expirable?: boolean;
    attributes?: any;
    created_by?: any;
    is_dependent?: boolean;
    net_quantity?: NetQuantityResponse;
    all_sizes?: any[];
    no_of_boxes?: number;
    tax_identifier?: any;
    image_nature?: string;
    l3_mapping?: string[];
    modified_on?: string;
    short_description?: string;
    stage?: string;
    category_uid?: number;
    description?: string;
    variant_group?: any;
    all_company_ids?: number[];
    item_type?: string;
    template_tag?: string;
    category_slug?: string;
    is_physical?: boolean;
    all_identifiers?: string[];
    multi_size?: boolean;
    currency?: string;
    is_active?: boolean;
    _custom_json?: any;
    uid?: number;
    trader?: Trader[];
    created_on?: string;
    company_id?: number;
    slug?: string;
    sizes?: any[];
    primary_color?: string;
    product_group_tag?: string[];
    is_image_less_product?: boolean;
    size_guide?: string;
    teaser_tag?: any;
    modified_by?: any;
    pending?: string;
    color?: string;
    name?: string;
    images?: Image[];
    moq?: any;
    verified_on?: string;
    category?: any;
    country_of_origin?: string;
    highlights?: string[];
    media?: Media1[];
    variant_media?: any;
    hsn_code?: string;
    verified_by?: VerifiedBy;
    item_code?: string;
    departments?: number[];
    return_config?: ReturnConfigResponse;
    brand_uid?: number;
};
type ProductListingResponseV2 = {
    items?: ProductSchemaV2[];
    page?: Page;
};
type ProductVariants = {
    category_uid?: number;
    name?: string;
    uid?: number;
    media?: Media1[];
    item_code?: string;
    brand_uid?: number;
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    is_nested?: boolean;
    tags?: string[];
    raw_key?: string;
    logo?: string;
    created_by?: any;
    suggestion?: string;
    schema: AttributeMaster;
    enabled_for_end_consumer?: boolean;
    modified_on?: string;
    description?: string;
    unit?: string;
    created_on?: string;
    slug: string;
    filters: AttributeMasterFilter;
    modified_by?: any;
    name?: string;
    details: AttributeMasterDetails;
    variant?: boolean;
    synonyms?: any;
    departments: string[];
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
    item_length: number;
    identifiers?: ValidateIdentifier[];
    size: any;
    item_weight_unit_of_measure: any;
    item_width: number;
    item_height: number;
    item_dimensions_unit_of_measure: string;
    item_weight: number;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Product = {
    custom_order?: any;
    brand?: Brand;
    is_set?: boolean;
    id?: string;
    variants?: any;
    product_publish?: ProductPublished;
    tags?: string[];
    is_expirable?: boolean;
    attributes?: any;
    created_by?: any;
    is_dependent?: boolean;
    net_quantity?: NetQuantityResponse;
    all_sizes?: any[];
    no_of_boxes?: number;
    tax_identifier?: any;
    image_nature?: string;
    l3_mapping?: string[];
    modified_on?: string;
    short_description?: string;
    stage?: string;
    category_uid?: number;
    description?: string;
    variant_group?: any;
    all_company_ids?: number[];
    item_type?: string;
    template_tag?: string;
    category_slug?: string;
    is_physical?: boolean;
    all_identifiers?: string[];
    multi_size?: boolean;
    currency?: string;
    is_active?: boolean;
    _custom_json?: any;
    uid?: number;
    trader?: Trader[];
    created_on?: string;
    company_id?: number;
    slug?: string;
    sizes?: any[];
    primary_color?: string;
    product_group_tag?: string[];
    is_image_less_product?: boolean;
    size_guide?: string;
    teaser_tag?: any;
    modified_by?: any;
    pending?: string;
    color?: string;
    name?: string;
    images?: Image[];
    moq?: any;
    verified_on?: string;
    category?: any;
    country_of_origin?: string;
    highlights?: string[];
    media?: Media1[];
    variant_media?: any;
    hsn_code?: string;
    verified_by?: VerifiedBy;
    item_code?: string;
    departments?: number[];
    return_config?: ReturnConfigResponse;
    brand_uid?: number;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type BulkJob = {
    tracking_url?: string;
    failed?: number;
    succeed?: number;
    custom_template_tag?: string;
    modified_by?: UserInfo1;
    cancelled_records?: any[];
    template_tag?: string;
    cancelled?: number;
    modified_on?: string;
    total?: number;
    is_active?: boolean;
    stage?: string;
    created_on: string;
    file_path?: string;
    company_id: number;
    created_by?: UserInfo1;
    failed_records?: any[];
};
type BulkResponse = {
    modified_by?: UserInfo1;
    batch_id: string;
    modified_on?: string;
    is_active?: boolean;
    created_on: string;
    created_by?: UserInfo1;
};
type UserDetail1 = {
    user_id?: string;
    full_name?: string;
    username?: string;
};
type ProductBulkRequest = {
    failed?: number;
    succeed?: number;
    template_tag?: string;
    cancelled_records?: string[];
    modified_by?: UserDetail1;
    cancelled?: number;
    template?: ProductTemplate;
    modified_on?: string;
    total?: number;
    is_active?: boolean;
    company_id?: number;
    created_on?: string;
    file_path?: string;
    stage?: string;
    created_by?: UserDetail1;
    failed_records?: string[];
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    company_id: number;
    data: any[];
    batch_id: string;
    template_tag: string;
};
type ProductTagsViewResponse = {
    items?: string[];
};
type ProductBulkAssets = {
    company_id?: number;
    user: any;
    url: string;
};
type UserCommon = {
    user_id?: string;
    company_id?: number;
    username?: string;
};
type Items = {
    tracking_url?: string;
    failed?: number;
    succeed?: number;
    modified_by?: UserCommon;
    cancelled_records?: string[];
    id?: string;
    cancelled?: number;
    modified_on?: string;
    total?: number;
    is_active?: boolean;
    company_id?: number;
    created_on?: string;
    retry?: number;
    file_path?: string;
    stage?: string;
    created_by?: UserCommon;
    failed_records?: string[];
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductSizeDeleteDataResponse = {
    company_id?: number;
    size?: string;
    item_id?: number;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
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
    item_length?: number;
    is_set?: boolean;
    price?: number;
    identifiers: GTIN[];
    size: any;
    item_weight_unit_of_measure?: string;
    price_transfer?: number;
    item_width?: number;
    set?: InventorySet;
    price_effective: number;
    item_height?: number;
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    currency: string;
    store_code: string;
    item_weight?: number;
    quantity: number;
};
type ItemQuery = {
    item_code?: string;
    uid?: number;
    brand_uid?: number;
};
type InventoryRequest = {
    company_id: number;
    sizes: InvSize[];
    item: ItemQuery;
};
type InventoryResponse = {
    price?: number;
    store?: any;
    identifiers?: any;
    size?: string;
    item_id?: number;
    sellable_quantity?: number;
    currency?: string;
    price_transfer?: number;
    seller_identifier?: string;
    price_effective?: number;
    uid?: string;
    inventory_updated_on?: string;
    quantity?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type BrandMeta = {
    id: number;
    name: string;
};
type WeightResponse = {
    unit: string;
    shipping: number;
    is_default: boolean;
};
type CompanyMeta = {
    id: number;
};
type DimensionResponse = {
    width: number;
    unit: string;
    is_default: boolean;
    height: number;
    length: number;
};
type PriceMeta = {
    transfer: number;
    currency: string;
    tp_notes?: any;
    marked: number;
    updated_at?: string;
    effective: number;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
    not_available?: QuantityBase;
    damaged?: QuantityBase;
};
type Trader1 = {
    address: string[];
    type: string;
    name: string;
};
type ReturnConfig1 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type InventorySellerResponse = {
    brand: BrandMeta;
    is_set?: boolean;
    tags?: string[];
    created_by?: UserSerializer;
    fynd_meta?: any;
    fragile: boolean;
    trace_id?: string;
    tax_identifier?: any;
    weight: WeightResponse;
    item_id: number;
    set?: InventorySet;
    company: CompanyMeta;
    dimension: DimensionResponse;
    identifier: any;
    stage?: string;
    store: StoreMeta;
    fynd_article_code: string;
    raw_meta?: any;
    price: PriceMeta;
    manufacturer: ManufacturerResponse;
    quantities?: Quantities;
    seller_identifier: string;
    uid: string;
    added_on_store?: string;
    is_active?: boolean;
    trader?: Trader1[];
    _custom_json?: any;
    expiration_date?: string;
    meta?: any;
    fynd_item_code: string;
    total_quantity: number;
    modified_by?: UserSerializer;
    size: string;
    country_of_origin: string;
    track_inventory?: boolean;
    return_config?: ReturnConfig1;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type CompanyMeta1 = {
    id?: number;
};
type DimensionResponse1 = {
    unit?: string;
    width?: number;
    height?: number;
    length?: number;
};
type ArticleStoreResponse = {
    name?: string;
    store_type?: string;
    store_code?: string;
    uid?: number;
};
type PriceArticle = {
    transfer?: number;
    currency?: string;
    tp_notes?: any;
    marked?: number;
    effective?: number;
};
type ManufacturerResponse1 = {
    address?: string;
    name?: string;
    is_default?: boolean;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    order_committed?: Quantity;
    sellable?: Quantity;
    not_available?: Quantity;
    damaged?: Quantity;
};
type Trader2 = {
    address?: string[];
    type?: string;
    name?: string;
};
type ReturnConfig2 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type GetInventories = {
    brand?: BrandMeta1;
    is_set?: boolean;
    id?: string;
    date_meta?: DateMeta;
    tags?: string[];
    created_by?: UserSerializer;
    trace_id?: string;
    tax_identifier?: any;
    weight?: WeightResponse1;
    item_id?: number;
    company?: CompanyMeta1;
    dimension?: DimensionResponse1;
    identifier?: any;
    stage?: string;
    store?: ArticleStoreResponse;
    price?: PriceArticle;
    manufacturer?: ManufacturerResponse1;
    quantities?: QuantitiesArticle;
    seller_identifier?: string;
    trader?: Trader2[];
    uid?: string;
    expiration_date?: string;
    inventory_updated_on?: string;
    total_quantity?: number;
    modified_by?: UserSerializer;
    platforms?: any;
    size?: string;
    country_of_origin?: string;
    track_inventory?: boolean;
    return_config?: ReturnConfig2;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    failed?: number;
    succeed?: number;
    modified_by?: any;
    cancelled_records?: string[];
    id?: string;
    cancelled?: number;
    modified_on?: string;
    total?: number;
    is_active?: boolean;
    stage?: string;
    created_on?: string;
    file_path?: string;
    company_id?: number;
    created_by?: any;
    failed_records?: string[];
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    price_marked?: number;
    total_quantity?: number;
    price?: number;
    item_weight_unit_of_measure?: string;
    currency?: string;
    tags?: string[];
    seller_identifier: string;
    price_effective?: number;
    item_dimensions_unit_of_measure?: string;
    expiration_date?: string;
    store_code: string;
    quantity?: number;
    trace_id?: string;
};
type InventoryBulkRequest = {
    company_id: number;
    user?: any;
    sizes: InventoryJobPayload[];
    batch_id: string;
};
type InventoryExportRequest = {
    type?: string;
    store?: number[];
    brand?: number[];
};
type InventoryExportResponse = {
    filters?: any;
    type?: string;
    task_id: string;
    status?: string;
    modified_on?: string;
    created_on?: string;
    seller_id: number;
    created_by?: string;
    notification_emails?: string[];
};
type InventoryExportQuantityFilter = {
    min?: number;
    max?: number;
    operators: string;
};
type InventoryExportAdvanceOption = {
    from_date?: string;
    store_ids?: number[];
    to_date?: string;
    brand_ids?: number[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryExportJob = {
    filters?: InventoryExportAdvanceOption;
    type: string;
    task_id: string;
    url?: string;
    status?: string;
    seller_id: number;
    completed_on?: string;
    notification_emails?: string[];
};
type InventoryExportFilter = {
    from_date?: string;
    store_ids: number[];
    to_date?: string;
    brand_ids?: number[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryCreateRequest = {
    filters: InventoryExportFilter;
    type?: string;
    notification_emails?: string[];
    data?: string[];
};
type InventoryJobFilters = {
    brands?: string[];
    from_date?: string;
    stores?: string[];
    to_date?: string;
    quantity?: InventoryExportQuantityFilter;
};
type InventoryJobDetailResponse = {
    filters: InventoryJobFilters;
    type?: string;
    task_id: string;
    url: string;
    id: string;
    status?: any;
    modified_on?: string;
    cancelled_by?: UserDetail;
    created_on?: string;
    seller_id: number;
    created_by?: UserDetail;
    cancelled_on?: string;
    completed_on?: string;
    notification_emails?: string[];
};
type InventoryExportJobListResponse = {
    items: InventoryJobDetailResponse;
};
type InventoryPartialExportRequest = {
    status?: any;
    notification_emails?: string[];
};
type InventoryExportCreateFilters = {
    from_date?: string;
    store_ids?: number[];
    to_date?: string;
    brand_ids?: number[];
    quantity?: InventoryExportQuantityFilter;
};
type InventoryExportCreateResponse = {
    filters: InventoryExportCreateFilters;
    type?: string;
    task_id: string;
    url: string;
    id: string;
    status?: any;
    modified_on?: string;
    cancelled_by?: UserDetail;
    created_on?: string;
    seller_id: number;
    created_by?: UserDetail;
    cancelled_on?: string;
    completed_on?: string;
    notification_emails?: string[];
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
    price_marked?: number;
    total_quantity?: number;
    tags?: string[];
    seller_identifier: string;
    price_effective?: number;
    expiration_date?: string;
    store_id: number;
    trace_id?: string;
};
type InventoryRequestSchemaV2 = {
    company_id: number;
    meta?: any;
    payload?: InventoryPayload[];
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
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    threshold2?: number;
    id?: string;
    tax2?: number;
    hs2_code?: string;
    modified_on?: string;
    threshold1?: number;
    tax1?: number;
    tax_on_esp?: boolean;
    hsn_code?: string;
    company_id?: number;
    tax_on_mrp?: boolean;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    threshold2?: number;
    tax2?: number;
    hs2_code: string;
    threshold1: number;
    is_active?: boolean;
    uid?: number;
    tax1: number;
    tax_on_esp?: boolean;
    hsn_code: string;
    company_id: number;
    tax_on_mrp: boolean;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    rate: number;
    cess?: number;
    effective_date: string;
    threshold: number;
};
type HSNDataInsertV2 = {
    description: string;
    type: string;
    modified_by?: any;
    taxes: TaxSlab[];
    hsn_code_id?: string;
    modified_on?: string;
    reporting_hsn: string;
    created_on?: string;
    hsn_code: string;
    created_by?: any;
    country_code: string;
};
type PageResponse = {
    has_next?: boolean;
    size?: number;
    current?: string;
    has_previous?: boolean;
    item_total?: number;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    action?: Action;
    name?: string;
    uid?: number;
    slug?: string;
    logo?: Media;
    departments?: string[];
    banners?: ImageUrls;
    discount?: string;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    name?: string;
    uid?: number;
    priority_order?: number;
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
    action?: Action;
    name?: string;
    _custom_json?: any;
    uid?: number;
    slug?: string;
    banners?: ImageUrls;
    childs?: any[];
};
type SecondLevelChild = {
    action?: Action;
    name?: string;
    _custom_json?: any;
    uid?: number;
    slug?: string;
    banners?: ImageUrls;
    childs?: ThirdLevelChild[];
};
type Child = {
    action?: Action;
    name?: string;
    _custom_json?: any;
    uid?: number;
    slug?: string;
    banners?: ImageUrls;
    childs?: SecondLevelChild[];
};
type CategoryItems = {
    action?: Action;
    name?: string;
    uid?: number;
    slug?: string;
    banners?: ImageUrls;
    childs?: Child[];
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
    filters?: ProductFilters[];
    operators?: any;
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    page: Page;
};
type ProductDetail = {
    product_online_date?: string;
    type?: string;
    brand?: ProductBrand;
    promo_meta?: any;
    rating_count?: number;
    attributes?: any;
    rating?: number;
    similars?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    medias?: Media1[];
    image_nature?: string;
    short_description?: string;
    has_variant?: boolean;
    description?: string;
    tryouts?: string[];
    item_type?: string;
    uid?: number;
    slug: string;
    teaser_tag?: any;
    color?: string;
    name?: string;
    highlights?: string[];
    item_code?: string;
};
type InventoryPage = {
    type: string;
    has_next?: boolean;
    has_previous?: boolean;
    next_id?: string;
    item_total: number;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type ArticleQuery = {
    ignored_stores?: number[];
    size: string;
    item_id: number;
};
type ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type AssignStoreArticle = {
    group_id?: string;
    query?: ArticleQuery;
    article_assignment?: ArticleAssignment;
    quantity?: number;
    meta?: any;
};
type AssignStore = {
    articles: AssignStoreArticle[];
    store_ids?: number[];
    app_id: string;
    channel_type?: string;
    channel_identifier?: string;
    company_id?: number;
    pincode: string;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    group_id?: string;
    price_marked?: number;
    store_pincode?: number;
    status: boolean;
    _id?: string;
    size: string;
    item_id: number;
    uid?: string;
    price_effective?: number;
    store_id?: number;
    index?: number;
    company_id?: number;
    article_assignment: ArticleAssignment1;
    s_city?: string;
    quantity: number;
    meta?: any;
    strategy_wise_listing?: any[];
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type GetAddressSerializer = {
    address1?: string;
    city?: string;
    state?: string;
    pincode?: number;
    longitude?: number;
    country?: string;
    latitude?: number;
    landmark?: string;
    address2?: string;
    address_type?: string;
    country_code?: string;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type UserSerializer1 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type UserSerializer2 = {
    user_id?: string;
    contact?: string;
    username?: string;
};
type GetCompanySerializer = {
    business_type?: string;
    modified_by?: UserSerializer2;
    name?: string;
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    verified_on?: string;
    uid?: number;
    company_type?: string;
    verified_by?: UserSerializer2;
    created_on?: string;
    stage?: string;
    created_by?: UserSerializer2;
    reject_reason?: string;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type LocationManagerSerializer = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
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
type InvoiceCredSerializer = {
    password?: string;
    username?: string;
    enabled?: boolean;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type GetLocationSerializer = {
    product_return_config?: ProductReturnConfigSerializer;
    address: GetAddressSerializer;
    display_name: string;
    contact_numbers?: SellerPhoneNumber[];
    created_by?: UserSerializer1;
    modified_on?: string;
    phone_number: string;
    company?: GetCompanySerializer;
    integration_type?: LocationIntegrationType;
    stage?: string;
    store_type?: string;
    code: string;
    uid?: number;
    _custom_json?: any;
    created_on?: string;
    documents?: Document[];
    notification_emails?: string[];
    manager?: LocationManagerSerializer;
    modified_by?: UserSerializer1;
    name: string;
    verified_on?: string;
    verified_by?: UserSerializer1;
    timing?: LocationDayWiseSerializer[];
    warnings?: any;
    gst_credentials?: InvoiceDetailsSerializer;
};
type LocationListSerializer = {
    items?: GetLocationSerializer[];
    page?: Page;
};
type ApplicationBrandJson = {
    _custom_json: any;
};
type ApplicationCategoryJson = {
    _custom_json: any;
};
type ApplicationDepartment = {
    app_id: string;
    name?: string;
    is_active?: boolean;
    uid: number;
    _custom_json?: any;
    logo?: string;
};
type ApplicationDepartmentListingResponse = {
    items?: ApplicationDepartment[];
    page: Page;
};
type ApplicationDepartmentJson = {
    _custom_json: any;
};
type ApplicationStoreJson = {
    _custom_json: any;
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type CompanyTaxesSerializer = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type GetCompanyProfileSerializerResponse = {
    warnings?: any;
    name?: string;
    notification_emails?: string[];
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    documents?: Document[];
    business_info?: string;
    addresses?: GetAddressSerializer[];
    company_type: string;
    franchise_enabled?: boolean;
    uid: number;
    contact_details?: ContactDetails;
    verified_on?: string;
    business_type: string;
    modified_on?: string;
    mode?: string;
    stage?: string;
    taxes?: CompanyTaxesSerializer[];
    created_on?: string;
    _custom_json?: any;
    created_by?: UserSerializer;
    business_details?: BusinessDetails;
};
type CreateUpdateAddressSerializer = {
    longitude: number;
    pincode: number;
    latitude: number;
    state: string;
    city: string;
    address_type: string;
    landmark?: string;
    country: string;
    address2?: string;
    address1: string;
    country_code?: string;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type UpdateCompany = {
    documents?: Document[];
    business_type?: string;
    business_info?: string;
    addresses?: CreateUpdateAddressSerializer[];
    contact_details?: ContactDetails;
    warnings?: any;
    name?: string;
    taxes?: CompanyTaxesSerializer1[];
    reject_reason?: string;
    _custom_json?: any;
    notification_emails?: string[];
    company_type?: string;
    franchise_enabled?: boolean;
    business_details?: BusinessDetails;
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
    store_documents?: DocumentsObj;
    company_documents?: DocumentsObj;
    store?: DocumentsObj;
    stage?: string;
    product?: DocumentsObj;
    uid?: number;
    brand?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    warnings?: any;
    logo?: string;
    name: string;
    reject_reason?: string;
    verified_by?: UserSerializer;
    modified_by?: UserSerializer;
    _locale_language?: any;
    description?: string;
    slug_key?: string;
    synonyms?: string[];
    uid?: number;
    banner?: BrandBannerSerializer;
    verified_on?: string;
    modified_on?: string;
    mode?: string;
    stage?: string;
    created_on?: string;
    _custom_json?: any;
    created_by?: UserSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    company_id?: number;
    _locale_language?: any;
    uid?: number;
    brand_tier?: string;
    description?: string;
    logo: string;
    name: string;
    banner?: BrandBannerSerializer;
    _custom_json?: any;
    synonyms?: string[];
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanySerializer = {
    business_country_info?: BusinessCountryInfo;
    business_type: string;
    modified_on?: string;
    market_channels?: string[];
    addresses?: GetAddressSerializer[];
    stage?: string;
    name?: string;
    details?: CompanyDetails;
    reject_reason?: string;
    created_on?: string;
    _custom_json?: any;
    notification_emails?: string[];
    company_type: string;
    verified_by?: UserSerializer;
    created_by?: UserSerializer;
    verified_on?: string;
    uid?: number;
    modified_by?: UserSerializer;
};
type CompanyBrandSerializer = {
    company?: CompanySerializer;
    modified_on?: string;
    warnings?: any;
    stage?: string;
    reject_reason?: string;
    created_on?: string;
    brand?: GetBrandResponseSerializer;
    verified_by?: UserSerializer;
    created_by?: UserSerializer;
    verified_on?: string;
    uid?: number;
    modified_by?: UserSerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    company: number;
    brands: number[];
    uid?: number;
};
type HolidayDateSerializer = {
    end_date: string;
    start_date: string;
};
type HolidaySchemaSerializer = {
    holiday_type: string;
    date: HolidayDateSerializer;
    title: string;
};
type AddressSerializer = {
    longitude: number;
    pincode?: number;
    latitude: number;
    state?: string;
    city?: string;
    address_type?: string;
    landmark?: string;
    country?: string;
    address2?: string;
    address1?: string;
    country_code?: string;
};
type LocationSerializer = {
    code: string;
    company: number;
    timing?: LocationDayWiseSerializer[];
    documents?: Document[];
    store_type?: string;
    warnings?: any;
    stage?: string;
    product_return_config?: ProductReturnConfigSerializer;
    name: string;
    contact_numbers?: SellerPhoneNumber[];
    manager?: LocationManagerSerializer;
    _custom_json?: any;
    holiday?: HolidaySchemaSerializer[];
    notification_emails?: string[];
    address: AddressSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    uid?: number;
    display_name: string;
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
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Rule = {
    max?: number;
    min?: number;
    discount_qty?: number;
    key?: number;
    value?: number;
};
type Validity = {
    priority?: number;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    remove?: DisplayMetaDict;
    subtitle?: string;
    title?: string;
    auto?: DisplayMetaDict;
    description?: string;
    apply?: DisplayMetaDict;
};
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type RuleDefinition = {
    scope?: string[];
    applicable_on: string;
    auto_apply?: boolean;
    is_exact?: boolean;
    calculate_on: string;
    value_type: string;
    type: string;
    currency_code?: string;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
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
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type PriceRange = {
    max?: number;
    min?: number;
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
    uses?: UsesRestriction;
    post_order?: PostOrder;
    ordering_stores?: number[];
    bulk_bundle?: BulkBundleRestriction;
    user_type?: string;
    price_range?: PriceRange;
    payments?: any;
    user_groups?: number[];
    coupon_allowed?: boolean;
};
type CouponSchedule = {
    duration?: number;
    start?: string;
    cron?: string;
    end?: string;
    next_schedule?: any[];
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type CouponAdd = {
    tags?: string[];
    ownership: Ownership;
    action?: CouponAction;
    type_slug: string;
    rule: Rule[];
    validity: Validity;
    display_meta: DisplayMeta;
    validation?: Validation;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
    state?: State;
    restrictions?: Restrictions;
    _schedule?: CouponSchedule;
    date_meta?: CouponDateMeta;
    identifiers: Identifier;
    code: string;
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
    tags?: string[];
    ownership: Ownership;
    action?: CouponAction;
    type_slug: string;
    rule: Rule[];
    validity: Validity;
    display_meta: DisplayMeta;
    validation?: Validation;
    author?: CouponAuthor;
    rule_definition: RuleDefinition;
    state?: State;
    restrictions?: Restrictions;
    _schedule?: CouponSchedule;
    date_meta?: CouponDateMeta;
    identifiers: Identifier;
    code: string;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type DiscountOffer = {
    min_offer_quantity?: number;
    discount_price?: number;
    partial_can_ret?: boolean;
    discount_percentage?: number;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    apportion_discount?: boolean;
    discount_amount?: number;
    max_usage_per_transaction?: number;
    code?: string;
};
type CompareObject = {
    greater_than_equals?: number;
    equals?: number;
    less_than_equals?: number;
    greater_than?: number;
    less_than?: number;
};
type ItemCriteria = {
    item_exclude_brand?: number[];
    cart_unique_item_amount?: CompareObject;
    cart_quantity?: CompareObject;
    item_exclude_id?: number[];
    item_exclude_company?: number[];
    item_exclude_sku?: string[];
    item_exclude_category?: number[];
    product_tags?: string[];
    buy_rules?: string[];
    cart_total?: CompareObject;
    item_id?: number[];
    item_exclude_store?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_company?: number[];
    item_sku?: string[];
    item_brand?: number[];
    all_items?: boolean;
    available_zones?: string[];
    item_size?: string[];
    item_store?: number[];
    item_category?: number[];
};
type DiscountRule = {
    offer: DiscountOffer;
    discount_type: string;
    item_criteria: ItemCriteria;
    buy_condition: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    maximum?: UsesRemaining1;
    remaining?: UsesRemaining1;
};
type PostOrder1 = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
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
type Restrictions1 = {
    platforms?: string[];
    uses: UsesRestriction1;
    post_order?: PostOrder1;
    anonymous_users?: boolean;
    payments?: PromotionPaymentModes[];
    user_registered?: UserRegistered;
    user_id?: string[];
    user_groups?: number[];
    order_quantity?: number;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type DisplayMeta1 = {
    offer_label?: string;
    description?: string;
    offer_text?: string;
    name?: string;
};
type PromotionSchedule = {
    duration?: number;
    next_schedule?: any[];
    start: string;
    cron?: string;
    end?: string;
    published: boolean;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type PromotionListItem = {
    application_id: string;
    discount_rules: DiscountRule[];
    currency?: string;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    code?: string;
    post_order_action?: PromotionAction;
    buy_rules: any;
    stackable?: boolean;
    apply_priority?: number;
    calculate_on?: string;
    promo_group: string;
    author?: PromotionAuthor;
    mode: string;
    promotion_type: string;
    _custom_json?: any;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    date_meta?: PromotionDateMeta;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    application_id: string;
    discount_rules: DiscountRule[];
    currency?: string;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    code?: string;
    post_order_action?: PromotionAction;
    buy_rules: any;
    stackable?: boolean;
    apply_priority?: number;
    calculate_on?: string;
    promo_group: string;
    author?: PromotionAuthor;
    mode: string;
    promotion_type: string;
    _custom_json?: any;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    date_meta?: PromotionDateMeta;
};
type PromotionUpdate = {
    application_id: string;
    discount_rules: DiscountRule[];
    currency?: string;
    visiblility?: Visibility;
    restrictions?: Restrictions1;
    apply_exclusive?: string;
    code?: string;
    post_order_action?: PromotionAction;
    buy_rules: any;
    stackable?: boolean;
    apply_priority?: number;
    calculate_on?: string;
    promo_group: string;
    author?: PromotionAuthor;
    mode: string;
    promotion_type: string;
    _custom_json?: any;
    ownership: Ownership1;
    display_meta: DisplayMeta1;
    apply_all_discount?: boolean;
    _schedule?: PromotionSchedule;
    date_meta?: PromotionDateMeta;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    created_on?: string;
    subtitle?: string;
    title?: string;
    modified_on?: string;
    example?: string;
    entity_type?: string;
    type?: string;
    is_hidden?: boolean;
    description?: string;
    entity_slug?: string;
};
type CartItem = {
    size: string;
    quantity?: number;
    product_id: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductPrice = {
    marked?: number;
    currency_symbol?: string;
    add_on?: number;
    selling?: number;
    currency_code?: string;
    effective?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type ProductAvailability = {
    other_store_quantity?: number;
    is_valid?: boolean;
    deliverable?: boolean;
    sizes?: string[];
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
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type CartProduct = {
    item_code?: string;
    action?: ProductAction;
    name?: string;
    type?: string;
    categories?: CategoryInfo[];
    net_quantity?: NetQuantity;
    brand?: BaseInfo;
    slug?: string;
    images?: ProductImage[];
    uid?: number;
};
type PromoMeta = {
    message?: string;
};
type BasePrice = {
    currency_code?: string;
    marked?: number;
    currency_symbol?: string;
    effective?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    _custom_json?: any;
    quantity?: number;
    type?: string;
    seller?: BaseInfo;
    price?: ArticlePriceInfo;
    parent_item_identifiers?: any;
    size?: string;
    extra_meta?: any;
    product_group_tags?: string[];
    store?: BaseInfo;
    uid?: string;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type FreeGiftItem = {
    item_id?: number;
    item_brand_name?: string;
    item_images_url?: string[];
    item_name?: string;
    item_slug?: string;
    item_price_details?: any;
};
type AppliedFreeArticles = {
    parent_item_identifier?: string;
    free_gift_item_details?: FreeGiftItem;
    quantity?: number;
    article_id?: string;
};
type DiscountRulesApp = {
    offer?: any;
    matched_buy_rules?: string[];
    raw_offer?: any;
    item_criteria?: any;
};
type AppliedPromotion = {
    article_quantity?: number;
    buy_rules?: BuyRules[];
    promotion_group?: string;
    promo_id?: string;
    ownership?: Ownership2;
    mrp_promotion?: boolean;
    applied_free_articles?: AppliedFreeArticles[];
    discount_rules?: DiscountRulesApp[];
    amount?: number;
    promotion_name?: string;
    promotion_type?: string;
    offer_text?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    price_per_unit?: ProductPriceInfo;
    is_set?: boolean;
    availability?: ProductAvailability;
    discount?: string;
    message?: string;
    product?: CartProduct;
    promo_meta?: PromoMeta;
    key?: string;
    price?: ProductPriceInfo;
    parent_item_identifiers?: any;
    article?: ProductArticle;
    promotions_applied?: AppliedPromotion[];
    bulk_offer?: any;
    identifiers: CartProductIdentifer;
    coupon_message?: string;
    quantity?: number;
};
type RawBreakup = {
    mrp_total?: number;
    delivery_charge?: number;
    subtotal?: number;
    total?: number;
    convenience_fee?: number;
    discount?: number;
    gst_charges?: number;
    vog?: number;
    fynd_cash?: number;
    cod_charge?: number;
    coupon?: number;
    you_saved?: number;
};
type CouponBreakup = {
    message?: string;
    title?: string;
    max_discount_value?: number;
    type?: string;
    coupon_value?: number;
    minimum_cart_value?: number;
    value?: number;
    description?: string;
    coupon_type?: string;
    sub_title?: string;
    is_applied?: boolean;
    uid?: string;
    code?: string;
};
type DisplayBreakup = {
    display?: string;
    message?: string[];
    currency_symbol?: string;
    currency_code?: string;
    key?: string;
    value?: number;
};
type LoyaltyPoints = {
    description?: string;
    total?: number;
    is_applied?: boolean;
    applicable?: number;
};
type CartBreakup = {
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
};
type OpenapiCartDetailsResponse = {
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    success?: boolean;
    message?: string;
    errors?: any;
};
type ShippingAddress = {
    email?: string;
    pincode?: number;
    meta?: any;
    area_code: string;
    phone?: number;
    country_phone_code?: string;
    area?: string;
    country_iso_code?: string;
    name?: string;
    country?: string;
    landmark?: string;
    area_code_slug?: string;
    state?: string;
    address_type?: string;
    address?: string;
    city?: string;
    country_code?: string;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
};
type PromiseTimestamp = {
    max?: number;
    min?: number;
};
type PromiseFormatted = {
    max?: string;
    min?: string;
};
type ShipmentPromise = {
    timestamp?: PromiseTimestamp;
    formatted?: PromiseFormatted;
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
    values: string[];
    key: string;
};
type OpenApiOrderItem = {
    product_id: number;
    loyalty_discount?: number;
    employee_discount?: number;
    amount_paid: number;
    discount: number;
    meta?: CartItemMeta;
    files?: OpenApiFiles[];
    delivery_charges: number;
    payment_methods: MultiTenderPaymentMethod[];
    size: string;
    price_effective: number;
    price_marked: number;
    extra_meta?: any;
    coupon_effective_discount: number;
    cod_charges: number;
    cashback_applied: number;
    quantity?: number;
};
type OpenApiPlatformCheckoutReq = {
    payment_mode?: string;
    loyalty_discount?: number;
    cart_items: OpenApiOrderItem[];
    employee_discount?: any;
    delivery_charges: number;
    coupon_code: string;
    affiliate_order_id?: string;
    coupon?: string;
    order_id?: string;
    currency_code?: string;
    gstin?: string;
    payment_methods: MultiTenderPaymentMethod[];
    files?: OpenApiFiles[];
    shipping_address?: ShippingAddress;
    comment?: string;
    coupon_value: number;
    cart_value: number;
    billing_address: ShippingAddress;
    cashback_applied: number;
    cod_charges: number;
};
type OpenApiCheckoutResponse = {
    success?: boolean;
    message?: string;
    order_id: string;
    order_ref_id?: string;
};
type AbandonedCart = {
    fynd_credits?: any;
    discount?: number;
    shipments?: any[];
    pick_up_customer_details?: any;
    last_modified: string;
    coupon?: any;
    fc_index_map?: number[];
    gstin?: string;
    is_archive?: boolean;
    merge_qty?: boolean;
    payment_methods?: any[];
    is_active?: boolean;
    comment?: string;
    payments?: any;
    cod_charges?: any;
    uid: number;
    checkout_mode?: string;
    created_on: string;
    app_id?: string;
    payment_mode?: string;
    articles: any[];
    bulk_coupon_discount?: number;
    delivery_charges?: any;
    buy_now?: boolean;
    order_id?: string;
    expire_at: string;
    promotion?: any;
    _id: string;
    cashback: any;
    meta?: any;
    is_default: boolean;
    cart_value?: number;
    user_id: string;
};
type AbandonedCartResponse = {
    message?: string;
    items?: AbandonedCart[];
    page?: Page;
    success?: boolean;
    result?: any;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    checkout_mode?: string;
    restrict_checkout?: boolean;
    id?: string;
    message?: string;
    delivery_charge_info?: string;
    comment?: string;
    items?: CartProductInfo[];
    buy_now?: boolean;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    pan_config?: any;
    pan_no?: string;
    last_modified?: string;
    payment_selection_lock?: PaymentSelectionLock;
    currency?: CartCurrency;
    coupon_text?: string;
    gstin?: string;
    breakup_values?: CartBreakup;
};
type AddProductCart = {
    item_id?: number;
    display?: string;
    _custom_json?: any;
    article_id?: string;
    seller_id?: number;
    article_assignment?: any;
    item_size?: string;
    extra_meta?: any;
    parent_item_identifiers?: any;
    store_id?: number;
    product_group_tags?: string[];
    quantity?: number;
    pos?: boolean;
};
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
    message?: string;
    partial?: boolean;
};
type UpdateProductCart = {
    item_id?: number;
    _custom_json?: any;
    article_id?: string;
    item_size?: string;
    item_index?: number;
    extra_meta?: any;
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
    quantity?: number;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
    message?: string;
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
    created_on?: string;
    user?: any;
    meta?: any;
    token?: string;
    source?: any;
};
type SharedCart = {
    message?: string;
    is_valid?: boolean;
    last_modified?: string;
    currency?: CartCurrency;
    coupon_text?: string;
    gstin?: string;
    shared_cart_details?: SharedCartDetails;
    comment?: string;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    uid?: string;
    cart_id?: number;
    checkout_mode?: string;
    id?: string;
    delivery_charge_info?: string;
    buy_now?: boolean;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    breakup_values?: CartBreakup;
};
type SharedCartResponse = {
    cart?: SharedCart;
    error?: string;
};
type CartList = {
    cart_id?: string;
    item_counts?: string;
    created_on?: string;
    cart_value?: string;
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
    pan_no?: string;
    last_modified?: string;
    currency?: CartCurrency;
    coupon_text?: string;
    gstin?: string;
    comment?: string;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    pan_config?: any;
    checkout_mode?: string;
    user?: UserInfo;
    id?: string;
    delivery_charge_info?: string;
    buy_now?: boolean;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    breakup_values?: CartBreakup;
};
type DeleteCartDetailResponse = {
    success?: boolean;
    message?: string;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type PageCoupon = {
    total?: number;
    current?: number;
    has_previous?: boolean;
    total_item_count?: number;
    has_next?: boolean;
};
type Coupon = {
    sub_title?: string;
    title?: string;
    message?: string;
    expires_on?: string;
    coupon_value?: number;
    max_discount_value?: number;
    coupon_code?: string;
    is_applicable?: boolean;
    minimum_cart_value?: number;
    coupon_type?: string;
    description?: string;
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
    longitude?: number;
    latitude?: number;
};
type PlatformAddress = {
    email?: string;
    tags?: string[];
    area_code?: string;
    google_map_point?: any;
    area_code_slug?: string;
    country?: string;
    is_active?: boolean;
    is_default_address?: boolean;
    phone?: string;
    name?: string;
    address_type?: string;
    address?: string;
    created_by_user_id?: string;
    country_code?: string;
    cart_id?: string;
    checkout_mode?: string;
    id?: string;
    geo_location?: GeoLocation;
    landmark?: string;
    state?: string;
    city?: string;
    meta?: any;
    area?: string;
    user_id?: string;
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
    billing_address_id?: string;
    checkout_mode?: string;
    cart_id?: string;
    id?: string;
};
type ShipmentResponse = {
    shipment_type?: string;
    fulfillment_type?: string;
    shipments?: number;
    box_type?: string;
    fulfillment_id?: number;
    items?: CartProductInfo[];
    order_type?: string;
    promise?: ShipmentPromise;
    dp_id?: string;
    dp_options?: any;
};
type CartShipmentsResponse = {
    cart_id?: number;
    checkout_mode?: string;
    id?: string;
    message?: string;
    delivery_charge_info?: string;
    shipments?: ShipmentResponse[];
    buy_now?: boolean;
    is_valid?: boolean;
    error?: boolean;
    last_modified?: string;
    currency?: CartCurrency;
    coupon_text?: string;
    gstin?: string;
    restrict_checkout?: boolean;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    payment_selection_lock?: PaymentSelectionLock;
    breakup_values?: CartBreakup;
    uid?: string;
};
type UpdateCartShipmentItem = {
    shipment_type: string;
    quantity?: number;
    article_uid: string;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    checkout_mode?: string;
    comment?: string;
    pick_up_customer_details?: any;
    pan_no?: string;
    gstin?: string;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type StaffCheckout = {
    last_name: string;
    user: string;
    employee_code?: string;
    first_name: string;
    _id: string;
};
type Files = {
    values: string[];
    key: string;
};
type PlatformCartCheckoutDetailRequest = {
    callback_url?: string;
    ordering_store?: number;
    staff?: StaffCheckout;
    pos?: boolean;
    payment_params?: any;
    address_id?: string;
    checkout_mode?: string;
    payment_mode: string;
    id: string;
    billing_address_id?: string;
    delivery_address?: any;
    order_type: string;
    merchant_code?: string;
    aggregator?: string;
    payment_auto_confirm?: boolean;
    extra_meta?: any;
    files?: Files[];
    meta?: any;
    pick_at_store_uid?: number;
    user_id: string;
    payment_identifier?: string;
    billing_address?: any;
};
type CheckCart = {
    cod_available?: boolean;
    message?: string;
    cod_message?: string;
    is_valid?: boolean;
    last_modified?: string;
    currency?: CartCurrency;
    coupon_text?: string;
    gstin?: string;
    comment?: string;
    items?: CartProductInfo[];
    delivery_promise?: ShipmentPromise;
    store_emps?: any[];
    store_code?: string;
    error_message?: string;
    uid?: string;
    cod_charges?: number;
    cart_id?: number;
    checkout_mode?: string;
    id?: string;
    delivery_charge_info?: string;
    buy_now?: boolean;
    delivery_charges?: number;
    user_type?: string;
    order_id?: string;
    success?: boolean;
    restrict_checkout?: boolean;
    delivery_charge_order_value?: number;
    payment_selection_lock?: PaymentSelectionLock;
    breakup_values?: CartBreakup;
};
type CartCheckoutResponse = {
    payment_confirm_url?: string;
    message?: string;
    callback_url?: string;
    data?: any;
    app_intercept_url?: string;
    order_id?: string;
    success?: boolean;
    cart?: CheckCart;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    email?: string;
    pincode?: number;
    id?: number;
    area_code?: string;
    phone?: string;
    area?: string;
    name?: string;
    country?: string;
    area_code_slug?: string;
    landmark?: string;
    store_code?: string;
    state?: string;
    address_type?: string;
    address?: string;
    city?: string;
    uid?: number;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    aggregator_name?: string;
    payment_mode?: string;
    id?: string;
    address_id?: string;
    merchant_code?: string;
    payment_identifier?: string;
};
type CouponValidity = {
    valid?: boolean;
    discount?: number;
    title?: string;
    display_message_en?: string;
    code?: string;
};
type PaymentCouponValidate = {
    success: boolean;
    message?: string;
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
