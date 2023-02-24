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
    serviceability: Serviceability;
    documentEngine: DocumentEngine;
    application(applicationId: any): PlatformApplicationClient;
    setExtraHeaders(header: any): void;
}
declare namespace PlatformClient {
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, SessionExpiry, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, FilterInfoOption, FiltersInfo, ShipmentItemFulFillingStore, PaymentModeInfo, ShipmentStatus, Prices, UserDataInfo, GSTDetailsData, PlatformItem, BagUnit, ShipmentItem, ShipmentInternalPlatformViewResponse, Error, ShipmentPayments, OrderDetailsData, UserDetailsData, ShipmentStatusData, PlatformDeliveryAddress, OrderBrandName, BagConfigs, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, OrderBagArticle, BagGST, Identifier, FinancialBreakup, OrderBags, TrackingList, FulfillingStore, DPDetailsData, BagStateMapper, BagStatusHistory, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailItem, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Brand, BagReturnableCancelableStatus, Attributes, Item, PDFLinks, AffiliateMeta, BuyerDetails, EInvoice, EinvoiceInfo, ShipmentTimeStamp, LockData, DebugInfo, Formatted, ShipmentMeta, AffiliateDetails, ReturnConfig, Dimensions, Weight, Article, StoreAddress, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, Store, B2BPODetails, BagMeta, BagGSTDetails, Dates, ArticleDetails, AffiliateBagDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, EntityReasonData, EntitiesReasons, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, ReasonsData, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, OrderPriority, MarketPlacePdf, AffiliateBag, UserData, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderInfo, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryOrderConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, LineItem, ProcessingDates, Shipment, BillingInfo, TaxInfo, ShippingInfo, PaymentMethod, PaymentInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConifgErrorResponse, CreateChannelConfigResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, ProductBundleUpdateRequest, Price, LimitedProductData, Size, GetProducts, GetProductBundleResponse, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, MetaFields, ApplicationItemMOQ, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductFiltersValue, ProductFiltersKey, ProductFilters, ProductSortOn, GetCollectionQueryOptionResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, BannerImage, ImageUrls, CollectionQuery, Media1, GetCollectionDetailNest, GetCollectionListingResponse, CollectionImage, CollectionBanner, UserInfo, SeoDetail, CollectionBadge, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, CategoryMappingValues, CategoryMapping, Hierarchy, Media2, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, CategoryUpdateResponse, SingleCategoryResponse, ReturnConfigResponse, Image, ProductPublished, Logo, NetQuantityResponse, Product, ProductListingResponse, TaxIdentifier, CustomOrder, ProductPublish, TeaserTag, Trader, NetQuantity, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, ListALLSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, ReturnConfig1, ManufacturerResponse, DimensionResponse, BrandMeta, WeightResponse, QuantityBase, Quantities, CompanyMeta, PriceMeta, Trader1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ReturnConfig2, DimensionResponse1, BrandMeta1, WeightResponse1, Quantity, QuantitiesArticle, CompanyMeta1, PriceArticle, Trader2, ManufacturerResponse1, ArticleStoreResponse, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, PageResponse, HsnCodesObject, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ProductReturnConfigSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, SellerPhoneNumber, LocationManagerSerializer, UserSerializer1, UserSerializer2, GetAddressSerializer, GetCompanySerializer, LocationTimingSerializer, LocationDayWiseSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, Website, BusinessDetails, BusinessCountryInfo, CompanyTaxesSerializer, ContactDetails, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, LocationSerializer, BulkLocationSerializer, _ArticleQuery, _ArticleAssignment, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Rule, DisplayMetaDict, DisplayMeta, Validation, State, CouponAuthor, CouponAction, Ownership, CouponSchedule, RuleDefinition, PaymentAllowValue, PaymentModes, PriceRange, PostOrder, UsesRemaining, UsesRestriction, BulkBundleRestriction, Restrictions, Validity, CouponDateMeta, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, DisplayMeta1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionAction, PromotionAuthor, PromotionDateMeta, Ownership1, PromotionSchedule, UserRegistered, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, UsesRemaining1, UsesRestriction1, Restrictions1, Visibility, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, RawBreakup, DisplayBreakup, CouponBreakup, LoyaltyPoints, CartBreakup, ProductPrice, ProductPriceInfo, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, ProductAvailability, BaseInfo, ActionQuery, ProductAction, CategoryInfo, Tags, ProductImage, CartProduct, CouponDetails, BasePrice, ArticlePriceInfo, ProductArticle, PromoMeta, CartProductIdentifer, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, CartItemMeta, OpenApiFiles, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, ServiceabilityrErrorResponse, ApplicationServiceabilityConfig, ApplicationServiceabilityConfigResponse, EntityRegionView_Request, EntityRegionView_Error, EntityRegionView_Items, EntityRegionView_page, EntityRegionView_Response, ListViewProduct, ListViewChannels, ListViewItems, ListViewSummary, ZoneDataItem, ListViewResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, UpdateZoneData, ZoneUpdateRequest, ZoneSuccessResponse, GetZoneDataViewItems, GetSingleZoneDataViewResponse, CreateZoneData, ZoneRequest, ZoneResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, CreatedByResponse, DocumentsResponse, IntegrationTypeResponse, ContactNumberResponse, ProductReturnConfigResponse, Dp, LogisticsResponse, ModifiedByResponse, EinvoiceResponse, EwayBillResponse, GstCredentialsResponse, MobileNo, ManagerResponse, WarningsResponse, OpeningClosing, TimmingResponse, AddressResponse, ItemResponse, GetStoresViewResponse, GenerateBulkInvoiceLabelShipment, GenerateBulkInvoiceOrLabelUrl, DocumentType, BulkListBadRequestResponse, BulkListFailedResponse, SuccessResponseGenerateBulkShipment, SuccessResponseBulkStatus, GenerateBulkUrlSuccessResponse, InternalErrorResponseGenerateBulkShipment, BadRequestResponseGenerateBulkUrl, InternalErrorResponseGenerateBulkUrl, GenerateBulkShipment, GenerateBulkUrl, GetBulkStatusRequest, BadRequestResponseGenerateBulkItemParameters, BadRequestResponseGenerateBulkItem, SuccessResponseGenerateBulk, BadRequestResponseGenerateBulk, InternalErrorResponseGenerateBulk, ShippingToAddress, SellerAddress, BoxDetails, GenerateBulkBoxLabel, GenerateBulkShipmentLabel, GenerateNoc, PackageDetails, PackageItemDetails, GenerateBulkPackageLabel, SignedSuccessResponse, BulkPresignedSuccessResponse, SignedBadRequestResponse, SignedFailedResponse, StatusSuccessResponse, StatusBadRequestResponse, StatusFailedResponse, GenerateManifest, GeneratePresignedManifestUrl, ManifestLink, GenerateManifestUrlSuccessResponse, ManifestListFailedResponse, InvoiceLabelPresignedRequestBody };
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
import Serviceability = require("./client/ServiceabilityPlatformClient");
import DocumentEngine = require("./client/DocumentEnginePlatformClient");
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
    priority: any;
    should_notify?: boolean;
    success_message?: string;
    poll_for_assignment?: PollForAssignment;
};
type EditCustomFormPayload = {
    title: string;
    inputs: any[];
    description?: string;
    priority: any;
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
    priority?: any;
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
    type: any;
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
    type: any;
};
type TicketContent = {
    title: string;
    description?: string;
    attachments?: TicketAsset[];
};
type AddTicketPayload = {
    created_by?: any;
    status?: string;
    priority?: any;
    category: string;
    content: TicketContent;
    _custom_json?: any;
};
type Priority = {
    key: any;
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
    source: any;
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
type DateMeta = {
    created_on?: string;
    modified_on?: string;
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
    type: any;
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
    value?: string;
};
type SendOtpEmailCommsTemplate = {
    key?: string;
    value?: string;
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
};
type SendOtpCommsReqEmail = {
    otp_length?: number;
    expiry?: number;
    template?: SendOtpSmsCommsTemplate;
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
    excluded_fields: string[];
    created: boolean;
    display_fields: string[];
    app_id: string;
    aggregators?: any[];
};
type ErrorCodeDescription = {
    description: string;
    success: boolean;
    code: string;
};
type PaymentGatewayConfig = {
    merchant_salt: string;
    key: string;
    config_type: string;
    secret: string;
    is_active?: boolean;
};
type PaymentGatewayConfigRequest = {
    aggregator_name?: PaymentGatewayConfig;
    is_active?: boolean;
    app_id: string;
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
    error: ErrorCodeAndDescription;
    success: boolean;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentApp = {
    logos?: PaymentModeLogo;
    display_name?: string;
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    fynd_vpa?: string;
    intent_app_error_list?: string[];
    display_name?: string;
    nickname?: string;
    display_priority?: number;
    card_name?: string;
    card_number?: string;
    name?: string;
    cod_limit?: number;
    card_reference?: string;
    cod_limit_per_order?: number;
    retry_count?: number;
    code?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    exp_month?: number;
    card_type?: string;
    card_id?: string;
    card_brand_image?: string;
    logo_url?: PaymentModeLogo;
    card_isin?: string;
    card_issuer?: string;
    compliant_with_tokenisation_guidelines?: boolean;
    expired?: boolean;
    aggregator_name: string;
    card_fingerprint?: string;
    exp_year?: number;
    remaining_limit?: number;
    merchant_code?: string;
    timeout?: number;
    card_brand?: string;
    intent_app?: IntentApp[];
    intent_flow?: boolean;
    card_token?: string;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    anonymous_enable?: boolean;
    display_name: string;
    is_pay_by_card_pl?: boolean;
    display_priority: number;
    name: string;
    list?: PaymentModeList[];
    aggregator_name?: string;
    save_card?: boolean;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    payouts_aggregators: any[];
    customers: any;
    unique_transfer_no: any;
    transfer_type: string;
    is_default: boolean;
    is_active: boolean;
    more_attributes: any;
};
type PayoutBankDetails = {
    account_type: string;
    country?: string;
    state?: string;
    account_no?: string;
    bank_name?: string;
    city?: string;
    account_holder?: string;
    ifsc_code: string;
    branch_name?: string;
    pincode?: number;
};
type PayoutRequest = {
    users: any;
    aggregator: string;
    transfer_type: string;
    unique_external_id: string;
    bank_details: PayoutBankDetails;
    is_active: boolean;
};
type PayoutResponse = {
    users: any;
    success: boolean;
    aggregator: string;
    created: boolean;
    payment_status: string;
    unique_transfer_no: string;
    transfer_type: string;
    payouts: any;
    bank_details: any;
    is_active: boolean;
};
type UpdatePayoutResponse = {
    success: boolean;
    is_active: boolean;
    is_default: boolean;
};
type UpdatePayoutRequest = {
    unique_external_id: string;
    is_active: boolean;
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
    config: any;
    success: boolean;
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
    account_no: string;
    bank_name: string;
    account_holder: string;
    ifsc_code: string;
    branch_name: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    branch_name: string;
    success?: boolean;
    bank_name: string;
};
type OrderBeneficiaryDetails = {
    display_name: string;
    email: string;
    beneficiary_id: string;
    title: string;
    comment?: string;
    modified_on: string;
    bank_name: string;
    created_on: string;
    account_holder: string;
    ifsc_code: string;
    branch_name?: string;
    account_no: string;
    id: number;
    transfer_mode: string;
    subtitle: string;
    delights_user_name?: string;
    address: string;
    mobile?: string;
    is_active: boolean;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    order_id?: string;
    payment_gateway?: string;
    payment_id?: string;
    current_status?: string;
    extra_meta?: any;
};
type MultiTenderPaymentMethod = {
    amount: number;
    name?: string;
    meta?: MultiTenderPaymentMeta;
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
type CODdata = {
    limit: number;
    usages: number;
    remaining_limit: number;
    user_id: string;
    is_active: boolean;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    merchant_user_id: string;
    mobileno: string;
    is_active: boolean;
};
type SetCODOptionResponse = {
    success: boolean;
    message: string;
};
type FilterInfoOption = {
    name?: string;
    text: string;
    value?: string;
};
type FiltersInfo = {
    text: string;
    value: string;
    options?: FilterInfoOption[];
    type: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type ShipmentStatus = {
    title: string;
    hex_code: string;
    actual_status: string;
    status: string;
    ops_status: string;
};
type Prices = {
    discount?: number;
    cashback?: number;
    tax_collected_at_source?: number;
    fynd_credits?: number;
    price_marked?: number;
    delivery_charge?: number;
    amount_paid?: number;
    refund_credit?: number;
    coupon_value?: number;
    promotion_effective_discount?: number;
    value_of_good?: number;
    price_effective?: number;
    amount_paid_roundoff?: number;
    cashback_applied?: number;
    refund_amount?: number;
    cod_charges?: number;
};
type UserDataInfo = {
    name?: string;
    email?: string;
    mobile?: string;
    avis_user_id?: string;
    gender?: string;
    first_name?: string;
    uid?: number;
    last_name?: string;
    is_anonymous_user?: boolean;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    value_of_good: number;
    brand_calculated_amount: number;
    gst_fee: number;
    gstin_code: string;
};
type PlatformItem = {
    name?: string;
    can_return?: boolean;
    can_cancel?: boolean;
    image?: string[];
    l1_category?: string[];
    size?: string;
    l3_category?: number;
    color?: string;
    id?: number;
    department_id?: number;
    l3_category_name?: string;
    code?: string;
    images?: string[];
};
type BagUnit = {
    shipment_id: string;
    gst?: GSTDetailsData;
    total_shipment_bags: number;
    prices?: Prices;
    status: any;
    item_quantity: number;
    ordering_channel: string;
    item?: PlatformItem;
    can_cancel?: boolean;
    bag_id: number;
    can_return?: boolean;
};
type ShipmentItem = {
    created_at: string;
    fulfilling_centre: string;
    shipment_created_at: number;
    fulfilling_store?: ShipmentItemFulFillingStore;
    payment_mode_info?: PaymentModeInfo;
    sla?: any;
    channel?: any;
    total_shipments_in_order: number;
    total_bags_count: number;
    shipment_status?: ShipmentStatus;
    payment_methods?: any;
    prices?: Prices;
    id: string;
    user?: UserDataInfo;
    application?: any;
    bags?: BagUnit[];
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    applied_filters?: any;
    filters?: FiltersInfo[];
    items?: ShipmentItem[];
};
type Error = {
    message?: string;
    success?: boolean;
};
type ShipmentPayments = {
    logo?: string;
    mode: string;
    source?: string;
};
type OrderDetailsData = {
    cod_charges?: string;
    order_date?: string;
    tax_details?: any;
    order_value?: string;
    affiliate_id?: string;
    ordering_channel?: string;
    fynd_order_id: string;
    ordering_channel_logo?: any;
    source?: string;
};
type UserDetailsData = {
    name: string;
    email: string;
    phone: string;
    pincode: string;
    city: string;
    country: string;
    state: string;
    address: string;
};
type ShipmentStatusData = {
    created_at?: string;
    bag_list?: number[];
    shipment_id?: string;
    status?: string;
    id?: number;
};
type PlatformDeliveryAddress = {
    email?: string;
    created_at?: string;
    phone?: string;
    address1?: string;
    contact_person?: string;
    address_type?: string;
    version?: string;
    latitude?: number;
    address2?: string;
    city?: string;
    country?: string;
    longitude?: number;
    area?: string;
    landmark?: string;
    updated_at?: string;
    address_category?: string;
    state?: string;
    pincode?: string;
};
type OrderBrandName = {
    brand_name: string;
    logo: string;
    id: number;
    created_on: number;
    company: string;
    modified_on?: number;
};
type BagConfigs = {
    is_returnable: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
    allow_force_return: boolean;
};
type ItemCriterias = {
    item_brand?: number[];
};
type BuyRules = {
    item_criteria?: ItemCriterias;
    cart_conditions?: any;
};
type DiscountRules = {
    value?: number;
    type?: string;
};
type AppliedPromos = {
    buy_rules?: BuyRules[];
    article_quantity?: number;
    promotion_name?: string;
    promotion_type?: string;
    amount?: number;
    mrp_promotion?: boolean;
    promo_id?: string;
    discount_rules?: DiscountRules[];
};
type OrderBagArticle = {
    return_config?: any;
    identifiers?: any;
    uid?: string;
};
type BagGST = {
    gst_fee?: number;
    value_of_good?: number;
    hsn_code?: string;
    brand_calculated_amount?: number;
    gst_tag?: string;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    gst_tax_percentage?: number;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    discount: number;
    added_to_fynd_cash: boolean;
    coupon_effective_discount: number;
    hsn_code: string;
    gst_tag: string;
    cashback: number;
    promotion_effective_discount: number;
    delivery_charge: number;
    coupon_value: number;
    size: string;
    brand_calculated_amount: number;
    gst_tax_percentage: number;
    cod_charges: number;
    fynd_credits: number;
    price_marked: number;
    refund_credit: number;
    transfer_price: number;
    pm_price_split: any;
    identifiers: Identifier;
    price_effective: number;
    amount_paid_roundoff?: number;
    cashback_applied: number;
    tax_collected_at_source?: number;
    total_units: number;
    amount_paid: number;
    value_of_good: number;
    item_name: string;
    gst_fee: string;
};
type OrderBags = {
    delivery_address?: PlatformDeliveryAddress;
    brand?: OrderBrandName;
    parent_promo_bags?: any;
    seller_identifier?: string;
    item?: PlatformItem;
    quantity?: number;
    can_return?: boolean;
    bag_configs?: BagConfigs;
    applied_promos?: AppliedPromos[];
    display_name?: string;
    article?: OrderBagArticle;
    entity_type?: string;
    identifier?: string;
    gst_details?: BagGST;
    can_cancel?: boolean;
    bag_id: number;
    financial_breakup?: FinancialBreakup[];
    current_status?: string;
    prices?: Prices;
    line_number?: number;
};
type TrackingList = {
    text: string;
    is_passed?: boolean;
    is_current?: boolean;
    status: string;
    time?: string;
};
type FulfillingStore = {
    phone: string;
    contact_person: string;
    pincode: string;
    city: string;
    country: string;
    meta: any;
    store_name: string;
    id: string;
    state: string;
    code: string;
    address: string;
    fulfillment_channel: string;
};
type DPDetailsData = {
    name?: string;
    eway_bill_id?: string;
    awb_no?: string;
    country?: string;
    track_url?: string;
    id?: string;
    gst_tag?: string;
    pincode?: string;
};
type BagStateMapper = {
    name: string;
    journey_type: string;
    bs_id: number;
    state_type: string;
    app_state_name?: string;
    is_active?: boolean;
    display_name: string;
    app_facing?: boolean;
    app_display_name?: string;
    notify_customer?: boolean;
};
type BagStatusHistory = {
    created_at: string;
    delivery_partner_id?: number;
    shipment_id: string;
    kafka_sync?: boolean;
    state_type?: string;
    reasons?: any[];
    forward?: boolean;
    state_id: number;
    app_display_name?: boolean;
    status: string;
    display_name?: boolean;
    updated_at?: string;
    bsh_id: number;
    bag_id: number;
    delivery_awb_number?: string;
    store_id: number;
    bag_state_mapper: BagStateMapper;
};
type ShipmentInfoResponse = {
    journey_type?: string;
    is_invoiced: boolean;
    user_agent?: string;
    order_type: string;
    beneficiary_details?: boolean;
    operational_status?: string;
    forward_tracking_list?: any[];
    payments?: ShipmentPayments;
    is_not_fynd_source: boolean;
    custom_meta?: any[];
    order?: OrderDetailsData;
    refund_details?: any;
    billing_details?: UserDetailsData;
    can_break: string;
    payment_mode?: string;
    status?: ShipmentStatusData;
    is_packaging_order: boolean;
    kirana_store_id?: string;
    is_pdsr?: string;
    pay_button?: string;
    bags?: OrderBags[];
    can_return?: boolean;
    shipment_id: string;
    user_id: string;
    delivery_status: any[];
    tracking_list?: TrackingList[];
    delivery_details?: UserDetailsData;
    email_id: string;
    items: any[];
    priority_text?: string;
    current_shipment_status: any;
    shipment_images?: string[];
    total_items?: number;
    secured_delivery_flag?: string;
    replacement_details?: string;
    coupon?: any;
    go_green?: boolean;
    enable_tracking?: boolean;
    bank_data?: any;
    forward_shipment_status?: any[];
    ordering_store: any;
    vertical?: string;
    status_progress: number;
    due_date?: string;
    gst_details?: GSTDetailsData;
    fyndstore_emp: any;
    user_info?: any;
    credit_note_id: string;
    company: any;
    can_cancel?: boolean;
    enable_dp_tracking?: string;
    delivery_slot?: any;
    platform_logo: boolean;
    packaging_type?: string;
    invoice: any;
    fulfilling_store?: FulfillingStore;
    affiliate_shipment_id: string;
    lock_status: string;
    dp_details?: DPDetailsData;
    tracking_url: string;
    refund_text?: string;
    is_fynd_store?: string;
    order_created_time?: string;
    picked_date?: string;
    shipment_status?: string;
    is_fynd_coupon: boolean;
    prices?: Prices;
    total_bags?: number;
    shipment_quantity?: number;
    order_status: any;
    forward_order_status?: any[];
    escalation?: any;
    bag_status_history?: BagStatusHistory[];
    child_nodes?: string[];
    mid?: string;
};
type PlatformShipment = {
    journey_type?: string;
    user_agent?: string;
    operational_status?: string;
    payments?: ShipmentPayments;
    custom_meta?: any[];
    order?: OrderDetailsData;
    billing_details?: UserDetailsData;
    payment_mode?: string;
    status?: ShipmentStatusData;
    bags?: OrderBags[];
    shipment_id: string;
    tracking_list?: TrackingList[];
    delivery_details?: UserDetailsData;
    priority_text?: string;
    shipment_images?: string[];
    total_items?: number;
    coupon?: any;
    vertical?: string;
    gst_details?: GSTDetailsData;
    enable_dp_tracking?: string;
    delivery_slot?: any;
    platform_logo?: string;
    packaging_type?: string;
    fulfilling_store?: FulfillingStore;
    dp_details?: DPDetailsData;
    picked_date?: string;
    shipment_status?: string;
    prices?: Prices;
    total_bags?: number;
    shipment_quantity?: number;
    bag_status_history?: BagStatusHistory[];
};
type OrderDict = {
    order_date: string;
    fynd_order_id: string;
    shipment_count: number;
};
type ShipmentDetailsResponse = {
    shipments?: PlatformShipment[];
    order?: OrderDict;
    custom_meta?: any[];
    success: boolean;
};
type SubLane = {
    text?: string;
    value?: string;
    actions?: any[];
    total_items?: number;
    index?: number;
};
type SuperLane = {
    total_items?: number;
    text: string;
    value: string;
    options?: SubLane[];
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformBreakupValues = {
    name?: string;
    value?: string;
    display?: string;
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformOrderItems = {
    breakup_values?: PlatformBreakupValues[];
    shipments?: PlatformShipment[];
    channel?: PlatformChannel;
    order_created_time?: string;
    meta?: any;
    order_value?: number;
    payment_mode?: string;
    total_order_value?: number;
    user_info?: UserDataInfo;
    order_id?: string;
};
type OrderListingResponse = {
    page?: Page;
    total_count?: number;
    items?: PlatformOrderItems[];
    message?: string;
    lane?: string;
    success?: boolean;
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
    shipment_type?: string;
    account_name?: string;
    reason?: string;
    meta?: any;
    updated_time?: string;
    raw_status?: string;
    status?: string;
    last_location_recieved_at?: string;
    updated_at?: string;
    awb?: string;
};
type PlatformShipmentTrack = {
    results?: PlatformTrack[];
    meta?: any;
};
type FiltersResponse = {
    advance?: any[];
};
type Success = {
    message?: string;
    success?: boolean;
};
type OmsReports = {
    report_name?: string;
    report_created_at?: string;
    s3_key?: string;
    status?: string;
    report_requested_at?: string;
    display_name?: string;
    report_id?: string;
    report_type?: string;
    request_details?: any;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    item_id?: string;
    article_id?: string;
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
    error?: NestedErrorSchemaDataSet[];
    data?: any[];
    identifier?: string;
    trace_id?: string;
    success?: boolean;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    company_id?: string;
    invoice?: any;
    do_invoice_label_generated: boolean;
    batch_id: string;
    data?: any;
    store_name?: string;
    store_id?: string;
    invoice_status?: string;
    label?: any;
    store_code?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type URL = {
    url?: string;
};
type FileResponse = {
    size?: number;
    operation?: string;
    content_type?: string;
    tags?: string[];
    file_name?: string;
    method?: string;
    upload?: FileUploadResponse;
    cdn?: URL;
    file_path?: string;
    namespace?: string;
};
type BulkListingPage = {
    size?: number;
    has_previous?: boolean;
    current?: number;
    total?: number;
    has_next?: boolean;
    type?: string;
};
type bulkListingData = {
    successful?: number;
    processing_shipments?: string[];
    successful_shipments?: any[];
    store_name?: string;
    status?: string;
    id?: string;
    excel_url?: string;
    uploaded_on?: string;
    user_name?: string;
    user_id?: string;
    batch_id?: string;
    failed?: number;
    total?: number;
    file_name?: string;
    store_id?: number;
    store_code?: string;
    company_id?: number;
    processing?: number;
    failed_shipments?: any[];
};
type BulkListingResponse = {
    page?: BulkListingPage;
    error?: string;
    data?: bulkListingData[];
    success?: boolean;
};
type ManifestPage = {
    size?: string;
    has_previous?: boolean;
    current?: string;
    total?: number;
    type?: string;
    has_next?: boolean;
};
type DateRange = {
    to_date?: string;
    from_date?: string;
};
type ManifestFilter = {
    dp_ids?: string;
    date_range?: DateRange;
    sales_channels?: string;
    dp_name?: string;
    sales_channel_name?: string;
    store_name?: string;
    stores?: string;
    lane?: string;
};
type GeneratedManifestItem = {
    manifest_id?: string;
    company_id?: number;
    created_at?: string;
    created_by?: string;
    is_active?: boolean;
    status?: string;
    filters?: ManifestFilter;
};
type GeneratedManifestResponse = {
    page?: ManifestPage;
    items?: GeneratedManifestItem[];
};
type ManifestDetailTotalShipmentPricesCount = {
    total_price?: number;
    shipment_count?: number;
};
type ManifestDetailMeta = {
    filters?: ManifestFilter;
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
};
type ManifestDetail = {
    manifest_id?: string;
    company_id?: number;
    created_at?: string;
    user_id?: number;
    created_by?: string;
    is_active?: boolean;
    meta?: ManifestDetailMeta;
    status?: string;
    uid?: number;
    id?: number;
    filters?: ManifestFilter;
};
type ManifestDetailItem = {
    shipment_id?: string;
    item_qty?: number;
    invoice_id?: string;
    order_id?: string;
    awb?: string;
};
type ManifestDetailResponse = {
    page?: ManifestPage;
    additional_shipment_count?: number;
    manifest_details?: ManifestDetail[];
    items?: ManifestDetailItem[];
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
    message?: string;
    status?: boolean;
};
type BulkActionDetailsDataField = {
    company_id?: string;
    successful_shipment_ids?: string[];
    processing_shipments_count?: number;
    batch_id?: string;
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    total_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    uploaded_on?: string;
    error?: string[];
    user_id?: string;
    data?: BulkActionDetailsDataField[];
    status?: boolean;
    uploaded_by?: string;
    failed_records?: string[];
    message?: string;
    success?: string;
};
type Brand = {
    pickup_location?: string;
    is_virtual_invoice?: boolean;
    credit_note_expiry_days?: number;
    brand_id: number;
    script_last_ran?: string;
    start_date?: string;
    brand_name: string;
    credit_note_allowed?: boolean;
    invoice_prefix?: string;
    logo?: string;
    created_on?: number;
    company: string;
    modified_on?: number;
};
type BagReturnableCancelableStatus = {
    is_returnable: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
};
type Attributes = {
    name?: string;
    marketer_address?: string;
    primary_color?: string;
    primary_material?: string;
    brand_name?: string;
    essential?: string;
    gender?: string[];
    primary_color_hex?: string;
    marketer_name?: string;
};
type Item = {
    brand: string;
    color?: string;
    last_updated_at?: string;
    code?: string;
    can_return?: boolean;
    image: string[];
    l2_category_id?: number;
    l1_category?: string[];
    size: string;
    brand_id: number;
    gender?: string;
    l3_category_name?: string;
    l1_category_id?: number;
    name: string;
    meta?: any;
    slug_key: string;
    webstore_product_url?: string;
    attributes: Attributes;
    branch_url?: string;
    can_cancel?: boolean;
    l2_category?: string[];
    item_id: number;
    l3_category?: number;
    department_id?: number;
};
type PDFLinks = {
    invoice?: string;
    invoice_pos?: string;
    credit_note_url?: string;
    label_a6?: string;
    po_invoice?: string;
    label_pos?: string;
    b2b?: string;
    label?: string;
    label_type: string;
    invoice_a6?: string;
    invoice_a4?: string;
    invoice_type: string;
    label_a4?: string;
};
type AffiliateMeta = {
    employee_discount?: number;
    size_level_total_qty?: number;
    channel_order_id?: string;
    quantity?: number;
    order_item_id?: string;
    due_date?: string;
    box_type?: string;
    loyalty_discount?: number;
    channel_shipment_id?: string;
    is_priority?: boolean;
    coupon_code?: string;
};
type BuyerDetails = {
    name: string;
    pincode: number;
    ajio_site_id?: string;
    city: string;
    gstin: string;
    state: string;
    address: string;
};
type EInvoice = {
    irn?: string;
    error_message?: string;
    acknowledge_no?: number;
    signed_qr_code?: string;
    acknowledge_date?: string;
    error_code?: string;
    signed_invoice?: string;
};
type EinvoiceInfo = {
    invoice?: EInvoice;
    credit_note?: EInvoice;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type LockData = {
    mto?: boolean;
    lock_message?: string;
    locked?: boolean;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentMeta = {
    po_number?: string;
    order_type?: string;
    return_affiliate_order_id?: string;
    b2b_buyer_details?: BuyerDetails;
    bag_weight?: any;
    same_store_available: boolean;
    auto_trigger_dp_assignment_acf: boolean;
    awb_number?: string;
    return_affiliate_shipment_id?: string;
    store_invoice_updated_date?: string;
    einvoice_info?: EinvoiceInfo;
    dp_sort_key?: string;
    box_type?: string;
    b2c_buyer_details?: any;
    marketplace_store_id?: string;
    packaging_name?: string;
    weight: number;
    return_store_node?: number;
    dp_name?: string;
    fulfilment_priority_text?: string;
    return_details?: any;
    forward_affiliate_order_id?: string;
    shipment_volumetric_weight?: number;
    assign_dp_from_sb?: boolean;
    timestamp?: ShipmentTimeStamp;
    lock_data?: LockData;
    external?: any;
    ewaybill_info?: any;
    due_date?: string;
    return_awb_number?: string;
    dp_options?: any;
    dp_id?: string;
    debug_info?: DebugInfo;
    formatted?: Formatted;
    forward_affiliate_shipment_id?: string;
    shipment_weight?: number;
};
type AffiliateDetails = {
    pdf_links?: PDFLinks;
    affiliate_shipment_id: string;
    company_affiliate_tag?: string;
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
    affiliate_store_id: string;
    ad_id?: string;
    affiliate_id?: string;
    affiliate_order_id: string;
    shipment_meta: ShipmentMeta;
};
type ReturnConfig = {
    returnable?: boolean;
    unit?: string;
    time?: number;
};
type Dimensions = {
    is_default?: boolean;
    height?: number;
    width?: number;
    unit?: string;
    length?: number;
};
type Weight = {
    is_default?: boolean;
    shipping?: number;
    unit?: string;
};
type Article = {
    child_details?: any;
    esp_modified?: any;
    raw_meta?: any;
    return_config?: ReturnConfig;
    a_set?: any;
    size: string;
    identifiers: Identifier;
    _id: string;
    seller_identifier: string;
    dimensions?: Dimensions;
    uid: string;
    is_set?: boolean;
    code?: string;
    weight?: Weight;
};
type StoreAddress = {
    created_at: string;
    address_category: string;
    updated_at: string;
    address1: string;
    country_code: string;
    email?: string;
    contact_person: string;
    address2?: string;
    city: string;
    country: string;
    longitude: number;
    area?: string;
    state: string;
    pincode: number;
    phone: string;
    address_type: string;
    version?: string;
    latitude: number;
    landmark?: string;
};
type Document = {
    verified: boolean;
    url?: string;
    value: string;
    ds_type: string;
    legal_name: string;
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
    username?: string;
    password?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type EInvoicePortalDetails = {
    user?: string;
    password?: string;
    username?: string;
};
type StoreMeta = {
    documents?: StoreDocuments;
    gst_credentials: StoreGstCredentials;
    gst_number?: string;
    additional_contact_details?: any;
    notification_emails?: string[];
    ewaybill_portal_details?: any;
    einvoice_portal_details?: EInvoicePortalDetails;
    stage: string;
    display_name: string;
    timing?: any[];
    product_return_config?: any;
};
type Store = {
    is_archived?: boolean;
    created_at: string;
    location_type: string;
    order_integration_id?: string;
    parent_store_id?: number;
    alohomora_user_id?: number;
    updated_at?: string;
    code?: string;
    is_enabled_for_recon?: boolean;
    address1: string;
    packaging_material_count?: number;
    store_address_json?: StoreAddress;
    brand_id?: any;
    brand_store_tags?: string[];
    is_active?: boolean;
    mall_area?: string;
    fulfillment_channel: string;
    name: string;
    vat_no?: string;
    contact_person: string;
    store_active_from?: string;
    s_id: string;
    address2?: string;
    city: string;
    country: string;
    longitude: number;
    meta: StoreMeta;
    store_email: string;
    state: string;
    pincode: string;
    company_id: number;
    mall_name?: string;
    phone: number;
    latitude: number;
    login_username: string;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    po_line_amount?: number;
    docker_number?: string;
    item_base_price?: number;
    partial_can_ret?: boolean;
    po_tax_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type BagGSTDetails = {
    gst_fee: number;
    tax_collected_at_source: number;
    hsn_code_id: string;
    cgst_gst_fee: string;
    igst_tax_percentage: number;
    value_of_good: number;
    igst_gst_fee: string;
    hsn_code: string;
    brand_calculated_amount: number;
    cgst_tax_percentage: number;
    sgst_gst_fee: string;
    gst_tag: string;
    sgst_tax_percentage: number;
    is_default_hsn_code?: boolean;
    gstin_code?: string;
    gst_tax_percentage: number;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type ArticleDetails = {
    status?: any;
};
type AffiliateBagDetails = {
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
    affiliate_order_id: string;
    loyalty_discount?: number;
};
type BagDetailsPlatformResponse = {
    brand: Brand;
    journey_type: string;
    parent_promo_bags?: any;
    original_bag_list?: number[];
    tags?: string[];
    operational_status?: string;
    seller_identifier?: string;
    order_integration_id?: string;
    status: BagReturnableCancelableStatus;
    item: Item;
    quantity?: number;
    b_id: number;
    shipment_id?: string;
    affiliate_details?: AffiliateDetails;
    applied_promos?: any[];
    bag_update_time?: number;
    display_name?: string;
    restore_promos?: any;
    article: Article;
    entity_type?: string;
    ordering_store?: Store;
    meta?: BagMeta;
    identifier?: string;
    gst_details: BagGSTDetails;
    dates?: Dates;
    bag_status: BagStatusHistory[];
    current_operational_status: BagStatusHistory;
    b_type?: string;
    qc_required?: any;
    article_details?: ArticleDetails;
    financial_breakup: FinancialBreakup[];
    current_status: BagStatusHistory;
    reasons?: any[];
    restore_coupon?: boolean;
    affiliate_bag_details: AffiliateBagDetails;
    prices: Prices;
    line_number?: number;
    bag_status_history?: BagStatusHistory;
    no_of_bags_order?: number;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    page_type: string;
    size: number;
    item_total: number;
    current: number;
    has_next: boolean;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    shipment_id?: string;
    status?: number;
    message?: string;
    error?: string;
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
    affiliate_order_id?: string;
    mongo_article_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    store_id: number;
    reason_ids?: number[];
    fynd_order_id?: string;
    set_id?: string;
    item_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_order_id?: string;
    affiliate_shipment_id?: string;
    reason_text: string;
    id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    entities: Entities[];
    entity_type: string;
    action_type: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    affiliate_order_id?: string;
    is_locked?: boolean;
    bag_id?: number;
    affiliate_bag_id?: string;
};
type CheckResponse = {
    lock_status?: boolean;
    affiliate_shipment_id?: string;
    original_filter?: OriginalFilter;
    bags?: Bags[];
    shipment_id?: string;
    affiliate_id?: string;
    status?: string;
    is_bag_locked?: boolean;
    is_shipment_locked?: boolean;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    logo_url?: string;
    id: number;
    title?: string;
    company_id?: number;
    platform_id?: string;
    description?: string;
    from_datetime?: string;
    to_datetime?: string;
    created_at?: string;
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
type Products = {
    line_number?: number;
    quantity?: number;
    identifier?: string;
};
type EntitiesDataUpdates = {
    data?: any;
    filters?: any[];
};
type ProductsDataUpdatesFilters = {
    line_number?: number;
    identifier?: string;
};
type ProductsDataUpdates = {
    data?: any;
    filters?: ProductsDataUpdatesFilters[];
};
type DataUpdates = {
    entities?: EntitiesDataUpdates[];
    products?: ProductsDataUpdates[];
};
type EntityReasonData = {
    reason_id?: number;
    reason_text?: string;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
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
type ReasonsData = {
    entities?: EntitiesReasons[];
    products?: ProductsReasons[];
};
type ShipmentsRequest = {
    products?: Products[];
    data_updates?: DataUpdates;
    reasons?: ReasonsData;
    identifier: string;
};
type StatuesRequest = {
    status?: string;
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    unlock_before_transition?: boolean;
    force_transition?: boolean;
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
};
type ShipmentsResponse = {
    meta?: any;
    identifier?: string;
    exception?: string;
    message?: string;
    status?: number;
    code?: string;
    final_state?: any;
    stack_trace?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    last_name: string;
    email: string;
    first_name: string;
    mobile: number;
    country: string;
    address1?: string;
    pincode: string;
    phone: number;
    state: string;
    address2?: string;
    city: string;
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
    sku: string;
    pdf_links?: MarketPlacePdf;
    quantity: number;
    affiliate_store_id: string;
    fynd_store_id: string;
    item_id: number;
    seller_identifier: string;
    modified_on: string;
    transfer_price: number;
    _id: string;
    store_id: number;
    item_size: string;
    company_id: number;
    delivery_charge: number;
    avl_qty: number;
    affiliate_meta: any;
    discount: number;
    price_effective: number;
    amount_paid: number;
    identifier: any;
    hsn_code_id: string;
    unit_price: number;
    price_marked: number;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type ArticleDetails1 = {
    _id: string;
    brand_id: number;
    weight: any;
    quantity: number;
    dimension: any;
    category: any;
    attributes: any;
};
type LocationDetails = {
    fulfillment_type: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
};
type ShipmentDetails = {
    affiliate_shipment_id: string;
    shipments: number;
    box_type?: string;
    meta?: any;
    dp_id?: number;
    fulfillment_id: number;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    journey: string;
    identifier: string;
    source: string;
    payment_mode: string;
    location_details?: LocationDetails;
    action: string;
    shipment: ShipmentDetails[];
    to_pincode: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderInfo = {
    affiliate_order_id?: string;
    order_value: number;
    coupon?: string;
    shipping_address: OrderUser;
    order_priority?: OrderPriority;
    bags: AffiliateBag[];
    payment_mode: string;
    user: UserData;
    payment?: any;
    cod_charges: number;
    delivery_charges: number;
    items: any;
    discount: number;
    shipment?: ShipmentData;
    billing_address: OrderUser;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    meta?: AffiliateAppConfigMeta[];
    id: string;
    secret: string;
    description?: string;
    owner: string;
    updated_at: string;
    created_at: string;
    name: string;
    token: string;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryConfig = {
    order?: AffiliateInventoryOrderConfig;
    payment?: AffiliateInventoryPaymentConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
};
type AffiliateConfig = {
    app?: AffiliateAppConfig;
    inventory?: AffiliateInventoryConfig;
};
type Affiliate = {
    token: string;
    config?: AffiliateConfig;
    id: string;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type OrderConfig = {
    affiliate: Affiliate;
    store_lookup?: string;
    create_user?: boolean;
    article_lookup?: string;
    bag_end_state?: string;
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
    slug: string;
    display_text: string;
    description: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    createdat: string;
    l1_detail?: string;
    bag_id?: number;
    ticket_id?: string;
    l2_detail?: string;
    l3_detail?: string;
    user: string;
    type: string;
    ticket_url?: string;
    message: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    amount_paid: number;
    order_id: string;
    payment_mode: string;
    shipment_id: number;
    customer_name: string;
    message: string;
    phone_number: number;
    country_code: string;
    brand_name: string;
};
type SendSmsPayload = {
    slug: string;
    data?: SmsDataPayload;
    bag_id: number;
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
};
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    remarks?: string;
    meta: Meta;
    id: number;
    shipment_id?: string;
    bag_list?: number[];
    status?: string;
};
type OrderStatusData = {
    order_details: OrderDetails;
    errors?: string[];
    shipment_details?: ShipmentDetail[];
};
type OrderStatusResult = {
    success: string;
    result?: OrderStatusData[];
};
type ManualAssignDPToShipment = {
    shipment_ids?: string[];
    qc_required: string;
    dp_id: number;
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type Tax = {
    amount: any;
    breakup?: any[];
    rate: number;
    name: string;
};
type Charge = {
    tax?: Tax;
    type: string;
    code?: string;
    amount: any;
    name: string;
};
type LineItem = {
    charges: Charge[];
    meta?: any;
    custom_messasge?: string;
    quantity?: number;
    external_line_id?: string;
    seller_identifier: string;
};
type ProcessingDates = {
    dispatch_by_date?: string;
    confirm_by_date?: string;
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
    pack_by_date?: string;
};
type Shipment = {
    meta?: any;
    priority?: number;
    external_shipment_id?: number;
    line_items: LineItem[];
    processing_dates?: ProcessingDates;
    location_id: number;
};
type BillingInfo = {
    last_name?: string;
    address1: string;
    alternate_email?: string;
    state: string;
    alternate_mobile_number?: string;
    country: string;
    external_customer_code?: string;
    title?: string;
    customer_code?: string;
    house_no?: string;
    state_code?: string;
    middle_name?: string;
    address2?: string;
    primary_email: string;
    country_code?: string;
    city: string;
    floor_no?: string;
    first_name: string;
    primary_mobile_number: string;
    pincode: string;
    gender?: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type ShippingInfo = {
    last_name?: string;
    geo_location?: any;
    address1: string;
    alternate_email?: string;
    state: string;
    alternate_mobile_number?: string;
    country: string;
    address_type?: string;
    external_customer_code?: string;
    title?: string;
    shipping_type?: string;
    customer_code?: string;
    house_no?: string;
    state_code?: string;
    middle_name?: string;
    slot?: any[];
    address2?: string;
    primary_email: string;
    country_code?: string;
    city: string;
    floor_no?: string;
    first_name: string;
    primary_mobile_number: string;
    pincode: string;
    landmark?: string;
    gender?: string;
};
type PaymentMethod = {
    collect_by: string;
    meta?: any;
    transaction_data?: any;
    refund_by: string;
    amount: number;
    mode: string;
    name: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type CreateOrderAPI = {
    currency_info?: any;
    charges: Charge[];
    shipments: Shipment[];
    meta?: any;
    billing_info: BillingInfo;
    tax_info?: TaxInfo;
    external_order_id?: string;
    shipping_info: ShippingInfo;
    external_creation_date?: string;
    payment_info: PaymentInfo;
};
type CreateOrderErrorReponse = {
    info?: any;
    meta?: string;
    request_id?: string;
    exception?: string;
    status: number;
    message: string;
    code?: string;
    stack_trace?: string;
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
    shipment_assignment?: string;
    logo_url?: any;
    lock_states?: string[];
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
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
    mobile: number;
    start_date: string;
    order_details?: FyndOrderIdList[];
    end_date: string;
};
type SearchKeywordResult = {
    query: any;
    sort_on: string;
};
type CreateSearchKeyword = {
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    result: SearchKeywordResult;
    is_active?: boolean;
};
type GetSearchWordsData = {
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    uid?: string;
    result?: any;
    is_active?: boolean;
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
    query?: any;
    type?: string;
    params?: any;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type AutocompleteResult = {
    logo?: Media;
    display?: string;
    _custom_json?: any;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    results?: AutocompleteResult[];
    is_active?: boolean;
};
type GetAutocompleteWordsData = {
    words?: string[];
    app_id?: string;
    _custom_json?: any;
    results?: any[];
    uid?: string;
};
type GetAutocompleteWordsResponse = {
    page?: Page;
    items?: GetAutocompleteWordsData[];
};
type CreateAutocompleteWordsResponse = {
    words?: string[];
    _custom_json?: any;
    app_id?: string;
    results?: any[];
};
type ProductBundleItem = {
    max_quantity: number;
    min_quantity: number;
    allow_remove?: boolean;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    product_uid: number;
};
type GetProductBundleCreateResponse = {
    products: ProductBundleItem[];
    modified_on?: string;
    name: string;
    same_store_assignment?: boolean;
    choice: string;
    meta?: any;
    modified_by?: any;
    company_id?: number;
    created_by?: any;
    slug: string;
    id?: string;
    logo?: string;
    is_active: boolean;
    created_on?: string;
    page_visibility?: string[];
};
type GetProductBundleListingResponse = {
    page?: Page;
    items?: GetProductBundleCreateResponse[];
};
type ProductBundleRequest = {
    products: ProductBundleItem[];
    modified_on?: string;
    name: string;
    same_store_assignment?: boolean;
    choice: string;
    meta?: any;
    modified_by?: any;
    company_id?: number;
    created_by?: any;
    slug: string;
    logo?: string;
    is_active: boolean;
    created_on?: string;
    page_visibility?: string[];
};
type ProductBundleUpdateRequest = {
    products: ProductBundleItem[];
    modified_on?: string;
    name: string;
    same_store_assignment?: boolean;
    choice: string;
    meta?: any;
    modified_by?: any;
    company_id?: number;
    slug: string;
    logo?: string;
    is_active: boolean;
    page_visibility?: string[];
};
type Price = {
    max_effective?: number;
    currency?: string;
    min_effective?: number;
    min_marked?: number;
    max_marked?: number;
};
type LimitedProductData = {
    quantity?: number;
    images?: string[];
    attributes?: any;
    price?: any;
    name?: string;
    uid?: number;
    identifier?: any;
    slug?: string;
    sizes?: string[];
    item_code?: string;
    country_of_origin?: string;
    short_description?: string;
};
type Size = {
    value?: string;
    quantity?: number;
    display?: string;
    is_available?: boolean;
};
type GetProducts = {
    max_quantity?: number;
    price?: Price;
    min_quantity?: number;
    allow_remove?: boolean;
    product_details?: LimitedProductData;
    sizes?: Size[];
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    product_uid?: number;
};
type GetProductBundleResponse = {
    products?: GetProducts[];
    name?: string;
    same_store_assignment?: boolean;
    choice?: string;
    meta?: any;
    company_id?: number;
    slug?: string;
    logo?: string;
    is_active?: boolean;
    page_visibility?: string[];
};
type ListSizeGuide = {
    page?: any;
    items?: any[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    modified_on?: string;
    tag?: string;
    image?: string;
    name: string;
    description?: string;
    created_by?: any;
    modified_by?: any;
    company_id?: number;
    subtitle?: string;
    id?: string;
    guide?: Guide;
    title: string;
    active?: boolean;
    created_on?: string;
    brand_id?: number;
};
type SizeGuideResponse = {
    modified_on?: string;
    tag?: string;
    name?: string;
    created_by?: any;
    modified_by?: any;
    company_id?: number;
    subtitle?: string;
    id?: string;
    guide?: any;
    title?: string;
    active?: boolean;
    created_on?: string;
    brand_id?: number;
};
type MOQData = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type SEOData = {
    title?: any;
    description?: any;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    moq?: MOQData;
    seo?: SEOData;
    is_cod?: boolean;
    is_gift?: boolean;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemMOQ = {
    minimum?: number;
    increment_unit?: number;
    maximum?: number;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type ApplicationItemMeta = {
    alt_text?: any;
    _custom_json?: any;
    _custom_meta?: MetaFields[];
    moq?: ApplicationItemMOQ;
    seo?: ApplicationItemSEO;
    is_cod?: boolean;
    is_gift?: boolean;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type GetConfigMetadataResponse = {
    data: any[];
    condition?: any[];
    values?: any[];
};
type PageResponseType = {
    total_count: number;
    has_next: boolean;
    next: number;
    current: number;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigErrorResponse = {
    message: string;
};
type AttributeDetailsGroup = {
    key?: string;
    name: string;
    display_type: string;
    priority: number;
    unit?: string;
    slug?: string;
    logo?: string;
    is_active: boolean;
};
type AppConfigurationDetail = {
    template_slugs?: string[];
    attributes?: AttributeDetailsGroup[];
    app_id: string;
    name?: string;
    is_default: boolean;
    priority: number;
    slug: string;
    logo?: string;
    is_active: boolean;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    app_id: string;
    key: string;
    name?: string;
    default_key: string;
    is_default: boolean;
    priority: number;
    logo?: string;
    is_active: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    filter_types?: string[];
    display?: string;
    units?: any[];
    key?: string;
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
    variant?: any;
    compare?: any;
    detail?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductConfig = {
    key: string;
    size?: ProductSize;
    priority: number;
    subtitle?: string;
    title?: string;
    logo?: string;
    is_active: boolean;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    name: string;
    key: string;
    size: ProductSize;
    display_type: string;
    priority: number;
    logo?: string;
    is_active: boolean;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProduct = {
    similar: ConfigurationProductSimilar;
    variant: ConfigurationProductVariant;
};
type ConfigurationBucketPoints = {
    display?: string;
    start?: number;
    end?: number;
};
type ConfigurationListingFilterValue = {
    value?: string;
    map?: any;
    condition?: string;
    sort?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map_values?: any[];
};
type ConfigurationListingFilterConfig = {
    name?: string;
    key: string;
    type: string;
    display_name?: string;
    priority: number;
    logo?: string;
    is_active: boolean;
    value_config?: ConfigurationListingFilterValue;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    name?: string;
    key: string;
    priority: number;
    logo?: string;
    is_active: boolean;
};
type ConfigurationListingSort = {
    default_key: string;
    config?: ConfigurationListingSortConfig[];
};
type ConfigurationListing = {
    filter: ConfigurationListingFilter;
    sort: ConfigurationListingSort;
};
type AppCatalogConfiguration = {
    modified_on?: string;
    config_type: string;
    app_id: string;
    config_id?: string;
    type?: string;
    created_by?: any;
    product?: ConfigurationProduct;
    modified_by?: any;
    id?: string;
    listing?: ConfigurationListing;
    created_on?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    modified_on?: string;
    config_type: string;
    app_id: string;
    config_id?: string;
    type?: string;
    created_by?: any;
    product?: ConfigurationProduct;
    modified_by?: any;
    listing?: ConfigurationListing;
    created_on?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    config_type: string;
    app_id: string;
    config_id?: string;
    product?: GetCatalogConfigurationDetailsProduct;
    id?: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
};
type GetAppCatalogEntityConfiguration = {
    data?: EntityConfiguration;
    is_default?: boolean;
};
type ProductFiltersValue = {
    currency_symbol?: string;
    value: any;
    count?: number;
    currency_code?: string;
    selected_min?: number;
    max?: number;
    is_selected: boolean;
    query_format?: string;
    selected_max?: number;
    min?: number;
    display: string;
    display_format?: string;
};
type ProductFiltersKey = {
    name: string;
    display: string;
    operators?: string[];
    kind?: string;
    logo?: string;
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type ProductSortOn = {
    value?: string;
    is_selected?: boolean;
    name?: string;
};
type GetCollectionQueryOptionResponse = {
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
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
    attribute: string;
    op: string;
};
type Media1 = {
    url: string;
    type?: string;
    meta?: any;
};
type GetCollectionDetailNest = {
    visible_facets_keys?: string[];
    description?: string;
    banners?: ImageUrls;
    allow_facets?: boolean;
    cron?: any;
    query?: CollectionQuery[];
    tag?: string[];
    name?: string;
    meta?: any;
    uid?: string;
    slug?: string;
    logo?: Media1;
    action?: Action;
    badge?: any;
    app_id?: string;
    type?: string;
    priority?: number;
    allow_sort?: boolean;
    is_active?: boolean;
    _schedule?: any;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type UserInfo = {
    username?: string;
    email?: string;
    uid?: string;
    user_id?: string;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionBadge = {
    text?: string;
    color?: string;
};
type CollectionSchedule = {
    start?: string;
    next_schedule?: NextSchedule[];
    duration?: number;
    cron?: string;
    end?: string;
};
type CreateCollection = {
    visible_facets_keys?: string[];
    description?: string;
    banners: CollectionBanner;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    name: string;
    meta?: any;
    sort_on?: string;
    _locale_language?: any;
    created_by?: UserInfo;
    modified_by?: UserInfo;
    slug: string;
    published?: boolean;
    seo?: SeoDetail;
    tags?: string[];
    logo: CollectionImage;
    badge?: CollectionBadge;
    app_id: string;
    _custom_json?: any;
    type: string;
    priority?: number;
    allow_sort?: boolean;
    is_visible?: boolean;
    is_active?: boolean;
    _schedule?: CollectionSchedule;
};
type CollectionCreateResponse = {
    visible_facets_keys?: string[];
    description?: string;
    banners?: ImageUrls;
    allow_facets?: boolean;
    cron?: any;
    query?: CollectionQuery[];
    tag?: string[];
    name?: string;
    meta?: any;
    sort_on?: string;
    slug?: string;
    logo?: BannerImage;
    badge?: any;
    app_id?: string;
    type?: string;
    priority?: number;
    allow_sort?: boolean;
    is_active?: boolean;
    _schedule?: any;
};
type CollectionDetailResponse = {
    query?: CollectionQuery[];
    badge?: any;
    visible_facets_keys?: string[];
    tag?: string[];
    app_id?: string;
    name?: string;
    description?: string;
    type?: string;
    priority?: number;
    banners?: ImageUrls;
    meta?: any;
    allow_sort?: boolean;
    cron?: any;
    slug?: string;
    allow_facets?: boolean;
    logo?: Media1;
    is_active?: boolean;
    _schedule?: any;
};
type UpdateCollection = {
    visible_facets_keys?: string[];
    description?: string;
    banners?: CollectionBanner;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    name?: string;
    meta?: any;
    sort_on?: string;
    _locale_language?: any;
    modified_by?: UserInfo;
    slug?: string;
    published?: boolean;
    seo?: SeoDetail;
    tags?: string[];
    logo?: CollectionImage;
    badge?: CollectionBadge;
    _custom_json?: any;
    type?: string;
    priority?: number;
    allow_sort?: boolean;
    is_visible?: boolean;
    is_active?: boolean;
    _schedule?: CollectionSchedule;
};
type ProductDetailAttribute = {
    value?: string;
    type?: string;
    key?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductBrand = {
    logo?: Media1;
    uid?: number;
    action?: Action;
    name?: string;
};
type Price1 = {
    min?: number;
    currency_code?: string;
    max?: number;
    currency_symbol?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingDetail = {
    promo_meta?: any;
    similars?: string[];
    description?: string;
    highlights?: string[];
    item_code?: string;
    product_online_date?: string;
    attributes?: any;
    name?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    rating?: number;
    tryouts?: string[];
    uid?: number;
    brand?: ProductBrand;
    color?: string;
    medias?: Media1[];
    slug: string;
    short_description?: string;
    teaser_tag?: any;
    sellable?: boolean;
    discount?: string;
    rating_count?: number;
    price?: ProductListingPrice;
    image_nature?: string;
    type?: string;
    has_variant?: boolean;
    item_type?: string;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    page?: Page;
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    query?: CollectionQuery[];
    type?: string;
    item?: ItemQueryForUserCollection[];
};
type UpdatedResponse = {
    items_not_updated?: number[];
    message?: string;
};
type CatalogInsightBrand = {
    article_freshness?: number;
    name?: string;
    available_sizes?: number;
    available_articles?: number;
    total_articles?: number;
    total_sizes?: number;
};
type CatalogInsightItem = {
    count?: number;
    out_of_stock_count?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    opt_level: string;
    enabled?: boolean;
    platform?: string;
    company_id?: number;
    brand_ids?: number[];
    store_ids?: number[];
};
type CompanyOptIn = {
    modified_on: number;
    opt_level: string;
    enabled: boolean;
    platform: string;
    created_by?: any;
    modified_by?: any;
    company_id: number;
    created_on: number;
    brand_ids: number[];
    store_ids: number[];
};
type GetOptInPlatform = {
    page: Page;
    items: CompanyOptIn[];
};
type OptinCompanyDetail = {
    company_type?: string;
    uid?: number;
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
    company?: string;
    brand?: number;
    store?: number;
};
type StoreDetail = {
    modified_on?: string;
    store_code?: string;
    name?: string;
    additional_contacts?: any[];
    uid?: number;
    manager?: any;
    display_name?: string;
    documents?: any[];
    company_id?: number;
    store_type?: string;
    address?: any;
    created_on?: string;
    timing?: any;
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
    type: string;
    range?: AttributeSchemaRange;
    mandatory?: boolean;
    multi?: boolean;
    allowed_values?: string[];
    format?: string;
};
type AttributeMasterDetails = {
    display_type: string;
};
type AttributeMasterFilter = {
    indexing: boolean;
    depends_on?: string[];
    priority?: number;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    enriched?: boolean;
    mandatory_details: AttributeMasterMandatoryDetails;
};
type GenderDetail = {
    schema?: AttributeMaster;
    name?: string;
    description?: string;
    enabled_for_end_consumer?: boolean;
    details?: AttributeMasterDetails;
    filters?: AttributeMasterFilter;
    meta?: AttributeMasterMeta;
    slug?: string;
    id?: string;
    logo?: string;
    departments?: string[];
    is_nested?: boolean;
};
type ProdcutTemplateCategoriesResponse = {
    page?: Page;
    items?: any[];
};
type PTErrorResponse = {
    status?: number;
    errors?: any;
    meta?: any;
    message?: string;
    code?: string;
};
type UserSerializer = {
    contact?: string;
    _id?: string;
    username?: string;
    uid?: string;
    user_id?: string;
};
type GetDepartment = {
    page_size?: number;
    modified_on?: string;
    priority_order?: number;
    name?: string;
    uid?: number;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    slug?: string;
    page_no?: number;
    item_type?: string;
    logo?: string;
    is_active?: boolean;
    created_on?: string;
    search?: string;
    synonyms?: string[];
};
type DepartmentsResponse = {
    page?: Page;
    items?: GetDepartment[];
};
type DepartmentErrorResponse = {
    status?: number;
    errors?: any;
    meta?: any;
    message?: string;
    code?: string;
};
type DepartmentCreateUpdate = {
    _cls?: string;
    priority_order: number;
    name: string;
    _custom_json?: any;
    uid?: number;
    slug?: string;
    platforms?: any;
    tags?: string[];
    logo: string;
    is_active?: boolean;
    synonyms?: string[];
};
type DepartmentCreateResponse = {
    uid: number;
    message: string;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserDetail = {
    username: string;
    super_user?: boolean;
    contact?: string;
    user_id: string;
};
type DepartmentModel = {
    verified_by?: UserDetail;
    _id?: any;
    _cls?: any;
    modified_on: string;
    priority_order: number;
    name: any;
    _custom_json?: any;
    uid?: number;
    created_by?: UserDetail;
    modified_by?: UserDetail;
    slug?: any;
    logo: string;
    verified_on?: string;
    is_active?: boolean;
    created_on: string;
    synonyms?: any[];
};
type ProductTemplate = {
    attributes?: string[];
    tag?: string;
    modified_on?: string;
    name?: string;
    description?: string;
    is_archived?: boolean;
    created_by?: any;
    categories?: string[];
    modified_by?: any;
    slug: string;
    is_expirable: boolean;
    created_on?: string;
    logo?: string;
    is_active?: boolean;
    is_physical: boolean;
    departments?: string[];
};
type TemplatesResponse = {
    page?: Page;
    items?: ProductTemplate;
};
type Properties = {
    command?: any;
    return_config?: any;
    description?: any;
    highlights?: any;
    size_guide?: any;
    sizes?: any;
    item_code?: any;
    no_of_boxes?: any;
    name?: any;
    custom_order?: any;
    category_slug?: any;
    product_publish?: any;
    currency?: any;
    variants?: any;
    trader_type?: any;
    hsn_code?: any;
    multi_size?: any;
    slug?: any;
    media?: any;
    tags?: any;
    is_dependent?: any;
    short_description?: any;
    teaser_tag?: any;
    product_group_tag?: any;
    trader?: any;
    brand_uid?: any;
    country_of_origin?: any;
    is_active?: any;
    item_type?: any;
};
type GlobalValidation = {
    required?: string[];
    description?: string;
    type?: string;
    definitions?: any;
    title?: string;
    properties?: Properties;
};
type TemplateValidationData = {
    template_validation?: any;
    global_validation?: GlobalValidation;
};
type TemplateDetails = {
    attributes?: string[];
    tag?: string;
    name?: string;
    description?: string;
    is_archived?: boolean;
    categories?: string[];
    slug: string;
    is_expirable: boolean;
    id?: string;
    logo?: string;
    is_active?: boolean;
    is_physical: boolean;
    departments?: string[];
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
    status?: string;
    data?: ProductDownloadItemsData;
    url?: string;
    created_by?: VerifiedBy;
    task_id?: string;
    template_tags?: any;
    trigger_on?: string;
    completed_on?: string;
    id?: string;
    seller_id?: number;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
};
type Hierarchy = {
    l2: number;
    department: number;
    l1: number;
};
type Media2 = {
    portrait: string;
    logo: string;
    landscape: string;
};
type Category = {
    modified_on?: string;
    name: string;
    level: number;
    uid?: number;
    created_by?: any;
    priority?: number;
    modified_by?: any;
    marketplaces?: CategoryMapping;
    hierarchy?: Hierarchy[];
    slug?: string;
    tryouts?: string[];
    media?: Media2;
    id?: string;
    is_active: boolean;
    created_on?: string;
    departments: number[];
    synonyms?: string[];
};
type CategoryResponse = {
    page?: Page;
    items?: Category[];
};
type CategoryRequestBody = {
    name: string;
    level: number;
    priority?: number;
    marketplaces?: CategoryMapping;
    hierarchy?: Hierarchy[];
    slug?: string;
    tryouts?: string[];
    media?: Media2;
    is_active: boolean;
    departments: number[];
    synonyms?: string[];
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
type ReturnConfigResponse = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type Image = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Logo = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type Product = {
    template_tag?: string;
    return_config?: ReturnConfigResponse;
    modified_on?: string;
    description?: string;
    all_sizes?: any[];
    highlights?: string[];
    size_guide?: string;
    is_set?: boolean;
    sizes?: any[];
    item_code?: string;
    id?: string;
    stage?: string;
    created_on?: string;
    no_of_boxes?: number;
    images?: Image[];
    attributes?: any;
    tax_identifier?: any;
    name?: string;
    variant_media?: any;
    custom_order?: any;
    all_company_ids?: number[];
    category_slug?: string;
    l3_mapping?: string[];
    primary_color?: string;
    is_image_less_product?: boolean;
    departments?: number[];
    product_publish?: ProductPublished;
    category_uid?: number;
    currency?: string;
    variants?: any;
    uid?: number;
    brand?: Brand;
    color?: string;
    created_by?: any;
    hsn_code?: string;
    multi_size?: boolean;
    modified_by?: any;
    category?: any;
    moq?: any;
    slug?: string;
    is_expirable?: boolean;
    media?: Media1[];
    tags?: string[];
    all_identifiers?: string[];
    is_dependent?: boolean;
    short_description?: string;
    is_physical?: boolean;
    teaser_tag?: any;
    pending?: string;
    verified_by?: VerifiedBy;
    verified_on?: string;
    product_group_tag?: string[];
    _custom_json?: any;
    image_nature?: string;
    brand_uid?: number;
    trader?: any[];
    company_id?: number;
    country_of_origin?: string;
    variant_group?: any;
    net_quantity?: NetQuantityResponse;
    is_active?: boolean;
    item_type?: string;
};
type ProductListingResponse = {
    page?: Page;
    items?: Product[];
};
type TaxIdentifier = {
    hsn_code?: string;
    reporting_hsn?: string;
    hsn_code_id?: string;
};
type CustomOrder = {
    is_custom_order?: boolean;
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type Trader = {
    address?: string[];
    type?: string;
    name: any;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type ProductCreateUpdateSchemaV2 = {
    template_tag: string;
    return_config: ReturnConfig;
    description?: string;
    highlights?: string[];
    size_guide?: string;
    is_set?: boolean;
    sizes: any[];
    item_code: string;
    no_of_boxes?: number;
    change_request_id?: any;
    attributes: any;
    tax_identifier: TaxIdentifier;
    name: string;
    variant_media?: any;
    custom_order?: CustomOrder;
    category_slug: string;
    is_image_less_product?: boolean;
    departments: number[];
    product_publish?: ProductPublish;
    currency: string;
    variants?: any;
    uid?: number;
    multi_size?: boolean;
    slug: string;
    requester?: string;
    media?: Media1[];
    tags?: string[];
    is_dependent?: boolean;
    short_description?: string;
    action?: string;
    teaser_tag?: TeaserTag;
    product_group_tag?: string[];
    bulk_job_id?: string;
    _custom_json?: any;
    brand_uid: number;
    trader: Trader[];
    company_id: number;
    country_of_origin: string;
    variant_group?: any;
    net_quantity?: NetQuantity;
    is_active?: boolean;
    item_type: string;
};
type ProductVariants = {
    category_uid?: number;
    name?: string;
    uid?: number;
    brand_uid?: number;
    item_code?: string;
    media?: Media1[];
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    schema: AttributeMaster;
    modified_on?: string;
    suggestion?: string;
    description?: string;
    filters: AttributeMasterFilter;
    variant?: boolean;
    created_on?: string;
    name?: string;
    enabled_for_end_consumer?: boolean;
    raw_key?: string;
    departments: string[];
    created_by?: any;
    modified_by?: any;
    slug: string;
    tags?: string[];
    logo?: string;
    synonyms?: any;
    details: AttributeMasterDetails;
    unit?: string;
    is_nested?: boolean;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    gtin_type: string;
    gtin_value: string;
    primary?: boolean;
};
type AllSizes = {
    item_height: number;
    item_width: number;
    item_length: number;
    size: any;
    item_dimensions_unit_of_measure: string;
    item_weight: number;
    identifiers?: ValidateIdentifier[];
    item_weight_unit_of_measure: any;
};
type ListALLSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    username?: string;
    full_name?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    template_tag?: string;
    modified_on?: string;
    total?: number;
    template?: ProductTemplate;
    cancelled_records?: string[];
    failed_records?: string[];
    failed?: number;
    created_by?: UserDetail1;
    file_path?: string;
    succeed?: number;
    cancelled?: number;
    company_id?: number;
    modified_by?: UserDetail1;
    stage?: string;
    is_active?: boolean;
    created_on?: string;
};
type ProductBulkRequestList = {
    page?: Page;
    items?: ProductBulkRequest;
};
type UserInfo1 = {
    username?: string;
    email?: string;
    uid?: string;
    user_id?: string;
};
type BulkJob = {
    template_tag?: string;
    modified_on?: string;
    total?: number;
    tracking_url?: string;
    succeed?: number;
    cancelled?: number;
    cancelled_records?: any[];
    created_by?: UserInfo1;
    failed?: number;
    modified_by?: UserInfo1;
    failed_records?: any[];
    company_id: number;
    file_path?: string;
    custom_template_tag?: string;
    stage?: string;
    is_active?: boolean;
    created_on: string;
};
type BulkResponse = {
    modified_on?: string;
    created_by?: UserInfo1;
    modified_by?: UserInfo1;
    batch_id: string;
    is_active?: boolean;
    created_on: string;
};
type BulkProductRequest = {
    company_id: number;
    template_tag: string;
    batch_id: string;
    data: any[];
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
    retry?: number;
    modified_on?: string;
    total?: number;
    tracking_url?: string;
    succeed?: number;
    cancelled_records?: string[];
    failed?: number;
    created_by?: UserCommon;
    file_path?: string;
    modified_by?: UserCommon;
    failed_records?: string[];
    company_id?: number;
    cancelled?: number;
    id?: string;
    stage?: string;
    is_active?: boolean;
    created_on?: string;
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
    quantity?: number;
    price?: number;
    currency?: string;
    sellable_quantity?: number;
    inventory_updated_on?: string;
    seller_identifier?: string;
    price_effective?: number;
    size?: string;
    uid?: string;
    price_transfer?: number;
    item_id?: number;
    identifiers?: any;
    store?: any;
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
    quantity?: number;
    name?: string;
};
type GTIN = {
    gtin_type: string;
    gtin_value: any;
    primary?: boolean;
};
type InvSize = {
    item_height?: number;
    item_width?: number;
    price?: number;
    quantity: number;
    store_code: string;
    item_length?: number;
    currency: string;
    size: any;
    price_effective: number;
    expiration_date?: string;
    price_transfer?: number;
    item_weight?: number;
    item_dimensions_unit_of_measure?: string;
    is_set?: boolean;
    set?: InventorySet;
    identifiers: GTIN[];
    item_weight_unit_of_measure?: string;
};
type ItemQuery = {
    uid?: number;
    brand_uid?: number;
    item_code?: string;
};
type InventoryRequest = {
    company_id: number;
    sizes: InvSize[];
    item: ItemQuery;
};
type ReturnConfig1 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type ManufacturerResponse = {
    address: string;
    is_default: boolean;
    name: string;
};
type DimensionResponse = {
    width: number;
    length: number;
    is_default: boolean;
    unit: string;
    height: number;
};
type BrandMeta = {
    id: number;
    name: string;
};
type WeightResponse = {
    unit: string;
    is_default: boolean;
    shipping: number;
};
type QuantityBase = {
    count?: number;
    updated_at?: string;
};
type Quantities = {
    damaged?: QuantityBase;
    order_committed?: QuantityBase;
    not_available?: QuantityBase;
    sellable?: QuantityBase;
};
type CompanyMeta = {
    id: number;
};
type PriceMeta = {
    currency: string;
    transfer: number;
    tp_notes?: any;
    updated_at?: string;
    effective: number;
    marked: number;
};
type Trader1 = {
    address: string[];
    type: string;
    name: string;
};
type InventorySellerResponse = {
    track_inventory?: boolean;
    return_config?: ReturnConfig1;
    raw_meta?: any;
    item_id: number;
    added_on_store?: string;
    identifier: any;
    manufacturer: ManufacturerResponse;
    is_set?: boolean;
    stage?: string;
    fragile: boolean;
    tax_identifier?: any;
    meta?: any;
    dimension: DimensionResponse;
    fynd_item_code: string;
    fynd_article_code: string;
    size: string;
    uid: string;
    brand: BrandMeta;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    weight: WeightResponse;
    total_quantity: number;
    quantities?: Quantities;
    set?: InventorySet;
    tags?: string[];
    company: CompanyMeta;
    price: PriceMeta;
    seller_identifier: string;
    _custom_json?: any;
    expiration_date?: string;
    trader?: Trader1[];
    trace_id?: string;
    fynd_meta?: any;
    country_of_origin: string;
    is_active?: boolean;
    store: StoreMeta;
};
type InventorySellerIdentifierResponsePaginated = {
    page?: Page;
    items?: InventorySellerResponse[];
};
type ReturnConfig2 = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type DimensionResponse1 = {
    width?: number;
    unit?: string;
    length?: number;
    height?: number;
};
type BrandMeta1 = {
    id?: number;
    name?: string;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    damaged?: Quantity;
    order_committed?: Quantity;
    not_available?: Quantity;
    sellable?: Quantity;
};
type CompanyMeta1 = {
    id?: number;
};
type PriceArticle = {
    currency?: string;
    transfer?: number;
    tp_notes?: any;
    effective?: number;
    marked?: number;
};
type Trader2 = {
    address?: string[];
    type?: string;
    name?: string;
};
type ManufacturerResponse1 = {
    address?: string;
    is_default?: boolean;
    name?: string;
};
type ArticleStoreResponse = {
    store_type?: string;
    uid?: number;
    store_code?: string;
    name?: string;
};
type GetInventories = {
    track_inventory?: boolean;
    return_config?: ReturnConfig2;
    inventory_updated_on?: string;
    item_id?: number;
    identifier?: any;
    is_set?: boolean;
    id?: string;
    stage?: string;
    tax_identifier?: any;
    date_meta?: DateMeta;
    dimension?: DimensionResponse1;
    size?: string;
    uid?: string;
    brand?: BrandMeta1;
    created_by?: UserSerializer;
    modified_by?: UserSerializer;
    weight?: WeightResponse1;
    total_quantity?: number;
    quantities?: QuantitiesArticle;
    platforms?: any;
    tags?: string[];
    company?: CompanyMeta1;
    price?: PriceArticle;
    seller_identifier?: string;
    expiration_date?: string;
    trader?: Trader2[];
    trace_id?: string;
    country_of_origin?: string;
    manufacturer?: ManufacturerResponse1;
    store?: ArticleStoreResponse;
};
type GetInventoriesResponse = {
    page?: Page;
    items?: GetInventories[];
};
type BulkInventoryGetItems = {
    modified_on?: string;
    total?: number;
    cancelled_records?: string[];
    cancelled?: number;
    failed?: number;
    created_by?: any;
    failed_records?: string[];
    file_path?: string;
    modified_by?: any;
    company_id?: number;
    succeed?: number;
    id?: string;
    stage?: string;
    is_active?: boolean;
    created_on?: string;
};
type BulkInventoryGet = {
    page?: Page;
    items?: BulkInventoryGetItems[];
};
type InventoryJobPayload = {
    quantity?: number;
    price?: number;
    store_code: string;
    currency?: string;
    seller_identifier: string;
    price_effective?: number;
    price_marked?: number;
    expiration_date?: string;
    trace_id?: string;
    item_dimensions_unit_of_measure?: string;
    total_quantity?: number;
    tags?: string[];
    item_weight_unit_of_measure?: string;
};
type InventoryBulkRequest = {
    company_id: number;
    batch_id: string;
    user?: any;
    sizes: InventoryJobPayload[];
};
type InventoryExportJob = {
    status?: string;
    url?: string;
    request_params?: any;
    task_id: string;
    trigger_on?: string;
    completed_on?: string;
    seller_id: number;
};
type InventoryExportRequest = {
    type?: string;
    brand?: number[];
    store?: number[];
};
type InventoryExportResponse = {
    status?: string;
    request_params?: any;
    task_id: string;
    trigger_on?: string;
    seller_id: number;
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
    seller_identifier: string;
    price_effective?: number;
    price_marked?: number;
    expiration_date?: string;
    trace_id?: string;
    total_quantity?: number;
    tags?: string[];
};
type InventoryRequestSchemaV2 = {
    company_id: number;
    payload?: InventoryPayload[];
    meta?: any;
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
    current?: string;
    size?: number;
    has_previous?: boolean;
    has_next?: boolean;
    item_total?: number;
};
type HsnCodesObject = {
    modified_on?: string;
    hs2_code?: string;
    threshold2?: number;
    hsn_code?: string;
    company_id?: number;
    tax_on_esp?: boolean;
    tax1?: number;
    tax_on_mrp?: boolean;
    threshold1?: number;
    id?: string;
    tax2?: number;
};
type HsnCodesListingResponse = {
    page?: PageResponse;
    items?: HsnCodesObject[];
};
type HsnUpsert = {
    hs2_code: string;
    uid?: number;
    threshold2?: number;
    hsn_code: string;
    company_id: number;
    tax_on_esp?: boolean;
    tax1: number;
    tax_on_mrp: boolean;
    threshold1: number;
    tax2?: number;
    is_active?: boolean;
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
    threshold: number;
    cess?: number;
};
type HSNDataInsertV2 = {
    taxes: TaxSlab[];
    modified_on?: string;
    description: string;
    type: string;
    created_by?: any;
    modified_by?: any;
    hsn_code: string;
    country_code: string;
    created_on?: string;
    reporting_hsn: string;
};
type HsnCodesListingResponseSchemaV2 = {
    page?: PageResponse;
    items?: HSNDataInsertV2[];
};
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type ArticleQuery = {
    ignored_stores?: number[];
    size: string;
    item_id: number;
};
type AssignStoreArticle = {
    article_assignment?: ArticleAssignment;
    query?: ArticleQuery;
    quantity?: number;
    group_id?: string;
    meta?: any;
};
type AssignStore = {
    channel_identifier?: string;
    articles: AssignStoreArticle[];
    app_id: string;
    company_id?: number;
    channel_type?: string;
    pincode: string;
    store_ids?: number[];
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    article_assignment: ArticleAssignment1;
    _id?: string;
    quantity: number;
    s_city?: string;
    status: boolean;
    group_id?: string;
    store_id?: number;
    size: string;
    uid?: string;
    price_effective?: number;
    index?: number;
    price_marked?: number;
    meta?: any;
    item_id: number;
    company_id?: number;
    strategy_wise_listing?: any[];
    store_pincode?: number;
};
type BrandItem = {
    name?: string;
    uid?: number;
    banners?: ImageUrls;
    slug?: string;
    logo?: Media;
    action?: Action;
    departments?: string[];
    discount?: string;
};
type BrandListingResponse = {
    page: Page;
    items?: BrandItem[];
};
type Department = {
    priority_order?: number;
    name?: string;
    uid?: number;
    slug?: string;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    _custom_json?: any;
    name?: string;
    uid?: number;
    childs?: any[];
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
};
type SecondLevelChild = {
    _custom_json?: any;
    name?: string;
    uid?: number;
    childs?: ThirdLevelChild[];
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
};
type Child = {
    _custom_json?: any;
    name?: string;
    uid?: number;
    childs?: SecondLevelChild[];
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
};
type CategoryItems = {
    name?: string;
    uid?: number;
    childs?: Child[];
    banners?: ImageUrls;
    slug?: string;
    action?: Action;
};
type DepartmentCategoryTree = {
    department?: string;
    items?: CategoryItems[];
};
type DepartmentIdentifier = {
    uid?: number;
    slug?: string;
};
type CategoryListingResponse = {
    data?: DepartmentCategoryTree[];
    departments?: DepartmentIdentifier[];
};
type ApplicationProductListingResponse = {
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    operators?: any;
    page: Page;
    sort_on?: ProductSortOn[];
};
type ProductDetail = {
    promo_meta?: any;
    similars?: string[];
    description?: string;
    highlights?: string[];
    item_code?: string;
    product_online_date?: string;
    attributes?: any;
    name?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    rating?: number;
    tryouts?: string[];
    uid?: number;
    brand?: ProductBrand;
    color?: string;
    medias?: Media1[];
    slug: string;
    short_description?: string;
    teaser_tag?: any;
    rating_count?: number;
    image_nature?: string;
    type?: string;
    has_variant?: boolean;
    item_type?: string;
};
type InventoryPage = {
    type: string;
    has_previous?: boolean;
    has_next?: boolean;
    item_total: number;
    next_id?: string;
};
type InventoryStockResponse = {
    page: InventoryPage;
    items?: any[];
};
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
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
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
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
type UserSerializer1 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type UserSerializer2 = {
    username?: string;
    contact?: string;
    user_id?: string;
};
type GetAddressSerializer = {
    country?: string;
    address_type?: string;
    landmark?: string;
    state?: string;
    latitude?: number;
    city?: string;
    address1?: string;
    country_code?: string;
    address2?: string;
    longitude?: number;
    pincode?: number;
};
type GetCompanySerializer = {
    verified_by?: UserSerializer2;
    modified_on?: string;
    name?: string;
    uid?: number;
    created_by?: UserSerializer2;
    reject_reason?: string;
    modified_by?: UserSerializer2;
    company_type?: string;
    stage?: string;
    addresses?: GetAddressSerializer[];
    verified_on?: string;
    business_type?: string;
    created_on?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    weekday: string;
    open: boolean;
    closing?: LocationTimingSerializer;
};
type GetLocationSerializer = {
    modified_on?: string;
    product_return_config?: ProductReturnConfigSerializer;
    display_name: string;
    store_type?: string;
    stage?: string;
    created_on?: string;
    gst_credentials?: InvoiceDetailsSerializer;
    name: string;
    documents?: Document[];
    warnings?: any;
    integration_type?: LocationIntegrationType;
    code: string;
    uid?: number;
    manager?: LocationManagerSerializer;
    created_by?: UserSerializer1;
    modified_by?: UserSerializer1;
    verified_on?: string;
    verified_by?: UserSerializer1;
    company?: GetCompanySerializer;
    contact_numbers?: SellerPhoneNumber[];
    notification_emails?: string[];
    _custom_json?: any;
    phone_number: string;
    address: GetAddressSerializer;
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
    app_id: string;
    name?: string;
    _custom_json?: any;
    uid: number;
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
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
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
    addresses?: GetAddressSerializer[];
    business_details?: BusinessDetails;
    notification_emails?: string[];
    warnings?: any;
    _custom_json?: any;
    uid: number;
    business_type: string;
    franchise_enabled?: boolean;
    business_country_info?: BusinessCountryInfo;
    verified_by?: UserSerializer;
    verified_on?: string;
    modified_on?: string;
    taxes?: CompanyTaxesSerializer[];
    name?: string;
    company_type: string;
    created_on?: string;
    documents?: Document[];
    modified_by?: UserSerializer;
    contact_details?: ContactDetails;
    business_info?: string;
    created_by?: UserSerializer;
    stage?: string;
    mode?: string;
};
type CreateUpdateAddressSerializer = {
    address2?: string;
    longitude: number;
    address1: string;
    state: string;
    address_type: string;
    country: string;
    latitude: number;
    pincode: number;
    landmark?: string;
    country_code?: string;
    city: string;
};
type CompanyTaxesSerializer1 = {
    enable?: boolean;
    rate?: number;
    effective_date?: string;
};
type UpdateCompany = {
    addresses?: CreateUpdateAddressSerializer[];
    reject_reason?: string;
    documents?: Document[];
    taxes?: CompanyTaxesSerializer1[];
    business_type?: string;
    contact_details?: ContactDetails;
    name?: string;
    notification_emails?: string[];
    business_details?: BusinessDetails;
    franchise_enabled?: boolean;
    warnings?: any;
    _custom_json?: any;
    company_type?: string;
    business_info?: string;
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
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
    uid?: number;
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    product?: DocumentsObj;
    stage?: string;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    synonyms?: string[];
    warnings?: any;
    _custom_json?: any;
    uid?: number;
    banner?: BrandBannerSerializer;
    verified_by?: UserSerializer;
    verified_on?: string;
    modified_on?: string;
    slug_key?: string;
    name: string;
    _locale_language?: any;
    created_on?: string;
    logo?: string;
    reject_reason?: string;
    modified_by?: UserSerializer;
    description?: string;
    created_by?: UserSerializer;
    stage?: string;
    mode?: string;
};
type CreateUpdateBrandRequestSerializer = {
    logo: string;
    uid?: number;
    synonyms?: string[];
    name: string;
    description?: string;
    brand_tier?: string;
    _custom_json?: any;
    company_id?: number;
    _locale_language?: any;
    banner?: BrandBannerSerializer;
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
    addresses?: GetAddressSerializer[];
    _custom_json?: any;
    created_on?: string;
    reject_reason?: string;
    verified_on?: string;
    modified_on?: string;
    uid?: number;
    modified_by?: UserSerializer;
    business_type: string;
    business_country_info?: BusinessCountryInfo;
    details?: CompanyDetails;
    name?: string;
    notification_emails?: string[];
    market_channels?: string[];
    company_type: string;
    created_by?: UserSerializer;
    stage?: string;
    verified_by?: UserSerializer;
};
type CompanyBrandSerializer = {
    created_on?: string;
    reject_reason?: string;
    verified_on?: string;
    brand?: GetBrandResponseSerializer;
    modified_on?: string;
    uid?: number;
    modified_by?: UserSerializer;
    warnings?: any;
    company?: CompanySerializer;
    created_by?: UserSerializer;
    stage?: string;
    verified_by?: UserSerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    company: number;
    uid?: number;
    brands: number[];
};
type HolidayDateSerializer = {
    end_date: string;
    start_date: string;
};
type HolidaySchemaSerializer = {
    date: HolidayDateSerializer;
    title: string;
    holiday_type: string;
};
type LocationSerializer = {
    timing?: LocationDayWiseSerializer[];
    documents?: Document[];
    display_name: string;
    uid?: number;
    address: GetAddressSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    name: string;
    store_type?: string;
    holiday?: HolidaySchemaSerializer[];
    code: string;
    notification_emails?: string[];
    manager?: LocationManagerSerializer;
    warnings?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    _custom_json?: any;
    company: number;
    stage?: string;
    contact_numbers?: SellerPhoneNumber[];
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleQuery = {
    ignored_stores?: number[];
    item_id?: number;
    size?: string;
};
type _ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type _AssignStoreArticle = {
    meta?: any;
    query?: _ArticleQuery;
    quantity?: number;
    article_assignment?: _ArticleAssignment;
    group_id?: string;
};
type AssignStoreRequestValidator = {
    app_id?: string;
    articles?: _AssignStoreArticle[];
    channel_type?: string;
    store_ids?: number[];
    company_id?: number;
    pincode?: string;
    channel_identifier?: string;
};
type AssignStoreResponseSerializer = {
    meta?: any;
    store_id?: number;
    size?: string;
    index?: number;
    uid?: string;
    quantity?: number;
    store_pincode?: string;
    _id?: string;
    status?: boolean;
    article_assignment?: _ArticleAssignment;
    price_marked?: number;
    item_id?: number;
    preice_effective?: number;
    s_city?: string;
    company_id?: number;
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
    gstores?: GStore[];
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
    integration: string;
    integration_data?: any;
    company_name?: string;
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
    integration: string;
    company_name: string;
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
    mapping?: any;
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
type Rule = {
    discount_qty?: number;
    key?: number;
    min?: number;
    max?: number;
    value?: number;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    description?: string;
    auto?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    title?: string;
    subtitle?: string;
    remove?: DisplayMetaDict;
};
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponSchedule = {
    start?: string;
    cron?: string;
    next_schedule?: any[];
    end?: string;
    duration?: number;
};
type RuleDefinition = {
    scope?: string[];
    value_type: string;
    type: string;
    calculate_on: string;
    is_exact?: boolean;
    auto_apply?: boolean;
    applicable_on: string;
    currency_code?: string;
};
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    codes?: string[];
    uses?: PaymentAllowValue;
    types?: string[];
    networks?: string[];
};
type PriceRange = {
    min?: number;
    max?: number;
};
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
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
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    payments?: any;
    price_range?: PriceRange;
    coupon_allowed?: boolean;
    post_order?: PostOrder;
    user_groups?: number[];
    user_type?: string;
    uses?: UsesRestriction;
    bulk_bundle?: BulkBundleRestriction;
    ordering_stores?: number[];
    platforms?: string[];
};
type Validity = {
    priority?: number;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CouponAdd = {
    rule: Rule[];
    display_meta: DisplayMeta;
    validation?: Validation;
    type_slug: string;
    state?: State;
    author?: CouponAuthor;
    action?: CouponAction;
    ownership: Ownership;
    _schedule?: CouponSchedule;
    tags?: string[];
    rule_definition: RuleDefinition;
    restrictions?: Restrictions;
    validity: Validity;
    date_meta?: CouponDateMeta;
    code: string;
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
    rule: Rule[];
    display_meta: DisplayMeta;
    validation?: Validation;
    type_slug: string;
    state?: State;
    author?: CouponAuthor;
    action?: CouponAction;
    ownership: Ownership;
    _schedule?: CouponSchedule;
    tags?: string[];
    rule_definition: RuleDefinition;
    restrictions?: Restrictions;
    validity: Validity;
    date_meta?: CouponDateMeta;
    code: string;
    identifiers: Identifier;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type DisplayMeta1 = {
    description?: string;
    offer_text?: string;
    name?: string;
};
type CompareObject = {
    greater_than_equals?: number;
    equals?: number;
    less_than?: number;
    less_than_equals?: number;
    greater_than?: number;
};
type ItemCriteria = {
    cart_unique_item_quantity?: CompareObject;
    item_id?: number[];
    item_sku?: string[];
    item_store?: number[];
    buy_rules?: string[];
    item_exclude_category?: number[];
    item_exclude_brand?: number[];
    item_size?: string[];
    available_zones?: string[];
    cart_total?: CompareObject;
    item_exclude_id?: number[];
    item_category?: number[];
    item_exclude_company?: number[];
    item_exclude_sku?: string[];
    item_brand?: number[];
    item_company?: number[];
    cart_quantity?: CompareObject;
    all_items?: boolean;
    cart_unique_item_amount?: CompareObject;
    item_exclude_store?: number[];
};
type DiscountOffer = {
    partial_can_ret?: boolean;
    max_offer_quantity?: number;
    apportion_discount?: boolean;
    max_discount_amount?: number;
    discount_amount?: number;
    code?: string;
    discount_percentage?: number;
    discount_price?: number;
    max_usage_per_transaction?: number;
    min_offer_quantity?: number;
};
type DiscountRule = {
    discount_type: string;
    buy_condition: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionSchedule = {
    published: boolean;
    start: string;
    cron?: string;
    next_schedule?: any[];
    end?: string;
    duration?: number;
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
type Restrictions1 = {
    user_registered?: UserRegistered;
    user_id?: string[];
    payments?: PromotionPaymentModes[];
    post_order?: PostOrder1;
    anonymous_users?: boolean;
    user_groups?: number[];
    uses: UsesRestriction1;
    platforms?: string[];
    order_quantity?: number;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionListItem = {
    display_meta: DisplayMeta1;
    discount_rules: DiscountRule[];
    apply_exclusive?: string;
    buy_rules: any;
    apply_all_discount?: boolean;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    apply_priority?: number;
    date_meta?: PromotionDateMeta;
    code?: string;
    application_id: string;
    stackable?: boolean;
    calculate_on?: string;
    ownership: Ownership1;
    _schedule?: PromotionSchedule;
    promo_group: string;
    restrictions?: Restrictions1;
    visiblility?: Visibility;
    currency?: string;
    promotion_type: string;
    _custom_json?: any;
    mode: string;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    display_meta: DisplayMeta1;
    discount_rules: DiscountRule[];
    apply_exclusive?: string;
    buy_rules: any;
    apply_all_discount?: boolean;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    apply_priority?: number;
    date_meta?: PromotionDateMeta;
    code?: string;
    application_id: string;
    stackable?: boolean;
    calculate_on?: string;
    ownership: Ownership1;
    _schedule?: PromotionSchedule;
    promo_group: string;
    restrictions?: Restrictions1;
    visiblility?: Visibility;
    currency?: string;
    promotion_type: string;
    _custom_json?: any;
    mode: string;
};
type PromotionUpdate = {
    display_meta: DisplayMeta1;
    discount_rules: DiscountRule[];
    apply_exclusive?: string;
    buy_rules: any;
    apply_all_discount?: boolean;
    post_order_action?: PromotionAction;
    author?: PromotionAuthor;
    apply_priority?: number;
    date_meta?: PromotionDateMeta;
    code?: string;
    application_id: string;
    stackable?: boolean;
    calculate_on?: string;
    ownership: Ownership1;
    _schedule?: PromotionSchedule;
    promo_group: string;
    restrictions?: Restrictions1;
    visiblility?: Visibility;
    currency?: string;
    promotion_type: string;
    _custom_json?: any;
    mode: string;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    description?: string;
    is_hidden?: boolean;
    type?: string;
    example?: string;
    created_on?: string;
    entity_type?: string;
    modified_on?: string;
    subtitle?: string;
    title?: string;
    entity_slug?: string;
};
type CartItem = {
    size: string;
    product_id: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type RawBreakup = {
    gst_charges?: number;
    you_saved?: number;
    subtotal?: number;
    total?: number;
    cod_charge?: number;
    gift_card?: number;
    fynd_cash?: number;
    coupon?: number;
    discount?: number;
    vog?: number;
    delivery_charge?: number;
    mrp_total?: number;
    convenience_fee?: number;
};
type DisplayBreakup = {
    display?: string;
    key?: string;
    currency_symbol?: string;
    message?: string[];
    currency_code?: string;
    value?: number;
};
type CouponBreakup = {
    max_discount_value?: number;
    uid?: string;
    description?: string;
    sub_title?: string;
    type?: string;
    is_applied?: boolean;
    coupon_type?: string;
    title?: string;
    message?: string;
    code?: string;
    coupon_value?: number;
    value?: number;
    minimum_cart_value?: number;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    applicable?: number;
    total?: number;
    description?: string;
};
type CartBreakup = {
    raw?: RawBreakup;
    display?: DisplayBreakup[];
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
};
type ProductPrice = {
    effective?: number;
    add_on?: number;
    currency_symbol?: string;
    currency_code?: string;
    selling?: number;
    marked?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type FreeGiftItem = {
    item_price_details?: any;
    item_brand_name?: string;
    item_slug?: string;
    item_id?: number;
    item_name?: string;
    item_images_url?: string[];
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    article_id?: string;
    parent_item_identifier?: string;
    quantity?: number;
};
type DiscountRulesApp = {
    matched_buy_rules?: string[];
    raw_offer?: any;
    item_criteria?: any;
    offer?: any;
};
type AppliedPromotion = {
    applied_free_articles?: AppliedFreeArticles[];
    offer_text?: string;
    discount_rules?: DiscountRulesApp[];
    article_quantity?: number;
    promotion_name?: string;
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
    promotion_type?: string;
    amount?: number;
    promo_id?: string;
    promotion_group?: string;
};
type ProductAvailability = {
    other_store_quantity?: number;
    sizes?: string[];
    is_valid?: boolean;
    deliverable?: boolean;
    out_of_stock?: boolean;
};
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    query?: ActionQuery;
    url?: string;
    type?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type Tags = {
    tags?: any;
};
type ProductImage = {
    secure_url?: string;
    aspect_ratio?: string;
    url?: string;
};
type CartProduct = {
    uid?: number;
    type?: string;
    brand?: BaseInfo;
    action?: ProductAction;
    tags?: string[];
    name?: string;
    categories?: CategoryInfo[];
    _custom_json?: any;
    teaser_tag?: Tags;
    images?: ProductImage[];
    slug?: string;
};
type CouponDetails = {
    discount_single_quantity?: number;
    code?: string;
    discount_total_quantity?: number;
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
    identifier?: any;
    uid?: string;
    product_group_tags?: string[];
    type?: string;
    quantity?: number;
    price?: ArticlePriceInfo;
    store?: BaseInfo;
    size?: string;
    seller?: BaseInfo;
    parent_item_identifiers?: any;
    extra_meta?: any;
    gift_card?: any;
    seller_identifier?: string;
    is_gift_visible?: boolean;
    cart_item_meta?: any;
};
type PromoMeta = {
    message?: string;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    quantity?: number;
    price?: ProductPriceInfo;
    coupon_message?: string;
    promotions_applied?: AppliedPromotion[];
    key?: string;
    is_set?: boolean;
    bulk_offer?: any;
    availability?: ProductAvailability;
    product?: CartProduct;
    coupon?: CouponDetails;
    parent_item_identifiers?: any;
    discount?: string;
    message?: string;
    price_per_unit?: ProductPriceInfo;
    article?: ProductArticle;
    promo_meta?: PromoMeta;
    identifiers: CartProductIdentifer;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    is_valid?: boolean;
    message?: string;
};
type OpenApiErrorResponse = {
    errors?: any;
    message?: string;
    success?: boolean;
};
type ShippingAddress = {
    pincode?: number;
    country_code?: string;
    meta?: any;
    phone?: number;
    address?: string;
    state?: string;
    address_type?: string;
    city?: string;
    name?: string;
    area_code_slug?: string;
    area?: string;
    country?: string;
    area_code: string;
    email?: string;
    landmark?: string;
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
    is_valid?: boolean;
    message?: string;
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
    cod_charges: number;
    price_effective: number;
    size: string;
    meta?: CartItemMeta;
    quantity?: number;
    files?: OpenApiFiles[];
    amount_paid: number;
    product_id: number;
    loyalty_discount?: number;
    extra_meta?: any;
    payment_methods: MultiTenderPaymentMethod[];
    coupon_effective_discount: number;
    delivery_charges: number;
    discount: number;
    employee_discount?: number;
    cashback_applied: number;
    price_marked: number;
};
type OpenApiPlatformCheckoutReq = {
    cod_charges: number;
    gstin?: string;
    billing_address: ShippingAddress;
    loyalty_discount?: number;
    cart_items: OpenApiOrderItem[];
    coupon_value: number;
    delivery_charges: number;
    employee_discount?: any;
    currency_code?: string;
    cashback_applied: number;
    payment_mode?: string;
    comment?: string;
    coupon_code: string;
    files?: OpenApiFiles[];
    order_id?: string;
    payment_methods: MultiTenderPaymentMethod[];
    coupon?: string;
    cart_value: number;
    shipping_address?: ShippingAddress;
    affiliate_order_id?: string;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    message?: string;
    success?: boolean;
    order_ref_id?: string;
};
type AbandonedCart = {
    cod_charges?: any;
    meta?: any;
    created_on: string;
    bulk_coupon_discount?: number;
    checkout_mode?: string;
    pick_up_customer_details?: any;
    app_id?: string;
    payments?: any;
    shipments?: any[];
    merge_qty?: boolean;
    last_modified: string;
    expire_at: string;
    order_id?: string;
    payment_methods?: any[];
    cart_value?: number;
    discount?: number;
    is_active?: boolean;
    is_default: boolean;
    fynd_credits?: any;
    promotion?: any;
    gstin?: string;
    is_archive?: boolean;
    delivery_charges?: any;
    cashback: any;
    payment_mode?: string;
    comment?: string;
    buy_now?: boolean;
    _id: string;
    fc_index_map?: number[];
    uid: number;
    user_id: string;
    coupon?: any;
    articles: any[];
};
type AbandonedCartResponse = {
    result?: any;
    page?: Page;
    success?: boolean;
    items?: AbandonedCart[];
    message?: string;
};
type AddProductCart = {
    display?: string;
    item_size?: string;
    product_group_tags?: string[];
    store_id?: number;
    quantity?: number;
    item_id?: number;
    article_assignment?: any;
    seller_id?: number;
    article_id?: string;
    parent_item_identifiers?: any;
    extra_meta?: any;
    pos?: boolean;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    currency?: CartCurrency;
    delivery_charge_info?: string;
    coupon_text?: string;
    gstin?: string;
    items?: CartProductInfo[];
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    last_modified?: string;
    payment_selection_lock?: PaymentSelectionLock;
    message?: string;
    restrict_checkout?: boolean;
    checkout_mode?: string;
    breakup_values?: CartBreakup;
    comment?: string;
    id?: string;
    buy_now?: boolean;
};
type AddCartDetailResponse = {
    partial?: boolean;
    message?: string;
    success?: boolean;
    cart?: CartDetailResponse;
};
type UpdateProductCart = {
    item_size?: string;
    identifiers: CartProductIdentifer;
    quantity?: number;
    item_id?: number;
    article_id?: string;
    extra_meta?: any;
    parent_item_identifiers?: any;
    item_index?: number;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    message?: string;
    success?: boolean;
    cart?: CartDetailResponse;
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
    status?: any;
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
    status?: any;
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
type ServiceabilityrErrorResponse = {
    type: string;
    message: string;
    value: string;
};
type ApplicationServiceabilityConfig = {
    channel_id: string;
    channel_type: string;
    serviceability_type: string;
};
type ApplicationServiceabilityConfigResponse = {
    error?: ServiceabilityrErrorResponse;
    success: boolean;
    data?: ApplicationServiceabilityConfig;
};
type EntityRegionView_Request = {
    parent_id?: string[];
    sub_type: string[];
};
type EntityRegionView_Error = {
    type?: string;
    message?: string;
    value?: string;
};
type EntityRegionView_Items = {
    sub_type: string;
    name: string;
    uid: string;
};
type EntityRegionView_page = {
    has_next: boolean;
    item_total: number;
    current: number;
    type: string;
    size: number;
};
type EntityRegionView_Response = {
    error: EntityRegionView_Error;
    success: boolean;
    data: EntityRegionView_Items[];
    page: EntityRegionView_page;
};
type ListViewProduct = {
    count: number;
    type: string;
};
type ListViewChannels = {
    channel_id: string;
    channel_type: string;
};
type ListViewItems = {
    product: ListViewProduct;
    slug: string;
    is_active: boolean;
    company_id: number;
    name: string;
    pincodes_count: number;
    channels: ListViewChannels;
    zone_id: string;
    stores_count: number;
};
type ListViewSummary = {
    total_active_zones: number;
    total_pincodes_served: number;
    total_zones: number;
};
type ZoneDataItem = {
    has_next: boolean;
    item_total: number;
    type: string;
    current: number;
    size: number;
};
type ListViewResponse = {
    items: ListViewItems[];
    summary: ListViewSummary[];
    page: ZoneDataItem[];
};
type CompanyStoreView_PageItems = {
    has_next: boolean;
    item_total: number;
    current: number;
    type: string;
    size: number;
};
type CompanyStoreView_Response = {
    items?: any[];
    page: CompanyStoreView_PageItems[];
};
type GetZoneDataViewChannels = {
    channel_id: string;
    channel_type: string;
};
type ZoneProductTypes = {
    type: string;
    tags: string[];
};
type ZoneMappingType = {
    pincode?: string[];
    state?: string[];
    country: string;
};
type UpdateZoneData = {
    zone_id: string;
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
type ZoneUpdateRequest = {
    data: UpdateZoneData;
    identifier: string;
};
type ZoneSuccessResponse = {
    status_code: number;
    success: boolean;
};
type GetZoneDataViewItems = {
    zone_id: string;
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
    stores_count: number;
    pincodes_count: number;
};
type GetSingleZoneDataViewResponse = {
    data: GetZoneDataViewItems;
};
type CreateZoneData = {
    name: string;
    slug: string;
    company_id: number;
    is_active: boolean;
    channels: GetZoneDataViewChannels[];
    product: ZoneProductTypes;
    store_ids: number[];
    region_type: string;
    mapping: ZoneMappingType[];
    assignment_preference?: string;
};
type ZoneRequest = {
    data: CreateZoneData;
    identifier: string;
};
type ZoneResponse = {
    status_code: number;
    zone_id: string;
    success: boolean;
};
type GetZoneFromPincodeViewRequest = {
    pincode: string;
    country: string;
};
type GetZoneFromPincodeViewResponse = {
    serviceability_type: string;
    zones: string[];
};
type CreatedByResponse = {
    username?: string;
    user_id?: string;
};
type DocumentsResponse = {
    verified?: boolean;
    legal_name?: string;
    type?: string;
    value?: string;
};
type IntegrationTypeResponse = {
    inventory?: string;
    order?: string;
};
type ContactNumberResponse = {
    number?: string;
    country_code?: number;
};
type ProductReturnConfigResponse = {
    on_same_store?: boolean;
};
type Dp = {
    payment_mode?: string;
    transport_mode?: string;
    assign_dp_from_sb?: boolean;
    lm_priority?: number;
    rvp_priority?: number;
    external_account_id?: string;
    operations?: string[];
    area_code?: number;
    fm_priority?: number;
    internal_account_id?: string;
};
type LogisticsResponse = {
    override?: boolean;
    dp?: Dp;
};
type ModifiedByResponse = {
    username?: string;
    user_id?: string;
};
type EinvoiceResponse = {
    enabled?: boolean;
};
type EwayBillResponse = {
    enabled?: boolean;
};
type GstCredentialsResponse = {
    e_invoice?: EinvoiceResponse;
    e_waybill?: EwayBillResponse;
};
type MobileNo = {
    number?: string;
    country_code?: number;
};
type ManagerResponse = {
    mobile_no?: MobileNo;
    name?: string;
    email?: string;
};
type WarningsResponse = {
    store_address?: string;
};
type OpeningClosing = {
    hour?: number;
    minute?: number;
};
type TimmingResponse = {
    open?: boolean;
    weekday?: string;
    opening?: OpeningClosing;
    closing?: OpeningClosing;
};
type AddressResponse = {
    address2?: string;
    state?: string;
    landmark?: string;
    longitude?: number;
    pincode?: number;
    address1?: string;
    city?: string;
    country?: string;
    latitude?: number;
};
type ItemResponse = {
    store_type?: string;
    created_by?: CreatedByResponse;
    verified_on?: string;
    documents?: DocumentsResponse[];
    integration_type?: IntegrationTypeResponse;
    contact_numbers?: ContactNumberResponse[];
    sub_type?: string;
    notification_emails?: string[];
    product_return_config?: ProductReturnConfigResponse;
    created_on?: string;
    logistics?: LogisticsResponse;
    uid?: number;
    display_name?: string;
    verified_by?: ModifiedByResponse;
    code?: string;
    modified_on?: string;
    gst_credentials?: GstCredentialsResponse;
    manager?: ManagerResponse;
    warnings?: WarningsResponse;
    _cls?: string;
    _custom_json?: any;
    name?: string;
    timing?: TimmingResponse[];
    address?: AddressResponse;
    company_id?: number;
    company?: number;
    modified_by?: ModifiedByResponse;
    stage?: string;
};
type GetStoresViewResponse = {
    items?: ItemResponse[];
    page: PageResponse;
};
type GenerateBulkInvoiceLabelShipment = {
    store_id: number;
    from_date: string;
    to_date: string;
    document_type: string;
    shipment_ids?: string[];
};
type GenerateBulkInvoiceOrLabelUrl = {
    uid: string;
    document_type: string;
    batch_id: number;
};
type DocumentType = {
    invoice: string;
    label: string;
};
type BulkListBadRequestResponse = {
    success?: boolean;
    error?: string;
};
type BulkListFailedResponse = {
    success?: boolean;
    error?: string;
};
type SuccessResponseGenerateBulkShipment = {
    success: boolean;
    job_id: number;
    trace_id?: string;
};
type SuccessResponseBulkStatus = {
    success: boolean;
    status: string;
    trace_id?: string;
};
type GenerateBulkUrlSuccessResponse = {
    url: string;
    uid: string;
    expires_in: number;
    presigned_type: string;
};
type InternalErrorResponseGenerateBulkShipment = {
    success: boolean;
    error: string;
};
type BadRequestResponseGenerateBulkUrl = {
    success: boolean;
    message: string;
    request_id?: string;
    exception?: string;
    stack_trace?: string;
    meta?: any;
};
type InternalErrorResponseGenerateBulkUrl = {
    success: boolean;
    message: string;
};
type GenerateBulkShipment = {
    uid: string;
    store_code: string;
    batch_id: string;
    document_type: string;
};
type GenerateBulkUrl = {
    expires_in?: number;
    document_type: string;
    batch_id: string;
};
type GetBulkStatusRequest = {
    batch_id: string;
};
type BadRequestResponseGenerateBulkItemParameters = {
    missing_property?: string;
    type?: string;
};
type BadRequestResponseGenerateBulkItem = {
    keyword?: string;
    data_path?: string;
    schema_path?: string;
    parameters?: BadRequestResponseGenerateBulkItemParameters;
    message?: string;
};
type SuccessResponseGenerateBulk = {
    success: boolean;
};
type BadRequestResponseGenerateBulk = {
    success: boolean;
    error_message: BadRequestResponseGenerateBulkItem[];
};
type InternalErrorResponseGenerateBulk = {
    success: boolean;
    error_message?: string;
};
type ShippingToAddress = {
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
};
type SellerAddress = {
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
};
type BoxDetails = {
    box_id: string;
    total_quantity: string;
    package_count: string;
    dimension: string;
    weight: string;
};
type GenerateBulkBoxLabel = {
    stock_transfer_id: string;
    label_type: string;
    uid: string;
    seller_name: string;
    template_id: number;
    box_details: BoxDetails[];
};
type GenerateBulkShipmentLabel = {
    label_type: string;
    uid: string;
    template_id: number;
    shipments: ShipmentDetails[];
};
type GenerateNoc = {
    uid: string;
    seller_name: string;
    seller_gstin: string;
    fc_gstin: string;
    template_id: number;
    fc_address: SellerAddress;
    seller_address: SellerAddress;
};
type PackageDetails = {
    package_id: string;
    item_quantity: string;
    package_type: string;
    packaging_type: string;
    dimension: string;
    weight: string;
};
type PackageItemDetails = {
    jio_code: string;
    item_name: string;
    mrp: string;
    country_of_origin: string;
    best_before_date: string;
    ean: string;
    package_details: PackageDetails[];
};
type GenerateBulkPackageLabel = {
    stock_transfer_id: string;
    label_type: string;
    uid: string;
    seller_name: string;
    template_id: number;
    item_details: PackageItemDetails[];
};
type SignedSuccessResponse = {
    uid?: string;
    url?: string;
    expires_in?: number;
};
type BulkPresignedSuccessResponse = {
    success: string;
    batch_id?: string;
    presigned_type?: string;
    presigned_url: string;
    expires_in?: number;
};
type SignedBadRequestResponse = {
    success?: boolean;
    error_message?: string;
};
type SignedFailedResponse = {
    success?: boolean;
    error_message?: string;
};
type StatusSuccessResponse = {
    success?: boolean;
    status?: string;
};
type StatusBadRequestResponse = {
    success?: boolean;
    error_message?: string;
};
type StatusFailedResponse = {
    success?: boolean;
    error_message?: string;
};
type GenerateManifest = {
    store_id: number;
    from_date: string;
    to_date: string;
    shipment_ids?: string[];
};
type GeneratePresignedManifestUrl = {
    manifest_id: string;
    uid: string;
};
type ManifestLink = {
    name: string;
    manifest_id: string;
};
type GenerateManifestUrlSuccessResponse = {
    url: string;
    uid: string;
    manifest_id: string;
    expires_in: number;
    presigned_type: string;
};
type ManifestListFailedResponse = {
    success?: boolean;
    error?: string;
};
type InvoiceLabelPresignedRequestBody = {
    document_type: string;
    entity_id: string;
    expires_in?: number;
};
