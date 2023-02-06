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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, SubNavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, IntentAppErrorList, PaymentModeLogo, IntentApp, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, UserDataInfo, ShipmentStatus, Prices, PaymentModeInfo, ShipmentItemFulFillingStore, PlatformItem, GSTDetailsData, BagUnit, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, BagStateMapper, BagStatusHistory, TrackingList, UserDetailsData, OrderDetailsData, OrderBrandName, BagGST, BagConfigs, PlatformDeliveryAddress, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, Identifier, FinancialBreakup, OrderBagArticle, OrderBags, FulfillingStore, ShipmentStatusData, ShipmentPayments, DPDetailsData, ShipmentInfoResponse, PlatformShipment, OrderDict, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, ManifestPage, DateRange, ManifestFilter, GeneratedManifestItem, GeneratedManifestResponse, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailItem, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Brand, AffiliateMeta, AffiliateBagDetails, BagGSTDetails, BagReturnableCancelableStatus, B2BPODetails, BagMeta, ArticleDetails, PDFLinks, Formatted, BuyerDetails, DebugInfo, EInvoice, EinvoiceInfo, ShipmentTimeStamp, LockData, ShipmentMeta, AffiliateDetails, ReturnConfig, Weight, Dimensions, Article, Dates, Attributes, Item, StoreEwaybill, StoreEinvoice, StoreGstCredentials, Document, StoreDocuments, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, Products, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, MarketPlacePdf, AffiliateBag, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, UserData, OrderPriority, OrderInfo, AffiliateStoreIdMapping, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, PaymentMethod, PaymentInfo, ShippingInfo, BillingInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, TaxInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, LimitedProductData, Price, Size, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, ApplicationItemSEO, ApplicationItemMOQ, MetaFields, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, CollectionBadge, UserInfo, CollectionSchedule, SeoDetail, CollectionImage, CollectionQuery, CollectionBanner, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductBrand, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, Properties, GlobalValidation, TemplateValidationData, TemplateDetails, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, CategoryMappingValues, CategoryMapping, Media2, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, ProductPublish, TeaserTag, NetQuantity, Trader, TaxIdentifier, CustomOrder, ProductCreateUpdate, Logo, ProductPublished, Image, Product, ProductListingResponse, AttributeMasterSerializer, ProductAttributesResponse, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, ItemQuery, InventoryRequest, InventoryResponse, InventoryResponsePaginated, BrandMeta, ReturnConfig1, QuantityBase, Quantities, WeightResponse, CompanyMeta, Trader1, PriceMeta, DimensionResponse, ManufacturerResponse, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, SellerPhoneNumber, LocationTimingSerializer, LocationDayWiseSerializer, GetAddressSerializer, UserSerializer1, GetCompanySerializer, UserSerializer2, LocationManagerSerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, ProductReturnConfigSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, Website, BusinessDetails, ContactDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CreateUpdateAddressSerializer, CompanyTaxesSerializer1, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validation, Validity, State, BulkBundleRestriction, PaymentAllowValue, PaymentModes, PostOrder, PriceRange, UsesRemaining, UsesRestriction, Restrictions, DisplayMetaDict, DisplayMeta, Ownership, CouponDateMeta, CouponAuthor, Rule, CouponSchedule, CouponAction, RuleDefinition, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, DisplayMeta1, PromotionAction, PromotionDateMeta, PromotionAuthor, Visibility, PromotionSchedule, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, UserRegistered, UsesRemaining1, UsesRestriction1, Restrictions1, Ownership1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, ActivePromosResponse, CartItem, OpenapiCartDetailsRequest, LoyaltyPoints, CouponBreakup, DisplayBreakup, RawBreakup, CartBreakup, FreeGiftItem, AppliedFreeArticles, DiscountRulesApp, AppliedPromotion, CartProductIdentifer, BaseInfo, BasePrice, ArticlePriceInfo, ProductArticle, Tags, ProductImage, CategoryInfo, ActionQuery, ProductAction, CartProduct, PromoMeta, CouponDetails, ProductAvailability, ProductPrice, ProductPriceInfo, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, AddProductCart, AddCartRequest, CartCurrency, CartDetailResponse, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, AppUser, E, Giveaway, GiveawayResponse, HistoryPretty, HistoryRes, Offer, Points, Referral, RewardUser, RewardsAudience, RewardsRule, Schedule, ShareMessages, UserRes, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, DiscountItems, BulkDiscount, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj, ServiceabilityrErrorResponse, ApplicationServiceabilityConfig, ApplicationServiceabilityConfigResponse, EntityRegionView_Request, EntityRegionView_Error, EntityRegionView_Items, EntityRegionView_page, EntityRegionView_Response, ListViewProduct, ListViewChannels, ListViewItems, ListViewSummary, ZoneDataItem, ListViewResponse, CompanyStoreView_PageItems, CompanyStoreView_Response, GetZoneDataViewChannels, ZoneProductTypes, ZoneMappingType, UpdateZoneData, ZoneUpdateRequest, ZoneSuccessResponse, GetZoneDataViewItems, GetSingleZoneDataViewResponse, CreateZoneData, ZoneRequest, ZoneResponse, GetZoneFromPincodeViewRequest, GetZoneFromPincodeViewResponse, CreatedByResponse, DocumentsResponse, IntegrationTypeResponse, ContactNumberResponse, ProductReturnConfigResponse, Dp, LogisticsResponse, ModifiedByResponse, EinvoiceResponse, EwayBillResponse, GstCredentialsResponse, MobileNo, ManagerResponse, WarningsResponse, OpeningClosing, TimmingResponse, AddressResponse, ItemResponse, GetStoresViewResponse, GenerateBulkInvoiceLabelShipment, GenerateBulkInvoiceOrLabelUrl, DocumentType, BulkListBadRequestResponse, BulkListFailedResponse, SuccessResponseGenerateBulkShipment, SuccessResponseBulkStatus, GenerateBulkUrlSuccessResponse, InternalErrorResponseGenerateBulkShipment, BadRequestResponseGenerateBulkUrl, InternalErrorResponseGenerateBulkUrl, GenerateBulkShipment, GenerateBulkUrl, GetBulkStatusRequest, BadRequestResponseGenerateBulkItemParameters, BadRequestResponseGenerateBulkItem, SuccessResponseGenerateBulk, BadRequestResponseGenerateBulk, InternalErrorResponseGenerateBulk, ShippingToAddress, SellerAddress, BoxDetails, GenerateBulkBoxLabel, GenerateBulkShipmentLabel, GenerateNoc, PackageDetails, PackageItemDetails, GenerateBulkPackageLabel, SignedSuccessResponse, BulkPresignedSuccessResponse, SignedBadRequestResponse, SignedFailedResponse, StatusSuccessResponse, StatusBadRequestResponse, StatusFailedResponse, GenerateManifest, GeneratePresignedManifestUrl, ManifestLink, GenerateManifestUrlSuccessResponse, ManifestListFailedResponse, InvoiceLabelPresignedRequestBody };
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
    created: boolean;
    excluded_fields: string[];
    aggregators?: any[];
    app_id: string;
    success: boolean;
    display_fields: string[];
};
type ErrorCodeDescription = {
    code: string;
    success: boolean;
    description: string;
};
type PaymentGatewayConfig = {
    merchant_salt: string;
    is_active?: boolean;
    config_type: string;
    key: string;
    secret: string;
};
type PaymentGatewayConfigRequest = {
    is_active?: boolean;
    aggregator_name?: PaymentGatewayConfig;
    app_id: string;
};
type PaymentGatewayToBeReviewed = {
    aggregator: string[];
    success: boolean;
};
type ErrorCodeAndDescription = {
    code: string;
    description: string;
};
type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
    success: boolean;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentApp = {
    code?: string;
    package_name?: string;
    display_name?: string;
    logos?: PaymentModeLogo;
};
type PaymentModeList = {
    card_issuer?: string;
    name?: string;
    card_name?: string;
    card_number?: string;
    cod_limit?: number;
    fynd_vpa?: string;
    intent_flow?: boolean;
    exp_month?: number;
    display_name?: string;
    card_brand_image?: string;
    card_id?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_isin?: string;
    intent_app?: IntentApp[];
    intent_app_error_list?: string[];
    merchant_code?: string;
    exp_year?: number;
    cod_limit_per_order?: number;
    card_reference?: string;
    expired?: boolean;
    compliant_with_tokenisation_guidelines?: boolean;
    aggregator_name: string;
    logo_url?: PaymentModeLogo;
    retry_count?: number;
    card_type?: string;
    card_brand?: string;
    display_priority?: number;
    code?: string;
    nickname?: string;
    timeout?: number;
    card_fingerprint?: string;
    remaining_limit?: number;
    card_token?: string;
};
type RootPaymentMode = {
    display_priority: number;
    save_card?: boolean;
    anonymous_enable?: boolean;
    name: string;
    list?: PaymentModeList[];
    add_card_enabled?: boolean;
    display_name: string;
    is_pay_by_card_pl?: boolean;
    aggregator_name?: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    payment_options: PaymentOptions;
    success: boolean;
};
type PayoutsResponse = {
    is_active: boolean;
    transfer_type: string;
    unique_transfer_no: any;
    customers: any;
    more_attributes: any;
    is_default: boolean;
    payouts_aggregators: any[];
};
type PayoutBankDetails = {
    account_no?: string;
    account_type: string;
    branch_name?: string;
    bank_name?: string;
    ifsc_code: string;
    city?: string;
    country?: string;
    pincode?: number;
    state?: string;
    account_holder?: string;
};
type PayoutRequest = {
    aggregator: string;
    users: any;
    bank_details: PayoutBankDetails;
    is_active: boolean;
    transfer_type: string;
    unique_external_id: string;
};
type PayoutResponse = {
    aggregator: string;
    users: any;
    bank_details: any;
    payouts: any;
    is_active: boolean;
    created: boolean;
    transfer_type: string;
    unique_transfer_no: string;
    payment_status: string;
    success: boolean;
};
type UpdatePayoutResponse = {
    is_active: boolean;
    is_default: boolean;
    success: boolean;
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
    data: any[];
    success: boolean;
};
type DeleteSubscriptionPaymentMethodResponse = {
    success: boolean;
};
type SubscriptionConfigResponse = {
    aggregator: string;
    success: boolean;
    config: any;
};
type SaveSubscriptionSetupIntentRequest = {
    unique_external_id: string;
};
type SaveSubscriptionSetupIntentResponse = {
    data: any;
    success: boolean;
};
type RefundAccountResponse = {
    data?: any;
    message: string;
    is_verified_flag?: boolean;
    success: boolean;
};
type NotFoundResourceError = {
    code: string;
    success: boolean;
    description: string;
};
type BankDetailsForOTP = {
    account_no: string;
    branch_name: string;
    bank_name: string;
    ifsc_code: string;
    account_holder: string;
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
    bank_name: string;
    title: string;
    email: string;
    address: string;
    mobile?: string;
    modified_on: string;
    display_name: string;
    id: number;
    transfer_mode: string;
    subtitle: string;
    beneficiary_id: string;
    account_no: string;
    branch_name?: string;
    is_active: boolean;
    created_on: string;
    account_holder: string;
    ifsc_code: string;
    delights_user_name?: string;
    comment?: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    payment_id?: string;
    current_status?: string;
    extra_meta?: any;
    payment_gateway?: string;
    order_id?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    mode: string;
    name?: string;
    amount: number;
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
type CODdata = {
    is_active: boolean;
    limit: number;
    remaining_limit: number;
    user_id: string;
    usages: number;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    is_active: boolean;
    merchant_user_id: string;
    mobileno: string;
};
type SetCODOptionResponse = {
    message: string;
    success: boolean;
};
type UserDataInfo = {
    mobile?: string;
    is_anonymous_user?: boolean;
    avis_user_id?: string;
    email?: string;
    name?: string;
    gender?: string;
    last_name?: string;
    first_name?: string;
    uid?: number;
};
type ShipmentStatus = {
    ops_status: string;
    title: string;
    status: string;
    hex_code: string;
    actual_status: string;
};
type Prices = {
    cashback?: number;
    promotion_effective_discount?: number;
    amount_paid?: number;
    tax_collected_at_source?: number;
    discount?: number;
    fynd_credits?: number;
    amount_paid_roundoff?: number;
    coupon_value?: number;
    cashback_applied?: number;
    value_of_good?: number;
    refund_credit?: number;
    price_marked?: number;
    refund_amount?: number;
    cod_charges?: number;
    delivery_charge?: number;
    price_effective?: number;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type PlatformItem = {
    l3_category_name?: string;
    can_return?: boolean;
    l1_category?: string[];
    name?: string;
    id?: number;
    image?: string[];
    code?: string;
    l3_category?: number;
    department_id?: number;
    images?: string[];
    size?: string;
    color?: string;
    can_cancel?: boolean;
};
type GSTDetailsData = {
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    value_of_good: number;
    gst_fee: number;
    gstin_code: string;
};
type BagUnit = {
    ordering_channel: string;
    can_return?: boolean;
    shipment_id: string;
    status: any;
    bag_id: number;
    total_shipment_bags: number;
    item_quantity: number;
    item?: PlatformItem;
    prices?: Prices;
    gst?: GSTDetailsData;
    can_cancel?: boolean;
};
type ShipmentItem = {
    user?: UserDataInfo;
    shipment_status?: ShipmentStatus;
    fulfilling_centre: string;
    id: string;
    total_shipments_in_order: number;
    payment_methods?: any;
    channel?: any;
    total_bags_count: number;
    application?: any;
    created_at: string;
    sla?: any;
    prices?: Prices;
    payment_mode_info?: PaymentModeInfo;
    fulfilling_store?: ShipmentItemFulFillingStore;
    bags?: BagUnit[];
    shipment_created_at: number;
};
type FilterInfoOption = {
    text: string;
    name?: string;
    value?: string;
};
type FiltersInfo = {
    text: string;
    options?: FilterInfoOption[];
    type: string;
    value: string;
};
type ShipmentInternalPlatformViewResponse = {
    page?: any;
    items?: ShipmentItem[];
    applied_filters?: any;
    filters?: FiltersInfo[];
};
type Error = {
    message?: string;
    success?: boolean;
};
type BagStateMapper = {
    name: string;
    state_type: string;
    app_facing?: boolean;
    is_active?: boolean;
    journey_type: string;
    bs_id: number;
    display_name: string;
    app_state_name?: string;
    app_display_name?: string;
    notify_customer?: boolean;
};
type BagStatusHistory = {
    delivery_partner_id?: number;
    state_id: number;
    reasons?: any[];
    shipment_id: string;
    forward?: boolean;
    bsh_id: number;
    state_type?: string;
    store_id: number;
    status: string;
    bag_id: number;
    created_at: string;
    bag_state_mapper: BagStateMapper;
    kafka_sync?: boolean;
    display_name?: boolean;
    app_display_name?: boolean;
    delivery_awb_number?: string;
    updated_at?: string;
};
type TrackingList = {
    text: string;
    is_current?: boolean;
    is_passed?: boolean;
    status: string;
    time?: string;
};
type UserDetailsData = {
    phone: string;
    country: string;
    email: string;
    name: string;
    pincode: string;
    address: string;
    city: string;
    state: string;
};
type OrderDetailsData = {
    ordering_channel?: string;
    affiliate_id?: string;
    fynd_order_id: string;
    source?: string;
    tax_details?: any;
    order_date?: string;
    ordering_channel_logo?: any;
    cod_charges?: string;
    order_value?: string;
};
type OrderBrandName = {
    modified_on?: number;
    logo: string;
    id: number;
    brand_name: string;
    created_on: number;
    company: string;
};
type BagGST = {
    gst_tag?: string;
    brand_calculated_amount?: number;
    gst_tax_percentage?: number;
    value_of_good?: number;
    gst_fee?: number;
    is_default_hsn_code?: boolean;
    hsn_code?: string;
    gstin_code?: string;
};
type BagConfigs = {
    is_customer_return_allowed: boolean;
    allow_force_return: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
};
type PlatformDeliveryAddress = {
    phone?: string;
    country?: string;
    address_type?: string;
    version?: string;
    email?: string;
    area?: string;
    pincode?: string;
    address1?: string;
    longitude?: number;
    city?: string;
    landmark?: string;
    latitude?: number;
    created_at?: string;
    state?: string;
    contact_person?: string;
    address_category?: string;
    address2?: string;
    updated_at?: string;
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
    article_quantity?: number;
    mrp_promotion?: boolean;
    promotion_name?: string;
    amount?: number;
    buy_rules?: BuyRules[];
    discount_rules?: DiscountRules[];
    promotion_type?: string;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    coupon_value: number;
    identifiers: Identifier;
    hsn_code: string;
    price_effective: number;
    added_to_fynd_cash: boolean;
    fynd_credits: number;
    amount_paid_roundoff?: number;
    transfer_price: number;
    promotion_effective_discount: number;
    tax_collected_at_source?: number;
    gst_tag: string;
    brand_calculated_amount: number;
    pm_price_split: any;
    price_marked: number;
    total_units: number;
    gst_fee: string;
    cod_charges: number;
    cashback: number;
    amount_paid: number;
    discount: number;
    gst_tax_percentage: number;
    value_of_good: number;
    cashback_applied: number;
    refund_credit: number;
    coupon_effective_discount: number;
    size: string;
    delivery_charge: number;
    item_name: string;
};
type OrderBagArticle = {
    uid?: string;
    identifiers?: any;
    return_config?: any;
};
type OrderBags = {
    quantity?: number;
    brand?: OrderBrandName;
    gst_details?: BagGST;
    bag_configs?: BagConfigs;
    seller_identifier?: string;
    current_status?: string;
    can_cancel?: boolean;
    bag_id: number;
    delivery_address?: PlatformDeliveryAddress;
    can_return?: boolean;
    applied_promos?: AppliedPromos[];
    parent_promo_bags?: any;
    display_name?: string;
    prices?: Prices;
    financial_breakup?: FinancialBreakup[];
    entity_type?: string;
    article?: OrderBagArticle;
    item?: PlatformItem;
    identifier?: string;
    line_number?: number;
};
type FulfillingStore = {
    phone: string;
    country: string;
    id: string;
    pincode: string;
    meta: any;
    code: string;
    fulfillment_channel: string;
    address: string;
    city: string;
    contact_person: string;
    state: string;
    store_name: string;
};
type ShipmentStatusData = {
    bag_list?: number[];
    id?: number;
    shipment_id?: string;
    status?: string;
    created_at?: string;
};
type ShipmentPayments = {
    source?: string;
    mode: string;
    logo?: string;
};
type DPDetailsData = {
    country?: string;
    eway_bill_id?: string;
    awb_no?: string;
    name?: string;
    id?: string;
    gst_tag?: string;
    pincode?: string;
    track_url?: string;
};
type ShipmentInfoResponse = {
    status_progress: number;
    bag_status_history?: BagStatusHistory[];
    pay_button?: string;
    gst_details?: GSTDetailsData;
    is_fynd_store?: string;
    forward_order_status?: any[];
    journey_type?: string;
    tracking_list?: TrackingList[];
    vertical?: string;
    company: any;
    billing_details?: UserDetailsData;
    tracking_url: string;
    beneficiary_details?: boolean;
    is_fynd_coupon: boolean;
    user_id: string;
    total_items?: number;
    order?: OrderDetailsData;
    bags?: OrderBags[];
    fulfilling_store?: FulfillingStore;
    platform_logo: boolean;
    shipment_status?: string;
    user_agent?: string;
    escalation?: any;
    can_break: string;
    can_cancel?: boolean;
    operational_status?: string;
    invoice: any;
    delivery_slot?: any;
    delivery_status: any[];
    order_type: string;
    items: any[];
    is_pdsr?: string;
    status?: ShipmentStatusData;
    due_date?: string;
    email_id: string;
    bank_data?: any;
    delivery_details?: UserDetailsData;
    credit_note_id: string;
    total_bags?: number;
    payments?: ShipmentPayments;
    order_status: any;
    can_return?: boolean;
    forward_tracking_list?: any[];
    child_nodes?: string[];
    refund_details?: any;
    go_green?: boolean;
    fyndstore_emp: any;
    replacement_details?: string;
    lock_status: string;
    order_created_time?: string;
    forward_shipment_status?: any[];
    prices?: Prices;
    coupon?: any;
    packaging_type?: string;
    mid?: string;
    enable_tracking?: boolean;
    dp_details?: DPDetailsData;
    picked_date?: string;
    is_invoiced: boolean;
    priority_text?: string;
    shipment_images?: string[];
    enable_dp_tracking?: string;
    secured_delivery_flag?: string;
    shipment_id: string;
    user_info?: any;
    kirana_store_id?: string;
    affiliate_shipment_id: string;
    is_packaging_order: boolean;
    custom_meta?: any[];
    current_shipment_status: any;
    shipment_quantity?: number;
    is_not_fynd_source: boolean;
    refund_text?: string;
    ordering_store: any;
    payment_mode?: string;
};
type PlatformShipment = {
    bag_status_history?: BagStatusHistory[];
    gst_details?: GSTDetailsData;
    journey_type?: string;
    tracking_list?: TrackingList[];
    vertical?: string;
    billing_details?: UserDetailsData;
    total_items?: number;
    order?: OrderDetailsData;
    bags?: OrderBags[];
    fulfilling_store?: FulfillingStore;
    platform_logo?: string;
    shipment_status?: string;
    user_agent?: string;
    operational_status?: string;
    delivery_slot?: any;
    status?: ShipmentStatusData;
    delivery_details?: UserDetailsData;
    total_bags?: number;
    payments?: ShipmentPayments;
    prices?: Prices;
    coupon?: any;
    packaging_type?: string;
    dp_details?: DPDetailsData;
    picked_date?: string;
    priority_text?: string;
    shipment_images?: string[];
    enable_dp_tracking?: string;
    shipment_id: string;
    custom_meta?: any[];
    shipment_quantity?: number;
    payment_mode?: string;
};
type OrderDict = {
    order_date: string;
    fynd_order_id: string;
    shipment_count: number;
};
type ShipmentDetailsResponse = {
    custom_meta?: any[];
    shipments?: PlatformShipment[];
    order?: OrderDict;
    success: boolean;
};
type SubLane = {
    actions?: any[];
    value?: string;
    text?: string;
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
    breakup_values?: PlatformBreakupValues[];
    meta?: any;
    channel?: PlatformChannel;
    shipments?: PlatformShipment[];
    order_created_time?: string;
    user_info?: UserDataInfo;
    order_id?: string;
    total_order_value?: number;
    order_value?: number;
    payment_mode?: string;
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
    text: string;
    options?: Options[];
    key: string;
    value: number;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    raw_status?: string;
    shipment_type?: string;
    awb?: string;
    meta?: any;
    updated_time?: string;
    reason?: string;
    status?: string;
    account_name?: string;
    last_location_recieved_at?: string;
    updated_at?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
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
    report_id?: string;
    report_type?: string;
    request_details?: any;
    status?: string;
    display_name?: string;
    report_requested_at?: string;
    s3_key?: string;
};
type JioCodeUpsertDataSet = {
    company_id?: string;
    jio_code?: string;
    article_id?: string;
    item_id?: string;
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
    error?: NestedErrorSchemaDataSet[];
    identifier?: string;
    data?: any[];
    success?: boolean;
    trace_id?: string;
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    store_code?: string;
    invoice?: any;
    data?: any;
    store_id?: string;
    label?: any;
    do_invoice_label_generated: boolean;
    batch_id: string;
    company_id?: string;
    invoice_status?: string;
    store_name?: string;
};
type FileUploadResponse = {
    url?: string;
    expiry?: number;
};
type URL = {
    url?: string;
};
type FileResponse = {
    file_path?: string;
    operation?: string;
    upload?: FileUploadResponse;
    namespace?: string;
    tags?: string[];
    file_name?: string;
    size?: number;
    content_type?: string;
    method?: string;
    cdn?: URL;
};
type BulkListingPage = {
    has_previous?: boolean;
    total?: number;
    has_next?: boolean;
    type?: string;
    size?: number;
    current?: number;
};
type bulkListingData = {
    processing?: number;
    processing_shipments?: string[];
    user_id?: string;
    excel_url?: string;
    successful?: number;
    status?: string;
    failed?: number;
    store_code?: string;
    id?: string;
    total?: number;
    store_id?: number;
    file_name?: string;
    failed_shipments?: any[];
    uploaded_on?: string;
    successful_shipments?: any[];
    user_name?: string;
    batch_id?: string;
    company_id?: number;
    store_name?: string;
};
type BulkListingResponse = {
    page?: BulkListingPage;
    success?: boolean;
    error?: string;
    data?: bulkListingData[];
};
type ManifestPage = {
    has_previous?: boolean;
    total?: number;
    has_next?: boolean;
    type?: string;
    size?: string;
    current?: string;
};
type DateRange = {
    to_date?: string;
    from_date?: string;
};
type ManifestFilter = {
    dp_ids?: string;
    dp_name?: string;
    stores?: string;
    sales_channels?: string;
    date_range?: DateRange;
    sales_channel_name?: string;
    lane?: string;
    store_name?: string;
};
type GeneratedManifestItem = {
    filters?: ManifestFilter;
    manifest_id?: string;
    company_id?: number;
    status?: string;
    created_at?: string;
    created_by?: string;
    is_active?: boolean;
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
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
    filters?: ManifestFilter;
};
type ManifestDetail = {
    filters?: ManifestFilter;
    id?: number;
    meta?: ManifestDetailMeta;
    manifest_id?: string;
    company_id?: number;
    status?: string;
    created_at?: string;
    created_by?: string;
    uid?: number;
    is_active?: boolean;
    user_id?: number;
};
type ManifestDetailItem = {
    item_qty?: number;
    awb?: string;
    shipment_id?: string;
    invoice_id?: string;
    order_id?: string;
};
type ManifestDetailResponse = {
    manifest_details?: ManifestDetail[];
    items?: ManifestDetailItem[];
    page?: ManifestPage;
    additional_shipment_count?: number;
};
type QuestionSet = {
    display_name?: string;
    id?: number;
};
type Reason = {
    display_name?: string;
    question_set?: QuestionSet[];
    qc_type?: string[];
    id?: number;
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
    total_shipments_count?: number;
    successful_shipment_ids?: string[];
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    processing_shipments_count?: number;
    batch_id?: string;
    company_id?: string;
};
type BulkActionDetailsResponse = {
    error?: string[];
    failed_records?: string[];
    message?: string;
    status?: boolean;
    uploaded_by?: string;
    data?: BulkActionDetailsDataField[];
    uploaded_on?: string;
    user_id?: string;
    success?: string;
};
type Brand = {
    modified_on?: number;
    pickup_location?: string;
    logo?: string;
    start_date?: string;
    invoice_prefix?: string;
    credit_note_expiry_days?: number;
    is_virtual_invoice?: boolean;
    created_on?: number;
    company: string;
    brand_name: string;
    script_last_ran?: string;
    brand_id: number;
    credit_note_allowed?: boolean;
};
type AffiliateMeta = {
    box_type?: string;
    quantity?: number;
    channel_order_id?: string;
    is_priority?: boolean;
    loyalty_discount?: number;
    employee_discount?: number;
    coupon_code?: string;
    due_date?: string;
    channel_shipment_id?: string;
    order_item_id?: string;
    size_level_total_qty?: number;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_bag_id: string;
    affiliate_meta: AffiliateMeta;
};
type BagGSTDetails = {
    hsn_code_id: string;
    tax_collected_at_source: number;
    igst_tax_percentage: number;
    gst_tag: string;
    brand_calculated_amount: number;
    gst_tax_percentage: number;
    sgst_gst_fee: string;
    value_of_good: number;
    sgst_tax_percentage: number;
    gst_fee: number;
    cgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    cgst_tax_percentage: number;
    hsn_code: string;
    igst_gst_fee: string;
    gstin_code?: string;
};
type BagReturnableCancelableStatus = {
    is_customer_return_allowed: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
    enable_tracking: boolean;
    is_returnable: boolean;
};
type B2BPODetails = {
    total_gst_percentage?: number;
    po_tax_amount?: number;
    po_line_amount?: number;
    partial_can_ret?: boolean;
    docker_number?: string;
    item_base_price?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type ArticleDetails = {
    status?: any;
};
type PDFLinks = {
    label_pos?: string;
    credit_note_url?: string;
    label_type: string;
    invoice?: string;
    b2b?: string;
    label_a4?: string;
    invoice_type: string;
    label_a6?: string;
    label?: string;
    invoice_a6?: string;
    invoice_pos?: string;
    po_invoice?: string;
    invoice_a4?: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type BuyerDetails = {
    name: string;
    pincode: number;
    ajio_site_id?: string;
    address: string;
    gstin: string;
    city: string;
    state: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type EInvoice = {
    irn?: string;
    error_code?: string;
    acknowledge_date?: string;
    signed_invoice?: string;
    error_message?: string;
    acknowledge_no?: number;
    signed_qr_code?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type LockData = {
    locked?: boolean;
    mto?: boolean;
    lock_message?: string;
};
type ShipmentMeta = {
    packaging_name?: string;
    box_type?: string;
    formatted?: Formatted;
    dp_sort_key?: string;
    weight: number;
    po_number?: string;
    b2c_buyer_details?: any;
    auto_trigger_dp_assignment_acf: boolean;
    order_type?: string;
    b2b_buyer_details?: BuyerDetails;
    assign_dp_from_sb?: boolean;
    due_date?: string;
    shipment_weight?: number;
    dp_id?: string;
    debug_info?: DebugInfo;
    ewaybill_info?: any;
    store_invoice_updated_date?: string;
    marketplace_store_id?: string;
    shipment_volumetric_weight?: number;
    external?: any;
    return_details?: any;
    forward_affiliate_shipment_id?: string;
    return_store_node?: number;
    bag_weight?: any;
    forward_affiliate_order_id?: string;
    same_store_available: boolean;
    return_affiliate_order_id?: string;
    einvoice_info?: EinvoiceInfo;
    return_affiliate_shipment_id?: string;
    dp_name?: string;
    timestamp?: ShipmentTimeStamp;
    return_awb_number?: string;
    lock_data?: LockData;
    dp_options?: any;
    fulfilment_priority_text?: string;
    awb_number?: string;
};
type AffiliateDetails = {
    affiliate_order_id: string;
    affiliate_id?: string;
    company_affiliate_tag?: string;
    ad_id?: string;
    pdf_links?: PDFLinks;
    affiliate_bag_id: string;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    affiliate_meta: AffiliateMeta;
    shipment_meta: ShipmentMeta;
};
type ReturnConfig = {
    time?: number;
    unit?: string;
    returnable?: boolean;
};
type Weight = {
    unit?: string;
    shipping?: number;
    is_default?: boolean;
};
type Dimensions = {
    unit?: string;
    length?: number;
    is_default?: boolean;
    width?: number;
    height?: number;
};
type Article = {
    raw_meta?: any;
    esp_modified?: any;
    code?: string;
    child_details?: any;
    return_config?: ReturnConfig;
    identifiers: Identifier;
    weight?: Weight;
    a_set?: any;
    size: string;
    _id: string;
    uid: string;
    is_set?: boolean;
    seller_identifier: string;
    dimensions?: Dimensions;
};
type Dates = {
    order_created?: string;
    delivery_date?: any;
};
type Attributes = {
    marketer_name?: string;
    primary_color?: string;
    name?: string;
    gender?: string[];
    marketer_address?: string;
    essential?: string;
    primary_color_hex?: string;
    brand_name?: string;
    primary_material?: string;
};
type Item = {
    brand: string;
    l1_category?: string[];
    code?: string;
    l1_category_id?: number;
    last_updated_at?: string;
    can_cancel?: boolean;
    slug_key: string;
    branch_url?: string;
    gender?: string;
    l2_category?: string[];
    attributes: Attributes;
    brand_id: number;
    l3_category_name?: string;
    can_return?: boolean;
    image: string[];
    name: string;
    meta?: any;
    l2_category_id?: number;
    department_id?: number;
    color?: string;
    item_id: number;
    webstore_product_url?: string;
    size: string;
    l3_category?: number;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreEinvoice = {
    password?: string;
    username?: string;
    enabled: boolean;
    user?: string;
};
type StoreGstCredentials = {
    e_waybill?: StoreEwaybill;
    e_invoice?: StoreEinvoice;
};
type Document = {
    value: string;
    legal_name: string;
    ds_type: string;
    url?: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type EInvoicePortalDetails = {
    password?: string;
    user?: string;
    username?: string;
};
type StoreMeta = {
    ewaybill_portal_details?: any;
    timing?: any[];
    stage: string;
    gst_credentials: StoreGstCredentials;
    additional_contact_details?: any;
    documents?: StoreDocuments;
    product_return_config?: any;
    notification_emails?: string[];
    display_name: string;
    gst_number?: string;
    einvoice_portal_details?: EInvoicePortalDetails;
};
type StoreAddress = {
    version?: string;
    latitude: number;
    updated_at: string;
    address_type: string;
    address1: string;
    longitude: number;
    pincode: number;
    city: string;
    address_category: string;
    country: string;
    address2?: string;
    phone: string;
    email?: string;
    area?: string;
    landmark?: string;
    created_at: string;
    state: string;
    contact_person: string;
    country_code: string;
};
type Store = {
    store_active_from?: string;
    login_username: string;
    mall_name?: string;
    code?: string;
    latitude: number;
    updated_at?: string;
    vat_no?: string;
    order_integration_id?: string;
    mall_area?: string;
    address1: string;
    longitude: number;
    pincode: string;
    brand_store_tags?: string[];
    city: string;
    brand_id?: any;
    is_active?: boolean;
    alohomora_user_id?: number;
    country: string;
    name: string;
    meta: StoreMeta;
    store_address_json?: StoreAddress;
    fulfillment_channel: string;
    packaging_material_count?: number;
    parent_store_id?: number;
    is_archived?: boolean;
    location_type: string;
    address2?: string;
    phone: number;
    is_enabled_for_recon?: boolean;
    s_id: string;
    created_at: string;
    contact_person: string;
    state: string;
    store_email: string;
    company_id: number;
};
type BagDetailsPlatformResponse = {
    quantity?: number;
    brand: Brand;
    bag_status_history?: BagStatusHistory;
    affiliate_bag_details: AffiliateBagDetails;
    gst_details: BagGSTDetails;
    original_bag_list?: number[];
    reasons?: any[];
    bag_update_time?: number;
    journey_type: string;
    restore_coupon?: boolean;
    seller_identifier?: string;
    current_status: BagStatusHistory;
    order_integration_id?: string;
    b_type?: string;
    operational_status?: string;
    tags?: string[];
    status: BagReturnableCancelableStatus;
    b_id: number;
    restore_promos?: any;
    bag_status: BagStatusHistory[];
    no_of_bags_order?: number;
    meta?: BagMeta;
    applied_promos?: any[];
    parent_promo_bags?: any;
    article_details?: ArticleDetails;
    display_name?: string;
    prices: Prices;
    qc_required?: any;
    financial_breakup: FinancialBreakup[];
    shipment_id?: string;
    affiliate_details?: AffiliateDetails;
    article: Article;
    dates?: Dates;
    entity_type?: string;
    item: Item;
    identifier?: string;
    line_number?: number;
    current_operational_status: BagStatusHistory;
    ordering_store?: Store;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    has_next: boolean;
    item_total: number;
    size: number;
    current: number;
    page_type: string;
};
type GetBagsPlatformResponse = {
    page: Page1;
    items: BagDetailsPlatformResponse[];
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    status?: number;
    error?: string;
    shipment_id?: string;
    message?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    error_trace?: string;
    status: number;
    message: string;
};
type StoreReassign = {
    store_id: number;
    affiliate_bag_id?: string;
    fynd_order_id?: string;
    item_id?: string;
    affiliate_order_id?: string;
    bag_id?: number;
    affiliate_id?: string;
    mongo_article_id?: string;
    set_id?: string;
    reason_ids?: number[];
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    id?: string;
    affiliate_id?: string;
    reason_text: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    action_type: string;
    entities: Entities[];
    entity_type: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    is_locked?: boolean;
    affiliate_bag_id?: string;
    bag_id?: number;
    affiliate_order_id?: string;
};
type CheckResponse = {
    original_filter?: OriginalFilter;
    shipment_id?: string;
    lock_status?: boolean;
    status?: string;
    is_shipment_locked?: boolean;
    bags?: Bags[];
    is_bag_locked?: boolean;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    logo_url?: string;
    company_id?: number;
    created_at?: string;
    description?: string;
    to_datetime?: string;
    id: number;
    platform_name?: string;
    title?: string;
    platform_id?: string;
    from_datetime?: string;
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
type ProductsReasonsData = {
    reason_text?: string;
    reason_id?: number;
};
type ProductsReasonsFilters = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
};
type ProductsReasons = {
    data?: ProductsReasonsData;
    filters?: ProductsReasonsFilters[];
};
type EntityReasonData = {
    reason_text?: string;
    reason_id?: number;
};
type EntitiesReasons = {
    data?: EntityReasonData;
    filters?: any[];
};
type ReasonsData = {
    products?: ProductsReasons[];
    entities?: EntitiesReasons[];
};
type Products = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
};
type ProductsDataUpdatesFilters = {
    identifier?: string;
    line_number?: number;
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
    reasons?: ReasonsData;
    identifier: string;
    products?: Products[];
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
    status?: string;
};
type UpdateShipmentStatusRequest = {
    task?: boolean;
    force_transition?: boolean;
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
};
type ShipmentsResponse = {
    final_state?: any;
    status?: number;
    identifier?: string;
    message?: string;
    exception?: string;
    meta?: any;
    code?: string;
    stack_trace?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    state: string;
    mobile: number;
    city: string;
    pincode: string;
    phone: number;
    email: string;
    first_name: string;
    address2?: string;
    last_name: string;
    address1?: string;
    country: string;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    transfer_price: number;
    amount_paid: number;
    affiliate_store_id: string;
    quantity: number;
    discount: number;
    store_id: number;
    sku: string;
    price_marked: number;
    pdf_links?: MarketPlacePdf;
    item_size: string;
    _id: string;
    identifier: any;
    company_id: number;
    hsn_code_id: string;
    price_effective: number;
    affiliate_meta: any;
    unit_price: number;
    delivery_charge: number;
    fynd_store_id: string;
    item_id: number;
    modified_on: string;
    avl_qty: number;
    seller_identifier: string;
};
type ArticleDetails1 = {
    _id: string;
    weight: any;
    attributes: any;
    category: any;
    quantity: number;
    brand_id: number;
    dimension: any;
};
type ShipmentDetails = {
    fulfillment_id: number;
    dp_id?: number;
    box_type?: string;
    shipments: number;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    meta?: any;
};
type LocationDetails = {
    fulfillment_id: number;
    articles: ArticleDetails1[];
    fulfillment_type: string;
};
type ShipmentConfig = {
    action: string;
    source: string;
    identifier: string;
    payment_mode: string;
    to_pincode: string;
    shipment: ShipmentDetails[];
    location_details?: LocationDetails;
    journey: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type OrderPriority = {
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
    fulfilment_priority_text?: string;
};
type OrderInfo = {
    items: any;
    billing_address: OrderUser;
    payment_mode: string;
    cod_charges: number;
    bags: AffiliateBag[];
    affiliate_order_id?: string;
    shipment?: ShipmentData;
    order_value: number;
    delivery_charges: number;
    user: UserData;
    payment?: any;
    coupon?: string;
    order_priority?: OrderPriority;
    shipping_address: OrderUser;
    discount: number;
};
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryConfig = {
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    order?: AffiliateInventoryOrderConfig;
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    updated_at: string;
    name: string;
    owner: string;
    created_at: string;
    description?: string;
    id: string;
    secret: string;
    token: string;
    meta?: AffiliateAppConfigMeta[];
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
    store_lookup?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    affiliate: Affiliate;
    article_lookup?: string;
    bag_end_state?: string;
};
type CreateOrderPayload = {
    order_info: OrderInfo;
    order_config: OrderConfig;
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
    slug: string;
    description: string;
    display_text: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    type: string;
    l1_detail?: string;
    ticket_id?: string;
    createdat: string;
    message: string;
    ticket_url?: string;
    bag_id?: number;
    user: string;
    l2_detail?: string;
    l3_detail?: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    success?: boolean;
    message?: string;
};
type SmsDataPayload = {
    customer_name: string;
    phone_number: number;
    order_id: string;
    shipment_id: number;
    amount_paid: number;
    payment_mode: string;
    message: string;
    country_code: string;
    brand_name: string;
};
type SendSmsPayload = {
    data?: SmsDataPayload;
    bag_id: number;
    slug: string;
};
type Meta = {
    kafka_emission_status?: number;
    state_manager_used?: string;
};
type ShipmentDetail = {
    bag_list?: number[];
    shipment_id?: string;
    status?: string;
    remarks?: string;
    id: number;
    meta: Meta;
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
    shipment_ids?: string[];
    order_type: string;
    qc_required: string;
    dp_id: number;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type PaymentMethod = {
    transaction_data?: any;
    collect_by: string;
    refund_by: string;
    amount: number;
    name: string;
    meta?: any;
    mode: string;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type ShippingInfo = {
    alternate_mobile_number?: string;
    alternate_email?: string;
    floor_no?: string;
    state_code?: string;
    external_customer_code?: string;
    landmark?: string;
    gender?: string;
    state: string;
    pincode: string;
    middle_name?: string;
    primary_email: string;
    last_name?: string;
    country_code?: string;
    shipping_type?: string;
    customer_code?: string;
    country: string;
    house_no?: string;
    city: string;
    address_type?: string;
    primary_mobile_number: string;
    geo_location?: any;
    first_name: string;
    title?: string;
    address2?: string;
    slot?: any[];
    address1: string;
};
type BillingInfo = {
    alternate_mobile_number?: string;
    alternate_email?: string;
    floor_no?: string;
    state_code?: string;
    external_customer_code?: string;
    gender?: string;
    state: string;
    pincode: string;
    middle_name?: string;
    primary_email: string;
    last_name?: string;
    country_code?: string;
    customer_code?: string;
    country: string;
    house_no?: string;
    city: string;
    primary_mobile_number: string;
    first_name: string;
    title?: string;
    address2?: string;
    address1: string;
};
type Tax = {
    amount: any;
    breakup?: any[];
    name: string;
    rate: number;
};
type Charge = {
    type: string;
    amount: any;
    name: string;
    tax?: Tax;
    code?: string;
};
type LineItem = {
    custom_messasge?: string;
    quantity?: number;
    charges: Charge[];
    seller_identifier: string;
    meta?: any;
    external_line_id?: string;
};
type ProcessingDates = {
    dispatch_after_date?: string;
    confirm_by_date?: string;
    dispatch_by_date?: string;
    dp_pickup_slot?: any;
    customer_pickup_slot?: any;
    pack_by_date?: string;
};
type Shipment = {
    line_items: LineItem[];
    priority?: number;
    processing_dates?: ProcessingDates;
    location_id: number;
    external_shipment_id?: number;
    meta?: any;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type CreateOrderAPI = {
    currency_info?: any;
    payment_info: PaymentInfo;
    shipping_info: ShippingInfo;
    billing_info: BillingInfo;
    external_creation_date?: string;
    shipments: Shipment[];
    tax_info?: TaxInfo;
    external_order_id?: string;
    charges: Charge[];
    meta?: any;
};
type CreateOrderErrorReponse = {
    status: number;
    message: string;
    exception?: string;
    request_id?: string;
    info?: any;
    meta?: string;
    code?: string;
    stack_trace?: string;
};
type PaymentMethods = {
    collect_by?: string;
    mode?: string;
    refund_by?: string;
};
type CreateChannelPaymentInfo = {
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
    source?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    logo_url?: any;
    payment_info?: CreateChannelPaymentInfo;
    dp_configuration?: DpConfiguration;
    lock_states?: string[];
    location_reassignment?: boolean;
    shipment_assignment?: string;
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    is_inserted?: boolean;
    is_upserted?: boolean;
    acknowledged?: boolean;
};
type CreateChannelConifgErrorResponse = {
    error?: string;
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
    end_date: string;
    order_details?: FyndOrderIdList[];
    start_date: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    result: SearchKeywordResult;
    app_id?: string;
    words?: string[];
    is_active?: boolean;
};
type GetSearchWordsData = {
    _custom_json?: any;
    result?: any;
    app_id?: string;
    uid?: string;
    words?: string[];
    is_active?: boolean;
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type Media = {
    type?: string;
    aspect_ratio?: string;
    url?: string;
};
type AutocompletePageAction = {
    type?: string;
    params?: any;
    query?: any;
    url?: string;
};
type AutocompleteAction = {
    type?: string;
    page?: AutocompletePageAction;
};
type AutocompleteResult = {
    display?: string;
    _custom_json?: any;
    logo?: Media;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    app_id?: string;
    results?: AutocompleteResult[];
    words?: string[];
    is_active?: boolean;
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    app_id?: string;
    uid?: string;
    results?: any[];
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    words?: string[];
    results?: any[];
    app_id?: string;
};
type ProductBundleItem = {
    max_quantity: number;
    allow_remove?: boolean;
    product_uid: number;
    min_quantity: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
};
type ProductBundleRequest = {
    modified_on?: string;
    company_id?: number;
    choice: string;
    products: ProductBundleItem[];
    slug: string;
    meta?: any;
    created_on?: string;
    name: string;
    logo?: string;
    same_store_assignment?: boolean;
    modified_by?: any;
    is_active: boolean;
    page_visibility?: string[];
    created_by?: any;
};
type GetProductBundleCreateResponse = {
    modified_on?: string;
    id?: string;
    company_id?: number;
    choice: string;
    products: ProductBundleItem[];
    slug: string;
    meta?: any;
    created_on?: string;
    name: string;
    logo?: string;
    same_store_assignment?: boolean;
    modified_by?: any;
    is_active: boolean;
    page_visibility?: string[];
    created_by?: any;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    modified_on?: string;
    company_id?: number;
    choice: string;
    products: ProductBundleItem[];
    slug: string;
    meta?: any;
    name: string;
    logo?: string;
    same_store_assignment?: boolean;
    modified_by?: any;
    is_active: boolean;
    page_visibility?: string[];
};
type LimitedProductData = {
    quantity?: number;
    country_of_origin?: string;
    item_code?: string;
    slug?: string;
    identifier?: any;
    price?: any;
    uid?: number;
    name?: string;
    images?: string[];
    attributes?: any;
    short_description?: string;
    sizes?: string[];
};
type Price = {
    currency?: string;
    min_effective?: number;
    max_effective?: number;
    min_marked?: number;
    max_marked?: number;
};
type Size = {
    display?: string;
    quantity?: number;
    is_available?: boolean;
    value?: string;
};
type GetProducts = {
    max_quantity?: number;
    allow_remove?: boolean;
    product_details?: LimitedProductData;
    product_uid?: number;
    price?: Price;
    sizes?: Size[];
    min_quantity?: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
};
type GetProductBundleResponse = {
    company_id?: number;
    products?: GetProducts[];
    choice?: string;
    slug?: string;
    meta?: any;
    name?: string;
    logo?: string;
    same_store_assignment?: boolean;
    is_active?: boolean;
    page_visibility?: string[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    modified_on?: string;
    title: string;
    company_id?: number;
    brand_id?: number;
    id?: string;
    active?: boolean;
    created_on?: string;
    image?: string;
    name: string;
    subtitle?: string;
    tag?: string;
    modified_by?: any;
    guide?: Guide;
    description?: string;
    created_by?: any;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    modified_on?: string;
    title?: string;
    company_id?: number;
    brand_id?: number;
    id?: string;
    active?: boolean;
    created_on?: string;
    name?: string;
    subtitle?: string;
    tag?: string;
    modified_by?: any;
    guide?: any;
    created_by?: any;
};
type SEOData = {
    title?: any;
    description?: any;
};
type MOQData = {
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
};
type OwnerAppItemResponse = {
    seo?: SEOData;
    is_cod?: boolean;
    alt_text?: any;
    is_gift?: boolean;
    moq?: MOQData;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type ApplicationItemMOQ = {
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    seo?: ApplicationItemSEO;
    alt_text?: any;
    is_cod?: boolean;
    is_gift?: boolean;
    moq?: ApplicationItemMOQ;
    _custom_meta?: MetaFields[];
};
type SuccessResponse1 = {
    uid?: number;
    success?: boolean;
};
type GetConfigMetadataResponse = {
    values?: any[];
    condition?: any[];
    data: any[];
};
type AttributeDetailsGroup = {
    key?: string;
    priority: number;
    slug?: string;
    logo?: string;
    name: string;
    unit?: string;
    display_type: string;
    is_active: boolean;
};
type AppConfigurationDetail = {
    priority: number;
    slug: string;
    app_id: string;
    template_slugs?: string[];
    name?: string;
    logo?: string;
    attributes?: AttributeDetailsGroup[];
    is_default: boolean;
    is_active: boolean;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    has_next: boolean;
    current: number;
    next: number;
    total_count: number;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    key: string;
    priority: number;
    app_id: string;
    logo?: string;
    name?: string;
    default_key: string;
    is_default: boolean;
    is_active: boolean;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    display?: string;
    filter_types?: string[];
    key?: string;
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
    variant?: any;
    compare?: any;
    detail?: any;
};
type GetCatalogConfigurationMetaData = {
    listing?: MetaDataListingResponse;
    product?: GetCatalogConfigurationDetailsProduct;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductConfig = {
    size?: ProductSize;
    title?: string;
    key: string;
    priority: number;
    logo?: string;
    subtitle?: string;
    is_active: boolean;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    size: ProductSize;
    key: string;
    priority: number;
    name: string;
    logo?: string;
    display_type: string;
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
    end?: number;
    start?: number;
    display?: string;
};
type ConfigurationListingFilterValue = {
    condition?: string;
    value?: string;
    map_values?: any[];
    sort?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map?: any;
};
type ConfigurationListingFilterConfig = {
    key: string;
    priority: number;
    value_config?: ConfigurationListingFilterValue;
    type: string;
    display_name?: string;
    name?: string;
    logo?: string;
    is_active: boolean;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    key: string;
    priority: number;
    name?: string;
    logo?: string;
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
type AppConfiguration = {
    modified_on?: string;
    config_id?: string;
    type?: string;
    modified_by?: any;
    app_id: string;
    created_on?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    config_type: string;
    created_by?: any;
};
type AppCatalogConfiguration = {
    modified_on?: string;
    id?: string;
    config_id?: string;
    type?: string;
    modified_by?: any;
    app_id: string;
    created_on?: string;
    product?: ConfigurationProduct;
    listing?: ConfigurationListing;
    config_type: string;
    created_by?: any;
};
type GetAppCatalogConfiguration = {
    is_default?: boolean;
    data?: AppCatalogConfiguration;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    id?: string;
    config_id?: string;
    app_id: string;
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
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
type ProductFiltersValue = {
    display: string;
    currency_symbol?: string;
    count?: number;
    min?: number;
    max?: number;
    selected_max?: number;
    selected_min?: number;
    currency_code?: string;
    display_format?: string;
    value: any;
    query_format?: string;
    is_selected: boolean;
};
type ProductFiltersKey = {
    display: string;
    kind?: string;
    logo?: string;
    name: string;
    operators?: string[];
};
type ProductFilters = {
    values: ProductFiltersValue[];
    key: ProductFiltersKey;
};
type GetCollectionQueryOptionResponse = {
    sort_on?: ProductSortOn[];
    operators: any;
    filters?: ProductFilters[];
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type UserInfo = {
    user_id?: string;
    uid?: string;
    username?: string;
    email?: string;
};
type CollectionSchedule = {
    start?: string;
    next_schedule?: NextSchedule[];
    cron?: string;
    end?: string;
    duration?: number;
};
type SeoDetail = {
    title?: string;
    description?: string;
};
type CollectionImage = {
    url: string;
    aspect_ratio: string;
};
type CollectionQuery = {
    value: any[];
    op: string;
    attribute: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CreateCollection = {
    _custom_json?: any;
    published?: boolean;
    _locale_language?: any;
    allow_facets?: boolean;
    badge?: CollectionBadge;
    slug: string;
    modified_by?: UserInfo;
    _schedule?: CollectionSchedule;
    tags?: string[];
    seo?: SeoDetail;
    sort_on?: string;
    meta?: any;
    app_id: string;
    name: string;
    logo: CollectionImage;
    query?: CollectionQuery[];
    is_visible?: boolean;
    type: string;
    allow_sort?: boolean;
    priority?: number;
    visible_facets_keys?: string[];
    is_active?: boolean;
    description?: string;
    banners: CollectionBanner;
    created_by?: UserInfo;
};
type BannerImage = {
    url?: string;
    aspect_ratio?: string;
    type?: string;
};
type ImageUrls = {
    landscape?: BannerImage;
    portrait?: BannerImage;
};
type CollectionCreateResponse = {
    allow_facets?: boolean;
    badge?: any;
    slug?: string;
    cron?: any;
    _schedule?: any;
    sort_on?: string;
    meta?: any;
    app_id?: string;
    logo?: BannerImage;
    name?: string;
    query?: CollectionQuery[];
    tag?: string[];
    type?: string;
    allow_sort?: boolean;
    priority?: number;
    visible_facets_keys?: string[];
    is_active?: boolean;
    description?: string;
    banners?: ImageUrls;
};
type Media1 = {
    url: string;
    meta?: any;
    type?: string;
};
type GetCollectionDetailNest = {
    action?: Action;
    allow_facets?: boolean;
    badge?: any;
    slug?: string;
    cron?: any;
    _schedule?: any;
    meta?: any;
    app_id?: string;
    logo?: Media1;
    name?: string;
    query?: CollectionQuery[];
    tag?: string[];
    priority?: number;
    type?: string;
    allow_sort?: boolean;
    uid?: string;
    visible_facets_keys?: string[];
    is_active?: boolean;
    description?: string;
    banners?: ImageUrls;
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
    items?: GetCollectionDetailNest[];
    page?: Page;
    filters?: CollectionListingFilter;
};
type CollectionDetailResponse = {
    allow_facets?: boolean;
    priority?: number;
    slug?: string;
    type?: string;
    allow_sort?: boolean;
    _schedule?: any;
    meta?: any;
    app_id?: string;
    badge?: any;
    logo?: Media1;
    name?: string;
    cron?: any;
    query?: CollectionQuery[];
    tag?: string[];
    visible_facets_keys?: string[];
    is_active?: boolean;
    description?: string;
    banners?: ImageUrls;
};
type UpdateCollection = {
    _custom_json?: any;
    published?: boolean;
    _locale_language?: any;
    allow_facets?: boolean;
    badge?: CollectionBadge;
    slug?: string;
    modified_by?: UserInfo;
    _schedule?: CollectionSchedule;
    tags?: string[];
    seo?: SeoDetail;
    sort_on?: string;
    meta?: any;
    name?: string;
    logo?: CollectionImage;
    query?: CollectionQuery[];
    is_visible?: boolean;
    priority?: number;
    allow_sort?: boolean;
    type?: string;
    visible_facets_keys?: string[];
    is_active?: boolean;
    description?: string;
    banners?: CollectionBanner;
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
type ProductBrand = {
    uid?: number;
    name?: string;
    action?: Action;
    logo?: Media1;
};
type Price1 = {
    max?: number;
    currency_code?: string;
    currency_symbol?: string;
    min?: number;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductDetailAttribute = {
    type?: string;
    value?: string;
    key?: string;
};
type ProductDetailGroupedAttribute = {
    title?: string;
    details?: ProductDetailAttribute[];
};
type ProductListingDetail = {
    brand?: ProductBrand;
    item_code?: string;
    color?: string;
    similars?: string[];
    has_variant?: boolean;
    short_description?: string;
    image_nature?: string;
    sellable?: boolean;
    teaser_tag?: any;
    slug: string;
    item_type?: string;
    tryouts?: string[];
    price?: ProductListingPrice;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    name?: string;
    attributes?: any;
    rating?: number;
    promo_meta?: any;
    type?: string;
    medias?: Media1[];
    uid?: number;
    rating_count?: number;
    highlights?: string[];
    discount?: string;
    description?: string;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page?: Page;
    filters?: ProductFilters[];
};
type CatalogInsightItem = {
    sellable_count?: number;
    out_of_stock_count?: number;
    count?: number;
};
type CatalogInsightBrand = {
    available_articles?: number;
    total_articles?: number;
    available_sizes?: number;
    article_freshness?: number;
    name?: string;
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
    brand_distribution?: CatalogInsightBrand;
    data?: CrossSellingData;
};
type OptInPostRequest = {
    brand_ids?: number[];
    company_id?: number;
    store_ids?: number[];
    opt_level: string;
    platform?: string;
    enabled?: boolean;
};
type CompanyOptIn = {
    brand_ids: number[];
    modified_on: number;
    company_id: number;
    created_on: number;
    opt_level: string;
    store_ids: number[];
    platform: string;
    modified_by?: any;
    enabled: boolean;
    created_by?: any;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    uid?: number;
    name?: string;
    business_type?: string;
    company_type?: string;
};
type CompanyBrandDetail = {
    brand_name?: string;
    total_article?: number;
    company_id?: number;
    brand_id?: number;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    company?: string;
    brand?: number;
    store?: number;
};
type StoreDetail = {
    address?: any;
    modified_on?: string;
    company_id?: number;
    store_type?: string;
    display_name?: string;
    manager?: any;
    additional_contacts?: any[];
    created_on?: string;
    uid?: number;
    name?: string;
    store_code?: string;
    documents?: any[];
    timing?: any;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterFilter = {
    priority?: number;
    indexing: boolean;
    depends_on?: string[];
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
type AttributeSchemaRange = {
    max?: number;
    min?: number;
};
type AttributeMaster = {
    type: string;
    range?: AttributeSchemaRange;
    multi?: boolean;
    allowed_values?: string[];
    mandatory?: boolean;
    format?: string;
};
type GenderDetail = {
    id?: string;
    filters?: AttributeMasterFilter;
    slug?: string;
    meta?: AttributeMasterMeta;
    enabled_for_end_consumer?: boolean;
    details?: AttributeMasterDetails;
    name?: string;
    logo?: string;
    schema?: AttributeMaster;
    is_nested?: boolean;
    departments?: string[];
    description?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    code?: string;
    errors?: any;
    status?: number;
    meta?: any;
    message?: string;
};
type DepartmentCreateUpdate = {
    priority_order: number;
    _custom_json?: any;
    platforms?: any;
    slug?: string;
    synonyms?: string[];
    uid?: number;
    name: string;
    logo: string;
    is_active?: boolean;
    _cls?: string;
    tags?: string[];
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
};
type DepartmentCreateErrorResponse = {
    error?: string;
};
type UserSerializer = {
    contact?: string;
    user_id?: string;
    username?: string;
    _id?: string;
    uid?: string;
};
type GetDepartment = {
    priority_order?: number;
    item_type?: string;
    modified_on?: string;
    search?: string;
    slug?: string;
    created_by?: UserSerializer;
    synonyms?: string[];
    created_on?: string;
    uid?: number;
    name?: string;
    logo?: string;
    page_size?: number;
    modified_by?: UserSerializer;
    is_active?: boolean;
    page_no?: number;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    code?: string;
    errors?: any;
    status?: number;
    meta?: any;
    message?: string;
};
type UserDetail = {
    user_id: string;
    super_user?: boolean;
    username: string;
    contact?: string;
};
type DepartmentModel = {
    priority_order: number;
    modified_on: string;
    verified_on?: string;
    _custom_json?: any;
    slug?: any;
    synonyms?: any[];
    _id?: any;
    created_on: string;
    uid?: number;
    name: any;
    logo: string;
    modified_by?: UserDetail;
    _cls?: any;
    is_active?: boolean;
    verified_by?: UserDetail;
    created_by?: UserDetail;
};
type ProductTemplate = {
    modified_on?: string;
    is_archived?: boolean;
    slug: string;
    modified_by?: any;
    is_expirable: boolean;
    created_on?: string;
    name?: string;
    logo?: string;
    attributes?: string[];
    categories?: string[];
    tag?: string;
    departments?: string[];
    is_physical: boolean;
    is_active?: boolean;
    description?: string;
    created_by?: any;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type Properties = {
    hsn_code?: any;
    currency?: any;
    item_code?: any;
    product_publish?: any;
    return_config?: any;
    short_description?: any;
    brand_uid?: any;
    teaser_tag?: any;
    category_slug?: any;
    slug?: any;
    media?: any;
    trader?: any;
    trader_type?: any;
    tags?: any;
    item_type?: any;
    custom_order?: any;
    no_of_boxes?: any;
    variants?: any;
    product_group_tag?: any;
    name?: any;
    size_guide?: any;
    is_dependent?: any;
    country_of_origin?: any;
    multi_size?: any;
    command?: any;
    sizes?: any;
    highlights?: any;
    is_active?: any;
    description?: any;
};
type GlobalValidation = {
    title?: string;
    type?: string;
    definitions?: any;
    properties?: Properties;
    description?: string;
    required?: string[];
};
type TemplateValidationData = {
    global_validation?: GlobalValidation;
    template_validation?: any;
};
type TemplateDetails = {
    id?: string;
    is_archived?: boolean;
    slug: string;
    is_expirable: boolean;
    name?: string;
    logo?: string;
    attributes?: string[];
    categories?: string[];
    tag?: string;
    departments?: string[];
    is_physical: boolean;
    is_active?: boolean;
    description?: string;
};
type TemplatesValidationResponse = {
    data?: TemplateValidationData;
    template_details?: TemplateDetails;
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
type ProductDownloadItemsData = {
    type?: string;
    brand?: string[];
    templates?: string[];
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    template_tags?: any;
    trigger_on?: string;
    status?: string;
    data?: ProductDownloadItemsData;
    id?: string;
    seller_id?: number;
    url?: string;
    task_id?: string;
    completed_on?: string;
    created_by?: VerifiedBy;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
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
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Media2 = {
    landscape: string;
    logo: string;
    portrait: string;
};
type CategoryRequestBody = {
    hierarchy?: Hierarchy[];
    marketplaces?: CategoryMapping;
    slug?: string;
    priority?: number;
    tryouts?: string[];
    media?: Media2;
    level: number;
    synonyms?: string[];
    name: string;
    departments: number[];
    is_active: boolean;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    modified_on?: string;
    id?: string;
    hierarchy?: Hierarchy[];
    marketplaces?: CategoryMapping;
    slug?: string;
    priority?: number;
    tryouts?: string[];
    media?: Media2;
    level: number;
    synonyms?: string[];
    created_on?: string;
    modified_by?: any;
    uid?: number;
    name: string;
    departments: number[];
    is_active: boolean;
    created_by?: any;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryUpdateResponse = {
    message?: string;
    success?: boolean;
};
type SingleCategoryResponse = {
    data?: Category;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type TeaserTag = {
    url?: string;
    tag?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type Trader = {
    type?: string;
    name: any;
    address?: string[];
};
type TaxIdentifier = {
    hsn_code?: string;
    reporting_hsn?: string;
    hsn_code_id?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    manufacturing_time_unit?: string;
    is_custom_order?: boolean;
};
type ProductCreateUpdate = {
    currency: string;
    company_id: number;
    item_code: any;
    _custom_json?: any;
    product_publish?: ProductPublish;
    return_config: ReturnConfig;
    template_tag: string;
    short_description?: string;
    brand_uid: number;
    departments: number[];
    bulk_job_id?: string;
    action?: string;
    teaser_tag?: TeaserTag;
    category_slug: string;
    slug: string;
    media?: Media1[];
    net_quantity?: NetQuantity;
    trader: Trader[];
    tags?: string[];
    item_type: string;
    tax_identifier: TaxIdentifier;
    change_request_id?: any;
    custom_order?: CustomOrder;
    no_of_boxes?: number;
    variants_group?: any;
    variants?: any;
    product_group_tag?: string[];
    name: any;
    variant_media?: any;
    size_guide?: string;
    is_dependent?: boolean;
    country_of_origin: string;
    is_image_less_product?: boolean;
    is_set?: boolean;
    multi_size?: boolean;
    uid?: number;
    highlights?: string[];
    requester?: string;
    is_active?: boolean;
    description?: string;
};
type Logo = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type Image = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
    aspect_ratio_f?: number;
};
type Product = {
    brand?: Brand;
    hsn_code?: string;
    currency?: string;
    item_code?: string;
    _custom_json?: any;
    product_publish?: ProductPublished;
    color?: string;
    template_tag?: string;
    short_description?: string;
    brand_uid?: number;
    departments?: number[];
    image_nature?: string;
    all_sizes?: any[];
    category_slug?: string;
    slug?: string;
    media?: Media1[];
    category_uid?: number;
    variant_group?: any;
    item_type?: string;
    tax_identifier?: any;
    id?: string;
    custom_order?: any;
    l3_mapping?: string[];
    variants?: any;
    name?: string;
    size_guide?: string;
    is_dependent?: boolean;
    country_of_origin?: string;
    is_set?: boolean;
    multi_size?: boolean;
    is_expirable?: boolean;
    uid?: number;
    sizes?: any[];
    images?: Image[];
    highlights?: string[];
    primary_color?: string;
    is_physical?: boolean;
    is_active?: boolean;
    description?: string;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type AttributeMasterSerializer = {
    synonyms?: any;
    suggestion?: string;
    details: AttributeMasterDetails;
    schema: AttributeMaster;
    departments: string[];
    modified_on?: string;
    slug: string;
    enabled_for_end_consumer?: boolean;
    modified_by?: any;
    tags?: string[];
    filters: AttributeMasterFilter;
    created_on?: string;
    name?: string;
    logo?: string;
    is_nested?: boolean;
    variant?: boolean;
    unit?: string;
    raw_key?: string;
    description?: string;
    created_by?: any;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    user_id?: string;
    uid?: string;
    username?: string;
    email?: string;
};
type BulkJob = {
    failed?: number;
    custom_template_tag?: string;
    modified_on?: string;
    company_id: number;
    file_path?: string;
    created_on: string;
    total: number;
    cancelled?: number;
    stage?: string;
    succeed?: number;
    cancelled_records?: any[];
    template_tag?: string;
    modified_by?: UserInfo1;
    tracking_url?: string;
    is_active?: boolean;
    failed_records?: any[];
    created_by?: UserInfo1;
};
type BulkResponse = {
    modified_on?: string;
    batch_id: string;
    created_on: string;
    modified_by?: UserInfo1;
    is_active?: boolean;
    created_by?: UserInfo1;
};
type UserDetail1 = {
    user_id?: string;
    username?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    failed?: number;
    template?: ProductTemplate;
    modified_on?: string;
    company_id?: number;
    file_path?: string;
    created_on?: string;
    total?: number;
    template_tag?: string;
    stage?: string;
    cancelled_records?: string[];
    succeed?: number;
    cancelled?: number;
    modified_by?: UserDetail1;
    is_active?: boolean;
    failed_records?: string[];
    created_by?: UserDetail1;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    template_tag: string;
    data: any[];
    batch_id: string;
    company_id: number;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
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
    failed?: number;
    modified_on?: string;
    id?: string;
    file_path?: string;
    company_id?: number;
    retry?: number;
    created_on?: string;
    total?: number;
    cancelled?: number;
    stage?: string;
    succeed?: number;
    cancelled_records?: string[];
    modified_by?: UserCommon;
    tracking_url?: string;
    is_active?: boolean;
    failed_records?: string[];
    created_by?: UserCommon;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductSizeDeleteDataResponse = {
    size?: string;
    item_id?: number;
    company_id?: number;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
};
type GTIN = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: any;
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
type InvSize = {
    price_transfer?: number;
    size: any;
    item_dimensions_unit_of_measure?: string;
    quantity: number;
    currency: string;
    item_length?: number;
    is_set?: boolean;
    price?: number;
    item_width?: number;
    item_weight?: number;
    price_effective: number;
    item_height?: number;
    identifiers: GTIN[];
    store_code: string;
    item_weight_unit_of_measure?: string;
    expiration_date?: string;
    set?: InventorySet;
};
type ItemQuery = {
    item_code?: string;
    uid?: number;
    brand_uid?: number;
};
type InventoryRequest = {
    sizes: InvSize[];
    item: ItemQuery;
    company_id: number;
};
type InventoryResponse = {
    price_transfer?: number;
    size?: string;
    quantity?: number;
    seller_identifier?: string;
    currency?: string;
    price?: number;
    uid?: string;
    item_id?: number;
    identifiers?: any;
    price_effective?: number;
    store?: any;
    inventory_updated_on?: string;
    sellable_quantity?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type BrandMeta = {
    name: string;
    id: number;
};
type ReturnConfig1 = {
    time?: number;
    returnable?: boolean;
    unit?: string;
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
type WeightResponse = {
    shipping: number;
    unit: string;
    is_default: boolean;
};
type CompanyMeta = {
    id: number;
};
type Trader1 = {
    type: string;
    name: string;
    address: string[];
};
type PriceMeta = {
    transfer: number;
    updated_at?: string;
    currency: string;
    marked: number;
    effective: number;
    tp_notes?: any;
};
type DimensionResponse = {
    height: number;
    width: number;
    length: number;
    unit: string;
    is_default: boolean;
};
type ManufacturerResponse = {
    address: string;
    name: string;
    is_default: boolean;
};
type InventorySellerResponse = {
    brand: BrandMeta;
    fynd_article_code: string;
    _custom_json?: any;
    fynd_item_code: string;
    identifier: any;
    return_config?: ReturnConfig1;
    item_id: number;
    quantities?: Quantities;
    weight: WeightResponse;
    company: CompanyMeta;
    stage?: string;
    trader?: Trader1[];
    store: StoreMeta;
    modified_by?: UserSerializer;
    tags?: string[];
    size: string;
    seller_identifier: string;
    tax_identifier?: any;
    total_quantity: number;
    fynd_meta?: any;
    price: PriceMeta;
    raw_meta?: any;
    meta?: any;
    trace_id?: string;
    added_on_store?: string;
    set?: InventorySet;
    country_of_origin: string;
    is_set?: boolean;
    track_inventory?: boolean;
    dimension: DimensionResponse;
    uid: string;
    manufacturer: ManufacturerResponse;
    fragile: boolean;
    expiration_date?: string;
    is_active?: boolean;
    created_by?: UserSerializer;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type BulkInventoryGetItems = {
    failed?: number;
    modified_on?: string;
    id?: string;
    company_id?: number;
    file_path?: string;
    created_on?: string;
    cancelled?: number;
    total?: number;
    stage?: string;
    cancelled_records?: string[];
    succeed?: number;
    modified_by?: any;
    is_active?: boolean;
    failed_records?: string[];
    created_by?: any;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    item_dimensions_unit_of_measure?: string;
    seller_identifier: string;
    currency?: string;
    quantity?: number;
    price_marked?: number;
    total_quantity?: number;
    price?: number;
    trace_id?: string;
    price_effective?: number;
    store_code: string;
    item_weight_unit_of_measure?: string;
    expiration_date?: string;
    tags?: string[];
};
type InventoryBulkRequest = {
    user?: any;
    sizes: InventoryJobPayload[];
    batch_id: string;
    company_id: number;
};
type InventoryExportRequest = {
    type?: string;
    brand?: number[];
    store?: number[];
};
type InventoryExportResponse = {
    trigger_on?: string;
    status?: string;
    task_id: string;
    request_params?: any;
    seller_id: number;
};
type InventoryExportJob = {
    task_id: string;
    trigger_on?: string;
    status?: string;
    url?: string;
    request_params?: any;
    completed_on?: string;
    seller_id: number;
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
    store_id: number;
    seller_identifier: string;
    price_marked?: number;
    total_quantity?: number;
    trace_id?: string;
    price_effective?: number;
    expiration_date?: string;
    tags?: string[];
};
type InventoryRequestSchemaV2 = {
    payload?: InventoryPayload[];
    meta?: any;
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
type HsnUpsert = {
    hsn_code: string;
    company_id: number;
    threshold2?: number;
    tax_on_mrp: boolean;
    threshold1: number;
    hs2_code: string;
    uid?: number;
    tax1: number;
    tax2?: number;
    is_active?: boolean;
    tax_on_esp?: boolean;
};
type HsnCodesObject = {
    hsn_code?: string;
    id?: string;
    company_id?: number;
    modified_on?: string;
    threshold2?: number;
    tax_on_mrp?: boolean;
    threshold1?: number;
    hs2_code?: string;
    tax1?: number;
    tax2?: number;
    tax_on_esp?: boolean;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    has_previous?: boolean;
    size?: number;
    current?: string;
    item_total?: number;
    has_next?: boolean;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type BulkHsnUpsert = {
    data: HsnUpsert[];
};
type BulkHsnResponse = {
    success?: boolean;
};
type TaxSlab = {
    threshold: number;
    cess?: number;
    effective_date: string;
    rate: number;
};
type HSNDataInsertV2 = {
    country_code: string;
    hsn_code: string;
    reporting_hsn: string;
    modified_on?: string;
    type: string;
    created_on?: string;
    modified_by?: any;
    created_by?: any;
    description: string;
    taxes: TaxSlab[];
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type ArticleAssignment = {
    level?: string;
    strategy?: string;
};
type ArticleQuery = {
    size: string;
    item_id: number;
    ignored_stores?: number[];
};
type AssignStoreArticle = {
    quantity?: number;
    article_assignment?: ArticleAssignment;
    meta?: any;
    query?: ArticleQuery;
    group_id?: string;
};
type AssignStore = {
    channel_type?: string;
    articles: AssignStoreArticle[];
    pincode: string;
    company_id?: number;
    app_id: string;
    store_ids?: number[];
    channel_identifier?: string;
};
type ArticleAssignment1 = {
    level?: string;
    strategy?: string;
};
type StoreAssignResponse = {
    store_id?: number;
    size: string;
    quantity: number;
    article_assignment: ArticleAssignment1;
    status: boolean;
    company_id?: number;
    strategy_wise_listing?: any[];
    price_marked?: number;
    meta?: any;
    index?: number;
    _id?: string;
    uid?: string;
    item_id: number;
    price_effective?: number;
    store_pincode?: number;
    group_id?: string;
    s_city?: string;
};
type BrandItem = {
    action?: Action;
    slug?: string;
    uid?: number;
    name?: string;
    discount?: string;
    logo?: Media;
    departments?: string[];
    banners?: ImageUrls;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    priority_order?: number;
    slug?: string;
    uid?: number;
    name?: string;
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
    action?: Action;
    _custom_json?: any;
    slug?: string;
    childs?: any[];
    uid?: number;
    name?: string;
    banners?: ImageUrls;
};
type SecondLevelChild = {
    action?: Action;
    _custom_json?: any;
    slug?: string;
    childs?: ThirdLevelChild[];
    uid?: number;
    name?: string;
    banners?: ImageUrls;
};
type Child = {
    action?: Action;
    _custom_json?: any;
    slug?: string;
    childs?: SecondLevelChild[];
    uid?: number;
    name?: string;
    banners?: ImageUrls;
};
type CategoryItems = {
    action?: Action;
    slug?: string;
    childs?: Child[];
    uid?: number;
    name?: string;
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
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    page: Page;
    operators?: any;
};
type ProductDetail = {
    brand?: ProductBrand;
    item_code?: string;
    color?: string;
    similars?: string[];
    has_variant?: boolean;
    short_description?: string;
    image_nature?: string;
    teaser_tag?: any;
    slug: string;
    item_type?: string;
    tryouts?: string[];
    grouped_attributes?: ProductDetailGroupedAttribute[];
    product_online_date?: string;
    name?: string;
    attributes?: any;
    rating?: number;
    promo_meta?: any;
    type?: string;
    medias?: Media1[];
    uid?: number;
    rating_count?: number;
    highlights?: string[];
    description?: string;
};
type InventoryPage = {
    next_id?: string;
    has_previous?: boolean;
    type: string;
    item_total: number;
    has_next?: boolean;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    weekday: string;
    opening?: LocationTimingSerializer;
    open: boolean;
    closing?: LocationTimingSerializer;
};
type GetAddressSerializer = {
    country_code?: string;
    pincode?: number;
    longitude?: number;
    address_type?: string;
    landmark?: string;
    city?: string;
    state?: string;
    address2?: string;
    latitude?: number;
    country?: string;
    address1?: string;
};
type UserSerializer1 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type GetCompanySerializer = {
    modified_on?: string;
    company_type?: string;
    verified_on?: string;
    business_type?: string;
    created_on?: string;
    uid?: number;
    name?: string;
    stage?: string;
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer1;
    reject_reason?: string;
    verified_by?: UserSerializer1;
    created_by?: UserSerializer1;
};
type UserSerializer2 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type LocationManagerSerializer = {
    name?: string;
    email?: string;
    mobile_no: SellerPhoneNumber;
};
type InvoiceCredSerializer = {
    enabled?: boolean;
    username?: string;
    password?: string;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type LocationIntegrationType = {
    order?: string;
    inventory?: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetLocationSerializer = {
    _custom_json?: any;
    contact_numbers?: SellerPhoneNumber[];
    timing?: LocationDayWiseSerializer[];
    modified_on?: string;
    verified_on?: string;
    company?: GetCompanySerializer;
    phone_number: string;
    stage?: string;
    warnings?: any;
    modified_by?: UserSerializer2;
    manager?: LocationManagerSerializer;
    documents?: Document[];
    notification_emails?: string[];
    address: GetAddressSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    store_type?: string;
    created_on?: string;
    name: string;
    integration_type?: LocationIntegrationType;
    code: string;
    display_name: string;
    product_return_config?: ProductReturnConfigSerializer;
    uid?: number;
    verified_by?: UserSerializer2;
    created_by?: UserSerializer2;
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
    _custom_json?: any;
    app_id: string;
    uid: number;
    name?: string;
    logo?: string;
    is_active?: boolean;
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
    country_code?: string;
    country?: string;
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
type CompanyTaxesSerializer = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type GetCompanyProfileSerializerResponse = {
    modified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    uid: number;
    _custom_json?: any;
    business_details?: BusinessDetails;
    documents?: Document[];
    verified_by?: UserSerializer;
    notification_emails?: string[];
    name?: string;
    mode?: string;
    created_on?: string;
    contact_details?: ContactDetails;
    addresses?: GetAddressSerializer[];
    modified_on?: string;
    company_type: string;
    business_type: string;
    warnings?: any;
    stage?: string;
    verified_on?: string;
    taxes?: CompanyTaxesSerializer[];
    business_info?: string;
    franchise_enabled?: boolean;
    created_by?: UserSerializer;
};
type CreateUpdateAddressSerializer = {
    state: string;
    address2?: string;
    country: string;
    address1: string;
    city: string;
    latitude: number;
    pincode: number;
    country_code?: string;
    longitude: number;
    landmark?: string;
    address_type: string;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    enable?: boolean;
    effective_date?: string;
};
type UpdateCompany = {
    contact_details?: ContactDetails;
    _custom_json?: any;
    addresses?: CreateUpdateAddressSerializer[];
    business_info?: string;
    reject_reason?: string;
    business_details?: BusinessDetails;
    documents?: Document[];
    business_type?: string;
    warnings?: any;
    notification_emails?: string[];
    name?: string;
    taxes?: CompanyTaxesSerializer1[];
    franchise_enabled?: boolean;
    company_type?: string;
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
    uid?: number;
    brand?: DocumentsObj;
    company_documents?: DocumentsObj;
    stage?: string;
    store_documents?: DocumentsObj;
    product?: DocumentsObj;
    store?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    modified_by?: UserSerializer;
    slug_key?: string;
    uid?: number;
    _custom_json?: any;
    description?: string;
    verified_by?: UserSerializer;
    name: string;
    mode?: string;
    created_on?: string;
    logo?: string;
    banner?: BrandBannerSerializer;
    modified_on?: string;
    _locale_language?: any;
    reject_reason?: string;
    warnings?: any;
    stage?: string;
    verified_on?: string;
    synonyms?: string[];
    created_by?: UserSerializer;
};
type CreateUpdateBrandRequestSerializer = {
    uid?: number;
    synonyms?: string[];
    brand_tier?: string;
    logo: string;
    _custom_json?: any;
    company_id?: number;
    description?: string;
    banner?: BrandBannerSerializer;
    _locale_language?: any;
    name: string;
};
type CompanySocialAccounts = {
    url: string;
    name: string;
};
type CompanyDetails = {
    website_url?: string;
    socials?: CompanySocialAccounts[];
};
type CompanySerializer = {
    modified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    uid?: number;
    created_on?: string;
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    market_channels?: string[];
    reject_reason?: string;
    modified_on?: string;
    details?: CompanyDetails;
    business_type: string;
    verified_by?: UserSerializer;
    stage?: string;
    verified_on?: string;
    notification_emails?: string[];
    name?: string;
    created_by?: UserSerializer;
    company_type: string;
};
type CompanyBrandSerializer = {
    modified_by?: UserSerializer;
    uid?: number;
    created_on?: string;
    brand?: GetBrandResponseSerializer;
    reject_reason?: string;
    modified_on?: string;
    warnings?: any;
    verified_by?: UserSerializer;
    stage?: string;
    verified_on?: string;
    company?: CompanySerializer;
    created_by?: UserSerializer;
};
type CompanyBrandListSerializer = {
    items?: CompanyBrandSerializer[];
    page?: Page;
};
type CompanyBrandPostRequestSerializer = {
    uid?: number;
    brands: number[];
    company: number;
};
type LocationSerializer = {
    uid?: number;
    gst_credentials?: InvoiceDetailsSerializer;
    _custom_json?: any;
    display_name: string;
    documents?: Document[];
    code: string;
    store_type?: string;
    contact_numbers?: SellerPhoneNumber[];
    warnings?: any;
    stage?: string;
    address: GetAddressSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    company: number;
    manager?: LocationManagerSerializer;
    notification_emails?: string[];
    name: string;
    timing?: LocationDayWiseSerializer[];
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type _ArticleQuery = {
    size?: string;
    ignored_stores?: number[];
    item_id?: number;
};
type _AssignStoreArticle = {
    group_id?: string;
    meta?: any;
    quantity?: number;
    article_assignment?: _ArticleAssignment;
    query?: _ArticleQuery;
};
type AssignStoreRequestValidator = {
    company_id?: number;
    channel_identifier?: string;
    app_id?: string;
    pincode?: string;
    store_ids?: number[];
    channel_type?: string;
    articles?: _AssignStoreArticle[];
};
type AssignStoreResponseSerializer = {
    store_pincode?: string;
    uid?: string;
    index?: number;
    company_id?: number;
    size?: string;
    status?: boolean;
    preice_effective?: number;
    s_city?: string;
    price_marked?: number;
    meta?: any;
    article_assignment?: _ArticleAssignment;
    _id?: string;
    store_id?: number;
    quantity?: number;
    item_id?: number;
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
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type Validity = {
    priority?: number;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
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
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type PriceRange = {
    min?: number;
    max?: number;
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
type Restrictions = {
    bulk_bundle?: BulkBundleRestriction;
    payments?: any;
    ordering_stores?: number[];
    post_order?: PostOrder;
    coupon_allowed?: boolean;
    user_type?: string;
    platforms?: string[];
    price_range?: PriceRange;
    user_groups?: number[];
    uses?: UsesRestriction;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    auto?: DisplayMetaDict;
    title?: string;
    remove?: DisplayMetaDict;
    apply?: DisplayMetaDict;
    subtitle?: string;
    description?: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Rule = {
    min?: number;
    value?: number;
    discount_qty?: number;
    key?: number;
    max?: number;
};
type CouponSchedule = {
    duration?: number;
    next_schedule?: any[];
    cron?: string;
    end?: string;
    start?: string;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
};
type RuleDefinition = {
    currency_code?: string;
    calculate_on: string;
    type: string;
    auto_apply?: boolean;
    scope?: string[];
    applicable_on: string;
    is_exact?: boolean;
    value_type: string;
};
type CouponAdd = {
    identifiers: Identifier;
    validation?: Validation;
    code: string;
    validity: Validity;
    state?: State;
    restrictions?: Restrictions;
    display_meta: DisplayMeta;
    ownership: Ownership;
    type_slug: string;
    date_meta?: CouponDateMeta;
    author?: CouponAuthor;
    tags?: string[];
    rule: Rule[];
    _schedule?: CouponSchedule;
    action?: CouponAction;
    rule_definition: RuleDefinition;
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
    identifiers: Identifier;
    validation?: Validation;
    code: string;
    validity: Validity;
    state?: State;
    restrictions?: Restrictions;
    display_meta: DisplayMeta;
    ownership: Ownership;
    type_slug: string;
    date_meta?: CouponDateMeta;
    author?: CouponAuthor;
    tags?: string[];
    rule: Rule[];
    _schedule?: CouponSchedule;
    action?: CouponAction;
    rule_definition: RuleDefinition;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type DisplayMeta1 = {
    name?: string;
    offer_text?: string;
    description?: string;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionSchedule = {
    duration?: number;
    next_schedule?: any[];
    cron?: string;
    published: boolean;
    end?: string;
    start: string;
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
type UserRegistered = {
    end?: string;
    start?: string;
};
type UsesRemaining1 = {
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type Restrictions1 = {
    payments?: PromotionPaymentModes[];
    order_quantity?: number;
    anonymous_users?: boolean;
    post_order?: PostOrder1;
    user_id?: string[];
    platforms?: string[];
    user_groups?: number[];
    user_registered?: UserRegistered;
    uses: UsesRestriction1;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type CompareObject = {
    greater_than?: number;
    greater_than_equals?: number;
    equals?: number;
    less_than?: number;
    less_than_equals?: number;
};
type ItemCriteria = {
    item_category?: number[];
    item_size?: string[];
    available_zones?: string[];
    item_store?: number[];
    all_items?: boolean;
    item_exclude_company?: number[];
    item_exclude_id?: number[];
    cart_unique_item_quantity?: CompareObject;
    item_exclude_category?: number[];
    cart_quantity?: CompareObject;
    item_company?: number[];
    item_id?: number[];
    cart_total?: CompareObject;
    item_exclude_brand?: number[];
    cart_unique_item_amount?: CompareObject;
    item_exclude_sku?: string[];
    item_exclude_store?: number[];
    item_brand?: number[];
    item_sku?: string[];
    buy_rules?: string[];
};
type DiscountOffer = {
    code?: string;
    apportion_discount?: boolean;
    max_usage_per_transaction?: number;
    discount_price?: number;
    max_discount_amount?: number;
    partial_can_ret?: boolean;
    discount_amount?: number;
    min_offer_quantity?: number;
    discount_percentage?: number;
    max_offer_quantity?: number;
};
type DiscountRule = {
    discount_type: string;
    item_criteria: ItemCriteria;
    buy_condition: string;
    offer: DiscountOffer;
};
type PromotionListItem = {
    promotion_type: string;
    display_meta: DisplayMeta1;
    currency?: string;
    stackable?: boolean;
    apply_priority?: number;
    calculate_on?: string;
    code?: string;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    apply_exclusive?: string;
    _custom_json?: any;
    application_id: string;
    promo_group: string;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    ownership: Ownership1;
    apply_all_discount?: boolean;
    buy_rules: any;
    mode: string;
    discount_rules: DiscountRule[];
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    promotion_type: string;
    display_meta: DisplayMeta1;
    currency?: string;
    stackable?: boolean;
    apply_priority?: number;
    calculate_on?: string;
    code?: string;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    apply_exclusive?: string;
    _custom_json?: any;
    application_id: string;
    promo_group: string;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    ownership: Ownership1;
    apply_all_discount?: boolean;
    buy_rules: any;
    mode: string;
    discount_rules: DiscountRule[];
};
type PromotionUpdate = {
    promotion_type: string;
    display_meta: DisplayMeta1;
    currency?: string;
    stackable?: boolean;
    apply_priority?: number;
    calculate_on?: string;
    code?: string;
    post_order_action?: PromotionAction;
    date_meta?: PromotionDateMeta;
    apply_exclusive?: string;
    _custom_json?: any;
    application_id: string;
    promo_group: string;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    _schedule?: PromotionSchedule;
    restrictions?: Restrictions1;
    ownership: Ownership1;
    apply_all_discount?: boolean;
    buy_rules: any;
    mode: string;
    discount_rules: DiscountRule[];
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type ActivePromosResponse = {
    entity_type?: string;
    entity_slug?: string;
    created_on?: string;
    title?: string;
    type?: string;
    is_hidden?: boolean;
    modified_on?: string;
    subtitle?: string;
    example?: string;
    description?: string;
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
    description?: string;
    applicable?: number;
    is_applied?: boolean;
    total?: number;
};
type CouponBreakup = {
    code?: string;
    value?: number;
    title?: string;
    sub_title?: string;
    coupon_type?: string;
    minimum_cart_value?: number;
    type?: string;
    max_discount_value?: number;
    uid?: string;
    message?: string;
    coupon_value?: number;
    is_applied?: boolean;
    description?: string;
};
type DisplayBreakup = {
    currency_code?: string;
    value?: number;
    currency_symbol?: string;
    key?: string;
    message?: string[];
    display?: string;
};
type RawBreakup = {
    cod_charge?: number;
    fynd_cash?: number;
    mrp_total?: number;
    total?: number;
    coupon?: number;
    gst_charges?: number;
    convenience_fee?: number;
    vog?: number;
    discount?: number;
    you_saved?: number;
    subtotal?: number;
    delivery_charge?: number;
};
type CartBreakup = {
    loyalty_points?: LoyaltyPoints;
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    raw?: RawBreakup;
};
type FreeGiftItem = {
    item_price_details?: any;
    item_name?: string;
    item_images_url?: string[];
    item_slug?: string;
    item_id?: number;
    item_brand_name?: string;
};
type AppliedFreeArticles = {
    free_gift_item_details?: FreeGiftItem;
    parent_item_identifier?: string;
    quantity?: number;
    article_id?: string;
};
type DiscountRulesApp = {
    item_criteria?: any;
    raw_offer?: any;
    matched_buy_rules?: string[];
    offer?: any;
};
type AppliedPromotion = {
    promotion_name?: string;
    article_quantity?: number;
    amount?: number;
    offer_text?: string;
    promo_id?: string;
    promotion_type?: string;
    mrp_promotion?: boolean;
    buy_rules?: BuyRules[];
    promotion_group?: string;
    applied_free_articles?: AppliedFreeArticles[];
    discount_rules?: DiscountRulesApp[];
};
type CartProductIdentifer = {
    identifier?: string;
};
type BaseInfo = {
    name?: string;
    uid?: number;
};
type BasePrice = {
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
    marked?: number;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    seller?: BaseInfo;
    extra_meta?: any;
    is_gift?: boolean;
    seller_identifier?: string;
    type?: string;
    identifier?: any;
    gift_card?: any;
    parent_item_identifiers?: any;
    store?: BaseInfo;
    uid?: string;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
    quantity?: number;
    is_gift_visible?: boolean;
    size?: string;
};
type Tags = {
    tags?: any;
};
type ProductImage = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type CategoryInfo = {
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
    teaser_tag?: Tags;
    brand?: BaseInfo;
    slug?: string;
    type?: string;
    images?: ProductImage[];
    name?: string;
    tags?: string[];
    uid?: number;
    categories?: CategoryInfo[];
    action?: ProductAction;
    _custom_json?: any;
};
type PromoMeta = {
    message?: string;
};
type CouponDetails = {
    discount_single_quantity?: number;
    code?: string;
    discount_total_quantity?: number;
};
type ProductAvailability = {
    sizes?: string[];
    is_valid?: boolean;
    deliverable?: boolean;
    out_of_stock?: boolean;
    other_store_quantity?: number;
};
type ProductPrice = {
    effective?: number;
    currency_code?: string;
    currency_symbol?: string;
    marked?: number;
    add_on?: number;
    selling?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type CartProductInfo = {
    promotions_applied?: AppliedPromotion[];
    identifiers: CartProductIdentifer;
    bulk_offer?: any;
    article?: ProductArticle;
    product?: CartProduct;
    coupon_message?: string;
    is_set?: boolean;
    promo_meta?: PromoMeta;
    message?: string;
    coupon?: CouponDetails;
    parent_item_identifiers?: any;
    availability?: ProductAvailability;
    discount?: string;
    key?: string;
    price?: ProductPriceInfo;
    price_per_unit?: ProductPriceInfo;
    quantity?: number;
};
type OpenapiCartDetailsResponse = {
    message?: string;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    is_valid?: boolean;
};
type OpenApiErrorResponse = {
    message?: string;
    success?: boolean;
    errors?: any;
};
type ShippingAddress = {
    area?: string;
    pincode?: number;
    area_code_slug?: string;
    landmark?: string;
    state?: string;
    country_code?: string;
    address?: string;
    address_type?: string;
    phone?: number;
    name?: string;
    city?: string;
    meta?: any;
    area_code: string;
    email?: string;
    country?: string;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
};
type PromiseFormatted = {
    min?: string;
    max?: string;
};
type PromiseTimestamp = {
    min?: number;
    max?: number;
};
type ShipmentPromise = {
    formatted?: PromiseFormatted;
    timestamp?: PromiseTimestamp;
};
type OpenApiCartServiceabilityResponse = {
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    message?: string;
    items?: CartProductInfo[];
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
    extra_meta?: any;
    size: string;
    loyalty_discount?: number;
    price_marked: number;
    employee_discount?: number;
    meta?: CartItemMeta;
    payment_methods: MultiTenderPaymentMethod[];
    discount: number;
    price_effective: number;
    delivery_charges: number;
    product_id: number;
    files?: OpenApiFiles[];
    cod_charges: number;
    cashback_applied: number;
    coupon_effective_discount: number;
    quantity?: number;
    amount_paid: number;
};
type OpenApiPlatformCheckoutReq = {
    shipping_address?: ShippingAddress;
    cod_charges: number;
    comment?: string;
    currency_code?: string;
    coupon_code: string;
    loyalty_discount?: number;
    cart_value: number;
    order_id?: string;
    billing_address: ShippingAddress;
    affiliate_order_id?: string;
    payment_methods: MultiTenderPaymentMethod[];
    employee_discount?: any;
    delivery_charges: number;
    coupon?: string;
    payment_mode?: string;
    gstin?: string;
    files?: OpenApiFiles[];
    cashback_applied: number;
    cart_items: OpenApiOrderItem[];
    coupon_value: number;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    message?: string;
    success?: boolean;
    order_ref_id?: string;
};
type AbandonedCart = {
    payments?: any;
    created_on: string;
    articles: any[];
    fynd_credits?: any;
    last_modified: string;
    fc_index_map?: number[];
    app_id?: string;
    checkout_mode?: string;
    merge_qty?: boolean;
    bulk_coupon_discount?: number;
    is_default: boolean;
    order_id?: string;
    payment_methods?: any[];
    is_active?: boolean;
    promotion?: any;
    shipments?: any[];
    delivery_charges?: any;
    coupon?: any;
    gstin?: string;
    discount?: number;
    meta?: any;
    payment_mode?: string;
    expire_at: string;
    is_archive?: boolean;
    uid: number;
    cod_charges?: any;
    comment?: string;
    cart_value?: number;
    buy_now?: boolean;
    pick_up_customer_details?: any;
    user_id: string;
    _id: string;
    cashback: any;
};
type AbandonedCartResponse = {
    page?: Page;
    success?: boolean;
    result?: any;
    message?: string;
    items?: AbandonedCart[];
};
type AddProductCart = {
    article_assignment?: any;
    extra_meta?: any;
    gift_message?: string;
    item_size?: string;
    is_gift?: boolean;
    seller_id?: number;
    store_id?: number;
    article_id?: string;
    parent_item_identifiers?: any;
    item_id?: number;
    pos?: boolean;
    product_group_tags?: string[];
    display?: string;
    quantity?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    comment?: string;
    delivery_charge_info?: string;
    id?: string;
    restrict_checkout?: boolean;
    payment_selection_lock?: PaymentSelectionLock;
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    coupon_text?: string;
    is_valid?: boolean;
    currency?: CartCurrency;
    last_modified?: string;
    gstin?: string;
    delivery_promise?: ShipmentPromise;
    message?: string;
    checkout_mode?: string;
    items?: CartProductInfo[];
};
type AddCartDetailResponse = {
    cart?: CartDetailResponse;
    success?: boolean;
    message?: string;
    partial?: boolean;
};
type UpdateProductCart = {
    identifiers: CartProductIdentifer;
    gift_message?: string;
    item_size?: string;
    is_gift?: boolean;
    article_id?: string;
    parent_item_identifiers?: any;
    item_id?: number;
    item_index?: number;
    extra_meta?: any;
    quantity?: number;
};
type UpdateCartRequest = {
    operation: string;
    items?: UpdateProductCart[];
};
type UpdateCartDetailResponse = {
    cart?: CartDetailResponse;
    success?: boolean;
    message?: string;
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
type E = {
    code?: any;
    exception?: string;
    info?: string;
    message?: string;
    request_id?: string;
    stack_trace?: string;
    status?: number;
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
type GiveawayResponse = {
    items?: Giveaway[];
    page?: Page;
};
type HistoryPretty = {
    _id?: string;
    application_id?: string;
    claimed?: boolean;
    created_at?: string;
    expires_on?: string;
    points?: number;
    remaining_points?: number;
    text_1?: string;
    text_2?: string;
    text_3?: string;
    txn_name?: string;
    updated_at?: string;
    user_id?: string;
};
type HistoryRes = {
    items?: HistoryPretty[];
    page?: Page;
    points?: number;
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
type Points = {
    available?: number;
};
type Referral = {
    code?: string;
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
type RewardsAudience = {
    header_user_id?: string;
    id?: string;
};
type RewardsRule = {
    amount?: number;
};
type Schedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
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
