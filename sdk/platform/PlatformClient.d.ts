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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, UserDataInfo, GSTDetailsData, Prices, PlatformItem, BagUnit, PaymentModeInfo, ShipmentItemFulFillingStore, ShipmentStatus, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, ShipmentPayments, BagStateMapper, BagStatusHistory, TrackingList, ShipmentStatusData, UserDetailsData, DPDetailsData, ItemCriterias, BuyRules, DiscountRules, AppliedPromos, BagConfigs, Identifier, FinancialBreakup, PlatformDeliveryAddress, OrderBrandName, BagGST, OrderBagArticle, OrderBags, OrderDetailsData, FulfillingStore, ShipmentInfoResponse, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, DateRange, ManifestFilter, GeneratedManifestItem, ManifestPage, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, ArticleDetails, Dates, B2BPODetails, BagMeta, BagReturnableCancelableStatus, EInvoicePortalDetails, Document, StoreDocuments, StoreEwaybill, StoreEinvoice, StoreGstCredentials, StoreMeta, StoreAddress, Store, AffiliateMeta, AffiliateBagDetails, PDFLinks, EInvoice, EinvoiceInfo, Formatted, ShipmentTimeStamp, DebugInfo, BuyerDetails, LockData, ShipmentMeta, AffiliateDetails, Attributes, Item, Brand, BagGSTDetails, ReturnConfig, Weight, Dimensions, Article, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, Products, ProductsReasonsData, ProductsReasonsFilters, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateStoreIdMapping, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryStoreConfig, AffiliateInventoryConfig, AffiliateConfig, Affiliate, OrderConfig, OrderUser, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, OrderPriority, MarketPlacePdf, AffiliateBag, UserData, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, Tax, Charge, ShippingInfo, BillingInfo, TaxInfo, PaymentMethod, PaymentInfo, ProcessingDates, LineItem, Shipment, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsData, GetSearchWordsDetailResponse, GetSearchWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, GetAutocompleteWordsData, GetAutocompleteWordsResponse, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Price, Size, LimitedProductData, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, SEOData, MOQData, OwnerAppItemResponse, MetaFields, ApplicationItemSEO, ApplicationItemMOQ, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersKey, ProductFiltersValue, ProductFilters, GetCollectionQueryOptionResponse, SeoDetail, CollectionImage, CollectionBanner, CollectionSchedule, UserInfo, CollectionBadge, CollectionQuery, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, Media1, GetCollectionDetailNest, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterDetails, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, VerifiedBy, ProductDownloadItemsData, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, Media2, CategoryMappingValues, CategoryMapping, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, TaxIdentifier, ProductPublish, CustomOrder, TeaserTag, NetQuantity, Trader, ProductCreateUpdateSchemaV2, Image, ReturnConfigResponse, Logo, ProductPublished, NetQuantityResponse, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, ItemQuery, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, InventoryRequest, InventoryResponse, InventoryResponsePaginated, ReturnConfig1, ManufacturerResponse, CompanyMeta, BrandMeta, PriceMeta, QuantityBase, Quantities, WeightResponse, DimensionResponse, Trader1, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ReturnConfig2, ManufacturerResponse1, CompanyMeta1, BrandMeta1, PriceArticle, Quantity, QuantitiesArticle, ArticleStoreResponse, WeightResponse1, DimensionResponse1, Trader2, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, DepartmentIdentifier, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, SellerPhoneNumber, LocationManagerSerializer, ProductReturnConfigSerializer, LocationTimingSerializer, LocationDayWiseSerializer, UserSerializer1, GetAddressSerializer, UserSerializer2, GetCompanySerializer, InvoiceCredSerializer, InvoiceDetailsSerializer, LocationIntegrationType, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, ContactDetails, BusinessCountryInfo, Website, BusinessDetails, CompanyTaxesSerializer, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Validity, CouponAuthor, CouponDateMeta, Validation, PriceRange, UsesRemaining, UsesRestriction, PaymentAllowValue, PaymentModes, PostOrder, BulkBundleRestriction, Restrictions, CouponSchedule, DisplayMetaDict, DisplayMeta, State, CouponAction, Rule, RuleDefinition, Ownership, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, DisplayMeta1, DiscountOffer, CompareObject, ItemCriteria, DiscountRule, Ownership1, PromotionDateMeta, UserRegistered, UsesRemaining1, UsesRestriction1, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, Restrictions1, PromotionSchedule, PromotionAuthor, Visibility, PromotionAction, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, ProductPrice, ProductPriceInfo, CartProductIdentifer, Ownership2, AppliedPromotion, PromoMeta, ProductImage, CategoryInfo, ActionQuery, ProductAction, BaseInfo, CartProduct, BasePrice, ArticlePriceInfo, ProductArticle, ProductAvailability, CartProductInfo, CouponBreakup, LoyaltyPoints, DisplayBreakup, RawBreakup, CartBreakup, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    aggregators?: any[];
    success: boolean;
    created: boolean;
    excluded_fields: string[];
    display_fields: string[];
};
type ErrorCodeDescription = {
    code: string;
    description: string;
    success: boolean;
};
type PaymentGatewayConfig = {
    config_type: string;
    secret: string;
    is_active?: boolean;
    key: string;
    merchant_salt: string;
};
type PaymentGatewayConfigRequest = {
    app_id: string;
    is_active?: boolean;
    aggregator_name?: PaymentGatewayConfig;
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
    success: boolean;
    error: ErrorCodeAndDescription;
};
type PaymentModeLogo = {
    large: string;
    small: string;
};
type IntentApp = {
    code?: string;
    package_name?: string;
    display_name?: string;
    logos?: PaymentModeLogo;
};
type IntentAppErrorList = {
    code?: string;
    package_name?: string;
};
type PaymentModeList = {
    intent_app?: IntentApp[];
    remaining_limit?: number;
    exp_month?: number;
    exp_year?: number;
    intent_app_error_dict_list?: IntentAppErrorList[];
    card_id?: string;
    code?: string;
    card_isin?: string;
    card_type?: string;
    nickname?: string;
    logo_url?: PaymentModeLogo;
    cod_limit_per_order?: number;
    card_reference?: string;
    name?: string;
    expired?: boolean;
    retry_count?: number;
    cod_limit?: number;
    card_name?: string;
    card_brand_image?: string;
    fynd_vpa?: string;
    intent_app_error_list?: string[];
    display_priority?: number;
    card_token?: string;
    display_name?: string;
    card_number?: string;
    card_brand?: string;
    merchant_code?: string;
    card_fingerprint?: string;
    aggregator_name: string;
    timeout?: number;
    compliant_with_tokenisation_guidelines?: boolean;
    intent_flow?: boolean;
    card_issuer?: string;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    name: string;
    save_card?: boolean;
    list?: PaymentModeList[];
    aggregator_name?: string;
    display_priority: number;
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
type PayoutsResponse = {
    payouts_aggregators: any[];
    is_active: boolean;
    customers: any;
    transfer_type: string;
    unique_transfer_no: any;
    more_attributes: any;
    is_default: boolean;
};
type PayoutBankDetails = {
    bank_name?: string;
    branch_name?: string;
    state?: string;
    ifsc_code: string;
    account_no?: string;
    pincode?: number;
    country?: string;
    city?: string;
    account_holder?: string;
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
    bank_details: any;
    aggregator: string;
    is_active: boolean;
    success: boolean;
    created: boolean;
    payouts: any;
    transfer_type: string;
    unique_transfer_no: string;
    users: any;
    payment_status: string;
};
type UpdatePayoutResponse = {
    is_active: boolean;
    success: boolean;
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
    aggregator: string;
    config: any;
    success: boolean;
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
    is_verified_flag?: boolean;
    success: boolean;
    data?: any;
};
type NotFoundResourceError = {
    code: string;
    description: string;
    success: boolean;
};
type BankDetailsForOTP = {
    bank_name: string;
    branch_name: string;
    ifsc_code: string;
    account_no: string;
    account_holder: string;
};
type AddBeneficiaryDetailsOTPRequest = {
    order_id: string;
    details: BankDetailsForOTP;
};
type IfscCodeResponse = {
    bank_name: string;
    success?: boolean;
    branch_name: string;
};
type OrderBeneficiaryDetails = {
    email: string;
    subtitle: string;
    delights_user_name?: string;
    branch_name?: string;
    id: number;
    is_active: boolean;
    ifsc_code: string;
    transfer_mode: string;
    bank_name: string;
    account_no: string;
    modified_on: string;
    account_holder: string;
    title: string;
    display_name: string;
    created_on: string;
    beneficiary_id: string;
    address: string;
    mobile?: string;
    comment?: string;
};
type OrderBeneficiaryResponse = {
    show_beneficiary_details?: boolean;
    beneficiaries?: OrderBeneficiaryDetails[];
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    order_id?: string;
    payment_id?: string;
    current_status?: string;
    payment_gateway?: string;
};
type MultiTenderPaymentMethod = {
    meta?: MultiTenderPaymentMeta;
    mode: string;
    name?: string;
    amount: number;
};
type PaymentConfirmationRequest = {
    payment_methods: MultiTenderPaymentMethod[];
    order_id: string;
};
type PaymentConfirmationResponse = {
    message: string;
    success: boolean;
    order_id: string;
};
type CODdata = {
    user_id: string;
    limit: number;
    is_active: boolean;
    remaining_limit: number;
    usages: number;
};
type GetUserCODLimitResponse = {
    success: boolean;
    user_cod_data: CODdata;
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
    uid?: number;
    avis_user_id?: string;
    email?: string;
    last_name?: string;
    name?: string;
    is_anonymous_user?: boolean;
    gender?: string;
    first_name?: string;
    mobile?: string;
};
type GSTDetailsData = {
    brand_calculated_amount: number;
    value_of_good: number;
    gstin_code: string;
    tax_collected_at_source: number;
    gst_fee: number;
};
type Prices = {
    discount?: number;
    cod_charges?: number;
    refund_credit?: number;
    delivery_charge?: number;
    cashback_applied?: number;
    amount_paid?: number;
    tax_collected_at_source?: number;
    price_effective?: number;
    value_of_good?: number;
    refund_amount?: number;
    amount_paid_roundoff?: number;
    fynd_credits?: number;
    coupon_value?: number;
    cashback?: number;
    price_marked?: number;
    promotion_effective_discount?: number;
};
type PlatformItem = {
    department_id?: number;
    code?: string;
    image?: string[];
    l1_category?: string[];
    color?: string;
    name?: string;
    id?: number;
    l3_category?: number;
    size?: string;
    images?: string[];
    can_return?: boolean;
    l3_category_name?: string;
    can_cancel?: boolean;
};
type BagUnit = {
    item_quantity: number;
    ordering_channel: string;
    shipment_id: string;
    total_shipment_bags: number;
    status: any;
    gst?: GSTDetailsData;
    prices?: Prices;
    bag_id: number;
    item?: PlatformItem;
    can_return?: boolean;
    can_cancel?: boolean;
};
type PaymentModeInfo = {
    type: string;
    logo: string;
};
type ShipmentItemFulFillingStore = {
    id: string;
    code: string;
};
type ShipmentStatus = {
    ops_status: string;
    actual_status: string;
    title: string;
    status: string;
    hex_code: string;
};
type ShipmentItem = {
    sla?: any;
    total_bags_count: number;
    payment_methods?: any;
    created_at: string;
    user?: UserDataInfo;
    bags?: BagUnit[];
    payment_mode_info?: PaymentModeInfo;
    prices?: Prices;
    id: string;
    fulfilling_store?: ShipmentItemFulFillingStore;
    shipment_status?: ShipmentStatus;
    application?: any;
    shipment_created_at: number;
    fulfilling_centre: string;
    total_shipments_in_order: number;
    channel?: any;
};
type FilterInfoOption = {
    value?: string;
    name?: string;
    text: string;
};
type FiltersInfo = {
    value: string;
    type: string;
    options?: FilterInfoOption[];
    text: string;
};
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    applied_filters?: any;
    page?: any;
    filters?: FiltersInfo[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type ShipmentPayments = {
    mode: string;
    source?: string;
    logo?: string;
};
type BagStateMapper = {
    notify_customer?: boolean;
    app_facing?: boolean;
    journey_type: string;
    app_state_name?: string;
    name: string;
    app_display_name?: string;
    is_active?: boolean;
    state_type: string;
    display_name: string;
    bs_id: number;
};
type BagStatusHistory = {
    forward?: boolean;
    bag_state_mapper: BagStateMapper;
    created_at: string;
    shipment_id: string;
    delivery_awb_number?: string;
    kafka_sync?: boolean;
    reasons?: any[];
    app_display_name?: boolean;
    updated_at?: string;
    store_id: number;
    bsh_id: number;
    status: string;
    bag_id: number;
    state_type?: string;
    display_name?: boolean;
    delivery_partner_id?: number;
    state_id: number;
};
type TrackingList = {
    time?: string;
    status: string;
    text: string;
    is_current?: boolean;
    is_passed?: boolean;
};
type ShipmentStatusData = {
    created_at?: string;
    shipment_id?: string;
    bag_list?: number[];
    status?: string;
    id?: number;
};
type UserDetailsData = {
    city: string;
    phone: string;
    pincode: string;
    email: string;
    name: string;
    address: string;
    state: string;
    country: string;
};
type DPDetailsData = {
    eway_bill_id?: string;
    track_url?: string;
    pincode?: string;
    name?: string;
    gst_tag?: string;
    id?: string;
    country?: string;
    awb_no?: string;
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
    promotion_name?: string;
    amount?: number;
    buy_rules?: BuyRules[];
    promo_id?: string;
    discount_rules?: DiscountRules[];
    mrp_promotion?: boolean;
    article_quantity?: number;
    promotion_type?: string;
};
type BagConfigs = {
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    coupon_value: number;
    gst_fee: string;
    hsn_code: string;
    delivery_charge: number;
    transfer_price: number;
    amount_paid: number;
    price_effective: number;
    total_units: number;
    discount: number;
    refund_credit: number;
    item_name: string;
    cashback_applied: number;
    gst_tax_percentage: number;
    brand_calculated_amount: number;
    value_of_good: number;
    tax_collected_at_source?: number;
    cashback: number;
    size: string;
    promotion_effective_discount: number;
    pm_price_split: any;
    cod_charges: number;
    identifiers: Identifier;
    gst_tag: string;
    coupon_effective_discount: number;
    amount_paid_roundoff?: number;
    added_to_fynd_cash: boolean;
    fynd_credits: number;
    price_marked: number;
};
type PlatformDeliveryAddress = {
    area?: string;
    city?: string;
    phone?: string;
    created_at?: string;
    address_category?: string;
    pincode?: string;
    landmark?: string;
    longitude?: number;
    email?: string;
    latitude?: number;
    address2?: string;
    updated_at?: string;
    address1?: string;
    contact_person?: string;
    address_type?: string;
    state?: string;
    country?: string;
    version?: string;
};
type OrderBrandName = {
    company: string;
    modified_on?: number;
    id: number;
    brand_name: string;
    created_on: number;
    logo: string;
};
type BagGST = {
    is_default_hsn_code?: boolean;
    gst_tax_percentage?: number;
    gst_tag?: string;
    brand_calculated_amount?: number;
    value_of_good?: number;
    gstin_code?: string;
    gst_fee?: number;
    hsn_code?: string;
};
type OrderBagArticle = {
    uid?: string;
    return_config?: any;
    identifiers?: any;
};
type OrderBags = {
    identifier?: string;
    prices?: Prices;
    display_name?: string;
    can_cancel?: boolean;
    quantity?: number;
    parent_promo_bags?: any;
    applied_promos?: AppliedPromos[];
    bag_configs?: BagConfigs;
    current_status?: string;
    financial_breakup?: FinancialBreakup[];
    delivery_address?: PlatformDeliveryAddress;
    seller_identifier?: string;
    item?: PlatformItem;
    brand?: OrderBrandName;
    gst_details?: BagGST;
    entity_type?: string;
    line_number?: number;
    bag_id: number;
    can_return?: boolean;
    article?: OrderBagArticle;
};
type OrderDetailsData = {
    cod_charges?: string;
    ordering_channel?: string;
    ordering_channel_logo?: any;
    order_value?: string;
    source?: string;
    fynd_order_id: string;
    order_date?: string;
    tax_details?: any;
    affiliate_id?: string;
};
type FulfillingStore = {
    code: string;
    phone: string;
    store_name: string;
    city: string;
    pincode: string;
    address: string;
    contact_person: string;
    id: string;
    meta: any;
    country: string;
    state: string;
    fulfillment_channel: string;
};
type ShipmentInfoResponse = {
    payments?: ShipmentPayments;
    bag_status_history?: BagStatusHistory[];
    fyndstore_emp: any;
    tracking_list?: TrackingList[];
    payment_mode?: string;
    lock_status: string;
    items: any[];
    vertical?: string;
    operational_status?: string;
    delivery_slot?: any;
    prices?: Prices;
    status?: ShipmentStatusData;
    delivery_details?: UserDetailsData;
    journey_type?: string;
    ordering_store: any;
    is_packaging_order: boolean;
    secured_delivery_flag?: string;
    coupon?: any;
    can_cancel?: boolean;
    enable_tracking?: boolean;
    is_fynd_coupon: boolean;
    go_green?: boolean;
    shipment_id: string;
    due_date?: string;
    company: any;
    is_not_fynd_source: boolean;
    pay_button?: string;
    order_type: string;
    current_shipment_status: any;
    shipment_status?: string;
    tracking_url: string;
    user_info?: any;
    bank_data?: any;
    dp_details?: DPDetailsData;
    delivery_status: any[];
    refund_details?: any;
    picked_date?: string;
    forward_order_status?: any[];
    enable_dp_tracking?: string;
    shipment_quantity?: number;
    billing_details?: UserDetailsData;
    bags?: OrderBags[];
    packaging_type?: string;
    email_id: string;
    total_bags?: number;
    credit_note_id: string;
    is_invoiced: boolean;
    custom_meta?: any[];
    can_break: string;
    forward_shipment_status?: any[];
    affiliate_shipment_id: string;
    status_progress: number;
    is_fynd_store?: string;
    escalation?: any;
    order_status: any;
    user_id: string;
    total_items?: number;
    gst_details?: GSTDetailsData;
    child_nodes?: string[];
    replacement_details?: string;
    kirana_store_id?: string;
    priority_text?: string;
    is_pdsr?: string;
    order_created_time?: string;
    order?: OrderDetailsData;
    fulfilling_store?: FulfillingStore;
    invoice: any;
    mid?: string;
    platform_logo: boolean;
    beneficiary_details?: boolean;
    can_return?: boolean;
    refund_text?: string;
    user_agent?: string;
    shipment_images?: string[];
    forward_tracking_list?: any[];
};
type OrderDict = {
    prices?: Prices;
    order_date: string;
    fynd_order_id: string;
    shipment_count: number;
};
type PlatformShipment = {
    payments?: ShipmentPayments;
    bag_status_history?: BagStatusHistory[];
    tracking_list?: TrackingList[];
    payment_mode?: string;
    vertical?: string;
    operational_status?: string;
    delivery_slot?: any;
    prices?: Prices;
    status?: ShipmentStatusData;
    delivery_details?: UserDetailsData;
    journey_type?: string;
    coupon?: any;
    shipment_id: string;
    shipment_status?: string;
    dp_details?: DPDetailsData;
    picked_date?: string;
    enable_dp_tracking?: string;
    shipment_quantity?: number;
    billing_details?: UserDetailsData;
    bags?: OrderBags[];
    packaging_type?: string;
    total_bags?: number;
    custom_meta?: any[];
    total_items?: number;
    gst_details?: GSTDetailsData;
    priority_text?: string;
    order?: OrderDetailsData;
    fulfilling_store?: FulfillingStore;
    platform_logo?: string;
    user_agent?: string;
    shipment_images?: string[];
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    success: boolean;
    custom_meta?: any[];
    shipments?: PlatformShipment[];
};
type SubLane = {
    actions?: any[];
    total_items?: number;
    text?: string;
    value?: string;
    index?: number;
};
type SuperLane = {
    value: string;
    total_items?: number;
    options?: SubLane[];
    text: string;
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
    payment_mode?: string;
    order_value?: number;
    total_order_value?: number;
    shipments?: PlatformShipment[];
    meta?: any;
    order_created_time?: string;
    order_id?: string;
    user_info?: UserDataInfo;
    breakup_values?: PlatformBreakupValues[];
    channel?: PlatformChannel;
};
type OrderListingResponse = {
    items?: PlatformOrderItems[];
    message?: string;
    page?: Page;
    success?: boolean;
    total_count?: number;
    lane?: string;
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
    updated_time?: string;
    awb?: string;
    reason?: string;
    shipment_type?: string;
    updated_at?: string;
    status?: string;
    raw_status?: string;
    meta?: any;
    account_name?: string;
    last_location_recieved_at?: string;
};
type PlatformShipmentTrack = {
    meta?: any;
    results?: PlatformTrack[];
};
type FiltersResponse = {
    advance?: any[];
};
type Success = {
    success?: boolean;
    message?: string;
};
type OmsReports = {
    report_requested_at?: string;
    report_type?: string;
    report_created_at?: string;
    report_id?: string;
    request_details?: any;
    status?: string;
    report_name?: string;
    s3_key?: string;
    display_name?: string;
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
    value?: string;
    type?: string;
    message?: string;
};
type JioCodeUpsertResponse = {
    error?: NestedErrorSchemaDataSet[];
    trace_id?: string;
    identifier?: string;
    success?: boolean;
    data?: any[];
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    invoice_status?: string;
    batch_id: string;
    store_name?: string;
    company_id?: string;
    store_code?: string;
    do_invoice_label_generated: boolean;
    store_id?: string;
    label?: any;
    invoice?: any;
    data?: any;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type URL = {
    url?: string;
};
type FileResponse = {
    content_type?: string;
    file_path?: string;
    tags?: string[];
    upload?: FileUploadResponse;
    method?: string;
    operation?: string;
    cdn?: URL;
    file_name?: string;
    namespace?: string;
    size?: number;
};
type BulkListingPage = {
    has_previous?: boolean;
    current?: number;
    has_next?: boolean;
    type?: string;
    total?: number;
    size?: number;
};
type bulkListingData = {
    processing?: number;
    successful?: number;
    status?: string;
    file_name?: string;
    batch_id?: string;
    store_name?: string;
    store_code?: string;
    processing_shipments?: string[];
    company_id?: number;
    failed_shipments?: any[];
    user_name?: string;
    excel_url?: string;
    id?: string;
    successful_shipments?: any[];
    user_id?: string;
    failed?: number;
    store_id?: number;
    total?: number;
    uploaded_on?: string;
};
type BulkListingResponse = {
    page?: BulkListingPage;
    success?: boolean;
    data?: bulkListingData[];
    error?: string;
};
type DateRange = {
    from_date?: string;
    to_date?: string;
};
type ManifestFilter = {
    dp_name?: string;
    store_name?: string;
    sales_channel_name?: string;
    stores?: string;
    date_range?: DateRange;
    dp_ids?: string;
    sales_channels?: string;
    lane?: string;
};
type GeneratedManifestItem = {
    company_id?: number;
    created_at?: string;
    is_active?: boolean;
    created_by?: string;
    status?: string;
    manifest_id?: string;
    filters?: ManifestFilter;
};
type ManifestPage = {
    has_previous?: boolean;
    current?: string;
    has_next?: boolean;
    type?: string;
    total?: number;
    size?: string;
};
type GeneratedManifestResponse = {
    items?: GeneratedManifestItem[];
    page?: ManifestPage;
};
type ManifestDetailItem = {
    shipment_id?: string;
    awb?: string;
    invoice_id?: string;
    order_id?: string;
    item_qty?: number;
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
    uid?: number;
    company_id?: number;
    created_at?: string;
    user_id?: number;
    is_active?: boolean;
    created_by?: string;
    meta?: ManifestDetailMeta;
    status?: string;
    id?: number;
    manifest_id?: string;
    filters?: ManifestFilter;
};
type ManifestDetailResponse = {
    items?: ManifestDetailItem[];
    page?: ManifestPage;
    additional_shipment_count?: number;
    manifest_details?: ManifestDetail[];
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    id?: number;
    question_set?: QuestionSet[];
    qc_type?: string[];
    display_name?: string;
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
    batch_id?: string;
    total_shipments_count?: number;
    company_id?: string;
    successful_shipment_ids?: string[];
    successful_shipments_count?: number;
    processing_shipments_count?: number;
    failed_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    error?: string[];
    user_id?: string;
    status?: boolean;
    failed_records?: string[];
    message?: string;
    uploaded_by?: string;
    uploaded_on?: string;
    success?: string;
    data?: BulkActionDetailsDataField[];
};
type ArticleDetails = {
    status?: any;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type B2BPODetails = {
    docker_number?: string;
    po_line_amount?: number;
    item_base_price?: number;
    partial_can_ret?: boolean;
    total_gst_percentage?: number;
    po_tax_amount?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    can_be_cancelled: boolean;
    is_customer_return_allowed: boolean;
    is_active: boolean;
    is_returnable: boolean;
};
type EInvoicePortalDetails = {
    user?: string;
    username?: string;
    password?: string;
};
type Document = {
    url?: string;
    legal_name: string;
    verified: boolean;
    value: string;
    ds_type: string;
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
type StoreMeta = {
    einvoice_portal_details?: EInvoicePortalDetails;
    ewaybill_portal_details?: any;
    documents?: StoreDocuments;
    additional_contact_details?: any;
    notification_emails?: string[];
    stage: string;
    timing?: any[];
    gst_credentials: StoreGstCredentials;
    product_return_config?: any;
    display_name: string;
    gst_number?: string;
};
type StoreAddress = {
    address_category: string;
    created_at: string;
    email?: string;
    address2?: string;
    contact_person: string;
    address1: string;
    country_code: string;
    city: string;
    pincode: number;
    updated_at: string;
    address_type: string;
    area?: string;
    state: string;
    landmark?: string;
    longitude: number;
    latitude: number;
    country: string;
    phone: string;
    version?: string;
};
type Store = {
    code?: string;
    created_at: string;
    store_active_from?: string;
    alohomora_user_id?: number;
    mall_area?: string;
    order_integration_id?: string;
    address2?: string;
    contact_person: string;
    address1: string;
    meta: StoreMeta;
    packaging_material_count?: number;
    city: string;
    parent_store_id?: number;
    pincode: string;
    is_enabled_for_recon?: boolean;
    is_active?: boolean;
    updated_at?: string;
    state: string;
    brand_id?: any;
    company_id: number;
    vat_no?: string;
    location_type: string;
    longitude: number;
    name: string;
    latitude: number;
    store_email: string;
    login_username: string;
    country: string;
    brand_store_tags?: string[];
    store_address_json?: StoreAddress;
    s_id: string;
    is_archived?: boolean;
    phone: number;
    mall_name?: string;
    fulfillment_channel: string;
};
type AffiliateMeta = {
    loyalty_discount?: number;
    channel_order_id?: string;
    channel_shipment_id?: string;
    quantity?: number;
    due_date?: string;
    is_priority?: boolean;
    size_level_total_qty?: number;
    box_type?: string;
    coupon_code?: string;
    employee_discount?: number;
    order_item_id?: string;
};
type AffiliateBagDetails = {
    affiliate_order_id: string;
    loyalty_discount?: number;
    affiliate_bag_id: string;
    employee_discount?: number;
    affiliate_meta: AffiliateMeta;
};
type PDFLinks = {
    invoice_a4?: string;
    b2b?: string;
    invoice_a6?: string;
    invoice_pos?: string;
    label_a4?: string;
    label_a6?: string;
    label_pos?: string;
    label?: string;
    invoice?: string;
    label_type: string;
    invoice_type: string;
    po_invoice?: string;
    credit_note_url?: string;
};
type EInvoice = {
    irn?: string;
    error_message?: string;
    acknowledge_no?: number;
    error_code?: string;
    signed_invoice?: string;
    signed_qr_code?: string;
    acknowledge_date?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentTimeStamp = {
    t_max?: string;
    t_min?: string;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type BuyerDetails = {
    gstin: string;
    city: string;
    pincode: number;
    name: string;
    address: string;
    ajio_site_id?: string;
    state: string;
};
type LockData = {
    lock_message?: string;
    mto?: boolean;
    locked?: boolean;
};
type ShipmentMeta = {
    dp_sort_key?: string;
    assign_dp_from_sb?: boolean;
    dp_name?: string;
    return_affiliate_order_id?: string;
    box_type?: string;
    b2c_buyer_details?: any;
    shipment_weight?: number;
    return_details?: any;
    forward_affiliate_order_id?: string;
    due_date?: string;
    einvoice_info?: EinvoiceInfo;
    shipment_volumetric_weight?: number;
    order_type?: string;
    fulfilment_priority_text?: string;
    return_affiliate_shipment_id?: string;
    dp_id?: string;
    weight: number;
    store_invoice_updated_date?: string;
    dp_options?: any;
    same_store_available: boolean;
    auto_trigger_dp_assignment_acf: boolean;
    ewaybill_info?: any;
    return_store_node?: number;
    po_number?: string;
    formatted?: Formatted;
    bag_weight?: any;
    timestamp?: ShipmentTimeStamp;
    debug_info?: DebugInfo;
    forward_affiliate_shipment_id?: string;
    b2b_buyer_details?: BuyerDetails;
    awb_number?: string;
    return_awb_number?: string;
    marketplace_store_id?: string;
    external?: any;
    packaging_name?: string;
    lock_data?: LockData;
};
type AffiliateDetails = {
    affiliate_store_id: string;
    affiliate_order_id: string;
    ad_id?: string;
    affiliate_shipment_id: string;
    affiliate_bag_id: string;
    pdf_links?: PDFLinks;
    company_affiliate_tag?: string;
    shipment_meta: ShipmentMeta;
    affiliate_id?: string;
    affiliate_meta: AffiliateMeta;
};
type Attributes = {
    essential?: string;
    name?: string;
    marketer_address?: string;
    gender?: string[];
    primary_color?: string;
    brand_name?: string;
    marketer_name?: string;
    primary_material?: string;
    primary_color_hex?: string;
};
type Item = {
    code?: string;
    image: string[];
    l1_category?: string[];
    meta?: any;
    item_id: number;
    l3_category_name?: string;
    can_return?: boolean;
    can_cancel?: boolean;
    l2_category?: string[];
    department_id?: number;
    l2_category_id?: number;
    brand_id: number;
    webstore_product_url?: string;
    color?: string;
    name: string;
    attributes: Attributes;
    l3_category?: number;
    gender?: string;
    branch_url?: string;
    last_updated_at?: string;
    size: string;
    brand: string;
    slug_key: string;
    l1_category_id?: number;
};
type Brand = {
    brand_id: number;
    company: string;
    pickup_location?: string;
    invoice_prefix?: string;
    start_date?: string;
    is_virtual_invoice?: boolean;
    modified_on?: number;
    script_last_ran?: string;
    brand_name: string;
    created_on?: number;
    credit_note_allowed?: boolean;
    logo?: string;
    credit_note_expiry_days?: number;
};
type BagGSTDetails = {
    cgst_gst_fee: string;
    is_default_hsn_code?: boolean;
    cgst_tax_percentage: number;
    igst_gst_fee: string;
    sgst_gst_fee: string;
    gst_tax_percentage: number;
    gst_tag: string;
    brand_calculated_amount: number;
    gst_fee: number;
    value_of_good: number;
    igst_tax_percentage: number;
    sgst_tax_percentage: number;
    gstin_code?: string;
    tax_collected_at_source: number;
    hsn_code_id: string;
    hsn_code: string;
};
type ReturnConfig = {
    unit?: string;
    time?: number;
    returnable?: boolean;
};
type Weight = {
    is_default?: boolean;
    unit?: string;
    shipping?: number;
};
type Dimensions = {
    unit?: string;
    height?: number;
    length?: number;
    is_default?: boolean;
    width?: number;
};
type Article = {
    child_details?: any;
    _id: string;
    code?: string;
    uid: string;
    identifiers: Identifier;
    is_set?: boolean;
    return_config?: ReturnConfig;
    raw_meta?: any;
    weight?: Weight;
    a_set?: any;
    seller_identifier: string;
    esp_modified?: any;
    dimensions?: Dimensions;
    size: string;
};
type BagDetailsPlatformResponse = {
    article_details?: ArticleDetails;
    bag_status_history?: BagStatusHistory;
    dates?: Dates;
    order_integration_id?: string;
    operational_status?: string;
    reasons?: any[];
    bag_update_time?: number;
    identifier?: string;
    meta?: BagMeta;
    prices: Prices;
    status: BagReturnableCancelableStatus;
    qc_required?: any;
    journey_type: string;
    display_name?: string;
    ordering_store?: Store;
    affiliate_bag_details: AffiliateBagDetails;
    quantity?: number;
    shipment_id?: string;
    b_type?: string;
    restore_coupon?: boolean;
    parent_promo_bags?: any;
    applied_promos?: any[];
    b_id: number;
    bag_status: BagStatusHistory[];
    current_status: BagStatusHistory;
    financial_breakup: FinancialBreakup[];
    seller_identifier?: string;
    affiliate_details?: AffiliateDetails;
    item: Item;
    original_bag_list?: number[];
    current_operational_status: BagStatusHistory;
    no_of_bags_order?: number;
    brand: Brand;
    tags?: string[];
    gst_details: BagGSTDetails;
    restore_promos?: any;
    entity_type?: string;
    line_number?: number;
    article: Article;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    item_total: number;
    page_type: string;
    current: number;
    has_next: boolean;
    size: number;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
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
    error_trace?: string;
    message: string;
};
type StoreReassign = {
    affiliate_order_id?: string;
    bag_id?: number;
    affiliate_bag_id?: string;
    set_id?: string;
    affiliate_id?: string;
    reason_ids?: number[];
    item_id?: string;
    mongo_article_id?: string;
    store_id: number;
    fynd_order_id?: string;
};
type StoreReassignResponse = {
    success?: boolean;
    message?: string;
};
type Entities = {
    affiliate_order_id?: string;
    affiliate_bag_id?: string;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    id?: string;
    reason_text: string;
};
type UpdateShipmentLockPayload = {
    entities: Entities[];
    action: string;
    entity_type: string;
    action_type: string;
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
    is_bag_locked?: boolean;
    lock_status?: boolean;
    original_filter?: OriginalFilter;
    status?: string;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    is_shipment_locked?: boolean;
    bags?: Bags[];
    shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    check_response?: CheckResponse[];
    success?: boolean;
    message?: string;
};
type AnnouncementResponse = {
    platform_id?: string;
    from_datetime?: string;
    platform_name?: string;
    created_at?: string;
    logo_url?: string;
    to_datetime?: string;
    company_id?: number;
    title?: string;
    id: number;
    description?: string;
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
    identifier?: string;
    quantity?: number;
    line_number?: number;
};
type ProductsReasonsData = {
    reason_id?: number;
    reason_text?: string;
};
type ProductsReasonsFilters = {
    identifier?: string;
    quantity?: number;
    line_number?: number;
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
    products?: Products[];
    reasons?: ReasonsData;
    identifier: string;
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
    unlock_before_transition?: boolean;
    lock_after_transition?: boolean;
    force_transition?: boolean;
};
type ShipmentsResponse = {
    identifier?: string;
    status?: number;
    code?: string;
    message?: string;
    stack_trace?: string;
    final_state?: any;
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
    marketplace_store_id: string;
    store_id: number;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    name: string;
    owner: string;
    secret: string;
    created_at: string;
    updated_at: string;
    meta?: AffiliateAppConfigMeta[];
    token: string;
    id: string;
    description?: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    mode_of_payment?: string;
    source?: string;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    payment?: AffiliateInventoryPaymentConfig;
    order?: AffiliateInventoryOrderConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    inventory?: AffiliateInventoryStoreConfig;
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
type OrderConfig = {
    article_lookup?: string;
    store_lookup?: string;
    bag_end_state?: string;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    create_user?: boolean;
    affiliate: Affiliate;
};
type OrderUser = {
    mobile: number;
    state: string;
    address2?: string;
    country: string;
    email: string;
    pincode: string;
    phone: number;
    city: string;
    last_name: string;
    first_name: string;
    address1?: string;
};
type ArticleDetails1 = {
    category: any;
    weight: any;
    quantity: number;
    attributes: any;
    _id: string;
    brand_id: number;
    dimension: any;
};
type ShipmentDetails = {
    articles: ArticleDetails1[];
    box_type?: string;
    affiliate_shipment_id: string;
    shipments: number;
    dp_id?: number;
    meta?: any;
    fulfillment_id: number;
};
type LocationDetails = {
    articles: ArticleDetails1[];
    fulfillment_id: number;
    fulfillment_type: string;
};
type ShipmentConfig = {
    journey: string;
    identifier: string;
    shipment: ShipmentDetails[];
    to_pincode: string;
    action: string;
    payment_mode: string;
    location_details?: LocationDetails;
    source: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    fulfilment_priority?: number;
    affiliate_priority_code?: string;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    quantity: number;
    transfer_price: number;
    sku: string;
    unit_price: number;
    company_id: number;
    delivery_charge: number;
    price_effective: number;
    amount_paid: number;
    price_marked: number;
    item_size: string;
    item_id: number;
    store_id: number;
    discount: number;
    affiliate_meta: any;
    modified_on: string;
    identifier: any;
    affiliate_store_id: string;
    pdf_links?: MarketPlacePdf;
    hsn_code_id: string;
    fynd_store_id: string;
    avl_qty: number;
    seller_identifier: string;
    _id: string;
};
type UserData = {
    shipping_user?: OrderUser;
    billing_user?: OrderUser;
};
type OrderInfo = {
    affiliate_order_id?: string;
    order_value: number;
    cod_charges: number;
    billing_address: OrderUser;
    shipment?: ShipmentData;
    order_priority?: OrderPriority;
    shipping_address: OrderUser;
    delivery_charges: number;
    payment?: any;
    discount: number;
    items: any;
    payment_mode: string;
    bags: AffiliateBag[];
    coupon?: string;
    user: UserData;
};
type CreateOrderPayload = {
    order_config: OrderConfig;
    affiliate_id: string;
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
    display_text: string;
    id: number;
    slug: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    createdat: string;
    l1_detail?: string;
    bag_id?: number;
    ticket_url?: string;
    message: string;
    type: string;
    l2_detail?: string;
    ticket_id?: string;
    l3_detail?: string;
    user: string;
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
    message: string;
    country_code: string;
    phone_number: number;
    brand_name: string;
    order_id: string;
    customer_name: string;
    payment_mode: string;
    shipment_id: number;
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
    status?: string;
    bag_list?: number[];
    remarks?: string;
    meta: Meta;
    id: number;
    shipment_id?: string;
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
};
type OrderStatusData = {
    shipment_details?: ShipmentDetail[];
    errors?: string[];
    order_details: OrderDetails;
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    order_type: string;
    qc_required: string;
    dp_id: number;
    shipment_ids?: string[];
};
type ManualAssignDPToShipmentResponse = {
    success: string;
    errors?: string[];
};
type Tax = {
    rate: number;
    amount: any;
    breakup?: any[];
    name: string;
};
type Charge = {
    name: string;
    code?: string;
    type: string;
    tax?: Tax;
    amount: any;
};
type ShippingInfo = {
    house_no?: string;
    country_code?: string;
    pincode: string;
    slot?: any[];
    state_code?: string;
    customer_code?: string;
    alternate_mobile_number?: string;
    address1: string;
    external_customer_code?: string;
    floor_no?: string;
    middle_name?: string;
    state: string;
    gender?: string;
    country: string;
    address_type?: string;
    title?: string;
    primary_email: string;
    landmark?: string;
    address2?: string;
    shipping_type?: string;
    alternate_email?: string;
    primary_mobile_number: string;
    city: string;
    last_name?: string;
    geo_location?: any;
    first_name: string;
};
type BillingInfo = {
    house_no?: string;
    country_code?: string;
    pincode: string;
    state_code?: string;
    customer_code?: string;
    alternate_mobile_number?: string;
    address1: string;
    external_customer_code?: string;
    floor_no?: string;
    middle_name?: string;
    state: string;
    gender?: string;
    country: string;
    title?: string;
    primary_email: string;
    address2?: string;
    alternate_email?: string;
    primary_mobile_number: string;
    city: string;
    last_name?: string;
    first_name: string;
};
type TaxInfo = {
    gstin?: string;
    b2b_gstin_number?: string;
};
type PaymentMethod = {
    collect_by: string;
    name: string;
    refund_by: string;
    mode: string;
    transaction_data?: any;
    meta?: any;
    amount: number;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type ProcessingDates = {
    pack_by_date?: string;
    dispatch_by_date?: string;
    dispatch_after_date?: string;
    dp_pickup_slot?: any;
    confirm_by_date?: string;
    customer_pickup_slot?: any;
};
type LineItem = {
    quantity?: number;
    charges?: Charge[];
    external_line_id?: string;
    seller_identifier: string;
    meta?: any;
    custom_messasge?: string;
};
type Shipment = {
    processing_dates?: ProcessingDates;
    location_id: number;
    external_shipment_id?: string;
    priority?: number;
    meta?: any;
    line_items: LineItem[];
};
type CreateOrderAPI = {
    charges?: Charge[];
    shipping_info: ShippingInfo;
    billing_info: BillingInfo;
    currency_info?: any;
    tax_info?: TaxInfo;
    external_creation_date?: string;
    payment_info: PaymentInfo;
    shipments: Shipment[];
    external_order_id?: string;
    meta?: any;
};
type CreateOrderErrorReponse = {
    status: number;
    code?: string;
    message: string;
    stack_trace?: string;
    exception?: string;
    request_id?: string;
    meta?: string;
    info?: any;
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
    mode_of_payment?: string;
    source?: string;
};
type CreateChannelConfig = {
    shipment_assignment?: string;
    location_reassignment?: boolean;
    dp_configuration?: DpConfiguration;
    payment_info?: CreateChannelPaymentInfo;
    logo_url?: any;
    lock_states?: string[];
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
    mobile: number;
    start_date: string;
    order_details?: FyndOrderIdList[];
};
type DeleteResponse = {
    message?: string;
};
type SearchKeywordResult = {
    sort_on: string;
    query: any;
};
type CreateSearchKeyword = {
    _custom_json?: any;
    result: SearchKeywordResult;
    is_active?: boolean;
    app_id?: string;
    words?: string[];
};
type GetSearchWordsData = {
    _custom_json?: any;
    result?: any;
    is_active?: boolean;
    uid?: string;
    app_id?: string;
    words?: string[];
};
type GetSearchWordsDetailResponse = {
    items?: GetSearchWordsData;
    page?: Page;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type Media = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type AutocompletePageAction = {
    query?: any;
    url?: string;
    params?: any;
    type?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    logo?: Media;
    _custom_json?: any;
    display?: string;
    action?: AutocompleteAction;
};
type CreateAutocompleteKeyword = {
    _custom_json?: any;
    is_active?: boolean;
    app_id?: string;
    words?: string[];
    results?: AutocompleteResult[];
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    uid?: string;
    app_id?: string;
    words?: string[];
    results?: any[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type CreateAutocompleteWordsResponse = {
    _custom_json?: any;
    results?: any[];
    app_id?: string;
    words?: string[];
};
type ProductBundleItem = {
    allow_remove?: boolean;
    max_quantity: number;
    product_uid: number;
    auto_select?: boolean;
    auto_add_to_cart?: boolean;
    min_quantity: number;
};
type ProductBundleRequest = {
    name: string;
    meta?: any;
    created_by?: any;
    modified_on?: string;
    slug: string;
    choice: string;
    is_active: boolean;
    created_on?: string;
    company_id?: number;
    products: ProductBundleItem[];
    logo?: string;
    modified_by?: any;
    same_store_assignment?: boolean;
    page_visibility?: string[];
};
type GetProductBundleCreateResponse = {
    name: string;
    meta?: any;
    created_by?: any;
    modified_on?: string;
    slug: string;
    id?: string;
    choice: string;
    is_active: boolean;
    created_on?: string;
    company_id?: number;
    products: ProductBundleItem[];
    logo?: string;
    modified_by?: any;
    same_store_assignment?: boolean;
    page_visibility?: string[];
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    name: string;
    meta?: any;
    modified_on?: string;
    slug: string;
    choice: string;
    is_active: boolean;
    company_id?: number;
    products: ProductBundleItem[];
    logo?: string;
    modified_by?: any;
    same_store_assignment?: boolean;
    page_visibility?: string[];
};
type Price = {
    currency?: string;
    max_effective?: number;
    min_marked?: number;
    min_effective?: number;
    max_marked?: number;
};
type Size = {
    is_available?: boolean;
    value?: string;
    display?: string;
    quantity?: number;
};
type LimitedProductData = {
    name?: string;
    slug?: string;
    price?: any;
    short_description?: string;
    uid?: number;
    country_of_origin?: string;
    quantity?: number;
    identifier?: any;
    item_code?: string;
    sizes?: string[];
    images?: string[];
    attributes?: any;
};
type GetProducts = {
    allow_remove?: boolean;
    price?: Price;
    max_quantity?: number;
    product_uid?: number;
    auto_select?: boolean;
    sizes?: Size[];
    auto_add_to_cart?: boolean;
    min_quantity?: number;
    product_details?: LimitedProductData;
};
type GetProductBundleResponse = {
    name?: string;
    meta?: any;
    slug?: string;
    choice?: string;
    is_active?: boolean;
    products?: GetProducts[];
    company_id?: number;
    logo?: string;
    same_store_assignment?: boolean;
    page_visibility?: string[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    name: string;
    created_by?: any;
    modified_on?: string;
    title: string;
    id?: string;
    image?: string;
    created_on?: string;
    company_id?: number;
    modified_by?: any;
    description?: string;
    subtitle?: string;
    guide?: Guide;
    brand_id?: number;
    tag?: string;
    active?: boolean;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    name?: string;
    created_by?: any;
    modified_on?: string;
    title?: string;
    id?: string;
    created_on?: string;
    company_id?: number;
    modified_by?: any;
    subtitle?: string;
    guide?: any;
    brand_id?: number;
    tag?: string;
    active?: boolean;
};
type SEOData = {
    description?: any;
    title?: any;
};
type MOQData = {
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
};
type OwnerAppItemResponse = {
    alt_text?: any;
    seo?: SEOData;
    is_gift?: boolean;
    moq?: MOQData;
    is_cod?: boolean;
};
type MetaFields = {
    key: any;
    value: any;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationItemMOQ = {
    maximum?: number;
    increment_unit?: number;
    minimum?: number;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    _custom_meta?: MetaFields[];
    alt_text?: any;
    seo?: ApplicationItemSEO;
    is_gift?: boolean;
    moq?: ApplicationItemMOQ;
    is_cod?: boolean;
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
    name: string;
    display_type: string;
    slug?: string;
    is_active: boolean;
    key?: string;
    logo?: string;
    priority: number;
    unit?: string;
};
type AppConfigurationDetail = {
    name?: string;
    slug: string;
    template_slugs?: string[];
    is_active: boolean;
    app_id: string;
    logo?: string;
    priority: number;
    is_default: boolean;
    attributes?: AttributeDetailsGroup[];
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    current: number;
    has_next: boolean;
    total_count: number;
    next: number;
};
type GetConfigResponse = {
    data: any[];
    page: PageResponseType;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    name?: string;
    is_active: boolean;
    app_id: string;
    key: string;
    logo?: string;
    priority: number;
    is_default: boolean;
    default_key: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    similar?: any;
    variant?: any;
    compare?: any;
    detail?: any;
};
type MetaDataListingFilterMetaResponse = {
    key?: string;
    filter_types?: string[];
    display?: string;
    units?: any[];
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
type ProductSize = {
    min: number;
    max: number;
};
type ConfigurationProductConfig = {
    title?: string;
    is_active: boolean;
    key: string;
    logo?: string;
    size?: ProductSize;
    subtitle?: string;
    priority: number;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProductVariantConfig = {
    name: string;
    display_type: string;
    is_active: boolean;
    key: string;
    logo?: string;
    size: ProductSize;
    priority: number;
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
    display?: string;
    start?: number;
};
type ConfigurationListingFilterValue = {
    value?: string;
    sort?: string;
    map_values?: any[];
    condition?: string;
    bucket_points?: ConfigurationBucketPoints[];
    map?: any;
};
type ConfigurationListingFilterConfig = {
    name?: string;
    is_active: boolean;
    display_name?: string;
    value_config?: ConfigurationListingFilterValue;
    key: string;
    logo?: string;
    priority: number;
    type: string;
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
type AppConfiguration = {
    product?: ConfigurationProduct;
    created_by?: any;
    listing?: ConfigurationListing;
    modified_on?: string;
    config_id?: string;
    created_on?: string;
    app_id: string;
    modified_by?: any;
    type?: string;
    config_type: string;
};
type AppCatalogConfiguration = {
    product?: ConfigurationProduct;
    created_by?: any;
    listing?: ConfigurationListing;
    modified_on?: string;
    config_id?: string;
    id?: string;
    created_on?: string;
    app_id: string;
    modified_by?: any;
    type?: string;
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
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_id?: string;
    id?: string;
    app_id: string;
    config_type: string;
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
    kind?: string;
    logo?: string;
};
type ProductFiltersValue = {
    value: any;
    currency_symbol?: string;
    count?: number;
    currency_code?: string;
    min?: number;
    display: string;
    max?: number;
    selected_min?: number;
    query_format?: string;
    display_format?: string;
    selected_max?: number;
    is_selected: boolean;
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
type SeoDetail = {
    description?: string;
    title?: string;
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    landscape: CollectionImage;
    portrait: CollectionImage;
};
type CollectionSchedule = {
    duration?: number;
    end?: string;
    next_schedule?: NextSchedule[];
    cron?: string;
    start?: string;
};
type UserInfo = {
    username?: string;
    uid?: string;
    email?: string;
    user_id?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
};
type CollectionQuery = {
    value: any[];
    attribute: string;
    op: string;
};
type CreateCollection = {
    visible_facets_keys?: string[];
    _locale_language?: any;
    seo?: SeoDetail;
    name: string;
    sort_on?: string;
    allow_sort?: boolean;
    _custom_json?: any;
    slug: string;
    is_active?: boolean;
    is_visible?: boolean;
    banners: CollectionBanner;
    logo: CollectionImage;
    priority?: number;
    _schedule?: CollectionSchedule;
    created_by?: UserInfo;
    badge?: CollectionBadge;
    tags?: string[];
    app_id: string;
    modified_by?: UserInfo;
    description?: string;
    type: string;
    meta?: any;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    published?: boolean;
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
type CollectionCreateResponse = {
    visible_facets_keys?: string[];
    name?: string;
    sort_on?: string;
    allow_sort?: boolean;
    slug?: string;
    is_active?: boolean;
    banners?: ImageUrls;
    logo?: BannerImage;
    priority?: number;
    _schedule?: any;
    badge?: any;
    app_id?: string;
    description?: string;
    type?: string;
    meta?: any;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    cron?: any;
    tag?: string[];
};
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type GetCollectionDetailNest = {
    visible_facets_keys?: string[];
    uid?: string;
    name?: string;
    allow_sort?: boolean;
    slug?: string;
    is_active?: boolean;
    banners?: ImageUrls;
    logo?: Media1;
    priority?: number;
    _schedule?: any;
    badge?: any;
    app_id?: string;
    description?: string;
    type?: string;
    meta?: any;
    allow_facets?: boolean;
    action?: Action;
    query?: CollectionQuery[];
    cron?: any;
    tag?: string[];
};
type CollectionListingFilterTag = {
    name?: string;
    display?: string;
    is_selected?: boolean;
};
type CollectionListingFilterType = {
    name?: string;
    display?: string;
    is_selected?: boolean;
};
type CollectionListingFilter = {
    tags?: CollectionListingFilterTag[];
    type?: CollectionListingFilterType[];
};
type GetCollectionListingResponse = {
    items?: GetCollectionDetailNest[];
    page?: Page;
    filters?: CollectionListingFilter;
};
type CollectionDetailResponse = {
    name?: string;
    meta?: any;
    allow_sort?: boolean;
    badge?: any;
    slug?: string;
    visible_facets_keys?: string[];
    is_active?: boolean;
    type?: string;
    allow_facets?: boolean;
    app_id?: string;
    banners?: ImageUrls;
    logo?: Media1;
    description?: string;
    query?: CollectionQuery[];
    priority?: number;
    cron?: any;
    tag?: string[];
    _schedule?: any;
};
type UpdateCollection = {
    visible_facets_keys?: string[];
    _locale_language?: any;
    seo?: SeoDetail;
    name?: string;
    sort_on?: string;
    allow_sort?: boolean;
    _custom_json?: any;
    slug?: string;
    is_active?: boolean;
    is_visible?: boolean;
    banners?: CollectionBanner;
    logo?: CollectionImage;
    priority?: number;
    _schedule?: CollectionSchedule;
    badge?: CollectionBadge;
    tags?: string[];
    modified_by?: UserInfo;
    description?: string;
    type?: string;
    meta?: any;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    published?: boolean;
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
    message?: string;
    items_not_updated?: number[];
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
    name?: string;
    logo?: Media1;
    uid?: number;
    action?: Action;
};
type Price1 = {
    min?: number;
    currency_symbol?: string;
    max?: number;
    currency_code?: string;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
};
type ProductListingDetail = {
    uid?: number;
    promo_meta?: any;
    rating_count?: number;
    attributes?: any;
    medias?: Media1[];
    rating?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    name?: string;
    slug: string;
    highlights?: string[];
    sellable?: boolean;
    has_variant?: boolean;
    brand?: ProductBrand;
    price?: ProductListingPrice;
    short_description?: string;
    color?: string;
    description?: string;
    discount?: string;
    product_online_date?: string;
    type?: string;
    item_type?: string;
    image_nature?: string;
    teaser_tag?: any;
    tryouts?: string[];
    item_code?: string;
    similars?: string[];
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    sort_on?: ProductSortOn[];
    page?: Page;
    filters?: ProductFilters[];
};
type CatalogInsightBrand = {
    name?: string;
    total_articles?: number;
    article_freshness?: number;
    available_articles?: number;
    available_sizes?: number;
    total_sizes?: number;
};
type CatalogInsightItem = {
    sellable_count?: number;
    out_of_stock_count?: number;
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
    data?: CrossSellingData;
    brand_distribution?: CatalogInsightBrand;
};
type OptInPostRequest = {
    enabled?: boolean;
    store_ids?: number[];
    brand_ids?: number[];
    company_id?: number;
    platform?: string;
    opt_level: string;
};
type CompanyOptIn = {
    created_by?: any;
    store_ids: number[];
    enabled: boolean;
    modified_on: number;
    brand_ids: number[];
    company_id: number;
    created_on: number;
    platform: string;
    modified_by?: any;
    opt_level: string;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    name?: string;
    business_type?: string;
    uid?: number;
    company_type?: string;
};
type CompanyBrandDetail = {
    brand_id?: number;
    brand_name?: string;
    total_article?: number;
    company_id?: number;
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
    name?: string;
    modified_on?: string;
    timing?: any;
    store_type?: string;
    documents?: any[];
    uid?: number;
    created_on?: string;
    store_code?: string;
    display_name?: string;
    company_id?: number;
    manager?: any;
    additional_contacts?: any[];
    address?: any;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterMandatoryDetails = {
    l3_keys?: string[];
};
type AttributeMasterMeta = {
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type AttributeSchemaRange = {
    min?: number;
    max?: number;
};
type AttributeMaster = {
    multi?: boolean;
    range?: AttributeSchemaRange;
    allowed_values?: string[];
    mandatory?: boolean;
    type: string;
    format?: string;
};
type AttributeMasterFilter = {
    depends_on?: string[];
    indexing: boolean;
    priority?: number;
};
type AttributeMasterDetails = {
    display_type: string;
};
type GenderDetail = {
    meta?: AttributeMasterMeta;
    name?: string;
    slug?: string;
    enabled_for_end_consumer?: boolean;
    id?: string;
    is_nested?: boolean;
    schema?: AttributeMaster;
    logo?: string;
    description?: string;
    departments?: string[];
    filters?: AttributeMasterFilter;
    details?: AttributeMasterDetails;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    meta?: any;
    status?: number;
    errors?: any;
    code?: string;
};
type DepartmentCreateUpdate = {
    name: string;
    _custom_json?: any;
    platforms?: any;
    slug?: string;
    priority_order: number;
    is_active?: boolean;
    uid?: number;
    _cls?: string;
    tags?: string[];
    logo: string;
    synonyms?: string[];
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
    username?: string;
    user_id?: string;
    uid?: string;
    _id?: string;
};
type GetDepartment = {
    name?: string;
    created_by?: UserSerializer;
    modified_on?: string;
    slug?: string;
    item_type?: string;
    priority_order?: number;
    is_active?: boolean;
    uid?: number;
    search?: string;
    created_on?: string;
    logo?: string;
    modified_by?: UserSerializer;
    page_size?: number;
    page_no?: number;
    synonyms?: string[];
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    meta?: any;
    status?: number;
    errors?: any;
    code?: string;
};
type UserDetail = {
    contact?: string;
    username: string;
    super_user?: boolean;
    user_id: string;
};
type DepartmentModel = {
    name: any;
    _custom_json?: any;
    created_by?: UserDetail;
    modified_on: string;
    slug?: any;
    priority_order: number;
    is_active?: boolean;
    uid?: number;
    _cls?: any;
    created_on: string;
    logo: string;
    modified_by?: UserDetail;
    verified_by?: UserDetail;
    _id?: any;
    synonyms?: any[];
    verified_on?: string;
};
type ProductTemplate = {
    name?: string;
    created_by?: any;
    is_archived?: boolean;
    modified_on?: string;
    slug: string;
    is_expirable: boolean;
    is_active?: boolean;
    created_on?: string;
    logo?: string;
    is_physical: boolean;
    description?: string;
    modified_by?: any;
    departments?: string[];
    tag?: string;
    attributes?: string[];
    categories?: string[];
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    name?: string;
    is_archived?: boolean;
    slug: string;
    is_expirable: boolean;
    id?: string;
    is_active?: boolean;
    logo?: string;
    is_physical: boolean;
    description?: string;
    departments?: string[];
    tag?: string;
    attributes?: string[];
    categories?: string[];
};
type Properties = {
    category_slug?: any;
    command?: any;
    is_dependent?: any;
    no_of_boxes?: any;
    product_group_tag?: any;
    trader_type?: any;
    return_config?: any;
    name?: any;
    hsn_code?: any;
    slug?: any;
    variants?: any;
    multi_size?: any;
    is_active?: any;
    country_of_origin?: any;
    highlights?: any;
    short_description?: any;
    tags?: any;
    product_publish?: any;
    description?: any;
    sizes?: any;
    custom_order?: any;
    media?: any;
    item_type?: any;
    brand_uid?: any;
    currency?: any;
    teaser_tag?: any;
    size_guide?: any;
    item_code?: any;
    trader?: any;
};
type GlobalValidation = {
    required?: string[];
    properties?: Properties;
    title?: string;
    description?: string;
    type?: string;
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
    hsn_code?: string[];
    country_of_origin?: string[];
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type VerifiedBy = {
    username?: string;
    user_id?: string;
};
type ProductDownloadItemsData = {
    templates?: string[];
    brand?: string[];
    type?: string;
};
type ProductDownloadsItems = {
    created_by?: VerifiedBy;
    status?: string;
    seller_id?: number;
    completed_on?: string;
    id?: string;
    trigger_on?: string;
    url?: string;
    data?: ProductDownloadItemsData;
    template_tags?: any;
    task_id?: string;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    data?: any[];
    multivalue?: boolean;
};
type Hierarchy = {
    l2: number;
    l1: number;
    department: number;
};
type Media2 = {
    logo: string;
    landscape: string;
    portrait: string;
};
type CategoryMappingValues = {
    name: string;
    catalog_id?: number;
};
type CategoryMapping = {
    google?: CategoryMappingValues;
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
};
type CategoryRequestBody = {
    name: string;
    slug?: string;
    is_active: boolean;
    tryouts?: string[];
    level: number;
    hierarchy?: Hierarchy[];
    departments: number[];
    priority?: number;
    media?: Media2;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    name: string;
    created_by?: any;
    modified_on?: string;
    slug?: string;
    id?: string;
    is_active: boolean;
    uid?: number;
    tryouts?: string[];
    created_on?: string;
    level: number;
    modified_by?: any;
    hierarchy?: Hierarchy[];
    departments: number[];
    priority?: number;
    media?: Media2;
    synonyms?: string[];
    marketplaces?: CategoryMapping;
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
type TaxIdentifier = {
    hsn_code_id?: string;
    hsn_code?: string;
    reporting_hsn?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type NetQuantity = {
    value?: number;
    unit?: any;
};
type Trader = {
    name: any;
    address?: string[];
    type?: string;
};
type ProductCreateUpdateSchemaV2 = {
    category_slug: string;
    uid?: number;
    is_dependent?: boolean;
    no_of_boxes?: number;
    product_group_tag?: string[];
    requester?: string;
    departments: number[];
    tax_identifier: TaxIdentifier;
    is_set?: boolean;
    return_config: ReturnConfig;
    attributes?: any;
    name: string;
    _custom_json?: any;
    change_request_id?: any;
    slug: string;
    variant_group?: any;
    variants?: any;
    is_active?: boolean;
    multi_size?: boolean;
    country_of_origin: string;
    company_id: number;
    highlights?: string[];
    variant_media?: any;
    short_description?: string;
    tags?: string[];
    product_publish?: ProductPublish;
    description?: string;
    sizes: any[];
    custom_order?: CustomOrder;
    media?: Media1[];
    item_type: string;
    brand_uid: number;
    is_image_less_product?: boolean;
    currency: string;
    template_tag: string;
    teaser_tag?: TeaserTag;
    action?: string;
    size_guide?: string;
    bulk_job_id?: string;
    net_quantity?: NetQuantity;
    item_code: string;
    trader: Trader[];
};
type Image = {
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type ReturnConfigResponse = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Logo = {
    aspect_ratio?: string;
    url?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type Product = {
    modified_on?: string;
    category_slug?: string;
    uid?: number;
    category_uid?: number;
    is_dependent?: boolean;
    no_of_boxes?: number;
    product_group_tag?: string[];
    stage?: string;
    departments?: number[];
    is_set?: boolean;
    tax_identifier?: any;
    images?: Image[];
    return_config?: ReturnConfigResponse;
    attributes?: any;
    name?: string;
    _custom_json?: any;
    all_company_ids?: number[];
    hsn_code?: string;
    slug?: string;
    variants?: any;
    id?: string;
    variant_group?: any;
    primary_color?: string;
    multi_size?: boolean;
    is_active?: boolean;
    country_of_origin?: string;
    company_id?: number;
    highlights?: string[];
    all_identifiers?: string[];
    verified_by?: VerifiedBy;
    variant_media?: any;
    moq?: any;
    brand?: Brand;
    created_by?: any;
    short_description?: string;
    color?: string;
    tags?: string[];
    product_publish?: ProductPublished;
    description?: string;
    is_physical?: boolean;
    modified_by?: any;
    sizes?: any[];
    custom_order?: any;
    media?: Media1[];
    item_type?: string;
    verified_on?: string;
    l3_mapping?: string[];
    image_nature?: string;
    brand_uid?: number;
    category?: any;
    pending?: string;
    currency?: string;
    is_image_less_product?: boolean;
    is_expirable?: boolean;
    template_tag?: string;
    teaser_tag?: any;
    created_on?: string;
    size_guide?: string;
    net_quantity?: NetQuantityResponse;
    item_code?: string;
    all_sizes?: any[];
    trader?: any[];
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductVariants = {
    name?: string;
    brand_uid?: number;
    uid?: number;
    category_uid?: number;
    item_code?: string;
    media?: Media1[];
};
type ProductVariantsResponse = {
    variants?: ProductVariants[];
    page?: Page;
};
type AttributeMasterSerializer = {
    modified_on?: string;
    departments: string[];
    details: AttributeMasterDetails;
    name?: string;
    slug: string;
    enabled_for_end_consumer?: boolean;
    is_nested?: boolean;
    logo?: string;
    suggestion?: string;
    synonyms?: any;
    unit?: string;
    created_by?: any;
    tags?: string[];
    raw_key?: string;
    description?: string;
    modified_by?: any;
    filters: AttributeMasterFilter;
    variant?: boolean;
    schema: AttributeMaster;
    created_on?: string;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    gtin_value: string;
    gtin_type: string;
    primary?: boolean;
};
type AllSizes = {
    item_weight: number;
    item_length: number;
    item_dimensions_unit_of_measure: string;
    item_height: number;
    size: any;
    item_weight_unit_of_measure: any;
    identifiers?: ValidateIdentifier[];
    item_width: number;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    username?: string;
    uid?: string;
    email?: string;
    user_id?: string;
};
type BulkJob = {
    succeed?: number;
    cancelled?: number;
    created_by?: UserInfo1;
    total?: number;
    modified_on?: string;
    template_tag?: string;
    is_active?: boolean;
    failed_records?: any[];
    tracking_url?: string;
    created_on: string;
    company_id: number;
    stage?: string;
    file_path?: string;
    modified_by?: UserInfo1;
    custom_template_tag?: string;
    cancelled_records?: any[];
    failed?: number;
};
type BulkResponse = {
    created_by?: UserInfo1;
    modified_on?: string;
    is_active?: boolean;
    created_on: string;
    modified_by?: UserInfo1;
    batch_id: string;
};
type UserDetail1 = {
    full_name?: string;
    username?: string;
    user_id?: string;
};
type ProductBulkRequest = {
    succeed?: number;
    cancelled?: number;
    created_by?: UserDetail1;
    total?: number;
    modified_on?: string;
    template_tag?: string;
    is_active?: boolean;
    failed_records?: string[];
    created_on?: string;
    company_id?: number;
    stage?: string;
    file_path?: string;
    modified_by?: UserDetail1;
    cancelled_records?: string[];
    template?: ProductTemplate;
    failed?: number;
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type BulkProductRequest = {
    template_tag: string;
    data: any[];
    company_id: number;
    batch_id: string;
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    user: any;
    url: string;
    company_id?: number;
};
type UserCommon = {
    username?: string;
    company_id?: number;
    user_id?: string;
};
type Items = {
    succeed?: number;
    cancelled?: number;
    created_by?: UserCommon;
    total?: number;
    modified_on?: string;
    id?: string;
    failed_records?: string[];
    is_active?: boolean;
    retry?: number;
    created_on?: string;
    file_path?: string;
    stage?: string;
    company_id?: number;
    modified_by?: UserCommon;
    tracking_url?: string;
    cancelled_records?: string[];
    failed?: number;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
};
type ProductSizeDeleteDataResponse = {
    item_id?: number;
    size?: string;
    company_id?: number;
};
type ProductSizeDeleteResponse = {
    data?: ProductSizeDeleteDataResponse;
    success?: boolean;
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
    size_distribution: SizeDistribution;
    name?: string;
    quantity?: number;
};
type GTIN = {
    gtin_value: any;
    gtin_type: string;
    primary?: boolean;
};
type InvSize = {
    price_effective: number;
    item_length?: number;
    item_dimensions_unit_of_measure?: string;
    item_weight?: number;
    currency: string;
    price?: number;
    price_transfer?: number;
    item_height?: number;
    expiration_date?: string;
    set?: InventorySet;
    store_code: string;
    quantity: number;
    size: any;
    item_weight_unit_of_measure?: string;
    identifiers: GTIN[];
    is_set?: boolean;
    item_width?: number;
};
type InventoryRequest = {
    item: ItemQuery;
    sizes: InvSize[];
    company_id: number;
};
type InventoryResponse = {
    price_effective?: number;
    store?: any;
    currency?: string;
    price?: number;
    price_transfer?: number;
    seller_identifier?: string;
    uid?: string;
    quantity?: number;
    inventory_updated_on?: string;
    item_id?: number;
    size?: string;
    identifiers?: any;
    sellable_quantity?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ReturnConfig1 = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type ManufacturerResponse = {
    name: string;
    is_default: boolean;
    address: string;
};
type CompanyMeta = {
    id: number;
};
type BrandMeta = {
    name: string;
    id: number;
};
type PriceMeta = {
    marked: number;
    currency: string;
    transfer: number;
    effective: number;
    updated_at?: string;
    tp_notes?: any;
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
type WeightResponse = {
    is_default: boolean;
    shipping: number;
    unit: string;
};
type DimensionResponse = {
    height: number;
    length: number;
    is_default: boolean;
    width: number;
    unit: string;
};
type Trader1 = {
    name: string;
    address: string[];
    type: string;
};
type InventorySellerResponse = {
    uid: string;
    stage?: string;
    fragile: boolean;
    is_set?: boolean;
    return_config?: ReturnConfig1;
    tax_identifier?: any;
    trace_id?: string;
    manufacturer: ManufacturerResponse;
    _custom_json?: any;
    is_active?: boolean;
    seller_identifier: string;
    country_of_origin: string;
    track_inventory?: boolean;
    item_id: number;
    company: CompanyMeta;
    brand: BrandMeta;
    created_by?: UserSerializer;
    price: PriceMeta;
    expiration_date?: string;
    tags?: string[];
    fynd_article_code: string;
    size: string;
    identifier: any;
    fynd_meta?: any;
    modified_by?: UserSerializer;
    quantities?: Quantities;
    raw_meta?: any;
    meta?: any;
    store: StoreMeta;
    total_quantity: number;
    added_on_store?: string;
    set?: InventorySet;
    fynd_item_code: string;
    weight: WeightResponse;
    dimension: DimensionResponse;
    trader?: Trader1[];
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type ReturnConfig2 = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type ManufacturerResponse1 = {
    name?: string;
    is_default?: boolean;
    address?: string;
};
type CompanyMeta1 = {
    id?: number;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type PriceArticle = {
    marked?: number;
    currency?: string;
    transfer?: number;
    effective?: number;
    tp_notes?: any;
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
    name?: string;
    store_type?: string;
    uid?: number;
    store_code?: string;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type DimensionResponse1 = {
    length?: number;
    width?: number;
    unit?: string;
    height?: number;
};
type Trader2 = {
    name?: string;
    address?: string[];
    type?: string;
};
type GetInventories = {
    uid?: string;
    stage?: string;
    is_set?: boolean;
    tax_identifier?: any;
    return_config?: ReturnConfig2;
    trace_id?: string;
    manufacturer?: ManufacturerResponse1;
    id?: string;
    date_meta?: DateMeta;
    seller_identifier?: string;
    track_inventory?: boolean;
    country_of_origin?: string;
    inventory_updated_on?: string;
    item_id?: number;
    company?: CompanyMeta1;
    brand?: BrandMeta1;
    created_by?: UserSerializer;
    platforms?: any;
    price?: PriceArticle;
    expiration_date?: string;
    tags?: string[];
    size?: string;
    identifier?: any;
    quantities?: QuantitiesArticle;
    modified_by?: UserSerializer;
    store?: ArticleStoreResponse;
    total_quantity?: number;
    weight?: WeightResponse1;
    dimension?: DimensionResponse1;
    trader?: Trader2[];
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    cancelled?: number;
    succeed?: number;
    created_by?: any;
    total?: number;
    modified_on?: string;
    id?: string;
    failed_records?: string[];
    is_active?: boolean;
    created_on?: string;
    company_id?: number;
    file_path?: string;
    stage?: string;
    modified_by?: any;
    cancelled_records?: string[];
    failed?: number;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    price_effective?: number;
    item_dimensions_unit_of_measure?: string;
    total_quantity?: number;
    currency?: string;
    price?: number;
    price_marked?: number;
    expiration_date?: string;
    seller_identifier: string;
    tags?: string[];
    store_code: string;
    quantity?: number;
    item_weight_unit_of_measure?: string;
    trace_id?: string;
};
type InventoryBulkRequest = {
    user?: any;
    sizes: InventoryJobPayload[];
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
    status?: string;
    trigger_on?: string;
    task_id: string;
};
type InventoryExportJob = {
    request_params?: any;
    seller_id: number;
    status?: string;
    completed_on?: string;
    trigger_on?: string;
    url?: string;
    task_id: string;
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
    price_effective?: number;
    total_quantity?: number;
    price_marked?: number;
    expiration_date?: string;
    seller_identifier: string;
    tags?: string[];
    store_id: number;
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
type HsnUpsert = {
    hs2_code: string;
    hsn_code: string;
    tax2?: number;
    tax_on_mrp: boolean;
    is_active?: boolean;
    uid?: number;
    company_id: number;
    tax1: number;
    threshold2?: number;
    threshold1: number;
    tax_on_esp?: boolean;
};
type HsnCodesObject = {
    hs2_code?: string;
    hsn_code?: string;
    tax2?: number;
    tax_on_mrp?: boolean;
    id?: string;
    modified_on?: string;
    company_id?: number;
    tax1?: number;
    threshold2?: number;
    threshold1?: number;
    tax_on_esp?: boolean;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    size?: number;
    item_total?: number;
    has_next?: boolean;
    has_previous?: boolean;
    current?: string;
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
    effective_date: string;
    threshold: number;
    cess?: number;
    rate: number;
};
type HSNDataInsertV2 = {
    created_by?: any;
    hsn_code: string;
    modified_on?: string;
    created_on?: string;
    modified_by?: any;
    description: string;
    reporting_hsn: string;
    country_code: string;
    type: string;
    taxes: TaxSlab[];
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    name?: string;
    slug?: string;
    uid?: number;
    banners?: ImageUrls;
    logo?: Media;
    action?: Action;
    discount?: string;
    departments?: string[];
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    name?: string;
    slug?: string;
    priority_order?: number;
    uid?: number;
    logo?: Media;
};
type DepartmentResponse = {
    items?: Department[];
};
type ThirdLevelChild = {
    name?: string;
    _custom_json?: any;
    slug?: string;
    childs?: any[];
    uid?: number;
    banners?: ImageUrls;
    action?: Action;
};
type SecondLevelChild = {
    name?: string;
    _custom_json?: any;
    slug?: string;
    childs?: ThirdLevelChild[];
    uid?: number;
    banners?: ImageUrls;
    action?: Action;
};
type Child = {
    name?: string;
    _custom_json?: any;
    slug?: string;
    childs?: SecondLevelChild[];
    uid?: number;
    banners?: ImageUrls;
    action?: Action;
};
type CategoryItems = {
    name?: string;
    slug?: string;
    childs?: Child[];
    uid?: number;
    banners?: ImageUrls;
    action?: Action;
};
type DepartmentCategoryTree = {
    items?: CategoryItems[];
    department?: string;
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
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    operators?: any;
    page: Page;
    filters?: ProductFilters[];
};
type ProductDetail = {
    uid?: number;
    promo_meta?: any;
    rating_count?: number;
    attributes?: any;
    medias?: Media1[];
    rating?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    name?: string;
    slug: string;
    highlights?: string[];
    has_variant?: boolean;
    brand?: ProductBrand;
    short_description?: string;
    color?: string;
    description?: string;
    product_online_date?: string;
    type?: string;
    item_type?: string;
    image_nature?: string;
    teaser_tag?: any;
    tryouts?: string[];
    item_code?: string;
    similars?: string[];
};
type InventoryPage = {
    type: string;
    next_id?: string;
    item_total: number;
    has_next?: boolean;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
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
    meta?: any;
    article_assignment?: ArticleAssignment;
    quantity?: number;
    query?: ArticleQuery;
    group_id?: string;
};
type AssignStore = {
    store_ids?: number[];
    company_id?: number;
    app_id: string;
    channel_type?: string;
    pincode: string;
    channel_identifier?: string;
    articles: AssignStoreArticle[];
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    meta?: any;
    price_effective?: number;
    store_pincode?: number;
    status: boolean;
    price_marked?: number;
    article_assignment: ArticleAssignment1;
    uid?: string;
    index?: number;
    company_id?: number;
    store_id?: number;
    item_id: number;
    size: string;
    s_city?: string;
    quantity: number;
    strategy_wise_listing?: any[];
    group_id?: string;
    _id?: string;
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
type ProductReturnConfigSerializer = {
    on_same_store?: boolean;
    store_uid?: number;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    opening?: LocationTimingSerializer;
    open: boolean;
    closing?: LocationTimingSerializer;
    weekday: string;
};
type UserSerializer1 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetAddressSerializer = {
    country?: string;
    address_type?: string;
    address2?: string;
    address1?: string;
    state?: string;
    latitude?: number;
    landmark?: string;
    longitude?: number;
    country_code?: string;
    pincode?: number;
    city?: string;
};
type UserSerializer2 = {
    contact?: string;
    username?: string;
    user_id?: string;
};
type GetCompanySerializer = {
    name?: string;
    reject_reason?: string;
    created_by?: UserSerializer2;
    modified_on?: string;
    business_type?: string;
    company_type?: string;
    uid?: number;
    created_on?: string;
    stage?: string;
    modified_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
    verified_by?: UserSerializer2;
    verified_on?: string;
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
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type GetLocationSerializer = {
    modified_on?: string;
    phone_number: string;
    uid?: number;
    stage?: string;
    manager?: LocationManagerSerializer;
    product_return_config?: ProductReturnConfigSerializer;
    name: string;
    _custom_json?: any;
    notification_emails?: string[];
    timing?: LocationDayWiseSerializer[];
    display_name: string;
    contact_numbers?: SellerPhoneNumber[];
    warnings?: any;
    verified_by?: UserSerializer1;
    address: GetAddressSerializer;
    company?: GetCompanySerializer;
    created_by?: UserSerializer1;
    modified_by?: UserSerializer1;
    gst_credentials?: InvoiceDetailsSerializer;
    verified_on?: string;
    store_type?: string;
    documents?: Document[];
    created_on?: string;
    code: string;
    integration_type?: LocationIntegrationType;
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
    name?: string;
    _custom_json?: any;
    is_active?: boolean;
    uid: number;
    app_id: string;
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
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type BusinessCountryInfo = {
    country?: string;
    country_code?: string;
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type CompanyTaxesSerializer = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type GetCompanyProfileSerializerResponse = {
    documents?: Document[];
    contact_details?: ContactDetails;
    verified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    name?: string;
    company_type: string;
    business_type: string;
    modified_by?: UserSerializer;
    warnings?: any;
    notification_emails?: string[];
    uid: number;
    verified_on?: string;
    modified_on?: string;
    created_by?: UserSerializer;
    franchise_enabled?: boolean;
    mode?: string;
    business_details?: BusinessDetails;
    _custom_json?: any;
    taxes?: CompanyTaxesSerializer[];
    addresses?: GetAddressSerializer[];
    stage?: string;
    business_info?: string;
    created_on?: string;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type CreateUpdateAddressSerializer = {
    address_type: string;
    latitude: number;
    address1: string;
    landmark?: string;
    longitude: number;
    city: string;
    state: string;
    pincode: number;
    country: string;
    address2?: string;
    country_code?: string;
};
type UpdateCompany = {
    business_type?: string;
    taxes?: CompanyTaxesSerializer1[];
    documents?: Document[];
    franchise_enabled?: boolean;
    addresses?: CreateUpdateAddressSerializer[];
    contact_details?: ContactDetails;
    business_details?: BusinessDetails;
    warnings?: any;
    company_type?: string;
    name?: string;
    reject_reason?: string;
    notification_emails?: string[];
    _custom_json?: any;
    business_info?: string;
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
    store?: DocumentsObj;
    stage?: string;
    company_documents?: DocumentsObj;
    brand?: DocumentsObj;
    uid?: number;
    product?: DocumentsObj;
    store_documents?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    verified_by?: UserSerializer;
    name: string;
    reject_reason?: string;
    _locale_language?: any;
    banner?: BrandBannerSerializer;
    modified_by?: UserSerializer;
    warnings?: any;
    uid?: number;
    verified_on?: string;
    modified_on?: string;
    created_by?: UserSerializer;
    slug_key?: string;
    mode?: string;
    description?: string;
    _custom_json?: any;
    stage?: string;
    synonyms?: string[];
    logo?: string;
    created_on?: string;
};
type CreateUpdateBrandRequestSerializer = {
    banner?: BrandBannerSerializer;
    brand_tier?: string;
    company_id?: number;
    name: string;
    uid?: number;
    _custom_json?: any;
    synonyms?: string[];
    description?: string;
    _locale_language?: any;
    logo: string;
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
    business_type: string;
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    stage?: string;
    verified_by?: UserSerializer;
    business_country_info?: BusinessCountryInfo;
    name?: string;
    company_type: string;
    notification_emails?: string[];
    reject_reason?: string;
    details?: CompanyDetails;
    _custom_json?: any;
    uid?: number;
    verified_on?: string;
    created_on?: string;
    modified_on?: string;
    market_channels?: string[];
};
type CompanyBrandSerializer = {
    modified_by?: UserSerializer;
    created_by?: UserSerializer;
    stage?: string;
    verified_by?: UserSerializer;
    warnings?: any;
    company?: CompanySerializer;
    reject_reason?: string;
    brand?: GetBrandResponseSerializer;
    uid?: number;
    verified_on?: string;
    created_on?: string;
    modified_on?: string;
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
    start_date: string;
    end_date: string;
};
type HolidaySchemaSerializer = {
    holiday_type: string;
    title: string;
    date: HolidayDateSerializer;
};
type AddressSerializer = {
    address_type?: string;
    latitude: number;
    address1?: string;
    landmark?: string;
    longitude: number;
    city?: string;
    pincode?: number;
    state?: string;
    country?: string;
    address2?: string;
    country_code?: string;
};
type LocationSerializer = {
    documents?: Document[];
    gst_credentials?: InvoiceDetailsSerializer;
    manager?: LocationManagerSerializer;
    stage?: string;
    display_name: string;
    timing?: LocationDayWiseSerializer[];
    product_return_config?: ProductReturnConfigSerializer;
    warnings?: any;
    name: string;
    company: number;
    holiday?: HolidaySchemaSerializer[];
    notification_emails?: string[];
    _custom_json?: any;
    uid?: number;
    address: AddressSerializer;
    store_type?: string;
    contact_numbers?: SellerPhoneNumber[];
    code: string;
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
    size?: string;
    ignored_stores?: number[];
};
type _AssignStoreArticle = {
    quantity?: number;
    article_assignment?: _ArticleAssignment;
    meta?: any;
    group_id?: string;
    query?: _ArticleQuery;
};
type AssignStoreRequestValidator = {
    articles?: _AssignStoreArticle[];
    company_id?: number;
    channel_type?: string;
    store_ids?: number[];
    pincode?: string;
    app_id?: string;
    channel_identifier?: string;
};
type AssignStoreResponseSerializer = {
    article_assignment?: _ArticleAssignment;
    store_id?: number;
    quantity?: number;
    price_marked?: number;
    store_pincode?: string;
    company_id?: number;
    _id?: string;
    s_city?: string;
    size?: string;
    index?: number;
    meta?: any;
    item_id?: number;
    uid?: string;
    status?: boolean;
    preice_effective?: number;
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
type Validity = {
    priority?: number;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type CouponDateMeta = {
    modified_on?: string;
    created_on?: string;
};
type Validation = {
    user_registered_after?: string;
    app_id?: string[];
    anonymous?: boolean;
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
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    uses?: PaymentAllowValue;
    types?: string[];
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
    ordering_stores?: number[];
    price_range?: PriceRange;
    uses?: UsesRestriction;
    payments?: any;
    post_order?: PostOrder;
    coupon_allowed?: boolean;
    bulk_bundle?: BulkBundleRestriction;
    platforms?: string[];
    user_groups?: number[];
};
type CouponSchedule = {
    cron?: string;
    next_schedule?: any[];
    end?: string;
    start?: string;
    duration?: number;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    auto?: DisplayMetaDict;
    description?: string;
    title?: string;
    apply?: DisplayMetaDict;
    remove?: DisplayMetaDict;
    subtitle?: string;
};
type State = {
    is_display?: boolean;
    is_public?: boolean;
    is_archived?: boolean;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type Rule = {
    value?: number;
    min?: number;
    discount_qty?: number;
    max?: number;
    key?: number;
};
type RuleDefinition = {
    currency_code?: string;
    auto_apply?: boolean;
    is_exact?: boolean;
    applicable_on: string;
    calculate_on: string;
    scope?: string[];
    value_type: string;
    type: string;
};
type Ownership = {
    payable_by: string;
    payable_category: string;
};
type CouponAdd = {
    validity: Validity;
    identifiers: Identifier;
    code: string;
    author?: CouponAuthor;
    date_meta?: CouponDateMeta;
    validation?: Validation;
    restrictions?: Restrictions;
    _schedule?: CouponSchedule;
    display_meta: DisplayMeta;
    state?: State;
    action?: CouponAction;
    rule: Rule[];
    tags?: string[];
    rule_definition: RuleDefinition;
    ownership: Ownership;
    type_slug: string;
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
    validity: Validity;
    identifiers: Identifier;
    code: string;
    author?: CouponAuthor;
    date_meta?: CouponDateMeta;
    validation?: Validation;
    restrictions?: Restrictions;
    _schedule?: CouponSchedule;
    display_meta: DisplayMeta;
    state?: State;
    action?: CouponAction;
    rule: Rule[];
    tags?: string[];
    rule_definition: RuleDefinition;
    ownership: Ownership;
    type_slug: string;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type DisplayMeta1 = {
    offer_text?: string;
    description?: string;
    name?: string;
};
type DiscountOffer = {
    code?: string;
    max_offer_quantity?: number;
    discount_amount?: number;
    max_discount_amount?: number;
    discount_percentage?: number;
    min_offer_quantity?: number;
    discount_price?: number;
};
type CompareObject = {
    greater_than_equals?: number;
    greater_than?: number;
    less_than_equals?: number;
    less_than?: number;
    equals?: number;
};
type ItemCriteria = {
    item_store?: number[];
    cart_total?: CompareObject;
    item_company?: number[];
    item_exclude_category?: number[];
    item_category?: number[];
    item_exclude_brand?: number[];
    item_brand?: number[];
    cart_quantity?: CompareObject;
    item_exclude_company?: number[];
    all_items?: boolean;
    item_size?: string[];
    buy_rules?: string[];
    item_exclude_store?: number[];
    item_exclude_sku?: string[];
    item_sku?: string[];
    item_id?: number[];
};
type DiscountRule = {
    discount_type: string;
    buy_condition: string;
    offer: DiscountOffer;
    item_criteria: ItemCriteria;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type PromotionDateMeta = {
    modified_on?: string;
    created_on?: string;
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
type PaymentAllowValue1 = {
    max?: number;
};
type PromotionPaymentModes = {
    uses?: PaymentAllowValue1;
    codes?: string[];
    type: string;
};
type PostOrder1 = {
    cancellation_allowed?: boolean;
    return_allowed?: boolean;
};
type Restrictions1 = {
    user_registered?: UserRegistered;
    uses: UsesRestriction1;
    payments?: PromotionPaymentModes[];
    post_order?: PostOrder1;
    order_quantity?: number;
    anonymous_users?: boolean;
    user_id?: string[];
    platforms?: string[];
    user_groups?: number[];
};
type PromotionSchedule = {
    cron?: string;
    published: boolean;
    next_schedule?: any[];
    end?: string;
    start: string;
    duration?: number;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type PromotionListItem = {
    apply_exclusive?: string;
    stackable?: boolean;
    display_meta: DisplayMeta1;
    apply_all_discount?: boolean;
    discount_rules: DiscountRule[];
    ownership: Ownership1;
    promo_group: string;
    apply_priority?: number;
    date_meta?: PromotionDateMeta;
    restrictions?: Restrictions1;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    promotion_type: string;
    mode: string;
    application_id: string;
    _custom_json?: any;
    currency?: string;
    code?: string;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    post_order_action?: PromotionAction;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    apply_exclusive?: string;
    stackable?: boolean;
    display_meta: DisplayMeta1;
    apply_all_discount?: boolean;
    discount_rules: DiscountRule[];
    ownership: Ownership1;
    promo_group: string;
    apply_priority?: number;
    date_meta?: PromotionDateMeta;
    restrictions?: Restrictions1;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    promotion_type: string;
    mode: string;
    application_id: string;
    _custom_json?: any;
    currency?: string;
    code?: string;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    post_order_action?: PromotionAction;
};
type PromotionUpdate = {
    apply_exclusive?: string;
    stackable?: boolean;
    display_meta: DisplayMeta1;
    apply_all_discount?: boolean;
    discount_rules: DiscountRule[];
    ownership: Ownership1;
    promo_group: string;
    apply_priority?: number;
    date_meta?: PromotionDateMeta;
    restrictions?: Restrictions1;
    _schedule?: PromotionSchedule;
    buy_rules: any;
    promotion_type: string;
    mode: string;
    application_id: string;
    _custom_json?: any;
    currency?: string;
    code?: string;
    author?: PromotionAuthor;
    visiblility?: Visibility;
    post_order_action?: PromotionAction;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type CartItem = {
    size: string;
    product_id: string;
    quantity?: number;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type ProductPrice = {
    selling?: number;
    effective?: number;
    currency_code?: string;
    marked?: number;
    currency_symbol?: string;
    add_on?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type CartProductIdentifer = {
    identifier?: string;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type AppliedPromotion = {
    amount?: number;
    promo_id?: string;
    offer_text?: string;
    article_quantity?: number;
    promotion_type?: string;
    mrp_promotion?: boolean;
    ownership?: Ownership2;
};
type PromoMeta = {
    message?: string;
};
type ProductImage = {
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
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
    name?: string;
    uid?: number;
};
type CartProduct = {
    name?: string;
    images?: ProductImage[];
    categories?: CategoryInfo[];
    action?: ProductAction;
    brand?: BaseInfo;
    slug?: string;
    type?: string;
    uid?: number;
};
type BasePrice = {
    currency_symbol?: string;
    marked?: number;
    effective?: number;
    currency_code?: string;
};
type ArticlePriceInfo = {
    base?: BasePrice;
    converted?: BasePrice;
};
type ProductArticle = {
    size?: string;
    parent_item_identifiers?: any;
    seller?: BaseInfo;
    price?: ArticlePriceInfo;
    product_group_tags?: string[];
    extra_meta?: any;
    store?: BaseInfo;
    quantity?: number;
    type?: string;
    uid?: string;
};
type ProductAvailability = {
    deliverable?: boolean;
    is_valid?: boolean;
    sizes?: string[];
    out_of_stock?: boolean;
    other_store_quantity?: number;
};
type CartProductInfo = {
    price_per_unit?: ProductPriceInfo;
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
    promotions_applied?: AppliedPromotion[];
    bulk_offer?: any;
    message?: string;
    coupon_message?: string;
    price?: ProductPriceInfo;
    promo_meta?: PromoMeta;
    product?: CartProduct;
    quantity?: number;
    article?: ProductArticle;
    is_set?: boolean;
    discount?: string;
    key?: string;
    availability?: ProductAvailability;
};
type CouponBreakup = {
    code?: string;
    value?: number;
    is_applied?: boolean;
    message?: string;
    type?: string;
    uid?: string;
};
type LoyaltyPoints = {
    is_applied?: boolean;
    description?: string;
    applicable?: number;
    total?: number;
};
type DisplayBreakup = {
    value?: number;
    currency_code?: string;
    currency_symbol?: string;
    message?: string[];
    display?: string;
    key?: string;
};
type RawBreakup = {
    coupon?: number;
    cod_charge?: number;
    vog?: number;
    convenience_fee?: number;
    delivery_charge?: number;
    gst_charges?: number;
    mrp_total?: number;
    you_saved?: number;
    subtotal?: number;
    discount?: number;
    fynd_cash?: number;
    total?: number;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
    display?: DisplayBreakup[];
    raw?: RawBreakup;
};
type OpenapiCartDetailsResponse = {
    items?: CartProductInfo[];
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    message?: string;
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    address?: string;
    landmark?: string;
    area_code_slug?: string;
    name?: string;
    pincode?: number;
    phone?: number;
    meta?: any;
    area_code: string;
    country_code?: string;
    city?: string;
    state?: string;
    email?: string;
    address_type?: string;
    area?: string;
    country?: string;
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
    breakup_values?: CartBreakup;
    is_valid?: boolean;
    delivery_promise?: ShipmentPromise;
    message?: string;
    items?: CartProductInfo[];
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
    cod_charges: number;
    delivery_charges: number;
    amount_paid: number;
    cashback_applied: number;
    price_effective: number;
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    size: string;
    product_id: number;
    extra_meta?: any;
    loyalty_discount?: number;
    discount: number;
    coupon_effective_discount: number;
    price_marked: number;
    meta?: CartItemMeta;
    quantity?: number;
    employee_discount?: number;
};
type OpenApiPlatformCheckoutReq = {
    coupon_code: string;
    coupon?: string;
    cart_value: number;
    cart_items: OpenApiOrderItem[];
    shipping_address?: ShippingAddress;
    files?: OpenApiFiles[];
    comment?: string;
    affiliate_order_id?: string;
    gstin?: string;
    coupon_value: number;
    billing_address: ShippingAddress;
    employee_discount?: any;
    order_id?: string;
    delivery_charges: number;
    cod_charges: number;
    currency_code?: string;
    cashback_applied: number;
    payment_mode?: string;
    loyalty_discount?: number;
    payment_methods: MultiTenderPaymentMethod[];
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    success?: boolean;
    message?: string;
    order_id: string;
};
type AbandonedCart = {
    coupon?: any;
    buy_now?: boolean;
    cashback: any;
    bulk_coupon_discount?: number;
    fynd_credits?: any;
    comment?: string;
    app_id?: string;
    discount?: number;
    _id: string;
    last_modified: string;
    merge_qty?: boolean;
    delivery_charges?: any;
    cod_charges?: any;
    shipments?: any[];
    created_on: string;
    pick_up_customer_details?: any;
    promotion?: any;
    meta?: any;
    user_id: string;
    payments?: any;
    cart_value?: number;
    fc_index_map?: number[];
    gstin?: string;
    expire_at: string;
    is_active?: boolean;
    uid: number;
    order_id?: string;
    is_archive?: boolean;
    checkout_mode?: string;
    payment_mode?: string;
    is_default: boolean;
    payment_methods?: any[];
    articles: any[];
};
type AbandonedCartResponse = {
    result?: any;
    success?: boolean;
    message?: string;
    items?: AbandonedCart[];
    page?: Page;
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    currency?: CartCurrency;
    breakup_values?: CartBreakup;
    buy_now?: boolean;
    is_valid?: boolean;
    delivery_charge_info?: string;
    id?: string;
    message?: string;
    coupon_text?: string;
    checkout_mode?: string;
    items?: CartProductInfo[];
    comment?: string;
    gstin?: string;
    delivery_promise?: ShipmentPromise;
    restrict_checkout?: boolean;
    last_modified?: string;
    payment_selection_lock?: PaymentSelectionLock;
};
type AddProductCart = {
    seller_id?: number;
    parent_item_identifiers?: any;
    store_id?: number;
    pos?: boolean;
    display?: string;
    item_size?: string;
    product_group_tags?: string[];
    article_assignment?: any;
    extra_meta?: any;
    quantity?: number;
    article_id?: string;
    item_id?: number;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
    message?: string;
    partial?: boolean;
};
type UpdateProductCart = {
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
    item_size?: string;
    item_id?: number;
    extra_meta?: any;
    article_id?: string;
    quantity?: number;
    item_index?: number;
};
type UpdateCartRequest = {
    items?: UpdateProductCart[];
    operation: string;
};
type UpdateCartDetailResponse = {
    success?: boolean;
    cart?: CartDetailResponse;
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
