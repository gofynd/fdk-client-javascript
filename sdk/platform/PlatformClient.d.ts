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
    export { ApplicationResponse, Currency, Domain, ApplicationWebsite, ApplicationCors, ApplicationAuth, ApplicationRedirections, ApplicationMeta, SecureUrl, Application, NotFound, BadRequest, LocationDefaultLanguage, LocationDefaultCurrency, LocationCountry, Locations, TicketList, Page, TicketHistoryList, CustomFormList, CreateCustomFormPayload, EditCustomFormPayload, EditTicketPayload, AgentChangePayload, CreateVideoRoomResponse, CloseVideoRoomResponse, CreateVideoRoomPayload, NotifyUser, Filter, TicketHistoryPayload, CustomFormSubmissionPayload, GetTokenForVideoRoomResponse, GetParticipantsInsideVideoRoomResponse, Participant, Email, Debug, SubmitCustomFormResponse, TicketContext, CreatedOn, TicketAsset, TicketContent, AddTicketPayload, Priority, Status, TicketFeedbackForm, TicketFeedbackList, TicketFeedbackPayload, SubmitButton, PollForAssignment, CustomForm, CommunicationDetails, SupportGeneralConfig, FeedbackForm, TicketSubCategory, TicketCategory, CategoryData, IntegrationConfig, FeedbackResponseItem, TicketFeedback, TicketHistory, Ticket, AvailablePageSchema, AvailablePageSectionMetaAttributes, AvailablePageSeo, AvailablePageSchemaSections, AvailablePageScreenPredicate, AvailablePageUserPredicate, AvailablePageRoutePredicate, AvailablePagePredicate, AllAvailablePageSchema, PaginationSchema, ThemesListingResponseSchema, AddThemeRequestSchema, UpgradableThemeSchema, FontsSchema, BlitzkriegApiErrorSchema, BlitzkriegNotFoundSchema, BlitzkriegInternalServerErrorSchema, FontsSchemaItems, FontsSchemaItemsFiles, ThemesSchema, availableSectionSchema, Information, Images, Src, AssetsSchema, UmdJs, CommonJs, Css, Sections, Config, Preset, GlobalSchema, ListSchemaItem, Colors, Custom, ConfigPage, Font, Variants, Medium, SemiBold, Bold, Light, Regular, Blocks, GlobalSchemaProps, BlocksProps, BlockUserRequestSchema, ArchiveUserRequestSchema, DeleteApplicationUserRequestSchema, UnDeleteUserRequestSchema, EditEmailRequestSchema, SendVerificationLinkMobileRequestSchema, EditMobileRequestSchema, EditProfileRequestSchema, EditProfileMobileSchema, SendEmailOtpRequestSchema, VerifyEmailOtpRequestSchema, VerifyOtpRequestSchema, SendMobileOtpRequestSchema, UpdatePasswordRequestSchema, FormRegisterRequestSchema, TokenRequestBodySchema, ForgotPasswordRequestSchema, CodeRequestBodySchema, SendResetPasswordEmailRequestSchema, SendResetPasswordMobileRequestSchema, PasswordLoginRequestSchema, SendOtpRequestSchema, OAuthRequestSchema, OAuthRequestAppleSchema, UserObjectSchema, AuthSuccess, SendOtpResponse, ProfileEditSuccess, LoginSuccess, VerifyOtpSuccess, ResetPasswordSuccess, RegisterFormSuccess, VerifyEmailSuccess, HasPasswordSuccess, LogoutSuccess, BlockUserSuccess, ArchiveUserSuccess, DeleteUserSuccess, UnDeleteUserSuccess, OtpSuccess, EmailOtpSuccess, SessionListSuccess, VerifyMobileOTPSuccess, VerifyEmailOTPSuccess, SendMobileVerifyLinkSuccess, SendEmailVerifyLinkSuccess, UserSearchResponseSchema, CustomerListResponseSchema, SessionListResponseSchema, SessionDeleteResponseSchema, UnauthorizedSchema, UnauthenticatedSchema, NotFoundSchema, AuthenticationInternalServerErrorSchema, AuthenticationApiErrorSchema, ProfileEditSuccessSchema, FormRegisterRequestSchemaPhone, OAuthRequestSchemaOauth2, OAuthRequestSchemaProfile, OAuthRequestAppleSchemaOauth, OAuthRequestAppleSchemaProfile, AuthSuccessUser, AuthSuccessUserDebug, AuthSuccessUserEmails, CreateUserRequestSchema, CreateUserResponseSchema, CreateUserSessionRequestSchema, CreateUserSessionResponseSchema, PlatformSchema, LookAndFeel, Login, MetaSchema, Social, RequiredFields, PlatformEmail, PlatformMobile, RegisterRequiredFields, RegisterRequiredFieldsEmail, RegisterRequiredFieldsMobile, FlashCard, SocialTokens, DeleteAccountReasons, DeleteAccountConsent, Facebook, Accountkit, Google, UpdateUserRequestSchema, UserSchema, PhoneNumber, ApplicationLegal, ApplicationLegalFAQ, PathMappingSchema, SeoComponent, SeoSchema, CustomMetaTag, Detail, AnnouncementPageSchema, EditorMeta, AnnouncementAuthorSchema, AdminAnnouncementSchema, ScheduleSchema, NextSchedule, AnnouncementSchema, ScheduleStartSchema, BlogGetResponse, ResourceContent, Asset, Author, BlogSchema, SEO, SEOImage, DateMeta, BlogRequest, GetAnnouncementListSchema, CreateAnnouncementSchema, DataLoaderResponseSchema, DataLoaderResetResponseSchema, Navigation, LocaleLanguage, Language, Action, ActionPage, NavigationReference, LandingPage, ConfigurationSchema, SlideshowMedia, Slideshow, AnnouncementsResponseSchema, FaqResponseSchema, UpdateHandpickedSchema, HandpickedTagSchema, RemoveHandpickedSchema, CreateTagSchema, CreateTagRequestSchema, DataLoaderSchema, DataLoaderSourceSchema, DataLoadersSchema, TagDeleteSuccessResponse, ContentAPIError, CommonError, CategorySchema, ChildrenSchema, CategoryRequestSchema, FAQCategorySchema, FaqSchema, FAQ, CreateFaqResponseSchema, CreateFaqSchema, GetFaqSchema, UpdateFaqCategoryRequestSchema, CreateFaqCategoryRequestSchema, CreateFaqCategorySchema, GetFaqCategoriesSchema, GetFaqCategoryBySlugSchema, LandingPageGetResponse, LandingPageSchema, DefaultNavigationResponse, NavigationGetResponse, Orientation, NavigationSchema, NavigationRequest, CustomPageSchema, ContentSchema, CustomPage, FeatureImage, PageGetResponse, PageSpec, PageSpecParam, PageSpecItem, PageSchema, CreatedBySchema, PageContent, PageMeta, PageRequest, CronSchedule, PagePublishRequest, PageMetaSchema, SlideshowGetResponse, SlideshowSchema, SlideshowRequest, Support, PhoneProperties, PhoneSchema, EmailProperties, EmailSchema, ContactSchema, TagsSchema, TagSchema, TagSourceSchema, UnauthenticatedUser, UnauthenticatedApplication, ResourceNotFound, InternalServerError, CheckValidityResponse, PlanRecurring, Plan, DetailedPlanComponents, DetailedPlan, SubscriptionTrialPeriod, EntityChargePrice, EntityChargeRecurring, ChargeLineItem, CreateSubscriptionCharge, CurrentPeriod, SubscriptionCharge, EntitySubscription, CreateSubscriptionResponse, InvoiceDetailsPeriod, InvoiceDetailsClient, InvoiceDetailsStatusTrail, InvoiceDetailsPaymentMethodsDataChecks, InvoiceDetailsPaymentMethodsDataNetworks, InvoiceDetailsPaymentMethodsDataThreeDSecureUsage, InvoiceDetailsPaymentMethodsData, InvoiceDetailsPaymentMethods, InvoicePaymentMethod, InvoiceDetails, InvoiceItemsPlanRecurring, InvoiceItemsPlan, InvoiceItemsPeriod, InvoiceItems, Invoice, InvoicesDataClient, InvoicesDataPeriod, InvoicesDataPaymentMethod, InvoicesData, Invoices, Phone, SubscriptionBillingAddress, SubscriptionCustomer, SubscriptionCustomerCreate, SubscriptionCurrentPeriod, SubscriptionPauseCollection, SubscriptionTrial, SubscriptionInvoiceSettings, Subscription, SubscriptionStatus, SubscriptionLimitApplication, SubscriptionLimitMarketplace, SubscriptionLimitOtherPlatform, SubscriptionLimitTeam, SubscriptionLimitProducts, SubscriptionLimitExtensions, SubscriptionLimitIntegrations, SubscriptionLimit, SubscriptionActivateReq, SubscriptionActivateRes, CancelSubscriptionReq, CancelSubscriptionRes, StatsImported, StatsProcessedEmail, StatsProcessedSms, StatsProcessed, Stats, GetStats, CampaignReq, RecipientHeaders, CampaignEmailTemplate, CampignEmailProvider, CampaignEmail, Campaign, Campaigns, BadRequestSchema, BigqueryHeadersReq, BigqueryHeadersResHeaders, BigqueryHeadersRes, GetNRecordsCsvReq, GetNRecordsCsvResItems, GetNRecordsCsvRes, AudienceReq, Audience, Audiences, EmailProviderReqFrom, EmailProviderReq, EmailProvider, EmailProviders, EmailTemplateDeleteSuccessRes, EmailTemplateDeleteFailureRes, EmailTemplateKeys, EmailTemplateHeaders, EmailTemplateReq, TemplateAndType, EmailTemplateRes, EmailTemplate, SystemEmailTemplate, EmailTemplates, SystemEmailTemplates, PayloadEmailTemplateStructure, PayloadEmailProviderStructure, PayloadEmailStructure, PayloadSmsTemplateStructure, PayloadSmsProviderStructure, PayloadSmsStructure, PayloadStructure, MetaStructure, EngineRequest, EngineResponse, EventSubscriptionTemplateSms, EventSubscriptionTemplateEmail, EventSubscriptionTemplate, EventSubscription, EventSubscriptions, TriggerJobResponse, TriggerJobRequest, Job, Jobs, JobLog, JobLogs, LogEmail, LogPushnotification, LogMeta, Log, Logs, SendOtpSmsCommsTemplate, SendOtpSmsCommsProvider, SendOtpEmailCommsTemplate, SendOtpCommsReqData, SendOtpCommsReqSms, SendOtpCommsReqEmail, SendOtpCommsResSms, SendOtpCommsResEmail, SendOtpCommsReq, SendOtpCommsRes, VerifyOtpCommsReq, VerifyOtpCommsSuccessRes, VerifyOtpCommsErrorRes, PushtokenReq, PushtokenRes, SmsProviderReq, SmsProvider, SmsProviders, SmsTemplateDeleteSuccessRes, SmsTemplateDeleteFailureRes, SmsTemplateMessage, SmsTemplateReq, SmsTemplateRes, SmsTemplate, SystemSmsTemplate, SmsTemplates, SystemSmsTemplates, Notification, SystemNotificationUser, SystemNotificationSettings, SystemNotification, SystemNotificationsPage, SystemNotifications, PaymentGatewayConfigResponse, ErrorCodeDescription, PaymentGatewayConfig, PaymentGatewayConfigRequest, PaymentGatewayToBeReviewed, ErrorCodeAndDescription, HttpErrorCodeAndResponse, PaymentModeLogo, IntentApp, IntentAppErrorList, PaymentModeList, RootPaymentMode, PaymentOptions, PaymentOptionsResponse, PayoutsResponse, PayoutBankDetails, PayoutRequest, PayoutResponse, UpdatePayoutResponse, UpdatePayoutRequest, DeletePayoutResponse, SubscriptionPaymentMethodResponse, DeleteSubscriptionPaymentMethodResponse, SubscriptionConfigResponse, SaveSubscriptionSetupIntentRequest, SaveSubscriptionSetupIntentResponse, RefundAccountResponse, NotFoundResourceError, BankDetailsForOTP, AddBeneficiaryDetailsOTPRequest, IfscCodeResponse, OrderBeneficiaryDetails, OrderBeneficiaryResponse, MultiTenderPaymentMeta, MultiTenderPaymentMethod, PaymentConfirmationRequest, PaymentConfirmationResponse, CODdata, GetUserCODLimitResponse, SetCODForUserRequest, SetCODOptionResponse, Prices, PaymentModeInfo, PlatformItem, GSTDetailsData, BagUnit, ShipmentItemFulFillingStore, UserDataInfo, ShipmentStatus, ShipmentItem, FilterInfoOption, FiltersInfo, ShipmentInternalPlatformViewResponse, Error, UserDetailsData, DiscountRules, ItemCriterias, BuyRules, AppliedPromos, PlatformDeliveryAddress, BagGST, BagConfigs, Identifier, FinancialBreakup, OrderBrandName, BagStateMapper, CurrentStatus, OrderBagArticle, OrderBags, BagStatusHistory, DPDetailsData, ShipmentPayments, ShipmentStatusData, FulfillingStore, TrackingList, OrderDetailsData, ShipmentInfoResponse, OrderMeta, OrderDict, PlatformShipment, ShipmentDetailsResponse, SubLane, SuperLane, LaneConfigResponse, PlatformChannel, PlatformBreakupValues, PlatformOrderItems, OrderListingResponse, Options, MetricsCount, MetricCountResponse, PlatformTrack, PlatformShipmentTrack, FiltersResponse, Success, OmsReports, JioCodeUpsertDataSet, JioCodeUpsertPayload, NestedErrorSchemaDataSet, JioCodeUpsertResponse, BulkInvoicingResponse, BulkInvoiceLabelResponse, FileUploadResponse, URL, FileResponse, BulkListingPage, bulkListingData, BulkListingResponse, DateRange, ManifestFilter, GeneratedManifestItem, ManifestPage, GeneratedManifestResponse, ManifestDetailTotalShipmentPricesCount, ManifestDetailMeta, ManifestDetail, ManifestDetailItem, ManifestDetailResponse, QuestionSet, Reason, PlatformShipmentReasonsResponse, BulkActionPayload, BulkActionResponse, BulkActionDetailsDataField, BulkActionDetailsResponse, Attributes, Item, ArticleDetails, BagGSTDetails, B2BPODetails, BagMeta, Brand, AffiliateMeta, PDFLinks, LockData, EInvoice, EinvoiceInfo, DebugInfo, BuyerDetails, Formatted, ShipmentTimeStamp, ShipmentMeta, AffiliateDetails, AffiliateBagDetails, Dates, Dimensions, ReturnConfig, Weight, Article, BagReturnableCancelableStatus, Document, StoreDocuments, EInvoicePortalDetails, StoreEinvoice, StoreEwaybill, StoreGstCredentials, StoreMeta, StoreAddress, Store, BagDetailsPlatformResponse, ErrorResponse, Page1, GetBagsPlatformResponse, InvalidateShipmentCachePayload, InvalidateShipmentCacheNestedResponse, InvalidateShipmentCacheResponse, ErrorResponse1, StoreReassign, StoreReassignResponse, Entities, UpdateShipmentLockPayload, OriginalFilter, Bags, CheckResponse, UpdateShipmentLockResponse, AnnouncementResponse, AnnouncementsResponse, BaseResponse, Click2CallResponse, ProductsReasonsFilters, ProductsReasonsData, ProductsReasons, EntityReasonData, EntitiesReasons, ReasonsData, ProductsDataUpdatesFilters, ProductsDataUpdates, EntitiesDataUpdates, DataUpdates, Products, ShipmentsRequest, StatuesRequest, UpdateShipmentStatusRequest, ShipmentsResponse, StatuesResponse, UpdateShipmentStatusResponseBody, OrderUser, ArticleDetails1, LocationDetails, ShipmentDetails, ShipmentConfig, ShipmentData, OrderPriority, UserData, MarketPlacePdf, AffiliateBag, OrderInfo, AffiliateStoreIdMapping, AffiliateInventoryLogisticsConfig, AffiliateInventoryStoreConfig, AffiliateInventoryPaymentConfig, AffiliateInventoryOrderConfig, AffiliateInventoryArticleAssignmentConfig, AffiliateInventoryConfig, AffiliateAppConfigMeta, AffiliateAppConfig, AffiliateConfig, Affiliate, OrderConfig, CreateOrderPayload, CreateOrderResponse, DispatchManifest, SuccessResponse, ActionInfo, GetActionsResponse, HistoryDict, ShipmentHistoryResponse, ErrorDetail, SmsDataPayload, SendSmsPayload, OrderDetails, Meta, ShipmentDetail, OrderStatusData, OrderStatusResult, ManualAssignDPToShipment, ManualAssignDPToShipmentResponse, BillingInfo, TaxInfo, Tax, Charge, LineItem, ProcessingDates, Shipment, PaymentMethod, PaymentInfo, ShippingInfo, CreateOrderAPI, CreateOrderErrorReponse, DpConfiguration, PaymentMethods, CreateChannelPaymentInfo, CreateChannelConfig, CreateChannelConfigData, CreateChannelConfigResponse, CreateChannelConifgErrorResponse, UploadConsent, PlatformOrderUpdate, ResponseDetail, FyndOrderIdList, OrderStatus, GetSearchWordsData, GetSearchWordsDetailResponse, SearchKeywordResult, CreateSearchKeyword, DeleteResponse, GetSearchWordsResponse, GetAutocompleteWordsData, GetAutocompleteWordsResponse, Media, AutocompletePageAction, AutocompleteAction, AutocompleteResult, CreateAutocompleteKeyword, CreateAutocompleteWordsResponse, ProductBundleItem, ProductBundleRequest, GetProductBundleCreateResponse, GetProductBundleListingResponse, ProductBundleUpdateRequest, Price, LimitedProductData, Size, GetProducts, GetProductBundleResponse, Guide, ValidateSizeGuide, ListSizeGuide, SizeGuideResponse, MOQData, SEOData, OwnerAppItemResponse, ApplicationItemMOQ, MetaFields, ApplicationItemSEO, ApplicationItemMeta, SuccessResponse1, GetConfigMetadataResponse, AttributeDetailsGroup, AppConfigurationDetail, ConfigErrorResponse, PageResponseType, GetConfigResponse, ConfigSuccessResponse, AppConfigurationsSort, AllowSingleRequest, DefaultKeyRequest, GetCatalogConfigurationDetailsProduct, MetaDataListingFilterMetaResponse, MetaDataListingFilterResponse, MetaDataListingSortMetaResponse, MetaDataListingSortResponse, MetaDataListingResponse, GetCatalogConfigurationMetaData, ProductSize, ConfigurationProductVariantConfig, ConfigurationProductVariant, ConfigurationProductConfig, ConfigurationProductSimilar, ConfigurationProduct, ConfigurationBucketPoints, ConfigurationListingFilterValue, ConfigurationListingFilterConfig, ConfigurationListingFilter, ConfigurationListingSortConfig, ConfigurationListingSort, ConfigurationListing, AppConfiguration, AppCatalogConfiguration, GetAppCatalogConfiguration, GetCatalogConfigurationDetailsSchemaListing, EntityConfiguration, GetAppCatalogEntityConfiguration, ProductSortOn, ProductFiltersValue, ProductFiltersKey, ProductFilters, GetCollectionQueryOptionResponse, CollectionQuery, UserInfo, SeoDetail, CollectionBadge, CollectionSchedule, CollectionImage, CollectionBanner, CreateCollection, BannerImage, ImageUrls, CollectionCreateResponse, Media1, GetCollectionDetailNest, CollectionListingFilterType, CollectionListingFilterTag, CollectionListingFilter, GetCollectionListingResponse, CollectionDetailResponse, UpdateCollection, ItemQueryForUserCollection, CollectionItemRequest, UpdatedResponse, Price1, ProductListingPrice, ProductDetailAttribute, ProductDetailGroupedAttribute, ProductBrand, ProductListingDetail, GetCollectionItemsResponse, CatalogInsightBrand, CatalogInsightItem, CatalogInsightResponse, CrossSellingData, CrossSellingResponse, OptInPostRequest, CompanyOptIn, GetOptInPlatform, OptinCompanyDetail, CompanyBrandDetail, OptinCompanyBrandDetailsView, OptinCompanyMetrics, StoreDetail, OptinStoreDetails, AttributeMasterDetails, AttributeSchemaRange, AttributeMaster, AttributeMasterFilter, AttributeMasterMandatoryDetails, AttributeMasterMeta, GenderDetail, ProdcutTemplateCategoriesResponse, PTErrorResponse, DepartmentCreateUpdate, DepartmentCreateResponse, DepartmentCreateErrorResponse, UserSerializer, GetDepartment, DepartmentsResponse, DepartmentErrorResponse, UserDetail, DepartmentModel, ProductTemplate, TemplatesResponse, TemplateDetails, Properties, GlobalValidation, TemplateValidationData, TemplatesValidationResponse, InventoryValidationResponse, HSNData, HSNCodesResponse, ProductDownloadItemsData, VerifiedBy, ProductDownloadsItems, ProductDownloadsResponse, ProductConfigurationDownloads, Hierarchy, Media2, CategoryMappingValues, CategoryMapping, CategoryRequestBody, CategoryCreateResponse, Category, CategoryResponse, CategoryUpdateResponse, SingleCategoryResponse, NetQuantity, TeaserTag, ProductPublish, Trader, CustomOrder, TaxIdentifier, ProductCreateUpdateSchemaV2, NetQuantityResponse, ReturnConfigResponse, Image, ProductPublished, Logo, Product, ProductListingResponse, ProductVariants, ProductVariantsResponse, AttributeMasterSerializer, ProductAttributesResponse, SingleProductResponse, ValidateIdentifier, AllSizes, GetAllSizes, ValidateProduct, UserInfo1, BulkJob, BulkResponse, UserDetail1, ProductBulkRequest, ProductBulkRequestList, BulkProductRequest, NestedTags, ProductTagsViewResponse, ProductBulkAssets, UserCommon, Items, BulkAssetResponse, ProductSizeDeleteDataResponse, ProductSizeDeleteResponse, SetSize, SizeDistribution, InventorySet, GTIN, InvSize, ItemQuery, InventoryRequest, InventoryResponse, InventoryResponsePaginated, ReturnConfig1, PriceMeta, ManufacturerResponse, QuantityBase, Quantities, WeightResponse, CompanyMeta, Trader1, DimensionResponse, BrandMeta, InventorySellerResponse, InventorySellerIdentifierResponsePaginated, ReturnConfig2, PriceArticle, ManufacturerResponse1, Quantity, QuantitiesArticle, WeightResponse1, BrandMeta1, CompanyMeta1, Trader2, DimensionResponse1, ArticleStoreResponse, GetInventories, GetInventoriesResponse, BulkInventoryGetItems, BulkInventoryGet, InventoryJobPayload, InventoryBulkRequest, InventoryExportRequest, InventoryExportResponse, InventoryExportJob, FilerList, InventoryConfig, InventoryPayload, InventoryRequestSchemaV2, InventoryFailedReason, InventoryResponseItem, InventoryUpdateResponse, HsnUpsert, HsnCodesObject, HsnCode, PageResponse, HsnCodesListingResponse, BulkHsnUpsert, BulkHsnResponse, TaxSlab, HSNDataInsertV2, HsnCodesListingResponseSchemaV2, BrandItem, BrandListingResponse, Department, DepartmentResponse, DepartmentIdentifier, ThirdLevelChild, SecondLevelChild, Child, CategoryItems, DepartmentCategoryTree, CategoryListingResponse, ApplicationProductListingResponse, ProductDetail, InventoryPage, InventoryStockResponse, ArticleAssignment, ArticleQuery, AssignStoreArticle, AssignStore, ArticleAssignment1, StoreAssignResponse, UserSerializer1, SellerPhoneNumber, LocationManagerSerializer, LocationTimingSerializer, LocationDayWiseSerializer, LocationIntegrationType, InvoiceCredSerializer, InvoiceDetailsSerializer, GetAddressSerializer, UserSerializer2, GetCompanySerializer, ProductReturnConfigSerializer, GetLocationSerializer, LocationListSerializer, ApplicationBrandJson, ApplicationCategoryJson, ApplicationDepartment, ApplicationDepartmentListingResponse, ApplicationDepartmentJson, ApplicationStoreJson, BusinessCountryInfo, CompanyTaxesSerializer, ContactDetails, Website, BusinessDetails, GetCompanyProfileSerializerResponse, CompanyTaxesSerializer1, CreateUpdateAddressSerializer, UpdateCompany, ProfileSuccessResponse, DocumentsObj, MetricsSerializer, BrandBannerSerializer, GetBrandResponseSerializer, CreateUpdateBrandRequestSerializer, CompanySocialAccounts, CompanyDetails, CompanySerializer, CompanyBrandSerializer, CompanyBrandListSerializer, CompanyBrandPostRequestSerializer, HolidayDateSerializer, HolidaySchemaSerializer, AddressSerializer, LocationSerializer, BulkLocationSerializer, _ArticleAssignment, _ArticleQuery, _AssignStoreArticle, AssignStoreRequestValidator, AssignStoreResponseSerializer, FailedResponse, CDN, Upload, StartResponse, StartRequest, CompleteResponse, Opts, CopyFileTask, BulkUploadResponse, ReqConfiguration, Destination, BulkRequest, Urls, SignUrlResponse, SignUrlRequest, DbRecord, BrowseResponse, RedirectDevice, WebRedirect, Redirects, CampaignShortLink, Attribution, SocialMediaTags, ShortLinkReq, UrlInfo, ShortLinkRes, ShortLinkList, ErrorRes, DataTresholdDTO, GenericDTO, JobConfigDTO, TaskDTO, ResponseEnvelopeString, KafkaMetaModel, SuppressStoreModel, SuppressStorePayload, KafkaResponse, ResponseEnvelopeKafkaResponse, GCompany, GStore, Metum, ResponseEnvelopeListSlingshotConfigurationDetail, SlingshotConfigurationDetail, SlingshotIntegration, StoreData, AWSS3config, ArchiveConfig, Audit, CatalogMasterConfig, CompanyConfig, DBConfig, DBConnectionProfile, DBParamConfig, DefaultHeadersDTO, DocMappingConfig, EmailConfig, FTPConfig, FileConfig, GoogleSpreadSheetConfig, HttpConfig, JobConfig, JobConfigRawDTO, JsonDocConfig, LocalFileConfig, MongoDocConfig, OAuthConfig, ProcessConfig, PropBeanConfig, PropBeanDTO, ResponseEnvelopeListJobConfigRawDTO, SFTPConfig, Send, StoreConfig, StoreFilter, TaskConfig, TaskParam, TaskStepConfig, JobStepsDTO, ResponseEnvelopeListJobStepsDTO, ResponseEnvelopeListJobConfigDTO, ResponseEnvelopeJobConfigDTO, JobHistoryDto, JobMetricsDto, ResponseEnvelopeJobMetricsDto, JobConfigListDTO, ResponseEnvelopeListJobConfigListDTO, ApplicationInventory, AppInventoryConfig, InventoryBrand, InventoryStore, AppStoreRules, InventoryCategory, InventoryPrice, InventoryDiscount, AuthenticationConfig, ArticleAssignmentConfig, ArticleAssignmentRules, StorePriority, AppCartConfig, DeliveryCharges, Charges, AppPaymentConfig, CallbackUrl, Methods, PaymentModeConfig, PaymentSelectionLock, AppOrderConfig, AppLogisticsConfig, LoyaltyPointsConfig, AppInventoryPartialUpdate, BrandCompanyInfo, CompanyByBrandsRequest, CompanyByBrandsResponse, StoreByBrandsRequest, StoreByBrandsResponse, BrandStoreInfo, CompanyBrandInfo, BrandsByCompanyResponse, CreateApplicationRequest, CreateAppResponse, ApplicationsResponse, MobileAppConfiguration, LandingImage, SplashImage, MobileAppConfigRequest, BuildVersionHistory, BuildVersion, AppSupportedCurrency, DefaultCurrency, CurrencyConfig, DomainAdd, DomainAddRequest, DomainsResponse, UpdateDomain, UpdateDomainTypeRequest, DomainStatusRequest, DomainStatus, DomainStatusResponse, DomainSuggestionsRequest, DomainSuggestion, DomainSuggestionsResponse, GetIntegrationsOptInsResponse, IntegrationOptIn, Validators, CompanyValidator, JsonSchema, StoreValidator, InventoryValidator, OrderValidator, IntegrationMeta, Integration, IntegrationConfigResponse, IntegrationLevel, UpdateIntegrationLevelRequest, OptedStoreIntegration, OtherEntity, LastPatch, OtherEntityData, App, AppInventory, AppDomain, CompaniesResponse, AppInventoryCompanies, StoresResponse, AppInventoryStores, FilterOrderingStoreRequest, DeploymentMeta, OrderingStoreConfig, OtherSellerCompany, OtherSellerApplication, OtherSellerApplications, OptedApplicationResponse, OptedCompany, OptedInventory, OptType, OptedStore, OptOutInventory, TokenResponse, Tokens, Firebase, Credentials, Ios, Android, Moengage, MoengageCredentials, Segment, SegmentCredentials, Gtm, GtmCredentials, Freshchat, FreshchatCredentials, Safetynet, SafetynetCredentials, FyndRewards, FyndRewardsCredentials, GoogleMap, GoogleMapCredentials, RewardPointsConfig, Credit, Debit, ProductDetailFeature, LaunchPage, LandingPageFeature, RegistrationPageFeature, AppFeature, HomePageFeature, CommonFeature, CommunicationOptinDialogFeature, DeploymentStoreSelectionFeature, ListingPriceFeature, CurrencyFeature, RevenueEngineFeature, FeedbackFeature, CompareProductsFeature, CartFeature, QrFeature, PcrFeature, OrderFeature, AppFeatureRequest, AppFeatureResponse, UnhandledError, InvalidPayloadRequest, SuccessMessageResponse, InventoryBrandRule, StoreCriteriaRule, InventoryStoreRule, InventoryPaymentConfig, StorePriorityRule, ArticleAssignmentRule, InventoryArticleAssignment, CompanyAboutAddress, UserEmail, UserPhoneNumber, ApplicationInformation, InformationAddress, InformationPhone, InformationSupport, SocialLinks, FacebookLink, InstagramLink, TwitterLink, PinterestLink, GooglePlusLink, YoutubeLink, LinkedInLink, VimeoLink, BlogLink, Links, BusinessHighlights, ApplicationDetail, CurrenciesResponse, AppCurrencyResponse, StoreLatLong, OptedStoreAddress, OrderingStore, OrderingStores, OrderingStoresResponse, State, Rule, CouponAction, UsesRemaining, UsesRestriction, PriceRange, PostOrder, PaymentAllowValue, PaymentModes, BulkBundleRestriction, Restrictions, CouponAuthor, CouponSchedule, RuleDefinition, Validity, CouponDateMeta, DisplayMetaDict, DisplayMeta, Ownership, Validation, CouponAdd, CouponsResponse, SuccessMessage, OperationErrorResponse, CouponUpdate, CouponPartialUpdate, UsesRemaining1, UsesRestriction1, PostOrder1, PaymentAllowValue1, PromotionPaymentModes, UserRegistered, Restrictions1, PromotionAction, DisplayMeta1, CompareObject, ItemCriteria, DiscountOffer, DiscountRule, PromotionAuthor, Visibility, PromotionDateMeta, Ownership1, PromotionSchedule, PromotionListItem, PromotionsResponse, PromotionAdd, PromotionUpdate, PromotionPartialUpdate, CartItem, OpenapiCartDetailsRequest, DisplayBreakup, RawBreakup, CouponBreakup, LoyaltyPoints, CartBreakup, ProductPrice, ProductPriceInfo, Ownership2, AppliedPromotion, BasePrice, ArticlePriceInfo, BaseInfo, ProductArticle, ProductAvailability, PromoMeta, ActionQuery, ProductAction, ProductImage, CategoryInfo, CartProduct, CartProductIdentifer, CartProductInfo, OpenapiCartDetailsResponse, OpenApiErrorResponse, ShippingAddress, OpenApiCartServiceabilityRequest, PromiseFormatted, PromiseTimestamp, ShipmentPromise, OpenApiCartServiceabilityResponse, OpenApiFiles, CartItemMeta, OpenApiOrderItem, OpenApiPlatformCheckoutReq, OpenApiCheckoutResponse, AbandonedCart, AbandonedCartResponse, CartCurrency, CartDetailResponse, AddProductCart, AddCartRequest, AddCartDetailResponse, UpdateProductCart, UpdateCartRequest, UpdateCartDetailResponse, E, GiveawayResponse, Giveaway, Schedule, RewardsAudience, RewardsRule, Offer, ShareMessages, UserRes, Points, RewardUser, Referral, AppUser, GiveawayAudience, HistoryRes, PointsHistory, StatGroup, StatsGroups, StatsGroupComponent, StatsGroupComponents, StatsRes, ReceivedAt, AbandonCartsDetail, AbandonCartsList, AbandonCartDetail, ExportJobReq, ExportJobRes, ExportJobStatusRes, GetLogsListReq, MkpLogsResp, GetLogsListRes, SearchLogReq, LogInfo, SearchLogRes, ValidityObject, CreateUpdateDiscount, DiscountJob, ListOrCalender, FileJobResponse, DownloadFileJob, CancelJobResponse, UserDetails, BadRequestObject, AddProxyReq, AddProxyResponse, APIError, RemoveProxyResponse, EventConfig, EventConfigList, EventConfigResponse, SubscriberConfigList, EventProcessedStatus, EventPayload, SubscriberConfig, SubscriberResponse, SubscriberEvent, AuthMeta, Association, EventConfigBase, RequestBodyAuditLog, CreateLogResponse, LogMetaObj, EntityObject, LogSchemaResponse, LogDocs, EntityObj, Modifier, DeviceInfo, Location, EntityTypesResponse, EntityTypeObj };
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
    display_fields: string[];
    success: boolean;
    excluded_fields: string[];
    created: boolean;
    app_id: string;
    aggregators?: any[];
};
type ErrorCodeDescription = {
    description: string;
    success: boolean;
    code: string;
};
type PaymentGatewayConfig = {
    config_type: string;
    is_active?: boolean;
    merchant_salt: string;
    key: string;
    secret: string;
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
    description: string;
    code: string;
};
type HttpErrorCodeAndResponse = {
    error: ErrorCodeAndDescription;
    success: boolean;
};
type PaymentModeLogo = {
    small: string;
    large: string;
};
type IntentApp = {
    display_name?: string;
    package_name?: string;
    code?: string;
    logos?: PaymentModeLogo;
};
type IntentAppErrorList = {
    package_name?: string;
    code?: string;
};
type PaymentModeList = {
    card_brand_image?: string;
    retry_count?: number;
    card_type?: string;
    card_brand?: string;
    expired?: boolean;
    exp_month?: number;
    display_name?: string;
    remaining_limit?: number;
    exp_year?: number;
    card_id?: string;
    name?: string;
    card_number?: string;
    cod_limit?: number;
    compliant_with_tokenisation_guidelines?: boolean;
    display_priority?: number;
    intent_app?: IntentApp[];
    card_issuer?: string;
    card_isin?: string;
    card_fingerprint?: string;
    card_reference?: string;
    intent_app_error_dict_list?: IntentAppErrorList[];
    nickname?: string;
    intent_app_error_list?: string[];
    merchant_code?: string;
    aggregator_name: string;
    code?: string;
    cod_limit_per_order?: number;
    intent_flow?: boolean;
    timeout?: number;
    logo_url?: PaymentModeLogo;
    card_name?: string;
    card_token?: string;
    fynd_vpa?: string;
};
type RootPaymentMode = {
    add_card_enabled?: boolean;
    is_pay_by_card_pl?: boolean;
    anonymous_enable?: boolean;
    name: string;
    save_card?: boolean;
    display_priority: number;
    display_name: string;
    list?: PaymentModeList[];
    aggregator_name?: string;
};
type PaymentOptions = {
    payment_option: RootPaymentMode[];
};
type PaymentOptionsResponse = {
    success: boolean;
    payment_options: PaymentOptions;
};
type PayoutsResponse = {
    is_active: boolean;
    transfer_type: string;
    payouts_aggregators: any[];
    is_default: boolean;
    more_attributes: any;
    customers: any;
    unique_transfer_no: any;
};
type PayoutBankDetails = {
    account_type: string;
    ifsc_code: string;
    pincode?: number;
    branch_name?: string;
    bank_name?: string;
    account_holder?: string;
    state?: string;
    country?: string;
    city?: string;
    account_no?: string;
};
type PayoutRequest = {
    is_active: boolean;
    transfer_type: string;
    aggregator: string;
    unique_external_id: string;
    users: any;
    bank_details: PayoutBankDetails;
};
type PayoutResponse = {
    is_active: boolean;
    aggregator: string;
    transfer_type: string;
    success: boolean;
    users: any;
    bank_details: any;
    created: boolean;
    payouts: any;
    payment_status: string;
    unique_transfer_no: string;
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
    data: any[];
    success: boolean;
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
    data: any;
    success: boolean;
};
type RefundAccountResponse = {
    is_verified_flag?: boolean;
    message: string;
    success: boolean;
    data?: any;
};
type NotFoundResourceError = {
    description: string;
    success: boolean;
    code: string;
};
type BankDetailsForOTP = {
    ifsc_code: string;
    branch_name: string;
    bank_name: string;
    account_holder: string;
    account_no: string;
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
    transfer_mode: string;
    created_on: string;
    display_name: string;
    id: number;
    modified_on: string;
    beneficiary_id: string;
    ifsc_code: string;
    email: string;
    account_holder: string;
    subtitle: string;
    address: string;
    mobile?: string;
    delights_user_name?: string;
    is_active: boolean;
    comment?: string;
    branch_name?: string;
    title: string;
    bank_name: string;
    account_no: string;
};
type OrderBeneficiaryResponse = {
    beneficiaries?: OrderBeneficiaryDetails[];
    show_beneficiary_details?: boolean;
};
type MultiTenderPaymentMeta = {
    extra_meta?: any;
    current_status?: string;
    order_id?: string;
    payment_id?: string;
    payment_gateway?: string;
};
type MultiTenderPaymentMethod = {
    amount: number;
    meta?: MultiTenderPaymentMeta;
    mode: string;
    name?: string;
};
type PaymentConfirmationRequest = {
    order_id: string;
    payment_methods: MultiTenderPaymentMethod[];
};
type PaymentConfirmationResponse = {
    order_id: string;
    message: string;
    success: boolean;
};
type CODdata = {
    limit: number;
    is_active: boolean;
    usages: number;
    user_id: string;
    remaining_limit: number;
};
type GetUserCODLimitResponse = {
    user_cod_data: CODdata;
    success: boolean;
};
type SetCODForUserRequest = {
    merchant_user_id: string;
    is_active: boolean;
    mobileno: string;
};
type SetCODOptionResponse = {
    message: string;
    success: boolean;
};
type Prices = {
    fynd_credits?: number;
    promotion_effective_discount?: number;
    coupon_value?: number;
    price_marked?: number;
    amount_paid?: number;
    delivery_charge?: number;
    value_of_good?: number;
    amount_paid_roundoff?: number;
    cashback_applied?: number;
    price_effective?: number;
    cashback?: number;
    cod_charges?: number;
    discount?: number;
    refund_credit?: number;
    refund_amount?: number;
    tax_collected_at_source?: number;
};
type PaymentModeInfo = {
    logo: string;
    type: string;
};
type PlatformItem = {
    image?: string[];
    department_id?: number;
    l1_category?: string[];
    l3_category_name?: string;
    size?: string;
    images?: string[];
    can_cancel?: boolean;
    l3_category?: number;
    name?: string;
    color?: string;
    code?: string;
    id?: number;
    can_return?: boolean;
};
type GSTDetailsData = {
    value_of_good: number;
    gstin_code: string;
    brand_calculated_amount: number;
    tax_collected_at_source: number;
    gst_fee: number;
};
type BagUnit = {
    item?: PlatformItem;
    prices?: Prices;
    total_shipment_bags: number;
    can_cancel?: boolean;
    bag_id: number;
    item_quantity: number;
    ordering_channel: string;
    shipment_id: string;
    status: any;
    gst?: GSTDetailsData;
    can_return?: boolean;
};
type ShipmentItemFulFillingStore = {
    code: string;
    id: string;
};
type UserDataInfo = {
    mobile?: string;
    avis_user_id?: string;
    is_anonymous_user?: boolean;
    uid?: number;
    email?: string;
    name?: string;
    last_name?: string;
    first_name?: string;
    gender?: string;
};
type ShipmentStatus = {
    hex_code: string;
    actual_status: string;
    status: string;
    ops_status: string;
    title: string;
};
type ShipmentItem = {
    channel?: any;
    sla?: any;
    total_shipments_in_order: number;
    total_bags_count: number;
    prices?: Prices;
    payment_mode_info?: PaymentModeInfo;
    bags?: BagUnit[];
    payment_methods?: any;
    application?: any;
    fulfilling_store?: ShipmentItemFulFillingStore;
    fulfilling_centre: string;
    created_at: string;
    shipment_created_at: number;
    id: string;
    user?: UserDataInfo;
    shipment_status?: ShipmentStatus;
};
type FilterInfoOption = {
    value?: string;
    name?: string;
    text: string;
};
type FiltersInfo = {
    options?: FilterInfoOption[];
    value: string;
    text: string;
    type: string;
};
type ShipmentInternalPlatformViewResponse = {
    items?: ShipmentItem[];
    applied_filters?: any;
    filters?: FiltersInfo[];
    page?: any;
};
type Error = {
    message?: string;
    success?: boolean;
};
type UserDetailsData = {
    pincode: string;
    city: string;
    state: string;
    email?: string;
    name: string;
    address: string;
    country: string;
    phone: string;
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
    mrp_promotion?: boolean;
    amount?: number;
    promotion_name?: string;
    article_quantity?: number;
    promo_id?: string;
    promotion_type?: string;
    discount_rules?: DiscountRules[];
    buy_rules?: BuyRules[];
};
type PlatformDeliveryAddress = {
    pincode?: string;
    city?: string;
    address2?: string;
    contact_person?: string;
    address_category?: string;
    state?: string;
    landmark?: string;
    latitude?: number;
    email?: string;
    longitude?: number;
    address1?: string;
    version?: string;
    address_type?: string;
    created_at?: string;
    area?: string;
    country?: string;
    updated_at?: string;
    phone?: string;
};
type BagGST = {
    gst_tax_percentage?: number;
    gst_tag?: string;
    value_of_good?: number;
    gstin_code?: string;
    brand_calculated_amount?: number;
    gst_fee?: number;
    hsn_code?: string;
    is_default_hsn_code?: boolean;
};
type BagConfigs = {
    enable_tracking: boolean;
    is_returnable: boolean;
    allow_force_return: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
};
type Identifier = {
    ean?: string;
};
type FinancialBreakup = {
    delivery_charge: number;
    tax_collected_at_source?: number;
    refund_credit: number;
    discount: number;
    item_name: string;
    coupon_effective_discount: number;
    promotion_effective_discount: number;
    identifiers: Identifier;
    size: string;
    amount_paid: number;
    cashback_applied: number;
    price_effective: number;
    added_to_fynd_cash: boolean;
    gst_fee: number;
    fynd_credits: number;
    gst_tax_percentage: number;
    coupon_value: number;
    gst_tag: string;
    cashback: number;
    cod_charges: number;
    brand_calculated_amount: number;
    hsn_code: string;
    total_units: number;
    price_marked: number;
    value_of_good: number;
    transfer_price: number;
    amount_paid_roundoff?: number;
};
type OrderBrandName = {
    created_on: string;
    logo: string;
    brand_name: string;
    company?: string;
    modified_on?: string;
    id: number;
};
type BagStateMapper = {
    display_name: string;
    app_facing?: boolean;
    bs_id: number;
    journey_type: string;
    notify_customer?: boolean;
    app_display_name?: string;
    name: string;
    is_active?: boolean;
    state_type: string;
    app_state_name?: string;
};
type CurrentStatus = {
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    delivery_awb_number?: string;
    current_status_id: number;
    bag_id?: number;
    status?: string;
    state_id?: number;
    shipment_id?: string;
    store_id?: number;
    bag_state_mapper?: BagStateMapper;
    state_type?: string;
    created_at?: string;
    updated_at?: number;
};
type OrderBagArticle = {
    uid?: string;
    return_config?: any;
    identifiers?: any;
};
type OrderBags = {
    applied_promos?: AppliedPromos[];
    delivery_address?: PlatformDeliveryAddress;
    line_number?: number;
    can_return?: boolean;
    item?: PlatformItem;
    display_name?: string;
    identifier?: string;
    seller_identifier?: string;
    gst_details?: BagGST;
    entity_type?: string;
    bag_configs?: BagConfigs;
    financial_breakup?: FinancialBreakup;
    parent_promo_bags?: any;
    prices?: Prices;
    brand?: OrderBrandName;
    can_cancel?: boolean;
    quantity?: number;
    current_status?: CurrentStatus;
    bag_id: number;
    article?: OrderBagArticle;
};
type BagStatusHistory = {
    kafka_sync?: boolean;
    delivery_partner_id?: number;
    bsh_id?: number;
    delivery_awb_number?: string;
    display_name?: string;
    reasons?: any[];
    bag_id?: number;
    forward?: boolean;
    app_display_name?: string;
    shipment_id?: string;
    status: string;
    state_id?: number;
    store_id?: number;
    bag_state_mapper?: BagStateMapper;
    state_type?: string;
    created_at?: string;
    updated_at?: string;
};
type DPDetailsData = {
    pincode?: string;
    gst_tag?: string;
    awb_no?: string;
    eway_bill_id?: string;
    name?: string;
    track_url?: string;
    id?: number;
    country?: string;
};
type ShipmentPayments = {
    mode?: string;
    logo?: string;
    source?: string;
};
type ShipmentStatusData = {
    shipment_id?: string;
    status?: string;
    bag_list?: string[];
    created_at?: string;
    id?: number;
};
type FulfillingStore = {
    pincode: string;
    city: string;
    meta: any;
    store_name: string;
    state: string;
    country: string;
    address: string;
    code: string;
    fulfillment_channel: string;
    id: number;
    contact_person: string;
    phone: string;
};
type TrackingList = {
    text: string;
    time?: string;
    is_current?: boolean;
    status: string;
    is_passed?: boolean;
};
type OrderDetailsData = {
    ordering_channel_logo?: any;
    order_value?: string;
    fynd_order_id: string;
    affiliate_id?: string;
    ordering_channel?: string;
    cod_charges?: string;
    order_date?: string;
    tax_details?: any;
    source?: string;
};
type ShipmentInfoResponse = {
    delivery_details?: UserDetailsData;
    picked_date?: string;
    platform_logo: boolean;
    affiliate_shipment_id: string;
    replacement_details?: string;
    total_items?: number;
    go_green?: boolean;
    enable_dp_tracking?: boolean;
    is_fynd_store?: string;
    due_date?: string;
    bags?: OrderBags[];
    lock_status: string;
    beneficiary_details?: boolean;
    current_shipment_status: any;
    shipment_id: string;
    operational_status?: string;
    delivery_status: any[];
    pay_button?: string;
    priority_text?: string;
    shipment_status?: string;
    bag_status_history?: BagStatusHistory[];
    can_return?: boolean;
    total_bags?: number;
    email_id: string;
    shipment_images?: string[];
    billing_details?: UserDetailsData;
    user_info?: any;
    coupon?: any;
    custom_meta?: any[];
    vertical?: string;
    forward_order_status?: any[];
    dp_details?: DPDetailsData;
    user_id: string;
    company: any;
    status_progress: number;
    gst_details?: GSTDetailsData;
    escalation?: any;
    child_nodes?: string[];
    enable_tracking?: boolean;
    secured_delivery_flag?: string;
    refund_details?: any;
    journey_type?: string;
    user_agent?: string;
    mid?: string;
    prices?: Prices;
    invoice: any;
    can_break: string;
    can_cancel?: boolean;
    refund_text?: string;
    is_invoiced: boolean;
    order_created_time?: string;
    fyndstore_emp: any;
    forward_tracking_list?: any[];
    is_not_fynd_source: boolean;
    shipment_quantity?: number;
    payments?: ShipmentPayments;
    forward_shipment_status?: any[];
    is_fynd_coupon: boolean;
    order_status: any;
    kirana_store_id?: string;
    order_type: string;
    credit_note_id: string;
    is_packaging_order: boolean;
    items: any[];
    delivery_slot?: any;
    status?: ShipmentStatusData;
    fulfilling_store?: FulfillingStore;
    bank_data?: any;
    ordering_store: any;
    tracking_list?: TrackingList[];
    tracking_url: string;
    payment_mode?: string;
    order?: OrderDetailsData;
    packaging_type?: string;
    is_pdsr?: string;
};
type OrderMeta = {
    order_tags?: any[];
    comment?: string;
    payment_type?: string;
    extra_meta?: any;
    order_child_entities?: string[];
    currency_symbol?: string;
    order_type?: string;
    staff?: any;
    employee_id?: number;
    mongo_cart_id?: number;
    customer_note?: string;
    ordering_store?: number;
    files?: any[];
    cart_id?: number;
    order_platform?: string;
};
type OrderDict = {
    fynd_order_id: string;
    prices?: Prices;
    order_date: string;
    payment_methods?: any;
    meta?: OrderMeta;
};
type PlatformShipment = {
    delivery_details?: UserDetailsData;
    picked_date?: string;
    platform_logo?: string;
    total_items?: number;
    enable_dp_tracking?: boolean;
    bags?: OrderBags[];
    shipment_id: string;
    operational_status?: string;
    priority_text?: string;
    shipment_status?: string;
    bag_status_history?: BagStatusHistory[];
    total_bags?: number;
    shipment_images?: string[];
    billing_details?: UserDetailsData;
    coupon?: any;
    custom_meta?: any[];
    vertical?: string;
    dp_details?: DPDetailsData;
    gst_details?: GSTDetailsData;
    journey_type?: string;
    user_agent?: string;
    prices?: Prices;
    shipment_quantity?: number;
    payments?: ShipmentPayments;
    delivery_slot?: any;
    status?: ShipmentStatusData;
    fulfilling_store?: FulfillingStore;
    tracking_list?: TrackingList[];
    payment_mode?: string;
    order?: OrderDetailsData;
    packaging_type?: string;
};
type ShipmentDetailsResponse = {
    order?: OrderDict;
    shipments?: PlatformShipment[];
    success: boolean;
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
    value: string;
    total_items?: number;
    text: string;
};
type LaneConfigResponse = {
    super_lanes?: SuperLane[];
};
type PlatformChannel = {
    name?: string;
    logo?: string;
};
type PlatformBreakupValues = {
    display?: string;
    name?: string;
    value?: string;
};
type PlatformOrderItems = {
    order_value?: number;
    channel?: PlatformChannel;
    user_info?: UserDataInfo;
    order_id?: string;
    order_created_time?: string;
    breakup_values?: PlatformBreakupValues[];
    payment_mode?: string;
    total_order_value?: number;
    shipments?: PlatformShipment[];
    meta?: any;
};
type OrderListingResponse = {
    message?: string;
    success?: boolean;
    items?: PlatformOrderItems[];
    total_count?: number;
    lane?: string;
    page?: Page;
};
type Options = {
    value?: number;
    text?: string;
};
type MetricsCount = {
    value: number;
    text: string;
    key: string;
    options?: Options[];
};
type MetricCountResponse = {
    items?: MetricsCount[];
};
type PlatformTrack = {
    raw_status?: string;
    updated_time?: string;
    reason?: string;
    awb?: string;
    status?: string;
    last_location_recieved_at?: string;
    shipment_type?: string;
    account_name?: string;
    updated_at?: string;
    meta?: any;
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
    report_id?: string;
    display_name?: string;
    report_type?: string;
    request_details?: any;
    status?: string;
    s3_key?: string;
    report_name?: string;
    report_created_at?: string;
    report_requested_at?: string;
};
type JioCodeUpsertDataSet = {
    article_id?: string;
    company_id?: string;
    jio_code?: string;
    item_id?: string;
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
    trace_id?: string;
    identifier?: string;
    success?: boolean;
    data?: any[];
    error?: NestedErrorSchemaDataSet[];
};
type BulkInvoicingResponse = {
    message?: string;
    success: boolean;
};
type BulkInvoiceLabelResponse = {
    label?: any;
    company_id?: string;
    store_name?: string;
    invoice?: any;
    batch_id: string;
    do_invoice_label_generated: boolean;
    store_code?: string;
    invoice_status?: string;
    data?: any;
    store_id?: string;
};
type FileUploadResponse = {
    expiry?: number;
    url?: string;
};
type URL = {
    url?: string;
};
type FileResponse = {
    file_path?: string;
    size?: number;
    tags?: string[];
    upload?: FileUploadResponse;
    content_type?: string;
    file_name?: string;
    method?: string;
    cdn?: URL;
    operation?: string;
    namespace?: string;
};
type BulkListingPage = {
    size?: number;
    has_next?: boolean;
    current?: number;
    total?: number;
    has_previous?: boolean;
    type?: string;
};
type bulkListingData = {
    store_name?: string;
    processing_shipments?: string[];
    failed?: number;
    successful?: number;
    successful_shipments?: any[];
    failed_shipments?: any[];
    processing?: number;
    user_id?: string;
    id?: string;
    company_id?: number;
    batch_id?: string;
    store_code?: string;
    store_id?: number;
    total?: number;
    uploaded_on?: string;
    excel_url?: string;
    user_name?: string;
    file_name?: string;
    status?: string;
};
type BulkListingResponse = {
    error?: string;
    page?: BulkListingPage;
    success?: boolean;
    data?: bulkListingData[];
};
type DateRange = {
    from_date?: string;
    to_date?: string;
};
type ManifestFilter = {
    dp_ids?: string;
    store_name?: string;
    dp_name?: string;
    date_range?: DateRange;
    sales_channel_name?: string;
    lane?: string;
    sales_channels?: string;
    stores?: string;
};
type GeneratedManifestItem = {
    filters?: ManifestFilter;
    company_id?: number;
    created_by?: string;
    manifest_id?: string;
    status?: string;
    is_active?: boolean;
    created_at?: string;
};
type ManifestPage = {
    size?: string;
    has_next?: boolean;
    current?: string;
    total?: number;
    has_previous?: boolean;
    type?: string;
};
type GeneratedManifestResponse = {
    items?: GeneratedManifestItem[];
    page?: ManifestPage;
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
    filters?: ManifestFilter;
    company_id?: number;
    uid?: number;
    created_by?: string;
    manifest_id?: string;
    status?: string;
    user_id?: number;
    is_active?: boolean;
    created_at?: string;
    id?: number;
    meta?: ManifestDetailMeta;
};
type ManifestDetailItem = {
    item_qty?: number;
    invoice_id?: string;
    order_id?: string;
    awb?: string;
    shipment_id?: string;
};
type ManifestDetailResponse = {
    manifest_details?: ManifestDetail[];
    additional_shipment_count?: number;
    items?: ManifestDetailItem[];
    page?: ManifestPage;
};
type QuestionSet = {
    id?: number;
    display_name?: string;
};
type Reason = {
    question_set?: QuestionSet[];
    qc_type?: string[];
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
    failed_shipments_count?: number;
    successful_shipments_count?: number;
    company_id?: string;
    successful_shipment_ids?: string[];
    batch_id?: string;
    total_shipments_count?: number;
    processing_shipments_count?: number;
};
type BulkActionDetailsResponse = {
    message?: string;
    success?: string;
    data?: BulkActionDetailsDataField[];
    status?: boolean;
    failed_records?: string[];
    user_id?: string;
    error?: string[];
    uploaded_on?: string;
    uploaded_by?: string;
};
type Attributes = {
    marketer_name?: string;
    primary_color_hex?: string;
    essential?: string;
    name?: string;
    brand_name?: string;
    marketer_address?: string;
    primary_color?: string;
    primary_material?: string;
    gender?: string[];
};
type Item = {
    image: string[];
    attributes: Attributes;
    l1_category?: string[];
    l3_category_name?: string;
    l1_category_id?: number;
    l3_category?: number;
    code?: string;
    can_return?: boolean;
    last_updated_at?: string;
    department_id?: number;
    size: string;
    slug_key: string;
    brand_id: number;
    color?: string;
    meta?: any;
    brand: string;
    can_cancel?: boolean;
    name: string;
    l2_category?: string[];
    gender?: string;
    branch_url?: string;
    webstore_product_url?: string;
    item_id: number;
    l2_category_id?: number;
};
type ArticleDetails = {
    status?: any;
};
type BagGSTDetails = {
    cgst_gst_fee: string;
    igst_tax_percentage: number;
    gst_tax_percentage: number;
    gst_tag: string;
    value_of_good: number;
    hsn_code_id: string;
    sgst_gst_fee: string;
    gstin_code?: string;
    cgst_tax_percentage: number;
    sgst_tax_percentage: number;
    brand_calculated_amount: number;
    igst_gst_fee: string;
    tax_collected_at_source: number;
    gst_fee: number;
    hsn_code: string;
    is_default_hsn_code?: boolean;
};
type B2BPODetails = {
    docker_number?: string;
    po_tax_amount?: number;
    po_line_amount?: number;
    item_base_price?: number;
    partial_can_ret?: boolean;
    total_gst_percentage?: number;
};
type BagMeta = {
    b2b_po_details?: B2BPODetails;
};
type Brand = {
    created_on?: number;
    script_last_ran?: string;
    logo?: string;
    brand_id: number;
    pickup_location?: string;
    brand_name: string;
    company: string;
    invoice_prefix?: string;
    modified_on?: number;
    credit_note_expiry_days?: number;
    credit_note_allowed?: boolean;
    start_date?: string;
    is_virtual_invoice?: boolean;
};
type AffiliateMeta = {
    is_priority?: boolean;
    coupon_code?: string;
    channel_shipment_id?: string;
    employee_discount?: number;
    due_date?: string;
    order_item_id?: string;
    size_level_total_qty?: number;
    channel_order_id?: string;
    quantity?: number;
    box_type?: string;
    loyalty_discount?: number;
};
type PDFLinks = {
    b2b?: string;
    label?: string;
    invoice_type: string;
    label_type: string;
    label_a4?: string;
    invoice?: string;
    po_invoice?: string;
    invoice_a4?: string;
    invoice_pos?: string;
    label_pos?: string;
    label_a6?: string;
    credit_note_url?: string;
    invoice_a6?: string;
};
type LockData = {
    locked?: boolean;
    lock_message?: string;
    mto?: boolean;
};
type EInvoice = {
    error_message?: string;
    acknowledge_date?: string;
    error_code?: string;
    signed_invoice?: string;
    acknowledge_no?: number;
    signed_qr_code?: string;
    irn?: string;
};
type EinvoiceInfo = {
    credit_note?: EInvoice;
    invoice?: EInvoice;
};
type DebugInfo = {
    stormbreaker_uuid?: string;
};
type BuyerDetails = {
    pincode: number;
    city: string;
    gstin: string;
    state: string;
    ajio_site_id?: string;
    name: string;
    address: string;
};
type Formatted = {
    f_min?: string;
    f_max?: string;
};
type ShipmentTimeStamp = {
    t_min?: string;
    t_max?: string;
};
type ShipmentMeta = {
    awb_number?: string;
    lock_data?: LockData;
    einvoice_info?: EinvoiceInfo;
    due_date?: string;
    return_details?: any;
    assign_dp_from_sb?: boolean;
    dp_id?: string;
    same_store_available: boolean;
    bag_weight?: any;
    b2c_buyer_details?: any;
    dp_options?: any;
    store_invoice_updated_date?: string;
    packaging_name?: string;
    return_affiliate_order_id?: string;
    marketplace_store_id?: string;
    external?: any;
    fulfilment_priority_text?: string;
    shipment_weight?: number;
    auto_trigger_dp_assignment_acf: boolean;
    ewaybill_info?: any;
    dp_name?: string;
    debug_info?: DebugInfo;
    return_affiliate_shipment_id?: string;
    forward_affiliate_order_id?: string;
    b2b_buyer_details?: BuyerDetails;
    return_awb_number?: string;
    shipment_volumetric_weight?: number;
    po_number?: string;
    order_type?: string;
    forward_affiliate_shipment_id?: string;
    formatted?: Formatted;
    dp_sort_key?: string;
    return_store_node?: number;
    weight: number;
    timestamp?: ShipmentTimeStamp;
    box_type?: string;
};
type AffiliateDetails = {
    affiliate_store_id: string;
    affiliate_meta: AffiliateMeta;
    pdf_links?: PDFLinks;
    affiliate_shipment_id: string;
    shipment_meta: ShipmentMeta;
    affiliate_order_id: string;
    affiliate_id?: string;
    company_affiliate_tag?: string;
    affiliate_bag_id: string;
    ad_id?: string;
};
type AffiliateBagDetails = {
    affiliate_meta: AffiliateMeta;
    employee_discount?: number;
    affiliate_order_id: string;
    affiliate_bag_id: string;
    loyalty_discount?: number;
};
type Dates = {
    delivery_date?: any;
    order_created?: string;
};
type Dimensions = {
    length?: number;
    unit?: string;
    is_default?: boolean;
    width?: number;
    height?: number;
};
type ReturnConfig = {
    time?: number;
    returnable?: boolean;
    unit?: string;
};
type Weight = {
    shipping?: number;
    unit?: string;
    is_default?: boolean;
};
type Article = {
    esp_modified?: any;
    a_set?: any;
    dimensions?: Dimensions;
    identifiers: Identifier;
    seller_identifier: string;
    size: string;
    uid: string;
    raw_meta?: any;
    return_config?: ReturnConfig;
    is_set?: boolean;
    _id: string;
    code?: string;
    weight?: Weight;
    child_details?: any;
};
type BagReturnableCancelableStatus = {
    enable_tracking: boolean;
    is_returnable: boolean;
    is_customer_return_allowed: boolean;
    can_be_cancelled: boolean;
    is_active: boolean;
};
type Document = {
    verified: boolean;
    value: string;
    ds_type: string;
    url?: string;
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
type StoreEinvoice = {
    username?: string;
    password?: string;
    user?: string;
    enabled: boolean;
};
type StoreEwaybill = {
    enabled?: boolean;
};
type StoreGstCredentials = {
    e_invoice?: StoreEinvoice;
    e_waybill?: StoreEwaybill;
};
type StoreMeta = {
    timing?: any[];
    display_name: string;
    stage: string;
    documents?: StoreDocuments;
    einvoice_portal_details?: EInvoicePortalDetails;
    product_return_config?: any;
    ewaybill_portal_details?: any;
    gst_number?: string;
    gst_credentials: StoreGstCredentials;
    notification_emails?: string[];
    additional_contact_details?: any;
};
type StoreAddress = {
    state: string;
    email?: string;
    longitude: number;
    address_category: string;
    address1: string;
    created_at: string;
    area?: string;
    city: string;
    country_code: string;
    address_type: string;
    contact_person: string;
    phone: string;
    version?: string;
    pincode: number;
    latitude: number;
    address2?: string;
    country: string;
    updated_at: string;
    landmark?: string;
};
type Store = {
    state: string;
    longitude: number;
    is_enabled_for_recon?: boolean;
    code?: string;
    order_integration_id?: string;
    login_username: string;
    mall_area?: string;
    packaging_material_count?: number;
    alohomora_user_id?: number;
    brand_id?: any;
    brand_store_tags?: string[];
    address1: string;
    is_active?: boolean;
    created_at: string;
    fulfillment_channel: string;
    is_archived?: boolean;
    meta: StoreMeta;
    location_type: string;
    parent_store_id?: number;
    city: string;
    vat_no?: string;
    company_id: number;
    store_address_json?: StoreAddress;
    name: string;
    contact_person: string;
    store_active_from?: string;
    mall_name?: string;
    phone: number;
    pincode: string;
    store_email: string;
    latitude: number;
    address2?: string;
    s_id: string;
    country: string;
    updated_at?: string;
};
type BagDetailsPlatformResponse = {
    qc_required?: any;
    applied_promos?: any[];
    b_type?: string;
    operational_status?: string;
    shipment_id?: string;
    line_number?: number;
    order_integration_id?: string;
    bag_status_history?: BagStatusHistory;
    display_name?: string;
    item: Item;
    identifier?: string;
    seller_identifier?: string;
    b_id: number;
    current_operational_status: BagStatusHistory;
    article_details?: ArticleDetails;
    bag_status: BagStatusHistory[];
    bag_update_time?: number;
    gst_details: BagGSTDetails;
    entity_type?: string;
    meta?: BagMeta;
    restore_promos?: any;
    financial_breakup: FinancialBreakup[];
    parent_promo_bags?: any;
    no_of_bags_order?: number;
    journey_type: string;
    restore_coupon?: boolean;
    prices: Prices;
    brand: Brand;
    reasons?: any[];
    affiliate_details?: AffiliateDetails;
    original_bag_list?: number[];
    quantity?: number;
    affiliate_bag_details: AffiliateBagDetails;
    dates?: Dates;
    tags?: string[];
    current_status: BagStatusHistory;
    article: Article;
    status: BagReturnableCancelableStatus;
    ordering_store?: Store;
};
type ErrorResponse = {
    message: string;
    error: string;
};
type Page1 = {
    size: number;
    item_total: number;
    has_next: boolean;
    current: number;
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
    error?: string;
    status?: number;
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
    affiliate_order_id?: string;
    bag_id?: number;
    affiliate_id?: string;
    mongo_article_id?: string;
    affiliate_bag_id?: string;
    store_id: number;
    fynd_order_id?: string;
    set_id?: string;
    reason_ids?: number[];
    item_id?: string;
};
type StoreReassignResponse = {
    message?: string;
    success?: boolean;
};
type Entities = {
    affiliate_order_id?: string;
    id?: string;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    affiliate_bag_id?: string;
    reason_text: string;
};
type UpdateShipmentLockPayload = {
    action_type: string;
    action: string;
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
    is_bag_locked?: boolean;
    affiliate_id?: string;
    affiliate_shipment_id?: string;
    original_filter?: OriginalFilter;
    status?: string;
    is_shipment_locked?: boolean;
    shipment_id?: string;
    bags?: Bags[];
    lock_status?: boolean;
};
type UpdateShipmentLockResponse = {
    message?: string;
    check_response?: CheckResponse[];
    success?: boolean;
};
type AnnouncementResponse = {
    created_at?: string;
    to_datetime?: string;
    id: number;
    company_id?: number;
    description?: string;
    logo_url?: string;
    platform_name?: string;
    title?: string;
    platform_id?: string;
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
    identifier?: string;
    line_number?: number;
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
type Products = {
    identifier?: string;
    line_number?: number;
    quantity?: number;
};
type ShipmentsRequest = {
    identifier: string;
    reasons?: ReasonsData;
    data_updates?: DataUpdates;
    products?: Products[];
};
type StatuesRequest = {
    shipments?: ShipmentsRequest[];
    exclude_bags_next_state?: string;
    status?: string;
};
type UpdateShipmentStatusRequest = {
    lock_after_transition?: boolean;
    statuses?: StatuesRequest[];
    task?: boolean;
    force_transition?: boolean;
    unlock_before_transition?: boolean;
};
type ShipmentsResponse = {
    message?: string;
    identifier?: string;
    exception?: string;
    status?: number;
    stack_trace?: string;
    final_state?: any;
    meta?: any;
    code?: string;
};
type StatuesResponse = {
    shipments?: ShipmentsResponse[];
};
type UpdateShipmentStatusResponseBody = {
    statuses?: StatuesResponse[];
};
type OrderUser = {
    state: string;
    country: string;
    city: string;
    last_name: string;
    pincode: string;
    mobile: number;
    address1?: string;
    phone: number;
    first_name: string;
    email: string;
    address2?: string;
};
type ArticleDetails1 = {
    attributes: any;
    dimension: any;
    quantity: number;
    _id: string;
    weight: any;
    brand_id: number;
    category: any;
};
type LocationDetails = {
    fulfillment_id: number;
    fulfillment_type: string;
    articles: ArticleDetails1[];
};
type ShipmentDetails = {
    fulfillment_id: number;
    articles: ArticleDetails1[];
    affiliate_shipment_id: string;
    shipments: number;
    dp_id?: number;
    box_type?: string;
    meta?: any;
};
type ShipmentConfig = {
    location_details?: LocationDetails;
    source: string;
    payment_mode: string;
    journey: string;
    identifier: string;
    shipment: ShipmentDetails[];
    to_pincode: string;
    action: string;
};
type ShipmentData = {
    shipment_data: ShipmentConfig;
};
type OrderPriority = {
    affiliate_priority_code?: string;
    fulfilment_priority?: number;
    fulfilment_priority_text?: string;
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
    sku: string;
    modified_on: string;
    price_effective: number;
    seller_identifier: string;
    transfer_price: number;
    company_id: number;
    identifier: any;
    quantity: number;
    affiliate_store_id: string;
    pdf_links?: MarketPlacePdf;
    hsn_code_id: string;
    avl_qty: number;
    discount: number;
    delivery_charge: number;
    _id: string;
    store_id: number;
    item_size: string;
    unit_price: number;
    amount_paid: number;
    price_marked: number;
    item_id: number;
    affiliate_meta: any;
    fynd_store_id: string;
};
type OrderInfo = {
    payment_mode: string;
    affiliate_order_id?: string;
    shipping_address: OrderUser;
    discount: number;
    items: any;
    cod_charges: number;
    shipment?: ShipmentData;
    order_value: number;
    order_priority?: OrderPriority;
    coupon?: string;
    payment?: any;
    delivery_charges: number;
    user: UserData;
    bags: AffiliateBag[];
    billing_address: OrderUser;
};
type AffiliateStoreIdMapping = {
    store_id: number;
    marketplace_store_id: string;
};
type AffiliateInventoryLogisticsConfig = {
    dp_assignment?: boolean;
};
type AffiliateInventoryStoreConfig = {
    store?: any;
};
type AffiliateInventoryPaymentConfig = {
    source?: string;
    mode_of_payment?: string;
};
type AffiliateInventoryOrderConfig = {
    force_reassignment?: boolean;
};
type AffiliateInventoryArticleAssignmentConfig = {
    post_order_reassignment?: boolean;
};
type AffiliateInventoryConfig = {
    logistics?: AffiliateInventoryLogisticsConfig;
    inventory?: AffiliateInventoryStoreConfig;
    payment?: AffiliateInventoryPaymentConfig;
    order?: AffiliateInventoryOrderConfig;
    article_assignment?: AffiliateInventoryArticleAssignmentConfig;
};
type AffiliateAppConfigMeta = {
    name: string;
    value: string;
};
type AffiliateAppConfig = {
    name: string;
    created_at: string;
    token: string;
    owner: string;
    id: string;
    description?: string;
    updated_at: string;
    secret: string;
    meta?: AffiliateAppConfigMeta[];
};
type AffiliateConfig = {
    inventory?: AffiliateInventoryConfig;
    app?: AffiliateAppConfig;
};
type Affiliate = {
    config?: AffiliateConfig;
    token: string;
    id: string;
};
type OrderConfig = {
    affiliate_store_id_mapping: AffiliateStoreIdMapping[];
    bag_end_state?: string;
    store_lookup?: string;
    article_lookup?: string;
    create_user?: boolean;
    affiliate: Affiliate;
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
    message?: string;
    success?: boolean;
};
type ActionInfo = {
    display_text: string;
    slug: string;
    description: string;
    id: number;
};
type GetActionsResponse = {
    permissions: ActionInfo;
};
type HistoryDict = {
    message: string;
    ticket_id?: string;
    bag_id?: number;
    l1_detail?: string;
    l3_detail?: string;
    ticket_url?: string;
    type: string;
    l2_detail?: string;
    createdat: string;
    user: string;
};
type ShipmentHistoryResponse = {
    activity_history?: HistoryDict[];
};
type ErrorDetail = {
    message?: string;
    success?: boolean;
};
type SmsDataPayload = {
    message: string;
    payment_mode: string;
    amount_paid: number;
    brand_name: string;
    phone_number: number;
    customer_name: string;
    country_code: string;
    shipment_id: number;
    order_id: string;
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
type Meta = {
    state_manager_used?: string;
    kafka_emission_status?: number;
};
type ShipmentDetail = {
    id: number;
    bag_list?: number[];
    remarks?: string;
    status?: string;
    shipment_id?: string;
    meta: Meta;
};
type OrderStatusData = {
    order_details: OrderDetails;
    shipment_details?: ShipmentDetail[];
    errors?: string[];
};
type OrderStatusResult = {
    result?: OrderStatusData[];
    success: string;
};
type ManualAssignDPToShipment = {
    order_type: string;
    shipment_ids?: string[];
    qc_required: string;
    dp_id: number;
};
type ManualAssignDPToShipmentResponse = {
    errors?: string[];
    success: string;
};
type BillingInfo = {
    gender?: string;
    address1: string;
    title?: string;
    country_code?: string;
    address2?: string;
    middle_name?: string;
    city: string;
    primary_mobile_number: string;
    external_customer_code?: string;
    first_name: string;
    state_code?: string;
    floor_no?: string;
    house_no?: string;
    alternate_email?: string;
    alternate_mobile_number?: string;
    customer_code?: string;
    primary_email: string;
    state: string;
    country: string;
    last_name?: string;
    pincode: string;
};
type TaxInfo = {
    b2b_gstin_number?: string;
    gstin?: string;
};
type Tax = {
    name: string;
    breakup?: any[];
    amount: any;
    rate: number;
};
type Charge = {
    name: string;
    amount: any;
    tax?: Tax;
    type: string;
    code?: string;
};
type LineItem = {
    custom_messasge?: string;
    quantity?: number;
    charges?: Charge[];
    external_line_id?: string;
    seller_identifier: string;
    meta?: any;
};
type ProcessingDates = {
    dispatch_after_date?: string;
    customer_pickup_slot?: any;
    dp_pickup_slot?: any;
    pack_by_date?: string;
    confirm_by_date?: string;
    dispatch_by_date?: string;
};
type Shipment = {
    priority?: number;
    location_id: number;
    external_shipment_id?: string;
    line_items: LineItem[];
    meta?: any;
    processing_dates?: ProcessingDates;
};
type PaymentMethod = {
    name: string;
    refund_by: string;
    transaction_data?: any;
    amount: number;
    mode: string;
    meta?: any;
    collect_by: string;
};
type PaymentInfo = {
    primary_mode: string;
    payment_methods?: PaymentMethod[];
};
type ShippingInfo = {
    geo_location?: any;
    gender?: string;
    address_type?: string;
    shipping_type?: string;
    address1: string;
    title?: string;
    country_code?: string;
    address2?: string;
    middle_name?: string;
    city: string;
    primary_mobile_number: string;
    external_customer_code?: string;
    first_name: string;
    state_code?: string;
    floor_no?: string;
    house_no?: string;
    landmark?: string;
    alternate_email?: string;
    alternate_mobile_number?: string;
    customer_code?: string;
    primary_email: string;
    state: string;
    country: string;
    last_name?: string;
    pincode: string;
    slot?: any[];
};
type CreateOrderAPI = {
    billing_info: BillingInfo;
    tax_info?: TaxInfo;
    currency_info?: any;
    external_creation_date?: string;
    charges?: Charge[];
    shipments: Shipment[];
    external_order_id?: string;
    payment_info: PaymentInfo;
    shipping_info: ShippingInfo;
    meta?: any;
};
type CreateOrderErrorReponse = {
    message: string;
    request_id?: string;
    exception?: string;
    info?: any;
    status: number;
    stack_trace?: string;
    meta?: string;
    code?: string;
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
    mode_of_payment?: string;
    payment_methods?: PaymentMethods[];
};
type CreateChannelConfig = {
    logo_url?: any;
    dp_configuration?: DpConfiguration;
    shipment_assignment?: string;
    lock_states?: string[];
    location_reassignment?: boolean;
    payment_info?: CreateChannelPaymentInfo;
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
    order_details?: FyndOrderIdList[];
    mobile: number;
    start_date: string;
    end_date: string;
};
type GetSearchWordsData = {
    result?: any;
    is_active?: boolean;
    uid?: string;
    app_id?: string;
    words?: string[];
    _custom_json?: any;
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
    result: SearchKeywordResult;
    is_active?: boolean;
    app_id?: string;
    words?: string[];
    _custom_json?: any;
};
type DeleteResponse = {
    message?: string;
};
type GetSearchWordsResponse = {
    items?: GetSearchWordsData[];
    page?: Page;
};
type GetAutocompleteWordsData = {
    uid?: string;
    results?: any[];
    app_id?: string;
    words?: string[];
    _custom_json?: any;
};
type GetAutocompleteWordsResponse = {
    items?: GetAutocompleteWordsData[];
    page?: Page;
};
type Media = {
    aspect_ratio?: string;
    url?: string;
    type?: string;
};
type AutocompletePageAction = {
    params?: any;
    query?: any;
    url?: string;
    type?: string;
};
type AutocompleteAction = {
    page?: AutocompletePageAction;
    type?: string;
};
type AutocompleteResult = {
    logo?: Media;
    display?: string;
    action?: AutocompleteAction;
    _custom_json?: any;
};
type CreateAutocompleteKeyword = {
    is_active?: boolean;
    results?: AutocompleteResult[];
    app_id?: string;
    words?: string[];
    _custom_json?: any;
};
type CreateAutocompleteWordsResponse = {
    results?: any[];
    app_id?: string;
    words?: string[];
    _custom_json?: any;
};
type ProductBundleItem = {
    product_uid: number;
    allow_remove?: boolean;
    min_quantity: number;
    auto_add_to_cart?: boolean;
    max_quantity: number;
    auto_select?: boolean;
};
type ProductBundleRequest = {
    name: string;
    same_store_assignment?: boolean;
    choice: string;
    logo?: string;
    company_id?: number;
    slug: string;
    is_active: boolean;
    modified_on?: string;
    products: ProductBundleItem[];
    meta?: any;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
    page_visibility?: string[];
};
type GetProductBundleCreateResponse = {
    name: string;
    same_store_assignment?: boolean;
    choice: string;
    logo?: string;
    company_id?: number;
    slug: string;
    is_active: boolean;
    modified_on?: string;
    products: ProductBundleItem[];
    meta?: any;
    id?: string;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
    page_visibility?: string[];
};
type GetProductBundleListingResponse = {
    items?: GetProductBundleCreateResponse[];
    page?: Page;
};
type ProductBundleUpdateRequest = {
    name: string;
    same_store_assignment?: boolean;
    choice: string;
    logo?: string;
    company_id?: number;
    slug: string;
    is_active: boolean;
    modified_on?: string;
    products: ProductBundleItem[];
    meta?: any;
    modified_by?: any;
    page_visibility?: string[];
};
type Price = {
    min_effective?: number;
    max_marked?: number;
    min_marked?: number;
    max_effective?: number;
    currency?: string;
};
type LimitedProductData = {
    name?: string;
    price?: any;
    images?: string[];
    slug?: string;
    attributes?: any;
    uid?: number;
    item_code?: string;
    quantity?: number;
    identifier?: any;
    sizes?: string[];
    country_of_origin?: string;
    short_description?: string;
};
type Size = {
    value?: string;
    display?: string;
    is_available?: boolean;
    quantity?: number;
};
type GetProducts = {
    product_uid?: number;
    allow_remove?: boolean;
    min_quantity?: number;
    price?: Price;
    auto_add_to_cart?: boolean;
    product_details?: LimitedProductData;
    max_quantity?: number;
    sizes?: Size[];
    auto_select?: boolean;
};
type GetProductBundleResponse = {
    name?: string;
    same_store_assignment?: boolean;
    choice?: string;
    company_id?: number;
    logo?: string;
    slug?: string;
    is_active?: boolean;
    products?: GetProducts[];
    meta?: any;
    page_visibility?: string[];
};
type Guide = {
    meta?: Meta;
};
type ValidateSizeGuide = {
    name: string;
    active?: boolean;
    brand_id?: number;
    image?: string;
    company_id?: number;
    description?: string;
    id?: string;
    modified_on?: string;
    title: string;
    guide?: Guide;
    tag?: string;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
    subtitle?: string;
};
type ListSizeGuide = {
    items?: any[];
    page?: any;
};
type SizeGuideResponse = {
    active?: boolean;
    name?: string;
    brand_id?: number;
    company_id?: number;
    id?: string;
    modified_on?: string;
    title?: string;
    guide?: any;
    tag?: string;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
    subtitle?: string;
};
type MOQData = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type SEOData = {
    title?: any;
    description?: any;
};
type OwnerAppItemResponse = {
    is_cod?: boolean;
    is_gift?: boolean;
    moq?: MOQData;
    alt_text?: any;
    seo?: SEOData;
};
type ApplicationItemMOQ = {
    maximum?: number;
    minimum?: number;
    increment_unit?: number;
};
type MetaFields = {
    value: any;
    key: any;
};
type ApplicationItemSEO = {
    title?: any;
    description?: any;
};
type ApplicationItemMeta = {
    is_cod?: boolean;
    is_gift?: boolean;
    moq?: ApplicationItemMOQ;
    _custom_json?: any;
    _custom_meta?: MetaFields[];
    alt_text?: any;
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
type AttributeDetailsGroup = {
    name: string;
    key?: string;
    logo?: string;
    display_type: string;
    slug?: string;
    is_active: boolean;
    unit?: string;
    priority: number;
};
type AppConfigurationDetail = {
    is_default: boolean;
    name?: string;
    template_slugs?: string[];
    logo?: string;
    slug: string;
    is_active: boolean;
    attributes?: AttributeDetailsGroup[];
    app_id: string;
    priority: number;
};
type ConfigErrorResponse = {
    message: string;
};
type PageResponseType = {
    total_count: number;
    next: number;
    current: number;
    has_next: boolean;
};
type GetConfigResponse = {
    page: PageResponseType;
    data: any[];
};
type ConfigSuccessResponse = {
    message: string;
};
type AppConfigurationsSort = {
    is_default: boolean;
    name?: string;
    key: string;
    logo?: string;
    is_active: boolean;
    default_key: string;
    app_id: string;
    priority: number;
};
type AllowSingleRequest = {
    allow_single: boolean;
};
type DefaultKeyRequest = {
    default_key: string;
};
type GetCatalogConfigurationDetailsProduct = {
    variant?: any;
    detail?: any;
    compare?: any;
    similar?: any;
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
type GetCatalogConfigurationMetaData = {
    product?: GetCatalogConfigurationDetailsProduct;
    listing?: MetaDataListingResponse;
};
type ProductSize = {
    max: number;
    min: number;
};
type ConfigurationProductVariantConfig = {
    name: string;
    key: string;
    logo?: string;
    display_type: string;
    size: ProductSize;
    is_active: boolean;
    priority: number;
};
type ConfigurationProductVariant = {
    config?: ConfigurationProductVariantConfig[];
};
type ConfigurationProductConfig = {
    key: string;
    logo?: string;
    size?: ProductSize;
    is_active: boolean;
    title?: string;
    priority: number;
    subtitle?: string;
};
type ConfigurationProductSimilar = {
    config?: ConfigurationProductConfig[];
};
type ConfigurationProduct = {
    variant: ConfigurationProductVariant;
    similar: ConfigurationProductSimilar;
};
type ConfigurationBucketPoints = {
    start?: number;
    display?: string;
    end?: number;
};
type ConfigurationListingFilterValue = {
    bucket_points?: ConfigurationBucketPoints[];
    value?: string;
    condition?: string;
    map_values?: any[];
    map?: any;
    sort?: string;
};
type ConfigurationListingFilterConfig = {
    name?: string;
    type: string;
    key: string;
    logo?: string;
    is_active: boolean;
    value_config?: ConfigurationListingFilterValue;
    priority: number;
    display_name?: string;
};
type ConfigurationListingFilter = {
    attribute_config?: ConfigurationListingFilterConfig[];
    allow_single: boolean;
};
type ConfigurationListingSortConfig = {
    name?: string;
    key: string;
    logo?: string;
    is_active: boolean;
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
    type?: string;
    config_type: string;
    config_id?: string;
    modified_on?: string;
    app_id: string;
    listing?: ConfigurationListing;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
};
type AppCatalogConfiguration = {
    product?: ConfigurationProduct;
    type?: string;
    config_type: string;
    config_id?: string;
    id?: string;
    modified_on?: string;
    app_id: string;
    listing?: ConfigurationListing;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
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
    product?: GetCatalogConfigurationDetailsProduct;
    config_type: string;
    config_id?: string;
    id?: string;
    app_id: string;
    listing?: GetCatalogConfigurationDetailsSchemaListing;
};
type GetAppCatalogEntityConfiguration = {
    is_default?: boolean;
    data?: EntityConfiguration;
};
type ProductSortOn = {
    value?: string;
    name?: string;
    is_selected?: boolean;
};
type ProductFiltersValue = {
    display: string;
    value: any;
    is_selected: boolean;
    currency_code?: string;
    selected_max?: number;
    selected_min?: number;
    currency_symbol?: string;
    min?: number;
    query_format?: string;
    display_format?: string;
    max?: number;
    count?: number;
};
type ProductFiltersKey = {
    name: string;
    display: string;
    logo?: string;
    operators?: string[];
    kind?: string;
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
type CollectionQuery = {
    attribute: string;
    value: any[];
    op: string;
};
type UserInfo = {
    email?: string;
    username?: string;
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
    duration?: number;
    start?: string;
    cron?: string;
    end?: string;
    next_schedule?: NextSchedule[];
};
type CollectionImage = {
    aspect_ratio: string;
    url: string;
};
type CollectionBanner = {
    portrait: CollectionImage;
    landscape: CollectionImage;
};
type CreateCollection = {
    visible_facets_keys?: string[];
    app_id: string;
    meta?: any;
    _locale_language?: any;
    sort_on?: string;
    query?: CollectionQuery[];
    allow_sort?: boolean;
    tags?: string[];
    created_by?: UserInfo;
    published?: boolean;
    _custom_json?: any;
    seo?: SeoDetail;
    badge?: CollectionBadge;
    slug: string;
    is_active?: boolean;
    _schedule?: CollectionSchedule;
    priority?: number;
    name: string;
    allow_facets?: boolean;
    type: string;
    logo: CollectionImage;
    description?: string;
    is_visible?: boolean;
    banners: CollectionBanner;
    modified_by?: UserInfo;
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
    visible_facets_keys?: string[];
    app_id?: string;
    meta?: any;
    sort_on?: string;
    query?: CollectionQuery[];
    allow_sort?: boolean;
    cron?: any;
    badge?: any;
    slug?: string;
    is_active?: boolean;
    _schedule?: any;
    priority?: number;
    name?: string;
    allow_facets?: boolean;
    type?: string;
    logo?: BannerImage;
    description?: string;
    banners?: ImageUrls;
    tag?: string[];
};
type Media1 = {
    meta?: any;
    url: string;
    type?: string;
};
type GetCollectionDetailNest = {
    visible_facets_keys?: string[];
    app_id?: string;
    meta?: any;
    action?: Action;
    query?: CollectionQuery[];
    allow_sort?: boolean;
    cron?: any;
    badge?: any;
    slug?: string;
    is_active?: boolean;
    _schedule?: any;
    priority?: number;
    name?: string;
    allow_facets?: boolean;
    type?: string;
    logo?: Media1;
    description?: string;
    banners?: ImageUrls;
    uid?: string;
    tag?: string[];
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
    name?: string;
    allow_facets?: boolean;
    query?: CollectionQuery[];
    badge?: any;
    type?: string;
    visible_facets_keys?: string[];
    logo?: Media1;
    allow_sort?: boolean;
    description?: string;
    slug?: string;
    is_active?: boolean;
    banners?: ImageUrls;
    app_id?: string;
    cron?: any;
    meta?: any;
    tag?: string[];
    _schedule?: any;
    priority?: number;
};
type UpdateCollection = {
    visible_facets_keys?: string[];
    meta?: any;
    _locale_language?: any;
    sort_on?: string;
    query?: CollectionQuery[];
    allow_sort?: boolean;
    tags?: string[];
    published?: boolean;
    _custom_json?: any;
    seo?: SeoDetail;
    badge?: CollectionBadge;
    slug?: string;
    is_active?: boolean;
    _schedule?: CollectionSchedule;
    priority?: number;
    name?: string;
    allow_facets?: boolean;
    type?: string;
    logo?: CollectionImage;
    description?: string;
    is_visible?: boolean;
    banners?: CollectionBanner;
    modified_by?: UserInfo;
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
    items_not_updated?: number[];
    message?: string;
};
type Price1 = {
    max?: number;
    currency_symbol?: string;
    currency_code?: string;
    min?: number;
};
type ProductListingPrice = {
    marked?: Price1;
    effective?: Price1;
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
    name?: string;
    action?: Action;
    logo?: Media1;
    uid?: number;
};
type ProductListingDetail = {
    promo_meta?: any;
    price?: ProductListingPrice;
    teaser_tag?: any;
    has_variant?: boolean;
    short_description?: string;
    color?: string;
    image_nature?: string;
    sellable?: boolean;
    highlights?: string[];
    product_online_date?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    similars?: string[];
    slug: string;
    item_code?: string;
    medias?: Media1[];
    rating?: number;
    discount?: string;
    name?: string;
    rating_count?: number;
    type?: string;
    tryouts?: string[];
    description?: string;
    uid?: number;
    attributes?: any;
    item_type?: string;
    brand?: ProductBrand;
};
type GetCollectionItemsResponse = {
    sort_on?: ProductSortOn[];
    items?: ProductListingDetail[];
    page?: Page;
    filters?: ProductFilters[];
};
type CatalogInsightBrand = {
    name?: string;
    available_articles?: number;
    available_sizes?: number;
    total_articles?: number;
    total_sizes?: number;
    article_freshness?: number;
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
    opt_level: string;
    enabled?: boolean;
    company_id?: number;
    brand_ids?: number[];
    platform?: string;
    store_ids?: number[];
};
type CompanyOptIn = {
    opt_level: string;
    enabled: boolean;
    company_id: number;
    modified_on: number;
    brand_ids: number[];
    platform: string;
    store_ids: number[];
    created_by?: any;
    created_on: number;
    modified_by?: any;
};
type GetOptInPlatform = {
    items: CompanyOptIn[];
    page: Page;
};
type OptinCompanyDetail = {
    name?: string;
    company_type?: string;
    business_type?: string;
    uid?: number;
};
type CompanyBrandDetail = {
    company_id?: number;
    brand_id?: number;
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
    name?: string;
    address?: any;
    store_code?: string;
    timing?: any;
    company_id?: number;
    modified_on?: string;
    uid?: number;
    additional_contacts?: any[];
    store_type?: string;
    manager?: any;
    documents?: any[];
    created_on?: string;
    display_name?: string;
};
type OptinStoreDetails = {
    items?: StoreDetail[];
    page?: Page;
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
    format?: string;
    multi?: boolean;
    mandatory?: boolean;
    range?: AttributeSchemaRange;
    allowed_values?: string[];
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
    mandatory_details: AttributeMasterMandatoryDetails;
    enriched?: boolean;
};
type GenderDetail = {
    name?: string;
    details?: AttributeMasterDetails;
    enabled_for_end_consumer?: boolean;
    schema?: AttributeMaster;
    logo?: string;
    description?: string;
    slug?: string;
    filters?: AttributeMasterFilter;
    departments?: string[];
    meta?: AttributeMasterMeta;
    id?: string;
    is_nested?: boolean;
};
type ProdcutTemplateCategoriesResponse = {
    items?: any[];
    page?: Page;
};
type PTErrorResponse = {
    message?: string;
    code?: string;
    errors?: any;
    status?: number;
    meta?: any;
};
type DepartmentCreateUpdate = {
    _cls?: string;
    name: string;
    platforms?: any;
    logo: string;
    slug?: string;
    is_active?: boolean;
    uid?: number;
    tags?: string[];
    _custom_json?: any;
    priority_order: number;
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
    _id?: string;
    uid?: string;
    user_id?: string;
    username?: string;
};
type GetDepartment = {
    name?: string;
    logo?: string;
    page_no?: number;
    slug?: string;
    is_active?: boolean;
    uid?: number;
    page_size?: number;
    modified_on?: string;
    search?: string;
    item_type?: string;
    created_by?: UserSerializer;
    created_on?: string;
    modified_by?: UserSerializer;
    priority_order?: number;
    synonyms?: string[];
};
type DepartmentsResponse = {
    items?: GetDepartment[];
    page?: Page;
};
type DepartmentErrorResponse = {
    message?: string;
    code?: string;
    errors?: any;
    status?: number;
    meta?: any;
};
type UserDetail = {
    super_user?: boolean;
    contact?: string;
    user_id: string;
    username: string;
};
type DepartmentModel = {
    _cls?: any;
    name: any;
    verified_by?: UserDetail;
    logo: string;
    slug?: any;
    modified_on: string;
    _id?: any;
    uid?: number;
    is_active?: boolean;
    _custom_json?: any;
    verified_on?: string;
    created_by?: UserDetail;
    created_on: string;
    modified_by?: UserDetail;
    priority_order: number;
    synonyms?: any[];
};
type ProductTemplate = {
    name?: string;
    is_expirable: boolean;
    logo?: string;
    description?: string;
    slug: string;
    is_active?: boolean;
    is_archived?: boolean;
    attributes?: string[];
    departments?: string[];
    categories?: string[];
    modified_on?: string;
    is_physical: boolean;
    tag?: string;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
};
type TemplatesResponse = {
    items?: ProductTemplate;
    page?: Page;
};
type TemplateDetails = {
    name?: string;
    is_expirable: boolean;
    logo?: string;
    description?: string;
    slug: string;
    is_active?: boolean;
    is_archived?: boolean;
    attributes?: string[];
    departments?: string[];
    categories?: string[];
    is_physical: boolean;
    id?: string;
    tag?: string;
};
type Properties = {
    return_config?: any;
    teaser_tag?: any;
    multi_size?: any;
    hsn_code?: any;
    is_dependent?: any;
    sizes?: any;
    country_of_origin?: any;
    short_description?: any;
    variants?: any;
    media?: any;
    tags?: any;
    command?: any;
    highlights?: any;
    category_slug?: any;
    trader_type?: any;
    product_publish?: any;
    size_guide?: any;
    slug?: any;
    trader?: any;
    item_code?: any;
    custom_order?: any;
    is_active?: any;
    currency?: any;
    name?: any;
    description?: any;
    product_group_tag?: any;
    item_type?: any;
    no_of_boxes?: any;
    brand_uid?: any;
};
type GlobalValidation = {
    type?: string;
    definitions?: any;
    description?: string;
    properties?: Properties;
    title?: string;
    required?: string[];
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
    country_of_origin?: string[];
    hsn_code?: string[];
};
type HSNCodesResponse = {
    message?: string;
    data?: HSNData;
};
type ProductDownloadItemsData = {
    templates?: string[];
    type?: string;
    brand?: string[];
};
type VerifiedBy = {
    user_id?: string;
    username?: string;
};
type ProductDownloadsItems = {
    seller_id?: number;
    completed_on?: string;
    template_tags?: any;
    trigger_on?: string;
    data?: ProductDownloadItemsData;
    status?: string;
    task_id?: string;
    url?: string;
    id?: string;
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
    l2: number;
    l1: number;
};
type Media2 = {
    logo: string;
    portrait: string;
    landscape: string;
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
type CategoryRequestBody = {
    name: string;
    hierarchy?: Hierarchy[];
    media?: Media2;
    marketplaces?: CategoryMapping;
    slug?: string;
    tryouts?: string[];
    is_active: boolean;
    departments: number[];
    level: number;
    priority?: number;
    synonyms?: string[];
};
type CategoryCreateResponse = {
    message?: string;
    uid?: number;
};
type Category = {
    name: string;
    hierarchy?: Hierarchy[];
    media?: Media2;
    marketplaces?: CategoryMapping;
    slug?: string;
    tryouts?: string[];
    uid?: number;
    is_active: boolean;
    departments: number[];
    modified_on?: string;
    id?: string;
    level: number;
    created_by?: any;
    created_on?: string;
    priority?: number;
    modified_by?: any;
    synonyms?: string[];
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
type NetQuantity = {
    value?: number;
    unit?: any;
};
type TeaserTag = {
    tag?: string;
    url?: string;
};
type ProductPublish = {
    is_set?: boolean;
    product_online_date?: string;
};
type Trader = {
    name: any;
    address?: string[];
    type?: string;
};
type CustomOrder = {
    manufacturing_time_unit?: string;
    manufacturing_time?: number;
    is_custom_order?: boolean;
};
type TaxIdentifier = {
    hsn_code?: string;
    reporting_hsn?: string;
    hsn_code_id?: string;
};
type ProductCreateUpdateSchemaV2 = {
    net_quantity?: NetQuantity;
    bulk_job_id?: string;
    return_config: ReturnConfig;
    teaser_tag?: TeaserTag;
    multi_size?: boolean;
    variant_media?: any;
    action?: string;
    is_dependent?: boolean;
    sizes: any[];
    country_of_origin: string;
    short_description?: string;
    variants?: any;
    change_request_id?: any;
    company_id: number;
    media?: Media1[];
    variant_group?: any;
    requester?: string;
    tags?: string[];
    highlights?: string[];
    category_slug: string;
    _custom_json?: any;
    is_set?: boolean;
    product_publish?: ProductPublish;
    size_guide?: string;
    slug: string;
    trader: Trader[];
    item_code: string;
    custom_order?: CustomOrder;
    is_active?: boolean;
    tax_identifier: TaxIdentifier;
    departments: number[];
    currency: string;
    template_tag: string;
    name: string;
    description?: string;
    product_group_tag?: string[];
    uid?: number;
    attributes?: any;
    item_type: string;
    no_of_boxes?: number;
    brand_uid: number;
    is_image_less_product?: boolean;
};
type NetQuantityResponse = {
    value?: number;
    unit?: string;
};
type ReturnConfigResponse = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type Image = {
    url?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
    aspect_ratio?: string;
};
type ProductPublished = {
    is_set?: boolean;
    product_online_date?: number;
};
type Logo = {
    url?: string;
    aspect_ratio_f?: number;
    secure_url?: string;
    aspect_ratio?: string;
};
type Product = {
    net_quantity?: NetQuantityResponse;
    verified_by?: VerifiedBy;
    return_config?: ReturnConfigResponse;
    l3_mapping?: string[];
    teaser_tag?: any;
    moq?: any;
    multi_size?: boolean;
    variant_media?: any;
    hsn_code?: string;
    is_dependent?: boolean;
    sizes?: any[];
    country_of_origin?: string;
    short_description?: string;
    variants?: any;
    category?: any;
    pending?: string;
    color?: string;
    is_image_less_product?: boolean;
    is_expirable?: boolean;
    image_nature?: string;
    images?: Image[];
    media?: Media1[];
    id?: string;
    variant_group?: any;
    tags?: string[];
    company_id?: number;
    all_identifiers?: string[];
    highlights?: string[];
    created_by?: any;
    category_slug?: string;
    category_uid?: number;
    _custom_json?: any;
    is_set?: boolean;
    product_publish?: ProductPublished;
    all_company_ids?: number[];
    size_guide?: string;
    slug?: string;
    is_active?: boolean;
    item_code?: string;
    custom_order?: any;
    departments?: number[];
    tax_identifier?: any;
    trader?: any[];
    currency?: string;
    is_physical?: boolean;
    template_tag?: string;
    name?: string;
    description?: string;
    product_group_tag?: string[];
    modified_on?: string;
    uid?: number;
    primary_color?: string;
    no_of_boxes?: number;
    attributes?: any;
    stage?: string;
    item_type?: string;
    all_sizes?: any[];
    verified_on?: string;
    brand?: Brand;
    brand_uid?: number;
    created_on?: string;
    modified_by?: any;
};
type ProductListingResponse = {
    items?: Product[];
    page?: Page;
};
type ProductVariants = {
    name?: string;
    media?: Media1[];
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
    unit?: string;
    schema: AttributeMaster;
    tags?: string[];
    variant?: boolean;
    created_by?: any;
    is_nested?: boolean;
    details: AttributeMasterDetails;
    raw_key?: string;
    slug: string;
    filters: AttributeMasterFilter;
    departments: string[];
    suggestion?: string;
    name?: string;
    enabled_for_end_consumer?: boolean;
    logo?: string;
    description?: string;
    modified_on?: string;
    created_on?: string;
    modified_by?: any;
    synonyms?: any;
};
type ProductAttributesResponse = {
    items: AttributeMasterSerializer[];
};
type SingleProductResponse = {
    data?: Product;
};
type ValidateIdentifier = {
    primary?: boolean;
    gtin_value: string;
    gtin_type: string;
};
type AllSizes = {
    item_width: number;
    item_weight: number;
    size: any;
    item_length: number;
    identifiers?: ValidateIdentifier[];
    item_height: number;
    item_dimensions_unit_of_measure: string;
    item_weight_unit_of_measure: any;
};
type GetAllSizes = {
    all_sizes?: AllSizes[];
};
type ValidateProduct = {
    valid?: boolean;
};
type UserInfo1 = {
    email?: string;
    username?: string;
    uid?: string;
    user_id?: string;
};
type BulkJob = {
    succeed?: number;
    failed?: number;
    tracking_url?: string;
    company_id: number;
    custom_template_tag?: string;
    is_active?: boolean;
    modified_on?: string;
    stage?: string;
    total?: number;
    cancelled_records?: any[];
    file_path?: string;
    failed_records?: any[];
    created_by?: UserInfo1;
    created_on: string;
    cancelled?: number;
    modified_by?: UserInfo1;
    template_tag?: string;
};
type BulkResponse = {
    batch_id: string;
    is_active?: boolean;
    modified_on?: string;
    created_by?: UserInfo1;
    created_on: string;
    modified_by?: UserInfo1;
};
type UserDetail1 = {
    full_name?: string;
    user_id?: string;
    username?: string;
};
type ProductBulkRequest = {
    succeed?: number;
    failed?: number;
    template?: ProductTemplate;
    company_id?: number;
    is_active?: boolean;
    modified_on?: string;
    stage?: string;
    total?: number;
    created_by?: UserDetail1;
    file_path?: string;
    failed_records?: string[];
    cancelled_records?: string[];
    created_on?: string;
    cancelled?: number;
    modified_by?: UserDetail1;
    template_tag?: string;
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
type NestedTags = {
    tags?: string[];
};
type ProductTagsViewResponse = {
    items?: NestedTags;
};
type ProductBulkAssets = {
    company_id?: number;
    url: string;
    user: any;
};
type UserCommon = {
    company_id?: number;
    user_id?: string;
    username?: string;
};
type Items = {
    succeed?: number;
    failed?: number;
    company_id?: number;
    id?: string;
    modified_on?: string;
    is_active?: boolean;
    stage?: string;
    total?: number;
    cancelled_records?: string[];
    retry?: number;
    file_path?: string;
    failed_records?: string[];
    created_by?: UserCommon;
    created_on?: string;
    cancelled?: number;
    modified_by?: UserCommon;
    tracking_url?: string;
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
    size_distribution: SizeDistribution;
    name?: string;
    quantity?: number;
};
type GTIN = {
    primary?: boolean;
    gtin_value: any;
    gtin_type: string;
};
type InvSize = {
    is_set?: boolean;
    price?: number;
    item_width?: number;
    item_weight?: number;
    store_code: string;
    size: any;
    price_transfer?: number;
    item_length?: number;
    quantity: number;
    set?: InventorySet;
    identifiers: GTIN[];
    item_height?: number;
    currency: string;
    price_effective: number;
    item_dimensions_unit_of_measure?: string;
    item_weight_unit_of_measure?: string;
    expiration_date?: string;
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
type InventoryResponse = {
    item_id?: number;
    price?: number;
    price_effective?: number;
    store?: any;
    price_transfer?: number;
    size?: string;
    uid?: string;
    quantity?: number;
    identifiers?: any;
    seller_identifier?: string;
    currency?: string;
    inventory_updated_on?: string;
    sellable_quantity?: number;
};
type InventoryResponsePaginated = {
    items?: InventoryResponse[];
    page?: Page;
};
type ReturnConfig1 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type PriceMeta = {
    marked: number;
    transfer: number;
    updated_at?: string;
    effective: number;
    currency: string;
    tp_notes?: any;
};
type ManufacturerResponse = {
    is_default: boolean;
    address: string;
    name: string;
};
type QuantityBase = {
    updated_at?: string;
    count?: number;
};
type Quantities = {
    order_committed?: QuantityBase;
    damaged?: QuantityBase;
    not_available?: QuantityBase;
    sellable?: QuantityBase;
};
type WeightResponse = {
    is_default: boolean;
    shipping: number;
    unit: string;
};
type CompanyMeta = {
    id: number;
};
type Trader1 = {
    name: string;
    address: string[];
    type: string;
};
type DimensionResponse = {
    is_default: boolean;
    length: number;
    unit: string;
    height: number;
    width: number;
};
type BrandMeta = {
    name: string;
    id: number;
};
type InventorySellerResponse = {
    fynd_meta?: any;
    return_config?: ReturnConfig1;
    price: PriceMeta;
    expiration_date?: string;
    meta?: any;
    seller_identifier: string;
    manufacturer: ManufacturerResponse;
    country_of_origin: string;
    trace_id?: string;
    quantities?: Quantities;
    weight: WeightResponse;
    tags?: string[];
    identifier: any;
    created_by?: UserSerializer;
    company: CompanyMeta;
    _custom_json?: any;
    item_id: number;
    fynd_item_code: string;
    is_set?: boolean;
    size: string;
    is_active?: boolean;
    trader?: Trader1[];
    tax_identifier?: any;
    added_on_store?: string;
    dimension: DimensionResponse;
    raw_meta?: any;
    store: StoreMeta;
    track_inventory?: boolean;
    fragile: boolean;
    uid: string;
    stage?: string;
    set?: InventorySet;
    brand: BrandMeta;
    fynd_article_code: string;
    modified_by?: UserSerializer;
    total_quantity: number;
};
type InventorySellerIdentifierResponsePaginated = {
    items?: InventorySellerResponse[];
    page?: Page;
};
type ReturnConfig2 = {
    returnable?: boolean;
    time?: number;
    unit?: string;
};
type PriceArticle = {
    marked?: number;
    transfer?: number;
    effective?: number;
    currency?: string;
    tp_notes?: any;
};
type ManufacturerResponse1 = {
    is_default?: boolean;
    address?: string;
    name?: string;
};
type Quantity = {
    count?: number;
};
type QuantitiesArticle = {
    order_committed?: Quantity;
    damaged?: Quantity;
    not_available?: Quantity;
    sellable?: Quantity;
};
type WeightResponse1 = {
    shipping?: number;
    unit?: string;
};
type BrandMeta1 = {
    name?: string;
    id?: number;
};
type CompanyMeta1 = {
    id?: number;
};
type Trader2 = {
    name?: string;
    address?: string[];
    type?: string;
};
type DimensionResponse1 = {
    height?: number;
    length?: number;
    unit?: string;
    width?: number;
};
type ArticleStoreResponse = {
    name?: string;
    store_code?: string;
    uid?: number;
    store_type?: string;
};
type GetInventories = {
    return_config?: ReturnConfig2;
    price?: PriceArticle;
    date_meta?: DateMeta;
    total_quantity?: number;
    seller_identifier?: string;
    manufacturer?: ManufacturerResponse1;
    country_of_origin?: string;
    trace_id?: string;
    platforms?: any;
    quantities?: QuantitiesArticle;
    weight?: WeightResponse1;
    tags?: string[];
    identifier?: any;
    inventory_updated_on?: string;
    created_by?: UserSerializer;
    brand?: BrandMeta1;
    company?: CompanyMeta1;
    item_id?: number;
    is_set?: boolean;
    size?: string;
    trader?: Trader2[];
    tax_identifier?: any;
    dimension?: DimensionResponse1;
    store?: ArticleStoreResponse;
    track_inventory?: boolean;
    uid?: string;
    stage?: string;
    id?: string;
    modified_by?: UserSerializer;
    expiration_date?: string;
};
type GetInventoriesResponse = {
    items?: GetInventories[];
    page?: Page;
};
type BulkInventoryGetItems = {
    succeed?: number;
    failed?: number;
    company_id?: number;
    is_active?: boolean;
    modified_on?: string;
    stage?: string;
    total?: number;
    created_by?: any;
    id?: string;
    file_path?: string;
    failed_records?: string[];
    cancelled_records?: string[];
    created_on?: string;
    cancelled?: number;
    modified_by?: any;
};
type BulkInventoryGet = {
    items?: BulkInventoryGetItems[];
    page?: Page;
};
type InventoryJobPayload = {
    trace_id?: string;
    store_code: string;
    price?: number;
    expiration_date?: string;
    tags?: string[];
    quantity?: number;
    seller_identifier: string;
    currency?: string;
    price_effective?: number;
    item_dimensions_unit_of_measure?: string;
    price_marked?: number;
    item_weight_unit_of_measure?: string;
    total_quantity?: number;
};
type InventoryBulkRequest = {
    sizes: InventoryJobPayload[];
    company_id: number;
    user?: any;
    batch_id: string;
};
type InventoryExportRequest = {
    store?: number[];
    type?: string;
    brand?: number[];
};
type InventoryExportResponse = {
    seller_id: number;
    trigger_on?: string;
    status?: string;
    task_id: string;
    request_params?: any;
};
type InventoryExportJob = {
    seller_id: number;
    completed_on?: string;
    trigger_on?: string;
    status?: string;
    task_id: string;
    url?: string;
    request_params?: any;
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
    tags?: string[];
    total_quantity?: number;
    seller_identifier: string;
    store_id: number;
    price_effective?: number;
    price_marked?: number;
    expiration_date?: string;
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
    reason?: InventoryFailedReason;
    data?: InventoryPayload;
};
type InventoryUpdateResponse = {
    items?: InventoryResponseItem[];
    message: string;
};
type HsnUpsert = {
    tax2?: number;
    threshold1: number;
    company_id: number;
    tax_on_mrp: boolean;
    tax_on_esp?: boolean;
    is_active?: boolean;
    hs2_code: string;
    uid?: number;
    threshold2?: number;
    hsn_code: string;
    tax1: number;
};
type HsnCodesObject = {
    tax2?: number;
    threshold1?: number;
    company_id?: number;
    tax_on_mrp?: boolean;
    id?: string;
    tax_on_esp?: boolean;
    modified_on?: string;
    hs2_code?: string;
    threshold2?: number;
    hsn_code?: string;
    tax1?: number;
};
type HsnCode = {
    data?: HsnCodesObject;
};
type PageResponse = {
    item_total?: number;
    size?: number;
    current?: string;
    has_previous?: boolean;
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
    rate: number;
    effective_date: string;
    cess?: number;
    threshold: number;
};
type HSNDataInsertV2 = {
    taxes: TaxSlab[];
    type: string;
    reporting_hsn: string;
    description: string;
    modified_on?: string;
    country_code: string;
    hsn_code: string;
    created_by?: any;
    created_on?: string;
    modified_by?: any;
};
type HsnCodesListingResponseSchemaV2 = {
    items?: HSNDataInsertV2[];
    page?: PageResponse;
};
type BrandItem = {
    discount?: string;
    name?: string;
    logo?: Media;
    slug?: string;
    banners?: ImageUrls;
    uid?: number;
    departments?: string[];
    action?: Action;
};
type BrandListingResponse = {
    items?: BrandItem[];
    page: Page;
};
type Department = {
    name?: string;
    logo?: Media;
    slug?: string;
    uid?: number;
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
    name?: string;
    childs?: any[];
    slug?: string;
    banners?: ImageUrls;
    uid?: number;
    action?: Action;
    _custom_json?: any;
};
type SecondLevelChild = {
    name?: string;
    childs?: ThirdLevelChild[];
    slug?: string;
    banners?: ImageUrls;
    uid?: number;
    action?: Action;
    _custom_json?: any;
};
type Child = {
    name?: string;
    childs?: SecondLevelChild[];
    slug?: string;
    banners?: ImageUrls;
    uid?: number;
    action?: Action;
    _custom_json?: any;
};
type CategoryItems = {
    name?: string;
    childs?: Child[];
    slug?: string;
    banners?: ImageUrls;
    uid?: number;
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
    items?: ProductListingDetail[];
    filters?: ProductFilters[];
    sort_on?: ProductSortOn[];
    page: Page;
    operators?: any;
};
type ProductDetail = {
    promo_meta?: any;
    teaser_tag?: any;
    has_variant?: boolean;
    short_description?: string;
    color?: string;
    image_nature?: string;
    highlights?: string[];
    product_online_date?: string;
    grouped_attributes?: ProductDetailGroupedAttribute[];
    similars?: string[];
    slug: string;
    item_code?: string;
    medias?: Media1[];
    rating?: number;
    name?: string;
    rating_count?: number;
    type?: string;
    tryouts?: string[];
    description?: string;
    uid?: number;
    attributes?: any;
    item_type?: string;
    brand?: ProductBrand;
};
type InventoryPage = {
    item_total: number;
    next_id?: string;
    type: string;
    has_previous?: boolean;
    has_next?: boolean;
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
    item_id: number;
    size: string;
    ignored_stores?: number[];
};
type AssignStoreArticle = {
    article_assignment?: ArticleAssignment;
    query?: ArticleQuery;
    quantity?: number;
    meta?: any;
    group_id?: string;
};
type AssignStore = {
    channel_identifier?: string;
    company_id?: number;
    pincode: string;
    app_id: string;
    store_ids?: number[];
    articles: AssignStoreArticle[];
    channel_type?: string;
};
type ArticleAssignment1 = {
    strategy?: string;
    level?: string;
};
type StoreAssignResponse = {
    item_id: number;
    article_assignment: ArticleAssignment1;
    strategy_wise_listing?: any[];
    s_city?: string;
    store_pincode?: number;
    company_id?: number;
    size: string;
    _id?: string;
    uid?: string;
    price_marked?: number;
    status: boolean;
    quantity: number;
    meta?: any;
    store_id?: number;
    price_effective?: number;
    group_id?: string;
    index?: number;
};
type UserSerializer1 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type SellerPhoneNumber = {
    number: string;
    country_code: number;
};
type LocationManagerSerializer = {
    email?: string;
    name?: string;
    mobile_no: SellerPhoneNumber;
};
type LocationTimingSerializer = {
    minute?: number;
    hour?: number;
};
type LocationDayWiseSerializer = {
    closing?: LocationTimingSerializer;
    open: boolean;
    opening?: LocationTimingSerializer;
    weekday: string;
};
type LocationIntegrationType = {
    inventory?: string;
    order?: string;
};
type InvoiceCredSerializer = {
    enabled?: boolean;
    password?: string;
    username?: string;
};
type InvoiceDetailsSerializer = {
    e_invoice?: InvoiceCredSerializer;
    e_waybill?: InvoiceCredSerializer;
};
type GetAddressSerializer = {
    country?: string;
    address2?: string;
    state?: string;
    longitude?: number;
    city?: string;
    pincode?: number;
    country_code?: string;
    latitude?: number;
    address_type?: string;
    landmark?: string;
    address1?: string;
};
type UserSerializer2 = {
    contact?: string;
    user_id?: string;
    username?: string;
};
type GetCompanySerializer = {
    name?: string;
    verified_by?: UserSerializer2;
    reject_reason?: string;
    modified_on?: string;
    uid?: number;
    company_type?: string;
    stage?: string;
    verified_on?: string;
    created_by?: UserSerializer2;
    created_on?: string;
    business_type?: string;
    modified_by?: UserSerializer2;
    addresses?: GetAddressSerializer[];
};
type ProductReturnConfigSerializer = {
    store_uid?: number;
    on_same_store?: boolean;
};
type GetLocationSerializer = {
    verified_by?: UserSerializer1;
    phone_number: string;
    warnings?: any;
    manager?: LocationManagerSerializer;
    documents?: Document[];
    contact_numbers?: SellerPhoneNumber[];
    timing?: LocationDayWiseSerializer[];
    created_by?: UserSerializer1;
    integration_type?: LocationIntegrationType;
    _custom_json?: any;
    gst_credentials?: InvoiceDetailsSerializer;
    notification_emails?: string[];
    store_type?: string;
    display_name: string;
    name: string;
    address: GetAddressSerializer;
    code: string;
    modified_on?: string;
    uid?: number;
    stage?: string;
    verified_on?: string;
    company?: GetCompanySerializer;
    product_return_config?: ProductReturnConfigSerializer;
    created_on?: string;
    modified_by?: UserSerializer1;
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
    logo?: string;
    is_active?: boolean;
    uid: number;
    app_id: string;
    _custom_json?: any;
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
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type ContactDetails = {
    emails?: string[];
    phone?: SellerPhoneNumber[];
};
type Website = {
    url?: string;
};
type BusinessDetails = {
    website?: Website;
};
type GetCompanyProfileSerializerResponse = {
    franchise_enabled?: boolean;
    created_on?: string;
    business_type: string;
    mode?: string;
    name?: string;
    business_country_info?: BusinessCountryInfo;
    verified_by?: UserSerializer;
    taxes?: CompanyTaxesSerializer[];
    contact_details?: ContactDetails;
    stage?: string;
    _custom_json?: any;
    modified_by?: UserSerializer;
    business_info?: string;
    created_by?: UserSerializer;
    addresses?: GetAddressSerializer[];
    warnings?: any;
    company_type: string;
    notification_emails?: string[];
    uid: number;
    modified_on?: string;
    documents?: Document[];
    verified_on?: string;
    business_details?: BusinessDetails;
};
type CompanyTaxesSerializer1 = {
    effective_date?: string;
    enable?: boolean;
    rate?: number;
};
type CreateUpdateAddressSerializer = {
    country_code?: string;
    city: string;
    pincode: number;
    address2?: string;
    address_type: string;
    longitude: number;
    landmark?: string;
    state: string;
    latitude: number;
    country: string;
    address1: string;
};
type UpdateCompany = {
    notification_emails?: string[];
    taxes?: CompanyTaxesSerializer1[];
    franchise_enabled?: boolean;
    business_info?: string;
    business_type?: string;
    addresses?: CreateUpdateAddressSerializer[];
    warnings?: any;
    contact_details?: ContactDetails;
    company_type?: string;
    documents?: Document[];
    name?: string;
    reject_reason?: string;
    _custom_json?: any;
    business_details?: BusinessDetails;
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
    store_documents?: DocumentsObj;
    store?: DocumentsObj;
    product?: DocumentsObj;
    uid?: number;
    company_documents?: DocumentsObj;
    stage?: string;
    brand?: DocumentsObj;
};
type BrandBannerSerializer = {
    portrait?: string;
    landscape?: string;
};
type GetBrandResponseSerializer = {
    created_on?: string;
    verified_on?: string;
    name: string;
    verified_by?: UserSerializer;
    slug_key?: string;
    stage?: string;
    reject_reason?: string;
    _custom_json?: any;
    modified_by?: UserSerializer;
    banner?: BrandBannerSerializer;
    created_by?: UserSerializer;
    synonyms?: string[];
    warnings?: any;
    uid?: number;
    modified_on?: string;
    logo?: string;
    description?: string;
    mode?: string;
    _locale_language?: any;
};
type CreateUpdateBrandRequestSerializer = {
    banner?: BrandBannerSerializer;
    company_id?: number;
    uid?: number;
    synonyms?: string[];
    brand_tier?: string;
    logo: string;
    description?: string;
    name: string;
    _custom_json?: any;
    _locale_language?: any;
};
type CompanySocialAccounts = {
    name: string;
    url: string;
};
type CompanyDetails = {
    website_url?: string;
    socials?: CompanySocialAccounts[];
};
type CompanySerializer = {
    verified_by?: UserSerializer;
    notification_emails?: string[];
    business_country_info?: BusinessCountryInfo;
    created_on?: string;
    market_channels?: string[];
    _custom_json?: any;
    created_by?: UserSerializer;
    business_type: string;
    uid?: number;
    modified_on?: string;
    addresses?: GetAddressSerializer[];
    company_type: string;
    stage?: string;
    name?: string;
    verified_on?: string;
    reject_reason?: string;
    details?: CompanyDetails;
    modified_by?: UserSerializer;
};
type CompanyBrandSerializer = {
    verified_by?: UserSerializer;
    created_on?: string;
    created_by?: UserSerializer;
    uid?: number;
    modified_on?: string;
    stage?: string;
    warnings?: any;
    company?: CompanySerializer;
    verified_on?: string;
    reject_reason?: string;
    brand?: GetBrandResponseSerializer;
    modified_by?: UserSerializer;
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
    country_code?: string;
    city?: string;
    pincode?: number;
    address2?: string;
    address_type?: string;
    longitude: number;
    landmark?: string;
    state?: string;
    latitude: number;
    country?: string;
    address1?: string;
};
type LocationSerializer = {
    timing?: LocationDayWiseSerializer[];
    notification_emails?: string[];
    documents?: Document[];
    holiday?: HolidaySchemaSerializer[];
    code: string;
    uid?: number;
    stage?: string;
    manager?: LocationManagerSerializer;
    warnings?: any;
    contact_numbers?: SellerPhoneNumber[];
    gst_credentials?: InvoiceDetailsSerializer;
    company: number;
    name: string;
    store_type?: string;
    _custom_json?: any;
    address: AddressSerializer;
    display_name: string;
    product_return_config?: ProductReturnConfigSerializer;
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
    article_assignment?: _ArticleAssignment;
    group_id?: string;
    quantity?: number;
    query?: _ArticleQuery;
    meta?: any;
};
type AssignStoreRequestValidator = {
    store_ids?: number[];
    pincode?: string;
    company_id?: number;
    app_id?: string;
    articles?: _AssignStoreArticle[];
    channel_identifier?: string;
    channel_type?: string;
};
type AssignStoreResponseSerializer = {
    article_assignment?: _ArticleAssignment;
    _id?: string;
    s_city?: string;
    status?: boolean;
    uid?: string;
    company_id?: number;
    preice_effective?: number;
    store_pincode?: string;
    index?: number;
    item_id?: number;
    meta?: any;
    quantity?: number;
    store_id?: number;
    size?: string;
    price_marked?: number;
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
type State = {
    is_display?: boolean;
    is_archived?: boolean;
    is_public?: boolean;
};
type Rule = {
    min?: number;
    key?: number;
    value?: number;
    discount_qty?: number;
    max?: number;
};
type CouponAction = {
    action_date?: string;
    txn_mode?: string;
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
type PaymentAllowValue = {
    max?: number;
};
type PaymentModes = {
    types?: string[];
    codes?: string[];
    uses?: PaymentAllowValue;
    networks?: string[];
};
type BulkBundleRestriction = {
    multi_store_allowed: boolean;
};
type Restrictions = {
    uses?: UsesRestriction;
    price_range?: PriceRange;
    post_order?: PostOrder;
    user_groups?: number[];
    payments?: any;
    bulk_bundle?: BulkBundleRestriction;
    ordering_stores?: number[];
    coupon_allowed?: boolean;
    platforms?: string[];
};
type CouponAuthor = {
    created_by?: string;
    modified_by?: string;
};
type CouponSchedule = {
    end?: string;
    cron?: string;
    next_schedule?: any[];
    start?: string;
    duration?: number;
};
type RuleDefinition = {
    calculate_on: string;
    scope?: string[];
    value_type: string;
    auto_apply?: boolean;
    applicable_on: string;
    is_exact?: boolean;
    type: string;
    currency_code?: string;
};
type Validity = {
    priority?: number;
};
type CouponDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type DisplayMetaDict = {
    title?: string;
    subtitle?: string;
};
type DisplayMeta = {
    apply?: DisplayMetaDict;
    auto?: DisplayMetaDict;
    title?: string;
    description?: string;
    remove?: DisplayMetaDict;
    subtitle?: string;
};
type Ownership = {
    payable_category: string;
    payable_by: string;
};
type Validation = {
    app_id?: string[];
    anonymous?: boolean;
    user_registered_after?: string;
};
type CouponAdd = {
    state?: State;
    rule: Rule[];
    action?: CouponAction;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    type_slug: string;
    _schedule?: CouponSchedule;
    tags?: string[];
    code: string;
    rule_definition: RuleDefinition;
    validity: Validity;
    date_meta?: CouponDateMeta;
    display_meta: DisplayMeta;
    ownership: Ownership;
    validation?: Validation;
    identifiers: Identifier;
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
    state?: State;
    rule: Rule[];
    action?: CouponAction;
    restrictions?: Restrictions;
    author?: CouponAuthor;
    type_slug: string;
    _schedule?: CouponSchedule;
    tags?: string[];
    code: string;
    rule_definition: RuleDefinition;
    validity: Validity;
    date_meta?: CouponDateMeta;
    display_meta: DisplayMeta;
    ownership: Ownership;
    validation?: Validation;
    identifiers: Identifier;
};
type CouponPartialUpdate = {
    schedule?: CouponSchedule;
    archive?: boolean;
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
    uses?: PaymentAllowValue1;
    type: string;
    codes?: string[];
};
type UserRegistered = {
    end?: string;
    start?: string;
};
type Restrictions1 = {
    uses: UsesRestriction1;
    order_quantity?: number;
    anonymous_users?: boolean;
    post_order?: PostOrder1;
    user_groups?: number[];
    payments?: PromotionPaymentModes[];
    user_registered?: UserRegistered;
    user_id?: string[];
    platforms?: string[];
};
type PromotionAction = {
    action_date: string;
    action_type: string;
};
type DisplayMeta1 = {
    offer_text?: string;
    description?: string;
    name?: string;
};
type CompareObject = {
    less_than_equals?: number;
    less_than?: number;
    greater_than_equals?: number;
    equals?: number;
    greater_than?: number;
};
type ItemCriteria = {
    item_id?: number[];
    item_sku?: string[];
    all_items?: boolean;
    item_brand?: number[];
    item_size?: string[];
    item_company?: number[];
    item_exclude_category?: number[];
    item_category?: number[];
    item_exclude_sku?: string[];
    cart_quantity?: CompareObject;
    item_exclude_company?: number[];
    item_exclude_store?: number[];
    item_exclude_brand?: number[];
    buy_rules?: string[];
    item_store?: number[];
    cart_total?: CompareObject;
};
type DiscountOffer = {
    discount_price?: number;
    discount_percentage?: number;
    max_offer_quantity?: number;
    min_offer_quantity?: number;
    discount_amount?: number;
    code?: string;
    max_discount_amount?: number;
};
type DiscountRule = {
    item_criteria: ItemCriteria;
    offer: DiscountOffer;
    buy_condition: string;
    discount_type: string;
};
type PromotionAuthor = {
    created_by?: string;
    modified_by?: string;
};
type Visibility = {
    coupon_list: boolean;
    pdp: boolean;
};
type PromotionDateMeta = {
    created_on?: string;
    modified_on?: string;
};
type Ownership1 = {
    payable_category: string;
    payable_by: string;
};
type PromotionSchedule = {
    end?: string;
    cron?: string;
    published: boolean;
    next_schedule?: any[];
    start: string;
    duration?: number;
};
type PromotionListItem = {
    promo_group: string;
    restrictions?: Restrictions1;
    post_order_action?: PromotionAction;
    code?: string;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    _custom_json?: any;
    apply_all_discount?: boolean;
    discount_rules: DiscountRule[];
    author?: PromotionAuthor;
    visiblility?: Visibility;
    buy_rules: any;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    promotion_type: string;
    ownership: Ownership1;
    mode: string;
    currency?: string;
    apply_priority?: number;
    application_id: string;
    _schedule?: PromotionSchedule;
};
type PromotionsResponse = {
    page?: Page;
    items?: PromotionListItem;
};
type PromotionAdd = {
    promo_group: string;
    restrictions?: Restrictions1;
    post_order_action?: PromotionAction;
    code?: string;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    _custom_json?: any;
    apply_all_discount?: boolean;
    discount_rules: DiscountRule[];
    author?: PromotionAuthor;
    visiblility?: Visibility;
    buy_rules: any;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    promotion_type: string;
    ownership: Ownership1;
    mode: string;
    currency?: string;
    apply_priority?: number;
    application_id: string;
    _schedule?: PromotionSchedule;
};
type PromotionUpdate = {
    promo_group: string;
    restrictions?: Restrictions1;
    post_order_action?: PromotionAction;
    code?: string;
    display_meta: DisplayMeta1;
    apply_exclusive?: string;
    _custom_json?: any;
    apply_all_discount?: boolean;
    discount_rules: DiscountRule[];
    author?: PromotionAuthor;
    visiblility?: Visibility;
    buy_rules: any;
    date_meta?: PromotionDateMeta;
    stackable?: boolean;
    promotion_type: string;
    ownership: Ownership1;
    mode: string;
    currency?: string;
    apply_priority?: number;
    application_id: string;
    _schedule?: PromotionSchedule;
};
type PromotionPartialUpdate = {
    schedule?: PromotionSchedule;
    archive?: boolean;
};
type CartItem = {
    product_id: string;
    quantity?: number;
    size: string;
};
type OpenapiCartDetailsRequest = {
    cart_items?: CartItem;
};
type DisplayBreakup = {
    currency_symbol?: string;
    key?: string;
    value?: number;
    display?: string;
    message?: string[];
    currency_code?: string;
};
type RawBreakup = {
    gst_charges?: number;
    subtotal?: number;
    delivery_charge?: number;
    vog?: number;
    mrp_total?: number;
    coupon?: number;
    cod_charge?: number;
    total?: number;
    discount?: number;
    fynd_cash?: number;
    convenience_fee?: number;
    you_saved?: number;
};
type CouponBreakup = {
    is_applied?: boolean;
    value?: number;
    message?: string;
    code?: string;
    type?: string;
    uid?: string;
};
type LoyaltyPoints = {
    description?: string;
    applicable?: number;
    total?: number;
    is_applied?: boolean;
};
type CartBreakup = {
    display?: DisplayBreakup[];
    raw?: RawBreakup;
    coupon?: CouponBreakup;
    loyalty_points?: LoyaltyPoints;
};
type ProductPrice = {
    add_on?: number;
    currency_symbol?: string;
    effective?: number;
    currency_code?: string;
    selling?: number;
    marked?: number;
};
type ProductPriceInfo = {
    base?: ProductPrice;
    converted?: ProductPrice;
};
type Ownership2 = {
    payable_category?: string;
    payable_by?: string;
};
type AppliedPromotion = {
    offer_text?: string;
    amount?: number;
    promo_id?: string;
    mrp_promotion?: boolean;
    article_quantity?: number;
    promotion_type?: string;
    ownership?: Ownership2;
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
type BaseInfo = {
    uid?: number;
    name?: string;
};
type ProductArticle = {
    price?: ArticlePriceInfo;
    extra_meta?: any;
    seller?: BaseInfo;
    quantity?: number;
    size?: string;
    product_group_tags?: string[];
    type?: string;
    uid?: string;
    store?: BaseInfo;
    parent_item_identifiers?: any;
};
type ProductAvailability = {
    out_of_stock?: boolean;
    is_valid?: boolean;
    sizes?: string[];
    deliverable?: boolean;
    other_store_quantity?: number;
};
type PromoMeta = {
    message?: string;
};
type ActionQuery = {
    product_slug?: string[];
};
type ProductAction = {
    url?: string;
    type?: string;
    query?: ActionQuery;
};
type ProductImage = {
    url?: string;
    aspect_ratio?: string;
    secure_url?: string;
};
type CategoryInfo = {
    uid?: number;
    name?: string;
};
type CartProduct = {
    action?: ProductAction;
    name?: string;
    slug?: string;
    type?: string;
    images?: ProductImage[];
    uid?: number;
    categories?: CategoryInfo[];
    brand?: BaseInfo;
};
type CartProductIdentifer = {
    identifier?: string;
};
type CartProductInfo = {
    coupon_message?: string;
    key?: string;
    price?: ProductPriceInfo;
    bulk_offer?: any;
    price_per_unit?: ProductPriceInfo;
    promotions_applied?: AppliedPromotion[];
    is_set?: boolean;
    article?: ProductArticle;
    quantity?: number;
    availability?: ProductAvailability;
    discount?: string;
    message?: string;
    promo_meta?: PromoMeta;
    product?: CartProduct;
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
};
type OpenapiCartDetailsResponse = {
    is_valid?: boolean;
    breakup_values?: CartBreakup;
    message?: string;
    items?: CartProductInfo[];
};
type OpenApiErrorResponse = {
    errors?: any;
    success?: boolean;
    message?: string;
};
type ShippingAddress = {
    area_code_slug?: string;
    state?: string;
    email?: string;
    landmark?: string;
    area_code: string;
    country_code?: string;
    address_type?: string;
    pincode?: number;
    area?: string;
    meta?: any;
    country?: string;
    phone?: number;
    city?: string;
    address?: string;
    name?: string;
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
    delivery_promise?: ShipmentPromise;
    message?: string;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
};
type OpenApiFiles = {
    key: string;
    values: string[];
};
type CartItemMeta = {
    primary_item?: boolean;
    group_id?: string;
};
type OpenApiOrderItem = {
    product_id: number;
    amount_paid: number;
    files?: OpenApiFiles[];
    payment_methods: MultiTenderPaymentMethod[];
    employee_discount?: number;
    size: string;
    delivery_charges: number;
    cashback_applied: number;
    cod_charges: number;
    coupon_effective_discount: number;
    loyalty_discount?: number;
    price_marked: number;
    price_effective: number;
    quantity?: number;
    meta?: CartItemMeta;
    extra_meta?: any;
    discount: number;
};
type OpenApiPlatformCheckoutReq = {
    payment_methods: MultiTenderPaymentMethod[];
    affiliate_order_id?: string;
    employee_discount?: any;
    gstin?: string;
    order_id?: string;
    billing_address: ShippingAddress;
    coupon?: string;
    comment?: string;
    currency_code?: string;
    cart_items: OpenApiOrderItem[];
    files?: OpenApiFiles[];
    delivery_charges: number;
    cashback_applied: number;
    cod_charges: number;
    shipping_address?: ShippingAddress;
    loyalty_discount?: number;
    coupon_value: number;
    payment_mode?: string;
    cart_value: number;
    coupon_code: string;
};
type OpenApiCheckoutResponse = {
    order_ref_id?: string;
    order_id: string;
    success?: boolean;
    message?: string;
};
type AbandonedCart = {
    pick_up_customer_details?: any;
    buy_now?: boolean;
    merge_qty?: boolean;
    checkout_mode?: string;
    discount?: number;
    last_modified: string;
    cod_charges?: any;
    payments?: any;
    payment_mode?: string;
    meta?: any;
    is_default: boolean;
    payment_methods?: any[];
    is_archive?: boolean;
    gstin?: string;
    is_active?: boolean;
    order_id?: string;
    coupon?: any;
    expire_at: string;
    comment?: string;
    fc_index_map?: number[];
    user_id: string;
    _id: string;
    uid: number;
    fynd_credits?: any;
    bulk_coupon_discount?: number;
    articles: any[];
    shipments?: any[];
    cashback: any;
    app_id?: string;
    delivery_charges?: any;
    created_on: string;
    promotion?: any;
    cart_value?: number;
};
type AbandonedCartResponse = {
    success?: boolean;
    result?: any;
    message?: string;
    page?: Page;
    items?: AbandonedCart[];
};
type CartCurrency = {
    symbol?: string;
    code?: string;
};
type CartDetailResponse = {
    is_valid?: boolean;
    delivery_charge_info?: string;
    delivery_promise?: ShipmentPromise;
    gstin?: string;
    last_modified?: string;
    buy_now?: boolean;
    currency?: CartCurrency;
    restrict_checkout?: boolean;
    coupon_text?: string;
    payment_selection_lock?: PaymentSelectionLock;
    message?: string;
    checkout_mode?: string;
    comment?: string;
    id?: string;
    breakup_values?: CartBreakup;
    items?: CartProductInfo[];
};
type AddProductCart = {
    item_id?: number;
    store_id?: number;
    item_size?: string;
    seller_id?: number;
    display?: string;
    article_id?: string;
    pos?: boolean;
    quantity?: number;
    product_group_tags?: string[];
    extra_meta?: any;
    article_assignment?: any;
    parent_item_identifiers?: any;
};
type AddCartRequest = {
    items?: AddProductCart[];
};
type AddCartDetailResponse = {
    partial?: boolean;
    cart?: CartDetailResponse;
    success?: boolean;
    message?: string;
};
type UpdateProductCart = {
    item_id?: number;
    item_size?: string;
    article_id?: string;
    quantity?: number;
    item_index?: number;
    extra_meta?: any;
    parent_item_identifiers?: any;
    identifiers: CartProductIdentifer;
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
