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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, ShipmentItemFulFillingStore, GSTDetailsData, Prices, PlatformItem, BagUnit, ShipmentStatus, PaymentModeInfo, UserDataInfo, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, UserDetailsData, BagStateMapper, BagStatusHistory, FulfillingStore, OrderDetailsData, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, OrderBrandName, BagConfigs, Identifier, FinancialBreakup, PlatformDeliveryAddress, OrderBagArticle, BagGST, OrderBags, ShipmentStatusData, TrackingList, ShipmentPayments, DPDetailsData, ShipmentInfoResponse, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformBreakupValues, PlatformChannel, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, URL, FileUploadResponse, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, DateRange, ManifestFilter, GeneratedManifestItem, ManifestPage, GeneratedManifestResponse, ManifestDetailItem, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, B2BPODetails, BagMeta, Document, StoreDocuments, StoreEinvoice, StoreEwaybill, StoreGstCredentials, EInvoicePortalDetails, StoreMeta, StoreAddress, Store, Dates, Brand, AffiliateMeta, AffiliateBagDetails, BagReturnableCancelableStatus, Attributes, Item, PDFLinks, Formatted, BuyerDetails, ShipmentTimeStamp, EInvoice, EinvoiceInfo, DebugInfo, LockData, ShipmentMeta, AffiliateDetails, ArticleDetails, Dimensions, ReturnConfig, Weight, Article, BagGSTDetails, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, EntityReasonData, EntitiesReasons, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, ReasonsData, Products, EntitiesDataUpdates, ProductsDataUpdatesFilters, ProductsDataUpdates, DataUpdates, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, AffiliateInventoryStoreConfig, AffiliateInventoryLogisticsConfig, AffiliateInventoryOrderConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, AffiliateStoreIdMapping, OrderConfig, OrderPriority, OrderUser, UserData, ArticleDetails1, ShipmentDetails, LocationDetails, ShipmentConfig, ShipmentData, MarketPlacePdf, AffiliateBag, OrderInfo, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, Meta, ShipmentDetail, OrderDetails, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, BillingInfo, PaymentMethod, PaymentInfo, ProcessingDates, Tax, Charge, LineItem, Shipment, ShippingInfo, TaxInfo, CreateOrderAPI, CreateOrderErrorReponse, PaymentMethods, CreateChannelPaymentInfo, DpConfiguration, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, DeleteResponse, SearchKeywordResult, CreateSearchKeyword, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, AutocompletePageAction, AutocompleteAction, Media, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleRequest, Size, LimitedProductData, Price, GetProducts, GetProductBundleResponse, ProductBundleUpdateRequest, ListSizeGuide, Guide, ValidateSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, PageResponseType, GetConfigResponse, ConfigErrorResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationDetailsProduct, GetCatalogConfigurationMetaData, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, AppCatalogConfiguration, GetAppCatalogConfiguration, AppConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, CollectionListingFilterTag, CollectionListingFilterType, CollectionListingFilter, Media1, BannerImage, ImageUrls, CollectionQuery, GetCollectionDetailNest, GetCollectionListingResponse, UserInfo, CollectionBadge, CollectionImage, CollectionBanner, SeoDetail, CollectionSchedule, CreateCollection, CollectionCreateResponse, CollectionDetailResponse, UpdateCollection, ProductBrand, ProductDetailAttribute, ProductDetailGroupedAttribute, Price1, ProductListingPrice, ProductListingDetail, GetCollectionItemsResponse, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, CatalogInsightItem, CatalogInsightBrand, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Media2, Hierarchy, CategoryMappingValues, CategoryMapping, Category, CategoryResponse, CategoryRequestBody, CategoryCreateResponse, SingleCategoryResponse, CategoryUpdateResponse, ProductPublished, ReturnConfigResponse, Logo, Image, NetQuantityResponse, Product, ProductListingResponse, ProductPublish, TaxIdentifier, NetQuantity, TeaserTag, Trader, CustomOrder, ProductCreateUpdateSchemaV2, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserDetail1, ProductBulkRequest, ProductBulkRequestList, UserInfo1, BulkJob, BulkResponse, BulkProductRequest, NestedTags, ProductTagsViewResponse, UserCommon, Items, BulkAssetResponse, ProductBulkAssets, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, InventoryResponse, InventoryResponsePaginated, ItemQuery, GTIN, SetSize, SizeDistribution, InventorySet, InvSize, InventoryRequest, ReturnConfig1, BrandMeta, ManufacturerResponse, QuantityBase, Quantities, WeightResponse, CompanyMeta, DimensionResponse, Trader1, PriceMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ReturnConfig2, BrandMeta1, ManufacturerResponse1, Quantity, QuantitiesArticle, WeightResponse1, CompanyMeta1, DimensionResponse1, ArticleStoreResponse, Trader2, PriceArticle, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportJob, InventoryExportRequest, InventoryExportResponse, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnCodesObject, PageResponse, HsnCodesListingResponse, HsnUpsert, HsnCode, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleQuery, ArticleAssignment, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, SellerPhoneNumber, UserSerializer1, LocationManagerSerializer, LocationIntegrationType, InvoiceCredSerializer, InvoiceDetailsSerializer, UserSerializer2, GetAddressSerializer, GetCompanySerializer, LocationTimingSerializer, LocationDayWiseSerializer, ProductReturnConfigSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, CompanyTaxesSerializer, Website, BusinessDetails, ContactDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, Ownership, Validity, DisplayMetaDict, DisplayMeta, CouponDateMeta, Validation, RuleDefinition, PriceRange, PaymentAllowValue, PaymentModes, PostOrder, UsesRemaining, UsesRestriction, BulkBundleRestriction, Restrictions, State, CouponAction, CouponSchedule, CouponAuthor, Rule, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, PromotionDateMeta, PaymentAllowValue1, PromotionPaymentModes, PostOrder1, UsesRemaining1, UsesRestriction1, UserRegistered, Restrictions1, PromotionAction, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, DisplayMeta1, Ownership1, Visibility, PromotionSchedule, PromotionAuthor, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, CouponBreakup, DisplayBreakup, LoyaltyPoints, RawBreakup, CartBreakup, ProductPrice, ProductPriceInfo, PromoMeta, Ownership2, AppliedPromotion, CategoryInfo, BaseInfo, ActionQuery, ProductAction, ProductImage, CartProduct, ProductAvailability, CartProductIdentifer, BasePrice, ArticlePriceInfo, ProductArticle, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseTimestamp, PromiseFormatted, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type GSTDetailsData = {
    gstin_code: string;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    gst_fee: number;
    value_of_good: number;
};
type Prices = {
    price_effective?: number;
    delivery_charge?: number;
    refund_credit?: number;
    promotion_effective_discount?: number;
    cod_charges?: number;
    amount_paid_roundoff?: number;
    refund_amount?: number;
    amount_paid?: number;
    discount?: number;
    fynd_credits?: number;
    cashback?: number;
    coupon_value?: number;
    tax_collected_at_source?: number;
    cashback_applied?: number;
    value_of_good?: number;
    price_marked?: number;
};
type PlatformItem = {
    code?: string;
    department_id?: number;
    l1_category?: string[];
    image?: string[];
    can_return?: boolean;
    l3_category_name?: string;
    can_cancel?: boolean;
    images?: string[];
    l3_category?: number;
    size?: string;
    color?: string;
    id?: number;
    name?: string;
};
type BagUnit = {
    can_return?: boolean;
    gst?: GSTDetailsData;
    can_cancel?: boolean;
    total_shipment_bags: number;
    bag_id: number;
    status: any;
    shipment_id: string;
    prices?: Prices;
    item_quantity: number;
    ordering_channel: string;
    item?: PlatformItem;
};
type ShipmentStatus = {
    status: string;
    ops_status: string;
    hex_code: string;
    title: string;
    actual_status: string;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type UserDataInfo = {
    first_name?: string;
    uid?: number;
    is_anonymous_user?: boolean;
    gender?: string;
    avis_user_id?: string;
    last_name?: string;
    email?: string;
    name?: string;
    mobile?: string;
};
type ShipmentItem = {
    fulfilling_store?: ShipmentItemFulFillingStore;
    bags?: BagUnit[];
    created_at: string;
    shipment_created_at: number;
    fulfilling_centre: string;
    shipment_status?: ShipmentStatus;
    application?: any;
    payment_mode_info?: PaymentModeInfo;
    total_bags_count: number;
    user?: UserDataInfo;
    sla?: any;
    total_shipments_in_order: number;
    channel?: any;
    prices?: Prices;
    id: string;
    payment_methods?: any;
};
type FilterInfoOption = {
    value?: string;
    text: string;
    name?: string;
};
type FiltersInfo = {
    value: string;
    text: string;
    type: string;
    options?: FilterInfoOption[];
};
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    page?: any;
    applied_filters?: any;
    filters?: FiltersInfo[];
};
type Error = {
    success?: boolean;
    message?: string;
};
type UserDetailsData = {
    phone: string;
    country: string;
    pincode: string;
    state: string;
    address: string;
    city: string;
    email: string;
    name: string;
};
type BagStateMapper = {
    app_facing?: boolean;
    app_state_name?: string;
    bs_id: number;
    notify_customer?: boolean;
    is_active?: boolean;
    journey_type: string;
    state_type: string;
    app_display_name?: string;
    display_name: string;
    name: string;
};
type BagStatusHistory = {
    bsh_id: number;
    created_at: string;
    reasons?: any[];
    forward?: boolean;
    delivery_partner_id?: number;
    store_id: number;
    updated_at?: string;
    bag_id: number;
    kafka_sync?: boolean;
    status: string;
    shipment_id: string;
    delivery_awb_number?: string;
    bag_state_mapper: BagStateMapper;
    state_type?: string;
    state_id: number;
    app_display_name?: boolean;
    display_name?: boolean;
};
type FulfillingStore = {
    code: string;
    phone: string;
    fulfillment_channel: string;
    contact_person: string;
    country: string;
    pincode: string;
    meta: any;
    city: string;
    state: string;
    address: string;
    store_name: string;
    id: string;
};
type OrderDetailsData = {
    affiliate_id?: string;
    cod_charges?: string;
    ordering_channel_logo?: any;
    order_date?: string;
    order_value?: string;
    tax_details?: any;
    source?: string;
    ordering_channel?: string;
    fynd_order_id: string;
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
    amount?: number;
    mrp_promotion?: boolean;
    discount_rules?: DiscountRules[];
    article_quantity?: number;
    promotion_type?: string;
    promotion_name?: string;
    buy_rules?: BuyRules[];
    promo_id?: string;
};
type OrderBrandName = {
    company: string;
    logo: string;
    created_on: number;
    modified_on?: number;
    id: number;
    brand_name: string;
};
type BagConfigs = {
    enable_tracking: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
    allow_force_return: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    price_effective: number;
    promotion_effective_discount: number;
    gst_tag: string;
    gst_tax_percentage: number;
    price_marked: number;
    item_name: string;
    identifiers: Identifier;
    discount: number;
    coupon_value: number;
    tax_collected_at_source?: number;
    gst_fee: string;
    pm_price_split: any;
    refund_credit: number;
    cod_charges: number;
    amount_paid: number;
    hsn_code: string;
    size: string;
    cashback_applied: number;
    transfer_price: number;
    value_of_good: number;
    fynd_credits: number;
    total_units: number;
    delivery_charge: number;
    added_to_fynd_cash: boolean;
    amount_paid_roundoff?: number;
    cashback: number;
    coupon_effective_discount: number;
    brand_calculated_amount: number;
};
type PlatformDeliveryAddress = {
    address_category?: string;
    area?: string;
    landmark?: string;
    address1?: string;
    created_at?: string;
    phone?: string;
    country?: string;
    longitude?: number;
    pincode?: string;
    updated_at?: string;
    state?: string;
    address2?: string;
    latitude?: number;
    city?: string;
    email?: string;
    contact_person?: string;
    address_type?: string;
    version?: string;
};
type OrderBagArticle = {
    identifiers?: any;
    return_config?: any;
    uid?: string;
};
type BagGST = {
    is_default_hsn_code?: boolean;
    gst_fee?: number;
    gst_tag?: string;
    gst_tax_percentage?: number;
    hsn_code?: string;
    brand_calculated_amount?: number;
    gstin_code?: string;
    value_of_good?: number;
};
type OrderBags = {
    parent_promo_bags?: any;
    applied_promos?: AppliedPromos[];
    prices?: Prices;
    quantity?: number;
    brand?: OrderBrandName;
    bag_configs?: BagConfigs;
    can_return?: boolean;
    financial_breakup?: FinancialBreakup[];
    item?: PlatformItem;
    entity_type?: string;
    seller_identifier?: string;
    can_cancel?: boolean;
    bag_id: number;
    delivery_address?: PlatformDeliveryAddress;
    current_status?: string;
    display_name?: string;
    article?: OrderBagArticle;
    gst_details?: BagGST;
    identifier?: string;
    line_number?: number;
};
type ShipmentStatusData = {
    created_at?: string;
    status?: string;
    shipment_id?: string;
    bag_list?: number[];
    id?: number;
};
type TrackingList = {
    text: string;
    time?: string;
    status: string;
    is_current?: boolean;
    is_passed?: boolean;
};
type ShipmentPayments = {
    mode: string;
    source?: string;
    logo?: string;
};
type DPDetailsData = {
    track_url?: string;
    country?: string;
    gst_tag?: string;
    pincode?: string;
    awb_no?: string;
    eway_bill_id?: string;
    id?: string;
    name?: string;
};
type ShipmentInfoResponse = {
    shipment_quantity?: number;
    fyndstore_emp: any;
    delivery_details?: UserDetailsData;
    shipment_status?: string;
    billing_details?: UserDetailsData;
    lock_status: string;
    affiliate_shipment_id: string;
    current_shipment_status: any;
    user_info?: any;
    refund_text?: string;
    ordering_store: any;
    is_pdsr?: string;
    child_nodes?: string[];
    refund_details?: any;
    total_items?: number;
    delivery_slot?: any;
    secured_delivery_flag?: string;
    forward_shipment_status?: any[];
    prices?: Prices;
    invoice: any;
    go_green?: boolean;
    bag_status_history?: BagStatusHistory[];
    due_date?: string;
    enable_dp_tracking?: string;
    fulfilling_store?: FulfillingStore;
    order?: OrderDetailsData;
    bags?: OrderBags[];
    order_status: any;
    priority_text?: string;
    can_return?: boolean;
    replacement_details?: string;
    order_type: string;
    shipment_images?: string[];
    status?: ShipmentStatusData;
    user_id: string;
    order_created_time?: string;
    status_progress: number;
    tracking_list?: TrackingList[];
    tracking_url: string;
    items: any[];
    enable_tracking?: boolean;
    is_fynd_store?: string;
    can_break: string;
    journey_type?: string;
    email_id: string;
    payments?: ShipmentPayments;
    can_cancel?: boolean;
    vertical?: string;
    packaging_type?: string;
    forward_tracking_list?: any[];
    shipment_id: string;
    bank_data?: any;
    dp_details?: DPDetailsData;
    picked_date?: string;
    delivery_status: any[];
    company: any;
    beneficiary_details?: boolean;
    is_fynd_coupon: boolean;
    is_packaging_order: boolean;
    mid?: string;
    pay_button?: string;
    coupon?: any;
    kirana_store_id?: string;
    forward_order_status?: any[];
    payment_mode?: string;
    user_agent?: string;
    is_not_fynd_source: boolean;
    platform_logo: boolean;
    is_invoiced: boolean;
    gst_details?: GSTDetailsData;
    escalation?: any;
    total_bags?: number;
    credit_note_id: string;
    custom_meta?: any[];
    operational_status?: string;
};
type OrderDict = {
    prices?: Prices;
    order_date: string;
    shipment_count: number;
    fynd_order_id: string;
};
type PlatformShipment = {
    shipment_quantity?: number;
    delivery_details?: UserDetailsData;
    shipment_status?: string;
    billing_details?: UserDetailsData;
    total_items?: number;
    delivery_slot?: any;
    prices?: Prices;
    bag_status_history?: BagStatusHistory[];
    enable_dp_tracking?: string;
    fulfilling_store?: FulfillingStore;
    order?: OrderDetailsData;
    bags?: OrderBags[];
    priority_text?: string;
    shipment_images?: string[];
    status?: ShipmentStatusData;
    tracking_list?: TrackingList[];
    journey_type?: string;
    payments?: ShipmentPayments;
    vertical?: string;
    packaging_type?: string;
    shipment_id: string;
    dp_details?: DPDetailsData;
    picked_date?: string;
    coupon?: any;
    payment_mode?: string;
    user_agent?: string;
    platform_logo?: string;
    gst_details?: GSTDetailsData;
    total_bags?: number;
    custom_meta?: any[];
    operational_status?: string;
};
type ShipmentDetailsResponse = {
    success: boolean;
    order?: OrderDict;
    custom_meta?: any[];
    shipments?: PlatformShipment[];
};
type SubLane = {
    actions?: any[];
    value?: string;
    index?: number;
    text?: string;
    total_items?: number;
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
    order_id?: string;
    breakup_values?: PlatformBreakupValues[];
    user_info?: UserDataInfo;
    total_order_value?: number;
    meta?: any;
    payment_mode?: string;
    order_created_time?: string;
    channel?: PlatformChannel;
    order_value?: number;
    shipments?: PlatformShipment[];
};
type OrderListingResponse = {
    items?: PlatformOrderItems[];
    lane?: string;
    page?: Page;
    total_count?: number;
    success?: boolean;
    message?: string;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    text: string;
    value: number;
    options?: Options[];
    key: string;
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    last_location_recieved_at?: string;
    reason?: string;
    raw_status?: string;
    awb?: string;
    meta?: any;
    updated_time?: string;
    updated_at?: string;
    status?: string;
    account_name?: string;
    shipment_type?: string;
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
    report_name?: string;
    request_details?: any;
    s3_key?: string;
    status?: string;
    report_id?: string;
    report_created_at?: string;
    display_name?: string;
    report_requested_at?: string;
    report_type?: string;
};
type JioCodeUpsertDataSet = {
    item_id?: string;
    jio_code?: string;
    company_id?: string;
    article_id?: string;
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
    trace_id?: string;
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
    identifier?: string;
    success?: boolean;
};
type BulkInvoicingResponse = {
    success: boolean;
    message?: string;
};
type BulkInvoiceLabelResponse = {
    invoice_status?: string;
    store_id?: string;
    label?: any;
    batch_id: string;
    do_invoice_label_generated: boolean;
    data?: any;
    store_code?: string;
    store_name?: string;
    invoice?: any;
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
    content_type?: string;
    namespace?: string;
    method?: string;
    cdn?: URL;
    file_path?: string;
    file_name?: string;
    upload?: FileUploadResponse;
    operation?: string;
    size?: number;
    tags?: string[];
};
type BulkListingPage = {
    has_previous?: boolean;
    total?: number;
    current?: number;
    type?: string;
    size?: number;
    has_next?: boolean;
};
type bulkListingData = {
    store_id?: number;
    processing?: number;
    store_code?: string;
    file_name?: string;
    total?: number;
    user_name?: string;
    status?: string;
    user_id?: string;
    processing_shipments?: string[];
    successful_shipments?: any[];
    successful?: number;
    failed?: number;
    company_id?: number;
    failed_shipments?: any[];
    uploaded_on?: string;
    batch_id?: string;
    store_name?: string;
    excel_url?: string;
    id?: string;
};
type BulkListingResponse = {
    success?: boolean;
    page?: BulkListingPage;
    error?: string;
    data?: bulkListingData[];
};
type DateRange = {
    to_date?: string;
    from_date?: string;
};
type ManifestFilter = {
    lane?: string;
    dp_name?: string;
    stores?: string;
    sales_channel_name?: string;
    dp_ids?: string;
    date_range?: DateRange;
    store_name?: string;
    sales_channels?: string;
};
type GeneratedManifestItem = {
    created_at?: string;
    is_active?: boolean;
    manifest_id?: string;
    status?: string;
    created_by?: string;
    filters?: ManifestFilter;
    company_id?: number;
};
type ManifestPage = {
    has_previous?: boolean;
    total?: number;
    current?: string;
    type?: string;
    has_next?: boolean;
    size?: string;
};
type GeneratedManifestResponse = {
    items?: GeneratedManifestItem[];
    page?: ManifestPage;
};
type ManifestDetailItem = {
    order_id?: string;
    invoice_id?: string;
    awb?: string;
    item_qty?: number;
    shipment_id?: string;
};
type ManifestDetailTotalShipmentPricesCount = {
    shipment_count?: number;
    total_price?: number;
};
type ManifestDetailMeta = {
    filters?: ManifestFilter;
    total_shipment_prices_count?: ManifestDetailTotalShipmentPricesCount;
};
type ManifestDetail = {
    created_at?: string;
    is_active?: boolean;
    uid?: number;
    manifest_id?: string;
    meta?: ManifestDetailMeta;
    status?: string;
    created_by?: string;
    user_id?: number;
    filters?: ManifestFilter;
    id?: number;
    company_id?: number;
};
type ManifestDetailResponse = {
    items?: ManifestDetailItem[];
    additional_shipment_count?: number;
    page?: ManifestPage;
    manifest_details?: ManifestDetail[];
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    question_set?: QuestionSet[];
    id?: number;
    display_name?: string;
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
    status?: boolean;
    message?: string;
};
type BulkActionDetailsDataField = {
    failed_shipments_count?: number;
    total_shipments_count?: number;
    processing_shipments_count?: number;
    batch_id?: string;
    successful_shipment_ids?: string[];
    successful_shipments_count?: number;
    company_id?: string;
};
type BulkActionDetailsResponse = {
    uploaded_by?: string;
    uploaded_on?: string;
    error?: string[];
    data?: BulkActionDetailsDataField[];
    user_id?: string;
    status?: boolean;
    success?: string;
    message?: string;
    failed_records?: string[];
};
type B2BPODetails = {
    po_line_amount?: number;
    total_gst_percentage?: number;
    docker_number?: string;
    po_tax_amount?: number;
    item_base_price?: number;
    partial_can_ret?: boolean;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Document = {
    value: string;
    url?: string;
    legal_name: string;
    ds_type: string;
    verified: boolean;
};
type StoreDocuments = {
    gst?: Document;
};
type StoreEinvoice = {
    user?: string;
    password?: string;
    username?: string;
    enabled: boolean;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
type EInvoicePortalDetails = {
    user?: string;
    password?: string;
    username?: string;
};
type StoreMeta = {
    notification_emails?: string[];
    additional_contact_details?: any;
    gst_number?: string;
    documents?: StoreDocuments;
    product_return_config?: any;
    gst_credentials: StoreGstCredentials;
    timing?: any[];
    ewaybill_portal_details?: any;
    stage: string;
    einvoice_portal_details?: EInvoicePortalDetails;
    display_name: string;
};
type StoreAddress = {
    area?: string;
    address_type: string;
    landmark?: string;
    longitude: number;
    country_code: string;
    updated_at: string;
    state: string;
    latitude: number;
    contact_person: string;
    version?: string;
    address_category: string;
    created_at: string;
    phone: string;
    country: string;
    pincode: number;
    city: string;
    email?: string;
    address1: string;
    address2?: string;
};
type Store = {
    store_email: string;
    fulfillment_channel: string;
    meta: StoreMeta;
    store_address_json?: StoreAddress;
    s_id: string;
    alohomora_user_id?: number;
    brand_store_tags?: string[];
    longitude: number;
    updated_at?: string;
    state: string;
    order_integration_id?: string;
    latitude: number;
    contact_person: string;
    parent_store_id?: number;
    created_at: string;
    is_active?: boolean;
    phone: number;
    country: string;
    store_active_from?: string;
    pincode: string;
    login_username: string;
    packaging_material_count?: number;
    mall_area?: string;
    city: string;
    location_type: string;
    name: string;
    company_id: number;
    code?: string;
    address1: string;
    brand_id?: any;
    is_archived?: boolean;
    address2?: string;
    is_enabled_for_recon?: boolean;
    mall_name?: string;
    vat_no?: string;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type Brand = {
    pickup_location?: string;
    credit_note_allowed?: boolean;
    is_virtual_invoice?: boolean;
    brand_name: string;
    company: string;
    credit_note_expiry_days?: number;
    brand_id: number;
    logo?: string;
    start_date?: string;
    created_on?: number;
    invoice_prefix?: string;
    modified_on?: number;
    script_last_ran?: string;
};
type AffiliateMeta = {
    is_priority?: boolean;
    quantity?: number;
    order_item_id?: string;
    coupon_code?: string;
    box_type?: string;
    channel_order_id?: string;
    loyalty_discount?: number;
    due_date?: string;
    employee_discount?: number;
    channel_shipment_id?: string;
    size_level_total_qty?: number;
};
type AffiliateBagDetails = {
    affiliate_meta: AffiliateMeta;
    affiliate_bag_id: string;
    loyalty_discount?: number;
    employee_discount?: number;
    affiliate_order_id: string;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    is_active: boolean;
    can_be_cancelled: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
};
type Attributes = {
    brand_name?: string;
    gender?: string[];
    primary_material?: string;
    marketer_name?: string;
    primary_color?: string;
    marketer_address?: string;
    primary_color_hex?: string;
    essential?: string;
    name?: string;
};
type Item = {
    department_id?: number;
    attributes: Attributes;
    slug_key: string;
    meta?: any;
    last_updated_at?: string;
    brand: string;
    image: string[];
    can_return?: boolean;
    l3_category_name?: string;
    l3_category?: number;
    l2_category?: string[];
    l2_category_id?: number;
    can_cancel?: boolean;
    size: string;
    branch_url?: string;
    name: string;
    code?: string;
    l1_category?: string[];
    brand_id: number;
    gender?: string;
    item_id: number;
    webstore_product_url?: string;
    l1_category_id?: number;
    color?: string;
};
type PDFLinks = {
    invoice_a6?: string;
    label_a4?: string;
    label_a6?: string;
    invoice_a4?: string;
    b2b?: string;
    credit_note_url?: string;
    invoice_pos?: string;
    label?: string;
    po_invoice?: string;
    label_pos?: string;
    invoice_type: string;
    invoice?: string;
    label_type: string;
};
type Formatted = {
    f_max?: string;
    f_min?: string;
};
type BuyerDetails = {
    gstin: string;
    pincode: number;
    ajio_site_id?: string;
    state: string;
    address: string;
    city: string;
    name: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type EInvoice = {
    signed_invoice?: string;
    signed_qr_code?: string;
    acknowledge_date?: string;
    acknowledge_no?: number;
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
type LockData = {
    lock_message?: string;
    locked?: boolean;
    mto?: boolean;
};
type ShipmentMeta = {
    forward_affiliate_shipment_id?: string;
    ewaybill_info?: any;
    auto_trigger_dp_assignment_acf: boolean;
    store_invoice_updated_date?: string;
    return_awb_number?: string;
    return_affiliate_order_id?: string;
    return_affiliate_shipment_id?: string;
    po_number?: string;
    packaging_name?: string;
    due_date?: string;
    dp_sort_key?: string;
    shipment_volumetric_weight?: number;
    formatted?: Formatted;
    b2b_buyer_details?: BuyerDetails;
    external?: any;
    order_type?: string;
    awb_number?: string;
    box_type?: string;
    return_store_node?: number;
    timestamp?: ShipmentTimeStamp;
    forward_affiliate_order_id?: string;
    weight: number;
    einvoice_info?: EinvoiceInfo;
    dp_name?: string;
    bag_weight?: any;
    dp_id?: string;
    return_details?: any;
    marketplace_store_id?: string;
    fulfilment_priority_text?: string;
    debug_info?: DebugInfo;
    b2c_buyer_details?: any;
    lock_data?: LockData;
    dp_options?: any;
    assign_dp_from_sb?: boolean;
    shipment_weight?: number;
    same_store_available: boolean;
};
type AffiliateDetails = {
    company_affiliate_tag?: string;
    affiliate_meta: AffiliateMeta;
    pdf_links?: PDFLinks;
    shipment_meta: ShipmentMeta;
    ad_id?: string;
    affiliate_bag_id: string;
    affiliate_id?: string;
    affiliate_shipment_id: string;
    affiliate_store_id: string;
    affiliate_order_id: string;
};
type ArticleDetails = {
    status?: any;
};
type Dimensions = {
    unit?: string;
    width?: number;
    is_default?: boolean;
    length?: number;
    height?: number;
};
type ReturnConfig = {
    unit?: string;
    returnable?: boolean;
    time?: number;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type Article = {
    code?: string;
    raw_meta?: any;
    uid: string;
    is_set?: boolean;
    seller_identifier: string;
    identifiers: Identifier;
    a_set?: any;
    dimensions?: Dimensions;
    esp_modified?: any;
    return_config?: ReturnConfig;
    size: string;
    weight?: Weight;
    _id: string;
    child_details?: any;
};
type BagGSTDetails = {
    is_default_hsn_code?: boolean;
    gst_fee: number;
    igst_tax_percentage: number;
    gst_tag: string;
    sgst_tax_percentage: number;
    gst_tax_percentage: number;
    hsn_code_id: string;
    cgst_gst_fee: string;
    hsn_code: string;
    igst_gst_fee: string;
    sgst_gst_fee: string;
    tax_collected_at_source: number;
    brand_calculated_amount: number;
    gstin_code?: string;
    value_of_good: number;
    cgst_tax_percentage: number;
};
type BagDetailsPlatformResponse = {
    restore_promos?: any;
    parent_promo_bags?: any;
    bag_status: BagStatusHistory[];
    applied_promos?: any[];
    meta?: BagMeta;
    ordering_store?: Store;
    restore_coupon?: boolean;
    dates?: Dates;
    b_type?: string;
    prices: Prices;
    quantity?: number;
    bag_status_history?: BagStatusHistory;
    brand: Brand;
    reasons?: any[];
    affiliate_bag_details: AffiliateBagDetails;
    status: BagReturnableCancelableStatus;
    financial_breakup: FinancialBreakup[];
    order_integration_id?: string;
    b_id: number;
    item: Item;
    current_operational_status: BagStatusHistory;
    no_of_bags_order?: number;
    entity_type?: string;
    seller_identifier?: string;
    journey_type: string;
    qc_required?: any;
    shipment_id?: string;
    current_status: BagStatusHistory;
    original_bag_list?: number[];
    tags?: string[];
    display_name?: string;
    affiliate_details?: AffiliateDetails;
    bag_update_time?: number;
    article_details?: ArticleDetails;
    article: Article;
    gst_details: BagGSTDetails;
    identifier?: string;
    line_number?: number;
    operational_status?: string;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    item_total: number;
    current: number;
    size: number;
    has_next: boolean;
    page_type: string;
};
type GetBagsPlatformResponse = {
    items: BagDetailsPlatformResponse[];
    page: Page1;
};
type InvalidateShipmentCachePayload = {
    shipment_ids: string[];
};
type InvalidateShipmentCacheNestedResponse = {
    message?: string;
    shipment_id?: string;
    status?: number;
    error?: string;
};
type InvalidateShipmentCacheResponse = {
    response?: InvalidateShipmentCacheNestedResponse[];
};
type ErrorResponse1 = {
    message: string;
    status: number;
    error_trace?: string;
};
type StoreReassign = {
    reason_ids?: number[];
    bag_id?: number;
    set_id?: string;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    mongo_article_id?: string;
    fynd_order_id?: string;
    item_id?: string;
    store_id: number;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
    affiliate_order_id?: string;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
};
type UpdateShipmentLockPayload = {
    action: string;
    entities: Entities[];
    action_type: string;
    entity_type: string;
};
type OriginalFilter = {
    affiliate_shipment_id?: string;
    affiliate_id?: string;
};
type Bags = {
    is_locked?: boolean;
    affiliate_bag_id?: string;
    affiliate_order_id?: string;
    bag_id?: number;
};
type CheckResponse = {
    lock_status?: boolean;
    original_filter?: OriginalFilter;
    status?: string;
    affiliate_id?: string;
    is_shipment_locked?: boolean;
    is_bag_locked?: boolean;
    bags?: Bags[];
    affiliate_shipment_id?: string;
    shipment_id?: string;
};
type UpdateShipmentLockResponse = {
    message?: string;
    check_response?: CheckResponse[];
    success?: boolean;
};
type AnnouncementResponse = {
    title?: string;
    to_datetime?: string;
    id: number;
    logo_url?: string;
    platform_id?: string;
    platform_name?: string;
    company_id?: number;
    description?: string;
    created_at?: string;
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
    call_id: string;
    status: boolean;
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
type ShipmentsRequest = {
    identifier: string;
    reasons?: ReasonsData;
    products?: Products[];
    data_updates?: DataUpdates;
};
type StatuesRequest = {
    status?: string;
    exclude_bags_next_state?: string;
    shipments?: ShipmentsRequest[];
};
type UpdateShipmentStatusRequest = {
    statuses?: StatuesRequest[];
    lock_after_transition?: boolean;
    task?: boolean;
    force_transition?: boolean;
    unlock_before_transition?: boolean;
};
type ShipmentsResponse = {
    meta?: any;
    message?: string;
    status?: number;
    identifier?: string;
    code?: string;
    final_state?: any;
    stack_trace?: string;
    exception?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryConfig = {
    inventory?: AffiliateInventoryStoreConfig;
    logistics?: AffiliateInventoryLogisticsConfig;
    order?: AffiliateInventoryOrderConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
    payment?: AffiliateInventoryPaymentConfig;
};
type AffiliateAppConfigMeta = {
    value: string;
    name: string;
};
type AffiliateAppConfig = {
    id: string;
    meta?: AffiliateAppConfigMeta[];
    owner: string;
    secret: string;
    updated_at: string;
    token: string;
    description?: string;
    created_at: string;
    name: string;
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
type AffiliateStoreIdMapping = {
    marketplace_store_id: string;
    store_id: number;
};
type OrderConfig = {
    article_lookup?: string;
    affiliate: Affiliate;
    create_user?: boolean;
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    bag_end_state?: string;
    store_lookup?: string;
};
type OrderPriority = {
    fulfilment_priority_text?: string;
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
};
type OrderUser = {
    pincode: string;
    state: string;
    address2?: string;
    address1?: string;
    country: string;
    city: string;
    mobile: number;
    last_name: string;
    email: string;
    phone: number;
    first_name: string;
};
type UserData = {
    billing_user?: OrderUser;
    shipping_user?: OrderUser;
};
type ArticleDetails1 = {
    _id: string;
    quantity: number;
    category: any;
    brand_id: number;
    attributes: any;
    dimension: any;
    weight: any;
};
type ShipmentDetails = {
    box_type?: string;
    meta?: any;
    shipments: number;
    affiliate_shipment_id: string;
    fulfillment_id: number;
    dp_id?: number;
    articles: ArticleDetails1[];
};
type LocationDetails = {
    fulfillment_type: string;
    fulfillment_id: number;
    articles: ArticleDetails1[];
};
type ShipmentConfig = {
    to_pincode: string;
    journey: string;
    payment_mode: string;
    source: string;
    action: string;
    identifier: string;
    shipment: ShipmentDetails[];
    location_details?: LocationDetails;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type MarketPlacePdf = {
    invoice?: string;
    label?: string;
};
type AffiliateBag = {
    _id: string;
    quantity: number;
    transfer_price: number;
    unit_price: number;
    affiliate_meta: any;
    item_id: number;
    avl_qty: number;
    delivery_charge: number;
    modified_on: string;
    affiliate_store_id: string;
    store_id: number;
    fynd_store_id: string;
    pdf_links?: MarketPlacePdf;
    company_id: number;
    sku: string;
    price_marked: number;
    price_effective: number;
    item_size: string;
    hsn_code_id: string;
    identifier: any;
    amount_paid: number;
    discount: number;
    seller_identifier: string;
};
type OrderInfo = {
    order_priority?: OrderPriority;
    user: UserData;
    payment_mode: string;
    shipping_address: OrderUser;
    order_value: number;
    affiliate_order_id?: string;
    coupon?: string;
    billing_address: OrderUser;
    shipment?: ShipmentData;
    bags: AffiliateBag[];
    cod_charges: number;
    discount: number;
    delivery_charges: number;
    payment?: any;
    items: any;
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
    message?: string;
    success?: boolean;
};
type ActionInfo = {
    slug: string;
    description: string;
    id: number;
    display_text: string;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    type: string;
    user: string;
    ticket_id?: string;
    bag_id?: number;
    message: string;
    l2_detail?: string;
    ticket_url?: string;
    l1_detail?: string;
    l3_detail?: string;
    createdat: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    payment_mode: string;
    country_code: string;
    message: string;
    order_id: string;
    customer_name: string;
    brand_name: string;
    shipment_id: number;
    amount_paid: number;
    phone_number: number;
};
type SendSmsPayload = {
    slug: string;
    data?: SmsDataPayload;
    bag_id: number;
};
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    bag_list?: number[];
    shipment_id?: string;
    meta: Meta;
    id: number;
    status?: string;
    remarks?: string;
};
type OrderDetails = {
    fynd_order_id?: string;
    created_at?: string;
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
    shipment_ids?: string[];
    order_type: string;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type BillingInfo = {
    title?: string;
    address2?: string;
    country_code?: string;
    alternate_mobile_number?: string;
    external_customer_code?: string;
    primary_mobile_number: string;
    pincode: string;
    house_no?: string;
    state: string;
    floor_no?: string;
    middle_name?: string;
    customer_code?: string;
    alternate_email?: string;
    country: string;
    primary_email: string;
    address1: string;
    city: string;
    last_name?: string;
    gender?: string;
    first_name: string;
    state_code?: string;
};
type PaymentMethod = {
    meta?: any;
    transaction_data?: any;
    mode: string;
    name: string;
    collect_by: string;
    refund_by: string;
    amount: number;
};
type PaymentInfo = {
    payment_methods?: PaymentMethod[];
    primary_mode: string;
};
type ProcessingDates = {
    dp_pickup_slot?: any;
    dispatch_by_date?: string;
    customer_pickup_slot?: any;
    dispatch_after_date?: string;
    pack_by_date?: string;
    confirm_by_date?: string;
};
type Tax = {
    rate: number;
    breakup?: any[];
    amount: any;
    name: string;
};
type Charge = {
    type: string;
    tax?: Tax;
    code?: string;
    name: string;
    amount: any;
};
type LineItem = {
    meta?: any;
    quantity?: number;
    external_line_id?: string;
    charges?: Charge[];
    custom_messasge?: string;
    seller_identifier: string;
};
type Shipment = {
    processing_dates?: ProcessingDates;
    priority?: number;
    external_shipment_id?: string;
    meta?: any;
    line_items: LineItem[];
    location_id: number;
};
type ShippingInfo = {
    title?: string;
    address2?: string;
    country_code?: string;
    alternate_mobile_number?: string;
    external_customer_code?: string;
    primary_mobile_number: string;
    pincode: string;
    house_no?: string;
    state: string;
    floor_no?: string;
    middle_name?: string;
    shipping_type?: string;
    geo_location?: any;
    customer_code?: string;
    address_type?: string;
    country: string;
    alternate_email?: string;
    primary_email: string;
    slot?: any[];
    landmark?: string;
    address1: string;
    city: string;
    last_name?: string;
    gender?: string;
    first_name: string;
    state_code?: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type CreateOrderAPI = {
    currency_info?: any;
    billing_info: BillingInfo;
    payment_info: PaymentInfo;
    meta?: any;
    shipments: Shipment[];
    shipping_info: ShippingInfo;
    charges?: Charge[];
    external_order_id?: string;
    tax_info?: TaxInfo;
    external_creation_date?: string;
};
type CreateOrderErrorReponse = {
    request_id?: string;
    meta?: string;
    message: string;
    status: number;
    code?: string;
    stack_trace?: string;
    info?: any;
    exception?: string;
};
type PaymentMethods = {
    collect_by?: string;
    refund_by?: string;
    mode?: string;
};
type CreateChannelPaymentInfo = {
    source?: string;
    payment_methods?: PaymentMethods[];
    mode_of_payment?: string;
};
type DpConfiguration = {
    shipping_by?: string;
};
type CreateChannelConfig = {
    location_reassignment?: boolean;
    payment_info?: CreateChannelPaymentInfo;
    dp_configuration?: DpConfiguration;
    logo_url?: any;
    shipment_assignment?: string;
    lock_states?: string[];
};
type CreateChannelConfigData = {
    config_data?: CreateChannelConfig;
};
type CreateChannelConfigResponse = {
    acknowledged?: boolean;
    is_upserted?: boolean;
    is_inserted?: boolean;
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
    end_date: string;
    order_details?: FyndOrderIdList[];
};
type GetSearchWordsData = {
    _custom_json?: any;
    uid?: string;
    result?: any;
    app_id?: string;
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
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    _custom_json?: any;
    uid?: string;
    results?: any[];
    app_id?: string;
    words?: string[];
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
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
    results?: AutocompleteResult[];
    app_id?: string;
    words?: string[];
    is_active?: boolean;
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
    max_quantity: number;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    product_uid: number;
};
type GetProductBundleCreateResponse = {
    modified_by?: any;
    slug: string;
    name: string;
    company_id?: number;
    created_on?: string;
    meta?: any;
    choice: string;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    page_visibility?: string[];
    logo?: string;
    created_by?: any;
    is_active: boolean;
    modified_on?: string;
    id?: string;
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleRequest = {
    modified_by?: any;
    slug: string;
    name: string;
    company_id?: number;
    created_on?: string;
    meta?: any;
    choice: string;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    page_visibility?: string[];
    logo?: string;
    created_by?: any;
    is_active: boolean;
    modified_on?: string;
};
type Size = {
    quantity?: number;
    is_available?: boolean;
    value?: string;
    display?: string;
};
type LimitedProductData = {
    quantity?: number;
    short_description?: string;
    slug?: string;
    name?: string;
    uid?: number;
    attributes?: any;
    images?: string[];
    sizes?: string[];
    item_code?: string;
    country_of_origin?: string;
    price?: any;
    identifier?: any;
};
type Price = {
    min_marked?: number;
    currency?: string;
    max_marked?: number;
    min_effective?: number;
    max_effective?: number;
};
type GetProducts = {
    min_quantity?: number;
    auto_select?: boolean;
    max_quantity?: number;
    auto_add_to_cart?: boolean;
    allow_remove?: boolean;
    sizes?: Size[];
    product_details?: LimitedProductData;
    product_uid?: number;
    price?: Price;
};
type GetProductBundleResponse = {
    slug?: string;
    name?: string;
    company_id?: number;
    products?: GetProducts[];
    meta?: any;
    choice?: string;
    same_store_assignment?: boolean;
    page_visibility?: string[];
    logo?: string;
    is_active?: boolean;
};
type ProductBundleUpdateRequest = {
    modified_by?: any;
    slug: string;
    name: string;
    company_id?: number;
    meta?: any;
    choice: string;
    same_store_assignment?: boolean;
    products: ProductBundleItem[];
    page_visibility?: string[];
    logo?: string;
    is_active: boolean;
    modified_on?: string;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    modified_by?: any;
    tag?: string;
    name: string;
    subtitle?: string;
    company_id?: number;
    guide?: Guide;
    active?: boolean;
    created_on?: string;
    image?: string;
    created_by?: any;
    id?: string;
    modified_on?: string;
    brand_id?: number;
    description?: string;
    title: string;
};
type SizeGuideResponse = {
    modified_by?: any;
    created_on?: string;
    name?: string;
    company_id?: number;
    guide?: any;
    tag?: string;
    active?: boolean;
    subtitle?: string;
    created_by?: any;
    id?: string;
    modified_on?: string;
    brand_id?: number;
    title?: string;
};
type MOQData = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type SEOData = {
    description?: any;
    title?: any;
};
type OwnerAppItemResponse = {
    is_gift?: boolean;
    is_cod?: boolean;
    moq?: MOQData;
    alt_text?: any;
    seo?: SEOData;
};
type ApplicationItemMOQ = {
    minimum?: number;
    maximum?: number;
    increment_unit?: number;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemSEO = {
    description?: any;
    title?: any;
};
type ApplicationItemMeta = {
    _custom_json?: any;
    is_gift?: boolean;
    is_cod?: boolean;
    moq?: ApplicationItemMOQ;
    alt_text?: any;
    _custom_meta?: MetaFields[];
    seo?: ApplicationItemSEO;
};
type SuccessResponse1 = {
    success?: boolean;
    uid?: number;
};
type GetConfigMetadataResponse = {
    values?: any[];
    condition?: any[];
    data: any[];
};
type PageResponseType = {
    total_count: number;
    current: number;
    has_next: boolean;
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
    slug?: string;
    unit?: string;
    name: string;
    logo?: string;
    is_active: boolean;
    display_type: string;
    key?: string;
    priority: number;
};
type AppConfigurationDetail = {
    template_slugs?: string[];
    slug: string;
    name?: string;
    is_default: boolean;
    attributes?: AttributeDetailsGroup[];
    app_id: string;
    logo?: string;
    is_active: boolean;
    priority: number;
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    name?: string;
    is_default: boolean;
    app_id: string;
    logo?: string;
    is_active: boolean;
    key: string;
    priority: number;
    default_key: string;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type MetaDataListingFilterMetaResponse = {
    units?: any[];
    display?: string;
    filter_types?: string[];
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
    variant?: any;
    similar?: any;
    detail?: any;
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
    bucket_points?: ConfigurationBucketPoints[];
    map_values?: any[];
    sort?: string;
    condition?: string;
    value?: string;
    map?: any;
};
type ConfigurationListingFilterConfig = {
    name?: string;
    logo?: string;
    type: string;
    value_config?: ConfigurationListingFilterValue;
    is_active: boolean;
    display_name?: string;
    key: string;
    priority: number;
};
type ConfigurationListingFilter = {
    allow_single: boolean;
    attribute_config?: ConfigurationListingFilterConfig[];
};
type ConfigurationListingSortConfig = {
    name?: string;
    logo?: string;
    is_active: boolean;
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
type ConfigurationProductVariantConfig = {
    name: string;
    size: ProductSize;
    logo?: string;
    is_active: boolean;
    display_type: string;
    key: string;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    subtitle?: string;
    size?: ProductSize;
    logo?: string;
    is_active: boolean;
    key: string;
    priority: number;
    title?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type AppCatalogConfiguration = {
    modified_by?: any;
    created_on?: string;
    modified_on?: string;
    app_id: string;
    created_by?: any;
    type?: string;
    listing?: ConfigurationListing;
    config_type: string;
    product?: ConfigurationProduct;
    config_id?: string;
    id?: string;
};
type GetAppCatalogConfiguration = {
    data?: AppCatalogConfiguration;
    is_default?: boolean;
};
type AppConfiguration = {
    modified_by?: any;
    created_on?: string;
    modified_on?: string;
    app_id: string;
    created_by?: any;
    type?: string;
    listing?: ConfigurationListing;
    config_type: string;
    product?: ConfigurationProduct;
    config_id?: string;
};
type GetCatalogConfigurationDetailsSchemaListing = {
    filter?: any;
    sort?: any;
};
type EntityConfiguration = {
    app_id: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
    config_type: string;
    product?: GetCatalogConfigurationDetailsProduct;
    config_id?: string;
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
type ProductFiltersValue = {
    value: any;
    display_format?: string;
    currency_code?: string;
    max?: number;
    currency_symbol?: string;
    query_format?: string;
    is_selected: boolean;
    selected_max?: number;
    count?: number;
    selected_min?: number;
    min?: number;
    display: string;
};
type ProductFiltersKey = {
    name: string;
    operators?: string[];
    logo?: string;
    kind?: string;
    display: string;
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
type Media1 = {
    type?: string;
    url: string;
    meta?: any;
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
    attribute: string;
    op: string;
    value: any[];
};
type GetCollectionDetailNest = {
    meta?: any;
    app_id?: string;
    badge?: any;
    type?: string;
    uid?: string;
    logo?: Media1;
    action?: Action;
    priority?: number;
    banners?: ImageUrls;
    visible_facets_keys?: string[];
    slug?: string;
    tag?: string[];
    allow_sort?: boolean;
    allow_facets?: boolean;
    description?: string;
    name?: string;
    cron?: any;
    is_active?: boolean;
    query?: CollectionQuery[];
    _schedule?: any;
};
type GetCollectionListingResponse = {
    filters?: CollectionListingFilter;
    items?: GetCollectionDetailNest[];
    page?: Page;
};
type UserInfo = {
    email?: string;
    username?: string;
    uid?: string;
    user_id?: string;
};
type CollectionBadge = {
    color?: string;
    text?: string;
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
    description?: string;
    title?: string;
};
type CollectionSchedule = {
    cron?: string;
    duration?: number;
    end?: string;
    start?: string;
    next_schedule?: NextSchedule[];
};
type CreateCollection = {
    meta?: any;
    app_id: string;
    created_by?: UserInfo;
    badge?: CollectionBadge;
    type: string;
    published?: boolean;
    sort_on?: string;
    is_visible?: boolean;
    logo: CollectionImage;
    banners: CollectionBanner;
    priority?: number;
    visible_facets_keys?: string[];
    slug: string;
    tags?: string[];
    allow_sort?: boolean;
    seo?: SeoDetail;
    allow_facets?: boolean;
    description?: string;
    modified_by?: UserInfo;
    _custom_json?: any;
    name: string;
    is_active?: boolean;
    query?: CollectionQuery[];
    _schedule?: CollectionSchedule;
    _locale_language?: any;
};
type CollectionCreateResponse = {
    meta?: any;
    app_id?: string;
    badge?: any;
    type?: string;
    sort_on?: string;
    logo?: BannerImage;
    priority?: number;
    banners?: ImageUrls;
    visible_facets_keys?: string[];
    slug?: string;
    tag?: string[];
    allow_sort?: boolean;
    allow_facets?: boolean;
    description?: string;
    name?: string;
    cron?: any;
    is_active?: boolean;
    query?: CollectionQuery[];
    _schedule?: any;
};
type CollectionDetailResponse = {
    slug?: string;
    name?: string;
    tag?: string[];
    _schedule?: any;
    meta?: any;
    app_id?: string;
    logo?: Media1;
    cron?: any;
    allow_sort?: boolean;
    type?: string;
    badge?: any;
    is_active?: boolean;
    query?: CollectionQuery[];
    priority?: number;
    banners?: ImageUrls;
    allow_facets?: boolean;
    visible_facets_keys?: string[];
    description?: string;
};
type UpdateCollection = {
    meta?: any;
    badge?: CollectionBadge;
    published?: boolean;
    type?: string;
    sort_on?: string;
    is_visible?: boolean;
    logo?: CollectionImage;
    banners?: CollectionBanner;
    priority?: number;
    visible_facets_keys?: string[];
    slug?: string;
    tags?: string[];
    allow_sort?: boolean;
    seo?: SeoDetail;
    allow_facets?: boolean;
    description?: string;
    modified_by?: UserInfo;
    _custom_json?: any;
    name?: string;
    is_active?: boolean;
    query?: CollectionQuery[];
    _schedule?: CollectionSchedule;
    _locale_language?: any;
};
type ProductBrand = {
    action?: Action;
    logo?: Media1;
    name?: string;
    uid?: number;
};
type ProductDetailAttribute = {
    type?: string;
    value?: string;
    key?: string;
};
type ProductDetailGroupedAttribute = {
    details?: ProductDetailAttribute[];
    title?: string;
};
type Price1 = {
    max?: number;
    currency_code?: string;
    min?: number;
    currency_symbol?: string;
};
type ProductListingPrice = {
    effective?: Price1;
    marked?: Price1;
};
type ProductListingDetail = {
    discount?: string;
    item_type?: string;
    rating?: number;
    type?: string;
    brand?: ProductBrand;
    similars?: string[];
    sellable?: boolean;
    uid?: number;
    has_variant?: boolean;
    tryouts?: string[];
    product_online_date?: string;
    medias?: Media1[];
    highlights?: string[];
    slug: string;
    attributes?: any;
    rating_count?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    teaser_tag?: any;
    item_code?: string;
    color?: string;
    description?: string;
    short_description?: string;
    name?: string;
    promo_meta?: any;
    image_nature?: string;
    price?: ProductListingPrice;
};
type GetCollectionItemsResponse = {
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    page?: Page;
    sort_on?: ProductSortOn[];
};
type ItemQueryForUserCollection = {
    action?: string;
    item_id?: number;
};
type CollectionItemRequest = {
    item?: ItemQueryForUserCollection[];
    query?: CollectionQuery[];
    type?: string;
};
type UpdatedResponse = {
    message?: string;
    items_not_updated?: number[];
};
type CatalogInsightItem = {
    count?: number;
    out_of_stock_count?: number;
    sellable_count?: number;
};
type CatalogInsightBrand = {
    name?: string;
    total_articles?: number;
    available_sizes?: number;
    available_articles?: number;
    total_sizes?: number;
    article_freshness?: number;
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
    opt_level: string;
    store_ids?: number[];
    enabled?: boolean;
    company_id?: number;
    platform?: string;
    brand_ids?: number[];
};
type CompanyOptIn = {
    opt_level: string;
    store_ids: number[];
    enabled: boolean;
    company_id: number;
    created_on: number;
    platform: string;
    modified_by?: any;
    created_by?: any;
    brand_ids: number[];
    modified_on: number;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    company_type?: string;
    name?: string;
    uid?: number;
    business_type?: string;
};
type CompanyBrandDetail = {
    brand_id?: number;
    company_id?: number;
    total_article?: number;
    brand_name?: string;
};
type OptinCompanyBrandDetailsView = {
    items?: CompanyBrandDetail[];
    page?: Page;
};
type OptinCompanyMetrics = {
    store?: number;
    company?: string;
    brand?: number;
};
type StoreDetail = {
    store_type?: string;
    created_on?: string;
    name?: string;
    uid?: number;
    company_id?: number;
    address?: any;
    display_name?: string;
    store_code?: string;
    manager?: any;
    documents?: any[];
    additional_contacts?: any[];
    modified_on?: string;
    timing?: any;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
};
type AttributeMasterFilter = {
    indexing: boolean;
    priority?: number;
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
    mandatory?: boolean;
    type: string;
    range?: AttributeSchemaRange;
    allowed_values?: string[];
    format?: string;
    multi?: boolean;
};
type GenderDetail = {
    slug?: string;
    name?: string;
    filters?: AttributeMasterFilter;
    enabled_for_end_consumer?: boolean;
    meta?: AttributeMasterMeta;
    details?: AttributeMasterDetails;
    logo?: string;
    id?: string;
    is_nested?: boolean;
    departments?: string[];
    schema?: AttributeMaster;
    description?: string;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    errors?: any;
    meta?: any;
    status?: number;
    code?: string;
};
type UserSerializer = {
    uid?: string;
    contact?: string;
    user_id?: string;
    username?: string;
    _id?: string;
};
type GetDepartment = {
    modified_by?: UserSerializer;
    slug?: string;
    name?: string;
    uid?: number;
    synonyms?: string[];
    created_on?: string;
    page_no?: number;
    page_size?: number;
    search?: string;
    item_type?: string;
    logo?: string;
    created_by?: UserSerializer;
    is_active?: boolean;
    modified_on?: string;
    priority_order?: number;
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    errors?: any;
    meta?: any;
    status?: number;
    code?: string;
};
type DepartmentCreateUpdate = {
    platforms?: any;
    synonyms?: string[];
    name: string;
    uid?: number;
    slug?: string;
    tags?: string[];
    _custom_json?: any;
    logo: string;
    is_active?: boolean;
    _cls?: string;
    priority_order: number;
};
type DepartmentCreateResponse = {
    message: string;
    uid: number;
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
    modified_by?: UserDetail;
    created_on: string;
    slug?: any;
    uid?: number;
    modified_on: string;
    name: any;
    synonyms?: any[];
    _custom_json?: any;
    logo: string;
    created_by?: UserDetail;
    is_active?: boolean;
    verified_by?: UserDetail;
    _cls?: any;
    _id?: any;
    priority_order: number;
    verified_on?: string;
};
type ProductTemplate = {
    modified_by?: any;
    slug: string;
    name?: string;
    tag?: string;
    is_archived?: boolean;
    attributes?: string[];
    created_on?: string;
    logo?: string;
    created_by?: any;
    categories?: string[];
    is_expirable: boolean;
    is_active?: boolean;
    departments?: string[];
    is_physical: boolean;
    modified_on?: string;
    description?: string;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    slug: string;
    name?: string;
    tag?: string;
    is_archived?: boolean;
    attributes?: string[];
    logo?: string;
    id?: string;
    categories?: string[];
    is_expirable: boolean;
    is_active?: boolean;
    departments?: string[];
    is_physical: boolean;
    description?: string;
};
type Properties = {
    product_group_tag?: any;
    category_slug?: any;
    item_type?: any;
    product_publish?: any;
    return_config?: any;
    trader_type?: any;
    command?: any;
    currency?: any;
    hsn_code?: any;
    highlights?: any;
    slug?: any;
    tags?: any;
    multi_size?: any;
    is_dependent?: any;
    teaser_tag?: any;
    item_code?: any;
    brand_uid?: any;
    description?: any;
    short_description?: any;
    media?: any;
    name?: any;
    trader?: any;
    is_active?: any;
    country_of_origin?: any;
    no_of_boxes?: any;
    variants?: any;
    sizes?: any;
    size_guide?: any;
    custom_order?: any;
};
type GlobalValidation = {
    definitions?: any;
    properties?: Properties;
    type?: string;
    required?: string[];
    title?: string;
    description?: string;
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
type ProductDownloadItemsData = {
    templates?: string[];
    brand?: string[];
    type?: string;
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    seller_id?: number;
    data?: ProductDownloadItemsData;
    template_tags?: any;
    status?: string;
    url?: string;
    trigger_on?: string;
    created_by?: VerifiedBy;
    completed_on?: string;
    task_id?: string;
    id?: string;
};
type ProductDownloadsResponse = {
    items?: ProductDownloadsItems;
    page?: Page;
};
type ProductConfigurationDownloads = {
    multivalue?: boolean;
    data?: any[];
};
type Media2 = {
    logo: string;
    portrait: string;
    landscape: string;
};
type Hierarchy = {
    l1: number;
    l2: number;
    department: number;
};
type CategoryMappingValues = {
    catalog_id?: number;
    name: string;
};
type CategoryMapping = {
    facebook?: CategoryMappingValues;
    ajio?: CategoryMappingValues;
    google?: CategoryMappingValues;
};
type Category = {
    modified_by?: any;
    media?: Media2;
    name: string;
    uid?: number;
    slug?: string;
    created_on?: string;
    tryouts?: string[];
    level: number;
    created_by?: any;
    is_active: boolean;
    departments: number[];
    hierarchy?: Hierarchy[];
    marketplaces?: CategoryMapping;
    priority?: number;
    modified_on?: string;
    synonyms?: string[];
    id?: string;
};
type CategoryResponse = {
    items?: Category[];
    page?: Page;
};
type CategoryRequestBody = {
    media?: Media2;
    name: string;
    slug?: string;
    tryouts?: string[];
    level: number;
    is_active: boolean;
    departments: number[];
    hierarchy?: Hierarchy[];
    marketplaces?: CategoryMapping;
    priority?: number;
    synonyms?: string[];
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type SingleCategoryResponse = {
    data?: Category;
};
type CategoryUpdateResponse = {
    success?: boolean;
    message?: string;
};
type ProductPublished = {
    product_online_date?: number;
    is_set?: boolean;
};
type ReturnConfigResponse = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Logo = {
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type Image = {
    secure_url?: string;
    url?: string;
    aspect_ratio?: string;
    aspect_ratio_f?: number;
};
type NetQuantityResponse = {
    unit?: string;
    value?: number;
};
type Product = {
    product_group_tag?: string[];
    category_slug?: string;
    item_type?: string;
    product_publish?: ProductPublished;
    is_set?: boolean;
    return_config?: ReturnConfigResponse;
    created_by?: any;
    pending?: string;
    all_identifiers?: string[];
    departments?: number[];
    brand?: Brand;
    primary_color?: string;
    category_uid?: number;
    variant_group?: any;
    created_on?: string;
    variant_media?: any;
    uid?: number;
    currency?: string;
    is_physical?: boolean;
    hsn_code?: string;
    highlights?: string[];
    modified_on?: string;
    id?: string;
    slug?: string;
    company_id?: number;
    tags?: string[];
    images?: Image[];
    attributes?: any;
    tax_identifier?: any;
    multi_size?: boolean;
    is_dependent?: boolean;
    net_quantity?: NetQuantityResponse;
    verified_by?: VerifiedBy;
    teaser_tag?: any;
    template_tag?: string;
    item_code?: string;
    stage?: string;
    brand_uid?: number;
    color?: string;
    is_image_less_product?: boolean;
    verified_on?: string;
    description?: string;
    short_description?: string;
    modified_by?: any;
    _custom_json?: any;
    name?: string;
    media?: Media1[];
    trader?: any[];
    all_company_ids?: number[];
    moq?: any;
    l3_mapping?: string[];
    is_expirable?: boolean;
    is_active?: boolean;
    country_of_origin?: string;
    sizes?: any[];
    variants?: any;
    category?: any;
    no_of_boxes?: number;
    all_sizes?: any[];
    size_guide?: string;
    image_nature?: string;
    custom_order?: any;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductPublish = {
    product_online_date?: string;
    is_set?: boolean;
};
type TaxIdentifier = {
    hsn_code?: string;
    hsn_code_id?: string;
    reporting_hsn?: string;
};
type NetQuantity = {
    unit?: any;
    value?: number;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type Trader = {
    address?: string[];
    name: any;
    type?: string;
};
type CustomOrder = {
    manufacturing_time?: number;
    is_custom_order?: boolean;
    manufacturing_time_unit?: string;
};
type ProductCreateUpdateSchemaV2 = {
    product_group_tag?: string[];
    category_slug: string;
    item_type: string;
    product_publish?: ProductPublish;
    is_set?: boolean;
    return_config: ReturnConfig;
    departments: number[];
    variant_group?: any;
    variant_media?: any;
    uid?: number;
    currency: string;
    highlights?: string[];
    change_request_id?: any;
    action?: string;
    bulk_job_id?: string;
    slug: string;
    company_id: number;
    tags?: string[];
    attributes?: any;
    tax_identifier: TaxIdentifier;
    requester?: string;
    is_dependent?: boolean;
    multi_size?: boolean;
    net_quantity?: NetQuantity;
    teaser_tag?: TeaserTag;
    template_tag: string;
    item_code: string;
    brand_uid: number;
    is_image_less_product?: boolean;
    description?: string;
    short_description?: string;
    media?: Media1[];
    name: string;
    trader: Trader[];
    _custom_json?: any;
    is_active?: boolean;
    country_of_origin: string;
    no_of_boxes?: number;
    variants?: any;
    sizes: any[];
    size_guide?: string;
    custom_order?: CustomOrder;
};
type ProductVariants = {
    media?: Media1[];
    name?: string;
    uid?: number;
    item_code?: string;
    brand_uid?: number;
    category_uid?: number;
};
type ProductVariantsResponse = {
    page?: Page;
    variants?: ProductVariants[];
};
type AttributeMasterSerializer = {
    raw_key?: string;
    unit?: string;
    enabled_for_end_consumer?: boolean;
    created_by?: any;
    departments: string[];
    created_on?: string;
    logo?: string;
    modified_on?: string;
    synonyms?: any;
    slug: string;
    tags?: string[];
    suggestion?: string;
    description?: string;
    modified_by?: any;
    name?: string;
    filters: AttributeMasterFilter;
    details: AttributeMasterDetails;
    is_nested?: boolean;
    variant?: boolean;
    schema: AttributeMaster;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    gtin_type: string;
    primary?: boolean;
    gtin_value: string;
};
type AllSizes = {
    identifiers?: ValidateIdentifier[];
    item_weight: number;
    size: any;
    item_length: number;
    item_height: number;
    item_weight_unit_of_measure: any;
    item_dimensions_unit_of_measure: string;
    item_width: number;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserDetail1 = {
    user_id?: string;
    username?: string;
    full_name?: string;
};
type ProductBulkRequest = {
    succeed?: number;
    cancelled?: number;
    created_on?: string;
    modified_by?: UserDetail1;
    company_id?: number;
    failed?: number;
    template?: ProductTemplate;
    created_by?: UserDetail1;
    total?: number;
    is_active?: boolean;
    stage?: string;
    template_tag?: string;
    failed_records?: string[];
    modified_on?: string;
    file_path?: string;
    cancelled_records?: string[];
};
type ProductBulkRequestList = {
    items?: ProductBulkRequest;
    page?: Page;
};
type UserInfo1 = {
    email?: string;
    username?: string;
    uid?: string;
    user_id?: string;
};
type BulkJob = {
    succeed?: number;
    modified_by?: UserInfo1;
    created_on: string;
    cancelled?: number;
    company_id: number;
    failed?: number;
    created_by?: UserInfo1;
    tracking_url?: string;
    total?: number;
    is_active?: boolean;
    stage?: string;
    template_tag?: string;
    custom_template_tag?: string;
    failed_records?: any[];
    modified_on?: string;
    file_path?: string;
    cancelled_records?: any[];
};
type BulkResponse = {
    modified_by?: UserInfo1;
    created_on: string;
    batch_id: string;
    created_by?: UserInfo1;
    is_active?: boolean;
    modified_on?: string;
};
type BulkProductRequest = {
    batch_id: string;
    company_id: number;
    template_tag: string;
    data: any[];
};
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type UserCommon = {
    user_id?: string;
    username?: string;
    company_id?: number;
};
type Items = {
    succeed?: number;
    modified_by?: UserCommon;
    created_on?: string;
    retry?: number;
    failed?: number;
    company_id?: number;
    cancelled?: number;
    created_by?: UserCommon;
    tracking_url?: string;
    total?: number;
    is_active?: boolean;
    stage?: string;
    failed_records?: string[];
    modified_on?: string;
    file_path?: string;
    cancelled_records?: string[];
    id?: string;
};
type BulkAssetResponse = {
    items?: Items[];
    page?: Page;
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
    quantity?: number;
    inventory_updated_on?: string;
    seller_identifier?: string;
    identifiers?: any;
    uid?: string;
    sellable_quantity?: number;
    size?: string;
    item_id?: number;
    currency?: string;
    price_transfer?: number;
    store?: any;
    price_effective?: number;
    price?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ItemQuery = {
    brand_uid?: number;
    uid?: number;
    item_code?: string;
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
    quantity?: number;
    name?: string;
    size_distribution: SizeDistribution;
};
type InvSize = {
    quantity: number;
    identifiers: GTIN[];
    expiration_date?: string;
    item_weight?: number;
    size: any;
    is_set?: boolean;
    item_length?: number;
    item_height?: number;
    price?: number;
    item_weight_unit_of_measure?: string;
    item_dimensions_unit_of_measure?: string;
    store_code: string;
    currency: string;
    price_transfer?: number;
    item_width?: number;
    price_effective: number;
    set?: InventorySet;
};
type InventoryRequest = {
    item: ItemQuery;
    company_id: number;
    sizes: InvSize[];
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
type ManufacturerResponse = {
    name: string;
    is_default: boolean;
    address: string;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    not_available?: QuantityBase;
    damaged?: QuantityBase;
    order_committed?: QuantityBase;
    sellable?: QuantityBase;
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
    unit: string;
    is_default: boolean;
    height: number;
    width: number;
    length: number;
};
type Trader1 = {
    address: string[];
    name: string;
    type: string;
};
type PriceMeta = {
    effective: number;
    updated_at?: string;
    currency: string;
    tp_notes?: any;
    transfer: number;
    marked: number;
};
type InventorySellerResponse = {
    expiration_date?: string;
    meta?: any;
    is_set?: boolean;
    return_config?: ReturnConfig1;
    created_by?: UserSerializer;
    set?: InventorySet;
    brand: BrandMeta;
    added_on_store?: string;
    manufacturer: ManufacturerResponse;
    quantities?: Quantities;
    track_inventory?: boolean;
    seller_identifier: string;
    fynd_meta?: any;
    uid: string;
    weight: WeightResponse;
    size: string;
    item_id: number;
    total_quantity: number;
    company: CompanyMeta;
    identifier: any;
    fynd_article_code: string;
    dimension: DimensionResponse;
    tags?: string[];
    fynd_item_code: string;
    tax_identifier?: any;
    stage?: string;
    store: StoreMeta;
    raw_meta?: any;
    modified_by?: UserSerializer;
    trader?: Trader1[];
    _custom_json?: any;
    trace_id?: string;
    fragile: boolean;
    is_active?: boolean;
    country_of_origin: string;
    price: PriceMeta;
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
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type ManufacturerResponse1 = {
    name?: string;
    is_default?: boolean;
    address?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    not_available?: Quantity;
    damaged?: Quantity;
    order_committed?: Quantity;
    sellable?: Quantity;
};
type WeightResponse1 = {
    unit?: string;
    shipping?: number;
};
type CompanyMeta1 = {
    id?: number;
};
type DimensionResponse1 = {
    height?: number;
    unit?: string;
    width?: number;
    length?: number;
};
type ArticleStoreResponse = {
    store_type?: string;
    store_code?: string;
    name?: string;
    uid?: number;
};
type Trader2 = {
    address?: string[];
    name?: string;
    type?: string;
};
type PriceArticle = {
    effective?: number;
    currency?: string;
    tp_notes?: any;
    transfer?: number;
    marked?: number;
};
type GetInventories = {
    expiration_date?: string;
    is_set?: boolean;
    return_config?: ReturnConfig2;
    created_by?: UserSerializer;
    brand?: BrandMeta1;
    manufacturer?: ManufacturerResponse1;
    quantities?: QuantitiesArticle;
    track_inventory?: boolean;
    seller_identifier?: string;
    inventory_updated_on?: string;
    uid?: string;
    weight?: WeightResponse1;
    size?: string;
    item_id?: number;
    date_meta?: DateMeta;
    total_quantity?: number;
    company?: CompanyMeta1;
    identifier?: any;
    id?: string;
    dimension?: DimensionResponse1;
    tags?: string[];
    tax_identifier?: any;
    stage?: string;
    store?: ArticleStoreResponse;
    platforms?: any;
    modified_by?: UserSerializer;
    trader?: Trader2[];
    trace_id?: string;
    country_of_origin?: string;
    price?: PriceArticle;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    succeed?: number;
    cancelled?: number;
    created_on?: string;
    modified_by?: any;
    company_id?: number;
    failed?: number;
    created_by?: any;
    total?: number;
    is_active?: boolean;
    stage?: string;
    failed_records?: string[];
    modified_on?: string;
    file_path?: string;
    cancelled_records?: string[];
    id?: string;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    seller_identifier: string;
    quantity?: number;
    price_marked?: number;
    expiration_date?: string;
    tags?: string[];
    trace_id?: string;
    total_quantity?: number;
    store_code: string;
    currency?: string;
    item_weight_unit_of_measure?: string;
    item_dimensions_unit_of_measure?: string;
    price_effective?: number;
    price?: number;
};
type InventoryBulkRequest = {
    batch_id: string;
    user?: any;
    company_id: number;
    sizes: InventoryJobPayload[];
};
type InventoryExportJob = {
    seller_id: number;
    status?: string;
    url?: string;
    trigger_on?: string;
    request_params?: any;
    completed_on?: string;
    task_id: string;
};
type InventoryExportRequest = {
    store?: number[];
    brand?: number[];
    type?: string;
};
type InventoryExportResponse = {
    seller_id: number;
    status?: string;
    trigger_on?: string;
    request_params?: any;
    task_id: string;
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
    store_id: number;
    price_marked?: number;
    expiration_date?: string;
    tags?: string[];
    trace_id?: string;
    total_quantity?: number;
    price_effective?: number;
};
type InventoryRequestSchemaV2 = {
    company_id: number;
    payload?: InventoryPayload[];
    meta?: any;
};
type InventoryFailedReason = {
    message: string;
    errors?: string;
};
type InventoryResponseItem = {
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    message: string;
    items?: InventoryResponseItem[];
};
type HsnCodesObject = {
    company_id?: number;
    tax_on_esp?: boolean;
    threshold1?: number;
    tax2?: number;
    hs2_code?: string;
    threshold2?: number;
    hsn_code?: string;
    tax1?: number;
    tax_on_mrp?: boolean;
    modified_on?: string;
    id?: string;
};
type PageResponse = {
    current?: string;
    size?: number;
    item_total?: number;
    has_next?: boolean;
    has_previous?: boolean;
};
type HsnCodesListingResponse = {
    items?: HsnCodesObject[];
    page?: PageResponse;
};
type HsnUpsert = {
    company_id: number;
    uid?: number;
    tax_on_esp?: boolean;
    threshold1: number;
    tax2?: number;
    hs2_code: string;
    threshold2?: number;
    is_active?: boolean;
    hsn_code: string;
    tax1: number;
    tax_on_mrp: boolean;
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
    threshold: number;
    cess?: number;
    effective_date: string;
};
type HSNDataInsertV2 = {
    modified_by?: any;
    created_on?: string;
    taxes: TaxSlab[];
    created_by?: any;
    country_code: string;
    type: string;
    hsn_code: string;
    modified_on?: string;
    reporting_hsn: string;
    description: string;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    slug?: string;
    name?: string;
    uid?: number;
    discount?: string;
    logo?: Media;
    departments?: string[];
    action?: Action;
    banners?: ImageUrls;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    slug?: string;
    name?: string;
    uid?: number;
    logo?: Media;
    priority_order?: number;
};
type DepartmentResponse = {
    items?: Department[];
};
type DepartmentIdentifier = {
    slug?: string;
    uid?: number;
};
type ThirdLevelChild = {
    slug?: string;
    name?: string;
    uid?: number;
    _custom_json?: any;
    childs?: any[];
    action?: Action;
    banners?: ImageUrls;
};
type SecondLevelChild = {
    slug?: string;
    name?: string;
    uid?: number;
    _custom_json?: any;
    childs?: ThirdLevelChild[];
    action?: Action;
    banners?: ImageUrls;
};
type Child = {
    slug?: string;
    name?: string;
    uid?: number;
    _custom_json?: any;
    childs?: SecondLevelChild[];
    action?: Action;
    banners?: ImageUrls;
};
type CategoryItems = {
    slug?: string;
    name?: string;
    uid?: number;
    childs?: Child[];
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
    filters?: ProductFilters[];
    page: Page;
    sort_on?: ProductSortOn[];
    operators?: any;
    items?: ProductListingDetail[];
};
type ProductDetail = {
    item_type?: string;
    rating?: number;
    type?: string;
    brand?: ProductBrand;
    similars?: string[];
    uid?: number;
    has_variant?: boolean;
    tryouts?: string[];
    product_online_date?: string;
    medias?: Media1[];
    highlights?: string[];
    slug: string;
    attributes?: any;
    rating_count?: number;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    teaser_tag?: any;
    item_code?: string;
    color?: string;
    description?: string;
    short_description?: string;
    name?: string;
    promo_meta?: any;
    image_nature?: string;
};
type InventoryPage = {
    next_id?: string;
    type: string;
    item_total: number;
    has_next?: boolean;
    has_previous?: boolean;
};
type InventoryStockResponse = {
    items?: any[];
    page: InventoryPage;
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
    quantity?: number;
    meta?: any;
    group_id?: string;
    query?: ArticleQuery;
    article_assignment?: ArticleAssignment;
};
type AssignStore = {
    store_ids?: number[];
    company_id?: number;
    channel_identifier?: string;
    app_id: string;
    pincode: string;
    channel_type?: string;
    articles: AssignStoreArticle[];
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    quantity: number;
    store_id?: number;
    uid?: string;
    company_id?: number;
    price_marked?: number;
    meta?: any;
    size: string;
    item_id: number;
    status: boolean;
    group_id?: string;
    s_city?: string;
    index?: number;
    strategy_wise_listing?: any[];
    article_assignment: ArticleAssignment1;
    store_pincode?: number;
    _id?: string;
    price_effective?: number;
};
type SellerPhoneNumber = {
    country_code: number;
    number: string;
};
type UserSerializer1 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type LocationManagerSerializer = {
    email?: string;
    mobile_no: SellerPhoneNumber;
    name?: string;
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
type UserSerializer2 = {
    user_id?: string;
    username?: string;
    contact?: string;
};
type GetAddressSerializer = {
    latitude?: number;
    state?: string;
    country?: string;
    address_type?: string;
    address2?: string;
    country_code?: string;
    pincode?: number;
    landmark?: string;
    longitude?: number;
    city?: string;
    address1?: string;
};
type GetCompanySerializer = {
    modified_by?: UserSerializer2;
    created_on?: string;
    name?: string;
    uid?: number;
    addresses?: GetAddressSerializer[];
    company_type?: string;
    created_by?: UserSerializer2;
    reject_reason?: string;
    verified_by?: UserSerializer2;
    stage?: string;
    business_type?: string;
    modified_on?: string;
    verified_on?: string;
};
type LocationTimingSerializer = {
    hour?: number;
    minute?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    open: boolean;
    opening?: LocationTimingSerializer;
    weekday: string;
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetLocationSerializer = {
    contact_numbers?: SellerPhoneNumber[];
    created_by?: UserSerializer1;
    manager?: LocationManagerSerializer;
    integration_type?: LocationIntegrationType;
    created_on?: string;
    uid?: number;
    code: string;
    gst_credentials?: InvoiceDetailsSerializer;
    company?: GetCompanySerializer;
    modified_on?: string;
    timing?: LocationDayWiseSerializer[];
    notification_emails?: string[];
    warnings?: any;
    display_name: string;
    verified_by?: UserSerializer1;
    stage?: string;
    product_return_config?: ProductReturnConfigSerializer;
    verified_on?: string;
    store_type?: string;
    modified_by?: UserSerializer1;
    _custom_json?: any;
    name: string;
    address: GetAddressSerializer;
    phone_number: string;
    documents?: Document[];
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
    name?: string;
    uid: number;
    app_id: string;
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
type CompanyTaxesSerializer = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
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
type GetCompanyProfileSerializerResponse = {
    business_country_info?: BusinessCountryInfo;
    taxes?: CompanyTaxesSerializer[];
    business_details?: BusinessDetails;
    created_by?: UserSerializer;
    stage?: string;
    business_type: string;
    modified_by?: UserSerializer;
    company_type: string;
    modified_on?: string;
    documents?: Document[];
    contact_details?: ContactDetails;
    business_info?: string;
    notification_emails?: string[];
    uid: number;
    created_on?: string;
    name?: string;
    _custom_json?: any;
    addresses?: GetAddressSerializer[];
    franchise_enabled?: boolean;
    verified_by?: UserSerializer;
    warnings?: any;
    mode?: string;
    verified_on?: string;
};
type CompanyTaxesSerializer1 = {
    rate?: number;
    effective_date?: string;
    enable?: boolean;
};
type CreateUpdateAddressSerializer = {
    address1: string;
    pincode: number;
    country: string;
    latitude: number;
    landmark?: string;
    city: string;
    country_code?: string;
    address2?: string;
    state: string;
    address_type: string;
    longitude: number;
};
type UpdateCompany = {
    franchise_enabled?: boolean;
    contact_details?: ContactDetails;
    business_info?: string;
    company_type?: string;
    taxes?: CompanyTaxesSerializer1[];
    notification_emails?: string[];
    warnings?: any;
    business_details?: BusinessDetails;
    reject_reason?: string;
    _custom_json?: any;
    name?: string;
    documents?: Document[];
    business_type?: string;
    addresses?: CreateUpdateAddressSerializer[];
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
    brand?: DocumentsObj;
    uid?: number;
    company_documents?: DocumentsObj;
    store_documents?: DocumentsObj;
    stage?: string;
    product?: DocumentsObj;
    store?: DocumentsObj;
};
type BrandBannerSerializer = {
    landscape?: string;
    portrait?: string;
};
type GetBrandResponseSerializer = {
    created_by?: UserSerializer;
    stage?: string;
    slug_key?: string;
    modified_by?: UserSerializer;
    modified_on?: string;
    banner?: BrandBannerSerializer;
    logo?: string;
    reject_reason?: string;
    uid?: number;
    created_on?: string;
    name: string;
    _custom_json?: any;
    _locale_language?: any;
    verified_by?: UserSerializer;
    warnings?: any;
    mode?: string;
    description?: string;
    verified_on?: string;
    synonyms?: string[];
};
type CreateUpdateBrandRequestSerializer = {
    brand_tier?: string;
    _locale_language?: any;
    banner?: BrandBannerSerializer;
    description?: string;
    logo: string;
    uid?: number;
    name: string;
    synonyms?: string[];
    _custom_json?: any;
    company_id?: number;
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
    business_country_info?: BusinessCountryInfo;
    market_channels?: string[];
    company_type: string;
    verified_by?: UserSerializer;
    modified_on?: string;
    notification_emails?: string[];
    reject_reason?: string;
    uid?: number;
    _custom_json?: any;
    verified_on?: string;
    created_on?: string;
    created_by?: UserSerializer;
    name?: string;
    stage?: string;
    details?: CompanyDetails;
    business_type: string;
    addresses?: GetAddressSerializer[];
    modified_by?: UserSerializer;
};
type CompanyBrandSerializer = {
    brand?: GetBrandResponseSerializer;
    verified_by?: UserSerializer;
    modified_on?: string;
    warnings?: any;
    reject_reason?: string;
    uid?: number;
    verified_on?: string;
    created_on?: string;
    created_by?: UserSerializer;
    stage?: string;
    company?: CompanySerializer;
    modified_by?: UserSerializer;
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
    date: HolidayDateSerializer;
    holiday_type: string;
    title: string;
};
type AddressSerializer = {
    address1?: string;
    pincode?: number;
    country?: string;
    latitude: number;
    landmark?: string;
    city?: string;
    address_type?: string;
    address2?: string;
    state?: string;
    country_code?: string;
    longitude: number;
};
type LocationSerializer = {
    address: AddressSerializer;
    timing?: LocationDayWiseSerializer[];
    notification_emails?: string[];
    warnings?: any;
    store_type?: string;
    uid?: number;
    code: string;
    name: string;
    display_name: string;
    documents?: Document[];
    manager?: LocationManagerSerializer;
    stage?: string;
    company: number;
    _custom_json?: any;
    contact_numbers?: SellerPhoneNumber[];
    product_return_config?: ProductReturnConfigSerializer;
    gst_credentials?: InvoiceDetailsSerializer;
    holiday?: HolidaySchemaSerializer[];
};
type BulkLocationSerializer = {
    data?: LocationSerializer[];
};
type _ArticleAssignment = {
    strategy?: string;
    level?: string;
};
type _ArticleQuery = {
    ignored_stores?: number[];
    item_id?: number;
    size?: string;
};
type _AssignStoreArticle = {
    quantity?: number;
    meta?: any;
    group_id?: string;
    article_assignment?: _ArticleAssignment;
    query?: _ArticleQuery;
};
type AssignStoreRequestValidator = {
    articles?: _AssignStoreArticle[];
    pincode?: string;
    store_ids?: number[];
    channel_identifier?: string;
    app_id?: string;
    channel_type?: string;
    company_id?: number;
};
type AssignStoreResponseSerializer = {
    _id?: string;
    price_marked?: number;
    quantity?: number;
    store_id?: number;
    meta?: any;
    preice_effective?: number;
    uid?: string;
    s_city?: string;
    item_id?: number;
    store_pincode?: string;
    size?: string;
    status?: boolean;
    article_assignment?: _ArticleAssignment;
    company_id?: number;
    index?: number;
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
type Ownership = {
    payable_by: string;
    payable_category: string;
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
    description?: string;
    apply?: DisplayMetaDict;
    title?: string;
    auto?: DisplayMetaDict;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type RuleDefinition = {
    is_exact?: boolean;
    auto_apply?: boolean;
    value_type: string;
    scope?: string[];
    currency_code?: string;
    calculate_on: string;
    applicable_on: string;
    type: string;
};
type PriceRange = {
    max?: number;
    min?: number;
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
type PostOrder = {
    return_allowed?: boolean;
    cancellation_allowed?: boolean;
};
type UsesRemaining = {
    total?: number;
    app?: number;
    user?: number;
};
type UsesRestriction = {
    remaining?: UsesRemaining;
    maximum?: UsesRemaining;
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    price_range?: PriceRange;
    payments?: any;
    ordering_stores?: number[];
    post_order?: PostOrder;
    user_groups?: number[];
    coupon_allowed?: boolean;
    uses?: UsesRestriction;
    platforms?: string[];
    bulk_bundle?: BulkBundleRestriction;
};
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type CouponAction = {
    txn_mode?: string;
    action_date?: string;
};
type CouponSchedule = {
    duration?: number;
    cron?: string;
    end?: string;
    next_schedule?: any[];
    start?: string;
};
type CouponAuthor = {
    modified_by?: string;
    created_by?: string;
};
type Rule = {
    max?: number;
    discount_qty?: number;
    value?: number;
    min?: number;
    key?: number;
};
type CouponAdd = {
    ownership: Ownership;
    validity: Validity;
    display_meta: DisplayMeta;
    date_meta?: CouponDateMeta;
    validation?: Validation;
    rule_definition: RuleDefinition;
    type_slug: string;
    restrictions?: Restrictions;
    state?: State;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    author?: CouponAuthor;
    tags?: string[];
    identifiers: Identifier;
    rule: Rule[];
    code: string;
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
    ownership: Ownership;
    validity: Validity;
    display_meta: DisplayMeta;
    date_meta?: CouponDateMeta;
    validation?: Validation;
    rule_definition: RuleDefinition;
    type_slug: string;
    restrictions?: Restrictions;
    state?: State;
    action?: CouponAction;
    _schedule?: CouponSchedule;
    author?: CouponAuthor;
    tags?: string[];
    identifiers: Identifier;
    rule: Rule[];
    code: string;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
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
    total?: number;
    user?: number;
};
type UsesRestriction1 = {
    remaining?: UsesRemaining1;
    maximum?: UsesRemaining1;
};
type UserRegistered = {
    start?: string;
    end?: string;
};
type Restrictions1 = {
    order_quantity?: number;
    payments?: PromotionPaymentModes[];
    post_order?: PostOrder1;
    user_groups?: number[];
    anonymous_users?: boolean;
    uses: UsesRestriction1;
    platforms?: string[];
    user_id?: string[];
    user_registered?: UserRegistered;
};
type PromotionAction = {
    action_type: string;
    action_date: string;
};
type CompareObject = {
    greater_than?: number;
    less_than?: number;
    equals?: number;
    less_than_equals?: number;
    greater_than_equals?: number;
};
type ItemCriteria = {
    item_sku?: string[];
    item_exclude_brand?: number[];
    item_exclude_company?: number[];
    buy_rules?: string[];
    item_exclude_store?: number[];
    item_brand?: number[];
    item_size?: string[];
    cart_quantity?: CompareObject;
    item_id?: number[];
    all_items?: boolean;
    item_company?: number[];
    item_exclude_sku?: string[];
    cart_total?: CompareObject;
    item_store?: number[];
    item_category?: number[];
    item_exclude_category?: number[];
};
type DiscountOffer = {
    discount_price?: number;
    discount_percentage?: number;
    max_discount_amount?: number;
    max_offer_quantity?: number;
    discount_amount?: number;
    min_offer_quantity?: number;
    code?: string;
};
type DiscountRule = {
    buy_condition: string;
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
    discount_type: string;
};
type DisplayMeta1 = {
    name?: string;
    offer_text?: string;
    description?: string;
};
type Ownership1 = {
    payable_by: string;
    payable_category: string;
};
type Visibility = {
    pdp: boolean;
    coupon_list: boolean;
};
type PromotionSchedule = {
    duration?: number;
    cron?: string;
    end?: string;
    published: boolean;
    next_schedule?: any[];
    start: string;
};
type PromotionAuthor = {
    modified_by?: string;
    created_by?: string;
};
type PromotionListItem = {
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    restrictions?: Restrictions1;
    apply_priority?: number;
    code?: string;
    stackable?: boolean;
    mode: string;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    buy_rules: any;
    display_meta: DisplayMeta1;
    currency?: string;
    apply_exclusive?: string;
    ownership: Ownership1;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    promotion_type: string;
    _schedule?: PromotionSchedule;
    application_id: string;
    author?: PromotionAuthor;
};
type PromotionsResponse = {
    items?: PromotionListItem;
    page?: Page;
};
type PromotionAdd = {
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    restrictions?: Restrictions1;
    apply_priority?: number;
    code?: string;
    stackable?: boolean;
    mode: string;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    buy_rules: any;
    display_meta: DisplayMeta1;
    currency?: string;
    apply_exclusive?: string;
    ownership: Ownership1;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    promotion_type: string;
    _schedule?: PromotionSchedule;
    application_id: string;
    author?: PromotionAuthor;
};
type PromotionUpdate = {
    _custom_json?: any;
    date_meta?: PromotionDateMeta;
    promo_group: string;
    restrictions?: Restrictions1;
    apply_priority?: number;
    code?: string;
    stackable?: boolean;
    mode: string;
    post_order_action?: PromotionAction;
    discount_rules: DiscountRule[];
    buy_rules: any;
    display_meta: DisplayMeta1;
    currency?: string;
    apply_exclusive?: string;
    ownership: Ownership1;
    visiblility?: Visibility;
    apply_all_discount?: boolean;
    promotion_type: string;
    _schedule?: PromotionSchedule;
    application_id: string;
    author?: PromotionAuthor;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
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
    message?: string;
    is_applied?: boolean;
    uid?: string;
    value?: number;
    code?: string;
    type?: string;
};
type DisplayBreakup = {
    display?: string;
    message?: string[];
    currency_symbol?: string;
    value?: number;
    currency_code?: string;
    key?: string;
};
type LoyaltyPoints = {
    total?: number;
    is_applied?: boolean;
    description?: string;
    applicable?: number;
};
type RawBreakup = {
    convenience_fee?: number;
    cod_charge?: number;
    fynd_cash?: number;
    subtotal?: number;
    you_saved?: number;
    coupon?: number;
    total?: number;
    discount?: number;
    gst_charges?: number;
    vog?: number;
    mrp_total?: number;
    delivery_charge?: number;
};
type CartBreakup = {
    coupon?: CouponBreakup;
    display?: DisplayBreakup[];
    loyalty_points?: LoyaltyPoints;
    raw?: RawBreakup;
};
type ProductPrice = {
    add_on?: number;
    selling?: number;
    currency_symbol?: string;
    effective?: number;
    currency_code?: string;
    marked?: number;
};
type ProductPriceInfo = {
    converted?: ProductPrice;
    base?: ProductPrice;
};
type PromoMeta = {
    message?: string;
};
type Ownership2 = {
    payable_by?: string;
    payable_category?: string;
};
type AppliedPromotion = {
    promo_id?: string;
    mrp_promotion?: boolean;
    offer_text?: string;
    ownership?: Ownership2;
    amount?: number;
    promotion_type?: string;
    article_quantity?: number;
};
type CategoryInfo = {
    name?: string;
    uid?: number;
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
type ProductImage = {
    url?: string;
    secure_url?: string;
    aspect_ratio?: string;
};
type CartProduct = {
    name?: string;
    categories?: CategoryInfo[];
    slug?: string;
    brand?: BaseInfo;
    uid?: number;
    action?: ProductAction;
    type?: string;
    images?: ProductImage[];
};
type ProductAvailability = {
    deliverable?: boolean;
    out_of_stock?: boolean;
    is_valid?: boolean;
    sizes?: string[];
    other_store_quantity?: number;
};
type CartProductIdentifer = {
    identifier?: string;
};
type BasePrice = {
    currency_code?: string;
    marked?: number;
    effective?: number;
    currency_symbol?: string;
};
type ArticlePriceInfo = {
    converted?: BasePrice;
    base?: BasePrice;
};
type ProductArticle = {
    parent_item_identifiers?: any;
    store?: BaseInfo;
    seller?: BaseInfo;
    product_group_tags?: string[];
    size?: string;
    uid?: string;
    quantity?: number;
    type?: string;
    extra_meta?: any;
    price?: ArticlePriceInfo;
};
type CartProductInfo = {
    price?: ProductPriceInfo;
    parent_item_identifiers?: any;
    promo_meta?: PromoMeta;
    bulk_offer?: any;
    message?: string;
    promotions_applied?: AppliedPromotion[];
    discount?: string;
    product?: CartProduct;
    is_set?: boolean;
    quantity?: number;
    availability?: ProductAvailability;
    identifiers: CartProductIdentifer;
    price_per_unit?: ProductPriceInfo;
    key?: string;
    coupon_message?: string;
    article?: ProductArticle;
};
type OpenapiCartDetailsResponse = {
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
    is_valid?: boolean;
    message?: string;
};
type OpenApiErrorResponse = {
    success?: boolean;
    errors?: any;
    message?: string;
};
type ShippingAddress = {
    name?: string;
    landmark?: string;
    country?: string;
    address_type?: string;
    email?: string;
    country_code?: string;
    area_code: string;
    state?: string;
    city?: string;
    area_code_slug?: string;
    meta?: any;
    area?: string;
    phone?: number;
    address?: string;
    pincode?: number;
};
type OpenApiCartServiceabilityRequest = {
    cart_items?: CartItem;
    shipping_address: ShippingAddress;
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
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    message?: string;
    is_valid?: boolean;
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
    payment_methods: MultiTenderPaymentMethod[];
    price_effective: number;
    amount_paid: number;
    discount: number;
    coupon_effective_discount: number;
    loyalty_discount?: number;
    cashback_applied: number;
    size: string;
    files?: OpenApiFiles[];
    quantity?: number;
    product_id: number;
    delivery_charges: number;
    employee_discount?: number;
    meta?: CartItemMeta;
    extra_meta?: any;
    cod_charges: number;
    price_marked: number;
};
type OpenApiPlatformCheckoutReq = {
    payment_methods: MultiTenderPaymentMethod[];
    cart_items: OpenApiOrderItem[];
    coupon_value: number;
    affiliate_order_id?: string;
    payment_mode?: string;
    loyalty_discount?: number;
    cashback_applied: number;
    cod_charges: number;
    billing_address: ShippingAddress;
    comment?: string;
    currency_code?: string;
    employee_discount?: any;
    gstin?: string;
    shipping_address?: ShippingAddress;
    coupon_code: string;
    coupon?: string;
    files?: OpenApiFiles[];
    delivery_charges: number;
    order_id?: string;
    cart_value: number;
};
type OpenApiCheckoutResponse = {
    order_id: string;
    success?: boolean;
    message?: string;
    order_ref_id?: string;
};
type AbandonedCart = {
    is_archive?: boolean;
    payment_methods?: any[];
    payment_mode?: string;
    comment?: string;
    articles: any[];
    promotion?: any;
    is_default: boolean;
    app_id?: string;
    discount?: number;
    coupon?: any;
    merge_qty?: boolean;
    cart_value?: number;
    buy_now?: boolean;
    order_id?: string;
    _id: string;
    cashback: any;
    meta?: any;
    is_active?: boolean;
    bulk_coupon_discount?: number;
    payments?: any;
    expire_at: string;
    user_id: string;
    checkout_mode?: string;
    pick_up_customer_details?: any;
    gstin?: string;
    shipments?: any[];
    last_modified: string;
    created_on: string;
    uid: number;
    fc_index_map?: number[];
    delivery_charges?: any;
    fynd_credits?: any;
    cod_charges?: any;
};
type AbandonedCartResponse = {
    message?: string;
    success?: boolean;
    items?: AbandonedCart[];
    result?: any;
    page?: Page;
};
type CartCurrency = {
    code?: string;
    symbol?: string;
};
type CartDetailResponse = {
    breakup_values?: CartBreakup;
    delivery_promise?: ShipmentPromise;
    message?: string;
    id?: string;
    currency?: CartCurrency;
    last_modified?: string;
    payment_selection_lock?: PaymentSelectionLock;
    delivery_charge_info?: string;
    restrict_checkout?: boolean;
    buy_now?: boolean;
    comment?: string;
    is_valid?: boolean;
    items?: CartProductInfo[];
    coupon_text?: string;
    checkout_mode?: string;
    gstin?: string;
};
type AddProductCart = {
    display?: string;
    parent_item_identifiers?: any;
    article_id?: string;
    article_assignment?: any;
    item_size?: string;
    product_group_tags?: string[];
    pos?: boolean;
    quantity?: number;
    item_id?: number;
    seller_id?: number;
    store_id?: number;
    extra_meta?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    partial?: boolean;
    success?: boolean;
    cart?: CartDetailResponse;
    message?: string;
};
type UpdateProductCart = {
    parent_item_identifiers?: any;
    article_id?: string;
    item_size?: string;
    item_index?: number;
    quantity?: number;
    item_id?: number;
    identifiers: CartProductIdentifer;
    extra_meta?: any;
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
