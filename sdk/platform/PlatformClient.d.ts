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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, ApplicationData, NotFound, BadRequest, Page, LocationDefaultLanguage, LocationDefaultCurrency, LocationDetails, Locations, TicketList, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, UserSchema, PhoneNumber, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, Activity, ActivityDump, AddMediaListRequest, AddMediaRequest, ApproveRequest, Attribute, AttributeObject, CreatedBy, CursorGetResponse, DateMeta, DeviceMeta, Entity, EntityRequest, FeedbackAttributes, FeedbackError, FeedbackState, GetResponse, GetReviewResponse, InsertResponse, MediaMeta, MediaMetaRequest, NumberGetResponse, PageCursor, PageNumber, Rating, RatingRequest, ReportAbuseRequest, Review, ReviewFacet, ReviewRequest, SaveAttributeRequest, SortMethod, TagMeta, Template, TemplateGetResponse, TemplateRequest, TemplateRequestList, UI, UIIcon, UpdateAttributeRequest, UpdateResponse, UpdateReviewRequest, UpdateTemplateRequest, UpdateTemplateStatusRequest, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserEmails, UserPhoneNumbers, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, OneTimeChargeItem, CreateOneTimeCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, OneTimeChargeEntity, CreateOneTimeChargeResponse, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, Payout, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, PlatformPaymentOptions, PlatfromPaymentConfig, UpdatePlatformPaymentConfig, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, EdcModelData, EdcAggregatorAndModelListResponse, StatisticsData, EdcDeviceStatsResponse, EdcAddRequest, EdcDevice, EdcDeviceAddResponse, EdcDeviceDetailsResponse, EdcUpdateRequest, EdcDeviceUpdateResponse, EdcDeviceListResponse, PaymentInitializationRequest, PaymentInitializationResponse, PaymentStatusUpdateRequest, PaymentStatusUpdateResponse, ResendOrCancelPaymentRequest, LinkStatus, ResendOrCancelPaymentResponse, FilterInfoOption, FiltersInfo, ShipmentItemFulFillingStore, UserDataInfo, PaymentModeInfo, Prices, GSTDetailsData, PlatformItem, BagUnit, ShipmentStatus, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, FulfillingStore, DPDetailsData, Formatted, EInvoice, EinvoiceInfo, BuyerDetails, ShipmentTimeStamp, DebugInfo, LockData, ShipmentMeta, PDFLinks, AffiliateMeta, AffiliateDetails, UserDetailsData, TrackingList, PlatformDeliveryAddress, OrderBagArticle, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagStateMapper, CurrentStatus, BagGST, BagConfigs, OrderBrandName, Identifier, FinancialBreakup, OrderBags, OrderDetailsData, BagStatusHistory, OrderingStoreDetails, ShipmentPayments, CompanyDetails, ShipmentStatusData, Dimensions, Meta, PlatformShipment, ShipmentInfoResponse, TaxDetails, PlatformUserDetails, TransactionData, BillingStaffDetails, OrderMeta, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, AdvanceFilterInfo, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, ArticleDetails, Attributes, Item, Weight, ReturnConfig, Article, BagGSTDetails, StoreAddress, StoreEwaybill, StoreEinvoice, StoreGstCredentials, Document, StoreDocuments, EInvoicePortalDetails, StoreMeta, Store, Brand, Dates, AffiliateBagDetails, BagReturnableCancelableStatus, B2BPODetails, BagMeta, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, GeneratePosOrderReceiptResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateStoreIdMapping, AffiliateInventoryOrderConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryStoreConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, OrderUser, OrderPriority, UserData, MarketPlacePdf, AffiliateBag, ArticleDetails1, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, PostHistoryFilters, PostHistoryData, PostActivityHistory, PostHistoryDict, PostShipmentHistory, SmsDataPayload, SendSmsPayload, Meta1, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, PaymentMethod, PaymentInfo, TaxInfo, ShippingInfo, Tax, Charge, BillingInfo, LineItem, ProcessingDates, Shipment, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, MOQData, SEOData, OwnerAppItemResponse, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListing, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, BannerImage, ImageUrls, CollectionQuery, Media1, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponse, CollectionImage, CollectionBanner, SeoDetail, UserInfo, CollectionBadge, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterFilter, GenderDetail, CategoriesResponse, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, UserInfo1, ProductTemplateExportResponse, ProductDownloadsResponse, ProductTemplateExportFilterRequest, ProductTemplateDownloadsExport, ProductPartialExportRequest, ProductConfigurationDownloads, Hierarchy, CategoryMappingValues, CategoryMapping, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, VerifiedBy, Logo, ProductPublish, Trader, NetQuantityResponse, ReturnConfigResponse, Image, ProductSchemaV2, ProductListingResponseV2, TaxIdentifier, CustomOrder, ProductPublish1, NetQuantity, TeaserTag, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, ProductPublished, Product, ProductListingResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkJob, BulkResponse, BulkProductRequest, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, BrandMeta, QuantityBase, Quantities, DimensionResponse, CompanyMeta, Trader1, ReturnConfig1, WeightResponse, PriceMeta, ManufacturerResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BrandMeta1, Quantity, QuantitiesArticle, DimensionResponse1, ArticleStoreResponse, CompanyMeta1, Trader2, ReturnConfig2, WeightResponse1, PriceArticle, ManufacturerResponse1, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportQuantityFilter, InventoryExportAdvanceOption, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, InventoryJobFilters, InventoryJobDetailResponse, InventoryExportJobListResponse, InventoryExportFilter, InventoryCreateRequest, InventoryPartialExportRequest, InventoryExportCreateFilters, InventoryExportCreateResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, HsnCode, HsnUpsert, BulkHsnUpsert, BulkHsnResponse, PageResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, UserSerializer1, SellerPhoneNumber, InvoiceCredSerializer, InvoiceDetailsSerializer, GetAddressSerializer, LocationIntegrationType, UserSerializer2, GetCompanySerializer, LocationManagerSerializer, ProductReturnConfigSerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, ContactDetails, BusinessCountryInfo, CompanyTaxesSerializer, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, PanCardConfig, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, Application, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, DisplayMetaDict, DisplayMeta, Ownership, CouponSchedule, Validity, Validation, CouponDateMeta, CouponAction, Rule, PostOrder, PaymentAllowValue, PaymentModes, PriceRange, UsesRemaining, UsesRestriction, BulkBundleRestriction, Restrictions, RuleDefinition, CouponAuthor, State, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionDateMeta, CompareObject, ItemCriteria, PromotionAuthor, PromotionAction, DisplayMeta1, Visibility, Ownership1, PostOrder1, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, UsesRemaining1, UsesRestriction1, Restrictions1, DiscountOffer, DiscountRule, PromotionSchedule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, CouponBreakup, DisplayBreakup, RawBreakup, LoyaltyPoints, CartBreakup, CategoryInfo, ProductImage, BaseInfo, ActionQuery, ProductAction, CartProduct, PromoMeta, ProductPrice, ProductPriceInfo, ProductAvailability, BasePrice, ArticlePriceInfo, ProductArticle, CartProductIdentifer, Ownership2, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, GetShareCartLinkRequest, GetShareCartLinkResponse, SharedCartDetails, SharedCart, SharedCartResponse, CartList, MultiCartResponse, UpdateUserCartMapping, UserCartMappingResponse, DeleteCartDetailResponse, CartItemCountResponse, PageCoupon, Coupon, GetCouponResponse, ApplyCouponRequest, GeoLocation, PlatformAddress, PlatformGetAddressesResponse, SaveAddressResponse, UpdateAddressResponse, DeleteAddressResponse, PlatformSelectCartAddressRequest, ShipmentResponse, CartShipmentsResponse, UpdateCartShipmentItem, UpdateCartShipmentRequest, PlatformCartMetaRequest, CartMetaResponse, CartMetaMissingResponse, StaffCheckout, Files, PlatformCartCheckoutDetailRequest, CheckCart, CartCheckoutResponse, CartDeliveryModesResponse, PickupStoreDetail, StoreDetailsResponse, UpdateCartPaymentRequest, CouponValidity, PaymentCouponValidate, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, ConfigurationRes, SetConfigurationRes, ConfigurationRequest, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, RemoveProxyResponse, APIError, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    app_id: string;
    display_fields: string[];
    excluded_fields: string[];
    created: boolean;
    aggregators?: any[];
    success: boolean;
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    is_active?: boolean;
    config_type: string;
    secret: string;
    merchant_salt: string;
    key: string;
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
    error: ErrorCodeAndDescription;
    success: boolean;
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
    logo_url?: PaymentModeLogo;
    card_reference?: string;
    name?: string;
    intent_app?: IntentApp[];
    card_fingerprint?: string;
    card_isin?: string;
    fynd_vpa?: string;
    retry_count?: number;
    expired?: boolean;
    card_number?: string;
    card_brand_image?: string;
    card_brand?: string;
    intent_flow?: boolean;
    nickname?: string;
    timeout?: number;
    card_id?: string;
    cod_limit?: number;
    card_name?: string;
    remaining_limit?: number;
    code?: string;
    display_name?: string;
    card_type?: string;
    card_token?: string;
    intent_app_error_list?: string[];
    exp_year?: number;
    intent_app_error_dict_list?: IntentAppErrorList[];
    compliant_with_tokenisation_guidelines?: boolean;
    display_priority?: number;
    merchant_code?: string;
    exp_month?: number;
    card_issuer?: string;
    aggregator_name: string;
    cod_limit_per_order?: number;
};
type RootPaymentMode = {
    save_card?: boolean;
    add_card_enabled?: boolean;
    list?: PaymentModeList[];
    display_name: string;
    name: string;
    is_pay_by_card_pl?: boolean;
    aggregator_name?: string;
    anonymous_enable?: boolean;
    display_priority: number;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type Payout = {
    more_attributes: any;
    is_default: boolean;
    is_active: boolean;
    transfer_type: string;
    payouts_aggregators: any[];
    unique_transfer_no: any;
    customers: any;
};
type PayoutsResponse = {
    success: boolean;
    items: Payout[];
};
type PayoutBankDetails = {
    account_holder?: string;
    account_type: string;
    country?: string;
    branch_name?: string;
    ifsc_code: string;
    city?: string;
    state?: string;
    bank_name?: string;
    account_no?: string;
    pincode?: number;
};
type PayoutRequest = {
    users: any;
    is_active: boolean;
    transfer_type: string;
    aggregator: string;
    bank_details: PayoutBankDetails;
    unique_external_id: string;
};
type PayoutResponse = {
    users: any;
    payment_status: string;
    is_active: boolean;
    payouts: any;
    transfer_type: string;
    aggregator: string;
    unique_transfer_no: string;
    bank_details: any;
    created: boolean;
    success: boolean;
};
type UpdatePayoutResponse = {
    is_default: boolean;
    is_active: boolean;
    success: boolean;
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
    data: any[];
    success: boolean;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    config: any;
    success: boolean;
    aggregator: string;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    data: any;
    success: boolean;
};
type RefundAccountResponse = {
    message: string;
    is_verified_flag?: boolean;
    data?: any;
    success: boolean;
};
type NotFoundResourceError = {
    code: string;
    description: string;
    success: boolean;
};
type BankDetailsForOTP = {
    account_holder: string;
    branch_name: string;
    ifsc_code: string;
    bank_name: string;
    account_no: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    details: BankDetailsForOTP;
    order_id: string;
};
type IfscCodeResponse = {
    bank_name: string;
    success?: boolean;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    transfer_mode: string;
    modified_on: string;
    address: string;
    account_no: string;
    branch_name?: string;
    ifsc_code: string;
    title: string;
    mobile?: string;
    subtitle: string;
    beneficiary_id: string;
    id: number;
    display_name: string;
    email: string;
    comment?: string;
    delights_user_name?: string;
    account_holder: string;
    created_on: string;
    is_active: boolean;
    bank_name: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    payment_gateway?: string;
    payment_id?: string;
    extra_meta?: any;
    current_status?: string;
};
type MultiTenderPaymentMethod = {
    name?: string;
    amount: number;
    mode: string;
    meta?: MultiTenderPaymentMeta;
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
    payment_selection_lock?: any;
    anonymous_cod?: boolean;
    methods: any;
    enabled: boolean;
    source: string;
    mode_of_payment: string;
    callback_url?: any;
    cod_amount_limit?: number;
    cod_charges?: number;
};
type PlatfromPaymentConfig = {
    data: PlatformPaymentOptions;
    success: boolean;
    message: string;
};
type UpdatePlatformPaymentConfig = {
    payment_selection_lock?: any;
    anonymous_cod?: boolean;
    methods: any;
    cod_amount_limit?: number;
    cod_charges?: number;
};
type CODdata = {
    user_id: string;
    is_active: boolean;
    limit: number;
    remaining_limit: number;
    usages: number;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    mobileno: string;
    is_active: boolean;
    merchant_user_id: string;
};
type SetCODOptionResponse = {
    message: string;
    success: boolean;
};
type EdcModelData = {
    aggregator_id: number;
    models: string[];
    aggregator: string;
};
type EdcAggregatorAndModelListResponse = {
    data: EdcModelData[];
    success: boolean;
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
    edc_model: string;
    device_tag?: string;
    aggregator_id: number;
    terminal_serial_no: string;
    edc_device_serial_no: string;
    store_id: number;
};
type EdcDevice = {
    merchant_store_pos_code?: string;
    edc_model?: string;
    device_tag: string;
    is_active: boolean;
    aggregator_id: number;
    terminal_serial_no: string;
    aggregator_name?: string;
    application_id: string;
    edc_device_serial_no: string;
    terminal_unique_identifier: string;
    store_id: number;
};
type EdcDeviceAddResponse = {
    data: EdcDevice;
    success: boolean;
};
type EdcDeviceDetailsResponse = {
    data: EdcDevice;
    success: boolean;
};
type EdcUpdateRequest = {
    merchant_store_pos_code?: string;
    edc_model?: string;
    device_tag?: string;
    is_active?: string;
    aggregator_id?: number;
    edc_device_serial_no?: string;
    store_id?: number;
};
type EdcDeviceUpdateResponse = {
    success: boolean;
};
type EdcDeviceListResponse = {
    page: Page;
    success: boolean;
    items: EdcDevice[];
};
type PaymentInitializationRequest = {
    merchant_order_id: string;
    customer_id: string;
    currency: string;
    device_id?: string;
    order_id: string;
    aggregator: string;
    timeout?: number;
    email: string;
    contact: string;
    method: string;
    vpa?: string;
    amount: number;
    razorpay_payment_id?: string;
};
type PaymentInitializationResponse = {
    amount?: number;
    customer_id?: string;
    currency?: string;
    virtual_id?: string;
    bqr_image?: string;
    device_id?: string;
    aggregator_order_id?: string;
    aggregator: string;
    polling_url: string;
    status?: string;
    timeout?: number;
    method: string;
    vpa?: string;
    razorpay_payment_id?: string;
    success: boolean;
    merchant_order_id: string;
    upi_poll_url?: string;
};
type PaymentStatusUpdateRequest = {
    customer_id: string;
    currency: string;
    device_id?: string;
    aggregator: string;
    order_id: string;
    status: string;
    email: string;
    contact: string;
    method: string;
    vpa?: string;
    amount: number;
    merchant_order_id: string;
};
type PaymentStatusUpdateResponse = {
    retry: boolean;
    status: string;
    aggregator_name: string;
    success?: boolean;
    redirect_url?: string;
};
type ResendOrCancelPaymentRequest = {
    device_id?: string;
    request_type: string;
    order_id: string;
};
type LinkStatus = {
    message: string;
    status: boolean;
};
type ResendOrCancelPaymentResponse = {
    data: LinkStatus;
    success: boolean;
};
type FilterInfoOption = {
    value?: string;
    name?: string;
    text: string;
};
type FiltersInfo = {
    type: string;
    value: string;
    text: string;
    options?: FilterInfoOption[];
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type UserDataInfo = {
    name?: string;
    last_name?: string;
    is_anonymous_user?: boolean;
    uid?: number;
    avis_user_id?: string;
    mobile?: string;
    email?: string;
    first_name?: string;
    gender?: string;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type Prices = {
    cashback_applied?: number;
    refund_amount?: number;
    delivery_charge?: number;
    amount_paid?: number;
    refund_credit?: number;
    price_marked?: number;
    amount_paid_roundoff?: number;
    price_effective?: number;
    value_of_good?: number;
    cod_charges?: number;
    cashback?: number;
    fynd_credits?: number;
    promotion_effective_discount?: number;
    tax_collected_at_source?: number;
    coupon_value?: number;
    discount?: number;
};
type GSTDetailsData = {
    gst_fee: number;
    value_of_good: number;
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    gstin_code: string;
};
type PlatformItem = {
    can_return?: boolean;
    name?: string;
    l1_category?: string[];
    can_cancel?: boolean;
    color?: string;
    image?: string[];
    code?: string;
    images?: string[];
    size?: string;
    id?: number;
    l3_category?: number;
    department_id?: number;
    l3_category_name?: string;
};
type BagUnit = {
    can_return?: boolean;
    gst?: GSTDetailsData;
    bag_id: number;
    total_shipment_bags: number;
    can_cancel?: boolean;
    item?: PlatformItem;
    prices?: Prices;
    ordering_channel: string;
    item_quantity: number;
    shipment_id: string;
    status: any;
};
type ShipmentStatus = {
    actual_status: string;
    ops_status: string;
    title: string;
    status: string;
    hex_code: string;
};
type ShipmentItem = {
    fulfilling_store?: ShipmentItemFulFillingStore;
    company?: any;
    user?: UserDataInfo;
    application?: any;
    shipment_created_at: number;
    payment_mode_info?: PaymentModeInfo;
    prices?: Prices;
    sla?: any;
    created_at: string;
    total_bags_count: number;
    id: string;
    fulfilling_centre: string;
    channel?: any;
    total_shipments_in_order: number;
    bags?: BagUnit[];
    shipment_status?: ShipmentStatus;
    payment_methods?: any;
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
type FulfillingStore = {
    pincode: string;
    state: string;
    address: string;
    phone: string;
    country: string;
    code: string;
    fulfillment_channel: string;
    city: string;
    id: number;
    store_name: string;
    meta: any;
    contact_person: string;
};
type DPDetailsData = {
    pincode?: string;
    name?: string;
    country?: string;
    awb_no?: string;
    gst_tag?: string;
    track_url?: string;
    id?: number;
    eway_bill_id?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type EInvoice = {
    error_code?: string;
    acknowledge_date?: string;
    signed_qr_code?: string;
    acknowledge_no?: number;
    error_message?: string;
    irn?: string;
    signed_invoice?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type BuyerDetails = {
    pincode: number;
    state: string;
    address: string;
    name: string;
    city: string;
    gstin: string;
    ajio_site_id?: string;
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
type ShipmentMeta = {
    formatted?: Formatted;
    awb_number?: string;
    assign_dp_from_sb?: boolean;
    shipment_volumetric_weight?: number;
    marketplace_store_id?: string;
    po_number?: string;
    ewaybill_info?: any;
    dp_options?: any;
    box_type?: string;
    dp_id?: string;
    einvoice_info?: EinvoiceInfo;
    weight: number;
    b2b_buyer_details?: BuyerDetails;
    dp_sort_key?: string;
    shipment_weight?: number;
    fulfilment_priority_text?: string;
    return_details?: any;
    forward_affiliate_shipment_id?: string;
    return_store_node?: number;
    timestamp?: ShipmentTimeStamp;
    return_affiliate_shipment_id?: string;
    debug_info?: DebugInfo;
    lock_data?: LockData;
    store_invoice_updated_date?: string;
    due_date?: string;
    packaging_name?: string;
    bag_weight?: any;
    return_awb_number?: string;
    b2c_buyer_details?: any;
    return_affiliate_order_id?: string;
    same_store_available: boolean;
    order_type?: string;
    auto_trigger_dp_assignment_acf: boolean;
    external?: any;
    dp_name?: string;
    forward_affiliate_order_id?: string;
};
type PDFLinks = {
    invoice_pos?: string;
    label_pos?: string;
    invoice_a6?: string;
    label_type: string;
    po_invoice?: string;
    label_a6?: string;
    b2b?: string;
    credit_note_url?: string;
    invoice_type: string;
    label_a4?: string;
    invoice_a4?: string;
    invoice?: string;
    label?: string;
};
type AffiliateMeta = {
    channel_shipment_id?: string;
    size_level_total_qty?: number;
    employee_discount?: number;
    coupon_code?: string;
    quantity?: number;
    is_priority?: boolean;
    order_item_id?: string;
    due_date?: string;
    channel_order_id?: string;
    box_type?: string;
    loyalty_discount?: number;
};
type AffiliateDetails = {
    affiliate_bag_id: string;
    shipment_meta: ShipmentMeta;
    ad_id?: string;
    affiliate_store_id: string;
    company_affiliate_tag?: string;
    pdf_links?: PDFLinks;
    affiliate_id?: string;
    affiliate_order_id: string;
    affiliate_shipment_id: string;
    affiliate_meta: AffiliateMeta;
};
type UserDetailsData = {
    pincode: string;
    state: string;
    address: string;
    name: string;
    phone: string;
    country: string;
    city: string;
    email?: string;
};
type TrackingList = {
    is_current?: boolean;
    is_passed?: boolean;
    time?: string;
    text: string;
    status: string;
};
type PlatformDeliveryAddress = {
    pincode?: string;
    updated_at?: string;
    state?: string;
    phone?: string;
    landmark?: string;
    country?: string;
    address2?: string;
    address_type?: string;
    created_at?: string;
    area?: string;
    city?: string;
    address1?: string;
    contact_person?: string;
    address_category?: string;
    latitude?: number;
    email?: string;
    version?: string;
    longitude?: number;
};
type OrderBagArticle = {
    identifiers?: any;
    uid?: string;
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
    promo_id?: string;
    amount?: number;
    buy_rules?: BuyRules[];
    mrp_promotion?: boolean;
    promotion_name?: string;
    promotion_type?: string;
    article_quantity?: number;
    discount_rules?: DiscountRules[];
};
type BagStateMapper = {
    state_type: string;
    display_name: string;
    is_active?: boolean;
    name: string;
    app_facing?: boolean;
    app_display_name?: string;
    bs_id: number;
    journey_type: string;
    app_state_name?: string;
    notify_customer?: boolean;
};
type CurrentStatus = {
    state_type?: string;
    bag_state_mapper?: BagStateMapper;
    updated_at?: number;
    bag_id?: number;
    kafka_sync?: boolean;
    store_id?: number;
    created_at?: string;
    state_id?: number;
    current_status_id: number;
    status?: string;
    shipment_id?: string;
    delivery_awb_number?: string;
    delivery_partner_id?: number;
};
type BagGST = {
    gst_fee?: number;
    is_default_hsn_code?: boolean;
    gst_tag?: string;
    value_of_good?: number;
    brand_calculated_amount?: number;
    hsn_code?: string;
    gst_tax_percentage?: number;
    gstin_code?: string;
};
type BagConfigs = {
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    allow_force_return: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
};
type OrderBrandName = {
    company: string;
    brand_name: string;
    modified_on?: string;
    created_on: string;
    id: number;
    logo: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    gst_fee: number;
    transfer_price: number;
    hsn_code: string;
    refund_credit: number;
    identifiers: Identifier;
    amount_paid_roundoff?: number;
    coupon_effective_discount: number;
    gst_tax_percentage: number;
    discount: number;
    amount_paid: number;
    price_marked: number;
    size: string;
    gst_tag: string;
    value_of_good: number;
    total_units: number;
    item_name: string;
    cod_charges: number;
    fynd_credits: number;
    tax_collected_at_source?: number;
    coupon_value: number;
    cashback_applied: number;
    delivery_charge: number;
    price_effective: number;
    brand_calculated_amount: number;
    cashback: number;
    added_to_fynd_cash: boolean;
    promotion_effective_discount: number;
};
type OrderBags = {
    bag_id: number;
    can_cancel?: boolean;
    line_number?: number;
    entity_type?: string;
    delivery_address?: PlatformDeliveryAddress;
    item?: PlatformItem;
    seller_identifier?: string;
    article?: OrderBagArticle;
    applied_promos?: AppliedPromos[];
    current_status?: CurrentStatus;
    display_name?: string;
    gst_details?: BagGST;
    identifier?: string;
    prices?: Prices;
    bag_configs?: BagConfigs;
    quantity?: number;
    brand?: OrderBrandName;
    can_return?: boolean;
    parent_promo_bags?: any;
    financial_breakup?: FinancialBreakup;
};
type OrderDetailsData = {
    order_date?: string;
    source?: string;
    fynd_order_id: string;
    ordering_channel_logo?: any;
    ordering_channel?: string;
    order_value?: string;
    cod_charges?: string;
    affiliate_id?: string;
    tax_details?: any;
};
type BagStatusHistory = {
    state_type?: string;
    bag_state_mapper?: BagStateMapper;
    updated_at?: string;
    display_name?: string;
    bag_id?: number;
    kafka_sync?: boolean;
    store_id?: number;
    created_at?: string;
    bsh_id?: number;
    reasons?: any[];
    state_id?: number;
    shipment_id?: string;
    status: string;
    app_display_name?: string;
    delivery_awb_number?: string;
    forward?: boolean;
    delivery_partner_id?: number;
};
type OrderingStoreDetails = {
    pincode: string;
    state: string;
    address: string;
    phone: string;
    country: string;
    code: string;
    city: string;
    store_name: string;
    ordering_store_id: number;
    meta: any;
    contact_person: string;
};
type ShipmentPayments = {
    logo?: string;
    mode?: string;
    source?: string;
};
type CompanyDetails = {
    company_name?: string;
    company_cin?: string;
    address?: any;
    company_id?: number;
};
type ShipmentStatusData = {
    created_at?: string;
    bag_list?: string[];
    id?: number;
    shipment_id?: string;
    status?: string;
};
type Dimensions = {
    width?: number;
    length?: number;
    unit?: string;
    height?: number;
    is_default?: boolean;
};
type Meta = {
    dimension?: Dimensions;
};
type PlatformShipment = {
    fulfilling_store?: FulfillingStore;
    shipment_quantity?: number;
    user?: UserDataInfo;
    picked_date?: string;
    dp_details?: DPDetailsData;
    affiliate_details?: AffiliateDetails;
    enable_dp_tracking?: boolean;
    billing_details?: UserDetailsData;
    shipment_images?: string[];
    total_bags?: number;
    payment_mode?: string;
    tracking_list?: TrackingList[];
    vertical?: string;
    invoice?: EinvoiceInfo;
    bags?: OrderBags[];
    delivery_slot?: any;
    invoice_id?: string;
    order?: OrderDetailsData;
    gst_details?: GSTDetailsData;
    custom_meta?: any[];
    prices?: Prices;
    bag_status_history?: BagStatusHistory[];
    shipment_id: string;
    fulfilment_priority?: number;
    ordering_store?: OrderingStoreDetails;
    packaging_type?: string;
    coupon?: any;
    payments?: ShipmentPayments;
    operational_status?: string;
    total_items?: number;
    user_agent?: string;
    company_details?: CompanyDetails;
    platform_logo?: string;
    journey_type?: string;
    status?: ShipmentStatusData;
    delivery_details?: UserDetailsData;
    meta?: Meta;
    shipment_status?: string;
    priority_text?: string;
};
type ShipmentInfoResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    message?: string;
};
type TaxDetails = {
    gstin?: string;
    pan_no?: string;
};
type PlatformUserDetails = {
    platform_user_first_name?: string;
    platform_user_id?: string;
    platform_user_last_name?: string;
};
type TransactionData = {
    amount_paid?: string;
    currency?: string;
    payment_id?: string;
    entity?: string;
    terminal_id?: string;
    status?: string;
    unique_reference_number?: string;
    transaction_id?: string;
};
type BillingStaffDetails = {
    staff_id?: number;
    user?: string;
    last_name?: string;
    first_name?: string;
};
type OrderMeta = {
    payment_type?: string;
    order_child_entities?: string[];
    platform_user_details?: PlatformUserDetails;
    transaction_data?: TransactionData;
    mongo_cart_id?: number;
    employee_id?: number;
    currency_symbol?: string;
    staff?: any;
    comment?: string;
    billing_staff_details?: BillingStaffDetails;
    order_platform?: string;
    customer_note?: string;
    cart_id?: number;
    ordering_store?: number;
    extra_meta?: any;
    files?: any[];
    order_tags?: any[];
    company_logo?: string;
    order_type?: string;
};
type OrderDict = {
    order_date: string;
    fynd_order_id: string;
    prices?: Prices;
    tax_details?: TaxDetails;
    meta?: OrderMeta;
    payment_methods?: any;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    success: boolean;
    order?: OrderDict;
};
type SubLane = {
    value?: string;
    text?: string;
    actions?: any[];
    total_items?: number;
    index?: number;
};
type SuperLane = {
    value: string;
    text: string;
    options?: SubLane[];
    total_items?: number;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformBreakupValues = {
    display?: string;
    value?: string;
    name?: string;
};
type PlatformChannel = {
    logo?: string;
    name?: string;
};
type PlatformOrderItems = {
    shipments?: PlatformShipment[];
    user_info?: UserDataInfo;
    payment_mode?: string;
    total_order_value?: number;
    order_created_time?: string;
    breakup_values?: PlatformBreakupValues[];
    order_id?: string;
    order_value?: number;
    channel?: PlatformChannel;
    meta?: any;
};
type OrderListingResponse = {
    page?: Page;
    success?: boolean;
    message?: string;
    lane?: string;
    total_count?: number;
    items?: PlatformOrderItems[];
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
    updated_at?: string;
    reason?: string;
    meta?: any;
    raw_status?: string;
    awb?: string;
    last_location_recieved_at?: string;
    shipment_type?: string;
    status?: string;
    updated_time?: string;
    account_name?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type AdvanceFilterInfo = {
    unfulfilled?: FiltersInfo[];
    action_centre?: FiltersInfo[];
    filters?: FiltersInfo[];
    processed?: FiltersInfo[];
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
    request_details?: any;
    display_name?: string;
    report_name?: string;
    report_requested_at?: string;
    s3_key?: string;
    status?: string;
    report_id?: string;
    report_created_at?: string;
    report_type?: string;
};
type JioCodeUpsertDataSet = {
    item_id?: string;
    jio_code?: string;
    article_id?: string;
    company_id?: string;
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
    success?: boolean;
    error?: NestedErrorSchemaDataSet[];
    identifier?: string;
    trace_id?: string;
    data?: any[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    invoice?: any;
    company_id?: string;
    batch_id: string;
    store_id?: string;
    invoice_status?: string;
    data?: any;
    store_name?: string;
    store_code?: string;
    do_invoice_label_generated: boolean;
    label?: any;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type URL = {
    url?: string;
};
type FileResponse = {
    namespace?: string;
    file_name?: string;
    upload?: FileUploadResponse;
    size?: number;
    content_type?: string;
    file_path?: string;
    method?: string;
    cdn?: URL;
    operation?: string;
    tags?: string[];
};
type BulkListingPage = {
    type?: string;
    current?: number;
    size?: number;
    total?: number;
    has_next?: boolean;
    has_previous?: boolean;
};
type bulkListingData = {
    total?: number;
    successful?: number;
    uploaded_on?: string;
    store_name?: string;
    store_code?: string;
    failed?: number;
    user_name?: string;
    user_id?: string;
    company_id?: number;
    batch_id?: string;
    id?: string;
    processing?: number;
    excel_url?: string;
    processing_shipments?: string[];
    file_name?: string;
    successful_shipments?: any[];
    store_id?: number;
    status?: string;
    failed_shipments?: any[];
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
    question_set?: QuestionSet[];
    display_name?: string;
    id?: number;
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
    message?: string;
    status?: boolean;
};
type BulkActionDetailsDataField = {
    company_id?: string;
    batch_id?: string;
    total_shipments_count?: number;
    processing_shipments_count?: number;
    successful_shipment_ids?: string[];
    failed_shipments_count?: number;
    successful_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    uploaded_on?: string;
    success?: string;
    user_id?: string;
    message?: string;
    error?: string[];
    failed_records?: string[];
    data?: BulkActionDetailsDataField[];
    status?: boolean;
    uploaded_by?: string;
};
type ArticleDetails = {
    status?: any;
};
type Attributes = {
    primary_color_hex?: string;
    marketer_name?: string;
    name?: string;
    primary_material?: string;
    brand_name?: string;
    essential?: string;
    primary_color?: string;
    marketer_address?: string;
    gender?: string[];
};
type Item = {
    l2_category_id?: number;
    can_cancel?: boolean;
    l2_category?: string[];
    department_id?: number;
    l3_category_name?: string;
    gender?: string;
    slug_key: string;
    last_updated_at?: string;
    branch_url?: string;
    color?: string;
    name: string;
    l1_category?: string[];
    attributes: Attributes;
    size: string;
    l3_category?: number;
    item_id: number;
    brand: string;
    can_return?: boolean;
    l1_category_id?: number;
    brand_id: number;
    webstore_product_url?: string;
    code?: string;
    meta?: any;
    image: string[];
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
    is_set?: boolean;
    dimensions?: Dimensions;
    identifiers: Identifier;
    child_details?: any;
    weight?: Weight;
    _id: string;
    raw_meta?: any;
    code?: string;
    size: string;
    seller_identifier: string;
    a_set?: any;
    uid: string;
    esp_modified?: any;
    return_config?: ReturnConfig;
};
type BagGSTDetails = {
    gst_fee: number;
    is_default_hsn_code?: boolean;
    cgst_gst_fee: string;
    igst_tax_percentage: number;
    gst_tag: string;
    value_of_good: number;
    igst_gst_fee: string;
    sgst_gst_fee: string;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    sgst_tax_percentage: number;
    hsn_code_id: string;
    hsn_code: string;
    cgst_tax_percentage: number;
    gst_tax_percentage: number;
    gstin_code?: string;
};
type StoreAddress = {
    state: string;
    country: string;
    address2?: string;
    version?: string;
    updated_at: string;
    area?: string;
    country_code: string;
    address_category: string;
    created_at: string;
    address1: string;
    email?: string;
    latitude: number;
    contact_person: string;
    longitude: number;
    pincode: number;
    landmark?: string;
    phone: string;
    address_type: string;
    city: string;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    enabled: boolean;
    user?: string;
    password?: string;
    username?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type Document = {
    legal_name: string;
    url?: string;
    value: string;
    ds_type: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    user?: string;
    password?: string;
    username?: string;
};
type StoreMeta = {
    timing?: any[];
    display_name: string;
    product_return_config?: any;
    gst_credentials: StoreGstCredentials;
    documents?: StoreDocuments;
    gst_number?: string;
    stage: string;
    notification_emails?: string[];
    ewaybill_portal_details?: any;
    additional_contact_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
};
type Store = {
    store_email: string;
    is_active?: boolean;
    state: string;
    country: string;
    address2?: string;
    login_username: string;
    vat_no?: string;
    updated_at?: string;
    mall_area?: string;
    brand_store_tags?: string[];
    is_archived?: boolean;
    alohomora_user_id?: number;
    location_type: string;
    name: string;
    company_id: number;
    packaging_material_count?: number;
    order_integration_id?: string;
    store_active_from?: string;
    created_at: string;
    parent_store_id?: number;
    fulfillment_channel: string;
    address1: string;
    store_address_json?: StoreAddress;
    is_enabled_for_recon?: boolean;
    s_id: string;
    latitude: number;
    contact_person: string;
    longitude: number;
    pincode: string;
    phone: number;
    brand_id?: any;
    code?: string;
    city: string;
    mall_name?: string;
    meta: StoreMeta;
};
type Brand = {
    credit_note_expiry_days?: number;
    company: string;
    script_last_ran?: string;
    pickup_location?: string;
    brand_name: string;
    credit_note_allowed?: boolean;
    brand_id: number;
    modified_on?: number;
    created_on?: number;
    start_date?: string;
    invoice_prefix?: string;
    is_virtual_invoice?: boolean;
    logo?: string;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type AffiliateBagDetails = {
    affiliate_bag_id: string;
    employee_discount?: number;
    affiliate_order_id: string;
    affiliate_meta: AffiliateMeta;
    loyalty_discount?: number;
};
type BagReturnableCancelableStatus = {
    is_active: boolean;
    is_customer_return_allowed: boolean;
    is_returnable: boolean;
    enable_tracking: boolean;
    can_be_cancelled: boolean;
};
type B2BPODetails = {
    po_line_amount?: number;
    partial_can_ret?: boolean;
    item_base_price?: number;
    total_gst_percentage?: number;
    docker_number?: string;
    po_tax_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type BagDetailsPlatformResponse = {
    current_operational_status: BagStatusHistory;
    article_details?: ArticleDetails;
    original_bag_list?: number[];
    affiliate_details?: AffiliateDetails;
    line_number?: number;
    entity_type?: string;
    item: Item;
    restore_coupon?: boolean;
    seller_identifier?: string;
    no_of_bags_order?: number;
    article: Article;
    restore_promos?: any;
    applied_promos?: any[];
    current_status: BagStatusHistory;
    display_name?: string;
    qc_required?: any;
    gst_details: BagGSTDetails;
    identifier?: string;
    bag_update_time?: number;
    prices: Prices;
    order_integration_id?: string;
    bag_status_history?: BagStatusHistory;
    quantity?: number;
    shipment_id?: string;
    b_id: number;
    ordering_store?: Store;
    tags?: string[];
    bag_status: BagStatusHistory[];
    operational_status?: string;
    brand: Brand;
    dates?: Dates;
    parent_promo_bags?: any;
    affiliate_bag_details: AffiliateBagDetails;
    reasons?: any[];
    journey_type: string;
    b_type?: string;
    status: BagReturnableCancelableStatus;
    financial_breakup: FinancialBreakup[];
    meta?: BagMeta;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    page_type: string;
    current: number;
    size: number;
    has_next: boolean;
    item_total: number;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
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
    shipment_id?: string;
    message?: string;
    status?: number;
    error?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    message: string;
    error_trace?: string;
    status: number;
};
type StoreReassign = {
    set_id?: string;
    affiliate_id?: string;
    item_id?: string;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    fynd_order_id?: string;
    store_id: number;
    mongo_article_id?: string;
    bag_id?: number;
    reason_ids?: number[];
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_shipment_id?: string;
    id?: string;
    affiliate_id?: string;
    reason_text: string;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    entity_type: string;
    entities: Entities[];
    action_type: string;
};
type OriginalFilter = {
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type Bags = {
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    is_locked?: boolean;
    bag_id?: number;
};
type CheckResponse = {
    is_shipment_locked?: boolean;
    affiliate_shipment_id?: string;
    original_filter?: OriginalFilter;
    is_bag_locked?: boolean;
    affiliate_id?: string;
    shipment_id?: string;
    status?: string;
    lock_status?: boolean;
    bags?: Bags[];
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    platform_name?: string;
    to_datetime?: string;
    id: number;
    created_at?: string;
    title?: string;
    description?: string;
    from_datetime?: string;
    platform_id?: string;
    logo_url?: string;
    company_id?: number;
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
type Products = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
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
type EntityReasonData = {
    reason_text?: string;
    reason_id?: number;
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
    identifier: string;
    products?: Products[];
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
type UpdateShipmentStatusRequest = {
    unlock_before_transition?: boolean;
    task?: boolean;
    force_transition?: boolean;
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    meta?: any;
    exception?: string;
    stack_trace?: string;
    message?: string;
    code?: string;
    status?: number;
    identifier?: string;
    final_state?: any;
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
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
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
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryConfig = {
    order?: AffiliateInventoryOrderConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    inventory?: AffiliateInventoryStoreConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    meta?: AffiliateAppConfigMeta[];
    id: string;
    secret: string;
    created_at: string;
    description?: string;
    owner: string;
    name: string;
    updated_at: string;
    token: string;
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
    create_user?: boolean;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    affiliate: Affiliate;
    store_lookup?: string;
    article_lookup?: string;
};
type OrderUser = {
    pincode: string;
    first_name: string;
    address1?: string;
    city: string;
    country: string;
    phone: number;
    last_name: string;
    mobile: number;
    address2?: string;
    email: string;
    state: string;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    pdf_links?: MarketPlacePdf;
    store_id: number;
    company_id: number;
    fynd_store_id: string;
    amount_paid: number;
    affiliate_store_id: string;
    item_size: string;
    _id: string;
    transfer_price: number;
    affiliate_meta: any;
    modified_on: string;
    price_marked: number;
    discount: number;
    identifier: any;
    hsn_code_id: string;
    quantity: number;
    seller_identifier: string;
    sku: string;
    price_effective: number;
    delivery_charge: number;
    item_id: number;
    unit_price: number;
    avl_qty: number;
};
type ArticleDetails1 = {
    quantity: number;
    attributes: any;
    weight: any;
    category: any;
    _id: string;
    dimension: any;
    brand_id: number;
};
type ShipmentDetails = {
    affiliate_shipment_id: string;
    meta?: any;
    box_type?: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
    dp_id?: number;
    shipments: number;
};
type ShipmentConfig = {
    location_details?: LocationDetails;
    journey: string;
    to_pincode: string;
    identifier: string;
    action: string;
    source: string;
    payment_mode: string;
    shipment: ShipmentDetails[];
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    coupon?: string;
    billing_address: OrderUser;
    order_priority?: OrderPriority;
    items: any;
    user: UserData;
    discount: number;
    order_value: number;
    cod_charges: number;
    payment_mode: string;
    affiliate_order_id?: string;
    shipping_address: OrderUser;
    bags: AffiliateBag[];
    payment?: any;
    delivery_charges: number;
    shipment?: ShipmentData;
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
    description: string;
    slug: string;
    display_text: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    createdat: string;
    type: string;
    ticket_id?: string;
    message: string;
    user: string;
    l2_detail?: string;
    ticket_url?: string;
    bag_id?: number;
    l1_detail?: string;
    l3_detail?: string;
};
type ShipmentHistoryResponse = {
    activity_history: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type PostHistoryFilters = {
    identifier?: string;
    shipment_id: string;
    line_number?: string;
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
    amount_paid: number;
    customer_name: string;
    order_id: string;
    phone_number: number;
    shipment_id: number;
    brand_name: string;
    message: string;
    payment_mode: string;
    country_code: string;
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
    remarks?: string;
    meta: Meta1;
    id: number;
    shipment_id?: string;
    status?: string;
    bag_list?: number[];
};
type OrderDetails = {
    created_at?: string;
    fynd_order_id?: string;
};
type OrderStatusData = {
    errors?: string[];
    shipment_details?: ShipmentDetail[];
    order_details: OrderDetails;
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    dp_id: number;
    qc_required: string;
    order_type: string;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type PaymentMethod = {
    transaction_data?: any;
    meta?: any;
    mode: string;
    name: string;
    amount: number;
    collect_by: string;
    refund_by: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type ShippingInfo = {
    pincode: string;
    slot?: any[];
    title?: string;
    last_name?: string;
    external_customer_code?: string;
    landmark?: string;
    middle_name?: string;
    first_name: string;
    address1: string;
    country: string;
    house_no?: string;
    gender?: string;
    address2?: string;
    alternate_email?: string;
    primary_mobile_number: string;
    address_type?: string;
    geo_location?: any;
    floor_no?: string;
    primary_email: string;
    shipping_type?: string;
    city: string;
    state_code?: string;
    alternate_mobile_number?: string;
    state: string;
    customer_code?: string;
    country_code?: string;
};
type Tax = {
    name: string;
    amount: any;
    breakup?: any[];
    rate: number;
};
type Charge = {
    type: string;
    code?: string;
    tax?: Tax;
    name: string;
    amount: any;
};
type BillingInfo = {
    pincode: string;
    title?: string;
    last_name?: string;
    external_customer_code?: string;
    middle_name?: string;
    first_name: string;
    address1: string;
    country: string;
    house_no?: string;
    gender?: string;
    address2?: string;
    alternate_email?: string;
    primary_mobile_number: string;
    floor_no?: string;
    primary_email: string;
    city: string;
    state_code?: string;
    alternate_mobile_number?: string;
    state: string;
    customer_code?: string;
    country_code?: string;
};
type LineItem = {
    quantity?: number;
    seller_identifier: string;
    meta?: any;
    charges?: Charge[];
    external_line_id?: string;
    custom_messasge?: string;
};
type ProcessingDates = {
    confirm_by_date?: string;
    dispatch_after_date?: string;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
    pack_by_date?: string;
};
type Shipment = {
    meta?: any;
    external_shipment_id?: string;
    line_items: LineItem[];
    location_id: number;
    processing_dates?: ProcessingDates;
    priority?: number;
};
type CreateOrderAPI = {
    meta?: any;
    currency_info?: any;
    payment_info: PaymentInfo;
    tax_info?: TaxInfo;
    shipping_info: ShippingInfo;
    charges?: Charge[];
    external_creation_date?: string;
    billing_info: BillingInfo;
    external_order_id?: string;
    shipments: Shipment[];
};
type CreateOrderErrorReponse = {
    info?: any;
    meta?: string;
    exception?: string;
    request_id?: string;
    stack_trace?: string;
    message: string;
    code?: string;
    status: number;
};
type PaymentMethods = {
    mode?: string;
    collect_by?: string;
    refund_by?: string;
};
type CreateChannelPaymentInfo = {
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
    source?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    payment_info?: CreateChannelPaymentInfo;
    lock_states?: string[];
    location_reassignment?: boolean;
    shipment_assignment?: string;
    dp_configuration?: DpConfiguration;
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
    is_inserted?: boolean;
    is_upserted?: boolean;
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
    end_date: string;
    order_details?: FyndOrderIdList[];
    start_date: string;
    mobile: number;
};
type GetSearchWordsData = {
    app_id?: string;
    words?: string[];
    uid?: string;
    result?: any;
    _custom_json?: any;
    is_active?: boolean;
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
    app_id?: string;
    words?: string[];
    result: SearchKeywordResult;
    _custom_json?: any;
    is_active?: boolean;
};
type GetSearchWordsResponse = {
    page?: Page;
    items?: GetSearchWordsData[];
};
type GetAutocompleteWordsData = {
    app_id?: string;
    words?: string[];
    results?: any[];
    uid?: string;
    _custom_json?: any;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type AutocompletePageAction = {
    url?: string;
    params?: any;
    type?: string;
    query?: any;
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
    _custom_json?: any;
    action?: AutocompleteAction;
    logo?: Media;
    display?: string;
};
type CreateAutocompleteKeyword = {
    app_id?: string;
    words?: string[];
    results?: AutocompleteResult[];
    _custom_json?: any;
    is_active?: boolean;
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    words?: string[];
    app_id?: string;
    results?: any[];
};
type ProductBundleItem = {
    allow_remove?: boolean;
    min_quantity: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    product_uid: number;
    max_quantity: number;
};
type GetProductBundleCreateResponse = {
    id?: string;
    choice: string;
    page_visibility?: string[];
    modified_on?: string;
    name: string;
    logo?: string;
    company_id?: number;
    meta?: any;
    created_by?: any;
    same_store_assignment?: boolean;
    modified_by?: any;
    slug: string;
    products: ProductBundleItem[];
    created_on?: string;
    is_active: boolean;
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    choice: string;
    page_visibility?: string[];
    modified_on?: string;
    name: string;
    logo?: string;
    company_id?: number;
    meta?: any;
    created_by?: any;
    same_store_assignment?: boolean;
    modified_by?: any;
    slug: string;
    products: ProductBundleItem[];
    created_on?: string;
    is_active: boolean;
};
type Size = {
    value?: string;
    display?: string;
    is_available?: boolean;
    quantity?: number;
};
type LimitedProductData = {
    identifier?: any;
    attributes?: any;
    sizes?: string[];
    name?: string;
    item_code?: string;
    uid?: number;
    country_of_origin?: string;
    price?: any;
    quantity?: number;
    slug?: string;
    images?: string[];
    short_description?: string;
};
type Price = {
    max_effective?: number;
    currency?: string;
    min_effective?: number;
    max_marked?: number;
    min_marked?: number;
};
type GetProducts = {
    allow_remove?: boolean;
    sizes?: Size[];
    product_details?: LimitedProductData;
    min_quantity?: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    product_uid?: number;
    price?: Price;
    max_quantity?: number;
};
type GetProductBundleResponse = {
    page_visibility?: string[];
    choice?: string;
    name?: string;
    logo?: string;
    company_id?: number;
    meta?: any;
    same_store_assignment?: boolean;
    slug?: string;
    products?: GetProducts[];
    is_active?: boolean;
};
type ProductBundleUpdateRequest = {
    choice: string;
    page_visibility?: string[];
    modified_on?: string;
    name: string;
    logo?: string;
    company_id?: number;
    meta?: any;
    same_store_assignment?: boolean;
    modified_by?: any;
    slug: string;
    products: ProductBundleItem[];
    is_active: boolean;
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
    id?: string;
    title: string;
    active?: boolean;
    name: string;
    subtitle?: string;
    company_id?: number;
    modified_on?: string;
    tag?: string;
    description?: string;
    created_by?: any;
    image?: string;
    modified_by?: any;
    created_on?: string;
    brand_id?: number;
};
type SizeGuideResponse = {
    guide?: any;
    id?: string;
    title?: string;
    active?: boolean;
    modified_on?: string;
    name?: string;
    company_id?: number;
    subtitle?: string;
    tag?: string;
    created_by?: any;
    modified_by?: any;
    created_on?: string;
    brand_id?: number;
};
type ApplicationItemMOQ = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type MetaFields = {
    value: string;
    key: string;
};
type ApplicationItemSEO = {
    title?: string;
    description?: string;
};
type ApplicationItemMeta = {
    moq?: ApplicationItemMOQ;
    _custom_meta?: MetaFields[];
    is_cod?: boolean;
    alt_text?: any;
    is_gift?: boolean;
    seo?: ApplicationItemSEO;
    _custom_json?: any;
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type MOQData = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type SEOData = {
    title?: string;
    description?: string;
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
    data: any[];
    values?: any[];
};
type PageResponseType = {
    current: number;
    next: number;
    has_next: boolean;
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
    display_type: string;
    priority: number;
    key?: string;
    logo?: string;
    name: string;
    slug?: string;
    unit?: string;
    is_active: boolean;
};
type AppConfigurationDetail = {
    attributes?: AttributeDetailsGroup[];
    app_id: string;
    name?: string;
    logo?: string;
    priority: number;
    template_slugs?: string[];
    is_default: boolean;
    slug: string;
    is_active: boolean;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    app_id: string;
    priority: number;
    logo?: string;
    key: string;
    name?: string;
    is_default: boolean;
    default_key: string;
    is_active: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    compare?: any;
    similar?: any;
    variant?: any;
    detail?: any;
};
type MetaDataListingSortMetaResponse = {
    key?: string;
    display?: string;
};
type MetaDataListingSortResponse = {
    data?: MetaDataListingSortMetaResponse[];
};
type MetaDataListingFilterMetaResponse = {
    filter_types?: string[];
    key?: string;
    display?: string;
    units?: any[];
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
type ConfigurationListingSortConfig = {
    name?: string;
    priority: number;
    key: string;
    logo?: string;
    is_active: boolean;
};
type ConfigurationListingSort = {
    config?: ConfigurationListingSortConfig[];
    default_key: string;
};
type ConfigurationBucketPoints = {
    end?: number;
    display?: string;
    start?: number;
};
type ConfigurationListingFilterValue = {
    sort?: string;
    map_values?: any[];
    condition?: string;
    map?: any;
    value?: string;
    bucket_points?: ConfigurationBucketPoints[];
};
type ConfigurationListingFilterConfig = {
    type: string;
    name?: string;
    priority: number;
    key: string;
    logo?: string;
    value_config?: ConfigurationListingFilterValue;
    display_name?: string;
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
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    title?: string;
    priority: number;
    key: string;
    logo?: string;
    subtitle?: string;
    size?: ProductSize;
    is_active: boolean;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    display_type: string;
    name: string;
    priority: number;
    key: string;
    logo?: string;
    size: ProductSize;
    is_active: boolean;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type AppCatalogConfiguration = {
    config_type: string;
    listing?: ConfigurationListing;
    type?: string;
    config_id?: string;
    app_id: string;
    modified_on?: string;
    product?: ConfigurationProduct;
    created_by?: any;
    modified_by?: any;
    created_on?: string;
    id?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    config_type: string;
    listing?: ConfigurationListing;
    type?: string;
    config_id?: string;
    app_id: string;
    modified_on?: string;
    product?: ConfigurationProduct;
    created_by?: any;
    modified_by?: any;
    created_on?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    sort?: any;
    filter?: any;
};
type EntityConfiguration = {
    config_type: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_id?: string;
    app_id: string;
    product?: GetCatalogConfigurationDetailsProduct;
    id?: string;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductSortOn = {
    is_selected?: boolean;
    name?: string;
    value?: string;
};
type ProductFiltersKey = {
    kind?: string;
    operators?: string[];
    name: string;
    logo?: string;
    display: string;
};
type ProductFiltersValue = {
    currency_symbol?: string;
    value: any;
    currency_code?: string;
    query_format?: string;
    is_selected: boolean;
    selected_max?: number;
    display_format?: string;
    display: string;
    min?: number;
    selected_min?: number;
    max?: number;
    count?: number;
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
type BannerImage = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
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
type Media1 = {
    url: string;
    type?: string;
    meta?: any;
};
type GetCollectionDetailNest = {
    allow_facets?: boolean;
    banners?: ImageUrls;
    description?: string;
    action?: Action;
    type?: string;
    allow_sort?: boolean;
    is_active?: boolean;
    visible_facets_keys?: string[];
    priority?: number;
    query?: CollectionQuery[];
    slug?: string;
    badge?: any;
    app_id?: string;
    name?: string;
    logo?: Media1;
    cron?: any;
    _schedule?: any;
    tag?: string[];
    meta?: any;
    uid?: string;
};
type CollectionListingFilterTag = {
    is_selected?: boolean;
    name?: string;
    display?: string;
};
type CollectionListingFilterType = {
    is_selected?: boolean;
    name?: string;
    display?: string;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
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
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type UserInfo = {
    user_id?: string;
    uid?: string;
    email?: string;
    username?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionSchedule = {
    cron?: string;
    end?: string;
    start?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
};
type CreateCollection = {
    allow_facets?: boolean;
    banners: CollectionBanner;
    description?: string;
    seo?: SeoDetail;
    type: string;
    modified_by?: UserInfo;
    allow_sort?: boolean;
    is_active?: boolean;
    visible_facets_keys?: string[];
    priority?: number;
    query?: CollectionQuery[];
    created_by?: UserInfo;
    sort_on?: string;
    slug: string;
    _custom_json?: any;
    _locale_language?: any;
    is_visible?: boolean;
    badge?: CollectionBadge;
    app_id: string;
    name: string;
    logo: CollectionImage;
    _schedule?: CollectionSchedule;
    meta?: any;
    published?: boolean;
    tags?: string[];
};
type CollectionCreateResponse = {
    allow_facets?: boolean;
    banners?: ImageUrls;
    description?: string;
    type?: string;
    allow_sort?: boolean;
    is_active?: boolean;
    visible_facets_keys?: string[];
    priority?: number;
    query?: CollectionQuery[];
    sort_on?: string;
    slug?: string;
    badge?: any;
    app_id?: string;
    name?: string;
    logo?: BannerImage;
    cron?: any;
    _schedule?: any;
    tag?: string[];
    meta?: any;
};
type CollectionDetailResponse = {
    allow_facets?: boolean;
    banners?: ImageUrls;
    description?: string;
    type?: string;
    allow_sort?: boolean;
    is_active?: boolean;
    visible_facets_keys?: string[];
    priority?: number;
    query?: CollectionQuery[];
    slug?: string;
    badge?: any;
    app_id?: string;
    name?: string;
    logo?: Media1;
    cron?: any;
    _schedule?: any;
    tag?: string[];
    meta?: any;
    uid?: string;
};
type UpdateCollection = {
    allow_facets?: boolean;
    banners?: CollectionBanner;
    description?: string;
    seo?: SeoDetail;
    type?: string;
    modified_by?: UserInfo;
    allow_sort?: boolean;
    is_active?: boolean;
    visible_facets_keys?: string[];
    priority?: number;
    query?: CollectionQuery[];
    sort_on?: string;
    slug?: string;
    _locale_language?: any;
    _custom_json?: any;
    is_visible?: boolean;
    badge?: CollectionBadge;
    name?: string;
    logo?: CollectionImage;
    _schedule?: CollectionSchedule;
    meta?: any;
    published?: boolean;
    tags?: string[];
};
type ProductBrand = {
    uid?: number;
    name?: string;
    logo?: Media1;
    action?: Action;
};
type ProductDetailAttribute = {
    value?: string;
    key?: string;
    type?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type Price1 = {
    currency_symbol?: string;
    max?: number;
    currency_code?: string;
    min?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    attributes?: any;
    has_variant?: boolean;
    promo_meta?: any;
    brand?: ProductBrand;
    product_online_date?: string;
    description?: string;
    image_nature?: string;
    medias?: Media1[];
    type?: string;
    highlights?: string[];
    item_code?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    sellable?: boolean;
    short_description?: string;
    color?: string;
    tryouts?: string[];
    rating_count?: number;
    slug: string;
    similars?: string[];
    item_type?: string;
    name?: string;
    uid?: number;
    rating?: number;
    price?: ProductListingPrice;
    teaser_tag?: any;
    discount?: string;
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
    item?: ItemQueryForUserCollection[];
    type?: string;
    query?: CollectionQuery[];
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightItem = {
    sellable_count?: number;
    out_of_stock_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    total_sizes?: number;
    available_articles?: number;
    name?: string;
    article_freshness?: number;
    total_articles?: number;
    available_sizes?: number;
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
    opt_level: string;
    platform?: string;
    company_id?: number;
    brand_ids?: number[];
    enabled?: boolean;
};
type CompanyOptIn = {
    store_ids: number[];
    opt_level: string;
    platform: string;
    modified_on: number;
    company_id: number;
    created_by?: any;
    modified_by?: any;
    created_on: number;
    brand_ids: number[];
    enabled: boolean;
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    uid?: number;
    name?: string;
    company_type?: string;
    business_type?: string;
};
type CompanyBrandDetail = {
    brand_name?: string;
    company_id?: number;
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
    documents?: any[];
    modified_on?: string;
    name?: string;
    address?: any;
    company_id?: number;
    manager?: any;
    additional_contacts?: any[];
    uid?: number;
    store_code?: string;
    store_type?: string;
    timing?: any;
    display_name?: string;
    created_on?: string;
};
type OptinStoreDetails = {
    page?: Page;
    items?: StoreDetail[];
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    multi?: boolean;
    type: string;
    mandatory?: boolean;
    format?: string;
    allowed_values?: string[];
    range?: AttributeSchemaRange;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type AttributeMasterFilter = {
    indexing: boolean;
    depends_on?: string[];
    priority?: number;
};
type GenderDetail = {
    details?: AttributeMasterDetails;
    schema?: AttributeMaster;
    name?: string;
    logo?: string;
    meta?: AttributeMasterMeta;
    description?: string;
    enabled_for_end_consumer?: boolean;
    filters?: AttributeMasterFilter;
    slug?: string;
    departments?: string[];
    is_nested?: boolean;
    id?: string;
};
type CategoriesResponse = {
    slug_key?: string;
    uid?: number;
    name?: string;
    template_slug?: string;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: CategoriesResponse[];
};
type PTErrorResponse = {
    status?: number;
    meta?: any;
    message?: string;
    code?: string;
    errors?: any;
};
type UserSerializer = {
    username?: string;
    user_id?: string;
    uid?: string;
    contact?: string;
    _id?: string;
};
type GetDepartment = {
    item_type?: string;
    modified_on?: string;
    name?: string;
    logo?: string;
    modified_by?: UserSerializer;
    uid?: number;
    priority_order?: number;
    synonyms?: string[];
    page_size?: number;
    created_by?: UserSerializer;
    page_no?: number;
    slug?: string;
    search?: string;
    created_on?: string;
    is_active?: boolean;
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    status?: number;
    meta?: any;
    message?: string;
    code?: string;
    errors?: any;
};
type DepartmentCreateUpdate = {
    tags?: string[];
    name: string;
    logo: string;
    uid?: number;
    priority_order: number;
    synonyms?: string[];
    platforms?: any;
    slug?: string;
    _custom_json?: any;
    _cls?: string;
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
    user_id: string;
    username: string;
    contact?: string;
    super_user?: boolean;
};
type DepartmentModel = {
    verified_by?: UserDetail;
    _custom_json?: any;
    modified_on: string;
    name: string;
    logo: string;
    uid?: number;
    created_by?: UserDetail;
    _id?: any;
    priority_order: number;
    synonyms?: string[];
    modified_by?: UserDetail;
    slug?: string;
    verified_on?: string;
    _cls?: string;
    created_on: string;
    is_active?: boolean;
};
type ProductTemplate = {
    is_archived?: boolean;
    attributes?: string[];
    is_expirable: boolean;
    modified_on?: string;
    name?: string;
    logo?: string;
    is_physical: boolean;
    categories?: string[];
    tag?: string;
    description?: string;
    created_by?: any;
    modified_by?: any;
    slug: string;
    departments?: string[];
    created_on?: string;
    is_active?: boolean;
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type TemplateDetails = {
    is_archived?: boolean;
    attributes?: string[];
    is_expirable: boolean;
    id?: string;
    name?: string;
    logo?: string;
    is_physical: boolean;
    categories?: string[];
    tag?: string;
    description?: string;
    slug: string;
    departments?: string[];
    is_active?: boolean;
};
type Properties = {
    custom_order?: any;
    multi_size?: any;
    no_of_boxes?: any;
    description?: any;
    variants?: any;
    highlights?: any;
    size_guide?: any;
    brand_uid?: any;
    hsn_code?: any;
    product_publish?: any;
    item_code?: any;
    command?: any;
    media?: any;
    short_description?: any;
    is_active?: any;
    trader_type?: any;
    trader?: any;
    return_config?: any;
    sizes?: any;
    product_group_tag?: any;
    country_of_origin?: any;
    category_slug?: any;
    slug?: any;
    item_type?: any;
    currency?: any;
    name?: any;
    teaser_tag?: any;
    tags?: any;
    is_dependent?: any;
};
type GlobalValidation = {
    type?: string;
    title?: string;
    required?: string[];
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
    user_id?: string;
    uid?: string;
    email?: string;
    username?: string;
};
type ProductTemplateExportResponse = {
    status?: string;
    seller_id: number;
    type?: string;
    modified_on?: string;
    completed_on?: string;
    notification_emails?: string[];
    created_by?: UserInfo1;
    task_id: string;
    filters?: any;
    url?: string;
};
type ProductDownloadsResponse = {
    items?: ProductTemplateExportResponse[];
};
type ProductTemplateExportFilterRequest = {
    from_date?: string;
    brands?: string[];
    catalogue_types: string[];
    templates: string[];
    to_date?: string;
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
type Hierarchy = {
    department: number;
    l1: number;
    l2: number;
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
    portrait: string;
    logo: string;
    landscape: string;
};
type Category = {
    id?: string;
    level: number;
    hierarchy?: Hierarchy[];
    marketplaces?: CategoryMapping;
    modified_on?: string;
    name: string;
    priority?: number;
    tryouts?: string[];
    uid?: number;
    created_by?: any;
    synonyms?: string[];
    media?: Media2;
    modified_by?: any;
    slug?: string;
    departments: number[];
    created_on?: string;
    is_active: boolean;
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    level: number;
    hierarchy?: Hierarchy[];
    marketplaces?: CategoryMapping;
    name: string;
    priority?: number;
    tryouts?: string[];
    synonyms?: string[];
    media?: Media2;
    slug?: string;
    departments: number[];
    is_active: boolean;
};
type CategoryCreateResponse = {
    uid?: number;
    message?: string;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type Logo = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type Trader = {
    address?: string[];
    name: string;
    type?: string;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type ReturnConfigResponse = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Image = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type ProductSchemaV2 = {
    tax_identifier?: any;
    moq?: any;
    attributes?: any;
    is_set?: boolean;
    custom_order?: any;
    multi_size?: boolean;
    verified_by?: VerifiedBy;
    is_physical?: boolean;
    no_of_boxes?: number;
    category_uid?: number;
    brand?: Brand;
    description?: string;
    is_image_less_product?: boolean;
    all_identifiers?: string[];
    verified_on?: string;
    departments?: number[];
    variants?: any;
    stage?: string;
    image_nature?: string;
    id?: string;
    is_expirable?: boolean;
    highlights?: string[];
    variant_group?: any;
    size_guide?: string;
    all_sizes?: any[];
    brand_uid?: number;
    hsn_code?: string;
    company_id?: number;
    product_publish?: ProductPublish;
    item_code?: string;
    media?: Media1[];
    category?: any;
    modified_by?: any;
    all_company_ids?: number[];
    pending?: string;
    short_description?: string;
    is_active?: boolean;
    color?: string;
    trader?: Trader[];
    variant_media?: any;
    template_tag?: string;
    sizes?: any[];
    net_quantity?: NetQuantityResponse;
    return_config?: ReturnConfigResponse;
    product_group_tag?: string[];
    l3_mapping?: string[];
    created_by?: any;
    country_of_origin?: string;
    category_slug?: string;
    slug?: string;
    _custom_json?: any;
    created_on?: string;
    images?: Image[];
    item_type?: string;
    currency?: string;
    primary_color?: string;
    name?: string;
    modified_on?: string;
    uid?: number;
    teaser_tag?: any;
    tags?: string[];
    is_dependent?: boolean;
};
type ProductListingResponseV2 = {
    page?: Page;
    items?: ProductSchemaV2[];
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type ProductPublish1 = {
    product_online_date?: string;
    is_set?: boolean;
};
type NetQuantity = {
    value?: number;
    unit?: string;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type ProductCreateUpdateSchemaV2 = {
    tax_identifier: TaxIdentifier;
    attributes?: any;
    is_set?: boolean;
    custom_order?: CustomOrder;
    multi_size?: boolean;
    requester?: string;
    no_of_boxes?: number;
    description?: string;
    is_image_less_product?: boolean;
    action?: string;
    variants?: any;
    departments: number[];
    highlights?: string[];
    variant_group?: any;
    size_guide?: string;
    brand_uid: number;
    company_id: number;
    product_publish?: ProductPublish1;
    item_code: string;
    media?: Media1[];
    short_description?: string;
    is_active?: boolean;
    trader: Trader[];
    change_request_id?: any;
    variant_media?: any;
    template_tag: string;
    return_config: ReturnConfig;
    product_group_tag?: string[];
    net_quantity?: NetQuantity;
    sizes: any[];
    category_slug: string;
    country_of_origin: string;
    bulk_job_id?: string;
    slug: string;
    _custom_json?: any;
    item_type: string;
    currency: string;
    name: string;
    uid?: number;
    teaser_tag?: TeaserTag;
    tags?: string[];
    is_dependent?: boolean;
};
type ProductVariants = {
    brand_uid?: number;
    name?: string;
    category_uid?: number;
    item_code?: string;
    uid?: number;
    media?: Media1[];
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    description?: string;
    enabled_for_end_consumer?: boolean;
    synonyms?: any;
    variant?: boolean;
    departments: string[];
    modified_by?: any;
    details: AttributeMasterDetails;
    unit?: string;
    schema: AttributeMaster;
    raw_key?: string;
    suggestion?: string;
    created_by?: any;
    slug: string;
    created_on?: string;
    is_nested?: boolean;
    modified_on?: string;
    name?: string;
    logo?: string;
    filters: AttributeMasterFilter;
    tags?: string[];
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: ProductSchemaV2;
};
type ValidateIdentifier = {
    primary?: boolean;
    gtin_type: string;
    gtin_value: string;
};
type AllSizes = {
    item_weight_unit_of_measure: string;
    item_width: number;
    item_length: number;
    item_height: number;
    identifiers?: ValidateIdentifier[];
    size: string;
    item_weight: number;
    item_dimensions_unit_of_measure: string;
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
    tax_identifier?: any;
    moq?: any;
    attributes?: any;
    is_set?: boolean;
    custom_order?: any;
    multi_size?: boolean;
    verified_by?: VerifiedBy;
    is_physical?: boolean;
    no_of_boxes?: number;
    category_uid?: number;
    brand?: Brand;
    description?: string;
    is_image_less_product?: boolean;
    all_identifiers?: string[];
    verified_on?: string;
    departments?: number[];
    variants?: any;
    stage?: string;
    image_nature?: string;
    id?: string;
    is_expirable?: boolean;
    highlights?: string[];
    variant_group?: any;
    size_guide?: string;
    all_sizes?: any[];
    brand_uid?: number;
    hsn_code?: string;
    company_id?: number;
    product_publish?: ProductPublished;
    item_code?: string;
    media?: Media1[];
    category?: any;
    modified_by?: any;
    all_company_ids?: number[];
    pending?: string;
    short_description?: string;
    is_active?: boolean;
    color?: string;
    trader?: Trader[];
    variant_media?: any;
    template_tag?: string;
    sizes?: any[];
    net_quantity?: NetQuantityResponse;
    return_config?: ReturnConfigResponse;
    product_group_tag?: string[];
    l3_mapping?: string[];
    created_by?: any;
    country_of_origin?: string;
    category_slug?: string;
    slug?: string;
    _custom_json?: any;
    created_on?: string;
    images?: Image[];
    item_type?: string;
    currency?: string;
    primary_color?: string;
    name?: string;
    modified_on?: string;
    uid?: number;
    teaser_tag?: any;
    tags?: string[];
    is_dependent?: boolean;
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
    total?: number;
    template_tag?: string;
    modified_on?: string;
    file_path?: string;
    cancelled_records?: string[];
    company_id?: number;
    failed_records?: string[];
    cancelled?: number;
    failed?: number;
    created_by?: UserDetail1;
    succeed?: number;
    modified_by?: UserDetail1;
    template?: ProductTemplate;
    created_on?: string;
    stage?: string;
    is_active?: boolean;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type BulkJob = {
    total?: number;
    tracking_url?: string;
    custom_template_tag?: string;
    template_tag?: string;
    modified_on?: string;
    file_path?: string;
    cancelled?: number;
    company_id: number;
    cancelled_records?: any[];
    failed_records?: any[];
    failed?: number;
    created_by?: UserInfo1;
    succeed?: number;
    modified_by?: UserInfo1;
    created_on: string;
    stage?: string;
    is_active?: boolean;
};
type BulkResponse = {
    modified_on?: string;
    batch_id: string;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
    created_on: string;
    is_active?: boolean;
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
    user_id?: string;
    username?: string;
    company_id?: number;
};
type Items = {
    total?: number;
    id?: string;
    tracking_url?: string;
    modified_on?: string;
    file_path?: string;
    cancelled_records?: string[];
    failed_records?: string[];
    company_id?: number;
    cancelled?: number;
    failed?: number;
    created_by?: UserCommon;
    succeed?: number;
    retry?: number;
    modified_by?: UserCommon;
    created_on?: string;
    stage?: string;
    is_active?: boolean;
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
    item_id?: number;
    company_id?: number;
    size?: string;
};
type ProductSizeDeleteResponse = {
    success?: boolean;
    data?: ProductSizeDeleteDataResponse;
};
type InventoryResponse = {
    store?: any;
    price_transfer?: number;
    currency?: string;
    item_id?: number;
    seller_identifier?: string;
    identifiers?: any;
    sellable_quantity?: number;
    inventory_updated_on?: string;
    uid?: string;
    price_effective?: number;
    size?: string;
    price?: number;
    quantity?: number;
};
type InventoryResponsePaginated = {
    page?: Page;
    items?: InventoryResponse[];
};
type GTIN = {
    primary?: boolean;
    gtin_type: string;
    gtin_value: string;
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
    price_transfer?: number;
    item_weight_unit_of_measure?: string;
    is_set?: boolean;
    item_width?: number;
    item_length?: number;
    item_height?: number;
    currency: string;
    identifiers: GTIN[];
    expiration_date?: string;
    set?: InventorySet;
    price_effective: number;
    store_code: string;
    size: string;
    price?: number;
    item_dimensions_unit_of_measure?: string;
    item_weight?: number;
    quantity: number;
};
type ItemQuery = {
    item_code?: string;
    uid?: number;
    brand_uid?: number;
};
type InventoryRequest = {
    sizes: InvSize[];
    company_id: number;
    item: ItemQuery;
};
type BrandMeta = {
    name: string;
    id: number;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    sellable?: QuantityBase;
};
type DimensionResponse = {
    is_default: boolean;
    length: number;
    height: number;
    unit: string;
    width: number;
};
type CompanyMeta = {
    id: number;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type ReturnConfig1 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type PriceMeta = {
    currency: string;
    marked: number;
    updated_at?: string;
    effective: number;
    tp_notes?: any;
    transfer: number;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type InventorySellerResponse = {
    tax_identifier?: any;
    identifier: any;
    is_set?: boolean;
    raw_meta?: any;
    trace_id?: string;
    brand: BrandMeta;
    expiration_date?: string;
    stage?: string;
    quantities?: Quantities;
    track_inventory?: boolean;
    dimension: DimensionResponse;
    item_id: number;
    seller_identifier: string;
    fragile: boolean;
    modified_by?: UserSerializer;
    is_active?: boolean;
    store: StoreMeta;
    company: CompanyMeta;
    fynd_article_code: string;
    trader?: Trader1[];
    return_config?: ReturnConfig1;
    fynd_item_code: string;
    created_by?: UserSerializer;
    country_of_origin: string;
    fynd_meta?: any;
    size: string;
    added_on_store?: string;
    _custom_json?: any;
    tags?: string[];
    total_quantity: number;
    meta?: any;
    uid: string;
    set?: InventorySet;
    weight: WeightResponse;
    price: PriceMeta;
    manufacturer: ManufacturerResponse;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type BrandMeta1 = {
    name?: string;
    id?: number;
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
type DimensionResponse1 = {
    height?: number;
    unit?: string;
    length?: number;
    width?: number;
};
type ArticleStoreResponse = {
    uid?: number;
    name?: string;
    store_code?: string;
    store_type?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type ReturnConfig2 = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type PriceArticle = {
    currency?: string;
    marked?: number;
    effective?: number;
    tp_notes?: any;
    transfer?: number;
};
type ManufacturerResponse1 = {
    address?: string;
    name?: string;
    is_default?: boolean;
};
type GetInventories = {
    tax_identifier?: any;
    identifier?: any;
    is_set?: boolean;
    trace_id?: string;
    brand?: BrandMeta1;
    expiration_date?: string;
    quantities?: QuantitiesArticle;
    stage?: string;
    id?: string;
    track_inventory?: boolean;
    dimension?: DimensionResponse1;
    item_id?: number;
    seller_identifier?: string;
    inventory_updated_on?: string;
    platforms?: any;
    modified_by?: UserSerializer;
    store?: ArticleStoreResponse;
    company?: CompanyMeta1;
    trader?: Trader2[];
    return_config?: ReturnConfig2;
    created_by?: UserSerializer;
    country_of_origin?: string;
    size?: string;
    date_meta?: DateMeta;
    tags?: string[];
    total_quantity?: number;
    uid?: string;
    weight?: WeightResponse1;
    price?: PriceArticle;
    manufacturer?: ManufacturerResponse1;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    total?: number;
    file_path?: string;
    modified_on?: string;
    cancelled_records?: string[];
    cancelled?: number;
    company_id?: number;
    failed_records?: string[];
    failed?: number;
    stage?: string;
    created_by?: any;
    succeed?: number;
    modified_by?: any;
    created_on?: string;
    is_active?: boolean;
    id?: string;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    item_weight_unit_of_measure?: string;
    currency?: string;
    trace_id?: string;
    seller_identifier: string;
    total_quantity?: number;
    price_marked?: number;
    expiration_date?: string;
    price_effective?: number;
    store_code: string;
    price?: number;
    item_dimensions_unit_of_measure?: string;
    tags?: string[];
    quantity?: number;
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    company_id: number;
    batch_id: string;
    user?: any;
};
type InventoryExportQuantityFilter = {
    max?: number;
    operators: string;
    min?: number;
};
type InventoryExportAdvanceOption = {
    store_ids?: number[];
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    to_date?: string;
    brand_ids?: number[];
};
type InventoryExportJob = {
    status?: string;
    seller_id: number;
    type: string;
    completed_on?: string;
    notification_emails?: string[];
    task_id: string;
    filters?: InventoryExportAdvanceOption;
    url?: string;
};
type InventoryExportRequest = {
    store?: number[];
    type?: string;
    brand?: number[];
};
type InventoryExportResponse = {
    status?: string;
    seller_id: number;
    type?: string;
    modified_on?: string;
    notification_emails?: string[];
    created_by?: string;
    task_id: string;
    filters?: any;
    created_on?: string;
};
type InventoryJobFilters = {
    from_date?: string;
    brands?: string[];
    quantity?: InventoryExportQuantityFilter;
    stores?: string[];
    to_date?: string;
};
type InventoryJobDetailResponse = {
    status?: string;
    seller_id: number;
    type?: string;
    modified_on?: string;
    completed_on?: string;
    cancelled_on?: string;
    notification_emails?: string[];
    created_by?: UserDetail;
    task_id: string;
    filters: InventoryJobFilters;
    url: string;
    created_on?: string;
    cancelled_by?: UserDetail;
    id: string;
};
type InventoryExportJobListResponse = {
    items: InventoryJobDetailResponse;
};
type InventoryExportFilter = {
    store_ids: number[];
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    to_date?: string;
    brand_ids?: number[];
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
    store_ids?: number[];
    from_date?: string;
    quantity?: InventoryExportQuantityFilter;
    to_date?: string;
    brand_ids?: number[];
};
type InventoryExportCreateResponse = {
    status?: string;
    seller_id: number;
    type?: string;
    modified_on?: string;
    completed_on?: string;
    cancelled_on?: string;
    notification_emails?: string[];
    created_by?: UserDetail;
    task_id: string;
    filters: InventoryExportCreateFilters;
    url: string;
    created_on?: string;
    cancelled_by?: UserDetail;
    id: string;
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
    trace_id?: string;
    seller_identifier: string;
    store_id: number;
    total_quantity?: number;
    price_marked?: number;
    expiration_date?: string;
    price_effective?: number;
    tags?: string[];
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
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnCodesObject = {
    threshold2?: number;
    threshold1?: number;
    tax_on_mrp?: boolean;
    hsn_code?: string;
    modified_on?: string;
    company_id?: number;
    tax1?: number;
    tax2?: number;
    hs2_code?: string;
    tax_on_esp?: boolean;
    id?: string;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type HsnUpsert = {
    threshold2?: number;
    threshold1: number;
    tax_on_mrp: boolean;
    hsn_code: string;
    company_id: number;
    uid?: number;
    tax1: number;
    tax2?: number;
    hs2_code: string;
    tax_on_esp?: boolean;
    is_active?: boolean;
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
    has_previous?: boolean;
    current?: string;
    item_total?: number;
};
type TaxSlab = {
    effective_date: string;
    threshold: number;
    cess?: number;
    rate: number;
};
type HSNDataInsertV2 = {
    reporting_hsn: string;
    type: string;
    hsn_code: string;
    modified_on?: string;
    description: string;
    created_by?: any;
    hsn_code_id?: string;
    country_code: string;
    modified_by?: any;
    taxes: TaxSlab[];
    created_on?: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type BrandItem = {
    banners?: ImageUrls;
    name?: string;
    logo?: Media;
    uid?: number;
    slug?: string;
    action?: Action;
    departments?: string[];
    discount?: string;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    name?: string;
    logo?: Media;
    uid?: number;
    priority_order?: number;
    slug?: string;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    banners?: ImageUrls;
    name?: string;
    childs?: any[];
    uid?: number;
    action?: Action;
    slug?: string;
    _custom_json?: any;
};
type SecondLevelChild = {
    banners?: ImageUrls;
    name?: string;
    childs?: ThirdLevelChild[];
    uid?: number;
    action?: Action;
    slug?: string;
    _custom_json?: any;
};
type Child = {
    banners?: ImageUrls;
    name?: string;
    childs?: SecondLevelChild[];
    uid?: number;
    action?: Action;
    slug?: string;
    _custom_json?: any;
};
type CategoryItems = {
    banners?: ImageUrls;
    name?: string;
    childs?: Child[];
    uid?: number;
    slug?: string;
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
    filters?: ProductFilters[];
    items?: ProductListingDetail[];
    page: Page;
};
type ProductDetail = {
    attributes?: any;
    has_variant?: boolean;
    promo_meta?: any;
    brand?: ProductBrand;
    product_online_date?: string;
    description?: string;
    image_nature?: string;
    medias?: Media1[];
    type?: string;
    highlights?: string[];
    item_code?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    short_description?: string;
    color?: string;
    tryouts?: string[];
    rating_count?: number;
    slug: string;
    similars?: string[];
    item_type?: string;
    name?: string;
    uid?: number;
    rating?: number;
    teaser_tag?: any;
};
type InventoryPage = {
    type: string;
    next_id?: string;
    has_next?: boolean;
    has_previous?: boolean;
    item_total: number;
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
    quantity?: number;
    group_id?: string;
    article_assignment?: ArticleAssignment;
};
type AssignStore = {
    app_id: string;
    store_ids?: number[];
    articles: AssignStoreArticle[];
    company_id?: number;
    channel_identifier?: string;
    pincode: string;
    channel_type?: string;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    status: boolean;
    group_id?: string;
    item_id: number;
    store_id?: number;
    company_id?: number;
    price_marked?: number;
    meta?: any;
    uid?: string;
    strategy_wise_listing?: any[];
    _id?: string;
    price_effective?: number;
    size: string;
    quantity: number;
    store_pincode?: number;
    article_assignment: ArticleAssignment1;
    s_city?: string;
    index?: number;
};
type UserSerializer1 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type InvoiceCredSerializer = {
    username?: string;
    enabled?: boolean;
    password?: string;
};
type InvoiceDetailsSerializer = {
    e_waybill?: InvoiceCredSerializer;
    e_invoice?: InvoiceCredSerializer;
};
type GetAddressSerializer = {
    address1?: string;
    country?: string;
    state?: string;
    longitude?: number;
    latitude?: number;
    landmark?: string;
    address2?: string;
    country_code?: string;
    pincode?: number;
    address_type?: string;
    city?: string;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type UserSerializer2 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type GetCompanySerializer = {
    verified_by?: UserSerializer2;
    modified_on?: string;
    name?: string;
    business_type?: string;
    stage?: string;
    reject_reason?: string;
    uid?: number;
    created_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer2;
    verified_on?: string;
    created_on?: string;
    company_type?: string;
};
type LocationManagerSerializer = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    open: boolean;
    opening?: LocationTimingSerializer;
    closing?: LocationTimingSerializer;
    weekday: string;
};
type GetLocationSerializer = {
    verified_by?: UserSerializer1;
    contact_numbers?: SellerPhoneNumber[];
    verified_on?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    stage?: string;
    address: GetAddressSerializer;
    phone_number: string;
    notification_emails?: string[];
    modified_by?: UserSerializer1;
    integration_type?: LocationIntegrationType;
    company?: GetCompanySerializer;
    manager?: LocationManagerSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    created_by?: UserSerializer1;
    store_type?: string;
    _custom_json?: any;
    created_on?: string;
    documents?: Document[];
    modified_on?: string;
    name: string;
    code: string;
    uid?: number;
    timing?: LocationDayWiseSerializer[];
    display_name: string;
    warnings?: any;
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
    app_id: string;
    name?: string;
    logo?: string;
    uid: number;
    _custom_json?: any;
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
type ContactDetails = {
    phone?: SellerPhoneNumber[];
    emails?: string[];
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
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
    franchise_enabled?: boolean;
    verified_by?: UserSerializer;
    uid: number;
    warnings?: any;
    modified_on?: string;
    documents?: Document[];
    mode?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    addresses?: GetAddressSerializer[];
    contact_details?: ContactDetails;
    business_country_info?: BusinessCountryInfo;
    name?: string;
    business_info?: string;
    stage?: string;
    company_type: string;
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer[];
    created_on?: string;
    business_details?: BusinessDetails;
    _custom_json?: any;
    business_type: string;
    created_by?: UserSerializer;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    longitude: number;
    state: string;
    address1: string;
    city: string;
    country_code?: string;
    address2?: string;
    pincode: number;
    address_type: string;
    country: string;
    landmark?: string;
    latitude: number;
};
type UpdateCompany = {
    taxes?: CompanyTaxesSerializer1[];
    name?: string;
    business_details?: BusinessDetails;
    franchise_enabled?: boolean;
    _custom_json?: any;
    warnings?: any;
    documents?: Document[];
    contact_details?: ContactDetails;
    business_type?: string;
    business_info?: string;
    addresses?: CreateUpdateAddressSerializer[];
    reject_reason?: string;
    company_type?: string;
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
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    uid?: number;
    product?: DocumentsObj;
    brand?: DocumentsObj;
    stage?: string;
    company_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    verified_by?: UserSerializer;
    uid?: number;
    slug_key?: string;
    warnings?: any;
    modified_on?: string;
    logo?: string;
    mode?: string;
    modified_by?: UserSerializer;
    verified_on?: string;
    _locale_language?: any;
    name: string;
    synonyms?: string[];
    banner?: BrandBannerSerializer;
    stage?: string;
    description?: string;
    created_on?: string;
    _custom_json?: any;
    created_by?: UserSerializer;
    reject_reason?: string;
};
type CreateUpdateBrandRequestSerializer = {
    _locale_language?: any;
    name: string;
    uid?: number;
    _custom_json?: any;
    synonyms?: string[];
    brand_tier?: string;
    banner?: BrandBannerSerializer;
    logo: string;
    description?: string;
    company_id?: number;
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanySerializer = {
    business_country_info?: BusinessCountryInfo;
    name?: string;
    created_on?: string;
    modified_by?: UserSerializer;
    verified_by?: UserSerializer;
    uid?: number;
    _custom_json?: any;
    verified_on?: string;
    modified_on?: string;
    business_type: string;
    details?: CompanyDetails;
    created_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    market_channels?: string[];
    reject_reason?: string;
    stage?: string;
    company_type: string;
    notification_emails?: string[];
};
type CompanyBrandSerializer = {
    created_on?: string;
    modified_by?: UserSerializer;
    verified_by?: UserSerializer;
    uid?: number;
    reject_reason?: string;
    warnings?: any;
    verified_on?: string;
    company?: CompanySerializer;
    modified_on?: string;
    created_by?: UserSerializer;
    brand?: GetBrandResponseSerializer;
    stage?: string;
};
type CompanyBrandListSerializer = {
    page?: Page;
    items?: CompanyBrandSerializer[];
};
type CompanyBrandPostRequestSerializer = {
    company: number;
    uid?: number;
    brands: number[];
};
type HolidayDateSerializer = {
    start_date: string;
    end_date: string;
};
type HolidaySchemaSerializer = {
    holiday_type: string;
    title: string;
    date: HolidayDateSerializer;
};
type AddressSerializer = {
    longitude: number;
    city?: string;
    address1?: string;
    state?: string;
    country_code?: string;
    address2?: string;
    pincode?: number;
    address_type?: string;
    country?: string;
    landmark?: string;
    latitude: number;
};
type LocationSerializer = {
    code: string;
    notification_emails?: string[];
    name: string;
    gst_credentials?: InvoiceDetailsSerializer;
    store_type?: string;
    uid?: number;
    _custom_json?: any;
    warnings?: any;
    company: number;
    display_name: string;
    manager?: LocationManagerSerializer;
    address: AddressSerializer;
    timing?: LocationDayWiseSerializer[];
    stage?: string;
    documents?: Document[];
    contact_numbers?: SellerPhoneNumber[];
    holiday?: HolidaySchemaSerializer[];
    product_return_config?: ProductReturnConfigSerializer;
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
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    title?: string;
    remove?: DisplayMetaDict;
    subtitle?: string;
    description?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponSchedule = {
    start?: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    cron?: string;
};
type Validity = {
    priority?: number;
};
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type Rule = {
    key?: number;
    min?: number;
    max?: number;
    value?: number;
    discount_qty?: number;
};
type PostOrder = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
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
type PriceRange = {
    min?: number;
    max?: number;
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
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    coupon_allowed?: boolean;
    user_groups?: number[];
    user_type?: string;
    platforms?: string[];
    post_order?: PostOrder;
    payments?: any;
    price_range?: PriceRange;
    ordering_stores?: number[];
    uses?: UsesRestriction;
    bulk_bundle?: BulkBundleRestriction;
};
type RuleDefinition = {
    type: string;
    calculate_on: string;
    scope?: string[];
    is_exact?: boolean;
    auto_apply?: boolean;
    value_type: string;
    applicable_on: string;
    currency_code?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type CouponAdd = {
    display_meta: DisplayMeta;
    code: string;
    ownership: Ownership;
    type_slug: string;
    _schedule?: CouponSchedule;
    validity: Validity;
    validation?: Validation;
    date_meta?: CouponDateMeta;
    action?: CouponAction;
    rule: Rule[];
    restrictions?: Restrictions;
    identifiers: Identifier;
    rule_definition: RuleDefinition;
    tags?: string[];
    author?: CouponAuthor;
    state?: State;
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
    display_meta: DisplayMeta;
    code: string;
    ownership: Ownership;
    type_slug: string;
    _schedule?: CouponSchedule;
    validity: Validity;
    validation?: Validation;
    date_meta?: CouponDateMeta;
    action?: CouponAction;
    rule: Rule[];
    restrictions?: Restrictions;
    identifiers: Identifier;
    rule_definition: RuleDefinition;
    tags?: string[];
    author?: CouponAuthor;
    state?: State;
};
type CouponPartialUpdate = {
    archive?: boolean;
    schedule?: CouponSchedule;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CompareObject = {
    less_than_equals?: number;
    equals?: number;
    greater_than_equals?: number;
    greater_than?: number;
    less_than?: number;
};
type ItemCriteria = {
    item_store?: number[];
    item_size?: string[];
    item_exclude_id?: number[];
    all_items?: boolean;
    product_tags?: string[];
    buy_rules?: string[];
    item_exclude_sku?: string[];
    item_category?: number[];
    item_id?: number[];
    item_exclude_store?: number[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_company?: number[];
    item_exclude_brand?: number[];
    available_zones?: string[];
    item_exclude_category?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_sku?: string[];
    item_company?: number[];
    cart_total?: CompareObject;
    cart_quantity?: CompareObject;
    item_brand?: number[];
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type DisplayMeta1 = {
    name?: string;
    offer_label?: string;
    offer_text?: string;
    description?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
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
type UsesRemaining1 = {
    user?: number;
    total?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type Restrictions1 = {
    user_id?: string[];
    anonymous_users?: boolean;
    user_groups?: number[];
    platforms?: string[];
    order_quantity?: number;
    post_order?: PostOrder1;
    user_registered?: UserRegistered;
    payments?: PromotionPaymentModes[];
    uses: UsesRestriction1;
};
type DiscountOffer = {
    max_usage_per_transaction?: number;
    discount_price?: number;
    discount_percentage?: number;
    max_discount_amount?: number;
    code?: string;
    discount_amount?: number;
    partial_can_ret?: boolean;
    max_offer_quantity?: number;
    apportion_discount?: boolean;
    min_offer_quantity?: number;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    discount_type: string;
    offer: DiscountOffer;
};
type PromotionSchedule = {
    start: string;
    duration?: number;
    end?: string;
    next_schedule?: any[];
    published: boolean;
    cron?: string;
};
type PromotionListItem = {
    apply_exclusive?: string;
    promotion_type: string;
    application_id: string;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    author?: PromotionAuthor;
    post_order_action?: PromotionAction;
    calculate_on?: string;
    apply_all_discount?: boolean;
    display_meta: DisplayMeta1;
    visiblility?: Visibility;
    ownership: Ownership1;
    stackable?: boolean;
    restrictions?: Restrictions1;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    mode: string;
    code?: string;
    currency?: string;
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    promo_group: string;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    apply_exclusive?: string;
    promotion_type: string;
    application_id: string;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    author?: PromotionAuthor;
    post_order_action?: PromotionAction;
    calculate_on?: string;
    apply_all_discount?: boolean;
    display_meta: DisplayMeta1;
    visiblility?: Visibility;
    ownership: Ownership1;
    stackable?: boolean;
    restrictions?: Restrictions1;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    mode: string;
    code?: string;
    currency?: string;
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    promo_group: string;
};
type PromotionUpdate = {
    apply_exclusive?: string;
    promotion_type: string;
    application_id: string;
    date_meta?: PromotionDateMeta;
    buy_rules: any;
    author?: PromotionAuthor;
    post_order_action?: PromotionAction;
    calculate_on?: string;
    apply_all_discount?: boolean;
    display_meta: DisplayMeta1;
    visiblility?: Visibility;
    ownership: Ownership1;
    stackable?: boolean;
    restrictions?: Restrictions1;
    apply_priority?: number;
    discount_rules: DiscountRule[];
    mode: string;
    code?: string;
    currency?: string;
    _schedule?: PromotionSchedule;
    _custom_json?: any;
    promo_group: string;
};
type PromotionPartialUpdate = {
    archive?: boolean;
    schedule?: PromotionSchedule;
};
type ActivePromosResponse = {
    type?: string;
    created_on?: string;
    example?: string;
    entity_type?: string;
    is_hidden?: boolean;
    title?: string;
    modified_on?: string;
    subtitle?: string;
    description?: string;
    entity_slug?: string;
};
type CartItem = {
    product_id: string;
    size: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type CouponBreakup = {
    coupon_value?: number;
    type?: string;
    code?: string;
    coupon_type?: string;
    is_applied?: boolean;
    max_discount_value?: number;
    message?: string;
    title?: string;
    minimum_cart_value?: number;
    uid?: string;
    description?: string;
    value?: number;
    sub_title?: string;
};
type DisplayBreakup = {
    currency_symbol?: string;
    key?: string;
    display?: string;
    message?: string[];
    value?: number;
    currency_code?: string;
};
type RawBreakup = {
    subtotal?: number;
    total?: number;
    mrp_total?: number;
    vog?: number;
    cod_charge?: number;
    discount?: number;
    you_saved?: number;
    gst_charges?: number;
    coupon?: number;
    convenience_fee?: number;
    fynd_cash?: number;
    delivery_charge?: number;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    total?: number;
    description?: string;
    applicable?: number;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    raw?: RawBreakup;
    loyalty_points?: LoyaltyPoints;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
};
type ProductImage = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type BaseInfo = {
    name?: string;
    uid?: number;
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
    net_quantity?: NetQuantity;
    type?: string;
    categories?: CategoryInfo[];
    images?: ProductImage[];
    brand?: BaseInfo;
    action?: ProductAction;
    item_code?: string;
    uid?: number;
    name?: string;
    slug?: string;
};
type PromoMeta = {
    message?: string;
};
type ProductPrice = {
    currency_symbol?: string;
    effective?: number;
    add_on?: number;
    marked?: number;
    selling?: number;
    currency_code?: string;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type ProductAvailability = {
    is_valid?: boolean;
    out_of_stock?: boolean;
    other_store_quantity?: number;
    sizes?: string[];
    deliverable?: boolean;
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
    type?: string;
    seller?: BaseInfo;
    size?: string;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
    uid?: string;
    parent_item_identifiers?: any;
    store?: BaseInfo;
    extra_meta?: any;
    _custom_json?: any;
    quantity?: number;
};
type CartProductIdentifer = {
    identifier?: string;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type FreeGiftItem = {
    item_name?: string;
    item_id?: number;
    item_images_url?: string[];
    item_price_details?: any;
    item_brand_name?: string;
    item_slug?: string;
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
    article_id?: string;
    quantity?: number;
};
type DiscountRulesApp = {
    raw_offer?: any;
    item_criteria?: any;
    matched_buy_rules?: string[];
    offer?: any;
};
type AppliedPromotion = {
    promotion_type?: string;
    ownership?: Ownership2;
    promo_id?: string;
    mrp_promotion?: boolean;
    applied_free_articles?: AppliedFreeArticles[];
    promotion_group?: string;
    amount?: number;
    offer_text?: string;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRulesApp[];
    article_quantity?: number;
    promotion_name?: string;
};
type CartProductInfo = {
    key?: string;
    is_set?: boolean;
    product?: CartProduct;
    promo_meta?: PromoMeta;
    price?: ProductPriceInfo;
    message?: string;
    availability?: ProductAvailability;
    discount?: string;
    article?: ProductArticle;
    coupon_message?: string;
    parent_item_identifiers?: any;
    bulk_offer?: any;
    identifiers: CartProductIdentifer;
    price_per_unit?: ProductPriceInfo;
    promotions_applied?: AppliedPromotion[];
    quantity?: number;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    message?: string;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    errors?: any;
    message?: string;
    success?: boolean;
};
type ShippingAddress = {
    meta?: any;
    phone?: number;
    country_phone_code?: string;
    email?: string;
    landmark?: string;
    address?: string;
    pincode?: number;
    country?: string;
    address_type?: string;
    area?: string;
    city?: string;
    name?: string;
    area_code: string;
    country_iso_code?: string;
    country_code?: string;
    area_code_slug?: string;
    state?: string;
};
type OpenApiCartServiceabilityRequest = {
    shipping_address: ShippingAddress;
    cart_items?: CartItem;
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
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    message?: string;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type CartItemMeta = {
    group_id?: string;
    primary_item?: boolean;
};
type OpenApiOrderItem = {
    meta?: CartItemMeta;
    product_id: number;
    coupon_effective_discount: number;
    price_marked: number;
    loyalty_discount?: number;
    files?: OpenApiFiles[];
    size: string;
    discount: number;
    price_effective: number;
    delivery_charges: number;
    cod_charges: number;
    cashback_applied: number;
    extra_meta?: any;
    payment_methods: MultiTenderPaymentMethod[];
    employee_discount?: number;
    amount_paid: number;
    quantity?: number;
};
type OpenApiPlatformCheckoutReq = {
    loyalty_discount?: number;
    comment?: string;
    billing_address: ShippingAddress;
    payment_mode?: string;
    cart_value: number;
    delivery_charges: number;
    cod_charges: number;
    cashback_applied: number;
    shipping_address?: ShippingAddress;
    coupon_code: string;
    payment_methods: MultiTenderPaymentMethod[];
    currency_code?: string;
    order_id?: string;
    coupon_value: number;
    files?: OpenApiFiles[];
    affiliate_order_id?: string;
    coupon?: string;
    gstin?: string;
    employee_discount?: any;
    cart_items: OpenApiOrderItem[];
};
type OpenApiCheckoutResponse = {
    order_id: string;
    order_ref_id?: string;
    message?: string;
    success?: boolean;
};
type AbandonedCart = {
    gstin?: string;
    app_id?: string;
    payment_mode?: string;
    articles: any[];
    checkout_mode?: string;
    merge_qty?: boolean;
    cashback: any;
    meta?: any;
    order_id?: string;
    is_default: boolean;
    fc_index_map?: number[];
    is_active?: boolean;
    discount?: number;
    shipments?: any[];
    bulk_coupon_discount?: number;
    coupon?: any;
    pick_up_customer_details?: any;
    comment?: string;
    expire_at: string;
    cart_value?: number;
    delivery_charges?: any;
    promotion?: any;
    cod_charges?: any;
    payments?: any;
    last_modified: string;
    payment_methods?: any[];
    user_id: string;
    fynd_credits?: any;
    created_on: string;
    uid: number;
    buy_now?: boolean;
    _id: string;
    is_archive?: boolean;
};
type AbandonedCartResponse = {
    message?: string;
    success?: boolean;
    result?: any;
    items?: AbandonedCart[];
    page?: Page;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    is_valid?: boolean;
    pan_no?: string;
    pan_config?: any;
    gstin?: string;
    comment?: string;
    delivery_charge_info?: string;
    message?: string;
    currency?: CartCurrency;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    buy_now?: boolean;
    breakup_values?: CartBreakup;
    restrict_checkout?: boolean;
    checkout_mode?: string;
    payment_selection_lock?: PaymentSelectionLock;
    id?: string;
    last_modified?: string;
    coupon_text?: string;
};
type AddProductCart = {
    item_id?: number;
    seller_id?: number;
    display?: string;
    pos?: boolean;
    store_id?: number;
    item_size?: string;
    product_group_tags?: string[];
    article_id?: string;
    parent_item_identifiers?: any;
    extra_meta?: any;
    _custom_json?: any;
    article_assignment?: any;
    quantity?: number;
};
type AddCartRequest = {
    new_cart?: boolean;
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    message?: string;
    partial?: boolean;
    cart?: CartDetailResponse;
    success?: boolean;
};
type UpdateProductCart = {
    item_id?: number;
    item_index?: number;
    item_size?: string;
    _custom_json?: any;
    article_id?: string;
    parent_item_identifiers?: any;
    extra_meta?: any;
    identifiers: CartProductIdentifer;
    quantity?: number;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    message?: string;
    cart?: CartDetailResponse;
    success?: boolean;
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
    meta?: any;
    source?: any;
    created_on?: string;
    user?: any;
    token?: string;
};
type SharedCart = {
    is_valid?: boolean;
    checkout_mode?: string;
    delivery_charge_info?: string;
    message?: string;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    shared_cart_details?: SharedCartDetails;
    id?: string;
    cart_id?: number;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    last_modified?: string;
    coupon_text?: string;
    currency?: CartCurrency;
    buy_now?: boolean;
    uid?: string;
    gstin?: string;
};
type SharedCartResponse = {
    error?: string;
    cart?: SharedCart;
};
type CartList = {
    cart_id?: string;
    user_id?: string;
    created_on?: string;
    cart_value?: string;
    item_counts?: string;
    pick_up_customer_details?: string;
};
type MultiCartResponse = {
    success?: boolean;
    data?: CartList[];
};
type UpdateUserCartMapping = {
    user_id: string;
};
type UserCartMappingResponse = {
    is_valid?: boolean;
    pan_config?: any;
    checkout_mode?: string;
    delivery_charge_info?: string;
    message?: string;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    id?: string;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    user?: UserInfo;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    last_modified?: string;
    coupon_text?: string;
    pan_no?: string;
    currency?: CartCurrency;
    buy_now?: boolean;
    gstin?: string;
};
type DeleteCartDetailResponse = {
    message?: string;
    success?: boolean;
};
type CartItemCountResponse = {
    user_cart_items_count?: number;
};
type PageCoupon = {
    total_item_count?: number;
    total?: number;
    current?: number;
    has_next?: boolean;
    has_previous?: boolean;
};
type Coupon = {
    coupon_value?: number;
    coupon_type?: string;
    is_applied?: boolean;
    max_discount_value?: number;
    message?: string;
    title?: string;
    expires_on?: string;
    minimum_cart_value?: number;
    is_applicable?: boolean;
    description?: string;
    coupon_code?: string;
    sub_title?: string;
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
    phone?: string;
    created_by_user_id?: string;
    address_type?: string;
    checkout_mode?: string;
    area_code?: string;
    country_code?: string;
    state?: string;
    meta?: any;
    is_active?: boolean;
    country?: string;
    area?: string;
    name?: string;
    city?: string;
    is_default_address?: boolean;
    id?: string;
    area_code_slug?: string;
    cart_id?: string;
    email?: string;
    landmark?: string;
    tags?: string[];
    user_id?: string;
    address?: string;
    geo_location?: GeoLocation;
    google_map_point?: any;
};
type PlatformGetAddressesResponse = {
    address?: PlatformAddress[];
};
type SaveAddressResponse = {
    id?: string;
    is_default_address?: boolean;
    success?: boolean;
};
type UpdateAddressResponse = {
    is_updated?: boolean;
    id?: string;
    is_default_address?: boolean;
    success?: boolean;
};
type DeleteAddressResponse = {
    id?: string;
    is_deleted?: boolean;
};
type PlatformSelectCartAddressRequest = {
    cart_id?: string;
    checkout_mode?: string;
    id?: string;
    billing_address_id?: string;
};
type ShipmentResponse = {
    promise?: ShipmentPromise;
    dp_id?: string;
    dp_options?: any;
    fulfillment_type?: string;
    shipments?: number;
    box_type?: string;
    items?: CartProductInfo[];
    order_type?: string;
    shipment_type?: string;
    fulfillment_id?: number;
};
type CartShipmentsResponse = {
    cart_id?: number;
    is_valid?: boolean;
    gstin?: string;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    error?: boolean;
    breakup_values?: CartBreakup;
    checkout_mode?: string;
    last_modified?: string;
    coupon_text?: string;
    delivery_charge_info?: string;
    message?: string;
    currency?: CartCurrency;
    shipments?: ShipmentResponse[];
    buy_now?: boolean;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    uid?: string;
    id?: string;
};
type UpdateCartShipmentItem = {
    article_uid: string;
    shipment_type: string;
    quantity?: number;
};
type UpdateCartShipmentRequest = {
    shipments: UpdateCartShipmentItem[];
};
type PlatformCartMetaRequest = {
    pan_no?: string;
    comment?: string;
    checkout_mode?: string;
    gstin?: string;
    pick_up_customer_details?: any;
};
type CartMetaResponse = {
    message?: string;
};
type CartMetaMissingResponse = {
    errors?: string[];
};
type StaffCheckout = {
    employee_code?: string;
    user: string;
    last_name: string;
    first_name: string;
    _id: string;
};
type Files = {
    key: string;
    values: string[];
};
type PlatformCartCheckoutDetailRequest = {
    callback_url?: string;
    billing_address_id?: string;
    payment_mode: string;
    checkout_mode?: string;
    staff?: StaffCheckout;
    meta?: any;
    device_id?: string;
    payment_params?: any;
    extra_meta?: any;
    id: string;
    aggregator?: string;
    billing_address?: any;
    merchant_code?: string;
    address_id?: string;
    order_type: string;
    ordering_store?: number;
    user_id: string;
    payment_auto_confirm?: boolean;
    pick_at_store_uid?: number;
    pos?: boolean;
    files?: Files[];
    delivery_address?: any;
    payment_identifier?: string;
};
type CheckCart = {
    is_valid?: boolean;
    checkout_mode?: string;
    order_id?: string;
    delivery_charge_order_value?: number;
    cod_available?: boolean;
    delivery_charge_info?: string;
    message?: string;
    error_message?: string;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    id?: string;
    store_emps?: any[];
    cart_id?: number;
    comment?: string;
    delivery_promise?: ShipmentPromise;
    success?: boolean;
    delivery_charges?: number;
    items?: CartProductInfo[];
    breakup_values?: CartBreakup;
    cod_charges?: number;
    last_modified?: string;
    coupon_text?: string;
    user_type?: string;
    currency?: CartCurrency;
    cod_message?: string;
    buy_now?: boolean;
    uid?: string;
    gstin?: string;
    store_code?: string;
};
type CartCheckoutResponse = {
    callback_url?: string;
    order_id?: string;
    payment_confirm_url?: string;
    app_intercept_url?: string;
    data?: any;
    message?: string;
    success?: boolean;
    cart?: CheckCart;
};
type CartDeliveryModesResponse = {
    pickup_stores?: number[];
    available_modes?: string[];
};
type PickupStoreDetail = {
    phone?: string;
    email?: string;
    landmark?: string;
    address?: string;
    pincode?: number;
    country?: string;
    address_type?: string;
    area?: string;
    city?: string;
    uid?: number;
    name?: string;
    area_code?: string;
    id?: number;
    store_code?: string;
    area_code_slug?: string;
    state?: string;
};
type StoreDetailsResponse = {
    items?: PickupStoreDetail[];
};
type UpdateCartPaymentRequest = {
    payment_mode?: string;
    merchant_code?: string;
    address_id?: string;
    aggregator_name?: string;
    id?: string;
    payment_identifier?: string;
};
type CouponValidity = {
    display_message_en?: string;
    code?: string;
    discount?: number;
    title?: string;
    valid?: boolean;
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
